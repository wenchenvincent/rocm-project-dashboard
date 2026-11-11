# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-11-11T15:40:28Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#202666](https://github.com/pytorch/pytorch/pull/202666) | [ROCm]: Add Operator Benchmarks for Group GEMM | @TheRealMichaelWang | closed | 2026-10-29 | 2026-11-11 |
| [#203825](https://github.com/pytorch/pytorch/pull/203825) | [ROCm] Faster cumsum / cumprod / logcumsumexp: register-bloc... | @jerrymannil | draft | 2026-11-06 | 2026-11-11 |
| [#202538](https://github.com/pytorch/pytorch/pull/202538) | [ROCm] Zero-fill MIOpen CTC loss grad for padded time steps | @amd-maradosa | open | 2026-10-29 | 2026-11-11 |
| [#203092](https://github.com/pytorch/pytorch/pull/203092) | [CPP FakeTensor] Add CppFakeTensorMode | @liangel-02 | open | 2026-11-02 | 2026-11-11 |
| [#202821](https://github.com/pytorch/pytorch/pull/202821) | [ROCm] Update rocm preview wheel to 10.3.0a20261110 | @chinmaydk99 | open | 2026-10-30 | 2026-11-11 |
| [#202372](https://github.com/pytorch/pytorch/pull/202372) | Enabling brgemm ukernel for CPU sdpa bf16 on avx-512 | @megha-sangtani | open | 2026-10-28 | 2026-11-11 |
| [#203671](https://github.com/pytorch/pytorch/pull/203671) | [ROCm] Update CK submodule to pick up the ppc64le FastGeluAs... | @alugorey | open | 2026-11-05 | 2026-11-11 |
| [#204073](https://github.com/pytorch/pytorch/pull/204073) | [ROCm] Add Fabric handle support for expandable segment IPC | @chinmaydk99 | open | 2026-11-09 | 2026-11-11 |
| [#195021](https://github.com/pytorch/pytorch/pull/195021) | [headeronly] migrate complex_math | @cleonard530 | open | 2026-08-27 | 2026-11-11 |
| [#193168](https://github.com/pytorch/pytorch/pull/193168) | [FSDP] Stabilize fully_shard overlap timing test | @albmalamd | open | 2026-08-12 | 2026-11-11 |
| [#202625](https://github.com/pytorch/pytorch/pull/202625) | [Profiler] Decide Kineto GPU tracing per session, not per pr... | @scotts | open | 2026-10-29 | 2026-11-11 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-11-11 |
| [#204053](https://github.com/pytorch/pytorch/pull/204053) | [inductor] Adaptive scatter pre-aggregation template replaci... | @jataylo | draft | 2026-11-09 | 2026-11-11 |
| [#194745](https://github.com/pytorch/pytorch/pull/194745) | Move the build environment variable reference into CONTRIBUT... | @zklaus | open | 2026-08-25 | 2026-11-11 |
| [#204202](https://github.com/pytorch/pytorch/pull/204202) | [Inductor] [ROCm] [FlyDSL] Extend general gfx950 FlexAttenti... | @jataylo | draft | 2026-11-10 | 2026-11-11 |
| [#203174](https://github.com/pytorch/pytorch/pull/203174) | [partitioner] Don't treat user Triton kernels as free to rec... | @jananisriram | draft | 2026-11-03 | 2026-11-11 |
| [#204356](https://github.com/pytorch/pytorch/pull/204356) | [XPU] Support scale_result in _scaled_mm | @xiaowangintel | draft | 2026-11-11 | 2026-11-11 |
| [#204417](https://github.com/pytorch/pytorch/pull/204417) | [ROCm] Skip CK test due to rocprofiler crash | @zjliu-amd | draft | 2026-11-11 | 2026-11-11 |
| [#203432](https://github.com/pytorch/pytorch/pull/203432) | Clean up hardware gating for F.quantize_tensor tests | @vkuzo | open | 2026-11-04 | 2026-11-11 |
| [#200965](https://github.com/pytorch/pytorch/pull/200965) | [profiler][xpu] Emit `stream` on XPU kernel trace events | @tszulist-hbn | draft | 2026-10-14 | 2026-11-11 |
| [#198947](https://github.com/pytorch/pytorch/pull/198947) | upstream blockscaled_tma from quant_cast_bench to core | @vkuzo | open | 2026-09-28 | 2026-11-11 |
| [#203677](https://github.com/pytorch/pytorch/pull/203677) | [XPU] Use the deterministic max_pool3d decomposition on XPU ... | @xuhancn | draft | 2026-11-05 | 2026-11-11 |
| [#204078](https://github.com/pytorch/pytorch/pull/204078) | [ROCm][CI] Print GPU processes, host memory, device nodes, a... | @amdfaa | open | 2026-11-09 | 2026-11-11 |
| [#204025](https://github.com/pytorch/pytorch/pull/204025) | [inductor] Add a Helion backend for Inductor kernels | @nullplay | open | 2026-11-09 | 2026-11-11 |
| [#204182](https://github.com/pytorch/pytorch/pull/204182) | [Inductor] Load per-column (1-D bias) and per-row epilogue i... | @jananisriram | draft | 2026-11-10 | 2026-11-11 |
| [#203654](https://github.com/pytorch/pytorch/pull/203654) | [ROCm][CI] Hard-code MI350 runner labels (mi350.N and mi350.... | @amdfaa | draft | 2026-11-05 | 2026-11-11 |
| [#199803](https://github.com/pytorch/pytorch/pull/199803) | [input_capture] Preserve independent storages during replay ... | @prithvip0524 | open | 2026-10-05 | 2026-11-11 |
| [#203175](https://github.com/pytorch/pytorch/pull/203175) | [Inductor] Fuse full fp32 `amax`/`amin` into the pointwise p... | @jananisriram | draft | 2026-11-03 | 2026-11-11 |
| [#197240](https://github.com/pytorch/pytorch/pull/197240) | [inductor] Carry pinned-ness as graph metadata through subpr... | @Arindamsamanta2004 | open | 2026-09-16 | 2026-11-11 |
| [#203875](https://github.com/pytorch/pytorch/pull/203875) | [Inductor][ROCm] Enable decompose_k by default on gfx950 | @jananisriram | draft | 2026-11-06 | 2026-11-11 |
| [#203121](https://github.com/pytorch/pytorch/pull/203121) | [Inductor][ROCm] Size- and load-aware default configs for co... | @jananisriram | draft | 2026-11-02 | 2026-11-11 |
| [#204169](https://github.com/pytorch/pytorch/pull/204169) | [FSDP2] Make the HSDP `all_reduce_stream` high priority | @jananisriram | draft | 2026-11-10 | 2026-11-11 |
| [#204343](https://github.com/pytorch/pytorch/pull/204343) | [Inductor][ROCm] Cap TRITON_MAX_BLOCK["X"] at 4096 on HIP | @beginner137 | open | 2026-11-11 | 2026-11-11 |
| [#203468](https://github.com/pytorch/pytorch/pull/203468) | [ROCm] Support CUDAExtension(dlink=True) via -fgpu-rdc and h... | @umechand-amd | draft | 2026-11-04 | 2026-11-11 |
| [#203865](https://github.com/pytorch/pytorch/pull/203865) | [ROCm][Inductor] Origami: honor heuristic overrides, fall ba... | @umechand-amd | draft | 2026-11-06 | 2026-11-11 |
| [#203312](https://github.com/pytorch/pytorch/pull/203312) | [FSDP][AMD] Sharded Relay for All Reduce/Reduce Scatter (#20... | @kausv | open | 2026-11-04 | 2026-11-11 |
| [#203824](https://github.com/pytorch/pytorch/pull/203824) | [ATen][CUDA] Vectorize the bf16 -> fp32 path of _chunk_cat | @peter-lysakovski | open | 2026-11-06 | 2026-11-11 |
| [#204400](https://github.com/pytorch/pytorch/pull/204400) | [ROCm] Use top-left causal mask in CK memory-efficient atten... | @mgehre-amd | draft | 2026-11-11 | 2026-11-11 |
| [#203681](https://github.com/pytorch/pytorch/pull/203681) | [Inductor][ROCm] Flush L2 + Infinity Cache with a read in In... | @jananisriram | open | 2026-11-05 | 2026-11-11 |
| [#204396](https://github.com/pytorch/pytorch/pull/204396) | [AOTI] Support PrivateUse1 devices in the model.so runtime | @can-gaa-hou | open | 2026-11-11 | 2026-11-11 |
| [#202755](https://github.com/pytorch/pytorch/pull/202755) | [Inductor] Lower aten._to_dtype_rounded | @lw | open | 2026-10-30 | 2026-11-11 |
| [#203126](https://github.com/pytorch/pytorch/pull/203126) | [Testcase Refactoring] Migrate test/distributed/test_seriali... | @AbigailFernandes | open | 2026-11-02 | 2026-11-11 |
| [#202443](https://github.com/pytorch/pytorch/pull/202443) | CuTeDSL user-kernel HOPs: functionalization and the overlap ... | @zoranzhao | open | 2026-10-28 | 2026-11-11 |
| [#200853](https://github.com/pytorch/pytorch/pull/200853) | [Inductor] Keep a buffer's deferred template layout consiste... | @jananisriram | draft | 2026-10-13 | 2026-11-11 |
| [#201967](https://github.com/pytorch/pytorch/pull/201967) | [ROCm] Bump trunk ROCm version to 10.2 | @zjliu-amd | draft | 2026-10-24 | 2026-11-11 |
| [#194821](https://github.com/pytorch/pytorch/pull/194821) | Bump the Python 3.15 numpy pin to 2.5.2 | @pytorchbot | merged | 2026-08-25 | 2026-11-10 |
| [#193836](https://github.com/pytorch/pytorch/pull/193836) | [pytorch][PR] Migrate fastAtomicAdd to headeronly (#193176) ... | @pytorchbot | merged | 2026-08-17 | 2026-11-05 |
| [#193601](https://github.com/pytorch/pytorch/pull/193601) | [ROCm] Retry VecISA dlopen probe with import torch on cold l... | @pytorchbot | merged | 2026-08-14 | 2026-11-05 |
| [#193600](https://github.com/pytorch/pytorch/pull/193600) | [ROCm] Rewrite bundled-lib NEEDED entries after all libs are... | @pytorchbot | merged | 2026-08-14 | 2026-11-05 |
| [#193596](https://github.com/pytorch/pytorch/pull/193596) | [ROCm][libtorch] Bundle ROCm SDK deps for shared-with-deps e... | @pytorchbot | merged | 2026-08-14 | 2026-11-05 |
| [#193443](https://github.com/pytorch/pytorch/pull/193443) | [torch][autograd] Fix Python refcount leaks in autograd C++ ... | @pytorchbot | merged | 2026-08-13 | 2026-11-04 |
| [#193089](https://github.com/pytorch/pytorch/pull/193089) | [ROCm][CI] Update MI300 GPU runner labels and re-enable MI30... | @pytorchbot | merged | 2026-08-12 | 2026-11-04 |
| [#193083](https://github.com/pytorch/pytorch/pull/193083) | Add current_device_idx_expr to XPUDeviceOpOverrides | @pytorchbot | merged | 2026-08-12 | 2026-11-04 |
| [#193018](https://github.com/pytorch/pytorch/pull/193018) | [release 2.14] Apply Release only changes to 2.14 branch | @atalman | merged | 2026-08-11 | 2026-11-03 |
| [#190902](https://github.com/pytorch/pytorch/pull/190902) | [Inductor] Add FlyDSL template compilation infrastructure | @XiaobingSuper | merged | 2026-07-23 | 2026-10-31 |
| [#201578](https://github.com/pytorch/pytorch/pull/201578) | Bump pillow from 12.3.0 to 13.0.0 in /.ci/docker | @dependabot[bot] | merged | 2026-10-20 | 2026-10-27 |
| [#201197](https://github.com/pytorch/pytorch/pull/201197) | [Pipeline] Use microbatched reference in test_schedule_relea... | @pytorchbot | merged | 2026-10-16 | 2026-10-19 |
| [#201037](https://github.com/pytorch/pytorch/pull/201037) | [MPS] Prescale Jacobi SVD by the largest entry (#200776) | @Isalia20 | merged | 2026-10-15 | 2026-10-19 |
| [#200896](https://github.com/pytorch/pytorch/pull/200896) | [c10d][nccl2] Fix nccl symmetric mempool registration for nc... | @pytorchbot | merged | 2026-10-14 | 2026-10-14 |
| [#200681](https://github.com/pytorch/pytorch/pull/200681) | [CD] Remove redundant CPython 3.15 builds from all affected ... | @pytorchbot | merged | 2026-10-12 | 2026-10-13 |
| [#200320](https://github.com/pytorch/pytorch/pull/200320) | [CD] Depend on triton for Python 3.15 wheels and smoke-test ... | @pytorchbot | merged | 2026-10-08 | 2026-10-08 |
| [#200157](https://github.com/pytorch/pytorch/pull/200157) | [ROCm] Remove stale exp/silu inductor_default xfails after T... | @pytorchbot | merged | 2026-10-07 | 2026-10-08 |
| [#198666](https://github.com/pytorch/pytorch/pull/198666) | [release/2.14] Run the release runner-group reconcile in pyt... | @atalman | merged | 2026-09-25 | 2026-09-29 |
| [#198644](https://github.com/pytorch/pytorch/pull/198644) | [release/2.14] [CD] Update to CUDA 13.2.2 for Linux binaries | @atalman | merged | 2026-09-25 | 2026-09-25 |
| [#194235](https://github.com/pytorch/pytorch/pull/194235) | [release/2.14] Update torch-xpu-ops commit pin | @chuanqi129 | merged | 2026-08-20 | 2026-08-24 |
| [#194374](https://github.com/pytorch/pytorch/pull/194374) | [release/2.14] Remove CUDA 13.4 from the binary build matrix | @atalman | merged | 2026-08-21 | 2026-08-21 |
| [#192019](https://github.com/pytorch/pytorch/pull/192019) | Bump aiohttp from 3.14.1 to 3.14.3 in /.ci/docker | @dependabot[bot] | merged | 2026-08-04 | 2026-08-14 |
| [#193148](https://github.com/pytorch/pytorch/pull/193148) | [release/2.14] Revert "Migrate fastAtomicAdd to headeronly (... | @atalman | merged | 2026-08-12 | 2026-08-12 |
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
Repo: `jax-ml/jax` | Last collected: 2026-11-11T15:40:34Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#42394](https://github.com/jax-ml/jax/pull/42394) | [ROCm] Compile IFRT IR MPMD programs on PJRT-backed IFRT cli... | @i-chaochen | open | 2026-11-06 | 2026-11-11 |
| [#42272](https://github.com/jax-ml/jax/pull/42272) | Build the ROCm plugin with static libc++ | @psanal35 | draft | 2026-11-03 | 2026-11-09 |
| [#42404](https://github.com/jax-ml/jax/pull/42404) | [jax-buildcop] Remove workflow-level `permissions: {}` from ... | @copybara-service[bot] | merged | 2026-11-06 | 2026-11-06 |
| [#42366](https://github.com/jax-ml/jax/pull/42366) | Run Bazel ROCm presubmit on the dedicated 1-GPU runner | @psanal35 | merged | 2026-11-05 | 2026-11-06 |
| [#42351](https://github.com/jax-ml/jax/pull/42351) | [CI] Forward `x64` and free-threaded Python flags in `ci/run... | @copybara-service[bot] | merged | 2026-11-05 | 2026-11-05 |
| [#42360](https://github.com/jax-ml/jax/pull/42360) | [CI] Fix ROCm presubmit fork gating and `actionlint` runner ... | @copybara-service[bot] | merged | 2026-11-05 | 2026-11-05 |
| [#41815](https://github.com/jax-ml/jax/pull/41815) | [ROCm] Switch the pinned ROCm CI legs from 10.0 to 10.1 | @magaonka-amd | merged | 2026-10-20 | 2026-11-05 |
| [#42294](https://github.com/jax-ml/jax/pull/42294) | [ROCm] : Remove volume mount on Bazel runner | @pelumi1163 | merged | 2026-11-04 | 2026-11-05 |
| [#42328](https://github.com/jax-ml/jax/pull/42328) | Use C++20 for hermetic ROCm builds | @psanal35 | draft | 2026-11-05 | 2026-11-05 |
| [#42311](https://github.com/jax-ml/jax/pull/42311) | [ROCm] Temporarily skip failing buffer callback tests | @psanal35 | draft | 2026-11-04 | 2026-11-04 |
| [#41703](https://github.com/jax-ml/jax/pull/41703) | [ROCm] Build and test the ROCm wheels in the rocmless contai... | @gulsumgudukbay | merged | 2026-10-16 | 2026-11-02 |
| [#42141](https://github.com/jax-ml/jax/pull/42141) | [ROCm] Run wheel packaging locally with remote compilation | @psanal35 | merged | 2026-10-30 | 2026-11-02 |
| [#42127](https://github.com/jax-ml/jax/pull/42127) | [jax-buildcop] Fix ROCm/oneAPI `static_libcxx` and CUDA 13 `... | @copybara-service[bot] | merged | 2026-10-29 | 2026-10-30 |
| [#42067](https://github.com/jax-ml/jax/pull/42067) | [ROCm] Enable remote compilation for jax | @alekstheod | merged | 2026-10-28 | 2026-10-29 |
| [#41986](https://github.com/jax-ml/jax/pull/41986) | [ROCm] Exclude lax_scipy_special_functions_test_gpu from ROC... | @psanal35 | merged | 2026-10-26 | 2026-10-27 |
| [#41881](https://github.com/jax-ml/jax/pull/41881) | [ROCm] Enable remote compilation for jax in rocm rbe | @alekstheod | open | 2026-10-22 | 2026-10-22 |
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
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-11-11T15:40:45Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#63861](https://github.com/vllm-project/vllm/pull/63861) | [Model][Hardware][AMD] Fuse MLA Attention + Per-token FP8 Qu... | @farlukas | open | 2026-10-26 | 2026-11-11 |
| [#67051](https://github.com/vllm-project/vllm/pull/67051) | [MoE] Add Mooncake EP backend | @zxue2 | draft | 2026-11-11 | 2026-11-11 |
| [#54268](https://github.com/vllm-project/vllm/pull/54268) | [MoE] enable all2all fi_one_sided by default only for Blackw... | @arpera | open | 2026-08-28 | 2026-11-11 |
| [#63590](https://github.com/vllm-project/vllm/pull/63590) | [Perf][Kernel] AWQ: vectorize the output store in dequantize... | @thickett | open | 2026-10-25 | 2026-11-11 |
| [#61962](https://github.com/vllm-project/vllm/pull/61962) | [AMD][DSV4.1Flash] Quantize MoE activations to MXFP8 before ... | @heachary | open | 2026-10-16 | 2026-11-11 |
| [#62916](https://github.com/vllm-project/vllm/pull/62916) | [Bugfix][KV Connector] Synchronize engine IDs across PCP ran... | @nwpu-zxr | draft | 2026-10-21 | 2026-11-11 |
| [#63580](https://github.com/vllm-project/vllm/pull/63580) | [Bugfix][Rust Frontend] Return 400 instead of 500 when tool ... | @vito-lin-dev | open | 2026-10-25 | 2026-11-11 |
| [#66910](https://github.com/vllm-project/vllm/pull/66910) | [CI] Run the NIXL PD tests as pytest and enroll every Disagg... | @Thangnguyenvn98 | draft | 2026-11-10 | 2026-11-11 |
| [#65248](https://github.com/vllm-project/vllm/pull/65248) | [ROCm][Perf][Attention] AITER gluon attention backend for Qw... | @eky-amd | open | 2026-11-02 | 2026-11-11 |
| [#67050](https://github.com/vllm-project/vllm/pull/67050) | [Recipe][ROCm] MiMo-V2.6: use ROCM_AITER_UNIFIED_ATTN and ad... | @vllmellm | open | 2026-11-11 | 2026-11-11 |
| [#62746](https://github.com/vllm-project/vllm/pull/62746) | [Model][Hardware][AMD] Fuse DSR1 Input Projection with Dual ... | @farlukas | open | 2026-10-20 | 2026-11-11 |
| [#56326](https://github.com/vllm-project/vllm/pull/56326) | [Model][Hardware][AMD] Fuse AR + RMSNorm + Per-token Quant f... | @farlukas | open | 2026-09-10 | 2026-11-11 |
| [#64087](https://github.com/vllm-project/vllm/pull/64087) | [Bugfix][Kernel] Fix reshape & cache dropping KV heads past ... | @giuseppegrossi | open | 2026-10-27 | 2026-11-11 |
| [#65435](https://github.com/vllm-project/vllm/pull/65435) | [Perf][MiniMax-M3] Quantize the routed MoE input while the r... | @MrGeva | open | 2026-11-03 | 2026-11-11 |
| [#66054](https://github.com/vllm-project/vllm/pull/66054) | [Perf][MiniMax-M3] Shard large batches by token and fuse the... | @MrGeva | open | 2026-11-06 | 2026-11-11 |
| [#61119](https://github.com/vllm-project/vllm/pull/61119) | [ROCm][Perf][MiniMax-M3] Defer the FFN all-reduce into the n... | @akii96 | open | 2026-10-11 | 2026-11-11 |
| [#66514](https://github.com/vllm-project/vllm/pull/66514) | [ROCm][Disagg][CI] Fix the NIXL TP8 and EP8 cells | @avininjamay8 | open | 2026-11-09 | 2026-11-11 |
| [#66396](https://github.com/vllm-project/vllm/pull/66396) | [Bugfix] Fingerprint skipped multimodal components in the we... | @tryryry | open | 2026-11-08 | 2026-11-11 |
| [#50449](https://github.com/vllm-project/vllm/pull/50449) | [ROCm] Unify ViT FlashAttention backend selection | @hyoon1 | open | 2026-07-30 | 2026-11-11 |
| [#66488](https://github.com/vllm-project/vllm/pull/66488) | [Bugfix][Quantization] Accept AWQ key names in MoeWNA16Confi... | @Yunt1 | open | 2026-11-09 | 2026-11-11 |
| [#53108](https://github.com/vllm-project/vllm/pull/53108) | [ROCm][BugFix] Trim MoE GEMM input to valid token prefix  | @amd-weisun | open | 2026-08-20 | 2026-11-11 |
| [#56451](https://github.com/vllm-project/vllm/pull/56451) | [ROCm][Spec Decode] Enable adaptive DSpark verification for ... | @olka-amd | open | 2026-09-11 | 2026-11-11 |
| [#65259](https://github.com/vllm-project/vllm/pull/65259) | [RL][Model Loader] Make expert scale, Inkling and Mamba v2 s... | @zzhisyyds2 | open | 2026-11-03 | 2026-11-11 |
| [#66465](https://github.com/vllm-project/vllm/pull/66465) | [MRV2][PP] Support different CUDA graph padding across pipel... | @xsxszab | open | 2026-11-09 | 2026-11-11 |
| [#65890](https://github.com/vllm-project/vllm/pull/65890) | [Model Loader] Read checkpoint shards into a pinned buffer a... | @bistack | draft | 2026-11-05 | 2026-11-11 |
| [#64534](https://github.com/vllm-project/vllm/pull/64534) | [Model] Add Mistral Large 4 | @NickLucche | open | 2026-10-29 | 2026-11-11 |
| [#55229](https://github.com/vllm-project/vllm/pull/55229) | [Bugfix][DP] Prevent mismatched collectives on duplicate res... | @bvolpato | merged | 2026-09-03 | 2026-11-11 |
| [#66707](https://github.com/vllm-project/vllm/pull/66707) | [Bugfix][Benchmark] Keep vllm-bench warmups and ready check ... | @devanshi-code18 | open | 2026-11-10 | 2026-11-11 |
| [#66784](https://github.com/vllm-project/vllm/pull/66784) | [Bugfix][Model Loader] Handle merged-linear padding for Qwen... | @Ronald1995 | open | 2026-11-10 | 2026-11-11 |
| [#66572](https://github.com/vllm-project/vllm/pull/66572) | [ROCm][DSv4.1] Fuse the q RMSNorm and MXFP8 quant into one l... | @akash-amd | open | 2026-11-09 | 2026-11-11 |
| [#65499](https://github.com/vllm-project/vllm/pull/65499) | [Benchmark] Add synthetic audio support to random-mm | @sahirema | open | 2026-11-03 | 2026-11-11 |
| [#61395](https://github.com/vllm-project/vllm/pull/61395) | [EPLB] Support heterogeneous DeepSeek V4/V4.1 DSpark draft e... | @ilmarkov | open | 2026-10-13 | 2026-11-11 |
| [#66056](https://github.com/vllm-project/vllm/pull/66056) | [Bugfix][Reasoning] Don't count a start marker quoted in an ... | @Arsh624 | open | 2026-11-06 | 2026-11-11 |
| [#58650](https://github.com/vllm-project/vllm/pull/58650) | [ROCm][Attention] Shape-aware split-KV and launch config for... | @akii96 | open | 2026-09-25 | 2026-11-11 |
| [#65512](https://github.com/vllm-project/vllm/pull/65512) | [WIP][ROCm][Perf][DeepSeek-V4.1] Mega-attention prefill kern... | @frida-andersson | draft | 2026-11-03 | 2026-11-11 |
| [#66870](https://github.com/vllm-project/vllm/pull/66870) | [Qwen4Exp] Experimental: replicate GDN and QSA mixers across... | @aijanai | draft | 2026-11-10 | 2026-11-11 |
| [#65597](https://github.com/vllm-project/vllm/pull/65597) | [ROCm][UMBP] Add waiting-request prefetch to UMBPStoreConnec... | @BadrBasowid | draft | 2026-11-04 | 2026-11-11 |
| [#65493](https://github.com/vllm-project/vllm/pull/65493) | [Benchmark] Add --random-mm-video-encode-fps to random-mm | @sahirema | open | 2026-11-03 | 2026-11-11 |
| [#66646](https://github.com/vllm-project/vllm/pull/66646) | [ROCm][Disagg][CI] Set token budgets for the MiniMax-M3 wide... | @avininjamay8 | open | 2026-11-09 | 2026-11-11 |
| [#67039](https://github.com/vllm-project/vllm/pull/67039) | [ROCm][MiniMax-M3.1] SP prefill MoE half with a fused combin... | @vgokhale | draft | 2026-11-11 | 2026-11-11 |
| [#67038](https://github.com/vllm-project/vllm/pull/67038) | [CI][ROCm] Pin the AMD monokernel steps to explicit test fil... | @divakar-amd | draft | 2026-11-11 | 2026-11-11 |
| [#62480](https://github.com/vllm-project/vllm/pull/62480) | [ROCm][Kernel] Add W4A8 MoE decode kernel for RDNA3/RDNA3.5 ... | @xiao-llm | open | 2026-10-19 | 2026-11-11 |
| [#65146](https://github.com/vllm-project/vllm/pull/65146) | [ROCm][Perf][DeepSeek-V4.1] Fused mega-attention prefill ker... | @yhx-12243 | open | 2026-11-02 | 2026-11-11 |
| [#56869](https://github.com/vllm-project/vllm/pull/56869) | [ROCm][Bugfix][Spec Decode][DCP] Align ranks before DFlash s... | @xiaohuguo2023 | open | 2026-09-14 | 2026-11-11 |
| [#65188](https://github.com/vllm-project/vllm/pull/65188) | [ROCm][Perf] Qwen3.8-Flash-Next specialized decode at 1-192 ... | @samremes | open | 2026-11-02 | 2026-11-11 |
| [#65658](https://github.com/vllm-project/vllm/pull/65658) | [ROCm][PP] Stage hand-off on SDMA copy engines (--pp-sdma-ha... | @benenzhu | open | 2026-11-04 | 2026-11-11 |
| [#58986](https://github.com/vllm-project/vllm/pull/58986) | [Perf] Tune GLM-5.3-Flash block-FP8 MoE for H20 | @mengziheng | merged | 2026-09-28 | 2026-11-11 |
| [#66792](https://github.com/vllm-project/vllm/pull/66792) | [Perf][Sampler] Exact Triton top-k/top-p kernel, ~3x faster | @tomasruizt | draft | 2026-11-10 | 2026-11-11 |
| [#63383](https://github.com/vllm-project/vllm/pull/63383) | [ROCm][gfx1151] ROCM_RDNA_ATTN: attention backend for RDNA | @roberteg16 | merged | 2026-10-23 | 2026-11-11 |
| [#65848](https://github.com/vllm-project/vllm/pull/65848) | [Model] Add Ling VL video, YaRN, and vision DP support | @zexplorerhj | merged | 2026-11-05 | 2026-11-11 |
| [#65832](https://github.com/vllm-project/vllm/pull/65832) | [ROCm][DSV4.1] Honor the multi-stream GEMM token threshold i... | @xudonlyu | open | 2026-11-05 | 2026-11-11 |
| [#64560](https://github.com/vllm-project/vllm/pull/64560) | [ROCm][Perf][MLA] Fuse the decode W_UK absorb, q concat + fp... | @lucas-santos-amd | open | 2026-10-29 | 2026-11-11 |
| [#60001](https://github.com/vllm-project/vllm/pull/60001) | [Metrics] Export scheduler-state gauges before the first req... | @roy6n23 | merged | 2026-10-05 | 2026-11-11 |
| [#65904](https://github.com/vllm-project/vllm/pull/65904) | [Model] Move MiniMax-M3 to `AutoWeightsLoader` | @hmellor | merged | 2026-11-05 | 2026-11-11 |
| [#61662](https://github.com/vllm-project/vllm/pull/61662) | [ROCm][Perf][GLM-5.3-Flash] Mono decode layer for GLM-5.3-Fl... | @amd-sriram | open | 2026-10-14 | 2026-11-11 |
| [#64280](https://github.com/vllm-project/vllm/pull/64280) | [Bugfix][MRV2] Release the allocator cache between adaptive ... | @tuukkjs | open | 2026-10-28 | 2026-11-11 |
| [#66994](https://github.com/vllm-project/vllm/pull/66994) | [CI][Multimodal] Run the Unlimited-OCR-2 preemption test bat... | @subhashpolisetti | merged | 2026-11-11 | 2026-11-11 |
| [#61797](https://github.com/vllm-project/vllm/pull/61797) | [UMBP][9/10] Add lazy GPU cache offloading | @charxwu | merged | 2026-10-15 | 2026-11-11 |
| [#66196](https://github.com/vllm-project/vllm/pull/66196) | [CI] Run the NIXL PD accuracy core sweep as pytest and shard... | @Thangnguyenvn98 | merged | 2026-11-07 | 2026-11-11 |
| [#57900](https://github.com/vllm-project/vllm/pull/57900) | [ROCm][Bugfix] Make the RoPE + KV-cache fusion reachable by ... | @ZhengGong-amd | draft | 2026-09-21 | 2026-11-11 |
| [#66489](https://github.com/vllm-project/vllm/pull/66489) | [Bugfix][Frontend] Reject empty messages in ChatCompletionRe... | @Yunt1 | merged | 2026-11-09 | 2026-11-11 |
| [#64722](https://github.com/vllm-project/vllm/pull/64722) | [ROCm][MoRIIO] Support DCP for decode instance in PD disaggr... | @kliuae | open | 2026-10-30 | 2026-11-11 |
| [#65202](https://github.com/vllm-project/vllm/pull/65202) | [ROCm][RDNA] Add gfx1170 and gfx1171 support | @umarkovi-amd | open | 2026-11-02 | 2026-11-11 |
| [#65767](https://github.com/vllm-project/vllm/pull/65767) | [ROCm][Perf] Add Gluon MXFP8 prefill kernels on gfx950 | @iraj465 | open | 2026-11-05 | 2026-11-11 |
| [#65128](https://github.com/vllm-project/vllm/pull/65128) | [MORI][DBO] Dual batch overlap with MoRI EPv2 (native and As... | @ChengYM5685 | open | 2026-11-02 | 2026-11-11 |
| [#66219](https://github.com/vllm-project/vllm/pull/66219) | [ROCm][Perf][GLM-5.3-Flash] Keep the fused gated RMSNorm for... | @ZhengGong-amd | open | 2026-11-07 | 2026-11-11 |
| [#66598](https://github.com/vllm-project/vllm/pull/66598) | [ROCm][Perf] MXFP8 native linear: 256x256x128 tile for large... | @ZhengGong-amd | open | 2026-11-09 | 2026-11-11 |
| [#66577](https://github.com/vllm-project/vllm/pull/66577) | [ROCm][Perf][Kimi-Linear] Enable AITER fused shared experts ... | @ZhengGong-amd | draft | 2026-11-09 | 2026-11-11 |
| [#66007](https://github.com/vllm-project/vllm/pull/66007) | [Bugfix][Model] Fix GraniteMoeHybrid pipeline-parallel start... | @xsxszab | merged | 2026-11-05 | 2026-11-11 |
| [#65992](https://github.com/vllm-project/vllm/pull/65992) | [ROCm][DSv4.1][Perf] Run the fused mHC seams as AITER's sing... | @davzhuAMD | open | 2026-11-05 | 2026-11-11 |
| [#65749](https://github.com/vllm-project/vllm/pull/65749) | [ROCm][Perf][DSv4.1] Split-K BF16 router GEMM for gfx950 dec... | @davzhuAMD | open | 2026-11-04 | 2026-11-11 |
| [#66809](https://github.com/vllm-project/vllm/pull/66809) | [Transformers backend] Fuse the GLU activation with the down... | @hmellor | merged | 2026-11-10 | 2026-11-11 |
| [#66735](https://github.com/vllm-project/vllm/pull/66735) | [MORI] Run MORI EPv2 across hosts (opt-in) | @ChengYM5685 | open | 2026-11-10 | 2026-11-11 |
| [#63078](https://github.com/vllm-project/vllm/pull/63078) | [Bugfix][Muse Spark] Keep the FP32 RoPE tables in FP32 | @fanxingran | open | 2026-10-22 | 2026-11-11 |
| [#63272](https://github.com/vllm-project/vllm/pull/63272) | [ROCm][Quantization][Perf] Fuse the block Hadamard input rot... | @mjkvaak-amd | open | 2026-10-23 | 2026-11-11 |
| [#65936](https://github.com/vllm-project/vllm/pull/65936) | [Bugfix][Tool Parser] Olmo3: stream plain text that starts w... | @cipheraxat | merged | 2026-11-05 | 2026-11-11 |
| [#66992](https://github.com/vllm-project/vllm/pull/66992) | [Bugfix][MoE] Reject topk exceeding selected-group capacity ... | @IsNot-10 | open | 2026-11-11 | 2026-11-11 |
| [#52684](https://github.com/vllm-project/vllm/pull/52684) | [ROCm] Tune gfx1151 unified attention for long prefill | @liminfei-amd | open | 2026-08-18 | 2026-11-11 |
| [#66853](https://github.com/vllm-project/vllm/pull/66853) | [Frontend] Log outputs for batched chat completions | @Chr0mium24 | merged | 2026-11-10 | 2026-11-11 |
| [#66605](https://github.com/vllm-project/vllm/pull/66605) | [KVConnector] Let external connectors declare KV cache memor... | @ketor | merged | 2026-11-09 | 2026-11-11 |
| [#66803](https://github.com/vllm-project/vllm/pull/66803) | [Quantization] Skip kernel dispatch for online requantizatio... | @fxmarty-amd | open | 2026-11-10 | 2026-11-11 |
| [#66068](https://github.com/vllm-project/vllm/pull/66068) | [ROCm][Quantization] Add tuned W8A8 block-FP8 Triton GEMM co... | @ZhengGong-amd | open | 2026-11-06 | 2026-11-11 |
| [#65755](https://github.com/vllm-project/vllm/pull/65755) | [Bugfix][Step5] Fix FP32 residual truncation at pipeline bou... | @xsxszab | merged | 2026-11-04 | 2026-11-11 |
| [#61530](https://github.com/vllm-project/vllm/pull/61530) | [Model][DSV4.1] Support MXFP4-packed Engram embedding tables | @Zhehao-Hu | merged | 2026-10-14 | 2026-11-11 |
| [#66848](https://github.com/vllm-project/vllm/pull/66848) | [Bugfix][Tokenizers] Raise ValueError on unknown message rol... | @rudy-07 | merged | 2026-11-10 | 2026-11-11 |
| [#65029](https://github.com/vllm-project/vllm/pull/65029) | [Bugfix][Frontend] Report the line of a run-batch request re... | @Arsh624 | merged | 2026-11-01 | 2026-11-11 |
| [#62566](https://github.com/vllm-project/vllm/pull/62566) | [KV Offload] Warn when secondary-tier KV is tied to the para... | @cipheraxat | merged | 2026-10-19 | 2026-11-11 |
| [#66876](https://github.com/vllm-project/vllm/pull/66876) | [ROCm][Bugfix] Allow lut_b_moe online quantization on ROCm | @AndreasKaratzas | merged | 2026-11-10 | 2026-11-11 |
| [#66764](https://github.com/vllm-project/vllm/pull/66764) | [Perf][Muse Spark] Fuse DSpark draft norms and Markov sampli... | @jeejeelee | merged | 2026-11-10 | 2026-11-11 |
| [#61501](https://github.com/vllm-project/vllm/pull/61501) | [Perf][Mamba] Opt-in FlashInfer SSD prefill scan; per-step R... | @jhaotingc | merged | 2026-10-13 | 2026-11-11 |
| [#66073](https://github.com/vllm-project/vllm/pull/66073) | [Multimodal] Add keyframe-aware sampling to PyNvVideoCodec b... | @justincdavis | merged | 2026-11-06 | 2026-11-11 |
| [#64152](https://github.com/vllm-project/vllm/pull/64152) | [ROCm][Perf][DSv4.1] Mono: tuned K1 at TP8 | @okorzh-amd | merged | 2026-10-27 | 2026-11-11 |
| [#62769](https://github.com/vllm-project/vllm/pull/62769) | [Bugfix][Spec Decode] Synchronize adaptive DSpark decisions ... | @okorzh-amd | merged | 2026-10-20 | 2026-11-11 |
| [#65939](https://github.com/vllm-project/vllm/pull/65939) | [Bugfix][Mooncake] Bound store prefix lookups with a circuit... | @hj-mistral | merged | 2026-11-05 | 2026-11-11 |
| [#63838](https://github.com/vllm-project/vllm/pull/63838) | [ROCm][Kimi-K3] Keep the AttnRes block bank in a persistent ... | @josh-schell-amd | merged | 2026-10-26 | 2026-11-11 |
| [#66203](https://github.com/vllm-project/vllm/pull/66203) | [Doc][Recipe] Muse Spark Open: DSpark + specialized decode m... | @esmeetu | merged | 2026-11-07 | 2026-11-11 |
| [#64070](https://github.com/vllm-project/vllm/pull/64070) | [Recipe] Qwen3.5: keep configuration-specific content out of... | @esmeetu | merged | 2026-10-27 | 2026-11-11 |
| [#65400](https://github.com/vllm-project/vllm/pull/65400) | [Recipe] Kimi-K3, MiniMax-M3.1-Flash: add Rubin VR200 suppor... | @esmeetu | merged | 2026-11-03 | 2026-11-11 |
| [#66645](https://github.com/vllm-project/vllm/pull/66645) | [CI] Split the platform and stat logger plugin tests out of ... | @Thangnguyenvn98 | merged | 2026-11-09 | 2026-11-11 |
| [#66892](https://github.com/vllm-project/vllm/pull/66892) | [Attention][MiniMax-M3] Allow the BLHNC KV cache layout with... | @ivanium | merged | 2026-11-10 | 2026-11-10 |
| [#61498](https://github.com/vllm-project/vllm/pull/61498) | [ROCm][Perf][Kimi-K3] Mono decode layer for Kimi-K3 on MI355... | @jamesETsmith | merged | 2026-10-13 | 2026-11-10 |
| [#66875](https://github.com/vllm-project/vllm/pull/66875) | [ROCm][Bugfix] Key the FSE MXFP8 scale-layout test check on ... | @AndreasKaratzas | merged | 2026-11-10 | 2026-11-10 |
| [#62345](https://github.com/vllm-project/vllm/pull/62345) | [Bugfix][Security] muse: fix quadratic attribute scans in to... | @LeizhenZhang | merged | 2026-10-18 | 2026-11-10 |
| [#59300](https://github.com/vllm-project/vllm/pull/59300) | [Attention][MiniMax-M3] NVFP4 KV cache on the MSA sparse att... | @zyongye | merged | 2026-09-29 | 2026-11-10 |
| [#66854](https://github.com/vllm-project/vllm/pull/66854) | [ROCm][CI] Add  `vllm/v1/attention/backend.py` to the :`amd:... | @rasmith | merged | 2026-11-10 | 2026-11-10 |
| [#66798](https://github.com/vllm-project/vllm/pull/66798) | [ROCm][CI] Stub owns_indexer and index_epoch in the merged-c... | @stefankoncarevic | merged | 2026-11-10 | 2026-11-10 |
| [#66370](https://github.com/vllm-project/vllm/pull/66370) | [Bugfix][Core] Re-prepare model state after extensible KV ca... | @AndreasKaratzas | merged | 2026-11-08 | 2026-11-10 |
| [#66824](https://github.com/vllm-project/vllm/pull/66824) | [ROCm][CI] Re-enable ROCM_AITER_UNIFIED_ATTN in Whisper tran... | @djramic | merged | 2026-11-10 | 2026-11-10 |
| [#65177](https://github.com/vllm-project/vllm/pull/65177) | [Bugfix][Quantization] Index INT8 MoE per-channel weight sca... | @fxmarty-amd | merged | 2026-11-02 | 2026-11-10 |
| [#61076](https://github.com/vllm-project/vllm/pull/61076) | [RL] Add configurable staging and parallel stage pulls to sh... | @GalMeiromN | merged | 2026-10-11 | 2026-11-10 |
| [#61942](https://github.com/vllm-project/vllm/pull/61942) | [ROCm][Perf] Skip DSA indexer scoring for short dense-MHA pr... | @whx-sjtu | merged | 2026-10-16 | 2026-11-10 |
| [#55387](https://github.com/vllm-project/vllm/pull/55387) | [CI/Build] Move the default CUDA build from 13.0 to 13.2 | @atalman | merged | 2026-09-04 | 2026-11-10 |
| [#64187](https://github.com/vllm-project/vllm/pull/64187) | [Perf][Model Loader] Make the EP weight filter EPLB-aware | @mrn3088 | merged | 2026-10-28 | 2026-11-10 |
| [#66380](https://github.com/vllm-project/vllm/pull/66380) | [Bugfix][Rust Frontend] Don't reopen reasoning after the pro... | @2arian3 | merged | 2026-11-08 | 2026-11-10 |
| [#58795](https://github.com/vllm-project/vllm/pull/58795) | [CI] Prebuild mamba-ssm and causal-conv1d from pinned commit... | @Thangnguyenvn98 | merged | 2026-09-25 | 2026-11-10 |
| [#66660](https://github.com/vllm-project/vllm/pull/66660) | [Perf][EPLB] Copy rebalanced experts back from the buffer in... | @Juntian777 | merged | 2026-11-09 | 2026-11-10 |
| [#66596](https://github.com/vllm-project/vllm/pull/66596) | [ROCm] AITER bump to v0.1.29 | @josh-schell-amd | merged | 2026-11-09 | 2026-11-10 |
| [#66309](https://github.com/vllm-project/vllm/pull/66309) | [ROCm][CI] Run XPress on MI355 with a GEMM latent MLP and mi... | @AndreasKaratzas | merged | 2026-11-07 | 2026-11-10 |
| [#64715](https://github.com/vllm-project/vllm/pull/64715) | [ROCm][UMBP] Support UMBP standalone mode for DeepSeek-V4.1-... | @shen-shanshan | merged | 2026-10-30 | 2026-11-10 |
| [#61630](https://github.com/vllm-project/vllm/pull/61630) | [XPU][Attention] Enable tuned large-head prefill config on X... | @mganczarenko | merged | 2026-10-14 | 2026-11-09 |
| [#66321](https://github.com/vllm-project/vllm/pull/66321) | [ROCm][CI] Support prefill context parallel for GLM-5.2 spar... | @AndreasKaratzas | merged | 2026-11-07 | 2026-11-09 |
| [#66400](https://github.com/vllm-project/vllm/pull/66400) | [ROCm][Bugfix] Drop sparse MLA metadata host sync; use persi... | @AndreasKaratzas | merged | 2026-11-08 | 2026-11-09 |
| [#59981](https://github.com/vllm-project/vllm/pull/59981) | [Perf] V2 runner decode optimizations for NVIDIA Confidentia... | @ybgao-nvidia | merged | 2026-10-04 | 2026-11-09 |
| [#66397](https://github.com/vllm-project/vllm/pull/66397) | [ROCm][Bugfix] Build DSv4.1 replay builders at warmup and th... | @AndreasKaratzas | merged | 2026-11-08 | 2026-11-09 |
| [#63847](https://github.com/vllm-project/vllm/pull/63847) | [ROCm][Kernel] Support persistent_topk on ROCm | @AndreasKaratzas | merged | 2026-10-26 | 2026-11-09 |
| [#64693](https://github.com/vllm-project/vllm/pull/64693) | [ROCm][MoRIIO] Support PP for prefill instance in PD disaggr... | @kliuae | merged | 2026-10-30 | 2026-11-09 |
| [#65559](https://github.com/vllm-project/vllm/pull/65559) | [ROCm][KV Offload] SimpleCPUOffload: batch copies on SDMA wi... | @benenzhu | merged | 2026-11-04 | 2026-11-09 |
| [#65995](https://github.com/vllm-project/vllm/pull/65995) | [Bugfix][ROCm] Support AITER's preload() in FlyDSL INT4 Quic... | @amd-sriram | merged | 2026-11-05 | 2026-11-09 |
| [#63096](https://github.com/vllm-project/vllm/pull/63096) | [ROCm][Spec Decode] Enable fused multi-step draft decode for... | @fengshaoyi-amd | merged | 2026-10-22 | 2026-11-09 |
| [#66434](https://github.com/vllm-project/vllm/pull/66434) | [CI][ROCm] Keep FLA's shared memory probe from initializing ... | @AndreasKaratzas | merged | 2026-11-09 | 2026-11-09 |
| [#63401](https://github.com/vllm-project/vllm/pull/63401) | [Bugfix][ROCm] Size the extensible KV cache from exact VRAM ... | @GodRishUniverse | merged | 2026-10-23 | 2026-11-08 |
| [#65227](https://github.com/vllm-project/vllm/pull/65227) | [Perf][Multimodal] Encoder CUDA graphs: one replay per batch... | @Pb314314 | merged | 2026-11-02 | 2026-11-08 |
| [#65084](https://github.com/vllm-project/vllm/pull/65084) | [Multimodal] Refactor encoder cuda graph to support share gr... | @Isotr0py | merged | 2026-11-02 | 2026-11-08 |
| [#65092](https://github.com/vllm-project/vllm/pull/65092) | [Bugfix][ROCm] Reserve kpool decode indexer logits in worksp... | @vllmellm | merged | 2026-11-02 | 2026-11-08 |
| [#63166](https://github.com/vllm-project/vllm/pull/63166) | [ROCm][CI] Fix the test_qwen.py failure when AITER is on | @qli88 | merged | 2026-10-22 | 2026-11-07 |
| [#60130](https://github.com/vllm-project/vllm/pull/60130) | [KV Offload] SimpleCPUOffload: one host buffer per rank, opt... | @GirasoleY | merged | 2026-10-05 | 2026-11-07 |
| [#62298](https://github.com/vllm-project/vllm/pull/62298) | [CI][ROCm] Run ROCm-capable tests that are currently skipped... | @AndreasKaratzas | merged | 2026-10-18 | 2026-11-07 |
| [#64131](https://github.com/vllm-project/vllm/pull/64131) | [ROCm][CI] Keep nightlies off PR-writable images and trim th... | @AndreasKaratzas | merged | 2026-10-27 | 2026-11-06 |
| [#63890](https://github.com/vllm-project/vllm/pull/63890) | [ROCm][Perf] Use AITER's all-gather for small TP all-gathers | @okorzh-amd | merged | 2026-10-27 | 2026-11-06 |
| [#62718](https://github.com/vllm-project/vllm/pull/62718) | [ROCm][Build][3/5] Speed up ROCm build: split the skinny GEM... | @fxmarty-amd | merged | 2026-10-20 | 2026-11-06 |
| [#65478](https://github.com/vllm-project/vllm/pull/65478) | [ROCm][Perf][MiniMax-M3.1] Fuse the FFN-side MXFP8 activatio... | @Fangzhou-Ai | merged | 2026-11-03 | 2026-11-06 |
| [#65530](https://github.com/vllm-project/vllm/pull/65530) | [ROCm][Perf][MiniMax-M3.1] Retune the MXFP8 dot_scaled GEMM ... | @Fangzhou-Ai | merged | 2026-11-04 | 2026-11-06 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-11-11T15:40:58Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#44736](https://github.com/sgl-project/sglang/pull/44736) | [Fix] [NPU] CI: Update NPU failure analyzer coverage | @OrangeRedeng | open | 2026-10-16 | 2026-11-11 |
| [#42388](https://github.com/sgl-project/sglang/pull/42388) | [Feat] gdn: Bit-exact tuple replay for linear-chain spec ver... | @hsthe29 | open | 2026-10-03 | 2026-11-11 |
| [#49877](https://github.com/sgl-project/sglang/pull/49877) | [Feat] diffusion: [sglang-miles] Put a training rollout's ge... | @Rockdu | merged | 2026-11-11 | 2026-11-11 |
| [#44329](https://github.com/sgl-project/sglang/pull/44329) | [Fix] [NPU] diffusion: Clean up warnings | @OrangeRedeng | open | 2026-10-14 | 2026-11-11 |
| [#49701](https://github.com/sgl-project/sglang/pull/49701) | [Fix] [NPU] eplb: preserve expert storage and reuse TP commu... | @AkiYangDev | draft | 2026-11-11 | 2026-11-11 |
| [#49876](https://github.com/sgl-project/sglang/pull/49876) | [Fix] mimo: Preserve ModelOpt policies for packed projection... | @avifenesh | open | 2026-11-11 | 2026-11-11 |
| [#49875](https://github.com/sgl-project/sglang/pull/49875) | [Fix] qwen3-coder: Recover unescaped inner quotes in JSON pa... | @avifenesh | open | 2026-11-11 | 2026-11-11 |
| [#48412](https://github.com/sgl-project/sglang/pull/48412) | [Feat] pp: Relay routed experts through pipeline-parallel st... | @Josephasafg | open | 2026-11-04 | 2026-11-11 |
| [#49382](https://github.com/sgl-project/sglang/pull/49382) | [Refactor] custom-ar-v2: Share one symmetric workspace per g... | @DarkSharpness | open | 2026-11-09 | 2026-11-11 |
| [#49872](https://github.com/sgl-project/sglang/pull/49872) | [Feat] runway praxis 1 support | @ArturKasymov | draft | 2026-11-11 | 2026-11-11 |
| [#49686](https://github.com/sgl-project/sglang/pull/49686) | [Feat] disaggregation: Make the PD top-logprobs metadata wid... | @aurickq | open | 2026-11-11 | 2026-11-11 |
| [#49873](https://github.com/sgl-project/sglang/pull/49873) | [Fix] humming: correct local work estimates for EP tuning | @guzekai01 | draft | 2026-11-11 | 2026-11-11 |
| [#39316](https://github.com/sgl-project/sglang/pull/39316) | [Spec] Enable split-KV EAGLE verify on CUDA for the Triton b... | @rluisr | open | 2026-09-13 | 2026-11-11 |
| [#48899](https://github.com/sgl-project/sglang/pull/48899) | [Feat] hisparse: support DFLASH speculative decoding | @mlleo | open | 2026-11-06 | 2026-11-11 |
| [#47921](https://github.com/sgl-project/sglang/pull/47921) | [Feat] [Apple] mps: Serve Unlimited-OCR v2 BF16 on the Torch... | @DonggeYang | open | 2026-11-02 | 2026-11-11 |
| [#49879](https://github.com/sgl-project/sglang/pull/49879) | [Fix] Z-Image: Correct and optimize Ulysses sequence layout | @avjves | draft | 2026-11-11 | 2026-11-11 |
| [#44497](https://github.com/sgl-project/sglang/pull/44497) | [Perf] [AMD] quantization: Run MiniMax-M3 dense MXFP8 on ait... | @amd-yashagar | draft | 2026-10-15 | 2026-11-11 |
| [#48902](https://github.com/sgl-project/sglang/pull/48902) | [Feat] [AMD] kimi-k3.1: PD over MoRI between same-size DCP r... | @AMD-yanfeiwang | open | 2026-11-06 | 2026-11-11 |
| [#49265](https://github.com/sgl-project/sglang/pull/49265) | [Feat] [NPU] attention: support FP8 KV with DSA context para... | @qybnb | draft | 2026-11-09 | 2026-11-11 |
| [#47631](https://github.com/sgl-project/sglang/pull/47631) | [Fix] profiler: keep trace files inside output_dir | @dundysm | open | 2026-10-31 | 2026-11-11 |
| [#49878](https://github.com/sgl-project/sglang/pull/49878) | [Fix] disaggregation: Attribute decode HiCache hits to host ... | @goldenfox2025 | open | 2026-11-11 | 2026-11-11 |
| [#39550](https://github.com/sgl-project/sglang/pull/39550) | [Fix] HiCache: NIXL Tier-3 Bug Fixes | @kpjeeja | open | 2026-09-15 | 2026-11-11 |
| [#48846](https://github.com/sgl-project/sglang/pull/48846) | [Feat] hisparse: reject unvalidated speculative algorithms b... | @mlleo | open | 2026-11-06 | 2026-11-11 |
| [#41893](https://github.com/sgl-project/sglang/pull/41893) | [Perf] dsv4: Verify-merged mixed step for DSPARK, determinis... | @adirajagopal | open | 2026-09-30 | 2026-11-11 |
| [#48648](https://github.com/sgl-project/sglang/pull/48648) | [Perf] [AMD] Qwen4-Exp/HC: Fuse decode-sized hyper-connectio... | @amd-cgilli | open | 2026-11-05 | 2026-11-11 |
| [#48600](https://github.com/sgl-project/sglang/pull/48600) | [Feat] [Intel] HiCache: Support unified-memory HiCache on XP... | @kpjeeja | open | 2026-11-05 | 2026-11-11 |
| [#49791](https://github.com/sgl-project/sglang/pull/49791) | [Feat] [NVIDIA] moe: opt-in FlashInfer cuTile NVFP4 W4A4 run... | @ElenaViewSynthesis | open | 2026-11-11 | 2026-11-11 |
| [#38806](https://github.com/sgl-project/sglang/pull/38806) | [Perf] [AMD] gdn: Optimize Qwen3.5 prefill preparation and T... | @chuyeh | open | 2026-09-10 | 2026-11-11 |
| [#41501](https://github.com/sgl-project/sglang/pull/41501) | [Feat] diffusion/sana-video2: Support breakable CUDA graphs | @cr-gao | open | 2026-09-28 | 2026-11-11 |
| [#47253](https://github.com/sgl-project/sglang/pull/47253) | [Perf] diffusion: Enable verified eager LN fusion for SANA-V... | @BBuf | open | 2026-10-29 | 2026-11-11 |
| [#43095](https://github.com/sgl-project/sglang/pull/43095) | [Test] scheduler: Test that the admission re-match records n... | @phphlio1 | open | 2026-10-08 | 2026-11-11 |
| [#45279](https://github.com/sgl-project/sglang/pull/45279) | [Fix] qwen3_coder: match <tool_call> as a token via xgrammar... | @dundysm | open | 2026-10-20 | 2026-11-11 |
| [#47271](https://github.com/sgl-project/sglang/pull/47271) | [Feat] Mistral-Large-4: add model support | @JustinTong0323 | open | 2026-10-29 | 2026-11-11 |
| [#47276](https://github.com/sgl-project/sglang/pull/47276) | [Perf] [AMD] dsa: Faster gfx950 fused indexer logits and top... | @dorado269 | open | 2026-10-29 | 2026-11-11 |
| [#49825](https://github.com/sgl-project/sglang/pull/49825) | [Fix] simulator: Keep the replaced HiCache storage workers a... | @Saigyouji-Yuyuko | merged | 2026-11-11 | 2026-11-11 |
| [#47588](https://github.com/sgl-project/sglang/pull/47588) | [Feat] sail: support DeepGEMM GEMM/MoE backends [4/N] | @Vinsmoke86 | open | 2026-10-31 | 2026-11-11 |
| [#49282](https://github.com/sgl-project/sglang/pull/49282) | [Perf] [AMD] dsa: Prefill rope-free bf16 KV pools with aiter... | @eppaneamd | draft | 2026-11-09 | 2026-11-11 |
| [#49800](https://github.com/sgl-project/sglang/pull/49800) | [Feat] [AMD] qwen4_exp: Use the packed PLE prefill short con... | @eppaneamd | draft | 2026-11-11 | 2026-11-11 |
| [#46578](https://github.com/sgl-project/sglang/pull/46578) | [Perf] [AMD] glm5_next: Allow Quark MXFP4 shared expert fusi... | @eppaneamd | draft | 2026-10-26 | 2026-11-11 |
| [#49387](https://github.com/sgl-project/sglang/pull/49387) | [CI] [AMD] spur: Schedule stage-c-test-large-8-gpu-amd-mi35x... | @michaelzhang-ai | merged | 2026-11-09 | 2026-11-11 |
| [#49389](https://github.com/sgl-project/sglang/pull/49389) | [CI] [AMD] spur: Run PR Test (AMD)'s scheduled stage-b MI35x... | @michaelzhang-ai | merged | 2026-11-09 | 2026-11-11 |
| [#48840](https://github.com/sgl-project/sglang/pull/48840) | [Fix] hisparse: disambiguate __ffsll for HIP's dual overload... | @mlleo | open | 2026-11-06 | 2026-11-11 |
| [#45314](https://github.com/sgl-project/sglang/pull/45314) | [Refactor] [AMD] kimi-k3: Rename two ROCm K3 env vars and re... | @yuychang | open | 2026-10-20 | 2026-11-11 |
| [#43127](https://github.com/sgl-project/sglang/pull/43127) | [Perf] [AMD] kimi-k3: Fuse the MLA decode query and latent K... | @yuychang | open | 2026-10-08 | 2026-11-11 |
| [#44362](https://github.com/sgl-project/sglang/pull/44362) | [Perf] [AMD] kimi-k3: Run the Quark FP8 KDA in-proj and MLA ... | @yuychang | open | 2026-10-15 | 2026-11-11 |
| [#44360](https://github.com/sgl-project/sglang/pull/44360) | [Perf] [AMD] kimi-k3: Run the merged MoE front through AITER... | @yuychang | open | 2026-10-15 | 2026-11-11 |
| [#48701](https://github.com/sgl-project/sglang/pull/48701) | [Perf] [AMD] kimi-k3: Run KDA target verify through AITER's ... | @yuychang | open | 2026-11-05 | 2026-11-11 |
| [#48878](https://github.com/sgl-project/sglang/pull/48878) | [Perf] [AMD] kimi-k3: Write the fp8-Q asm verify query in th... | @yuychang | open | 2026-11-06 | 2026-11-11 |
| [#45320](https://github.com/sgl-project/sglang/pull/45320) | [Perf] [AMD] aiter: Run 12-head MLA decode and 8-token verif... | @yuychang | open | 2026-10-20 | 2026-11-11 |
| [#49370](https://github.com/sgl-project/sglang/pull/49370) | [Refactor] custom-ar-v2: Move the DPX pair stages into their... | @DarkSharpness | merged | 2026-11-09 | 2026-11-11 |
| [#49219](https://github.com/sgl-project/sglang/pull/49219) | [Perf] diffusion: Run SANA-Video 2.0 anchor attention on BF1... | @cr-gao | merged | 2026-11-09 | 2026-11-11 |
| [#49531](https://github.com/sgl-project/sglang/pull/49531) | [Fix] GLM-4.7-Flash: Load compressed-tensors W4A16 checkpoin... | @koladefaj | merged | 2026-11-10 | 2026-11-11 |
| [#48891](https://github.com/sgl-project/sglang/pull/48891) | [Perf] [SM100] attention: optimize sparse MLA prefill for sm... | @yz-wqf | merged | 2026-11-06 | 2026-11-11 |
| [#47513](https://github.com/sgl-project/sglang/pull/47513) | [Perf] attention: Support attention sinks in the split-KV EA... | @misha-chertushkin | merged | 2026-10-30 | 2026-11-11 |
| [#44236](https://github.com/sgl-project/sglang/pull/44236) | [Fix] metrics: Populate pending_prealloc_token_usage | @SovietPower | merged | 2026-10-14 | 2026-11-11 |
| [#43126](https://github.com/sgl-project/sglang/pull/43126) | [Perf] [AMD] Kimi-K3: emit AITER's MoE sort from the radix-4... | @yuychang | open | 2026-10-08 | 2026-11-11 |
| [#47052](https://github.com/sgl-project/sglang/pull/47052) | [Perf] [AMD] qwen3: Fuse prefill QK-norm + RoPE on ROCm with... | @fengshaoyi-amd | open | 2026-10-28 | 2026-11-11 |
| [#49143](https://github.com/sgl-project/sglang/pull/49143) | [Feat] diffusion: [sglang-miles] Let a rollout request skip ... | @Rockdu | merged | 2026-11-08 | 2026-11-11 |
| [#49440](https://github.com/sgl-project/sglang/pull/49440) | [Feat] diffusion: [sglang-miles] Stop a rollout at a request... | @Rockdu | merged | 2026-11-10 | 2026-11-11 |
| [#46608](https://github.com/sgl-project/sglang/pull/46608) | [Perf] [AMD] moe: Add opt-in AITER MegaMoE-TP for eager TP M... | @eppaneamd | draft | 2026-10-26 | 2026-11-11 |
| [#49848](https://github.com/sgl-project/sglang/pull/49848) | [Fix] lora: [sglang-miles] Keep kv_b_proj adapters off the M... | @Rockdu | merged | 2026-11-11 | 2026-11-11 |
| [#30893](https://github.com/sgl-project/sglang/pull/30893) | [Refactor] hisparse: unify device-pool mapping and selection | @anencore94 | merged | 2026-07-11 | 2026-11-11 |
| [#49281](https://github.com/sgl-project/sglang/pull/49281) | [Perf] [AMD] dspark: Accept on target vocab shards in verify | @amd-pedghazi | draft | 2026-11-09 | 2026-11-11 |
| [#49563](https://github.com/sgl-project/sglang/pull/49563) | [Perf] [AMD] dsv4: Decoder tail graphs and any-context break... | @kkHuang-amd | open | 2026-11-10 | 2026-11-11 |
| [#49347](https://github.com/sgl-project/sglang/pull/49347) | [Perf] [AMD] mla: Read the fused_qkv_a slices in place in th... | @jiaryang | draft | 2026-11-09 | 2026-11-11 |
| [#45751](https://github.com/sgl-project/sglang/pull/45751) | [Feat] moe: Integrate EvenMoE and retire native Waterfill/LP... | @xutizhou | open | 2026-10-22 | 2026-11-11 |
| [#49763](https://github.com/sgl-project/sglang/pull/49763) | [CI] [AMD] nightly: Stop running DeepSeek-V3.2 | @michaelzhang-ai | merged | 2026-11-11 | 2026-11-11 |
| [#49621](https://github.com/sgl-project/sglang/pull/49621) | [Feat] dflash: Serve the Kimi-K3.1 DFlash2 sliding-window ML... | @yhyang201 | merged | 2026-11-10 | 2026-11-11 |
| [#49277](https://github.com/sgl-project/sglang/pull/49277) | [Fix] [NPU] MoE: Optimize Ascend MoE AllGather | @chenxu214 | merged | 2026-11-09 | 2026-11-11 |
| [#47413](https://github.com/sgl-project/sglang/pull/47413) | [Fix] deterministic: Batch-invariant Kimi Delta Attention | @aarnetalman | open | 2026-10-30 | 2026-11-11 |
| [#49821](https://github.com/sgl-project/sglang/pull/49821) | [Test] dsa: Stub _dcp_topk_length_buffer in the eager-metada... | @nvpohanh | merged | 2026-11-11 | 2026-11-11 |
| [#48641](https://github.com/sgl-project/sglang/pull/48641) | [Perf] [AMD] deepseek-v4.1: Keep the exact decoder SWA tail ... | @amd-pedghazi | draft | 2026-11-05 | 2026-11-11 |
| [#49812](https://github.com/sgl-project/sglang/pull/49812) | [Fix] [AMD] deterministic: Batch-invariant mHC pre for GLM-5... | @aarnetalman | draft | 2026-11-11 | 2026-11-11 |
| [#48146](https://github.com/sgl-project/sglang/pull/48146) | [Perf] [AMD] deepseek-v4.1: Run the HIP sparse prefill on th... | @amd-pedghazi | draft | 2026-11-03 | 2026-11-11 |
| [#49566](https://github.com/sgl-project/sglang/pull/49566) | [Perf] [AMD] rotary_embedding: tile fused RoPE and KV write ... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#46855](https://github.com/sgl-project/sglang/pull/46855) | [Fix] scheduler: Reserve member rows of beam leaders admitte... | @apex-mochen | merged | 2026-10-27 | 2026-11-11 |
| [#49806](https://github.com/sgl-project/sglang/pull/49806) | [Fix] [AMD] kv-cache: Reject unsupported FP8 E5M2 requests | @shub-garg | open | 2026-11-11 | 2026-11-11 |
| [#49751](https://github.com/sgl-project/sglang/pull/49751) | [Refactor] scheduler: Remove the remaining direct request-li... | @hnyls2002 | merged | 2026-11-11 | 2026-11-11 |
| [#49787](https://github.com/sgl-project/sglang/pull/49787) | [Doc] cookbook: Refresh SemiAnalysis AgentX launches to Infe... | @nvpohanh | merged | 2026-11-11 | 2026-11-11 |
| [#49750](https://github.com/sgl-project/sglang/pull/49750) | [CI] [NPU] docker: Bump SGLANG_KERNEL_NPU_TAG to 2026.11.0.p... | @huangxiaojun15 | merged | 2026-11-11 | 2026-11-11 |
| [#46820](https://github.com/sgl-project/sglang/pull/46820) | [Fix] metrics: Avoid blocking the scheduler on KV metrics ba... | @dorado269 | merged | 2026-10-27 | 2026-11-11 |
| [#46830](https://github.com/sgl-project/sglang/pull/46830) | [Fix] dsa: Remove host syncs from rank-divergent eager paths | @dorado269 | merged | 2026-10-27 | 2026-11-11 |
| [#49567](https://github.com/sgl-project/sglang/pull/49567) | [Perf] [AMD] aiter: write the breakable-graph attention outp... | @akao-amd | merged | 2026-11-10 | 2026-11-11 |
| [#46586](https://github.com/sgl-project/sglang/pull/46586) | [Fix] srt: Promptly abort running requests on client disconn... | @divakantpandey | merged | 2026-10-26 | 2026-11-11 |
| [#41794](https://github.com/sgl-project/sglang/pull/41794) | [Perf] [AMD] kimi-k3: Run the fused KDA decode with a BF16 s... | @yuychang | merged | 2026-09-30 | 2026-11-11 |
| [#47096](https://github.com/sgl-project/sglang/pull/47096) | [Fix] responses: Merge replayed tool calls into the precedin... | @alphabetc1 | merged | 2026-10-28 | 2026-11-11 |
| [#49574](https://github.com/sgl-project/sglang/pull/49574) | [Fix] diffusion: MiniMax-H3 follow-ups: load the public H3-I... | @niehen6174 | merged | 2026-11-10 | 2026-11-11 |
| [#47371](https://github.com/sgl-project/sglang/pull/47371) | [Feat] [AMD] muse-spark: Add the ROCm day0 implementation | @zijiecode | merged | 2026-10-30 | 2026-11-11 |
| [#47923](https://github.com/sgl-project/sglang/pull/47923) | [Feat] [AMD] tokenizer: Install fastokens in the ROCm image | @mustafa-khalid | merged | 2026-11-02 | 2026-11-11 |
| [#49478](https://github.com/sgl-project/sglang/pull/49478) | [Perf] kimi-k3.1: Per-M decode GEMM tactics and side-stream ... | @nvpohanh | merged | 2026-11-10 | 2026-11-11 |
| [#49656](https://github.com/sgl-project/sglang/pull/49656) | [Fix] kernels: Synchronize AOT MoE prefix before expert look... | @jybsuper | merged | 2026-11-10 | 2026-11-11 |
| [#49365](https://github.com/sgl-project/sglang/pull/49365) | [Refactor] custom-ar-v2: Single-word push epoch and consume-... | @DarkSharpness | merged | 2026-11-09 | 2026-11-11 |
| [#44458](https://github.com/sgl-project/sglang/pull/44458) | [Perf] [AMD] attention: Use aiter's Triton MLA decode in the... | @jiaryang | merged | 2026-10-15 | 2026-11-11 |
| [#42119](https://github.com/sgl-project/sglang/pull/42119) | [Feat] [AMD] quantization: enable GPTQ and AutoRound INT4 ch... | @clintg6 | merged | 2026-10-01 | 2026-11-10 |
| [#49081](https://github.com/sgl-project/sglang/pull/49081) | [Feat] cli: Add the CLI Guide | @Ccyest | merged | 2026-11-07 | 2026-11-10 |
| [#49004](https://github.com/sgl-project/sglang/pull/49004) | [Fix] [AMD] rocprofiler-sdk: fix torch.profiler hang on TP f... | @yctseng0211 | merged | 2026-11-07 | 2026-11-10 |
| [#47398](https://github.com/sgl-project/sglang/pull/47398) | [Feat] [AMD] gpt-oss: Mixed W4A8 MoE on gfx1250, Gluon below... | @akao-amd | merged | 2026-10-30 | 2026-11-10 |
| [#42977](https://github.com/sgl-project/sglang/pull/42977) | [Feat] [NPU] dsa: Shard indexer prefill queries across atten... | @TamirBaydasov | merged | 2026-10-07 | 2026-11-10 |
| [#49263](https://github.com/sgl-project/sglang/pull/49263) | [Fix] cuda-graph: Pause automatic GC during CUDA graph captu... | @fengshaoyi-amd | merged | 2026-11-09 | 2026-11-10 |
| [#33059](https://github.com/sgl-project/sglang/pull/33059) | [Fix] [AMD] dsa: Align Aiter paged rows with DP-attention me... | @dorado269 | merged | 2026-07-31 | 2026-11-09 |
| [#49205](https://github.com/sgl-project/sglang/pull/49205) | [Feat] [AMD] custom-all-reduce: Add a DPX hierarchical 2shot... | @hubertlu-tw | merged | 2026-11-08 | 2026-11-09 |
| [#45891](https://github.com/sgl-project/sglang/pull/45891) | [Perf] dsa: Run the packed prefill top-k on CUDA | @akhilg-nv | merged | 2026-10-22 | 2026-11-09 |
| [#43675](https://github.com/sgl-project/sglang/pull/43675) | [Fix] Kimi-K3: Fix derived weight buffers across CUDA graph ... | @wolfcomos | merged | 2026-10-11 | 2026-11-09 |
| [#49003](https://github.com/sgl-project/sglang/pull/49003) | [Feat] [AMD] custom-all-reduce: Run carv2 across gfx1250 UAL... | @hubertlu-tw | merged | 2026-11-07 | 2026-11-09 |
| [#48536](https://github.com/sgl-project/sglang/pull/48536) | [Perf] [AMD] quantization: Fuse SiLU-and-mul with the dynami... | @siliangchen-amd | merged | 2026-11-05 | 2026-11-09 |
| [#49171](https://github.com/sgl-project/sglang/pull/49171) | [Fix] rope/env: Remove the leftover Dual Chunk Attention RoP... | @BBuf | merged | 2026-11-08 | 2026-11-09 |
| [#47956](https://github.com/sgl-project/sglang/pull/47956) | [Feat] xpu: Consolidate simple XPU enablements | @airMeng | merged | 2026-11-02 | 2026-11-09 |
| [#35128](https://github.com/sgl-project/sglang/pull/35128) | [AMD] Guard ROCm 7.0 build from using hipMemcpyBatchAsync | @akao-amd | merged | 2026-08-17 | 2026-11-08 |
| [#23186](https://github.com/sgl-project/sglang/pull/23186) | [AMD] Fused qk rmsnorm bf16 for amd/Kimi-K2.5-MXFP4 | @akao-amd | merged | 2026-04-19 | 2026-11-08 |
| [#17092](https://github.com/sgl-project/sglang/pull/17092) | [AMD] Align alternative sgl-kernel wheel | @akao-amd | merged | 2026-01-15 | 2026-11-08 |
| [#48007](https://github.com/sgl-project/sglang/pull/48007) | [Refactor] mem_cache: Address prefix-tree window slots, curs... | @ch-wan | merged | 2026-11-03 | 2026-11-08 |
| [#46694](https://github.com/sgl-project/sglang/pull/46694) | [Perf] [AMD] minimax: decode indexer CP for DSpark verify on... | @kevin-mii | merged | 2026-10-27 | 2026-11-08 |
| [#46693](https://github.com/sgl-project/sglang/pull/46693) | [Feat] [AMD] minimax: Support MiniMax-M3.1-Flash on MI350X /... | @kevin-mii | merged | 2026-10-27 | 2026-11-08 |
| [#48434](https://github.com/sgl-project/sglang/pull/48434) | [Fix] [AMD] aiter: Quantize q with its own scale in the fp8 ... | @siliangchen-amd | merged | 2026-11-04 | 2026-11-08 |
| [#49001](https://github.com/sgl-project/sglang/pull/49001) | [Feat] [AMD] custom-all-reduce: Run carv2 on MI450 with FABR... | @wenkaidu | merged | 2026-11-07 | 2026-11-07 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-11-11T15:41:03Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#12596](https://github.com/triton-lang/triton/pull/12596) | [AMD] Fix TDM copies to and from shared memory subviews | @justinrosner | open | 2026-11-03 | 2026-11-11 |
| [#12645](https://github.com/triton-lang/triton/pull/12645) | [AMD][TritonGPU] Keep the partition when reshaping a partiti... | @Dewei-Wang-sh | draft | 2026-11-06 | 2026-11-11 |
| [#12648](https://github.com/triton-lang/triton/pull/12648) | [AMD] Infer async_wait completion scope | @jungpark-mlir | merged | 2026-11-06 | 2026-11-11 |
| [#12702](https://github.com/triton-lang/triton/pull/12702) | [AMD]Support PartitionedSharedLayout in TDM Store and Scatte... | @knwng | merged | 2026-11-10 | 2026-11-10 |
| [#12651](https://github.com/triton-lang/triton/pull/12651) | [AMD]Support PartitionedSharedLayout in TDM Gather | @knwng | merged | 2026-11-06 | 2026-11-10 |
| [#12646](https://github.com/triton-lang/triton/pull/12646) | [AMD][ConSan] Handle startup cluster barrier synchronization... | @PMylon | merged | 2026-11-06 | 2026-11-10 |
| [#12697](https://github.com/triton-lang/triton/pull/12697) | [AMD][CI] Bump rocjitsu image | @sriakrish | merged | 2026-11-10 | 2026-11-10 |
| [#12572](https://github.com/triton-lang/triton/pull/12572) | [GPU] Reject generic linear encodings on non-AMD targets | @losewayy | merged | 2026-10-31 | 2026-11-10 |
| [#12691](https://github.com/triton-lang/triton/pull/12691) | [AMD][Gluon] Fix scaled_downcast for CDNA4 verification and ... | @lijinpei-amd | draft | 2026-11-10 | 2026-11-10 |
| [#12686](https://github.com/triton-lang/triton/pull/12686) | [AMD] Implement TargetFeatures with mlir::ROCDL::TargetInfo | @krzysz00 | open | 2026-11-09 | 2026-11-09 |
| [#12653](https://github.com/triton-lang/triton/pull/12653) | [AMD][GLUON] Fix bank conflict count for swizzled layout on ... | @borontion | merged | 2026-11-07 | 2026-11-09 |
| [#12630](https://github.com/triton-lang/triton/pull/12630) | [AMD] Fix small K in MFMA  | @borontion | merged | 2026-11-05 | 2026-11-09 |
| [#12604](https://github.com/triton-lang/triton/pull/12604) | [AMD][gfx1250] Keep whole-line epilogue stores for WMMA | @reger-men | open | 2026-11-03 | 2026-11-09 |
| [#12633](https://github.com/triton-lang/triton/pull/12633) | [AMD][CDNA5] Fix partition selection for transposing LDS loa... | @PMylon | open | 2026-11-05 | 2026-11-09 |
| [#12669](https://github.com/triton-lang/triton/pull/12669) | [AMD] Invalidate the compilation cache on the MIR swap knobs | @tyb0807 | open | 2026-11-09 | 2026-11-09 |
| [#12536](https://github.com/triton-lang/triton/pull/12536) | [AMD] Publish llc from the code generator's LLVM so the DAG ... | @tyb0807 | open | 2026-10-28 | 2026-11-09 |
| [#12083](https://github.com/triton-lang/triton/pull/12083) | Catch LLVM diagnostic and raise Python exception in both Nvi... | @woct0rdho | open | 2026-10-03 | 2026-11-09 |
| [#12654](https://github.com/triton-lang/triton/pull/12654) | [AMD] Re-enable kernarg preload under MIR dump/swap | @tyb0807 | merged | 2026-11-07 | 2026-11-09 |
| [#12034](https://github.com/triton-lang/triton/pull/12034) | [GSan] Support symmetric memory allocator on AMD (HIP) | @amgddm | draft | 2026-09-29 | 2026-11-09 |
| [#12657](https://github.com/triton-lang/triton/pull/12657) | [AMD] Make release atomics cover writes from every warp | @antiagainst | open | 2026-11-08 | 2026-11-08 |
| [#12660](https://github.com/triton-lang/triton/pull/12660) | [AMD] Fix CodeGen build for LLVM @293a85c048f7 | @antiagainst | merged | 2026-11-08 | 2026-11-08 |
| [#12656](https://github.com/triton-lang/triton/pull/12656) | [AMD] Build LLVM @293a85c048f7 for CodeGen | @njriasan | merged | 2026-11-07 | 2026-11-08 |
| [#12629](https://github.com/triton-lang/triton/pull/12629) | [AMD] UpdateAsyncWaitCount: walk past region ops without asy... | @Dewei-Wang-sh | merged | 2026-11-05 | 2026-11-08 |
| [#12610](https://github.com/triton-lang/triton/pull/12610) | [AMD] Staged asyncmark handling for gfx1250 (async wait coun... | @njriasan | draft | 2026-11-03 | 2026-11-07 |
| [#12177](https://github.com/triton-lang/triton/pull/12177) | [AMD] Add FP16-accumulate WMMA support for WMMAv3 | @pabloantoniom | merged | 2026-10-08 | 2026-11-06 |
| [#12286](https://github.com/triton-lang/triton/pull/12286) | [AMD][membar] Prove slots of loop-carried views of multi-buf... | @yanxuer-999 | open | 2026-10-14 | 2026-11-06 |
| [#12615](https://github.com/triton-lang/triton/pull/12615) | [AMD][WS] Skip the barrier for single warp partition | @borontion | merged | 2026-11-03 | 2026-11-05 |
| [#12634](https://github.com/triton-lang/triton/pull/12634) | [AMD][Triton] Use aligned buffer mask offsets when bounds pe... | @Liang-jianhao97 | draft | 2026-11-05 | 2026-11-05 |
| [#12133](https://github.com/triton-lang/triton/pull/12133) | [AMD] Allow chain-dot detection across one level of scf.if | @amd-sonsingh | open | 2026-10-05 | 2026-11-05 |
| [#12320](https://github.com/triton-lang/triton/pull/12320) | [AMD][ConSan] Support async-copy mbarrier arrive | @PMylon | merged | 2026-10-15 | 2026-11-05 |
| [#12553](https://github.com/triton-lang/triton/pull/12553) | [AMD][IR] Implement InferIntRangeInterface for MakeRangeOp | @Betelgeu | open | 2026-10-30 | 2026-11-05 |
| [#12587](https://github.com/triton-lang/triton/pull/12587) | [AMD] Add warp_pipeline_stage(schedule_hint="mfma-valu") and... | @zhanglx13 | draft | 2026-11-02 | 2026-11-04 |
| [#12595](https://github.com/triton-lang/triton/pull/12595) | Fix Python header include order in AMD HIP utilities | @rikonor | merged | 2026-11-03 | 2026-11-04 |
| [#12593](https://github.com/triton-lang/triton/pull/12593) | [AMD][CDNA5] Emulate descriptor reductions with global atomi... | @nzaghen | draft | 2026-11-02 | 2026-11-04 |
| [#11346](https://github.com/triton-lang/triton/pull/11346) | [AMD] Preserve dominance when preparing if combining | @liminfei-amd | merged | 2026-08-18 | 2026-11-04 |
| [#11666](https://github.com/triton-lang/triton/pull/11666) | Avoid PyTorch imports during AMD backend discovery | @lyu-oai | merged | 2026-09-09 | 2026-11-04 |
| [#11399](https://github.com/triton-lang/triton/pull/11399) | [AMD][IMP][Launch Latency] read use_buffer_ops once at impor... | @irreg | merged | 2026-08-22 | 2026-11-04 |
| [#11208](https://github.com/triton-lang/triton/pull/11208) | [AMD] Guard chained-dot pingpong against scaled dots | @warrendeng | merged | 2026-08-07 | 2026-11-04 |
| [#12524](https://github.com/triton-lang/triton/pull/12524) | [AMD] Enable LDS prefetch for scaled dot | @yiqian1 | merged | 2026-10-27 | 2026-11-04 |
| [#11704](https://github.com/triton-lang/triton/pull/11704) | [AMD] Bypass the epilogue relayout for FMA | @pabloantoniom | merged | 2026-09-11 | 2026-11-03 |
| [#12233](https://github.com/triton-lang/triton/pull/12233) | [AMD] Support scheduling, LDS prefetch and TDM fusion for sl... | @plognjen | draft | 2026-10-12 | 2026-11-03 |
| [#12601](https://github.com/triton-lang/triton/pull/12601) | [AMD] Fix exponential traversal in pointer canonicalization | @leonling-ll | merged | 2026-11-03 | 2026-11-03 |
| [#12579](https://github.com/triton-lang/triton/pull/12579) | [AMD] Widen InstCombine's SimplifyDemandedVectorElts walk de... | @Dewei-Wang-sh | merged | 2026-11-02 | 2026-11-03 |
| [#8304](https://github.com/triton-lang/triton/pull/8304) | [AMD] Support float8_e5m2 in tutorials/03-matrix-multiplicat... | @matthiasdiener | merged | 2025-09-26 | 2026-11-03 |
| [#12149](https://github.com/triton-lang/triton/pull/12149) | [AMD][Gluon] Add CDNA5 WMMA issue mode control | @nithinsubbiah | draft | 2026-10-06 | 2026-11-03 |
| [#12522](https://github.com/triton-lang/triton/pull/12522) | [AMD] Fix TDM mbarrier arrival accounting | @justinrosner | merged | 2026-10-27 | 2026-11-03 |
| [#9533](https://github.com/triton-lang/triton/pull/9533) | [AMD] Update default to `block_m=16` in `make_default_opt_fl... | @micah-wil | merged | 2026-02-20 | 2026-11-02 |
| [#12594](https://github.com/triton-lang/triton/pull/12594) | [AMD] Use buffer-index analysis for warp-pipeline dependenci... | @jungpark-mlir | merged | 2026-11-02 | 2026-11-02 |
| [#12547](https://github.com/triton-lang/triton/pull/12547) | [AMD]Support Partitioned Shared Layout for AsyncCopy on CDNA... | @knwng | merged | 2026-10-29 | 2026-11-02 |
| [#12564](https://github.com/triton-lang/triton/pull/12564) | [AMD][Gluon] Thread scope and CachePolicy through gfx1250 as... | @antiagainst | merged | 2026-10-31 | 2026-11-02 |
| [#12362](https://github.com/triton-lang/triton/pull/12362) | [AMD] Fix AMD codegen rebuilds after LLVM dependency updates | @willghatch | open | 2026-10-19 | 2026-10-28 |
| [#12115](https://github.com/triton-lang/triton/pull/12115) | [AMD] Use native F8F6F4 MFMAs when scales are absent | @dhernandez0 | draft | 2026-10-05 | 2026-10-20 |
| [#11968](https://github.com/triton-lang/triton/pull/11968) | [AMD] Add a pre-bound HIP kernel launcher | @adityakankariya | draft | 2026-09-25 | 2026-10-19 |
| [#12325](https://github.com/triton-lang/triton/pull/12325) | [AMD] Add native JIT cache dispatch for HIP | @adityakankariya | draft | 2026-10-15 | 2026-10-19 |
| [#12171](https://github.com/triton-lang/triton/pull/12171) | [AMD][FpSan] Support scaled FP4 and FP8 downcasts | @kelesvol | open | 2026-10-08 | 2026-10-13 |
| [#12203](https://github.com/triton-lang/triton/pull/12203) | [AMD] CanonicalizePointers: normalize mixed pointer represen... | @he-yufeng | open | 2026-10-09 | 2026-10-09 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-10-09 |
| [#12159](https://github.com/triton-lang/triton/pull/12159) | [AMD] Keep shared order in CoalesceAsyncCopy when the src or... | @he-yufeng | open | 2026-10-07 | 2026-10-07 |
| [#12060](https://github.com/triton-lang/triton/pull/12060) | [AMD] Avoid redundant batch warps in dot layouts | @pculaf | open | 2026-10-01 | 2026-10-01 |
| [#12020](https://github.com/triton-lang/triton/pull/12020) | Add TRITON_BUILD_{NVIDIA,AMD}_BACKEND options to build witho... | @KX76 | draft | 2026-09-29 | 2026-09-29 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-11-11T15:41:07Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5499](https://github.com/ROCm/AMDMIGraphX/pull/5499) | Validate MXR file version as a supported range, before decod... | @tanzeel-amd | draft | 2026-11-11 | 2026-11-11 |
| [#5500](https://github.com/ROCm/AMDMIGraphX/pull/5500) | Keep the input layout when a copying reshape is applied to a... | @pfultz2 | open | 2026-11-11 | 2026-11-11 |
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | open | 2026-08-30 | 2026-11-11 |
| [#5483](https://github.com/ROCm/AMDMIGraphX/pull/5483) | Clamp layernorm variance to avoid NaN from cancellation | @VishalX | open | 2026-11-06 | 2026-11-11 |
| [#5484](https://github.com/ROCm/AMDMIGraphX/pull/5484) | [AIMIGRAPHX-1371] Keep program outputs standard in eliminate... | @anupsing-amd | open | 2026-11-06 | 2026-11-11 |
| [#5466](https://github.com/ROCm/AMDMIGraphX/pull/5466) | Add MXR recompiling: keep kernel recipes and recompile compi... | @anilmartha | open | 2026-11-02 | 2026-11-11 |
| [#5498](https://github.com/ROCm/AMDMIGraphX/pull/5498) | Add rewrite_gather_dot pass to compute MoE expert dots as on... | @pfultz2 | open | 2026-11-11 | 2026-11-11 |
| [#5412](https://github.com/ROCm/AMDMIGraphX/pull/5412) | Apply MatMulInteger zero-point corrections in int32 | @royzhang-amd | open | 2026-10-20 | 2026-11-11 |
| [#5474](https://github.com/ROCm/AMDMIGraphX/pull/5474) | Prevent FP16 GroupNorm overflow with float intermediates | @royzhang-amd | open | 2026-11-04 | 2026-11-11 |
| [#5497](https://github.com/ROCm/AMDMIGraphX/pull/5497) | Keep the layout of a concat input that has other users in el... | @klin2024 | open | 2026-11-10 | 2026-11-11 |
| [#5485](https://github.com/ROCm/AMDMIGraphX/pull/5485) | Time benchmark candidates as HIP graphs  | @kazhang2 | open | 2026-11-06 | 2026-11-11 |
| [#5482](https://github.com/ROCm/AMDMIGraphX/pull/5482) | Fuse the chunked linear attention recurrence into one kernel | @pfultz2 | open | 2026-11-05 | 2026-11-10 |
| [#5468](https://github.com/ROCm/AMDMIGraphX/pull/5468) | Support stride and dilation in the channelwise convolution k... | @pfultz2 | open | 2026-11-02 | 2026-11-10 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | open | 2026-07-30 | 2026-11-10 |
| [#5495](https://github.com/ROCm/AMDMIGraphX/pull/5495) | Fold single-element widening converts in propagate_constant ... | @klin2024 | open | 2026-11-09 | 2026-11-10 |
| [#5394](https://github.com/ROCm/AMDMIGraphX/pull/5394) | Split/symbolic reshape parsing | @CharlieL7 | open | 2026-10-13 | 2026-11-09 |
| [#5455](https://github.com/ROCm/AMDMIGraphX/pull/5455) | Add post-lowering GPU copy optimization | @shivadbhavsar | open | 2026-10-28 | 2026-11-09 |
| [#5450](https://github.com/ROCm/AMDMIGraphX/pull/5450) | Combined data dependent support branches | @CharlieL7 | open | 2026-10-28 | 2026-11-09 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-11-09 |
| [#5489](https://github.com/ROCm/AMDMIGraphX/pull/5489) | Port the CPU target to oneDNN 3 | @adityas-amd | open | 2026-11-07 | 2026-11-09 |
| [#5478](https://github.com/ROCm/AMDMIGraphX/pull/5478) | Binary cache: store only winner if problem cache is used | @pnikolic-amd | open | 2026-11-04 | 2026-11-09 |
| [#5496](https://github.com/ROCm/AMDMIGraphX/pull/5496) | Write a Loop scan output that the body returns as a paramete... | @klin2024 | open | 2026-11-09 | 2026-11-09 |
| [#4829](https://github.com/ROCm/AMDMIGraphX/pull/4829) | support stride > 1 case. | @weizhu12-amd | draft | 2026-04-29 | 2026-11-09 |
| [#5492](https://github.com/ROCm/AMDMIGraphX/pull/5492) | Fix Selu lowering returning 0 or NaN for large positive inpu... | @akshat-lakhera | open | 2026-11-08 | 2026-11-09 |
| [#5493](https://github.com/ROCm/AMDMIGraphX/pull/5493) | Direct FP32 3x3 stride-2 convolution kernel for gfx12 (conv3... | @kazhang2 | open | 2026-11-09 | 2026-11-09 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | draft | 2025-03-07 | 2026-11-09 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-11-07 |
| [#5488](https://github.com/ROCm/AMDMIGraphX/pull/5488) | Sink layout copies into concat buffers and fold layouts into... | @pfultz2 | open | 2026-11-07 | 2026-11-07 |
| [#5400](https://github.com/ROCm/AMDMIGraphX/pull/5400) | Support quantized concat in simplify_qdq | @pfultz2 | open | 2026-10-15 | 2026-11-07 |
| [#5423](https://github.com/ROCm/AMDMIGraphX/pull/5423) | Add ONNX parser for the CausalConvWithState contrib op | @pfultz2 | open | 2026-10-22 | 2026-11-07 |
| [#4994](https://github.com/ROCm/AMDMIGraphX/pull/4994) | simplify_reshapes: skip find_reshape_dot when it would chang... | @ycastill2-amd | draft | 2026-06-19 | 2026-11-07 |
| [#5439](https://github.com/ROCm/AMDMIGraphX/pull/5439) | KV cache attention flash decoding | @bdevorem | open | 2026-10-26 | 2026-11-06 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): spawn processes directly instead of through p... | @causten | open | 2026-08-21 | 2026-11-06 |
| [#5486](https://github.com/ROCm/AMDMIGraphX/pull/5486) | Onnxruntime Weekly Sync 2026-11-06 | @github-actions[bot] | open | 2026-11-06 | 2026-11-06 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | open | 2026-08-21 | 2026-11-06 |
| [#5477](https://github.com/ROCm/AMDMIGraphX/pull/5477) | Binary cache read only option | @pnikolic-amd | open | 2026-11-04 | 2026-11-06 |
| [#5458](https://github.com/ROCm/AMDMIGraphX/pull/5458) | Fix GPU codegen layout pinning and deep-graph stack overflow... | @cliffcai | open | 2026-10-30 | 2026-11-06 |
| [#5397](https://github.com/ROCm/AMDMIGraphX/pull/5397) | update parsers to support LLMs | @shivadbhavsar | open | 2026-10-15 | 2026-11-05 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-11-05 |
| [#5481](https://github.com/ROCm/AMDMIGraphX/pull/5481) | gpu: use hip::load_scalar for if/loop host scalars | @ivarusic-amd | open | 2026-11-05 | 2026-11-05 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-11-05 |
| [#5475](https://github.com/ROCm/AMDMIGraphX/pull/5475) | Support per-channel quantized models with expanded QDQ param... | @royzhang-amd | open | 2026-11-04 | 2026-11-05 |
| [#5479](https://github.com/ROCm/AMDMIGraphX/pull/5479) | Fold axis-linear operations on a dot input into its constant... | @pfultz2 | open | 2026-11-04 | 2026-11-04 |
| [#5447](https://github.com/ROCm/AMDMIGraphX/pull/5447) | Parse LinearAttention and fuse causal gemm-elementwise-gemm ... | @pfultz2 | open | 2026-10-27 | 2026-11-03 |
| [#5469](https://github.com/ROCm/AMDMIGraphX/pull/5469) | Check driver input names against the program parameters | @pfultz2 | open | 2026-11-03 | 2026-11-03 |
| [#5463](https://github.com/ROCm/AMDMIGraphX/pull/5463) | Onnxruntime Weekly Sync 2026-10-30 | @github-actions[bot] | open | 2026-10-30 | 2026-11-03 |
| [#5373](https://github.com/ROCm/AMDMIGraphX/pull/5373) | docs: update installation docs with TheRock packages | @peterjunpark | open | 2026-10-09 | 2026-11-03 |
| [#5462](https://github.com/ROCm/AMDMIGraphX/pull/5462) | Bump RocMlirTriton with triton_amd_codegen library | @ilango100 | open | 2026-10-30 | 2026-11-03 |
| [#5467](https://github.com/ROCm/AMDMIGraphX/pull/5467) | Fuse pointwise into the MLIR conv/dot that no sibling input ... | @pfultz2 | open | 2026-11-02 | 2026-11-02 |
| [#5457](https://github.com/ROCm/AMDMIGraphX/pull/5457) | [AIMIGRAPHX-595] NVFP4 E4M3-scaled GEMM on gfx1250 | @anupsing-amd | draft | 2026-10-29 | 2026-10-31 |
| [#5448](https://github.com/ROCm/AMDMIGraphX/pull/5448) | Check runtime dependent ops for symbol simplification | @shivadbhavsar | draft | 2026-10-27 | 2026-10-30 |
| [#5433](https://github.com/ROCm/AMDMIGraphX/pull/5433) | Bump gitpython from 3.1.62 to 3.2.1 in /docs/sphinx | @dependabot[bot] | open | 2026-10-26 | 2026-10-29 |
| [#5432](https://github.com/ROCm/AMDMIGraphX/pull/5432) | Bump certifi from 2024.7.4 to 2026.10.19 in /docs/sphinx | @dependabot[bot] | open | 2026-10-24 | 2026-10-29 |
| [#5449](https://github.com/ROCm/AMDMIGraphX/pull/5449) | Fix lowering for eval_expr_from_shape | @shivadbhavsar | draft | 2026-10-27 | 2026-10-28 |
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | draft | 2026-09-21 | 2026-10-28 |
| [#5426](https://github.com/ROCm/AMDMIGraphX/pull/5426) | Resolve channels_auto convolution layout to channels_first o... | @ppetrovi-amd | open | 2026-10-23 | 2026-10-27 |
| [#5340](https://github.com/ROCm/AMDMIGraphX/pull/5340) | Split_sym_dim prefill+decode support | @turneram | open | 2026-09-30 | 2026-10-24 |
| [#5430](https://github.com/ROCm/AMDMIGraphX/pull/5430) | Forward slices spanning several concat segments through resh... | @pfultz2 | open | 2026-10-23 | 2026-10-24 |
| [#5428](https://github.com/ROCm/AMDMIGraphX/pull/5428) | Onnxruntime Weekly Sync 2026-10-23 | @github-actions[bot] | open | 2026-10-23 | 2026-10-23 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-10-21 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Support for operators with data-depdendent shape functions | @CharlieL7 | draft | 2026-09-24 | 2026-10-13 |
| [#5377](https://github.com/ROCm/AMDMIGraphX/pull/5377) | Use small_vector | @pfultz2 | draft | 2026-10-12 | 2026-10-12 |
| [#5369](https://github.com/ROCm/AMDMIGraphX/pull/5369) | Claude code review | @pfultz2 | draft | 2026-10-08 | 2026-10-09 |
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
| [#4992](https://github.com/ROCm/AMDMIGraphX/pull/4992) | adjust_allocation: reallocate undersized aliased output buff... | @ycastill2-amd | open | 2026-06-18 | 2026-08-29 |
| [#4983](https://github.com/ROCm/AMDMIGraphX/pull/4983) | NOT TO BE MERGED: Python script to benchmark mxr files - con... | @ahsan-ca | draft | 2026-06-17 | 2026-08-29 |
| [#4931](https://github.com/ROCm/AMDMIGraphX/pull/4931) | Add support for 3d kernel launches | @music-dino | draft | 2026-06-02 | 2026-08-29 |
| [#4924](https://github.com/ROCm/AMDMIGraphX/pull/4924) | concat: treat fully-unconstrained dynamic dim as a wildcard | @chun-wan | open | 2026-05-30 | 2026-08-29 |
| [#4911](https://github.com/ROCm/AMDMIGraphX/pull/4911) | Reduce dynamic-shape compile cost and select_module dispatch... | @chun-wan | open | 2026-05-26 | 2026-08-29 |
| [#4895](https://github.com/ROCm/AMDMIGraphX/pull/4895) | Use fp16 for convolution on navi | @pfultz2 | draft | 2026-05-19 | 2026-08-29 |
| [#4892](https://github.com/ROCm/AMDMIGraphX/pull/4892) | Add builds for static lib on windows | @pfultz2 | draft | 2026-05-18 | 2026-08-29 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-08-29 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-08-29 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-08-29 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | draft | 2026-03-23 | 2026-08-29 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-08-29 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-08-29 |
| [#4577](https://github.com/ROCm/AMDMIGraphX/pull/4577) | Create op. builders (6.) (AI generated) | @gchinora | draft | 2026-01-28 | 2026-08-29 |
| [#4571](https://github.com/ROCm/AMDMIGraphX/pull/4571) |  ONNX: Added support for `SplitToSequence` and `ConcatFromSe... | @RajBarshikar | draft | 2026-01-26 | 2026-08-29 |
| [#4563](https://github.com/ROCm/AMDMIGraphX/pull/4563) | Add Windows build documentation for TheRock ROCm | @ppetrovi-amd | draft | 2026-01-21 | 2026-08-29 |
| [#4456](https://github.com/ROCm/AMDMIGraphX/pull/4456) | Horizontally fuse pointwise with more than 2 arguments in fi... | @pfultz2 | draft | 2025-11-20 | 2026-08-29 |
| [#4448](https://github.com/ROCm/AMDMIGraphX/pull/4448) | Gpu concat kernel improvements(scratch) | @pfultz2 | draft | 2025-11-19 | 2026-08-29 |
| [#4381](https://github.com/ROCm/AMDMIGraphX/pull/4381) | Enable pointwise fusion for dynamic IR | @shivadbhavsar | draft | 2025-10-13 | 2026-08-29 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2026-08-29 |
| [#4312](https://github.com/ROCm/AMDMIGraphX/pull/4312) | Add ONNX model testing workflow | @danieyan-amd | draft | 2025-09-23 | 2026-08-29 |
| [#4275](https://github.com/ROCm/AMDMIGraphX/pull/4275) | SparseAttention ONNX Contrib Op Implementation | @music-dino | draft | 2025-09-03 | 2026-08-29 |
| [#4217](https://github.com/ROCm/AMDMIGraphX/pull/4217) | Set attribute to help bypass the warning about amdgpu_waves_... | @lakhinderwalia | draft | 2025-08-08 | 2026-08-29 |
| [#4154](https://github.com/ROCm/AMDMIGraphX/pull/4154) | Switch to c++23 | @pfultz2 | draft | 2025-07-21 | 2026-08-29 |
| [#3938](https://github.com/ROCm/AMDMIGraphX/pull/3938) | Add GPU onnx support for com.microsoft.SparseAttention | @music-dino | draft | 2025-04-09 | 2026-08-29 |
| [#3752](https://github.com/ROCm/AMDMIGraphX/pull/3752) | Fuse multiple outputs for pointwise and reductions | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3750](https://github.com/ROCm/AMDMIGraphX/pull/3750) | Tile channels for group norm and also fuse output reshapes i... | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3725](https://github.com/ROCm/AMDMIGraphX/pull/3725) | Issue with int8 for MaxPool  | @taylding-amd | draft | 2024-12-19 | 2026-08-29 |
| [#3721](https://github.com/ROCm/AMDMIGraphX/pull/3721) | Introduce export feature to TensorRT JSON format | @mirza-halilcevic | draft | 2024-12-18 | 2026-08-29 |
| [#3718](https://github.com/ROCm/AMDMIGraphX/pull/3718) | Tile scale and bias for block quantization | @pfultz2 | draft | 2024-12-16 | 2026-08-29 |
| [#3416](https://github.com/ROCm/AMDMIGraphX/pull/3416) | Weight stripping | @simberg-amd | draft | 2024-09-04 | 2026-08-29 |
| [#2687](https://github.com/ROCm/AMDMIGraphX/pull/2687) | Add optional fp16 rmsnorm conversion pass to fix fp16 accura... | @attila-dusnoki-htec | draft | 2024-01-25 | 2026-08-29 |
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#5419](https://github.com/ROCm/AMDMIGraphX/pull/5419) | Sink the view chain onto pointwise inputs so flat-layout kv-... | @pfultz2 | merged | 2026-10-21 | 2026-11-11 |
| [#5459](https://github.com/ROCm/AMDMIGraphX/pull/5459) | Avoid stack overflow for deep recursion in the fix combinato... | @pfultz2 | merged | 2026-10-30 | 2026-11-10 |
| [#5480](https://github.com/ROCm/AMDMIGraphX/pull/5480) | fix: keep program outputs standard when lowering reshape to ... | @adityas-amd | merged | 2026-11-04 | 2026-11-06 |
| [#5366](https://github.com/ROCm/AMDMIGraphX/pull/5366) | Hoist submodule scratch memory into the parent in memory col... | @pfultz2 | merged | 2026-10-07 | 2026-11-06 |
| [#3465](https://github.com/ROCm/AMDMIGraphX/pull/3465) | Remove layernorm fusion | @pfultz2 | merged | 2024-09-20 | 2026-11-06 |
| [#5417](https://github.com/ROCm/AMDMIGraphX/pull/5417) | Fuse the attention-sink gate into the attention epilogue and... | @pfultz2 | merged | 2026-10-21 | 2026-11-06 |
| [#5405](https://github.com/ROCm/AMDMIGraphX/pull/5405) | Gate MLIR attention fusion on profitability and enable it by... | @pfultz2 | merged | 2026-10-16 | 2026-11-06 |
| [#5461](https://github.com/ROCm/AMDMIGraphX/pull/5461) | Expand concat inputs without a recursive fold to cut compile... | @pfultz2 | merged | 2026-10-30 | 2026-11-05 |
| [#5476](https://github.com/ROCm/AMDMIGraphX/pull/5476) | Optimize repeated-row dot broadcasts to reduce MXR size and ... | @urpetkov-amd | merged | 2026-11-04 | 2026-11-05 |
| [#5414](https://github.com/ROCm/AMDMIGraphX/pull/5414) | Share loaded modules between identical code objects | @pfultz2 | merged | 2026-10-20 | 2026-11-04 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | merged | 2026-07-08 | 2026-11-03 |
| [#5431](https://github.com/ROCm/AMDMIGraphX/pull/5431) | Improve select_module perf | @shivadbhavsar | merged | 2026-10-23 | 2026-11-03 |
| [#5465](https://github.com/ROCm/AMDMIGraphX/pull/5465) | Check that the static driver can run standalone | @pfultz2 | merged | 2026-11-01 | 2026-11-03 |
| [#5274](https://github.com/ROCm/AMDMIGraphX/pull/5274) | Winograd fp16 gfx11 | @pfultz2 | merged | 2026-09-17 | 2026-11-02 |
| [#5413](https://github.com/ROCm/AMDMIGraphX/pull/5413) | Preserve arg-reduction axes during reshape fusion | @royzhang-amd | merged | 2026-10-20 | 2026-11-02 |
| [#5464](https://github.com/ROCm/AMDMIGraphX/pull/5464) | Ensure hermetic builds | @pfultz2 | merged | 2026-11-01 | 2026-11-01 |
| [#5393](https://github.com/ROCm/AMDMIGraphX/pull/5393) | Evaluate compound symbolic shape expressions | @CharlieL7 | merged | 2026-10-13 | 2026-10-30 |
| [#5389](https://github.com/ROCm/AMDMIGraphX/pull/5389) | Add simplify symbolic dimensions pass & simplify min/max sym... | @CharlieL7 | merged | 2026-10-13 | 2026-10-30 |
| [#5454](https://github.com/ROCm/AMDMIGraphX/pull/5454) | Insert match::opaque into deep matchers to fix slow build ti... | @pnikolic-amd | merged | 2026-10-28 | 2026-10-30 |
| [#5453](https://github.com/ROCm/AMDMIGraphX/pull/5453) | Disable hiprtc subprocess spawning fix | @pnikolic-amd | merged | 2026-10-28 | 2026-10-30 |
| [#5451](https://github.com/ROCm/AMDMIGraphX/pull/5451) | fix: make PR review dashboard resilient to GraphQL timeouts | @causten | merged | 2026-10-28 | 2026-10-29 |
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

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-11-11T15:41:25Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#7539](https://github.com/ROCm/aiter/pull/7539) | [Triton/Gluon] Clamp gfx950 unified attention block-table pr... | @jamesETsmith | open | 2026-11-06 | 2026-11-11 |
| [#7568](https://github.com/ROCm/aiter/pull/7568) | [CI] Install the amd-mori 1.2.5 release for the multi-GPU te... | @jhchouuu | open | 2026-11-06 | 2026-11-11 |
| [#6875](https://github.com/ROCm/aiter/pull/6875) | [Triton/Gluon] Fix model benchmark scripts | @brunomazzottiamd | open | 2026-10-23 | 2026-11-11 |
| [#7830](https://github.com/ROCm/aiter/pull/7830) | [Triton] gemm_afp4wfp4: enable the software-emulated FP4 pat... | @klin2024 | draft | 2026-11-11 | 2026-11-11 |
| [#7019](https://github.com/ROCm/aiter/pull/7019) | [HIP] [CK] [JIT] Enable swiglu_limit for FP8 per_1x128 block... | @msaffari-amd | open | 2026-10-27 | 2026-11-11 |
| [#7829](https://github.com/ROCm/aiter/pull/7829) | [Config] Add M=8320 MiniMax-M3 MXFP8 GEMM rows for gfx950 | @amd-yashagar | open | 2026-11-11 | 2026-11-11 |
| [#7325](https://github.com/ROCm/aiter/pull/7325) | [Config] [gfx950] Gemma 4 26B-A4B BF16 fused-MoE tuned confi... | @amd-sriram | open | 2026-11-02 | 2026-11-11 |
| [#7530](https://github.com/ROCm/aiter/pull/7530) | [Triton/Gluon] [Kernel] Add a Triton fallback for paged_mxfp... | @Ragua1 | open | 2026-11-05 | 2026-11-11 |
| [#7753](https://github.com/ROCm/aiter/pull/7753) | [Bugfix] perftest: time candidates on cold inputs regardless... | @JH-Leon-KIM-AMD | draft | 2026-11-10 | 2026-11-11 |
| [#7765](https://github.com/ROCm/aiter/pull/7765) | [FlyDSL] fix aot/flydsl/mxfp4_moe.py test | @illsilin | open | 2026-11-10 | 2026-11-11 |
| [#7203](https://github.com/ROCm/aiter/pull/7203) | [Triton/Gluon] [Bugfix] gfx1250 unified attention 2D: store ... | @akao-amd | open | 2026-10-30 | 2026-11-11 |
| [#7767](https://github.com/ROCm/aiter/pull/7767) | gfx1250-strict enablment fixes | @omuhamma | draft | 2026-11-10 | 2026-11-11 |
| [#7828](https://github.com/ROCm/aiter/pull/7828) | [CI] [gfx1250] Add MI450 gfx1250 operator manifests and a st... | @andyluo7 | draft | 2026-11-11 | 2026-11-11 |
| [#7755](https://github.com/ROCm/aiter/pull/7755) | [Triton/Gluon] bench_sage: run mha4_mxfp8 --e2e through mha_... | @jcaraban | open | 2026-11-10 | 2026-11-11 |
| [#7827](https://github.com/ROCm/aiter/pull/7827) | [FlyDSL] [gfx1250] DSv4.1 Flash 32x32 GEMMs: tune decode for... | @aoli26 | draft | 2026-11-11 | 2026-11-11 |
| [#5670](https://github.com/ROCm/aiter/pull/5670) | [FlyDSL] [CI] Fused all-reduce + RMSNorm | @vpietila-amd | open | 2026-09-18 | 2026-11-11 |
| [#7825](https://github.com/ROCm/aiter/pull/7825) | [FlyDSL] NVFP4 sparse PA: decode kernel (`minimax_m3_sparse_... | @ganyi1996ppo | open | 2026-11-11 | 2026-11-11 |
| [#7668](https://github.com/ROCm/aiter/pull/7668) | [FlyDSL] [gfx1250] mx32 GEMM: software-pipelined K loop; DSv... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#7665](https://github.com/ROCm/aiter/pull/7665) | [HIP] [OPUS] [FlyDSL] [gfx1250] DSv4.1 indexer: MQA logits e... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#7667](https://github.com/ROCm/aiter/pull/7667) | [FlyDSL] [gfx1250] Batched mxfp8 GEMM fused-quant epilogue: ... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#7664](https://github.com/ROCm/aiter/pull/7664) | [FlyDSL] [gfx1250] MegaMoE: bf16-wire combine reduce reads i... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#7821](https://github.com/ROCm/aiter/pull/7821) | [Triton/Gluon] [HIP] [OPUS] FP8 DMA deepseek prefill | @Chi-Chu319 | open | 2026-11-11 | 2026-11-11 |
| [#6583](https://github.com/ROCm/aiter/pull/6583) | [FlyDSL] [MoE] fused_moe: add a deterministic mode for MXFP4... | @aarnetalman | open | 2026-10-15 | 2026-11-11 |
| [#7823](https://github.com/ROCm/aiter/pull/7823) | [Triton/Gluon] [gfx950] Fix LDS WAR race in single-warp fp8_... | @akii96 | open | 2026-11-11 | 2026-11-11 |
| [#7739](https://github.com/ROCm/aiter/pull/7739) | [HIP] fused_qk_rope_concat_and_cache_mla: cut decode latency... | @yzhou103 | draft | 2026-11-10 | 2026-11-11 |
| [#6877](https://github.com/ROCm/aiter/pull/6877) | [HIP] Fix the hardcoded die count in the HIP kernels | @RElbers | open | 2026-10-23 | 2026-11-11 |
| [#7514](https://github.com/ROCm/aiter/pull/7514) | [OPUS] Tune gfx1250 a16w16 GEMMs for Kimi K2 on 96 CUs | @erizheng-amd | open | 2026-11-05 | 2026-11-11 |
| [#6595](https://github.com/ROCm/aiter/pull/6595) | [Triton/Gluon] [Config] Tune gfx1250 a16w16 GEMMs for Kimi K... | @erizheng-amd | open | 2026-10-15 | 2026-11-11 |
| [#7824](https://github.com/ROCm/aiter/pull/7824) | [HIP] fused_qknorm_idxrqknorm: write NVFP4 K/V/index-K cache... | @ganyi1996ppo | open | 2026-11-11 | 2026-11-11 |
| [#7826](https://github.com/ROCm/aiter/pull/7826) | [FlyDSL] NVFP4 sparse PA: prefill kernel (`minimax_m3_sparse... | @ganyi1996ppo | open | 2026-11-11 | 2026-11-11 |
| [#7809](https://github.com/ROCm/aiter/pull/7809) | [Plugin] Route DeepSeek-V4.1 decode-layer contracts (attn_pr... | @zhiding512 | draft | 2026-11-11 | 2026-11-11 |
| [#7526](https://github.com/ROCm/aiter/pull/7526) | [OPUS] [Build] Extract C++ code in generators to jinja templ... | @jbelloncastro | open | 2026-11-05 | 2026-11-11 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | draft | 2026-08-06 | 2026-11-11 |
| [#6843](https://github.com/ROCm/aiter/pull/6843) | [Triton/Gluon] : (GATED DELTA) Add RotatingBufferBench suppo... | @rahulbatra85 | draft | 2026-10-22 | 2026-11-11 |
| [#6839](https://github.com/ROCm/aiter/pull/6839) | [Triton/Gluon] : (UNIFIED ATTENTION) Add RotatingBufferBench... | @rahulbatra85 | open | 2026-10-22 | 2026-11-11 |
| [#6682](https://github.com/ROCm/aiter/pull/6682) | [Triton/Gluon] : (QUANT, CE AND TRANS) Add RotatingBufferBen... | @rahulbatra85 | open | 2026-10-19 | 2026-11-11 |
| [#7791](https://github.com/ROCm/aiter/pull/7791) | [OPUS] [RFC #7240] Route MLA sparse prefill where its two pu... | @zufayu | open | 2026-11-11 | 2026-11-11 |
| [#7651](https://github.com/ROCm/aiter/pull/7651) | [HIP] MHA v4: check Q scale backing only on the sparse path | @nsakkine | open | 2026-11-09 | 2026-11-11 |
| [#7818](https://github.com/ROCm/aiter/pull/7818) | [HIP] Mega-MHC: faster large-M prefill (split tail for any T... | @cpersson-amd | open | 2026-11-11 | 2026-11-11 |
| [#7169](https://github.com/ROCm/aiter/pull/7169) | [Config] Add Kimi-K3 gfx950 BF16 GEMM rows that beat 3% on e... | @kmahkonen | open | 2026-10-29 | 2026-11-11 |
| [#7659](https://github.com/ROCm/aiter/pull/7659) | [FlyDSL] [gfx1250] mxfp8 compute GEMM: 32x32 scale + bmm, DS... | @aoli26 | open | 2026-11-09 | 2026-11-11 |
| [#5677](https://github.com/ROCm/aiter/pull/5677) | [FlyDSL] [JIT] Adaptive decode Top-K kernel, dispatched by o... | @JH-Leon-KIM-AMD | open | 2026-09-18 | 2026-11-11 |
| [#6164](https://github.com/ROCm/aiter/pull/6164) | [FlyDSL] fp8_mqa_logits gfx942: add LDS-staged variant, use ... | @akii96 | open | 2026-10-06 | 2026-11-11 |
| [#6247](https://github.com/ROCm/aiter/pull/6247) | [CK] [FlyDSL] [JIT] gfx942 a8w4 MoE stage1 fp8 kernel | @vedenev-amd | open | 2026-10-08 | 2026-11-11 |
| [#7762](https://github.com/ROCm/aiter/pull/7762) | [Kimi-K3] Tune a8w8 bpreshuffle 6144x7168 prefill buckets on... | @jakki-amd | open | 2026-11-10 | 2026-11-11 |
| [#7326](https://github.com/ROCm/aiter/pull/7326) | [FlyDSL] QuickAllReduce INT4/INT6: fp32 divisor and adaptive... | @samremes | draft | 2026-11-02 | 2026-11-11 |
| [#7788](https://github.com/ROCm/aiter/pull/7788) | [FlyDSL] [CI] MegaMoEV2: one route plan for every path, shar... | @GwilliamHu | open | 2026-11-11 | 2026-11-11 |
| [#6277](https://github.com/ROCm/aiter/pull/6277) | [ASM] [HIP] [CI] [MLA] [Bugfix] Fix and optimize the gfx942 ... | @jonahbernard | open | 2026-10-08 | 2026-11-11 |
| [#6123](https://github.com/ROCm/aiter/pull/6123) | [FlyDSL] [CI] fp8 unified attention for gfx942 (Gemma-4) | @waqahmed-amd-fi | open | 2026-10-03 | 2026-11-11 |
| [#7822](https://github.com/ROCm/aiter/pull/7822) | [MoE] [Bugfix] Give stage 1 only the padding columns its sta... | @eppaneamd | draft | 2026-11-11 | 2026-11-11 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [Feature] Add the Kimi-K3 KDA per-channel decay gat... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-11-11 |
| [#7758](https://github.com/ROCm/aiter/pull/7758) | [ASM] Mha v4: shorter gfx950 hd128/hd256 prologue | @jcaraban | open | 2026-11-10 | 2026-11-11 |
| [#5409](https://github.com/ROCm/aiter/pull/5409) | [Triton/Gluon] Unified attention: opt-in prefill configs for... | @cpersson-amd | open | 2026-09-10 | 2026-11-11 |
| [#7807](https://github.com/ROCm/aiter/pull/7807) | [RFC #7240] Route the three attention entry points framework... | @zufayu | open | 2026-11-11 | 2026-11-11 |
| [#7469](https://github.com/ROCm/aiter/pull/7469) | [FlyDSL] PCIe-optimized Ulysses all-to-all | @vpietila-amd | draft | 2026-11-04 | 2026-11-11 |
| [#6502](https://github.com/ROCm/aiter/pull/6502) | [Triton/Gluon] [CI] Streamline Flash Attentions api | @micmelesse | open | 2026-10-13 | 2026-11-11 |
| [#6236](https://github.com/ROCm/aiter/pull/6236) | [FlyDSL] TP2 quick all-reduce through a passive xGMI relay | @samremes | open | 2026-10-07 | 2026-11-11 |
| [#7700](https://github.com/ROCm/aiter/pull/7700) | [FlyDSL] [Perf] pa_decode: gfx950 fused BF16 MTP4 verify til... | @fsx950223 | open | 2026-11-10 | 2026-11-11 |
| [#6866](https://github.com/ROCm/aiter/pull/6866) | [Triton/Gluon] Add hadamard_rotate to fused_rms_gated_mxfp4_... | @mjkvaak-amd | open | 2026-10-23 | 2026-11-11 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | [FlyDSL] [JIT] Add adaptive-blocked K5 prefill h-recurrence ... | @johannes-graner | open | 2026-09-21 | 2026-11-11 |
| [#7032](https://github.com/ROCm/aiter/pull/7032) | [Triton/Gluon] Triton Conv padding-mode support | @saeid-rostami | draft | 2026-10-27 | 2026-11-11 |
| [#7747](https://github.com/ROCm/aiter/pull/7747) | [Triton/Gluon] [Bugfix] [gfx1250] unified attention: scale f... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#7817](https://github.com/ROCm/aiter/pull/7817) | [Triton/Gluon] unified_attention: run causal=False on the gf... | @WhatGhost | open | 2026-11-11 | 2026-11-11 |
| [#7701](https://github.com/ROCm/aiter/pull/7701) | [FlyDSL] [Perf] pa_decode: gfx950 reducer issues all partiti... | @fsx950223 | open | 2026-11-10 | 2026-11-11 |
| [#5910](https://github.com/ROCm/aiter/pull/5910) | [fix] Make dropout-free varlen attention inference CUDA-grap... | @lauri9 | open | 2026-09-28 | 2026-11-11 |
| [#5996](https://github.com/ROCm/aiter/pull/5996) | [FlyDSL] [CI] FlyDSL QSA indexer scorer + sparse GQA | @SamiAario-AMD | open | 2026-09-30 | 2026-11-11 |
| [#7712](https://github.com/ROCm/aiter/pull/7712) | [Config] [Perf] gfx950: tune a8w8 bpreshuffle GEMM for Qwen3... | @zengleixin-amd | open | 2026-11-10 | 2026-11-11 |
| [#7650](https://github.com/ROCm/aiter/pull/7650) | [Triton/Gluon] [Perf] gfx950: tune gemm_a16w16 for Qwen3-Nex... | @zengleixin-amd | open | 2026-11-09 | 2026-11-11 |
| [#7718](https://github.com/ROCm/aiter/pull/7718) | [Triton/Gluon] [Perf] gfx950: tune the act_mul_and_fp8_group... | @zengleixin-amd | open | 2026-11-10 | 2026-11-11 |
| [#7819](https://github.com/ROCm/aiter/pull/7819) | [FlyDSL] route sequence-parallel reduce-scatter / all-gather... | @eppaneamd | draft | 2026-11-11 | 2026-11-11 |
| [#7391](https://github.com/ROCm/aiter/pull/7391) |  [Triton/Gluon] gfx950 a16w16: Stream-K for compute-bound sh... | @jamesbowley | draft | 2026-11-03 | 2026-11-11 |
| [#7444](https://github.com/ROCm/aiter/pull/7444) | [FlyDSL] FlyQuickAllReduce: reduce-scatter and all-gather mo... | @eppaneamd | draft | 2026-11-04 | 2026-11-11 |
| [#6830](https://github.com/ROCm/aiter/pull/6830) | [Triton/Gluon] [Kernel] Add an eight-row FP8 MQA logits path... | @iraj465 | open | 2026-10-22 | 2026-11-11 |
| [#6832](https://github.com/ROCm/aiter/pull/6832) | [Triton/Gluon] [Kernel] Reuse query quantization for large g... | @iraj465 | open | 2026-10-22 | 2026-11-11 |
| [#7745](https://github.com/ROCm/aiter/pull/7745) | [Triton/Gluon] [Perf] [gfx1250] gluon UA2D: BLOCK_M 256 only... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#7743](https://github.com/ROCm/aiter/pull/7743) | [Triton/Gluon] [Perf] [gfx1250] unified attention 3D: tuned ... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#7746](https://github.com/ROCm/aiter/pull/7746) | [Triton/Gluon] [Perf] [gfx1250] RMSNorm forward: 4 programs ... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#7658](https://github.com/ROCm/aiter/pull/7658) | [FlyDSL] [CI] [Bugfix] Run the a16w4 SiTUv2 MoE test in CI a... | @amd-mvarjoka | draft | 2026-11-09 | 2026-11-11 |
| [#7721](https://github.com/ROCm/aiter/pull/7721) | [CK] [Bugfix] MoE tuner: skip v2 stage-1 k_wave splits that ... | @eppaneamd | open | 2026-11-10 | 2026-11-11 |
| [#7567](https://github.com/ROCm/aiter/pull/7567) | [FlyDSL] [Bugfix] Fix MoE XCD swizzle on grids not divisible... | @eppaneamd | open | 2026-11-06 | 2026-11-11 |
| [#6920](https://github.com/ROCm/aiter/pull/6920) | [HIP] [Bugfix] Fix LDS races in HIP chunk_gated_delta_rule_f... | @eppaneamd | open | 2026-10-25 | 2026-11-11 |
| [#6912](https://github.com/ROCm/aiter/pull/6912) | [Triton/Gluon] KDA: accept cu_seqlens_cpu, upload varlen met... | @eppaneamd | open | 2026-10-25 | 2026-11-11 |
| [#7812](https://github.com/ROCm/aiter/pull/7812) | [FlyDSL] [Fix] gfx1250 paged FP8 MQA logits: read index rows... | @qichu-yun | open | 2026-11-11 | 2026-11-11 |
| [#7506](https://github.com/ROCm/aiter/pull/7506) | [Triton/Gluon] [CI] gfx950 fp8 varlen MHA forward for MLA pr... | @nsusanto | open | 2026-11-05 | 2026-11-11 |
| [#7681](https://github.com/ROCm/aiter/pull/7681) | [Triton/Gluon] mla_sparse_prefill: triton backend on gfx950,... | @eppaneamd | draft | 2026-11-09 | 2026-11-11 |
| [#7680](https://github.com/ROCm/aiter/pull/7680) | [Triton/Gluon] pa_prefill_sparse: single-pass gluon kernel f... | @eppaneamd | draft | 2026-11-09 | 2026-11-11 |
| [#6958](https://github.com/ROCm/aiter/pull/6958) | [HIP] [JIT] [MSA] nvfp4 index key cache for the MSA indexer:... | @sshlyapn | open | 2026-10-26 | 2026-11-11 |
| [#7157](https://github.com/ROCm/aiter/pull/7157) | [FlyDSL] [CI] Fuse the Kimi-K3 attention-residual aggregatio... | @vedenev-amd | draft | 2026-10-29 | 2026-11-11 |
| [#7820](https://github.com/ROCm/aiter/pull/7820) | [FlyDSL] gfx9 FP8 MoE: 64-bit expert offsets, clamp the SiLU... | @HaonanWang98 | open | 2026-11-11 | 2026-11-11 |
| [#7805](https://github.com/ROCm/aiter/pull/7805) | [FlyDSL] [AOT] Assign into FakeTensor slices without reachin... | @zhiding512 | open | 2026-11-11 | 2026-11-11 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM kernel... | @vedenev-amd | open | 2026-07-07 | 2026-11-11 |
| [#7691](https://github.com/ROCm/aiter/pull/7691) | [Perf] fused_moe: reuse a same-geometry tuned FlyDSL row for... | @ZhengGong-amd | open | 2026-11-10 | 2026-11-11 |
| [#7688](https://github.com/ROCm/aiter/pull/7688) | [Perf] fused_moe: cap the untuned block_m by rows per expert... | @ZhengGong-amd | draft | 2026-11-09 | 2026-11-11 |
| [#7561](https://github.com/ROCm/aiter/pull/7561) | [FlyDSL] [AOT] Fix mm out_dtype replay on torch 2.9.1 | @zhiding512 | open | 2026-11-06 | 2026-11-11 |
| [#7648](https://github.com/ROCm/aiter/pull/7648) | [FlyDSL] [CI] [Feature] Add quantized attention-output intra... | @ksikiric | draft | 2026-11-09 | 2026-11-11 |
| [#7690](https://github.com/ROCm/aiter/pull/7690) | [Perf] fused_moe: fall back to the 16384 tuned row at the 32... | @ZhengGong-amd | draft | 2026-11-10 | 2026-11-11 |
| [#7684](https://github.com/ROCm/aiter/pull/7684) | [FlyDSL] [Perf] fused_moe: use 16-row a16w4 kernels in the u... | @ZhengGong-amd | draft | 2026-11-09 | 2026-11-11 |
| [#7599](https://github.com/ROCm/aiter/pull/7599) | [Perf] fused_moe: CK 2-stage for gfx950 fp8 block-scale MoE ... | @ZhengGong-amd | open | 2026-11-07 | 2026-11-11 |
| [#6861](https://github.com/ROCm/aiter/pull/6861) | [FlyDSL] [MoE] Add optional per_slot_output for fused_moe | @kliuae | open | 2026-10-23 | 2026-11-11 |
| [#7088](https://github.com/ROCm/aiter/pull/7088) | [Triton/Gluon] [Perf] unified_attention: split KV by actual ... | @yuychang | open | 2026-10-28 | 2026-11-11 |
| [#7161](https://github.com/ROCm/aiter/pull/7161) | [HIP] [Bugfix] Include HIP bfloat16 header in MoE sorting | @iraj465 | open | 2026-10-29 | 2026-11-11 |
| [#7244](https://github.com/ROCm/aiter/pull/7244) | [Triton/Gluon] [Feature] unified_attention: support causal=F... | @yuychang | open | 2026-10-31 | 2026-11-11 |
| [#7151](https://github.com/ROCm/aiter/pull/7151) | [HIP] [JIT] [Perf] Add gfx950 mHC row finalization and packe... | @iraj465 | open | 2026-10-29 | 2026-11-11 |
| [#5918](https://github.com/ROCm/aiter/pull/5918) | [HIP] Add fused all_reduce_add; retune gfx950 all-reduce dis... | @cpersson-amd | open | 2026-09-28 | 2026-11-11 |
| [#7815](https://github.com/ROCm/aiter/pull/7815) | [Triton/Gluon] [QSA] Add qsa_select_paged_groups for row-sha... | @zovonoir | open | 2026-11-11 | 2026-11-11 |
| [#7606](https://github.com/ROCm/aiter/pull/7606) | [HIP] [JIT] [MoE] NVFP4 routed-expert MoE for gfx950 | @sshlyapn | open | 2026-11-07 | 2026-11-11 |
| [#7744](https://github.com/ROCm/aiter/pull/7744) | [Config] [gfx1250] gpt-oss prefill a8w4: 128x256x256, no clu... | @akao-amd | open | 2026-11-10 | 2026-11-11 |
| [#7698](https://github.com/ROCm/aiter/pull/7698) | [HIP] [FlyDSL] conv3d gfx1250: fold small-C convs, FlyDSL pr... | @huizzhan | open | 2026-11-10 | 2026-11-11 |
| [#6013](https://github.com/ROCm/aiter/pull/6013) | [CK] [CI] [Bugfix] Fix gfx942 FLAT candidates in ASM FMoE tu... | @yuzhouo7 | open | 2026-09-30 | 2026-11-11 |
| [#7816](https://github.com/ROCm/aiter/pull/7816) | [Recipe] Guarded M3 TP4 M16 MoE decode overlay with AgentX A... | @xytpai | draft | 2026-11-11 | 2026-11-11 |
| [#7377](https://github.com/ROCm/aiter/pull/7377) | Qsa index scorer/stage2 | @demonsan | draft | 2026-11-03 | 2026-11-11 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-11-11 |
| [#6689](https://github.com/ROCm/aiter/pull/6689) | feat(gemm_fusion): route sp_qkv_fused v1; keep a reference n... | @demonsan | open | 2026-10-19 | 2026-11-11 |
| [#7798](https://github.com/ROCm/aiter/pull/7798) | [HIP] [FlyDSL] Add OPUS FP4 indexer writer and shared BF16 G... | @junhaha666 | open | 2026-11-11 | 2026-11-11 |
| [#7813](https://github.com/ROCm/aiter/pull/7813) | [FlyDSL] M3 index score: NVFP4 decode scorer (`score_flydsl_... | @ganyi1996ppo | open | 2026-11-11 | 2026-11-11 |
| [#7814](https://github.com/ROCm/aiter/pull/7814) | [FlyDSL] M3 index score: NVFP4 prefill scorer (`score_prefil... | @ganyi1996ppo | open | 2026-11-11 | 2026-11-11 |
| [#7726](https://github.com/ROCm/aiter/pull/7726) | Dev/yadai prefill clean v1 | @yadaish | draft | 2026-11-10 | 2026-11-11 |
| [#7729](https://github.com/ROCm/aiter/pull/7729) | [Triton/Gluon] Sol-Attn: block pooling, routing and low-rank... | @nsakkine | open | 2026-11-10 | 2026-11-11 |
| [#6821](https://github.com/ROCm/aiter/pull/6821) | [HIP] [JIT] [Build] fused_norm_rope_att_rope_cast kernel | @yzhou103 | open | 2026-10-22 | 2026-11-11 |
| [#6755](https://github.com/ROCm/aiter/pull/6755) | [Triton/Gluon] gfx950 Gluon unified attention: mask stale V ... | @WhatGhost | open | 2026-10-21 | 2026-11-11 |
| [#7709](https://github.com/ROCm/aiter/pull/7709) | [FlyDSL] [Perf] pa_decode: gfx942 schedule tuning (K/V strea... | @fsx950223 | draft | 2026-11-10 | 2026-11-11 |
| [#7702](https://github.com/ROCm/aiter/pull/7702) | [ASM] [HIP] Build gfx1250 MLA v4 sparse prefill from in-tree... | @kaiyang-1 | open | 2026-11-10 | 2026-11-11 |
| [#7784](https://github.com/ROCm/aiter/pull/7784) | [ASM] [HIP] [JIT] [Perf] Replace gfx950 MLA v4 prefill 16mx8... | @kaiyang-1 | open | 2026-11-11 | 2026-11-11 |
| [#7768](https://github.com/ROCm/aiter/pull/7768) | [Triton/Gluon][gfx1250] gemm_a16w16: add workgroup clusters ... | @azaidy | draft | 2026-11-10 | 2026-11-11 |
| [#7332](https://github.com/ROCm/aiter/pull/7332) | [FlyDSL] [GFX1250] [MoE] Retune gfx1250 DSv4.1 EP4 a4w4 grou... | @Zzz9990 | open | 2026-11-02 | 2026-11-11 |
| [#7795](https://github.com/ROCm/aiter/pull/7795) | [FlyDSL] Cache gfx1250 decode MoE gather routes within each ... | @xytpai | draft | 2026-11-11 | 2026-11-11 |
| [#7810](https://github.com/ROCm/aiter/pull/7810) | [Comm] Prefetch gfx1250 TP4 PullQ4 peer loads; M3 prefill-se... | @xytpai | draft | 2026-11-11 | 2026-11-11 |
| [#7727](https://github.com/ROCm/aiter/pull/7727) | [FlyDSL] [Perf] Select gfx1250 long-row top-k from one sampl... | @lirui927 | draft | 2026-11-10 | 2026-11-11 |
| [#7493](https://github.com/ROCm/aiter/pull/7493) | [Tuner] Raise a GPU fault from the power-sampling pass | @rpoornac | open | 2026-11-05 | 2026-11-11 |
| [#7538](https://github.com/ROCm/aiter/pull/7538) | [CK] [JIT] [Feature] Add model-specific MXFP4 A4W4 tuning pr... | @DaiXindi-AMD | open | 2026-11-06 | 2026-11-11 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-11-11 |
| [#7699](https://github.com/ROCm/aiter/pull/7699) | [FlyDSL] MegaMoEV2: enable, tune and speed up small_m / larg... | @Yaowu-Xiong | open | 2026-11-10 | 2026-11-11 |
| [#6919](https://github.com/ROCm/aiter/pull/6919) | [FlyDSL] [JIT] Add Mamba-2 SSD chunked forward for RDNA3 and... | @kashif | open | 2026-10-25 | 2026-11-11 |
| [#7724](https://github.com/ROCm/aiter/pull/7724) | [FlyDSL] [Perf] gfx1250 gather_kv_b_proj: write FP8 K/V with... | @qichu-yun | open | 2026-11-10 | 2026-11-11 |
| [#5141](https://github.com/ROCm/aiter/pull/5141) | [CK] [FlyDSL] FP8 block-scale B-preshuffle GEMM and tuned Qw... | @RElbers | open | 2026-08-31 | 2026-11-11 |
| [#7431](https://github.com/ROCm/aiter/pull/7431) | [FlyDSL] [gfx1250] Optimize grouped MXFP4 native prefill GEM... | @yanguahe | open | 2026-11-04 | 2026-11-11 |
| [#7674](https://github.com/ROCm/aiter/pull/7674) | [FlyDSL] Add FP32 output to gfx950 skinny HGEMM | @xytpai | open | 2026-11-09 | 2026-11-11 |
| [#7619](https://github.com/ROCm/aiter/pull/7619) | [FlyDSL] gfx1250 PA decode: wider page-local softmax steps, ... | @zhiding512 | open | 2026-11-08 | 2026-11-11 |
| [#7548](https://github.com/ROCm/aiter/pull/7548) | [HIP] [FlyDSL] Port gfx1250 TDM HGEMM and source tuning spac... | @xytpai | open | 2026-11-06 | 2026-11-11 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | [FlyDSL] Fix the hardcoded die and CU counts in the FlyDSL k... | @RElbers | open | 2026-09-14 | 2026-11-11 |
| [#7808](https://github.com/ROCm/aiter/pull/7808) | custom all-reduce: MXFP8 mode for fused AR + RMSNorm + per-g... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#7011](https://github.com/ROCm/aiter/pull/7011) | [FlyDSL] [JIT] GEMM bf16 gfx942 | @damien-lejeune | open | 2026-10-27 | 2026-11-11 |
| [#7119](https://github.com/ROCm/aiter/pull/7119) | [FlyDSL] Fix gfx1250 GEMM output offset overflow | @chandankumr | open | 2026-10-29 | 2026-11-11 |
| [#7206](https://github.com/ROCm/aiter/pull/7206) | [FlyDSL] feat(flydsl pa_decode): expose can_use_flydsl_pa_de... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-11 |
| [#7269](https://github.com/ROCm/aiter/pull/7269) | [FlyDSL] Generalize gfx1250 BF16 wave query tiles | @zhiding512 | open | 2026-11-01 | 2026-11-11 |
| [#7319](https://github.com/ROCm/aiter/pull/7319) | [FlyDSL] Support independent output layouts in gfx1250 PA de... | @zhiding512 | open | 2026-11-02 | 2026-11-11 |
| [#7422](https://github.com/ROCm/aiter/pull/7422) | [FlyDSL] Add opt-in geometry-only PA decode partition prepar... | @zhiding512 | open | 2026-11-04 | 2026-11-11 |
| [#7423](https://github.com/ROCm/aiter/pull/7423) | [FlyDSL] [PA] Avoid unused arrival counters and direct-outpu... | @zhiding512 | open | 2026-11-04 | 2026-11-11 |
| [#7447](https://github.com/ROCm/aiter/pull/7447) | [FlyDSL] Generalize gfx1250 FP8 PA to two and three query ti... | @zhiding512 | open | 2026-11-04 | 2026-11-11 |
| [#7133](https://github.com/ROCm/aiter/pull/7133) | [Triton/Gluon] [MLA] gfx1250: write the asm MLA decode KV la... | @mqhc2020 | open | 2026-10-29 | 2026-11-11 |
| [#7529](https://github.com/ROCm/aiter/pull/7529) | [FlyDSL] [CI] [Kernel] Add a fused Kimi-K3 KDA target-verify... | @yuychang | open | 2026-11-05 | 2026-11-11 |
| [#6911](https://github.com/ROCm/aiter/pull/6911) | [FlyDSL] Preserve FP32 precision in GDN prepare inverse bloc... | @apinge | open | 2026-10-25 | 2026-11-11 |
| [#7076](https://github.com/ROCm/aiter/pull/7076) | [HIP] [FlyDSL] [JIT] GDN K5 opt: fix tuner BV override; add ... | @yicyang | open | 2026-10-28 | 2026-11-11 |
| [#7017](https://github.com/ROCm/aiter/pull/7017) | [FlyDSL] Add gfx942 FP4 paged MQA logits for decode and pref... | @akii96 | open | 2026-10-27 | 2026-11-11 |
| [#6828](https://github.com/ROCm/aiter/pull/6828) | [CK] [FlyDSL] [JIT] [Kernel] Add gfx950 4-wave INT8 bpreshuf... | @ksikiric | open | 2026-10-22 | 2026-11-11 |
| [#6853](https://github.com/ROCm/aiter/pull/6853) | [FlyDSL] [Bugfix] gfx950 A16W16: fix int32 C-offset overflow | @josh-schell-amd | open | 2026-10-23 | 2026-11-11 |
| [#6764](https://github.com/ROCm/aiter/pull/6764) | [FlyDSL] Add non-causal mode to multi-token PA decode | @rebklee | open | 2026-10-21 | 2026-11-11 |
| [#6810](https://github.com/ROCm/aiter/pull/6810) | [FlyDSL] FlyDSL FCA | @Boss2002n | open | 2026-10-21 | 2026-11-11 |
| [#5882](https://github.com/ROCm/aiter/pull/5882) | [FlyDSL] [MLA] DeepSeek-V4 fp8 MLA decode (v4 nm) in one Fly... | @AMD-yanfeiwang | open | 2026-09-27 | 2026-11-11 |
| [#6218](https://github.com/ROCm/aiter/pull/6218) | [CK] [FlyDSL] FlyDSL A4W4 decode GEMM for M<=16 on gfx950 | @johannes-graner | open | 2026-10-07 | 2026-11-11 |
| [#6605](https://github.com/ROCm/aiter/pull/6605) | [FlyDSL] [Perf] [gfx950] Swap A/B in the mxfp8 8-wave epilog... | @yangyuhuiling | open | 2026-10-16 | 2026-11-11 |
| [#5949](https://github.com/ROCm/aiter/pull/5949) | [FlyDSL] Add the NHD page-64 layout and a per-shape default ... | @samremes | open | 2026-09-29 | 2026-11-11 |
| [#6026](https://github.com/ROCm/aiter/pull/6026) | [FlyDSL] [CI] [Kernel] Add fused KDA decode kernels on gfx94... | @yuychang | open | 2026-10-01 | 2026-11-11 |
| [#5887](https://github.com/ROCm/aiter/pull/5887) | [FlyDSL] [PA] Extend pa decode tile to support Qlen8 and SWA... | @sammysun0711 | open | 2026-09-27 | 2026-11-11 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-11-11 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-11-11 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-11-11 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-11-11 |
| [#5358](https://github.com/ROCm/aiter/pull/5358) | [HIP] [FlyDSL] [JIT] Add a6w4 preshuffle GEMM from FlyDSL | @amd-satre | open | 2026-09-08 | 2026-11-11 |
| [#5244](https://github.com/ROCm/aiter/pull/5244) | [FlyDSL] Dev/ubench gemm | @yadaish | open | 2026-09-03 | 2026-11-11 |
| [#5260](https://github.com/ROCm/aiter/pull/5260) | [FlyDSL] Add tuned BF16 GEMM configs for GLM-5.2 decode shap... | @nehaprakriya | open | 2026-09-03 | 2026-11-11 |
| [#7806](https://github.com/ROCm/aiter/pull/7806) | fused_moe: take a caller presort on moe_sorting-layout pipel... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-11-11 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-11-11 |
| [#7154](https://github.com/ROCm/aiter/pull/7154) | [Triton/Gluon] [Config] Add gfx1150 Conv3D configs | @klin2024 | draft | 2026-10-29 | 2026-11-11 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-11-11 |
| [#7789](https://github.com/ROCm/aiter/pull/7789) | [Triton/Gluon] attn_res_gate: gfx1250 Gluon kernel that load... | @yanxuer-999 | draft | 2026-11-11 | 2026-11-11 |
| [#7297](https://github.com/ROCm/aiter/pull/7297) | [FlyDSL] [gfx950] Megamoe Ep Internode Impl | @james-huang09 | open | 2026-11-02 | 2026-11-11 |
| [#7786](https://github.com/ROCm/aiter/pull/7786) | [Triton/Gluon] unified_attention: mask the block-table read ... | @zijiecode | open | 2026-11-11 | 2026-11-11 |
| [#7497](https://github.com/ROCm/aiter/pull/7497) | [FlyDSL] [MoE] Intra-node EP dispatch/combine without the mo... | @yhl-amd | open | 2026-11-05 | 2026-11-11 |
| [#7496](https://github.com/ROCm/aiter/pull/7496) | [FlyDSL] EP intranode dispatch: skip negative / out-of-range... | @yhl-amd | open | 2026-11-05 | 2026-11-11 |
| [#7432](https://github.com/ROCm/aiter/pull/7432) | [HIP] perf(custom_ar): gfx1250 LL two-shot all-reduce for 1 ... | @zejunchen-zejun | open | 2026-11-04 | 2026-11-11 |
| [#7415](https://github.com/ROCm/aiter/pull/7415) | [HIP] [OPUS] [JIT] [MLA] gfx950 fp8 flat-row MTP decode: hos... | @nehmathe2 | open | 2026-11-03 | 2026-11-11 |
| [#7800](https://github.com/ROCm/aiter/pull/7800) | [Triton] MoE: add a batch-invariant MXFP4 MoE forward (moe_m... | @indianspeedster | draft | 2026-11-11 | 2026-11-11 |
| [#7802](https://github.com/ROCm/aiter/pull/7802) | op_benchmarks: time the mha_v4 Sol-Attn rows | @nsakkine | draft | 2026-11-11 | 2026-11-11 |
| [#7801](https://github.com/ROCm/aiter/pull/7801) | [HIP] perf(custom_ar): gfx1250 DCP merge: all-to-all and LSE... | @zejunchen-zejun | draft | 2026-11-11 | 2026-11-11 |
| [#7264](https://github.com/ROCm/aiter/pull/7264) | [FlyDSL] [JIT] optimize mega moe tp for small token | @binding7012 | open | 2026-11-01 | 2026-11-11 |
| [#4817](https://github.com/ROCm/aiter/pull/4817) | [HIP] fix: support torch.Stream in ctypes conversion | @chuyeh | open | 2026-08-18 | 2026-11-11 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQin-llm | open | 2026-08-05 | 2026-11-11 |
| [#7764](https://github.com/ROCm/aiter/pull/7764) | [JIT] Bind load_hip_runtime to the HIP runtime already loade... | @Ragua1 | open | 2026-11-10 | 2026-11-11 |
| [#7735](https://github.com/ROCm/aiter/pull/7735) | [Build] Prebuild opus fwd and five more mha_varlen_fwd varia... | @stefankoncarevic | open | 2026-11-10 | 2026-11-11 |
| [#6172](https://github.com/ROCm/aiter/pull/6172) | [ASM] [HIP] [JIT] [Hardware][MI300X] gfx942 asm GEMM with BF... | @jhartika-amd | open | 2026-10-06 | 2026-11-11 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] [JIT] jagged_dense_bmm_broadcast_add (MI300X, MI355... | @anhminhnguyenhoang | open | 2026-07-08 | 2026-11-11 |
| [#7632](https://github.com/ROCm/aiter/pull/7632) | [Triton/Gluon] [Bugfix] gfx1250 a4w4 MoE decode: store the o... | @hubertlu-tw | open | 2026-11-08 | 2026-11-11 |
| [#4690](https://github.com/ROCm/aiter/pull/4690) | [triton][gemm] fused_fp4_bmm_rope: fix two OOB reads when EV... | @lijinpei-amd | open | 2026-08-11 | 2026-11-11 |
| [#6485](https://github.com/ROCm/aiter/pull/6485) | [Perf] MoE a4w4 adaptive aux sort: accumulate into the calle... | @yuychang | open | 2026-10-13 | 2026-11-11 |
| [#6356](https://github.com/ROCm/aiter/pull/6356) | [CK] [Bugfix] Fix gfx1250 grouped MoE tuning and re-tune 18 ... | @jhinpan | open | 2026-10-10 | 2026-11-11 |
| [#7796](https://github.com/ROCm/aiter/pull/7796) | [FlyDSL] Fix and efficiently initialize A8W4 MoE stage1 padd... | @yzhou103 | open | 2026-11-11 | 2026-11-11 |
| [#6267](https://github.com/ROCm/aiter/pull/6267) | [FlyDSL] [Build] [GEMM] Add optional RDNA3 FlyDSL A8W8 backe... | @Yasei-no-otoko | open | 2026-10-08 | 2026-11-11 |
| [#5301](https://github.com/ROCm/aiter/pull/5301) | [FlyDSL] [Kernel] gfx950 FP8 sparse MLA prefill and decode (... | @JohnQin-llm | open | 2026-09-07 | 2026-11-11 |
| [#7797](https://github.com/ROCm/aiter/pull/7797) | [FlyDSL] [Fix] Cap gfx1250 PA tile kernels at 256 VGPRs | @lirui927 | draft | 2026-11-11 | 2026-11-11 |
| [#7794](https://github.com/ROCm/aiter/pull/7794) | Sol-Attn: gfx950 kernels | @nsakkine | draft | 2026-11-11 | 2026-11-11 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-11-11 |
| [#7793](https://github.com/ROCm/aiter/pull/7793) | [Triton] KDA: add batch_invariant flag to chunk_kimi_delta_a... | @indianspeedster | draft | 2026-11-11 | 2026-11-11 |
| [#6900](https://github.com/ROCm/aiter/pull/6900) | [FlyDSL] [Perf] MegaMoE: shorten EP8 prepare chain, coalesce... | @chushic | open | 2026-10-24 | 2026-11-11 |
| [#6638](https://github.com/ROCm/aiter/pull/6638) | [Config] Add gfx950 128-CU A4W4 GEMM tunings for Qwen3.8-27B... | @fyun89 | open | 2026-10-17 | 2026-11-11 |
| [#7345](https://github.com/ROCm/aiter/pull/7345) | [FlyDSL] perf(mega_moe): gfx1250 decode megakernel - dispatc... | @GwilliamHu | draft | 2026-11-02 | 2026-11-11 |
| [#7153](https://github.com/ROCm/aiter/pull/7153) | [FlyDSL] a16w4 gfx942: opt-in fp8 MFMA mode, and fallback ti... | @MHYangAMD | open | 2026-10-29 | 2026-11-11 |
| [#7152](https://github.com/ROCm/aiter/pull/7152) | [HIP] [Perf] Several rows per block in dynamic_per_token_sca... | @MHYangAMD | open | 2026-10-29 | 2026-11-11 |
| [#7792](https://github.com/ROCm/aiter/pull/7792) | [Triton/Gluon] [Feature] Fused all-reduce + RMSNorm + MXFP8 ... | @vgokhale | draft | 2026-11-11 | 2026-11-11 |
| [#7733](https://github.com/ROCm/aiter/pull/7733) | [HIP] [Perf] gfx1250: wave32 register top-k for biased sigmo... | @lirui927 | draft | 2026-11-10 | 2026-11-11 |
| [#6969](https://github.com/ROCm/aiter/pull/6969) | Feat/proxy model gfx1250 1023 | @kkHuang-amd | draft | 2026-10-26 | 2026-11-11 |
| [#7673](https://github.com/ROCm/aiter/pull/7673) | [FlyDSL] [gfx1250] Compute GEMM: fused MXFP8 epilogue; untun... | @yhl-amd | draft | 2026-11-09 | 2026-11-11 |
| [#7202](https://github.com/ROCm/aiter/pull/7202) | [Triton/Gluon] [Bugfix] gfx1250 a8w4 MoE decode: store the o... | @akao-amd | open | 2026-10-30 | 2026-11-11 |
| [#7586](https://github.com/ROCm/aiter/pull/7586) | [Bugfix] Keep gfx942 asm 1-stage fmoe off expert weights pas... | @yuychang | open | 2026-11-06 | 2026-11-11 |
| [#6712](https://github.com/ROCm/aiter/pull/6712) | [Test] Check that an A16W16 AOT replay cache serves a RUN_ON... | @yuychang | open | 2026-10-20 | 2026-11-11 |
| [#7783](https://github.com/ROCm/aiter/pull/7783) | [MLA] [RFC #7240] Route mla_sparse_prefill_v41 through the k... | @zhiding512 | open | 2026-11-11 | 2026-11-11 |
| [#6433](https://github.com/ROCm/aiter/pull/6433) | [Config] [Perf] Add gfx950 DSV4.1 Flash TP4 fused-shared-exp... | @kevin-mii | open | 2026-10-12 | 2026-11-11 |
| [#7771](https://github.com/ROCm/aiter/pull/7771) | [Triton/Gluon] [Feature] Fused MoE top-k combine + reduce-sc... | @vgokhale | open | 2026-11-10 | 2026-11-11 |
| [#7594](https://github.com/ROCm/aiter/pull/7594) | [Triton/Gluon] mha variant for varlen | @omuhamma | open | 2026-11-06 | 2026-11-11 |
| [#7770](https://github.com/ROCm/aiter/pull/7770) | [Triton/Gluon] Add gemm_a16w32: bf16 x fp32-weight GEMM (fp3... | @vgokhale | open | 2026-11-10 | 2026-11-11 |
| [#6998](https://github.com/ROCm/aiter/pull/6998) | [FlyDSL] Support wave32 (gfx1250) in the DCP decode top-k me... | @zejunchen-zejun | open | 2026-10-27 | 2026-11-11 |
| [#7196](https://github.com/ROCm/aiter/pull/7196) | [FlyDSL] MegaMoEV2: opt-in Stage2 + combine over SDMA with a... | @yangyuhuiling | open | 2026-10-30 | 2026-11-11 |
| [#6972](https://github.com/ROCm/aiter/pull/6972) | [FlyDSL] [Kernel] Add a DCP mailbox query gather and LSE com... | @xiaohuguo2023 | open | 2026-10-26 | 2026-11-11 |
| [#7065](https://github.com/ROCm/aiter/pull/7065) | [Triton/Gluon] [MoE] One-launch decode sort that also zeroes... | @micah-wil | open | 2026-10-28 | 2026-11-11 |
| [#7785](https://github.com/ROCm/aiter/pull/7785) | [Config] Add gfx950 BF16 GEMM tunings for Muse Spark | @zijiecode | open | 2026-11-11 | 2026-11-11 |
| [#6037](https://github.com/ROCm/aiter/pull/6037) | [HIP] [JIT] Add FP8 sparse MLA with fused BF16 I/O for gfx95... | @sumin-hong | open | 2026-10-01 | 2026-11-11 |
| [#6509](https://github.com/ROCm/aiter/pull/6509) | [Config] Add gfx950 bf16 GEMM tunings for Qwen3 480B shapes | @jbelloncastro | open | 2026-10-14 | 2026-11-11 |
| [#6676](https://github.com/ROCm/aiter/pull/6676) | [Triton/Gluon] gfx1151 gemm_a16w16: round before the activat... | @klin2024 | open | 2026-10-19 | 2026-11-11 |
| [#6697](https://github.com/ROCm/aiter/pull/6697) | [FlyDSL] [Perf] Fold the MXFP4 MoE sort into GEMM1 for GLM-5... | @chushic | open | 2026-10-20 | 2026-11-11 |
| [#6779](https://github.com/ROCm/aiter/pull/6779) | [Triton/Gluon] fused_qkv_split_qk_norm_rope_cache: MRoPE, sh... | @eky-amd | open | 2026-10-21 | 2026-11-11 |
| [#6812](https://github.com/ROCm/aiter/pull/6812) | [CI] Include tests/ directory in test sharding | @okakarpa | open | 2026-10-22 | 2026-11-11 |
| [#6816](https://github.com/ROCm/aiter/pull/6816) | [Triton/Gluon] [GFX1250] Add bench MOE EP with no-mega suppo... | @k50112113 | open | 2026-10-22 | 2026-11-11 |
| [#6867](https://github.com/ROCm/aiter/pull/6867) | [Triton/Gluon] Allow a right window with causal sliding-wind... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-11-11 |
| [#6868](https://github.com/ROCm/aiter/pull/6868) | [Triton/Gluon] Support non-causal right sliding window in Tr... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-11-11 |
| [#6973](https://github.com/ROCm/aiter/pull/6973) | [Triton/Gluon] [Config] Add gfx1151 Conv3D configs | @klin2024 | open | 2026-10-27 | 2026-11-11 |
| [#7044](https://github.com/ROCm/aiter/pull/7044) | [Config] [Perf] GLM-5.x gfx942 TP8 decode MoE: 2.3x at M = 1... | @phambinhfin | open | 2026-10-27 | 2026-11-11 |
| [#7231](https://github.com/ROCm/aiter/pull/7231) | [Triton/Gluon] [Perf] Tune the act_mul_and_fp8_group_quant l... | @phambinhfin | open | 2026-10-30 | 2026-11-11 |
| [#7625](https://github.com/ROCm/aiter/pull/7625) | [Triton/Gluon] [Config] gfx1151 sparse_mla_dsv4_train: forwa... | @klin2024 | open | 2026-11-08 | 2026-11-11 |
| [#7697](https://github.com/ROCm/aiter/pull/7697) | [Triton/Gluon] [gfx1250] gemm_a16w16: add compute_bound_clus... | @ahmed-bsod | open | 2026-11-10 | 2026-11-11 |
| [#7710](https://github.com/ROCm/aiter/pull/7710) | mega_mhc: dispatch raw FP32 fn to the ASM seam on gfx942 | @junhaha666 | open | 2026-11-10 | 2026-11-11 |
| [#7723](https://github.com/ROCm/aiter/pull/7723) | [Test] test_custom_allreduce_lamport: one PASS/FAIL line per... | @TennyWang1223 | open | 2026-11-10 | 2026-11-11 |
| [#7742](https://github.com/ROCm/aiter/pull/7742) | [Triton/Gluon] Cast strides to int64 in MHA backward kernels... | @WHITE-BLANK | open | 2026-11-10 | 2026-11-11 |
| [#7754](https://github.com/ROCm/aiter/pull/7754) | [HIP] Mha v4: run the K-smoothing gate as one HIP call | @jcaraban | open | 2026-11-10 | 2026-11-11 |
| [#7756](https://github.com/ROCm/aiter/pull/7756) | [ASM] [HIP] Mha v4: gfx950 hd256 MXFP8 kernel | @jcaraban | open | 2026-11-10 | 2026-11-11 |
| [#7772](https://github.com/ROCm/aiter/pull/7772) | [Config] [Perf] MiniMax-M3.1 MXFP8 GEMM tunings (gfx950) | @vgokhale | open | 2026-11-10 | 2026-11-11 |
| [#7686](https://github.com/ROCm/aiter/pull/7686) | [Triton/Gluon] [Perf] Tune MLA decode launch configuration f... | @hyjuunn | draft | 2026-11-09 | 2026-11-11 |
| [#7677](https://github.com/ROCm/aiter/pull/7677) | [Triton/Gluon] [gfx1250] unified_attention 2D: bound gathere... | @vgokhale | open | 2026-11-09 | 2026-11-11 |
| [#7675](https://github.com/ROCm/aiter/pull/7675) | [Triton/Gluon] [gfx1250] unified_attention: call tdm.async_g... | @vgokhale | open | 2026-11-09 | 2026-11-11 |
| [#7611](https://github.com/ROCm/aiter/pull/7611) | [ASM] [HIP] [MoE] Run the FLAT and EMSORT MXFP4 fmoe tiles o... | @mjkvaak-amd | open | 2026-11-07 | 2026-11-11 |
| [#7603](https://github.com/ROCm/aiter/pull/7603) | [Triton/Gluon] Add more support to mxfp8 attention | @lburzawa | open | 2026-11-07 | 2026-11-11 |
| [#7372](https://github.com/ROCm/aiter/pull/7372) | [HIP] [FlyDSL] conv3d gfx950: kernel-only timing in tuner an... | @huizzhan | draft | 2026-11-03 | 2026-11-11 |
| [#6550](https://github.com/ROCm/aiter/pull/6550) | [Triton/Gluon] Add fused Kimi-K3 KDA whole-layer ops (gfx950... | @karverma-amd | open | 2026-10-14 | 2026-11-10 |
| [#7782](https://github.com/ROCm/aiter/pull/7782) | [Triton] [Config] Add gfx1201 gemm_a16w16_persistent configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7769](https://github.com/ROCm/aiter/pull/7769) | [CK] [FlyDSL] [Perf] A4W4 MoE stage 2: LDS-staged scatter ep... | @vgokhale | open | 2026-11-10 | 2026-11-10 |
| [#7403](https://github.com/ROCm/aiter/pull/7403) | [Triton/Gluon] [gfx1250] Add a16w16 MoE GEMM | @xiaohuguo2023 | open | 2026-11-03 | 2026-11-11 |
| [#7189](https://github.com/ROCm/aiter/pull/7189) | tuned values for k3 | @omuhamma | draft | 2026-10-30 | 2026-11-10 |
| [#7773](https://github.com/ROCm/aiter/pull/7773) | [FlyDSL] [Perf] A16W4 MoE: optional fused bf16 shared expert | @vgokhale | open | 2026-11-10 | 2026-11-10 |
| [#7479](https://github.com/ROCm/aiter/pull/7479) | [Config] [Perf] Retune Llama-3.1-405B BF16 GEMM config for g... | @afriedri | open | 2026-11-04 | 2026-11-10 |
| [#7230](https://github.com/ROCm/aiter/pull/7230) | [HIP] [Tuning] [gfx950] Add MiniMax-M3 MXFP4 MoE configs for... | @afriedri | open | 2026-10-30 | 2026-11-10 |
| [#7362](https://github.com/ROCm/aiter/pull/7362) | [Triton/Gluon] (TDM/WMMA) grouped GEMM for gfx1250 | @NimitPtl | open | 2026-11-02 | 2026-11-10 |
| [#6784](https://github.com/ROCm/aiter/pull/6784) | [Triton/Gluon] gfx1250 pa decode update and tuning | @NimitPtl | open | 2026-10-21 | 2026-11-10 |
| [#7069](https://github.com/ROCm/aiter/pull/7069) | [Triton/Gluon] GDR decode: optional deferred spec-decode sta... | @zhentaocc | open | 2026-10-28 | 2026-11-10 |
| [#7111](https://github.com/ROCm/aiter/pull/7111) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-11-10 |
| [#7605](https://github.com/ROCm/aiter/pull/7605) | [FlyDSL] [Bugfix] gfx1250 grouped MoE GEMM: store the output... | @hubertlu-tw | open | 2026-11-07 | 2026-11-10 |
| [#7364](https://github.com/ROCm/aiter/pull/7364) | [Triton/Gluon] [gfx1250] Add WG cluster stream-k GEMM `gemm_... | @xiaohuguo2023 | open | 2026-11-02 | 2026-11-10 |
| [#7766](https://github.com/ROCm/aiter/pull/7766) | [Triton/Gluon] [gfx1250] unified_attention 3D: causal-mask o... | @michael604work | draft | 2026-11-10 | 2026-11-10 |
| [#7720](https://github.com/ROCm/aiter/pull/7720) | [JIT] [Bugfix] Config merge: catch live duplicates that diff... | @eppaneamd | open | 2026-11-10 | 2026-11-10 |
| [#7360](https://github.com/ROCm/aiter/pull/7360) | [Triton/Gluon] [Perf] [KDA] Optimize the gfx950 FlashKDA pre... | @waqahmed-amd-fi | draft | 2026-11-02 | 2026-11-10 |
| [#7282](https://github.com/ROCm/aiter/pull/7282) | [Triton] gfx1150: add gemm_a8w8_preshuffled configs (int8) | @klin2024 | draft | 2026-11-01 | 2026-11-10 |
| [#7518](https://github.com/ROCm/aiter/pull/7518) | [Triton/Gluon] Cast strides to int64 in MHA prefill attn_fwd... | @WHITE-BLANK | open | 2026-11-05 | 2026-11-10 |
| [#7361](https://github.com/ROCm/aiter/pull/7361) | [HIP] [CK] [aiter] Clamp FP8 per_Token / per_Tensor SiLU bef... | @jatseng-ai | open | 2026-11-02 | 2026-11-10 |
| [#7682](https://github.com/ROCm/aiter/pull/7682) | [Triton/Gluon] Nimit/pa decode tensor desc | @NimitPtl | open | 2026-11-09 | 2026-11-10 |
| [#7582](https://github.com/ROCm/aiter/pull/7582) | [Config] [Perf] Add DeepSeek-V4.1-Flash EP8 MXFP4 (a4w4) fus... | @maslan-coop26 | open | 2026-11-06 | 2026-11-10 |
| [#7757](https://github.com/ROCm/aiter/pull/7757) | [Triton/Gluon] bench_sage: hd256 producers for mha4_mxfp8 | @jcaraban | open | 2026-11-10 | 2026-11-10 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [JIT] [gfx942] Optimize long-context FMHA with s... | @amd-yashagar | open | 2026-09-16 | 2026-11-10 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#7581](https://github.com/ROCm/aiter/pull/7581) | [Config] [Perf] Retune DeepSeek-V4.1-Flash EP4 MXFP4 (a4w4) ... | @maslan-coop26 | open | 2026-11-06 | 2026-11-10 |
| [#7277](https://github.com/ROCm/aiter/pull/7277) | [Triton/Gluon] MHA fp8 prefill: run the fp16 kernel on archs... | @Ragua1 | open | 2026-11-01 | 2026-11-10 |
| [#6728](https://github.com/ROCm/aiter/pull/6728) | [Triton/Gluon] : (MoE) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-10-20 | 2026-11-10 |
| [#7752](https://github.com/ROCm/aiter/pull/7752) | [Perf] Retune gfx942 Qwen3.8-27B a8w8 blockscale decode rows... | @phambinhfin | draft | 2026-11-10 | 2026-11-10 |
| [#7750](https://github.com/ROCm/aiter/pull/7750) | [Bugfix] Fix wrong GLM-5 FP8 MoE output on gfx942 at 9-16 to... | @phambinhfin | draft | 2026-11-10 | 2026-11-10 |
| [#7028](https://github.com/ROCm/aiter/pull/7028) | [Triton/Gluon] Updates to causal_conv1d_split_qkv kernel | @omuhamma | open | 2026-10-27 | 2026-11-10 |
| [#7763](https://github.com/ROCm/aiter/pull/7763) | [Triton] [Config] Add gfx1151 mla_decode_rope config | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7516](https://github.com/ROCm/aiter/pull/7516) | [Triton/Gluon] Add gfx942 FP8 head-dim-256 MHA config | @phambinhfin | open | 2026-11-05 | 2026-11-10 |
| [#7476](https://github.com/ROCm/aiter/pull/7476) | [Triton/Gluon] [Perf] Tune MLA decode launch configuration f... | @hyjuunn | open | 2026-11-04 | 2026-11-10 |
| [#6908](https://github.com/ROCm/aiter/pull/6908) | [Triton/Gluon] gfx942: A16W4 (bf16 x MXFP4) MoE GEMM with v_... | @ishara0925 | open | 2026-10-25 | 2026-11-10 |
| [#6199](https://github.com/ROCm/aiter/pull/6199) | [Triton/Gluon] [gfx942] Support fp8 KV caches and fp8 dots i... | @jin-amd | open | 2026-10-07 | 2026-11-10 |
| [#7053](https://github.com/ROCm/aiter/pull/7053) | [FlyDSL] [Bugfix] gfx950 A16W16: reduce split-K and slice-K ... | @AndreasKaratzas | draft | 2026-10-28 | 2026-11-10 |
| [#7508](https://github.com/ROCm/aiter/pull/7508) | [CI] [DO NOT MERGE] [TEST] Try amd runtime on AITER toolkit ... | @gyohuangxin | open | 2026-11-05 | 2026-11-10 |
| [#7761](https://github.com/ROCm/aiter/pull/7761) | [FlyDSL] Fuse a two-norm residual boundary into INT4 QuickRe... | @amd-mghanimi | draft | 2026-11-10 | 2026-11-10 |
| [#7629](https://github.com/ROCm/aiter/pull/7629) | [Triton/Gluon] fused_clamp_act_mul: Do not recompile per row... | @eppaneamd | open | 2026-11-08 | 2026-11-10 |
| [#7436](https://github.com/ROCm/aiter/pull/7436) | [HIP] [CK] [FlyDSL] SwiGLU-step activation and exact FP8 blo... | @akii96 | open | 2026-11-04 | 2026-11-10 |
| [#7556](https://github.com/ROCm/aiter/pull/7556) | [FlyDSL] [QSA] Sparse prefill attention on gfx950: union and... | @eppaneamd | open | 2026-11-06 | 2026-11-10 |
| [#7736](https://github.com/ROCm/aiter/pull/7736) | [JIT] [Bugfix] Exclude FP8 kernels from BF16 varlen attentio... | @lauri9 | draft | 2026-11-10 | 2026-11-10 |
| [#6363](https://github.com/ROCm/aiter/pull/6363) | [Config] [Perf] Add DeepSeek-V4.1-Flash TP4 A8W4 MoE rows fo... | @amd-pedghazi | draft | 2026-10-10 | 2026-11-10 |
| [#5211](https://github.com/ROCm/aiter/pull/5211) | [ASM] [HIP] fix(mla): mark bf16 mla_pfl prefill CSV/lookup a... | @amd-yashagar | open | 2026-09-02 | 2026-11-10 |
| [#7607](https://github.com/ROCm/aiter/pull/7607) | [Triton/Gluon] [gfx1250] MLA decode: non-power-of-2 splits, ... | @justinrosner | open | 2026-11-07 | 2026-11-10 |
| [#7749](https://github.com/ROCm/aiter/pull/7749) | [Triton/Gluon] [Config] [gfx950] unified_attention: 128-CU s... | @mpashkovskii | draft | 2026-11-10 | 2026-11-10 |
| [#7399](https://github.com/ROCm/aiter/pull/7399) | [ASM] [HIP] gfx942 mha bwd: hd192 / hd192_128 pssk kernels (... | @slippedJim | draft | 2026-11-03 | 2026-11-10 |
| [#7584](https://github.com/ROCm/aiter/pull/7584) | [HIP] [Feature] Add group/varlen and sliding-window support ... | @JingPhil | open | 2026-11-06 | 2026-11-10 |
| [#7566](https://github.com/ROCm/aiter/pull/7566) | [Triton/Gluon] [gfx950] One query block per short sequence; ... | @amd-mghanimi | draft | 2026-11-06 | 2026-11-10 |
| [#7172](https://github.com/ROCm/aiter/pull/7172) | [MoE] Skip unused intermediate allocation for fused stage-1 ... | @iraj465 | open | 2026-10-29 | 2026-11-10 |
| [#7164](https://github.com/ROCm/aiter/pull/7164) | [HIP] Fix ambiguous HIP error helper lookup in CK-free shim | @iraj465 | open | 2026-10-29 | 2026-11-10 |
| [#7181](https://github.com/ROCm/aiter/pull/7181) | [HIP] [JIT] [Perf] Speed up gfx950 mHC decode with Gram stat... | @iraj465 | open | 2026-10-30 | 2026-11-10 |
| [#7211](https://github.com/ROCm/aiter/pull/7211) | [Triton/Gluon] [Perf] Use complete split-loop bounds and tun... | @iraj465 | open | 2026-10-30 | 2026-11-10 |
| [#7564](https://github.com/ROCm/aiter/pull/7564) | [Triton/Gluon] gfx950: add opt-in ping-pong Gluon kernel for... | @nidal567 | open | 2026-11-06 | 2026-11-10 |
| [#7630](https://github.com/ROCm/aiter/pull/7630) | [Triton/Gluon] Add arch_info.is_cdna3() | @phambinhfin | open | 2026-11-08 | 2026-11-10 |
| [#7741](https://github.com/ROCm/aiter/pull/7741) | Fix/jit runtime arch fullgraph | @lauri9 | draft | 2026-11-10 | 2026-11-10 |
| [#7740](https://github.com/ROCm/aiter/pull/7740) | [Triton] [Config] Add gfx1151 grouped GEMM (gmm / ptgmm / np... | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7738](https://github.com/ROCm/aiter/pull/7738) | [Triton] [Config] Add gfx1151 extend_attention config | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7573](https://github.com/ROCm/aiter/pull/7573) | [HIP] [JIT] gfx1250 Mega-MHC: XCD-local and clustered split ... | @junhaha666 | open | 2026-11-06 | 2026-11-10 |
| [#7225](https://github.com/ROCm/aiter/pull/7225) | [Triton/Gluon] KDA packed decode: accept the fused conv1d we... | @eppaneamd | open | 2026-10-30 | 2026-11-10 |
| [#7657](https://github.com/ROCm/aiter/pull/7657) | [Tuner] fmoe FlyDSL: random routing for v2 tuning data, and ... | @cpersson-amd | open | 2026-11-09 | 2026-11-10 |
| [#7656](https://github.com/ROCm/aiter/pull/7656) | [DSv4.1] gfx950 FP8 fused_moe: retune TP4 prefill rows (toke... | @cpersson-amd | open | 2026-11-09 | 2026-11-10 |
| [#7734](https://github.com/ROCm/aiter/pull/7734) | [Triton] [Config] Add gfx1201 gemm_a16w16_atomic configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7732](https://github.com/ROCm/aiter/pull/7732) | [Triton][MoE] Add a16w16 Triton stages to the fused_moe 2-st... | @amd-mghanimi | draft | 2026-11-10 | 2026-11-10 |
| [#4549](https://github.com/ROCm/aiter/pull/4549) | [FlyDSL] Fused online Hadamard rotation + MXFP4 quantization... | @jiangyon-amd | open | 2026-08-04 | 2026-11-10 |
| [#7663](https://github.com/ROCm/aiter/pull/7663) | [Triton/Gluon] [gfx1250] DSv4.1 router GEMM (N=384, K=5120):... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#6696](https://github.com/ROCm/aiter/pull/6696) | [HIP] [OPUS] Add Blockscale_mxfp8 OPUS GEMM | @Fyzyukk | open | 2026-10-20 | 2026-11-10 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-11-10 |
| [#7722](https://github.com/ROCm/aiter/pull/7722) | [Triton/Gluon] [GFX12] MLA decode: partitioned-LDS kernel fo... | @Dewei-Wang-sh | draft | 2026-11-10 | 2026-11-10 |
| [#7480](https://github.com/ROCm/aiter/pull/7480) | [HIP] [CK] [Tuner] Sample package power by CUDA graph replay | @rpoornac | open | 2026-11-04 | 2026-11-10 |
| [#5899](https://github.com/ROCm/aiter/pull/5899) | [FlyDSL] [gfx1250] MegaMoE: stage-1 fused kernel for DSV4.1 ... | @XingerZhu | open | 2026-09-28 | 2026-11-10 |
| [#6175](https://github.com/ROCm/aiter/pull/6175) | [FlyDSL] HSTU Backward performance improvement | @damien-lejeune | draft | 2026-10-06 | 2026-11-10 |
| [#7547](https://github.com/ROCm/aiter/pull/7547) | perf(flydsl): route the gfx1250 TP prefill MoE in one launch | @lirui927 | draft | 2026-11-06 | 2026-11-10 |
| [#7543](https://github.com/ROCm/aiter/pull/7543) | perf(flydsl): fold the gfx1250 TP MoE route into the activat... | @lirui927 | draft | 2026-11-06 | 2026-11-10 |
| [#7449](https://github.com/ROCm/aiter/pull/7449) | [Perf] Let the consumer finish a gfx1250 PTPC split-K GEMM | @lirui927 | draft | 2026-11-04 | 2026-11-10 |
| [#7408](https://github.com/ROCm/aiter/pull/7408) | [WIP] perf(gfx1250): integrate MiniMax-M3 fusion stack | @lirui927 | draft | 2026-11-03 | 2026-11-10 |
| [#7401](https://github.com/ROCm/aiter/pull/7401) | feat(flydsl): fuse sparse PA output quantization | @lirui927 | draft | 2026-11-03 | 2026-11-10 |
| [#7396](https://github.com/ROCm/aiter/pull/7396) | [HIP][Triton/Gluon] gfx1250 decode all-reduce + RMSNorm (+ F... | @lirui927 | draft | 2026-11-03 | 2026-11-10 |
| [#7445](https://github.com/ROCm/aiter/pull/7445) | perf(custom-ar): drop the gfx1250 fused AR final barrier | @lirui927 | draft | 2026-11-04 | 2026-11-10 |
| [#7714](https://github.com/ROCm/aiter/pull/7714) | [FlyDSL] Add hc_seam: fused hyper-connection gated-residual ... | @johannes-graner | draft | 2026-11-10 | 2026-11-10 |
| [#7576](https://github.com/ROCm/aiter/pull/7576) | [HIP] [Bugfix] sample: Map exponential's top uniform bucket ... | @syang-genai | open | 2026-11-06 | 2026-11-10 |
| [#7430](https://github.com/ROCm/aiter/pull/7430) | [HIP] [FlyDSL] [Feature] [Perf] DeepSeek V4.1: MXFP8 dual RM... | @yzhou103 | open | 2026-11-04 | 2026-11-10 |
| [#6959](https://github.com/ROCm/aiter/pull/6959) | [Config] Add Kimi-K3 MI355X GEMM tuning tables | @aryatsc | open | 2026-10-26 | 2026-11-10 |
| [#7637](https://github.com/ROCm/aiter/pull/7637) | [Triton/Gluon] gemm_a16w16_atomic: fix wrong results when th... | @klin2024 | open | 2026-11-09 | 2026-11-10 |
| [#6124](https://github.com/ROCm/aiter/pull/6124) | [Triton/Gluon] [Bugfix] Guard SiLU backward on unsupported a... | @DaiXindi-AMD | open | 2026-10-03 | 2026-11-10 |
| [#7707](https://github.com/ROCm/aiter/pull/7707) | [Triton] [Config] Add gfx1150 ff_a16w16_fused configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7703](https://github.com/ROCm/aiter/pull/7703) | [Triton] [Config] Add gfx1151 gemm_a16w16_persistent configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#6822](https://github.com/ROCm/aiter/pull/6822) | [Triton/Gluon] [ASM] [HIP] MHA v4 sparsified online (sol) at... | @nsakkine | draft | 2026-10-22 | 2026-11-10 |
| [#7492](https://github.com/ROCm/aiter/pull/7492) | [Triton] [Config] gfx1201 gemm_a16w16: shape-specific config... | @klin2024 | draft | 2026-11-05 | 2026-11-10 |
| [#7378](https://github.com/ROCm/aiter/pull/7378) | [Triton] [Config] Add gfx1201 gemm_a16w16 config | @klin2024 | draft | 2026-11-03 | 2026-11-10 |
| [#7502](https://github.com/ROCm/aiter/pull/7502) | [Triton] [Config] Add gfx1201 batched_gemm_a16w16 configs | @klin2024 | draft | 2026-11-05 | 2026-11-10 |
| [#7577](https://github.com/ROCm/aiter/pull/7577) | [Triton] [Config] Add gfx1201 gemm_a16w4 configs | @klin2024 | draft | 2026-11-06 | 2026-11-10 |
| [#7704](https://github.com/ROCm/aiter/pull/7704) | [Triton] [Config] Add gfx1150 gemm_a16w16_atomic configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7705](https://github.com/ROCm/aiter/pull/7705) | [Triton] [Config] Add gfx1150 fused_reduce_add_rmsnorm confi... | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#6905](https://github.com/ROCm/aiter/pull/6905) | [Triton/Gluon] [gfx1250] Fused GDN decode for Qwen3.5/3.8 on... | @ahmed-bsod | open | 2026-10-24 | 2026-11-10 |
| [#7387](https://github.com/ROCm/aiter/pull/7387) | [HIP] [OPUS] Add OPUS GEMM BlockScale_Mxfp8 GEMM for M <=102... | @Fyzyukk | open | 2026-11-03 | 2026-11-10 |
| [#6397](https://github.com/ROCm/aiter/pull/6397) | Use the FlyDSL BF16 GEMM by default for large untuned gfx125... | @jhinpan | open | 2026-10-11 | 2026-11-10 |
| [#7136](https://github.com/ROCm/aiter/pull/7136) | [CK] [CI] [Bugfix] Fix CK-Tile MXFP4 MoE stage1 split-k for ... | @RuibinCheung | open | 2026-10-29 | 2026-11-10 |
| [#7245](https://github.com/ROCm/aiter/pull/7245) | [HIP] [Perf] MLA: Run 96-head FP8 decode natively at qlen 7–... | @yuychang | open | 2026-10-31 | 2026-11-10 |
| [#6260](https://github.com/ROCm/aiter/pull/6260) | [OPUS] [FlyDSL] [JIT] [Bugfix] Fix metadata-only setup.py an... | @yuychang | draft | 2026-10-08 | 2026-11-10 |
| [#7486](https://github.com/ROCm/aiter/pull/7486) | [FlyDSL] [MoE] a16wmix gemm2 reduce epilog: skip sort pad se... | @gbyu-amd | open | 2026-11-05 | 2026-11-10 |
| [#7693](https://github.com/ROCm/aiter/pull/7693) | [FlyDSL] Add static-ring BF16 projection GEMM for gfx950 | @xytpai | draft | 2026-11-10 | 2026-11-10 |
| [#7107](https://github.com/ROCm/aiter/pull/7107) | [Triton/Gluon] [gfx1250] Fused GDN speculative-verify step o... | @ahmed-bsod | open | 2026-10-28 | 2026-11-10 |
| [#7653](https://github.com/ROCm/aiter/pull/7653) | [HIP] [Bugfix] mxfp4_moe_sort: keep the last row's tail scal... | @jiangyon-amd | open | 2026-11-09 | 2026-11-10 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-11-10 |
| [#5336](https://github.com/ROCm/aiter/pull/5336) | [HIP] [Bugfix] Fix gfx90a module_custom builds by guarding F... | @Mazukiri | open | 2026-09-08 | 2026-11-10 |
| [#5788](https://github.com/ROCm/aiter/pull/5788) | [HIP] [JIT] Topk index score minimax m3 | @demonsan | open | 2026-09-23 | 2026-11-10 |
| [#6016](https://github.com/ROCm/aiter/pull/6016) | [CK] [CI] [Bugfix] Align FMoE tuning token buckets with runt... | @yuzhouo7 | open | 2026-09-30 | 2026-11-10 |
| [#6909](https://github.com/ROCm/aiter/pull/6909) | [ASM] [gfx942] Use AI-tuned FP8 blockscale GEMM code objects | @feifei14119 | open | 2026-10-25 | 2026-11-10 |
| [#6914](https://github.com/ROCm/aiter/pull/6914) | [FlyDSL] Match ep_fused=1 grouped MoE config rows after the ... | @Boss2002n | open | 2026-10-25 | 2026-11-10 |
| [#6915](https://github.com/ROCm/aiter/pull/6915) | [Config] Tune gfx1250 grouped MoE for Qwen3.5-35B-A3B TP4 an... | @Boss2002n | open | 2026-10-25 | 2026-11-10 |
| [#6337](https://github.com/ROCm/aiter/pull/6337) | [Triton/Gluon] Restructure Unified Attention Kernel (merging... | @cagrikymk | open | 2026-10-09 | 2026-11-10 |
| [#7233](https://github.com/ROCm/aiter/pull/7233) | [Config] [Perf] Add gfx942 a8w8 blockscale B-preshuffle rows... | @phambinhfin | open | 2026-10-30 | 2026-11-10 |
| [#7621](https://github.com/ROCm/aiter/pull/7621) | [ASM] Fix LDS races in gfx950 FP8 QH16 qseqlen2 MLA decode | @AndreasKaratzas | open | 2026-11-08 | 2026-11-10 |
| [#7623](https://github.com/ROCm/aiter/pull/7623) | [ASM] Fix MFMA operand race in gfx950 FP8 QH16 qseqlen4 v3 M... | @AndreasKaratzas | open | 2026-11-08 | 2026-11-10 |
| [#7636](https://github.com/ROCm/aiter/pull/7636) | [CI] CI: auto-update split test times | @aiter-gh-app[bot] | open | 2026-11-09 | 2026-11-10 |
| [#7640](https://github.com/ROCm/aiter/pull/7640) | [HIP] fix(moe_sorting): pad ids name the tensor's height, no... | @xysheng-AMD | open | 2026-11-09 | 2026-11-10 |
| [#7683](https://github.com/ROCm/aiter/pull/7683) | [Triton/Gluon] [GFX950] Unified Attention Improve SW masking | @cagrikymk | open | 2026-11-09 | 2026-11-10 |
| [#6986](https://github.com/ROCm/aiter/pull/6986) | [Triton/Gluon] batched_gemm_bf16: tile-major grid on gfx1151 | @klin2024 | open | 2026-10-27 | 2026-11-10 |
| [#7072](https://github.com/ROCm/aiter/pull/7072) | [Triton/Gluon] [Config] Add gfx1150 fused_indexed_gated_resi... | @klin2024 | open | 2026-10-28 | 2026-11-10 |
| [#7249](https://github.com/ROCm/aiter/pull/7249) | [Triton/Gluon] Add gfx1151 gemm_a16w4 configs | @klin2024 | open | 2026-10-31 | 2026-11-10 |
| [#7071](https://github.com/ROCm/aiter/pull/7071) | [Triton/Gluon] [Config] Add gfx1150 fused_sigmoid_mul config | @klin2024 | open | 2026-10-28 | 2026-11-10 |
| [#7078](https://github.com/ROCm/aiter/pull/7078) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w16_gated DEFAUL... | @klin2024 | open | 2026-10-28 | 2026-11-10 |
| [#7612](https://github.com/ROCm/aiter/pull/7612) | [Bugfix] MHA varlen forward: copy inputs with a zero stride ... | @AndreasKaratzas | open | 2026-11-07 | 2026-11-10 |
| [#7614](https://github.com/ROCm/aiter/pull/7614) | [Triton/Gluon] [Config] [Perf] Tune gfx950 FP8 blockscale se... | @XinyuJiangCMU | open | 2026-11-07 | 2026-11-10 |
| [#7022](https://github.com/ROCm/aiter/pull/7022) | [Triton/Gluon] fp8_mqa_logits: Do not recompile per batch si... | @eppaneamd | open | 2026-10-27 | 2026-11-10 |
| [#7322](https://github.com/ROCm/aiter/pull/7322) | [Build] Ci/test marker classification | @gyohuangxin | draft | 2026-11-02 | 2026-11-10 |
| [#7689](https://github.com/ROCm/aiter/pull/7689) | [Triton] [Config] Add gfx1151 fused_reduce_add_rmsnorm confi... | @klin2024 | draft | 2026-11-09 | 2026-11-09 |
| [#7687](https://github.com/ROCm/aiter/pull/7687) | [Triton] [Config] Add gfx1151 ff_a16w16_fused configs | @klin2024 | draft | 2026-11-09 | 2026-11-09 |
| [#7678](https://github.com/ROCm/aiter/pull/7678) | [Triton/Gluon] [gfx1250] fused_qk_norm_mrope_cache: A8K4V8 c... | @vgokhale | draft | 2026-11-09 | 2026-11-09 |
| [#7676](https://github.com/ROCm/aiter/pull/7676) | [Triton/Gluon] [gfx1250] fused_qk_norm_mrope_cache: fp8 KV c... | @vgokhale | open | 2026-11-09 | 2026-11-09 |
| [#6932](https://github.com/ROCm/aiter/pull/6932) | [Config] [Perf] Add DSV4 EP8 MXFP4 (a4w4) fused-MoE rows for... | @jbelofamd | open | 2026-10-26 | 2026-11-09 |
| [#6927](https://github.com/ROCm/aiter/pull/6927) | [HIP] [Perf] gfx950 bf16 sparse prefill (H > 32): 4 waves, t... | @jbelofamd | open | 2026-10-26 | 2026-11-09 |
| [#7591](https://github.com/ROCm/aiter/pull/7591) | [Triton/Gluon] GEMM: compute GRID_MN at runtime instead of a... | @cagrikymk | open | 2026-11-06 | 2026-11-09 |
| [#7679](https://github.com/ROCm/aiter/pull/7679) | [FlyDSL][gfx1250] moe_topk_route_quant_prefill: TDM gather p... | @vgokhale | open | 2026-11-09 | 2026-11-09 |
| [#5846](https://github.com/ROCm/aiter/pull/5846) | [CK] [CI] [JIT] [Tuning] Per-candidate faults, selection pro... | @amd-bartgips | open | 2026-09-25 | 2026-11-09 |
| [#7580](https://github.com/ROCm/aiter/pull/7580) | [Tune] GLM-5 MQA logits: retune with clean_logits=False, add... | @amd-sriram | draft | 2026-11-06 | 2026-11-09 |
| [#6637](https://github.com/ROCm/aiter/pull/6637) | [Triton/Gluon] : (ATTN) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-10-17 | 2026-11-09 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | [Triton/Gluon] Enable gfx1201 BF16 G1U1 MoE large-M path and... | @keneoneth | open | 2026-08-27 | 2026-11-09 |
| [#7589](https://github.com/ROCm/aiter/pull/7589) | [CK] [Bugfix] Give every GPU_ARCHS arch its own ck2stages Mo... | @aarushjain29 | open | 2026-11-06 | 2026-11-09 |
| [#7474](https://github.com/ROCm/aiter/pull/7474) | [MHA] Fix flash_attn_varlen_func with block_table (paged KV) | @AndreasKaratzas | open | 2026-11-04 | 2026-11-09 |
| [#7091](https://github.com/ROCm/aiter/pull/7091) | [CK] Check fmoe tuning candidates and run_config results aga... | @RElbers | open | 2026-10-28 | 2026-11-09 |
| [#6742](https://github.com/ROCm/aiter/pull/6742) | [HIP] [JIT] [Kernel] Add HipKittens block-FP8 MoE for gfx950 | @willhu-jpg | open | 2026-10-20 | 2026-11-09 |
| [#7188](https://github.com/ROCm/aiter/pull/7188) | Tune gfx1250 A4W4 MoE prefill TDM GEMM, retune E96 and add E... | @yanguahe | open | 2026-10-30 | 2026-11-09 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | draft | 2026-08-26 | 2026-11-09 |
| [#6083](https://github.com/ROCm/aiter/pull/6083) | [FlyDSL] FlyDSL QSA indexer scorer + sparse GQA gfx942 perfo... | @SamiAario-AMD | open | 2026-10-02 | 2026-11-09 |
| [#6707](https://github.com/ROCm/aiter/pull/6707) | [Triton/Gluon] gemm_a16w16_gated: add bias and a gate_first ... | @klin2024 | open | 2026-10-20 | 2026-11-09 |
| [#7413](https://github.com/ROCm/aiter/pull/7413) | [Triton/Gluon] [Feature] FlashKDA: store the recurrent state... | @davzhuAMD | open | 2026-11-03 | 2026-11-09 |
| [#7349](https://github.com/ROCm/aiter/pull/7349) | [FlyDSL] Fix LDS race in MoE sorting p23 kernel | @cpersson-amd | open | 2026-11-02 | 2026-11-09 |
| [#6580](https://github.com/ROCm/aiter/pull/6580) | [MHA] Tune MHA forward across every backend on the shared tu... | @amd-bartgips | draft | 2026-10-15 | 2026-11-09 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [MHA] Route MHA forward through a tuned backend row | @amd-bartgips | open | 2026-09-22 | 2026-11-09 |
| [#5849](https://github.com/ROCm/aiter/pull/5849) | [Tuning] A family-agnostic race for large candidate fields (... | @amd-bartgips | draft | 2026-09-25 | 2026-11-09 |
| [#6705](https://github.com/ROCm/aiter/pull/6705) | [Triton/Gluon] [JIT] Fix imports under AITER_TRITON_ONLY=1: ... | @MHYangAMD | open | 2026-10-20 | 2026-11-09 |
| [#6981](https://github.com/ROCm/aiter/pull/6981) | [HIP] [MXFP4 MoE] cover Qwen3.5-397B TP4: shape gate entry a... | @ZhiweiYan-96 | open | 2026-10-27 | 2026-11-09 |
| [#6372](https://github.com/ROCm/aiter/pull/6372) | [Triton/Gluon] Add gfx1201 Triton support for per-channel FP... | @jyohukuchan | open | 2026-10-10 | 2026-11-09 |
| [#7063](https://github.com/ROCm/aiter/pull/7063) | [FlyDSL] [Feature] Precompile MoE deployments (EP and TP), d... | @zhiding512 | open | 2026-10-28 | 2026-11-09 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-11-09 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-11-09 |
| [#7517](https://github.com/ROCm/aiter/pull/7517) | [Triton/Gluon] fp8_mqa_logits: optional caller-owned logits ... | @Jasen2201 | open | 2026-11-05 | 2026-11-09 |
| [#7635](https://github.com/ROCm/aiter/pull/7635) | [Triton] [Config] Add gfx1151 gemm_a16w16_atomic configs | @klin2024 | draft | 2026-11-09 | 2026-11-09 |
| [#7618](https://github.com/ROCm/aiter/pull/7618) | [FlyDSL] Optimize gfx1250 MiniMax-M3 paged attention and pla... | @zhiding512 | draft | 2026-11-08 | 2026-11-09 |
| [#7148](https://github.com/ROCm/aiter/pull/7148) | [JIT] fix(jit): treat a zombie lock holder as dead in FileBa... | @Woody-Hu | open | 2026-10-29 | 2026-11-09 |
| [#7569](https://github.com/ROCm/aiter/pull/7569) | [HIP] [Bugfix] Saturate the fp8 rope output of fused_qk_rope... | @yuychang | open | 2026-11-06 | 2026-11-09 |
| [#6067](https://github.com/ROCm/aiter/pull/6067) | [ASM] [HIP] [CK] Add persistent gfx950 f4gemm 256x256 kernel... | @tarik-sarac | open | 2026-10-01 | 2026-11-09 |
| [#7633](https://github.com/ROCm/aiter/pull/7633) | [Config] [FlyDSL] MiniMax-M3.1 EP4/EP8 fused-MoE tuned rows ... | @ganyi1996ppo | draft | 2026-11-09 | 2026-11-09 |
| [#7260](https://github.com/ROCm/aiter/pull/7260) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w4 configs | @klin2024 | draft | 2026-11-01 | 2026-11-09 |
| [#7542](https://github.com/ROCm/aiter/pull/7542) | [CK] [FlyDSL] Dev/ms ep32 support | @Bernard-Liu | open | 2026-11-06 | 2026-11-09 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-11-09 |
| [#5500](https://github.com/ROCm/aiter/pull/5500) | [Config] configs: GLM-5.3-Flash a8w8 blockscale fused-MoE co... | @jin-amd | open | 2026-09-14 | 2026-11-09 |
| [#6753](https://github.com/ROCm/aiter/pull/6753) | [Triton/Gluon] [Config] [gfx950] unified_attention: num_stag... | @azaidy | open | 2026-10-21 | 2026-11-09 |
| [#6754](https://github.com/ROCm/aiter/pull/6754) | [FlyDSL] [Muse Spark] Muse MoE GEMM and finalize on MXFP4 we... | @azaidy | open | 2026-10-21 | 2026-11-09 |
| [#6904](https://github.com/ROCm/aiter/pull/6904) | [HIP] Add gfx1101 to allowed_archs in csrc/cpp_itfs/utils.py | @Ragua1 | open | 2026-10-24 | 2026-11-08 |
| [#7280](https://github.com/ROCm/aiter/pull/7280) | [Perf] mha: flash_attn_varlen_fp8_pertensor_func writes into... | @vorapolsiloai | draft | 2026-11-01 | 2026-11-08 |
| [#7030](https://github.com/ROCm/aiter/pull/7030) | [Triton/Gluon] [Config] Tune the gfx1150 gemm_a16w16 DEFAULT... | @klin2024 | open | 2026-10-27 | 2026-11-08 |
| [#7628](https://github.com/ROCm/aiter/pull/7628) | [Triton] [Config] gfx1151 gemm_a16w16: shape-specific config... | @klin2024 | draft | 2026-11-08 | 2026-11-08 |
| [#7627](https://github.com/ROCm/aiter/pull/7627) | [Triton] [Config] Add gfx1150 batched_gemm_a16w16 configs | @klin2024 | draft | 2026-11-08 | 2026-11-08 |
| [#6403](https://github.com/ROCm/aiter/pull/6403) | [FlyDSL] Two-launch FlyDSL delayed mHC seam for gfx942 | @RElbers | open | 2026-10-11 | 2026-11-08 |
| [#7626](https://github.com/ROCm/aiter/pull/7626) | [Triton] [Config] gfx1151 SonicMoE: measured grouped-GEMM bu... | @klin2024 | draft | 2026-11-08 | 2026-11-08 |
| [#7552](https://github.com/ROCm/aiter/pull/7552) | [HIP] getPaddedM: fall back to the M=16 row for M<16 when no... | @afriedri | open | 2026-11-06 | 2026-11-08 |
| [#5891](https://github.com/ROCm/aiter/pull/5891) | [HIP] [FlyDSL] [CI] [MoE]: Optimize MiMo MXFP4 EP8/EP16 on g... | @sammysun0711 | open | 2026-09-27 | 2026-11-08 |
| [#7106](https://github.com/ROCm/aiter/pull/7106) | [Tuning] Skip run_config tests that have no tuned rows for t... | @RElbers | open | 2026-10-28 | 2026-11-08 |
| [#7355](https://github.com/ROCm/aiter/pull/7355) | [FlyDSL] [Bugfix] MoE sorting: allocate the multiphase works... | @yelkhamra | open | 2026-11-02 | 2026-11-08 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-11-08 |
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-11-08 |
| [#5513](https://github.com/ROCm/aiter/pull/5513) | [CI] Add Some vLLM lm_eval Nightly Tests | @micah-wil | open | 2026-09-14 | 2026-11-08 |
| [#5678](https://github.com/ROCm/aiter/pull/5678) | [HIP] [OPUS] [JIT] Add GPT-OSS IQ2R 2-bit MoE support | @ssharma4-amd | open | 2026-09-18 | 2026-11-08 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-11-08 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-11-08 |
| [#6401](https://github.com/ROCm/aiter/pull/6401) | [Triton/Gluon] [Bugfix] Fix the fused_atomic Triton flash at... | @0xDELUXA | open | 2026-10-11 | 2026-11-08 |
| [#6837](https://github.com/ROCm/aiter/pull/6837) | [FlyDSL] Select a16w4 stage2 reduce for fp4 | @zjin-lcf | open | 2026-10-22 | 2026-11-08 |
| [#6851](https://github.com/ROCm/aiter/pull/6851) | [Triton/Gluon] perf(triton): tune gfx950 one-kernel MHA back... | @sunxxuns | open | 2026-10-22 | 2026-11-08 |
| [#6855](https://github.com/ROCm/aiter/pull/6855) | [HIP] fused_qk_norm_rope_group_quant: multi-row TDM kernel f... | @Boss2002n | open | 2026-10-23 | 2026-11-08 |
| [#6766](https://github.com/ROCm/aiter/pull/6766) | Add a routing-independence test for persistent fused_moe | @siliangchen-amd | open | 2026-10-21 | 2026-11-08 |
| [#6765](https://github.com/ROCm/aiter/pull/6765) | [Triton/Gluon] [Perf] Floor the gfx942 bf16 unified-attentio... | @siliangchen-amd | open | 2026-10-21 | 2026-11-08 |
| [#7616](https://github.com/ROCm/aiter/pull/7616) | [Triton/Gluon] [gfx1250] gemm_a16w16: optional accumulate ep... | @omuhamma | draft | 2026-11-08 | 2026-11-08 |
| [#7108](https://github.com/ROCm/aiter/pull/7108) | [Feature] Allow explicit Even activation-scale selection for... | @XinyuJiangCMU | open | 2026-10-28 | 2026-11-07 |
| [#6586](https://github.com/ROCm/aiter/pull/6586) | [HIP] [Fix][Perf] topk_plain: correct multi-block fp16/bf16 ... | @zhentaocc | open | 2026-10-15 | 2026-11-07 |
| [#7608](https://github.com/ROCm/aiter/pull/7608) | [FlyDSL] gfx1201 flash attention: support head_dim % 8 (PixA... | @klin2024 | draft | 2026-11-07 | 2026-11-07 |
| [#7596](https://github.com/ROCm/aiter/pull/7596) | [FlyDSL] [Perf] gfx950 A16W16: rectangular tiles, nonuniform... | @xiaohuguo2023 | draft | 2026-11-06 | 2026-11-07 |
| [#7425](https://github.com/ROCm/aiter/pull/7425) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @fyun89 | open | 2026-11-04 | 2026-11-07 |
| [#7554](https://github.com/ROCm/aiter/pull/7554) | [Triton/Gluon] [Bugfix] gemm_afp4wfp4: mask K-tail scales wi... | @vorapolsiloai | open | 2026-11-06 | 2026-11-07 |
| [#7558](https://github.com/ROCm/aiter/pull/7558) | [fused_moe] Keep Swiglu MXFP4 A4W4 off a numerically-broken ... | @sahirema | open | 2026-11-06 | 2026-11-07 |
| [#7565](https://github.com/ROCm/aiter/pull/7565) | [MOE] Rotate the SwiGLU output between the two GEMMs | @jimmy-adams | open | 2026-11-06 | 2026-11-07 |
| [#7571](https://github.com/ROCm/aiter/pull/7571) | [Docs] Update ruff version in contribution guidelines to mat... | @jbelloncastro | open | 2026-11-06 | 2026-11-07 |
| [#7575](https://github.com/ROCm/aiter/pull/7575) | Add FlyDSL V4.1 CSA main compressor | @yzhou103 | draft | 2026-11-06 | 2026-11-07 |
| [#6721](https://github.com/ROCm/aiter/pull/6721) | [Triton/Gluon] Add group_norm with an optional temb add and ... | @klin2024 | open | 2026-10-20 | 2026-11-07 |
| [#7353](https://github.com/ROCm/aiter/pull/7353) | [FlyDSL] [Bugfix] Synchronize MoE sorting before reusing cum... | @yelkhamra | open | 2026-11-02 | 2026-11-07 |
| [#7597](https://github.com/ROCm/aiter/pull/7597) | [Triton] [Config] Add gfx1201 sparse_mla_dsv4_train config | @klin2024 | draft | 2026-11-07 | 2026-11-07 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-11-07 |
| [#6498](https://github.com/ROCm/aiter/pull/6498) | [Triton/Gluon] KDA: add the chunk_delta_attn backward pass | @Micky774 | open | 2026-10-13 | 2026-11-07 |
| [#6524](https://github.com/ROCm/aiter/pull/6524) | [HIP] [MLA][gfx942] Fix BF16 decode dispatch for GQA 64 | @chandankumr | open | 2026-10-14 | 2026-11-07 |
| [#6612](https://github.com/ROCm/aiter/pull/6612) | [Config] [Qwen3.5][Tuning] Add TP8 (inter_dim=128) fused-MoE... | @chuyeh | open | 2026-10-16 | 2026-11-07 |
| [#6740](https://github.com/ROCm/aiter/pull/6740) | [Triton/Gluon] [Config] [Perf] gfx950 a16w16 M_LEQ_8: avoid ... | @Arist12 | open | 2026-10-20 | 2026-11-07 |
| [#6848](https://github.com/ROCm/aiter/pull/6848) | [Triton/Gluon] feat(triton): add M-FALCON candidate attentio... | @sunxxuns | open | 2026-10-22 | 2026-11-07 |
| [#6987](https://github.com/ROCm/aiter/pull/6987) | [FlyDSL] FlyDSL MoE RMSNorm Support | @amirumoAMD | open | 2026-10-27 | 2026-11-07 |
| [#7200](https://github.com/ROCm/aiter/pull/7200) | [Triton/Gluon] [FlyDSL] [CI] [MoE] MegaMoE gfx1250 internal ... | @JiaoliangYu | open | 2026-10-30 | 2026-11-07 |
| [#7243](https://github.com/ROCm/aiter/pull/7243) | [Build] Reuse preshuffle_on ck2stages modules for non-fp4 Mo... | @AndreasKaratzas | draft | 2026-10-31 | 2026-11-07 |
| [#7368](https://github.com/ROCm/aiter/pull/7368) | Decouple MoE public names from backends (#7150 batch 1) | @zufayu | draft | 2026-11-03 | 2026-11-07 |
| [#6968](https://github.com/ROCm/aiter/pull/6968) | [Test] Cover 192x128, 128x64, and 256x256 in the FP8 MHA har... | @zjin-lcf | open | 2026-10-26 | 2026-11-06 |
| [#6543](https://github.com/ROCm/aiter/pull/6543) | [FlyDSL] Optimize FlyDSL Kimi K2 Thinking Kernel | @amirumoAMD | open | 2026-10-14 | 2026-11-06 |
| [#7587](https://github.com/ROCm/aiter/pull/7587) | [Triton/Gluon] [GFX12] Optimize mxfp8 gfx1250 gluon | @k50112113 | draft | 2026-11-06 | 2026-11-06 |
| [#7228](https://github.com/ROCm/aiter/pull/7228) | [Triton/Gluon] Fused a16w16 GEMM with a separate tile and sp... | @eky-amd | open | 2026-10-30 | 2026-11-06 |
| [#7239](https://github.com/ROCm/aiter/pull/7239) | [Triton/Gluon] Pipelining for fused GDN decode kernel, add b... | @eky-amd | open | 2026-10-30 | 2026-11-06 |
| [#6091](https://github.com/ROCm/aiter/pull/6091) | [HIP] [MLA] Fix non-uniform query offsets after head folding | @xaguilar-amd | open | 2026-10-02 | 2026-11-06 |
| [#7218](https://github.com/ROCm/aiter/pull/7218) | [Config] Add tuned GEMM and fused-MoE configs for MI350P (gf... | @RElbers | open | 2026-10-30 | 2026-11-06 |
| [#7532](https://github.com/ROCm/aiter/pull/7532) | [Triton/Gluon] [Hardware] Enable gemm_a16wfp4 and gemm_a8wfp... | @Ragua1 | open | 2026-11-05 | 2026-11-06 |
| [#7533](https://github.com/ROCm/aiter/pull/7533) | [Triton/Gluon] [Hardware] Enable batched and fused FP4 GEMMs... | @Ragua1 | open | 2026-11-05 | 2026-11-06 |
| [#7585](https://github.com/ROCm/aiter/pull/7585) | [Triton] [Config] Add gfx1201 SonicMoE config | @klin2024 | draft | 2026-11-06 | 2026-11-06 |
| [#6960](https://github.com/ROCm/aiter/pull/6960) | [HIP] Add `all_gather_lastdim_add` to the custom all-reduce | @aryatsc | open | 2026-10-26 | 2026-11-06 |
| [#7453](https://github.com/ROCm/aiter/pull/7453) | [CK] [MoE] Speed up the a16w16 CK 2-stage MoE: build without... | @waqahmed-amd-fi | draft | 2026-11-04 | 2026-11-06 |
| [#7458](https://github.com/ROCm/aiter/pull/7458) | [Triton/Gluon] Add RoPE and KV-cache write to the fused bf16... | @lucas-santos-amd | open | 2026-11-04 | 2026-11-06 |
| [#5848](https://github.com/ROCm/aiter/pull/5848) | [HIP] [OPUS] [JIT] Fix the hardcoded die and CU counts in th... | @RElbers | open | 2026-09-25 | 2026-11-06 |
| [#7341](https://github.com/ROCm/aiter/pull/7341) | [CI] Run full test_moe_2stage.py matrix nightly/on-demand | @shantipriya-amd | open | 2026-11-02 | 2026-11-06 |
| [#6961](https://github.com/ROCm/aiter/pull/6961) | [Triton/Gluon] [ASM] [HIP] [MLA] Add Kimi-K3 HipKittens MLA ... | @aryatsc | open | 2026-10-26 | 2026-11-06 |
| [#7346](https://github.com/ROCm/aiter/pull/7346) | [FlyDSL] dist: public SP APIs: PCP graph_capture, head excha... | @whx-sjtu | open | 2026-11-02 | 2026-11-06 |
| [#7454](https://github.com/ROCm/aiter/pull/7454) | [Triton/Gluon] Allow pa_decode_gluon query length 8 | @amd-mghanimi | draft | 2026-11-04 | 2026-11-06 |
| [#7537](https://github.com/ROCm/aiter/pull/7537) | [FlyDSL] FP4 row-group MQA logits: opt-in |s| epilogue and 1... | @AMD-yanfeiwang | draft | 2026-11-06 | 2026-11-06 |
| [#6482](https://github.com/ROCm/aiter/pull/6482) | [Tune] Make pretune fail on tuner errors and rebuild every i... | @a-canadasruiz | draft | 2026-10-13 | 2026-11-06 |
| [#6532](https://github.com/ROCm/aiter/pull/6532) | [Tune] Report online fmoe tune failures and share one tune p... | @a-canadasruiz | draft | 2026-10-14 | 2026-11-06 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep untuned SiLU A4W4 on native CK | @andyluo7 | open | 2026-08-27 | 2026-11-06 |
| [#7139](https://github.com/ROCm/aiter/pull/7139) | [CK] [CI] aiter#6643: relu2 for legacy ck_gemm_moe_2stages k... | @shantipriya-amd | open | 2026-10-29 | 2026-11-06 |
| [#7135](https://github.com/ROCm/aiter/pull/7135) | [MoE] Public two-stage fused_moe API: fused_moe_stage1 / fus... | @fanxingran | open | 2026-10-29 | 2026-11-06 |
| [#6743](https://github.com/ROCm/aiter/pull/6743) | [HIP] [JIT] [Kernel] Add HipKittens H32 sparse MLA for gfx95... | @willhu-jpg | open | 2026-10-20 | 2026-11-06 |
| [#7471](https://github.com/ROCm/aiter/pull/7471) | [Triton] fp8_mqa_logits: add a deterministic option | @aarnetalman | draft | 2026-11-04 | 2026-11-06 |
| [#6335](https://github.com/ROCm/aiter/pull/6335) | [fused_moe] Raise when an active swiglu_limit would be silen... | @jatseng-ai | open | 2026-10-09 | 2026-11-06 |
| [#7093](https://github.com/ROCm/aiter/pull/7093) | [FlyDSL] QuickAllReduce INT4: faster poll and codec, kernel-... | @a-sidorova | open | 2026-10-28 | 2026-11-06 |
| [#7544](https://github.com/ROCm/aiter/pull/7544) | [Triton/Gluon] Pipeline scale loads and use explicit FMA in ... | @lijinpei-amd | open | 2026-11-06 | 2026-11-06 |
| [#7081](https://github.com/ROCm/aiter/pull/7081) | [FlyDSL] Optimize gfx1250 PA partitions and packed attention | @fsx950223 | open | 2026-10-28 | 2026-11-06 |
| [#7407](https://github.com/ROCm/aiter/pull/7407) | [ASM] [HIP] [CI] Add gfx1250 MLA v4.1 a8w4 fused sparse pref... | @tingchen988 | open | 2026-11-03 | 2026-11-06 |
| [#7488](https://github.com/ROCm/aiter/pull/7488) | [Triton/Gluon] [Perf] gfx1250 all-reduce: fold a residual ad... | @karverma-amd | open | 2026-11-05 | 2026-11-06 |
| [#6684](https://github.com/ROCm/aiter/pull/6684) | [Triton/Gluon] : (DeepSeek) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-10-19 | 2026-11-06 |
| [#5379](https://github.com/ROCm/aiter/pull/5379) | [Config] [MoE] Add Qwen3.8 Flash Next FP8 tuned config for P... | @sammysun0711 | open | 2026-09-09 | 2026-11-06 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-11-06 |
| [#6043](https://github.com/ROCm/aiter/pull/6043) | [Triton/Gluon] Tune bf16 a16w16 GEMM for Qwen3.5-397B on gfx... | @mqhc2020 | open | 2026-10-01 | 2026-11-06 |
| [#6100](https://github.com/ROCm/aiter/pull/6100) | [ASM] [HIP] [JIT] Fuse the router GEMM and top-k softmax int... | @maeehart | open | 2026-10-02 | 2026-11-06 |
| [#6268](https://github.com/ROCm/aiter/pull/6268) | [FlyDSL] [CI] [MoonEP] Balance MegaMoE v2 prefill with MoonE... | @JiaoliangYu | open | 2026-10-08 | 2026-11-06 |
| [#6340](https://github.com/ROCm/aiter/pull/6340) | [HIP] Avoid duplicate binary-op instantiation in the dispatc... | @kainanpeace666 | open | 2026-10-09 | 2026-11-06 |
| [#6371](https://github.com/ROCm/aiter/pull/6371) | mHC fused post+pre: launch policy for MI300X (gfx942, 304 CU... | @anshss | open | 2026-10-10 | 2026-11-06 |
| [#6390](https://github.com/ROCm/aiter/pull/6390) | [HIP] [JIT] [Build] gfx1201: SageAttention forward (INT8 QK,... | @Shan2L | open | 2026-10-10 | 2026-11-06 |
| [#6417](https://github.com/ROCm/aiter/pull/6417) | [HIP] [JIT] Add fused_indexed_gated_residual for diffusion t... | @Shan2L | open | 2026-10-12 | 2026-11-06 |
| [#6798](https://github.com/ROCm/aiter/pull/6798) | [HIP] [Bugfix] paged_attention_ll4mi: fix query-head offset ... | @Arist12 | open | 2026-10-21 | 2026-11-06 |
| [#7522](https://github.com/ROCm/aiter/pull/7522) | [Triton/Gluon] Honor overlap in the two-stage DeepSeek-V4 co... | @0z5a | open | 2026-11-05 | 2026-11-06 |
| [#7523](https://github.com/ROCm/aiter/pull/7523) | [Triton/Gluon] Validate the two-stage DeepSeek-V4 compressor... | @0z5a | open | 2026-11-05 | 2026-11-06 |
| [#7524](https://github.com/ROCm/aiter/pull/7524) | [Triton/Gluon] Reject use_fp4_cache in the DeepSeek-V4 compr... | @0z5a | open | 2026-11-05 | 2026-11-06 |
| [#7525](https://github.com/ROCm/aiter/pull/7525) | validate-kernel-pr: read the identity gate after fetch.sh's ... | @rpoornac | open | 2026-11-05 | 2026-11-06 |
| [#7528](https://github.com/ROCm/aiter/pull/7528) | [Triton/Gluon] Keep a failed arch probe from breaking GPU-le... | @0z5a | open | 2026-11-05 | 2026-11-06 |
| [#6838](https://github.com/ROCm/aiter/pull/6838) | [Triton/Gluon] : (ATTN DELTA) Add RotatingBufferBench suppor... | @rahulbatra85 | draft | 2026-10-22 | 2026-11-06 |
| [#6840](https://github.com/ROCm/aiter/pull/6840) | [Triton/Gluon] : (SPARSE ATTN) Add rotating buffers and do_b... | @rahulbatra85 | draft | 2026-10-22 | 2026-11-06 |
| [#7301](https://github.com/ROCm/aiter/pull/7301) | [Triton/Gluon] : Add RotatingBufferBench support for sage, h... | @rahulbatra85 | draft | 2026-11-02 | 2026-11-06 |
| [#7304](https://github.com/ROCm/aiter/pull/7304) | [CI] Rebalance slow op tests across shards | @zufayu | draft | 2026-11-02 | 2026-11-06 |
| [#7337](https://github.com/ROCm/aiter/pull/7337) | [HIP] [Perf] Route large gfx942 MoE sorts to multi-phase | @phambinhfin | draft | 2026-11-02 | 2026-11-05 |
| [#7417](https://github.com/ROCm/aiter/pull/7417) | [Triton/Gluon] fixed a moe bug related to swiglu on gfx1250 | @scxiao | open | 2026-11-03 | 2026-11-05 |
| [#6951](https://github.com/ROCm/aiter/pull/6951) | [Triton/Gluon] Fix Triton A8W8 Per-token Preshuffled GEMM | @farlukas | open | 2026-10-26 | 2026-11-05 |
| [#7342](https://github.com/ROCm/aiter/pull/7342) | [Triton/Gluon] [CI] [DO NOT MERGE] : Migrating Triton tests ... | @pelumi1163 | open | 2026-11-02 | 2026-11-05 |
| [#7510](https://github.com/ROCm/aiter/pull/7510) | [Triton/Gluon] [gfx942] Read the fp8_dsv32_mla cache in fnuz... | @xaguilar-amd | open | 2026-11-05 | 2026-11-05 |
| [#7270](https://github.com/ROCm/aiter/pull/7270) | [Triton/Gluon] [Config] gfx1151: tune gemm_a8w8_preshuffled ... | @klin2024 | open | 2026-11-01 | 2026-11-05 |
| [#7338](https://github.com/ROCm/aiter/pull/7338) | [Perf] MoE routing top-k: readlane/DPP instead of ds_bpermut... | @phambinhfin | draft | 2026-11-02 | 2026-11-05 |
| [#6180](https://github.com/ROCm/aiter/pull/6180) | [Triton/Gluon] MHA: write -inf LSE for fully masked rows, no... | @phambinhfin | open | 2026-10-06 | 2026-11-05 |
| [#7455](https://github.com/ROCm/aiter/pull/7455) | [Triton/Gluon] Sparse attention block mask to LUT optimizati... | @nsakkine | open | 2026-11-04 | 2026-11-05 |
| [#7511](https://github.com/ROCm/aiter/pull/7511) | [Triton] [Config] Add gfx1201 fused_sigmoid_mul config | @klin2024 | draft | 2026-11-05 | 2026-11-05 |
| [#7500](https://github.com/ROCm/aiter/pull/7500) | [FlyDSL] [MoE] Support row-strided MXFP4 activations | @XiaobingSuper | open | 2026-11-05 | 2026-11-05 |
| [#7509](https://github.com/ROCm/aiter/pull/7509) | [OPUS] [Bugfix] Fix LDS race in gfx942 A8W8 blockscale B-pre... | @xiaohong42 | draft | 2026-11-05 | 2026-11-05 |
| [#7283](https://github.com/ROCm/aiter/pull/7283) | [HIP] [Bugfix] Reject non-contiguous mixes and out in mhc_po... | @ASHMEET555 | open | 2026-11-01 | 2026-11-05 |
| [#6358](https://github.com/ROCm/aiter/pull/6358) | [Config] [gfx1250] Select the FlyDSL kernel for 20 BF16 GEMM... | @jhinpan | open | 2026-10-10 | 2026-11-05 |
| [#6234](https://github.com/ROCm/aiter/pull/6234) | [Triton/Gluon] [Config] [gfx1250] Tune gluon batched a16w16 ... | @karverma-amd | open | 2026-10-07 | 2026-11-05 |
| [#6238](https://github.com/ROCm/aiter/pull/6238) | [Triton/Gluon] [gfx1250] batched a16w8/a8w8/bf16: fp8 output... | @karverma-amd | open | 2026-10-08 | 2026-11-05 |
| [#6511](https://github.com/ROCm/aiter/pull/6511) | [CK] [FlyDSL] fix(fused_moe): make the MXFP4 MoE stage2 epil... | @Qubitium | open | 2026-10-14 | 2026-11-05 |
| [#7374](https://github.com/ROCm/aiter/pull/7374) | [HIP] [JIT] Add gfx950 K-pool indexer cache writers | @sumin-hong | open | 2026-11-03 | 2026-11-05 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-11-05 |
| [#5955](https://github.com/ROCm/aiter/pull/5955) | [HIP] [JIT] Fuse six-way split-K reduction and q/KV RMSNorm | @heslami | open | 2026-09-29 | 2026-11-05 |
| [#6947](https://github.com/ROCm/aiter/pull/6947) | [Config] Tuning/beam bf16 gemms for gfx950 | @jamesETsmith | open | 2026-10-26 | 2026-11-05 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Triton/Gluon] [Kernel] sliding-window decode over shuffled ... | @reger-men | open | 2026-06-26 | 2026-11-05 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Triton/Gluon] [Kernel][Perf] split-K long-context decode fo... | @reger-men | open | 2026-06-26 | 2026-11-05 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton/Gluon] Add fused gated residual + LayerNorm + scale/... | @menglcai | open | 2026-07-28 | 2026-11-05 |
| [#6274](https://github.com/ROCm/aiter/pull/6274) | [CI] Triton board: review requested -> In Progress, review d... | @Boss2002n | open | 2026-10-08 | 2026-11-05 |
| [#6526](https://github.com/ROCm/aiter/pull/6526) | [FlyDSL] [gfx1250] [MoE] Copy each prequantized a1 row once ... | @lalala-sh | open | 2026-10-14 | 2026-11-05 |
| [#7462](https://github.com/ROCm/aiter/pull/7462) | [ASM] [HIP] Optimize gfx950 MXFP6 GEMMs for Ideogram DiT sha... | @ksikiric | open | 2026-11-04 | 2026-11-05 |
| [#7463](https://github.com/ROCm/aiter/pull/7463) | [HIP] Split MXFP6 GEMM launches whose output exceeds 2 GiB | @ksikiric | open | 2026-11-04 | 2026-11-05 |
| [#7473](https://github.com/ROCm/aiter/pull/7473) | [MHA] Stop flash_attn_varlen_func from dropping sequences wi... | @AndreasKaratzas | open | 2026-11-04 | 2026-11-05 |
| [#6305](https://github.com/ROCm/aiter/pull/6305) | [Test] Time with cuda.Event when the torch build has no Kine... | @zufayu | draft | 2026-10-09 | 2026-11-05 |
| [#6859](https://github.com/ROCm/aiter/pull/6859) | [Triton/Gluon] Fix Flash Attention main ci | @micmelesse | draft | 2026-10-23 | 2026-11-05 |
| [#7406](https://github.com/ROCm/aiter/pull/7406) | [Triton/Gluon] Step-5 CSA paged MQA logits kernel for gfx942 | @akii96 | open | 2026-11-03 | 2026-11-04 |
| [#7478](https://github.com/ROCm/aiter/pull/7478) | [Config] Add Gemma-4-E4B bf16 GEMM configs for gfx950 (MI350... | @mpashkovskii | draft | 2026-11-04 | 2026-11-04 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-11-04 |
| [#7470](https://github.com/ROCm/aiter/pull/7470) | [Triton/Gluon] [Perf] Add optional gfx942 small-M MoE sorter | @LiuYinfeng01 | draft | 2026-11-04 | 2026-11-04 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [HIP] [CK] [BUG][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-11-04 |
| [#6081](https://github.com/ROCm/aiter/pull/6081) | [Triton/Gluon] Fix: gfx1250 unified attention faults and NaN... | @mqhc2020 | open | 2026-10-02 | 2026-11-04 |
| [#7467](https://github.com/ROCm/aiter/pull/7467) | [Triton/Gluon] [Config] gfx1151 batched_gemm_a16w16: B-speci... | @klin2024 | draft | 2026-11-04 | 2026-11-04 |
| [#7412](https://github.com/ROCm/aiter/pull/7412) | [FlyDSL] FP8 MQA logits improvements for gfx950 | @vpietila-amd | draft | 2026-11-03 | 2026-11-04 |
| [#7461](https://github.com/ROCm/aiter/pull/7461) | [Triton/Gluon] gfx942 MXFP4-KV sparse paged-attention decode | @akii96 | draft | 2026-11-04 | 2026-11-04 |
| [#5975](https://github.com/ROCm/aiter/pull/5975) | [Triton/Gluon] [Bugfix] Decouple pure-Torch FP6 packers from... | @adenzhou1350 | open | 2026-09-30 | 2026-11-04 |
| [#6534](https://github.com/ROCm/aiter/pull/6534) | [Triton/Gluon] [HIP] MHAv4 require BSHD inputs with only a c... | @nsakkine | open | 2026-10-14 | 2026-11-04 |
| [#7427](https://github.com/ROCm/aiter/pull/7427) | [HIP] [Perf] Tune large-row BF16-to-FP8 quant on gfx1250 | @XiaobingSuper | draft | 2026-11-04 | 2026-11-04 |
| [#7281](https://github.com/ROCm/aiter/pull/7281) | [Triton/Gluon] Mask OOB e8m0 scales on the ragged-K path of ... | @Ragua1 | open | 2026-11-01 | 2026-11-04 |
| [#7448](https://github.com/ROCm/aiter/pull/7448) | [Triton/Gluon] [Config] [gfx950] unified_attention: bf16 hea... | @mpashkovskii | draft | 2026-11-04 | 2026-11-04 |
| [#7116](https://github.com/ROCm/aiter/pull/7116) | [Triton/Gluon] act_mul_and_mxfp4_quant: honour scaling_mode,... | @vorapolsiloai | open | 2026-10-28 | 2026-11-04 |
| [#7416](https://github.com/ROCm/aiter/pull/7416) | [Triton/Gluon] [Kernel] Add fused_mixed_sample: tiled expone... | @chelnnexy | open | 2026-11-03 | 2026-11-04 |
| [#7328](https://github.com/ROCm/aiter/pull/7328) | [Triton/Gluon] [CI] [DO NOT MERGE] bump triton from 7cb7b059... | @yuyzhang512 | open | 2026-11-02 | 2026-11-04 |
| [#7180](https://github.com/ROCm/aiter/pull/7180) | [CI] Cache compiled objects across builds with ccache (2h16m... | @zufayu | draft | 2026-10-30 | 2026-11-04 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-11-04 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-11-04 |
| [#5460](https://github.com/ROCm/aiter/pull/5460) | [FlyDSL] Store fp8 MoE stage2 output through 64-bit pointers | @jamesbowley | open | 2026-09-11 | 2026-11-04 |
| [#5637](https://github.com/ROCm/aiter/pull/5637) | [Triton/Gluon] Add gfx1250 per-tensor FP8 MHA prefill | @Yu-Zhewen | open | 2026-09-17 | 2026-11-04 |
| [#7295](https://github.com/ROCm/aiter/pull/7295) | [Config] Dev/qwen38 flash moe | @yadaish | open | 2026-11-02 | 2026-11-04 |
| [#6445](https://github.com/ROCm/aiter/pull/6445) | [Triton/Gluon] [HIP] Gluon PA decode: ragged (varlen) query ... | @andrei-kochin | open | 2026-10-12 | 2026-11-04 |
| [#6598](https://github.com/ROCm/aiter/pull/6598) | [FlyDSL] [MoE] Fix stage-1 grid leaving padded intermediate ... | @micah-wil | open | 2026-10-15 | 2026-11-04 |
| [#6627](https://github.com/ROCm/aiter/pull/6627) | [ASM] [HIP] [JIT] gfx1201: SageAttention H3 backend (BF16 Q,... | @kaijiliu | open | 2026-10-16 | 2026-11-04 |
| [#7409](https://github.com/ROCm/aiter/pull/7409) | [FlyDSL] gfx942 a16wi4: faster int4 MoE dequant via v_perm_b... | @xaguilar-amd | open | 2026-11-03 | 2026-11-04 |
| [#7410](https://github.com/ROCm/aiter/pull/7410) | [FlyDSL] perf: integrate APRE M256 kernels into gfx1250 Mega... | @yanguahe | open | 2026-11-03 | 2026-11-04 |
| [#7414](https://github.com/ROCm/aiter/pull/7414) | [Config] [Tuning][gfx950] Retune MiniMax-M3.1 TP4 A16W4 deco... | @Fangzhou-Ai | open | 2026-11-03 | 2026-11-04 |
| [#7420](https://github.com/ROCm/aiter/pull/7420) | [gfx1250] Qwen3.5-35B-A3B DP: retuned Gluon a16w16 configs +... | @Boss2002n | draft | 2026-11-03 | 2026-11-03 |
| [#7419](https://github.com/ROCm/aiter/pull/7419) | [FlyDSL] [gfx1250] Fix a K-split race in the fused EP psum-q... | @k50112113 | draft | 2026-11-03 | 2026-11-03 |
| [#6893](https://github.com/ROCm/aiter/pull/6893) | [MHA] Test that a varlen attention sink does not take the v3... | @jatseng-ai | open | 2026-10-23 | 2026-11-03 |
| [#7394](https://github.com/ROCm/aiter/pull/7394) | MHAv4 gfx942 parity  | @nsakkine | draft | 2026-11-03 | 2026-11-03 |
| [#6842](https://github.com/ROCm/aiter/pull/6842) | [Triton/Gluon] Add sigmoid output gate to pa_decode_gluon | @eky-amd | open | 2026-10-22 | 2026-11-03 |
| [#6648](https://github.com/ROCm/aiter/pull/6648) | [HIP] [Perf] Replace contended per-tensor scale atomics with... | @akshatvishu | open | 2026-10-17 | 2026-11-03 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner in fhmoe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-11-03 |
| [#7386](https://github.com/ROCm/aiter/pull/7386) | [Bugfix] Allow gfx942 FlyDSL a16w4 and a16wi4 MoE tuning | @amd-oshkarav | draft | 2026-11-03 | 2026-11-03 |
| [#7035](https://github.com/ROCm/aiter/pull/7035) | [OPUS] [CI] [GEMM] Keep GLM-5.3 indexer prefills consistent ... | @Qubitium | open | 2026-10-27 | 2026-11-03 |
| [#6375](https://github.com/ROCm/aiter/pull/6375) | [ASM] Rebuild gfx950 fp8 block-scale fused-MoE 64x128, 64x25... | @samremes | open | 2026-10-10 | 2026-11-03 |
| [#7382](https://github.com/ROCm/aiter/pull/7382) | [Triton] [Config] Add gfx1201 gemm_a16w16_gated config | @klin2024 | draft | 2026-11-03 | 2026-11-03 |
| [#7125](https://github.com/ROCm/aiter/pull/7125) | [HIP] [MLA] Balance the gfx950 XCD-lane decode planner on sk... | @nehmathe2 | draft | 2026-10-29 | 2026-11-03 |
| [#7263](https://github.com/ROCm/aiter/pull/7263) | [FlyDSL] [Fix] Use legal buffer access widths for vec8 MoE g... | @xytpai | open | 2026-11-01 | 2026-11-03 |
| [#5744](https://github.com/ROCm/aiter/pull/5744) | [FlyDSL] [AMD][MoE] Avoid layout-v2 stage2 and over-padded t... | @karverma-amd | open | 2026-09-22 | 2026-11-03 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-11-03 |
| [#7380](https://github.com/ROCm/aiter/pull/7380) | [Triton] gfx950 unified attention: do not specialize on num_... | @vorapolsiloai | draft | 2026-11-03 | 2026-11-03 |
| [#7339](https://github.com/ROCm/aiter/pull/7339) | [Triton] Add conv2d_nearest_up2x_3x3: nearest x2 upsample + ... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#7327](https://github.com/ROCm/aiter/pull/7327) | [Triton] fused_nhwc_to_nchw_add: channels-last to NCHW plus ... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#7369](https://github.com/ROCm/aiter/pull/7369) | [Triton/Gluon] [Config] Add gfx1201 RMSNorm large-M/small-N ... | @klin2024 | draft | 2026-11-03 | 2026-11-03 |
| [#7312](https://github.com/ROCm/aiter/pull/7312) | [Triton] Add fused_qk_norm_rope_across_heads: cross-head Q/K... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-11-03 |
| [#5893](https://github.com/ROCm/aiter/pull/5893) | [HIP] fix(mla): stop gfx950 MLA decode from reading wrong KV... | @vanshbhatia-amd | open | 2026-09-27 | 2026-11-03 |
| [#6022](https://github.com/ROCm/aiter/pull/6022) | [CK] [bug fix] Fix wrong cktile 2stages `moe_gemm1_heuristic... | @fxmarty-amd | open | 2026-09-30 | 2026-11-03 |
| [#7300](https://github.com/ROCm/aiter/pull/7300) | [Config] feat(minimax-m3.1): add TP4 tuned gfx950 GEMM confi... | @kevin-mii | open | 2026-11-02 | 2026-11-03 |
| [#7186](https://github.com/ROCm/aiter/pull/7186) | [Triton/Gluon] [Kernel] Gluon MHA kernel for gfx1250 (fp16/f... | @omuhamma | draft | 2026-10-30 | 2026-11-02 |
| [#6814](https://github.com/ROCm/aiter/pull/6814) | [Triton/Gluon] : Benchmarks model config changes(scripts for... | @rahulbatra85 | open | 2026-10-22 | 2026-11-02 |
| [#7084](https://github.com/ROCm/aiter/pull/7084) | [Triton/Gluon] [Perf] [KDA] Optimize the gfx950 FlashKDA pre... | @waqahmed-amd-fi | draft | 2026-10-28 | 2026-11-02 |
| [#7167](https://github.com/ROCm/aiter/pull/7167) | [Triton] Add fused SiTU-and-mul kernel | @omuhamma | draft | 2026-10-29 | 2026-11-02 |
| [#6730](https://github.com/ROCm/aiter/pull/6730) | [Triton/Gluon] assert num_stages=2 for 3d unified attention ... | @scxiao | open | 2026-10-20 | 2026-11-02 |
| [#7343](https://github.com/ROCm/aiter/pull/7343) | [FlyDSL] [Perf] fn-resident mHC pre GEMM for gfx950 prefill | @anhminhnguyenhoang | draft | 2026-11-02 | 2026-11-02 |
| [#7320](https://github.com/ROCm/aiter/pull/7320) | [Triton] Add conv2d_depthwise with a fused bias, activation ... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7307](https://github.com/ROCm/aiter/pull/7307) | [Triton] Add channel_rmsnorm: RMS norm over dim 1 + activati... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7114](https://github.com/ROCm/aiter/pull/7114) | [HIP] [Perf] fn-resident mHC pre GEMM and bf16 hi/lo split f... | @anhminhnguyenhoang | draft | 2026-10-28 | 2026-11-02 |
| [#7179](https://github.com/ROCm/aiter/pull/7179) | [HIP] [Bugfix] Raise a clear error when hipconfig is missing... | @zoroyihan7 | open | 2026-10-29 | 2026-11-02 |
| [#7082](https://github.com/ROCm/aiter/pull/7082) | [HIP] Fuse gfx1250 LL all-reduce RMSNorm FP8 epilogue | @xytpai | open | 2026-10-28 | 2026-11-02 |
| [#7335](https://github.com/ROCm/aiter/pull/7335) | [DRAFT] tune(qwen3.5-397b): FlyDSL rows for the 528-row padd... | @ZhiweiYan-96 | draft | 2026-11-02 | 2026-11-02 |
| [#5793](https://github.com/ROCm/aiter/pull/5793) | [Triton/Gluon] [fix] Triton FA decode: bound K/V loads in no... | @amd-maradosa | open | 2026-09-23 | 2026-11-02 |
| [#7199](https://github.com/ROCm/aiter/pull/7199) | perf(flydsl pa_decode): let the head-256 FP8 pipe take three... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-02 |
| [#7329](https://github.com/ROCm/aiter/pull/7329) | [CI] [DO NOT MERGE] bump triton from 7cb7b059 to 65ee8992 | @yuyzhang512 | open | 2026-11-02 | 2026-11-02 |
| [#7220](https://github.com/ROCm/aiter/pull/7220) | fix the _fold_seqlen_indptr perf error | @minmengdie | open | 2026-10-30 | 2026-11-02 |
| [#7198](https://github.com/ROCm/aiter/pull/7198) | [HIP] tune(qwen3.5-397b mxfp4): lm_head, small-M FP8 project... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-02 |
| [#7207](https://github.com/ROCm/aiter/pull/7207) | [Build] [Misc] Add create-pr skill for review-ready aiter PR... | @fsx950223 | open | 2026-10-30 | 2026-11-02 |
| [#6891](https://github.com/ROCm/aiter/pull/6891) | [HIP] [MLA] Fix dropped and misplaced KV ranges in v1_0 and ... | @m8than | open | 2026-10-23 | 2026-11-02 |
| [#7010](https://github.com/ROCm/aiter/pull/7010) | [HIP] fix(fused_moe): give non-persistent per_1x128 1-stage ... | @JiaoliangYu | open | 2026-10-27 | 2026-11-02 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-11-02 |
| [#6710](https://github.com/ROCm/aiter/pull/6710) | [Triton/Gluon] Add fused_layernorm_indexed_adaln for diffusi... | @klin2024 | open | 2026-10-20 | 2026-11-02 |
| [#7293](https://github.com/ROCm/aiter/pull/7293) | [Triton] gfx1150: add fused_gemm_a16w16_mul_add config (2.08... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7286](https://github.com/ROCm/aiter/pull/7286) | Fail the MXMOE shape on a fatal GPU error in pruned and full... | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#7285](https://github.com/ROCm/aiter/pull/7285) | Validate the timed output in ordinary MXMOE coupled search | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#7284](https://github.com/ROCm/aiter/pull/7284) | [FlyDSL] [MoE] Support expert parallel for MXMOE a4w4 GEMM1 ... | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#4816](https://github.com/ROCm/aiter/pull/4816) | [Config] [Tuning] Add DSv4 a8w8 blockscale GEMM configs for ... | @zzw09773 | open | 2026-08-18 | 2026-11-02 |
| [#4872](https://github.com/ROCm/aiter/pull/4872) | [HIP] fix(mla): fold fp8 qlen 2 onto the qseqlen-4 kernel on... | @JohnQin-llm | open | 2026-08-20 | 2026-11-02 |
| [#5297](https://github.com/ROCm/aiter/pull/5297) | [HIP] [Bugfix] asm_mla: route ctypes entrypoint failures thr... | @wjabbour | open | 2026-09-06 | 2026-11-02 |
| [#6139](https://github.com/ROCm/aiter/pull/6139) | [ASM] [Bugfix] Scale gfx942 v3 FP8 FMHA probabilities before... | @akshatvishu | open | 2026-10-04 | 2026-11-02 |
| [#7024](https://github.com/ROCm/aiter/pull/7024) | [FlyDSL] [Feature] mega_moe_tp: Make the cross-rank wait tim... | @eppaneamd | open | 2026-10-27 | 2026-11-02 |
| [#7183](https://github.com/ROCm/aiter/pull/7183) | [HIP] [JIT] Add gfx950 prefill FP8 MQA logits | @sumin-hong | open | 2026-10-30 | 2026-11-02 |
| [#7184](https://github.com/ROCm/aiter/pull/7184) | [HIP] [JIT] Add gfx950 paged FP8 MQA logits | @sumin-hong | open | 2026-10-30 | 2026-11-02 |
| [#7210](https://github.com/ROCm/aiter/pull/7210) | [Perf] Reduce fused MoE dispatcher keyword matching overhead | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#7216](https://github.com/ROCm/aiter/pull/7216) | [Docs] Persist FlyDSL kernel caches across containers | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#7217](https://github.com/ROCm/aiter/pull/7217) | [JIT] [Perf] Avoid allocating dummy dispatch tensors for inf... | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#7222](https://github.com/ROCm/aiter/pull/7222) | [FlyDSL] [Fix] Guard dropped expert IDs in fused MoE route a... | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#7223](https://github.com/ROCm/aiter/pull/7223) | [FlyDSL] [Perf] Keep FP4 quantization K-splits before select... | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#7248](https://github.com/ROCm/aiter/pull/7248) | [FlyDSL] [Perf] Avoid empty Tensor construction for omitted ... | @xytpai | open | 2026-10-31 | 2026-11-02 |
| [#7251](https://github.com/ROCm/aiter/pull/7251) | [FlyDSL] [Fix] Honor omitted valid-route counts in EP routin... | @xytpai | open | 2026-10-31 | 2026-11-02 |
| [#7252](https://github.com/ROCm/aiter/pull/7252) | [FlyDSL] [Perf] Reduce scan barriers in gfx1250 fused TP rou... | @xytpai | open | 2026-10-31 | 2026-11-02 |
| [#7261](https://github.com/ROCm/aiter/pull/7261) | [FlyDSL] [Perf] Cache immutable grouped MoE integer config p... | @xytpai | open | 2026-11-01 | 2026-11-02 |
| [#7262](https://github.com/ROCm/aiter/pull/7262) | [FlyDSL] [Perf] Avoid allocating an unread MoE quantizer pla... | @xytpai | open | 2026-11-01 | 2026-11-02 |
| [#7274](https://github.com/ROCm/aiter/pull/7274) | [FlyDSL] [Test] Honor the requested grouped MoE activation f... | @xytpai | open | 2026-11-01 | 2026-11-02 |
| [#7117](https://github.com/ROCm/aiter/pull/7117) | [Triton/Gluon] [Config] a4w4: dispatch triton_preshuffle tun... | @vorapolsiloai | draft | 2026-10-28 | 2026-11-01 |
| [#7275](https://github.com/ROCm/aiter/pull/7275) | [FlyDSL] [Perf] Use wave32 ballots for small persistent expe... | @xytpai | draft | 2026-11-01 | 2026-11-01 |
| [#7268](https://github.com/ROCm/aiter/pull/7268) | [Triton] ep_sort_routing: grid size at run time, no compile ... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#7266](https://github.com/ROCm/aiter/pull/7266) | [Triton] ep_sort_routing: barrier before the last-CTA ticket... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#7267](https://github.com/ROCm/aiter/pull/7267) | [Triton/Gluon] [gfx1250] a4w4 MoE configs for Qwen3.5-35B-A3... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-11-01 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-11-01 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-11-01 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-11-01 |
| [#5450](https://github.com/ROCm/aiter/pull/5450) | [FlyDSL] [CI] [Bugfix] Rebase large MoE expert weights | @xudonlyu | open | 2026-09-11 | 2026-11-01 |
| [#5462](https://github.com/ROCm/aiter/pull/5462) | [FlyDSL] Tune MiniMax MXFP8 prefill MoE | @coderfeli | open | 2026-09-11 | 2026-11-01 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-11-01 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-11-01 |
| [#5704](https://github.com/ROCm/aiter/pull/5704) | [FlyDSL] [CI] [gfx1250] stage1 fused for mega-moe EP | @XingerZhu | open | 2026-09-20 | 2026-11-01 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-11-01 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-11-01 |
| [#5868](https://github.com/ROCm/aiter/pull/5868) | [Triton/Gluon] unified_attention 2D: optional block skipping... | @amd-sonsingh | open | 2026-09-26 | 2026-11-01 |
| [#5884](https://github.com/ROCm/aiter/pull/5884) | [FlyDSL] Respect GPU_ARCHS for Grouped MoE AOT builds | @chandankumr | open | 2026-09-27 | 2026-11-01 |
| [#6047](https://github.com/ROCm/aiter/pull/6047) | [FlyDSL] MiniMax-M3 fused sparse-layer decode | @akii96 | draft | 2026-10-01 | 2026-11-01 |
| [#7259](https://github.com/ROCm/aiter/pull/7259) | [Config] [Perf] [gfx950] MiniMax-M3 MoE tuned rows: TP2 a4w4... | @vorapolsiloai | draft | 2026-10-31 | 2026-10-31 |
| [#7256](https://github.com/ROCm/aiter/pull/7256) | [Triton/Gluon] [gfx1250] fused_rmsnorm_add: row kernel, gemm... | @Boss2002n | draft | 2026-10-31 | 2026-10-31 |
| [#7090](https://github.com/ROCm/aiter/pull/7090) | [Triton/Gluon] Cache gfx1250 GEMM layout metadata on the hos... | @xytpai | open | 2026-10-28 | 2026-10-31 |
| [#6054](https://github.com/ROCm/aiter/pull/6054) | fix: diverge on active chunks in topk decode | @simondanielsson | draft | 2026-10-01 | 2026-10-31 |
| [#6669](https://github.com/ROCm/aiter/pull/6669) | [FlyDSL] Add gfx11 (RDNA3 / RDNA3.5) flash attention forward | @klin2024 | draft | 2026-10-19 | 2026-10-31 |
| [#7242](https://github.com/ROCm/aiter/pull/7242) | [Triton/Gluon] [gfx950] Read DeepSeek-V4.1 KV records in spa... | @JohnQin-llm | draft | 2026-10-31 | 2026-10-31 |
| [#6483](https://github.com/ROCm/aiter/pull/6483) | [FlyDSL] Add gfx950 SonicMoE forward and backward | @jayzlee147 | open | 2026-10-13 | 2026-10-31 |
| [#6064](https://github.com/ROCm/aiter/pull/6064) | [FlyDSL] [Perf] Add exact-M4 native MXFP4 GLM MoE pipeline | @heslami | open | 2026-10-01 | 2026-10-31 |
| [#6065](https://github.com/ROCm/aiter/pull/6065) | [FlyDSL] [Perf] Add exact-M8 native MXFP4 GLM MoE route merg... | @heslami | open | 2026-10-01 | 2026-10-31 |
| [#6113](https://github.com/ROCm/aiter/pull/6113) | [FlyDSL] Fix force-reduce Stage-2 dispatch | @chandankumr | open | 2026-10-03 | 2026-10-31 |
| [#6136](https://github.com/ROCm/aiter/pull/6136) | [FlyDSL] Optimize gfx1250 A4W4 MoE prefill with fused GEMM1 ... | @yanguahe | open | 2026-10-04 | 2026-10-31 |
| [#6170](https://github.com/ROCm/aiter/pull/6170) | [FlyDSL] [MoE] Fix a race in the async stage-1 LDS pipeline;... | @jiaweche | open | 2026-10-06 | 2026-10-31 |
| [#6188](https://github.com/ROCm/aiter/pull/6188) | [HIP] Fix out-of-bounds read in MLA metadata planner when he... | @simondanielsson | open | 2026-10-06 | 2026-10-31 |
| [#6308](https://github.com/ROCm/aiter/pull/6308) | [FlyDSL] Feat/compact plan align32 | @james-huang09 | open | 2026-10-09 | 2026-10-31 |
| [#6342](https://github.com/ROCm/aiter/pull/6342) | [FlyDSL] fix: handle float strings in _as_int for CSV config... | @srinivamd | open | 2026-10-09 | 2026-10-31 |
| [#6360](https://github.com/ROCm/aiter/pull/6360) | [FlyDSL] [Bugfix] gfx1250 grouped MoE: read integer config c... | @jhinpan | open | 2026-10-10 | 2026-10-31 |
| [#7122](https://github.com/ROCm/aiter/pull/7122) | [Triton/Gluon] Add a gfx1250 Gluon gemm_a16w16 + all-reduce ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#7120](https://github.com/ROCm/aiter/pull/7120) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE + KV ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#7118](https://github.com/ROCm/aiter/pull/7118) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE for Q... | @Boss2002n | draft | 2026-10-28 | 2026-10-30 |
| [#6020](https://github.com/ROCm/aiter/pull/6020) | [FlyDSL] Add a GFX11 wave32 FlashAttention variant for gfx11... | @weimin023 | draft | 2026-09-30 | 2026-10-30 |
| [#6887](https://github.com/ROCm/aiter/pull/6887) | [Test] Return zero from the MLA round-robin golden for fully... | @KHassanQazi | open | 2026-10-23 | 2026-10-30 |
| [#7195](https://github.com/ROCm/aiter/pull/7195) | [DO NOT MERGE] [CI] Add a manual gfx1201 DevLab Dispatch smo... | @keerthana-bidar | draft | 2026-10-30 | 2026-10-30 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] [CI] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-10-30 |
| [#7212](https://github.com/ROCm/aiter/pull/7212) | [gfx1250] Extend fused all-reduce RMSNorm to MiniMax-M3 shap... | @XiaobingSuper | draft | 2026-10-30 | 2026-10-30 |
| [#5148](https://github.com/ROCm/aiter/pull/5148) | [FlyDSL] Single-launch decode GEMM: in-kernel blockscale, ra... | @johannes-graner | draft | 2026-08-31 | 2026-10-30 |
| [#6248](https://github.com/ROCm/aiter/pull/6248) | [WIP] [HIP] [FlyDSL] [CI] Feat/topk select tuner | @MHYangAMD | open | 2026-10-08 | 2026-10-30 |
| [#7129](https://github.com/ROCm/aiter/pull/7129) | [CK] [MoE] Run FP8 MoE on any multiple-of-8 intermediate siz... | @rasmith | open | 2026-10-29 | 2026-10-30 |
| [#7137](https://github.com/ROCm/aiter/pull/7137) | [HIP] [Perf] topk sampled: a stable mode for topk_select's t... | @MHYangAMD | open | 2026-10-29 | 2026-10-30 |
| [#7146](https://github.com/ROCm/aiter/pull/7146) | [FlyDSL] Dev/yadai prefill clean | @yadaish | open | 2026-10-29 | 2026-10-30 |
| [#6751](https://github.com/ROCm/aiter/pull/6751) | [Triton/Gluon] Fix fused_qk_norm_rope_group_quant | @Boss2002n | open | 2026-10-21 | 2026-10-29 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [CI] fix(jit): baton liveness is undecidable fr... | @ThomasNing | open | 2026-09-03 | 2026-10-29 |
| [#7165](https://github.com/ROCm/aiter/pull/7165) | [CI] Select aiter op_tests from the PR diff (dry run) | @zufayu | draft | 2026-10-29 | 2026-10-29 |
| [#7064](https://github.com/ROCm/aiter/pull/7064) | [HIP] Optimize gfx1250 no-quant RMSNorm dispatch for wave32 | @xytpai | open | 2026-10-28 | 2026-10-29 |
| [#5650](https://github.com/ROCm/aiter/pull/5650) | [Triton/Gluon] gfx942: dtype-split large-prefill attn_2d ent... | @mustafayildirim | open | 2026-09-18 | 2026-10-29 |
| [#6167](https://github.com/ROCm/aiter/pull/6167) | [Triton/Gluon] unified_attention_sparse_mla: read launch val... | @Ragua1 | open | 2026-10-06 | 2026-10-29 |
| [#7170](https://github.com/ROCm/aiter/pull/7170) | [Config] [Perf] [gfx950] Add MiniMax-M3-EAGLE3.1 BF16 tuned ... | @amd-bishwoadhikari | draft | 2026-10-29 | 2026-10-29 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-10-29 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-10-29 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-10-29 |
| [#6522](https://github.com/ROCm/aiter/pull/6522) | [FlyDSL] generalize gfx942 FMHA varlen backward to head dims... | @amd-wangfan | open | 2026-10-14 | 2026-10-29 |
| [#7094](https://github.com/ROCm/aiter/pull/7094) | [Config] Add Muse Spark Open 816B bf16 GEMM configs for gfx9... | @mpashkovskii | open | 2026-10-28 | 2026-10-29 |
| [#6978](https://github.com/ROCm/aiter/pull/6978) | [Config] Add MI455 QWEN3.8 TUNED GEMM RESULT | @minmengdie | open | 2026-10-27 | 2026-10-29 |
| [#6957](https://github.com/ROCm/aiter/pull/6957) | [HIP] Fix mHC pre cross-batch numerical consistency on gfx95... | @Qubitium | open | 2026-10-26 | 2026-10-29 |
| [#6824](https://github.com/ROCm/aiter/pull/6824) | [OPUS] support 1x32 bmm bpreshuffle | @yzhou103 | open | 2026-10-22 | 2026-10-29 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-10-29 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-10-29 |
| [#6141](https://github.com/ROCm/aiter/pull/6141) | [CI] [gfx950] Execute pytest regressions in standard shards ... | @chandankumr | open | 2026-10-05 | 2026-10-29 |
| [#6241](https://github.com/ROCm/aiter/pull/6241) | [Triton/Gluon] Add improved fused kv cache kernel for DSR1 | @azaidy | open | 2026-10-08 | 2026-10-29 |
| [#6322](https://github.com/ROCm/aiter/pull/6322) | [HIP] [Bugfix] sampling radix_topk_one_block_kernel: honor r... | @truong-v | open | 2026-10-09 | 2026-10-29 |
| [#7033](https://github.com/ROCm/aiter/pull/7033) | [Triton/Gluon] Fix GLM-5.3 FP8 GEMM batch consistency | @Qubitium | open | 2026-10-27 | 2026-10-29 |
| [#6885](https://github.com/ROCm/aiter/pull/6885) | [Test] Accept equal-score boundary ties in test_topk_softmax... | @KHassanQazi | open | 2026-10-23 | 2026-10-29 |
| [#7109](https://github.com/ROCm/aiter/pull/7109) | [Config] Add Muse Spark Open 816B MXFP4 fused-MoE FlyDSL con... | @mpashkovskii | open | 2026-10-28 | 2026-10-29 |
| [#7031](https://github.com/ROCm/aiter/pull/7031) | [Triton/Gluon] [HIP] [OPUS] [GEMM] Keep GLM-5.3 BF16 project... | @Qubitium | open | 2026-10-27 | 2026-10-28 |
| [#6475](https://github.com/ROCm/aiter/pull/6475) | [Triton/Gluon] [Bugfix] unified_attention: mask the V page t... | @aaab8b | open | 2026-10-13 | 2026-10-28 |
| [#6714](https://github.com/ROCm/aiter/pull/6714) | [Triton/Gluon] Avoid attn_fwd recompiles for new varlen max ... | @umarkovi-amd | draft | 2026-10-20 | 2026-11-04 |
| [#6237](https://github.com/ROCm/aiter/pull/6237) | [CK] Catch MoE accuracy failures that CI currently logs and ... | @KHassanQazi | open | 2026-10-07 | 2026-10-28 |
| [#7027](https://github.com/ROCm/aiter/pull/7027) | [Triton] [Config] [gfx950] unified_attention: two-chunk QK d... | @tkarttunen | draft | 2026-10-27 | 2026-10-28 |
| [#6849](https://github.com/ROCm/aiter/pull/6849) | [Triton/Gluon] feat(triton): add broadcast-Q causal jagged a... | @sunxxuns | open | 2026-10-22 | 2026-10-28 |
| [#6883](https://github.com/ROCm/aiter/pull/6883) | [Test] Stop test_kvcache from counting uninitialized cache b... | @KHassanQazi | open | 2026-10-23 | 2026-10-28 |
| [#6444](https://github.com/ROCm/aiter/pull/6444) | [HIP] PA decode PS reduce: optional query_start_loc for ragg... | @andrei-kochin | open | 2026-10-12 | 2026-10-28 |
| [#6486](https://github.com/ROCm/aiter/pull/6486) | [HIP] [Bugfix] Fix Gluon PA AOT padding specialization and c... | @sammysun0711 | open | 2026-10-13 | 2026-10-28 |
| [#6894](https://github.com/ROCm/aiter/pull/6894) | [FlyDSL] [Perf] gfx1250 grouped MoE: route small TP batches ... | @ahmed-bsod | open | 2026-10-23 | 2026-10-28 |
| [#7089](https://github.com/ROCm/aiter/pull/7089) | [Fix] Skip empty-work gathers in gfx1250 MLA PS1 | @XiaobingSuper | draft | 2026-10-28 | 2026-10-28 |
| [#6558](https://github.com/ROCm/aiter/pull/6558) | [FlyDSL] [CI] [MoonEP] Run the planner and weight pool on gf... | @JiaoliangYu | open | 2026-10-15 | 2026-10-28 |
| [#7000](https://github.com/ROCm/aiter/pull/7000) | [HIP] [Perf] OPUS sparse MLA v4 prefill: warp-specialized fp... | @chushic | open | 2026-10-27 | 2026-10-28 |
| [#7001](https://github.com/ROCm/aiter/pull/7001) | [FlyDSL] [Perf] MegaMoE: faster compact Stage1 producer and ... | @chushic | open | 2026-10-27 | 2026-10-28 |
| [#7059](https://github.com/ROCm/aiter/pull/7059) | [Triton/Gluon] [Config] Add gfx1150 RMSNorm large-M/small-N ... | @klin2024 | draft | 2026-10-28 | 2026-10-28 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-10-28 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-10-28 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-10-28 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-10-28 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-10-28 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-10-28 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-10-28 |
| [#5219](https://github.com/ROCm/aiter/pull/5219) | [Config] DSv4 TP8 a8w8 blockscale bpreshuffle: add Flash and... | @kevin-mii | open | 2026-09-02 | 2026-10-28 |
| [#5220](https://github.com/ROCm/aiter/pull/5220) | [HIP] pa_sparse_prefill: address out with its own strides | @kevin-mii | open | 2026-09-03 | 2026-10-28 |
| [#5855](https://github.com/ROCm/aiter/pull/5855) | [MORI] Multi-node + MORI_V2 | @k50112113 | open | 2026-09-25 | 2026-10-28 |
| [#5929](https://github.com/ROCm/aiter/pull/5929) | [Triton/Gluon] gfx950 split-KV 3D attention for head_dim >= ... | @prashant182 | open | 2026-09-29 | 2026-10-28 |
| [#6184](https://github.com/ROCm/aiter/pull/6184) | [Bugfix][fused_moe] Do not use the inline-sort MXFP4 path wh... | @Fangzhou-Ai | open | 2026-10-06 | 2026-10-28 |
| [#6785](https://github.com/ROCm/aiter/pull/6785) | [HIP] [Perf] paged_attention_ll4mi: read V transposed with d... | @Arist12 | open | 2026-10-21 | 2026-10-28 |
| [#5561](https://github.com/ROCm/aiter/pull/5561) | [Bugfix] Drain FlyDSL stage-1 LDS-DMA loads before the tile ... | @kevin-mii | draft | 2026-09-15 | 2026-10-28 |
| [#6786](https://github.com/ROCm/aiter/pull/6786) | [HIP] [Feature] a8w8 blockscale asm: out_zeroed skips the sp... | @kevin-mii | draft | 2026-10-21 | 2026-10-28 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-10-27 |
| [#7041](https://github.com/ROCm/aiter/pull/7041) | tuning_on_benchmarks | @Boss2002n | draft | 2026-10-27 | 2026-10-27 |
| [#6967](https://github.com/ROCm/aiter/pull/6967) | [Triton/Gluon] Add fused MoE routing kernel | @azaidy | open | 2026-10-26 | 2026-10-27 |
| [#6944](https://github.com/ROCm/aiter/pull/6944) | [Bugfix] Detect XGMI topology for custom all-reduce | @olka-amd | open | 2026-10-26 | 2026-10-27 |
| [#7005](https://github.com/ROCm/aiter/pull/7005) | [DSV4.1Flash][MoE tuning] MoE tuner fixes for DEP | @heachary | open | 2026-10-27 | 2026-10-27 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | [HIP] Cache the paged_attention_v1 launch plan to fix batch=... | @zjin-lcf | open | 2026-08-03 | 2026-10-27 |
| [#6111](https://github.com/ROCm/aiter/pull/6111) | [op_tests] test_gemm_a8w8_blockscale: --graph/--graph-replay... | @arakowsk-amd | open | 2026-10-02 | 2026-10-27 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-10-27 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | [JIT] feat: Support LoongArch64, LoongArch64 not support Cod... | @Xinmudotmoe | open | 2026-08-12 | 2026-10-27 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-10-27 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-10-27 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-10-27 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [HIP] [MLA v4 nm] Drop kv_last_page_lens from ABI + self-con... | @amd-ruitang3 | open | 2026-07-21 | 2026-10-27 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-10-27 |
| [#5087](https://github.com/ROCm/aiter/pull/5087) | [HIP] [BugFix] Fix BF16 FMHA extreme negative logits | @akshatvishu | open | 2026-08-28 | 2026-10-27 |
| [#6108](https://github.com/ROCm/aiter/pull/6108) | [Triton/Gluon] Add non-causal support to unified attention | @amd-xavierwang | open | 2026-10-02 | 2026-10-27 |
| [#6971](https://github.com/ROCm/aiter/pull/6971) | [MLA] Return a valid LSE from single-split BF16 QH64/QH128 d... | @maeehart | draft | 2026-10-26 | 2026-10-26 |
| [#6955](https://github.com/ROCm/aiter/pull/6955) | [Triton/Gluon] Take sparse MLA's native fp8 dtype from get_f... | @jin-amd | draft | 2026-10-26 | 2026-10-26 |
| [#6579](https://github.com/ROCm/aiter/pull/6579) | [JIT] Fix an indefinite JIT build hang when a lock holder is... | @amd-bartgips | draft | 2026-10-15 | 2026-10-26 |
| [#6613](https://github.com/ROCm/aiter/pull/6613) | [Triton][MHA] Proposal: Triton harness tunes MHA tiles for t... | @amd-bartgips | draft | 2026-10-16 | 2026-10-26 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | [FlyDSL] Implement FlyDSL version of fused_qk_norm_mrope_3d_... | @amd-meskelin | open | 2026-07-24 | 2026-10-26 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-10-26 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-10-26 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-10-26 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-10-26 |
| [#4915](https://github.com/ROCm/aiter/pull/4915) | [Config] [Kimi K3 fix] Drop gfx942/gfx950 opus rows from the... | @hyukjlee | open | 2026-08-21 | 2026-10-26 |
| [#4957](https://github.com/ROCm/aiter/pull/4957) | [MLA] Fix gfx942 gqa64 sparse-MLA decode GPU fault (route to... | @raviguptaamd | open | 2026-08-24 | 2026-10-26 |
| [#5064](https://github.com/ROCm/aiter/pull/5064) | [HIP] [JIT] [Kernel][Perf][Hardware][gfx1201] Add RX 9070 XT... | @davidchen-rocm | open | 2026-08-28 | 2026-10-26 |
| [#5223](https://github.com/ROCm/aiter/pull/5223) | [HIP] [Feature] OPUS bf16 flash-attn: head dim 64, attention... | @siqiy-cerebras | open | 2026-09-03 | 2026-10-26 |
| [#5278](https://github.com/ROCm/aiter/pull/5278) | [Config] Add gfx950 a8w8_blockscale tunings for GLM-5.3 shap... | @stefanskiasan | open | 2026-09-04 | 2026-10-26 |
| [#6295](https://github.com/ROCm/aiter/pull/6295) | fix(fused_moe): rank get_block_size_M candidates by useful w... | @jiaweche | open | 2026-10-09 | 2026-10-26 |
| [#6759](https://github.com/ROCm/aiter/pull/6759) | [Triton/Gluon] Retune gfx950 Triton ops that regressed with ... | @yanxuer-999 | draft | 2026-10-21 | 2026-10-25 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] [CI] Add MHA forward tuning scripts and kernel-in... | @huishi-hs | open | 2026-08-26 | 2026-10-25 |
| [#6003](https://github.com/ROCm/aiter/pull/6003) | [Config] DSv4 E=385/topk7 fused MoE: fp8-epilogue decode sta... | @AMD-yanfeiwang | open | 2026-09-30 | 2026-10-25 |
| [#6119](https://github.com/ROCm/aiter/pull/6119) | [HIP] [Bugfix] mxfp4 moe sort skip invalid ids (-1s) | @cagrikymk | open | 2026-10-03 | 2026-10-25 |
| [#6089](https://github.com/ROCm/aiter/pull/6089) | [Config] [Perf] [gfx950] Add Kimi-K3 BF16 decode GEMM config... | @xiaohuguo2023 | open | 2026-10-02 | 2026-10-24 |
| [#6882](https://github.com/ROCm/aiter/pull/6882) | [CI] Upgrade shared PyTorch images to ROCm 10.1 and PyTorch ... | @rkayaith | draft | 2026-10-23 | 2026-10-23 |
| [#6876](https://github.com/ROCm/aiter/pull/6876) | [Triton/Gluon] unified_attention: add a deterministic (batch... | @aarnetalman | draft | 2026-10-23 | 2026-10-23 |
| [#6585](https://github.com/ROCm/aiter/pull/6585) |  [Config] [Perf] [gfx950] Add MiniMax-M3 AttnFP8 A8W8 bpresh... | @amd-bishwoadhikari | draft | 2026-10-15 | 2026-10-23 |
| [#6531](https://github.com/ROCm/aiter/pull/6531) | [Config] [Perf] [gfx950] Add MiniMax-M3 ViT BF16 GEMM config | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-23 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-10-23 |
| [#5163](https://github.com/ROCm/aiter/pull/5163) | [gfx1250] feat(mega_moe): add operand init modes and b2b tim... | @arakowsk-amd | open | 2026-09-01 | 2026-10-23 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-10-22 |
| [#6036](https://github.com/ROCm/aiter/pull/6036) | [HIP] [JIT] [Kernel] fused MoE sorting: single-launch bitmas... | @sumin-hong | open | 2026-10-01 | 2026-10-22 |
| [#5384](https://github.com/ROCm/aiter/pull/5384) | [Triton/Gluon] Move gluon mla_gluon kernel into _gluon_kerne... | @vgokhale | draft | 2026-09-09 | 2026-10-22 |
| [#6720](https://github.com/ROCm/aiter/pull/6720) | [HIP] fused_dynamic_mx_quant_moe_sort: use the split path ab... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6719](https://github.com/ROCm/aiter/pull/6719) | [Triton] gfx1250: fix MXFP4 quant, RMSNorm and gemm_afp4wfp4... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6623](https://github.com/ROCm/aiter/pull/6623) | [Config][GEMM][gfx950] Qwen3.8-27B ViT BF16 GEMM shapes (tun... | @vorapolsiloai | draft | 2026-10-16 | 2026-10-20 |
| [#6698](https://github.com/ROCm/aiter/pull/6698) | add bmm apf8wfp8 gemm and inverse rope quant kernel | @ahmed-bsod | draft | 2026-10-20 | 2026-10-20 |
| [#6052](https://github.com/ROCm/aiter/pull/6052) | [FlyDSL] [CI] MegaMoE: stage1_fused/stage2_fused switches, m... | @yanboshao | draft | 2026-10-01 | 2026-10-20 |
| [#6683](https://github.com/ROCm/aiter/pull/6683) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @afriedri | draft | 2026-10-19 | 2026-10-19 |
| [#6628](https://github.com/ROCm/aiter/pull/6628) | Optimize mxfp4 gfx1250 gluon | @azaidy | draft | 2026-10-16 | 2026-10-19 |
| [#5532](https://github.com/ROCm/aiter/pull/5532) | Add --fused-expert option to 2stage moe tests | @JohnNikolay84 | draft | 2026-09-15 | 2026-10-18 |
| [#6642](https://github.com/ROCm/aiter/pull/6642) | feat(moe): support MXFP8 experts on gfx1250 | @XiaobingSuper | draft | 2026-10-17 | 2026-10-17 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | draft | 2026-09-18 | 2026-10-16 |
| [#5883](https://github.com/ROCm/aiter/pull/5883) | Ci timeout fix recon | @TennyWang1223 | draft | 2026-09-27 | 2026-10-16 |
| [#5897](https://github.com/ROCm/aiter/pull/5897) | [WIP] [Triton/Gluon] gfx950 a16w16: compute-bound Gluon kern... | @zhanglx13 | draft | 2026-09-28 | 2026-10-15 |
| [#6555](https://github.com/ROCm/aiter/pull/6555) | Satya/tuning rel to default | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6553](https://github.com/ROCm/aiter/pull/6553) | Satya/tuning preempt local best | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6554](https://github.com/ROCm/aiter/pull/6554) | satya/tuning_search_space | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#5347](https://github.com/ROCm/aiter/pull/5347) | [Feature] Add manifest-driven static-page batch prefill disp... | @vstakhov-amd | draft | 2026-09-08 | 2026-10-14 |
| [#6051](https://github.com/ROCm/aiter/pull/6051) | [Bugfix] Support asymmetric Q/K and V heads in unified atten... | @pbkowalski | draft | 2026-10-01 | 2026-10-14 |
| [#6529](https://github.com/ROCm/aiter/pull/6529) | [Config] [MoE] [gfx950] Add MiniMax-M3 TP=2 decode FMOE shap... | @amd-bishwoadhikari | draft | 2026-10-14 | 2026-10-14 |
| [#6487](https://github.com/ROCm/aiter/pull/6487) | [Triton/Gluon] Extend Gluon PA benchmark for asymmetric K/V ... | @sammysun0711 | draft | 2026-10-13 | 2026-10-14 |
| [#6512](https://github.com/ROCm/aiter/pull/6512) | [HIP] [OPUS] [JIT] Add gfx950 BF16 MoE training backward | @yifehuan | draft | 2026-10-14 | 2026-10-14 |
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
| [#5745](https://github.com/ROCm/aiter/pull/5745) | [HIP] Guard GroupNorm vectorization at channel boundaries | @UD-mmcminn | open | 2026-09-22 | 2026-10-10 |
| [#4641](https://github.com/ROCm/aiter/pull/4641) | [FlyDSL] Add SwiGLU activation to moe_gemm_2stage stage1 ker... | @akii96 | draft | 2026-08-08 | 2026-10-10 |
| [#6186](https://github.com/ROCm/aiter/pull/6186) | testintel: add missing test for kernel (created by lixzhang) | @jiagaoxiang | draft | 2026-10-06 | 2026-10-09 |
| [#6155](https://github.com/ROCm/aiter/pull/6155) | [Triton/Gluon] [Do Not Merge] add multimodal prefix support ... | @amd-xavierwang | draft | 2026-10-05 | 2026-10-09 |
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
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-10-07 |
| [#4582](https://github.com/ROCm/aiter/pull/4582) | [Triton/Gluon] [MLA][gfx942] Add CDNA3 decode kernel | @maeehart | open | 2026-08-05 | 2026-10-07 |
| [#4637](https://github.com/ROCm/aiter/pull/4637) | fix(quant): use saturating RNE for scaled int8 casts | @skyguan92 | open | 2026-08-07 | 2026-10-07 |
| [#4640](https://github.com/ROCm/aiter/pull/4640) | feat(triton): enable gfx1100 MXFP4 MoE | @skyguan92 | open | 2026-08-08 | 2026-10-07 |
| [#4648](https://github.com/ROCm/aiter/pull/4648) | [Triton][Hardware] Add gfx1100 A8W8 tuning config | @01xjw | open | 2026-08-10 | 2026-10-07 |
| [#4663](https://github.com/ROCm/aiter/pull/4663) | [tune] DSv4 bf16: add gfx950 LM-head GEMM configs (N=129280,... | @jiacao-amd | draft | 2026-08-10 | 2026-10-07 |
| [#4681](https://github.com/ROCm/aiter/pull/4681) | [gluon][mla][gfx950] add M-pack MTP regime (bh16mpack) | @yanxuer-999 | draft | 2026-08-11 | 2026-10-07 |
| [#4686](https://github.com/ROCm/aiter/pull/4686) | [cpp_itfs] Harden the C++ JIT loader: no shell, validated pa... | @fjankovi | draft | 2026-08-11 | 2026-10-07 |
| [#4689](https://github.com/ROCm/aiter/pull/4689) | [triton][gemm] gemm_a16wfp4: mask the b_scales load when EVE... | @lijinpei-amd | open | 2026-08-11 | 2026-10-07 |
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
| [#5290](https://github.com/ROCm/aiter/pull/5290) | [HIP] Fix rmsnorm_quant cross-row reads and writes for rows ... | @rk9595 | open | 2026-09-05 | 2026-10-07 |
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
| [#6086](https://github.com/ROCm/aiter/pull/6086) | [cktile BF16-MXFP4 MOE][bug] Fix wrong output with `model_di... | @fxmarty-amd | draft | 2026-10-02 | 2026-10-02 |
| [#5920](https://github.com/ROCm/aiter/pull/5920) | [Perf] Add SPLIT_UNMASKED_LOOP=true to fp8 Gemma4 prefill un... | @simondanielsson | draft | 2026-09-28 | 2026-10-02 |
| [#6030](https://github.com/ROCm/aiter/pull/6030) | [mHC][DSv4] gfx950 fused post+pre: use tile_m=16 for the FP3... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#6029](https://github.com/ROCm/aiter/pull/6029) | [Triton][CK][DSv4] wq_b / wo_b fp8 blockscale GEMMs (N=8192 ... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#6005](https://github.com/ROCm/aiter/pull/6005) | [FlyDSL] HGEMM: keep the C shuffle in fp32 for fp32 output; ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#6004](https://github.com/ROCm/aiter/pull/6004) | [Triton][DSv4] wqkv_a fp8 blockscale GEMM (N=2048, K=7168): ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#5983](https://github.com/ROCm/aiter/pull/5983) | [Triton/Gluon] [Config] Fix gfx950 FP8 preshuffle shared-mem... | @whx-sjtu | draft | 2026-09-30 | 2026-09-30 |
| [#5950](https://github.com/ROCm/aiter/pull/5950) | [DO NOT MERGE] Add GPU ASan CI | @leo-automation | draft | 2026-09-29 | 2026-09-29 |
| [#5924](https://github.com/ROCm/aiter/pull/5924) | [HIP] [Bugfix] Guard gfx942 BF16 MLA KV address span | @BANANASJIM | draft | 2026-09-29 | 2026-09-29 |
| [#5902](https://github.com/ROCm/aiter/pull/5902) | [Config] [Perf] Retune GLM5 MXFP4 FMoE for gfx950 | @XiaobingSuper | draft | 2026-09-28 | 2026-09-28 |
| [#5727](https://github.com/ROCm/aiter/pull/5727) | [WIP] Add MoonEP prefill and decode planning policies | @JiaoliangYu | draft | 2026-09-21 | 2026-09-28 |
| [#5881](https://github.com/ROCm/aiter/pull/5881) | [FlyDSL] Fuse the GDN gated RMSNorm into the out_proj GEMM f... | @maeehart | draft | 2026-09-26 | 2026-09-26 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
| [#5404](https://github.com/ROCm/aiter/pull/5404) | [CK] [FlyDSL] [Perf] Add BM16 SwiGLU path for MiniMax M3 | @XiaobingSuper | draft | 2026-09-10 | 2026-09-21 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables + fix MXFP4 aux... | @JiaoliangYu | draft | 2026-09-20 | 2026-09-20 |
| [#5625](https://github.com/ROCm/aiter/pull/5625) | [Config] [tuning] Add DSv4 a4w4 fused-MoE tuning tables for ... | @JiaoliangYu | draft | 2026-09-17 | 2026-09-19 |
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
| [#5077](https://github.com/ROCm/aiter/pull/5077) | Revert "[TRITON][GLUON] Prefill MQA Logits kernel tuning for... | @zhuyuhua-v | draft | 2026-08-28 | 2026-09-01 |
| [#5167](https://github.com/ROCm/aiter/pull/5167) | [Kernel] Add gfx950 DSV4 FlyDSL sparse-MLA prefill | @jiacao-amd | draft | 2026-09-01 | 2026-09-01 |
| [#5127](https://github.com/ROCm/aiter/pull/5127) | Fix/opus jit catalog sync | @jamesETsmith | draft | 2026-08-30 | 2026-08-31 |
| [#5117](https://github.com/ROCm/aiter/pull/5117) | [Kernel] [Perf] MXFP6 non-temporal-store GEMM variants and F... | @jasainio | draft | 2026-08-30 | 2026-08-30 |
| [#4992](https://github.com/ROCm/aiter/pull/4992) | [FlyDSL] gfx950 hd=72 varlen FMHA for Qwen3-VL prefill | @msaffari-amd | draft | 2026-08-25 | 2026-08-27 |
| [#4981](https://github.com/ROCm/aiter/pull/4981) | [FlyDSL] mega all gather merge stage1 | @Bernard-Liu | draft | 2026-08-25 | 2026-08-25 |
| [#7178](https://github.com/ROCm/aiter/pull/7178) | [FlyDSL] [gfx1250] flydsl batched mxfp8 GEMM: optional fused... | @karverma-amd | merged | 2026-10-29 | 2026-11-11 |
| [#7572](https://github.com/ROCm/aiter/pull/7572) | [FlyDSL] [MoE] comm-fused MoE: launch clear_missing_routes o... | @yhl-amd | merged | 2026-11-06 | 2026-11-11 |
| [#5186](https://github.com/ROCm/aiter/pull/5186) | [CK] [OPUS] [CI] Mi300a enablement | @afanfa | merged | 2026-09-01 | 2026-11-11 |
| [#7804](https://github.com/ROCm/aiter/pull/7804) | [FlyDSL] Fix attention A2A MX Q-scale backing for mha_v4 que... | @TennyWang1223 | merged | 2026-11-11 | 2026-11-11 |
| [#7787](https://github.com/ROCm/aiter/pull/7787) | [RFC #7240] Document every routed contract, and gate that it... | @zufayu | merged | 2026-11-11 | 2026-11-11 |
| [#7040](https://github.com/ROCm/aiter/pull/7040) | [Triton/Gluon] : Add padding-mode support to specialized Tri... | @saeid-rostami | merged | 2026-10-27 | 2026-11-11 |
| [#7728](https://github.com/ROCm/aiter/pull/7728) | [RFC #7240] Route the DeepSeek V4.1 op surface: seven contra... | @zufayu | merged | 2026-11-10 | 2026-11-11 |
| [#7289](https://github.com/ROCm/aiter/pull/7289) | [Triton/Gluon] [gfx1250] gemm_a16w16: GPT-OSS decode buckets... | @akao-amd | merged | 2026-11-02 | 2026-11-11 |
| [#6835](https://github.com/ROCm/aiter/pull/6835) | [Triton/Gluon] Add fused Qwen3-Next attention prologue (gfx9... | @karverma-amd | merged | 2026-10-22 | 2026-11-11 |
| [#7661](https://github.com/ROCm/aiter/pull/7661) | [FlyDSL] [gfx1250] MegaMoE: fold the shared expert output in... | @yhl-amd | merged | 2026-11-09 | 2026-11-11 |
| [#7662](https://github.com/ROCm/aiter/pull/7662) | [FlyDSL] [gfx1250] Radix top-k: 512-thread blocks for long d... | @yhl-amd | merged | 2026-11-09 | 2026-11-11 |
| [#7553](https://github.com/ROCm/aiter/pull/7553) | [FlyDSL] [FMHA] Paged-KV forward prefill | @ruanjm | merged | 2026-11-06 | 2026-11-11 |
| [#7774](https://github.com/ROCm/aiter/pull/7774) | [FlyDSL] Fix a16wfp4 stage2 cache-key test for FlyDSL 0.5.0 | @micmelesse | merged | 2026-11-10 | 2026-11-11 |
| [#7381](https://github.com/ROCm/aiter/pull/7381) | [Config] [Tune] GLM-5.3 a8w8 blockscale GEMM rows for gfx950 | @amd-sriram | merged | 2026-11-03 | 2026-11-11 |
| [#7456](https://github.com/ROCm/aiter/pull/7456) | [Config] gfx1250: grouped-MoE tiles for Kimi-K2 Thinking TP8 | @mqhc2020 | merged | 2026-11-04 | 2026-11-11 |
| [#7043](https://github.com/ROCm/aiter/pull/7043) | [Config] Add M=4096 Qwen3.8-27B TP1 a8w8 blockscale GEMM row... | @phambinhfin | merged | 2026-10-27 | 2026-11-11 |
| [#7655](https://github.com/ROCm/aiter/pull/7655) | [FlyDSL] V0.4.2 Tdm new interface refactor: make_tdm_atom ->... | @xudoyuan | merged | 2026-11-09 | 2026-11-11 |
| [#7620](https://github.com/ROCm/aiter/pull/7620) |  [MoE] [FlyDSL] BM16 adaptive aux sort writes into the calle... | @kkHuang-amd | merged | 2026-11-08 | 2026-11-11 |
| [#7499](https://github.com/ROCm/aiter/pull/7499) | [HIP] fea: impl gfx1250 lamport ar+rms | @TennyWang1223 | merged | 2026-11-05 | 2026-11-11 |
| [#7713](https://github.com/ROCm/aiter/pull/7713) | [Test] [RFC #7240] Pin what a provider's first call may do i... | @zufayu | merged | 2026-11-10 | 2026-11-11 |
| [#5555](https://github.com/ROCm/aiter/pull/5555) | [FlyDSL] QuickAllReduce INT5/INT6 and all-reduce cleanup | @msaffari-amd | merged | 2026-09-15 | 2026-11-11 |
| [#7731](https://github.com/ROCm/aiter/pull/7731) | [Config] [MoE] Add DeepSeek-V4.1-Flash EP8 fused-MoE rows fo... | @yhl-amd | merged | 2026-11-10 | 2026-11-11 |
| [#7254](https://github.com/ROCm/aiter/pull/7254) | [Config] Add MI350P (gfx950, 128 CU) a8w8 blockscale GEMM co... | @amd-sriram | merged | 2026-10-31 | 2026-11-11 |
| [#7555](https://github.com/ROCm/aiter/pull/7555) | [HIP] perf: gfx1250 LL all-gather lines carry 12 bytes and o... | @zejunchen-zejun | merged | 2026-11-06 | 2026-11-11 |
| [#7654](https://github.com/ROCm/aiter/pull/7654) | [RFC #7240] Let a provider report what a kernel costs, and r... | @zufayu | merged | 2026-11-09 | 2026-11-11 |
| [#7748](https://github.com/ROCm/aiter/pull/7748) | [CI] [DI] Fix AITER vLLM & ATOM workflows. | @lcskrishna | merged | 2026-11-10 | 2026-11-11 |
| [#7421](https://github.com/ROCm/aiter/pull/7421) | [Triton/Gluon] [GFX12] A8K4V8 Attention | @k50112113 | merged | 2026-11-03 | 2026-11-11 |
| [#6926](https://github.com/ROCm/aiter/pull/6926) | [MoE] [Bugfix] Zero the a2 buffer before dynamic per-tensor ... | @AndreasKaratzas | merged | 2026-10-26 | 2026-11-10 |
| [#7513](https://github.com/ROCm/aiter/pull/7513) | [Triton/Gluon] [Config] gfx950: tune gemm_a16w16 for kimik3/... | @yanxuer-999 | merged | 2026-11-05 | 2026-11-10 |
| [#7644](https://github.com/ROCm/aiter/pull/7644) | [Config] [Perf] Tune DeepSeek-V4-Pro small-M FP8 GEMMs on gf... | @hubertlu-tw | merged | 2026-11-09 | 2026-11-10 |
| [#7457](https://github.com/ROCm/aiter/pull/7457) | [Config] Add gfx950 BF16 GEMM tunings for Gemma-4-26B-A4B | @lishuoshuo-amd | merged | 2026-11-04 | 2026-11-10 |
| [#6995](https://github.com/ROCm/aiter/pull/6995) | [FlyDSL] [CI] [Feature] Add explicit clamped SiLU to FlyDSL ... | @LiuYinfeng01 | merged | 2026-10-27 | 2026-11-10 |
| [#6895](https://github.com/ROCm/aiter/pull/6895) | [Feat] Add tuner event pid recovery and fix deadlock | @jamesETsmith | merged | 2026-10-23 | 2026-11-10 |
| [#7613](https://github.com/ROCm/aiter/pull/7613) | [Bugfix] MLA decode: merge only the splits gfx950 fp8 gqa16 ... | @AndreasKaratzas | merged | 2026-11-07 | 2026-11-10 |
| [#7489](https://github.com/ROCm/aiter/pull/7489) | [Triton/Gluon] fused_clamp_act_mul: accept rows of whole qua... | @karverma-amd | merged | 2026-11-05 | 2026-11-10 |
| [#5794](https://github.com/ROCm/aiter/pull/5794) | [ASM] [HIP] feat(fmoe): add SwiGLU OAI MXFP4 FLAT kernels fo... | @alexioslyrakis-amd | merged | 2026-09-23 | 2026-11-10 |
| [#7652](https://github.com/ROCm/aiter/pull/7652) | [FlyDSL] [AOT] Scan gfx1250 GEMM rows at representative M, n... | @aoli26 | merged | 2026-11-09 | 2026-11-10 |
| [#5985](https://github.com/ROCm/aiter/pull/5985) | [HIP] Opt group quant gfx1250 | @yzhou103 | merged | 2026-09-30 | 2026-11-10 |
| [#7708](https://github.com/ROCm/aiter/pull/7708) | review-pr: register the ten rule ids derive() can emit but A... | @zufayu | merged | 2026-11-10 | 2026-11-10 |
| [#7694](https://github.com/ROCm/aiter/pull/7694) | [CI] docker_pull_with_retry: Fall back to mirror.gcr.io when... | @syang-genai | merged | 2026-11-10 | 2026-11-10 |
| [#7696](https://github.com/ROCm/aiter/pull/7696) | [RFC #7240] aiter-kernel-plugin skill: how an agent ports a ... | @zufayu | merged | 2026-11-10 | 2026-11-10 |
| [#7227](https://github.com/ROCm/aiter/pull/7227) | review-pr: correct FlyDSL D10/D10b and add D13/D14 from revi... | @samremes | merged | 2026-10-30 | 2026-11-10 |
| [#7226](https://github.com/ROCm/aiter/pull/7226) | [Docs] FlyDSL review guidance: live-GPU test gates, test qua... | @samremes | merged | 2026-10-30 | 2026-11-10 |
| [#7192](https://github.com/ROCm/aiter/pull/7192) | [Triton/Gluon] [GFX950] Mha v4 production | @leonling-ll | merged | 2026-10-30 | 2026-11-10 |
| [#7695](https://github.com/ROCm/aiter/pull/7695) | [Docs] [RFC #7240] How to serve an AITER op from an out-of-t... | @zufayu | merged | 2026-11-10 | 2026-11-10 |
| [#7291](https://github.com/ROCm/aiter/pull/7291) | [ASM] [gfx1250] asm mha bf16 fwd: allow D64 without a sink | @shay-li77 | merged | 2026-11-02 | 2026-11-10 |
| [#7484](https://github.com/ROCm/aiter/pull/7484) | [JIT] Route five ops through the provider interface, and let... | @zufayu | merged | 2026-11-05 | 2026-11-10 |
| [#7617](https://github.com/ROCm/aiter/pull/7617) | [ASM] [Bugfix] Fix LDS race in gfx950 FP8 QH16 qseqlen1 MLA ... | @AndreasKaratzas | merged | 2026-11-08 | 2026-11-10 |
| [#7622](https://github.com/ROCm/aiter/pull/7622) | [ASM] Fix LDS races in gfx950 FP8 QH16 qseqlen1 persistent M... | @AndreasKaratzas | merged | 2026-11-08 | 2026-11-10 |
| [#7388](https://github.com/ROCm/aiter/pull/7388) | [FlyDSL] [Misc] pa_decode: key the tile kernel on FlyDSL dty... | @fsx950223 | merged | 2026-11-03 | 2026-11-10 |
| [#7098](https://github.com/ROCm/aiter/pull/7098) | [FlyDSL] [gfx1250] FMHA prefill m32x8: skip query tiles past... | @vgokhale | merged | 2026-10-28 | 2026-11-10 |
| [#7669](https://github.com/ROCm/aiter/pull/7669) | [CI] Add biweekly guard for release automation | @gyohuangxin | merged | 2026-11-09 | 2026-11-10 |
| [#7466](https://github.com/ROCm/aiter/pull/7466) | [CI] Run the provider interface tests as a CPU-only gate on ... | @zufayu | merged | 2026-11-04 | 2026-11-10 |
| [#7600](https://github.com/ROCm/aiter/pull/7600) | [FlyDSL] [CI] [Build] Bump FlyDSL pin to v0.5.0 | @coderfeli | merged | 2026-11-07 | 2026-11-10 |
| [#7647](https://github.com/ROCm/aiter/pull/7647) | MHA v4: fix torch 2.10 Dynamo graph break | @nsakkine | merged | 2026-11-09 | 2026-11-09 |
| [#7660](https://github.com/ROCm/aiter/pull/7660) | [CI] Schedule release automation on Sunday | @gyohuangxin | merged | 2026-11-09 | 2026-11-09 |
| [#7100](https://github.com/ROCm/aiter/pull/7100) | [Triton/Gluon] [GFX12] Add SPEC_DECODE mode to UA with tunne... | @k50112113 | merged | 2026-10-28 | 2026-11-09 |
| [#7570](https://github.com/ROCm/aiter/pull/7570) | [HIP] [Perf] Add a wide split-K reduce for MLA decode and ve... | @yuychang | merged | 2026-11-06 | 2026-11-09 |
| [#7515](https://github.com/ROCm/aiter/pull/7515) | [Config] [Tuning] Add Kimi-K3 gfx950 BF16 decode rows for qk... | @nsusanto | merged | 2026-11-05 | 2026-11-09 |
| [#6941](https://github.com/ROCm/aiter/pull/6941) | [tuner] Reject zero timing measurements | @yzhou103 | merged | 2026-10-26 | 2026-11-09 |
| [#7465](https://github.com/ROCm/aiter/pull/7465) | [Build] [RFC #7240] Kernel provider interface: configuration... | @zufayu | merged | 2026-11-04 | 2026-11-09 |
| [#7540](https://github.com/ROCm/aiter/pull/7540) | [HIP] Fix/7534 moe sorting opus gfx1250 | @demonsan | merged | 2026-11-06 | 2026-11-09 |
| [#7503](https://github.com/ROCm/aiter/pull/7503) | [HIP] [FlyDSL] Conv3d gfx1250 Optimization | @huizzhan | merged | 2026-11-05 | 2026-11-09 |
| [#7501](https://github.com/ROCm/aiter/pull/7501) | [FlyDSL] [MoE] [gfx1250] give each MX combine chunk its own ... | @lalala-sh | merged | 2026-11-05 | 2026-11-09 |
| [#7641](https://github.com/ROCm/aiter/pull/7641) | [CI] CI: add MI300X standard label trigger | @gyohuangxin | merged | 2026-11-09 | 2026-11-09 |
| [#7642](https://github.com/ROCm/aiter/pull/7642) | review-pr: a queued run past its gate is the box's queue, no... | @zufayu | merged | 2026-11-09 | 2026-11-09 |
| [#7385](https://github.com/ROCm/aiter/pull/7385) | [CI] ci: cache CK submodule checkout | @gyohuangxin | merged | 2026-11-03 | 2026-11-09 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-11-11T15:41:42Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2721](https://github.com/ROCm/ATOM/pull/2721) | [MiniMax-M3.1] P/D from a PP4 prefill into a TP4 decode (1/2... | @Jasen2201 | open | 2026-10-26 | 2026-11-11 |
| [#3020](https://github.com/ROCm/ATOM/pull/3020) | perf(dsv41): fold the shared-expert add into the MoE TP all-... | @karverma-amd | open | 2026-11-05 | 2026-11-11 |
| [#3063](https://github.com/ROCm/ATOM/pull/3063) | fix(kimi-k3.1): include DSA index keys in offload | @Jasen2201 | open | 2026-11-06 | 2026-11-11 |
| [#3122](https://github.com/ROCm/ATOM/pull/3122) | [1/N atomesh rust runtime] fix(mesh): OpenAI-compatible chat... | @Yuechguo | open | 2026-11-09 | 2026-11-11 |
| [#3135](https://github.com/ROCm/ATOM/pull/3135) | perf(dp-logits): lm_head writes its shard straight into the ... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#3134](https://github.com/ROCm/ATOM/pull/3134) | perf(dspark): wide Markov-chain stage-1 kernel and bonus sam... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#3130](https://github.com/ROCm/ATOM/pull/3130) | perf(dsv41): DSpark draft attention reads context and draft ... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#3129](https://github.com/ROCm/ATOM/pull/3129) | perf(dsv41): Triton top-k gating after the MoE router GEMM | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#2903](https://github.com/ROCm/ATOM/pull/2903) | [DSV4.1][Perf] Fuse Q RoPE/quant, sparse attention and outpu... | @yzhou103 | open | 2026-11-02 | 2026-11-11 |
| [#2962](https://github.com/ROCm/ATOM/pull/2962) | [MiniMax-M3.1] MXFP4 index cache; reject M3 --kv-cache-dtype... | @ganyi1996ppo | open | 2026-11-04 | 2026-11-11 |
| [#2886](https://github.com/ROCm/ATOM/pull/2886) | feat(minimax-m3): mono decode on gfx1250 (MI455X) | @XiaobingSuper | draft | 2026-11-01 | 2026-11-11 |
| [#2752](https://github.com/ROCm/ATOM/pull/2752) | [Offload] Support M3 PAGE layouts in Mooncake Store | @MengqingCao | open | 2026-10-27 | 2026-11-11 |
| [#3215](https://github.com/ROCm/ATOM/pull/3215) | [DeepSeek-V4.1] Mono decode on AITER's decode-layer ops (ATO... | @zhiding512 | draft | 2026-11-11 | 2026-11-11 |
| [#3141](https://github.com/ROCm/ATOM/pull/3141) | feat(mesh): routing decision observability 1/2 — decision me... | @wanzhenchn | open | 2026-11-10 | 2026-11-11 |
| [#3202](https://github.com/ROCm/ATOM/pull/3202) | [DCP] Coarsen the A2A pack kernel on wide steps and 16B-alig... | @yitingw1 | open | 2026-11-11 | 2026-11-11 |
| [#3173](https://github.com/ROCm/ATOM/pull/3173) | feat(pd): export decode admission and deferred-free KV metri... | @MengqingCao | open | 2026-11-10 | 2026-11-11 |
| [#3187](https://github.com/ROCm/ATOM/pull/3187) | [MoE] MegaMoE: let AITER pick small/large/staged routes from... | @GwilliamHu | open | 2026-11-11 | 2026-11-11 |
| [#3208](https://github.com/ROCm/ATOM/pull/3208) | ci(atomesh): drop MI350X nightly, clean stopped containers, ... | @junyyang-amd | open | 2026-11-11 | 2026-11-11 |
| [#3038](https://github.com/ROCm/ATOM/pull/3038) | [MiniMax-M3.1] P/D from a PP4 prefill into a TP4 decode (2/2... | @Jasen2201 | open | 2026-11-05 | 2026-11-11 |
| [#3210](https://github.com/ROCm/ATOM/pull/3210) | feat(mesh): agentic prefill routing (2/3): count in-flight p... | @Jasen2201 | open | 2026-11-11 | 2026-11-11 |
| [#3211](https://github.com/ROCm/ATOM/pull/3211) | feat(mesh): agentic prefill routing (3/3): the agentic polic... | @Jasen2201 | open | 2026-11-11 | 2026-11-11 |
| [#2704](https://github.com/ROCm/ATOM/pull/2704) | [CI] atomesh: Store owners on the 2 MiB HugeTLB pages Spur r... | @Jasen2201 | draft | 2026-10-26 | 2026-11-11 |
| [#3142](https://github.com/ROCm/ATOM/pull/3142) | feat(mesh): routing decision observability 2/2 — sampled dec... | @wanzhenchn | open | 2026-11-10 | 2026-11-11 |
| [#3171](https://github.com/ROCm/ATOM/pull/3171) | fix(runner): reconcile KV block counts across TP and PCP-gro... | @MengqingCao | open | 2026-11-10 | 2026-11-11 |
| [#3165](https://github.com/ROCm/ATOM/pull/3165) | feat(pd): keep free decode KV when admitting P/D receives | @MengqingCao | open | 2026-11-10 | 2026-11-11 |
| [#3066](https://github.com/ROCm/ATOM/pull/3066) | [MiniMax-M3.1] Windowed DSpark draft KV (3/4): send only the... | @Jasen2201 | open | 2026-11-06 | 2026-11-11 |
| [#3064](https://github.com/ROCm/ATOM/pull/3064) | [MiniMax-M3.1] Windowed DSpark draft KV (1/4): the scheduler... | @Jasen2201 | open | 2026-11-06 | 2026-11-11 |
| [#2850](https://github.com/ROCm/ATOM/pull/2850) | [MiniMax-M3.1] Windowed DSpark draft KV (4/4): keep the draf... | @Jasen2201 | open | 2026-10-30 | 2026-11-11 |
| [#3065](https://github.com/ROCm/ATOM/pull/3065) | [MiniMax-M3.1] Windowed DSpark draft KV (2/4): the block pas... | @Jasen2201 | open | 2026-11-06 | 2026-11-11 |
| [#3041](https://github.com/ROCm/ATOM/pull/3041) | [Bugfix][Qwen3.5] Give image prompts embedding spans so pref... | @syang-genai | open | 2026-11-05 | 2026-11-11 |
| [#2762](https://github.com/ROCm/ATOM/pull/2762) | review-pr: port the automated PR-review pipeline from aiter ... | @zufayu | open | 2026-10-27 | 2026-11-11 |
| [#3209](https://github.com/ROCm/ATOM/pull/3209) | feat(mesh): agentic prefill routing (1/3): route on text ins... | @Jasen2201 | open | 2026-11-11 | 2026-11-11 |
| [#2508](https://github.com/ROCm/ATOM/pull/2508) | [ATOMesh] Add GLM-5.2-MXFP4 2P1D TP8 coverage | @itej89 | open | 2026-10-09 | 2026-11-11 |
| [#2979](https://github.com/ROCm/ATOM/pull/2979) | perf(minimax-m3): tune long-context decode topk tiles | @XiaobingSuper | open | 2026-11-04 | 2026-11-11 |
| [#3147](https://github.com/ROCm/ATOM/pull/3147) | feat(pd): bound decode admission by pending receive KV bytes | @MengqingCao | open | 2026-11-10 | 2026-11-11 |
| [#3206](https://github.com/ROCm/ATOM/pull/3206) | [WIP]feat(mesh): session affinity table around every routing... | @MengqingCao | open | 2026-11-11 | 2026-11-11 |
| [#3214](https://github.com/ROCm/ATOM/pull/3214) | feat(minimax-m3): run the M3.1 shared gate_up GEMM inside th... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3069](https://github.com/ROCm/ATOM/pull/3069) | feat(kimi-k3): PP8 P/D prefill 3/4 — KV and KDA state from a... | @wanzhenchn | open | 2026-11-06 | 2026-11-11 |
| [#2636](https://github.com/ROCm/ATOM/pull/2636) | [Qwen 3.8] LMCache offload for QSA + GDN + PLE state | @ZLkanyo009 | open | 2026-10-19 | 2026-11-11 |
| [#2679](https://github.com/ROCm/ATOM/pull/2679) | refactor(qsa): use aiter QSA kernels instead of vendored cop... | @mengfei-jiang | open | 2026-10-23 | 2026-11-11 |
| [#3023](https://github.com/ROCm/ATOM/pull/3023) | [fix] Kimi-K3.1 DSpark under PP: share the target's embeddin... | @gbyu-amd | open | 2026-11-05 | 2026-11-11 |
| [#3194](https://github.com/ROCm/ATOM/pull/3194) | [Offload] umbp_store: KV offload over a Mori UMBP standalone... | @yhl-amd | draft | 2026-11-11 | 2026-11-11 |
| [#3205](https://github.com/ROCm/ATOM/pull/3205) | feat(minimax-m3): M3.1 decode router sharing a launch with t... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3207](https://github.com/ROCm/ATOM/pull/3207) | feat(minimax-m3): fold the M3.1 shared expert output into th... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3139](https://github.com/ROCm/ATOM/pull/3139) | perf(dspark): vocab-split probabilistic verification; read t... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#2947](https://github.com/ROCm/ATOM/pull/2947) | Qsa index scorer/stage2 | @demonsan | draft | 2026-11-03 | 2026-11-11 |
| [#3027](https://github.com/ROCm/ATOM/pull/3027) | fix(offload): key multimodal prompts by media, one LMCache e... | @ZLkanyo009 | open | 2026-11-05 | 2026-11-11 |
| [#2971](https://github.com/ROCm/ATOM/pull/2971) | perf(minimax-m3): optimize gfx1250 prefill indexing | @XiaobingSuper | open | 2026-11-04 | 2026-11-11 |
| [#3199](https://github.com/ROCm/ATOM/pull/3199) | [MiniMax-M3.1] Fuse TP all-reduce + Gemma RMSNorm with the M... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3102](https://github.com/ROCm/ATOM/pull/3102) | feat(dsv41): DeepSeek-V4.1-Flash on MI308X (gfx942) | @HaonanWang98 | draft | 2026-11-09 | 2026-11-11 |
| [#3042](https://github.com/ROCm/ATOM/pull/3042) | [Mono] Optimize GLM/K3.1 indexers and DS V4.1 FP8/FP4 decode | @junhaha666 | open | 2026-11-05 | 2026-11-11 |
| [#3154](https://github.com/ROCm/ATOM/pull/3154) | ci: add ATOM test result gates | @gyohuangxin | open | 2026-11-10 | 2026-11-11 |
| [#3204](https://github.com/ROCm/ATOM/pull/3204) | docs(recipes): refresh the DeepSeek-V4.1-Flash agentic recip... | @yhl-amd | open | 2026-11-11 | 2026-11-11 |
| [#3110](https://github.com/ROCm/ATOM/pull/3110) | [DSV4.1] Quantize the MXFP8 query 8 heads a program in the r... | @JiaoliangYu | open | 2026-11-09 | 2026-11-11 |
| [#3193](https://github.com/ROCm/ATOM/pull/3193) | perf(dcp): merge decode partials with aiter's fused DCP merg... | @zejunchen-zejun | draft | 2026-11-11 | 2026-11-11 |
| [#2713](https://github.com/ROCm/ATOM/pull/2713) | feat(moe): route FlyDSL MXFP4 decode through aiter HERD on g... | @charlieguo1106 | open | 2026-10-26 | 2026-11-11 |
| [#3144](https://github.com/ROCm/ATOM/pull/3144) | [GFX1250][MOE]iod weight preshuffle | @Zzz9990 | open | 2026-11-10 | 2026-11-11 |
| [#2581](https://github.com/ROCm/ATOM/pull/2581) | feat(kimi-k3): DFlash GQA speculative draft model | @rbrugaro-amd | open | 2026-10-14 | 2026-11-11 |
| [#3203](https://github.com/ROCm/ATOM/pull/3203) | fix(pd): a P/D producer reports its first token from the for... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-11 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [Lumen-RL] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-11-11 |
| [#2943](https://github.com/ROCm/ATOM/pull/2943) | refactor: unify K3 and JSON Schema token constraints | @ZhangLirong-amd | draft | 2026-11-03 | 2026-11-11 |
| [#3201](https://github.com/ROCm/ATOM/pull/3201) | fix(kv): an abort before decode's pull retires prefill's sen... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-11 |
| [#2989](https://github.com/ROCm/ATOM/pull/2989) | [DSV4.1] Use contiguous KV sources and add OPUS/ASM A8W4 att... | @yzhou103 | open | 2026-11-04 | 2026-11-11 |
| [#3200](https://github.com/ROCm/ATOM/pull/3200) | fix(models): the Qwen3.5 MTP drafter loads on a dense target | @PerryZhang01 | draft | 2026-11-11 | 2026-11-11 |
| [#3198](https://github.com/ROCm/ATOM/pull/3198) | [MiniMax-M3.1] Fuse SwiGLU-OAI with the MXFP8 quant of down_... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3197](https://github.com/ROCm/ATOM/pull/3197) | fix(graphs): a token-graph recording keeps no argument its r... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-11 |
| [#3196](https://github.com/ROCm/ATOM/pull/3196) | fix(scheduler): a DP prefill rank whose cost sets the step's... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-11 |
| [#3195](https://github.com/ROCm/ATOM/pull/3195) | [MiniMax-M3.1] One-launch decode router (GEMV + top-4 gate +... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#2647](https://github.com/ROCm/ATOM/pull/2647) | feat(tp): run one tensor-parallel group across nodes | @gbyu-amd | open | 2026-10-20 | 2026-11-11 |
| [#2808](https://github.com/ROCm/ATOM/pull/2808) | feat(deepseek_v41): fuse DSpark context-KV main_norm + group... | @karverma-amd | open | 2026-10-29 | 2026-11-11 |
| [#2728](https://github.com/ROCm/ATOM/pull/2728) | Fix speculative block table capacity | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#2729](https://github.com/ROCm/ATOM/pull/2729) | Fix GDN draft metadata | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-11-11 |
| [#2043](https://github.com/ROCm/ATOM/pull/2043) | [Feat] Conform MiniMax-M3 serving to OpenAI API | @kliuae | open | 2026-08-26 | 2026-11-11 |
| [#1973](https://github.com/ROCm/ATOM/pull/1973) | Qwen38 accuracy | @PerryZhang01 | open | 2026-08-20 | 2026-11-11 |
| [#2689](https://github.com/ROCm/ATOM/pull/2689) | perf(qwen3_5): use the fused GDN in_proj GEMM on Quark MXFP4... | @ahmed-bsod | open | 2026-10-23 | 2026-11-11 |
| [#2555](https://github.com/ROCm/ATOM/pull/2555) | perf(deepseek_v41): MI308 gfx942 enablement and decode for V... | @zhangxinyuanliuhengyu | open | 2026-10-13 | 2026-11-11 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-11-11 |
| [#2730](https://github.com/ROCm/ATOM/pull/2730) | Integrate AITER fused MoE routing | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#2629](https://github.com/ROCm/ATOM/pull/2629) | follow-up(#2535): mono review items that need no GPU | @ganyi1996ppo | open | 2026-10-19 | 2026-11-11 |
| [#2616](https://github.com/ROCm/ATOM/pull/2616) | fix(moe): preserve MoRI v2 live-row contract | @XiaobingSuper | open | 2026-10-16 | 2026-11-11 |
| [#2789](https://github.com/ROCm/ATOM/pull/2789) | [PCP] Fewer V4 prefill gathers and fix PCP+TBO accuracy | @yitingw1 | open | 2026-10-28 | 2026-11-11 |
| [#3058](https://github.com/ROCm/ATOM/pull/3058) | [Lumen-RL] Receive trained weights over RCCL as a weight syn... | @xysheng-AMD | open | 2026-11-06 | 2026-11-11 |
| [#2787](https://github.com/ROCm/ATOM/pull/2787) | ci(k3-agentic): Kimi-K3 AgentX 1M P/D cells, one per concurr... | @wanzhenchn | open | 2026-10-28 | 2026-11-11 |
| [#3070](https://github.com/ROCm/ATOM/pull/3070) | perf(kimi-k3): PP8 P/D prefill 4/4 — MLA staging for a DCP c... | @wanzhenchn | open | 2026-11-06 | 2026-11-11 |
| [#3068](https://github.com/ROCm/ATOM/pull/3068) | feat(kimi-k3): PP8 P/D prefill 2/4 — LMCache state tier unde... | @wanzhenchn | open | 2026-11-06 | 2026-11-11 |
| [#3188](https://github.com/ROCm/ATOM/pull/3188) | perf(engram): tune quantized UVA lookup geometry on gfx1250 | @amd-ruitang3 | open | 2026-11-11 | 2026-11-11 |
| [#2877](https://github.com/ROCm/ATOM/pull/2877) | [DSV4.1][gfx1250] Fuse probabilistic Markov chain reductions | @JiaoliangYu | draft | 2026-11-01 | 2026-11-11 |
| [#2724](https://github.com/ROCm/ATOM/pull/2724) | [DSV4.1] DSpark probabilistic draft + block verification (op... | @yhl-amd | open | 2026-10-26 | 2026-11-11 |
| [#3186](https://github.com/ROCm/ATOM/pull/3186) | feat(dsv41): EPLB on the layers before the decoder | @JiaoliangYu | draft | 2026-11-11 | 2026-11-11 |
| [#3146](https://github.com/ROCm/ATOM/pull/3146) | feat(v4): support caller-owned attention output buffers | @jiayyu | open | 2026-11-10 | 2026-11-11 |
| [#2939](https://github.com/ROCm/ATOM/pull/2939) | [MoE] ATOM_MEGA_COMBINE_WIRE applies to decode steps too | @yanboshao | draft | 2026-11-03 | 2026-11-11 |
| [#3180](https://github.com/ROCm/ATOM/pull/3180) | [DeepSeek-V4] Opt-in FlyDSL BF16 sparse decode from plugin_p... | @zhiding512 | open | 2026-11-11 | 2026-11-11 |
| [#3082](https://github.com/ROCm/ATOM/pull/3082) | Share the DeepSeek-V4 target with SGLang's DSpark draft | @vbayanag | open | 2026-11-06 | 2026-11-11 |
| [#3179](https://github.com/ROCm/ATOM/pull/3179) | feat(aiter-provider): serve DeepSeek-V4.1 FP8 sparse attenti... | @zhiding512 | open | 2026-11-11 | 2026-11-11 |
| [#3156](https://github.com/ROCm/ATOM/pull/3156) | feat(dsv41): run post seams on the gfx942 ASM mHC seam via m... | @junhaha666 | open | 2026-11-10 | 2026-11-11 |
| [#3159](https://github.com/ROCm/ATOM/pull/3159) | fix(api): take Kimi-K3 chat prompt ids from its tokenizer's ... | @ZhiweiYan-96 | open | 2026-11-10 | 2026-11-11 |
| [#3162](https://github.com/ROCm/ATOM/pull/3162) | fix(attention): accept aiter #7056's optional FlyDSL work pl... | @lirui927 | open | 2026-11-10 | 2026-11-11 |
| [#3163](https://github.com/ROCm/ATOM/pull/3163) | fix(sglang): keep the Qwen3.8 drafter's draft-extend CUDA gr... | @zovonoir | open | 2026-11-10 | 2026-11-11 |
| [#3178](https://github.com/ROCm/ATOM/pull/3178) | [Qwen3.5] FHMoE: the shared expert inside the gfx1250 groupe... | @vgokhale | open | 2026-11-10 | 2026-11-10 |
| [#3132](https://github.com/ROCm/ATOM/pull/3132) | perf(dsv41): add the shared expert output in the MegaMoE com... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3176](https://github.com/ROCm/ATOM/pull/3176) | [DSV4.1][gfx1250] Extend single-launch decode to C16 with FP... | @yifehuan | draft | 2026-11-10 | 2026-11-10 |
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#3043](https://github.com/ROCm/ATOM/pull/3043) | fix(indexer): keep the FP8 prefill indexer's logits and keys... | @Jasen2201 | open | 2026-11-05 | 2026-11-10 |
| [#3097](https://github.com/ROCm/ATOM/pull/3097) | Shared Mooncake Store: share_cache DP routing, early tier lo... | @ZhangLirong-amd | open | 2026-11-09 | 2026-11-10 |
| [#3114](https://github.com/ROCm/ATOM/pull/3114) | feat(gemm_fusion): route MiniMax-M3 SP QKV through aiter.sp_... | @demonsan | draft | 2026-11-09 | 2026-11-10 |
| [#3133](https://github.com/ROCm/ATOM/pull/3133) | perf(dsv41): pass the FP4 logits lane-max summaries to the i... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3127](https://github.com/ROCm/ATOM/pull/3127) | perf(dsv41): fuse the quantized-pool compress tail into one ... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3131](https://github.com/ROCm/ATOM/pull/3131) | perf(dsv41): quantize the DSpark context taps in place inste... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3164](https://github.com/ROCm/ATOM/pull/3164) | [DSV4.1] Fuse the FP8 shared expert into the MXFP4 MoE under... | @JiaoliangYu | draft | 2026-11-10 | 2026-11-10 |
| [#2952](https://github.com/ROCm/ATOM/pull/2952) | [WIP] perf(minimax-m3): integrate MI455 fusion stack | @lirui927 | draft | 2026-11-03 | 2026-11-10 |
| [#2949](https://github.com/ROCm/ATOM/pull/2949) | perf(minimax-m3): consume sparse PA prequant output | @lirui927 | draft | 2026-11-03 | 2026-11-10 |
| [#3049](https://github.com/ROCm/ATOM/pull/3049) | perf(minimax-m3): quantize the dense MLP activation in the S... | @lirui927 | draft | 2026-11-06 | 2026-11-10 |
| [#2988](https://github.com/ROCm/ATOM/pull/2988) | perf(minimax-m3): reduce split-K QKV and gate/up partials in... | @lirui927 | draft | 2026-11-04 | 2026-11-10 |
| [#3161](https://github.com/ROCm/ATOM/pull/3161) | feat(mesh): key chat routing by image and video identity | @junyyang-amd | draft | 2026-11-10 | 2026-11-10 |
| [#2258](https://github.com/ROCm/ATOM/pull/2258) | feed local expert hash from atom to moe | @yadaish | open | 2026-09-16 | 2026-11-10 |
| [#3145](https://github.com/ROCm/ATOM/pull/3145) | [MI355X] feat(diffusion): Wan2.1 VAE with conv3d dispatched ... | @huizzhan | draft | 2026-11-10 | 2026-11-10 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat(v4): mixed prefill+decode batching with DSpark and TBO | @jiayyu | open | 2026-08-26 | 2026-11-10 |
| [#2982](https://github.com/ROCm/ATOM/pull/2982) | perf(minimax-m3): raise decode score memory throughput | @XiaobingSuper | draft | 2026-11-04 | 2026-11-10 |
| [#3048](https://github.com/ROCm/ATOM/pull/3048) | [DCP] Add a `mailbox` decode merge backend on aiter's FlyDSL... | @yitingw1 | open | 2026-11-06 | 2026-11-10 |
| [#2786](https://github.com/ROCm/ATOM/pull/2786) | perf(kimi-k3): serve mono decode behind a Mooncake P/D decod... | @wanzhenchn | open | 2026-10-28 | 2026-11-10 |
| [#3116](https://github.com/ROCm/ATOM/pull/3116) | perf(minimax-m3): indexer-CP decode by live blocks, with a o... | @lirui927 | draft | 2026-11-09 | 2026-11-10 |
| [#3104](https://github.com/ROCm/ATOM/pull/3104) | feat(sparse-attn): decode-time indexer context parallelism a... | @wanzhenchn | open | 2026-11-09 | 2026-11-10 |
| [#3126](https://github.com/ROCm/ATOM/pull/3126) | [2/N atomesh rust runtime] feat(mesh): engine_v1 protocol an... | @Yuechguo | open | 2026-11-09 | 2026-11-10 |
| [#3151](https://github.com/ROCm/ATOM/pull/3151) | [MoE] Centralize parallel mapping and transport resolution | @JiaoliangYu | draft | 2026-11-10 | 2026-11-10 |
| [#3103](https://github.com/ROCm/ATOM/pull/3103) | feat(offload, tokenizer): high-priority Mooncake Store copie... | @wanzhenchn | open | 2026-11-09 | 2026-11-10 |
| [#3108](https://github.com/ROCm/ATOM/pull/3108) | fix(attention): drop the FlyDSL paged-decode API probe | @ZhiweiYan-96 | open | 2026-11-09 | 2026-11-10 |
| [#3087](https://github.com/ROCm/ATOM/pull/3087) | refactor(mono): set FlyDSL's target arch through FLYDSL_GPU_... | @coderfeli | open | 2026-11-07 | 2026-11-10 |
| [#3099](https://github.com/ROCm/ATOM/pull/3099) | fix(page-checkpoint): reserve block 0 as null page under PAG... | @ZhiweiYan-96 | open | 2026-11-09 | 2026-11-10 |
| [#3100](https://github.com/ROCm/ATOM/pull/3100) | [kv_transfer] lmcache_mp: pass optional LMCache ATOM adapter... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3107](https://github.com/ROCm/ATOM/pull/3107) | MI455 qwen38 agentx perf | @minmengdie | open | 2026-11-09 | 2026-11-10 |
| [#3125](https://github.com/ROCm/ATOM/pull/3125) | [kv_transfer] lmcache_mp: name prompts by LMCache chunk hash... | @yhl-amd | open | 2026-11-09 | 2026-11-10 |
| [#3040](https://github.com/ROCm/ATOM/pull/3040) | fix(dspark): allocate the draft block's last KV row (lookahe... | @chelnnexy | open | 2026-11-05 | 2026-11-10 |
| [#3021](https://github.com/ROCm/ATOM/pull/3021) | perf(dsv41): take the fused shared-expert act + quant at TP4... | @karverma-amd | open | 2026-11-05 | 2026-11-09 |
| [#3022](https://github.com/ROCm/ATOM/pull/3022) | perf(dsv41): quantize the shared expert's input in the FFN m... | @karverma-amd | open | 2026-11-05 | 2026-11-09 |
| [#2701](https://github.com/ROCm/ATOM/pull/2701) | fix(kimi-k3): load a checkpoint with statically FP8-quantize... | @rbrugaro-amd | open | 2026-10-25 | 2026-11-09 |
| [#3124](https://github.com/ROCm/ATOM/pull/3124) | fix(api): keep structured-output extras optional at startup | @jiayyu | draft | 2026-11-09 | 2026-11-09 |
| [#2904](https://github.com/ROCm/ATOM/pull/2904) | feat(minimax-m3): record prefill as token graphs | @lirui927 | open | 2026-11-02 | 2026-11-09 |
| [#2942](https://github.com/ROCm/ATOM/pull/2942) | feat(kimi-k3): record prefill as token graphs | @gbyu-amd | open | 2026-11-03 | 2026-11-09 |
| [#2846](https://github.com/ROCm/ATOM/pull/2846) | [PD] Unify KV staging/landing and add MiniMax PP-to-TP suppo... | @MengqingCao | open | 2026-10-30 | 2026-11-09 |
| [#3088](https://github.com/ROCm/ATOM/pull/3088) | [Docs] Add contributing guide, area contacts and review guid... | @zufayu | draft | 2026-11-07 | 2026-11-09 |
| [#3101](https://github.com/ROCm/ATOM/pull/3101) | [feature] add leapquant gdn  | @haoyangli0109 | draft | 2026-11-09 | 2026-11-09 |
| [#2914](https://github.com/ROCm/ATOM/pull/2914) | perf(spec-decode): fuse the unfiltered per-row-noise draw in... | @chelnnexy | open | 2026-11-02 | 2026-11-09 |
| [#2981](https://github.com/ROCm/ATOM/pull/2981) | Codex/deepinfer dp scheduler | @jiayyu | draft | 2026-11-04 | 2026-11-09 |
| [#2894](https://github.com/ROCm/ATOM/pull/2894) | feat(kimi-k3): add gfx1250 monokernel | @XiaobingSuper | draft | 2026-11-02 | 2026-11-09 |
| [#1937](https://github.com/ROCm/ATOM/pull/1937) | perf(mtp): defer draft proposal publication | @yhl-amd | open | 2026-08-18 | 2026-11-09 |
| [#2823](https://github.com/ROCm/ATOM/pull/2823) | [ROCm][ATOMesh][CI] Add DeepSeek-V4-Pro MoRIIO write 1P1D an... | @avininjamay8 | open | 2026-10-29 | 2026-11-09 |
| [#2843](https://github.com/ROCm/ATOM/pull/2843) | fix(attention): keep MTP-5 decode on FlyDSL pa_decode past t... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-09 |
| [#2853](https://github.com/ROCm/ATOM/pull/2853) | Qwen3.5 MTP: capture draft mid-steps (MRoPE opt-in) and reus... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-09 |
| [#2873](https://github.com/ROCm/ATOM/pull/2873) | [Perf] Use finer gfx1250 index-score chunks for small decode... | @xytpai | open | 2026-10-31 | 2026-11-09 |
| [#2925](https://github.com/ROCm/ATOM/pull/2925) | fix(engine): honor ATOM_TORCH_PROFILER_DIR | @yelkhamra | open | 2026-11-02 | 2026-11-09 |
| [#2791](https://github.com/ROCm/ATOM/pull/2791) | [ROCm][ATOMesh][CI] Add DeepSeek-V4-Pro MoRIIO write 1P1D an... | @avininjamay8 | open | 2026-10-28 | 2026-11-09 |
| [#2698](https://github.com/ROCm/ATOM/pull/2698) | perf(qwen3.5): one-kernel GDN decode on gfx1250 | @ahmed-bsod | open | 2026-10-24 | 2026-11-09 |
| [#2662](https://github.com/ROCm/ATOM/pull/2662) | feat(mono): Qwen3.8-Flash-Next mono decode | @ssharma4-amd | open | 2026-10-21 | 2026-11-09 |
| [#2604](https://github.com/ROCm/ATOM/pull/2604) | fix(cudagraph): run the model runner on a High-priority stre... | @nehmathe2 | open | 2026-10-16 | 2026-11-09 |
| [#2403](https://github.com/ROCm/ATOM/pull/2403) | fix(gdn): store the temporal state in the checkpoint's mamba... | @eky-amd | open | 2026-09-25 | 2026-11-09 |
| [#2404](https://github.com/ROCm/ATOM/pull/2404) | fix(offload): distinguish unmeasured profile timings | @kvnloo | open | 2026-09-25 | 2026-11-09 |
| [#2406](https://github.com/ROCm/ATOM/pull/2406) | fix(offload): include exception type in dense lookup warning... | @kvnloo | open | 2026-09-25 | 2026-11-09 |
| [#2355](https://github.com/ROCm/ATOM/pull/2355) | CI: allow overriding ATOM inference watchdog threshold | @gyohuangxin | open | 2026-09-22 | 2026-11-09 |
| [#2286](https://github.com/ROCm/ATOM/pull/2286) | [FlyDSL] [Gfx1250] mega moe stage1 gfx1250 no overlap | @XingerZhu | open | 2026-09-18 | 2026-11-09 |
| [#2243](https://github.com/ROCm/ATOM/pull/2243) | Size the staging pack grid by the bytes it moves, not the wi... | @PerryZhang01 | open | 2026-09-15 | 2026-11-09 |
| [#2203](https://github.com/ROCm/ATOM/pull/2203) | [KV-events] match vLLM/SGLang ZMQ framing and per-DP-rank po... | @vMaroon | open | 2026-09-11 | 2026-11-09 |
| [#1947](https://github.com/ROCm/ATOM/pull/1947) | state checkpoint port optimized | @ganyi1996ppo | open | 2026-08-19 | 2026-11-09 |
| [#1920](https://github.com/ROCm/ATOM/pull/1920) | Skip duplicate heavy CI runs for same PR SHA | @gyohuangxin | open | 2026-08-17 | 2026-11-09 |
| [#1933](https://github.com/ROCm/ATOM/pull/1933) | ci: prefer commit-specific Aiter S3 manifest | @gyohuangxin | open | 2026-08-17 | 2026-11-09 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-11-09 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-11-09 |
| [#3079](https://github.com/ROCm/ATOM/pull/3079) | fix(ci): resolve labelled benchmark variants in the regressi... | @yelkhamra | open | 2026-11-06 | 2026-11-08 |
| [#3093](https://github.com/ROCm/ATOM/pull/3093) | [Qwen3.5 MTP] Decode-step trims: host token split, one-shot ... | @vgokhale | open | 2026-11-07 | 2026-11-07 |
| [#2909](https://github.com/ROCm/ATOM/pull/2909) | feat(dsv41): carry the mHC residual in Mega-MHC's res_preshu... | @junhaha666 | open | 2026-11-02 | 2026-11-07 |
| [#3057](https://github.com/ROCm/ATOM/pull/3057) | [V4] Reset the cache CUDA graph capture wrote before admitti... | @yhl-amd | open | 2026-11-06 | 2026-11-07 |
| [#3077](https://github.com/ROCm/ATOM/pull/3077) | feat(benchmarks): record AITER_AR_1STAGE_MAX_BYTES in benchm... | @yelkhamra | open | 2026-11-06 | 2026-11-07 |
| [#3006](https://github.com/ROCm/ATOM/pull/3006) | perf(kimi-k3): mono MLA post / prep folds into K2 (ATOM_MONO... | @chelnnexy | open | 2026-11-04 | 2026-11-07 |
| [#3084](https://github.com/ROCm/ATOM/pull/3084) | [SP] Fuse the MiniMax-M3 QKV GEMM with the Ulysses exchange ... | @whx-sjtu | draft | 2026-11-06 | 2026-11-07 |
| [#2953](https://github.com/ROCm/ATOM/pull/2953) | perf(kimi-k3): one-launch q/k norm + rope + paged K/V write ... | @chelnnexy | open | 2026-11-03 | 2026-11-07 |
| [#2922](https://github.com/ROCm/ATOM/pull/2922) | [ATOMesh] Add Kimi-K2.6-MXFP4 1P1D TP8 + 2P1D TP8 Mooncake d... | @itej89 | draft | 2026-11-02 | 2026-11-07 |
| [#2800](https://github.com/ROCm/ATOM/pull/2800) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-11-06 |
| [#3086](https://github.com/ROCm/ATOM/pull/3086) | [Engine] ATOM_EARLY_PREFILL_SCHEDULE on independent DP ranks... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#3085](https://github.com/ROCm/ATOM/pull/3085) | [Qwen3.5 MTP] Draft argmax under the presence penalty + FP8 ... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#3081](https://github.com/ROCm/ATOM/pull/3081) | [DO NOT MERGE] [gfx1250][GDN] Prefill chain: conv1d, fused K... | @Boss2002n | draft | 2026-11-06 | 2026-11-06 |
| [#2927](https://github.com/ROCm/ATOM/pull/2927) | fix(config): key the compile cache on the HF model architect... | @yelkhamra | open | 2026-11-02 | 2026-11-06 |
| [#2997](https://github.com/ROCm/ATOM/pull/2997) | feat(mesh): defer ATOM Decode placement until Prefill handof... | @ZhangLirong-amd | draft | 2026-11-04 | 2026-11-06 |
| [#2381](https://github.com/ROCm/ATOM/pull/2381) | [Performance] Reduce TP host-control overhead for C16 | @yhl-amd | draft | 2026-09-24 | 2026-11-06 |
| [#2600](https://github.com/ROCm/ATOM/pull/2600) | scheduler: add DP prefill-sync mode to avoid group-wide eage... | @karverma-amd | open | 2026-10-15 | 2026-11-06 |
| [#3054](https://github.com/ROCm/ATOM/pull/3054) | feat(kimi-k3): fold the consumer's E8M0 activation quant int... | @qichu-yun | draft | 2026-11-06 | 2026-11-06 |
| [#3053](https://github.com/ROCm/ATOM/pull/3053) | feat(kimi-k3): fuse o_proj's E8M0 activation quant into the ... | @qichu-yun | draft | 2026-11-06 | 2026-11-06 |
| [#3055](https://github.com/ROCm/ATOM/pull/3055) | fix(indexer): score a step's FP8 prefill requests in groups ... | @Jasen2201 | open | 2026-11-06 | 2026-11-06 |
| [#3045](https://github.com/ROCm/ATOM/pull/3045) | [Qwen3.5 DP] MoE-block and attention-reduce fusions for deco... | @vgokhale | open | 2026-11-05 | 2026-11-06 |
| [#2852](https://github.com/ROCm/ATOM/pull/2852) | perf(qwen3.5): prefill all-reduce + norm via INT4 quick-redu... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-06 |
| [#3026](https://github.com/ROCm/ATOM/pull/3026) | [ATOMesh][DI][CI] Add DeepSeek-V4-Pro wide-EP MoRIIO write g... | @avininjamay8 | open | 2026-11-05 | 2026-11-06 |
| [#3046](https://github.com/ROCm/ATOM/pull/3046) | [API] Offloaded chat preparation reuses a session's earlier ... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#2605](https://github.com/ROCm/ATOM/pull/2605) | [Scheduler] Keep DP-attention ranks in one phase during pref... | @karverma-amd | open | 2026-10-16 | 2026-11-05 |
| [#3016](https://github.com/ROCm/ATOM/pull/3016) | [Qwen3.5 MTP] TP4 drafter small-kernel fusions + the drafter... | @vgokhale | open | 2026-11-04 | 2026-11-05 |
| [#3044](https://github.com/ROCm/ATOM/pull/3044) | [Qwen3.5 recipe] e8m0 FP8 projections on by default for DP p... | @Boss2002n | open | 2026-11-05 | 2026-11-05 |
| [#2973](https://github.com/ROCm/ATOM/pull/2973) | [GFX1250][K3][LMCache] Enable LMCache MP for K3 TP8DCP8 on G... | @zejunchen-zejun | draft | 2026-11-04 | 2026-11-05 |
| [#3015](https://github.com/ROCm/ATOM/pull/3015) | fix(dflash): keep the per-tensor unit scale out of the draft... | @rebklee | open | 2026-11-04 | 2026-11-05 |
| [#2990](https://github.com/ROCm/ATOM/pull/2990) | [Kimi-K3] Video inputs with chunked prefill and bounded visi... | @IvanShan177 | open | 2026-11-04 | 2026-11-05 |
| [#3031](https://github.com/ROCm/ATOM/pull/3031) | [Kimi-K3] docs(recipes): Kimi-K3.1 AgentX recipe on MI355X | @zhuyuhua-v | draft | 2026-11-05 | 2026-11-05 |
| [#2961](https://github.com/ROCm/ATOM/pull/2961) | perf(mla): opt-in opus flat-row decode for DCP8/DCP1 MTP (AT... | @nehmathe2 | open | 2026-11-04 | 2026-11-05 |
| [#2933](https://github.com/ROCm/ATOM/pull/2933) | fix(dsv41): quantize the fused shared-expert activation for ... | @karverma-amd | open | 2026-11-03 | 2026-11-05 |
| [#2747](https://github.com/ROCm/ATOM/pull/2747) | docs(recipe): MiniMax-M3.1-Flash TP4 + DSpark AgentX recipe | @zhuyuhua-v | draft | 2026-10-27 | 2026-11-05 |
| [#2959](https://github.com/ROCm/ATOM/pull/2959) | [Kimi-K3] Midstep KDA state checkpoints from the FlashKDA re... | @davzhuAMD | open | 2026-11-03 | 2026-11-05 |
| [#2960](https://github.com/ROCm/ATOM/pull/2960) | [Kimi-K3] Prefill token graphs: the KDA/MLA backend takes a ... | @davzhuAMD | open | 2026-11-03 | 2026-11-05 |
| [#2980](https://github.com/ROCm/ATOM/pull/2980) | feat(k3-mono): read FP8 dense projections in place | @rebklee | open | 2026-11-04 | 2026-11-05 |
| [#3014](https://github.com/ROCm/ATOM/pull/3014) | [DO NOT MERGE] [gfx1250][GDN] chunk_h: last-gate lookup, per... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3010](https://github.com/ROCm/ATOM/pull/3010) | [DO NOT MERGE] [gfx1250][GDN] Fuse KKT + gating into the Glu... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3008](https://github.com/ROCm/ATOM/pull/3008) | [DO NOT MERGE] [gfx1250][GDN] Persistent Gluon conv1d for pr... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3012](https://github.com/ROCm/ATOM/pull/3012) | [DO NOT MERGE] [gfx1250][GDN] chunk_o: K32 q.h panels, V in ... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2970](https://github.com/ROCm/ATOM/pull/2970) | [Qwen3.5] Fused TP4 decode MoE half in one persistent kernel... | @vgokhale | draft | 2026-11-04 | 2026-11-04 |
| [#2998](https://github.com/ROCm/ATOM/pull/2998) | [DSV4.1] Bucket decoder tails by DP final-prefill request co... | @JiaoliangYu | draft | 2026-11-04 | 2026-11-04 |
| [#2996](https://github.com/ROCm/ATOM/pull/2996) | perf(kimi-k3): quantize the shared qkv_a / g_proj input once | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2994](https://github.com/ROCm/ATOM/pull/2994) | feat(kimi-k3): fuse o_proj's E8M0 activation quant into the ... | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2995](https://github.com/ROCm/ATOM/pull/2995) | feat(kimi-k3): fuse down_proj's E8M0 activation quant into S... | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2876](https://github.com/ROCm/ATOM/pull/2876) | [MiniMax-M3.1] Run the DSpark draft's MXFP8 linears on AITER... | @zhuyuhua-v | open | 2026-11-01 | 2026-11-04 |
| [#2976](https://github.com/ROCm/ATOM/pull/2976) | perf(kimi-k3): no k copy before the DFlash draft's context k... | @davzhuAMD | draft | 2026-11-04 | 2026-11-04 |
| [#2975](https://github.com/ROCm/ATOM/pull/2975) | perf(dspark): one-launch draft KV addressing (context slots ... | @davzhuAMD | draft | 2026-11-04 | 2026-11-04 |
| [#2968](https://github.com/ROCm/ATOM/pull/2968) | [DO NOT MERGE] [Qwen3.5][GDN] chunk_h paired TDM loads + chu... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2967](https://github.com/ROCm/ATOM/pull/2967) | [DO NOT MERGE] [Qwen3.5][GDN] Gluon inverse/WY kernel for gf... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2966](https://github.com/ROCm/ATOM/pull/2966) | [DO NOT MERGE] [Qwen3.5][GDN] Gates inside the KKT kernel (A... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2963](https://github.com/ROCm/ATOM/pull/2963) | [GDN] Write the linear-attention output into the graph buffe... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2770](https://github.com/ROCm/ATOM/pull/2770) | [MiniMax-M3.1] MXFP4 sparse KV cache and index cache | @ganyi1996ppo | open | 2026-10-28 | 2026-11-04 |
| [#2945](https://github.com/ROCm/ATOM/pull/2945) | feat(k3-mono): run on an fp16 KDA recurrent state pool | @rebklee | open | 2026-11-03 | 2026-11-04 |
| [#2958](https://github.com/ROCm/ATOM/pull/2958) | Enable DSpark adaptive ragged verification | @ykamiset | open | 2026-11-03 | 2026-11-04 |
| [#2901](https://github.com/ROCm/ATOM/pull/2901) | feat(docker): move the ROCm 10 line from 10.0.0 to 10.1.0 (H... | @junyyang-amd | draft | 2026-11-02 | 2026-11-03 |
| [#2899](https://github.com/ROCm/ATOM/pull/2899) | [MLA] Opt-in FP8 prefill attention on gfx1250: ASM or FlyDSL | @gbyu-amd | draft | 2026-11-02 | 2026-11-03 |
| [#2896](https://github.com/ROCm/ATOM/pull/2896) | fix(rtpllm): upstream Qwen4Exp plugin integration contracts | @junna2016 | open | 2026-11-02 | 2026-11-03 |
| [#1995](https://github.com/ROCm/ATOM/pull/1995) | [ATOM] add persistent path for DCP GLM5.2 | @zhuyuhua-v | open | 2026-08-24 | 2026-11-03 |
| [#2673](https://github.com/ROCm/ATOM/pull/2673) | feat(eplb): add step_peak placement policy | @HaonanWang98 | open | 2026-10-22 | 2026-11-03 |
| [#2915](https://github.com/ROCm/ATOM/pull/2915) | perf(mla): ATOM_MLA_MIN_HEADS=12 skips the zero padding to 1... | @chelnnexy | open | 2026-11-02 | 2026-11-03 |
| [#2887](https://github.com/ROCm/ATOM/pull/2887) | optimize dsv4 flash opt | @binding7012 | draft | 2026-11-01 | 2026-11-03 |
| [#2806](https://github.com/ROCm/ATOM/pull/2806) | [GDN] Fix the KV cache writes of the Gemma Q/K norm + RoPE p... | @Boss2002n | draft | 2026-10-29 | 2026-11-02 |
| [#2656](https://github.com/ROCm/ATOM/pull/2656) | feat(qwen3.5): Qwen3.5-397B mono decode | @amd-weisun | open | 2026-10-20 | 2026-11-02 |
| [#2855](https://github.com/ROCm/ATOM/pull/2855) | perf(attn): unified attention for prefix-hit FP8 prefill + s... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-02 |
| [#2845](https://github.com/ROCm/ATOM/pull/2845) | perf(flydsl pa_decode): head-256 batch-1/2 plan ceiling and ... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-02 |
| [#2900](https://github.com/ROCm/ATOM/pull/2900) | feat(moe): route FlyDSL MXFP4 decode through aiter HERD on g... | @charlieguo1106 | open | 2026-11-02 | 2026-11-02 |
| [#2842](https://github.com/ROCm/ATOM/pull/2842) | fix(state checkpoints): keep block 0 a zero null page and ze... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-02 |
| [#2854](https://github.com/ROCm/ATOM/pull/2854) | Qwen3.5 MTP: gather the fc output with aiter's custom all-ga... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-02 |
| [#2860](https://github.com/ROCm/ATOM/pull/2860) | feat(v41): replay the decoder graph on over-band prefills (o... | @carlushuang | draft | 2026-10-30 | 2026-11-02 |
| [#2851](https://github.com/ROCm/ATOM/pull/2851) | perf(qwen3.5): compute the GDN gate inside the ReplaySSM ker... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-02 |
| [#2744](https://github.com/ROCm/ATOM/pull/2744) | [MiniMax-M3.1] FP4 index cache and NVFP4 sparse KV cache | @zhuyuhua-v | open | 2026-10-27 | 2026-11-02 |
| [#2848](https://github.com/ROCm/ATOM/pull/2848) | feat(eplb): add DeepInfer hot expert selection | @JiaoliangYu | open | 2026-10-30 | 2026-11-02 |
| [#2858](https://github.com/ROCm/ATOM/pull/2858) | Fix standalone Inductor/Triton cache persistence across cont... | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#2815](https://github.com/ROCm/ATOM/pull/2815) | Enable prefix caching for DeepSeek V4 Mono decode | @yifehuan | open | 2026-10-29 | 2026-11-01 |
| [#2881](https://github.com/ROCm/ATOM/pull/2881) | [gfx1250] GemmaRMSNorm: aiter Gluon fused_rmsnorm_add in pla... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#2882](https://github.com/ROCm/ATOM/pull/2882) | [gfx1250] Add opt-in peer exchange for DP4 target logits | @JiaoliangYu | draft | 2026-11-01 | 2026-11-11 |
| [#2814](https://github.com/ROCm/ATOM/pull/2814) | perf(kimi-k3): stream attn-res candidate rows through LDS wi... | @yanxuer-999 | open | 2026-10-29 | 2026-11-01 |
| [#2880](https://github.com/ROCm/ATOM/pull/2880) | [gfx1250] Triton MoE over MegaMoE: SwiGLU clamp default 0.0 ... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#2812](https://github.com/ROCm/ATOM/pull/2812) | [MiniMax-M3.1] Mono decode over the MXFP4 KV and index cache... | @ganyi1996ppo | draft | 2026-10-29 | 2026-11-01 |
| [#2563](https://github.com/ROCm/ATOM/pull/2563) | feat(eplb): decode expert swap | @JiaoliangYu | open | 2026-10-14 | 2026-10-31 |
| [#2826](https://github.com/ROCm/ATOM/pull/2826) | [gfx1250] Qwen3.5: o_proj / out_proj + all-reduce + RMSNorm ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#2805](https://github.com/ROCm/ATOM/pull/2805) | [gfx1250] Qwen3.5: Q/K norm + MRoPE + KV cache write in one ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#2793](https://github.com/ROCm/ATOM/pull/2793) | [Triton/Gluon] [GFX12] Add spec_decode flag To Unified Atten... | @k50112113 | draft | 2026-10-28 | 2026-10-30 |
| [#2781](https://github.com/ROCm/ATOM/pull/2781) | [Perf] Keep SwiGLU-OAI arithmetic in FP32 under torch.compil... | @xytpai | open | 2026-10-28 | 2026-10-30 |
| [#2840](https://github.com/ROCm/ATOM/pull/2840) | feat(dsv41): add gfx1250 mono backend and separate architect... | @yifehuan | draft | 2026-10-30 | 2026-10-30 |
| [#2838](https://github.com/ROCm/ATOM/pull/2838) | [MiniMax M3.1] Add PP4-to-DCP4 Mooncake KV transfer and targ... | @MengqingCao | draft | 2026-10-30 | 2026-10-30 |
| [#2760](https://github.com/ROCm/ATOM/pull/2760) | [DSpark][DCP] Allow speculative decode with DCP on gfx1250's... | @gbyu-amd | open | 2026-10-27 | 2026-10-30 |
| [#2439](https://github.com/ROCm/ATOM/pull/2439) | add more MP LMCache instructions hosting Kimi-K3 from vllm A... | @linsun12 | open | 2026-09-30 | 2026-10-30 |
| [#2641](https://github.com/ROCm/ATOM/pull/2641) | Add initial muse spark support | @azaidy | open | 2026-10-19 | 2026-10-29 |
| [#2797](https://github.com/ROCm/ATOM/pull/2797) | [ATOM] scheduler: one checkpoint-demand cut per prefix per a... | @vgokhale | open | 2026-10-28 | 2026-10-29 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | draft | 2026-09-07 | 2026-10-29 |
| [#2802](https://github.com/ROCm/ATOM/pull/2802) | [gfx1250] Qwen3.5: Q/K norm + MRoPE in one aiter kernel | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2795](https://github.com/ROCm/ATOM/pull/2795) | [gfx1250] Qwen3.5 MTP under DP attention + EP | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2794](https://github.com/ROCm/ATOM/pull/2794) | [gfx1250] Qwen3.5 MoE MXFP4 bring-up (TP1/TP4/EP4) | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2511](https://github.com/ROCm/ATOM/pull/2511) | feat(attention): add BLASST block skipping to the Triton pre... | @amd-sonsingh | open | 2026-10-10 | 2026-10-28 |
| [#2499](https://github.com/ROCm/ATOM/pull/2499) | [MoonEP] Balance MegaMoE prefill with MoonEP | @JiaoliangYu | open | 2026-10-08 | 2026-10-28 |
| [#2718](https://github.com/ROCm/ATOM/pull/2718) | [MiniMax-M3.1] Native-MXFP8 Mono decode through S32 (stacked... | @XiaobingSuper | draft | 2026-10-26 | 2026-10-28 |
| [#2720](https://github.com/ROCm/ATOM/pull/2720) | perf(dspark): drop the per-step host sync; measure SPS at st... | @ZhangLirong-amd | open | 2026-10-26 | 2026-10-28 |
| [#2750](https://github.com/ROCm/ATOM/pull/2750) | [MiniMax-M3.1] Add TP4 P/D Mooncake Store benchmarks and NVF... | @MengqingCao | draft | 2026-10-27 | 2026-10-28 |
| [#2141](https://github.com/ROCm/ATOM/pull/2141) | feat: add GLM-5.3-Flash multimodal support | @cubezhang | open | 2026-09-04 | 2026-10-28 |
| [#2749](https://github.com/ROCm/ATOM/pull/2749) | fix(docker): multi-arch SGLang+ATOM image path for gfx942/gf... | @zhangxinyuanliuhengyu | open | 2026-10-27 | 2026-10-28 |
| [#2658](https://github.com/ROCm/ATOM/pull/2658) | EAGLE3 speculative decoding support for LLama/Qwen3 models | @kyle-hoffmeyer | open | 2026-10-20 | 2026-10-28 |
| [#2726](https://github.com/ROCm/ATOM/pull/2726) | fix(dsv4): make Mono refusal safe and bound peer waits | @yifehuan | draft | 2026-10-26 | 2026-10-28 |
| [#2763](https://github.com/ROCm/ATOM/pull/2763) | feat(api): add idle prefix cache reset endpoint | @JiaoliangYu | draft | 2026-10-27 | 2026-10-27 |
| [#2490](https://github.com/ROCm/ATOM/pull/2490) | [gfx1250] MLA absorb: emit ql_nope in the fp8 KV-cache dtype | @karverma-amd | open | 2026-10-08 | 2026-10-27 |
| [#2061](https://github.com/ROCm/ATOM/pull/2061) | Glm5.3 flash support | @PerryZhang01 | open | 2026-08-27 | 2026-10-27 |
| [#2529](https://github.com/ROCm/ATOM/pull/2529) | Add Qwen3.8 FlyDSL HC and long-context QSA index CP | @coderfeli | open | 2026-10-11 | 2026-10-27 |
| [#2737](https://github.com/ROCm/ATOM/pull/2737) | [DCP] Prefetch the next MLA layer's cached-prefix KV all-gat... | @ganyi1996ppo | draft | 2026-10-27 | 2026-10-27 |
| [#2137](https://github.com/ROCm/ATOM/pull/2137) | [atom-vllm]: enable DSpark speculative decoding for DeepSeek... | @peizhang56 | open | 2026-09-03 | 2026-10-27 |
| [#2557](https://github.com/ROCm/ATOM/pull/2557) | fix(mla): plan persistent decode over the rows q/o have | @gbyu-amd | open | 2026-10-13 | 2026-10-26 |
| [#2493](https://github.com/ROCm/ATOM/pull/2493) | [MiniMax-M3] Score the lightning indexer with aiter's FlyDSL... | @ganyi1996ppo | open | 2026-10-08 | 2026-10-26 |
| [#2687](https://github.com/ROCm/ATOM/pull/2687) | [MiniMax-M3.1] Load the MiniMax-M3.1-Flash release checkpoin... | @wuhuikx | draft | 2026-10-23 | 2026-10-26 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-10-26 |
| [#2620](https://github.com/ROCm/ATOM/pull/2620) | [GFX-1250][DP][Kimi-K3 DSpark] Pad the draft's block decode ... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-26 |
| [#2694](https://github.com/ROCm/ATOM/pull/2694) | test(observability): allow additional runner startup RPCs | @NidhoggD1 | draft | 2026-10-24 | 2026-10-24 |
| [#2661](https://github.com/ROCm/ATOM/pull/2661) | [DSpark] let --max-num-seqs 1 start: size the engine for 2, ... | @ganyi1996ppo | open | 2026-10-21 | 2026-10-22 |
| [#2667](https://github.com/ROCm/ATOM/pull/2667) | fix(sglang): keep Flash full decode graph correct with mamba... | @zhangxinyuanliuhengyu | open | 2026-10-21 | 2026-10-22 |
| [#2639](https://github.com/ROCm/ATOM/pull/2639) | refactor(mono): use FlyDSL JIT and typed device APIs | @coderfeli | open | 2026-10-19 | 2026-10-22 |
| [#2621](https://github.com/ROCm/ATOM/pull/2621) | feat(offload): run lmcache_mp under multi-node DP with one l... | @zejunchen-zejun | open | 2026-10-17 | 2026-10-20 |
| [#2559](https://github.com/ROCm/ATOM/pull/2559) | feat(dsv4): DeepSeek-V4 mono decode | @amd-weisun | open | 2026-10-13 | 2026-10-19 |
| [#2619](https://github.com/ROCm/ATOM/pull/2619) | fix(atomesh): keep dashboard metrics finite without dropping... | @kvnloo | open | 2026-10-16 | 2026-10-18 |
| [#2615](https://github.com/ROCm/ATOM/pull/2615) | fix(blockscale): gate row-major group32 GEMM by arch | @XiaobingSuper | draft | 2026-10-16 | 2026-10-17 |
| [#2298](https://github.com/ROCm/ATOM/pull/2298) | [Lumen-RL] Receive trained weights over RCCL, transactionall... | @i-chaochen | open | 2026-09-19 | 2026-10-16 |
| [#2608](https://github.com/ROCm/ATOM/pull/2608) | (recipe) Add Qwen3.8-Flash-Next AgentX Recipe | @zhuyuhua-v | draft | 2026-10-16 | 2026-10-16 |
| [#2597](https://github.com/ROCm/ATOM/pull/2597) | add asm mla qh64 kvsf  | @feifei14119 | open | 2026-10-15 | 2026-10-16 |
| [#2596](https://github.com/ROCm/ATOM/pull/2596) | [DP] Decouple prefill cost balancing from PrefillDelayer, ro... | @zejunchen-zejun | draft | 2026-10-15 | 2026-10-16 |
| [#2248](https://github.com/ROCm/ATOM/pull/2248) | [WIP]fix(attention): stabilize MLA/MHA outputs for piecewise... | @MengqingCao | open | 2026-09-15 | 2026-10-16 |
| [#2585](https://github.com/ROCm/ATOM/pull/2585) | Test ATOM accuracy on DI MI350X8 runner | @gyohuangxin | draft | 2026-10-15 | 2026-10-15 |
| [#2405](https://github.com/ROCm/ATOM/pull/2405) | [MORI] Multi-node + MORI_V2- #5855 | @k50112113 | open | 2026-09-25 | 2026-10-15 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | perf(eplb): remove shared-expert cold-start and decode overh... | @JiaoliangYu | draft | 2026-08-17 | 2026-10-14 |
| [#2501](https://github.com/ROCm/ATOM/pull/2501) | fix(plugin/dsv4): score 1-token prefill rows on the dense in... | @linsun12 | open | 2026-10-08 | 2026-10-13 |
| [#2546](https://github.com/ROCm/ATOM/pull/2546) | MiniMax-M3 recipe: move the CONC 40/48 CPU tier to LMCache M... | @yitingw1 | draft | 2026-10-12 | 2026-10-12 |
| [#2544](https://github.com/ROCm/ATOM/pull/2544) | feat(diag): record per-step routed expert counts (ATOM_EXPER... | @JiaoliangYu | draft | 2026-10-12 | 2026-10-12 |
| [#2542](https://github.com/ROCm/ATOM/pull/2542) | ci: tune GLM-5.2 FP8 MTP3 benchmark memory | @gyohuangxin | draft | 2026-10-12 | 2026-10-12 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-10-12 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-10-10 |
| [#2500](https://github.com/ROCm/ATOM/pull/2500) | tools/roofline: system-level roofline with per-operator dril... | @zufayu | draft | 2026-10-08 | 2026-10-08 |
| [#2469](https://github.com/ROCm/ATOM/pull/2469) | feat(scheduler): reserve KV for projected decode growth | @amd-ruitang3 | open | 2026-10-04 | 2026-10-08 |
| [#1978](https://github.com/ROCm/ATOM/pull/1978) | feat(eplb):avoid local copy in eplb; move build l2p to devic... | @JiaoliangYu | draft | 2026-08-21 | 2026-10-08 |
| [#2481](https://github.com/ROCm/ATOM/pull/2481) | [ATOM-vLLM] Add support for GLM-5.3-Flash with LMCache offlo... | @kliuae | open | 2026-10-06 | 2026-10-07 |
| [#2295](https://github.com/ROCm/ATOM/pull/2295) | Add GPT-OSS IQ2R 2-bit MoE integration | @ssharma4-amd | open | 2026-09-18 | 2026-10-06 |
| [#2329](https://github.com/ROCm/ATOM/pull/2329) | Add GLM-5.3-Flash IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-10-06 |
| [#2333](https://github.com/ROCm/ATOM/pull/2333) | [WIP] Integrate MoonEP policies with MoRI and fused_moe | @JiaoliangYu | draft | 2026-09-21 | 2026-10-04 |
| [#2442](https://github.com/ROCm/ATOM/pull/2442) | docs(offload): clarify LMCache MP lookup timeout scope | @kvnloo | open | 2026-10-01 | 2026-10-02 |
| [#2369](https://github.com/ROCm/ATOM/pull/2369) | fix(plugin): hold the deferred-save clock on the slotted Seq... | @PerryZhang01 | open | 2026-09-23 | 2026-09-30 |
| [#2416](https://github.com/ROCm/ATOM/pull/2416) | docs(vllm): recompute MiniMax M3 LMCache load misses | @kvnloo | open | 2026-09-28 | 2026-09-29 |
| [#2410](https://github.com/ROCm/ATOM/pull/2410) | [Docs] Qwen3.8-Flash-Next recipe: agentic serving on one MI3... | @mavizao | open | 2026-09-26 | 2026-09-27 |
| [#2013](https://github.com/ROCm/ATOM/pull/2013) | docker: fix ATOM and SGLang release builds | @ThomasNing | open | 2026-08-25 | 2026-09-24 |
| [#2344](https://github.com/ROCm/ATOM/pull/2344) | (doc)GLM-5.3 LMCache: concurrency sweep (8/16/32) and HBM/ti... | @PerryZhang01 | open | 2026-09-22 | 2026-09-23 |
| [#2349](https://github.com/ROCm/ATOM/pull/2349) | Add MiMo V2.5 Pro support to the SGLang plugin | @yucshen | open | 2026-09-22 | 2026-09-23 |
| [#2359](https://github.com/ROCm/ATOM/pull/2359) | [Bugfix][vLLM] Forward unknown kwargs through the Harmony pa... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2361](https://github.com/ROCm/ATOM/pull/2361) | [Bugfix][vLLM] Fill padded GDN decode state slots with NULL_... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2362](https://github.com/ROCm/ATOM/pull/2362) | [Bugfix][vLLM] Only engage the EAGLE3 heterogeneous KV pool ... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2340](https://github.com/ROCm/ATOM/pull/2340) | Enable GLM-5.3-Flash under vllm serve on the ATOM plugin.- #... | @sajandhy | draft | 2026-09-22 | 2026-09-22 |
| [#2293](https://github.com/ROCm/ATOM/pull/2293) | Add hybrid mega/standard MoE dispatch for MegaMxfp4MoEMethod | @amd-weisun | draft | 2026-09-18 | 2026-09-21 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | draft | 2026-08-19 | 2026-09-21 |
| [#2318](https://github.com/ROCm/ATOM/pull/2318) | fix(spec-decode): honor request sampling during target verif... | @gbyu-amd | draft | 2026-09-20 | 2026-09-20 |
| [#2301](https://github.com/ROCm/ATOM/pull/2301) | [Spec Decode] Add opt-in synthetic forward for forced accept... | @gbyu-amd | open | 2026-09-20 | 2026-09-20 |
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-09-20 |
| [#2126](https://github.com/ROCm/ATOM/pull/2126) | fix kimi k3 piecewise cudagraph | @ganyi1996ppo | draft | 2026-09-03 | 2026-09-18 |
| [#2275](https://github.com/ROCm/ATOM/pull/2275) | fix(plugin/vllm): keep the platform hook from dropping ATOMP... | @linsun12 | open | 2026-09-17 | 2026-09-18 |
| [#2266](https://github.com/ROCm/ATOM/pull/2266) | [ATOM][Metrics]: add decode TTFT stages, GPU sample/propose,... | @MengqingCao | draft | 2026-09-17 | 2026-09-17 |
| [#2262](https://github.com/ROCm/ATOM/pull/2262) | docs: refresh installation, model inventory and publication ... | @sunway513 | open | 2026-09-16 | 2026-09-17 |
| [#2252](https://github.com/ROCm/ATOM/pull/2252) | feat(dsv4-flash): vLLM-plugin in-process LMCache offload for... | @linsun12 | draft | 2026-09-16 | 2026-09-16 |
| [#2241](https://github.com/ROCm/ATOM/pull/2241) | ci: add Copilot code review instructions | @valarLip | open | 2026-09-15 | 2026-09-16 |
| [#2222](https://github.com/ROCm/ATOM/pull/2222) | perf(loader): separate streaming and drain concurrency | @JiaoliangYu | draft | 2026-09-14 | 2026-09-15 |
| [#2206](https://github.com/ROCm/ATOM/pull/2206) | setting HSA_ENABLE_IPC_MODE_LEGACY=1 to avoid GPU memory pin... | @linsun12 | open | 2026-09-12 | 2026-09-14 |
| [#2212](https://github.com/ROCm/ATOM/pull/2212) | Qichu/allow mtp8 with spec decode | @ZhiweiYan-96 | draft | 2026-09-13 | 2026-09-13 |
| [#2071](https://github.com/ROCm/ATOM/pull/2071) | [Ci]agentic benchmark ci weekly | @ZhangLirong-amd | open | 2026-08-28 | 2026-09-11 |
| [#2187](https://github.com/ROCm/ATOM/pull/2187) | feat(wideep): integrate EP16 transport with modular fused Mo... | @JiaoliangYu | draft | 2026-09-10 | 2026-09-11 |
| [#2196](https://github.com/ROCm/ATOM/pull/2196) | scheduler: make the prefill coalescer work on the TP/DCP pat... | @ZhiweiYan-96 | draft | 2026-09-11 | 2026-09-11 |
| [#1942](https://github.com/ROCm/ATOM/pull/1942) | feat(wideep): multi-node wide expert parallelism on top of #... | @JiaoliangYu | draft | 2026-08-18 | 2026-09-10 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | open | 2026-08-13 | 2026-09-10 |
| [#2158](https://github.com/ROCm/ATOM/pull/2158) | [Scheduler] Shortest-job-first prefill admission to cut p90 ... | @ganyi1996ppo | open | 2026-09-07 | 2026-09-08 |
| [#2142](https://github.com/ROCm/ATOM/pull/2142) | [atom-vllm] LMCache offload for GLM-5.2 | @kliuae | open | 2026-09-04 | 2026-09-07 |
| [#2059](https://github.com/ROCm/ATOM/pull/2059) | docs: Fix duplicated table on atom overview | @timothycarambat | open | 2026-08-27 | 2026-08-29 |
| [#2074](https://github.com/ROCm/ATOM/pull/2074) | [DO NOT MERGE] bench: fixed-length prompts and no warmup | @JiaoliangYu | open | 2026-08-28 | 2026-08-28 |
| [#2066](https://github.com/ROCm/ATOM/pull/2066) | [MTP] fix low acceptance rate issue of glm5.2 MTP | @ZhiweiYan-96 | draft | 2026-08-28 | 2026-08-28 |
| [#2024](https://github.com/ROCm/ATOM/pull/2024) | state checkpoint superblock | @ganyi1996ppo | open | 2026-08-26 | 2026-08-27 |
| [#2011](https://github.com/ROCm/ATOM/pull/2011) | [Feature] Integrate the AITER MK1 persistent decoder | @ssharma4-amd | draft | 2026-08-24 | 2026-08-26 |
| [#2015](https://github.com/ROCm/ATOM/pull/2015) | Optimized Attention Residual for Kimi-K3 | @amd-wsung102 | draft | 2026-08-25 | 2026-08-26 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-26 |
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-08-26 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-08-26 |
| [#1217](https://github.com/ROCm/ATOM/pull/1217) | [CI] add performance CI for online quant | @haoyangli0109 | open | 2026-06-15 | 2026-08-26 |
| [#2023](https://github.com/ROCm/ATOM/pull/2023) | feat(mla): optionally run sparse MLA on aiter's Gluon kernel | @cagrikymk | draft | 2026-08-25 | 2026-08-25 |
| [#1901](https://github.com/ROCm/ATOM/pull/1901) | [ATOM-vLLM] Add support for Qwen3.8 | @kliuae | open | 2026-08-14 | 2026-08-25 |
| [#1893](https://github.com/ROCm/ATOM/pull/1893) | [Kimi-K3] Route KDA prefill through the FlyDSL AITER kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#1879](https://github.com/ROCm/ATOM/pull/1879) | Optimize statecache and prefix caching strategy for Mamba li... | @ganyi1996ppo | open | 2026-08-13 | 2026-08-19 |
| [#1908](https://github.com/ROCm/ATOM/pull/1908) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-08-15 | 2026-08-19 |
| [#1941](https://github.com/ROCm/ATOM/pull/1941) | [recipe] add Agentic-K3 recipe | @gbyu-amd | open | 2026-08-18 | 2026-08-19 |
| [#1922](https://github.com/ROCm/ATOM/pull/1922) | [DO NOT MERGE] [LONG TERM] Gate heavy CI with reusable workf... | @gyohuangxin | open | 2026-08-17 | 2026-08-18 |
| [#1932](https://github.com/ROCm/ATOM/pull/1932) | fix(moe): preserve FP8 shuffle metadata | @akii96 | draft | 2026-08-17 | 2026-08-17 |
| [#1891](https://github.com/ROCm/ATOM/pull/1891) | [ATOM SGL] fix ci error | @ZhiweiYan-96 | open | 2026-08-13 | 2026-08-17 |
| [#1913](https://github.com/ROCm/ATOM/pull/1913) | [feat] enable k3 vision part in vllm plugin | @gbyu-amd | open | 2026-08-16 | 2026-08-17 |
| [#1843](https://github.com/ROCm/ATOM/pull/1843) | [ATOM SGL][feat] K3 dspark | @ZhiweiYan-96 | draft | 2026-08-10 | 2026-08-17 |
| [#1867](https://github.com/ROCm/ATOM/pull/1867) | add new torch base docker | @zhuyuhua-v | draft | 2026-08-12 | 2026-08-17 |
| [#1888](https://github.com/ROCm/ATOM/pull/1888) | [fix](vllm): remove vllm patch | @PerryZhang01 | open | 2026-08-13 | 2026-08-14 |
| [#1892](https://github.com/ROCm/ATOM/pull/1892) | [Feat] Allow passing token ids to /v1/completions  | @simondanielsson | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1869](https://github.com/ROCm/ATOM/pull/1869) | Guanbao/fix k3 dspark | @gbyu-amd | open | 2026-08-12 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | open | 2026-08-07 | 2026-08-10 |
| [#837](https://github.com/ROCm/ATOM/pull/837) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-07-03 |
| [#2932](https://github.com/ROCm/ATOM/pull/2932) | fix(engram): serialize UVA registration across DP ranks and ... | @karverma-amd | merged | 2026-11-03 | 2026-11-11 |
| [#3128](https://github.com/ROCm/ATOM/pull/3128) | perf(dsv41): widen the indexer block-maxima grid and use 128... | @yhl-amd | merged | 2026-11-09 | 2026-11-11 |
| [#3184](https://github.com/ROCm/ATOM/pull/3184) | fix(qwen38): mono target and draft programs write the QSA Ro... | @ZLkanyo009 | merged | 2026-11-11 | 2026-11-11 |
| [#3189](https://github.com/ROCm/ATOM/pull/3189) | fix(plugin): start DeepSeek-V4.1 on the vLLM plugin again af... | @PerryZhang01 | merged | 2026-11-11 | 2026-11-11 |
| [#2755](https://github.com/ROCm/ATOM/pull/2755) | feat(dp): prefix-spread DP routing with native Mooncake Stor... | @ZhangLirong-amd | merged | 2026-10-27 | 2026-11-11 |
| [#3076](https://github.com/ROCm/ATOM/pull/3076) | fix(moe): preserve invalid DP rows when reassigning shared e... | @JiaoliangYu | merged | 2026-11-06 | 2026-11-11 |
| [#3185](https://github.com/ROCm/ATOM/pull/3185) | [DSV4.1][gfx1250] Fix the crash on a single-launch served st... | @yifehuan | merged | 2026-11-11 | 2026-11-11 |
| [#3117](https://github.com/ROCm/ATOM/pull/3117) | Kimi-K3 plugin: LMCache MP offload with the KDA state riding... | @PerryZhang01 | merged | 2026-11-09 | 2026-11-11 |
| [#3137](https://github.com/ROCm/ATOM/pull/3137) | vllm-atom: GLM-5.3-Flash prefix caching and MTP on the plugi... | @PerryZhang01 | merged | 2026-11-09 | 2026-11-11 |
| [#2938](https://github.com/ROCm/ATOM/pull/2938) | perf(kimi-k3): read a strided AttnRes block residual without... | @rebklee | merged | 2026-11-03 | 2026-11-11 |
| [#3059](https://github.com/ROCm/ATOM/pull/3059) | [Lumen-RL] Pause and resume generation; preempt before the K... | @xysheng-AMD | merged | 2026-11-06 | 2026-11-11 |
| [#3181](https://github.com/ROCm/ATOM/pull/3181) | docker: bump Mooncake to kvcache-ai/Mooncake@206d634 (THP-ba... | @Jasen2201 | merged | 2026-11-11 | 2026-11-11 |
| [#3182](https://github.com/ROCm/ATOM/pull/3182) | test(dspark): pass the block pass to _stage_anchors in the s... | @Jasen2201 | merged | 2026-11-11 | 2026-11-11 |
| [#3091](https://github.com/ROCm/ATOM/pull/3091) | [DeepSeek-V4.1] High-interactivity monokernel decode for Dee... | @rdoshi-amd | merged | 2026-11-07 | 2026-11-10 |
| [#2582](https://github.com/ROCm/ATOM/pull/2582) | feat(spec-decode): probability-ratio rejection sampling behi... | @rbrugaro-amd | merged | 2026-10-14 | 2026-11-10 |
| [#3155](https://github.com/ROCm/ATOM/pull/3155) | fix(k3-offload): fence the in-process state store on the slo... | @ZLkanyo009 | merged | 2026-11-10 | 2026-11-10 |
| [#2831](https://github.com/ROCm/ATOM/pull/2831) | feat(dsv41): fuse wo_a->wo_b mxfp8 quant into the batched GE... | @karverma-amd | merged | 2026-10-29 | 2026-11-10 |
| [#3109](https://github.com/ROCm/ATOM/pull/3109) | [DSV4.1][gfx1250] Single-launch decode step (FlyDSL) | @yifehuan | merged | 2026-11-09 | 2026-11-10 |
| [#3169](https://github.com/ROCm/ATOM/pull/3169) | fix(v4): run V4's TBO comm stream at high priority | @yhl-amd | merged | 2026-11-10 | 2026-11-10 |
| [#3167](https://github.com/ROCm/ATOM/pull/3167) | fix(qwen4_exp): page QSA through the scheduled requests' blo... | @valarLip | merged | 2026-11-10 | 2026-11-10 |
| [#3170](https://github.com/ROCm/ATOM/pull/3170) | docs(readme): add the FlyDSL mono kernels blog to News | @wuhuikx | merged | 2026-11-10 | 2026-11-10 |
| [#3052](https://github.com/ROCm/ATOM/pull/3052) | fix(attention): accept optional explicit FlyDSL plans | @XiaobingSuper | merged | 2026-11-06 | 2026-11-10 |
| [#3168](https://github.com/ROCm/ATOM/pull/3168) | docs(readme): add the ATOM Meets Mooncake blog to News | @valarLip | merged | 2026-11-10 | 2026-11-10 |
| [#3073](https://github.com/ROCm/ATOM/pull/3073) | fix(compile): format Inductor's implicit-fallback log text o... | @yhl-amd | merged | 2026-11-06 | 2026-11-10 |
| [#3153](https://github.com/ROCm/ATOM/pull/3153) | Add defense-in-depth guards for self-hosted runner jobs | @gyohuangxin | merged | 2026-11-10 | 2026-11-10 |
| [#3121](https://github.com/ROCm/ATOM/pull/3121) | [CI][dashboard] AgentX / Non-AgentX dashboard with an Infere... | @Jasen2201 | merged | 2026-11-09 | 2026-11-10 |
| [#2985](https://github.com/ROCm/ATOM/pull/2985) | fix(ci): one local-model completeness check for SGLang/vLLM ... | @junyyang-amd | merged | 2026-11-04 | 2026-11-10 |
| [#3071](https://github.com/ROCm/ATOM/pull/3071) | ci: remove Atomesh TW weekly schedule | @junyyang-amd | merged | 2026-11-06 | 2026-11-10 |
| [#2771](https://github.com/ROCm/ATOM/pull/2771) | perf(qwen4_exp): keep the PLE n-gram table in page-locked ho... | @ZLkanyo009 | merged | 2026-10-28 | 2026-11-10 |
| [#3062](https://github.com/ROCm/ATOM/pull/3062) | fix(ci): read the SGLang benchmark matrix from a file in the... | @junyyang-amd | merged | 2026-11-06 | 2026-11-10 |
| [#2709](https://github.com/ROCm/ATOM/pull/2709) | feat(kimi-k3): PP8 P/D prefill 1/4 — PAGE-backed state check... | @wanzhenchn | merged | 2026-10-26 | 2026-11-10 |
| [#2668](https://github.com/ROCm/ATOM/pull/2668) | fix(offload): refresh state images in LMCache's LRU on every... | @ZLkanyo009 | merged | 2026-10-21 | 2026-11-10 |
| [#3105](https://github.com/ROCm/ATOM/pull/3105) | Fix delayed P/D KV completion reporting during empty engine ... | @ZhangLirong-amd | merged | 2026-11-09 | 2026-11-10 |
| [#3083](https://github.com/ROCm/ATOM/pull/3083) | feat(sampler): opt in to independent per-row sampling noise | @yelkhamra | merged | 2026-11-06 | 2026-11-10 |
| [#3136](https://github.com/ROCm/ATOM/pull/3136) | refactor(tbo): stage, publish and finish attention metadata ... | @valarLip | merged | 2026-11-09 | 2026-11-09 |
| [#3106](https://github.com/ROCm/ATOM/pull/3106) | fix(scheduler): stop bounding the delayer's fill probe by pr... | @ZhiweiYan-96 | merged | 2026-11-09 | 2026-11-09 |
| [#3061](https://github.com/ROCm/ATOM/pull/3061) | feat(api): hold Kimi-K3 tool calls to their schemas with the... | @zhuyuhua-v | merged | 2026-11-06 | 2026-11-09 |
| [#3113](https://github.com/ROCm/ATOM/pull/3113) | fix(tbo): release completed job before workers idle | @jiayyu | merged | 2026-11-09 | 2026-11-09 |
| [#2598](https://github.com/ROCm/ATOM/pull/2598) | DeepSeek-V4.1-Flash: LMCache tier offload through the MP ser... | @PerryZhang01 | merged | 2026-10-15 | 2026-11-09 |
| [#2847](https://github.com/ROCm/ATOM/pull/2847) | perf(qwen4_exp): Qwen3.8-Flash-Next TP prefill follow-ups: d... | @zovonoir | merged | 2026-10-30 | 2026-11-09 |
| [#2715](https://github.com/ROCm/ATOM/pull/2715) | [MLA] Plan a padded sparse MTP verify's work over the real t... | @qichu-yun | merged | 2026-10-26 | 2026-11-09 |
| [#3115](https://github.com/ROCm/ATOM/pull/3115) | feat(api): image input on /v1/responses and /v1/messages (IM... | @HaonanWang98 | merged | 2026-11-09 | 2026-11-09 |
| [#3098](https://github.com/ROCm/ATOM/pull/3098) | fix(dspark): allocate k draft KV positions for block drafter... | @ZhiweiYan-96 | merged | 2026-11-09 | 2026-11-09 |
| [#3111](https://github.com/ROCm/ATOM/pull/3111) | fix(api): check and load Chat images in the server (IMAGE-03... | @HaonanWang98 | merged | 2026-11-09 | 2026-11-09 |
| [#3090](https://github.com/ROCm/ATOM/pull/3090) | feat(api): strict function tools on /beta/chat/completions (... | @HaonanWang98 | merged | 2026-11-07 | 2026-11-09 |
| [#2809](https://github.com/ROCm/ATOM/pull/2809) | feat(indexer): migrate V4 and V4.1 FP4 scoring to the OPUS c... | @junhaha666 | merged | 2026-10-29 | 2026-11-09 |
| [#3080](https://github.com/ROCm/ATOM/pull/3080) | [gfx1250][GDN] Prefill chain: conv1d, fused KKT+inverse, chu... | @Boss2002n | merged | 2026-11-06 | 2026-11-06 |
| [#3075](https://github.com/ROCm/ATOM/pull/3075) | fix(moe): drop the missing-route clear from comm-fused MoE | @yhl-amd | merged | 2026-11-06 | 2026-11-06 |
| [#2707](https://github.com/ROCm/ATOM/pull/2707) | perf(qwen3.5): Triton top-k router + pad the 513-row MoE rou... | @ZhiweiYan-96 | merged | 2026-10-26 | 2026-11-06 |
| [#2453](https://github.com/ROCm/ATOM/pull/2453) | [1/3 entrypoint refactor] [feat(mesh)]: unify multi-API ingr... | @Yuechguo | merged | 2026-10-02 | 2026-11-06 |
| [#3072](https://github.com/ROCm/ATOM/pull/3072) | fix(config): key the compile cache on max_num_batched_tokens... | @yhl-amd | merged | 2026-11-06 | 2026-11-06 |
| [#3036](https://github.com/ROCm/ATOM/pull/3036) | feat(api): add DeepSeek's beta FIM and assistant-prefix comp... | @HaonanWang98 | merged | 2026-11-05 | 2026-11-06 |
| [#3060](https://github.com/ROCm/ATOM/pull/3060) | fix(qwen3): tie the LM head to the embedding's Parameter | @xysheng-AMD | merged | 2026-11-06 | 2026-11-06 |
| [#2489](https://github.com/ROCm/ATOM/pull/2489) | [gfx1250] Add ATOM_MLA_ABSORB_BF16: keep MLA-absorb weights ... | @karverma-amd | merged | 2026-10-07 | 2026-11-06 |
| [#2663](https://github.com/ROCm/ATOM/pull/2663) | feat(spec): capture the Qwen3.8 MTP draft steps in CUDA grap... | @ZLkanyo009 | merged | 2026-10-21 | 2026-11-06 |
| [#2986](https://github.com/ROCm/ATOM/pull/2986) | fix(ci): run DeepSeek-V3.2-FP8 DP/EP on SGLang with ATOM_FUS... | @junyyang-amd | merged | 2026-11-04 | 2026-11-06 |
| [#2993](https://github.com/ROCm/ATOM/pull/2993) | fix(qwen38): mono draft fallback without a RoPE cache; QSA R... | @yifehuan | merged | 2026-11-04 | 2026-11-06 |
| [#2364](https://github.com/ROCm/ATOM/pull/2364) | feat(sp): add Ulysses sequence parallelism and optimize M3 p... | @whx-sjtu | merged | 2026-09-23 | 2026-11-06 |
| [#2987](https://github.com/ROCm/ATOM/pull/2987) | [ATOMesh][CI] Enable Kimi K3 WideEP DPA16/EP16 with MoRI EP ... | @lcskrishna | merged | 2026-11-04 | 2026-11-06 |
| [#3034](https://github.com/ROCm/ATOM/pull/3034) | feat(minimax-m3): enable native 1x32 MXFP8 preshuffle GEMM | @XiaobingSuper | merged | 2026-11-05 | 2026-11-06 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-11-11T15:41:49Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#986](https://github.com/ROCm/mori/pull/986) | feat(umbp): add low-priority gather copies | @BadrBasowid | draft | 2026-11-11 | 2026-11-11 |
| [#921](https://github.com/ROCm/mori/pull/921) | perf(anvil): spread MI308X peer links that fold onto one SDM... | @yicyang | open | 2026-11-05 | 2026-11-11 |
| [#985](https://github.com/ROCm/mori/pull/985) | feat(umbp): opt-in NIC loopback for local host<->GPU copies,... | @kawhil-amd | draft | 2026-11-11 | 2026-11-11 |
| [#918](https://github.com/ROCm/mori/pull/918) | perf(ep/v2): AsyncLL segmented receive layout (zero copy) fo... | @ChengYM5685 | open | 2026-11-05 | 2026-11-11 |
| [#907](https://github.com/ROCm/mori/pull/907) | Fix/io failed status waits for all wrs | @amirakb89 | open | 2026-11-03 | 2026-11-11 |
| [#944](https://github.com/ROCm/mori/pull/944) | fix(sdma): pick one even engine per peer on an SR-IOV VF | @YeSho-cpp | open | 2026-11-09 | 2026-11-11 |
| [#898](https://github.com/ROCm/mori/pull/898) | fix(io/xgmi): open hidden-device sessions between PCIe peers... | @akshayv | open | 2026-11-02 | 2026-11-11 |
| [#938](https://github.com/ROCm/mori/pull/938) | fix(io): bounded WaitFor polls a status that only completes ... | @amirakb89 | open | 2026-11-09 | 2026-11-11 |
| [#972](https://github.com/ROCm/mori/pull/972) | docs: fix pages that no longer match the code | @yangyuhuiling | open | 2026-11-10 | 2026-11-11 |
| [#966](https://github.com/ROCm/mori/pull/966) | feat(ep): GPU-free dispatch/combine simulation with config-d... | @TianDi101 | open | 2026-11-10 | 2026-11-11 |
| [#971](https://github.com/ROCm/mori/pull/971) | docs(cco): introduce EPv1/EPv2 and CCO compute-communication... | @kawhil-amd | draft | 2026-11-10 | 2026-11-11 |
| [#949](https://github.com/ROCm/mori/pull/949) | feat(umbp): bound standalone lookups with lookup_timeout_ms | @charxwu | open | 2026-11-09 | 2026-11-11 |
| [#982](https://github.com/ROCm/mori/pull/982) | feat(umbp): pull each remote whole object once per node (rem... | @TianDi101 | draft | 2026-11-11 | 2026-11-11 |
| [#980](https://github.com/ROCm/mori/pull/980) | [Fix][IO] Bound TCP control frames by a shared receive deadl... | @Lzy17 | open | 2026-11-10 | 2026-11-10 |
| [#818](https://github.com/ROCm/mori/pull/818) | [NFC] Refactor GPU vector load/store primitives and remove d... | @pemeliya | draft | 2026-10-20 | 2026-11-10 |
| [#950](https://github.com/ROCm/mori/pull/950) | feat(ep): sync KIWI EP with upstream tuning, proxy affinity ... | @charlifu | open | 2026-11-09 | 2026-11-10 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#962](https://github.com/ROCm/mori/pull/962) | gemm_ar: run the triggered all-reduce's reducer beside the G... | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#964](https://github.com/ROCm/mori/pull/964) | feat(ep/v2): bf16 push combine on gfx1250, chosen per call | @zhangfei829 | open | 2026-11-10 | 2026-11-10 |
| [#967](https://github.com/ROCm/mori/pull/967) | fix(umbp): backend-policy SSD instances keep the UMBP_SSD_* ... | @TianDi101 | open | 2026-11-10 | 2026-11-10 |
| [#888](https://github.com/ROCm/mori/pull/888) | feat(umbp): direct pool ranged GET with missing-range dedupl... | @wuyl1 | open | 2026-11-02 | 2026-11-10 |
| [#979](https://github.com/ROCm/mori/pull/979) | fix(fused-ops): make supports() and the tile check match con... | @yangyuhuiling | open | 2026-11-10 | 2026-11-10 |
| [#977](https://github.com/ROCm/mori/pull/977) | fix(ep): read the scale row before groups skip in the 1250x ... | @zhangfei829 | open | 2026-11-10 | 2026-11-10 |
| [#885](https://github.com/ROCm/mori/pull/885) | ci: request a Claude PR review with /claude-review or the cl... | @i-chaochen | open | 2026-11-01 | 2026-11-10 |
| [#940](https://github.com/ROCm/mori/pull/940) | fix(smi): reuse the SMI library already loaded in the proces... | @jhchouuu | open | 2026-11-09 | 2026-11-10 |
| [#976](https://github.com/ROCm/mori/pull/976) | test(ep): report bus bandwidth in the EP v2 bench | @zhangfei829 | open | 2026-11-10 | 2026-11-10 |
| [#975](https://github.com/ROCm/mori/pull/975) | refactor(ep): remove EP v1's gfx125x and cco code | @zhangfei829 | open | 2026-11-10 | 2026-11-10 |
| [#959](https://github.com/ROCm/mori/pull/959) | feat(cco): Python bindings for trigger queues | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#957](https://github.com/ROCm/mori/pull/957) | feat(cco): host-armed SDMA trigger queues | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#871](https://github.com/ROCm/mori/pull/871) | CI: Migrate MoRI to ROCm 10.1 | @QizhouZhang97 | open | 2026-10-29 | 2026-11-10 |
| [#956](https://github.com/ROCm/mori/pull/956) | feat(anvil): private SDMA queues with host access to the rin... | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#850](https://github.com/ROCm/mori/pull/850) | [UMBP] Add async prefetch requests for Router integration | @wuyl1 | open | 2026-10-27 | 2026-11-10 |
| [#887](https://github.com/ROCm/mori/pull/887) | [UMBP] Add local-only PUT placement with cross-node sharing | @wuyl1 | open | 2026-11-02 | 2026-11-10 |
| [#941](https://github.com/ROCm/mori/pull/941) | fix(umbp): re-register standalone memory after the server re... | @charxwu | open | 2026-11-09 | 2026-11-10 |
| [#961](https://github.com/ROCm/mori/pull/961) | gemm_ar: triggered GEMM + two-shot all-reduce op | @BKP | open | 2026-11-09 | 2026-11-09 |
| [#960](https://github.com/ROCm/mori/pull/960) | gemm_ar: gate table and gate-epilogue view | @BKP | open | 2026-11-09 | 2026-11-09 |
| [#816](https://github.com/ROCm/mori/pull/816) | Draft collectives develop | @pemeliya | draft | 2026-10-20 | 2026-11-09 |
| [#909](https://github.com/ROCm/mori/pull/909) | feat(ras): heartbeat links between MORI-IO peers, with exit ... | @i-chaochen | open | 2026-11-04 | 2026-11-09 |
| [#946](https://github.com/ROCm/mori/pull/946) | fix(cco): import a torch.symm_mem buffer whose data starts i... | @jhchouuu | open | 2026-11-09 | 2026-11-09 |
| [#937](https://github.com/ROCm/mori/pull/937) | perf(ep/v1ll): lower MI355X EP32 small-batch latency for hid... | @jhchouuu | open | 2026-11-09 | 2026-11-09 |
| [#933](https://github.com/ROCm/mori/pull/933) | feat(io/sim): post_on_host -- per-op / per-segment cost on t... | @ZhaiFeiyue | open | 2026-11-07 | 2026-11-08 |
| [#934](https://github.com/ROCm/mori/pull/934) | fix(io/sim): skip unknown catalog fields with a warning; MOR... | @ZhaiFeiyue | open | 2026-11-07 | 2026-11-07 |
| [#846](https://github.com/ROCm/mori/pull/846) | feat(io): add version/mode/layout compatibility check to han... | @kudomcho | open | 2026-10-26 | 2026-11-06 |
| [#929](https://github.com/ROCm/mori/pull/929) | fix(umbp): stop rescanning a full buffer for every key of a ... | @TianDi101 | draft | 2026-11-06 | 2026-11-06 |
| [#848](https://github.com/ROCm/mori/pull/848) | Feat/io receiver fence | @amirakb89 | open | 2026-10-27 | 2026-11-06 |
| [#632](https://github.com/ROCm/mori/pull/632) | fix(cco): take allocMutex on the window paths | @jhchouuu | open | 2026-09-02 | 2026-11-06 |
| [#904](https://github.com/ROCm/mori/pull/904) | feat(cco): example 13 -- MegaMoE Stage1 with the dispatch on... | @yangyuhuiling | draft | 2026-11-03 | 2026-11-06 |
| [#922](https://github.com/ROCm/mori/pull/922) | fix(io): name a QP that enters the error state with no faile... | @isytwu | open | 2026-11-05 | 2026-11-05 |
| [#919](https://github.com/ROCm/mori/pull/919) | feat(cco): example 14 -- the whole EP MoE layer in one persi... | @yangyuhuiling | draft | 2026-11-05 | 2026-11-05 |
| [#916](https://github.com/ROCm/mori/pull/916) | poc(cco): MoE quantise-and-dispatch with SDMA | @kawhil-amd | draft | 2026-11-04 | 2026-11-05 |
| [#884](https://github.com/ROCm/mori/pull/884) | feat(umbp): move remote ranged I/O straight between register... | @isytwu | draft | 2026-11-01 | 2026-11-04 |
| [#865](https://github.com/ROCm/mori/pull/865) | feat(umbp): the UMBP_DISTRIBUTED_* variables configure an in... | @isytwu | open | 2026-10-28 | 2026-11-04 |
| [#883](https://github.com/ROCm/mori/pull/883) | feat(umbp): lease ranged scratch slices by size instead of f... | @isytwu | draft | 2026-10-31 | 2026-11-04 |
| [#911](https://github.com/ROCm/mori/pull/911) | feat(ras): host NIC inventory, topology, and labels in the i... | @i-chaochen | open | 2026-11-04 | 2026-11-04 |
| [#910](https://github.com/ROCm/mori/pull/910) | feat(ras): link round-trip time and clock offset (RAS 3/5) | @i-chaochen | open | 2026-11-04 | 2026-11-04 |
| [#912](https://github.com/ROCm/mori/pull/912) | feat(ras): record which GPU and NICs each local engine uses ... | @i-chaochen | open | 2026-11-04 | 2026-11-04 |
| [#906](https://github.com/ROCm/mori/pull/906) | perf(ep/v2): AsyncLL slot assignment by block, receive copy ... | @yangyuhuiling | open | 2026-11-03 | 2026-11-03 |
| [#797](https://github.com/ROCm/mori/pull/797) | Fall back to scoped 64-bit atomics when b128 global builtins... | @aokblast | open | 2026-10-18 | 2026-11-03 |
| [#891](https://github.com/ROCm/mori/pull/891) | [DSV4.1] Vectorize the top-6 fp4_blockwise intranode combine... | @heachary | open | 2026-11-02 | 2026-11-02 |
| [#795](https://github.com/ROCm/mori/pull/795) | fix(EPv2): add a tuned flydsl EP8 table for MI300X | @jeffdaily | open | 2026-10-17 | 2026-10-30 |
| [#869](https://github.com/ROCm/mori/pull/869) | fix(rdma): opt-in workaround for KFD free-VRAM miscount of R... | @isytwu | open | 2026-10-29 | 2026-10-29 |
| [#864](https://github.com/ROCm/mori/pull/864) | fix(io): a post that runs out of SQ depth no longer leaks th... | @isytwu | open | 2026-10-28 | 2026-10-28 |
| [#863](https://github.com/ROCm/mori/pull/863) | fix(bootstrap): close sockets and peer fds on failure paths | @jhchouuu | open | 2026-10-28 | 2026-10-28 |
| [#842](https://github.com/ROCm/mori/pull/842) | fix(umbp): master routes a repeat put of an in-flight key to... | @TianDi101 | open | 2026-10-26 | 2026-10-26 |
| [#825](https://github.com/ROCm/mori/pull/825) | feat(umbp): add multi-GPU KV cache restores | @BadrBasowid | open | 2026-10-21 | 2026-10-23 |
| [#833](https://github.com/ROCm/mori/pull/833) | fix(topology): give each NIC its closest GPUs before farther... | @MohitAMD | open | 2026-10-22 | 2026-10-22 |
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
| [#585](https://github.com/ROCm/mori/pull/585) | Don't merge: AI NIC perf collection | @amirakb89 | draft | 2026-08-19 | 2026-08-31 |
| [#578](https://github.com/ROCm/mori/pull/578) | feat(ep/v2): TDM dispatch transport for the flydsl backend | @XingerZhu | open | 2026-08-18 | 2026-08-31 |
| [#574](https://github.com/ROCm/mori/pull/574) | Io prepared transfers v3 | @amirakb89 | open | 2026-08-17 | 2026-08-31 |
| [#539](https://github.com/ROCm/mori/pull/539) | perf(EP): tune EPv1 MI300X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @kudomcho | open | 2026-08-11 | 2026-08-31 |
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
| [#984](https://github.com/ROCm/mori/pull/984) | fix(mlx5): key the next-hop MAC cache on the local NIC, port... | @jhchouuu | merged | 2026-11-11 | 2026-11-11 |
| [#945](https://github.com/ROCm/mori/pull/945) | fix(mlx5): resolve the next-hop MAC for RoCE DEVX QPs | @YeSho-cpp | merged | 2026-11-09 | 2026-11-11 |
| [#983](https://github.com/ROCm/mori/pull/983) | ci: reuse build caches across jobs, run main every 3 hours, ... | @QizhouZhang97 | merged | 2026-11-11 | 2026-11-11 |
| [#923](https://github.com/ROCm/mori/pull/923) | feat(ops): SdmaAllGatherOp, an in-place start/wait all-gathe... | @AMD-yanfeiwang | merged | 2026-11-06 | 2026-11-11 |
| [#696](https://github.com/ROCm/mori/pull/696) | perf(ep/v2): EPv2 inter-node dispatch/combine on MI300X, MI3... | @QizhouZhang97 | merged | 2026-09-22 | 2026-11-11 |
| [#968](https://github.com/ROCm/mori/pull/968) | docs: link the README to the documentation site | @yangyuhuiling | merged | 2026-11-10 | 2026-11-11 |
| [#973](https://github.com/ROCm/mori/pull/973) | docs: organize the site by component, add a UMBP overview, d... | @yangyuhuiling | merged | 2026-11-10 | 2026-11-11 |
| [#981](https://github.com/ROCm/mori/pull/981) | ci: keep single-node jobs off MI355X-AINIC; fewer launches, ... | @QizhouZhang97 | merged | 2026-11-11 | 2026-11-11 |
| [#930](https://github.com/ROCm/mori/pull/930) | poc(cco): MegaMoE GEMM1 fused with an SDMA dispatch (gfx950)... | @kawhil-amd | merged | 2026-11-06 | 2026-11-11 |
| [#882](https://github.com/ROCm/mori/pull/882) | feat(umbp): BatchTouch counts SSD copies and hands the tier ... | @isytwu | merged | 2026-10-31 | 2026-11-11 |
| [#779](https://github.com/ROCm/mori/pull/779) | feat(umbp): BatchTouch, so callers can report KV hits served... | @isytwu | merged | 2026-10-15 | 2026-11-10 |
| [#896](https://github.com/ROCm/mori/pull/896) | feat(umbp): warn when a NIC memory region outgrows what an A... | @isytwu | merged | 2026-11-02 | 2026-11-10 |
| [#857](https://github.com/ROCm/mori/pull/857) | perf(gemm-ar): load mxfp8 scales one K step ahead at K >= 40... | @yangyuhuiling | merged | 2026-10-27 | 2026-11-10 |
| [#901](https://github.com/ROCm/mori/pull/901) | perf(umbp): give SSD batch reads their own io_uring rings pe... | @TianDi101 | merged | 2026-11-03 | 2026-11-10 |
| [#856](https://github.com/ROCm/mori/pull/856) | feat(umbp): lay the standalone server's ranged scratch out b... | @isytwu | merged | 2026-10-27 | 2026-11-10 |
| [#902](https://github.com/ROCm/mori/pull/902) | perf(umbp): TP ranks reading the same SSD extent share one s... | @TianDi101 | merged | 2026-11-03 | 2026-11-10 |
| [#868](https://github.com/ROCm/mori/pull/868) | a2a_gemm: all-to-all fused into the fp8 GEMM that consumes i... | @yangyuhuiling | merged | 2026-10-28 | 2026-11-10 |
| [#802](https://github.com/ROCm/mori/pull/802) | gemm_ar: fused GEMM + reduce-scatter for sequence parallelis... | @yangyuhuiling | merged | 2026-10-19 | 2026-11-10 |
| [#889](https://github.com/ROCm/mori/pull/889) | feat(cco): example 11 -- 8-wave GEMM2 option, exact send/lan... | @yangyuhuiling | merged | 2026-11-02 | 2026-11-10 |
| [#886](https://github.com/ROCm/mori/pull/886) | Fix/epv2 1250x r1 combine | @zhangfei829 | merged | 2026-11-02 | 2026-11-10 |
| [#870](https://github.com/ROCm/mori/pull/870) | feat(umbp): calibrate CPU, GPU, RDMA and SSD transfers | @wuyl1 | merged | 2026-10-29 | 2026-11-10 |
| [#530](https://github.com/ROCm/mori/pull/530) | perf(EPv2): update gfx1250 tune config + optimize kernel imp... | @kawhil-amd | merged | 2026-08-06 | 2026-11-10 |
| [#974](https://github.com/ROCm/mori/pull/974) | ci: halve the fused GEMM job's PR time | @QizhouZhang97 | merged | 2026-11-10 | 2026-11-10 |
| [#978](https://github.com/ROCm/mori/pull/978) | ci: route a pytest conftest.py by the tests below it | @jhchouuu | merged | 2026-11-10 | 2026-11-10 |
| [#970](https://github.com/ROCm/mori/pull/970) | ci: route PR CI by test group, down to the test step | @jhchouuu | merged | 2026-11-10 | 2026-11-10 |
| [#845](https://github.com/ROCm/mori/pull/845) | Feat/check ib atomic bw dmabuf | @amirakb89 | merged | 2026-10-26 | 2026-11-10 |
| [#942](https://github.com/ROCm/mori/pull/942) | fix(cco): register fabric window MRs with iova=0 for gfx1250 | @kawhil-amd | merged | 2026-11-09 | 2026-11-10 |
| [#939](https://github.com/ROCm/mori/pull/939) | chore(cco): warn when the mori-cco running env lacks CONFIG_... | @kawhil-amd | merged | 2026-11-09 | 2026-11-10 |
| [#948](https://github.com/ROCm/mori/pull/948) | ci: run only the GPU lanes a PR's changes need; move the CCO... | @jhchouuu | merged | 2026-11-09 | 2026-11-10 |
| [#860](https://github.com/ROCm/mori/pull/860) | feat(ep): Add KIWI EP dispatch/combine as an optional MORI o... | @charlifu | merged | 2026-10-27 | 2026-11-09 |
| [#928](https://github.com/ROCm/mori/pull/928) | fix(rdma): make MORI_IB_ENABLE_RELAXED_ORDERING actually tak... | @YeSho-cpp | merged | 2026-11-06 | 2026-11-09 |
| [#900](https://github.com/ROCm/mori/pull/900) | fix(ep): fail MallocSymm with the heap size instead of hipMe... | @yelkhamra | merged | 2026-11-02 | 2026-11-09 |
| [#872](https://github.com/ROCm/mori/pull/872) | feat(gemm-ar): BF16 GEMM + all-reduce for layers the checkpo... | @yangyuhuiling | merged | 2026-10-29 | 2026-11-09 |
| [#936](https://github.com/ROCm/mori/pull/936) | feat(io): MORI_IO_QP_MAX_RD_ATOMIC caps the READs a QP keeps... | @isytwu | merged | 2026-11-09 | 2026-11-09 |
| [#908](https://github.com/ROCm/mori/pull/908) | feat(ras): RAS runtime started by MORI-IO engines (RAS 1/5) | @i-chaochen | merged | 2026-11-04 | 2026-11-09 |
| [#791](https://github.com/ROCm/mori/pull/791) | fix(umbp): a lookup renews the keys it finds, so eviction sp... | @TianDi101 | merged | 2026-10-16 | 2026-11-09 |
| [#924](https://github.com/ROCm/mori/pull/924) | fix(umbp): UMBPConfig() takes its defaults from the UMBP_* e... | @TianDi101 | merged | 2026-11-06 | 2026-11-06 |
| [#874](https://github.com/ROCm/mori/pull/874) | feat(ep/v2): gfx1250-strict support | @jhchouuu | merged | 2026-10-29 | 2026-11-06 |
| [#829](https://github.com/ROCm/mori/pull/829) | feat(umbp): the master routes small objects away from tiers ... | @TianDi101 | merged | 2026-10-22 | 2026-11-05 |
| [#903](https://github.com/ROCm/mori/pull/903) | refactor(umbp): track each SSD resolve read in one struct, n... | @TianDi101 | merged | 2026-11-03 | 2026-11-05 |
| [#895](https://github.com/ROCm/mori/pull/895) | feat(cco): GDA doorbell coalescing + compile-time doorbell m... | @jhchouuu | merged | 2026-11-02 | 2026-11-05 |
| [#875](https://github.com/ROCm/mori/pull/875) | fix(ep/v2): AsyncLL fused-receive deadlock under two streams... | @yangyuhuiling | merged | 2026-10-30 | 2026-11-05 |
| [#894](https://github.com/ROCm/mori/pull/894) | fix(ep): fail fast for cross-node kernels on the CCO backend | @paklui | merged | 2026-11-02 | 2026-11-05 |
| [#892](https://github.com/ROCm/mori/pull/892) | fix(ep/v2): give each AsyncLL op its own SDMA queue per peer | @ChengYM5685 | merged | 2026-11-02 | 2026-11-05 |
| [#880](https://github.com/ROCm/mori/pull/880) | feat(cco): enable SDMA broadcast + poll_regmem packets on gf... | @kawhil-amd | merged | 2026-10-30 | 2026-11-04 |
| [#913](https://github.com/ROCm/mori/pull/913) | docs: a guide to the fused GEMM + collective operators; fold... | @yangyuhuiling | merged | 2026-11-04 | 2026-11-04 |
| [#809](https://github.com/ROCm/mori/pull/809) | ag_gemm: all-gather fused into the fp8 GEMM that consumes it | @yangyuhuiling | merged | 2026-10-19 | 2026-11-04 |
| [#807](https://github.com/ROCm/mori/pull/807) | gemm_ag: GEMM fused with an all-gather over cco | @yangyuhuiling | merged | 2026-10-19 | 2026-11-04 |
| [#796](https://github.com/ROCm/mori/pull/796) | fix(ep/v1): close two InterNodeV1/V1LL dispatch/combine race... | @amirakb89 | merged | 2026-10-17 | 2026-11-03 |
| [#890](https://github.com/ROCm/mori/pull/890) | fix(io): register host memory with ibv_reg_mr alone, never d... | @isytwu | merged | 2026-11-02 | 2026-11-03 |
| [#824](https://github.com/ROCm/mori/pull/824) | feat(umbp): an SSD backend can keep small objects off it (mi... | @TianDi101 | merged | 2026-10-21 | 2026-11-03 |
| [#881](https://github.com/ROCm/mori/pull/881) | perf(EPv2/gfx1250): dispatch rows for EP4 hidden 2048 topk 8 | @Boss2002n | merged | 2026-10-30 | 2026-11-02 |
| [#695](https://github.com/ROCm/mori/pull/695) | gemm_a2a: fuse a column-sharded all-to-all into the fp8 GEMM... | @yangyuhuiling | merged | 2026-09-22 | 2026-11-02 |
| [#843](https://github.com/ROCm/mori/pull/843) | Wide ep tuning | @zhangfei829 | merged | 2026-10-26 | 2026-10-31 |
| [#876](https://github.com/ROCm/mori/pull/876) | fix(EPv2): clamp the untuned flydsl combine block count to t... | @kawhil-amd | merged | 2026-10-30 | 2026-10-31 |
| [#862](https://github.com/ROCm/mori/pull/862) | feat(umbp): simulate storage and local/peer KV transfers | @wuyl1 | merged | 2026-10-28 | 2026-10-31 |
| [#866](https://github.com/ROCm/mori/pull/866) | feat(cco): fused SDMA wait+put post, and an engine-wait in-p... | @AMD-yanfeiwang | merged | 2026-10-28 | 2026-10-30 |
| [#841](https://github.com/ROCm/mori/pull/841) | fix(anvil): read topology from sysfs, give libhsakmt its own... | @jhchouuu | merged | 2026-10-26 | 2026-10-30 |
| [#859](https://github.com/ROCm/mori/pull/859) | poc(cco): Mega-MoE GEMM2 fused with an SDMA combine (gfx950) | @kawhil-amd | merged | 2026-10-27 | 2026-10-30 |
| [#851](https://github.com/ROCm/mori/pull/851) | feat(umbp): automatically report DRAM residency to SGLang KV... | @wuyl1 | merged | 2026-10-27 | 2026-10-30 |
| [#867](https://github.com/ROCm/mori/pull/867) | feat(io): simulated RDMA/TCP/XGMI backends that need no GPU ... | @TianDi101 | merged | 2026-10-28 | 2026-10-29 |
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

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-11-11T15:41:53Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-11-11 |
| [#1387](https://github.com/ROCm/FlyDSL/pull/1387) | [CI] Add kimik3 a4w4 tuned CSV to the aiter wheel-validation... | @coderfeli | open | 2026-11-09 | 2026-11-11 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [Feat] Fix `lld invocation failed` when ROCm is not at the b... | @jli-melchior | open | 2026-08-08 | 2026-11-11 |
| [#1383](https://github.com/ROCm/FlyDSL/pull/1383) | [Feature][DSL] Add quantization codecs extension (fx.quant) | @dimitri91209 | draft | 2026-11-07 | 2026-11-10 |
| [#1391](https://github.com/ROCm/FlyDSL/pull/1391) | Fix log1p and expm1 returning 0 for tiny arguments | @amd-songpiao | open | 2026-11-09 | 2026-11-10 |
| [#1350](https://github.com/ROCm/FlyDSL/pull/1350) | [CDNA5] Add indexed-addressing plumbing to the TDM atom | @xudoyuan | draft | 2026-10-30 | 2026-11-10 |
| [#1390](https://github.com/ROCm/FlyDSL/pull/1390) | [Coop] Optimize warp-level prims on the rocdl | @sjfeng1999 | open | 2026-11-09 | 2026-11-10 |
| [#1193](https://github.com/ROCm/FlyDSL/pull/1193) | [LayoutLowering] Ignore size-one leaves in contiguous-segmen... | @mustafayildirim | open | 2026-09-25 | 2026-11-09 |
| [#1368](https://github.com/ROCm/FlyDSL/pull/1368) | [compiler][kernel] strict pin agpr feature and kernel exampl... | @jli-melchior | draft | 2026-11-04 | 2026-11-09 |
| [#1386](https://github.com/ROCm/FlyDSL/pull/1386) | [Runtime] Drop the ARCH env var in favor of FLYDSL_GPU_ARCH | @coderfeli | open | 2026-11-07 | 2026-11-09 |
| [#1380](https://github.com/ROCm/FlyDSL/pull/1380) | [Windows][CI] Add a Windows gfx1201 GPU workflow | @Phil-amd | draft | 2026-11-06 | 2026-11-09 |
| [#1385](https://github.com/ROCm/FlyDSL/pull/1385) | [Feature][DSL] Add Fast Walsh-Hadamard Transform (fx.hadamar... | @dimitri91209 | draft | 2026-11-07 | 2026-11-07 |
| [#1384](https://github.com/ROCm/FlyDSL/pull/1384) | [Feature][DSL] Add warp vote collectives, RDNA DPP, and warp... | @dimitri91209 | draft | 2026-11-07 | 2026-11-07 |
| [#1343](https://github.com/ROCm/FlyDSL/pull/1343) | [Bugfix] Keep every frame of an op's call chain in debug inf... | @hanli0612 | open | 2026-10-28 | 2026-11-07 |
| [#1375](https://github.com/ROCm/FlyDSL/pull/1375) | [DSL] Add ROCDL wrappers for FP8/BF8/F16 conversion, dot, ma... | @dimitri91209 | open | 2026-11-05 | 2026-11-07 |
| [#1377](https://github.com/ROCm/FlyDSL/pull/1377) | [Dialect][DSL] Add GFX120X SWMMAC 2:4 sparse MMA dialect ato... | @dimitri91209 | open | 2026-11-05 | 2026-11-07 |
| [#1251](https://github.com/ROCm/FlyDSL/pull/1251) | [Kernel][FA] Route flydsl_flash_attn_func to the new gfx950 ... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1250](https://github.com/ROCm/FlyDSL/pull/1250) | [Kernel][FA] Add gfx950 attention backward (dQ and dK/dV) po... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1249](https://github.com/ROCm/FlyDSL/pull/1249) | [Kernel][FA] Port gfx950 attention ALiBi, sink, paged KV, sp... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1248](https://github.com/ROCm/FlyDSL/pull/1248) | [Kernel][FA] Add the gfx950 attention forward kernel (dual-w... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1247](https://github.com/ROCm/FlyDSL/pull/1247) | [Kernel][FA] Add gfx950 attention metadata, knobs and traits... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1246](https://github.com/ROCm/FlyDSL/pull/1246) | [Kernel][FA] Add arch-neutral attention common, abi, philox ... | @xinyazhang | draft | 2026-10-09 | 2026-11-06 |
| [#1316](https://github.com/ROCm/FlyDSL/pull/1316) | [Kernel][Refactor] Extract shared softmax row-copy helpers | @ppppqp | draft | 2026-10-21 | 2026-11-06 |
| [#1303](https://github.com/ROCm/FlyDSL/pull/1303) | [Kernel] rdna3 GEMM: serve any M and any N, down to a 16x16 ... | @vlluvia | draft | 2026-10-16 | 2026-11-06 |
| [#1264](https://github.com/ROCm/FlyDSL/pull/1264) | [Bugfix][gfx1250] Reject FP8 and A8W4 GEMM tiles that issue ... | @jhinpan | open | 2026-10-11 | 2026-11-06 |
| [#1253](https://github.com/ROCm/FlyDSL/pull/1253) | [Bugfix][Test] Round MXFP8 E8M0 scales up in the test quanti... | @jhinpan | open | 2026-10-09 | 2026-11-06 |
| [#1245](https://github.com/ROCm/FlyDSL/pull/1245) | [Kernel][FA] Fix ds_read_tr waitcnt hazard and stagger SCC c... | @xinyazhang | open | 2026-10-09 | 2026-11-06 |
| [#1244](https://github.com/ROCm/FlyDSL/pull/1244) | [Doc] Add GLM and Kimi-K3 mono-kernel performance reports | @james-huang09 | draft | 2026-10-09 | 2026-11-06 |
| [#1234](https://github.com/ROCm/FlyDSL/pull/1234) | [Kernel]feat(dsv4): add the DeepSeek-V4 decode MonoKernel | @amd-weisun | open | 2026-10-07 | 2026-11-06 |
| [#1227](https://github.com/ROCm/FlyDSL/pull/1227) | [Kernel][Perf] Tune RMSNorm for gfx1250: BF16 hardware conve... | @jhinpan | open | 2026-10-06 | 2026-11-06 |
| [#1155](https://github.com/ROCm/FlyDSL/pull/1155) | gfx950 flex attention with user score/mask mods | @RichardChamberlain1 | open | 2026-09-17 | 2026-11-06 |
| [#1139](https://github.com/ROCm/FlyDSL/pull/1139) | [Kernel][Perf] Align gfx950 BF16 D128 attention with OPUS | @coderfeli | open | 2026-09-15 | 2026-11-06 |
| [#1137](https://github.com/ROCm/FlyDSL/pull/1137) | [Kernel][Perf] Fix and tune gfx950 dense FP8 attention | @coderfeli | open | 2026-09-15 | 2026-11-06 |
| [#1126](https://github.com/ROCm/FlyDSL/pull/1126) | [Kernel][Perf] Optimize gfx950 head64 prefill attention | @michael604work | open | 2026-09-11 | 2026-11-06 |
| [#1125](https://github.com/ROCm/FlyDSL/pull/1125) | [Perf] gemm_bf16 gfx1250: cross-tile carry to hide K-tile pr... | @amd-hhashemi | open | 2026-09-11 | 2026-11-06 |
| [#1113](https://github.com/ROCm/FlyDSL/pull/1113) | [Bugfix][Kernel] Fix fused RoPE for head dimension 96 | @tangzzycc | open | 2026-09-09 | 2026-11-06 |
| [#1108](https://github.com/ROCm/FlyDSL/pull/1108) | [Bugfix][Benchmark] Fix compiler API usage in Softmax and RM... | @tangzzycc | open | 2026-09-09 | 2026-11-06 |
| [#1104](https://github.com/ROCm/FlyDSL/pull/1104) |  deepseekv3 r1 tune config | @Yaowu-Xiong | open | 2026-09-08 | 2026-11-06 |
| [#1056](https://github.com/ROCm/FlyDSL/pull/1056) | Support vLLM paged KV cache layouts on the gfx950 attention ... | @akii96 | open | 2026-08-21 | 2026-11-06 |
| [#1045](https://github.com/ROCm/FlyDSL/pull/1045) | [Bugfix] Refuse a batch entry the buffer descriptor cannot a... | @JohnQin-llm | open | 2026-08-20 | 2026-11-06 |
| [#986](https://github.com/ROCm/FlyDSL/pull/986) | [Kernel] Fix single-accumulator RDNA3 GEMM tiles | @skyguan92 | open | 2026-08-08 | 2026-11-06 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-11-06 |
| [#1374](https://github.com/ROCm/FlyDSL/pull/1374) | [Kernel] Add native RDNA4 MXFP4 × FP8 dense GEMM | @big-yellow-duck | open | 2026-11-05 | 2026-11-06 |
| [#1111](https://github.com/ROCm/FlyDSL/pull/1111) | [DO NOT MERGE] Add MegaMoE engineering skill | @GwilliamHu | draft | 2026-09-09 | 2026-11-06 |
| [#1340](https://github.com/ROCm/FlyDSL/pull/1340) | [WIP][feat] support gpu asan feature  | @jli-melchior | draft | 2026-10-28 | 2026-11-05 |
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-11-05 |
| [#1288](https://github.com/ROCm/FlyDSL/pull/1288) | [Feat] Support warp exchange with layout | @ppppqp | open | 2026-10-14 | 2026-11-05 |
| [#1295](https://github.com/ROCm/FlyDSL/pull/1295) | [Debug] Support device assert | @ppppqp | open | 2026-10-14 | 2026-11-05 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-11-04 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-11-04 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-11-04 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-11-04 |
| [#1216](https://github.com/ROCm/FlyDSL/pull/1216) | [Kernel] Add dense Flash Attention for gfx1100 | @vlluvia | open | 2026-09-30 | 2026-11-04 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-11-04 |
| [#1363](https://github.com/ROCm/FlyDSL/pull/1363) | Rerun benchmark after Docker daemon failure | @Copilot | draft | 2026-11-03 | 2026-11-03 |
| [#1222](https://github.com/ROCm/FlyDSL/pull/1222) | [Build][JIT] Support core-only ROCm SDK environments | @apinge | open | 2026-10-01 | 2026-11-02 |
| [#1252](https://github.com/ROCm/FlyDSL/pull/1252) | [Kernel][FA] Document the gfx950 attention kernels and the 8... | @xinyazhang | draft | 2026-10-09 | 2026-10-30 |
| [#1272](https://github.com/ROCm/FlyDSL/pull/1272) | [Benchmark] fix rdna gemm benchmark option | @ppppqp | open | 2026-10-11 | 2026-10-28 |
| [#1325](https://github.com/ROCm/FlyDSL/pull/1325) | [JIT] Assert a single ROCDL target source; test the wave32 o... | @Phil-amd | draft | 2026-10-26 | 2026-10-26 |
| [#1326](https://github.com/ROCm/FlyDSL/pull/1326) | [JIT] flyc.compile[hints] no longer leaves its hints on the ... | @Phil-amd | draft | 2026-10-26 | 2026-10-26 |
| [#1277](https://github.com/ROCm/FlyDSL/pull/1277) | [Test] Cover the FlyDSL kernels vLLM depends on | @zhiding512 | open | 2026-10-12 | 2026-10-21 |
| [#1210](https://github.com/ROCm/FlyDSL/pull/1210) | [CI] Run full cooperative matrix before PyPI releases | @coderfeli | draft | 2026-09-28 | 2026-10-21 |
| [#1240](https://github.com/ROCm/FlyDSL/pull/1240) | [Bugfix] Shared numerics, streams, and tests | @dimitri91209 | open | 2026-10-09 | 2026-10-14 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1267](https://github.com/ROCm/FlyDSL/pull/1267) | [Runtime] Report GPU last-level cache size from KFD | @qiangpan2 | open | 2026-10-11 | 2026-10-13 |
| [#1282](https://github.com/ROCm/FlyDSL/pull/1282) | [Kernel][Attention] Add SageAttention2 gfx120 dense prefill | @qiangpan2 | draft | 2026-10-13 | 2026-10-13 |
| [#1239](https://github.com/ROCm/FlyDSL/pull/1239) | [Windows] Add native ROCm JIT support | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-08 |
| [#1179](https://github.com/ROCm/FlyDSL/pull/1179) | [Enh] Accept LLVM pointer types in ffi declarations | @LWenH | open | 2026-09-22 | 2026-10-10 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-09-28 |
| [#1191](https://github.com/ROCm/FlyDSL/pull/1191) | [Fix][Expr] Honor allocate(..., alignment=) for static share... | @xudoyuan | draft | 2026-09-24 | 2026-09-24 |
| [#1110](https://github.com/ROCm/FlyDSL/pull/1110) | [LLVM] Fix true16 lowering for packed FP8 conversions | @big-yellow-duck | open | 2026-09-09 | 2026-09-17 |
| [#1057](https://github.com/ROCm/FlyDSL/pull/1057) | [Kernel][Perf] Add gfx1151 tile selection for RDNA3 GEMM | @tangzzycc | open | 2026-08-22 | 2026-09-11 |
| [#912](https://github.com/ROCm/FlyDSL/pull/912) | Fix hierarchical reduced predicates in copy layout lowering | @HydraQYH | open | 2026-07-27 | 2026-11-09 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-08-28 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#1313](https://github.com/ROCm/FlyDSL/pull/1313) | [Core] Replace the Fly layout implementation with the Core l... | @sjfeng1999 | merged | 2026-10-20 | 2026-11-11 |
| [#1392](https://github.com/ROCm/FlyDSL/pull/1392) | [JIT] Add compile_only to flyc.compile | @sjfeng1999 | merged | 2026-11-09 | 2026-11-10 |
| [#1389](https://github.com/ROCm/FlyDSL/pull/1389) | [CI] Shrink the wheel artifact the GPU jobs download | @sjfeng1999 | merged | 2026-11-09 | 2026-11-10 |
| [#1388](https://github.com/ROCm/FlyDSL/pull/1388) | [CI] Label kernel-only pull requests automatically | @sjfeng1999 | merged | 2026-11-09 | 2026-11-09 |
| [#1332](https://github.com/ROCm/FlyDSL/pull/1332) | [Bugfix] Fix ROCm GPU counting and architecture fallback | @Qubitium | merged | 2026-10-26 | 2026-11-07 |
| [#1372](https://github.com/ROCm/FlyDSL/pull/1372) | [Bugfix] Fix gfx1250 WMMAScale FP8 and 32x16x128 register la... | @coderfeli | merged | 2026-11-05 | 2026-11-07 |
| [#1382](https://github.com/ROCm/FlyDSL/pull/1382) | [CI] Pull the published manylinux image tag from ghcr | @coderfeli | merged | 2026-11-06 | 2026-11-07 |
| [#1379](https://github.com/ROCm/FlyDSL/pull/1379) | [Tests] Drop the hard triton import from kernel test helpers | @Phil-amd | merged | 2026-11-06 | 2026-11-06 |
| [#1378](https://github.com/ROCm/FlyDSL/pull/1378) | [Windows][Tests] Fix missing stream waits in multi-stream te... | @Phil-amd | merged | 2026-11-06 | 2026-11-06 |
| [#1381](https://github.com/ROCm/FlyDSL/pull/1381) | [JIT] Key disk cache entries by the ROCm device bitcode and ... | @coderfeli | merged | 2026-11-06 | 2026-11-06 |
| [#1369](https://github.com/ROCm/FlyDSL/pull/1369) | [Windows] AOT export support for Windows x64 | @Phil-amd | merged | 2026-11-05 | 2026-11-06 |
| [#1338](https://github.com/ROCm/FlyDSL/pull/1338) | [JIT] Key compiled artifacts by the traced MLIR | @sjfeng1999 | merged | 2026-10-27 | 2026-11-05 |
| [#1370](https://github.com/ROCm/FlyDSL/pull/1370) | [Misc] Bump version to 0.5.0 | @coderfeli | merged | 2026-11-05 | 2026-11-05 |
| [#1365](https://github.com/ROCm/FlyDSL/pull/1365) | [Chore][Coop] Add specialization shortcut for primitives | @sjfeng1999 | merged | 2026-11-04 | 2026-11-05 |
| [#1352](https://github.com/ROCm/FlyDSL/pull/1352) | [Bugfix] Fix gfx1250 WMMAScale FP4/FP6 A/B register layout | @edjson | merged | 2026-10-30 | 2026-11-05 |
| [#1360](https://github.com/ROCm/FlyDSL/pull/1360) | [DSL] Reuse the AST rewrite when a kernel factory is built a... | @RElbers | merged | 2026-11-02 | 2026-11-05 |
| [#1366](https://github.com/ROCm/FlyDSL/pull/1366) | [Windows] Native build and ROCm JIT for Windows x64 | @Phil-amd | merged | 2026-11-04 | 2026-11-05 |
| [#1361](https://github.com/ROCm/FlyDSL/pull/1361) | [DSL] Speed up tracing by caching op source positions | @RElbers | merged | 2026-11-02 | 2026-11-05 |
| [#1364](https://github.com/ROCm/FlyDSL/pull/1364) | [ROCDL] Move unaccepted sched_* register hints to experiment... | @jli-melchior | merged | 2026-11-03 | 2026-11-04 |
| [#1362](https://github.com/ROCm/FlyDSL/pull/1362) | [Bugfix] Restore gfx1250-strict chipset parse and SMEM mappi... | @jli-melchior | merged | 2026-11-03 | 2026-11-03 |
| [#1348](https://github.com/ROCm/FlyDSL/pull/1348) | [Refactor] Organize GLM mono-kernel stages and shared tools | @james-huang09 | merged | 2026-10-29 | 2026-11-02 |
| [#1349](https://github.com/ROCm/FlyDSL/pull/1349) | [LLVM] Add gfx1250-strict , xnack- and sched_gpr/sched_bank ... | @jli-melchior | merged | 2026-10-30 | 2026-11-02 |
| [#1355](https://github.com/ROCm/FlyDSL/pull/1355) | [Misc] Publish FlyDSL skills as a Claude Code plugin | @fsx950223 | merged | 2026-10-30 | 2026-11-02 |
| [#1347](https://github.com/ROCm/FlyDSL/pull/1347) | [Feat] Support DslType protocol for Storage[T] | @sjfeng1999 | merged | 2026-10-29 | 2026-10-30 |
| [#1354](https://github.com/ROCm/FlyDSL/pull/1354) | [Misc] Bump version to 0.4.2 | @coderfeli | merged | 2026-10-30 | 2026-10-30 |
| [#1346](https://github.com/ROCm/FlyDSL/pull/1346) | [Kernel] Merge-back gfx950 two-stage MegaMoEV2 (A8W4/A4W4) f... | @Yaowu-Xiong | merged | 2026-10-29 | 2026-10-30 |
| [#1238](https://github.com/ROCm/FlyDSL/pull/1238) | Migrate kernels tiled tdm | @xudoyuan | merged | 2026-10-08 | 2026-10-30 |
| [#1336](https://github.com/ROCm/FlyDSL/pull/1336) | [DSL][Perf] Remove KTRACE's shared cursor and per-event atom... | @zhiding512 | merged | 2026-10-27 | 2026-10-30 |
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

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-11-11T15:41:57Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#794](https://github.com/ROCm/TransformerEngine/pull/794) | [HK] [gfx1250] BF16 and MXFP8 GEMM kernels for gfx1250 and g... | @alextmagro | open | 2026-11-06 | 2026-11-11 |
| [#777](https://github.com/ROCm/TransformerEngine/pull/777) | XCD work stealing improvements for HK Grouped GEMMs | @alextmagro | open | 2026-10-22 | 2026-11-11 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-11-11 |
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-11-11 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | open | 2026-08-31 | 2026-11-10 |
| [#797](https://github.com/ROCm/TransformerEngine/pull/797) | Veergopu/release v2.21 rocm | @VeeraRajasekhar | open | 2026-11-07 | 2026-11-10 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-11-10 |
| [#800](https://github.com/ROCm/TransformerEngine/pull/800) | Shrink the CI deps image from 9.8 to 5.9 GB and switch CI to... | @VeeraRajasekhar | open | 2026-11-10 | 2026-11-10 |
| [#778](https://github.com/ROCm/TransformerEngine/pull/778) | [gfx1250] TDM for MXFP8/FP8/MXFP4/NVFP4 quantization | @matthiasdiener | open | 2026-10-22 | 2026-11-10 |
| [#793](https://github.com/ROCm/TransformerEngine/pull/793) | CI: speed up wheel build with ccache | @leo-automation | open | 2026-11-05 | 2026-11-10 |
| [#796](https://github.com/ROCm/TransformerEngine/pull/796) | add warmup to hipblaslt tuning | @matthiasdiener | open | 2026-11-06 | 2026-11-10 |
| [#798](https://github.com/ROCm/TransformerEngine/pull/798) | [ROCm] Fix int32 overflow in the custom multi-tensor L2 norm | @Z-Y00 | open | 2026-11-09 | 2026-11-10 |
| [#799](https://github.com/ROCm/TransformerEngine/pull/799) | Run gfx1250 CI tests via rocjitsu | @matthiasdiener | open | 2026-11-09 | 2026-11-09 |
| [#766](https://github.com/ROCm/TransformerEngine/pull/766) | gfx1250: use hipblaslt device alpha for NVFP4 GEMM | @matthiasdiener | open | 2026-10-16 | 2026-11-09 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Integration of AITER a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-11-09 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-11-08 |
| [#792](https://github.com/ROCm/TransformerEngine/pull/792) | pin Triton RMSNorm/LayerNorm launch configs instead of autot... | @matthiasdiener | open | 2026-11-02 | 2026-11-07 |
| [#788](https://github.com/ROCm/TransformerEngine/pull/788) | [TE][HipKittens] Require K % 128 for blockwise FP8 GEMMs | @AllenFarcas | open | 2026-10-30 | 2026-11-06 |
| [#791](https://github.com/ROCm/TransformerEngine/pull/791) | Fix MoE permutation on gfx1250 w/ Triton 3.8, faster row_id_... | @matthiasdiener | open | 2026-11-02 | 2026-11-04 |
| [#789](https://github.com/ROCm/TransformerEngine/pull/789) | [gfx1250] TDM normalization | @matthiasdiener | draft | 2026-10-30 | 2026-11-03 |
| [#755](https://github.com/ROCm/TransformerEngine/pull/755) | [TE] CK fused attention: return max_logit | @AllenFarcas | open | 2026-10-07 | 2026-10-29 |
| [#746](https://github.com/ROCm/TransformerEngine/pull/746) | FlyDSL persistent work-stealing grouped GEMM enablement (gfx... | @aris134 | open | 2026-09-29 | 2026-10-28 |
| [#780](https://github.com/ROCm/TransformerEngine/pull/780) | Enforce using of source CI image | @ipanfilo | draft | 2026-10-24 | 2026-10-24 |
| [#770](https://github.com/ROCm/TransformerEngine/pull/770) | Dynamic WS sizing | @matthiasdiener | draft | 2026-10-20 | 2026-10-23 |
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
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-10-20 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-10-20 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-10-20 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-10-20 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-10-20 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-10-20 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-10-20 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-10-20 |
| [#705](https://github.com/ROCm/TransformerEngine/pull/705) | [proof-of-concept] Kernel autotuning in TE | @matthiasdiener | draft | 2026-08-18 | 2026-10-20 |
| [#759](https://github.com/ROCm/TransformerEngine/pull/759) | speed up multi-stream execution | @matthiasdiener | draft | 2026-10-13 | 2026-10-20 |
| [#762](https://github.com/ROCm/TransformerEngine/pull/762) | Ipanfilo/security scaning | @ipanfilo | draft | 2026-10-16 | 2026-10-16 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-10-16 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-10-16 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-10-16 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-10-16 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-10-16 |
| [#786](https://github.com/ROCm/TransformerEngine/pull/786) | [gfx1250] Add MXFP4 GEMM support to FlyDSL backend | @aris134 | merged | 2026-10-30 | 2026-11-11 |
| [#772](https://github.com/ROCm/TransformerEngine/pull/772) | split-K and LDS offset buffer for HipKittens GEMMs | @alextmagro | merged | 2026-10-20 | 2026-11-10 |
| [#795](https://github.com/ROCm/TransformerEngine/pull/795) | Backport ROCm 10.1 CI fixes | @ipanfilo | merged | 2026-11-06 | 2026-11-10 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | merged | 2026-08-07 | 2026-11-09 |
| [#776](https://github.com/ROCm/TransformerEngine/pull/776) | Fix examples | @matthiasdiener | merged | 2026-10-21 | 2026-11-07 |
| [#771](https://github.com/ROCm/TransformerEngine/pull/771) | Ifu dev 20261019 v2.21 | @VeeraRajasekhar | merged | 2026-10-20 | 2026-11-06 |
| [#783](https://github.com/ROCm/TransformerEngine/pull/783) | fix ck_tile/triton bf16 grouped GEMM performance | @matthiasdiener | merged | 2026-10-29 | 2026-11-05 |
| [#745](https://github.com/ROCm/TransformerEngine/pull/745) | extend MXFP4 recipe to GroupedLinear and a8w4 (Triton groupe... | @matthiasdiener | merged | 2026-09-28 | 2026-11-05 |
| [#784](https://github.com/ROCm/TransformerEngine/pull/784) | [TE] CK small-seq: fix the saved LSE layout and skip unsuppo... | @AllenFarcas | merged | 2026-10-29 | 2026-11-04 |
| [#785](https://github.com/ROCm/TransformerEngine/pull/785) | [TE] CK small-seq: fix index overflow, empty-KV sequences an... | @AllenFarcas | merged | 2026-10-30 | 2026-11-04 |
| [#760](https://github.com/ROCm/TransformerEngine/pull/760) | Release 2.20.2 | @Micky774 | merged | 2026-10-15 | 2026-11-04 |
| [#787](https://github.com/ROCm/TransformerEngine/pull/787) | [TE][CI] Use Dockerfile ROCm defaults in rocm-wheels-build | @AllenFarcas | merged | 2026-10-30 | 2026-11-02 |
| [#782](https://github.com/ROCm/TransformerEngine/pull/782) | Initial removal of AITER prebuilt mechanism | @Micky774 | merged | 2026-10-28 | 2026-11-02 |
| [#781](https://github.com/ROCm/TransformerEngine/pull/781) | Support gfx1250-strict | @ipanfilo | merged | 2026-10-27 | 2026-10-29 |
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
