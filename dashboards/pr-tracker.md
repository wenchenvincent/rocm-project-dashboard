# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-10-03T12:47:56Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#198490](https://github.com/pytorch/pytorch/pull/198490) | [Windows] Re-enable FBGEMM on x64 and fix MSVC AVX flag dete... | @taras-janea | open | 2026-09-24 | 2026-10-03 |
| [#199635](https://github.com/pytorch/pytorch/pull/199635) | [inductor] Wake the AsyncCompile pool for Triton-backed devi... | @KarhouTam | draft | 2026-10-03 | 2026-10-03 |
| [#199641](https://github.com/pytorch/pytorch/pull/199641) | [inductor] Pass unbacked float scalars to C++ kernels as dou... | @Sahil170595 | open | 2026-10-03 | 2026-10-03 |
| [#190440](https://github.com/pytorch/pytorch/pull/190440) | [triton] Update Triton pin to 3.9 | @warrendeng | open | 2026-07-18 | 2026-10-03 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-10-03 |
| [#193168](https://github.com/pytorch/pytorch/pull/193168) | [FSDP] Stabilize fully_shard overlap timing test | @albmalamd | open | 2026-08-12 | 2026-10-03 |
| [#199627](https://github.com/pytorch/pytorch/pull/199627) | [inductor] Save AOTI kernel params on every compile, not onl... | @shoumikhin | draft | 2026-10-03 | 2026-10-03 |
| [#199318](https://github.com/pytorch/pytorch/pull/199318) | [test] Enable mathchamp (#199318) | @Nicoshev | open | 2026-10-01 | 2026-10-03 |
| [#198120](https://github.com/pytorch/pytorch/pull/198120) | [inductor] Preserve eager conv2d backward grad_input strides... | @MBUYt0n | open | 2026-09-22 | 2026-10-03 |
| [#199360](https://github.com/pytorch/pytorch/pull/199360) | [CI] Switch CI image jenkins user from uid 1000 to 1001 | @huydhn | open | 2026-10-01 | 2026-10-03 |
| [#199624](https://github.com/pytorch/pytorch/pull/199624) | [Pipeline] Use microbatched reference in test_schedule_relea... | @pablo-garay | open | 2026-10-03 | 2026-10-03 |
| [#197100](https://github.com/pytorch/pytorch/pull/197100) | [decomp] Support matmul folding for zero-copy non-contiguous... | @ZRICHARD9527 | open | 2026-09-15 | 2026-10-03 |
| [#199291](https://github.com/pytorch/pytorch/pull/199291) | [CI] Stop double-running Inductor tests in CUDA trunk | @ethanwee1 | draft | 2026-10-01 | 2026-10-03 |
| [#199440](https://github.com/pytorch/pytorch/pull/199440) | Fix C++ tests silently not running on ROCm CI | @pablo-garay | open | 2026-10-02 | 2026-10-03 |
| [#192742](https://github.com/pytorch/pytorch/pull/192742) | [Testcase Refactoring] Add hw_classification in test/test_fx... | @dingsheng758 | open | 2026-08-10 | 2026-10-03 |
| [#194680](https://github.com/pytorch/pytorch/pull/194680) | [TEST][Inductor] Update `recover_orig_fp32_precision` to use... | @eqy | open | 2026-08-25 | 2026-10-03 |
| [#177961](https://github.com/pytorch/pytorch/pull/177961) | [ROCm] Enable native AsyncTP | @chinmaydk99 | draft | 2026-03-20 | 2026-10-03 |
| [#194078](https://github.com/pytorch/pytorch/pull/194078) | [inductor] Extend partitioned scatter to additional ops | @jataylo | open | 2026-08-19 | 2026-10-03 |
| [#197338](https://github.com/pytorch/pytorch/pull/197338) | Port [xpu][test] Port symmetric memory related tests cases a... | @madhumitha0102 | open | 2026-09-16 | 2026-10-03 |
| [#199417](https://github.com/pytorch/pytorch/pull/199417) | [dynamo] Remove Python 3.10 support code | @guilhermeleobas | draft | 2026-10-02 | 2026-10-03 |
| [#198949](https://github.com/pytorch/pytorch/pull/198949) | [dynamo] Enable nested graph breaks in PyTorch tests | @williamwen42 | open | 2026-09-28 | 2026-10-03 |
| [#199525](https://github.com/pytorch/pytorch/pull/199525) | [CUDA] Add cuBLASLt scaled grouped GEMM for tensorwise and g... | @gderossi | draft | 2026-10-02 | 2026-10-03 |
| [#199528](https://github.com/pytorch/pytorch/pull/199528) | [CUDA] Add packed MNK4 scaling support | @gderossi | draft | 2026-10-02 | 2026-10-03 |
| [#192251](https://github.com/pytorch/pytorch/pull/192251) | Serialize ninja per build directory instead of splitting it | @vineethsaivs | open | 2026-08-05 | 2026-10-03 |
| [#189017](https://github.com/pytorch/pytorch/pull/189017) | Respect the blocking parameter in torch.Event | @guangyey | open | 2026-07-06 | 2026-10-03 |
| [#198962](https://github.com/pytorch/pytorch/pull/198962) | [dynamo] Enable nested graph breaks in benchmark runners | @williamwen42 | open | 2026-09-28 | 2026-10-03 |
| [#199609](https://github.com/pytorch/pytorch/pull/199609) | [ROCm][Inductor] Reject unsafe HIP autotune launch grids | @iseeyuan | open | 2026-10-02 | 2026-10-03 |
| [#188698](https://github.com/pytorch/pytorch/pull/188698) | Make Fsspec filesystem checkpointing public and exposing cac... | @ankitaluthra1 | open | 2026-07-01 | 2026-10-03 |
| [#199535](https://github.com/pytorch/pytorch/pull/199535) | Move CI docker images off Python 3.10 | @atalman | open | 2026-10-02 | 2026-10-03 |
| [#199569](https://github.com/pytorch/pytorch/pull/199569) | Fix shared-memory race in embedding_backward_feature_kernel | @pablo-garay | open | 2026-10-02 | 2026-10-03 |
| [#194309](https://github.com/pytorch/pytorch/pull/194309) | [Inductor] Add gfx950 FlyDSL FlexAttention forward | @jiacao-amd | open | 2026-08-21 | 2026-10-03 |
| [#199558](https://github.com/pytorch/pytorch/pull/199558) | [ROCm] Unskip test_conv3d_cudnn_broken on ROCm | @dnikolaev-amd | draft | 2026-10-02 | 2026-10-03 |
| [#199504](https://github.com/pytorch/pytorch/pull/199504) | [ROCm] Add host-math and devel sysdeps to wheel RPATH | @ethanwee1 | draft | 2026-10-02 | 2026-10-03 |
| [#198678](https://github.com/pytorch/pytorch/pull/198678) | [Reland] [ROCm] Reject unregistered host pointers in getDevi... | @jeffdaily | open | 2026-09-25 | 2026-10-03 |
| [#193854](https://github.com/pytorch/pytorch/pull/193854) | [AMD][inductor] Register FlyDSL flex-attention backward as a... | @lizamd | open | 2026-08-17 | 2026-10-03 |
| [#195738](https://github.com/pytorch/pytorch/pull/195738) | Add ROCm-specific LSTM test for packed batch*seq above HIP m... | @k-artem | open | 2026-09-02 | 2026-10-03 |
| [#199595](https://github.com/pytorch/pytorch/pull/199595) | [ROCm][Inductor] Do not compile CK sources with -ffast-math | @andriy-ca | open | 2026-10-02 | 2026-10-02 |
| [#199503](https://github.com/pytorch/pytorch/pull/199503) | [ROCm] Link AOTI package samples against TheRock SDK directo... | @ethanwee1 | draft | 2026-10-02 | 2026-10-02 |
| [#199396](https://github.com/pytorch/pytorch/pull/199396) | [ROCm] Recompute ill-conditioned SVDs that rocSOLVER gesvdj ... | @pablo-garay | open | 2026-10-01 | 2026-10-02 |
| [#199547](https://github.com/pytorch/pytorch/pull/199547) | [inductor][ROCm] Only expect exp/silu property failures off ... | @warrendeng | draft | 2026-10-02 | 2026-10-02 |
| [#197642](https://github.com/pytorch/pytorch/pull/197642) | [ROCm] Add hipSPARSELt sparse MM Inductor lowering | @naromero77amd | draft | 2026-09-19 | 2026-10-02 |
| [#198465](https://github.com/pytorch/pytorch/pull/198465) | [linalg] Fix SVD driver validation and ROCm fallback semanti... | @liminfei-amd | open | 2026-09-24 | 2026-10-02 |
| [#198621](https://github.com/pytorch/pytorch/pull/198621) | [Inductor] Enable decompose_k by default on ROCm | @iupaikov-amd | open | 2026-09-25 | 2026-10-02 |
| [#197576](https://github.com/pytorch/pytorch/pull/197576) | [ROCm][ciflow/rocm-preview] Update to 10.2.0a20261002 | @chinmaydk99 | open | 2026-09-18 | 2026-10-02 |
| [#198032](https://github.com/pytorch/pytorch/pull/198032) | [ROCm] Parallelize grid_sampler_2d backward across channels | @glen-amd | open | 2026-09-21 | 2026-10-02 |
| [#191629](https://github.com/pytorch/pytorch/pull/191629) | [ROCm][Windows] Install libomp140.x86_64.dll into scikit-bui... | @ethanwee1 | draft | 2026-07-30 | 2026-10-02 |
| [#199196](https://github.com/pytorch/pytorch/pull/199196) | [ROCm] Allocate batched rocSOLVER syevd workspace from the c... | @dnikolaev-amd | draft | 2026-09-30 | 2026-10-02 |
| [#196753](https://github.com/pytorch/pytorch/pull/196753) | [ROCm] Bump trunk ROCm version to 10.1 | @zjliu-amd | draft | 2026-09-11 | 2026-10-02 |
| [#198737](https://github.com/pytorch/pytorch/pull/198737) | Fix LayerNorm returning non-zero on constant input | @demandal25 | open | 2026-09-26 | 2026-10-02 |
| [#191718](https://github.com/pytorch/pytorch/pull/191718) | [inductor] Enable the Triton grouped GEMM template on pre-Ho... | @Ansh-Karnwal | open | 2026-07-31 | 2026-10-02 |
| [#199355](https://github.com/pytorch/pytorch/pull/199355) | [ROCm][Inductor] Enable the CK-Tile GEMM backend on gfx1250 | @andriy-ca | open | 2026-10-01 | 2026-10-02 |
| [#198666](https://github.com/pytorch/pytorch/pull/198666) | [release/2.14] Run the release runner-group reconcile in pyt... | @atalman | merged | 2026-09-25 | 2026-09-29 |
| [#198644](https://github.com/pytorch/pytorch/pull/198644) | [release/2.14] [CD] Update to CUDA 13.2.2 for Linux binaries | @atalman | merged | 2026-09-25 | 2026-09-25 |
| [#194821](https://github.com/pytorch/pytorch/pull/194821) | Bump the Python 3.15 numpy pin to 2.5.2 | @pytorchbot | merged | 2026-08-25 | 2026-08-26 |
| [#194374](https://github.com/pytorch/pytorch/pull/194374) | [release/2.14] Remove CUDA 13.4 from the binary build matrix | @atalman | merged | 2026-08-21 | 2026-08-21 |
| [#193836](https://github.com/pytorch/pytorch/pull/193836) | [pytorch][PR] Migrate fastAtomicAdd to headeronly (#193176) ... | @pytorchbot | merged | 2026-08-17 | 2026-08-19 |
| [#193601](https://github.com/pytorch/pytorch/pull/193601) | [ROCm] Retry VecISA dlopen probe with import torch on cold l... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#193600](https://github.com/pytorch/pytorch/pull/193600) | [ROCm] Rewrite bundled-lib NEEDED entries after all libs are... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#193443](https://github.com/pytorch/pytorch/pull/193443) | [torch][autograd] Fix Python refcount leaks in autograd C++ ... | @pytorchbot | merged | 2026-08-13 | 2026-08-17 |
| [#193596](https://github.com/pytorch/pytorch/pull/193596) | [ROCm][libtorch] Bundle ROCm SDK deps for shared-with-deps e... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#193089](https://github.com/pytorch/pytorch/pull/193089) | [ROCm][CI] Update MI300 GPU runner labels and re-enable MI30... | @pytorchbot | merged | 2026-08-12 | 2026-08-13 |
| [#193083](https://github.com/pytorch/pytorch/pull/193083) | Add current_device_idx_expr to XPUDeviceOpOverrides | @pytorchbot | merged | 2026-08-12 | 2026-08-13 |
| [#193148](https://github.com/pytorch/pytorch/pull/193148) | [release/2.14] Revert "Migrate fastAtomicAdd to headeronly (... | @atalman | merged | 2026-08-12 | 2026-08-12 |
| [#193018](https://github.com/pytorch/pytorch/pull/193018) | [release 2.14] Apply Release only changes to 2.14 branch | @atalman | merged | 2026-08-11 | 2026-08-11 |
| [#190902](https://github.com/pytorch/pytorch/pull/190902) | [Inductor] Add FlyDSL template compilation infrastructure | @XiaobingSuper | merged | 2026-07-23 | 2026-08-11 |
| [#189318](https://github.com/pytorch/pytorch/pull/189318) | Bump pip from 26.0.1 to 26.1.2 in /.ci/docker | @dependabot[bot] | merged | 2026-07-08 | 2026-07-29 |
| [#188160](https://github.com/pytorch/pytorch/pull/188160) | [MPS] Migrate argmin/argmax from MPSGraph to Metal | @malfet | merged | 2026-06-25 | 2026-07-26 |
| [#187983](https://github.com/pytorch/pytorch/pull/187983) | Fix bmm outer product Triton launch on non-current CUDA devi... | @pytorchbot | merged | 2026-06-23 | 2026-07-24 |
| [#187973](https://github.com/pytorch/pytorch/pull/187973) | Fix Windows libtorch x86_64 and arm64 packages overwriting e... | @pytorchbot | merged | 2026-06-23 | 2026-07-24 |
| [#187417](https://github.com/pytorch/pytorch/pull/187417) | [xpu][fix] Include kernel_compile_result.h in aoti xpu.h hea... | @pytorchbot | merged | 2026-06-16 | 2026-07-17 |
| [#186015](https://github.com/pytorch/pytorch/pull/186015) | Revive CUDA 12.9 nightly binary builds | @malfet | merged | 2026-06-02 | 2026-07-10 |
| [#186654](https://github.com/pytorch/pytorch/pull/186654) | [CD] Drop CPython 3.13t from binary build matrix (#182951) | @malfet | merged | 2026-06-08 | 2026-07-09 |
| [#188117](https://github.com/pytorch/pytorch/pull/188117) | Add CUDAGraph cloning for live user outputs | @eellison | merged | 2026-06-24 | 2026-06-24 |
| [#187342](https://github.com/pytorch/pytorch/pull/187342) | [Dependabot] Update(deps): Bump transformers from 5.10.1 to ... | @dependabot[bot] | merged | 2026-06-15 | 2026-06-15 |
| [#187382](https://github.com/pytorch/pytorch/pull/187382) | Bump aiohttp from 3.13.4 to 3.14.1 in /.ci/docker | @dependabot[bot] | merged | 2026-06-15 | 2026-06-15 |
| [#187001](https://github.com/pytorch/pytorch/pull/187001) | Fetch tags in unified manywheel build job so release tags ar... | @atalman | merged | 2026-06-11 | 2026-06-11 |
| [#181721](https://github.com/pytorch/pytorch/pull/181721) | [release/2.12] Cherry-pick: [CI][Build] Goodbye Bazel | @malfet | merged | 2026-04-28 | 2026-05-29 |
| [#181364](https://github.com/pytorch/pytorch/pull/181364) | revert https://github.com/pytorch/pytorch/pull/172340 | @pytorchbot | merged | 2026-04-24 | 2026-05-28 |
| [#180903](https://github.com/pytorch/pytorch/pull/180903) | [ROCm][UT] Remove previously retained Triton 3.7 skip for to... | @pytorchbot | merged | 2026-04-20 | 2026-05-23 |
| [#180897](https://github.com/pytorch/pytorch/pull/180897) | [ROCm] Run test_scaled_mm_deepseek_error_messages on mi350 a... | @pytorchbot | merged | 2026-04-20 | 2026-05-23 |
| [#180715](https://github.com/pytorch/pytorch/pull/180715) | [ROCm] Fix evaluate_platform_supports_fp8 false-positive | @pytorchbot | merged | 2026-04-17 | 2026-05-21 |
| [#180692](https://github.com/pytorch/pytorch/pull/180692) | [ROCm] Resolve timeouts caused due to hipblasLT module creat... | @pytorchbot | merged | 2026-04-17 | 2026-05-21 |
| [#180691](https://github.com/pytorch/pytorch/pull/180691) | [ROCm] Enable ROCm swizzle check and update scaled_mm swizzl... | @pytorchbot | merged | 2026-04-17 | 2026-05-20 |
| [#180690](https://github.com/pytorch/pytorch/pull/180690) | [ROCm] Update scaled_mm DeepSeek error message | @pytorchbot | merged | 2026-04-17 | 2026-05-20 |
| [#180687](https://github.com/pytorch/pytorch/pull/180687) | [UT][ROCm][inductor] ROCm-specific XFAILS list for torchindu... | @pytorchbot | merged | 2026-04-17 | 2026-05-20 |
| [#180600](https://github.com/pytorch/pytorch/pull/180600) | [ROCm] Fix inline_asm_elementwise for ROCm | @pytorchbot | merged | 2026-04-16 | 2026-05-20 |
| [#180927](https://github.com/pytorch/pytorch/pull/180927) | [ROCm][RELEASE_ONLY] skip test_autoheuristic in-code (alread... | @pragupta | merged | 2026-04-20 | 2026-04-22 |
| [#175767](https://github.com/pytorch/pytorch/pull/175767) | [ROCm][CI] Upgrade ROCm CI to 7.2 - 4/N | @pytorchbot | merged | 2026-02-25 | 2026-03-28 |
| [#175766](https://github.com/pytorch/pytorch/pull/175766) | [ROCm] Added CUDA check to test_pattern_matcher | @pytorchbot | merged | 2026-02-25 | 2026-03-28 |
| [#175159](https://github.com/pytorch/pytorch/pull/175159) | [ROCm] forward fix #174087, take 4 | @pytorchbot | merged | 2026-02-17 | 2026-03-23 |
| [#178006](https://github.com/pytorch/pytorch/pull/178006) | [release only] Increase timeout for rocm libtorch and manywh... | @atalman | merged | 2026-03-20 | 2026-03-21 |
| [#171147](https://github.com/pytorch/pytorch/pull/171147) | [ROCm][CI] additional PLATFORM_SUPPORTS_SYMM_MEM skips | @pytorchbot | merged | 2025-12-23 | 2026-01-23 |
| [#170731](https://github.com/pytorch/pytorch/pull/170731) | Add check for GPU/cuDNN compatibility on import | @pytorchbot | merged | 2025-12-18 | 2026-01-22 |
| [#171140](https://github.com/pytorch/pytorch/pull/171140) | [ROCm] Make grouped GEMM CK opt‑in via env and default to fa... | @jagadish-amd | merged | 2025-12-22 | 2026-01-19 |
| [#170190](https://github.com/pytorch/pytorch/pull/170190) | [ROCm] Enable shared memory based pruning for Triton configs | @pytorchbot | merged | 2025-12-11 | 2026-01-16 |
| [#170112](https://github.com/pytorch/pytorch/pull/170112) | [RELEASE 2.10] Release only changes | @atalman | merged | 2025-12-10 | 2026-01-10 |
| [#164770](https://github.com/pytorch/pytorch/pull/164770) | [ROCm] Increase binary build timeout to 5 hours (300 minutes... | @pytorchbot | merged | 2025-10-06 | 2025-11-06 |
| [#164369](https://github.com/pytorch/pytorch/pull/164369) | Update Microsoft C++ Redistributable to the latest version | @pytorchbot | merged | 2025-10-01 | 2025-11-01 |
| [#164163](https://github.com/pytorch/pytorch/pull/164163) | Skip test_conv3d_cudnn_broken on ROCM | @pytorchbot | merged | 2025-09-29 | 2025-10-30 |
| [#163954](https://github.com/pytorch/pytorch/pull/163954) | Move inductor jobs 3.9->3.10 | @pytorchbot | merged | 2025-09-26 | 2025-10-27 |
| [#163804](https://github.com/pytorch/pytorch/pull/163804) | Move ROCM trunk wheel builds to 3.10 | @pytorchbot | merged | 2025-09-24 | 2025-10-25 |
| [#161816](https://github.com/pytorch/pytorch/pull/161816) | [Reland][Inductor] Prune configs that require more shared me... | @wychi | merged | 2025-08-29 | 2025-10-03 |

## jax (Upstream Watch)
Repo: `jax-ml/jax` | Last collected: 2026-10-03T12:48:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#41231](https://github.com/jax-ml/jax/pull/41231) | [ROCm] Fix copy file build to fix rbe build failures with no... | @alekstheod | open | 2026-10-02 | 2026-10-02 |
| [#41233](https://github.com/jax-ml/jax/pull/41233) | Switch to new RBE cluster for ROCm Bazel tests | @charleshofer | draft | 2026-10-02 | 2026-10-02 |
| [#41230](https://github.com/jax-ml/jax/pull/41230) | [ROCM]  Add TheRock `rocm_sysdeps/lib` to wheel RUNPATHs nee... | @pemeliya | open | 2026-10-02 | 2026-10-02 |
| [#41187](https://github.com/jax-ml/jax/pull/41187) | [ROCm] Drop gfx1250-strict from the default ROCm targets | @gulsumgudukbay | merged | 2026-10-01 | 2026-10-01 |
| [#41130](https://github.com/jax-ml/jax/pull/41130) | [ROCm] Enable the Pallas-Triton ragged_dot lowering on ROCm | @mminutoli | open | 2026-09-30 | 2026-09-30 |
| [#40877](https://github.com/jax-ml/jax/pull/40877) | [ROCM] Added gfx1250 and gfx1250-strict targets | @zahiqbal | merged | 2026-09-22 | 2026-09-30 |
| [#40972](https://github.com/jax-ml/jax/pull/40972) | [ROCm] Enable build on rocm rbe and switch to dpx runners | @alekstheod | draft | 2026-09-25 | 2026-09-25 |
| [#40859](https://github.com/jax-ml/jax/pull/40859) | [ROCm] Build with the pinned ROCm, not rules_ml_toolchain's ... | @gulsumgudukbay | merged | 2026-09-22 | 2026-09-23 |
| [#40844](https://github.com/jax-ml/jax/pull/40844) | [ROCm] Trim ROCm skip debt: enable two stale skips | @magaonka-amd | merged | 2026-09-21 | 2026-09-21 |
| [#39846](https://github.com/jax-ml/jax/pull/39846) | [ROCm] Enable previously skipped unit tests on ROCm platform | @magaonka-amd | merged | 2026-08-10 | 2026-09-21 |
| [#39848](https://github.com/jax-ml/jax/pull/39848) | [ROCm] Reenble previously skipped pallas tests | @amd-jianli12 | merged | 2026-08-10 | 2026-09-21 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-09-18 |
| [#40784](https://github.com/jax-ml/jax/pull/40784) | [ROCm] Skip the TheRock pre-release CI legs on release runs | @mminutoli | merged | 2026-09-18 | 2026-09-18 |
| [#40706](https://github.com/jax-ml/jax/pull/40706) | [ROCm] Skip torch dependency for Python 3.15 until wheels ar... | @pelumi1163 | open | 2026-09-15 | 2026-09-17 |
| [#40700](https://github.com/jax-ml/jax/pull/40700) | [ROCm] [CUDA] Fix float16 tolerance in testReducerInitial | @magaonka-amd | merged | 2026-09-15 | 2026-09-15 |
| [#40650](https://github.com/jax-ml/jax/pull/40650) | [ROCm] Avoid pwd lookups when sizing compilation cache entri... | @magaonka-amd | merged | 2026-09-13 | 2026-09-15 |
| [#40569](https://github.com/jax-ml/jax/pull/40569) | [ROCm] Run ROCm RBE bazel tests remotely | @magaonka-amd | draft | 2026-09-09 | 2026-09-11 |
| [#40427](https://github.com/jax-ml/jax/pull/40427) | [ROCm] Enable more bazel tests in ROCm CI | @magaonka-amd | merged | 2026-09-03 | 2026-09-10 |
| [#40408](https://github.com/jax-ml/jax/pull/40408) | [ROCm] Build and stamp the complete ROCm wheel set in CI | @mminutoli | merged | 2026-09-02 | 2026-09-10 |
| [#40389](https://github.com/jax-ml/jax/pull/40389) | [ROCm] Work around a rocFFT twiddle cache bug in multi-dimen... | @magaonka-amd | merged | 2026-09-02 | 2026-09-02 |
| [#40370](https://github.com/jax-ml/jax/pull/40370) | [ROCm] Drop --security-opt seccomp=unconfined from the ROCm ... | @mminutoli | merged | 2026-09-01 | 2026-09-02 |
| [#40304](https://github.com/jax-ml/jax/pull/40304) | [ROCm] Add Python 3.15 to the ROCm CI matrices | @mminutoli | merged | 2026-08-28 | 2026-09-01 |
| [#40215](https://github.com/jax-ml/jax/pull/40215) | [ROCm] Replace rocm-smi with amd-smi in CI diagnostics | @gulsumgudukbay | merged | 2026-08-25 | 2026-08-27 |
| [#40173](https://github.com/jax-ml/jax/pull/40173) |  [ROCm] Switch the ROCm CI flows from 7.14 to 10.0 | @magaonka-amd | merged | 2026-08-24 | 2026-08-26 |
| [#40225](https://github.com/jax-ml/jax/pull/40225) | Switch ROCm RBE to linux_x64_gpu_do_gfx950 pool | @charleshofer | merged | 2026-08-26 | 2026-08-26 |
| [#40076](https://github.com/jax-ml/jax/pull/40076) | [ROCm] Take the wheel metadata ROCm version from the build c... | @gulsumgudukbay | merged | 2026-08-18 | 2026-08-25 |
| [#40131](https://github.com/jax-ml/jax/pull/40131) | Remove dynamic discovery of unknown rocm wheels. | @copybara-service[bot] | merged | 2026-08-21 | 2026-08-23 |
| [#40098](https://github.com/jax-ml/jax/pull/40098) | [ROCm] Remove upload-test-artifacts from ROCm workflows | @psanal35 | merged | 2026-08-19 | 2026-08-20 |
| [#40097](https://github.com/jax-ml/jax/pull/40097) | [ROCm] Reduce pallas input/output aliasing test size on ROCm | @magaonka-amd | merged | 2026-08-19 | 2026-08-20 |
| [#39974](https://github.com/jax-ml/jax/pull/39974) | [ROCm] Make test_vmap_ellipsis insensitive to reduced-precis... | @magaonka-amd | merged | 2026-08-13 | 2026-08-19 |
| [#40029](https://github.com/jax-ml/jax/pull/40029) | [ROCm] Run the Bazel ROCm tests in the jax-base image | @magaonka-amd | merged | 2026-08-17 | 2026-08-19 |
| [#39970](https://github.com/jax-ml/jax/pull/39970) | [ROCm] Name ROCm CI jobs after the ROCm release they test | @magaonka-amd | merged | 2026-08-13 | 2026-08-19 |
| [#40001](https://github.com/jax-ml/jax/pull/40001) | [ROCm] Fix ROCm version in plugin wheel metadata | @gulsumgudukbay | merged | 2026-08-14 | 2026-08-15 |
| [#39872](https://github.com/jax-ml/jax/pull/39872) | [ROCm] Automatically collect rocm libraries needed to run th... | @draganmladjenovic | merged | 2026-08-10 | 2026-08-13 |
| [#38803](https://github.com/jax-ml/jax/pull/38803) | [ROCm] Add expanded target set for ROCm | @tsrw2048 | merged | 2026-06-26 | 2026-08-13 |
| [#39765](https://github.com/jax-ml/jax/pull/39765) | [ROCm] Drop the rocm-sdk PATH/LD_LIBRARY_PATH block from run... | @gulsumgudukbay | merged | 2026-08-05 | 2026-08-11 |
| [#39698](https://github.com/jax-ml/jax/pull/39698) | [ROCm] Point TheRock latest nightly CI at ROCm 10 wheels | @magaonka-amd | merged | 2026-08-03 | 2026-08-05 |
| [#39632](https://github.com/jax-ml/jax/pull/39632) | [ROCm] Remove the legacy ROCm GPU Post-Merge Check workflow | @magaonka-amd | merged | 2026-07-31 | 2026-08-03 |
| [#39419](https://github.com/jax-ml/jax/pull/39419) | [ROCm] Fix invalid parallel local jobs execution | @alekstheod | open | 2026-07-24 | 2026-07-28 |
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38030](https://github.com/jax-ml/jax/pull/38030) | Skip ROCm plugin discovery when JAX_PLATFORMS excludes ROCm | @factnn | open | 2026-05-28 | 2026-06-14 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#34491](https://github.com/jax-ml/jax/pull/34491) | Enable ROCm testing for threefry_partitionable PRNG tests | @hrideymarwah15 | open | 2026-01-20 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-10-03T12:48:09Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#59159](https://github.com/vllm-project/vllm/pull/59159) | [Bugfix][XPU] Make DeepSeek V4 FP8 sparse decode graph-captu... | @yongqiw-i | open | 2026-09-29 | 2026-10-03 |
| [#59160](https://github.com/vllm-project/vllm/pull/59160) | [Feature] Release the CUDA graph pool on sleep | @aoshen02 | open | 2026-09-29 | 2026-10-03 |
| [#56984](https://github.com/vllm-project/vllm/pull/56984) | [Feature] Per-row candidate IDs for prefill token scoring (M... | @aoshen02 | open | 2026-09-15 | 2026-10-03 |
| [#56708](https://github.com/vllm-project/vllm/pull/56708) | [Bugfix] DeepSeek V4/V4.1: honor enable_thinking over legacy... | @mimeding | draft | 2026-09-13 | 2026-10-03 |
| [#51406](https://github.com/vllm-project/vllm/pull/51406) | [ROCm] Enable fused QK-norm+RoPE+gate Triton kernel for Qwen... | @xuebwang-amd | open | 2026-08-07 | 2026-10-03 |
| [#59518](https://github.com/vllm-project/vllm/pull/59518) | [Frontend] Apply each endpoint's top_logprobs cut in derende... | @yinli-systems | draft | 2026-09-30 | 2026-10-03 |
| [#58625](https://github.com/vllm-project/vllm/pull/58625) | [Core] Add --release-weight-page-cache to drop checkpoint pa... | @vMaroon | open | 2026-09-24 | 2026-10-03 |
| [#58181](https://github.com/vllm-project/vllm/pull/58181) | [Frontend] Integer token IDs for generate output logprobs (G... | @yinli-systems | open | 2026-09-22 | 2026-10-03 |
| [#57442](https://github.com/vllm-project/vllm/pull/57442) | [Frontend][Core] Sampled-token logprob fast path for /infere... | @yinli-systems | open | 2026-09-17 | 2026-10-03 |
| [#50535](https://github.com/vllm-project/vllm/pull/50535) | [ROCm][Perf] Use AITER tuned GEMM for the MoE router gate | @amd-sriram | open | 2026-07-31 | 2026-10-03 |
| [#59280](https://github.com/vllm-project/vllm/pull/59280) | [ROCm][Perf] gfx950: use FlyDSL fp8 MQA logits kernel for th... | @amd-sriram | open | 2026-09-29 | 2026-10-03 |
| [#59420](https://github.com/vllm-project/vllm/pull/59420) | [ROCm][Bugfix] Pass per-sequence context lengths to the AITE... | @amd-sriram | open | 2026-09-30 | 2026-10-03 |
| [#59421](https://github.com/vllm-project/vllm/pull/59421) | [ROCm][Perf] Allow DSA indexer native decode above next_n=2 | @amd-sriram | open | 2026-09-30 | 2026-10-03 |
| [#59422](https://github.com/vllm-project/vllm/pull/59422) | [ROCm][Perf] gfx950: use FlyDSL paged MQA logits kernel for ... | @amd-sriram | open | 2026-09-30 | 2026-10-03 |
| [#58588](https://github.com/vllm-project/vllm/pull/58588) | [Frontend] Add output_mode to /inference/v1/generate (RFC #5... | @hickeyma | merged | 2026-09-24 | 2026-10-03 |
| [#59554](https://github.com/vllm-project/vllm/pull/59554) | [watermarking] Add DFlash support to dual-key gumbel-max wat... | @shernshiou | open | 2026-10-01 | 2026-10-03 |
| [#57812](https://github.com/vllm-project/vllm/pull/57812) | [XPU][CI] Don't force ViT  cudagraph capture in the Qwen2.5-... | @faaany | draft | 2026-09-20 | 2026-10-03 |
| [#59866](https://github.com/vllm-project/vllm/pull/59866) | [Kernel] Add opt-in SM90 Triton MXFP8 W8A8 linear backend | @liuyao0322 | open | 2026-10-03 | 2026-10-03 |
| [#54706](https://github.com/vllm-project/vllm/pull/54706) | [ROCm][RDNA3] Fix W4A16 split-K accuracy and determinism | @AIwork4me | open | 2026-09-01 | 2026-10-03 |
| [#59827](https://github.com/vllm-project/vllm/pull/59827) | [Model] Add Nemotron 3.5 ASR transcription support | @Sohaib-Ahmed21 | open | 2026-10-02 | 2026-10-03 |
| [#54348](https://github.com/vllm-project/vllm/pull/54348) | [Bugfix] Resolve admission deadlock for blocked-waiting stat... | @Hridanshu4004 | open | 2026-08-29 | 2026-10-03 |
| [#53692](https://github.com/vllm-project/vllm/pull/53692) | [CI][Docs] Fix decode/prefill consistency test prefix constr... | @LioEinaudi | open | 2026-08-25 | 2026-10-03 |
| [#55485](https://github.com/vllm-project/vllm/pull/55485) | [MyPy][4/N] Fix mypy errors in medium-hard tests/ dirs | @theSatvik | open | 2026-09-05 | 2026-10-03 |
| [#59863](https://github.com/vllm-project/vllm/pull/59863) | [DeepSeek-V4-P1] Add standalone batch-invariant SiLU FP8 qua... | @inaniloquentee | draft | 2026-10-03 | 2026-10-03 |
| [#58519](https://github.com/vllm-project/vllm/pull/58519) | [Attention][Perf] Reduce FlashInfer DCP prefill overhead | @YangXu1990uiuc | draft | 2026-09-24 | 2026-10-03 |
| [#53948](https://github.com/vllm-project/vllm/pull/53948) | [MRV2][PP] Defer sampled-result receives | @chengchengpei | open | 2026-08-26 | 2026-10-03 |
| [#58861](https://github.com/vllm-project/vllm/pull/58861) | [Kimi-K3][ROCm] AttnRes: runtime strides, packed D loads, an... | @xiaohuguo2023 | open | 2026-09-26 | 2026-10-03 |
| [#59860](https://github.com/vllm-project/vllm/pull/59860) | [Bugfix][CPU] Replace fixed-table sampling with bucketed rej... | @Vegetog | open | 2026-10-03 | 2026-10-03 |
| [#59858](https://github.com/vllm-project/vllm/pull/59858) | [CI] Automatic quarantine for flaky tests (per hardware back... | @mahendrarathore1742 | open | 2026-10-03 | 2026-10-03 |
| [#59105](https://github.com/vllm-project/vllm/pull/59105) | [Bugfix][Spec Decode] Reserve the bonus KV slot for fill-in ... | @notimesea | open | 2026-09-28 | 2026-10-03 |
| [#59564](https://github.com/vllm-project/vllm/pull/59564) | [Perf] Use value-only reduction for FP8 group quantization | @porridgewithraisins | open | 2026-10-01 | 2026-10-03 |
| [#56148](https://github.com/vllm-project/vllm/pull/56148) | [Attention][Spec Decode] Multi-query Triton split-K for spec... | @venkywonka | open | 2026-09-09 | 2026-10-03 |
| [#54472](https://github.com/vllm-project/vllm/pull/54472) | [Bugfix][DCP] Fall back for unsupported direct A2A layouts | @saichowdary007 | open | 2026-08-30 | 2026-10-03 |
| [#54327](https://github.com/vllm-project/vllm/pull/54327) | [Feature][KV Offload] Add bounded capacity and LRU eviction ... | @akalin9507 | open | 2026-08-29 | 2026-10-03 |
| [#59347](https://github.com/vllm-project/vllm/pull/59347) | [Bugfix][KV Connector][Mooncake] Suppress completion for emp... | @wangyicong52 | merged | 2026-09-30 | 2026-10-03 |
| [#59811](https://github.com/vllm-project/vllm/pull/59811) | [Docs] Clarify that vLLM does not isolate tenants sharing a ... | @SunnyR | open | 2026-10-02 | 2026-10-03 |
| [#59587](https://github.com/vllm-project/vllm/pull/59587) | bench: add --metrics-url override for metrics scraping behin... | @xzwgit | open | 2026-10-01 | 2026-10-03 |
| [#59523](https://github.com/vllm-project/vllm/pull/59523) | [ROCm] Enable the cuMem CUDA-graph pool offload on ROCm | @aoshen02 | draft | 2026-10-01 | 2026-10-03 |
| [#49263](https://github.com/vllm-project/vllm/pull/49263) | [Perf] [Feat] [ROCm] Add densemha support to ROCm AITER Spar... | @tjtanaa | open | 2026-07-21 | 2026-10-03 |
| [#59164](https://github.com/vllm-project/vllm/pull/59164) | [Bugfix][KVConnector] Exclude synchronous hybrid loads from ... | @whx-sjtu | open | 2026-09-29 | 2026-10-03 |
| [#58968](https://github.com/vllm-project/vllm/pull/58968) | [ROCm][KVConnector] Fix K3 PD transfer lifetimes and stream ... | @whx-sjtu | draft | 2026-09-28 | 2026-10-03 |
| [#51274](https://github.com/vllm-project/vllm/pull/51274) | [ROCm][Kimi-K3] Add opt-in gfx942 MXFP4-to-int4 conversion | @maeehart | merged | 2026-08-06 | 2026-10-03 |
| [#59504](https://github.com/vllm-project/vllm/pull/59504) | [Bugfix][Core] Exempt exactly the blocks an async KV load wr... | @ivanium | merged | 2026-09-30 | 2026-10-03 |
| [#58014](https://github.com/vllm-project/vllm/pull/58014) | [Bugfix][ROCm] Preserve config during GPU memory profiling | @Thiago4532 | open | 2026-09-21 | 2026-10-03 |
| [#59852](https://github.com/vllm-project/vllm/pull/59852) | [ROCm][MoE] Enable MoRI FP4 dispatch for DeepSeek V4.1 a4w4 | @Fangzhou-Ai | draft | 2026-10-03 | 2026-10-03 |
| [#58048](https://github.com/vllm-project/vllm/pull/58048) | [Bugfix][XPU] Guard DeepSeek V4 CuTe DSL dispatch with CUDA ... | @zhangwei217245 | open | 2026-09-22 | 2026-10-03 |
| [#59850](https://github.com/vllm-project/vllm/pull/59850) | [CI] Drop duplicate bf16 skinny GEMM test from Kimi K3 B200 ... | @khluu | merged | 2026-10-03 | 2026-10-03 |
| [#59841](https://github.com/vllm-project/vllm/pull/59841) | [ROCm][CI/Build] Add fix for Distributed DP Basic with AITER... | @rasmith | open | 2026-10-03 | 2026-10-03 |
| [#56679](https://github.com/vllm-project/vllm/pull/56679) | [ROCm][CI] Extend AMD coverage for distributed, model, and e... | @AndreasKaratzas | merged | 2026-09-13 | 2026-10-03 |
| [#59849](https://github.com/vllm-project/vllm/pull/59849) | [Perf][DSv4.1] Register CPU-offloaded Engram tables at their... | @gitbisector | draft | 2026-10-03 | 2026-10-03 |
| [#59848](https://github.com/vllm-project/vllm/pull/59848) | [Bugfix][Qwen4Exp] Pin the offloaded PLE table at its exact ... | @gitbisector | open | 2026-10-03 | 2026-10-03 |
| [#59661](https://github.com/vllm-project/vllm/pull/59661) | [Bugfix] Log CRIU failure details before snapshot cleanup | @matteso1 | merged | 2026-10-01 | 2026-10-03 |
| [#59699](https://github.com/vllm-project/vllm/pull/59699) | [Bugfix] Avoid InfiniBand state in TP1 snapshots | @matteso1 | merged | 2026-10-01 | 2026-10-03 |
| [#58439](https://github.com/vllm-project/vllm/pull/58439) | [Qwen4Exp] Checkpoint-mapped PLE storage for unified-memory ... | @jschmied | open | 2026-09-23 | 2026-10-03 |
| [#59685](https://github.com/vllm-project/vllm/pull/59685) | [WIP][ROCm][DSv4] AITER MegaMoEV2 Integration For DeepSeek V... | @micah-wil | draft | 2026-10-01 | 2026-10-03 |
| [#59733](https://github.com/vllm-project/vllm/pull/59733) | [Bugfix][Kimi-K3] Declare max_tp_shards on the DSpark MLA KV... | @hyukjlee | open | 2026-10-02 | 2026-10-03 |
| [#59334](https://github.com/vllm-project/vllm/pull/59334) | [ROCm] Test AiterExperts token padding: inf/nan garbage rows | @divakar-amd | draft | 2026-09-30 | 2026-10-03 |
| [#59693](https://github.com/vllm-project/vllm/pull/59693) | [ROCm][Perf] Kimi-K3: token-sharded residual stream for long... | @vanshbhatia-amd | open | 2026-10-01 | 2026-10-03 |
| [#59050](https://github.com/vllm-project/vllm/pull/59050) | [CI] Allowlist-shrink batch 2: wire 9 tests/models/ files in... | @wjabbour | open | 2026-09-28 | 2026-10-03 |
| [#59275](https://github.com/vllm-project/vllm/pull/59275) | [Feature][KV Connector] Add UMBP standalone mode | @YukioZzz | draft | 2026-09-29 | 2026-10-03 |
| [#59333](https://github.com/vllm-project/vllm/pull/59333) | [ROCm][CI][AiterExperts] Add test coverage for hidden/interm... | @divakar-amd | merged | 2026-09-30 | 2026-10-03 |
| [#54916](https://github.com/vllm-project/vllm/pull/54916) | [ROCm][Perf][M3] Triton fp32 router GEMM for decode-sized M | @benenzhu | closed | 2026-09-02 | 2026-10-03 |
| [#58890](https://github.com/vllm-project/vllm/pull/58890) | [Bugfix][Model] Fix M-RoPE offset double-count in Qwen3-Omni | @C1ves | merged | 2026-09-27 | 2026-10-03 |
| [#59568](https://github.com/vllm-project/vllm/pull/59568) | [TEST][XPU][CI] disable xpu tests for nonexistent input norm... | @microslaw | merged | 2026-10-01 | 2026-10-03 |
| [#59320](https://github.com/vllm-project/vllm/pull/59320) | [XPU] Use encoder-only model runner for EC producer instance... | @zhenwei-intel | merged | 2026-09-30 | 2026-10-03 |
| [#52641](https://github.com/vllm-project/vllm/pull/52641) | [EPLB] Add contention-aware expert migration batching | @DOCCA0 | merged | 2026-08-17 | 2026-10-03 |
| [#59288](https://github.com/vllm-project/vllm/pull/59288) | [CI/Build][NVIDIA] Build Rubin images on the public nvidia/c... | @wangshangsam | merged | 2026-09-29 | 2026-10-03 |
| [#57443](https://github.com/vllm-project/vllm/pull/57443) | [GLM 5.3 Perf] Enable fused multi-step decode, 13.3% E2E thr... | @yewentao256 | merged | 2026-09-17 | 2026-10-03 |
| [#54857](https://github.com/vllm-project/vllm/pull/54857) | [ROCm] Fuse MLA dual RMSNorm + FP8 group quant for DeepSeek-... | @eky-amd | open | 2026-09-02 | 2026-10-02 |
| [#58476](https://github.com/vllm-project/vllm/pull/58476) | [Docs] Add ERNIE 4.5 to batch invariance tested models | @yifanFengg | merged | 2026-09-23 | 2026-10-02 |
| [#57995](https://github.com/vllm-project/vllm/pull/57995) | [Perf][MoE] Support fp8 combine in FlashInfer one-sided MoE ... | @Ayu190505 | merged | 2026-09-21 | 2026-10-02 |
| [#57942](https://github.com/vllm-project/vllm/pull/57942) | [ROCm] Dspark MLA module | @gronsti-amd | draft | 2026-09-21 | 2026-10-02 |
| [#54049](https://github.com/vllm-project/vllm/pull/54049) | [feat] FlashInfer CuteDSL MegaMoE integration  | @jdebache | merged | 2026-08-27 | 2026-10-02 |
| [#57602](https://github.com/vllm-project/vllm/pull/57602) | [ROCm] Enable Hisparse on ROCm : Sparse MLA Hot-Buffering | @afriedri | draft | 2026-09-18 | 2026-10-02 |
| [#59015](https://github.com/vllm-project/vllm/pull/59015) | [Bugfix][Frontend] Avoid generation for empty streaming inpu... | @nvbfalk | merged | 2026-09-28 | 2026-10-02 |
| [#53250](https://github.com/vllm-project/vllm/pull/53250) | [Bugfix][MoRIIO] Prevent remote KV reload after decoder pree... | @zzaebok | open | 2026-08-21 | 2026-10-02 |
| [#59800](https://github.com/vllm-project/vllm/pull/59800) | [Perf] Use value-only reduction for native per-token FP8 qua... | @jackLei0901 | merged | 2026-10-02 | 2026-10-02 |
| [#59796](https://github.com/vllm-project/vllm/pull/59796) | [Bugfix] Bump tokenizers to 0.23.2 for duplicate-pattern sup... | @djramic | merged | 2026-10-02 | 2026-10-02 |
| [#59779](https://github.com/vllm-project/vllm/pull/59779) | [Bugfix][Watermarking] Keep draft prompt lengths valid under... | @simon-veitner-redhat | merged | 2026-10-02 | 2026-10-02 |
| [#56403](https://github.com/vllm-project/vllm/pull/56403) | [Frontend] Constrain non-strict GLM-4.7 tool calls with a sh... | @Dovis01 | merged | 2026-09-11 | 2026-10-02 |
| [#59781](https://github.com/vllm-project/vllm/pull/59781) | [Refactor] Remove dead env and config | @yewentao256 | merged | 2026-10-02 | 2026-10-02 |
| [#58399](https://github.com/vllm-project/vllm/pull/58399) | [Feature] Add native ModelExpress weight transfer backend | @nv-hwoo | merged | 2026-09-23 | 2026-10-02 |
| [#59464](https://github.com/vllm-project/vllm/pull/59464) | [GLM5.3 Perf] Reuse sparse MLA index conversion across layer... | @yewentao256 | merged | 2026-09-30 | 2026-10-02 |
| [#53020](https://github.com/vllm-project/vllm/pull/53020) | [Bugfix] Tie lm_head.weight for Nemotron Parse when checkpoi... | @aniskumar-nv | merged | 2026-08-20 | 2026-10-02 |
| [#59550](https://github.com/vllm-project/vllm/pull/59550) | [ROCm][Bugfix] Fix ROCM_ATTN sliding-window boundary | @tangzzycc | open | 2026-10-01 | 2026-10-02 |
| [#59753](https://github.com/vllm-project/vllm/pull/59753) | [Perf][Qwen4Exp] Add SM121 TP=1 skinny-GEMM plans | @stecasta | merged | 2026-10-02 | 2026-10-02 |
| [#59731](https://github.com/vllm-project/vllm/pull/59731) | [Perf] Tune MoE weighted-sum kernel launch configuration | @jinzhen-lin | merged | 2026-10-02 | 2026-10-02 |
| [#55686](https://github.com/vllm-project/vllm/pull/55686) | [Quantization] Enable shared expert fusion compatibility wit... | @fxmarty-amd | open | 2026-09-07 | 2026-10-02 |
| [#59481](https://github.com/vllm-project/vllm/pull/59481) | [Minimax-M3] Keep the native FP8 MMA in the Triton indexer s... | @rmhaskarnvidia | merged | 2026-09-30 | 2026-10-02 |
| [#59802](https://github.com/vllm-project/vllm/pull/59802) | [ROCm][DSv4.1][Perf] Overlap the mHC gate projection with at... | @cpersson-amd | draft | 2026-10-02 | 2026-10-02 |
| [#59332](https://github.com/vllm-project/vllm/pull/59332) | [ROCm][CI] Add test coverage for VLLM_ROCM_MOE_PADDING memor... | @divakar-amd | merged | 2026-09-30 | 2026-10-02 |
| [#59525](https://github.com/vllm-project/vllm/pull/59525) | [CI] Use vllm_runner in fusions_e2e conftest for reliable GP... | @divakar-amd | merged | 2026-10-01 | 2026-10-02 |
| [#59782](https://github.com/vllm-project/vllm/pull/59782) | [ROCm][DSv4.1][Perf] Quantize the activation inside the MXFP... | @cpersson-amd | draft | 2026-10-02 | 2026-10-02 |
| [#59447](https://github.com/vllm-project/vllm/pull/59447) | [ROCm][Build] Fail fast when `setup.py develop` deps aren't ... | @divakar-amd | open | 2026-09-30 | 2026-10-02 |
| [#59752](https://github.com/vllm-project/vllm/pull/59752) | [Bugfix][Quark] Pass grouped-routing arguments to OCP MX mon... | @aoshen02 | merged | 2026-10-02 | 2026-10-02 |
| [#58623](https://github.com/vllm-project/vllm/pull/58623) | [Distributed] Enable custom all-reduce under VLLM_BATCH_INVA... | @sfeng33 | merged | 2026-09-24 | 2026-10-02 |
| [#59229](https://github.com/vllm-project/vllm/pull/59229) | [CI][Kimi-K3] Test prefix cache reuse with KV offload, P/D a... | @ZJY0516 | merged | 2026-09-29 | 2026-10-02 |
| [#59158](https://github.com/vllm-project/vllm/pull/59158) | [Feature] Offload KV-init runtime state on sleep | @aoshen02 | merged | 2026-09-29 | 2026-10-02 |
| [#59774](https://github.com/vllm-project/vllm/pull/59774) | [ROCm] Octave KV (`ROCM_OCTAVE`): native 3-bit KV cache back... | @JartX | draft | 2026-10-02 | 2026-10-02 |
| [#59739](https://github.com/vllm-project/vllm/pull/59739) | [ROCm][Attention] MXFP4 KV cache with native FP8 x FP4 spars... | @amd-dlimpus | open | 2026-10-02 | 2026-10-02 |
| [#56063](https://github.com/vllm-project/vllm/pull/56063) | [XPU][Kernel] Tune Triton W8A8 block-FP8 GEMM for Intel B70 | @pmanczak | merged | 2026-09-09 | 2026-10-02 |
| [#58569](https://github.com/vllm-project/vllm/pull/58569) | [ROCm][Perf][GLM-5.3-Flash] Remove redundant copy after ragg... | @simondanielsson | merged | 2026-09-24 | 2026-10-02 |
| [#50582](https://github.com/vllm-project/vllm/pull/50582) | [ROCm][Kimi-K3] aiter moe environment variable cleanup | @hongxiayang | merged | 2026-07-31 | 2026-10-02 |
| [#59761](https://github.com/vllm-project/vllm/pull/59761) | [Perf][MoE] Fold routed_scaling_factor into output transform... | @shantipriya-amd | draft | 2026-10-02 | 2026-10-02 |
| [#55161](https://github.com/vllm-project/vllm/pull/55161) | [Bugfix][LoRA] Fall back for high-rank MoE LoRA | @xiaoyu-xyz | merged | 2026-09-03 | 2026-10-02 |
| [#58167](https://github.com/vllm-project/vllm/pull/58167) | [ROCm][Perf][GLM-5.3-Flash] Add AITER topk backend for decod... | @simondanielsson | merged | 2026-09-22 | 2026-10-02 |
| [#59437](https://github.com/vllm-project/vllm/pull/59437) | [ROCm][Perf] AITER FlyDSL kernels for the QSA indexer and sp... | @mjkvaak-amd | draft | 2026-09-30 | 2026-10-02 |
| [#57925](https://github.com/vllm-project/vllm/pull/57925) | [ROCm][DO NOT MERGE] RDNA3 (gfx1100) full inference stack — ... | @JartX | draft | 2026-09-21 | 2026-10-02 |
| [#56469](https://github.com/vllm-project/vllm/pull/56469) | [Bugfix][KV Cache] Exclude KpoolTailSpec from the generic sl... | @HzTTT | open | 2026-09-11 | 2026-10-02 |
| [#57705](https://github.com/vllm-project/vllm/pull/57705) | [Bugfix][KVConnector] Fix MoRI-IO WRITE-mode requests strand... | @akshayv | open | 2026-09-19 | 2026-10-02 |
| [#59553](https://github.com/vllm-project/vllm/pull/59553) | [ROCm][Perf] Fuse the MXFP4 activation quant into the GDN ga... | @mjkvaak-amd | draft | 2026-10-01 | 2026-10-02 |
| [#58344](https://github.com/vllm-project/vllm/pull/58344) | [ROCm][Perf] Kimi-K3 enable prefill checkpoints on ROCm | @kliuae | merged | 2026-09-23 | 2026-10-02 |
| [#59500](https://github.com/vllm-project/vllm/pull/59500) | [Bugfix] Keep batch-invariance NCCL pins out of the weight-t... | @guanxingithub | merged | 2026-09-30 | 2026-10-02 |
| [#57767](https://github.com/vllm-project/vllm/pull/57767) | [ROCm] Add native HIP RDNA3/RDNA4 custom all-reduce backend | @dongdongzhao1121 | open | 2026-09-20 | 2026-10-02 |
| [#55917](https://github.com/vllm-project/vllm/pull/55917) | [ROCm][Perf] Add FlyDSL RDNA4 all-reduce | @big-yellow-duck | open | 2026-09-08 | 2026-10-02 |
| [#57900](https://github.com/vllm-project/vllm/pull/57900) | [ROCm][Bugfix] Make the RoPE + KV-cache fusion reachable thr... | @ZhengGong-amd | open | 2026-09-21 | 2026-10-02 |
| [#59156](https://github.com/vllm-project/vllm/pull/59156) | [Feature] Release WorkspaceManager scratch on sleep | @aoshen02 | merged | 2026-09-29 | 2026-10-02 |
| [#57387](https://github.com/vllm-project/vllm/pull/57387) | [Model] Use upstream GLM-5.3 and Qwen4-Exp configs and proce... | @hmellor | merged | 2026-09-17 | 2026-10-02 |
| [#45017](https://github.com/vllm-project/vllm/pull/45017) | [Bugfix][ROCm][FLA] Fix Triton compilation crash with num_st... | @z-priyanshu | open | 2026-06-09 | 2026-10-02 |
| [#54805](https://github.com/vllm-project/vllm/pull/54805) | [ROCm][BugFix] Revert AITER PA gluon decode from ROCM_AITER_... | @ukannika | merged | 2026-09-01 | 2026-10-02 |
| [#59700](https://github.com/vllm-project/vllm/pull/59700) | [Bugfix][CI] Widen DBO+DP+EP GSM8K accuracy margin on ROCm | @divakar-amd | merged | 2026-10-01 | 2026-10-01 |
| [#59666](https://github.com/vllm-project/vllm/pull/59666) | [ROCm][CI] Raise the MI355 DeepSeek-R1 GSM8K startup wait to... | @aarushjain29 | merged | 2026-10-01 | 2026-10-01 |
| [#59300](https://github.com/vllm-project/vllm/pull/59300) | [Attention][MiniMax-M3] NVFP4 KV cache on the MSA sparse att... | @zyongye | merged | 2026-09-29 | 2026-10-01 |
| [#59593](https://github.com/vllm-project/vllm/pull/59593) | [ROCm][CI] Drop two no-GPU AMD mirrors from the CPU test are... | @stefankoncarevic | merged | 2026-10-01 | 2026-10-01 |
| [#54061](https://github.com/vllm-project/vllm/pull/54061) | [Profiler][GPU] Extend CUDA graph capture profiling to the V... | @devalshahamd | open | 2026-08-27 | 2026-10-01 |
| [#57497](https://github.com/vllm-project/vllm/pull/57497) | [Qwen4Exp][ROCm] PLE n-gram table CPU offload | @mrodden | merged | 2026-09-18 | 2026-10-01 |
| [#58797](https://github.com/vllm-project/vllm/pull/58797) | [ROCm][Perf] Allocate the pinned PLE prefetch buffer lazily | @mrodden | merged | 2026-09-25 | 2026-10-01 |
| [#59295](https://github.com/vllm-project/vllm/pull/59295) | [ROCm][Attention] Support Prefix-LM for ROCM_AITER_UNIFIED_A... | @MdTanwer | open | 2026-09-29 | 2026-10-01 |
| [#58769](https://github.com/vllm-project/vllm/pull/58769) | [ROCm][Triton] Migrate Kimi-K3 kernels from make_block_ptr t... | @JadenMathias | merged | 2026-09-25 | 2026-10-01 |
| [#57978](https://github.com/vllm-project/vllm/pull/57978) | [ROCm][Perf] Parallelise AITER MLA page-index expansion over... | @fululi12 | merged | 2026-09-21 | 2026-10-01 |
| [#59454](https://github.com/vllm-project/vllm/pull/59454) | [Bugfix][ROCm] Use a zero default for masked scales in the M... | @cagrikymk | merged | 2026-09-30 | 2026-10-01 |
| [#59595](https://github.com/vllm-project/vllm/pull/59595) | [ROCm][CI] Drop four no-GPU CPU groups from the legacy AMD p... | @stefankoncarevic | merged | 2026-10-01 | 2026-10-01 |
| [#55368](https://github.com/vllm-project/vllm/pull/55368) | [ROCm][MoE] Pad the AITER MoE intermediate size at allocatio... | @sshlyapn | merged | 2026-09-04 | 2026-09-30 |
| [#57979](https://github.com/vllm-project/vllm/pull/57979) | [ROCm][Perf][GLM-5.3-Flash] Stride-aware decode KDA | @simondanielsson | merged | 2026-09-21 | 2026-09-30 |
| [#53492](https://github.com/vllm-project/vllm/pull/53492) | [ROCm][MLA] Enable sparse MLA Gluon kernel from Aiter | @cagrikymk | merged | 2026-08-24 | 2026-09-29 |
| [#59008](https://github.com/vllm-project/vllm/pull/59008) | [CI][Bugfix] Relax packed_qk_rope_ correctness test to one U... | @stefankoncarevic | merged | 2026-09-28 | 2026-09-28 |
| [#57568](https://github.com/vllm-project/vllm/pull/57568) | [Bugfix][Spec Decode] Implement get_top_tokens() on the ROCm... | @BaoYunkai | merged | 2026-09-18 | 2026-09-28 |
| [#58983](https://github.com/vllm-project/vllm/pull/58983) | [ROCm][Refactor] Move DeepSeek-V4/V4.1 multi-stream overlap ... | @shen-shanshan | merged | 2026-09-28 | 2026-09-28 |
| [#58646](https://github.com/vllm-project/vllm/pull/58646) | [Skills] Update kernel-microbenchmark to include ROCm | @gau-nernst | merged | 2026-09-25 | 2026-09-28 |
| [#58867](https://github.com/vllm-project/vllm/pull/58867) | [ROCm] Bump AITER to v0.1.23 | @Fangzhou-Ai | merged | 2026-09-27 | 2026-09-28 |
| [#58923](https://github.com/vllm-project/vllm/pull/58923) | [ROCm][Bugfix] Fall back to default GEMM for CPU tensors on ... | @Fangzhou-Ai | merged | 2026-09-27 | 2026-09-27 |
| [#57407](https://github.com/vllm-project/vllm/pull/57407) | [ROCm][Perf] Enable layer-aware CSA2 multi-stream overlap fo... | @shen-shanshan | merged | 2026-09-17 | 2026-09-27 |
| [#57982](https://github.com/vllm-project/vllm/pull/57982) | [Bugfix] Don't drop the rest of the allocator config when to... | @okorzh-amd | merged | 2026-09-21 | 2026-09-25 |
| [#58045](https://github.com/vllm-project/vllm/pull/58045) | [ROCm][Kimi-K3] Optimize low-concurrency speculative KDA | @jiacao-amd | merged | 2026-09-22 | 2026-09-25 |
| [#58510](https://github.com/vllm-project/vllm/pull/58510) | [ROCm][Perf] MXFP8 GEMM on native 32x32 block scales for gfx... | @Fangzhou-Ai | merged | 2026-09-24 | 2026-09-25 |
| [#58456](https://github.com/vllm-project/vllm/pull/58456) | [ROCm][DSv4.1][Perf] Emit MXFP8 from the sparse decode reduc... | @Fangzhou-Ai | merged | 2026-09-23 | 2026-09-24 |
| [#58419](https://github.com/vllm-project/vllm/pull/58419) | [ROCm][Bugfix] Fix TileLang mHC fused RMSNorm on 64-wide wav... | @djramic | merged | 2026-09-23 | 2026-09-23 |
| [#58093](https://github.com/vllm-project/vllm/pull/58093) | [ROCm][Test] Cover MoRI graph replay and output lifetime | @AndreasKaratzas | merged | 2026-09-22 | 2026-09-23 |
| [#58095](https://github.com/vllm-project/vllm/pull/58095) | [ROCm][CI] Validate Mooncake and NIXL prefill/decode accurac... | @AndreasKaratzas | merged | 2026-09-22 | 2026-09-23 |
| [#50212](https://github.com/vllm-project/vllm/pull/50212) | [ROCm][Perf] Extend QK-norm/RoPE/KV-cache fusion to MRoPE | @vorapolsiloai | merged | 2026-07-29 | 2026-09-23 |
| [#55721](https://github.com/vllm-project/vllm/pull/55721) | [XPU] Wire up SYCL apply_rotary_emb kernel in ApplyRotaryEmb | @mganczarenko | merged | 2026-09-07 | 2026-09-23 |
| [#53283](https://github.com/vllm-project/vllm/pull/53283) | [ROCm][Perf] Use wvSplitK for single-output GEMMs | @tangzzycc | merged | 2026-08-21 | 2026-09-23 |
| [#52052](https://github.com/vllm-project/vllm/pull/52052) | [ROCm] Use silu_and_mul_with_clamp's torch._C op | @tpopp | merged | 2026-08-12 | 2026-09-22 |
| [#57435](https://github.com/vllm-project/vllm/pull/57435) | [ROCm][DSv4.1][Perf] Fuse the inverse RoPE into the sparse d... | @Fangzhou-Ai | merged | 2026-09-17 | 2026-09-22 |
| [#58136](https://github.com/vllm-project/vllm/pull/58136) | [Bugfix][ROCm] Dispatch the QuantFP8 CUDA fallback on the cl... | @stefankoncarevic | merged | 2026-09-22 | 2026-09-22 |
| [#47842](https://github.com/vllm-project/vllm/pull/47842) | [ROCm][Perf] Avoid extra reshape kernel in Qwen GDN output n... | @mjkvaak-amd | merged | 2026-07-07 | 2026-09-22 |
| [#50592](https://github.com/vllm-project/vllm/pull/50592) | [Kimi-K3][AMD] Return KDA and MLA projection outputs directl... | @LiuYinfeng01 | merged | 2026-07-31 | 2026-09-22 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-10-03T12:48:19Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#42381](https://github.com/sgl-project/sglang/pull/42381) | [cake_kernels] kvcache / sampling / quantization adapters + ... | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#42386](https://github.com/sgl-project/sglang/pull/42386) | [cake_kernels] MiniMax-H3 diffusion and multimodal adapters | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#42385](https://github.com/sgl-project/sglang/pull/42385) | [cake_kernels] communication adapters (MoE A2A, Kimi-K3 TP12... | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#42384](https://github.com/sgl-project/sglang/pull/42384) | [cake_kernels] attention adapters (dense FMHA, MLA, sparse /... | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#42383](https://github.com/sgl-project/sglang/pull/42383) | [cake_kernels] MoE adapters (routing, fused experts, LatentM... | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#42382](https://github.com/sgl-project/sglang/pull/42382) | [cake_kernels] GEMM adapters (grouped FP8, NVFP4, Kimi-K3 FP... | @yyihuang | draft | 2026-10-03 | 2026-10-03 |
| [#39818](https://github.com/sgl-project/sglang/pull/39818) | [MoE] Use FlashInfer A2A for prefill instead of AG+RS | @b8zhong | open | 2026-09-16 | 2026-10-03 |
| [#42360](https://github.com/sgl-project/sglang/pull/42360) | [Fix] Select the earliest completing literal stop in specula... | @hulkbig | open | 2026-10-03 | 2026-10-03 |
| [#42356](https://github.com/sgl-project/sglang/pull/42356) | [Fix] Reject non-positive server stream intervals | @hulkbig | open | 2026-10-03 | 2026-10-03 |
| [#36727](https://github.com/sgl-project/sglang/pull/36727) | [Diffusion] Preserve mapped component weights during low-mem... | @kevin-mii | open | 2026-08-27 | 2026-10-03 |
| [#42121](https://github.com/sgl-project/sglang/pull/42121) | fix(diffusion): load serialized H3 INT8 in ComfyUI integrate... | @Tokha233 | open | 2026-10-01 | 2026-10-03 |
| [#40703](https://github.com/sgl-project/sglang/pull/40703) | [PD] Add opt-in prefill-complete decode KV allocation | @ekrim | open | 2026-09-22 | 2026-10-03 |
| [#42276](https://github.com/sgl-project/sglang/pull/42276) | [sgl-router] Credit routed prompts before their KV events ar... | @sherlockwu | open | 2026-10-02 | 2026-10-03 |
| [#42275](https://github.com/sgl-project/sglang/pull/42275) | [sgl-router] Repair KV-event sequence gaps from the engine's... | @sherlockwu | open | 2026-10-02 | 2026-10-03 |
| [#42274](https://github.com/sgl-project/sglang/pull/42274) | Advertise the KV-event replay endpoint in /server_info | @sherlockwu | open | 2026-10-02 | 2026-10-03 |
| [#42198](https://github.com/sgl-project/sglang/pull/42198) | [AMD] Select the fused AR+RMSNorm 1-stage kernel by token co... | @ZhengGong-amd | open | 2026-10-02 | 2026-10-03 |
| [#42354](https://github.com/sgl-project/sglang/pull/42354) | [mem_cache] Run mamba models on `UnifiedRadixCache` when the... | @hnyls2002 | open | 2026-10-03 | 2026-10-03 |
| [#42210](https://github.com/sgl-project/sglang/pull/42210) | [WIP][sglang-miles] Add GPU delta decode and in-place weight... | @zianglih | draft | 2026-10-02 | 2026-10-03 |
| [#41906](https://github.com/sgl-project/sglang/pull/41906) |  [Diffusion] MiniMax-H3 fuse the video VAE decoder's RMSNorm... | @niehen6174 | open | 2026-09-30 | 2026-10-03 |
| [#41671](https://github.com/sgl-project/sglang/pull/41671) | [diffusion] Fuse Flux3 rowwise FP8 quantization with Triton | @trebladev | open | 2026-09-29 | 2026-10-03 |
| [#38641](https://github.com/sgl-project/sglang/pull/38641) | [Deps] Upgrade the CUDA PyTorch stack to 2.14 | @mmangkad | open | 2026-09-09 | 2026-10-03 |
| [#41128](https://github.com/sgl-project/sglang/pull/41128) | feat(metrics): expose deferred decode KV release metrics | @ToLiveAndLove | open | 2026-09-24 | 2026-10-03 |
| [#39479](https://github.com/sgl-project/sglang/pull/39479) | Fix unified HiCache physical transfers | @ZYHowell | open | 2026-09-14 | 2026-10-03 |
| [#37458](https://github.com/sgl-project/sglang/pull/37458) | Fix DP rendezvous port allocation outside ephemeral range | @Oxygen56 | open | 2026-09-01 | 2026-10-03 |
| [#40102](https://github.com/sgl-project/sglang/pull/40102) | [kv-shard 3/4] Enable Control Plane C | @Shunkangz | open | 2026-09-18 | 2026-10-03 |
| [#42051](https://github.com/sgl-project/sglang/pull/42051) | [PD] Validate decode state layout once at registration | @ShangmingCai | open | 2026-10-01 | 2026-10-03 |
| [#42245](https://github.com/sgl-project/sglang/pull/42245) | [DeepSeek-V4.1] Unify mHC into one state machine and drop me... | @DarkSharpness | open | 2026-10-02 | 2026-10-03 |
| [#41895](https://github.com/sgl-project/sglang/pull/41895) | [Diffusion] Action API: decode JSON pixel lists to numpy at ... | @niehen6174 | open | 2026-09-30 | 2026-10-03 |
| [#42348](https://github.com/sgl-project/sglang/pull/42348) | [Refactor] Let the remaining placement consumers read the pa... | @ch-wan | open | 2026-10-03 | 2026-10-03 |
| [#42197](https://github.com/sgl-project/sglang/pull/42197) | [Unified Cache][UMBP] Support DeepSeek-V4.1 and packed draft... | @AMD-yanfeiwang | open | 2026-10-02 | 2026-10-03 |
| [#42380](https://github.com/sgl-project/sglang/pull/42380) | [Fix] Abort held decode rebootstrap requests during pause | @yanfei16 | open | 2026-10-03 | 2026-10-03 |
| [#42379](https://github.com/sgl-project/sglang/pull/42379) | [Fix] Keep ignore-eos admission states sorted | @yanfei16 | open | 2026-10-03 | 2026-10-03 |
| [#41660](https://github.com/sgl-project/sglang/pull/41660) | [DSv4.1] Fused c1/c2 compress for eager extend, faster c2 de... | @DarkSharpness | merged | 2026-09-29 | 2026-10-03 |
| [#42378](https://github.com/sgl-project/sglang/pull/42378) | [Fix] Count admitted request ranges in prefill tile budgets | @yanfei16 | open | 2026-10-03 | 2026-10-03 |
| [#41658](https://github.com/sgl-project/sglang/pull/41658) | [DSv4.1] Faster fp4 index-K gather and combine_topk_swa_indi... | @DarkSharpness | merged | 2026-09-29 | 2026-10-03 |
| [#41657](https://github.com/sgl-project/sglang/pull/41657) | [DSv4.1] Fold q_rope_store into fused_q_norm_rope | @DarkSharpness | merged | 2026-09-29 | 2026-10-03 |
| [#41982](https://github.com/sgl-project/sglang/pull/41982) | [AMD] gfx950 small-batch MoE: expert-count gate for the smal... | @chuyeh | open | 2026-10-01 | 2026-10-03 |
| [#34200](https://github.com/sgl-project/sglang/pull/34200) | [AMD] Port CP V2 to the DeepSeek-V4 HIP backend | @AMD-yanfeiwang | open | 2026-08-10 | 2026-10-03 |
| [#42312](https://github.com/sgl-project/sglang/pull/42312) | [Refactor] Drop the reduction-skip mechanisms stage boundari... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42311](https://github.com/sgl-project/sglang/pull/42311) | [Refactor] Build the ZAYA1, IQuest-Q1 and Gemma 4 decoders f... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42310](https://github.com/sgl-project/sglang/pull/42310) | [Fix] GigaChat 3.5: apply the sandwich norms to the complete... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42309](https://github.com/sgl-project/sglang/pull/42309) | [Refactor] Build the GLM-4, GLM-Image and Granite MoE hybrid... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42305](https://github.com/sgl-project/sglang/pull/42305) | [Fix] EXAONE MoE under DP attention and DeepEP | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42308](https://github.com/sgl-project/sglang/pull/42308) | [Refactor] Build the Llama and Nemotron-NAS decoders from st... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42304](https://github.com/sgl-project/sglang/pull/42304) | [Refactor] Build the ERNIE 4.5 VL MoE and EXAONE MoE decoder... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42303](https://github.com/sgl-project/sglang/pull/42303) | [Fix] EXAONE and ERNIE 4.5 VL MoE architecture, backend and ... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42307](https://github.com/sgl-project/sglang/pull/42307) | [Refactor] Build the Qwen2 decoders from stage boundaries | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42306](https://github.com/sgl-project/sglang/pull/42306) | [Fix] Jet-Nemotron build and Granite MoE hybrid final norm | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42302](https://github.com/sgl-project/sglang/pull/42302) | [Fix] Step-3.5 DeepEP routed scaling and Sarvam shared exper... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42301](https://github.com/sgl-project/sglang/pull/42301) | [Refactor] Let stage boundaries complete every stage-output ... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#42300](https://github.com/sgl-project/sglang/pull/42300) | [Refactor] Drop TBO op methods that no strategy ever schedul... | @ch-wan | merged | 2026-10-03 | 2026-10-03 |
| [#34153](https://github.com/sgl-project/sglang/pull/34153) | [Scheduler] Fix final chunked-prefill abort commit race | @jeremyzhang866 | open | 2026-08-09 | 2026-10-03 |
| [#42362](https://github.com/sgl-project/sglang/pull/42362) | [mem_cache] Replace `is_chunk_cache` / `is_tree_cache` with ... | @hnyls2002 | merged | 2026-10-03 | 2026-10-03 |
| [#37077](https://github.com/sgl-project/sglang/pull/37077) | [PD] Centralize drain-aware abort acknowledgements | @livingshade | merged | 2026-08-30 | 2026-10-03 |
| [#41985](https://github.com/sgl-project/sglang/pull/41985) | [Diffusion][MiniMax-H3] Route SubBlock sparse attention in h... | @saatwiknagpal | merged | 2026-10-01 | 2026-10-03 |
| [#42203](https://github.com/sgl-project/sglang/pull/42203) | [Fix] Guard DeepSeek NVFP4 shared-expert fusion for LoRA and... | @jybsuper | merged | 2026-10-02 | 2026-10-03 |
| [#42255](https://github.com/sgl-project/sglang/pull/42255) | [diffusion] Fix native FP8 format handling for FLUX 3 rowwis... | @Tokha233 | merged | 2026-10-02 | 2026-10-03 |
| [#42229](https://github.com/sgl-project/sglang/pull/42229) | [AMD] Small-M FP8 block-scale GEMM with fused activation qua... | @chuyeh | draft | 2026-10-02 | 2026-10-03 |
| [#34355](https://github.com/sgl-project/sglang/pull/34355) | [XPU] Support decode context parallelism (DCP) on Intel XPU | @AnuSajikumar6264 | open | 2026-08-11 | 2026-10-03 |
| [#41725](https://github.com/sgl-project/sglang/pull/41725) | [ROCm] GLM-5.2 decode path: decode-shaped MoE/MLA tiles, spl... | @jiejingzhangamd | open | 2026-09-29 | 2026-10-03 |
| [#42268](https://github.com/sgl-project/sglang/pull/42268) | [ROCm][GLM-5.3] Allow AITER shared-expert fusion at TP2 (EP1... | @willhu-jpg | open | 2026-10-02 | 2026-10-03 |
| [#42215](https://github.com/sgl-project/sglang/pull/42215) | [HiCache] Fix DeepSeek-V4 storage backend crash from missing... | @mmangkad | merged | 2026-10-02 | 2026-10-03 |
| [#42214](https://github.com/sgl-project/sglang/pull/42214) | [Fix] Validate per-layer rope_parameters on transformers 5.1... | @Jiminator | merged | 2026-10-02 | 2026-10-03 |
| [#41870](https://github.com/sgl-project/sglang/pull/41870) | [AMD] GLM-5.3-Flash: fuse shared expert and KDA projections ... | @Jacob0226 | merged | 2026-09-30 | 2026-10-03 |
| [#41133](https://github.com/sgl-project/sglang/pull/41133) | [AMD] One-launch small-M MoE router for Qwen3.5 on gfx950 | @chuyeh | open | 2026-09-24 | 2026-10-03 |
| [#41134](https://github.com/sgl-project/sglang/pull/41134) | [AMD] Small-M W8A8 FP8 projection GEMM for Qwen3.5 AttnFP8 o... | @chuyeh | open | 2026-09-24 | 2026-10-03 |
| [#42183](https://github.com/sgl-project/sglang/pull/42183) | [Feature] Serve pplx-decider decision checkpoints on /v1/sys... | @rwang5203 | merged | 2026-10-02 | 2026-10-03 |
| [#42240](https://github.com/sgl-project/sglang/pull/42240) | [diffusion] fix: keep residual_gate_add on the JIT CUDA path... | @niehen6174 | merged | 2026-10-02 | 2026-10-03 |
| [#41251](https://github.com/sgl-project/sglang/pull/41251) | [Perf] Optimize DeepSeek V4.1 Flash Hopper paths and Blackwe... | @BBuf | merged | 2026-09-25 | 2026-10-03 |
| [#41622](https://github.com/sgl-project/sglang/pull/41622) | [diffusion] Respect explicit residency over pipeline preload... | @mickqian | merged | 2026-09-29 | 2026-10-03 |
| [#41389](https://github.com/sgl-project/sglang/pull/41389) | [AMD] Run Quark MXFP4 MoE as W4A16 via triton_kernels on RDN... | @yichiche | open | 2026-09-27 | 2026-10-03 |
| [#42295](https://github.com/sgl-project/sglang/pull/42295) | [Session] Run streaming sessions only on `UnifiedRadixCache`... | @hnyls2002 | merged | 2026-10-03 | 2026-10-03 |
| [#41729](https://github.com/sgl-project/sglang/pull/41729) | [QSA] Enable breakable prefill CUDA graphs for text-only Qwe... | @YAMY1234 | merged | 2026-09-29 | 2026-10-03 |
| [#42169](https://github.com/sgl-project/sglang/pull/42169) | [HiCache][AMD] Move page_first_direct pages with the gather ... | @salexspb | draft | 2026-10-02 | 2026-10-02 |
| [#42294](https://github.com/sgl-project/sglang/pull/42294) | [Fix] DeepSeek-V4 on SM120: plan the C4 indexer's row chunks... | @bill-h-lin | open | 2026-10-02 | 2026-10-02 |
| [#42287](https://github.com/sgl-project/sglang/pull/42287) | [Refactor][TCPCG] Retire backend selection and configuration... | @Oasis-Git | open | 2026-10-02 | 2026-10-02 |
| [#41783](https://github.com/sgl-project/sglang/pull/41783) | [PD][Spec] Give a PD decode's first EAGLE draft step a propo... | @salexspb | open | 2026-09-30 | 2026-10-02 |
| [#42119](https://github.com/sgl-project/sglang/pull/42119) | [AMD] Enable GPTQ and AutoRound INT4 checkpoints | @clintg6 | open | 2026-10-01 | 2026-10-02 |
| [#41488](https://github.com/sgl-project/sglang/pull/41488) | [AMD] Add opt-in MiniMax-M3 TP4 indexer context partitioning | @ThomasNing | merged | 2026-09-27 | 2026-10-02 |
| [#41994](https://github.com/sgl-project/sglang/pull/41994) | [AMD] Faster DSpark scheduling and per-step verify width for... | @jhinpan | open | 2026-10-01 | 2026-10-02 |
| [#42279](https://github.com/sgl-project/sglang/pull/42279) | [AMD] Keep speculative overlap scheduling on the forward str... | @jhinpan | open | 2026-10-02 | 2026-10-02 |
| [#42266](https://github.com/sgl-project/sglang/pull/42266) | [ROCm][DSA] Enable fused k-pool DSA metadata on HIP | @willhu-jpg | open | 2026-10-02 | 2026-10-02 |
| [#42152](https://github.com/sgl-project/sglang/pull/42152) | [AMD] Drop static input_scale on aiter per-token FP8 path (u... | @spandantiwari | open | 2026-10-01 | 2026-10-02 |
| [#34502](https://github.com/sgl-project/sglang/pull/34502) | [ROCm] Fuse per-token activation quant into RMSNorm for per-... | @Emmanuel0612 | open | 2026-08-12 | 2026-10-02 |
| [#34010](https://github.com/sgl-project/sglang/pull/34010) | [ROCm] Fix gfx942 LDS overflow in DSA bf16 decode under dp-a... | @reger-men | open | 2026-08-07 | 2026-10-02 |
| [#42256](https://github.com/sgl-project/sglang/pull/42256) | [diffusion] Guard PTX residual kernels on HIP and exercise Q... | @Tokha233 | open | 2026-10-02 | 2026-10-02 |
| [#41282](https://github.com/sgl-project/sglang/pull/41282) | [AMD][ROCm] Keep cos_sin_cache fp32 on HIP for fused QSA ind... | @ChangLiu0709 | merged | 2026-09-25 | 2026-10-02 |
| [#42250](https://github.com/sgl-project/sglang/pull/42250) | test(diffusion): isolate performance guard platform policies | @Tokha233 | open | 2026-10-02 | 2026-10-02 |
| [#41980](https://github.com/sgl-project/sglang/pull/41980) | [AMD] Recalibrate test_quark_mxfp4 GSM8K thresholds to obser... | @michaelzhang-ai | open | 2026-10-01 | 2026-10-02 |
| [#41161](https://github.com/sgl-project/sglang/pull/41161) | [AMD] [GLM5] Fuse shared expert into AITER MoE on gfx950 | @Raiden-Makoto | merged | 2026-09-24 | 2026-10-02 |
| [#40585](https://github.com/sgl-project/sglang/pull/40585) | [diffusion][AMD] kernels: Fix fused QK-norm JIT kernels on R... | @avjves | open | 2026-09-21 | 2026-10-02 |
| [#42243](https://github.com/sgl-project/sglang/pull/42243) | [AMD] Fix multimodal-gen diffusion unit suite on MI300 | @michaelzhang-ai | open | 2026-10-02 | 2026-10-02 |
| [#42055](https://github.com/sgl-project/sglang/pull/42055) | [AMD][V4.1][*/N] Fuse MXFP8 activation quant into producer k... | @kkHuang-amd | merged | 2026-10-01 | 2026-10-02 |
| [#41973](https://github.com/sgl-project/sglang/pull/41973) | [AMD][CI] Partition stage-b-test-1-gpu-small-amd-mi35x to st... | @michaelzhang-ai | merged | 2026-10-01 | 2026-10-02 |
| [#40556](https://github.com/sgl-project/sglang/pull/40556) | [DeepSeek V4.1] Add DeepSelect JIT kernel. | @yuyu5333 | merged | 2026-09-21 | 2026-10-02 |
| [#39273](https://github.com/sgl-project/sglang/pull/39273) | [AMD] [GLM-5.3-Flash] Enable FP8 and MXFP4 serving on gfx950 | @hdt98 | merged | 2026-09-13 | 2026-10-01 |
| [#39130](https://github.com/sgl-project/sglang/pull/39130) | Add triton autotune on the Mamba2 SSD kernels | @elvischenv | merged | 2026-09-11 | 2026-10-01 |
| [#41528](https://github.com/sgl-project/sglang/pull/41528) | [NPU] [Diffusion] Fix NPU multimodal-gen CI | @OrangeRedeng | merged | 2026-09-28 | 2026-10-01 |
| [#41981](https://github.com/sgl-project/sglang/pull/41981) | [AMD][V4.1][*/N] Greedy dspark draft/accept under SGLANG_SIM... | @1am9trash | merged | 2026-10-01 | 2026-10-01 |
| [#42017](https://github.com/sgl-project/sglang/pull/42017) | [AMD][V4.1][*/N] OPUS sparse prefill on gfx950 through layou... | @RolaoDenthu | merged | 2026-10-01 | 2026-10-01 |
| [#42014](https://github.com/sgl-project/sglang/pull/42014) | [AMD][V4.1][*/N] Build DSpark draft metadata inside the CUDA... | @kkHuang-amd | merged | 2026-10-01 | 2026-10-01 |
| [#39166](https://github.com/sgl-project/sglang/pull/39166) | [AMD][DSV4] feat: enable PD-disagg with fp8 unified_kv on gf... | @amd-danli103 | merged | 2026-09-12 | 2026-10-01 |
| [#40811](https://github.com/sgl-project/sglang/pull/40811) | [AMD][Quark] Serve the Kimi-K3 MXFP4 checkpoint on ROCm | @yuychang | merged | 2026-09-23 | 2026-10-01 |
| [#41807](https://github.com/sgl-project/sglang/pull/41807) | [Fix] Shard MoE WNA16 and Quark INT4-FP8 weights by the MoE ... | @ch-wan | merged | 2026-09-30 | 2026-09-30 |
| [#41308](https://github.com/sgl-project/sglang/pull/41308) | dsv4.1-amd: serve DeepSeek-V4.1 on gfx950 | @kevin-mii | merged | 2026-09-26 | 2026-09-30 |
| [#41687](https://github.com/sgl-project/sglang/pull/41687) | [ROCm] Select DSA indexer top-k wave size by arch (wave32 on... | @jiaryang | merged | 2026-09-29 | 2026-09-30 |
| [#40911](https://github.com/sgl-project/sglang/pull/40911) | [AMD] Gate flashinfer and TRT-LLM DSA paths on CUDA | @jiaryang | merged | 2026-09-23 | 2026-09-30 |
| [#41513](https://github.com/sgl-project/sglang/pull/41513) | [AMD] Resolve QSA packed-varlen decode to aiter on HIP | @michaelzhang-ai | merged | 2026-09-28 | 2026-09-30 |
| [#41065](https://github.com/sgl-project/sglang/pull/41065) | Fix MUSA detection under torch.compile fullgraph | @rumitdesai | merged | 2026-09-24 | 2026-09-30 |
| [#38583](https://github.com/sgl-project/sglang/pull/38583) | [ROCm] GLM-5.2: gfx950 four-kernel fused DSA indexer decode ... | @JohnQinAMD | merged | 2026-09-09 | 2026-09-30 |
| [#28734](https://github.com/sgl-project/sglang/pull/28734) | [AMD] Fix Load and Inference of MLA models with Quark PTPC F... | @ColinZ22 | merged | 2026-06-19 | 2026-09-30 |
| [#33804](https://github.com/sgl-project/sglang/pull/33804) | [Intel][XPU]Enable chunked prefill scnearios for XPU with UT | @AnuSajikumar6264 | merged | 2026-08-06 | 2026-09-29 |
| [#41021](https://github.com/sgl-project/sglang/pull/41021) | dsv4.1-amd: fused mHC boundary and all-reduce + mHC post ker... | @kevin-mii | merged | 2026-09-24 | 2026-09-28 |
| [#41020](https://github.com/sgl-project/sglang/pull/41020) | dsv4.1-amd: gfx950 sparse decode attention and sorted top-k | @kevin-mii | merged | 2026-09-24 | 2026-09-28 |
| [#41002](https://github.com/sgl-project/sglang/pull/41002) | [CI] fix CI regression on xeon | @xinguozhu-2026 | merged | 2026-09-24 | 2026-09-28 |
| [#41137](https://github.com/sgl-project/sglang/pull/41137) | [AMD] Register Triton data movement tests in PR CI | @michaelzhang-ai | merged | 2026-09-24 | 2026-09-28 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-10-03T12:48:23Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#12073](https://github.com/triton-lang/triton/pull/12073) | [AMD][Gluon] Adds a standalone Gluon example for clustered w... | @jungpark-mlir | draft | 2026-10-02 | 2026-10-03 |
| [#12058](https://github.com/triton-lang/triton/pull/12058) | [AMD] Build the scheduling DAG on the live codegen MachineFu... | @tyb0807 | merged | 2026-10-01 | 2026-10-03 |
| [#12083](https://github.com/triton-lang/triton/pull/12083) | Catch LLVM diagnostic and raise Python exception in both Nvi... | @woct0rdho | open | 2026-10-03 | 2026-10-03 |
| [#12082](https://github.com/triton-lang/triton/pull/12082) | feat(amd): expose gfx1250 WMMA arbitration control | @nithinsubbiah | draft | 2026-10-03 | 2026-10-03 |
| [#12080](https://github.com/triton-lang/triton/pull/12080) | [AMD] Run the MIR-stage tests in AMD CI | @tyb0807 | merged | 2026-10-02 | 2026-10-02 |
| [#11945](https://github.com/triton-lang/triton/pull/11945) | [AMD] Add GFX1250-strict Support | @amirumoAMD | merged | 2026-09-24 | 2026-10-02 |
| [#12062](https://github.com/triton-lang/triton/pull/12062) | [AMD] Launch the MIR-stage subprocess tests with sys.executa... | @tyb0807 | merged | 2026-10-02 | 2026-10-02 |
| [#12064](https://github.com/triton-lang/triton/pull/12064) | [AMD] Find llc in Triton's own LLVM package for the DAG cros... | @tyb0807 | merged | 2026-10-02 | 2026-10-02 |
| [#11486](https://github.com/triton-lang/triton/pull/11486) | [AMD] Use hardware cvt instructions for OCP fp8 casts on gfx... | @erizheng-amd | draft | 2026-08-27 | 2026-10-02 |
| [#11896](https://github.com/triton-lang/triton/pull/11896) | [AMD] Do not insert barriers between mbarrier-synchronized T... | @nirvedhmeshram | open | 2026-09-21 | 2026-10-02 |
| [#11068](https://github.com/triton-lang/triton/pull/11068) | [AMD] Propagate discardable attributes on the small-tensor p... | @pabloantoniom | draft | 2026-07-28 | 2026-10-02 |
| [#12063](https://github.com/triton-lang/triton/pull/12063) | [AMD][gfx1250] Turn on kernarg SGPR preload | @antiagainst | merged | 2026-10-02 | 2026-10-02 |
| [#12060](https://github.com/triton-lang/triton/pull/12060) | [AMD] Avoid redundant batch warps in dot layouts | @pculaf | open | 2026-10-01 | 2026-10-01 |
| [#12050](https://github.com/triton-lang/triton/pull/12050) | [AMD] Enable test_debug.py in CI | @alefimov-amd | merged | 2026-10-01 | 2026-10-01 |
| [#11707](https://github.com/triton-lang/triton/pull/11707) | [AMD] Fix partitioned shared and WMMA layouts for CGAs | @jungpark-mlir | merged | 2026-09-11 | 2026-10-01 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-10-01 |
| [#11911](https://github.com/triton-lang/triton/pull/11911) | [AMD] Allow the tagged barrier lowering on RDNA in CU mode | @mgehre-amd | draft | 2026-09-22 | 2026-10-01 |
| [#11922](https://github.com/triton-lang/triton/pull/11922) | [AMD] Fix RDNA DRAM bandwidth estimates | @lstojilj-amd | open | 2026-09-23 | 2026-10-01 |
| [#11910](https://github.com/triton-lang/triton/pull/11910) | [AMD] Support controlling WGP/CU mode for RDNA | @mgehre-amd | merged | 2026-09-22 | 2026-10-01 |
| [#11909](https://github.com/triton-lang/triton/pull/11909) | [AMD][BACKEND] Emit packed scaled_upcast layout for dot deco... | @AlexAUT | merged | 2026-09-22 | 2026-09-30 |
| [#12043](https://github.com/triton-lang/triton/pull/12043) | [AMD][CI] Move rocjitsu workflow to gfx90a | @sriakrish | merged | 2026-09-30 | 2026-09-30 |
| [#12042](https://github.com/triton-lang/triton/pull/12042) | [AMD] Remove RDNA1 and RDNA2 target support | @antiagainst | merged | 2026-09-30 | 2026-09-30 |
| [#12039](https://github.com/triton-lang/triton/pull/12039) | [AMD] NFC: Modernize backend code with C++20 features | @antiagainst | merged | 2026-09-30 | 2026-09-30 |
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD][BACKEND] Improve emitted errors when a direct-to-LDS c... | @vmalepati1 | merged | 2026-07-14 | 2026-09-30 |
| [#11963](https://github.com/triton-lang/triton/pull/11963) | [AMD][BACKEND] Fix TDM verifiers to use shaperPerCTA | @AlexAUT | merged | 2026-09-25 | 2026-09-30 |
| [#11992](https://github.com/triton-lang/triton/pull/11992) | [AMD][KERNELS] Disable XCD swizzle on RDNA | @zihaomu | merged | 2026-09-28 | 2026-09-30 |
| [#12036](https://github.com/triton-lang/triton/pull/12036) | [AMD] NFC: Remove dead cache-swizzle code | @antiagainst | merged | 2026-09-30 | 2026-09-30 |
| [#12034](https://github.com/triton-lang/triton/pull/12034) | [GSan] Support symmetric memory allocator on AMD (HIP) | @amgddm | draft | 2026-09-29 | 2026-09-29 |
| [#12031](https://github.com/triton-lang/triton/pull/12031) | [AMD][CI] Bump rocjitsu and enable more tests | @sriakrish | merged | 2026-09-29 | 2026-09-29 |
| [#11890](https://github.com/triton-lang/triton/pull/11890) | [AMD] Do not stagger CDNA4 padded layouts over rows that do ... | @bogdan-petkovic | merged | 2026-09-21 | 2026-09-29 |
| [#12020](https://github.com/triton-lang/triton/pull/12020) | Add TRITON_BUILD_{NVIDIA,AMD}_BACKEND options to build witho... | @KX76 | draft | 2026-09-29 | 2026-09-29 |
| [#12017](https://github.com/triton-lang/triton/pull/12017) | [AMD] NFC: Remove dead code in the AMD backend | @antiagainst | merged | 2026-09-29 | 2026-09-29 |
| [#11946](https://github.com/triton-lang/triton/pull/11946) | [AMD][TEST] Update test_mxfp_gemm_tdm.py to align with Gluon... | @yiqian1 | merged | 2026-09-24 | 2026-09-29 |
| [#11763](https://github.com/triton-lang/triton/pull/11763) | Revert "[AMD][GFX9] Enable amdgpu-use-amdgpu-trackers LLVM f... | @yanxuer-999 | merged | 2026-09-14 | 2026-09-29 |
| [#12016](https://github.com/triton-lang/triton/pull/12016) | [AMD] Update CodeGen to triton-lang/llvm-project@6bc4aaf6 | @antiagainst | merged | 2026-09-28 | 2026-09-29 |
| [#12003](https://github.com/triton-lang/triton/pull/12003) | [AMD] Build llvm @ 6bc4aaf6 for CodeGen | @antiagainst | merged | 2026-09-28 | 2026-09-28 |
| [#11976](https://github.com/triton-lang/triton/pull/11976) | [AMD] Enable VA_VDST anti-hints for gfx1250 expert schedulin... | @zhanglx13 | merged | 2026-09-26 | 2026-09-26 |
| [#11968](https://github.com/triton-lang/triton/pull/11968) | [AMD] Add a pre-bound HIP kernel launcher | @adityakankariya | open | 2026-09-25 | 2026-09-25 |
| [#11929](https://github.com/triton-lang/triton/pull/11929) | [AMD][GFX1250] TDM copy reordering in the pipeliner | @yiqian1 | merged | 2026-09-23 | 2026-09-25 |
| [#11932](https://github.com/triton-lang/triton/pull/11932) | [AMD][GLUON] Expose sched barrier | @borontion | merged | 2026-09-23 | 2026-09-25 |
| [#11704](https://github.com/triton-lang/triton/pull/11704) | [AMD] Bypass the epilogue relayout for FMA | @pabloantoniom | draft | 2026-09-11 | 2026-09-24 |
| [#11916](https://github.com/triton-lang/triton/pull/11916) | [AMD] Update AMD CodeGen to triton-lang/llvm-project@d26ff26... | @antiagainst | merged | 2026-09-23 | 2026-09-24 |
| [#11475](https://github.com/triton-lang/triton/pull/11475) | [AMD] Disable scalar atomics in multicta kernels | @borontion | open | 2026-08-26 | 2026-09-23 |
| [#11921](https://github.com/triton-lang/triton/pull/11921) | [AMD][NFC] Fix gfx1250 unit tests for multiplication and TDM... | @AlexAUT | merged | 2026-09-23 | 2026-09-23 |
| [#11925](https://github.com/triton-lang/triton/pull/11925) | [AMD] Build AMD CodeGen LLVM at d26ff26ef4e9 | @antiagainst | merged | 2026-09-23 | 2026-09-23 |
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-09-22 |
| [#11904](https://github.com/triton-lang/triton/pull/11904) | [AMD] Swap floating-point values as integers in buffer atomi... | @LiRunGuo | open | 2026-09-22 | 2026-09-22 |
| [#10694](https://github.com/triton-lang/triton/pull/10694) | [AMD] Use operand-major LDS layout for FMA dot operands | @pabloantoniom | draft | 2026-06-22 | 2026-09-21 |
| [#11880](https://github.com/triton-lang/triton/pull/11880) | [AMD] Compute the HIP pointer-range bit natively | @lijinpei-amd | draft | 2026-09-20 | 2026-09-20 |
| [#11876](https://github.com/triton-lang/triton/pull/11876) | [AMD] isolate LLVM CodeGen dependencies | @antiagainst | draft | 2026-09-19 | 2026-09-19 |
| [#11809](https://github.com/triton-lang/triton/pull/11809) | [AMD] Use hardware OCP FP8 upcasts on RDNA4 | @zihaomu | open | 2026-09-16 | 2026-09-19 |
| [#11835](https://github.com/triton-lang/triton/pull/11835) | [AMD] Cap the MFMA instruction shape by the per-warp share o... | @Mazukiri | open | 2026-09-17 | 2026-09-17 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add CDNA5 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-09-15 |
| [#11787](https://github.com/triton-lang/triton/pull/11787) | [DO NOT MERGE][CI][AMD] Migrate gfx950 CI to MI355 runner | @raikonenfnu | open | 2026-09-14 | 2026-09-15 |
| [#11793](https://github.com/triton-lang/triton/pull/11793) | [TEST][AMD] Add runtime loop regression for #11378 | @zihaomu | open | 2026-09-15 | 2026-09-15 |
| [#11769](https://github.com/triton-lang/triton/pull/11769) | [AMD][GFX9] Disable local runtime loop unrolling for gfx942/... | @xgxanq | open | 2026-09-14 | 2026-09-15 |
| [#11655](https://github.com/triton-lang/triton/pull/11655) | [AMD] Widen InstCombine's SimplifyDemandedVectorElts walk de... | @Dewei-Wang-sh | open | 2026-09-09 | 2026-09-14 |
| [#11666](https://github.com/triton-lang/triton/pull/11666) | Avoid PyTorch imports during AMD backend discovery | @lyu-oai | open | 2026-09-09 | 2026-09-09 |
| [#11577](https://github.com/triton-lang/triton/pull/11577) | [Release][Cherry-Pick] [AMD] Fix empty range inference for H... | @thedandano | open | 2026-09-03 | 2026-09-03 |
| [#11527](https://github.com/triton-lang/triton/pull/11527) | [AMD] Scalarize masked f32 vec2 buffer stores on gfx1151 | @keneoneth | draft | 2026-09-01 | 2026-09-01 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-10-03T12:48:26Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5350](https://github.com/ROCm/AMDMIGraphX/pull/5350) | fix fuse_concat across submods | @shivadbhavsar | open | 2026-10-03 | 2026-10-03 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | open | 2026-07-29 | 2026-10-03 |
| [#5271](https://github.com/ROCm/AMDMIGraphX/pull/5271) | Fuse reduce slices and squeezed epilogues, tile short reduct... | @pfultz2 | open | 2026-09-16 | 2026-10-03 |
| [#5340](https://github.com/ROCm/AMDMIGraphX/pull/5340) | Split_sym_dim prefill+decode support | @turneram | draft | 2026-09-30 | 2026-10-03 |
| [#5344](https://github.com/ROCm/AMDMIGraphX/pull/5344) | Update CI for 10.1 | @eddieliao | open | 2026-10-01 | 2026-10-03 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Adding support for operators with data-depdendent shape func... | @CharlieL7 | draft | 2026-09-24 | 2026-10-03 |
| [#5338](https://github.com/ROCm/AMDMIGraphX/pull/5338) | Add support for quantized add | @pfultz2 | open | 2026-09-30 | 2026-10-02 |
| [#5245](https://github.com/ROCm/AMDMIGraphX/pull/5245) | Update NonZero to slice to number of non-zero elements | @CharlieL7 | open | 2026-09-10 | 2026-10-02 |
| [#5281](https://github.com/ROCm/AMDMIGraphX/pull/5281) | Bump soupsieve from 2.8.4 to 2.9 in /docs/sphinx | @dependabot[bot] | open | 2026-09-18 | 2026-10-03 |
| [#5290](https://github.com/ROCm/AMDMIGraphX/pull/5290) | Bump rocm-docs-core from 1.40.2 to 1.41.0 in /docs/sphinx | @dependabot[bot] | open | 2026-09-21 | 2026-10-03 |
| [#5349](https://github.com/ROCm/AMDMIGraphX/pull/5349) | Onnxruntime Weekly Sync 2026-10-02 | @github-actions[bot] | open | 2026-10-02 | 2026-10-02 |
| [#5213](https://github.com/ROCm/AMDMIGraphX/pull/5213) | Docs: getting started and miscellaneous docs refactoring | @anisha-amd | open | 2026-08-28 | 2026-10-02 |
| [#5123](https://github.com/ROCm/AMDMIGraphX/pull/5123) | Split symbolic dimension pass | @shivadbhavsar | open | 2026-08-07 | 2026-10-02 |
| [#5339](https://github.com/ROCm/AMDMIGraphX/pull/5339) | [AIMIGRAPHX-1301] add checks for size of literals when creat... | @kahmed10 | open | 2026-09-30 | 2026-10-02 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | open | 2025-01-17 | 2026-10-02 |
| [#5348](https://github.com/ROCm/AMDMIGraphX/pull/5348) | Fuse expert gathers, interleaved swiglu, and the expert sum ... | @pfultz2 | open | 2026-10-02 | 2026-10-02 |
| [#5315](https://github.com/ROCm/AMDMIGraphX/pull/5315) | Fuse GQA attention with attention sinks | @pfultz2 | open | 2026-09-24 | 2026-10-02 |
| [#5324](https://github.com/ROCm/AMDMIGraphX/pull/5324) | Fuse topk | @pfultz2 | open | 2026-09-27 | 2026-10-01 |
| [#5334](https://github.com/ROCm/AMDMIGraphX/pull/5334) | [AIMIGRAPHX-1102] Support verify through the API | @eddieliao | open | 2026-09-29 | 2026-10-01 |
| [#5301](https://github.com/ROCm/AMDMIGraphX/pull/5301) | gpu: skip optimize_module in eager compile mode | @vmilanov-amd | draft | 2026-09-23 | 2026-10-01 |
| [#5232](https://github.com/ROCm/AMDMIGraphX/pull/5232) | Binary cache sql backend | @pnikolic-amd | draft | 2026-09-02 | 2026-10-01 |
| [#5260](https://github.com/ROCm/AMDMIGraphX/pull/5260) | gqa/fuse_attention: attention sinks + sliding-window decode ... | @rlegithub | open | 2026-09-13 | 2026-09-30 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-09-30 |
| [#5335](https://github.com/ROCm/AMDMIGraphX/pull/5335) | Channels-last support and register/vector reuse for the chan... | @pfultz2 | open | 2026-09-29 | 2026-09-29 |
| [#5336](https://github.com/ROCm/AMDMIGraphX/pull/5336) | Asymnetric padding | @pfultz2 | open | 2026-09-29 | 2026-09-29 |
| [#5333](https://github.com/ROCm/AMDMIGraphX/pull/5333) | Give the TensorFlow protobuf unique package and file names | @fwyzard | open | 2026-09-29 | 2026-09-29 |
| [#5175](https://github.com/ROCm/AMDMIGraphX/pull/5175) | Gpu concat kernel improvements | @pfultz2 | open | 2026-08-23 | 2026-09-28 |
| [#5259](https://github.com/ROCm/AMDMIGraphX/pull/5259) | layernorm: FP32 SimplifiedLayerNorm/SkipSLN to prevent MoE r... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5258](https://github.com/ROCm/AMDMIGraphX/pull/5258) | gpu: fused GptOssMoE op (sparse top-4 INT4 MoE) for GPT-OSS-... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5256](https://github.com/ROCm/AMDMIGraphX/pull/5256) | gpu/hip: fall back to hipHostMalloc when hipHostRegister fai... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5257](https://github.com/ROCm/AMDMIGraphX/pull/5257) | cse: skip merging >64MB single-output ops | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5255](https://github.com/ROCm/AMDMIGraphX/pull/5255) | fuse_attention: exclude side-input reductions from the decod... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5312](https://github.com/ROCm/AMDMIGraphX/pull/5312) | Dynamic ROIAlign  | @CharlieL7 | draft | 2026-09-24 | 2026-09-25 |
| [#5289](https://github.com/ROCm/AMDMIGraphX/pull/5289) | Add missing tests | @pfultz2 | open | 2026-09-20 | 2026-09-25 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#5272](https://github.com/ROCm/AMDMIGraphX/pull/5272) | Add fused M=1 INT4 GEMV kernel for LLM decode (opt-in) | @aditya-dl | draft | 2026-09-16 | 2026-09-25 |
| [#5278](https://github.com/ROCm/AMDMIGraphX/pull/5278) | Share identical weight literals across programs on the same ... | @aditya-dl | draft | 2026-09-17 | 2026-09-24 |
| [#5254](https://github.com/ROCm/AMDMIGraphX/pull/5254) | gpu/compile_ops: make tuning-config computation exception-sa... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5309](https://github.com/ROCm/AMDMIGraphX/pull/5309) | [CI][Diagnostic] Isolate MI300 MLIR attention flake | @kentqian | draft | 2026-09-24 | 2026-09-24 |
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | open | 2026-09-21 | 2026-09-24 |
| [#5308](https://github.com/ROCm/AMDMIGraphX/pull/5308) | docs(2.16.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5307](https://github.com/ROCm/AMDMIGraphX/pull/5307) | docs(2.17.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5302](https://github.com/ROCm/AMDMIGraphX/pull/5302) | Use uint32 bitmask for GPU NMS kernel | @CharlieL7 | draft | 2026-09-24 | 2026-09-24 |
| [#5284](https://github.com/ROCm/AMDMIGraphX/pull/5284) | Update mlir problem key with a md5 sum | @pfultz2 | open | 2026-09-18 | 2026-09-18 |
| [#5161](https://github.com/ROCm/AMDMIGraphX/pull/5161) | Enable fp16 winograd on gfx1151 | @weizhu12-amd | open | 2026-08-21 | 2026-09-17 |
| [#5274](https://github.com/ROCm/AMDMIGraphX/pull/5274) | Winograd fp16 gfx11 | @pfultz2 | draft | 2026-09-17 | 2026-09-17 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-09-17 |
| [#5270](https://github.com/ROCm/AMDMIGraphX/pull/5270) | Cache HIP code object compilation | @dhernandez0 | open | 2026-09-16 | 2026-09-16 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-09-16 |
| [#5205](https://github.com/ROCm/AMDMIGraphX/pull/5205) | [Old method] Python and Cpp symbolic shape printing using sy... | @CharlieL7 | draft | 2026-08-27 | 2026-09-15 |
| [#5264](https://github.com/ROCm/AMDMIGraphX/pull/5264) | Opt int4 2 | @pfultz2 | draft | 2026-09-14 | 2026-09-14 |
| [#5261](https://github.com/ROCm/AMDMIGraphX/pull/5261) | gpu: opt-in GPU graph capture/replay for the async eval path... | @rlegithub | open | 2026-09-14 | 2026-09-14 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-09-10 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-09-10 |
| [#5236](https://github.com/ROCm/AMDMIGraphX/pull/5236) | Unify prefill and decode | @pfultz2 | draft | 2026-09-03 | 2026-09-03 |
| [#5210](https://github.com/ROCm/AMDMIGraphX/pull/5210) | Fix credential issue for performance tests | @ahsan-ca | open | 2026-08-28 | 2026-09-02 |
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | open | 2026-08-30 | 2026-09-01 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-09-01 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | draft | 2025-01-20 | 2026-08-29 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | draft | 2024-11-29 | 2026-08-29 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-08-29 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-08-29 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | draft | 2024-09-22 | 2026-08-29 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | draft | 2024-06-26 | 2026-08-29 |
| [#2224](https://github.com/ROCm/AMDMIGraphX/pull/2224) | Added mutex locks in register_target.cpp and created a multi... | @bpickrel | draft | 2023-09-20 | 2026-08-29 |
| [#1417](https://github.com/ROCm/AMDMIGraphX/pull/1417) | Warnings upon tuning  information mismatch for Convolutions | @umangyadav | draft | 2022-10-19 | 2026-08-29 |
| [#5008](https://github.com/ROCm/AMDMIGraphX/pull/5008) | Change amdmlss option to be activated via compile option | @Zhaeong | draft | 2026-06-24 | 2026-08-29 |
| [#5007](https://github.com/ROCm/AMDMIGraphX/pull/5007) | Fix ref average pooling divisor for count_include_pad with a... | @HamzaIkhurram | open | 2026-06-24 | 2026-08-29 |
| [#4994](https://github.com/ROCm/AMDMIGraphX/pull/4994) | simplify_reshapes: skip find_reshape_dot when it would chang... | @ycastill2-amd | draft | 2026-06-19 | 2026-08-29 |
| [#4992](https://github.com/ROCm/AMDMIGraphX/pull/4992) | adjust_allocation: reallocate undersized aliased output buff... | @ycastill2-amd | open | 2026-06-18 | 2026-08-29 |
| [#4983](https://github.com/ROCm/AMDMIGraphX/pull/4983) | NOT TO BE MERGED: Python script to benchmark mxr files - con... | @ahsan-ca | draft | 2026-06-17 | 2026-08-29 |
| [#4934](https://github.com/ROCm/AMDMIGraphX/pull/4934) | Enable winograd convolution for shape 3x3 | @klin2024 | draft | 2026-06-03 | 2026-08-29 |
| [#4931](https://github.com/ROCm/AMDMIGraphX/pull/4931) | Add support for 3d kernel launches | @music-dino | draft | 2026-06-02 | 2026-08-29 |
| [#4924](https://github.com/ROCm/AMDMIGraphX/pull/4924) | concat: treat fully-unconstrained dynamic dim as a wildcard | @chun-wan | open | 2026-05-30 | 2026-08-29 |
| [#4911](https://github.com/ROCm/AMDMIGraphX/pull/4911) | Reduce dynamic-shape compile cost and select_module dispatch... | @chun-wan | open | 2026-05-26 | 2026-08-29 |
| [#4895](https://github.com/ROCm/AMDMIGraphX/pull/4895) | Use fp16 for convolution on navi | @pfultz2 | draft | 2026-05-19 | 2026-08-29 |
| [#4892](https://github.com/ROCm/AMDMIGraphX/pull/4892) | Add builds for static lib on windows | @pfultz2 | draft | 2026-05-18 | 2026-08-29 |
| [#4829](https://github.com/ROCm/AMDMIGraphX/pull/4829) | support stride > 1 case. | @weizhu12-amd | draft | 2026-04-29 | 2026-08-29 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-08-29 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-08-29 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | draft | 2026-03-23 | 2026-08-29 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-08-29 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-08-29 |
| [#4608](https://github.com/ROCm/AMDMIGraphX/pull/4608) | Use rocBLAS GEMV for skinny GEMM (M=1 or N=1) to improve per... | @klin2024 | draft | 2026-02-12 | 2026-08-29 |
| [#4607](https://github.com/ROCm/AMDMIGraphX/pull/4607) | Optimize 1x1 and Depthwise Convolution for Small Shapes | @klin2024 | draft | 2026-02-12 | 2026-08-29 |
| [#4577](https://github.com/ROCm/AMDMIGraphX/pull/4577) | Create op. builders (6.) (AI generated) | @gchinora | draft | 2026-01-28 | 2026-08-29 |
| [#4571](https://github.com/ROCm/AMDMIGraphX/pull/4571) |  ONNX: Added support for `SplitToSequence` and `ConcatFromSe... | @RajBarshikar | draft | 2026-01-26 | 2026-08-29 |
| [#4563](https://github.com/ROCm/AMDMIGraphX/pull/4563) | Add Windows build documentation for TheRock ROCm | @ppetrovi-amd | draft | 2026-01-21 | 2026-08-29 |
| [#4546](https://github.com/ROCm/AMDMIGraphX/pull/4546) | [DRAFT] flash decoding kvcache | @bdevorem | draft | 2026-01-14 | 2026-08-29 |
| [#4456](https://github.com/ROCm/AMDMIGraphX/pull/4456) | Horizontally fuse pointwise with more than 2 arguments in fi... | @pfultz2 | draft | 2025-11-20 | 2026-08-29 |
| [#4448](https://github.com/ROCm/AMDMIGraphX/pull/4448) | Gpu concat kernel improvements(scratch) | @pfultz2 | draft | 2025-11-19 | 2026-08-29 |
| [#4403](https://github.com/ROCm/AMDMIGraphX/pull/4403) | `generic_float` for Float8E8M0 | @CharlieL7 | draft | 2025-10-23 | 2026-08-29 |
| [#4381](https://github.com/ROCm/AMDMIGraphX/pull/4381) | Enable pointwise fusion for dynamic IR | @shivadbhavsar | draft | 2025-10-13 | 2026-08-29 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2026-08-29 |
| [#4312](https://github.com/ROCm/AMDMIGraphX/pull/4312) | Add ONNX model testing workflow | @danieyan-amd | draft | 2025-09-23 | 2026-08-29 |
| [#4275](https://github.com/ROCm/AMDMIGraphX/pull/4275) | SparseAttention ONNX Contrib Op Implementation | @music-dino | draft | 2025-09-03 | 2026-08-29 |
| [#4217](https://github.com/ROCm/AMDMIGraphX/pull/4217) | Set attribute to help bypass the warning about amdgpu_waves_... | @lakhinderwalia | draft | 2025-08-08 | 2026-08-29 |
| [#4154](https://github.com/ROCm/AMDMIGraphX/pull/4154) | Switch to c++23 | @pfultz2 | draft | 2025-07-21 | 2026-08-29 |
| [#3938](https://github.com/ROCm/AMDMIGraphX/pull/3938) | Add GPU onnx support for com.microsoft.SparseAttention | @music-dino | draft | 2025-04-09 | 2026-08-29 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | draft | 2025-03-07 | 2026-08-29 |
| [#3752](https://github.com/ROCm/AMDMIGraphX/pull/3752) | Fuse multiple outputs for pointwise and reductions | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3750](https://github.com/ROCm/AMDMIGraphX/pull/3750) | Tile channels for group norm and also fuse output reshapes i... | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3725](https://github.com/ROCm/AMDMIGraphX/pull/3725) | Issue with int8 for MaxPool  | @taylding-amd | draft | 2024-12-19 | 2026-08-29 |
| [#3721](https://github.com/ROCm/AMDMIGraphX/pull/3721) | Introduce export feature to TensorRT JSON format | @mirza-halilcevic | draft | 2024-12-18 | 2026-08-29 |
| [#3718](https://github.com/ROCm/AMDMIGraphX/pull/3718) | Tile scale and bias for block quantization | @pfultz2 | draft | 2024-12-16 | 2026-08-29 |
| [#3465](https://github.com/ROCm/AMDMIGraphX/pull/3465) | Remove layernorm fusion | @pfultz2 | draft | 2024-09-20 | 2026-08-29 |
| [#3416](https://github.com/ROCm/AMDMIGraphX/pull/3416) | Weight stripping | @simberg-amd | draft | 2024-09-04 | 2026-08-29 |
| [#2687](https://github.com/ROCm/AMDMIGraphX/pull/2687) | Add optional fp16 rmsnorm conversion pass to fix fp16 accura... | @attila-dusnoki-htec | draft | 2024-01-25 | 2026-08-29 |
| [#5173](https://github.com/ROCm/AMDMIGraphX/pull/5173) | fix(security): pin base image digest and run as jenkins user | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5172](https://github.com/ROCm/AMDMIGraphX/pull/5172) | fix(security): re-verify PR head SHA in performance workflow | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): replace popen shell with posix_spawn | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5168](https://github.com/ROCm/AMDMIGraphX/pull/5168) | fix(security): guard ONNX/shape overflow and external data p... | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-08-29 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#5342](https://github.com/ROCm/AMDMIGraphX/pull/5342) | Bump pyjwt from 2.13.0 to 2.15.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-09-30 | 2026-10-02 |
| [#5343](https://github.com/ROCm/AMDMIGraphX/pull/5343) | Bump urllib3 from 2.7.0 to 2.8.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-09-30 | 2026-10-02 |
| [#5346](https://github.com/ROCm/AMDMIGraphX/pull/5346) | Bump tornado from 6.5.8 to 6.5.9 in /docs/sphinx | @dependabot[bot] | merged | 2026-10-01 | 2026-10-02 |
| [#5347](https://github.com/ROCm/AMDMIGraphX/pull/5347) | Bump gitpython from 3.1.58 to 3.1.62 in /docs/sphinx | @dependabot[bot] | merged | 2026-10-01 | 2026-10-02 |
| [#5330](https://github.com/ROCm/AMDMIGraphX/pull/5330) | Specify list of models for model zoo CI | @eddieliao | merged | 2026-09-29 | 2026-10-02 |
| [#5151](https://github.com/ROCm/AMDMIGraphX/pull/5151) | NMS parse into `dyn_slice` and remove env variable | @CharlieL7 | merged | 2026-08-18 | 2026-10-02 |
| [#5345](https://github.com/ROCm/AMDMIGraphX/pull/5345) | [AIRADSW-1042] Standardize GPU outputs for packed tensor int... | @urpetkov-amd | merged | 2026-10-01 | 2026-10-01 |
| [#5114](https://github.com/ROCm/AMDMIGraphX/pull/5114) | Regular attention flash decoding refactor and bug fixes | @bdevorem | merged | 2026-08-05 | 2026-10-01 |
| [#4880](https://github.com/ROCm/AMDMIGraphX/pull/4880) | Add dynamic shape support for TopK | @klin2024 | merged | 2026-05-13 | 2026-10-01 |
| [#4927](https://github.com/ROCm/AMDMIGraphX/pull/4927) | broadcast_with_dims: lower-bound the dynamic output dims at ... | @chun-wan | merged | 2026-06-01 | 2026-10-01 |
| [#5024](https://github.com/ROCm/AMDMIGraphX/pull/5024) | Sanitize benchmark mxr file name to use `_` instead of inval... | @ahsan-ca | merged | 2026-06-30 | 2026-10-01 |
| [#5017](https://github.com/ROCm/AMDMIGraphX/pull/5017) | Skip fuse_horizontal pass on dynamic shaped inputs | @CharlieL7 | merged | 2026-06-26 | 2026-10-01 |
| [#5184](https://github.com/ROCm/AMDMIGraphX/pull/5184) | Eliminate concat_past_present | @pfultz2 | merged | 2026-08-24 | 2026-10-01 |
| [#5319](https://github.com/ROCm/AMDMIGraphX/pull/5319) | Onnxruntime Weekly Sync 2026-09-25 | @github-actions[bot] | merged | 2026-09-25 | 2026-10-01 |
| [#5171](https://github.com/ROCm/AMDMIGraphX/pull/5171) | fix(security): scope CI secrets and pin third-party actions | @causten | merged | 2026-08-21 | 2026-09-30 |
| [#5139](https://github.com/ROCm/AMDMIGraphX/pull/5139) | Add GPU JIT implementation for gridsample operation | @Imeguras | merged | 2026-08-16 | 2026-09-30 |
| [#5075](https://github.com/ROCm/AMDMIGraphX/pull/5075) | [AIMIGRAPHX-1166] rebias uint8 to int8 on models with mixed ... | @kahmed10 | merged | 2026-07-17 | 2026-09-30 |
| [#5341](https://github.com/ROCm/AMDMIGraphX/pull/5341) | fuse_attention: don't backward-pull concat into decode-atten... | @rlegithub | merged | 2026-09-30 | 2026-09-30 |
| [#4733](https://github.com/ROCm/AMDMIGraphX/pull/4733) | Fuse pointwise across split slices | @pfultz2 | merged | 2026-04-01 | 2026-09-30 |
| [#5327](https://github.com/ROCm/AMDMIGraphX/pull/5327) | Added rocmlirTriton to CHANGELOG.md | @causten | merged | 2026-09-28 | 2026-09-30 |
| [#5233](https://github.com/ROCm/AMDMIGraphX/pull/5233) | Add support for int4 reduce | @pfultz2 | merged | 2026-09-02 | 2026-09-30 |
| [#5286](https://github.com/ROCm/AMDMIGraphX/pull/5286) | [AIMIGRAPHX-1264] QMoE Op not supported | @pfultz2 | merged | 2026-09-20 | 2026-09-30 |
| [#5027](https://github.com/ROCm/AMDMIGraphX/pull/5027) | Fuse_pointwise fuse dynamic even if scalar | @CharlieL7 | merged | 2026-07-01 | 2026-09-30 |
| [#4803](https://github.com/ROCm/AMDMIGraphX/pull/4803) | Python API debug symbols | @CharlieL7 | merged | 2026-04-20 | 2026-09-30 |
| [#5266](https://github.com/ROCm/AMDMIGraphX/pull/5266) | Accept 2D MatMulNBits zero points | @ghedo | merged | 2026-09-15 | 2026-09-29 |
| [#5287](https://github.com/ROCm/AMDMIGraphX/pull/5287) | [AIMIGRAPHX-1266] GQA fails when the operator has 12 inputs  | @pfultz2 | merged | 2026-09-20 | 2026-09-29 |
| [#5331](https://github.com/ROCm/AMDMIGraphX/pull/5331) | Resolve model compilation performance for 10.1 ROCm release | @causten | merged | 2026-09-29 | 2026-09-29 |
| [#5328](https://github.com/ROCm/AMDMIGraphX/pull/5328) | [AIMIGRAPHX-1300] Move broadcasts after an all-broadcast poi... | @pfultz2 | merged | 2026-09-28 | 2026-09-29 |
| [#5269](https://github.com/ROCm/AMDMIGraphX/pull/5269) | Symbolic and dynamic shape Cpp & Python printing | @CharlieL7 | merged | 2026-09-15 | 2026-09-28 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | merged | 2026-06-19 | 2026-09-28 |
| [#5322](https://github.com/ROCm/AMDMIGraphX/pull/5322) | Optimize MLIR compile time by disabling nested threading | @umangyadav | merged | 2026-09-27 | 2026-09-28 |
| [#5310](https://github.com/ROCm/AMDMIGraphX/pull/5310) | Update CHANGELOG.md | @eddieliao | merged | 2026-09-24 | 2026-09-28 |
| [#5326](https://github.com/ROCm/AMDMIGraphX/pull/5326) | Set CHANGELOG for 10.1 | @causten | merged | 2026-09-28 | 2026-09-28 |
| [#5321](https://github.com/ROCm/AMDMIGraphX/pull/5321) | Bump RMT to 0925 | @causten | merged | 2026-09-25 | 2026-09-28 |
| [#5018](https://github.com/ROCm/AMDMIGraphX/pull/5018) | Use eigen for convolution | @pfultz2 | merged | 2026-06-28 | 2026-09-28 |
| [#5004](https://github.com/ROCm/AMDMIGraphX/pull/5004) | [AIMIGRAPHX-885] Add slice squeeze matcher | @TedThemistokleous | merged | 2026-06-22 | 2026-09-27 |
| [#4725](https://github.com/ROCm/AMDMIGraphX/pull/4725) | [AIMIGRAPHX-885] Add gather_slice_concat matcher | @TedThemistokleous | merged | 2026-03-31 | 2026-09-27 |
| [#5317](https://github.com/ROCm/AMDMIGraphX/pull/5317) | Reduce redundant work in adaptive GPU tuning benchmarks | @justinrosner | merged | 2026-09-25 | 2026-09-26 |
| [#5283](https://github.com/ROCm/AMDMIGraphX/pull/5283) | Limit reshape output fusion in mlir | @pfultz2 | merged | 2026-09-18 | 2026-09-26 |
| [#5291](https://github.com/ROCm/AMDMIGraphX/pull/5291) | Propagate broadcast in binary ops | @pfultz2 | merged | 2026-09-21 | 2026-09-26 |
| [#5311](https://github.com/ROCm/AMDMIGraphX/pull/5311) | Match the reduce_mean variance pattern through shape transfo... | @pfultz2 | merged | 2026-09-24 | 2026-09-26 |
| [#5320](https://github.com/ROCm/AMDMIGraphX/pull/5320) | Dont fuse multi outputs when the layouts are different | @pfultz2 | merged | 2026-09-25 | 2026-09-26 |
| [#5279](https://github.com/ROCm/AMDMIGraphX/pull/5279) | Refactor adaptive benchmarking | @pfultz2 | merged | 2026-09-18 | 2026-09-25 |
| [#5243](https://github.com/ROCm/AMDMIGraphX/pull/5243) | [AIMIGRAPHX-1208] Run ONNX Model Zoo on CI | @eddieliao | merged | 2026-09-09 | 2026-09-25 |
| [#5244](https://github.com/ROCm/AMDMIGraphX/pull/5244) | Hiprtc compilation use streams instead of flie write/read | @pnikolic-amd | merged | 2026-09-10 | 2026-09-25 |
| [#5280](https://github.com/ROCm/AMDMIGraphX/pull/5280) | Fix horizontal fusion of dependent operations by partitionin... | @pfultz2 | merged | 2026-09-18 | 2026-09-25 |
| [#5013](https://github.com/ROCm/AMDMIGraphX/pull/5013) | fix bug with simplify reshapes and multi reduction axis | @kahmed10 | merged | 2026-06-25 | 2026-09-24 |
| [#5303](https://github.com/ROCm/AMDMIGraphX/pull/5303) | Fix out-of-order split concat rewrite | @CharlieL7 | merged | 2026-09-24 | 2026-09-24 |
| [#5305](https://github.com/ROCm/AMDMIGraphX/pull/5305) | Disable flaky test_ck_gemm_softmax_gemm_0 GPU verify | @causten | merged | 2026-09-24 | 2026-09-24 |
| [#5298](https://github.com/ROCm/AMDMIGraphX/pull/5298) | Fix hipExtModuleLaunchKernel C linkage on Linux | @kentqian | merged | 2026-09-22 | 2026-09-24 |
| [#5215](https://github.com/ROCm/AMDMIGraphX/pull/5215) | Use rocmlirtriton as the compiler backend | @causten | merged | 2026-08-29 | 2026-09-24 |
| [#4989](https://github.com/ROCm/AMDMIGraphX/pull/4989) | [4979] Adaptive benchmark bundle during tuning | @itikhono | merged | 2026-06-18 | 2026-09-23 |
| [#5300](https://github.com/ROCm/AMDMIGraphX/pull/5300) | Avoid no-op concat rewrites in simplify_algebra | @justinrosner | merged | 2026-09-22 | 2026-09-23 |
| [#4729](https://github.com/ROCm/AMDMIGraphX/pull/4729) | Improve horizontal fusions | @pfultz2 | merged | 2026-04-01 | 2026-09-23 |
| [#4956](https://github.com/ROCm/AMDMIGraphX/pull/4956) | Add support for HipGraph | @pfultz2 | merged | 2026-06-11 | 2026-09-22 |
| [#5297](https://github.com/ROCm/AMDMIGraphX/pull/5297) | Fix conv concat fusion with different output channels | @urpetkov-amd | merged | 2026-09-22 | 2026-09-22 |
| [#5277](https://github.com/ROCm/AMDMIGraphX/pull/5277) | ensure standard shapes for lrn operator | @kahmed10 | merged | 2026-09-17 | 2026-09-22 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | merged | 2026-04-22 | 2026-09-22 |
| [#4554](https://github.com/ROCm/AMDMIGraphX/pull/4554) | Add deref op | @pfultz2 | merged | 2026-01-19 | 2026-09-21 |
| [#5248](https://github.com/ROCm/AMDMIGraphX/pull/5248) | Have convolution_backwards error on indivisible groups and r... | @CharlieL7 | merged | 2026-09-10 | 2026-09-21 |
| [#5285](https://github.com/ROCm/AMDMIGraphX/pull/5285) | [AIRADSW-709] Remove division of batch size since does not s... | @Zhaeong | merged | 2026-09-19 | 2026-09-21 |
| [#5273](https://github.com/ROCm/AMDMIGraphX/pull/5273) | Rewrite broadcast reshapes | @pfultz2 | merged | 2026-09-16 | 2026-09-21 |
| [#5265](https://github.com/ROCm/AMDMIGraphX/pull/5265) | Marshall exception in simple_par_for | @pfultz2 | merged | 2026-09-14 | 2026-09-21 |
| [#5288](https://github.com/ROCm/AMDMIGraphX/pull/5288) | Fix tidy warnings in generic_float | @pfultz2 | merged | 2026-09-20 | 2026-09-21 |
| [#4993](https://github.com/ROCm/AMDMIGraphX/pull/4993) | Remove dev_intro.rst and formatting contributing-to-migraphx | @CharlieL7 | merged | 2026-06-19 | 2026-09-21 |
| [#5003](https://github.com/ROCm/AMDMIGraphX/pull/5003) | Add checkers for redundant static_cast | @pfultz2 | merged | 2026-06-22 | 2026-09-20 |
| [#4987](https://github.com/ROCm/AMDMIGraphX/pull/4987) | Fix verify auto-print handler registration for late targets | @ikalinic | merged | 2026-06-18 | 2026-09-20 |
| [#4991](https://github.com/ROCm/AMDMIGraphX/pull/4991) | Fix redundant re-benchmarking for pooling when using problem... | @ahsan-ca | merged | 2026-06-18 | 2026-09-20 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | merged | 2026-04-08 | 2026-09-19 |
| [#5275](https://github.com/ROCm/AMDMIGraphX/pull/5275) | Support nonpacked fill | @pfultz2 | merged | 2026-09-17 | 2026-09-19 |
| [#4765](https://github.com/ROCm/AMDMIGraphX/pull/4765) | Add versioninfo to migraphx binaries WINDOWS | @ivarusic-amd | merged | 2026-04-09 | 2026-09-18 |
| [#5192](https://github.com/ROCm/AMDMIGraphX/pull/5192) | [AIRADSW-852] Fixing regression with slice-squeeze rewrite f... | @urpetkov-amd | merged | 2026-08-26 | 2026-09-18 |
| [#3815](https://github.com/ROCm/AMDMIGraphX/pull/3815) | Use fill_argument for literals that have the same value | @pfultz2 | merged | 2025-02-14 | 2026-09-17 |
| [#4949](https://github.com/ROCm/AMDMIGraphX/pull/4949) | Improve error reporting with loop operator | @pfultz2 | merged | 2026-06-09 | 2026-09-17 |
| [#4939](https://github.com/ROCm/AMDMIGraphX/pull/4939) | ONNX parser updates for symbolic shapes | @shivadbhavsar | merged | 2026-06-04 | 2026-09-17 |
| [#4967](https://github.com/ROCm/AMDMIGraphX/pull/4967) | Vectorize Resize | @pfultz2 | merged | 2026-06-15 | 2026-09-17 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | merged | 2026-03-04 | 2026-09-17 |
| [#5262](https://github.com/ROCm/AMDMIGraphX/pull/5262) | Fix Gather on empty (zero-element) tensor aborting at ONNX p... | @itikhono | merged | 2026-09-14 | 2026-09-17 |
| [#5204](https://github.com/ROCm/AMDMIGraphX/pull/5204) | Drop null problem-cache sentinels on load, keep in-run dedup | @danieyan-amd | merged | 2026-08-27 | 2026-09-17 |
| [#4973](https://github.com/ROCm/AMDMIGraphX/pull/4973) | Reject zero-size operation name buffers | @fallintoplace | merged | 2026-06-16 | 2026-09-17 |
| [#4893](https://github.com/ROCm/AMDMIGraphX/pull/4893) | GPU NMS kernel and refactor of NMS operator | @CharlieL7 | merged | 2026-05-18 | 2026-09-17 |
| [#5137](https://github.com/ROCm/AMDMIGraphX/pull/5137) | Eliminate concat after reshapes | @pfultz2 | merged | 2026-08-14 | 2026-09-17 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-10-03T12:48:37Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#6125](https://github.com/ROCm/aiter/pull/6125) | [HIP] gfx950 A8W4 fused_moe configs for DSv4.1 TP-sharded ex... | @valarLip | open | 2026-10-03 | 2026-10-03 |
| [#6124](https://github.com/ROCm/aiter/pull/6124) | [Triton/Gluon] [Bugfix] Guard SiLU backward on unsupported a... | @DaiXindi-AMD | open | 2026-10-03 | 2026-10-03 |
| [#6123](https://github.com/ROCm/aiter/pull/6123) | [FlyDSL] Unified attention for gfx942 (Gemma-4) | @waqahmed-amd-fi | draft | 2026-10-03 | 2026-10-03 |
| [#5686](https://github.com/ROCm/aiter/pull/5686) | [HIP] [FlyDSL] [JIT] [WIP] Feat/topk per row gfx950 | @MHYangAMD | open | 2026-09-19 | 2026-10-03 |
| [#5709](https://github.com/ROCm/aiter/pull/5709) | [Triton/Gluon] [CI] [Kimi-K3] Optimize speculative KDA decod... | @xiaohuguo2023 | open | 2026-09-20 | 2026-10-03 |
| [#6121](https://github.com/ROCm/aiter/pull/6121) | [FlyDSL] [Perf] Add gfx1250 Kimi-K3 gather_kv_b_proj | @XiaobingSuper | draft | 2026-10-03 | 2026-10-03 |
| [#6122](https://github.com/ROCm/aiter/pull/6122) | Temporary PR for unified attention gemma4 | @waqahmed-amd-fi | draft | 2026-10-03 | 2026-10-03 |
| [#5431](https://github.com/ROCm/aiter/pull/5431) | [HIP] feat(custom_ar): add torch.symm_mem transport(mori) fo... | @kawhil-amd | open | 2026-09-11 | 2026-10-03 |
| [#6120](https://github.com/ROCm/aiter/pull/6120) | [Triton/Gluon] [MLA] Fix fused gather_kv_b_proj on gfx1250 | @XiaobingSuper | open | 2026-10-03 | 2026-10-03 |
| [#6115](https://github.com/ROCm/aiter/pull/6115) | [FlyDSL] [MoE] Extend fused G2L LUT to 1024 experts | @XiaobingSuper | open | 2026-10-03 | 2026-10-03 |
| [#5987](https://github.com/ROCm/aiter/pull/5987) | [HIP] [OPUS] [Perf] Route gfx950 large-expert decode to mult... | @xiaofei-zheng | open | 2026-09-30 | 2026-10-03 |
| [#6116](https://github.com/ROCm/aiter/pull/6116) | [Triton/Gluon] [GFX12] Gluon a8w8 Sparse MLA | @k50112113 | open | 2026-10-03 | 2026-10-03 |
| [#6117](https://github.com/ROCm/aiter/pull/6117) | [Triton/Gluon] [Config] [GFX12] MOE tune | @k50112113 | open | 2026-10-03 | 2026-10-03 |
| [#6108](https://github.com/ROCm/aiter/pull/6108) | [Triton/Gluon] Add non-causal support to unified attention | @amd-xavierwang | open | 2026-10-02 | 2026-10-03 |
| [#6112](https://github.com/ROCm/aiter/pull/6112) | [MLA gluon] Optional kv_len_hint to pick the bh16 KV split b... | @chien-an-chen | draft | 2026-10-02 | 2026-10-03 |
| [#6119](https://github.com/ROCm/aiter/pull/6119) | [HIP] [Bugfix] mxfp4 moe sort skip invalid ids (-1s) | @cagrikymk | open | 2026-10-03 | 2026-10-03 |
| [#6118](https://github.com/ROCm/aiter/pull/6118) | [Triton/Gluon] add multicast support to gfx1250 MXFP4 | @Boss2002n | open | 2026-10-03 | 2026-10-03 |
| [#5650](https://github.com/ROCm/aiter/pull/5650) | [Triton/Gluon] gfx942: dtype-split large-prefill attn_2d ent... | @mustafayildirim | open | 2026-09-18 | 2026-10-03 |
| [#5937](https://github.com/ROCm/aiter/pull/5937) | [FlyDSL] add mega_moe_tp support for gfx950 | @binding7012 | draft | 2026-09-29 | 2026-10-03 |
| [#5906](https://github.com/ROCm/aiter/pull/5906) | [Triton/Gluon] [FlyDSL] [MoE] Fuse G2L preparation for large... | @xytpai | draft | 2026-09-28 | 2026-10-03 |
| [#5728](https://github.com/ROCm/aiter/pull/5728) | [HIP] IQ2R: GLM-5.3 packed MoE path for TP4/TP8 on gfx950 | @ssharma4-amd | draft | 2026-09-21 | 2026-10-03 |
| [#6113](https://github.com/ROCm/aiter/pull/6113) | [FlyDSL] Fix force-reduce Stage-2 dispatch | @chandankumr | open | 2026-10-03 | 2026-10-03 |
| [#5913](https://github.com/ROCm/aiter/pull/5913) | [FlyDSL] feat(2stageGR) Two-stage Hyper-Connection Gated Res... | @damien-lejeune | open | 2026-09-28 | 2026-10-03 |
| [#6043](https://github.com/ROCm/aiter/pull/6043) | [Triton/Gluon] Tune bf16 a16w16 GEMM for Qwen3.5-397B on gfx... | @mqhc2020 | open | 2026-10-01 | 2026-10-03 |
| [#6076](https://github.com/ROCm/aiter/pull/6076) | [OPUS] [JIT] [Bugfix] Round RMSNorm bf16 stores to nearest e... | @Arist12 | open | 2026-10-02 | 2026-10-03 |
| [#6077](https://github.com/ROCm/aiter/pull/6077) | [Config] Add GLM-5.3-Flash TP2 tuned fused-MoE configs for g... | @willhu-jpg | open | 2026-10-02 | 2026-10-03 |
| [#6078](https://github.com/ROCm/aiter/pull/6078) | [HIP] [OPUS] Use gfx1250 320KB LDS for large-D SiTUv2 quant | @XiaobingSuper | open | 2026-10-02 | 2026-10-03 |
| [#6081](https://github.com/ROCm/aiter/pull/6081) | [Triton/Gluon] Fix: gfx1250 unified attetion faults and NaNs | @mqhc2020 | open | 2026-10-02 | 2026-10-03 |
| [#6085](https://github.com/ROCm/aiter/pull/6085) | [Config] add TP=2 (inter_dim=1536) tuned and untuned FMOE co... | @amd-bishwoadhikari | open | 2026-10-02 | 2026-10-03 |
| [#6090](https://github.com/ROCm/aiter/pull/6090) | [Config] [Tuning] Add tuned grouped MoE config for Qwen3.5 F... | @mqhc2020 | open | 2026-10-02 | 2026-10-03 |
| [#6091](https://github.com/ROCm/aiter/pull/6091) | [HIP] [MLA] Fix non-uniform query offsets after head folding | @xaguilar-amd | open | 2026-10-02 | 2026-10-03 |
| [#6092](https://github.com/ROCm/aiter/pull/6092) | [Triton/Gluon] Fix Triton Conv2D/Conv3D caching for inferenc... | @saeid-rostami | open | 2026-10-02 | 2026-10-03 |
| [#6095](https://github.com/ROCm/aiter/pull/6095) | [Triton/Gluon] [Bugfix] Fix Triton topk for rows containing ... | @truong-v | open | 2026-10-02 | 2026-10-03 |
| [#6096](https://github.com/ROCm/aiter/pull/6096) | [Triton/Gluon] [Bugfix] fused_reduce_rms_fp8_group_quant: ma... | @truong-v | open | 2026-10-02 | 2026-10-03 |
| [#6098](https://github.com/ROCm/aiter/pull/6098) | [Triton/Gluon] Add lds-pipelined MLA variant | @AlexAUT | open | 2026-10-02 | 2026-10-03 |
| [#6099](https://github.com/ROCm/aiter/pull/6099) | [Triton/Gluon] [HIP] [FlyDSL] Gluon PA decode: ragged (varle... | @sshlyapn | open | 2026-10-02 | 2026-10-03 |
| [#6106](https://github.com/ROCm/aiter/pull/6106) | [Triton/Gluon] Add per token scale to a8w8 moe gemm | @nsusanto | open | 2026-10-02 | 2026-10-03 |
| [#6107](https://github.com/ROCm/aiter/pull/6107) | [HIP] [JIT] [Feature] MLA decode: add get_mla_decode_shape_s... | @okorzh-amd | open | 2026-10-02 | 2026-10-03 |
| [#6111](https://github.com/ROCm/aiter/pull/6111) | [op_tests] test_gemm_a8w8_blockscale: --graph/--graph-replay... | @arakowsk-amd | open | 2026-10-02 | 2026-10-03 |
| [#6038](https://github.com/ROCm/aiter/pull/6038) | [Triton/Gluon] [Kernel] Add fused gated RMSNorm + MXFP4 quan... | @mjkvaak-amd | draft | 2026-10-01 | 2026-10-03 |
| [#6050](https://github.com/ROCm/aiter/pull/6050) | [FlyDSL] [CI] Add HY4 MXFP8 heterogeneous MoE fusion | @qli88 | draft | 2026-10-01 | 2026-10-03 |
| [#6025](https://github.com/ROCm/aiter/pull/6025) | [ASM] [HIP] Tune Qwen3.8 mxfp4 con 32 and 64 with emsort asm | @JohnNikolay84 | open | 2026-09-30 | 2026-10-02 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | [HIP] [JIT] Add Windows support | @0xDELUXA | open | 2026-04-11 | 2026-10-02 |
| [#6017](https://github.com/ROCm/aiter/pull/6017) | [Triton/Gluon] tune prefill num_warps on gfx950 (sequence la... | @nidal567 | open | 2026-09-30 | 2026-10-02 |
| [#6102](https://github.com/ROCm/aiter/pull/6102) | [Triton/Gluon] Add Triton PR Checklist | @brunomazzottiamd | draft | 2026-10-02 | 2026-10-02 |
| [#6067](https://github.com/ROCm/aiter/pull/6067) | [ASM] [HIP] Replace gfx950 f4gemm 256x256 kernel with a pers... | @tarik-sarac | open | 2026-10-01 | 2026-10-02 |
| [#5832](https://github.com/ROCm/aiter/pull/5832) | [Triton/Gluon] [Perf] MXFP8 MoE: keep the MFMA in FP8 when M... | @akii96 | open | 2026-09-25 | 2026-10-02 |
| [#5540](https://github.com/ROCm/aiter/pull/5540) | [CI] Add stale pull request label | @Boss2002n | open | 2026-09-15 | 2026-10-02 |
| [#6109](https://github.com/ROCm/aiter/pull/6109) | benchmark and tune for fused_reduce_qk_norm_rope_swa_write o... | @nidal567 | open | 2026-10-02 | 2026-10-02 |
| [#5996](https://github.com/ROCm/aiter/pull/5996) | [Triton/Gluon] [FlyDSL] FlyDSL QSA indexer scorer + sparse G... | @SamiAario-AMD | draft | 2026-09-30 | 2026-10-02 |
| [#5799](https://github.com/ROCm/aiter/pull/5799) | [CustomAllreduce] Re-take the expandable_segments decision a... | @okorzh-amd | open | 2026-09-23 | 2026-10-02 |
| [#5868](https://github.com/ROCm/aiter/pull/5868) | [Triton/Gluon] unified_attention 2D: optional block skipping... | @amd-sonsingh | open | 2026-09-26 | 2026-10-02 |
| [#5867](https://github.com/ROCm/aiter/pull/5867) | [Triton/Gluon] DSR1 GEMM tuning | @azaidy | open | 2026-09-26 | 2026-10-02 |
| [#6089](https://github.com/ROCm/aiter/pull/6089) | [Config] [Perf] [gfx950] Add Kimi-K3 BF16 decode GEMM config... | @xiaohuguo2023 | open | 2026-10-02 | 2026-10-02 |
| [#5989](https://github.com/ROCm/aiter/pull/5989) | [CI] [JIT] Fix ATOM GPU isolation and startup failures | @leo-automation | open | 2026-09-30 | 2026-10-02 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [OPUS] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM... | @vedenev-amd | open | 2026-07-07 | 2026-10-02 |
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton/Gluon] unified_attention: mask V load and output sto... | @reger-men | open | 2026-06-12 | 2026-10-02 |
| [#5859](https://github.com/ROCm/aiter/pull/5859) | [Triton/Gluon] PA decode: config-driven v1/v2 dispatch, gfx9... | @NimitPtl | open | 2026-09-25 | 2026-10-02 |
| [#5637](https://github.com/ROCm/aiter/pull/5637) | [Triton/Gluon] Add gfx1250 per-tensor FP8 MHA prefill | @Yu-Zhewen | open | 2026-09-17 | 2026-10-02 |
| [#5909](https://github.com/ROCm/aiter/pull/5909) | [Triton/Gluon] Gluon PA decode: fix VGPR blow-up on Triton 3... | @sshlyapn | open | 2026-09-28 | 2026-10-02 |
| [#6100](https://github.com/ROCm/aiter/pull/6100) | [ASM] [HIP] Fuse the router GEMM and top-k softmax into one ... | @maeehart | draft | 2026-10-02 | 2026-10-02 |
| [#6101](https://github.com/ROCm/aiter/pull/6101) | [ASM] [HIP] Add a gfx950 asm GEMM with BF16 activations and ... | @maeehart | draft | 2026-10-02 | 2026-10-02 |
| [#5333](https://github.com/ROCm/aiter/pull/5333) | [Triton/Gluon] [tune][gfx1100] | @jasberc | open | 2026-09-08 | 2026-10-02 |
| [#4444](https://github.com/ROCm/aiter/pull/4444) | [Triton/Gluon] [Test] Add SDXL 1.0 conv2d shapes to conv_sha... | @Ragua1 | open | 2026-07-29 | 2026-10-02 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-10-02 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-10-02 |
| [#6015](https://github.com/ROCm/aiter/pull/6015) | [Triton/Gluon] [Perf] [gfx950] Tune afp4wfp4 decode configs ... | @reger-men | open | 2026-09-30 | 2026-10-02 |
| [#6024](https://github.com/ROCm/aiter/pull/6024) | [Triton/Gluon] [Perf] fused_reduce_act_mul_and_mxfp4_quant: ... | @reger-men | open | 2026-09-30 | 2026-10-02 |
| [#6018](https://github.com/ROCm/aiter/pull/6018) | [Triton/Gluon] [Perf] Fix dynamic_mxfp4_quant launch grid fo... | @reger-men | open | 2026-09-30 | 2026-10-02 |
| [#4894](https://github.com/ROCm/aiter/pull/4894) | [Triton/Gluon] Add gluon support for MXFP4 and MXFP8 quant k... | @NimitPtl | open | 2026-08-21 | 2026-10-02 |
| [#4383](https://github.com/ROCm/aiter/pull/4383) | [Triton/Gluon] Add gluon support for MXFP4 and MXFP8 quant k... | @NimitPtl | open | 2026-07-24 | 2026-10-02 |
| [#5670](https://github.com/ROCm/aiter/pull/5670) | [FlyDSL] Fused all-reduce + RMSNorm | @vpietila-amd | draft | 2026-09-18 | 2026-10-02 |
| [#5730](https://github.com/ROCm/aiter/pull/5730) | docs: Copilot FlyDSL path instructions and review-pr C5 | @samremes | open | 2026-09-21 | 2026-10-02 |
| [#6083](https://github.com/ROCm/aiter/pull/6083) | [Triton/Gluon] [FlyDSL] FlyDSL QSA indexer scorer + sparse G... | @SamiAario-AMD | draft | 2026-10-02 | 2026-10-02 |
| [#6036](https://github.com/ROCm/aiter/pull/6036) | [HIP] [JIT] [Kernel] fused MoE sorting: single-launch bitmas... | @sumin-hong | open | 2026-10-01 | 2026-10-02 |
| [#5953](https://github.com/ROCm/aiter/pull/5953) | [Config] config: GLM-5.3-Flash fused shared MoE rows for gfx... | @jin-amd | open | 2026-09-29 | 2026-10-02 |
| [#5677](https://github.com/ROCm/aiter/pull/5677) | [FlyDSL] Adaptive decode Top-K kernel, dispatched by one mea... | @JH-Leon-KIM-AMD | draft | 2026-09-18 | 2026-10-02 |
| [#6088](https://github.com/ROCm/aiter/pull/6088) | [FlyDSL] Tune Kimi-K3 ptpc bpreshuffle GEMMs on gfx1250 | @XiaobingSuper | draft | 2026-10-02 | 2026-10-02 |
| [#5988](https://github.com/ROCm/aiter/pull/5988) | Add gfx950 Q256 fused MXFP4 prefill pipeline | @vstakhov-amd | draft | 2026-09-30 | 2026-10-02 |
| [#5949](https://github.com/ROCm/aiter/pull/5949) | [FlyDSL] Speed up gfx950 head-256 single-M-tile paged-attent... | @samremes | draft | 2026-09-29 | 2026-10-02 |
| [#6060](https://github.com/ROCm/aiter/pull/6060) | [FlyDSL] gfx950 MXFP8 bmm: 1x32 weight scales, grouped XCD o... | @sshlyapn | open | 2026-10-01 | 2026-10-02 |
| [#6086](https://github.com/ROCm/aiter/pull/6086) | [cktile BF16-MXFP4 MOE][bug] Fix wrong output with `model_di... | @fxmarty-amd | draft | 2026-10-02 | 2026-10-02 |
| [#5721](https://github.com/ROCm/aiter/pull/5721) | [Triton/Gluon] [gfx942] Enable sparse_mla_fwd on gfx942 | @jin-amd | open | 2026-09-21 | 2026-10-02 |
| [#5920](https://github.com/ROCm/aiter/pull/5920) | [Perf] Add SPLIT_UNMASKED_LOOP=true to fp8 Gemma4 prefill un... | @simondanielsson | draft | 2026-09-28 | 2026-10-02 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | [FlyDSL] Implement FlyDSL version of fused_qk_norm_mrope_3d_... | @amd-meskelin | open | 2026-07-24 | 2026-10-02 |
| [#6055](https://github.com/ROCm/aiter/pull/6055) | Pin EP gemm1 cluster_m=1 for DSV4 grouped MoE | @yanboshao | open | 2026-10-01 | 2026-10-02 |
| [#5914](https://github.com/ROCm/aiter/pull/5914) | [HIP] [Perf] Optionally emit fp8-quantized Q from fused_qk_n... | @mpashkovskii | open | 2026-09-28 | 2026-10-02 |
| [#6039](https://github.com/ROCm/aiter/pull/6039) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @mjkvaak-amd | open | 2026-10-01 | 2026-10-02 |
| [#5578](https://github.com/ROCm/aiter/pull/5578) | [Triton/Gluon] Add MXFP8 Flash Attention v2 (gfx950 / CDNA4) | @WuLei-AMD | open | 2026-09-16 | 2026-10-02 |
| [#5822](https://github.com/ROCm/aiter/pull/5822) | [Triton/Gluon] Add tiled MoE sorting for M3 prefill | @whx-sjtu | open | 2026-09-24 | 2026-10-02 |
| [#6042](https://github.com/ROCm/aiter/pull/6042) | [Triton/Gluon] Avoid the peeled sparse MLA spill on 64-bit g... | @1am9trash | open | 2026-10-01 | 2026-10-02 |
| [#6068](https://github.com/ROCm/aiter/pull/6068) | [Triton/Gluon] Reduce tests | @vgokhale | open | 2026-10-01 | 2026-10-02 |
| [#6074](https://github.com/ROCm/aiter/pull/6074) | [FlyDSL] gfx1250 FMHA prefill: longest-first dispatch and KV... | @jhinpan | draft | 2026-10-02 | 2026-10-02 |
| [#5985](https://github.com/ROCm/aiter/pull/5985) | [HIP] Opt group quant gfx1250 | @yzhou103 | open | 2026-09-30 | 2026-10-02 |
| [#5994](https://github.com/ROCm/aiter/pull/5994) | [Config] Add gfx950 a8w8 blockscale GEMM tunings for GLM-5.2... | @jbelloncastro | open | 2026-09-30 | 2026-10-02 |
| [#5999](https://github.com/ROCm/aiter/pull/5999) | [Config] tuning: qwen35 bf16 gemm tuning on gfx1250 | @mqhc2020 | open | 2026-09-30 | 2026-10-02 |
| [#6031](https://github.com/ROCm/aiter/pull/6031) | [HIP] [JIT] Add M3 sequence-parallel collectives | @whx-sjtu | open | 2026-10-01 | 2026-10-02 |
| [#6033](https://github.com/ROCm/aiter/pull/6033) | [Config] Add Qwen3.8-27B TP1 a8w8 blockscale B-preshuffle GE... | @prashant182 | open | 2026-10-01 | 2026-10-02 |
| [#6040](https://github.com/ROCm/aiter/pull/6040) | [HIP] [Bugfix] Make get_ps_metadata_v1 transfers stream-orde... | @billishyahao | open | 2026-10-01 | 2026-10-02 |
| [#6041](https://github.com/ROCm/aiter/pull/6041) | [Triton/Gluon] [Bugfix] Honor padding_value in HSTU referenc... | @adenzhou1350 | open | 2026-10-01 | 2026-10-02 |
| [#6047](https://github.com/ROCm/aiter/pull/6047) | [FlyDSL] MiniMax-M3 fused sparse-layer decode | @akii96 | open | 2026-10-01 | 2026-10-02 |
| [#6049](https://github.com/ROCm/aiter/pull/6049) | [FlyDSL] QuickAllReduce INT4: add a shared global divisor to... | @msaffari-amd | open | 2026-10-01 | 2026-10-02 |
| [#6052](https://github.com/ROCm/aiter/pull/6052) | [FlyDSL] [CI] MegaMoE: stage1_fused/stage2_fused switches, m... | @yanboshao | open | 2026-10-01 | 2026-10-02 |
| [#6061](https://github.com/ROCm/aiter/pull/6061) | [Triton/Gluon] [Config] [Perf] Tune gfx950 GEMM configs for ... | @heslami | open | 2026-10-01 | 2026-10-02 |
| [#6064](https://github.com/ROCm/aiter/pull/6064) | [FlyDSL] [Perf] Add exact-M4 native MXFP4 GLM MoE pipeline | @heslami | open | 2026-10-01 | 2026-10-02 |
| [#6065](https://github.com/ROCm/aiter/pull/6065) | [FlyDSL] [Perf] Add exact-M8 native MXFP4 GLM MoE route merg... | @heslami | open | 2026-10-01 | 2026-10-02 |
| [#6066](https://github.com/ROCm/aiter/pull/6066) | gfx1201: MiniMax-H3 multi-GPU (Ulysses SP2/4/8) ops | @Shan2L | open | 2026-10-01 | 2026-10-02 |
| [#6070](https://github.com/ROCm/aiter/pull/6070) | [HIP] Fuse mHC pre RMSNorm with per-token FP8 quant | @Raiden-Makoto | open | 2026-10-01 | 2026-10-02 |
| [#6071](https://github.com/ROCm/aiter/pull/6071) | [Triton/Gluon] [Bench] Fix bench_moe_gemm_int8_smoothquant a... | @zhanglx13 | open | 2026-10-02 | 2026-10-02 |
| [#6073](https://github.com/ROCm/aiter/pull/6073) | [Triton/Gluon] [Bench] Remove bench_gemm_afp4wfp4_pre_quant_... | @zhanglx13 | open | 2026-10-02 | 2026-10-02 |
| [#5520](https://github.com/ROCm/aiter/pull/5520) | [Triton/Gluon] Fused Qwen3-Next GDN decode op for gfx950 | @rbrugaro-amd | open | 2026-09-15 | 2026-10-02 |
| [#5715](https://github.com/ROCm/aiter/pull/5715) | [Triton/Gluon] [CI] [Kernel] Gluon paged-decode attention wi... | @rbrugaro-amd | open | 2026-09-21 | 2026-10-01 |
| [#5850](https://github.com/ROCm/aiter/pull/5850) | [Triton/Gluon] Route GLM-5 qkv_a_proj decode tiers to the tr... | @xiaofei-zheng | open | 2026-09-25 | 2026-10-01 |
| [#5669](https://github.com/ROCm/aiter/pull/5669) | [Triton/Gluon] [Config] triton: add Qwen3.8-27B MXFP4 GDN in... | @abrahamzewoudie | open | 2026-09-18 | 2026-10-01 |
| [#5605](https://github.com/ROCm/aiter/pull/5605) | [Build] prebuild: add the missing nmask/nlse bf16 mha_varlen... | @Arist12 | open | 2026-09-16 | 2026-10-01 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-10-01 |
| [#6035](https://github.com/ROCm/aiter/pull/6035) | [Triton/Gluon] Remove bad moe gemm wrapper code | @lburzawa | open | 2026-10-01 | 2026-10-01 |
| [#6019](https://github.com/ROCm/aiter/pull/6019) | [Triton/Gluon] [Config] k3 gfx950 tuning bf16 tp8 shapes | @nsusanto | open | 2026-09-30 | 2026-10-01 |
| [#6020](https://github.com/ROCm/aiter/pull/6020) | [FlyDSL] Add a GFX11 wave32 FlashAttention variant for gfx11... | @weimin023 | draft | 2026-09-30 | 2026-10-01 |
| [#5535](https://github.com/ROCm/aiter/pull/5535) | [ASM] [Fix] Scale gfx950 FP8 MLA softmax numerators before E... | @tanth47 | open | 2026-09-15 | 2026-10-01 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | [FlyDSL] gfx1201 (RDNA4) FlyDSL BF16 attention optimizations... | @pds-amd | open | 2026-07-10 | 2026-10-01 |
| [#4687](https://github.com/ROCm/aiter/pull/4687) | [Triton/Gluon] [gfx1250] fp8_mqa_logits: fix epilogue store ... | @lijinpei-amd | open | 2026-08-11 | 2026-10-01 |
| [#4685](https://github.com/ROCm/aiter/pull/4685) | [Triton/Gluon] batched_gemm_a16wfp4: ragged-K regression tes... | @lijinpei-amd | open | 2026-08-11 | 2026-10-01 |
| [#6054](https://github.com/ROCm/aiter/pull/6054) | fix: diverge on active chunks in topk decode | @simondanielsson | draft | 2026-10-01 | 2026-10-01 |
| [#5002](https://github.com/ROCm/aiter/pull/5002) | [Triton/Gluon] [gfx950] Add fused Q/K norm, RoPE, gate, and ... | @nholmber | open | 2026-08-26 | 2026-10-01 |
| [#5432](https://github.com/ROCm/aiter/pull/5432) | [Triton/Gluon] [Config] [GFX950] Unified Attention configs t... | @leonling-ll | open | 2026-09-11 | 2026-10-01 |
| [#5849](https://github.com/ROCm/aiter/pull/5849) | [MHA] Add a delta race, resume, finalist rounds and evidence... | @amd-bartgips | draft | 2026-09-25 | 2026-10-01 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [MHA] Add tuned-config dispatch and an exhaustive tuner for ... | @amd-bartgips | draft | 2026-09-22 | 2026-10-01 |
| [#5972](https://github.com/ROCm/aiter/pull/5972) | [OPUS] [Bugfix] Restore shadowed OPUS A16W16 cache-policy re... | @adenzhou1350 | open | 2026-09-30 | 2026-10-01 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | Add adaptive-blocked K5 prefill h-recurrence in GDN | @johannes-graner | draft | 2026-09-21 | 2026-10-01 |
| [#6051](https://github.com/ROCm/aiter/pull/6051) | [Bugfix] Support asymmetric Q/K and V heads in unified atten... | @pbkowalski | draft | 2026-10-01 | 2026-10-01 |
| [#5846](https://github.com/ROCm/aiter/pull/5846) | [Tuning] Share mp_tuner typed statuses and add a central tun... | @amd-bartgips | draft | 2026-09-25 | 2026-10-01 |
| [#5532](https://github.com/ROCm/aiter/pull/5532) | Add --fused-expert option to 2stage moe tests | @JohnNikolay84 | open | 2026-09-15 | 2026-10-01 |
| [#5409](https://github.com/ROCm/aiter/pull/5409) | [Triton/Gluon] Unified attention: opt-in prefill configs for... | @cpersson-amd | open | 2026-09-10 | 2026-10-01 |
| [#6026](https://github.com/ROCm/aiter/pull/6026) | [FlyDSL] Add fused KDA decode kernels on gfx950 | @yuychang | open | 2026-10-01 | 2026-10-01 |
| [#6037](https://github.com/ROCm/aiter/pull/6037) | [Kernel] Add HIP BF16 sparse MLA for GLM-5.3-Flash H64 prefi... | @sumin-hong | draft | 2026-10-01 | 2026-10-01 |
| [#5929](https://github.com/ROCm/aiter/pull/5929) | [Triton/Gluon] gfx950 split-KV 3D attention for head_dim >= ... | @prashant182 | open | 2026-09-29 | 2026-10-01 |
| [#5928](https://github.com/ROCm/aiter/pull/5928) | [Config] Add Gemma-4-31B TP1 a4w4 blockscale GEMM tunings fo... | @prashant182 | open | 2026-09-29 | 2026-10-01 |
| [#6030](https://github.com/ROCm/aiter/pull/6030) | [mHC][DSv4] gfx950 fused post+pre: use tile_m=16 for the FP3... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#5927](https://github.com/ROCm/aiter/pull/5927) | [Triton/Gluon] Make scaleM_pad a runtime argument in the act... | @prashant182 | open | 2026-09-29 | 2026-10-01 |
| [#5982](https://github.com/ROCm/aiter/pull/5982) | [Config] [gfx950] Add GLM-5.3-Flash TP4 fused KDA in-proj bf... | @Jacob0226 | open | 2026-09-30 | 2026-10-01 |
| [#6029](https://github.com/ROCm/aiter/pull/6029) | [Triton][CK][DSv4] wq_b / wo_b fp8 blockscale GEMMs (N=8192 ... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#5918](https://github.com/ROCm/aiter/pull/5918) | [HIP] Add fused all_reduce_add; retune gfx950 all-reduce dis... | @cpersson-amd | open | 2026-09-28 | 2026-10-01 |
| [#5966](https://github.com/ROCm/aiter/pull/5966) | [Triton/Gluon] [HIP] [CK] Add dsv41 MoE config file | @kkHuang-amd | open | 2026-09-30 | 2026-10-01 |
| [#5967](https://github.com/ROCm/aiter/pull/5967) | [CK] Add dsv41 some MoE tuning configs | @kkHuang-amd | open | 2026-09-30 | 2026-10-01 |
| [#5968](https://github.com/ROCm/aiter/pull/5968) | [Triton/Gluon] : Move Grouped MatMul into gemm/grouped | @rahulbatra85 | open | 2026-09-30 | 2026-10-01 |
| [#5969](https://github.com/ROCm/aiter/pull/5969) | [CK] [FlyDSL] Luwei/a8w8 blockscale | @LuweiZhou2025 | open | 2026-09-30 | 2026-10-01 |
| [#5970](https://github.com/ROCm/aiter/pull/5970) | [Triton/Gluon] [JIT] [kernel] Add an opt-in hipBLASLt groupe... | @WuLei-AMD | open | 2026-09-30 | 2026-10-01 |
| [#5971](https://github.com/ROCm/aiter/pull/5971) | [JIT] fix(jit): fail fast and retry third-party clone failur... | @adenzhou1350 | open | 2026-09-30 | 2026-10-01 |
| [#5975](https://github.com/ROCm/aiter/pull/5975) | [Triton/Gluon] [Bugfix] Decouple pure-Torch FP6 packers from... | @adenzhou1350 | open | 2026-09-30 | 2026-10-01 |
| [#5977](https://github.com/ROCm/aiter/pull/5977) | [ASM] [HIP] [gfx1250] asm mha bf16 hd192x128: strided q/k/v/... | @shay-li77 | open | 2026-09-30 | 2026-10-01 |
| [#5978](https://github.com/ROCm/aiter/pull/5978) | [HIP] Opt qk norm rope mla seg cache gfx1250 | @yzhou103 | open | 2026-09-30 | 2026-10-01 |
| [#5981](https://github.com/ROCm/aiter/pull/5981) | [Triton/Gluon] Tune gfx950 FP8 batched GEMM query/value conf... | @heslami | open | 2026-09-30 | 2026-10-01 |
| [#5986](https://github.com/ROCm/aiter/pull/5986) | Add GLM-5 MXFP4 EP4 decode fused-MoE rows | @xiaofei-zheng | open | 2026-09-30 | 2026-10-01 |
| [#5991](https://github.com/ROCm/aiter/pull/5991) | [Bugfix] Fix missing extension module names in pretune build... | @yuzhouo7 | open | 2026-09-30 | 2026-10-01 |
| [#5992](https://github.com/ROCm/aiter/pull/5992) | [FlyDSL] [gfx950] Causal conv1d prefill and GDN decode/verif... | @amd-nprotaso | open | 2026-09-30 | 2026-10-01 |
| [#5993](https://github.com/ROCm/aiter/pull/5993) | [FlyDSL] [gfx950] hc_mix kernel for Qwen3.8 hyper-connection... | @amd-nprotaso | open | 2026-09-30 | 2026-10-01 |
| [#5995](https://github.com/ROCm/aiter/pull/5995) | [FlyDSL] [gfx950] BF16 paged decode entry point for Qwen3.8 ... | @amd-nprotaso | open | 2026-09-30 | 2026-10-01 |
| [#5997](https://github.com/ROCm/aiter/pull/5997) | [Triton/Gluon] Seed gfx1150 (RDNA3.5) configs from gfx1151 | @Ragua1 | open | 2026-09-30 | 2026-10-01 |
| [#6000](https://github.com/ROCm/aiter/pull/6000) | [HIP] Support Gemma (1 + w) weights in fused AR+RMSNorm+MXFP... | @mjkvaak-amd | open | 2026-09-30 | 2026-10-01 |
| [#6003](https://github.com/ROCm/aiter/pull/6003) | [Config] DSv4 E=385/topk7 fused MoE: fp8-epilogue decode sta... | @AMD-yanfeiwang | open | 2026-09-30 | 2026-10-01 |
| [#6006](https://github.com/ROCm/aiter/pull/6006) | [CI] [Build] Publish a py3 wheel without prebuilt kernels ne... | @aryaman-gupta | open | 2026-09-30 | 2026-10-01 |
| [#6013](https://github.com/ROCm/aiter/pull/6013) | [CK] [CI] [Bugfix] Fix gfx942 FLAT candidates in ASM FMoE tu... | @yuzhouo7 | open | 2026-09-30 | 2026-10-01 |
| [#6016](https://github.com/ROCm/aiter/pull/6016) | [CK] [CI] [Bugfix] Align FMoE tuning token buckets with runt... | @yuzhouo7 | open | 2026-09-30 | 2026-10-01 |
| [#6022](https://github.com/ROCm/aiter/pull/6022) | [CK] [bug fix] Fix wrong cktile 2stages `moe_gemm1_heuristic... | @fxmarty-amd | open | 2026-09-30 | 2026-10-01 |
| [#5399](https://github.com/ROCm/aiter/pull/5399) | [Triton/Gluon] [gfx950] Fix ff_a16w16_fused M<=8 launch fail... | @yuyzhang512 | open | 2026-09-10 | 2026-09-30 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-09-30 |
| [#5903](https://github.com/ROCm/aiter/pull/5903) | [OPUS] small-M shapes for Kimi-K3 BF16 GEMMs for gfx950 | @samutamm | open | 2026-09-28 | 2026-09-30 |
| [#5882](https://github.com/ROCm/aiter/pull/5882) | [FlyDSL] [MLA] DeepSeek-V4 fp8 MLA decode (v4 nm) in one Fly... | @AMD-yanfeiwang | draft | 2026-09-27 | 2026-09-30 |
| [#5873](https://github.com/ROCm/aiter/pull/5873) | [Triton/Gluon] [Bugfix] Stop the split-K tail at K in the bl... | @siliangchen-amd | open | 2026-09-26 | 2026-09-30 |
| [#6005](https://github.com/ROCm/aiter/pull/6005) | [FlyDSL] HGEMM: keep the C shuffle in fp32 for fp32 output; ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#6001](https://github.com/ROCm/aiter/pull/6001) | [FlyDSL] fp8_mqa_logits: drop the host row-pad copies | @frida-andersson | open | 2026-09-30 | 2026-09-30 |
| [#6004](https://github.com/ROCm/aiter/pull/6004) | [Triton][DSv4] wqkv_a fp8 blockscale GEMM (N=2048, K=7168): ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#5555](https://github.com/ROCm/aiter/pull/5555) | [FlyDSL] Add QuickAllReduce INT6 and INT5 | @msaffari-amd | draft | 2026-09-15 | 2026-09-30 |
| [#5158](https://github.com/ROCm/aiter/pull/5158) | [Triton] unified_attention: share the split-loop tile body, ... | @alexnails | open | 2026-09-01 | 2026-09-30 |
| [#6002](https://github.com/ROCm/aiter/pull/6002) | [Triton][gfx942] Faster sparse MLA prefill at low head count... | @juuso-oskari | draft | 2026-09-30 | 2026-09-30 |
| [#5945](https://github.com/ROCm/aiter/pull/5945) | [Triton/Gluon] Move _triton_kernels/flash_attn_triton_amd/ u... | @Boss2002n | open | 2026-09-29 | 2026-09-30 |
| [#5461](https://github.com/ROCm/aiter/pull/5461) | [FlyDSL] One stage and two-stage ring all-reduce kernels for... | @vpietila-amd | draft | 2026-09-11 | 2026-09-30 |
| [#5973](https://github.com/ROCm/aiter/pull/5973) | [FlyDSL] Optimize batch 1-8 MoE decoding (3/3) | @luocheng25 | draft | 2026-09-30 | 2026-09-30 |
| [#5821](https://github.com/ROCm/aiter/pull/5821) | [Config] [DSv4] Tuned decode moe kernels for mori-EP backend... | @heachary | open | 2026-09-24 | 2026-09-30 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-09-30 |
| [#5907](https://github.com/ROCm/aiter/pull/5907) | [FlyDSL] [JIT] comm fused moe stage2 reducescatter for dsv4 ... | @yifehuan | open | 2026-09-28 | 2026-09-30 |
| [#5980](https://github.com/ROCm/aiter/pull/5980) | fused_qk_rope_cat_and_cache_mla: add a NoPE variant | @amd-mvarjoka | draft | 2026-09-30 | 2026-09-30 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [JIT] [gfx942] Optimize long-context FMHA with s... | @amd-yashagar | open | 2026-09-16 | 2026-09-30 |
| [#5211](https://github.com/ROCm/aiter/pull/5211) | [ASM] [HIP] fix(mla): mark bf16 mla_pfl prefill CSV/lookup a... | @amd-yashagar | open | 2026-09-02 | 2026-09-30 |
| [#5983](https://github.com/ROCm/aiter/pull/5983) | [Triton/Gluon] [Config] Fix gfx950 FP8 preshuffle shared-mem... | @whx-sjtu | draft | 2026-09-30 | 2026-09-30 |
| [#5899](https://github.com/ROCm/aiter/pull/5899) | [FlyDSL] [gfx1250] Overlap decode compact plan with dispatch | @XingerZhu | open | 2026-09-28 | 2026-09-30 |
| [#5500](https://github.com/ROCm/aiter/pull/5500) | [Config] configs: GLM-5.3-Flash a8w8 blockscale fused-MoE co... | @jin-amd | open | 2026-09-14 | 2026-09-30 |
| [#5812](https://github.com/ROCm/aiter/pull/5812) | [HIP] [CK] [FlyDSL] Add scatter epilog to layout-v2 GEMM2 (p... | @charlieguo1106 | open | 2026-09-24 | 2026-09-30 |
| [#4747](https://github.com/ROCm/aiter/pull/4747) | Fp8 mxscale bmm bpreshuffle opt | @yzhou103 | draft | 2026-08-14 | 2026-09-30 |
| [#5956](https://github.com/ROCm/aiter/pull/5956) | [Triton/Gluon] [Kimi-K3][ROCm] Tune prefill merged-front sha... | @jiacao-amd | draft | 2026-09-29 | 2026-09-30 |
| [#5961](https://github.com/ROCm/aiter/pull/5961) | [Triton/Gluon] [Config] gemm_a16w16: add gfx1101 (RDNA3) con... | @Ragua1 | open | 2026-09-29 | 2026-09-30 |
| [#5960](https://github.com/ROCm/aiter/pull/5960) | [Triton/Gluon] [Config] Add gemm_a8w8 Triton config for gfx1... | @Ragua1 | open | 2026-09-29 | 2026-09-30 |
| [#5600](https://github.com/ROCm/aiter/pull/5600) | [Triton/Gluon] fix(gluon): harden paged MQA logits prefetch ... | @fallow5 | open | 2026-09-16 | 2026-09-30 |
| [#5965](https://github.com/ROCm/aiter/pull/5965) | [HIP] Enable gfx1250 QuickReduce for TP2 and TP4 | @hubertlu-tw | open | 2026-09-30 | 2026-09-30 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-09-30 |
| [#5855](https://github.com/ROCm/aiter/pull/5855) | [MORI] Multi-node + MORI_V2 | @k50112113 | open | 2026-09-25 | 2026-09-30 |
| [#5922](https://github.com/ROCm/aiter/pull/5922) | [Triton/Gluon] [Config] : Add Inkling Model GEMM Configs | @rahulbatra85 | open | 2026-09-29 | 2026-09-30 |
| [#5925](https://github.com/ROCm/aiter/pull/5925) | [FlyDSL] [FP4 MQA logits] Stop serving-time recompiles of _p... | @AMD-yanfeiwang | open | 2026-09-29 | 2026-09-30 |
| [#5936](https://github.com/ROCm/aiter/pull/5936) | [HIP] fix: remove stale MXFP4 MoE aux generated sources | @adenzhou1350 | open | 2026-09-29 | 2026-09-30 |
| [#5938](https://github.com/ROCm/aiter/pull/5938) | [JIT] fix(jit): keep detached-head advice local to third-par... | @adenzhou1350 | open | 2026-09-29 | 2026-09-30 |
| [#5948](https://github.com/ROCm/aiter/pull/5948) | [HIP] Fix 3D binary-op broadcast guard for incompatible shap... | @adenzhou1350 | open | 2026-09-29 | 2026-09-30 |
| [#5955](https://github.com/ROCm/aiter/pull/5955) | [HIP] [JIT] Fuse six-way split-K reduction and q/KV RMSNorm | @heslami | open | 2026-09-29 | 2026-09-30 |
| [#5964](https://github.com/ROCm/aiter/pull/5964) | [Triton/Gluon] Fix docs and remove Kpack from 1250 configs | @Boss2002n | open | 2026-09-29 | 2026-09-30 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] fp8 unified attention for gfx950 | @johannes-graner | draft | 2026-08-11 | 2026-09-30 |
| [#5577](https://github.com/ROCm/aiter/pull/5577) | [Triton/Gluon] Add FP8 Flash Attention v2 kernel (gfx942/gfx... | @WuLei-AMD | open | 2026-09-16 | 2026-09-29 |
| [#5157](https://github.com/ROCm/aiter/pull/5157) | [Triton/Gluon] unified_attention: split the straggler genera... | @alexnails | open | 2026-09-01 | 2026-09-29 |
| [#5794](https://github.com/ROCm/aiter/pull/5794) | [ASM] [HIP] feat(fmoe): add SwiGLU OAI MXFP4 FLAT kernels fo... | @alexioslyrakis-amd | open | 2026-09-23 | 2026-09-29 |
| [#5911](https://github.com/ROCm/aiter/pull/5911) | [HIP] fix(quant): remove duplicate hip_bfloat16 template spe... | @shantipriya-amd | open | 2026-09-28 | 2026-09-29 |
| [#5950](https://github.com/ROCm/aiter/pull/5950) | [DO NOT MERGE] Add GPU ASan CI | @leo-automation | draft | 2026-09-29 | 2026-09-29 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-29 |
| [#5898](https://github.com/ROCm/aiter/pull/5898) | [CI] CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | open | 2026-09-28 | 2026-09-29 |
| [#5342](https://github.com/ROCm/aiter/pull/5342) | [FlyDSL] [Feature] Precompile only the GEMM kernels the whee... | @RElbers | open | 2026-09-08 | 2026-09-29 |
| [#5668](https://github.com/ROCm/aiter/pull/5668) | [OPUS] Key the MXFP8 BMM tuned lookup on cu_num | @RElbers | open | 2026-09-18 | 2026-09-29 |
| [#5932](https://github.com/ROCm/aiter/pull/5932) | [FlyDSL] Optimize MI308 MoE Down kernels and add BF16 suppor... | @luocheng25 | draft | 2026-09-29 | 2026-09-29 |
| [#5624](https://github.com/ROCm/aiter/pull/5624) | [Triton/Gluon] Accept strided leading dimensions in GDN L2No... | @vorapolsiloai | open | 2026-09-17 | 2026-09-29 |
| [#5614](https://github.com/ROCm/aiter/pull/5614) | [Triton/Gluon] [Bugfix] [Perf] Fix non-preshuffle MQA paging... | @zhiding512 | open | 2026-09-17 | 2026-09-29 |
| [#5340](https://github.com/ROCm/aiter/pull/5340) | [HIP] [CI] [JIT] [Feature] Add gfx:cu_num build targets so o... | @RElbers | open | 2026-09-08 | 2026-09-29 |
| [#5820](https://github.com/ROCm/aiter/pull/5820) | [FlyDSL] [gfx950] Qwen3.8 kernels | @amd-nprotaso | open | 2026-09-24 | 2026-09-29 |
| [#5848](https://github.com/ROCm/aiter/pull/5848) | Fix the hardcoded die and CU counts in the opus kernels | @RElbers | draft | 2026-09-25 | 2026-09-29 |
| [#5505](https://github.com/ROCm/aiter/pull/5505) | Fix the hardcoded die and CU counts in the Triton kernels | @RElbers | draft | 2026-09-14 | 2026-09-29 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | Fix the hardcoded die and CU counts in the FlyDSL kernels | @RElbers | draft | 2026-09-14 | 2026-09-29 |
| [#5182](https://github.com/ROCm/aiter/pull/5182) | [JIT] Identify MI350P, and stop hardcoding the XCD count | @RElbers | open | 2026-09-01 | 2026-09-29 |
| [#5809](https://github.com/ROCm/aiter/pull/5809) | [Triton/Gluon] [FlyDSL] [CI] Refactor PA decode and use nati... | @fsx950223 | open | 2026-09-24 | 2026-09-29 |
| [#5523](https://github.com/ROCm/aiter/pull/5523) | [Flydsl] stop the A16W16 pruner from evicting every HTI conf... | @huizzhan | draft | 2026-09-15 | 2026-09-29 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | open | 2026-08-26 | 2026-09-29 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-09-29 |
| [#5924](https://github.com/ROCm/aiter/pull/5924) | [HIP] [Bugfix] Guard gfx942 BF16 MLA KV address span | @BANANASJIM | draft | 2026-09-29 | 2026-09-29 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-09-29 |
| [#5775](https://github.com/ROCm/aiter/pull/5775) | [Bug fix]Custom_all_reduce: send the real IPC offset instead... | @zhou9402 | open | 2026-09-23 | 2026-09-29 |
| [#5921](https://github.com/ROCm/aiter/pull/5921) | [FlyDSL] fp8_mqa_logits: derive the split target from kernel... | @akii96 | open | 2026-09-29 | 2026-09-29 |
| [#5890](https://github.com/ROCm/aiter/pull/5890) | [MLA v4 nm] Split plan helper for callers and cost-model spl... | @yhl-amd | open | 2026-09-27 | 2026-09-29 |
| [#5900](https://github.com/ROCm/aiter/pull/5900) | [ASM] [HIP] [JIT] [Feature] Add gfx1201 SageAttention operat... | @Shan2L | open | 2026-09-28 | 2026-09-29 |
| [#5910](https://github.com/ROCm/aiter/pull/5910) | [fix] Make dropout-free varlen attention inference CUDA-grap... | @lauri9 | open | 2026-09-28 | 2026-09-29 |
| [#5893](https://github.com/ROCm/aiter/pull/5893) | [HIP] fix(mla): stop gfx950 MLA decode from reading wrong KV... | @vanshbhatia-amd | open | 2026-09-27 | 2026-09-28 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [KIMI-K3] Enable KDA per-channel decay gate in FlyD... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-09-28 |
| [#5692](https://github.com/ROCm/aiter/pull/5692) | [Triton/Gluon] [ASM] [HIP] Chefang/fix pa gqa16 short tail p... | @fangche123 | open | 2026-09-20 | 2026-09-28 |
| [#5764](https://github.com/ROCm/aiter/pull/5764) | WORKAROUND - fix a1_scale out-of-bounds read in fmoe_fp8_blo... | @afriedri | open | 2026-09-22 | 2026-09-28 |
| [#5320](https://github.com/ROCm/aiter/pull/5320) | [Triton/Gluon] Fix int32 overflow in _gluon_deepgemm_fp8_pag... | @wufann | open | 2026-09-08 | 2026-09-28 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-09-28 |
| [#5915](https://github.com/ROCm/aiter/pull/5915) | [Triton/Gluon] Gluon PA decode: fix causal mask across split... | @sshlyapn | open | 2026-09-28 | 2026-09-28 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-09-28 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-09-28 |
| [#5883](https://github.com/ROCm/aiter/pull/5883) | Ci timeout fix recon | @TennyWang1223 | open | 2026-09-27 | 2026-09-28 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-09-28 |
| [#5902](https://github.com/ROCm/aiter/pull/5902) | [Config] [Perf] Retune GLM5 MXFP4 FMoE for gfx950 | @XiaobingSuper | draft | 2026-09-28 | 2026-09-28 |
| [#5795](https://github.com/ROCm/aiter/pull/5795) | [FlyDSL] Modularize MI308 MoE kernels (1/3) | @luocheng25 | open | 2026-09-23 | 2026-09-28 |
| [#5727](https://github.com/ROCm/aiter/pull/5727) | [WIP] Add MoonEP prefill and decode planning policies | @JiaoliangYu | draft | 2026-09-21 | 2026-09-28 |
| [#5897](https://github.com/ROCm/aiter/pull/5897) | [WIP] [Triton/Gluon] gfx950 a16w16: compute-bound Gluon kern... | @zhanglx13 | draft | 2026-09-28 | 2026-09-28 |
| [#5626](https://github.com/ROCm/aiter/pull/5626) | [FlyDSL] M3 index score flydsl | @ganyi1996ppo | open | 2026-09-17 | 2026-09-28 |
| [#5884](https://github.com/ROCm/aiter/pull/5884) | [FlyDSL] Respect GPU_ARCHS for Grouped MoE AOT builds | @chandankumr | open | 2026-09-27 | 2026-09-28 |
| [#5887](https://github.com/ROCm/aiter/pull/5887) | [FlyDSL] [PA] Extend pa decode tile to support Qlen8 and SWA... | @sammysun0711 | open | 2026-09-27 | 2026-09-28 |
| [#5891](https://github.com/ROCm/aiter/pull/5891) | [HIP] [FlyDSL] [MoE]: Optimize MiMo MXFP4 EP8/EP16 on gfx950 | @sammysun0711 | open | 2026-09-27 | 2026-09-28 |
| [#4968](https://github.com/ROCm/aiter/pull/4968) | [Triton/Gluon] [PA] Support Q/K D192 with asymmetric K/V hea... | @sammysun0711 | open | 2026-08-24 | 2026-09-27 |
| [#5704](https://github.com/ROCm/aiter/pull/5704) | [FlyDSL] [CI] [gfx1250] stage1 fused for mega-moe EP | @XingerZhu | open | 2026-09-20 | 2026-09-27 |
| [#5808](https://github.com/ROCm/aiter/pull/5808) | [ASM] [gfx1250] mla qh32 decode ams kernel version2 | @feifei14119 | open | 2026-09-24 | 2026-09-27 |
| [#5811](https://github.com/ROCm/aiter/pull/5811) | [ASM] [HIP] [gfx1250] mla qh32 decode ams kernel version3 | @feifei14119 | open | 2026-09-24 | 2026-09-27 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-09-27 |
| [#5870](https://github.com/ROCm/aiter/pull/5870) | [Config] Qwen3.8-Flash-Next FP8 tuned configs for gfx950 (MI... | @mavizao | open | 2026-09-26 | 2026-09-27 |
| [#5881](https://github.com/ROCm/aiter/pull/5881) | [FlyDSL] Fuse the GDN gated RMSNorm into the out_proj GEMM f... | @maeehart | draft | 2026-09-26 | 2026-09-26 |
| [#5872](https://github.com/ROCm/aiter/pull/5872) | [Triton/Gluon] Unify GEMM tuning through config lookup | @Boss2002n | draft | 2026-09-26 | 2026-09-26 |
| [#5871](https://github.com/ROCm/aiter/pull/5871) | Satya/tune gemm via config lookup | @Boss2002n | draft | 2026-09-26 | 2026-09-26 |
| [#5478](https://github.com/ROCm/aiter/pull/5478) | [Triton/Gluon] [Attention] Add overflow-guarded per-call int... | @AranKomat | open | 2026-09-13 | 2026-09-26 |
| [#5218](https://github.com/ROCm/aiter/pull/5218) | [Triton/Gluon] [BENCHMARK] Adding utility function for torch... | @cagrikymk | open | 2026-09-02 | 2026-09-26 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [JIT] fix(jit): baton liveness is undecidable f... | @ThomasNing | open | 2026-09-03 | 2026-09-26 |
| [#5802](https://github.com/ROCm/aiter/pull/5802) | [FlyDSL] [Bugfix] Route a16w4 SiLU MoE to CK-Tile and apply ... | @kevin-mii | open | 2026-09-24 | 2026-09-26 |
| [#5803](https://github.com/ROCm/aiter/pull/5803) | review-pr: 40min agent timeout + retry only transient failur... | @zufayu | open | 2026-09-24 | 2026-09-26 |
| [#5804](https://github.com/ROCm/aiter/pull/5804) | [FlyDSL] fix(flydsl): support kmk3 ep moe & opt for ep moe g... | @Bernard-Liu | open | 2026-09-24 | 2026-09-26 |
| [#5562](https://github.com/ROCm/aiter/pull/5562) | [Perf] Add gfx950 DSV4.1 Flash EP4 a8w4 FMoE tuning | @kevin-mii | draft | 2026-09-15 | 2026-09-25 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner on gemm_moe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-09-25 |
| [#5831](https://github.com/ROCm/aiter/pull/5831) | [Triton/Gluon] [fix] moe_gemm_mxfp8: zero-init output, graph... | @akii96 | open | 2026-09-25 | 2026-09-25 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-09-25 |
| [#5825](https://github.com/ROCm/aiter/pull/5825) | [FlyDSL] Opt-in gfx942 SiLU A16W4 support and DSv4.1 Flash t... | @frida-andersson | draft | 2026-09-24 | 2026-09-25 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5745](https://github.com/ROCm/aiter/pull/5745) | [HIP] Guard GroupNorm vectorization at channel boundaries | @UD-mmcminn | open | 2026-09-22 | 2026-09-24 |
| [#5294](https://github.com/ROCm/aiter/pull/5294) | [Triton/Gluon] [gfx950] pa_decode_sparse: pick BLOCK_K by oc... | @stefanskiasan | open | 2026-09-05 | 2026-09-24 |
| [#5720](https://github.com/ROCm/aiter/pull/5720) | [HIP] [JIT] build: add gfx908 target metadata and GEMM defau... | @UD-mmcminn | open | 2026-09-21 | 2026-09-24 |
| [#5392](https://github.com/ROCm/aiter/pull/5392) | [HIP] Optional sigmoid on gated_rmsnorm_fp8_per_token_quant | @rebklee | open | 2026-09-10 | 2026-09-24 |
| [#5140](https://github.com/ROCm/aiter/pull/5140) | [HIP] [JIT] Add optimized FlashKDA prefill kernels for gfx95... | @jayzlee147 | open | 2026-08-31 | 2026-09-24 |
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-09-24 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-09-24 |
| [#5657](https://github.com/ROCm/aiter/pull/5657) | [Config] Add DeepSeek-V4-Flash GEMM configs for gfx950 | @amd-pedghazi | open | 2026-09-18 | 2026-09-24 |
| [#5786](https://github.com/ROCm/aiter/pull/5786) | [JIT] [Build] Make CK fmha kernel generation follow GPU_ARCH... | @qiangpan2 | open | 2026-09-23 | 2026-09-24 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-09-24 |
| [#5817](https://github.com/ROCm/aiter/pull/5817) | Feature/minimax m3 mxfp8 | @amd-yashagar | draft | 2026-09-24 | 2026-09-24 |
| [#5815](https://github.com/ROCm/aiter/pull/5815) | Add FlyDSL fused intranode all-to-all for Ulysses sequence-p... | @johannes-graner | draft | 2026-09-24 | 2026-09-24 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-09-24 |
| [#5196](https://github.com/ROCm/aiter/pull/5196) | [gfx1250] mla qh32 decode ams kernel version1 | @feifei14119 | open | 2026-09-02 | 2026-09-24 |
| [#5788](https://github.com/ROCm/aiter/pull/5788) | [HIP] [JIT] Topk index score minimax m3 | @demonsan | open | 2026-09-23 | 2026-09-24 |
| [#5693](https://github.com/ROCm/aiter/pull/5693) | [FlyDSL] [MoE] Add herd_fused_topk drop-in selector for fuse... | @charlieguo1106 | open | 2026-09-20 | 2026-09-24 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-09-24 |
| [#5398](https://github.com/ROCm/aiter/pull/5398) | [CK] [FlyDSL] Split layout-v2 MoE GEMM2 into mxmoe_g2 and ad... | @charlieguo1106 | open | 2026-09-10 | 2026-09-24 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-09-24 |
| [#5678](https://github.com/ROCm/aiter/pull/5678) | [HIP] [OPUS] [JIT] Add GPT-OSS IQ2R 2-bit MoE support | @ssharma4-amd | open | 2026-09-18 | 2026-09-24 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-09-24 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-09-24 |
| [#5784](https://github.com/ROCm/aiter/pull/5784) | [CI] Enable DeepSeek-V4-Pro 2P1D TP8 ATOM DI smoke cases | @avininjamay8 | open | 2026-09-23 | 2026-09-24 |
| [#5774](https://github.com/ROCm/aiter/pull/5774) | [Triton/Gluon] Add rotating-buffer GEMM A16W16 benchmark | @dyokelso | open | 2026-09-23 | 2026-09-23 |
| [#5793](https://github.com/ROCm/aiter/pull/5793) | [Triton/Gluon] [fix] Triton FA decode: bound K/V loads in no... | @amd-maradosa | open | 2026-09-23 | 2026-09-23 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | [CI] [JIT] Add gfx1201 BF16 G1U1 selected large-M Triton MoE... | @keneoneth | open | 2026-08-27 | 2026-09-23 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] Add MHA forward tuning scripts and kernel-info du... | @huishi-hs | open | 2026-08-26 | 2026-09-23 |
| [#5153](https://github.com/ROCm/aiter/pull/5153) | [Triton/Gluon][GFX950] Productize gluon mha kernel from GFX9... | @leonling-ll | draft | 2026-08-31 | 2026-09-23 |
| [#5634](https://github.com/ROCm/aiter/pull/5634) | [CI] Enable MiniMax-M3 MXFP8 2P1D TP8 ATOM DI CI use cases | @avininjamay8 | open | 2026-09-17 | 2026-09-23 |
| [#5782](https://github.com/ROCm/aiter/pull/5782) | Fp8 mqa logits gfx950 dsa tune | @EricKing626 | draft | 2026-09-23 | 2026-09-23 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-09-23 |
| [#5744](https://github.com/ROCm/aiter/pull/5744) | [FlyDSL] [AMD][MoE] Avoid layout-v2 stage2 and over-padded t... | @karverma-amd | open | 2026-09-22 | 2026-09-23 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-09-23 |
| [#5753](https://github.com/ROCm/aiter/pull/5753) | [CI] CI: extend ATOM watchdog for AITER JIT | @gyohuangxin | open | 2026-09-22 | 2026-09-23 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-09-23 |
| [#5773](https://github.com/ROCm/aiter/pull/5773) | [SMI] Add opt-in summary plots and raw-sample timelines | @arakowsk-amd | open | 2026-09-22 | 2026-09-23 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-09-23 |
| [#5642](https://github.com/ROCm/aiter/pull/5642) | [HIP] [Bugfix] paged_attention_ragged: scale FP8 softmax pro... | @rbrugaro-amd | open | 2026-09-17 | 2026-09-22 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
| [#5757](https://github.com/ROCm/aiter/pull/5757) | Qwe38 flash mxfp4 asm | @JohnNikolay84 | draft | 2026-09-22 | 2026-09-22 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-09-22 |
| [#5617](https://github.com/ROCm/aiter/pull/5617) | [CI] Satya/stale branch archive | @Boss2002n | open | 2026-09-17 | 2026-09-22 |
| [#5733](https://github.com/ROCm/aiter/pull/5733) | [HIP] [OPUS] [JIT] Revert " [GFX950]OPUS PA MQA Logits MXFP4... | @junhaha666 | open | 2026-09-21 | 2026-09-22 |
| [#5645](https://github.com/ROCm/aiter/pull/5645) | [CI] Remove stale `rocm/vllm-dev:nightly` image | @micah-wil | open | 2026-09-17 | 2026-09-21 |
| [#5688](https://github.com/ROCm/aiter/pull/5688) | [Config] configs(glm5.2): o_proj switches to CK Tile at M=10... | @ThomasNing | open | 2026-09-19 | 2026-09-21 |
| [#5404](https://github.com/ROCm/aiter/pull/5404) | [CK] [FlyDSL] [Perf] Add BM16 SwiGLU path for MiniMax M3 | @XiaobingSuper | draft | 2026-09-10 | 2026-09-21 |
| [#5719](https://github.com/ROCm/aiter/pull/5719) | [HIP] [JIT] [Build] Add GLM-5.3-Flash IQ2R 2-bit MoE support | @ssharma4-amd | draft | 2026-09-21 | 2026-09-21 |
| [#5701](https://github.com/ROCm/aiter/pull/5701) | [Config] [GFX1250][Moe] ep8 tuned config setup | @Zzz9990 | open | 2026-09-20 | 2026-09-21 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | [HIP] [CK] [JIT] torch-free a4w4 GEMM + C++ library build | @Micky774 | open | 2026-07-07 | 2026-09-21 |
| [#5518](https://github.com/ROCm/aiter/pull/5518) | [FlyDSL] [gfx950] Add explicit page strides and 64-bit rebas... | @LiuYinfeng01 | open | 2026-09-15 | 2026-09-21 |
| [#5301](https://github.com/ROCm/aiter/pull/5301) | [FlyDSL] [Kernel] gfx950 FP8 sparse MLA prefill and decode (... | @JohnQinAMD | open | 2026-09-07 | 2026-09-21 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables + fix MXFP4 aux... | @JiaoliangYu | draft | 2026-09-20 | 2026-09-20 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | open | 2026-09-18 | 2026-09-20 |
| [#5687](https://github.com/ROCm/aiter/pull/5687) | [CI] Fix Flash Attention CI failures | @micmelesse | draft | 2026-09-19 | 2026-09-19 |
| [#5570](https://github.com/ROCm/aiter/pull/5570) | [CI] Satya/aiter reorg 3 infra | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5569](https://github.com/ROCm/aiter/pull/5569) | [CI] Satya/aiter reorg 2 fix import | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5568](https://github.com/ROCm/aiter/pull/5568) | [CI] Collect aiter tests recursively, excluding the other su... | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5567](https://github.com/ROCm/aiter/pull/5567) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 7 rest | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5566](https://github.com/ROCm/aiter/pull/5566) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 6 moe fusions g... | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5565](https://github.com/ROCm/aiter/pull/5565) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 5 attention | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5564](https://github.com/ROCm/aiter/pull/5564) | [Triton/Gluon] [HIP] [CI] Satya/aiter reorg 4 gemm topk | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5625](https://github.com/ROCm/aiter/pull/5625) | [Config] [tuning] Add DSv4 a4w4 fused-MoE tuning tables for ... | @JiaoliangYu | draft | 2026-09-17 | 2026-09-19 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-09-18 |
| [#5593](https://github.com/ROCm/aiter/pull/5593) | [ASM] [HIP] [OPUS] Chefang/pa decode opus latest | @fangche123 | open | 2026-09-16 | 2026-09-18 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-10-02 |
| [#5242](https://github.com/ROCm/aiter/pull/5242) | [WIP] TP MOE fusion | @charlieguo1106 | draft | 2026-09-03 | 2026-09-18 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-09-18 |
| [#5191](https://github.com/ROCm/aiter/pull/5191) | [HIP] fix(sampling): drop unused out_idx workspace in topk_r... | @peizhang56 | open | 2026-09-01 | 2026-09-17 |
| [#5315](https://github.com/ROCm/aiter/pull/5315) | [CK] [FlyDSL] [CI] [Bugfix] Explicit gfx in shipped fused-Mo... | @amd-bartgips | open | 2026-09-07 | 2026-09-17 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-09-17 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-09-17 |
| [#5536](https://github.com/ROCm/aiter/pull/5536) | [CI] Nightly Triton suite on MI350/MI300X with retry and aut... | @Boss2002n | draft | 2026-09-15 | 2026-09-17 |
| [#5513](https://github.com/ROCm/aiter/pull/5513) | [CI] Add Some vLLM lm_eval Nightly Tests | @micah-wil | open | 2026-09-14 | 2026-09-17 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-09-17 |
| [#5616](https://github.com/ROCm/aiter/pull/5616) | [HIP] Gfx1250 ll128 cas2shot | @TennyWang1223 | open | 2026-09-17 | 2026-09-17 |
| [#5159](https://github.com/ROCm/aiter/pull/5159) | [Config] gptoss bf16 tuned gemm: drop the losing large-M QKV... | @alexnails | open | 2026-09-01 | 2026-09-17 |
| [#4980](https://github.com/ROCm/aiter/pull/4980) | [FlyDSL] [CI] [MegaMoE] A4W4 mega_moe operator | @Yaowu-Xiong | open | 2026-08-25 | 2026-09-17 |
| [#4489](https://github.com/ROCm/aiter/pull/4489) | feat(gemm): complete GLM-5.2 dense tuned configs (gfx950) | @Raiden-Makoto | open | 2026-07-31 | 2026-09-17 |
| [#4254](https://github.com/ROCm/aiter/pull/4254) | [FlyDSL] [JIT] Mxfp8 gemm | @solinzby1 | open | 2026-07-16 | 2026-09-17 |
| [#4083](https://github.com/ROCm/aiter/pull/4083) | refine mla v4 co | @feifei14119 | open | 2026-07-05 | 2026-09-17 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-09-17 |
| [#5068](https://github.com/ROCm/aiter/pull/5068) | Add gfx1250 a8w8 mxscale BMM scaffold with preshuffled B. | @yzhou103 | draft | 2026-08-28 | 2026-09-17 |
| [#5455](https://github.com/ROCm/aiter/pull/5455) | .agent_loop: orchestration layer driving review-pr and valid... | @demonsan | draft | 2026-09-11 | 2026-09-17 |
| [#5308](https://github.com/ROCm/aiter/pull/5308) | [skills] validate-kernel-pr: prose for judgement, code for t... | @zhiding512 | open | 2026-09-07 | 2026-09-17 |
| [#5615](https://github.com/ROCm/aiter/pull/5615) | [CI] [DO NOT MERGE] bump triton from 111ff227 to 7cb7b059 | @yuyzhang512 | open | 2026-09-17 | 2026-09-17 |
| [#5549](https://github.com/ROCm/aiter/pull/5549) | [CK] [FlyDSL] [FMoE] Enable Silu A16W4 INTERLEAVE fused_moe ... | @SamiAario-AMD | open | 2026-09-15 | 2026-09-17 |
| [#5561](https://github.com/ROCm/aiter/pull/5561) | [Bugfix] Drain FlyDSL stage-1 LDS-DMA loads before the tile ... | @kevin-mii | draft | 2026-09-15 | 2026-09-17 |
| [#4214](https://github.com/ROCm/aiter/pull/4214) | fix gfx12 ENABLE_Ck0 cmp err | @feifei14119 | open | 2026-07-13 | 2026-09-17 |
| [#5096](https://github.com/ROCm/aiter/pull/5096) | [CK] Fix/ck2stages missing headers | @MohitAMD | open | 2026-08-29 | 2026-09-17 |
| [#5584](https://github.com/ROCm/aiter/pull/5584) | [CI] [Build] Bump flydsl version to 0.3.3.dev903 | @jli-melchior | open | 2026-09-16 | 2026-09-17 |
| [#5591](https://github.com/ROCm/aiter/pull/5591) | test: repro for paged-MQA-logits Preshuffle=False OOB and sc... | @HongliMi | open | 2026-09-16 | 2026-09-17 |
| [#5597](https://github.com/ROCm/aiter/pull/5597) | [CI] docs: refresh onboarding and enforce source-backed refe... | @sunway513 | open | 2026-09-16 | 2026-09-17 |
| [#5604](https://github.com/ROCm/aiter/pull/5604) | [HIP] [ROCm] Observe P2P AR flags with SYSTEM scope and spli... | @maeehart | draft | 2026-09-16 | 2026-09-16 |
| [#5148](https://github.com/ROCm/aiter/pull/5148) | [HIP] [CK] [FlyDSL] FlyDSL split-K preshuffle decode GEMM fo... | @johannes-graner | open | 2026-08-31 | 2026-09-16 |
| [#5533](https://github.com/ROCm/aiter/pull/5533) | [DO NOT MERGE] E2E ci: point Triton pypi index at release_tm... | @yuyzhang512 | open | 2026-09-15 | 2026-09-16 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-09-16 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-09-16 |
| [#2409](https://github.com/ROCm/aiter/pull/2409) | Add gfx950 Triton GEMM tuning configs for DeepSeek-R1 shapes | @sunway513 | open | 2026-03-22 | 2026-09-16 |
| [#2277](https://github.com/ROCm/aiter/pull/2277) | [Triton MoE] Add optimized Gluon kernel for AMD CDNA3 with K... | @jwu10003 | open | 2026-03-14 | 2026-09-16 |
| [#5495](https://github.com/ROCm/aiter/pull/5495) | [HIP] [FlyDSL] [JIT] [gfx950] Integrate layout-dynamic MXFP8... | @xytpai | draft | 2026-09-14 | 2026-09-16 |
| [#5534](https://github.com/ROCm/aiter/pull/5534) | [CI] [DO NOT MERGE] ci: point Triton pypi index at release_t... | @yuyzhang512 | open | 2026-09-15 | 2026-09-16 |
| [#5517](https://github.com/ROCm/aiter/pull/5517) | [HIP] [CI] [JIT] [ROCm][MoE] Fused routing preamble: add a s... | @heslami | open | 2026-09-15 | 2026-09-16 |
| [#5236](https://github.com/ROCm/aiter/pull/5236) | [Kernel] [Perf] Fold an optional bias into the A6W6 MXFP6 GE... | @jasainio | draft | 2026-09-03 | 2026-09-16 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-09-15 |
| [#5487](https://github.com/ROCm/aiter/pull/5487) | [FlyDSL] K3 latent FHMoE prototype (eager decode path) | @xiaohuguo2023 | draft | 2026-09-13 | 2026-09-15 |
| [#5393](https://github.com/ROCm/aiter/pull/5393) | [FlyDSL] Keep split-K preshuffle buffers out of the CUDA gra... | @PerryZhang01 | open | 2026-09-10 | 2026-09-15 |
| [#5445](https://github.com/ROCm/aiter/pull/5445) | [Test] Sweep the per-row top-k kernels across M, N and top_k | @zufayu | open | 2026-09-11 | 2026-09-15 |
| [#5514](https://github.com/ROCm/aiter/pull/5514) | Mxfp4 glm53 tunning | @JohnNikolay84 | draft | 2026-09-14 | 2026-09-14 |
| [#5186](https://github.com/ROCm/aiter/pull/5186) | [CK] [CI] [JIT] Mi300a enablement | @afanfa | open | 2026-09-01 | 2026-09-14 |
| [#5498](https://github.com/ROCm/aiter/pull/5498) | [Enhancement] adjust quickreduce max block for mi355X | @haoyangli0109 | draft | 2026-09-14 | 2026-09-14 |
| [#5347](https://github.com/ROCm/aiter/pull/5347) | [Feature] Add manifest-driven static-page batch prefill disp... | @vstakhov-amd | draft | 2026-09-08 | 2026-09-14 |
| [#5450](https://github.com/ROCm/aiter/pull/5450) | [FlyDSL] [CI] [Bugfix] Rebase large MoE expert weights | @xudonlyu | open | 2026-09-11 | 2026-09-14 |
| [#5451](https://github.com/ROCm/aiter/pull/5451) | [HIP] [Feature] Add routed GLM-5.2 TP4 MXFP4 MoE shape | @pbkowalski | open | 2026-09-11 | 2026-09-17 |
| [#5456](https://github.com/ROCm/aiter/pull/5456) | [OPUS] add ut test for sparse mla kernel | @minmengdie | open | 2026-09-11 | 2026-09-14 |
| [#5460](https://github.com/ROCm/aiter/pull/5460) | [FlyDSL] Store fp8 MoE stage2 output through 64-bit pointers | @jamesbowley | open | 2026-09-11 | 2026-09-14 |
| [#5462](https://github.com/ROCm/aiter/pull/5462) | [FlyDSL] Tune MiniMax MXFP8 prefill MoE | @coderfeli | open | 2026-09-11 | 2026-09-14 |
| [#5465](https://github.com/ROCm/aiter/pull/5465) | [FlyDSL] [gfx1250] Drop the row-major a1 scale layout | @lalala-sh | open | 2026-09-11 | 2026-09-14 |
| [#5368](https://github.com/ROCm/aiter/pull/5368) | [Draft][Config] Update Kimi K3 a8w4 MOE TP8 tuned config for... | @jamesbowley | draft | 2026-09-09 | 2026-09-14 |
| [#5481](https://github.com/ROCm/aiter/pull/5481) | [HIP] [JIT] Split mla_reduce launcher instantiation across T... | @valarLip | open | 2026-09-13 | 2026-09-13 |
| [#5223](https://github.com/ROCm/aiter/pull/5223) | [HIP] [Feature] OPUS bf16 flash-attn: head dim 64, attention... | @siqiy-cerebras | open | 2026-09-03 | 2026-09-12 |
| [#4334](https://github.com/ROCm/aiter/pull/4334) | [Triton/Gluon] perf(fp8_mqa_logits): runtime-autotune the gf... | @EricKing626 | open | 2026-07-22 | 2026-09-12 |
| [#5164](https://github.com/ROCm/aiter/pull/5164) | [HIP] [OPUS] [FlyDSL] Simplify AITER compiler worker fan-out... | @Qubitium | open | 2026-09-01 | 2026-09-12 |
| [#5435](https://github.com/ROCm/aiter/pull/5435) | Dev/yadai a4w4 bench | @yadaish | draft | 2026-09-11 | 2026-09-11 |
| [#5220](https://github.com/ROCm/aiter/pull/5220) | [HIP] pa_sparse_prefill: address out with its own strides | @kevin-mii | open | 2026-09-03 | 2026-09-11 |
| [#5219](https://github.com/ROCm/aiter/pull/5219) | [Config] DSv4 TP8 a8w8 blockscale bpreshuffle: add Flash and... | @kevin-mii | open | 2026-09-02 | 2026-09-11 |
| [#5415](https://github.com/ROCm/aiter/pull/5415) | Tune gfx942 BF16 sliding-window unified-attention decode | @tantara | draft | 2026-09-10 | 2026-09-10 |
| [#5336](https://github.com/ROCm/aiter/pull/5336) | [HIP] [Bugfix] Fix gfx90a module_custom builds by guarding F... | @Mazukiri | open | 2026-09-08 | 2026-09-10 |
| [#5244](https://github.com/ROCm/aiter/pull/5244) | [FlyDSL] Dev/ubench gemm | @yadaish | open | 2026-09-03 | 2026-09-10 |
| [#5379](https://github.com/ROCm/aiter/pull/5379) | [Config] [MoE] Add Qwen3.8 Flash Next FP8 tuned config for P... | @sammysun0711 | open | 2026-09-09 | 2026-09-10 |
| [#5166](https://github.com/ROCm/aiter/pull/5166) | [JIT] Discover matching system ROCm headers for Python SDK c... | @Qubitium | open | 2026-09-01 | 2026-09-10 |
| [#5358](https://github.com/ROCm/aiter/pull/5358) | [HIP] [FlyDSL] [JIT] Add a6w4 preshuffle GEMM from FlyDSL | @amd-satre | open | 2026-09-08 | 2026-09-10 |
| [#5389](https://github.com/ROCm/aiter/pull/5389) | [FlyDSL] [gfx950] Ragged MXFP4 grouped GEMM and wgrad | @indianspeedster | draft | 2026-09-09 | 2026-09-10 |
| [#5384](https://github.com/ROCm/aiter/pull/5384) | [Triton/Gluon] Move gluon mla_gluon kernel into _gluon_kerne... | @vgokhale | draft | 2026-09-09 | 2026-09-09 |
| [#5348](https://github.com/ROCm/aiter/pull/5348) | [FlyDSL] Add FP8 LiteTopK prefill operator | @AMD-yanfeiwang | draft | 2026-09-08 | 2026-09-09 |
| [#5309](https://github.com/ROCm/aiter/pull/5309) | [FlyDSL] Add FP4 LiteTopK prefill operator | @AMD-yanfeiwang | draft | 2026-09-07 | 2026-09-09 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | draft | 2026-04-24 | 2026-09-09 |
| [#5362](https://github.com/ROCm/aiter/pull/5362) | [FlyDSL] Add gfx950 split Softmax and FP32 split-K BF16 GEMM | @sunway513 | draft | 2026-09-08 | 2026-09-08 |
| [#5361](https://github.com/ROCm/aiter/pull/5361) | [uBench] Add MI355X gfx950 dense-operator benchmarks | @sunway513 | draft | 2026-09-08 | 2026-09-08 |
| [#5260](https://github.com/ROCm/aiter/pull/5260) | [FlyDSL] Add tuned BF16 GEMM configs for GLM-5.2 decode shap... | @nehaprakriya | open | 2026-09-03 | 2026-09-08 |
| [#5296](https://github.com/ROCm/aiter/pull/5296) | [HIP] perf(mhc): cap the split-k partial-reduction width in ... | @npoulad1 | open | 2026-09-05 | 2026-09-08 |
| [#5235](https://github.com/ROCm/aiter/pull/5235) | [FlyDSL] Dev/inter fused stage2 | @james-huang09 | draft | 2026-09-03 | 2026-09-08 |
| [#4571](https://github.com/ROCm/aiter/pull/4571) | [FlyDSL] [perf] optimize group moe small ops | @lalala-sh | open | 2026-08-05 | 2026-09-07 |
| [#5179](https://github.com/ROCm/aiter/pull/5179) | [Flydsl] standalone FlyDSL K6 output kernel | @huizzhan | draft | 2026-09-01 | 2026-09-07 |
| [#5278](https://github.com/ROCm/aiter/pull/5278) | [Config] Add gfx950 a8w8_blockscale tunings for GLM-5.3 shap... | @stefanskiasan | open | 2026-09-04 | 2026-09-07 |
| [#5290](https://github.com/ROCm/aiter/pull/5290) | [HIP] Fix rmsnorm_quant cross-row reads and writes for rows ... | @rk9595 | open | 2026-09-05 | 2026-09-07 |
| [#5297](https://github.com/ROCm/aiter/pull/5297) | [HIP] [Bugfix] asm_mla: route ctypes entrypoint failures thr... | @wjabbour | open | 2026-09-06 | 2026-09-07 |
| [#5282](https://github.com/ROCm/aiter/pull/5282) | [FlyDSL][DSv4] Prototype FP4 MQA streaming TopK | @AMD-yanfeiwang | draft | 2026-09-05 | 2026-09-06 |
| [#4990](https://github.com/ROCm/aiter/pull/4990) | [HIP] [ROCm] Widen the AR+RMSNorm reduce-scatter producer | @EricKing626 | draft | 2026-08-25 | 2026-09-05 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-09-05 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-09-05 |
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-09-05 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-09-05 |
| [#3481](https://github.com/ROCm/aiter/pull/3481) | [gfx1151] flash_attn_triton_amd: enable in-thread transpose | @mgehre-amd | draft | 2026-06-02 | 2026-09-05 |
| [#3418](https://github.com/ROCm/aiter/pull/3418) | Add PER_TOKEN_HEAD FP8 quantization and P-scale for mha_batc... | @msaffari-amd | open | 2026-05-29 | 2026-09-05 |
| [#3446](https://github.com/ROCm/aiter/pull/3446) | revert back the copilot extra operation in pr 3338 ci: remov... | @shengnxu | open | 2026-06-01 | 2026-09-05 |
| [#3535](https://github.com/ROCm/aiter/pull/3535) | Add Radeon GPU CI smoke test | @vivienfanghuagood | open | 2026-06-04 | 2026-09-05 |
| [#3556](https://github.com/ROCm/aiter/pull/3556) | Fix e8m0 conversion to fp32 | @Arech8 | open | 2026-06-05 | 2026-09-07 |
| [#3210](https://github.com/ROCm/aiter/pull/3210) | [feat](gpt-oss): add a8w8 gemm tunefile for gpt-oss | @PerryZhang01 | open | 2026-05-15 | 2026-09-05 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-09-05 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-09-05 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | draft | 2026-04-29 | 2026-09-05 |
| [#3439](https://github.com/ROCm/aiter/pull/3439) | sglang downstream: run 8-GPU tests on the DO MI350X runner l... | @okakarpa | open | 2026-05-30 | 2026-09-05 |
| [#3430](https://github.com/ROCm/aiter/pull/3430) | Add native integer all-gather dtype support and optimize gfx... | @hubertlu-tw | open | 2026-05-29 | 2026-09-05 |
| [#3429](https://github.com/ROCm/aiter/pull/3429) | Fuse dynamic_per_tensor_quant_fp8_i8 into one launch for the... | @JohnQinAMD | open | 2026-05-29 | 2026-09-05 |
| [#3493](https://github.com/ROCm/aiter/pull/3493) | Add MiniMax-M2.7 MI325X (gfx942) tuned configs + fix fmoe tu... | @jiejingzhangamd | open | 2026-06-02 | 2026-09-05 |
| [#3564](https://github.com/ROCm/aiter/pull/3564) | [TRITON] Clean-up pa_mqa_logits (deepgemm attention) benchma... | @cagrikymk | open | 2026-06-05 | 2026-09-05 |
| [#3548](https://github.com/ROCm/aiter/pull/3548) | [MOE]: production EP + pure-TP-pad stack for Step-3.5-Flash-... | @LJ-underdog | open | 2026-06-05 | 2026-09-05 |
| [#3547](https://github.com/ROCm/aiter/pull/3547) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-04 | 2026-09-05 |
| [#3532](https://github.com/ROCm/aiter/pull/3532) | fix(moe-tune): bound registration-barrier deadlock + harden ... | @jhinpan | open | 2026-06-04 | 2026-09-05 |
| [#3523](https://github.com/ROCm/aiter/pull/3523) | ci(sglang-downstream): add GLM-5-MXFP4 accuracy gate | @sunway513 | draft | 2026-06-03 | 2026-09-05 |
| [#3494](https://github.com/ROCm/aiter/pull/3494) | Amemoore/gfx950 moe triton integration | @amirumoAMD | draft | 2026-06-02 | 2026-09-05 |
| [#3477](https://github.com/ROCm/aiter/pull/3477) | [Tuning] Opt-in post-tune verification + pick-stability leve... | @yzhou103 | draft | 2026-06-02 | 2026-09-05 |
| [#3248](https://github.com/ROCm/aiter/pull/3248) | add mla qseqlen4 causal mask related changes | @antsaukk | draft | 2026-05-18 | 2026-09-05 |
| [#3379](https://github.com/ROCm/aiter/pull/3379) | Gate opus fp8 code for gfx1100 | @Calandracas606 | open | 2026-05-28 | 2026-09-05 |
| [#3340](https://github.com/ROCm/aiter/pull/3340) | docs: AITER late May 2026 newsletter (v0.1.14 + v0.1.13.post... | @sunway513 | open | 2026-05-25 | 2026-09-05 |
| [#3316](https://github.com/ROCm/aiter/pull/3316) | [ck gemm a8w8 blockscale] shape-aware kernel selection heuri... | @eppaneamd | open | 2026-05-22 | 2026-09-05 |
| [#3297](https://github.com/ROCm/aiter/pull/3297) | add pageattention with sliding window | @ChengYao-amd | open | 2026-05-21 | 2026-09-05 |
| [#3295](https://github.com/ROCm/aiter/pull/3295) | repro(pa-asm): standalone reproducer for fp8 PA OOB at bs=12... | @yhl-amd | open | 2026-05-21 | 2026-09-05 |
| [#3263](https://github.com/ROCm/aiter/pull/3263) | Fused ar(use_new=false) + rmsnorm | @IzacharyI | open | 2026-05-19 | 2026-09-05 |
| [#3262](https://github.com/ROCm/aiter/pull/3262) | Unified Attention Sparse MLA FP8 | @anhminhnguyenhoang | draft | 2026-05-19 | 2026-09-05 |
| [#3286](https://github.com/ROCm/aiter/pull/3286) | [Triton] [ATOM] DSV4 mxfp8 GEMM | @k50112113 | draft | 2026-05-20 | 2026-09-05 |
| [#3275](https://github.com/ROCm/aiter/pull/3275) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-09-05 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-09-05 |
| [#3094](https://github.com/ROCm/aiter/pull/3094) | [FLYDSL] [TRITON] Attention backward mxfp8 gfx950 | @lburzawa | open | 2026-05-08 | 2026-09-05 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-09-05 |
| [#3152](https://github.com/ROCm/aiter/pull/3152) | [feat] Add HIP inline asm GDN decode op | @IzacharyI | open | 2026-05-12 | 2026-09-05 |
| [#3109](https://github.com/ROCm/aiter/pull/3109) | [ROCm][aiter] Add DSv3.2 BF16 GEMM tuned configs for gfx950 ... | @sunway513 | open | 2026-05-10 | 2026-09-05 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-09-05 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-09-05 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-09-05 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-09-05 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-09-05 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-09-05 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-09-05 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-09-05 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-09-05 |
| [#2789](https://github.com/ROCm/aiter/pull/2789) | gemma quant | @ganyi1996ppo | open | 2026-04-19 | 2026-09-05 |
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-09-05 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-09-05 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-09-05 |
| [#2844](https://github.com/ROCm/aiter/pull/2844) | aiter/__init__: per-module try/except so the first broken op... | @ChuanLi1101 | open | 2026-04-21 | 2026-09-05 |
| [#2839](https://github.com/ROCm/aiter/pull/2839) | fix(build): add missing c10/hip/HIPException.h include in ga... | @ChuanLi1101 | open | 2026-04-21 | 2026-09-05 |
| [#2830](https://github.com/ROCm/aiter/pull/2830) | fav3 kernel with improved softmax | @antsaukk | draft | 2026-04-21 | 2026-09-05 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-09-05 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-09-05 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-09-05 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-09-05 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-09-05 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-09-05 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-09-05 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-09-05 |
| [#2472](https://github.com/ROCm/aiter/pull/2472) | [Triton] [Gluon] [GFX12] add UA3D gluon kernel for gfx12 | @k50112113 | draft | 2026-03-25 | 2026-09-05 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-09-12 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-09-05 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-09-05 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-09-05 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-09-05 |
| [#2622](https://github.com/ROCm/aiter/pull/2622) | [FlyDSL] Tune MXFP4 MOE stage1 tile configs for DeepSeek-R1 | @sunway513 | open | 2026-04-05 | 2026-09-05 |
| [#2350](https://github.com/ROCm/aiter/pull/2350) | [gfx1201] Added tuned gemm_a8w8_configs for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-09-05 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-09-05 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-09-05 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-09-05 |
| [#2478](https://github.com/ROCm/aiter/pull/2478) | Fix GPU memory access fault in CK MoE FP4 kernel with Expert... | @M4jupitercannon | open | 2026-03-26 | 2026-09-05 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-09-05 |
| [#2429](https://github.com/ROCm/aiter/pull/2429) | add README for gluon kernels | @Dewei-Wang-sh | open | 2026-03-23 | 2026-09-05 |
| [#2559](https://github.com/ROCm/aiter/pull/2559) | Kimi 128k tuned config(TP4&TP8) | @inkcherry | open | 2026-03-31 | 2026-09-05 |
| [#2504](https://github.com/ROCm/aiter/pull/2504) | [TRITON] Unified attention benchmark | @juuso-oskari | open | 2026-03-27 | 2026-09-05 |
| [#2443](https://github.com/ROCm/aiter/pull/2443) | [FEAT] add enable_ck = 0 for dispatching | @HaonanWang98 | open | 2026-03-24 | 2026-09-05 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-09-05 |
| [#2406](https://github.com/ROCm/aiter/pull/2406) | Add operator performance benchmark CI workflow | @sunway513 | open | 2026-03-22 | 2026-09-05 |
| [#2488](https://github.com/ROCm/aiter/pull/2488) | GEMMa8w8 blockscale gluon gfx12 kernel v2 | @amirumoAMD | open | 2026-03-26 | 2026-09-05 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-09-05 |
| [#2362](https://github.com/ROCm/aiter/pull/2362) | Gluon kernel for a16w16 gemm | @omuhamma | draft | 2026-03-19 | 2026-09-05 |
| [#2417](https://github.com/ROCm/aiter/pull/2417) | feat: CK-free shim + Triton MLA for (gfx1250) | @sunway513 | open | 2026-03-22 | 2026-09-05 |
| [#3553](https://github.com/ROCm/aiter/pull/3553) | [fmoe] Add EP Support to Two-Stage MoE Op Tests | @BangBOOM | open | 2026-06-05 | 2026-09-05 |
| [#3355](https://github.com/ROCm/aiter/pull/3355) | [gluon gemm_afp4wfp4] Fix data access pattern to remove redu... | @Arech8 | open | 2026-05-26 | 2026-09-05 |
| [#3249](https://github.com/ROCm/aiter/pull/3249) | [Perf] add_rmsnorm_quant: fuse two block reduces into single... | @kudomcho | open | 2026-05-18 | 2026-09-05 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-09-05 |
| [#3242](https://github.com/ROCm/aiter/pull/3242) | [Bugfix] Fix op schema for fmha_v3_fowd and gemm_a16w16 | @Phi-C | open | 2026-05-18 | 2026-09-05 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-09-05 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-09-05 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-09-05 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-09-05 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-09-05 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-09-05 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-09-05 |
| [#2340](https://github.com/ROCm/aiter/pull/2340) | feat: add INT8/INT4 quantization support for 2-stage ASM MoE... | @amd-zfyu | open | 2026-03-19 | 2026-09-05 |
| [#5224](https://github.com/ROCm/aiter/pull/5224) | [HIP] [JIT] int4 a16w4 gemm kernel for gfx1201 | @jundali77 | open | 2026-09-03 | 2026-09-04 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | open | 2026-08-06 | 2026-09-03 |
| [#5126](https://github.com/ROCm/aiter/pull/5126) | [FlyDSL] Keep FP4 prefill modules alive across async dispatc... | @AMD-yanfeiwang | open | 2026-08-30 | 2026-09-03 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [HIP] [OPUS] [JIT] [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-09-03 |
| [#5208](https://github.com/ROCm/aiter/pull/5208) | DO NOT MERGE: test extended CI dispatch flow | @gyohuangxin | open | 2026-09-02 | 2026-09-03 |
| [#5194](https://github.com/ROCm/aiter/pull/5194) | Cache the MLA split count, not the split indptr tensor | @peizhang56 | open | 2026-09-02 | 2026-09-03 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-09-02 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | [CI] [JIT] gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | draft | 2026-07-21 | 2026-09-02 |
| [#5200](https://github.com/ROCm/aiter/pull/5200) | [Triton/Gluon] Pa decode config json | @yanxuer-999 | draft | 2026-09-02 | 2026-09-02 |
| [#4817](https://github.com/ROCm/aiter/pull/4817) | [HIP] fix: support torch.Stream in ctypes conversion | @chuyeh | open | 2026-08-18 | 2026-09-02 |
| [#5206](https://github.com/ROCm/aiter/pull/5206) | Fall back to cktile when the ck bpreshuffle instance rejects... | @yichiche | draft | 2026-09-02 | 2026-09-02 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [HIP] [MLA v4 nm] Drop kv_last_page_lens from ABI + self-con... | @amd-ruitang3 | open | 2026-07-21 | 2026-09-02 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-09-02 |
| [#4668](https://github.com/ROCm/aiter/pull/4668) | [FlyDSL] [gfx1250] add mha batchmode and kernel optimization | @jli-melchior | open | 2026-08-11 | 2026-09-02 |
| [#5199](https://github.com/ROCm/aiter/pull/5199) | [WIP][Feat][Hip]: Enable and optimize wave32 for chunk_gated... | @stevenshenyj | draft | 2026-09-02 | 2026-09-02 |
| [#5009](https://github.com/ROCm/aiter/pull/5009) | [HIP] [Feature] Radix-select top-k for wide ungrouped MoE ro... | @fanxingran | open | 2026-08-26 | 2026-09-02 |
| [#5163](https://github.com/ROCm/aiter/pull/5163) | [gfx1250] feat(mega_moe): add operand init modes and b2b tim... | @arakowsk-amd | open | 2026-09-01 | 2026-09-02 |
| [#5141](https://github.com/ROCm/aiter/pull/5141) | FlyDSL fp8 block-scale B-preshuffle GEMM for Qwen3.6-27B pre... | @RElbers | draft | 2026-08-31 | 2026-09-01 |
| [#5077](https://github.com/ROCm/aiter/pull/5077) | Revert "[TRITON][GLUON] Prefill MQA Logits kernel tuning for... | @zhuyuhua-v | draft | 2026-08-28 | 2026-09-01 |
| [#3972](https://github.com/ROCm/aiter/pull/3972) |  Add gelu_tanh activation to no-quant CK 2-stage fused MoE | @jonahbernard | open | 2026-06-27 | 2026-09-01 |
| [#5167](https://github.com/ROCm/aiter/pull/5167) | [Kernel] Add gfx950 DSV4 FlyDSL sparse-MLA prefill | @jiacao-amd | draft | 2026-09-01 | 2026-09-01 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep untuned SiLU A4W4 on native CK | @andyluo7 | open | 2026-08-27 | 2026-09-01 |
| [#4582](https://github.com/ROCm/aiter/pull/4582) | [Triton/Gluon] [MLA][gfx942] Add CDNA3 decode kernel | @maeehart | open | 2026-08-05 | 2026-08-31 |
| [#5138](https://github.com/ROCm/aiter/pull/5138) | Mxfp6 gemms opt | @jcaraban | draft | 2026-08-31 | 2026-08-31 |
| [#5087](https://github.com/ROCm/aiter/pull/5087) | [HIP] [BugFix] Fix BF16 FMHA extreme negative logits | @akshatvishu | open | 2026-08-28 | 2026-08-31 |
| [#5090](https://github.com/ROCm/aiter/pull/5090) | [Triton/Gluon] [Bugfix] fwd_decode: only one K-block program... | @mark14wu | open | 2026-08-28 | 2026-08-31 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-08-31 |
| [#5122](https://github.com/ROCm/aiter/pull/5122) | [HIP] topk: fuse the DSA page-table transform into a coopera... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-31 |
| [#5127](https://github.com/ROCm/aiter/pull/5127) | Fix/opus jit catalog sync | @jamesETsmith | draft | 2026-08-30 | 2026-08-31 |
| [#5117](https://github.com/ROCm/aiter/pull/5117) | [Kernel] [Perf] MXFP6 non-temporal-store GEMM variants and F... | @jasainio | draft | 2026-08-30 | 2026-08-30 |
| [#5064](https://github.com/ROCm/aiter/pull/5064) | [HIP] [JIT] [Kernel][Perf][Hardware][gfx1201] Add RX 9070 XT... | @davidchen-rocm | open | 2026-08-28 | 2026-08-29 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-08-28 |
| [#4999](https://github.com/ROCm/aiter/pull/4999) | [Triton/Gluon] Fix AMDGCN codegen abort in fp8_mqa_logits pa... | @kzjeef | open | 2026-08-25 | 2026-08-28 |
| [#4813](https://github.com/ROCm/aiter/pull/4813) | [HIP] [JIT] Fused MiniMaxM3 QKNorm+RoPE+CacheInsert | @weitliao | open | 2026-08-18 | 2026-08-28 |
| [#4992](https://github.com/ROCm/aiter/pull/4992) | [FlyDSL] gfx950 hd=72 varlen FMHA for Qwen3-VL prefill | @msaffari-amd | draft | 2026-08-25 | 2026-08-27 |
| [#5035](https://github.com/ROCm/aiter/pull/5035) | [Triton/Attention] Clamp unified_attention 3D config to the ... | @lobo235 | draft | 2026-08-26 | 2026-08-27 |
| [#4975](https://github.com/ROCm/aiter/pull/4975) | [Build] [Feature] Add MK1 persistent decoder provider | @ssharma4-amd | open | 2026-08-24 | 2026-08-27 |
| [#5010](https://github.com/ROCm/aiter/pull/5010) | [Triton/Gluon] Support caller-defined padding cache slot in ... | @tanth47 | open | 2026-08-26 | 2026-08-27 |
| [#4957](https://github.com/ROCm/aiter/pull/4957) | [MLA] Fix gfx942 gqa64 sparse-MLA decode GPU fault (route to... | @raviguptaamd | open | 2026-08-24 | 2026-08-26 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-08-26 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [Triton/Gluon] [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-24 | 2026-08-26 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-08-26 |
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-26 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-08-26 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-08-26 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-08-26 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-08-26 |
| [#4962](https://github.com/ROCm/aiter/pull/4962) | [CI] ci: add Kimi and MiniMax to ATOM DI matrix | @JiaoliangYu | open | 2026-08-24 | 2026-08-26 |
| [#4993](https://github.com/ROCm/aiter/pull/4993) | [Triton/Gluon] Fix PR#4562 and PR#4470 for GPT-OSS-120b on g... | @sogalin | open | 2026-08-25 | 2026-08-25 |
| [#4977](https://github.com/ROCm/aiter/pull/4977) | [HIP] [Feat] Single-kernel Lamport fused all-reduce + RMSNor... | @EricKing626 | draft | 2026-08-25 | 2026-09-03 |
| [#4779](https://github.com/ROCm/aiter/pull/4779) | [Bugfix] Handle GroupNorm autocast safely | @akshatvishu | open | 2026-08-15 | 2026-08-25 |
| [#4981](https://github.com/ROCm/aiter/pull/4981) | [FlyDSL] mega all gather merge stage1 | @Bernard-Liu | draft | 2026-08-25 | 2026-08-25 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-08-25 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#4880](https://github.com/ROCm/aiter/pull/4880) | [Triton/Gluon] fix pa_prefill perf regression for small HEAD... | @mengfei-jiang | open | 2026-08-20 | 2026-08-24 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-08-24 |
| [#4915](https://github.com/ROCm/aiter/pull/4915) | [Config] [Kimi K3 fix] Drop gfx942/gfx950 opus rows from the... | @hyukjlee | open | 2026-08-21 | 2026-08-24 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-08-24 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-08-24 |
| [#4762](https://github.com/ROCm/aiter/pull/4762) | feat(moe): consume prepared stage1 activation scales | @JohnQinAMD | open | 2026-08-14 | 2026-08-22 |
| [#4698](https://github.com/ROCm/aiter/pull/4698) | [Triton/Gluon] [GDN] Accept token-major w/u/g in opt-VK pref... | @JohnQinAMD | open | 2026-08-12 | 2026-08-22 |
| [#4641](https://github.com/ROCm/aiter/pull/4641) | [FlyDSL] Add SwiGLU activation to moe_gemm_2stage stage1 ker... | @akii96 | open | 2026-08-08 | 2026-08-21 |
| [#4715](https://github.com/ROCm/aiter/pull/4715) | [FlyDSL] split-K hgemm: make semaphore/signal workspace CUDA... | @xiaohuguo2023 | draft | 2026-08-12 | 2026-08-21 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | draft | 2026-07-14 | 2026-08-21 |
| [#4794](https://github.com/ROCm/aiter/pull/4794) | [HIP] [OPUS] [JIT] Chefang/pa decode opus | @fangche123 | open | 2026-08-17 | 2026-08-21 |
| [#4872](https://github.com/ROCm/aiter/pull/4872) | [HIP] fix(mla): fold fp8 qlen 2 onto the qseqlen-4 kernel on... | @JohnQinAMD | open | 2026-08-20 | 2026-08-21 |
| [#4876](https://github.com/ROCm/aiter/pull/4876) | [FlyDSL] remove flydsl_moe2 v1 code | @charlieguo1106 | open | 2026-08-20 | 2026-08-21 |
| [#4881](https://github.com/ROCm/aiter/pull/4881) | [CI] ci: add DCO signoff check | @gyohuangxin | draft | 2026-08-20 | 2026-08-20 |
| [#4845](https://github.com/ROCm/aiter/pull/4845) | [HIP] Support mixed-dtype inputs in biased grouped top-k | @BadrBasowid | open | 2026-08-19 | 2026-08-20 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-08-20 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-08-20 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-08-20 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [BUG][CK][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-08-19 |
| [#4772](https://github.com/ROCm/aiter/pull/4772) | [FlyDSL] [gfx950] Add dense BF16 x MXFP4 GEMM | @LiuYinfeng01 | open | 2026-08-15 | 2026-08-19 |
| [#4814](https://github.com/ROCm/aiter/pull/4814) | [Triton][gfx1151] Enable GEMM-A16W16 | @tangzzycc | open | 2026-08-18 | 2026-08-19 |
| [#4816](https://github.com/ROCm/aiter/pull/4816) | [Config] [Tuning] Add DSv4 a8w8 blockscale GEMM configs for ... | @zzw09773 | open | 2026-08-18 | 2026-08-19 |
| [#4758](https://github.com/ROCm/aiter/pull/4758) | [Gluon][MLA] Deeper async-copy pipeline in the bh16 stage-1 ... | @amd-ethany | open | 2026-08-14 | 2026-08-18 |
| [#4771](https://github.com/ROCm/aiter/pull/4771) | [Triton][FMHA] Fused paged-prefill kernel for page_size=1, h... | @amd-ethany | open | 2026-08-15 | 2026-08-18 |
| [#4802](https://github.com/ROCm/aiter/pull/4802) | Refactor bench_mha to use -o as boolean flag | @AlexeySachkov | open | 2026-08-17 | 2026-08-18 |
| [#4812](https://github.com/ROCm/aiter/pull/4812) | Fix gfx1250 (NPS2, DPX mode) custom all-reduce input publica... | @hubertlu-tw | draft | 2026-08-17 | 2026-08-18 |
| [#4481](https://github.com/ROCm/aiter/pull/4481) | parallelize gather_kv_b_proj context chunks | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-17 |
| [#4778](https://github.com/ROCm/aiter/pull/4778) | [gfx1100] Enable RDNA3 in arch allow-list + Triton GEMM A8W8... | @okone1995 | open | 2026-08-15 | 2026-08-17 |
| [#4786](https://github.com/ROCm/aiter/pull/4786) | fix(custom_all_reduce): use SYSTEM scope + ACQUIRE ordering ... | @hekhong-png | open | 2026-08-16 | 2026-08-17 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-08-16 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-08-15 |
| [#4775](https://github.com/ROCm/aiter/pull/4775) | [Attention] Expose paged MQA SplitKV override | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-08-15 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-08-14 |
| [#3682](https://github.com/ROCm/aiter/pull/3682) | Fix the mla bf16 16mx4 kernel random nan error in MI350 | @minmengdie | open | 2026-06-11 | 2026-08-14 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-08-14 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-08-14 |
| [#4486](https://github.com/ROCm/aiter/pull/4486) | fix(cpp_itfs/pa): make the C++ paged_attention_ragged entry ... | @jiejingzhangamd | open | 2026-07-31 | 2026-08-14 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | Cache the paged_attention_v1 launch plan to fix batch=1 deco... | @zjin-lcf | open | 2026-08-03 | 2026-08-14 |
| [#4648](https://github.com/ROCm/aiter/pull/4648) | [Triton][Hardware] Add gfx1100 A8W8 tuning config | @01xjw | open | 2026-08-10 | 2026-08-14 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | draft | 2026-07-08 | 2026-08-14 |
| [#4739](https://github.com/ROCm/aiter/pull/4739) | [Misc] Harden AITER_ASM_DIR code-object loading | @fjankovi | draft | 2026-08-13 | 2026-08-13 |
| [#4622](https://github.com/ROCm/aiter/pull/4622) | [FlyDSL] Replace the split-K atomic combine with a workspace... | @JohnQinAMD | open | 2026-08-07 | 2026-08-13 |
| [#4637](https://github.com/ROCm/aiter/pull/4637) | fix(quant): use saturating RNE for scaled int8 casts | @skyguan92 | open | 2026-08-07 | 2026-08-13 |
| [#4704](https://github.com/ROCm/aiter/pull/4704) | [fmoe] Add extern_moe_output param for combine zero-copy | @kawhil-amd | open | 2026-08-12 | 2026-08-13 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-08-13 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | feat: Support LoongArch64, LoongArch64 not support CodeModel... | @Xinmudotmoe | open | 2026-08-12 | 2026-08-13 |
| [#4242](https://github.com/ROCm/aiter/pull/4242) | [gfx1151] [triton-fa]: tune FlashAttention backward configs | @hogeheer499-commits | open | 2026-07-14 | 2026-08-12 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-08-14 |
| [#4691](https://github.com/ROCm/aiter/pull/4691) | [Triton][GFX12] Fix Gluon API compatibility | @leo-automation | open | 2026-08-11 | 2026-08-12 |
| [#4696](https://github.com/ROCm/aiter/pull/4696) | Fix multi-rank JIT import race for on-demand modules | @Lzy17 | open | 2026-08-11 | 2026-08-12 |
| [#4640](https://github.com/ROCm/aiter/pull/4640) | feat(triton): enable gfx1100 MXFP4 MoE | @skyguan92 | open | 2026-08-08 | 2026-08-12 |
| [#4689](https://github.com/ROCm/aiter/pull/4689) | [triton][gemm] gemm_a16wfp4: mask the b_scales load when EVE... | @lijinpei-amd | open | 2026-08-11 | 2026-08-12 |
| [#4663](https://github.com/ROCm/aiter/pull/4663) | [tune] DSv4 bf16: add gfx950 LM-head GEMM configs (N=129280,... | @jiacao-amd | draft | 2026-08-10 | 2026-08-12 |
| [#4690](https://github.com/ROCm/aiter/pull/4690) | [triton][gemm] fused_fp4_bmm_rope: fix two OOB reads when EV... | @lijinpei-amd | open | 2026-08-11 | 2026-08-11 |
| [#4686](https://github.com/ROCm/aiter/pull/4686) | [cpp_itfs] Harden the C++ JIT loader: no shell, validated pa... | @fjankovi | draft | 2026-08-11 | 2026-08-11 |
| [#4602](https://github.com/ROCm/aiter/pull/4602) | [triton] chunk delta attn opt | @Liang-jianhao97 | open | 2026-08-06 | 2026-08-11 |
| [#4656](https://github.com/ROCm/aiter/pull/4656) | Rm sort for decode gdr | @IzacharyI | open | 2026-08-10 | 2026-08-11 |
| [#4681](https://github.com/ROCm/aiter/pull/4681) | [gluon][mla][gfx950] add M-pack MTP regime (bh16mpack) | @yanxuer-999 | draft | 2026-08-11 | 2026-08-11 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [Qwen3.5_dev][MoE] Add FlyDSL FP8 MoE kernels (decode weight... | @apinge | draft | 2026-07-27 | 2026-08-11 |
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-08-11 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | Simplify ck_gemm_a8w8_blockscale GemmSpecialization construc... | @jbelloncastro | open | 2026-06-19 | 2026-08-11 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQinAMD | open | 2026-08-05 | 2026-08-11 |
| [#4348](https://github.com/ROCm/aiter/pull/4348) | Aiterker 112 asm ptl1 | @JohnNikolay84 | open | 2026-07-23 | 2026-08-10 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4580](https://github.com/ROCm/aiter/pull/4580) | [Bug] pa_mqa_logits: guard all OutLogits stores | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4587](https://github.com/ROCm/aiter/pull/4587) | [fix][mla] keep get_meta_param's split-offset table alive fo... | @Duyi-Wang | open | 2026-08-06 | 2026-08-07 |
| [#3818](https://github.com/ROCm/aiter/pull/3818) | Flydsl moe 4gib fix | @IzacharyI | open | 2026-06-20 | 2026-08-07 |
| [#4624](https://github.com/ROCm/aiter/pull/4624) | CI: resolve container Python for release builds | @gyohuangxin | draft | 2026-08-07 | 2026-08-07 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton] Add fused gated residual + LayerNorm + scale/shift ... | @menglcai | open | 2026-07-28 | 2026-08-07 |
| [#4274](https://github.com/ROCm/aiter/pull/4274) | Add MiniMax-M3 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#4276](https://github.com/ROCm/aiter/pull/4276) | Add Kimi-K2.6 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#3256](https://github.com/ROCm/aiter/pull/3256) | [flydsl] PA DECODE | @ahmed-bsod | open | 2026-05-18 | 2026-08-07 |
| [#4615](https://github.com/ROCm/aiter/pull/4615) | [Draft] Register FlyDSL operations in torch | @mohbasit | open | 2026-08-06 | 2026-08-07 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-08-06 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-08-06 |
| [#4512](https://github.com/ROCm/aiter/pull/4512) | fix(build): resolve gfx1100 targets across JIT paths | @skyguan92 | open | 2026-08-02 | 2026-08-06 |
| [#4295](https://github.com/ROCm/aiter/pull/4295) | [gfx1250] Launch v4 NM MLA decode .co directly from Python (... | @feifei14119 | open | 2026-07-20 | 2026-08-06 |
| [#4515](https://github.com/ROCm/aiter/pull/4515) | [Perf][FlyDSL] Reduce short-context FP4 prefill tile size | @zhiding512 | open | 2026-08-03 | 2026-08-06 |
| [#4252](https://github.com/ROCm/aiter/pull/4252) | [FIX] Expert Map Parallel | @amirumoAMD | open | 2026-07-15 | 2026-08-05 |
| [#3940](https://github.com/ROCm/aiter/pull/3940) | [Triton] Add fused_gemm_a16w16_split_cat | @rbrugaro-amd | open | 2026-06-25 | 2026-08-05 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-09-05 |
| [#3690](https://github.com/ROCm/aiter/pull/3690) | [TRITON] Sparge vfa | @Chi-Chu319 | open | 2026-06-12 | 2026-08-05 |
| [#3766](https://github.com/ROCm/aiter/pull/3766) | Fix batched_gemm_a16wfp4 split-K garbage output / OOB for sm... | @srinivamd | open | 2026-06-17 | 2026-08-05 |
| [#3858](https://github.com/ROCm/aiter/pull/3858) | [triton] [mha]: split-D forward for non-power-of-2 head_dim | @roberteg16 | open | 2026-06-22 | 2026-08-05 |
| [#3944](https://github.com/ROCm/aiter/pull/3944) | Dev/fly pa reduce jit build | @Bernard-Liu | open | 2026-06-26 | 2026-08-05 |
| [#4057](https://github.com/ROCm/aiter/pull/4057) | [Triton][GDN] Support V-major (hvk) state layout in decode k... | @hsthe29 | open | 2026-07-02 | 2026-08-05 |
| [#4058](https://github.com/ROCm/aiter/pull/4058) | [Triton][GDN] Add in-place state scatter + h output to VK ch... | @hsthe29 | open | 2026-07-02 | 2026-08-05 |
| [#4145](https://github.com/ROCm/aiter/pull/4145) | Block pointers only support 32 bit error | @jpvillam-amd | open | 2026-07-08 | 2026-08-05 |
| [#4190](https://github.com/ROCm/aiter/pull/4190) | [gfx950][gluon] Correct A8W8 default config to avoid accumul... | @MrSidims | open | 2026-07-10 | 2026-08-05 |
| [#4234](https://github.com/ROCm/aiter/pull/4234) | [gfx1100] Add gfx1100 (RDNA3) tuned Triton A16W16 GEMM confi... | @WhatGhost | open | 2026-07-14 | 2026-08-05 |
| [#4249](https://github.com/ROCm/aiter/pull/4249) | [TRITON] fused clamped-alpha SwiGLU gate activation (MiniMax... | @Chi-Chu319 | open | 2026-07-15 | 2026-08-05 |
| [#4287](https://github.com/ROCm/aiter/pull/4287) | perf(gfx1250): tune moe_gemm_a8w4 gluon config for DeepSeek-... | @amd-hhashemi | open | 2026-07-19 | 2026-08-05 |
| [#4291](https://github.com/ROCm/aiter/pull/4291) | [Bugfix][Triton] Define zero-row and padded FP8/int8 quantiz... | @morluto | open | 2026-07-19 | 2026-08-05 |
| [#4330](https://github.com/ROCm/aiter/pull/4330) | perf(gfx1250): autotune gluon batched GEMM bf16 for DeepSeek... | @amd-hhashemi | open | 2026-07-22 | 2026-08-05 |
| [#4361](https://github.com/ROCm/aiter/pull/4361) | perf(expt_data): skip redundant TokenStart/TileStart stores ... | @amd-hhashemi | open | 2026-07-23 | 2026-08-05 |
| [#4536](https://github.com/ROCm/aiter/pull/4536) | [Bugfix][Kernel][Hardware][AMD] Fix invalid GFX12 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-05 |
| [#4549](https://github.com/ROCm/aiter/pull/4549) | [FlyDSL] Fused online Hadamard rotation + MXFP4 quantization... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4550](https://github.com/ROCm/aiter/pull/4550) | [FlyDSL] flydsl_gdr_decode: read strided q/k/v directly (qkv... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4510](https://github.com/ROCm/aiter/pull/4510) | [Bugfix][FlyDSL] Honor b_nt in mixed-MoE stage-2 and retune ... | @qiongz | draft | 2026-08-02 | 2026-08-05 |
| [#4559](https://github.com/ROCm/aiter/pull/4559) | docs: align Ruff version with CI | @01xjw | draft | 2026-08-04 | 2026-08-04 |
| [#3938](https://github.com/ROCm/aiter/pull/3938) | gate custom all-reduce on XGMI topology | @skysnow2001 | open | 2026-06-25 | 2026-08-04 |
| [#4407](https://github.com/ROCm/aiter/pull/4407) | feat(moe): add SharedEP MXFP4 kernels | @AMD-yanfeiwang | open | 2026-07-28 | 2026-08-04 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-08-04 |
| [#4487](https://github.com/ROCm/aiter/pull/4487) | [tune] Kimi-K3 SiTUv2 MoE: add block_m=64 for DSpark verify-... | @nehaprakriya | open | 2026-07-31 | 2026-08-04 |
| [#4514](https://github.com/ROCm/aiter/pull/4514) | [Feature][FlyDSL] Add multi-B MoE kernels for ROCm DWDP | @AMD-yanfeiwang | open | 2026-08-03 | 2026-08-04 |
| [#4525](https://github.com/ROCm/aiter/pull/4525) | Add gfx90a to GFX_CU_NUM_MAP | @davetha | open | 2026-08-03 | 2026-08-04 |
| [#3991](https://github.com/ROCm/aiter/pull/3991) | refactor aot | @zhiding512 | draft | 2026-06-29 | 2026-08-03 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-08-02 |
| [#2605](https://github.com/ROCm/aiter/pull/2605) | fix: replace hardcoded /opt/rocm paths with ROCM_HOME env va... | @zufayu | open | 2026-04-03 | 2026-08-02 |
| [#2565](https://github.com/ROCm/aiter/pull/2565) | Unify FlyDSL W4A4/G1U0 updates and tuning fixes | @rujiacai | open | 2026-04-01 | 2026-08-02 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-09-05 |
| [#3147](https://github.com/ROCm/aiter/pull/3147) | [BugFix] Align FlyDSL MXFP4 quantization with reference | @zihaomu | open | 2026-05-12 | 2026-08-02 |
| [#3110](https://github.com/ROCm/aiter/pull/3110) | [BugFix] A4W4 FMoE run_config weight shuffle | @zihaomu | open | 2026-05-11 | 2026-08-02 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-09-05 |
| [#2822](https://github.com/ROCm/aiter/pull/2822) | [ROCm][Perf] Optimize batched_gemm_a16wfp4 kernel — 2.97x mi... | @rbrugaro-amd | draft | 2026-04-20 | 2026-08-02 |
| [#3923](https://github.com/ROCm/aiter/pull/3923) | change default pa reduce kernel from cxx to flydsl | @Bernard-Liu | open | 2026-06-25 | 2026-08-02 |
| [#3810](https://github.com/ROCm/aiter/pull/3810) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-19 | 2026-08-02 |
| [#3800](https://github.com/ROCm/aiter/pull/3800) | [gfx950] Add JIT grouped_gemm_mxfp8 for MXFP8 prefill MoE | @fanxingran | open | 2026-06-18 | 2026-08-02 |
| [#3783](https://github.com/ROCm/aiter/pull/3783) | [Small_M_GEMM_GroupGEMM_MXFP8] Decode small-M MX-FP8 GEMM an... | @JohnQinAMD | open | 2026-06-17 | 2026-08-02 |
| [#3718](https://github.com/ROCm/aiter/pull/3718) | Yhl/gptoss pa asm shuf repro 20260611 | @yhl-amd | open | 2026-06-15 | 2026-08-02 |
| [#3628](https://github.com/ROCm/aiter/pull/3628) | Gfx1250 moe 2mode e2e v1 yadai | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3617](https://github.com/ROCm/aiter/pull/3617) | Fix pa_mqa_logits MI300X divide-by-zero for small TileQCount | @ysmkone | draft | 2026-06-08 | 2026-08-02 |
| [#3613](https://github.com/ROCm/aiter/pull/3613) | [Triton] [Gluon] [GFX12] mHC_post_pre kernel | @k50112113 | draft | 2026-06-08 | 2026-08-02 |
| [#3591](https://github.com/ROCm/aiter/pull/3591) | [hotfix] always use fp4x2 for swiglu separated per_1x32 path | @yadaish | open | 2026-06-08 | 2026-08-02 |
| [#3585](https://github.com/ROCm/aiter/pull/3585) | [op_tests] Refactor MoE legacy UT into per-quant smoke sweep | @zhiding512 | open | 2026-06-07 | 2026-08-02 |
| [#3578](https://github.com/ROCm/aiter/pull/3578) | ci: add paired-release validation gate workflow (AITER+ATOM ... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3573](https://github.com/ROCm/aiter/pull/3573) | CI: add retry logic for Aiter wheel artifact downloads | @Copilot | draft | 2026-06-06 | 2026-08-02 |
| [#3571](https://github.com/ROCm/aiter/pull/3571) | ci(sglang-downstream): add MoRI EP accuracy gate (guards moe... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3538](https://github.com/ROCm/aiter/pull/3538) | fix(flydsl_moe_stage1): pre-zero output when inter_dim_pad >... | @kkHuang-amd | open | 2026-06-04 | 2026-09-05 |
| [#3321](https://github.com/ROCm/aiter/pull/3321) | [FlyDSL AOT] Skip kernels for unrequested arches when GPU_AR... | @eppaneamd | open | 2026-05-24 | 2026-08-02 |
| [#4158](https://github.com/ROCm/aiter/pull/4158) | Remove deprecated offset arg from tdm.async_gather calls on ... | @Liang-jianhao97 | open | 2026-07-09 | 2026-08-02 |
| [#3993](https://github.com/ROCm/aiter/pull/3993) | mla_decode_fwd: wire is_causal through Python and C++ dispat... | @alexioslyrakis-amd | open | 2026-06-29 | 2026-08-02 |
| [#3979](https://github.com/ROCm/aiter/pull/3979) | [op_tests] add whole-block GPT-OSS attention test | @carlushuang | open | 2026-06-29 | 2026-08-02 |
| [#3973](https://github.com/ROCm/aiter/pull/3973) | [CK] Fix MoE 2-stage dispatch for non-128-divisible inter_di... | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
| [#3941](https://github.com/ROCm/aiter/pull/3941) | Feat/flydsl mxfp4 gemm | @lizamd | open | 2026-06-26 | 2026-08-02 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-08-02 |
| [#3926](https://github.com/ROCm/aiter/pull/3926) | Feat/gfx942 flydsl mxfp4 moe | @msaffari-amd | draft | 2026-06-25 | 2026-08-02 |
| [#3897](https://github.com/ROCm/aiter/pull/3897) | [gfx1250][FLYDSL]moe gemm tune | @Zzz9990 | draft | 2026-06-24 | 2026-08-02 |
| [#3896](https://github.com/ROCm/aiter/pull/3896) | Fix HIP fp8 paged-attention kPerHead scale OOB page fault. | @JohnNikolay84 | open | 2026-06-24 | 2026-08-02 |
| [#3870](https://github.com/ROCm/aiter/pull/3870) | feat(mha): add FlyDSL BSHD batch-mode dispatch for gfx1250 | @jli-melchior | open | 2026-06-23 | 2026-08-02 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-08-02 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-08-02 |
| [#3835](https://github.com/ROCm/aiter/pull/3835) | Dev/dsv4 a4w4 tuned | @Bernard-Liu | open | 2026-06-22 | 2026-08-02 |
| [#3809](https://github.com/ROCm/aiter/pull/3809) | Qwen3.5-397B-A17B MXFP4: add tuned flydsl fused-MoE config (... | @jiangyon-amd | open | 2026-06-19 | 2026-08-02 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [feature] Extract C++ code to jinja template files | @jbelloncastro | open | 2026-06-18 | 2026-08-02 |
| [#3785](https://github.com/ROCm/aiter/pull/3785) | [fea] Add fp32 RMSNorm output for fused qk group quant | @wuhuikx | open | 2026-06-18 | 2026-08-02 |
| [#3774](https://github.com/ROCm/aiter/pull/3774) | [gfx1250][FlyDSL]opt conc1 moe. | @lalala-sh | open | 2026-06-17 | 2026-08-02 |
| [#3771](https://github.com/ROCm/aiter/pull/3771) | fix: disable EP topk-1 strip | @JiaoliangYu | draft | 2026-06-17 | 2026-08-02 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-08-02 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-08-02 |
| [#3653](https://github.com/ROCm/aiter/pull/3653) | [Perf] Add Qwen3-32B-FP8 tuned configs for MI308X | @ningding01 | open | 2026-06-10 | 2026-08-02 |
| [#3645](https://github.com/ROCm/aiter/pull/3645) | Add env overrides for unified attention tuning | @akii96 | draft | 2026-06-10 | 2026-08-02 |
| [#4273](https://github.com/ROCm/aiter/pull/4273) | [FlyDSL] Add a strided-batched variant (BMM) of the A8W8 blo... | @xiangM99 | open | 2026-07-17 | 2026-08-02 |
| [#4268](https://github.com/ROCm/aiter/pull/4268) | [Triton] Add fused AdaLN-Zero (layernorm + scale/shift) kern... | @sushildubey171 | open | 2026-07-16 | 2026-08-02 |
| [#4240](https://github.com/ROCm/aiter/pull/4240) | Make shuffle_scale_moe arch-agnostic  (Fix non-gfx950/gfx125... | @skysnow2001 | open | 2026-07-14 | 2026-08-02 |
| [#4232](https://github.com/ROCm/aiter/pull/4232) | [gfx942] Add native-fp8-MFMA Gluon fp8_mqa_logits kernel | @haosdent | open | 2026-07-14 | 2026-08-02 |
| [#4228](https://github.com/ROCm/aiter/pull/4228) | [Perf][gfx1250]update tuned flydsl moe | @lalala-sh | open | 2026-07-14 | 2026-08-02 |
| [#4222](https://github.com/ROCm/aiter/pull/4222) | a16w16 gemm tuned dsv4 pro shapes | @ahmed-bsod | open | 2026-07-13 | 2026-08-02 |
| [#4213](https://github.com/ROCm/aiter/pull/4213) | fea: support add fused allreduce | @TennyWang1223 | open | 2026-07-13 | 2026-08-02 |
| [#4211](https://github.com/ROCm/aiter/pull/4211) | CI: make `check-signal` neutral on pre-check failure and gat... | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4208](https://github.com/ROCm/aiter/pull/4208) | fix: apply Black formatting to FlyDSL BMM W8A8 GFX1250 files | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4207](https://github.com/ROCm/aiter/pull/4207) | op_tests: IFOE cross-node custom all-reduce (module_custom_a... | @carlushuang | open | 2026-07-12 | 2026-08-02 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-08-02 |
| [#4191](https://github.com/ROCm/aiter/pull/4191) | Omuhamma/tune a8w8 | @omuhamma | draft | 2026-07-10 | 2026-08-02 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-08-02 |
| [#4141](https://github.com/ROCm/aiter/pull/4141) | gemma4w4 split-k bug | @amirumoAMD | draft | 2026-07-08 | 2026-08-02 |
| [#4140](https://github.com/ROCm/aiter/pull/4140) | [TRITON] Tuned GFX1201 DSV4-Flash FP16 and FP8 GEMMs for ATO... | @skysnow2001 | open | 2026-07-08 | 2026-08-02 |
| [#4118](https://github.com/ROCm/aiter/pull/4118) | ATOM MXFP4 Scale Shuffle | @amirumoAMD | draft | 2026-07-07 | 2026-08-02 |
| [#4108](https://github.com/ROCm/aiter/pull/4108) | Fix A8W4 CDNA4 scale addressing for padded MoE shapes | @xiaohuguo2023 | open | 2026-07-06 | 2026-08-02 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-08-02 |
| [#4087](https://github.com/ROCm/aiter/pull/4087) | [gfx1250][Gluon] MoE1 + act + quant fusion for DSv4 | @azaidy | open | 2026-07-05 | 2026-08-02 |
| [#4086](https://github.com/ROCm/aiter/pull/4086) | Fix Gluon apis | @azaidy | open | 2026-07-05 | 2026-08-02 |
| [#4084](https://github.com/ROCm/aiter/pull/4084) | perf: eliminate end_sync in custom allreduce by delaying inp... | @jpy794 | open | 2026-07-05 | 2026-08-02 |
| [#4080](https://github.com/ROCm/aiter/pull/4080) | [OPUS] Absorb module_rmsnorm_quant into the opus rmsnorm mod... | @carlushuang | open | 2026-07-04 | 2026-08-02 |
| [#4065](https://github.com/ROCm/aiter/pull/4065) | feat(attention): head-dim-tiled Triton flash attention for V... | @carlushuang | open | 2026-07-02 | 2026-08-02 |
| [#4062](https://github.com/ROCm/aiter/pull/4062) | docs(python): condense verbose comments (comments-only, no c... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4061](https://github.com/ROCm/aiter/pull/4061) | docs(csrc): condense verbose comments (comments-only, no cod... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4041](https://github.com/ROCm/aiter/pull/4041) | [fix](moe): fix the accuracy M=1 in qwen3.5 | @PerryZhang01 | open | 2026-07-01 | 2026-08-02 |
| [#4019](https://github.com/ROCm/aiter/pull/4019) | fix: increase check_signal.sh retry budget from 5 to 60 atte... | @Copilot | draft | 2026-06-30 | 2026-08-02 |
| [#4016](https://github.com/ROCm/aiter/pull/4016) | [GDN] Add gdn_chunk_prepare: fused intra-chunk GDN prefill p... | @jayzlee147 | open | 2026-06-30 | 2026-08-02 |
| [#4007](https://github.com/ROCm/aiter/pull/4007) | fix(topk): add __threadfence before cross-block barrier in r... | @Jasen2201 | open | 2026-06-30 | 2026-08-02 |
| [#3989](https://github.com/ROCm/aiter/pull/3989) | add assertion for oob check | @Bernard-Liu | open | 2026-06-29 | 2026-08-02 |
| [#4433](https://github.com/ROCm/aiter/pull/4433) | perf: fuse A2 quant for DSV4 FlyDSL EP | @kkHuang-amd | open | 2026-07-29 | 2026-08-02 |
| [#4426](https://github.com/ROCm/aiter/pull/4426) | Fix/gfx1250 a8w4 async gather api | @yhl-amd | open | 2026-07-28 | 2026-08-02 |
| [#4388](https://github.com/ROCm/aiter/pull/4388) | Specialize batch prefill for paged KV layout | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4387](https://github.com/ROCm/aiter/pull/4387) | Limit attention kernel dispatch to supported GPUs | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4386](https://github.com/ROCm/aiter/pull/4386) | test: use flydsl==0.3.0.dev20260725+7f363ef from devreleases... | @xudoyuan | open | 2026-07-26 | 2026-08-02 |
| [#4376](https://github.com/ROCm/aiter/pull/4376) | feat(topk): deterministic tie-break-by-token-id for sparse-M... | @yhl-amd | open | 2026-07-24 | 2026-08-02 |
| [#4359](https://github.com/ROCm/aiter/pull/4359) | Swap the cache config for the default cases of gfx1250-GEMM-... | @jpvillam-amd | open | 2026-07-23 | 2026-08-02 |
| [#4357](https://github.com/ROCm/aiter/pull/4357) | Chefang mha global load | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4351](https://github.com/ROCm/aiter/pull/4351) | fix(mla): refresh gfx950 MLA HSACO batch for large page_id | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4340](https://github.com/ROCm/aiter/pull/4340) | Add native Windows RDNA HIP and CK support | @Yasei-no-otoko | open | 2026-07-23 | 2026-08-02 |
| [#4315](https://github.com/ROCm/aiter/pull/4315) | [Fix][FlyDSL] Handle remainder workgroups in MoE XCD swizzle | @Fangzhou-Ai | open | 2026-07-21 | 2026-08-02 |
| [#4306](https://github.com/ROCm/aiter/pull/4306) | Add basic HIP/CK JIT kernel support in Windows | @menglcai | open | 2026-07-20 | 2026-08-02 |
| [#4293](https://github.com/ROCm/aiter/pull/4293) | [Bugfix][Triton] Correct ragged paged-MQA causal masks | @morluto | open | 2026-07-19 | 2026-08-02 |
| [#4279](https://github.com/ROCm/aiter/pull/4279) | mhc bf16 compute optimize on gfx12xx | @junhaha666 | draft | 2026-07-17 | 2026-08-02 |
| [#4278](https://github.com/ROCm/aiter/pull/4278) | [gfx1250][perf][moe]Optimize prefill perf | @lalala-sh | open | 2026-07-17 | 2026-08-02 |
| [#4277](https://github.com/ROCm/aiter/pull/4277) | Dev/gugu fix | @yadaish | open | 2026-07-17 | 2026-08-02 |
| [#4275](https://github.com/ROCm/aiter/pull/4275) | Add MiniMax-M3 model in Aiter - ATOM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-02 |
| [#4484](https://github.com/ROCm/aiter/pull/4484) | Flash Attention Ck  CI smoke test | @micmelesse | draft | 2026-07-31 | 2026-08-02 |
| [#4466](https://github.com/ROCm/aiter/pull/4466) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-30 | 2026-08-02 |
| [#4461](https://github.com/ROCm/aiter/pull/4461) | wvSplitKQ: support per-token/per-channel scales | @mqhc2020 | draft | 2026-07-30 | 2026-08-02 |
| [#4448](https://github.com/ROCm/aiter/pull/4448) | Plumb split-K through the a8w8 blockscale bpreshuffle GEMM | @Raiden-Makoto | draft | 2026-07-29 | 2026-08-02 |
| [#4443](https://github.com/ROCm/aiter/pull/4443) | perf: optimize MXFP4 MoE decode with fused sorting, quantiza... | @yuychang | open | 2026-07-29 | 2026-08-02 |
| [#4432](https://github.com/ROCm/aiter/pull/4432) | fix: use residual.stride(1) for MHC HC-slice indexing | @steamedMantou | open | 2026-07-29 | 2026-08-02 |
| [#4405](https://github.com/ROCm/aiter/pull/4405) | perf(mla): expose split override for graph decode | @JohnQinAMD | open | 2026-07-28 | 2026-08-02 |
| [#4389](https://github.com/ROCm/aiter/pull/4389) | Fix AITER JIT builds on gfx90a | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4286](https://github.com/ROCm/aiter/pull/4286) | [opt][gfx1250][ep] Add TDM deep-prefetch BF16 prefill for qk... | @jli-melchior | open | 2026-07-18 | 2026-07-21 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-09-05 |
| [#1232](https://github.com/ROCm/aiter/pull/1232) | [TRITON] FP8 blockscale fix and finetuning for Deepseek on M... | @juuso-oskari | open | 2025-10-21 | 2026-09-05 |
| [#6087](https://github.com/ROCm/aiter/pull/6087) | [ASM][flydsl] opt mla kernel for dspr1(gfx1250) | @xiangM99 | merged | 2026-10-02 | 2026-10-03 |
| [#5667](https://github.com/ROCm/aiter/pull/5667) | [Triton/Gluon] Add a16w4 MoE tuned dispatch and gfx942 DSv4.... | @akii96 | merged | 2026-09-18 | 2026-10-03 |
| [#5544](https://github.com/ROCm/aiter/pull/5544) | [ASM] [CI] Remove committed scratch files and stop two from ... | @Boss2002n | merged | 2026-09-15 | 2026-10-02 |
| [#6082](https://github.com/ROCm/aiter/pull/6082) | [Triton/Gluon] [Bugfix] batched_gemm_a8w8: keep scale loads ... | @akii96 | merged | 2026-10-02 | 2026-10-02 |
| [#6097](https://github.com/ROCm/aiter/pull/6097) | [Triton/Gluon] enable TDM fusion on MXFP4 | @Boss2002n | merged | 2026-10-02 | 2026-10-02 |
| [#6056](https://github.com/ROCm/aiter/pull/6056) | [Triton/Gluon] Changes related to gla for Kimi K3 | @omuhamma | merged | 2026-10-01 | 2026-10-02 |
| [#5866](https://github.com/ROCm/aiter/pull/5866) | [Triton/Gluon] Gluon Chunked Kimi Delta Attention (950/1250) | @omuhamma | merged | 2026-09-26 | 2026-10-02 |
| [#6034](https://github.com/ROCm/aiter/pull/6034) | [Triton/Gluon] spec decode support for gluon kda files | @omuhamma | merged | 2026-10-01 | 2026-10-02 |
| [#5926](https://github.com/ROCm/aiter/pull/5926) | [Triton/Gluon] [Config] gfx950 unified attention prefill til... | @prashant182 | merged | 2026-09-29 | 2026-10-02 |
| [#5800](https://github.com/ROCm/aiter/pull/5800) | [Triton/Gluon] fix gluon import and benchmark + tune fused_c... | @nidal567 | merged | 2026-09-23 | 2026-10-02 |
| [#6079](https://github.com/ROCm/aiter/pull/6079) | [Triton/Gluon] [HIP] gemm_a16w16: gfx950 config for MiniMax-... | @valarLip | merged | 2026-10-02 | 2026-10-02 |
| [#6080](https://github.com/ROCm/aiter/pull/6080) | fix topk_select restriction | @HaonanWang98 | merged | 2026-10-02 | 2026-10-02 |
| [#4951](https://github.com/ROCm/aiter/pull/4951) | [CK] [FlyDSL] add mxfp8 a8w8 blockscale for gfx950 | @solinzby1 | merged | 2026-08-24 | 2026-10-02 |
| [#5934](https://github.com/ROCm/aiter/pull/5934) | [FlyDSL] Dev/a4w4 prefill v2 yadai | @yadaish | merged | 2026-09-29 | 2026-10-02 |
| [#5933](https://github.com/ROCm/aiter/pull/5933) | [Triton/Gluon] [Config] Add gfx950 gemm_a16w16 config for N=... | @Jacob0226 | merged | 2026-09-29 | 2026-10-02 |
| [#5875](https://github.com/ROCm/aiter/pull/5875) | [Triton/Gluon] tuning k3 shapes for a16w16 | @omuhamma | merged | 2026-09-26 | 2026-10-02 |
| [#6075](https://github.com/ROCm/aiter/pull/6075) | [Release v0.1.24] Cherry-pick 29 main PRs through #5952 | @vgokhale | merged | 2026-10-02 | 2026-10-02 |
| [#5979](https://github.com/ROCm/aiter/pull/5979) | [CK] [Bugfix] Keep two K tiles per split in blockscale MoE s... | @jin-amd | merged | 2026-09-30 | 2026-10-02 |
| [#5230](https://github.com/ROCm/aiter/pull/5230) | [Triton/Gluon] Add 3D neighborhood flash attention (na3d_fla... | @jjuvonen-amd | merged | 2026-09-03 | 2026-10-02 |
| [#5863](https://github.com/ROCm/aiter/pull/5863) | [Triton/Gluon] Expert-parallel support for moe_gemm_a16w4 | @Rohan138 | merged | 2026-09-25 | 2026-10-01 |
| [#5940](https://github.com/ROCm/aiter/pull/5940) | [Triton/Gluon] Move Triton unit tests into their wrapper's f... | @Boss2002n | merged | 2026-09-29 | 2026-10-01 |
| [#6069](https://github.com/ROCm/aiter/pull/6069) | dsr oct 1 tuning | @Boss2002n | merged | 2026-10-01 | 2026-10-01 |
| [#5857](https://github.com/ROCm/aiter/pull/5857) | [Triton/Gluon] gmm: gfx950 large-K/N config with JSON-driven... | @NimitPtl | merged | 2026-09-25 | 2026-10-01 |
| [#5858](https://github.com/ROCm/aiter/pull/5858) | [Triton/Gluon] MHA fwd: gfx950 mid_head config for 64 < head... | @NimitPtl | merged | 2026-09-25 | 2026-10-01 |
| [#5629](https://github.com/ROCm/aiter/pull/5629) | [Triton/Gluon] [CI] [GFX950] Fix mha_varlen_with_pe miscompi... | @leonling-ll | merged | 2026-09-17 | 2026-10-01 |
| [#5895](https://github.com/ROCm/aiter/pull/5895) | [Triton/Gluon] gemm_a16w16_atomic accumulate into an existin... | @nsusanto | merged | 2026-09-27 | 2026-10-01 |
| [#5771](https://github.com/ROCm/aiter/pull/5771) | [Triton/Gluon] Assert SPLIT_UNMASKED_LOOP is not used with s... | @amd-xavierwang | merged | 2026-09-22 | 2026-10-01 |
| [#6007](https://github.com/ROCm/aiter/pull/6007) | [Triton/Gluon] Use a zero default for masked scales in gemm_... | @cagrikymk | merged | 2026-09-30 | 2026-10-01 |
| [#5984](https://github.com/ROCm/aiter/pull/5984) | [Triton/Gluon] Fix Conv3D CPU tests with a CUDA default devi... | @whx-sjtu | merged | 2026-09-30 | 2026-10-01 |
| [#5958](https://github.com/ROCm/aiter/pull/5958) | [Triton/Gluon] Skip MXFP4 logits tests on unsupported GPUs | @brunomazzottiamd | merged | 2026-09-29 | 2026-10-01 |
| [#5665](https://github.com/ROCm/aiter/pull/5665) | [Triton/Gluon] Account for sliding_window in bench_unified_a... | @mpashkovskii | merged | 2026-09-18 | 2026-10-01 |
| [#5790](https://github.com/ROCm/aiter/pull/5790) | [Triton/Gluon] [Config] Tune gfx1201 unified attention 2d fo... | @GodRishUniverse | merged | 2026-09-23 | 2026-10-01 |
| [#5663](https://github.com/ROCm/aiter/pull/5663) | [Triton/Gluon] Fix fp8 KV correctness reference in bench_uni... | @mpashkovskii | merged | 2026-09-18 | 2026-10-01 |
| [#6032](https://github.com/ROCm/aiter/pull/6032) | [Triton/Gluon] [Config] Add gfx1250 A16W16 GEMM configs for ... | @sogalin | merged | 2026-10-01 | 2026-10-01 |
| [#5886](https://github.com/ROCm/aiter/pull/5886) | [Triton/Gluon] Fix pa_decode compile error with newer Triton... | @zhanglx13 | merged | 2026-09-27 | 2026-10-01 |
| [#5998](https://github.com/ROCm/aiter/pull/5998) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @mjkvaak-amd | merged | 2026-09-30 | 2026-10-01 |
| [#5708](https://github.com/ROCm/aiter/pull/5708) | [HIP] [CK] Add relu2 (Squared ReLU) activation support to CK... | @shantipriya-amd | merged | 2026-09-20 | 2026-10-01 |
| [#5844](https://github.com/ROCm/aiter/pull/5844) | [ASM] [HIP] [FlyDSL] Add pin gpr(nhead96/128) and round-robi... | @xiangM99 | merged | 2026-09-25 | 2026-10-01 |
| [#5818](https://github.com/ROCm/aiter/pull/5818) | [HIP] [FlyDSL] [JIT] [gfx1250][GEMM] add MXFP8 1x32 bpreshuf... | @aoli26 | merged | 2026-09-24 | 2026-10-01 |
| [#5939](https://github.com/ROCm/aiter/pull/5939) | [Config] add DSR1 gfx1250 bf16 GEMM tuning | @demonsan | merged | 2026-09-29 | 2026-10-01 |
| [#5805](https://github.com/ROCm/aiter/pull/5805) | [OPUS] Speed up the gfx1250 32mx1 MLA sparse-prefill kernels | @kaiyang-1 | merged | 2026-09-24 | 2026-10-01 |
| [#6028](https://github.com/ROCm/aiter/pull/6028) | [Triton/Gluon] [Config] Tune gfx1250 MXFP4 preshuffle GEMM  | @Boss2002n | merged | 2026-10-01 | 2026-10-01 |
| [#6009](https://github.com/ROCm/aiter/pull/6009) | [Triton/Gluon] Unified attention sglang compatability fix | @cagrikymk | merged | 2026-09-30 | 2026-09-30 |
| [#5542](https://github.com/ROCm/aiter/pull/5542) | [Triton/Gluon] [Kernel] Add fused SiLU-and-multiply backward | @DaiXindi-AMD | merged | 2026-09-15 | 2026-09-30 |
| [#5942](https://github.com/ROCm/aiter/pull/5942) | [Triton/Gluon] Move Triton unit tests into their wrapper's f... | @Boss2002n | merged | 2026-09-29 | 2026-09-30 |
| [#5880](https://github.com/ROCm/aiter/pull/5880) | [CI] Triton board: drive PR status from the workflow | @Boss2002n | merged | 2026-09-26 | 2026-09-30 |
| [#5963](https://github.com/ROCm/aiter/pull/5963) | [Triton/Gluon] [GFX950] Fix LDS OOM on mxfp8 triton gemm | @k50112113 | merged | 2026-09-29 | 2026-09-30 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | [FlyDSL] Paged mla indexer | @fhuizing | merged | 2026-07-13 | 2026-09-30 |
| [#5783](https://github.com/ROCm/aiter/pull/5783) | [Config] Tune a8w8 bpreshuffle for Kimi-K3's KDA gate at tp4 | @XiaobingSuper | merged | 2026-09-23 | 2026-09-30 |
| [#5904](https://github.com/ROCm/aiter/pull/5904) | [Config] Add tuned a8w4 fused-MoE configs for DeepSeek V4.1-... | @cpersson-amd | merged | 2026-09-28 | 2026-09-30 |
| [#5763](https://github.com/ROCm/aiter/pull/5763) | [ASM] [HIP] Add gfx950 MXFP4 SiTUv2 FLAT 16x192/16x128/16x32... | @JohnNikolay84 | merged | 2026-09-22 | 2026-09-30 |
| [#5974](https://github.com/ROCm/aiter/pull/5974) | [Config] Add Qwen3.8-Flash-Next PTPC-FP8 gfx942 a8w8 bpreshu... | @zovonoir | merged | 2026-09-30 | 2026-09-30 |
| [#5864](https://github.com/ROCm/aiter/pull/5864) | [CI] Preserve install failure status after retries | @vgokhale | merged | 2026-09-25 | 2026-09-30 |
| [#5836](https://github.com/ROCm/aiter/pull/5836) | [Config] Add Qwen3.8-27B gfx950 A4W4 GDN BA projection shape... | @vorapolsiloai | merged | 2026-09-25 | 2026-09-30 |
| [#5652](https://github.com/ROCm/aiter/pull/5652) | [HIP] [Perf] Fold shared-expert gate GEMV into topk_softmax ... | @Emmanuel0612 | merged | 2026-09-18 | 2026-09-30 |
| [#5952](https://github.com/ROCm/aiter/pull/5952) | [Triton/Gluon] Add Triton-based Conv3D kernels | @saeid-rostami | merged | 2026-09-29 | 2026-09-29 |
| [#5877](https://github.com/ROCm/aiter/pull/5877) | [Triton/Gluon] stop fused_bmm_rope_kv_cache from using batch... | @Boss2002n | merged | 2026-09-26 | 2026-09-29 |
| [#5055](https://github.com/ROCm/aiter/pull/5055) | [Triton/Gluon] [GFX12] mxfp8 gemm cga update | @k50112113 | merged | 2026-08-27 | 2026-09-29 |
| [#5917](https://github.com/ROCm/aiter/pull/5917) | [Triton/Gluon] [Config] Drop no-op kpack from RDNA GEMM conf... | @hyjuunn | merged | 2026-09-28 | 2026-09-29 |
| [#5878](https://github.com/ROCm/aiter/pull/5878) | [CI] Select impacted Triton and Gluon unit tests | @Boss2002n | merged | 2026-09-26 | 2026-09-29 |
| [#5944](https://github.com/ROCm/aiter/pull/5944) | [Triton/Gluon] Move _gluon_kernels/gfx1250/norm/ to _gluon_k... | @Boss2002n | merged | 2026-09-29 | 2026-09-29 |
| [#5943](https://github.com/ROCm/aiter/pull/5943) | [Triton/Gluon] Move Triton unit tests into their wrapper's f... | @Boss2002n | merged | 2026-09-29 | 2026-09-29 |
| [#5941](https://github.com/ROCm/aiter/pull/5941) | [Triton/Gluon] Move the KDA_DECODE configs into the nested c... | @Boss2002n | merged | 2026-09-29 | 2026-09-29 |
| [#5725](https://github.com/ROCm/aiter/pull/5725) | [Triton/Gluon] Add SonicMoE pure-Triton grouped GEMM MoE | @WuLei-AMD | merged | 2026-09-21 | 2026-09-29 |
| [#5321](https://github.com/ROCm/aiter/pull/5321) | [Triton/Gluon] [Kimi-K3][ROCm] Add merged MoE front | @jiacao-amd | merged | 2026-09-08 | 2026-09-29 |
| [#5598](https://github.com/ROCm/aiter/pull/5598) | [Triton/Gluon] [Config] Enable unified-attention skip-mask f... | @vorapolsiloai | merged | 2026-09-16 | 2026-09-29 |
| [#5935](https://github.com/ROCm/aiter/pull/5935) | [Bugfix] Do not write segment softmax state at NUM_SEGMENTS_... | @sogalin | merged | 2026-09-29 | 2026-09-29 |
| [#5810](https://github.com/ROCm/aiter/pull/5810) | [FlyDSL] feat(mega_moe/gfx1250): bind mori tokoff-ext alloca... | @jhchouuu | merged | 2026-09-24 | 2026-09-29 |
| [#5761](https://github.com/ROCm/aiter/pull/5761) | [HIP] [OPUS] [JIT] Unify gfx950+gfx1250 MXFP4 MQA-logits | @shay-li77 | merged | 2026-09-22 | 2026-09-29 |
| [#5585](https://github.com/ROCm/aiter/pull/5585) | [Config] Add Qwen3.8-27B TP1 a8w8 blockscale GEMM tunings fo... | @phambinhfin | merged | 2026-09-16 | 2026-09-29 |
| [#5919](https://github.com/ROCm/aiter/pull/5919) | [HIP] Tune DSV4.1 TP4 A4W4 fused MoE configs for gfx950 | @yifehuan | merged | 2026-09-28 | 2026-09-29 |
| [#5885](https://github.com/ROCm/aiter/pull/5885) | [Triton/Gluon] [gfx950] [dsv4.1-flash] optimizing the mHC fu... | @ahmed-bsod | merged | 2026-09-27 | 2026-09-28 |
| [#5830](https://github.com/ROCm/aiter/pull/5830) | [Triton/Gluon] [Config] gemm_a16w16: gfx950 tuned per-shape ... | @NimitPtl | merged | 2026-09-25 | 2026-09-28 |
| [#5860](https://github.com/ROCm/aiter/pull/5860) | [Triton/Gluon] [Bugfix][MLA] Follow-up: fix stale comments +... | @Rohan138 | merged | 2026-09-25 | 2026-09-28 |
| [#4493](https://github.com/ROCm/aiter/pull/4493) | [Triton/Gluon] [Config] Add a tuned gfx1101 MHA config, spli... | @Ragua1 | merged | 2026-07-31 | 2026-09-28 |
| [#5874](https://github.com/ROCm/aiter/pull/5874) | [Triton/Gluon] Consolidate tuning harnesses | @Boss2002n | merged | 2026-09-26 | 2026-09-28 |
| [#4963](https://github.com/ROCm/aiter/pull/4963) | [FlyDSL] gfx942 fp8_mqa_logits: let _auto_variant choose row... | @jin-amd | merged | 2026-08-24 | 2026-09-28 |
| [#5901](https://github.com/ROCm/aiter/pull/5901) | [FlyDSL] [JIT] [AOT] Inline the FlyDSL FP8 FMHA head shapes,... | @gbyu-amd | merged | 2026-09-28 | 2026-09-28 |
| [#5905](https://github.com/ROCm/aiter/pull/5905) | [MLA v4 nm] Test fix _run_one_point reading packed BF16 as F... | @liyjiang | merged | 2026-09-28 | 2026-09-28 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-10-03T12:48:47Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2357](https://github.com/ROCm/ATOM/pull/2357) | feat(plugin): DeepSeek-V4.1-Flash on the vLLM plugin, with L... | @PerryZhang01 | open | 2026-09-22 | 2026-10-03 |
| [#2455](https://github.com/ROCm/ATOM/pull/2455) | build(docker): build Mooncake with Mooncake Store (WITH_STOR... | @Jasen2201 | open | 2026-10-02 | 2026-10-03 |
| [#2459](https://github.com/ROCm/ATOM/pull/2459) | feat(offload): LMCache MP servers per NUMA node and a Moonca... | @Jasen2201 | open | 2026-10-03 | 2026-10-03 |
| [#2458](https://github.com/ROCm/ATOM/pull/2458) | [Perf][Kimi-K3] Optimize prefill gated RMSNorm pipeline | @XiaobingSuper | open | 2026-10-03 | 2026-10-03 |
| [#2453](https://github.com/ROCm/ATOM/pull/2453) | [1/3 entrypoint refactor] [feat(mesh)]: unify multi-API ingr... | @Yuechguo | open | 2026-10-02 | 2026-10-03 |
| [#2435](https://github.com/ROCm/ATOM/pull/2435) | [Draft][Perf] Integrate GLM-5.2 and Kimi-K3 AgentX MonoKerne... | @XiaobingSuper | draft | 2026-09-30 | 2026-10-03 |
| [#2431](https://github.com/ROCm/ATOM/pull/2431) | feat(pd): stage DCP MLA KV into destination pages, and land ... | @Jasen2201 | open | 2026-09-30 | 2026-10-03 |
| [#2433](https://github.com/ROCm/ATOM/pull/2433) | ci(atomesh): GLM-5.2 cpp4/dcp4 c56+ — per-stage LMCache look... | @Jasen2201 | open | 2026-09-30 | 2026-10-03 |
| [#2448](https://github.com/ROCm/ATOM/pull/2448) | feat(offload/mp): make engine_driven transfers usable, and m... | @PerryZhang01 | open | 2026-10-02 | 2026-10-03 |
| [#2451](https://github.com/ROCm/ATOM/pull/2451) | fix(glm5-next): MTP verify always writes sparse KV indices; ... | @Jasen2201 | open | 2026-10-02 | 2026-10-03 |
| [#2456](https://github.com/ROCm/ATOM/pull/2456) | [AMD][DSR1] feat(dp): backpressure (lazy) DP dispatch to avo... | @karverma-amd | open | 2026-10-02 | 2026-10-03 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-10-02 |
| [#2298](https://github.com/ROCm/ATOM/pull/2298) | [Lumen-RL] Receive trained weights over RCCL, transactionall... | @i-chaochen | open | 2026-09-19 | 2026-10-02 |
| [#2297](https://github.com/ROCm/ATOM/pull/2297) | [Lumen-RL] Generic collective_rpc across all DP and TP ranks... | @i-chaochen | open | 2026-09-19 | 2026-10-02 |
| [#2430](https://github.com/ROCm/ATOM/pull/2430) | fix: DCP prefill + MTP draft crash, Mooncake notify-port bin... | @Jasen2201 | open | 2026-09-30 | 2026-10-02 |
| [#2452](https://github.com/ROCm/ATOM/pull/2452) | fix(minimax-m3): order mono stores before their done flags; ... | @akii96 | draft | 2026-10-02 | 2026-10-02 |
| [#2365](https://github.com/ROCm/ATOM/pull/2365) | [feature] support pp>1 for Kimi-K3 | @gbyu-amd | open | 2026-09-23 | 2026-10-02 |
| [#2449](https://github.com/ROCm/ATOM/pull/2449) | perf(k3-prefill): warm prefill GEMM buckets at startup; stop... | @Jasen2201 | draft | 2026-10-02 | 2026-10-02 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [Lumen-RL] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-10-02 |
| [#2447](https://github.com/ROCm/ATOM/pull/2447) | fix(kimi-k3): guard ptpc SiTU quant shape | @XiaobingSuper | draft | 2026-10-02 | 2026-10-02 |
| [#2442](https://github.com/ROCm/ATOM/pull/2442) | docs(offload): clarify LMCache MP lookup timeout scope | @kvnloo | open | 2026-10-01 | 2026-10-02 |
| [#2443](https://github.com/ROCm/ATOM/pull/2443) | feat(plugin/mp): run the K3 offload connector on ATOM's MP L... | @PerryZhang01 | open | 2026-10-01 | 2026-10-02 |
| [#2335](https://github.com/ROCm/ATOM/pull/2335) | IQ2R: load GLM-5.3 packed MoE checkpoints with TP slicing | @ssharma4-amd | draft | 2026-09-21 | 2026-10-01 |
| [#2445](https://github.com/ROCm/ATOM/pull/2445) | Split ATOM_PROFILER_MORE into per-option profiler flags | @poznano-amd | open | 2026-10-01 | 2026-10-01 |
| [#2403](https://github.com/ROCm/ATOM/pull/2403) | fix(gdn): store the temporal state in the checkpoint's mamba... | @eky-amd | draft | 2026-09-25 | 2026-10-01 |
| [#2364](https://github.com/ROCm/ATOM/pull/2364) | feat(sp): add Ulysses sequence parallelism and optimize M3 p... | @whx-sjtu | open | 2026-09-23 | 2026-10-01 |
| [#2429](https://github.com/ROCm/ATOM/pull/2429) | [ATOM] Enable DPA comm-fused MoE reduce-scatter with compact... | @yifehuan | open | 2026-09-30 | 2026-10-01 |
| [#2437](https://github.com/ROCm/ATOM/pull/2437) | [DCP]sparse prefill use QREP, removing AllGather Q and copy | @ZhiweiYan-96 | open | 2026-09-30 | 2026-10-01 |
| [#2439](https://github.com/ROCm/ATOM/pull/2439) | add more MP LMCache instructions hosting Kimi-K3 from vllm A... | @linsun12 | open | 2026-09-30 | 2026-10-01 |
| [#2412](https://github.com/ROCm/ATOM/pull/2412) | fix(offload): reject invalid LMCache lookup scope at startup | @kvnloo | open | 2026-09-27 | 2026-09-30 |
| [#2418](https://github.com/ROCm/ATOM/pull/2418) | perf(qwen4_exp): MI308X optimizations for Qwen3.8-Flash-Next... | @zovonoir | open | 2026-09-28 | 2026-09-30 |
| [#2426](https://github.com/ROCm/ATOM/pull/2426) | [sgl+atom] Keep Qwen3.8 Flash full-attn, EP, and MTP on SGLa... | @zhangxinyuanliuhengyu | open | 2026-09-29 | 2026-09-30 |
| [#2369](https://github.com/ROCm/ATOM/pull/2369) | fix(plugin): hold the deferred-save clock on the slotted Seq... | @PerryZhang01 | open | 2026-09-23 | 2026-09-30 |
| [#2425](https://github.com/ROCm/ATOM/pull/2425) | [ATOM][PD][Feat] Transfer KV by chunk | @MengqingCao | draft | 2026-09-29 | 2026-09-30 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat: support v4 mixed-schedule large conc opt | @jiayyu | open | 2026-08-26 | 2026-09-30 |
| [#2371](https://github.com/ROCm/ATOM/pull/2371) | [PD][DCP] Reorder mla cache in P to the dcp layout in D | @MengqingCao | open | 2026-09-23 | 2026-09-30 |
| [#2405](https://github.com/ROCm/ATOM/pull/2405) | [MORI] Multi-node + MORI_V2- #5855 | @k50112113 | open | 2026-09-25 | 2026-09-30 |
| [#2380](https://github.com/ROCm/ATOM/pull/2380) | [gfx1250] feat(mla): unfused fallback for gather_kv_b_proj | @zejunchen-zejun | open | 2026-09-24 | 2026-09-29 |
| [#2384](https://github.com/ROCm/ATOM/pull/2384) | feat(moe): enable mega stage1_fused on fp4/fp8 dispatch wire | @yanboshao | open | 2026-09-24 | 2026-09-29 |
| [#2390](https://github.com/ROCm/ATOM/pull/2390) | [gfx1250][GEMM] Add DSV4 opt-in MXFP8 1x32 shuffled scales f... | @aoli26 | open | 2026-09-24 | 2026-09-29 |
| [#2411](https://github.com/ROCm/ATOM/pull/2411) | perf(dsv4): adapt tuned AITER ASM FP8 decode | @yhl-amd | open | 2026-09-26 | 2026-09-29 |
| [#2416](https://github.com/ROCm/ATOM/pull/2416) | docs(vllm): recompute MiniMax M3 LMCache load misses | @kvnloo | open | 2026-09-28 | 2026-09-29 |
| [#2132](https://github.com/ROCm/ATOM/pull/2132) | [Kimi-K3][LMCache] Fuse the state load leg, and fence the KV... | @zejunchen-zejun | open | 2026-09-03 | 2026-09-28 |
| [#2420](https://github.com/ROCm/ATOM/pull/2420) | [ATOMesh] Add GLM-5.2-MXFP4 2P1D coverage | @itej89 | draft | 2026-09-28 | 2026-09-28 |
| [#2353](https://github.com/ROCm/ATOM/pull/2353) | feat(offload): add MP-only save admission budget | @yhl-amd | open | 2026-09-22 | 2026-09-28 |
| [#2007](https://github.com/ROCm/ATOM/pull/2007) | feat(pp) support dynamic chunked pipeline parallel | @wanzhenchn | open | 2026-08-24 | 2026-09-28 |
| [#2333](https://github.com/ROCm/ATOM/pull/2333) | [WIP] Integrate MoonEP policies with MoRI and fused_moe | @JiaoliangYu | draft | 2026-09-21 | 2026-09-28 |
| [#2269](https://github.com/ROCm/ATOM/pull/2269) | [minimax-m3]: integrate flydsl index_score kernel | @ganyi1996ppo | open | 2026-09-17 | 2026-09-28 |
| [#2410](https://github.com/ROCm/ATOM/pull/2410) | [Docs] Qwen3.8-Flash-Next recipe: agentic serving on one MI3... | @mavizao | open | 2026-09-26 | 2026-09-27 |
| [#2406](https://github.com/ROCm/ATOM/pull/2406) | fix(offload): include exception type in dense lookup warning... | @kvnloo | open | 2026-09-25 | 2026-09-26 |
| [#2404](https://github.com/ROCm/ATOM/pull/2404) | fix(offload): distinguish unmeasured profile timings | @kvnloo | open | 2026-09-25 | 2026-09-26 |
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#2013](https://github.com/ROCm/ATOM/pull/2013) | docker: fix ATOM and SGLang release builds | @ThomasNing | open | 2026-08-25 | 2026-09-24 |
| [#2332](https://github.com/ROCm/ATOM/pull/2332) | feat(kimi-k3): support P/D disaggregation (re-land of #2154) | @wanzhenchn | open | 2026-09-21 | 2026-09-24 |
| [#2386](https://github.com/ROCm/ATOM/pull/2386) | [Performance] Split NUMA-bound CPUs into per-GPU physical-co... | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2376](https://github.com/ROCm/ATOM/pull/2376) | feat(v41): support DPA and DPA prefill TBO with safe expert ... | @ZhangLirong-amd | open | 2026-09-23 | 2026-09-24 |
| [#2355](https://github.com/ROCm/ATOM/pull/2355) | CI: allow overriding ATOM inference watchdog threshold | @gyohuangxin | open | 2026-09-22 | 2026-09-24 |
| [#2374](https://github.com/ROCm/ATOM/pull/2374) | ci: avoid restarting tests on PR approval | @leo-automation | open | 2026-09-23 | 2026-09-24 |
| [#2381](https://github.com/ROCm/ATOM/pull/2381) | [Performance] Reduce TP host-control overhead for C16 | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2370](https://github.com/ROCm/ATOM/pull/2370) | ci(atomesh): add GLM-5.2 1P2D CPP4+DPA4 agentic benchmark su... | @Jasen2201 | open | 2026-09-23 | 2026-09-24 |
| [#2295](https://github.com/ROCm/ATOM/pull/2295) | Add GPT-OSS IQ2R 2-bit MoE integration | @ssharma4-amd | open | 2026-09-18 | 2026-09-23 |
| [#2375](https://github.com/ROCm/ATOM/pull/2375) | [DO NOT MERGE] Test CI approval orchestration | @leo-automation | open | 2026-09-23 | 2026-09-23 |
| [#2344](https://github.com/ROCm/ATOM/pull/2344) | (doc)GLM-5.3 LMCache: concurrency sweep (8/16/32) and HBM/ti... | @PerryZhang01 | open | 2026-09-22 | 2026-09-23 |
| [#2349](https://github.com/ROCm/ATOM/pull/2349) | Add MiMo V2.5 Pro support to the SGLang plugin | @yucshen | open | 2026-09-22 | 2026-09-23 |
| [#2359](https://github.com/ROCm/ATOM/pull/2359) | [Bugfix][vLLM] Forward unknown kwargs through the Harmony pa... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2361](https://github.com/ROCm/ATOM/pull/2361) | [Bugfix][vLLM] Fill padded GDN decode state slots with NULL_... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2362](https://github.com/ROCm/ATOM/pull/2362) | [Bugfix][vLLM] Only engage the EAGLE3 heterogeneous KV pool ... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2340](https://github.com/ROCm/ATOM/pull/2340) | Enable GLM-5.3-Flash under vllm serve on the ATOM plugin.- #... | @sajandhy | draft | 2026-09-22 | 2026-09-22 |
| [#2236](https://github.com/ROCm/ATOM/pull/2236) | plugin/vllm: upgrade the ATOM vLLM plugin to 0.29.0 | @PerryZhang01 | open | 2026-09-15 | 2026-09-22 |
| [#2313](https://github.com/ROCm/ATOM/pull/2313) | ci(mesh): benchmark GLM agentic 2P2D with kv_cache_aware rou... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2308](https://github.com/ROCm/ATOM/pull/2308) | feat(mesh): route calibrated HBM and CPU aware prefill/decod... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2307](https://github.com/ROCm/ATOM/pull/2307) | feat(cache): publish native HBM and CPU catalog with exact r... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2306](https://github.com/ROCm/ATOM/pull/2306) | feat(cache): isolate native layouts and expose execution top... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2287](https://github.com/ROCm/ATOM/pull/2287) | feat(ci): collect per-GPU hardware metrics in agentic report... | @Jasen2201 | open | 2026-09-18 | 2026-09-22 |
| [#1873](https://github.com/ROCm/ATOM/pull/1873) | Expose Prometheus metrics for KV-aware routing and modernize... | @Jasen2201 | open | 2026-08-12 | 2026-09-22 |
| [#2330](https://github.com/ROCm/ATOM/pull/2330) | [SGL ATOM]Pin SGLang ATOM image transformers to 5.16.1. | @zhangxinyuanliuhengyu | open | 2026-09-21 | 2026-09-22 |
| [#2337](https://github.com/ROCm/ATOM/pull/2337) | [CI][ROCm][ATOMesh] Add DeepSeek-V4-Pro 2P1D TP8 catalog cas... | @avininjamay8 | open | 2026-09-21 | 2026-09-22 |
| [#2293](https://github.com/ROCm/ATOM/pull/2293) | Add hybrid mega/standard MoE dispatch for MegaMxfp4MoEMethod | @amd-weisun | draft | 2026-09-18 | 2026-09-21 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | draft | 2026-08-19 | 2026-09-21 |
| [#2329](https://github.com/ROCm/ATOM/pull/2329) | Add GLM-5.3-Flash IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-09-21 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | draft | 2026-09-07 | 2026-09-21 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-30 | 2026-09-21 |
| [#2318](https://github.com/ROCm/ATOM/pull/2318) | fix(spec-decode): honor request sampling during target verif... | @gbyu-amd | draft | 2026-09-20 | 2026-09-20 |
| [#2301](https://github.com/ROCm/ATOM/pull/2301) | [Spec Decode] Add opt-in synthetic forward for forced accept... | @gbyu-amd | open | 2026-09-20 | 2026-09-20 |
| [#2286](https://github.com/ROCm/ATOM/pull/2286) | [FlyDSL] [Gfx1250] mega moe stage1 gfx1250 no overlap | @XingerZhu | open | 2026-09-18 | 2026-09-20 |
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-09-20 |
| [#2203](https://github.com/ROCm/ATOM/pull/2203) | [KV-events] match vLLM/SGLang ZMQ framing and per-DP-rank po... | @vMaroon | open | 2026-09-11 | 2026-09-20 |
| [#2126](https://github.com/ROCm/ATOM/pull/2126) | fix kimi k3 piecewise cudagraph | @ganyi1996ppo | draft | 2026-09-03 | 2026-09-18 |
| [#2272](https://github.com/ROCm/ATOM/pull/2272) | [CI][ROCm][ATOMesh] Add MiniMax-M3-FP8 2P1D TP8 catalog case... | @avininjamay8 | open | 2026-09-17 | 2026-09-18 |
| [#2275](https://github.com/ROCm/ATOM/pull/2275) | fix(plugin/vllm): keep the platform hook from dropping ATOMP... | @linsun12 | open | 2026-09-17 | 2026-09-18 |
| [#2266](https://github.com/ROCm/ATOM/pull/2266) | [ATOM][Metrics]: add decode TTFT stages, GPU sample/propose,... | @MengqingCao | draft | 2026-09-17 | 2026-09-17 |
| [#2258](https://github.com/ROCm/ATOM/pull/2258) | feed local expert hash from atom to moe | @yadaish | open | 2026-09-16 | 2026-09-17 |
| [#2248](https://github.com/ROCm/ATOM/pull/2248) | [WIP]fix(attention): stabilize MLA/MHA outputs for piecewise... | @MengqingCao | open | 2026-09-15 | 2026-09-17 |
| [#2260](https://github.com/ROCm/ATOM/pull/2260) | fix(offload): stop a failed external-tier load from livelock... | @PerryZhang01 | open | 2026-09-16 | 2026-09-17 |
| [#2262](https://github.com/ROCm/ATOM/pull/2262) | docs: refresh installation, model inventory and publication ... | @sunway513 | open | 2026-09-16 | 2026-09-17 |
| [#2252](https://github.com/ROCm/ATOM/pull/2252) | feat(dsv4-flash): vLLM-plugin in-process LMCache offload for... | @linsun12 | draft | 2026-09-16 | 2026-09-16 |
| [#2243](https://github.com/ROCm/ATOM/pull/2243) | Size the staging pack grid by the bytes it moves, not the wi... | @PerryZhang01 | open | 2026-09-15 | 2026-09-16 |
| [#2237](https://github.com/ROCm/ATOM/pull/2237) | ci: add safe incremental ATOM image builds | @yhl-amd | open | 2026-09-15 | 2026-09-16 |
| [#2241](https://github.com/ROCm/ATOM/pull/2241) | ci: add Copilot code review instructions | @valarLip | open | 2026-09-15 | 2026-09-16 |
| [#2222](https://github.com/ROCm/ATOM/pull/2222) | perf(loader): separate streaming and drain concurrency | @JiaoliangYu | draft | 2026-09-14 | 2026-09-15 |
| [#2226](https://github.com/ROCm/ATOM/pull/2226) | feat(atomesh): use HIP IPC/xGMI for single-node P/D transfer... | @junyyang-amd | open | 2026-09-14 | 2026-09-15 |
| [#2141](https://github.com/ROCm/ATOM/pull/2141) | feat: add GLM-5.3-Flash multimodal support | @cubezhang | open | 2026-09-04 | 2026-09-14 |
| [#2122](https://github.com/ROCm/ATOM/pull/2122) | fix(minimax-m3): unblock fp8 KV cache and EAGLE3 spec decode... | @PerryZhang01 | open | 2026-09-03 | 2026-09-14 |
| [#1719](https://github.com/ROCm/ATOM/pull/1719) | [Kimi-K3] MI455 support Kimi-K3 | @zejunchen-zejun | draft | 2026-07-28 | 2026-09-14 |
| [#2201](https://github.com/ROCm/ATOM/pull/2201) | fix(offload): bound Dense/M3 saves with safe retirement | @yhl-amd | open | 2026-09-11 | 2026-09-14 |
| [#2206](https://github.com/ROCm/ATOM/pull/2206) | setting HSA_ENABLE_IPC_MODE_LEGACY=1 to avoid GPU memory pin... | @linsun12 | open | 2026-09-12 | 2026-09-14 |
| [#2212](https://github.com/ROCm/ATOM/pull/2212) | Qichu/allow mtp8 with spec decode | @ZhiweiYan-96 | draft | 2026-09-13 | 2026-09-13 |
| [#2071](https://github.com/ROCm/ATOM/pull/2071) | [Ci]agentic benchmark ci weekly | @ZhangLirong-amd | open | 2026-08-28 | 2026-09-11 |
| [#2187](https://github.com/ROCm/ATOM/pull/2187) | feat(wideep): integrate EP16 transport with modular fused Mo... | @JiaoliangYu | draft | 2026-09-10 | 2026-09-11 |
| [#2196](https://github.com/ROCm/ATOM/pull/2196) | scheduler: make the prefill coalescer work on the TP/DCP pat... | @ZhiweiYan-96 | draft | 2026-09-11 | 2026-09-11 |
| [#2183](https://github.com/ROCm/ATOM/pull/2183) | fix(prefix-cache): keep media prompts out of the prefix cach... | @HaonanWang98 | open | 2026-09-10 | 2026-09-11 |
| [#1942](https://github.com/ROCm/ATOM/pull/1942) | feat(wideep): multi-node wide expert parallelism on top of #... | @JiaoliangYu | draft | 2026-08-18 | 2026-09-10 |
| [#1973](https://github.com/ROCm/ATOM/pull/1973) | Qwen38 accuracy | @PerryZhang01 | open | 2026-08-20 | 2026-09-10 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | open | 2026-08-13 | 2026-09-10 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-09-09 |
| [#2149](https://github.com/ROCm/ATOM/pull/2149) | feat(v4): DeepSeek-V4-Flash-Vision support | @HaonanWang98 | open | 2026-09-07 | 2026-09-09 |
| [#2158](https://github.com/ROCm/ATOM/pull/2158) | [Scheduler] Shortest-job-first prefill admission to cut p90 ... | @ganyi1996ppo | open | 2026-09-07 | 2026-09-08 |
| [#2039](https://github.com/ROCm/ATOM/pull/2039) | perf(dpa): sync forward metadata over device group | @yhl-amd | open | 2026-08-26 | 2026-09-07 |
| [#2137](https://github.com/ROCm/ATOM/pull/2137) | [atom-vllm]: enable DSpark speculative decoding for DeepSeek... | @peizhang56 | open | 2026-09-03 | 2026-09-07 |
| [#2142](https://github.com/ROCm/ATOM/pull/2142) | [atom-vllm] LMCache offload for GLM-5.2 | @kliuae | open | 2026-09-04 | 2026-09-07 |
| [#1386](https://github.com/ROCm/ATOM/pull/1386) | docs: add gfx1200 (Navi 44) alongside gfx1201 for RDNA4 supp... | @0xDELUXA | open | 2026-06-28 | 2026-09-05 |
| [#2125](https://github.com/ROCm/ATOM/pull/2125) | [PCP] Shard `shared_experts` on the folded TP grid, and sync... | @yitingw1 | draft | 2026-09-03 | 2026-09-03 |
| [#2111](https://github.com/ROCm/ATOM/pull/2111) | Rust-owned Atomesh Standalone EngineCore Transport | @Yuechguo | open | 2026-09-01 | 2026-09-03 |
| [#2116](https://github.com/ROCm/ATOM/pull/2116) | perf: capture DeepSeek-V4 MTP step zero | @yhl-amd | open | 2026-09-02 | 2026-09-03 |
| [#2027](https://github.com/ROCm/ATOM/pull/2027) | [MiniMax-M3][GFX1250] Enable SwiGLU activation for Triton Mo... | @leonling-ll | open | 2026-08-26 | 2026-09-02 |
| [#2059](https://github.com/ROCm/ATOM/pull/2059) | docs: Fix duplicated table on atom overview | @timothycarambat | open | 2026-08-27 | 2026-08-29 |
| [#2061](https://github.com/ROCm/ATOM/pull/2061) | Glm5.3 flash support | @PerryZhang01 | open | 2026-08-27 | 2026-08-29 |
| [#1995](https://github.com/ROCm/ATOM/pull/1995) | [ATOM] add persistent path for DCP GLM5.2 | @zhuyuhua-v | open | 2026-08-24 | 2026-08-28 |
| [#1923](https://github.com/ROCm/ATOM/pull/1923) | [Kernel Opt] change m3 gluon kernel to flydsl kernel | @ZLkanyo009 | open | 2026-08-17 | 2026-08-28 |
| [#2074](https://github.com/ROCm/ATOM/pull/2074) | [DO NOT MERGE] bench: fixed-length prompts and no warmup | @JiaoliangYu | open | 2026-08-28 | 2026-08-28 |
| [#2066](https://github.com/ROCm/ATOM/pull/2066) | [MTP] fix low acceptance rate issue of glm5.2 MTP | @ZhiweiYan-96 | draft | 2026-08-28 | 2026-08-28 |
| [#2024](https://github.com/ROCm/ATOM/pull/2024) | state checkpoint superblock | @ganyi1996ppo | open | 2026-08-26 | 2026-08-27 |
| [#2043](https://github.com/ROCm/ATOM/pull/2043) | [Feat] Conform MiniMax-M3 serving to OpenAI API | @kliuae | open | 2026-08-26 | 2026-08-27 |
| [#2011](https://github.com/ROCm/ATOM/pull/2011) | [Feature] Integrate the AITER MK1 persistent decoder | @ssharma4-amd | draft | 2026-08-24 | 2026-08-26 |
| [#2015](https://github.com/ROCm/ATOM/pull/2015) | Optimized Attention Residual for Kimi-K3 | @amd-wsung102 | draft | 2026-08-25 | 2026-08-26 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-26 |
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-08-26 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-08-26 |
| [#1217](https://github.com/ROCm/ATOM/pull/1217) | [CI] add performance CI for online quant | @haoyangli0109 | open | 2026-06-15 | 2026-08-26 |
| [#2023](https://github.com/ROCm/ATOM/pull/2023) | feat(mla): optionally run sparse MLA on aiter's Gluon kernel | @cagrikymk | draft | 2026-08-25 | 2026-08-25 |
| [#1901](https://github.com/ROCm/ATOM/pull/1901) | [ATOM-vLLM] Add support for Qwen3.8 | @kliuae | open | 2026-08-14 | 2026-08-25 |
| [#1893](https://github.com/ROCm/ATOM/pull/1893) | [Kimi-K3] Route KDA prefill through the FlyDSL AITER kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#1974](https://github.com/ROCm/ATOM/pull/1974) | perf(dsv4): optimize FP8 and FP4 indexer prefill | @yhl-amd | open | 2026-08-20 | 2026-08-24 |
| [#1978](https://github.com/ROCm/ATOM/pull/1978) | feat(eplb):avoid local copy in eplb; move build l2p to devic... | @JiaoliangYu | draft | 2026-08-21 | 2026-08-24 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | Feat/shared expert pinned logical | @JiaoliangYu | draft | 2026-08-17 | 2026-08-21 |
| [#1937](https://github.com/ROCm/ATOM/pull/1937) | perf(mtp): defer draft proposal publication | @yhl-amd | open | 2026-08-18 | 2026-08-20 |
| [#1946](https://github.com/ROCm/ATOM/pull/1946) | feat(state-cache): snapshot PAGE state at prefill end | @yhl-amd | open | 2026-08-19 | 2026-08-20 |
| [#1947](https://github.com/ROCm/ATOM/pull/1947) | state checkpoint port optimized | @ganyi1996ppo | open | 2026-08-19 | 2026-08-20 |
| [#1879](https://github.com/ROCm/ATOM/pull/1879) | Optimize statecache and prefix caching strategy for Mamba li... | @ganyi1996ppo | open | 2026-08-13 | 2026-08-19 |
| [#1908](https://github.com/ROCm/ATOM/pull/1908) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-08-15 | 2026-08-19 |
| [#1933](https://github.com/ROCm/ATOM/pull/1933) | ci: prefer commit-specific Aiter S3 manifest | @gyohuangxin | open | 2026-08-17 | 2026-08-19 |
| [#1941](https://github.com/ROCm/ATOM/pull/1941) | [recipe] add Agentic-K3 recipe | @gbyu-amd | open | 2026-08-18 | 2026-08-19 |
| [#1872](https://github.com/ROCm/ATOM/pull/1872) | [ATOM SGL] change ci scope for 0.5.17 | @ZhiweiYan-96 | open | 2026-08-12 | 2026-08-18 |
| [#1922](https://github.com/ROCm/ATOM/pull/1922) | [DO NOT MERGE] [LONG TERM] Gate heavy CI with reusable workf... | @gyohuangxin | open | 2026-08-17 | 2026-08-18 |
| [#1920](https://github.com/ROCm/ATOM/pull/1920) | Skip duplicate heavy CI runs for same PR SHA | @gyohuangxin | open | 2026-08-17 | 2026-08-18 |
| [#1932](https://github.com/ROCm/ATOM/pull/1932) | fix(moe): preserve FP8 shuffle metadata | @akii96 | draft | 2026-08-17 | 2026-08-17 |
| [#1891](https://github.com/ROCm/ATOM/pull/1891) | [ATOM SGL] fix ci error | @ZhiweiYan-96 | open | 2026-08-13 | 2026-08-17 |
| [#1913](https://github.com/ROCm/ATOM/pull/1913) | [feat] enable k3 vision part in vllm plugin | @gbyu-amd | open | 2026-08-16 | 2026-08-17 |
| [#1843](https://github.com/ROCm/ATOM/pull/1843) | [ATOM SGL][feat] K3 dspark | @ZhiweiYan-96 | draft | 2026-08-10 | 2026-08-17 |
| [#1867](https://github.com/ROCm/ATOM/pull/1867) | add new torch base docker | @zhuyuhua-v | draft | 2026-08-12 | 2026-08-17 |
| [#1909](https://github.com/ROCm/ATOM/pull/1909) | Yuechguo/mesh entrypoints | @Yuechguo | draft | 2026-08-16 | 2026-08-16 |
| [#1888](https://github.com/ROCm/ATOM/pull/1888) | [fix](vllm): remove vllm patch | @PerryZhang01 | open | 2026-08-13 | 2026-08-14 |
| [#1892](https://github.com/ROCm/ATOM/pull/1892) | [Feat] Allow passing token ids to /v1/completions  | @simondanielsson | draft | 2026-08-13 | 2026-08-13 |
| [#1889](https://github.com/ROCm/ATOM/pull/1889) | [kernel opt] add flydsl attention for m3 | @ZLkanyo009 | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1743](https://github.com/ROCm/ATOM/pull/1743) | mtp support blocksize other than 1 | @HaonanWang98 | open | 2026-07-30 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-08-11 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#1835](https://github.com/ROCm/ATOM/pull/1835) | fix(scheduler): unblock decode behind a long chunked prefill | @hippothewild | open | 2026-08-07 | 2026-08-10 |
| [#1759](https://github.com/ROCm/ATOM/pull/1759) | support mamba prefix cache | @ganyi1996ppo | open | 2026-07-31 | 2026-08-10 |
| [#1779](https://github.com/ROCm/ATOM/pull/1779) | sparsekv cache glm52 agentic task optimization  | @Jasen2201 | draft | 2026-08-04 | 2026-08-10 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#1818](https://github.com/ROCm/ATOM/pull/1818) | Ganyi/do opt prefill kda | @ganyi1996ppo | open | 2026-08-06 | 2026-08-07 |
| [#1780](https://github.com/ROCm/ATOM/pull/1780) | random IMA fix | @gbyu-amd | open | 2026-08-04 | 2026-08-06 |
| [#1773](https://github.com/ROCm/ATOM/pull/1773) | [Kimi-K3] Enable align-mode mamba prefix caching (vLLM-ATOM) | @gbyu-amd | open | 2026-08-03 | 2026-08-04 |
| [#1747](https://github.com/ROCm/ATOM/pull/1747) | feat: support GLM-5.2 tool call parser | @Phi-C | open | 2026-07-30 | 2026-07-31 |
| [#1751](https://github.com/ROCm/ATOM/pull/1751) | fix: forward extra args in patched_inline_call for torch _dy... | @thpereir | open | 2026-07-30 | 2026-07-31 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1723](https://github.com/ROCm/ATOM/pull/1723) | test: add block-level DeepSeek-V4 attention test (real Deeps... | @carlushuang | open | 2026-07-29 | 2026-07-30 |
| [#1594](https://github.com/ROCm/ATOM/pull/1594) | Add MoRIIO write-push KV transfer with DeepSeek-V4 and fabri... | @maning00 | draft | 2026-07-14 | 2026-07-29 |
| [#1683](https://github.com/ROCm/ATOM/pull/1683) | [Feature] KV offload: hybrid bundle backend + dense/hybrid s... | @yhl-amd | open | 2026-07-23 | 2026-07-24 |
| [#1666](https://github.com/ROCm/ATOM/pull/1666) | feat(moe): FlyDSL MegaMoE fused EP-MoE integration (mega_moe... | @JiaoliangYu | draft | 2026-07-22 | 2026-07-22 |
| [#1528](https://github.com/ROCm/ATOM/pull/1528) | di ci: glm-5-2 1p 1d && 2p1d | @JiaoliangYu | draft | 2026-07-09 | 2026-07-22 |
| [#1610](https://github.com/ROCm/ATOM/pull/1610) | expert map fix | @amirumoAMD | open | 2026-07-15 | 2026-07-21 |
| [#1618](https://github.com/ROCm/ATOM/pull/1618) | [atom-vllm] Attention CP for DSA models | @whx-sjtu | draft | 2026-07-16 | 2026-07-21 |
| [#1641](https://github.com/ROCm/ATOM/pull/1641) | enable DCP | @gbyu-amd | draft | 2026-07-20 | 2026-07-20 |
| [#1337](https://github.com/ROCm/ATOM/pull/1337) | [gfx1151] Online INT8 W8A8 for Qwen3.6 27B / 35B-A3B on RDNA... | @carlushuang | open | 2026-06-24 | 2026-07-20 |
| [#1314](https://github.com/ROCm/ATOM/pull/1314) | [gfx1151] Qwen3.5/3.6 (GDN hybrid) BF16 on RDNA3.5 via nativ... | @carlushuang | open | 2026-06-22 | 2026-07-20 |
| [#1499](https://github.com/ROCm/ATOM/pull/1499) | [KVConnector] native scale-up KV connector (HIP VMM, kv_conn... | @carlushuang | open | 2026-07-07 | 2026-07-19 |
| [#1570](https://github.com/ROCm/ATOM/pull/1570) | wire GUGU - act+quant fusion into triton decode  | @Boss2002n | open | 2026-07-12 | 2026-07-18 |
| [#1623](https://github.com/ROCm/ATOM/pull/1623) | [CI] add agentic MiniMax-M3 PD+LMCache test case | @Phi-C | draft | 2026-07-17 | 2026-07-17 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-07-15 |
| [#1584](https://github.com/ROCm/ATOM/pull/1584) | [fix] MXFP4 MoE: single-source use_triton_moe() to fix gfx94... | @zejunchen-zejun | open | 2026-07-14 | 2026-07-15 |
| [#1590](https://github.com/ROCm/ATOM/pull/1590) | Avoid cancelling heavy CI on review events | @gyohuangxin | open | 2026-07-14 | 2026-07-15 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#1579](https://github.com/ROCm/ATOM/pull/1579) | Feiw/v4/mlapr | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#1358](https://github.com/ROCm/ATOM/pull/1358) | fix(prefix-cache): bypass prefix caching for multimodal sequ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1357](https://github.com/ROCm/ATOM/pull/1357) | feat(gfx1151): custom head-dim-tiled Triton flash attention ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1369](https://github.com/ROCm/ATOM/pull/1369) | Enable TBO Support & Fix Accuracy Regressions for Kimi K2.5 | @jpy794 | open | 2026-06-26 | 2026-07-13 |
| [#1571](https://github.com/ROCm/ATOM/pull/1571) | Guanbao/fix atom mtp memory fault | @gbyu-amd | draft | 2026-07-13 | 2026-07-13 |
| [#1559](https://github.com/ROCm/ATOM/pull/1559) | fix | @gbyu-amd | draft | 2026-07-10 | 2026-07-13 |
| [#1495](https://github.com/ROCm/ATOM/pull/1495) | fix(kv): reserve prefill-activation headroom and size KV poo... | @carlushuang | draft | 2026-07-07 | 2026-07-13 |
| [#1504](https://github.com/ROCm/ATOM/pull/1504) | Enable GFX12 Preshuffle Weights | @amirumoAMD | draft | 2026-07-07 | 2026-07-13 |
| [#1448](https://github.com/ROCm/ATOM/pull/1448) | [1/3]refactor mesh worker registry into layered pools | @Yuechguo | draft | 2026-07-03 | 2026-07-13 |
| [#1455](https://github.com/ROCm/ATOM/pull/1455) | fix: all greedy && set seed | @JiaoliangYu | draft | 2026-07-03 | 2026-07-13 |
| [#1456](https://github.com/ROCm/ATOM/pull/1456) | add trace breakdown skill | @zhuyuhua-v | draft | 2026-07-03 | 2026-07-13 |
| [#1468](https://github.com/ROCm/ATOM/pull/1468) | debug: run15 cu_seqlens_q stale probe (3-state dump + guard) | @JiaoliangYu | draft | 2026-07-05 | 2026-07-13 |
| [#168](https://github.com/ROCm/ATOM/pull/168) | [POC][Deepseek] Engram support, model_runner hash compute ov... | @ZhangLirong-amd | draft | 2026-01-28 | 2026-07-13 |
| [#225](https://github.com/ROCm/ATOM/pull/225) | Add FlyDSL MOE backend and Triton fallback for FP8 MoE | @sunway513 | draft | 2026-02-20 | 2026-07-13 |
| [#226](https://github.com/ROCm/ATOM/pull/226) | Enable Triton MOE for MXFP4 on gfx950 (MI355X) | @sunway513 | draft | 2026-02-20 | 2026-07-13 |
| [#342](https://github.com/ROCm/ATOM/pull/342) | refactor: unify RMSNorm fusion with DualRMSNorm + master swi... | @valarLip | draft | 2026-03-16 | 2026-07-13 |
| [#385](https://github.com/ROCm/ATOM/pull/385) |  adapt triton moe | @HaonanWang98 | draft | 2026-03-23 | 2026-07-13 |
| [#402](https://github.com/ROCm/ATOM/pull/402) | [Fix](docker): fix transformers version for atom-vllm | @PerryZhang01 | draft | 2026-03-25 | 2026-07-13 |
| [#427](https://github.com/ROCm/ATOM/pull/427) | [feat](a8w4): support a8w4 gpt oss | @PerryZhang01 | draft | 2026-03-27 | 2026-07-13 |
| [#486](https://github.com/ROCm/ATOM/pull/486) | Add TurboQuant: 5x KV cache compression for inference | @powderluv | draft | 2026-04-05 | 2026-07-13 |
| [#539](https://github.com/ROCm/ATOM/pull/539) | [Draft] Add vllm-omni plugin for Diffusion models Qwen Image... | @tjtanaavllm | draft | 2026-04-10 | 2026-07-13 |
| [#627](https://github.com/ROCm/ATOM/pull/627) | Gemma16w16 integration | @amirumoAMD | draft | 2026-04-21 | 2026-07-13 |
| [#644](https://github.com/ROCm/ATOM/pull/644) | [vLLM-ATOM] Add profile trace parsing tool for vLLM-ATOM | @kliuae-amd | draft | 2026-04-24 | 2026-07-13 |
| [#779](https://github.com/ROCm/ATOM/pull/779) | [codex] DeepSeek FP4 MTP decode safeguards and MLA hooks | @josusanmartin | draft | 2026-05-13 | 2026-07-13 |
| [#918](https://github.com/ROCm/ATOM/pull/918) | remove ssm index copy | @ganyi1996ppo | draft | 2026-05-26 | 2026-07-13 |
| [#960](https://github.com/ROCm/ATOM/pull/960) | deepseek v4 fp8_einsum enable | @ganyi1996ppo | draft | 2026-05-28 | 2026-07-13 |
| [#969](https://github.com/ROCm/ATOM/pull/969) | 455 test yadai dump | @yadaish | draft | 2026-05-28 | 2026-07-13 |
| [#985](https://github.com/ROCm/ATOM/pull/985) | ci(sglang): add Kimi-K2 e2e accuracy + perf regression | @sunway513 | draft | 2026-05-30 | 2026-07-13 |
| [#1007](https://github.com/ROCm/ATOM/pull/1007) | Gfx1250 bringup moe | @yadaish | draft | 2026-06-01 | 2026-07-13 |
| [#1045](https://github.com/ROCm/ATOM/pull/1045) | gpt-oss WAs + triton moe a8w4 support | @ahmed-bsod | draft | 2026-06-03 | 2026-07-13 |
| [#1242](https://github.com/ROCm/ATOM/pull/1242) | pa draft | @vgokhale | draft | 2026-06-17 | 2026-07-13 |
| [#1351](https://github.com/ROCm/ATOM/pull/1351) | [fix](qwen): fix qwen3.5-35b accuracy | @PerryZhang01 | draft | 2026-06-25 | 2026-07-13 |
| [#1490](https://github.com/ROCm/ATOM/pull/1490) | feat(prezero): wire split-K GEMM prezero into Kimi MLA/MoE d... | @ColorsWind | open | 2026-07-06 | 2026-07-13 |
| [#1412](https://github.com/ROCm/ATOM/pull/1412) | fix(rtpllm): adapt to RTP-LLM PyAttentionInputs host/device ... | @Jonathan-hwx | open | 2026-06-30 | 2026-07-13 |
| [#1402](https://github.com/ROCm/ATOM/pull/1402) | test: add block-level GPT-OSS attention test (real OAIAttent... | @carlushuang | open | 2026-06-29 | 2026-07-13 |
| [#1550](https://github.com/ROCm/ATOM/pull/1550) | fix gfx950 only | @feifei14119 | open | 2026-07-10 | 2026-07-13 |
| [#1103](https://github.com/ROCm/ATOM/pull/1103) | [vLLM-ATOM] Enable DBO for vLLM plugin | @kliuae | open | 2026-06-05 | 2026-07-08 |
| [#1488](https://github.com/ROCm/ATOM/pull/1488) | fix(moe): auto-degrade FP8 block_n/k from 128 to 64 on align... | @haowu1234 | open | 2026-07-06 | 2026-07-07 |
| [#1479](https://github.com/ROCm/ATOM/pull/1479) | feat(quant): implement fp4_act_quant Triton kernel for DeepS... | @haowu1234 | open | 2026-07-06 | 2026-07-06 |
| [#1477](https://github.com/ROCm/ATOM/pull/1477) | perf(quant_v4): Triton Walsh-Hadamard rotate_activation kern... | @haowu1234 | open | 2026-07-06 | 2026-07-06 |
| [#1421](https://github.com/ROCm/ATOM/pull/1421) | feat(prezero): wire split-K GEMM prezero into MLA / MoE deco... | @ColorsWind | open | 2026-06-30 | 2026-07-05 |
| [#566](https://github.com/ROCm/ATOM/pull/566) | [Gluon] [Triton] [MI450] [MI350] Enable Unified Attention op... | @k50112113 | draft | 2026-04-14 | 2026-07-03 |
| [#578](https://github.com/ROCm/ATOM/pull/578) | [Gluon] [Triton] [MI450] [MI350] Enable Triton/Gluon MLA wit... | @k50112113 | draft | 2026-04-15 | 2026-07-03 |
| [#837](https://github.com/ROCm/ATOM/pull/837) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-07-03 |
| [#859](https://github.com/ROCm/ATOM/pull/859) | [Triton] DSV4 GEMM changed to mxfp8 GEMM | @k50112113 | draft | 2026-05-20 | 2026-07-03 |
| [#861](https://github.com/ROCm/ATOM/pull/861) | [Triton] MXFP8 GEMM and A8W4 MOE optimization for DSV4 | @k50112113 | draft | 2026-05-20 | 2026-07-03 |
| [#1431](https://github.com/ROCm/ATOM/pull/1431) | feat(openai): add tool calling support with GPT-OSS Harmony ... | @seungrokj | open | 2026-07-01 | 2026-07-01 |
| [#1427](https://github.com/ROCm/ATOM/pull/1427) | Add feature to parse Hermes <tool_call>{json}</tool_call> to... | @hyukjlee | open | 2026-07-01 | 2026-07-01 |
| [#1399](https://github.com/ROCm/ATOM/pull/1399) | ci: add HIP debug probes for DO runner | @gyohuangxin | open | 2026-06-29 | 2026-06-30 |
| [#1387](https://github.com/ROCm/ATOM/pull/1387) | [plugin][script][recipe] update env vars for kimi and minima... | @gbyu-amd | open | 2026-06-28 | 2026-06-30 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-09-10 |
| [#1300](https://github.com/ROCm/ATOM/pull/1300) | fix(minimax): restore qkv<=256 shape guard + harden compile-... | @sunway513 | open | 2026-06-20 | 2026-06-29 |
| [#841](https://github.com/ROCm/ATOM/pull/841) | [feat](pad): remove pad kernel in gpt-oss | @PerryZhang01 | open | 2026-05-20 | 2026-06-26 |
| [#613](https://github.com/ROCm/ATOM/pull/613) | [feat](minimax): refactor rmsnorm for minimax | @PerryZhang01 | open | 2026-04-20 | 2026-06-26 |
| [#1212](https://github.com/ROCm/ATOM/pull/1212) | [gfx1250]bringup moe | @lalala-sh | open | 2026-06-15 | 2026-06-26 |
| [#1067](https://github.com/ROCm/ATOM/pull/1067) | gpt-oss WAs + moe a8w4 gemm support | @ahmed-bsod | open | 2026-06-04 | 2026-06-26 |
| [#749](https://github.com/ROCm/ATOM/pull/749) | Add Mistral-3-8B + Qwen3-8B-FP8 + native triton attention ba... | @carlushuang | open | 2026-05-11 | 2026-06-26 |
| [#522](https://github.com/ROCm/ATOM/pull/522) | feat(autotuner): autonomous kernel and inference configurati... | @ChuanLi1101 | open | 2026-04-08 | 2026-06-26 |
| [#786](https://github.com/ROCm/ATOM/pull/786) | Add DSR1-MXFP4 recipe for MI355X (Team Jons contest submissi... | @j0ons | open | 2026-05-14 | 2026-06-26 |
| [#465](https://github.com/ROCm/ATOM/pull/465) | [fix](attn): fix the value cache layout | @PerryZhang01 | open | 2026-04-01 | 2026-06-26 |
| [#279](https://github.com/ROCm/ATOM/pull/279) | Add CK-free fallback for fused QKNorm+RoPE+Cache | @sunway513 | open | 2026-03-09 | 2026-06-26 |
| [#1310](https://github.com/ROCm/ATOM/pull/1310) | [fea](qwen): support model runner v2 on qwen-next (#1249) | @PerryZhang01 | open | 2026-06-22 | 2026-06-26 |
| [#1230](https://github.com/ROCm/ATOM/pull/1230) | Keep MiniMax-M3 FP4 support native-only | @wuhuikx | open | 2026-06-16 | 2026-06-26 |
| [#1193](https://github.com/ROCm/ATOM/pull/1193) | feat(sglang-plugin): enable true TP=8 for Kimi-K2.5 | @carlushuang | open | 2026-06-12 | 2026-06-26 |
| [#1176](https://github.com/ROCm/ATOM/pull/1176) | remove unnecessary fp8 scale for vllm plugin | @ganyi1996ppo | open | 2026-06-11 | 2026-06-26 |
| [#816](https://github.com/ROCm/ATOM/pull/816) | feat: apply lm_head LoRA dynamically | @san-tian | open | 2026-05-17 | 2026-06-26 |
| [#656](https://github.com/ROCm/ATOM/pull/656) | prefill gdr kernel enablement | @ganyi1996ppo | open | 2026-04-28 | 2026-06-26 |
| [#1233](https://github.com/ROCm/ATOM/pull/1233) | feat(moe): gfx1250 a8w4 use new N32K4 weight-scale layout | @yadaish | open | 2026-06-16 | 2026-06-26 |
| [#1137](https://github.com/ROCm/ATOM/pull/1137) | benchmarks: standalone model-loading (safetensors) speed ben... | @carlushuang | open | 2026-06-09 | 2026-06-26 |
| [#810](https://github.com/ROCm/ATOM/pull/810) | Add Responses API streaming support | @san-tian | open | 2026-05-16 | 2026-06-26 |
| [#789](https://github.com/ROCm/ATOM/pull/789) | fix(openai): harden chat request handling | @san-tian | open | 2026-05-14 | 2026-06-26 |
| [#778](https://github.com/ROCm/ATOM/pull/778) | feat(server): add Anthropic Messages API endpoint (/v1/messa... | @carlushuang | open | 2026-05-13 | 2026-06-26 |
| [#715](https://github.com/ROCm/ATOM/pull/715) | docs: deploy compressor page with docs workflow | @gyohuangxin | open | 2026-05-07 | 2026-06-26 |
| [#607](https://github.com/ROCm/ATOM/pull/607) | [feat](ai): add accuracy debug skill for nightly test | @PerryZhang01 | open | 2026-04-19 | 2026-06-26 |
| [#554](https://github.com/ROCm/ATOM/pull/554) | CI: make ATOM test workflow reusable | @gyohuangxin | open | 2026-04-14 | 2026-06-26 |
| [#478](https://github.com/ROCm/ATOM/pull/478) | feat: add vLLM benchmark workflow and dashboard | @ChuanLi1101 | open | 2026-04-02 | 2026-06-26 |
| [#278](https://github.com/ROCm/ATOM/pull/278) | docker: add clean build and wheel-based install Dockerfiles | @sunway513 | open | 2026-03-08 | 2026-06-26 |
| [#1277](https://github.com/ROCm/ATOM/pull/1277) | Add mxfp8 x mxfp4 Triton MoE for DSv4 | @azaidy | open | 2026-06-18 | 2026-06-18 |
| [#1091](https://github.com/ROCm/ATOM/pull/1091) | EP+pad support for   Step-3.5-Flash-FP8 | @LJ-underdog | open | 2026-06-05 | 2026-06-15 |
| [#916](https://github.com/ROCm/ATOM/pull/916) | fix(plugin): size MTP decode scratch by token capacity | @san-tian | open | 2026-05-25 | 2026-05-26 |
| [#792](https://github.com/ROCm/ATOM/pull/792) | [Plugin][MLA] Tolerate rotary_emb=None for NoPE-only MLA mod... | @ChuanLi1101 | open | 2026-05-14 | 2026-05-23 |
| [#794](https://github.com/ROCm/ATOM/pull/794) | [WIP] MQA Logits Gluon Path Activation and New Flag | @cagrikymk | open | 2026-05-15 | 2026-05-20 |
| [#606](https://github.com/ROCm/ATOM/pull/606) | [plugin] Flux2 model support | @Phi-C | open | 2026-04-19 | 2026-05-20 |
| [#599](https://github.com/ROCm/ATOM/pull/599) | Create issue template for general questions and requests | @amd-mwu10004 | open | 2026-04-17 | 2026-04-17 |
| [#541](https://github.com/ROCm/ATOM/pull/541) | Update the naming of vLLM-ATOM path  | @wuhuikx | open | 2026-04-10 | 2026-04-17 |
| [#518](https://github.com/ROCm/ATOM/pull/518) | add triton fallback for mi455 gptoss & dsfp4 | @HaonanWang98 | open | 2026-04-08 | 2026-04-15 |
| [#487](https://github.com/ROCm/ATOM/pull/487) | GPT-OSS-120B MI355X: Performance experiment infra + Pareto o... | @ChuanLi1101 | open | 2026-04-05 | 2026-04-14 |
| [#473](https://github.com/ROCm/ATOM/pull/473) | EP infrastructure and decode buffer pooling for GPT-OSS-120B | @ChuanLi1101 | open | 2026-04-02 | 2026-04-07 |
| [#250](https://github.com/ROCm/ATOM/pull/250) | Fix block allocation for multi-token decode (speculative dec... | @brucechanglongxu | open | 2026-03-01 | 2026-03-16 |
| [#218](https://github.com/ROCm/ATOM/pull/218) | Enable AllReduce+RMSNorm fusion for GPT-OSS model | @ChuanLi1101 | open | 2026-02-15 | 2026-03-16 |
| [#170](https://github.com/ROCm/ATOM/pull/170) | Add Flux diffusion model support | @ChuanLi1101 | open | 2026-01-29 | 2026-03-16 |
| [#156](https://github.com/ROCm/ATOM/pull/156) | Adding prefill decode markers to trace and enable shapes | @msiddaiah | open | 2026-01-20 | 2026-03-16 |
| [#148](https://github.com/ROCm/ATOM/pull/148) | feat: Add fused attention output + RMSNorm support for GPT-O... | @ChuanLi1101 | open | 2026-01-17 | 2026-03-16 |
| [#146](https://github.com/ROCm/ATOM/pull/146) | kv and output scale loading bug -- FIX | @amirumoAMD | open | 2026-01-16 | 2026-03-16 |
| [#50](https://github.com/ROCm/ATOM/pull/50) | feat: add skip_tokenizer option for pre-tokenized input | @ChuanLi1101 | open | 2025-12-14 | 2026-03-16 |
| [#32](https://github.com/ROCm/ATOM/pull/32) | Add unit tests for SamplingParams and CompilationConfig | @ChuanLi1101 | open | 2025-12-09 | 2026-03-16 |
| [#2454](https://github.com/ROCm/ATOM/pull/2454) | perf(offload): take lmcache_mp tier lookups off the DPA sche... | @yhl-amd | merged | 2026-10-02 | 2026-10-03 |
| [#2438](https://github.com/ROCm/ATOM/pull/2438) | build(docker): pin LMCache 0.5.6.dev139+gf22dec28.rocm7.2.4.... | @github-actions[bot] | merged | 2026-09-30 | 2026-09-30 |
| [#2389](https://github.com/ROCm/ATOM/pull/2389) | ci(mesh): use --spec-decode-acceptance-length for GLM-5.2 ag... | @Jasen2201 | merged | 2026-09-24 | 2026-09-30 |
| [#2434](https://github.com/ROCm/ATOM/pull/2434) | feat(offload): lmcache_mp fixes and DSv4.1 / Kimi-K3 / GLM F... | @yhl-amd | merged | 2026-09-30 | 2026-09-30 |
| [#2402](https://github.com/ROCm/ATOM/pull/2402) | fix(ci): validate all LMCache Dockerfile pins before writing | @kvnloo | merged | 2026-09-25 | 2026-09-30 |
| [#2427](https://github.com/ROCm/ATOM/pull/2427) | fix(sglang): keep ATOM's attention backend for Qwen4Exp QSA ... | @zovonoir | merged | 2026-09-29 | 2026-09-30 |
| [#2367](https://github.com/ROCm/ATOM/pull/2367) | fix(mtp): install the draft work plan when warming draft gra... | @Jasen2201 | merged | 2026-09-23 | 2026-09-29 |
| [#2422](https://github.com/ROCm/ATOM/pull/2422) | fix(minimax-m3): decide a mono request's long context in one... | @valarLip | merged | 2026-09-29 | 2026-09-29 |
| [#2345](https://github.com/ROCm/ATOM/pull/2345) | (agentic) update glm5.2 recipe for agentX | @zhuyuhua-v | merged | 2026-09-22 | 2026-09-29 |
| [#2350](https://github.com/ROCm/ATOM/pull/2350) | feat(mesh): add Envoy ext-proc inference ingress | @Yuechguo | merged | 2026-09-22 | 2026-09-28 |
| [#2419](https://github.com/ROCm/ATOM/pull/2419) | feat: MiniMax-M3 mono decode with 1M context and indexer CP;... | @valarLip | merged | 2026-09-28 | 2026-09-28 |
| [#2250](https://github.com/ROCm/ATOM/pull/2250) | feat(offload): support native DSv4 checkpoints with LMCache ... | @yhl-amd | merged | 2026-09-16 | 2026-09-28 |
| [#2280](https://github.com/ROCm/ATOM/pull/2280) | [sgl+atom] Upgrade SGLang to v0.5.20 | @zhangxinyuanliuhengyu | merged | 2026-09-18 | 2026-09-28 |
| [#2254](https://github.com/ROCm/ATOM/pull/2254) | [CI] Align GLM-5.2 PD small-concurrency configs with pd mix ... | @MengqingCao | merged | 2026-09-16 | 2026-09-28 |
| [#2414](https://github.com/ROCm/ATOM/pull/2414) | feat(offload): enable LMCache offload via ATOM_KV_OFFLOAD en... | @yhl-amd | merged | 2026-09-27 | 2026-09-28 |
| [#2417](https://github.com/ROCm/ATOM/pull/2417) | fix(ci-mesh): K3 AgentX cells — FP8 prefill attention and ca... | @gbyu-amd | merged | 2026-09-28 | 2026-09-28 |
| [#2385](https://github.com/ROCm/ATOM/pull/2385) | [SGL ATOM] enable qwen3.8-flash mtp in sgl atom | @ZLkanyo009 | merged | 2026-09-24 | 2026-09-28 |
| [#2339](https://github.com/ROCm/ATOM/pull/2339) | fix(offload): fence dense LMCache saves | @NidhoggD1 | merged | 2026-09-21 | 2026-09-25 |
| [#2400](https://github.com/ROCm/ATOM/pull/2400) | fix: prevent agentic FP8 tail faults and capture AITER wheel... | @valarLip | merged | 2026-09-25 | 2026-09-25 |
| [#2399](https://github.com/ROCm/ATOM/pull/2399) | perf: unify metadata publication and reuse page tables and T... | @valarLip | merged | 2026-09-25 | 2026-09-25 |
| [#2398](https://github.com/ROCm/ATOM/pull/2398) | perf(loader): prefetch under disable_mmap, one-copy reads, m... | @valarLip | merged | 2026-09-25 | 2026-09-25 |
| [#2395](https://github.com/ROCm/ATOM/pull/2395) | ci(lmcache): ship LMCache wheels as Docker Hub images, not G... | @yhl-amd | merged | 2026-09-24 | 2026-09-24 |
| [#2396](https://github.com/ROCm/ATOM/pull/2396) | feat(benchmarks): select an optional AITER wheel for manual ... | @valarLip | merged | 2026-09-24 | 2026-09-24 |
| [#2392](https://github.com/ROCm/ATOM/pull/2392) | perf(v41): bound candidate block maxima by each row's contex... | @valarLip | merged | 2026-09-24 | 2026-09-24 |
| [#2387](https://github.com/ROCm/ATOM/pull/2387) | feat(benchmarks): capture CI artifacts and schedule agentic ... | @valarLip | merged | 2026-09-24 | 2026-09-24 |
| [#2292](https://github.com/ROCm/ATOM/pull/2292) | [feat] Supports loading Quark NVFP4 and online quantization ... | @haoyangli0109 | merged | 2026-09-18 | 2026-09-24 |
| [#2388](https://github.com/ROCm/ATOM/pull/2388) | ci: build LMCache ROCm torch 2.10 wheels from any commit | @yhl-amd | merged | 2026-09-24 | 2026-09-24 |
| [#2228](https://github.com/ROCm/ATOM/pull/2228) | feat(moe): reach MoRI's low-latency kernels through the all2... | @JiaoliangYu | merged | 2026-09-14 | 2026-09-24 |
| [#2383](https://github.com/ROCm/ATOM/pull/2383) | [Performance] Send forward block tables as appends, not whol... | @yhl-amd | merged | 2026-09-24 | 2026-09-24 |
| [#2382](https://github.com/ROCm/ATOM/pull/2382) | (recipe) Kimi-K3 AgentX: FP8 prefill attention, PrefillDelay... | @gbyu-amd | merged | 2026-09-24 | 2026-09-24 |
| [#2346](https://github.com/ROCm/ATOM/pull/2346) | ci: add weekly V4 no-offload benchmarks and manual GSM8K eva... | @ZhangLirong-amd | merged | 2026-09-22 | 2026-09-24 |
| [#2348](https://github.com/ROCm/ATOM/pull/2348) | fp4 indexer: build the DCP prefill staging indices once per ... | @ZhiweiYan-96 | merged | 2026-09-22 | 2026-09-24 |
| [#2378](https://github.com/ROCm/ATOM/pull/2378) | fix(mla): pass merge_attn_states' prefill_tokens_with_contex... | @gbyu-amd | merged | 2026-09-23 | 2026-09-24 |
| [#2290](https://github.com/ROCm/ATOM/pull/2290) | [DCP] Allow query replication (QREP) with MTP | @yitingw1 | merged | 2026-09-18 | 2026-09-24 |
| [#2377](https://github.com/ROCm/ATOM/pull/2377) | perf(v41): page the index plane at the candidate block lengt... | @valarLip | merged | 2026-09-23 | 2026-09-24 |
| [#2372](https://github.com/ROCm/ATOM/pull/2372) | ci: check container model mount in atom test | @gyohuangxin | merged | 2026-09-23 | 2026-09-23 |
| [#2305](https://github.com/ROCm/ATOM/pull/2305) | fix(offload): memoize the external-tier lookup per HBM front... | @PerryZhang01 | merged | 2026-09-20 | 2026-09-23 |
| [#2347](https://github.com/ROCm/ATOM/pull/2347) | feat(moe): prefill-only mega combine wire | @yanboshao | merged | 2026-09-22 | 2026-09-23 |
| [#2331](https://github.com/ROCm/ATOM/pull/2331) | [ATOM][PD]: Transfer prefill prompt token ids to decode | @MengqingCao | merged | 2026-09-21 | 2026-09-23 |
| [#2366](https://github.com/ROCm/ATOM/pull/2366) | [MiniMax-M3] Route the paged decode to aiter's FlyDSL kernel... | @yitingw1 | merged | 2026-09-23 | 2026-09-23 |
| [#2373](https://github.com/ROCm/ATOM/pull/2373) | feat(v41): enable TP2 DSpark and add AgentX recipe | @ZhangLirong-amd | merged | 2026-09-23 | 2026-09-23 |
| [#2131](https://github.com/ROCm/ATOM/pull/2131) | (recipe) add Kimi-K3 AgentX recipe | @qichu-yun | merged | 2026-09-03 | 2026-09-23 |
| [#2368](https://github.com/ROCm/ATOM/pull/2368) | perf(decode): fold the graph's padded tail into the deferred... | @valarLip | merged | 2026-09-23 | 2026-09-23 |
| [#2268](https://github.com/ROCm/ATOM/pull/2268) | Add Kimi-K3 (hybrid) LMCache KV offload to the vLLM plugin p... | @PerryZhang01 | merged | 2026-09-17 | 2026-09-23 |
| [#2334](https://github.com/ROCm/ATOM/pull/2334) | feat: integrate gfx1250 FP4 MQA indexer | @junhaha666 | merged | 2026-09-21 | 2026-09-23 |
| [#2356](https://github.com/ROCm/ATOM/pull/2356) | fix(linear): decide the native group32 path per layer, not p... | @valarLip | merged | 2026-09-22 | 2026-09-22 |
| [#2238](https://github.com/ROCm/ATOM/pull/2238) | perf(scheduler): coalesce prefills on TP | @whx-sjtu | merged | 2026-09-15 | 2026-09-22 |
| [#2352](https://github.com/ROCm/ATOM/pull/2352) | DeepSeek-V4.1-Flash: decode-path launch budget, native FP8 d... | @valarLip | merged | 2026-09-22 | 2026-09-22 |
| [#2351](https://github.com/ROCm/ATOM/pull/2351) | fix(atomesh): track streaming P/D load during dispatch | @ZhangLirong-amd | merged | 2026-09-22 | 2026-09-22 |
| [#2326](https://github.com/ROCm/ATOM/pull/2326) | fix(test): relax tolerance for adaptive kv_splits reduction ... | @mengfei-jiang | merged | 2026-09-21 | 2026-09-22 |
| [#2160](https://github.com/ROCm/ATOM/pull/2160) | [ATOM Plugin CI] Fix the K3 DSpark MLA head-width, its break... | @PerryZhang01 | merged | 2026-09-08 | 2026-09-22 |
| [#2304](https://github.com/ROCm/ATOM/pull/2304) | fix(release): model cache, dist/ ownership, stale release re... | @zufayu | merged | 2026-09-20 | 2026-09-22 |
| [#2343](https://github.com/ROCm/ATOM/pull/2343) | [CI] Use RDMA for GLM benchmarks and allow NUMA placement fo... | @Jasen2201 | merged | 2026-09-22 | 2026-09-22 |
| [#2342](https://github.com/ROCm/ATOM/pull/2342) | (fix)fix ruff PLW1510 and black formatting in test_atomesh_l... | @zhuyuhua-v | merged | 2026-09-22 | 2026-09-22 |
| [#2167](https://github.com/ROCm/ATOM/pull/2167) |  [fix][KV Transfer] Separate completion reporting from sourc... | @Jasen2201 | merged | 2026-09-08 | 2026-09-22 |
| [#2338](https://github.com/ROCm/ATOM/pull/2338) | fix(ci): restore bounded ATOMesh log streaming on all Spur r... | @junyyang-amd | merged | 2026-09-21 | 2026-09-22 |
| [#2336](https://github.com/ROCm/ATOM/pull/2336) | fix(moe): use AITER default padding for direct MXFP4 calls | @ZhangLirong-amd | merged | 2026-09-21 | 2026-09-21 |
| [#2291](https://github.com/ROCm/ATOM/pull/2291) | GLM-5.3 on the LMCache byte-offload connector: record it, me... | @PerryZhang01 | merged | 2026-09-18 | 2026-09-21 |
| [#2191](https://github.com/ROCm/ATOM/pull/2191) | [MLA] Add FlyDSL FP8 prefill attention | @gbyu-amd | merged | 2026-09-10 | 2026-09-21 |
| [#2314](https://github.com/ROCm/ATOM/pull/2314) | feat(deepseek-v41): native DeepSeek-V4.1-Flash — text, visio... | @valarLip | merged | 2026-09-20 | 2026-09-21 |
| [#2321](https://github.com/ROCm/ATOM/pull/2321) | [Sgl Atom][fix] bind Qwen4 GDN FlyDSL and use live seq_lens ... | @ZLkanyo009 | merged | 2026-09-21 | 2026-09-21 |
| [#2310](https://github.com/ROCm/ATOM/pull/2310) | CI: Prefer PITT /models cache for benchmark containers | @gyohuangxin | merged | 2026-09-20 | 2026-09-21 |
| [#2324](https://github.com/ROCm/ATOM/pull/2324) | ci(sglang): drop MI308 GLM-5.2 and Qwen3-32B | @zhangxinyuanliuhengyu | merged | 2026-09-21 | 2026-09-21 |
| [#2319](https://github.com/ROCm/ATOM/pull/2319) | CI: Add Crusoe shared NFS model cache fallback | @gyohuangxin | merged | 2026-09-21 | 2026-09-21 |
| [#2320](https://github.com/ROCm/ATOM/pull/2320) | feat(moe): route MoRI low-latency transport through all2all ... | @JiaoliangYu | merged | 2026-09-21 | 2026-09-21 |
| [#2048](https://github.com/ROCm/ATOM/pull/2048) | Support Qwen3.8 Flash Next | @HaonanWang98 | merged | 2026-08-27 | 2026-09-21 |
| [#1910](https://github.com/ROCm/ATOM/pull/1910) | feat(k3): Kimi-K3 vLLM plugin vision + DSpark draft support | @sajandhy | merged | 2026-08-16 | 2026-09-20 |
| [#2300](https://github.com/ROCm/ATOM/pull/2300) | docker: pin ordering-edge HIP/HSA in native and nightly rele... | @ZhangLirong-amd | merged | 2026-09-20 | 2026-09-20 |
| [#2315](https://github.com/ROCm/ATOM/pull/2315) | Revert "feat(kimi-k3): support P/D disaggregation (#2154)" | @ZhangLirong-amd | merged | 2026-09-20 | 2026-09-20 |
| [#2303](https://github.com/ROCm/ATOM/pull/2303) | CI: Allow per-model accuracy timeouts | @gyohuangxin | merged | 2026-09-20 | 2026-09-20 |
| [#2267](https://github.com/ROCm/ATOM/pull/2267) | [fix][model_engine][rollout]: blank a capture's cache write ... | @xysheng-AMD | merged | 2026-09-17 | 2026-09-20 |
| [#2311](https://github.com/ROCm/ATOM/pull/2311) | perf(qsa): optimize _qsa_sparse_paged_gqa_kernel for MI308X | @mengfei-jiang | merged | 2026-09-20 | 2026-09-20 |
| [#2277](https://github.com/ROCm/ATOM/pull/2277) | docs: update DeepSeek-V4 agentic PD recipe | @ZhangLirong-amd | merged | 2026-09-18 | 2026-09-20 |
| [#2302](https://github.com/ROCm/ATOM/pull/2302) | fix(atomesh): resolve LMCache disk paths under job logs | @junyyang-amd | merged | 2026-09-20 | 2026-09-20 |
| [#2284](https://github.com/ROCm/ATOM/pull/2284) | MiniMax-M3 on the vLLM plugin backend with LMCache offload: ... | @PerryZhang01 | merged | 2026-09-18 | 2026-09-20 |
| [#2270](https://github.com/ROCm/ATOM/pull/2270) | [ATOMesh] Fix Spur scheduling, network setup, and benchmark ... | @junyyang-amd | merged | 2026-09-17 | 2026-09-20 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-10-03T12:48:51Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#674](https://github.com/ROCm/mori/pull/674) | Add multi-NIC OFI/libfabric backend for Slingshot/CXI | @vinaynkaranth | open | 2026-09-15 | 2026-10-02 |
| [#623](https://github.com/ROCm/mori/pull/623) | SDMA HIP device management fixes | @pemeliya | open | 2026-08-31 | 2026-10-01 |
| [#716](https://github.com/ROCm/mori/pull/716) | Report peer failures instead of always claiming peers are al... | @amd-wsung102 | open | 2026-09-28 | 2026-10-01 |
| [#670](https://github.com/ROCm/mori/pull/670) | Feat/io rdma retry tunables | @amirakb89 | open | 2026-09-14 | 2026-09-30 |
| [#712](https://github.com/ROCm/mori/pull/712) | feat(ep): add opt-in gfx1201 EP2/EP4 support | @dongdongzhao1121 | open | 2026-09-28 | 2026-09-30 |
| [#718](https://github.com/ROCm/mori/pull/718) | perf(umbp): prefault unbound DRAM tiers in parallel across N... | @isytwu | open | 2026-09-30 | 2026-09-30 |
| [#717](https://github.com/ROCm/mori/pull/717) | perf(umbp): keep large restore fragments on the gather kerne... | @isytwu | open | 2026-09-30 | 2026-09-30 |
| [#696](https://github.com/ROCm/mori/pull/696) | opt v2 internode | @QizhouZhang97 | open | 2026-09-22 | 2026-09-30 |
| [#675](https://github.com/ROCm/mori/pull/675) | fix(ep/intranode training): restore replay-mode payload disp... | @sudhu2k | open | 2026-09-16 | 2026-09-29 |
| [#703](https://github.com/ROCm/mori/pull/703) | refactor(EPv2): replace per-module __device__ staging with s... | @kawhil-amd | open | 2026-09-23 | 2026-09-28 |
| [#678](https://github.com/ROCm/mori/pull/678) | fix(umbp): arm every standalone-process data-plane RPC with ... | @isytwu | open | 2026-09-16 | 2026-09-28 |
| [#711](https://github.com/ROCm/mori/pull/711) | fix(cco): two SDMA device-post deadlocks (multi-queue publis... | @yoqiu-amd | open | 2026-09-24 | 2026-09-27 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#698](https://github.com/ROCm/mori/pull/698) | feat(ep): support precompiled active QP subsets | @jhchouuu | open | 2026-09-22 | 2026-09-24 |
| [#700](https://github.com/ROCm/mori/pull/700) | fix(umbp): stop standalone client_mu_ serializing the whole ... | @isytwu | draft | 2026-09-23 | 2026-09-23 |
| [#695](https://github.com/ROCm/mori/pull/695) | gemm_a2a: fuse a column-sharded all-to-all into the fp8 GEMM... | @yangyuhuiling | draft | 2026-09-22 | 2026-09-22 |
| [#692](https://github.com/ROCm/mori/pull/692) | feat(umbp): make the heartbeat interval changeable at runtim... | @isytwu | draft | 2026-09-21 | 2026-09-21 |
| [#685](https://github.com/ROCm/mori/pull/685) | ci(cco): stop the SDMA queue reclamation race from failing C... | @yangyuhuiling | open | 2026-09-17 | 2026-09-18 |
| [#683](https://github.com/ROCm/mori/pull/683) | feat(umbp): serve metrics from a masterless node, and summar... | @TianDi101 | open | 2026-09-17 | 2026-09-17 |
| [#682](https://github.com/ROCm/mori/pull/682) | [RDMA][ionic] Strip REMOTE_ATOMIC MR flag + restore HIP devi... | @raviguptaamd | open | 2026-09-17 | 2026-09-17 |
| [#681](https://github.com/ROCm/mori/pull/681) | Proof-of-idea adaptive MORI and Kiwi EP backend selection | @JiakunYan | draft | 2026-09-16 | 2026-09-17 |
| [#671](https://github.com/ROCm/mori/pull/671) | Include github_agpl_crawler.py in __init__.py | @WLloverSZ | draft | 2026-09-15 | 2026-09-15 |
| [#664](https://github.com/ROCm/mori/pull/664) | perf(EPv2): add validated MI308X/Thor2 MoE tuning profiles | @jhchouuu | open | 2026-09-12 | 2026-09-12 |
| [#657](https://github.com/ROCm/mori/pull/657) | new collective development for JAX/XLA | @i-chaochen | open | 2026-09-10 | 2026-09-12 |
| [#659](https://github.com/ROCm/mori/pull/659) | test(EPv2): make the routing independent of the sweep list, ... | @jhchouuu | open | 2026-09-11 | 2026-09-11 |
| [#649](https://github.com/ROCm/mori/pull/649) | register Ionic CQ/SQ/RQ rings and atomic ibuf via dmabuf | @amirakb89 | draft | 2026-09-08 | 2026-09-09 |
| [#632](https://github.com/ROCm/mori/pull/632) | fix(cco): take allocMutex on the window paths, as its commen... | @jhchouuu | open | 2026-09-02 | 2026-09-02 |
| [#585](https://github.com/ROCm/mori/pull/585) | Don't merge: AI NIC perf collection | @amirakb89 | draft | 2026-08-19 | 2026-08-31 |
| [#578](https://github.com/ROCm/mori/pull/578) | feat(ep/v2): TDM dispatch transport for the flydsl backend | @XingerZhu | open | 2026-08-18 | 2026-08-31 |
| [#574](https://github.com/ROCm/mori/pull/574) | Io prepared transfers v3 | @amirakb89 | open | 2026-08-17 | 2026-08-31 |
| [#539](https://github.com/ROCm/mori/pull/539) | perf(EP): tune EPv1 MI300X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @kudomcho | open | 2026-08-11 | 2026-08-31 |
| [#533](https://github.com/ROCm/mori/pull/533) | chore(EPv2): split dispatch/combine tuning schedules into in... | @kawhil-amd | open | 2026-08-09 | 2026-08-31 |
| [#527](https://github.com/ROCm/mori/pull/527) | fix(io): detect host vs device memory in RegisterMemory inst... | @TianDi101 | open | 2026-08-05 | 2026-08-31 |
| [#525](https://github.com/ROCm/mori/pull/525) | bench: tuning config lookup overhead reproducer | @kudomcho | open | 2026-08-04 | 2026-08-31 |
| [#521](https://github.com/ROCm/mori/pull/521) | ep: allow EpDispatchCombineOp to be resized at runtime | @inkcherry | open | 2026-08-04 | 2026-08-31 |
| [#520](https://github.com/ROCm/mori/pull/520) | perf(EPv2): optimize epv2 disp/comb kernel performance | @kawhil-amd | draft | 2026-08-04 | 2026-08-31 |
| [#518](https://github.com/ROCm/mori/pull/518) | MORI-IO: CPU hot-path improvements (profile-guided) | @pemeliya | draft | 2026-08-03 | 2026-08-31 |
| [#491](https://github.com/ROCm/mori/pull/491) | fix(io): bound EventPool free-list to avoid HSA signal exhau... | @AMD-yanfeiwang | draft | 2026-07-20 | 2026-08-31 |
| [#450](https://github.com/ROCm/mori/pull/450) | a2a_gemm examples with flydsl + mori | @zjing14 | draft | 2026-07-06 | 2026-08-31 |
| [#445](https://github.com/ROCm/mori/pull/445) | feat(shmem/sdma): implement address-based device putmem_nbi_... | @zjing14 | open | 2026-07-02 | 2026-08-31 |
| [#434](https://github.com/ROCm/mori/pull/434) | Fix(io): track RDMA notification completions in transfer sta... | @amd-dlimpus | open | 2026-06-26 | 2026-08-31 |
| [#345](https://github.com/ROCm/mori/pull/345) | feat(io): add RDMA telemetry snapshot APIs | @maning00 | open | 2026-06-01 | 2026-08-31 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-08-31 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-08-31 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-08-31 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-08-31 |
| [#618](https://github.com/ROCm/mori/pull/618) | allocator: add CCO-backed LSA symmetric windows | @yangyuhuiling | draft | 2026-08-28 | 2026-08-31 |
| [#598](https://github.com/ROCm/mori/pull/598) | tune(ep/v2): give fp8 dispatch its own gfx1250 EP4 row | @jhchouuu | open | 2026-08-24 | 2026-08-31 |
| [#720](https://github.com/ROCm/mori/pull/720) | Fix/epv2 fp4 push reads input | @zhangfei829 | merged | 2026-10-01 | 2026-10-01 |
| [#719](https://github.com/ROCm/mori/pull/719) | Perf/epv2 combine push fp4 | @zhangfei829 | merged | 2026-10-01 | 2026-10-01 |
| [#621](https://github.com/ROCm/mori/pull/621) | fix(ep): correct recv-slice indexing in DispatchInterNodeRec... | @isytwu | merged | 2026-08-31 | 2026-09-30 |
| [#707](https://github.com/ROCm/mori/pull/707) | feat(umbp): add NUMA-aware DRAM placement | @maning00 | merged | 2026-09-24 | 2026-09-30 |
| [#663](https://github.com/ROCm/mori/pull/663) | fix: migrate GPU topology from rocm_smi to amd_smi (ROCm 10.... | @srinivamd | merged | 2026-09-11 | 2026-09-30 |
| [#713](https://github.com/ROCm/mori/pull/713) | fix(build): let torch pick the C++ standard for mori_torch_s... | @jeffdaily | merged | 2026-09-28 | 2026-09-30 |
| [#710](https://github.com/ROCm/mori/pull/710) | build(cco): compile the SDMA path by default | @jhchouuu | merged | 2026-09-24 | 2026-09-30 |
| [#709](https://github.com/ROCm/mori/pull/709) | fix(EPv2): use last-arrival-resets for wide-EP grid barrier | @kawhil-amd | merged | 2026-09-24 | 2026-09-24 |
| [#705](https://github.com/ROCm/mori/pull/705) | perf(ep): skip the rest of a node in DispatchInterNodeLLRecv... | @jhchouuu | merged | 2026-09-23 | 2026-09-24 |
| [#708](https://github.com/ROCm/mori/pull/708) | refactor(ep/v2): make TokOffExt public for out-of-op callers | @jhchouuu | merged | 2026-09-24 | 2026-09-24 |
| [#656](https://github.com/ROCm/mori/pull/656) | perf(umbp): remove three bottlenecks from the distributed ra... | @maning00 | merged | 2026-09-10 | 2026-09-24 |
| [#706](https://github.com/ROCm/mori/pull/706) | Perf/epv2 1250x fp4 pack and nodrain meta | @zhangfei829 | merged | 2026-09-24 | 2026-09-24 |
| [#704](https://github.com/ROCm/mori/pull/704) | fix(cco): skip window MRs on one node; pad >2 GiB allocation... | @jhchouuu | merged | 2026-09-23 | 2026-09-24 |
| [#701](https://github.com/ROCm/mori/pull/701) | fix(build): lift the setuptools<84 cap and require Cython fo... | @QizhouZhang97 | merged | 2026-09-23 | 2026-09-23 |
| [#702](https://github.com/ROCm/mori/pull/702) | perf(ep): skip redundant nodeRecvTokenNum re-reads in Dispat... | @yoqiu-amd | merged | 2026-09-23 | 2026-09-23 |
| [#693](https://github.com/ROCm/mori/pull/693) | fix(sdma): avoid fused-off odd SDMA engines on MI308X | @jhchouuu | merged | 2026-09-21 | 2026-09-22 |
| [#603](https://github.com/ROCm/mori/pull/603) | CCO SDMA micro optimizations | @pemeliya | merged | 2026-08-25 | 2026-09-22 |
| [#697](https://github.com/ROCm/mori/pull/697) | test(epv2): default per-token scales on for fp8/fp4 in bench... | @zhangfei829 | merged | 2026-09-22 | 2026-09-22 |
| [#691](https://github.com/ROCm/mori/pull/691) | gemm_ar: drop the fused epilogue's `fence` knob, which nothi... | @yangyuhuiling | merged | 2026-09-20 | 2026-09-21 |
| [#689](https://github.com/ROCm/mori/pull/689) | tune(ep/v1): add hidden_dim=7168 (DSV4) small-token InterNod... | @yoqiu-amd | merged | 2026-09-18 | 2026-09-21 |
| [#690](https://github.com/ROCm/mori/pull/690) | feat(cco): gemm_ar MXFP8 support, and the GEMM usable withou... | @yangyuhuiling | merged | 2026-09-20 | 2026-09-21 |
| [#652](https://github.com/ROCm/mori/pull/652) | feat(ccl): support HIP graph capture in AllGather SDMA | @alanshwang | merged | 2026-09-09 | 2026-09-20 |
| [#667](https://github.com/ROCm/mori/pull/667) | perf(EPv2): fix the 512-token performance on gfx1250 | @zhangfei829 | merged | 2026-09-13 | 2026-09-20 |
| [#688](https://github.com/ROCm/mori/pull/688) | docs: unbreak the -W build and correct the EP fp4 target lis... | @jhchouuu | merged | 2026-09-18 | 2026-09-18 |
| [#686](https://github.com/ROCm/mori/pull/686) | ci: move the last five jobs off the TW runner label | @QizhouZhang97 | merged | 2026-09-18 | 2026-09-18 |
| [#680](https://github.com/ROCm/mori/pull/680) | docs: refresh installation, EP backend guidance and site val... | @sunway513 | merged | 2026-09-16 | 2026-09-18 |
| [#573](https://github.com/ROCm/mori/pull/573) | Io cpp bench default | @amirakb89 | merged | 2026-08-17 | 2026-09-18 |
| [#687](https://github.com/ROCm/mori/pull/687) | Revert "perf(umbp): ask for transparent hugepages on the ano... | @maning00 | merged | 2026-09-18 | 2026-09-18 |
| [#684](https://github.com/ROCm/mori/pull/684) | ci(nightly): move the PyPI wheel smoke test off the TW runne... | @QizhouZhang97 | merged | 2026-09-17 | 2026-09-17 |
| [#677](https://github.com/ROCm/mori/pull/677) | feat(EPv2): default to HIP kernel backend on gfx125x | @kawhil-amd | merged | 2026-09-16 | 2026-09-17 |
| [#660](https://github.com/ROCm/mori/pull/660) | bench(ep): report an end-to-end dispatch+combine latency, an... | @isytwu | merged | 2026-09-11 | 2026-09-17 |
| [#662](https://github.com/ROCm/mori/pull/662) | feat(cco): Fuse DSV4-Pro wo_b's GEMM with its all-reduce ove... | @yangyuhuiling | merged | 2026-09-11 | 2026-09-17 |
| [#669](https://github.com/ROCm/mori/pull/669) | intra ci migrate | @QizhouZhang97 | merged | 2026-09-14 | 2026-09-17 |
| [#679](https://github.com/ROCm/mori/pull/679) | perf(umbp): ask for transparent hugepages on the anonymous D... | @maning00 | merged | 2026-09-16 | 2026-09-17 |
| [#676](https://github.com/ROCm/mori/pull/676) | tune(ep/v2): add hidden_dim=7168 (DSV4) internode launch geo... | @yoqiu-amd | merged | 2026-09-16 | 2026-09-16 |
| [#654](https://github.com/ROCm/mori/pull/654) | Add DMA buffer support to mlx5 | @avbokovoy | merged | 2026-09-09 | 2026-09-16 |
| [#647](https://github.com/ROCm/mori/pull/647) | perf(ep): add MI355X IntraNodeLL combine tuning | @xudonlyu | merged | 2026-09-08 | 2026-09-16 |
| [#658](https://github.com/ROCm/mori/pull/658) | Fix/env check mlnx qos no sudo | @amirakb89 | merged | 2026-09-10 | 2026-09-16 |
| [#673](https://github.com/ROCm/mori/pull/673) | Test/ep bench graph timing | @zhangfei829 | merged | 2026-09-15 | 2026-09-15 |
| [#666](https://github.com/ROCm/mori/pull/666) | fix(allocator): link c10_hip in JIT path for getCurrentHIPSt... | @kawhil-amd | merged | 2026-09-12 | 2026-09-15 |
| [#668](https://github.com/ROCm/mori/pull/668) | refactor(EPv2): name the dispatch transport fp8 or fp4x2, no... | @jhchouuu | merged | 2026-09-14 | 2026-09-14 |
| [#665](https://github.com/ROCm/mori/pull/665) | test(ep/v2): warm the internode bench with the timed loop's ... | @jhchouuu | merged | 2026-09-12 | 2026-09-14 |
| [#642](https://github.com/ROCm/mori/pull/642) | perf(EPv2): hide the dispatch drain read behind the grid bar... | @kawhil-amd | merged | 2026-09-07 | 2026-09-12 |
| [#653](https://github.com/ROCm/mori/pull/653) | fix(rdma): cco/shmem indicies wraparound (#626) | @QizhouZhang97 | merged | 2026-09-09 | 2026-09-11 |
| [#661](https://github.com/ROCm/mori/pull/661) | Revert "perf(EPv2): skip the dispatch completion spin when t... | @zhangfei829 | merged | 2026-09-11 | 2026-09-11 |
| [#644](https://github.com/ROCm/mori/pull/644) | perf(umbp): send and resolve a key set once, not once per la... | @isytwu | merged | 2026-09-08 | 2026-09-11 |
| [#639](https://github.com/ROCm/mori/pull/639) | fix(cco): Group lanes by CQ before PSD non-CCQE poll | @amd-wsung102 | merged | 2026-09-03 | 2026-09-11 |
| [#625](https://github.com/ROCm/mori/pull/625) | feat(EPv2): [preview] internode dispatch/combine over CCO/GD... | @QizhouZhang97 | merged | 2026-09-01 | 2026-09-11 |
| [#651](https://github.com/ROCm/mori/pull/651) | ci: add a ROCm 10 intranode gate, and fix the two things tha... | @QizhouZhang97 | merged | 2026-09-09 | 2026-09-10 |
| [#612](https://github.com/ROCm/mori/pull/612) | fix: use strided offsets in run_single_once when batch_conti... | @kudomcho | merged | 2026-08-27 | 2026-09-09 |
| [#646](https://github.com/ROCm/mori/pull/646) | feat(ep/v2): make the internode dispatch/combine a v2-native... | @jhchouuu | merged | 2026-09-08 | 2026-09-09 |
| [#648](https://github.com/ROCm/mori/pull/648) | test(EPv2): emit a JSON result table and per-point clock/pow... | @jhchouuu | merged | 2026-09-08 | 2026-09-09 |
| [#615](https://github.com/ROCm/mori/pull/615) | docs(skills): [Pre-flight] Add cluster-network-topology skil... | @lcskrishna | merged | 2026-08-28 | 2026-09-09 |
| [#650](https://github.com/ROCm/mori/pull/650) | fix(umbp): dlopen libhipfile instead of linking it | @jhchouuu | merged | 2026-09-09 | 2026-09-09 |
| [#645](https://github.com/ROCm/mori/pull/645) | perf(EPv2): skip the dispatch completion spin when the peer ... | @zhangfei829 | merged | 2026-09-08 | 2026-09-08 |
| [#643](https://github.com/ROCm/mori/pull/643) | fix(EPv2): honor the 128B TDM row invariant on gfx1250 metad... | @zhangfei829 | merged | 2026-09-08 | 2026-09-08 |
| [#640](https://github.com/ROCm/mori/pull/640) | docs(known-issues): ROCm 7.2.x clr bugs — hipMemSetAccess su... | @jhchouuu | merged | 2026-09-07 | 2026-09-07 |
| [#608](https://github.com/ROCm/mori/pull/608) | perf(EPv2): size the gfx1250 combine pull tile against the L... | @zhangfei829 | merged | 2026-08-27 | 2026-09-07 |
| [#566](https://github.com/ROCm/mori/pull/566) | Feat/env check gpu memory | @amirakb89 | merged | 2026-08-14 | 2026-09-07 |
| [#631](https://github.com/ROCm/mori/pull/631) | perf(ep/v2): sync main + port #613 InterNodeV1LL combine opt... | @jhchouuu | merged | 2026-09-02 | 2026-09-07 |
| [#540](https://github.com/ROCm/mori/pull/540) | refactor(umbp): make distributed mode backend- and transport... | @TianDi101 | merged | 2026-08-11 | 2026-09-07 |
| [#577](https://github.com/ROCm/mori/pull/577) | perf(EPv2): rework the gfx1250 combine entry barrier and wid... | @kawhil-amd | merged | 2026-08-18 | 2026-09-06 |
| [#606](https://github.com/ROCm/mori/pull/606) | feat(EPv2): support wide EP (larger than 32) in intranode ke... | @kawhil-amd | merged | 2026-08-26 | 2026-09-06 |
| [#636](https://github.com/ROCm/mori/pull/636) | test(ep/v2): payload distribution and seed for the EP ubench | @jhchouuu | merged | 2026-09-03 | 2026-09-03 |
| [#637](https://github.com/ROCm/mori/pull/637) | perf(umbp): fix the local-path lock contention that fails th... | @TianDi101 | merged | 2026-09-03 | 2026-09-03 |
| [#505](https://github.com/ROCm/mori/pull/505) | fix(ep): AsyncLL slot assignment double-allocates when top-k... | @TianDi101 | merged | 2026-07-29 | 2026-09-03 |
| [#517](https://github.com/ROCm/mori/pull/517) | feat(EPv2): enable fp4 dispatch feature in EPv2 | @kawhil-amd | merged | 2026-08-03 | 2026-09-03 |
| [#635](https://github.com/ROCm/mori/pull/635) | CI: enable mlx5 nightly | @QizhouZhang97 | merged | 2026-09-03 | 2026-09-03 |
| [#579](https://github.com/ROCm/mori/pull/579) | feat(umbp): GPU Direct Storage (hipfile) SSD-to-GPU read pat... | @isytwu | merged | 2026-08-19 | 2026-09-03 |
| [#634](https://github.com/ROCm/mori/pull/634) | test(umbp): gate the five client primitives on concurrency i... | @TianDi101 | merged | 2026-09-03 | 2026-09-03 |
| [#633](https://github.com/ROCm/mori/pull/633) | perf(umbp): keep PeerPool resolve off the metadata lock | @wuyl1 | merged | 2026-09-03 | 2026-09-03 |
| [#628](https://github.com/ROCm/mori/pull/628) | feat(allocator): back symm_mem.rendezvous() with a CCO windo... | @jhchouuu | merged | 2026-09-01 | 2026-09-02 |
| [#586](https://github.com/ROCm/mori/pull/586) | perf(ep): optimize IntraNode dispatch kernel for MI350X | @kudomcho | merged | 2026-08-19 | 2026-09-02 |
| [#622](https://github.com/ROCm/mori/pull/622) | bugfix: mlx5 ci hung | @QizhouZhang97 | merged | 2026-08-31 | 2026-09-02 |
| [#613](https://github.com/ROCm/mori/pull/613) | perf(ep): optimize InterNodeV1LL small-token latency on EP16 | @isytwu | merged | 2026-08-28 | 2026-09-02 |
| [#558](https://github.com/ROCm/mori/pull/558) | feat(shmem): add a CPU host-proxy RDMA transport alongside I... | @itej89 | merged | 2026-08-13 | 2026-09-01 |
| [#627](https://github.com/ROCm/mori/pull/627) | perf(ep): optimize the v1_ll combine reduce | @isytwu | merged | 2026-09-01 | 2026-09-01 |
| [#620](https://github.com/ROCm/mori/pull/620) | Refactor/umbp drop standalone client | @TianDi101 | merged | 2026-08-31 | 2026-09-01 |
| [#587](https://github.com/ROCm/mori/pull/587) | feat(umbp): peer-local multi-backend placement and logical t... | @wuyl1 | merged | 2026-08-20 | 2026-08-31 |
| [#617](https://github.com/ROCm/mori/pull/617) | fix(EPv2): align staging pool capacity with EpMaxRecv to pre... | @kawhil-amd | merged | 2026-08-28 | 2026-08-31 |
| [#607](https://github.com/ROCm/mori/pull/607) | Enable MLX+MI300 CI | @QizhouZhang97 | merged | 2026-08-27 | 2026-08-31 |
| [#604](https://github.com/ROCm/mori/pull/604) | perf(ep): rework how EP tuning picks and saves, remove small... | @isytwu | merged | 2026-08-26 | 2026-08-30 |
| [#616](https://github.com/ROCm/mori/pull/616) | examples: address a torch symmetric tensor as a CCO LSA wind... | @jhchouuu | merged | 2026-08-28 | 2026-08-28 |
| [#594](https://github.com/ROCm/mori/pull/594) | feat(cco): add Triton device API bindings | @yangyuhuiling | merged | 2026-08-24 | 2026-08-27 |
| [#609](https://github.com/ROCm/mori/pull/609) | fix(cco): initialize packaged ROCm runtime before native loa... | @yangyuhuiling | merged | 2026-08-27 | 2026-08-27 |
| [#544](https://github.com/ROCm/mori/pull/544) | allocator: register mori as a torch SymmetricMemory backend | @carlushuang | merged | 2026-08-11 | 2026-08-26 |
| [#600](https://github.com/ROCm/mori/pull/600) | [AMD][DSV4] fix: recognize fp4_blockwise in the AUTO tuning ... | @karverma-amd | merged | 2026-08-24 | 2026-08-26 |
| [#605](https://github.com/ROCm/mori/pull/605) | fix(security): harden bootstrap and CI against scan findings | @jhchouuu | merged | 2026-08-26 | 2026-08-26 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-10-03T12:48:54Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1223](https://github.com/ROCm/FlyDSL/pull/1223) | [Kernel][FA][AOT][Feature][Dialect][DSL][ROCDL][Perf][Doc][T... | @dimitri91209 | draft | 2026-10-01 | 2026-10-03 |
| [#1225](https://github.com/ROCm/FlyDSL/pull/1225) | [compiler][opt] schedule bank based on a verified llvm versi... | @jli-melchior | open | 2026-10-02 | 2026-10-02 |
| [#1222](https://github.com/ROCm/FlyDSL/pull/1222) | [Build] Fall back to HIP runtime from rocm-sdk core wheels | @apinge | draft | 2026-10-01 | 2026-10-01 |
| [#1221](https://github.com/ROCm/FlyDSL/pull/1221) | [dont merge] compare latest base main llvm | @jli-melchior | open | 2026-10-01 | 2026-10-01 |
| [#1215](https://github.com/ROCm/FlyDSL/pull/1215) | [compiler][opt] add schedule_bank api for gfx1250 | @jli-melchior | open | 2026-09-30 | 2026-10-01 |
| [#1220](https://github.com/ROCm/FlyDSL/pull/1220) | [Bugfix][Test] Fix atomic_fmin/fmax Out left at +inf on side... | @dimitri91209 | open | 2026-10-01 | 2026-10-01 |
| [#1214](https://github.com/ROCm/FlyDSL/pull/1214) | [Kernel][gfx1250] Add the GLM-5 MonoKernel | @jhinpan | open | 2026-09-29 | 2026-10-01 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-09-30 |
| [#1216](https://github.com/ROCm/FlyDSL/pull/1216) | [Kernel] Add dense Flash Attention for gfx1100 | @vlluvia | open | 2026-09-30 | 2026-09-30 |
| [#1184](https://github.com/ROCm/FlyDSL/pull/1184) | [fix] Support waves_per_eu min,max range for full VGPR utili... | @jli-melchior | open | 2026-09-23 | 2026-09-30 |
| [#1217](https://github.com/ROCm/FlyDSL/pull/1217) | feat(conv3d): align bf16 implicit GEMM with aiter #5370 | @huizzhan | draft | 2026-09-30 | 2026-09-30 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [Feat] Fix `lld invocation failed` when ROCm is not at the b... | @jli-melchior | open | 2026-08-08 | 2026-09-30 |
| [#1193](https://github.com/ROCm/FlyDSL/pull/1193) | [LayoutLowering] Ignore size-one leaves in contiguous-segmen... | @mustafayildirim | open | 2026-09-25 | 2026-09-29 |
| [#1179](https://github.com/ROCm/FlyDSL/pull/1179) | [Enh] Accept LLVM pointer types in ffi declarations | @LWenH | open | 2026-09-22 | 2026-09-29 |
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-09-29 |
| [#1212](https://github.com/ROCm/FlyDSL/pull/1212) | [fix] Correct zipped_divide tiler hierarchy handling | @Peter9606 | open | 2026-09-29 | 2026-09-29 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | open | 2026-07-14 | 2026-09-28 |
| [#1210](https://github.com/ROCm/FlyDSL/pull/1210) | [CI] Run full cooperative matrix before PyPI releases | @coderfeli | draft | 2026-09-28 | 2026-09-28 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-09-28 |
| [#1139](https://github.com/ROCm/FlyDSL/pull/1139) | [Kernel][Perf] Align gfx950 BF16 D128 attention with OPUS | @coderfeli | open | 2026-09-15 | 2026-09-28 |
| [#1185](https://github.com/ROCm/FlyDSL/pull/1185) | fix(coop): preserve declared operator element types | @sjfeng1999 | open | 2026-09-23 | 2026-09-28 |
| [#1113](https://github.com/ROCm/FlyDSL/pull/1113) | [Bugfix][Kernel] Fix fused RoPE for head dimension 96 | @tangzzycc | open | 2026-09-09 | 2026-09-28 |
| [#1190](https://github.com/ROCm/FlyDSL/pull/1190) | [llvm] Extend LLVM for FlyDSL end-to-end performance work | @Phil-amd | open | 2026-09-24 | 2026-09-25 |
| [#1188](https://github.com/ROCm/FlyDSL/pull/1188) | [Compiler][Debug] Add a compile path for hand-edited assembl... | @Phil-amd | open | 2026-09-24 | 2026-09-25 |
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-09-24 |
| [#1191](https://github.com/ROCm/FlyDSL/pull/1191) | [Fix][Expr] Honor allocate(..., alignment=) for static share... | @xudoyuan | draft | 2026-09-24 | 2026-09-24 |
| [#1162](https://github.com/ROCm/FlyDSL/pull/1162) | [DSL][Runtime][Kernel] Add in-kernel wave tracing (fx.ktrace... | @Phil-amd | open | 2026-09-18 | 2026-09-23 |
| [#1157](https://github.com/ROCm/FlyDSL/pull/1157) | feat(review): harden review engine for unattended runs | @jhinpan | open | 2026-09-17 | 2026-09-22 |
| [#1166](https://github.com/ROCm/FlyDSL/pull/1166) | [dont merge][llvm] cherry commits for unclausevmem patch | @jli-melchior | open | 2026-09-18 | 2026-09-18 |
| [#1145](https://github.com/ROCm/FlyDSL/pull/1145) | [LLVM] bump llvm which improve the sequence for initial uncl... | @jli-melchior | open | 2026-09-16 | 2026-09-18 |
| [#1106](https://github.com/ROCm/FlyDSL/pull/1106) | [Skills] Add flydsl-code-review skill and workflow | @zhiding512 | open | 2026-09-08 | 2026-09-17 |
| [#1155](https://github.com/ROCm/FlyDSL/pull/1155) | gfx950 flex attention with user score/mask mods | @RichardChamberlain1 | open | 2026-09-17 | 2026-09-17 |
| [#1110](https://github.com/ROCm/FlyDSL/pull/1110) | [LLVM] Fix true16 lowering for packed FP8 conversions | @big-yellow-duck | open | 2026-09-09 | 2026-09-17 |
| [#1137](https://github.com/ROCm/FlyDSL/pull/1137) | [Kernel][Perf] Fix and tune gfx950 dense FP8 attention | @coderfeli | open | 2026-09-15 | 2026-09-15 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-09-14 |
| [#1126](https://github.com/ROCm/FlyDSL/pull/1126) | [Kernel][Perf] Optimize gfx950 head64 prefill attention | @michael604work | open | 2026-09-11 | 2026-09-14 |
| [#1125](https://github.com/ROCm/FlyDSL/pull/1125) | [Perf] gemm_bf16 gfx1250: cross-tile carry to hide K-tile pr... | @amd-hhashemi | open | 2026-09-11 | 2026-09-11 |
| [#1057](https://github.com/ROCm/FlyDSL/pull/1057) | [Kernel][Perf] Add gfx1151 tile selection for RDNA3 GEMM | @tangzzycc | open | 2026-08-22 | 2026-09-11 |
| [#912](https://github.com/ROCm/FlyDSL/pull/912) | Fix hierarchical reduced predicates in copy layout lowering | @HydraQYH | open | 2026-07-27 | 2026-09-10 |
| [#1104](https://github.com/ROCm/FlyDSL/pull/1104) |  deepseekv3 r1 tune config | @Yaowu-Xiong | open | 2026-09-08 | 2026-09-10 |
| [#1056](https://github.com/ROCm/FlyDSL/pull/1056) | Support vLLM paged KV cache layouts on the gfx950 attention ... | @akii96 | open | 2026-08-21 | 2026-09-10 |
| [#971](https://github.com/ROCm/FlyDSL/pull/971) | [gfx1250] Add A8W8/A8W4/A4W4 compute-bound GEMM | @aoli26 | open | 2026-08-06 | 2026-09-09 |
| [#1111](https://github.com/ROCm/FlyDSL/pull/1111) | [DO NOT MERGE] Add MegaMoE engineering skill | @GwilliamHu | draft | 2026-09-09 | 2026-09-09 |
| [#1108](https://github.com/ROCm/FlyDSL/pull/1108) | [Bugfix][Benchmark] Fix compiler API usage in Softmax and RM... | @tangzzycc | open | 2026-09-09 | 2026-09-09 |
| [#1069](https://github.com/ROCm/FlyDSL/pull/1069) | [Flydsl] Qwen-Image conv3d 3x3 opt | @huizzhan | draft | 2026-08-26 | 2026-09-08 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-09-05 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-08-28 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-08-24 |
| [#1045](https://github.com/ROCm/FlyDSL/pull/1045) | [Bugfix] Refuse a batch entry the buffer descriptor cannot a... | @JohnQinAMD | open | 2026-08-20 | 2026-08-24 |
| [#906](https://github.com/ROCm/FlyDSL/pull/906) | Add fast_divmod magic-number division helper | @kashif | open | 2026-07-26 | 2026-08-24 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-08-18 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-08-05 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-07-24 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-07-23 |
| [#1142](https://github.com/ROCm/FlyDSL/pull/1142) | [Build] Find ROCm through rocm-sdk before falling back to /o... | @xinyazhang | merged | 2026-09-15 | 2026-09-29 |
| [#1213](https://github.com/ROCm/FlyDSL/pull/1213) | [fix] mono kernel glm precision fixed | @james-huang09 | merged | 2026-09-29 | 2026-09-29 |
| [#1209](https://github.com/ROCm/FlyDSL/pull/1209) | [AOT] Embed backend runtime into exported objects | @coderfeli | merged | 2026-09-28 | 2026-09-29 |
| [#1203](https://github.com/ROCm/FlyDSL/pull/1203) | [Docs] Audit and refresh repository documentation | @coderfeli | merged | 2026-09-26 | 2026-09-29 |
| [#1195](https://github.com/ROCm/FlyDSL/pull/1195) | [JIT] Attach exactly one #rocdl.target per gpu.module | @mustafayildirim | merged | 2026-09-25 | 2026-09-28 |
| [#1204](https://github.com/ROCm/FlyDSL/pull/1204) | [Kernel][Perf] Add GLM-5 and Kimi-K3 MonoKernels | @coderfeli | merged | 2026-09-27 | 2026-09-28 |
| [#1208](https://github.com/ROCm/FlyDSL/pull/1208) | [Fix][Examples] Remove duplicated k-stride computation in pr... | @yicyang | merged | 2026-09-28 | 2026-09-28 |
| [#846](https://github.com/ROCm/FlyDSL/pull/846) | [Docs] Remove duplicate Documentation table from README | @Peter9606 | merged | 2026-07-14 | 2026-09-28 |
| [#1186](https://github.com/ROCm/FlyDSL/pull/1186) | Issue causal flash q-blocks longest-first | @RichardChamberlain1 | merged | 2026-09-23 | 2026-09-28 |
| [#1207](https://github.com/ROCm/FlyDSL/pull/1207) | [CI] Reduce cooperative test matrix | @coderfeli | merged | 2026-09-28 | 2026-09-28 |
| [#374](https://github.com/ROCm/FlyDSL/pull/374) | fix: correct SwizzleAttr argument order in layout upcast/dow... | @kefan203 | merged | 2026-04-09 | 2026-09-28 |
| [#1202](https://github.com/ROCm/FlyDSL/pull/1202) | [AOT] Export linkable C objects and support CPU-only builds | @coderfeli | merged | 2026-09-26 | 2026-09-28 |
| [#1200](https://github.com/ROCm/FlyDSL/pull/1200) | [Fix][gfx1250] Time the TDM multicast-add benchmark on the d... | @jhinpan | merged | 2026-09-25 | 2026-09-28 |
| [#1199](https://github.com/ROCm/FlyDSL/pull/1199) | [Fix][gfx1250] Reject a K that tile_k does not divide in the... | @jhinpan | merged | 2026-09-25 | 2026-09-28 |
| [#1197](https://github.com/ROCm/FlyDSL/pull/1197) | [Chore][gfx1250] Drop leftovers of the GEMM modules removed ... | @jhinpan | merged | 2026-09-25 | 2026-09-28 |
| [#1205](https://github.com/ROCm/FlyDSL/pull/1205) | [Kernel][Perf] GLM-5 MonoKernel: indexer + mla + moe fused k... | @coderfeli | merged | 2026-09-27 | 2026-09-27 |
| [#1187](https://github.com/ROCm/FlyDSL/pull/1187) | [CI] Fix dumpir.sh silently succeeding with no command | @Phil-amd | merged | 2026-09-23 | 2026-09-24 |
| [#1189](https://github.com/ROCm/FlyDSL/pull/1189) | Revert "Refactor preshuffle GEMM indexing with layout algebr... | @coderfeli | merged | 2026-09-24 | 2026-09-24 |
| [#1128](https://github.com/ROCm/FlyDSL/pull/1128) | Support variadic operands in fully expanded tiled GEMM | @coderfeli | merged | 2026-09-12 | 2026-09-23 |
| [#1131](https://github.com/ROCm/FlyDSL/pull/1131) | [Kernel] Refactor preshuffle GEMM indexing with layout algeb... | @coderfeli | merged | 2026-09-14 | 2026-09-23 |
| [#1183](https://github.com/ROCm/FlyDSL/pull/1183) | [Kernel][GEMM] Add gfx950 2-wave preshuffle tiles | @XiaobingSuper | merged | 2026-09-23 | 2026-09-23 |
| [#1178](https://github.com/ROCm/FlyDSL/pull/1178) | [Fix][Coop] Align warp array collective semantics | @sjfeng1999 | merged | 2026-09-22 | 2026-09-23 |
| [#1182](https://github.com/ROCm/FlyDSL/pull/1182) | [a16w4] Sync moe_2stage_a16wmix from aiter (gfx942 MXFP4 + 7... | @MHYangAMD | merged | 2026-09-22 | 2026-09-23 |
| [#1122](https://github.com/ROCm/FlyDSL/pull/1122) | Reject global->LDS direct loads on gfx11 | @mgehre-amd | merged | 2026-09-11 | 2026-09-22 |
| [#1181](https://github.com/ROCm/FlyDSL/pull/1181) | [API] Add extension as stable, exclude experimental module p... | @sjfeng1999 | merged | 2026-09-22 | 2026-09-22 |
| [#1116](https://github.com/ROCm/FlyDSL/pull/1116) | refactor communication ops | @yanboshao | merged | 2026-09-10 | 2026-09-22 |
| [#1154](https://github.com/ROCm/FlyDSL/pull/1154) | [llvm][Skill] Add an LLVM kernel-tuning and verification ski... | @Phil-amd | merged | 2026-09-17 | 2026-09-22 |
| [#1158](https://github.com/ROCm/FlyDSL/pull/1158) | feat(review): add local coderfeli review watcher | @jhinpan | merged | 2026-09-17 | 2026-09-22 |
| [#1177](https://github.com/ROCm/FlyDSL/pull/1177) | [Kernel][FA] Fix the DAZ flag never reaching the hardware | @Phil-amd | merged | 2026-09-22 | 2026-09-22 |
| [#1062](https://github.com/ROCm/FlyDSL/pull/1062) | smem cleanup: move capacity helpers off legacy allocator, mi... | @xudoyuan | merged | 2026-08-24 | 2026-09-22 |
| [#1175](https://github.com/ROCm/FlyDSL/pull/1175) | [CI] Remove ancestor-of-main gate from PyPI publish workflow | @jli-melchior | merged | 2026-09-21 | 2026-09-21 |
| [#1167](https://github.com/ROCm/FlyDSL/pull/1167) | [Ext][Coop] Add more warp-level primitives | @sjfeng1999 | merged | 2026-09-18 | 2026-09-21 |
| [#1164](https://github.com/ROCm/FlyDSL/pull/1164) | [Misc] Fix 5 Dependabot vulnerabilities | @Phil-amd | merged | 2026-09-18 | 2026-09-20 |
| [#1130](https://github.com/ROCm/FlyDSL/pull/1130) | [Bugfix] Include captured types in the JIT cache key | @LWenH | merged | 2026-09-14 | 2026-09-20 |
| [#1174](https://github.com/ROCm/FlyDSL/pull/1174) | [Verion] Bump version to 0.4.0 | @coderfeli | merged | 2026-09-20 | 2026-09-20 |
| [#1171](https://github.com/ROCm/FlyDSL/pull/1171) | [CI] Fix cross-process cache IR assertion | @coderfeli | merged | 2026-09-20 | 2026-09-20 |
| [#1153](https://github.com/ROCm/FlyDSL/pull/1153) | [llvm] Drop four LLVM tuning knobs that never reached codege... | @Phil-amd | merged | 2026-09-17 | 2026-09-20 |
| [#1169](https://github.com/ROCm/FlyDSL/pull/1169) | [CI] Restore aiter tests in PyPI workflow | @coderfeli | merged | 2026-09-19 | 2026-09-19 |
| [#1168](https://github.com/ROCm/FlyDSL/pull/1168) | [Bugfix] Release 0.3.4.1 with vector buffer atomic layout fi... | @coderfeli | merged | 2026-09-19 | 2026-09-19 |
| [#1161](https://github.com/ROCm/FlyDSL/pull/1161) | [Bugfix] Promote register pred on copy_atom_call without reg... | @LWenH | merged | 2026-09-18 | 2026-09-19 |
| [#1156](https://github.com/ROCm/FlyDSL/pull/1156) | [Enh] Support expr struct member methods | @sjfeng1999 | merged | 2026-09-17 | 2026-09-19 |
| [#1149](https://github.com/ROCm/FlyDSL/pull/1149) | docs: refresh compatibility guidance and repair web referenc... | @sunway513 | merged | 2026-09-16 | 2026-09-19 |
| [#1013](https://github.com/ROCm/FlyDSL/pull/1013) | [ROCDL] Add make_tiled_tdm_atom op and tdm_partition | @sjfeng1999 | merged | 2026-08-14 | 2026-09-18 |
| [#1163](https://github.com/ROCm/FlyDSL/pull/1163) | bump version to 0.3.4 | @coderfeli | merged | 2026-09-18 | 2026-09-18 |
| [#1119](https://github.com/ROCm/FlyDSL/pull/1119) | [Perf] Reduce small-batch TopK selection overhead on gfx950 | @jhinpan | merged | 2026-09-10 | 2026-09-18 |
| [#1160](https://github.com/ROCm/FlyDSL/pull/1160) | Fix monotonic dev tag generation in shallow worktrees | @coderfeli | merged | 2026-09-18 | 2026-09-18 |
| [#1159](https://github.com/ROCm/FlyDSL/pull/1159) | Reduce AOT cache artifact size | @coderfeli | merged | 2026-09-18 | 2026-09-18 |
| [#1144](https://github.com/ROCm/FlyDSL/pull/1144) | Support unroll/unroll_full on dynamic for-range loops | @xudoyuan | merged | 2026-09-16 | 2026-09-17 |
| [#1148](https://github.com/ROCm/FlyDSL/pull/1148) | [Enh] Make specialized Vector and Pointer types Storable | @sjfeng1999 | merged | 2026-09-16 | 2026-09-17 |
| [#1141](https://github.com/ROCm/FlyDSL/pull/1141) | [Enh] Give Align fields alignas-like value semantics | @sjfeng1999 | merged | 2026-09-15 | 2026-09-17 |
| [#1136](https://github.com/ROCm/FlyDSL/pull/1136) | [Bugfix][Kernel] Fix rdna3_int8_gemm RDNA bounds checks | @qiangpan2 | merged | 2026-09-15 | 2026-09-17 |
| [#1150](https://github.com/ROCm/FlyDSL/pull/1150) | [CI] Restore dashboard benchmark log ingestion | @jhinpan | merged | 2026-09-16 | 2026-09-17 |
| [#1146](https://github.com/ROCm/FlyDSL/pull/1146) | [CI] Fix silent skip of the MLIR lit stage | @Phil-amd | merged | 2026-09-16 | 2026-09-16 |
| [#1140](https://github.com/ROCm/FlyDSL/pull/1140) | [Fix] Convert fly pointer types across control-flow boundari... | @sjfeng1999 | merged | 2026-09-15 | 2026-09-16 |
| [#1143](https://github.com/ROCm/FlyDSL/pull/1143) | pyproject: bound nanobind below 3, as MLIR requires | @xinyazhang | merged | 2026-09-15 | 2026-09-16 |
| [#1138](https://github.com/ROCm/FlyDSL/pull/1138) | [DSL] Support struct as the elemType of Array | @sjfeng1999 | merged | 2026-09-15 | 2026-09-15 |
| [#1135](https://github.com/ROCm/FlyDSL/pull/1135) | [Docs] Remove tedious typed arithmetic section | @sjfeng1999 | merged | 2026-09-14 | 2026-09-15 |
| [#1120](https://github.com/ROCm/FlyDSL/pull/1120) | [Doc] Introduction for DSL procotols | @sjfeng1999 | merged | 2026-09-11 | 2026-09-14 |
| [#1132](https://github.com/ROCm/FlyDSL/pull/1132) | [CI] Reduce full test runtime without dropping edge coverage | @coderfeli | merged | 2026-09-14 | 2026-09-14 |
| [#1133](https://github.com/ROCm/FlyDSL/pull/1133) | [CI] Align pre-commit Python and C++ style checks with CI | @sjfeng1999 | merged | 2026-09-14 | 2026-09-14 |
| [#1121](https://github.com/ROCm/FlyDSL/pull/1121) | [CI] Skip GPU tests for more non-code path changes | @sjfeng1999 | merged | 2026-09-11 | 2026-09-14 |
| [#1066](https://github.com/ROCm/FlyDSL/pull/1066) | [Kernel][FA] Support paged FP8 Flash attention with asymmetr... | @sammysun0711 | merged | 2026-08-24 | 2026-09-14 |
| [#1127](https://github.com/ROCm/FlyDSL/pull/1127) | Migrate vector consumers and consolidate kernel helpers | @coderfeli | merged | 2026-09-12 | 2026-09-13 |
| [#1124](https://github.com/ROCm/FlyDSL/pull/1124) | [Skills] Add deterministic preflight to the review runner | @jhinpan | merged | 2026-09-11 | 2026-09-11 |
| [#1094](https://github.com/ROCm/FlyDSL/pull/1094) | [CI] Run aiter CSV MoE and HGEMM in the wheel/PyPI test job | @coderfeli | merged | 2026-09-04 | 2026-09-11 |
| [#1118](https://github.com/ROCm/FlyDSL/pull/1118) | [CI] Use host networking for manylinux image builds | @jhinpan | merged | 2026-09-10 | 2026-09-11 |
| [#1105](https://github.com/ROCm/FlyDSL/pull/1105) | [Perf][Dialect] Fold redundant index cast pairs in layout lo... | @Phil-amd | merged | 2026-09-08 | 2026-09-11 |
| [#1107](https://github.com/ROCm/FlyDSL/pull/1107) | Mxfp8 8w 1*32 scale | @solinzby1 | merged | 2026-09-09 | 2026-09-11 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-10-03T12:48:56Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-10-02 |
| [#736](https://github.com/ROCm/TransformerEngine/pull/736) | Upgrade ci to therock 10.0 | @VeeraRajasekhar | open | 2026-09-10 | 2026-10-02 |
| [#753](https://github.com/ROCm/TransformerEngine/pull/753) | Remove dead upstream FA backend code left after merging | @ipanfilo | open | 2026-10-02 | 2026-10-02 |
| [#751](https://github.com/ROCm/TransformerEngine/pull/751) | Ifu release v2.19 | @matthiasdiener | draft | 2026-10-02 | 2026-10-02 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-10-01 |
| [#747](https://github.com/ROCm/TransformerEngine/pull/747) | Fix Triton norm MXFP4 | @matthiasdiener | open | 2026-09-30 | 2026-10-01 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | open | 2026-08-31 | 2026-09-30 |
| [#746](https://github.com/ROCm/TransformerEngine/pull/746) | FlyDSL persistent work-stealing MXFP8 grouped GEMM (gfx950) | @aris134 | draft | 2026-09-29 | 2026-09-30 |
| [#745](https://github.com/ROCm/TransformerEngine/pull/745) | extend MXFP4 recipe to GroupedLinear and a8w4 (Triton groupe... | @matthiasdiener | open | 2026-09-28 | 2026-09-29 |
| [#744](https://github.com/ROCm/TransformerEngine/pull/744) | Replace the gfx950 blockwise FP8 running-scale accumulator | @wangye805 | open | 2026-09-26 | 2026-09-29 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-09-29 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-09-28 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-09-28 |
| [#734](https://github.com/ROCm/TransformerEngine/pull/734) | Persistent AG + GEMM MXFP8 Enablement | @aris134 | open | 2026-09-09 | 2026-09-28 |
| [#742](https://github.com/ROCm/TransformerEngine/pull/742) | [JAX] grouped GEMM interface fix | @shurale-nkn | open | 2026-09-24 | 2026-09-25 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | Performance dashboard | @matthiasdiener | open | 2026-07-14 | 2026-09-24 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-09-24 |
| [#741](https://github.com/ROCm/TransformerEngine/pull/741) | Enable gfx950 FP8 HD128/256 fused-attn ASM forward from aite... | @yaomingamd | open | 2026-09-23 | 2026-09-23 |
| [#739](https://github.com/ROCm/TransformerEngine/pull/739) | Fix rocprofv3 Hang in JAX Training Docker 26.6/26.7 by Skipp... | @yaomingamd | open | 2026-09-18 | 2026-09-22 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-09-18 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-09-17 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-09-10 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-09-10 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-09-10 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-09-10 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-09-08 |
| [#705](https://github.com/ROCm/TransformerEngine/pull/705) | [proof-of-concept] Kernel autotuning in TE | @matthiasdiener | draft | 2026-08-18 | 2026-09-08 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-08-27 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-08-26 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-07-31 |
| [#679](https://github.com/ROCm/TransformerEngine/pull/679) | microbenchmarks: usv implementation | @matthiasdiener | draft | 2026-07-24 | 2026-07-24 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-07-21 |
| [#620](https://github.com/ROCm/TransformerEngine/pull/620) | [FEAT] Microbenchmark add visualization | @Micky774 | open | 2026-06-08 | 2026-06-25 |
| [#614](https://github.com/ROCm/TransformerEngine/pull/614) | Incorporate statistical significance testing to benchmarks | @Micky774 | open | 2026-06-08 | 2026-06-23 |
| [#642](https://github.com/ROCm/TransformerEngine/pull/642) | Relax MXFP8 GEMM K constraint from multiple-of-128 to multip... | @JohnQinAMD | open | 2026-06-19 | 2026-06-20 |
| [#581](https://github.com/ROCm/TransformerEngine/pull/581) | Add Tealite: pure-Python TransformerEngine for ROCm/AMD GPUs | @jayfurmanek | open | 2026-05-07 | 2026-06-17 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-06-15 |
| [#622](https://github.com/ROCm/TransformerEngine/pull/622) | [CI] Add resilience to artifacts fetch | @leo-automation | open | 2026-06-09 | 2026-06-09 |
| [#590](https://github.com/ROCm/TransformerEngine/pull/590) | add production GEMM tests | @matthiasdiener | open | 2026-05-19 | 2026-06-04 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-06-01 |
| [#591](https://github.com/ROCm/TransformerEngine/pull/591) | Bump CI retention days | @matthiasdiener | draft | 2026-05-20 | 2026-05-29 |
| [#573](https://github.com/ROCm/TransformerEngine/pull/573) | [ROCm] Allow bf16/bf16/fp32 in nvte_multi_tensor_gemm dispat... | @lizamd | open | 2026-05-04 | 2026-05-15 |
| [#543](https://github.com/ROCm/TransformerEngine/pull/543) | CI: auto-trigger AITER prebuilt upload when 3rdparty/aiter u... | @VeeraRajasekhar | open | 2026-04-15 | 2026-05-08 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-05-07 |
| [#570](https://github.com/ROCm/TransformerEngine/pull/570) | [No Merge][No Review] testing aiter auto trigger on gh actio... | @VeeraRajasekhar | draft | 2026-05-01 | 2026-05-02 |
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-04-30 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-04-07 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-04-07 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-04-07 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-04-07 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-04-07 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-04-07 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-04-07 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-04-07 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-04-07 |
| [#752](https://github.com/ROCm/TransformerEngine/pull/752) | Update CODEOWNERS | @ipanfilo | merged | 2026-10-02 | 2026-10-02 |
| [#749](https://github.com/ROCm/TransformerEngine/pull/749) | [TE] Updated hipBLASLt cache keys for strict and non-strict ... | @AllenFarcas | merged | 2026-10-01 | 2026-10-02 |
| [#748](https://github.com/ROCm/TransformerEngine/pull/748) | Backport ROCm 10.1 fixes from dev | @ipanfilo | merged | 2026-10-01 | 2026-10-02 |
| [#750](https://github.com/ROCm/TransformerEngine/pull/750) | Ifu dev 20260828 v2.19 merge | @matthiasdiener | merged | 2026-10-01 | 2026-10-02 |
| [#723](https://github.com/ROCm/TransformerEngine/pull/723) |  Triton mxfp4 (and a8w4) grouped GEMM kernel | @matthiasdiener | merged | 2026-08-31 | 2026-09-28 |
| [#722](https://github.com/ROCm/TransformerEngine/pull/722) | [TE] IFU release v2.18 | @aris134 | merged | 2026-08-31 | 2026-09-27 |
| [#737](https://github.com/ROCm/TransformerEngine/pull/737) | Fix blockwise numerical issues and add ROCm testing | @alextmagro | merged | 2026-09-18 | 2026-09-23 |
| [#710](https://github.com/ROCm/TransformerEngine/pull/710) | [TE] Added tests to CI | @AllenFarcas | merged | 2026-08-20 | 2026-09-22 |
| [#740](https://github.com/ROCm/TransformerEngine/pull/740) | relax gfx950 fp8 GEMM atol for forced-hipblaslt | @matthiasdiener | merged | 2026-09-21 | 2026-09-22 |
| [#738](https://github.com/ROCm/TransformerEngine/pull/738) | Update HipKittens Module with clang 24+ fixes | @alextmagro | merged | 2026-09-18 | 2026-09-22 |
| [#649](https://github.com/ROCm/TransformerEngine/pull/649) | [Feat] Added JAX-Triton bridge for ROCm | @AllenFarcas | merged | 2026-06-24 | 2026-09-21 |
| [#678](https://github.com/ROCm/TransformerEngine/pull/678) | [ROCm] Jax Add softmax sink (learnable off-by-one) support f... | @shurale-nkn | merged | 2026-07-24 | 2026-09-18 |
| [#625](https://github.com/ROCm/TransformerEngine/pull/625) | Add ROCm HIP small-seq fused attention via crossattn_hip_ker... | @VeeraRajasekhar | merged | 2026-06-15 | 2026-09-17 |
| [#732](https://github.com/ROCm/TransformerEngine/pull/732) | GFX1250 changes with updated AITER | @ipanfilo | merged | 2026-09-03 | 2026-09-16 |
| [#733](https://github.com/ROCm/TransformerEngine/pull/733) | gfx1250 mxfp8: fix dequant, reference test swizzle | @matthiasdiener | merged | 2026-09-03 | 2026-09-16 |
| [#725](https://github.com/ROCm/TransformerEngine/pull/725) | RS + GEMM overlap for BF16, gfx950, w/ HipKittens + UserBuff... | @alextmagro | merged | 2026-08-31 | 2026-09-15 |
| [#676](https://github.com/ROCm/TransformerEngine/pull/676) | Experimental FlyDSL GEMM backend for TE PyTorch (BF16/FP16/F... | @aris134 | merged | 2026-07-22 | 2026-09-11 |
| [#673](https://github.com/ROCm/TransformerEngine/pull/673) | ci: bump te-rocm-wheels artifact retention 1d -> 3d | @wenchenvincent | merged | 2026-07-17 | 2026-09-11 |
| [#715](https://github.com/ROCm/TransformerEngine/pull/715) | Do not mark replicated weights as tensor-model-parallel | @wenchenvincent | merged | 2026-08-25 | 2026-09-11 |
| [#716](https://github.com/ROCm/TransformerEngine/pull/716) | Add ROCm Triton blockwise FP8 grouped GEMM | @sudhu2k | merged | 2026-08-25 | 2026-09-10 |
| [#735](https://github.com/ROCm/TransformerEngine/pull/735) | Correctness fixes to claude.md and style specifications | @alextmagro | merged | 2026-09-09 | 2026-09-10 |
| [#697](https://github.com/ROCm/TransformerEngine/pull/697) | Integrate MXFP4 hipblaslt GEMM support | @VeeraRajasekhar | merged | 2026-08-07 | 2026-09-09 |
| [#709](https://github.com/ROCm/TransformerEngine/pull/709) | Update to new QoLA/CK-JIT/AITER | @ipanfilo | merged | 2026-08-19 | 2026-09-08 |
| [#731](https://github.com/ROCm/TransformerEngine/pull/731) | Deprecate ROCm-SMI in TE 2.17 | @ipanfilo | merged | 2026-09-02 | 2026-09-03 |
| [#729](https://github.com/ROCm/TransformerEngine/pull/729) | Deprecate ROCm-SMI | @ipanfilo | merged | 2026-09-02 | 2026-09-03 |
| [#728](https://github.com/ROCm/TransformerEngine/pull/728) | [Hot Fix] Fix OOB read in Triton MXFP8 GEMM kernel causing S... | @aris134 | merged | 2026-09-02 | 2026-09-02 |
| [#727](https://github.com/ROCm/TransformerEngine/pull/727) | Backport fixes from dev | @ipanfilo | merged | 2026-09-01 | 2026-09-02 |
| [#699](https://github.com/ROCm/TransformerEngine/pull/699) | [Fix] add rocm10 te core package support | @GeneDer | merged | 2026-08-10 | 2026-09-01 |
| [#713](https://github.com/ROCm/TransformerEngine/pull/713) | Bulk AG Overlap for bf16 on gfx950 | @alextmagro | merged | 2026-08-24 | 2026-08-30 |
| [#719](https://github.com/ROCm/TransformerEngine/pull/719) | CI: parallel download steps, bump {up,down}load-artifacts ve... | @matthiasdiener | merged | 2026-08-27 | 2026-08-29 |
| [#720](https://github.com/ROCm/TransformerEngine/pull/720) | Ifu dev 20260803 v2.18 merge | @matthiasdiener | merged | 2026-08-27 | 2026-08-28 |
| [#711](https://github.com/ROCm/TransformerEngine/pull/711) | Fix test filtering and reporting | @ipanfilo | merged | 2026-08-21 | 2026-08-27 |
| [#704](https://github.com/ROCm/TransformerEngine/pull/704) | [TE] IFU release v2.17 | @AllenFarcas | merged | 2026-08-13 | 2026-08-27 |
| [#714](https://github.com/ROCm/TransformerEngine/pull/714) | microbenchmarks: extend all to additional low-precision dtyp... | @matthiasdiener | merged | 2026-08-24 | 2026-08-26 |
| [#701](https://github.com/ROCm/TransformerEngine/pull/701) | Fix CK grouped-GEMM fallback for fused wgrad accumulation (B... | @sudhu2k | merged | 2026-08-11 | 2026-08-24 |
| [#618](https://github.com/ROCm/TransformerEngine/pull/618) | Refactored reduction kernels | @Micky774 | merged | 2026-06-08 | 2026-08-24 |
| [#707](https://github.com/ROCm/TransformerEngine/pull/707) | Persistent AG + GEMM kernels w/ HipKittens & UserBuffers | @alextmagro | merged | 2026-08-18 | 2026-08-22 |
| [#706](https://github.com/ROCm/TransformerEngine/pull/706) | Disable FlashAttention on ROCm for MLA-style unequal QK/V he... | @sudhu2k | merged | 2026-08-18 | 2026-08-21 |
| [#689](https://github.com/ROCm/TransformerEngine/pull/689) | Honor timeout settings in subprocess run wrapper | @ipanfilo | merged | 2026-08-01 | 2026-08-14 |
| [#677](https://github.com/ROCm/TransformerEngine/pull/677) | microbenchmarks: add buffer rotation option | @matthiasdiener | merged | 2026-07-23 | 2026-08-14 |
| [#698](https://github.com/ROCm/TransformerEngine/pull/698) | gfx942-only build bugfix and kittens refactor | @alextmagro | merged | 2026-08-08 | 2026-08-14 |
| [#703](https://github.com/ROCm/TransformerEngine/pull/703) | restore test_grouped_gemm_unaligned pytest | @matthiasdiener | merged | 2026-08-12 | 2026-08-13 |
| [#667](https://github.com/ROCm/TransformerEngine/pull/667) | Experimental Triton GEMM backend for TE PyTorch (BF16/FP16/F... | @wenchenvincent | merged | 2026-07-09 | 2026-08-13 |
| [#675](https://github.com/ROCm/TransformerEngine/pull/675) | gfx1250: native nvfp4 support (GEMM/RHT) | @matthiasdiener | merged | 2026-07-20 | 2026-08-13 |
| [#692](https://github.com/ROCm/TransformerEngine/pull/692) | IFU 2.17 upstream feature enablement | @AllenFarcas | merged | 2026-08-04 | 2026-08-12 |
| [#690](https://github.com/ROCm/TransformerEngine/pull/690) | Veergopu/upgrade ci rock 714 | @VeeraRajasekhar | merged | 2026-08-04 | 2026-08-10 |
| [#691](https://github.com/ROCm/TransformerEngine/pull/691) | gfx1250: fix MXFP8 scale_inv shape mismatch in C++ tests | @matthiasdiener | merged | 2026-08-04 | 2026-08-10 |
| [#687](https://github.com/ROCm/TransformerEngine/pull/687) | Consolidating blockwise FP32 scale flag | @asdfvg123 | merged | 2026-07-31 | 2026-08-08 |
| [#688](https://github.com/ROCm/TransformerEngine/pull/688) | Add pyyaml installation to ci prerequisites | @VeeraRajasekhar | merged | 2026-07-31 | 2026-08-04 |
| [#681](https://github.com/ROCm/TransformerEngine/pull/681) | Update CK-JIT to fix blob build failure if mv -no-clobber re... | @ipanfilo | merged | 2026-07-24 | 2026-08-04 |
| [#639](https://github.com/ROCm/TransformerEngine/pull/639) | grouped gemm microbenchmark: use te.GroupedLinear | @matthiasdiener | merged | 2026-06-18 | 2026-08-04 |
| [#671](https://github.com/ROCm/TransformerEngine/pull/671) | [ROCm] Add THD/ragged bf16 (atomic16) backward test coverage | @wenchenvincent | merged | 2026-07-16 | 2026-08-04 |
| [#680](https://github.com/ROCm/TransformerEngine/pull/680) | gfx942 AITER V3 split-kv kernels | @ipanfilo | merged | 2026-07-24 | 2026-08-01 |
| [#661](https://github.com/ROCm/TransformerEngine/pull/661) | Grouped MXFP8 GEMMs with HipKittens | @alextmagro | merged | 2026-07-07 | 2026-07-31 |
| [#685](https://github.com/ROCm/TransformerEngine/pull/685) | [Hot Fix] guard architectures for blockwise fp8 gemm | @asdfvg123 | merged | 2026-07-28 | 2026-07-31 |
| [#686](https://github.com/ROCm/TransformerEngine/pull/686) | cherry-pick Update CI to use TheRock (#602) | @VeeraRajasekhar | merged | 2026-07-29 | 2026-07-30 |
| [#602](https://github.com/ROCm/TransformerEngine/pull/602) | Update CI to use TheRock | @VeeraRajasekhar | merged | 2026-05-29 | 2026-07-29 |
| [#684](https://github.com/ROCm/TransformerEngine/pull/684) | Update claude model for PR review | @Micky774 | merged | 2026-07-28 | 2026-07-29 |
| [#660](https://github.com/ROCm/TransformerEngine/pull/660) | Ifu dev 20260706 v2.17 | @AllenFarcas | merged | 2026-07-07 | 2026-07-28 |
| [#682](https://github.com/ROCm/TransformerEngine/pull/682) | HipKittens MXFP8 scale lane-reordering | @alextmagro | merged | 2026-07-26 | 2026-07-28 |
| [#658](https://github.com/ROCm/TransformerEngine/pull/658) | blockwise fp8 gemm integration for gfx942 and gfx950 | @asdfvg123 | merged | 2026-07-06 | 2026-07-27 |
| [#599](https://github.com/ROCm/TransformerEngine/pull/599) | Update QoLA/AITER  | @Micky774 | merged | 2026-05-28 | 2026-07-23 |
| [#674](https://github.com/ROCm/TransformerEngine/pull/674) | Update CLAUDE.md | @Micky774 | merged | 2026-07-20 | 2026-07-23 |
| [#656](https://github.com/ROCm/TransformerEngine/pull/656) | Release 2.15 | @VeeraRajasekhar | merged | 2026-07-01 | 2026-07-20 |
| [#669](https://github.com/ROCm/TransformerEngine/pull/669) | fix spurious recompilation on incremental editable builds | @matthiasdiener | merged | 2026-07-13 | 2026-07-17 |
| [#672](https://github.com/ROCm/TransformerEngine/pull/672) | mxfp4: optimize amax-reduce xor4 with ds_swizzle | @matthiasdiener | merged | 2026-07-16 | 2026-07-17 |
| [#664](https://github.com/ROCm/TransformerEngine/pull/664) | optimize mxfp4 cast/transpose | @matthiasdiener | merged | 2026-07-07 | 2026-07-16 |
| [#662](https://github.com/ROCm/TransformerEngine/pull/662) | Added AITER V3 API check mechanism | @Micky774 | merged | 2026-07-07 | 2026-07-15 |
| [#612](https://github.com/ROCm/TransformerEngine/pull/612) | Ipanfilo/ci test fixes | @ipanfilo | merged | 2026-06-05 | 2026-07-07 |
| [#651](https://github.com/ROCm/TransformerEngine/pull/651) | Native NN and NT MXFP8 Kernels w/ HipKittens | @alextmagro | merged | 2026-06-26 | 2026-07-01 |
| [#609](https://github.com/ROCm/TransformerEngine/pull/609) | enable blockwise FP8 quantization on rocm | @asdfvg123 | merged | 2026-06-03 | 2026-07-01 |
| [#616](https://github.com/ROCm/TransformerEngine/pull/616) | Ifu dev 260419 v2.15 | @VeeraRajasekhar | merged | 2026-06-08 | 2026-06-30 |
| [#652](https://github.com/ROCm/TransformerEngine/pull/652) | hipblaslt Fallback hotfix | @alextmagro | merged | 2026-06-26 | 2026-06-30 |
| [#654](https://github.com/ROCm/TransformerEngine/pull/654) | Fix GEMM build on gfx942 | @ipanfilo | merged | 2026-06-29 | 2026-06-29 |
| [#650](https://github.com/ROCm/TransformerEngine/pull/650) | Update CK-JIT and QoLA | @ipanfilo | merged | 2026-06-25 | 2026-06-26 |
| [#566](https://github.com/ROCm/TransformerEngine/pull/566) | HipKittens MXFP8 GEMM Support | @alextmagro | merged | 2026-04-28 | 2026-06-25 |
| [#648](https://github.com/ROCm/TransformerEngine/pull/648) | Add DeepSeek shapes to C++ benchmarks | @alextmagro | merged | 2026-06-23 | 2026-06-25 |
| [#644](https://github.com/ROCm/TransformerEngine/pull/644) | reuse warmup stream for graph capture | @dnikolaev-amd | merged | 2026-06-22 | 2026-06-25 |
| [#585](https://github.com/ROCm/TransformerEngine/pull/585) | Add custom multi_tensor_apply kernels (L2norm, Adam) | @matthiasdiener | merged | 2026-05-13 | 2026-06-24 |
| [#636](https://github.com/ROCm/TransformerEngine/pull/636) | add dsv4 production mxfp8 gemm shapes | @matthiasdiener | merged | 2026-06-18 | 2026-06-24 |
| [#646](https://github.com/ROCm/TransformerEngine/pull/646) | [TE] Fix RMSNorm autotune HIP-graph related error | @AllenFarcas | merged | 2026-06-22 | 2026-06-24 |
| [#645](https://github.com/ROCm/TransformerEngine/pull/645) | Removal of the AITER submodule | @Micky774 | merged | 2026-06-22 | 2026-06-24 |
| [#641](https://github.com/ROCm/TransformerEngine/pull/641) | Added sidecar mechanism for hard-fault-/thread-kill-tolerant... | @Micky774 | merged | 2026-06-19 | 2026-06-23 |
| [#630](https://github.com/ROCm/TransformerEngine/pull/630) | gfx1250 mxfp8 gemm: add NN/NT transpose workaround | @matthiasdiener | merged | 2026-06-16 | 2026-06-23 |
| [#629](https://github.com/ROCm/TransformerEngine/pull/629) | Hotfix for Maxtext regression with JAX 0.9 changes | @ipanfilo | merged | 2026-06-16 | 2026-06-23 |
