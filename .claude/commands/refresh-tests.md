---
description: Collect ROCm vs CUDA test pass rates for pytorch, sglang, vllm, jax
allowed-tools: [Bash, Read, Glob, Grep]
---

# Refresh Test Results

Collect unit test pass rate data (ROCm vs CUDA) for tracked projects.

## Steps

1. **Ensure clean state**: Check we are on `main` with no uncommitted changes.

```
cd /home/pensun/project-dashboard
git status
```

2. **Run test result collector**: Fetches latest CI run data from GitHub Actions for pytorch and sglang. Reads manual YAML for vllm and jax.

```
python3 scripts/collect_tests.py
```

3. **Verify collection**: Check that JSON files were created with valid data.

```
python3 -c "
import json
for name in ['pytorch', 'sglang', 'vllm', 'jax']:
    try:
        data = json.load(open(f'data/{name}/test_results.json'))
        for platform in ['rocm', 'cuda']:
            pd = data.get(platform)
            if pd and pd.get('summary'):
                print(f'{name}/{platform}: {pd[\"summary\"].get(\"pass_rate\", \"?\")}% pass rate')
            else:
                print(f'{name}/{platform}: no data')
    except FileNotFoundError:
        print(f'{name}: no test_results.json')
"
```

4. **Commit and push** (if data changed):

```
git add data/*/test_results.json
git diff --staged --quiet || git commit -m "Refresh test results $(date +%Y-%m-%d)"
git push origin main
```

## Notes

- pytorch: Automated via GHA — fetches JUnit XML artifacts for per-suite test counts
- sglang: Automated via GHA — job-level conclusions only (no per-test counts)
- vllm: Manual — Buildkite CI not accessible via GitHub API. Edit `config/test_results_manual.yaml`
- jax: Manual — ROCm CI perpetually cancelled. Edit `config/test_results_manual.yaml`
- Rate limits: Each project uses ~5-10 API calls. Well within GitHub's 5000/hour limit.
