# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-08-30T13:22:31Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#194897](https://github.com/pytorch/pytorch/pull/194897) | [DO NOT MERGE][ROCm][CI] : Test DIND CPU isolation | @pelumi1163 | draft | 2026-08-26 | 2026-08-30 |
| [#174241](https://github.com/pytorch/pytorch/pull/174241) | [MPS] Fix conv backward to preserve input memory format | @imperatormk | open | 2026-02-03 | 2026-08-30 |
| [#195107](https://github.com/pytorch/pytorch/pull/195107) | Preserve submodule names in torch::nn::Sequential::clone() | @egeboy35 | open | 2026-08-28 | 2026-08-30 |
| [#194892](https://github.com/pytorch/pytorch/pull/194892) | [Test] Refactor `test_python_dispatch.py` to separate device... | @BBBela | draft | 2026-08-26 | 2026-08-30 |
| [#194787](https://github.com/pytorch/pytorch/pull/194787) | grid_sample: support mode='bicubic' with 5-D input, includin... | @vboussot | open | 2026-08-25 | 2026-08-30 |
| [#193950](https://github.com/pytorch/pytorch/pull/193950) | [Test] Refactor test/functorch/test_leaf_function.py and add... | @tszulist-hbn | draft | 2026-08-18 | 2026-08-30 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-08-30 |
| [#187750](https://github.com/pytorch/pytorch/pull/187750) | Tune all_gather_offset for skewed buckets | @kwen2501 | open | 2026-06-20 | 2026-08-30 |
| [#195310](https://github.com/pytorch/pytorch/pull/195310) | Update inductor expected accuracy files | @pytorchbot | open | 2026-08-30 | 2026-08-30 |
| [#195301](https://github.com/pytorch/pytorch/pull/195301) | Add BF16x9 precision mode for CUDA FP32 matmul | @drisspg | draft | 2026-08-29 | 2026-08-30 |
| [#194854](https://github.com/pytorch/pytorch/pull/194854) | Bake CUDA graph annotations into the chrome trace, retiring ... | @ngimel | open | 2026-08-26 | 2026-08-30 |
| [#195318](https://github.com/pytorch/pytorch/pull/195318) | Profiler: annotate NCCL batch_isend_irecv | @zupengwang | open | 2026-08-30 | 2026-08-30 |
| [#188114](https://github.com/pytorch/pytorch/pull/188114) | [ROCm] Fix CK SDPA flash attention on gfx1200/gfx1201 (RDNA4... | @poad42 | open | 2026-06-24 | 2026-08-30 |
| [#190034](https://github.com/pytorch/pytorch/pull/190034) | inductor: Fall back to ATen for torch.cat with symbolic non-... | @Tejas-Raj01 | open | 2026-07-15 | 2026-08-30 |
| [#195236](https://github.com/pytorch/pytorch/pull/195236) | [triton hash update] update the pinned triton hash | @pytorchupdatebot | open | 2026-08-29 | 2026-08-30 |
| [#194002](https://github.com/pytorch/pytorch/pull/194002) | [torchfuzz][bugfix] Require exact supported-op matches (#194... | @sidt-meta | open | 2026-08-18 | 2026-08-30 |
| [#192524](https://github.com/pytorch/pytorch/pull/192524) | Enable NCCLSymmetricMemory (RCCL) symmetric-memory support o... | @abhilashKaturu | draft | 2026-08-07 | 2026-08-29 |
| [#195299](https://github.com/pytorch/pytorch/pull/195299) | [BE][Ez]: Removes double probes in STL collections | @Skylion007 | open | 2026-08-29 | 2026-08-29 |
| [#188316](https://github.com/pytorch/pytorch/pull/188316) | [ROCm] Cap HIP stream pool per priority; add reservable stre... | @jeffdaily | open | 2026-06-27 | 2026-08-29 |
| [#194309](https://github.com/pytorch/pytorch/pull/194309) | [Inductor] Add gfx950 FlyDSL FlexAttention forward | @jiacao-amd | open | 2026-08-21 | 2026-08-29 |
| [#194123](https://github.com/pytorch/pytorch/pull/194123) | [DO NOT MERGE][ROCm] Test parallelism's impact on test run t... | @zjliu-amd | draft | 2026-08-19 | 2026-08-29 |
| [#194534](https://github.com/pytorch/pytorch/pull/194534) | [aot_autograd] Replay an input mutation the way it actually ... | @bobrenjc93 | draft | 2026-08-23 | 2026-08-29 |
| [#194488](https://github.com/pytorch/pytorch/pull/194488) | [aot_autograd] Name the forward output when a kept tangent s... | @bobrenjc93 | draft | 2026-08-23 | 2026-08-29 |
| [#194479](https://github.com/pytorch/pytorch/pull/194479) | [aot_autograd] Don't let a non-differentiable output mark it... | @bobrenjc93 | draft | 2026-08-23 | 2026-08-29 |
| [#194455](https://github.com/pytorch/pytorch/pull/194455) | [precompile] Test that a custom op captures where an aliased... | @bobrenjc93 | draft | 2026-08-22 | 2026-08-29 |
| [#194393](https://github.com/pytorch/pytorch/pull/194393) | [precompile] Report a guard that rebuilds into a different c... | @bobrenjc93 | draft | 2026-08-21 | 2026-08-29 |
| [#194390](https://github.com/pytorch/pytorch/pull/194390) | [precompile] Read the TORCH_VERSION a standalone artifact al... | @bobrenjc93 | draft | 2026-08-21 | 2026-08-29 |
| [#194389](https://github.com/pytorch/pytorch/pull/194389) | [precompile] Check a standalone artifact's inlined source be... | @bobrenjc93 | draft | 2026-08-21 | 2026-08-29 |
| [#193976](https://github.com/pytorch/pytorch/pull/193976) | [dynamo] Guard autocast objects by value rather than identit... | @bobrenjc93 | draft | 2026-08-18 | 2026-08-29 |
| [#193697](https://github.com/pytorch/pytorch/pull/193697) | [dynamo] Make the frame cache safe for concurrent install an... | @bobrenjc93 | draft | 2026-08-15 | 2026-08-29 |
| [#194310](https://github.com/pytorch/pytorch/pull/194310) | Add tiled CUDA kernel for dense 2D transpose copies | @SrijanSuresh | open | 2026-08-21 | 2026-08-29 |
| [#195183](https://github.com/pytorch/pytorch/pull/195183) | Fix stack buffer overflow in libshm Unix socket path handlin... | @jerrymannil | open | 2026-08-28 | 2026-08-29 |
| [#187778](https://github.com/pytorch/pytorch/pull/187778) | Flatten all_to_all_nd copy to fix narrow-row throughput | @kwen2501 | open | 2026-06-20 | 2026-08-29 |
| [#187776](https://github.com/pytorch/pytorch/pull/187776) | Speed up all_gather_offset writes with a shared unrolled cop... | @kwen2501 | open | 2026-06-20 | 2026-08-29 |
| [#191628](https://github.com/pytorch/pytorch/pull/191628) | [inductor][ROCm] Skip GEMM configs where BLOCK_K underfills ... | @leonling-ll | open | 2026-07-30 | 2026-08-29 |
| [#194783](https://github.com/pytorch/pytorch/pull/194783) | [AOTI] Add opt-in stream-to-runtime affinity (#194783) | @bilal | open | 2026-08-25 | 2026-08-29 |
| [#194981](https://github.com/pytorch/pytorch/pull/194981) | [Inductor][ROCm] Support all input layouts in FlyDSL gfx950 ... | @xytpai | open | 2026-08-27 | 2026-08-29 |
| [#194311](https://github.com/pytorch/pytorch/pull/194311) | [cuBLAS] Always eagerly allocate cuBLAS(Lt) workspaces | @eqy | open | 2026-08-21 | 2026-08-29 |
| [#188682](https://github.com/pytorch/pytorch/pull/188682) | Limit ROCm build targets to architectures covered by testing | @abhilashKaturu | open | 2026-07-01 | 2026-08-29 |
| [#194940](https://github.com/pytorch/pytorch/pull/194940) | Reland [ROCm][TunableOp] Surface wildcard GEMM fallbacks and... | @adelesun | open | 2026-08-26 | 2026-08-29 |
| [#190974](https://github.com/pytorch/pytorch/pull/190974) | [Testcase Refactoring][Test] Add hw_classification to elasti... | @xjbanana258 | open | 2026-07-24 | 2026-08-29 |
| [#192193](https://github.com/pytorch/pytorch/pull/192193) | [ROCm] Reject unregistered host pointers in getDeviceFromPtr | @liminfei-amd | open | 2026-08-05 | 2026-08-29 |
| [#191062](https://github.com/pytorch/pytorch/pull/191062) | [ROCm] Use flattened literal OCKL path for ROCm device kerne... | @apakbin | open | 2026-07-24 | 2026-08-29 |
| [#195229](https://github.com/pytorch/pytorch/pull/195229) | Drop dead paths from tools/ dev scripts | @cyyever | open | 2026-08-28 | 2026-08-29 |
| [#191493](https://github.com/pytorch/pytorch/pull/191493) | [DO NOT MERGE][ROCm][CI] MI350: cap Inductor compile-worker ... | @amdfaa | open | 2026-07-29 | 2026-08-29 |
| [#192898](https://github.com/pytorch/pytorch/pull/192898) | [ROCm][TunableOp] Surface wildcard GEMM fallbacks and fix hi... | @adelesun | open | 2026-08-11 | 2026-08-29 |
| [#195022](https://github.com/pytorch/pytorch/pull/195022) | [inductor][eager] Resolve which distribution provides the im... | @naromero77amd | open | 2026-08-27 | 2026-08-29 |
| [#194471](https://github.com/pytorch/pytorch/pull/194471) | [ROCm][inductor] Fix Inductor compiler selection for ROCm on... | @arsic3 | open | 2026-08-22 | 2026-08-29 |
| [#190711](https://github.com/pytorch/pytorch/pull/190711) | [ROCm] Enable TF32 for MIOpen convolution | @dnikolaev-amd | draft | 2026-07-21 | 2026-08-28 |
| [#191166](https://github.com/pytorch/pytorch/pull/191166) | [ROCm][inductor] gfx1250 TDM support | @glen-amd | open | 2026-07-27 | 2026-08-28 |
| [#177961](https://github.com/pytorch/pytorch/pull/177961) | [ROCm] Enable native AsyncTP | @chinmaydk99 | draft | 2026-03-20 | 2026-08-28 |
| [#194704](https://github.com/pytorch/pytorch/pull/194704) | [inductor] AOTI cpp wrapper: keep a nested region's Inductor... | @zoranzhao | open | 2026-08-25 | 2026-08-28 |
| [#193185](https://github.com/pytorch/pytorch/pull/193185) | [ROCm][CI] Add rocm-preview nightly manywheel build (TheRock... | @ethanwee1 | draft | 2026-08-12 | 2026-08-28 |
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
Repo: `jax-ml/jax` | Last collected: 2026-08-30T13:22:37Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#40304](https://github.com/jax-ml/jax/pull/40304) | [ROCm] Add Python 3.15 to the ROCm CI matrices | @mminutoli | open | 2026-08-28 | 2026-08-28 |
| [#40215](https://github.com/jax-ml/jax/pull/40215) | [ROCm] Replace rocm-smi with amd-smi in CI diagnostics | @gulsumgudukbay | merged | 2026-08-25 | 2026-08-27 |
| [#40173](https://github.com/jax-ml/jax/pull/40173) |  [ROCm] Switch the ROCm CI flows from 7.14 to 10.0 | @magaonka-amd | merged | 2026-08-24 | 2026-08-26 |
| [#40225](https://github.com/jax-ml/jax/pull/40225) | Switch ROCm RBE to linux_x64_gpu_do_gfx950 pool | @charleshofer | merged | 2026-08-26 | 2026-08-26 |
| [#39848](https://github.com/jax-ml/jax/pull/39848) | [ROCm] Reenble previously skipped pallas tests | @amd-jianli12 | open | 2026-08-10 | 2026-08-26 |
| [#40076](https://github.com/jax-ml/jax/pull/40076) | [ROCm] Take the wheel metadata ROCm version from the build c... | @gulsumgudukbay | merged | 2026-08-18 | 2026-08-25 |
| [#40131](https://github.com/jax-ml/jax/pull/40131) | Remove dynamic discovery of unknown rocm wheels. | @copybara-service[bot] | merged | 2026-08-21 | 2026-08-23 |
| [#39846](https://github.com/jax-ml/jax/pull/39846) | [DO NOT MERGE]Enable previously skipped unit tests on ROCm p... | @magaonka-amd | draft | 2026-08-10 | 2026-08-20 |
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
Repo: `vllm-project/vllm` | Last collected: 2026-08-30T13:22:46Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#53598](https://github.com/vllm-project/vllm/pull/53598) | [ROCm][DSpark][DCP] Serve prefix cache hits under DCP for Ki... | @YukioZzz | open | 2026-08-24 | 2026-08-30 |
| [#51705](https://github.com/vllm-project/vllm/pull/51705) | [ROCm][DSpark][DCP] Support decode context parallelism for K... | @YukioZzz | open | 2026-08-10 | 2026-08-30 |
| [#54129](https://github.com/vllm-project/vllm/pull/54129) | [Model] Support disk-backed (mmap) PLE table for Qwen3.8-Fla... | @Trosfy | open | 2026-08-28 | 2026-08-30 |
| [#53806](https://github.com/vllm-project/vllm/pull/53806) | Add K2-Horizon model support | @tanyuqian | open | 2026-08-25 | 2026-08-30 |
| [#53899](https://github.com/vllm-project/vllm/pull/53899) | Support PLE-Offload for Qwen3.8-Flash-Next  | @peakcrosser7 | open | 2026-08-26 | 2026-08-30 |
| [#52068](https://github.com/vllm-project/vllm/pull/52068) | [KV Offload] Preserve KV event metadata until final residenc... | @mkhazraee | open | 2026-08-12 | 2026-08-30 |
| [#54032](https://github.com/vllm-project/vllm/pull/54032) | [Kernel] Add a FlashInfer SM90 MXFP4 x FP8 fused MoE backend | @zhengd-nv | draft | 2026-08-27 | 2026-08-30 |
| [#52067](https://github.com/vllm-project/vllm/pull/52067) | [KV Offload] Forward ownership in KV cache events | @mkhazraee | open | 2026-08-12 | 2026-08-30 |
| [#54218](https://github.com/vllm-project/vllm/pull/54218) | [Structured Output] Let terminal grammars stop under min_tok... | @arpera | open | 2026-08-28 | 2026-08-30 |
| [#53461](https://github.com/vllm-project/vllm/pull/53461) | [Bugfix] Skip LoRA adapters whose adapter_config.json lacks ... | @AshrafAhmed9 | closed | 2026-08-23 | 2026-08-30 |
| [#53858](https://github.com/vllm-project/vllm/pull/53858) | [Core] Add OTel GenAI semantic convention metrics (dual-emit... | @Shaurya856 | open | 2026-08-26 | 2026-08-30 |
| [#54424](https://github.com/vllm-project/vllm/pull/54424) | [Frontend] Add Responses SSE keepalive | @BigStrongSun | open | 2026-08-30 | 2026-08-30 |
| [#50172](https://github.com/vllm-project/vllm/pull/50172) | [Feature] Qwen3-Next (GDN): mamba_cache_mode="all" prefix ca... | @anuragdutt | draft | 2026-07-28 | 2026-08-30 |
| [#53906](https://github.com/vllm-project/vllm/pull/53906) | [Model] add GLM-5.3-Flash support | @ZJY0516 | open | 2026-08-26 | 2026-08-30 |
| [#54313](https://github.com/vllm-project/vllm/pull/54313) | [Flashinfer] Upgrade Flashinfer version to 0.6.18 | @wzhao18 | open | 2026-08-29 | 2026-08-30 |
| [#50535](https://github.com/vllm-project/vllm/pull/50535) | [ROCm][Perf] Use AITER tuned GEMM for the MoE router gate | @amd-sriram | open | 2026-07-31 | 2026-08-30 |
| [#51309](https://github.com/vllm-project/vllm/pull/51309) | [ROCm][Perf] Skip redundant sparse index remap on non-indexe... | @amd-sriram | open | 2026-08-06 | 2026-08-30 |
| [#51314](https://github.com/vllm-project/vllm/pull/51314) | [ROCm][Perf] Skip cleaning sparse prefill MQA logits | @amd-sriram | open | 2026-08-06 | 2026-08-30 |
| [#51315](https://github.com/vllm-project/vllm/pull/51315) | [ROCm][Perf] Fuse the DSA indexer prologue with AITER | @amd-sriram | open | 2026-08-06 | 2026-08-30 |
| [#53789](https://github.com/vllm-project/vllm/pull/53789) | [ROCm][Perf] Bound the decode paged-MQA-logits sanitize to t... | @amd-sriram | open | 2026-08-25 | 2026-08-30 |
| [#54423](https://github.com/vllm-project/vllm/pull/54423) | [Bugfix][Spec Decode] Honor draft eager mode in MRV2 | @wanghuanjun2113 | open | 2026-08-30 | 2026-08-30 |
| [#53910](https://github.com/vllm-project/vllm/pull/53910) | [Core] Add PROMOTION_LATENCY histogram metric for tiering of... | @zdtsw | open | 2026-08-26 | 2026-08-30 |
| [#53896](https://github.com/vllm-project/vllm/pull/53896) | [Model] Support Qwen3.8-Flash-Next | @peakcrosser7 | open | 2026-08-26 | 2026-08-30 |
| [#54240](https://github.com/vllm-project/vllm/pull/54240) | [KV Connector] Support piecewise prefix loading in MultiConn... | @z-zanez | open | 2026-08-28 | 2026-08-30 |
| [#54210](https://github.com/vllm-project/vllm/pull/54210) | [ROCm] Enable Navi custom paged attention at gqa_ratio 1 and... | @cadamcat | open | 2026-08-28 | 2026-08-30 |
| [#54285](https://github.com/vllm-project/vllm/pull/54285) | [Frontend] Warn when removed guided-decoding fields are pres... | @erdholion | open | 2026-08-28 | 2026-08-30 |
| [#54419](https://github.com/vllm-project/vllm/pull/54419) | [Bugfix][Multimodal] Forward only present RoPE grid kwargs | @AIwork4me | open | 2026-08-30 | 2026-08-30 |
| [#53795](https://github.com/vllm-project/vllm/pull/53795) | [Core][Frontend] Add per-request prefix cache telemetry | @cook1e-0707 | open | 2026-08-25 | 2026-08-30 |
| [#51117](https://github.com/vllm-project/vllm/pull/51117) | [ROCm] Enable shared-expert multi-stream overlap on ROCm | @rbrugaro-amd | draft | 2026-08-05 | 2026-08-30 |
| [#53902](https://github.com/vllm-project/vllm/pull/53902) | [Metrics][KV Offload] Add vllm:kv_offload_cpu_config_info fo... | @amirfr3 | draft | 2026-08-26 | 2026-08-30 |
| [#54417](https://github.com/vllm-project/vllm/pull/54417) | [Perf] Fuse temperature scaling into the sampler's softmax | @Ansh-Karnwal | open | 2026-08-30 | 2026-08-30 |
| [#54416](https://github.com/vllm-project/vllm/pull/54416) | [Bugfix][Spec Decode] Avoid fastsafetensors deadlock for PP ... | @gcanlin | open | 2026-08-30 | 2026-08-30 |
| [#54406](https://github.com/vllm-project/vllm/pull/54406) | [Core] Add execute_model RPC fast path for multiproc executo... | @zhenhantech | open | 2026-08-30 | 2026-08-30 |
| [#53761](https://github.com/vllm-project/vllm/pull/53761) | [Bugfix][Core] Restore constructor-only custom encoder cache... | @waizuichougou | open | 2026-08-25 | 2026-08-30 |
| [#50005](https://github.com/vllm-project/vllm/pull/50005) | [Bugfix][DCP] Fix NVIDIA DeepSeek-V3.2 / GLM-5.2 fused atten... | @foraxe | open | 2026-07-27 | 2026-08-30 |
| [#54196](https://github.com/vllm-project/vllm/pull/54196) | [Bugfix][Frontend] Validate stop_token_ids against vocab siz... | @QwertyJack | merged | 2026-08-28 | 2026-08-30 |
| [#50923](https://github.com/vllm-project/vllm/pull/50923) | [ROCm][CI] Stage H gating | @AndreasKaratzas | closed | 2026-08-03 | 2026-08-30 |
| [#50922](https://github.com/vllm-project/vllm/pull/50922) | [ROCm][CI] Stage G gating | @AndreasKaratzas | draft | 2026-08-03 | 2026-08-30 |
| [#50921](https://github.com/vllm-project/vllm/pull/50921) | [ROCm][CI] Stage F gating | @AndreasKaratzas | draft | 2026-08-03 | 2026-08-30 |
| [#53856](https://github.com/vllm-project/vllm/pull/53856) | [Bugfix][ROCm] Mask paged attention V cache padding | @aoshen02 | open | 2026-08-26 | 2026-08-30 |
| [#54408](https://github.com/vllm-project/vllm/pull/54408) | [CI][ROCm] Avoid redundant image pulls during smoke validati... | @AndreasKaratzas | draft | 2026-08-30 | 2026-08-30 |
| [#52033](https://github.com/vllm-project/vllm/pull/52033) | [Perf][ROCm] Dual-stream decode with hipgraphs | @simondanielsson | merged | 2026-08-12 | 2026-08-30 |
| [#50362](https://github.com/vllm-project/vllm/pull/50362) | [Frontend] Add verbose_json support for MOSS-Transcribe-Diar... | @wskr00 | open | 2026-07-30 | 2026-08-30 |
| [#54405](https://github.com/vllm-project/vllm/pull/54405) | [ROCm][CI] Enable HY-V4 model initialization on ROCm | @AndreasKaratzas | draft | 2026-08-30 | 2026-08-30 |
| [#54404](https://github.com/vllm-project/vllm/pull/54404) | [ROCm][CI] Add attention-sink support to ROCm AITER sparse M... | @AndreasKaratzas | draft | 2026-08-30 | 2026-08-30 |
| [#54403](https://github.com/vllm-project/vllm/pull/54403) | [ROCm][CI] Stabilize the sqrt-softplus top-k tie oracle | @AndreasKaratzas | draft | 2026-08-30 | 2026-08-30 |
| [#54380](https://github.com/vllm-project/vllm/pull/54380) | [Model] Honor cap_pixels_per_frame in Qwen3-VL memory profil... | @dkrisman | merged | 2026-08-29 | 2026-08-30 |
| [#53055](https://github.com/vllm-project/vllm/pull/53055) | [Bugfix][Kernels] Fallback mhc_pre_broadcast to TileLang whe... | @ArjunPakhan | open | 2026-08-20 | 2026-08-30 |
| [#54044](https://github.com/vllm-project/vllm/pull/54044) | [Bugfix] Reset cached Mamba align metadata on profiling tear... | @gcanlin | merged | 2026-08-27 | 2026-08-30 |
| [#51685](https://github.com/vllm-project/vllm/pull/51685) | [Bugfix][Kernel] Take a native fp8 KV cache in TRITON_MLA, a... | @xudonlyu | open | 2026-08-10 | 2026-08-30 |
| [#54191](https://github.com/vllm-project/vllm/pull/54191) | [Attention] Derive Triton split-KV decode threshold from the... | @khanh14ph | open | 2026-08-28 | 2026-08-30 |
| [#46110](https://github.com/vllm-project/vllm/pull/46110) | [ROCm] Detect ROCm via KFD topology when amdsmi cannot enume... | @lhl | open | 2026-06-18 | 2026-08-30 |
| [#53043](https://github.com/vllm-project/vllm/pull/53043) | [Rust Frontend] [Renderer]Fix Kimi K3 reasoning_effort="none... | @reidliu41 | merged | 2026-08-20 | 2026-08-30 |
| [#51321](https://github.com/vllm-project/vllm/pull/51321) | [Rust Frontend] [Perf] Optimize SSE streaming hot path | @reidliu41 | merged | 2026-08-06 | 2026-08-30 |
| [#38434](https://github.com/vllm-project/vllm/pull/38434) | [Fix] Improve ROCm detection in WSL environments | @yiz-liu | merged | 2026-03-28 | 2026-08-30 |
| [#54121](https://github.com/vllm-project/vllm/pull/54121) | [ROCm][DSV4][Perf] Keep C4 decode metadata dense on gfx950 | @Fangzhou-Ai | draft | 2026-08-27 | 2026-08-30 |
| [#54346](https://github.com/vllm-project/vllm/pull/54346) | [Bugfix][Multimodal] Release Qwen2.5-VL and Qwen3-VL RoPE ca... | @waizuichougou | merged | 2026-08-29 | 2026-08-30 |
| [#51171](https://github.com/vllm-project/vllm/pull/51171) | [ROCm][MLA] Reach FULL cudagraphs for AITER MLA speculative ... | @yudigege86 | merged | 2026-08-05 | 2026-08-30 |
| [#54048](https://github.com/vllm-project/vllm/pull/54048) | [Bugfix][MoE] Enable cuBLAS out_dtype router GEMM on all CUD... | @hclsys | merged | 2026-08-27 | 2026-08-30 |
| [#34275](https://github.com/vllm-project/vllm/pull/34275) | [ROCm] Add gfx1100 tile-size heuristic for triton_scaled_mm ... | @monajafi-amd | open | 2026-02-10 | 2026-08-30 |
| [#54171](https://github.com/vllm-project/vllm/pull/54171) | [Bugfix][ROCm][Build] fix profiler hang due to queue interpo... | @simondanielsson | open | 2026-08-28 | 2026-08-29 |
| [#54351](https://github.com/vllm-project/vllm/pull/54351) | [Bugfix][Memory] Fix PYTORCH_ALLOC_CONF in KV-transfer and C... | @ztxing462 | open | 2026-08-29 | 2026-08-29 |
| [#54312](https://github.com/vllm-project/vllm/pull/54312) | [CI][Test] Deflake test_mem.py sleep-mode asserts via alloca... | @okorzh-amd | merged | 2026-08-29 | 2026-08-29 |
| [#53448](https://github.com/vllm-project/vllm/pull/53448) | [ROCm][Perf][MiniMax-M3] Speed up the lightning indexer and ... | @akii96 | open | 2026-08-23 | 2026-08-29 |
| [#45457](https://github.com/vllm-project/vllm/pull/45457) | [Perf] Reuse topk SparseMatrix routing metadata in GPT-OSS M... | @ShengleiFu | merged | 2026-06-12 | 2026-08-29 |
| [#54180](https://github.com/vllm-project/vllm/pull/54180) | fix: enable ROCM_AITER_FA with Eagle3 spec decode | @almaslof | draft | 2026-08-28 | 2026-08-29 |
| [#45144](https://github.com/vllm-project/vllm/pull/45144) | Combined configuration of Multi-Token Prediction (MTP), fp8 ... | @waqahmed-amd-fi | open | 2026-06-10 | 2026-08-29 |
| [#45055](https://github.com/vllm-project/vllm/pull/45055) | [ROCm] Fix AMD build from shuffle mask dtype error while com... | @micah-wil | draft | 2026-06-09 | 2026-08-29 |
| [#50920](https://github.com/vllm-project/vllm/pull/50920) | [ROCm][CI] Stage E gating | @AndreasKaratzas | merged | 2026-08-03 | 2026-08-29 |
| [#51065](https://github.com/vllm-project/vllm/pull/51065) | [Bugfix][MLA] TritonMLA: fix illegal memory access on causal... | @olka-amd | open | 2026-08-04 | 2026-08-29 |
| [#54239](https://github.com/vllm-project/vllm/pull/54239) | [Model] Support speculative decoding method for PLaMo3 | @Alnusjaponica | merged | 2026-08-28 | 2026-08-29 |
| [#50488](https://github.com/vllm-project/vllm/pull/50488) | [Bugfix][Spec Decode] Capture the widest uniform decode batc... | @rchalamala | merged | 2026-07-30 | 2026-08-29 |
| [#54162](https://github.com/vllm-project/vllm/pull/54162) | [Bugfix][MRV2] Release model and KV cache on in-process engi... | @okorzh-amd | merged | 2026-08-28 | 2026-08-29 |
| [#54284](https://github.com/vllm-project/vllm/pull/54284) | [Bugfix][V1] Keep an encoder cache entry until its last occu... | @Hotragn | merged | 2026-08-28 | 2026-08-29 |
| [#54160](https://github.com/vllm-project/vllm/pull/54160) | [Hy4] support Hy4-preview model | @thisjiang | merged | 2026-08-28 | 2026-08-29 |
| [#52367](https://github.com/vllm-project/vllm/pull/52367) | [CI/Build] Use file rendezvous for UniProc loader fixtures | @yu-xin-c | merged | 2026-08-14 | 2026-08-29 |
| [#50858](https://github.com/vllm-project/vllm/pull/50858) | [BugFix] Disable TP for Qwen3-Omni audio encoder when heads ... | @CalvinXKY | merged | 2026-08-03 | 2026-08-29 |
| [#54292](https://github.com/vllm-project/vllm/pull/54292) | [Perf] Pin CPU tensors before non_blocking H2D in three MM p... | @JasonKeyiL | merged | 2026-08-28 | 2026-08-29 |
| [#49925](https://github.com/vllm-project/vllm/pull/49925) | [ROCm] Add TheRock preview docker updates, Keep Python 3.12 ... | @rasmith | open | 2026-07-27 | 2026-08-29 |
| [#52047](https://github.com/vllm-project/vllm/pull/52047) | [Bugfix][AMD] Annotate draft KV cache groups on the hybrid g... | @okorzh-amd | merged | 2026-08-12 | 2026-08-29 |
| [#51358](https://github.com/vllm-project/vllm/pull/51358) | [Bugfix][Mooncake] Save exact Mamba boundary states | @ivanium | merged | 2026-08-07 | 2026-08-29 |
| [#53507](https://github.com/vllm-project/vllm/pull/53507) | [Bugfix][Models] Register sleep-managed runtime buffers | @Ronald1995 | merged | 2026-08-24 | 2026-08-29 |
| [#53324](https://github.com/vllm-project/vllm/pull/53324) | [KV Connector] Support MooncakeStore with hybrid DCP prefix ... | @wzhao18 | merged | 2026-08-21 | 2026-08-29 |
| [#54295](https://github.com/vllm-project/vllm/pull/54295) | [Perf][MLA Sparse] Pin req_id_per_token before non_blocking ... | @JasonKeyiL | merged | 2026-08-29 | 2026-08-29 |
| [#53094](https://github.com/vllm-project/vllm/pull/53094) | [ROCm][Perf] Fuse DSA indexer QK preprocessing with AITER | @sumin-hong | open | 2026-08-20 | 2026-08-29 |
| [#36743](https://github.com/vllm-project/vllm/pull/36743) | [ROCm] Optimize concat_mla_q for CDNA3 (MI300X) and CDNA4 (M... | @andyluo7 | open | 2026-03-11 | 2026-08-29 |
| [#38647](https://github.com/vllm-project/vllm/pull/38647) | Add opt-in `--record-power` option to `vllm bench serve` | @fxmarty-amd | open | 2026-03-31 | 2026-08-29 |
| [#53528](https://github.com/vllm-project/vllm/pull/53528) | [Rust Frontend] Take the raw buffer in mm tensor lowering wh... | @roachsinai | merged | 2026-08-24 | 2026-08-29 |
| [#53253](https://github.com/vllm-project/vllm/pull/53253) | [Bugfix][Distributed] Gate cross-node MNNVL custom all-reduc... | @JulianZJN | merged | 2026-08-21 | 2026-08-29 |
| [#53008](https://github.com/vllm-project/vllm/pull/53008) | [Bugfix] Fix ncclCommQueryProperties heap overflow with NCCL... | @Xuan-1998 | merged | 2026-08-19 | 2026-08-29 |
| [#48584](https://github.com/vllm-project/vllm/pull/48584) | [Rust Frontend] Add support for `truncate_prompt_tokens` and... | @pranavthakur0-0 | merged | 2026-07-14 | 2026-08-29 |
| [#54271](https://github.com/vllm-project/vllm/pull/54271) | [CI][Test] Deflake the rms_norm scaling-property assertions | @okorzh-amd | merged | 2026-08-28 | 2026-08-29 |
| [#52963](https://github.com/vllm-project/vllm/pull/52963) | [ROCm][Perf][MiniMax-M3] Optimize sparse GQA prefill attenti... | @akii96 | open | 2026-08-19 | 2026-08-28 |
| [#53293](https://github.com/vllm-project/vllm/pull/53293) | [Bugfix] Set breakable graph env before Ray actor import | @alexeldeib | merged | 2026-08-21 | 2026-08-28 |
| [#52849](https://github.com/vllm-project/vllm/pull/52849) | [ROCm][PERF] Enable AITER PA gluon decode for MiniMax-M3 MTP... | @ukannika | merged | 2026-08-19 | 2026-08-28 |
| [#54263](https://github.com/vllm-project/vllm/pull/54263) | [CI/Build] Add advisory PR title format check | @BugenZhao | merged | 2026-08-28 | 2026-08-28 |
| [#54249](https://github.com/vllm-project/vllm/pull/54249) | [ROCm][CI] Fix test_ray_v2_executor | @charlifu | merged | 2026-08-28 | 2026-08-28 |
| [#54152](https://github.com/vllm-project/vllm/pull/54152) | [Bugfix] Keep the Moondream3 MoE all-reduce out of the fused... | @okorzh-amd | merged | 2026-08-28 | 2026-08-28 |
| [#54247](https://github.com/vllm-project/vllm/pull/54247) | [Bugfix][ROCm] Pre-allocate `wvSplitKrc` static workspaces b... | @njhill | merged | 2026-08-28 | 2026-08-28 |
| [#45916](https://github.com/vllm-project/vllm/pull/45916) | [Perf][Kernel][ROCm] Add Triton split-KV paged decode fallba... | @feiyehua | open | 2026-06-17 | 2026-08-28 |
| [#34741](https://github.com/vllm-project/vllm/pull/34741) | [ROCm] Enable FP8 KV-cache and relax constraints for RDNA4 c... | @laudney | open | 2026-02-17 | 2026-08-28 |
| [#53628](https://github.com/vllm-project/vllm/pull/53628) | [BugFix][ROCM] DFlash2 fix sliding-window prefix attention N... | @jennyyyyzhen | open | 2026-08-24 | 2026-08-28 |
| [#39640](https://github.com/vllm-project/vllm/pull/39640) | [ROCm] Use unified decode fallback for sliding-window AITER ... | @Bortlesboat | open | 2026-04-12 | 2026-08-28 |
| [#53141](https://github.com/vllm-project/vllm/pull/53141) | [ROCm] remove VLLM_ROCM_USE_AITER_FP4_ASM_GEMM environment v... | @afriedri | merged | 2026-08-20 | 2026-08-28 |
| [#54111](https://github.com/vllm-project/vllm/pull/54111) | [Bugfix] Remove race in fused groupwise RMSNorm quantization | @mgoin | merged | 2026-08-27 | 2026-08-28 |
| [#50212](https://github.com/vllm-project/vllm/pull/50212) | [ROCm][Perf] Extend QK-norm/RoPE/KV-cache fusion to MRoPE | @vorapolsiloai | open | 2026-07-29 | 2026-08-28 |
| [#53721](https://github.com/vllm-project/vllm/pull/53721) | [ROCm][Connector]: SWA+HMA-support in MoRI-IO connector (Gem... | @simondanielsson | open | 2026-08-25 | 2026-08-28 |
| [#53097](https://github.com/vllm-project/vllm/pull/53097) | [ROCm][Quantization][MOE] Enable fused shared experts for bl... | @xuebwang-amd | merged | 2026-08-20 | 2026-08-28 |
| [#47553](https://github.com/vllm-project/vllm/pull/47553) | [ROCm][NVFP4] flydsl NVFP4 MOE kernel for gfx950/gfx942 (MI3... | @fxmarty-amd | open | 2026-07-03 | 2026-08-28 |
| [#53695](https://github.com/vllm-project/vllm/pull/53695) | [ROCm][Feature] Support KV connectors with ROCM_AITER_UNIFIE... | @simondanielsson | open | 2026-08-25 | 2026-08-28 |
| [#48247](https://github.com/vllm-project/vllm/pull/48247) | [Perf][ROCm] Add AITER custom AG/RS | @simondanielsson | open | 2026-07-10 | 2026-08-28 |
| [#51369](https://github.com/vllm-project/vllm/pull/51369) | [ROCm] [CI] Grant host access to VMM allocations in sleep-mo... | @xiaohong42 | open | 2026-08-07 | 2026-08-28 |
| [#46186](https://github.com/vllm-project/vllm/pull/46186) | [ROCm] Enable RDNA3 W4A16 GEMM kernels on gfx1151 (Strix Hal... | @lhl | open | 2026-06-19 | 2026-08-28 |
| [#44400](https://github.com/vllm-project/vllm/pull/44400) | [ROCm][Perf] Enable W4A16 FlyDSL MoE | @amd-asalykov | merged | 2026-06-03 | 2026-08-28 |
| [#53594](https://github.com/vllm-project/vllm/pull/53594) | [ROCm][CI] Warm up the RLHF dev server before the pause/resu... | @stefankoncarevic | merged | 2026-08-24 | 2026-08-28 |
| [#52545](https://github.com/vllm-project/vllm/pull/52545) | [Bugfix][CI/Build] Fail closed when selected precompiled CUD... | @jungjiyu | merged | 2026-08-16 | 2026-08-28 |
| [#53591](https://github.com/vllm-project/vllm/pull/53591) | [ROCm][CI] Keep startup profiling from aborting when free me... | @stefankoncarevic | merged | 2026-08-24 | 2026-08-28 |
| [#54023](https://github.com/vllm-project/vllm/pull/54023) | [Bugfix] Revert renderer warmup overlap to avoid fork deadlo... | @khluu | merged | 2026-08-27 | 2026-08-28 |
| [#53183](https://github.com/vllm-project/vllm/pull/53183) | [Model Runner V2] Use MRV2 for all models by default | @njhill | merged | 2026-08-21 | 2026-08-27 |
| [#53540](https://github.com/vllm-project/vllm/pull/53540) | [ROCm][Perf] Fuse SWA q/kv RMSNorm and q FP8 group quant for... | @shen-shanshan | merged | 2026-08-24 | 2026-08-27 |
| [#53949](https://github.com/vllm-project/vllm/pull/53949) | [Rocm][CI] add dockerfile.xpu to rocm ci artifact | @charlifu | merged | 2026-08-26 | 2026-08-27 |
| [#53396](https://github.com/vllm-project/vllm/pull/53396) | [Kimi K3][Kernel] Support DS conv-state layout in fused KDA ... | @gcanlin | merged | 2026-08-22 | 2026-08-27 |
| [#53641](https://github.com/vllm-project/vllm/pull/53641) | [AMD][BugFix] Add gpu_sync_allowed to ROCm AITER FA backend | @rasmith | merged | 2026-08-24 | 2026-08-27 |
| [#51040](https://github.com/vllm-project/vllm/pull/51040) | [ROCm][K3] Extend FP8 asm MLA prefill to non-divisor small h... | @xiaohuguo2023 | merged | 2026-08-04 | 2026-08-26 |
| [#53698](https://github.com/vllm-project/vllm/pull/53698) | [Bugfix][ROCm][Disagg] Fix MoRIIO shared KV memory region re... | @avininjamay8 | merged | 2026-08-25 | 2026-08-26 |
| [#53838](https://github.com/vllm-project/vllm/pull/53838) | [ROCm][DSV4][Perf] Fuse DeepSeek V4 C4 compressor GEMMs | @Fangzhou-Ai | merged | 2026-08-26 | 2026-08-26 |
| [#53818](https://github.com/vllm-project/vllm/pull/53818) | [Bugfix][ROCm] Capture CUDA graphs on the current stream | @fanxingran | merged | 2026-08-26 | 2026-08-26 |
| [#49600](https://github.com/vllm-project/vllm/pull/49600) | [CI] Build mamba-ssm with C++20 for torch 2.14 nightly compa... | @atalman | merged | 2026-07-23 | 2026-08-26 |
| [#46741](https://github.com/vllm-project/vllm/pull/46741) | [ROCm][Bugfix] Fix HIP fork re-init in multimodal offline ex... | @peizhang56 | merged | 2026-06-25 | 2026-08-23 |
| [#46749](https://github.com/vllm-project/vllm/pull/46749) | [CI][Bugfix] Spawn engine in mm cache sleep test to fix ROCm... | @peizhang56 | merged | 2026-06-25 | 2026-08-23 |
| [#52557](https://github.com/vllm-project/vllm/pull/52557) | [Deprecation] Remove dead use_prefill_decode_attention flag | @brianosaurus | merged | 2026-08-17 | 2026-08-22 |
| [#53182](https://github.com/vllm-project/vllm/pull/53182) | [ROCm] Ship rocprofiler-sdk 1.3.2 in Dockerfile.rocm_base to... | @Rohan138 | merged | 2026-08-21 | 2026-08-22 |
| [#53117](https://github.com/vllm-project/vllm/pull/53117) | [CI/Build][ROCm] Run the TileLang HIP symbol checks in their... | @stefankoncarevic | merged | 2026-08-20 | 2026-08-21 |
| [#53294](https://github.com/vllm-project/vllm/pull/53294) | Revert "[ROCm][Perf] Kimi-K3 Fused kernels for KDA prefill" | @khluu | merged | 2026-08-21 | 2026-08-21 |
| [#53177](https://github.com/vllm-project/vllm/pull/53177) | [ROCm][CI] Add float16 dtype and unsupported head size tests... | @divakar-amd | merged | 2026-08-21 | 2026-08-21 |
| [#52882](https://github.com/vllm-project/vllm/pull/52882) | [ROCm][Perf] Optimize DeepSeek V4 C4A top-k with AITER | @Fangzhou-Ai | merged | 2026-08-19 | 2026-08-21 |
| [#43018](https://github.com/vllm-project/vllm/pull/43018) | [ROCm] Cpu offload for ROCm 7.13+ to align the hipMemcpyBatc... | @hongxiayang | merged | 2026-05-18 | 2026-08-21 |
| [#50803](https://github.com/vllm-project/vllm/pull/50803) | [ROCm] Fix DeepSeek V4 indexer numerics and coverage | @AndreasKaratzas | merged | 2026-08-03 | 2026-08-20 |
| [#51585](https://github.com/vllm-project/vllm/pull/51585) | [ROCm] [Bugfix] Preserve CPU query offsets during capture | @akii96 | merged | 2026-08-09 | 2026-08-20 |
| [#51632](https://github.com/vllm-project/vllm/pull/51632) | [ROCm] [Bugfix] Fix Triton fused shared expert alignment | @akii96 | merged | 2026-08-10 | 2026-08-19 |
| [#44969](https://github.com/vllm-project/vllm/pull/44969) | [ROCm][CI] Gating more ROCm tests | @AndreasKaratzas | merged | 2026-06-09 | 2026-08-18 |
| [#51021](https://github.com/vllm-project/vllm/pull/51021) | [ROCm] Gate Torch FP8 scaled-MM on architecture support | @sstamenk | merged | 2026-08-04 | 2026-08-18 |
| [#52293](https://github.com/vllm-project/vllm/pull/52293) | [ROCm][Perf] Enable fused KDA decode on gfx942 (MI325X) | @mpashkovskii | merged | 2026-08-14 | 2026-08-18 |
| [#51208](https://github.com/vllm-project/vllm/pull/51208) |  [ROCm][AMD][Installation] add LMCache kv-connector installa... | @hongxiayang | merged | 2026-08-05 | 2026-08-17 |
| [#52566](https://github.com/vllm-project/vllm/pull/52566) | [ROCm][CI] Restore Torch defaults and type DSV4 scratch buff... | @AndreasKaratzas | merged | 2026-08-17 | 2026-08-17 |
| [#50729](https://github.com/vllm-project/vllm/pull/50729) | [Bugfix][Mamba] Fix overlapping state copy race | @AndreasKaratzas | merged | 2026-08-02 | 2026-08-17 |
| [#52212](https://github.com/vllm-project/vllm/pull/52212) | [ROCm][DSV4][Perf] Optimize Triton sparse-MLA decode on gfx9... | @Fangzhou-Ai | merged | 2026-08-13 | 2026-08-16 |
| [#49544](https://github.com/vllm-project/vllm/pull/49544) | [ROCm][Perf] gfx942: use FlyDSL fp8 MQA logits kernel (ROCm/... | @akii96 | merged | 2026-07-23 | 2026-08-16 |
| [#51159](https://github.com/vllm-project/vllm/pull/51159) | [ROCm] Defer `tilelang` import through its import `from vllm... | @fxmarty-amd | merged | 2026-08-05 | 2026-08-13 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-08-30T13:22:59Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#36987](https://github.com/sgl-project/sglang/pull/36987) | [Docs] Replace stale diffusion compatibility matrix | @mickqian | open | 2026-08-29 | 2026-08-30 |
| [#34946](https://github.com/sgl-project/sglang/pull/34946) | [KDA] Route Kimi-Linear through native Cake kernels | @yyihuang | open | 2026-08-15 | 2026-08-30 |
| [#37129](https://github.com/sgl-project/sglang/pull/37129) | [Diffusion] Fuse Qwen-Image residual norm and NVFP4 quantiza... | @BBuf | open | 2026-08-30 | 2026-08-30 |
| [#37138](https://github.com/sgl-project/sglang/pull/37138) | [DeepSeek V4] MXFP4 KV cache for the DSV4 serving stack on H... | @TobyMint | open | 2026-08-30 | 2026-08-30 |
| [#37137](https://github.com/sgl-project/sglang/pull/37137) | [Kernel] Fused MXFP4 DSV4 decode attention for SM90 (FlashML... | @TobyMint | open | 2026-08-30 | 2026-08-30 |
| [#37112](https://github.com/sgl-project/sglang/pull/37112) | [Diffusion] Fuse FLUX.2 gated residual normalization on Blac... | @BBuf | open | 2026-08-30 | 2026-08-30 |
| [#37136](https://github.com/sgl-project/sglang/pull/37136) | [Kernels] Add MXFP4 KV cache codec (Triton quantize/dequant) | @TobyMint | open | 2026-08-30 | 2026-08-30 |
| [#37135](https://github.com/sgl-project/sglang/pull/37135) | [JIT] Vendor FlashMLA upstream files for the DSV4 MXFP4 deco... | @TobyMint | open | 2026-08-30 | 2026-08-30 |
| [#36176](https://github.com/sgl-project/sglang/pull/36176) | [kernel] Share the warp vectorized copy and enforce its alig... | @DarkSharpness | open | 2026-08-24 | 2026-08-30 |
| [#37096](https://github.com/sgl-project/sglang/pull/37096) | [Diffusion] Fuse FLUX.2 NVFP4 FC1, SwiGLU, and FC2 quantizat... | @BBuf | open | 2026-08-30 | 2026-08-30 |
| [#37095](https://github.com/sgl-project/sglang/pull/37095) | [HiCache] Drop the parallel KV-event hash chain | @alphabetc1 | open | 2026-08-30 | 2026-08-30 |
| [#36192](https://github.com/sgl-project/sglang/pull/36192) | [diffusion] In-place LoRA merge/unmerge under layerwise offl... | @niehen6174 | open | 2026-08-24 | 2026-08-30 |
| [#35078](https://github.com/sgl-project/sglang/pull/35078) | MXFP4 (E2M1+E8M0) KV cache for Ampere sm86: quantization + f... | @TobyMint | draft | 2026-08-17 | 2026-08-30 |
| [#37134](https://github.com/sgl-project/sglang/pull/37134) | [ROCm] Fix EAGLE spec-decode verify silently sampling greedy... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#34022](https://github.com/sgl-project/sglang/pull/34022) | [Bugfix] Keep speculative mRoPE deltas shaped (B, 1) for mul... | @alivepea | open | 2026-08-07 | 2026-08-30 |
| [#37132](https://github.com/sgl-project/sglang/pull/37132) | [AMD] Fix the QuickReduce bf16 cast failing to build for CDN... | @yctseng0211 | open | 2026-08-30 | 2026-08-30 |
| [#37049](https://github.com/sgl-project/sglang/pull/37049) | [Diffusion] Make component execution options fail closed | @mickqian | merged | 2026-08-29 | 2026-08-30 |
| [#37116](https://github.com/sgl-project/sglang/pull/37116) | [diffusion] perf: absorb Qwen-Image output projection biases | @BBuf | open | 2026-08-30 | 2026-08-30 |
| [#37075](https://github.com/sgl-project/sglang/pull/37075) | [Diffusion][Kernel] Fuse Wan2.2 NVFP4 bias + GELU on Blackwe... | @BBuf | open | 2026-08-30 | 2026-08-30 |
| [#36508](https://github.com/sgl-project/sglang/pull/36508) | [NPU][WIP] Adapt Mimo-v2.5-Pro In 950DT | @iridiumine | open | 2026-08-26 | 2026-08-30 |
| [#37043](https://github.com/sgl-project/sglang/pull/37043) | [vlm] fix: preserve per-request vit graph metadata for qwen-... | @mickqian | merged | 2026-08-29 | 2026-08-30 |
| [#32618](https://github.com/sgl-project/sglang/pull/32618) | [CPU] Add fp8_per_tensor_scaled_mm_cpu kernel | @xinguozhu-2026 | draft | 2026-07-28 | 2026-08-30 |
| [#23823](https://github.com/sgl-project/sglang/pull/23823) | [diffusion] honor SGLANG_DIFFUSION_LOGGING_LEVEL by default | @SiluPanda | open | 2026-04-27 | 2026-08-30 |
| [#33068](https://github.com/sgl-project/sglang/pull/33068) | [AMD] Fuse quantized in_proj layers in Qwen3.5 | @mqhc2020 | open | 2026-07-31 | 2026-08-30 |
| [#35858](https://github.com/sgl-project/sglang/pull/35858) |  [diffusion] Allow Cache-DiT with DiT layerwise offload | @niehen6174 | merged | 2026-08-21 | 2026-08-30 |
| [#35914](https://github.com/sgl-project/sglang/pull/35914) | Fix nullable GLM tool argument parsing | @devpatel511 | open | 2026-08-21 | 2026-08-30 |
| [#34484](https://github.com/sgl-project/sglang/pull/34484) | [ROCm] Fix QuickReduce fp16 saturation corrupting bf16 all-r... | @alexnails | merged | 2026-08-12 | 2026-08-30 |
| [#37133](https://github.com/sgl-project/sglang/pull/37133) | [GLM-5.2] Keep GlmMoeDsa MoE e_score_correction_bias in fp32 | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#36983](https://github.com/sgl-project/sglang/pull/36983) | fix(vlm): recover multimodal decode and processor failures | @mickqian | merged | 2026-08-29 | 2026-08-30 |
| [#37131](https://github.com/sgl-project/sglang/pull/37131) | perf(moe): fuse SwiGLU clamp activation in DeepGEMM | @number-eleven11 | open | 2026-08-30 | 2026-08-30 |
| [#37004](https://github.com/sgl-project/sglang/pull/37004) | [Diffusion] Stream native VAE weights directly to GPU | @mickqian | merged | 2026-08-29 | 2026-08-30 |
| [#35245](https://github.com/sgl-project/sglang/pull/35245) | refactor(unified-memory): translate the KV write location on... | @caihuali95 | open | 2026-08-18 | 2026-08-30 |
| [#35247](https://github.com/sgl-project/sglang/pull/35247) | refactor(unified-memory): route the KV read path through one... | @caihuali95 | open | 2026-08-18 | 2026-08-30 |
| [#34613](https://github.com/sgl-project/sglang/pull/34613) | feat(unified-memory): read unified pool from attention backe... | @caihuali95 | open | 2026-08-12 | 2026-08-30 |
| [#37121](https://github.com/sgl-project/sglang/pull/37121) | ci: pass PR branch name through env, not `${{ }}`, to close ... | @sujeito-operator | open | 2026-08-30 | 2026-08-30 |
| [#37130](https://github.com/sgl-project/sglang/pull/37130) | [AMD] Remove silent x0.85 mem_fraction_static derate for ait... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#37098](https://github.com/sgl-project/sglang/pull/37098) | [Unified Cache] Add device pool assembly for external linker... | @hzh0425 | open | 2026-08-30 | 2026-08-30 |
| [#34602](https://github.com/sgl-project/sglang/pull/34602) | feat(unified-memory): dense KV views for uniform-row MHA/SWA... | @caihuali95 | open | 2026-08-12 | 2026-08-30 |
| [#37124](https://github.com/sgl-project/sglang/pull/37124) | [ROCm] Take the fused DSA metadata kernels and drop redundan... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#37119](https://github.com/sgl-project/sglang/pull/37119) | [AMD] CI: fix Lean decode crash on the EAGLE path | @mqhc2020 | open | 2026-08-30 | 2026-08-30 |
| [#37118](https://github.com/sgl-project/sglang/pull/37118) | [ROCm] Define the DSA head-gate graph helpers on HIP | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#36960](https://github.com/sgl-project/sglang/pull/36960) | [ROCm][Bugfix] Cap the DSA MQA-logits budget at AITER's buff... | @Arist12 | open | 2026-08-29 | 2026-08-30 |
| [#37087](https://github.com/sgl-project/sglang/pull/37087) | [Config] Round 5.2: the per-model declarations get their own... | @ch-wan | merged | 2026-08-30 | 2026-08-30 |
| [#37113](https://github.com/sgl-project/sglang/pull/37113) | [AMD] Enable the GDN decode projection/Conv1D fusion on ROCm | @mqhc2020 | open | 2026-08-30 | 2026-08-30 |
| [#37086](https://github.com/sgl-project/sglang/pull/37086) | [Config] Round 5.1: the published-side readers ask the bags,... | @ch-wan | merged | 2026-08-30 | 2026-08-30 |
| [#36917](https://github.com/sgl-project/sglang/pull/36917) | [Diffusion] Reject incompatible transformer fallback | @mickqian | merged | 2026-08-28 | 2026-08-30 |
| [#36659](https://github.com/sgl-project/sglang/pull/36659) | [MiniMax-M3][AMD] Fix EAGLE3 TARGET_VERIFY on MI300 + AITER ... | @rkarhila-amd | open | 2026-08-27 | 2026-08-30 |
| [#36851](https://github.com/sgl-project/sglang/pull/36851) | Amd/enable topk v2 glm rocm | @EricKing626 | open | 2026-08-28 | 2026-08-30 |
| [#36904](https://github.com/sgl-project/sglang/pull/36904) | [DSA] Enable tilelang fp8_e4m3 KV cache on CUDA (raw layout)... | @beastllama | open | 2026-08-28 | 2026-08-30 |
| [#34446](https://github.com/sgl-project/sglang/pull/34446) | [rotary] Fix the fused Qwen3.5 RoPE kernel discarding mrope ... | @jason136 | merged | 2026-08-11 | 2026-08-30 |
| [#37070](https://github.com/sgl-project/sglang/pull/37070) | Scatter mm embeddings with row index_copy_ instead of masked... | @oulgen | merged | 2026-08-29 | 2026-08-30 |
| [#32759](https://github.com/sgl-project/sglang/pull/32759) | [AMD] Restore SWA reprefill-tail on UnifiedRadixCache when H... | @amd-danli103 | open | 2026-07-29 | 2026-08-30 |
| [#37092](https://github.com/sgl-project/sglang/pull/37092) | [AMD] Update v4 amd cookbook 0830 | @1am9trash | merged | 2026-08-30 | 2026-08-30 |
| [#33048](https://github.com/sgl-project/sglang/pull/33048) | [Bugfix] Hold references to fire-and-forget tasks in disaggr... | @noron12234 | merged | 2026-07-31 | 2026-08-30 |
| [#37085](https://github.com/sgl-project/sglang/pull/37085) | [mem_cache] Settle extend `kv_committed_len` inside `alloc_f... | @hnyls2002 | merged | 2026-08-30 | 2026-08-30 |
| [#37078](https://github.com/sgl-project/sglang/pull/37078) | [mem_cache] Move `kv_committed_len` into `ReqKvInfo` | @hnyls2002 | merged | 2026-08-30 | 2026-08-30 |
| [#36901](https://github.com/sgl-project/sglang/pull/36901) | [AMD] Add Qwen3.8-Flash-Next-FP8 nightly validation on ROCm ... | @michaelzhang-ai | draft | 2026-08-28 | 2026-08-30 |
| [#37029](https://github.com/sgl-project/sglang/pull/37029) | fix(frontend): bound stop strings and regex patterns | @CyberSecurityErial | merged | 2026-08-29 | 2026-08-30 |
| [#36994](https://github.com/sgl-project/sglang/pull/36994) | [Diffusion] Rollout API: support return only SDE latents | @Rockdu | merged | 2026-08-29 | 2026-08-30 |
| [#37083](https://github.com/sgl-project/sglang/pull/37083) | [AMD] Cherry-pick dsv4 fp4 kv-cache fix aiter commit | @1am9trash | merged | 2026-08-30 | 2026-08-30 |
| [#37073](https://github.com/sgl-project/sglang/pull/37073) | Use Flashinfer 0.6.18 release for CUDA 13.4 package | @trevor-m | merged | 2026-08-29 | 2026-08-30 |
| [#37050](https://github.com/sgl-project/sglang/pull/37050) | docs: state that HiCache L2 is instance-private and only L3 ... | @alphabetc1 | merged | 2026-08-29 | 2026-08-30 |
| [#36998](https://github.com/sgl-project/sglang/pull/36998) | Bump sgl-deep-gemm to v0.1.6 | @Fridge003 | merged | 2026-08-29 | 2026-08-30 |
| [#36982](https://github.com/sgl-project/sglang/pull/36982) | [mem_cache] Move `cache_protected_len` and `swa_evict_floor`... | @hnyls2002 | merged | 2026-08-29 | 2026-08-30 |
| [#34624](https://github.com/sgl-project/sglang/pull/34624) | [AMD][DSV4] perf: fuse compress+norm+rope, emit bpreshuffle ... | @karverma-amd | open | 2026-08-12 | 2026-08-30 |
| [#32340](https://github.com/sgl-project/sglang/pull/32340) | [AMD][DSV4]perf: shared experts fusion top6 | @karverma-amd | merged | 2026-07-24 | 2026-08-30 |
| [#32665](https://github.com/sgl-project/sglang/pull/32665) | [MoE] Add extension points for custom runner backends | @klshuster | merged | 2026-07-28 | 2026-08-30 |
| [#35127](https://github.com/sgl-project/sglang/pull/35127) | [sglang-miles] Extract Anthropic conversion into standalone ... | @guapisolo | merged | 2026-08-17 | 2026-08-30 |
| [#37026](https://github.com/sgl-project/sglang/pull/37026) | fix(hicache): isolate decode offload state per request | @CyberSecurityErial | merged | 2026-08-29 | 2026-08-30 |
| [#36515](https://github.com/sgl-project/sglang/pull/36515) | [AMD] fix: do not emit a shared-expert marker twice on the p... | @karverma-amd | merged | 2026-08-26 | 2026-08-30 |
| [#36958](https://github.com/sgl-project/sglang/pull/36958) | [mem_cache] Keep `req.kv` non-optional and key KV ownership ... | @hnyls2002 | merged | 2026-08-29 | 2026-08-30 |
| [#33614](https://github.com/sgl-project/sglang/pull/33614) | [Spec] Fix Dspark and Dflash state divergence across TP rank | @JackZeng0208 | merged | 2026-08-04 | 2026-08-30 |
| [#36979](https://github.com/sgl-project/sglang/pull/36979) | [Test] Move `gpqa` and `aime25` onto sgl-eval, drop unused e... | @hnyls2002 | merged | 2026-08-29 | 2026-08-30 |
| [#37054](https://github.com/sgl-project/sglang/pull/37054) | Handle unlimited tokenizer context lengths | @zomglings | merged | 2026-08-29 | 2026-08-30 |
| [#37018](https://github.com/sgl-project/sglang/pull/37018) | [Kernel] Fix SM90 FP8 decode regression with benchmarked M/K... | @RunFMe | merged | 2026-08-29 | 2026-08-29 |
| [#30575](https://github.com/sgl-project/sglang/pull/30575) | [AMD] Enable Fast Triton Sparse MLA backend | @clintg6 | open | 2026-07-09 | 2026-08-29 |
| [#29100](https://github.com/sgl-project/sglang/pull/29100) | [NPU] fix: reach torch>=2.8 CUDA memory-pool APIs lazily via... | @tech-cow | merged | 2026-06-24 | 2026-08-29 |
| [#37062](https://github.com/sgl-project/sglang/pull/37062) | [AMD] DeepSeek-V4: ROCm (gfx950) FP4 sparse indexer | @karverma-amd | open | 2026-08-29 | 2026-08-29 |
| [#36972](https://github.com/sgl-project/sglang/pull/36972) | config: the resolution callbacks into the record go to zero | @ch-wan | merged | 2026-08-29 | 2026-08-29 |
| [#36654](https://github.com/sgl-project/sglang/pull/36654) | [kernels] Probe xpu in diffusion platform_key so XPU keeps T... | @KMS07 | draft | 2026-08-27 | 2026-08-29 |
| [#36581](https://github.com/sgl-project/sglang/pull/36581) | [AMD] Enable DeepSeek-V4 FP4 Indexer on ROCm gfx950 | @AMD-yanfeiwang | draft | 2026-08-27 | 2026-08-29 |
| [#34432](https://github.com/sgl-project/sglang/pull/34432) | [AMD][DCP 1/N] add dcp support for aiter backend | @billishyahao | open | 2026-08-11 | 2026-08-29 |
| [#36915](https://github.com/sgl-project/sglang/pull/36915) | [AMD] Fix eager metadata for AITER EAGLE draft extend | @zijiecode | merged | 2026-08-28 | 2026-08-29 |
| [#36714](https://github.com/sgl-project/sglang/pull/36714) | [AMD][Spec][PD] Enable the PD DSA fused-TopK seed remap on R... | @tianxiaojiang4 | merged | 2026-08-27 | 2026-08-29 |
| [#36903](https://github.com/sgl-project/sglang/pull/36903) | [AMD] Add GLM-5.3-Flash ROCm 7.2 nightly GSM8K accuracy gate... | @michaelzhang-ai | draft | 2026-08-28 | 2026-08-28 |
| [#36385](https://github.com/sgl-project/sglang/pull/36385) | Enable and fuse the Inkling MoE gate epilogue on Intel XPU | @jmunetong | draft | 2026-08-25 | 2026-08-28 |
| [#36094](https://github.com/sgl-project/sglang/pull/36094) | [AMD][DSV4] perf: retune decode split-K heuristic for MI355X | @karverma-amd | merged | 2026-08-23 | 2026-08-28 |
| [#28734](https://github.com/sgl-project/sglang/pull/28734) | [AMD] Fix Load and Inference of MLA models with Quark PTPC F... | @ColinZ22 | open | 2026-06-19 | 2026-08-28 |
| [#36712](https://github.com/sgl-project/sglang/pull/36712) | [Docs][AMD] Refresh GLM-5.3-Flash recipes for gfx942 and gfx... | @andyluo7 | open | 2026-08-27 | 2026-08-28 |
| [#36559](https://github.com/sgl-project/sglang/pull/36559) | MoE: small-batch sorting path with fused mxfp8 quantisation | @zcnrex | open | 2026-08-26 | 2026-08-28 |
| [#36574](https://github.com/sgl-project/sglang/pull/36574) | MXFP8: dense-only block convert, torch._scaled_mm 1x32 path,... | @zcnrex | open | 2026-08-26 | 2026-08-28 |
| [#36549](https://github.com/sgl-project/sglang/pull/36549) | MiniMax-M3: allocate the lightning-indexer K cache in fp8 on... | @zcnrex | open | 2026-08-26 | 2026-08-28 |
| [#34702](https://github.com/sgl-project/sglang/pull/34702) | fix(lora): build the MoE LoRA align JIT kernel on ROCm | @Arist12 | merged | 2026-08-13 | 2026-08-28 |
| [#36379](https://github.com/sgl-project/sglang/pull/36379) | fix(lora): build the MoE LoRA align JIT kernel on ROCm | @Arist12 | merged | 2026-08-25 | 2026-08-28 |
| [#36867](https://github.com/sgl-project/sglang/pull/36867) | fix(rocm): fall back to Triton when AITER does not support t... | @z2z23n0 | open | 2026-08-28 | 2026-08-28 |
| [#35523](https://github.com/sgl-project/sglang/pull/35523) | [AMD] moonmath MLA attention backend: MLA decode and specula... | @tarik-sarac | open | 2026-08-19 | 2026-08-28 |
| [#35872](https://github.com/sgl-project/sglang/pull/35872) | [AMD] Skip full-vocab softmax in EAGLE topk==1 draft on ROCm | @yichiche | open | 2026-08-21 | 2026-08-28 |
| [#28655](https://github.com/sgl-project/sglang/pull/28655) | [AMD] GDN linear out-proj fusion | @mqhc2020 | open | 2026-06-18 | 2026-08-28 |
| [#36308](https://github.com/sgl-project/sglang/pull/36308) | [AMD][CI] Limit HiCache MGSM eval concurrency on ROCm | @bingxche | merged | 2026-08-25 | 2026-08-28 |
| [#36684](https://github.com/sgl-project/sglang/pull/36684) | [AMD] Enable deepseek-v4 topk_transform v2 kernel | @1am9trash | merged | 2026-08-27 | 2026-08-28 |
| [#36607](https://github.com/sgl-project/sglang/pull/36607) | [AMD] Enable GLM-5.3-Flash on gfx942 and gfx950 | @andyluo7 | merged | 2026-08-27 | 2026-08-28 |
| [#36356](https://github.com/sgl-project/sglang/pull/36356) | [AMD] Enable aiter mla asm path through padding attn heads f... | @billishyahao | merged | 2026-08-25 | 2026-08-28 |
| [#36547](https://github.com/sgl-project/sglang/pull/36547) | Fix DeepSeek V4 multistream QKV buffer lifetime | @aurickq | merged | 2026-08-26 | 2026-08-28 |
| [#35451](https://github.com/sgl-project/sglang/pull/35451) | [Feature] Support PP in full prefill CUDA graphs | @aurickq | merged | 2026-08-19 | 2026-08-28 |
| [#34274](https://github.com/sgl-project/sglang/pull/34274) | [kernel] Content-addressed JIT build cache, generated from o... | @DarkSharpness | merged | 2026-08-10 | 2026-08-28 |
| [#36529](https://github.com/sgl-project/sglang/pull/36529) | [Fix][XPU/ROCm/NPU] Defer sgl_kernel.quantization import in ... | @arathi-hlab | merged | 2026-08-26 | 2026-08-27 |
| [#27770](https://github.com/sgl-project/sglang/pull/27770) | [P/D disagg] Decode-side radix cache for SWA hybrid models (... | @ishandhanani | merged | 2026-06-10 | 2026-08-27 |
| [#34296](https://github.com/sgl-project/sglang/pull/34296) | [AMD] Use fast exponentials in C4 and C128 ROCm kernels | @AMD-yanfeiwang | merged | 2026-08-10 | 2026-08-27 |
| [#36309](https://github.com/sgl-project/sglang/pull/36309) | [AMD][Bugfix] Skip invalid fused MoE reduction for direct to... | @bingxche | merged | 2026-08-25 | 2026-08-27 |
| [#36307](https://github.com/sgl-project/sglang/pull/36307) | [AMD][CI] Stabilize PyTorch sampling backend test on ROCm | @bingxche | merged | 2026-08-25 | 2026-08-27 |
| [#36343](https://github.com/sgl-project/sglang/pull/36343) | [AMD] Fall back to CPU tensor for decode retraction on ROCm | @bingxche | merged | 2026-08-25 | 2026-08-27 |
| [#36306](https://github.com/sgl-project/sglang/pull/36306) | [AMD][CI] Pass USE_PDL explicitly in the fused MoE gate | @bingxche | merged | 2026-08-25 | 2026-08-26 |
| [#36296](https://github.com/sgl-project/sglang/pull/36296) | [AMD][CI] Fix shared-KV verify tests for multi-head GQA | @bingxche | merged | 2026-08-25 | 2026-08-26 |
| [#25540](https://github.com/sgl-project/sglang/pull/25540) | Use DeepGEMM BF16 for unquantized DeepEP LL MoE | @YAMY1234 | merged | 2026-05-17 | 2026-08-25 |
| [#27868](https://github.com/sgl-project/sglang/pull/27868) | fix(qwen3.5): keep CUDA dual-stream overlap (regressed by #2... | @YAMY1234 | merged | 2026-06-11 | 2026-08-25 |
| [#35672](https://github.com/sgl-project/sglang/pull/35672) | [AMD] Enable draft_extend CUDA graph for HIP DSA backend | @jiaryang | merged | 2026-08-20 | 2026-08-25 |
| [#35676](https://github.com/sgl-project/sglang/pull/35676) | [NPU] DeepSeek-V4 adapt sgl-kernel-npu ops (compressor/spars... | @unclezhou486 | merged | 2026-08-20 | 2026-08-25 |
| [#36139](https://github.com/sgl-project/sglang/pull/36139) | [AMD] Skip shared-KV verify test on ROCm 7.0 CI | @chuyeh | merged | 2026-08-24 | 2026-08-25 |
| [#35719](https://github.com/sgl-project/sglang/pull/35719) | [AMD] Fix Qwen3.5 MTP dropping fused shared-expert weights | @yichiche | merged | 2026-08-20 | 2026-08-24 |
| [#33829](https://github.com/sgl-project/sglang/pull/33829) | [Model] Complete dots.note.omni support with native encoders... | @jianfei-wangg | merged | 2026-08-06 | 2026-08-24 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-08-30T13:23:05Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#11510](https://github.com/triton-lang/triton/pull/11510) | [Proton][AMD] Increase ROCProfiler dispatch flush retries | @willghatch | merged | 2026-08-28 | 2026-08-29 |
| [#11492](https://github.com/triton-lang/triton/pull/11492) | [AMD] Avoid false HIP runtime mismatch with TheRock | @warrendeng | open | 2026-08-28 | 2026-08-28 |
| [#11485](https://github.com/triton-lang/triton/pull/11485) | [BACKEND] Package separately pinned AMD LLVM codegen | @ThomasRaoux | draft | 2026-08-27 | 2026-08-28 |
| [#11474](https://github.com/triton-lang/triton/pull/11474) | [AMD] Enable RDNA4m buffer atomics and IEEE min/max | @umangyadav | draft | 2026-08-26 | 2026-08-28 |
| [#11487](https://github.com/triton-lang/triton/pull/11487) | [CI][AMD] switch to tritonci image for gfx950 | @willghatch | open | 2026-08-27 | 2026-08-28 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-08-28 |
| [#11475](https://github.com/triton-lang/triton/pull/11475) | [AMD] Disable scalar atomics in multicta kernels | @borontion | open | 2026-08-26 | 2026-08-28 |
| [#11470](https://github.com/triton-lang/triton/pull/11470) | [AMD][GLUON] Expose helper function to compute scaled_upcast... | @AlexAUT | open | 2026-08-26 | 2026-08-28 |
| [#11365](https://github.com/triton-lang/triton/pull/11365) | [AMD][LAYOUTS] Refine segment computation to support DS_READ... | @amd-jianli12 | merged | 2026-08-19 | 2026-08-28 |
| [#11274](https://github.com/triton-lang/triton/pull/11274) | [AMD][CI] Add AMD CI image builds | @willghatch | open | 2026-08-11 | 2026-08-27 |
| [#11486](https://github.com/triton-lang/triton/pull/11486) | [AMD] Use hardware cvt instructions for OCP fp8 casts on gfx... | @erizheng-amd | draft | 2026-08-27 | 2026-08-27 |
| [#11435](https://github.com/triton-lang/triton/pull/11435) | [RFC][AMD][Gluon] Require other for masked buffer-to-shared ... | @raikonenfnu | open | 2026-08-25 | 2026-08-26 |
| [#11040](https://github.com/triton-lang/triton/pull/11040) | [Proton][AMD] Add ROCProfiler PC sampling with source attrib... | @willghatch | merged | 2026-07-24 | 2026-08-26 |
| [#11254](https://github.com/triton-lang/triton/pull/11254) | [AMD] Optimize software E4M3FN to FP16 conversion | @skyguan92 | open | 2026-08-11 | 2026-08-26 |
| [#11465](https://github.com/triton-lang/triton/pull/11465) | [AMD][BACKEND] Fix free-variable mask key to enable register... | @dhernandez0 | draft | 2026-08-26 | 2026-08-26 |
| [#11443](https://github.com/triton-lang/triton/pull/11443) | [AMD][GLUON][BACKEND] Fix and simplify CGA layout handling o... | @AlexAUT | merged | 2026-08-25 | 2026-08-26 |
| [#11442](https://github.com/triton-lang/triton/pull/11442) | [AMD][BACKEND Allow compact scales in scaled_upcast on CDNA4 | @AlexAUT | merged | 2026-08-25 | 2026-08-25 |
| [#11429](https://github.com/triton-lang/triton/pull/11429) | [Release][Cherry-Pick] [AMD] Fix under-approximated loop-car... | @AlexAUT | open | 2026-08-24 | 2026-08-25 |
| [#11381](https://github.com/triton-lang/triton/pull/11381) | [Release][Cherry-Pick] [AMD] Support blocked/shared order mi... | @AlexAUT | merged | 2026-08-20 | 2026-08-24 |
| [#11367](https://github.com/triton-lang/triton/pull/11367) | [AMD] Do not insert barriers between two async loads for Mem... | @Dewei-Wang-sh | merged | 2026-08-19 | 2026-08-24 |
| [#11375](https://github.com/triton-lang/triton/pull/11375) | [Release] [Cherry-Pick] [AMD] Preserve i32 accumulation for ... | @lohiaj | merged | 2026-08-20 | 2026-08-24 |
| [#11380](https://github.com/triton-lang/triton/pull/11380) | [Release][Cherry-Pick][AMD] Fix direct-to-LDS staging for un... | @AlexAUT | merged | 2026-08-20 | 2026-08-24 |
| [#11382](https://github.com/triton-lang/triton/pull/11382) | [Release][Cherry-Pick] [AMD] Fix buffer_load_to_local with o... | @AlexAUT | merged | 2026-08-20 | 2026-08-24 |
| [#11383](https://github.com/triton-lang/triton/pull/11383) | [Release][Cherry-Pick] [AMD][Gluon] Add cdna5 alias for gfx1... | @AlexAUT | merged | 2026-08-20 | 2026-08-24 |
| [#11169](https://github.com/triton-lang/triton/pull/11169) | [AMD][LAYOUTS] Restrict low-vector swizzle reorder to <=32 b... | @jerryyin | merged | 2026-08-04 | 2026-08-24 |
| [#11399](https://github.com/triton-lang/triton/pull/11399) | [AMD][IMP][Launch Latency] read use_buffer_ops once at impor... | @irreg | open | 2026-08-22 | 2026-08-22 |
| [#11294](https://github.com/triton-lang/triton/pull/11294) | [AMD] Map tl.const pointer args to constant address space | @jerryyin | merged | 2026-08-13 | 2026-08-21 |
| [#11377](https://github.com/triton-lang/triton/pull/11377) | [AMD][BACKEND][GLUON] Add `scaled_downcast` for MXFP4/MXFP8 | @AlexAUT | merged | 2026-08-20 | 2026-08-21 |
| [#11379](https://github.com/triton-lang/triton/pull/11379) | [AMD] Carry buffer-op base address space in the op format | @jerryyin | merged | 2026-08-20 | 2026-08-20 |
| [#11246](https://github.com/triton-lang/triton/pull/11246) | [AMD]Fix empty range inference for HistogramOp in RangeAnaly... | @mengfei-jiang | merged | 2026-08-10 | 2026-08-20 |
| [#11374](https://github.com/triton-lang/triton/pull/11374) | [AMD][gfx1250] Auto-select attention prefill tile and schedu... | @nithinsubbiah | open | 2026-08-20 | 2026-08-20 |
| [#11313](https://github.com/triton-lang/triton/pull/11313) | [AMD][BACKEND] Fix under-approximated loop-carried ranges in... | @AlexAUT | merged | 2026-08-14 | 2026-08-19 |
| [#11028](https://github.com/triton-lang/triton/pull/11028) | [AMD] TheRock support | @ZelboK | merged | 2026-07-23 | 2026-08-19 |
| [#11068](https://github.com/triton-lang/triton/pull/11068) | [AMD] Propagate discardable attributes on the small-tensor p... | @pabloantoniom | draft | 2026-07-28 | 2026-08-19 |
| [#11346](https://github.com/triton-lang/triton/pull/11346) | [AMD] Preserve dominance when preparing if combining | @liminfei-amd | open | 2026-08-18 | 2026-08-18 |
| [#11018](https://github.com/triton-lang/triton/pull/11018) | [AMD] Emit buffer atomic min/max only for the supported data... | @umangyadav | merged | 2026-07-22 | 2026-08-17 |
| [#11282](https://github.com/triton-lang/triton/pull/11282) | [AMD] Preserve i32 accumulation for small-K int8 dots | @lohiaj | merged | 2026-08-12 | 2026-08-17 |
| [#11239](https://github.com/triton-lang/triton/pull/11239) | [AMD] Guard extract-slice concat canonicalization | @guoriyue | merged | 2026-08-10 | 2026-08-15 |
| [#11227](https://github.com/triton-lang/triton/pull/11227) | [AMD] Stop lowering bf16 multiply to v_dot2_bf16_bf16 | @0xDELUXA | merged | 2026-08-09 | 2026-08-14 |
| [#11289](https://github.com/triton-lang/triton/pull/11289) | [AMD] Fix address space of barriers that carry atomic memory... | @mgehre-amd | open | 2026-08-13 | 2026-08-14 |
| [#11285](https://github.com/triton-lang/triton/pull/11285) | [AMD][BACKEND][GFX9] Enable amdgpu-use-amdgpu-trackers LLVM ... | @AlexAUT | merged | 2026-08-12 | 2026-08-13 |
| [#11272](https://github.com/triton-lang/triton/pull/11272) | [Release] [Cherry-Pick] [AMD][gfx1250] Refine CodeGen contro... | @naromero77amd | merged | 2026-08-11 | 2026-08-12 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add CDNA5 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-08-11 |
| [#11256](https://github.com/triton-lang/triton/pull/11256) | [AMD] Fix buffer_load_to_local with other: write other in th... | @yiqian1 | merged | 2026-08-11 | 2026-08-11 |
| [#11265](https://github.com/triton-lang/triton/pull/11265) | [AMD] Avoid GIL deadlock during HIP library lookup | @nemanjaudovic | draft | 2026-08-11 | 2026-08-11 |
| [#11266](https://github.com/triton-lang/triton/pull/11266) | [AMD][Backend] Lower tl.fdiv to approximate f32 division on ... | @purerli98 | open | 2026-08-11 | 2026-08-11 |
| [#11249](https://github.com/triton-lang/triton/pull/11249) | [AMD] Choose the scheduling strategy when spilling dominates... | @zjin-lcf | open | 2026-08-10 | 2026-08-10 |
| [#11247](https://github.com/triton-lang/triton/pull/11247) | [TEST] Enable AMD multi-stream cuda graph test | @Jokeren | merged | 2026-08-10 | 2026-08-10 |
| [#11223](https://github.com/triton-lang/triton/pull/11223) | [AMD] Preserve volatile loads during LLVM lowering | @antiagainst | merged | 2026-08-09 | 2026-08-09 |
| [#11221](https://github.com/triton-lang/triton/pull/11221) | [AMD] Remove dead code and fix assert precedence | @antiagainst | merged | 2026-08-08 | 2026-08-09 |
| [#11208](https://github.com/triton-lang/triton/pull/11208) | [AMD] Guard chained-dot pingpong against scaled dots | @warrendeng | draft | 2026-08-07 | 2026-08-08 |
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD] Emit actionable errors when a direct-to-LDS copy canno... | @vmalepati1 | open | 2026-07-14 | 2026-08-07 |
| [#11213](https://github.com/triton-lang/triton/pull/11213) | [AMD][Gluon] NFC: Migrate consumers to CDNA5 APIs | @antiagainst | merged | 2026-08-07 | 2026-08-07 |
| [#11188](https://github.com/triton-lang/triton/pull/11188) | [AMD] Re-enable true16 feature for gfx11 | @saeid-rostami | merged | 2026-08-05 | 2026-08-07 |
| [#11184](https://github.com/triton-lang/triton/pull/11184) | [AMD] Align TDM descriptor layouts with allocations | @agron911 | open | 2026-08-05 | 2026-08-07 |
| [#11049](https://github.com/triton-lang/triton/pull/11049) | [AMD] Fix AMDMfmaEncodingAttr invalid-bool-load UBSan error | @JAGANNATHANJP | open | 2026-07-25 | 2026-07-31 |
| [#11092](https://github.com/triton-lang/triton/pull/11092) | [AMD][gfx1250] Add noalias_args pointer contract | @jerryyin | draft | 2026-07-29 | 2026-07-29 |
| [#11055](https://github.com/triton-lang/triton/pull/11055) | [AMD] Guard HIP launcher against kernel arg/annotation count... | @zihaomu | open | 2026-07-27 | 2026-07-29 |
| [#11012](https://github.com/triton-lang/triton/pull/11012) | [AMD][DRAFT] proton rocprofsdk error 16 pytest fix | @ZelboK | draft | 2026-07-22 | 2026-07-27 |
| [#10885](https://github.com/triton-lang/triton/pull/10885) | [AMD][DRAFT] test out if still broken  | @ZelboK | open | 2026-07-14 | 2026-07-21 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-08-30T13:23:08Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5218](https://github.com/ROCm/AMDMIGraphX/pull/5218) | Add executable path flags and --all option to tools/format.p... | @pfultz2 | open | 2026-08-30 | 2026-08-30 |
| [#5005](https://github.com/ROCm/AMDMIGraphX/pull/5005) | Leaky relu using max | @pfultz2 | open | 2026-06-22 | 2026-08-30 |
| [#5137](https://github.com/ROCm/AMDMIGraphX/pull/5137) | Eliminate concat after reshapes | @pfultz2 | draft | 2026-08-14 | 2026-08-29 |
| [#4956](https://github.com/ROCm/AMDMIGraphX/pull/4956) | Add support for HipGraph | @pfultz2 | open | 2026-06-11 | 2026-08-29 |
| [#5183](https://github.com/ROCm/AMDMIGraphX/pull/5183) | Remove concat->reshapes->slice | @pfultz2 | open | 2026-08-24 | 2026-08-29 |
| [#5182](https://github.com/ROCm/AMDMIGraphX/pull/5182) | Split pointwise ops over concat inputs to enable fused_conca... | @pfultz2 | open | 2026-08-24 | 2026-08-29 |
| [#5215](https://github.com/ROCm/AMDMIGraphX/pull/5215) | Use rocmlirtriton as the compiler backend | @causten | open | 2026-08-29 | 2026-08-29 |
| [#5216](https://github.com/ROCm/AMDMIGraphX/pull/5216) | Bump CI to ROCm 10.0 | @causten | open | 2026-08-29 | 2026-08-29 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | draft | 2025-01-20 | 2026-08-29 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | draft | 2024-11-29 | 2026-08-29 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-08-29 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-08-29 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-08-29 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | draft | 2024-09-22 | 2026-08-29 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | draft | 2024-06-26 | 2026-08-29 |
| [#2224](https://github.com/ROCm/AMDMIGraphX/pull/2224) | Added mutex locks in register_target.cpp and created a multi... | @bpickrel | draft | 2023-09-20 | 2026-08-29 |
| [#1417](https://github.com/ROCm/AMDMIGraphX/pull/1417) | Warnings upon tuning  information mismatch for Convolutions | @umangyadav | draft | 2022-10-19 | 2026-08-29 |
| [#5124](https://github.com/ROCm/AMDMIGraphX/pull/5124) | Insert match::opaque into deep matchers to fix large symbol ... | @pfultz2 | open | 2026-08-07 | 2026-08-29 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-08-29 |
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
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | draft | 2026-04-22 | 2026-08-29 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-08-29 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-08-29 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | open | 2026-04-08 | 2026-08-29 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-08-29 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | draft | 2026-03-23 | 2026-08-29 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-08-29 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | open | 2026-03-04 | 2026-08-29 |
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
| [#5205](https://github.com/ROCm/AMDMIGraphX/pull/5205) | Python and Cpp symbolic shape printing | @CharlieL7 | open | 2026-08-27 | 2026-08-29 |
| [#5193](https://github.com/ROCm/AMDMIGraphX/pull/5193) | Accuracy: Round to nearest, ties to even for `generic_float` | @CharlieL7 | open | 2026-08-26 | 2026-08-29 |
| [#5187](https://github.com/ROCm/AMDMIGraphX/pull/5187) | Fix seg fault when splitting non-fusible MLIR modules | @justinrosner | open | 2026-08-24 | 2026-08-29 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-08-29 |
| [#5179](https://github.com/ROCm/AMDMIGraphX/pull/5179) | Simplify concat same broadcast | @pfultz2 | open | 2026-08-24 | 2026-08-29 |
| [#5175](https://github.com/ROCm/AMDMIGraphX/pull/5175) | Gpu concat kernel improvements | @pfultz2 | draft | 2026-08-23 | 2026-08-29 |
| [#5174](https://github.com/ROCm/AMDMIGraphX/pull/5174) | [ROCM-28806] Remove Navi4x guard for gemm_tune_invalid_sol_i... | @eddieliao | draft | 2026-08-21 | 2026-08-29 |
| [#5173](https://github.com/ROCm/AMDMIGraphX/pull/5173) | fix(security): pin base image digest and run as jenkins user | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5172](https://github.com/ROCm/AMDMIGraphX/pull/5172) | fix(security): re-verify PR head SHA in performance workflow | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5171](https://github.com/ROCm/AMDMIGraphX/pull/5171) | fix(security): scope CI secrets and pin third-party actions | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): replace popen shell with posix_spawn | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5168](https://github.com/ROCm/AMDMIGraphX/pull/5168) | fix(security): guard ONNX/shape overflow and external data p... | @causten | open | 2026-08-21 | 2026-08-29 |
| [#5165](https://github.com/ROCm/AMDMIGraphX/pull/5165) | Onnxruntime Weekly Sync 2026-08-21 | @github-actions[bot] | open | 2026-08-21 | 2026-08-29 |
| [#5162](https://github.com/ROCm/AMDMIGraphX/pull/5162) | Set reduction thresholds for block size and block algo | @TedThemistokleous | draft | 2026-08-21 | 2026-08-29 |
| [#5161](https://github.com/ROCm/AMDMIGraphX/pull/5161) | Enable fp16 winograd on gfx1151 | @weizhu12-amd | draft | 2026-08-21 | 2026-08-29 |
| [#5160](https://github.com/ROCm/AMDMIGraphX/pull/5160) | Have reduce_sum, reduce_mean, and reduce_prod accumulate in ... | @CharlieL7 | open | 2026-08-20 | 2026-08-29 |
| [#5153](https://github.com/ROCm/AMDMIGraphX/pull/5153) | Improve find_permutation with ambiguous layouts | @pfultz2 | draft | 2026-08-18 | 2026-08-29 |
| [#5150](https://github.com/ROCm/AMDMIGraphX/pull/5150) | Parse TopK with dyn slice & ONNX node UID expansion | @CharlieL7 | open | 2026-08-18 | 2026-08-29 |
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5139](https://github.com/ROCm/AMDMIGraphX/pull/5139) | Add GPU JIT implementation for gridsample operation | @Imeguras | open | 2026-08-16 | 2026-08-29 |
| [#5133](https://github.com/ROCm/AMDMIGraphX/pull/5133) | Add adaptive benchmarking to MIGraphX | @justinrosner | draft | 2026-08-13 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5123](https://github.com/ROCm/AMDMIGraphX/pull/5123) | Split symbolic dimension pass | @shivadbhavsar | draft | 2026-08-07 | 2026-08-29 |
| [#5114](https://github.com/ROCm/AMDMIGraphX/pull/5114) | Regular attention flash decoding refactor and bug fixes | @bdevorem | open | 2026-08-05 | 2026-08-29 |
| [#5104](https://github.com/ROCm/AMDMIGraphX/pull/5104) | skip elimination when reshape_lazy | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | open | 2026-07-29 | 2026-08-29 |
| [#5075](https://github.com/ROCm/AMDMIGraphX/pull/5075) | [AIMIGRAPHX-1166] rebias uint8 to int8 on models with mixed ... | @kahmed10 | open | 2026-07-17 | 2026-08-29 |
| [#5074](https://github.com/ROCm/AMDMIGraphX/pull/5074) | Add dynamic support to Shape and Expand | @turneram | draft | 2026-07-17 | 2026-08-29 |
| [#5069](https://github.com/ROCm/AMDMIGraphX/pull/5069) | Update Tile op builder to work with dynamic inputs | @turneram | draft | 2026-07-15 | 2026-08-29 |
| [#5067](https://github.com/ROCm/AMDMIGraphX/pull/5067) | [AIMIGRAPHX-1100] Add no-rebuild callback for verify | @eddieliao | open | 2026-07-15 | 2026-08-29 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-08-29 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#5033](https://github.com/ROCm/AMDMIGraphX/pull/5033) | MultiHeadAttention with dynamic kv-cache attention | @turneram | draft | 2026-07-02 | 2026-08-29 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-29 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | draft | 2026-06-19 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-08-29 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#5213](https://github.com/ROCm/AMDMIGraphX/pull/5213) | Docs: getting started and miscellaneous docs refactoring | @anisha-amd | open | 2026-08-28 | 2026-08-29 |
| [#5211](https://github.com/ROCm/AMDMIGraphX/pull/5211) | Skip literals that are not scalars or iotas when fusing atte... | @ahsan-ca | open | 2026-08-28 | 2026-08-29 |
| [#5210](https://github.com/ROCm/AMDMIGraphX/pull/5210) | Fix credential issue for performance tests | @ahsan-ca | open | 2026-08-28 | 2026-08-29 |
| [#5204](https://github.com/ROCm/AMDMIGraphX/pull/5204) | Drop null problem-cache sentinels on load, keep in-run dedup | @danieyan-amd | open | 2026-08-27 | 2026-08-29 |
| [#5192](https://github.com/ROCm/AMDMIGraphX/pull/5192) | [AIRADSW-852] Fixing regression with slice-squeeze rewrite f... | @urpetkov-amd | open | 2026-08-26 | 2026-08-29 |
| [#5190](https://github.com/ROCm/AMDMIGraphX/pull/5190) | Fix matcher `has_value` tolerance for low precision types | @CharlieL7 | open | 2026-08-25 | 2026-08-29 |
| [#5189](https://github.com/ROCm/AMDMIGraphX/pull/5189) | Disable subprocess spawning during hiprtc kernel compilation | @pnikolic-amd | open | 2026-08-25 | 2026-08-29 |
| [#5184](https://github.com/ROCm/AMDMIGraphX/pull/5184) | Eliminate concat_past_present | @pfultz2 | draft | 2026-08-24 | 2026-08-29 |
| [#5177](https://github.com/ROCm/AMDMIGraphX/pull/5177) | Add block batch reduce algorithm | @pfultz2 | draft | 2026-08-24 | 2026-08-29 |
| [#5151](https://github.com/ROCm/AMDMIGraphX/pull/5151) | NMS parse into `dyn_slice` and remove env variable | @CharlieL7 | draft | 2026-08-18 | 2026-08-27 |
| [#5077](https://github.com/ROCm/AMDMIGraphX/pull/5077) | Proto data dependent symbolics | @CharlieL7 | draft | 2026-07-17 | 2026-07-31 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#5163](https://github.com/ROCm/AMDMIGraphX/pull/5163) | Install clangd | @pfultz2 | merged | 2026-08-21 | 2026-08-29 |
| [#4439](https://github.com/ROCm/AMDMIGraphX/pull/4439) | AIMIGRAPHX-317 g+g heuristic added to apply | @bdevorem | merged | 2025-11-12 | 2026-08-29 |
| [#5214](https://github.com/ROCm/AMDMIGraphX/pull/5214) | Onnxruntime Weekly Sync 2026-08-28 | @github-actions[bot] | merged | 2026-08-28 | 2026-08-29 |
| [#5206](https://github.com/ROCm/AMDMIGraphX/pull/5206) | Prevent AI making short unit test helper functions | @CharlieL7 | merged | 2026-08-27 | 2026-08-28 |
| [#5200](https://github.com/ROCm/AMDMIGraphX/pull/5200) | Changelog fixes | @CharlieL7 | merged | 2026-08-27 | 2026-08-28 |
| [#5164](https://github.com/ROCm/AMDMIGraphX/pull/5164) | Emit appropriate msg when no mxr files are dumped | @ahsan-ca | merged | 2026-08-21 | 2026-08-28 |
| [#5146](https://github.com/ROCm/AMDMIGraphX/pull/5146) | Add rewrite broadcasts for fuse_reduce | @pfultz2 | merged | 2026-08-17 | 2026-08-28 |
| [#5149](https://github.com/ROCm/AMDMIGraphX/pull/5149) | Layout convolution weights as yxck | @pfultz2 | merged | 2026-08-18 | 2026-08-28 |
| [#5209](https://github.com/ROCm/AMDMIGraphX/pull/5209) | CI: remove cross-org workflows; harden performance.yaml | @causten | merged | 2026-08-28 | 2026-08-28 |
| [#5208](https://github.com/ROCm/AMDMIGraphX/pull/5208) | [DO NOT REVIEW] Revert #5201 null-as-miss; drop null problem... | @danieyan-amd | merged | 2026-08-27 | 2026-08-27 |
| [#5201](https://github.com/ROCm/AMDMIGraphX/pull/5201) | [DO NOT REVIEW] Treat null problem-cache entries as a miss i... | @danieyan-amd | merged | 2026-08-27 | 2026-08-27 |
| [#5199](https://github.com/ROCm/AMDMIGraphX/pull/5199) | CI: report.yaml Generate Performance Report workflow | @causten | merged | 2026-08-27 | 2026-08-27 |
| [#5117](https://github.com/ROCm/AMDMIGraphX/pull/5117) | Problem cache follow-on: pluggable backends, layered cache p... | @danieyan-amd | merged | 2026-08-05 | 2026-08-27 |
| [#5138](https://github.com/ROCm/AMDMIGraphX/pull/5138) | Add promote_storage_type pass to compute storage-only types ... | @pfultz2 | merged | 2026-08-15 | 2026-08-27 |
| [#5159](https://github.com/ROCm/AMDMIGraphX/pull/5159) | CI: update migraphx-reports repo location to AMD-ROCm-Intern... | @causten | merged | 2026-08-20 | 2026-08-27 |
| [#5134](https://github.com/ROCm/AMDMIGraphX/pull/5134) | [AIMIGRAPHX-1242] Use ROCm Extras prefix for TheRock package... | @kentqian | merged | 2026-08-14 | 2026-08-27 |
| [#4851](https://github.com/ROCm/AMDMIGraphX/pull/4851) | Only throw on the root module when dumping benchmark-mxr fil... | @ahsan-ca | merged | 2026-05-06 | 2026-08-27 |
| [#5148](https://github.com/ROCm/AMDMIGraphX/pull/5148) | Enhance symbolic onnx parsing via sym_eval | @shivadbhavsar | merged | 2026-08-18 | 2026-08-27 |
| [#5181](https://github.com/ROCm/AMDMIGraphX/pull/5181) | Fuse concat of reshapes whose inputs differ along the concat... | @pfultz2 | merged | 2026-08-24 | 2026-08-26 |
| [#5167](https://github.com/ROCm/AMDMIGraphX/pull/5167) | [AIRADSW-850] Fix simplify_algebra conv fusion regression af... | @urpetkov-amd | merged | 2026-08-21 | 2026-08-26 |
| [#5178](https://github.com/ROCm/AMDMIGraphX/pull/5178) | Dont fuse multi-output literal | @pfultz2 | merged | 2026-08-24 | 2026-08-26 |
| [#5180](https://github.com/ROCm/AMDMIGraphX/pull/5180) | Horizontally fuse unsqueeze | @pfultz2 | merged | 2026-08-24 | 2026-08-26 |
| [#5188](https://github.com/ROCm/AMDMIGraphX/pull/5188) | Jenkins: create ccache dirs on host before container launch ... | @causten | merged | 2026-08-25 | 2026-08-26 |
| [#5130](https://github.com/ROCm/AMDMIGraphX/pull/5130) | Duplicate Lambda Parameter from Repeated Input | @causten | merged | 2026-08-12 | 2026-08-26 |
| [#5191](https://github.com/ROCm/AMDMIGraphX/pull/5191) | Set copilot code review level to xhigh | @pfultz2 | merged | 2026-08-25 | 2026-08-25 |
| [#5141](https://github.com/ROCm/AMDMIGraphX/pull/5141) | Rewrite broadcast->layout | @pfultz2 | merged | 2026-08-16 | 2026-08-25 |
| [#4910](https://github.com/ROCm/AMDMIGraphX/pull/4910) | CI Skip passing jobs | @causten | merged | 2026-05-25 | 2026-08-25 |
| [#4882](https://github.com/ROCm/AMDMIGraphX/pull/4882) | autotune using env variables | @aarushjain29 | merged | 2026-05-14 | 2026-08-25 |
| [#5157](https://github.com/ROCm/AMDMIGraphX/pull/5157) | Release protobuf state on ONNX DLL unload | @ivarusic-amd | merged | 2026-08-20 | 2026-08-24 |
| [#5136](https://github.com/ROCm/AMDMIGraphX/pull/5136) | Fix dynamic-shape parse failure in Softplus and Softsign | @zhihuidu-amd | merged | 2026-08-14 | 2026-08-24 |
| [#5185](https://github.com/ROCm/AMDMIGraphX/pull/5185) | windows-gpu: free disk space before ROCm install | @causten | merged | 2026-08-24 | 2026-08-24 |
| [#5154](https://github.com/ROCm/AMDMIGraphX/pull/5154) | add missing MLIR wrapper stubs for MLIR-disabled builds | @nkotakal0107 | merged | 2026-08-19 | 2026-08-24 |
| [#5176](https://github.com/ROCm/AMDMIGraphX/pull/5176) | Bump rocm-docs-core from 1.38.0 to 1.40.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-08-24 | 2026-08-24 |
| [#5166](https://github.com/ROCm/AMDMIGraphX/pull/5166) | [ROCM-26610] Replace tags with SHAs | @eddieliao | merged | 2026-08-21 | 2026-08-24 |
| [#5129](https://github.com/ROCm/AMDMIGraphX/pull/5129) | 8/11 bump rocmlir | @causten | merged | 2026-08-11 | 2026-08-24 |
| [#4904](https://github.com/ROCm/AMDMIGraphX/pull/4904) | Split gpu passes into seperate pipelines | @pfultz2 | merged | 2026-05-21 | 2026-08-24 |
| [#5158](https://github.com/ROCm/AMDMIGraphX/pull/5158) | Jenkins: include tools/requirements-py.txt in docker image h... | @causten | merged | 2026-08-20 | 2026-08-24 |
| [#5112](https://github.com/ROCm/AMDMIGraphX/pull/5112) | `dyn_slice` operator for symbolics and data-dependent operat... | @CharlieL7 | merged | 2026-08-04 | 2026-08-23 |
| [#4860](https://github.com/ROCm/AMDMIGraphX/pull/4860) | Clean up the #include dependencies for the instruction_ref | @apwojcik | merged | 2026-05-08 | 2026-08-23 |
| [#4775](https://github.com/ROCm/AMDMIGraphX/pull/4775) | [AIMIGRAPHX-885][AIMIGRAPHX-987] Use External Stream Context... | @TedThemistokleous | merged | 2026-04-10 | 2026-08-23 |
| [#5111](https://github.com/ROCm/AMDMIGraphX/pull/5111) | Add a migraphx code review skill | @pfultz2 | merged | 2026-08-04 | 2026-08-21 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | merged | 2026-02-12 | 2026-08-21 |
| [#5087](https://github.com/ROCm/AMDMIGraphX/pull/5087) | Fuse expert SilU heads (MoE) into batched GEMM via fuse_hori... | @TedThemistokleous | merged | 2026-07-22 | 2026-08-21 |
| [#4801](https://github.com/ROCm/AMDMIGraphX/pull/4801) | Add md5 sum function | @pfultz2 | merged | 2026-04-20 | 2026-08-21 |
| [#5142](https://github.com/ROCm/AMDMIGraphX/pull/5142) | Update find_concat_same_inputs to handle dimension > 1 | @pfultz2 | merged | 2026-08-16 | 2026-08-20 |
| [#4809](https://github.com/ROCm/AMDMIGraphX/pull/4809) | Use fp32 FMA in channelwise conv | @klin2024 | merged | 2026-04-21 | 2026-08-20 |
| [#5144](https://github.com/ROCm/AMDMIGraphX/pull/5144) | Reject invalid pointwise modules | @justinrosner | merged | 2026-08-17 | 2026-08-20 |
| [#5145](https://github.com/ROCm/AMDMIGraphX/pull/5145) | [Release merge - no review] Problem cache (#5117) -> gpuep-r... | @danieyan-amd | merged | 2026-08-17 | 2026-08-20 |
| [#5155](https://github.com/ROCm/AMDMIGraphX/pull/5155) | Jenkins: delete build dir and clean workspace after each sta... | @causten | merged | 2026-08-19 | 2026-08-19 |
| [#5131](https://github.com/ROCm/AMDMIGraphX/pull/5131) | Remove MIGRAPHX_ENABLE_NHWC and make convolution layout a ba... | @pfultz2 | merged | 2026-08-12 | 2026-08-19 |
| [#5092](https://github.com/ROCm/AMDMIGraphX/pull/5092) | Add fp32 winograd for gfx12 | @pfultz2 | merged | 2026-07-23 | 2026-08-19 |
| [#4891](https://github.com/ROCm/AMDMIGraphX/pull/4891) | [AIMIGRAPHX-885] Add find_concat_same_input matcher | @TedThemistokleous | merged | 2026-05-16 | 2026-08-18 |
| [#4734](https://github.com/ROCm/AMDMIGraphX/pull/4734) | Bump onnx from 1.17.0 to 1.21.0 in /tools | @dependabot[bot] | merged | 2026-04-02 | 2026-08-17 |
| [#5135](https://github.com/ROCm/AMDMIGraphX/pull/5135) | Onnxruntime Weekly Sync 2026-08-14 | @github-actions[bot] | merged | 2026-08-14 | 2026-08-17 |
| [#5120](https://github.com/ROCm/AMDMIGraphX/pull/5120) | [AIMIGRAPHX-1229] Support ROCm10 TheRock packaging with alte... | @kentqian | merged | 2026-08-06 | 2026-08-17 |
| [#5014](https://github.com/ROCm/AMDMIGraphX/pull/5014) | Hoist and horizontal dot | @TedThemistokleous | merged | 2026-06-25 | 2026-08-17 |
| [#5132](https://github.com/ROCm/AMDMIGraphX/pull/5132) | Disable ccache when using #embed | @pfultz2 | merged | 2026-08-13 | 2026-08-17 |
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

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-08-30T13:23:19Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-08-30 |
| [#3987](https://github.com/ROCm/aiter/pull/3987) | [CK] [FlyDSL] Add FlyDSL FP8 MoE kernels (decode weight-deco... | @luocheng25 | open | 2026-06-29 | 2026-08-30 |
| [#5123](https://github.com/ROCm/aiter/pull/5123) | [Triton/Gluon] [HIP] [FlyDSL] dcp topk merge | @ganyi1996ppo | open | 2026-08-30 | 2026-08-30 |
| [#5113](https://github.com/ROCm/aiter/pull/5113) | [FlyDSL] clean attn-aux kernels: fx.* modernization cleanup | @coderfeli | draft | 2026-08-29 | 2026-08-30 |
| [#5116](https://github.com/ROCm/aiter/pull/5116) | [HIP] [CK] [FlyDSL] Remove obsolete availability helpers | @coderfeli | open | 2026-08-30 | 2026-08-30 |
| [#5122](https://github.com/ROCm/aiter/pull/5122) | [HIP] topk: fuse the DSA page-table transform into a coopera... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#5121](https://github.com/ROCm/aiter/pull/5121) | [Triton/Gluon] fp8_mqa_logits: gate buffer ops on the int32 ... | @xiaobochen-amd | open | 2026-08-30 | 2026-08-30 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-08-30 |
| [#5118](https://github.com/ROCm/aiter/pull/5118) | [FlyDSL] [Tune] Retune the Kimi-K3 a16w4 MoE tile geometry p... | @amd-wsung102 | draft | 2026-08-30 | 2026-08-30 |
| [#4787](https://github.com/ROCm/aiter/pull/4787) | [HIP] [JIT] [gfx950] Optimize Minimax M3 scoring & top-k ker... | @ukannika | open | 2026-08-17 | 2026-08-30 |
| [#5117](https://github.com/ROCm/aiter/pull/5117) | [Kernel] [Perf] MXFP6 non-temporal-store GEMM variants and F... | @jasainio | draft | 2026-08-30 | 2026-08-30 |
| [#4800](https://github.com/ROCm/aiter/pull/4800) | [JIT] [Bugfix] Make blob codegen cache publication transacti... | @Ruye-aa | open | 2026-08-17 | 2026-08-30 |
| [#4668](https://github.com/ROCm/aiter/pull/4668) | [FlyDSL] [gfx1250] add mha batchmode and kernel optimization | @jli-melchior | open | 2026-08-11 | 2026-08-30 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-08-29 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep SiLU A4W4 FlyDSL routing opt-in | @andyluo7 | open | 2026-08-27 | 2026-08-29 |
| [#5112](https://github.com/ROCm/aiter/pull/5112) | [FlyDSL] 1250 clean moe aux kernel codes and ir, add ut | @coderfeli | open | 2026-08-29 | 2026-08-29 |
| [#5097](https://github.com/ROCm/aiter/pull/5097) | [Triton/Gluon] Add config-aware repr to the attention kernel... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5105](https://github.com/ROCm/aiter/pull/5105) | [Triton/Gluon] Resolve basic-GEMM configs in the wrapper | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5103](https://github.com/ROCm/aiter/pull/5103) | [Triton/Gluon] Resolve fused-GEMM configs in the wrapper lay... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5098](https://github.com/ROCm/aiter/pull/5098) | [Triton/Gluon] Add config-aware repr to the MOE and fusion k... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5100](https://github.com/ROCm/aiter/pull/5100) | [Triton/Gluon] Add config-aware repr to the quant kernels | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5111](https://github.com/ROCm/aiter/pull/5111) | [dist] reuse comm groups when possible for memory saving | @gbyu-amd | open | 2026-08-29 | 2026-08-29 |
| [#4712](https://github.com/ROCm/aiter/pull/4712) | [Triton/Gluon] [CI] Add fused KDA decode kernel (conv1d + re... | @mengfei-jiang | open | 2026-08-12 | 2026-08-29 |
| [#5110](https://github.com/ROCm/aiter/pull/5110) | [CI] Drop registry credentials after jobs on persistent runn... | @zufayu | open | 2026-08-29 | 2026-08-29 |
| [#5109](https://github.com/ROCm/aiter/pull/5109) | [CI] Avoid direct github.event interpolation in run: blocks ... | @zufayu | open | 2026-08-29 | 2026-08-29 |
| [#5068](https://github.com/ROCm/aiter/pull/5068) | Add gfx1250 a8w8 mxscale BMM scaffold with preshuffled B. | @yzhou103 | draft | 2026-08-28 | 2026-08-29 |
| [#4991](https://github.com/ROCm/aiter/pull/4991) | Fix inverse rope group quant gfx1250 | @yzhou103 | draft | 2026-08-25 | 2026-08-29 |
| [#4500](https://github.com/ROCm/aiter/pull/4500) | [Triton/Gluon] [FlyDSL] [GFX9] [GFX12] EP MOE changes | @k50112113 | open | 2026-08-01 | 2026-08-29 |
| [#5041](https://github.com/ROCm/aiter/pull/5041) | [FlyDSL] [JIT] [gfx1250] Add batched a8w8 mxscale_128 gemm | @aoli26 | open | 2026-08-27 | 2026-08-29 |
| [#5042](https://github.com/ROCm/aiter/pull/5042) | [HIP] fix(topk): correct lambda arity in ob::radix_kernel / ... | @JohnQinAMD | open | 2026-08-27 | 2026-08-29 |
| [#5043](https://github.com/ROCm/aiter/pull/5043) | [ASM] [HIP] [gfx1250]asm mha bf16 hd192x128 | @shay-li77 | open | 2026-08-27 | 2026-08-29 |
| [#5046](https://github.com/ROCm/aiter/pull/5046) | [HIP] [JIT] fp8_mqa_logits: hand-written gfx950 prefill inde... | @sumin-hong | open | 2026-08-27 | 2026-08-29 |
| [#5047](https://github.com/ROCm/aiter/pull/5047) | [HIP] [JIT] fp8_paged_mqa_logits: hand-written gfx950 decode... | @sumin-hong | open | 2026-08-27 | 2026-08-29 |
| [#5053](https://github.com/ROCm/aiter/pull/5053) | [Triton/Gluon] combine routing early exit | @k50112113 | open | 2026-08-27 | 2026-08-29 |
| [#5055](https://github.com/ROCm/aiter/pull/5055) | [Triton/Gluon] [GFX12] mxfp8 gemm cga update | @k50112113 | open | 2026-08-27 | 2026-08-29 |
| [#5062](https://github.com/ROCm/aiter/pull/5062) | [CK] [FlyDSL] Add tuned CK a8w8 blockscale GEMM configs for ... | @mustafayildirim | open | 2026-08-27 | 2026-08-29 |
| [#5063](https://github.com/ROCm/aiter/pull/5063) | [Triton/Gluon] Fix BLOCK_M for large prefill with head_size ... | @mustafayildirim | open | 2026-08-27 | 2026-08-29 |
| [#5064](https://github.com/ROCm/aiter/pull/5064) | [HIP] [JIT] [Kernel][Perf][Hardware][gfx1201] Add RX 9070 XT... | @davidchen-rocm | open | 2026-08-28 | 2026-08-29 |
| [#5107](https://github.com/ROCm/aiter/pull/5107) | [HIP] [JIT] [gfx1250] Add auto-detect stepping and B0-only g... | @dbyoung18 | open | 2026-08-29 | 2026-08-29 |
| [#4355](https://github.com/ROCm/aiter/pull/4355) | [FlyDSL] [Feature] Tiered persistent radix-select decode Top... | @JH-Leon-KIM-AMD | open | 2026-07-23 | 2026-08-29 |
| [#5104](https://github.com/ROCm/aiter/pull/5104) | [Triton/Gluon] Resolve batched-GEMM and feed-forward configs... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5102](https://github.com/ROCm/aiter/pull/5102) | [Triton/Gluon] Resolve attention configs in the wrapper laye... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5099](https://github.com/ROCm/aiter/pull/5099) | [Triton/Gluon] Add config-aware repr to the rope and normali... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5106](https://github.com/ROCm/aiter/pull/5106) | [Triton/Gluon] Move the sage-attention launch params into th... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5101](https://github.com/ROCm/aiter/pull/5101) | [Triton/Gluon] Resolve conv configs in the launch layer | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5083](https://github.com/ROCm/aiter/pull/5083) | [Triton/Gluon] [CI] [DO NOT MERGE] ci: triton release_tmp2 +... | @yuyzhang512 | open | 2026-08-28 | 2026-08-29 |
| [#5084](https://github.com/ROCm/aiter/pull/5084) | [UT] Compare opus, asm and triton in the sparse-prefill test | @kaiyang-1 | open | 2026-08-28 | 2026-08-29 |
| [#4860](https://github.com/ROCm/aiter/pull/4860) | [Triton/Gluon] [CK] bf16 persistent gemm | @amirumoAMD | open | 2026-08-19 | 2026-08-29 |
| [#5096](https://github.com/ROCm/aiter/pull/5096) | [CK] Fix/ck2stages missing headers | @MohitAMD | open | 2026-08-29 | 2026-08-29 |
| [#5094](https://github.com/ROCm/aiter/pull/5094) | [Triton/Gluon] Take the MOE scale layout from shuffle_scale_... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5095](https://github.com/ROCm/aiter/pull/5095) | [Triton/Gluon] Add config-aware repr to the GEMM and conv1d ... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5093](https://github.com/ROCm/aiter/pull/5093) | [Triton/Gluon] Import tests and benchmarks through the categ... | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#5092](https://github.com/ROCm/aiter/pull/5092) | [Triton/Gluon] Use absolute imports in the wrapper layer | @Boss2002n | open | 2026-08-29 | 2026-08-29 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-08-28 |
| [#5090](https://github.com/ROCm/aiter/pull/5090) | [Triton/Gluon] [Bugfix] fwd_decode: only one K-block program... | @mark14wu | open | 2026-08-28 | 2026-08-28 |
| [#5089](https://github.com/ROCm/aiter/pull/5089) | [FlyDSL] [Bugfix] Use FLYDSL_GPU_ARCH LDS limit so gfx950 8-... | @dwiddows | open | 2026-08-28 | 2026-08-28 |
| [#5088](https://github.com/ROCm/aiter/pull/5088) | [Triton/Gluon] Refactor Unified Attention | @farlukas | draft | 2026-08-28 | 2026-08-28 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-08-28 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | Add gfx1201 BF16 G1U1 selected large-M Triton MoE path | @keneoneth | draft | 2026-08-27 | 2026-08-28 |
| [#4999](https://github.com/ROCm/aiter/pull/4999) | [Triton/Gluon] Fix AMDGCN codegen abort in fp8_mqa_logits pa... | @kzjeef | open | 2026-08-25 | 2026-08-28 |
| [#5027](https://github.com/ROCm/aiter/pull/5027) | [HIP] [ROCm][Perf] Add head_dim 512 + weightless V-norm to f... | @mpashkovskii | open | 2026-08-26 | 2026-08-28 |
| [#4919](https://github.com/ROCm/aiter/pull/4919) | [Triton/Gluon] [GFX950] Sparse paged attention and Sparse ML... | @cagrikymk | open | 2026-08-21 | 2026-08-28 |
| [#5002](https://github.com/ROCm/aiter/pull/5002) | [ROCm] Add Qwen3 Next FP8 QKV preparation | @nholmber | draft | 2026-08-26 | 2026-08-28 |
| [#5087](https://github.com/ROCm/aiter/pull/5087) | [HIP] [BugFix] Fix BF16 FMHA extreme negative logits | @akshatvishu | open | 2026-08-28 | 2026-08-28 |
| [#4970](https://github.com/ROCm/aiter/pull/4970) | [FlyDSL] QRInt4: INT4 two-shot all-reduce for gfx942/gfx950 | @samremes | open | 2026-08-24 | 2026-08-28 |
| [#5085](https://github.com/ROCm/aiter/pull/5085) | [Docs] Update docs for the single nested config layout | @Boss2002n | open | 2026-08-28 | 2026-08-28 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [HIP] [FlyDSL] Fused K5 + K6 gfx942 kernel fo... | @vpietila-amd | open | 2026-08-20 | 2026-08-28 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | open | 2026-08-26 | 2026-08-28 |
| [#4984](https://github.com/ROCm/aiter/pull/4984) | feat(mega_moe/gfx1250): quantize before dispatch, on an fp8 ... | @jhchouuu | open | 2026-08-25 | 2026-08-28 |
| [#4789](https://github.com/ROCm/aiter/pull/4789) | [FlyDSL] update gemm stage2 v2 kernel | @charlieguo1106 | open | 2026-08-17 | 2026-08-28 |
| [#5077](https://github.com/ROCm/aiter/pull/5077) | Revert "[TRITON][GLUON] Prefill MQA Logits kernel tuning for... | @zhuyuhua-v | draft | 2026-08-28 | 2026-08-28 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | open | 2026-08-06 | 2026-08-28 |
| [#5057](https://github.com/ROCm/aiter/pull/5057) | [CI] Mirror PR title component tags as auto-managed labels | @Boss2002n | open | 2026-08-27 | 2026-08-28 |
| [#5011](https://github.com/ROCm/aiter/pull/5011) | [FlyDSL] Add TopK | @lirui927 | draft | 2026-08-26 | 2026-08-28 |
| [#5081](https://github.com/ROCm/aiter/pull/5081) | Add fused SiTUv2 activation + per-token FP8 quant kernel | @XiaobingSuper | draft | 2026-08-28 | 2026-08-28 |
| [#4526](https://github.com/ROCm/aiter/pull/4526) | [HIP] [FlyDSL] [Kernel] Extend MXFP4 GEMM1 replacement to A4... | @fsx950223 | open | 2026-08-03 | 2026-08-28 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [Triton/Gluon] [FlyDSL] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-08-28 |
| [#5072](https://github.com/ROCm/aiter/pull/5072) | [Config] Add GLM-5.2 (TP4) a8w8 blockscale GEMM tunings for ... | @jin-amd | open | 2026-08-28 | 2026-08-28 |
| [#5079](https://github.com/ROCm/aiter/pull/5079) | [Triton/Gluon] [CI] [DO NOT MERGE] ci: triton release_tmp2 +... | @yuyzhang512 | open | 2026-08-28 | 2026-08-28 |
| [#4950](https://github.com/ROCm/aiter/pull/4950) | [Triton/Gluon] [gfx950] gated_delta_rule: drop removed tl.ma... | @yuyzhang512 | open | 2026-08-24 | 2026-08-28 |
| [#4761](https://github.com/ROCm/aiter/pull/4761) | [Triton/Gluon] [PERF] Optimize Triton unified attention pref... | @vorapolsiloai | open | 2026-08-14 | 2026-08-28 |
| [#4841](https://github.com/ROCm/aiter/pull/4841) | [HIP] fix(topk): add acquire fence for mb radix barrier last... | @Phi-C | open | 2026-08-19 | 2026-08-28 |
| [#4441](https://github.com/ROCm/aiter/pull/4441) | [Triton/Gluon] [FlyDSL] feat(flydsl): Add HSTU Forward kerne... | @damien-lejeune | open | 2026-07-29 | 2026-08-28 |
| [#5073](https://github.com/ROCm/aiter/pull/5073) | [Docs] docs: update README | @shengnxu | open | 2026-08-28 | 2026-08-28 |
| [#4958](https://github.com/ROCm/aiter/pull/4958) | [HIP] [detorch] Make aiter_opus_plus.h torch-free (strip c10... | @amd-ruitang3 | open | 2026-08-24 | 2026-08-28 |
| [#5067](https://github.com/ROCm/aiter/pull/5067) | [Triton] attn_res: add PEEL prefill path | @yanxuer-999 | draft | 2026-08-28 | 2026-08-28 |
| [#4862](https://github.com/ROCm/aiter/pull/4862) | [FlyDSL] add mla for gfx1250 | @xiangM99 | open | 2026-08-19 | 2026-08-28 |
| [#4813](https://github.com/ROCm/aiter/pull/4813) | [HIP] [JIT] Fused MiniMaxM3 QKNorm+RoPE+CacheInsert | @weitliao | open | 2026-08-18 | 2026-08-28 |
| [#4997](https://github.com/ROCm/aiter/pull/4997) | [Triton/Gluon] Move fp4 GEMM gluon to _gluon_kernels | @vgokhale | open | 2026-08-25 | 2026-08-28 |
| [#4870](https://github.com/ROCm/aiter/pull/4870) | Add kernel PR validation and structural D9 scanning | @jhinpan | open | 2026-08-20 | 2026-08-28 |
| [#4951](https://github.com/ROCm/aiter/pull/4951) | [CK] [FlyDSL] [JIT] add mxfp8 a8w8 blockscale for gfx950 | @solinzby1 | open | 2026-08-24 | 2026-08-28 |
| [#4985](https://github.com/ROCm/aiter/pull/4985) | [FlyDSL] comm fused moe | @yifehuan | draft | 2026-08-25 | 2026-08-28 |
| [#4894](https://github.com/ROCm/aiter/pull/4894) | [Triton/Gluon] Add MXFP4/MXFP8 gfx950/gfx1250 gluon quant ke... | @NimitPtl | open | 2026-08-21 | 2026-08-28 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-08-28 |
| [#4815](https://github.com/ROCm/aiter/pull/4815) | [Config] Add Qwen3.6 35B-A3B FMoE configs for gfx1201 | @keneoneth | open | 2026-08-18 | 2026-08-27 |
| [#4996](https://github.com/ROCm/aiter/pull/4996) | [Bugfix] Build pybind modules against torch's bundled pybind... | @Rohan138 | draft | 2026-08-25 | 2026-08-27 |
| [#3686](https://github.com/ROCm/aiter/pull/3686) | [CI] [DO NOT MERGE] Evaluating impact of LLVM bump in Triton... | @brunomazzottiamd | open | 2026-06-11 | 2026-08-27 |
| [#4837](https://github.com/ROCm/aiter/pull/4837) | [Triton][gfx950] Add gemm amxfp8wmxfp8 kernel | @giuseppegrossi | draft | 2026-08-18 | 2026-08-27 |
| [#4974](https://github.com/ROCm/aiter/pull/4974) | [HIP] Fix (custom_all_reduce): correct output RankData slot ... | @afriedri | open | 2026-08-24 | 2026-08-27 |
| [#4868](https://github.com/ROCm/aiter/pull/4868) | [Triton/Gluon] [Bugfix] Guard RDNA unified attention against... | @amd-xavierwang | open | 2026-08-19 | 2026-08-27 |
| [#4146](https://github.com/ROCm/aiter/pull/4146) | [Triton/Gluon] [GFX1250] fused_add_rmsnorm_pad() gluon equiv... | @amd-jrosas | open | 2026-07-08 | 2026-08-27 |
| [#3937](https://github.com/ROCm/aiter/pull/3937) | [Triton/Gluon] Gluon MXFP4 Fuse Reduce Quant | @amd-jrosas | open | 2026-06-25 | 2026-08-27 |
| [#3606](https://github.com/ROCm/aiter/pull/3606) | [HIP] [Bugfix][MLA] Correct final_lse in PS MLA prefill kern... | @simondanielsson | open | 2026-06-08 | 2026-08-27 |
| [#5048](https://github.com/ROCm/aiter/pull/5048) | [Triton/Gluon] [gfx950] add an optimized prefill fp8_mqa_log... | @Dewei-Wang-sh | open | 2026-08-27 | 2026-08-27 |
| [#4538](https://github.com/ROCm/aiter/pull/4538) | [FlyDSL] gfx950 FP8 MQA logits indexer kernel | @vpietila-amd | open | 2026-08-03 | 2026-08-27 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | [HIP] [JIT] [Build] Add Windows support | @0xDELUXA | open | 2026-04-11 | 2026-08-27 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | draft | 2026-07-08 | 2026-08-27 |
| [#4992](https://github.com/ROCm/aiter/pull/4992) | [FlyDSL] gfx950 hd=72 varlen FMHA for Qwen3-VL prefill | @msaffari-amd | draft | 2026-08-25 | 2026-08-27 |
| [#5035](https://github.com/ROCm/aiter/pull/5035) | [Triton/Attention] Clamp unified_attention 3D config to the ... | @lobo235 | draft | 2026-08-26 | 2026-08-27 |
| [#4595](https://github.com/ROCm/aiter/pull/4595) | [WIP]opt tilesize 128x256x256 for fmoe gemm v2 | @charlieguo1106 | draft | 2026-08-06 | 2026-08-27 |
| [#4980](https://github.com/ROCm/aiter/pull/4980) | [FlyDSL] [CI] [MegaMoE] A4W4 mega_moe operator | @Yaowu-Xiong | open | 2026-08-25 | 2026-08-27 |
| [#4747](https://github.com/ROCm/aiter/pull/4747) | Fp8 mxscale bmm bpreshuffle opt | @yzhou103 | draft | 2026-08-14 | 2026-08-27 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [CK] Add MHA forward tuning scripts and kernel-info dumping ... | @huishi-hs | open | 2026-08-26 | 2026-08-27 |
| [#4181](https://github.com/ROCm/aiter/pull/4181) | [Triton/Gluon] Fix ragged-K mask in batched A16WFP4 GEMM | @mjkvaak-amd | open | 2026-07-10 | 2026-08-27 |
| [#5001](https://github.com/ROCm/aiter/pull/5001) | [FlyDSL] feat(mega_moe): optimize fused stage1 and AOT bundl... | @GwilliamHu | open | 2026-08-26 | 2026-08-27 |
| [#4994](https://github.com/ROCm/aiter/pull/4994) | [AMD][DSV4] Fix(fmoe): fuse stage-1 fp8 quant on the heurist... | @karverma-amd | open | 2026-08-25 | 2026-08-27 |
| [#4961](https://github.com/ROCm/aiter/pull/4961) | [HIP] [OPUS] [JIT] Unify OPUS GEMM/BMM interfaces and use To... | @Fyzyukk | open | 2026-08-24 | 2026-08-27 |
| [#4839](https://github.com/ROCm/aiter/pull/4839) | [HIP] [Bugfix] Guard against negative expert ids in MoE sort... | @xudonlyu | open | 2026-08-18 | 2026-08-27 |
| [#5009](https://github.com/ROCm/aiter/pull/5009) | [HIP] [Feature] Radix-select top-k for wide ungrouped MoE ro... | @fanxingran | open | 2026-08-26 | 2026-08-27 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | [FlyDSL] gfx1201 (RDNA4) FlyDSL BF16 attention optimizations... | @pds-amd | open | 2026-07-10 | 2026-08-27 |
| [#5038](https://github.com/ROCm/aiter/pull/5038) | [Triton/Gluon] Moe routing optimizations | @lburzawa | open | 2026-08-27 | 2026-08-27 |
| [#4975](https://github.com/ROCm/aiter/pull/4975) | [Build] [Feature] Add MK1 persistent decoder provider | @ssharma4-amd | open | 2026-08-24 | 2026-08-27 |
| [#5010](https://github.com/ROCm/aiter/pull/5010) | [Triton/Gluon] Support caller-defined padding cache slot in ... | @tanth47 | open | 2026-08-26 | 2026-08-27 |
| [#4957](https://github.com/ROCm/aiter/pull/4957) | [MLA] Fix gfx942 gqa64 sparse-MLA decode GPU fault (route to... | @raviguptaamd | open | 2026-08-24 | 2026-08-26 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [FlyDSL] [CI] FlyDSL gemm_decode: small-M dense GEMM k... | @vedenev-amd | open | 2026-07-07 | 2026-08-26 |
| [#4584](https://github.com/ROCm/aiter/pull/4584) | [Triton/Gluon] kda gluon gfx1250 implementation | @omuhamma | open | 2026-08-06 | 2026-08-26 |
| [#4882](https://github.com/ROCm/aiter/pull/4882) | [Triton/Gluon] [QSA] Add paged sparse attention kernels | @haic0 | open | 2026-08-20 | 2026-08-26 |
| [#4907](https://github.com/ROCm/aiter/pull/4907) | [FlyDSL] Add GDN MTP kernels: causal conv1d update and gated... | @yiijin | open | 2026-08-21 | 2026-08-26 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [HIP] [OPUS] [JIT] [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-08-26 |
| [#3364](https://github.com/ROCm/aiter/pull/3364) | [Triton/Gluon] Reduced gfx1250 triton_tests for FFM CI | @Boss2002n | open | 2026-05-26 | 2026-08-26 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-08-26 |
| [#4875](https://github.com/ROCm/aiter/pull/4875) | [FlyDSL] [CI] add gfx942 FMHA varlen backward kernel for d_q... | @amd-wangfan | open | 2026-08-20 | 2026-08-26 |
| [#4458](https://github.com/ROCm/aiter/pull/4458) | CI: add extended test workflow | @gyohuangxin | draft | 2026-07-30 | 2026-08-26 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | [FlyDSL] flydsl implementation of a16w16 gemm | @omuhamma | open | 2026-04-13 | 2026-08-26 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-08-26 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [Triton/Gluon] [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-24 | 2026-08-26 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-08-26 |
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-26 |
| [#3263](https://github.com/ROCm/aiter/pull/3263) | Fused ar(use_new=false) + rmsnorm | @IzacharyI | open | 2026-05-19 | 2026-08-26 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-08-26 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-08-26 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-08-26 |
| [#4214](https://github.com/ROCm/aiter/pull/4214) | fix gfx12 ENABLE_Ck0 cmp err | @feifei14119 | open | 2026-07-13 | 2026-08-26 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-08-26 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-08-26 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-08-26 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-08-26 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-08-26 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-08-26 |
| [#3535](https://github.com/ROCm/aiter/pull/3535) | Add Radeon GPU CI smoke test | @vivienfanghuagood | open | 2026-06-04 | 2026-08-26 |
| [#4962](https://github.com/ROCm/aiter/pull/4962) | [CI] ci: add Kimi and MiniMax to ATOM DI matrix | @JiaoliangYu | open | 2026-08-24 | 2026-08-26 |
| [#4968](https://github.com/ROCm/aiter/pull/4968) | [Triton/Gluon] [PA] Support Q/K D192 with asymmetric K/V hea... | @sammysun0711 | open | 2026-08-24 | 2026-08-26 |
| [#4614](https://github.com/ROCm/aiter/pull/4614) | [Triton/Gluon] [GFX950] Add Unified Attention Gluon Kernel | @cagrikymk | open | 2026-08-06 | 2026-08-25 |
| [#4990](https://github.com/ROCm/aiter/pull/4990) | [HIP] [ROCm] Widen the AR+RMSNorm reduce-scatter producer | @EricKing626 | draft | 2026-08-25 | 2026-08-25 |
| [#4993](https://github.com/ROCm/aiter/pull/4993) | [Triton/Gluon] Fix PR#4562 and PR#4470 for GPT-OSS-120b on g... | @sogalin | open | 2026-08-25 | 2026-08-25 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | [FlyDSL] Paged mla indexer | @fhuizing | open | 2026-07-13 | 2026-08-25 |
| [#4977](https://github.com/ROCm/aiter/pull/4977) | [HIP] [Feat] Single-kernel Lamport fused all-reduce + RMSNor... | @EricKing626 | draft | 2026-08-25 | 2026-08-25 |
| [#4779](https://github.com/ROCm/aiter/pull/4779) | [Bugfix] Handle GroupNorm autocast safely | @akshatvishu | open | 2026-08-15 | 2026-08-25 |
| [#4963](https://github.com/ROCm/aiter/pull/4963) | [FlyDSL] gfx942 fp8_mqa_logits: let _auto_variant choose row... | @jin-amd | open | 2026-08-24 | 2026-08-25 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-08-25 |
| [#4424](https://github.com/ROCm/aiter/pull/4424) | Document and automate the AITER release plan | @gyohuangxin | draft | 2026-07-28 | 2026-08-25 |
| [#4981](https://github.com/ROCm/aiter/pull/4981) | [FlyDSL] mega all gather merge stage1 | @Bernard-Liu | draft | 2026-08-25 | 2026-08-25 |
| [#4925](https://github.com/ROCm/aiter/pull/4925) | test(activation): skip fp4 silu_and_mul_quant on non-gfx950 ... | @zjin-lcf | open | 2026-08-23 | 2026-08-25 |
| [#4966](https://github.com/ROCm/aiter/pull/4966) | [FlyDSL] Prevent duplicate JIT tracing on concurrent kernel ... | @xytpai | open | 2026-08-24 | 2026-08-25 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-08-25 |
| [#4916](https://github.com/ROCm/aiter/pull/4916) | [Bugfix] Fix ASM split-K semaphore deadlock under CUDA graph... | @JohnQinAMD | open | 2026-08-21 | 2026-08-24 |
| [#4617](https://github.com/ROCm/aiter/pull/4617) | feat(fused_moe): accept a caller-provided output buffer | @RolaoDenthu | open | 2026-08-06 | 2026-08-24 |
| [#4645](https://github.com/ROCm/aiter/pull/4645) | [Triton/Gluon] [MHA][gfx942] Add FP8 D192/V128 prefill | @maeehart | open | 2026-08-09 | 2026-08-24 |
| [#4582](https://github.com/ROCm/aiter/pull/4582) | [Triton/Gluon] [MLA][gfx942] Add CDNA3 decode kernel | @maeehart | open | 2026-08-05 | 2026-08-24 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | open | 2026-07-21 | 2026-08-24 |
| [#4880](https://github.com/ROCm/aiter/pull/4880) | [Triton/Gluon] fix pa_prefill perf regression for small HEAD... | @mengfei-jiang | open | 2026-08-20 | 2026-08-24 |
| [#4878](https://github.com/ROCm/aiter/pull/4878) | [Triton/Gluon] triton fp4gemm disable gluon on gfx1250 | @junhaha666 | open | 2026-08-20 | 2026-08-24 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-08-24 |
| [#4915](https://github.com/ROCm/aiter/pull/4915) | [Config] [Kimi K3 fix] Drop gfx942/gfx950 opus rows from the... | @hyukjlee | open | 2026-08-21 | 2026-08-24 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-08-24 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-08-24 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-08-23 |
| [#4383](https://github.com/ROCm/aiter/pull/4383) | [Triton/Gluon] Add gluon support for MXFP4 quant kernel in g... | @NimitPtl | open | 2026-07-24 | 2026-08-22 |
| [#4762](https://github.com/ROCm/aiter/pull/4762) | feat(moe): consume prepared stage1 activation scales | @JohnQinAMD | open | 2026-08-14 | 2026-08-22 |
| [#4698](https://github.com/ROCm/aiter/pull/4698) | [Triton/Gluon] [GDN] Accept token-major w/u/g in opt-VK pref... | @JohnQinAMD | open | 2026-08-12 | 2026-08-22 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-08-22 |
| [#4641](https://github.com/ROCm/aiter/pull/4641) | [FlyDSL] Add SwiGLU activation to moe_gemm_2stage stage1 ker... | @akii96 | open | 2026-08-08 | 2026-08-21 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | Implement FlyDSL version of fused_qk_norm_mrope_3d_cache_pts... | @amd-meskelin | draft | 2026-07-24 | 2026-08-21 |
| [#4556](https://github.com/ROCm/aiter/pull/4556) | [PERF] Add opt-in atomic stage2 override | @vorapolsiloai | open | 2026-08-04 | 2026-08-21 |
| [#4715](https://github.com/ROCm/aiter/pull/4715) | [FlyDSL] split-K hgemm: make semaphore/signal workspace CUDA... | @xiaohuguo2023 | draft | 2026-08-12 | 2026-08-21 |
| [#4885](https://github.com/ROCm/aiter/pull/4885) | [FlyDSL] feat(flydsl): Add HSTU Backward kernel | @SamiAario-AMD | open | 2026-08-20 | 2026-08-21 |
| [#4332](https://github.com/ROCm/aiter/pull/4332) | [FlyDSL] feat(flydsl): Add paged-attention Tile kernel | @fsx950223 | open | 2026-07-22 | 2026-08-21 |
| [#4896](https://github.com/ROCm/aiter/pull/4896) | [Triton/Gluon] for k3 sa submit | @gbyu-amd | draft | 2026-08-21 | 2026-08-21 |
| [#4824](https://github.com/ROCm/aiter/pull/4824) | [Config] add dsv4 moe config on gfx1250 | @junhaha666 | open | 2026-08-18 | 2026-08-21 |
| [#4808](https://github.com/ROCm/aiter/pull/4808) | fix script | @Boss2002n | draft | 2026-08-17 | 2026-08-21 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | draft | 2026-07-14 | 2026-08-21 |
| [#4897](https://github.com/ROCm/aiter/pull/4897) | [Triton/Gluon] [CI] [DO NOT MERGE] Triton release test | @yuyzhang512 | open | 2026-08-21 | 2026-08-21 |
| [#4794](https://github.com/ROCm/aiter/pull/4794) | [HIP] [OPUS] [JIT] Chefang/pa decode opus | @fangche123 | open | 2026-08-17 | 2026-08-21 |
| [#4872](https://github.com/ROCm/aiter/pull/4872) | [HIP] fix(mla): fold fp8 qlen 2 onto the qseqlen-4 kernel on... | @JohnQinAMD | open | 2026-08-20 | 2026-08-21 |
| [#4876](https://github.com/ROCm/aiter/pull/4876) | [FlyDSL] remove flydsl_moe2 v1 code | @charlieguo1106 | open | 2026-08-20 | 2026-08-21 |
| [#4254](https://github.com/ROCm/aiter/pull/4254) | [FlyDSL] [JIT] Mxfp8 gemm | @solinzby1 | open | 2026-07-16 | 2026-08-20 |
| [#4857](https://github.com/ROCm/aiter/pull/4857) | [Triton/Gluon] [CI] [DO NOT MERGE] Triton release test | @yuyzhang512 | open | 2026-08-19 | 2026-08-20 |
| [#4881](https://github.com/ROCm/aiter/pull/4881) | [CI] ci: add DCO signoff check | @gyohuangxin | draft | 2026-08-20 | 2026-08-20 |
| [#4817](https://github.com/ROCm/aiter/pull/4817) | [HIP] fix: support torch.Stream in ctypes conversion | @chuyeh | open | 2026-08-18 | 2026-08-20 |
| [#4845](https://github.com/ROCm/aiter/pull/4845) | [HIP] Support mixed-dtype inputs in biased grouped top-k | @BadrBasowid | open | 2026-08-19 | 2026-08-20 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-08-20 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-08-20 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-08-20 |
| [#4147](https://github.com/ROCm/aiter/pull/4147) | [Triton/Gluon] [GFX950] Add MHA Gluon Kernel | @lucas-santos-amd | open | 2026-07-08 | 2026-08-20 |
| [#3972](https://github.com/ROCm/aiter/pull/3972) |  Add gelu_tanh activation to no-quant CK 2-stage fused MoE | @jonahbernard | open | 2026-06-27 | 2026-08-19 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [BUG][CK][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-08-19 |
| [#4772](https://github.com/ROCm/aiter/pull/4772) | [FlyDSL] [gfx950] Add dense BF16 x MXFP4 GEMM | @LiuYinfeng01 | open | 2026-08-15 | 2026-08-19 |
| [#4334](https://github.com/ROCm/aiter/pull/4334) | [Triton/Gluon] perf(fp8_mqa_logits): runtime-autotune the gf... | @EricKing626 | open | 2026-07-22 | 2026-08-19 |
| [#3956](https://github.com/ROCm/aiter/pull/3956) | [Triton/Gluon] fix(triton): support gfx1201 unified attentio... | @papadako | open | 2026-06-26 | 2026-08-19 |
| [#4814](https://github.com/ROCm/aiter/pull/4814) | [Triton][gfx1151] Enable GEMM-A16W16 | @tangzzycc | open | 2026-08-18 | 2026-08-19 |
| [#4816](https://github.com/ROCm/aiter/pull/4816) | [Config] [Tuning] Add DSv4 a8w8 blockscale GEMM configs for ... | @zzw09773 | open | 2026-08-18 | 2026-08-19 |
| [#4821](https://github.com/ROCm/aiter/pull/4821) | feat(ep): TDM dispatch transport for gfx1250 | @XingerZhu | open | 2026-08-18 | 2026-08-19 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-08-18 |
| [#4758](https://github.com/ROCm/aiter/pull/4758) | [Gluon][MLA] Deeper async-copy pipeline in the bh16 stage-1 ... | @amd-ethany | open | 2026-08-14 | 2026-08-18 |
| [#4771](https://github.com/ROCm/aiter/pull/4771) | [Triton][FMHA] Fused paged-prefill kernel for page_size=1, h... | @amd-ethany | open | 2026-08-15 | 2026-08-18 |
| [#4802](https://github.com/ROCm/aiter/pull/4802) | Refactor bench_mha to use -o as boolean flag | @AlexeySachkov | open | 2026-08-17 | 2026-08-18 |
| [#4812](https://github.com/ROCm/aiter/pull/4812) | Fix gfx1250 (NPS2, DPX mode) custom all-reduce input publica... | @hubertlu-tw | draft | 2026-08-17 | 2026-08-18 |
| [#4768](https://github.com/ROCm/aiter/pull/4768) | [Bugfix] Include headers necessary for ROCm 10.0.0 | @rjrock | open | 2026-08-14 | 2026-08-17 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-08-17 |
| [#4481](https://github.com/ROCm/aiter/pull/4481) | parallelize gather_kv_b_proj context chunks | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-17 |
| [#4778](https://github.com/ROCm/aiter/pull/4778) | [gfx1100] Enable RDNA3 in arch allow-list + Triton GEMM A8W8... | @okone1995 | open | 2026-08-15 | 2026-08-17 |
| [#4786](https://github.com/ROCm/aiter/pull/4786) | fix(custom_all_reduce): use SYSTEM scope + ACQUIRE ordering ... | @hekhong-png | open | 2026-08-16 | 2026-08-17 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-08-16 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-08-15 |
| [#4775](https://github.com/ROCm/aiter/pull/4775) | [Attention] Expose paged MQA SplitKV override | @AMD-yanfeiwang | draft | 2026-08-15 | 2026-08-15 |
| [#4629](https://github.com/ROCm/aiter/pull/4629) | [GLM-5.2 MXFP4][Tuning] Retune MXFP4 fused-MoE for gfx950 (T... | @nholmber | open | 2026-08-07 | 2026-08-14 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | torch-free a4w4 GEMM + C++ library build | @Micky774 | open | 2026-07-07 | 2026-08-14 |
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
| [#4648](https://github.com/ROCm/aiter/pull/4648) | [Triton][Hardware] Add gfx1100 A8W8 tuning config | @01xjw | open | 2026-08-10 | 2026-08-14 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | draft | 2026-07-08 | 2026-08-14 |
| [#4739](https://github.com/ROCm/aiter/pull/4739) | [Misc] Harden AITER_ASM_DIR code-object loading | @fjankovi | draft | 2026-08-13 | 2026-08-13 |
| [#4622](https://github.com/ROCm/aiter/pull/4622) | [FlyDSL] Replace the split-K atomic combine with a workspace... | @JohnQinAMD | open | 2026-08-07 | 2026-08-13 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-08-13 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-08-13 |
| [#4637](https://github.com/ROCm/aiter/pull/4637) | fix(quant): use saturating RNE for scaled int8 casts | @skyguan92 | open | 2026-08-07 | 2026-08-13 |
| [#4716](https://github.com/ROCm/aiter/pull/4716) | Skip CK batch-prefill paged-KV OOB fault cell (fp16/bf16, he... | @johannes-graner | open | 2026-08-12 | 2026-08-13 |
| [#4704](https://github.com/ROCm/aiter/pull/4704) | [fmoe] Add extern_moe_output param for combine zero-copy | @kawhil-amd | open | 2026-08-12 | 2026-08-13 |
| [#4592](https://github.com/ROCm/aiter/pull/4592) | Add bf16 gemm config dsv4 on gfx12 | @junhaha666 | open | 2026-08-06 | 2026-08-13 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-08-13 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | feat: Support LoongArch64, LoongArch64 not support CodeModel... | @Xinmudotmoe | open | 2026-08-12 | 2026-08-13 |
| [#4242](https://github.com/ROCm/aiter/pull/4242) | [gfx1151] [triton-fa]: tune FlashAttention backward configs | @hogeheer499-commits | open | 2026-07-14 | 2026-08-12 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-08-14 |
| [#4691](https://github.com/ROCm/aiter/pull/4691) | [Triton][GFX12] Fix Gluon API compatibility | @leo-automation | open | 2026-08-11 | 2026-08-12 |
| [#4542](https://github.com/ROCm/aiter/pull/4542) | Declare fused_moe/tuned_gemm preshuffled weight layout | @yzhou103 | open | 2026-08-04 | 2026-08-12 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [KIMI-K3] Enable KDA per-channel decay gate in FlyDSL GDR de... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-08-12 |
| [#4696](https://github.com/ROCm/aiter/pull/4696) | Fix multi-rank JIT import race for on-demand modules | @Lzy17 | open | 2026-08-11 | 2026-08-12 |
| [#4640](https://github.com/ROCm/aiter/pull/4640) | feat(triton): enable gfx1100 MXFP4 MoE | @skyguan92 | open | 2026-08-08 | 2026-08-12 |
| [#4689](https://github.com/ROCm/aiter/pull/4689) | [triton][gemm] gemm_a16wfp4: mask the b_scales load when EVE... | @lijinpei-amd | open | 2026-08-11 | 2026-08-12 |
| [#4663](https://github.com/ROCm/aiter/pull/4663) | [tune] DSv4 bf16: add gfx950 LM-head GEMM configs (N=129280,... | @jiacao-amd | draft | 2026-08-10 | 2026-08-12 |
| [#4664](https://github.com/ROCm/aiter/pull/4664) | [tune] DSv4 a8w8 blockscale: add gfx950 configs for three MI... | @jiacao-amd | draft | 2026-08-10 | 2026-08-12 |
| [#4690](https://github.com/ROCm/aiter/pull/4690) | [triton][gemm] fused_fp4_bmm_rope: fix two OOB reads when EV... | @lijinpei-amd | open | 2026-08-11 | 2026-08-11 |
| [#4685](https://github.com/ROCm/aiter/pull/4685) | [triton][gemm] batched_gemm_a16wfp4: fix two OOB reads when ... | @lijinpei-amd | open | 2026-08-11 | 2026-08-11 |
| [#4686](https://github.com/ROCm/aiter/pull/4686) | [cpp_itfs] Harden the C++ JIT loader: no shell, validated pa... | @fjankovi | draft | 2026-08-11 | 2026-08-11 |
| [#4602](https://github.com/ROCm/aiter/pull/4602) | [triton] chunk delta attn opt | @Liang-jianhao97 | open | 2026-08-06 | 2026-08-11 |
| [#4656](https://github.com/ROCm/aiter/pull/4656) | Rm sort for decode gdr | @IzacharyI | open | 2026-08-10 | 2026-08-11 |
| [#4681](https://github.com/ROCm/aiter/pull/4681) | [gluon][mla][gfx950] add M-pack MTP regime (bh16mpack) | @yanxuer-999 | draft | 2026-08-11 | 2026-08-11 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [Qwen3.5_dev][MoE] Add FlyDSL FP8 MoE kernels (decode weight... | @apinge | draft | 2026-07-27 | 2026-08-11 |
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-08-11 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | Simplify ck_gemm_a8w8_blockscale GemmSpecialization construc... | @jbelloncastro | open | 2026-06-19 | 2026-08-11 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQinAMD | open | 2026-08-05 | 2026-08-11 |
| [#3389](https://github.com/ROCm/aiter/pull/3389) | Add Qwen-Image-Edit FP8 a8w8 bpreshuffle GEMM tune configs f... | @LiuYinfeng01 | draft | 2026-05-28 | 2026-08-11 |
| [#4348](https://github.com/ROCm/aiter/pull/4348) | Aiterker 112 asm ptl1 | @JohnNikolay84 | open | 2026-07-23 | 2026-08-10 |
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton] unified_attention: mask V load and output store by ... | @reger-men | open | 2026-06-12 | 2026-08-10 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4580](https://github.com/ROCm/aiter/pull/4580) | [Bug] pa_mqa_logits: guard all OutLogits stores | @maeehart | open | 2026-08-05 | 2026-08-09 |
| [#4489](https://github.com/ROCm/aiter/pull/4489) | feat(gemm): complete GLM-5.2 dense tuned configs (gfx950) | @Raiden-Makoto | open | 2026-07-31 | 2026-08-07 |
| [#4587](https://github.com/ROCm/aiter/pull/4587) | [fix][mla] keep get_meta_param's split-offset table alive fo... | @Duyi-Wang | open | 2026-08-06 | 2026-08-07 |
| [#3818](https://github.com/ROCm/aiter/pull/3818) | Flydsl moe 4gib fix | @IzacharyI | open | 2026-06-20 | 2026-08-07 |
| [#4624](https://github.com/ROCm/aiter/pull/4624) | CI: resolve container Python for release builds | @gyohuangxin | draft | 2026-08-07 | 2026-08-07 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton] Add fused gated residual + LayerNorm + scale/shift ... | @menglcai | open | 2026-07-28 | 2026-08-07 |
| [#4274](https://github.com/ROCm/aiter/pull/4274) | Add MiniMax-M3 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#4276](https://github.com/ROCm/aiter/pull/4276) | Add Kimi-K2.6 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-07 |
| [#3256](https://github.com/ROCm/aiter/pull/3256) | [flydsl] PA DECODE | @ahmed-bsod | open | 2026-05-18 | 2026-08-07 |
| [#4615](https://github.com/ROCm/aiter/pull/4615) | [Draft] Register FlyDSL operations in torch | @mohbasit | open | 2026-08-06 | 2026-08-07 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-08-06 |
| [#4607](https://github.com/ROCm/aiter/pull/4607) | [gfx1250] Fuse A4W4 stage1 FP4 quantization | @XiaobingSuper | open | 2026-08-06 | 2026-08-06 |
| [#3457](https://github.com/ROCm/aiter/pull/3457) | Fused SplitK zero-init for FP8 a8w8 blockscale GEMMs (y_is_z... | @samremes | open | 2026-06-01 | 2026-08-06 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-08-06 |
| [#4512](https://github.com/ROCm/aiter/pull/4512) | fix(build): resolve gfx1100 targets across JIT paths | @skyguan92 | open | 2026-08-02 | 2026-08-06 |
| [#3260](https://github.com/ROCm/aiter/pull/3260) | Revert "CI: use vultr 325 runner labels" | @gyohuangxin | open | 2026-05-19 | 2026-08-06 |
| [#3180](https://github.com/ROCm/aiter/pull/3180) | CI: add tuned config smoke mode | @gyohuangxin | open | 2026-05-14 | 2026-08-06 |
| [#3162](https://github.com/ROCm/aiter/pull/3162) | CI: add test prebuild profile for PR wheels | @gyohuangxin | open | 2026-05-13 | 2026-08-06 |
| [#4295](https://github.com/ROCm/aiter/pull/4295) | [gfx1250] Launch v4 NM MLA decode .co directly from Python (... | @feifei14119 | open | 2026-07-20 | 2026-08-06 |
| [#4515](https://github.com/ROCm/aiter/pull/4515) | [Perf][FlyDSL] Reduce short-context FP4 prefill tile size | @zhiding512 | open | 2026-08-03 | 2026-08-06 |
| [#4571](https://github.com/ROCm/aiter/pull/4571) | [perf][flydsl] optimize group moe small ops | @lalala-sh | open | 2026-08-05 | 2026-08-06 |
| [#4493](https://github.com/ROCm/aiter/pull/4493) | [triton-mha] add gfx1101 tuning config | @Ragua1 | open | 2026-07-31 | 2026-08-06 |
| [#4427](https://github.com/ROCm/aiter/pull/4427) | [Bugfix][Triton] Fix large-stride KV address overflow in pag... | @shen-shanshan | open | 2026-07-28 | 2026-08-05 |
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
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-08-05 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-08-05 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-08-05 |
| [#3114](https://github.com/ROCm/aiter/pull/3114) | Update gluon | @fsx950223 | open | 2026-05-11 | 2026-08-05 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-08-05 |
| [#3272](https://github.com/ROCm/aiter/pull/3272) | Revert "[Triton] Declare triton>=3.6.0 dependency " | @gyohuangxin | open | 2026-05-19 | 2026-08-05 |
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
| [#4536](https://github.com/ROCm/aiter/pull/4536) | [Bugfix][Kernel][Hardware][AMD] Fix invalid GFX12 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-05 |
| [#4549](https://github.com/ROCm/aiter/pull/4549) | [FlyDSL] Fused online Hadamard rotation + MXFP4 quantization... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4550](https://github.com/ROCm/aiter/pull/4550) | [FlyDSL] flydsl_gdr_decode: read strided q/k/v directly (qkv... | @jiangyon-amd | open | 2026-08-04 | 2026-08-05 |
| [#4510](https://github.com/ROCm/aiter/pull/4510) | [Bugfix][FlyDSL] Honor b_nt in mixed-MoE stage-2 and retune ... | @qiongz | draft | 2026-08-02 | 2026-08-05 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-08-04 |
| [#4559](https://github.com/ROCm/aiter/pull/4559) | docs: align Ruff version with CI | @01xjw | draft | 2026-08-04 | 2026-08-04 |
| [#3938](https://github.com/ROCm/aiter/pull/3938) | gate custom all-reduce on XGMI topology | @skysnow2001 | open | 2026-06-25 | 2026-08-04 |
| [#4537](https://github.com/ROCm/aiter/pull/4537) | [gfx1250] Fix three gluon GEMM correctness bugs and tune the... | @XiaobingSuper | open | 2026-08-03 | 2026-08-04 |
| [#4551](https://github.com/ROCm/aiter/pull/4551) | [FlyDSL MoE] Enable persistent stage2 grid for large-M mxfp8 | @XiaobingSuper | draft | 2026-08-04 | 2026-08-04 |
| [#4398](https://github.com/ROCm/aiter/pull/4398) | Two-stage a16w4 MoE GEMM (INTERLEAVE-gate mode) | @apicciau | open | 2026-07-27 | 2026-08-04 |
| [#4407](https://github.com/ROCm/aiter/pull/4407) | feat(moe): add SharedEP MXFP4 kernels | @AMD-yanfeiwang | open | 2026-07-28 | 2026-08-04 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-08-04 |
| [#4487](https://github.com/ROCm/aiter/pull/4487) | [tune] Kimi-K3 SiTUv2 MoE: add block_m=64 for DSpark verify-... | @nehaprakriya | open | 2026-07-31 | 2026-08-04 |
| [#4514](https://github.com/ROCm/aiter/pull/4514) | [Feature][FlyDSL] Add multi-B MoE kernels for ROCm DWDP | @AMD-yanfeiwang | open | 2026-08-03 | 2026-08-04 |
| [#4525](https://github.com/ROCm/aiter/pull/4525) | Add gfx90a to GFX_CU_NUM_MAP | @davetha | open | 2026-08-03 | 2026-08-04 |
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
| [#2314](https://github.com/ROCm/aiter/pull/2314) | Add MPerBlock=128 tile size for blockscale FP8 MoE kernels | @ChuanLi1101 | open | 2026-03-17 | 2026-08-02 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-08-02 |
| [#3369](https://github.com/ROCm/aiter/pull/3369) | fp8 einsum flydsl impl | @ganyi1996ppo | open | 2026-05-27 | 2026-08-02 |
| [#3361](https://github.com/ROCm/aiter/pull/3361) | [feat] add no_combine flag in 2-stage MoE backend | @zx3xyy | open | 2026-05-26 | 2026-08-02 |
| [#3340](https://github.com/ROCm/aiter/pull/3340) | docs: AITER late May 2026 newsletter (v0.1.14 + v0.1.13.post... | @sunway513 | open | 2026-05-25 | 2026-08-02 |
| [#3316](https://github.com/ROCm/aiter/pull/3316) | [ck gemm a8w8 blockscale] shape-aware kernel selection heuri... | @eppaneamd | open | 2026-05-22 | 2026-08-02 |
| [#3297](https://github.com/ROCm/aiter/pull/3297) | add pageattention with sliding window | @ChengYao-amd | open | 2026-05-21 | 2026-08-02 |
| [#3295](https://github.com/ROCm/aiter/pull/3295) | repro(pa-asm): standalone reproducer for fp8 PA OOB at bs=12... | @yhl-amd | open | 2026-05-21 | 2026-08-02 |
| [#3275](https://github.com/ROCm/aiter/pull/3275) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-08-02 |
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
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-08-02 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-08-02 |
| [#3923](https://github.com/ROCm/aiter/pull/3923) | change default pa reduce kernel from cxx to flydsl | @Bernard-Liu | open | 2026-06-25 | 2026-08-02 |
| [#3810](https://github.com/ROCm/aiter/pull/3810) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-19 | 2026-08-02 |
| [#3800](https://github.com/ROCm/aiter/pull/3800) | [gfx950] Add JIT grouped_gemm_mxfp8 for MXFP8 prefill MoE | @fanxingran | open | 2026-06-18 | 2026-08-02 |
| [#3783](https://github.com/ROCm/aiter/pull/3783) | [Small_M_GEMM_GroupGEMM_MXFP8] Decode small-M MX-FP8 GEMM an... | @JohnQinAMD | open | 2026-06-17 | 2026-08-02 |
| [#3718](https://github.com/ROCm/aiter/pull/3718) | Yhl/gptoss pa asm shuf repro 20260611 | @yhl-amd | open | 2026-06-15 | 2026-08-02 |
| [#3639](https://github.com/ROCm/aiter/pull/3639) | Gfx1250 moe 2mode e2e v1 yadai tmp | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3628](https://github.com/ROCm/aiter/pull/3628) | Gfx1250 moe 2mode e2e v1 yadai | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3617](https://github.com/ROCm/aiter/pull/3617) | Fix pa_mqa_logits MI300X divide-by-zero for small TileQCount | @ysmkone | draft | 2026-06-08 | 2026-08-02 |
| [#3613](https://github.com/ROCm/aiter/pull/3613) | [Triton] [Gluon] [GFX12] mHC_post_pre kernel | @k50112113 | draft | 2026-06-08 | 2026-08-02 |
| [#3591](https://github.com/ROCm/aiter/pull/3591) | [hotfix] always use fp4x2 for swiglu separated per_1x32 path | @yadaish | open | 2026-06-08 | 2026-08-02 |
| [#3585](https://github.com/ROCm/aiter/pull/3585) | [op_tests] Refactor MoE legacy UT into per-quant smoke sweep | @zhiding512 | open | 2026-06-07 | 2026-08-02 |
| [#3578](https://github.com/ROCm/aiter/pull/3578) | ci: add paired-release validation gate workflow (AITER+ATOM ... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3573](https://github.com/ROCm/aiter/pull/3573) | CI: add retry logic for Aiter wheel artifact downloads | @Copilot | draft | 2026-06-06 | 2026-08-02 |
| [#3571](https://github.com/ROCm/aiter/pull/3571) | ci(sglang-downstream): add MoRI EP accuracy gate (guards moe... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3557](https://github.com/ROCm/aiter/pull/3557) | feat(pa): enable paged-attention on gfx1201 (RDNA4) via WMMA | @stevenshenyj | draft | 2026-06-05 | 2026-08-02 |
| [#3553](https://github.com/ROCm/aiter/pull/3553) | [fmoe] Add EP Support to Two-Stage MoE Op Tests | @BangBOOM | open | 2026-06-05 | 2026-08-02 |
| [#3548](https://github.com/ROCm/aiter/pull/3548) | [MOE]: production EP + pure-TP-pad stack for Step-3.5-Flash-... | @LJ-underdog | open | 2026-06-05 | 2026-08-02 |
| [#3547](https://github.com/ROCm/aiter/pull/3547) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-04 | 2026-08-02 |
| [#3538](https://github.com/ROCm/aiter/pull/3538) | fix(flydsl_moe_stage1): pre-zero output when inter_dim_pad >... | @kkHuang-amd | open | 2026-06-04 | 2026-08-02 |
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
| [#4011](https://github.com/ROCm/aiter/pull/4011) | perf: add fixed-tile HGEMM candidate | @ftyghome | open | 2026-06-30 | 2026-08-02 |
| [#4000](https://github.com/ROCm/aiter/pull/4000) | fix: optimize MXFP4 a4w4 MoE dispatch for MiniMax-M2.1-MXFP4 | @thpereir | open | 2026-06-29 | 2026-08-02 |
| [#3993](https://github.com/ROCm/aiter/pull/3993) | mla_decode_fwd: wire is_causal through Python and C++ dispat... | @alexioslyrakis-amd | open | 2026-06-29 | 2026-08-02 |
| [#3979](https://github.com/ROCm/aiter/pull/3979) | [op_tests] add whole-block GPT-OSS attention test | @carlushuang | open | 2026-06-29 | 2026-08-02 |
| [#3976](https://github.com/ROCm/aiter/pull/3976) | [FlyDSL] Implement flash attention backward kernel | @waqahmed-amd-fi | draft | 2026-06-28 | 2026-08-02 |
| [#3973](https://github.com/ROCm/aiter/pull/3973) | [CK] Fix MoE 2-stage dispatch for non-128-divisible inter_di... | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
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
| [#3785](https://github.com/ROCm/aiter/pull/3785) | [fea] Add fp32 RMSNorm output for fused qk group quant | @wuhuikx | open | 2026-06-18 | 2026-08-02 |
| [#3774](https://github.com/ROCm/aiter/pull/3774) | [gfx1250][FlyDSL]opt conc1 moe. | @lalala-sh | open | 2026-06-17 | 2026-08-02 |
| [#3771](https://github.com/ROCm/aiter/pull/3771) | fix: disable EP topk-1 strip | @JiaoliangYu | draft | 2026-06-17 | 2026-08-02 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-08-02 |
| [#3721](https://github.com/ROCm/aiter/pull/3721) | [FLYDSL] Rebase flydsl hgemm kernels with mixed policies | @xytpai | open | 2026-06-15 | 2026-08-02 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-08-02 |
| [#3662](https://github.com/ROCm/aiter/pull/3662) | [config] add tuned files for minimax-m2.5 PTPC fp8 model | @gbyu-amd | open | 2026-06-10 | 2026-08-02 |
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
| [#4165](https://github.com/ROCm/aiter/pull/4165) | [gfx1250] [flydsl] moe ep | @XingerZhu | open | 2026-07-09 | 2026-08-02 |
| [#4141](https://github.com/ROCm/aiter/pull/4141) | gemma4w4 split-k bug | @amirumoAMD | draft | 2026-07-08 | 2026-08-02 |
| [#4140](https://github.com/ROCm/aiter/pull/4140) | [TRITON] Tuned GFX1201 DSV4-Flash FP16 and FP8 GEMMs for ATO... | @skysnow2001 | open | 2026-07-08 | 2026-08-02 |
| [#4118](https://github.com/ROCm/aiter/pull/4118) | ATOM MXFP4 Scale Shuffle | @amirumoAMD | draft | 2026-07-07 | 2026-08-02 |
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
| [#4315](https://github.com/ROCm/aiter/pull/4315) | [Fix][FlyDSL] Handle remainder workgroups in MoE XCD swizzle | @Fangzhou-Ai | open | 2026-07-21 | 2026-08-02 |
| [#4306](https://github.com/ROCm/aiter/pull/4306) | Add basic HIP/CK JIT kernel support in Windows | @menglcai | open | 2026-07-20 | 2026-08-02 |
| [#4300](https://github.com/ROCm/aiter/pull/4300) | fmoe run_config: align per_1x32 fp4/fp8 dispatch with test_m... | @yzhou103 | open | 2026-07-20 | 2026-08-02 |
| [#4293](https://github.com/ROCm/aiter/pull/4293) | [Bugfix][Triton] Correct ragged paged-MQA causal masks | @morluto | open | 2026-07-19 | 2026-08-02 |
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
| [#4432](https://github.com/ROCm/aiter/pull/4432) | fix: use residual.stride(1) for MHC HC-slice indexing | @steamedMantou | open | 2026-07-29 | 2026-08-02 |
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
| [#4978](https://github.com/ROCm/aiter/pull/4978) | [Triton/Gluon] [HIP] Dev lumen | @WuLei-AMD | merged | 2026-08-25 | 2026-08-30 |
| [#5052](https://github.com/ROCm/aiter/pull/5052) | [UT] Support a4w4 in test_mega_moe | @yanboshao | merged | 2026-08-27 | 2026-08-29 |
| [#5060](https://github.com/ROCm/aiter/pull/5060) | [Config] [Tune] Add GLM-5.3 BF16 GEMM configs for gfx950 | @andyluo7 | merged | 2026-08-27 | 2026-08-29 |
| [#5070](https://github.com/ROCm/aiter/pull/5070) | [FlyDSL] [opt][rope] optimize qk norm rope Ep decoding case ... | @jli-melchior | merged | 2026-08-28 | 2026-08-29 |
| [#4924](https://github.com/ROCm/aiter/pull/4924) | fix(dist): make raw IPC input pools usable — remove init_dis... | @ThomasNing | merged | 2026-08-23 | 2026-08-29 |
| [#4659](https://github.com/ROCm/aiter/pull/4659) | [Triton/Gluon] Add two fused ops for diffusion transformer b... | @carlushuang | merged | 2026-08-10 | 2026-08-28 |
| [#5061](https://github.com/ROCm/aiter/pull/5061) | [Triton/Gluon] Consolidate and reorganize ops/triton utils | @Boss2002n | merged | 2026-08-27 | 2026-08-28 |
| [#5082](https://github.com/ROCm/aiter/pull/5082) | perf(gfx1250): let AITER_BENCH_TOKENS reach every op | @JiaoliangYu | merged | 2026-08-28 | 2026-08-28 |
| [#4859](https://github.com/ROCm/aiter/pull/4859) | [ASM] [HIP] [CI] Mxfp6 gemms | @ksikiric | merged | 2026-08-19 | 2026-08-28 |
| [#5066](https://github.com/ROCm/aiter/pull/5066) | [HIP] [DCP] Enable fused indexer QK preparation | @ZhiweiYan-96 | merged | 2026-08-28 | 2026-08-28 |
| [#5005](https://github.com/ROCm/aiter/pull/5005) | [Triton/Gluon] [ASM] [HIP] Block-sparse MHAv4 with load-bala... | @nsakkine | merged | 2026-08-26 | 2026-08-28 |
| [#5078](https://github.com/ROCm/aiter/pull/5078) | [Config] Tune M=48 for the GLM-5.2 a8w8 bpreshuffle GEMM sha... | @XiaobingSuper | merged | 2026-08-28 | 2026-08-28 |
| [#4971](https://github.com/ROCm/aiter/pull/4971) | [ASM] [HIP] [CK] feat(mha): gfx950 hd256 FP8 LINEAR paged-va... | @MiloLurati | merged | 2026-08-24 | 2026-08-28 |
| [#5033](https://github.com/ROCm/aiter/pull/5033) | [Triton/Gluon] Tune MoE GEMM A8W8 | @nidal567 | merged | 2026-08-26 | 2026-08-28 |
| [#5065](https://github.com/ROCm/aiter/pull/5065) | [ASM] [HIP] Upgrade gfx1250 MLA 64nx1 code objects and their... | @feifei14119 | merged | 2026-08-28 | 2026-08-28 |
| [#5069](https://github.com/ROCm/aiter/pull/5069) | [Config] Retune the GLM-5.2 a8w8 and BF16 GEMMs for gfx950 | @XiaobingSuper | merged | 2026-08-28 | 2026-08-28 |
| [#5076](https://github.com/ROCm/aiter/pull/5076) | perf(gfx1250): add the combined gfx1250 microbench | @JiaoliangYu | merged | 2026-08-28 | 2026-08-28 |
| [#5075](https://github.com/ROCm/aiter/pull/5075) | perf(gfx1250): sync microbench with main; a16w16 4 GiB pre-c... | @JiaoliangYu | merged | 2026-08-28 | 2026-08-28 |
| [#5071](https://github.com/ROCm/aiter/pull/5071) | [CI] Test FFM bringup on MI250 build runner | @gyohuangxin | merged | 2026-08-28 | 2026-08-28 |
| [#4874](https://github.com/ROCm/aiter/pull/4874) | [HIP] update MHA CPP reademe | @minmengdie | merged | 2026-08-20 | 2026-08-28 |
| [#4890](https://github.com/ROCm/aiter/pull/4890) | [ASM] [HIP] 1x32 mxfp4 asm kernel | @JohnNikolay84 | merged | 2026-08-20 | 2026-08-28 |
| [#5034](https://github.com/ROCm/aiter/pull/5034) | [HIP] [Bugfix] Fix DSV4 FP4 KV-cache scattered row writes | @AMD-yanfeiwang | merged | 2026-08-26 | 2026-08-28 |
| [#4964](https://github.com/ROCm/aiter/pull/4964) | [HIP] FIX MLA the nhead fold error for cp round robin | @minmengdie | merged | 2026-08-24 | 2026-08-28 |
| [#4926](https://github.com/ROCm/aiter/pull/4926) | [Triton/Gluon] [ASM] [HIP] add mla v4 prefill asm kernel | @junxiaguo | merged | 2026-08-23 | 2026-08-28 |
| [#5045](https://github.com/ROCm/aiter/pull/5045) | [FlyDSL] Retune GLM5.2 mxfp4 MoE and fix a scale-view cache ... | @XiaobingSuper | merged | 2026-08-27 | 2026-08-28 |
| [#5007](https://github.com/ROCm/aiter/pull/5007) | [FlyDSL] One-stage split-K for the a8w8 preshuffle GEMM | @XiaobingSuper | merged | 2026-08-26 | 2026-08-27 |
| [#5029](https://github.com/ROCm/aiter/pull/5029) | [Triton/Gluon] Add bench for gluon/triton mxfp8 gemm | @k50112113 | merged | 2026-08-26 | 2026-08-27 |
| [#5021](https://github.com/ROCm/aiter/pull/5021) | [Triton/Gluon] Migrate the MHC tuned configs to the nested l... | @Boss2002n | merged | 2026-08-26 | 2026-08-27 |
| [#5028](https://github.com/ROCm/aiter/pull/5028) | [Triton/Gluon] Tune MoE GEMM A8W8 blockscale | @nidal567 | merged | 2026-08-26 | 2026-08-27 |
| [#5018](https://github.com/ROCm/aiter/pull/5018) | [Triton/Gluon] Migrate conv configs to the nested arch/backe... | @Boss2002n | merged | 2026-08-26 | 2026-08-27 |
| [#4866](https://github.com/ROCm/aiter/pull/4866) | [Triton/Gluon] Move gluon gemm_a8w8 kernel into _gluon_kerne... | @vgokhale | merged | 2026-08-19 | 2026-08-27 |
| [#4948](https://github.com/ROCm/aiter/pull/4948) | [Triton/Gluon] Remove legacy flat-layout fallback from GEMM ... | @Boss2002n | merged | 2026-08-23 | 2026-08-27 |
| [#5037](https://github.com/ROCm/aiter/pull/5037) | [Triton/Gluon] MOE a8w4 cudagraph updates | @lburzawa | merged | 2026-08-26 | 2026-08-27 |
| [#5054](https://github.com/ROCm/aiter/pull/5054) | perf(gfx1250): pin the sweeps that fault, put mori_ep back, ... | @JiaoliangYu | merged | 2026-08-27 | 2026-08-27 |
| [#5051](https://github.com/ROCm/aiter/pull/5051) | [Docs] Chore/port flydsl kernel code cleanup skill | @coderfeli | merged | 2026-08-27 | 2026-08-27 |
| [#5050](https://github.com/ROCm/aiter/pull/5050) | Gfx1250/microbench | @JiaoliangYu | merged | 2026-08-27 | 2026-08-27 |
| [#5022](https://github.com/ROCm/aiter/pull/5022) | [Triton/Gluon] Move MOE tuned configs to the nested layout | @Boss2002n | merged | 2026-08-26 | 2026-08-27 |
| [#5020](https://github.com/ROCm/aiter/pull/5020) | [Triton/Gluon] Migrate the GMM tuned configs to the nested l... | @Boss2002n | merged | 2026-08-26 | 2026-08-27 |
| [#5019](https://github.com/ROCm/aiter/pull/5019) | [Triton/Gluon] Move attention configs to nested layout and u... | @Boss2002n | merged | 2026-08-26 | 2026-08-27 |
| [#4620](https://github.com/ROCm/aiter/pull/4620) | [HIP] [CK] [MoE] Added Gelu with tanh approx for CK XDL 2-st... | @a-sidorova | merged | 2026-08-07 | 2026-08-27 |
| [#5008](https://github.com/ROCm/aiter/pull/5008) | [CI] ci: allow multigpu label to trigger tests | @gyohuangxin | merged | 2026-08-26 | 2026-08-27 |
| [#5017](https://github.com/ROCm/aiter/pull/5017) | [FlyDSL] gfx942 a16wi4: pack f32->bf16 with lshr-16 instead ... | @msaffari-amd | merged | 2026-08-26 | 2026-08-27 |
| [#4912](https://github.com/ROCm/aiter/pull/4912) | [CI] [Build] chore(flydsl): bump flydsl dependency to 0.3.2 | @coderfeli | merged | 2026-08-21 | 2026-08-27 |
| [#5006](https://github.com/ROCm/aiter/pull/5006) | [Config] fix glm5 regression | @charlieguo1106 | merged | 2026-08-26 | 2026-08-27 |
| [#5015](https://github.com/ROCm/aiter/pull/5015) | [gfx1250] fused_moe: require GUGU gu_interleave layout | @lalala-sh | merged | 2026-08-26 | 2026-08-27 |
| [#4554](https://github.com/ROCm/aiter/pull/4554) | [Config] configs: add tuned configs for Qwen3-VL-235B MXFP4 ... | @vorapolsiloai | merged | 2026-08-04 | 2026-08-27 |
| [#4869](https://github.com/ROCm/aiter/pull/4869) | [Triton/Gluon] [Conv2D] Optimize conv2d for RDNA - kernels, ... | @saeid-rostami | merged | 2026-08-20 | 2026-08-26 |
| [#4947](https://github.com/ROCm/aiter/pull/4947) | [Triton/Gluon] Satya/unify gluon a8w8 blockscale config reso... | @Boss2002n | merged | 2026-08-23 | 2026-08-26 |
| [#4049](https://github.com/ROCm/aiter/pull/4049) | [Triton/Gluon] Gluon Fused Dynamic mxfp4 Quant Moe Sort for ... | @amd-jrosas | merged | 2026-07-01 | 2026-08-26 |
| [#5014](https://github.com/ROCm/aiter/pull/5014) | [gfx1250] Add hardware and DeepSeek-V4 performance suites | @JiaoliangYu | merged | 2026-08-26 | 2026-08-26 |
| [#4281](https://github.com/ROCm/aiter/pull/4281) | [FlyDSL] [opt][gfx1250] Add TDM deep-prefetch BF16 prefill f... | @jli-melchior | merged | 2026-07-17 | 2026-08-26 |
| [#4995](https://github.com/ROCm/aiter/pull/4995) | [ASM] fix(fmoe): add missing XQ scale barrier in a16 FP8-blo... | @alexioslyrakis-amd | merged | 2026-08-25 | 2026-08-26 |
| [#5012](https://github.com/ROCm/aiter/pull/5012) | [OPUS] [ATOM] DSv4 sparse paged prefill attention via prebui... | @kaiyang-1 | merged | 2026-08-26 | 2026-08-26 |
| [#4982](https://github.com/ROCm/aiter/pull/4982) | [Triton/Gluon] [Config] Move stray BATCHED_GEMM-A8W8 prequan... | @Boss2002n | merged | 2026-08-25 | 2026-08-26 |
| [#4906](https://github.com/ROCm/aiter/pull/4906) | [FlyDSL] update gfx950 layout fmoe2 csv | @charlieguo1106 | merged | 2026-08-21 | 2026-08-26 |
| [#4903](https://github.com/ROCm/aiter/pull/4903) | [OPUS] [JIT] [Build] opus bf16 gemm co integration | @demonsan | merged | 2026-08-21 | 2026-08-26 |
| [#4967](https://github.com/ROCm/aiter/pull/4967) | [Triton/Gluon] [ASM] [HIP] MHA v4: support GQA, add gfx950 b... | @jcaraban | merged | 2026-08-24 | 2026-08-26 |
| [#4748](https://github.com/ROCm/aiter/pull/4748) | [ASM] [HIP] [gfx1250] fix(asm gemm): add a_preshuffle=0 f4ge... | @dbyoung18 | merged | 2026-08-14 | 2026-08-26 |
| [#4965](https://github.com/ROCm/aiter/pull/4965) | [HIP] topk_gating: fix dropped and out-of-range top-k slots | @yzhou103 | merged | 2026-08-24 | 2026-08-26 |
| [#5003](https://github.com/ROCm/aiter/pull/5003) | [CI] Skip MegaMoE v2 multi-GPU tests | @gyohuangxin | merged | 2026-08-26 | 2026-08-26 |
| [#4917](https://github.com/ROCm/aiter/pull/4917) | [Triton/Gluon] Move gluon gemm_a8w8_blockscale kernel into _... | @vgokhale | merged | 2026-08-21 | 2026-08-25 |
| [#4918](https://github.com/ROCm/aiter/pull/4918) | [Triton/Gluon] Retune unified attention configs for gfx950 | @nidal567 | merged | 2026-08-21 | 2026-08-25 |
| [#4833](https://github.com/ROCm/aiter/pull/4833) | [Triton/Gluon] Remove legacy MOE code | @lburzawa | merged | 2026-08-18 | 2026-08-25 |
| [#4954](https://github.com/ROCm/aiter/pull/4954) | [AMD][DSV4] feat: MXFP8 activation passthrough in fused_moe | @karverma-amd | merged | 2026-08-24 | 2026-08-25 |
| [#4887](https://github.com/ROCm/aiter/pull/4887) | [Triton/Gluon] [CI] remove lean_atten files and relevant imp... | @nidal567 | merged | 2026-08-20 | 2026-08-25 |
| [#4766](https://github.com/ROCm/aiter/pull/4766) | [Triton/Gluon] [GFX950][DSV4] Sparse MLA training backward | @wangye805 | merged | 2026-08-14 | 2026-08-25 |
| [#4972](https://github.com/ROCm/aiter/pull/4972) | [TRITON] Make RNG deterministic in unit tests | @brunomazzottiamd | merged | 2026-08-24 | 2026-08-25 |
| [#4988](https://github.com/ROCm/aiter/pull/4988) | [FlyDSL] [gfx1250] Fix compute-bound GEMM A scale TDM inner ... | @aoli26 | merged | 2026-08-25 | 2026-08-25 |
| [#4960](https://github.com/ROCm/aiter/pull/4960) | [Triton/Gluon] update shuffle | @Boss2002n | merged | 2026-08-24 | 2026-08-25 |
| [#4834](https://github.com/ROCm/aiter/pull/4834) | [Config] Add tuned GEMM configs for Kimi-K3 BF16 MoE front s... | @RolaoDenthu | merged | 2026-08-18 | 2026-08-25 |
| [#4952](https://github.com/ROCm/aiter/pull/4952) | [FlyDSL] fix(flydsl): stabilize GDN prepare triangular solve | @junna2016 | merged | 2026-08-24 | 2026-08-25 |
| [#4976](https://github.com/ROCm/aiter/pull/4976) | fix(mha): select sink kernel when only sink_ptr is provided | @kkHuang-amd | merged | 2026-08-25 | 2026-08-25 |
| [#4973](https://github.com/ROCm/aiter/pull/4973) | Update Gluon GEMM-A8W8_BLOCKSCALE README to match nested con... | @Copilot | merged | 2026-08-24 | 2026-08-25 |
| [#4453](https://github.com/ROCm/aiter/pull/4453) | [Triton/Gluon] [Config] [gfx950] Tune batched_gemm_a8w8 per-... | @Jacob0226 | merged | 2026-07-30 | 2026-08-25 |
| [#4969](https://github.com/ROCm/aiter/pull/4969) | [CI] ci: install Mori grpc runtime for multi-GPU tests | @gyohuangxin | merged | 2026-08-24 | 2026-08-25 |
| [#4803](https://github.com/ROCm/aiter/pull/4803) | [Triton/Gluon] fused_clamp_act_mul gluon kernel | @amirumoAMD | merged | 2026-08-17 | 2026-08-25 |
| [#4943](https://github.com/ROCm/aiter/pull/4943) | [Triton/Gluon] [Config] Move configs to nested layout | @Boss2002n | merged | 2026-08-23 | 2026-08-24 |
| [#4944](https://github.com/ROCm/aiter/pull/4944) | [Triton/Gluon] [Config] Move BATCHED_GEMM-A8W8 configs to ne... | @Boss2002n | merged | 2026-08-23 | 2026-08-24 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-08-30T13:23:29Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2008](https://github.com/ROCm/ATOM/pull/2008) | [DCP] CPP-prefill -> DCP-decode KV transfer, replicated inde... | @Jasen2201 | open | 2026-08-24 | 2026-08-30 |
| [#2054](https://github.com/ROCm/ATOM/pull/2054) | Jasen/dcp kv transfer | @Jasen2201 | draft | 2026-08-27 | 2026-08-30 |
| [#2088](https://github.com/ROCm/ATOM/pull/2088) | Settle a step's shape once, and fix the three defects that e... | @valarLip | open | 2026-08-30 | 2026-08-30 |
| [#2087](https://github.com/ROCm/ATOM/pull/2087) | [DSA] Opt-in fused DCP decode top-k merge | @ganyi1996ppo | open | 2026-08-30 | 2026-08-30 |
| [#2053](https://github.com/ROCm/ATOM/pull/2053) | [Kimi-K3][LMCache] LMCache offload for Kimi-K3 | @zejunchen-zejun | open | 2026-08-27 | 2026-08-30 |
| [#2049](https://github.com/ROCm/ATOM/pull/2049) | [PCP] Fix DSV4 PCP with MTP | @yitingw1 | open | 2026-08-27 | 2026-08-30 |
| [#2051](https://github.com/ROCm/ATOM/pull/2051) | [Model] GLM-5.3-Flash (glm5_next) — text path on MI355X | @carlushuang | open | 2026-08-27 | 2026-08-30 |
| [#2086](https://github.com/ROCm/ATOM/pull/2086) | Draft: DeepSeek-V4-Flash-0731 MI308X TP4 optimization recipe | @cubezhang | open | 2026-08-29 | 2026-08-29 |
| [#2085](https://github.com/ROCm/ATOM/pull/2085) | [feat](vllm): upgrade the OOT plugin to vLLM 0.28.0 | @Phi-C | open | 2026-08-29 | 2026-08-29 |
| [#1919](https://github.com/ROCm/ATOM/pull/1919) | [Kimi-K3] Integrate aiter fused KDA decode kernel | @mengfei-jiang | open | 2026-08-17 | 2026-08-29 |
| [#2083](https://github.com/ROCm/ATOM/pull/2083) | Fix/vllm atom ci startup failures | @PerryZhang01 | open | 2026-08-29 | 2026-08-29 |
| [#2046](https://github.com/ROCm/ATOM/pull/2046) | [Gluon] MOE TP  | @k50112113 | open | 2026-08-27 | 2026-08-29 |
| [#2048](https://github.com/ROCm/ATOM/pull/2048) | Support Qwen3.8 Flash Next | @HaonanWang98 | open | 2026-08-27 | 2026-08-29 |
| [#2059](https://github.com/ROCm/ATOM/pull/2059) | docs: Fix duplicated table on atom overview | @timothycarambat | open | 2026-08-27 | 2026-08-29 |
| [#2060](https://github.com/ROCm/ATOM/pull/2060) | [DCP] Decode on the gathered head width, fix K3's missing QR... | @whx-sjtu | draft | 2026-08-27 | 2026-08-29 |
| [#2061](https://github.com/ROCm/ATOM/pull/2061) | Glm5.3 flash support | @PerryZhang01 | open | 2026-08-27 | 2026-08-29 |
| [#2050](https://github.com/ROCm/ATOM/pull/2050) | Reduce mem pressure raised by multiple comm groups init | @gbyu-amd | open | 2026-08-27 | 2026-08-29 |
| [#2028](https://github.com/ROCm/ATOM/pull/2028) | [Lumen-RL] Improve FP8 rollout weight synchronization and CU... | @ZhangDanyang-AMD | open | 2026-08-26 | 2026-08-29 |
| [#1910](https://github.com/ROCm/ATOM/pull/1910) | feat(k3): Kimi-K3 vLLM plugin vision + DSpark draft support | @sajandhy | open | 2026-08-16 | 2026-08-29 |
| [#2080](https://github.com/ROCm/ATOM/pull/2080) | Fuse SiTUv2 activation with per-token FP8 quant in KimiMLP | @XiaobingSuper | draft | 2026-08-28 | 2026-08-28 |
| [#2078](https://github.com/ROCm/ATOM/pull/2078) | replace radix_topk with flydsl topk | @zhuyuhua-v | draft | 2026-08-28 | 2026-08-28 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | open | 2026-08-13 | 2026-08-28 |
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-08-28 |
| [#1995](https://github.com/ROCm/ATOM/pull/1995) | [ATOM] add persistent path for DCP GLM5.2 | @zhuyuhua-v | open | 2026-08-24 | 2026-08-28 |
| [#2071](https://github.com/ROCm/ATOM/pull/2071) | [Testing]agentic benchmark ci weekly | @ZhangLirong-amd | open | 2026-08-28 | 2026-08-28 |
| [#1996](https://github.com/ROCm/ATOM/pull/1996) | [atom+sgl]fix(sglang): align DeepSeek-V4 bridge with geometr... | @zhangxinyuanliuhengyu | open | 2026-08-24 | 2026-08-28 |
| [#1923](https://github.com/ROCm/ATOM/pull/1923) | [Kernel Opt] change m3 gluon kernel to flydsl kernel | @ZLkanyo009 | open | 2026-08-17 | 2026-08-28 |
| [#2003](https://github.com/ROCm/ATOM/pull/2003) | Replace tl.make_block_ptr with plain pointer arithmetic for ... | @yuyzhang512 | open | 2026-08-24 | 2026-08-28 |
| [#2077](https://github.com/ROCm/ATOM/pull/2077) | support dsv4 bf16 opus attn on gfx1250 | @JiaoliangYu | open | 2026-08-28 | 2026-08-28 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat: support v4 mixed-schedule large conc opt | @jiayyu | open | 2026-08-26 | 2026-08-28 |
| [#2067](https://github.com/ROCm/ATOM/pull/2067) | [sgl atom] enable qwen3.8 in sgl atom | @ZLkanyo009 | open | 2026-08-28 | 2026-08-28 |
| [#1833](https://github.com/ROCm/ATOM/pull/1833) | [gfx1250] Route wo_a grouped LoRA through the flydsl a8w4 ba... | @XingerZhu | open | 2026-08-07 | 2026-08-28 |
| [#2074](https://github.com/ROCm/ATOM/pull/2074) | [DO NOT MERGE] bench: fixed-length prompts and no warmup | @JiaoliangYu | open | 2026-08-28 | 2026-08-28 |
| [#2066](https://github.com/ROCm/ATOM/pull/2066) | [MTP] fix low acceptance rate issue of glm5.2 MTP | @ZhiweiYan-96 | draft | 2026-08-28 | 2026-08-28 |
| [#1770](https://github.com/ROCm/ATOM/pull/1770) | Add Periodic Engine Status Log (Server Mode) | @yitingw1 | open | 2026-08-03 | 2026-08-28 |
| [#2047](https://github.com/ROCm/ATOM/pull/2047) | [Gluon] MOE EP | @k50112113 | draft | 2026-08-27 | 2026-08-28 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-08-27 |
| [#2013](https://github.com/ROCm/ATOM/pull/2013) | docker: fix ATOM and SGLang release builds | @ThomasNing | open | 2026-08-25 | 2026-08-27 |
| [#2024](https://github.com/ROCm/ATOM/pull/2024) | state checkpoint superblock | @ganyi1996ppo | open | 2026-08-26 | 2026-08-27 |
| [#2039](https://github.com/ROCm/ATOM/pull/2039) | perf(dpa): sync forward metadata over device group | @yhl-amd | open | 2026-08-26 | 2026-08-27 |
| [#2043](https://github.com/ROCm/ATOM/pull/2043) | [Feat] Conform MiniMax-M3 serving to OpenAI API | @kliuae | open | 2026-08-26 | 2026-08-27 |
| [#2011](https://github.com/ROCm/ATOM/pull/2011) | [Feature] Integrate the AITER MK1 persistent decoder | @ssharma4-amd | draft | 2026-08-24 | 2026-08-26 |
| [#2015](https://github.com/ROCm/ATOM/pull/2015) | Optimized Attention Residual for Kimi-K3 | @amd-wsung102 | draft | 2026-08-25 | 2026-08-26 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-26 |
| [#1973](https://github.com/ROCm/ATOM/pull/1973) | Qwen38 accuracy | @PerryZhang01 | open | 2026-08-20 | 2026-08-26 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-30 | 2026-08-26 |
| [#2027](https://github.com/ROCm/ATOM/pull/2027) | [MiniMax-M3][GFX1250] Enable SwiGLU activation for Triton Mo... | @leonling-ll | open | 2026-08-26 | 2026-08-26 |
| [#1612](https://github.com/ROCm/ATOM/pull/1612) | [fix] Stabilize ATOM FP8 no-eager rollout weight sync and CU... | @xysheng-AMD | open | 2026-07-16 | 2026-08-26 |
| [#1873](https://github.com/ROCm/ATOM/pull/1873) | Expose Prometheus metrics for KV-aware routing and modernize... | @Jasen2201 | open | 2026-08-12 | 2026-08-26 |
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-08-26 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-08-26 |
| [#1217](https://github.com/ROCm/ATOM/pull/1217) | [CI] add performance CI for online quant | @haoyangli0109 | open | 2026-06-15 | 2026-08-26 |
| [#2002](https://github.com/ROCm/ATOM/pull/2002) | bench: add DeepSeek-V4-Pro EPLB + MegaMoE case at c=512/4096 | @JiaoliangYu | open | 2026-08-24 | 2026-08-26 |
| [#2018](https://github.com/ROCm/ATOM/pull/2018) | feat(mori-v2): let the MoE dispatch wire be chosen, for the ... | @jhchouuu | open | 2026-08-25 | 2026-08-26 |
| [#2023](https://github.com/ROCm/ATOM/pull/2023) | feat(mla): optionally run sparse MLA on aiter's Gluon kernel | @cagrikymk | draft | 2026-08-25 | 2026-08-25 |
| [#2007](https://github.com/ROCm/ATOM/pull/2007) | feat(pp) support dynamic chunked pipeline parallel | @wanzhenchn | open | 2026-08-24 | 2026-08-25 |
| [#1942](https://github.com/ROCm/ATOM/pull/1942) | feat(wideep): multi-node wide expert parallelism on top of #... | @JiaoliangYu | draft | 2026-08-18 | 2026-08-25 |
| [#2019](https://github.com/ROCm/ATOM/pull/2019) | reduce mem pressure raised by multiple comm groups init | @gbyu-amd | open | 2026-08-25 | 2026-08-25 |
| [#1901](https://github.com/ROCm/ATOM/pull/1901) | [ATOM-vLLM] Add support for Qwen3.8 | @kliuae | open | 2026-08-14 | 2026-08-25 |
| [#2005](https://github.com/ROCm/ATOM/pull/2005) | [DO NOT MERGE] Test Spur GHA smoke workflow | @gyohuangxin | draft | 2026-08-24 | 2026-08-25 |
| [#1893](https://github.com/ROCm/ATOM/pull/1893) | [Kimi-K3] Route KDA prefill through the FlyDSL AITER kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#1974](https://github.com/ROCm/ATOM/pull/1974) | perf(dsv4): optimize FP8 and FP4 indexer prefill | @yhl-amd | open | 2026-08-20 | 2026-08-24 |
| [#1978](https://github.com/ROCm/ATOM/pull/1978) | feat(eplb):avoid local copy in eplb; move build l2p to devic... | @JiaoliangYu | draft | 2026-08-21 | 2026-08-24 |
| [#1962](https://github.com/ROCm/ATOM/pull/1962) | [perf][kimi k3] some fusions for k3 dspark | @whx-sjtu | open | 2026-08-20 | 2026-08-24 |
| [#1955](https://github.com/ROCm/ATOM/pull/1955) | [Feature][tool-parser] vendor tool parser implementation | @Yuechguo | open | 2026-08-19 | 2026-08-24 |
| [#1953](https://github.com/ROCm/ATOM/pull/1953) | feat(lmcache): add GLM-5.2 multiprocess offload | @yhl-amd | open | 2026-08-19 | 2026-08-24 |
| [#1940](https://github.com/ROCm/ATOM/pull/1940) | k3 agentic optimizations | @gbyu-amd | draft | 2026-08-18 | 2026-08-21 |
| [#1921](https://github.com/ROCm/ATOM/pull/1921) | fix(atomesh): register decode buffers on reachable RDMA rail... | @junyyang-amd | open | 2026-08-17 | 2026-08-21 |
| [#1965](https://github.com/ROCm/ATOM/pull/1965) | fuse kernels in kda | @ganyi1996ppo | open | 2026-08-20 | 2026-08-21 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | Feat/shared expert pinned logical | @JiaoliangYu | draft | 2026-08-17 | 2026-08-21 |
| [#1937](https://github.com/ROCm/ATOM/pull/1937) | perf(mtp): defer draft proposal publication | @yhl-amd | open | 2026-08-18 | 2026-08-20 |
| [#1946](https://github.com/ROCm/ATOM/pull/1946) | feat(state-cache): snapshot PAGE state at prefill end | @yhl-amd | open | 2026-08-19 | 2026-08-20 |
| [#1947](https://github.com/ROCm/ATOM/pull/1947) | state checkpoint port optimized | @ganyi1996ppo | open | 2026-08-19 | 2026-08-20 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | open | 2026-08-19 | 2026-08-19 |
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
| [#1887](https://github.com/ROCm/ATOM/pull/1887) | State cache opt replayssm | @gbyu-amd | draft | 2026-08-13 | 2026-08-14 |
| [#1888](https://github.com/ROCm/ATOM/pull/1888) | [fix](vllm): remove vllm patch | @PerryZhang01 | open | 2026-08-13 | 2026-08-14 |
| [#1892](https://github.com/ROCm/ATOM/pull/1892) | [Feat] Allow passing token ids to /v1/completions  | @simondanielsson | draft | 2026-08-13 | 2026-08-13 |
| [#1889](https://github.com/ROCm/ATOM/pull/1889) | [kernel opt] add flydsl attention for m3 | @ZLkanyo009 | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1743](https://github.com/ROCm/ATOM/pull/1743) | mtp support blocksize other than 1 | @HaonanWang98 | open | 2026-07-30 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1798](https://github.com/ROCm/ATOM/pull/1798) | [SGL+ATOM]fix[plugin]: guard GLM flat fmoe on MI308 | @zhangxinyuanliuhengyu | open | 2026-08-05 | 2026-08-12 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-08-11 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-08-10 |
| [#1835](https://github.com/ROCm/ATOM/pull/1835) | fix(scheduler): unblock decode behind a long chunked prefill | @hippothewild | open | 2026-08-07 | 2026-08-10 |
| [#1759](https://github.com/ROCm/ATOM/pull/1759) | support mamba prefix cache | @ganyi1996ppo | open | 2026-07-31 | 2026-08-10 |
| [#1794](https://github.com/ROCm/ATOM/pull/1794) | [feat](vllm): upgrade vllm to 0.26.1 | @zejunchen-zejun | draft | 2026-08-05 | 2026-08-10 |
| [#1779](https://github.com/ROCm/ATOM/pull/1779) | sparsekv cache glm52 agentic task optimization  | @Jasen2201 | draft | 2026-08-04 | 2026-08-10 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#1818](https://github.com/ROCm/ATOM/pull/1818) | Ganyi/do opt prefill kda | @ganyi1996ppo | open | 2026-08-06 | 2026-08-07 |
| [#1719](https://github.com/ROCm/ATOM/pull/1719) | [Kimi-K3] MI455 support Kimi-K3 | @zejunchen-zejun | open | 2026-07-28 | 2026-08-06 |
| [#1780](https://github.com/ROCm/ATOM/pull/1780) | random IMA fix | @gbyu-amd | open | 2026-08-04 | 2026-08-06 |
| [#1773](https://github.com/ROCm/ATOM/pull/1773) | [Kimi-K3] Enable align-mode mamba prefix caching (vLLM-ATOM) | @gbyu-amd | open | 2026-08-03 | 2026-08-04 |
| [#1747](https://github.com/ROCm/ATOM/pull/1747) | feat: support GLM-5.2 tool call parser | @Phi-C | open | 2026-07-30 | 2026-07-31 |
| [#1751](https://github.com/ROCm/ATOM/pull/1751) | fix: forward extra args in patched_inline_call for torch _dy... | @thpereir | open | 2026-07-30 | 2026-07-31 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1723](https://github.com/ROCm/ATOM/pull/1723) | test: add block-level DeepSeek-V4 attention test (real Deeps... | @carlushuang | open | 2026-07-29 | 2026-07-30 |
| [#1594](https://github.com/ROCm/ATOM/pull/1594) | Add MoRIIO write-push KV transfer with DeepSeek-V4 and fabri... | @maning00 | draft | 2026-07-14 | 2026-07-29 |
| [#1316](https://github.com/ROCm/ATOM/pull/1316) | [KV-events] block token_offset + sequence numbers + replay | @bongwoobak | open | 2026-06-22 | 2026-07-28 |
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
| [#1233](https://github.com/ROCm/ATOM/pull/1233) | feat(moe): gfx1250 a8w4 use new N32K4 weight-scale layout | @yadaish | open | 2026-06-16 | 2026-06-26 |
| [#1137](https://github.com/ROCm/ATOM/pull/1137) | benchmarks: standalone model-loading (safetensors) speed ben... | @carlushuang | open | 2026-06-09 | 2026-06-26 |
| [#810](https://github.com/ROCm/ATOM/pull/810) | Add Responses API streaming support | @san-tian | open | 2026-05-16 | 2026-06-26 |
| [#789](https://github.com/ROCm/ATOM/pull/789) | fix(openai): harden chat request handling | @san-tian | open | 2026-05-14 | 2026-06-26 |
| [#778](https://github.com/ROCm/ATOM/pull/778) | feat(server): add Anthropic Messages API endpoint (/v1/messa... | @carlushuang | open | 2026-05-13 | 2026-06-26 |
| [#715](https://github.com/ROCm/ATOM/pull/715) | docs: deploy compressor page with docs workflow | @gyohuangxin | open | 2026-05-07 | 2026-06-26 |
| [#607](https://github.com/ROCm/ATOM/pull/607) | [feat](ai): add accuracy debug skill for nightly test | @PerryZhang01 | open | 2026-04-19 | 2026-06-26 |
| [#554](https://github.com/ROCm/ATOM/pull/554) | CI: make ATOM test workflow reusable | @gyohuangxin | open | 2026-04-14 | 2026-06-26 |
| [#478](https://github.com/ROCm/ATOM/pull/478) | feat: add vLLM benchmark workflow and dashboard | @ChuanLi1101 | open | 2026-04-02 | 2026-06-26 |
| [#309](https://github.com/ROCm/ATOM/pull/309) | [QUARK-493] Fix Qwen3 MXFP4 MoE weight loading with TP 4/8 | @thpereir | open | 2026-03-11 | 2026-06-26 |
| [#97](https://github.com/ROCm/ATOM/pull/97) | [Perf](bench): refactor benchmark scripts for unified format | @PerryZhang01 | open | 2025-12-24 | 2026-06-26 |
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
| [#2084](https://github.com/ROCm/ATOM/pull/2084) | [CI] Prune stale Docker data on TW runners | @gyohuangxin | merged | 2026-08-29 | 2026-08-29 |
| [#2045](https://github.com/ROCm/ATOM/pull/2045) | paged state cache  | @ganyi1996ppo | merged | 2026-08-27 | 2026-08-29 |
| [#2052](https://github.com/ROCm/ATOM/pull/2052) | Clarify no-tools parser behavior and improve documentation | @Jasen2201 | merged | 2026-08-27 | 2026-08-29 |
| [#2055](https://github.com/ROCm/ATOM/pull/2055) | [DCP] Fuse DCP indexer small ops & fix non persistent | @yitingw1 | merged | 2026-08-27 | 2026-08-29 |
| [#2056](https://github.com/ROCm/ATOM/pull/2056) | [Atomesh] Use two figures for p90_e2e_normalized interactivi... | @Phi-C | merged | 2026-08-27 | 2026-08-29 |
| [#2057](https://github.com/ROCm/ATOM/pull/2057) | (feat)[ATOM] enable persistent sparse MLA DCP for GLM-5.2 | @zhuyuhua-v | merged | 2026-08-27 | 2026-08-29 |
| [#2058](https://github.com/ROCm/ATOM/pull/2058) | refactor(v4): let QKNormRopeOut produce its own custom-op re... | @ZhangLirong-amd | merged | 2026-08-27 | 2026-08-29 |
| [#2073](https://github.com/ROCm/ATOM/pull/2073) | fix: size fake-eplb balance router logits to routed expert c... | @JiaoliangYu | merged | 2026-08-28 | 2026-08-29 |
| [#2033](https://github.com/ROCm/ATOM/pull/2033) | [feat](vllm-atom k3): support DSpark speculative decoding un... | @PerryZhang01 | merged | 2026-08-26 | 2026-08-28 |
| [#2076](https://github.com/ROCm/ATOM/pull/2076) | feat(dp): DP-sharded LM head with all-to-all logits exchange | @ZhangLirong-amd | merged | 2026-08-28 | 2026-08-28 |
| [#2070](https://github.com/ROCm/ATOM/pull/2070) | [DCP] Enable fused indexer_qk_rope_quant_and_cache for dcp | @ZhiweiYan-96 | merged | 2026-08-28 | 2026-08-28 |
| [#2069](https://github.com/ROCm/ATOM/pull/2069) | [Triton] Fully fuse LM-head argmax packing | @xytpai | merged | 2026-08-28 | 2026-08-28 |
| [#2038](https://github.com/ROCm/ATOM/pull/2038) | ci: submit plugin accuracy jobs through Slurm | @junyyang-amd | merged | 2026-08-26 | 2026-08-28 |
| [#1883](https://github.com/ROCm/ATOM/pull/1883) | [feat] Enable ssm replay for gdn attention & kda. | @HaonanWang98 | merged | 2026-08-13 | 2026-08-28 |
| [#2010](https://github.com/ROCm/ATOM/pull/2010) | fake-eplb: route on a zero router correction bias | @junhaha666 | merged | 2026-08-24 | 2026-08-28 |
| [#2068](https://github.com/ROCm/ATOM/pull/2068) | Update aiperf docker and recipe | @ZhangLirong-amd | merged | 2026-08-28 | 2026-08-28 |
| [#2072](https://github.com/ROCm/ATOM/pull/2072) | fix: replace _dcp_num_blocks with num_pool_blocks | @Phi-C | merged | 2026-08-28 | 2026-08-28 |
| [#1994](https://github.com/ROCm/ATOM/pull/1994) | fix: fix PD prefix cache for dcp | @Phi-C | merged | 2026-08-24 | 2026-08-28 |
| [#2026](https://github.com/ROCm/ATOM/pull/2026) | Reconstruction piecewise core, only piecewise attn compresso... | @ZhangLirong-amd | merged | 2026-08-26 | 2026-08-27 |
| [#2041](https://github.com/ROCm/ATOM/pull/2041) | fix(engine): a rejected request never reached the client wai... | @whx-sjtu | merged | 2026-08-26 | 2026-08-27 |
| [#2016](https://github.com/ROCm/ATOM/pull/2016) | perf(dpa): add session-aware routing and post-prefill decode... | @yhl-amd | merged | 2026-08-25 | 2026-08-27 |
| [#2042](https://github.com/ROCm/ATOM/pull/2042) | perf(spec-decode): warm every draft forward at a batch the t... | @valarLip | merged | 2026-08-26 | 2026-08-27 |
| [#2036](https://github.com/ROCm/ATOM/pull/2036) | fix(rtpllm): forward DCP indexer buffers through the sparse ... | @zhiqchen-amd | merged | 2026-08-26 | 2026-08-27 |
| [#1836](https://github.com/ROCm/ATOM/pull/1836) | [atom] Add diffusion subsystem and MiniMax-H3 video+audio ge... | @carlushuang | merged | 2026-08-08 | 2026-08-26 |
| [#2040](https://github.com/ROCm/ATOM/pull/2040) | fix(scheduler): admission counted KV blocks globally against... | @whx-sjtu | merged | 2026-08-26 | 2026-08-26 |
| [#2012](https://github.com/ROCm/ATOM/pull/2012) | fix(mtp): truncate speculative batches at max_tokens | @ThomasNing | merged | 2026-08-24 | 2026-08-26 |
| [#2020](https://github.com/ROCm/ATOM/pull/2020) | perf(frontend): merge_chunk rebuilt the whole backlog on eve... | @JiaoliangYu | merged | 2026-08-25 | 2026-08-26 |
| [#1985](https://github.com/ROCm/ATOM/pull/1985) | [atom vllm]Fix Qwen3.5 block-FP8 correctness under vLLM FULL... | @zhangxinyuanliuhengyu | merged | 2026-08-21 | 2026-08-26 |
| [#2006](https://github.com/ROCm/ATOM/pull/2006) | [ATOM][DPA][Bugfix] Take dp_size into account when prepare t... | @MengqingCao | merged | 2026-08-24 | 2026-08-26 |
| [#2009](https://github.com/ROCm/ATOM/pull/2009) | feat(dspark): fp8 block attention through the target's asm d... | @ZhangLirong-amd | merged | 2026-08-24 | 2026-08-25 |
| [#1749](https://github.com/ROCm/ATOM/pull/1749) | [Feature] Quantize weights online when loading weights | @haoyangli0109 | merged | 2026-07-30 | 2026-08-25 |
| [#2004](https://github.com/ROCm/ATOM/pull/2004) | [fix](dspark): fix kimi k3 dspark | @PerryZhang01 | merged | 2026-08-24 | 2026-08-25 |
| [#2000](https://github.com/ROCm/ATOM/pull/2000) | fix(kv-transfer): synchronize P/D sends with offload save co... | @Jasen2201 | merged | 2026-08-24 | 2026-08-25 |
| [#1993](https://github.com/ROCm/ATOM/pull/1993) | fix(engine): include DP dummies in staging lifetime | @yhl-amd | merged | 2026-08-23 | 2026-08-24 |
| [#2001](https://github.com/ROCm/ATOM/pull/2001) | [DCP][Opt] Query replication, project-before-merge, and an a... | @yitingw1 | merged | 2026-08-24 | 2026-08-24 |
| [#1858](https://github.com/ROCm/ATOM/pull/1858) | [ATOM][KVCache] Skip kvcache tensor allocation for shared in... | @MengqingCao | merged | 2026-08-11 | 2026-08-24 |
| [#1603](https://github.com/ROCm/ATOM/pull/1603) | multi-node dp support | @ganyi1996ppo | merged | 2026-07-15 | 2026-08-24 |
| [#1911](https://github.com/ROCm/ATOM/pull/1911) | perf(mla): take the decode's KV-split budget from the machin... | @zejunchen-zejun | merged | 2026-08-16 | 2026-08-24 |
| [#1998](https://github.com/ROCm/ATOM/pull/1998) | [Doc] Add Documentation for Streaming Online Quantization | @haoyangli0109 | merged | 2026-08-24 | 2026-08-24 |
| [#1999](https://github.com/ROCm/ATOM/pull/1999) | Mega v2 bench | @JiaoliangYu | merged | 2026-08-24 | 2026-08-24 |
| [#1997](https://github.com/ROCm/ATOM/pull/1997) | Mega v2 bench | @JiaoliangYu | merged | 2026-08-24 | 2026-08-24 |
| [#1992](https://github.com/ROCm/ATOM/pull/1992) | refactor(openai): one reader per wire format, for both deliv... | @valarLip | merged | 2026-08-23 | 2026-08-23 |
| [#1990](https://github.com/ROCm/ATOM/pull/1990) | fix(engine): a fourth consumer of token ids, and a guard for... | @valarLip | merged | 2026-08-23 | 2026-08-23 |
| [#1991](https://github.com/ROCm/ATOM/pull/1991) | perf(engine): stop the collector walking a heap it never rec... | @valarLip | merged | 2026-08-23 | 2026-08-23 |
| [#1989](https://github.com/ROCm/ATOM/pull/1989) | perf(v4): cut the host work between two forwards | @valarLip | merged | 2026-08-23 | 2026-08-23 |
| [#1980](https://github.com/ROCm/ATOM/pull/1980) | perf(engine): raise GC thresholds in the EngineCore and Mode... | @junhaha666 | merged | 2026-08-21 | 2026-08-23 |
| [#1988](https://github.com/ROCm/ATOM/pull/1988) | fix(dist): pp-aware init no longer breaks raw IPC input pool... | @ThomasNing | merged | 2026-08-23 | 2026-08-23 |
| [#1987](https://github.com/ROCm/ATOM/pull/1987) | Fix dpa spec middle chunk collective align for agentic | @ZhangLirong-amd | merged | 2026-08-22 | 2026-08-22 |
| [#1795](https://github.com/ROCm/ATOM/pull/1795) | Feat/v4 wo a mxscale bmm | @yzhou103 | merged | 2026-08-05 | 2026-08-22 |
| [#1975](https://github.com/ROCm/ATOM/pull/1975) | Gfx1250/test ep 817 | @JiaoliangYu | merged | 2026-08-21 | 2026-08-22 |
| [#1986](https://github.com/ROCm/ATOM/pull/1986) | perf(dsv4): tune FP4 prefill MQA grid | @yhl-amd | merged | 2026-08-21 | 2026-08-21 |
| [#1979](https://github.com/ROCm/ATOM/pull/1979) | [fix](dsv4): fix vllm-atom deepseek interface | @PerryZhang01 | merged | 2026-08-21 | 2026-08-21 |
| [#1983](https://github.com/ROCm/ATOM/pull/1983) | Mega v2 bench | @JiaoliangYu | merged | 2026-08-21 | 2026-08-21 |
| [#1982](https://github.com/ROCm/ATOM/pull/1982) | r0 naive ci test | @JiaoliangYu | merged | 2026-08-21 | 2026-08-21 |
| [#1967](https://github.com/ROCm/ATOM/pull/1967) | dspark: keep the ragged-lens H2D pinned in every cudagraph m... | @ZhangLirong-amd | merged | 2026-08-20 | 2026-08-21 |
| [#1977](https://github.com/ROCm/ATOM/pull/1977) | [perf][kimi k3] fuse add rms_norm for k3 dspark (k3-dev) | @whx-sjtu | merged | 2026-08-21 | 2026-08-21 |
| [#1755](https://github.com/ROCm/ATOM/pull/1755) | Add fake eplb for performance test | @junhaha666 | merged | 2026-07-31 | 2026-08-21 |
| [#1976](https://github.com/ROCm/ATOM/pull/1976) | [k3] fix dcp + lmcache | @gbyu-amd | merged | 2026-08-21 | 2026-08-21 |
| [#1968](https://github.com/ROCm/ATOM/pull/1968) | [fix][GLM-5.2] restore sparse MLA + DCP broken by the k3 dcp... | @whx-sjtu | merged | 2026-08-20 | 2026-08-21 |
| [#1951](https://github.com/ROCm/ATOM/pull/1951) | [feat](k3): support dcp on vllm-atom kimi k3 | @PerryZhang01 | merged | 2026-08-19 | 2026-08-20 |
| [#1971](https://github.com/ROCm/ATOM/pull/1971) | perf(dsv4): default native indexer cache to FP4 | @yhl-amd | merged | 2026-08-20 | 2026-08-20 |
| [#1917](https://github.com/ROCm/ATOM/pull/1917) | feat(moe): fuse shared experts into all-to-all MoE | @JiaoliangYu | merged | 2026-08-17 | 2026-08-20 |
| [#1966](https://github.com/ROCm/ATOM/pull/1966) | fix(dsv4): follow AITER FP4 MQA package move | @yhl-amd | merged | 2026-08-20 | 2026-08-20 |
| [#1948](https://github.com/ROCm/ATOM/pull/1948) | feat(spec-decode): take the forced-acceptance target as a le... | @whx-sjtu | merged | 2026-08-19 | 2026-08-20 |
| [#1964](https://github.com/ROCm/ATOM/pull/1964) | fuse kernels in kimi | @ganyi1996ppo | merged | 2026-08-20 | 2026-08-20 |
| [#1852](https://github.com/ROCm/ATOM/pull/1852) | Attention FFN Piecewise cudagraph support for optimize DSpar... | @ZhangLirong-amd | merged | 2026-08-10 | 2026-08-20 |
| [#1958](https://github.com/ROCm/ATOM/pull/1958) | fix(sparse-mla): follow up on #1882 review — unmask sparse-g... | @Jasen2201 | merged | 2026-08-19 | 2026-08-20 |
| [#1930](https://github.com/ROCm/ATOM/pull/1930) | [feat][kimi-k3] enable dcp for k3 + dspark | @whx-sjtu | merged | 2026-08-17 | 2026-08-20 |
| [#1950](https://github.com/ROCm/ATOM/pull/1950) | ci: add Mooncake GPUDirect RDMA smoke test for atomesh PD to... | @junyyang-amd | merged | 2026-08-19 | 2026-08-19 |
| [#1882](https://github.com/ROCm/ATOM/pull/1882) | Enhance GLM-5.2 with DP attention, prefix cache optimization... | @Jasen2201 | merged | 2026-08-13 | 2026-08-19 |
| [#1956](https://github.com/ROCm/ATOM/pull/1956) | fix(lmcache): allocate staging buffer on first-use stream | @yhl-amd | merged | 2026-08-19 | 2026-08-19 |
| [#1899](https://github.com/ROCm/ATOM/pull/1899) | [atom-vllm] Kimi-K3 DSpark speculative decoding for the ATOM... | @whx-sjtu | merged | 2026-08-14 | 2026-08-19 |
| [#1931](https://github.com/ROCm/ATOM/pull/1931) | [feat][DCP]Add cp_kv_cache_interleave_size for PD | @yitingw1 | merged | 2026-08-17 | 2026-08-19 |
| [#1690](https://github.com/ROCm/ATOM/pull/1690) | [draft] support ATOM plugin for qwen3.5 DPxTPx/DPxEPx | @zovonoir | merged | 2026-07-24 | 2026-08-19 |
| [#1881](https://github.com/ROCm/ATOM/pull/1881) | Atom plugin dflash enable | @zovonoir | merged | 2026-08-13 | 2026-08-19 |
| [#1880](https://github.com/ROCm/ATOM/pull/1880) | feat(lmcache): add DSV4 page and slot offload | @yhl-amd | merged | 2026-08-13 | 2026-08-19 |
| [#1943](https://github.com/ROCm/ATOM/pull/1943) | perf(v4): a smaller PAGE checkpoint image, a 60x cheaper cop... | @valarLip | merged | 2026-08-18 | 2026-08-18 |
| [#1939](https://github.com/ROCm/ATOM/pull/1939) | [ATOM][Doc] Update accuracy and performance test script of G... | @MengqingCao | merged | 2026-08-18 | 2026-08-18 |
| [#1938](https://github.com/ROCm/ATOM/pull/1938) | [Opt] Optimize MLA prefill chunk | @yitingw1 | merged | 2026-08-18 | 2026-08-18 |
| [#1936](https://github.com/ROCm/ATOM/pull/1936) | fix kimi prefix caching accuracy | @ganyi1996ppo | merged | 2026-08-18 | 2026-08-18 |
| [#1840](https://github.com/ROCm/ATOM/pull/1840) | [sgl+atom] Upgrade SGLang to v0.5.17 | @zhangxinyuanliuhengyu | merged | 2026-08-10 | 2026-08-18 |
| [#1924](https://github.com/ROCm/ATOM/pull/1924) | [feat](vllm): upgrade vllm to 0.27.1 | @PerryZhang01 | merged | 2026-08-17 | 2026-08-18 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-08-30T13:23:35Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#604](https://github.com/ROCm/mori/pull/604) | perf(ep): rework how EP tuning picks and saves, remove small... | @isytwu | open | 2026-08-26 | 2026-08-30 |
| [#558](https://github.com/ROCm/mori/pull/558) | EP support for rail isolated topology through Host based RDM... | @itej89 | open | 2026-08-13 | 2026-08-29 |
| [#540](https://github.com/ROCm/mori/pull/540) | refactor(umbp): make distributed mode backend- and transport... | @TianDi101 | open | 2026-08-11 | 2026-08-28 |
| [#586](https://github.com/ROCm/mori/pull/586) | perf(ep): optimize IntraNode dispatch kernel for MI350X | @kudomcho | open | 2026-08-19 | 2026-08-28 |
| [#607](https://github.com/ROCm/mori/pull/607) | Enable MLX+MI300 CI | @QizhouZhang97 | open | 2026-08-27 | 2026-08-28 |
| [#618](https://github.com/ROCm/mori/pull/618) | allocator: add CCO-backed LSA symmetric windows | @yangyuhuiling | draft | 2026-08-28 | 2026-08-28 |
| [#615](https://github.com/ROCm/mori/pull/615) | [Pre-flight] Add cluster-network-topology skill and scripts | @lcskrishna | draft | 2026-08-28 | 2026-08-28 |
| [#614](https://github.com/ROCm/mori/pull/614) | perf(ep): InterNodeV1LL low-token latency on MI300X + CX7 | @jhchouuu | draft | 2026-08-28 | 2026-08-28 |
| [#613](https://github.com/ROCm/mori/pull/613) | perf(ep): optimize InterNodeV1LL small-token latency on EP16 | @isytwu | draft | 2026-08-28 | 2026-08-28 |
| [#612](https://github.com/ROCm/mori/pull/612) | fix: use strided offsets in run_single_once when batch_conti... | @kudomcho | open | 2026-08-27 | 2026-08-27 |
| [#608](https://github.com/ROCm/mori/pull/608) | perf(EPv2): size the gfx1250 combine pull tile against the L... | @zhangfei829 | open | 2026-08-27 | 2026-08-27 |
| [#587](https://github.com/ROCm/mori/pull/587) | feat(umbp): peer-local multi-backend placement and logical t... | @wuyl1 | open | 2026-08-20 | 2026-08-27 |
| [#603](https://github.com/ROCm/mori/pull/603) | CCO SDMA micro optimizations | @pemeliya | open | 2026-08-25 | 2026-08-26 |
| [#585](https://github.com/ROCm/mori/pull/585) | Don't merge: AI NIC perf collection | @amirakb89 | draft | 2026-08-19 | 2026-08-25 |
| [#598](https://github.com/ROCm/mori/pull/598) | tune(ep/v2): give fp8 dispatch its own gfx1250 EP4 row | @jhchouuu | open | 2026-08-24 | 2026-08-24 |
| [#578](https://github.com/ROCm/mori/pull/578) | feat(ep/v2): TDM dispatch transport for the flydsl backend | @XingerZhu | open | 2026-08-18 | 2026-08-19 |
| [#579](https://github.com/ROCm/mori/pull/579) | feat(umbp): GPU Direct Storage (hipfile) SSD-to-GPU read pat... | @isytwu | open | 2026-08-19 | 2026-08-19 |
| [#566](https://github.com/ROCm/mori/pull/566) | Feat/env check gpu memory | @amirakb89 | open | 2026-08-14 | 2026-08-19 |
| [#518](https://github.com/ROCm/mori/pull/518) | MORI-IO: CPU hot-path improvements (profile-guided) | @pemeliya | draft | 2026-08-03 | 2026-08-18 |
| [#573](https://github.com/ROCm/mori/pull/573) | Io cpp bench default | @amirakb89 | open | 2026-08-17 | 2026-08-18 |
| [#574](https://github.com/ROCm/mori/pull/574) | Io prepared transfers v3 | @amirakb89 | open | 2026-08-17 | 2026-08-17 |
| [#570](https://github.com/ROCm/mori/pull/570) | test bnxt ci | @QizhouZhang97 | open | 2026-08-17 | 2026-08-17 |
| [#547](https://github.com/ROCm/mori/pull/547) | feat(umbp): support the UMBP tree connector on a distributed... | @maning00 | open | 2026-08-12 | 2026-08-14 |
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
| [#617](https://github.com/ROCm/mori/pull/617) | fix(EPv2): align staging pool capacity with EpMaxRecv to pre... | @kawhil-amd | merged | 2026-08-28 | 2026-08-28 |
| [#616](https://github.com/ROCm/mori/pull/616) | examples: address a torch symmetric tensor as a CCO LSA wind... | @jhchouuu | merged | 2026-08-28 | 2026-08-28 |
| [#594](https://github.com/ROCm/mori/pull/594) | feat(cco): add Triton device API bindings | @yangyuhuiling | merged | 2026-08-24 | 2026-08-27 |
| [#606](https://github.com/ROCm/mori/pull/606) | feat(EPv2): support wide EP (larger than 32) in intranode ke... | @kawhil-amd | merged | 2026-08-26 | 2026-08-27 |
| [#609](https://github.com/ROCm/mori/pull/609) | fix(cco): initialize packaged ROCm runtime before native loa... | @yangyuhuiling | merged | 2026-08-27 | 2026-08-27 |
| [#544](https://github.com/ROCm/mori/pull/544) | allocator: register mori as a torch SymmetricMemory backend | @carlushuang | merged | 2026-08-11 | 2026-08-26 |
| [#600](https://github.com/ROCm/mori/pull/600) | [AMD][DSV4] fix: recognize fp4_blockwise in the AUTO tuning ... | @karverma-amd | merged | 2026-08-24 | 2026-08-26 |
| [#605](https://github.com/ROCm/mori/pull/605) | fix(security): harden bootstrap and CI against scan findings | @jhchouuu | merged | 2026-08-26 | 2026-08-26 |
| [#596](https://github.com/ROCm/mori/pull/596) | perf(umbp): cut per-range overhead in local BatchGetRanges | @isytwu | merged | 2026-08-24 | 2026-08-25 |
| [#592](https://github.com/ROCm/mori/pull/592) | bench(cco): add a one-operation P2P latency probe, rename xg... | @jhchouuu | merged | 2026-08-24 | 2026-08-25 |
| [#591](https://github.com/ROCm/mori/pull/591) | feat(shmem): MORI_ENABLE_RAIL_ONLY to restrict RDMA QPs to s... | @jhchouuu | merged | 2026-08-22 | 2026-08-25 |
| [#597](https://github.com/ROCm/mori/pull/597) | feat(EPv2): extend support for rack-level wide-ep. | @kawhil-amd | merged | 2026-08-24 | 2026-08-25 |
| [#583](https://github.com/ROCm/mori/pull/583) | MORI IO improvements 2nd try | @pemeliya | merged | 2026-08-19 | 2026-08-25 |
| [#593](https://github.com/ROCm/mori/pull/593) | feat(EPv2): forward a per-token scale row with dispatch | @jhchouuu | merged | 2026-08-24 | 2026-08-24 |
| [#599](https://github.com/ROCm/mori/pull/599) | Perf/ep disp 1250 ship | @zhangfei829 | merged | 2026-08-24 | 2026-08-24 |
| [#584](https://github.com/ROCm/mori/pull/584) | Drop local xla_ffi headers in favor of jax-backed header pat... | @pemeliya | merged | 2026-08-19 | 2026-08-24 |
| [#595](https://github.com/ROCm/mori/pull/595) | docs(skills): add known-issues skill for the VMM/XGMI kernel... | @jhchouuu | merged | 2026-08-24 | 2026-08-24 |
| [#589](https://github.com/ROCm/mori/pull/589) | perf(umbp): partial-range remote fetch + asynchronous locali... | @isytwu | merged | 2026-08-20 | 2026-08-24 |
| [#590](https://github.com/ROCm/mori/pull/590) | (bugfix): intranode bw check in mixed-vendor environment | @QizhouZhang97 | merged | 2026-08-21 | 2026-08-24 |
| [#577](https://github.com/ROCm/mori/pull/577) | perf(EPv2): rework the gfx1250 combine entry barrier and wid... | @kawhil-amd | merged | 2026-08-18 | 2026-08-21 |
| [#582](https://github.com/ROCm/mori/pull/582) | chore(EPv2): initialize the routing dest_map once within the... | @kawhil-amd | merged | 2026-08-19 | 2026-08-20 |
| [#403](https://github.com/ROCm/mori/pull/403) | perf(umbp): optimize PoolClient BatchPut/BatchGet | @isytwu | merged | 2026-06-17 | 2026-08-19 |
| [#380](https://github.com/ROCm/mori/pull/380) | test(umbp): align distributed tests with current API and reg... | @isytwu | merged | 2026-06-10 | 2026-08-19 |
| [#343](https://github.com/ROCm/mori/pull/343) | Feat: Enable SSD tier in distributed UMBP | @isytwu | merged | 2026-06-01 | 2026-08-19 |
| [#581](https://github.com/ROCm/mori/pull/581) | perf(umbp): give ranged get/put separate scratch arenas | @isytwu | merged | 2026-08-19 | 2026-08-19 |
| [#556](https://github.com/ROCm/mori/pull/556) | Logger and timer macros improvements | @pemeliya | merged | 2026-08-13 | 2026-08-18 |
| [#571](https://github.com/ROCm/mori/pull/571) | (bugfix) Nightly CI | @QizhouZhang97 | merged | 2026-08-17 | 2026-08-18 |
| [#576](https://github.com/ROCm/mori/pull/576) | test(ep/v2): one bench for both backends, with a correctness... | @jhchouuu | merged | 2026-08-18 | 2026-08-18 |
| [#541](https://github.com/ROCm/mori/pull/541) | Adpat mori to RoCM 714 container | @QizhouZhang97 | merged | 2026-08-11 | 2026-08-18 |
| [#559](https://github.com/ROCm/mori/pull/559) | Support graph replays for SDMA AllReduce | @hubertlu-tw | merged | 2026-08-13 | 2026-08-17 |
| [#569](https://github.com/ROCm/mori/pull/569) | Feat/umbp tree connector port | @TianDi101 | merged | 2026-08-17 | 2026-08-17 |
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

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-08-30T13:23:39Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1032](https://github.com/ROCm/FlyDSL/pull/1032) | [Kernel] Add dilation, padding_mode and groups to convolutio... | @amd-nprotaso | open | 2026-08-19 | 2026-08-29 |
| [#1080](https://github.com/ROCm/FlyDSL/pull/1080) | [CI] Retry the baseline MLIR cache restore once | @Phil-amd | open | 2026-08-29 | 2026-08-29 |
| [#1015](https://github.com/ROCm/FlyDSL/pull/1015) | [Tools] Add architecture-general ISA resource diff tool | @Phil-amd | open | 2026-08-17 | 2026-08-29 |
| [#1065](https://github.com/ROCm/FlyDSL/pull/1065) | [Kernel][PA] Support BF16 vectorized KV with asymmetric K/V ... | @sammysun0711 | open | 2026-08-24 | 2026-08-29 |
| [#1001](https://github.com/ROCm/FlyDSL/pull/1001) | [WIP][Compiler][gfx120] Add modC/reuseA/reuseB to MmaOpGFX12... | @jli-melchior | open | 2026-08-12 | 2026-08-29 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | open | 2026-07-14 | 2026-08-29 |
| [#1066](https://github.com/ROCm/FlyDSL/pull/1066) | [Kernel][FA] Support paged FP8 Flash attention with asymmetr... | @sammysun0711 | open | 2026-08-24 | 2026-08-28 |
| [#1056](https://github.com/ROCm/FlyDSL/pull/1056) | Support vLLM paged KV cache layouts on the gfx950 attention ... | @akii96 | open | 2026-08-21 | 2026-08-28 |
| [#931](https://github.com/ROCm/FlyDSL/pull/931) | Add flex_attention (score_mod / mask_mod) on the generic fla... | @RichardChamberlain1 | draft | 2026-07-30 | 2026-08-28 |
| [#1079](https://github.com/ROCm/FlyDSL/pull/1079) | [ROCDL] cdna5 tdm_partition: relate only mode-0, pass rest m... | @xudoyuan | draft | 2026-08-28 | 2026-08-28 |
| [#971](https://github.com/ROCm/FlyDSL/pull/971) | [gfx1250] Add A8W8/A8W4/A4W4 compute-bound GEMM | @aoli26 | open | 2026-08-06 | 2026-08-28 |
| [#891](https://github.com/ROCm/FlyDSL/pull/891) | [Test] Add gfx1250 WMMA lowering tests for additional dtypes | @AiyyappanMR | open | 2026-07-23 | 2026-08-28 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-08-28 |
| [#1073](https://github.com/ROCm/FlyDSL/pull/1073) | [Kernel][Perf] Add RDNA3 INT8 WMMA GEMM, 1.23-2.80x over tor... | @vlluvia | open | 2026-08-27 | 2026-08-28 |
| [#1058](https://github.com/ROCm/FlyDSL/pull/1058) | [Perf] avoid hashing when cache not enabled | @ppppqp | open | 2026-08-23 | 2026-08-28 |
| [#1077](https://github.com/ROCm/FlyDSL/pull/1077) | i[gfx1250] Switch BF16 GEMM LDS loads to ds_read_b256, +0.4 ... | @amd-hhashemi | open | 2026-08-28 | 2026-08-28 |
| [#1051](https://github.com/ROCm/FlyDSL/pull/1051) | [FlyToROCDL] Bump LLVM to 941a04e6 and adapt gpu.launch_func... | @Phil-amd | open | 2026-08-21 | 2026-08-27 |
| [#1076](https://github.com/ROCm/FlyDSL/pull/1076) | Ci/change image to speedup ci | @coderfeli | open | 2026-08-27 | 2026-08-27 |
| [#1074](https://github.com/ROCm/FlyDSL/pull/1074) | [Dialect] Add FP8 support to GFX120X WMMA atom | @big-yellow-duck | open | 2026-08-27 | 2026-08-27 |
| [#1072](https://github.com/ROCm/FlyDSL/pull/1072) | [CI][DO NOT MERGE] Probe: LLVM pin bump on top of #1071 | @Phil-amd | draft | 2026-08-27 | 2026-08-27 |
| [#709](https://github.com/ROCm/FlyDSL/pull/709) | [Kernel] feat: Add MXFP6-E2M3 activation support to mixed_mo... | @amd-satre | draft | 2026-06-19 | 2026-08-26 |
| [#1069](https://github.com/ROCm/FlyDSL/pull/1069) | [Flydsl] Add Qwen-Image VAE classic conv shapes to conv3d te... | @huizzhan | draft | 2026-08-26 | 2026-08-26 |
| [#972](https://github.com/ROCm/FlyDSL/pull/972) | add A4W4 and FP8 P2P transport support to MegaMoE | @Yaowu-Xiong | open | 2026-08-06 | 2026-08-26 |
| [#957](https://github.com/ROCm/FlyDSL/pull/957) | Add SVD quant for Quark | @amd-xiaoyu12 | draft | 2026-08-02 | 2026-08-26 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-08-24 |
| [#1045](https://github.com/ROCm/FlyDSL/pull/1045) | [Bugfix] Refuse a batch entry the buffer descriptor cannot a... | @JohnQinAMD | open | 2026-08-20 | 2026-08-24 |
| [#1050](https://github.com/ROCm/FlyDSL/pull/1050) | [Fix] Restore the fx.maxnumf contract, and keep ninf off the... | @JohnQinAMD | open | 2026-08-21 | 2026-08-24 |
| [#906](https://github.com/ROCm/FlyDSL/pull/906) | Add fast_divmod magic-number division helper | @kashif | open | 2026-07-26 | 2026-08-24 |
| [#1062](https://github.com/ROCm/FlyDSL/pull/1062) | smem cleanup: move capacity helpers off legacy allocator, mi... | @xudoyuan | draft | 2026-08-24 | 2026-08-24 |
| [#1057](https://github.com/ROCm/FlyDSL/pull/1057) | [Kernel][Perf] Add gfx1151 tile selection for RDNA3 GEMM | @tangzzycc | open | 2026-08-22 | 2026-08-24 |
| [#1055](https://github.com/ROCm/FlyDSL/pull/1055) | Add page-16 sliding-window attention support | @zjing14 | draft | 2026-08-21 | 2026-08-22 |
| [#1013](https://github.com/ROCm/FlyDSL/pull/1013) | [ROCDL] Add make_tiled_tdm_atom op and tdm_partition | @sjfeng1999 | open | 2026-08-14 | 2026-08-21 |
| [#1038](https://github.com/ROCm/FlyDSL/pull/1038) | [AOT] Add resilient parallel job scheduler | @zhiding512 | open | 2026-08-20 | 2026-08-21 |
| [#1047](https://github.com/ROCm/FlyDSL/pull/1047) | Add review-flydsl-kernel: legacy-spelling scanner distilled ... | @jhinpan | open | 2026-08-20 | 2026-08-21 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-08-18 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [WIP][Fix] Fix `lld invocation failed` when ROCm is not at t... | @jli-melchior | open | 2026-08-08 | 2026-08-17 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-08-12 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-08-07 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-08-05 |
| [#912](https://github.com/ROCm/FlyDSL/pull/912) | Fix hierarchical reduced predicates in copy layout lowering | @HydraQYH | open | 2026-07-27 | 2026-08-03 |
| [#942](https://github.com/ROCm/FlyDSL/pull/942) | [Kernel] Add submanifold sparse 3D convolution (bf16 implici... | @jiacao-amd | draft | 2026-07-31 | 2026-08-01 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-07-30 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#823](https://github.com/ROCm/FlyDSL/pull/823) | [MoE] Add gelu_tanh activation to MoE stage1 GEMM kernels | @jonahbernard | open | 2026-07-09 | 2026-07-28 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#900](https://github.com/ROCm/FlyDSL/pull/900) | Enabling coexec llvm for Flydsl | @omuhamma | draft | 2026-07-24 | 2026-07-27 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-07-24 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-07-23 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-07-23 |
| [#888](https://github.com/ROCm/FlyDSL/pull/888) | [Kernel][MI350] Add cache-aware 8-wave BF16/FP16 GEMM | @zhanglx13 | draft | 2026-07-23 | 2026-07-23 |
| [#837](https://github.com/ROCm/FlyDSL/pull/837) | Add a8w4 kernel for Quark mix-precision | @amd-xiaoyu12 | open | 2026-07-12 | 2026-07-23 |
| [#401](https://github.com/ROCm/FlyDSL/pull/401) | gemm a16w16 flydsl implementation (WIP) | @omuhamma | draft | 2026-04-14 | 2026-07-20 |
| [#487](https://github.com/ROCm/FlyDSL/pull/487) | blockscale code gfx1250 (WIP) | @omuhamma | open | 2026-05-08 | 2026-07-20 |
| [#829](https://github.com/ROCm/FlyDSL/pull/829) | [Feature] Extract reusable event-based benchmarking helper | @jhinpan | draft | 2026-07-10 | 2026-07-10 |
| [#748](https://github.com/ROCm/FlyDSL/pull/748) | runtime: hard-fail mgpuModuleLoadJIT on HIP | @fallintoplace | open | 2026-06-25 | 2026-07-10 |
| [#757](https://github.com/ROCm/FlyDSL/pull/757) | FlyDSL gemm_decode: small-M dense GEMM kernels (BF16/FP8/blo... | @vedenev-amd | draft | 2026-06-26 | 2026-07-07 |
| [#764](https://github.com/ROCm/FlyDSL/pull/764) | flash_attn_generic: replace raw arith.* FP ops with FlyDSL-t... | @xudoyuan | draft | 2026-06-29 | 2026-07-06 |
| [#744](https://github.com/ROCm/FlyDSL/pull/744) | [Fix] Set identity block scales for CDNA4 MFMA_Scale in fp8 ... | @amd-songpiao | open | 2026-06-25 | 2026-06-26 |
| [#746](https://github.com/ROCm/FlyDSL/pull/746) | fix tile syntax in divide | @tingqli | open | 2026-06-25 | 2026-06-26 |
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
| [#430](https://github.com/ROCm/FlyDSL/pull/430) | Add RDNA4 MoE WMMA kernel path | @vivienfanghuagood | draft | 2026-04-23 | 2026-04-27 |
| [#424](https://github.com/ROCm/FlyDSL/pull/424) | Add BF16xFP4 MoE GEMM stage1 kernel | @apicciau | draft | 2026-04-21 | 2026-04-21 |
| [#420](https://github.com/ROCm/FlyDSL/pull/420) | Pr/a16wi4 group splitk | @yadaish | draft | 2026-04-21 | 2026-04-21 |
| [#395](https://github.com/ROCm/FlyDSL/pull/395) | Add initial Windows support | @0xDELUXA | draft | 2026-04-13 | 2026-04-16 |
| [#354](https://github.com/ROCm/FlyDSL/pull/354) | Add `hgemm_splitk+allreduce` prologue/epilogue fusion kernel... | @xytpai | draft | 2026-04-07 | 2026-04-08 |
| [#257](https://github.com/ROCm/FlyDSL/pull/257) | [Feature] Add JAX integration for FlyDSL kernels | @wenchenvincent | open | 2026-03-21 | 2026-03-27 |
| [#1078](https://github.com/ROCm/FlyDSL/pull/1078) | [gfx1250] Bf16 GEMM: Issue tdm prefetch earlier for wide til... | @aoli26 | merged | 2026-08-28 | 2026-08-30 |
| [#1075](https://github.com/ROCm/FlyDSL/pull/1075) | [CI] Add MI35x runners for validation tests | @coderfeli | merged | 2026-08-27 | 2026-08-27 |
| [#1061](https://github.com/ROCm/FlyDSL/pull/1061) | [gfx1250] Add bf16 gemm | @aoli26 | merged | 2026-08-24 | 2026-08-27 |
| [#1071](https://github.com/ROCm/FlyDSL/pull/1071) | [CI] Build the benchmark baseline wheel against the base com... | @Phil-amd | merged | 2026-08-27 | 2026-08-27 |
| [#1064](https://github.com/ROCm/FlyDSL/pull/1064) | [Bugfix][PA] Fix D192 query staging and 64-bit cache offsets | @sammysun0711 | merged | 2026-08-24 | 2026-08-27 |
| [#1020](https://github.com/ROCm/FlyDSL/pull/1020) | [Bugfix][Kernel] Fix fp8 dense attention: softmax normalisat... | @JohnQinAMD | merged | 2026-08-18 | 2026-08-26 |
| [#1068](https://github.com/ROCm/FlyDSL/pull/1068) | [Kernel] Refine G2S copy layout for gfx950 GEMM | @xytpai | merged | 2026-08-25 | 2026-08-26 |
| [#1022](https://github.com/ROCm/FlyDSL/pull/1022) | [Kernel] Add opt-in autotuning for Softmax | @jhinpan | merged | 2026-08-18 | 2026-08-25 |
| [#1063](https://github.com/ROCm/FlyDSL/pull/1063) | [GEMM] Track gfx950 async LDS loads with asyncmark | @xytpai | merged | 2026-08-24 | 2026-08-24 |
| [#1060](https://github.com/ROCm/FlyDSL/pull/1060) | [gfx1250][GEMM] Add const-init to the test and support mxsca... | @aoli26 | merged | 2026-08-24 | 2026-08-24 |
| [#1033](https://github.com/ROCm/FlyDSL/pull/1033) | [Bugfix][Kernel] Fix NaN from the lazy rescale on a wide sco... | @JohnQinAMD | merged | 2026-08-19 | 2026-08-24 |
| [#1027](https://github.com/ROCm/FlyDSL/pull/1027) | [Skills] Fix silently-ignored frontmatter, de-drift kernel s... | @jhinpan | merged | 2026-08-18 | 2026-08-24 |
| [#1037](https://github.com/ROCm/FlyDSL/pull/1037) | [ROCDL] Lower approximate exp2 to native intrinsic | @jhinpan | merged | 2026-08-19 | 2026-08-24 |
| [#1052](https://github.com/ROCm/FlyDSL/pull/1052) | [Fix] crd2idx uses wrong dynamic basis leaf | @sjfeng1999 | merged | 2026-08-21 | 2026-08-21 |
| [#910](https://github.com/ROCm/FlyDSL/pull/910) | [Kernel][Perf] Optimize paged-attention metadata decode | @fsx950223 | merged | 2026-07-27 | 2026-08-21 |
| [#1025](https://github.com/ROCm/FlyDSL/pull/1025) | [Kernel] Replace raw scf ops with Python control flow in ker... | @xudoyuan | merged | 2026-08-18 | 2026-08-21 |
| [#1028](https://github.com/ROCm/FlyDSL/pull/1028) | [Kernel][Perf] Speed up the RDNA3 GEMM up to 1.85x by choosi... | @vlluvia | merged | 2026-08-19 | 2026-08-21 |
| [#1035](https://github.com/ROCm/FlyDSL/pull/1035) | [Fix] Let fx.maxnumf inherit the ambient fastmath | @JohnQinAMD | merged | 2026-08-19 | 2026-08-21 |
| [#1043](https://github.com/ROCm/FlyDSL/pull/1043) | [Fix] Fix alignment reported by ptr.load/ptr.store lowering | @sjfeng1999 | merged | 2026-08-20 | 2026-08-21 |
| [#1046](https://github.com/ROCm/FlyDSL/pull/1046) | fix(ci): isolate self-hosted runner artifacts | @jhinpan | merged | 2026-08-20 | 2026-08-21 |
| [#1009](https://github.com/ROCm/FlyDSL/pull/1009) | [Fix] Restore the gfx950 XCD mapping for bf16 dense attentio... | @JohnQinAMD | merged | 2026-08-14 | 2026-08-21 |
| [#1044](https://github.com/ROCm/FlyDSL/pull/1044) | Release: bump version to 0.3.2 | @coderfeli | merged | 2026-08-20 | 2026-08-20 |
| [#1008](https://github.com/ROCm/FlyDSL/pull/1008) | [Kernel][Perf] Enable the gmem->LDS async copy for f16/bf16 ... | @JohnQinAMD | merged | 2026-08-13 | 2026-08-20 |
| [#1007](https://github.com/ROCm/FlyDSL/pull/1007) | [Bugfix] Fix two A-tile loading bugs in the preshuffle GEMM | @JohnQinAMD | merged | 2026-08-13 | 2026-08-20 |
| [#1031](https://github.com/ROCm/FlyDSL/pull/1031) | [Ext][Coop] Add cooperative warp- and block-scope collective... | @sjfeng1999 | merged | 2026-08-19 | 2026-08-20 |
| [#1041](https://github.com/ROCm/FlyDSL/pull/1041) | [GEMM] Refine GFX950 A16W16 async load scheduling | @xytpai | merged | 2026-08-20 | 2026-08-20 |
| [#1040](https://github.com/ROCm/FlyDSL/pull/1040) | [CI] Bypass runner git-cache in promote checkout | @coderfeli | merged | 2026-08-20 | 2026-08-20 |
| [#1039](https://github.com/ROCm/FlyDSL/pull/1039) | [Docs] Remove Disclaimer section from README | @coderfeli | merged | 2026-08-20 | 2026-08-20 |
| [#1026](https://github.com/ROCm/FlyDSL/pull/1026) | [CI] Track Softmax backward in the benchmark dashboard | @jhinpan | merged | 2026-08-18 | 2026-08-20 |
| [#1029](https://github.com/ROCm/FlyDSL/pull/1029) | [ROCDL] Accept IntegerAttr in the wait-counter for backward ... | @sjfeng1999 | merged | 2026-08-19 | 2026-08-20 |
| [#1030](https://github.com/ROCm/FlyDSL/pull/1030) | [FlyToROCDL] Honor fly pointer alignment in ptr.load/ptr.sto... | @xudoyuan | merged | 2026-08-19 | 2026-08-20 |
| [#860](https://github.com/ROCm/FlyDSL/pull/860) | [Kernel] fp8 conv3d: 8-wave GEMM pipeline + BIG_IN fix | @jiacao-amd | merged | 2026-07-15 | 2026-08-19 |
| [#1019](https://github.com/ROCm/FlyDSL/pull/1019) | [Kernel] Add row-wise Softmax backward | @jhinpan | merged | 2026-08-17 | 2026-08-18 |
| [#1021](https://github.com/ROCm/FlyDSL/pull/1021) | [Test] Run every RUN line in the MLIR FileCheck harness | @sjfeng1999 | merged | 2026-08-18 | 2026-08-18 |
| [#1024](https://github.com/ROCm/FlyDSL/pull/1024) | [ROCDL] Fix wave size for gfx1250 (wave32, not wave64) | @sjfeng1999 | merged | 2026-08-18 | 2026-08-18 |
| [#1023](https://github.com/ROCm/FlyDSL/pull/1023) | [ROCDL] Add Global/BufferLoadAsyncLDS atoms | @sjfeng1999 | merged | 2026-08-18 | 2026-08-18 |
| [#960](https://github.com/ROCm/FlyDSL/pull/960) | [Kernel][MI350] Add bias, alibi bias and sink to flash atten... | @amd-nprotaso | merged | 2026-08-03 | 2026-08-18 |
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

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-08-30T13:23:42Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#716](https://github.com/ROCm/TransformerEngine/pull/716) | Add ROCm Triton blockwise FP8 grouped GEMM | @sudhu2k | open | 2026-08-25 | 2026-08-29 |
| [#721](https://github.com/ROCm/TransformerEngine/pull/721) | Ifu dev 20260828 v2.19 | @matthiasdiener | draft | 2026-08-28 | 2026-08-28 |
| [#709](https://github.com/ROCm/TransformerEngine/pull/709) | Update to new QoLA/CK-JIT/AITER | @ipanfilo | open | 2026-08-19 | 2026-08-28 |
| [#697](https://github.com/ROCm/TransformerEngine/pull/697) | Integrate MXFP4 hipblaslt GEMM support | @VeeraRajasekhar | open | 2026-08-07 | 2026-08-28 |
| [#678](https://github.com/ROCm/TransformerEngine/pull/678) | [ROCm] Jax Add softmax sink (learnable off-by-one) support f... | @shurale-nkn | open | 2026-07-24 | 2026-08-27 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-08-27 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-08-26 |
| [#705](https://github.com/ROCm/TransformerEngine/pull/705) | [proof-of-concept] Kernel autotuning in TE | @matthiasdiener | draft | 2026-08-18 | 2026-08-26 |
| [#676](https://github.com/ROCm/TransformerEngine/pull/676) | Experimental FlyDSL GEMM backend for TE PyTorch (BF16/FP16/F... | @aris134 | open | 2026-07-22 | 2026-08-26 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-08-26 |
| [#715](https://github.com/ROCm/TransformerEngine/pull/715) | Do not mark replicated weights as tensor-model-parallel | @wenchenvincent | open | 2026-08-25 | 2026-08-26 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-08-21 |
| [#710](https://github.com/ROCm/TransformerEngine/pull/710) | [TE] Added tests to CI | @AllenFarcas | open | 2026-08-20 | 2026-08-21 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-08-20 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-08-19 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | draft | 2026-08-06 | 2026-08-18 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-08-18 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-08-12 |
| [#625](https://github.com/ROCm/TransformerEngine/pull/625) | Add ROCm HIP small-seq fused attention via crossattn_hip_ker... | @VeeraRajasekhar | open | 2026-06-15 | 2026-08-11 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | [proof-of-concept] benchmarks dashboard | @matthiasdiener | draft | 2026-07-14 | 2026-08-11 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-08-05 |
| [#603](https://github.com/ROCm/TransformerEngine/pull/603) | TE AITER gfx1250 integration WIP | @Micky774 | open | 2026-05-29 | 2026-08-04 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | draft | 2026-07-07 | 2026-08-03 |
| [#683](https://github.com/ROCm/TransformerEngine/pull/683) | Updated AITER/QoLA | @Micky774 | open | 2026-07-28 | 2026-07-31 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-07-31 |
| [#679](https://github.com/ROCm/TransformerEngine/pull/679) | microbenchmarks: usv implementation | @matthiasdiener | draft | 2026-07-24 | 2026-07-24 |
| [#673](https://github.com/ROCm/TransformerEngine/pull/673) | ci: bump te-rocm-wheels artifact retention 1d -> 5d | @wenchenvincent | open | 2026-07-17 | 2026-07-23 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-07-21 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-07-08 |
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
| [#713](https://github.com/ROCm/TransformerEngine/pull/713) | Bulk AG Overlap for bf16 on gfx950 | @alextmagro | merged | 2026-08-24 | 2026-08-30 |
| [#719](https://github.com/ROCm/TransformerEngine/pull/719) | CI: parallel download steps, bump {up,down}load-artifacts ve... | @matthiasdiener | merged | 2026-08-27 | 2026-08-29 |
| [#720](https://github.com/ROCm/TransformerEngine/pull/720) | Ifu dev 20260803 v2.18 merge | @matthiasdiener | merged | 2026-08-27 | 2026-08-28 |
| [#711](https://github.com/ROCm/TransformerEngine/pull/711) | Fix test filtering and reporting | @ipanfilo | merged | 2026-08-21 | 2026-08-27 |
| [#704](https://github.com/ROCm/TransformerEngine/pull/704) | [TE] IFU release v2.17 | @AllenFarcas | merged | 2026-08-13 | 2026-08-27 |
| [#714](https://github.com/ROCm/TransformerEngine/pull/714) | microbenchmarks: extend all to additional low-precision dtyp... | @matthiasdiener | merged | 2026-08-24 | 2026-08-26 |
| [#701](https://github.com/ROCm/TransformerEngine/pull/701) | Fix CK grouped-GEMM fallback for fused wgrad accumulation (B... | @sudhu2k | merged | 2026-08-11 | 2026-08-24 |
| [#618](https://github.com/ROCm/TransformerEngine/pull/618) | Refactored reduction kernels | @Micky774 | merged | 2026-06-08 | 2026-08-24 |
| [#707](https://github.com/ROCm/TransformerEngine/pull/707) | Persistent AG + GEMM kernels w/ HipKittens & UserBuffers | @alextmagro | merged | 2026-08-18 | 2026-08-22 |
| [#649](https://github.com/ROCm/TransformerEngine/pull/649) | [Feat] Added JAX-Triton bridge for ROCm | @AllenFarcas | merged | 2026-06-24 | 2026-08-21 |
| [#706](https://github.com/ROCm/TransformerEngine/pull/706) | Disable FlashAttention on ROCm for MLA-style unequal QK/V he... | @sudhu2k | merged | 2026-08-18 | 2026-08-21 |
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
