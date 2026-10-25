# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-10-25T12:48:51Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#193168](https://github.com/pytorch/pytorch/pull/193168) | [FSDP] Stabilize fully_shard overlap timing test | @albmalamd | open | 2026-08-12 | 2026-10-25 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-10-25 |
| [#201774](https://github.com/pytorch/pytorch/pull/201774) | [inductor] Use TF32 in CUDA Triton conv templates when eager... | @shoumikhin | open | 2026-10-22 | 2026-10-25 |
| [#115316](https://github.com/pytorch/pytorch/pull/115316) | Automated submodule update: FBGEMM | @facebook-github-bot | open | 2023-12-07 | 2026-10-25 |
| [#200522](https://github.com/pytorch/pytorch/pull/200522) | [module-level kernels] inductor: launch each kernel with the... | @bobrenjc93 | open | 2026-10-10 | 2026-10-25 |
| [#201973](https://github.com/pytorch/pytorch/pull/201973) | [inductor] Optimize native matmul load indexing | @nullplay | open | 2026-10-25 | 2026-10-25 |
| [#201967](https://github.com/pytorch/pytorch/pull/201967) | [ROCm] Bump trunk ROCm version to 10.2 | @zjliu-amd | draft | 2026-10-24 | 2026-10-25 |
| [#199158](https://github.com/pytorch/pytorch/pull/199158) | Resolve cuDNN 9 versioned include, lib, and bin paths in cpp... | @lampn95 | open | 2026-09-30 | 2026-10-25 |
| [#198257](https://github.com/pytorch/pytorch/pull/198257) | [no-ci] [export_python] export_python: concurrent first call... | @bobrenjc93 | draft | 2026-09-22 | 2026-10-25 |
| [#201695](https://github.com/pytorch/pytorch/pull/201695) | [inductor] Include extra_options in Triton config identity | @luochao-dev | open | 2026-10-22 | 2026-10-25 |
| [#195717](https://github.com/pytorch/pytorch/pull/195717) | [3/3][Test] Separate the cuDNN varlen attention tests into t... | @tszulist-hbn | open | 2026-09-02 | 2026-10-25 |
| [#201620](https://github.com/pytorch/pytorch/pull/201620) | [2/3][Test] Reorder two flash varlen tests ahead of the cuDN... | @tszulist-hbn | open | 2026-10-21 | 2026-10-25 |
| [#200292](https://github.com/pytorch/pytorch/pull/200292) | [Test][XPU] Re-enable `test_range_factories_64bit_indexing` ... | @pbielak | open | 2026-10-08 | 2026-10-25 |
| [#196433](https://github.com/pytorch/pytorch/pull/196433) | [Test][XPU] Enable XPU device tests in test_cpp_extensions_a... | @gplutop7 | open | 2026-09-09 | 2026-10-25 |
| [#195730](https://github.com/pytorch/pytorch/pull/195730) | [Test] Refactor `test/distributions/test_distributions.py` a... | @pbielak | open | 2026-09-02 | 2026-10-25 |
| [#196720](https://github.com/pytorch/pytorch/pull/196720) | [Test] Enable test/profiler/test_trace_validator.py on XPU | @tszulist-hbn | open | 2026-09-11 | 2026-10-25 |
| [#197241](https://github.com/pytorch/pytorch/pull/197241) | [2/N][test] Refactor `test_cuda_multigpu.py` test file to ma... | @BBBela | open | 2026-09-16 | 2026-10-25 |
| [#195722](https://github.com/pytorch/pytorch/pull/195722) | [Test] Refactor test_dlpack.py and enable on XPU | @tszulist-hbn | open | 2026-09-02 | 2026-10-25 |
| [#201446](https://github.com/pytorch/pytorch/pull/201446) | [distributed][nvshmem] Fix NVSHMEM Triton reduction dispatch... | @Aidyn-A | open | 2026-10-19 | 2026-10-25 |
| [#196574](https://github.com/pytorch/pytorch/pull/196574) | Recover cached Triton kernels when GPU binaries are missing ... | @mlazos | open | 2026-09-10 | 2026-10-25 |
| [#178305](https://github.com/pytorch/pytorch/pull/178305) | [XPU][oneDNN] Enforce const/mutable pointer semantics for mk... | @gplutop7 | open | 2026-03-24 | 2026-10-25 |
| [#201769](https://github.com/pytorch/pytorch/pull/201769) | [tunableop] validate a borrowed solution before trusting it | @ruddhic | open | 2026-10-22 | 2026-10-25 |
| [#201768](https://github.com/pytorch/pytorch/pull/201768) | [tunableop] tune a range of sizes of a GEMM's dynamic dim | @ruddhic | open | 2026-10-22 | 2026-10-25 |
| [#201766](https://github.com/pytorch/pytorch/pull/201766) | [tunableop] compile-time nearest match and borrowed-result r... | @ruddhic | open | 2026-10-22 | 2026-10-25 |
| [#201959](https://github.com/pytorch/pytorch/pull/201959) | [codemod] Use c10::irange for simple loops in torch/csrc and... | @r-barnes | open | 2026-10-24 | 2026-10-25 |
| [#192177](https://github.com/pytorch/pytorch/pull/192177) | [ROCm][tunableop] Record untuned GEMMs on the BLAS fast-path... | @adelesun | open | 2026-08-05 | 2026-10-25 |
| [#201767](https://github.com/pytorch/pytorch/pull/201767) | [tunableop] dedicated compile-time benchmark worker and mode... | @ruddhic | open | 2026-10-22 | 2026-10-25 |
| [#201957](https://github.com/pytorch/pytorch/pull/201957) | [codemod] Use c10::irange for simple loops in ATen CUDA kern... | @r-barnes | open | 2026-10-24 | 2026-10-25 |
| [#199818](https://github.com/pytorch/pytorch/pull/199818) | [Inductor] Autotune TMA against pointer loads for pointwise ... | @oonyshch | open | 2026-10-05 | 2026-10-24 |
| [#201953](https://github.com/pytorch/pytorch/pull/201953) | [codemod] Use c10::irange for simple loops in c10 and ATen c... | @r-barnes | open | 2026-10-24 | 2026-10-24 |
| [#201958](https://github.com/pytorch/pytorch/pull/201958) | [codemod] Use c10::irange for simple loops in ATen native op... | @r-barnes | open | 2026-10-24 | 2026-10-24 |
| [#201956](https://github.com/pytorch/pytorch/pull/201956) | [codemod] Use c10::irange for simple loops in ATen native CP... | @r-barnes | open | 2026-10-24 | 2026-10-24 |
| [#201960](https://github.com/pytorch/pytorch/pull/201960) | [codemod] Use c10::irange for simple loops in torch/csrc/jit... | @r-barnes | open | 2026-10-24 | 2026-10-24 |
| [#201851](https://github.com/pytorch/pytorch/pull/201851) | ATen: Validate v1 scaled_mm bias shape in meta (#201851) | @goldcoderZ | open | 2026-10-23 | 2026-10-24 |
| [#201190](https://github.com/pytorch/pytorch/pull/201190) | ATen: Enable ROCm rowwise BF16 scaled_addmm (#201190) | @goldcoderZ | open | 2026-10-16 | 2026-10-24 |
| [#201930](https://github.com/pytorch/pytorch/pull/201930) | [ROCm] Bottom-right align explicit causal windows in AOTrito... | @AndreasKaratzas | open | 2026-10-24 | 2026-10-24 |
| [#199726](https://github.com/pytorch/pytorch/pull/199726) | [FSDP2] Add an all-gather layout contract with FSDP-owned bu... | @weifengpy | open | 2026-10-05 | 2026-10-24 |
| [#201472](https://github.com/pytorch/pytorch/pull/201472) | [ROCm][Inductor] Skip the CK forward conv template for conv_... | @iupaikov-amd | open | 2026-10-19 | 2026-10-23 |
| [#200959](https://github.com/pytorch/pytorch/pull/200959) | [ROCm][Inductor] Optimize FlexAttention backward on gfx950 | @bangtianliu | open | 2026-10-14 | 2026-10-23 |
| [#197425](https://github.com/pytorch/pytorch/pull/197425) | [ROCm] Free rocFFT plans | @evetsso | open | 2026-09-17 | 2026-10-23 |
| [#200640](https://github.com/pytorch/pytorch/pull/200640) | [ROCm]: Added Platform-Specific Configuration Structs to CK-... | @TheRealMichaelWang | open | 2026-10-12 | 2026-10-23 |
| [#199973](https://github.com/pytorch/pytorch/pull/199973) | [ROCm][kineto] Check rocprofiler-sdk return codes and fix Ro... | @itrowbri | open | 2026-10-06 | 2026-10-23 |
| [#201771](https://github.com/pytorch/pytorch/pull/201771) | [ROCm] Fix test_region_device_time and test_load_standalone ... | @dnikolaev-amd | open | 2026-10-22 | 2026-10-23 |
| [#196675](https://github.com/pytorch/pytorch/pull/196675) | [Feature Refactoring] Resolve ROCm benchmark request stream ... | @twthighd | draft | 2026-09-11 | 2026-10-23 |
| [#192986](https://github.com/pytorch/pytorch/pull/192986) | [Testcase Refactoring] Split TestLookupTable and migrate to ... | @leewayx | draft | 2026-08-11 | 2026-10-23 |
| [#198947](https://github.com/pytorch/pytorch/pull/198947) | upstream blockscaled_tma from quant_cast_bench to core | @vkuzo | open | 2026-09-28 | 2026-10-22 |
| [#200955](https://github.com/pytorch/pytorch/pull/200955) | [fx] fuse_as_graphmodule: Extract sym shapes as submodule in... | @IvanKobzarev | open | 2026-10-14 | 2026-10-22 |
| [#201248](https://github.com/pytorch/pytorch/pull/201248) | [ROCm] Add wave32 WMMA path to int4mm for gfx11, gfx12 and g... | @jeffdaily | open | 2026-10-16 | 2026-10-22 |
| [#201763](https://github.com/pytorch/pytorch/pull/201763) | [inductor] Keep slice bounds symbolic in backed size-oblivio... | @shawnxu26 | open | 2026-10-22 | 2026-10-22 |
| [#201749](https://github.com/pytorch/pytorch/pull/201749) | [DO NOT MERGE][ROCm][CI]: prove extra jobs and an extra work... | @amdfaa | draft | 2026-10-22 | 2026-10-22 |
| [#198032](https://github.com/pytorch/pytorch/pull/198032) | [ROCm] Parallelize grid_sampler_2d backward across channels | @glen-amd | open | 2026-09-21 | 2026-10-22 |
| [#201712](https://github.com/pytorch/pytorch/pull/201712) | [ROCm] Enable hipBLASLt rowwise probes on Windows ROCm | @arsic3 | open | 2026-10-22 | 2026-10-22 |
| [#197541](https://github.com/pytorch/pytorch/pull/197541) | [ROCm] Calibrate GPU sleep delays in stream tests | @lstojilj-amd | open | 2026-09-18 | 2026-10-22 |
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
| [#188117](https://github.com/pytorch/pytorch/pull/188117) | Add CUDAGraph cloning for live user outputs | @eellison | merged | 2026-06-24 | 2026-06-24 |
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
Repo: `jax-ml/jax` | Last collected: 2026-10-25T12:48:56Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#41881](https://github.com/jax-ml/jax/pull/41881) | [ROCm] Enable remote compilation for jax in rocm rbe | @alekstheod | open | 2026-10-22 | 2026-10-22 |
| [#41815](https://github.com/jax-ml/jax/pull/41815) | [ROCm] Switch the pinned ROCm CI legs from 10.0 to 10.1 | @magaonka-amd | draft | 2026-10-20 | 2026-10-21 |
| [#41230](https://github.com/jax-ml/jax/pull/41230) | [ROCM]  Add TheRock `rocm_sysdeps/lib` to wheel RUNPATHs nee... | @pemeliya | merged | 2026-10-02 | 2026-10-21 |
| [#41702](https://github.com/jax-ml/jax/pull/41702) | [ROCm] Trim wheel RUNPATH: drop deprecated per-family and de... | @gulsumgudukbay | draft | 2026-10-16 | 2026-10-19 |
| [#41703](https://github.com/jax-ml/jax/pull/41703) | [DO NOT MERGE][ROCm] Migrate Pytest ROCm lane to rocmless co... | @gulsumgudukbay | draft | 2026-10-16 | 2026-10-19 |
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
| [#39974](https://github.com/jax-ml/jax/pull/39974) | [ROCm] Make test_vmap_ellipsis insensitive to reduced-precis... | @magaonka-amd | merged | 2026-08-13 | 2026-08-19 |
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-10-25T12:49:06Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#63072](https://github.com/vllm-project/vllm/pull/63072) | [ROCm][GLM-5.3-Flash] Pass precomputed chunk indices to chun... | @zhentaocc | draft | 2026-10-22 | 2026-10-25 |
| [#51406](https://github.com/vllm-project/vllm/pull/51406) | [ROCm] Enable fused QK-norm+RoPE+gate Triton kernel for Qwen... | @xuebwang | open | 2026-08-07 | 2026-10-25 |
| [#61390](https://github.com/vllm-project/vllm/pull/61390) | [Bugfix][KV Offload] Treat an already-published fs block as ... | @shreyanshj10 | open | 2026-10-13 | 2026-10-25 |
| [#63126](https://github.com/vllm-project/vllm/pull/63126) | [Bugfix][KV Offload] Catch async lookup iterator errors | @Pepsi-Cola-qqq | merged | 2026-10-22 | 2026-10-25 |
| [#55576](https://github.com/vllm-project/vllm/pull/55576) | [Bugfix][KV Offload] Enable NIXL telemetry for the OBJ tier | @zupengwang | merged | 2026-09-06 | 2026-10-25 |
| [#63010](https://github.com/vllm-project/vllm/pull/63010) | [Bugfix][KV Offload] Reset the store cursor when a request r... | @AdvayMonga | open | 2026-10-22 | 2026-10-25 |
| [#61961](https://github.com/vllm-project/vllm/pull/61961) | [KV Offload] Load small CPU-tier hits synchronously within t... | @kfirtoledo | open | 2026-10-16 | 2026-10-25 |
| [#53902](https://github.com/vllm-project/vllm/pull/53902) | [Metrics][KV Offload] Fill vllm:kv_offload_config_info with ... | @amirfr3 | open | 2026-08-26 | 2026-10-25 |
| [#63576](https://github.com/vllm-project/vllm/pull/63576) | [Bugfix][ROCm][DSv4.1] Await krdy before K2's combine reads ... | @AndreasKaratzas | draft | 2026-10-25 | 2026-10-25 |
| [#59774](https://github.com/vllm-project/vllm/pull/59774) | [ROCm] Octave KV (`ROCM_OCTAVE`): native 3-bit KV cache back... | @JartX | open | 2026-10-02 | 2026-10-25 |
| [#63408](https://github.com/vllm-project/vllm/pull/63408) | [CI] List one test path per line in Buildkite pytest command... | @okorzh-amd | open | 2026-10-23 | 2026-10-25 |
| [#62846](https://github.com/vllm-project/vllm/pull/62846) | [ROCm][Perf] Fix wvSplitK tile choice for N>=5 on gfx950 and... | @jiacao-amd | closed | 2026-10-21 | 2026-10-25 |
| [#55993](https://github.com/vllm-project/vllm/pull/55993) | [Examples] Fix ghost demo.py Usage in offline LLM examples | @imitater-dou | open | 2026-09-09 | 2026-10-25 |
| [#51555](https://github.com/vllm-project/vllm/pull/51555) | [ROCm] Portable Triton paged-MQA-logits kernel + vectorized ... | @ben0112 | closed | 2026-08-09 | 2026-10-25 |
| [#63574](https://github.com/vllm-project/vllm/pull/63574) | [Security] Raise patched runtime and test dependency floors | @jperezdealgaba | open | 2026-10-25 | 2026-10-25 |
| [#62362](https://github.com/vllm-project/vllm/pull/62362) | [Model] Fall back to block_configs for heterogeneous Nemotro... | @bantianyue | open | 2026-10-18 | 2026-10-25 |
| [#61540](https://github.com/vllm-project/vllm/pull/61540) | [Docs] Document NIXL KV connector metrics aggregation semant... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#61508](https://github.com/vllm-project/vllm/pull/61508) | [Model] Plumb swiglu_limit through Cohere2Moe | @jatseng-ai | open | 2026-10-13 | 2026-10-25 |
| [#57585](https://github.com/vllm-project/vllm/pull/57585) | [Perf][GLM-5.3-Flash][SM90] Shape-aware launch configuration... | @positive666 | open | 2026-09-18 | 2026-10-25 |
| [#63475](https://github.com/vllm-project/vllm/pull/63475) | [Bugfix][Kernel] persistent_topk: sync the CTA around radix ... | @AndreasKaratzas | open | 2026-10-24 | 2026-10-25 |
| [#60149](https://github.com/vllm-project/vllm/pull/60149) | [Model] Add Dory support | @shan18 | merged | 2026-10-06 | 2026-10-25 |
| [#63487](https://github.com/vllm-project/vllm/pull/63487) | [Bugfix] Propagate EngineDeadError on AsyncLLM output_handle... | @PratikCreates | open | 2026-10-24 | 2026-10-25 |
| [#60195](https://github.com/vllm-project/vllm/pull/60195) | [Bugfix][Reasoning] Strip <think> from multi-token streaming... | @halilergul1 | open | 2026-10-06 | 2026-10-25 |
| [#63142](https://github.com/vllm-project/vllm/pull/63142) | [KVConnector][Mooncake] Coalesce descending block ids to red... | @zhou-yuhan | open | 2026-10-22 | 2026-10-25 |
| [#59698](https://github.com/vllm-project/vllm/pull/59698) | [Startup] Add --flashinfer-autotune-cache-only to load the F... | @richardcheam | draft | 2026-10-01 | 2026-10-25 |
| [#63568](https://github.com/vllm-project/vllm/pull/63568) | [ROCm][Perf] Add AITER FlashKDA prefill backend for GLM KDA | @eppaneamd | draft | 2026-10-25 | 2026-10-25 |
| [#62932](https://github.com/vllm-project/vllm/pull/62932) | [KV Offload] Bound staged loads by primary tier capacity | @javieratomic | open | 2026-10-21 | 2026-10-25 |
| [#63566](https://github.com/vllm-project/vllm/pull/63566) | [Bugfix][KV Offload] Pin a shared-prefix junction when a spa... | @KaloyanNaumov | open | 2026-10-25 | 2026-10-25 |
| [#58780](https://github.com/vllm-project/vllm/pull/58780) | [Bugfix][Parser] Stream DeepSeek V4/V3.2 string tool argumen... | @jayzuccarelli | open | 2026-09-25 | 2026-10-25 |
| [#63500](https://github.com/vllm-project/vllm/pull/63500) | [Bugfix] Don't initialize CUDA when importing the FLA ops | @akanyaani | open | 2026-10-24 | 2026-10-25 |
| [#62160](https://github.com/vllm-project/vllm/pull/62160) | [Bugfix][KV Offload] Deduplicate replicated GQA heads in can... | @xiaoba17 | open | 2026-10-17 | 2026-10-25 |
| [#63332](https://github.com/vllm-project/vllm/pull/63332) | [ROCm][Recipe] Qwen3.8-Flash-Next: add MI355X Quark MXFP4 va... | @mjkvaak-amd | draft | 2026-10-23 | 2026-10-25 |
| [#62162](https://github.com/vllm-project/vllm/pull/62162) | [Feature][KV Offload] Enable canonical offload for chunked-l... | @xiaoba17 | open | 2026-10-17 | 2026-10-25 |
| [#63562](https://github.com/vllm-project/vllm/pull/63562) | [ROCm][Perf] W4A16: retune the small-M Triton tiles on gfx12 | @daibenzhe | draft | 2026-10-25 | 2026-10-25 |
| [#63537](https://github.com/vllm-project/vllm/pull/63537) | [CI] Fix the Qwen2 embed memory leak and HfRunner no-cache l... | @AndreasKaratzas | merged | 2026-10-25 | 2026-10-25 |
| [#63538](https://github.com/vllm-project/vllm/pull/63538) | [Bugfix][Model] Borrow Gemma4 _get_max_soft_tokens in Embedd... | @AndreasKaratzas | merged | 2026-10-25 | 2026-10-25 |
| [#63560](https://github.com/vllm-project/vllm/pull/63560) | [Recipe] DeepSeek-V4.1-Flash: AgentX lanes as tuned presets | @esmeetu | open | 2026-10-25 | 2026-10-25 |
| [#63361](https://github.com/vllm-project/vllm/pull/63361) | [Frontend][Performance] Reuse session prompt tokens and bloc... | @RichealYoung | draft | 2026-10-23 | 2026-10-25 |
| [#58745](https://github.com/vllm-project/vllm/pull/58745) | [Bugfix][Metrics] Account for speculative decode tokens | @aarongdeng | open | 2026-09-25 | 2026-10-25 |
| [#63555](https://github.com/vllm-project/vllm/pull/63555) | [ROCm] GLM-5.3-Flash MonoKernel: MTP verify step | @amd-sriram | draft | 2026-10-25 | 2026-10-25 |
| [#61939](https://github.com/vllm-project/vllm/pull/61939) | [ROCm] Revamp CI/release deployment: collapse image tiers, u... | @AndreasKaratzas | open | 2026-10-16 | 2026-10-25 |
| [#63469](https://github.com/vllm-project/vllm/pull/63469) | [Bugfix][Benchmark] Support quoted commas in sweep plot filt... | @singh4jitendra | open | 2026-10-24 | 2026-10-25 |
| [#61780](https://github.com/vllm-project/vllm/pull/61780) | [Bugfix][KV Offload] Treat failed secondary-tier stores as b... | @YeonghyeonKO | merged | 2026-10-15 | 2026-10-25 |
| [#57683](https://github.com/vllm-project/vllm/pull/57683) | [Bugfix][KVConnector] Skip unregistered connectors in MultiC... | @pjh456 | open | 2026-09-19 | 2026-10-25 |
| [#63552](https://github.com/vllm-project/vllm/pull/63552) | [Doc] Kimi-K3: InferenceX AgentX lanes as tuned presets; DCP... | @esmeetu | merged | 2026-10-25 | 2026-10-25 |
| [#62972](https://github.com/vllm-project/vllm/pull/62972) | [Kernel][MoE] Add the NIXL EP v2
  elastic EP all2all backen... | @SimonRaviv | draft | 2026-10-21 | 2026-10-25 |
| [#63557](https://github.com/vllm-project/vllm/pull/63557) | [CI][ROCm] Take NIXL PD accuracy side-channel ports from bel... | @AndreasKaratzas | draft | 2026-10-25 | 2026-10-25 |
| [#63558](https://github.com/vllm-project/vllm/pull/63558) | [Bugfix][ROCm] Keep the AITER GDN decode fast path off for t... | @AndreasKaratzas | draft | 2026-10-25 | 2026-10-25 |
| [#63559](https://github.com/vllm-project/vllm/pull/63559) | [CI][ROCm] Skip the AITER MoE garbage-rows test for fp8 per-... | @AndreasKaratzas | draft | 2026-10-25 | 2026-10-25 |
| [#60810](https://github.com/vllm-project/vllm/pull/60810) | [Bugfix][KV Offload] Reset a resumed streaming session's blo... | @albertoperdomo2 | merged | 2026-10-09 | 2026-10-25 |
| [#60299](https://github.com/vllm-project/vllm/pull/60299) | [Bugfix] Disable CUDA graphs for --cpu-offload-gb without pi... | @cheese-cakee | open | 2026-10-06 | 2026-10-25 |
| [#61662](https://github.com/vllm-project/vllm/pull/61662) | [ROCm][Perf][GLM-5.3-Flash] Mono decode layer for GLM-5.3-Fl... | @amd-sriram | open | 2026-10-14 | 2026-10-25 |
| [#57134](https://github.com/vllm-project/vllm/pull/57134) | [ROCm][Bugfix] Support FP8 KV cache for NoPE sparse MLA | @amd-dlimpus | open | 2026-09-16 | 2026-10-25 |
| [#60084](https://github.com/vllm-project/vllm/pull/60084) | [ROCm][Perf] Restore 32-bit buffer addressing for TRITON_ATT... | @umarkovi-amd | merged | 2026-10-05 | 2026-10-25 |
| [#63453](https://github.com/vllm-project/vllm/pull/63453) | [CI][ROCm] Take MoRIIO P/D test port blocks from below the e... | @AndreasKaratzas | open | 2026-10-24 | 2026-10-25 |
| [#63540](https://github.com/vllm-project/vllm/pull/63540) | [Perf][DSv4] Process 4 heads per program in fused_inv_rope_f... | @guanzheh | open | 2026-10-25 | 2026-10-25 |
| [#61019](https://github.com/vllm-project/vllm/pull/61019) | [Bugfix][KV Connector] Serve and store OffloadingConnector p... | @kimseunghyun-kr | merged | 2026-10-10 | 2026-10-25 |
| [#61795](https://github.com/vllm-project/vllm/pull/61795) | [UMBP][7/10] Add standalone mode backed by a node-local serv... | @charxwu | open | 2026-10-15 | 2026-10-25 |
| [#63476](https://github.com/vllm-project/vllm/pull/63476) | [Bugfix][MRV2] Report the first failed DBO microbatch | @algebra-MCX | merged | 2026-10-24 | 2026-10-25 |
| [#63527](https://github.com/vllm-project/vllm/pull/63527) | [ROCm][Perf][Muse Spark] fp8 KV cache for the specialized de... | @amd-mghanimi | draft | 2026-10-25 | 2026-10-25 |
| [#59478](https://github.com/vllm-project/vllm/pull/59478) | [ROCm][Perf] Use AITER FlyDSL INT4 QuickReduce when INT4 Qui... | @mjkvaak-amd | open | 2026-09-30 | 2026-10-25 |
| [#63520](https://github.com/vllm-project/vllm/pull/63520) | [Doc][ROCm] Align Kimi-K3 MI355X AgentX recipe with Inferenc... | @chunfangamd | merged | 2026-10-24 | 2026-10-25 |
| [#57926](https://github.com/vllm-project/vllm/pull/57926) | [Bugfix][Core][MRV2] Profile the sampler with the params the... | @longluubao | open | 2026-09-21 | 2026-10-25 |
| [#63547](https://github.com/vllm-project/vllm/pull/63547) | [ROCm][MiniMax] Add MiniMax-M3.1 AMD compatibility via MXFP4... | @ChuanLi1101 | draft | 2026-10-25 | 2026-10-25 |
| [#63548](https://github.com/vllm-project/vllm/pull/63548) | [Bugfix] Keep MRV2 model state in the runtime pool under sle... | @xinyuangui2 | open | 2026-10-25 | 2026-10-25 |
| [#61010](https://github.com/vllm-project/vllm/pull/61010) | [Bugfix][Spec Decode] Alias fp8 ignored_layers to global dra... | @he-yufeng | open | 2026-10-10 | 2026-10-25 |
| [#63534](https://github.com/vllm-project/vllm/pull/63534) | [Doc] MiniMax-M3: InferenceX AgentX lanes as tuned presets | @esmeetu | merged | 2026-10-25 | 2026-10-25 |
| [#63372](https://github.com/vllm-project/vllm/pull/63372) | [Bugfix][MRV2] Keep routed-expert rows of every DBO microbat... | @algebra-MCX | merged | 2026-10-23 | 2026-10-25 |
| [#63266](https://github.com/vllm-project/vllm/pull/63266) | [Bugfix][KV Offload] Reject misaligned chunked-local CPU suf... | @charxwu | merged | 2026-10-23 | 2026-10-25 |
| [#62927](https://github.com/vllm-project/vllm/pull/62927) | [ROCm][BugFix] Sanitize HIP-graph padding rows before AITER ... | @divakar-amd | draft | 2026-10-21 | 2026-10-25 |
| [#63457](https://github.com/vllm-project/vllm/pull/63457) | [Hardware] Use accelerator APIs in weight transfer | @Ronald1995 | merged | 2026-10-24 | 2026-10-25 |
| [#62698](https://github.com/vllm-project/vllm/pull/62698) | [Perf][MRV2] Parallelize staged writes across 1024-element c... | @Juntian777 | merged | 2026-10-20 | 2026-10-25 |
| [#63528](https://github.com/vllm-project/vllm/pull/63528) | [ROCm][MiniMax-M3.1] Enable TP4 decode paths and tune MXFP8 | @Fangzhou-Ai | draft | 2026-10-25 | 2026-10-25 |
| [#63297](https://github.com/vllm-project/vllm/pull/63297) | [ROCm][Kimi-K3] Keep KDA prefill checkpoints with the gluon ... | @seungrokj | open | 2026-10-23 | 2026-10-25 |
| [#63426](https://github.com/vllm-project/vllm/pull/63426) | [ROCm][CI] Report native faults and keep teardown faults fro... | @AndreasKaratzas | draft | 2026-10-23 | 2026-10-25 |
| [#63452](https://github.com/vllm-project/vllm/pull/63452) | [CI] Fix the Domyn Edge (ROCm) and Qwen2 embed HF references | @AndreasKaratzas | merged | 2026-10-24 | 2026-10-24 |
| [#62057](https://github.com/vllm-project/vllm/pull/62057) | [ROCm][Model] Add Beam 1.0 support on ROCm  | @jamesETsmith | open | 2026-10-16 | 2026-10-24 |
| [#63510](https://github.com/vllm-project/vllm/pull/63510) | Rocm/beam common consolidation | @jamesETsmith | draft | 2026-10-24 | 2026-10-24 |
| [#46676](https://github.com/vllm-project/vllm/pull/46676) | [KERNEL][ROCm]Native HIP MXFP4(Compressed+Quark) (dense + Mo... | @JartX | open | 2026-06-25 | 2026-10-24 |
| [#63124](https://github.com/vllm-project/vllm/pull/63124) | [ROCm][Qwen3.8-Flash-Next] Specialized decode: MTP verify st... | @mjkvaak-amd | draft | 2026-10-22 | 2026-10-24 |
| [#63032](https://github.com/vllm-project/vllm/pull/63032) | [ROCm][Perf] Qwen3.8-Flash-Next specialized decode on MI355X... | @mjkvaak-amd | draft | 2026-10-22 | 2026-10-24 |
| [#63001](https://github.com/vllm-project/vllm/pull/63001) | [Bugfix][Quantization][Spec Decode] Load ModelOpt mixed-prec... | @sragrawal | merged | 2026-10-22 | 2026-10-24 |
| [#61791](https://github.com/vllm-project/vllm/pull/61791) | [UMBP][3/10] Add shared lookup, transfer, hybrid, and observ... | @charxwu | merged | 2026-10-15 | 2026-10-24 |
| [#63398](https://github.com/vllm-project/vllm/pull/63398) | [ROCm][Perf] Replace MiniMax-M3 MonoKernel with ATOM full-la... | @Fangzhou-Ai | draft | 2026-10-23 | 2026-10-24 |
| [#62713](https://github.com/vllm-project/vllm/pull/62713) | [DeepSeek][ROCm] V4.1-Flash: enable --monokernel on MI325X | @frida-andersson | merged | 2026-10-20 | 2026-10-24 |
| [#60413](https://github.com/vllm-project/vllm/pull/60413) | [Perf][ROCm][Kernel] Add W4A8 int8-dot MXFP4 GEMV for RDNA3/... | @xiao-llm | merged | 2026-10-07 | 2026-10-24 |
| [#61628](https://github.com/vllm-project/vllm/pull/61628) | [ROCm][MLA][DCP] Drop VLLM_ROCM_AITER_MLA_DCP_VERIFY | @xaguilar-amd | merged | 2026-10-14 | 2026-10-24 |
| [#57909](https://github.com/vllm-project/vllm/pull/57909) | [ROCm][PERF] Enable MiniMax-M3 Indexer CP | @ukannika | merged | 2026-09-21 | 2026-10-24 |
| [#61482](https://github.com/vllm-project/vllm/pull/61482) | [ROCm][Perf][DSv4] Standalone mono decode layer for DeepSeek... | @Fangzhou-Ai | merged | 2026-10-13 | 2026-10-24 |
| [#62473](https://github.com/vllm-project/vllm/pull/62473) | [Bugfix][ROCm][MoRIIO] Release every prefill rank a READ hol... | @tjtanaa | merged | 2026-10-19 | 2026-10-24 |
| [#63449](https://github.com/vllm-project/vllm/pull/63449) | [CI][Kimi-K3] Expect no trailing-block drop in DSpark resend... | @JaredforReal | merged | 2026-10-24 | 2026-10-24 |
| [#62270](https://github.com/vllm-project/vllm/pull/62270) | [ROCm][Perf][MiniMax-M3] Enable the fp8 indexer cache on gfx... | @akii96 | open | 2026-10-18 | 2026-10-24 |
| [#62298](https://github.com/vllm-project/vllm/pull/62298) | [CI][ROCm] Run ROCm-capable tests that are currently skipped... | @AndreasKaratzas | open | 2026-10-18 | 2026-10-24 |
| [#60321](https://github.com/vllm-project/vllm/pull/60321) | [ROCm][Attention] Add an mxfp4_mla KV cache for rope-free sp... | @amd-dlimpus | open | 2026-10-07 | 2026-10-24 |
| [#62835](https://github.com/vllm-project/vllm/pull/62835) | [Security] Refresh vulnerable runtime and test dependencies | @jperezdealgaba | merged | 2026-10-21 | 2026-10-24 |
| [#62716](https://github.com/vllm-project/vllm/pull/62716) | [ROCm][Build][1/5] Speed up ROCm build: generate the paged a... | @fxmarty-amd | open | 2026-10-20 | 2026-10-24 |
| [#63428](https://github.com/vllm-project/vllm/pull/63428) | [Doc][Recipe] MiniMax-M3.1-Flash: DEP2 + DEP4 PD on GB200/GB... | @zyongye | merged | 2026-10-23 | 2026-10-24 |
| [#62384](https://github.com/vllm-project/vllm/pull/62384) | [Feature][PCP] Support decoder-side SWA bounded replay with ... | @wangyicong52 | merged | 2026-10-19 | 2026-10-24 |
| [#63293](https://github.com/vllm-project/vllm/pull/63293) | [Perf][DSv4.1] Reuse sparse indices across attention layers | @Alex-ai-future | open | 2026-10-23 | 2026-10-24 |
| [#62171](https://github.com/vllm-project/vllm/pull/62171) | [Perf][Kernel] Size cooperative_topk's single pass by row le... | @haosdent | merged | 2026-10-17 | 2026-10-24 |
| [#63039](https://github.com/vllm-project/vllm/pull/63039) | [ROCm][MiMo] Add TP8 MegaMoE backend | @LiuYinfeng01 | draft | 2026-10-22 | 2026-10-24 |
| [#59100](https://github.com/vllm-project/vllm/pull/59100) | [CI][ROCm] Export kernel source maps for CI selection | @AndreasKaratzas | merged | 2026-09-28 | 2026-10-24 |
| [#61193](https://github.com/vllm-project/vllm/pull/61193) | [ROCm][Perf] W4A16: dequantize then matmul for large prefill... | @SCcagg5 | open | 2026-10-12 | 2026-10-23 |
| [#60710](https://github.com/vllm-project/vllm/pull/60710) | [ROCm][Perf] W4A16: opt-in dense weight cache for RDNA hybri... | @zohaibm-amd | open | 2026-10-08 | 2026-10-23 |
| [#59717](https://github.com/vllm-project/vllm/pull/59717) | [Bugfix][MoE] Remap invalid topk_ids in moe_permute without ... | @jlqibm | merged | 2026-10-02 | 2026-10-23 |
| [#63131](https://github.com/vllm-project/vllm/pull/63131) | [Bugfix][ROCm][Kimi-K3] Validate gfx942's int4 expert requan... | @xaguilar-amd | merged | 2026-10-22 | 2026-10-23 |
| [#60644](https://github.com/vllm-project/vllm/pull/60644) | [ROCm][RDNA][Perf] W4A16: packed fp16 prefill dequant and ti... | @stoivonen-amd | merged | 2026-10-08 | 2026-10-23 |
| [#61682](https://github.com/vllm-project/vllm/pull/61682) | [ROCm][Perf][DSV4] Keep one decoder-replay row on unfinished... | @frida-andersson | draft | 2026-10-14 | 2026-10-23 |
| [#55387](https://github.com/vllm-project/vllm/pull/55387) | [CI/Build] Move the default CUDA build from 13.0 to 13.2 | @atalman | open | 2026-09-04 | 2026-10-23 |
| [#52979](https://github.com/vllm-project/vllm/pull/52979) | [ROCm][MoE] Pack UE8M0 scales directly in Triton silu_mul_qu... | @AndreasKaratzas | open | 2026-08-19 | 2026-10-23 |
| [#63268](https://github.com/vllm-project/vllm/pull/63268) | [ROCm][Bugfix] Fix Triton paged decode leaving output heads ... | @AndreasKaratzas | merged | 2026-10-23 | 2026-10-23 |
| [#57569](https://github.com/vllm-project/vllm/pull/57569) | [Perf][KV Offload] Calibrate the DMA/Triton load cutoff at h... | @hyunnnchoi | open | 2026-09-18 | 2026-10-23 |
| [#62907](https://github.com/vllm-project/vllm/pull/62907) | [CI][ROCm][MoE] Add MXFP4 SWIGLUOAI_UNINTERLEAVE/SITU test c... | @divakar-amd | merged | 2026-10-21 | 2026-10-23 |
| [#63260](https://github.com/vllm-project/vllm/pull/63260) | [Core] Let VLLM_WORKER_SHUTDOWN_TIMEOUT_SECONDS set the Engi... | @AndreasKaratzas | merged | 2026-10-23 | 2026-10-23 |
| [#63242](https://github.com/vllm-project/vllm/pull/63242) | [CI][ROCm] Fail the AITER nightly overlay on wheels ci_base ... | @AndreasKaratzas | merged | 2026-10-23 | 2026-10-23 |
| [#63283](https://github.com/vllm-project/vllm/pull/63283) | [CI][ROCm] Run the online FP8 MoE batch-invariance test on R... | @AndreasKaratzas | merged | 2026-10-23 | 2026-10-23 |
| [#61529](https://github.com/vllm-project/vllm/pull/61529) | [ROCm][Qwen4Exp] Enable fp8 KV and indexer caches on the AMD... | @mrodden | open | 2026-10-13 | 2026-10-23 |
| [#63401](https://github.com/vllm-project/vllm/pull/63401) | [Bugfix][ROCm][MRV2] Measure CUDA graph memory with the proc... | @GodRishUniverse | draft | 2026-10-23 | 2026-10-23 |
| [#62757](https://github.com/vllm-project/vllm/pull/62757) | [ROCm][Model] Muse Spark: share one RoPE cache sized by max_... | @okorzh-amd | merged | 2026-10-20 | 2026-10-23 |
| [#62934](https://github.com/vllm-project/vllm/pull/62934) | [ROCm][CI] Move NFS-affected MI300 test groups to MI355 | @djramic | merged | 2026-10-21 | 2026-10-23 |
| [#63344](https://github.com/vllm-project/vllm/pull/63344) | [Doc][ROCm] Document DeepSeek-V4.1-Flash MI355X AgentX TP2 p... | @chunfangamd | merged | 2026-10-23 | 2026-10-23 |
| [#62827](https://github.com/vllm-project/vllm/pull/62827) | [ROCm] Bump UCX to v1.23.0-rc1 so NIXL uses rocm_ipc | @AndreasKaratzas | merged | 2026-10-21 | 2026-10-23 |
| [#63269](https://github.com/vllm-project/vllm/pull/63269) | [CI][ROCm] Raise the MI355 MiniMax M3 MonoKernel timeout to ... | @AndreasKaratzas | merged | 2026-10-23 | 2026-10-23 |
| [#63257](https://github.com/vllm-project/vllm/pull/63257) | [ROCm][Recipe] MiniMax-M3.1-Flash: MI355X PD, DBO / SP prefi... | @benenzhu | merged | 2026-10-23 | 2026-10-23 |
| [#36681](https://github.com/vllm-project/vllm/pull/36681) | [ROCm][Perf] Allow MTP lens > 1 in Sparse MLA | @tvirolai-amd | merged | 2026-03-10 | 2026-10-23 |
| [#45149](https://github.com/vllm-project/vllm/pull/45149) | [ROCM][DSV32][Perf][MTP] Enable UNIFORM_BATCH CG mode in roc... | @tvirolai-amd | merged | 2026-06-10 | 2026-10-23 |
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
| [#58761](https://github.com/vllm-project/vllm/pull/58761) | [ROCm][CI] Make ROCm 10.0 the default image; keep ROCm 7.2 a... | @Rohan138 | merged | 2026-09-25 | 2026-10-18 |
| [#42755](https://github.com/vllm-project/vllm/pull/42755) | [Model][Hardware][AMD][Kernel] Part 2/2 -> Enable e2e QK Nor... | @jhu960213 | merged | 2026-05-15 | 2026-10-16 |
| [#61541](https://github.com/vllm-project/vllm/pull/61541) | [CI] Run 4xB200 steps nightly only | @khluu | merged | 2026-10-14 | 2026-10-15 |
| [#60753](https://github.com/vllm-project/vllm/pull/60753) | [Perf][ROCm][GLM-5.3-Flash] AITER prefill indexer topk | @simondanielsson | merged | 2026-10-09 | 2026-10-14 |
| [#61378](https://github.com/vllm-project/vllm/pull/61378) | [ROCm][Perf] Enqueue the default chain first in CSA/HCA at s... | @shen-shanshan | merged | 2026-10-13 | 2026-10-14 |
| [#57199](https://github.com/vllm-project/vllm/pull/57199) | [ROCm][Perf] W4A16: speed up skinny GEMM decode, including s... | @roberteg16 | merged | 2026-09-16 | 2026-10-13 |
| [#60322](https://github.com/vllm-project/vllm/pull/60322) | [ROCm][MoE] Split AiterExperts by weight-quantization key | @divakar-amd | merged | 2026-10-07 | 2026-10-13 |
| [#59039](https://github.com/vllm-project/vllm/pull/59039) | [ROCm][Perf][DSv4.1] Enable decoder SWA bounded replay | @frida-andersson | merged | 2026-09-28 | 2026-10-13 |
| [#57705](https://github.com/vllm-project/vllm/pull/57705) | [Bugfix][KVConnector] Fix MoRI-IO WRITE-mode requests strand... | @akshayv | merged | 2026-09-19 | 2026-10-12 |
| [#60721](https://github.com/vllm-project/vllm/pull/60721) | [Misc] Consolidate csrc shared headers and prune dead code | @mgoin | merged | 2026-10-08 | 2026-10-12 |
| [#52231](https://github.com/vllm-project/vllm/pull/52231) | [Feature] Support batch invariance on ROCm | @mawong-amd | merged | 2026-08-14 | 2026-10-12 |
| [#49263](https://github.com/vllm-project/vllm/pull/49263) | [Perf] [Feat] [ROCm] Add densemha support to ROCm AITER Spar... | @tjtanaa | merged | 2026-07-21 | 2026-10-12 |
| [#56849](https://github.com/vllm-project/vllm/pull/56849) | [ROCm][Perf] Insert MiniMax-M3 sparse-PA K/V without a conti... | @akii96 | merged | 2026-09-14 | 2026-10-12 |
| [#51632](https://github.com/vllm-project/vllm/pull/51632) | [ROCm] [Bugfix] Fix Triton fused shared expert alignment | @akii96 | merged | 2026-08-10 | 2026-10-12 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-10-25T12:49:18Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#46141](https://github.com/sgl-project/sglang/pull/46141) | [Feat] attention: Add the MSA-v1 sparse backend and NVFP4 KV... | @ispobock | open | 2026-10-23 | 2026-10-25 |
| [#46140](https://github.com/sgl-project/sglang/pull/46140) | [Feat] quantization: Add the MiniMax-M3.1 NVFP4 MoE method | @ispobock | merged | 2026-10-23 | 2026-10-25 |
| [#41880](https://github.com/sgl-project/sglang/pull/41880) | [Perf] [AMD] Qwen3.8: AITER FlyDSL hc_mix for Qwen3.8 hyper-... | @amd-nprotaso | open | 2026-09-30 | 2026-10-25 |
| [#46367](https://github.com/sgl-project/sglang/pull/46367) | fix(gemma4): stop array parser hanging on nested arrays with... | @harshitgavita-07 | open | 2026-10-25 | 2026-10-25 |
| [#44825](https://github.com/sgl-project/sglang/pull/44825) | [Doc] blogs: Sync LMSYS SGLang blog cards | @sglang-bot | open | 2026-10-17 | 2026-10-25 |
| [#36703](https://github.com/sgl-project/sglang/pull/36703) | [diffusion] Plan reversible residency before warmup | @mickqian | open | 2026-08-27 | 2026-10-25 |
| [#45613](https://github.com/sgl-project/sglang/pull/45613) | [Feat] [NVIDIA] moe: SM90 NVFP4 MegaMoE via FlashInfer | @ouershua2299 | open | 2026-10-21 | 2026-10-25 |
| [#36069](https://github.com/sgl-project/sglang/pull/36069) | [Feat] simulator: Add optional InferCast latency and KV budg... | @Jeff010101 | open | 2026-08-23 | 2026-10-25 |
| [#35335](https://github.com/sgl-project/sglang/pull/35335) | [diffusion] Auto residency: per-pipeline containment fixes a... | @mickqian | open | 2026-08-18 | 2026-10-25 |
| [#37460](https://github.com/sgl-project/sglang/pull/37460) | [Diffusion][LoRA] Rework linear and LoRA linear common part | @vlserov | open | 2026-09-01 | 2026-10-25 |
| [#24227](https://github.com/sgl-project/sglang/pull/24227) | [diffusion] WanVideo TeaCache skipping is off-by-one | @eitanturok | open | 2026-05-01 | 2026-10-25 |
| [#43194](https://github.com/sgl-project/sglang/pull/43194) | [Feat] diffusion: Cosmos3 fp8 bug fix and action generation ... | @kediwu0331 | open | 2026-10-08 | 2026-10-25 |
| [#40957](https://github.com/sgl-project/sglang/pull/40957) | [diffusion] Support MiniMax-H3 disaggregated serving | @AgainstEntropy | open | 2026-09-23 | 2026-10-25 |
| [#43583](https://github.com/sgl-project/sglang/pull/43583) | [diffusion] comfyui: run LTX-2.5 / LTX-2.3 in SGLD integrate... | @niehen6174 | open | 2026-10-10 | 2026-10-25 |
| [#38766](https://github.com/sgl-project/sglang/pull/38766) | [diffusion] Enable rank-local TP checkpoint loading for Mini... | @AgainstEntropy | open | 2026-09-10 | 2026-10-25 |
| [#46426](https://github.com/sgl-project/sglang/pull/46426) | [Perf] [NVIDIA] GLM-5.3-Flash: Add opt-in FP8 for the BF16 K... | @JackChuang | open | 2026-10-25 | 2026-10-25 |
| [#36727](https://github.com/sgl-project/sglang/pull/36727) | [Diffusion] Preserve mapped component weights during low-mem... | @kevin-mii | open | 2026-08-27 | 2026-10-25 |
| [#40509](https://github.com/sgl-project/sglang/pull/40509) | [NPU] Add startup, checkpoint, chat-template, radix-backend,... | @McZyWu | open | 2026-09-21 | 2026-10-25 |
| [#46057](https://github.com/sgl-project/sglang/pull/46057) | [Fix] diffusion/server: Clean up rejected and cancelled vide... | @mickqian | open | 2026-10-23 | 2026-10-25 |
| [#46154](https://github.com/sgl-project/sglang/pull/46154) | [Fix] diffusion/serving: Reclaim abandoned shared-memory rep... | @mickqian | open | 2026-10-23 | 2026-10-25 |
| [#46425](https://github.com/sgl-project/sglang/pull/46425) | [Refactor] diffusion: Move the Nomas segment KV cache under ... | @niehen6174 | open | 2026-10-25 | 2026-10-25 |
| [#34502](https://github.com/sgl-project/sglang/pull/34502) | [ROCm] Fuse per-token activation quant into RMSNorm for per-... | @Emmanuel0612 | open | 2026-08-12 | 2026-10-25 |
| [#46124](https://github.com/sgl-project/sglang/pull/46124) | [Feat] diffusion: add Hy-Nomas offline and realtime support | @niehen6174 | merged | 2026-10-23 | 2026-10-25 |
| [#45556](https://github.com/sgl-project/sglang/pull/45556) | [Feat] disagg: Admit the DeepSeek-V4 paged KV layout in the ... | @alphabetc1 | open | 2026-10-21 | 2026-10-25 |
| [#44230](https://github.com/sgl-project/sglang/pull/44230) | [Fix] auth: Warn when ordinary --api-key also unlocks ADMIN_... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#44295](https://github.com/sgl-project/sglang/pull/44295) | [Fix] auth: Require admin API key for flush_cache and LoRA e... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#44242](https://github.com/sgl-project/sglang/pull/44242) | [Fix] auth: Require admin API key for HiCache clear and remo... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#44264](https://github.com/sgl-project/sglang/pull/44264) | [Refactor] attention: TRTLLMHAAttnBackend inherits from Atte... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#44270](https://github.com/sgl-project/sglang/pull/44270) | [Fix] auth: Require admin API key for weight update endpoint... | @bantianyue | open | 2026-10-14 | 2026-10-25 |
| [#46388](https://github.com/sgl-project/sglang/pull/46388) | [Refactor] linker: Use dedicated configuration throughout li... | @alphabetc1 | open | 2026-10-25 | 2026-10-25 |
| [#45750](https://github.com/sgl-project/sglang/pull/45750) | [wip][Feature] add eagle4 spec decode | @HF-001 | open | 2026-10-22 | 2026-10-25 |
| [#46031](https://github.com/sgl-project/sglang/pull/46031) | [Chore] processor: use typed api output | @sagearc | merged | 2026-10-23 | 2026-10-25 |
| [#45751](https://github.com/sgl-project/sglang/pull/45751) | [Feat] moe: Integrate EvenMoE expert placement and replica r... | @xutizhou | open | 2026-10-22 | 2026-10-25 |
| [#46365](https://github.com/sgl-project/sglang/pull/46365) | [Fix] deepseek-v4: Complete the MoE output locally when the ... | @wenscarl | merged | 2026-10-25 | 2026-10-25 |
| [#46423](https://github.com/sgl-project/sglang/pull/46423) | [Feat] disaggregation: Verify the KV checksum under a decode... | @ShangmingCai | open | 2026-10-25 | 2026-10-25 |
| [#46085](https://github.com/sgl-project/sglang/pull/46085) | [CI] [AMD] pr-test: Move large-model and perf tests from AMD... | @michaelzhang-ai | merged | 2026-10-23 | 2026-10-25 |
| [#45254](https://github.com/sgl-project/sglang/pull/45254) | [Feat] kernels: Add Beam fused ops, router GEMMs and all-red... | @Jiminator | open | 2026-10-19 | 2026-10-25 |
| [#39729](https://github.com/sgl-project/sglang/pull/39729) | [Fix] disaggregation: Clean-up and optimize the KV checksum ... | @ShangmingCai | merged | 2026-09-16 | 2026-10-25 |
| [#41701](https://github.com/sgl-project/sglang/pull/41701) | [Fix] [AMD] mamba: Keep a chunked prefill cut on the mamba c... | @chien-an-chen | open | 2026-09-29 | 2026-10-25 |
| [#45936](https://github.com/sgl-project/sglang/pull/45936) | [Feat] [AMD] minimax: Support MiniMax-M3.1-Flash on gfx950 w... | @kevin-mii | open | 2026-10-23 | 2026-10-25 |
| [#44287](https://github.com/sgl-project/sglang/pull/44287) | [Feat] simulator: Support closed-loop agentic workloads | @Jeff010101 | draft | 2026-10-14 | 2026-10-25 |
| [#46139](https://github.com/sgl-project/sglang/pull/46139) | [Feat] msa: Add MSA-v1 decode and NVFP4 KV cache kernels | @ispobock | merged | 2026-10-23 | 2026-10-25 |
| [#46138](https://github.com/sgl-project/sglang/pull/46138) | [Fix] dp-attention: Align prefill graph buckets and decode p... | @ispobock | merged | 2026-10-23 | 2026-10-25 |
| [#46325](https://github.com/sgl-project/sglang/pull/46325) | [Perf] [AMD] deterministic: Use a fixed-order two-stage all-... | @aarnetalman | open | 2026-10-24 | 2026-10-25 |
| [#41879](https://github.com/sgl-project/sglang/pull/41879) | [Perf] [AMD] Qwen3.5/Qwen3.8: Opt-in AITER FlyDSL causal con... | @amd-nprotaso | open | 2026-09-30 | 2026-10-25 |
| [#46366](https://github.com/sgl-project/sglang/pull/46366) | [Perf] [AMD] diffusion: Route large BF16 linears to the FlyD... | @yichiche | open | 2026-10-25 | 2026-10-25 |
| [#45733](https://github.com/sgl-project/sglang/pull/45733) | [Perf] diffusion/preprocess: Extend exact GPU input processi... | @mickqian | merged | 2026-10-22 | 2026-10-25 |
| [#43788](https://github.com/sgl-project/sglang/pull/43788) | [Fix] [AMD] deterministic: Bypass AITER GEMM and MoE in dete... | @aarnetalman | open | 2026-10-12 | 2026-10-25 |
| [#46111](https://github.com/sgl-project/sglang/pull/46111) | [Perf] diffusion: Vectorize the LTX-2 Q/K RMSNorm + split-Ro... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#46120](https://github.com/sgl-project/sglang/pull/46120) | [Fix] diffusion/disaggregation: Isolate malformed request an... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#46228](https://github.com/sgl-project/sglang/pull/46228) | [Perf] diffusion: Fuse Wan's q/k RMSNorm with its interleave... | @mickqian | merged | 2026-10-24 | 2026-10-25 |
| [#46236](https://github.com/sgl-project/sglang/pull/46236) | [Fix] [AMD] dsv4.1: Fix the V4.1 k-norm-rope store build on ... | @kevin-mii | open | 2026-10-24 | 2026-10-25 |
| [#45752](https://github.com/sgl-project/sglang/pull/45752) | [Perf] QSA: Optimize the prefill indexer gather | @Shunkangz | merged | 2026-10-22 | 2026-10-25 |
| [#45257](https://github.com/sgl-project/sglang/pull/45257) | [Feat] parser: Add Beam reasoning, tool calls and response t... | @Jiminator | merged | 2026-10-19 | 2026-10-25 |
| [#46179](https://github.com/sgl-project/sglang/pull/46179) | [Perf] dsa: Overlap CP KV gather with indexer computation | @Fridge003 | merged | 2026-10-23 | 2026-10-25 |
| [#46330](https://github.com/sgl-project/sglang/pull/46330) | [Feat] spec: Support CUDA attention DP for DFlash and DFlash... | @ch-wan | merged | 2026-10-24 | 2026-10-25 |
| [#46290](https://github.com/sgl-project/sglang/pull/46290) | [Refactor] spec: Resolve draft parallel placement from model... | @ch-wan | merged | 2026-10-24 | 2026-10-25 |
| [#44676](https://github.com/sgl-project/sglang/pull/44676) | [Feat] dflash: Serve SpecForge MLA drafts through the target... | @maocheng23 | open | 2026-10-16 | 2026-10-25 |
| [#45540](https://github.com/sgl-project/sglang/pull/45540) | [Perf] [AMD] layernorm: Use torch rms_norm in the HIP fallba... | @twoask | open | 2026-10-21 | 2026-10-25 |
| [#46327](https://github.com/sgl-project/sglang/pull/46327) | [Perf] [AMD] unquant: Pad gfx11 linear and lm_head weight ro... | @twoask | open | 2026-10-24 | 2026-10-25 |
| [#46362](https://github.com/sgl-project/sglang/pull/46362) | [Fix] disaggregation: Gate the decode retraction host-pool d... | @alexnails | draft | 2026-10-25 | 2026-10-25 |
| [#46137](https://github.com/sgl-project/sglang/pull/46137) | [Feat] layer-boundary: Fuse TP all-reduce, residual add and ... | @ispobock | merged | 2026-10-23 | 2026-10-25 |
| [#46135](https://github.com/sgl-project/sglang/pull/46135) | [Perf] minimax-sparse: Speed up MiniMax-M3 sparse attention ... | @ispobock | merged | 2026-10-23 | 2026-10-25 |
| [#46260](https://github.com/sgl-project/sglang/pull/46260) | [Fix] sgl-router: Bump tokio for RUSTSEC-2026-0386 | @sherlockwu | merged | 2026-10-24 | 2026-10-25 |
| [#40595](https://github.com/sgl-project/sglang/pull/40595) | [Feat] unified-cache: Support out-of-tree external linkers | @maobaolong | merged | 2026-09-21 | 2026-10-25 |
| [#44565](https://github.com/sgl-project/sglang/pull/44565) | [Perf] [AMD] Qwen3-Next: reach the Gluon TP4 AR+norm+quant k... | @rbrugaro-amd | open | 2026-10-15 | 2026-10-25 |
| [#45065](https://github.com/sgl-project/sglang/pull/45065) | [Fix] diffusion: Reject requests and report unhealthy after ... | @Alex-Wengg | open | 2026-10-19 | 2026-10-25 |
| [#44020](https://github.com/sgl-project/sglang/pull/44020) | [Fix] chat-template: Pass return_dict=False to apply_chat_te... | @zijiexia | merged | 2026-10-13 | 2026-10-25 |
| [#45076](https://github.com/sgl-project/sglang/pull/45076) | [Fix] hicache: Count the EAGLE bigram boundary token in PD d... | @alphabetc1 | merged | 2026-10-19 | 2026-10-25 |
| [#43005](https://github.com/sgl-project/sglang/pull/43005) | fix(openai): preserve zero cached tokens when cache reportin... | @ai-jz | merged | 2026-10-07 | 2026-10-25 |
| [#45110](https://github.com/sgl-project/sglang/pull/45110) | [Fix] kimi-k3: Avoid vision attention child-name collisions | @rumitdesai | merged | 2026-10-19 | 2026-10-25 |
| [#46044](https://github.com/sgl-project/sglang/pull/46044) | [Fix] diffusion/zimage: Stop serving a previous request's Ro... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#46025](https://github.com/sgl-project/sglang/pull/46025) | [Fix] diffusion: Fail closed after local worker loss or mult... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#46047](https://github.com/sgl-project/sglang/pull/46047) | [Perf] diffusion: Remove per-step host syncs and uploads in ... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#45425](https://github.com/sgl-project/sglang/pull/45425) | [CI] [AMD] pr-test-amd: Cut redundant shards, tag fetches an... | @TwelveNights | open | 2026-10-20 | 2026-10-25 |
| [#46156](https://github.com/sgl-project/sglang/pull/46156) | [Fix] diffusion/openai: Bound job lists and complete cursor ... | @mickqian | merged | 2026-10-23 | 2026-10-25 |
| [#46264](https://github.com/sgl-project/sglang/pull/46264) | [Refactor] diffusion/linear: Share segmented row-parallel we... | @mickqian | merged | 2026-10-24 | 2026-10-25 |
| [#39595](https://github.com/sgl-project/sglang/pull/39595) | [Feat] [AMD] linear-attn: Add FlyDSL GDN prefill backend | @chuyeh | open | 2026-09-15 | 2026-10-25 |
| [#45196](https://github.com/sgl-project/sglang/pull/45196) | [Perf] [AMD] Qwen3.8: Serve QSA decode with AITER's fused Fl... | @amd-nprotaso | open | 2026-10-19 | 2026-10-24 |
| [#46322](https://github.com/sgl-project/sglang/pull/46322) | [Fix] deepseek: Import kernel_api_logging from sglang.kernel... | @znzryb | open | 2026-10-24 | 2026-10-24 |
| [#46321](https://github.com/sgl-project/sglang/pull/46321) | [Fix] [AMD] diffusion: Route large-M bf16 linears on gfx1250... | @yichiche | open | 2026-10-24 | 2026-10-24 |
| [#46304](https://github.com/sgl-project/sglang/pull/46304) | [Feat] jit: Add SGLANG_JIT_DISABLE_FAST_MATH to drop --use_f... | @KitKyoD | open | 2026-10-24 | 2026-10-24 |
| [#45713](https://github.com/sgl-project/sglang/pull/45713) | [Perf] [AMD] kda(Kimi-delta-attention) : Use a HIP fused dec... | @Monstertail | open | 2026-10-22 | 2026-10-24 |
| [#45710](https://github.com/sgl-project/sglang/pull/45710) | [Perf] [AMD] kda(Kimi-delta-attention) : Use a HIP chunked-p... | @Monstertail | open | 2026-10-22 | 2026-10-24 |
| [#44435](https://github.com/sgl-project/sglang/pull/44435) | [Feat] [NPU] multimodal: Add opt-in cross-request ViT image ... | @Suxing224 | open | 2026-10-15 | 2026-10-24 |
| [#43465](https://github.com/sgl-project/sglang/pull/43465) | [Feat] [AMD] DeepSeek-v4.1: Support prefill context parallel | @At1a8 | open | 2026-10-10 | 2026-10-24 |
| [#46159](https://github.com/sgl-project/sglang/pull/46159) | [Perf] batch-invariant: Fused residual add + RMSNorm kernel | @aarnetalman | open | 2026-10-23 | 2026-10-24 |
| [#46161](https://github.com/sgl-project/sglang/pull/46161) | [Fix] [AMD] rotary: Pass a query-dtype cos_sin_cache to the ... | @rbrugaro-amd | merged | 2026-10-23 | 2026-10-24 |
| [#42119](https://github.com/sgl-project/sglang/pull/42119) | [Feat] [AMD] quantization: enable GPTQ and AutoRound INT4 ch... | @clintg6 | open | 2026-10-01 | 2026-10-24 |
| [#45144](https://github.com/sgl-project/sglang/pull/45144) | [Feat] spec: Let out-of-tree platforms provide their own spe... | @AgainstEntropy | merged | 2026-10-19 | 2026-10-24 |
| [#46151](https://github.com/sgl-project/sglang/pull/46151) | [Fix] [AMD] dsv4.1: Fix decode graph capture with quantized ... | @kevin-mii | merged | 2026-10-23 | 2026-10-24 |
| [#45728](https://github.com/sgl-project/sglang/pull/45728) | [Test] [AMD] deepseek-v4.1: Give the encoder-replay test's r... | @michaelzhang-ai | merged | 2026-10-22 | 2026-10-23 |
| [#45941](https://github.com/sgl-project/sglang/pull/45941) | [Perf] dsv4: Replay the V4.1 prefill graph past 16K contexts... | @hnyls2002 | merged | 2026-10-23 | 2026-10-23 |
| [#41401](https://github.com/sgl-project/sglang/pull/41401) | [Perf] [XPU] diffusion: Use the AOT SYCL fused residual-norm... | @ckvermaAI | merged | 2026-09-27 | 2026-10-23 |
| [#45893](https://github.com/sgl-project/sglang/pull/45893) | [Perf] dsv41: Serve token-interleaved V4.1 KV caches with sg... | @DarkSharpness | merged | 2026-10-22 | 2026-10-23 |
| [#45407](https://github.com/sgl-project/sglang/pull/45407) | [Fix] [NVIDIA] deepseek-v4.1: Fix the breakable prefill CUDA... | @JohnZhao01 | merged | 2026-10-20 | 2026-10-23 |
| [#45676](https://github.com/sgl-project/sglang/pull/45676) | [Fix] [AMD] kernels: Import the HIP launch helpers from jit.... | @michaelzhang-ai | merged | 2026-10-21 | 2026-10-22 |
| [#45879](https://github.com/sgl-project/sglang/pull/45879) | [Perf] engram: Read host-table rows in address order on GPUs... | @hnyls2002 | merged | 2026-10-22 | 2026-10-22 |
| [#45783](https://github.com/sgl-project/sglang/pull/45783) | [Refactor] dsv4: Keep only the two-level V4.1 indexer in the... | @hnyls2002 | merged | 2026-10-22 | 2026-10-22 |
| [#45507](https://github.com/sgl-project/sglang/pull/45507) | [Test] [AMD] deepseek-v4.1: Fix the HIP breakable-graph unit... | @michaelzhang-ai | merged | 2026-10-21 | 2026-10-22 |
| [#41564](https://github.com/sgl-project/sglang/pull/41564) | [Fix] [NPU] qwen: adapt pcp-v2 | @gjsheu | merged | 2026-09-28 | 2026-10-22 |
| [#45726](https://github.com/sgl-project/sglang/pull/45726) | [Perf] dsv41: Fuse request-window layout construction | @alphabetc1 | merged | 2026-10-22 | 2026-10-22 |
| [#45699](https://github.com/sgl-project/sglang/pull/45699) | [Fix] dsv4: Never read attention metadata for idle SWA store... | @hnyls2002 | merged | 2026-10-22 | 2026-10-22 |
| [#42976](https://github.com/sgl-project/sglang/pull/42976) | [Fix] [NPU] mla-pool: DCP allocator page and index-K bound, ... | @TamirBaydasov | merged | 2026-10-07 | 2026-10-22 |
| [#45419](https://github.com/sgl-project/sglang/pull/45419) | [Fix] [Apple] mlx: Give the stub model a shared-expert layou... | @ItsOdeLeo | merged | 2026-10-20 | 2026-10-21 |
| [#45579](https://github.com/sgl-project/sglang/pull/45579) | [Perf] dsv4: Compute request-window history rows once per ba... | @hnyls2002 | merged | 2026-10-21 | 2026-10-21 |
| [#45519](https://github.com/sgl-project/sglang/pull/45519) | [CI] [AMD] disaggregation: Register Mooncake KV buffers with... | @michaelzhang-ai | merged | 2026-10-21 | 2026-10-21 |
| [#40861](https://github.com/sgl-project/sglang/pull/40861) | [Feat] [Intel] disaggregation: Support XPU for staging-buffe... | @kpjeeja | merged | 2026-09-23 | 2026-10-21 |
| [#45380](https://github.com/sgl-project/sglang/pull/45380) | [AMD] Build ROCm AOT kernels with -std=c++20 | @akao-amd | merged | 2026-10-20 | 2026-10-21 |
| [#45546](https://github.com/sgl-project/sglang/pull/45546) | [Fix] [AMD] mono-kernel: Update sgl-amd-mono version | @1am9trash | merged | 2026-10-21 | 2026-10-21 |
| [#43826](https://github.com/sgl-project/sglang/pull/43826) | [Feat] platform: Add initial T-HEAD SAIL platform support [2... | @Vinsmoke86 | merged | 2026-10-12 | 2026-10-21 |
| [#45329](https://github.com/sgl-project/sglang/pull/45329) | [Fix] [AMD] docker: Build Triton from source for ROCm 10.1 g... | @yctseng0211 | merged | 2026-10-20 | 2026-10-21 |
| [#32745](https://github.com/sgl-project/sglang/pull/32745) | [Fix] [NPU] qwen3.5: Fix dense serving on Ascend 950 | @TallMessiWu | merged | 2026-07-29 | 2026-10-21 |
| [#45480](https://github.com/sgl-project/sglang/pull/45480) | [Fix] [AMD] dsv41: Set moe act to fp8 by default | @1am9trash | merged | 2026-10-21 | 2026-10-21 |
| [#42229](https://github.com/sgl-project/sglang/pull/42229) | [Perf] [AMD] qwen3.5: Fuse activation quant into small-M FP8... | @chuyeh | merged | 2026-10-02 | 2026-10-21 |
| [#45124](https://github.com/sgl-project/sglang/pull/45124) | [Perf] [AMD] dsv41: faster mHC boundary Triton tile for 96+ ... | @kkHuang-amd | merged | 2026-10-19 | 2026-10-20 |
| [#44994](https://github.com/sgl-project/sglang/pull/44994) | [Refactor] moe: Derive routing inputs from the layer and act... | @ch-wan | merged | 2026-10-18 | 2026-10-20 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-10-25T12:49:24Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#12345](https://github.com/triton-lang/triton/pull/12345) | [AMD][Gluon] Add buffer descriptors and descriptor-based buf... | @antiagainst | open | 2026-10-18 | 2026-10-24 |
| [#12471](https://github.com/triton-lang/triton/pull/12471) | [AMD] Build llvm @05e432a for CodeGen | @AlexAUT | merged | 2026-10-23 | 2026-10-24 |
| [#12474](https://github.com/triton-lang/triton/pull/12474) | [AMD] Enable Remaining GFX1250-strict WMMA Instructions | @amirumoAMD | open | 2026-10-23 | 2026-10-24 |
| [#12480](https://github.com/triton-lang/triton/pull/12480) | [AMD] Enable IEEE maximum/minimum for RDNA4 | @antiagainst | merged | 2026-10-24 | 2026-10-24 |
| [#12478](https://github.com/triton-lang/triton/pull/12478) | [AMD][GLUON] Deprecate load_shared_relaxed | @borontion | open | 2026-10-23 | 2026-10-24 |
| [#12477](https://github.com/triton-lang/triton/pull/12477) | [AMD] Fix WMMA operands whose kWidth spans several instructi... | @antiagainst | open | 2026-10-23 | 2026-10-23 |
| [#12371](https://github.com/triton-lang/triton/pull/12371) | [AMD] Fix LLVM symbol clash in TRITON_EXT_ENABLED builds | @RolaoDenthu | open | 2026-10-19 | 2026-10-23 |
| [#12273](https://github.com/triton-lang/triton/pull/12273) | [AMD][ConSan] Handle mixed-direction partial async-copy wait... | @PMylon | open | 2026-10-13 | 2026-10-23 |
| [#12210](https://github.com/triton-lang/triton/pull/12210) | [AMD][ConSan] Improve async-copy waits and load/store tracki... | @PMylon | merged | 2026-10-09 | 2026-10-23 |
| [#12423](https://github.com/triton-lang/triton/pull/12423) | [AMD] Schedule async-wait barriers before potential global-m... | @jungpark-mlir | merged | 2026-10-21 | 2026-10-23 |
| [#12122](https://github.com/triton-lang/triton/pull/12122) | [AMD] Add MIR entry points to the standalone AMD code genera... | @tyb0807 | open | 2026-10-05 | 2026-10-23 |
| [#12286](https://github.com/triton-lang/triton/pull/12286) | [AMD][mdmbar] Prove slots of loop-carried views of multi-buf... | @yanxuer-999 | draft | 2026-10-14 | 2026-10-23 |
| [#12441](https://github.com/triton-lang/triton/pull/12441) | [Release][Cherry-Pick] [AMD][BACKEND] Ignore unit dims when ... | @naromero77amd | merged | 2026-10-22 | 2026-10-22 |
| [#12331](https://github.com/triton-lang/triton/pull/12331) | [AMD][BACKEND] Ignore unit dims when checking the shared ord... | @AlexAUT | merged | 2026-10-16 | 2026-10-22 |
| [#12391](https://github.com/triton-lang/triton/pull/12391) | [AMD] Use new AMD CodeGen build and update test | @antiagainst | merged | 2026-10-20 | 2026-10-21 |
| [#12410](https://github.com/triton-lang/triton/pull/12410) | [AMD] Drop core LLVM workarounds after the LLVM bump | @antiagainst | merged | 2026-10-21 | 2026-10-21 |
| [#12362](https://github.com/triton-lang/triton/pull/12362) | [AMD] Fix AMD codegen rebuilds after LLVM dependency updates | @willghatch | open | 2026-10-19 | 2026-10-20 |
| [#12238](https://github.com/triton-lang/triton/pull/12238) | [AMD][CI] rocjitsu bump | @sriakrish | merged | 2026-10-13 | 2026-10-20 |
| [#12342](https://github.com/triton-lang/triton/pull/12342) | [AMD] Always insert a workgroup barrier before cluster barri... | @borontion | merged | 2026-10-17 | 2026-10-20 |
| [#12083](https://github.com/triton-lang/triton/pull/12083) | Catch LLVM diagnostic and raise Python exception in both Nvi... | @woct0rdho | open | 2026-10-03 | 2026-10-20 |
| [#12382](https://github.com/triton-lang/triton/pull/12382) | [AMD] Add option for per-kernel clopt control | @antiagainst | merged | 2026-10-20 | 2026-10-20 |
| [#11880](https://github.com/triton-lang/triton/pull/11880) | [AMD] Compute the HIP pointer-range bit natively | @lijinpei-amd | draft | 2026-09-20 | 2026-10-20 |
| [#12356](https://github.com/triton-lang/triton/pull/12356) | [QoL] Extend llvm build targets to support building AMD code... | @AlexAUT | open | 2026-10-19 | 2026-10-20 |
| [#12115](https://github.com/triton-lang/triton/pull/12115) | [AMD] Use native F8F6F4 MFMAs when scales are absent | @dhernandez0 | draft | 2026-10-05 | 2026-10-20 |
| [#12373](https://github.com/triton-lang/triton/pull/12373) | [AMD] Move CU-mode barrier test into its own file | @mgehre-amd | merged | 2026-10-19 | 2026-10-20 |
| [#12034](https://github.com/triton-lang/triton/pull/12034) | [GSan] Support symmetric memory allocator on AMD (HIP) | @amgddm | draft | 2026-09-29 | 2026-10-19 |
| [#11968](https://github.com/triton-lang/triton/pull/11968) | [AMD] Add a pre-bound HIP kernel launcher | @adityakankariya | draft | 2026-09-25 | 2026-10-19 |
| [#12325](https://github.com/triton-lang/triton/pull/12325) | [AMD] Add native JIT cache dispatch for HIP | @adityakankariya | draft | 2026-10-15 | 2026-10-19 |
| [#12324](https://github.com/triton-lang/triton/pull/12324) | [AMD]Support Multi-CTA in TDM Scatter | @knwng | merged | 2026-10-15 | 2026-10-16 |
| [#12320](https://github.com/triton-lang/triton/pull/12320) | [DRAFT][AMD][ConSan] Support async-copy mbarrier arrive | @PMylon | draft | 2026-10-15 | 2026-10-15 |
| [#12233](https://github.com/triton-lang/triton/pull/12233) | [AMD] Support scheduling, LDS prefetch and TDM fusion for sl... | @plognjen | draft | 2026-10-12 | 2026-10-15 |
| [#12156](https://github.com/triton-lang/triton/pull/12156) | [AMD] Use explicit fma in mxfp FA example | @borontion | merged | 2026-10-07 | 2026-10-15 |
| [#10824](https://github.com/triton-lang/triton/pull/10824) | [AMD] Update mxfp fa example | @borontion | merged | 2026-07-09 | 2026-10-15 |
| [#11178](https://github.com/triton-lang/triton/pull/11178) | [AMD] Support warp-based split-k for mxfp fa on gfx1250 | @borontion | merged | 2026-08-05 | 2026-10-15 |
| [#12284](https://github.com/triton-lang/triton/pull/12284) | [AMD][Backend] Skip volatile loads in buffer-op conversion | @sriakrish | merged | 2026-10-14 | 2026-10-14 |
| [#12269](https://github.com/triton-lang/triton/pull/12269) | [AMD] NFC: Split stream-op builders and LDS encoding out of ... | @plognjen | merged | 2026-10-13 | 2026-10-14 |
| [#12230](https://github.com/triton-lang/triton/pull/12230) | [AMD] NFC: Simplify MFMA/WMMA instruction selection | @antiagainst | merged | 2026-10-11 | 2026-10-14 |
| [#12279](https://github.com/triton-lang/triton/pull/12279) | [AMD] NFC: Rename gfx1250 symbols and definitions to CDNA5 | @antiagainst | merged | 2026-10-14 | 2026-10-14 |
| [#11911](https://github.com/triton-lang/triton/pull/11911) | [AMD] Allow the tagged barrier lowering on RDNA in CU mode | @mgehre-amd | merged | 2026-09-22 | 2026-10-13 |
| [#12171](https://github.com/triton-lang/triton/pull/12171) | [AMD][FpSan] Support scaled FP4 and FP8 downcasts | @kelesvol | open | 2026-10-08 | 2026-10-13 |
| [#11904](https://github.com/triton-lang/triton/pull/11904) | [AMD] Swap floating-point values as integers in buffer atomi... | @LiRunGuo | merged | 2026-09-22 | 2026-10-13 |
| [#12133](https://github.com/triton-lang/triton/pull/12133) | [AMD] Allow chain-dot detection across one level of scf.if | @amd-sonsingh | open | 2026-10-05 | 2026-10-12 |
| [#11909](https://github.com/triton-lang/triton/pull/11909) | [AMD][BACKEND] Emit packed scaled_upcast layout for dot deco... | @AlexAUT | merged | 2026-09-22 | 2026-10-12 |
| [#12229](https://github.com/triton-lang/triton/pull/12229) | [AMD] MFMA scheduler: run on gfx942, with a CDNA3 LDS model | @zhanglx13 | merged | 2026-10-11 | 2026-10-11 |
| [#12218](https://github.com/triton-lang/triton/pull/12218) | [AMD] Remove the ScalarizePackedFOps LLVM pass | @zhanglx13 | merged | 2026-10-10 | 2026-10-11 |
| [#12220](https://github.com/triton-lang/triton/pull/12220) | [AMD] NFC: Tidy up comments, header guards, and declarations | @antiagainst | merged | 2026-10-10 | 2026-10-11 |
| [#12216](https://github.com/triton-lang/triton/pull/12216) | [AMD][Proton] Use llvm.amdgcn.s.getreg for hwreg reads | @antiagainst | merged | 2026-10-10 | 2026-10-10 |
| [#11655](https://github.com/triton-lang/triton/pull/11655) | [AMD] Widen InstCombine's SimplifyDemandedVectorElts walk de... | @Dewei-Wang-sh | open | 2026-09-09 | 2026-10-10 |
| [#12209](https://github.com/triton-lang/triton/pull/12209) | [AMD] Add an opt-in MFMA scheduler for gfx950 | @zhanglx13 | merged | 2026-10-09 | 2026-10-10 |
| [#12211](https://github.com/triton-lang/triton/pull/12211) | [AMD] Fix TDM copies to and from shared memory subviews | @justinrosner | draft | 2026-10-09 | 2026-10-09 |
| [#12177](https://github.com/triton-lang/triton/pull/12177) | [AMD] Add FP16-accumulate WMMA support for WMMAv3 | @pabloantoniom | draft | 2026-10-08 | 2026-10-09 |
| [#10254](https://github.com/triton-lang/triton/pull/10254) | [AMD] Add LLVM flag passthrough for AMDGPU codegen | @raikonenfnu | open | 2026-05-07 | 2026-10-09 |
| [#12172](https://github.com/triton-lang/triton/pull/12172) | [AMD] Derive pipeliner buffer slots from the induction varia... | @dhernandez0 | draft | 2026-10-08 | 2026-10-09 |
| [#12203](https://github.com/triton-lang/triton/pull/12203) | [AMD] CanonicalizePointers: normalize mixed pointer represen... | @he-yufeng | open | 2026-10-09 | 2026-10-09 |
| [#12199](https://github.com/triton-lang/triton/pull/12199) | [TUTORIAL] Enable FP8 matmul on supported AMD GPUs | @zihaomu | open | 2026-10-09 | 2026-10-09 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-10-09 |
| [#12162](https://github.com/triton-lang/triton/pull/12162) | [AMD] Switch MI250 jobs to amd-gfx90a | @sriakrish | merged | 2026-10-07 | 2026-10-09 |
| [#12167](https://github.com/triton-lang/triton/pull/12167) | [AMD] Saturate infinities in RDNA4 HW OCP FP8 downcasts | @antiagainst | merged | 2026-10-08 | 2026-10-08 |
| [#12159](https://github.com/triton-lang/triton/pull/12159) | [AMD] Keep shared order in CoalesceAsyncCopy when the src or... | @he-yufeng | open | 2026-10-07 | 2026-10-07 |
| [#12149](https://github.com/triton-lang/triton/pull/12149) | [AMD][Gluon] Add CDNA5 WMMA issue mode control | @nithinsubbiah | draft | 2026-10-06 | 2026-10-07 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-10-25T12:49:27Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5423](https://github.com/ROCm/AMDMIGraphX/pull/5423) | Add ONNX parser for the CausalConvWithState contrib op | @pfultz2 | open | 2026-10-22 | 2026-10-25 |
| [#5335](https://github.com/ROCm/AMDMIGraphX/pull/5335) | Channels-last support and register/vector reuse for the chan... | @pfultz2 | open | 2026-09-29 | 2026-10-24 |
| [#5429](https://github.com/ROCm/AMDMIGraphX/pull/5429) | Prefer moving a unary op up to a fusable producer in simplif... | @pfultz2 | open | 2026-10-23 | 2026-10-24 |
| [#5424](https://github.com/ROCm/AMDMIGraphX/pull/5424) | Enable cppcoreguidelines-avoid-const-or-ref-data-members tid... | @pfultz2 | open | 2026-10-22 | 2026-10-24 |
| [#5340](https://github.com/ROCm/AMDMIGraphX/pull/5340) | Split_sym_dim prefill+decode support | @turneram | open | 2026-09-30 | 2026-10-24 |
| [#5430](https://github.com/ROCm/AMDMIGraphX/pull/5430) | Forward slices spanning several concat segments through resh... | @pfultz2 | open | 2026-10-23 | 2026-10-24 |
| [#5414](https://github.com/ROCm/AMDMIGraphX/pull/5414) | Share loaded modules between identical code objects | @pfultz2 | open | 2026-10-20 | 2026-10-24 |
| [#5432](https://github.com/ROCm/AMDMIGraphX/pull/5432) | Bump certifi from 2024.7.4 to 2026.10.19 in /docs/sphinx | @dependabot[bot] | open | 2026-10-24 | 2026-10-24 |
| [#5431](https://github.com/ROCm/AMDMIGraphX/pull/5431) | Improve select_module perf | @shivadbhavsar | open | 2026-10-23 | 2026-10-23 |
| [#5417](https://github.com/ROCm/AMDMIGraphX/pull/5417) | Fuse the attention-sink gate into the attention epilogue and... | @pfultz2 | open | 2026-10-21 | 2026-10-23 |
| [#5274](https://github.com/ROCm/AMDMIGraphX/pull/5274) | Winograd fp16 gfx11 | @pfultz2 | open | 2026-09-17 | 2026-10-23 |
| [#5405](https://github.com/ROCm/AMDMIGraphX/pull/5405) | Gate MLIR attention fusion on profitability and enable it by... | @pfultz2 | open | 2026-10-16 | 2026-10-23 |
| [#5407](https://github.com/ROCm/AMDMIGraphX/pull/5407) | Zero-copy gather literals and cost-aware staging in write_li... | @pfultz2 | open | 2026-10-17 | 2026-10-23 |
| [#5373](https://github.com/ROCm/AMDMIGraphX/pull/5373) | docs: update installation docs with TheRock packages | @peterjunpark | open | 2026-10-09 | 2026-10-23 |
| [#5394](https://github.com/ROCm/AMDMIGraphX/pull/5394) | Split/symbolic reshape parsing | @CharlieL7 | draft | 2026-10-13 | 2026-10-23 |
| [#5392](https://github.com/ROCm/AMDMIGraphX/pull/5392) | Support bounded dynamic slice outputs | @CharlieL7 | open | 2026-10-13 | 2026-10-23 |
| [#5389](https://github.com/ROCm/AMDMIGraphX/pull/5389) | Add simplify symbolic dimensions pass | @CharlieL7 | open | 2026-10-13 | 2026-10-23 |
| [#5384](https://github.com/ROCm/AMDMIGraphX/pull/5384) | Update handling for empty tensors | @CharlieL7 | open | 2026-10-13 | 2026-10-23 |
| [#5393](https://github.com/ROCm/AMDMIGraphX/pull/5393) | Evaluate compound symbolic shape expressions | @CharlieL7 | open | 2026-10-13 | 2026-10-23 |
| [#5397](https://github.com/ROCm/AMDMIGraphX/pull/5397) | update parsers to support LLMs | @shivadbhavsar | open | 2026-10-15 | 2026-10-23 |
| [#5422](https://github.com/ROCm/AMDMIGraphX/pull/5422) | Add Vishal and Anil as codeowners | @asparkhi | open | 2026-10-22 | 2026-10-23 |
| [#5428](https://github.com/ROCm/AMDMIGraphX/pull/5428) | Onnxruntime Weekly Sync 2026-10-23 | @github-actions[bot] | open | 2026-10-23 | 2026-10-23 |
| [#5312](https://github.com/ROCm/AMDMIGraphX/pull/5312) | Dynamic ROIAlign  | @CharlieL7 | open | 2026-09-24 | 2026-10-23 |
| [#5426](https://github.com/ROCm/AMDMIGraphX/pull/5426) | Resolve channels_auto convolution layout to channels_first o... | @ppetrovi-amd | open | 2026-10-23 | 2026-10-23 |
| [#5425](https://github.com/ROCm/AMDMIGraphX/pull/5425) | Prevent FP16 GroupNorm overflow with float intermediates | @royzhang-amd | open | 2026-10-23 | 2026-10-23 |
| [#5413](https://github.com/ROCm/AMDMIGraphX/pull/5413) | Preserve arg-reduction axes during reshape fusion | @royzhang-amd | open | 2026-10-20 | 2026-10-23 |
| [#5412](https://github.com/ROCm/AMDMIGraphX/pull/5412) | Apply MatMulInteger zero-point corrections in int32 | @royzhang-amd | open | 2026-10-20 | 2026-10-23 |
| [#5388](https://github.com/ROCm/AMDMIGraphX/pull/5388) | Support compatible symbolic dimensions | @CharlieL7 | open | 2026-10-13 | 2026-10-22 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#5419](https://github.com/ROCm/AMDMIGraphX/pull/5419) | Sink the view chain onto pointwise inputs so flat-layout kv-... | @pfultz2 | open | 2026-10-21 | 2026-10-22 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): replace popen shell with posix_spawn | @causten | open | 2026-08-21 | 2026-10-22 |
| [#5351](https://github.com/ROCm/AMDMIGraphX/pull/5351) | Fix invalid const attribute on generated fused reductions | @ahsan-ca | open | 2026-10-05 | 2026-10-22 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-10-21 |
| [#5401](https://github.com/ROCm/AMDMIGraphX/pull/5401) | Support per-channel quantized models with expanded QDQ param... | @royzhang-amd | open | 2026-10-16 | 2026-10-21 |
| [#5161](https://github.com/ROCm/AMDMIGraphX/pull/5161) | Enable fp16 winograd on gfx1151 | @weizhu12-amd | open | 2026-08-21 | 2026-10-16 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-10-15 |
| [#5400](https://github.com/ROCm/AMDMIGraphX/pull/5400) | Support quantized concat in simplify_qdq | @pfultz2 | open | 2026-10-15 | 2026-10-15 |
| [#5366](https://github.com/ROCm/AMDMIGraphX/pull/5366) | Hoist submodule scratch memory into the parent in memory col... | @pfultz2 | open | 2026-10-07 | 2026-10-14 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Support for operators with data-depdendent shape functions | @CharlieL7 | draft | 2026-09-24 | 2026-10-13 |
| [#5377](https://github.com/ROCm/AMDMIGraphX/pull/5377) | Use small_vector | @pfultz2 | draft | 2026-10-12 | 2026-10-12 |
| [#5369](https://github.com/ROCm/AMDMIGraphX/pull/5369) | Claude code review | @pfultz2 | draft | 2026-10-08 | 2026-10-09 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-10-06 |
| [#5281](https://github.com/ROCm/AMDMIGraphX/pull/5281) | Bump soupsieve from 2.8.4 to 2.9 in /docs/sphinx | @dependabot[bot] | open | 2026-09-18 | 2026-10-03 |
| [#5290](https://github.com/ROCm/AMDMIGraphX/pull/5290) | Bump rocm-docs-core from 1.40.2 to 1.41.0 in /docs/sphinx | @dependabot[bot] | open | 2026-09-21 | 2026-10-03 |
| [#5260](https://github.com/ROCm/AMDMIGraphX/pull/5260) | gqa/fuse_attention: attention sinks + sliding-window decode ... | @rlegithub | open | 2026-09-13 | 2026-09-30 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-09-30 |
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
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | open | 2026-09-21 | 2026-09-24 |
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
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | open | 2026-08-30 | 2026-09-01 |
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
| [#5173](https://github.com/ROCm/AMDMIGraphX/pull/5173) | fix(security): pin base image digest and run as jenkins user | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5172](https://github.com/ROCm/AMDMIGraphX/pull/5172) | fix(security): re-verify PR head SHA in performance workflow | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
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
| [#5385](https://github.com/ROCm/AMDMIGraphX/pull/5385) | Update eliminate_convert to also eliminate dynamic shape con... | @CharlieL7 | merged | 2026-10-13 | 2026-10-19 |
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
| [#5038](https://github.com/ROCm/AMDMIGraphX/pull/5038) | Fix gather regression | @TedThemistokleous | merged | 2026-07-06 | 2026-10-06 |
| [#5045](https://github.com/ROCm/AMDMIGraphX/pull/5045) | Fix the unit tests that are broken on develop | @pfultz2 | merged | 2026-07-07 | 2026-10-06 |
| [#5245](https://github.com/ROCm/AMDMIGraphX/pull/5245) | Update NonZero to slice to number of non-zero elements | @CharlieL7 | merged | 2026-09-10 | 2026-10-05 |
| [#5271](https://github.com/ROCm/AMDMIGraphX/pull/5271) | Fuse reduce slices and squeezed epilogues, tile short reduct... | @pfultz2 | merged | 2026-09-16 | 2026-10-05 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | merged | 2026-07-29 | 2026-10-05 |
| [#5349](https://github.com/ROCm/AMDMIGraphX/pull/5349) | Onnxruntime Weekly Sync 2026-10-02 | @github-actions[bot] | merged | 2026-10-02 | 2026-10-05 |
| [#4163](https://github.com/ROCm/AMDMIGraphX/pull/4163) | Improve split reshape | @pfultz2 | merged | 2025-07-23 | 2026-10-04 |
| [#4951](https://github.com/ROCm/AMDMIGraphX/pull/4951) | [AIMIGRAPHX-1082] Decouple OnnxRT from user/local via update... | @TedThemistokleous | merged | 2026-06-10 | 2026-10-04 |
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

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-10-25T12:49:39Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#6912](https://github.com/ROCm/aiter/pull/6912) | [Triton/Gluon] KDA: accept cu_seqlens_cpu, upload varlen met... | @eppaneamd | draft | 2026-10-25 | 2026-10-25 |
| [#6025](https://github.com/ROCm/aiter/pull/6025) | [ASM] [HIP] Tune Qwen3.8 mxfp4 con 32 and 64 with emsort asm | @JohnNikolay84 | open | 2026-09-30 | 2026-10-25 |
| [#5973](https://github.com/ROCm/aiter/pull/5973) | [FlyDSL] Optimize MI308 MoE decoding (3/3) | @luocheng25 | open | 2026-09-30 | 2026-10-25 |
| [#5969](https://github.com/ROCm/aiter/pull/5969) | [CK] [FlyDSL] Introduce FP8 a8w8 gemm kernel with fp32 block... | @LuweiZhou2025 | open | 2026-09-30 | 2026-10-25 |
| [#6410](https://github.com/ROCm/aiter/pull/6410) | Add Kimi-K3 gfx950 A8W8 bpreshuffle tuned configs | @yuychang | open | 2026-10-12 | 2026-10-25 |
| [#6759](https://github.com/ROCm/aiter/pull/6759) | [Triton/Gluon] Retune gfx950 Triton ops that regressed with ... | @yanxuer-999 | draft | 2026-10-21 | 2026-10-25 |
| [#6496](https://github.com/ROCm/aiter/pull/6496) | [Triton/Gluon] [FlyDSL] [gfx950] Add gdn fused prefill kerne... | @amd-nprotaso | open | 2026-10-13 | 2026-10-25 |
| [#6609](https://github.com/ROCm/aiter/pull/6609) | [Triton/Gluon] Gfx1250 flash kda gluon | @Liang-jianhao97 | open | 2026-10-16 | 2026-10-25 |
| [#6911](https://github.com/ROCm/aiter/pull/6911) | [FlyDSL] Preserve FP32 precision in GDN prepare inverse bloc... | @apinge | draft | 2026-10-25 | 2026-10-25 |
| [#6710](https://github.com/ROCm/aiter/pull/6710) | [Triton/Gluon] Add fused_layernorm_indexed_adaln for diffusi... | @klin2024 | open | 2026-10-20 | 2026-10-25 |
| [#6910](https://github.com/ROCm/aiter/pull/6910) | [Triton/Gluon] [Config] Tune gfx1250 Gluon GEMMs for Qwen3.5... | @Boss2002n | open | 2026-10-25 | 2026-10-25 |
| [#6909](https://github.com/ROCm/aiter/pull/6909) | [ASM] [gfx942] Use AI-tuned FP8 blockscale GEMM code objects | @feifei14119 | open | 2026-10-25 | 2026-10-25 |
| [#6908](https://github.com/ROCm/aiter/pull/6908) | [Triton/Gluon] gfx942: A16W4 (bf16 x MXFP4) MoE GEMM with v_... | @ishara0925 | open | 2026-10-25 | 2026-10-25 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-10-25 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [BUG][CK][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-10-25 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] [CI] Add MHA forward tuning scripts and kernel-in... | @huishi-hs | open | 2026-08-26 | 2026-10-25 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-10-25 |
| [#5929](https://github.com/ROCm/aiter/pull/5929) | [Triton/Gluon] gfx950 split-KV 3D attention for head_dim >= ... | @prashant182 | open | 2026-09-29 | 2026-10-25 |
| [#6003](https://github.com/ROCm/aiter/pull/6003) | [Config] DSv4 E=385/topk7 fused MoE: fp8-epilogue decode sta... | @AMD-yanfeiwang | open | 2026-09-30 | 2026-10-25 |
| [#6119](https://github.com/ROCm/aiter/pull/6119) | [HIP] [Bugfix] mxfp4 moe sort skip invalid ids (-1s) | @cagrikymk | open | 2026-10-03 | 2026-10-25 |
| [#6267](https://github.com/ROCm/aiter/pull/6267) | [FlyDSL] [Build] [GEMM] Add optional RDNA3 FlyDSL A8W8 backe... | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-25 |
| [#6665](https://github.com/ROCm/aiter/pull/6665) | [JIT] [Bugfix] Round CK-Tile a8w8 GEMM bf16 outputs to neare... | @siliangchen-amd | open | 2026-10-19 | 2026-10-25 |
| [#6897](https://github.com/ROCm/aiter/pull/6897) | [FlyDSL] [gfx1250] FMHA prefill: support v_hdim 256 | @vgokhale | open | 2026-10-24 | 2026-10-25 |
| [#6637](https://github.com/ROCm/aiter/pull/6637) | [Triton/Gluon]: (ATTN) Add rotating buffers and do_bench_ait... | @rahulbatra85 | draft | 2026-10-17 | 2026-10-25 |
| [#6684](https://github.com/ROCm/aiter/pull/6684) | [Triton/Gluon] : (DeepSeek) Add rotating buffers and do_benc... | @rahulbatra85 | draft | 2026-10-19 | 2026-10-25 |
| [#6728](https://github.com/ROCm/aiter/pull/6728) | [Triton/Gluon] : (MoE) Add rotating buffers and do_bench_ait... | @rahulbatra85 | draft | 2026-10-20 | 2026-10-25 |
| [#6838](https://github.com/ROCm/aiter/pull/6838) | [Triton/Gluon] : (ATTN DELTA) Add rotating buffers and do_be... | @rahulbatra85 | draft | 2026-10-22 | 2026-10-25 |
| [#6840](https://github.com/ROCm/aiter/pull/6840) | [Triton/Gluon] : (SPARSE ATTN) Add rotating buffers and do_b... | @rahulbatra85 | draft | 2026-10-22 | 2026-10-25 |
| [#6907](https://github.com/ROCm/aiter/pull/6907) | [CK] Add new per-tensor kernel instances for KPerBlock=256 f... | @rasmith | open | 2026-10-24 | 2026-10-24 |
| [#6906](https://github.com/ROCm/aiter/pull/6906) | [Bug] Attention with sink shouldn't be dispatched to assembl... | @qli88 | draft | 2026-10-24 | 2026-10-24 |
| [#6889](https://github.com/ROCm/aiter/pull/6889) | [Triton/Gluon] Split window-trimmed sliding-window verify on... | @okorzh-amd | open | 2026-10-23 | 2026-10-24 |
| [#6677](https://github.com/ROCm/aiter/pull/6677) | [HIP] [Bugfix] Bound per-tensor quantization vector tails | @yuzhouo7 | open | 2026-10-19 | 2026-10-24 |
| [#6905](https://github.com/ROCm/aiter/pull/6905) | [Triton/Gluon] [gfx1250] Fused GDN decode for Qwen3.5/3.8 on... | @ahmed-bsod | draft | 2026-10-24 | 2026-10-24 |
| [#6866](https://github.com/ROCm/aiter/pull/6866) | [Triton/Gluon] Add hadamard_rotate to fused_rms_gated_mxfp4_... | @mjkvaak-amd | open | 2026-10-23 | 2026-10-24 |
| [#6551](https://github.com/ROCm/aiter/pull/6551) | [Triton/Gluon] : (GEMM) Add rotating buffers and do_bench_ai... | @rahulbatra85 | open | 2026-10-14 | 2026-10-24 |
| [#6782](https://github.com/ROCm/aiter/pull/6782) | [Triton/Gluon] Add arch_info.is_sw_emulated_fp8_avail() for ... | @Ragua1 | open | 2026-10-21 | 2026-10-24 |
| [#6894](https://github.com/ROCm/aiter/pull/6894) | [FlyDSL] [Perf] gfx1250 grouped MoE: route small TP batches ... | @ahmed-bsod | open | 2026-10-23 | 2026-10-24 |
| [#6675](https://github.com/ROCm/aiter/pull/6675) | [ASM] [HIP] [OPUS] Add gfx950 MLA v4.1 sparse prefill and mo... | @kaiyang-1 | open | 2026-10-19 | 2026-10-24 |
| [#6904](https://github.com/ROCm/aiter/pull/6904) | [HIP] Add gfx1101 to allowed_archs in csrc/cpp_itfs/utils.py | @Ragua1 | open | 2026-10-24 | 2026-10-24 |
| [#6158](https://github.com/ROCm/aiter/pull/6158) | [Triton/Gluon] [Config] MoE and MLA configs for gfx1101, gfx... | @Ragua1 | open | 2026-10-05 | 2026-10-24 |
| [#6841](https://github.com/ROCm/aiter/pull/6841) | [ASM] [HIP] Mha v4: LSE on sorted-sparse, kernel race fixes,... | @jcaraban | open | 2026-10-22 | 2026-10-24 |
| [#6185](https://github.com/ROCm/aiter/pull/6185) | [HIP] [CI] [JIT] Add aiter.mqa_logits with a tuned Triton/Fl... | @amd-sriram | open | 2026-10-06 | 2026-10-24 |
| [#6573](https://github.com/ROCm/aiter/pull/6573) | [Triton/Gluon] [Config] gfx1250 Gluon GEMM configs for Kimi-... | @jiaryang | open | 2026-10-15 | 2026-10-24 |
| [#6140](https://github.com/ROCm/aiter/pull/6140) | [HIP] [FlyDSL] [CI] Add aiter.paged_mqa_logits with a tuned ... | @amd-sriram | open | 2026-10-04 | 2026-10-24 |
| [#6901](https://github.com/ROCm/aiter/pull/6901) | [Triton/Gluon] [Config] Tune gfx1250 Gluon GEMMs for Qwen3.5... | @Boss2002n | open | 2026-10-24 | 2026-10-24 |
| [#6903](https://github.com/ROCm/aiter/pull/6903) | [Triton/Gluon] [Config] Tune gfx1250 Gluon GEMMs for Kimi-K2... | @Boss2002n | open | 2026-10-24 | 2026-10-24 |
| [#6895](https://github.com/ROCm/aiter/pull/6895) | [Feat] Add tuner event pid recovery and fix deadlock | @jamesETsmith | open | 2026-10-23 | 2026-10-24 |
| [#6902](https://github.com/ROCm/aiter/pull/6902) | [Bugfix] Declare gemm_a16w16 non-mutating so torch.compile s... | @yichiche | open | 2026-10-24 | 2026-10-24 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-10-24 |
| [#6060](https://github.com/ROCm/aiter/pull/6060) | [HIP] [OPUS] [FlyDSL] gfx950 MXFP8 bmm: 1x32 weight scales, ... | @sshlyapn | open | 2026-10-01 | 2026-10-24 |
| [#6450](https://github.com/ROCm/aiter/pull/6450) | [FlyDSL] Read (B, next_n) context lengths in the paged MQA l... | @amd-sriram | open | 2026-10-12 | 2026-10-24 |
| [#6891](https://github.com/ROCm/aiter/pull/6891) | [MLA] Fix dropped and misplaced KV ranges in v1_0 and v1_2 m... | @m8than | open | 2026-10-23 | 2026-10-24 |
| [#6898](https://github.com/ROCm/aiter/pull/6898) | [Config] Add ASM split-K rows to gfx950 a8w8 blockscale bpre... | @xiaofei-zheng | open | 2026-10-24 | 2026-10-24 |
| [#6899](https://github.com/ROCm/aiter/pull/6899) | [Triton/Gluon] Window-aware split-KV for sliding-window atte... | @okorzh-amd | draft | 2026-10-24 | 2026-10-24 |
| [#6900](https://github.com/ROCm/aiter/pull/6900) | [FlyDSL] [Perf] MegaMoE: shorten EP8 prepare chain, coalesce... | @chushic | open | 2026-10-24 | 2026-10-24 |
| [#6869](https://github.com/ROCm/aiter/pull/6869) | [Triton/Gluon] bench_sage: diffusion-calibrated input distri... | @jcaraban | open | 2026-10-23 | 2026-10-24 |
| [#6896](https://github.com/ROCm/aiter/pull/6896) | [Triton/Gluon] [gfx1250] unified_attention: fast and correct... | @vgokhale | open | 2026-10-24 | 2026-10-24 |
| [#6839](https://github.com/ROCm/aiter/pull/6839) | [Triton/Gluon] : (UNIFIED ATTENTION) Add rotating buffers an... | @rahulbatra85 | open | 2026-10-22 | 2026-10-24 |
| [#6843](https://github.com/ROCm/aiter/pull/6843) | [Triton/Gluon] : (GATED DELTA) Add rotating buffers and do_b... | @rahulbatra85 | draft | 2026-10-22 | 2026-10-24 |
| [#6636](https://github.com/ROCm/aiter/pull/6636) | [Triton/Gluon] : (NORM&RoPE)Add rotating buffers and do_benc... | @rahulbatra85 | open | 2026-10-16 | 2026-10-24 |
| [#6753](https://github.com/ROCm/aiter/pull/6753) | [Triton/Gluon] [Config] [gfx950] unified_attention: num_stag... | @azaidy | open | 2026-10-21 | 2026-10-24 |
| [#6754](https://github.com/ROCm/aiter/pull/6754) | [FlyDSL] [Muse Spark] Muse MoE GEMM and finalize on MXFP4 we... | @azaidy | open | 2026-10-21 | 2026-10-24 |
| [#6842](https://github.com/ROCm/aiter/pull/6842) | [Triton/Gluon] Add sigmoid output gate to pa_decode_gluon | @eky-amd | open | 2026-10-22 | 2026-10-24 |
| [#5336](https://github.com/ROCm/aiter/pull/5336) | [HIP] [Bugfix] Fix gfx90a module_custom builds by guarding F... | @Mazukiri | open | 2026-09-08 | 2026-10-24 |
| [#5500](https://github.com/ROCm/aiter/pull/5500) | [Config] configs: GLM-5.3-Flash a8w8 blockscale fused-MoE co... | @jin-amd | open | 2026-09-14 | 2026-10-24 |
| [#5775](https://github.com/ROCm/aiter/pull/5775) | [Bug fix]Custom_all_reduce: send the real IPC offset instead... | @zhou9402 | open | 2026-09-23 | 2026-10-24 |
| [#5784](https://github.com/ROCm/aiter/pull/5784) | [CI] Enable DeepSeek-V4-Pro 2P1D TP8 ATOM DI smoke cases | @avininjamay8 | open | 2026-09-23 | 2026-10-24 |
| [#5911](https://github.com/ROCm/aiter/pull/5911) | [HIP] fix(quant): remove duplicate hip_bfloat16 template spe... | @shantipriya-amd | open | 2026-09-28 | 2026-10-24 |
| [#5918](https://github.com/ROCm/aiter/pull/5918) | [HIP] Add fused all_reduce_add; retune gfx950 all-reduce dis... | @cpersson-amd | open | 2026-09-28 | 2026-10-24 |
| [#6884](https://github.com/ROCm/aiter/pull/6884) | [Triton/Gluon] Support a bf16 recurrent state in the fused G... | @eky-amd | open | 2026-10-23 | 2026-10-24 |
| [#6089](https://github.com/ROCm/aiter/pull/6089) | [Config] [Perf] [gfx950] Add Kimi-K3 BF16 decode GEMM config... | @xiaohuguo2023 | open | 2026-10-02 | 2026-10-24 |
| [#6234](https://github.com/ROCm/aiter/pull/6234) | [Triton/Gluon] [Config] [gfx1250] Tune gluon batched a16w16 ... | @karverma-amd | open | 2026-10-07 | 2026-10-24 |
| [#6682](https://github.com/ROCm/aiter/pull/6682) | [Triton/Gluon] : (QUANT, CE AND TRANS) Add rotating buffers ... | @rahulbatra85 | open | 2026-10-19 | 2026-10-24 |
| [#6635](https://github.com/ROCm/aiter/pull/6635) | [Triton/Gluon] : (FUSED) Add rotating buffers and do_bench_a... | @rahulbatra85 | open | 2026-10-16 | 2026-10-24 |
| [#6508](https://github.com/ROCm/aiter/pull/6508) | [Triton/Gluon] MHA FP8 subtiled kernel | @lburzawa | open | 2026-10-13 | 2026-10-24 |
| [#6755](https://github.com/ROCm/aiter/pull/6755) | [Triton/Gluon] gfx950 Gluon unified attention: mask stale V ... | @WhatGhost | open | 2026-10-21 | 2026-10-23 |
| [#6853](https://github.com/ROCm/aiter/pull/6853) | [FlyDSL] [Bugfix] gfx950 A16W16: fix int32 C-offset overflow... | @josh-schell-amd | open | 2026-10-23 | 2026-10-23 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-10-23 |
| [#6855](https://github.com/ROCm/aiter/pull/6855) | [HIP] fused_qk_norm_rope_group_quant: multi-row TDM kernel f... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6854](https://github.com/ROCm/aiter/pull/6854) | [Triton/Gluon] [Bugfix] Fix uneven split-K bug in fused a8w8... | @hunhokim | open | 2026-10-23 | 2026-10-23 |
| [#6849](https://github.com/ROCm/aiter/pull/6849) | [Triton/Gluon] feat(triton): add broadcast-Q causal jagged a... | @sunxxuns | open | 2026-10-22 | 2026-10-23 |
| [#6867](https://github.com/ROCm/aiter/pull/6867) | [Triton/Gluon] Allow a right window with causal sliding-wind... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-10-23 |
| [#6868](https://github.com/ROCm/aiter/pull/6868) | [Triton/Gluon] Support non-causal right sliding window in Tr... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-10-23 |
| [#6880](https://github.com/ROCm/aiter/pull/6880) | [Triton/Gluon] Fix in-kernel gather for MXFP4 MoE GEMM on gf... | @scxiao | open | 2026-10-23 | 2026-10-23 |
| [#6771](https://github.com/ROCm/aiter/pull/6771) | [Triton/Gluon] [Config] [gfx1100] Tune A16W16 GEMM for Llama... | @TwelveNights | open | 2026-10-21 | 2026-10-23 |
| [#6851](https://github.com/ROCm/aiter/pull/6851) | [Triton/Gluon] perf(triton): tune gfx950 one-kernel MHA back... | @sunxxuns | open | 2026-10-22 | 2026-10-23 |
| [#6893](https://github.com/ROCm/aiter/pull/6893) | [MHA] Route varlen FMHA v3 to CK when an attention sink is s... | @jatseng-ai | open | 2026-10-23 | 2026-10-23 |
| [#6727](https://github.com/ROCm/aiter/pull/6727) | [Triton/Gluon] Add Split-K Variant of A8W8 BMM with Fused Re... | @farlukas | open | 2026-10-20 | 2026-10-23 |
| [#6435](https://github.com/ROCm/aiter/pull/6435) | [HIP] [GLM-5.3-Flash] MXFP4 fused-MoE tuned configs for MI35... | @amd-sriram | open | 2026-10-12 | 2026-10-23 |
| [#6882](https://github.com/ROCm/aiter/pull/6882) | [CI] Upgrade shared PyTorch images to ROCm 10.1 and PyTorch ... | @rkayaith | draft | 2026-10-23 | 2026-10-23 |
| [#6779](https://github.com/ROCm/aiter/pull/6779) | [Triton/Gluon] fused_qkv_split_qk_norm_rope_cache: MRoPE, sh... | @eky-amd | open | 2026-10-21 | 2026-10-23 |
| [#6177](https://github.com/ROCm/aiter/pull/6177) | [Triton/Gluon] KDA: faster FlashKDA and token-parallel intra... | @Micky774 | open | 2026-10-06 | 2026-10-23 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [KIMI-K3] Enable KDA per-channel decay gate in FlyD... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-10-23 |
| [#6770](https://github.com/ROCm/aiter/pull/6770) | [Triton/Gluon] fav3_sage: RDNA3 (gfx1100) support: FP16 V an... | @TwelveNights | open | 2026-10-21 | 2026-10-23 |
| [#6765](https://github.com/ROCm/aiter/pull/6765) | [Triton/Gluon] [Perf] Floor the gfx942 bf16 unified-attentio... | @siliangchen-amd | open | 2026-10-21 | 2026-10-23 |
| [#6678](https://github.com/ROCm/aiter/pull/6678) | [Triton/Gluon] Add fused_reduce_add_rmsnorm | @eky-amd | open | 2026-10-19 | 2026-10-23 |
| [#6883](https://github.com/ROCm/aiter/pull/6883) | [Test] Stop test_kvcache from counting uninitialized cache b... | @KHassanQazi | open | 2026-10-23 | 2026-10-23 |
| [#6886](https://github.com/ROCm/aiter/pull/6886) | [Test] Use the device fp8 range in test_fused_kv_norm_rope_g... | @KHassanQazi | draft | 2026-10-23 | 2026-10-23 |
| [#6887](https://github.com/ROCm/aiter/pull/6887) | [Test] Return zero from the MLA round-robin golden for fully... | @KHassanQazi | draft | 2026-10-23 | 2026-10-23 |
| [#6885](https://github.com/ROCm/aiter/pull/6885) | [Test] Accept equal-score boundary ties in test_topk_softmax... | @KHassanQazi | draft | 2026-10-23 | 2026-10-23 |
| [#5988](https://github.com/ROCm/aiter/pull/5988) | Add gfx950 Q256 fused MXFP4 prefill pipeline | @vstakhov-amd | draft | 2026-09-30 | 2026-10-23 |
| [#6427](https://github.com/ROCm/aiter/pull/6427) | [FlyDSL] Glm5 2 qkv proj opt for gfx950 | @IzacharyI | open | 2026-10-12 | 2026-10-23 |
| [#6219](https://github.com/ROCm/aiter/pull/6219) | [Triton/Gluon] moe_gemm_a8w8: fnuz FP8 and MXFP8 on gfx942 | @akii96 | open | 2026-10-07 | 2026-10-23 |
| [#5650](https://github.com/ROCm/aiter/pull/5650) | [Triton/Gluon] gfx942: dtype-split large-prefill attn_2d ent... | @mustafayildirim | open | 2026-09-18 | 2026-10-23 |
| [#6539](https://github.com/ROCm/aiter/pull/6539) | [FlyDSL] Fix cross-wave LDS race on the last K tile in 8-wav... | @yuychang | open | 2026-10-14 | 2026-10-23 |
| [#6581](https://github.com/ROCm/aiter/pull/6581) | [Triton/Gluon] fix(attention): normalize Gluon split constex... | @XiaobingSuper | open | 2026-10-15 | 2026-10-23 |
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-10-23 |
| [#5677](https://github.com/ROCm/aiter/pull/5677) | [FlyDSL] Adaptive decode Top-K kernel, dispatched by one mea... | @JH-Leon-KIM-AMD | draft | 2026-09-18 | 2026-10-23 |
| [#6237](https://github.com/ROCm/aiter/pull/6237) | [CK] Catch MoE accuracy failures that CI currently logs and ... | @KHassanQazi | open | 2026-10-07 | 2026-10-23 |
| [#6845](https://github.com/ROCm/aiter/pull/6845) | [Triton/Gluon] : Add padding-mode support to routed Triton C... | @saeid-rostami | open | 2026-10-22 | 2026-10-23 |
| [#6881](https://github.com/ROCm/aiter/pull/6881) | [FlyDSL] MegaMoEV2: fuse Dispatch, GEMM1, GEMM2 and Combine ... | @IzacharyI | open | 2026-10-23 | 2026-10-23 |
| [#5686](https://github.com/ROCm/aiter/pull/5686) | [HIP] [FlyDSL] [JIT] Feat/topk per row gfx950 | @MHYangAMD | open | 2026-09-19 | 2026-10-23 |
| [#6875](https://github.com/ROCm/aiter/pull/6875) | [Triton/Gluon] Fix model benchmark scripts | @brunomazzottiamd | open | 2026-10-23 | 2026-10-23 |
| [#6879](https://github.com/ROCm/aiter/pull/6879) | [HIP] [BugFix] Clamp pos in fused_qk_rope_concat_and_cache_m... | @rasmith | open | 2026-10-23 | 2026-10-23 |
| [#5555](https://github.com/ROCm/aiter/pull/5555) | [FlyDSL] QuickAllReduce INT5/INT6 and all-reduce cleanup | @msaffari-amd | draft | 2026-09-15 | 2026-10-23 |
| [#6859](https://github.com/ROCm/aiter/pull/6859) | [Triton/Gluon] Fix Flash Attention main ci | @micmelesse | draft | 2026-10-23 | 2026-10-23 |
| [#5996](https://github.com/ROCm/aiter/pull/5996) | [FlyDSL] [CI] FlyDSL QSA indexer scorer + sparse GQA | @SamiAario-AMD | open | 2026-09-30 | 2026-10-23 |
| [#5670](https://github.com/ROCm/aiter/pull/5670) | [FlyDSL] Fused all-reduce + RMSNorm | @vpietila-amd | draft | 2026-09-18 | 2026-10-23 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-10-23 |
| [#5891](https://github.com/ROCm/aiter/pull/5891) | [HIP] [FlyDSL] [MoE]: Optimize MiMo MXFP4 EP8/EP16 on gfx950 | @sammysun0711 | open | 2026-09-27 | 2026-10-23 |
| [#6247](https://github.com/ROCm/aiter/pull/6247) | [FlyDSL] gfx942 a8w4 MoE stage1 fp8 kernel | @vedenev-amd | draft | 2026-10-08 | 2026-10-23 |
| [#6877](https://github.com/ROCm/aiter/pull/6877) | Fix the hardcoded die count in the HIP kernels | @RElbers | draft | 2026-10-23 | 2026-10-23 |
| [#6734](https://github.com/ROCm/aiter/pull/6734) | [HIP] Fuse a 32-point Hadamard rotation into the MXFP4 per-1... | @mjkvaak-amd | open | 2026-10-20 | 2026-10-23 |
| [#5848](https://github.com/ROCm/aiter/pull/5848) | Fix the hardcoded die and CU counts in the opus kernels | @RElbers | draft | 2026-09-25 | 2026-10-23 |
| [#5505](https://github.com/ROCm/aiter/pull/5505) | Fix the hardcoded die and CU counts in the Triton kernels | @RElbers | draft | 2026-09-14 | 2026-10-23 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | Fix the hardcoded die and CU counts in the FlyDSL kernels | @RElbers | draft | 2026-09-14 | 2026-10-23 |
| [#6736](https://github.com/ROCm/aiter/pull/6736) | [CK] Use K=128 for gfx950 fp8 stage2 when 256 does not divid... | @zjin-lcf | open | 2026-10-20 | 2026-10-23 |
| [#6323](https://github.com/ROCm/aiter/pull/6323) | [HIP] [Bugfix] topk_gating kernels: trap when vec_size does ... | @truong-v | open | 2026-10-09 | 2026-10-23 |
| [#6545](https://github.com/ROCm/aiter/pull/6545) | [Triton/Gluon] Enable and tune pipelined unshuffled MLA deco... | @justinrosner | open | 2026-10-14 | 2026-10-23 |
| [#6876](https://github.com/ROCm/aiter/pull/6876) | [Triton/Gluon] unified_attention: add a deterministic (batch... | @aarnetalman | draft | 2026-10-23 | 2026-10-23 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner on gemm_moe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-10-23 |
| [#6270](https://github.com/ROCm/aiter/pull/6270) | [HIP] Custom allreduce: fused residual add and row-selective... | @yuychang | open | 2026-10-08 | 2026-10-23 |
| [#6847](https://github.com/ROCm/aiter/pull/6847) | [FlyDSL] Precompile only the FlyDSL GEMM and conv jobs for G... | @RElbers | open | 2026-10-22 | 2026-10-23 |
| [#6585](https://github.com/ROCm/aiter/pull/6585) |  [Config] [Perf] [gfx950] Add MiniMax-M3 AttnFP8 A8W8 bpresh... | @amd-bishwoadhikari | draft | 2026-10-15 | 2026-10-23 |
| [#6531](https://github.com/ROCm/aiter/pull/6531) | [Config] [Perf] [gfx950] Add MiniMax-M3 ViT BF16 GEMM config | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-23 |
| [#6810](https://github.com/ROCm/aiter/pull/6810) | [FlyDSL] FlyDSL FCA | @Boss2002n | open | 2026-10-21 | 2026-10-23 |
| [#6083](https://github.com/ROCm/aiter/pull/6083) | [Triton/Gluon] [FlyDSL] FlyDSL QSA indexer scorer + sparse G... | @SamiAario-AMD | draft | 2026-10-02 | 2026-10-23 |
| [#6873](https://github.com/ROCm/aiter/pull/6873) | [Triton/Gluon] [Config] Tune gfx1250 Gluon MXFP4 GEMMs for L... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6872](https://github.com/ROCm/aiter/pull/6872) | [Triton/Gluon] [Config] Tune gfx1250 Gluon MXFP4 GEMMs for L... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6871](https://github.com/ROCm/aiter/pull/6871) | [Triton/Gluon] [Config] Tune gfx1250 Gluon MXFP4 GEMMs for L... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6870](https://github.com/ROCm/aiter/pull/6870) | [Triton/Gluon] [Config] Tune gfx1250 Gluon a16w16 GEMMs for ... | @Boss2002n | open | 2026-10-23 | 2026-10-23 |
| [#6821](https://github.com/ROCm/aiter/pull/6821) | fused_norm_rope_att_rope_cast kernel | @yzhou103 | draft | 2026-10-22 | 2026-10-23 |
| [#6822](https://github.com/ROCm/aiter/pull/6822) | MHA v4 sparsified online (sol) attention for gfx950 | @nsakkine | draft | 2026-10-22 | 2026-10-23 |
| [#6815](https://github.com/ROCm/aiter/pull/6815) | [ASM] [HIP] feat(pa): add opt-in prefix-budget metadata plan... | @fangche123 | open | 2026-10-22 | 2026-10-23 |
| [#6767](https://github.com/ROCm/aiter/pull/6767) | [JIT] [AITERKER-209] Add gfx1250-strict architecture plumbin... | @zufayu | draft | 2026-10-21 | 2026-10-23 |
| [#6768](https://github.com/ROCm/aiter/pull/6768) | [FlyDSL] Kimi-K3 TP8 gfx1250 grouped-MoE tuning (experts spl... | @zejunchen-zejun | open | 2026-10-21 | 2026-10-23 |
| [#6865](https://github.com/ROCm/aiter/pull/6865) | review-pr: add HK20 (submodule upstream check) and A4 (new-f... | @yzhou103 | open | 2026-10-23 | 2026-10-23 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-10-23 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-10-23 |
| [#6824](https://github.com/ROCm/aiter/pull/6824) | [OPUS] support 1x32 bmm bpreshuffle | @yzhou103 | open | 2026-10-22 | 2026-10-23 |
| [#4779](https://github.com/ROCm/aiter/pull/4779) | [HIP] [Bugfix] Handle GroupNorm autocast safely | @akshatvishu | open | 2026-08-15 | 2026-10-23 |
| [#5985](https://github.com/ROCm/aiter/pull/5985) | [HIP] Opt group quant gfx1250 | @yzhou103 | open | 2026-09-30 | 2026-10-23 |
| [#6861](https://github.com/ROCm/aiter/pull/6861) | [MoE] Add optional per_slot_output for fused_moe | @kliuae | open | 2026-10-23 | 2026-10-23 |
| [#6171](https://github.com/ROCm/aiter/pull/6171) | [ASM] [HIP] [JIT] [Perf] [Hardware][MI300X] Delayed mHC seam... | @jhartika-amd | open | 2026-10-06 | 2026-10-23 |
| [#6856](https://github.com/ROCm/aiter/pull/6856) | [HIP] [FlyDSL] [gfx1250] Add 32x32 w_scale mxfp8 bpreshuffle... | @aoli26 | open | 2026-10-23 | 2026-10-23 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-10-23 |
| [#6172](https://github.com/ROCm/aiter/pull/6172) | [ASM] [HIP] [JIT] [Hardware][MI300X] gfx942 asm GEMM with BF... | @jhartika-amd | open | 2026-10-06 | 2026-10-23 |
| [#6167](https://github.com/ROCm/aiter/pull/6167) | [Triton/Gluon] unified_attention_sparse_mla: read launch val... | @Ragua1 | open | 2026-10-06 | 2026-10-23 |
| [#5887](https://github.com/ROCm/aiter/pull/5887) | [FlyDSL] [PA] Extend pa decode tile to support Qlen8 and SWA... | @sammysun0711 | open | 2026-09-27 | 2026-10-23 |
| [#6860](https://github.com/ROCm/aiter/pull/6860) | [fix] Clear rocprofiler env vars before spawning mp_tuner wo... | @mjkvaak-amd | open | 2026-10-23 | 2026-10-23 |
| [#6576](https://github.com/ROCm/aiter/pull/6576) | [FlyDSL] Add QSA sparse prefill attention for MI308 | @luocheng25 | open | 2026-10-15 | 2026-10-23 |
| [#6692](https://github.com/ROCm/aiter/pull/6692) | [CK] [Bugfix] FMoE tuner: use all sources for shapes FlyDSL ... | @tc3oliver | open | 2026-10-20 | 2026-10-23 |
| [#6817](https://github.com/ROCm/aiter/pull/6817) | [Config] [Perf] Add Muse Spark Open MXFP4 FMoE rows for EP t... | @fanxingran | open | 2026-10-22 | 2026-10-23 |
| [#6502](https://github.com/ROCm/aiter/pull/6502) | [Triton/Gluon] [CI] Streamline Flash Attentions api | @micmelesse | open | 2026-10-13 | 2026-10-23 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-10-23 |
| [#6519](https://github.com/ROCm/aiter/pull/6519) | [HIP] fix(moe): bound scatter-reduce staging reads | @MengqingCao | open | 2026-10-14 | 2026-10-23 |
| [#5163](https://github.com/ROCm/aiter/pull/5163) | [gfx1250] feat(mega_moe): add operand init modes and b2b tim... | @arakowsk-amd | open | 2026-09-01 | 2026-10-23 |
| [#5513](https://github.com/ROCm/aiter/pull/5513) | [CI] Add Some vLLM lm_eval Nightly Tests | @micah-wil | open | 2026-09-14 | 2026-10-23 |
| [#5678](https://github.com/ROCm/aiter/pull/5678) | [HIP] [OPUS] [JIT] Add GPT-OSS IQ2R 2-bit MoE support | @ssharma4-amd | open | 2026-09-18 | 2026-10-23 |
| [#6764](https://github.com/ROCm/aiter/pull/6764) | [FlyDSL] Add non-causal mode to multi-token PA decode | @rebklee | open | 2026-10-21 | 2026-10-23 |
| [#6037](https://github.com/ROCm/aiter/pull/6037) | [HIP] [JIT] Add FP8 sparse MLA with fused BF16 I/O for gfx95... | @sumin-hong | open | 2026-10-01 | 2026-10-23 |
| [#6236](https://github.com/ROCm/aiter/pull/6236) | [FlyDSL] TP2 quick all-reduce through a passive xGMI relay | @samremes | open | 2026-10-07 | 2026-10-23 |
| [#6812](https://github.com/ROCm/aiter/pull/6812) | [CI] Include tests/ directory in test sharding | @okakarpa | open | 2026-10-22 | 2026-10-23 |
| [#6819](https://github.com/ROCm/aiter/pull/6819) | [HIP] [CustomAR] Keep CUDA-graph buffer registration in step... | @okorzh-amd | open | 2026-10-22 | 2026-10-23 |
| [#6820](https://github.com/ROCm/aiter/pull/6820) | [Config] Add Kimi-K3 gfx950 BF16 tuned rows for the MoE fron... | @yuychang | open | 2026-10-22 | 2026-10-23 |
| [#6835](https://github.com/ROCm/aiter/pull/6835) | [Triton/Gluon] Add fused Qwen3-Next attention prologue (gfx9... | @karverma-amd | open | 2026-10-22 | 2026-10-23 |
| [#6837](https://github.com/ROCm/aiter/pull/6837) | [FlyDSL] Select a16w4 stage2 reduce for fp4 | @zjin-lcf | open | 2026-10-22 | 2026-10-23 |
| [#6844](https://github.com/ROCm/aiter/pull/6844) | [JIT] Build every listed CU count of each GPU_ARCHS arch | @RElbers | open | 2026-10-22 | 2026-10-23 |
| [#6848](https://github.com/ROCm/aiter/pull/6848) | [Triton/Gluon] feat(triton): add M-FALCON candidate attentio... | @sunxxuns | open | 2026-10-22 | 2026-10-23 |
| [#5409](https://github.com/ROCm/aiter/pull/5409) | [Triton/Gluon] Unified attention: opt-in prefill configs for... | @cpersson-amd | open | 2026-09-10 | 2026-10-22 |
| [#6543](https://github.com/ROCm/aiter/pull/6543) | Optimize FlyDSL Kimi K2 Thinking Kernel | @amirumoAMD | draft | 2026-10-14 | 2026-10-22 |
| [#6335](https://github.com/ROCm/aiter/pull/6335) | [fused_moe] Raise when an active swiglu_limit would be silen... | @jatseng-ai | open | 2026-10-09 | 2026-10-22 |
| [#5668](https://github.com/ROCm/aiter/pull/5668) | [OPUS] [JIT] Key the MXFP8 BMM tuned lookup on cu_num | @RElbers | open | 2026-09-18 | 2026-10-22 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [Triton/Gluon] [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-10-22 |
| [#6836](https://github.com/ROCm/aiter/pull/6836) | [HIP] [Bugfix] Clamp NaN/Inf in grouped_topk_kernel's biased... | @rjrock | open | 2026-10-22 | 2026-10-22 |
| [#5186](https://github.com/ROCm/aiter/pull/5186) | [CK] [OPUS] [CI] Mi300a enablement | @afanfa | open | 2026-09-01 | 2026-10-22 |
| [#5793](https://github.com/ROCm/aiter/pull/5793) | [Triton/Gluon] [fix] Triton FA decode: bound K/V loads in no... | @amd-maradosa | open | 2026-09-23 | 2026-10-22 |
| [#6123](https://github.com/ROCm/aiter/pull/6123) | [Triton/Gluon] [FlyDSL] [CI] fp8 unified attention for gfx94... | @waqahmed-amd-fi | draft | 2026-10-03 | 2026-10-22 |
| [#6676](https://github.com/ROCm/aiter/pull/6676) | [Triton/Gluon] gfx1151 gemm_a16w16: round before the activat... | @klin2024 | open | 2026-10-19 | 2026-10-22 |
| [#6742](https://github.com/ROCm/aiter/pull/6742) | [HIP] [JIT] [Kernel] Add HipKittens block-FP8 MoE for gfx950 | @willhu-jpg | open | 2026-10-20 | 2026-10-22 |
| [#6552](https://github.com/ROCm/aiter/pull/6552) | [CK] [FlyDSL] gfx942 a16wmix a16w16: honour swiglu_limit for... | @jatseng-ai | open | 2026-10-15 | 2026-10-22 |
| [#6814](https://github.com/ROCm/aiter/pull/6814) | [Triton/Gluon]: Benchmarks model config changes(scripts for ... | @rahulbatra85 | open | 2026-10-22 | 2026-10-22 |
| [#6816](https://github.com/ROCm/aiter/pull/6816) | [Triton/Gluon] [GFX1250] Add bench MOE EP with no-mega suppo... | @k50112113 | open | 2026-10-22 | 2026-10-22 |
| [#6784](https://github.com/ROCm/aiter/pull/6784) | [Triton/Gluon] Nimit/gfx1250 pa decode tuning | @NimitPtl | open | 2026-10-21 | 2026-10-22 |
| [#6401](https://github.com/ROCm/aiter/pull/6401) | [Triton/Gluon] [Bugfix] Fix the fused_atomic Triton flash at... | @0xDELUXA | open | 2026-10-11 | 2026-10-22 |
| [#6594](https://github.com/ROCm/aiter/pull/6594) | [Triton/Gluon] Route short sliding-window queries to the gfx... | @hongxiayang | open | 2026-10-15 | 2026-10-22 |
| [#5153](https://github.com/ROCm/aiter/pull/5153) | [Triton/Gluon] [GFX950] Productize gluon mha kernel from GFX... | @leonling-ll | open | 2026-08-31 | 2026-10-22 |
| [#6808](https://github.com/ROCm/aiter/pull/6808) | [HIP] Added an optional pre-quant k_out_unquantized under fp... | @jhu960213 | open | 2026-10-21 | 2026-10-22 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] [CI] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-10-22 |
| [#6498](https://github.com/ROCm/aiter/pull/6498) | [Triton/Gluon] KDA: add the chunk_delta_attn backward pass | @Micky774 | open | 2026-10-13 | 2026-10-22 |
| [#5182](https://github.com/ROCm/aiter/pull/5182) | [Triton/Gluon] [JIT] Identify MI350P, and stop hardcoding th... | @RElbers | open | 2026-09-01 | 2026-10-22 |
| [#6218](https://github.com/ROCm/aiter/pull/6218) | [HIP] [CK] [FlyDSL] FlyDSL A4W4 decode GEMM for M<=16 on gfx... | @johannes-graner | open | 2026-10-07 | 2026-10-22 |
| [#6199](https://github.com/ROCm/aiter/pull/6199) | [Triton/Gluon] [gfx942] Support fp8 KV caches and fp8 dots i... | @jin-amd | open | 2026-10-07 | 2026-10-22 |
| [#6024](https://github.com/ROCm/aiter/pull/6024) | [Triton/Gluon] [Perf] fused_reduce_act_mul_and_mxfp4_quant: ... | @reger-men | open | 2026-09-30 | 2026-10-22 |
| [#6828](https://github.com/ROCm/aiter/pull/6828) | [FlyDSL] [Kernel] Add gfx950 4-wave INT8 bpreshuffle GEMM | @ksikiric | draft | 2026-10-22 | 2026-10-22 |
| [#6286](https://github.com/ROCm/aiter/pull/6286) | [Triton/Gluon] Retune gfx942 a16w4 DSv4.1 tiles for Triton 3... | @frida-andersson | open | 2026-10-08 | 2026-10-22 |
| [#6067](https://github.com/ROCm/aiter/pull/6067) | [ASM] [HIP] [CK] Add persistent gfx950 f4gemm 256x256 kernel... | @tarik-sarac | open | 2026-10-01 | 2026-10-22 |
| [#6825](https://github.com/ROCm/aiter/pull/6825) | Add optimized gfx950 MXFP6 GEMM tuning candidates | @ksikiric | draft | 2026-10-22 | 2026-10-22 |
| [#5794](https://github.com/ROCm/aiter/pull/5794) | [ASM] [HIP] feat(fmoe): add SwiGLU OAI MXFP4 FLAT kernels fo... | @alexioslyrakis-amd | open | 2026-09-23 | 2026-10-22 |
| [#6830](https://github.com/ROCm/aiter/pull/6830) | [Kernel] Add an eight-row FP8 MQA logits path for gfx950 | @iraj465 | draft | 2026-10-22 | 2026-10-22 |
| [#6831](https://github.com/ROCm/aiter/pull/6831) | [Perf] Pipeline CSR segments in unsplit OPUS sparse prefill | @iraj465 | draft | 2026-10-22 | 2026-10-22 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM kernel... | @vedenev-amd | open | 2026-07-07 | 2026-10-22 |
| [#6832](https://github.com/ROCm/aiter/pull/6832) | [Kernel] Reuse query quantization in fused FP8 BMM for gfx95... | @iraj465 | draft | 2026-10-22 | 2026-10-22 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-10-22 |
| [#6709](https://github.com/ROCm/aiter/pull/6709) | [FlyDSL] Dev/yadai improve test | @yadaish | open | 2026-10-20 | 2026-10-22 |
| [#6618](https://github.com/ROCm/aiter/pull/6618) | [MORI] Manage v2 CCO through the all2all manager | @JiaoliangYu | open | 2026-10-16 | 2026-10-22 |
| [#6708](https://github.com/ROCm/aiter/pull/6708) | [HIP] Tune Qwen3.8-Flash-Next MXFP4 a4w4 MoE on gfx950 and a... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-22 |
| [#6260](https://github.com/ROCm/aiter/pull/6260) | [HIP] [JIT] [Build] Fix metadata-only setup.py, empty rocmin... | @yuychang | open | 2026-10-08 | 2026-10-22 |
| [#6397](https://github.com/ROCm/aiter/pull/6397) | Use the FlyDSL BF16 GEMM by default for large untuned gfx125... | @jhinpan | open | 2026-10-11 | 2026-10-22 |
| [#6557](https://github.com/ROCm/aiter/pull/6557) | [Config] [gfx1250] Tune DeepSeek-R1 FP4 MoE tiles for high-b... | @karverma-amd | open | 2026-10-15 | 2026-10-22 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-10-22 |
| [#6180](https://github.com/ROCm/aiter/pull/6180) | [Triton/Gluon] MHA: write -inf LSE for fully masked rows, no... | @phambinhfin | open | 2026-10-06 | 2026-10-22 |
| [#6049](https://github.com/ROCm/aiter/pull/6049) | [FlyDSL] QuickAllReduce INT4: add a shared global divisor to... | @msaffari-amd | open | 2026-10-01 | 2026-10-22 |
| [#6525](https://github.com/ROCm/aiter/pull/6525) | [FlyDSL] feat(mega_moe): add required_vmm_bytes for cco sizi... | @yanboshao | open | 2026-10-14 | 2026-10-22 |
| [#6624](https://github.com/ROCm/aiter/pull/6624) | fix(dist): log MORI all2all handle creation | @JiaoliangYu | open | 2026-10-16 | 2026-10-22 |
| [#5815](https://github.com/ROCm/aiter/pull/5815) | [FlyDSL] [CI] Add FlyDSL fused intranode all-to-all for Ulys... | @johannes-graner | open | 2026-09-24 | 2026-10-22 |
| [#5461](https://github.com/ROCm/aiter/pull/5461) | [FlyDSL] [CI] One stage and two-stage ring all-reduce kernel... | @vpietila-amd | open | 2026-09-11 | 2026-10-22 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [Triton/Gluon] [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-24 | 2026-10-22 |
| [#6760](https://github.com/ROCm/aiter/pull/6760) | [CK] [Bugfix] Preserve virtual sinks in single-query batch p... | @lunarwhite | open | 2026-10-21 | 2026-10-22 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-10-22 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | [FlyDSL] Add adaptive-blocked K5 prefill h-recurrence in GDN | @johannes-graner | open | 2026-09-21 | 2026-10-22 |
| [#6612](https://github.com/ROCm/aiter/pull/6612) | [Config] [Qwen3.5][Tuning] Add TP8 (inter_dim=128) fused-MoE... | @chuyeh | open | 2026-10-16 | 2026-10-22 |
| [#6689](https://github.com/ROCm/aiter/pull/6689) | [HIP] gemm_fusion: GEMM + epilogue fusion framework and sp_q... | @demonsan | open | 2026-10-19 | 2026-10-22 |
| [#5605](https://github.com/ROCm/aiter/pull/5605) | [Build] Prebuild the bf16 mha_varlen_fwd variant without mas... | @Arist12 | open | 2026-09-16 | 2026-10-22 |
| [#6785](https://github.com/ROCm/aiter/pull/6785) | [HIP] [Perf] paged_attention_ll4mi: read V transposed with d... | @Arist12 | open | 2026-10-21 | 2026-10-22 |
| [#6740](https://github.com/ROCm/aiter/pull/6740) | [Triton/Gluon] [Config] [Perf] gfx950 a16w16 M_LEQ_8: avoid ... | @Arist12 | open | 2026-10-20 | 2026-10-22 |
| [#6739](https://github.com/ROCm/aiter/pull/6739) | [Triton/Gluon] [Bugfix] Import aiter.ops.triton.quant in a p... | @Arist12 | open | 2026-10-20 | 2026-10-22 |
| [#5822](https://github.com/ROCm/aiter/pull/5822) | [Triton/Gluon] Add tiled MoE sorting for M3 prefill | @whx-sjtu | open | 2026-09-24 | 2026-10-22 |
| [#6766](https://github.com/ROCm/aiter/pull/6766) | [HIP] [Bugfix] Launch persistent asm fused_moe kernels with ... | @siliangchen-amd | open | 2026-10-21 | 2026-10-22 |
| [#6535](https://github.com/ROCm/aiter/pull/6535) | [Config] Add MI300A blockscale GEMM and fused MoE configs fo... | @aurianer | open | 2026-10-14 | 2026-10-22 |
| [#6372](https://github.com/ROCm/aiter/pull/6372) | [Triton/Gluon] Add gfx1201 Triton support for per-channel FP... | @jyohukuchan | open | 2026-10-10 | 2026-10-22 |
| [#6600](https://github.com/ROCm/aiter/pull/6600) | [Triton/Gluon] : (MLA) Add rotating buffers and do_bench_ait... | @rahulbatra85 | open | 2026-10-16 | 2026-10-22 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-10-22 |
| [#6036](https://github.com/ROCm/aiter/pull/6036) | [HIP] [JIT] [Kernel] fused MoE sorting: single-launch bitmas... | @sumin-hong | open | 2026-10-01 | 2026-10-22 |
| [#6162](https://github.com/ROCm/aiter/pull/6162) | [HIP] [Perf] Tune GLM-5.3 packed-BF16 mHC post/pre on gfx950 | @Raiden-Makoto | open | 2026-10-06 | 2026-10-22 |
| [#6761](https://github.com/ROCm/aiter/pull/6761) | fix(topk_select): never evict the default end-index rows cap... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-22 |
| [#6762](https://github.com/ROCm/aiter/pull/6762) | [FlyDSL] perf(flydsl): cache per-config host work on the GEM... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-22 |
| [#6798](https://github.com/ROCm/aiter/pull/6798) | [HIP] [Bugfix] paged_attention_ll4mi: fix query-head offset ... | @Arist12 | open | 2026-10-21 | 2026-10-22 |
| [#5384](https://github.com/ROCm/aiter/pull/5384) | [Triton/Gluon] Move gluon mla_gluon kernel into _gluon_kerne... | @vgokhale | draft | 2026-09-09 | 2026-10-22 |
| [#6550](https://github.com/ROCm/aiter/pull/6550) | [Triton/Gluon] Add fused Kimi-K3 KDA whole-layer ops (gfx950... | @karverma-amd | open | 2026-10-14 | 2026-10-21 |
| [#6786](https://github.com/ROCm/aiter/pull/6786) | [HIP] [Feature] a8w8 blockscale asm: out_zeroed skips the sp... | @kevin-mii | draft | 2026-10-21 | 2026-10-21 |
| [#6745](https://github.com/ROCm/aiter/pull/6745) | [Triton/Gluon] Fused compress attn in Gluon | @Boss2002n | open | 2026-10-20 | 2026-10-21 |
| [#6751](https://github.com/ROCm/aiter/pull/6751) | [Triton/Gluon] Fix fused_qk_norm_rope_group_quant | @Boss2002n | open | 2026-10-21 | 2026-10-21 |
| [#6730](https://github.com/ROCm/aiter/pull/6730) | [Triton/Gluon] assert num_stages=2 for 3d unified attention ... | @scxiao | open | 2026-10-20 | 2026-10-21 |
| [#6743](https://github.com/ROCm/aiter/pull/6743) | [HIP] [JIT] [Kernel] Add HipKittens H32 sparse MLA for gfx95... | @willhu-jpg | open | 2026-10-20 | 2026-10-21 |
| [#6714](https://github.com/ROCm/aiter/pull/6714) | [Triton/Gluon] Do not specialize flash_attn_triton_amd attn_... | @umarkovi-amd | draft | 2026-10-20 | 2026-10-21 |
| [#6707](https://github.com/ROCm/aiter/pull/6707) | [Triton/Gluon] gemm_a16w16_gated: add bias and a gate_first ... | @klin2024 | open | 2026-10-20 | 2026-10-21 |
| [#6697](https://github.com/ROCm/aiter/pull/6697) | [FlyDSL] [Perf] Fold the MXFP4 MoE sort into GEMM1 for GLM-5... | @chushic | open | 2026-10-20 | 2026-10-21 |
| [#6026](https://github.com/ROCm/aiter/pull/6026) | [FlyDSL] Add fused KDA decode kernels on gfx950 | @yuychang | open | 2026-10-01 | 2026-10-21 |
| [#6264](https://github.com/ROCm/aiter/pull/6264) | [FlyDSL] MXFP4 MoE: BK=128 native gemm2 for non-256-aligned ... | @yuychang | open | 2026-10-08 | 2026-10-21 |
| [#6437](https://github.com/ROCm/aiter/pull/6437) | Add gemm_a8w8_bpreshuffle_out for caller-owned bf16 outputs | @yuychang | open | 2026-10-12 | 2026-10-21 |
| [#6484](https://github.com/ROCm/aiter/pull/6484) | [MoE] Let callers hand fused_moe a precomputed BM=16 sort | @yuychang | open | 2026-10-13 | 2026-10-21 |
| [#6485](https://github.com/ROCm/aiter/pull/6485) | [MoE] a4w4 adaptive aux sort: accumulate into the caller's o... | @yuychang | open | 2026-10-13 | 2026-10-21 |
| [#6712](https://github.com/ROCm/aiter/pull/6712) | [FlyDSL] [Bugfix] Match FlyDSL A16W16 AOT semaphore dtype to... | @yuychang | open | 2026-10-20 | 2026-10-21 |
| [#6266](https://github.com/ROCm/aiter/pull/6266) | [FlyDSL] MLA single-split fill skip and FP8 descales for var... | @yuychang | open | 2026-10-08 | 2026-10-21 |
| [#6578](https://github.com/ROCm/aiter/pull/6578) | [ASM] Fix KV addressing, mask scratch and empty splits in gf... | @alexioslyrakis-amd | open | 2026-10-15 | 2026-10-21 |
| [#6371](https://github.com/ROCm/aiter/pull/6371) | mHC fused post+pre: launch policy for MI300X (gfx942, 304 CU... | @anshss | open | 2026-10-10 | 2026-10-21 |
| [#5949](https://github.com/ROCm/aiter/pull/5949) | [FlyDSL] Add the NHD page-64 layout and a per-shape default ... | @samremes | open | 2026-09-29 | 2026-10-21 |
| [#6433](https://github.com/ROCm/aiter/pull/6433) | [Config] [Perf] Add gfx950 DSV4.1 Flash TP4 fused-shared-exp... | @kevin-mii | open | 2026-10-12 | 2026-10-21 |
| [#6263](https://github.com/ROCm/aiter/pull/6263) | [HIP] MoE a8w4: fuse route sort and MXFP8 activation quant f... | @yuychang | open | 2026-10-08 | 2026-10-21 |
| [#6583](https://github.com/ROCm/aiter/pull/6583) | [FlyDSL] [MoE] fused_moe: add a deterministic mode for bf16 ... | @aarnetalman | open | 2026-10-15 | 2026-10-21 |
| [#6475](https://github.com/ROCm/aiter/pull/6475) | [Triton/Gluon] [Bugfix] unified_attention: mask the V page t... | @aaab8b | open | 2026-10-13 | 2026-10-21 |
| [#6268](https://github.com/ROCm/aiter/pull/6268) | [FlyDSL] [CI] [MoonEP] Balance MegaMoE v2 prefill with MoonE... | @JiaoliangYu | open | 2026-10-08 | 2026-10-21 |
| [#6718](https://github.com/ROCm/aiter/pull/6718) | [FlyDSL] Tdm new interface v2 | @xudoyuan | open | 2026-10-20 | 2026-10-21 |
| [#5578](https://github.com/ROCm/aiter/pull/5578) | [Triton/Gluon] Add MXFP8 Flash Attention v2 (gfx950 / CDNA4) | @WuLei-AMD | open | 2026-09-16 | 2026-10-21 |
| [#5577](https://github.com/ROCm/aiter/pull/5577) | [Triton/Gluon] Add FP8 Flash Attention v2 kernel (gfx942/gfx... | @WuLei-AMD | open | 2026-09-16 | 2026-10-21 |
| [#6558](https://github.com/ROCm/aiter/pull/6558) | [FlyDSL] [CI] [MoonEP] Run the planner and weight pool on gf... | @JiaoliangYu | open | 2026-10-15 | 2026-10-21 |
| [#6340](https://github.com/ROCm/aiter/pull/6340) | [HIP] Avoid duplicate binary-op instantiation in the dispatc... | @kainanpeace666 | open | 2026-10-09 | 2026-10-21 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-10-21 |
| [#6100](https://github.com/ROCm/aiter/pull/6100) | [ASM] [HIP] [JIT] Fuse the router GEMM and top-k softmax int... | @maeehart | open | 2026-10-02 | 2026-10-21 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | [JIT] feat: Support LoongArch64, LoongArch64 not support Cod... | @Xinmudotmoe | open | 2026-08-12 | 2026-10-21 |
| [#6362](https://github.com/ROCm/aiter/pull/6362) | [OPUS] [FlyDSL] [JIT] [Feature] Build the MoE and MegaMoE AO... | @zhiding512 | open | 2026-10-10 | 2026-10-21 |
| [#6111](https://github.com/ROCm/aiter/pull/6111) | [op_tests] test_gemm_a8w8_blockscale: --graph/--graph-replay... | @arakowsk-amd | open | 2026-10-02 | 2026-10-21 |
| [#6461](https://github.com/ROCm/aiter/pull/6461) | [CK] [FlyDSL] [Feature] Add staged search to MXFP4 MoE tuner | @Bernard-Liu | open | 2026-10-13 | 2026-10-21 |
| [#6668](https://github.com/ROCm/aiter/pull/6668) | [FlyDSL] [Perf] MiniMax-M3 MoE on gfx1250: fused route psum ... | @lirui927 | open | 2026-10-19 | 2026-10-21 |
| [#6696](https://github.com/ROCm/aiter/pull/6696) | [HIP] [OPUS] Add Blockscale_mxfp8 OPUS GEMM | @Fyzyukk | open | 2026-10-20 | 2026-10-21 |
| [#6702](https://github.com/ROCm/aiter/pull/6702) | [FlyDSL] [FMHA][gfx1250] FP8/BF8 Support. | @ruanjm | open | 2026-10-20 | 2026-10-21 |
| [#6703](https://github.com/ROCm/aiter/pull/6703) | [HIP] Fix/mla metadata v1 0 tail | @MHYangAMD | open | 2026-10-20 | 2026-10-21 |
| [#6711](https://github.com/ROCm/aiter/pull/6711) | [Config] [Perf] Tune gfx950 BF16 GEMMs for Qwen3.8-Flash-Nex... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#6713](https://github.com/ROCm/aiter/pull/6713) | [Config] [Perf] Tune gfx950 a8w8 bpreshuffle GEMMs for Qwen3... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#6043](https://github.com/ROCm/aiter/pull/6043) | [Triton/Gluon] Tune bf16 a16w16 GEMM for Qwen3.5-397B on gfx... | @mqhc2020 | open | 2026-10-01 | 2026-10-21 |
| [#6705](https://github.com/ROCm/aiter/pull/6705) | [Triton/Gluon] Fix/triton fp8 dtype triton only | @MHYangAMD | open | 2026-10-20 | 2026-10-20 |
| [#6660](https://github.com/ROCm/aiter/pull/6660) | feat(attention): per-token fp8 KV and split-K verify in gfx1... | @lirui927 | draft | 2026-10-19 | 2026-10-20 |
| [#6476](https://github.com/ROCm/aiter/pull/6476) | [Triton/Gluon] [Kernel] Add MXFP4 dequant H16 requantization | @DaiXindi-AMD | open | 2026-10-13 | 2026-10-20 |
| [#6568](https://github.com/ROCm/aiter/pull/6568) | [FlyDSL] [Bugfix] Initialize padded MoE scratch to stop NaN ... | @PerryZhang01 | open | 2026-10-15 | 2026-10-20 |
| [#6597](https://github.com/ROCm/aiter/pull/6597) | [FlyDSL] [Perf] Cache the gfx950 A16W16 GEMM param per confi... | @afriedri | open | 2026-10-15 | 2026-10-20 |
| [#6458](https://github.com/ROCm/aiter/pull/6458) | [Triton/Gluon] [Kernel] Add dual-layout H16 MXFP4 quantizati... | @DaiXindi-AMD | open | 2026-10-13 | 2026-10-20 |
| [#6244](https://github.com/ROCm/aiter/pull/6244) | [Triton/Gluon] Gluon PA decode: allow query_length > 4 on th... | @zejunchen-zejun | open | 2026-10-08 | 2026-10-20 |
| [#6081](https://github.com/ROCm/aiter/pull/6081) | [Triton/Gluon] Fix: gfx1250 unified attention faults and NaN... | @mqhc2020 | open | 2026-10-02 | 2026-10-20 |
| [#6274](https://github.com/ROCm/aiter/pull/6274) | [CI] Triton board: review requested -> In Progress, review d... | @Boss2002n | open | 2026-10-08 | 2026-10-20 |
| [#6522](https://github.com/ROCm/aiter/pull/6522) | [FlyDSL] generalize gfx942 FMHA varlen backward to head dims... | @amd-wangfan | open | 2026-10-14 | 2026-10-20 |
| [#6001](https://github.com/ROCm/aiter/pull/6001) | [FlyDSL] fp8_mqa_logits: drop the host row-pad copies | @frida-andersson | open | 2026-09-30 | 2026-10-20 |
| [#6723](https://github.com/ROCm/aiter/pull/6723) | [Perf] gfx1250 FP4 GEMM: MXFP4 output epilogue for MegaMoE's... | @XiaobingSuper | draft | 2026-10-20 | 2026-10-20 |
| [#6368](https://github.com/ROCm/aiter/pull/6368) | [FlyDSL] [gfx950] Fix 8-wave a8w8 GEMM reading LDS before th... | @yangyuhuiling | open | 2026-10-10 | 2026-10-20 |
| [#6721](https://github.com/ROCm/aiter/pull/6721) | [Triton] Add group_norm with an optional temb add and activa... | @klin2024 | draft | 2026-10-20 | 2026-10-20 |
| [#6720](https://github.com/ROCm/aiter/pull/6720) | [HIP] fused_dynamic_mx_quant_moe_sort: use the split path ab... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6719](https://github.com/ROCm/aiter/pull/6719) | [Triton] gfx1250: fix MXFP4 quant, RMSNorm and gemm_afp4wfp4... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6715](https://github.com/ROCm/aiter/pull/6715) | Vernier Micro-benchmark improvements | @damien-lejeune | draft | 2026-10-20 | 2026-10-20 |
| [#6706](https://github.com/ROCm/aiter/pull/6706) | [FlyDSL] [MoE] Fit the gfx1250 grouped GEMM k-tile to K, and... | @gbyu-amd | draft | 2026-10-20 | 2026-10-20 |
| [#6666](https://github.com/ROCm/aiter/pull/6666) | [ASM] update code objects | @slippedJim | open | 2026-10-19 | 2026-10-20 |
| [#6564](https://github.com/ROCm/aiter/pull/6564) | [HIP] [FlyDSL] perf(mega_moe): fuse the gfx1250 compact disp... | @GwilliamHu | open | 2026-10-15 | 2026-10-20 |
| [#6699](https://github.com/ROCm/aiter/pull/6699) | fix(custom-ar): gfx1250 fused all-reduce + RMSNorm and LL bl... | @XiaobingSuper | draft | 2026-10-20 | 2026-10-20 |
| [#6662](https://github.com/ROCm/aiter/pull/6662) | [FlyDSL] Add gfx1250 implicit-GEMM conv3d | @huizzhan | draft | 2026-10-19 | 2026-10-20 |
| [#6623](https://github.com/ROCm/aiter/pull/6623) | [Config][GEMM][gfx950] Qwen3.8-27B ViT BF16 GEMM shapes (tun... | @vorapolsiloai | draft | 2026-10-16 | 2026-10-20 |
| [#6464](https://github.com/ROCm/aiter/pull/6464) | Fea/mxfp4 flydsl a8w4 opt & replace | @Bernard-Liu | draft | 2026-10-13 | 2026-10-20 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | [Triton/Gluon] add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-10-20 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Triton/Gluon] [Kernel] sliding-window decode over shuffled ... | @reger-men | open | 2026-06-26 | 2026-10-20 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Triton/Gluon] [Kernel][Perf] split-K long-context decode fo... | @reger-men | open | 2026-06-26 | 2026-10-20 |
| [#6527](https://github.com/ROCm/aiter/pull/6527) | [FlyDSL] [MoE] Enable AITER_FLYDSL_USE_HERD on gfx1250 and a... | @charlieguo1106 | open | 2026-10-14 | 2026-10-20 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-10-20 |
| [#6704](https://github.com/ROCm/aiter/pull/6704) | [FlyDSL] Fix/flydsl a8w8 tuner gfx942 no async copy | @MHYangAMD | open | 2026-10-20 | 2026-10-20 |
| [#6526](https://github.com/ROCm/aiter/pull/6526) | [FlyDSL] [gfx1250] [MoE] Copy each prequantized a1 row once ... | @lalala-sh | open | 2026-10-14 | 2026-10-20 |
| [#5975](https://github.com/ROCm/aiter/pull/5975) | [Triton/Gluon] [Bugfix] Decouple pure-Torch FP6 packers from... | @adenzhou1350 | open | 2026-09-30 | 2026-10-20 |
| [#6417](https://github.com/ROCm/aiter/pull/6417) | [HIP] [JIT] Add fused_indexed_gated_residual for diffusion t... | @Shan2L | open | 2026-10-12 | 2026-10-20 |
| [#6390](https://github.com/ROCm/aiter/pull/6390) | [HIP] [JIT] [Build] gfx1201: SageAttention forward (INT8 QK,... | @Shan2L | open | 2026-10-10 | 2026-10-20 |
| [#6698](https://github.com/ROCm/aiter/pull/6698) | add bmm apf8wfp8 gemm and inverse rope quant kernel | @ahmed-bsod | draft | 2026-10-20 | 2026-10-20 |
| [#6052](https://github.com/ROCm/aiter/pull/6052) | [FlyDSL] [CI] MegaMoE: stage1_fused/stage2_fused switches, m... | @yanboshao | draft | 2026-10-01 | 2026-10-20 |
| [#5999](https://github.com/ROCm/aiter/pull/5999) | [Config] tuning: qwen35 bf16 gemm tuning on gfx1250 | @mqhc2020 | open | 2026-09-30 | 2026-10-20 |
| [#6272](https://github.com/ROCm/aiter/pull/6272) | MegaMoE mori path: follow mori#726, size fp4 combine flags, ... | @jhchouuu | open | 2026-10-08 | 2026-10-20 |
| [#6645](https://github.com/ROCm/aiter/pull/6645) | [Triton/Gluon] [FlyDSL] Use HIP to query XCC count and share... | @fsx950223 | open | 2026-10-17 | 2026-10-20 |
| [#6530](https://github.com/ROCm/aiter/pull/6530) | [Config] [FlyDSL] Kimi-K3 gfx1250 mxfp8_128 blockscale GEMM ... | @qichu-yun | open | 2026-10-14 | 2026-10-20 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton/Gluon] Add fused gated residual + LayerNorm + scale/... | @menglcai | open | 2026-07-28 | 2026-10-20 |
| [#6627](https://github.com/ROCm/aiter/pull/6627) | [ASM] [HIP] [JIT] gfx1201: SageAttention H3 backend (BF16 Q,... | @kaijiliu | open | 2026-10-16 | 2026-10-20 |
| [#6683](https://github.com/ROCm/aiter/pull/6683) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @afriedri | draft | 2026-10-19 | 2026-10-19 |
| [#5637](https://github.com/ROCm/aiter/pull/5637) | [Triton/Gluon] Add gfx1250 per-tensor FP8 MHA prefill | @Yu-Zhewen | open | 2026-09-17 | 2026-10-19 |
| [#6598](https://github.com/ROCm/aiter/pull/6598) | [FlyDSL] [MoE] Fix stage-1 grid leaving padded intermediate ... | @micah-wil | open | 2026-10-15 | 2026-10-19 |
| [#6628](https://github.com/ROCm/aiter/pull/6628) | Optimize mxfp4 gfx1250 gluon | @azaidy | draft | 2026-10-16 | 2026-10-19 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-10-19 |
| [#6669](https://github.com/ROCm/aiter/pull/6669) | [FlyDSL] Add gfx11 (RDNA3 / RDNA3.5) flash attention forward | @klin2024 | draft | 2026-10-19 | 2026-10-19 |
| [#6445](https://github.com/ROCm/aiter/pull/6445) | [Triton/Gluon] [HIP] Gluon PA decode: ragged (varlen) query ... | @andrei-kochin | open | 2026-10-12 | 2026-10-19 |
| [#6605](https://github.com/ROCm/aiter/pull/6605) | [FlyDSL] [Perf] [gfx950] Swap A/B in the mxfp8 8-wave epilog... | @yangyuhuiling | open | 2026-10-16 | 2026-10-19 |
| [#6586](https://github.com/ROCm/aiter/pull/6586) | [HIP] [Fix][Perf] topk_plain: correct multi-block fp16/bf16 ... | @zhentaocc | open | 2026-10-15 | 2026-10-19 |
| [#6511](https://github.com/ROCm/aiter/pull/6511) | [FlyDSL] fix(fused_moe): make the MXFP4 MoE stage2 epilogue ... | @Qubitium | open | 2026-10-14 | 2026-10-19 |
| [#6022](https://github.com/ROCm/aiter/pull/6022) | [CK] [bug fix] Fix wrong cktile 2stages `moe_gemm1_heuristic... | @fxmarty-amd | open | 2026-09-30 | 2026-10-19 |
| [#5882](https://github.com/ROCm/aiter/pull/5882) | [FlyDSL] [MLA] DeepSeek-V4 fp8 MLA decode (v4 nm) in one Fly... | @AMD-yanfeiwang | open | 2026-09-27 | 2026-10-18 |
| [#6403](https://github.com/ROCm/aiter/pull/6403) | [FlyDSL] Two-launch FlyDSL delayed mHC seam for gfx942 | @RElbers | open | 2026-10-11 | 2026-10-18 |
| [#6638](https://github.com/ROCm/aiter/pull/6638) | [Config] Add gfx950 128-CU A4W4 GEMM tunings for Qwen3.8-27B... | @fyun89 | open | 2026-10-17 | 2026-10-18 |
| [#6648](https://github.com/ROCm/aiter/pull/6648) | [HIP] [Perf] Replace contended per-tensor scale atomics with... | @akshatvishu | open | 2026-10-17 | 2026-10-18 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-10-18 |
| [#5893](https://github.com/ROCm/aiter/pull/5893) | [HIP] fix(mla): stop gfx950 MLA decode from reading wrong KV... | @vanshbhatia-amd | open | 2026-09-27 | 2026-10-18 |
| [#6277](https://github.com/ROCm/aiter/pull/6277) | [ASM] [HIP] [MLA] [Bugfix] Fix and optimize the gfx942 MLA d... | @jonahbernard | open | 2026-10-08 | 2026-10-18 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-10-18 |
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
| [#6613](https://github.com/ROCm/aiter/pull/6613) | [Triton][MHA] Proposal: Triton harness tunes MHA tiles for t... | @amd-bartgips | draft | 2026-10-16 | 2026-10-16 |
| [#6575](https://github.com/ROCm/aiter/pull/6575) | MHAv4 per-row block-sparse geometry, LSE and ragged KV on gf... | @nsakkine | draft | 2026-10-15 | 2026-10-16 |
| [#6580](https://github.com/ROCm/aiter/pull/6580) | [MHA] Tune MHA forward across every backend on the shared tu... | @amd-bartgips | draft | 2026-10-15 | 2026-10-16 |
| [#6625](https://github.com/ROCm/aiter/pull/6625) | [Triton] Harden shuffled per-token FP8 paged decode | @XiaobingSuper | draft | 2026-10-16 | 2026-10-20 |
| [#5849](https://github.com/ROCm/aiter/pull/5849) | [Tuning] A family-agnostic race for large candidate fields (... | @amd-bartgips | draft | 2026-09-25 | 2026-10-16 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [MHA] Route MHA forward through a tuned backend row | @amd-bartgips | draft | 2026-09-22 | 2026-10-16 |
| [#5846](https://github.com/ROCm/aiter/pull/5846) | [Tuning] Shared tuning contract and GatedTuner | @amd-bartgips | draft | 2026-09-25 | 2026-10-16 |
| [#6579](https://github.com/ROCm/aiter/pull/6579) | [JIT] Fix an indefinite JIT build hang when a lock holder is... | @amd-bartgips | draft | 2026-10-15 | 2026-10-16 |
| [#6614](https://github.com/ROCm/aiter/pull/6614) | Fusing dvdk and dq with split-K, using pingpong pipeline | @hellozhuo-amd | draft | 2026-10-16 | 2026-10-16 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | [FlyDSL] gfx1201 (RDNA4) FlyDSL BF16 attention optimizations... | @pds-amd | open | 2026-07-10 | 2026-10-16 |
| [#5518](https://github.com/ROCm/aiter/pull/5518) | [FlyDSL] [gfx950] Add explicit page strides and 64-bit rebas... | @LiuYinfeng01 | open | 2026-09-15 | 2026-10-16 |
| [#5817](https://github.com/ROCm/aiter/pull/5817) | [FlyDSL] [Feature] Add MiniMax-M3 gfx950 dense MXFP8 per-1x3... | @amd-yashagar | draft | 2026-09-24 | 2026-10-16 |
| [#6482](https://github.com/ROCm/aiter/pull/6482) | [Tune] Make pretune fail on tuner errors and rebuild every i... | @a-canadasruiz | draft | 2026-10-13 | 2026-10-16 |
| [#5786](https://github.com/ROCm/aiter/pull/5786) | [CI] [JIT] [Build] Make CK fmha kernel generation follow GPU... | @qiangpan2 | open | 2026-09-23 | 2026-10-16 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-10-16 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-10-16 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-10-16 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-10-16 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [HIP] [OPUS] [JIT] [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-10-16 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-10-16 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-10-16 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-10-16 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-10-16 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-10-16 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | open | 2026-08-26 | 2026-10-16 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep untuned SiLU A4W4 on native CK | @andyluo7 | open | 2026-08-27 | 2026-10-16 |
| [#5194](https://github.com/ROCm/aiter/pull/5194) | Cache the MLA split count, not the split indptr tensor | @peizhang56 | open | 2026-09-02 | 2026-10-16 |
| [#5260](https://github.com/ROCm/aiter/pull/5260) | [FlyDSL] Add tuned BF16 GEMM configs for GLM-5.2 decode shap... | @nehaprakriya | open | 2026-09-03 | 2026-10-16 |
| [#5315](https://github.com/ROCm/aiter/pull/5315) | [CK] [FlyDSL] [CI] [Bugfix] Explicit gfx in shipped fused-Mo... | @amd-bartgips | open | 2026-09-07 | 2026-10-16 |
| [#5358](https://github.com/ROCm/aiter/pull/5358) | [HIP] [FlyDSL] [JIT] Add a6w4 preshuffle GEMM from FlyDSL | @amd-satre | open | 2026-09-08 | 2026-10-16 |
| [#5450](https://github.com/ROCm/aiter/pull/5450) | [FlyDSL] [CI] [Bugfix] Rebase large MoE expert weights | @xudonlyu | open | 2026-09-11 | 2026-10-16 |
| [#5460](https://github.com/ROCm/aiter/pull/5460) | [FlyDSL] Store fp8 MoE stage2 output through 64-bit pointers | @jamesbowley | open | 2026-09-11 | 2026-10-16 |
| [#5462](https://github.com/ROCm/aiter/pull/5462) | [FlyDSL] Tune MiniMax MXFP8 prefill MoE | @coderfeli | open | 2026-09-11 | 2026-10-16 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-10-16 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-10-16 |
| [#5704](https://github.com/ROCm/aiter/pull/5704) | [FlyDSL] [CI] [gfx1250] stage1 fused for mega-moe EP | @XingerZhu | open | 2026-09-20 | 2026-10-16 |
| [#5744](https://github.com/ROCm/aiter/pull/5744) | [FlyDSL] [AMD][MoE] Avoid layout-v2 stage2 and over-padded t... | @karverma-amd | open | 2026-09-22 | 2026-10-16 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-10-16 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-10-16 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-10-16 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-10-16 |
| [#5802](https://github.com/ROCm/aiter/pull/5802) | [FlyDSL] [Bugfix] Route a16w4 SiLU MoE to CK-Tile and apply ... | @kevin-mii | open | 2026-09-24 | 2026-10-16 |
| [#5884](https://github.com/ROCm/aiter/pull/5884) | [FlyDSL] Respect GPU_ARCHS for Grouped MoE AOT builds | @chandankumr | open | 2026-09-27 | 2026-10-16 |
| [#5925](https://github.com/ROCm/aiter/pull/5925) | [FlyDSL] [FP4 MQA logits] Stop serving-time recompiles of _p... | @AMD-yanfeiwang | open | 2026-09-29 | 2026-10-16 |
| [#5948](https://github.com/ROCm/aiter/pull/5948) | [HIP] Fix 3D binary-op broadcast guard for incompatible shap... | @adenzhou1350 | open | 2026-09-29 | 2026-10-16 |
| [#6486](https://github.com/ROCm/aiter/pull/6486) | [HIP][Bugfix] Fix Gluon PA AOT compatibility for asymmetric ... | @sammysun0711 | open | 2026-10-13 | 2026-10-16 |
| [#6567](https://github.com/ROCm/aiter/pull/6567) | [FlyDSL] Optimize FlyDSL grouped MoE kernels | @yadaish | open | 2026-10-15 | 2026-10-16 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | draft | 2026-09-18 | 2026-10-16 |
| [#5883](https://github.com/ROCm/aiter/pull/5883) | Ci timeout fix recon | @TennyWang1223 | draft | 2026-09-27 | 2026-10-16 |
| [#6595](https://github.com/ROCm/aiter/pull/6595) | [Triton/Gluon] [Config] Tune gfx1250 Gluon a16w16 GEMMs for ... | @erizheng-amd | draft | 2026-10-15 | 2026-10-15 |
| [#5379](https://github.com/ROCm/aiter/pull/5379) | [Config] [MoE] Add Qwen3.8 Flash Next FP8 tuned config for P... | @sammysun0711 | open | 2026-09-09 | 2026-10-15 |
| [#5148](https://github.com/ROCm/aiter/pull/5148) | [FlyDSL] Single-launch decode GEMM: in-kernel blockscale, ra... | @johannes-graner | draft | 2026-08-31 | 2026-10-15 |
| [#6016](https://github.com/ROCm/aiter/pull/6016) | [CK] [CI] [Bugfix] Align FMoE tuning token buckets with runt... | @yuzhouo7 | open | 2026-09-30 | 2026-10-15 |
| [#6013](https://github.com/ROCm/aiter/pull/6013) | [CK] [CI] [Bugfix] Fix gfx942 FLAT candidates in ASM FMoE tu... | @yuzhouo7 | open | 2026-09-30 | 2026-10-15 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-10-15 |
| [#6419](https://github.com/ROCm/aiter/pull/6419) | [gfx950] a4w4: route triton_preshuffle tuned rows to Triton ... | @vorapolsiloai | draft | 2026-10-12 | 2026-10-15 |
| [#6444](https://github.com/ROCm/aiter/pull/6444) | [HIP] PA decode PS reduce: optional query_start_loc for ragg... | @andrei-kochin | open | 2026-10-12 | 2026-10-15 |
| [#6560](https://github.com/ROCm/aiter/pull/6560) | MHAv4 split-KV | @nsakkine | draft | 2026-10-15 | 2026-10-15 |
| [#6188](https://github.com/ROCm/aiter/pull/6188) | [HIP] Fix out-of-bounds read in MLA metadata planner when he... | @simondanielsson | open | 2026-10-06 | 2026-10-15 |
| [#6070](https://github.com/ROCm/aiter/pull/6070) | [HIP] Fuse mHC RMSNorm with per-token FP8 quant for gfx950 p... | @Raiden-Makoto | open | 2026-10-01 | 2026-10-15 |
| [#5977](https://github.com/ROCm/aiter/pull/5977) | [ASM] [HIP] [gfx1250] asm mha bf16 hd192x128: strided q/k/v/... | @shay-li77 | open | 2026-09-30 | 2026-10-15 |
| [#6515](https://github.com/ROCm/aiter/pull/6515) | [FlyDSL] [QSA] Add QSA paged MQA logits MFMA scorer for pref... | @zovonoir | open | 2026-10-14 | 2026-10-15 |
| [#6113](https://github.com/ROCm/aiter/pull/6113) | [FlyDSL] Fix force-reduce Stage-2 dispatch | @chandankumr | open | 2026-10-03 | 2026-10-15 |
| [#6360](https://github.com/ROCm/aiter/pull/6360) | [FlyDSL] [Bugfix] gfx1250 grouped MoE: read integer config c... | @jhinpan | open | 2026-10-10 | 2026-10-15 |
| [#6483](https://github.com/ROCm/aiter/pull/6483) | [FlyDSL] Add gfx950 SonicMoE forward and backward | @jayzlee147 | open | 2026-10-13 | 2026-10-15 |
| [#6430](https://github.com/ROCm/aiter/pull/6430) | [FlyDSL] [CI] [MoE] MegaMoE gfx1250: stage1/stage2 switches,... | @jhchouuu | open | 2026-10-12 | 2026-10-15 |
| [#6308](https://github.com/ROCm/aiter/pull/6308) | [FlyDSL] Feat/compact plan align32 | @james-huang09 | open | 2026-10-09 | 2026-10-15 |
| [#6170](https://github.com/ROCm/aiter/pull/6170) | [FlyDSL] [MoE] Fix a race in the async stage-1 LDS pipeline;... | @jiaweche | open | 2026-10-06 | 2026-10-15 |
| [#5913](https://github.com/ROCm/aiter/pull/5913) | [FlyDSL] feat(2stageGR) Two-stage Hyper-Connection Gated Res... | @damien-lejeune | open | 2026-09-28 | 2026-10-15 |
| [#6047](https://github.com/ROCm/aiter/pull/6047) | [FlyDSL] MiniMax-M3 fused sparse-layer decode | @akii96 | open | 2026-10-01 | 2026-10-15 |
| [#6065](https://github.com/ROCm/aiter/pull/6065) | [FlyDSL] [Perf] Add exact-M8 native MXFP4 GLM MoE route merg... | @heslami | open | 2026-10-01 | 2026-10-15 |
| [#5899](https://github.com/ROCm/aiter/pull/5899) | [FlyDSL] [gfx1250] Overlap decode compact plan with dispatch | @XingerZhu | open | 2026-09-28 | 2026-10-15 |
| [#6537](https://github.com/ROCm/aiter/pull/6537) | [FlyDSL] Dev/yadai moe v2 | @yadaish | open | 2026-10-14 | 2026-10-15 |
| [#6342](https://github.com/ROCm/aiter/pull/6342) | [FlyDSL] fix: handle float strings in _as_int for CSV config... | @srinivamd | open | 2026-10-09 | 2026-10-15 |
| [#6136](https://github.com/ROCm/aiter/pull/6136) | [FlyDSL] Optimize gfx1250 A4W4 MoE prefill with fused GEMM1 ... | @yanguahe | open | 2026-10-04 | 2026-10-15 |
| [#6566](https://github.com/ROCm/aiter/pull/6566) | fix(attention): zero empty decode rows in unified attention | @XiaobingSuper | draft | 2026-10-15 | 2026-10-15 |
| [#6426](https://github.com/ROCm/aiter/pull/6426) | [FlyDSL] GLM-5.2 o_proj opt for gfx950 | @IzacharyI | open | 2026-10-12 | 2026-10-15 |
| [#6191](https://github.com/ROCm/aiter/pull/6191) | [CK] [FlyDSL] Mxfp8 w_scale 1*32 | @solinzby1 | open | 2026-10-07 | 2026-10-15 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-10-15 |
| [#6064](https://github.com/ROCm/aiter/pull/6064) | [FlyDSL] [Perf] Add exact-M4 native MXFP4 GLM MoE pipeline | @heslami | open | 2026-10-01 | 2026-10-15 |
| [#5897](https://github.com/ROCm/aiter/pull/5897) | [WIP] [Triton/Gluon] gfx950 a16w16: compute-bound Gluon kern... | @zhanglx13 | draft | 2026-09-28 | 2026-10-15 |
| [#6533](https://github.com/ROCm/aiter/pull/6533) | [HIP] [FlyDSL] Add OPUS FP4 MQA writer and query scale layou... | @junhaha666 | open | 2026-10-14 | 2026-10-15 |
| [#5733](https://github.com/ROCm/aiter/pull/5733) | [HIP] [OPUS] [JIT] Revert " [GFX950]OPUS PA MQA Logits MXFP4... | @junhaha666 | open | 2026-09-21 | 2026-10-15 |
| [#5855](https://github.com/ROCm/aiter/pull/5855) | [MORI] Multi-node + MORI_V2 | @k50112113 | open | 2026-09-25 | 2026-10-15 |
| [#5955](https://github.com/ROCm/aiter/pull/5955) | [HIP] [JIT] Fuse six-way split-K reduction and q/KV RMSNorm | @heslami | open | 2026-09-29 | 2026-10-15 |
| [#6164](https://github.com/ROCm/aiter/pull/6164) | [FlyDSL] fp8_mqa_logits gfx942: add LDS-staged variant, use ... | @akii96 | draft | 2026-10-06 | 2026-10-15 |
| [#6555](https://github.com/ROCm/aiter/pull/6555) | Satya/tuning rel to default | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6553](https://github.com/ROCm/aiter/pull/6553) | Satya/tuning preempt local best | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6554](https://github.com/ROCm/aiter/pull/6554) | satya/tuning_search_space | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6540](https://github.com/ROCm/aiter/pull/6540) | [FlyDSL] All reduce fusion silotiger 1277 | @vedenev-amd | draft | 2026-10-14 | 2026-10-14 |
| [#5347](https://github.com/ROCm/aiter/pull/5347) | [Feature] Add manifest-driven static-page batch prefill disp... | @vstakhov-amd | draft | 2026-09-08 | 2026-10-14 |
| [#6051](https://github.com/ROCm/aiter/pull/6051) | [Bugfix] Support asymmetric Q/K and V heads in unified atten... | @pbkowalski | draft | 2026-10-01 | 2026-10-14 |
| [#6534](https://github.com/ROCm/aiter/pull/6534) | MHAv4 require BSHD inputs with only a contiguous last dimens... | @nsakkine | draft | 2026-10-14 | 2026-10-14 |
| [#6529](https://github.com/ROCm/aiter/pull/6529) | [Config] [MoE] [gfx950] Add MiniMax-M3 TP=2 decode FMOE shap... | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-14 |
| [#6532](https://github.com/ROCm/aiter/pull/6532) | [MoE] Report online fmoe tune failures and share one tune pa... | @a-canadasruiz | draft | 2026-10-14 | 2026-10-14 |
| [#6487](https://github.com/ROCm/aiter/pull/6487) | [Triton/Gluon] Extend Gluon PA benchmark for asymmetric K/V ... | @sammysun0711 | draft | 2026-10-13 | 2026-10-14 |
| [#6512](https://github.com/ROCm/aiter/pull/6512) | [HIP] [OPUS] [JIT] Add gfx950 BF16 MoE training backward | @yifehuan | draft | 2026-10-14 | 2026-10-14 |
| [#6305](https://github.com/ROCm/aiter/pull/6305) | [Test] Time with cuda.Event when the torch build has no Kine... | @zufayu | open | 2026-10-09 | 2026-10-14 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | Cache the paged_attention_v1 launch plan to fix batch=1 deco... | @zjin-lcf | open | 2026-08-03 | 2026-10-14 |
| [#6248](https://github.com/ROCm/aiter/pull/6248) | [WIP] [HIP] [FlyDSL] [CI] Feat/topk select tuner | @MHYangAMD | open | 2026-10-08 | 2026-10-14 |
| [#6175](https://github.com/ROCm/aiter/pull/6175) | [FlyDSL] HSTU Backward performance improvement | @damien-lejeune | draft | 2026-10-06 | 2026-10-14 |
| [#6292](https://github.com/ROCm/aiter/pull/6292) | [ASM] [HIP] [JIT] gfx1201: Sol sparse attention for MiniMax-... | @Shan2L | draft | 2026-10-08 | 2026-10-14 |
| [#6513](https://github.com/ROCm/aiter/pull/6513) | [CI] [Test] Fail the Windows smoke test when no GPU is visib... | @zufayu | open | 2026-10-14 | 2026-10-14 |
| [#6510](https://github.com/ROCm/aiter/pull/6510) | [Triton/Gluon] [GFX12] 8-wave-ping-pong mxfp8 GEMM | @k50112113 | draft | 2026-10-14 | 2026-10-14 |
| [#6509](https://github.com/ROCm/aiter/pull/6509) | [Config] Add gfx950 bf16 GEMM tunings for Qwen3 480B shapes | @jbelloncastro | open | 2026-10-14 | 2026-10-14 |
| [#5692](https://github.com/ROCm/aiter/pull/5692) | [Triton/Gluon] [ASM] [HIP] Chefang/fix pa gqa16 short tail p... | @fangche123 | draft | 2026-09-20 | 2026-10-14 |
| [#5900](https://github.com/ROCm/aiter/pull/5900) | [ASM] [HIP] [JIT] [Feature] Add gfx1201 SageAttention operat... | @Shan2L | draft | 2026-09-28 | 2026-10-14 |
| [#6066](https://github.com/ROCm/aiter/pull/6066) | gfx1201: MiniMax-H3 multi-GPU (Ulysses SP2/4/8) ops | @Shan2L | draft | 2026-10-01 | 2026-10-14 |
| [#6506](https://github.com/ROCm/aiter/pull/6506) | [FlyDSL] Extend fused KDA decode to GLM-5.3 on gfx950 | @Raiden-Makoto | draft | 2026-10-13 | 2026-10-13 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-10-13 |
| [#6241](https://github.com/ROCm/aiter/pull/6241) | [Triton/Gluon] Add improved fused kv cache kernel for DSR1 | @azaidy | open | 2026-10-08 | 2026-10-13 |
| [#6141](https://github.com/ROCm/aiter/pull/6141) | [CI] [gfx950] Execute pytest regressions in standard shards ... | @chandankumr | open | 2026-10-05 | 2026-10-13 |
| [#5970](https://github.com/ROCm/aiter/pull/5970) | [JIT] [kernel] Add an opt-in hipBLASLt grouped GEMM backend ... | @WuLei-AMD | open | 2026-09-30 | 2026-10-13 |
| [#6124](https://github.com/ROCm/aiter/pull/6124) | [Triton/Gluon] [Bugfix] Guard SiLU backward on unsupported a... | @DaiXindi-AMD | open | 2026-10-03 | 2026-10-13 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [JIT] [gfx942] Optimize long-context FMHA with s... | @amd-yashagar | open | 2026-09-16 | 2026-10-13 |
| [#6322](https://github.com/ROCm/aiter/pull/6322) | [HIP] [Bugfix] sampling radix_topk_one_block_kernel: honor r... | @truong-v | open | 2026-10-09 | 2026-10-13 |
| [#6375](https://github.com/ROCm/aiter/pull/6375) | [ASM] Rebuild gfx950 fp8 block-scale fused-MoE 64x128, 64x25... | @samremes | open | 2026-10-10 | 2026-10-13 |
| [#6353](https://github.com/ROCm/aiter/pull/6353) | [CI] Install Mori for multi-GPU tests | @gyohuangxin | open | 2026-10-10 | 2026-10-13 |
| [#6238](https://github.com/ROCm/aiter/pull/6238) | [Triton/Gluon] [gfx1250]  batched a16w8/a8w8/bf16: fp8 outpu... | @karverma-amd | open | 2026-10-08 | 2026-10-13 |
| [#6311](https://github.com/ROCm/aiter/pull/6311) | [Perf][gfx1250] Add  ubench for atlas runner | @JiaoliangYu | draft | 2026-10-09 | 2026-10-13 |
| [#6356](https://github.com/ROCm/aiter/pull/6356) | [CK] [Bugfix] Fix gfx1250 grouped MoE tuning and re-tune 18 ... | @jhinpan | open | 2026-10-10 | 2026-10-13 |
| [#3242](https://github.com/ROCm/aiter/pull/3242) | [Bugfix] Fix op schema for fmha_v3_fowd and gemm_a16w16 | @Phi-C | open | 2026-05-18 | 2026-10-13 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-10-13 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [CK] [JIT] [feature] Extract C++ code to jinja template file... | @jbelloncastro | open | 2026-06-18 | 2026-10-13 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | [CK] Simplify ck_gemm_a8w8_blockscale GemmSpecialization con... | @jbelloncastro | open | 2026-06-19 | 2026-10-13 |
| [#6434](https://github.com/ROCm/aiter/pull/6434) | [Triton/Gluon] PA decode: split PS work on whole partitions,... | @jiaqiang-dot-liu | draft | 2026-10-12 | 2026-10-12 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-10-12 |
| [#6091](https://github.com/ROCm/aiter/pull/6091) | [HIP] [MLA] Fix non-uniform query offsets after head folding | @xaguilar-amd | open | 2026-10-02 | 2026-10-12 |
| [#5910](https://github.com/ROCm/aiter/pull/5910) | [fix] Make dropout-free varlen attention inference CUDA-grap... | @lauri9 | open | 2026-09-28 | 2026-10-12 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | [FlyDSL] Implement FlyDSL version of fused_qk_norm_mrope_3d_... | @amd-meskelin | open | 2026-07-24 | 2026-10-12 |
| [#6358](https://github.com/ROCm/aiter/pull/6358) | [Config] [gfx1250] Select the FlyDSL kernel for 20 BF16 GEMM... | @jhinpan | open | 2026-10-10 | 2026-10-12 |
| [#6184](https://github.com/ROCm/aiter/pull/6184) | [Bugfix][fused_moe] Do not use the inline-sort MXFP4 path wh... | @Fangzhou-Ai | open | 2026-10-06 | 2026-10-12 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-10-12 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-10-12 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-10-12 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-10-12 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-10-12 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-10-12 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-10-12 |
| [#5870](https://github.com/ROCm/aiter/pull/5870) | [Config] Qwen3.8-Flash-Next FP8 tuned configs for gfx950 (MI... | @mavizao | open | 2026-09-26 | 2026-10-12 |
| [#6404](https://github.com/ROCm/aiter/pull/6404) | [FlyDSL] Support hidden 6144 in the INT4 QuickReduce + RMSNo... | @akii96 | draft | 2026-10-11 | 2026-10-11 |
| [#6108](https://github.com/ROCm/aiter/pull/6108) | [Triton/Gluon] Add non-causal support to unified attention | @amd-xavierwang | open | 2026-10-02 | 2026-10-11 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-10-11 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-10-11 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-10-11 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-10-11 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-10-11 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [HIP] [MLA v4 nm] Drop kv_last_page_lens from ABI + self-con... | @amd-ruitang3 | open | 2026-07-21 | 2026-10-11 |
| [#4656](https://github.com/ROCm/aiter/pull/4656) | Rm sort for decode gdr | @IzacharyI | open | 2026-08-10 | 2026-10-11 |
| [#4696](https://github.com/ROCm/aiter/pull/4696) | Fix multi-rank JIT import race for on-demand modules | @Lzy17 | open | 2026-08-11 | 2026-10-11 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-10-11 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | [CI] [JIT] Add gfx1201 BF16 G1U1 selected large-M Triton MoE... | @keneoneth | open | 2026-08-27 | 2026-10-11 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [JIT] fix(jit): baton liveness is undecidable f... | @ThomasNing | open | 2026-09-03 | 2026-10-11 |
| [#5223](https://github.com/ROCm/aiter/pull/5223) | [HIP] [Feature] OPUS bf16 flash-attn: head dim 64, attention... | @siqiy-cerebras | open | 2026-09-03 | 2026-10-10 |
| [#6330](https://github.com/ROCm/aiter/pull/6330) | [FlyDSL] A4W4 compact MoE: MXFP4 prefill MoE for gfx950 (Min... | @akii96 | draft | 2026-10-09 | 2026-10-10 |
| [#5821](https://github.com/ROCm/aiter/pull/5821) | [Config] [DSv4] Tuned decode moe kernels for mori-EP backend... | @heachary | open | 2026-09-24 | 2026-10-10 |
| [#6363](https://github.com/ROCm/aiter/pull/6363) | [AMD] Add DeepSeek-V4.1-Flash TP4 A8W4 MoE rows (E385, top-7... | @amd-pedghazi | draft | 2026-10-10 | 2026-10-10 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-10-10 |
| [#5938](https://github.com/ROCm/aiter/pull/5938) | [JIT] fix(jit): keep detached-head advice local to third-par... | @adenzhou1350 | open | 2026-09-29 | 2026-10-10 |
| [#6295](https://github.com/ROCm/aiter/pull/6295) | fix(fused_moe): rank get_block_size_M candidates by useful w... | @jiaweche | open | 2026-10-09 | 2026-10-10 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-10-10 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-10-10 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-10-10 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-10-10 |
| [#4915](https://github.com/ROCm/aiter/pull/4915) | [Config] [Kimi K3 fix] Drop gfx942/gfx950 opus rows from the... | @hyukjlee | open | 2026-08-21 | 2026-10-10 |
| [#4957](https://github.com/ROCm/aiter/pull/4957) | [MLA] Fix gfx942 gqa64 sparse-MLA decode GPU fault (route to... | @raviguptaamd | open | 2026-08-24 | 2026-10-10 |
| [#5064](https://github.com/ROCm/aiter/pull/5064) | [HIP] [JIT] [Kernel][Perf][Hardware][gfx1201] Add RX 9070 XT... | @davidchen-rocm | open | 2026-08-28 | 2026-10-10 |
| [#5087](https://github.com/ROCm/aiter/pull/5087) | [HIP] [BugFix] Fix BF16 FMHA extreme negative logits | @akshatvishu | open | 2026-08-28 | 2026-10-10 |
| [#5219](https://github.com/ROCm/aiter/pull/5219) | [Config] DSv4 TP8 a8w8 blockscale bpreshuffle: add Flash and... | @kevin-mii | open | 2026-09-02 | 2026-10-10 |
| [#5220](https://github.com/ROCm/aiter/pull/5220) | [HIP] pa_sparse_prefill: address out with its own strides | @kevin-mii | open | 2026-09-03 | 2026-10-10 |
| [#5278](https://github.com/ROCm/aiter/pull/5278) | [Config] Add gfx950 a8w8_blockscale tunings for GLM-5.3 shap... | @stefanskiasan | open | 2026-09-04 | 2026-10-10 |
| [#5688](https://github.com/ROCm/aiter/pull/5688) | [Config] configs(glm5.2): o_proj switches to CK Tile at M=10... | @ThomasNing | open | 2026-09-19 | 2026-10-10 |
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
| [#3682](https://github.com/ROCm/aiter/pull/3682) | Fix the mla bf16 16mx4 kernel random nan error in MI350 | @minmengdie | open | 2026-06-11 | 2026-10-07 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-10-07 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-10-07 |
| [#3766](https://github.com/ROCm/aiter/pull/3766) | Fix batched_gemm_a16wfp4 split-K garbage output / OOB for sm... | @srinivamd | open | 2026-06-17 | 2026-10-07 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-10-07 |
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
| [#4704](https://github.com/ROCm/aiter/pull/4704) | [fmoe] Add extern_moe_output param for combine zero-copy | @kawhil-amd | open | 2026-08-12 | 2026-10-07 |
| [#4715](https://github.com/ROCm/aiter/pull/4715) | [FlyDSL] split-K hgemm: make semaphore/signal workspace CUDA... | @xiaohuguo2023 | draft | 2026-08-12 | 2026-10-07 |
| [#4739](https://github.com/ROCm/aiter/pull/4739) | [Misc] Harden AITER_ASM_DIR code-object loading | @fjankovi | draft | 2026-08-13 | 2026-10-07 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-10-07 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-10-07 |
| [#4758](https://github.com/ROCm/aiter/pull/4758) | [Gluon][MLA] Deeper async-copy pipeline in the bh16 stage-1 ... | @amd-ethany | open | 2026-08-14 | 2026-10-07 |
| [#4762](https://github.com/ROCm/aiter/pull/4762) | feat(moe): consume prepared stage1 activation scales | @JohnQin-llm | open | 2026-08-14 | 2026-10-07 |
| [#4771](https://github.com/ROCm/aiter/pull/4771) | [Triton][FMHA] Fused paged-prefill kernel for page_size=1, h... | @amd-ethany | open | 2026-08-15 | 2026-10-07 |
| [#4775](https://github.com/ROCm/aiter/pull/4775) | [Attention] Expose paged MQA SplitKV override | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-10-07 |
| [#4778](https://github.com/ROCm/aiter/pull/4778) | [gfx1100] Enable RDNA3 in arch allow-list + Triton GEMM A8W8... | @okone1995 | open | 2026-08-15 | 2026-10-07 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-10-07 |
| [#4786](https://github.com/ROCm/aiter/pull/4786) | fix(custom_all_reduce): use SYSTEM scope + ACQUIRE ordering ... | @hekhong-png | open | 2026-08-16 | 2026-10-07 |
| [#4794](https://github.com/ROCm/aiter/pull/4794) | [HIP] [OPUS] [JIT] Chefang/pa decode opus | @fangche123 | open | 2026-08-17 | 2026-10-07 |
| [#4802](https://github.com/ROCm/aiter/pull/4802) | Refactor bench_mha to use -o as boolean flag | @AlexeySachkov | open | 2026-08-17 | 2026-10-07 |
| [#4812](https://github.com/ROCm/aiter/pull/4812) | Fix gfx1250 (NPS2, DPX mode) custom all-reduce input publica... | @hubertlu-tw | draft | 2026-08-17 | 2026-10-07 |
| [#4813](https://github.com/ROCm/aiter/pull/4813) | [HIP] [JIT] Fused MiniMaxM3 QKNorm+RoPE+CacheInsert | @weitliao | open | 2026-08-18 | 2026-10-07 |
| [#4817](https://github.com/ROCm/aiter/pull/4817) | [HIP] fix: support torch.Stream in ctypes conversion | @chuyeh | open | 2026-08-18 | 2026-10-07 |
| [#4845](https://github.com/ROCm/aiter/pull/4845) | [HIP] Support mixed-dtype inputs in biased grouped top-k | @BadrBasowid | open | 2026-08-19 | 2026-10-07 |
| [#4881](https://github.com/ROCm/aiter/pull/4881) | [CI] ci: add DCO signoff check | @gyohuangxin | draft | 2026-08-20 | 2026-10-07 |
| [#4880](https://github.com/ROCm/aiter/pull/4880) | [Triton/Gluon] fix pa_prefill perf regression for small HEAD... | @mengfei-jiang | open | 2026-08-20 | 2026-10-07 |
| [#4962](https://github.com/ROCm/aiter/pull/4962) | [CI] ci: add Kimi and MiniMax to ATOM DI matrix | @JiaoliangYu | open | 2026-08-24 | 2026-10-07 |
| [#4975](https://github.com/ROCm/aiter/pull/4975) | [Build] [Feature] Add MK1 persistent decoder provider | @ssharma4-amd | open | 2026-08-24 | 2026-10-07 |
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
| [#5456](https://github.com/ROCm/aiter/pull/5456) | [OPUS] add ut test for sparse mla kernel | @minmengdie | open | 2026-09-11 | 2026-10-07 |
| [#5517](https://github.com/ROCm/aiter/pull/5517) | [HIP] [CI] [JIT] [ROCm][MoE] Fused routing preamble: add a s... | @heslami | open | 2026-09-15 | 2026-10-07 |
| [#5549](https://github.com/ROCm/aiter/pull/5549) | [CK] [FlyDSL] [FMoE] Enable Silu A16W4 INTERLEAVE fused_moe ... | @SamiAario-AMD | open | 2026-09-15 | 2026-10-07 |
| [#5591](https://github.com/ROCm/aiter/pull/5591) | test: repro for paged-MQA-logits Preshuffle=False OOB and sc... | @HongliMi | open | 2026-09-16 | 2026-10-07 |
| [#5593](https://github.com/ROCm/aiter/pull/5593) | [ASM] [HIP] [OPUS] Chefang/pa decode opus latest | @fangche123 | open | 2026-09-16 | 2026-10-07 |
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
| [#5562](https://github.com/ROCm/aiter/pull/5562) | [Perf] Add gfx950 DSV4.1 Flash EP4 a8w4 FMoE tuning | @kevin-mii | draft | 2026-09-15 | 2026-09-25 |
| [#5825](https://github.com/ROCm/aiter/pull/5825) | [FlyDSL] Opt-in gfx942 SiLU A16W4 support and DSv4.1 Flash t... | @frida-andersson | draft | 2026-09-24 | 2026-09-25 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
| [#5757](https://github.com/ROCm/aiter/pull/5757) | Qwe38 flash mxfp4 asm | @JohnNikolay84 | draft | 2026-09-22 | 2026-09-22 |
| [#5404](https://github.com/ROCm/aiter/pull/5404) | [CK] [FlyDSL] [Perf] Add BM16 SwiGLU path for MiniMax M3 | @XiaobingSuper | draft | 2026-09-10 | 2026-09-21 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables + fix MXFP4 aux... | @JiaoliangYu | draft | 2026-09-20 | 2026-09-20 |
| [#5625](https://github.com/ROCm/aiter/pull/5625) | [Config] [tuning] Add DSv4 a4w4 fused-MoE tuning tables for ... | @JiaoliangYu | draft | 2026-09-17 | 2026-09-19 |
| [#5242](https://github.com/ROCm/aiter/pull/5242) | [WIP] TP MOE fusion | @charlieguo1106 | draft | 2026-09-03 | 2026-09-18 |
| [#5068](https://github.com/ROCm/aiter/pull/5068) | Add gfx1250 a8w8 mxscale BMM scaffold with preshuffled B. | @yzhou103 | draft | 2026-08-28 | 2026-09-17 |
| [#5455](https://github.com/ROCm/aiter/pull/5455) | .agent_loop: orchestration layer driving review-pr and valid... | @demonsan | draft | 2026-09-11 | 2026-09-17 |
| [#5561](https://github.com/ROCm/aiter/pull/5561) | [Bugfix] Drain FlyDSL stage-1 LDS-DMA loads before the tile ... | @kevin-mii | draft | 2026-09-15 | 2026-09-17 |
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
| [#6763](https://github.com/ROCm/aiter/pull/6763) | [Config] [GFX1250] Kimi-K3 TP8 gemm tune | @zejunchen-zejun | merged | 2026-10-21 | 2026-10-25 |
| [#6864](https://github.com/ROCm/aiter/pull/6864) | [FlyDSL] [gfx1250] Batched mxfp8_32 GEMM with 32x32 weight s... | @yhl-amd | merged | 2026-10-23 | 2026-10-25 |
| [#5921](https://github.com/ROCm/aiter/pull/5921) | [FlyDSL] fp8_mqa_logits: derive the split target from kernel... | @akii96 | merged | 2026-09-29 | 2026-10-25 |
| [#6874](https://github.com/ROCm/aiter/pull/6874) | [Triton/Gluon] Fix gfx950 AFP4WFP4 tiles for Qwen3.8-27B-MXF... | @a-sidorova | merged | 2026-10-23 | 2026-10-25 |
| [#6621](https://github.com/ROCm/aiter/pull/6621) | [HIP] [FlyDSL] [JIT] [gfx1250] Add MXFP4 a4w4 GEMM with tune... | @aoli26 | merged | 2026-10-16 | 2026-10-25 |
| [#6863](https://github.com/ROCm/aiter/pull/6863) | [FlyDSL] [gfx1250] Paged FP8 MQA logits with 8-token KV page... | @yhl-amd | merged | 2026-10-23 | 2026-10-24 |
| [#6813](https://github.com/ROCm/aiter/pull/6813) | [Triton/Gluon] : Add common functions for rotating buffers a... | @rahulbatra85 | merged | 2026-10-22 | 2026-10-24 |
| [#6888](https://github.com/ROCm/aiter/pull/6888) | [Triton/Gluon] [gfx1250] unified_attention: fast split-KV re... | @vgokhale | merged | 2026-10-23 | 2026-10-23 |
| [#6890](https://github.com/ROCm/aiter/pull/6890) | [Triton/Gluon] [Config] add DSV4 Flash MOE tunned config | @k50112113 | merged | 2026-10-23 | 2026-10-23 |
| [#6741](https://github.com/ROCm/aiter/pull/6741) | [Triton/Gluon] [Config] [Perf] Retune gfx950 preshuffled AFP... | @afriedri | merged | 2026-10-20 | 2026-10-23 |
| [#6850](https://github.com/ROCm/aiter/pull/6850) | [Triton/Gluon] Add Triton A8W8 Per-token Preshuffled GEMM | @farlukas | merged | 2026-10-22 | 2026-10-23 |
| [#6772](https://github.com/ROCm/aiter/pull/6772) | [Triton/Gluon] [Config] [gfx1100] Add RMSNorm large-M/small-... | @TwelveNights | merged | 2026-10-21 | 2026-10-23 |
| [#6780](https://github.com/ROCm/aiter/pull/6780) | [Triton/Gluon] [Config] [Perf] Tune gfx950 BF16 batched GEMM... | @lucas-santos-amd | merged | 2026-10-21 | 2026-10-23 |
| [#6834](https://github.com/ROCm/aiter/pull/6834) | [HIP] [Bugfix] Fix topk_sigmoid pybind conversion | @rjrock | merged | 2026-10-22 | 2026-10-23 |
| [#6878](https://github.com/ROCm/aiter/pull/6878) | [CI] Increase MI35X Triton test timeout budget | @gyohuangxin | merged | 2026-10-23 | 2026-10-23 |
| [#6862](https://github.com/ROCm/aiter/pull/6862) | [Config] Add gfx950 a8w8 blockscale bpreshuffle GEMM tunings... | @lishuoshuo-amd | merged | 2026-10-23 | 2026-10-23 |
| [#4486](https://github.com/ROCm/aiter/pull/4486) | [HIP] [CI] fix(cpp_itfs/pa): make the C++ paged_attention_ra... | @jiejingzhangamd | merged | 2026-07-31 | 2026-10-23 |
| [#5634](https://github.com/ROCm/aiter/pull/5634) | [CI] Enable MiniMax-M3 MXFP8 2P1D TP8 ATOM DI CI use cases | @avininjamay8 | merged | 2026-09-17 | 2026-10-23 |
| [#6479](https://github.com/ROCm/aiter/pull/6479) | Stop reporting a fast-kernel failure that never ran in test_... | @yzhou103 | merged | 2026-10-13 | 2026-10-23 |
| [#6520](https://github.com/ROCm/aiter/pull/6520) | [HIP] [JIT] [Feature] Add fused Mega-MHC for DeepSeek V4.1 | @junhaha666 | merged | 2026-10-14 | 2026-10-23 |
| [#6694](https://github.com/ROCm/aiter/pull/6694) | [ASM] [HIP] Align persistent workgroup count for fmoe kernel... | @AndreasKaratzas | merged | 2026-10-20 | 2026-10-23 |
| [#6756](https://github.com/ROCm/aiter/pull/6756) | [HIP] fix: gfx1250 LL ar | @TennyWang1223 | merged | 2026-10-21 | 2026-10-23 |
| [#6257](https://github.com/ROCm/aiter/pull/6257) | [HIP] Opt biased grouped topk gfx1250 | @yzhou103 | merged | 2026-10-08 | 2026-10-23 |
| [#6107](https://github.com/ROCm/aiter/pull/6107) | [HIP] [JIT] [Feature] MLA decode: add get_mla_decode_shape_s... | @okorzh-amd | merged | 2026-10-02 | 2026-10-23 |
| [#6198](https://github.com/ROCm/aiter/pull/6198) | [HIP] [Fix] mla_decode_stage1_asm_fwd: reject MLA rows that ... | @jin-amd | merged | 2026-10-07 | 2026-10-23 |
| [#6663](https://github.com/ROCm/aiter/pull/6663) | [FlyDSL] [gfx1250] Fix the dropped K tail and the bias colum... | @lalala-sh | merged | 2026-10-19 | 2026-10-23 |
| [#6748](https://github.com/ROCm/aiter/pull/6748) | [JIT] [FMHA] Round CK FMHA bf16 conversions to nearest inste... | @AndreasKaratzas | merged | 2026-10-21 | 2026-10-23 |
| [#3438](https://github.com/ROCm/aiter/pull/3438) | sglang downstream: run 8-GPU tests on the DO MI350X runner l... | @okakarpa | merged | 2026-05-30 | 2026-10-23 |
| [#6691](https://github.com/ROCm/aiter/pull/6691) | [ASM] Check model_dim for gfx950 fp8 blockscale fused-MoE 1-... | @AndreasKaratzas | merged | 2026-10-20 | 2026-10-23 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-10-25T12:49:51Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2691](https://github.com/ROCm/ATOM/pull/2691) | fix(kimi-k3): zero-pad the dense MLP's MXFP4 K; refuse an un... | @rbrugaro-amd | open | 2026-10-24 | 2026-10-25 |
| [#2701](https://github.com/ROCm/ATOM/pull/2701) | fix(kimi-k3): load a checkpoint with statically FP8-quantize... | @rbrugaro-amd | open | 2026-10-25 | 2026-10-25 |
| [#2697](https://github.com/ROCm/ATOM/pull/2697) | fix(dp): a decoding rank replays the group's prefill token-g... | @yhl-amd | open | 2026-10-24 | 2026-10-25 |
| [#2684](https://github.com/ROCm/ATOM/pull/2684) | perf(engram): copy the UVA shard into page-locked memory ins... | @ZhangLirong-amd | open | 2026-10-23 | 2026-10-25 |
| [#2698](https://github.com/ROCm/ATOM/pull/2698) | perf(qwen3.5): one-kernel GDN decode on gfx1250 | @ahmed-bsod | draft | 2026-10-24 | 2026-10-24 |
| [#2695](https://github.com/ROCm/ATOM/pull/2695) | [OpenAI] Serve the MLPerf Endpoints agentic client: top_k=0 ... | @yhl-amd | open | 2026-10-24 | 2026-10-24 |
| [#2617](https://github.com/ROCm/ATOM/pull/2617) | [gfx1250] DeepSeek-V4.1: run on gfx1250 (MI455X) with FlyDSL... | @yhl-amd | open | 2026-10-16 | 2026-10-24 |
| [#2689](https://github.com/ROCm/ATOM/pull/2689) | perf(qwen3_5): use the fused GDN in_proj GEMM on Quark MXFP4... | @ahmed-bsod | draft | 2026-10-23 | 2026-10-24 |
| [#2694](https://github.com/ROCm/ATOM/pull/2694) | test(observability): allow additional runner startup RPCs | @NidhoggD1 | draft | 2026-10-24 | 2026-10-24 |
| [#2687](https://github.com/ROCm/ATOM/pull/2687) | [MiniMax-M3.1] Load the MiniMax-M3.1-Flash release checkpoin... | @wuhuikx | draft | 2026-10-23 | 2026-10-24 |
| [#2686](https://github.com/ROCm/ATOM/pull/2686) | [MiniMax-M3.1] Enable Mono decode with fixed DSpark verify (... | @wuhuikx | draft | 2026-10-23 | 2026-10-24 |
| [#2678](https://github.com/ROCm/ATOM/pull/2678) | [MiniMax-M3.1] Day-0 support for MiniMax-M3.1-Flash: Quark M... | @wuhuikx | open | 2026-10-23 | 2026-10-24 |
| [#2582](https://github.com/ROCm/ATOM/pull/2582) | feat(spec-decode): probability-ratio rejection sampling behi... | @rbrugaro-amd | open | 2026-10-14 | 2026-10-25 |
| [#1872](https://github.com/ROCm/ATOM/pull/1872) | [ATOM SGL] change ci scope for 0.5.20 | @ZhiweiYan-96 | open | 2026-08-12 | 2026-10-24 |
| [#2680](https://github.com/ROCm/ATOM/pull/2680) | perf: flat API-process GC on long serving runs; DCP top-k ex... | @ChengYao-amd | open | 2026-10-23 | 2026-10-24 |
| [#2561](https://github.com/ROCm/ATOM/pull/2561) | feat(rtpllm): support Qwen3.8 ATOM MTP target and draft as w... | @junna2016 | open | 2026-10-14 | 2026-10-24 |
| [#2641](https://github.com/ROCm/ATOM/pull/2641) | Add initial muse spark support | @azaidy | open | 2026-10-19 | 2026-10-24 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-10-23 |
| [#2656](https://github.com/ROCm/ATOM/pull/2656) | feat(qwen3.5): Qwen3.5-397B mono decode | @amd-weisun | open | 2026-10-20 | 2026-10-23 |
| [#2581](https://github.com/ROCm/ATOM/pull/2581) | feat(kimi-k3): DFlash GQA speculative draft model | @rbrugaro-amd | open | 2026-10-14 | 2026-10-23 |
| [#2604](https://github.com/ROCm/ATOM/pull/2604) | fix(cudagraph): run the model runner on a High-priority stre... | @nehmathe2 | open | 2026-10-16 | 2026-10-23 |
| [#2335](https://github.com/ROCm/ATOM/pull/2335) | [Feature] IQ2R glm53_moe: load packed 2-bit MoE checkpoints ... | @ssharma4-amd | open | 2026-09-21 | 2026-10-23 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat(v4): mixed prefill+decode batching with DSpark and TBO | @jiayyu | open | 2026-08-26 | 2026-10-23 |
| [#2676](https://github.com/ROCm/ATOM/pull/2676) | fix(sglang): avoid HIP segfault in xgrammar json_object bitm... | @zhangxinyuanliuhengyu | open | 2026-10-22 | 2026-10-23 |
| [#2272](https://github.com/ROCm/ATOM/pull/2272) | [CI][ROCm][ATOMesh] Add MiniMax-M3-FP8 2P1D TP8 catalog case... | @avininjamay8 | open | 2026-09-17 | 2026-10-23 |
| [#2509](https://github.com/ROCm/ATOM/pull/2509) | Enable MoRI-io connector write mode & fix spur issues | @lcskrishna | open | 2026-10-09 | 2026-10-23 |
| [#2125](https://github.com/ROCm/ATOM/pull/2125) | [PCP] Shard `shared_experts` on the folded TP grid, and sync... | @yitingw1 | draft | 2026-09-03 | 2026-10-23 |
| [#2337](https://github.com/ROCm/ATOM/pull/2337) | [CI][ROCm][ATOMesh] Add DeepSeek-V4-Pro 2P1D TP8 catalog cas... | @avininjamay8 | open | 2026-09-21 | 2026-10-23 |
| [#2685](https://github.com/ROCm/ATOM/pull/2685) | fix(v41): run lmcache_mp under encoder SWA bounded replay | @ZhangLirong-amd | draft | 2026-10-23 | 2026-10-23 |
| [#2610](https://github.com/ROCm/ATOM/pull/2610) | feat(qwen): integrate TP1 and TP8 ordinary Mono decode | @yifehuan | open | 2026-10-16 | 2026-10-23 |
| [#2679](https://github.com/ROCm/ATOM/pull/2679) | refactor(qsa): use aiter QSA kernels instead of vendored cop... | @mengfei-jiang | open | 2026-10-23 | 2026-10-23 |
| [#2508](https://github.com/ROCm/ATOM/pull/2508) | [ATOMesh] Add GLM-5.2-MXFP4 2P1D TP8 coverage | @itej89 | open | 2026-10-09 | 2026-10-23 |
| [#2675](https://github.com/ROCm/ATOM/pull/2675) | [Plugin][SGLang] GDN mamba radix cache (extra_buffer, page 6... | @zovonoir | open | 2026-10-22 | 2026-10-23 |
| [#2658](https://github.com/ROCm/ATOM/pull/2658) | EAGLE3 speculative decoding support for LLama/Qwen3 models | @kyle-hoffmeyer | open | 2026-10-20 | 2026-10-22 |
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#2647](https://github.com/ROCm/ATOM/pull/2647) | feat(tp): run one tensor-parallel group across nodes | @gbyu-amd | open | 2026-10-20 | 2026-10-22 |
| [#2677](https://github.com/ROCm/ATOM/pull/2677) | fix(ci): expose container engine errors and guard SGLang cle... | @junyyang-amd | open | 2026-10-22 | 2026-10-22 |
| [#2673](https://github.com/ROCm/ATOM/pull/2673) | feat(eplb): add step_peak placement policy (ported from Deep... | @HaonanWang98 | draft | 2026-10-22 | 2026-10-22 |
| [#2664](https://github.com/ROCm/ATOM/pull/2664) | fix(kimi-k3): lazy-import the Triton MLA builder; fix(atomes... | @junyyang-amd | open | 2026-10-21 | 2026-10-22 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-30 | 2026-10-22 |
| [#2659](https://github.com/ROCm/ATOM/pull/2659) | [Kimi-K3] mono: serve 16-row and drafter-tapped steps, optio... | @ganyi1996ppo | open | 2026-10-21 | 2026-10-22 |
| [#2425](https://github.com/ROCm/ATOM/pull/2425) | [ATOM][PD][Feat] Transfer KV by chunk | @MengqingCao | open | 2026-09-29 | 2026-10-22 |
| [#2643](https://github.com/ROCm/ATOM/pull/2643) | gemm_fusion: opt-in fused QKV prologue for MiniMax-M3 under ... | @demonsan | open | 2026-10-20 | 2026-10-22 |
| [#2661](https://github.com/ROCm/ATOM/pull/2661) | [DSpark] let --max-num-seqs 1 start: size the engine for 2, ... | @ganyi1996ppo | open | 2026-10-21 | 2026-10-22 |
| [#2598](https://github.com/ROCm/ATOM/pull/2598) | DeepSeek-V4.1-Flash: LMCache tier offload through the MP ser... | @PerryZhang01 | open | 2026-10-15 | 2026-10-22 |
| [#2671](https://github.com/ROCm/ATOM/pull/2671) | [Plugin][SGLang] Qwen3.5 mamba radix cache (extra_buffer, pa... | @zovonoir | draft | 2026-10-22 | 2026-10-22 |
| [#2499](https://github.com/ROCm/ATOM/pull/2499) | [MoonEP] Balance MegaMoE prefill with MoonEP | @JiaoliangYu | open | 2026-10-08 | 2026-10-22 |
| [#2563](https://github.com/ROCm/ATOM/pull/2563) | feat(eplb): decode expert swap | @JiaoliangYu | open | 2026-10-14 | 2026-10-22 |
| [#2645](https://github.com/ROCm/ATOM/pull/2645) | perf(sglang-atom): CUDA graphs for the Qwen3.8-Flash-Next MT... | @zovonoir | open | 2026-10-20 | 2026-10-22 |
| [#2662](https://github.com/ROCm/ATOM/pull/2662) | feat(mono): Qwen3.8-Flash-Next mono decode | @ssharma4-amd | open | 2026-10-21 | 2026-10-22 |
| [#2665](https://github.com/ROCm/ATOM/pull/2665) | perf(moe): Triton softmax top-k routing for captured graphs | @ZLkanyo009 | open | 2026-10-21 | 2026-10-22 |
| [#2667](https://github.com/ROCm/ATOM/pull/2667) | fix(sglang): keep Flash full decode graph correct with mamba... | @zhangxinyuanliuhengyu | open | 2026-10-21 | 2026-10-22 |
| [#2668](https://github.com/ROCm/ATOM/pull/2668) | fix(offload): make the state-tier CPU budget a reservation i... | @ZLkanyo009 | open | 2026-10-21 | 2026-10-22 |
| [#2639](https://github.com/ROCm/ATOM/pull/2639) | refactor(mono): use FlyDSL JIT and typed device APIs | @coderfeli | open | 2026-10-19 | 2026-10-22 |
| [#2605](https://github.com/ROCm/ATOM/pull/2605) | [Scheduler] Keep DP-attention ranks in one phase during pref... | @karverma-amd | open | 2026-10-16 | 2026-10-21 |
| [#2575](https://github.com/ROCm/ATOM/pull/2575) | feat(v4): integrate OPUS FP4 MQA layouts and scheduling | @junhaha666 | open | 2026-10-14 | 2026-10-21 |
| [#2620](https://github.com/ROCm/ATOM/pull/2620) | [Kimi-K3 DSpark] Pad the draft's block decode to 96 query he... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-21 |
| [#2456](https://github.com/ROCm/ATOM/pull/2456) | [AMD][DSR1] feat(dp): backpressure (lazy) DP dispatch to avo... | @karverma-amd | open | 2026-10-02 | 2026-10-21 |
| [#2632](https://github.com/ROCm/ATOM/pull/2632) | [GLM-5.2] recipe: run mono decode at MTP3 on C1/C2; record #... | @ZhiweiYan-96 | open | 2026-10-19 | 2026-10-21 |
| [#2653](https://github.com/ROCm/ATOM/pull/2653) | perf(sglang): aiter FlyDSL QSA sparse attention for Qwen3.8-... | @zovonoir | draft | 2026-10-20 | 2026-10-21 |
| [#2635](https://github.com/ROCm/ATOM/pull/2635) | fix(qwen3.5): keep PAGE checkpoint images out of the KV rows... | @ZLkanyo009 | open | 2026-10-19 | 2026-10-21 |
| [#2649](https://github.com/ROCm/ATOM/pull/2649) | perf(qwen4-exp): keep 128-aligned MXFP4 expert intermediate ... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2650](https://github.com/ROCm/ATOM/pull/2650) | feat(qwen4-exp): online PTPC FP8 for the GDN in_proj, with f... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2651](https://github.com/ROCm/ATOM/pull/2651) | perf(qwen4-exp): stack index heads into M for the QSA decode... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2652](https://github.com/ROCm/ATOM/pull/2652) | feat(qwen4-exp): FP8 KV and FP8 / FP4 index caches for QSA | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2654](https://github.com/ROCm/ATOM/pull/2654) | fix(mtp): keep side-stream D2H sources alive until the copy ... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2655](https://github.com/ROCm/ATOM/pull/2655) | fix(qwen4-exp): register the QSA FP8 scale planes for KV off... | @ZLkanyo009 | open | 2026-10-20 | 2026-10-21 |
| [#2636](https://github.com/ROCm/ATOM/pull/2636) | [Qwen 3.8] LMCache offload for QSA + GDN + PLE state | @ZLkanyo009 | open | 2026-10-19 | 2026-10-20 |
| [#2646](https://github.com/ROCm/ATOM/pull/2646) | [DO NOT MERGE] Test ATOM accuracy on PITT runner label | @gyohuangxin | open | 2026-10-20 | 2026-10-20 |
| [#2562](https://github.com/ROCm/ATOM/pull/2562) | [ATOM] accelerate lm cache: load the CPU prefix when the Qwe... | @ZLkanyo009 | open | 2026-10-14 | 2026-10-20 |
| [#2628](https://github.com/ROCm/ATOM/pull/2628) | feat(minimax-m3): per-token fp8 KV cache on gfx1250 through ... | @lirui927 | draft | 2026-10-19 | 2026-10-20 |
| [#2594](https://github.com/ROCm/ATOM/pull/2594) | fix(attention): run MiniMax-M3 on gfx1250 (unified decode, B... | @XiaobingSuper | draft | 2026-10-15 | 2026-10-20 |
| [#2638](https://github.com/ROCm/ATOM/pull/2638) | feat(minimax-m3): route gfx1250 paged decode to FlyDSL when ... | @lirui927 | draft | 2026-10-19 | 2026-10-20 |
| [#2364](https://github.com/ROCm/ATOM/pull/2364) | feat(sp): add Ulysses sequence parallelism and optimize M3 p... | @whx-sjtu | open | 2026-09-23 | 2026-10-20 |
| [#2621](https://github.com/ROCm/ATOM/pull/2621) | feat(offload): run lmcache_mp under multi-node DP with one l... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-20 |
| [#2497](https://github.com/ROCm/ATOM/pull/2497) | [DO NOT MERGE] Re-test CI approval orchestration | @gyohuangxin | open | 2026-10-08 | 2026-10-20 |
| [#2453](https://github.com/ROCm/ATOM/pull/2453) | [1/3 entrypoint refactor] [feat(mesh)]: unify multi-API ingr... | @Yuechguo | open | 2026-10-02 | 2026-10-20 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [Lumen-RL] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-10-20 |
| [#2629](https://github.com/ROCm/ATOM/pull/2629) | follow-up(#2535): mono review items that need no GPU | @ganyi1996ppo | open | 2026-10-19 | 2026-10-20 |
| [#2559](https://github.com/ROCm/ATOM/pull/2559) | feat(dsv4): DeepSeek-V4 mono decode | @amd-weisun | open | 2026-10-13 | 2026-10-19 |
| [#2374](https://github.com/ROCm/ATOM/pull/2374) | ci: avoid restarting tests on PR approval | @leo-automation | open | 2026-09-23 | 2026-10-19 |
| [#2557](https://github.com/ROCm/ATOM/pull/2557) | fix(mla): plan persistent decode over the rows q/o have | @gbyu-amd | open | 2026-10-13 | 2026-10-19 |
| [#2630](https://github.com/ROCm/ATOM/pull/2630) | [3/3 entrypoint refactor]  move the atomesh standalone data ... | @Yuechguo | draft | 2026-10-19 | 2026-10-19 |
| [#2624](https://github.com/ROCm/ATOM/pull/2624) | [WIP][feat]: bound dense MHA/GQA cached-prefill gather works... | @MengqingCao | open | 2026-10-19 | 2026-10-19 |
| [#2493](https://github.com/ROCm/ATOM/pull/2493) | [MiniMax-M3] Score the lightning indexer with aiter's FlyDSL... | @ganyi1996ppo | open | 2026-10-08 | 2026-10-19 |
| [#2554](https://github.com/ROCm/ATOM/pull/2554) | feat(kimi-k3): E8M0 block scales for online per_1x128 FP8 on... | @qichu-yun | open | 2026-10-13 | 2026-10-19 |
| [#2606](https://github.com/ROCm/ATOM/pull/2606) | fix(qwen4_exp): load unscaled Quark MTP weights as BF16 | @ZLkanyo009 | open | 2026-10-16 | 2026-10-18 |
| [#2619](https://github.com/ROCm/ATOM/pull/2619) | fix(atomesh): keep dashboard metrics finite without dropping... | @kvnloo | open | 2026-10-16 | 2026-10-18 |
| [#2600](https://github.com/ROCm/ATOM/pull/2600) | scheduler: add DP prefill-sync mode to avoid group-wide eage... | @karverma-amd | open | 2026-10-15 | 2026-10-17 |
| [#2616](https://github.com/ROCm/ATOM/pull/2616) | fix(moe): preserve MoRI v2 live-row contract | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2614](https://github.com/ROCm/ATOM/pull/2614) | fix(minimax-m3): enable per-token FP8 KV on gfx1250 | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2615](https://github.com/ROCm/ATOM/pull/2615) | fix(blockscale): gate row-major group32 GEMM by arch | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2298](https://github.com/ROCm/ATOM/pull/2298) | [Lumen-RL] Receive trained weights over RCCL, transactionall... | @i-chaochen | open | 2026-09-19 | 2026-10-16 |
| [#2608](https://github.com/ROCm/ATOM/pull/2608) | (recipe) Add Qwen3.8-Flash-Next AgentX Recipe | @zhuyuhua-v | draft | 2026-10-16 | 2026-10-16 |
| [#2357](https://github.com/ROCm/ATOM/pull/2357) | feat(plugin): DeepSeek-V4.1-Flash on the vLLM plugin, with L... | @PerryZhang01 | open | 2026-09-22 | 2026-10-16 |
| [#2597](https://github.com/ROCm/ATOM/pull/2597) | add asm mla qh64 kvsf  | @feifei14119 | open | 2026-10-15 | 2026-10-16 |
| [#2596](https://github.com/ROCm/ATOM/pull/2596) | [DP] Decouple prefill cost balancing from PrefillDelayer, ro... | @zejunchen-zejun | draft | 2026-10-15 | 2026-10-16 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | open | 2026-09-07 | 2026-10-16 |
| [#2403](https://github.com/ROCm/ATOM/pull/2403) | fix(gdn): store the temporal state in the checkpoint's mamba... | @eky-amd | open | 2026-09-25 | 2026-10-16 |
| [#2248](https://github.com/ROCm/ATOM/pull/2248) | [WIP]fix(attention): stabilize MLA/MHA outputs for piecewise... | @MengqingCao | open | 2026-09-15 | 2026-10-16 |
| [#2585](https://github.com/ROCm/ATOM/pull/2585) | Test ATOM accuracy on DI MI350X8 runner | @gyohuangxin | draft | 2026-10-15 | 2026-10-15 |
| [#2587](https://github.com/ROCm/ATOM/pull/2587) | [ATOM][CI][Kimi-K3] Enable on-demand checkpoint mechanism in... | @MengqingCao | draft | 2026-10-15 | 2026-10-15 |
| [#2565](https://github.com/ROCm/ATOM/pull/2565) | fix(attention): prevent int32 overflow in cached KV gather | @MengqingCao | open | 2026-10-14 | 2026-10-15 |
| [#2570](https://github.com/ROCm/ATOM/pull/2570) | [ATOMesh][MoRIIO] Enable Kimi K3 and update the MoRI IO chan... | @lcskrishna | open | 2026-10-14 | 2026-10-15 |
| [#2576](https://github.com/ROCm/ATOM/pull/2576) | ci(benchmark): run AgentX benchmarks with agentx-harness 1.0... | @Jasen2201 | open | 2026-10-14 | 2026-10-15 |
| [#2405](https://github.com/ROCm/ATOM/pull/2405) | [MORI] Multi-node + MORI_V2- #5855 | @k50112113 | open | 2026-09-25 | 2026-10-15 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | perf(eplb): remove shared-expert cold-start and decode overh... | @JiaoliangYu | draft | 2026-08-17 | 2026-10-14 |
| [#2516](https://github.com/ROCm/ATOM/pull/2516) | feat(k3): cache prefill checkpoints in spare STATE slots | @MengqingCao | draft | 2026-10-10 | 2026-10-14 |
| [#2365](https://github.com/ROCm/ATOM/pull/2365) | [feature] support pp>1 for Kimi-K3 | @gbyu-amd | open | 2026-09-23 | 2026-10-14 |
| [#2555](https://github.com/ROCm/ATOM/pull/2555) | fix(deepseek_v41): run native eager V4.1 on gfx942 | @zhangxinyuanliuhengyu | open | 2026-10-13 | 2026-10-14 |
| [#2501](https://github.com/ROCm/ATOM/pull/2501) | fix(plugin/dsv4): score 1-token prefill rows on the dense in... | @linsun12 | open | 2026-10-08 | 2026-10-13 |
| [#2529](https://github.com/ROCm/ATOM/pull/2529) | Add Qwen3.8 FlyDSL HC and long-context QSA index CP | @coderfeli | open | 2026-10-11 | 2026-10-13 |
| [#2546](https://github.com/ROCm/ATOM/pull/2546) | MiniMax-M3 recipe: move the CONC 40/48 CPU tier to LMCache M... | @yitingw1 | draft | 2026-10-12 | 2026-10-12 |
| [#2544](https://github.com/ROCm/ATOM/pull/2544) | feat(diag): record per-step routed expert counts (ATOM_EXPER... | @JiaoliangYu | draft | 2026-10-12 | 2026-10-12 |
| [#2542](https://github.com/ROCm/ATOM/pull/2542) | ci: tune GLM-5.2 FP8 MTP3 benchmark memory | @gyohuangxin | draft | 2026-10-12 | 2026-10-12 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-10-12 |
| [#2511](https://github.com/ROCm/ATOM/pull/2511) | feat(attention): add BLASST block skipping to the Triton pre... | @amd-sonsingh | open | 2026-10-10 | 2026-10-12 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-10-10 |
| [#2505](https://github.com/ROCm/ATOM/pull/2505) | fix(mxfp4): dispatch explicit scale layouts | @XiaobingSuper | draft | 2026-10-09 | 2026-10-09 |
| [#2500](https://github.com/ROCm/ATOM/pull/2500) | tools/roofline: system-level roofline with per-operator dril... | @zufayu | draft | 2026-10-08 | 2026-10-08 |
| [#2469](https://github.com/ROCm/ATOM/pull/2469) | feat(scheduler): reserve KV for projected decode growth | @amd-ruitang3 | open | 2026-10-04 | 2026-10-08 |
| [#1978](https://github.com/ROCm/ATOM/pull/1978) | feat(eplb):avoid local copy in eplb; move build l2p to devic... | @JiaoliangYu | draft | 2026-08-21 | 2026-10-08 |
| [#2471](https://github.com/ROCm/ATOM/pull/2471) | feat(observability): add decode-step engine stats | @amd-ruitang3 | open | 2026-10-04 | 2026-10-08 |
| [#2486](https://github.com/ROCm/ATOM/pull/2486) | [gfx1250] Add ATOM_MLA_ABSORB_A16W8: BF16-activation x FP8-w... | @karverma-amd | open | 2026-10-07 | 2026-10-08 |
| [#2489](https://github.com/ROCm/ATOM/pull/2489) | [gfx1250] Add ATOM_MLA_ABSORB_BF16: keep MLA-absorb weights ... | @karverma-amd | open | 2026-10-07 | 2026-10-08 |
| [#2490](https://github.com/ROCm/ATOM/pull/2490) | [gfx1250] MLA absorb: emit ql_nope in the fp8 KV-cache dtype | @karverma-amd | open | 2026-10-08 | 2026-10-08 |
| [#2406](https://github.com/ROCm/ATOM/pull/2406) | fix(offload): include exception type in dense lookup warning... | @kvnloo | open | 2026-09-25 | 2026-10-07 |
| [#2481](https://github.com/ROCm/ATOM/pull/2481) | [ATOM-vLLM] Add support for GLM-5.3-Flash with LMCache offlo... | @kliuae | open | 2026-10-06 | 2026-10-07 |
| [#2295](https://github.com/ROCm/ATOM/pull/2295) | Add GPT-OSS IQ2R 2-bit MoE integration | @ssharma4-amd | open | 2026-09-18 | 2026-10-06 |
| [#2329](https://github.com/ROCm/ATOM/pull/2329) | Add GLM-5.3-Flash IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-10-06 |
| [#2470](https://github.com/ROCm/ATOM/pull/2470) | fix(logging): isolate atom logger and support ATOM_LOG_LEVEL | @amd-ruitang3 | open | 2026-10-04 | 2026-10-06 |
| [#2447](https://github.com/ROCm/ATOM/pull/2447) | fix(kimi-k3): add compatibility fallback for ptpc SiTU quant | @XiaobingSuper | draft | 2026-10-02 | 2026-10-05 |
| [#2333](https://github.com/ROCm/ATOM/pull/2333) | [WIP] Integrate MoonEP policies with MoRI and fused_moe | @JiaoliangYu | draft | 2026-09-21 | 2026-10-04 |
| [#2452](https://github.com/ROCm/ATOM/pull/2452) | fix(minimax-m3): order mono stores before their done flags; ... | @akii96 | open | 2026-10-02 | 2026-10-03 |
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
| [#2141](https://github.com/ROCm/ATOM/pull/2141) | feat: add GLM-5.3-Flash multimodal support | @cubezhang | open | 2026-09-04 | 2026-09-14 |
| [#2122](https://github.com/ROCm/ATOM/pull/2122) | fix(minimax-m3): unblock fp8 KV cache and EAGLE3 spec decode... | @PerryZhang01 | open | 2026-09-03 | 2026-09-14 |
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
| [#1889](https://github.com/ROCm/ATOM/pull/1889) | [kernel opt] add flydsl attention for m3 | @ZLkanyo009 | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1743](https://github.com/ROCm/ATOM/pull/1743) | mtp support blocksize other than 1 | @HaonanWang98 | open | 2026-07-30 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-08-11 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#837](https://github.com/ROCm/ATOM/pull/837) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-07-03 |
| [#2613](https://github.com/ROCm/ATOM/pull/2613) | [FlyDSL] [gfx1250] Add opt-in MXFP4 linear path via AITER ge... | @aoli26 | merged | 2026-10-16 | 2026-10-25 |
| [#2696](https://github.com/ROCm/ATOM/pull/2696) | fix: replay one prefill token-graph bucket across DP ranks; ... | @valarLip | merged | 2026-10-24 | 2026-10-24 |
| [#2644](https://github.com/ROCm/ATOM/pull/2644) | feat(observability): add opt-in standalone OpenTelemetry tra... | @NidhoggD1 | merged | 2026-10-20 | 2026-10-24 |
| [#2692](https://github.com/ROCm/ATOM/pull/2692) | fix(tbo): decode ubatch metadata follows the micro-batch spl... | @valarLip | merged | 2026-10-24 | 2026-10-24 |
| [#2693](https://github.com/ROCm/ATOM/pull/2693) | feat(v41): split the mono indexer's rows over the TP ranks | @valarLip | merged | 2026-10-24 | 2026-10-24 |
| [#2690](https://github.com/ROCm/ATOM/pull/2690) | fix(v41): declare TR-graph breaks inside the boundary ops | @valarLip | merged | 2026-10-24 | 2026-10-24 |
| [#2688](https://github.com/ROCm/ATOM/pull/2688) | refactor: one graph mechanism per region, settled DP step sh... | @valarLip | merged | 2026-10-23 | 2026-10-23 |
| [#2586](https://github.com/ROCm/ATOM/pull/2586) | feat(dsv4): enable Mono decode by default | @yifehuan | merged | 2026-10-15 | 2026-10-23 |
| [#2682](https://github.com/ROCm/ATOM/pull/2682) | perf(entrypoint): cache prompt tokenization by special-token... | @ZhangLirong-amd | merged | 2026-10-23 | 2026-10-23 |
| [#2683](https://github.com/ROCm/ATOM/pull/2683) | fix(v41): bound mono candidate prefetches without branching | @ZhangLirong-amd | merged | 2026-10-23 | 2026-10-23 |
| [#2568](https://github.com/ROCm/ATOM/pull/2568) | feat(mhc): use HIP Mega-MHC by default for supported DeepSee... | @junhaha666 | merged | 2026-10-14 | 2026-10-23 |
| [#2666](https://github.com/ROCm/ATOM/pull/2666) | feat(v41): support P/D disaggregation (Mooncake) | @ZhangLirong-amd | merged | 2026-10-21 | 2026-10-23 |
| [#2618](https://github.com/ROCm/ATOM/pull/2618) | docs(index): correct ATOM acronym | @peterjunpark | merged | 2026-10-16 | 2026-10-23 |
| [#2674](https://github.com/ROCm/ATOM/pull/2674) | ci(atomesh): submit TW jobs only with the amd-atom account | @junyyang-amd | merged | 2026-10-22 | 2026-10-22 |
| [#2670](https://github.com/ROCm/ATOM/pull/2670) | perf: reuse speculative output buffers and combine status D2... | @valarLip | merged | 2026-10-21 | 2026-10-22 |
| [#2669](https://github.com/ROCm/ATOM/pull/2669) | fix(mla): migrate Triton decode to maintained aiter API | @junhaha666 | merged | 2026-10-21 | 2026-10-21 |
| [#1177](https://github.com/ROCm/ATOM/pull/1177) | remove unnecessary fp8 scale for vllm plugin | @ganyi1996ppo | merged | 2026-06-11 | 2026-10-21 |
| [#934](https://github.com/ROCm/ATOM/pull/934) | [Fix] Enable dpsk r1 mxfp4 V2 model | @qichu-yun | merged | 2026-05-26 | 2026-10-21 |
| [#232](https://github.com/ROCm/ATOM/pull/232) | CI: Add path filters to ATOM test workflow | @gyohuangxin | merged | 2026-02-24 | 2026-10-21 |
| [#215](https://github.com/ROCm/ATOM/pull/215) | Add workflow to kill Docker containers and check ROCm on MI3... | @okakarpa | merged | 2026-02-13 | 2026-10-21 |
| [#213](https://github.com/ROCm/ATOM/pull/213) | Add workflow to kill Docker containers and check ROCm on MI3... | @okakarpa | merged | 2026-02-13 | 2026-10-21 |
| [#128](https://github.com/ROCm/ATOM/pull/128) | Ps gluon update | @gbyu-amd | merged | 2026-01-12 | 2026-10-21 |
| [#2607](https://github.com/ROCm/ATOM/pull/2607) | fix(dsa): chunk the indexer decode logits into a shared work... | @HaonanWang98 | merged | 2026-10-16 | 2026-10-21 |
| [#2625](https://github.com/ROCm/ATOM/pull/2625) | fix(atomesh-ci): TW Spur weekly failures (Mesh cache, PENDIN... | @junyyang-amd | merged | 2026-10-19 | 2026-10-21 |
| [#2601](https://github.com/ROCm/ATOM/pull/2601) | Profiling graph capture of the draft runner | @mohbasit | merged | 2026-10-15 | 2026-10-21 |
| [#2637](https://github.com/ROCm/ATOM/pull/2637) | fix(sglang-atom): fill the per-step GDN prefill indices for ... | @zovonoir | merged | 2026-10-19 | 2026-10-21 |
| [#2648](https://github.com/ROCm/ATOM/pull/2648) | ci(atomesh): stabilize MI350 Spur P/D benchmarks | @junyyang-amd | merged | 2026-10-20 | 2026-10-20 |
| [#2584](https://github.com/ROCm/ATOM/pull/2584) | fix(sglang): size Flash QSA context from the checkpoint | @ZLkanyo009 | merged | 2026-10-15 | 2026-10-20 |
| [#2592](https://github.com/ROCm/ATOM/pull/2592) | [Recipe] Qwen3.5 AgentX on MI355X | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-20 |
| [#2642](https://github.com/ROCm/ATOM/pull/2642) | dsv41 offload: look up only the extent a load can end on | @linsun12 | merged | 2026-10-19 | 2026-10-20 |
| [#2640](https://github.com/ROCm/ATOM/pull/2640) | ci: make the security scans pass on ATOM | @leo-automation | merged | 2026-10-19 | 2026-10-20 |
| [#2626](https://github.com/ROCm/ATOM/pull/2626) | fix(kimi-k3): give the bf16 f_b_proj a real copy of f_a at o... | @gbyu-amd | merged | 2026-10-19 | 2026-10-19 |
| [#2449](https://github.com/ROCm/ATOM/pull/2449) | fix(k3-offload): stop advertising evicted KDA state images, ... | @Jasen2201 | merged | 2026-10-02 | 2026-10-19 |
| [#2591](https://github.com/ROCm/ATOM/pull/2591) | [Qwen 3.5] Midstep GDN state checkpoints; write and allocate... | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-16 |
| [#2589](https://github.com/ROCm/ATOM/pull/2589) | [State checkpoint] Keep the prompt-end anchor clear of the c... | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-16 |
| [#2612](https://github.com/ROCm/ATOM/pull/2612) | fix(moe): remove per-layer MORI all2all log | @JiaoliangYu | merged | 2026-10-16 | 2026-10-16 |
| [#2609](https://github.com/ROCm/ATOM/pull/2609) | [FlyDSL] Cap paged-decode plans at 64 partitions for head_di... | @ZhiweiYan-96 | merged | 2026-10-16 | 2026-10-16 |
| [#2535](https://github.com/ROCm/ATOM/pull/2535) | feat(mono): GLM-5.2 and Kimi-K3 mono decode, with the kernel... | @ganyi1996ppo | merged | 2026-10-12 | 2026-10-16 |
| [#2611](https://github.com/ROCm/ATOM/pull/2611) | [Kimi-K3] Run the DSpark draft at 4 tokens on every AgentX b... | @gbyu-amd | merged | 2026-10-16 | 2026-10-16 |
| [#2549](https://github.com/ROCm/ATOM/pull/2549) | [Qwen 3.5] Pack GDN PAGE checkpoint images from segment addr... | @ZhiweiYan-96 | merged | 2026-10-13 | 2026-10-16 |
| [#2593](https://github.com/ROCm/ATOM/pull/2593) | feat(kimi-k3): add on-demand PD recipe with 128 GiB state ca... | @MengqingCao | merged | 2026-10-15 | 2026-10-16 |
| [#2494](https://github.com/ROCm/ATOM/pull/2494) | feat(plugin): DeepSeek-V4.1-Flash on the vLLM plugin backend | @PerryZhang01 | merged | 2026-10-08 | 2026-10-16 |
| [#2603](https://github.com/ROCm/ATOM/pull/2603) | ci: relax MiniMax-M2.7 accuracy threshold | @gyohuangxin | merged | 2026-10-16 | 2026-10-16 |
| [#2533](https://github.com/ROCm/ATOM/pull/2533) | [MLA] Address Triton decode KV rows with int64 ids | @zejunchen-zejun | merged | 2026-10-12 | 2026-10-16 |
| [#2599](https://github.com/ROCm/ATOM/pull/2599) | [Scheduler] #2588 follow-ups: stop the cold prefix walk at i... | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-16 |
| [#2532](https://github.com/ROCm/ATOM/pull/2532) | [GDN][DP][Prefix cache] Reset stateless rows to PAD so the D... | @zejunchen-zejun | merged | 2026-10-12 | 2026-10-16 |
| [#2588](https://github.com/ROCm/ATOM/pull/2588) | [Scheduler] Take prompt hashing and the prefix walk off the ... | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-15 |
| [#2429](https://github.com/ROCm/ATOM/pull/2429) | [ATOM] Enable DPA comm-fused MoE reduce-scatter with compact... | @yifehuan | merged | 2026-09-30 | 2026-10-15 |
| [#2496](https://github.com/ROCm/ATOM/pull/2496) | [DSA][DCP] Split the sparse-prefill indexer by query row ins... | @ganyi1996ppo | merged | 2026-10-08 | 2026-10-15 |
| [#2502](https://github.com/ROCm/ATOM/pull/2502) | fix(plugin/dsv4): correct DeepSeek-V4 prefix hits, cudagraph... | @linsun12 | merged | 2026-10-08 | 2026-10-15 |
| [#2595](https://github.com/ROCm/ATOM/pull/2595) | fix(qwen4_exp): keep the PLE table BF16 for Quark checkpoint... | @zhuyuhua-v | merged | 2026-10-15 | 2026-10-15 |
| [#2590](https://github.com/ROCm/ATOM/pull/2590) | [GDN] Publish num_accepted_tokens in one non-blocking copy i... | @ZhiweiYan-96 | merged | 2026-10-15 | 2026-10-15 |
| [#2569](https://github.com/ROCm/ATOM/pull/2569) | perf(v41): run decoder SWA bounded replay under DP attention | @ZhangLirong-amd | merged | 2026-10-14 | 2026-10-15 |
| [#2384](https://github.com/ROCm/ATOM/pull/2384) | feat(moe): enable mega stage1_fused on fp4/fp8 dispatch wire | @yanboshao | merged | 2026-09-24 | 2026-10-15 |
| [#2466](https://github.com/ROCm/ATOM/pull/2466) | fix(mxfp4): force compatible gfx1250 Triton GEMM | @XiaobingSuper | merged | 2026-10-04 | 2026-10-15 |
| [#2578](https://github.com/ROCm/ATOM/pull/2578) | feat(openai): accept an OpenAI-spec token-array `prompt` on ... | @amd-ruitang3 | merged | 2026-10-14 | 2026-10-14 |
| [#2572](https://github.com/ROCm/ATOM/pull/2572) | perf(v4): score FP4 decode top-k in the batch-keyed core, no... | @ZhangLirong-amd | merged | 2026-10-14 | 2026-10-14 |
| [#2579](https://github.com/ROCm/ATOM/pull/2579) | fix(scheduler): re-probe HBM after the tier answer when it c... | @ZhangLirong-amd | merged | 2026-10-14 | 2026-10-14 |
| [#2547](https://github.com/ROCm/ATOM/pull/2547) | perf(offload): don't wait for an LMCache lookup that cannot ... | @ZhangLirong-amd | merged | 2026-10-13 | 2026-10-14 |
| [#2571](https://github.com/ROCm/ATOM/pull/2571) | [DSV4] Bounded replay over LMCache MP: load the PAGE KV alon... | @yhl-amd | merged | 2026-10-14 | 2026-10-14 |
| [#2573](https://github.com/ROCm/ATOM/pull/2573) | docker: update Triton pin to 3.8.0 release_0914 build | @mengfei-jiang | merged | 2026-10-14 | 2026-10-14 |
| [#2007](https://github.com/ROCm/ATOM/pull/2007) | feat(pp) support dynamic chunked pipeline parallel | @wanzhenchn | merged | 2026-08-24 | 2026-10-14 |
| [#2520](https://github.com/ROCm/ATOM/pull/2520) | (Qwen3.5) Optimize decode: add fusion, remove copybuffer, op... | @zhuyuhua-v | merged | 2026-10-10 | 2026-10-14 |
| [#2566](https://github.com/ROCm/ATOM/pull/2566) | fix(config): key the compile cache on the speculative method... | @yitingw1 | merged | 2026-10-14 | 2026-10-14 |
| [#2564](https://github.com/ROCm/ATOM/pull/2564) | [MLA] Build shuffled-KV prefill metadata on the host | @HaonanWang98 | merged | 2026-10-14 | 2026-10-14 |
| [#1998](https://github.com/ROCm/ATOM/pull/1998) | [Doc] Add Documentation for Streaming Online Quantization | @haoyangli0109 | merged | 2026-08-24 | 2026-10-14 |
| [#1749](https://github.com/ROCm/ATOM/pull/1749) | [Feature] Quantize weights online when loading weights | @haoyangli0109 | merged | 2026-07-30 | 2026-10-14 |
| [#1777](https://github.com/ROCm/ATOM/pull/1777) | [Doc] Add Online Quantization Best Practices | @haoyangli0109 | merged | 2026-08-03 | 2026-10-14 |
| [#1692](https://github.com/ROCm/ATOM/pull/1692) | [Doc] Add explanations for online quantization and offline q... | @haoyangli0109 | merged | 2026-07-24 | 2026-10-14 |
| [#1678](https://github.com/ROCm/ATOM/pull/1678) | [Bugfix] support mxfp8 online quantization | @haoyangli0109 | merged | 2026-07-23 | 2026-10-14 |
| [#1459](https://github.com/ROCm/ATOM/pull/1459) | [Feature] Supports quark perchannel dequantization | @haoyangli0109 | merged | 2026-07-03 | 2026-10-14 |
| [#2552](https://github.com/ROCm/ATOM/pull/2552) | [DSV4] Bounded replay: rebuild window state from the compres... | @yhl-amd | merged | 2026-10-13 | 2026-10-14 |
| [#2560](https://github.com/ROCm/ATOM/pull/2560) | feat(plugin/dsv4): DeepSeek-V4 prefix caching through checkp... | @linsun12 | merged | 2026-10-14 | 2026-10-14 |
| [#2558](https://github.com/ROCm/ATOM/pull/2558) | feat(plugin/dsv4): run the DeepSeek-V4 MTP draft in the targ... | @linsun12 | merged | 2026-10-13 | 2026-10-13 |
| [#2556](https://github.com/ROCm/ATOM/pull/2556) | fix(v4): FP4 decode bounds drop the DP-padded empty tail | @ZhangLirong-amd | merged | 2026-10-13 | 2026-10-13 |
| [#2376](https://github.com/ROCm/ATOM/pull/2376) | feat(v41): enable DPA and prefill TBO | @ZhangLirong-amd | merged | 2026-09-23 | 2026-10-13 |
| [#2537](https://github.com/ROCm/ATOM/pull/2537) | [MLA] Decouple the 16x16-tiled shuffled KV layout from the T... | @HaonanWang98 | merged | 2026-10-12 | 2026-10-13 |
| [#2551](https://github.com/ROCm/ATOM/pull/2551) | [DP] Balance DP-attention prefill steps by estimated chunk c... | @yhl-amd | merged | 2026-10-13 | 2026-10-13 |
| [#2553](https://github.com/ROCm/ATOM/pull/2553) | [Fix][PD] A producer's DP dummy stages no drafts | @yitingw1 | merged | 2026-10-13 | 2026-10-13 |
| [#2550](https://github.com/ROCm/ATOM/pull/2550) | [Fix][PD] A P/D producer builds no spec-decode metadata | @yitingw1 | merged | 2026-10-13 | 2026-10-13 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-10-25T12:49:57Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#818](https://github.com/ROCm/mori/pull/818) | [NFC] Refactoring MORI load/store primitives | @pemeliya | open | 2026-10-20 | 2026-10-24 |
| [#816](https://github.com/ROCm/mori/pull/816) | Draft collectives develop | @pemeliya | draft | 2026-10-20 | 2026-10-24 |
| [#796](https://github.com/ROCm/mori/pull/796) | test(ep/v1): verify every round of --cmd stress for InterNod... | @amirakb89 | open | 2026-10-17 | 2026-10-23 |
| [#736](https://github.com/ROCm/mori/pull/736) | Feat/ep v1 rdma atomic free | @amirakb89 | open | 2026-10-10 | 2026-10-23 |
| [#832](https://github.com/ROCm/mori/pull/832) | perf(umbp): raise the default DRAM eviction band to 0.95/0.9 | @isytwu | draft | 2026-10-22 | 2026-10-23 |
| [#834](https://github.com/ROCm/mori/pull/834) | ci: let a dispatch run the UMBP hicache smoke test | @isytwu | draft | 2026-10-23 | 2026-10-23 |
| [#797](https://github.com/ROCm/mori/pull/797) | Fall back to scoped 64-bit atomics when b128 global builtins... | @aokblast | open | 2026-10-18 | 2026-10-23 |
| [#825](https://github.com/ROCm/mori/pull/825) | feat(umbp): add multi-GPU KV cache restores | @BadrBasowid | open | 2026-10-21 | 2026-10-23 |
| [#779](https://github.com/ROCm/mori/pull/779) | feat(umbp): BatchTouch recency hints and eviction classes fo... | @isytwu | draft | 2026-10-15 | 2026-10-23 |
| [#831](https://github.com/ROCm/mori/pull/831) | fix(io): replace a failed RDMA QP instead of failing every l... | @isytwu | open | 2026-10-22 | 2026-10-23 |
| [#836](https://github.com/ROCm/mori/pull/836) | fix(io): a failed notification post waits for the transfer's... | @isytwu | open | 2026-10-23 | 2026-10-23 |
| [#833](https://github.com/ROCm/mori/pull/833) | fix(topology): give each NIC its closest GPUs before farther... | @MohitAMD | open | 2026-10-22 | 2026-10-22 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-10-22 |
| [#829](https://github.com/ROCm/mori/pull/829) | feat(umbp): the master routes small objects away from tiers ... | @TianDi101 | open | 2026-10-22 | 2026-10-22 |
| [#827](https://github.com/ROCm/mori/pull/827) | fix(umbp): SSD single flight joins any in-flight read coveri... | @TianDi101 | open | 2026-10-22 | 2026-10-22 |
| [#824](https://github.com/ROCm/mori/pull/824) | feat(umbp): an SSD backend can keep small objects off it (mi... | @TianDi101 | open | 2026-10-21 | 2026-10-21 |
| [#823](https://github.com/ROCm/mori/pull/823) | feat(umbp): BatchPrefetch stages a queued request's keys in ... | @TianDi101 | open | 2026-10-21 | 2026-10-21 |
| [#771](https://github.com/ROCm/mori/pull/771) | fix(bootstrap): add retry and increase timeout in SendMessag... | @kudomcho | open | 2026-10-14 | 2026-10-20 |
| [#819](https://github.com/ROCm/mori/pull/819) | fix(cco): never fill the SDMA ring completely | @jhchouuu | open | 2026-10-20 | 2026-10-20 |
| [#817](https://github.com/ROCm/mori/pull/817) | build(flydsl): upgrade FlyDSL to 0.4.0 | @jhchouuu | open | 2026-10-20 | 2026-10-20 |
| [#695](https://github.com/ROCm/mori/pull/695) | gemm_a2a: fuse a column-sharded all-to-all into the fp8 GEMM... | @yangyuhuiling | draft | 2026-09-22 | 2026-10-20 |
| [#795](https://github.com/ROCm/mori/pull/795) | fix(EPv2): add a tuned flydsl EP8 table for MI300X | @jeffdaily | open | 2026-10-17 | 2026-10-20 |
| [#815](https://github.com/ROCm/mori/pull/815) | feat(io): async NIC event fault injection and port-down fail... | @maning00 | open | 2026-10-20 | 2026-10-20 |
| [#805](https://github.com/ROCm/mori/pull/805) | feat(cco): 2D SDMA put/get via the LINEAR_LARGE_SUB_WINDOW p... | @yangyuhuiling | open | 2026-10-19 | 2026-10-20 |
| [#814](https://github.com/ROCm/mori/pull/814) | feat(cco): add SDMA POLL_REGMEM wait and COPY broadcast pack... | @kawhil-amd | open | 2026-10-20 | 2026-10-20 |
| [#748](https://github.com/ROCm/mori/pull/748) | perf(gemm-ar): opt-in optimization paths, and their measurem... | @yangyuhuiling | open | 2026-10-12 | 2026-10-20 |
| [#806](https://github.com/ROCm/mori/pull/806) | perf(gemm-ar): mxfp8 with row-major scales staged through LD... | @yangyuhuiling | open | 2026-10-19 | 2026-10-20 |
| [#768](https://github.com/ROCm/mori/pull/768) | feat(ep/v2): AsyncLL dispatch/combine on cco, with cross-nod... | @yangyuhuiling | open | 2026-10-14 | 2026-10-20 |
| [#807](https://github.com/ROCm/mori/pull/807) | gemm_ag: GEMM fused with an all-gather over cco | @yangyuhuiling | open | 2026-10-19 | 2026-10-20 |
| [#809](https://github.com/ROCm/mori/pull/809) | ag_gemm: all-gather fused into the fp8 GEMM that consumes it | @yangyuhuiling | draft | 2026-10-19 | 2026-10-20 |
| [#696](https://github.com/ROCm/mori/pull/696) | opt v2 internode | @QizhouZhang97 | open | 2026-09-22 | 2026-10-20 |
| [#798](https://github.com/ROCm/mori/pull/798) | example(cco): cco-sdma all-gather with start/wait split (asy... | @kawhil-amd | open | 2026-10-18 | 2026-10-20 |
| [#810](https://github.com/ROCm/mori/pull/810) | feat(umbp): register large host DRAM buffers as several NIC ... | @TianDi101 | open | 2026-10-19 | 2026-10-19 |
| [#802](https://github.com/ROCm/mori/pull/802) | gemm_ar: fused GEMM + reduce-scatter for sequence parallelis... | @yangyuhuiling | open | 2026-10-19 | 2026-10-19 |
| [#730](https://github.com/ROCm/mori/pull/730) | draft: perf(ep/asyncll): fuse recv-count signal onto send QP... | @yoqiu-amd | open | 2026-10-09 | 2026-10-16 |
| [#787](https://github.com/ROCm/mori/pull/787) | fix(umbp): a remote read checks after the copy that it read ... | @TianDi101 | draft | 2026-10-16 | 2026-10-16 |
| [#780](https://github.com/ROCm/mori/pull/780) | Dont merge, dummy perf collection Feat/ep v1 atomic free ion... | @amirakb89 | draft | 2026-10-15 | 2026-10-15 |
| [#717](https://github.com/ROCm/mori/pull/717) | perf(umbp): keep large restore fragments on the gather kerne... | @isytwu | open | 2026-09-30 | 2026-10-14 |
| [#752](https://github.com/ROCm/mori/pull/752) | chore(EPv2): bound the staging extents + call EpStagingTotal... | @kawhil-amd | open | 2026-10-12 | 2026-10-13 |
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
| [#598](https://github.com/ROCm/mori/pull/598) | tune(ep/v2): give fp8 dispatch its own gfx1250 EP4 row | @jhchouuu | open | 2026-08-24 | 2026-08-31 |
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
| [#740](https://github.com/ROCm/mori/pull/740) | fix(mlx5): stop mixing dmabuf and peermem on GPU control str... | @QizhouZhang97 | merged | 2026-10-10 | 2026-10-12 |
| [#744](https://github.com/ROCm/mori/pull/744) | ci: skip the ci-rerun label on fork PRs; use /ci-rerun there | @jhchouuu | merged | 2026-10-11 | 2026-10-12 |
| [#731](https://github.com/ROCm/mori/pull/731) | feat(io): verbs seam + compile-time fault injector for MORI-... | @TianDi101 | merged | 2026-10-09 | 2026-10-12 |
| [#746](https://github.com/ROCm/mori/pull/746) | EPv2 gfx1250 dispatch: aggReserve state as a module __device... | @zhangfei829 | merged | 2026-10-12 | 2026-10-12 |
| [#735](https://github.com/ROCm/mori/pull/735) | chore(EPv2): drop redundant total_recv.zero_() on gfx1250 in... | @kawhil-amd | merged | 2026-10-10 | 2026-10-12 |
| [#745](https://github.com/ROCm/mori/pull/745) | Perf/epv2 1250x ep8 | @zhangfei829 | merged | 2026-10-11 | 2026-10-11 |
| [#738](https://github.com/ROCm/mori/pull/738) | ci: re-run PR CI against current main via /ci-rerun, ci-reru... | @jhchouuu | merged | 2026-10-10 | 2026-10-10 |
| [#722](https://github.com/ROCm/mori/pull/722) | feat(umbp): share storage configuration across deployment mo... | @BadrBasowid | merged | 2026-10-06 | 2026-10-10 |
| [#725](https://github.com/ROCm/mori/pull/725) | [gfx1250] DSR1 EP4: add topk9 dispatch+combine schedule | @karverma-amd | merged | 2026-10-08 | 2026-10-10 |
| [#716](https://github.com/ROCm/mori/pull/716) | Report peer failures instead of always claiming peers are al... | @amd-wsung102 | merged | 2026-09-28 | 2026-10-10 |
| [#728](https://github.com/ROCm/mori/pull/728) | ci: move MI355X_AINIC internode CI to mi355-gpu-49/50; fix J... | @QizhouZhang97 | merged | 2026-10-08 | 2026-10-10 |
| [#727](https://github.com/ROCm/mori/pull/727) | test(jit): check EpCfg's field count against VisitFields, no... | @jhchouuu | merged | 2026-10-08 | 2026-10-09 |
| [#729](https://github.com/ROCm/mori/pull/729) | fix(io/rdma): export VMM memory by allocation handle so dere... | @indianspeedster | merged | 2026-10-08 | 2026-10-09 |
| [#726](https://github.com/ROCm/mori/pull/726) | gfx1250 EPv2: EP4 topk-9 geometry; selfFirst follows MORI_EP... | @zhangfei829 | merged | 2026-10-08 | 2026-10-08 |
| [#675](https://github.com/ROCm/mori/pull/675) | fix(ep/intranode training): restore replay-mode payload disp... | @sudhu2k | merged | 2026-09-16 | 2026-10-08 |
| [#670](https://github.com/ROCm/mori/pull/670) | Feat/io rdma retry tunables | @amirakb89 | merged | 2026-09-14 | 2026-10-08 |
| [#723](https://github.com/ROCm/mori/pull/723) | Perf/epv2 1250x ep8 | @zhangfei829 | merged | 2026-10-07 | 2026-10-07 |
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

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-10-25T12:50:00Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1321](https://github.com/ROCm/FlyDSL/pull/1321) | [Fix] Don't retain the last tensor in layout-dynamic DLPack ... | @josh-schell-amd | open | 2026-10-23 | 2026-10-23 |
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-10-22 |
| [#1277](https://github.com/ROCm/FlyDSL/pull/1277) | [Test] Cover the FlyDSL kernels vLLM depends on | @zhiding512 | open | 2026-10-12 | 2026-10-21 |
| [#1316](https://github.com/ROCm/FlyDSL/pull/1316) | [Kernel][Refactor] Extract shared softmax row-copy helpers | @ppppqp | draft | 2026-10-21 | 2026-10-21 |
| [#1319](https://github.com/ROCm/FlyDSL/pull/1319) | [Build] Switch to ROCm xnack_test branch for LLVM | @jli-melchior | open | 2026-10-21 | 2026-10-21 |
| [#1314](https://github.com/ROCm/FlyDSL/pull/1314) | [Ext][Coop] Add more block-level primitives | @sjfeng1999 | open | 2026-10-20 | 2026-10-21 |
| [#1318](https://github.com/ROCm/FlyDSL/pull/1318) | [Build] Add xnack-any codegen override patch for gfx1250 | @jli-melchior | open | 2026-10-21 | 2026-10-21 |
| [#1256](https://github.com/ROCm/FlyDSL/pull/1256) | [Perf] Share GLM TP4/TP8 indexed decode and native MXFP4 pat... | @coderfeli | open | 2026-10-10 | 2026-10-21 |
| [#1210](https://github.com/ROCm/FlyDSL/pull/1210) | [CI] Run full cooperative matrix before PyPI releases | @coderfeli | draft | 2026-09-28 | 2026-10-21 |
| [#1269](https://github.com/ROCm/FlyDSL/pull/1269) | [Bugfix] Sync both wave groups before the gfx950 A16W16 HTI ... | @jhinpan | open | 2026-10-11 | 2026-10-21 |
| [#1227](https://github.com/ROCm/FlyDSL/pull/1227) | [Kernel][Perf] Tune RMSNorm for gfx1250: BF16 hardware conve... | @jhinpan | open | 2026-10-06 | 2026-10-20 |
| [#1309](https://github.com/ROCm/FlyDSL/pull/1309) | [ROCDL] Put the contiguous mode's filler dim at the front | @xudoyuan | draft | 2026-10-19 | 2026-10-20 |
| [#1313](https://github.com/ROCm/FlyDSL/pull/1313) | [Core] Replace the Fly layout implementation with the Core l... | @sjfeng1999 | open | 2026-10-20 | 2026-10-20 |
| [#1307](https://github.com/ROCm/FlyDSL/pull/1307) | [compiler] add schedule bank and vgpr/agpr/sgpr based flydsl... | @jli-melchior | open | 2026-10-19 | 2026-10-19 |
| [#1246](https://github.com/ROCm/FlyDSL/pull/1246) | [Kernel][FA] Add arch-neutral attention common, abi, philox ... | @xinyazhang | draft | 2026-10-09 | 2026-10-18 |
| [#1296](https://github.com/ROCm/FlyDSL/pull/1296) | [compiler] support schedule_bank/vgpr/apgr/sgpr | @jli-melchior | open | 2026-10-15 | 2026-10-18 |
| [#1245](https://github.com/ROCm/FlyDSL/pull/1245) | [Kernel][FA] Fix ds_read_tr waitcnt hazard and stagger SCC c... | @xinyazhang | open | 2026-10-09 | 2026-10-18 |
| [#1289](https://github.com/ROCm/FlyDSL/pull/1289) | [llvm] Bump LLVM hash and add gfx1250-strict support | @jli-melchior | open | 2026-10-14 | 2026-10-17 |
| [#1303](https://github.com/ROCm/FlyDSL/pull/1303) | [Kernel] rdna3 GEMM: serve any M and any N, down to a 16x16 ... | @vlluvia | draft | 2026-10-16 | 2026-10-16 |
| [#1297](https://github.com/ROCm/FlyDSL/pull/1297) | [llvm] Stop failed SLP ordered reductions from starving the ... | @Phil-amd | open | 2026-10-15 | 2026-10-16 |
| [#1264](https://github.com/ROCm/FlyDSL/pull/1264) | [Bugfix][gfx1250] Reject FP8 and A8W4 GEMM tiles that issue ... | @jhinpan | open | 2026-10-11 | 2026-10-16 |
| [#1223](https://github.com/ROCm/FlyDSL/pull/1223) | [Kernel][Feature][Dialect][DSL][Perf][Doc][Test] Add gfx120x... | @dimitri91209 | draft | 2026-10-01 | 2026-10-15 |
| [#1276](https://github.com/ROCm/FlyDSL/pull/1276) | [compiler] pin register use reservedregs method | @jli-melchior | open | 2026-10-12 | 2026-10-15 |
| [#1291](https://github.com/ROCm/FlyDSL/pull/1291) | [LayoutAlgebra] Drop layout modes beyond the tiler rank in c... | @xudoyuan | open | 2026-10-14 | 2026-10-15 |
| [#1295](https://github.com/ROCm/FlyDSL/pull/1295) | [Debug] Support device assert | @ppppqp | open | 2026-10-14 | 2026-10-14 |
| [#1240](https://github.com/ROCm/FlyDSL/pull/1240) | [Bugfix] Shared numerics, streams, and tests | @dimitri91209 | open | 2026-10-09 | 2026-10-14 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1193](https://github.com/ROCm/FlyDSL/pull/1193) | [LayoutLowering] Ignore size-one leaves in contiguous-segmen... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1294](https://github.com/ROCm/FlyDSL/pull/1294) | [Bugfix] Handle Numeric conversion recursively | @ppppqp | open | 2026-10-14 | 2026-10-14 |
| [#1288](https://github.com/ROCm/FlyDSL/pull/1288) | [Feat] Support warp exchange with layout | @ppppqp | open | 2026-10-14 | 2026-10-14 |
| [#1286](https://github.com/ROCm/FlyDSL/pull/1286) | [JIT][Debug] Implement FLYDSL_DEBUG_DUMP_ASM to dump only th... | @Phil-amd | open | 2026-10-13 | 2026-10-14 |
| [#1238](https://github.com/ROCm/FlyDSL/pull/1238) | Migrate kernels tiled tdm | @xudoyuan | draft | 2026-10-08 | 2026-10-14 |
| [#1253](https://github.com/ROCm/FlyDSL/pull/1253) | [Bugfix][Test] Round MXFP8 E8M0 scales up in the test quanti... | @jhinpan | open | 2026-10-09 | 2026-10-13 |
| [#1280](https://github.com/ROCm/FlyDSL/pull/1280) | [Doc] Add MI355 mono-kernel development skills | @james-huang09 | draft | 2026-10-13 | 2026-10-13 |
| [#1267](https://github.com/ROCm/FlyDSL/pull/1267) | [Runtime] Report GPU last-level cache size from KFD | @qiangpan2 | open | 2026-10-11 | 2026-10-13 |
| [#1282](https://github.com/ROCm/FlyDSL/pull/1282) | [Kernel][Attention] Add SageAttention2 gfx120 dense prefill | @qiangpan2 | draft | 2026-10-13 | 2026-10-13 |
| [#1274](https://github.com/ROCm/FlyDSL/pull/1274) | [opt] add schedule bank api and wait alu optimization | @jli-melchior | open | 2026-10-12 | 2026-10-12 |
| [#1272](https://github.com/ROCm/FlyDSL/pull/1272) | [Benchmark] fix rdna gemm benchmark option | @ppppqp | open | 2026-10-11 | 2026-10-11 |
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-10-11 |
| [#1252](https://github.com/ROCm/FlyDSL/pull/1252) | [Kernel][FA] Document the gfx950 attention kernels and the 8... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1251](https://github.com/ROCm/FlyDSL/pull/1251) | [Kernel][FA] Route flydsl_flash_attn_func to the new gfx950 ... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1250](https://github.com/ROCm/FlyDSL/pull/1250) | [Kernel][FA] Add gfx950 attention backward (dQ and dK/dV) po... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1249](https://github.com/ROCm/FlyDSL/pull/1249) | [Kernel][FA] Port gfx950 attention ALiBi, sink, paged KV, sp... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1248](https://github.com/ROCm/FlyDSL/pull/1248) | [Kernel][FA] Add the gfx950 attention forward kernel (dual-w... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1247](https://github.com/ROCm/FlyDSL/pull/1247) | [Kernel][FA] Add gfx950 attention metadata, knobs and traits... | @xinyazhang | draft | 2026-10-09 | 2026-10-09 |
| [#1244](https://github.com/ROCm/FlyDSL/pull/1244) | [Doc] Add GLM and Kimi-K3 mono-kernel performance reports | @james-huang09 | draft | 2026-10-09 | 2026-10-09 |
| [#1234](https://github.com/ROCm/FlyDSL/pull/1234) | [Kernel]feat(dsv4): add the DeepSeek-V4 decode MonoKernel | @amd-weisun | open | 2026-10-07 | 2026-10-09 |
| [#1216](https://github.com/ROCm/FlyDSL/pull/1216) | [Kernel] Add dense Flash Attention for gfx1100 | @vlluvia | open | 2026-09-30 | 2026-10-09 |
| [#1239](https://github.com/ROCm/FlyDSL/pull/1239) | [Windows] Add native ROCm JIT support | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-08 |
| [#1222](https://github.com/ROCm/FlyDSL/pull/1222) | [Build][JIT] Support core-only ROCm SDK environments | @apinge | open | 2026-10-01 | 2026-10-08 |
| [#1236](https://github.com/ROCm/FlyDSL/pull/1236) | [Bugfix] Compute dynamic layout sizes in i64 and name oversi... | @Phil-amd | open | 2026-10-08 | 2026-10-08 |
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
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-08-24 |
| [#1045](https://github.com/ROCm/FlyDSL/pull/1045) | [Bugfix] Refuse a batch entry the buffer descriptor cannot a... | @JohnQin-llm | open | 2026-08-20 | 2026-08-24 |
| [#906](https://github.com/ROCm/FlyDSL/pull/906) | Add fast_divmod magic-number division helper | @kashif | open | 2026-07-26 | 2026-08-24 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-08-18 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-08-05 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-07-24 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-07-23 |
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

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-10-25T12:50:04Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#741](https://github.com/ROCm/TransformerEngine/pull/741) | Enable gfx950 FP8 HD128/256 fused-attn ASM forward from aite... | @yaomingamd | open | 2026-09-23 | 2026-10-24 |
| [#779](https://github.com/ROCm/TransformerEngine/pull/779) | [CI] Pin release_v2.20.2_rocm to the TheRock 7.14 test image | @Micky774 | open | 2026-10-23 | 2026-10-24 |
| [#780](https://github.com/ROCm/TransformerEngine/pull/780) | Enforce using of source CI image | @ipanfilo | draft | 2026-10-24 | 2026-10-24 |
| [#776](https://github.com/ROCm/TransformerEngine/pull/776) | fix examples, wire them into CI summary, fix dispatch when m... | @matthiasdiener | draft | 2026-10-21 | 2026-10-23 |
| [#760](https://github.com/ROCm/TransformerEngine/pull/760) | Release 2.20.2 | @Micky774 | open | 2026-10-15 | 2026-10-23 |
| [#745](https://github.com/ROCm/TransformerEngine/pull/745) | extend MXFP4 recipe to GroupedLinear and a8w4 (Triton groupe... | @matthiasdiener | open | 2026-09-28 | 2026-10-23 |
| [#770](https://github.com/ROCm/TransformerEngine/pull/770) | Dynamic WS sizing | @matthiasdiener | draft | 2026-10-20 | 2026-10-23 |
| [#778](https://github.com/ROCm/TransformerEngine/pull/778) | [gfx1250] Use TDM for MXFP8 and FP8 quantization | @matthiasdiener | draft | 2026-10-22 | 2026-10-22 |
| [#777](https://github.com/ROCm/TransformerEngine/pull/777) | XCD work stealing improvements for HK Grouped GEMMs | @alextmagro | open | 2026-10-22 | 2026-10-22 |
| [#772](https://github.com/ROCm/TransformerEngine/pull/772) | split-K and LDS offset buffer for HipKittens GEMMs | @alextmagro | open | 2026-10-20 | 2026-10-22 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Integration of AITER a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-10-22 |
| [#771](https://github.com/ROCm/TransformerEngine/pull/771) | Ifu dev 20261019 v2.21 | @VeeraRajasekhar | open | 2026-10-20 | 2026-10-22 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-10-22 |
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-10-22 |
| [#746](https://github.com/ROCm/TransformerEngine/pull/746) | FlyDSL persistent work-stealing grouped GEMM enablement (gfx... | @aris134 | open | 2026-09-29 | 2026-10-22 |
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
| [#766](https://github.com/ROCm/TransformerEngine/pull/766) | gfx1250: use hipblaslt device alpha for NVFP4 GEMM | @matthiasdiener | open | 2026-10-16 | 2026-10-20 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | open | 2026-08-31 | 2026-10-20 |
| [#755](https://github.com/ROCm/TransformerEngine/pull/755) | [TE] CK fused attention: return max_logit | @AllenFarcas | open | 2026-10-07 | 2026-10-19 |
| [#762](https://github.com/ROCm/TransformerEngine/pull/762) | Ipanfilo/security scaning | @ipanfilo | draft | 2026-10-16 | 2026-10-16 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-10-16 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-10-16 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-10-16 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-10-16 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-10-16 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-10-16 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-10-16 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-10-16 |
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
