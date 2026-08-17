# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-08-17T08:28:18Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#180208](https://github.com/pytorch/pytorch/pull/180208) | Update slow tests | @pytorchupdatebot | open | 2026-04-13 | 2026-08-17 |
| [#193548](https://github.com/pytorch/pytorch/pull/193548) | [Eager] Add FlyDSL topk native override | @XiaobingSuper | open | 2026-08-14 | 2026-08-17 |
| [#193554](https://github.com/pytorch/pytorch/pull/193554) | [inductor] Add software fallback for cvt_e8m0_rceil on non-S... | @xuhancn | open | 2026-08-14 | 2026-08-17 |
| [#193768](https://github.com/pytorch/pytorch/pull/193768) | [inductor] AOTI: skip fallback for aten.sym_stride.int in li... | @zoranzhao | open | 2026-08-17 | 2026-08-17 |
| [#191254](https://github.com/pytorch/pytorch/pull/191254) | [inductor] skip fallback for aten._local_scalar_dense in lit... | @zoranzhao | open | 2026-07-27 | 2026-08-17 |
| [#191380](https://github.com/pytorch/pytorch/pull/191380) | [inductor] AOTI: materialize scalar-in-Tensor-arg for proxy-... | @zoranzhao | open | 2026-07-28 | 2026-08-17 |
| [#193767](https://github.com/pytorch/pytorch/pull/193767) | [inductor] AOTI: handle SymInt in a Scalar arg for proxy-exe... | @zoranzhao | open | 2026-08-17 | 2026-08-17 |
| [#191295](https://github.com/pytorch/pytorch/pull/191295) | [inductor] skip fallback for aten.sym_size.int in lite mode ... | @zoranzhao | open | 2026-07-28 | 2026-08-17 |
| [#193412](https://github.com/pytorch/pytorch/pull/193412) | [Test] Refactor test/functorch/test_ops.py and enable on XPU | @tszulist-hbn | draft | 2026-08-13 | 2026-08-17 |
| [#192739](https://github.com/pytorch/pytorch/pull/192739) |  [Testcase Refactoring] : Add HardwareClassification labels ... | @chenm-123 | open | 2026-08-10 | 2026-08-17 |
| [#189387](https://github.com/pytorch/pytorch/pull/189387) | [Test] Bring `@modules` out-of-tree backend support | @can-gaa-hou | open | 2026-07-09 | 2026-08-17 |
| [#190521](https://github.com/pytorch/pytorch/pull/190521) | [Testcase Refactoring] Decouple test_control_deps.py from CU... | @pengyeqing | open | 2026-07-20 | 2026-08-17 |
| [#192489](https://github.com/pytorch/pytorch/pull/192489) | [inductor] Make cuda/xpu config alias cutlass fields dynamic... | @etaf | draft | 2026-08-07 | 2026-08-17 |
| [#190771](https://github.com/pytorch/pytorch/pull/190771) | [ROCm] Add document SDPA BSHD layout performance on gfx1151 ... | @menglcai | open | 2026-07-22 | 2026-08-17 |
| [#193160](https://github.com/pytorch/pytorch/pull/193160) | [config] Serve unwritten config reads from the module __dict... | @anijain2305 | open | 2026-08-12 | 2026-08-17 |
| [#193527](https://github.com/pytorch/pytorch/pull/193527) | [Inductor] Add FlyDSL MXFP8/MXFP4 BlockWise1x32 scaled_mm fo... | @HengYi-amd | draft | 2026-08-14 | 2026-08-17 |
| [#183390](https://github.com/pytorch/pytorch/pull/183390) |  [SymmMem] Add NCCL implementation of all_to_all_vdev | @akhillanger | open | 2026-05-12 | 2026-08-17 |
| [#191447](https://github.com/pytorch/pytorch/pull/191447) | Add FlyDSL native RMSNorm forward override | @XiaobingSuper | open | 2026-07-29 | 2026-08-17 |
| [#193244](https://github.com/pytorch/pytorch/pull/193244) | [torchtitan hash update] update the pinned torchtitan hash | @pytorchupdatebot | open | 2026-08-13 | 2026-08-17 |
| [#193739](https://github.com/pytorch/pytorch/pull/193739) | [CI] Run B200 operator microbenchmarks per operator | @drisspg | open | 2026-08-16 | 2026-08-17 |
| [#193637](https://github.com/pytorch/pytorch/pull/193637) | FBTriton bringup script | @dshi7 | open | 2026-08-14 | 2026-08-17 |
| [#193476](https://github.com/pytorch/pytorch/pull/193476) | [CUDA] Bounds-check segment_reduce_backward_kernel offsets t... | @PannenetsF | open | 2026-08-14 | 2026-08-17 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-08-17 |
| [#192037](https://github.com/pytorch/pytorch/pull/192037) | [Testcase Refactoring] Add hw_classification and instantiate... | @xjbanana258 | open | 2026-08-04 | 2026-08-17 |
| [#193744](https://github.com/pytorch/pytorch/pull/193744) | [c10d] Skip NCCL2 reconfiguration tests on ROCm | @drisspg | open | 2026-08-17 | 2026-08-17 |
| [#193584](https://github.com/pytorch/pytorch/pull/193584) | [inductor][bugfix] Use atomic OR for boolean accumulating in... | @crystalwhale1024-meta | open | 2026-08-14 | 2026-08-16 |
| [#188268](https://github.com/pytorch/pytorch/pull/188268) | Fix positional arg overflow in TritonBenchmarkRequest when t... | @dlyr3 | open | 2026-06-26 | 2026-08-16 |
| [#192123](https://github.com/pytorch/pytorch/pull/192123) | [inductor] Drop the dead frame walk in _find_names | @HumphreySun98 | open | 2026-08-04 | 2026-08-16 |
| [#185578](https://github.com/pytorch/pytorch/pull/185578) | Fix addmm max-autotune SliceView bias guard | @cjc0013 | open | 2026-05-29 | 2026-08-16 |
| [#187286](https://github.com/pytorch/pytorch/pull/187286) | nn: add torch.nn.functional.rotary_embedding and torch.nn.Ro... | @raviteja-ganta | open | 2026-06-14 | 2026-08-16 |
| [#193156](https://github.com/pytorch/pytorch/pull/193156) | [TEST] Add `hw_classification` to 3 Utils CUDA/ACCELERATOR t... | @XAheli | draft | 2026-08-12 | 2026-08-16 |
| [#193473](https://github.com/pytorch/pytorch/pull/193473) | [CI] Add gfx950 FlyDSL Inductor test shard | @XiaobingSuper | open | 2026-08-14 | 2026-08-16 |
| [#184680](https://github.com/pytorch/pytorch/pull/184680) | Inductor Lowering of Trunc Div should use div_rn | @krastogi-in | open | 2026-05-21 | 2026-08-16 |
| [#193601](https://github.com/pytorch/pytorch/pull/193601) | [ROCm] Retry VecISA dlopen probe with import torch on cold l... | @pytorchbot | open | 2026-08-14 | 2026-08-16 |
| [#193585](https://github.com/pytorch/pytorch/pull/193585) | [ROCm] Enable CK SDPA on gfx1200/gfx1201 (RDNA4) | @doplxyz | draft | 2026-08-14 | 2026-08-15 |
| [#193609](https://github.com/pytorch/pytorch/pull/193609) | [ROCm] Temporarily disable rocm-origami install (ABI mismatc... | @tony-davis | open | 2026-08-14 | 2026-08-15 |
| [#193627](https://github.com/pytorch/pytorch/pull/193627) | Fix inline asm tests for AMD real-true16 | @saeid-rostami | open | 2026-08-14 | 2026-08-15 |
| [#191557](https://github.com/pytorch/pytorch/pull/191557) | [Inductor][UT] Use dtype-aware tolerances instead of bitwise... | @naromero77amd | open | 2026-07-29 | 2026-08-15 |
| [#193282](https://github.com/pytorch/pytorch/pull/193282) | [ROCm][c10d] Enable NCCL2 windows and enforce allocator prov... | @chinmaydk99 | open | 2026-08-13 | 2026-08-15 |
| [#193645](https://github.com/pytorch/pytorch/pull/193645) | [ATen][CPU] Speed up sort by packing (value, index) into a c... | @kunalspathak | open | 2026-08-15 | 2026-08-15 |
| [#178167](https://github.com/pytorch/pytorch/pull/178167) | triangular_solve_stub: expand leading dim support beyond den... | @nikitaved | open | 2026-03-23 | 2026-08-15 |
| [#189331](https://github.com/pytorch/pytorch/pull/189331) | Update onnxruntime version to 1.28.0 | @justinchuby | open | 2026-07-09 | 2026-08-15 |
| [#188407](https://github.com/pytorch/pytorch/pull/188407) | [Windows] Add triton_windows commit pin for Windows nightly ... | @tvukovic-amd | open | 2026-06-29 | 2026-08-15 |
| [#193291](https://github.com/pytorch/pytorch/pull/193291) | [ROCm] Fix incorrect results in cross-CTA reductions (argmax... | @jerrymannil | open | 2026-08-13 | 2026-08-15 |
| [#192813](https://github.com/pytorch/pytorch/pull/192813) | [ROCm][CI] Bump rocm-preview wheels to August 5 | @ethanwee1 | draft | 2026-08-10 | 2026-08-15 |
| [#192486](https://github.com/pytorch/pytorch/pull/192486) | [Testcase Refactoring] Label test_symmetric_memory classes w... | @twthighd | open | 2026-08-07 | 2026-08-15 |
| [#192993](https://github.com/pytorch/pytorch/pull/192993) | [ROCm] Fix MI200 CI test failures: measured tolerances, skip... | @zjliu-amd | open | 2026-08-11 | 2026-08-15 |
| [#193613](https://github.com/pytorch/pytorch/pull/193613) | Consolidate device-side assert stderr checks into shared hel... | @dnikolaev-amd | open | 2026-08-14 | 2026-08-15 |
| [#190614](https://github.com/pytorch/pytorch/pull/190614) | Add register_cpp_device_options for out-of-tree device backe... | @lyx0517 | open | 2026-07-21 | 2026-08-15 |
| [#192814](https://github.com/pytorch/pytorch/pull/192814) | [ROCm] Fix expandable segment failures occuring on rocm 7.14 | @chinmaydk99 | draft | 2026-08-10 | 2026-08-15 |
| [#190595](https://github.com/pytorch/pytorch/pull/190595) | [WIP] [inductor] Fuse interleaved epilogues in nested reduct... | @eellison | open | 2026-07-20 | 2026-08-15 |
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
| [#180687](https://github.com/pytorch/pytorch/pull/180687) | [UT][ROCm][inductor] ROCm-specific XFAILS list for torchindu... | @pytorchbot | merged | 2026-04-17 | 2026-05-20 |
| [#180690](https://github.com/pytorch/pytorch/pull/180690) | [ROCm] Update scaled_mm DeepSeek error message | @pytorchbot | merged | 2026-04-17 | 2026-05-20 |
| [#180600](https://github.com/pytorch/pytorch/pull/180600) | [ROCm] Fix inline_asm_elementwise for ROCm | @pytorchbot | merged | 2026-04-16 | 2026-05-20 |
| [#180927](https://github.com/pytorch/pytorch/pull/180927) | [ROCm][RELEASE_ONLY] skip test_autoheuristic in-code (alread... | @pragupta | merged | 2026-04-20 | 2026-04-22 |
| [#180815](https://github.com/pytorch/pytorch/pull/180815) | [xpu][fix] Include lazy_triton_compile.h in XPU cpp_wrapper ... | @etaf | merged | 2026-04-20 | 2026-04-20 |
| [#177193](https://github.com/pytorch/pytorch/pull/177193) | [Inductor][MPS] Fix half-precision type mismatches in Metal ... | @malfet | merged | 2026-03-11 | 2026-04-20 |
| [#177616](https://github.com/pytorch/pytorch/pull/177616) | Update pytorch_sphinx_theme2 version to 0.4.6 | @pytorchbot | merged | 2026-03-17 | 2026-04-17 |
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
| [#108471](https://github.com/pytorch/pytorch/pull/108471) | Only add triton dependency to CUDA and ROCm binaries if it h... | @huydhn | merged | 2023-09-02 | 2025-09-04 |
| [#156767](https://github.com/pytorch/pytorch/pull/156767) | [cherry-pick] revert #156552 | @Camyll | merged | 2025-06-24 | 2025-08-10 |
| [#156845](https://github.com/pytorch/pytorch/pull/156845) | [ROCm] Bump AOTriton to 0.10b | @pytorchbot | merged | 2025-06-25 | 2025-07-31 |
| [#156757](https://github.com/pytorch/pytorch/pull/156757) | [cherry pick] revert #155412 | @Camyll | merged | 2025-06-24 | 2025-07-26 |

## jax (Upstream Watch)
Repo: `jax-ml/jax` | Last collected: 2026-08-17T08:28:23Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#39970](https://github.com/jax-ml/jax/pull/39970) | [ROCm] Tag ROCm CI job names with N / N+1 release tracks | @magaonka-amd | open | 2026-08-13 | 2026-08-17 |
| [#40029](https://github.com/jax-ml/jax/pull/40029) | [ROCm] Run the Bazel ROCm tests in the jax-base image | @magaonka-amd | open | 2026-08-17 | 2026-08-17 |
| [#40001](https://github.com/jax-ml/jax/pull/40001) | [ROCm] Fix ROCm version in plugin wheel metadata | @gulsumgudukbay | merged | 2026-08-14 | 2026-08-15 |
| [#39974](https://github.com/jax-ml/jax/pull/39974) | [ROCm] Make test_vmap_ellipsis insensitive to reduced-precis... | @magaonka-amd | open | 2026-08-13 | 2026-08-14 |
| [#39872](https://github.com/jax-ml/jax/pull/39872) | [ROCm] Automatically collect rocm libraries needed to run th... | @draganmladjenovic | merged | 2026-08-10 | 2026-08-13 |
| [#38803](https://github.com/jax-ml/jax/pull/38803) | [ROCm] Add expanded target set for ROCm | @tsrw2048 | merged | 2026-06-26 | 2026-08-13 |
| [#39848](https://github.com/jax-ml/jax/pull/39848) | [ROCm] Reenble previously skipped pallas tests | @amd-jianli12 | open | 2026-08-10 | 2026-08-12 |
| [#39765](https://github.com/jax-ml/jax/pull/39765) | [ROCm] Drop the rocm-sdk PATH/LD_LIBRARY_PATH block from run... | @gulsumgudukbay | merged | 2026-08-05 | 2026-08-11 |
| [#39846](https://github.com/jax-ml/jax/pull/39846) | [DO NOT MERGE]Enable previously skipped unit tests on ROCm p... | @magaonka-amd | draft | 2026-08-10 | 2026-08-10 |
| [#39698](https://github.com/jax-ml/jax/pull/39698) | [ROCm] Point TheRock latest nightly CI at ROCm 10 wheels | @magaonka-amd | merged | 2026-08-03 | 2026-08-05 |
| [#39632](https://github.com/jax-ml/jax/pull/39632) | [ROCm] Remove the legacy ROCm GPU Post-Merge Check workflow | @magaonka-amd | merged | 2026-07-31 | 2026-08-03 |
| [#39634](https://github.com/jax-ml/jax/pull/39634) | [ROCm] Find ROCm plugin packages by major version | @gulsumgudukbay | merged | 2026-07-31 | 2026-07-31 |
| [#38810](https://github.com/jax-ml/jax/pull/38810) | [ROCm] Add TheRock 7.14.0/latest coverage to CI workflows | @mminutoli | merged | 2026-06-26 | 2026-07-31 |
| [#39616](https://github.com/jax-ml/jax/pull/39616) | [ROCm] Add missing wheel deps | @alekstheod | merged | 2026-07-31 | 2026-07-31 |
| [#39550](https://github.com/jax-ml/jax/pull/39550) | [ROCm] Build ROCm artifacts on CPU runners | @psanal35 | merged | 2026-07-29 | 2026-07-29 |
| [#39220](https://github.com/jax-ml/jax/pull/39220) | [ROCm] Add runfiles data files for proper hermetic bzl test ... | @alekstheod | merged | 2026-07-16 | 2026-07-29 |
| [#39419](https://github.com/jax-ml/jax/pull/39419) | [ROCm] Fix invalid parallel local jobs execution | @alekstheod | open | 2026-07-24 | 2026-07-28 |
| [#39424](https://github.com/jax-ml/jax/pull/39424) | [ROCm] Update xla reference | @alekstheod | merged | 2026-07-24 | 2026-07-24 |
| [#39400](https://github.com/jax-ml/jax/pull/39400) | [ROCm] Reduce RBE build parallelism for rocm bazel jobs | @magaonka-amd | merged | 2026-07-23 | 2026-07-23 |
| [#39350](https://github.com/jax-ml/jax/pull/39350) | [triton] Fixed a few bugs in the ROCm implementation of `get... | @copybara-service[bot] | merged | 2026-07-21 | 2026-07-21 |
| [#39212](https://github.com/jax-ml/jax/pull/39212) | [ROCm] Add gpu_paged_attention_test_gpu to CI test ignore li... | @alekstheod | merged | 2026-07-16 | 2026-07-20 |
| [#39249](https://github.com/jax-ml/jax/pull/39249) | Don't trigger the continuous rocm builds from PRs. | @copybara-service[bot] | merged | 2026-07-16 | 2026-07-16 |
| [#39222](https://github.com/jax-ml/jax/pull/39222) | [ROCm] [pallas:triton] Use a gfx abstract device_kind direct... | @magaonka-amd | merged | 2026-07-16 | 2026-07-16 |
| [#39038](https://github.com/jax-ml/jax/pull/39038) | [pallas:triton] Resolve ROCm gfx arch from the device ISA | @magaonka-amd | merged | 2026-07-09 | 2026-07-16 |
| [#39074](https://github.com/jax-ml/jax/pull/39074) | [ROCm][Pallas] Skip fused attention fwd tests that exceed de... | @tsrw2048 | merged | 2026-07-10 | 2026-07-13 |
| [#37475](https://github.com/jax-ml/jax/pull/37475) | [ROCm] Move ROCm Bazel presubmit workflow to 32-bit mode. | @tsrw2048 | merged | 2026-05-07 | 2026-07-10 |
| [#38490](https://github.com/jax-ml/jax/pull/38490) | [ROCm] Allow XLA_PYTHON_CLIENT_ALLOCATOR=address | @magaonka-amd | merged | 2026-06-15 | 2026-07-10 |
| [#38884](https://github.com/jax-ml/jax/pull/38884) | [ROCm] Update rules_ml_toolchain as well as xla refs | @alekstheod | merged | 2026-07-01 | 2026-07-10 |
| [#38808](https://github.com/jax-ml/jax/pull/38808) | [ROCm] Add blocking PR gate with a reduced set of tests | @mminutoli | merged | 2026-06-26 | 2026-07-07 |
| [#38950](https://github.com/jax-ml/jax/pull/38950) | [ROCm] Fix PgleTest.testAutoPgle expected fdo profile counts | @magaonka-amd | merged | 2026-07-06 | 2026-07-06 |
| [#38862](https://github.com/jax-ml/jax/pull/38862) | [ROCm] Skip flaky approx_top_k and Welch tests on ROCm | @magaonka-amd | merged | 2026-06-30 | 2026-07-06 |
| [#38824](https://github.com/jax-ml/jax/pull/38824) | [ROCm] Preserve pinned_host memory kind across DLPack round-... | @magaonka-amd | merged | 2026-06-28 | 2026-07-06 |
| [#38493](https://github.com/jax-ml/jax/pull/38493) | [ROCm] CI: use address allocator for pytest | @magaonka-amd | merged | 2026-06-16 | 2026-07-06 |
| [#38663](https://github.com/jax-ml/jax/pull/38663) | Consolidate AMD GPU (ROCm) installation documentation | @JehandadKhan | merged | 2026-06-22 | 2026-06-26 |
| [#38666](https://github.com/jax-ml/jax/pull/38666) | [ROCm] Update ROCm runner labels to new labels | @psanal35 | merged | 2026-06-22 | 2026-06-22 |
| [#38558](https://github.com/jax-ml/jax/pull/38558) | Try to resolve test failure on ROCM. | @copybara-service[bot] | merged | 2026-06-18 | 2026-06-18 |
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38030](https://github.com/jax-ml/jax/pull/38030) | Skip ROCm plugin discovery when JAX_PLATFORMS excludes ROCm | @factnn | open | 2026-05-28 | 2026-06-14 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-05-05 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#34491](https://github.com/jax-ml/jax/pull/34491) | Enable ROCm testing for threefry_partitionable PRNG tests | @hrideymarwah15 | open | 2026-01-20 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-08-17T08:28:32Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#52593](https://github.com/vllm-project/vllm/pull/52593) | [CI][Frontend] Propagate vLLM version to Rust binaries | @BugenZhao | draft | 2026-08-17 | 2026-08-17 |
| [#52263](https://github.com/vllm-project/vllm/pull/52263) | [ROCm][Quantization] Support AMD Quark per-block FP8 for fus... | @jimmy-adams | open | 2026-08-14 | 2026-08-17 |
| [#48375](https://github.com/vllm-project/vllm/pull/48375) | [BugFix] Honor drop_eagle_block in MambaManager | @potto007 | open | 2026-07-12 | 2026-08-17 |
| [#51794](https://github.com/vllm-project/vllm/pull/51794) | [ROCm][Perf] Enable CSA multi-stream overlap for DeepSeek-V4 | @shen-shanshan | draft | 2026-08-11 | 2026-08-17 |
| [#50800](https://github.com/vllm-project/vllm/pull/50800) | [ROCm][CI] Make image selection content-addressed | @AndreasKaratzas | open | 2026-08-03 | 2026-08-17 |
| [#51692](https://github.com/vllm-project/vllm/pull/51692) | [ROCm][Perf] Add bpreshuffled blockscaled fp8 GEMM | @simondanielsson | open | 2026-08-10 | 2026-08-17 |
| [#48712](https://github.com/vllm-project/vllm/pull/48712) | [Bugfix][ROCm] Only run FP8 AITER MLA prefill when using FP8... | @simondanielsson | open | 2026-07-15 | 2026-08-17 |
| [#48247](https://github.com/vllm-project/vllm/pull/48247) | [Perf][ROCm] Add AITER custom AG/RS | @simondanielsson | open | 2026-07-10 | 2026-08-17 |
| [#44544](https://github.com/vllm-project/vllm/pull/44544) | [ROCm][MLA] AITER FP8 ASM prefill backend | @simondanielsson | open | 2026-06-04 | 2026-08-17 |
| [#51506](https://github.com/vllm-project/vllm/pull/51506) | [Bugfix][Kernel] Hoist tensor-descriptor build out of unifie... | @cinnamonica02 | open | 2026-08-08 | 2026-08-17 |
| [#50272](https://github.com/vllm-project/vllm/pull/50272) | [Bugfix] Fix speculative decoding for short_conv (LFM2) mode... | @zwischenraum | open | 2026-07-29 | 2026-08-17 |
| [#50021](https://github.com/vllm-project/vllm/pull/50021) | [Bugfix] Bound accepted-token state lookups in GDN/KDA spec ... | @amittell | open | 2026-07-27 | 2026-08-17 |
| [#51117](https://github.com/vllm-project/vllm/pull/51117) | [ROCm] Enable shared-expert multi-stream overlap on ROCm | @rbrugaro-amd | draft | 2026-08-05 | 2026-08-17 |
| [#51968](https://github.com/vllm-project/vllm/pull/51968) | [XPU][Tests] Make tests device-agnostic | @pmanczak | open | 2026-08-12 | 2026-08-17 |
| [#46009](https://github.com/vllm-project/vllm/pull/46009) | [Bugfix][MoE] Preserve unquantized weight storage on ROCm | @aaab8b | open | 2026-06-18 | 2026-08-17 |
| [#50535](https://github.com/vllm-project/vllm/pull/50535) | [ROCm][Perf] Use AITER tuned GEMM for the MoE router gate | @amd-sriram | open | 2026-07-31 | 2026-08-17 |
| [#51309](https://github.com/vllm-project/vllm/pull/51309) | [ROCm][Perf] Skip redundant sparse index remap on non-indexe... | @amd-sriram | open | 2026-08-06 | 2026-08-17 |
| [#51314](https://github.com/vllm-project/vllm/pull/51314) | [ROCm][Perf] Skip cleaning sparse prefill MQA logits | @amd-sriram | open | 2026-08-06 | 2026-08-17 |
| [#51315](https://github.com/vllm-project/vllm/pull/51315) | [ROCm][Perf] Fuse the DSA indexer prologue with AITER | @amd-sriram | open | 2026-08-06 | 2026-08-17 |
| [#49532](https://github.com/vllm-project/vllm/pull/49532) | [XPU] Support EC connector KV Offloading on XPU | @chaojun-zhang | open | 2026-07-23 | 2026-08-17 |
| [#52566](https://github.com/vllm-project/vllm/pull/52566) | [ROCm][CI] Restore Torch defaults and type DSV4 scratch buff... | @AndreasKaratzas | open | 2026-08-17 | 2026-08-17 |
| [#52494](https://github.com/vllm-project/vllm/pull/52494) | [kimik3][ROCm][Perf] Fuse MLA q/kv RMSNorm in AMD Kimi-K3 ML... | @rbrugaro-amd | draft | 2026-08-16 | 2026-08-17 |
| [#52293](https://github.com/vllm-project/vllm/pull/52293) | [ROCm][Perf] Enable fused KDA decode on gfx942 (MI325X) | @mpashkovskii | open | 2026-08-14 | 2026-08-17 |
| [#50592](https://github.com/vllm-project/vllm/pull/50592) | [Kimi-K3][AMD] Return KDA and MLA projection outputs directl... | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-17 |
| [#50729](https://github.com/vllm-project/vllm/pull/50729) | [Bugfix][Mamba] Fix overlapping state copy race | @AndreasKaratzas | merged | 2026-08-02 | 2026-08-17 |
| [#51480](https://github.com/vllm-project/vllm/pull/51480) | [Perf] Use the fused rotary_embedding kernel in DeepseekScal... | @BabyDrangoner | open | 2026-08-08 | 2026-08-17 |
| [#52186](https://github.com/vllm-project/vllm/pull/52186) | [XPU][Bugfix] Fix XPU crash with speculative decoding + pref... | @swakhandekar | open | 2026-08-13 | 2026-08-17 |
| [#51632](https://github.com/vllm-project/vllm/pull/51632) | [ROCm] [Bugfix] Fix Triton fused shared expert alignment | @akii96 | open | 2026-08-10 | 2026-08-17 |
| [#51585](https://github.com/vllm-project/vllm/pull/51585) | [ROCm] [Bugfix] Preserve CPU query offsets during capture | @akii96 | open | 2026-08-09 | 2026-08-17 |
| [#52285](https://github.com/vllm-project/vllm/pull/52285) | [Bugfix] Fall back when zentorch import fails | @luyixiao95 | open | 2026-08-14 | 2026-08-17 |
| [#52577](https://github.com/vllm-project/vllm/pull/52577) | [Bugfix] Fix K-tile handling in the Triton MoE and block-FP8... | @truong-v | open | 2026-08-17 | 2026-08-17 |
| [#52565](https://github.com/vllm-project/vllm/pull/52565) | [ROCm][CI] Avoid forcing FlashAttention in the ColPali pooli... | @AndreasKaratzas | merged | 2026-08-17 | 2026-08-17 |
| [#52557](https://github.com/vllm-project/vllm/pull/52557) | [Deprecation] Warn that use_prefill_decode_attention has no ... | @brianosaurus | open | 2026-08-17 | 2026-08-17 |
| [#51722](https://github.com/vllm-project/vllm/pull/51722) | [ROCm][AITER] Fix fused QK-norm+RoPE+cache abort by allocati... | @LucasWilkinson | draft | 2026-08-10 | 2026-08-17 |
| [#47593](https://github.com/vllm-project/vllm/pull/47593) | [Kernel][Perf] Scale fused MoE default-config M-tile thresho... | @LioEinaudi | open | 2026-07-04 | 2026-08-17 |
| [#50951](https://github.com/vllm-project/vllm/pull/50951) | [Bugfix][ROCm] Resolve tuned configs across device-name alia... | @liminfei-amd | open | 2026-08-04 | 2026-08-17 |
| [#51718](https://github.com/vllm-project/vllm/pull/51718) | [6/N][KV-Cache Layout Refactor] Standardize KV cache layout | @LucasWilkinson | draft | 2026-08-10 | 2026-08-17 |
| [#40938](https://github.com/vllm-project/vllm/pull/40938) | [ROCm][CI] Move ROCm AITER quantization tests | @AndreasKaratzas | open | 2026-04-26 | 2026-08-17 |
| [#51551](https://github.com/vllm-project/vllm/pull/51551) | [ROCm][MLA] Add guarded gfx942 FP8 context prefill | @maeehart | draft | 2026-08-09 | 2026-08-17 |
| [#49514](https://github.com/vllm-project/vllm/pull/49514) | [ROCm][CI] Use the same-build wheel in Python-only CI | @AndreasKaratzas | merged | 2026-07-23 | 2026-08-17 |
| [#50813](https://github.com/vllm-project/vllm/pull/50813) | [ROCm][Kimi-K3] Enable opt-in K3 SiTUv2 A8W4 routed MoE | @LiuYinfeng01 | open | 2026-08-03 | 2026-08-17 |
| [#50519](https://github.com/vllm-project/vllm/pull/50519) | [ROCm][CI] Add missing test coverage for upstream parity | @AndreasKaratzas | draft | 2026-07-31 | 2026-08-17 |
| [#51909](https://github.com/vllm-project/vllm/pull/51909) | Cached blocks never hit eviction first | @shanrow-amd | open | 2026-08-12 | 2026-08-17 |
| [#38434](https://github.com/vllm-project/vllm/pull/38434) | [Fix] Improve ROCm detection in WSL environments | @yiz-liu | open | 2026-03-28 | 2026-08-17 |
| [#52256](https://github.com/vllm-project/vllm/pull/52256) | [ROCm][CI] Enable ViT CUDA graph tests on AMD gfx950 GPUs | @shen-shanshan | merged | 2026-08-14 | 2026-08-17 |
| [#52264](https://github.com/vllm-project/vllm/pull/52264) | [CI][AMD] Improve Kubernetes failure diagnostics | @AndreasKaratzas | open | 2026-08-14 | 2026-08-16 |
| [#51714](https://github.com/vllm-project/vllm/pull/51714) | [ROCm][DSV4] Opt-in AITER gluon kernel for sparse-MLA decode... | @jiacao-amd | open | 2026-08-10 | 2026-08-16 |
| [#52391](https://github.com/vllm-project/vllm/pull/52391) | feat(rocm): enable gfx1030 (RDNA2) as a recognized RDNA arch | @BlivionIaG | open | 2026-08-14 | 2026-08-16 |
| [#52547](https://github.com/vllm-project/vllm/pull/52547) | [CI][AMD] Bound native and single-node test teardown | @AndreasKaratzas | draft | 2026-08-16 | 2026-08-16 |
| [#50566](https://github.com/vllm-project/vllm/pull/50566) | [ROCm][Performance] Eliminate per-decode allocations and out... | @chuanbowang2026 | open | 2026-07-31 | 2026-08-16 |
| [#52050](https://github.com/vllm-project/vllm/pull/52050) | [Bugfix] Temporarily disable FA4 head-dim 256 | @taneem-ibrahim | merged | 2026-08-12 | 2026-08-16 |
| [#52212](https://github.com/vllm-project/vllm/pull/52212) | [ROCm][DSV4][Perf] Optimize Triton sparse-MLA decode on gfx9... | @Fangzhou-Ai | merged | 2026-08-13 | 2026-08-16 |
| [#50622](https://github.com/vllm-project/vllm/pull/50622) | [ROCm][MoE] Split AITER CK and Triton MXFP4 W4A16 into separ... | @afriedri | open | 2026-07-31 | 2026-08-16 |
| [#51021](https://github.com/vllm-project/vllm/pull/51021) | [ROCm] Gate Torch FP8 scaled-MM on architecture support | @sstamenk | open | 2026-08-04 | 2026-08-16 |
| [#49544](https://github.com/vllm-project/vllm/pull/49544) | [ROCm][Perf] gfx942: use FlyDSL fp8 MQA logits kernel (ROCm/... | @akii96 | merged | 2026-07-23 | 2026-08-16 |
| [#50779](https://github.com/vllm-project/vllm/pull/50779) | [Core] Extensible (growable) KV cache | @njhill | draft | 2026-08-02 | 2026-08-16 |
| [#51653](https://github.com/vllm-project/vllm/pull/51653) | [ROCm] Enable V2 model runner for Kimi-K3 on ROCm | @vllmellm | merged | 2026-08-10 | 2026-08-16 |
| [#52356](https://github.com/vllm-project/vllm/pull/52356) | [Bugfix][ROCm] Skip FP8 MLA prefill PS-metadata build for ch... | @shantipriya-amd | merged | 2026-08-14 | 2026-08-16 |
| [#52441](https://github.com/vllm-project/vllm/pull/52441) | [Bugfix][Multimodal] Keep Gemma 4 video frame counts on CPU | @chaunceyjiang | merged | 2026-08-15 | 2026-08-16 |
| [#52311](https://github.com/vllm-project/vllm/pull/52311) | [Bugfix][Model Runner V2][Spec Decode] Fix off-by-one in bad... | @jyan-R | merged | 2026-08-14 | 2026-08-16 |
| [#52401](https://github.com/vllm-project/vllm/pull/52401) | [Bugfix] Pick the DeepSeek V4 eager cudagraph region per mod... | @njhill | merged | 2026-08-14 | 2026-08-16 |
| [#52419](https://github.com/vllm-project/vllm/pull/52419) | [Bugfix][Spec Decode] Keep EAGLE cache registration on the p... | @mispa-ms | merged | 2026-08-15 | 2026-08-16 |
| [#50866](https://github.com/vllm-project/vllm/pull/50866) | [ROCm][Bugfix] Split multi-stream launch/sync into CUDA and ... | @shen-shanshan | open | 2026-08-03 | 2026-08-16 |
| [#52402](https://github.com/vllm-project/vllm/pull/52402) | [ROCm][gfx942] DSv4 sparse-attn indexer: native fp8 MFMA + c... | @MohitAMD | open | 2026-08-14 | 2026-08-15 |
| [#49515](https://github.com/vllm-project/vllm/pull/49515) | [ROCm][CI] Select CPU platform for native no-GPU jobs | @AndreasKaratzas | merged | 2026-07-23 | 2026-08-15 |
| [#50618](https://github.com/vllm-project/vllm/pull/50618) | [ROCm][Bugfix] Fix wvSplitK OOB reads on strided activations | @JohnQinAMD | open | 2026-07-31 | 2026-08-15 |
| [#51538](https://github.com/vllm-project/vllm/pull/51538) | [Bugfix] Make DSV4 sparse MLA work end-to-end for plain deco... | @lucifer1004 | merged | 2026-08-09 | 2026-08-15 |
| [#45916](https://github.com/vllm-project/vllm/pull/45916) | [Perf][Kernel][ROCm] Add Triton split-KV paged decode fallba... | @feiyehua | open | 2026-06-17 | 2026-08-15 |
| [#44969](https://github.com/vllm-project/vllm/pull/44969) | [ROCm][CI] Gating more ROCm tests | @AndreasKaratzas | open | 2026-06-09 | 2026-08-15 |
| [#49591](https://github.com/vllm-project/vllm/pull/49591) | [Bugfix][CPU] Zero-pad MoE intermediate size for grouped-gem... | @bigPYJ1151 | merged | 2026-07-23 | 2026-08-15 |
| [#52400](https://github.com/vllm-project/vllm/pull/52400) | [ROCm]: Drop pybind11 from Dockerfile.rocm to prevent versio... | @Rohan138 | merged | 2026-08-14 | 2026-08-14 |
| [#51208](https://github.com/vllm-project/vllm/pull/51208) |  [ROCm][AMD][Installation] add LMCache kv-connector installa... | @hongxiayang | open | 2026-08-05 | 2026-08-14 |
| [#43018](https://github.com/vllm-project/vllm/pull/43018) | [ROCm] Cpu offload for ROCm 7.13+ to align the hipMemcpyBatc... | @hongxiayang | open | 2026-05-18 | 2026-08-14 |
| [#52323](https://github.com/vllm-project/vllm/pull/52323) | [CI] Shard multimodal extended generation 2 | @khluu | merged | 2026-08-14 | 2026-08-14 |
| [#52322](https://github.com/vllm-project/vllm/pull/52322) | [CI] Shard extended pooling model tests | @khluu | merged | 2026-08-14 | 2026-08-14 |
| [#51171](https://github.com/vllm-project/vllm/pull/51171) | [ROCm][MLA] Reach FULL cudagraphs for AITER MLA speculative ... | @yudigege86 | open | 2026-08-05 | 2026-08-14 |
| [#50597](https://github.com/vllm-project/vllm/pull/50597) | [ROCm]Remove special-case SiTU support model-specific gating | @stacyroberts | merged | 2026-07-31 | 2026-08-14 |
| [#51216](https://github.com/vllm-project/vllm/pull/51216) | [ROCm][AMD] Enable preshuffled sparse indexing for 16-token ... | @jamesETsmith | merged | 2026-08-06 | 2026-08-14 |
| [#52375](https://github.com/vllm-project/vllm/pull/52375) | Harden Kimi K3 packed decode grid | @yimdev | open | 2026-08-14 | 2026-08-14 |
| [#52331](https://github.com/vllm-project/vllm/pull/52331) | [Test][LoRA] Speed up the LoRA test job | @stefankoncarevic | merged | 2026-08-14 | 2026-08-14 |
| [#49953](https://github.com/vllm-project/vllm/pull/49953) | [ROCm][AITER] Add GDN long-prefill split-QKV fast path | @LiuYinfeng01 | open | 2026-07-27 | 2026-08-14 |
| [#52033](https://github.com/vllm-project/vllm/pull/52033) | [Perf][ROCm] Dual-stream decode with hipgraphs | @simondanielsson | draft | 2026-08-12 | 2026-08-14 |
| [#52265](https://github.com/vllm-project/vllm/pull/52265) | [UT][XPU] fix b12x UT | @mayuyuace | merged | 2026-08-14 | 2026-08-14 |
| [#51704](https://github.com/vllm-project/vllm/pull/51704) | [5/N][KV-Cache Layout Refactor] Backend-published KV packing... | @LucasWilkinson | merged | 2026-08-10 | 2026-08-14 |
| [#52233](https://github.com/vllm-project/vllm/pull/52233) | [Spec Decode] Cache adaptive verification profiles | @calvarado2004 | open | 2026-08-14 | 2026-08-14 |
| [#52164](https://github.com/vllm-project/vllm/pull/52164) | [Attention][DSA] Take the native decode path for MTP=3 on SM... | @zobinHuang | merged | 2026-08-13 | 2026-08-14 |
| [#51655](https://github.com/vllm-project/vllm/pull/51655) | Add Muse Glimmer model support | @xianbaoqian | merged | 2026-08-10 | 2026-08-14 |
| [#49365](https://github.com/vllm-project/vllm/pull/49365) | Detect ROCm wheel variant from environment for precompiled w... | @aarushjain29 | merged | 2026-07-21 | 2026-08-14 |
| [#49925](https://github.com/vllm-project/vllm/pull/49925) | [ROCm] Switch to the Rock, Keep Python 3.12 and Ubuntu 22.04 | @rasmith | open | 2026-07-27 | 2026-08-13 |
| [#43327](https://github.com/vllm-project/vllm/pull/43327) | [ROCm] Add per-call decode budget to sparse-MLA indexer | @reger-men | open | 2026-05-21 | 2026-08-13 |
| [#52139](https://github.com/vllm-project/vllm/pull/52139) | [Bugfix][ROCm][CI] Give the AITER MLA decode metadata stub i... | @stefankoncarevic | merged | 2026-08-13 | 2026-08-13 |
| [#51159](https://github.com/vllm-project/vllm/pull/51159) | [ROCm] Defer `tilelang` import through its import `from vllm... | @fxmarty-amd | merged | 2026-08-05 | 2026-08-13 |
| [#51793](https://github.com/vllm-project/vllm/pull/51793) | [Quantization] Remove dead `QuantizationConfig.is_mxfp4_quan... | @fxmarty-amd | merged | 2026-08-11 | 2026-08-13 |
| [#51280](https://github.com/vllm-project/vllm/pull/51280) | [ROCm][CI] Solidify entrypoint LLM lifecycle | @AndreasKaratzas | merged | 2026-08-06 | 2026-08-13 |
| [#42436](https://github.com/vllm-project/vllm/pull/42436) | fused_moe: add VLLM_TRITON_USE_TD tensor-descriptor path | @afierka-intel | merged | 2026-05-12 | 2026-08-13 |
| [#46676](https://github.com/vllm-project/vllm/pull/46676) | [KERNEL][ROCm]Native HIP MXFP4(Compressed+Quark) (dense + Mo... | @JartX | draft | 2026-06-25 | 2026-08-13 |
| [#50534](https://github.com/vllm-project/vllm/pull/50534) | [XPU] Add tuned Mamba SSU configs for Intel Arc Pro B70 | @pmanczak | merged | 2026-07-31 | 2026-08-13 |
| [#51862](https://github.com/vllm-project/vllm/pull/51862) | [ROCm][Perf] Kimi-K3 Remove prefill pipeline stall in chunk ... | @kliuae | merged | 2026-08-11 | 2026-08-13 |
| [#52024](https://github.com/vllm-project/vllm/pull/52024) | Revert "[Perf][ROCm] Dual-stream decode with hipgraphs" | @simondanielsson | merged | 2026-08-12 | 2026-08-13 |
| [#52059](https://github.com/vllm-project/vllm/pull/52059) | [ROCm][Perf] Split MiniMax-M3 prefill index-score K loop | @akii96 | open | 2026-08-12 | 2026-08-13 |
| [#51772](https://github.com/vllm-project/vllm/pull/51772) | [Attention][MLA] Fuse Kimi-K3 chunked-context K/V packing | @zyongye | merged | 2026-08-11 | 2026-08-13 |
| [#52060](https://github.com/vllm-project/vllm/pull/52060) | [ROCm][Perf] Fold scalar KV scales in MiniMax-M3 sparse atte... | @akii96 | open | 2026-08-12 | 2026-08-13 |
| [#37390](https://github.com/vllm-project/vllm/pull/37390) | Fix Quark OCP-MX W4A6 support: dequant dtype + apply_weights | @vecheruk-amd | open | 2026-03-18 | 2026-08-13 |
| [#51821](https://github.com/vllm-project/vllm/pull/51821) | [Bugfix][ROCm][CI] Restore the DeepSeek-V4 input GEMM overri... | @stefankoncarevic | merged | 2026-08-11 | 2026-08-13 |
| [#52043](https://github.com/vllm-project/vllm/pull/52043) | [CI] Force source builds for hybrid dependencies | @AndreasKaratzas | merged | 2026-08-12 | 2026-08-13 |
| [#51218](https://github.com/vllm-project/vllm/pull/51218) | [Bugfix] Report FULL_ATTENTION for uniform-base UniformTypeK... | @yifjiang | merged | 2026-08-06 | 2026-08-13 |
| [#50017](https://github.com/vllm-project/vllm/pull/50017) | [ROCm] [bugfix] Chunked prefill paged decode masked load per... | @afriedri | merged | 2026-07-27 | 2026-08-12 |
| [#50268](https://github.com/vllm-project/vllm/pull/50268) |  [Hardware][AMD] Enable fused bf16→fp32 router GEMM on ROCm | @mpashkovskii | merged | 2026-07-29 | 2026-08-12 |
| [#25135](https://github.com/vllm-project/vllm/pull/25135) | Llamas 3.1 405B fp4 changes upstreaming from 355_wip | @maleksan85 | merged | 2025-09-18 | 2026-08-12 |
| [#51860](https://github.com/vllm-project/vllm/pull/51860) | [ROCm][K3] Dequantize the fp8 decode query for MLA backends ... | @hongxiayang | merged | 2026-08-11 | 2026-08-12 |
| [#51464](https://github.com/vllm-project/vllm/pull/51464) | [ROCm] update triton in base docker for gluon compatibility | @hongxiayang | merged | 2026-08-08 | 2026-08-12 |
| [#50593](https://github.com/vllm-project/vllm/pull/50593) | [Kimi-K3][AMD] Fuse AttnRes state updates and norms | @LiuYinfeng01 | merged | 2026-07-31 | 2026-08-12 |
| [#48223](https://github.com/vllm-project/vllm/pull/48223) | [Perf][ROCm] Dual-stream decode with hipgraphs | @simondanielsson | merged | 2026-07-10 | 2026-08-12 |
| [#50654](https://github.com/vllm-project/vllm/pull/50654) | [ROCm][Perf] Kimi-K3 Fused kernel for KDA decode | @kliuae | merged | 2026-08-01 | 2026-08-12 |
| [#47017](https://github.com/vllm-project/vllm/pull/47017) | [ROCm] Enable DeepSeek-V4 on gfx11 | @JoursBleu | merged | 2026-06-29 | 2026-08-12 |
| [#48789](https://github.com/vllm-project/vllm/pull/48789) | [Profiler] Add minimal Triton Proton profiling backend | @Luosuu | merged | 2026-07-15 | 2026-08-11 |
| [#51473](https://github.com/vllm-project/vllm/pull/51473) | [ROCm][DSV4] Preserve native MXFP4 TP8 shard allocation | @Fangzhou-Ai | merged | 2026-08-08 | 2026-08-11 |
| [#38479](https://github.com/vllm-project/vllm/pull/38479) | [Attention Backend] TurboQuant: 2-bit KV cache compression w... | @vibhavagarwal5 | merged | 2026-03-29 | 2026-08-10 |
| [#51173](https://github.com/vllm-project/vllm/pull/51173) | [ROCm][CI] Keep rocprofiler-sdk out of DeepEP HT MoE test wo... | @stefankoncarevic | merged | 2026-08-05 | 2026-08-10 |
| [#51457](https://github.com/vllm-project/vllm/pull/51457) | [Test] Add ROCm AITER FP8 MLA prefill accuracy test | @aarushjain29 | merged | 2026-08-07 | 2026-08-09 |
| [#49347](https://github.com/vllm-project/vllm/pull/49347) | [Online quantization] Add online MXFP4 quantization support | @fxmarty-amd | merged | 2026-07-21 | 2026-08-07 |
| [#48534](https://github.com/vllm-project/vllm/pull/48534) | [Bugfix][KV-transfer] MoRIIO: per-layer READ-completion barr... | @edwinlim0919 | merged | 2026-07-13 | 2026-08-07 |
| [#48847](https://github.com/vllm-project/vllm/pull/48847) | [ROCm][CI] Loosen block-FP8 fused MoE test tolerance for lar... | @stefankoncarevic | merged | 2026-07-16 | 2026-08-07 |
| [#51174](https://github.com/vllm-project/vllm/pull/51174) | [ROCm] Work around DeepEP teardown SIGSEGV in MoE test harne... | @Rohan138 | merged | 2026-08-05 | 2026-08-05 |
| [#50859](https://github.com/vllm-project/vllm/pull/50859) | [ROCm][AITER] Hotfix for `memory access fault` errors in AIT... | @fxmarty-amd | merged | 2026-08-03 | 2026-08-04 |
| [#45043](https://github.com/vllm-project/vllm/pull/45043) | llmd+vllm+mori-ep(inter node wide-ep)+mori-io(write) for 2p2... | @shikamd123 | merged | 2026-06-09 | 2026-08-04 |
| [#44972](https://github.com/vllm-project/vllm/pull/44972) | [Test][V1] Add sleep/wake correctness regression test for hy... | @chun-wan | merged | 2026-06-09 | 2026-08-02 |
| [#46720](https://github.com/vllm-project/vllm/pull/46720) | [ROCm][DSV4] B-preshuffle the attention fp8 projections | @cagrikymk | merged | 2026-06-25 | 2026-07-30 |
| [#49914](https://github.com/vllm-project/vllm/pull/49914) | [Frontend] Lazily initialize chat media connectors | @AndreasKaratzas | merged | 2026-07-26 | 2026-07-30 |
| [#49621](https://github.com/vllm-project/vllm/pull/49621) | Remove triton per group quant [ROCm] [Bugfix] | @afriedri | merged | 2026-07-23 | 2026-07-28 |
| [#44527](https://github.com/vllm-project/vllm/pull/44527) | [ROCm][DSv3.2] Eliminate per-decode FillFunctor launches in ... | @frida-andersson | merged | 2026-06-04 | 2026-07-28 |
| [#46913](https://github.com/vllm-project/vllm/pull/46913) | [communication] [bugfix] fix quickreduce acc error in cudagr... | @haoyangli0109 | merged | 2026-06-27 | 2026-07-27 |
| [#49270](https://github.com/vllm-project/vllm/pull/49270) | [ROCm][CI] Prepare AMD mirrors for regating | @AndreasKaratzas | merged | 2026-07-21 | 2026-07-24 |
| [#47992](https://github.com/vllm-project/vllm/pull/47992) | [ROCm] Remove redundant AITER fused_qk_rmsnorm probe (avoids... | @stefankoncarevic | merged | 2026-07-08 | 2026-07-22 |
| [#47932](https://github.com/vllm-project/vllm/pull/47932) | [CI/Build][BugFix][The Rock][AMD] Add spawn method in vision... | @rasmith | merged | 2026-07-07 | 2026-07-19 |
| [#48788](https://github.com/vllm-project/vllm/pull/48788) | [ROCm][Perf][DSV4] Improve sparse decode reduction occupancy... | @Fangzhou-Ai | merged | 2026-07-15 | 2026-07-17 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-08-17T08:28:43Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#30565](https://github.com/sgl-project/sglang/pull/30565) | [AMD] [GLM5] Fix MTP layer_quant_config in-place mutation + ... | @Raiden-Makoto | open | 2026-07-08 | 2026-08-17 |
| [#31370](https://github.com/sgl-project/sglang/pull/31370) | feat(moe): fold padded-topk_ids fill into fused shared-exper... | @karverma-amd | open | 2026-07-15 | 2026-08-17 |
| [#33576](https://github.com/sgl-project/sglang/pull/33576) |  [AMD] Add Work-Centric (Lean) Attention: a persistent-CTA d... | @valechen | open | 2026-08-04 | 2026-08-17 |
| [#30575](https://github.com/sgl-project/sglang/pull/30575) | [AMD] Enable Fast Triton Sparse MLA backend | @clintg6 | open | 2026-07-09 | 2026-08-17 |
| [#35123](https://github.com/sgl-project/sglang/pull/35123) | [AMD] Fix DSV4 FP4 dequant path for AITER on ROCm | @yuzhouo7 | open | 2026-08-17 | 2026-08-17 |
| [#34502](https://github.com/sgl-project/sglang/pull/34502) | [ROCm] Fuse per-token fp8 activation quant into RMSNorm for ... | @Emmanuel0612 | open | 2026-08-12 | 2026-08-17 |
| [#34695](https://github.com/sgl-project/sglang/pull/34695) | [AMD] Speed up Wan2.2 DiT FP8 attention per-tensor quantizat... | @yichiche | open | 2026-08-13 | 2026-08-17 |
| [#34424](https://github.com/sgl-project/sglang/pull/34424) | [AMD] Fix ROCm VAE Conv2D fast path breaking spatial-paralle... | @yichiche | open | 2026-08-11 | 2026-08-17 |
| [#35040](https://github.com/sgl-project/sglang/pull/35040) | [AMD] Use HIP batched copies for HiCache write-back | @AMD-yanfeiwang | open | 2026-08-16 | 2026-08-17 |
| [#32039](https://github.com/sgl-project/sglang/pull/32039) | [AMD][Fix] Qwen3.5 MoRI: fix expert routing, decode CUDA gra... | @yichiche | open | 2026-07-22 | 2026-08-17 |
| [#33290](https://github.com/sgl-project/sglang/pull/33290) | [AMD]Fuse Q/K L2 normalization in Qwen3.5 GDN  | @IzacharyI | open | 2026-08-02 | 2026-08-17 |
| [#33057](https://github.com/sgl-project/sglang/pull/33057) | fix(xpu): enable compressed-tensors FP8 W8A8 on XPU (RedHatA... | @vshekhawat-hlab | open | 2026-07-31 | 2026-08-17 |
| [#33480](https://github.com/sgl-project/sglang/pull/33480) | [AMD] Support prefill context parallel two batch overlap for... | @At1a8 | merged | 2026-08-04 | 2026-08-17 |
| [#35111](https://github.com/sgl-project/sglang/pull/35111) | [AMD] diffusion: normalize ModelOpt-FP8 weights to e4m3fnuz ... | @kangwangamd | open | 2026-08-17 | 2026-08-17 |
| [#34580](https://github.com/sgl-project/sglang/pull/34580) | [AMD] Optimize KIMI-K3 with Triton MLA decode kernel by tuni... | @amd-danli103 | open | 2026-08-12 | 2026-08-17 |
| [#24911](https://github.com/sgl-project/sglang/pull/24911) | Profiling Enhancements [2/3]: detailed execution step annota... | @mohbasit | open | 2026-05-10 | 2026-08-17 |
| [#35114](https://github.com/sgl-project/sglang/pull/35114) | [kernels] Reorganize ops/diffusion by operator domain behind... | @BBuf | open | 2026-08-17 | 2026-08-17 |
| [#35113](https://github.com/sgl-project/sglang/pull/35113) | [AMD] [GLM5] Reland: Fuse shared-expert append into aiter gr... | @Jacob0226 | draft | 2026-08-17 | 2026-08-17 |
| [#35050](https://github.com/sgl-project/sglang/pull/35050) | [XPU] Fix decode graph runner is_current_stream_capturing on... | @arathi-hlab | open | 2026-08-16 | 2026-08-17 |
| [#32214](https://github.com/sgl-project/sglang/pull/32214) | [AMD] Strict bit-exact SWA HiCache for DeepSeek-V4 with unif... | @amd-danli103 | open | 2026-07-23 | 2026-08-17 |
| [#35092](https://github.com/sgl-project/sglang/pull/35092) | [AMD] Fix DSV4 unified attention sink TP slice | @AMD-yanfeiwang | draft | 2026-08-17 | 2026-08-17 |
| [#35031](https://github.com/sgl-project/sglang/pull/35031) | [JIT Kernel] Migrate causal_conv1d_fwd and causal_conv1d_upd... | @mmangkad | merged | 2026-08-16 | 2026-08-17 |
| [#34973](https://github.com/sgl-project/sglang/pull/34973) | [AMD] DSv4: fuse the qk-norm-rope pair on the MTP target-ver... | @karverma-amd | open | 2026-08-15 | 2026-08-17 |
| [#31180](https://github.com/sgl-project/sglang/pull/31180) | [mem_cache][8/N] refactor: move MambaPoolHost to pool_host.m... | @alphabetc1 | open | 2026-07-14 | 2026-08-17 |
| [#35107](https://github.com/sgl-project/sglang/pull/35107) | [diffusion] Filter transformer safetensors by index.json to ... | @zetyquickly | open | 2026-08-17 | 2026-08-17 |
| [#31575](https://github.com/sgl-project/sglang/pull/31575) | Fix rope config compatibility and VL/transformers-fallback w... | @vshekhawat-hlab | merged | 2026-07-17 | 2026-08-17 |
| [#33649](https://github.com/sgl-project/sglang/pull/33649) | Update/cookbook xpu | @nzr-niu | open | 2026-08-05 | 2026-08-17 |
| [#35105](https://github.com/sgl-project/sglang/pull/35105) | Revert "[AMD] [GLM5] Fuse shared-expert append into aiter gr... | @hnyls2002 | merged | 2026-08-17 | 2026-08-17 |
| [#32754](https://github.com/sgl-project/sglang/pull/32754) | [AMD] Enable gfx1250 Support | @akao-amd | open | 2026-07-29 | 2026-08-17 |
| [#34702](https://github.com/sgl-project/sglang/pull/34702) | fix(lora): build the MoE LoRA align JIT kernel on ROCm | @Arist12 | draft | 2026-08-13 | 2026-08-17 |
| [#34701](https://github.com/sgl-project/sglang/pull/34701) | fix(moe): follow the built runner's expert-ID namespace, not... | @Arist12 | draft | 2026-08-13 | 2026-08-17 |
| [#30929](https://github.com/sgl-project/sglang/pull/30929) | Support decode radix cache on DeepSeek-V4 (hybrid-SWA, SWA-t... | @AMD-yanfeiwang | open | 2026-07-12 | 2026-08-17 |
| [#31323](https://github.com/sgl-project/sglang/pull/31323) | [AMD] [GLM5] Fuse shared-expert append into aiter grouped-to... | @Jacob0226 | merged | 2026-07-15 | 2026-08-17 |
| [#34818](https://github.com/sgl-project/sglang/pull/34818) | [CI] Install sgl-eval in xeon (CPU) Docker image | @MingxuZh | merged | 2026-08-14 | 2026-08-17 |
| [#30519](https://github.com/sgl-project/sglang/pull/30519) | [AMD] [GLM5] fp8 MLA absorbed bmm for GLM-5.2 on gfx950 | @Jacob0226 | open | 2026-07-08 | 2026-08-17 |
| [#28403](https://github.com/sgl-project/sglang/pull/28403) | [PD] Introduce runtime role switching between prefill and de... | @inkcherry | open | 2026-06-16 | 2026-08-17 |
| [#30345](https://github.com/sgl-project/sglang/pull/30345) | [Intel][XPU][LoRA] Enable LoRA on Intel XPU | @AnuSajikumar6264 | open | 2026-07-07 | 2026-08-17 |
| [#34912](https://github.com/sgl-project/sglang/pull/34912) | [AMD] Avoid padded Q for unified DSV4 prefill | @AMD-yanfeiwang | open | 2026-08-15 | 2026-08-17 |
| [#35088](https://github.com/sgl-project/sglang/pull/35088) | [AMD] Add ROCm 10 (gfx942 / gfx950) stages to the ROCm Docke... | @bingxche | draft | 2026-08-17 | 2026-08-17 |
| [#34907](https://github.com/sgl-project/sglang/pull/34907) | [DCP] Build the MHA-extend reorg offsets on the host | @kpham-sgl | closed | 2026-08-15 | 2026-08-17 |
| [#34911](https://github.com/sgl-project/sglang/pull/34911) | [Unit Test] Add unit tests for kv_cache_dtype resolution | @jamespud | open | 2026-08-15 | 2026-08-17 |
| [#28655](https://github.com/sgl-project/sglang/pull/28655) | [AMD] GDN linear out-proj fusion | @mqhc2020 | open | 2026-06-18 | 2026-08-17 |
| [#35079](https://github.com/sgl-project/sglang/pull/35079) | fix: broadcast EAGLE draft-side sampling across TP ranks on ... | @fallow5 | open | 2026-08-17 | 2026-08-17 |
| [#35074](https://github.com/sgl-project/sglang/pull/35074) | [AMD] Enable heterogeneous AITER FHMoE for DeepSeek V4 | @kkHuang-amd | open | 2026-08-17 | 2026-08-17 |
| [#33068](https://github.com/sgl-project/sglang/pull/33068) | [AMD] Fuse quantized in_proj layers in Qwen3.5 | @mqhc2020 | open | 2026-07-31 | 2026-08-17 |
| [#35055](https://github.com/sgl-project/sglang/pull/35055) | [AMD] Fix ROCm router GEMM/correction-bias dtype (fp32, not ... | @zetyquickly | open | 2026-08-16 | 2026-08-17 |
| [#35043](https://github.com/sgl-project/sglang/pull/35043) | [AMD] Enable staged HiCache write-back for DeepSeek V4 | @AMD-yanfeiwang | open | 2026-08-16 | 2026-08-17 |
| [#34837](https://github.com/sgl-project/sglang/pull/34837) | [AMD] Add concat_and_cast_mha_k_pad_kernel to support 12-hea... | @1am9trash | merged | 2026-08-14 | 2026-08-17 |
| [#34833](https://github.com/sgl-project/sglang/pull/34833) | [AMD] Fix AITER page-size-1 graph metadata | @zovonoir | open | 2026-08-14 | 2026-08-17 |
| [#34645](https://github.com/sgl-project/sglang/pull/34645) | [AMD][CI] Add GPT-OSS perf benchmarks to the ROCm 7.2 nightl... | @michaelzhang-ai | merged | 2026-08-13 | 2026-08-16 |
| [#31324](https://github.com/sgl-project/sglang/pull/31324) | [AMD] [GLM5] Skip DSA decode indexer when kv_len <= index_to... | @Jacob0226 | merged | 2026-07-15 | 2026-08-16 |
| [#35051](https://github.com/sgl-project/sglang/pull/35051) | [Fix] Pack device-pointer tables as uint64 to avoid 64-bit a... | @dayanandav | open | 2026-08-16 | 2026-08-16 |
| [#34624](https://github.com/sgl-project/sglang/pull/34624) | [AMD] DSv4: fuse compress+norm+rope, emit bpreshuffle scale ... | @karverma-amd | open | 2026-08-12 | 2026-08-16 |
| [#30318](https://github.com/sgl-project/sglang/pull/30318) | [NPU] Add mxfp4-w4a8 MOE Quantization Support for NPU | @LinyuanLi0046 | merged | 2026-07-07 | 2026-08-16 |
| [#34007](https://github.com/sgl-project/sglang/pull/34007) | [AMD] Serve Kimi-K3 on gfx942: moonmath MLA multi-query veri... | @tarik-sarac | open | 2026-08-07 | 2026-08-16 |
| [#34474](https://github.com/sgl-project/sglang/pull/34474) | [AMD] Qwen3.5: guard attn layers against empty DP-attention ... | @Lzy17 | merged | 2026-08-11 | 2026-08-16 |
| [#32746](https://github.com/sgl-project/sglang/pull/32746) | [Fix][AMD] MoRI EP: drop record_stream in TBO dispatch/combi... | @TianDi101 | merged | 2026-07-29 | 2026-08-16 |
| [#31794](https://github.com/sgl-project/sglang/pull/31794) | [AMD][Fix] Qwen3.5: guard zero-grid launch in fused_qk_gemma... | @yichiche | merged | 2026-07-20 | 2026-08-16 |
| [#30900](https://github.com/sgl-project/sglang/pull/30900) | [AMD][Quantization][Bugfix] Fix bug related to fp8 max on gf... | @spandantiwari | merged | 2026-07-12 | 2026-08-16 |
| [#29264](https://github.com/sgl-project/sglang/pull/29264) | [AMD] Fix GSM8K benchmark truncation for Qwen3.5 reasoning o... | @wangjiaxin99 | open | 2026-06-25 | 2026-08-16 |
| [#32568](https://github.com/sgl-project/sglang/pull/32568) | [AMD] Add Kimi-K3 8-GPU MI35x nightly accuracy CI | @michaelzhang-ai | open | 2026-07-27 | 2026-08-16 |
| [#30808](https://github.com/sgl-project/sglang/pull/30808) | [AMD] [GLM5] Enable dense-MHA short-context prefill fallback... | @Raiden-Makoto | merged | 2026-07-10 | 2026-08-16 |
| [#34949](https://github.com/sgl-project/sglang/pull/34949) | [Diffusion] Route MiniMax H3 VAE attention through native ba... | @mickqian | merged | 2026-08-15 | 2026-08-16 |
| [#34984](https://github.com/sgl-project/sglang/pull/34984) | [AMD] Make the Kimi-K3 MI35x nightly accuracy-only, and fix ... | @michaelzhang-ai | merged | 2026-08-16 | 2026-08-16 |
| [#34834](https://github.com/sgl-project/sglang/pull/34834) | [AMD] Fix the MoE LoRA JIT compilation on ROCm | @XinyuJiangCMU | draft | 2026-08-14 | 2026-08-15 |
| [#30024](https://github.com/sgl-project/sglang/pull/30024) | [AMD] perf(sgl-kernel): default block_quota=16 for MLA page_... | @TianDi101 | merged | 2026-07-03 | 2026-08-15 |
| [#34956](https://github.com/sgl-project/sglang/pull/34956) | [AMD] Fix ROCm FP8 DP gather quantization | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-08-15 |
| [#34891](https://github.com/sgl-project/sglang/pull/34891) | fix(diffusion): scope attention backend fallback | @mickqian | merged | 2026-08-15 | 2026-08-15 |
| [#34267](https://github.com/sgl-project/sglang/pull/34267) | config: pin the supplied-instance surface that a raw record ... | @ch-wan | merged | 2026-08-10 | 2026-08-15 |
| [#34517](https://github.com/sgl-project/sglang/pull/34517) | [AMD][Spec] Accelerate Qwen3.5 verification with grouped-hea... | @chuyeh | merged | 2026-08-12 | 2026-08-15 |
| [#34238](https://github.com/sgl-project/sglang/pull/34238) | [AMD] Broadcast the EAGLE greedy verify decision across TP r... | @JessicaJiang-123 | merged | 2026-08-10 | 2026-08-15 |
| [#29328](https://github.com/sgl-project/sglang/pull/29328) | [AMD][Quantization] Online MXFP4 quantization 4/N - NVFP4 to... | @ColinZ22 | merged | 2026-06-25 | 2026-08-15 |
| [#34877](https://github.com/sgl-project/sglang/pull/34877) | [AMD CI] follow the miles nightly-prefixed MI350 suite names | @XinyuJiangCMU | merged | 2026-08-14 | 2026-08-15 |
| [#34769](https://github.com/sgl-project/sglang/pull/34769) | [AMD][CI] Fix stage-b: AttributeError on multimodal embeddin... | @michaelzhang-ai | merged | 2026-08-13 | 2026-08-15 |
| [#32414](https://github.com/sgl-project/sglang/pull/32414) | Add Reasoning-Aware Compression (RAC) pruning recipe for rea... | @PKUWZP | merged | 2026-07-26 | 2026-08-14 |
| [#34560](https://github.com/sgl-project/sglang/pull/34560) | [Fix] Fix Qwen3.5 MTP startup with HiCache | @DarkraiHL | merged | 2026-08-12 | 2026-08-14 |
| [#34741](https://github.com/sgl-project/sglang/pull/34741) | [AMD] Fix Triton 3.7 gfx950 extend-attention spills | @kkHuang-amd | merged | 2026-08-13 | 2026-08-14 |
| [#31856](https://github.com/sgl-project/sglang/pull/31856) | [AMD] Accelerate AITER unified-attention decode with scaled ... | @zijiecode | merged | 2026-07-21 | 2026-08-14 |
| [#34274](https://github.com/sgl-project/sglang/pull/34274) | [kernel] Content-addressed JIT build cache, generated from o... | @DarkSharpness | merged | 2026-08-10 | 2026-08-14 |
| [#25855](https://github.com/sgl-project/sglang/pull/25855) | perf(jit_kernel/deepseek_v4): optimize paged_mqa_metadata | @yangdian96 | merged | 2026-05-20 | 2026-08-14 |
| [#28666](https://github.com/sgl-project/sglang/pull/28666) | [AMD] Fuse shared_expert_gate GEMV into the MoE append kerne... | @yichiche | merged | 2026-06-18 | 2026-08-14 |
| [#34309](https://github.com/sgl-project/sglang/pull/34309) | [CI] Prune redundant CPU test overhead | @JustinTong0323 | merged | 2026-08-10 | 2026-08-14 |
| [#34768](https://github.com/sgl-project/sglang/pull/34768) | [AMD] CI: pin antlr4-python3-runtime back after lmms-eval (u... | @michaelzhang-ai | merged | 2026-08-13 | 2026-08-14 |
| [#34761](https://github.com/sgl-project/sglang/pull/34761) | [AMD][CI] Restore gfx942 Grok-1 INT4 and Grok-2 schedules | @michaelzhang-ai | merged | 2026-08-13 | 2026-08-13 |
| [#34689](https://github.com/sgl-project/sglang/pull/34689) | [AMD] CI: drop the spaces from SGL_EVAL_SPEC (fixes ROCm 7.2... | @kangwangamd | merged | 2026-08-13 | 2026-08-13 |
| [#34746](https://github.com/sgl-project/sglang/pull/34746) | [CI] Fix test_resolution_is_reproducible after cuda_ipc beca... | @mmangkad | merged | 2026-08-13 | 2026-08-13 |
| [#34643](https://github.com/sgl-project/sglang/pull/34643) | [AMD][CI] Stop scheduling Grok-1 and Grok-2 on MI30x | @michaelzhang-ai | merged | 2026-08-13 | 2026-08-13 |
| [#29202](https://github.com/sgl-project/sglang/pull/29202) | [AMD] Enable draft-extend CUDA graph and reduce bubble for M... | @RolaoDenthu | merged | 2026-06-24 | 2026-08-13 |
| [#30762](https://github.com/sgl-project/sglang/pull/30762) | fix(hicache/umbp): support DeepSeek-V4 hybrid HostPoolGroup ... | @AMD-yanfeiwang | merged | 2026-07-10 | 2026-08-13 |
| [#34421](https://github.com/sgl-project/sglang/pull/34421) | [AMD][Perf] Fuse GatedDeltaNet QKVZBA split/reshape/cat into... | @yichiche | merged | 2026-08-11 | 2026-08-13 |
| [#34328](https://github.com/sgl-project/sglang/pull/34328) | [AMD][CI] CI: fix AMD 2-GPU multimodal-gen partition-count a... | @michaelzhang-ai | merged | 2026-08-10 | 2026-08-13 |
| [#32227](https://github.com/sgl-project/sglang/pull/32227) | [XPU] Fix NemotronH (hybrid mamba2) launch on --device xpu | @jmunetong | merged | 2026-07-23 | 2026-08-12 |
| [#34220](https://github.com/sgl-project/sglang/pull/34220) | [AMD] Preserve the AITER expert mask across torch_memory_sav... | @JessicaJiang-123 | merged | 2026-08-10 | 2026-08-11 |
| [#34203](https://github.com/sgl-project/sglang/pull/34203) | [AMD] Fix AITER custom reduce-scatter CUDA-graph capture cra... | @JessicaJiang-123 | merged | 2026-08-10 | 2026-08-10 |
| [#33484](https://github.com/sgl-project/sglang/pull/33484) | perf(hisparse): fuse the DSv4 value and scale swap-in copy o... | @AMD-yanfeiwang | merged | 2026-08-04 | 2026-08-10 |
| [#33085](https://github.com/sgl-project/sglang/pull/33085) | perf(hisparse): 128-bit non-temporal swap-in copy on ROCm | @AMD-yanfeiwang | merged | 2026-07-31 | 2026-08-10 |
| [#31843](https://github.com/sgl-project/sglang/pull/31843) | [AMD] [CI] Enable 3 nested unit tests needing harness stub f... | @michaelzhang-ai | merged | 2026-07-20 | 2026-08-10 |
| [#29677](https://github.com/sgl-project/sglang/pull/29677) | [AMD] perf: compact Triton extend-attention for ragged prefi... | @valechen | merged | 2026-06-29 | 2026-08-10 |
| [#34094](https://github.com/sgl-project/sglang/pull/34094) | config: pin that resolution is reproducible from the raw inp... | @ch-wan | merged | 2026-08-08 | 2026-08-09 |
| [#30964](https://github.com/sgl-project/sglang/pull/30964) | [AMD] Support DeepSeek V4 DSpark on AMD HIP platform | @At1a8 | merged | 2026-07-13 | 2026-08-09 |
| [#34133](https://github.com/sgl-project/sglang/pull/34133) | config: derive the runner's DCP topology from its ParallelSt... | @kpham-sgl | merged | 2026-08-08 | 2026-08-09 |
| [#31531](https://github.com/sgl-project/sglang/pull/31531) | [Refactor] Separate ROCm-specific DeepSeek MHA and MLA forwa... | @dpeng2333 | merged | 2026-07-17 | 2026-08-08 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-08-17T08:28:48Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#11313](https://github.com/triton-lang/triton/pull/11313) | [AMD][BACKEND] Fix under-approximated loop-carried ranges in... | @AlexAUT | open | 2026-08-14 | 2026-08-17 |
| [#11018](https://github.com/triton-lang/triton/pull/11018) | [AMD] Emit buffer atomic min/max only for the supported data... | @umangyadav | open | 2026-07-22 | 2026-08-17 |
| [#11282](https://github.com/triton-lang/triton/pull/11282) | [AMD] Preserve i32 accumulation for small-K int8 dots | @lohiaj | open | 2026-08-12 | 2026-08-17 |
| [#11028](https://github.com/triton-lang/triton/pull/11028) | [AMD] TheRock support | @ZelboK | open | 2026-07-23 | 2026-08-15 |
| [#11239](https://github.com/triton-lang/triton/pull/11239) | [AMD] Guard extract-slice concat canonicalization | @guoriyue | merged | 2026-08-10 | 2026-08-15 |
| [#11227](https://github.com/triton-lang/triton/pull/11227) | [AMD] Stop lowering bf16 multiply to v_dot2_bf16_bf16 | @0xDELUXA | merged | 2026-08-09 | 2026-08-14 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-08-14 |
| [#11289](https://github.com/triton-lang/triton/pull/11289) | [AMD] Fix address space of barriers that carry atomic memory... | @mgehre-amd | open | 2026-08-13 | 2026-08-14 |
| [#11294](https://github.com/triton-lang/triton/pull/11294) | [AMD] Map tl.const pointer args to constant address space | @jerryyin | draft | 2026-08-13 | 2026-08-13 |
| [#11285](https://github.com/triton-lang/triton/pull/11285) | [AMD][BACKEND][GFX9] Enable amdgpu-use-amdgpu-trackers LLVM ... | @AlexAUT | merged | 2026-08-12 | 2026-08-13 |
| [#11272](https://github.com/triton-lang/triton/pull/11272) | [Release] [Cherry-Pick] [AMD][gfx1250] Refine CodeGen contro... | @naromero77amd | merged | 2026-08-11 | 2026-08-12 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add CDNA5 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-08-11 |
| [#11274](https://github.com/triton-lang/triton/pull/11274) | [AMD][CI] Add AMD CI image builds | @willghatch | open | 2026-08-11 | 2026-08-11 |
| [#11256](https://github.com/triton-lang/triton/pull/11256) | [AMD] Fix buffer_load_to_local with other: write other in th... | @yiqian1 | merged | 2026-08-11 | 2026-08-11 |
| [#11265](https://github.com/triton-lang/triton/pull/11265) | [AMD] Avoid GIL deadlock during HIP library lookup | @nemanjaudovic | draft | 2026-08-11 | 2026-08-11 |
| [#11266](https://github.com/triton-lang/triton/pull/11266) | [AMD][Backend] Lower tl.fdiv to approximate f32 division on ... | @purerli98 | open | 2026-08-11 | 2026-08-11 |
| [#11254](https://github.com/triton-lang/triton/pull/11254) | [AMD] Optimize software E4M3FN to FP16 conversion | @skyguan92 | open | 2026-08-11 | 2026-08-11 |
| [#11249](https://github.com/triton-lang/triton/pull/11249) | [AMD] Choose the scheduling strategy when spilling dominates... | @zjin-lcf | open | 2026-08-10 | 2026-08-10 |
| [#11040](https://github.com/triton-lang/triton/pull/11040) | [Proton][AMD] Add ROCProfiler PC sampling with source attrib... | @willghatch | open | 2026-07-24 | 2026-08-10 |
| [#11247](https://github.com/triton-lang/triton/pull/11247) | [TEST] Enable AMD multi-stream cuda graph test | @Jokeren | merged | 2026-08-10 | 2026-08-10 |
| [#11068](https://github.com/triton-lang/triton/pull/11068) | [AMD] Propagate discardable attributes on the small-tensor p... | @pabloantoniom | draft | 2026-07-28 | 2026-08-10 |
| [#11246](https://github.com/triton-lang/triton/pull/11246) | [AMD][DRAFT] Fix empty range inference for HistogramOp in Ra... | @mengfei-jiang | draft | 2026-08-10 | 2026-08-10 |
| [#11223](https://github.com/triton-lang/triton/pull/11223) | [AMD] Preserve volatile loads during LLVM lowering | @antiagainst | merged | 2026-08-09 | 2026-08-09 |
| [#11221](https://github.com/triton-lang/triton/pull/11221) | [AMD] Remove dead code and fix assert precedence | @antiagainst | merged | 2026-08-08 | 2026-08-09 |
| [#11208](https://github.com/triton-lang/triton/pull/11208) | [AMD] Guard chained-dot pingpong against scaled dots | @warrendeng | draft | 2026-08-07 | 2026-08-08 |
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD] Emit actionable errors when a direct-to-LDS copy canno... | @vmalepati1 | open | 2026-07-14 | 2026-08-07 |
| [#11213](https://github.com/triton-lang/triton/pull/11213) | [AMD][Gluon] NFC: Migrate consumers to CDNA5 APIs | @antiagainst | merged | 2026-08-07 | 2026-08-07 |
| [#11188](https://github.com/triton-lang/triton/pull/11188) | [AMD] Re-enable true16 feature for gfx11 | @saeid-rostami | merged | 2026-08-05 | 2026-08-07 |
| [#11212](https://github.com/triton-lang/triton/pull/11212) | [CI][AMD] Clear compile traces before warmup | @Jokeren | merged | 2026-08-07 | 2026-08-07 |
| [#11184](https://github.com/triton-lang/triton/pull/11184) | [AMD] Align TDM descriptor layouts with allocations | @agron911 | open | 2026-08-05 | 2026-08-07 |
| [#11166](https://github.com/triton-lang/triton/pull/11166) | [AMD][Gluon] Fix transposed asymmetric WMMA CTA layout | @jungpark-mlir | merged | 2026-08-04 | 2026-08-07 |
| [#11196](https://github.com/triton-lang/triton/pull/11196) | [docs] NFC: polish AMD Gluon API rendering style | @antiagainst | merged | 2026-08-06 | 2026-08-06 |
| [#11192](https://github.com/triton-lang/triton/pull/11192) | [docs] NFC: improve Gluon AMD API doc rendering style | @antiagainst | merged | 2026-08-06 | 2026-08-06 |
| [#11185](https://github.com/triton-lang/triton/pull/11185) | [CI] Reduce warmup overhead and enable AMD warmup | @jeffniu-openai | merged | 2026-08-05 | 2026-08-06 |
| [#11183](https://github.com/triton-lang/triton/pull/11183) | [Gluon][AMD] Move gfx1250 APIs to cdna5 | @antiagainst | merged | 2026-08-05 | 2026-08-05 |
| [#11169](https://github.com/triton-lang/triton/pull/11169) | [AMD][LAYOUTS] Restrict low-vector swizzle reorder to <=32 b... | @jerryyin | merged | 2026-08-04 | 2026-08-05 |
| [#11178](https://github.com/triton-lang/triton/pull/11178) | [AMD] Support warp-based split-k for mxfp fa on gfx1250 | @borontion | merged | 2026-08-05 | 2026-08-05 |
| [#11152](https://github.com/triton-lang/triton/pull/11152) | [AMD][Gluon] Add cdna5 alias for gfx1250 and document it | @antiagainst | merged | 2026-08-03 | 2026-08-03 |
| [#11118](https://github.com/triton-lang/triton/pull/11118) | [AMD] Delegate NaN-propagating min/max to LLVM | @umangyadav | merged | 2026-07-31 | 2026-08-03 |
| [#11149](https://github.com/triton-lang/triton/pull/11149) | [AMD][Gluon] Expose `LocalLoadPackedTransposedOp` as `load_s... | @FrederickVu | merged | 2026-08-02 | 2026-08-03 |
| [#11155](https://github.com/triton-lang/triton/pull/11155) | [AMD] Removed branching from tdm-prefetch | @ravil-mobile | merged | 2026-08-03 | 2026-08-03 |
| [#11145](https://github.com/triton-lang/triton/pull/11145) | [AMD][Backend] Add support for ds_read_tr4 lowering on gfx12... | @FrederickVu | merged | 2026-08-02 | 2026-08-02 |
| [#10874](https://github.com/triton-lang/triton/pull/10874) | [AMD] Add tests for compiler fence in AtomicRMWOp lowering o... | @tyb0807 | merged | 2026-07-14 | 2026-08-02 |
| [#11144](https://github.com/triton-lang/triton/pull/11144) | [AMD][NFC][Backend] Refactor ds_read_tr lowerings | @FrederickVu | merged | 2026-08-01 | 2026-08-02 |
| [#11113](https://github.com/triton-lang/triton/pull/11113) | [AMD] Remove MachineSink fence workaround now that LLVM is f... | @tyb0807 | merged | 2026-07-30 | 2026-08-01 |
| [#10906](https://github.com/triton-lang/triton/pull/10906) |  [AMD] Restrict BarrierOpConversion to CDNA to avoid ROCm nu... | @k-artem | merged | 2026-07-16 | 2026-07-31 |
| [#11049](https://github.com/triton-lang/triton/pull/11049) | [AMD] Fix AMDMfmaEncodingAttr invalid-bool-load UBSan error | @JAGANNATHANJP | open | 2026-07-25 | 2026-07-31 |
| [#10725](https://github.com/triton-lang/triton/pull/10725) | [AMD] Optimize warp-pipeline backedge barrier placement | @willghatch | merged | 2026-06-26 | 2026-07-30 |
| [#11019](https://github.com/triton-lang/triton/pull/11019) | [AMD] Fix buffer atomic exchange intrinsic | @umangyadav | merged | 2026-07-22 | 2026-07-29 |
| [#11092](https://github.com/triton-lang/triton/pull/11092) | [AMD][gfx1250] Add noalias_args pointer contract | @jerryyin | draft | 2026-07-29 | 2026-07-29 |
| [#11055](https://github.com/triton-lang/triton/pull/11055) | [AMD] Guard HIP launcher against kernel arg/annotation count... | @zihaomu | open | 2026-07-27 | 2026-07-29 |
| [#11081](https://github.com/triton-lang/triton/pull/11081) | [AMD] Fix swapped structured binding in emitFence for buffer... | @yiqian1 | merged | 2026-07-28 | 2026-07-29 |
| [#11012](https://github.com/triton-lang/triton/pull/11012) | [AMD][DRAFT] proton rocprofsdk error 16 pytest fix | @ZelboK | draft | 2026-07-22 | 2026-07-27 |
| [#10020](https://github.com/triton-lang/triton/pull/10020) | [AMD] PC Sampling, wave stall reasonings | @ZelboK | open | 2026-04-13 | 2026-07-24 |
| [#10885](https://github.com/triton-lang/triton/pull/10885) | [AMD][DRAFT] test out if still broken  | @ZelboK | open | 2026-07-14 | 2026-07-21 |
| [#10871](https://github.com/triton-lang/triton/pull/10871) | [AMD] emulate descriptor reduce on GFX1250 | @zwu-2025 | draft | 2026-07-14 | 2026-07-19 |
| [#10759](https://github.com/triton-lang/triton/pull/10759) | [AMD] Form masked regions for equivalent masked loads/stores | @efric | open | 2026-06-30 | 2026-07-16 |
| [#10483](https://github.com/triton-lang/triton/pull/10483) | [AMD] Prove buffer-load contiguity along LinearLayout regist... | @panditsa | draft | 2026-06-04 | 2026-07-15 |
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-07-08 |
| [#10733](https://github.com/triton-lang/triton/pull/10733) | [AMD] Fix batched WMMA scale layout | @alefimov-amd | open | 2026-06-26 | 2026-06-26 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-08-17T08:28:51Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5142](https://github.com/ROCm/AMDMIGraphX/pull/5142) | Update find_concat_same_inputs to handle dimension > 1 | @pfultz2 | open | 2026-08-16 | 2026-08-17 |
| [#5141](https://github.com/ROCm/AMDMIGraphX/pull/5141) | Rewrite broadcast->layout | @pfultz2 | open | 2026-08-16 | 2026-08-16 |
| [#5124](https://github.com/ROCm/AMDMIGraphX/pull/5124) | Insert match::opaque into deep matchers to fix large symbol ... | @pfultz2 | open | 2026-08-07 | 2026-08-16 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | draft | 2026-07-29 | 2026-08-16 |
| [#5139](https://github.com/ROCm/AMDMIGraphX/pull/5139) | Add GPU JIT implementation for gridsample operation | @Imeguras | draft | 2026-08-16 | 2026-08-16 |
| [#5087](https://github.com/ROCm/AMDMIGraphX/pull/5087) | Fuse expert SilU heads (MoE) into batched GEMM via fuse_hori... | @TedThemistokleous | open | 2026-07-22 | 2026-08-16 |
| [#5014](https://github.com/ROCm/AMDMIGraphX/pull/5014) | Hoist and horizontal dot | @TedThemistokleous | open | 2026-06-25 | 2026-08-16 |
| [#5138](https://github.com/ROCm/AMDMIGraphX/pull/5138) | Add promote_storage_type pass to compute storage-only types ... | @pfultz2 | open | 2026-08-15 | 2026-08-15 |
| [#5136](https://github.com/ROCm/AMDMIGraphX/pull/5136) | Fix dynamic-shape parse failure in Softplus and Softsign | @zhihuidu-amd | open | 2026-08-14 | 2026-08-15 |
| [#5120](https://github.com/ROCm/AMDMIGraphX/pull/5120) | [AIMIGRAPHX-1229] Support ROCm10 TheRock packaging with alte... | @kentqian | open | 2026-08-06 | 2026-08-15 |
| [#5132](https://github.com/ROCm/AMDMIGraphX/pull/5132) | Disable ccache when using #embed | @pfultz2 | open | 2026-08-13 | 2026-08-15 |
| [#5130](https://github.com/ROCm/AMDMIGraphX/pull/5130) | Duplicate Lambda Parameter from Repeated Input | @causten | open | 2026-08-12 | 2026-08-15 |
| [#5137](https://github.com/ROCm/AMDMIGraphX/pull/5137) | Eliminate concat after reshapes | @pfultz2 | draft | 2026-08-14 | 2026-08-14 |
| [#5114](https://github.com/ROCm/AMDMIGraphX/pull/5114) | Regular attention flash decoding refactor and bug fixes | @bdevorem | draft | 2026-08-05 | 2026-08-14 |
| [#5135](https://github.com/ROCm/AMDMIGraphX/pull/5135) | Onnxruntime Weekly Sync 2026-08-14 | @github-actions[bot] | open | 2026-08-14 | 2026-08-14 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-08-14 |
| [#5131](https://github.com/ROCm/AMDMIGraphX/pull/5131) | Remove MIGRAPHX_ENABLE_NHWC and make convolution layout a ba... | @pfultz2 | open | 2026-08-12 | 2026-08-14 |
| [#5075](https://github.com/ROCm/AMDMIGraphX/pull/5075) | rebias uint8 to int8 on models with mixed datatypes | @kahmed10 | open | 2026-07-17 | 2026-08-14 |
| [#5134](https://github.com/ROCm/AMDMIGraphX/pull/5134) | [AIMIGRAPHX-1242] Support RFC0009 versioned install prefix f... | @kentqian | open | 2026-08-14 | 2026-08-14 |
| [#4439](https://github.com/ROCm/AMDMIGraphX/pull/4439) | AIMIGRAPHX-317 g+g heuristic added to apply | @bdevorem | open | 2025-11-12 | 2026-08-14 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | open | 2026-02-12 | 2026-08-14 |
| [#5129](https://github.com/ROCm/AMDMIGraphX/pull/5129) | 8/11 bump rocmlir | @causten | open | 2026-08-11 | 2026-08-13 |
| [#5067](https://github.com/ROCm/AMDMIGraphX/pull/5067) | [AIMIGRAPHX-1100] Add no-rebuild callback for verify | @eddieliao | open | 2026-07-15 | 2026-08-13 |
| [#5133](https://github.com/ROCm/AMDMIGraphX/pull/5133) | [DRAFT] Add adaptive two-stage benchmarking  | @justinrosner | draft | 2026-08-13 | 2026-08-13 |
| [#5117](https://github.com/ROCm/AMDMIGraphX/pull/5117) | Problem cache follow-on: pluggable backends, layered cache p... | @danieyan-amd | open | 2026-08-05 | 2026-08-13 |
| [#5112](https://github.com/ROCm/AMDMIGraphX/pull/5112) | `dyn_slice` operator for symbolics and data-dependent operat... | @CharlieL7 | open | 2026-08-04 | 2026-08-13 |
| [#5092](https://github.com/ROCm/AMDMIGraphX/pull/5092) | Add fp32 winograd for gfx12 | @pfultz2 | open | 2026-07-23 | 2026-08-12 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-08-12 |
| [#5123](https://github.com/ROCm/AMDMIGraphX/pull/5123) | Split symbolic dimension pass | @shivadbhavsar | draft | 2026-08-07 | 2026-08-11 |
| [#5111](https://github.com/ROCm/AMDMIGraphX/pull/5111) | Add a migraphx code review skill | @pfultz2 | open | 2026-08-04 | 2026-08-11 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | open | 2026-08-11 | 2026-08-11 |
| [#5127](https://github.com/ROCm/AMDMIGraphX/pull/5127) | Bump rocm-docs-core from 1.38.0 to 1.39.0 in /docs/sphinx | @dependabot[bot] | open | 2026-08-11 | 2026-08-11 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-11 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-08-09 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | open | 2026-04-22 | 2026-08-08 |
| [#4956](https://github.com/ROCm/AMDMIGraphX/pull/4956) | Add support for HipGraph | @pfultz2 | open | 2026-06-11 | 2026-08-08 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | open | 2026-04-08 | 2026-08-07 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-08-06 |
| [#4809](https://github.com/ROCm/AMDMIGraphX/pull/4809) | Use fp32 FMA in channelwise conv | @klin2024 | open | 2026-04-21 | 2026-08-06 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-05 |
| [#5104](https://github.com/ROCm/AMDMIGraphX/pull/5104) | skip elimination when reshape_lazy | @weizhu12-amd | draft | 2026-07-30 | 2026-08-03 |
| [#4924](https://github.com/ROCm/AMDMIGraphX/pull/4924) | concat: treat fully-unconstrained dynamic dim as a wildcard | @chun-wan | open | 2026-05-30 | 2026-07-31 |
| [#5077](https://github.com/ROCm/AMDMIGraphX/pull/5077) | Proto data dependent symbolics | @CharlieL7 | draft | 2026-07-17 | 2026-07-31 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-07-30 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | draft | 2026-06-19 | 2026-07-24 |
| [#5032](https://github.com/ROCm/AMDMIGraphX/pull/5032) | Dynamic concat gpu support | @turneram | open | 2026-07-02 | 2026-07-23 |
| [#5074](https://github.com/ROCm/AMDMIGraphX/pull/5074) | Add dynamic support to Shape and Expand | @turneram | open | 2026-07-17 | 2026-07-22 |
| [#5069](https://github.com/ROCm/AMDMIGraphX/pull/5069) | Update Tile op builder to work with dynamic inputs | @turneram | open | 2026-07-15 | 2026-07-22 |
| [#4992](https://github.com/ROCm/AMDMIGraphX/pull/4992) | adjust_allocation: reallocate undersized aliased output buff... | @ycastill2-amd | open | 2026-06-18 | 2026-07-21 |
| [#5073](https://github.com/ROCm/AMDMIGraphX/pull/5073) | MIGraphX build support for MacOS (ref) | @kahmed10 | draft | 2026-07-16 | 2026-07-17 |
| [#5033](https://github.com/ROCm/AMDMIGraphX/pull/5033) | MultiHeadAttention with dynamic kv-cache attention | @turneram | draft | 2026-07-02 | 2026-07-17 |
| [#4911](https://github.com/ROCm/AMDMIGraphX/pull/4911) | Reduce dynamic-shape compile cost and select_module dispatch... | @chun-wan | open | 2026-05-26 | 2026-07-15 |
| [#4895](https://github.com/ROCm/AMDMIGraphX/pull/4895) | Use fp16 for convolution on navi | @pfultz2 | draft | 2026-05-19 | 2026-07-13 |
| [#5005](https://github.com/ROCm/AMDMIGraphX/pull/5005) | Leaky relu using max | @pfultz2 | draft | 2026-06-22 | 2026-07-10 |
| [#4734](https://github.com/ROCm/AMDMIGraphX/pull/4734) | Bump onnx from 1.17.0 to 1.21.0 in /tools | @dependabot[bot] | open | 2026-04-02 | 2026-07-10 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-07-07 |
| [#5007](https://github.com/ROCm/AMDMIGraphX/pull/5007) | Fix ref average pooling divisor for count_include_pad with a... | @HamzaIkhurram | open | 2026-06-24 | 2026-06-26 |
| [#4994](https://github.com/ROCm/AMDMIGraphX/pull/4994) | simplify_reshapes: skip find_reshape_dot when it would chang... | @ycastill2-amd | draft | 2026-06-19 | 2026-06-25 |
| [#5008](https://github.com/ROCm/AMDMIGraphX/pull/5008) | Change amdmlss option to be activated via compile option | @Zhaeong | draft | 2026-06-24 | 2026-06-24 |
| [#4931](https://github.com/ROCm/AMDMIGraphX/pull/4931) | Add support for 3d kernel launches | @music-dino | open | 2026-06-02 | 2026-06-24 |
| [#4983](https://github.com/ROCm/AMDMIGraphX/pull/4983) | NOT TO BE MERGED: Python script to benchmark mxr files - con... | @ahsan-ca | draft | 2026-06-17 | 2026-06-18 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | open | 2026-03-04 | 2026-06-17 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-06-12 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-06-12 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | draft | 2026-03-23 | 2026-06-07 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-06-06 |
| [#4934](https://github.com/ROCm/AMDMIGraphX/pull/4934) | Enable winograd convolution for shape 3x3 | @klin2024 | draft | 2026-06-03 | 2026-06-05 |
| [#4381](https://github.com/ROCm/AMDMIGraphX/pull/4381) | Enable pointwise fusion for dynamic IR | @shivadbhavsar | draft | 2025-10-13 | 2026-06-05 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-06-04 |
| [#4403](https://github.com/ROCm/AMDMIGraphX/pull/4403) | `generic_float` for Float8E8M0 | @CharlieL7 | draft | 2025-10-23 | 2026-06-04 |
| [#4448](https://github.com/ROCm/AMDMIGraphX/pull/4448) | Gpu concat kernel improvements | @pfultz2 | draft | 2025-11-19 | 2026-06-03 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-05-29 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-05-27 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-05-26 |
| [#4829](https://github.com/ROCm/AMDMIGraphX/pull/4829) | support stride > 1 case. | @weizhu12-amd | draft | 2026-04-29 | 2026-05-26 |
| [#4892](https://github.com/ROCm/AMDMIGraphX/pull/4892) | Add builds for static lib on windows | @pfultz2 | draft | 2026-05-18 | 2026-05-22 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | draft | 2025-01-20 | 2026-05-14 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | draft | 2024-09-22 | 2026-05-14 |
| [#4571](https://github.com/ROCm/AMDMIGraphX/pull/4571) |  ONNX: Added support for `SplitToSequence` and `ConcatFromSe... | @RajBarshikar | draft | 2026-01-26 | 2026-05-14 |
| [#4312](https://github.com/ROCm/AMDMIGraphX/pull/4312) | Add ONNX model testing workflow | @danieyan-amd | draft | 2025-09-23 | 2026-05-14 |
| [#4217](https://github.com/ROCm/AMDMIGraphX/pull/4217) | Set attribute to help bypass the warning about amdgpu_waves_... | @lakhinderwalia | draft | 2025-08-08 | 2026-05-14 |
| [#3938](https://github.com/ROCm/AMDMIGraphX/pull/3938) | Add GPU onnx support for com.microsoft.SparseAttention | @music-dino | draft | 2025-04-09 | 2026-05-14 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | draft | 2025-03-07 | 2026-05-14 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-05-14 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | draft | 2024-11-29 | 2026-05-14 |
| [#3465](https://github.com/ROCm/AMDMIGraphX/pull/3465) | Remove layernorm fusion | @pfultz2 | draft | 2024-09-20 | 2026-05-14 |
| [#4154](https://github.com/ROCm/AMDMIGraphX/pull/4154) | Switch to c++23 | @pfultz2 | draft | 2025-07-21 | 2026-05-14 |
| [#3416](https://github.com/ROCm/AMDMIGraphX/pull/3416) | Weight stripping | @simberg-amd | draft | 2024-09-04 | 2026-05-13 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | draft | 2024-06-26 | 2026-06-04 |
| [#1417](https://github.com/ROCm/AMDMIGraphX/pull/1417) | Warnings upon tuning  information mismatch for Convolutions | @umangyadav | draft | 2022-10-19 | 2026-05-13 |
| [#2224](https://github.com/ROCm/AMDMIGraphX/pull/2224) | Added mutex locks in register_target.cpp and created a multi... | @bpickrel | draft | 2023-09-20 | 2026-05-13 |
| [#4456](https://github.com/ROCm/AMDMIGraphX/pull/4456) | Horizontally fuse pointwise with more than 2 arguments in fi... | @pfultz2 | draft | 2025-11-20 | 2026-05-13 |
| [#4563](https://github.com/ROCm/AMDMIGraphX/pull/4563) | Add Windows build documentation for TheRock ROCm | @ppetrovi-amd | draft | 2026-01-21 | 2026-05-08 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | draft | 2025-01-09 | 2026-05-07 |
| [#3750](https://github.com/ROCm/AMDMIGraphX/pull/3750) | Tile channels for group norm and also fuse output reshapes i... | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#3752](https://github.com/ROCm/AMDMIGraphX/pull/3752) | Fuse multiple outputs for pointwise and reductions | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#4608](https://github.com/ROCm/AMDMIGraphX/pull/4608) | Use rocBLAS GEMV for skinny GEMM (M=1 or N=1) to improve per... | @klin2024 | draft | 2026-02-12 | 2026-04-28 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#4607](https://github.com/ROCm/AMDMIGraphX/pull/4607) | Optimize 1x1 and Depthwise Convolution for Small Shapes | @klin2024 | draft | 2026-02-12 | 2026-04-21 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-18 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-04-15 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-14 |
| [#4726](https://github.com/ROCm/AMDMIGraphX/pull/4726) | [AIMIGRAPHX-885] Fuse Expert Heads into mlir_slice_sigmoid_m... | @TedThemistokleous | draft | 2026-03-31 | 2026-04-10 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-31 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-27 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-03-17 |
| [#4546](https://github.com/ROCm/AMDMIGraphX/pull/4546) | [DRAFT] flash decoding kvcache | @bdevorem | draft | 2026-01-14 | 2026-02-18 |
| [#4577](https://github.com/ROCm/AMDMIGraphX/pull/4577) | Create op. builders (6.) (AI generated) | @gchinora | draft | 2026-01-28 | 2026-01-28 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2025-10-13 |
| [#4275](https://github.com/ROCm/AMDMIGraphX/pull/4275) | SparseAttention ONNX Contrib Op Implementation | @music-dino | draft | 2025-09-03 | 2025-09-09 |
| [#3725](https://github.com/ROCm/AMDMIGraphX/pull/3725) | Issue with int8 for MaxPool  | @taylding-amd | draft | 2024-12-19 | 2025-05-17 |
| [#3721](https://github.com/ROCm/AMDMIGraphX/pull/3721) | Introduce export feature to TensorRT JSON format | @mirza-halilcevic | draft | 2024-12-18 | 2025-03-07 |
| [#3718](https://github.com/ROCm/AMDMIGraphX/pull/3718) | Tile scale and bias for block quantization | @pfultz2 | draft | 2024-12-16 | 2025-03-07 |
| [#2687](https://github.com/ROCm/AMDMIGraphX/pull/2687) | Add optional fp16 rmsnorm conversion pass to fix fp16 accura... | @attila-dusnoki-htec | draft | 2024-01-25 | 2025-03-07 |
| [#4881](https://github.com/ROCm/AMDMIGraphX/pull/4881) | Sym reduce ops | @shivadbhavsar | merged | 2026-05-13 | 2026-08-17 |
| [#4701](https://github.com/ROCm/AMDMIGraphX/pull/4701) | Netron output update - use protobuff, debug symbols | @CharlieL7 | merged | 2026-03-24 | 2026-08-16 |
| [#4770](https://github.com/ROCm/AMDMIGraphX/pull/4770) | Adding compilation mode | @pnikolic-amd | merged | 2026-04-09 | 2026-08-13 |
| [#5085](https://github.com/ROCm/AMDMIGraphX/pull/5085) | [AIMIGRAPHX-1215] add runtime symbol resolution op | @shivadbhavsar | merged | 2026-07-21 | 2026-08-13 |
| [#4823](https://github.com/ROCm/AMDMIGraphX/pull/4823) | support symbolic shape transpose, contiguous, as_shape | @shivadbhavsar | merged | 2026-04-24 | 2026-08-13 |
| [#4704](https://github.com/ROCm/AMDMIGraphX/pull/4704) | [AIMIGRAPHX-840] support symbolic shape prop through conv an... | @shivadbhavsar | merged | 2026-03-25 | 2026-08-13 |
| [#4819](https://github.com/ROCm/AMDMIGraphX/pull/4819) | [AIMIGRAPHX-839] support symbolic shapes for broadcast ops | @shivadbhavsar | merged | 2026-04-24 | 2026-08-12 |
| [#4878](https://github.com/ROCm/AMDMIGraphX/pull/4878) | Fix formatting for short function blocks | @pfultz2 | merged | 2026-05-12 | 2026-08-11 |
| [#4861](https://github.com/ROCm/AMDMIGraphX/pull/4861) | Do not force temp removal on Windows | @apwojcik | merged | 2026-05-08 | 2026-08-10 |
| [#3972](https://github.com/ROCm/AMDMIGraphX/pull/3972) | Allow ONNX and TF modules optional | @apwojcik | merged | 2025-04-25 | 2026-08-10 |
| [#5122](https://github.com/ROCm/AMDMIGraphX/pull/5122) | Onnxruntime Weekly Sync 2026-08-07 | @github-actions[bot] | merged | 2026-08-07 | 2026-08-10 |
| [#4952](https://github.com/ROCm/AMDMIGraphX/pull/4952) | Bump CI to TheRock 7.14 | @causten | merged | 2026-06-10 | 2026-08-09 |
| [#5125](https://github.com/ROCm/AMDMIGraphX/pull/5125) | Bump gitpython from 3.1.57 to 3.1.58 in /docs/sphinx | @dependabot[bot] | merged | 2026-08-09 | 2026-08-09 |
| [#4805](https://github.com/ROCm/AMDMIGraphX/pull/4805) | Bump CI to 7.2.3 | @causten | merged | 2026-04-20 | 2026-08-08 |
| [#5121](https://github.com/ROCm/AMDMIGraphX/pull/5121) | Select the fused reduce algorithm in the tuning config and t... | @pfultz2 | merged | 2026-08-07 | 2026-08-08 |
| [#5115](https://github.com/ROCm/AMDMIGraphX/pull/5115) | Add `operator<<` to the enum macro family | @CharlieL7 | merged | 2026-08-05 | 2026-08-07 |
| [#5105](https://github.com/ROCm/AMDMIGraphX/pull/5105) | Lower reshape after  eliminate_contiguous in a single pass | @ivarusic-amd | merged | 2026-07-30 | 2026-08-07 |
| [#5118](https://github.com/ROCm/AMDMIGraphX/pull/5118) | [ROCM-28989] Fix msgpack symbol conflict | @shivadbhavsar | merged | 2026-08-06 | 2026-08-07 |
| [#4858](https://github.com/ROCm/AMDMIGraphX/pull/4858) | Propagate layout in reshape operator | @pfultz2 | merged | 2026-05-07 | 2026-08-07 |
| [#5107](https://github.com/ROCm/AMDMIGraphX/pull/5107) | Onnxruntime Weekly Sync 2026-07-31 | @github-actions[bot] | merged | 2026-07-31 | 2026-08-06 |
| [#5102](https://github.com/ROCm/AMDMIGraphX/pull/5102) | Refactor to use a device_description instead of using the hi... | @pfultz2 | merged | 2026-07-29 | 2026-08-05 |
| [#5116](https://github.com/ROCm/AMDMIGraphX/pull/5116) | Add sqlite3 dev package | @causten | merged | 2026-08-05 | 2026-08-05 |
| [#5113](https://github.com/ROCm/AMDMIGraphX/pull/5113) | Bump cryptography from 48.0.1 to 50.0.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-08-05 | 2026-08-05 |
| [#5110](https://github.com/ROCm/AMDMIGraphX/pull/5110) | Bump gitpython from 3.1.52 to 3.1.57 in /docs/sphinx | @dependabot[bot] | merged | 2026-08-04 | 2026-08-05 |
| [#4835](https://github.com/ROCm/AMDMIGraphX/pull/4835) | Extend problem cache with hardware provenance metadata | @danieyan-amd | merged | 2026-04-30 | 2026-08-05 |
| [#5108](https://github.com/ROCm/AMDMIGraphX/pull/5108) | Avoid the output copy when the result is an aliased view | @pfultz2 | merged | 2026-07-31 | 2026-08-05 |
| [#4521](https://github.com/ROCm/AMDMIGraphX/pull/4521) | Correct QLinearMatMul broadcasting and QLinearConv bias quan... | @klin2024 | merged | 2026-01-02 | 2026-08-05 |
| [#5026](https://github.com/ROCm/AMDMIGraphX/pull/5026) | Enable mlir attention for yolon12 | @weizhu12-amd | merged | 2026-07-01 | 2026-08-04 |
| [#4730](https://github.com/ROCm/AMDMIGraphX/pull/4730) | [AIMIGRAPHX-841] sym shapes for gemm ops | @shivadbhavsar | merged | 2026-04-01 | 2026-08-03 |
| [#5099](https://github.com/ROCm/AMDMIGraphX/pull/5099) | Use #embed to embed files when its available | @pfultz2 | merged | 2026-07-28 | 2026-08-01 |
| [#5072](https://github.com/ROCm/AMDMIGraphX/pull/5072) | Add --start-from option for tests  | @kahmed10 | merged | 2026-07-16 | 2026-07-31 |
| [#5106](https://github.com/ROCm/AMDMIGraphX/pull/5106) | Fix find_concat_transpose with non-transposed inputs | @pfultz2 | merged | 2026-07-30 | 2026-07-31 |
| [#5084](https://github.com/ROCm/AMDMIGraphX/pull/5084) | [AIMIGRAPHX-1175] Add terminate handler for Windows | @eddieliao | merged | 2026-07-21 | 2026-07-31 |
| [#4712](https://github.com/ROCm/AMDMIGraphX/pull/4712) | Output debug symbols | @CharlieL7 | merged | 2026-03-26 | 2026-07-30 |
| [#5086](https://github.com/ROCm/AMDMIGraphX/pull/5086) | [AIMIGRAPHX-1186] TheRock packaging: amdrocm-migraphx packag... | @kentqian | merged | 2026-07-22 | 2026-07-30 |
| [#4828](https://github.com/ROCm/AMDMIGraphX/pull/4828) | Fix dynamic shape conversion semantics  | @shivadbhavsar | merged | 2026-04-28 | 2026-07-29 |
| [#4999](https://github.com/ROCm/AMDMIGraphX/pull/4999) | NMS: Early exit ref 0 boxes, add tests for 0 and 1 box edge ... | @mvanhorn | merged | 2026-06-19 | 2026-07-29 |
| [#5095](https://github.com/ROCm/AMDMIGraphX/pull/5095) | [ROCM-26952][AIMIGRAPHX-1082] Update workloads and EP regist... | @TedThemistokleous | merged | 2026-07-25 | 2026-07-29 |
| [#4954](https://github.com/ROCm/AMDMIGraphX/pull/4954) | Add tiling for reductions | @pfultz2 | merged | 2026-06-10 | 2026-07-28 |
| [#4946](https://github.com/ROCm/AMDMIGraphX/pull/4946) | Driver and API updates for using sym shapes | @shivadbhavsar | merged | 2026-06-05 | 2026-07-28 |
| [#4780](https://github.com/ROCm/AMDMIGraphX/pull/4780) | [AIMIGRAPHX-911] Add callback function to eval() | @eddieliao | merged | 2026-04-13 | 2026-07-28 |
| [#4998](https://github.com/ROCm/AMDMIGraphX/pull/4998) | Bump CAPI version number for LDS usage estimation function | @justinrosner | merged | 2026-06-19 | 2026-07-27 |
| [#5094](https://github.com/ROCm/AMDMIGraphX/pull/5094) | Onnxruntime Weekly Sync 2026-07-24 | @github-actions[bot] | merged | 2026-07-24 | 2026-07-27 |
| [#5090](https://github.com/ROCm/AMDMIGraphX/pull/5090) | [AIMIGRAPHX-1209] optimize kernel 2 for non kv cache flash d... | @bdevorem | merged | 2026-07-23 | 2026-07-24 |
| [#4702](https://github.com/ROCm/AMDMIGraphX/pull/4702) | [AIMIGRAPHX-835] integrate symbolic expression in dynamic_di... | @shivadbhavsar | merged | 2026-03-25 | 2026-07-24 |
| [#5093](https://github.com/ROCm/AMDMIGraphX/pull/5093) | Fix bug in reshape_dims when taking a static shape | @pfultz2 | merged | 2026-07-24 | 2026-07-24 |
| [#5082](https://github.com/ROCm/AMDMIGraphX/pull/5082) | Enable hipBLASLt GEMM for gfx115x | @jomohamm | merged | 2026-07-21 | 2026-07-24 |
| [#5060](https://github.com/ROCm/AMDMIGraphX/pull/5060) | Update torchkit to support full converter refactor | @shivadbhavsar | merged | 2026-07-13 | 2026-07-24 |
| [#4977](https://github.com/ROCm/AMDMIGraphX/pull/4977) | symbolic reshape ops | @shivadbhavsar | merged | 2026-06-16 | 2026-07-24 |
| [#4961](https://github.com/ROCm/AMDMIGraphX/pull/4961) | Generate API sources in the build directory | @pfultz2 | merged | 2026-06-12 | 2026-07-24 |
| [#5083](https://github.com/ROCm/AMDMIGraphX/pull/5083) | Add missing hsa-amd-aqlprofile package | @pfultz2 | merged | 2026-07-21 | 2026-07-23 |
| [#5080](https://github.com/ROCm/AMDMIGraphX/pull/5080) | Update MIGraphX version number to 2.17 | @causten | merged | 2026-07-20 | 2026-07-23 |
| [#5091](https://github.com/ROCm/AMDMIGraphX/pull/5091) | Bump gitpython from 3.1.50 to 3.1.52 in /docs/sphinx | @dependabot[bot] | merged | 2026-07-23 | 2026-07-23 |
| [#4766](https://github.com/ROCm/AMDMIGraphX/pull/4766) | Generate mxr files for benchmarking | @ahsan-ca | merged | 2026-04-09 | 2026-07-23 |
| [#4648](https://github.com/ROCm/AMDMIGraphX/pull/4648) | Add flag to strip context | @pfultz2 | merged | 2026-03-03 | 2026-07-23 |
| [#4699](https://github.com/ROCm/AMDMIGraphX/pull/4699) | Support dynamic input shapes for NonMaxSuppression op with r... | @klin2024 | merged | 2026-03-24 | 2026-07-23 |
| [#5046](https://github.com/ROCm/AMDMIGraphX/pull/5046) | Fix nonzero for non-standard input layouts | @ikalinic | merged | 2026-07-08 | 2026-07-22 |
| [#5006](https://github.com/ROCm/AMDMIGraphX/pull/5006) | [AIMIGRAPHX-1151] Add pytest bridge for unit tests | @eddieliao | merged | 2026-06-23 | 2026-07-22 |
| [#5066](https://github.com/ROCm/AMDMIGraphX/pull/5066) | [AIMIGRAPHX-1164] Replace device ops inserted during `compil... | @eddieliao | merged | 2026-07-15 | 2026-07-21 |
| [#4807](https://github.com/ROCm/AMDMIGraphX/pull/4807) | Add checks for `::value` and improve check for redundant sta... | @pfultz2 | merged | 2026-04-21 | 2026-07-20 |
| [#4796](https://github.com/ROCm/AMDMIGraphX/pull/4796) | Rocm7.2.3 changes  | @TedThemistokleous | merged | 2026-04-17 | 2026-07-20 |
| [#5076](https://github.com/ROCm/AMDMIGraphX/pull/5076) | Onnxruntime Weekly Sync 2026-07-17 | @github-actions[bot] | merged | 2026-07-17 | 2026-07-20 |
| [#5070](https://github.com/ROCm/AMDMIGraphX/pull/5070) | fix non-standard literals causing failures in mlir modules | @shivadbhavsar | merged | 2026-07-15 | 2026-07-17 |
| [#5065](https://github.com/ROCm/AMDMIGraphX/pull/5065) | Add toggle for wavefront size to cross compilation options | @bdevorem | merged | 2026-07-14 | 2026-07-16 |
| [#5030](https://github.com/ROCm/AMDMIGraphX/pull/5030) | [AIMIGRAPHX-1163] Add lower_device_ops pass | @eddieliao | merged | 2026-07-01 | 2026-07-16 |
| [#5023](https://github.com/ROCm/AMDMIGraphX/pull/5023) | Change option name to MIGRAPHX_USE_MSVC_STATIC_RUNTIME | @apwojcik | merged | 2026-06-30 | 2026-07-16 |
| [#5068](https://github.com/ROCm/AMDMIGraphX/pull/5068) | fix reverse op bug | @shivadbhavsar | merged | 2026-07-15 | 2026-07-16 |
| [#5071](https://github.com/ROCm/AMDMIGraphX/pull/5071) | Bump rocm-docs-core from 1.36.0 to 1.38.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-07-16 | 2026-07-16 |
| [#5040](https://github.com/ROCm/AMDMIGraphX/pull/5040) | Auto select NCHW/NHWC layout | @pfultz2 | merged | 2026-07-07 | 2026-07-16 |
| [#5057](https://github.com/ROCm/AMDMIGraphX/pull/5057) | Bump soupsieve from 2.5 to 2.8.4 in /docs/sphinx | @dependabot[bot] | merged | 2026-07-10 | 2026-07-16 |
| [#5056](https://github.com/ROCm/AMDMIGraphX/pull/5056) | Add max block size tuning for JIT reductions | @pfultz2 | merged | 2026-07-10 | 2026-07-15 |
| [#5059](https://github.com/ROCm/AMDMIGraphX/pull/5059) | if miopen/hipblas/rocblas are not enabled, send gemms to roc... | @bdevorem | merged | 2026-07-13 | 2026-07-15 |
| [#5062](https://github.com/ROCm/AMDMIGraphX/pull/5062) | Fix windows CI: Workaround files not being deleted | @pfultz2 | merged | 2026-07-14 | 2026-07-14 |
| [#4786](https://github.com/ROCm/AMDMIGraphX/pull/4786) | Dont log intended driver output | @pfultz2 | merged | 2026-04-14 | 2026-07-14 |
| [#5055](https://github.com/ROCm/AMDMIGraphX/pull/5055) | Onnxruntime Weekly Sync 2026-07-10 | @github-actions[bot] | merged | 2026-07-10 | 2026-07-13 |
| [#4936](https://github.com/ROCm/AMDMIGraphX/pull/4936) | Add conv winograd for gfx12 | @pfultz2 | merged | 2026-06-03 | 2026-07-13 |
| [#5051](https://github.com/ROCm/AMDMIGraphX/pull/5051) | Bump rocm-docs-core from 1.35.0 to 1.36.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-07-09 | 2026-07-13 |
| [#5047](https://github.com/ROCm/AMDMIGraphX/pull/5047) | update rocmlir to eccd4d7 | @causten | merged | 2026-07-08 | 2026-07-13 |
| [#5053](https://github.com/ROCm/AMDMIGraphX/pull/5053) | Add mlss_use_specific_ops as a GPU backend option | @Zhaeong | merged | 2026-07-09 | 2026-07-13 |
| [#5015](https://github.com/ROCm/AMDMIGraphX/pull/5015) | Slice over dynamic dimension | @CharlieL7 | merged | 2026-06-26 | 2026-07-13 |
| [#5027](https://github.com/ROCm/AMDMIGraphX/pull/5027) | Fuse_pointwise fuse dynamic even if scalar | @CharlieL7 | merged | 2026-07-01 | 2026-07-13 |
| [#5042](https://github.com/ROCm/AMDMIGraphX/pull/5042) | Add notices about following LLVM AI Tool Use Policy | @CharlieL7 | merged | 2026-07-07 | 2026-07-13 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-08-17T08:29:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4796](https://github.com/ROCm/aiter/pull/4796) | [module_mla_reduce] detorch reduce.cu + delete dead no_redun... | @amd-ruitang3 | open | 2026-08-17 | 2026-08-17 |
| [#4655](https://github.com/ROCm/aiter/pull/4655) | add support for v2 gemm2 a8w8 | @Bernard-Liu | open | 2026-08-10 | 2026-08-17 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | gfx1201 (RDNA4) FlyDSL BF16 attention optimizations & FP8 at... | @pds-amd | open | 2026-07-10 | 2026-08-17 |
| [#4481](https://github.com/ROCm/aiter/pull/4481) | parallelize gather_kv_b_proj context chunks | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-17 |
| [#4754](https://github.com/ROCm/aiter/pull/4754) | [Bugfix] Disable cpp_itfs sampling on ROCm 10 | @fsx950223 | open | 2026-08-14 | 2026-08-17 |
| [#4785](https://github.com/ROCm/aiter/pull/4785) | [feat] mega-moe stage2 for gfx1250 | @yanboshao | draft | 2026-08-16 | 2026-08-17 |
| [#4679](https://github.com/ROCm/aiter/pull/4679) | [Flydsl] flydsl prefill gdn block | @huizzhan | draft | 2026-08-11 | 2026-08-17 |
| [#4795](https://github.com/ROCm/aiter/pull/4795) | ci: add network diagnostics for wheel downloads | @gyohuangxin | open | 2026-08-17 | 2026-08-17 |
| [#4748](https://github.com/ROCm/aiter/pull/4748) | (WIP) [gfx1250] fix(asm gemm): add a_preshuffle=0 f4gemm & f... | @dbyoung18 | open | 2026-08-14 | 2026-08-17 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-08-17 |
| [#4772](https://github.com/ROCm/aiter/pull/4772) | [gfx950][FlyDSL] Add dense BF16 x MXFP4 GEMM | @LiuYinfeng01 | open | 2026-08-15 | 2026-08-17 |
| [#4794](https://github.com/ROCm/aiter/pull/4794) | Chefang/pa decode opus | @fangche123 | open | 2026-08-17 | 2026-08-17 |
| [#4526](https://github.com/ROCm/aiter/pull/4526) | [Kernel] Extend MXFP4 GEMM1 replacement to A4W4 | @fsx950223 | open | 2026-08-03 | 2026-08-17 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] fp8 unified attention for gfx950 | @johannes-graner | draft | 2026-08-11 | 2026-08-17 |
| [#4726](https://github.com/ROCm/aiter/pull/4726) | Fuse block-banking cat into attn_res_gate via close_block/WR... | @yanxuer-999 | open | 2026-08-13 | 2026-08-17 |
| [#4793](https://github.com/ROCm/aiter/pull/4793) | Resolve the pybind develop-path lookups once instead of per ... | @fangche123 | open | 2026-08-17 | 2026-08-17 |
| [#4732](https://github.com/ROCm/aiter/pull/4732) | [FLYDSL] Support prefill GDN K5 fp32 chunk states and AOT co... | @huizzhan | open | 2026-08-13 | 2026-08-17 |
| [#4737](https://github.com/ROCm/aiter/pull/4737) | [CI] PR auto tag | @Boss2002n | open | 2026-08-13 | 2026-08-17 |
| [#4480](https://github.com/ROCm/aiter/pull/4480) | [Gluon][MLA] Drop the batch_size == 1 constraint from the fp... | @ZhengGong-amd | open | 2026-07-31 | 2026-08-17 |
| [#4460](https://github.com/ROCm/aiter/pull/4460) | topk_gating: support softmax + need_renorm and refactor test | @yzhou103 | open | 2026-07-30 | 2026-08-17 |
| [#4627](https://github.com/ROCm/aiter/pull/4627) | new MHA v4 entrypoint ; a spectrum of quant & sparse attenti... | @jcaraban | open | 2026-08-07 | 2026-08-17 |
| [#4712](https://github.com/ROCm/aiter/pull/4712) | Add fused KDA decode kernel (conv1d + recurrence + gated RMS... | @mengfei-jiang | open | 2026-08-12 | 2026-08-17 |
| [#4707](https://github.com/ROCm/aiter/pull/4707) | fix(flydsl): stabilize SiTUv2 AOT cache keys | @charlieguo1106 | open | 2026-08-12 | 2026-08-17 |
| [#4730](https://github.com/ROCm/aiter/pull/4730) | moe gemm optimization | @yadaish | open | 2026-08-13 | 2026-08-17 |
| [#4789](https://github.com/ROCm/aiter/pull/4789) | [WIP]update gemm stage2 v2 kernel | @charlieguo1106 | draft | 2026-08-17 | 2026-08-17 |
| [#4791](https://github.com/ROCm/aiter/pull/4791) | fix(tuned_gemm): gate skinny GEMM default to archs with a re... | @yichiche | open | 2026-08-17 | 2026-08-17 |
| [#4773](https://github.com/ROCm/aiter/pull/4773) | [Triton] [Gluon] [GFX12] mxfp8 gemm | @k50112113 | draft | 2026-08-15 | 2026-08-17 |
| [#4787](https://github.com/ROCm/aiter/pull/4787) | [gfx950] Optimize Minimax M3 scoring & top-k kernels | @ukannika | draft | 2026-08-17 | 2026-08-17 |
| [#4771](https://github.com/ROCm/aiter/pull/4771) | [Triton][FMHA] Fused paged-prefill kernel for page_size=1, h... | @amd-ethany | open | 2026-08-15 | 2026-08-17 |
| [#4776](https://github.com/ROCm/aiter/pull/4776) | perf(mla): chunk the non-FP4 gather_kv_b_proj over KV | @zejunchen-zejun | open | 2026-08-15 | 2026-08-17 |
| [#4755](https://github.com/ROCm/aiter/pull/4755) | [Opus MoE] Unify A8W4 metadata and runtime dispatch | @yifehuan | open | 2026-08-14 | 2026-08-17 |
| [#4759](https://github.com/ROCm/aiter/pull/4759) | Add full 16-tier Qwen3-VL FP4 MoE tuned config for gfx950 | @johannes-graner | open | 2026-08-14 | 2026-08-17 |
| [#4762](https://github.com/ROCm/aiter/pull/4762) | feat(moe): consume prepared stage1 activation scales | @JohnQinAMD | open | 2026-08-14 | 2026-08-17 |
| [#4768](https://github.com/ROCm/aiter/pull/4768) | [Bugfix] Include headers necessary for ROCm 10.0.0 | @rjrock | open | 2026-08-14 | 2026-08-17 |
| [#4778](https://github.com/ROCm/aiter/pull/4778) | [gfx1100] Enable RDNA3 in arch allow-list + Triton GEMM A8W8... | @okone1995 | open | 2026-08-15 | 2026-08-17 |
| [#4779](https://github.com/ROCm/aiter/pull/4779) | [Bugfix] Handle GroupNorm autocast safely | @akshatvishu | open | 2026-08-15 | 2026-08-17 |
| [#4781](https://github.com/ROCm/aiter/pull/4781) | [gfx950] Retune the small-M tiles and wave counts in the A16... | @akii96 | open | 2026-08-16 | 2026-08-17 |
| [#4786](https://github.com/ROCm/aiter/pull/4786) | fix(custom_all_reduce): use SYSTEM scope + ACQUIRE ordering ... | @hekhong-png | open | 2026-08-16 | 2026-08-17 |
| [#4383](https://github.com/ROCm/aiter/pull/4383) |  [TRITON] Add gluon support for MXFP4 quant kernel in gfx950... | @NimitPtl | open | 2026-07-24 | 2026-08-16 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-08-16 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-08-15 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | Paged mla indexer | @fhuizing | open | 2026-07-13 | 2026-08-15 |
| [#4758](https://github.com/ROCm/aiter/pull/4758) | [Gluon][MLA] Deeper async-copy pipeline in the bh16 stage-1 ... | @amd-ethany | open | 2026-08-14 | 2026-08-15 |
| [#4775](https://github.com/ROCm/aiter/pull/4775) | [Attention] Expose paged MQA SplitKV override | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-08-15 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [MLA] Deterministic single-split decode option for reproduci... | @MohitAMD | open | 2026-07-24 | 2026-08-15 |
| [#4500](https://github.com/ROCm/aiter/pull/4500) | [Triton] [Gluon] [GFX9] [GFX12] EP MOE changes | @k50112113 | draft | 2026-08-01 | 2026-08-15 |
| [#4749](https://github.com/ROCm/aiter/pull/4749) | Alizaidy/bf16 gemm tuning 081426 | @azaidy | open | 2026-08-14 | 2026-08-15 |
| [#4582](https://github.com/ROCm/aiter/pull/4582) | [Gluon][MLA][gfx942] Add CDNA3 decode kernel | @maeehart | open | 2026-08-05 | 2026-08-15 |
| [#4446](https://github.com/ROCm/aiter/pull/4446) | [TRITON/GLUON]: Add moe_a16w4 gfx1250 gluon kernel | @rahulbatra85 | open | 2026-07-29 | 2026-08-15 |
| [#4629](https://github.com/ROCm/aiter/pull/4629) | [GLM-5.2 MXFP4][Tuning] Retune MXFP4 fused-MoE for gfx950 (T... | @nholmber | open | 2026-08-07 | 2026-08-14 |
| [#4766](https://github.com/ROCm/aiter/pull/4766) | [WIP][TRITON][GLUON][GFX950][DSV4] Sparse MLA training backw... | @wangye805 | draft | 2026-08-14 | 2026-08-14 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] Add gfx950 Kimi Delta Attention prefill kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-14 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | torch-free a4w4 GEMM + C++ library build | @Micky774 | open | 2026-07-07 | 2026-08-14 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [Bugfix][Build] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-08-14 |
| [#3606](https://github.com/ROCm/aiter/pull/3606) | [Bugfix][MLA] Correct final_lse in PS MLA prefill kernel for... | @simondanielsson | open | 2026-06-08 | 2026-08-14 |
| [#4761](https://github.com/ROCm/aiter/pull/4761) | [PERF] Optimize Triton unified attention prefill and decode | @vorapolsiloai | draft | 2026-08-14 | 2026-08-14 |
| [#4733](https://github.com/ROCm/aiter/pull/4733) | hd256 fp8 attention perf improvement | @JohnNikolay84 | open | 2026-08-13 | 2026-08-14 |
| [#4620](https://github.com/ROCm/aiter/pull/4620) | [MoE] Added Gelu with tanh approx for CK XDL 2-stage MoE | @a-sidorova | open | 2026-08-07 | 2026-08-14 |
| [#4254](https://github.com/ROCm/aiter/pull/4254) | Mxfp8 gemm  | @solinzby1 | open | 2026-07-16 | 2026-08-14 |
| [#4332](https://github.com/ROCm/aiter/pull/4332) | feat(flydsl): Add paged-attention Tile kernel | @fsx950223 | open | 2026-07-22 | 2026-08-14 |
| [#4641](https://github.com/ROCm/aiter/pull/4641) | [FlyDSL] Add SwiGLU activation to moe_gemm_2stage stage1 ker... | @akii96 | open | 2026-08-08 | 2026-08-14 |
| [#4668](https://github.com/ROCm/aiter/pull/4668) | [gfx1250][flydsl] add mha batchmode and kernel optimization | @jli-melchior | open | 2026-08-11 | 2026-08-14 |
| [#4747](https://github.com/ROCm/aiter/pull/4747) | Fp8 mxscale bmm bpreshuffle opt | @yzhou103 | draft | 2026-08-14 | 2026-08-14 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-08-14 |
| [#2997](https://github.com/ROCm/aiter/pull/2997) | mla: refuse page_size > 1 on bf16 decode-stage1 kernel (no _... | @kzjeef | open | 2026-05-01 | 2026-08-14 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-08-14 |
| [#3682](https://github.com/ROCm/aiter/pull/3682) | Fix the mla bf16 16mx4 kernel random nan error in MI350 | @minmengdie | open | 2026-06-11 | 2026-08-14 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-08-14 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [MLA v4 nm] Drop kv_last_page_lens from ABI + self-contained... | @amd-ruitang3 | open | 2026-07-21 | 2026-08-14 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-08-14 |
| [#4486](https://github.com/ROCm/aiter/pull/4486) | fix(cpp_itfs/pa): make the C++ paged_attention_ragged entry ... | @jiejingzhangamd | open | 2026-07-31 | 2026-08-14 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | Cache the paged_attention_v1 launch plan to fix batch=1 deco... | @zjin-lcf | open | 2026-08-03 | 2026-08-14 |
| [#4687](https://github.com/ROCm/aiter/pull/4687) | [triton][gfx1250] fp8_mqa_logits: fix epilogue store masks f... | @lijinpei-amd | open | 2026-08-11 | 2026-08-14 |
| [#4736](https://github.com/ROCm/aiter/pull/4736) | Replace block_ptr in HSTU attn kernel | @scxiao | open | 2026-08-13 | 2026-08-14 |
| [#4738](https://github.com/ROCm/aiter/pull/4738) | [TRITON] Make RNG deterministic in KV cache unit test | @brunomazzottiamd | open | 2026-08-13 | 2026-08-14 |
| [#4742](https://github.com/ROCm/aiter/pull/4742) | fix(rope): tolerate missing original_max_position_embeddings | @lizamd | open | 2026-08-14 | 2026-08-14 |
| [#4648](https://github.com/ROCm/aiter/pull/4648) | [Triton][Hardware] Add gfx1100 A8W8 tuning config | @01xjw | open | 2026-08-10 | 2026-08-14 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | draft | 2026-07-08 | 2026-08-14 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-08-14 |
| [#4614](https://github.com/ROCm/aiter/pull/4614) | [TRITON][GLUON][GFX950] Add Unified Attention Gluon Kernel | @cagrikymk | open | 2026-08-06 | 2026-08-13 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | Flydsl implementation of a8w8 blockscale for gfx1250 | @omuhamma | open | 2026-04-20 | 2026-08-13 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | flydsl implementation of a16w16 gemm | @omuhamma | open | 2026-04-13 | 2026-08-13 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | draft | 2026-08-13 | 2026-08-13 |
| [#4584](https://github.com/ROCm/aiter/pull/4584) | kda gluon gfx1250 implementation | @omuhamma | open | 2026-08-06 | 2026-08-13 |
| [#4739](https://github.com/ROCm/aiter/pull/4739) | [Misc] Harden AITER_ASM_DIR code-object loading | @fjankovi | draft | 2026-08-13 | 2026-08-13 |
| [#4355](https://github.com/ROCm/aiter/pull/4355) | [Feature][FlyDSL] Tiered persistent radix-select decode Top-... | @JH-Leon-KIM-AMD | open | 2026-07-23 | 2026-08-13 |
| [#4622](https://github.com/ROCm/aiter/pull/4622) | [FlyDSL] Replace the split-K atomic combine with a workspace... | @JohnQinAMD | open | 2026-08-07 | 2026-08-13 |
| [#4651](https://github.com/ROCm/aiter/pull/4651) | [JIT] Use shared runtime GPU architecture detection | @fsx950223 | open | 2026-08-10 | 2026-08-13 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-08-13 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-08-13 |
| [#3956](https://github.com/ROCm/aiter/pull/3956) | fix(triton): support gfx1201 unified attention within LDS li... | @papadako | open | 2026-06-26 | 2026-08-13 |
| [#4637](https://github.com/ROCm/aiter/pull/4637) | fix(quant): use saturating RNE for scaled int8 casts | @skyguan92 | open | 2026-08-07 | 2026-08-13 |
| [#4716](https://github.com/ROCm/aiter/pull/4716) | Skip CK batch-prefill paged-KV OOB fault cell (fp16/bf16, he... | @johannes-graner | open | 2026-08-12 | 2026-08-13 |
| [#4718](https://github.com/ROCm/aiter/pull/4718) | tune chunked_pa_prefill params for gfx950 | @nidal567 | open | 2026-08-12 | 2026-08-13 |
| [#4632](https://github.com/ROCm/aiter/pull/4632) | Tune mla_decode_rope fp32 config for gfx950 | @nidal567 | open | 2026-08-07 | 2026-08-13 |
| [#4453](https://github.com/ROCm/aiter/pull/4453) | [gfx950] Tune batched_gemm_a8w8 per-token-group for large M ... | @Jacob0226 | open | 2026-07-30 | 2026-08-13 |
| [#4704](https://github.com/ROCm/aiter/pull/4704) | [fmoe] Add extern_moe_output param for combine zero-copy | @kawhil-amd | open | 2026-08-12 | 2026-08-13 |
| [#4592](https://github.com/ROCm/aiter/pull/4592) | Add bf16 gemm config dsv4 on gfx12 | @junhaha666 | open | 2026-08-06 | 2026-08-13 |
| [#4538](https://github.com/ROCm/aiter/pull/4538) | [flydsl] gfx950 FP8 MQA logits indexer kernel | @vpietila-amd | open | 2026-08-03 | 2026-08-13 |
| [#4703](https://github.com/ROCm/aiter/pull/4703) | Make AITER prebuild thread count configurable | @gyohuangxin | open | 2026-08-12 | 2026-08-13 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-08-13 |
| [#4617](https://github.com/ROCm/aiter/pull/4617) | feat(fused_moe): accept a caller-provided output buffer | @RolaoDenthu | open | 2026-08-06 | 2026-08-13 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | feat: Support LoongArch64, LoongArch64 not support CodeModel... | @Xinmudotmoe | open | 2026-08-12 | 2026-08-13 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: fix get_block_n_fp8 KeyError on speculative-decod... | @xiaohuguo2023 | open | 2026-08-12 | 2026-08-13 |
| [#4242](https://github.com/ROCm/aiter/pull/4242) | [gfx1151] [triton-fa]: tune FlashAttention backward configs | @hogeheer499-commits | open | 2026-07-14 | 2026-08-12 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-08-14 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-08-12 |
| [#4147](https://github.com/ROCm/aiter/pull/4147) | [TRITON] [GLUON] [GFX950] Add MHA Gluon Kernel | @lucas-santos-amd | open | 2026-07-08 | 2026-08-12 |
| [#4653](https://github.com/ROCm/aiter/pull/4653) | Default missing deepseek_yarn original_max_position_embeddin... | @JessicaJiang-123 | open | 2026-08-10 | 2026-08-12 |
| [#4659](https://github.com/ROCm/aiter/pull/4659) | [triton] Add two fused ops for diffusion transformer blocks | @carlushuang | open | 2026-08-10 | 2026-08-12 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | open | 2026-07-21 | 2026-08-12 |
| [#4715](https://github.com/ROCm/aiter/pull/4715) | [FlyDSL] split-K hgemm: make semaphore/signal workspace CUDA... | @xiaohuguo2023 | draft | 2026-08-12 | 2026-08-12 |
| [#4691](https://github.com/ROCm/aiter/pull/4691) | [Triton][GFX12] Fix Gluon API compatibility | @leo-automation | open | 2026-08-11 | 2026-08-12 |
| [#4542](https://github.com/ROCm/aiter/pull/4542) | Declare fused_moe/tuned_gemm preshuffled weight layout | @yzhou103 | open | 2026-08-04 | 2026-08-12 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [KIMI-K3] Enable KDA per-channel decay gate in FlyDSL GDR de... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-08-12 |
| [#4696](https://github.com/ROCm/aiter/pull/4696) | Fix multi-rank JIT import race for on-demand modules | @Lzy17 | open | 2026-08-11 | 2026-08-12 |
| [#4640](https://github.com/ROCm/aiter/pull/4640) | feat(triton): enable gfx1100 MXFP4 MoE | @skyguan92 | open | 2026-08-08 | 2026-08-12 |
| [#4689](https://github.com/ROCm/aiter/pull/4689) | [triton][gemm] gemm_a16wfp4: mask the b_scales load when EVE... | @lijinpei-amd | open | 2026-08-11 | 2026-08-12 |
| [#4698](https://github.com/ROCm/aiter/pull/4698) | [Triton][GDN] Accept token-major w/u/g in opt-VK prefill sta... | @JohnQinAMD | open | 2026-08-12 | 2026-08-12 |
| [#4663](https://github.com/ROCm/aiter/pull/4663) | [tune] DSv4 bf16: add gfx950 LM-head GEMM configs (N=129280,... | @jiacao-amd | draft | 2026-08-10 | 2026-08-12 |
| [#4664](https://github.com/ROCm/aiter/pull/4664) | [tune] DSv4 a8w8 blockscale: add gfx950 configs for three MI... | @jiacao-amd | draft | 2026-08-10 | 2026-08-12 |
| [#4697](https://github.com/ROCm/aiter/pull/4697) | [cache] cover int32 slot_mapping in test_kvcache | @i-chaochen | open | 2026-08-11 | 2026-08-11 |
| [#4645](https://github.com/ROCm/aiter/pull/4645) | [Gluon][MHA][gfx942] Add FP8 D192/V128 prefill | @maeehart | open | 2026-08-09 | 2026-08-11 |
| [#4690](https://github.com/ROCm/aiter/pull/4690) | [triton][gemm] fused_fp4_bmm_rope: fix two OOB reads when EV... | @lijinpei-amd | open | 2026-08-11 | 2026-08-11 |
| [#4685](https://github.com/ROCm/aiter/pull/4685) | [triton][gemm] batched_gemm_a16wfp4: fix two OOB reads when ... | @lijinpei-amd | open | 2026-08-11 | 2026-08-11 |
| [#4686](https://github.com/ROCm/aiter/pull/4686) | [cpp_itfs] Harden the C++ JIT loader: no shell, validated pa... | @fjankovi | draft | 2026-08-11 | 2026-08-11 |
| [#4602](https://github.com/ROCm/aiter/pull/4602) | [triton] chunk delta attn opt | @Liang-jianhao97 | open | 2026-08-06 | 2026-08-11 |
| [#4656](https://github.com/ROCm/aiter/pull/4656) | Rm sort for decode gdr | @IzacharyI | open | 2026-08-10 | 2026-08-11 |
| [#4681](https://github.com/ROCm/aiter/pull/4681) | [gluon][mla][gfx950] add M-pack MTP regime (bh16mpack) | @yanxuer-999 | draft | 2026-08-11 | 2026-08-11 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [Qwen3.5_dev][MoE] Add FlyDSL FP8 MoE kernels (decode weight... | @apinge | draft | 2026-07-27 | 2026-08-11 |
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-08-11 |
| [#4458](https://github.com/ROCm/aiter/pull/4458) | CI: add extended test workflow | @gyohuangxin | draft | 2026-07-30 | 2026-08-11 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | Simplify ck_gemm_a8w8_blockscale GemmSpecialization construc... | @jbelloncastro | open | 2026-06-19 | 2026-08-11 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQinAMD | open | 2026-08-05 | 2026-08-11 |
| [#3389](https://github.com/ROCm/aiter/pull/3389) | Add Qwen-Image-Edit FP8 a8w8 bpreshuffle GEMM tune configs f... | @LiuYinfeng01 | draft | 2026-05-28 | 2026-08-11 |
| [#4348](https://github.com/ROCm/aiter/pull/4348) | Aiterker 112 asm ptl1 | @JohnNikolay84 | open | 2026-07-23 | 2026-08-10 |
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton] unified_attention: mask V load and output store by ... | @reger-men | open | 2026-06-12 | 2026-08-10 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [BUG][CK][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-08-10 |
| [#4531](https://github.com/ROCm/aiter/pull/4531) | [kernel] mrope cache-quant: accept strided flash KV-cache vi... | @vorapolsiloai | open | 2026-08-03 | 2026-08-10 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | Add Windows support | @0xDELUXA | open | 2026-04-11 | 2026-08-10 |
| [#4626](https://github.com/ROCm/aiter/pull/4626) | Gfx1250 flydsl batched gemm | @XingerZhu | open | 2026-08-07 | 2026-08-10 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-08-10 |
| [#4599](https://github.com/ROCm/aiter/pull/4599) | [OPUS]tdm refactor | @demonsan | open | 2026-08-06 | 2026-08-10 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4580](https://github.com/ROCm/aiter/pull/4580) | [Bug] pa_mqa_logits: guard all OutLogits stores | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-08-08 |
| [#4489](https://github.com/ROCm/aiter/pull/4489) | feat(gemm): complete GLM-5.2 dense tuned configs (gfx950) | @Raiden-Makoto | open | 2026-07-31 | 2026-08-07 |
| [#4146](https://github.com/ROCm/aiter/pull/4146) | [GFX1250] fused_add_rmsnorm_pad() gluon equivalent function | @amd-jrosas | open | 2026-07-08 | 2026-08-07 |
| [#3937](https://github.com/ROCm/aiter/pull/3937) | Gluon MXFP4 Fuse Reduce Quant | @amd-jrosas | open | 2026-06-25 | 2026-08-07 |
| [#4049](https://github.com/ROCm/aiter/pull/4049) | Gluon Fused Dynamic mxfp4 Quant Moe Sort for gfx1250 | @amd-jrosas | open | 2026-07-01 | 2026-08-07 |
| [#3686](https://github.com/ROCm/aiter/pull/3686) | [DO NOT MERGE][TRITON] Evaluating impact of LLVM bump in Tri... | @brunomazzottiamd | open | 2026-06-11 | 2026-08-07 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | Flydsl attn res | @anhminhnguyenhoang | draft | 2026-08-06 | 2026-08-07 |
| [#4587](https://github.com/ROCm/aiter/pull/4587) | [fix][mla] keep get_meta_param's split-offset table alive fo... | @Duyi-Wang | open | 2026-08-06 | 2026-08-07 |
| [#3818](https://github.com/ROCm/aiter/pull/3818) | Flydsl moe 4gib fix | @IzacharyI | open | 2026-06-20 | 2026-08-07 |
| [#4624](https://github.com/ROCm/aiter/pull/4624) | CI: resolve container Python for release builds | @gyohuangxin | draft | 2026-08-07 | 2026-08-07 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton] Add fused gated residual + LayerNorm + scale/shift ... | @menglcai | open | 2026-07-28 | 2026-08-07 |
| [#4274](https://github.com/ROCm/aiter/pull/4274) | Add MiniMax-M3 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#4276](https://github.com/ROCm/aiter/pull/4276) | Add Kimi-K2.6 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#4595](https://github.com/ROCm/aiter/pull/4595) | [WIP]opt tilesize 128x256x256 for fmoe gemm v2 | @charlieguo1106 | draft | 2026-08-06 | 2026-08-07 |
| [#3256](https://github.com/ROCm/aiter/pull/3256) | [flydsl] PA DECODE | @ahmed-bsod | open | 2026-05-18 | 2026-08-07 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-08-07 |
| [#4597](https://github.com/ROCm/aiter/pull/4597) | Dev/tiny kernel improve | @yadaish | open | 2026-08-06 | 2026-08-07 |
| [#4615](https://github.com/ROCm/aiter/pull/4615) | [Draft] Register FlyDSL operations in torch | @mohbasit | open | 2026-08-06 | 2026-08-07 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-08-06 |
| [#4607](https://github.com/ROCm/aiter/pull/4607) | [gfx1250] Fuse A4W4 stage1 FP4 quantization | @XiaobingSuper | open | 2026-08-06 | 2026-08-06 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-24 | 2026-08-06 |
| [#3457](https://github.com/ROCm/aiter/pull/3457) | Fused SplitK zero-init for FP8 a8w8 blockscale GEMMs (y_is_z... | @samremes | open | 2026-06-01 | 2026-08-06 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | Implement FlyDSL version of fused_qk_norm_mrope_3d_cache_pts... | @amd-meskelin | draft | 2026-07-24 | 2026-08-06 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-08-06 |
| [#4512](https://github.com/ROCm/aiter/pull/4512) | fix(build): resolve gfx1100 targets across JIT paths | @skyguan92 | open | 2026-08-02 | 2026-08-06 |
| [#3260](https://github.com/ROCm/aiter/pull/3260) | Revert "CI: use vultr 325 runner labels" | @gyohuangxin | open | 2026-05-19 | 2026-08-06 |
| [#3180](https://github.com/ROCm/aiter/pull/3180) | CI: add tuned config smoke mode | @gyohuangxin | open | 2026-05-14 | 2026-08-06 |
| [#3162](https://github.com/ROCm/aiter/pull/3162) | CI: add test prebuild profile for PR wheels | @gyohuangxin | open | 2026-05-13 | 2026-08-06 |
| [#4295](https://github.com/ROCm/aiter/pull/4295) | [gfx1250] Launch v4 NM MLA decode .co directly from Python (... | @feifei14119 | open | 2026-07-20 | 2026-08-06 |
| [#4515](https://github.com/ROCm/aiter/pull/4515) | [Perf][FlyDSL] Reduce short-context FP4 prefill tile size | @zhiding512 | open | 2026-08-03 | 2026-08-06 |
| [#4571](https://github.com/ROCm/aiter/pull/4571) | [perf][flydsl] optimize group moe small ops | @lalala-sh | open | 2026-08-05 | 2026-08-06 |
| [#4493](https://github.com/ROCm/aiter/pull/4493) | [triton-mha] add gfx1101 tuning config | @Ragua1 | open | 2026-07-31 | 2026-08-06 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | open | 2026-07-14 | 2026-08-05 |
| [#4427](https://github.com/ROCm/aiter/pull/4427) | [Bugfix][Triton] Fix large-stride KV address overflow in pag... | @shen-shanshan | open | 2026-07-28 | 2026-08-05 |
| [#4556](https://github.com/ROCm/aiter/pull/4556) | [PERF][FlyDSL MoE] Add opt-in atomic stage2 override | @vorapolsiloai | draft | 2026-08-04 | 2026-08-05 |
| [#4554](https://github.com/ROCm/aiter/pull/4554) | configs: add tuned configs for Qwen3-VL-235B MXFP4 (gfx950) | @vorapolsiloai | draft | 2026-08-04 | 2026-08-05 |
| [#4399](https://github.com/ROCm/aiter/pull/4399) | Satya/gfx12 mxfp4 gemm | @Boss2002n | draft | 2026-07-27 | 2026-08-05 |
| [#4252](https://github.com/ROCm/aiter/pull/4252) | [FIX] Expert Map Parallel | @amirumoAMD | open | 2026-07-15 | 2026-08-05 |
| [#3940](https://github.com/ROCm/aiter/pull/3940) | [Triton] Add fused_gemm_a16w16_split_cat | @rbrugaro-amd | open | 2026-06-25 | 2026-08-05 |
| [#1484](https://github.com/ROCm/aiter/pull/1484) | [TRITON] Extend fp8 mqa tests | @cagrikymk | open | 2025-11-24 | 2026-08-05 |
| [#2197](https://github.com/ROCm/aiter/pull/2197) | Add Gluon GEMM tutorial | @mengfei-jiang | open | 2026-03-06 | 2026-08-05 |
| [#2277](https://github.com/ROCm/aiter/pull/2277) | [Triton MoE] Add optimized Gluon kernel for AMD CDNA3 with K... | @jwu10003 | open | 2026-03-14 | 2026-08-05 |
| [#2409](https://github.com/ROCm/aiter/pull/2409) | Add gfx950 Triton GEMM tuning configs for DeepSeek-R1 shapes | @sunway513 | open | 2026-03-22 | 2026-08-05 |
| [#2429](https://github.com/ROCm/aiter/pull/2429) | add README for gluon kernels | @Dewei-Wang-sh | open | 2026-03-23 | 2026-08-05 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-08-05 |
| [#2488](https://github.com/ROCm/aiter/pull/2488) | GEMMa8w8 blockscale gluon gfx12 kernel v2 | @amirumoAMD | open | 2026-03-26 | 2026-08-05 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-08-05 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-08-05 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-08-05 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-08-05 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-08-05 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-08-05 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | open | 2026-04-24 | 2026-08-05 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-08-05 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-08-05 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-08-05 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-08-05 |
| [#3114](https://github.com/ROCm/aiter/pull/3114) | Update gluon | @fsx950223 | open | 2026-05-11 | 2026-08-05 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-08-05 |
| [#3272](https://github.com/ROCm/aiter/pull/3272) | Revert "[Triton] Declare triton>=3.6.0 dependency " | @gyohuangxin | open | 2026-05-19 | 2026-08-05 |
| [#3364](https://github.com/ROCm/aiter/pull/3364) | Reduced gfx1250 triton_tests for FFM CI | @Boss2002n | open | 2026-05-26 | 2026-08-05 |
| [#3429](https://github.com/ROCm/aiter/pull/3429) | Fuse dynamic_per_tensor_quant_fp8_i8 into one launch for the... | @JohnQinAMD | open | 2026-05-29 | 2026-08-05 |
| [#3556](https://github.com/ROCm/aiter/pull/3556) | Fix e8m0 conversion to fp32 | @Arech8 | open | 2026-06-05 | 2026-08-05 |
| [#3564](https://github.com/ROCm/aiter/pull/3564) | [TRITON] Clean-up pa_mqa_logits (deepgemm attention) benchma... | @cagrikymk | open | 2026-06-05 | 2026-08-05 |
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
| [#4488](https://github.com/ROCm/aiter/pull/4488) | [Test] mla_gluon: regression test for the >2GB KV cache path | @JohnQinAMD | open | 2026-07-31 | 2026-08-05 |
| [#4536](https://github.com/ROCm/aiter/pull/4536) | [Bugfix][Kernel][Hardware][AMD] Fix invalid GFX12 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-05 |
| [#4549](https://github.com/ROCm/aiter/pull/4549) | [FlyDSL] Fused online Hadamard rotation + MXFP4 quantization... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4550](https://github.com/ROCm/aiter/pull/4550) | [FlyDSL] flydsl_gdr_decode: read strided q/k/v directly (qkv... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4510](https://github.com/ROCm/aiter/pull/4510) | [Bugfix][FlyDSL] Honor b_nt in mixed-MoE stage-2 and retune ... | @qiongz | draft | 2026-08-02 | 2026-08-05 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-08-04 |
| [#4559](https://github.com/ROCm/aiter/pull/4559) | docs: align Ruff version with CI | @01xjw | draft | 2026-08-04 | 2026-08-04 |
| [#3938](https://github.com/ROCm/aiter/pull/3938) | gate custom all-reduce on XGMI topology | @skysnow2001 | open | 2026-06-25 | 2026-08-04 |
| [#4557](https://github.com/ROCm/aiter/pull/4557) | [gfx1250][FlyDSL] Migrate gemm kernels to the stable DSL API | @aoli26 | open | 2026-08-04 | 2026-08-04 |
| [#4537](https://github.com/ROCm/aiter/pull/4537) | [gfx1250] Fix three gluon GEMM correctness bugs and tune the... | @XiaobingSuper | open | 2026-08-03 | 2026-08-04 |
| [#4551](https://github.com/ROCm/aiter/pull/4551) | [FlyDSL MoE] Enable persistent stage2 grid for large-M mxfp8 | @XiaobingSuper | draft | 2026-08-04 | 2026-08-04 |
| [#4398](https://github.com/ROCm/aiter/pull/4398) | Two-stage a16w4 MoE GEMM (INTERLEAVE-gate mode) | @apicciau | open | 2026-07-27 | 2026-08-04 |
| [#4544](https://github.com/ROCm/aiter/pull/4544) | tune: default --timeout to 100s so a dead worker gets reaped | @yzhou103 | draft | 2026-08-04 | 2026-08-04 |
| [#4407](https://github.com/ROCm/aiter/pull/4407) | feat(moe): add SharedEP MXFP4 kernels | @AMD-yanfeiwang | open | 2026-07-28 | 2026-08-04 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-08-04 |
| [#4487](https://github.com/ROCm/aiter/pull/4487) | [tune] Kimi-K3 SiTUv2 MoE: add block_m=64 for DSpark verify-... | @nehaprakriya | open | 2026-07-31 | 2026-08-04 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-08-04 |
| [#4514](https://github.com/ROCm/aiter/pull/4514) | [Feature][FlyDSL] Add multi-B MoE kernels for ROCm DWDP | @AMD-yanfeiwang | open | 2026-08-03 | 2026-08-04 |
| [#4525](https://github.com/ROCm/aiter/pull/4525) | Add gfx90a to GFX_CU_NUM_MAP | @davetha | open | 2026-08-03 | 2026-08-04 |
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-04 |
| [#4517](https://github.com/ROCm/aiter/pull/4517) | [gfx950][Triton] Fix unified_attention num_stages > 1 crash ... | @Rohan138 | draft | 2026-08-03 | 2026-08-03 |
| [#3991](https://github.com/ROCm/aiter/pull/3991) | refactor aot | @zhiding512 | draft | 2026-06-29 | 2026-08-03 |
| [#4497](https://github.com/ROCm/aiter/pull/4497) | perf(flydsl): fuse Kimi-K3 MLA output gate on gfx950 | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4503](https://github.com/ROCm/aiter/pull/4503) | perf(flydsl): add Kimi-K3 FP8 latent MoE tail | @JohnQinAMD | draft | 2026-08-01 | 2026-08-02 |
| [#4504](https://github.com/ROCm/aiter/pull/4504) | perf(flydsl): fuse Kimi-K3 FP8 pre-route projections | @JohnQinAMD | draft | 2026-08-01 | 2026-08-02 |
| [#4499](https://github.com/ROCm/aiter/pull/4499) | perf(flydsl): optimize Kimi-K3 KDA group64 projection on gfx... | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4498](https://github.com/ROCm/aiter/pull/4498) | perf(flydsl): fuse Kimi-K3 B1 BF16 pre-route projections on ... | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4496](https://github.com/ROCm/aiter/pull/4496) | perf(flydsl): fuse Kimi-K3 B1 latent MoE tail | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4495](https://github.com/ROCm/aiter/pull/4495) | perf(flydsl): fuse Kimi-K3 KDA decode and f_b projection | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-08-02 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-08-02 |
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-08-02 |
| [#2406](https://github.com/ROCm/aiter/pull/2406) | Add operator performance benchmark CI workflow | @sunway513 | open | 2026-03-22 | 2026-08-02 |
| [#2401](https://github.com/ROCm/aiter/pull/2401) | Fix kernel map collision on MGPU context | @Micky774 | open | 2026-03-20 | 2026-08-02 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-08-02 |
| [#2350](https://github.com/ROCm/aiter/pull/2350) | [gfx1201] Added tuned gemm_a8w8_configs for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-08-02 |
| [#2340](https://github.com/ROCm/aiter/pull/2340) | feat: add INT8/INT4 quantization support for 2-stage ASM MoE... | @amd-zfyu | open | 2026-03-19 | 2026-08-02 |
| [#2179](https://github.com/ROCm/aiter/pull/2179) | Adds the ability to build static archives in addition to sha... | @Micky774 | open | 2026-03-04 | 2026-08-02 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-08-02 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-08-02 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-08-02 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-08-02 |
| [#2922](https://github.com/ROCm/aiter/pull/2922) | Deepseek Sparse Attention Triton Kernels for Training | @wangye805 | draft | 2026-04-27 | 2026-08-02 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-08-02 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-08-02 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-08-02 |
| [#2789](https://github.com/ROCm/aiter/pull/2789) | gemma quant | @ganyi1996ppo | open | 2026-04-19 | 2026-08-02 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-08-02 |
| [#2779](https://github.com/ROCm/aiter/pull/2779) | [Don't merge] Gluon pa bad case reproducer | @ganyi1996ppo | draft | 2026-04-17 | 2026-08-02 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-08-02 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-08-02 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-08-02 |
| [#2730](https://github.com/ROCm/aiter/pull/2730) | introduce g1u0 smoothquant int8 fused moe : fused_moe_gelu_s... | @tingqli | open | 2026-04-14 | 2026-08-02 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-08-02 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-08-02 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-08-02 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-08-02 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-08-02 |
| [#2640](https://github.com/ROCm/aiter/pull/2640) | Restore CKTile MOE tuning and add between-stage quant fairne... | @amd-yashagar | open | 2026-04-07 | 2026-08-02 |
| [#2632](https://github.com/ROCm/aiter/pull/2632) | [config] Add bf16 tuned GEMM config for Kimi-K2.5 on MI355 (... | @akao-amd | open | 2026-04-07 | 2026-08-02 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-08-02 |
| [#2622](https://github.com/ROCm/aiter/pull/2622) | [FlyDSL] Tune MXFP4 MOE stage1 tile configs for DeepSeek-R1 | @sunway513 | open | 2026-04-05 | 2026-08-02 |
| [#2615](https://github.com/ROCm/aiter/pull/2615) | Add pytest for fmha_v3_varlen_fwd to trigger module_fmha_v3_... | @Copilot | draft | 2026-04-03 | 2026-08-02 |
| [#2613](https://github.com/ROCm/aiter/pull/2613) | add a8w8 gemm config for gfx942 | @wangxunx | open | 2026-04-03 | 2026-08-02 |
| [#2605](https://github.com/ROCm/aiter/pull/2605) | fix: replace hardcoded /opt/rocm paths with ROCM_HOME env va... | @zufayu | open | 2026-04-03 | 2026-08-02 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-08-02 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-08-02 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-08-02 |
| [#2565](https://github.com/ROCm/aiter/pull/2565) | Unify FlyDSL W4A4/G1U0 updates and tuning fixes | @rujiacai | open | 2026-04-01 | 2026-08-02 |
| [#2559](https://github.com/ROCm/aiter/pull/2559) | Kimi 128k tuned config(TP4&TP8) | @inkcherry | open | 2026-03-31 | 2026-08-02 |
| [#2530](https://github.com/ROCm/aiter/pull/2530) | [DO NOT MERG] CI: test switch MI35x runners to DPX labels | @gyohuangxin | open | 2026-03-30 | 2026-08-02 |
| [#2504](https://github.com/ROCm/aiter/pull/2504) | [TRITON] Unified attention benchmark | @juuso-oskari | open | 2026-03-27 | 2026-08-02 |
| [#2478](https://github.com/ROCm/aiter/pull/2478) | Fix GPU memory access fault in CK MoE FP4 kernel with Expert... | @M4jupitercannon | open | 2026-03-26 | 2026-08-02 |
| [#2472](https://github.com/ROCm/aiter/pull/2472) | [Triton] [Gluon] [GFX12] add UA3D gluon kernel for gfx12 | @k50112113 | draft | 2026-03-25 | 2026-08-02 |
| [#2443](https://github.com/ROCm/aiter/pull/2443) | [FEAT] add enable_ck = 0 for dispatching | @HaonanWang98 | open | 2026-03-24 | 2026-08-02 |
| [#2417](https://github.com/ROCm/aiter/pull/2417) | feat: CK-free shim + Triton MLA for (gfx1250) | @sunway513 | open | 2026-03-22 | 2026-08-02 |
| [#2369](https://github.com/ROCm/aiter/pull/2369) | [Bugfix] Handle expert groups > 32 in biased_grouped_topk | @ianschenck | open | 2026-03-20 | 2026-08-02 |
| [#2362](https://github.com/ROCm/aiter/pull/2362) | Gluon kernel for a16w16 gemm | @omuhamma | draft | 2026-03-19 | 2026-08-02 |
| [#2355](https://github.com/ROCm/aiter/pull/2355) | Fix ASM I8 GEMM: split the M dimension into chunks that keep... | @xudonlyu | open | 2026-03-19 | 2026-08-02 |
| [#2337](https://github.com/ROCm/aiter/pull/2337) | GFX1250 Gluon MoE A4W4 Kernel | @farlukas | draft | 2026-03-18 | 2026-08-02 |
| [#2314](https://github.com/ROCm/aiter/pull/2314) | Add MPerBlock=128 tile size for blockscale FP8 MoE kernels | @ChuanLi1101 | open | 2026-03-17 | 2026-08-02 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-08-02 |
| [#3369](https://github.com/ROCm/aiter/pull/3369) | fp8 einsum flydsl impl | @ganyi1996ppo | open | 2026-05-27 | 2026-08-02 |
| [#3361](https://github.com/ROCm/aiter/pull/3361) | [feat] add no_combine flag in 2-stage MoE backend | @zx3xyy | open | 2026-05-26 | 2026-08-02 |
| [#3340](https://github.com/ROCm/aiter/pull/3340) | docs: AITER late May 2026 newsletter (v0.1.14 + v0.1.13.post... | @sunway513 | open | 2026-05-25 | 2026-08-02 |
| [#3316](https://github.com/ROCm/aiter/pull/3316) | [ck gemm a8w8 blockscale] shape-aware kernel selection heuri... | @eppaneamd | open | 2026-05-22 | 2026-08-02 |
| [#3297](https://github.com/ROCm/aiter/pull/3297) | add pageattention with sliding window | @ChengYao-amd | open | 2026-05-21 | 2026-08-02 |
| [#3295](https://github.com/ROCm/aiter/pull/3295) | repro(pa-asm): standalone reproducer for fp8 PA OOB at bs=12... | @yhl-amd | open | 2026-05-21 | 2026-08-02 |
| [#3275](https://github.com/ROCm/aiter/pull/3275) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-08-02 |
| [#3263](https://github.com/ROCm/aiter/pull/3263) | Fused ar(use_new=false) + rmsnorm | @IzacharyI | open | 2026-05-19 | 2026-08-02 |
| [#3249](https://github.com/ROCm/aiter/pull/3249) | [Perf] add_rmsnorm_quant: fuse two block reduces into single... | @kudomcho | open | 2026-05-18 | 2026-08-02 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-08-02 |
| [#3242](https://github.com/ROCm/aiter/pull/3242) | [Bugfix] Fix op schema for fmha_v3_fowd and gemm_a16w16 | @Phi-C | open | 2026-05-18 | 2026-08-02 |
| [#3222](https://github.com/ROCm/aiter/pull/3222) | FlyDSL sage mxfp4 (v2) | @hellozhuo-amd | draft | 2026-05-15 | 2026-08-02 |
| [#3210](https://github.com/ROCm/aiter/pull/3210) | [feat](gpt-oss): add a8w8 gemm tunefile for gpt-oss | @PerryZhang01 | open | 2026-05-15 | 2026-08-02 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-08-02 |
| [#3165](https://github.com/ROCm/aiter/pull/3165) | FlyDSL sage v1 | @hellozhuo-amd | draft | 2026-05-13 | 2026-08-02 |
| [#3160](https://github.com/ROCm/aiter/pull/3160) | [DO NOT MERGE] CI: split Aiter wheel prebuild by architectur... | @gyohuangxin | open | 2026-05-13 | 2026-08-02 |
| [#3152](https://github.com/ROCm/aiter/pull/3152) | [feat] Add HIP inline asm GDN decode op | @IzacharyI | open | 2026-05-12 | 2026-08-02 |
| [#3147](https://github.com/ROCm/aiter/pull/3147) | [BugFix] Align FlyDSL MXFP4 quantization with reference | @zihaomu | open | 2026-05-12 | 2026-08-02 |
| [#3110](https://github.com/ROCm/aiter/pull/3110) | [BugFix] A4W4 FMoE run_config weight shuffle | @zihaomu | open | 2026-05-11 | 2026-08-02 |
| [#3109](https://github.com/ROCm/aiter/pull/3109) | [ROCm][aiter] Add DSv3.2 BF16 GEMM tuned configs for gfx950 ... | @sunway513 | open | 2026-05-10 | 2026-08-02 |
| [#3094](https://github.com/ROCm/aiter/pull/3094) | [FLYDSL] [TRITON] Attention backward mxfp8 gfx950 | @lburzawa | open | 2026-05-08 | 2026-08-02 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-08-02 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-08-02 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-08-02 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-08-02 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-08-02 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | draft | 2026-04-29 | 2026-08-02 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-08-02 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-08-02 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-08-02 |
| [#2885](https://github.com/ROCm/aiter/pull/2885) | Implement TurboQuant | @waqahmed-amd-fi | draft | 2026-04-23 | 2026-08-02 |
| [#2844](https://github.com/ROCm/aiter/pull/2844) | aiter/__init__: per-module try/except so the first broken op... | @ChuanLi1101 | open | 2026-04-21 | 2026-08-02 |
| [#2839](https://github.com/ROCm/aiter/pull/2839) | fix(build): add missing c10/hip/HIPException.h include in ga... | @ChuanLi1101 | open | 2026-04-21 | 2026-08-02 |
| [#2830](https://github.com/ROCm/aiter/pull/2830) | fav3 kernel with improved softmax | @antsaukk | draft | 2026-04-21 | 2026-08-02 |
| [#2822](https://github.com/ROCm/aiter/pull/2822) | [ROCm][Perf] Optimize batched_gemm_a16wfp4 kernel — 2.97x mi... | @rbrugaro-amd | draft | 2026-04-20 | 2026-08-02 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-08-02 |
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-08-02 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-08-02 |
| [#3923](https://github.com/ROCm/aiter/pull/3923) | change default pa reduce kernel from cxx to flydsl | @Bernard-Liu | open | 2026-06-25 | 2026-08-02 |
| [#3810](https://github.com/ROCm/aiter/pull/3810) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-19 | 2026-08-02 |
| [#3800](https://github.com/ROCm/aiter/pull/3800) | [gfx950] Add JIT grouped_gemm_mxfp8 for MXFP8 prefill MoE | @fanxingran | open | 2026-06-18 | 2026-08-02 |
| [#3783](https://github.com/ROCm/aiter/pull/3783) | [Small_M_GEMM_GroupGEMM_MXFP8] Decode small-M MX-FP8 GEMM an... | @JohnQinAMD | open | 2026-06-17 | 2026-08-02 |
| [#3718](https://github.com/ROCm/aiter/pull/3718) | Yhl/gptoss pa asm shuf repro 20260611 | @yhl-amd | open | 2026-06-15 | 2026-08-02 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-08-02 |
| [#3639](https://github.com/ROCm/aiter/pull/3639) | Gfx1250 moe 2mode e2e v1 yadai tmp | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3628](https://github.com/ROCm/aiter/pull/3628) | Gfx1250 moe 2mode e2e v1 yadai | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3617](https://github.com/ROCm/aiter/pull/3617) | Fix pa_mqa_logits MI300X divide-by-zero for small TileQCount | @ysmkone | draft | 2026-06-08 | 2026-08-02 |
| [#3613](https://github.com/ROCm/aiter/pull/3613) | [Triton] [Gluon] [GFX12] mHC_post_pre kernel | @k50112113 | draft | 2026-06-08 | 2026-08-02 |
| [#3602](https://github.com/ROCm/aiter/pull/3602) | [FLYDSL] Optimize GDR prefill chunk_gdn_fwd_h for MI35X | @huizzhan | open | 2026-06-08 | 2026-08-02 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-08-02 |
| [#3591](https://github.com/ROCm/aiter/pull/3591) | [hotfix] always use fp4x2 for swiglu separated per_1x32 path | @yadaish | open | 2026-06-08 | 2026-08-02 |
| [#3585](https://github.com/ROCm/aiter/pull/3585) | [op_tests] Refactor MoE legacy UT into per-quant smoke sweep | @zhiding512 | open | 2026-06-07 | 2026-08-02 |
| [#3578](https://github.com/ROCm/aiter/pull/3578) | ci: add paired-release validation gate workflow (AITER+ATOM ... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3573](https://github.com/ROCm/aiter/pull/3573) | CI: add retry logic for Aiter wheel artifact downloads | @Copilot | draft | 2026-06-06 | 2026-08-02 |
| [#3571](https://github.com/ROCm/aiter/pull/3571) | ci(sglang-downstream): add MoRI EP accuracy gate (guards moe... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3567](https://github.com/ROCm/aiter/pull/3567) | [Triton] [GFX12]] non-MLA fused_kv_cache | @k50112113 | draft | 2026-06-05 | 2026-08-02 |
| [#3557](https://github.com/ROCm/aiter/pull/3557) | feat(pa): enable paged-attention on gfx1201 (RDNA4) via WMMA | @stevenshenyj | draft | 2026-06-05 | 2026-08-02 |
| [#3553](https://github.com/ROCm/aiter/pull/3553) | [fmoe] Add EP Support to Two-Stage MoE Op Tests | @BangBOOM | open | 2026-06-05 | 2026-08-02 |
| [#3548](https://github.com/ROCm/aiter/pull/3548) | [MOE]: production EP + pure-TP-pad stack for Step-3.5-Flash-... | @LJ-underdog | open | 2026-06-05 | 2026-08-02 |
| [#3547](https://github.com/ROCm/aiter/pull/3547) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-04 | 2026-08-02 |
| [#3538](https://github.com/ROCm/aiter/pull/3538) | fix(flydsl_moe_stage1): pre-zero output when inter_dim_pad >... | @kkHuang-amd | open | 2026-06-04 | 2026-08-02 |
| [#3535](https://github.com/ROCm/aiter/pull/3535) | Add Radeon GPU CI smoke test | @vivienfanghuagood | open | 2026-06-04 | 2026-08-02 |
| [#3532](https://github.com/ROCm/aiter/pull/3532) | fix(moe-tune): bound registration-barrier deadlock + harden ... | @jhinpan | open | 2026-06-04 | 2026-08-02 |
| [#3523](https://github.com/ROCm/aiter/pull/3523) | ci(sglang-downstream): add GLM-5-MXFP4 accuracy gate | @sunway513 | draft | 2026-06-03 | 2026-08-02 |
| [#3494](https://github.com/ROCm/aiter/pull/3494) | Amemoore/gfx950 moe triton integration | @amirumoAMD | draft | 2026-06-02 | 2026-08-02 |
| [#3493](https://github.com/ROCm/aiter/pull/3493) | Add MiniMax-M2.7 MI325X (gfx942) tuned configs + fix fmoe tu... | @jiejingzhangamd | open | 2026-06-02 | 2026-08-02 |
| [#3477](https://github.com/ROCm/aiter/pull/3477) | [Tuning] Opt-in post-tune verification + pick-stability leve... | @yzhou103 | draft | 2026-06-02 | 2026-08-02 |
| [#3472](https://github.com/ROCm/aiter/pull/3472) | Add GQA<=8 blk32 mtp=0 per token asm kernel for pa | @JohnNikolay84 | open | 2026-06-01 | 2026-08-02 |
| [#3468](https://github.com/ROCm/aiter/pull/3468) | Add MLA reduce fast path | @ftyghome | open | 2026-06-01 | 2026-08-02 |
| [#3446](https://github.com/ROCm/aiter/pull/3446) | revert back the copilot extra operation in pr 3338 ci: remov... | @shengnxu | open | 2026-06-01 | 2026-08-02 |
| [#3439](https://github.com/ROCm/aiter/pull/3439) | sglang downstream: run 8-GPU tests on the DO MI350X runner l... | @okakarpa | open | 2026-05-30 | 2026-08-02 |
| [#3430](https://github.com/ROCm/aiter/pull/3430) | Add native integer all-gather dtype support and optimize gfx... | @hubertlu-tw | open | 2026-05-29 | 2026-08-02 |
| [#3418](https://github.com/ROCm/aiter/pull/3418) | Add PER_TOKEN_HEAD FP8 quantization and P-scale for mha_batc... | @msaffari-amd | open | 2026-05-29 | 2026-08-02 |
| [#3409](https://github.com/ROCm/aiter/pull/3409) | mla | @feifei14119 | draft | 2026-05-29 | 2026-08-02 |
| [#3379](https://github.com/ROCm/aiter/pull/3379) | Gate opus fp8 code for gfx1100 | @Calandracas606 | open | 2026-05-28 | 2026-08-02 |
| [#3355](https://github.com/ROCm/aiter/pull/3355) | [gluon gemm_afp4wfp4] Fix data access pattern to remove redu... | @Arech8 | open | 2026-05-26 | 2026-08-02 |
| [#3321](https://github.com/ROCm/aiter/pull/3321) | [FlyDSL AOT] Skip kernels for unrequested arches when GPU_AR... | @eppaneamd | open | 2026-05-24 | 2026-08-02 |
| [#3308](https://github.com/ROCm/aiter/pull/3308) | Replace fmha with a new kernel | @JohnNikolay84 | draft | 2026-05-22 | 2026-08-02 |
| [#3286](https://github.com/ROCm/aiter/pull/3286) | [Triton] [ATOM] DSV4 mxfp8 GEMM | @k50112113 | draft | 2026-05-20 | 2026-08-02 |
| [#3262](https://github.com/ROCm/aiter/pull/3262) | Unified Attention Sparse MLA FP8 | @anhminhnguyenhoang | draft | 2026-05-19 | 2026-08-02 |
| [#3248](https://github.com/ROCm/aiter/pull/3248) | add mla qseqlen4 causal mask related changes | @antsaukk | draft | 2026-05-18 | 2026-08-02 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-08-02 |
| [#3169](https://github.com/ROCm/aiter/pull/3169) |  MTP + kv cache fp8 + shuffled KV layout support | @waqahmed-amd-fi | draft | 2026-05-13 | 2026-08-02 |
| [#4158](https://github.com/ROCm/aiter/pull/4158) | Remove deprecated offset arg from tdm.async_gather calls on ... | @Liang-jianhao97 | open | 2026-07-09 | 2026-08-02 |
| [#4021](https://github.com/ROCm/aiter/pull/4021) | [2-stages MOE][gfx950/gfx942] Support NVFP4-BF16 mixed-preci... | @fxmarty-amd | open | 2026-06-30 | 2026-08-04 |
| [#4011](https://github.com/ROCm/aiter/pull/4011) | perf: add fixed-tile HGEMM candidate | @ftyghome | open | 2026-06-30 | 2026-08-02 |
| [#4000](https://github.com/ROCm/aiter/pull/4000) | fix: optimize MXFP4 a4w4 MoE dispatch for MiniMax-M2.1-MXFP4 | @thpereir | open | 2026-06-29 | 2026-08-02 |
| [#3993](https://github.com/ROCm/aiter/pull/3993) | mla_decode_fwd: wire is_causal through Python and C++ dispat... | @alexioslyrakis-amd | open | 2026-06-29 | 2026-08-02 |
| [#3987](https://github.com/ROCm/aiter/pull/3987) | [FlyDSL] Add FlyDSL FP8 MoE kernels (decode weight-decompres... | @luocheng25 | open | 2026-06-29 | 2026-08-02 |
| [#3979](https://github.com/ROCm/aiter/pull/3979) | [op_tests] add whole-block GPT-OSS attention test | @carlushuang | open | 2026-06-29 | 2026-08-02 |
| [#3976](https://github.com/ROCm/aiter/pull/3976) | [FlyDSL] Implement flash attention backward kernel | @waqahmed-amd-fi | draft | 2026-06-28 | 2026-08-02 |
| [#3973](https://github.com/ROCm/aiter/pull/3973) | [CK] Fix MoE 2-stage dispatch for non-128-divisible inter_di... | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
| [#3972](https://github.com/ROCm/aiter/pull/3972) |  Add gelu_tanh activation to no-quant CK 2-stage fused MoE | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
| [#3941](https://github.com/ROCm/aiter/pull/3941) | Feat/flydsl mxfp4 gemm | @lizamd | open | 2026-06-26 | 2026-08-02 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-08-02 |
| [#3926](https://github.com/ROCm/aiter/pull/3926) | Feat/gfx942 flydsl mxfp4 moe | @msaffari-amd | draft | 2026-06-25 | 2026-08-02 |
| [#3907](https://github.com/ROCm/aiter/pull/3907) | [FlyDSL] [gfx1250] gather moe support | @XingerZhu | open | 2026-06-24 | 2026-08-02 |
| [#3897](https://github.com/ROCm/aiter/pull/3897) | [gfx1250][FLYDSL]moe gemm tune | @Zzz9990 | draft | 2026-06-24 | 2026-08-02 |
| [#3896](https://github.com/ROCm/aiter/pull/3896) | Fix HIP fp8 paged-attention kPerHead scale OOB page fault. | @JohnNikolay84 | open | 2026-06-24 | 2026-08-02 |
| [#3876](https://github.com/ROCm/aiter/pull/3876) | [Feature][HIP] Support fused shared expert topk append | @yuychang | open | 2026-06-23 | 2026-08-02 |
| [#3870](https://github.com/ROCm/aiter/pull/3870) | feat(mha): add FlyDSL BSHD batch-mode dispatch for gfx1250 | @jli-melchior | open | 2026-06-23 | 2026-08-02 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-08-02 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-08-02 |
| [#3835](https://github.com/ROCm/aiter/pull/3835) | Dev/dsv4 a4w4 tuned | @Bernard-Liu | open | 2026-06-22 | 2026-08-02 |
| [#3817](https://github.com/ROCm/aiter/pull/3817) | perf: optimize fused AllReduce + RMSNorm (custom_all_reduce) | @ftyghome | open | 2026-06-20 | 2026-08-02 |
| [#3809](https://github.com/ROCm/aiter/pull/3809) | Qwen3.5-397B-A17B MXFP4: add tuned flydsl fused-MoE config (... | @jiangyon-amd | open | 2026-06-19 | 2026-08-02 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [feature] Extract C++ code to jinja template files | @jbelloncastro | open | 2026-06-18 | 2026-08-02 |
| [#3787](https://github.com/ROCm/aiter/pull/3787) | [FlyDSL] Port compress_attn kernels to gfx1250 (wave32) | @jli-melchior | open | 2026-06-18 | 2026-08-02 |
| [#3785](https://github.com/ROCm/aiter/pull/3785) | [fea] Add fp32 RMSNorm output for fused qk group quant | @wuhuikx | open | 2026-06-18 | 2026-08-02 |
| [#3774](https://github.com/ROCm/aiter/pull/3774) | [gfx1250][FlyDSL]opt conc1 moe. | @lalala-sh | open | 2026-06-17 | 2026-08-02 |
| [#3771](https://github.com/ROCm/aiter/pull/3771) | fix: disable EP topk-1 strip | @JiaoliangYu | draft | 2026-06-17 | 2026-08-02 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-08-02 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-08-02 |
| [#3721](https://github.com/ROCm/aiter/pull/3721) | [FLYDSL] Rebase flydsl hgemm kernels with mixed policies | @xytpai | open | 2026-06-15 | 2026-08-02 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-08-02 |
| [#3685](https://github.com/ROCm/aiter/pull/3685) | Moe a8w4 multicast | @Boss2002n | draft | 2026-06-11 | 2026-08-02 |
| [#3662](https://github.com/ROCm/aiter/pull/3662) | [config] add tuned files for minimax-m2.5 PTPC fp8 model | @gbyu-amd | open | 2026-06-10 | 2026-08-02 |
| [#3653](https://github.com/ROCm/aiter/pull/3653) | [Perf] Add Qwen3-32B-FP8 tuned configs for MI308X | @ningding01 | open | 2026-06-10 | 2026-08-02 |
| [#3645](https://github.com/ROCm/aiter/pull/3645) | Add env overrides for unified attention tuning | @akii96 | draft | 2026-06-10 | 2026-08-02 |
| [#4273](https://github.com/ROCm/aiter/pull/4273) | [FlyDSL] Add a strided-batched variant (BMM) of the A8W8 blo... | @xiangM99 | open | 2026-07-17 | 2026-08-02 |
| [#4268](https://github.com/ROCm/aiter/pull/4268) | [Triton] Add fused AdaLN-Zero (layernorm + scale/shift) kern... | @sushildubey171 | open | 2026-07-16 | 2026-08-02 |
| [#4240](https://github.com/ROCm/aiter/pull/4240) | Make shuffle_scale_moe arch-agnostic  (Fix non-gfx950/gfx125... | @skysnow2001 | open | 2026-07-14 | 2026-08-02 |
| [#4232](https://github.com/ROCm/aiter/pull/4232) | [gfx942] Add native-fp8-MFMA Gluon fp8_mqa_logits kernel | @haosdent | open | 2026-07-14 | 2026-08-02 |
| [#4228](https://github.com/ROCm/aiter/pull/4228) | [Perf][gfx1250]update tuned flydsl moe | @lalala-sh | open | 2026-07-14 | 2026-08-02 |
| [#4222](https://github.com/ROCm/aiter/pull/4222) | a16w16 gemm tuned dsv4 pro shapes | @ahmed-bsod | open | 2026-07-13 | 2026-08-02 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-08-02 |
| [#4214](https://github.com/ROCm/aiter/pull/4214) | fix gfx12 ENABLE_Ck0 cmp err | @feifei14119 | open | 2026-07-13 | 2026-08-02 |
| [#4213](https://github.com/ROCm/aiter/pull/4213) | fea: support add fused allreduce | @TennyWang1223 | open | 2026-07-13 | 2026-08-02 |
| [#4211](https://github.com/ROCm/aiter/pull/4211) | CI: make `check-signal` neutral on pre-check failure and gat... | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-08-02 |
| [#4208](https://github.com/ROCm/aiter/pull/4208) | fix: apply Black formatting to FlyDSL BMM W8A8 GFX1250 files | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4207](https://github.com/ROCm/aiter/pull/4207) | op_tests: IFOE cross-node custom all-reduce (module_custom_a... | @carlushuang | open | 2026-07-12 | 2026-08-02 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-08-02 |
| [#4191](https://github.com/ROCm/aiter/pull/4191) | Omuhamma/tune a8w8 | @omuhamma | draft | 2026-07-10 | 2026-08-02 |
| [#4181](https://github.com/ROCm/aiter/pull/4181) | Fix ragged-K mask in batched A16WFP4 GEMM | @mjkvaak-amd | open | 2026-07-10 | 2026-08-02 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-08-02 |
| [#4165](https://github.com/ROCm/aiter/pull/4165) | [gfx1250] [flydsl] moe ep | @XingerZhu | open | 2026-07-09 | 2026-08-02 |
| [#4141](https://github.com/ROCm/aiter/pull/4141) | gemma4w4 split-k bug | @amirumoAMD | draft | 2026-07-08 | 2026-08-02 |
| [#4140](https://github.com/ROCm/aiter/pull/4140) | [TRITON] Tuned GFX1201 DSV4-Flash FP16 and FP8 GEMMs for ATO... | @skysnow2001 | open | 2026-07-08 | 2026-08-02 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-08-02 |
| [#4118](https://github.com/ROCm/aiter/pull/4118) | ATOM MXFP4 Scale Shuffle | @amirumoAMD | draft | 2026-07-07 | 2026-08-02 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | FlyDSL gemm_decode: small-M dense GEMM kernels (BF16/FP8/blo... | @vedenev-amd | open | 2026-07-07 | 2026-08-02 |
| [#4108](https://github.com/ROCm/aiter/pull/4108) | Fix A8W4 CDNA4 scale addressing for padded MoE shapes | @xiaohuguo2023 | open | 2026-07-06 | 2026-08-02 |
| [#4107](https://github.com/ROCm/aiter/pull/4107) | [opus] Refactor Opus MoE stage2 pipeline and generated TUs | @yifehuan | draft | 2026-07-06 | 2026-08-02 |
| [#4101](https://github.com/ROCm/aiter/pull/4101) | [DO NOT MERGE] Release test: triton release_tmp index + afp4... | @yuyzhang512 | open | 2026-07-06 | 2026-08-02 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-08-02 |
| [#4087](https://github.com/ROCm/aiter/pull/4087) | [gfx1250][Gluon] MoE1 + act + quant fusion for DSv4 | @azaidy | open | 2026-07-05 | 2026-08-02 |
| [#4086](https://github.com/ROCm/aiter/pull/4086) | Fix Gluon apis | @azaidy | open | 2026-07-05 | 2026-08-02 |
| [#4084](https://github.com/ROCm/aiter/pull/4084) | perf: eliminate end_sync in custom allreduce by delaying inp... | @jpy794 | open | 2026-07-05 | 2026-08-02 |
| [#4083](https://github.com/ROCm/aiter/pull/4083) | refine mla v4 co | @feifei14119 | open | 2026-07-05 | 2026-08-02 |
| [#4080](https://github.com/ROCm/aiter/pull/4080) | [OPUS] Absorb module_rmsnorm_quant into the opus rmsnorm mod... | @carlushuang | open | 2026-07-04 | 2026-08-02 |
| [#4065](https://github.com/ROCm/aiter/pull/4065) | feat(attention): head-dim-tiled Triton flash attention for V... | @carlushuang | open | 2026-07-02 | 2026-08-02 |
| [#4062](https://github.com/ROCm/aiter/pull/4062) | docs(python): condense verbose comments (comments-only, no c... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4061](https://github.com/ROCm/aiter/pull/4061) | docs(csrc): condense verbose comments (comments-only, no cod... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4041](https://github.com/ROCm/aiter/pull/4041) | [fix](moe): fix the accuracy M=1 in qwen3.5 | @PerryZhang01 | open | 2026-07-01 | 2026-08-02 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-08-02 |
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
| [#4370](https://github.com/ROCm/aiter/pull/4370) | [MI355] add 128x128 block-scales fp8 8wave moe/gemm kernels ... | @tingqli | draft | 2026-07-24 | 2026-08-02 |
| [#4359](https://github.com/ROCm/aiter/pull/4359) | Swap the cache config for the default cases of gfx1250-GEMM-... | @jpvillam-amd | open | 2026-07-23 | 2026-08-02 |
| [#4357](https://github.com/ROCm/aiter/pull/4357) | Chefang mha global load | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4351](https://github.com/ROCm/aiter/pull/4351) | fix(mla): refresh gfx950 MLA HSACO batch for large page_id | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4340](https://github.com/ROCm/aiter/pull/4340) | Add native Windows RDNA HIP and CK support | @Yasei-no-otoko | open | 2026-07-23 | 2026-08-02 |
| [#4334](https://github.com/ROCm/aiter/pull/4334) | perf(fp8_mqa_logits): runtime-autotune the gfx942 indexer ti... | @EricKing626 | open | 2026-07-22 | 2026-08-02 |
| [#4315](https://github.com/ROCm/aiter/pull/4315) | [Fix][FlyDSL] Handle remainder workgroups in MoE XCD swizzle | @Fangzhou-Ai | open | 2026-07-21 | 2026-08-02 |
| [#4306](https://github.com/ROCm/aiter/pull/4306) | Add basic HIP/CK JIT kernel support in Windows | @menglcai | open | 2026-07-20 | 2026-08-02 |
| [#4300](https://github.com/ROCm/aiter/pull/4300) | fmoe run_config: align per_1x32 fp4/fp8 dispatch with test_m... | @yzhou103 | open | 2026-07-20 | 2026-08-02 |
| [#4293](https://github.com/ROCm/aiter/pull/4293) | [Bugfix][Triton] Correct ragged paged-MQA causal masks | @morluto | open | 2026-07-19 | 2026-08-02 |
| [#4281](https://github.com/ROCm/aiter/pull/4281) | [opt][gfx1250] Add TDM deep-prefetch BF16 prefill for qk_nor... | @jli-melchior | open | 2026-07-17 | 2026-08-02 |
| [#4279](https://github.com/ROCm/aiter/pull/4279) | mhc bf16 compute optimize on gfx12xx | @junhaha666 | draft | 2026-07-17 | 2026-08-02 |
| [#4278](https://github.com/ROCm/aiter/pull/4278) | [gfx1250][perf][moe]Optimize prefill perf | @lalala-sh | open | 2026-07-17 | 2026-08-02 |
| [#4277](https://github.com/ROCm/aiter/pull/4277) | Dev/gugu fix | @yadaish | open | 2026-07-17 | 2026-08-02 |
| [#4275](https://github.com/ROCm/aiter/pull/4275) | Add MiniMax-M3 model in Aiter - ATOM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-02 |
| [#4484](https://github.com/ROCm/aiter/pull/4484) | Flash Attention Ck  CI smoke test | @micmelesse | draft | 2026-07-31 | 2026-08-02 |
| [#4466](https://github.com/ROCm/aiter/pull/4466) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-30 | 2026-08-02 |
| [#4461](https://github.com/ROCm/aiter/pull/4461) | wvSplitKQ: support per-token/per-channel scales | @mqhc2020 | draft | 2026-07-30 | 2026-08-02 |
| [#4448](https://github.com/ROCm/aiter/pull/4448) | Plumb split-K through the a8w8 blockscale bpreshuffle GEMM | @Raiden-Makoto | draft | 2026-07-29 | 2026-08-02 |
| [#4444](https://github.com/ROCm/aiter/pull/4444) | [Test] Add SDXL 1.0 conv2d shapes to conv_shapes.json | @Ragua1 | open | 2026-07-29 | 2026-08-02 |
| [#4443](https://github.com/ROCm/aiter/pull/4443) | perf: optimize MXFP4 MoE decode with fused sorting, quantiza... | @yuychang | open | 2026-07-29 | 2026-08-02 |
| [#4441](https://github.com/ROCm/aiter/pull/4441) | feat(flydsl): Add HSTU Forward kernel | @damien-lejeune | open | 2026-07-29 | 2026-08-02 |
| [#4432](https://github.com/ROCm/aiter/pull/4432) | fix: use residual.stride(1) for MHC HC-slice indexing | @steamedMantou | open | 2026-07-29 | 2026-08-02 |
| [#4424](https://github.com/ROCm/aiter/pull/4424) | Document and automate the AITER release plan | @gyohuangxin | draft | 2026-07-28 | 2026-08-02 |
| [#4405](https://github.com/ROCm/aiter/pull/4405) | perf(mla): expose split override for graph decode | @JohnQinAMD | open | 2026-07-28 | 2026-08-02 |
| [#4400](https://github.com/ROCm/aiter/pull/4400) | Mxfp4 fmoe emsort | @JohnNikolay84 | open | 2026-07-27 | 2026-08-02 |
| [#4389](https://github.com/ROCm/aiter/pull/4389) | Fix AITER JIT builds on gfx90a | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4401](https://github.com/ROCm/aiter/pull/4401) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-27 | 2026-07-30 |
| [#4286](https://github.com/ROCm/aiter/pull/4286) | [opt][gfx1250][ep] Add TDM deep-prefetch BF16 prefill for qk... | @jli-melchior | open | 2026-07-18 | 2026-07-21 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-07-13 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#3481](https://github.com/ROCm/aiter/pull/3481) | [gfx1151] flash_attn_triton_amd: enable in-thread transpose | @mgehre-amd | draft | 2026-06-02 | 2026-07-03 |
| [#2227](https://github.com/ROCm/aiter/pull/2227) | Add Triton fallback for fused_rope_rms (QKNorm+RoPE) | @sunway513 | open | 2026-03-09 | 2026-06-30 |
| [#2228](https://github.com/ROCm/aiter/pull/2228) | [TRITON] Moe a8w4 gluon gfx1250 | @lburzawa | open | 2026-03-09 | 2026-03-18 |
| [#1831](https://github.com/ROCm/aiter/pull/1831) | [Triton] Remove mod N in ptr offsets for preshuffle gemms | @k50112113 | open | 2026-01-13 | 2026-03-18 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-03-18 |
| [#1195](https://github.com/ROCm/aiter/pull/1195) | [Triton] A8W8 blockscale GEMM tuning for Qwen3 | @anhminhnguyenhoang | open | 2025-10-14 | 2026-03-18 |
| [#1031](https://github.com/ROCm/aiter/pull/1031) | [TRITON] Fix GEMM a16w16 and a8w8 splitK Triton | @lucas-santos-amd | open | 2025-09-18 | 2026-03-18 |
| [#985](https://github.com/ROCm/aiter/pull/985) | [TRITON]: Optimize FF Fused Kernels | @willzhou-amd | open | 2025-09-10 | 2026-03-18 |
| [#2306](https://github.com/ROCm/aiter/pull/2306) | [TRITON] Gluon extend-attention kernel for gfx950 | @realvideogame2 | open | 2026-03-17 | 2026-03-18 |
| [#1980](https://github.com/ROCm/aiter/pull/1980) | [Triton]-Flashattn - sync the changes from tridao PR2217 | @tianwyan | open | 2026-02-05 | 2026-03-18 |
| [#1936](https://github.com/ROCm/aiter/pull/1936) | [FMHA] Add Architecture safety check for enable_gluon_pa_mqa... | @raikonenfnu | open | 2026-01-31 | 2026-03-18 |
| [#1888](https://github.com/ROCm/aiter/pull/1888) | [TRITON] support.conv3d.triton.kernel | @kxyk99 | open | 2026-01-22 | 2026-03-18 |
| [#1232](https://github.com/ROCm/aiter/pull/1232) | [TRITON] FP8 blockscale fix and finetuning for Deepseek on M... | @juuso-oskari | open | 2025-10-21 | 2025-11-24 |
| [#4767](https://github.com/ROCm/aiter/pull/4767) | [Qwen3.8 MXFP4][Tuning] Add MXFP4 fused-MoE configs for gfx9... | @nholmber | merged | 2026-08-14 | 2026-08-17 |
| [#4792](https://github.com/ROCm/aiter/pull/4792) | Revert "[GFX950] Relocate MLA Gluon kernel and unify decode ... | @Dewei-Wang-sh | merged | 2026-08-17 | 2026-08-17 |
| [#4790](https://github.com/ROCm/aiter/pull/4790) | CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-08-17 | 2026-08-17 |
| [#4436](https://github.com/ROCm/aiter/pull/4436) | [FlyDSL][LLVM] update flydsl version and Adapt flydsl kernel... | @jli-melchior | merged | 2026-07-29 | 2026-08-17 |
| [#4750](https://github.com/ROCm/aiter/pull/4750) | ci: centralize PyTorch test image config | @gyohuangxin | merged | 2026-08-14 | 2026-08-17 |
| [#4756](https://github.com/ROCm/aiter/pull/4756) | [detorch] remove vestigial py_itfs_common.h includes (non-CK... | @amd-ruitang3 | merged | 2026-08-14 | 2026-08-17 |
| [#4753](https://github.com/ROCm/aiter/pull/4753) | fix: LL proto ar dispatch | @TennyWang1223 | merged | 2026-08-14 | 2026-08-17 |
| [#4760](https://github.com/ROCm/aiter/pull/4760) | [gfx1250][FlyDSL] Update a8w8 gemm tuned config | @aoli26 | merged | 2026-08-14 | 2026-08-17 |
| [#4774](https://github.com/ROCm/aiter/pull/4774) | Fix 32-bit KV block offsets in gluon paged-MQA logits kernel... | @zzw09773 | merged | 2026-08-15 | 2026-08-16 |
| [#4777](https://github.com/ROCm/aiter/pull/4777) | fix(opus_gemm): use __align__ instead of alignas after __sha... | @demonsan | merged | 2026-08-15 | 2026-08-15 |
| [#4450](https://github.com/ROCm/aiter/pull/4450) | [GFX950] Relocate MLA Gluon kernel and unify decode dispatch | @LiuYinfeng01 | merged | 2026-07-30 | 2026-08-15 |
| [#4706](https://github.com/ROCm/aiter/pull/4706) | MLA PS mode add 16mx8_32nx1_fp8fp8 opus kernel, performance ... | @minmengdie | merged | 2026-08-12 | 2026-08-15 |
| [#4764](https://github.com/ROCm/aiter/pull/4764) | [dtype] Map FP8 to torch.float8_e4m3fn on RDNA3 | @skysnow2001 | merged | 2026-08-14 | 2026-08-15 |
| [#4562](https://github.com/ROCm/aiter/pull/4562) | [GFX1250] [Gluon] Add multicast support for MoE a8w4 | @nsusanto | merged | 2026-08-04 | 2026-08-15 |
| [#4688](https://github.com/ROCm/aiter/pull/4688) | [triton][moe] Add sigmoid score_mode to the routing top-k | @lijinpei-amd | merged | 2026-08-11 | 2026-08-14 |
| [#4719](https://github.com/ROCm/aiter/pull/4719) | fused_qk_rope_reshape_and_cache kernel optimizations (gfx950... | @amirumoAMD | merged | 2026-08-12 | 2026-08-14 |
| [#4530](https://github.com/ROCm/aiter/pull/4530) | [Triton MOE routing] Fix `memory access fault` surfacing in ... | @fxmarty-amd | merged | 2026-08-03 | 2026-08-14 |
| [#4246](https://github.com/ROCm/aiter/pull/4246) | gfx1250 opus gemm splitk fuse | @demonsan | merged | 2026-07-15 | 2026-08-14 |
| [#4757](https://github.com/ROCm/aiter/pull/4757) | mega_moe: add a mori HIP dispatch backend | @jhchouuu | merged | 2026-08-14 | 2026-08-14 |
| [#4649](https://github.com/ROCm/aiter/pull/4649) | CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-08-10 | 2026-08-14 |
| [#4729](https://github.com/ROCm/aiter/pull/4729) | [module_mla_metadata*] refactor and remove torch | @amd-ruitang3 | merged | 2026-08-13 | 2026-08-14 |
| [#4724](https://github.com/ROCm/aiter/pull/4724) | [fused_qk_norm_rope_cache_quant] remove in-C++ scratch alloc... | @amd-ruitang3 | merged | 2026-08-13 | 2026-08-14 |
| [#4561](https://github.com/ROCm/aiter/pull/4561) | docs: fix ISA kernel optimization guide and example scripts | @mario-ant | merged | 2026-08-04 | 2026-08-14 |
| [#4744](https://github.com/ROCm/aiter/pull/4744) | ci: pin PyTorch test image to rocm/pytorch:rocm7.2.4_ubuntu2... | @gyohuangxin | merged | 2026-08-14 | 2026-08-14 |
| [#4598](https://github.com/ROCm/aiter/pull/4598) | [Perf][FlyDSL] Add gdn_prepare: a fused intra-chunk GDN pref... | @yiijin | merged | 2026-08-06 | 2026-08-14 |
| [#4727](https://github.com/ROCm/aiter/pull/4727) | [MLA] Support 48-head 128-dim reduction | @LiuYinfeng01 | merged | 2026-08-13 | 2026-08-14 |
| [#4746](https://github.com/ROCm/aiter/pull/4746) | feat: add param for combine quant | @JiaoliangYu | merged | 2026-08-14 | 2026-08-14 |
| [#4418](https://github.com/ROCm/aiter/pull/4418) | CI: add always-run Aiter test gate | @gyohuangxin | merged | 2026-07-28 | 2026-08-14 |
| [#4473](https://github.com/ROCm/aiter/pull/4473) | Add Opus hd192 hybrid buffer path for large KV (>4GiB). | @fangche123 | merged | 2026-07-31 | 2026-08-14 |
| [#4723](https://github.com/ROCm/aiter/pull/4723) | [opus_moe] Unify A8W4 Stage2 with a runtime-K decode pipelin... | @yifehuan | merged | 2026-08-13 | 2026-08-14 |
| [#4673](https://github.com/ROCm/aiter/pull/4673) | [triton] fix sparse decode gathering zeros from a strided ca... | @jiacao-amd | merged | 2026-08-11 | 2026-08-13 |
| [#4720](https://github.com/ROCm/aiter/pull/4720) | [Triton] add a copilot review instructions and modify readme... | @Boss2002n | merged | 2026-08-12 | 2026-08-13 |
| [#4734](https://github.com/ROCm/aiter/pull/4734) | [CI] Skip Triton test suites on docs-only changes | @Boss2002n | merged | 2026-08-13 | 2026-08-13 |
| [#4683](https://github.com/ROCm/aiter/pull/4683) | [Triton] Optimize chunk_delta_attn performance. | @Liang-jianhao97 | merged | 2026-08-11 | 2026-08-13 |
| [#4717](https://github.com/ROCm/aiter/pull/4717) | Avoid duplicate fp32 output alloc in torch_moe_stage2 refere... | @johannes-graner | merged | 2026-08-12 | 2026-08-13 |
| [#4722](https://github.com/ROCm/aiter/pull/4722) | CI: publish per-case vLLM DI accuracy and enable Kimi | @JiaoliangYu | merged | 2026-08-13 | 2026-08-13 |
| [#4728](https://github.com/ROCm/aiter/pull/4728) | Restore default GitHub Pages docs deployment | @gyohuangxin | merged | 2026-08-13 | 2026-08-13 |
| [#4366](https://github.com/ROCm/aiter/pull/4366) | feat: support fp32 chunk states in GDN prefill | @junna2016 | merged | 2026-07-24 | 2026-08-13 |
| [#4714](https://github.com/ROCm/aiter/pull/4714) | [MI355] add  8wave pipeline to a8w8 bpreshuffle gemm | @solinzby1 | merged | 2026-08-12 | 2026-08-13 |
| [#4721](https://github.com/ROCm/aiter/pull/4721) | CI: restore Triton split history for defaulted files | @gyohuangxin | merged | 2026-08-13 | 2026-08-13 |
| [#4725](https://github.com/ROCm/aiter/pull/4725) | [fix] add missing <optional> header in topk_plain_kernels.cu | @amd-ruitang3 | merged | 2026-08-13 | 2026-08-13 |
| [#4702](https://github.com/ROCm/aiter/pull/4702) | [module_topk_*] de-torch topk_per_row / topk_plain + externa... | @amd-ruitang3 | merged | 2026-08-12 | 2026-08-13 |
| [#4494](https://github.com/ROCm/aiter/pull/4494) | Fix ASM split-K semaphore deadlock under CUDA graph capture | @JohnQinAMD | merged | 2026-07-31 | 2026-08-13 |
| [#4646](https://github.com/ROCm/aiter/pull/4646) | FlyDSL: port a16wi4 to new pipeline, clean old moe_gemm_2sta... | @coderfeli | merged | 2026-08-09 | 2026-08-13 |
| [#4594](https://github.com/ROCm/aiter/pull/4594) | Clean rocprim/hipcub in hip kernels | @junhaha666 | merged | 2026-08-06 | 2026-08-13 |
| [#4621](https://github.com/ROCm/aiter/pull/4621) | fix: car graph mode err when pytorch set expandable_segments... | @TennyWang1223 | merged | 2026-08-07 | 2026-08-13 |
| [#4711](https://github.com/ROCm/aiter/pull/4711) | Fix NaN in MLA Gluon MTP decode by zeroing fully causal-mask... | @yanxuer-999 | merged | 2026-08-12 | 2026-08-13 |
| [#4710](https://github.com/ROCm/aiter/pull/4710) | [MLA] Support 24-head 512-dim reduction | @LiuYinfeng01 | merged | 2026-08-12 | 2026-08-13 |
| [#4693](https://github.com/ROCm/aiter/pull/4693) | [TRITON] add m<32 support for gfx1250 mxfp4 | @Boss2002n | merged | 2026-08-11 | 2026-08-12 |
| [#4470](https://github.com/ROCm/aiter/pull/4470) | [GLUON] Add more fine grained tuning based on M | @lburzawa | merged | 2026-07-30 | 2026-08-12 |
| [#2513](https://github.com/ROCm/aiter/pull/2513) | [TRITON] [GLUON] GFX1250 Gluon MoE A4W4 Kernel | @farlukas | merged | 2026-03-27 | 2026-08-12 |
| [#4705](https://github.com/ROCm/aiter/pull/4705) | Restore RNG seed in test_fused_rms_quant (fix flaky mxfp4 qu... | @johannes-graner | merged | 2026-08-12 | 2026-08-12 |
| [#4709](https://github.com/ROCm/aiter/pull/4709) | Revert "Fix ASM split-K semaphore deadlock under CUDA graph ... | @amd-ruitang3 | merged | 2026-08-12 | 2026-08-12 |
| [#4320](https://github.com/ROCm/aiter/pull/4320) | Add opus fp8 mxscale BMM kernels for gfx950 | @yzhou103 | merged | 2026-07-21 | 2026-08-12 |
| [#4694](https://github.com/ROCm/aiter/pull/4694) | [feat] Reuse GDN prefill metadata | @IzacharyI | merged | 2026-08-11 | 2026-08-12 |
| [#3596](https://github.com/ROCm/aiter/pull/3596) | CI: add FFM Triton test workflow | @gyohuangxin | merged | 2026-06-08 | 2026-08-12 |
| [#4670](https://github.com/ROCm/aiter/pull/4670) | [FlyDSL] Use native FP4 conversion in MoE stage1 | @XiaobingSuper | merged | 2026-08-11 | 2026-08-12 |
| [#4555](https://github.com/ROCm/aiter/pull/4555) | stage2 logits block load | @yanxuer-999 | merged | 2026-08-04 | 2026-08-12 |
| [#4572](https://github.com/ROCm/aiter/pull/4572) | [triton] add attn_res kernel for K3 | @yanxuer-999 | merged | 2026-08-05 | 2026-08-12 |
| [#4619](https://github.com/ROCm/aiter/pull/4619) | CI: run vLLM disagg from upstream main | @JiaoliangYu | merged | 2026-08-07 | 2026-08-12 |
| [#4545](https://github.com/ROCm/aiter/pull/4545) | Fix Triton cache flooding in `_fwd_kernel_stage2_asm` (batch... | @amd-mvarjoka | merged | 2026-08-04 | 2026-08-12 |
| [#4642](https://github.com/ROCm/aiter/pull/4642) | [FlyDSL]Optimize MoE mxfp4 stage2 for gfx950 | @binding7012 | merged | 2026-08-09 | 2026-08-12 |
| [#4700](https://github.com/ROCm/aiter/pull/4700) | Revert "Add CODEOWNERS for aiter/ops/triton" | @zufayu | merged | 2026-08-12 | 2026-08-12 |
| [#4682](https://github.com/ROCm/aiter/pull/4682) | Fix causal fmha f8 hd256 kernel, return missing diagonal pai... | @JohnNikolay84 | merged | 2026-08-11 | 2026-08-12 |
| [#4674](https://github.com/ROCm/aiter/pull/4674) | gemm_a8w8_blockscale_bpreshuffle: add optional inplace out= ... | @ZhangLirong-amd | merged | 2026-08-11 | 2026-08-12 |
| [#4678](https://github.com/ROCm/aiter/pull/4678) | Add CODEOWNERS for aiter/ops/triton | @Dewei-Wang-sh | merged | 2026-08-11 | 2026-08-12 |
| [#4671](https://github.com/ROCm/aiter/pull/4671) | [Triton] Fix LDS OOM issue on MI300 | @Liang-jianhao97 | merged | 2026-08-11 | 2026-08-12 |
| [#4684](https://github.com/ROCm/aiter/pull/4684) | [CI] bump dawidd6/action-download-artifact to v21 | @micmelesse | merged | 2026-08-11 | 2026-08-11 |
| [#4578](https://github.com/ROCm/aiter/pull/4578) | swap gfx950 kernel to hold 64bit memory addr | @liyjiang | merged | 2026-08-05 | 2026-08-11 |
| [#4657](https://github.com/ROCm/aiter/pull/4657) | Add lse to fmha asm kernels | @JohnNikolay84 | merged | 2026-08-10 | 2026-08-11 |
| [#4170](https://github.com/ROCm/aiter/pull/4170) | moe a8w4: GUGU act+quant fusion  | @Boss2002n | merged | 2026-07-10 | 2026-08-11 |
| [#4675](https://github.com/ROCm/aiter/pull/4675) | [fix][fmoe] propagate flat_mode through fmoe_g1u1 dispatch | @alexioslyrakis-amd | merged | 2026-08-11 | 2026-08-11 |
| [#4639](https://github.com/ROCm/aiter/pull/4639) | [Bugfix] Fix two build failures: hipify qualifier loss and s... | @echen4096 | merged | 2026-08-08 | 2026-08-11 |
| [#4680](https://github.com/ROCm/aiter/pull/4680) | fix(v4): stop turning row and block numbers into 32-bit addr... | @valarLip | merged | 2026-08-11 | 2026-08-11 |
| [#4415](https://github.com/ROCm/aiter/pull/4415) | feat(topk): length-adaptive deterministic top-k for sparse-M... | @chuanbowang2026 | merged | 2026-07-28 | 2026-08-11 |
| [#4491](https://github.com/ROCm/aiter/pull/4491) | [HIP] Add gfx950 packed BF16 GDR decode kernel | @zijiecode | merged | 2026-07-31 | 2026-08-11 |
| [#4353](https://github.com/ROCm/aiter/pull/4353) | [FLYDSL] mfma16_hip GDR K5 prefill chunk_gdn_fwd_h for MI308 | @huizzhan | merged | 2026-07-23 | 2026-08-11 |
| [#4666](https://github.com/ROCm/aiter/pull/4666) | configs: add DSv4 FP8/FP4 E=385/topk7 inter_dim=384 fused-Mo... | @karverma-amd | merged | 2026-08-10 | 2026-08-11 |
| [#4523](https://github.com/ROCm/aiter/pull/4523) | [feat][HIP]: enable chunk-gated-delta-rule-fwd-h on gfx1201. | @stevenshenyj | merged | 2026-08-03 | 2026-08-11 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-08-17T08:29:10Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1858](https://github.com/ROCm/ATOM/pull/1858) | [ATOM][KVCache] Skip kvcache tensor allocation for shared in... | @MengqingCao | open | 2026-08-11 | 2026-08-17 |
| [#1882](https://github.com/ROCm/ATOM/pull/1882) | Enhance GLM-5.2 with DP attention, prefix cache optimization... | @Jasen2201 | open | 2026-08-13 | 2026-08-17 |
| [#1880](https://github.com/ROCm/ATOM/pull/1880) | feat(lmcache): add DSV4 page and slot offload | @yhl-amd | open | 2026-08-13 | 2026-08-17 |
| [#1917](https://github.com/ROCm/ATOM/pull/1917) | Feat/shared expert mori fuse | @JiaoliangYu | open | 2026-08-17 | 2026-08-17 |
| [#1852](https://github.com/ROCm/ATOM/pull/1852) | Attention FFN Piecewise cudagraph support for optimize DSpar... | @ZhangLirong-amd | open | 2026-08-10 | 2026-08-17 |
| [#1920](https://github.com/ROCm/ATOM/pull/1920) | Skip duplicate heavy CI runs for same PR SHA | @gyohuangxin | open | 2026-08-17 | 2026-08-17 |
| [#1921](https://github.com/ROCm/ATOM/pull/1921) | fix(mooncake): register decode buffers on reachable RDMA rai... | @junyyang-amd | open | 2026-08-17 | 2026-08-17 |
| [#1795](https://github.com/ROCm/ATOM/pull/1795) | Feat/v4 wo a mxscale bmm | @yzhou103 | open | 2026-08-05 | 2026-08-17 |
| [#1916](https://github.com/ROCm/ATOM/pull/1916) | [fix](k3): remove AITER_DISABLE_FMHA_OPUS envs for k3 | @PerryZhang01 | open | 2026-08-17 | 2026-08-17 |
| [#1891](https://github.com/ROCm/ATOM/pull/1891) | [ATOM SGL] fix ci error | @ZhiweiYan-96 | open | 2026-08-13 | 2026-08-17 |
| [#1919](https://github.com/ROCm/ATOM/pull/1919) | [Kimi-K3] Integrate aiter fused KDA decode kernel | @mengfei-jiang | open | 2026-08-17 | 2026-08-17 |
| [#1899](https://github.com/ROCm/ATOM/pull/1899) | Kimi-K3 DSpark speculative decoding for the ATOM vLLM plugin | @whx-sjtu | open | 2026-08-14 | 2026-08-17 |
| [#1893](https://github.com/ROCm/ATOM/pull/1893) | [Kimi-K3] Route KDA prefill through the FlyDSL AITER kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-17 |
| [#1881](https://github.com/ROCm/ATOM/pull/1881) | Atom plugin dflash enable | @zovonoir | open | 2026-08-13 | 2026-08-17 |
| [#1910](https://github.com/ROCm/ATOM/pull/1910) | feat(k3): Kimi-K3 vLLM plugin vision + DSpark draft support | @sajandhy | draft | 2026-08-16 | 2026-08-17 |
| [#1840](https://github.com/ROCm/ATOM/pull/1840) | [sgl+atom] Upgrade SGLang to v0.5.17 | @zhangxinyuanliuhengyu | open | 2026-08-10 | 2026-08-17 |
| [#1913](https://github.com/ROCm/ATOM/pull/1913) | [feat] enable k3 vision part in vllm plugin | @gbyu-amd | open | 2026-08-16 | 2026-08-17 |
| [#1843](https://github.com/ROCm/ATOM/pull/1843) | [ATOM SGL][feat] K3 dspark | @ZhiweiYan-96 | draft | 2026-08-10 | 2026-08-17 |
| [#1911](https://github.com/ROCm/ATOM/pull/1911) | perf(mla): let the KV-split budget scale past 16 on the pers... | @zejunchen-zejun | open | 2026-08-16 | 2026-08-17 |
| [#1867](https://github.com/ROCm/ATOM/pull/1867) | add new torch base docker | @zhuyuhua-v | draft | 2026-08-12 | 2026-08-17 |
| [#1883](https://github.com/ROCm/ATOM/pull/1883) | [feat] Enable ssm replay for gdn attention & kda. | @HaonanWang98 | open | 2026-08-13 | 2026-08-17 |
| [#1901](https://github.com/ROCm/ATOM/pull/1901) | [ATOM-vLLM] Add support for Qwen3.8 | @kliuae | open | 2026-08-14 | 2026-08-17 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | draft | 2026-08-13 | 2026-08-16 |
| [#1909](https://github.com/ROCm/ATOM/pull/1909) | Yuechguo/mesh entrypoints | @Yuechguo | draft | 2026-08-16 | 2026-08-16 |
| [#1908](https://github.com/ROCm/ATOM/pull/1908) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-08-15 | 2026-08-15 |
| [#1903](https://github.com/ROCm/ATOM/pull/1903) | [Gluon] [GFX12] add gluon mxfp8 gemm support | @k50112113 | draft | 2026-08-15 | 2026-08-15 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-15 |
| [#1887](https://github.com/ROCm/ATOM/pull/1887) | State cache opt replayssm | @gbyu-amd | draft | 2026-08-13 | 2026-08-14 |
| [#1879](https://github.com/ROCm/ATOM/pull/1879) | add additional statecache strategy | @ganyi1996ppo | open | 2026-08-13 | 2026-08-14 |
| [#1888](https://github.com/ROCm/ATOM/pull/1888) | [fix](vllm): remove vllm patch | @PerryZhang01 | open | 2026-08-13 | 2026-08-14 |
| [#1892](https://github.com/ROCm/ATOM/pull/1892) | [Feat] Allow passing token ids to /v1/completions  | @simondanielsson | draft | 2026-08-13 | 2026-08-13 |
| [#1889](https://github.com/ROCm/ATOM/pull/1889) | [kernel opt] add flydsl attention for m3 | @ZLkanyo009 | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1743](https://github.com/ROCm/ATOM/pull/1743) | mtp support blocksize other than 1 | @HaonanWang98 | open | 2026-07-30 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1872](https://github.com/ROCm/ATOM/pull/1872) | [ATOM SGL] change ci scope for 0.5.17 | @ZhiweiYan-96 | open | 2026-08-12 | 2026-08-13 |
| [#1873](https://github.com/ROCm/ATOM/pull/1873) | Expose Prometheus metrics for KV-aware routing and modernize... | @Jasen2201 | open | 2026-08-12 | 2026-08-13 |
| [#1836](https://github.com/ROCm/ATOM/pull/1836) | [atom] Add diffusion subsystem and MiniMax-H3 video+audio ge... | @carlushuang | open | 2026-08-08 | 2026-08-12 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1798](https://github.com/ROCm/ATOM/pull/1798) | [SGL+ATOM]fix[plugin]: guard GLM flat fmoe on MI308 | @zhangxinyuanliuhengyu | open | 2026-08-05 | 2026-08-12 |
| [#1749](https://github.com/ROCm/ATOM/pull/1749) | [Feature] Quantize weights online when loading weights | @haoyangli0109 | open | 2026-07-30 | 2026-08-12 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-08-11 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#1835](https://github.com/ROCm/ATOM/pull/1835) | fix(scheduler): unblock decode behind a long chunked prefill | @hippothewild | open | 2026-08-07 | 2026-08-10 |
| [#1759](https://github.com/ROCm/ATOM/pull/1759) | support mamba prefix cache | @ganyi1996ppo | open | 2026-07-31 | 2026-08-10 |
| [#1690](https://github.com/ROCm/ATOM/pull/1690) | [draft] support ATOM plugin for qwen3.5 DPxTPx/DPxEPx | @zovonoir | open | 2026-07-24 | 2026-08-10 |
| [#1794](https://github.com/ROCm/ATOM/pull/1794) | [feat](vllm): upgrade vllm to 0.26.1 | @zejunchen-zejun | draft | 2026-08-05 | 2026-08-10 |
| [#1779](https://github.com/ROCm/ATOM/pull/1779) | sparsekv cache glm52 agentic task optimization  | @Jasen2201 | draft | 2026-08-04 | 2026-08-10 |
| [#1833](https://github.com/ROCm/ATOM/pull/1833) | [gfx1250] Route wo_a grouped LoRA through the flydsl a8w4 ba... | @XingerZhu | open | 2026-08-07 | 2026-08-10 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#1818](https://github.com/ROCm/ATOM/pull/1818) | Ganyi/do opt prefill kda | @ganyi1996ppo | open | 2026-08-06 | 2026-08-07 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-08-06 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-30 | 2026-08-06 |
| [#1719](https://github.com/ROCm/ATOM/pull/1719) | [Kimi-K3] MI455 support Kimi-K3 | @zejunchen-zejun | open | 2026-07-28 | 2026-08-06 |
| [#1780](https://github.com/ROCm/ATOM/pull/1780) | random IMA fix | @gbyu-amd | open | 2026-08-04 | 2026-08-06 |
| [#1755](https://github.com/ROCm/ATOM/pull/1755) | Add fake eplb for performance test | @junhaha666 | open | 2026-07-31 | 2026-08-05 |
| [#1773](https://github.com/ROCm/ATOM/pull/1773) | [Kimi-K3] Enable align-mode mamba prefix caching (vLLM-ATOM) | @gbyu-amd | open | 2026-08-03 | 2026-08-04 |
| [#1770](https://github.com/ROCm/ATOM/pull/1770) | Add Periodic Engine Status Log (Server Mode) | @yitingw1 | open | 2026-08-03 | 2026-08-03 |
| [#1747](https://github.com/ROCm/ATOM/pull/1747) | feat: support GLM-5.2 tool call parser | @Phi-C | open | 2026-07-30 | 2026-07-31 |
| [#1751](https://github.com/ROCm/ATOM/pull/1751) | fix: forward extra args in patched_inline_call for torch _dy... | @thpereir | open | 2026-07-30 | 2026-07-31 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1723](https://github.com/ROCm/ATOM/pull/1723) | test: add block-level DeepSeek-V4 attention test (real Deeps... | @carlushuang | open | 2026-07-29 | 2026-07-30 |
| [#1500](https://github.com/ROCm/ATOM/pull/1500) | [feature] online quantize weights when loading weights | @haoyangli0109 | draft | 2026-07-07 | 2026-07-29 |
| [#1594](https://github.com/ROCm/ATOM/pull/1594) | Add MoRIIO write-push KV transfer with DeepSeek-V4 and fabri... | @maning00 | draft | 2026-07-14 | 2026-07-29 |
| [#1316](https://github.com/ROCm/ATOM/pull/1316) | [KV-events] block token_offset + sequence numbers + replay | @bongwoobak | open | 2026-06-22 | 2026-07-28 |
| [#1612](https://github.com/ROCm/ATOM/pull/1612) | [fix] Stabilize ATOM FP8 no-eager rollout weight sync and CU... | @xysheng-AMD | open | 2026-07-16 | 2026-07-27 |
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
| [#1603](https://github.com/ROCm/ATOM/pull/1603) | multi-node dp support | @ganyi1996ppo | open | 2026-07-15 | 2026-07-16 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-07-15 |
| [#1584](https://github.com/ROCm/ATOM/pull/1584) | [fix] MXFP4 MoE: single-source use_triton_moe() to fix gfx94... | @zejunchen-zejun | open | 2026-07-14 | 2026-07-15 |
| [#1590](https://github.com/ROCm/ATOM/pull/1590) | Avoid cancelling heavy CI on review events | @gyohuangxin | open | 2026-07-14 | 2026-07-15 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#1579](https://github.com/ROCm/ATOM/pull/1579) | Feiw/v4/mlapr | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#1358](https://github.com/ROCm/ATOM/pull/1358) | fix(prefix-cache): bypass prefix caching for multimodal sequ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1357](https://github.com/ROCm/ATOM/pull/1357) | feat(gfx1151): custom head-dim-tiled Triton flash attention ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1317](https://github.com/ROCm/ATOM/pull/1317) | Add MiniMax-M3 (MXFP4/AttnFP8) model support | @thpereir | open | 2026-06-22 | 2026-07-13 |
| [#1369](https://github.com/ROCm/ATOM/pull/1369) | Enable TBO Support & Fix Accuracy Regressions for Kimi K2.5 | @jpy794 | open | 2026-06-26 | 2026-07-13 |
| [#1571](https://github.com/ROCm/ATOM/pull/1571) | Guanbao/fix atom mtp memory fault | @gbyu-amd | draft | 2026-07-13 | 2026-07-13 |
| [#1559](https://github.com/ROCm/ATOM/pull/1559) | fix | @gbyu-amd | draft | 2026-07-10 | 2026-07-13 |
| [#1495](https://github.com/ROCm/ATOM/pull/1495) | fix(kv): reserve prefill-activation headroom and size KV poo... | @carlushuang | draft | 2026-07-07 | 2026-07-13 |
| [#1504](https://github.com/ROCm/ATOM/pull/1504) | Enable GFX12 Preshuffle Weights | @amirumoAMD | draft | 2026-07-07 | 2026-07-13 |
| [#1448](https://github.com/ROCm/ATOM/pull/1448) | [1/3]refactor mesh worker registry into layered pools | @Yuechguo | draft | 2026-07-03 | 2026-07-13 |
| [#1455](https://github.com/ROCm/ATOM/pull/1455) | fix: all greedy && set seed | @JiaoliangYu | draft | 2026-07-03 | 2026-07-13 |
| [#1456](https://github.com/ROCm/ATOM/pull/1456) | add trace breakdown skill | @zhuyuhua-v | draft | 2026-07-03 | 2026-07-13 |
| [#1468](https://github.com/ROCm/ATOM/pull/1468) | debug: run15 cu_seqlens_q stale probe (3-state dump + guard) | @JiaoliangYu | draft | 2026-07-05 | 2026-07-13 |
| [#1389](https://github.com/ROCm/ATOM/pull/1389) | Fpz/mixed mla dispatch v2 | @jiayyu | draft | 2026-06-29 | 2026-07-13 |
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
| [#632](https://github.com/ROCm/ATOM/pull/632) | fix: correct MXFP4 MoE weight shuffle for Quark models (Mini... | @thpereir | draft | 2026-04-22 | 2026-07-13 |
| [#644](https://github.com/ROCm/ATOM/pull/644) | [vLLM-ATOM] Add profile trace parsing tool for vLLM-ATOM | @kliuae-amd | draft | 2026-04-24 | 2026-07-13 |
| [#779](https://github.com/ROCm/ATOM/pull/779) | [codex] DeepSeek FP4 MTP decode safeguards and MLA hooks | @josusanmartin | draft | 2026-05-13 | 2026-07-13 |
| [#918](https://github.com/ROCm/ATOM/pull/918) | remove ssm index copy | @ganyi1996ppo | draft | 2026-05-26 | 2026-07-13 |
| [#960](https://github.com/ROCm/ATOM/pull/960) | deepseek v4 fp8_einsum enable | @ganyi1996ppo | draft | 2026-05-28 | 2026-07-13 |
| [#969](https://github.com/ROCm/ATOM/pull/969) | 455 test yadai dump | @yadaish | draft | 2026-05-28 | 2026-07-13 |
| [#985](https://github.com/ROCm/ATOM/pull/985) | ci(sglang): add Kimi-K2 e2e accuracy + perf regression | @sunway513 | draft | 2026-05-30 | 2026-07-13 |
| [#1007](https://github.com/ROCm/ATOM/pull/1007) | Gfx1250 bringup moe | @yadaish | draft | 2026-06-01 | 2026-07-13 |
| [#1045](https://github.com/ROCm/ATOM/pull/1045) | gpt-oss WAs + triton moe a8w4 support | @ahmed-bsod | draft | 2026-06-03 | 2026-07-13 |
| [#1242](https://github.com/ROCm/ATOM/pull/1242) | pa draft | @vgokhale | draft | 2026-06-17 | 2026-07-13 |
| [#1283](https://github.com/ROCm/ATOM/pull/1283) | [vllm-atom] support eagle3 for M3 | @whx-sjtu | draft | 2026-06-18 | 2026-07-13 |
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
| [#1386](https://github.com/ROCm/ATOM/pull/1386) | docs: add gfx1200 (Navi 44) alongside gfx1201 for RDNA4 supp... | @0xDELUXA | open | 2026-06-28 | 2026-07-02 |
| [#1431](https://github.com/ROCm/ATOM/pull/1431) | feat(openai): add tool calling support with GPT-OSS Harmony ... | @seungrokj | open | 2026-07-01 | 2026-07-01 |
| [#1427](https://github.com/ROCm/ATOM/pull/1427) | Add feature to parse Hermes <tool_call>{json}</tool_call> to... | @hyukjlee | open | 2026-07-01 | 2026-07-01 |
| [#1399](https://github.com/ROCm/ATOM/pull/1399) | ci: add HIP debug probes for DO runner | @gyohuangxin | open | 2026-06-29 | 2026-06-30 |
| [#1387](https://github.com/ROCm/ATOM/pull/1387) | [plugin][script][recipe] update env vars for kimi and minima... | @gbyu-amd | open | 2026-06-28 | 2026-06-30 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-06-29 |
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
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-06-26 |
| [#1233](https://github.com/ROCm/ATOM/pull/1233) | feat(moe): gfx1250 a8w4 use new N32K4 weight-scale layout | @yadaish | open | 2026-06-16 | 2026-06-26 |
| [#1137](https://github.com/ROCm/ATOM/pull/1137) | benchmarks: standalone model-loading (safetensors) speed ben... | @carlushuang | open | 2026-06-09 | 2026-06-26 |
| [#810](https://github.com/ROCm/ATOM/pull/810) | Add Responses API streaming support | @san-tian | open | 2026-05-16 | 2026-06-26 |
| [#789](https://github.com/ROCm/ATOM/pull/789) | fix(openai): harden chat request handling | @san-tian | open | 2026-05-14 | 2026-06-26 |
| [#778](https://github.com/ROCm/ATOM/pull/778) | feat(server): add Anthropic Messages API endpoint (/v1/messa... | @carlushuang | open | 2026-05-13 | 2026-06-26 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-06-26 |
| [#715](https://github.com/ROCm/ATOM/pull/715) | docs: deploy compressor page with docs workflow | @gyohuangxin | open | 2026-05-07 | 2026-06-26 |
| [#607](https://github.com/ROCm/ATOM/pull/607) | [feat](ai): add accuracy debug skill for nightly test | @PerryZhang01 | open | 2026-04-19 | 2026-06-26 |
| [#554](https://github.com/ROCm/ATOM/pull/554) | CI: make ATOM test workflow reusable | @gyohuangxin | open | 2026-04-14 | 2026-06-26 |
| [#478](https://github.com/ROCm/ATOM/pull/478) | feat: add vLLM benchmark workflow and dashboard | @ChuanLi1101 | open | 2026-04-02 | 2026-06-26 |
| [#309](https://github.com/ROCm/ATOM/pull/309) | [QUARK-493] Fix Qwen3 MXFP4 MoE weight loading with TP 4/8 | @thpereir | open | 2026-03-11 | 2026-06-26 |
| [#97](https://github.com/ROCm/ATOM/pull/97) | [Perf](bench): refactor benchmark scripts for unified format | @PerryZhang01 | open | 2025-12-24 | 2026-06-26 |
| [#278](https://github.com/ROCm/ATOM/pull/278) | docker: add clean build and wheel-based install Dockerfiles | @sunway513 | open | 2026-03-08 | 2026-06-26 |
| [#1277](https://github.com/ROCm/ATOM/pull/1277) | Add mxfp8 x mxfp4 Triton MoE for DSv4 | @azaidy | open | 2026-06-18 | 2026-06-18 |
| [#1217](https://github.com/ROCm/ATOM/pull/1217) | [CI] add performance CI for online quant | @haoyangli0109 | open | 2026-06-15 | 2026-06-15 |
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
| [#1915](https://github.com/ROCm/ATOM/pull/1915) | fix(dspark): keep dp-attention by warming the block drafter | @ZhangLirong-amd | merged | 2026-08-17 | 2026-08-17 |
| [#1895](https://github.com/ROCm/ATOM/pull/1895) | feat: support fp4 dispatch and fp8 combine | @JiaoliangYu | merged | 2026-08-14 | 2026-08-17 |
| [#1849](https://github.com/ROCm/ATOM/pull/1849) | [sgl atom] enable tbo for dpsk r1 | @ZLkanyo009 | merged | 2026-08-10 | 2026-08-17 |
| [#1821](https://github.com/ROCm/ATOM/pull/1821) | [ATOM SGL][model] Kimi K3 | @ZhiweiYan-96 | merged | 2026-08-06 | 2026-08-17 |
| [#1832](https://github.com/ROCm/ATOM/pull/1832) | [feat][DCP] Enable DCP for DeepSeek Sparse Attention (DSA / ... | @yitingw1 | merged | 2026-08-07 | 2026-08-17 |
| [#1912](https://github.com/ROCm/ATOM/pull/1912) | perf(frontend+server): stop the event loop stalling between ... | @valarLip | merged | 2026-08-16 | 2026-08-16 |
| [#1861](https://github.com/ROCm/ATOM/pull/1861) | Dspark bubble optimization by Zero-Overhead Scheduling N-2 e... | @ZhangLirong-amd | merged | 2026-08-11 | 2026-08-16 |
| [#1839](https://github.com/ROCm/ATOM/pull/1839) | [feat](vllm): upgrade vllm to 0.26.1 | @PerryZhang01 | merged | 2026-08-10 | 2026-08-16 |
| [#1904](https://github.com/ROCm/ATOM/pull/1904) | [fix](dsv4): fix dsv4 accuracy | @PerryZhang01 | merged | 2026-08-15 | 2026-08-16 |
| [#1691](https://github.com/ROCm/ATOM/pull/1691) | Eplb v2 mega | @JiaoliangYu | merged | 2026-07-24 | 2026-08-16 |
| [#1907](https://github.com/ROCm/ATOM/pull/1907) | perf(benchmark): batch the tokenizer calls that build the ra... | @valarLip | merged | 2026-08-15 | 2026-08-15 |
| [#1906](https://github.com/ROCm/ATOM/pull/1906) | fix(engine)+perf(frontend): unwedge the request socket, push... | @valarLip | merged | 2026-08-15 | 2026-08-15 |
| [#1894](https://github.com/ROCm/ATOM/pull/1894) | [DSV4] Add PAGE-backed state checkpoints | @yhl-amd | merged | 2026-08-14 | 2026-08-15 |
| [#1905](https://github.com/ROCm/ATOM/pull/1905) | [fix](docker): change the base image for docker release | @PerryZhang01 | merged | 2026-08-15 | 2026-08-15 |
| [#1902](https://github.com/ROCm/ATOM/pull/1902) | Fix/v4 piecewise graph pool accuracy issue | @ZhangLirong-amd | merged | 2026-08-14 | 2026-08-15 |
| [#1896](https://github.com/ROCm/ATOM/pull/1896) | [fix](docker): recover base image to torch2.10 | @PerryZhang01 | merged | 2026-08-14 | 2026-08-15 |
| [#1900](https://github.com/ROCm/ATOM/pull/1900) | fix(fused_moe): drop top-k from mori dispatch trim bound | @ZhangLirong-amd | merged | 2026-08-14 | 2026-08-14 |
| [#1898](https://github.com/ROCm/ATOM/pull/1898) | fix(scheduler) Include CPU-offloaded prefix hits in request ... | @wanzhenchn | merged | 2026-08-14 | 2026-08-14 |
| [#1877](https://github.com/ROCm/ATOM/pull/1877) | (recipe)(ATOM) add GLM5.2 agentic recipe | @zhuyuhua-v | merged | 2026-08-12 | 2026-08-14 |
| [#1783](https://github.com/ROCm/ATOM/pull/1783) | [feat](k3): add k3 to precheckin and nightly test | @PerryZhang01 | merged | 2026-08-04 | 2026-08-14 |
| [#1886](https://github.com/ROCm/ATOM/pull/1886) | fix(dpa+mesh) stabilize atomesh routing sticky and schedulin... | @wanzhenchn | merged | 2026-08-13 | 2026-08-14 |
| [#1738](https://github.com/ROCm/ATOM/pull/1738) | [feat](qwen):Support qwen3.5x model | @junhaha666 | merged | 2026-07-30 | 2026-08-13 |
| [#1876](https://github.com/ROCm/ATOM/pull/1876) | [perf][kimi k3] enable kv cache fp8 for dspark draft model | @whx-sjtu | merged | 2026-08-12 | 2026-08-13 |
| [#1501](https://github.com/ROCm/ATOM/pull/1501) | [Feature] Enable DP routing for chat completions | @simondanielsson | merged | 2026-07-07 | 2026-08-13 |
| [#1874](https://github.com/ROCm/ATOM/pull/1874) | feat(kv-cache): add V4 checkpoint capacity headroom | @yhl-amd | merged | 2026-08-12 | 2026-08-13 |
| [#1884](https://github.com/ROCm/ATOM/pull/1884) | fix(v4-piecewise accuracy issue): pin attn_pre outputs acros... | @ZhangLirong-amd | merged | 2026-08-13 | 2026-08-13 |
| [#1831](https://github.com/ROCm/ATOM/pull/1831) | fix(attention): guard sparse MLA index conversion | @qichu-yun | merged | 2026-08-07 | 2026-08-13 |
| [#1809](https://github.com/ROCm/ATOM/pull/1809) | [fix](dsv4): fix dsv4 accuracy error | @PerryZhang01 | merged | 2026-08-06 | 2026-08-13 |
| [#1864](https://github.com/ROCm/ATOM/pull/1864) | test(mtp): cover deferred status queue across chunked prefil... | @yhl-amd | merged | 2026-08-11 | 2026-08-12 |
| [#1870](https://github.com/ROCm/ATOM/pull/1870) | feat(mla): enable persistent decode for all MLA models under... | @ZhangLirong-amd | merged | 2026-08-12 | 2026-08-12 |
| [#1811](https://github.com/ROCm/ATOM/pull/1811) | fix(glm-dsa): enable stable top-k for tensor parallel | @yhl-amd | merged | 2026-08-06 | 2026-08-12 |
| [#1859](https://github.com/ROCm/ATOM/pull/1859) | [DeepSeek-V4] Fix illegal memory access in CSA decode top-k ... | @amd-ruitang3 | merged | 2026-08-11 | 2026-08-12 |
| [#1788](https://github.com/ROCm/ATOM/pull/1788) | optimize attn res ref fla and fuse all possible part around ... | @ganyi1996ppo | merged | 2026-08-04 | 2026-08-12 |
| [#1820](https://github.com/ROCm/ATOM/pull/1820) | [ATOM][Kimi-K3] enable KDA prefill on aiter | @Liang-jianhao97 | merged | 2026-08-06 | 2026-08-12 |
| [#1803](https://github.com/ROCm/ATOM/pull/1803) | fix: include content="" in streaming role chunk to match Ope... | @shantipriya-amd | merged | 2026-08-05 | 2026-08-12 |
| [#1806](https://github.com/ROCm/ATOM/pull/1806) | [DSpark] Support kimi k3 Dspark PS MLA and draft model casua... | @ZhangLirong-amd | merged | 2026-08-06 | 2026-08-12 |
| [#1862](https://github.com/ROCm/ATOM/pull/1862) | [SGL+ATOM]Fix/docker release decouple oot sglang | @zhangxinyuanliuhengyu | merged | 2026-08-11 | 2026-08-12 |
| [#1868](https://github.com/ROCm/ATOM/pull/1868) | [Feat] MTP for disaggregated prefill: draft on a PP prefill ... | @Jasen2201 | merged | 2026-08-12 | 2026-08-12 |
| [#1865](https://github.com/ROCm/ATOM/pull/1865) | fix(v4-kernels): let a V4 pool have no dense class, which V4... | @valarLip | merged | 2026-08-11 | 2026-08-12 |
| [#1866](https://github.com/ROCm/ATOM/pull/1866) | fix(mooncake): keep TCP transport off RDMA devices | @cquil11 | merged | 2026-08-11 | 2026-08-12 |
| [#1850](https://github.com/ROCm/ATOM/pull/1850) | feat(spec-decode): add synthetic (forced) acceptance-rate kn... | @whx-sjtu | merged | 2026-08-10 | 2026-08-12 |
| [#1816](https://github.com/ROCm/ATOM/pull/1816) | feat(glm): enable persistent decode for GLM-5.2 DPA | @wanzhenchn | merged | 2026-08-06 | 2026-08-11 |
| [#1782](https://github.com/ROCm/ATOM/pull/1782) | enable kimi k3 multimodel | @HaonanWang98 | merged | 2026-08-04 | 2026-08-11 |
| [#1851](https://github.com/ROCm/ATOM/pull/1851) | feat(lmcache): validate NVMe offload storage | @yhl-amd | merged | 2026-08-10 | 2026-08-11 |
| [#1777](https://github.com/ROCm/ATOM/pull/1777) | [Doc] Add Online Quantization Best Practices | @haoyangli0109 | merged | 2026-08-03 | 2026-08-11 |
| [#1837](https://github.com/ROCm/ATOM/pull/1837) | perf(frontend): remove four host-side bottlenecks that idle ... | @junhaha666 | merged | 2026-08-09 | 2026-08-11 |
| [#1857](https://github.com/ROCm/ATOM/pull/1857) | fix trace tag and add k3 tag | @HaonanWang98 | merged | 2026-08-11 | 2026-08-11 |
| [#1771](https://github.com/ROCm/ATOM/pull/1771) | feat(kv-cache): content-addressed per-request state, so pref... | @valarLip | merged | 2026-08-03 | 2026-08-11 |
| [#1860](https://github.com/ROCm/ATOM/pull/1860) | [fix](docker): fix dockerfile for torch2.13 image | @PerryZhang01 | merged | 2026-08-11 | 2026-08-11 |
| [#1826](https://github.com/ROCm/ATOM/pull/1826) | [Atomesh][CI] guard SWE-bench disk usage and report prefix-c... | @Phi-C | merged | 2026-08-07 | 2026-08-11 |
| [#1863](https://github.com/ROCm/ATOM/pull/1863) | [atomesh] Support Crusoe MI355 runner label alias | @junyyang-amd | merged | 2026-08-11 | 2026-08-11 |
| [#1855](https://github.com/ROCm/ATOM/pull/1855) | Refactor DP-aware request handling and LMCache offload suppo... | @Jasen2201 | merged | 2026-08-11 | 2026-08-11 |
| [#1846](https://github.com/ROCm/ATOM/pull/1846) | [fix](torch): fix torch errors for torch2.13 | @PerryZhang01 | merged | 2026-08-10 | 2026-08-10 |
| [#1838](https://github.com/ROCm/ATOM/pull/1838) | fix(anthropic): honor model generation config defaults | @yhl-amd | merged | 2026-08-10 | 2026-08-10 |
| [#1699](https://github.com/ROCm/ATOM/pull/1699) | feat(dp_sticky) : add new dp_sticky policy for dp-aware rout... | @Yuechguo | merged | 2026-07-25 | 2026-08-10 |
| [#1786](https://github.com/ROCm/ATOM/pull/1786) | [feat]: support glm5 and glm52 in rtpllm | @zhiqchen-amd | merged | 2026-08-04 | 2026-08-10 |
| [#1810](https://github.com/ROCm/ATOM/pull/1810) | feat(openai): accept Anthropic-style chat tools | @Jasen2201 | merged | 2026-08-06 | 2026-08-07 |
| [#1825](https://github.com/ROCm/ATOM/pull/1825) | [sgl+atom]ci(sglang): reduce benchmark matrix job outputs | @zhangxinyuanliuhengyu | merged | 2026-08-07 | 2026-08-07 |
| [#1827](https://github.com/ROCm/ATOM/pull/1827) | [SGL+ATOM]ci(sglang): use baked ATOM for scheduled benchmark... | @zhangxinyuanliuhengyu | merged | 2026-08-07 | 2026-08-07 |
| [#1829](https://github.com/ROCm/ATOM/pull/1829) | [fix](pytorch): fix dynamo args in torch2.13 | @PerryZhang01 | merged | 2026-08-07 | 2026-08-07 |
| [#1823](https://github.com/ROCm/ATOM/pull/1823) | [fix](rccl): fix rccl compile path for new docker | @PerryZhang01 | merged | 2026-08-07 | 2026-08-07 |
| [#1804](https://github.com/ROCm/ATOM/pull/1804) | fix(plugin): reuse vLLM PyNccl communicator | @XiaobingSuper | merged | 2026-08-05 | 2026-08-07 |
| [#1824](https://github.com/ROCm/ATOM/pull/1824) | [ATOM+SGL]ci(sglang): fallback to recent nightly benchmark i... | @zhangxinyuanliuhengyu | merged | 2026-08-07 | 2026-08-07 |
| [#1760](https://github.com/ROCm/ATOM/pull/1760) | [ATOM SGL] GLM 5.2 MTP Support | @ZhiweiYan-96 | merged | 2026-07-31 | 2026-08-07 |
| [#1822](https://github.com/ROCm/ATOM/pull/1822) | ci: extend long-context benchmark timeouts | @JiaoliangYu | merged | 2026-08-07 | 2026-08-07 |
| [#1781](https://github.com/ROCm/ATOM/pull/1781) | [feat][DCP] Enable DCP with fp8 MTP | @yitingw1 | merged | 2026-08-04 | 2026-08-07 |
| [#1793](https://github.com/ROCm/ATOM/pull/1793) | fix(deepseek_v4): gfx942 dtype-dialect and MXFP4 swizzle fix... | @AMD-melliott | merged | 2026-08-04 | 2026-08-06 |
| [#1817](https://github.com/ROCm/ATOM/pull/1817) | ci: enlarge MORI heap for MegaMoE benchmark | @JiaoliangYu | merged | 2026-08-06 | 2026-08-06 |
| [#1807](https://github.com/ROCm/ATOM/pull/1807) | fix(offload): prevent KV corruption on LMCache reload | @yhl-amd | merged | 2026-08-06 | 2026-08-06 |
| [#1815](https://github.com/ROCm/ATOM/pull/1815) | Mega v2 bench | @JiaoliangYu | merged | 2026-08-06 | 2026-08-06 |
| [#1814](https://github.com/ROCm/ATOM/pull/1814) | Mega v2 bench | @JiaoliangYu | merged | 2026-08-06 | 2026-08-06 |
| [#1752](https://github.com/ROCm/ATOM/pull/1752) | [k3] enable dual stream for shared expert and some fusions | @gbyu-amd | merged | 2026-07-30 | 2026-08-06 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-08-17T08:29:14Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#570](https://github.com/ROCm/mori/pull/570) | test bnxt ci | @QizhouZhang97 | open | 2026-08-17 | 2026-08-17 |
| [#556](https://github.com/ROCm/mori/pull/556) | Logger and timer macros improvements | @pemeliya | open | 2026-08-13 | 2026-08-17 |
| [#569](https://github.com/ROCm/mori/pull/569) | Feat/umbp tree connector port | @TianDi101 | open | 2026-08-17 | 2026-08-17 |
| [#566](https://github.com/ROCm/mori/pull/566) | Feat/env check gpu memory | @amirakb89 | draft | 2026-08-14 | 2026-08-15 |
| [#559](https://github.com/ROCm/mori/pull/559) | Fix SDMA AllReduce corruption across HIP graph replays | @hubertlu-tw | open | 2026-08-13 | 2026-08-14 |
| [#518](https://github.com/ROCm/mori/pull/518) | MORI-IO: CPU hot-path improvements (profile-guided) | @pemeliya | draft | 2026-08-03 | 2026-08-14 |
| [#541](https://github.com/ROCm/mori/pull/541) | Adpat mori to RoCM 714 container | @QizhouZhang97 | open | 2026-08-11 | 2026-08-14 |
| [#540](https://github.com/ROCm/mori/pull/540) | refactor(umbp): make distributed mode backend- and transport... | @TianDi101 | open | 2026-08-11 | 2026-08-14 |
| [#547](https://github.com/ROCm/mori/pull/547) | feat(umbp): support the UMBP tree connector on a distributed... | @maning00 | open | 2026-08-12 | 2026-08-14 |
| [#544](https://github.com/ROCm/mori/pull/544) | allocator: register mori as a torch SymmetricMemory backend | @carlushuang | draft | 2026-08-11 | 2026-08-14 |
| [#558](https://github.com/ROCm/mori/pull/558) | [Draft] EP support for rail isolated topology through Host b... | @itej89 | draft | 2026-08-13 | 2026-08-13 |
| [#539](https://github.com/ROCm/mori/pull/539) | perf(EP): tune EPv1 MI300X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @kudomcho | open | 2026-08-11 | 2026-08-12 |
| [#537](https://github.com/ROCm/mori/pull/537) | perf(cco): preserve global address space in LSA pointer wrap... | @yangyuhuiling | open | 2026-08-10 | 2026-08-12 |
| [#533](https://github.com/ROCm/mori/pull/533) | chore(EPv2): split dispatch/combine tuning schedules into in... | @kawhil-amd | open | 2026-08-09 | 2026-08-12 |
| [#527](https://github.com/ROCm/mori/pull/527) | fix(io): detect host vs device memory in RegisterMemory inst... | @TianDi101 | open | 2026-08-05 | 2026-08-12 |
| [#525](https://github.com/ROCm/mori/pull/525) | bench: tuning config lookup overhead reproducer | @kudomcho | open | 2026-08-04 | 2026-08-12 |
| [#521](https://github.com/ROCm/mori/pull/521) | ep: allow EpDispatchCombineOp to be resized at runtime | @inkcherry | open | 2026-08-04 | 2026-08-12 |
| [#520](https://github.com/ROCm/mori/pull/520) | perf(EPv2): optimize epv2 disp/comb kernel performance | @kawhil-amd | draft | 2026-08-04 | 2026-08-12 |
| [#491](https://github.com/ROCm/mori/pull/491) | fix(io): bound EventPool free-list to avoid HSA signal exhau... | @AMD-yanfeiwang | draft | 2026-07-20 | 2026-08-12 |
| [#450](https://github.com/ROCm/mori/pull/450) | a2a_gemm examples with flydsl + mori | @zjing14 | draft | 2026-07-06 | 2026-08-12 |
| [#445](https://github.com/ROCm/mori/pull/445) | feat(shmem/sdma): implement address-based device putmem_nbi_... | @zjing14 | open | 2026-07-02 | 2026-08-12 |
| [#443](https://github.com/ROCm/mori/pull/443) | feat(io): Add configurable RDMA signal interval | @maning00 | open | 2026-07-01 | 2026-08-12 |
| [#434](https://github.com/ROCm/mori/pull/434) | Fix(io): track RDMA notification completions in transfer sta... | @amd-dlimpus | open | 2026-06-26 | 2026-08-12 |
| [#345](https://github.com/ROCm/mori/pull/345) | feat(io): add RDMA telemetry snapshot APIs | @maning00 | open | 2026-06-01 | 2026-08-12 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-08-12 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-08-12 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-08-12 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-08-12 |
| [#506](https://github.com/ROCm/mori/pull/506) | MORI-IO CPU hot-path improvements + logging thread-safety | @pemeliya | open | 2026-07-29 | 2026-08-03 |
| [#568](https://github.com/ROCm/mori/pull/568) | perf(ep): cut the small-batch dispatch cost in both gfx1250 ... | @zhangfei829 | merged | 2026-08-16 | 2026-08-16 |
| [#567](https://github.com/ROCm/mori/pull/567) | perf(ep/v2): cap the per-warp token quota in the gfx1250 dis... | @zhangfei829 | merged | 2026-08-15 | 2026-08-15 |
| [#565](https://github.com/ROCm/mori/pull/565) | ops-v2: drop the redundant host counter resets in the hip pa... | @jhchouuu | merged | 2026-08-14 | 2026-08-14 |
| [#564](https://github.com/ROCm/mori/pull/564) | Bench/umbp staging autosize | @TianDi101 | merged | 2026-08-14 | 2026-08-14 |
| [#546](https://github.com/ROCm/mori/pull/546) | Fix silent cross-node combine corruption in InterNodeV1 (#47... | @QizhouZhang97 | merged | 2026-08-12 | 2026-08-14 |
| [#554](https://github.com/ROCm/mori/pull/554) | perf(umbp): port the pure-SSD/multi-drive work onto the back... | @TianDi101 | merged | 2026-08-13 | 2026-08-14 |
| [#562](https://github.com/ROCm/mori/pull/562) | perf(ep): cap the per-warp token quota so small batches fill... | @zhangfei829 | merged | 2026-08-14 | 2026-08-14 |
| [#548](https://github.com/ROCm/mori/pull/548) | feat(EPv2): HIP/JIT backend for intranode dispatch/combine +... | @jhchouuu | merged | 2026-08-12 | 2026-08-13 |
| [#543](https://github.com/ROCm/mori/pull/543) | refactor(umbp): one medium per node, selected by UMBPDistrib... | @TianDi101 | merged | 2026-08-11 | 2026-08-13 |
| [#542](https://github.com/ROCm/mori/pull/542) | Feat/umbp hbm ssd backends | @TianDi101 | merged | 2026-08-11 | 2026-08-13 |
| [#536](https://github.com/ROCm/mori/pull/536) | fix(EPv2):  scale i64 buffer offsets in the flydsl 0.3.0 com... | @kawhil-amd | merged | 2026-08-10 | 2026-08-13 |
| [#504](https://github.com/ROCm/mori/pull/504) | MORI-IO nixl-style cpp bench script | @amirakb89 | merged | 2026-07-28 | 2026-08-13 |
| [#553](https://github.com/ROCm/mori/pull/553) | docs(cco): document the p2p benchmarks and fix their transpo... | @jhchouuu | merged | 2026-08-13 | 2026-08-13 |
| [#550](https://github.com/ROCm/mori/pull/550) | build: recognise gfx1250 and let anvil_device.hpp compile fo... | @jhchouuu | merged | 2026-08-12 | 2026-08-13 |
| [#552](https://github.com/ROCm/mori/pull/552) | support UALink bandwidth testing | @zhangfei829 | merged | 2026-08-12 | 2026-08-12 |
| [#531](https://github.com/ROCm/mori/pull/531) | test(ep): add cross-dtype and quantized coverage for dispatc... | @amd-wsung102 | merged | 2026-08-07 | 2026-08-12 |
| [#538](https://github.com/ROCm/mori/pull/538) | perf(ep): add MI300X IntraNode/IntraNodeLL tuning configs, w... | @kudomcho | merged | 2026-08-10 | 2026-08-12 |
| [#545](https://github.com/ROCm/mori/pull/545) | fix(EPv2): clamp idle lanes in gather-combine tok_map load t... | @kawhil-amd | merged | 2026-08-12 | 2026-08-12 |
| [#534](https://github.com/ROCm/mori/pull/534) | bench(cco): let -c / -T drive the SDMA bandwidth kernels | @jhchouuu | merged | 2026-08-10 | 2026-08-12 |
| [#535](https://github.com/ROCm/mori/pull/535) | fix(build): cap setuptools before build_ext lifecycle change | @yangyuhuiling | merged | 2026-08-10 | 2026-08-10 |
| [#517](https://github.com/ROCm/mori/pull/517) | feat(EPv2): enable fp4 dispatch feature in EPv2 | @kawhil-amd | merged | 2026-08-03 | 2026-08-10 |
| [#532](https://github.com/ROCm/mori/pull/532) | feat(ep/intranode): bring MoE dispatch/combine up on gfx1250... | @zhangfei829 | merged | 2026-08-08 | 2026-08-08 |
| [#530](https://github.com/ROCm/mori/pull/530) | perf(EPv2): update gfx1250 tune config + optimize kernel imp... | @kawhil-amd | merged | 2026-08-06 | 2026-08-07 |
| [#529](https://github.com/ROCm/mori/pull/529) | compat(epv2): support FlyDSL 0.3.0 alongside 0.2.x | @jhchouuu | merged | 2026-08-06 | 2026-08-07 |
| [#510](https://github.com/ROCm/mori/pull/510) | roctx ranges | @AakarshAMD | merged | 2026-07-30 | 2026-08-06 |
| [#512](https://github.com/ROCm/mori/pull/512) | (feat) generate perf report after nightly building | @QizhouZhang97 | merged | 2026-07-31 | 2026-08-05 |
| [#528](https://github.com/ROCm/mori/pull/528) | bugfix: guard ModuleLogger's shared state with a mutex | @QizhouZhang97 | merged | 2026-08-05 | 2026-08-05 |
| [#513](https://github.com/ROCm/mori/pull/513) | feat(cco): gfx1250 SDMA support + anvil loopback/lifecycle f... | @jhchouuu | merged | 2026-07-31 | 2026-08-05 |
| [#459](https://github.com/ROCm/mori/pull/459) | test(ep): add configurable CLI knobs to dispatch/combine ben... | @amd-arozanov | merged | 2026-07-09 | 2026-08-05 |
| [#524](https://github.com/ROCm/mori/pull/524) | fix(EP): detect GPU model by PCI DID instead of CU count | @kawhil-amd | merged | 2026-08-04 | 2026-08-05 |
| [#511](https://github.com/ROCm/mori/pull/511) | perf(EP): tune EPv1 MI355X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @Duyi-Wang | merged | 2026-07-31 | 2026-08-04 |
| [#522](https://github.com/ROCm/mori/pull/522) | fix(EPv2): correctness and perf fixes for the EPv2 intranode... | @kawhil-amd | merged | 2026-08-04 | 2026-08-04 |
| [#464](https://github.com/ROCm/mori/pull/464) | perf(ep): add MI350X IntraNode/IntraNodeLL tuning configs fo... | @kudomcho | merged | 2026-07-10 | 2026-08-04 |
| [#519](https://github.com/ROCm/mori/pull/519) | Fix flaky data corruption in CCO SDMA tests | @QizhouZhang97 | merged | 2026-08-04 | 2026-08-04 |
| [#516](https://github.com/ROCm/mori/pull/516) | Remove bnxt ci due to bnxt machine being unavailable | @QizhouZhang97 | merged | 2026-08-03 | 2026-08-03 |
| [#509](https://github.com/ROCm/mori/pull/509) | rdma: fix dmabuf offset for sub-allocated GPU buffers (LOC_P... | @andyluo7 | merged | 2026-07-30 | 2026-08-03 |
| [#505](https://github.com/ROCm/mori/pull/505) | fix(ep): AsyncLL slot assignment double-allocates when top-k... | @TianDi101 | merged | 2026-07-29 | 2026-07-31 |
| [#441](https://github.com/ROCm/mori/pull/441) | ccl: hierarchical cross-node AllGather (intra-node SDMA + in... | @inkcherry | merged | 2026-07-01 | 2026-07-31 |
| [#503](https://github.com/ROCm/mori/pull/503) | chore(cco): drop hip vmm api patches + update cco dockerfile | @kawhil-amd | merged | 2026-07-27 | 2026-07-31 |
| [#502](https://github.com/ROCm/mori/pull/502) | feat(cco): fix the SDMA ring, rework signals and multi-lane ... | @jhchouuu | merged | 2026-07-27 | 2026-07-30 |
| [#490](https://github.com/ROCm/mori/pull/490) | feat(kv-indexer): ApplyExternalKvBatch RPC + Redis metadata ... | @isytwu | merged | 2026-07-20 | 2026-07-28 |
| [#460](https://github.com/ROCm/mori/pull/460) | Add UMBP standalone process mode | @maning00 | merged | 2026-07-09 | 2026-07-28 |
| [#437](https://github.com/ROCm/mori/pull/437) | Refactor: umbp metadata store rebase | @TianDi101 | merged | 2026-06-29 | 2026-07-28 |
| [#487](https://github.com/ROCm/mori/pull/487) | perf(EPv2): optimize control plane latency in epv2 combine k... | @kawhil-amd | merged | 2026-07-17 | 2026-07-28 |
| [#500](https://github.com/ROCm/mori/pull/500) | perf(EPv2): update EPv2 combine tune config | @kawhil-amd | merged | 2026-07-24 | 2026-07-27 |
| [#387](https://github.com/ROCm/mori/pull/387) | fix: detect same physical node by MORI_NODE_ID/boot_id, with... | @isytwu | merged | 2026-06-11 | 2026-07-27 |
| [#384](https://github.com/ROCm/mori/pull/384) | Fix: umbp qp per transfer default value & add logs | @TianDi101 | merged | 2026-06-11 | 2026-07-27 |
| [#379](https://github.com/ROCm/mori/pull/379) | test(io): add --target-dev-offset to MORI-IO benchmark | @maning00 | merged | 2026-06-10 | 2026-07-27 |
| [#335](https://github.com/ROCm/mori/pull/335) | feat(ep): add cached routing replay for training dispatch/co... | @sudhu2k | merged | 2026-05-25 | 2026-07-27 |
| [#466](https://github.com/ROCm/mori/pull/466) | feat(EPv2): gfx1250 + cross-node fabric support | @jhchouuu | merged | 2026-07-12 | 2026-07-27 |
| [#468](https://github.com/ROCm/mori/pull/468) | feat(umbp): Redis/RESP master metadata store backend | @isytwu | merged | 2026-07-13 | 2026-07-27 |
| [#501](https://github.com/ROCm/mori/pull/501) | feat(cco): honor reqs.sdmaQueueCount, clamp to HW max, guard... | @jhchouuu | merged | 2026-07-24 | 2026-07-27 |
| [#492](https://github.com/ROCm/mori/pull/492) | feat(cco): register external VMM allocations (e.g. torch.sym... | @jhchouuu | merged | 2026-07-21 | 2026-07-24 |
| [#499](https://github.com/ROCm/mori/pull/499) | feat(tools): make Ionic QoS setup configurable | @QizhouZhang97 | merged | 2026-07-24 | 2026-07-24 |
| [#498](https://github.com/ROCm/mori/pull/498) | Add libibverbs async event monitor to MORI-IO | @maning00 | merged | 2026-07-24 | 2026-07-24 |
| [#454](https://github.com/ROCm/mori/pull/454) | (cco) impl sdma transport in cco primitives | @QizhouZhang97 | merged | 2026-07-07 | 2026-07-24 |
| [#496](https://github.com/ROCm/mori/pull/496) | fix(umbp): support N host regions per worker in standalone-p... | @maning00 | merged | 2026-07-22 | 2026-07-22 |
| [#495](https://github.com/ROCm/mori/pull/495) | docs: add Kimi collaboration news | @Duyi-Wang | merged | 2026-07-22 | 2026-07-22 |
| [#254](https://github.com/ROCm/mori/pull/254) | Feature: add local expert count kernel for sglang EPLB | @TianDi101 | merged | 2026-04-08 | 2026-07-22 |
| [#242](https://github.com/ROCm/mori/pull/242) | feat(ep): add tuning config system for dispatch/combine | @isytwu | merged | 2026-03-31 | 2026-07-22 |
| [#271](https://github.com/ROCm/mori/pull/271) | tune(mi355x): add IntraNode FP4 entries for >4k tokens on EP... | @inkcherry | merged | 2026-04-17 | 2026-07-22 |
| [#493](https://github.com/ROCm/mori/pull/493) | fix(bootstrap): make rendezvous timeout configurable via MOR... | @Lzy17 | merged | 2026-07-21 | 2026-07-22 |
| [#328](https://github.com/ROCm/mori/pull/328) | Feature(umbp): cache hit tracking api | @maning00 | merged | 2026-05-20 | 2026-07-21 |
| [#330](https://github.com/ROCm/mori/pull/330) | Refactor/globalindex external kv | @maning00 | merged | 2026-05-20 | 2026-07-21 |
| [#331](https://github.com/ROCm/mori/pull/331) | Doc: add recent mori news | @TianDi101 | merged | 2026-05-21 | 2026-07-21 |
| [#341](https://github.com/ROCm/mori/pull/341) | feat(mori-io): add sync transfer wait API | @maning00 | merged | 2026-05-29 | 2026-07-21 |
| [#351](https://github.com/ROCm/mori/pull/351) | feat(io): single-transfer chunking + adaptive multi-NIC stri... | @maning00 | merged | 2026-06-03 | 2026-07-21 |
| [#363](https://github.com/ROCm/mori/pull/363) | fix(ep): guard dispatch kernels against out-of-range expert ... | @inkcherry | merged | 2026-06-05 | 2026-07-21 |
| [#368](https://github.com/ROCm/mori/pull/368) | Stabilize `umbp_client_metrics` by eliminating test port col... | @Copilot | merged | 2026-06-08 | 2026-07-21 |
| [#399](https://github.com/ROCm/mori/pull/399) | feat(umbp): pluggable master eviction strategy | @isytwu | merged | 2026-06-16 | 2026-07-21 |
| [#408](https://github.com/ROCm/mori/pull/408) | feat(ep): optimize warp id allocation under dispatch ll kern... | @kawhil-amd | merged | 2026-06-17 | 2026-07-21 |
| [#440](https://github.com/ROCm/mori/pull/440) | perf(umbp): reduce master RPC latency under load, add kv-eve... | @isytwu | merged | 2026-06-29 | 2026-07-21 |
| [#419](https://github.com/ROCm/mori/pull/419) | Feature: add umbp benchmark / distributed mode flush API / h... | @TianDi101 | merged | 2026-06-23 | 2026-07-21 |
| [#442](https://github.com/ROCm/mori/pull/442) | feat(umbp): cache remote fetches into local DRAM (dual-schem... | @inkcherry | merged | 2026-07-01 | 2026-07-21 |
| [#452](https://github.com/ROCm/mori/pull/452) | feat(umbp): tunable read leases and tighter master lease def... | @isytwu | merged | 2026-07-06 | 2026-07-21 |
| [#457](https://github.com/ROCm/mori/pull/457) | fix: only define true/false for C in bnxt_re_hsi.h | @pemeliya | merged | 2026-07-07 | 2026-07-21 |
| [#494](https://github.com/ROCm/mori/pull/494) | fix(EPv2): resolve comb_bar cross-call race causing random c... | @kawhil-amd | merged | 2026-07-21 | 2026-07-21 |
| [#448](https://github.com/ROCm/mori/pull/448) | feat(EPv2): [preview] FlyDSL intranode MoE dispatch/combine | @jhchouuu | merged | 2026-07-06 | 2026-07-20 |
| [#316](https://github.com/ROCm/mori/pull/316) | feat(io): fall back RDMA backend to XGMI when no RDMA device... | @maning00 | merged | 2026-05-13 | 2026-07-20 |
| [#315](https://github.com/ROCm/mori/pull/315) | feat(EP): decouple fp8_blockwise combine scale_dim from user... | @maning00 | merged | 2026-05-12 | 2026-07-20 |
| [#309](https://github.com/ROCm/mori/pull/309) | Refactor: decouple allocator from master and client | @TianDi101 | merged | 2026-05-09 | 2026-07-20 |
| [#311](https://github.com/ROCm/mori/pull/311) | feat(EP): FP8 blockwise quantization for IntraNode combine | @maning00 | merged | 2026-05-09 | 2026-07-20 |
| [#310](https://github.com/ROCm/mori/pull/310) | CI: add placeholder for manual CI trigger | @TianDi101 | merged | 2026-05-09 | 2026-07-20 |
| [#303](https://github.com/ROCm/mori/pull/303) | feat(ccl): add C++ AllGatherIntoTensor  over SDMA | @inkcherry | merged | 2026-05-06 | 2026-07-20 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-08-17T08:29:17Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#971](https://github.com/ROCm/FlyDSL/pull/971) | [gfx1250] Add 256x256 compute-bound GEMM (WIP) | @aoli26 | draft | 2026-08-06 | 2026-08-17 |
| [#1001](https://github.com/ROCm/FlyDSL/pull/1001) | [Compiler][gfx120] Add modC/reuseA/reuseB to MmaOpGFX1250_WM... | @jli-melchior | open | 2026-08-12 | 2026-08-17 |
| [#1009](https://github.com/ROCm/FlyDSL/pull/1009) | [Perf] Enable the XCD swizzle and pin the softmax basis for ... | @JohnQinAMD | open | 2026-08-14 | 2026-08-14 |
| [#1013](https://github.com/ROCm/FlyDSL/pull/1013) | [ROCDL] Add make_tiled_tdm_atom op and tdm_partition | @sjfeng1999 | open | 2026-08-14 | 2026-08-14 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | draft | 2026-08-14 | 2026-08-14 |
| [#960](https://github.com/ROCm/FlyDSL/pull/960) | [Kernel][MI350] Add bias, alibi bias and sink to flash atten... | @amd-nprotaso | open | 2026-08-03 | 2026-08-14 |
| [#1010](https://github.com/ROCm/FlyDSL/pull/1010) | [Perf] Add wide RDNA3 GEMM tiles | @vlluvia | open | 2026-08-14 | 2026-08-14 |
| [#980](https://github.com/ROCm/FlyDSL/pull/980) | [Perf] Choose the RDNA3 GEMM tile from the shape | @vlluvia | open | 2026-08-07 | 2026-08-14 |
| [#1008](https://github.com/ROCm/FlyDSL/pull/1008) | [Kernel][Perf] Enable the gmem->LDS async copy for f16/bf16 ... | @JohnQinAMD | open | 2026-08-13 | 2026-08-13 |
| [#1007](https://github.com/ROCm/FlyDSL/pull/1007) | [Bugfix] Fix two A-tile loading bugs in the preshuffle GEMM | @JohnQinAMD | open | 2026-08-13 | 2026-08-13 |
| [#972](https://github.com/ROCm/FlyDSL/pull/972) | add A4W4 and FP8 P2P transport support to MegaMoE | @Yaowu-Xiong | open | 2026-08-06 | 2026-08-13 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [WIP][Fix] Fix `lld invocation failed` when ROCm is not at t... | @jli-melchior | open | 2026-08-08 | 2026-08-13 |
| [#860](https://github.com/ROCm/FlyDSL/pull/860) | [Kernel] fp8 conv3d: 8-wave GEMM pipeline + BIG_IN fix | @jiacao-amd | open | 2026-07-15 | 2026-08-13 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | open | 2026-07-14 | 2026-08-12 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-08-12 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-08-11 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-08-11 |
| [#984](https://github.com/ROCm/FlyDSL/pull/984) | fix(pa): select the arch-native fp8 dtype in the metadata gr... | @zjin-lcf | open | 2026-08-07 | 2026-08-07 |
| [#931](https://github.com/ROCm/FlyDSL/pull/931) | Add flex_attention (score_mod / mask_mod) on the generic fla... | @RichardChamberlain1 | draft | 2026-07-30 | 2026-08-07 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-08-07 |
| [#891](https://github.com/ROCm/FlyDSL/pull/891) | [Test] Add gfx1250 WMMA lowering tests for additional dtypes | @AiyyappanMR | open | 2026-07-23 | 2026-08-06 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-08-05 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-05 |
| [#912](https://github.com/ROCm/FlyDSL/pull/912) | Fix hierarchical reduced predicates in copy layout lowering | @HydraQYH | open | 2026-07-27 | 2026-08-03 |
| [#957](https://github.com/ROCm/FlyDSL/pull/957) | Add SVD quant for Quark | @amd-xiaoyu12 | draft | 2026-08-02 | 2026-08-02 |
| [#942](https://github.com/ROCm/FlyDSL/pull/942) | [Kernel] Add submanifold sparse 3D convolution (bf16 implici... | @jiacao-amd | draft | 2026-07-31 | 2026-08-01 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-07-30 |
| [#906](https://github.com/ROCm/FlyDSL/pull/906) | Add fast_divmod magic-number division helper | @kashif | open | 2026-07-26 | 2026-07-29 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-07-29 |
| [#823](https://github.com/ROCm/FlyDSL/pull/823) | [MoE] Add gelu_tanh activation to MoE stage1 GEMM kernels | @jonahbernard | open | 2026-07-09 | 2026-07-28 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#910](https://github.com/ROCm/FlyDSL/pull/910) | [Kernel][Perf] Optimize paged-attention metadata decode | @fsx950223 | open | 2026-07-27 | 2026-07-28 |
| [#900](https://github.com/ROCm/FlyDSL/pull/900) | Enabling coexec llvm for Flydsl | @omuhamma | draft | 2026-07-24 | 2026-07-27 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-07-24 |
| [#833](https://github.com/ROCm/FlyDSL/pull/833) | Gfx1250 tdm gather scatter | @coderfeli | open | 2026-07-12 | 2026-07-23 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-07-23 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-07-23 |
| [#888](https://github.com/ROCm/FlyDSL/pull/888) | [Kernel][MI350] Add cache-aware 8-wave BF16/FP16 GEMM | @zhanglx13 | draft | 2026-07-23 | 2026-07-23 |
| [#837](https://github.com/ROCm/FlyDSL/pull/837) | Add a8w4 kernel for Quark mix-precision | @amd-xiaoyu12 | open | 2026-07-12 | 2026-07-23 |
| [#401](https://github.com/ROCm/FlyDSL/pull/401) | gemm a16w16 flydsl implementation (WIP) | @omuhamma | draft | 2026-04-14 | 2026-07-20 |
| [#487](https://github.com/ROCm/FlyDSL/pull/487) | blockscale code gfx1250 (WIP) | @omuhamma | open | 2026-05-08 | 2026-07-20 |
| [#829](https://github.com/ROCm/FlyDSL/pull/829) | [Feature] Extract reusable event-based benchmarking helper | @jhinpan | draft | 2026-07-10 | 2026-07-10 |
| [#748](https://github.com/ROCm/FlyDSL/pull/748) | runtime: hard-fail mgpuModuleLoadJIT on HIP | @fallintoplace | open | 2026-06-25 | 2026-07-10 |
| [#613](https://github.com/ROCm/FlyDSL/pull/613) | feat(compiler): Add custom LLVM pass pipeline and plugin sup... | @fsx950223 | open | 2026-06-02 | 2026-07-08 |
| [#757](https://github.com/ROCm/FlyDSL/pull/757) | FlyDSL gemm_decode: small-M dense GEMM kernels (BF16/FP8/blo... | @vedenev-amd | draft | 2026-06-26 | 2026-07-07 |
| [#764](https://github.com/ROCm/FlyDSL/pull/764) | flash_attn_generic: replace raw arith.* FP ops with FlyDSL-t... | @xudoyuan | draft | 2026-06-29 | 2026-07-06 |
| [#744](https://github.com/ROCm/FlyDSL/pull/744) | [Fix] Set identity block scales for CDNA4 MFMA_Scale in fp8 ... | @amd-songpiao | open | 2026-06-25 | 2026-06-26 |
| [#746](https://github.com/ROCm/FlyDSL/pull/746) | fix tile syntax in divide | @tingqli | open | 2026-06-25 | 2026-06-26 |
| [#709](https://github.com/ROCm/FlyDSL/pull/709) | [Kernel] feat: Add MXFP6-E2M3 activation support to mixed_mo... | @amd-satre | open | 2026-06-19 | 2026-06-20 |
| [#638](https://github.com/ROCm/FlyDSL/pull/638) | [Feat] Complete BasisAttr support in IntTupleBuilder (#574) | @jhinpan | open | 2026-06-03 | 2026-06-18 |
| [#575](https://github.com/ROCm/FlyDSL/pull/575) | [LLVM] Bump to llvm/llvm-project@87717bf9f81f | @jli-melchior | open | 2026-05-27 | 2026-06-16 |
| [#678](https://github.com/ROCm/FlyDSL/pull/678) | Add SUPPORTED_ARCHS table and is_arch_supported() helper | @xudoyuan | draft | 2026-06-12 | 2026-06-15 |
| [#669](https://github.com/ROCm/FlyDSL/pull/669) | perf(jit): lean cache-key fast path for @flyc.jit launches | @fsx950223 | open | 2026-06-09 | 2026-06-10 |
| [#662](https://github.com/ROCm/FlyDSL/pull/662) | perf(rmsnorm): vectorize generic path and simplify block red... | @kudomcho | open | 2026-06-06 | 2026-06-06 |
| [#648](https://github.com/ROCm/FlyDSL/pull/648) | Add layout algebra inference diagnostics | @jhinpan | draft | 2026-06-03 | 2026-06-04 |
| [#568](https://github.com/ROCm/FlyDSL/pull/568) | Auto-discover MLIR ROCm toolkit from rocm-sdk Python wheels | @mgehre-amd | draft | 2026-05-26 | 2026-05-26 |
| [#528](https://github.com/ROCm/FlyDSL/pull/528) | fix: backport manylinux_2_28 wheel build to v0.1.4 (post1 re... | @kiran-thumma | draft | 2026-05-15 | 2026-05-15 |
| [#512](https://github.com/ROCm/FlyDSL/pull/512) | [Optimization]: Replace 'scf.if' with 'arith.select' for vis... | @xudoyuan | draft | 2026-05-12 | 2026-05-13 |
| [#431](https://github.com/ROCm/FlyDSL/pull/431) | Add A16W4 MoE GEMM stage2 kernel (BF16 activations x MXFP4 w... | @apicciau | open | 2026-04-23 | 2026-05-11 |
| [#461](https://github.com/ROCm/FlyDSL/pull/461) | add gfx950 16x16x64 I8 MFMA support to MoE 2-stage GEMM | @yadaish | draft | 2026-04-30 | 2026-04-30 |
| [#405](https://github.com/ROCm/FlyDSL/pull/405) | [Kernel][MI350] GDR prefill K5 vk implementation | @huizzhan | draft | 2026-04-16 | 2026-04-28 |
| [#430](https://github.com/ROCm/FlyDSL/pull/430) | Add RDNA4 MoE WMMA kernel path | @vivienfanghuagood | draft | 2026-04-23 | 2026-04-27 |
| [#424](https://github.com/ROCm/FlyDSL/pull/424) | Add BF16xFP4 MoE GEMM stage1 kernel | @apicciau | draft | 2026-04-21 | 2026-04-21 |
| [#420](https://github.com/ROCm/FlyDSL/pull/420) | Pr/a16wi4 group splitk | @yadaish | draft | 2026-04-21 | 2026-04-21 |
| [#395](https://github.com/ROCm/FlyDSL/pull/395) | Add initial Windows support | @0xDELUXA | draft | 2026-04-13 | 2026-04-16 |
| [#354](https://github.com/ROCm/FlyDSL/pull/354) | Add `hgemm_splitk+allreduce` prologue/epilogue fusion kernel... | @xytpai | draft | 2026-04-07 | 2026-04-08 |
| [#257](https://github.com/ROCm/FlyDSL/pull/257) | [Feature] Add JAX integration for FlyDSL kernels | @wenchenvincent | open | 2026-03-21 | 2026-03-27 |
| [#1003](https://github.com/ROCm/FlyDSL/pull/1003) | [compiler] isolate mutable state across dynamic if branches | @kefan203 | merged | 2026-08-12 | 2026-08-17 |
| [#1014](https://github.com/ROCm/FlyDSL/pull/1014) | [CI] Skip amdgpu repo during manylinux image dnf install | @coderfeli | merged | 2026-08-17 | 2026-08-17 |
| [#990](https://github.com/ROCm/FlyDSL/pull/990) | [fp4_gemm_4wave] MXFP4 GEMM perf optimize | @benenzhu | merged | 2026-08-09 | 2026-08-17 |
| [#930](https://github.com/ROCm/FlyDSL/pull/930) | DSL-ify raw arith float ops in kernels (flash/mla/pa/moe), f... | @xudoyuan | merged | 2026-07-30 | 2026-08-17 |
| [#1004](https://github.com/ROCm/FlyDSL/pull/1004) | [Docs] Elaboration for composite type and storage | @sjfeng1999 | merged | 2026-08-12 | 2026-08-14 |
| [#991](https://github.com/ROCm/FlyDSL/pull/991) | [fix] Resolve normalization-related CI regressions | @cschenjunlin | merged | 2026-08-09 | 2026-08-14 |
| [#996](https://github.com/ROCm/FlyDSL/pull/996) | [Feat] Add fx.num_warp_threads() as constant accessor | @sjfeng1999 | merged | 2026-08-10 | 2026-08-14 |
| [#995](https://github.com/ROCm/FlyDSL/pull/995) | [Expr] Add type-aware extrema and integer ceiling division | @Phil-amd | merged | 2026-08-10 | 2026-08-14 |
| [#1006](https://github.com/ROCm/FlyDSL/pull/1006) | Fix GitHub Pages docs deployment | @gyohuangxin | merged | 2026-08-13 | 2026-08-13 |
| [#1005](https://github.com/ROCm/FlyDSL/pull/1005) | docs: add rocm-docs-core package to requirements | @nhaehnle | merged | 2026-08-12 | 2026-08-13 |
| [#1000](https://github.com/ROCm/FlyDSL/pull/1000) | Use stable torch reference API for a16w16 GFX950 GEMM testin... | @xytpai | merged | 2026-08-12 | 2026-08-13 |
| [#989](https://github.com/ROCm/FlyDSL/pull/989) | CI: upgrade PyTorch images to ROCm 7.14 | @coderfeli | merged | 2026-08-09 | 2026-08-11 |
| [#992](https://github.com/ROCm/FlyDSL/pull/992) | Refactor gfx950 A16W16 GEMM to use the universal kernel | @xytpai | merged | 2026-08-10 | 2026-08-11 |
| [#947](https://github.com/ROCm/FlyDSL/pull/947) | [MoE] Port moe_gemm_2stage (stage1+stage2) to the new fx.* p... | @coderfeli | merged | 2026-08-01 | 2026-08-11 |
| [#982](https://github.com/ROCm/FlyDSL/pull/982) | docs: Update docs style to fit style guide | @peterjunpark | merged | 2026-08-07 | 2026-08-11 |
| [#997](https://github.com/ROCm/FlyDSL/pull/997) | [Kernel]Remove recast iter from sliding window attention ker... | @amd-nprotaso | merged | 2026-08-10 | 2026-08-11 |
| [#981](https://github.com/ROCm/FlyDSL/pull/981) | docs: Update configs for documentation to host on Read the D... | @peterjunpark | merged | 2026-08-07 | 2026-08-11 |
| [#988](https://github.com/ROCm/FlyDSL/pull/988) | Release: bump version to 0.3.1 | @coderfeli | merged | 2026-08-09 | 2026-08-09 |
| [#945](https://github.com/ROCm/FlyDSL/pull/945) | [LLVM][FlyDSL] Bump up LLVM and Adapt FlyDSL to upstream LLV... | @jli-melchior | merged | 2026-07-31 | 2026-08-09 |
| [#985](https://github.com/ROCm/FlyDSL/pull/985) | Optimize megamoe performance | @GwilliamHu | merged | 2026-08-08 | 2026-08-08 |
| [#979](https://github.com/ROCm/FlyDSL/pull/979) | [Kernel] Fix the RDNA3 GEMM grid swizzle and migrate it to t... | @vlluvia | merged | 2026-08-07 | 2026-08-08 |
| [#950](https://github.com/ROCm/FlyDSL/pull/950) | [Perf]optimize the flash attention fp8 performance for gfx95... | @binding7012 | merged | 2026-08-01 | 2026-08-07 |
| [#977](https://github.com/ROCm/FlyDSL/pull/977) | [cleanup] Remove COMPILE_ONLY print from the JIT call path | @zhiding512 | merged | 2026-08-06 | 2026-08-07 |
| [#973](https://github.com/ROCm/FlyDSL/pull/973) | [Fix] Implement integer wrap-around, wide unsigned constants | @sjfeng1999 | merged | 2026-08-06 | 2026-08-06 |
| [#954](https://github.com/ROCm/FlyDSL/pull/954) | BugFix for MegaMoE | @GwilliamHu | merged | 2026-08-02 | 2026-08-06 |
| [#974](https://github.com/ROCm/FlyDSL/pull/974) | [cleanup] Migrate kernels to fx.copy / .llvm_ptr; expand ker... | @coderfeli | merged | 2026-08-06 | 2026-08-06 |
| [#969](https://github.com/ROCm/FlyDSL/pull/969) | [Fix] conv3d fp8: guard padded M rows in the epilogue store | @jiacao-amd | merged | 2026-08-05 | 2026-08-06 |
| [#968](https://github.com/ROCm/FlyDSL/pull/968) | [Feat] Add fx.known_block_size() as constant accessor | @sjfeng1999 | merged | 2026-08-05 | 2026-08-05 |
| [#948](https://github.com/ROCm/FlyDSL/pull/948) | MoE: add a16w mix fused 2-stage kernels (bf16 A × mxfp4/int4... | @coderfeli | merged | 2026-08-01 | 2026-08-05 |
| [#909](https://github.com/ROCm/FlyDSL/pull/909) | [Kernel] Migrate SWA decode to tile programming | @fsx950223 | merged | 2026-07-27 | 2026-08-05 |
| [#967](https://github.com/ROCm/FlyDSL/pull/967) | [gfx1250] Migrate gemm kernels to the stable DSL API | @aoli26 | merged | 2026-08-04 | 2026-08-05 |
| [#933](https://github.com/ROCm/FlyDSL/pull/933) | [Perf] Keep runtime base and static tail separate in add_off... | @Phil-amd | merged | 2026-07-30 | 2026-08-05 |
| [#959](https://github.com/ROCm/FlyDSL/pull/959) | [Perf]opimize moe mxfp4 stage2 perf | @binding7012 | merged | 2026-08-03 | 2026-08-05 |
| [#958](https://github.com/ROCm/FlyDSL/pull/958) | [Feature][Test] Validate gfx1100 LDS and integer WMMA founda... | @skyguan92 | merged | 2026-08-02 | 2026-08-05 |
| [#965](https://github.com/ROCm/FlyDSL/pull/965) | [Enh] Defer kernel lowering to launch time and infer known_b... | @sjfeng1999 | merged | 2026-08-04 | 2026-08-05 |
| [#907](https://github.com/ROCm/FlyDSL/pull/907) | Add stochastic rounding and philox RNG under rocdl | @kashif | merged | 2026-07-26 | 2026-08-05 |
| [#966](https://github.com/ROCm/FlyDSL/pull/966) | [Prune] Remove CDNA blockscale FP8 GEMM | @coderfeli | merged | 2026-08-04 | 2026-08-04 |
| [#961](https://github.com/ROCm/FlyDSL/pull/961) | [Fix] Avoid runtime materialization in compile-only mode | @zhiding512 | merged | 2026-08-03 | 2026-08-04 |
| [#964](https://github.com/ROCm/FlyDSL/pull/964) | [Build] Default CMAKE_BUILD_TYPE to RelWithDebInfo when unse... | @sjfeng1999 | merged | 2026-08-04 | 2026-08-04 |
| [#894](https://github.com/ROCm/FlyDSL/pull/894) | [Kernel][MI350] Add 8 wave GQA sliding-window attention kern... | @amd-nprotaso | merged | 2026-07-23 | 2026-08-04 |
| [#963](https://github.com/ROCm/FlyDSL/pull/963) | [gfx1250] Refactor LDS copy ops and unify A8W8 GEMM kernels | @aoli26 | merged | 2026-08-04 | 2026-08-04 |
| [#952](https://github.com/ROCm/FlyDSL/pull/952) | Feat: Add flydsl-lsp-server for FlyDSL .mlir editor support. | @Peter9606 | merged | 2026-08-01 | 2026-08-03 |
| [#956](https://github.com/ROCm/FlyDSL/pull/956) | [Opt] Lazily materialize static int tuple leaves | @sjfeng1999 | merged | 2026-08-02 | 2026-08-03 |
| [#926](https://github.com/ROCm/FlyDSL/pull/926) | [Bugfix] Resolve reg offset on dynamic add_offset chains | @Phil-amd | merged | 2026-07-30 | 2026-08-01 |
| [#943](https://github.com/ROCm/FlyDSL/pull/943) | [Dialect][Kernel][Perf] Add gfx120x.wmma atom and port the R... | @vlluvia | merged | 2026-07-31 | 2026-08-01 |
| [#919](https://github.com/ROCm/FlyDSL/pull/919) | perf(attention): keep a head's Q-blocks on one XCD in the du... | @JohnQinAMD | merged | 2026-07-28 | 2026-08-01 |
| [#925](https://github.com/ROCm/FlyDSL/pull/925) | [Doc] Define API stability contract | @sjfeng1999 | merged | 2026-07-30 | 2026-07-31 |
| [#876](https://github.com/ROCm/FlyDSL/pull/876) | MegaMoE on Gfx950 | @GwilliamHu | merged | 2026-07-21 | 2026-07-31 |
| [#874](https://github.com/ROCm/FlyDSL/pull/874) | [compiler] carry Python containers through dynamic if/for/wh... | @xudoyuan | merged | 2026-07-20 | 2026-07-30 |
| [#921](https://github.com/ROCm/FlyDSL/pull/921) | [Feat] Add to_llvm_ptr op to convert fly.ptr to llvm.ptr  | @sjfeng1999 | merged | 2026-07-29 | 2026-07-30 |
| [#913](https://github.com/ROCm/FlyDSL/pull/913) | Port GEMM/MoE/conv kernels to the layout API | @coderfeli | merged | 2026-07-27 | 2026-07-30 |
| [#899](https://github.com/ROCm/FlyDSL/pull/899) | [fix] Autotuner: propagate the tuned function's return value | @aryaman-gupta | merged | 2026-07-24 | 2026-07-29 |
| [#916](https://github.com/ROCm/FlyDSL/pull/916) | [Enh] Add rounding-mode control for float-to-float casts | @sjfeng1999 | merged | 2026-07-28 | 2026-07-28 |
| [#915](https://github.com/ROCm/FlyDSL/pull/915) | [ROCDL] Add arch-aware universal s_waitcnt | @sjfeng1999 | merged | 2026-07-28 | 2026-07-28 |
| [#905](https://github.com/ROCm/FlyDSL/pull/905) | [perf]optimize flash attention fp8 for gfx950 | @binding7012 | merged | 2026-07-26 | 2026-07-28 |
| [#911](https://github.com/ROCm/FlyDSL/pull/911) | [Doc] document fast-math flags in the arithmetic_types | @sjfeng1999 | merged | 2026-07-27 | 2026-07-27 |
| [#908](https://github.com/ROCm/FlyDSL/pull/908) | [Prune] Move arch-specific FP8 type selection to kernels_com... | @sjfeng1999 | merged | 2026-07-27 | 2026-07-27 |
| [#844](https://github.com/ROCm/FlyDSL/pull/844) | Add forward LSE output to FlyDSL flash attention kernels | @amd-wsung102 | merged | 2026-07-14 | 2026-07-27 |
| [#902](https://github.com/ROCm/FlyDSL/pull/902) | [Refactor] Align RMSNorm with current FlyDSL kernel style | @jhinpan | merged | 2026-07-24 | 2026-07-27 |
| [#786](https://github.com/ROCm/FlyDSL/pull/786) | [3/5] autotune: add offline config artifacts (#770) | @jhinpan | merged | 2026-07-01 | 2026-07-26 |
| [#892](https://github.com/ROCm/FlyDSL/pull/892) | Refactor mxmoe | @coderfeli | merged | 2026-07-23 | 2026-07-25 |
| [#897](https://github.com/ROCm/FlyDSL/pull/897) | [CI] Make MLIR cache fallback reliable | @Phil-amd | merged | 2026-07-24 | 2026-07-24 |
| [#884](https://github.com/ROCm/FlyDSL/pull/884) | [rmsnorm] Support FP32 weights with FP16/BF16 activations | @jhinpan | merged | 2026-07-22 | 2026-07-24 |
| [#895](https://github.com/ROCm/FlyDSL/pull/895) | [fix] Temporarily quarantine rmsnorm smoothquant on gfx1201 | @cschenjunlin | merged | 2026-07-24 | 2026-07-24 |
| [#820](https://github.com/ROCm/FlyDSL/pull/820) | [Kernel] conv3d: parameterize tile size + add autotuner | @jiacao-amd | merged | 2026-07-08 | 2026-07-24 |
| [#890](https://github.com/ROCm/FlyDSL/pull/890) | [CI] Share MLIR cache across GPU jobs | @Phil-amd | merged | 2026-07-23 | 2026-07-24 |
| [#825](https://github.com/ROCm/FlyDSL/pull/825) | perf(pa tile): readable tile-programming PA decode kernel, m... | @fsx950223 | merged | 2026-07-10 | 2026-07-24 |
| [#885](https://github.com/ROCm/FlyDSL/pull/885) | [gfx1250] Refactor MoE/GEMM kernels with layout/atom API | @aoli26 | merged | 2026-07-23 | 2026-07-24 |
| [#788](https://github.com/ROCm/FlyDSL/pull/788) | autotune: keep CI search opt-in (#770) | @jhinpan | merged | 2026-07-01 | 2026-07-23 |
| [#893](https://github.com/ROCm/FlyDSL/pull/893) | Release: bump version to 0.3.0 | @coderfeli | merged | 2026-07-23 | 2026-07-23 |
| [#880](https://github.com/ROCm/FlyDSL/pull/880) | refactor(expr): move buffer_ops and split gfx1250 mcast poli... | @Phil-amd | merged | 2026-07-22 | 2026-07-23 |
| [#882](https://github.com/ROCm/FlyDSL/pull/882) | Skill: align kernel-authoring with code-cleanup (drop buffer... | @coderfeli | merged | 2026-07-22 | 2026-07-23 |
| [#881](https://github.com/ROCm/FlyDSL/pull/881) | Add FlyDSL kernel code cleanup skill | @coderfeli | merged | 2026-07-22 | 2026-07-22 |
| [#873](https://github.com/ROCm/FlyDSL/pull/873) | Fix Vector list()-iteration hang  | @adityas-amd | merged | 2026-07-18 | 2026-07-22 |
| [#850](https://github.com/ROCm/FlyDSL/pull/850) | [Perf]optimize flydsl flash attention kernel | @binding7012 | merged | 2026-07-14 | 2026-07-22 |
| [#866](https://github.com/ROCm/FlyDSL/pull/866) | Atom 1250 refactor | @coderfeli | merged | 2026-07-16 | 2026-07-21 |
| [#871](https://github.com/ROCm/FlyDSL/pull/871) | [Feat] Export shuffle xor/up/down/idx ops | @sjfeng1999 | merged | 2026-07-17 | 2026-07-21 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-08-17T08:29:20Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-08-15 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-08-14 |
| [#702](https://github.com/ROCm/TransformerEngine/pull/702) | Ifu dev 20260803 v2.18 | @aris134 | open | 2026-08-12 | 2026-08-14 |
| [#676](https://github.com/ROCm/TransformerEngine/pull/676) | Experimental FlyDSL GEMM backend for TE PyTorch (BF16/FP16/F... | @aris134 | open | 2026-07-22 | 2026-08-14 |
| [#649](https://github.com/ROCm/TransformerEngine/pull/649) | [Feat] Added JAX-Triton bridge for ROCm | @AllenFarcas | open | 2026-06-24 | 2026-08-14 |
| [#701](https://github.com/ROCm/TransformerEngine/pull/701) | Fix CK grouped-GEMM fallback for fused wgrad accumulation (B... | @sudhu2k | open | 2026-08-11 | 2026-08-14 |
| [#704](https://github.com/ROCm/TransformerEngine/pull/704) | [TE] IFU release v2.17 | @AllenFarcas | draft | 2026-08-13 | 2026-08-13 |
| [#697](https://github.com/ROCm/TransformerEngine/pull/697) | Integrate MXFP4 hipblaslt GEMM support | @VeeraRajasekhar | open | 2026-08-07 | 2026-08-12 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | draft | 2026-08-06 | 2026-08-12 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-08-12 |
| [#678](https://github.com/ROCm/TransformerEngine/pull/678) | [ROCm] Jax Add softmax sink (learnable off-by-one) support f... | @shurale-nkn | open | 2026-07-24 | 2026-08-12 |
| [#625](https://github.com/ROCm/TransformerEngine/pull/625) | Add ROCm HIP small-seq fused attention via crossattn_hip_ker... | @VeeraRajasekhar | open | 2026-06-15 | 2026-08-11 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | [proof-of-concept] benchmarks dashboard | @matthiasdiener | draft | 2026-07-14 | 2026-08-11 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-08-05 |
| [#618](https://github.com/ROCm/TransformerEngine/pull/618) | Refactored reduction kernels | @Micky774 | open | 2026-06-08 | 2026-08-05 |
| [#603](https://github.com/ROCm/TransformerEngine/pull/603) | TE AITER gfx1250 integration WIP | @Micky774 | open | 2026-05-29 | 2026-08-04 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | draft | 2026-07-07 | 2026-08-03 |
| [#683](https://github.com/ROCm/TransformerEngine/pull/683) | Updated AITER/QoLA | @Micky774 | open | 2026-07-28 | 2026-07-31 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-07-31 |
| [#679](https://github.com/ROCm/TransformerEngine/pull/679) | microbenchmarks: usv implementation | @matthiasdiener | draft | 2026-07-24 | 2026-07-24 |
| [#673](https://github.com/ROCm/TransformerEngine/pull/673) | ci: bump te-rocm-wheels artifact retention 1d -> 5d | @wenchenvincent | open | 2026-07-17 | 2026-07-23 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-07-21 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-07-08 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-07-01 |
| [#655](https://github.com/ROCm/TransformerEngine/pull/655) | Ipanfilo/aiter split kv fwd | @ipanfilo | draft | 2026-06-29 | 2026-06-29 |
| [#620](https://github.com/ROCm/TransformerEngine/pull/620) | [FEAT] Microbenchmark add visualization | @Micky774 | open | 2026-06-08 | 2026-06-25 |
| [#614](https://github.com/ROCm/TransformerEngine/pull/614) | Incorporate statistical significance testing to benchmarks | @Micky774 | open | 2026-06-08 | 2026-06-23 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-06-25 |
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
| [#515](https://github.com/ROCm/TransformerEngine/pull/515) | NVFP4: hadamard_transform_cast_fusion_columnwise | @matthiasdiener | draft | 2026-04-01 | 2026-04-20 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-04-07 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-04-07 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-04-07 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-04-07 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-04-07 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-04-07 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-04-07 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-04-07 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-04-07 |
| [#689](https://github.com/ROCm/TransformerEngine/pull/689) | Honor timeout settings in subprocess run wrapper | @ipanfilo | merged | 2026-08-01 | 2026-08-14 |
| [#677](https://github.com/ROCm/TransformerEngine/pull/677) | microbenchmarks: add buffer rotation option | @matthiasdiener | merged | 2026-07-23 | 2026-08-14 |
| [#698](https://github.com/ROCm/TransformerEngine/pull/698) | gfx942-only build bugfix and kittens refactor | @alextmagro | merged | 2026-08-08 | 2026-08-14 |
| [#699](https://github.com/ROCm/TransformerEngine/pull/699) | [Fix] add rocm10 te core package support | @GeneDer | merged | 2026-08-10 | 2026-08-13 |
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
| [#640](https://github.com/ROCm/TransformerEngine/pull/640) | PR #613 Hot Fix | @aris134 | merged | 2026-06-19 | 2026-06-22 |
| [#626](https://github.com/ROCm/TransformerEngine/pull/626) | Add gfx1250 support to CK tile group GEMM | @aris134 | merged | 2026-06-16 | 2026-06-21 |
| [#638](https://github.com/ROCm/TransformerEngine/pull/638) | gfx1250: add (lightly-optimized) Triton GMM config | @matthiasdiener | merged | 2026-06-18 | 2026-06-20 |
| [#632](https://github.com/ROCm/TransformerEngine/pull/632) | Introduce a fused padding + cast transpose kernel grouped li... | @alextmagro | merged | 2026-06-17 | 2026-06-20 |
| [#627](https://github.com/ROCm/TransformerEngine/pull/627) | gfx1250 mxfp8 gemm: loosen restrictions on K | @matthiasdiener | merged | 2026-06-16 | 2026-06-19 |
| [#635](https://github.com/ROCm/TransformerEngine/pull/635) | Butterfly all reduce for warp level reductions | @alextmagro | merged | 2026-06-18 | 2026-06-19 |
| [#598](https://github.com/ROCm/TransformerEngine/pull/598) | Mxfp8 grouped and multi quantize | @alextmagro | merged | 2026-05-27 | 2026-06-19 |
| [#633](https://github.com/ROCm/TransformerEngine/pull/633) | Ipanfilo/port fixes to 212 | @ipanfilo | merged | 2026-06-17 | 2026-06-19 |
| [#613](https://github.com/ROCm/TransformerEngine/pull/613) | CK MXFP8 Group Gemm gfx1250 Enablement | @aris134 | merged | 2026-06-08 | 2026-06-17 |
| [#610](https://github.com/ROCm/TransformerEngine/pull/610) | microbenchmarks: add kernel profiling option | @matthiasdiener | merged | 2026-06-03 | 2026-06-17 |
| [#623](https://github.com/ROCm/TransformerEngine/pull/623) | Fix fused cross-entropy backward with broadcasted grad_outpu... | @sudhu2k | merged | 2026-06-12 | 2026-06-16 |
| [#608](https://github.com/ROCm/TransformerEngine/pull/608) | Updated test logging and timeouts | @Micky774 | merged | 2026-06-02 | 2026-06-15 |
| [#615](https://github.com/ROCm/TransformerEngine/pull/615) | [Fix] TE RMSNorm Triton Kernel Optimization | @AllenFarcas | merged | 2026-06-08 | 2026-06-15 |
| [#605](https://github.com/ROCm/TransformerEngine/pull/605) | add MXFP8 pre-swizzling for gfx1250 GEMM (#568) | @matthiasdiener | merged | 2026-06-01 | 2026-06-15 |
| [#582](https://github.com/ROCm/TransformerEngine/pull/582) | CK JIT integration | @ipanfilo | merged | 2026-05-11 | 2026-06-14 |
| [#611](https://github.com/ROCm/TransformerEngine/pull/611) | rocm-ci: scope test container to pod-allocated GPUs | @okakarpa | merged | 2026-06-04 | 2026-06-11 |
| [#617](https://github.com/ROCm/TransformerEngine/pull/617) | CK FA Minor Refactor | @Micky774 | merged | 2026-06-08 | 2026-06-11 |
| [#594](https://github.com/ROCm/TransformerEngine/pull/594) | Fix CK FP8 grouped GEMM dtype gating for columnwise operands | @aris134 | merged | 2026-05-21 | 2026-06-10 |
| [#621](https://github.com/ROCm/TransformerEngine/pull/621) | Fix hipBLASLt GEMM algo cache misses caused by uninitialized... | @sudhu2k | merged | 2026-06-09 | 2026-06-09 |
| [#587](https://github.com/ROCm/TransformerEngine/pull/587) | MXFP8 training bug fixes for quantized_model_init and Torch ... | @sudhu2k | merged | 2026-05-15 | 2026-06-09 |
| [#604](https://github.com/ROCm/TransformerEngine/pull/604) | Ipanfilo/jax0.9 support | @ipanfilo | merged | 2026-06-01 | 2026-06-09 |
| [#619](https://github.com/ROCm/TransformerEngine/pull/619) | FIX Microbenchmark per-sample export | @Micky774 | merged | 2026-06-08 | 2026-06-09 |
| [#592](https://github.com/ROCm/TransformerEngine/pull/592) | speed up nvte_multi_padding / nvte_multi_unpadding | @matthiasdiener | merged | 2026-05-20 | 2026-06-07 |
| [#448](https://github.com/ROCm/TransformerEngine/pull/448) | Added initial AI Agent instructions and skills | @Micky774 | merged | 2026-02-12 | 2026-06-05 |
| [#607](https://github.com/ROCm/TransformerEngine/pull/607) | Moves to ROCm hosted QoLA | @Micky774 | merged | 2026-06-02 | 2026-06-03 |
| [#574](https://github.com/ROCm/TransformerEngine/pull/574) | ck_tile grouped gemm: more padding options | @matthiasdiener | merged | 2026-05-05 | 2026-06-03 |
| [#593](https://github.com/ROCm/TransformerEngine/pull/593) | Triton RMSNorm Optimizations | @Micky774 | merged | 2026-05-20 | 2026-06-02 |
| [#557](https://github.com/ROCm/TransformerEngine/pull/557) | IFU v2.14.dev0 | @ipanfilo | merged | 2026-04-21 | 2026-06-02 |
| [#478](https://github.com/ROCm/TransformerEngine/pull/478) | Microbenchmarking, Torch+CSV-based | @matthiasdiener | merged | 2026-03-10 | 2026-06-02 |
| [#586](https://github.com/ROCm/TransformerEngine/pull/586) | Optimized rocm specific multicast transpose kernel | @alextmagro | merged | 2026-05-14 | 2026-06-01 |
| [#601](https://github.com/ROCm/TransformerEngine/pull/601) | Install: use setuptools bdist_wheel; CI: call pytest as modu... | @ipanfilo | merged | 2026-05-29 | 2026-05-30 |
| [#596](https://github.com/ROCm/TransformerEngine/pull/596) | Add timeout to distributed torch tests to fail on hang | @ipanfilo | merged | 2026-05-26 | 2026-05-30 |
| [#597](https://github.com/ROCm/TransformerEngine/pull/597) | [tests/cpp] register source files as dependencies to rebuild... | @matthiasdiener | merged | 2026-05-26 | 2026-05-29 |
| [#595](https://github.com/ROCm/TransformerEngine/pull/595) | PR583 hot fix | @aris134 | merged | 2026-05-21 | 2026-05-23 |
| [#578](https://github.com/ROCm/TransformerEngine/pull/578) | CK Tile MXFP8 Group GEMM gfx1250 | @aris134 | merged | 2026-05-06 | 2026-05-21 |
| [#576](https://github.com/ROCm/TransformerEngine/pull/576) | CK Tile Group GEMM gfx1250 | @aris134 | merged | 2026-05-06 | 2026-05-21 |
| [#568](https://github.com/ROCm/TransformerEngine/pull/568) | add MXFP8 pre-swizzling for gfx1250 GEMM | @matthiasdiener | merged | 2026-04-29 | 2026-05-21 |
| [#538](https://github.com/ROCm/TransformerEngine/pull/538) | NV upstream release 2.12 merge | @Micky774 | merged | 2026-04-13 | 2026-05-21 |
