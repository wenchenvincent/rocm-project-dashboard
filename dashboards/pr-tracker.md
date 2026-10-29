# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-10-29T14:42:42Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#202136](https://github.com/pytorch/pytorch/pull/202136) | [dynamo] Preserve equality semantics in range.count | @mottopanikeiku | open | 2026-10-26 | 2026-10-29 |
| [#202417](https://github.com/pytorch/pytorch/pull/202417) | [Draft][triton] Update Triton pin to 1b9ee7ae (prerelease 3.... | @warrendeng | draft | 2026-10-28 | 2026-10-29 |
| [#202400](https://github.com/pytorch/pytorch/pull/202400) | [ci] Install fsspec in the CI images | @ezyang | open | 2026-10-28 | 2026-10-29 |
| [#196069](https://github.com/pytorch/pytorch/pull/196069) | Expose torch.assert_async as the public name for torch._asse... | @ezyang | open | 2026-09-04 | 2026-10-29 |
| [#200757](https://github.com/pytorch/pytorch/pull/200757) | [ROCm] Add gfx1170/gfx1171 to hipBLASLt and scaled_mm arch l... | @arsic3 | open | 2026-10-13 | 2026-10-29 |
| [#202203](https://github.com/pytorch/pytorch/pull/202203) | [ROCm] Fix FlyDSL HTI wave-group DMA synchronization | @xytpai | open | 2026-10-27 | 2026-10-29 |
| [#195021](https://github.com/pytorch/pytorch/pull/195021) | [headeronly] migrate complex_math | @cleonard530 | open | 2026-08-27 | 2026-10-29 |
| [#193168](https://github.com/pytorch/pytorch/pull/193168) | [FSDP] Stabilize fully_shard overlap timing test | @albmalamd | open | 2026-08-12 | 2026-10-29 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-10-29 |
| [#202258](https://github.com/pytorch/pytorch/pull/202258) | [precompile] A Dynamo artifact imports the modules that regi... | @bobrenjc93 | open | 2026-10-27 | 2026-10-29 |
| [#202255](https://github.com/pytorch/pytorch/pull/202255) | [precompile] Autotune Triton kernels at compile time during ... | @bobrenjc93 | open | 2026-10-27 | 2026-10-29 |
| [#199787](https://github.com/pytorch/pytorch/pull/199787) | [dynamo] Model gi_frame and its f_back for generators that a... | @weicheng-hsu | open | 2026-10-05 | 2026-10-29 |
| [#199818](https://github.com/pytorch/pytorch/pull/199818) | [Inductor] Autotune TMA against pointer loads for pointwise ... | @oonyshch | open | 2026-10-05 | 2026-10-29 |
| [#200409](https://github.com/pytorch/pytorch/pull/200409) | [ROCm][CI] Add ROCm preview nightly wheels | @ethanwee1 | draft | 2026-10-09 | 2026-10-29 |
| [#200094](https://github.com/pytorch/pytorch/pull/200094) | [_native] Tune reduction launch policies for B200 | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200093](https://github.com/pytorch/pytorch/pull/200093) | [_native] Derive uniform inner-tree Welford counts | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200091](https://github.com/pytorch/pytorch/pull/200091) | [_native] Parallelize general Welford thread folds | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200096](https://github.com/pytorch/pytorch/pull/200096) | [_native] Override core CUDA reductions with CuTeDSL | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#199418](https://github.com/pytorch/pytorch/pull/199418) | symm_mem: Complete per-group stream serialization for NCCL a... | @stmcgovern | open | 2026-10-02 | 2026-10-29 |
| [#200090](https://github.com/pytorch/pytorch/pull/200090) | [_native] Vectorize aligned ragged row interiors | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200087](https://github.com/pytorch/pytorch/pull/200087) | [_native] Extend ordered column reductions to split plans | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200085](https://github.com/pytorch/pytorch/pull/200085) | [_native] Configure column partial-combine geometry | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#202454](https://github.com/pytorch/pytorch/pull/202454) | [ROCm] Enable triton rocshmem alltoall and broadcast | @zjliu-amd | draft | 2026-10-28 | 2026-10-29 |
| [#195750](https://github.com/pytorch/pytorch/pull/195750) | Adjust tolerance in test_forward_nn_LinearCrossEntropyLoss f... | @kdrozd-dev | open | 2026-09-02 | 2026-10-29 |
| [#200086](https://github.com/pytorch/pytorch/pull/200086) | [_native] Add ordered column reductions | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#197197](https://github.com/pytorch/pytorch/pull/197197) | [CPU] Reduce contiguous topk partial_sort working set | @WBurggraaf | open | 2026-09-16 | 2026-10-29 |
| [#197775](https://github.com/pytorch/pytorch/pull/197775) | Make Inductor WOQ quantization fusions extensible to third-p... | @guohaifei-cmyk | open | 2026-09-20 | 2026-10-29 |
| [#189387](https://github.com/pytorch/pytorch/pull/189387) | [Test] Bring `@modules` out-of-tree backend support | @can-gaa-hou | open | 2026-07-09 | 2026-10-29 |
| [#202402](https://github.com/pytorch/pytorch/pull/202402) | [ci] Don't rebuild a docker image whose tag already exists | @ezyang | open | 2026-10-28 | 2026-10-29 |
| [#200092](https://github.com/pytorch/pytorch/pull/200092) | [_native] Group equal-count column Welford folds | @slayton58 | draft | 2026-10-07 | 2026-10-29 |
| [#200640](https://github.com/pytorch/pytorch/pull/200640) | [ROCm]: Added Platform-Specific Configuration Structs to CK-... | @TheRealMichaelWang | open | 2026-10-12 | 2026-10-29 |
| [#202228](https://github.com/pytorch/pytorch/pull/202228) | [AOTI] Add a CUDA graph manager to the AOTI runtime | @desertfire | draft | 2026-10-27 | 2026-10-29 |
| [#202227](https://github.com/pytorch/pytorch/pull/202227) | [AOTI] Add CUDA graph capture to the C shim | @desertfire | draft | 2026-10-27 | 2026-10-29 |
| [#198032](https://github.com/pytorch/pytorch/pull/198032) | [ROCm] Parallelize grid_sampler_2d backward across channels | @glen-amd | open | 2026-09-21 | 2026-10-29 |
| [#202538](https://github.com/pytorch/pytorch/pull/202538) | [ROCm] Zero-fill MIOpen CTC loss grad for padded time steps | @amd-maradosa | open | 2026-10-29 | 2026-10-29 |
| [#202297](https://github.com/pytorch/pytorch/pull/202297) | [inductor] Fix "Input tensor must have contiguous last dimen... | @echen4096 | open | 2026-10-27 | 2026-10-29 |
| [#201190](https://github.com/pytorch/pytorch/pull/201190) | ATen: Enable ROCm rowwise BF16 scaled_addmm (#201190) | @goldcoderZ | open | 2026-10-16 | 2026-10-29 |
| [#202518](https://github.com/pytorch/pytorch/pull/202518) | [ROCm] Do not pass /usr/include to HIP extension builds | @pablo-garay | draft | 2026-10-29 | 2026-10-29 |
| [#202517](https://github.com/pytorch/pytorch/pull/202517) | [ROCm] Sort a copy of bool inputs instead of normalizing the... | @pablo-garay | draft | 2026-10-29 | 2026-10-29 |
| [#202192](https://github.com/pytorch/pytorch/pull/202192) | [ROCm] Add mx fp8 and fp4 block size 32 and nvfp4 block size... | @jagadish-amd | draft | 2026-10-27 | 2026-10-29 |
| [#198950](https://github.com/pytorch/pytorch/pull/198950) | [dynamo] Enable nested graph breaks by default in OSS | @williamwen42 | open | 2026-09-28 | 2026-10-29 |
| [#202130](https://github.com/pytorch/pytorch/pull/202130) | [FSDP2] Do not capture a structured binding in fused_chunk_c... | @amanguptaBay | open | 2026-10-26 | 2026-10-29 |
| [#201122](https://github.com/pytorch/pytorch/pull/201122) | Re-enabling Origami for all ROCm versions and updating rocm_... | @umechand-amd | open | 2026-10-15 | 2026-10-29 |
| [#198949](https://github.com/pytorch/pytorch/pull/198949) | [dynamo] Enable nested graph breaks in PyTorch tests | @williamwen42 | open | 2026-09-28 | 2026-10-29 |
| [#202475](https://github.com/pytorch/pytorch/pull/202475) | [ROCm] Add gfx1250 to list of supported architectures for sy... | @chinmaydk99 | draft | 2026-10-29 | 2026-10-29 |
| [#202503](https://github.com/pytorch/pytorch/pull/202503) | [ROCm][Windows] Keep MSVC extra_cflags off the hipcc command... | @thiagocrepaldi | open | 2026-10-29 | 2026-10-29 |
| [#202501](https://github.com/pytorch/pytorch/pull/202501) | [ROCm] Build rocSHMEM support for gfx1250 | @chinmaydk99 | draft | 2026-10-29 | 2026-10-29 |
| [#200296](https://github.com/pytorch/pytorch/pull/200296) | [kineto][rocm] Source kernel dims from dispatch records; rep... | @mwootton | open | 2026-10-08 | 2026-10-29 |
| [#198962](https://github.com/pytorch/pytorch/pull/198962) | [dynamo] Enable nested graph breaks in benchmark runners | @williamwen42 | open | 2026-09-28 | 2026-10-29 |
| [#197571](https://github.com/pytorch/pytorch/pull/197571) | [ROCm] Fix race condition in test_cuda GDS tests, add stream... | @john00003 | draft | 2026-09-18 | 2026-10-29 |
| [#192986](https://github.com/pytorch/pytorch/pull/192986) | [Testcase Refactoring] Split TestLookupTable and migrate to ... | @leewayx | draft | 2026-08-11 | 2026-10-29 |
| [#202146](https://github.com/pytorch/pytorch/pull/202146) | Add jithunnair-amd to the ROCm merge rule and expand its fil... | @jeffdaily | open | 2026-10-26 | 2026-10-29 |
| [#201881](https://github.com/pytorch/pytorch/pull/201881) | Add function name to hip runtime event in rocprofielr-sdk | @devalshahamd | open | 2026-10-23 | 2026-10-28 |
| [#201578](https://github.com/pytorch/pytorch/pull/201578) | Bump pillow from 12.3.0 to 13.0.0 in /.ci/docker | @dependabot[bot] | merged | 2026-10-20 | 2026-10-27 |
| [#201197](https://github.com/pytorch/pytorch/pull/201197) | [Pipeline] Use microbatched reference in test_schedule_relea... | @pytorchbot | merged | 2026-10-16 | 2026-10-19 |
| [#201037](https://github.com/pytorch/pytorch/pull/201037) | [MPS] Prescale Jacobi SVD by the largest entry (#200776) | @Isalia20 | merged | 2026-10-15 | 2026-10-19 |
| [#200896](https://github.com/pytorch/pytorch/pull/200896) | [c10d][nccl2] Fix nccl symmetric mempool registration for nc... | @pytorchbot | merged | 2026-10-14 | 2026-10-14 |
| [#200681](https://github.com/pytorch/pytorch/pull/200681) | [CD] Remove redundant CPython 3.15 builds from all affected ... | @pytorchbot | merged | 2026-10-12 | 2026-10-13 |
| [#200320](https://github.com/pytorch/pytorch/pull/200320) | [CD] Depend on triton for Python 3.15 wheels and smoke-test ... | @pytorchbot | merged | 2026-10-08 | 2026-10-08 |
| [#200157](https://github.com/pytorch/pytorch/pull/200157) | [ROCm] Remove stale exp/silu inductor_default xfails after T... | @pytorchbot | merged | 2026-10-07 | 2026-10-08 |
| [#198666](https://github.com/pytorch/pytorch/pull/198666) | [release/2.14] Run the release runner-group reconcile in pyt... | @atalman | merged | 2026-09-25 | 2026-09-29 |
| [#198644](https://github.com/pytorch/pytorch/pull/198644) | [release/2.14] [CD] Update to CUDA 13.2.2 for Linux binaries | @atalman | merged | 2026-09-25 | 2026-09-25 |
| [#194821](https://github.com/pytorch/pytorch/pull/194821) | Bump the Python 3.15 numpy pin to 2.5.2 | @pytorchbot | merged | 2026-08-25 | 2026-08-26 |
| [#194235](https://github.com/pytorch/pytorch/pull/194235) | [release/2.14] Update torch-xpu-ops commit pin | @chuanqi129 | merged | 2026-08-20 | 2026-08-24 |
| [#194374](https://github.com/pytorch/pytorch/pull/194374) | [release/2.14] Remove CUDA 13.4 from the binary build matrix | @atalman | merged | 2026-08-21 | 2026-08-21 |
| [#193836](https://github.com/pytorch/pytorch/pull/193836) | [pytorch][PR] Migrate fastAtomicAdd to headeronly (#193176) ... | @pytorchbot | merged | 2026-08-17 | 2026-08-19 |
| [#193601](https://github.com/pytorch/pytorch/pull/193601) | [ROCm] Retry VecISA dlopen probe with import torch on cold l... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#193600](https://github.com/pytorch/pytorch/pull/193600) | [ROCm] Rewrite bundled-lib NEEDED entries after all libs are... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#193443](https://github.com/pytorch/pytorch/pull/193443) | [torch][autograd] Fix Python refcount leaks in autograd C++ ... | @pytorchbot | merged | 2026-08-13 | 2026-08-17 |
| [#193596](https://github.com/pytorch/pytorch/pull/193596) | [ROCm][libtorch] Bundle ROCm SDK deps for shared-with-deps e... | @pytorchbot | merged | 2026-08-14 | 2026-08-17 |
| [#192019](https://github.com/pytorch/pytorch/pull/192019) | Bump aiohttp from 3.14.1 to 3.14.3 in /.ci/docker | @dependabot[bot] | merged | 2026-08-04 | 2026-08-14 |
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

## jax (Upstream Watch)
Repo: `jax-ml/jax` | Last collected: 2026-10-29T14:42:49Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#41703](https://github.com/jax-ml/jax/pull/41703) | [DO NOT MERGE][ROCm] Migrate Pytest ROCm lane to rocmless co... | @gulsumgudukbay | draft | 2026-10-16 | 2026-10-29 |
| [#42067](https://github.com/jax-ml/jax/pull/42067) | [ROCm] Enable remote compilation for jax | @alekstheod | open | 2026-10-28 | 2026-10-29 |
| [#41986](https://github.com/jax-ml/jax/pull/41986) | [ROCm] Exclude lax_scipy_special_functions_test_gpu from ROC... | @psanal35 | merged | 2026-10-26 | 2026-10-27 |
| [#41881](https://github.com/jax-ml/jax/pull/41881) | [ROCm] Enable remote compilation for jax in rocm rbe | @alekstheod | open | 2026-10-22 | 2026-10-22 |
| [#41815](https://github.com/jax-ml/jax/pull/41815) | [ROCm] Switch the pinned ROCm CI legs from 10.0 to 10.1 | @magaonka-amd | draft | 2026-10-20 | 2026-10-21 |
| [#41230](https://github.com/jax-ml/jax/pull/41230) | [ROCM]  Add TheRock `rocm_sysdeps/lib` to wheel RUNPATHs nee... | @pemeliya | merged | 2026-10-02 | 2026-10-21 |
| [#41702](https://github.com/jax-ml/jax/pull/41702) | [ROCm] Trim wheel RUNPATH: drop deprecated per-family and de... | @gulsumgudukbay | draft | 2026-10-16 | 2026-10-19 |
| [#41331](https://github.com/jax-ml/jax/pull/41331) | Add jax[rocm] extras that install ROCm from AMD's package in... | @AratiGanesh | merged | 2026-10-07 | 2026-10-17 |
| [#41660](https://github.com/jax-ml/jax/pull/41660) | [ROCm][Triton] Fix race on the HSACO file in GetModuleImage | @mminutoli | merged | 2026-10-15 | 2026-10-16 |
| [#41341](https://github.com/jax-ml/jax/pull/41341) | [ROCm] dev mxfp4 recipe | @ScXfjiang | merged | 2026-10-07 | 2026-10-14 |
| [#41508](https://github.com/jax-ml/jax/pull/41508) | [ROCm] Scale pytest workers by compute partition mode | @magaonka-amd | merged | 2026-10-12 | 2026-10-13 |
| [#41233](https://github.com/jax-ml/jax/pull/41233) | Switch to new RBE cluster for ROCm Bazel tests | @charleshofer | merged | 2026-10-02 | 2026-10-06 |
| [#39419](https://github.com/jax-ml/jax/pull/39419) | [ROCm] Fix invalid parallel local jobs execution | @alekstheod | open | 2026-07-24 | 2026-10-06 |
| [#41305](https://github.com/jax-ml/jax/pull/41305) | [ROCm] Enable thunky on ROCm | @gulsumgudukbay | merged | 2026-10-06 | 2026-10-06 |
| [#41310](https://github.com/jax-ml/jax/pull/41310) | [ROCm] Switch to rocm_library from rules_ml_toolchain | @alekstheod | merged | 2026-10-06 | 2026-10-06 |
| [#41231](https://github.com/jax-ml/jax/pull/41231) | [ROCm] Fix copy file build to fix rbe build failures with no... | @alekstheod | open | 2026-10-02 | 2026-10-06 |
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
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-10-29T14:43:02Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#55398](https://github.com/vllm-project/vllm/pull/55398) | [6/N] HiSparse: support direct GPU landing for P/D transfers | @MatthewBonanni | open | 2026-09-04 | 2026-10-29 |
| [#63551](https://github.com/vllm-project/vllm/pull/63551) | [Bugfix][KV Offload] Protect the step's reported HITs from p... | @jsboige | open | 2026-10-25 | 2026-10-29 |
| [#63524](https://github.com/vllm-project/vllm/pull/63524) | [Bugfix][KV Offload] Report only written blocks from fs tier... | @AdvayMonga | open | 2026-10-25 | 2026-10-29 |
| [#64378](https://github.com/vllm-project/vllm/pull/64378) | [ROCm][Quantization] NVFP4 MoE re-quantization and fused sha... | @zyongye | open | 2026-10-28 | 2026-10-29 |
| [#61056](https://github.com/vllm-project/vllm/pull/61056) | [KV Connector][NIXL] Batch host-buffer KV block copies on CU... | @Thinkash | open | 2026-10-11 | 2026-10-29 |
| [#61054](https://github.com/vllm-project/vllm/pull/61054) | [Bugfix][KV Offload] Pass device pointers of host-registered... | @jerry102039 | open | 2026-10-11 | 2026-10-29 |
| [#61076](https://github.com/vllm-project/vllm/pull/61076) | [RL] Add configurable staging and parallel stage pulls to sh... | @GalMeiromN | open | 2026-10-11 | 2026-10-29 |
| [#54757](https://github.com/vllm-project/vllm/pull/54757) | [Bugfix][NIXL] Harden handshake listener against bad request... | @jdonkervliet | open | 2026-09-01 | 2026-10-29 |
| [#62932](https://github.com/vllm-project/vllm/pull/62932) | [KV Offload] Bound staged loads by primary tier capacity | @javieratomic | open | 2026-10-21 | 2026-10-29 |
| [#64241](https://github.com/vllm-project/vllm/pull/64241) | [CI] Pin existing dependency hashes and enforce immutable re... | @jperezdealgaba | open | 2026-10-28 | 2026-10-29 |
| [#54578](https://github.com/vllm-project/vllm/pull/54578) | [Core][KVConnector] Async CPU KV-offload initialization | @NickLucche | draft | 2026-08-31 | 2026-10-29 |
| [#63618](https://github.com/vllm-project/vllm/pull/63618) | [Bugfix][KV Offload] Let idle P2P-only engines park | @albertoperdomo2 | open | 2026-10-25 | 2026-10-29 |
| [#59467](https://github.com/vllm-project/vllm/pull/59467) | [Kernel][Fusion] Fuse GELU-tanh+Mul with NVFP4 quantization ... | @toan-tq | open | 2026-09-30 | 2026-10-29 |
| [#58780](https://github.com/vllm-project/vllm/pull/58780) | [Bugfix][Parser] Stream DeepSeek V4/V3.2 string tool argumen... | @jayzuccarelli | merged | 2026-09-25 | 2026-10-29 |
| [#62996](https://github.com/vllm-project/vllm/pull/62996) | [ROCm][Tests] Un-skip AITER MXFP4 padding-matrix and token-p... | @divakar-amd | open | 2026-10-21 | 2026-10-29 |
| [#59124](https://github.com/vllm-project/vllm/pull/59124) | [ROCm][Perf][MLA] Add opt-in FlyDSL FP8 prefill attention fo... | @gbyu-amd | open | 2026-09-29 | 2026-10-29 |
| [#61939](https://github.com/vllm-project/vllm/pull/61939) | [ROCm] Revamp CI/release deployment: collapse image tiers, u... | @AndreasKaratzas | open | 2026-10-16 | 2026-10-29 |
| [#63910](https://github.com/vllm-project/vllm/pull/63910) | [ROCm][Perf][GLM-5.3-Flash] Drop int32/int64 copies in the k... | @amd-sriram | draft | 2026-10-27 | 2026-10-29 |
| [#63072](https://github.com/vllm-project/vllm/pull/63072) | [ROCm][GLM-5.3-Flash] Pass precomputed chunk indices to chun... | @zhentaocc | draft | 2026-10-22 | 2026-10-29 |
| [#63086](https://github.com/vllm-project/vllm/pull/63086) | [ROCm][Kimi-K3] Enable torch.compile and encoder graph captu... | @samutamm | open | 2026-10-22 | 2026-10-29 |
| [#62259](https://github.com/vllm-project/vllm/pull/62259) | [Tool Parser] Fix truncated/unclosed DSML parameters and add... | @deep1blue | open | 2026-10-18 | 2026-10-29 |
| [#60102](https://github.com/vllm-project/vllm/pull/60102) | [ROCm][DSv4.1][Perf] Route gfx942 sparse MLA prefill to AITE... | @frida-andersson | open | 2026-10-05 | 2026-10-29 |
| [#61311](https://github.com/vllm-project/vllm/pull/61311) | [Core] Shared abstractions for specialized decode kernels | @simondanielsson | open | 2026-10-13 | 2026-10-29 |
| [#63838](https://github.com/vllm-project/vllm/pull/63838) | [ROCm][Kimi-K3] Keep the AttnRes block bank in a persistent ... | @josh-schell-amd | draft | 2026-10-26 | 2026-10-29 |
| [#63403](https://github.com/vllm-project/vllm/pull/63403) | Graph profiling retained workspace - same as #57865 | @GodRishUniverse | open | 2026-10-23 | 2026-10-29 |
| [#64506](https://github.com/vllm-project/vllm/pull/64506) | [Bugfix][Model] Nemotron 3.5 Super VL: support the native tr... | @roikoren755 | merged | 2026-10-29 | 2026-10-29 |
| [#64428](https://github.com/vllm-project/vllm/pull/64428) | [ROCm][DP] QuickReduce combine for allgather/reducescatter M... | @Fangzhou-Ai | draft | 2026-10-29 | 2026-10-29 |
| [#63566](https://github.com/vllm-project/vllm/pull/63566) | [Bugfix][KV Offload] Pin a shared-prefix junction when a spa... | @KaloyanNaumov | merged | 2026-10-25 | 2026-10-29 |
| [#63788](https://github.com/vllm-project/vllm/pull/63788) | [Bugfix][KV Offload][OBJ] Don't lose a completed transfer wh... | @sungsooha | merged | 2026-10-26 | 2026-10-29 |
| [#55828](https://github.com/vllm-project/vllm/pull/55828) | [Core] Size the KV cache from this process's own device memo... | @twu3202 | open | 2026-09-08 | 2026-10-29 |
| [#59099](https://github.com/vllm-project/vllm/pull/59099) | [Bugfix][KV Offload] Make reset_cache re-entrant | @sohom-cs | open | 2026-09-28 | 2026-10-29 |
| [#63401](https://github.com/vllm-project/vllm/pull/63401) | [Bugfix][ROCm][MRV2] Measure CUDA graph memory with the proc... | @GodRishUniverse | draft | 2026-10-23 | 2026-10-29 |
| [#63801](https://github.com/vllm-project/vllm/pull/63801) | [Perf][HiSparse] Prefetch speculative groups with bounded co... | @zhenwenqi2024 | open | 2026-10-26 | 2026-10-29 |
| [#63249](https://github.com/vllm-project/vllm/pull/63249) | [Bugfix][KV Offload] Preserve stored event prefix order | @Alex-ai-future | open | 2026-10-23 | 2026-10-29 |
| [#64236](https://github.com/vllm-project/vllm/pull/64236) | [Bugfix][KV Offload] Defer async loads in mixed steps | @Alex-ai-future | open | 2026-10-28 | 2026-10-29 |
| [#64400](https://github.com/vllm-project/vllm/pull/64400) | [Bugfix][KV Offload] Deduplicate in-flight partial-tail load... | @waizuichougou | open | 2026-10-29 | 2026-10-29 |
| [#58962](https://github.com/vllm-project/vllm/pull/58962) | [ROCM][KVConnector][MoRIIO] Add WRITE-mode consumer timeout | @amirakb89 | open | 2026-09-28 | 2026-10-29 |
| [#60229](https://github.com/vllm-project/vllm/pull/60229) | [Spec Decode][GLM-5.3-Flash] Support adaptive verification | @jonahsamost | merged | 2026-10-06 | 2026-10-29 |
| [#64251](https://github.com/vllm-project/vllm/pull/64251) | [Bugfix][KV Offload][P2P] Fault a peer whose source WRITE st... | @liranschour | merged | 2026-10-28 | 2026-10-29 |
| [#59322](https://github.com/vllm-project/vllm/pull/59322) | [Perf][KV Offload] Avoid repeated hash-prefix scans | @milesial | merged | 2026-09-30 | 2026-10-29 |
| [#64031](https://github.com/vllm-project/vllm/pull/64031) | [ROCm][Perf][Kimi-K3] DSpark Markov sampling sharded over th... | @hyukjlee | open | 2026-10-27 | 2026-10-29 |
| [#51406](https://github.com/vllm-project/vllm/pull/51406) | [ROCm] Enable fused QK-norm+RoPE+gate Triton kernel for Qwen... | @xuebwang | open | 2026-08-07 | 2026-10-29 |
| [#62560](https://github.com/vllm-project/vllm/pull/62560) | [Core][MRV2] Warm up the sampler after CUDA graph capture to... | @GodRishUniverse | open | 2026-10-19 | 2026-10-29 |
| [#59780](https://github.com/vllm-project/vllm/pull/59780) | [CI] Run watermarking tests on GPU nightly | @simon-veitner-redhat | draft | 2026-10-02 | 2026-10-29 |
| [#63816](https://github.com/vllm-project/vllm/pull/63816) | [Bugfix][ROCm][DSv4.1] Guard NaN scores in gfx942 mono routi... | @frida-andersson | open | 2026-10-26 | 2026-10-29 |
| [#64279](https://github.com/vllm-project/vllm/pull/64279) | [Bugfix][Compile] Fix KV-cache corruption under whole-graph ... | @ericschreiber | merged | 2026-10-28 | 2026-10-29 |
| [#62750](https://github.com/vllm-project/vllm/pull/62750) | [Quantization] Block Hadamard input rotation for linear laye... | @mjkvaak-amd | open | 2026-10-20 | 2026-10-29 |
| [#64481](https://github.com/vllm-project/vllm/pull/64481) | [Perf][GLM-5.3] Enable GLM low-latency BF16 GEMM on SM100 | @namgyu-youn | merged | 2026-10-29 | 2026-10-29 |
| [#63835](https://github.com/vllm-project/vllm/pull/63835) | [ROCm][Perf][Bugfix] wvSplitK: launch tiles of their own for... | @roberteg16 | open | 2026-10-26 | 2026-10-29 |
| [#64331](https://github.com/vllm-project/vllm/pull/64331) | [ROCm][RDNA][Perf] Bump triton_kernels to ROCm 3.8.x with th... | @umarkovi-amd | open | 2026-10-28 | 2026-10-29 |
| [#56450](https://github.com/vllm-project/vllm/pull/56450) | [ROCm][Perf] Encoder prefill attention on gfx1151: split-D h... | @roberteg16 | open | 2026-09-11 | 2026-10-29 |
| [#56307](https://github.com/vllm-project/vllm/pull/56307) | [ROCm][Kernel] New "hip" GDN backend for gfx1151 | @roberteg16 | open | 2026-09-10 | 2026-10-29 |
| [#62503](https://github.com/vllm-project/vllm/pull/62503) | [Perf][GDN] Add opt-in parallel inverse with fused zero stor... | @rowanbyte | open | 2026-10-19 | 2026-10-29 |
| [#63937](https://github.com/vllm-project/vllm/pull/63937) | [Bugfix][KV Offload] Do not offload the partially computed b... | @sohom-cs | merged | 2026-10-27 | 2026-10-29 |
| [#64501](https://github.com/vllm-project/vllm/pull/64501) | [Bugfix][KV Offload][P2P] Prefill locally while a peer hands... | @liranschour | merged | 2026-10-29 | 2026-10-29 |
| [#51605](https://github.com/vllm-project/vllm/pull/51605) | [XPU][MoE] Resize batched Triton MoE tiles and change grid o... | @oonyshch | merged | 2026-08-10 | 2026-10-29 |
| [#57662](https://github.com/vllm-project/vllm/pull/57662) | [Bugfix][NIXL] Dedup transfer regions by (base_addr, block_l... | @G-haoyu | merged | 2026-09-19 | 2026-10-29 |
| [#64423](https://github.com/vllm-project/vllm/pull/64423) | [Bugfix][ROCm][DBO] Create hipBLASLt handles in microbatch t... | @AndreasKaratzas | merged | 2026-10-29 | 2026-10-29 |
| [#64169](https://github.com/vllm-project/vllm/pull/64169) | [Mistral] Use get_grammar_for_chat_request in MistralParser ... | @juliendenize | merged | 2026-10-28 | 2026-10-29 |
| [#63585](https://github.com/vllm-project/vllm/pull/63585) | [Model] Support Ming3-ASR (inclusionAI/Ming-3.0-asr-tiny) | @yuanheng-zhao | merged | 2026-10-25 | 2026-10-29 |
| [#61091](https://github.com/vllm-project/vllm/pull/61091) | [ROCm][Perf] Add native per-token FP8 Triton linear backend ... | @big-yellow-duck | open | 2026-10-11 | 2026-10-29 |
| [#64424](https://github.com/vllm-project/vllm/pull/64424) | [ROCm] Enable Gemma 4 image-prefix attention in ROCM_SEGMENT... | @big-yellow-duck | open | 2026-10-29 | 2026-10-29 |
| [#60400](https://github.com/vllm-project/vllm/pull/60400) | [ROCm][Perf] GDN packed decode: tuned launch configs for gfx... | @nemanjaudovic | open | 2026-10-07 | 2026-10-29 |
| [#63218](https://github.com/vllm-project/vllm/pull/63218) | [Bugfix] Default Nemotron Omni mamba_ssm_cache_dtype to floa... | @jbottleson-nvidia | merged | 2026-10-22 | 2026-10-29 |
| [#60163](https://github.com/vllm-project/vllm/pull/60163) | [Bugfix][Quantization] Fix Humming FP8 linear for per-tensor... | @Manfredss | merged | 2026-10-06 | 2026-10-29 |
| [#61777](https://github.com/vllm-project/vllm/pull/61777) | [Bugfix][Bench] Aggregate DP running requests for profiling | @qianlihuang | merged | 2026-10-15 | 2026-10-29 |
| [#63896](https://github.com/vllm-project/vllm/pull/63896) | [Frontend] Support thinking_token_budget in the Responses AP... | @Vegetog | merged | 2026-10-27 | 2026-10-29 |
| [#64390](https://github.com/vllm-project/vllm/pull/64390) | [Bugfix][Rust Frontend] Rust vllm-bench accepts --max-concur... | @SIDDARTHAREDDY8 | merged | 2026-10-29 | 2026-10-29 |
| [#64008](https://github.com/vllm-project/vllm/pull/64008) | [ROCm][Perf] Reuse compiled FlyDSL host launchers | @coderfeli | merged | 2026-10-27 | 2026-10-29 |
| [#63179](https://github.com/vllm-project/vllm/pull/63179) | [ROCm] Fuse tiny-M MXFP8 quant into the block32 GEMM; guard ... | @alexm-redhat | merged | 2026-10-22 | 2026-10-29 |
| [#59802](https://github.com/vllm-project/vllm/pull/59802) | [ROCm][DSv4.1][Perf] Overlap the mHC gate projection with at... | @cpersson-amd | open | 2026-10-02 | 2026-10-29 |
| [#62500](https://github.com/vllm-project/vllm/pull/62500) | [Docs] Add vllm-iluvatar to custom_op.md | @rexlee8776 | merged | 2026-10-19 | 2026-10-29 |
| [#64482](https://github.com/vllm-project/vllm/pull/64482) | [Perf][Qwen3.8] Add SM100 skinny GEMM plans for TP=1 | @namgyu-youn | merged | 2026-10-29 | 2026-10-29 |
| [#64474](https://github.com/vllm-project/vllm/pull/64474) | [Doc] Fix MiniMax-M3 docstring cross-references | @freyfwt | merged | 2026-10-29 | 2026-10-29 |
| [#57900](https://github.com/vllm-project/vllm/pull/57900) | [ROCm][Bugfix] Make the RoPE + KV-cache fusion reachable thr... | @ZhengGong-amd | open | 2026-09-21 | 2026-10-29 |
| [#64345](https://github.com/vllm-project/vllm/pull/64345) | [Performance][KV Offload] Avoid zero-filling the SimpleCPUOf... | @SherifWaly | merged | 2026-10-28 | 2026-10-29 |
| [#56995](https://github.com/vllm-project/vllm/pull/56995) | [Bugfix][Spec Decode] Implement get_top_tokens() on the gene... | @ZhengGong-amd | open | 2026-09-15 | 2026-10-29 |
| [#62444](https://github.com/vllm-project/vllm/pull/62444) | [Bugfix][KV Offload] Refresh CPU LRU for GPU-hit prefixes in... | @whx-sjtu | merged | 2026-10-19 | 2026-10-29 |
| [#64280](https://github.com/vllm-project/vllm/pull/64280) | [Bugfix][MRV2] Release the allocator cache between adaptive ... | @tuukkjs | open | 2026-10-28 | 2026-10-29 |
| [#56996](https://github.com/vllm-project/vllm/pull/56996) | [Perf][Attention] Source Triton metadata builder geometry fr... | @ZhengGong-amd | open | 2026-09-15 | 2026-10-29 |
| [#61795](https://github.com/vllm-project/vllm/pull/61795) | [UMBP][7/10] Add standalone mode backed by a node-local serv... | @charxwu | open | 2026-10-15 | 2026-10-29 |
| [#64419](https://github.com/vllm-project/vllm/pull/64419) | [Perf][GDN] Allocate GDN core output uninitialized, write Fl... | @gau-nernst | merged | 2026-10-29 | 2026-10-29 |
| [#64137](https://github.com/vllm-project/vllm/pull/64137) | [Bugfix][Spec Decode] Don't specialize MRV2 logits-stats ker... | @ayush1399 | merged | 2026-10-27 | 2026-10-29 |
| [#63053](https://github.com/vllm-project/vllm/pull/63053) | [CI][ROCM][Bug] Elastic DP doesn't work with AITER-on | @qli88 | merged | 2026-10-22 | 2026-10-29 |
| [#61433](https://github.com/vllm-project/vllm/pull/61433) | [ROCm][Spec Decode] Rank unified attention above ROCM_ATTN f... | @zhentaocc | draft | 2026-10-13 | 2026-10-29 |
| [#59938](https://github.com/vllm-project/vllm/pull/59938) | [XPU] use multimodal_rotary_embedding xpu kernel for mrope | @yma11 | merged | 2026-10-04 | 2026-10-29 |
| [#64375](https://github.com/vllm-project/vllm/pull/64375) | [ROCm][RDNA][Perf] W4A16: fused scale/zero-point carrier for... | @stoivonen-amd | draft | 2026-10-28 | 2026-10-29 |
| [#59437](https://github.com/vllm-project/vllm/pull/59437) | [ROCm][Perf] AITER FlyDSL kernels for the QSA indexer and sp... | @mjkvaak-amd | draft | 2026-09-30 | 2026-10-29 |
| [#63457](https://github.com/vllm-project/vllm/pull/63457) | [Hardware] Use accelerator APIs in weight transfer | @Ronald1995 | merged | 2026-10-24 | 2026-10-29 |
| [#64407](https://github.com/vllm-project/vllm/pull/64407) | [Bugfix][ROCm] attention: Bound AITER FA varlen graph suppor... | @larryli2-amd | draft | 2026-10-29 | 2026-10-29 |
| [#62797](https://github.com/vllm-project/vllm/pull/62797) | [Bugfix][LoRA] Reject non-linear expert placement with EP | @gc-fu | merged | 2026-10-21 | 2026-10-29 |
| [#58139](https://github.com/vllm-project/vllm/pull/58139) | [Bugfix][ROCm] Force Triton MXFP4 for 96-row ASM scale tiles | @abrahamzewoudie | open | 2026-09-22 | 2026-10-29 |
| [#63528](https://github.com/vllm-project/vllm/pull/63528) | [ROCm][MiniMax-M3.1] Improve TP4 decode and native INT4 redu... | @Fangzhou-Ai | draft | 2026-10-25 | 2026-10-29 |
| [#57569](https://github.com/vllm-project/vllm/pull/57569) | [Perf][KV Offload] Calibrate the DMA/Triton load cutoff at h... | @hyunnnchoi | open | 2026-09-18 | 2026-10-29 |
| [#52838](https://github.com/vllm-project/vllm/pull/52838) | [Bugfix][AMD] A GPU-CPU KV transfer fault in OffloadingConne... | @okorzh-amd | merged | 2026-08-18 | 2026-10-29 |
| [#57925](https://github.com/vllm-project/vllm/pull/57925) | [ROCm][DO NOT MERGE] RDNA3 (gfx1100) full inference stack — ... | @JartX | draft | 2026-09-21 | 2026-10-29 |
| [#62270](https://github.com/vllm-project/vllm/pull/62270) | [ROCm][Perf][MiniMax-M3] Enable the fp8 indexer cache on gfx... | @akii96 | open | 2026-10-18 | 2026-10-29 |
| [#61434](https://github.com/vllm-project/vllm/pull/61434) | [Perf][Spec Decode] Defer GDN spec decode state stores to th... | @zhentaocc | open | 2026-10-13 | 2026-10-29 |
| [#60358](https://github.com/vllm-project/vllm/pull/60358) | [ROCm] [Feat] Enable HiSparse on ROCm | @tjtanaa | draft | 2026-10-07 | 2026-10-29 |
| [#64111](https://github.com/vllm-project/vllm/pull/64111) | [New Model] Add MiniMax-M3.1-Flash Model and Kernels | @zyongye | merged | 2026-10-27 | 2026-10-29 |
| [#63878](https://github.com/vllm-project/vllm/pull/63878) | [ROCm][Perf][DSA] Honor skip_kv_gather in the ROCm sparse-in... | @MohitAMD | open | 2026-10-27 | 2026-10-29 |
| [#56492](https://github.com/vllm-project/vllm/pull/56492) | [Core] Extensible KV cache | @njhill | open | 2026-09-11 | 2026-10-29 |
| [#64098](https://github.com/vllm-project/vllm/pull/64098) | [ROCm] Bound DeepSeek V4 steady-state memory on gfx1151 | @keneoneth | open | 2026-10-27 | 2026-10-29 |
| [#60477](https://github.com/vllm-project/vllm/pull/60477) | [Bugfix] DSA: all-reduce partial hidden_states before PP sen... | @SumanthRH | merged | 2026-10-07 | 2026-10-29 |
| [#62298](https://github.com/vllm-project/vllm/pull/62298) | [CI][ROCm] Run ROCm-capable tests that are currently skipped... | @AndreasKaratzas | open | 2026-10-18 | 2026-10-29 |
| [#63069](https://github.com/vllm-project/vllm/pull/63069) | [Bugfix][ROCm] Let ROCM_ATTN share the BLHNC KV cache layout | @zhentaocc | draft | 2026-10-22 | 2026-10-29 |
| [#62666](https://github.com/vllm-project/vllm/pull/62666) | [ROCm][Perf] Extend ROCM_SEGMENTED_ATTN to D=512 for Gemma 4 | @big-yellow-duck | open | 2026-10-20 | 2026-10-29 |
| [#63915](https://github.com/vllm-project/vllm/pull/63915) | [ROCm][Perf] Fuse MXFP8 activation quant into the 1x32 dot_s... | @RuibinCheung | merged | 2026-10-27 | 2026-10-29 |
| [#62905](https://github.com/vllm-project/vllm/pull/62905) | [KV Connector][NIXL] Add a ucx_backend_params key for UCX ba... | @jbelofamd | merged | 2026-10-21 | 2026-10-29 |
| [#61529](https://github.com/vllm-project/vllm/pull/61529) | [ROCm][Qwen4Exp] Enable fp8 KV and indexer caches on the AMD... | @mrodden | merged | 2026-10-13 | 2026-10-29 |
| [#64064](https://github.com/vllm-project/vllm/pull/64064) | [ROCm][Model] Enable ROCm AITER unified attention for MiMo-V... | @vllmellm | merged | 2026-10-27 | 2026-10-29 |
| [#62990](https://github.com/vllm-project/vllm/pull/62990) | [ROCm][Kimi-K3] Allow DSpark adaptive verification with DCP ... | @okorzh-amd | merged | 2026-10-21 | 2026-10-29 |
| [#64259](https://github.com/vllm-project/vllm/pull/64259) | [CI][Bugfix] Fit the MLA backend bf16 atol to a bf16 SDPA re... | @AndreasKaratzas | merged | 2026-10-28 | 2026-10-29 |
| [#64377](https://github.com/vllm-project/vllm/pull/64377) | [CI][ROCm] Drop nvidia-cuda-cccl from the ROCm test lockfile... | @AndreasKaratzas | merged | 2026-10-28 | 2026-10-29 |
| [#64387](https://github.com/vllm-project/vllm/pull/64387) | [CI] Import the merge-base commit's image cache in PR builds | @khluu | merged | 2026-10-29 | 2026-10-29 |
| [#64010](https://github.com/vllm-project/vllm/pull/64010) | [CI] Re-enable disabled jobs whose installs are already lock... | @khluu | merged | 2026-10-27 | 2026-10-28 |
| [#63637](https://github.com/vllm-project/vllm/pull/63637) | [ROCm][MiniMax-M3.1] Fuse MXFP8 activation quant into the Ge... | @RuibinCheung | merged | 2026-10-26 | 2026-10-28 |
| [#63042](https://github.com/vllm-project/vllm/pull/63042) | [MyPy][8/N] Enable strict checking for model test subdirecto... | @luyixiao95 | merged | 2026-10-22 | 2026-10-28 |
| [#47017](https://github.com/vllm-project/vllm/pull/47017) | [ROCm] Enable DeepSeek-V4 on gfx11 | @JoursBleu | merged | 2026-06-29 | 2026-10-28 |
| [#64302](https://github.com/vllm-project/vllm/pull/64302) | [CI] Exclude nvidia-cuda-cccl from the ROCm test lockfile | @hmellor | merged | 2026-10-28 | 2026-10-28 |
| [#52970](https://github.com/vllm-project/vllm/pull/52970) | [ROCm][aiter] officially supporting aiter Triton kernels+dsv... | @amd-xavierwang | merged | 2026-08-19 | 2026-10-28 |
| [#61457](https://github.com/vllm-project/vllm/pull/61457) | [Quantization] Enable per-layer fused shared expert selectio... | @fxmarty-amd | merged | 2026-10-13 | 2026-10-28 |
| [#60710](https://github.com/vllm-project/vllm/pull/60710) | [ROCm][Perf] W4A16: opt-in dense weight cache for RDNA hybri... | @zohaibm-amd | merged | 2026-10-08 | 2026-10-28 |
| [#63735](https://github.com/vllm-project/vllm/pull/63735) | [Bugfix][Perf][ROCm] RDNA launch config for kernel_paged_att... | @lijipeng787 | merged | 2026-10-26 | 2026-10-28 |
| [#57015](https://github.com/vllm-project/vllm/pull/57015) | [ROCm][Perf] W4A16: widen skinny GEMM LDS activation loads t... | @roberteg16 | merged | 2026-09-15 | 2026-10-27 |
| [#63332](https://github.com/vllm-project/vllm/pull/63332) | [ROCm][Recipe] Qwen3.8-Flash-Next: add MI355X Quark MXFP4 va... | @mjkvaak-amd | merged | 2026-10-23 | 2026-10-27 |
| [#63833](https://github.com/vllm-project/vllm/pull/63833) | [Bugfix][ROCm] Wait on per-slot events in packed NCCL consum... | @dharak-cohere | merged | 2026-10-26 | 2026-10-27 |
| [#63475](https://github.com/vllm-project/vllm/pull/63475) | [Bugfix][Kernel] persistent_topk: sync the CTA around radix ... | @AndreasKaratzas | merged | 2026-10-24 | 2026-10-26 |
| [#60644](https://github.com/vllm-project/vllm/pull/60644) | [ROCm][RDNA][Perf] W4A16: packed fp16 prefill dequant and ti... | @stoivonen-amd | merged | 2026-10-08 | 2026-10-26 |
| [#59478](https://github.com/vllm-project/vllm/pull/59478) | [ROCm][Perf] Use AITER FlyDSL INT4 QuickReduce when INT4 Qui... | @mjkvaak-amd | merged | 2026-09-30 | 2026-10-26 |
| [#59774](https://github.com/vllm-project/vllm/pull/59774) | [ROCm] Octave KV (`ROCM_OCTAVE`): native 3-bit KV cache back... | @JartX | merged | 2026-10-02 | 2026-10-26 |
| [#63609](https://github.com/vllm-project/vllm/pull/63609) | [CI] Disable jobs with unpinned runtime installs | @khluu | merged | 2026-10-25 | 2026-10-25 |
| [#63266](https://github.com/vllm-project/vllm/pull/63266) | [Bugfix][KV Offload] Reject misaligned chunked-local CPU suf... | @charxwu | merged | 2026-10-23 | 2026-10-25 |
| [#60413](https://github.com/vllm-project/vllm/pull/60413) | [Perf][ROCm][Kernel] Add W4A8 int8-dot MXFP4 GEMV for RDNA3/... | @xiao-llm | merged | 2026-10-07 | 2026-10-24 |
| [#57909](https://github.com/vllm-project/vllm/pull/57909) | [ROCm][PERF] Enable MiniMax-M3 Indexer CP | @ukannika | merged | 2026-09-21 | 2026-10-24 |
| [#59100](https://github.com/vllm-project/vllm/pull/59100) | [CI][ROCm] Export kernel source maps for CI selection | @AndreasKaratzas | merged | 2026-09-28 | 2026-10-24 |
| [#58743](https://github.com/vllm-project/vllm/pull/58743) | [ROCm][Kimi-K3] Support BF16 KDA recurrent state | @YukioZzz | merged | 2026-09-25 | 2026-10-23 |
| [#61855](https://github.com/vllm-project/vllm/pull/61855) | [ROCm][Perf] Triton port of the fused GDN MTP decode kernel | @iseeyuan | merged | 2026-10-15 | 2026-10-23 |
| [#60834](https://github.com/vllm-project/vllm/pull/60834) | [ROCm][Perf] Apply opt-in paged MXFP4 sparse indexer dense p... | @shen-shanshan | merged | 2026-10-09 | 2026-10-23 |
| [#63105](https://github.com/vllm-project/vllm/pull/63105) | [ROCm][Build] Reland #62475: paged attention kernel split wi... | @fxmarty-amd | merged | 2026-10-22 | 2026-10-22 |
| [#62983](https://github.com/vllm-project/vllm/pull/62983) | [ROCm] Revert "[ROCm][Build] Compile paged attention kernels... | @micah-wil | merged | 2026-10-21 | 2026-10-22 |
| [#57481](https://github.com/vllm-project/vllm/pull/57481) | [ROCm] Capture CUDA graphs with expandable segments off for ... | @okorzh-amd | merged | 2026-09-18 | 2026-10-22 |
| [#62475](https://github.com/vllm-project/vllm/pull/62475) | [ROCm][Build] Compile paged attention kernels in parallel (7... | @fxmarty-amd | merged | 2026-10-19 | 2026-10-21 |
| [#58509](https://github.com/vllm-project/vllm/pull/58509) | [ROCm][Perf] HY4 preview perf boost | @qli88 | merged | 2026-09-24 | 2026-10-21 |
| [#61726](https://github.com/vllm-project/vllm/pull/61726) | [Bugfix][ROCm][MoRIIO] Support heterogeneous TP in WRITE mod... | @junkang1991 | merged | 2026-10-15 | 2026-10-20 |
| [#59737](https://github.com/vllm-project/vllm/pull/59737) | [Perf] Enable PDL for fused MoE top-k gating | @wolfcomos | merged | 2026-10-02 | 2026-10-19 |
| [#53987](https://github.com/vllm-project/vllm/pull/53987) | [Spec Decode][ROCm] Add FLy: entropy-gated deferred verifica... | @eecspan | merged | 2026-08-27 | 2026-10-19 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-10-29T14:43:18Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#47241](https://github.com/sgl-project/sglang/pull/47241) | [Perf] [AMD] dsv4: Speed up the gfx950 swap-AB decode attent... | @anhminhnguyenhoang | draft | 2026-10-29 | 2026-10-29 |
| [#47283](https://github.com/sgl-project/sglang/pull/47283) | [Fix] [AMD] deepseek-v4: Respect AITER selection for Q-LoRA ... | @lunarwhite | open | 2026-10-29 | 2026-10-29 |
| [#40825](https://github.com/sgl-project/sglang/pull/40825) | [Feat] [NPU] kimi-k3: Support DCP with shared compact commun... | @qybnb | open | 2026-09-23 | 2026-10-29 |
| [#33638](https://github.com/sgl-project/sglang/pull/33638) | [DO NOT MERGE] [Test] elastic-ep: Register Mooncake recovery... | @UNIDY2002 | open | 2026-08-05 | 2026-10-29 |
| [#47286](https://github.com/sgl-project/sglang/pull/47286) | [Fix] attention: Skip the MSA-v1 QMUL4 prefill case when QMU... | @EricKing626 | open | 2026-10-29 | 2026-10-29 |
| [#46964](https://github.com/sgl-project/sglang/pull/46964) | [Feat] diffusion: Support Hy-Nomas INT8 DiT and FP8 VAE chec... | @trebladev | open | 2026-10-28 | 2026-10-29 |
| [#46255](https://github.com/sgl-project/sglang/pull/46255) | [Fix] diffusion: LoRA alpha reload, auto-mode skip, critic c... | @OnePunchMonk | open | 2026-10-24 | 2026-10-29 |
| [#39071](https://github.com/sgl-project/sglang/pull/39071) | [Perf] [AMD] qknorm: Use the fused in-place QK norm kernel o... | @ZhengGong-amd | open | 2026-09-11 | 2026-10-29 |
| [#43136](https://github.com/sgl-project/sglang/pull/43136) | [Perf] dcp: Slice gathered MHA prefixes with host offsets | @yuychang | open | 2026-10-08 | 2026-10-29 |
| [#45727](https://github.com/sgl-project/sglang/pull/45727) | [Feat] hisparse: Support shared KV sources in HiSparse MLA s... | @bingps | open | 2026-10-22 | 2026-10-29 |
| [#46486](https://github.com/sgl-project/sglang/pull/46486) | [Perf] [AMD] dsa: Run the GLM-5 decode MLA chain as Gluon ke... | @qiongz | open | 2026-10-26 | 2026-10-29 |
| [#47237](https://github.com/sgl-project/sglang/pull/47237) | [Fix] dsa: Refuse the trtllm backend at launch on CUDA outsi... | @xulunfan | draft | 2026-10-29 | 2026-10-29 |
| [#47260](https://github.com/sgl-project/sglang/pull/47260) | [Perf] detokenizer: Send per-request decode inputs once and ... | @hnyls2002 | open | 2026-10-29 | 2026-10-29 |
| [#47204](https://github.com/sgl-project/sglang/pull/47204) | [Chore] deps: Bump transformers to 5.22.0 | @adarshxs | open | 2026-10-29 | 2026-10-29 |
| [#47285](https://github.com/sgl-project/sglang/pull/47285) | [Fix] cookbook: fix the new page's playground facts and repr... | @JustinTong0323 | open | 2026-10-29 | 2026-10-29 |
| [#46868](https://github.com/sgl-project/sglang/pull/46868) | [Feat] minimax-m3.1: Support DSpark on Hopper | @ispobock | open | 2026-10-27 | 2026-10-29 |
| [#47281](https://github.com/sgl-project/sglang/pull/47281) | [Feat] sensenova_loop: Add multimodal Loop and mHC inference | @WANDY666 | draft | 2026-10-29 | 2026-10-29 |
| [#46059](https://github.com/sgl-project/sglang/pull/46059) | [Fix] [AMD] qwen3_5: Rotate the online MXFP4 GDN projections... | @omirosh | draft | 2026-10-23 | 2026-10-29 |
| [#46026](https://github.com/sgl-project/sglang/pull/46026) | [Feat] [NPU] DeepSeek-V4: Adapt Mooncake L3 | @gjsheu | open | 2026-10-23 | 2026-10-29 |
| [#47284](https://github.com/sgl-project/sglang/pull/47284) | [Fix] jit: Use the ninja package's binary when ninja is not ... | @saivenukiran | open | 2026-10-29 | 2026-10-29 |
| [#46062](https://github.com/sgl-project/sglang/pull/46062) | [Perf] [NVIDIA] deepseek-v4.1: Zero the MegaAttention packed... | @akhilg-nv | open | 2026-10-23 | 2026-10-29 |
| [#46048](https://github.com/sgl-project/sglang/pull/46048) | [Doc] diffusion: validate convrot_int8 on Wan2.2 A14B (T2V &... | @ankitdhall | open | 2026-10-23 | 2026-10-29 |
| [#45802](https://github.com/sgl-project/sglang/pull/45802) | [Fix] [AMD] quark: Skip no-copy loads after MXFP4 quantizati... | @lunarwhite | merged | 2026-10-22 | 2026-10-29 |
| [#46500](https://github.com/sgl-project/sglang/pull/46500) | [Feat] LoRA: revamp LoRADrainer for better performance | @glenliu21 | open | 2026-10-26 | 2026-10-29 |
| [#47271](https://github.com/sgl-project/sglang/pull/47271) | [Feat] Mistral-Large-4: add model support | @JustinTong0323 | open | 2026-10-29 | 2026-10-29 |
| [#43996](https://github.com/sgl-project/sglang/pull/43996) | [Feat] [NPU] speculative: support NGRAM decoding for MHA and... | @McZyWu | open | 2026-10-13 | 2026-10-29 |
| [#38724](https://github.com/sgl-project/sglang/pull/38724) | [Feature] MXFP4 KV Cache for Qwen3.5/3.8 (MHA) on SM120 | @Eightina | open | 2026-09-09 | 2026-10-29 |
| [#45800](https://github.com/sgl-project/sglang/pull/45800) | [Fix] GLM: Preserve NextN PTPC quantization for excluded exp... | @lunarwhite | merged | 2026-10-22 | 2026-10-29 |
| [#45765](https://github.com/sgl-project/sglang/pull/45765) | [Feat] glm5: Expose per-layer MLA key buffer and use_fused_t... | @Torches97 | merged | 2026-10-22 | 2026-10-29 |
| [#38440](https://github.com/sgl-project/sglang/pull/38440) | [Feat] [NPU] DSpark: DeepSeek-V4 support DSpark compact mode | @randgun | open | 2026-09-08 | 2026-10-29 |
| [#47036](https://github.com/sgl-project/sglang/pull/47036) | [Perf] [AMD] kda: Run gfx950 KDA prefill extend on AITER Glu... | @yuychang | open | 2026-10-28 | 2026-10-29 |
| [#47270](https://github.com/sgl-project/sglang/pull/47270) | [Perf] diffusion: replay LTX head-gate and RMSNorm launches | @mickqian | draft | 2026-10-29 | 2026-10-29 |
| [#47282](https://github.com/sgl-project/sglang/pull/47282) | [PD] Start bootstrap server before launching prefill schedul... | @limarkdcunha | draft | 2026-10-29 | 2026-10-29 |
| [#47280](https://github.com/sgl-project/sglang/pull/47280) | [Fix] sampling: Count the stop_regex window bound in UTF-8 b... | @v0ropaev | open | 2026-10-29 | 2026-10-29 |
| [#47092](https://github.com/sgl-project/sglang/pull/47092) | [Fix] diffusion: fix colored seams in single-GPU Qwen-Image-... | @tristan-me | merged | 2026-10-28 | 2026-10-29 |
| [#47279](https://github.com/sgl-project/sglang/pull/47279) | [Feat] dflash: Support Nemotron Bolt E4B BF16 GGUF drafters | @rystewart-nvidia | open | 2026-10-29 | 2026-10-29 |
| [#46211](https://github.com/sgl-project/sglang/pull/46211) | [Perf] speculative: opt-in step CUDA graph and fused verify ... | @nvrohanv | draft | 2026-10-24 | 2026-10-29 |
| [#46210](https://github.com/sgl-project/sglang/pull/46210) | [Feat] [NVIDIA] megakernels: DSA / MLA binding view, EAGLE d... | @nvrohanv | draft | 2026-10-24 | 2026-10-29 |
| [#47254](https://github.com/sgl-project/sglang/pull/47254) | [Fix] [AMD] attention: default consumer RDNA to Triton atten... | @vivienfanghuagood | open | 2026-10-29 | 2026-10-29 |
| [#31137](https://github.com/sgl-project/sglang/pull/31137) | [AMD] sgl-kernel: enable gfx1151 (RDNA3.5 / Strix Halo) for ... | @ankith117 | open | 2026-07-14 | 2026-10-29 |
| [#41677](https://github.com/sgl-project/sglang/pull/41677) | [Perf] [AMD] qwen3_5: enable GDN fused decode projection+Con... | @sushildubey171 | open | 2026-09-29 | 2026-10-29 |
| [#47278](https://github.com/sgl-project/sglang/pull/47278) | [Perf] [AMD] dsa: gfx950 split-K decode plan for 64-head fp8... | @dorado269 | open | 2026-10-29 | 2026-10-29 |
| [#47212](https://github.com/sgl-project/sglang/pull/47212) | [Doc] cookbook: Add a new cookbook page (WIP) | @JustinTong0323 | merged | 2026-10-29 | 2026-10-29 |
| [#47276](https://github.com/sgl-project/sglang/pull/47276) | [Perf] [AMD] dsa: Faster gfx950 fused indexer logits and top... | @dorado269 | open | 2026-10-29 | 2026-10-29 |
| [#40583](https://github.com/sgl-project/sglang/pull/40583) | [Perf] [AMD] norm: Pick the wave count per hidden size in di... | @avjves | open | 2026-09-21 | 2026-10-29 |
| [#41683](https://github.com/sgl-project/sglang/pull/41683) | [Perf] [AMD] qwen3_5: use strided GDN prefill projection vie... | @sushildubey171 | open | 2026-09-29 | 2026-10-29 |
| [#47180](https://github.com/sgl-project/sglang/pull/47180) | [Perf] [AMD] dsa: Replicate the DCP query projection on the ... | @EricKing626 | open | 2026-10-29 | 2026-10-29 |
| [#42119](https://github.com/sgl-project/sglang/pull/42119) | [Feat] [AMD] quantization: enable GPTQ and AutoRound INT4 ch... | @clintg6 | open | 2026-10-01 | 2026-10-29 |
| [#45751](https://github.com/sgl-project/sglang/pull/45751) | [Feat] moe: Integrate EvenMoE expert placement and replica r... | @xutizhou | open | 2026-10-22 | 2026-10-29 |
| [#47116](https://github.com/sgl-project/sglang/pull/47116) | [Fix] usage: Clamp reasoning tokens after stop truncation | @yhyang201 | merged | 2026-10-28 | 2026-10-29 |
| [#45488](https://github.com/sgl-project/sglang/pull/45488) | [Fix] [NVIDIA] kvcache: Gate fused FP8 prefix-valid commit k... | @Andy365-365 | open | 2026-10-21 | 2026-10-29 |
| [#47217](https://github.com/sgl-project/sglang/pull/47217) | [Fix] [NPU] docker: Bump SGLANG_KERNEL_NPU_TAG to 2026.9.0.p... | @huangxiaojun15 | merged | 2026-10-29 | 2026-10-29 |
| [#45885](https://github.com/sgl-project/sglang/pull/45885) | [Feat] nemotron3-embed: Support Nemotron-3-Embed embedding m... | @anmolgupt | open | 2026-10-22 | 2026-10-29 |
| [#46912](https://github.com/sgl-project/sglang/pull/46912) | [Fix] [AMD] attention: size the Lean decode KV tile to the d... | @Woody-Hu | open | 2026-10-28 | 2026-10-29 |
| [#45951](https://github.com/sgl-project/sglang/pull/45951) | [Perf] LoRA: improve throughput and GPU memory usage for mul... | @glenliu21 | merged | 2026-10-23 | 2026-10-29 |
| [#44659](https://github.com/sgl-project/sglang/pull/44659) | [Perf] [AMD] GLM5: Row-streaming KDA packed decode on gfx950 | @Raiden-Makoto | open | 2026-10-16 | 2026-10-29 |
| [#46023](https://github.com/sgl-project/sglang/pull/46023) | [Perf] [NVIDIA] deepseek_v4: Route 4- and 8-group wo_a prefi... | @akhilg-nv | open | 2026-10-23 | 2026-10-29 |
| [#47115](https://github.com/sgl-project/sglang/pull/47115) | [Perf] moe: Fill padded rows of large narrow buffers with a ... | @metamergebot | open | 2026-10-28 | 2026-10-29 |
| [#47045](https://github.com/sgl-project/sglang/pull/47045) | [Fix] disaggregation: Agree on each prefill KV transfer's ou... | @whybeyoung | merged | 2026-10-28 | 2026-10-29 |
| [#32964](https://github.com/sgl-project/sglang/pull/32964) | [AMD] Add gfx1201 fallbacks for failing MoE kernels | @tamascode | open | 2026-07-30 | 2026-10-29 |
| [#46851](https://github.com/sgl-project/sglang/pull/46851) | [Fix] dspark/MiniMax-M3.1-Flash: Inject decode-step draft KV... | @thanhhao98 | merged | 2026-10-27 | 2026-10-29 |
| [#44265](https://github.com/sgl-project/sglang/pull/44265) | [Feat] [AMD] dsv4: Dispatch Mega-mHC prefill to aiter on gfx... | @stahtine | open | 2026-10-14 | 2026-10-29 |
| [#47127](https://github.com/sgl-project/sglang/pull/47127) | [Fix] mem_cache: Build an empty KVLayerRouter from empty lay... | @akhilg-nv | merged | 2026-10-28 | 2026-10-29 |
| [#42388](https://github.com/sgl-project/sglang/pull/42388) | [GDN] Add --enable-linear-lossless-verify: bit-exact tuple r... | @hsthe29 | open | 2026-10-03 | 2026-10-29 |
| [#41389](https://github.com/sgl-project/sglang/pull/41389) | [Feat] [AMD] Quark: Run Quark MXFP4 MoE as W4A16 via triton_... | @yichiche | open | 2026-09-27 | 2026-10-29 |
| [#47261](https://github.com/sgl-project/sglang/pull/47261) | [Fix] attention: Keep fused RoPE KV writes off DCP layouts | @LLLL114 | open | 2026-10-29 | 2026-10-29 |
| [#44725](https://github.com/sgl-project/sglang/pull/44725) | [Fix] minimax_h3: Support out-of-tree platforms | @labAxiaoming | open | 2026-10-16 | 2026-10-29 |
| [#45540](https://github.com/sgl-project/sglang/pull/45540) | [Perf] [AMD] layernorm: Use torch rms_norm in the HIP fallba... | @twoask | open | 2026-10-21 | 2026-10-29 |
| [#41573](https://github.com/sgl-project/sglang/pull/41573) | [Fix] [AMD] mimo-v2.6: Enable MXFP4 on ROCm | @pbkowalski | open | 2026-09-28 | 2026-10-29 |
| [#45332](https://github.com/sgl-project/sglang/pull/45332) | [Fix] [AMD] quark: Load MXFP4 MoE checkpoints on gfx95 and g... | @ZhengGong-amd | open | 2026-10-20 | 2026-10-29 |
| [#47246](https://github.com/sgl-project/sglang/pull/47246) | [CI] slash-command: Write the /run-cpu-ci result back to its... | @ShangmingCai | merged | 2026-10-29 | 2026-10-29 |
| [#44316](https://github.com/sgl-project/sglang/pull/44316) | [Fix] sglang-radix-tree: Upgrade to PyO3 0.29 for Python 3.1... | @nemanjaudovic | merged | 2026-10-14 | 2026-10-29 |
| [#47063](https://github.com/sgl-project/sglang/pull/47063) | [Fix] disaggregation: Agree on each decode KV transfer's out... | @ShangmingCai | merged | 2026-10-28 | 2026-10-29 |
| [#46027](https://github.com/sgl-project/sglang/pull/46027) | [Fix] pp: Post the first rank's output recv after its own fo... | @ehuaa | merged | 2026-10-23 | 2026-10-29 |
| [#47238](https://github.com/sgl-project/sglang/pull/47238) | [CI] [AMD] workflows: Run scheduled Extra tests, stop skippi... | @bingxche | closed | 2026-10-29 | 2026-10-29 |
| [#47022](https://github.com/sgl-project/sglang/pull/47022) | [Perf] joy-image: Fuse image MLP GELU on SM120 in high quali... | @BBuf | merged | 2026-10-28 | 2026-10-29 |
| [#47230](https://github.com/sgl-project/sglang/pull/47230) | [CI] [NPU] coverage: Automated OBS baseline upload and retry... | @chenyang08056032 | merged | 2026-10-29 | 2026-10-29 |
| [#46212](https://github.com/sgl-project/sglang/pull/46212) | [Feat] [NPU] Quant: support Qwen3.6-35B-A3B-FP8 which is blo... | @hanwlax | merged | 2026-10-24 | 2026-10-29 |
| [#46737](https://github.com/sgl-project/sglang/pull/46737) | [Fix] cuda_graph: Release base storage held by empty break i... | @BBuf | merged | 2026-10-27 | 2026-10-29 |
| [#47162](https://github.com/sgl-project/sglang/pull/47162) | [CI] [AMD] ci: Spread out tests and prefer today's images | @michaelzhang-ai | merged | 2026-10-29 | 2026-10-29 |
| [#46722](https://github.com/sgl-project/sglang/pull/46722) | [Perf] [AMD] diffusion: Optimize the Wan VAE decode for gfx1... | @yichiche | merged | 2026-10-27 | 2026-10-29 |
| [#35955](https://github.com/sgl-project/sglang/pull/35955) | [Fix] gptq_marlin: Fix BF16 dtype and TP act-order w2 scales... | @EanWang211123 | merged | 2026-08-22 | 2026-10-29 |
| [#47176](https://github.com/sgl-project/sglang/pull/47176) | [Doc] diffusion: Index HY-Nomas and FastH3 Omni | @mickqian | merged | 2026-10-29 | 2026-10-29 |
| [#47061](https://github.com/sgl-project/sglang/pull/47061) | [Fix] [NPU] kimi-k3: fix npu fused_sigmoid_gating_delta_rule | @zhaozx-cn | merged | 2026-10-28 | 2026-10-29 |
| [#46709](https://github.com/sgl-project/sglang/pull/46709) | [Refactor] diffusion/bcg: Share graph-pool output management | @mickqian | merged | 2026-10-27 | 2026-10-29 |
| [#47055](https://github.com/sgl-project/sglang/pull/47055) | [Feat] diffusion/openai: Cancel video jobs on DELETE | @HaimRozen | merged | 2026-10-28 | 2026-10-29 |
| [#35151](https://github.com/sgl-project/sglang/pull/35151) | [Feat] [AMD] diffusion: Add quantized attention backends for... | @avjves | merged | 2026-08-17 | 2026-10-29 |
| [#47197](https://github.com/sgl-project/sglang/pull/47197) | [Fix] hicache: Isolate NIXL storage tests from background ev... | @alphabetc1 | merged | 2026-10-29 | 2026-10-29 |
| [#45946](https://github.com/sgl-project/sglang/pull/45946) | [Feat] sail: support sail fa3 and flashmla [3/N] | @Vinsmoke86 | merged | 2026-10-23 | 2026-10-29 |
| [#46780](https://github.com/sgl-project/sglang/pull/46780) | [Feat] rust: Parse DeepSeek-V4/V4.1 output with deepseek-rec... | @hnyls2002 | merged | 2026-10-27 | 2026-10-29 |
| [#44465](https://github.com/sgl-project/sglang/pull/44465) | [Perf] [AMD] dsv41: Drop the per-step whole-vocab gather of ... | @1am9trash | merged | 2026-10-15 | 2026-10-29 |
| [#46723](https://github.com/sgl-project/sglang/pull/46723) | [Perf] [AMD] diffusion: Replace the gfx1250 bf16 scale-shift... | @yichiche | merged | 2026-10-27 | 2026-10-29 |
| [#46840](https://github.com/sgl-project/sglang/pull/46840) | [Fix] dspark: Keep the real verify accept cost under simulat... | @weireweire | merged | 2026-10-27 | 2026-10-29 |
| [#44455](https://github.com/sgl-project/sglang/pull/44455) | [Perf] [AMD] lm_head: Use aiter tgemm for the bf16 lm_head o... | @jiaryang | merged | 2026-10-15 | 2026-10-29 |
| [#46703](https://github.com/sgl-project/sglang/pull/46703) | [CI] [AMD] install: Cache the AOT kernel wheel and stop wipi... | @michaelzhang-ai | merged | 2026-10-27 | 2026-10-28 |
| [#46889](https://github.com/sgl-project/sglang/pull/46889) | [Test] [AMD] diffusion: Compute the VAE blend test's fp16 re... | @michaelzhang-ai | merged | 2026-10-27 | 2026-10-28 |
| [#44322](https://github.com/sgl-project/sglang/pull/44322) | [Feat] [AMD] dsa: Enable DCP on the triton sparse-MLA backen... | @EricKing626 | merged | 2026-10-14 | 2026-10-28 |
| [#46861](https://github.com/sgl-project/sglang/pull/46861) | [Fix] [AMD] memory_pool: Keep K and V in separate allocation... | @omirosh | merged | 2026-10-27 | 2026-10-28 |
| [#41696](https://github.com/sgl-project/sglang/pull/41696) | [Fix] [AMD] dsa: Limit AITER decode metadata to the active b... | @pbkowalski | merged | 2026-09-29 | 2026-10-28 |
| [#46159](https://github.com/sgl-project/sglang/pull/46159) | [Perf] batch-invariant: Fused residual add + RMSNorm kernel | @aarnetalman | merged | 2026-10-23 | 2026-10-28 |
| [#46835](https://github.com/sgl-project/sglang/pull/46835) | [Perf] dsv4: Skip the copy when the page-index table is alre... | @akhilg-nv | merged | 2026-10-27 | 2026-10-28 |
| [#33916](https://github.com/sgl-project/sglang/pull/33916) | [Perf] [AMD] kimi-k3: Remove per-layer copies from the aiter... | @RolaoDenthu | merged | 2026-08-07 | 2026-10-28 |
| [#46897](https://github.com/sgl-project/sglang/pull/46897) | [Fix] dsv4: Let the DSpark draft prep run without host lengt... | @hnyls2002 | merged | 2026-10-27 | 2026-10-28 |
| [#44292](https://github.com/sgl-project/sglang/pull/44292) | [Feat] [AMD] torch-profiler: Enable torch.profiler GPU traci... | @yctseng0211 | merged | 2026-10-14 | 2026-10-28 |
| [#33250](https://github.com/sgl-project/sglang/pull/33250) | [Fix] deepseek-v4: Fix DeepSeek-V4 non-EP TBO for attention ... | @mikekg | merged | 2026-08-02 | 2026-10-27 |
| [#44797](https://github.com/sgl-project/sglang/pull/44797) | [Fix] [AMD] moe/topk: Preserve fp32 bias across aiter routin... | @Kylinny | merged | 2026-10-16 | 2026-10-27 |
| [#46497](https://github.com/sgl-project/sglang/pull/46497) | [Perf] eplb: Fuse expert-count recording into one kernel on ... | @weireweire | merged | 2026-10-26 | 2026-10-27 |
| [#43839](https://github.com/sgl-project/sglang/pull/43839) | [Perf] [AMD] qwen3_5: Quantize the BF16 GDN projections to M... | @omirosh | merged | 2026-10-12 | 2026-10-27 |
| [#46792](https://github.com/sgl-project/sglang/pull/46792) | [Refactor] bcg: Delete capture leftovers and rename `capture... | @hnyls2002 | merged | 2026-10-27 | 2026-10-27 |
| [#44676](https://github.com/sgl-project/sglang/pull/44676) | [Feat] dflash: Serve SpecForge MLA drafts through the target... | @maocheng23 | merged | 2026-10-16 | 2026-10-27 |
| [#46785](https://github.com/sgl-project/sglang/pull/46785) | [CI] [AMD] docker: Build MORI into the ROCm 10.1 gfx1250 ima... | @yctseng0211 | merged | 2026-10-27 | 2026-10-27 |
| [#46366](https://github.com/sgl-project/sglang/pull/46366) | [Perf] [AMD] diffusion: Route large BF16 linears to the FlyD... | @yichiche | merged | 2026-10-25 | 2026-10-27 |
| [#45445](https://github.com/sgl-project/sglang/pull/45445) | [Fix] http_server: Make SageMaker /ping reflect server readi... | @shijie-lyu | merged | 2026-10-20 | 2026-10-27 |
| [#45739](https://github.com/sgl-project/sglang/pull/45739) | [Perf] [AMD] Qwen3-Next: fused QK Gemma RMSNorm + partial Ro... | @karverma-amd | merged | 2026-10-22 | 2026-10-27 |
| [#46718](https://github.com/sgl-project/sglang/pull/46718) | [Refactor] dsv4: Set the tail source KV layer id in a captur... | @hnyls2002 | merged | 2026-10-27 | 2026-10-27 |
| [#46396](https://github.com/sgl-project/sglang/pull/46396) | [CI] [AMD] diffusion: Skip the Wan CuTe DSL q/k norm RoPE im... | @michaelzhang-ai | merged | 2026-10-25 | 2026-10-27 |
| [#42090](https://github.com/sgl-project/sglang/pull/42090) | [Feat] [AMD] gpt-oss: Enable MXFP4 with Triton kernels on RO... | @nemanjaudovic | merged | 2026-10-01 | 2026-10-26 |
| [#45254](https://github.com/sgl-project/sglang/pull/45254) | [Feat] kernels: Beam model support | @Jiminator | merged | 2026-10-19 | 2026-10-26 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-10-29T14:43:25Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#12530](https://github.com/triton-lang/triton/pull/12530) | [AMD][AOT] Fix zero-sized grid handling in HIP wrapper | @JecksonWu | merged | 2026-10-28 | 2026-10-29 |
| [#12534](https://github.com/triton-lang/triton/pull/12534) | [AMD][BACKEND] Tighten TDM verifiers | @AlexAUT | merged | 2026-10-28 | 2026-10-29 |
| [#12539](https://github.com/triton-lang/triton/pull/12539) | [AMD][Gluon] Check MXFP GEMM prefetches in LLVM IR | @bangtianliu | merged | 2026-10-28 | 2026-10-29 |
| [#12362](https://github.com/triton-lang/triton/pull/12362) | [AMD] Fix AMD codegen rebuilds after LLVM dependency updates | @willghatch | open | 2026-10-19 | 2026-10-28 |
| [#12536](https://github.com/triton-lang/triton/pull/12536) | [AMD] Publish llc from the code generator's LLVM so the DAG ... | @tyb0807 | open | 2026-10-28 | 2026-10-28 |
| [#12528](https://github.com/triton-lang/triton/pull/12528) | [AMD] Switch the MIR dump/swap stage to the code generator's... | @tyb0807 | merged | 2026-10-28 | 2026-10-28 |
| [#12499](https://github.com/triton-lang/triton/pull/12499) | [AMD][GFX1250-strict] Enable HW-accelerated block32 scaled_u... | @amirumoAMD | merged | 2026-10-26 | 2026-10-28 |
| [#12524](https://github.com/triton-lang/triton/pull/12524) | [AMD] Enable LDS prefetch for scaled dot | @yiqian1 | open | 2026-10-27 | 2026-10-28 |
| [#12512](https://github.com/triton-lang/triton/pull/12512) | [AMD][Gluon] Add descriptor buffer ops for gfx1250 | @antiagainst | open | 2026-10-27 | 2026-10-28 |
| [#12526](https://github.com/triton-lang/triton/pull/12526) | [AMD][Gluon] Move gfx9 CachePolicy to cdna3/cdna4 namespaces | @antiagainst | merged | 2026-10-28 | 2026-10-28 |
| [#12527](https://github.com/triton-lang/triton/pull/12527) | [AMD][Gluon] Add CDNA submodule docs and deprecate old buffe... | @antiagainst | merged | 2026-10-28 | 2026-10-28 |
| [#12519](https://github.com/triton-lang/triton/pull/12519) | [AMD] Scope live MIR DAG emission with an RAII guard | @tyb0807 | merged | 2026-10-27 | 2026-10-28 |
| [#12496](https://github.com/triton-lang/triton/pull/12496) | [AMD] Bump AMD codegen to LLVM @08b05a3352ee | @AlexAUT | merged | 2026-10-26 | 2026-10-27 |
| [#12133](https://github.com/triton-lang/triton/pull/12133) | [AMD] Allow chain-dot detection across one level of scf.if | @amd-sonsingh | open | 2026-10-05 | 2026-10-27 |
| [#12523](https://github.com/triton-lang/triton/pull/12523) | [AMD] Build LLVM @08b05a3352ee for CodeGen | @antiagainst | merged | 2026-10-27 | 2026-10-27 |
| [#12371](https://github.com/triton-lang/triton/pull/12371) | [AMD] Fix LLVM symbol clash in TRITON_EXT_ENABLED builds | @RolaoDenthu | open | 2026-10-19 | 2026-10-27 |
| [#12522](https://github.com/triton-lang/triton/pull/12522) | [AMD] Fix TDM mbarrier arrival accounting | @justinrosner | draft | 2026-10-27 | 2026-10-27 |
| [#12233](https://github.com/triton-lang/triton/pull/12233) | [AMD] Support scheduling, LDS prefetch and TDM fusion for sl... | @plognjen | draft | 2026-10-12 | 2026-10-27 |
| [#12356](https://github.com/triton-lang/triton/pull/12356) | [QoL] Extend llvm build targets to support building AMD code... | @AlexAUT | merged | 2026-10-19 | 2026-10-27 |
| [#12122](https://github.com/triton-lang/triton/pull/12122) | [AMD] Add MIR dump/swap to AMD CodeGen LLVM | @tyb0807 | merged | 2026-10-05 | 2026-10-26 |
| [#11475](https://github.com/triton-lang/triton/pull/11475) | [AMD] Disable scalar atomics in multi-cta kernels | @borontion | merged | 2026-08-26 | 2026-10-26 |
| [#10133](https://github.com/triton-lang/triton/pull/10133) | [AMD] Support probing and loading explicitly versioned runti... | @antiagainst | merged | 2026-04-25 | 2026-10-26 |
| [#12493](https://github.com/triton-lang/triton/pull/12493) | [AMD][Gluon] Add buffer.atomic_load and buffer.atomic_store | @antiagainst | merged | 2026-10-25 | 2026-10-26 |
| [#12492](https://github.com/triton-lang/triton/pull/12492) | [AMD] Speed up SW fp8e4nv -> fp16 upcast with packed fmul | @ptrojahn | merged | 2026-10-25 | 2026-10-26 |
| [#12500](https://github.com/triton-lang/triton/pull/12500) | [AMD] Support scaled mfma 3d case | @borontion | merged | 2026-10-26 | 2026-10-26 |
| [#12273](https://github.com/triton-lang/triton/pull/12273) | [AMD][ConSan] Handle mixed-direction partial async-copy wait... | @PMylon | open | 2026-10-13 | 2026-10-26 |
| [#12477](https://github.com/triton-lang/triton/pull/12477) | [AMD] Fix WMMA operands whose kWidth spans several instructi... | @antiagainst | merged | 2026-10-23 | 2026-10-26 |
| [#12478](https://github.com/triton-lang/triton/pull/12478) | [AMD][GLUON] Deprecate load_shared_relaxed | @borontion | merged | 2026-10-23 | 2026-10-26 |
| [#12286](https://github.com/triton-lang/triton/pull/12286) | [AMD][membar] Prove slots of loop-carried views of multi-buf... | @yanxuer-999 | open | 2026-10-14 | 2026-10-26 |
| [#12345](https://github.com/triton-lang/triton/pull/12345) | [AMD][Gluon] Add buffer descriptors and descriptor-based buf... | @antiagainst | merged | 2026-10-18 | 2026-10-25 |
| [#12471](https://github.com/triton-lang/triton/pull/12471) | [AMD] Build llvm @05e432a for CodeGen | @AlexAUT | merged | 2026-10-23 | 2026-10-24 |
| [#12480](https://github.com/triton-lang/triton/pull/12480) | [AMD] Enable IEEE maximum/minimum for RDNA4 | @antiagainst | merged | 2026-10-24 | 2026-10-24 |
| [#12210](https://github.com/triton-lang/triton/pull/12210) | [AMD][ConSan] Improve async-copy waits and load/store tracki... | @PMylon | merged | 2026-10-09 | 2026-10-23 |
| [#12423](https://github.com/triton-lang/triton/pull/12423) | [AMD] Schedule async-wait barriers before potential global-m... | @jungpark-mlir | merged | 2026-10-21 | 2026-10-23 |
| [#12441](https://github.com/triton-lang/triton/pull/12441) | [Release][Cherry-Pick] [AMD][BACKEND] Ignore unit dims when ... | @naromero77amd | merged | 2026-10-22 | 2026-10-22 |
| [#12331](https://github.com/triton-lang/triton/pull/12331) | [AMD][BACKEND] Ignore unit dims when checking the shared ord... | @AlexAUT | merged | 2026-10-16 | 2026-10-22 |
| [#12391](https://github.com/triton-lang/triton/pull/12391) | [AMD] Use new AMD CodeGen build and update test | @antiagainst | merged | 2026-10-20 | 2026-10-21 |
| [#12410](https://github.com/triton-lang/triton/pull/12410) | [AMD] Drop core LLVM workarounds after the LLVM bump | @antiagainst | merged | 2026-10-21 | 2026-10-21 |
| [#12238](https://github.com/triton-lang/triton/pull/12238) | [AMD][CI] rocjitsu bump | @sriakrish | merged | 2026-10-13 | 2026-10-20 |
| [#12342](https://github.com/triton-lang/triton/pull/12342) | [AMD] Always insert a workgroup barrier before cluster barri... | @borontion | merged | 2026-10-17 | 2026-10-20 |
| [#12083](https://github.com/triton-lang/triton/pull/12083) | Catch LLVM diagnostic and raise Python exception in both Nvi... | @woct0rdho | open | 2026-10-03 | 2026-10-20 |
| [#12115](https://github.com/triton-lang/triton/pull/12115) | [AMD] Use native F8F6F4 MFMAs when scales are absent | @dhernandez0 | draft | 2026-10-05 | 2026-10-20 |
| [#12034](https://github.com/triton-lang/triton/pull/12034) | [GSan] Support symmetric memory allocator on AMD (HIP) | @amgddm | draft | 2026-09-29 | 2026-10-19 |
| [#11968](https://github.com/triton-lang/triton/pull/11968) | [AMD] Add a pre-bound HIP kernel launcher | @adityakankariya | draft | 2026-09-25 | 2026-10-19 |
| [#12325](https://github.com/triton-lang/triton/pull/12325) | [AMD] Add native JIT cache dispatch for HIP | @adityakankariya | draft | 2026-10-15 | 2026-10-19 |
| [#12320](https://github.com/triton-lang/triton/pull/12320) | [DRAFT][AMD][ConSan] Support async-copy mbarrier arrive | @PMylon | draft | 2026-10-15 | 2026-10-15 |
| [#12171](https://github.com/triton-lang/triton/pull/12171) | [AMD][FpSan] Support scaled FP4 and FP8 downcasts | @kelesvol | open | 2026-10-08 | 2026-10-13 |
| [#11655](https://github.com/triton-lang/triton/pull/11655) | [AMD] Widen InstCombine's SimplifyDemandedVectorElts walk de... | @Dewei-Wang-sh | open | 2026-09-09 | 2026-10-10 |
| [#12177](https://github.com/triton-lang/triton/pull/12177) | [AMD] Add FP16-accumulate WMMA support for WMMAv3 | @pabloantoniom | draft | 2026-10-08 | 2026-10-09 |
| [#10254](https://github.com/triton-lang/triton/pull/10254) | [AMD] Add LLVM flag passthrough for AMDGPU codegen | @raikonenfnu | open | 2026-05-07 | 2026-10-09 |
| [#12172](https://github.com/triton-lang/triton/pull/12172) | [AMD] Derive pipeliner buffer slots from the induction varia... | @dhernandez0 | draft | 2026-10-08 | 2026-10-09 |
| [#12203](https://github.com/triton-lang/triton/pull/12203) | [AMD] CanonicalizePointers: normalize mixed pointer represen... | @he-yufeng | open | 2026-10-09 | 2026-10-09 |
| [#12199](https://github.com/triton-lang/triton/pull/12199) | [TUTORIAL] Enable FP8 matmul on supported AMD GPUs | @zihaomu | open | 2026-10-09 | 2026-10-09 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-10-09 |
| [#12159](https://github.com/triton-lang/triton/pull/12159) | [AMD] Keep shared order in CoalesceAsyncCopy when the src or... | @he-yufeng | open | 2026-10-07 | 2026-10-07 |
| [#12149](https://github.com/triton-lang/triton/pull/12149) | [AMD][Gluon] Add CDNA5 WMMA issue mode control | @nithinsubbiah | draft | 2026-10-06 | 2026-10-07 |
| [#11068](https://github.com/triton-lang/triton/pull/11068) | [AMD] Propagate discardable attributes on the small-tensor p... | @pabloantoniom | draft | 2026-07-28 | 2026-10-02 |
| [#12060](https://github.com/triton-lang/triton/pull/12060) | [AMD] Avoid redundant batch warps in dot layouts | @pculaf | open | 2026-10-01 | 2026-10-01 |
| [#12020](https://github.com/triton-lang/triton/pull/12020) | Add TRITON_BUILD_{NVIDIA,AMD}_BACKEND options to build witho... | @KX76 | draft | 2026-09-29 | 2026-09-29 |
| [#11704](https://github.com/triton-lang/triton/pull/11704) | [AMD] Bypass the epilogue relayout for FMA | @pabloantoniom | draft | 2026-09-11 | 2026-09-24 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-10-29T14:43:29Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5454](https://github.com/ROCm/AMDMIGraphX/pull/5454) | Insert match::opaque into deep matchers to fix slow build ti... | @pnikolic-amd | open | 2026-10-28 | 2026-10-29 |
| [#5455](https://github.com/ROCm/AMDMIGraphX/pull/5455) | Add post-lowering GPU copy optimization | @shivadbhavsar | open | 2026-10-28 | 2026-10-29 |
| [#5453](https://github.com/ROCm/AMDMIGraphX/pull/5453) | Disable hiprtc subprocess spawning fix | @pnikolic-amd | open | 2026-10-28 | 2026-10-29 |
| [#5389](https://github.com/ROCm/AMDMIGraphX/pull/5389) | Add simplify symbolic dimensions pass & simplify min/max sym... | @CharlieL7 | open | 2026-10-13 | 2026-10-28 |
| [#5449](https://github.com/ROCm/AMDMIGraphX/pull/5449) | Fix lowering for eval_expr_from_shape | @shivadbhavsar | draft | 2026-10-27 | 2026-10-28 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): spawn processes directly instead of through p... | @causten | open | 2026-08-21 | 2026-10-28 |
| [#5450](https://github.com/ROCm/AMDMIGraphX/pull/5450) | Combined data dependent support branches | @CharlieL7 | draft | 2026-10-28 | 2026-10-28 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | open | 2026-08-21 | 2026-10-28 |
| [#5451](https://github.com/ROCm/AMDMIGraphX/pull/5451) | fix: make PR review dashboard resilient to GraphQL timeouts | @causten | open | 2026-10-28 | 2026-10-28 |
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | draft | 2026-09-21 | 2026-10-28 |
| [#5274](https://github.com/ROCm/AMDMIGraphX/pull/5274) | Winograd fp16 gfx11 | @pfultz2 | open | 2026-09-17 | 2026-10-28 |
| [#5161](https://github.com/ROCm/AMDMIGraphX/pull/5161) | Enable fp16 winograd on gfx1151 | @weizhu12-amd | open | 2026-08-21 | 2026-10-28 |
| [#5397](https://github.com/ROCm/AMDMIGraphX/pull/5397) | update parsers to support LLMs | @shivadbhavsar | open | 2026-10-15 | 2026-10-28 |
| [#5373](https://github.com/ROCm/AMDMIGraphX/pull/5373) | docs: update installation docs with TheRock packages | @peterjunpark | open | 2026-10-09 | 2026-10-28 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-10-28 |
| [#5394](https://github.com/ROCm/AMDMIGraphX/pull/5394) | Split/symbolic reshape parsing | @CharlieL7 | open | 2026-10-13 | 2026-10-28 |
| [#5431](https://github.com/ROCm/AMDMIGraphX/pull/5431) | Improve select_module perf | @shivadbhavsar | open | 2026-10-23 | 2026-10-28 |
| [#5414](https://github.com/ROCm/AMDMIGraphX/pull/5414) | Share loaded modules between identical code objects | @pfultz2 | open | 2026-10-20 | 2026-10-28 |
| [#5393](https://github.com/ROCm/AMDMIGraphX/pull/5393) | Evaluate compound symbolic shape expressions | @CharlieL7 | open | 2026-10-13 | 2026-10-28 |
| [#5447](https://github.com/ROCm/AMDMIGraphX/pull/5447) | Parse LinearAttention and fuse causal gemm-elementwise-gemm ... | @pfultz2 | open | 2026-10-27 | 2026-10-27 |
| [#5448](https://github.com/ROCm/AMDMIGraphX/pull/5448) | Check runtime dependent ops for symbol simplification | @shivadbhavsar | draft | 2026-10-27 | 2026-10-27 |
| [#5426](https://github.com/ROCm/AMDMIGraphX/pull/5426) | Resolve channels_auto convolution layout to channels_first o... | @ppetrovi-amd | open | 2026-10-23 | 2026-10-27 |
| [#5425](https://github.com/ROCm/AMDMIGraphX/pull/5425) | Prevent FP16 GroupNorm overflow with float intermediates | @royzhang-amd | open | 2026-10-23 | 2026-10-27 |
| [#5439](https://github.com/ROCm/AMDMIGraphX/pull/5439) | KV cache attention flash decoding | @bdevorem | draft | 2026-10-26 | 2026-10-27 |
| [#5413](https://github.com/ROCm/AMDMIGraphX/pull/5413) | Preserve arg-reduction axes during reshape fusion | @royzhang-amd | open | 2026-10-20 | 2026-10-26 |
| [#5433](https://github.com/ROCm/AMDMIGraphX/pull/5433) | Bump gitpython from 3.1.62 to 3.2.1 in /docs/sphinx | @dependabot[bot] | open | 2026-10-26 | 2026-10-26 |
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | open | 2026-08-30 | 2026-10-25 |
| [#5366](https://github.com/ROCm/AMDMIGraphX/pull/5366) | Hoist submodule scratch memory into the parent in memory col... | @pfultz2 | open | 2026-10-07 | 2026-10-25 |
| [#5423](https://github.com/ROCm/AMDMIGraphX/pull/5423) | Add ONNX parser for the CausalConvWithState contrib op | @pfultz2 | open | 2026-10-22 | 2026-10-25 |
| [#5340](https://github.com/ROCm/AMDMIGraphX/pull/5340) | Split_sym_dim prefill+decode support | @turneram | open | 2026-09-30 | 2026-10-24 |
| [#5430](https://github.com/ROCm/AMDMIGraphX/pull/5430) | Forward slices spanning several concat segments through resh... | @pfultz2 | open | 2026-10-23 | 2026-10-24 |
| [#5432](https://github.com/ROCm/AMDMIGraphX/pull/5432) | Bump certifi from 2024.7.4 to 2026.10.19 in /docs/sphinx | @dependabot[bot] | open | 2026-10-24 | 2026-10-24 |
| [#5417](https://github.com/ROCm/AMDMIGraphX/pull/5417) | Fuse the attention-sink gate into the attention epilogue and... | @pfultz2 | open | 2026-10-21 | 2026-10-23 |
| [#5405](https://github.com/ROCm/AMDMIGraphX/pull/5405) | Gate MLIR attention fusion on profitability and enable it by... | @pfultz2 | open | 2026-10-16 | 2026-10-23 |
| [#5428](https://github.com/ROCm/AMDMIGraphX/pull/5428) | Onnxruntime Weekly Sync 2026-10-23 | @github-actions[bot] | open | 2026-10-23 | 2026-10-23 |
| [#5412](https://github.com/ROCm/AMDMIGraphX/pull/5412) | Apply MatMulInteger zero-point corrections in int32 | @royzhang-amd | open | 2026-10-20 | 2026-10-23 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#5419](https://github.com/ROCm/AMDMIGraphX/pull/5419) | Sink the view chain onto pointwise inputs so flat-layout kv-... | @pfultz2 | open | 2026-10-21 | 2026-10-22 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-10-21 |
| [#5401](https://github.com/ROCm/AMDMIGraphX/pull/5401) | Support per-channel quantized models with expanded QDQ param... | @royzhang-amd | open | 2026-10-16 | 2026-10-21 |
| [#5400](https://github.com/ROCm/AMDMIGraphX/pull/5400) | Support quantized concat in simplify_qdq | @pfultz2 | open | 2026-10-15 | 2026-10-15 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Support for operators with data-depdendent shape functions | @CharlieL7 | draft | 2026-09-24 | 2026-10-13 |
| [#5377](https://github.com/ROCm/AMDMIGraphX/pull/5377) | Use small_vector | @pfultz2 | draft | 2026-10-12 | 2026-10-12 |
| [#5369](https://github.com/ROCm/AMDMIGraphX/pull/5369) | Claude code review | @pfultz2 | draft | 2026-10-08 | 2026-10-09 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-10-06 |
| [#5281](https://github.com/ROCm/AMDMIGraphX/pull/5281) | Bump soupsieve from 2.8.4 to 2.9 in /docs/sphinx | @dependabot[bot] | open | 2026-09-18 | 2026-10-03 |
| [#5290](https://github.com/ROCm/AMDMIGraphX/pull/5290) | Bump rocm-docs-core from 1.40.2 to 1.41.0 in /docs/sphinx | @dependabot[bot] | open | 2026-09-21 | 2026-10-03 |
| [#5260](https://github.com/ROCm/AMDMIGraphX/pull/5260) | gqa/fuse_attention: attention sinks + sliding-window decode ... | @rlegithub | open | 2026-09-13 | 2026-09-30 |
| [#5336](https://github.com/ROCm/AMDMIGraphX/pull/5336) | Asymnetric padding | @pfultz2 | open | 2026-09-29 | 2026-09-29 |
| [#5333](https://github.com/ROCm/AMDMIGraphX/pull/5333) | Give the TensorFlow protobuf unique package and file names | @fwyzard | open | 2026-09-29 | 2026-09-29 |
| [#5259](https://github.com/ROCm/AMDMIGraphX/pull/5259) | layernorm: FP32 SimplifiedLayerNorm/SkipSLN to prevent MoE r... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5258](https://github.com/ROCm/AMDMIGraphX/pull/5258) | gpu: fused GptOssMoE op (sparse top-4 INT4 MoE) for GPT-OSS-... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5256](https://github.com/ROCm/AMDMIGraphX/pull/5256) | gpu/hip: fall back to hipHostMalloc when hipHostRegister fai... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5257](https://github.com/ROCm/AMDMIGraphX/pull/5257) | cse: skip merging >64MB single-output ops | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5255](https://github.com/ROCm/AMDMIGraphX/pull/5255) | fuse_attention: exclude side-input reductions from the decod... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5272](https://github.com/ROCm/AMDMIGraphX/pull/5272) | Add fused M=1 INT4 GEMV kernel for LLM decode (opt-in) | @aditya-dl | draft | 2026-09-16 | 2026-09-25 |
| [#5278](https://github.com/ROCm/AMDMIGraphX/pull/5278) | Share identical weight literals across programs on the same ... | @aditya-dl | draft | 2026-09-17 | 2026-09-24 |
| [#5254](https://github.com/ROCm/AMDMIGraphX/pull/5254) | gpu/compile_ops: make tuning-config computation exception-sa... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5309](https://github.com/ROCm/AMDMIGraphX/pull/5309) | [CI][Diagnostic] Isolate MI300 MLIR attention flake | @kentqian | draft | 2026-09-24 | 2026-09-24 |
| [#5308](https://github.com/ROCm/AMDMIGraphX/pull/5308) | docs(2.16.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5307](https://github.com/ROCm/AMDMIGraphX/pull/5307) | docs(2.17.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5284](https://github.com/ROCm/AMDMIGraphX/pull/5284) | Update mlir problem key with a md5 sum | @pfultz2 | open | 2026-09-18 | 2026-09-18 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-09-17 |
| [#5270](https://github.com/ROCm/AMDMIGraphX/pull/5270) | Cache HIP code object compilation | @dhernandez0 | open | 2026-09-16 | 2026-09-16 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-09-16 |
| [#5264](https://github.com/ROCm/AMDMIGraphX/pull/5264) | Opt int4 2 | @pfultz2 | draft | 2026-09-14 | 2026-09-14 |
| [#5261](https://github.com/ROCm/AMDMIGraphX/pull/5261) | gpu: opt-in GPU graph capture/replay for the async eval path... | @rlegithub | open | 2026-09-14 | 2026-09-14 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-09-10 |
| [#5236](https://github.com/ROCm/AMDMIGraphX/pull/5236) | Unify prefill and decode | @pfultz2 | draft | 2026-09-03 | 2026-09-03 |
| [#5210](https://github.com/ROCm/AMDMIGraphX/pull/5210) | Fix credential issue for performance tests | @ahsan-ca | open | 2026-08-28 | 2026-09-02 |
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
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#5173](https://github.com/ROCm/AMDMIGraphX/pull/5173) | fix(security): pin base image digest and run as jenkins user | @causten | merged | 2026-08-21 | 2026-10-29 |
| [#5446](https://github.com/ROCm/AMDMIGraphX/pull/5446) | prepare_mlir: push a reshape of an int4 unpack under the unp... | @pfultz2 | merged | 2026-10-27 | 2026-10-29 |
| [#5452](https://github.com/ROCm/AMDMIGraphX/pull/5452) | Revert static zero broadcast handling & simply_reshapes find... | @CharlieL7 | merged | 2026-10-28 | 2026-10-29 |
| [#5456](https://github.com/ROCm/AMDMIGraphX/pull/5456) | Fix use-after-free of registered host buffers read by pendin... | @pfultz2 | merged | 2026-10-28 | 2026-10-29 |
| [#5384](https://github.com/ROCm/AMDMIGraphX/pull/5384) | Update handling for empty tensors | @CharlieL7 | merged | 2026-10-13 | 2026-10-28 |
| [#5392](https://github.com/ROCm/AMDMIGraphX/pull/5392) | Support bounded dynamic slice outputs | @CharlieL7 | merged | 2026-10-13 | 2026-10-27 |
| [#5312](https://github.com/ROCm/AMDMIGraphX/pull/5312) | Dynamic ROIAlign  | @CharlieL7 | merged | 2026-09-24 | 2026-10-27 |
| [#5388](https://github.com/ROCm/AMDMIGraphX/pull/5388) | Support compatible symbolic dimensions | @CharlieL7 | merged | 2026-10-13 | 2026-10-27 |
| [#5422](https://github.com/ROCm/AMDMIGraphX/pull/5422) | Add Vishal, Sameek and Anil as codeowners | @asparkhi | merged | 2026-10-22 | 2026-10-27 |
| [#5385](https://github.com/ROCm/AMDMIGraphX/pull/5385) | Update eliminate_convert to also eliminate dynamic shape con... | @CharlieL7 | merged | 2026-10-13 | 2026-10-26 |
| [#5351](https://github.com/ROCm/AMDMIGraphX/pull/5351) | Fix invalid const attribute on generated fused reductions | @ahsan-ca | merged | 2026-10-05 | 2026-10-26 |
| [#5407](https://github.com/ROCm/AMDMIGraphX/pull/5407) | Zero-copy gather literals and cost-aware staging in write_li... | @pfultz2 | merged | 2026-10-17 | 2026-10-26 |
| [#5335](https://github.com/ROCm/AMDMIGraphX/pull/5335) | Channels-last support and register/vector reuse for the chan... | @pfultz2 | merged | 2026-09-29 | 2026-10-25 |
| [#5429](https://github.com/ROCm/AMDMIGraphX/pull/5429) | Prefer moving a unary op up to a fusable producer in simplif... | @pfultz2 | merged | 2026-10-23 | 2026-10-25 |
| [#5424](https://github.com/ROCm/AMDMIGraphX/pull/5424) | Enable cppcoreguidelines-avoid-const-or-ref-data-members tid... | @pfultz2 | merged | 2026-10-22 | 2026-10-25 |
| [#5289](https://github.com/ROCm/AMDMIGraphX/pull/5289) | Add missing tests | @pfultz2 | merged | 2026-09-20 | 2026-10-23 |
| [#5383](https://github.com/ROCm/AMDMIGraphX/pull/5383) | Refactor literal constructor to a static function from_raw_b... | @kahmed10 | merged | 2026-10-13 | 2026-10-23 |
| [#5123](https://github.com/ROCm/AMDMIGraphX/pull/5123) | Split symbolic dimension pass | @shivadbhavsar | merged | 2026-08-07 | 2026-10-23 |
| [#5409](https://github.com/ROCm/AMDMIGraphX/pull/5409) | Lower com.ryzenai MatMulNBits, GQO, and SSMLP | @cliffcai | merged | 2026-10-19 | 2026-10-22 |
| [#5408](https://github.com/ROCm/AMDMIGraphX/pull/5408) | Filter shared subexpressions from kv-cache attention fusion ... | @pfultz2 | merged | 2026-10-17 | 2026-10-22 |
| [#5415](https://github.com/ROCm/AMDMIGraphX/pull/5415) | Fold dot(a, b) + dot(a, c) into dot(a, b + c) for constant b... | @amarbarosys | merged | 2026-10-21 | 2026-10-22 |
| [#5354](https://github.com/ROCm/AMDMIGraphX/pull/5354) | Update for MoE to merge per task into a single kernel. | @TedThemistokleous | merged | 2026-10-06 | 2026-10-22 |
| [#5406](https://github.com/ROCm/AMDMIGraphX/pull/5406) | Keep upstream reductions out of fused kv-cache attention | @pfultz2 | merged | 2026-10-16 | 2026-10-22 |
| [#5379](https://github.com/ROCm/AMDMIGraphX/pull/5379) | Fuse the rotate-half concat into attention and let the K rot... | @pfultz2 | merged | 2026-10-12 | 2026-10-22 |
| [#5416](https://github.com/ROCm/AMDMIGraphX/pull/5416) | Replace Chris with Sumit as code owner | @causten | merged | 2026-10-21 | 2026-10-22 |
| [#5404](https://github.com/ROCm/AMDMIGraphX/pull/5404) | Onnxruntime Weekly Sync 2026-10-16 | @github-actions[bot] | merged | 2026-10-16 | 2026-10-21 |
| [#5403](https://github.com/ROCm/AMDMIGraphX/pull/5403) | chore: upgrade packaging from 23.0 to 26.3 | @VishalX | merged | 2026-10-16 | 2026-10-21 |
| [#5357](https://github.com/ROCm/AMDMIGraphX/pull/5357) | Run verify tests across all supported compile modes per targ... | @pfultz2 | merged | 2026-10-06 | 2026-10-20 |
| [#5352](https://github.com/ROCm/AMDMIGraphX/pull/5352) | Fuse reduce reshapes | @pfultz2 | merged | 2026-10-05 | 2026-10-20 |
| [#5370](https://github.com/ROCm/AMDMIGraphX/pull/5370) | Batch compile_ops across all modules from the root module | @pfultz2 | merged | 2026-10-08 | 2026-10-17 |
| [#5374](https://github.com/ROCm/AMDMIGraphX/pull/5374) | Add an indices type to topk, fold index converts into it, an... | @pfultz2 | merged | 2026-10-11 | 2026-10-17 |
| [#5399](https://github.com/ROCm/AMDMIGraphX/pull/5399) | Expose MIGraphX log level control in the Python API | @anupsing-amd | merged | 2026-10-15 | 2026-10-16 |
| [#5391](https://github.com/ROCm/AMDMIGraphX/pull/5391) | Collapse shape transforms of single-element tensors into one... | @pfultz2 | merged | 2026-10-13 | 2026-10-16 |
| [#5387](https://github.com/ROCm/AMDMIGraphX/pull/5387) | Fix large compiled models from splitting a bias through a pa... | @pfultz2 | merged | 2026-10-13 | 2026-10-16 |
| [#5364](https://github.com/ROCm/AMDMIGraphX/pull/5364) | Add `select_module_index` op | @bdevorem | merged | 2026-10-07 | 2026-10-16 |
| [#5362](https://github.com/ROCm/AMDMIGraphX/pull/5362) | Reduce compile-time heap allocations in matchers and optimiz... | @vmilanov-amd | merged | 2026-10-07 | 2026-10-16 |
| [#5302](https://github.com/ROCm/AMDMIGraphX/pull/5302) | Use uint32 bitmask for GPU NMS kernel | @CharlieL7 | merged | 2026-09-24 | 2026-10-16 |
| [#5350](https://github.com/ROCm/AMDMIGraphX/pull/5350) | fix fuse_concat across submods | @shivadbhavsar | merged | 2026-10-03 | 2026-10-16 |
| [#5168](https://github.com/ROCm/AMDMIGraphX/pull/5168) | fix(security): guard ONNX/shape overflow and external data p... | @causten | merged | 2026-08-21 | 2026-10-15 |
| [#5386](https://github.com/ROCm/AMDMIGraphX/pull/5386) | Keep the Python buffer alive for migraphx.argument | @lucbruni-amd | merged | 2026-10-13 | 2026-10-14 |
| [#5085](https://github.com/ROCm/AMDMIGraphX/pull/5085) | [AIMIGRAPHX-1215] add runtime symbol resolution op | @shivadbhavsar | merged | 2026-07-21 | 2026-10-13 |
| [#5200](https://github.com/ROCm/AMDMIGraphX/pull/5200) | Changelog fixes | @CharlieL7 | merged | 2026-08-27 | 2026-10-13 |
| [#5334](https://github.com/ROCm/AMDMIGraphX/pull/5334) | [AIMIGRAPHX-1102] Support verify through the API | @eddieliao | merged | 2026-09-29 | 2026-10-13 |
| [#5213](https://github.com/ROCm/AMDMIGraphX/pull/5213) | Docs: getting started and miscellaneous docs refactoring | @anisha-amd | merged | 2026-08-28 | 2026-10-12 |
| [#5358](https://github.com/ROCm/AMDMIGraphX/pull/5358) | [AIMIGRAPHX-1103] Update docs for verify changes | @eddieliao | merged | 2026-10-06 | 2026-10-12 |
| [#5062](https://github.com/ROCm/AMDMIGraphX/pull/5062) | Fix windows CI: Workaround files not being deleted | @pfultz2 | merged | 2026-07-14 | 2026-10-12 |
| [#5376](https://github.com/ROCm/AMDMIGraphX/pull/5376) | Fix reduce_slice_interleaved failure | @pfultz2 | merged | 2026-10-12 | 2026-10-12 |
| [#5339](https://github.com/ROCm/AMDMIGraphX/pull/5339) | [AIMIGRAPHX-1301] add checks for size of literals when creat... | @kahmed10 | merged | 2026-09-30 | 2026-10-12 |
| [#4936](https://github.com/ROCm/AMDMIGraphX/pull/4936) | Add conv winograd for gfx12 | @pfultz2 | merged | 2026-06-03 | 2026-10-11 |
| [#5232](https://github.com/ROCm/AMDMIGraphX/pull/5232) | Binary cache sql backend | @pnikolic-amd | merged | 2026-09-02 | 2026-10-11 |
| [#5365](https://github.com/ROCm/AMDMIGraphX/pull/5365) | Fix moving shape transforms through a shared reduction and f... | @pfultz2 | merged | 2026-10-07 | 2026-10-11 |
| [#5348](https://github.com/ROCm/AMDMIGraphX/pull/5348) | Fuse expert gathers, interleaved swiglu, and the expert sum ... | @pfultz2 | merged | 2026-10-02 | 2026-10-11 |
| [#5356](https://github.com/ROCm/AMDMIGraphX/pull/5356) | Document reviewer conventions in AGENTS.md and the review sk... | @pfultz2 | merged | 2026-10-06 | 2026-10-11 |
| [#5015](https://github.com/ROCm/AMDMIGraphX/pull/5015) | Slice over dynamic dimension | @CharlieL7 | merged | 2026-06-26 | 2026-10-11 |
| [#5027](https://github.com/ROCm/AMDMIGraphX/pull/5027) | Fuse_pointwise fuse dynamic even if scalar | @CharlieL7 | merged | 2026-07-01 | 2026-10-11 |
| [#5054](https://github.com/ROCm/AMDMIGraphX/pull/5054) | Add from_string/to_string enum macro | @pfultz2 | merged | 2026-07-10 | 2026-10-10 |
| [#5371](https://github.com/ROCm/AMDMIGraphX/pull/5371) | Add copilot review with claude opus | @pfultz2 | merged | 2026-10-08 | 2026-10-09 |
| [#5361](https://github.com/ROCm/AMDMIGraphX/pull/5361) | Fix pad with non-finite value | @ivarusic-amd | merged | 2026-10-07 | 2026-10-09 |
| [#5368](https://github.com/ROCm/AMDMIGraphX/pull/5368) | Pad nonfinite value rel 2611 | @ivarusic-amd | merged | 2026-10-08 | 2026-10-08 |
| [#5367](https://github.com/ROCm/AMDMIGraphX/pull/5367) | Revert "Convolution_backwards group compute shape fix- #3887... | @causten | merged | 2026-10-08 | 2026-10-08 |
| [#4928](https://github.com/ROCm/AMDMIGraphX/pull/4928) | Convolution backwards v4r1 | @pfultz2 | merged | 2026-06-01 | 2026-10-08 |
| [#5363](https://github.com/ROCm/AMDMIGraphX/pull/5363) | Convolution_backwards group compute shape fix- #3887 | @causten | merged | 2026-10-07 | 2026-10-07 |
| [#5044](https://github.com/ROCm/AMDMIGraphX/pull/5044) | Mixed length gather merge | @TedThemistokleous | merged | 2026-07-07 | 2026-10-07 |
| [#5324](https://github.com/ROCm/AMDMIGraphX/pull/5324) | Fuse topk | @pfultz2 | merged | 2026-09-27 | 2026-10-07 |
| [#5175](https://github.com/ROCm/AMDMIGraphX/pull/5175) | Gpu concat kernel improvements | @pfultz2 | merged | 2026-08-23 | 2026-10-07 |
| [#5344](https://github.com/ROCm/AMDMIGraphX/pull/5344) | Update CI for 10.1 | @eddieliao | merged | 2026-10-01 | 2026-10-07 |
| [#5050](https://github.com/ROCm/AMDMIGraphX/pull/5050) | update before installing | @causten | merged | 2026-07-08 | 2026-10-06 |
| [#5049](https://github.com/ROCm/AMDMIGraphX/pull/5049) | Prevent propagate_precision from removing fp8 converts | @CharlieL7 | merged | 2026-07-08 | 2026-10-06 |
| [#5338](https://github.com/ROCm/AMDMIGraphX/pull/5338) | Add support for quantized add | @pfultz2 | merged | 2026-09-30 | 2026-10-06 |
| [#5315](https://github.com/ROCm/AMDMIGraphX/pull/5315) | Fuse GQA attention with attention sinks | @pfultz2 | merged | 2026-09-24 | 2026-10-06 |
| [#4990](https://github.com/ROCm/AMDMIGraphX/pull/4990) | Add backend options | @pfultz2 | merged | 2026-06-18 | 2026-10-06 |
| [#4978](https://github.com/ROCm/AMDMIGraphX/pull/4978) | [AIMIGRAPHX-1054] Log debug symbols when exceptions are thro... | @eddieliao | merged | 2026-06-16 | 2026-10-06 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-10-29T14:43:46Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#6247](https://github.com/ROCm/aiter/pull/6247) | [CK] [FlyDSL] [JIT] gfx942 a8w4 MoE stage1 fp8 kernel | @vedenev-amd | open | 2026-10-08 | 2026-10-29 |
| [#7011](https://github.com/ROCm/aiter/pull/7011) | [FLyDSL] GEMM bf16 gfx942 | @damien-lejeune | draft | 2026-10-27 | 2026-10-29 |
| [#6712](https://github.com/ROCm/aiter/pull/6712) | [FlyDSL] [Bugfix] Match FlyDSL A16W16 AOT semaphore dtype to... | @yuychang | open | 2026-10-20 | 2026-10-29 |
| [#5848](https://github.com/ROCm/aiter/pull/5848) | Fix the hardcoded die and CU counts in the opus kernels | @RElbers | draft | 2026-09-25 | 2026-10-29 |
| [#5757](https://github.com/ROCm/aiter/pull/5757) | [ASM] [HIP] Qwe38 flash mxfp4 asm | @JohnNikolay84 | open | 2026-09-22 | 2026-10-29 |
| [#6689](https://github.com/ROCm/aiter/pull/6689) | [HIP] [Build] gemm_fusion: GEMM + epilogue fusion framework ... | @demonsan | open | 2026-10-19 | 2026-10-29 |
| [#6485](https://github.com/ROCm/aiter/pull/6485) | [Perf] MoE a4w4 adaptive aux sort: accumulate into the calle... | @yuychang | open | 2026-10-13 | 2026-10-29 |
| [#6083](https://github.com/ROCm/aiter/pull/6083) | [Triton/Gluon] [FlyDSL] FlyDSL QSA indexer scorer + sparse G... | @SamiAario-AMD | draft | 2026-10-02 | 2026-10-29 |
| [#7048](https://github.com/ROCm/aiter/pull/7048) | [Triton/Gluon] Add arch_info.is_sw_emulated_fp4_avail() and ... | @Ragua1 | open | 2026-10-27 | 2026-10-29 |
| [#7074](https://github.com/ROCm/aiter/pull/7074) | bench_mega_moe: fix kernel table on multi-stream graphs, add... | @yanboshao | open | 2026-10-28 | 2026-10-29 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-10-29 |
| [#5793](https://github.com/ROCm/aiter/pull/5793) | [Triton/Gluon] [fix] Triton FA decode: bound K/V loads in no... | @amd-maradosa | open | 2026-09-23 | 2026-10-29 |
| [#6965](https://github.com/ROCm/aiter/pull/6965) | [FlyDSL] [Bugfix] fused_moe: fix device-memory exhaustion cr... | @josh-schell-amd | draft | 2026-10-26 | 2026-10-29 |
| [#6081](https://github.com/ROCm/aiter/pull/6081) | [Triton/Gluon] Fix: gfx1250 unified attention faults and NaN... | @mqhc2020 | open | 2026-10-02 | 2026-10-29 |
| [#5677](https://github.com/ROCm/aiter/pull/5677) | [FlyDSL] [JIT] Adaptive decode Top-K kernel, dispatched by o... | @JH-Leon-KIM-AMD | open | 2026-09-18 | 2026-10-29 |
| [#5461](https://github.com/ROCm/aiter/pull/5461) | [FlyDSL] [CI] One stage and two-stage ring all-reduce kernel... | @vpietila-amd | open | 2026-09-11 | 2026-10-29 |
| [#7164](https://github.com/ROCm/aiter/pull/7164) | [HIP] Fix ambiguous HIP error helper lookup in CK-free shim | @iraj465 | open | 2026-10-29 | 2026-10-29 |
| [#6959](https://github.com/ROCm/aiter/pull/6959) | [Config] Add Kimi-K3 MI355X GEMM tuning tables | @aryatsc | open | 2026-10-26 | 2026-10-29 |
| [#6484](https://github.com/ROCm/aiter/pull/6484) | [Feature] MoE: let callers hand fused_moe a precomputed BM=1... | @yuychang | open | 2026-10-13 | 2026-10-29 |
| [#7128](https://github.com/ROCm/aiter/pull/7128) | [HIP] [FlyDSL] Add OPUS FP4 MQA writer and query scale layou... | @junhaha666 | open | 2026-10-29 | 2026-10-29 |
| [#6511](https://github.com/ROCm/aiter/pull/6511) | [FlyDSL] fix(fused_moe): make the MXFP4 MoE stage2 epilogue ... | @Qubitium | open | 2026-10-14 | 2026-10-29 |
| [#6995](https://github.com/ROCm/aiter/pull/6995) | [FlyDSL] [CI] [Feature] Add explicit clamped SiLU to FlyDSL ... | @LiuYinfeng01 | open | 2026-10-27 | 2026-10-29 |
| [#7163](https://github.com/ROCm/aiter/pull/7163) | [CI] Drop the Aiter Test Gate requirement for CI-only change... | @zufayu | open | 2026-10-29 | 2026-10-29 |
| [#6743](https://github.com/ROCm/aiter/pull/6743) | [HIP] [JIT] [Kernel] Add HipKittens H32 sparse MLA for gfx95... | @willhu-jpg | open | 2026-10-20 | 2026-10-29 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner on gemm_moe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-10-29 |
| [#7155](https://github.com/ROCm/aiter/pull/7155) | [HIP] feat(custom_ar): read captured gfx1250 inputs in place... | @TennyWang1223 | open | 2026-10-29 | 2026-10-29 |
| [#7103](https://github.com/ROCm/aiter/pull/7103) | [JIT] Add -mllvm -ignore-tti-inline-compatible=true for the ... | @rasmith | open | 2026-10-28 | 2026-10-29 |
| [#7124](https://github.com/ROCm/aiter/pull/7124) | [ASM] [HIP] [OPUS] Add gfx950 MLA v4.1 a8w4 prefill kernels ... | @kaiyang-1 | open | 2026-10-29 | 2026-10-29 |
| [#5988](https://github.com/ROCm/aiter/pull/5988) | [ASM] [HIP] [CK] Add gfx950 Q256 fused MXFP4 prefill pipelin... | @vstakhov-amd | open | 2026-09-30 | 2026-10-29 |
| [#6534](https://github.com/ROCm/aiter/pull/6534) | MHAv4 require BSHD inputs with only a contiguous last dimens... | @nsakkine | draft | 2026-10-14 | 2026-10-29 |
| [#7012](https://github.com/ROCm/aiter/pull/7012) | [ASM][MoE] Run the FLAT MXFP4 fmoe tiles on padded intermedi... | @mjkvaak-amd | draft | 2026-10-27 | 2026-10-29 |
| [#5949](https://github.com/ROCm/aiter/pull/5949) | [FlyDSL] Add the NHD page-64 layout and a per-shape default ... | @samremes | open | 2026-09-29 | 2026-10-29 |
| [#7149](https://github.com/ROCm/aiter/pull/7149) | [HIP] fix(custom_ar): decline gather / scatter at group size... | @yitingw1 | open | 2026-10-29 | 2026-10-29 |
| [#7017](https://github.com/ROCm/aiter/pull/7017) | [FlyDSL] Add gfx942 FP4 paged MQA logits for decode and pref... | @akii96 | open | 2026-10-27 | 2026-10-29 |
| [#5899](https://github.com/ROCm/aiter/pull/5899) | [FlyDSL] [gfx1250] Overlap decode compact plan with dispatch | @XingerZhu | open | 2026-09-28 | 2026-10-29 |
| [#6969](https://github.com/ROCm/aiter/pull/6969) | Feat/proxy model gfx1250 1023 | @kkHuang-amd | draft | 2026-10-26 | 2026-10-29 |
| [#6260](https://github.com/ROCm/aiter/pull/6260) | [FlyDSL] [JIT] [Build] [Bugfix] Fix metadata-only setup.py a... | @yuychang | open | 2026-10-08 | 2026-10-29 |
| [#6427](https://github.com/ROCm/aiter/pull/6427) | [FlyDSL] Glm5 2 qkv proj opt for gfx950 | @IzacharyI | open | 2026-10-12 | 2026-10-29 |
| [#6767](https://github.com/ROCm/aiter/pull/6767) | [Triton/Gluon] [HIP] [OPUS] [AITERKER-209] Add gfx1250-stric... | @zufayu | open | 2026-10-21 | 2026-10-29 |
| [#7162](https://github.com/ROCm/aiter/pull/7162) | [Triton/Gluon] [Config] [Tune] [gfx950] Add gfx950 Llama blo... | @ZhangDanyang-AMD | open | 2026-10-29 | 2026-10-29 |
| [#6952](https://github.com/ROCm/aiter/pull/6952) | [HIP] [OPUS] [JIT] MXFP4 MQA logits update: one API for V4 a... | @shay-li77 | open | 2026-10-26 | 2026-10-29 |
| [#7122](https://github.com/ROCm/aiter/pull/7122) | [Triton/Gluon] Add a gfx1250 Gluon GEMM + all-reduce + RMSNo... | @Boss2002n | draft | 2026-10-29 | 2026-10-29 |
| [#6426](https://github.com/ROCm/aiter/pull/6426) | [FlyDSL] GLM-5.2 o_proj opt for gfx950 | @IzacharyI | open | 2026-10-12 | 2026-10-29 |
| [#6171](https://github.com/ROCm/aiter/pull/6171) | [ASM] [HIP] [JIT] [Perf] [Hardware][MI300X] Delayed mHC seam... | @jhartika-amd | open | 2026-10-06 | 2026-10-29 |
| [#7161](https://github.com/ROCm/aiter/pull/7161) | [HIP] [Bugfix] Include HIP bfloat16 header in MoE sorting | @iraj465 | open | 2026-10-29 | 2026-10-29 |
| [#5969](https://github.com/ROCm/aiter/pull/5969) | [CK] [FlyDSL] Introduce FP8 a8w8 gemm kernel with fp32 block... | @LuweiZhou2025 | open | 2026-09-30 | 2026-10-29 |
| [#6925](https://github.com/ROCm/aiter/pull/6925) | [Triton/Gluon] Allow a strided feature dim in conv_state for... | @AndreasKaratzas | open | 2026-10-26 | 2026-10-29 |
| [#7159](https://github.com/ROCm/aiter/pull/7159) | [OPUS] Fix CU lookup compatibility and gfx1250 kernel querie... | @Fyzyukk | open | 2026-10-29 | 2026-10-29 |
| [#7146](https://github.com/ROCm/aiter/pull/7146) | [FlyDSL] Dev/yadai prefill clean | @yadaish | open | 2026-10-29 | 2026-10-29 |
| [#7160](https://github.com/ROCm/aiter/pull/7160) | [ASM] [HIP] gfx1250 mha bwd: hd64 kernels and hd128 border m... | @slippedJim | open | 2026-10-29 | 2026-10-29 |
| [#6821](https://github.com/ROCm/aiter/pull/6821) | [HIP] [JIT] fused_norm_rope_att_rope_cast kernel | @yzhou103 | open | 2026-10-22 | 2026-10-29 |
| [#6745](https://github.com/ROCm/aiter/pull/6745) | [Triton/Gluon] Fused compress attn in Gluon | @Boss2002n | open | 2026-10-20 | 2026-10-29 |
| [#7110](https://github.com/ROCm/aiter/pull/7110) | Fix for num_local_tokens | @JohnNikolay84 | draft | 2026-10-28 | 2026-10-29 |
| [#7123](https://github.com/ROCm/aiter/pull/7123) | [JIT] [Build] [Prototype] Route rmsnorm and pertoken_quant t... | @zufayu | open | 2026-10-29 | 2026-10-29 |
| [#7086](https://github.com/ROCm/aiter/pull/7086) | [Prototype] Validate AITER kernel provider interface | @zufayu | draft | 2026-10-28 | 2026-10-29 |
| [#6751](https://github.com/ROCm/aiter/pull/6751) | [Triton/Gluon] Fix fused_qk_norm_rope_group_quant | @Boss2002n | open | 2026-10-21 | 2026-10-29 |
| [#7143](https://github.com/ROCm/aiter/pull/7143) | [FlyDSL] fix(mega_moe): strided A scales on stage1_fused gro... | @yanboshao | open | 2026-10-29 | 2026-10-29 |
| [#7097](https://github.com/ROCm/aiter/pull/7097) | MHAv4: temporarily disable `rotated_fp8_quantization_matches... | @jcaraban | open | 2026-10-28 | 2026-10-29 |
| [#5996](https://github.com/ROCm/aiter/pull/5996) | [FlyDSL] [CI] FlyDSL QSA indexer scorer + sparse GQA | @SamiAario-AMD | open | 2026-09-30 | 2026-10-29 |
| [#6831](https://github.com/ROCm/aiter/pull/6831) | [HIP] [Perf] Pipeline CSR segments in unsplit OPUS sparse pr... | @iraj465 | open | 2026-10-22 | 2026-10-29 |
| [#6564](https://github.com/ROCm/aiter/pull/6564) | [HIP] [FlyDSL] perf(mega_moe): fuse the gfx1250 compact disp... | @GwilliamHu | open | 2026-10-15 | 2026-10-29 |
| [#7127](https://github.com/ROCm/aiter/pull/7127) | [FlyDSL] Tune DSv4.1 EP8 A8W4 MegaMoE | @GwilliamHu | open | 2026-10-29 | 2026-10-29 |
| [#7151](https://github.com/ROCm/aiter/pull/7151) | [HIP] [JIT] [Perf] Add gfx950 mHC row finalization and packe... | @iraj465 | open | 2026-10-29 | 2026-10-29 |
| [#7108](https://github.com/ROCm/aiter/pull/7108) | [Feature] Allow explicit Even activation-scale selection for... | @XinyuJiangCMU | open | 2026-10-28 | 2026-10-29 |
| [#5815](https://github.com/ROCm/aiter/pull/5815) | [FlyDSL] [CI] Add FlyDSL fused intranode all-to-all for Ulys... | @johannes-graner | open | 2026-09-24 | 2026-10-29 |
| [#7138](https://github.com/ROCm/aiter/pull/7138) | [FlyDSL] [Config] Tune Kimi-K3 gfx1250 gemm_a4w4 | @lirui927 | open | 2026-10-29 | 2026-10-29 |
| [#7092](https://github.com/ROCm/aiter/pull/7092) | [FlyDSL] pa_decode: zero V rows past the context before PV | @ZLkanyo009 | open | 2026-10-28 | 2026-10-29 |
| [#7063](https://github.com/ROCm/aiter/pull/7063) | [FlyDSL] [Feature] Precompile MoE deployments (EP and TP), d... | @zhiding512 | open | 2026-10-28 | 2026-10-29 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | [FlyDSL] Add adaptive-blocked K5 prefill h-recurrence in GDN | @johannes-graner | open | 2026-09-21 | 2026-10-29 |
| [#5970](https://github.com/ROCm/aiter/pull/5970) | [CI] [JIT] [kernel] Add an opt-in hipBLASLt grouped GEMM bac... | @WuLei-AMD | open | 2026-09-30 | 2026-10-29 |
| [#5577](https://github.com/ROCm/aiter/pull/5577) | [Triton/Gluon] Add FP8 Flash Attention v2 kernel (gfx942/gfx... | @WuLei-AMD | open | 2026-09-16 | 2026-10-29 |
| [#7101](https://github.com/ROCm/aiter/pull/7101) | [HIP] [Bugfix] Accept generic torch.Stream in torch_to_c_typ... | @yuychang | open | 2026-10-28 | 2026-10-29 |
| [#7088](https://github.com/ROCm/aiter/pull/7088) | [Triton/Gluon] [Perf] unified_attention: length-aware KV spl... | @yuychang | open | 2026-10-28 | 2026-10-29 |
| [#7102](https://github.com/ROCm/aiter/pull/7102) | [CK] [Feature] MXFP4 MoE tuner: propose the native BK=128 ge... | @yuychang | open | 2026-10-28 | 2026-10-29 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | Fix the hardcoded die and CU counts in the FlyDSL kernels | @RElbers | draft | 2026-09-14 | 2026-10-29 |
| [#6877](https://github.com/ROCm/aiter/pull/6877) | Fix the hardcoded die count in the HIP kernels | @RElbers | draft | 2026-10-23 | 2026-10-29 |
| [#5505](https://github.com/ROCm/aiter/pull/5505) | Fix the hardcoded die and CU counts in the Triton kernels | @RElbers | draft | 2026-09-14 | 2026-10-29 |
| [#7137](https://github.com/ROCm/aiter/pull/7137) | [HIP] [Perf] topk sampled: a stable mode for topk_select's t... | @MHYangAMD | open | 2026-10-29 | 2026-10-29 |
| [#5938](https://github.com/ROCm/aiter/pull/5938) | [JIT] fix(jit): keep detached-head advice local to third-par... | @adenzhou1350 | open | 2026-09-29 | 2026-10-29 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-10-29 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-10-29 |
| [#7136](https://github.com/ROCm/aiter/pull/7136) | [CK] [Bugfix] Fix CK-Tile MXFP4 MoE stage1 split-k for unali... | @RuibinCheung | open | 2026-10-29 | 2026-10-29 |
| [#6573](https://github.com/ROCm/aiter/pull/6573) | [Triton/Gluon] [Config] gfx1250 Gluon GEMM configs for Kimi-... | @jiaryang | open | 2026-10-15 | 2026-10-29 |
| [#7142](https://github.com/ROCm/aiter/pull/7142) | [HIP] [FlyDSL] [GFX1250] Kimi-K3 DSpark PTPC/blockscale and ... | @XiaobingSuper | open | 2026-10-29 | 2026-10-29 |
| [#7062](https://github.com/ROCm/aiter/pull/7062) | [Test] Regression test for topk_ids tail reads in multi-phas... | @ZLkanyo009 | open | 2026-10-28 | 2026-10-29 |
| [#7130](https://github.com/ROCm/aiter/pull/7130) | [FlyDSL][MoE] Fix gfx1250 HERD decode routing and extend it ... | @charlieguo1106 | open | 2026-10-29 | 2026-10-29 |
| [#5891](https://github.com/ROCm/aiter/pull/5891) | [HIP] [FlyDSL] [MoE]: Optimize MiMo MXFP4 EP8/EP16 on gfx950 | @sammysun0711 | open | 2026-09-27 | 2026-10-29 |
| [#6815](https://github.com/ROCm/aiter/pull/6815) | [ASM] [HIP] feat(pa): add opt-in prefix-budget metadata plan... | @fangche123 | open | 2026-10-22 | 2026-10-29 |
| [#7053](https://github.com/ROCm/aiter/pull/7053) | [FlyDSL] [Bugfix] gfx950 A16W16: reduce split-K and slice-K ... | @AndreasKaratzas | draft | 2026-10-28 | 2026-10-29 |
| [#7157](https://github.com/ROCm/aiter/pull/7157) | [FlyDSL] [CI] All reduce fusion silotiger 1277 try2 | @vedenev-amd | draft | 2026-10-29 | 2026-10-29 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-10-29 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-10-29 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-10-29 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-10-29 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-10-29 |
| [#5260](https://github.com/ROCm/aiter/pull/5260) | [FlyDSL] Add tuned BF16 GEMM configs for GLM-5.2 decode shap... | @nehaprakriya | open | 2026-09-03 | 2026-10-29 |
| [#5358](https://github.com/ROCm/aiter/pull/5358) | [HIP] [FlyDSL] [JIT] Add a6w4 preshuffle GEMM from FlyDSL | @amd-satre | open | 2026-09-08 | 2026-10-29 |
| [#5518](https://github.com/ROCm/aiter/pull/5518) | [FlyDSL] [gfx950] Add explicit page strides and 64-bit rebas... | @LiuYinfeng01 | open | 2026-09-15 | 2026-10-29 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-10-29 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-10-29 |
| [#5882](https://github.com/ROCm/aiter/pull/5882) | [FlyDSL] [MLA] DeepSeek-V4 fp8 MLA decode (v4 nm) in one Fly... | @AMD-yanfeiwang | open | 2026-09-27 | 2026-10-29 |
| [#5887](https://github.com/ROCm/aiter/pull/5887) | [FlyDSL] [PA] Extend pa decode tile to support Qlen8 and SWA... | @sammysun0711 | open | 2026-09-27 | 2026-10-29 |
| [#6026](https://github.com/ROCm/aiter/pull/6026) | [FlyDSL] [Kernel] Add fused KDA decode kernels on gfx950 | @yuychang | open | 2026-10-01 | 2026-10-29 |
| [#6185](https://github.com/ROCm/aiter/pull/6185) | [HIP] [CI] [JIT] Add aiter.mqa_logits with a tuned Triton/Fl... | @amd-sriram | open | 2026-10-06 | 2026-10-29 |
| [#6191](https://github.com/ROCm/aiter/pull/6191) | [CK] [FlyDSL] Mxfp8 w_scale 1*32 | @solinzby1 | open | 2026-10-07 | 2026-10-29 |
| [#6218](https://github.com/ROCm/aiter/pull/6218) | [HIP] [CK] [FlyDSL] FlyDSL A4W4 decode GEMM for M<=16 on gfx... | @johannes-graner | open | 2026-10-07 | 2026-10-29 |
| [#6236](https://github.com/ROCm/aiter/pull/6236) | [FlyDSL] TP2 quick all-reduce through a passive xGMI relay | @samremes | open | 2026-10-07 | 2026-10-29 |
| [#6403](https://github.com/ROCm/aiter/pull/6403) | [FlyDSL] Two-launch FlyDSL delayed mHC seam for gfx942 | @RElbers | open | 2026-10-11 | 2026-10-29 |
| [#6522](https://github.com/ROCm/aiter/pull/6522) | [FlyDSL] generalize gfx942 FMHA varlen backward to head dims... | @amd-wangfan | open | 2026-10-14 | 2026-10-29 |
| [#6552](https://github.com/ROCm/aiter/pull/6552) | [CK] [FlyDSL] gfx942 a16wmix a16w16: honour swiglu_limit for... | @jatseng-ai | open | 2026-10-15 | 2026-10-29 |
| [#6576](https://github.com/ROCm/aiter/pull/6576) | [FlyDSL] Add QSA sparse prefill attention for MI308 | @luocheng25 | open | 2026-10-15 | 2026-10-29 |
| [#6597](https://github.com/ROCm/aiter/pull/6597) | [FlyDSL] [Perf] Cache the gfx950 A16W16 GEMM param per confi... | @afriedri | open | 2026-10-15 | 2026-10-29 |
| [#6605](https://github.com/ROCm/aiter/pull/6605) | [FlyDSL] [Perf] [gfx950] Swap A/B in the mxfp8 8-wave epilog... | @yangyuhuiling | open | 2026-10-16 | 2026-10-29 |
| [#6645](https://github.com/ROCm/aiter/pull/6645) | [FlyDSL] Use HIP to query XCC count and share it with FlyDSL... | @fsx950223 | open | 2026-10-17 | 2026-10-29 |
| [#6662](https://github.com/ROCm/aiter/pull/6662) | [HIP] [FlyDSL] Add gfx1250 implicit-GEMM conv3d | @huizzhan | open | 2026-10-19 | 2026-10-29 |
| [#6764](https://github.com/ROCm/aiter/pull/6764) | [FlyDSL] Add non-causal mode to multi-token PA decode | @rebklee | open | 2026-10-21 | 2026-10-29 |
| [#6810](https://github.com/ROCm/aiter/pull/6810) | [FlyDSL] FlyDSL FCA | @Boss2002n | open | 2026-10-21 | 2026-10-29 |
| [#6828](https://github.com/ROCm/aiter/pull/6828) | [CK] [FlyDSL] [JIT] [Kernel] Add gfx950 4-wave INT8 bpreshuf... | @ksikiric | open | 2026-10-22 | 2026-10-29 |
| [#6847](https://github.com/ROCm/aiter/pull/6847) | [FlyDSL] Precompile only the GPU_ARCHS jobs in the FlyDSL AO... | @RElbers | open | 2026-10-22 | 2026-10-29 |
| [#6853](https://github.com/ROCm/aiter/pull/6853) | [FlyDSL] [Bugfix] gfx950 A16W16: fix int32 C-offset overflow... | @josh-schell-amd | open | 2026-10-23 | 2026-10-29 |
| [#6856](https://github.com/ROCm/aiter/pull/6856) | [HIP] [FlyDSL] [gfx1250] Tune DSv4.1 Flash mxfp8 32x32 GEMMs... | @aoli26 | open | 2026-10-23 | 2026-10-29 |
| [#6911](https://github.com/ROCm/aiter/pull/6911) | [FlyDSL] Preserve FP32 precision in GDN prepare inverse bloc... | @apinge | open | 2026-10-25 | 2026-10-29 |
| [#6956](https://github.com/ROCm/aiter/pull/6956) | [FlyDSL] [JIT] Build the GEMM, conv, chunk_gdn_h and FP8 FMH... | @zhiding512 | open | 2026-10-26 | 2026-10-29 |
| [#6972](https://github.com/ROCm/aiter/pull/6972) | [FlyDSL] [Kernel] Add a DCP mailbox query gather and LSE com... | @xiaohuguo2023 | open | 2026-10-26 | 2026-10-29 |
| [#6976](https://github.com/ROCm/aiter/pull/6976) | [FlyDSL] Align the gfx1250 PA decode layering with gfx942/gf... | @zhiding512 | open | 2026-10-27 | 2026-10-29 |
| [#7060](https://github.com/ROCm/aiter/pull/7060) | [FlyDSL] MiniMax-M3 index score: MXFP4 index-cache decode sc... | @ganyi1996ppo | open | 2026-10-28 | 2026-10-29 |
| [#7061](https://github.com/ROCm/aiter/pull/7061) | [FlyDSL] MiniMax-M3 index score: MXFP4 index-cache prefill s... | @ganyi1996ppo | open | 2026-10-28 | 2026-10-29 |
| [#7076](https://github.com/ROCm/aiter/pull/7076) | [HIP] [FlyDSL] [JIT] GDN K5 opt: fix tuner BV override; add ... | @yicyang | open | 2026-10-28 | 2026-10-29 |
| [#7081](https://github.com/ROCm/aiter/pull/7081) | [FlyDSL] Optimize gfx1250 PA partitions and packed attention | @fsx950223 | open | 2026-10-28 | 2026-10-29 |
| [#7098](https://github.com/ROCm/aiter/pull/7098) | [FlyDSL] [gfx1250] FMHA prefill m32x8: skip query tiles past... | @vgokhale | open | 2026-10-28 | 2026-10-29 |
| [#7153](https://github.com/ROCm/aiter/pull/7153) | [FlyDSL] a16w4 gfx942: opt-in fp8 MFMA mode (AITER_FLYDSL_A1... | @MHYangAMD | open | 2026-10-29 | 2026-10-29 |
| [#7152](https://github.com/ROCm/aiter/pull/7152) | [HIP] [Perf] Several rows per block in dynamic_per_token_sca... | @MHYangAMD | open | 2026-10-29 | 2026-10-29 |
| [#7154](https://github.com/ROCm/aiter/pull/7154) | [Triton/Gluon] [Config] Add gfx1150 Conv3D configs | @klin2024 | draft | 2026-10-29 | 2026-10-29 |
| [#7094](https://github.com/ROCm/aiter/pull/7094) | [Config] Add Muse Spark Open 816B bf16 GEMM configs for gfx9... | @mpashkovskii | open | 2026-10-28 | 2026-10-29 |
| [#6560](https://github.com/ROCm/aiter/pull/6560) | MHAv4 split-KV | @nsakkine | draft | 2026-10-15 | 2026-10-29 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [KIMI-K3] Enable KDA per-channel decay gate in FlyD... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-10-29 |
| [#6865](https://github.com/ROCm/aiter/pull/6865) | review-pr: add HK20 (submodule upstream check) and A4 (new-f... | @yzhou103 | open | 2026-10-23 | 2026-10-29 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-10-29 |
| [#6496](https://github.com/ROCm/aiter/pull/6496) | [Triton/Gluon] [FlyDSL] [gfx950] Add gdn fused prefill kerne... | @amd-nprotaso | open | 2026-10-13 | 2026-10-29 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-10-29 |
| [#5913](https://github.com/ROCm/aiter/pull/5913) | [FlyDSL] feat(2stageGR) Two-stage Hyper-Connection Gated Res... | @damien-lejeune | open | 2026-09-28 | 2026-10-29 |
| [#7148](https://github.com/ROCm/aiter/pull/7148) | [JIT] fix(jit): treat a zombie lock holder as dead in FileBa... | @Woody-Hu | open | 2026-10-29 | 2026-10-29 |
| [#7147](https://github.com/ROCm/aiter/pull/7147) | [FlyDSL] [Bugfix] Fix PA decode scaling and merge alignment | @fsx950223 | open | 2026-10-29 | 2026-10-29 |
| [#6970](https://github.com/ROCm/aiter/pull/6970) | [HIP] [CK] [JIT] [Tuner] Rank accuracy-qualified kernels by ... | @rpoornac | open | 2026-10-26 | 2026-10-29 |
| [#7069](https://github.com/ROCm/aiter/pull/7069) | [Triton/Gluon] GDR decode: optional deferred spec-decode sta... | @zhentaocc | open | 2026-10-28 | 2026-10-29 |
| [#7091](https://github.com/ROCm/aiter/pull/7091) | Check fmoe tuning candidates and run_config results against ... | @RElbers | draft | 2026-10-28 | 2026-10-29 |
| [#6123](https://github.com/ROCm/aiter/pull/6123) | [FlyDSL] [CI] fp8 unified attention for gfx942 (Gemma-4) | @waqahmed-amd-fi | draft | 2026-10-03 | 2026-10-29 |
| [#6270](https://github.com/ROCm/aiter/pull/6270) | [HIP] [JIT] [Feature] Custom allreduce: fused residual add a... | @yuychang | open | 2026-10-08 | 2026-10-29 |
| [#6996](https://github.com/ROCm/aiter/pull/6996) | [ASM] [HIP] gfx1250 mha bwd d192 d128 kernel integration | @JaxChen29 | open | 2026-10-27 | 2026-10-29 |
| [#6978](https://github.com/ROCm/aiter/pull/6978) | [Config] Add MI455 QWEN3.8 TUNED GEMM RESULT | @minmengdie | open | 2026-10-27 | 2026-10-29 |
| [#7139](https://github.com/ROCm/aiter/pull/7139) | aiter#6643: relu2 for legacy ck_gemm_moe_2stages kernel | @shantipriya-amd | draft | 2026-10-29 | 2026-10-29 |
| [#7047](https://github.com/ROCm/aiter/pull/7047) | [Triton/Gluon] Mask OOB e8m0 scales on the ragged-K path of ... | @Ragua1 | open | 2026-10-27 | 2026-10-29 |
| [#6957](https://github.com/ROCm/aiter/pull/6957) | [HIP] Fix mHC pre cross-batch numerical consistency on gfx95... | @Qubitium | open | 2026-10-26 | 2026-10-29 |
| [#6162](https://github.com/ROCm/aiter/pull/6162) | [HIP] [Perf] Tune GLM-5.3 packed-BF16 mHC post/pre on gfx950 | @Raiden-Makoto | open | 2026-10-06 | 2026-10-29 |
| [#7116](https://github.com/ROCm/aiter/pull/7116) | [Triton/Gluon] act_mul_and_mxfp4_quant: honour scaling_mode,... | @vorapolsiloai | draft | 2026-10-28 | 2026-10-29 |
| [#7135](https://github.com/ROCm/aiter/pull/7135) | [MoE] Public two-stage fused_moe API: fused_moe_stage1 / fus... | @fanxingran | open | 2026-10-29 | 2026-10-29 |
| [#6960](https://github.com/ROCm/aiter/pull/6960) | [HIP] Add `all_gather_lastdim_add` to the custom all-reduce | @aryatsc | open | 2026-10-26 | 2026-10-29 |
| [#7079](https://github.com/ROCm/aiter/pull/7079) | [FlyDSL] Merge gfx1250 PA decode partitions in the tile kern... | @zhiding512 | open | 2026-10-28 | 2026-10-29 |
| [#6575](https://github.com/ROCm/aiter/pull/6575) | MHAv4 per-row block-sparse geometry, LSE and ragged KV on gf... | @nsakkine | draft | 2026-10-15 | 2026-10-29 |
| [#7133](https://github.com/ROCm/aiter/pull/7133) | [Triton/Gluon] [MLA] gfx1250: write the asm MLA decode KV la... | @mqhc2020 | draft | 2026-10-29 | 2026-10-29 |
| [#7134](https://github.com/ROCm/aiter/pull/7134) | [HIP] [Perf] Route gfx950 E=128..255 decode at M>=17 to mult... | @lishuoshuo-amd | open | 2026-10-29 | 2026-10-29 |
| [#7083](https://github.com/ROCm/aiter/pull/7083) | [HIP] [Bugfix] Honor num_local_tokens on the MXFP4 inline-so... | @ZLkanyo009 | open | 2026-10-28 | 2026-10-29 |
| [#7075](https://github.com/ROCm/aiter/pull/7075) | [Config] Add MI350P TP1 a4w4 GEMM tuning for Qwen3.8-27B-Qua... | @a-sidorova | open | 2026-10-28 | 2026-10-29 |
| [#6889](https://github.com/ROCm/aiter/pull/6889) | [Triton/Gluon] Window-aware split-KV for sliding-window veri... | @okorzh-amd | open | 2026-10-23 | 2026-10-29 |
| [#7131](https://github.com/ROCm/aiter/pull/7131) | [HIP] [JIT] [gfx1250] Add Mega-MHC kernels for DeepSeek-V4.1... | @junhaha666 | open | 2026-10-29 | 2026-10-29 |
| [#7126](https://github.com/ROCm/aiter/pull/7126) | [Triton/Gluon] [FlyDSL] [Bugfix] Never share scratch buffers... | @Fangzhou-Ai | draft | 2026-10-29 | 2026-10-29 |
| [#7129](https://github.com/ROCm/aiter/pull/7129) | [CK] [MoE] Run FP8 MoE on any multiple-of-8 intermediate siz... | @rasmith | open | 2026-10-29 | 2026-10-29 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [CI] fix(jit): baton liveness is undecidable fr... | @ThomasNing | open | 2026-09-03 | 2026-10-29 |
| [#7018](https://github.com/ROCm/aiter/pull/7018) | [Config] [Perf] Tune DeepSeek-V4 M1/M2/M8/M64 FP8 GEMMs on g... | @amd-ruitang3 | open | 2026-10-27 | 2026-10-29 |
| [#6583](https://github.com/ROCm/aiter/pull/6583) | [MoE] fused_moe: add a deterministic mode for MXFP4 MoE | @aarnetalman | open | 2026-10-15 | 2026-10-29 |
| [#6557](https://github.com/ROCm/aiter/pull/6557) | [FlyDSL] [gfx1250] Tune DeepSeek-R1 FP4 MoE tiles for high-b... | @karverma-amd | open | 2026-10-15 | 2026-10-29 |
| [#6998](https://github.com/ROCm/aiter/pull/6998) | [FlyDSL] Support wave32 (gfx1250) in the DCP decode top-k me... | @zejunchen-zejun | open | 2026-10-27 | 2026-10-29 |
| [#7125](https://github.com/ROCm/aiter/pull/7125) | [HIP] [MLA] Balance the gfx950 XCD-lane decode planner on sk... | @nehmathe2 | draft | 2026-10-29 | 2026-10-29 |
| [#5918](https://github.com/ROCm/aiter/pull/5918) | [HIP] Add fused all_reduce_add; retune gfx950 all-reduce dis... | @cpersson-amd | open | 2026-09-28 | 2026-10-29 |
| [#6808](https://github.com/ROCm/aiter/pull/6808) | [HIP] Added an optional pre-quant k_out_unquantized under fp... | @jhu960213 | open | 2026-10-21 | 2026-10-29 |
| [#6881](https://github.com/ROCm/aiter/pull/6881) | [FlyDSL] [CI] MegaMoEV2: fuse Dispatch, GEMM1, GEMM2 and Com... | @IzacharyI | open | 2026-10-23 | 2026-10-29 |
| [#6238](https://github.com/ROCm/aiter/pull/6238) | [Triton/Gluon] [gfx1250] batched a16w8/a8w8/bf16: fp8 output... | @karverma-amd | open | 2026-10-08 | 2026-10-29 |
| [#6987](https://github.com/ROCm/aiter/pull/6987) | [FlyDSL] FlyDSL MoE RMSNorm Support | @amirumoAMD | open | 2026-10-27 | 2026-10-29 |
| [#6824](https://github.com/ROCm/aiter/pull/6824) | [OPUS] support 1x32 bmm bpreshuffle | @yzhou103 | open | 2026-10-22 | 2026-10-29 |
| [#6430](https://github.com/ROCm/aiter/pull/6430) | [Triton/Gluon] [FlyDSL] [CI] [MoE] MegaMoE gfx1250: stage1/s... | @jhchouuu | open | 2026-10-12 | 2026-10-29 |
| [#7057](https://github.com/ROCm/aiter/pull/7057) | [HIP] fused_qknorm_idxrqknorm: write MXFP4 index-K and main ... | @ganyi1996ppo | open | 2026-10-28 | 2026-10-29 |
| [#7056](https://github.com/ROCm/aiter/pull/7056) | [FlyDSL] Add an MXFP4 KV-cache paged-attention decode (gfx95... | @ganyi1996ppo | draft | 2026-10-28 | 2026-10-29 |
| [#4813](https://github.com/ROCm/aiter/pull/4813) | [HIP] [JIT] Fused MiniMaxM3 QKNorm+RoPE+CacheInsert | @weitliao | open | 2026-08-18 | 2026-10-29 |
| [#6266](https://github.com/ROCm/aiter/pull/6266) | [FlyDSL] [Perf] MLA single-split fill skip and FP8 descales ... | @yuychang | open | 2026-10-08 | 2026-10-29 |
| [#6983](https://github.com/ROCm/aiter/pull/6983) | [Triton/Gluon] [gfx950] unified_attention: split-KV 3D confi... | @lishuoshuo-amd | open | 2026-10-27 | 2026-10-29 |
| [#6854](https://github.com/ROCm/aiter/pull/6854) | [Triton/Gluon] [Bugfix] Fix uneven split-K bug in fused a8w8... | @hunhokim | open | 2026-10-23 | 2026-10-29 |
| [#6927](https://github.com/ROCm/aiter/pull/6927) | [HIP] [Perf] gfx950 bf16 sparse prefill (H > 32): 4 waves, t... | @jbelofamd | open | 2026-10-26 | 2026-10-29 |
| [#7120](https://github.com/ROCm/aiter/pull/7120) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE + KV ... | @Boss2002n | draft | 2026-10-29 | 2026-10-29 |
| [#7118](https://github.com/ROCm/aiter/pull/7118) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE for Q... | @Boss2002n | draft | 2026-10-28 | 2026-10-29 |
| [#7117](https://github.com/ROCm/aiter/pull/7117) | [Triton/Gluon] [Config] a4w4: dispatch triton_preshuffle tun... | @vorapolsiloai | draft | 2026-10-28 | 2026-10-29 |
| [#7111](https://github.com/ROCm/aiter/pull/7111) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-10-29 |
| [#6859](https://github.com/ROCm/aiter/pull/6859) | [Triton/Gluon] Fix Flash Attention main ci | @micmelesse | draft | 2026-10-23 | 2026-10-29 |
| [#7121](https://github.com/ROCm/aiter/pull/7121) | [Triton/Gluon] : Add exclude list arg and allow list/dict/tu... | @rahulbatra85 | open | 2026-10-29 | 2026-10-29 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-10-29 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [CK] [JIT] [feature] Extract C++ code to jinja template file... | @jbelloncastro | open | 2026-06-18 | 2026-10-29 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-10-29 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [JIT] [gfx942] Optimize long-context FMHA with s... | @amd-yashagar | open | 2026-09-16 | 2026-10-29 |
| [#6124](https://github.com/ROCm/aiter/pull/6124) | [Triton/Gluon] [Bugfix] Guard SiLU backward on unsupported a... | @DaiXindi-AMD | open | 2026-10-03 | 2026-10-29 |
| [#6141](https://github.com/ROCm/aiter/pull/6141) | [CI] [gfx950] Execute pytest regressions in standard shards ... | @chandankumr | open | 2026-10-05 | 2026-10-29 |
| [#6241](https://github.com/ROCm/aiter/pull/6241) | [Triton/Gluon] Add improved fused kv cache kernel for DSR1 | @azaidy | open | 2026-10-08 | 2026-10-29 |
| [#6322](https://github.com/ROCm/aiter/pull/6322) | [HIP] [Bugfix] sampling radix_topk_one_block_kernel: honor r... | @truong-v | open | 2026-10-09 | 2026-10-29 |
| [#6356](https://github.com/ROCm/aiter/pull/6356) | [CK] [Bugfix] Fix gfx1250 grouped MoE tuning and re-tune 18 ... | @jhinpan | open | 2026-10-10 | 2026-10-29 |
| [#6375](https://github.com/ROCm/aiter/pull/6375) | [ASM] Rebuild gfx950 fp8 block-scale fused-MoE 64x128, 64x25... | @samremes | open | 2026-10-10 | 2026-10-29 |
| [#7033](https://github.com/ROCm/aiter/pull/7033) | [Triton/Gluon] Fix GLM-5.3 FP8 GEMM batch consistency | @Qubitium | open | 2026-10-27 | 2026-10-29 |
| [#6839](https://github.com/ROCm/aiter/pull/6839) | [Triton/Gluon] : (UNIFIED ATTENTION) Add rotating buffers an... | @rahulbatra85 | open | 2026-10-22 | 2026-10-29 |
| [#6637](https://github.com/ROCm/aiter/pull/6637) | [Triton/Gluon] : (ATTN) Add rotating buffers and do_bench_ai... | @rahulbatra85 | open | 2026-10-17 | 2026-10-29 |
| [#6684](https://github.com/ROCm/aiter/pull/6684) | [Triton/Gluon] : (DeepSeek) Add rotating buffers and do_benc... | @rahulbatra85 | open | 2026-10-19 | 2026-10-29 |
| [#6885](https://github.com/ROCm/aiter/pull/6885) | [Test] Accept equal-score boundary ties in test_topk_softmax... | @KHassanQazi | open | 2026-10-23 | 2026-10-29 |
| [#6886](https://github.com/ROCm/aiter/pull/6886) | [Test] Use the device fp8 range in test_fused_kv_norm_rope_g... | @KHassanQazi | open | 2026-10-23 | 2026-10-29 |
| [#6887](https://github.com/ROCm/aiter/pull/6887) | [Test] Return zero from the MLA round-robin golden for fully... | @KHassanQazi | open | 2026-10-23 | 2026-10-29 |
| [#7080](https://github.com/ROCm/aiter/pull/7080) | [HIP] Speed up gfx1250 two-stage AR RMSNorm FP8 amax reducti... | @xytpai | open | 2026-10-28 | 2026-10-29 |
| [#7082](https://github.com/ROCm/aiter/pull/7082) | [HIP] Fuse gfx1250 LL all-reduce RMSNorm FP8 epilogue | @xytpai | open | 2026-10-28 | 2026-10-29 |
| [#7090](https://github.com/ROCm/aiter/pull/7090) | [Triton/Gluon] Cache gfx1250 GEMM layout metadata on the hos... | @xytpai | open | 2026-10-28 | 2026-10-29 |
| [#7104](https://github.com/ROCm/aiter/pull/7104) | [FlyDSL] moe_reduce: guard against -1 topk_ids padding senti... | @rjrock | open | 2026-10-28 | 2026-10-29 |
| [#7109](https://github.com/ROCm/aiter/pull/7109) | [Config] Add Muse Spark Open 816B MXFP4 fused-MoE FlyDSL con... | @mpashkovskii | open | 2026-10-28 | 2026-10-29 |
| [#6843](https://github.com/ROCm/aiter/pull/6843) | [Triton/Gluon] : (GATED DELTA) Add rotating buffers and do_b... | @rahulbatra85 | open | 2026-10-22 | 2026-10-29 |
| [#6682](https://github.com/ROCm/aiter/pull/6682) | [Triton/Gluon] : (QUANT, CE AND TRANS) Add rotating buffers ... | @rahulbatra85 | open | 2026-10-19 | 2026-10-29 |
| [#7119](https://github.com/ROCm/aiter/pull/7119) | [FlyDSL] Fix gfx1250 GEMM output offset overflow | @chandankumr | open | 2026-10-29 | 2026-10-29 |
| [#6635](https://github.com/ROCm/aiter/pull/6635) | [Triton/Gluon] : (FUSED) Add rotating buffers and do_bench_a... | @rahulbatra85 | open | 2026-10-16 | 2026-10-29 |
| [#7114](https://github.com/ROCm/aiter/pull/7114) | [HIP] [Perf] fn-resident mHC pre GEMM and bf16 hi/lo split f... | @anhminhnguyenhoang | draft | 2026-10-28 | 2026-10-28 |
| [#6891](https://github.com/ROCm/aiter/pull/6891) | [HIP] [MLA] Fix dropped and misplaced KV ranges in v1_0 and ... | @m8than | open | 2026-10-23 | 2026-10-28 |
| [#6277](https://github.com/ROCm/aiter/pull/6277) | [ASM] [HIP] [MLA] [Bugfix] Fix and optimize the gfx942 MLA d... | @jonahbernard | open | 2026-10-08 | 2026-10-28 |
| [#7031](https://github.com/ROCm/aiter/pull/7031) | [Triton/Gluon] [HIP] [OPUS] [GEMM] Keep GLM-5.3 BF16 project... | @Qubitium | open | 2026-10-27 | 2026-10-28 |
| [#7035](https://github.com/ROCm/aiter/pull/7035) | [OPUS] [GEMM] Keep GLM-5.3 indexer prefills consistent after... | @Qubitium | open | 2026-10-27 | 2026-10-28 |
| [#6475](https://github.com/ROCm/aiter/pull/6475) | [Triton/Gluon] [Bugfix] unified_attention: mask the V page t... | @aaab8b | open | 2026-10-13 | 2026-10-28 |
| [#7107](https://github.com/ROCm/aiter/pull/7107) | [Triton/Gluon] [gfx1250] Fused GDN speculative-verify step o... | @ahmed-bsod | draft | 2026-10-28 | 2026-10-28 |
| [#6714](https://github.com/ROCm/aiter/pull/6714) | [Triton/Gluon] Avoid attn_fwd recompiles for new varlen max ... | @umarkovi-amd | draft | 2026-10-20 | 2026-10-28 |
| [#7106](https://github.com/ROCm/aiter/pull/7106) | [Tuning] Skip run_config tests that have no tuned rows for t... | @RElbers | open | 2026-10-28 | 2026-10-28 |
| [#6875](https://github.com/ROCm/aiter/pull/6875) | [Triton/Gluon] Fix model benchmark scripts | @brunomazzottiamd | open | 2026-10-23 | 2026-10-28 |
| [#7100](https://github.com/ROCm/aiter/pull/7100) | [Triton/Gluon] [GFX12] Add SPEC_DECODE mode to UA with tunne... | @k50112113 | draft | 2026-10-28 | 2026-10-28 |
| [#6335](https://github.com/ROCm/aiter/pull/6335) | [fused_moe] Raise when an active swiglu_limit would be silen... | @jatseng-ai | open | 2026-10-09 | 2026-10-28 |
| [#6237](https://github.com/ROCm/aiter/pull/6237) | [CK] Catch MoE accuracy failures that CI currently logs and ... | @KHassanQazi | open | 2026-10-07 | 2026-10-28 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] [CI] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-10-28 |
| [#6958](https://github.com/ROCm/aiter/pull/6958) | [HIP] [JIT] [MSA] nvfp4 index key cache for the MSA indexer:... | @sshlyapn | open | 2026-10-26 | 2026-10-28 |
| [#6951](https://github.com/ROCm/aiter/pull/6951) | [Triton/Gluon] Fix Triton A8W8 Per-token Preshuffled GEMM | @farlukas | open | 2026-10-26 | 2026-10-28 |
| [#6866](https://github.com/ROCm/aiter/pull/6866) | [Triton/Gluon] Add hadamard_rotate to fused_rms_gated_mxfp4_... | @mjkvaak-amd | open | 2026-10-23 | 2026-10-28 |
| [#7027](https://github.com/ROCm/aiter/pull/7027) | [Triton] [Config] [gfx950] unified_attention: two-chunk QK d... | @tkarttunen | draft | 2026-10-27 | 2026-10-28 |
| [#5846](https://github.com/ROCm/aiter/pull/5846) | [CK] [FlyDSL] [CI] [Tuning] Per-candidate faults, selection ... | @amd-bartgips | open | 2026-09-25 | 2026-10-28 |
| [#6961](https://github.com/ROCm/aiter/pull/6961) | [Triton/Gluon] Add on-device kernel selection to mla_gluon f... | @aryatsc | open | 2026-10-26 | 2026-10-28 |
| [#5849](https://github.com/ROCm/aiter/pull/5849) | [Tuning] A family-agnostic race for large candidate fields (... | @amd-bartgips | draft | 2026-09-25 | 2026-10-28 |
| [#6580](https://github.com/ROCm/aiter/pull/6580) | [MHA] Tune MHA forward across every backend on the shared tu... | @amd-bartgips | draft | 2026-10-15 | 2026-10-28 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [MHA] Route MHA forward through a tuned backend row | @amd-bartgips | open | 2026-09-22 | 2026-10-28 |
| [#6727](https://github.com/ROCm/aiter/pull/6727) | [Triton/Gluon] Add Split-K Variant of A8W8 BMM with Fused Re... | @farlukas | open | 2026-10-20 | 2026-10-28 |
| [#6545](https://github.com/ROCm/aiter/pull/6545) | [Triton/Gluon] Enable and tune pipelined unshuffled MLA deco... | @justinrosner | open | 2026-10-14 | 2026-10-28 |
| [#6849](https://github.com/ROCm/aiter/pull/6849) | [Triton/Gluon] feat(triton): add broadcast-Q causal jagged a... | @sunxxuns | open | 2026-10-22 | 2026-10-28 |
| [#7093](https://github.com/ROCm/aiter/pull/7093) | [FlyDSL] QuickAllReduce INT4: faster poll and codec, kernel-... | @a-sidorova | open | 2026-10-28 | 2026-10-28 |
| [#5186](https://github.com/ROCm/aiter/pull/5186) | [CK] [OPUS] [CI] Mi300a enablement | @afanfa | open | 2026-09-01 | 2026-10-28 |
| [#6458](https://github.com/ROCm/aiter/pull/6458) | [Triton/Gluon] [Kernel] Add dual-layout H16 MXFP4 quantizati... | @DaiXindi-AMD | open | 2026-10-13 | 2026-10-28 |
| [#6024](https://github.com/ROCm/aiter/pull/6024) | [Triton/Gluon] [Perf] fused_reduce_act_mul_and_mxfp4_quant: ... | @reger-men | open | 2026-09-30 | 2026-10-28 |
| [#6091](https://github.com/ROCm/aiter/pull/6091) | [HIP] [MLA] Fix non-uniform query offsets after head folding | @xaguilar-amd | open | 2026-10-02 | 2026-10-28 |
| [#6883](https://github.com/ROCm/aiter/pull/6883) | [Test] Stop test_kvcache from counting uninitialized cache b... | @KHassanQazi | open | 2026-10-23 | 2026-10-28 |
| [#6822](https://github.com/ROCm/aiter/pull/6822) | MHA v4 sparsified online (sol) attention for gfx950 | @nsakkine | draft | 2026-10-22 | 2026-10-28 |
| [#5670](https://github.com/ROCm/aiter/pull/5670) | [FlyDSL] Fused all-reduce + RMSNorm | @vpietila-amd | draft | 2026-09-18 | 2026-10-28 |
| [#6444](https://github.com/ROCm/aiter/pull/6444) | [HIP] PA decode PS reduce: optional query_start_loc for ragg... | @andrei-kochin | open | 2026-10-12 | 2026-10-28 |
| [#6696](https://github.com/ROCm/aiter/pull/6696) | [HIP] [OPUS] Add Blockscale_mxfp8 OPUS GEMM | @Fyzyukk | open | 2026-10-20 | 2026-10-28 |
| [#6486](https://github.com/ROCm/aiter/pull/6486) | [HIP] [Bugfix] Fix Gluon PA AOT padding specialization and c... | @sammysun0711 | open | 2026-10-13 | 2026-10-28 |
| [#6894](https://github.com/ROCm/aiter/pull/6894) | [FlyDSL] [Perf] gfx1250 grouped MoE: route small TP batches ... | @ahmed-bsod | open | 2026-10-23 | 2026-10-28 |
| [#5555](https://github.com/ROCm/aiter/pull/5555) | [FlyDSL] QuickAllReduce INT5/INT6 and all-reduce cleanup | @msaffari-amd | draft | 2026-09-15 | 2026-10-28 |
| [#6705](https://github.com/ROCm/aiter/pull/6705) | [Triton/Gluon] [JIT] Fix/triton fp8 dtype triton only | @MHYangAMD | open | 2026-10-20 | 2026-10-28 |
| [#7089](https://github.com/ROCm/aiter/pull/7089) | [Fix] Skip empty-work gathers in gfx1250 MLA PS1 | @XiaobingSuper | draft | 2026-10-28 | 2026-10-28 |
| [#5985](https://github.com/ROCm/aiter/pull/5985) | [HIP] Opt group quant gfx1250 | @yzhou103 | open | 2026-09-30 | 2026-10-28 |
| [#6558](https://github.com/ROCm/aiter/pull/6558) | [FlyDSL] [CI] [MoonEP] Run the planner and weight pool on gf... | @JiaoliangYu | open | 2026-10-15 | 2026-10-28 |
| [#6219](https://github.com/ROCm/aiter/pull/6219) | [Triton/Gluon] moe_gemm_a8w8: fnuz FP8 and MXFP8 on gfx942 | @akii96 | open | 2026-10-07 | 2026-10-28 |
| [#7084](https://github.com/ROCm/aiter/pull/7084) | [Triton/Gluon] [Test] GLM-5.3-Flash W46 baseline: aiter#6912... | @waqahmed-amd-fi | draft | 2026-10-28 | 2026-10-28 |
| [#6710](https://github.com/ROCm/aiter/pull/6710) | [Triton/Gluon] Add fused_layernorm_indexed_adaln for diffusi... | @klin2024 | open | 2026-10-20 | 2026-10-28 |
| [#6464](https://github.com/ROCm/aiter/pull/6464) | Fea/mxfp4 flydsl a8w4 opt & replace | @Bernard-Liu | draft | 2026-10-13 | 2026-10-28 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | [FlyDSL] gfx1201 (RDNA4) FlyDSL BF16 attention optimizations... | @pds-amd | open | 2026-07-10 | 2026-10-28 |
| [#7064](https://github.com/ROCm/aiter/pull/7064) | [HIP] Optimize gfx1250 no-quant RMSNorm dispatch for wave32 | @xytpai | open | 2026-10-28 | 2026-10-28 |
| [#7078](https://github.com/ROCm/aiter/pull/7078) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w16_gated DEFAUL... | @klin2024 | draft | 2026-10-28 | 2026-10-28 |
| [#6932](https://github.com/ROCm/aiter/pull/6932) | [Config] [Perf] Add DSV4 EP8 MXFP4 (a4w4) fused-MoE rows for... | @jbelofamd | open | 2026-10-26 | 2026-10-28 |
| [#5910](https://github.com/ROCm/aiter/pull/5910) | [fix] Make dropout-free varlen attention inference CUDA-grap... | @lauri9 | open | 2026-09-28 | 2026-10-28 |
| [#7072](https://github.com/ROCm/aiter/pull/7072) | [Triton/Gluon] [Config] Add gfx1150 fused_indexed_gated_resi... | @klin2024 | draft | 2026-10-28 | 2026-10-28 |
| [#6945](https://github.com/ROCm/aiter/pull/6945) | [Config][Perf] Add gfx942 BF16 GEMM configs for the Muse Spa... | @mjkvaak-amd | draft | 2026-10-26 | 2026-10-28 |
| [#7071](https://github.com/ROCm/aiter/pull/7071) | [Triton/Gluon] [Config] Add gfx1150 fused_sigmoid_mul config | @klin2024 | draft | 2026-10-28 | 2026-10-28 |
| [#7065](https://github.com/ROCm/aiter/pull/7065) | [Triton/Gluon] [MoE] One-launch decode sort that also zeroes... | @micah-wil | draft | 2026-10-28 | 2026-10-28 |
| [#6586](https://github.com/ROCm/aiter/pull/6586) | [HIP] [Fix][Perf] topk_plain: correct multi-block fp16/bf16 ... | @zhentaocc | open | 2026-10-15 | 2026-10-28 |
| [#7030](https://github.com/ROCm/aiter/pull/7030) | [Triton/Gluon] [Config] Tune the gfx1150 gemm_a16w16 DEFAULT... | @klin2024 | draft | 2026-10-27 | 2026-10-28 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-10-28 |
| [#7008](https://github.com/ROCm/aiter/pull/7008) | [Triton/Gluon] [QSA] FP8 KV and FP8 / FP4 index caches, stac... | @ZLkanyo009 | open | 2026-10-27 | 2026-10-28 |
| [#6905](https://github.com/ROCm/aiter/pull/6905) | [Triton/Gluon] [gfx1250] Fused GDN decode for Qwen3.5/3.8 on... | @ahmed-bsod | open | 2026-10-24 | 2026-10-28 |
| [#6990](https://github.com/ROCm/aiter/pull/6990) | [CK] [Bugfix] Align batch prefill full-attention dispatch | @lunarwhite | open | 2026-10-27 | 2026-10-28 |
| [#6999](https://github.com/ROCm/aiter/pull/6999) | [Triton/Gluon] [Perf] gfx1250 unified attention 2D: pass num... | @akao-amd | open | 2026-10-27 | 2026-10-28 |
| [#7000](https://github.com/ROCm/aiter/pull/7000) | [HIP] [Perf] OPUS sparse MLA v4 prefill: warp-specialized fp... | @chushic | open | 2026-10-27 | 2026-10-28 |
| [#7001](https://github.com/ROCm/aiter/pull/7001) | [FlyDSL] [Perf] MegaMoE: faster compact Stage1 producer and ... | @chushic | open | 2026-10-27 | 2026-10-28 |
| [#7010](https://github.com/ROCm/aiter/pull/7010) | [HIP] fix(fused_moe): give non-persistent per_1x128 1-stage ... | @JiaoliangYu | open | 2026-10-27 | 2026-10-28 |
| [#7029](https://github.com/ROCm/aiter/pull/7029) | [CI] Triton nightly test | @Boss2002n | open | 2026-10-27 | 2026-10-28 |
| [#7059](https://github.com/ROCm/aiter/pull/7059) | [Triton/Gluon] [Config] Add gfx1150 RMSNorm large-M/small-N ... | @klin2024 | draft | 2026-10-28 | 2026-10-28 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-10-28 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-10-28 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-10-28 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-10-28 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-10-28 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-10-28 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-10-28 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-10-28 |
| [#4786](https://github.com/ROCm/aiter/pull/4786) | fix(custom_all_reduce): use SYSTEM scope + ACQUIRE ordering ... | @hekhong-png | open | 2026-08-16 | 2026-10-29 |
| [#5219](https://github.com/ROCm/aiter/pull/5219) | [Config] DSv4 TP8 a8w8 blockscale bpreshuffle: add Flash and... | @kevin-mii | open | 2026-09-02 | 2026-10-28 |
| [#5220](https://github.com/ROCm/aiter/pull/5220) | [HIP] pa_sparse_prefill: address out with its own strides | @kevin-mii | open | 2026-09-03 | 2026-10-28 |
| [#5855](https://github.com/ROCm/aiter/pull/5855) | [MORI] Multi-node + MORI_V2 | @k50112113 | open | 2026-09-25 | 2026-10-28 |
| [#5929](https://github.com/ROCm/aiter/pull/5929) | [Triton/Gluon] gfx950 split-KV 3D attention for head_dim >= ... | @prashant182 | open | 2026-09-29 | 2026-10-28 |
| [#6358](https://github.com/ROCm/aiter/pull/6358) | [Config] [gfx1250] Select the FlyDSL kernel for 20 BF16 GEMM... | @jhinpan | open | 2026-10-10 | 2026-10-28 |
| [#6785](https://github.com/ROCm/aiter/pull/6785) | [HIP] [Perf] paged_attention_ll4mi: read V transposed with d... | @Arist12 | open | 2026-10-21 | 2026-10-28 |
| [#6433](https://github.com/ROCm/aiter/pull/6433) | [Config] [Perf] Add gfx950 DSV4.1 Flash TP4 fused-shared-exp... | @kevin-mii | open | 2026-10-12 | 2026-10-28 |
| [#5561](https://github.com/ROCm/aiter/pull/5561) | [Bugfix] Drain FlyDSL stage-1 LDS-DMA loads before the tile ... | @kevin-mii | draft | 2026-09-15 | 2026-10-28 |
| [#6067](https://github.com/ROCm/aiter/pull/6067) | [ASM] [HIP] [CK] Add persistent gfx950 f4gemm 256x256 kernel... | @tarik-sarac | open | 2026-10-01 | 2026-10-28 |
| [#6786](https://github.com/ROCm/aiter/pull/6786) | [HIP] [Feature] a8w8 blockscale asm: out_zeroed skips the sp... | @kevin-mii | draft | 2026-10-21 | 2026-10-28 |
| [#6947](https://github.com/ROCm/aiter/pull/6947) | [Config] Tuning/beam bf16 gfx950 | @jamesETsmith | open | 2026-10-26 | 2026-10-27 |
| [#7050](https://github.com/ROCm/aiter/pull/7050) | [FlyDSL] QuickReduce INT4: default super_tile 1 on gfx950 | @amd-sriram | draft | 2026-10-27 | 2026-10-27 |
| [#7043](https://github.com/ROCm/aiter/pull/7043) | [Config] Add M=4096 Qwen3.8-27B TP1 a8w8 blockscale GEMM row... | @phambinhfin | draft | 2026-10-27 | 2026-10-27 |
| [#7049](https://github.com/ROCm/aiter/pull/7049) | [Config] [Tune] GLM-5.3-Flash TP4 bf16 and a8w8 blockscale G... | @amd-sriram | draft | 2026-10-27 | 2026-10-27 |
| [#6784](https://github.com/ROCm/aiter/pull/6784) | [Triton/Gluon] Nimit/gfx1250 pa decode tuning | @NimitPtl | open | 2026-10-21 | 2026-10-27 |
| [#6835](https://github.com/ROCm/aiter/pull/6835) | [Triton/Gluon] Add fused Qwen3-Next attention prologue (gfx9... | @karverma-amd | open | 2026-10-22 | 2026-10-27 |
| [#7044](https://github.com/ROCm/aiter/pull/7044) | [Config] GLM-5.x gfx942 TP8 decode: use the flat kernel at M... | @phambinhfin | draft | 2026-10-27 | 2026-10-27 |
| [#5786](https://github.com/ROCm/aiter/pull/5786) | [CI] [JIT] [Build] Make CK fmha kernel generation follow GPU... | @qiangpan2 | open | 2026-09-23 | 2026-10-27 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-10-27 |
| [#6594](https://github.com/ROCm/aiter/pull/6594) | [Triton/Gluon] Route short sliding-window queries to the gfx... | @hongxiayang | open | 2026-10-15 | 2026-10-27 |
| [#6140](https://github.com/ROCm/aiter/pull/6140) | [HIP] [FlyDSL] [CI] Add aiter.paged_mqa_logits with a tuned ... | @amd-sriram | open | 2026-10-04 | 2026-10-27 |
| [#6167](https://github.com/ROCm/aiter/pull/6167) | [Triton/Gluon] unified_attention_sparse_mla: read launch val... | @Ragua1 | open | 2026-10-06 | 2026-10-27 |
| [#6904](https://github.com/ROCm/aiter/pull/6904) | [HIP] Add gfx1101 to allowed_archs in csrc/cpp_itfs/utils.py | @Ragua1 | open | 2026-10-24 | 2026-10-27 |
| [#7028](https://github.com/ROCm/aiter/pull/7028) | [Triton/Gluon] Updates to causal_conv1d_split_qkv kernel | @omuhamma | open | 2026-10-27 | 2026-10-27 |
| [#7034](https://github.com/ROCm/aiter/pull/7034) | [Triton/Gluon] KDA cleanup | @omuhamma | open | 2026-10-27 | 2026-10-27 |
| [#7041](https://github.com/ROCm/aiter/pull/7041) | tuning_on_benchmarks | @Boss2002n | draft | 2026-10-27 | 2026-10-27 |
| [#7040](https://github.com/ROCm/aiter/pull/7040) | [Triton/Gluon] : Add padding-mode support to specialized Tri... | @saeid-rostami | open | 2026-10-27 | 2026-10-27 |
| [#7039](https://github.com/ROCm/aiter/pull/7039) | [Test] Pass split_k to get_split_k_buffers in test_graph_all... | @eppaneamd | draft | 2026-10-27 | 2026-10-27 |
| [#6884](https://github.com/ROCm/aiter/pull/6884) | [Triton/Gluon] Support a bf16 recurrent state in the fused G... | @eky-amd | open | 2026-10-23 | 2026-10-27 |
| [#7019](https://github.com/ROCm/aiter/pull/7019) | [CK] Enable swiglu_limit for FP8 per_1x128 blockscale MoE | @msaffari-amd | draft | 2026-10-27 | 2026-10-27 |
| [#7032](https://github.com/ROCm/aiter/pull/7032) | [Triton/Gluon] Triton Conv padding-mode support | @saeid-rostami | draft | 2026-10-27 | 2026-10-27 |
| [#6922](https://github.com/ROCm/aiter/pull/6922) | [Triton/Gluon] Tuning scripts: write the largest tuned bucke... | @Boss2002n | open | 2026-10-25 | 2026-10-27 |
| [#6908](https://github.com/ROCm/aiter/pull/6908) | [Triton/Gluon] gfx942: A16W4 (bf16 x MXFP4) MoE GEMM with v_... | @ishara0925 | open | 2026-10-25 | 2026-10-27 |
| [#6967](https://github.com/ROCm/aiter/pull/6967) | [Triton/Gluon] Add fused MoE routing kernel | @azaidy | open | 2026-10-26 | 2026-10-27 |
| [#6944](https://github.com/ROCm/aiter/pull/6944) | [Bugfix] Detect XGMI topology for custom all-reduce | @olka-amd | open | 2026-10-26 | 2026-10-27 |
| [#7024](https://github.com/ROCm/aiter/pull/7024) | [FlyDSL] mega_moe_tp: Make the cross-rank wait timeout confi... | @eppaneamd | draft | 2026-10-27 | 2026-10-27 |
| [#7022](https://github.com/ROCm/aiter/pull/7022) | [Triton/Gluon] fp8_mqa_logits: Do not recompile per batch si... | @eppaneamd | draft | 2026-10-27 | 2026-10-27 |
| [#6175](https://github.com/ROCm/aiter/pull/6175) | [FlyDSL] HSTU Backward performance improvement | @damien-lejeune | draft | 2026-10-06 | 2026-10-27 |
| [#6912](https://github.com/ROCm/aiter/pull/6912) | [Triton/Gluon] KDA: accept cu_seqlens_cpu, upload varlen met... | @eppaneamd | draft | 2026-10-25 | 2026-10-27 |
| [#7005](https://github.com/ROCm/aiter/pull/7005) | [DSV4.1Flash][MoE tuning] MoE tuner fixes for DEP | @heachary | open | 2026-10-27 | 2026-10-27 |
| [#6648](https://github.com/ROCm/aiter/pull/6648) | [HIP] [Perf] Replace contended per-tensor scale atomics with... | @akshatvishu | open | 2026-10-17 | 2026-10-27 |
| [#5148](https://github.com/ROCm/aiter/pull/5148) | [FlyDSL] Single-launch decode GEMM: in-kernel blockscale, ra... | @johannes-graner | draft | 2026-08-31 | 2026-10-27 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | open | 2026-08-26 | 2026-10-27 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-10-27 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | [HIP] Cache the paged_attention_v1 launch plan to fix batch=... | @zjin-lcf | open | 2026-08-03 | 2026-10-27 |
| [#6692](https://github.com/ROCm/aiter/pull/6692) | [CK] [Bugfix] FMoE tuner: use all sources for shapes FlyDSL ... | @tc3oliver | open | 2026-10-20 | 2026-10-27 |
| [#6844](https://github.com/ROCm/aiter/pull/6844) | [JIT] Build every listed CU count of each GPU_ARCHS arch | @RElbers | open | 2026-10-22 | 2026-10-27 |
| [#5194](https://github.com/ROCm/aiter/pull/5194) | Cache the MLA split count, not the split indptr tensor | @peizhang56 | open | 2026-09-02 | 2026-10-27 |
| [#6111](https://github.com/ROCm/aiter/pull/6111) | [op_tests] test_gemm_a8w8_blockscale: --graph/--graph-replay... | @arakowsk-amd | open | 2026-10-02 | 2026-10-27 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-10-27 |
| [#6013](https://github.com/ROCm/aiter/pull/6013) | [CK] [CI] [Bugfix] Fix gfx942 FLAT candidates in ASM FMoE tu... | @yuzhouo7 | open | 2026-09-30 | 2026-10-27 |
| [#6986](https://github.com/ROCm/aiter/pull/6986) | [Triton/Gluon] batched_gemm_bf16: tile-major grid on gfx1151 | @klin2024 | draft | 2026-10-27 | 2026-10-27 |
| [#6985](https://github.com/ROCm/aiter/pull/6985) | [Triton/Gluon] [Config] Add gfx1151 batched_gemm_a16w16 conf... | @klin2024 | draft | 2026-10-27 | 2026-10-27 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-10-27 |
| [#6982](https://github.com/ROCm/aiter/pull/6982) | [Triton/Gluon] [Config] Add gfx1151 fused_sigmoid_mul config | @klin2024 | draft | 2026-10-27 | 2026-10-27 |
| [#6981](https://github.com/ROCm/aiter/pull/6981) | [MXFP4 MoE] cover Qwen3.5-397B TP4: shape gate entry and tun... | @ZhiweiYan-96 | draft | 2026-10-27 | 2026-10-27 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | [JIT] feat: Support LoongArch64, LoongArch64 not support Cod... | @Xinmudotmoe | open | 2026-08-12 | 2026-10-27 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-10-27 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-10-27 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-10-27 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [HIP] [MLA v4 nm] Drop kv_last_page_lens from ABI + self-con... | @amd-ruitang3 | open | 2026-07-21 | 2026-10-27 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-10-27 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | [CI] [JIT] Add gfx1201 BF16 G1U1 selected large-M Triton MoE... | @keneoneth | open | 2026-08-27 | 2026-10-27 |
| [#5087](https://github.com/ROCm/aiter/pull/5087) | [HIP] [BugFix] Fix BF16 FMHA extreme negative logits | @akshatvishu | open | 2026-08-28 | 2026-10-27 |
| [#6108](https://github.com/ROCm/aiter/pull/6108) | [Triton/Gluon] Add non-causal support to unified attention | @amd-xavierwang | open | 2026-10-02 | 2026-10-27 |
| [#6979](https://github.com/ROCm/aiter/pull/6979) | [Triton/Gluon] [Config] Add gfx1151 RMSNorm large-M/small-N ... | @klin2024 | draft | 2026-10-27 | 2026-10-27 |
| [#6941](https://github.com/ROCm/aiter/pull/6941) | [tuner] Reject zero timing measurements | @yzhou103 | open | 2026-10-26 | 2026-10-27 |
| [#6968](https://github.com/ROCm/aiter/pull/6968) | [Test] Cover 192x128, 128x64, and 256x256 in the FP8 MHA har... | @zjin-lcf | open | 2026-10-26 | 2026-10-27 |
| [#6973](https://github.com/ROCm/aiter/pull/6973) | [Triton/Gluon] [Config] Add gfx1151 Conv3D configs | @klin2024 | draft | 2026-10-27 | 2026-10-27 |
| [#6971](https://github.com/ROCm/aiter/pull/6971) | [MLA] Return a valid LSE from single-split BF16 QH64/QH128 d... | @maeehart | draft | 2026-10-26 | 2026-10-26 |
| [#6180](https://github.com/ROCm/aiter/pull/6180) | [Triton/Gluon] MHA: write -inf LSE for fully masked rows, no... | @phambinhfin | open | 2026-10-06 | 2026-10-26 |
| [#6920](https://github.com/ROCm/aiter/pull/6920) | [Bugfix] Fix LDS races in HIP chunk_gated_delta_rule_fwd_h | @eppaneamd | draft | 2026-10-25 | 2026-10-26 |
| [#6550](https://github.com/ROCm/aiter/pull/6550) | [Triton/Gluon] Add fused Kimi-K3 KDA whole-layer ops (gfx950... | @karverma-amd | open | 2026-10-14 | 2026-10-26 |
| [#6509](https://github.com/ROCm/aiter/pull/6509) | [Config] Add gfx950 bf16 GEMM tunings for Qwen3 480B shapes | @jbelloncastro | open | 2026-10-14 | 2026-10-26 |
| [#6926](https://github.com/ROCm/aiter/pull/6926) | [MoE] [Bugfix] Zero the a2 buffer before dynamic per-tensor ... | @AndreasKaratzas | open | 2026-10-26 | 2026-10-26 |
| [#6199](https://github.com/ROCm/aiter/pull/6199) | [Triton/Gluon] [gfx942] Support fp8 KV caches and fp8 dots i... | @jin-amd | open | 2026-10-07 | 2026-10-26 |
| [#6955](https://github.com/ROCm/aiter/pull/6955) | [Triton/Gluon] Take sparse MLA's native fp8 dtype from get_f... | @jin-amd | draft | 2026-10-26 | 2026-10-26 |
| [#6721](https://github.com/ROCm/aiter/pull/6721) | [Triton] Add group_norm with an optional temb add and activa... | @klin2024 | draft | 2026-10-20 | 2026-10-26 |
| [#6669](https://github.com/ROCm/aiter/pull/6669) | [FlyDSL] Add gfx11 (RDNA3 / RDNA3.5) flash attention forward | @klin2024 | draft | 2026-10-19 | 2026-10-26 |
| [#6895](https://github.com/ROCm/aiter/pull/6895) | [Feat] Add tuner event pid recovery and fix deadlock | @jamesETsmith | open | 2026-10-23 | 2026-10-26 |
| [#6728](https://github.com/ROCm/aiter/pull/6728) | [Triton/Gluon] : (MoE) Add rotating buffers and do_bench_ait... | @rahulbatra85 | draft | 2026-10-20 | 2026-10-26 |
| [#6838](https://github.com/ROCm/aiter/pull/6838) | [Triton/Gluon] : (ATTN DELTA) Add rotating buffers and do_be... | @rahulbatra85 | draft | 2026-10-22 | 2026-10-26 |
| [#6840](https://github.com/ROCm/aiter/pull/6840) | [Triton/Gluon] : (SPARSE ATTN) Add rotating buffers and do_b... | @rahulbatra85 | draft | 2026-10-22 | 2026-10-26 |
| [#6814](https://github.com/ROCm/aiter/pull/6814) | [Triton/Gluon]: Benchmarks model config changes(scripts for ... | @rahulbatra85 | open | 2026-10-22 | 2026-10-26 |
| [#6779](https://github.com/ROCm/aiter/pull/6779) | [Triton/Gluon] fused_qkv_split_qk_norm_rope_cache: MRoPE, sh... | @eky-amd | open | 2026-10-21 | 2026-10-26 |
| [#6734](https://github.com/ROCm/aiter/pull/6734) | [HIP] Fuse a 32-point Hadamard rotation into the MXFP4 per-1... | @mjkvaak-amd | open | 2026-10-20 | 2026-10-26 |
| [#6868](https://github.com/ROCm/aiter/pull/6868) | [Triton/Gluon] Support non-causal right sliding window in Tr... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-10-26 |
| [#6867](https://github.com/ROCm/aiter/pull/6867) | [Triton/Gluon] Allow a right window with causal sliding-wind... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-10-26 |
| [#6579](https://github.com/ROCm/aiter/pull/6579) | [JIT] Fix an indefinite JIT build hang when a lock holder is... | @amd-bartgips | draft | 2026-10-15 | 2026-10-26 |
| [#6613](https://github.com/ROCm/aiter/pull/6613) | [Triton][MHA] Proposal: Triton harness tunes MHA tiles for t... | @amd-bartgips | draft | 2026-10-16 | 2026-10-26 |
| [#6766](https://github.com/ROCm/aiter/pull/6766) | [ASM] [HIP] Add a routing-independence test for persistent f... | @siliangchen-amd | open | 2026-10-21 | 2026-10-26 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-10-26 |
| [#5911](https://github.com/ROCm/aiter/pull/5911) | [HIP] fix(quant): remove duplicate hip_bfloat16 template spe... | @shantipriya-amd | open | 2026-09-28 | 2026-10-26 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | [FlyDSL] Implement FlyDSL version of fused_qk_norm_mrope_3d_... | @amd-meskelin | open | 2026-07-24 | 2026-10-26 |
| [#6755](https://github.com/ROCm/aiter/pull/6755) | [Triton/Gluon] gfx950 Gluon unified attention: mask stale V ... | @WhatGhost | open | 2026-10-21 | 2026-10-26 |
| [#6037](https://github.com/ROCm/aiter/pull/6037) | [HIP] [JIT] Add FP8 sparse MLA with fused BF16 I/O for gfx95... | @sumin-hong | open | 2026-10-01 | 2026-10-26 |
| [#6697](https://github.com/ROCm/aiter/pull/6697) | [FlyDSL] [Perf] Fold the MXFP4 MoE sort into GEMM1 for GLM-5... | @chushic | open | 2026-10-20 | 2026-10-26 |
| [#6812](https://github.com/ROCm/aiter/pull/6812) | [CI] Include tests/ directory in test sharding | @okakarpa | open | 2026-10-22 | 2026-10-26 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [Triton/Gluon] [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-24 | 2026-10-26 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-10-26 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-10-26 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-10-26 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-10-26 |
| [#4915](https://github.com/ROCm/aiter/pull/4915) | [Config] [Kimi K3 fix] Drop gfx942/gfx950 opus rows from the... | @hyukjlee | open | 2026-08-21 | 2026-10-26 |
| [#4957](https://github.com/ROCm/aiter/pull/4957) | [MLA] Fix gfx942 gqa64 sparse-MLA decode GPU fault (route to... | @raviguptaamd | open | 2026-08-24 | 2026-10-26 |
| [#5064](https://github.com/ROCm/aiter/pull/5064) | [HIP] [JIT] [Kernel][Perf][Hardware][gfx1201] Add RX 9070 XT... | @davidchen-rocm | open | 2026-08-28 | 2026-10-26 |
| [#5223](https://github.com/ROCm/aiter/pull/5223) | [HIP] [Feature] OPUS bf16 flash-attn: head dim 64, attention... | @siqiy-cerebras | open | 2026-09-03 | 2026-10-26 |
| [#5278](https://github.com/ROCm/aiter/pull/5278) | [Config] Add gfx950 a8w8_blockscale tunings for GLM-5.3 shap... | @stefanskiasan | open | 2026-09-04 | 2026-10-26 |
| [#5688](https://github.com/ROCm/aiter/pull/5688) | [Config] configs(glm5.2): o_proj switches to CK Tile at M=10... | @ThomasNing | open | 2026-09-19 | 2026-10-26 |
| [#6295](https://github.com/ROCm/aiter/pull/6295) | fix(fused_moe): rank get_block_size_M candidates by useful w... | @jiaweche | open | 2026-10-09 | 2026-10-26 |
| [#6502](https://github.com/ROCm/aiter/pull/6502) | [Triton/Gluon] [CI] Streamline Flash Attentions api | @micmelesse | open | 2026-10-13 | 2026-10-26 |
| [#6861](https://github.com/ROCm/aiter/pull/6861) | [MoE] Add optional per_slot_output for fused_moe | @kliuae | open | 2026-10-23 | 2026-10-26 |
| [#6893](https://github.com/ROCm/aiter/pull/6893) | [MHA] Route varlen FMHA v3 to CK when an attention sink is s... | @jatseng-ai | open | 2026-10-23 | 2026-10-26 |
| [#6900](https://github.com/ROCm/aiter/pull/6900) | [FlyDSL] [Perf] MegaMoE: shorten EP8 prepare chain, coalesce... | @chushic | open | 2026-10-24 | 2026-10-26 |
| [#6909](https://github.com/ROCm/aiter/pull/6909) | [ASM] [gfx942] Use AI-tuned FP8 blockscale GEMM code objects | @feifei14119 | open | 2026-10-25 | 2026-10-26 |
| [#6914](https://github.com/ROCm/aiter/pull/6914) | [FlyDSL] Match ep_fused=1 grouped MoE config rows after the ... | @Boss2002n | open | 2026-10-25 | 2026-10-26 |
| [#6915](https://github.com/ROCm/aiter/pull/6915) | [Config] Tune gfx1250 grouped MoE for Qwen3.5-35B-A3B TP4 an... | @Boss2002n | open | 2026-10-25 | 2026-10-26 |
| [#6919](https://github.com/ROCm/aiter/pull/6919) | [FlyDSL] Add Mamba-2 SSD chunked forward for gfx11 | @kashif | draft | 2026-10-25 | 2026-10-25 |
| [#6917](https://github.com/ROCm/aiter/pull/6917) | [FlyDSL] [gfx1250] Use a 256-thread MX combine tile. | @karverma-amd | draft | 2026-10-25 | 2026-10-25 |
| [#6676](https://github.com/ROCm/aiter/pull/6676) | [Triton/Gluon] gfx1151 gemm_a16w16: round before the activat... | @klin2024 | open | 2026-10-19 | 2026-10-25 |
| [#6707](https://github.com/ROCm/aiter/pull/6707) | [Triton/Gluon] gemm_a16w16_gated: add bias and a gate_first ... | @klin2024 | open | 2026-10-20 | 2026-10-25 |
| [#6759](https://github.com/ROCm/aiter/pull/6759) | [Triton/Gluon] Retune gfx950 Triton ops that regressed with ... | @yanxuer-999 | draft | 2026-10-21 | 2026-10-25 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-10-25 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [BUG][CK][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-10-25 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] [CI] Add MHA forward tuning scripts and kernel-in... | @huishi-hs | open | 2026-08-26 | 2026-10-25 |
| [#6003](https://github.com/ROCm/aiter/pull/6003) | [Config] DSv4 E=385/topk7 fused MoE: fp8-epilogue decode sta... | @AMD-yanfeiwang | open | 2026-09-30 | 2026-10-25 |
| [#6119](https://github.com/ROCm/aiter/pull/6119) | [HIP] [Bugfix] mxfp4 moe sort skip invalid ids (-1s) | @cagrikymk | open | 2026-10-03 | 2026-10-25 |
| [#6267](https://github.com/ROCm/aiter/pull/6267) | [FlyDSL] [Build] [GEMM] Add optional RDNA3 FlyDSL A8W8 backe... | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-25 |
| [#6158](https://github.com/ROCm/aiter/pull/6158) | [Triton/Gluon] [Config] MoE and MLA configs for gfx1101, gfx... | @Ragua1 | open | 2026-10-05 | 2026-10-24 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-10-24 |
| [#6753](https://github.com/ROCm/aiter/pull/6753) | [Triton/Gluon] [Config] [gfx950] unified_attention: num_stag... | @azaidy | open | 2026-10-21 | 2026-10-24 |
| [#6754](https://github.com/ROCm/aiter/pull/6754) | [FlyDSL] [Muse Spark] Muse MoE GEMM and finalize on MXFP4 we... | @azaidy | open | 2026-10-21 | 2026-10-24 |
| [#6842](https://github.com/ROCm/aiter/pull/6842) | [Triton/Gluon] Add sigmoid output gate to pa_decode_gluon | @eky-amd | open | 2026-10-22 | 2026-10-24 |
| [#5336](https://github.com/ROCm/aiter/pull/5336) | [HIP] [Bugfix] Fix gfx90a module_custom builds by guarding F... | @Mazukiri | open | 2026-09-08 | 2026-10-24 |
| [#5500](https://github.com/ROCm/aiter/pull/5500) | [Config] configs: GLM-5.3-Flash a8w8 blockscale fused-MoE co... | @jin-amd | open | 2026-09-14 | 2026-10-24 |
| [#6089](https://github.com/ROCm/aiter/pull/6089) | [Config] [Perf] [gfx950] Add Kimi-K3 BF16 decode GEMM config... | @xiaohuguo2023 | open | 2026-10-02 | 2026-10-24 |
| [#6234](https://github.com/ROCm/aiter/pull/6234) | [Triton/Gluon] [Config] [gfx1250] Tune gluon batched a16w16 ... | @karverma-amd | open | 2026-10-07 | 2026-10-24 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-10-23 |
| [#6855](https://github.com/ROCm/aiter/pull/6855) | [HIP] fused_qk_norm_rope_group_quant: multi-row TDM kernel f... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6851](https://github.com/ROCm/aiter/pull/6851) | [Triton/Gluon] perf(triton): tune gfx950 one-kernel MHA back... | @sunxxuns | open | 2026-10-22 | 2026-10-23 |
| [#6882](https://github.com/ROCm/aiter/pull/6882) | [CI] Upgrade shared PyTorch images to ROCm 10.1 and PyTorch ... | @rkayaith | draft | 2026-10-23 | 2026-10-23 |
| [#6770](https://github.com/ROCm/aiter/pull/6770) | [Triton/Gluon] fav3_sage: RDNA3 (gfx1100) support: FP16 V an... | @TwelveNights | open | 2026-10-21 | 2026-10-23 |
| [#6765](https://github.com/ROCm/aiter/pull/6765) | [Triton/Gluon] [Perf] Floor the gfx942 bf16 unified-attentio... | @siliangchen-amd | open | 2026-10-21 | 2026-10-23 |
| [#6678](https://github.com/ROCm/aiter/pull/6678) | [Triton/Gluon] Add fused_reduce_add_rmsnorm | @eky-amd | open | 2026-10-19 | 2026-10-23 |
| [#5650](https://github.com/ROCm/aiter/pull/5650) | [Triton/Gluon] gfx942: dtype-split large-prefill attn_2d ent... | @mustafayildirim | open | 2026-09-18 | 2026-10-23 |
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-10-23 |
| [#6876](https://github.com/ROCm/aiter/pull/6876) | [Triton/Gluon] unified_attention: add a deterministic (batch... | @aarnetalman | draft | 2026-10-23 | 2026-10-23 |
| [#6585](https://github.com/ROCm/aiter/pull/6585) |  [Config] [Perf] [gfx950] Add MiniMax-M3 AttnFP8 A8W8 bpresh... | @amd-bishwoadhikari | draft | 2026-10-15 | 2026-10-23 |
| [#6531](https://github.com/ROCm/aiter/pull/6531) | [Config] [Perf] [gfx950] Add MiniMax-M3 ViT BF16 GEMM config | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-23 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-10-23 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-10-23 |
| [#6172](https://github.com/ROCm/aiter/pull/6172) | [ASM] [HIP] [JIT] [Hardware][MI300X] gfx942 asm GEMM with BF... | @jhartika-amd | open | 2026-10-06 | 2026-10-23 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-10-23 |
| [#5163](https://github.com/ROCm/aiter/pull/5163) | [gfx1250] feat(mega_moe): add operand init modes and b2b tim... | @arakowsk-amd | open | 2026-09-01 | 2026-10-23 |
| [#5513](https://github.com/ROCm/aiter/pull/5513) | [CI] Add Some vLLM lm_eval Nightly Tests | @micah-wil | open | 2026-09-14 | 2026-10-23 |
| [#5678](https://github.com/ROCm/aiter/pull/5678) | [HIP] [OPUS] [JIT] Add GPT-OSS IQ2R 2-bit MoE support | @ssharma4-amd | open | 2026-09-18 | 2026-10-23 |
| [#6837](https://github.com/ROCm/aiter/pull/6837) | [FlyDSL] Select a16w4 stage2 reduce for fp4 | @zjin-lcf | open | 2026-10-22 | 2026-10-23 |
| [#6848](https://github.com/ROCm/aiter/pull/6848) | [Triton/Gluon] feat(triton): add M-FALCON candidate attentio... | @sunxxuns | open | 2026-10-22 | 2026-10-23 |
| [#5409](https://github.com/ROCm/aiter/pull/5409) | [Triton/Gluon] Unified attention: opt-in prefill configs for... | @cpersson-amd | open | 2026-09-10 | 2026-10-22 |
| [#6543](https://github.com/ROCm/aiter/pull/6543) | Optimize FlyDSL Kimi K2 Thinking Kernel | @amirumoAMD | draft | 2026-10-14 | 2026-10-22 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [Triton/Gluon] [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-10-22 |
| [#6836](https://github.com/ROCm/aiter/pull/6836) | [HIP] [Bugfix] Clamp NaN/Inf in grouped_topk_kernel's biased... | @rjrock | open | 2026-10-22 | 2026-10-22 |
| [#6816](https://github.com/ROCm/aiter/pull/6816) | [Triton/Gluon] [GFX1250] Add bench MOE EP with no-mega suppo... | @k50112113 | open | 2026-10-22 | 2026-10-22 |
| [#6401](https://github.com/ROCm/aiter/pull/6401) | [Triton/Gluon] [Bugfix] Fix the fused_atomic Triton flash at... | @0xDELUXA | open | 2026-10-11 | 2026-10-22 |
| [#6498](https://github.com/ROCm/aiter/pull/6498) | [Triton/Gluon] KDA: add the chunk_delta_attn backward pass | @Micky774 | open | 2026-10-13 | 2026-10-22 |
| [#5794](https://github.com/ROCm/aiter/pull/5794) | [ASM] [HIP] feat(fmoe): add SwiGLU OAI MXFP4 FLAT kernels fo... | @alexioslyrakis-amd | open | 2026-09-23 | 2026-10-22 |
| [#6830](https://github.com/ROCm/aiter/pull/6830) | [Kernel] Add an eight-row FP8 MQA logits path for gfx950 | @iraj465 | draft | 2026-10-22 | 2026-10-22 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM kernel... | @vedenev-amd | open | 2026-07-07 | 2026-10-22 |
| [#6832](https://github.com/ROCm/aiter/pull/6832) | [Kernel] Reuse query quantization in fused FP8 BMM for gfx95... | @iraj465 | draft | 2026-10-22 | 2026-10-22 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-10-22 |
| [#6397](https://github.com/ROCm/aiter/pull/6397) | Use the FlyDSL BF16 GEMM by default for large untuned gfx125... | @jhinpan | open | 2026-10-11 | 2026-10-22 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-10-22 |
| [#6612](https://github.com/ROCm/aiter/pull/6612) | [Config] [Qwen3.5][Tuning] Add TP8 (inter_dim=128) fused-MoE... | @chuyeh | open | 2026-10-16 | 2026-10-22 |
| [#6740](https://github.com/ROCm/aiter/pull/6740) | [Triton/Gluon] [Config] [Perf] gfx950 a16w16 M_LEQ_8: avoid ... | @Arist12 | open | 2026-10-20 | 2026-10-22 |
| [#6739](https://github.com/ROCm/aiter/pull/6739) | [Triton/Gluon] [Bugfix] Import aiter.ops.triton.quant in a p... | @Arist12 | open | 2026-10-20 | 2026-10-22 |
| [#5822](https://github.com/ROCm/aiter/pull/5822) | [Triton/Gluon] Add tiled MoE sorting for M3 prefill | @whx-sjtu | open | 2026-09-24 | 2026-10-22 |
| [#6372](https://github.com/ROCm/aiter/pull/6372) | [Triton/Gluon] Add gfx1201 Triton support for per-channel FP... | @jyohukuchan | open | 2026-10-10 | 2026-10-22 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-10-22 |
| [#6036](https://github.com/ROCm/aiter/pull/6036) | [HIP] [JIT] [Kernel] fused MoE sorting: single-launch bitmas... | @sumin-hong | open | 2026-10-01 | 2026-10-22 |
| [#6798](https://github.com/ROCm/aiter/pull/6798) | [HIP] [Bugfix] paged_attention_ll4mi: fix query-head offset ... | @Arist12 | open | 2026-10-21 | 2026-10-22 |
| [#5384](https://github.com/ROCm/aiter/pull/5384) | [Triton/Gluon] Move gluon mla_gluon kernel into _gluon_kerne... | @vgokhale | draft | 2026-09-09 | 2026-10-22 |
| [#6730](https://github.com/ROCm/aiter/pull/6730) | [Triton/Gluon] assert num_stages=2 for 3d unified attention ... | @scxiao | open | 2026-10-20 | 2026-10-21 |
| [#6578](https://github.com/ROCm/aiter/pull/6578) | [ASM] Fix KV addressing, mask scratch and empty splits in gf... | @alexioslyrakis-amd | open | 2026-10-15 | 2026-10-21 |
| [#6371](https://github.com/ROCm/aiter/pull/6371) | mHC fused post+pre: launch policy for MI300X (gfx942, 304 CU... | @anshss | open | 2026-10-10 | 2026-10-21 |
| [#6268](https://github.com/ROCm/aiter/pull/6268) | [FlyDSL] [CI] [MoonEP] Balance MegaMoE v2 prefill with MoonE... | @JiaoliangYu | open | 2026-10-08 | 2026-10-21 |
| [#5578](https://github.com/ROCm/aiter/pull/5578) | [Triton/Gluon] Add MXFP8 Flash Attention v2 (gfx950 / CDNA4) | @WuLei-AMD | open | 2026-09-16 | 2026-10-21 |
| [#6340](https://github.com/ROCm/aiter/pull/6340) | [HIP] Avoid duplicate binary-op instantiation in the dispatc... | @kainanpeace666 | open | 2026-10-09 | 2026-10-21 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-10-21 |
| [#6100](https://github.com/ROCm/aiter/pull/6100) | [ASM] [HIP] [JIT] Fuse the router GEMM and top-k softmax int... | @maeehart | open | 2026-10-02 | 2026-10-21 |
| [#6043](https://github.com/ROCm/aiter/pull/6043) | [Triton/Gluon] Tune bf16 a16w16 GEMM for Qwen3.5-397B on gfx... | @mqhc2020 | open | 2026-10-01 | 2026-10-21 |
| [#6476](https://github.com/ROCm/aiter/pull/6476) | [Triton/Gluon] [Kernel] Add MXFP4 dequant H16 requantization | @DaiXindi-AMD | open | 2026-10-13 | 2026-10-20 |
| [#6244](https://github.com/ROCm/aiter/pull/6244) | [Triton/Gluon] Gluon PA decode: allow query_length > 4 on th... | @zejunchen-zejun | open | 2026-10-08 | 2026-10-20 |
| [#6274](https://github.com/ROCm/aiter/pull/6274) | [CI] Triton board: review requested -> In Progress, review d... | @Boss2002n | open | 2026-10-08 | 2026-10-20 |
| [#6723](https://github.com/ROCm/aiter/pull/6723) | [Perf] gfx1250 FP4 GEMM: MXFP4 output epilogue for MegaMoE's... | @XiaobingSuper | draft | 2026-10-20 | 2026-10-20 |
| [#6720](https://github.com/ROCm/aiter/pull/6720) | [HIP] fused_dynamic_mx_quant_moe_sort: use the split path ab... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6719](https://github.com/ROCm/aiter/pull/6719) | [Triton] gfx1250: fix MXFP4 quant, RMSNorm and gemm_afp4wfp4... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6706](https://github.com/ROCm/aiter/pull/6706) | [FlyDSL] [MoE] Fit the gfx1250 grouped GEMM k-tile to K, and... | @gbyu-amd | draft | 2026-10-20 | 2026-10-20 |
| [#6623](https://github.com/ROCm/aiter/pull/6623) | [Config][GEMM][gfx950] Qwen3.8-27B ViT BF16 GEMM shapes (tun... | @vorapolsiloai | draft | 2026-10-16 | 2026-10-20 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Triton/Gluon] [Kernel] sliding-window decode over shuffled ... | @reger-men | open | 2026-06-26 | 2026-10-20 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Triton/Gluon] [Kernel][Perf] split-K long-context decode fo... | @reger-men | open | 2026-06-26 | 2026-10-20 |
| [#6526](https://github.com/ROCm/aiter/pull/6526) | [FlyDSL] [gfx1250] [MoE] Copy each prequantized a1 row once ... | @lalala-sh | open | 2026-10-14 | 2026-10-20 |
| [#5975](https://github.com/ROCm/aiter/pull/5975) | [Triton/Gluon] [Bugfix] Decouple pure-Torch FP6 packers from... | @adenzhou1350 | open | 2026-09-30 | 2026-10-20 |
| [#6417](https://github.com/ROCm/aiter/pull/6417) | [HIP] [JIT] Add fused_indexed_gated_residual for diffusion t... | @Shan2L | open | 2026-10-12 | 2026-10-20 |
| [#6390](https://github.com/ROCm/aiter/pull/6390) | [HIP] [JIT] [Build] gfx1201: SageAttention forward (INT8 QK,... | @Shan2L | open | 2026-10-10 | 2026-10-20 |
| [#6698](https://github.com/ROCm/aiter/pull/6698) | add bmm apf8wfp8 gemm and inverse rope quant kernel | @ahmed-bsod | draft | 2026-10-20 | 2026-10-20 |
| [#6052](https://github.com/ROCm/aiter/pull/6052) | [FlyDSL] [CI] MegaMoE: stage1_fused/stage2_fused switches, m... | @yanboshao | draft | 2026-10-01 | 2026-10-20 |
| [#6272](https://github.com/ROCm/aiter/pull/6272) | MegaMoE mori path: follow mori#726, size fp4 combine flags, ... | @jhchouuu | open | 2026-10-08 | 2026-10-20 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton/Gluon] Add fused gated residual + LayerNorm + scale/... | @menglcai | open | 2026-07-28 | 2026-10-20 |
| [#6627](https://github.com/ROCm/aiter/pull/6627) | [ASM] [HIP] [JIT] gfx1201: SageAttention H3 backend (BF16 Q,... | @kaijiliu | open | 2026-10-16 | 2026-10-20 |
| [#6683](https://github.com/ROCm/aiter/pull/6683) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @afriedri | draft | 2026-10-19 | 2026-10-19 |
| [#5637](https://github.com/ROCm/aiter/pull/5637) | [Triton/Gluon] Add gfx1250 per-tensor FP8 MHA prefill | @Yu-Zhewen | open | 2026-09-17 | 2026-10-19 |
| [#6598](https://github.com/ROCm/aiter/pull/6598) | [FlyDSL] [MoE] Fix stage-1 grid leaving padded intermediate ... | @micah-wil | open | 2026-10-15 | 2026-10-19 |
| [#6628](https://github.com/ROCm/aiter/pull/6628) | Optimize mxfp4 gfx1250 gluon | @azaidy | draft | 2026-10-16 | 2026-10-19 |
| [#6445](https://github.com/ROCm/aiter/pull/6445) | [Triton/Gluon] [HIP] Gluon PA decode: ragged (varlen) query ... | @andrei-kochin | open | 2026-10-12 | 2026-10-19 |
| [#6022](https://github.com/ROCm/aiter/pull/6022) | [CK] [bug fix] Fix wrong cktile 2stages `moe_gemm1_heuristic... | @fxmarty-amd | open | 2026-09-30 | 2026-10-19 |
| [#6638](https://github.com/ROCm/aiter/pull/6638) | [Config] Add gfx950 128-CU A4W4 GEMM tunings for Qwen3.8-27B... | @fyun89 | open | 2026-10-17 | 2026-10-18 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-10-18 |
| [#5893](https://github.com/ROCm/aiter/pull/5893) | [HIP] fix(mla): stop gfx950 MLA decode from reading wrong KV... | @vanshbhatia-amd | open | 2026-09-27 | 2026-10-18 |
| [#5532](https://github.com/ROCm/aiter/pull/5532) | Add --fused-expert option to 2stage moe tests | @JohnNikolay84 | draft | 2026-09-15 | 2026-10-18 |
| [#4816](https://github.com/ROCm/aiter/pull/4816) | [Config] [Tuning] Add DSv4 a8w8 blockscale GEMM configs for ... | @zzw09773 | open | 2026-08-18 | 2026-10-17 |
| [#6642](https://github.com/ROCm/aiter/pull/6642) | feat(moe): support MXFP8 experts on gfx1250 | @XiaobingSuper | draft | 2026-10-17 | 2026-10-17 |
| [#6020](https://github.com/ROCm/aiter/pull/6020) | [FlyDSL] Add a GFX11 wave32 FlashAttention variant for gfx11... | @weimin023 | draft | 2026-09-30 | 2026-10-17 |
| [#6524](https://github.com/ROCm/aiter/pull/6524) | [HIP] [MLA][gfx942] Fix BF16 decode dispatch for GQA 64 | @chandankumr | open | 2026-10-14 | 2026-10-17 |
| [#4872](https://github.com/ROCm/aiter/pull/4872) | [HIP] fix(mla): fold fp8 qlen 2 onto the qseqlen-4 kernel on... | @JohnQin-llm | open | 2026-08-20 | 2026-10-17 |
| [#5211](https://github.com/ROCm/aiter/pull/5211) | [ASM] [HIP] fix(mla): mark bf16 mla_pfl prefill CSV/lookup a... | @amd-yashagar | open | 2026-09-02 | 2026-10-17 |
| [#5297](https://github.com/ROCm/aiter/pull/5297) | [HIP] [Bugfix] asm_mla: route ctypes entrypoint failures thr... | @wjabbour | open | 2026-09-06 | 2026-10-17 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-10-17 |
| [#5868](https://github.com/ROCm/aiter/pull/5868) | [Triton/Gluon] unified_attention 2D: optional block skipping... | @amd-sonsingh | open | 2026-09-26 | 2026-10-17 |
| [#6139](https://github.com/ROCm/aiter/pull/6139) | [ASM] [Bugfix] Scale gfx942 v3 FP8 FMHA probabilities before... | @akshatvishu | open | 2026-10-04 | 2026-10-16 |
| [#6631](https://github.com/ROCm/aiter/pull/6631) | Draft 1016 | @akao-amd | draft | 2026-10-16 | 2026-10-16 |
| [#5817](https://github.com/ROCm/aiter/pull/5817) | [FlyDSL] [Feature] Add MiniMax-M3 gfx950 dense MXFP8 per-1x3... | @amd-yashagar | draft | 2026-09-24 | 2026-10-16 |
| [#6482](https://github.com/ROCm/aiter/pull/6482) | [Tune] Make pretune fail on tuner errors and rebuild every i... | @a-canadasruiz | draft | 2026-10-13 | 2026-10-16 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-10-16 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-10-16 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-10-16 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-10-16 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-10-16 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep untuned SiLU A4W4 on native CK | @andyluo7 | open | 2026-08-27 | 2026-10-16 |
| [#5450](https://github.com/ROCm/aiter/pull/5450) | [FlyDSL] [CI] [Bugfix] Rebase large MoE expert weights | @xudonlyu | open | 2026-09-11 | 2026-10-16 |
| [#5460](https://github.com/ROCm/aiter/pull/5460) | [FlyDSL] Store fp8 MoE stage2 output through 64-bit pointers | @jamesbowley | open | 2026-09-11 | 2026-10-16 |
| [#5462](https://github.com/ROCm/aiter/pull/5462) | [FlyDSL] Tune MiniMax MXFP8 prefill MoE | @coderfeli | open | 2026-09-11 | 2026-10-16 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-10-16 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-10-16 |
| [#5704](https://github.com/ROCm/aiter/pull/5704) | [FlyDSL] [CI] [gfx1250] stage1 fused for mega-moe EP | @XingerZhu | open | 2026-09-20 | 2026-10-16 |
| [#5744](https://github.com/ROCm/aiter/pull/5744) | [FlyDSL] [AMD][MoE] Avoid layout-v2 stage2 and over-padded t... | @karverma-amd | open | 2026-09-22 | 2026-10-16 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-10-16 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-10-16 |
| [#5884](https://github.com/ROCm/aiter/pull/5884) | [FlyDSL] Respect GPU_ARCHS for Grouped MoE AOT builds | @chandankumr | open | 2026-09-27 | 2026-10-16 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | draft | 2026-09-18 | 2026-10-16 |
| [#5883](https://github.com/ROCm/aiter/pull/5883) | Ci timeout fix recon | @TennyWang1223 | draft | 2026-09-27 | 2026-10-16 |
| [#6595](https://github.com/ROCm/aiter/pull/6595) | [Triton/Gluon] [Config] Tune gfx1250 Gluon a16w16 GEMMs for ... | @erizheng-amd | draft | 2026-10-15 | 2026-10-15 |
| [#5379](https://github.com/ROCm/aiter/pull/5379) | [Config] [MoE] Add Qwen3.8 Flash Next FP8 tuned config for P... | @sammysun0711 | open | 2026-09-09 | 2026-10-15 |
| [#6016](https://github.com/ROCm/aiter/pull/6016) | [CK] [CI] [Bugfix] Align FMoE tuning token buckets with runt... | @yuzhouo7 | open | 2026-09-30 | 2026-10-15 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-10-15 |
| [#6419](https://github.com/ROCm/aiter/pull/6419) | [gfx950] a4w4: route triton_preshuffle tuned rows to Triton ... | @vorapolsiloai | draft | 2026-10-12 | 2026-10-15 |
| [#6188](https://github.com/ROCm/aiter/pull/6188) | [HIP] Fix out-of-bounds read in MLA metadata planner when he... | @simondanielsson | open | 2026-10-06 | 2026-10-15 |
| [#6070](https://github.com/ROCm/aiter/pull/6070) | [HIP] Fuse mHC RMSNorm with per-token FP8 quant for gfx950 p... | @Raiden-Makoto | open | 2026-10-01 | 2026-10-15 |
| [#6113](https://github.com/ROCm/aiter/pull/6113) | [FlyDSL] Fix force-reduce Stage-2 dispatch | @chandankumr | open | 2026-10-03 | 2026-10-15 |
| [#6360](https://github.com/ROCm/aiter/pull/6360) | [FlyDSL] [Bugfix] gfx1250 grouped MoE: read integer config c... | @jhinpan | open | 2026-10-10 | 2026-10-15 |
| [#6483](https://github.com/ROCm/aiter/pull/6483) | [FlyDSL] Add gfx950 SonicMoE forward and backward | @jayzlee147 | open | 2026-10-13 | 2026-10-15 |
| [#6308](https://github.com/ROCm/aiter/pull/6308) | [FlyDSL] Feat/compact plan align32 | @james-huang09 | open | 2026-10-09 | 2026-10-15 |
| [#6170](https://github.com/ROCm/aiter/pull/6170) | [FlyDSL] [MoE] Fix a race in the async stage-1 LDS pipeline;... | @jiaweche | open | 2026-10-06 | 2026-10-15 |
| [#6047](https://github.com/ROCm/aiter/pull/6047) | [FlyDSL] MiniMax-M3 fused sparse-layer decode | @akii96 | open | 2026-10-01 | 2026-10-15 |
| [#6065](https://github.com/ROCm/aiter/pull/6065) | [FlyDSL] [Perf] Add exact-M8 native MXFP4 GLM MoE route merg... | @heslami | open | 2026-10-01 | 2026-10-15 |
| [#6342](https://github.com/ROCm/aiter/pull/6342) | [FlyDSL] fix: handle float strings in _as_int for CSV config... | @srinivamd | open | 2026-10-09 | 2026-10-15 |
| [#6136](https://github.com/ROCm/aiter/pull/6136) | [FlyDSL] Optimize gfx1250 A4W4 MoE prefill with fused GEMM1 ... | @yanguahe | open | 2026-10-04 | 2026-10-15 |
| [#6064](https://github.com/ROCm/aiter/pull/6064) | [FlyDSL] [Perf] Add exact-M4 native MXFP4 GLM MoE pipeline | @heslami | open | 2026-10-01 | 2026-10-15 |
| [#5897](https://github.com/ROCm/aiter/pull/5897) | [WIP] [Triton/Gluon] gfx950 a16w16: compute-bound Gluon kern... | @zhanglx13 | draft | 2026-09-28 | 2026-10-15 |
| [#5733](https://github.com/ROCm/aiter/pull/5733) | [HIP] [OPUS] [JIT] Revert " [GFX950]OPUS PA MQA Logits MXFP4... | @junhaha666 | open | 2026-09-21 | 2026-10-15 |
| [#5955](https://github.com/ROCm/aiter/pull/5955) | [HIP] [JIT] Fuse six-way split-K reduction and q/KV RMSNorm | @heslami | open | 2026-09-29 | 2026-10-15 |
| [#6164](https://github.com/ROCm/aiter/pull/6164) | [FlyDSL] fp8_mqa_logits gfx942: add LDS-staged variant, use ... | @akii96 | draft | 2026-10-06 | 2026-10-15 |
| [#6555](https://github.com/ROCm/aiter/pull/6555) | Satya/tuning rel to default | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6553](https://github.com/ROCm/aiter/pull/6553) | Satya/tuning preempt local best | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6554](https://github.com/ROCm/aiter/pull/6554) | satya/tuning_search_space | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#5347](https://github.com/ROCm/aiter/pull/5347) | [Feature] Add manifest-driven static-page batch prefill disp... | @vstakhov-amd | draft | 2026-09-08 | 2026-10-14 |
| [#6051](https://github.com/ROCm/aiter/pull/6051) | [Bugfix] Support asymmetric Q/K and V heads in unified atten... | @pbkowalski | draft | 2026-10-01 | 2026-10-14 |
| [#6529](https://github.com/ROCm/aiter/pull/6529) | [Config] [MoE] [gfx950] Add MiniMax-M3 TP=2 decode FMOE shap... | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-14 |
| [#6532](https://github.com/ROCm/aiter/pull/6532) | [MoE] Report online fmoe tune failures and share one tune pa... | @a-canadasruiz | draft | 2026-10-14 | 2026-10-14 |
| [#6487](https://github.com/ROCm/aiter/pull/6487) | [Triton/Gluon] Extend Gluon PA benchmark for asymmetric K/V ... | @sammysun0711 | draft | 2026-10-13 | 2026-10-14 |
| [#6512](https://github.com/ROCm/aiter/pull/6512) | [HIP] [OPUS] [JIT] Add gfx950 BF16 MoE training backward | @yifehuan | draft | 2026-10-14 | 2026-10-14 |
| [#6305](https://github.com/ROCm/aiter/pull/6305) | [Test] Time with cuda.Event when the torch build has no Kine... | @zufayu | open | 2026-10-09 | 2026-10-14 |
| [#6248](https://github.com/ROCm/aiter/pull/6248) | [WIP] [HIP] [FlyDSL] [CI] Feat/topk select tuner | @MHYangAMD | open | 2026-10-08 | 2026-10-14 |
| [#6292](https://github.com/ROCm/aiter/pull/6292) | [ASM] [HIP] [JIT] gfx1201: Sol sparse attention for MiniMax-... | @Shan2L | draft | 2026-10-08 | 2026-10-14 |
| [#6510](https://github.com/ROCm/aiter/pull/6510) | [Triton/Gluon] [GFX12] 8-wave-ping-pong mxfp8 GEMM | @k50112113 | draft | 2026-10-14 | 2026-10-14 |
| [#5692](https://github.com/ROCm/aiter/pull/5692) | [Triton/Gluon] [ASM] [HIP] Chefang/fix pa gqa16 short tail p... | @fangche123 | draft | 2026-09-20 | 2026-10-14 |
| [#5900](https://github.com/ROCm/aiter/pull/5900) | [ASM] [HIP] [JIT] [Feature] Add gfx1201 SageAttention operat... | @Shan2L | draft | 2026-09-28 | 2026-10-14 |
| [#6066](https://github.com/ROCm/aiter/pull/6066) | gfx1201: MiniMax-H3 multi-GPU (Ulysses SP2/4/8) ops | @Shan2L | draft | 2026-10-01 | 2026-10-14 |
| [#6506](https://github.com/ROCm/aiter/pull/6506) | [FlyDSL] Extend fused KDA decode to GLM-5.3 on gfx950 | @Raiden-Makoto | draft | 2026-10-13 | 2026-10-13 |
| [#6311](https://github.com/ROCm/aiter/pull/6311) | [Perf][gfx1250] Add  ubench for atlas runner | @JiaoliangYu | draft | 2026-10-09 | 2026-10-13 |
| [#6434](https://github.com/ROCm/aiter/pull/6434) | [Triton/Gluon] PA decode: split PS work on whole partitions,... | @jiaqiang-dot-liu | draft | 2026-10-12 | 2026-10-12 |
| [#5870](https://github.com/ROCm/aiter/pull/5870) | [Config] Qwen3.8-Flash-Next FP8 tuned configs for gfx950 (MI... | @mavizao | open | 2026-09-26 | 2026-10-12 |
| [#6330](https://github.com/ROCm/aiter/pull/6330) | [FlyDSL] A4W4 compact MoE: MXFP4 prefill MoE for gfx950 (Min... | @akii96 | draft | 2026-10-09 | 2026-10-10 |
| [#6363](https://github.com/ROCm/aiter/pull/6363) | [AMD] Add DeepSeek-V4.1-Flash TP4 A8W4 MoE rows (E385, top-7... | @amd-pedghazi | draft | 2026-10-10 | 2026-10-10 |
| [#5745](https://github.com/ROCm/aiter/pull/5745) | [HIP] Guard GroupNorm vectorization at channel boundaries | @UD-mmcminn | open | 2026-09-22 | 2026-10-10 |
| [#5788](https://github.com/ROCm/aiter/pull/5788) | [HIP] [JIT] Topk index score minimax m3 | @demonsan | open | 2026-09-23 | 2026-10-10 |
| [#4641](https://github.com/ROCm/aiter/pull/4641) | [FlyDSL] Add SwiGLU activation to moe_gemm_2stage stage1 ker... | @akii96 | draft | 2026-08-08 | 2026-10-10 |
| [#6186](https://github.com/ROCm/aiter/pull/6186) | testintel: add missing test for kernel (created by lixzhang) | @jiagaoxiang | draft | 2026-10-06 | 2026-10-09 |
| [#6155](https://github.com/ROCm/aiter/pull/6155) | [Triton/Gluon] [Do Not Merge] add multimodal prefix support ... | @amd-xavierwang | draft | 2026-10-05 | 2026-10-09 |
| [#6337](https://github.com/ROCm/aiter/pull/6337) | [TRITON] Restructure Unified Attention Kernel (merging 2d/3d... | @cagrikymk | draft | 2026-10-09 | 2026-10-09 |
| [#6314](https://github.com/ROCm/aiter/pull/6314) | [FlyDSL] gfx942 a16w4: route SwiGLU through the kernel that ... | @msaffari-amd | draft | 2026-10-09 | 2026-10-09 |
| [#5773](https://github.com/ROCm/aiter/pull/5773) | [SMI] Add opt-in summary plots and raw-sample timelines | @arakowsk-amd | open | 2026-09-22 | 2026-10-09 |
| [#5445](https://github.com/ROCm/aiter/pull/5445) | [Test] Sweep the per-row top-k kernels across M, N and top_k | @zufayu | draft | 2026-09-11 | 2026-10-08 |
| [#2277](https://github.com/ROCm/aiter/pull/2277) | [Triton MoE] Add optimized Gluon kernel for AMD CDNA3 with K... | @jwu10003 | open | 2026-03-14 | 2026-10-07 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-10-07 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-10-07 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-10-07 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-10-07 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-10-07 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-10-07 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | draft | 2026-04-24 | 2026-10-07 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-10-07 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-10-07 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-10-07 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-10-07 |
| [#3355](https://github.com/ROCm/aiter/pull/3355) | [gluon gemm_afp4wfp4] Fix data access pattern to remove redu... | @Arech8 | open | 2026-05-26 | 2026-10-07 |
| [#3556](https://github.com/ROCm/aiter/pull/3556) | Fix e8m0 conversion to fp32 | @Arech8 | open | 2026-06-05 | 2026-10-07 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-10-07 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-10-07 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-10-07 |
| [#3766](https://github.com/ROCm/aiter/pull/3766) | Fix batched_gemm_a16wfp4 split-K garbage output / OOB for sm... | @srinivamd | open | 2026-06-17 | 2026-10-07 |
| [#4061](https://github.com/ROCm/aiter/pull/4061) | docs(csrc): condense verbose comments (comments-only, no cod... | @carlushuang | draft | 2026-07-02 | 2026-10-07 |
| [#4062](https://github.com/ROCm/aiter/pull/4062) | docs(python): condense verbose comments (comments-only, no c... | @carlushuang | draft | 2026-07-02 | 2026-10-07 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | draft | 2026-07-08 | 2026-10-07 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-10-07 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-10-07 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | draft | 2026-07-14 | 2026-10-07 |
| [#4254](https://github.com/ROCm/aiter/pull/4254) | [FlyDSL] [JIT] Mxfp8 gemm | @solinzby1 | open | 2026-07-16 | 2026-10-07 |
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-10-07 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-10-07 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | [CI] [JIT] gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | draft | 2026-07-21 | 2026-10-07 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-10-07 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [Qwen3.5_dev][MoE] Add FlyDSL FP8 MoE kernels (decode weight... | @apinge | draft | 2026-07-27 | 2026-10-07 |
| [#4466](https://github.com/ROCm/aiter/pull/4466) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-30 | 2026-10-07 |
| [#4489](https://github.com/ROCm/aiter/pull/4489) | feat(gemm): complete GLM-5.2 dense tuned configs (gfx950) | @Raiden-Makoto | open | 2026-07-31 | 2026-10-07 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-10-07 |
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-10-07 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQin-llm | open | 2026-08-05 | 2026-10-07 |
| [#4582](https://github.com/ROCm/aiter/pull/4582) | [Triton/Gluon] [MLA][gfx942] Add CDNA3 decode kernel | @maeehart | open | 2026-08-05 | 2026-10-07 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | open | 2026-08-06 | 2026-10-07 |
| [#4637](https://github.com/ROCm/aiter/pull/4637) | fix(quant): use saturating RNE for scaled int8 casts | @skyguan92 | open | 2026-08-07 | 2026-10-07 |
| [#4640](https://github.com/ROCm/aiter/pull/4640) | feat(triton): enable gfx1100 MXFP4 MoE | @skyguan92 | open | 2026-08-08 | 2026-10-07 |
| [#4648](https://github.com/ROCm/aiter/pull/4648) | [Triton][Hardware] Add gfx1100 A8W8 tuning config | @01xjw | open | 2026-08-10 | 2026-10-07 |
| [#4663](https://github.com/ROCm/aiter/pull/4663) | [tune] DSv4 bf16: add gfx950 LM-head GEMM configs (N=129280,... | @jiacao-amd | draft | 2026-08-10 | 2026-10-07 |
| [#4681](https://github.com/ROCm/aiter/pull/4681) | [gluon][mla][gfx950] add M-pack MTP regime (bh16mpack) | @yanxuer-999 | draft | 2026-08-11 | 2026-10-07 |
| [#4686](https://github.com/ROCm/aiter/pull/4686) | [cpp_itfs] Harden the C++ JIT loader: no shell, validated pa... | @fjankovi | draft | 2026-08-11 | 2026-10-07 |
| [#4689](https://github.com/ROCm/aiter/pull/4689) | [triton][gemm] gemm_a16wfp4: mask the b_scales load when EVE... | @lijinpei-amd | open | 2026-08-11 | 2026-10-07 |
| [#4690](https://github.com/ROCm/aiter/pull/4690) | [triton][gemm] fused_fp4_bmm_rope: fix two OOB reads when EV... | @lijinpei-amd | open | 2026-08-11 | 2026-10-07 |
| [#4691](https://github.com/ROCm/aiter/pull/4691) | [Triton][GFX12] Fix Gluon API compatibility | @leo-automation | open | 2026-08-11 | 2026-10-07 |
| [#4698](https://github.com/ROCm/aiter/pull/4698) | [Triton/Gluon] [GDN] Accept token-major w/u/g in opt-VK pref... | @JohnQin-llm | open | 2026-08-12 | 2026-10-07 |
| [#4715](https://github.com/ROCm/aiter/pull/4715) | [FlyDSL] split-K hgemm: make semaphore/signal workspace CUDA... | @xiaohuguo2023 | draft | 2026-08-12 | 2026-10-07 |
| [#4739](https://github.com/ROCm/aiter/pull/4739) | [Misc] Harden AITER_ASM_DIR code-object loading | @fjankovi | draft | 2026-08-13 | 2026-10-07 |
| [#4758](https://github.com/ROCm/aiter/pull/4758) | [Gluon][MLA] Deeper async-copy pipeline in the bh16 stage-1 ... | @amd-ethany | open | 2026-08-14 | 2026-10-07 |
| [#4762](https://github.com/ROCm/aiter/pull/4762) | feat(moe): consume prepared stage1 activation scales | @JohnQin-llm | open | 2026-08-14 | 2026-10-07 |
| [#4771](https://github.com/ROCm/aiter/pull/4771) | [Triton][FMHA] Fused paged-prefill kernel for page_size=1, h... | @amd-ethany | open | 2026-08-15 | 2026-10-07 |
| [#4775](https://github.com/ROCm/aiter/pull/4775) | [Attention] Expose paged MQA SplitKV override | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-10-07 |
| [#4778](https://github.com/ROCm/aiter/pull/4778) | [gfx1100] Enable RDNA3 in arch allow-list + Triton GEMM A8W8... | @okone1995 | open | 2026-08-15 | 2026-10-07 |
| [#4802](https://github.com/ROCm/aiter/pull/4802) | Refactor bench_mha to use -o as boolean flag | @AlexeySachkov | open | 2026-08-17 | 2026-10-07 |
| [#4812](https://github.com/ROCm/aiter/pull/4812) | Fix gfx1250 (NPS2, DPX mode) custom all-reduce input publica... | @hubertlu-tw | draft | 2026-08-17 | 2026-10-07 |
| [#4817](https://github.com/ROCm/aiter/pull/4817) | [HIP] fix: support torch.Stream in ctypes conversion | @chuyeh | open | 2026-08-18 | 2026-10-07 |
| [#4845](https://github.com/ROCm/aiter/pull/4845) | [HIP] Support mixed-dtype inputs in biased grouped top-k | @BadrBasowid | open | 2026-08-19 | 2026-10-07 |
| [#4881](https://github.com/ROCm/aiter/pull/4881) | [CI] ci: add DCO signoff check | @gyohuangxin | draft | 2026-08-20 | 2026-10-07 |
| [#4880](https://github.com/ROCm/aiter/pull/4880) | [Triton/Gluon] fix pa_prefill perf regression for small HEAD... | @mengfei-jiang | open | 2026-08-20 | 2026-10-07 |
| [#4962](https://github.com/ROCm/aiter/pull/4962) | [CI] ci: add Kimi and MiniMax to ATOM DI matrix | @JiaoliangYu | open | 2026-08-24 | 2026-10-07 |
| [#4993](https://github.com/ROCm/aiter/pull/4993) | [Triton/Gluon] Fix PR#4562 and PR#4470 for GPT-OSS-120b on g... | @sogalin | open | 2026-08-25 | 2026-10-07 |
| [#4999](https://github.com/ROCm/aiter/pull/4999) | [Triton/Gluon] Fix AMDGCN codegen abort in fp8_mqa_logits pa... | @kzjeef | open | 2026-08-25 | 2026-10-07 |
| [#5009](https://github.com/ROCm/aiter/pull/5009) | [HIP] [Feature] Radix-select top-k for wide ungrouped MoE ro... | @fanxingran | open | 2026-08-26 | 2026-10-07 |
| [#5010](https://github.com/ROCm/aiter/pull/5010) | [Triton/Gluon] Support caller-defined padding cache slot in ... | @tanth47 | open | 2026-08-26 | 2026-10-07 |
| [#5090](https://github.com/ROCm/aiter/pull/5090) | [Triton/Gluon] [Bugfix] fwd_decode: only one K-block program... | @mark14wu | open | 2026-08-28 | 2026-10-07 |
| [#5122](https://github.com/ROCm/aiter/pull/5122) | [HIP] topk: fuse the DSA page-table transform into a coopera... | @xiaobochen-amd | open | 2026-08-30 | 2026-10-07 |
| [#5126](https://github.com/ROCm/aiter/pull/5126) | [FlyDSL] Keep FP4 prefill modules alive across async dispatc... | @AMD-yanfeiwang | open | 2026-08-30 | 2026-10-07 |
| [#5159](https://github.com/ROCm/aiter/pull/5159) | [Config] gptoss bf16 tuned gemm: drop the losing large-M QKV... | @alexnails | open | 2026-09-01 | 2026-10-07 |
| [#5208](https://github.com/ROCm/aiter/pull/5208) | DO NOT MERGE: test extended CI dispatch flow | @gyohuangxin | open | 2026-09-02 | 2026-10-07 |
| [#5224](https://github.com/ROCm/aiter/pull/5224) | [HIP] [JIT] int4 a16w4 gemm kernel for gfx1201 | @jundali77 | open | 2026-09-03 | 2026-10-07 |
| [#5244](https://github.com/ROCm/aiter/pull/5244) | [FlyDSL] Dev/ubench gemm | @yadaish | open | 2026-09-03 | 2026-10-07 |
| [#5290](https://github.com/ROCm/aiter/pull/5290) | [HIP] Fix rmsnorm_quant cross-row reads and writes for rows ... | @rk9595 | open | 2026-09-05 | 2026-10-07 |
| [#5301](https://github.com/ROCm/aiter/pull/5301) | [FlyDSL] [Kernel] gfx950 FP8 sparse MLA prefill and decode (... | @JohnQin-llm | open | 2026-09-07 | 2026-10-07 |
| [#5517](https://github.com/ROCm/aiter/pull/5517) | [HIP] [CI] [JIT] [ROCm][MoE] Fused routing preamble: add a s... | @heslami | open | 2026-09-15 | 2026-10-07 |
| [#5549](https://github.com/ROCm/aiter/pull/5549) | [CK] [FlyDSL] [FMoE] Enable Silu A16W4 INTERLEAVE fused_moe ... | @SamiAario-AMD | open | 2026-09-15 | 2026-10-07 |
| [#5597](https://github.com/ROCm/aiter/pull/5597) | [CI] docs: refresh onboarding and enforce source-backed refe... | @sunway513 | open | 2026-09-16 | 2026-10-07 |
| [#5645](https://github.com/ROCm/aiter/pull/5645) | [CI] Remove stale `rocm/vllm-dev:nightly` image | @micah-wil | open | 2026-09-17 | 2026-10-07 |
| [#5701](https://github.com/ROCm/aiter/pull/5701) | [Config] [GFX1250][Moe] ep8 tuned config setup | @Zzz9990 | open | 2026-09-20 | 2026-10-07 |
| [#6194](https://github.com/ROCm/aiter/pull/6194) | [AMD] AgentX draft slot 3 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#6193](https://github.com/ROCm/aiter/pull/6193) | [AMD] AgentX draft slot 2 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#6192](https://github.com/ROCm/aiter/pull/6192) | [AMD] AgentX draft slot 1 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#5218](https://github.com/ROCm/aiter/pull/5218) | [Triton/Gluon] [BENCHMARK] Adding utility function for torch... | @cagrikymk | draft | 2026-09-02 | 2026-10-07 |
| [#5719](https://github.com/ROCm/aiter/pull/5719) | [HIP] [JIT] [Build] Add GLM-5.3-Flash IQ2R 2-bit MoE support | @ssharma4-amd | draft | 2026-09-21 | 2026-10-06 |
| [#6154](https://github.com/ROCm/aiter/pull/6154) | [FlyDSL] Add full-expert DeepSeek V4.1 Flash MegaMoE tuning ... | @Fangzhou-Ai | draft | 2026-10-05 | 2026-10-05 |
| [#6143](https://github.com/ROCm/aiter/pull/6143) | [Perf] Tune MiMo-V2.6 unified-attention decode on gfx950 | @pbkowalski | draft | 2026-10-05 | 2026-10-05 |
| [#6112](https://github.com/ROCm/aiter/pull/6112) | [MLA gluon] Optional kv_len_hint to pick the bh16 KV split b... | @chien-an-chen | draft | 2026-10-02 | 2026-10-03 |
| [#6088](https://github.com/ROCm/aiter/pull/6088) | [FlyDSL] Tune Kimi-K3 ptpc bpreshuffle GEMMs on gfx1250 | @XiaobingSuper | draft | 2026-10-02 | 2026-10-02 |
| [#6086](https://github.com/ROCm/aiter/pull/6086) | [cktile BF16-MXFP4 MOE][bug] Fix wrong output with `model_di... | @fxmarty-amd | draft | 2026-10-02 | 2026-10-02 |
| [#5920](https://github.com/ROCm/aiter/pull/5920) | [Perf] Add SPLIT_UNMASKED_LOOP=true to fp8 Gemma4 prefill un... | @simondanielsson | draft | 2026-09-28 | 2026-10-02 |
| [#6054](https://github.com/ROCm/aiter/pull/6054) | fix: diverge on active chunks in topk decode | @simondanielsson | draft | 2026-10-01 | 2026-10-01 |
| [#6030](https://github.com/ROCm/aiter/pull/6030) | [mHC][DSv4] gfx950 fused post+pre: use tile_m=16 for the FP3... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#6029](https://github.com/ROCm/aiter/pull/6029) | [Triton][CK][DSv4] wq_b / wo_b fp8 blockscale GEMMs (N=8192 ... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#6005](https://github.com/ROCm/aiter/pull/6005) | [FlyDSL] HGEMM: keep the C shuffle in fp32 for fp32 output; ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#6004](https://github.com/ROCm/aiter/pull/6004) | [Triton][DSv4] wqkv_a fp8 blockscale GEMM (N=2048, K=7168): ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#5983](https://github.com/ROCm/aiter/pull/5983) | [Triton/Gluon] [Config] Fix gfx950 FP8 preshuffle shared-mem... | @whx-sjtu | draft | 2026-09-30 | 2026-09-30 |
| [#5950](https://github.com/ROCm/aiter/pull/5950) | [DO NOT MERGE] Add GPU ASan CI | @leo-automation | draft | 2026-09-29 | 2026-09-29 |
| [#5523](https://github.com/ROCm/aiter/pull/5523) | [Flydsl] stop the A16W16 pruner from evicting every HTI conf... | @huizzhan | draft | 2026-09-15 | 2026-09-29 |
| [#5924](https://github.com/ROCm/aiter/pull/5924) | [HIP] [Bugfix] Guard gfx942 BF16 MLA KV address span | @BANANASJIM | draft | 2026-09-29 | 2026-09-29 |
| [#5902](https://github.com/ROCm/aiter/pull/5902) | [Config] [Perf] Retune GLM5 MXFP4 FMoE for gfx950 | @XiaobingSuper | draft | 2026-09-28 | 2026-09-28 |
| [#5727](https://github.com/ROCm/aiter/pull/5727) | [WIP] Add MoonEP prefill and decode planning policies | @JiaoliangYu | draft | 2026-09-21 | 2026-09-28 |
| [#5881](https://github.com/ROCm/aiter/pull/5881) | [FlyDSL] Fuse the GDN gated RMSNorm into the out_proj GEMM f... | @maeehart | draft | 2026-09-26 | 2026-09-26 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
| [#5404](https://github.com/ROCm/aiter/pull/5404) | [CK] [FlyDSL] [Perf] Add BM16 SwiGLU path for MiniMax M3 | @XiaobingSuper | draft | 2026-09-10 | 2026-09-21 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables + fix MXFP4 aux... | @JiaoliangYu | draft | 2026-09-20 | 2026-09-20 |
| [#5625](https://github.com/ROCm/aiter/pull/5625) | [Config] [tuning] Add DSv4 a4w4 fused-MoE tuning tables for ... | @JiaoliangYu | draft | 2026-09-17 | 2026-09-19 |
| [#5242](https://github.com/ROCm/aiter/pull/5242) | [WIP] TP MOE fusion | @charlieguo1106 | draft | 2026-09-03 | 2026-09-18 |
| [#5068](https://github.com/ROCm/aiter/pull/5068) | Add gfx1250 a8w8 mxscale BMM scaffold with preshuffled B. | @yzhou103 | draft | 2026-08-28 | 2026-09-17 |
| [#5455](https://github.com/ROCm/aiter/pull/5455) | .agent_loop: orchestration layer driving review-pr and valid... | @demonsan | draft | 2026-09-11 | 2026-09-17 |
| [#5604](https://github.com/ROCm/aiter/pull/5604) | [HIP] [ROCm] Observe P2P AR flags with SYSTEM scope and spli... | @maeehart | draft | 2026-09-16 | 2026-09-16 |
| [#5495](https://github.com/ROCm/aiter/pull/5495) | [HIP] [FlyDSL] [JIT] [gfx950] Integrate layout-dynamic MXFP8... | @xytpai | draft | 2026-09-14 | 2026-09-16 |
| [#5236](https://github.com/ROCm/aiter/pull/5236) | [Kernel] [Perf] Fold an optional bias into the A6W6 MXFP6 GE... | @jasainio | draft | 2026-09-03 | 2026-09-16 |
| [#5487](https://github.com/ROCm/aiter/pull/5487) | [FlyDSL] K3 latent FHMoE prototype (eager decode path) | @xiaohuguo2023 | draft | 2026-09-13 | 2026-09-15 |
| [#5514](https://github.com/ROCm/aiter/pull/5514) | Mxfp4 glm53 tunning | @JohnNikolay84 | draft | 2026-09-14 | 2026-09-14 |
| [#5498](https://github.com/ROCm/aiter/pull/5498) | [Enhancement] adjust quickreduce max block for mi355X | @haoyangli0109 | draft | 2026-09-14 | 2026-09-14 |
| [#5368](https://github.com/ROCm/aiter/pull/5368) | [Draft][Config] Update Kimi K3 a8w4 MOE TP8 tuned config for... | @jamesbowley | draft | 2026-09-09 | 2026-09-14 |
| [#5435](https://github.com/ROCm/aiter/pull/5435) | Dev/yadai a4w4 bench | @yadaish | draft | 2026-09-11 | 2026-09-11 |
| [#5415](https://github.com/ROCm/aiter/pull/5415) | Tune gfx942 BF16 sliding-window unified-attention decode | @tantara | draft | 2026-09-10 | 2026-09-10 |
| [#5389](https://github.com/ROCm/aiter/pull/5389) | [FlyDSL] [gfx950] Ragged MXFP4 grouped GEMM and wgrad | @indianspeedster | draft | 2026-09-09 | 2026-09-10 |
| [#5348](https://github.com/ROCm/aiter/pull/5348) | [FlyDSL] Add FP8 LiteTopK prefill operator | @AMD-yanfeiwang | draft | 2026-09-08 | 2026-09-09 |
| [#5309](https://github.com/ROCm/aiter/pull/5309) | [FlyDSL] Add FP4 LiteTopK prefill operator | @AMD-yanfeiwang | draft | 2026-09-07 | 2026-09-09 |
| [#5362](https://github.com/ROCm/aiter/pull/5362) | [FlyDSL] Add gfx950 split Softmax and FP32 split-K BF16 GEMM | @sunway513 | draft | 2026-09-08 | 2026-09-08 |
| [#5361](https://github.com/ROCm/aiter/pull/5361) | [uBench] Add MI355X gfx950 dense-operator benchmarks | @sunway513 | draft | 2026-09-08 | 2026-09-08 |
| [#5235](https://github.com/ROCm/aiter/pull/5235) | [FlyDSL] Dev/inter fused stage2 | @james-huang09 | draft | 2026-09-03 | 2026-09-08 |
| [#5179](https://github.com/ROCm/aiter/pull/5179) | [Flydsl] standalone FlyDSL K6 output kernel | @huizzhan | draft | 2026-09-01 | 2026-09-07 |
| [#5282](https://github.com/ROCm/aiter/pull/5282) | [FlyDSL][DSv4] Prototype FP4 MQA streaming TopK | @AMD-yanfeiwang | draft | 2026-09-05 | 2026-09-06 |
| [#5200](https://github.com/ROCm/aiter/pull/5200) | [Triton/Gluon] Pa decode config json | @yanxuer-999 | draft | 2026-09-02 | 2026-09-02 |
| [#5206](https://github.com/ROCm/aiter/pull/5206) | Fall back to cktile when the ck bpreshuffle instance rejects... | @yichiche | draft | 2026-09-02 | 2026-09-02 |
| [#5199](https://github.com/ROCm/aiter/pull/5199) | [WIP][Feat][Hip]: Enable and optimize wave32 for chunk_gated... | @stevenshenyj | draft | 2026-09-02 | 2026-09-02 |
| [#5141](https://github.com/ROCm/aiter/pull/5141) | FlyDSL fp8 block-scale B-preshuffle GEMM for Qwen3.6-27B pre... | @RElbers | draft | 2026-08-31 | 2026-09-01 |
| [#5077](https://github.com/ROCm/aiter/pull/5077) | Revert "[TRITON][GLUON] Prefill MQA Logits kernel tuning for... | @zhuyuhua-v | draft | 2026-08-28 | 2026-09-01 |
| [#5167](https://github.com/ROCm/aiter/pull/5167) | [Kernel] Add gfx950 DSV4 FlyDSL sparse-MLA prefill | @jiacao-amd | draft | 2026-09-01 | 2026-09-01 |
| [#5127](https://github.com/ROCm/aiter/pull/5127) | Fix/opus jit catalog sync | @jamesETsmith | draft | 2026-08-30 | 2026-08-31 |
| [#5117](https://github.com/ROCm/aiter/pull/5117) | [Kernel] [Perf] MXFP6 non-temporal-store GEMM variants and F... | @jasainio | draft | 2026-08-30 | 2026-08-30 |
| [#4992](https://github.com/ROCm/aiter/pull/4992) | [FlyDSL] gfx950 hd=72 varlen FMHA for Qwen3-VL prefill | @msaffari-amd | draft | 2026-08-25 | 2026-08-27 |
| [#4981](https://github.com/ROCm/aiter/pull/4981) | [FlyDSL] mega all gather merge stage1 | @Bernard-Liu | draft | 2026-08-25 | 2026-08-25 |
| [#7115](https://github.com/ROCm/aiter/pull/7115) | [Triton/Gluon] [gfx1250] Tune split-K for mhc_fused_post_pre... | @karverma-amd | merged | 2026-10-28 | 2026-10-29 |
| [#6437](https://github.com/ROCm/aiter/pull/6437) | [Feature] Add gemm_a8w8_bpreshuffle_out for caller-owned bf1... | @yuychang | merged | 2026-10-12 | 2026-10-29 |
| [#7095](https://github.com/ROCm/aiter/pull/7095) | [FlyDSL] Generalize gfx1250 TP MoE route histograms for wide... | @xytpai | merged | 2026-10-28 | 2026-10-29 |
| [#7070](https://github.com/ROCm/aiter/pull/7070) | [Config] gfx1250 FlyDSL bf16 GEMM rows for Kimi-K2 TP8 | @jiaryang | merged | 2026-10-28 | 2026-10-29 |
| [#7156](https://github.com/ROCm/aiter/pull/7156) | [CI] Route self-review writes through the aiter-bot PAT | @zufayu | merged | 2026-10-29 | 2026-10-29 |
| [#7003](https://github.com/ROCm/aiter/pull/7003) | [CI] Add shadow PR self-review gate | @zufayu | merged | 2026-10-27 | 2026-10-29 |
| [#5973](https://github.com/ROCm/aiter/pull/5973) | [FlyDSL] Optimize MI308 MoE decoding (3/3) | @luocheng25 | merged | 2026-09-30 | 2026-10-29 |
| [#7087](https://github.com/ROCm/aiter/pull/7087) | [HIP] [Feature] mla_reduce_v1: instantiate 12 heads at head ... | @yuychang | merged | 2026-10-28 | 2026-10-29 |
| [#7042](https://github.com/ROCm/aiter/pull/7042) | [FlyDSL] [Bugfix] Sync both wave groups before the gfx950 A1... | @jhinpan | merged | 2026-10-27 | 2026-10-29 |
| [#5821](https://github.com/ROCm/aiter/pull/5821) | [Config] [DSv4]  DeepSeek-V4 EP8 a8w4 MXFP4 fused-MoE rows f... | @heachary | merged | 2026-09-24 | 2026-10-29 |
| [#5153](https://github.com/ROCm/aiter/pull/5153) | [Triton/Gluon] [GFX950] Productize gluon mha kernel from GFX... | @leonling-ll | merged | 2026-08-31 | 2026-10-29 |
| [#6535](https://github.com/ROCm/aiter/pull/6535) | [Config] Add MI300A blockscale GEMM and fused MoE configs fo... | @aurianer | merged | 2026-10-14 | 2026-10-29 |
| [#6975](https://github.com/ROCm/aiter/pull/6975) | [FlyDSL] [CI] [Build] Bump FlyDSL pin from 0.4.0 to 0.4.1. | @jli-melchior | merged | 2026-10-27 | 2026-10-29 |
| [#5925](https://github.com/ROCm/aiter/pull/5925) | [FlyDSL] [FP4 MQA logits] Stop serving-time recompiles of _p... | @AMD-yanfeiwang | merged | 2026-09-29 | 2026-10-29 |
| [#6820](https://github.com/ROCm/aiter/pull/6820) | [Config] [Perf] Add Kimi-K3 gfx950 BF16 tuned rows for the M... | @yuychang | merged | 2026-10-22 | 2026-10-29 |
| [#6410](https://github.com/ROCm/aiter/pull/6410) | [Perf] Add Kimi-K3 gfx950 A8W8 bpreshuffle tuned configs | @yuychang | merged | 2026-10-12 | 2026-10-29 |
| [#6527](https://github.com/ROCm/aiter/pull/6527) | [FlyDSL] [CI] [MoE] Enable AITER_FLYDSL_USE_HERD on gfx1250 ... | @charlieguo1106 | merged | 2026-10-14 | 2026-10-29 |
| [#7105](https://github.com/ROCm/aiter/pull/7105) | [Triton/Gluon] [CI] Configs per CU count: <arch>/<cu_num>cu/... | @Boss2002n | merged | 2026-10-28 | 2026-10-29 |
| [#7016](https://github.com/ROCm/aiter/pull/7016) | [FlyDSL] fix(gfx1250): preserve typed E8M0 scales in MoE rou... | @JiaoliangYu | merged | 2026-10-27 | 2026-10-29 |
| [#6519](https://github.com/ROCm/aiter/pull/6519) | [HIP] fix(moe): bound scatter-reduce staging reads | @MengqingCao | merged | 2026-10-14 | 2026-10-29 |
| [#7113](https://github.com/ROCm/aiter/pull/7113) | [Triton] [gfx1250] sampling: register-resident top-p for the... | @azaidy | merged | 2026-10-28 | 2026-10-29 |
| [#6404](https://github.com/ROCm/aiter/pull/6404) | [FlyDSL] Support hidden 6144 in the INT4 QuickReduce + RMSNo... | @akii96 | merged | 2026-10-11 | 2026-10-29 |
| [#6636](https://github.com/ROCm/aiter/pull/6636) | [Triton/Gluon] : (NORM&RoPE)Add rotating buffers and do_benc... | @rahulbatra85 | merged | 2026-10-16 | 2026-10-29 |
| [#6963](https://github.com/ROCm/aiter/pull/6963) | [Triton/Gluon] : Fix corner cases for rotating buffer pool s... | @rahulbatra85 | merged | 2026-10-26 | 2026-10-28 |
| [#6974](https://github.com/ROCm/aiter/pull/6974) | [Triton/Gluon] Use the gfx1250 Gluon fused all-reduce + RMSN... | @Boss2002n | merged | 2026-10-27 | 2026-10-28 |
| [#7112](https://github.com/ROCm/aiter/pull/7112) | [Triton/Gluon] [gfx1250] Fused GDN speculative-verify step o... | @ahmed-bsod | merged | 2026-10-28 | 2026-10-28 |
| [#6869](https://github.com/ROCm/aiter/pull/6869) | [Triton/Gluon] bench_sage: diffusion-calibrated input distri... | @jcaraban | merged | 2026-10-23 | 2026-10-28 |
| [#7045](https://github.com/ROCm/aiter/pull/7045) | [Triton/Gluon] MHA MXFP8 subtiled kernel | @lburzawa | merged | 2026-10-27 | 2026-10-28 |
| [#6600](https://github.com/ROCm/aiter/pull/6600) | [Triton/Gluon] : (MLA) Add rotating buffers and do_bench_ait... | @rahulbatra85 | merged | 2026-10-16 | 2026-10-28 |
| [#6913](https://github.com/ROCm/aiter/pull/6913) | [Triton/Gluon] [Config] Tune gfx1250 Gluon GEMMs for DeepSee... | @Boss2002n | merged | 2026-10-25 | 2026-10-28 |
| [#6921](https://github.com/ROCm/aiter/pull/6921) | [Triton/Gluon] [Config] Use the M_LEQ_8192 config as "any" i... | @Boss2002n | merged | 2026-10-25 | 2026-10-28 |
| [#6980](https://github.com/ROCm/aiter/pull/6980) | [Triton/Gluon] [Config] Add gfx1151 fused_indexed_gated_resi... | @klin2024 | merged | 2026-10-27 | 2026-10-28 |
| [#6953](https://github.com/ROCm/aiter/pull/6953) | [Triton/Gluon] [Config] Add gfx1151 gemm_a16w16_gated DEFAUL... | @klin2024 | merged | 2026-10-26 | 2026-10-28 |
| [#6903](https://github.com/ROCm/aiter/pull/6903) | [Triton/Gluon] [Config] Tune gfx1250 Gluon GEMMs for Kimi-K2... | @Boss2002n | merged | 2026-10-24 | 2026-10-28 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | [Triton/Gluon] add block_cat_fused fused op | @reger-men | merged | 2026-05-19 | 2026-10-28 |
| [#7038](https://github.com/ROCm/aiter/pull/7038) | [Triton/Gluon] [Perf] Add gfx950 MXFP8 (a32_w1x32) GEMM tuni... | @afriedri | merged | 2026-10-27 | 2026-10-28 |
| [#6841](https://github.com/ROCm/aiter/pull/6841) | [ASM] [HIP] Mha v4: LSE on sorted-sparse, kernel race fixes,... | @jcaraban | merged | 2026-10-22 | 2026-10-28 |
| [#7068](https://github.com/ROCm/aiter/pull/7068) | [Config] [Perf] Tune gfx1250 grouped MoE for DeepSeek-V4.1 M... | @lalala-sh | merged | 2026-10-28 | 2026-10-28 |
| [#7020](https://github.com/ROCm/aiter/pull/7020) | [HIP] [MoE] MXFP4 inline-sort: accept num_local_tokens, skip... | @gbyu-amd | merged | 2026-10-27 | 2026-10-28 |
| [#7085](https://github.com/ROCm/aiter/pull/7085) | [HIP] [Bugfix] Keep MX quant-sort and multi-phase MoE sort i... | @yhl-amd | merged | 2026-10-28 | 2026-10-28 |
| [#6923](https://github.com/ROCm/aiter/pull/6923) | [Triton/Gluon] Add gfx1250 Gluon all-reduce for 4 ranks | @Boss2002n | merged | 2026-10-25 | 2026-10-28 |
| [#7077](https://github.com/ROCm/aiter/pull/7077) | [FlyDSL] [Misc] Simplify PA decode reducer bound and reuse s... | @fsx950223 | merged | 2026-10-28 | 2026-10-28 |
| [#6450](https://github.com/ROCm/aiter/pull/6450) | [FlyDSL] Read (B, next_n) context lengths in the paged MQA l... | @amd-sriram | merged | 2026-10-12 | 2026-10-28 |
| [#6704](https://github.com/ROCm/aiter/pull/6704) | [FlyDSL] Fix/flydsl a8w8 tuner gfx942 no async copy | @MHYangAMD | merged | 2026-10-20 | 2026-10-28 |
| [#5686](https://github.com/ROCm/aiter/pull/5686) | [HIP] [FlyDSL] [JIT] Feat/topk per row gfx950 | @MHYangAMD | merged | 2026-09-19 | 2026-10-28 |
| [#7014](https://github.com/ROCm/aiter/pull/7014) | [HIP] [FlyDSL] [JIT] Reland topk per row gfx950 (#5686) with... | @MHYangAMD | merged | 2026-10-27 | 2026-10-28 |
| [#6703](https://github.com/ROCm/aiter/pull/6703) | [HIP] Fix/mla metadata v1 0 tail | @MHYangAMD | merged | 2026-10-20 | 2026-10-28 |
| [#6677](https://github.com/ROCm/aiter/pull/6677) | [HIP] [Bugfix] Bound per-tensor quantization vector tails | @yuzhouo7 | merged | 2026-10-19 | 2026-10-28 |
| [#6461](https://github.com/ROCm/aiter/pull/6461) | [CK] [FlyDSL] [Feature] Add staged search to MXFP4 MoE tuner | @Bernard-Liu | merged | 2026-10-13 | 2026-10-28 |
| [#7036](https://github.com/ROCm/aiter/pull/7036) | [ASM] [HIP] [JIT] Add a gfx950 MLA v4.1 16mx1 prefill kernel... | @kaiyang-1 | merged | 2026-10-27 | 2026-10-28 |
| [#7067](https://github.com/ROCm/aiter/pull/7067) | [HIP] [FlyDSL] Register top-k for E % 4 and mixed-dtype bias... | @valarLip | merged | 2026-10-28 | 2026-10-28 |
| [#7066](https://github.com/ROCm/aiter/pull/7066) | [CI] Run MI300X PR tests only on main | @gyohuangxin | merged | 2026-10-28 | 2026-10-28 |
| [#5605](https://github.com/ROCm/aiter/pull/5605) | [Build] Prebuild the bf16 mha_varlen_fwd variant without mas... | @Arist12 | merged | 2026-09-16 | 2026-10-28 |
| [#7055](https://github.com/ROCm/aiter/pull/7055) | [OPUS] Align CO tests and build metadata with local kernel I... | @demonsan | merged | 2026-10-28 | 2026-10-28 |
| [#6668](https://github.com/ROCm/aiter/pull/6668) | [FlyDSL] [Perf] MiniMax-M3 MoE on gfx1250: fused route psum ... | @lirui927 | merged | 2026-10-19 | 2026-10-28 |
| [#6954](https://github.com/ROCm/aiter/pull/6954) | [HIP] fix(custom_ar): sum ranks in a fixed order on every re... | @valarLip | merged | 2026-10-26 | 2026-10-28 |
| [#6992](https://github.com/ROCm/aiter/pull/6992) | [CI] Install mori for the multi-GPU tests and add a mori smo... | @jhchouuu | merged | 2026-10-27 | 2026-10-28 |
| [#5948](https://github.com/ROCm/aiter/pull/5948) | [HIP] Fix 3D binary-op broadcast guard for incompatible shap... | @adenzhou1350 | merged | 2026-09-29 | 2026-10-28 |
| [#6939](https://github.com/ROCm/aiter/pull/6939) | [Config] Add MI350P FP8 blockscale B-preshuffle GEMM tuning ... | @a-sidorova | merged | 2026-10-26 | 2026-10-28 |
| [#7004](https://github.com/ROCm/aiter/pull/7004) | [FlyDSL] [MoE] Handle -1 routes (pad rows) in the gfx1250 TP... | @charlieguo1106 | merged | 2026-10-27 | 2026-10-28 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | [CK] Simplify ck_gemm_a8w8_blockscale GemmSpecialization con... | @jbelloncastro | merged | 2026-06-19 | 2026-10-28 |
| [#6943](https://github.com/ROCm/aiter/pull/6943) | [FlyDSL] Optimize gfx1250 BF16 page16 and FP8 attention | @fsx950223 | merged | 2026-10-26 | 2026-10-28 |
| [#6711](https://github.com/ROCm/aiter/pull/6711) | [Config] [Perf] Tune gfx950 BF16 GEMMs for Qwen3.8-Flash-Nex... | @ZLkanyo009 | merged | 2026-10-20 | 2026-10-28 |
| [#6515](https://github.com/ROCm/aiter/pull/6515) | [FlyDSL] [QSA] Add QSA paged MQA logits MFMA scorer for pref... | @zovonoir | merged | 2026-10-14 | 2026-10-28 |
| [#5974](https://github.com/ROCm/aiter/pull/5974) | [Config] Add Qwen3.8-Flash-Next PTPC-FP8 gfx942 a8w8 bpreshu... | @zovonoir | merged | 2026-09-30 | 2026-10-28 |
| [#6699](https://github.com/ROCm/aiter/pull/6699) | [HIP] fix(custom-ar): gfx1250 fused all-reduce + RMSNorm | @XiaobingSuper | merged | 2026-10-20 | 2026-10-28 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-10-29T14:44:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2765](https://github.com/ROCm/ATOM/pull/2765) | feat(moe): build MegaMoE from an aiter MegaMoERecipe (with t... | @jhchouuu | open | 2026-10-27 | 2026-10-29 |
| [#2364](https://github.com/ROCm/ATOM/pull/2364) | feat(sp): add Ulysses sequence parallelism and optimize M3 p... | @whx-sjtu | open | 2026-09-23 | 2026-10-29 |
| [#2665](https://github.com/ROCm/ATOM/pull/2665) | perf(moe): Triton softmax top-k routing, bit-identical to AI... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-29 |
| [#2598](https://github.com/ROCm/ATOM/pull/2598) | DeepSeek-V4.1-Flash: LMCache tier offload through the MP ser... | @PerryZhang01 | open | 2026-10-15 | 2026-10-29 |
| [#2636](https://github.com/ROCm/ATOM/pull/2636) | [Qwen 3.8] LMCache offload for QSA + GDN + PLE state | @ZLkanyo009 | open | 2026-10-19 | 2026-10-29 |
| [#2818](https://github.com/ROCm/ATOM/pull/2818) | fix(plugin): green the vLLM 0.31 plugin CI cells; V4-Flash a... | @PerryZhang01 | open | 2026-10-29 | 2026-10-29 |
| [#2761](https://github.com/ROCm/ATOM/pull/2761) | perf(attention): leave gluon scratch to aiter; state the spa... | @XiaobingSuper | open | 2026-10-27 | 2026-10-29 |
| [#2727](https://github.com/ROCm/ATOM/pull/2727) | fix(dp): preserve prefill alignment with capped pending prob... | @yhl-amd | open | 2026-10-26 | 2026-10-29 |
| [#2653](https://github.com/ROCm/ATOM/pull/2653) | perf(sglang): aiter FlyDSL QSA sparse attention for Qwen3.8-... | @zovonoir | open | 2026-10-20 | 2026-10-29 |
| [#2755](https://github.com/ROCm/ATOM/pull/2755) | feat(dp): add cache-affinity routing with LMCache prefix rec... | @ZhangLirong-amd | open | 2026-10-27 | 2026-10-29 |
| [#2643](https://github.com/ROCm/ATOM/pull/2643) | gemm_fusion: opt-in fused QKV prologue for MiniMax-M3 under ... | @demonsan | open | 2026-10-20 | 2026-10-29 |
| [#2744](https://github.com/ROCm/ATOM/pull/2744) | [MiniMax-M3.1] FP4 index cache and NVFP4 sparse KV cache | @zhuyuhua-v | open | 2026-10-27 | 2026-10-29 |
| [#2816](https://github.com/ROCm/ATOM/pull/2816) | fix(plugin): vLLM plugin engine init and first forward (reus... | @XiaobingSuper | open | 2026-10-29 | 2026-10-29 |
| [#2817](https://github.com/ROCm/ATOM/pull/2817) | [ATOMesh][DI][CI] Enable WideEP with MoRI V1LL with DSV3 & K... | @lcskrishna | open | 2026-10-29 | 2026-10-29 |
| [#2722](https://github.com/ROCm/ATOM/pull/2722) | perf(v4): Split the prefill sparse indexer by query row acro... | @yitingw1 | open | 2026-10-26 | 2026-10-29 |
| [#2809](https://github.com/ROCm/ATOM/pull/2809) | feat(indexer): migrate V4 and V4.1 FP4 scoring to the OPUS c... | @junhaha666 | draft | 2026-10-29 | 2026-10-29 |
| [#2762](https://github.com/ROCm/ATOM/pull/2762) | review-pr: port the automated PR-review pipeline from aiter ... | @zufayu | draft | 2026-10-27 | 2026-10-29 |
| [#2789](https://github.com/ROCm/ATOM/pull/2789) | [PCP] Fewer V4 prefill gathers and fix PCP+TBO accuracy | @yitingw1 | open | 2026-10-28 | 2026-10-29 |
| [#2815](https://github.com/ROCm/ATOM/pull/2815) | Enable prefix caching for DeepSeek V4 Mono decode | @yifehuan | open | 2026-10-29 | 2026-10-29 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | draft | 2026-09-07 | 2026-10-29 |
| [#2713](https://github.com/ROCm/ATOM/pull/2713) | feat(moe): route FlyDSL MXFP4 decode through aiter HERD on g... | @charlieguo1106 | open | 2026-10-26 | 2026-10-29 |
| [#2708](https://github.com/ROCm/ATOM/pull/2708) | fix(scheduler): size the delayer's fill probe by uncached ro... | @ZhiweiYan-96 | open | 2026-10-26 | 2026-10-29 |
| [#2581](https://github.com/ROCm/ATOM/pull/2581) | feat(kimi-k3): DFlash GQA speculative draft model | @rbrugaro-amd | open | 2026-10-14 | 2026-10-29 |
| [#2783](https://github.com/ROCm/ATOM/pull/2783) | fix(ci): use FP32 block scales for DeepSeek-V3.2 SGLang case... | @junyyang-amd | open | 2026-10-28 | 2026-10-29 |
| [#2785](https://github.com/ROCm/ATOM/pull/2785) | fix(plugin): build SGLang DP-attention ParallelConfig per ra... | @junyyang-amd | open | 2026-10-28 | 2026-10-29 |
| [#2782](https://github.com/ROCm/ATOM/pull/2782) | fix(ci): use SGLang v0.5.20 prefill CP flags for GLM-5.2 PCP... | @junyyang-amd | open | 2026-10-28 | 2026-10-29 |
| [#2814](https://github.com/ROCm/ATOM/pull/2814) | perf(kimi-k3): stream attn-res candidate rows through LDS wi... | @yanxuer-999 | open | 2026-10-29 | 2026-10-29 |
| [#2679](https://github.com/ROCm/ATOM/pull/2679) | refactor(qsa): use aiter QSA kernels instead of vendored cop... | @mengfei-jiang | open | 2026-10-23 | 2026-10-29 |
| [#2691](https://github.com/ROCm/ATOM/pull/2691) | fix(mxfp4): pad an MLP pair's K inside the parallel linears;... | @rbrugaro-amd | open | 2026-10-24 | 2026-10-29 |
| [#2813](https://github.com/ROCm/ATOM/pull/2813) | refactor(scheduler): carry the fill probe's reservation in F... | @ZhiweiYan-96 | open | 2026-10-29 | 2026-10-29 |
| [#2757](https://github.com/ROCm/ATOM/pull/2757) | [SGL ATOM]Upgrade SGLang to 0.5.22 and publish ROCm 7 and 10... | @zhangxinyuanliuhengyu | open | 2026-10-27 | 2026-10-29 |
| [#2771](https://github.com/ROCm/ATOM/pull/2771) | perf(qwen4_exp): keep the PLE n-gram table in page-locked ho... | @ZLkanyo009 | open | 2026-10-28 | 2026-10-29 |
| [#2635](https://github.com/ROCm/ATOM/pull/2635) | fix(qwen3.5): keep PAGE checkpoint images out of the KV rows... | @ZLkanyo009 | open | 2026-10-19 | 2026-10-29 |
| [#2563](https://github.com/ROCm/ATOM/pull/2563) | feat(eplb): decode expert swap | @JiaoliangYu | open | 2026-10-14 | 2026-10-29 |
| [#2812](https://github.com/ROCm/ATOM/pull/2812) | [MiniMax-M3.1] Mono decode over the MXFP4 KV and index cache... | @ganyi1996ppo | draft | 2026-10-29 | 2026-10-29 |
| [#2582](https://github.com/ROCm/ATOM/pull/2582) | feat(spec-decode): probability-ratio rejection sampling behi... | @rbrugaro-amd | open | 2026-10-14 | 2026-10-29 |
| [#2810](https://github.com/ROCm/ATOM/pull/2810) | [gfx1250] DeepSeek-V4.1: HIP Mega-MHC with row-major fused M... | @junhaha666 | open | 2026-10-29 | 2026-10-29 |
| [#2570](https://github.com/ROCm/ATOM/pull/2570) | [ATOMesh][MoRIIO] Enable Kimi K3 and update the MoRI IO chan... | @lcskrishna | open | 2026-10-14 | 2026-10-29 |
| [#2807](https://github.com/ROCm/ATOM/pull/2807) | feat(deepseek_v4): fuse silu_and_mul + group32 quantize_fp8 ... | @karverma-amd | open | 2026-10-29 | 2026-10-29 |
| [#2808](https://github.com/ROCm/ATOM/pull/2808) | feat(deepseek_v41): fuse DSpark context-KV main_norm + group... | @karverma-amd | open | 2026-10-29 | 2026-10-29 |
| [#2668](https://github.com/ROCm/ATOM/pull/2668) | fix(offload): refresh state images in LMCache's LRU on every... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-29 |
| [#2715](https://github.com/ROCm/ATOM/pull/2715) | [MLA] Plan a padded sparse MTP verify's work over the real t... | @qichu-yun | open | 2026-10-26 | 2026-10-29 |
| [#2806](https://github.com/ROCm/ATOM/pull/2806) | [GDN] Fix the KV cache writes of the Gemma Q/K norm + RoPE p... | @Boss2002n | draft | 2026-10-29 | 2026-10-29 |
| [#2805](https://github.com/ROCm/ATOM/pull/2805) | [gfx1250] Qwen3.5: Q/K norm + MRoPE + KV cache write in one ... | @Boss2002n | draft | 2026-10-29 | 2026-10-29 |
| [#2786](https://github.com/ROCm/ATOM/pull/2786) | perf(pd): P/D first-token latency and API-server GC fixes (f... | @wanzhenchn | open | 2026-10-28 | 2026-10-29 |
| [#2655](https://github.com/ROCm/ATOM/pull/2655) | fix(qwen4-exp): register the QSA FP8 scale planes for KV off... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-29 |
| [#2365](https://github.com/ROCm/ATOM/pull/2365) | [feature] support pp>1 for Kimi-K3 | @gbyu-amd | open | 2026-09-23 | 2026-10-29 |
| [#2800](https://github.com/ROCm/ATOM/pull/2800) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-10-29 |
| [#2779](https://github.com/ROCm/ATOM/pull/2779) | fix(sglang): skip CK MoE block_m=16 on gfx942 PTPC graph cap... | @zhangxinyuanliuhengyu | open | 2026-10-28 | 2026-10-29 |
| [#2781](https://github.com/ROCm/ATOM/pull/2781) | [Perf] Keep SwiGLU-OAI arithmetic in FP32 under torch.compil... | @xytpai | open | 2026-10-28 | 2026-10-29 |
| [#2787](https://github.com/ROCm/ATOM/pull/2787) | ci(k3-agentic): Kimi-K3 AgentX 1M P/D cells, one per concurr... | @wanzhenchn | open | 2026-10-28 | 2026-10-29 |
| [#2791](https://github.com/ROCm/ATOM/pull/2791) | [CI][ROCm][ATOMesh] Add DeepSeek-V4-Pro MoRIIO write 1P1D an... | @avininjamay8 | open | 2026-10-28 | 2026-10-29 |
| [#2797](https://github.com/ROCm/ATOM/pull/2797) | [ATOM] scheduler: one checkpoint-demand cut per prefix per a... | @vgokhale | open | 2026-10-28 | 2026-10-29 |
| [#2803](https://github.com/ROCm/ATOM/pull/2803) | [Sampler] split-row softmax for top-k / top-p sampling (ATOM... | @vgokhale | open | 2026-10-28 | 2026-10-29 |
| [#2804](https://github.com/ROCm/ATOM/pull/2804) | [Recipe] Qwen3.5 MLPerf Endpoints: TP4 decode settings (MTP4... | @vgokhale | open | 2026-10-29 | 2026-10-29 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [Lumen-RL] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-10-28 |
| [#2802](https://github.com/ROCm/ATOM/pull/2802) | [gfx1250] Qwen3.5: Q/K norm + MRoPE in one aiter kernel | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2795](https://github.com/ROCm/ATOM/pull/2795) | [gfx1250] Qwen3.5 MTP under DP attention + EP | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2794](https://github.com/ROCm/ATOM/pull/2794) | [gfx1250] Qwen3.5 MoE MXFP4 bring-up (TP1/TP4/EP4) | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2793](https://github.com/ROCm/ATOM/pull/2793) | [Triton/Gluon] [GFX12] Add spec_decode flag To Unified Atten... | @k50112113 | draft | 2026-10-28 | 2026-10-28 |
| [#2511](https://github.com/ROCm/ATOM/pull/2511) | feat(attention): add BLASST block skipping to the Triton pre... | @amd-sonsingh | open | 2026-10-10 | 2026-10-28 |
| [#2738](https://github.com/ROCm/ATOM/pull/2738) | perf(qwen3.5): merge the GDN in_proj_ba into in_proj_qkvz fo... | @ZhiweiYan-96 | open | 2026-10-27 | 2026-10-28 |
| [#2707](https://github.com/ROCm/ATOM/pull/2707) | perf(qwen3.5): FlyDSL router GEMM + Triton small-M router fo... | @ZhiweiYan-96 | open | 2026-10-26 | 2026-10-28 |
| [#2499](https://github.com/ROCm/ATOM/pull/2499) | [MoonEP] Balance MegaMoE prefill with MoonEP | @JiaoliangYu | open | 2026-10-08 | 2026-10-28 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat(v4): mixed prefill+decode batching with DSpark and TBO | @jiayyu | open | 2026-08-26 | 2026-10-28 |
| [#2718](https://github.com/ROCm/ATOM/pull/2718) | [MiniMax-M3.1] Native-MXFP8 Mono decode through S32 (stacked... | @XiaobingSuper | draft | 2026-10-26 | 2026-10-28 |
| [#2709](https://github.com/ROCm/ATOM/pull/2709) | feat(kimi-k3): PP8 prefill for P/D serving — KDA state under... | @wanzhenchn | open | 2026-10-26 | 2026-10-28 |
| [#2720](https://github.com/ROCm/ATOM/pull/2720) | perf(dspark): drop the per-step host sync; measure SPS at st... | @ZhangLirong-amd | open | 2026-10-26 | 2026-10-28 |
| [#2721](https://github.com/ROCm/ATOM/pull/2721) | [MiniMax-M3.1] P/D from a PP4 prefill into a TP4 decode, wit... | @Jasen2201 | open | 2026-10-26 | 2026-10-28 |
| [#2752](https://github.com/ROCm/ATOM/pull/2752) | [Offload] Support M3 PAGE layouts in Mooncake Store | @MengqingCao | open | 2026-10-27 | 2026-10-28 |
| [#2750](https://github.com/ROCm/ATOM/pull/2750) | [MiniMax-M3.1] Add TP4 P/D Mooncake Store benchmarks and NVF... | @MengqingCao | draft | 2026-10-27 | 2026-10-28 |
| [#2747](https://github.com/ROCm/ATOM/pull/2747) | docs(recipe): MiniMax-M3.1-Flash TP4 + DSpark AgentX recipe | @zhuyuhua-v | draft | 2026-10-27 | 2026-10-28 |
| [#2728](https://github.com/ROCm/ATOM/pull/2728) | Fix speculative block table capacity | @azaidy | open | 2026-10-26 | 2026-10-28 |
| [#2729](https://github.com/ROCm/ATOM/pull/2729) | Fix GDN draft metadata | @azaidy | open | 2026-10-26 | 2026-10-28 |
| [#2767](https://github.com/ROCm/ATOM/pull/2767) | docs(context_parallel_guide): generalize MI308 to MI3XX | @peterjunpark | open | 2026-10-27 | 2026-10-28 |
| [#2770](https://github.com/ROCm/ATOM/pull/2770) | [MiniMax-M3.1] MXFP4 sparse KV cache and index cache | @ganyi1996ppo | draft | 2026-10-28 | 2026-10-28 |
| [#2141](https://github.com/ROCm/ATOM/pull/2141) | feat: add GLM-5.3-Flash multimodal support | @cubezhang | open | 2026-09-04 | 2026-10-28 |
| [#2471](https://github.com/ROCm/ATOM/pull/2471) | feat(observability): add decode-step engine stats | @amd-ruitang3 | open | 2026-10-04 | 2026-10-28 |
| [#2759](https://github.com/ROCm/ATOM/pull/2759) | [Offload] Address M3 Store review follow-ups | @MengqingCao | open | 2026-10-27 | 2026-10-28 |
| [#2689](https://github.com/ROCm/ATOM/pull/2689) | perf(qwen3_5): use the fused GDN in_proj GEMM on Quark MXFP4... | @ahmed-bsod | open | 2026-10-23 | 2026-10-28 |
| [#2698](https://github.com/ROCm/ATOM/pull/2698) | perf(qwen3.5): one-kernel GDN decode on gfx1250 | @ahmed-bsod | open | 2026-10-24 | 2026-10-28 |
| [#2749](https://github.com/ROCm/ATOM/pull/2749) | fix(docker): multi-arch SGLang+ATOM image path for gfx942/gf... | @zhangxinyuanliuhengyu | open | 2026-10-27 | 2026-10-28 |
| [#2760](https://github.com/ROCm/ATOM/pull/2760) | [DSpark][DCP] Allow speculative decode with DCP on gfx1250's... | @gbyu-amd | open | 2026-10-27 | 2026-10-28 |
| [#2600](https://github.com/ROCm/ATOM/pull/2600) | scheduler: add DP prefill-sync mode to avoid group-wide eage... | @karverma-amd | open | 2026-10-15 | 2026-10-28 |
| [#2658](https://github.com/ROCm/ATOM/pull/2658) | EAGLE3 speculative decoding support for LLama/Qwen3 models | @kyle-hoffmeyer | open | 2026-10-20 | 2026-10-28 |
| [#2610](https://github.com/ROCm/ATOM/pull/2610) | feat(qwen): integrate TP1 and TP8 ordinary Mono decode | @yifehuan | open | 2026-10-16 | 2026-10-28 |
| [#2723](https://github.com/ROCm/ATOM/pull/2723) | [Plugin][SGLang] Carry Flash PLE history through the mamba r... | @zovonoir | draft | 2026-10-26 | 2026-10-28 |
| [#2726](https://github.com/ROCm/ATOM/pull/2726) | fix(dsv4): make Mono refusal safe and bound peer waits | @yifehuan | draft | 2026-10-26 | 2026-10-28 |
| [#2724](https://github.com/ROCm/ATOM/pull/2724) | [DSV4.1] DSpark probabilistic draft + block verification (op... | @yhl-amd | open | 2026-10-26 | 2026-10-27 |
| [#2663](https://github.com/ROCm/ATOM/pull/2663) | feat(spec): capture the Qwen3.8 MTP draft steps in CUDA grap... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-27 |
| [#2763](https://github.com/ROCm/ATOM/pull/2763) | feat(api): add idle prefix cache reset endpoint | @JiaoliangYu | draft | 2026-10-27 | 2026-10-27 |
| [#2453](https://github.com/ROCm/ATOM/pull/2453) | [1/3 entrypoint refactor] [feat(mesh)]: unify multi-API ingr... | @Yuechguo | open | 2026-10-02 | 2026-10-27 |
| [#2739](https://github.com/ROCm/ATOM/pull/2739) | perf(norm): optional per-token FP8 quant folded into GemmaRM... | @ZhiweiYan-96 | open | 2026-10-27 | 2026-10-27 |
| [#2490](https://github.com/ROCm/ATOM/pull/2490) | [gfx1250] MLA absorb: emit ql_nope in the fp8 KV-cache dtype | @karverma-amd | open | 2026-10-08 | 2026-10-27 |
| [#2061](https://github.com/ROCm/ATOM/pull/2061) | Glm5.3 flash support | @PerryZhang01 | open | 2026-08-27 | 2026-10-27 |
| [#2529](https://github.com/ROCm/ATOM/pull/2529) | Add Qwen3.8 FlyDSL HC and long-context QSA index CP | @coderfeli | open | 2026-10-11 | 2026-10-27 |
| [#2737](https://github.com/ROCm/ATOM/pull/2737) | [DCP] Prefetch the next MLA layer's cached-prefix KV all-gat... | @ganyi1996ppo | draft | 2026-10-27 | 2026-10-27 |
| [#2137](https://github.com/ROCm/ATOM/pull/2137) | [atom-vllm]: enable DSpark speculative decoding for DeepSeek... | @peizhang56 | open | 2026-09-03 | 2026-10-27 |
| [#2730](https://github.com/ROCm/ATOM/pull/2730) | Integrate AITER fused MoE routing | @azaidy | open | 2026-10-26 | 2026-10-26 |
| [#2641](https://github.com/ROCm/ATOM/pull/2641) | Add initial muse spark support | @azaidy | open | 2026-10-19 | 2026-10-26 |
| [#2557](https://github.com/ROCm/ATOM/pull/2557) | fix(mla): plan persistent decode over the rows q/o have | @gbyu-amd | open | 2026-10-13 | 2026-10-26 |
| [#2701](https://github.com/ROCm/ATOM/pull/2701) | fix(kimi-k3): load a checkpoint with statically FP8-quantize... | @rbrugaro-amd | open | 2026-10-25 | 2026-10-26 |
| [#2493](https://github.com/ROCm/ATOM/pull/2493) | [MiniMax-M3] Score the lightning indexer with aiter's FlyDSL... | @ganyi1996ppo | open | 2026-10-08 | 2026-10-26 |
| [#2687](https://github.com/ROCm/ATOM/pull/2687) | [MiniMax-M3.1] Load the MiniMax-M3.1-Flash release checkpoin... | @wuhuikx | draft | 2026-10-23 | 2026-10-26 |
| [#2508](https://github.com/ROCm/ATOM/pull/2508) | [ATOMesh] Add GLM-5.2-MXFP4 2P1D TP8 coverage | @itej89 | open | 2026-10-09 | 2026-10-26 |
| [#2680](https://github.com/ROCm/ATOM/pull/2680) | perf: flat API-process GC on long serving runs; DCP top-k ex... | @ChengYao-amd | open | 2026-10-23 | 2026-10-26 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-10-26 |
| [#2704](https://github.com/ROCm/ATOM/pull/2704) | [CI] atomesh: Store owners on the 2 MiB HugeTLB pages Spur r... | @Jasen2201 | draft | 2026-10-26 | 2026-10-26 |
| [#2497](https://github.com/ROCm/ATOM/pull/2497) | [DO NOT MERGE] Re-test CI approval orchestration | @gyohuangxin | open | 2026-10-08 | 2026-10-26 |
| [#2673](https://github.com/ROCm/ATOM/pull/2673) | feat(eplb): add step_peak placement policy | @HaonanWang98 | draft | 2026-10-22 | 2026-10-26 |
| [#2620](https://github.com/ROCm/ATOM/pull/2620) | [GFX-1250][DP][Kimi-K3 DSpark] Pad the draft's block decode ... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-26 |
| [#2630](https://github.com/ROCm/ATOM/pull/2630) | [3/3 entrypoint refactor]  move the atomesh standalone data ... | @Yuechguo | draft | 2026-10-19 | 2026-10-25 |
| [#2694](https://github.com/ROCm/ATOM/pull/2694) | test(observability): allow additional runner startup RPCs | @NidhoggD1 | draft | 2026-10-24 | 2026-10-24 |
| [#2656](https://github.com/ROCm/ATOM/pull/2656) | feat(qwen3.5): Qwen3.5-397B mono decode | @amd-weisun | open | 2026-10-20 | 2026-10-23 |
| [#2604](https://github.com/ROCm/ATOM/pull/2604) | fix(cudagraph): run the model runner on a High-priority stre... | @nehmathe2 | open | 2026-10-16 | 2026-10-23 |
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#2647](https://github.com/ROCm/ATOM/pull/2647) | feat(tp): run one tensor-parallel group across nodes | @gbyu-amd | open | 2026-10-20 | 2026-10-22 |
| [#2664](https://github.com/ROCm/ATOM/pull/2664) | fix(kimi-k3): lazy-import the Triton MLA builder; fix(atomes... | @junyyang-amd | open | 2026-10-21 | 2026-10-22 |
| [#2661](https://github.com/ROCm/ATOM/pull/2661) | [DSpark] let --max-num-seqs 1 start: size the engine for 2, ... | @ganyi1996ppo | open | 2026-10-21 | 2026-10-22 |
| [#2671](https://github.com/ROCm/ATOM/pull/2671) | [Plugin][SGLang] Qwen3.5 mamba radix cache (extra_buffer, pa... | @zovonoir | draft | 2026-10-22 | 2026-10-22 |
| [#2662](https://github.com/ROCm/ATOM/pull/2662) | feat(mono): Qwen3.8-Flash-Next mono decode | @ssharma4-amd | open | 2026-10-21 | 2026-10-22 |
| [#2667](https://github.com/ROCm/ATOM/pull/2667) | fix(sglang): keep Flash full decode graph correct with mamba... | @zhangxinyuanliuhengyu | open | 2026-10-21 | 2026-10-22 |
| [#2639](https://github.com/ROCm/ATOM/pull/2639) | refactor(mono): use FlyDSL JIT and typed device APIs | @coderfeli | open | 2026-10-19 | 2026-10-22 |
| [#2605](https://github.com/ROCm/ATOM/pull/2605) | [Scheduler] Keep DP-attention ranks in one phase during pref... | @karverma-amd | open | 2026-10-16 | 2026-10-21 |
| [#2621](https://github.com/ROCm/ATOM/pull/2621) | feat(offload): run lmcache_mp under multi-node DP with one l... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-20 |
| [#2629](https://github.com/ROCm/ATOM/pull/2629) | follow-up(#2535): mono review items that need no GPU | @ganyi1996ppo | open | 2026-10-19 | 2026-10-20 |
| [#2559](https://github.com/ROCm/ATOM/pull/2559) | feat(dsv4): DeepSeek-V4 mono decode | @amd-weisun | open | 2026-10-13 | 2026-10-19 |
| [#2374](https://github.com/ROCm/ATOM/pull/2374) | ci: avoid restarting tests on PR approval | @leo-automation | open | 2026-09-23 | 2026-10-19 |
| [#2619](https://github.com/ROCm/ATOM/pull/2619) | fix(atomesh): keep dashboard metrics finite without dropping... | @kvnloo | open | 2026-10-16 | 2026-10-18 |
| [#2616](https://github.com/ROCm/ATOM/pull/2616) | fix(moe): preserve MoRI v2 live-row contract | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2615](https://github.com/ROCm/ATOM/pull/2615) | fix(blockscale): gate row-major group32 GEMM by arch | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2298](https://github.com/ROCm/ATOM/pull/2298) | [Lumen-RL] Receive trained weights over RCCL, transactionall... | @i-chaochen | open | 2026-09-19 | 2026-10-16 |
| [#2608](https://github.com/ROCm/ATOM/pull/2608) | (recipe) Add Qwen3.8-Flash-Next AgentX Recipe | @zhuyuhua-v | draft | 2026-10-16 | 2026-10-16 |
| [#2357](https://github.com/ROCm/ATOM/pull/2357) | feat(plugin): DeepSeek-V4.1-Flash on the vLLM plugin, with L... | @PerryZhang01 | open | 2026-09-22 | 2026-10-16 |
| [#2597](https://github.com/ROCm/ATOM/pull/2597) | add asm mla qh64 kvsf  | @feifei14119 | open | 2026-10-15 | 2026-10-16 |
| [#2596](https://github.com/ROCm/ATOM/pull/2596) | [DP] Decouple prefill cost balancing from PrefillDelayer, ro... | @zejunchen-zejun | draft | 2026-10-15 | 2026-10-16 |
| [#2403](https://github.com/ROCm/ATOM/pull/2403) | fix(gdn): store the temporal state in the checkpoint's mamba... | @eky-amd | open | 2026-09-25 | 2026-10-16 |
| [#2248](https://github.com/ROCm/ATOM/pull/2248) | [WIP]fix(attention): stabilize MLA/MHA outputs for piecewise... | @MengqingCao | open | 2026-09-15 | 2026-10-16 |
| [#2585](https://github.com/ROCm/ATOM/pull/2585) | Test ATOM accuracy on DI MI350X8 runner | @gyohuangxin | draft | 2026-10-15 | 2026-10-15 |
| [#2405](https://github.com/ROCm/ATOM/pull/2405) | [MORI] Multi-node + MORI_V2- #5855 | @k50112113 | open | 2026-09-25 | 2026-10-15 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | perf(eplb): remove shared-expert cold-start and decode overh... | @JiaoliangYu | draft | 2026-08-17 | 2026-10-14 |
| [#2555](https://github.com/ROCm/ATOM/pull/2555) | fix(deepseek_v41): run native eager V4.1 on gfx942 | @zhangxinyuanliuhengyu | open | 2026-10-13 | 2026-10-14 |
| [#2501](https://github.com/ROCm/ATOM/pull/2501) | fix(plugin/dsv4): score 1-token prefill rows on the dense in... | @linsun12 | open | 2026-10-08 | 2026-10-13 |
| [#2546](https://github.com/ROCm/ATOM/pull/2546) | MiniMax-M3 recipe: move the CONC 40/48 CPU tier to LMCache M... | @yitingw1 | draft | 2026-10-12 | 2026-10-12 |
| [#2544](https://github.com/ROCm/ATOM/pull/2544) | feat(diag): record per-step routed expert counts (ATOM_EXPER... | @JiaoliangYu | draft | 2026-10-12 | 2026-10-12 |
| [#2542](https://github.com/ROCm/ATOM/pull/2542) | ci: tune GLM-5.2 FP8 MTP3 benchmark memory | @gyohuangxin | draft | 2026-10-12 | 2026-10-12 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-10-12 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-10-10 |
| [#2500](https://github.com/ROCm/ATOM/pull/2500) | tools/roofline: system-level roofline with per-operator dril... | @zufayu | draft | 2026-10-08 | 2026-10-08 |
| [#2469](https://github.com/ROCm/ATOM/pull/2469) | feat(scheduler): reserve KV for projected decode growth | @amd-ruitang3 | open | 2026-10-04 | 2026-10-08 |
| [#1978](https://github.com/ROCm/ATOM/pull/1978) | feat(eplb):avoid local copy in eplb; move build l2p to devic... | @JiaoliangYu | draft | 2026-08-21 | 2026-10-08 |
| [#2486](https://github.com/ROCm/ATOM/pull/2486) | [gfx1250] Add ATOM_MLA_ABSORB_A16W8: BF16-activation x FP8-w... | @karverma-amd | open | 2026-10-07 | 2026-10-08 |
| [#2489](https://github.com/ROCm/ATOM/pull/2489) | [gfx1250] Add ATOM_MLA_ABSORB_BF16: keep MLA-absorb weights ... | @karverma-amd | open | 2026-10-07 | 2026-10-08 |
| [#2406](https://github.com/ROCm/ATOM/pull/2406) | fix(offload): include exception type in dense lookup warning... | @kvnloo | open | 2026-09-25 | 2026-10-07 |
| [#2481](https://github.com/ROCm/ATOM/pull/2481) | [ATOM-vLLM] Add support for GLM-5.3-Flash with LMCache offlo... | @kliuae | open | 2026-10-06 | 2026-10-07 |
| [#2295](https://github.com/ROCm/ATOM/pull/2295) | Add GPT-OSS IQ2R 2-bit MoE integration | @ssharma4-amd | open | 2026-09-18 | 2026-10-06 |
| [#2329](https://github.com/ROCm/ATOM/pull/2329) | Add GLM-5.3-Flash IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-10-06 |
| [#2333](https://github.com/ROCm/ATOM/pull/2333) | [WIP] Integrate MoonEP policies with MoRI and fused_moe | @JiaoliangYu | draft | 2026-09-21 | 2026-10-04 |
| [#2448](https://github.com/ROCm/ATOM/pull/2448) | feat(offload/mp): make engine_driven transfers usable, and m... | @PerryZhang01 | open | 2026-10-02 | 2026-10-03 |
| [#2442](https://github.com/ROCm/ATOM/pull/2442) | docs(offload): clarify LMCache MP lookup timeout scope | @kvnloo | open | 2026-10-01 | 2026-10-02 |
| [#2443](https://github.com/ROCm/ATOM/pull/2443) | feat(plugin/mp): run the K3 offload connector on ATOM's MP L... | @PerryZhang01 | open | 2026-10-01 | 2026-10-02 |
| [#2439](https://github.com/ROCm/ATOM/pull/2439) | add more MP LMCache instructions hosting Kimi-K3 from vllm A... | @linsun12 | open | 2026-09-30 | 2026-10-01 |
| [#2369](https://github.com/ROCm/ATOM/pull/2369) | fix(plugin): hold the deferred-save clock on the slotted Seq... | @PerryZhang01 | open | 2026-09-23 | 2026-09-30 |
| [#2416](https://github.com/ROCm/ATOM/pull/2416) | docs(vllm): recompute MiniMax M3 LMCache load misses | @kvnloo | open | 2026-09-28 | 2026-09-29 |
| [#2353](https://github.com/ROCm/ATOM/pull/2353) | feat(offload): add MP-only save admission budget | @yhl-amd | open | 2026-09-22 | 2026-09-28 |
| [#2410](https://github.com/ROCm/ATOM/pull/2410) | [Docs] Qwen3.8-Flash-Next recipe: agentic serving on one MI3... | @mavizao | open | 2026-09-26 | 2026-09-27 |
| [#2404](https://github.com/ROCm/ATOM/pull/2404) | fix(offload): distinguish unmeasured profile timings | @kvnloo | open | 2026-09-25 | 2026-09-26 |
| [#2013](https://github.com/ROCm/ATOM/pull/2013) | docker: fix ATOM and SGLang release builds | @ThomasNing | open | 2026-08-25 | 2026-09-24 |
| [#2386](https://github.com/ROCm/ATOM/pull/2386) | [Performance] Split NUMA-bound CPUs into per-GPU physical-co... | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2355](https://github.com/ROCm/ATOM/pull/2355) | CI: allow overriding ATOM inference watchdog threshold | @gyohuangxin | open | 2026-09-22 | 2026-09-24 |
| [#2381](https://github.com/ROCm/ATOM/pull/2381) | [Performance] Reduce TP host-control overhead for C16 | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2344](https://github.com/ROCm/ATOM/pull/2344) | (doc)GLM-5.3 LMCache: concurrency sweep (8/16/32) and HBM/ti... | @PerryZhang01 | open | 2026-09-22 | 2026-09-23 |
| [#2349](https://github.com/ROCm/ATOM/pull/2349) | Add MiMo V2.5 Pro support to the SGLang plugin | @yucshen | open | 2026-09-22 | 2026-09-23 |
| [#2359](https://github.com/ROCm/ATOM/pull/2359) | [Bugfix][vLLM] Forward unknown kwargs through the Harmony pa... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2361](https://github.com/ROCm/ATOM/pull/2361) | [Bugfix][vLLM] Fill padded GDN decode state slots with NULL_... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2362](https://github.com/ROCm/ATOM/pull/2362) | [Bugfix][vLLM] Only engage the EAGLE3 heterogeneous KV pool ... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2340](https://github.com/ROCm/ATOM/pull/2340) | Enable GLM-5.3-Flash under vllm serve on the ATOM plugin.- #... | @sajandhy | draft | 2026-09-22 | 2026-09-22 |
| [#2287](https://github.com/ROCm/ATOM/pull/2287) | feat(ci): collect per-GPU hardware metrics in agentic report... | @Jasen2201 | open | 2026-09-18 | 2026-09-22 |
| [#1873](https://github.com/ROCm/ATOM/pull/1873) | Expose Prometheus metrics for KV-aware routing and modernize... | @Jasen2201 | open | 2026-08-12 | 2026-09-22 |
| [#2293](https://github.com/ROCm/ATOM/pull/2293) | Add hybrid mega/standard MoE dispatch for MegaMxfp4MoEMethod | @amd-weisun | draft | 2026-09-18 | 2026-09-21 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | draft | 2026-08-19 | 2026-09-21 |
| [#2318](https://github.com/ROCm/ATOM/pull/2318) | fix(spec-decode): honor request sampling during target verif... | @gbyu-amd | draft | 2026-09-20 | 2026-09-20 |
| [#2301](https://github.com/ROCm/ATOM/pull/2301) | [Spec Decode] Add opt-in synthetic forward for forced accept... | @gbyu-amd | open | 2026-09-20 | 2026-09-20 |
| [#2286](https://github.com/ROCm/ATOM/pull/2286) | [FlyDSL] [Gfx1250] mega moe stage1 gfx1250 no overlap | @XingerZhu | open | 2026-09-18 | 2026-09-20 |
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-09-20 |
| [#2203](https://github.com/ROCm/ATOM/pull/2203) | [KV-events] match vLLM/SGLang ZMQ framing and per-DP-rank po... | @vMaroon | open | 2026-09-11 | 2026-09-20 |
| [#2126](https://github.com/ROCm/ATOM/pull/2126) | fix kimi k3 piecewise cudagraph | @ganyi1996ppo | draft | 2026-09-03 | 2026-09-18 |
| [#2275](https://github.com/ROCm/ATOM/pull/2275) | fix(plugin/vllm): keep the platform hook from dropping ATOMP... | @linsun12 | open | 2026-09-17 | 2026-09-18 |
| [#2266](https://github.com/ROCm/ATOM/pull/2266) | [ATOM][Metrics]: add decode TTFT stages, GPU sample/propose,... | @MengqingCao | draft | 2026-09-17 | 2026-09-17 |
| [#2258](https://github.com/ROCm/ATOM/pull/2258) | feed local expert hash from atom to moe | @yadaish | open | 2026-09-16 | 2026-09-17 |
| [#2260](https://github.com/ROCm/ATOM/pull/2260) | fix(offload): stop a failed external-tier load from livelock... | @PerryZhang01 | open | 2026-09-16 | 2026-09-17 |
| [#2262](https://github.com/ROCm/ATOM/pull/2262) | docs: refresh installation, model inventory and publication ... | @sunway513 | open | 2026-09-16 | 2026-09-17 |
| [#2252](https://github.com/ROCm/ATOM/pull/2252) | feat(dsv4-flash): vLLM-plugin in-process LMCache offload for... | @linsun12 | draft | 2026-09-16 | 2026-09-16 |
| [#2243](https://github.com/ROCm/ATOM/pull/2243) | Size the staging pack grid by the bytes it moves, not the wi... | @PerryZhang01 | open | 2026-09-15 | 2026-09-16 |
| [#2237](https://github.com/ROCm/ATOM/pull/2237) | ci: add safe incremental ATOM image builds | @yhl-amd | open | 2026-09-15 | 2026-09-16 |
| [#2241](https://github.com/ROCm/ATOM/pull/2241) | ci: add Copilot code review instructions | @valarLip | open | 2026-09-15 | 2026-09-16 |
| [#2222](https://github.com/ROCm/ATOM/pull/2222) | perf(loader): separate streaming and drain concurrency | @JiaoliangYu | draft | 2026-09-14 | 2026-09-15 |
| [#2122](https://github.com/ROCm/ATOM/pull/2122) | fix(minimax-m3): unblock fp8 KV cache and EAGLE3 spec decode... | @PerryZhang01 | open | 2026-09-03 | 2026-09-14 |
| [#2206](https://github.com/ROCm/ATOM/pull/2206) | setting HSA_ENABLE_IPC_MODE_LEGACY=1 to avoid GPU memory pin... | @linsun12 | open | 2026-09-12 | 2026-09-14 |
| [#2212](https://github.com/ROCm/ATOM/pull/2212) | Qichu/allow mtp8 with spec decode | @ZhiweiYan-96 | draft | 2026-09-13 | 2026-09-13 |
| [#2071](https://github.com/ROCm/ATOM/pull/2071) | [Ci]agentic benchmark ci weekly | @ZhangLirong-amd | open | 2026-08-28 | 2026-09-11 |
| [#2187](https://github.com/ROCm/ATOM/pull/2187) | feat(wideep): integrate EP16 transport with modular fused Mo... | @JiaoliangYu | draft | 2026-09-10 | 2026-09-11 |
| [#2196](https://github.com/ROCm/ATOM/pull/2196) | scheduler: make the prefill coalescer work on the TP/DCP pat... | @ZhiweiYan-96 | draft | 2026-09-11 | 2026-09-11 |
| [#1942](https://github.com/ROCm/ATOM/pull/1942) | feat(wideep): multi-node wide expert parallelism on top of #... | @JiaoliangYu | draft | 2026-08-18 | 2026-09-10 |
| [#1973](https://github.com/ROCm/ATOM/pull/1973) | Qwen38 accuracy | @PerryZhang01 | open | 2026-08-20 | 2026-09-10 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | open | 2026-08-13 | 2026-09-10 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-09-09 |
| [#2158](https://github.com/ROCm/ATOM/pull/2158) | [Scheduler] Shortest-job-first prefill admission to cut p90 ... | @ganyi1996ppo | open | 2026-09-07 | 2026-09-08 |
| [#2039](https://github.com/ROCm/ATOM/pull/2039) | perf(dpa): sync forward metadata over device group | @yhl-amd | open | 2026-08-26 | 2026-09-07 |
| [#2142](https://github.com/ROCm/ATOM/pull/2142) | [atom-vllm] LMCache offload for GLM-5.2 | @kliuae | open | 2026-09-04 | 2026-09-07 |
| [#2116](https://github.com/ROCm/ATOM/pull/2116) | perf: capture DeepSeek-V4 MTP step zero | @yhl-amd | open | 2026-09-02 | 2026-09-03 |
| [#2059](https://github.com/ROCm/ATOM/pull/2059) | docs: Fix duplicated table on atom overview | @timothycarambat | open | 2026-08-27 | 2026-08-29 |
| [#1995](https://github.com/ROCm/ATOM/pull/1995) | [ATOM] add persistent path for DCP GLM5.2 | @zhuyuhua-v | open | 2026-08-24 | 2026-08-28 |
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
| [#1937](https://github.com/ROCm/ATOM/pull/1937) | perf(mtp): defer draft proposal publication | @yhl-amd | open | 2026-08-18 | 2026-08-20 |
| [#1946](https://github.com/ROCm/ATOM/pull/1946) | feat(state-cache): snapshot PAGE state at prefill end | @yhl-amd | open | 2026-08-19 | 2026-08-20 |
| [#1947](https://github.com/ROCm/ATOM/pull/1947) | state checkpoint port optimized | @ganyi1996ppo | open | 2026-08-19 | 2026-08-20 |
| [#1879](https://github.com/ROCm/ATOM/pull/1879) | Optimize statecache and prefix caching strategy for Mamba li... | @ganyi1996ppo | open | 2026-08-13 | 2026-08-19 |
| [#1908](https://github.com/ROCm/ATOM/pull/1908) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-08-15 | 2026-08-19 |
| [#1933](https://github.com/ROCm/ATOM/pull/1933) | ci: prefer commit-specific Aiter S3 manifest | @gyohuangxin | open | 2026-08-17 | 2026-08-19 |
| [#1941](https://github.com/ROCm/ATOM/pull/1941) | [recipe] add Agentic-K3 recipe | @gbyu-amd | open | 2026-08-18 | 2026-08-19 |
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
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-08-11 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#837](https://github.com/ROCm/ATOM/pull/837) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-07-03 |
| [#2675](https://github.com/ROCm/ATOM/pull/2675) | [Plugin][SGLang] GDN mamba radix cache (extra_buffer, page 6... | @zovonoir | merged | 2026-10-22 | 2026-10-29 |
| [#2710](https://github.com/ROCm/ATOM/pull/2710) | feat(attention): FlyDSL paged decode for MiniMax-M3 on gfx12... | @lirui927 | merged | 2026-10-26 | 2026-10-29 |
| [#2780](https://github.com/ROCm/ATOM/pull/2780) | fix(ci): skip hf download for cached models in SGLang benchm... | @junyyang-amd | merged | 2026-10-28 | 2026-10-29 |
| [#2645](https://github.com/ROCm/ATOM/pull/2645) | perf(sglang-atom): CUDA graphs for the Qwen3.8-Flash-Next MT... | @zovonoir | merged | 2026-10-20 | 2026-10-29 |
| [#2788](https://github.com/ROCm/ATOM/pull/2788) | fix(plugin): allow SGLang prefill CP on HIP for ATOM models | @junyyang-amd | merged | 2026-10-28 | 2026-10-29 |
| [#2717](https://github.com/ROCm/ATOM/pull/2717) | feat(rtpllm): support Qwen4Exp prefix cache side states | @junna2016 | merged | 2026-10-26 | 2026-10-29 |
| [#2801](https://github.com/ROCm/ATOM/pull/2801) | qwen35 c16 perf | @azaidy | merged | 2026-10-28 | 2026-10-29 |
| [#2798](https://github.com/ROCm/ATOM/pull/2798) | [gfx1250] Prefix-split attention: choose the slice count wit... | @vgokhale | merged | 2026-10-28 | 2026-10-28 |
| [#2799](https://github.com/ROCm/ATOM/pull/2799) | Revert "Satya/gluon fused allreduce rmsnorm" | @Boss2002n | merged | 2026-10-28 | 2026-10-28 |
| [#2740](https://github.com/ROCm/ATOM/pull/2740) | [Recipe] Qwen3.5 MLPerf Endpoints: MTP on every point, bench... | @vgokhale | merged | 2026-10-27 | 2026-10-28 |
| [#2790](https://github.com/ROCm/ATOM/pull/2790) | [gfx1250] Qwen3.5 GDN builder: prefill token graphs with one... | @vgokhale | merged | 2026-10-28 | 2026-10-28 |
| [#2796](https://github.com/ROCm/ATOM/pull/2796) | [gfx1250] Port #2793 (unified attention equal_seqlen_q) to t... | @vgokhale | merged | 2026-10-28 | 2026-10-28 |
| [#2792](https://github.com/ROCm/ATOM/pull/2792) | [ATOM] scheduler: one checkpoint-demand cut per prefix per a... | @vgokhale | merged | 2026-10-28 | 2026-10-28 |
| [#2773](https://github.com/ROCm/ATOM/pull/2773) | [GDN][Perf] Build causal_conv1d program map on GPU with Trit... | @ganyi1996ppo | merged | 2026-10-28 | 2026-10-28 |
| [#2768](https://github.com/ROCm/ATOM/pull/2768) | [gfx1250] Qwen3.5 GDN/MHA builder: pad a prefill to a token-... | @vgokhale | merged | 2026-10-27 | 2026-10-28 |
| [#2554](https://github.com/ROCm/ATOM/pull/2554) | feat(kimi-k3): E8M0 block scales for online per_1x128 FP8 on... | @qichu-yun | merged | 2026-10-13 | 2026-10-28 |
| [#2741](https://github.com/ROCm/ATOM/pull/2741) | perf(mono): reuse AITER compiled FlyDSL dispatch | @coderfeli | merged | 2026-10-27 | 2026-10-28 |
| [#2754](https://github.com/ROCm/ATOM/pull/2754) | fix(engram): share one page-locked Engram table across DP ra... | @yhl-amd | merged | 2026-10-27 | 2026-10-28 |
| [#2764](https://github.com/ROCm/ATOM/pull/2764) | perf(minimax-m3): tune prefill index score for gfx1250 | @XiaobingSuper | merged | 2026-10-27 | 2026-10-28 |
| [#2686](https://github.com/ROCm/ATOM/pull/2686) | [MiniMax-M3.1] Enable Mono decode with fixed DSpark verify | @wuhuikx | merged | 2026-10-23 | 2026-10-28 |
| [#2776](https://github.com/ROCm/ATOM/pull/2776) | refactor: shared DSA indexer forward and top-k schedule, spa... | @valarLip | merged | 2026-10-28 | 2026-10-28 |
| [#2784](https://github.com/ROCm/ATOM/pull/2784) | ci(agentic): run the DSv4.1 DTP2/DEP2 c128 cells with Infere... | @ZhangLirong-amd | merged | 2026-10-28 | 2026-10-28 |
| [#2766](https://github.com/ROCm/ATOM/pull/2766) | [gfx1250] Enable aiter's Gluon fused all-reduce + RMSNorm fo... | @Boss2002n | merged | 2026-10-27 | 2026-10-28 |
| [#2562](https://github.com/ROCm/ATOM/pull/2562) | [ATOM] accelerate lm cache: load the CPU prefix when the Qwe... | @ZLkanyo009 | merged | 2026-10-14 | 2026-10-28 |
| [#2337](https://github.com/ROCm/ATOM/pull/2337) | [CI][ROCm][ATOMesh] Add DeepSeek-V4-Pro 2P1D TP8 catalog cas... | @avininjamay8 | merged | 2026-09-21 | 2026-10-28 |
| [#2676](https://github.com/ROCm/ATOM/pull/2676) | fix(sglang): avoid HIP segfault in xgrammar json_object bitm... | @zhangxinyuanliuhengyu | merged | 2026-10-22 | 2026-10-27 |
| [#2714](https://github.com/ROCm/ATOM/pull/2714) | ci: run vLLM/SGLang plugin MI355 benchmark and accuracy on P... | @junyyang-amd | merged | 2026-10-26 | 2026-10-27 |
| [#2425](https://github.com/ROCm/ATOM/pull/2425) | [ATOM][PD][Feat] Transfer KV by chunk | @MengqingCao | merged | 2026-09-29 | 2026-10-27 |
| [#2125](https://github.com/ROCm/ATOM/pull/2125) | [PCP] Fix sampled-id sync, DSpark aux gather and FP4 indexer... | @yitingw1 | merged | 2026-09-03 | 2026-10-27 |
| [#2456](https://github.com/ROCm/ATOM/pull/2456) | [AMD][DSR1] feat(dp): backpressure (lazy) DP dispatch to avo... | @karverma-amd | merged | 2026-10-02 | 2026-10-27 |
| [#2736](https://github.com/ROCm/ATOM/pull/2736) | feat(mono): serve GLM-5.2 mono decode at TP8 | @zhuyuhua-v | merged | 2026-10-27 | 2026-10-27 |
| [#2758](https://github.com/ROCm/ATOM/pull/2758) | Route ATOM accuracy tests back to DO MI350X | @gyohuangxin | merged | 2026-10-27 | 2026-10-27 |
| [#2753](https://github.com/ROCm/ATOM/pull/2753) | Route ATOM tests through general MI350X label | @gyohuangxin | merged | 2026-10-27 | 2026-10-27 |
| [#2470](https://github.com/ROCm/ATOM/pull/2470) | fix(logging): print atom records once and support ATOM_LOG_L... | @amd-ruitang3 | merged | 2026-10-04 | 2026-10-27 |
| [#2617](https://github.com/ROCm/ATOM/pull/2617) | [gfx1250] DeepSeek-V4.1: run on gfx1250 (MI455X) with FlyDSL... | @yhl-amd | merged | 2026-10-16 | 2026-10-27 |
| [#2742](https://github.com/ROCm/ATOM/pull/2742) | [sgl atom]Restore SGLang accuracy recipes changed by #1872 | @zhangxinyuanliuhengyu | merged | 2026-10-27 | 2026-10-27 |
| [#2576](https://github.com/ROCm/ATOM/pull/2576) | ci(benchmark): run AgentX benchmarks with agentx-harness 1.0... | @Jasen2201 | merged | 2026-10-14 | 2026-10-27 |
| [#1872](https://github.com/ROCm/ATOM/pull/1872) | [ATOM SGL] retarget 0.5.20 accuracy CI and fix SGLang plugin... | @ZhiweiYan-96 | merged | 2026-08-12 | 2026-10-27 |
| [#2732](https://github.com/ROCm/ATOM/pull/2732) | [gfx1250] Qwen3.5-35B-A3B: fused (mono) decode kernels + MLP... | @vgokhale | merged | 2026-10-27 | 2026-10-27 |
| [#2734](https://github.com/ROCm/ATOM/pull/2734) | Satya/gluon fused allreduce rmsnorm | @Boss2002n | merged | 2026-10-27 | 2026-10-27 |
| [#2733](https://github.com/ROCm/ATOM/pull/2733) | [gfx1250] Qwen3.5 MTP: ReplaySSM fold race fix, greedy argma... | @vgokhale | merged | 2026-10-27 | 2026-10-27 |
| [#2725](https://github.com/ROCm/ATOM/pull/2725) | feat(moe): route before the rows move; per-pass real row cou... | @valarLip | merged | 2026-10-26 | 2026-10-26 |
| [#2703](https://github.com/ROCm/ATOM/pull/2703) | feat(dsv4): restore model-owned Mono decode | @yifehuan | merged | 2026-10-26 | 2026-10-26 |
| [#2716](https://github.com/ROCm/ATOM/pull/2716) | perf(tokenizer): reuse cached prefix hashes across requests | @ZhangLirong-amd | merged | 2026-10-26 | 2026-10-26 |
| [#2697](https://github.com/ROCm/ATOM/pull/2697) | fix(dp): a decoding rank replays the group's prefill token-g... | @yhl-amd | merged | 2026-10-24 | 2026-10-26 |
| [#2719](https://github.com/ROCm/ATOM/pull/2719) | feat(trace): show padded rows and every DP rank's work in ru... | @yhl-amd | merged | 2026-10-26 | 2026-10-26 |
| [#2649](https://github.com/ROCm/ATOM/pull/2649) | perf(qwen4-exp): keep 128-aligned MXFP4 expert intermediate ... | @ZLkanyo009 | merged | 2026-10-20 | 2026-10-26 |
| [#2561](https://github.com/ROCm/ATOM/pull/2561) | feat(rtpllm): support Qwen3.8 ATOM MTP target and draft as w... | @junna2016 | merged | 2026-10-14 | 2026-10-26 |
| [#2695](https://github.com/ROCm/ATOM/pull/2695) | [OpenAI] Serve the MLPerf Endpoints agentic client: top_k=0 ... | @yhl-amd | merged | 2026-10-24 | 2026-10-26 |
| [#2654](https://github.com/ROCm/ATOM/pull/2654) | fix(mtp): keep side-stream D2H sources alive until the copy ... | @ZLkanyo009 | merged | 2026-10-20 | 2026-10-26 |
| [#2685](https://github.com/ROCm/ATOM/pull/2685) | fix(v41): run lmcache_mp under encoder SWA bounded replay | @ZhangLirong-amd | merged | 2026-10-23 | 2026-10-26 |
| [#2659](https://github.com/ROCm/ATOM/pull/2659) | [Kimi-K3] mono: serve 16-row and drafter-tapped steps, optio... | @ganyi1996ppo | merged | 2026-10-21 | 2026-10-26 |
| [#2565](https://github.com/ROCm/ATOM/pull/2565) | fix(attention): prevent int32 overflow in cached KV gather | @MengqingCao | merged | 2026-10-14 | 2026-10-26 |
| [#2652](https://github.com/ROCm/ATOM/pull/2652) | feat(qwen4-exp): QSA FP8 KV and FP8 / FP4 index caches, with... | @ZLkanyo009 | merged | 2026-10-20 | 2026-10-26 |
| [#2678](https://github.com/ROCm/ATOM/pull/2678) | [MiniMax-M3.1] Day-0 support for MiniMax-M3.1-Flash: Quark M... | @wuhuikx | merged | 2026-10-23 | 2026-10-26 |
| [#2650](https://github.com/ROCm/ATOM/pull/2650) | feat(qwen4-exp): online PTPC FP8 for the GDN in_proj, with f... | @ZLkanyo009 | merged | 2026-10-20 | 2026-10-26 |
| [#2632](https://github.com/ROCm/ATOM/pull/2632) | [GLM-5.2] recipe: run mono decode at MTP3 on C1/C2; record #... | @ZhiweiYan-96 | merged | 2026-10-19 | 2026-10-26 |
| [#2335](https://github.com/ROCm/ATOM/pull/2335) | [Feature] IQ2R glm53_moe: load packed 2-bit MoE checkpoints ... | @ssharma4-amd | merged | 2026-09-21 | 2026-10-26 |
| [#2272](https://github.com/ROCm/ATOM/pull/2272) | [CI][ROCm][ATOMesh] Add MiniMax-M3-FP8 2P1D TP8 catalog case... | @avininjamay8 | merged | 2026-09-17 | 2026-10-26 |
| [#2509](https://github.com/ROCm/ATOM/pull/2509) | Enable MoRI-io connector write mode & fix spur issues | @lcskrishna | merged | 2026-10-09 | 2026-10-26 |
| [#2705](https://github.com/ROCm/ATOM/pull/2705) | fix(sglang): match the mono-refusal stand-in to the signatur... | @yitingw1 | merged | 2026-10-26 | 2026-10-26 |
| [#2684](https://github.com/ROCm/ATOM/pull/2684) | perf(engram): copy the UVA shard into page-locked memory ins... | @ZhangLirong-amd | merged | 2026-10-23 | 2026-10-26 |
| [#2606](https://github.com/ROCm/ATOM/pull/2606) | fix(qwen4_exp): load unscaled Quark MTP weights as BF16 | @ZLkanyo009 | merged | 2026-10-16 | 2026-10-26 |
| [#2677](https://github.com/ROCm/ATOM/pull/2677) | fix(ci): expose container engine errors and guard SGLang cle... | @junyyang-amd | merged | 2026-10-22 | 2026-10-26 |
| [#2613](https://github.com/ROCm/ATOM/pull/2613) | [FlyDSL] [gfx1250] Add opt-in MXFP4 linear path via AITER ge... | @aoli26 | merged | 2026-10-16 | 2026-10-25 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-10-29T14:44:08Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#874](https://github.com/ROCm/mori/pull/874) | feat(ep/v2): gfx1250-strict support | @jhchouuu | open | 2026-10-29 | 2026-10-29 |
| [#859](https://github.com/ROCm/mori/pull/859) | example(cco): Mega-MoE GEMM2 fused with an SDMA combine (gfx... | @kawhil-amd | open | 2026-10-27 | 2026-10-29 |
| [#870](https://github.com/ROCm/mori/pull/870) | feat(umbp): calibrate CPU, GPU, RDMA and SSD transfers | @wuyl1 | draft | 2026-10-29 | 2026-10-29 |
| [#862](https://github.com/ROCm/mori/pull/862) | feat(umbp): simulate storage and local/peer KV transfers | @wuyl1 | draft | 2026-10-28 | 2026-10-29 |
| [#866](https://github.com/ROCm/mori/pull/866) | feat(cco): fused SDMA wait+put post, and an engine-wait in-p... | @AMD-yanfeiwang | open | 2026-10-28 | 2026-10-29 |
| [#872](https://github.com/ROCm/mori/pull/872) | feat(gemm-ar): BF16 GEMM + all-reduce for layers the checkpo... | @yangyuhuiling | draft | 2026-10-29 | 2026-10-29 |
| [#851](https://github.com/ROCm/mori/pull/851) | feat(umbp): automatically report DRAM residency to SGLang KV... | @wuyl1 | open | 2026-10-27 | 2026-10-29 |
| [#865](https://github.com/ROCm/mori/pull/865) | feat(umbp): the UMBP_DISTRIBUTED_* variables configure an in... | @isytwu | open | 2026-10-28 | 2026-10-29 |
| [#856](https://github.com/ROCm/mori/pull/856) | feat(umbp): lay the standalone server's ranged scratch out b... | @isytwu | open | 2026-10-27 | 2026-10-29 |
| [#796](https://github.com/ROCm/mori/pull/796) | test(ep/v1): verify every round of --cmd stress for InterNod... | @amirakb89 | open | 2026-10-17 | 2026-10-29 |
| [#816](https://github.com/ROCm/mori/pull/816) | Draft collectives develop | @pemeliya | draft | 2026-10-20 | 2026-10-29 |
| [#843](https://github.com/ROCm/mori/pull/843) | Wide ep tuning | @zhangfei829 | open | 2026-10-26 | 2026-10-29 |
| [#845](https://github.com/ROCm/mori/pull/845) | Feat/check ib atomic bw dmabuf | @amirakb89 | open | 2026-10-26 | 2026-10-29 |
| [#871](https://github.com/ROCm/mori/pull/871) | Dev/migrate rocm10 | @QizhouZhang97 | open | 2026-10-29 | 2026-10-29 |
| [#867](https://github.com/ROCm/mori/pull/867) | feat(io): simulated RDMA/TCP/XGMI backends that need no GPU ... | @TianDi101 | open | 2026-10-28 | 2026-10-29 |
| [#696](https://github.com/ROCm/mori/pull/696) | opt v2 internode | @QizhouZhang97 | open | 2026-09-22 | 2026-10-29 |
| [#857](https://github.com/ROCm/mori/pull/857) | perf(gemm-ar): load mxfp8 scales one K step ahead at K >= 40... | @yangyuhuiling | open | 2026-10-27 | 2026-10-29 |
| [#802](https://github.com/ROCm/mori/pull/802) | gemm_ar: fused GEMM + reduce-scatter for sequence parallelis... | @yangyuhuiling | open | 2026-10-19 | 2026-10-29 |
| [#807](https://github.com/ROCm/mori/pull/807) | gemm_ag: GEMM fused with an all-gather over cco | @yangyuhuiling | draft | 2026-10-19 | 2026-10-29 |
| [#869](https://github.com/ROCm/mori/pull/869) | fix(rdma): opt-in workaround for KFD free-VRAM miscount of R... | @isytwu | open | 2026-10-29 | 2026-10-29 |
| [#695](https://github.com/ROCm/mori/pull/695) | gemm_a2a: fuse a column-sharded all-to-all into the fp8 GEMM... | @yangyuhuiling | open | 2026-09-22 | 2026-10-29 |
| [#868](https://github.com/ROCm/mori/pull/868) | a2a_gemm: all-to-all fused into the fp8 GEMM that consumes i... | @yangyuhuiling | draft | 2026-10-28 | 2026-10-29 |
| [#860](https://github.com/ROCm/mori/pull/860) | feat(ep) Add KIWI EP dispatch/combine as an optional MORI op... | @charlifu | open | 2026-10-27 | 2026-10-28 |
| [#864](https://github.com/ROCm/mori/pull/864) | fix(io): a post that runs out of SQ depth no longer leaks th... | @isytwu | open | 2026-10-28 | 2026-10-28 |
| [#863](https://github.com/ROCm/mori/pull/863) | fix(bootstrap): close sockets and peer fds on failure paths | @jhchouuu | open | 2026-10-28 | 2026-10-28 |
| [#861](https://github.com/ROCm/mori/pull/861) | feat(ras): MORI RAS runtime with heartbeat links and process... | @i-chaochen | open | 2026-10-28 | 2026-10-28 |
| [#850](https://github.com/ROCm/mori/pull/850) | [UMBP] Add async prefetch requests for Router integration | @wuyl1 | draft | 2026-10-27 | 2026-10-27 |
| [#818](https://github.com/ROCm/mori/pull/818) | [NFC] Refactor GPU vector load/store primitives and remove d... | @pemeliya | open | 2026-10-20 | 2026-10-28 |
| [#858](https://github.com/ROCm/mori/pull/858) | fix(gfx125x): reserve enough scale staging for MXFP8 dispatc... | @JiaoliangYu | draft | 2026-10-27 | 2026-10-27 |
| [#849](https://github.com/ROCm/mori/pull/849) | bugfix: ep internode hung | @QizhouZhang97 | open | 2026-10-27 | 2026-10-27 |
| [#841](https://github.com/ROCm/mori/pull/841) | fix(anvil): read topology from sysfs, give libhsakmt its own... | @jhchouuu | open | 2026-10-26 | 2026-10-27 |
| [#848](https://github.com/ROCm/mori/pull/848) | Feat/io receiver fence | @amirakb89 | draft | 2026-10-27 | 2026-10-27 |
| [#846](https://github.com/ROCm/mori/pull/846) | feat(io): add version/mode/layout compatibility check to han... | @kudomcho | open | 2026-10-26 | 2026-10-26 |
| [#797](https://github.com/ROCm/mori/pull/797) | Fall back to scoped 64-bit atomics when b128 global builtins... | @aokblast | open | 2026-10-18 | 2026-10-26 |
| [#842](https://github.com/ROCm/mori/pull/842) | fix(umbp): master routes a repeat put of an in-flight key to... | @TianDi101 | open | 2026-10-26 | 2026-10-26 |
| [#825](https://github.com/ROCm/mori/pull/825) | feat(umbp): add multi-GPU KV cache restores | @BadrBasowid | open | 2026-10-21 | 2026-10-23 |
| [#779](https://github.com/ROCm/mori/pull/779) | feat(umbp): BatchTouch recency hints and eviction classes fo... | @isytwu | draft | 2026-10-15 | 2026-10-23 |
| [#833](https://github.com/ROCm/mori/pull/833) | fix(topology): give each NIC its closest GPUs before farther... | @MohitAMD | open | 2026-10-22 | 2026-10-22 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#829](https://github.com/ROCm/mori/pull/829) | feat(umbp): the master routes small objects away from tiers ... | @TianDi101 | open | 2026-10-22 | 2026-10-22 |
| [#824](https://github.com/ROCm/mori/pull/824) | feat(umbp): an SSD backend can keep small objects off it (mi... | @TianDi101 | open | 2026-10-21 | 2026-10-21 |
| [#795](https://github.com/ROCm/mori/pull/795) | fix(EPv2): add a tuned flydsl EP8 table for MI300X | @jeffdaily | open | 2026-10-17 | 2026-10-20 |
| [#809](https://github.com/ROCm/mori/pull/809) | ag_gemm: all-gather fused into the fp8 GEMM that consumes it | @yangyuhuiling | draft | 2026-10-19 | 2026-10-20 |
| [#730](https://github.com/ROCm/mori/pull/730) | draft: perf(ep/asyncll): fuse recv-count signal onto send QP... | @yoqiu-amd | open | 2026-10-09 | 2026-10-16 |
| [#787](https://github.com/ROCm/mori/pull/787) | fix(umbp): a remote read checks after the copy that it read ... | @TianDi101 | draft | 2026-10-16 | 2026-10-16 |
| [#780](https://github.com/ROCm/mori/pull/780) | Dont merge, dummy perf collection Feat/ep v1 atomic free ion... | @amirakb89 | draft | 2026-10-15 | 2026-10-15 |
| [#717](https://github.com/ROCm/mori/pull/717) | perf(umbp): keep large restore fragments on the gather kerne... | @isytwu | open | 2026-09-30 | 2026-10-14 |
| [#747](https://github.com/ROCm/mori/pull/747) | perf(umbp): let a ranged-get group resolve its keys once, no... | @isytwu | draft | 2026-10-12 | 2026-10-12 |
| [#698](https://github.com/ROCm/mori/pull/698) | feat(ep): support precompiled active QP subsets | @jhchouuu | open | 2026-09-22 | 2026-10-08 |
| [#712](https://github.com/ROCm/mori/pull/712) | feat(ep): add opt-in gfx1201 EP2/EP4 support | @dongdongzhao1121 | open | 2026-09-28 | 2026-09-30 |
| [#692](https://github.com/ROCm/mori/pull/692) | feat(umbp): make the heartbeat interval changeable at runtim... | @isytwu | draft | 2026-09-21 | 2026-09-21 |
| [#682](https://github.com/ROCm/mori/pull/682) | [RDMA][ionic] Strip REMOTE_ATOMIC MR flag + restore HIP devi... | @raviguptaamd | open | 2026-09-17 | 2026-09-17 |
| [#681](https://github.com/ROCm/mori/pull/681) | Proof-of-idea adaptive MORI and Kiwi EP backend selection | @JiakunYan | draft | 2026-09-16 | 2026-09-17 |
| [#671](https://github.com/ROCm/mori/pull/671) | Include github_agpl_crawler.py in __init__.py | @WLloverSZ | draft | 2026-09-15 | 2026-09-15 |
| [#664](https://github.com/ROCm/mori/pull/664) | perf(EPv2): add validated MI308X/Thor2 MoE tuning profiles | @jhchouuu | open | 2026-09-12 | 2026-09-12 |
| [#657](https://github.com/ROCm/mori/pull/657) | new collective development for JAX/XLA | @i-chaochen | open | 2026-09-10 | 2026-09-12 |
| [#659](https://github.com/ROCm/mori/pull/659) | test(EPv2): make the routing independent of the sweep list, ... | @jhchouuu | open | 2026-09-11 | 2026-09-11 |
| [#632](https://github.com/ROCm/mori/pull/632) | fix(cco): take allocMutex on the window paths, as its commen... | @jhchouuu | open | 2026-09-02 | 2026-09-02 |
| [#585](https://github.com/ROCm/mori/pull/585) | Don't merge: AI NIC perf collection | @amirakb89 | draft | 2026-08-19 | 2026-08-31 |
| [#578](https://github.com/ROCm/mori/pull/578) | feat(ep/v2): TDM dispatch transport for the flydsl backend | @XingerZhu | open | 2026-08-18 | 2026-08-31 |
| [#574](https://github.com/ROCm/mori/pull/574) | Io prepared transfers v3 | @amirakb89 | open | 2026-08-17 | 2026-08-31 |
| [#539](https://github.com/ROCm/mori/pull/539) | perf(EP): tune EPv1 MI300X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @kudomcho | open | 2026-08-11 | 2026-08-31 |
| [#533](https://github.com/ROCm/mori/pull/533) | chore(EPv2): split dispatch/combine tuning schedules into in... | @kawhil-amd | open | 2026-08-09 | 2026-08-31 |
| [#527](https://github.com/ROCm/mori/pull/527) | fix(io): detect host vs device memory in RegisterMemory inst... | @TianDi101 | open | 2026-08-05 | 2026-08-31 |
| [#525](https://github.com/ROCm/mori/pull/525) | bench: tuning config lookup overhead reproducer | @kudomcho | open | 2026-08-04 | 2026-08-31 |
| [#521](https://github.com/ROCm/mori/pull/521) | ep: allow EpDispatchCombineOp to be resized at runtime | @inkcherry | open | 2026-08-04 | 2026-08-31 |
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
| [#598](https://github.com/ROCm/mori/pull/598) | tune(ep/v2): give fp8 dispatch its own gfx1250 EP4 row | @jhchouuu | open | 2026-08-24 | 2026-08-31 |
| [#814](https://github.com/ROCm/mori/pull/814) | feat(cco): add SDMA POLL_REGMEM wait and COPY broadcast pack... | @kawhil-amd | merged | 2026-10-20 | 2026-10-29 |
| [#740](https://github.com/ROCm/mori/pull/740) | fix(mlx5): stop mixing dmabuf and peermem on GPU control str... | @QizhouZhang97 | merged | 2026-10-10 | 2026-10-29 |
| [#852](https://github.com/ROCm/mori/pull/852) | build(wheel): build published wheels on manylinux_2_28 | @QizhouZhang97 | merged | 2026-10-27 | 2026-10-29 |
| [#844](https://github.com/ROCm/mori/pull/844) | feat(ep/v2): plans report the arena and staging sizes they n... | @jhchouuu | merged | 2026-10-26 | 2026-10-28 |
| [#855](https://github.com/ROCm/mori/pull/855) | feat(umbp): place remote writes on the writer's NUMA node | @isytwu | merged | 2026-10-27 | 2026-10-28 |
| [#603](https://github.com/ROCm/mori/pull/603) | CCO SDMA micro optimizations | @pemeliya | merged | 2026-08-25 | 2026-10-28 |
| [#827](https://github.com/ROCm/mori/pull/827) | fix(umbp): SSD single flight joins any in-flight read coveri... | @TianDi101 | merged | 2026-10-22 | 2026-10-28 |
| [#805](https://github.com/ROCm/mori/pull/805) | feat(cco): 2D SDMA put/get via the LINEAR_LARGE_SUB_WINDOW p... | @yangyuhuiling | merged | 2026-10-19 | 2026-10-28 |
| [#836](https://github.com/ROCm/mori/pull/836) | fix(io): a failed notification post waits for the transfer's... | @isytwu | merged | 2026-10-23 | 2026-10-28 |
| [#823](https://github.com/ROCm/mori/pull/823) | feat(umbp): BatchPrefetch stages a queued request's keys in ... | @TianDi101 | merged | 2026-10-21 | 2026-10-28 |
| [#810](https://github.com/ROCm/mori/pull/810) | feat(umbp): register large host DRAM buffers as several NIC ... | @TianDi101 | merged | 2026-10-19 | 2026-10-28 |
| [#771](https://github.com/ROCm/mori/pull/771) | fix(bootstrap): add retry and increase timeout in SendMessag... | @kudomcho | merged | 2026-10-14 | 2026-10-28 |
| [#806](https://github.com/ROCm/mori/pull/806) | perf(gemm-ar): mxfp8 with row-major scales staged through LD... | @yangyuhuiling | merged | 2026-10-19 | 2026-10-28 |
| [#853](https://github.com/ROCm/mori/pull/853) | Fix flaky test_engine (EADDRINUSE) and the follow-on async-e... | @QizhouZhang97 | merged | 2026-10-27 | 2026-10-27 |
| [#748](https://github.com/ROCm/mori/pull/748) | perf(gemm-ar): opt-in optimization paths, and their measurem... | @yangyuhuiling | merged | 2026-10-12 | 2026-10-27 |
| [#768](https://github.com/ROCm/mori/pull/768) | feat(ep/v2): AsyncLL dispatch/combine on cco, with cross-nod... | @yangyuhuiling | merged | 2026-10-14 | 2026-10-27 |
| [#815](https://github.com/ROCm/mori/pull/815) | feat(io): async NIC event fault injection and port-down fail... | @maning00 | merged | 2026-10-20 | 2026-10-27 |
| [#817](https://github.com/ROCm/mori/pull/817) | build(flydsl): upgrade FlyDSL to 0.4.0 | @jhchouuu | merged | 2026-10-20 | 2026-10-27 |
| [#847](https://github.com/ROCm/mori/pull/847) | fix(ci): base the nightly version on the numeric part of the... | @jhchouuu | merged | 2026-10-27 | 2026-10-27 |
| [#831](https://github.com/ROCm/mori/pull/831) | fix(io): replace a failed RDMA QP instead of failing every l... | @isytwu | merged | 2026-10-22 | 2026-10-27 |
| [#819](https://github.com/ROCm/mori/pull/819) | fix(cco): never fill the SDMA ring completely | @jhchouuu | merged | 2026-10-20 | 2026-10-27 |
| [#736](https://github.com/ROCm/mori/pull/736) | feat(ep/v1): opt-in MORI_EP_DISABLE_RDMA_ATOMICS for InterNo... | @amirakb89 | merged | 2026-10-10 | 2026-10-26 |
| [#840](https://github.com/ROCm/mori/pull/840) | fix(umbp): turn off the MORI IO notifications UMBP never rea... | @isytwu | merged | 2026-10-26 | 2026-10-26 |
| [#834](https://github.com/ROCm/mori/pull/834) | ci: let a dispatch run the UMBP hicache smoke test | @isytwu | merged | 2026-10-23 | 2026-10-26 |
| [#798](https://github.com/ROCm/mori/pull/798) | example(cco): cco-sdma all-gather with start/wait (async mod... | @kawhil-amd | merged | 2026-10-18 | 2026-10-26 |
| [#832](https://github.com/ROCm/mori/pull/832) | perf(umbp): raise the default DRAM eviction band to 0.95/0.9 | @isytwu | merged | 2026-10-22 | 2026-10-26 |
| [#838](https://github.com/ROCm/mori/pull/838) | perf(umbp): free SSD extent staging when its hold drops; nex... | @TianDi101 | merged | 2026-10-23 | 2026-10-24 |
| [#830](https://github.com/ROCm/mori/pull/830) | umbp: hugepage-backed ranged scratch arenas | @TianDi101 | merged | 2026-10-22 | 2026-10-23 |
| [#821](https://github.com/ROCm/mori/pull/821) | rdma: name likely causes in fatal MR registration errors; do... | @TianDi101 | merged | 2026-10-21 | 2026-10-23 |
| [#820](https://github.com/ROCm/mori/pull/820) | fix(umbp): a remote put of a key another writer holds counts... | @TianDi101 | merged | 2026-10-21 | 2026-10-23 |
| [#822](https://github.com/ROCm/mori/pull/822) | fix(umbp): count puts a full SSD staging arena refuses, and ... | @TianDi101 | merged | 2026-10-21 | 2026-10-23 |
| [#837](https://github.com/ROCm/mori/pull/837) | feat(umbp): count the bytes tier moves read and write per me... | @TianDi101 | merged | 2026-10-23 | 2026-10-23 |
| [#801](https://github.com/ROCm/mori/pull/801) | perf(ep/asyncll): fuse put-signal and drop drains | @JiaweiHawk | merged | 2026-10-19 | 2026-10-23 |
| [#803](https://github.com/ROCm/mori/pull/803) | Fix/xgmi ipc handle device ordinal | @tjtanaa | merged | 2026-10-19 | 2026-10-23 |
| [#835](https://github.com/ROCm/mori/pull/835) | fix(umbp): resolve bytes count the reader's slice, not the w... | @TianDi101 | merged | 2026-10-23 | 2026-10-23 |
| [#828](https://github.com/ROCm/mori/pull/828) | add umbp blog | @billishyahao | merged | 2026-10-22 | 2026-10-22 |
| [#808](https://github.com/ROCm/mori/pull/808) | fix(umbp): count SSD keys without snapshotting them | @TianDi101 | merged | 2026-10-19 | 2026-10-21 |
| [#804](https://github.com/ROCm/mori/pull/804) | fix(umbp): commit to the backend outside the pool lock | @TianDi101 | merged | 2026-10-19 | 2026-10-21 |
| [#788](https://github.com/ROCm/mori/pull/788) | fix(umbp): an SSD Clear keeps the staging spans local reader... | @TianDi101 | merged | 2026-10-16 | 2026-10-20 |
| [#813](https://github.com/ROCm/mori/pull/813) | fix(topology): load GPU topology one comm at a time | @jhchouuu | merged | 2026-10-20 | 2026-10-20 |
| [#781](https://github.com/ROCm/mori/pull/781) | feat(umbp): a local ranged GET off SSD reads only its extent | @TianDi101 | merged | 2026-10-16 | 2026-10-20 |
| [#792](https://github.com/ROCm/mori/pull/792) | feat(cco): expose ccoSdma's full put/get API to FlyDSL and T... | @jhchouuu | merged | 2026-10-16 | 2026-10-20 |
| [#812](https://github.com/ROCm/mori/pull/812) | feat(cco): put2d/get2d on gfx1250 via the gfx12 rect packet | @jhchouuu | merged | 2026-10-20 | 2026-10-20 |
| [#785](https://github.com/ROCm/mori/pull/785) | fix(gemm-ar): drain the peeled tail's producers instead of t... | @yangyuhuiling | merged | 2026-10-16 | 2026-10-20 |
| [#649](https://github.com/ROCm/mori/pull/649) | feat(rdma): register Ionic CQ/SQ/RQ rings and atomic ibuf vi... | @amirakb89 | merged | 2026-09-08 | 2026-10-20 |
| [#799](https://github.com/ROCm/mori/pull/799) | fix(umbp): pool the gather streams so the standalone server ... | @isytwu | merged | 2026-10-19 | 2026-10-19 |
| [#800](https://github.com/ROCm/mori/pull/800) | fix(umbp): create the standalone server's HIP queues before ... | @isytwu | merged | 2026-10-19 | 2026-10-19 |
| [#733](https://github.com/ROCm/mori/pull/733) | fix(EPv2): give routing handles their own buffers on request... | @jeffdaily | merged | 2026-10-09 | 2026-10-19 |
| [#776](https://github.com/ROCm/mori/pull/776) | feat(umbp): SSD demote/promote skip staging; promoting reads... | @TianDi101 | merged | 2026-10-15 | 2026-10-16 |
| [#793](https://github.com/ROCm/mori/pull/793) | fix(umbp): an in-place SSD read counts as an access | @TianDi101 | merged | 2026-10-16 | 2026-10-16 |
| [#790](https://github.com/ROCm/mori/pull/790) | fix(umbp): port test_peer_pool's FailingEngine to CreatePlan... | @TianDi101 | merged | 2026-10-16 | 2026-10-16 |
| [#784](https://github.com/ROCm/mori/pull/784) | fix(umbp): an in-place SSD read counts as an access | @TianDi101 | merged | 2026-10-16 | 2026-10-16 |
| [#775](https://github.com/ROCm/mori/pull/775) | fix(umbp): SSD tier gives disk back a segment at a time | @TianDi101 | merged | 2026-10-15 | 2026-10-16 |
| [#783](https://github.com/ROCm/mori/pull/783) | fix(umbp): a local eviction round no longer rescans its queu... | @TianDi101 | merged | 2026-10-16 | 2026-10-16 |
| [#762](https://github.com/ROCm/mori/pull/762) | fix(umbp): SSD staging no longer fails local loads; a local ... | @TianDi101 | merged | 2026-10-13 | 2026-10-16 |
| [#786](https://github.com/ROCm/mori/pull/786) | feat(cco): add cco_sdma_put_ptr_rsig__thread and  cco_sdma_s... | @binding7012 | merged | 2026-10-16 | 2026-10-16 |
| [#674](https://github.com/ROCm/mori/pull/674) | Add multi-NIC OFI/libfabric backend for Slingshot/CXI | @vinaynkaranth | merged | 2026-09-15 | 2026-10-16 |
| [#777](https://github.com/ROCm/mori/pull/777) | fix(umbp): stop false put-failure noise (sampled allocation ... | @TianDi101 | merged | 2026-10-15 | 2026-10-16 |
| [#782](https://github.com/ROCm/mori/pull/782) | docs(umbp): acknowledge hipFile in the GDS transfer engine | @TianDi101 | merged | 2026-10-16 | 2026-10-16 |
| [#763](https://github.com/ROCm/mori/pull/763) | fix(umbp): retry eviction demotions instead of dropping the ... | @TianDi101 | merged | 2026-10-13 | 2026-10-16 |
| [#778](https://github.com/ROCm/mori/pull/778) | chore(umbp): remove dead code, an orphaned test and duplicat... | @TianDi101 | merged | 2026-10-15 | 2026-10-16 |
| [#774](https://github.com/ROCm/mori/pull/774) | refactor(umbp): one incremental plan builder shared by every... | @TianDi101 | merged | 2026-10-15 | 2026-10-15 |
| [#683](https://github.com/ROCm/mori/pull/683) | feat(umbp): serve metrics from a masterless node, and summar... | @TianDi101 | merged | 2026-09-17 | 2026-10-15 |
| [#741](https://github.com/ROCm/mori/pull/741) | feat(umbp): converge eviction onto one path; nodes evict loc... | @TianDi101 | merged | 2026-10-10 | 2026-10-15 |
| [#769](https://github.com/ROCm/mori/pull/769) | fix(umbp): acknowledge local clear when no master is configu... | @tjtanaa | merged | 2026-10-14 | 2026-10-14 |
| [#758](https://github.com/ROCm/mori/pull/758) | perf(umbp): build transfer plans incrementally | @BadrBasowid | merged | 2026-10-13 | 2026-10-14 |
| [#766](https://github.com/ROCm/mori/pull/766) | fix(anvil): spread gfx1250 loopback over peer-link engines w... | @jhchouuu | merged | 2026-10-14 | 2026-10-14 |
| [#764](https://github.com/ROCm/mori/pull/764) | fix(EPv2): give a dispatch plan a default staging buffer its... | @jhchouuu | merged | 2026-10-13 | 2026-10-14 |
| [#751](https://github.com/ROCm/mori/pull/751) | fix(umbp): build UMBP's pybind as its own module so mori.ops... | @jhchouuu | merged | 2026-10-12 | 2026-10-13 |
| [#760](https://github.com/ROCm/mori/pull/760) | feat(umbp): peer-driven eviction with master-ranked victims ... | @TianDi101 | merged | 2026-10-13 | 2026-10-13 |
| [#711](https://github.com/ROCm/mori/pull/711) | fix(cco): two SDMA device-post deadlocks (multi-queue publis... | @yoqiu-amd | merged | 2026-09-24 | 2026-10-13 |
| [#724](https://github.com/ROCm/mori/pull/724) | build(topology): read PCI topology from sysfs and drop the l... | @pemeliya | merged | 2026-10-07 | 2026-10-13 |
| [#761](https://github.com/ROCm/mori/pull/761) | fix(cco): clear HIP last-error after a failed fabric handle ... | @kawhil-amd | merged | 2026-10-13 | 2026-10-13 |
| [#718](https://github.com/ROCm/mori/pull/718) | perf(umbp): prefault unbound DRAM tiers in parallel across N... | @isytwu | merged | 2026-09-30 | 2026-10-13 |
| [#754](https://github.com/ROCm/mori/pull/754) | fix(umbp): SSD tier no longer runs out of fds or misreports ... | @TianDi101 | merged | 2026-10-12 | 2026-10-13 |
| [#756](https://github.com/ROCm/mori/pull/756) | fix(umbp): keep the standalone server serving when its GPU-r... | @isytwu | merged | 2026-10-12 | 2026-10-13 |
| [#583](https://github.com/ROCm/mori/pull/583) | MORI IO improvements 2nd try | @pemeliya | merged | 2026-08-19 | 2026-10-12 |
| [#623](https://github.com/ROCm/mori/pull/623) | fix(sdma): key SDMA queues on KFD node id instead of HIP dev... | @pemeliya | merged | 2026-08-31 | 2026-10-12 |
| [#703](https://github.com/ROCm/mori/pull/703) | refactor(EPv2): replace per-module __device__ staging with s... | @kawhil-amd | merged | 2026-09-23 | 2026-10-12 |
| [#737](https://github.com/ROCm/mori/pull/737) | perf(EPv2/gfx1250): retune EP4 topk-9 fp4 combine; un-shadow... | @jhchouuu | merged | 2026-10-10 | 2026-10-12 |
| [#744](https://github.com/ROCm/mori/pull/744) | ci: skip the ci-rerun label on fork PRs; use /ci-rerun there | @jhchouuu | merged | 2026-10-11 | 2026-10-12 |
| [#731](https://github.com/ROCm/mori/pull/731) | feat(io): verbs seam + compile-time fault injector for MORI-... | @TianDi101 | merged | 2026-10-09 | 2026-10-12 |
| [#746](https://github.com/ROCm/mori/pull/746) | EPv2 gfx1250 dispatch: aggReserve state as a module __device... | @zhangfei829 | merged | 2026-10-12 | 2026-10-12 |
| [#735](https://github.com/ROCm/mori/pull/735) | chore(EPv2): drop redundant total_recv.zero_() on gfx1250 in... | @kawhil-amd | merged | 2026-10-10 | 2026-10-12 |
| [#745](https://github.com/ROCm/mori/pull/745) | Perf/epv2 1250x ep8 | @zhangfei829 | merged | 2026-10-11 | 2026-10-11 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-10-29T14:44:14Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-10-29 |
| [#1238](https://github.com/ROCm/FlyDSL/pull/1238) | Migrate kernels tiled tdm | @xudoyuan | open | 2026-10-08 | 2026-10-29 |
| [#1348](https://github.com/ROCm/FlyDSL/pull/1348) | [Refactor] Organize GLM mono-kernel stages and shared tools | @james-huang09 | open | 2026-10-29 | 2026-10-29 |
| [#1347](https://github.com/ROCm/FlyDSL/pull/1347) | [Feat] Support DslType protocol for Storage[T] | @sjfeng1999 | open | 2026-10-29 | 2026-10-29 |
| [#1336](https://github.com/ROCm/FlyDSL/pull/1336) | [DSL][Perf] Remove KTRACE's shared cursor and per-event atom... | @zhiding512 | open | 2026-10-27 | 2026-10-29 |
| [#1313](https://github.com/ROCm/FlyDSL/pull/1313) | [Core] Replace the Fly layout implementation with the Core l... | @sjfeng1999 | open | 2026-10-20 | 2026-10-29 |
| [#1346](https://github.com/ROCm/FlyDSL/pull/1346) | [Kernel] Merge-back gfx950 two-stage MegaMoEV2 (A8W4/A4W4) f... | @Yaowu-Xiong | open | 2026-10-29 | 2026-10-29 |
| [#1343](https://github.com/ROCm/FlyDSL/pull/1343) | [Bugfix] Keep every frame of an op's call chain in debug inf... | @hanli0612 | open | 2026-10-28 | 2026-10-29 |
| [#1288](https://github.com/ROCm/FlyDSL/pull/1288) | [Feat] Support warp exchange with layout | @ppppqp | open | 2026-10-14 | 2026-10-29 |
| [#1340](https://github.com/ROCm/FlyDSL/pull/1340) | [WIP][feat] support gpu asan feature  | @jli-melchior | open | 2026-10-28 | 2026-10-29 |
| [#1216](https://github.com/ROCm/FlyDSL/pull/1216) | [Kernel] Add dense Flash Attention for gfx1100 | @vlluvia | open | 2026-09-30 | 2026-10-28 |
| [#1295](https://github.com/ROCm/FlyDSL/pull/1295) | [Debug] Support device assert | @ppppqp | open | 2026-10-14 | 2026-10-28 |
| [#1332](https://github.com/ROCm/FlyDSL/pull/1332) | [Bugfix] Fix ROCm GPU counting and architecture fallback | @Qubitium | open | 2026-10-26 | 2026-10-28 |
| [#1272](https://github.com/ROCm/FlyDSL/pull/1272) | [Benchmark] fix rdna gemm benchmark option | @ppppqp | open | 2026-10-11 | 2026-10-28 |
| [#1318](https://github.com/ROCm/FlyDSL/pull/1318) | [Build] Add xnack-any codegen override patch for gfx1250 | @jli-melchior | open | 2026-10-21 | 2026-10-28 |
| [#1338](https://github.com/ROCm/FlyDSL/pull/1338) | [JIT] Key compiled artifacts by the traced MLIR | @sjfeng1999 | open | 2026-10-27 | 2026-10-28 |
| [#1329](https://github.com/ROCm/FlyDSL/pull/1329) | [AOT] Add a versioned export manifest | @XiaobingSuper | draft | 2026-10-26 | 2026-10-26 |
| [#1325](https://github.com/ROCm/FlyDSL/pull/1325) | [JIT] Assert a single ROCDL target source; test the wave32 o... | @Phil-amd | draft | 2026-10-26 | 2026-10-26 |
| [#1326](https://github.com/ROCm/FlyDSL/pull/1326) | [JIT] flyc.compile[hints] no longer leaves its hints on the ... | @Phil-amd | draft | 2026-10-26 | 2026-10-26 |
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-10-22 |
| [#1277](https://github.com/ROCm/FlyDSL/pull/1277) | [Test] Cover the FlyDSL kernels vLLM depends on | @zhiding512 | open | 2026-10-12 | 2026-10-21 |
| [#1316](https://github.com/ROCm/FlyDSL/pull/1316) | [Kernel][Refactor] Extract shared softmax row-copy helpers | @ppppqp | draft | 2026-10-21 | 2026-10-21 |
| [#1319](https://github.com/ROCm/FlyDSL/pull/1319) | [Build] Switch to ROCm xnack_test branch for LLVM | @jli-melchior | open | 2026-10-21 | 2026-10-21 |
| [#1210](https://github.com/ROCm/FlyDSL/pull/1210) | [CI] Run full cooperative matrix before PyPI releases | @coderfeli | draft | 2026-09-28 | 2026-10-21 |
| [#1227](https://github.com/ROCm/FlyDSL/pull/1227) | [Kernel][Perf] Tune RMSNorm for gfx1250: BF16 hardware conve... | @jhinpan | open | 2026-10-06 | 2026-10-20 |
| [#1307](https://github.com/ROCm/FlyDSL/pull/1307) | [compiler] add schedule bank and vgpr/agpr/sgpr based flydsl... | @jli-melchior | open | 2026-10-19 | 2026-10-19 |
| [#1246](https://github.com/ROCm/FlyDSL/pull/1246) | [Kernel][FA] Add arch-neutral attention common, abi, philox ... | @xinyazhang | draft | 2026-10-09 | 2026-10-18 |
| [#1296](https://github.com/ROCm/FlyDSL/pull/1296) | [compiler] support schedule_bank/vgpr/apgr/sgpr | @jli-melchior | open | 2026-10-15 | 2026-10-18 |
| [#1245](https://github.com/ROCm/FlyDSL/pull/1245) | [Kernel][FA] Fix ds_read_tr waitcnt hazard and stagger SCC c... | @xinyazhang | open | 2026-10-09 | 2026-10-18 |
| [#1289](https://github.com/ROCm/FlyDSL/pull/1289) | [llvm] Bump LLVM hash and add gfx1250-strict support | @jli-melchior | open | 2026-10-14 | 2026-10-17 |
| [#1303](https://github.com/ROCm/FlyDSL/pull/1303) | [Kernel] rdna3 GEMM: serve any M and any N, down to a 16x16 ... | @vlluvia | draft | 2026-10-16 | 2026-10-16 |
| [#1264](https://github.com/ROCm/FlyDSL/pull/1264) | [Bugfix][gfx1250] Reject FP8 and A8W4 GEMM tiles that issue ... | @jhinpan | open | 2026-10-11 | 2026-10-16 |
| [#1223](https://github.com/ROCm/FlyDSL/pull/1223) | [Kernel][Feature][Dialect][DSL][Perf][Doc][Test] Add gfx120x... | @dimitri91209 | draft | 2026-10-01 | 2026-10-15 |
| [#1276](https://github.com/ROCm/FlyDSL/pull/1276) | [compiler] pin register use reservedregs method | @jli-melchior | open | 2026-10-12 | 2026-10-15 |
| [#1240](https://github.com/ROCm/FlyDSL/pull/1240) | [Bugfix] Shared numerics, streams, and tests | @dimitri91209 | open | 2026-10-09 | 2026-10-14 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1193](https://github.com/ROCm/FlyDSL/pull/1193) | [LayoutLowering] Ignore size-one leaves in contiguous-segmen... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1253](https://github.com/ROCm/FlyDSL/pull/1253) | [Bugfix][Test] Round MXFP8 E8M0 scales up in the test quanti... | @jhinpan | open | 2026-10-09 | 2026-10-13 |
| [#1280](https://github.com/ROCm/FlyDSL/pull/1280) | [Doc] Add MI355 mono-kernel development skills | @james-huang09 | draft | 2026-10-13 | 2026-10-13 |
| [#1267](https://github.com/ROCm/FlyDSL/pull/1267) | [Runtime] Report GPU last-level cache size from KFD | @qiangpan2 | open | 2026-10-11 | 2026-10-13 |
| [#1282](https://github.com/ROCm/FlyDSL/pull/1282) | [Kernel][Attention] Add SageAttention2 gfx120 dense prefill | @qiangpan2 | draft | 2026-10-13 | 2026-10-13 |
| [#1274](https://github.com/ROCm/FlyDSL/pull/1274) | [opt] add schedule bank api and wait alu optimization | @jli-melchior | open | 2026-10-12 | 2026-10-12 |
| [#1252](https://github.com/ROCm/FlyDSL/pull/1252) | [Kernel][FA] Document the gfx950 attention kernels and the 8... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1251](https://github.com/ROCm/FlyDSL/pull/1251) | [Kernel][FA] Route flydsl_flash_attn_func to the new gfx950 ... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1250](https://github.com/ROCm/FlyDSL/pull/1250) | [Kernel][FA] Add gfx950 attention backward (dQ and dK/dV) po... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1249](https://github.com/ROCm/FlyDSL/pull/1249) | [Kernel][FA] Port gfx950 attention ALiBi, sink, paged KV, sp... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1248](https://github.com/ROCm/FlyDSL/pull/1248) | [Kernel][FA] Add the gfx950 attention forward kernel (dual-w... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1247](https://github.com/ROCm/FlyDSL/pull/1247) | [Kernel][FA] Add gfx950 attention metadata, knobs and traits... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1244](https://github.com/ROCm/FlyDSL/pull/1244) | [Doc] Add GLM and Kimi-K3 mono-kernel performance reports | @james-huang09 | draft | 2026-10-09 | 2026-10-09 |
| [#1234](https://github.com/ROCm/FlyDSL/pull/1234) | [Kernel]feat(dsv4): add the DeepSeek-V4 decode MonoKernel | @amd-weisun | open | 2026-10-07 | 2026-10-09 |
| [#1239](https://github.com/ROCm/FlyDSL/pull/1239) | [Windows] Add native ROCm JIT support | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-08 |
| [#1222](https://github.com/ROCm/FlyDSL/pull/1222) | [Build][JIT] Support core-only ROCm SDK environments | @apinge | open | 2026-10-01 | 2026-10-08 |
| [#1225](https://github.com/ROCm/FlyDSL/pull/1225) | [compiler][opt] schedule bank based on a verified llvm versi... | @jli-melchior | open | 2026-10-02 | 2026-10-02 |
| [#1221](https://github.com/ROCm/FlyDSL/pull/1221) | [dont merge] compare latest base main llvm | @jli-melchior | open | 2026-10-01 | 2026-10-01 |
| [#1215](https://github.com/ROCm/FlyDSL/pull/1215) | [compiler][opt] add schedule_bank api for gfx1250 | @jli-melchior | open | 2026-09-30 | 2026-10-01 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [Feat] Fix `lld invocation failed` when ROCm is not at the b... | @jli-melchior | open | 2026-08-08 | 2026-09-30 |
| [#1179](https://github.com/ROCm/FlyDSL/pull/1179) | [Enh] Accept LLVM pointer types in ffi declarations | @LWenH | open | 2026-09-22 | 2026-10-10 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-09-28 |
| [#1139](https://github.com/ROCm/FlyDSL/pull/1139) | [Kernel][Perf] Align gfx950 BF16 D128 attention with OPUS | @coderfeli | open | 2026-09-15 | 2026-09-28 |
| [#1113](https://github.com/ROCm/FlyDSL/pull/1113) | [Bugfix][Kernel] Fix fused RoPE for head dimension 96 | @tangzzycc | open | 2026-09-09 | 2026-09-28 |
| [#1191](https://github.com/ROCm/FlyDSL/pull/1191) | [Fix][Expr] Honor allocate(..., alignment=) for static share... | @xudoyuan | draft | 2026-09-24 | 2026-09-24 |
| [#1166](https://github.com/ROCm/FlyDSL/pull/1166) | [dont merge][llvm] cherry commits for unclausevmem patch | @jli-melchior | open | 2026-09-18 | 2026-09-18 |
| [#1145](https://github.com/ROCm/FlyDSL/pull/1145) | [LLVM] bump llvm which improve the sequence for initial uncl... | @jli-melchior | open | 2026-09-16 | 2026-09-18 |
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
| [#1111](https://github.com/ROCm/FlyDSL/pull/1111) | [DO NOT MERGE] Add MegaMoE engineering skill | @GwilliamHu | draft | 2026-09-09 | 2026-09-09 |
| [#1108](https://github.com/ROCm/FlyDSL/pull/1108) | [Bugfix][Benchmark] Fix compiler API usage in Softmax and RM... | @tangzzycc | open | 2026-09-09 | 2026-09-09 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-09-05 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-08-28 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-10-28 |
| [#1045](https://github.com/ROCm/FlyDSL/pull/1045) | [Bugfix] Refuse a batch entry the buffer descriptor cannot a... | @JohnQin-llm | open | 2026-08-20 | 2026-08-24 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-08-18 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-08-05 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-07-24 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-07-23 |
| [#1342](https://github.com/ROCm/FlyDSL/pull/1342) | [CI] Run correctness and benchmark comparisons in separate j... | @coderfeli | merged | 2026-10-28 | 2026-10-29 |
| [#1294](https://github.com/ROCm/FlyDSL/pull/1294) | [Bugfix] Handle Numeric conversion recursively | @ppppqp | merged | 2026-10-14 | 2026-10-28 |
| [#1341](https://github.com/ROCm/FlyDSL/pull/1341) | [Fix] Make FLYDSL_DEBUG_DUMP_ASM dump the final ISA | @sjfeng1999 | merged | 2026-10-28 | 2026-10-28 |
| [#1256](https://github.com/ROCm/FlyDSL/pull/1256) | [Perf] Share GLM TP4/TP8 indexed decode and add native FP4 i... | @coderfeli | merged | 2026-10-10 | 2026-10-28 |
| [#1309](https://github.com/ROCm/FlyDSL/pull/1309) | [ROCDL] Put the contiguous mode's filler dim at the front | @xudoyuan | merged | 2026-10-19 | 2026-10-28 |
| [#1337](https://github.com/ROCm/FlyDSL/pull/1337) | [Bugfix] Show the user's source line in DSL compile errors | @RElbers | merged | 2026-10-27 | 2026-10-28 |
| [#1321](https://github.com/ROCm/FlyDSL/pull/1321) | [Fix] Don't retain the last tensor in layout-dynamic DLPack ... | @josh-schell-amd | merged | 2026-10-23 | 2026-10-28 |
| [#1269](https://github.com/ROCm/FlyDSL/pull/1269) | [Bugfix] Sync both wave groups before the gfx950 A16W16 HTI ... | @jhinpan | merged | 2026-10-11 | 2026-10-27 |
| [#1328](https://github.com/ROCm/FlyDSL/pull/1328) | [FIX] Building from source can produce bindings for the wron... | @Qubitium | merged | 2026-10-26 | 2026-10-27 |
| [#1330](https://github.com/ROCm/FlyDSL/pull/1330) | [Kernel]mega_moe_tp: unified path and big-M optimizations | @binding7012 | merged | 2026-10-26 | 2026-10-27 |
| [#1333](https://github.com/ROCm/FlyDSL/pull/1333) | [Bugfix][Dialect] Don't drop range(..., unroll=N) hints in f... | @RElbers | merged | 2026-10-26 | 2026-10-27 |
| [#1327](https://github.com/ROCm/FlyDSL/pull/1327) | [LLVM] Roll back to 941a04e and cherry-pick unclaused VMEM p... | @jli-melchior | merged | 2026-10-26 | 2026-10-26 |
| [#1314](https://github.com/ROCm/FlyDSL/pull/1314) | [Ext][Coop] Add more block-level primitives | @sjfeng1999 | merged | 2026-10-20 | 2026-10-26 |
| [#1322](https://github.com/ROCm/FlyDSL/pull/1322) | `kernel-trace-analysis`: fix SKILL.md nits so the evals pass | @danielholanda | merged | 2026-10-23 | 2026-10-25 |
| [#1317](https://github.com/ROCm/FlyDSL/pull/1317) | [Skills] review-pr: strip the API key and show why model cal... | @jhinpan | merged | 2026-10-21 | 2026-10-21 |
| [#1308](https://github.com/ROCm/FlyDSL/pull/1308) | [compiler] [llvm] xnack perf | @jli-melchior | merged | 2026-10-19 | 2026-10-21 |
| [#1311](https://github.com/ROCm/FlyDSL/pull/1311) | [Skills] review-pr: review a PR when a maintainer adds the a... | @jhinpan | merged | 2026-10-20 | 2026-10-21 |
| [#1315](https://github.com/ROCm/FlyDSL/pull/1315) | [Kernel] Replace raw memory glue and manual reductions with ... | @coderfeli | merged | 2026-10-20 | 2026-10-20 |
| [#1262](https://github.com/ROCm/FlyDSL/pull/1262) | [Kernel] Remove redundant scalar, vector, and IR wrappers | @coderfeli | merged | 2026-10-10 | 2026-10-20 |
| [#1185](https://github.com/ROCm/FlyDSL/pull/1185) | fix(coop): preserve declared operator element types | @sjfeng1999 | merged | 2026-09-23 | 2026-10-20 |
| [#1266](https://github.com/ROCm/FlyDSL/pull/1266) | [Dialect][ROCDL] Add gfx120 integer WMMA and an INT4 GEMM | @qiangpan2 | merged | 2026-10-11 | 2026-10-20 |
| [#1306](https://github.com/ROCm/FlyDSL/pull/1306) | 1,Balance the prologue's extra wave_m == 1 barrier so both g... | @solinzby1 | merged | 2026-10-19 | 2026-10-20 |
| [#1312](https://github.com/ROCm/FlyDSL/pull/1312) | [Release] Bump version to 0.4.1 | @jli-melchior | merged | 2026-10-20 | 2026-10-20 |
| [#1310](https://github.com/ROCm/FlyDSL/pull/1310) | [Kernel] Reuse typed APIs in GLM and Kimi-K3 monokernels | @coderfeli | merged | 2026-10-19 | 2026-10-20 |
| [#1287](https://github.com/ROCm/FlyDSL/pull/1287) | [CI] Fix the SGLang nightly setup after sgl-kernel moved int... | @jhinpan | merged | 2026-10-13 | 2026-10-19 |
| [#1292](https://github.com/ROCm/FlyDSL/pull/1292) | [Core] Add four concrete layout categories | @sjfeng1999 | merged | 2026-10-14 | 2026-10-19 |
| [#971](https://github.com/ROCm/FlyDSL/pull/971) | [gfx1250] Add A8W8/A8W4/A4W4 compute-bound GEMM | @aoli26 | merged | 2026-08-06 | 2026-10-19 |
| [#1290](https://github.com/ROCm/FlyDSL/pull/1290) | [Fix] Bitcast small floats across converted ops in convert-f... | @Phil-amd | merged | 2026-10-14 | 2026-10-19 |
| [#1217](https://github.com/ROCm/FlyDSL/pull/1217) | Align bf16 implicit Conv3d with aiter | @huizzhan | merged | 2026-09-30 | 2026-10-19 |
| [#1243](https://github.com/ROCm/FlyDSL/pull/1243) | [llvm] bump llvm to 1df311a6 | @jli-melchior | merged | 2026-10-09 | 2026-10-19 |
| [#1304](https://github.com/ROCm/FlyDSL/pull/1304) | [Skills] Add evals and skill cards for kernel authoring and ... | @danielholanda | merged | 2026-10-16 | 2026-10-18 |
| [#1305](https://github.com/ROCm/FlyDSL/pull/1305) | [Skills] Ensure `flydsl-kernel-authoring` follows Anthropic ... | @danielholanda | merged | 2026-10-16 | 2026-10-18 |
| [#1302](https://github.com/ROCm/FlyDSL/pull/1302) | [ROCDL] Gate the TDM tile_dim0 span check on padding | @xudoyuan | merged | 2026-10-16 | 2026-10-18 |
| [#1300](https://github.com/ROCm/FlyDSL/pull/1300) | [fix][CI] Run aiter's install_triton.sh to match aiter's Tri... | @jli-melchior | merged | 2026-10-16 | 2026-10-16 |
| [#1188](https://github.com/ROCm/FlyDSL/pull/1188) | [Tool][Debug] Inject hand-edited assembly into a JIT cache e... | @Phil-amd | merged | 2026-09-24 | 2026-10-15 |
| [#1184](https://github.com/ROCm/FlyDSL/pull/1184) | [fix] Support waves_per_eu min,max range for full VGPR utili... | @jli-melchior | merged | 2026-09-23 | 2026-10-15 |
| [#1284](https://github.com/ROCm/FlyDSL/pull/1284) | [fix] Make make_tile treat every argument list as modes | @xudoyuan | merged | 2026-10-13 | 2026-10-14 |
| [#1230](https://github.com/ROCm/FlyDSL/pull/1230) | [Kernel][gfx1250] Support K tails in the BF16 GEMM | @jhinpan | merged | 2026-10-06 | 2026-10-14 |
| [#1279](https://github.com/ROCm/FlyDSL/pull/1279) | [Skills] Add review-pr: advisory PR review adapted from aite... | @jhinpan | merged | 2026-10-12 | 2026-10-14 |
| [#1278](https://github.com/ROCm/FlyDSL/pull/1278) | [Bugfix][JIT] Restore compile launches and defer C export pr... | @coderfeli | merged | 2026-10-12 | 2026-10-13 |
| [#1283](https://github.com/ROCm/FlyDSL/pull/1283) | [Bugfix][JIT] Defer C export preparation until export_to_c | @coderfeli | merged | 2026-10-13 | 2026-10-13 |
| [#1275](https://github.com/ROCm/FlyDSL/pull/1275) | support scale nonshuffle | @solinzby1 | merged | 2026-10-12 | 2026-10-12 |
| [#1268](https://github.com/ROCm/FlyDSL/pull/1268) | [DSL][Runtime] Add ktrace capture with target providers | @coderfeli | merged | 2026-10-11 | 2026-10-12 |
| [#1190](https://github.com/ROCm/FlyDSL/pull/1190) | [llvm] Add support for custom LLVM extensions | @Phil-amd | merged | 2026-09-24 | 2026-10-12 |
| [#1258](https://github.com/ROCm/FlyDSL/pull/1258) | [fix] Build the zipped_divide guide from the tiler shape | @xudoyuan | merged | 2026-10-10 | 2026-10-12 |
| [#1261](https://github.com/ROCm/FlyDSL/pull/1261) | [DSL] Expose scalar buffer load API | @coderfeli | merged | 2026-10-10 | 2026-10-12 |
| [#1259](https://github.com/ROCm/FlyDSL/pull/1259) | [Enh] Add CompiledFunction.max_blocks_per_cu() | @akii96 | merged | 2026-10-10 | 2026-10-10 |
| [#1260](https://github.com/ROCm/FlyDSL/pull/1260) | [DSL] Add a category independent cute algebra framework | @sjfeng1999 | merged | 2026-10-10 | 2026-10-10 |
| [#1255](https://github.com/ROCm/FlyDSL/pull/1255) | [Kernel]add mega moe tp kernel for gfx950 | @binding7012 | merged | 2026-10-10 | 2026-10-10 |
| [#1241](https://github.com/ROCm/FlyDSL/pull/1241) | [Perf] Tile GLM MXFP4 scales and pair gate/up rows | @james-huang09 | merged | 2026-10-09 | 2026-10-09 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | merged | 2026-07-14 | 2026-10-09 |
| [#1220](https://github.com/ROCm/FlyDSL/pull/1220) | [Bugfix][Test] Fix atomic_fmin/fmax Out left at +inf on side... | @dimitri91209 | merged | 2026-10-01 | 2026-10-08 |
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

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-10-29T14:44:18Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-10-29 |
| [#771](https://github.com/ROCm/TransformerEngine/pull/771) | Ifu dev 20261019 v2.21 | @VeeraRajasekhar | open | 2026-10-20 | 2026-10-28 |
| [#778](https://github.com/ROCm/TransformerEngine/pull/778) | [gfx1250] Use TDM for MXFP8 and FP8 quantization | @matthiasdiener | draft | 2026-10-22 | 2026-10-28 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | open | 2026-08-31 | 2026-10-28 |
| [#781](https://github.com/ROCm/TransformerEngine/pull/781) | Support gfx1250-strict | @ipanfilo | open | 2026-10-27 | 2026-10-28 |
| [#760](https://github.com/ROCm/TransformerEngine/pull/760) | Release 2.20.2 | @Micky774 | open | 2026-10-15 | 2026-10-28 |
| [#782](https://github.com/ROCm/TransformerEngine/pull/782) | Initial removal of AITER prebuilt mechanism | @Micky774 | open | 2026-10-28 | 2026-10-28 |
| [#745](https://github.com/ROCm/TransformerEngine/pull/745) | extend MXFP4 recipe to GroupedLinear and a8w4 (Triton groupe... | @matthiasdiener | open | 2026-09-28 | 2026-10-28 |
| [#746](https://github.com/ROCm/TransformerEngine/pull/746) | FlyDSL persistent work-stealing grouped GEMM enablement (gfx... | @aris134 | open | 2026-09-29 | 2026-10-28 |
| [#766](https://github.com/ROCm/TransformerEngine/pull/766) | gfx1250: use hipblaslt device alpha for NVFP4 GEMM | @matthiasdiener | open | 2026-10-16 | 2026-10-27 |
| [#755](https://github.com/ROCm/TransformerEngine/pull/755) | [TE] CK fused attention: return max_logit | @AllenFarcas | open | 2026-10-07 | 2026-10-27 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-10-27 |
| [#780](https://github.com/ROCm/TransformerEngine/pull/780) | Enforce using of source CI image | @ipanfilo | draft | 2026-10-24 | 2026-10-24 |
| [#776](https://github.com/ROCm/TransformerEngine/pull/776) | fix examples, wire them into CI summary, fix dispatch when m... | @matthiasdiener | draft | 2026-10-21 | 2026-10-23 |
| [#770](https://github.com/ROCm/TransformerEngine/pull/770) | Dynamic WS sizing | @matthiasdiener | draft | 2026-10-20 | 2026-10-23 |
| [#777](https://github.com/ROCm/TransformerEngine/pull/777) | XCD work stealing improvements for HK Grouped GEMMs | @alextmagro | open | 2026-10-22 | 2026-10-22 |
| [#772](https://github.com/ROCm/TransformerEngine/pull/772) | split-K and LDS offset buffer for HipKittens GEMMs | @alextmagro | open | 2026-10-20 | 2026-10-22 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Integration of AITER a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-10-22 |
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-10-22 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-10-20 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-10-20 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-10-20 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-10-20 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-10-20 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | Performance dashboard | @matthiasdiener | open | 2026-07-14 | 2026-10-20 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-10-20 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-10-20 |
| [#642](https://github.com/ROCm/TransformerEngine/pull/642) | Relax MXFP8 GEMM K constraint from multiple-of-128 to multip... | @JohnQin-llm | open | 2026-06-19 | 2026-10-20 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-10-20 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-10-20 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-10-20 |
| [#622](https://github.com/ROCm/TransformerEngine/pull/622) | [CI] Add resilience to artifacts fetch | @leo-automation | open | 2026-06-09 | 2026-10-20 |
| [#620](https://github.com/ROCm/TransformerEngine/pull/620) | [FEAT] Microbenchmark add visualization | @Micky774 | open | 2026-06-08 | 2026-10-20 |
| [#614](https://github.com/ROCm/TransformerEngine/pull/614) | Incorporate statistical significance testing to benchmarks | @Micky774 | open | 2026-06-08 | 2026-10-20 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-10-20 |
| [#590](https://github.com/ROCm/TransformerEngine/pull/590) | add production GEMM tests | @matthiasdiener | open | 2026-05-19 | 2026-10-20 |
| [#581](https://github.com/ROCm/TransformerEngine/pull/581) | Add Tealite: pure-Python TransformerEngine for ROCm/AMD GPUs | @jayfurmanek | open | 2026-05-07 | 2026-10-20 |
| [#573](https://github.com/ROCm/TransformerEngine/pull/573) | [ROCm] Allow bf16/bf16/fp32 in nvte_multi_tensor_gemm dispat... | @lizamd | open | 2026-05-04 | 2026-10-20 |
| [#570](https://github.com/ROCm/TransformerEngine/pull/570) | [No Merge][No Review] testing aiter auto trigger on gh actio... | @VeeraRajasekhar | draft | 2026-05-01 | 2026-10-20 |
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-10-20 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-10-20 |
| [#543](https://github.com/ROCm/TransformerEngine/pull/543) | CI: auto-trigger AITER prebuilt upload when 3rdparty/aiter u... | @VeeraRajasekhar | open | 2026-04-15 | 2026-10-20 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-10-20 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-10-20 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-10-20 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-10-20 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-10-20 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-10-20 |
| [#705](https://github.com/ROCm/TransformerEngine/pull/705) | [proof-of-concept] Kernel autotuning in TE | @matthiasdiener | draft | 2026-08-18 | 2026-10-20 |
| [#759](https://github.com/ROCm/TransformerEngine/pull/759) | speed up multi-stream execution | @matthiasdiener | draft | 2026-10-13 | 2026-10-20 |
| [#762](https://github.com/ROCm/TransformerEngine/pull/762) | Ipanfilo/security scaning | @ipanfilo | draft | 2026-10-16 | 2026-10-16 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-10-16 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-10-16 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-10-16 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-10-16 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-10-16 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-10-16 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-10-16 |
| [#741](https://github.com/ROCm/TransformerEngine/pull/741) | Enable gfx950 FP8 HD128/256 fused-attn ASM forward from aite... | @yaomingamd | merged | 2026-09-23 | 2026-10-28 |
| [#773](https://github.com/ROCm/TransformerEngine/pull/773) | Upgrade CI to TheRock ROCm 10.1 | @AllenFarcas | merged | 2026-10-21 | 2026-10-23 |
| [#774](https://github.com/ROCm/TransformerEngine/pull/774) | Update to AITER Oct 17 | @ipanfilo | merged | 2026-10-21 | 2026-10-23 |
| [#754](https://github.com/ROCm/TransformerEngine/pull/754) | fix HipKittens grouped MXFP8 GEMM under CUDA graphs and enab... | @matthiasdiener | merged | 2026-10-06 | 2026-10-22 |
| [#734](https://github.com/ROCm/TransformerEngine/pull/734) | Persistent AG + GEMM MXFP8 Enablement | @aris134 | merged | 2026-09-09 | 2026-10-21 |
| [#757](https://github.com/ROCm/TransformerEngine/pull/757) | Revert "Disable async on distributed softmax test on 8x GPU ... | @matthiasdiener | merged | 2026-10-08 | 2026-10-20 |
| [#765](https://github.com/ROCm/TransformerEngine/pull/765) | [ROCm] CK-JIT: reinstall the CK and AITER headers on every b... | @AllenFarcas | merged | 2026-10-16 | 2026-10-20 |
| [#769](https://github.com/ROCm/TransformerEngine/pull/769) | Increase gfx950/gfx1250 workspace from 64 MiB to 128 MiB | @alextmagro | merged | 2026-10-20 | 2026-10-20 |
| [#768](https://github.com/ROCm/TransformerEngine/pull/768) | Fix hard coded e4m3 x e4m3 in HK grouped GEMM | @alextmagro | merged | 2026-10-19 | 2026-10-20 |
| [#767](https://github.com/ROCm/TransformerEngine/pull/767) | Fix gfx1250 build. Enable gfx1250 build as part of CI | @ipanfilo | merged | 2026-10-17 | 2026-10-19 |
| [#761](https://github.com/ROCm/TransformerEngine/pull/761) | Fix AMD copyright headers | @AllenFarcas | merged | 2026-10-15 | 2026-10-19 |
| [#744](https://github.com/ROCm/TransformerEngine/pull/744) | Replace the gfx950 blockwise FP8 running-scale accumulator | @wangye805 | merged | 2026-09-26 | 2026-10-19 |
| [#736](https://github.com/ROCm/TransformerEngine/pull/736) | Upgrade ci to therock 10.0 | @VeeraRajasekhar | merged | 2026-09-10 | 2026-10-16 |
| [#758](https://github.com/ROCm/TransformerEngine/pull/758) | Ifu release v2.19 linear | @matthiasdiener | merged | 2026-10-09 | 2026-10-15 |
| [#756](https://github.com/ROCm/TransformerEngine/pull/756) | IFU 2.20 | @Micky774 | merged | 2026-10-07 | 2026-10-15 |
| [#747](https://github.com/ROCm/TransformerEngine/pull/747) | Fix Triton norm MXFP4 | @matthiasdiener | merged | 2026-09-30 | 2026-10-08 |
| [#742](https://github.com/ROCm/TransformerEngine/pull/742) | [JAX] grouped GEMM interface fix | @shurale-nkn | merged | 2026-09-24 | 2026-10-08 |
| [#678](https://github.com/ROCm/TransformerEngine/pull/678) | [ROCm] Jax Add softmax sink (learnable off-by-one) support f... | @shurale-nkn | merged | 2026-07-24 | 2026-10-06 |
| [#753](https://github.com/ROCm/TransformerEngine/pull/753) | Remove dead upstream FA backend code left after merging | @ipanfilo | merged | 2026-10-02 | 2026-10-06 |
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
