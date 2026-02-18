Refresh activity metrics and weekly snapshot for the project dashboard.

Run these commands in order:
1. `python3 scripts/collect_activity.py` — Collect PR velocity, contributor activity, issue health, CI health, CI signal time, and release cadence for all projects
2. `python3 scripts/snapshot.py` — Take a weekly snapshot for trend tracking

After running, verify:
- Each `data/{project}/activity.json` has fresh `collected_at` timestamp
- `data/history/` contains the current week's snapshot
- Open the dashboard locally to check the Activity and Trends tabs render correctly
