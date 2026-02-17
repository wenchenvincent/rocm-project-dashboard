/**
 * Main dashboard application.
 * Loads project config + JSON data, renders cards, wires filters.
 */

(async function init() {
  const projects = await fetchJSON("_data/projects.json");
  if (!projects || !projects.projects) {
    document.getElementById("dashboard").innerHTML =
      '<p class="empty">Failed to load project data.</p>';
    return;
  }

  // Load all project data in parallel
  const names = Object.keys(projects.projects);
  const dataMap = {};

  const fetches = names.map(async (name) => {
    const [prs, issues, releases] = await Promise.all([
      fetchJSON("data/" + name + "/prs.json"),
      fetchJSON("data/" + name + "/issues.json"),
      fetchJSON("data/" + name + "/releases.json"),
    ]);
    dataMap[name] = { prs, issues, releases };
  });

  await Promise.all(fetches);

  // Find latest collected_at for header
  let latestTs = null;
  for (const name of names) {
    const d = dataMap[name];
    for (const src of [d.prs, d.issues, d.releases]) {
      if (src && src.collected_at) {
        if (!latestTs || src.collected_at > latestTs) {
          latestTs = src.collected_at;
        }
      }
    }
  }
  document.getElementById("last-updated").textContent = latestTs
    ? "Last updated: " + relativeTime(latestTs) + " (" + formatDate(latestTs) + ")"
    : "Last updated: unknown";

  // Render cards
  renderCards(projects.projects, dataMap, "all");

  // Wire filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(projects.projects, dataMap, btn.dataset.filter);
    });
  });
})();

function renderCards(projectsCfg, dataMap, filter) {
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = "";

  for (const [name, cfg] of Object.entries(projectsCfg)) {
    if (filter !== "all" && cfg.role !== filter) continue;

    const d = dataMap[name] || {};
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = buildCard(name, cfg, d);
    dashboard.appendChild(card);
  }

  if (!dashboard.children.length) {
    dashboard.innerHTML = '<p class="empty">No projects match this filter.</p>';
  }
}

function buildCard(name, cfg, d) {
  const repoUrl = "https://github.com/" + cfg.repo;
  const prs = (d.prs && d.prs.prs) || [];
  const issues = (d.issues && d.issues.issues) || [];
  const releases = (d.releases && d.releases.releases) || [];

  const openPrs = prs.filter((p) => p.state === "open");
  const latestRelease = releases.length ? releases[0].tag_name : "-";

  let html = "";

  // Header
  html += '<div class="card-header">';
  html += '<a href="' + repoUrl + '" target="_blank">' + escapeHtml(name) + "</a>";
  html += roleBadge(cfg.role);
  html += "</div>";

  // Stats
  html += '<div class="stats">';
  html += "<span>PRs: <span class='stat-value'>" + openPrs.length + "</span></span>";
  html += "<span>Issues: <span class='stat-value'>" + issues.length + "</span></span>";
  html += "<span>Release: <span class='stat-value'>" + escapeHtml(latestRelease) + "</span></span>";
  html += "</div>";

  // PRs section
  html += buildPRSection(openPrs);

  // Issues section
  html += buildIssueSection(issues);

  // Releases section
  html += buildReleaseSection(releases);

  return html;
}

function buildPRSection(prs) {
  if (!prs.length) {
    return "<details><summary>Pull Requests (0)</summary><p class='empty'>None</p></details>";
  }

  let html = "<details><summary>Pull Requests (" + prs.length + ")</summary>";
  html += "<table><tr><th>#</th><th>Title</th><th>Author</th><th>Status</th><th>Updated</th></tr>";

  for (const pr of prs.slice(0, 50)) {
    html += "<tr>";
    html += '<td><a href="' + pr.html_url + '" target="_blank">#' + pr.number + "</a></td>";
    html += '<td class="td-title" title="' + escapeHtml(pr.title) + '">' + escapeHtml(pr.title.slice(0, 60)) + "</td>";
    html += "<td>" + escapeHtml(pr.author) + "</td>";
    html += "<td>" + statusBadge(pr) + "</td>";
    html += "<td>" + relativeTime(pr.updated_at) + "</td>";
    html += "</tr>";
  }

  if (prs.length > 50) {
    html += '<tr><td colspan="5" class="empty">...and ' + (prs.length - 50) + " more</td></tr>";
  }

  html += "</table></details>";
  return html;
}

function buildIssueSection(issues) {
  if (!issues.length) {
    return "<details><summary>Issues (0)</summary><p class='empty'>None</p></details>";
  }

  let html = "<details><summary>Issues (" + issues.length + ")</summary>";
  html += "<table><tr><th>#</th><th>Title</th><th>Author</th><th>Updated</th></tr>";

  for (const issue of issues.slice(0, 50)) {
    html += "<tr>";
    html += '<td><a href="' + issue.html_url + '" target="_blank">#' + issue.number + "</a></td>";
    html += '<td class="td-title" title="' + escapeHtml(issue.title) + '">' + escapeHtml(issue.title.slice(0, 60)) + "</td>";
    html += "<td>" + escapeHtml(issue.author) + "</td>";
    html += "<td>" + relativeTime(issue.updated_at) + "</td>";
    html += "</tr>";
  }

  if (issues.length > 50) {
    html += '<tr><td colspan="4" class="empty">...and ' + (issues.length - 50) + " more</td></tr>";
  }

  html += "</table></details>";
  return html;
}

function buildReleaseSection(releases) {
  if (!releases.length) {
    return "<details><summary>Releases (0)</summary><p class='empty'>None</p></details>";
  }

  let html = "<details><summary>Releases (" + releases.length + ")</summary>";
  html += "<table><tr><th>Tag</th><th>Published</th></tr>";

  for (const r of releases) {
    html += "<tr>";
    html += '<td><a href="' + r.html_url + '" target="_blank">' + escapeHtml(r.tag_name) + "</a></td>";
    html += "<td>" + formatDate(r.published_at) + "</td>";
    html += "</tr>";
  }

  html += "</table></details>";
  return html;
}
