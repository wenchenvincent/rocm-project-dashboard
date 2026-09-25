# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-09-25T13:03:55Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#193412](https://github.com/pytorch/pytorch/pull/193412) | [Test] Refactor test/functorch/test_ops.py and enable on XPU | @tszulist-hbn | draft | 2026-08-13 | 2026-09-25 |
| [#196907](https://github.com/pytorch/pytorch/pull/196907) | [ROCm] Fix torchcomms test harness to probe RCCL instead of ... | @chinmaydk99 | open | 2026-09-13 | 2026-09-25 |
| [#197362](https://github.com/pytorch/pytorch/pull/197362) | [ROCm][CI] Remove DIND for rocm CI | @amdfaa | open | 2026-09-17 | 2026-09-25 |
| [#198621](https://github.com/pytorch/pytorch/pull/198621) | [Inductor] Enable decompose_k by default on ROCm | @iupaikov-amd | draft | 2026-09-25 | 2026-09-25 |
| [#196720](https://github.com/pytorch/pytorch/pull/196720) | [Test] Enable test/profiler/test_trace_validator.py on XPU | @tszulist-hbn | draft | 2026-09-11 | 2026-09-25 |
| [#198631](https://github.com/pytorch/pytorch/pull/198631) | [ROCm] Revert Free rocFFT plans (#197425) | @zjliu-amd | open | 2026-09-25 | 2026-09-25 |
| [#197197](https://github.com/pytorch/pytorch/pull/197197) | [CPU] Reduce contiguous topk partial_sort working set | @WBurggraaf | open | 2026-09-16 | 2026-09-25 |
| [#198299](https://github.com/pytorch/pytorch/pull/198299) | [ROCm][test]Reuse device meshes across ComposabilityTest cas... | @chinmaydk99 | open | 2026-09-23 | 2026-09-25 |
| [#198301](https://github.com/pytorch/pytorch/pull/198301) | [ROCm]test] Reuse device meshes across FSDP2 ND-mesh subtest... | @chinmaydk99 | open | 2026-09-23 | 2026-09-25 |
| [#193168](https://github.com/pytorch/pytorch/pull/193168) | [FSDP] Stabilize fully_shard overlap timing test | @albmalamd | open | 2026-08-12 | 2026-09-25 |
| [#198302](https://github.com/pytorch/pytorch/pull/198302) | [ROCm][test] Reuse process groups across FSDP hybrid-shard s... | @chinmaydk99 | open | 2026-09-23 | 2026-09-25 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-09-25 |
| [#196920](https://github.com/pytorch/pytorch/pull/196920) | [ROCm] Always eagerly allocate hipBLAS(Lt) workspaces | @chinmaydk99 | open | 2026-09-13 | 2026-09-25 |
| [#198600](https://github.com/pytorch/pytorch/pull/198600) | [ROCm][Inductor][UT] Enable the FP8 scaled_mm swizzle v2 tes... | @jagadish-amd | draft | 2026-09-25 | 2026-09-25 |
| [#198619](https://github.com/pytorch/pytorch/pull/198619) | [ROCm] Exclude AOTriton from SM120 head-dim limits | @lstojilj-amd | draft | 2026-09-25 | 2026-09-25 |
| [#192524](https://github.com/pytorch/pytorch/pull/192524) | Enable NCCLSymmetricMemory (RCCL) symmetric-memory support o... | @abhilashKaturu | open | 2026-08-07 | 2026-09-25 |
| [#198237](https://github.com/pytorch/pytorch/pull/198237) | [CI] Update sccache to 0.18.0 | @Skylion007 | open | 2026-09-22 | 2026-09-25 |
| [#198516](https://github.com/pytorch/pytorch/pull/198516) | [ROCm] Enable AOTI unit test on ROCm | @rraminen | draft | 2026-09-24 | 2026-09-25 |
| [#196561](https://github.com/pytorch/pytorch/pull/196561) | [inductor] Preserve device TMA bookkeeping for reduction sto... | @hdhai | open | 2026-09-10 | 2026-09-25 |
| [#197422](https://github.com/pytorch/pytorch/pull/197422) | [ROCm] Fix get_rotating_buffer_size() docstring units | @lstojilj-amd | draft | 2026-09-17 | 2026-09-25 |
| [#198198](https://github.com/pytorch/pytorch/pull/198198) | [ROCm] Expose shared_memory_per_block_optin | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#194774](https://github.com/pytorch/pytorch/pull/194774) | [ROCm][c10d] Enable NCCL2 reconfigure on ROCm | @chinmaydk99 | draft | 2026-08-25 | 2026-09-25 |
| [#198195](https://github.com/pytorch/pytorch/pull/198195) | [Inductor][ROCm] Keep NVIDIA reduction thresholds off HIP | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#194791](https://github.com/pytorch/pytorch/pull/194791) | [Inductor] Add a Gluon template frontend, first used by flex... | @nithinsubbiah | open | 2026-08-25 | 2026-09-25 |
| [#194649](https://github.com/pytorch/pytorch/pull/194649) | [inductor] Make CUDA graph autotuning measurements consisten... | @mlazos | open | 2026-08-24 | 2026-09-25 |
| [#195023](https://github.com/pytorch/pytorch/pull/195023) | [ROCm] Remove -amdgpu-early-inline-all / -amdgpu-function-ca... | @skc7 | open | 2026-08-27 | 2026-09-25 |
| [#198194](https://github.com/pytorch/pytorch/pull/198194) | [Inductor][ROCm] Restrict scaled-MM filtering to gfx950 | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#198196](https://github.com/pytorch/pytorch/pull/198196) | [ROCm] Clamp nearest2d backward launch grid | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#197553](https://github.com/pytorch/pytorch/pull/197553) | [ROCm] Return power_draw in milliwatts | @lstojilj-amd | draft | 2026-09-18 | 2026-09-25 |
| [#198349](https://github.com/pytorch/pytorch/pull/198349) | [Inductor][ROCm] Keep NVIDIA communication model off HIP | @lstojilj-amd | draft | 2026-09-23 | 2026-09-25 |
| [#185466](https://github.com/pytorch/pytorch/pull/185466) | [dynamo] Show carets in graph break user stacks | @jansel | open | 2026-05-28 | 2026-09-25 |
| [#198588](https://github.com/pytorch/pytorch/pull/198588) | [ROCm][Inductor][UT] Enable the remaining FP8 scaled_mm v2 t... | @jagadish-amd | open | 2026-09-25 | 2026-09-25 |
| [#198483](https://github.com/pytorch/pytorch/pull/198483) | [Inductor][ROCm] Add W7900 device information | @lstojilj-amd | draft | 2026-09-24 | 2026-09-25 |
| [#198202](https://github.com/pytorch/pytorch/pull/198202) | [ROCm] Read maximum clock rate from HIP | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#198199](https://github.com/pytorch/pytorch/pull/198199) | [Inductor][ROCm] Fall back for BF16 atomic accumulation | @lstojilj-amd | draft | 2026-09-22 | 2026-09-25 |
| [#197576](https://github.com/pytorch/pytorch/pull/197576) | [ROCm][ciflow/rocm-preview] Update rocm preview wheel | @chinmaydk99 | draft | 2026-09-18 | 2026-09-25 |
| [#187897](https://github.com/pytorch/pytorch/pull/187897) | fix: Add explicit null-buffer guards and shared-memory fallb... | @bobbyshop-vui | open | 2026-06-23 | 2026-09-25 |
| [#190529](https://github.com/pytorch/pytorch/pull/190529) | [cuda] Rewrite _weight_int8pack_mm CUDA kernel as a coalesce... | @dumko2001 | open | 2026-07-20 | 2026-09-25 |
| [#198291](https://github.com/pytorch/pytorch/pull/198291) | [ROCm][Inductor][UT] Enable FP8 tensorwise scaled_mm tests b... | @jagadish-amd | closed | 2026-09-22 | 2026-09-25 |
| [#198221](https://github.com/pytorch/pytorch/pull/198221) | [ROCm] Honor depthwise_kernel="native" where the native kern... | @pablo-garay | closed | 2026-09-22 | 2026-09-25 |
| [#198565](https://github.com/pytorch/pytorch/pull/198565) | [ATen][ROCm] zero_: keep the memset fast path outside graph ... | @yingjizhang | closed | 2026-09-24 | 2026-09-25 |
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
Repo: `jax-ml/jax` | Last collected: 2026-09-25T13:04:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#40972](https://github.com/jax-ml/jax/pull/40972) | [ROCm] Enable build on rocm rbe and switch to dpx runners | @alekstheod | draft | 2026-09-25 | 2026-09-25 |
| [#40859](https://github.com/jax-ml/jax/pull/40859) | [ROCm] Build with the pinned ROCm, not rules_ml_toolchain's ... | @gulsumgudukbay | merged | 2026-09-22 | 2026-09-23 |
| [#40877](https://github.com/jax-ml/jax/pull/40877) | [ROCM] Added gfx1250 and gfx1250-strict targets | @zahiqbal | open | 2026-09-22 | 2026-09-22 |
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
| [#39634](https://github.com/jax-ml/jax/pull/39634) | [ROCm] Find ROCm plugin packages by major version | @gulsumgudukbay | merged | 2026-07-31 | 2026-07-31 |
| [#38810](https://github.com/jax-ml/jax/pull/38810) | [ROCm] Add TheRock 7.14.0/latest coverage to CI workflows | @mminutoli | merged | 2026-06-26 | 2026-07-31 |
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
Repo: `vllm-project/vllm` | Last collected: 2026-09-25T13:04:11Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#58584](https://github.com/vllm-project/vllm/pull/58584) | [ROCm][Perf][GLM-5.3-Flash] BF16 splitk kernel for sparse ML... | @simondanielsson | draft | 2026-09-24 | 2026-09-25 |
| [#54117](https://github.com/vllm-project/vllm/pull/54117) | [1/2] [Parser] Add vllm:tool_calls_completed_total classifie... | @ashraf-bhuiyan | open | 2026-08-27 | 2026-09-25 |
| [#55254](https://github.com/vllm-project/vllm/pull/55254) | [Parser][2/2] Record completed tool calls from ParserEngine | @ashraf-bhuiyan | open | 2026-09-03 | 2026-09-25 |
| [#54951](https://github.com/vllm-project/vllm/pull/54951) | [Perf][GLM-5.3-Flash] Shard long-context indexer prefill row... | @zigzagcai | open | 2026-09-02 | 2026-09-25 |
| [#58709](https://github.com/vllm-project/vllm/pull/58709) | [Bugfix][Structured Output] Preserve literal values in Guida... | @abhayjoshi201 | open | 2026-09-25 | 2026-09-25 |
| [#57992](https://github.com/vllm-project/vllm/pull/57992) | [Bugfix][MLA] Scope DSpark non-causal capability to builder ... | @xaguilar-amd | open | 2026-09-21 | 2026-09-25 |
| [#58366](https://github.com/vllm-project/vllm/pull/58366) | [ROCm][DSv4.1][Perf] Use FlyDSL mfma_r4_w4 for gfx942 indexe... | @frida-andersson | open | 2026-09-23 | 2026-09-25 |
| [#58708](https://github.com/vllm-project/vllm/pull/58708) | [CI] Shard (L4) Hybrid SSM NixlConnector PD accuracy into pe... | @Thangnguyenvn98 | open | 2026-09-25 | 2026-09-25 |
| [#58707](https://github.com/vllm-project/vllm/pull/58707) | [CI] Cap CPU threads for (H200 MIG 18GB) Multimodal Processo... | @Thangnguyenvn98 | open | 2026-09-25 | 2026-09-25 |
| [#56362](https://github.com/vllm-project/vllm/pull/56362) | [Qwen4Exp] Pass raw bytes to the PLE UVA lookup kernel for F... | @0ut5ider | open | 2026-09-11 | 2026-09-25 |
| [#55368](https://github.com/vllm-project/vllm/pull/55368) | [ROCm][MoE] Pad the AITER MoE intermediate size at allocatio... | @sshlyapn | open | 2026-09-04 | 2026-09-25 |
| [#57108](https://github.com/vllm-project/vllm/pull/57108) | [Bugfix][ModelLoader] Make enable_weights_track check quanti... | @siliangchen-amd | open | 2026-09-16 | 2026-09-25 |
| [#56372](https://github.com/vllm-project/vllm/pull/56372) | [Bugfix][Multimodal] Fix flat/scoped mm_processor_kwargs mer... | @danigarciaoca | open | 2026-09-11 | 2026-09-25 |
| [#51560](https://github.com/vllm-project/vllm/pull/51560) | [Bugfix][Model] Fail fast on Inkling's unsupported GPU archi... | @m4xkushnir | open | 2026-08-09 | 2026-09-25 |
| [#56740](https://github.com/vllm-project/vllm/pull/56740) | [quantization] Add per-token NVFP4 quantization MoE support ... | @xuantengh | open | 2026-09-14 | 2026-09-25 |
| [#58706](https://github.com/vllm-project/vllm/pull/58706) | [ROCm][Perf] Fuse the HyperConnection low-rank mix at decode... | @mjkvaak-amd | draft | 2026-09-25 | 2026-09-25 |
| [#58016](https://github.com/vllm-project/vllm/pull/58016) | [Perf][Model Loader] Skip checkpoint tensors a model does no... | @Peuqui | open | 2026-09-21 | 2026-09-25 |
| [#51994](https://github.com/vllm-project/vllm/pull/51994) | [Bugfix][Model] Fix DiffusionGemma silently freezing attenti... | @fjosw | open | 2026-08-12 | 2026-09-25 |
| [#58152](https://github.com/vllm-project/vllm/pull/58152) | [Rocm][Bugfix][Quantization] Auto-enable EP for Qwen3.8-Flas... | @haic0 | open | 2026-09-22 | 2026-09-25 |
| [#54769](https://github.com/vllm-project/vllm/pull/54769) | [Misc] Emit OpenTelemetry JSON logs via VLLM_LOGGING_FORMAT | @den-rgb | open | 2026-09-01 | 2026-09-25 |
| [#57599](https://github.com/vllm-project/vllm/pull/57599) | [ROCm][CI] Expand single-GPU coverage on MI355 DPX | @sheralskumar | open | 2026-09-18 | 2026-09-25 |
| [#57387](https://github.com/vllm-project/vllm/pull/57387) | [Model] Use upstream GLM-5.3 and Qwen4-Exp configs and proce... | @hmellor | open | 2026-09-17 | 2026-09-25 |
| [#58524](https://github.com/vllm-project/vllm/pull/58524) | [Bugfix] Cover off-grid cudagraph capture sizes under an exp... | @MirkoDeVita98 | open | 2026-09-24 | 2026-09-25 |
| [#53970](https://github.com/vllm-project/vllm/pull/53970) | [BUGFIX] Fix dflash batched token budget | @Orvid | open | 2026-08-27 | 2026-09-25 |
| [#57560](https://github.com/vllm-project/vllm/pull/57560) | [ROCm][Perf] Add AITER FlyDSL GDN prefill backend | @mjkvaak-amd | open | 2026-09-18 | 2026-09-25 |
| [#58454](https://github.com/vllm-project/vllm/pull/58454) | [Bugfix][GLM-5.3-Flash] kpool corruption with speculative de... | @mmastrac | open | 2026-09-23 | 2026-09-25 |
| [#58046](https://github.com/vllm-project/vllm/pull/58046) | [Mypy] Fix mypy typing for Qwen and Qianfan models | @ashraf-bhuiyan | open | 2026-09-22 | 2026-09-25 |
| [#50535](https://github.com/vllm-project/vllm/pull/50535) | [ROCm][Perf] Use AITER tuned GEMM for the MoE router gate | @amd-sriram | open | 2026-07-31 | 2026-09-25 |
| [#51315](https://github.com/vllm-project/vllm/pull/51315) | [ROCm][Perf] Fuse the DSA indexer prologue with AITER | @amd-sriram | open | 2026-08-06 | 2026-09-25 |
| [#58703](https://github.com/vllm-project/vllm/pull/58703) | [Platform] Add supports_v2_model_runner capability for out-o... | @Dashener2 | open | 2026-09-25 | 2026-09-25 |
| [#58008](https://github.com/vllm-project/vllm/pull/58008) | [ROCm][Perf][GLM-5.3-Flash] "Fit kpool top-k indices to AITE... | @simondanielsson | open | 2026-09-21 | 2026-09-25 |
| [#54956](https://github.com/vllm-project/vllm/pull/54956) | [ROCm][Perf] Kimi-K3 Enable sharded latent MoE up-projection... | @xaguilar-amd | open | 2026-09-02 | 2026-09-25 |
| [#57407](https://github.com/vllm-project/vllm/pull/57407) | [ROCm][Perf] Enable layer-aware CSA2 multi-stream overlap fo... | @shen-shanshan | open | 2026-09-17 | 2026-09-25 |
| [#58702](https://github.com/vllm-project/vllm/pull/58702) | [Docs] Document DP-aware routing with vLLM Router in the DP ... | @Dashener2 | open | 2026-09-25 | 2026-09-25 |
| [#51406](https://github.com/vllm-project/vllm/pull/51406) | [ROCm] Enable fused QK-norm+RoPE+gate Triton kernel for Qwen... | @xuebwang-amd | open | 2026-08-07 | 2026-09-25 |
| [#57531](https://github.com/vllm-project/vllm/pull/57531) | [MM][Mistral3] Image preprocessing optimization | @jzakrzew | open | 2026-09-18 | 2026-09-25 |
| [#54835](https://github.com/vllm-project/vllm/pull/54835) | [Bugfix][Frontend] Apply model-default reasoning parser in G... | @shimib | open | 2026-09-01 | 2026-09-25 |
| [#58700](https://github.com/vllm-project/vllm/pull/58700) | [Bugfix] Mark tool_result is_error in Anthropic converter | @Dazzanova | open | 2026-09-25 | 2026-09-25 |
| [#58689](https://github.com/vllm-project/vllm/pull/58689) |  [ROCm][DSv4.1] Disambiguate ROCm attention class names | @tuukkjs | open | 2026-09-25 | 2026-09-25 |
| [#58698](https://github.com/vllm-project/vllm/pull/58698) | [ROCm][CI] Pass weight_shape in MXFP8 block32 linear tests | @djramic | merged | 2026-09-25 | 2026-09-25 |
| [#57205](https://github.com/vllm-project/vllm/pull/57205) | [Core] Model console logging as CLI configuration | @markmc | merged | 2026-09-16 | 2026-09-25 |
| [#57238](https://github.com/vllm-project/vllm/pull/57238) | [CI] Split (H100) V1 Attention into Sparse MLA, MLA Backends... | @Thangnguyenvn98 | open | 2026-09-16 | 2026-09-25 |
| [#56890](https://github.com/vllm-project/vllm/pull/56890) | [CI] Split (H200 MIG 35GB / MI300) Model Executor into four ... | @Thangnguyenvn98 | open | 2026-09-14 | 2026-09-25 |
| [#58464](https://github.com/vllm-project/vllm/pull/58464) | [CI] Shard (L4) Pipeline Parallelism tests into named jobs | @Thangnguyenvn98 | open | 2026-09-23 | 2026-09-25 |
| [#58608](https://github.com/vllm-project/vllm/pull/58608) | [CI] Replace (B200) Miscellaneous Kernels --ignore filters w... | @Thangnguyenvn98 | open | 2026-09-24 | 2026-09-25 |
| [#57063](https://github.com/vllm-project/vllm/pull/57063) | [CI] Split (B200) V1 Attention into Sparse MLA, MLA, DCP, De... | @Thangnguyenvn98 | open | 2026-09-15 | 2026-09-25 |
| [#58451](https://github.com/vllm-project/vllm/pull/58451) | [CI] Shard (H200 MIG 35GB) PyTorch Compilation + (MI300) mir... | @Thangnguyenvn98 | open | 2026-09-23 | 2026-09-25 |
| [#58645](https://github.com/vllm-project/vllm/pull/58645) | [CI] Shard (H100) Helion Kernels five ways | @Thangnguyenvn98 | merged | 2026-09-25 | 2026-09-25 |
| [#58439](https://github.com/vllm-project/vllm/pull/58439) | [Qwen4Exp] Checkpoint-mapped PLE storage for unified-memory ... | @jschmied | open | 2026-09-23 | 2026-09-25 |
| [#57705](https://github.com/vllm-project/vllm/pull/57705) | [Bugfix][KVConnector] Fix MoRI-IO WRITE-mode requests strand... | @akshayv | open | 2026-09-19 | 2026-09-25 |
| [#49126](https://github.com/vllm-project/vllm/pull/49126) | [Kernel] Avoid materializing FP32 rotary Q/K tensors | @guoriyue | draft | 2026-07-19 | 2026-09-25 |
| [#52639](https://github.com/vllm-project/vllm/pull/52639) | [ROCm][MoRI][BugFix] Fix combine() using dispatched topk_ids... | @amd-weisun | open | 2026-08-17 | 2026-09-25 |
| [#57947](https://github.com/vllm-project/vllm/pull/57947) | [ROCm][Perf] Reach the fused QSA pre-indexer from the AMD pa... | @mjkvaak-amd | open | 2026-09-21 | 2026-09-25 |
| [#56328](https://github.com/vllm-project/vllm/pull/56328) | [ROCm] Fix gfx1151 DeepSeek-V4 paged-MQA CUDAGraph capture a... | @keneoneth | draft | 2026-09-10 | 2026-09-25 |
| [#58569](https://github.com/vllm-project/vllm/pull/58569) | [ROCm][Perf][GLM-5.3-Flash] Remove redundant copy after ragg... | @simondanielsson | open | 2026-09-24 | 2026-09-25 |
| [#58691](https://github.com/vllm-project/vllm/pull/58691) | [CI][ROCm] Mirror split V1 attention groups on MI355 | @AndreasKaratzas | draft | 2026-09-25 | 2026-09-25 |
| [#57744](https://github.com/vllm-project/vllm/pull/57744) | [ROCm][Build] Filter crate tags from vLLM version detection | @reidliu41 | merged | 2026-09-20 | 2026-09-25 |
| [#57909](https://github.com/vllm-project/vllm/pull/57909) | [ROCm][PERF] Enable MiniMax-M3 Indexer CP | @ukannika | open | 2026-09-21 | 2026-09-25 |
| [#58621](https://github.com/vllm-project/vllm/pull/58621) | [Perf][DSv4] Fuse inverse RoPE + FP8 quant into FlashInfer s... | @zyongye | merged | 2026-09-24 | 2026-09-25 |
| [#55528](https://github.com/vllm-project/vllm/pull/55528) | [Bugfix][KV Cache][MLA] Align packed block strides for V3.2 ... | @200lz | merged | 2026-09-06 | 2026-09-25 |
| [#58336](https://github.com/vllm-project/vllm/pull/58336) | [Bugfix] Stop leaking the internal field name in the max_tok... | @shallow10 | merged | 2026-09-23 | 2026-09-25 |
| [#58659](https://github.com/vllm-project/vllm/pull/58659) | [ROCm] Credit ROCm/aiter for the block32 GEMM's packed kerne... | @valarLip | merged | 2026-09-25 | 2026-09-25 |
| [#57497](https://github.com/vllm-project/vllm/pull/57497) | [Qwen4Exp][ROCm] PLE n-gram table CPU offload | @mrodden | merged | 2026-09-18 | 2026-09-25 |
| [#58607](https://github.com/vllm-project/vllm/pull/58607) | [CI][ROCm] Prevent Model Executor apt stalls | @AndreasKaratzas | merged | 2026-09-24 | 2026-09-25 |
| [#58244](https://github.com/vllm-project/vllm/pull/58244) | [ROCm] Fix CI runtime and tests for MI355 DPX | @mkunredd | merged | 2026-09-23 | 2026-09-25 |
| [#43048](https://github.com/vllm-project/vllm/pull/43048) | [Feature] Triton kernel dispatcher | @wangxiyuan | merged | 2026-05-19 | 2026-09-25 |
| [#58510](https://github.com/vllm-project/vllm/pull/58510) | [ROCm][Perf] MXFP8 GEMM on native 32x32 block scales for gfx... | @Fangzhou-Ai | merged | 2026-09-24 | 2026-09-25 |
| [#55072](https://github.com/vllm-project/vllm/pull/55072) | [Perf][Distributed] Add low-SM multimem reduce-scatter for S... | @zyongye | merged | 2026-09-03 | 2026-09-25 |
| [#57979](https://github.com/vllm-project/vllm/pull/57979) | [ROCm][Perf][GLM-5.3-Flash] Stride-aware decode KDA | @simondanielsson | open | 2026-09-21 | 2026-09-25 |
| [#58566](https://github.com/vllm-project/vllm/pull/58566) | [ROCm] Cut 69 wasted contiguous copies per decode step from ... | @fululi12 | merged | 2026-09-24 | 2026-09-25 |
| [#54223](https://github.com/vllm-project/vllm/pull/54223) | [Bugfix][Quantization] Fix MXFP8 startup crash on layers bel... | @samuelkim7 | merged | 2026-08-28 | 2026-09-25 |
| [#56926](https://github.com/vllm-project/vllm/pull/56926) | [Perf][Engram] Serialize offloaded lookups and pack host tab... | @Juntian777 | merged | 2026-09-15 | 2026-09-25 |
| [#58489](https://github.com/vllm-project/vllm/pull/58489) | [Bugfix][Qwen4Exp] Keep pinned PLE prefetch ids out of the C... | @Juntian777 | merged | 2026-09-24 | 2026-09-25 |
| [#58646](https://github.com/vllm-project/vllm/pull/58646) | [Skills] Update kernel-microbenchmark to include ROCm | @gau-nernst | open | 2026-09-25 | 2026-09-25 |
| [#58546](https://github.com/vllm-project/vllm/pull/58546) | [Perf][MoE] Tile pack_bitmatrix by 32 rows instead of 512 | @ZhengGong-amd | open | 2026-09-24 | 2026-09-25 |
| [#55102](https://github.com/vllm-project/vllm/pull/55102) | [gRPC] Fix ping tolerance so long non-streaming RPCs are not... | @gongwei-130 | merged | 2026-09-03 | 2026-09-25 |
| [#58393](https://github.com/vllm-project/vllm/pull/58393) | [ROCm][CI][AITER Coverage] Harden MoE sorting-backend/dispat... | @divakar-amd | merged | 2026-09-23 | 2026-09-25 |
| [#56020](https://github.com/vllm-project/vllm/pull/56020) | [Bugfix][LogitsProcessor] Validate ':' separator in custom l... | @100milliongold | merged | 2026-09-09 | 2026-09-25 |
| [#54296](https://github.com/vllm-project/vllm/pull/54296) | [Bugfix] Guard slot mapping block table loads | @frank-suwen | open | 2026-08-29 | 2026-09-25 |
| [#57679](https://github.com/vllm-project/vllm/pull/57679) | [Perf][DSv4.1] Restore the fused query RMSNorm + MXFP8 quant... | @Juntian777 | merged | 2026-09-19 | 2026-09-25 |
| [#57954](https://github.com/vllm-project/vllm/pull/57954) | [Bugfix][Quantization] Refresh online NVFP4 scales before re... | @S1ro1 | merged | 2026-09-21 | 2026-09-25 |
| [#58526](https://github.com/vllm-project/vllm/pull/58526) | [Minimax-M3][Perf] Use triton_mrope for vision tower + int64... | @gau-nernst | merged | 2026-09-24 | 2026-09-25 |
| [#58527](https://github.com/vllm-project/vllm/pull/58527) | [Kimi-K3][Perf] Dispatch GEMM for vision patch embedder | @gau-nernst | merged | 2026-09-24 | 2026-09-25 |
| [#58045](https://github.com/vllm-project/vllm/pull/58045) | [ROCm][Kimi-K3] Optimize low-concurrency speculative KDA | @jiacao-amd | open | 2026-09-22 | 2026-09-25 |
| [#57743](https://github.com/vllm-project/vllm/pull/57743) | [Bugfix] Accept EOS after grammar finish in outlines backend... | @SIDDARTHAREDDY8 | merged | 2026-09-20 | 2026-09-25 |
| [#55270](https://github.com/vllm-project/vllm/pull/55270) | [Bugfix] GLM-5.3-Flash: launch the kpool paged MQA logits in... | @ivanium | merged | 2026-09-04 | 2026-09-25 |
| [#58626](https://github.com/vllm-project/vllm/pull/58626) | [Bugfix][Frontend] Count reasoning tokens for Harmony, DeepS... | @sammaji | merged | 2026-09-24 | 2026-09-25 |
| [#58582](https://github.com/vllm-project/vllm/pull/58582) | [Perf] Parallelize registered CUDA Triton kernel warmup at s... | @mgoin | merged | 2026-09-24 | 2026-09-24 |
| [#58558](https://github.com/vllm-project/vllm/pull/58558) | [ROCm][CI] Mirror the DSv4-Flash disaggregated DP EP group o... | @stefankoncarevic | merged | 2026-09-24 | 2026-09-24 |
| [#58288](https://github.com/vllm-project/vllm/pull/58288) | [Bugfix][Core] Keep every multimodal feature in the partial-... | @haosenwang1018 | merged | 2026-09-23 | 2026-09-24 |
| [#52245](https://github.com/vllm-project/vllm/pull/52245) | [PD][PushConnector] Record last activity of remotes on the D... | @snadampal | merged | 2026-08-14 | 2026-09-24 |
| [#57199](https://github.com/vllm-project/vllm/pull/57199) | [ROCm][Perf] W4A16: speed up skinny GEMM decode, including s... | @roberteg16 | draft | 2026-09-16 | 2026-09-24 |
| [#57982](https://github.com/vllm-project/vllm/pull/57982) | [Bugfix] Don't drop the rest of the allocator config when to... | @okorzh-amd | open | 2026-09-21 | 2026-09-24 |
| [#58628](https://github.com/vllm-project/vllm/pull/58628) | [CI] Report to CRCR after all jobs finish, gated on the buil... | @atalman | merged | 2026-09-24 | 2026-09-24 |
| [#51694](https://github.com/vllm-project/vllm/pull/51694) | [Bugfix][KV Cache] Fix incremental multimodal block hashing | @CZT0 | merged | 2026-08-10 | 2026-09-24 |
| [#57632](https://github.com/vllm-project/vllm/pull/57632) | [DFlash] Capture the context K/V precompute in the draft CUD... | @Juntian777 | merged | 2026-09-18 | 2026-09-24 |
| [#55230](https://github.com/vllm-project/vllm/pull/55230) | [ROCm] Fuse decode rope + MLA KV-cache write + fp8 query ass... | @eky-amd | draft | 2026-09-03 | 2026-09-24 |
| [#57453](https://github.com/vllm-project/vllm/pull/57453) | [Bugfix][KV Offload] Retain offload event metadata through b... | @karya0 | merged | 2026-09-17 | 2026-09-24 |
| [#58535](https://github.com/vllm-project/vllm/pull/58535) | [ROCm][CI] skip the ROCm MRV1 default where MRV1 cannot serv... | @stefankoncarevic | merged | 2026-09-24 | 2026-09-24 |
| [#51681](https://github.com/vllm-project/vllm/pull/51681) | [ROCm] Fix misrouting race-condition in multi-decode P/D dis... | @vcave | merged | 2026-08-10 | 2026-09-24 |
| [#53987](https://github.com/vllm-project/vllm/pull/53987) | [Spec Decode][ROCm] Add FLy: entropy-gated deferred verifica... | @eecspan | open | 2026-08-27 | 2026-09-24 |
| [#56301](https://github.com/vllm-project/vllm/pull/56301) | [ROCm][Perf] W4A16: pad gfx11 weight and activation strides | @mgehre-amd | open | 2026-09-10 | 2026-09-24 |
| [#54061](https://github.com/vllm-project/vllm/pull/54061) | [Profiler][GPU] Extend CUDA graph capture profiling to the V... | @devalshahamd | open | 2026-08-27 | 2026-09-24 |
| [#39168](https://github.com/vllm-project/vllm/pull/39168) | [ROCm] Fixing GLM-5.1, DeepSeek-V3.2, DeepSeek-V4 on gfx942 ... | @ekuznetsov139 | open | 2026-04-07 | 2026-09-24 |
| [#58456](https://github.com/vllm-project/vllm/pull/58456) | [ROCm][DSv4.1][Perf] Emit MXFP8 from the sparse decode reduc... | @Fangzhou-Ai | merged | 2026-09-23 | 2026-09-24 |
| [#45819](https://github.com/vllm-project/vllm/pull/45819) | [Feature] Add batch invariance support to GDN_ATTN backend | @yuvalluria | open | 2026-06-16 | 2026-09-24 |
| [#56995](https://github.com/vllm-project/vllm/pull/56995) | [Bugfix][Spec Decode] Implement get_top_tokens() on the gene... | @ZhengGong-amd | draft | 2026-09-15 | 2026-09-24 |
| [#58167](https://github.com/vllm-project/vllm/pull/58167) | [ROCm][Perf][GLM-5.3-Flash] Add AITER topk backend for decod... | @simondanielsson | open | 2026-09-22 | 2026-09-24 |
| [#43907](https://github.com/vllm-project/vllm/pull/43907) | [ROCm][Perf] DSv3.2: fuse indexer Q-RoPE+quant + K-norm/RoPE... | @frida-andersson | open | 2026-05-28 | 2026-09-24 |
| [#56789](https://github.com/vllm-project/vllm/pull/56789) | [ROCm][Perf] Tiny-dot kernel for the Qwen MoE shared-expert ... | @roberteg16 | draft | 2026-09-14 | 2026-09-24 |
| [#56307](https://github.com/vllm-project/vllm/pull/56307) | [ROCm][Kernel] Fused gated delta net prefill for RDNA3.5 | @roberteg16 | draft | 2026-09-10 | 2026-09-24 |
| [#57942](https://github.com/vllm-project/vllm/pull/57942) | [ROCm] Dspark MLA module | @gronsti-amd | draft | 2026-09-21 | 2026-09-24 |
| [#58432](https://github.com/vllm-project/vllm/pull/58432) | [ROCm][CI] Add the MI355 TurboQuant t3nc mirror | @AndreasKaratzas | merged | 2026-09-23 | 2026-09-24 |
| [#55860](https://github.com/vllm-project/vllm/pull/55860) | [ROCm] Let aiter's tuned decode GEMM win over the skinny ker... | @vedenev-amd | open | 2026-09-08 | 2026-09-24 |
| [#58069](https://github.com/vllm-project/vllm/pull/58069) | [Dependency] Upgrade FlashInfer version to 0.7.0 | @wzhao18 | merged | 2026-09-22 | 2026-09-24 |
| [#52988](https://github.com/vllm-project/vllm/pull/52988) | [Spec decode] Support variable-length decode for Kimi-K3 ada... | @qiching | merged | 2026-08-19 | 2026-09-24 |
| [#54440](https://github.com/vllm-project/vllm/pull/54440) | [ROCm] Rank ROCM_ATTN by whether its custom kernel applies o... | @cadamcat | open | 2026-08-30 | 2026-09-24 |
| [#54988](https://github.com/vllm-project/vllm/pull/54988) | [ROCm] Give turboquant boundary layers a layout-compatible b... | @stefankoncarevic | merged | 2026-09-02 | 2026-09-24 |
| [#57075](https://github.com/vllm-project/vllm/pull/57075) | [PCP] Support prefill context parallelism with data parallel... | @LucasWilkinson | merged | 2026-09-15 | 2026-09-24 |
| [#57478](https://github.com/vllm-project/vllm/pull/57478) | [ROCm][DSv4.1][Perf] Fused router gate for gfx950 | @Fangzhou-Ai | open | 2026-09-18 | 2026-09-24 |
| [#58369](https://github.com/vllm-project/vllm/pull/58369) | [CI][ROCM] Add the Fusion E2E TP2 Quick group on MI355, and ... | @stefankoncarevic | merged | 2026-09-23 | 2026-09-24 |
| [#57602](https://github.com/vllm-project/vllm/pull/57602) | [ROCm] Enable Hisparse on ROCm : Sparse MLA Hot-Buffering | @afriedri | draft | 2026-09-18 | 2026-09-24 |
| [#58465](https://github.com/vllm-project/vllm/pull/58465) | [CI][Bugfix] Limit MRV2 sampler JIT warmup registration to R... | @khluu | merged | 2026-09-23 | 2026-09-23 |
| [#58419](https://github.com/vllm-project/vllm/pull/58419) | [ROCm][Bugfix] Fix TileLang mHC fused RMSNorm on 64-wide wav... | @djramic | merged | 2026-09-23 | 2026-09-23 |
| [#58093](https://github.com/vllm-project/vllm/pull/58093) | [ROCm][Test] Cover MoRI graph replay and output lifetime | @AndreasKaratzas | merged | 2026-09-22 | 2026-09-23 |
| [#52391](https://github.com/vllm-project/vllm/pull/52391) | [Feature][ROCm] Enable gfx1030 (RDNA2) as a recognized RDNA ... | @BlivionIaG | open | 2026-08-14 | 2026-09-23 |
| [#57586](https://github.com/vllm-project/vllm/pull/57586) | [Perf] Use breakable CUDA graphs (no torch.compile) by defau... | @LioEinaudi | merged | 2026-09-18 | 2026-09-23 |
| [#57282](https://github.com/vllm-project/vllm/pull/57282) | [ROCm] Add head-fused HIP sparse MLA decode kernel for gfx95... | @nehaprakriya | open | 2026-09-17 | 2026-09-23 |
| [#58095](https://github.com/vllm-project/vllm/pull/58095) | [ROCm][CI] Validate Mooncake and NIXL prefill/decode accurac... | @AndreasKaratzas | merged | 2026-09-22 | 2026-09-23 |
| [#50212](https://github.com/vllm-project/vllm/pull/50212) | [ROCm][Perf] Extend QK-norm/RoPE/KV-cache fusion to MRoPE | @vorapolsiloai | merged | 2026-07-29 | 2026-09-23 |
| [#55721](https://github.com/vllm-project/vllm/pull/55721) | [XPU] Wire up SYCL apply_rotary_emb kernel in ApplyRotaryEmb | @mganczarenko | merged | 2026-09-07 | 2026-09-23 |
| [#53283](https://github.com/vllm-project/vllm/pull/53283) | [ROCm][Perf] Use wvSplitK for single-output GEMMs | @tangzzycc | merged | 2026-08-21 | 2026-09-23 |
| [#52052](https://github.com/vllm-project/vllm/pull/52052) | [ROCm] Use silu_and_mul_with_clamp's torch._C op | @tpopp | merged | 2026-08-12 | 2026-09-22 |
| [#57435](https://github.com/vllm-project/vllm/pull/57435) | [ROCm][DSv4.1][Perf] Fuse the inverse RoPE into the sparse d... | @Fangzhou-Ai | merged | 2026-09-17 | 2026-09-22 |
| [#58136](https://github.com/vllm-project/vllm/pull/58136) | [Bugfix][ROCm] Dispatch the QuantFP8 CUDA fallback on the cl... | @stefankoncarevic | merged | 2026-09-22 | 2026-09-22 |
| [#47842](https://github.com/vllm-project/vllm/pull/47842) | [ROCm][Perf] Avoid extra reshape kernel in Qwen GDN output n... | @mjkvaak-amd | merged | 2026-07-07 | 2026-09-22 |
| [#50592](https://github.com/vllm-project/vllm/pull/50592) | [Kimi-K3][AMD] Return KDA and MLA projection outputs directl... | @LiuYinfeng01 | merged | 2026-07-31 | 2026-09-22 |
| [#52362](https://github.com/vllm-project/vllm/pull/52362) | [ROCm][DSv4] Enable DSpark adaptive verification | @tuukkjs | merged | 2026-08-14 | 2026-09-21 |
| [#57906](https://github.com/vllm-project/vllm/pull/57906) | [Bugfix][ROCm][DSv4.1] Disable SWA bounded replay on ROCm | @Fangzhou-Ai | merged | 2026-09-21 | 2026-09-21 |
| [#57864](https://github.com/vllm-project/vllm/pull/57864) | [ROCm][Tests] Avoid pooling cleanup waits against live share... | @AndreasKaratzas | merged | 2026-09-21 | 2026-09-21 |
| [#57450](https://github.com/vllm-project/vllm/pull/57450) | [ROCm][CI] Query HIP device memory for test GPU teardown wai... | @sheralskumar | merged | 2026-09-17 | 2026-09-20 |
| [#54894](https://github.com/vllm-project/vllm/pull/54894) | [ROCm][DSV4][Perf] Use FP8 WO_A output projection | @LiuYinfeng01 | merged | 2026-09-02 | 2026-09-20 |
| [#57434](https://github.com/vllm-project/vllm/pull/57434) | [ROCm][DSv4.1][Perf] Reuse the decode topk ragged metadata a... | @Fangzhou-Ai | merged | 2026-09-17 | 2026-09-20 |
| [#51065](https://github.com/vllm-project/vllm/pull/51065) | [Bugfix][MLA] TritonMLA: fix illegal memory access on causal... | @olka-amd | merged | 2026-08-04 | 2026-09-18 |
| [#57425](https://github.com/vllm-project/vllm/pull/57425) | [Bugfix][ROCm] Alias SparseAttnIndexerKpool.forward_cuda to ... | @mustafayildirim | merged | 2026-09-17 | 2026-09-18 |
| [#54849](https://github.com/vllm-project/vllm/pull/54849) | [ROCm][CI][The Rock 10] Fix (MI355) Quantized Models failure... | @rasmith | merged | 2026-09-01 | 2026-09-17 |
| [#56849](https://github.com/vllm-project/vllm/pull/56849) | [ROCm][Perf] Insert MiniMax-M3 sparse-PA K/V without a conti... | @akii96 | merged | 2026-09-14 | 2026-09-17 |
| [#51081](https://github.com/vllm-project/vllm/pull/51081) | [Bugfix][KV Offload] Register the offload region in chunks | @drakosha | merged | 2026-08-04 | 2026-09-17 |
| [#56343](https://github.com/vllm-project/vllm/pull/56343) | [ROCm] Stage large pageable H2D copies instead of registerin... | @JohnQinAMD | merged | 2026-09-10 | 2026-09-17 |
| [#57074](https://github.com/vllm-project/vllm/pull/57074) | [ROCm][CI] Enable AITER FP8/unquantized cases in modular-ker... | @divakar-amd | merged | 2026-09-15 | 2026-09-17 |
| [#55991](https://github.com/vllm-project/vllm/pull/55991) | [ROCm][AITER] Skip AITER norm kernels when flattening to 2D ... | @ZhengGong-amd | merged | 2026-09-09 | 2026-09-16 |
| [#57112](https://github.com/vllm-project/vllm/pull/57112) | [ROCm][CI] Fix MLA RoPE fused-kernel tests for TheRock image | @mawong-amd | merged | 2026-09-16 | 2026-09-16 |
| [#55358](https://github.com/vllm-project/vllm/pull/55358) | [Refactor][GLM-5.3-Flash] Move sparse_attn_indexer_kpool int... | @ZJY0516 | merged | 2026-09-04 | 2026-09-16 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-09-25T13:04:22Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#40515](https://github.com/sgl-project/sglang/pull/40515) | chore: expose agent skills via `.agents` directories | @TwinklerG | open | 2026-09-21 | 2026-09-25 |
| [#41165](https://github.com/sgl-project/sglang/pull/41165) | Let predicate-registered linear-attention models carry the m... | @pengwu22 | open | 2026-09-24 | 2026-09-25 |
| [#40358](https://github.com/sgl-project/sglang/pull/40358) | [ROCm] GLM-5.2 decode path: decode-shaped MoE/MLA tiles, spl... | @kyle-256 | open | 2026-09-19 | 2026-09-25 |
| [#40894](https://github.com/sgl-project/sglang/pull/40894) | [Fix] Resolve Inkling think-end IDs in ReasonerGrammarBacken... | @JustinTong0323 | open | 2026-09-23 | 2026-09-25 |
| [#41071](https://github.com/sgl-project/sglang/pull/41071) | [AMD] Route gfx942 block-FP8 linears to the AITER CK blocksc... | @siliangchen-amd | open | 2026-09-24 | 2026-09-25 |
| [#41234](https://github.com/sgl-project/sglang/pull/41234) | [AMD] aiter unified attention: refresh the CUDA-graph page t... | @siliangchen-amd | open | 2026-09-25 | 2026-09-25 |
| [#41229](https://github.com/sgl-project/sglang/pull/41229) | [ROCm] Rotate even-batch decode attention grid across XCDs | @siliangchen-amd | open | 2026-09-25 | 2026-09-25 |
| [#41143](https://github.com/sgl-project/sglang/pull/41143) | [Feature] Gemma2/Gemma3: size sliding-window layers from the... | @siliangchen-amd | open | 2026-09-24 | 2026-09-25 |
| [#41013](https://github.com/sgl-project/sglang/pull/41013) | [Feature] Exaone4: size sliding-window layers from the hybri... | @siliangchen-amd | open | 2026-09-24 | 2026-09-25 |
| [#41012](https://github.com/sgl-project/sglang/pull/41012) | [Bugfix] Olmo3: size sliding-window layers from the hybrid S... | @siliangchen-amd | open | 2026-09-24 | 2026-09-25 |
| [#38806](https://github.com/sgl-project/sglang/pull/38806) | [AMD] Optimize Qwen3.5 GDN prefill preparation and Triton re... | @chuyeh | open | 2026-09-10 | 2026-09-25 |
| [#41231](https://github.com/sgl-project/sglang/pull/41231) | [DO NOT MERGE][CI] Move 1-gpu-large tests that pass on the 5... | @mmangkad | open | 2026-09-25 | 2026-09-25 |
| [#41242](https://github.com/sgl-project/sglang/pull/41242) | [dLLM] Support per-request temperature, top-p and top-k samp... | @Dayuxiaoshui | open | 2026-09-25 | 2026-09-25 |
| [#39099](https://github.com/sgl-project/sglang/pull/39099) | [NPU] Decode context parallelism (DCP) and prefill query sha... | @TamirBaydasov | open | 2026-09-11 | 2026-09-25 |
| [#39012](https://github.com/sgl-project/sglang/pull/39012) | [Deps] Bump transformers to 5.17.0 | @mmangkad | open | 2026-09-11 | 2026-09-25 |
| [#41241](https://github.com/sgl-project/sglang/pull/41241) | [rust-renderer] Run http feature tests and clippy in PR CI | @hickeyma | open | 2026-09-25 | 2026-09-25 |
| [#41240](https://github.com/sgl-project/sglang/pull/41240) | [diffusion] LTX-2.5: balance tile-parallel decode by tile vo... | @jackyhkust | draft | 2026-09-25 | 2026-09-25 |
| [#39313](https://github.com/sgl-project/sglang/pull/39313) | fuse shared experts with routed experts in MegaMoE's DeepGEM... | @xikronz | open | 2026-09-13 | 2026-09-25 |
| [#40490](https://github.com/sgl-project/sglang/pull/40490) | [diffusion] Fuse lossless Klein packed QK RMSNorm and RoPE o... | @BBuf | open | 2026-09-20 | 2026-09-25 |
| [#38652](https://github.com/sgl-project/sglang/pull/38652) | [LMCache] Support lmcache unified radix cache | @chunxiaozheng | open | 2026-09-09 | 2026-09-25 |
| [#41163](https://github.com/sgl-project/sglang/pull/41163) | [DSV4] Reserve the FULL logical page in the c4 indexer pool ... | @pengwu22 | open | 2026-09-24 | 2026-09-25 |
| [#40219](https://github.com/sgl-project/sglang/pull/40219) | model: DeepSeek V4.1 vision CP and single-owner image encodi... | @JustinTong0323 | open | 2026-09-18 | 2026-09-25 |
| [#41132](https://github.com/sgl-project/sglang/pull/41132) | Revert "[NPU] Fuse FIA KV-cache K/V writes into one npu_scat... | @iforgetmyname | open | 2026-09-24 | 2026-09-25 |
| [#37577](https://github.com/sgl-project/sglang/pull/37577) | [Feature] Add Aaronson-Gumbel text watermarking | @JustinTong0323 | open | 2026-09-02 | 2026-09-25 |
| [#35684](https://github.com/sgl-project/sglang/pull/35684) | [diffusion] MiniMax-H3 Spectrum skip-step + fused RMSNorm/Ad... | @niehen6174 | open | 2026-08-20 | 2026-09-25 |
| [#29048](https://github.com/sgl-project/sglang/pull/29048) | [NPU] Support w8a8_int/w4a4_int online quantization | @OrangeRedeng | open | 2026-06-23 | 2026-09-25 |
| [#34418](https://github.com/sgl-project/sglang/pull/34418) | [Diffusion] Apply latent-ids and packing to caller-provided ... | @CjhHa1 | open | 2026-08-11 | 2026-09-25 |
| [#40814](https://github.com/sgl-project/sglang/pull/40814) | [Fix][NPU] Fix performance degradation caused by serial exec... | @litmei | open | 2026-09-23 | 2026-09-25 |
| [#28131](https://github.com/sgl-project/sglang/pull/28131) | fix(multimodal): return 400 for corrupt image inputs | @Sunt-ing | open | 2026-06-13 | 2026-09-25 |
| [#41164](https://github.com/sgl-project/sglang/pull/41164) | [Kimi-K3] Merge fused_qkvg_proj into the loader-seeded packe... | @pengwu22 | open | 2026-09-24 | 2026-09-25 |
| [#41075](https://github.com/sgl-project/sglang/pull/41075) | [XPU] Disable test_ngram_corpus on XPU and detect XPU tests ... | @arathi-hlab | open | 2026-09-24 | 2026-09-25 |
| [#41215](https://github.com/sgl-project/sglang/pull/41215) | [Test] Remove dead eval modules and point GSM8K/MMLU docs to... | @hnyls2002 | open | 2026-09-25 | 2026-09-25 |
| [#40486](https://github.com/sgl-project/sglang/pull/40486) | [diffusion] Enable lossless Cosmos3 Super T2I QK fusion on H... | @BBuf | merged | 2026-09-20 | 2026-09-25 |
| [#34417](https://github.com/sgl-project/sglang/pull/34417) | [Diffusion] Fix AttributeError in grouped forward_batch by i... | @CjhHa1 | merged | 2026-08-11 | 2026-09-25 |
| [#39273](https://github.com/sgl-project/sglang/pull/39273) | [AMD] [GLM-5.3-Flash] Enable FP8 and MXFP4 serving on gfx950 | @hdt98 | open | 2026-09-13 | 2026-09-25 |
| [#41224](https://github.com/sgl-project/sglang/pull/41224) | [XPU] Disable test_ngram_corpus on XPU and extend XPU CI pat... | @arathi-hlab | merged | 2026-09-25 | 2026-09-25 |
| [#41200](https://github.com/sgl-project/sglang/pull/41200) | [Refactor] Decide an FFN exit's completion once and declare ... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41199](https://github.com/sgl-project/sglang/pull/41199) | [Refactor] Take a layer's last-layer fact from its scatter-m... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41191](https://github.com/sgl-project/sglang/pull/41191) | [Refactor] Build prepare_mlp and the layout moves from named... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41198](https://github.com/sgl-project/sglang/pull/41198) | [Refactor] Move Step-3.5, GLM5-Next, Dots3, MiniMax-M3 and Q... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41197](https://github.com/sgl-project/sglang/pull/41197) | [Refactor] Leave the FFN reduction to the next layer under a... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41196](https://github.com/sgl-project/sglang/pull/41196) | [Refactor] Carry a deferred FFN all-reduce as UnreducedOutpu... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41195](https://github.com/sgl-project/sglang/pull/41195) | [Fix] Stop counting a deferred FFN sum more than once: repli... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41194](https://github.com/sgl-project/sglang/pull/41194) | [Fix] Plan NextN / MTP draft layers as one-layer models and ... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41193](https://github.com/sgl-project/sglang/pull/41193) | [Fix] Complete the all-reduce when the flashinfer fused norm... | @ch-wan | merged | 2026-09-25 | 2026-09-25 |
| [#41018](https://github.com/sgl-project/sglang/pull/41018) | dsv4.1-amd: gfx950 MXFP8 matmul kernels and fp8-grid produce... | @kevin-mii | open | 2026-09-24 | 2026-09-25 |
| [#35619](https://github.com/sgl-project/sglang/pull/35619) | [AMD] Integrate Aiter MegaMoEv2 for DeepSeek-V4 | @kkHuang-amd | merged | 2026-08-20 | 2026-09-25 |
| [#34200](https://github.com/sgl-project/sglang/pull/34200) | [AMD] Port CP V2 to the DeepSeek-V4 HIP backend | @AMD-yanfeiwang | open | 2026-08-10 | 2026-09-25 |
| [#33602](https://github.com/sgl-project/sglang/pull/33602) | [AMD] [GLM5] Add opt-in PTPC FP8 projections on gfx950 | @Raiden-Makoto | open | 2026-08-04 | 2026-09-25 |
| [#41092](https://github.com/sgl-project/sglang/pull/41092) | [HiCache] fix: Drain pending backups before internal Mamba w... | @alphabetc1 | merged | 2026-09-24 | 2026-09-25 |
| [#40456](https://github.com/sgl-project/sglang/pull/40456) | [HiCache] Give trailing sidecar storage transfers a contiguo... | @alphabetc1 | merged | 2026-09-20 | 2026-09-25 |
| [#36575](https://github.com/sgl-project/sglang/pull/36575) | MiniMax-M3: fuse per-token fp8 quant into add-RMSNorm and fo... | @zcnrex | open | 2026-08-26 | 2026-09-25 |
| [#41065](https://github.com/sgl-project/sglang/pull/41065) | Fix MUSA detection under torch.compile fullgraph | @rumitdesai | open | 2026-09-24 | 2026-09-25 |
| [#41067](https://github.com/sgl-project/sglang/pull/41067) | [diffusion] Add native Ming-Image Design and Design-Layer su... | @mickqian | merged | 2026-09-24 | 2026-09-25 |
| [#41074](https://github.com/sgl-project/sglang/pull/41074) | fix: load fused shared-expert LoRA weights and bound expert ... | @yueming-yuan | merged | 2026-09-24 | 2026-09-25 |
| [#41201](https://github.com/sgl-project/sglang/pull/41201) | [DeepEP v2] Let a model package supply its per-rank prefill ... | @metamergebot | merged | 2026-09-25 | 2026-09-25 |
| [#34153](https://github.com/sgl-project/sglang/pull/34153) | [Scheduler] Fix final chunked-prefill abort commit race | @jeremyzhang866 | open | 2026-08-09 | 2026-09-25 |
| [#41159](https://github.com/sgl-project/sglang/pull/41159) | [AMD] Fix int32 offset overflow in Triton DSv4 KV store kern... | @RolaoDenthu | merged | 2026-09-24 | 2026-09-25 |
| [#28135](https://github.com/sgl-project/sglang/pull/28135) | fix(openai): reject request-supplied chat_template by defaul... | @Sunt-ing | merged | 2026-06-13 | 2026-09-25 |
| [#41208](https://github.com/sgl-project/sglang/pull/41208) | [Feature] Add a System One compatible /v1/systemone route | @rwang5203 | merged | 2026-09-25 | 2026-09-25 |
| [#41002](https://github.com/sgl-project/sglang/pull/41002) | [CI] fix CI regression on xeon | @xinguozhu-2026 | open | 2026-09-24 | 2026-09-25 |
| [#41062](https://github.com/sgl-project/sglang/pull/41062) | [Fix] Keep the target's DP sync slot in draft scopes | @mmangkad | merged | 2026-09-24 | 2026-09-25 |
| [#41207](https://github.com/sgl-project/sglang/pull/41207) | [CI] Move GLM-5.2 layer-split test to extra-b-test-8-gpu-b30... | @mmangkad | merged | 2026-09-25 | 2026-09-25 |
| [#41136](https://github.com/sgl-project/sglang/pull/41136) | [AMD] [GLM-5.3-Flash] Restore two HIP fallbacks: clamped-Swi... | @michaelzhang-ai | draft | 2026-09-24 | 2026-09-25 |
| [#41061](https://github.com/sgl-project/sglang/pull/41061) | [Perf] Lazy-load built-in model definitions and nixl_ep at s... | @metamergebot | merged | 2026-09-24 | 2026-09-25 |
| [#40793](https://github.com/sgl-project/sglang/pull/40793) | [PD] Honor gracefully_exit in disaggregation event loops and... | @metamergebot | merged | 2026-09-22 | 2026-09-25 |
| [#32269](https://github.com/sgl-project/sglang/pull/32269) | Support XQA backend for SpecDec verify | @akhilg-nv | merged | 2026-07-24 | 2026-09-25 |
| [#40821](https://github.com/sgl-project/sglang/pull/40821) | [sglang-miles] Colocated RL for hybrid-state models: flush o... | @Zhichenzzz | merged | 2026-09-23 | 2026-09-25 |
| [#41095](https://github.com/sgl-project/sglang/pull/41095) | [diffusion] Add opt-in SRT prompt enhancement to image and v... | @mickqian | merged | 2026-09-24 | 2026-09-25 |
| [#41091](https://github.com/sgl-project/sglang/pull/41091) | [DSV4] Account for FlashMLA physical KV page padding in memo... | @alphabetc1 | merged | 2026-09-24 | 2026-09-25 |
| [#41090](https://github.com/sgl-project/sglang/pull/41090) | [DSV4] Fix TRTLLM uniform FP8 KV memory budgeting | @alphabetc1 | merged | 2026-09-24 | 2026-09-25 |
| [#38547](https://github.com/sgl-project/sglang/pull/38547) | [AMD] [GLM-5.3-Flash Day 0] Enable zero-RoPE TileLang DSA on... | @Raiden-Makoto | merged | 2026-09-08 | 2026-09-24 |
| [#38546](https://github.com/sgl-project/sglang/pull/38546) | [AMD] [GLM-5.3-Flash Day 0] Enable FP8 and Quark MXFP4 MoE o... | @Raiden-Makoto | merged | 2026-09-08 | 2026-09-24 |
| [#38545](https://github.com/sgl-project/sglang/pull/38545) | [AMD] [GLM-5.3-Flash Day 0] Route mHC through AITER on gfx95... | @Raiden-Makoto | merged | 2026-09-08 | 2026-09-24 |
| [#28734](https://github.com/sgl-project/sglang/pull/28734) | [AMD] Fix Load and Inference of MLA models with Quark PTPC F... | @ColinZ22 | open | 2026-06-19 | 2026-09-24 |
| [#33804](https://github.com/sgl-project/sglang/pull/33804) | [Intel][XPU]Enable chunked prefill scnearios for XPU with UT | @AnuSajikumar6264 | open | 2026-08-06 | 2026-09-24 |
| [#41161](https://github.com/sgl-project/sglang/pull/41161) | [AMD] [GLM5] Fuse shared expert into AITER MoE on gfx950 | @Raiden-Makoto | open | 2026-09-24 | 2026-09-24 |
| [#36559](https://github.com/sgl-project/sglang/pull/36559) | MoE: small-batch sorting path with fused mxfp8 quantisation | @zcnrex | merged | 2026-08-26 | 2026-09-24 |
| [#36574](https://github.com/sgl-project/sglang/pull/36574) | MiniMax-M3: MXFP8 dense-only block convert + aiter MXFP8 MoE... | @zcnrex | merged | 2026-08-26 | 2026-09-24 |
| [#34502](https://github.com/sgl-project/sglang/pull/34502) | [ROCm] Fuse per-token activation quant into RMSNorm for per-... | @Emmanuel0612 | open | 2026-08-12 | 2026-09-24 |
| [#41120](https://github.com/sgl-project/sglang/pull/41120) | [AMD] Add .co for deepseek v4 fp8 decode kernel and add grou... | @1am9trash | merged | 2026-09-24 | 2026-09-24 |
| [#41021](https://github.com/sgl-project/sglang/pull/41021) | [AMD] DeepSeek-V4.1 on ROCm: fused mHC, MoE router, Engram, ... | @kevin-mii | open | 2026-09-24 | 2026-09-24 |
| [#41020](https://github.com/sgl-project/sglang/pull/41020) | [AMD] DeepSeek-V4.1 in the HIP radix attention backend (Deep... | @kevin-mii | open | 2026-09-24 | 2026-09-24 |
| [#41019](https://github.com/sgl-project/sglang/pull/41019) | [AMD] V4.1 KV layouts and DeepSeek-V4 attention kernels on g... | @kevin-mii | open | 2026-09-24 | 2026-09-24 |
| [#32503](https://github.com/sgl-project/sglang/pull/32503) | [XPU] Enable HiCache support on Intel XPU | @kpjeeja | open | 2026-07-27 | 2026-09-24 |
| [#40911](https://github.com/sgl-project/sglang/pull/40911) | [AMD] Gate flashinfer and TRT-LLM DSA paths on CUDA | @jiaryang | open | 2026-09-23 | 2026-09-24 |
| [#2601](https://github.com/sgl-project/sglang/pull/2601) | [Feature, Hardware] Enable DeepseekV3 on AMD GPUs | @BruceXcluding | merged | 2024-12-26 | 2026-09-24 |
| [#36903](https://github.com/sgl-project/sglang/pull/36903) | [AMD] Add GLM-5.3-Flash ROCm nightly GSM8K accuracy gates | @michaelzhang-ai | open | 2026-08-28 | 2026-09-24 |
| [#41137](https://github.com/sgl-project/sglang/pull/41137) | [AMD] Register Triton data movement tests in PR CI | @michaelzhang-ai | open | 2026-09-24 | 2026-09-24 |
| [#40922](https://github.com/sgl-project/sglang/pull/40922) | [Refactor] Retire the model-specific Kimi K3 kernel namespac... | @BBuf | merged | 2026-09-23 | 2026-09-24 |
| [#41133](https://github.com/sgl-project/sglang/pull/41133) | [AMD] One-launch small-M MoE router for Qwen3.5 on gfx950 | @chuyeh | draft | 2026-09-24 | 2026-09-24 |
| [#41134](https://github.com/sgl-project/sglang/pull/41134) | [AMD] Small-M W8A8 FP8 projection GEMM for Qwen3.5 AttnFP8 o... | @chuyeh | draft | 2026-09-24 | 2026-09-24 |
| [#41119](https://github.com/sgl-project/sglang/pull/41119) | [AMD][DSv4] Tuned decode moe kernels for mori-EP backend | @heachary | draft | 2026-09-24 | 2026-09-24 |
| [#40583](https://github.com/sgl-project/sglang/pull/40583) | [diffusion][AMD] FlyDSL norm: pick the wave count per hidden... | @avjves | open | 2026-09-21 | 2026-09-24 |
| [#41123](https://github.com/sgl-project/sglang/pull/41123) | [AMD] Support Qwen3.8-Flash-Next MXFP4 on ROCm with new kern... | @amd-nprotaso | open | 2026-09-24 | 2026-09-24 |
| [#39769](https://github.com/sgl-project/sglang/pull/39769) | Skip fully-masked KV tiles in sliding-window extend attentio... | @jiaqiang-dot-liu | open | 2026-09-16 | 2026-09-24 |
| [#33068](https://github.com/sgl-project/sglang/pull/33068) | [AMD] Fuse quantized in_proj layers in Qwen3.5 | @mqhc2020 | open | 2026-07-31 | 2026-09-24 |
| [#40812](https://github.com/sgl-project/sglang/pull/40812) | [AMD] Register mem-cache unit tests in PR CI | @michaelzhang-ai | merged | 2026-09-23 | 2026-09-24 |
| [#37751](https://github.com/sgl-project/sglang/pull/37751) | [AMD][Diffusion] FlyDSL fused norm kernels on wave32 targets... | @yctseng0211 | merged | 2026-09-03 | 2026-09-24 |
| [#40204](https://github.com/sgl-project/sglang/pull/40204) | [AMD] Small-M MXFP4 fused-MoE kernel for gfx950 (Qwen) | @zijiecode | merged | 2026-09-18 | 2026-09-24 |
| [#40710](https://github.com/sgl-project/sglang/pull/40710) | [ROCm][DSA] Enable AITER fused FP8 indexer writer | @fanxingran | merged | 2026-09-22 | 2026-09-24 |
| [#36546](https://github.com/sgl-project/sglang/pull/36546) | MiniMax-M3: run the sparse prefill main attention through AI... | @zcnrex | merged | 2026-08-26 | 2026-09-24 |
| [#40754](https://github.com/sgl-project/sglang/pull/40754) | [AMD] Critical fix enabling Qwen3.8 FP8: restore dropped fus... | @yichiche | merged | 2026-09-22 | 2026-09-24 |
| [#40844](https://github.com/sgl-project/sglang/pull/40844) | [AMD] Add diffusion (Wan2.2) extras to gfx1151 Docker image | @yichiche | merged | 2026-09-23 | 2026-09-24 |
| [#34695](https://github.com/sgl-project/sglang/pull/34695) | [AMD] Speed up Wan2.2 DiT FP8 attention per-tensor quantizat... | @yichiche | merged | 2026-08-13 | 2026-09-24 |
| [#39804](https://github.com/sgl-project/sglang/pull/39804) | [AMD] Fix DeepSeek-V4 accuracy by not passing num_token_non_... | @At1a8 | merged | 2026-09-16 | 2026-09-24 |
| [#38876](https://github.com/sgl-project/sglang/pull/38876) | [AMD] Add a Triton packed sparse decode path for QSA on ROCm | @yichiche | merged | 2026-09-10 | 2026-09-24 |
| [#28293](https://github.com/sgl-project/sglang/pull/28293) | [NPU] Add NPU fallback for fused Triton gating kernels | @iridiumine | merged | 2026-06-15 | 2026-09-24 |
| [#36549](https://github.com/sgl-project/sglang/pull/36549) | MiniMax-M3: allocate the lightning-indexer K cache in fp8 on... | @zcnrex | merged | 2026-08-26 | 2026-09-24 |
| [#38340](https://github.com/sgl-project/sglang/pull/38340) | [ROCm] Fuse the MLA q absorb into the RoPE + KV-write kernel... | @xiaobochen-amd | merged | 2026-09-07 | 2026-09-23 |
| [#40879](https://github.com/sgl-project/sglang/pull/40879) | [AMD] Drop the unreachable vLLM fallback from ROCm FP8 activ... | @siliangchen-amd | merged | 2026-09-23 | 2026-09-23 |
| [#39790](https://github.com/sgl-project/sglang/pull/39790) | [ROCm] feat: enable aiter allreduce fusion for GLM models | @RuibinCheung | merged | 2026-09-16 | 2026-09-23 |
| [#39778](https://github.com/sgl-project/sglang/pull/39778) | [AMD] [GLM-5.3-Flash Day 0] Enable speculative decoding (MTP... | @Jacob0226 | merged | 2026-09-16 | 2026-09-22 |
| [#39503](https://github.com/sgl-project/sglang/pull/39503) | [AMD] Use exact CU share for gfx950 segment-plan headroom | @chuyeh | merged | 2026-09-15 | 2026-09-22 |
| [#40111](https://github.com/sgl-project/sglang/pull/40111) | avoid host sync in DSpark prefill slot expansion | @inkcherry | merged | 2026-09-18 | 2026-09-22 |
| [#39902](https://github.com/sgl-project/sglang/pull/39902) | [AMD] Pack Qwen3.5 GDN input projections on ROCm | @zijiecode | merged | 2026-09-17 | 2026-09-22 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-09-25T13:04:27Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD] Emit actionable errors when a direct-to-LDS copy canno... | @vmalepati1 | open | 2026-07-14 | 2026-09-25 |
| [#11963](https://github.com/triton-lang/triton/pull/11963) | [AMD][BACKEND] Fix TDM verifiers to use shaperPerCTA | @AlexAUT | draft | 2026-09-25 | 2026-09-25 |
| [#11929](https://github.com/triton-lang/triton/pull/11929) | [AMD][GFX1250] TDM copy reordering in the pipeliner | @yiqian1 | merged | 2026-09-23 | 2026-09-25 |
| [#11909](https://github.com/triton-lang/triton/pull/11909) | [WIP] [AMD][BACKEND] Emit packed scaled_upcast layout for do... | @AlexAUT | open | 2026-09-22 | 2026-09-25 |
| [#11922](https://github.com/triton-lang/triton/pull/11922) | [AMD] Fix RDNA DRAM bandwidth estimates | @lstojilj-amd | draft | 2026-09-23 | 2026-09-25 |
| [#11932](https://github.com/triton-lang/triton/pull/11932) | [AMD][GLUON] Expose sched barrier | @borontion | merged | 2026-09-23 | 2026-09-25 |
| [#11945](https://github.com/triton-lang/triton/pull/11945) | [AMD] GFX1250-strict Support | @amirumoAMD | draft | 2026-09-24 | 2026-09-25 |
| [#11946](https://github.com/triton-lang/triton/pull/11946) | [AMD][TEST] Update test_mxfp_gemm_tdm.py to align with Gluon... | @yiqian1 | draft | 2026-09-24 | 2026-09-24 |
| [#11890](https://github.com/triton-lang/triton/pull/11890) | [AMD] Do not stagger CDNA4 padded layouts over rows that do ... | @bogdan-petkovic | open | 2026-09-21 | 2026-09-24 |
| [#11707](https://github.com/triton-lang/triton/pull/11707) | [AMD] Fix partitioned shared and WMMA layouts for CGAs | @jungpark-mlir | draft | 2026-09-11 | 2026-09-24 |
| [#11704](https://github.com/triton-lang/triton/pull/11704) | [AMD] Bypass the epilogue relayout for FMA | @pabloantoniom | draft | 2026-09-11 | 2026-09-24 |
| [#11916](https://github.com/triton-lang/triton/pull/11916) | [AMD] Update AMD CodeGen to triton-lang/llvm-project@d26ff26... | @antiagainst | merged | 2026-09-23 | 2026-09-24 |
| [#11475](https://github.com/triton-lang/triton/pull/11475) | [AMD] Disable scalar atomics in multicta kernels | @borontion | open | 2026-08-26 | 2026-09-23 |
| [#11921](https://github.com/triton-lang/triton/pull/11921) | [AMD][NFC] Fix gfx1250 unit tests for multiplication and TDM... | @AlexAUT | merged | 2026-09-23 | 2026-09-23 |
| [#11925](https://github.com/triton-lang/triton/pull/11925) | [AMD] Build AMD CodeGen LLVM at d26ff26ef4e9 | @antiagainst | merged | 2026-09-23 | 2026-09-23 |
| [#11709](https://github.com/triton-lang/triton/pull/11709) | [AMD] Fix XF32 MFMA lowering for small K | @Jokeren | merged | 2026-09-11 | 2026-09-23 |
| [#11896](https://github.com/triton-lang/triton/pull/11896) | [AMD] Do not insert barriers between mbarrier-synchronized T... | @nirvedhmeshram | open | 2026-09-21 | 2026-09-23 |
| [#11719](https://github.com/triton-lang/triton/pull/11719) | [AMD] Make the membar async-load filter direction-aware | @zhanglx13 | merged | 2026-09-11 | 2026-09-23 |
| [#11843](https://github.com/triton-lang/triton/pull/11843) | [AMD] Add rocjitsu based integration tests for cdna5 | @sriakrish | merged | 2026-09-18 | 2026-09-23 |
| [#11802](https://github.com/triton-lang/triton/pull/11802) | [CI][AMD] Record runner environment diagnostics | @willghatch | merged | 2026-09-15 | 2026-09-22 |
| [#11912](https://github.com/triton-lang/triton/pull/11912) | [AMD] build AMD CodeGen LLVM @ 9e5edb7ed944 | @antiagainst | merged | 2026-09-22 | 2026-09-22 |
| [#11911](https://github.com/triton-lang/triton/pull/11911) | [AMD] Allow the tagged barrier lowering on RDNA in CU mode | @mgehre-amd | draft | 2026-09-22 | 2026-09-22 |
| [#11910](https://github.com/triton-lang/triton/pull/11910) | [AMD] Add a cu_mode option to compile for CU wavefront execu... | @mgehre-amd | draft | 2026-09-22 | 2026-09-22 |
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-09-22 |
| [#11904](https://github.com/triton-lang/triton/pull/11904) | [AMD] Swap floating-point values as integers in buffer atomi... | @LiRunGuo | open | 2026-09-22 | 2026-09-22 |
| [#10694](https://github.com/triton-lang/triton/pull/10694) | [AMD] Use operand-major LDS layout for FMA dot operands | @pabloantoniom | draft | 2026-06-22 | 2026-09-21 |
| [#11884](https://github.com/triton-lang/triton/pull/11884) | [AMD][BACKEND] Hash external library contents in compiler op... | @qedawkins | merged | 2026-09-20 | 2026-09-21 |
| [#11880](https://github.com/triton-lang/triton/pull/11880) | [AMD] Compute the HIP pointer-range bit natively | @lijinpei-amd | draft | 2026-09-20 | 2026-09-20 |
| [#11876](https://github.com/triton-lang/triton/pull/11876) | [AMD] isolate LLVM CodeGen dependencies | @antiagainst | draft | 2026-09-19 | 2026-09-19 |
| [#11049](https://github.com/triton-lang/triton/pull/11049) | [AMD] Fix AMDMfmaEncodingAttr invalid-bool-load UBSan error | @JAGANNATHANJP | merged | 2026-07-25 | 2026-09-19 |
| [#11809](https://github.com/triton-lang/triton/pull/11809) | [AMD] Use hardware OCP FP8 upcasts on RDNA4 | @zihaomu | open | 2026-09-16 | 2026-09-19 |
| [#11792](https://github.com/triton-lang/triton/pull/11792) | [AMD][gfx950][Gluon] Add cd_regclass to mfma and mfma_scaled | @zhanglx13 | merged | 2026-09-15 | 2026-09-19 |
| [#11850](https://github.com/triton-lang/triton/pull/11850) | [Build] Honor artifact mirrors for AMD codegen downloads | @peterbell10 | merged | 2026-09-18 | 2026-09-18 |
| [#11783](https://github.com/triton-lang/triton/pull/11783) | Preserve NaNs in AMD TF32 matmuls | @roman-openai | merged | 2026-09-14 | 2026-09-18 |
| [#11835](https://github.com/triton-lang/triton/pull/11835) | [AMD] Cap the MFMA instruction shape by the per-warp share o... | @Mazukiri | open | 2026-09-17 | 2026-09-17 |
| [#11657](https://github.com/triton-lang/triton/pull/11657) | [AMD][Gluon] Export scaled_upcast layout helper for every su... | @AlexAUT | merged | 2026-09-09 | 2026-09-17 |
| [#11833](https://github.com/triton-lang/triton/pull/11833) | [AMD][BACEND] Fix multi-cta OOB handling of TDM gather/scatt... | @AlexAUT | merged | 2026-09-17 | 2026-09-17 |
| [#11814](https://github.com/triton-lang/triton/pull/11814) | [AMD] Fix shared-memory loads and stores of pointer elements | @he-weiwen | merged | 2026-09-16 | 2026-09-17 |
| [#11749](https://github.com/triton-lang/triton/pull/11749) | [AMD][BACKEND] Don't over-subscribe TDM warps on small block... | @nurmukhametov | merged | 2026-09-13 | 2026-09-17 |
| [#11579](https://github.com/triton-lang/triton/pull/11579) | [NFC][AMD] Add mixed FP8/BF8 WMMA lowering tests | @umangyadav | merged | 2026-09-04 | 2026-09-16 |
| [#11465](https://github.com/triton-lang/triton/pull/11465) | [AMD][BACKEND] Fix free-variable mask key to enable register... | @dhernandez0 | merged | 2026-08-26 | 2026-09-15 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add CDNA5 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-09-15 |
| [#11798](https://github.com/triton-lang/triton/pull/11798) | [AMD] Support configurable warp-pipeline phase gaps | @jungpark-mlir | draft | 2026-09-15 | 2026-09-15 |
| [#11787](https://github.com/triton-lang/triton/pull/11787) | [DO NOT MERGE][CI][AMD] Migrate gfx950 CI to MI355 runner | @raikonenfnu | open | 2026-09-14 | 2026-09-15 |
| [#11791](https://github.com/triton-lang/triton/pull/11791) | [AMD]Support GenericLinearLayout in FpToFpOp Conversion | @knwng | merged | 2026-09-14 | 2026-09-15 |
| [#11793](https://github.com/triton-lang/triton/pull/11793) | [TEST][AMD] Add runtime loop regression for #11378 | @zihaomu | open | 2026-09-15 | 2026-09-15 |
| [#11769](https://github.com/triton-lang/triton/pull/11769) | [AMD][GFX9] Disable local runtime loop unrolling for gfx942/... | @xgxanq | open | 2026-09-14 | 2026-09-15 |
| [#11559](https://github.com/triton-lang/triton/pull/11559) | [Proton][AMD] Finalize the ROCprofiler client before process... | @willghatch | merged | 2026-09-02 | 2026-09-14 |
| [#11295](https://github.com/triton-lang/triton/pull/11295) | [AMD] Swizzle clamping for the direct-to-lds path | @erizheng-amd | draft | 2026-08-13 | 2026-09-14 |
| [#11265](https://github.com/triton-lang/triton/pull/11265) | [AMD] Avoid GIL deadlock during HIP library lookup | @nemanjaudovic | merged | 2026-08-11 | 2026-09-14 |
| [#11765](https://github.com/triton-lang/triton/pull/11765) | [AMD] Fix two-cluster BlockPingpong LDS race | @jungpark-mlir | merged | 2026-09-14 | 2026-09-14 |
| [#11289](https://github.com/triton-lang/triton/pull/11289) | [AMD] Fix address space of barriers that carry atomic memory... | @mgehre-amd | open | 2026-08-13 | 2026-09-14 |
| [#11763](https://github.com/triton-lang/triton/pull/11763) | Revert "[AMD][GFX9] Enable amdgpu-use-amdgpu-trackers LLVM f... | @yanxuer-999 | draft | 2026-09-14 | 2026-09-14 |
| [#11655](https://github.com/triton-lang/triton/pull/11655) | [AMD] Widen InstCombine's SimplifyDemandedVectorElts walk de... | @Dewei-Wang-sh | open | 2026-09-09 | 2026-09-14 |
| [#11745](https://github.com/triton-lang/triton/pull/11745) | [AMD] [gfx1250] Bump pinned AMD LLVM to pick up the entry-se... | @zhanglx13 | merged | 2026-09-12 | 2026-09-12 |
| [#11727](https://github.com/triton-lang/triton/pull/11727) | [AMD] Fix XF32 MFMA lowering for small K | @Jokeren | merged | 2026-09-12 | 2026-09-12 |
| [#11717](https://github.com/triton-lang/triton/pull/11717) | [Build] Refresh Ninja path for cached AMD bootstrap builds | @roman-openai | merged | 2026-09-11 | 2026-09-11 |
| [#11485](https://github.com/triton-lang/triton/pull/11485) | [BACKEND] Package separately pinned AMD LLVM codegen | @ThomasRaoux | merged | 2026-08-27 | 2026-09-11 |
| [#10906](https://github.com/triton-lang/triton/pull/10906) |  [AMD] Restrict BarrierOpConversion to CDNA to avoid ROCm nu... | @k-artem | merged | 2026-07-16 | 2026-09-11 |
| [#11666](https://github.com/triton-lang/triton/pull/11666) | Avoid PyTorch imports during AMD backend discovery | @lyu-oai | open | 2026-09-09 | 2026-09-09 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-09-25T13:04:30Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5301](https://github.com/ROCm/AMDMIGraphX/pull/5301) | gpu: skip optimize_module in eager compile mode | @vmilanov-amd | draft | 2026-09-23 | 2026-09-25 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#5272](https://github.com/ROCm/AMDMIGraphX/pull/5272) | Add fused M=1 INT4 GEMV kernel for LLM decode (opt-in) | @aditya-dl | draft | 2026-09-16 | 2026-09-25 |
| [#5171](https://github.com/ROCm/AMDMIGraphX/pull/5171) | fix(security): scope CI secrets and pin third-party actions | @causten | open | 2026-08-21 | 2026-09-25 |
| [#5313](https://github.com/ROCm/AMDMIGraphX/pull/5313) | Cut off slow coarse-tuning candidates early | @justinrosner | open | 2026-09-24 | 2026-09-25 |
| [#5279](https://github.com/ROCm/AMDMIGraphX/pull/5279) | Refactor adaptive benchmarking | @pfultz2 | open | 2026-09-18 | 2026-09-25 |
| [#5315](https://github.com/ROCm/AMDMIGraphX/pull/5315) | Fuse GQA attention with attention sinks | @pfultz2 | open | 2026-09-24 | 2026-09-24 |
| [#5243](https://github.com/ROCm/AMDMIGraphX/pull/5243) | [AIMIGRAPHX-1208] Run ONNX Model Zoo on CI | @eddieliao | open | 2026-09-09 | 2026-09-24 |
| [#5271](https://github.com/ROCm/AMDMIGraphX/pull/5271) | Fuse reduce slices and squeezed epilogues, tile short reduct... | @pfultz2 | open | 2026-09-16 | 2026-09-24 |
| [#5312](https://github.com/ROCm/AMDMIGraphX/pull/5312) | Dynamic ROIAlign  | @CharlieL7 | draft | 2026-09-24 | 2026-09-24 |
| [#5278](https://github.com/ROCm/AMDMIGraphX/pull/5278) | Share identical weight literals across programs on the same ... | @aditya-dl | draft | 2026-09-17 | 2026-09-24 |
| [#5260](https://github.com/ROCm/AMDMIGraphX/pull/5260) | gqa/fuse_attention: attention sinks + sliding-window decode ... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5311](https://github.com/ROCm/AMDMIGraphX/pull/5311) | Match the reduce_mean variance pattern through shape transfo... | @pfultz2 | open | 2026-09-24 | 2026-09-24 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-09-24 |
| [#5310](https://github.com/ROCm/AMDMIGraphX/pull/5310) | Update CHANGELOG.md | @eddieliao | open | 2026-09-24 | 2026-09-24 |
| [#5291](https://github.com/ROCm/AMDMIGraphX/pull/5291) | Propagate broadcast in binary ops | @pfultz2 | open | 2026-09-21 | 2026-09-24 |
| [#5280](https://github.com/ROCm/AMDMIGraphX/pull/5280) | Fix horizontal fusion of dependent operations by partitionin... | @pfultz2 | open | 2026-09-18 | 2026-09-24 |
| [#5254](https://github.com/ROCm/AMDMIGraphX/pull/5254) | gpu/compile_ops: make tuning-config computation exception-sa... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5309](https://github.com/ROCm/AMDMIGraphX/pull/5309) | [CI][Diagnostic] Isolate MI300 MLIR attention flake | @kentqian | draft | 2026-09-24 | 2026-09-24 |
| [#5258](https://github.com/ROCm/AMDMIGraphX/pull/5258) | gpu: fused GptOssMoE op (sparse top-4 INT4 MoE) for GPT-OSS-... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5259](https://github.com/ROCm/AMDMIGraphX/pull/5259) | layernorm: FP32 SimplifiedLayerNorm/SkipSLN to prevent MoE r... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | open | 2026-09-21 | 2026-09-24 |
| [#5139](https://github.com/ROCm/AMDMIGraphX/pull/5139) | Add GPU JIT implementation for gridsample operation | @Imeguras | open | 2026-08-16 | 2026-09-24 |
| [#5306](https://github.com/ROCm/AMDMIGraphX/pull/5306) | Revert "Rewrite broadcast reshapes" | @causten | draft | 2026-09-24 | 2026-09-24 |
| [#5308](https://github.com/ROCm/AMDMIGraphX/pull/5308) | docs(2.16.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5307](https://github.com/ROCm/AMDMIGraphX/pull/5307) | docs(2.17.0): Update installation instructions w/ TheRock re... | @peterjunpark | draft | 2026-09-24 | 2026-09-24 |
| [#5244](https://github.com/ROCm/AMDMIGraphX/pull/5244) | Hiprtc compilation use streams instead of flie write/read | @pnikolic-amd | open | 2026-09-10 | 2026-09-24 |
| [#5266](https://github.com/ROCm/AMDMIGraphX/pull/5266) | Accept 2D MatMulNBits zero points | @ghedo | open | 2026-09-15 | 2026-09-24 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Adding support for operators with data-depdendent shape func... | @CharlieL7 | draft | 2026-09-24 | 2026-09-24 |
| [#5302](https://github.com/ROCm/AMDMIGraphX/pull/5302) | Use uint32 bitmask for GPU NMS kernel | @CharlieL7 | draft | 2026-09-24 | 2026-09-24 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | open | 2026-06-19 | 2026-09-23 |
| [#5075](https://github.com/ROCm/AMDMIGraphX/pull/5075) | [AIMIGRAPHX-1166] rebias uint8 to int8 on models with mixed ... | @kahmed10 | open | 2026-07-17 | 2026-09-23 |
| [#5283](https://github.com/ROCm/AMDMIGraphX/pull/5283) | Limit reshape output fusion in mlir | @pfultz2 | open | 2026-09-18 | 2026-09-23 |
| [#5123](https://github.com/ROCm/AMDMIGraphX/pull/5123) | Split symbolic dimension pass | @shivadbhavsar | open | 2026-08-07 | 2026-09-23 |
| [#5233](https://github.com/ROCm/AMDMIGraphX/pull/5233) | Add support for int4 reduce | @pfultz2 | open | 2026-09-02 | 2026-09-23 |
| [#5114](https://github.com/ROCm/AMDMIGraphX/pull/5114) | Regular attention flash decoding refactor and bug fixes | @bdevorem | open | 2026-08-05 | 2026-09-23 |
| [#5269](https://github.com/ROCm/AMDMIGraphX/pull/5269) | Symbolic and dynamic shape Cpp & Python printing | @CharlieL7 | open | 2026-09-15 | 2026-09-23 |
| [#5289](https://github.com/ROCm/AMDMIGraphX/pull/5289) | Add missing tests | @pfultz2 | open | 2026-09-20 | 2026-09-22 |
| [#5151](https://github.com/ROCm/AMDMIGraphX/pull/5151) | NMS parse into `dyn_slice` and remove env variable | @CharlieL7 | draft | 2026-08-18 | 2026-09-22 |
| [#5245](https://github.com/ROCm/AMDMIGraphX/pull/5245) | Update NonZero to slice to number of non-zero elements | @CharlieL7 | draft | 2026-09-10 | 2026-09-22 |
| [#5287](https://github.com/ROCm/AMDMIGraphX/pull/5287) | [AIMIGRAPHX-1266] GQA fails when the operator has 12 inputs  | @pfultz2 | open | 2026-09-20 | 2026-09-21 |
| [#5290](https://github.com/ROCm/AMDMIGraphX/pull/5290) | Bump rocm-docs-core from 1.40.2 to 1.41.0 in /docs/sphinx | @dependabot[bot] | open | 2026-09-21 | 2026-09-21 |
| [#5286](https://github.com/ROCm/AMDMIGraphX/pull/5286) | [AIMIGRAPHX-1264] QMoE Op not supported | @pfultz2 | open | 2026-09-20 | 2026-09-21 |
| [#5184](https://github.com/ROCm/AMDMIGraphX/pull/5184) | Eliminate concat_past_present | @pfultz2 | draft | 2026-08-24 | 2026-09-20 |
| [#5284](https://github.com/ROCm/AMDMIGraphX/pull/5284) | Update mlir problem key with a md5 sum | @pfultz2 | open | 2026-09-18 | 2026-09-18 |
| [#5282](https://github.com/ROCm/AMDMIGraphX/pull/5282) | Onnxruntime Weekly Sync 2026-09-18 | @github-actions[bot] | open | 2026-09-18 | 2026-09-18 |
| [#5281](https://github.com/ROCm/AMDMIGraphX/pull/5281) | Bump soupsieve from 2.8.4 to 2.9 in /docs/sphinx | @dependabot[bot] | open | 2026-09-18 | 2026-09-18 |
| [#5276](https://github.com/ROCm/AMDMIGraphX/pull/5276) | Fix GRU/LSTM accuracy regression in horizontal fusion | @umangyadav | open | 2026-09-17 | 2026-09-18 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | open | 2026-07-29 | 2026-09-17 |
| [#5161](https://github.com/ROCm/AMDMIGraphX/pull/5161) | Enable fp16 winograd on gfx1151 | @weizhu12-amd | open | 2026-08-21 | 2026-09-17 |
| [#5274](https://github.com/ROCm/AMDMIGraphX/pull/5274) | Winograd fp16 gfx11 | @pfultz2 | draft | 2026-09-17 | 2026-09-17 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-09-17 |
| [#5270](https://github.com/ROCm/AMDMIGraphX/pull/5270) | Cache HIP code object compilation | @dhernandez0 | open | 2026-09-16 | 2026-09-16 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-09-16 |
| [#5251](https://github.com/ROCm/AMDMIGraphX/pull/5251) | Onnxruntime Weekly Sync 2026-09-11 | @github-actions[bot] | open | 2026-09-11 | 2026-09-16 |
| [#5205](https://github.com/ROCm/AMDMIGraphX/pull/5205) | [Old method] Python and Cpp symbolic shape printing using sy... | @CharlieL7 | draft | 2026-08-27 | 2026-09-15 |
| [#5264](https://github.com/ROCm/AMDMIGraphX/pull/5264) | Opt int4 2 | @pfultz2 | draft | 2026-09-14 | 2026-09-14 |
| [#5261](https://github.com/ROCm/AMDMIGraphX/pull/5261) | gpu: opt-in GPU graph capture/replay for the async eval path... | @rlegithub | open | 2026-09-14 | 2026-09-14 |
| [#5255](https://github.com/ROCm/AMDMIGraphX/pull/5255) | fuse_attention: exclude side-input reductions from the decod... | @rlegithub | open | 2026-09-13 | 2026-09-14 |
| [#5257](https://github.com/ROCm/AMDMIGraphX/pull/5257) | cse: skip merging >64MB single-output ops | @rlegithub | open | 2026-09-13 | 2026-09-14 |
| [#5256](https://github.com/ROCm/AMDMIGraphX/pull/5256) | gpu/hip: fall back to hipHostMalloc when hipHostRegister fai... | @rlegithub | open | 2026-09-13 | 2026-09-14 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-09-10 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-09-10 |
| [#5241](https://github.com/ROCm/AMDMIGraphX/pull/5241) | Bump gitpython from 3.1.58 to 3.1.59 in /docs/sphinx | @dependabot[bot] | open | 2026-09-08 | 2026-09-09 |
| [#5232](https://github.com/ROCm/AMDMIGraphX/pull/5232) | Binary cache sql backend | @pnikolic-amd | draft | 2026-09-02 | 2026-09-04 |
| [#5236](https://github.com/ROCm/AMDMIGraphX/pull/5236) | Unify prefill and decode | @pfultz2 | draft | 2026-09-03 | 2026-09-03 |
| [#5210](https://github.com/ROCm/AMDMIGraphX/pull/5210) | Fix credential issue for performance tests | @ahsan-ca | open | 2026-08-28 | 2026-09-02 |
| [#5175](https://github.com/ROCm/AMDMIGraphX/pull/5175) | Gpu concat kernel improvements | @pfultz2 | open | 2026-08-23 | 2026-09-01 |
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | open | 2026-08-30 | 2026-09-01 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-09-01 |
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
| [#5162](https://github.com/ROCm/AMDMIGraphX/pull/5162) | Set reduction thresholds for block size and block algo | @TedThemistokleous | draft | 2026-08-21 | 2026-08-29 |
| [#5147](https://github.com/ROCm/AMDMIGraphX/pull/5147) | Common api | @pfultz2 | draft | 2026-08-17 | 2026-08-29 |
| [#5128](https://github.com/ROCm/AMDMIGraphX/pull/5128) | Split prefill/decode within single mxr | @turneram | draft | 2026-08-11 | 2026-08-29 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-29 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-08-29 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-08-29 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-08-29 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-08-29 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-08-29 |
| [#4921](https://github.com/ROCm/AMDMIGraphX/pull/4921) | tools README | @aarushjain29 | draft | 2026-05-29 | 2026-08-29 |
| [#5213](https://github.com/ROCm/AMDMIGraphX/pull/5213) | Docs: getting started and miscellaneous docs refactoring | @anisha-amd | open | 2026-08-28 | 2026-08-29 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
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
| [#5263](https://github.com/ROCm/AMDMIGraphX/pull/5263) | Revert "[ROCM-26731] Exclude external PRs from CI GitHub act... | @causten | merged | 2026-09-14 | 2026-09-16 |
| [#5190](https://github.com/ROCm/AMDMIGraphX/pull/5190) | Fix matcher `has_value` tolerance for low precision types | @CharlieL7 | merged | 2026-08-25 | 2026-09-16 |
| [#5160](https://github.com/ROCm/AMDMIGraphX/pull/5160) | Have reduce_sum, reduce_mean, and reduce_prod accumulate in ... | @CharlieL7 | merged | 2026-08-20 | 2026-09-16 |
| [#4969](https://github.com/ROCm/AMDMIGraphX/pull/4969) | [AIRADSW-567] Fix int8 models qlinearconv | @urpetkov-amd | merged | 2026-06-16 | 2026-09-16 |
| [#5267](https://github.com/ROCm/AMDMIGraphX/pull/5267) | Work around runtime bug by using `add` instead of `dot` | @justinrosner | merged | 2026-09-15 | 2026-09-16 |
| [#5193](https://github.com/ROCm/AMDMIGraphX/pull/5193) | Accuracy: Round to nearest, ties to even for `generic_float` | @CharlieL7 | merged | 2026-08-26 | 2026-09-15 |
| [#5250](https://github.com/ROCm/AMDMIGraphX/pull/5250) | [AIMIGRAPHX-1279] Skip horizontal fusion if dots are depende... | @eddieliao | merged | 2026-09-11 | 2026-09-15 |
| [#4899](https://github.com/ROCm/AMDMIGraphX/pull/4899) | Add torch kit | @pfultz2 | merged | 2026-05-20 | 2026-09-15 |
| [#4808](https://github.com/ROCm/AMDMIGraphX/pull/4808) | Enable fp16 channelwise convolution | @klin2024 | merged | 2026-04-21 | 2026-09-15 |
| [#5247](https://github.com/ROCm/AMDMIGraphX/pull/5247) | Use Python3.11 in SLES docker | @ahsan-ca | merged | 2026-09-10 | 2026-09-14 |
| [#5153](https://github.com/ROCm/AMDMIGraphX/pull/5153) | Improve find_permutation with ambiguous layouts | @pfultz2 | merged | 2026-08-18 | 2026-09-14 |
| [#5240](https://github.com/ROCm/AMDMIGraphX/pull/5240) | [ROCM-26731] Exclude external PRs from CI GitHub action | @eddieliao | merged | 2026-09-08 | 2026-09-14 |
| [#5174](https://github.com/ROCm/AMDMIGraphX/pull/5174) | [ROCM-28806] Make navi4x gemm_tune_invalid_sol_index guard v... | @eddieliao | merged | 2026-08-21 | 2026-09-14 |
| [#4727](https://github.com/ROCm/AMDMIGraphX/pull/4727) | [AIMIGRAPHX-885] Dedupilicate Gather Reads from Constant Emb... | @TedThemistokleous | merged | 2026-03-31 | 2026-09-14 |
| [#4902](https://github.com/ROCm/AMDMIGraphX/pull/4902) | Replace deprecated __hip_atomic_* builtins with __scoped_ato... | @srinivamd | merged | 2026-05-21 | 2026-09-14 |
| [#4964](https://github.com/ROCm/AMDMIGraphX/pull/4964) | Propagate the permutation for resize when using the sizes at... | @pfultz2 | merged | 2026-06-12 | 2026-09-14 |
| [#4959](https://github.com/ROCm/AMDMIGraphX/pull/4959) | [AIMIGRAPHX-1085] Add --cout option for driver output | @eddieliao | merged | 2026-06-12 | 2026-09-14 |
| [#5253](https://github.com/ROCm/AMDMIGraphX/pull/5253) | Fix unsafe MLIR split boundaries | @umangyadav | merged | 2026-09-11 | 2026-09-13 |
| [#4962](https://github.com/ROCm/AMDMIGraphX/pull/4962) | Moving RockEnums.h inside header guard | @Muhamed-Husic | merged | 2026-06-12 | 2026-09-13 |
| [#5252](https://github.com/ROCm/AMDMIGraphX/pull/5252) | Fix MLIR benchmark fill for non-packed outputs | @umangyadav | merged | 2026-09-11 | 2026-09-14 |
| [#5249](https://github.com/ROCm/AMDMIGraphX/pull/5249) | Add proper handling of prefill attributes from rocMLIR/rocml... | @justinrosner | merged | 2026-09-10 | 2026-09-13 |
| [#4832](https://github.com/ROCm/AMDMIGraphX/pull/4832) | Sym reshapes | @shivadbhavsar | merged | 2026-04-29 | 2026-09-10 |
| [#5133](https://github.com/ROCm/AMDMIGraphX/pull/5133) | Add adaptive benchmarking to MIGraphX | @justinrosner | merged | 2026-08-13 | 2026-09-10 |
| [#4806](https://github.com/ROCm/AMDMIGraphX/pull/4806) | Add fusedMatMul microsoft contrib operator | @ahsan-ca | merged | 2026-04-20 | 2026-09-10 |
| [#5189](https://github.com/ROCm/AMDMIGraphX/pull/5189) | Disable subprocess spawning during hiprtc kernel compilation | @pnikolic-amd | merged | 2026-08-25 | 2026-09-09 |
| [#5242](https://github.com/ROCm/AMDMIGraphX/pull/5242) | Bump misspell to v1.28 | @causten | merged | 2026-09-09 | 2026-09-09 |
| [#5067](https://github.com/ROCm/AMDMIGraphX/pull/5067) | [AIMIGRAPHX-1100] Add no-rebuild callback for verify | @eddieliao | merged | 2026-07-15 | 2026-09-09 |
| [#4831](https://github.com/ROCm/AMDMIGraphX/pull/4831) | Addition of AMDMLSS library's conv kernels | @Zhaeong | merged | 2026-04-29 | 2026-09-09 |
| [#4782](https://github.com/ROCm/AMDMIGraphX/pull/4782) | Add symbolic expression | @pfultz2 | merged | 2026-04-13 | 2026-09-09 |
| [#4049](https://github.com/ROCm/AMDMIGraphX/pull/4049) | Store literals in pinned memory when there isnt enough GPU m... | @pfultz2 | merged | 2025-06-03 | 2026-09-09 |
| [#5231](https://github.com/ROCm/AMDMIGraphX/pull/5231) | Bump tornado from 6.5.7 to 6.5.8 in /docs/sphinx | @dependabot[bot] | merged | 2026-09-01 | 2026-09-08 |
| [#5229](https://github.com/ROCm/AMDMIGraphX/pull/5229) | Update CHANGELOG.md with versioned 2.16 and 2.17 sections | @causten | merged | 2026-09-01 | 2026-09-08 |
| [#4742](https://github.com/ROCm/AMDMIGraphX/pull/4742) | [AIRADSW-64] Add Parser for arrayfeatureextractor Onnx op | @tamahedi | merged | 2026-04-06 | 2026-09-08 |
| [#5177](https://github.com/ROCm/AMDMIGraphX/pull/5177) | Add block batch reduce algorithm | @pfultz2 | merged | 2026-08-24 | 2026-09-08 |
| [#5150](https://github.com/ROCm/AMDMIGraphX/pull/5150) | Parse TopK with dyn slice & ONNX node UID expansion | @CharlieL7 | merged | 2026-08-18 | 2026-09-08 |
| [#4948](https://github.com/ROCm/AMDMIGraphX/pull/4948) | [AIMIGRAPHX-1081] Add Cache to instruction::eval() | @eddieliao | merged | 2026-06-08 | 2026-09-08 |
| [#4938](https://github.com/ROCm/AMDMIGraphX/pull/4938) | Remove rocm-cmake dependency in docker | @pfultz2 | merged | 2026-06-03 | 2026-09-06 |
| [#4764](https://github.com/ROCm/AMDMIGraphX/pull/4764) | Fix concat_past_present OOB write when seqlens_k is negative | @danieyan-amd | merged | 2026-04-09 | 2026-09-06 |
| [#4943](https://github.com/ROCm/AMDMIGraphX/pull/4943) | Have ONNX parser add debug symbols for literals | @CharlieL7 | merged | 2026-06-05 | 2026-09-06 |
| [#4937](https://github.com/ROCm/AMDMIGraphX/pull/4937) | [AIMIGRAPHX-1053] Show Failing Check when Exceptions are Thr... | @eddieliao | merged | 2026-06-03 | 2026-09-05 |
| [#4944](https://github.com/ROCm/AMDMIGraphX/pull/4944) | Enable comgr cache | @pfultz2 | merged | 2026-06-05 | 2026-09-05 |
| [#4942](https://github.com/ROCm/AMDMIGraphX/pull/4942) | Onnxruntime Weekly Sync 2026-06-05 | @github-actions[bot] | merged | 2026-06-05 | 2026-09-05 |
| [#4896](https://github.com/ROCm/AMDMIGraphX/pull/4896) | Sym concat slice | @shivadbhavsar | merged | 2026-05-19 | 2026-09-04 |
| [#5187](https://github.com/ROCm/AMDMIGraphX/pull/5187) | Fix seg fault when splitting non-fusible MLIR modules | @justinrosner | merged | 2026-08-24 | 2026-09-03 |
| [#4926](https://github.com/ROCm/AMDMIGraphX/pull/4926) | driver: accept legacy flat {min,max,optimals} dynamic-dimens... | @chun-wan | merged | 2026-06-01 | 2026-09-03 |
| [#4935](https://github.com/ROCm/AMDMIGraphX/pull/4935) | Add migraphx-simplify skill | @pfultz2 | merged | 2026-06-03 | 2026-09-03 |
| [#4923](https://github.com/ROCm/AMDMIGraphX/pull/4923) | preserve layouts for symbolic shapes through pointwise ops | @shivadbhavsar | merged | 2026-05-29 | 2026-09-03 |
| [#4900](https://github.com/ROCm/AMDMIGraphX/pull/4900) | [AIMIGRAPHX-1017] Remove Q/DQ for Attention Ops | @eddieliao | merged | 2026-05-20 | 2026-09-03 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-09-25T13:04:42Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5848](https://github.com/ROCm/aiter/pull/5848) | Fix the hardcoded die and CU counts in the opus kernels | @RElbers | draft | 2026-09-25 | 2026-09-25 |
| [#5761](https://github.com/ROCm/aiter/pull/5761) | [HIP] [OPUS] [JIT] Unify gfx950+gfx1250 MXFP4 MQA-logits | @shay-li77 | open | 2026-09-22 | 2026-09-25 |
| [#5461](https://github.com/ROCm/aiter/pull/5461) | [FlyDSL] One stage and two-stage ring all-reduce kernels for... | @vpietila-amd | draft | 2026-09-11 | 2026-09-25 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [MHA] Add tuned-config dispatch and an exhaustive tuner for ... | @amd-bartgips | draft | 2026-09-22 | 2026-09-25 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | Implement FlyDSL version of fused_qk_norm_mrope_3d_cache_pts... | @amd-meskelin | draft | 2026-07-24 | 2026-09-25 |
| [#5847](https://github.com/ROCm/aiter/pull/5847) | [CK] blockscale split-K: pick the pipeline from the per-spli... | @siliangchen-amd | open | 2026-09-25 | 2026-09-25 |
| [#5841](https://github.com/ROCm/aiter/pull/5841) | [tuner] Fail a task as soon as its worker process exits | @siliangchen-amd | open | 2026-09-25 | 2026-09-25 |
| [#5839](https://github.com/ROCm/aiter/pull/5839) | [Config] Add gfx942 a8w8 blockscale GEMM tunings for Qwen3/Q... | @siliangchen-amd | open | 2026-09-25 | 2026-09-25 |
| [#5721](https://github.com/ROCm/aiter/pull/5721) | [Triton/Gluon] [gfx942] Enable sparse_mla_fwd on gfx942 | @jin-amd | open | 2026-09-21 | 2026-09-25 |
| [#5798](https://github.com/ROCm/aiter/pull/5798) | [Triton/Gluon] [ASM] [HIP] Mha v4: adds bf16 sparse, LSE sup... | @jcaraban | open | 2026-09-23 | 2026-09-25 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner on gemm_moe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-09-25 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#5837](https://github.com/ROCm/aiter/pull/5837) | fix: ci comm kernel ut hang | @TennyWang1223 | open | 2026-09-25 | 2026-09-25 |
| [#5500](https://github.com/ROCm/aiter/pull/5500) | [Config] [Tune] Add GLM-5.3-Flash a8w8 blockscale fused-MoE ... | @jin-amd | open | 2026-09-14 | 2026-09-25 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [OPUS] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM... | @vedenev-amd | draft | 2026-07-07 | 2026-09-25 |
| [#5846](https://github.com/ROCm/aiter/pull/5846) | [Tuning] Share mp_tuner typed statuses and add a central tun... | @amd-bartgips | draft | 2026-09-25 | 2026-09-25 |
| [#5794](https://github.com/ROCm/aiter/pull/5794) | [ASM] [HIP] feat(fmoe): add SwiGLU OAI MXFP4 FLAT kernels fo... | @alexioslyrakis-amd | open | 2026-09-23 | 2026-09-25 |
| [#4963](https://github.com/ROCm/aiter/pull/4963) | [FlyDSL] gfx942 fp8_mqa_logits: let _auto_variant choose row... | @jin-amd | open | 2026-08-24 | 2026-09-25 |
| [#5709](https://github.com/ROCm/aiter/pull/5709) | [Triton/Gluon] [Kimi-K3] Optimize speculative KDA decode on ... | @xiaohuguo2023 | open | 2026-09-20 | 2026-09-25 |
| [#5844](https://github.com/ROCm/aiter/pull/5844) | [ASM] [HIP] [FlyDSL] Add nhead=96 and round-robin DCP to per... | @xiangM99 | open | 2026-09-25 | 2026-09-25 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [JIT] fix(jit): baton liveness is undecidable f... | @ThomasNing | open | 2026-09-03 | 2026-09-25 |
| [#5708](https://github.com/ROCm/aiter/pull/5708) | [HIP] [CK] Add relu2 (Squared ReLU) activation support to CK... | @shantipriya-amd | open | 2026-09-20 | 2026-09-25 |
| [#5834](https://github.com/ROCm/aiter/pull/5834) | [Triton/Gluon] Add paged mxfp4 Gluon kernel with sparsity su... | @cagrikymk | open | 2026-09-25 | 2026-09-25 |
| [#5682](https://github.com/ROCm/aiter/pull/5682) | [FlyDSL] fp8_mqa_logits: raise the split oversubscription ta... | @akii96 | open | 2026-09-19 | 2026-09-25 |
| [#5677](https://github.com/ROCm/aiter/pull/5677) | [FlyDSL] Adaptive decode Top-K kernel, dispatched by one mea... | @JH-Leon-KIM-AMD | draft | 2026-09-18 | 2026-09-25 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-09-25 |
| [#5825](https://github.com/ROCm/aiter/pull/5825) | [FlyDSL] Opt-in gfx942 SiLU A16W4 support and DSv4.1 Flash t... | @frida-andersson | draft | 2026-09-24 | 2026-09-25 |
| [#5836](https://github.com/ROCm/aiter/pull/5836) | [Config] Add Qwen3.8-27B gfx950 A4W4 GDN BA projection shape... | @vorapolsiloai | open | 2026-09-25 | 2026-09-25 |
| [#5832](https://github.com/ROCm/aiter/pull/5832) | [Triton/Gluon] [Perf] MXFP8 MoE: keep the MFMA in FP8 when M... | @akii96 | open | 2026-09-25 | 2026-09-25 |
| [#5831](https://github.com/ROCm/aiter/pull/5831) | [Triton/Gluon] [fix] moe_gemm_mxfp8: zero-init output, graph... | @akii96 | open | 2026-09-25 | 2026-09-25 |
| [#5538](https://github.com/ROCm/aiter/pull/5538) | [Triton/Gluon] [Kernel] Add packed FP4 logical transpose | @DaiXindi-AMD | open | 2026-09-15 | 2026-09-25 |
| [#5835](https://github.com/ROCm/aiter/pull/5835) | [Config][Perf] Add tuned bf16 GEMM configs for Qwen3.8-2.4T-... | @mjkvaak-amd | open | 2026-09-25 | 2026-09-25 |
| [#5833](https://github.com/ROCm/aiter/pull/5833) | [Triton/Gluon] Sparse MLA Improvements and Hardened Invalid ... | @cagrikymk | open | 2026-09-25 | 2026-09-25 |
| [#5606](https://github.com/ROCm/aiter/pull/5606) | [Triton/Gluon] Add fused Qwen3-Next GDN prefill (gfx950 Gluo... | @karverma-amd | open | 2026-09-17 | 2026-09-25 |
| [#5824](https://github.com/ROCm/aiter/pull/5824) | [Triton/Gluon] [gfx950] [dsv4.1-flash] mHC fused kernel | @ahmed-bsod | open | 2026-09-24 | 2026-09-25 |
| [#5470](https://github.com/ROCm/aiter/pull/5470) | [Triton/Gluon] [gfx1151] Enable unshuffled MXFP4 GEMM | @JeremiahM37 | open | 2026-09-11 | 2026-09-25 |
| [#5830](https://github.com/ROCm/aiter/pull/5830) | [Triton/Gluon] gfx950: tuned defaults for gemm_a16w16, gmm, ... | @NimitPtl | open | 2026-09-25 | 2026-09-25 |
| [#5828](https://github.com/ROCm/aiter/pull/5828) | [Triton/Gluon] [Config] Add gfx1250 gluon a16w16 config for ... | @karverma-amd | open | 2026-09-24 | 2026-09-25 |
| [#5686](https://github.com/ROCm/aiter/pull/5686) | [HIP] [FlyDSL] [JIT] [WIP] Feat/topk per row gfx950 | @MHYangAMD | open | 2026-09-19 | 2026-09-25 |
| [#5783](https://github.com/ROCm/aiter/pull/5783) | [Config] Tune a8w8 bpreshuffle for Kimi-K3's KDA gate at tp4 | @XiaobingSuper | draft | 2026-09-23 | 2026-09-25 |
| [#4383](https://github.com/ROCm/aiter/pull/4383) | [Triton/Gluon] Add gluon support for MXFP4 and MXFP8 quant k... | @NimitPtl | open | 2026-07-24 | 2026-09-25 |
| [#5640](https://github.com/ROCm/aiter/pull/5640) | [Triton/Gluon] Add Triton-based Conv3D kernels | @saeid-rostami | open | 2026-09-17 | 2026-09-25 |
| [#4894](https://github.com/ROCm/aiter/pull/4894) | [Triton/Gluon] Add gluon support for MXFP4 and MXFP8 quant k... | @NimitPtl | open | 2026-08-21 | 2026-09-25 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-09-24 |
| [#5648](https://github.com/ROCm/aiter/pull/5648) | [Triton/Gluon] [Bugfix][MLA] Mask the >2GB global_load path ... | @Rohan138 | open | 2026-09-17 | 2026-09-24 |
| [#5800](https://github.com/ROCm/aiter/pull/5800) | fix gluon import and benchmark + tune fused_clamp_act_mul fo... | @nidal567 | open | 2026-09-23 | 2026-09-24 |
| [#4584](https://github.com/ROCm/aiter/pull/4584) | [Triton/Gluon] Fused Gluon KDA decode path (950/1250) | @omuhamma | open | 2026-08-06 | 2026-09-24 |
| [#5790](https://github.com/ROCm/aiter/pull/5790) | [Triton/Gluon] [Config] Tune gfx1201 unified attention 2d fo... | @GodRishUniverse | draft | 2026-09-23 | 2026-09-24 |
| [#5557](https://github.com/ROCm/aiter/pull/5557) | [Triton/Gluon] [Config] Gfx1151 blockscale tuned jsons | @keneoneth | open | 2026-09-15 | 2026-09-24 |
| [#5771](https://github.com/ROCm/aiter/pull/5771) | [Triton/Gluon] Assert SPLIT_UNMASKED_LOOP is not used with s... | @amd-xavierwang | open | 2026-09-22 | 2026-09-24 |
| [#5650](https://github.com/ROCm/aiter/pull/5650) | [Triton/Gluon] gfx942: dtype-split large-prefill attn_2d ent... | @mustafayildirim | open | 2026-09-18 | 2026-09-24 |
| [#5745](https://github.com/ROCm/aiter/pull/5745) | [HIP] Guard GroupNorm vectorization at channel boundaries | @UD-mmcminn | open | 2026-09-22 | 2026-09-24 |
| [#5799](https://github.com/ROCm/aiter/pull/5799) | [CustomAllreduce] Re-take the expandable_segments decision a... | @okorzh-amd | open | 2026-09-23 | 2026-09-24 |
| [#5355](https://github.com/ROCm/aiter/pull/5355) | [Triton/Gluon] Gluon MoE A16W4 gfx950 kernels | @rahulbatra85 | open | 2026-09-08 | 2026-09-24 |
| [#5802](https://github.com/ROCm/aiter/pull/5802) | [FlyDSL] [Bugfix] Route a16w4 SiLU MoE to CK-Tile and apply ... | @kevin-mii | open | 2026-09-24 | 2026-09-24 |
| [#5294](https://github.com/ROCm/aiter/pull/5294) | [Triton/Gluon] [gfx950] pa_decode_sparse: pick BLOCK_K by oc... | @stefanskiasan | open | 2026-09-05 | 2026-09-24 |
| [#5807](https://github.com/ROCm/aiter/pull/5807) | [HIP] [Perf] Specialize partial tiles in two-stage custom al... | @AndreasKaratzas | open | 2026-09-24 | 2026-09-24 |
| [#5822](https://github.com/ROCm/aiter/pull/5822) | [Triton/Gluon] [HIP] [JIT] Add opt-in M3 sequence-parallel c... | @whx-sjtu | open | 2026-09-24 | 2026-09-24 |
| [#5520](https://github.com/ROCm/aiter/pull/5520) | [Triton/Gluon] Fused Qwen3-Next GDN decode op for gfx950 | @rbrugaro-amd | open | 2026-09-15 | 2026-09-24 |
| [#5720](https://github.com/ROCm/aiter/pull/5720) | [HIP] [JIT] build: add gfx908 target metadata and GEMM defau... | @UD-mmcminn | open | 2026-09-21 | 2026-09-24 |
| [#5392](https://github.com/ROCm/aiter/pull/5392) | [HIP] Optional sigmoid on gated_rmsnorm_fp8_per_token_quant | @rebklee | open | 2026-09-10 | 2026-09-24 |
| [#5669](https://github.com/ROCm/aiter/pull/5669) | [Triton/Gluon] [Config] triton: add Qwen3.8-27B MXFP4 GDN in... | @abrahamzewoudie | open | 2026-09-18 | 2026-09-24 |
| [#5157](https://github.com/ROCm/aiter/pull/5157) | [Triton/Gluon] unified_attention: split the straggler genera... | @alexnails | open | 2026-09-01 | 2026-09-24 |
| [#5158](https://github.com/ROCm/aiter/pull/5158) | [Triton/Gluon] unified_attention: restructure the 2-D prefil... | @alexnails | open | 2026-09-01 | 2026-09-24 |
| [#5140](https://github.com/ROCm/aiter/pull/5140) | [HIP] [JIT] Add optimized FlashKDA prefill kernels for gfx95... | @jayzlee147 | open | 2026-08-31 | 2026-09-24 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-09-24 |
| [#5182](https://github.com/ROCm/aiter/pull/5182) | [JIT] Identify MI350P, and stop hardcoding the XCD count | @RElbers | open | 2026-09-01 | 2026-09-24 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | [Triton/Gluon] [HIP] [JIT] Add Windows support | @0xDELUXA | open | 2026-04-11 | 2026-09-24 |
| [#5004](https://github.com/ROCm/aiter/pull/5004) | [Triton/Gluon] [Perf] Optimize live-window unified-attention... | @andyluo7 | open | 2026-08-26 | 2026-09-24 |
| [#4968](https://github.com/ROCm/aiter/pull/4968) | [Triton/Gluon] [PA] Support Q/K D192 with asymmetric K/V hea... | @sammysun0711 | open | 2026-08-24 | 2026-09-24 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-09-24 |
| [#4687](https://github.com/ROCm/aiter/pull/4687) | [Triton/Gluon] [gfx1250] fp8_mqa_logits: fix epilogue store ... | @lijinpei-amd | open | 2026-08-11 | 2026-09-24 |
| [#5218](https://github.com/ROCm/aiter/pull/5218) | [Triton/Gluon] [BENCHMARK] Adding utility function for torch... | @cagrikymk | open | 2026-09-02 | 2026-09-24 |
| [#5657](https://github.com/ROCm/aiter/pull/5657) | [Config] Add DeepSeek-V4-Flash GEMM configs for gfx950 | @amd-pedghazi | open | 2026-09-18 | 2026-09-24 |
| [#5320](https://github.com/ROCm/aiter/pull/5320) | [Triton/Gluon] Fix int32 overflow in _gluon_deepgemm_fp8_pag... | @wufann | open | 2026-09-08 | 2026-09-24 |
| [#5321](https://github.com/ROCm/aiter/pull/5321) | [Triton/Gluon] [Kimi-K3][ROCm] Add merged MoE front | @jiacao-amd | open | 2026-09-08 | 2026-09-24 |
| [#5333](https://github.com/ROCm/aiter/pull/5333) | [Triton/Gluon] [tune][gfx1100] | @jasberc | open | 2026-09-08 | 2026-09-24 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-09-24 |
| [#5478](https://github.com/ROCm/aiter/pull/5478) | [Triton/Gluon] [Attention] Add overflow-guarded per-call int... | @AranKomat | open | 2026-09-13 | 2026-09-24 |
| [#5399](https://github.com/ROCm/aiter/pull/5399) | [Triton/Gluon] [gfx950] Fix ff_a16w16_fused M<=8 launch fail... | @yuyzhang512 | open | 2026-09-10 | 2026-09-24 |
| [#5409](https://github.com/ROCm/aiter/pull/5409) | [Triton/Gluon] Unified attention: opt-in prefill configs for... | @cpersson-amd | open | 2026-09-10 | 2026-09-24 |
| [#5432](https://github.com/ROCm/aiter/pull/5432) | [Triton/Gluon] [Config] [GFX950] Unified Attention configs t... | @leonling-ll | open | 2026-09-11 | 2026-09-24 |
| [#5542](https://github.com/ROCm/aiter/pull/5542) | [Triton/Gluon] [Kernel] Add fused SiLU-and-multiply backward | @DaiXindi-AMD | open | 2026-09-15 | 2026-09-24 |
| [#5577](https://github.com/ROCm/aiter/pull/5577) | [Triton/Gluon] Add FP8 Flash Attention v2 kernel (gfx942/gfx... | @WuLei-AMD | open | 2026-09-16 | 2026-09-24 |
| [#5578](https://github.com/ROCm/aiter/pull/5578) | [Triton/Gluon] Add MXFP8 Flash Attention v2 (gfx950 / CDNA4) | @WuLei-AMD | open | 2026-09-16 | 2026-09-24 |
| [#5598](https://github.com/ROCm/aiter/pull/5598) | [Triton/Gluon] [Config] Enable unified-attention skip-mask f... | @vorapolsiloai | open | 2026-09-16 | 2026-09-24 |
| [#5600](https://github.com/ROCm/aiter/pull/5600) | [Triton/Gluon] fix(gluon): two-step addressing in paged MQA ... | @fallow5 | open | 2026-09-16 | 2026-09-24 |
| [#5601](https://github.com/ROCm/aiter/pull/5601) | [Triton/Gluon] [Config] gfx1151 gemma4 attn prefill tuning | @amd-xavierwang | open | 2026-09-16 | 2026-09-24 |
| [#5614](https://github.com/ROCm/aiter/pull/5614) | [Triton/Gluon] [Bugfix] [Perf] Fix non-preshuffle MQA paging... | @zhiding512 | open | 2026-09-17 | 2026-09-24 |
| [#5821](https://github.com/ROCm/aiter/pull/5821) | [DSv4] Tuned decode moe kernels for mori-EP backend- #41119 | @heachary | draft | 2026-09-24 | 2026-09-24 |
| [#5431](https://github.com/ROCm/aiter/pull/5431) | [HIP] feat(custom_ar): add torch.symm_mem transport(mori) fo... | @kawhil-amd | open | 2026-09-11 | 2026-09-24 |
| [#5820](https://github.com/ROCm/aiter/pull/5820) | [FlyDSL] [gfx950] Qwen3.8 kernels | @amd-nprotaso | open | 2026-09-24 | 2026-09-24 |
| [#5786](https://github.com/ROCm/aiter/pull/5786) | [JIT] [Build] Make CK fmha kernel generation follow GPU_ARCH... | @qiangpan2 | open | 2026-09-23 | 2026-09-24 |
| [#5805](https://github.com/ROCm/aiter/pull/5805) | [OPUS] Speed up the gfx1250 32mx1 MLA sparse-prefill kernels | @kaiyang-1 | open | 2026-09-24 | 2026-09-24 |
| [#5759](https://github.com/ROCm/aiter/pull/5759) | [Bugfix][MLA] Size PS prefill partial buffers from the real ... | @simondanielsson | open | 2026-09-22 | 2026-09-24 |
| [#5482](https://github.com/ROCm/aiter/pull/5482) | [FlyDSL] optimize mxfp4 moe kernels perf | @binding7012 | open | 2026-09-13 | 2026-09-24 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-09-24 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-09-24 |
| [#5818](https://github.com/ROCm/aiter/pull/5818) | [gfx1250][HIP] implement fused m32k4 shuffle quant for ASM a... | @aoli26 | open | 2026-09-24 | 2026-09-24 |
| [#5692](https://github.com/ROCm/aiter/pull/5692) | [Triton/Gluon] [ASM] [HIP] Chefang/fix pa gqa16 short tail p... | @fangche123 | open | 2026-09-20 | 2026-09-24 |
| [#5211](https://github.com/ROCm/aiter/pull/5211) | [ASM] [HIP] fix(mla): mark bf16 mla_pfl prefill CSV/lookup a... | @amd-yashagar | open | 2026-09-02 | 2026-09-24 |
| [#5817](https://github.com/ROCm/aiter/pull/5817) | Feature/minimax m3 mxfp8 | @amd-yashagar | draft | 2026-09-24 | 2026-09-24 |
| [#5809](https://github.com/ROCm/aiter/pull/5809) | [FlyDSL] Refactor PA decode and load CSV tuning results | @fsx950223 | open | 2026-09-24 | 2026-09-24 |
| [#5652](https://github.com/ROCm/aiter/pull/5652) | [HIP] [Perf] Fold shared-expert gate GEMV into topk_softmax ... | @Emmanuel0612 | open | 2026-09-18 | 2026-09-24 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [KIMI-K3] Enable KDA per-channel decay gate in FlyD... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-09-24 |
| [#5815](https://github.com/ROCm/aiter/pull/5815) | Add FlyDSL fused intranode all-to-all for Ulysses sequence-p... | @johannes-graner | draft | 2026-09-24 | 2026-09-24 |
| [#5812](https://github.com/ROCm/aiter/pull/5812) | [FlyDSL] Add scatter epilog to layout-v2 GEMM2 (persist-flat... | @charlieguo1106 | draft | 2026-09-24 | 2026-09-24 |
| [#5811](https://github.com/ROCm/aiter/pull/5811) | [ASM] [HIP] [gfx1250] mla qh32 decode ams kernel version3 | @feifei14119 | open | 2026-09-24 | 2026-09-24 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-09-24 |
| [#5196](https://github.com/ROCm/aiter/pull/5196) | [gfx1250] mla qh32 decode ams kernel version1 | @feifei14119 | open | 2026-09-02 | 2026-09-24 |
| [#5808](https://github.com/ROCm/aiter/pull/5808) | [ASM] [gfx1250] mla qh32 decode ams kernel version2 | @feifei14119 | open | 2026-09-24 | 2026-09-24 |
| [#5810](https://github.com/ROCm/aiter/pull/5810) | [FlyDSL] feat(mega_moe/gfx1250): bind mori tokoff-ext alloca... | @jhchouuu | open | 2026-09-24 | 2026-09-24 |
| [#5788](https://github.com/ROCm/aiter/pull/5788) | [HIP] [JIT] Topk index score minimax m3 | @demonsan | open | 2026-09-23 | 2026-09-24 |
| [#5693](https://github.com/ROCm/aiter/pull/5693) | [FlyDSL] [MoE] Add herd_fused_topk drop-in selector for fuse... | @charlieguo1106 | open | 2026-09-20 | 2026-09-24 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-09-24 |
| [#5398](https://github.com/ROCm/aiter/pull/5398) | [CK] [FlyDSL] Split layout-v2 MoE GEMM2 into mxmoe_g2 and ad... | @charlieguo1106 | open | 2026-09-10 | 2026-09-24 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-09-24 |
| [#5725](https://github.com/ROCm/aiter/pull/5725) | [Triton/Gluon] Add SonicMoE pure-Triton grouped GEMM MoE | @WuLei-AMD | open | 2026-09-21 | 2026-09-24 |
| [#5804](https://github.com/ROCm/aiter/pull/5804) | [FlyDSL] fix(flydsl): support kmk3 ep moe & opt for ep moe g... | @Bernard-Liu | open | 2026-09-24 | 2026-09-24 |
| [#5560](https://github.com/ROCm/aiter/pull/5560) | [CI] Assign a PR to everyone who committed to it | @Boss2002n | open | 2026-09-15 | 2026-09-24 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-09-24 |
| [#5803](https://github.com/ROCm/aiter/pull/5803) | review-pr: 40min agent timeout + retry only transient failur... | @zufayu | open | 2026-09-24 | 2026-09-24 |
| [#5678](https://github.com/ROCm/aiter/pull/5678) | [HIP] [OPUS] [JIT] Add GPT-OSS IQ2R 2-bit MoE support | @ssharma4-amd | open | 2026-09-18 | 2026-09-24 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-09-24 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-09-24 |
| [#5784](https://github.com/ROCm/aiter/pull/5784) | [CI] Enable DeepSeek-V4-Pro 2P1D TP8 ATOM DI smoke cases | @avininjamay8 | open | 2026-09-23 | 2026-09-24 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-09-24 |
| [#5763](https://github.com/ROCm/aiter/pull/5763) | Add gfx950 MXFP4 SiTUv2 FLAT 16x192/16x32 kernels and KK3 fa... | @JohnNikolay84 | draft | 2026-09-22 | 2026-09-24 |
| [#5429](https://github.com/ROCm/aiter/pull/5429) | [Triton/Gluon] Keep padded V heads and d_v<=16 off the num_s... | @Boss2002n | open | 2026-09-11 | 2026-09-23 |
| [#5795](https://github.com/ROCm/aiter/pull/5795) | [CK] [FlyDSL] [CI] Refactor MI308 MoE kernels and enable com... | @luocheng25 | draft | 2026-09-23 | 2026-09-23 |
| [#5621](https://github.com/ROCm/aiter/pull/5621) | [Triton/Gluon] Tune gfx950 FP8 MQA prefill dispatch | @qilihuan | open | 2026-09-17 | 2026-09-23 |
| [#5624](https://github.com/ROCm/aiter/pull/5624) | [Triton/Gluon] Accept strided leading dimensions in GDN L2No... | @vorapolsiloai | open | 2026-09-17 | 2026-09-23 |
| [#5637](https://github.com/ROCm/aiter/pull/5637) | [Triton/Gluon] Add gfx1250 per-tensor FP8 MHA prefill | @Yu-Zhewen | open | 2026-09-17 | 2026-09-23 |
| [#5663](https://github.com/ROCm/aiter/pull/5663) | [Triton/Gluon] Fix fp8 KV correctness reference in bench_uni... | @mpashkovskii | open | 2026-09-18 | 2026-09-23 |
| [#5667](https://github.com/ROCm/aiter/pull/5667) | [Triton/Gluon] Add a16w4 MoE tuned dispatch and gfx942 DSv4.... | @akii96 | open | 2026-09-18 | 2026-09-23 |
| [#5647](https://github.com/ROCm/aiter/pull/5647) | [Triton/Gluon] drop stale use_aot flag from bench_gemm_afp4w... | @matthiasdiener | open | 2026-09-17 | 2026-09-23 |
| [#4493](https://github.com/ROCm/aiter/pull/4493) | [Triton/Gluon] [Config] Add a tuned gfx1101 MHA config, spli... | @Ragua1 | open | 2026-07-31 | 2026-09-23 |
| [#4614](https://github.com/ROCm/aiter/pull/4614) | [Triton/Gluon] [GFX950] Add Unified Attention Gluon Kernel | @cagrikymk | open | 2026-08-06 | 2026-09-23 |
| [#4645](https://github.com/ROCm/aiter/pull/4645) | [Triton/Gluon] [MHA][gfx942] Add FP8 D192/V128 prefill | @maeehart | open | 2026-08-09 | 2026-09-23 |
| [#4685](https://github.com/ROCm/aiter/pull/4685) | [Triton/Gluon] batched_gemm_a16wfp4: ragged-K regression tes... | @lijinpei-amd | open | 2026-08-11 | 2026-09-23 |
| [#5754](https://github.com/ROCm/aiter/pull/5754) | [Triton/Gluon] FlashKDA in-kernel paged state_cache I/O | @Liang-jianhao97 | open | 2026-09-22 | 2026-09-23 |
| [#5736](https://github.com/ROCm/aiter/pull/5736) | [Triton/Gluon] [gfx950] pa_decode_sparse: bound split-K by w... | @tianxiaojiang4 | open | 2026-09-21 | 2026-09-23 |
| [#5774](https://github.com/ROCm/aiter/pull/5774) | [Triton/Gluon] Add rotating-buffer GEMM A16W16 benchmark | @dyokelso | open | 2026-09-23 | 2026-09-23 |
| [#5793](https://github.com/ROCm/aiter/pull/5793) | [Triton/Gluon] [fix] Triton FA decode: bound K/V loads in no... | @amd-maradosa | open | 2026-09-23 | 2026-09-23 |
| [#5510](https://github.com/ROCm/aiter/pull/5510) | [Triton/Gluon] [FlyDSL] [GDN] Segmented affine-scan K5 for l... | @mjkvaak-amd | open | 2026-09-14 | 2026-09-23 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | [FlyDSL] gfx1201 (RDNA4) FlyDSL BF16 attention optimizations... | @pds-amd | open | 2026-07-10 | 2026-09-23 |
| [#5059](https://github.com/ROCm/aiter/pull/5059) | [CI] [JIT] Add gfx1201 BF16 G1U1 selected large-M Triton MoE... | @keneoneth | open | 2026-08-27 | 2026-09-23 |
| [#5704](https://github.com/ROCm/aiter/pull/5704) | [FlyDSL] [CI] [gfx1250] stage1 fused for mega-moe EP | @XingerZhu | open | 2026-09-20 | 2026-09-23 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] Add MHA forward tuning scripts and kernel-info du... | @huishi-hs | open | 2026-08-26 | 2026-09-23 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [JIT] [gfx942] Optimize long-context FMHA with s... | @amd-yashagar | open | 2026-09-16 | 2026-09-23 |
| [#5585](https://github.com/ROCm/aiter/pull/5585) | [Config] Add Qwen3.8-27B TP1 a8w8 blockscale GEMM tunings fo... | @phambinhfin | open | 2026-09-16 | 2026-09-23 |
| [#5670](https://github.com/ROCm/aiter/pull/5670) | [FlyDSL] Fused all-reduce + RMSNorm | @vpietila-amd | draft | 2026-09-18 | 2026-09-23 |
| [#5153](https://github.com/ROCm/aiter/pull/5153) | [Triton/Gluon][GFX950] Productize gluon mha kernel from GFX9... | @leonling-ll | draft | 2026-08-31 | 2026-09-23 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | [FlyDSL] Paged mla indexer | @fhuizing | open | 2026-07-13 | 2026-09-23 |
| [#5634](https://github.com/ROCm/aiter/pull/5634) | [CI] Enable MiniMax-M3 MXFP8 2P1D TP8 ATOM DI CI use cases | @avininjamay8 | open | 2026-09-17 | 2026-09-23 |
| [#5782](https://github.com/ROCm/aiter/pull/5782) | Fp8 mqa logits gfx950 dsa tune | @EricKing626 | draft | 2026-09-23 | 2026-09-23 |
| [#5715](https://github.com/ROCm/aiter/pull/5715) | [Triton/Gluon] [CI] [Kernel] Gluon paged-decode attention wi... | @rbrugaro-amd | open | 2026-09-21 | 2026-09-23 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-09-23 |
| [#5744](https://github.com/ROCm/aiter/pull/5744) | [FlyDSL] [AMD][MoE] Avoid layout-v2 stage2 and over-padded t... | @karverma-amd | open | 2026-09-22 | 2026-09-23 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-09-23 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-09-23 |
| [#5753](https://github.com/ROCm/aiter/pull/5753) | [CI] CI: extend ATOM watchdog for AITER JIT | @gyohuangxin | open | 2026-09-22 | 2026-09-23 |
| [#5764](https://github.com/ROCm/aiter/pull/5764) | WORKAROUND - fix a1_scale out-of-bounds read in fmoe_fp8_blo... | @afriedri | open | 2026-09-22 | 2026-09-23 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-09-23 |
| [#5773](https://github.com/ROCm/aiter/pull/5773) | [SMI] Add opt-in summary plots and raw-sample timelines | @arakowsk-amd | open | 2026-09-22 | 2026-09-23 |
| [#5775](https://github.com/ROCm/aiter/pull/5775) | fix(custom_all_reduce): send the real IPC offset instead of ... | @zhou9402 | draft | 2026-09-23 | 2026-09-23 |
| [#5544](https://github.com/ROCm/aiter/pull/5544) | [ASM] [CI] Remove committed scratch files and stop two from ... | @Boss2002n | open | 2026-09-15 | 2026-09-23 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-09-23 |
| [#5728](https://github.com/ROCm/aiter/pull/5728) | [HIP] [FlyDSL] [JIT] Add plain GLM-5.3 IQ2R 2-bit MoE suppor... | @ssharma4-amd | draft | 2026-09-21 | 2026-09-23 |
| [#5642](https://github.com/ROCm/aiter/pull/5642) | [HIP] [Bugfix] paged_attention_ragged: scale FP8 softmax pro... | @rbrugaro-amd | open | 2026-09-17 | 2026-09-22 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
| [#5340](https://github.com/ROCm/aiter/pull/5340) | [HIP] [CI] [JIT] [Feature] Add gfx:cu_num build targets so o... | @RElbers | open | 2026-09-08 | 2026-09-22 |
| [#5342](https://github.com/ROCm/aiter/pull/5342) | [FlyDSL] [Feature] Precompile only the GEMM kernels the whee... | @RElbers | open | 2026-09-08 | 2026-09-22 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-09-22 |
| [#5757](https://github.com/ROCm/aiter/pull/5757) | Qwe38 flash mxfp4 asm | @JohnNikolay84 | draft | 2026-09-22 | 2026-09-22 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-09-22 |
| [#5540](https://github.com/ROCm/aiter/pull/5540) | [CI] Add stale pull request and stale branch cleanup | @Boss2002n | open | 2026-09-15 | 2026-09-22 |
| [#5617](https://github.com/ROCm/aiter/pull/5617) | [CI] Satya/stale branch archive | @Boss2002n | open | 2026-09-17 | 2026-09-22 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | Add adaptive-blocked K5 prefill h-recurrence in GDN | @johannes-graner | draft | 2026-09-21 | 2026-09-22 |
| [#5230](https://github.com/ROCm/aiter/pull/5230) | [Triton/Gluon] Add 3D neighborhood flash attention (na3d_fla... | @jjuvonen-amd | open | 2026-09-03 | 2026-09-22 |
| [#5733](https://github.com/ROCm/aiter/pull/5733) | [HIP] [OPUS] [JIT] Revert " [GFX950]OPUS PA MQA Logits MXFP4... | @junhaha666 | open | 2026-09-21 | 2026-09-22 |
| [#5605](https://github.com/ROCm/aiter/pull/5605) | [Build] prebuild: add the missing nmask/nlse bf16 mha_varlen... | @Arist12 | open | 2026-09-16 | 2026-09-21 |
| [#5645](https://github.com/ROCm/aiter/pull/5645) | [CI] Remove stale `rocm/vllm-dev:nightly` image | @micah-wil | open | 2026-09-17 | 2026-09-21 |
| [#4808](https://github.com/ROCm/aiter/pull/4808) | [CI] Triton tests selection script | @Boss2002n | open | 2026-08-17 | 2026-09-21 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-09-21 |
| [#5555](https://github.com/ROCm/aiter/pull/5555) | [FlyDSL] Add QuickAllReduce INT6 and INT5 | @msaffari-amd | draft | 2026-09-15 | 2026-09-21 |
| [#5730](https://github.com/ROCm/aiter/pull/5730) | docs: Copilot FlyDSL path instructions and review-pr C5 | @samremes | draft | 2026-09-21 | 2026-09-21 |
| [#5727](https://github.com/ROCm/aiter/pull/5727) | [WIP] Add MoonEP prefill and decode planning policies | @JiaoliangYu | draft | 2026-09-21 | 2026-09-21 |
| [#5688](https://github.com/ROCm/aiter/pull/5688) | [Config] configs(glm5.2): o_proj switches to CK Tile at M=10... | @ThomasNing | open | 2026-09-19 | 2026-09-21 |
| [#5404](https://github.com/ROCm/aiter/pull/5404) | [CK] [FlyDSL] [Perf] Add BM16 SwiGLU path for MiniMax M3 | @XiaobingSuper | draft | 2026-09-10 | 2026-09-21 |
| [#5719](https://github.com/ROCm/aiter/pull/5719) | [HIP] [JIT] [Build] Add GLM-5.3-Flash IQ2R 2-bit MoE support | @ssharma4-amd | draft | 2026-09-21 | 2026-09-21 |
| [#4951](https://github.com/ROCm/aiter/pull/4951) | [CK] [FlyDSL] [JIT] add mxfp8 a8w8 blockscale for gfx950 | @solinzby1 | open | 2026-08-24 | 2026-09-21 |
| [#5626](https://github.com/ROCm/aiter/pull/5626) | [FlyDSL] M3 index score flydsl | @ganyi1996ppo | open | 2026-09-17 | 2026-09-21 |
| [#5701](https://github.com/ROCm/aiter/pull/5701) | [Config] [GFX1250][Moe] ep8 tuned config setup | @Zzz9990 | open | 2026-09-20 | 2026-09-21 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | [HIP] [CK] [JIT] torch-free a4w4 GEMM + C++ library build | @Micky774 | open | 2026-07-07 | 2026-09-21 |
| [#5518](https://github.com/ROCm/aiter/pull/5518) | [FlyDSL] [gfx950] Add explicit page strides and 64-bit rebas... | @LiuYinfeng01 | open | 2026-09-15 | 2026-09-21 |
| [#5301](https://github.com/ROCm/aiter/pull/5301) | [FlyDSL] [Kernel] gfx950 FP8 sparse MLA prefill and decode (... | @JohnQinAMD | open | 2026-09-07 | 2026-09-21 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables + fix MXFP4 aux... | @JiaoliangYu | draft | 2026-09-20 | 2026-09-20 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | open | 2026-09-18 | 2026-09-20 |
| [#5685](https://github.com/ROCm/aiter/pull/5685) | [CI] Add PRs to the AITER-triton Kernels board without relyi... | @Boss2002n | open | 2026-09-19 | 2026-09-20 |
| [#5687](https://github.com/ROCm/aiter/pull/5687) | [CI] Fix Flash Attention CI failures | @micmelesse | draft | 2026-09-19 | 2026-09-19 |
| [#5570](https://github.com/ROCm/aiter/pull/5570) | [CI] Satya/aiter reorg 3 infra | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5569](https://github.com/ROCm/aiter/pull/5569) | [CI] Satya/aiter reorg 2 fix import | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5568](https://github.com/ROCm/aiter/pull/5568) | [CI] Collect aiter tests recursively, excluding the other su... | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5567](https://github.com/ROCm/aiter/pull/5567) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 7 rest | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5566](https://github.com/ROCm/aiter/pull/5566) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 6 moe fusions g... | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5565](https://github.com/ROCm/aiter/pull/5565) | [Triton/Gluon] [ASM] [HIP] Satya/aiter reorg 5 attention | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#5564](https://github.com/ROCm/aiter/pull/5564) | [Triton/Gluon] [HIP] [CI] Satya/aiter reorg 4 gemm topk | @Boss2002n | draft | 2026-09-16 | 2026-09-19 |
| [#4399](https://github.com/ROCm/aiter/pull/4399) | Satya/gfx12 mxfp4 gemm | @Boss2002n | draft | 2026-07-27 | 2026-09-19 |
| [#5625](https://github.com/ROCm/aiter/pull/5625) | [Config] [tuning] Add DSv4 a4w4 fused-MoE tuning tables for ... | @JiaoliangYu | draft | 2026-09-17 | 2026-09-19 |
| [#5671](https://github.com/ROCm/aiter/pull/5671) | [HIP] perf(biased_grouped_topk): batch router loads, cheapen... | @jamesbowley | open | 2026-09-18 | 2026-09-18 |
| [#5675](https://github.com/ROCm/aiter/pull/5675) | [Triton] gfx942: fix head_size>=512 decode KV over-segmentat... | @mpashkovskii | draft | 2026-09-18 | 2026-09-18 |
| [#5668](https://github.com/ROCm/aiter/pull/5668) | [OPUS] Key the MXFP8 BMM tuned lookup on cu_num | @RElbers | open | 2026-09-18 | 2026-09-18 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-09-18 |
| [#5593](https://github.com/ROCm/aiter/pull/5593) | [ASM] [HIP] [OPUS] Chefang/pa decode opus latest | @fangche123 | open | 2026-09-16 | 2026-09-18 |
| [#5665](https://github.com/ROCm/aiter/pull/5665) | [Triton] Account for sliding_window in bench_unified_attenti... | @mpashkovskii | draft | 2026-09-18 | 2026-09-18 |
| [#5664](https://github.com/ROCm/aiter/pull/5664) | [Triton] Tune unified attention configs for Gemma-4 on gfx94... | @mpashkovskii | draft | 2026-09-18 | 2026-09-18 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-09-18 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-09-18 |
| [#5242](https://github.com/ROCm/aiter/pull/5242) | [WIP] TP MOE fusion | @charlieguo1106 | draft | 2026-09-03 | 2026-09-18 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-09-18 |
| [#5191](https://github.com/ROCm/aiter/pull/5191) | [HIP] fix(sampling): drop unused out_idx workspace in topk_r... | @peizhang56 | open | 2026-09-01 | 2026-09-17 |
| [#5315](https://github.com/ROCm/aiter/pull/5315) | [CK] [FlyDSL] [CI] [Bugfix] Explicit gfx in shipped fused-Mo... | @amd-bartgips | open | 2026-09-07 | 2026-09-17 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-09-17 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-09-17 |
| [#5532](https://github.com/ROCm/aiter/pull/5532) | Add --fused-expert option to 2stage moe tests | @JohnNikolay84 | open | 2026-09-15 | 2026-09-17 |
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
| [#5002](https://github.com/ROCm/aiter/pull/5002) | [ROCm] Add fused Q/K norm, RoPE, gate, and FP8 quantization | @nholmber | draft | 2026-08-26 | 2026-09-17 |
| [#5549](https://github.com/ROCm/aiter/pull/5549) | [CK] [FlyDSL] [FMoE] Enable Silu A16W4 INTERLEAVE fused_moe ... | @SamiAario-AMD | open | 2026-09-15 | 2026-09-17 |
| [#5523](https://github.com/ROCm/aiter/pull/5523) | [Flydsl] stop the A16W16 pruner from evicting every HTI conf... | @huizzhan | draft | 2026-09-15 | 2026-09-17 |
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
| [#4747](https://github.com/ROCm/aiter/pull/4747) | Fp8 mxscale bmm bpreshuffle opt | @yzhou103 | draft | 2026-08-14 | 2026-09-16 |
| [#5534](https://github.com/ROCm/aiter/pull/5534) | [CI] [DO NOT MERGE] ci: point Triton pypi index at release_t... | @yuyzhang512 | open | 2026-09-15 | 2026-09-16 |
| [#5517](https://github.com/ROCm/aiter/pull/5517) | [HIP] [CI] [JIT] [ROCm][MoE] Fused routing preamble: add a s... | @heslami | open | 2026-09-15 | 2026-09-16 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-09-16 |
| [#5236](https://github.com/ROCm/aiter/pull/5236) | [Kernel] [Perf] Fold an optional bias into the A6W6 MXFP6 GE... | @jasainio | draft | 2026-09-03 | 2026-09-16 |
| [#5562](https://github.com/ROCm/aiter/pull/5562) | [Perf] Add gfx950 DSV4.1 Flash EP4 a8w4 FMoE tuning | @kevin-mii | draft | 2026-09-15 | 2026-09-15 |
| [#4740](https://github.com/ROCm/aiter/pull/4740) | [HIP] [JIT] Fix/gfx1201 bf16 g1u1 small m moe | @keneoneth | open | 2026-08-13 | 2026-09-15 |
| [#5428](https://github.com/ROCm/aiter/pull/5428) | [Triton] gemm_a16w16: replace the racy N=256,K=7168 M_LEQ_32... | @Boss2002n | draft | 2026-09-11 | 2026-09-15 |
| [#5487](https://github.com/ROCm/aiter/pull/5487) | [FlyDSL] K3 latent FHMoE prototype (eager decode path) | @xiaohuguo2023 | draft | 2026-09-13 | 2026-09-15 |
| [#5420](https://github.com/ROCm/aiter/pull/5420) | Publish gfx950 tiles for flash_kda K2 and sparse_attention_d... | @Boss2002n | draft | 2026-09-11 | 2026-09-15 |
| [#5535](https://github.com/ROCm/aiter/pull/5535) | [Fix] Scale gfx950 FP8 MLA softmax numerators before E4M3 | @tanth47 | draft | 2026-09-15 | 2026-09-15 |
| [#5393](https://github.com/ROCm/aiter/pull/5393) | [FlyDSL] Keep split-K preshuffle buffers out of the CUDA gra... | @PerryZhang01 | open | 2026-09-10 | 2026-09-15 |
| [#5445](https://github.com/ROCm/aiter/pull/5445) | [Test] Sweep the per-row top-k kernels across M, N and top_k | @zufayu | open | 2026-09-11 | 2026-09-15 |
| [#5514](https://github.com/ROCm/aiter/pull/5514) | Mxfp4 glm53 tunning | @JohnNikolay84 | draft | 2026-09-14 | 2026-09-14 |
| [#5186](https://github.com/ROCm/aiter/pull/5186) | [CK] [CI] [JIT] Mi300a enablement | @afanfa | open | 2026-09-01 | 2026-09-14 |
| [#5505](https://github.com/ROCm/aiter/pull/5505) | Fix the hardcoded die and CU counts in the Triton kernels | @RElbers | draft | 2026-09-14 | 2026-09-14 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | Fix the hardcoded die and CU counts in the FlyDSL kernels | @RElbers | draft | 2026-09-14 | 2026-09-14 |
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
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-09-11 |
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
| [#5046](https://github.com/ROCm/aiter/pull/5046) | [HIP] [JIT] fp8_mqa_logits: hand-written gfx950 prefill inde... | @sumin-hong | open | 2026-08-27 | 2026-09-08 |
| [#5047](https://github.com/ROCm/aiter/pull/5047) | [HIP] [JIT] fp8_paged_mqa_logits: hand-written gfx950 decode... | @sumin-hong | open | 2026-08-27 | 2026-09-08 |
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
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | open | 2026-08-26 | 2026-09-03 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | open | 2026-08-06 | 2026-09-03 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-09-03 |
| [#5126](https://github.com/ROCm/aiter/pull/5126) | [FlyDSL] Keep FP4 prefill modules alive across async dispatc... | @AMD-yanfeiwang | open | 2026-08-30 | 2026-09-03 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [HIP] [OPUS] [JIT] [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-09-03 |
| [#5208](https://github.com/ROCm/aiter/pull/5208) | DO NOT MERGE: test extended CI dispatch flow | @gyohuangxin | open | 2026-09-02 | 2026-09-03 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-09-03 |
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
| [#5055](https://github.com/ROCm/aiter/pull/5055) | [Triton/Gluon] [GFX12] mxfp8 gemm cga update | @k50112113 | open | 2026-08-27 | 2026-08-29 |
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
| [#4896](https://github.com/ROCm/aiter/pull/4896) | [Triton/Gluon] for k3 sa submit | @gbyu-amd | draft | 2026-08-21 | 2026-08-21 |
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
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton] unified_attention: mask V load and output store by ... | @reger-men | open | 2026-06-12 | 2026-08-10 |
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
| [#4398](https://github.com/ROCm/aiter/pull/4398) | Two-stage a16w4 MoE GEMM (INTERLEAVE-gate mode) | @apicciau | open | 2026-07-27 | 2026-08-04 |
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
| [#4444](https://github.com/ROCm/aiter/pull/4444) | [Test] Add SDXL 1.0 conv2d shapes to conv_shapes.json | @Ragua1 | open | 2026-07-29 | 2026-08-02 |
| [#4443](https://github.com/ROCm/aiter/pull/4443) | perf: optimize MXFP4 MoE decode with fused sorting, quantiza... | @yuychang | open | 2026-07-29 | 2026-08-02 |
| [#4432](https://github.com/ROCm/aiter/pull/4432) | fix: use residual.stride(1) for MHC HC-slice indexing | @steamedMantou | open | 2026-07-29 | 2026-08-02 |
| [#4405](https://github.com/ROCm/aiter/pull/4405) | perf(mla): expose split override for graph decode | @JohnQinAMD | open | 2026-07-28 | 2026-08-02 |
| [#4389](https://github.com/ROCm/aiter/pull/4389) | Fix AITER JIT builds on gfx90a | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4286](https://github.com/ROCm/aiter/pull/4286) | [opt][gfx1250][ep] Add TDM deep-prefetch BF16 prefill for qk... | @jli-melchior | open | 2026-07-18 | 2026-07-21 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-09-05 |
| [#1232](https://github.com/ROCm/aiter/pull/1232) | [TRITON] FP8 blockscale fix and finetuning for Deepseek on M... | @juuso-oskari | open | 2025-10-21 | 2026-09-05 |
| [#5758](https://github.com/ROCm/aiter/pull/5758) | [Config] [Perf] [gfx950] Add MiniMax-M3-MXFP4 BF16 tuned GEM... | @amd-bishwoadhikari | merged | 2026-09-22 | 2026-09-25 |
| [#5750](https://github.com/ROCm/aiter/pull/5750) | [Triton/Gluon] [JIT] [Feature] Add tuned native group32 A8W8... | @valarLip | merged | 2026-09-22 | 2026-09-25 |
| [#5838](https://github.com/ROCm/aiter/pull/5838) | fix mega ubench | @yanboshao | merged | 2026-09-25 | 2026-09-25 |
| [#5813](https://github.com/ROCm/aiter/pull/5813) | fix: custom_all_reduce ci hang | @TennyWang1223 | merged | 2026-09-24 | 2026-09-25 |
| [#5480](https://github.com/ROCm/aiter/pull/5480) | [HIP] [Kernel] Fix group quant dispatch for hidden sizes in ... | @Fangzhou-Ai | merged | 2026-09-13 | 2026-09-24 |
| [#5797](https://github.com/ROCm/aiter/pull/5797) | [Triton/Gluon] [GFX950] Use a prefill launch config for spar... | @cagrikymk | merged | 2026-09-23 | 2026-09-24 |
| [#5814](https://github.com/ROCm/aiter/pull/5814) | [FlyDSL] [CI] optimization perf of mega stage1 | @yanboshao | merged | 2026-09-24 | 2026-09-24 |
| [#5740](https://github.com/ROCm/aiter/pull/5740) | [Triton/Gluon] Gluon MOE compatibility with upstream triton ... | @k50112113 | merged | 2026-09-21 | 2026-09-24 |
| [#5641](https://github.com/ROCm/aiter/pull/5641) | [Config] Retune DSR1/V3 FP8 fmoe rows on gfx950 | @eky-amd | merged | 2026-09-17 | 2026-09-24 |
| [#4991](https://github.com/ROCm/aiter/pull/4991) | [HIP] opt inverse rope group quant gfx1250 | @yzhou103 | merged | 2026-08-25 | 2026-09-24 |
| [#5443](https://github.com/ROCm/aiter/pull/5443) | [CK] [Bugfix][Perf] fused_moe: tune the non-temporal load hi... | @ZhengGong-amd | merged | 2026-09-11 | 2026-09-24 |
| [#5370](https://github.com/ROCm/aiter/pull/5370) | [HIP] [FlyDSL] [JIT] Support Conv3d for Qwen-Image / Wan2.1 ... | @huizzhan | merged | 2026-09-09 | 2026-09-24 |
| [#5724](https://github.com/ROCm/aiter/pull/5724) | [HIP] [Perf] Size the MLA metadata LDS scratch to the chunk,... | @ZhiweiYan-96 | merged | 2026-09-21 | 2026-09-24 |
| [#5796](https://github.com/ROCm/aiter/pull/5796) | [FlyDSL] [JIT] AOT-compile the gfx950 FP8 flash-attention fo... | @gbyu-amd | merged | 2026-09-23 | 2026-09-24 |
| [#5195](https://github.com/ROCm/aiter/pull/5195) | [ASM] [MLA v4 nm] Swap gfx950 asm decode kernel | @liyjiang | merged | 2026-09-02 | 2026-09-24 |
| [#5699](https://github.com/ROCm/aiter/pull/5699) | [ASM] [HIP] [Kernel] [gfx1250] Add F8GEMM 256x256 split-K an... | @WangJessie926 | merged | 2026-09-20 | 2026-09-24 |
| [#5748](https://github.com/ROCm/aiter/pull/5748) | [OPUS] Optimize Opus integration flow | @yifehuan | merged | 2026-09-22 | 2026-09-24 |
| [#5353](https://github.com/ROCm/aiter/pull/5353) | [Config] Modify kimik3_bf16_tuned_gemm.csv | @hmahmad26 | merged | 2026-09-08 | 2026-09-24 |
| [#5672](https://github.com/ROCm/aiter/pull/5672) | [Triton/Gluon] Drop `GRID_MN` from the batched MXFP4 GEMM sp... | @eppaneamd | merged | 2026-09-18 | 2026-09-23 |
| [#5785](https://github.com/ROCm/aiter/pull/5785) | [CI] review-pr: fix agent-timeout envelope so large-diff rev... | @zufayu | merged | 2026-09-23 | 2026-09-23 |
| [#5749](https://github.com/ROCm/aiter/pull/5749) | [Triton/Gluon] [Bugfix] [Perf] Support page size 8 in paged ... | @zhiding512 | merged | 2026-09-22 | 2026-09-23 |
| [#5176](https://github.com/ROCm/aiter/pull/5176) | [CK] [FlyDSL] [FEAT] support fp8/fp4 quant in mega stage2 co... | @yanboshao | merged | 2026-09-01 | 2026-09-23 |
| [#5746](https://github.com/ROCm/aiter/pull/5746) | [ASM][gfx1250] refresh QH128 sparse-prefill and fix softmax ... | @junxiaguo | merged | 2026-09-22 | 2026-09-23 |
| [#5658](https://github.com/ROCm/aiter/pull/5658) | [Triton/Gluon] Merge MoE MXFP8 GEMM into existing _moe_gemm_... | @WuLei-AMD | merged | 2026-09-18 | 2026-09-23 |
| [#5376](https://github.com/ROCm/aiter/pull/5376) | [ASM] [HIP] feat(fmha_bwd): add bf16 hd=256 fused dKdV+dQ AS... | @alexioslyrakis-amd | merged | 2026-09-09 | 2026-09-23 |
| [#5403](https://github.com/ROCm/aiter/pull/5403) | [ASM] [HIP] feat(fmha_fwd): add bf16 hd=256 forward ASM kern... | @alexioslyrakis-amd | merged | 2026-09-10 | 2026-09-23 |
| [#5780](https://github.com/ROCm/aiter/pull/5780) | [Config] Revert 13 regressed Kimi-K3 A8W8 rows | @XiaobingSuper | merged | 2026-09-23 | 2026-09-23 |
| [#5731](https://github.com/ROCm/aiter/pull/5731) | [FlyDSL] feat: add gfx1250 natural FP4 compressor scatter | @junhaha666 | merged | 2026-09-21 | 2026-09-23 |
| [#5548](https://github.com/ROCm/aiter/pull/5548) | [Triton/Gluon] [Kernel] Add 32x32 block-scaled MXFP4 quantiz... | @DaiXindi-AMD | merged | 2026-09-15 | 2026-09-23 |
| [#5666](https://github.com/ROCm/aiter/pull/5666) | [CI] ci: add @aiter-bot review (self-hosted GLM PR reviewer) | @zufayu | merged | 2026-09-18 | 2026-09-23 |
| [#5734](https://github.com/ROCm/aiter/pull/5734) | fused_moe: remove incorrect topk adjustment in get_2stage_cf... | @psakhamo | merged | 2026-09-21 | 2026-09-23 |
| [#5735](https://github.com/ROCm/aiter/pull/5735) | [Config] configs: GLM-5.3 fused shared MoE rows for gfx950 | @Raiden-Makoto | merged | 2026-09-21 | 2026-09-23 |
| [#5726](https://github.com/ROCm/aiter/pull/5726) | [HIP] Fix grouped topk tie handling for GLM-5.2 accuracy | @lirui927 | merged | 2026-09-21 | 2026-09-23 |
| [#5768](https://github.com/ROCm/aiter/pull/5768) | [Triton/Gluon] [Perf] Support page size 8 in the preshuffle ... | @zhiding512 | merged | 2026-09-22 | 2026-09-23 |
| [#5689](https://github.com/ROCm/aiter/pull/5689) | [HIP] [Activation] Add standalone relu2 (Squared ReLU) eleme... | @shantipriya-amd | merged | 2026-09-19 | 2026-09-23 |
| [#5695](https://github.com/ROCm/aiter/pull/5695) | [ASM] [HIP] MLA PS mode asm and opus kernel support nhead12,... | @minmengdie | merged | 2026-09-20 | 2026-09-23 |
| [#5694](https://github.com/ROCm/aiter/pull/5694) | [HIP] fix(custom_all_reduce): uniform trip count for the blo... | @Arist12 | merged | 2026-09-20 | 2026-09-23 |
| [#5587](https://github.com/ROCm/aiter/pull/5587) | [ASM] [HIP] [CI] Mixed MXFP6/MXFP4 GEMMs | @ksikiric | merged | 2026-09-16 | 2026-09-23 |
| [#5772](https://github.com/ROCm/aiter/pull/5772) | [Triton/Gluon] [GFX950] Keep unified-attention block-table s... | @vorapolsiloai | merged | 2026-09-22 | 2026-09-22 |
| [#5619](https://github.com/ROCm/aiter/pull/5619) | [Triton/Gluon] fused KDA decode: order conv_state shifts aft... | @Boss2002n | merged | 2026-09-17 | 2026-09-22 |
| [#4798](https://github.com/ROCm/aiter/pull/4798) | config(glm5): retune MXFP4 MoE token=8 to a4w4 | @jiaryang | merged | 2026-08-17 | 2026-09-22 |
| [#5755](https://github.com/ROCm/aiter/pull/5755) | [FlyDSL] gfx942 a16wi4 gemm2 atomic: use fx.atomic_add | @msaffari-amd | merged | 2026-09-22 | 2026-09-22 |
| [#5531](https://github.com/ROCm/aiter/pull/5531) | [Triton/Gluon] [Kernel] Add gfx950 stochastic MXFP4 quantiza... | @DaiXindi-AMD | merged | 2026-09-15 | 2026-09-22 |
| [#4970](https://github.com/ROCm/aiter/pull/4970) | [FlyDSL] QRInt4: INT4 two-shot all-reduce for gfx942/gfx950 | @samremes | merged | 2026-08-24 | 2026-09-22 |
| [#4815](https://github.com/ROCm/aiter/pull/4815) | [Config] Add Qwen3.6 35B-A3B FMoE configs for gfx1201 | @keneoneth | merged | 2026-08-18 | 2026-09-22 |
| [#5425](https://github.com/ROCm/aiter/pull/5425) | [CI] Fail the Triton test jobs if any kernel autotunes at ru... | @Boss2002n | merged | 2026-09-11 | 2026-09-22 |
| [#5572](https://github.com/ROCm/aiter/pull/5572) | [Triton/Gluon] fix: avoid Python 3.10 source inspection fail... | @junna2016 | merged | 2026-09-16 | 2026-09-22 |
| [#5717](https://github.com/ROCm/aiter/pull/5717) | [CI] Cache Triton wheelhouse across test jobs | @gyohuangxin | merged | 2026-09-21 | 2026-09-22 |
| [#4332](https://github.com/ROCm/aiter/pull/4332) | [Triton/Gluon] [FlyDSL] [CI] feat(flydsl): Add paged-attenti... | @fsx950223 | merged | 2026-07-22 | 2026-09-22 |
| [#5690](https://github.com/ROCm/aiter/pull/5690) | [FlyDSL] Optimize gfx950 A8W8 preshuffle GEMM shape coverage | @XiaobingSuper | merged | 2026-09-20 | 2026-09-22 |
| [#5656](https://github.com/ROCm/aiter/pull/5656) | [HIP] [OPUS] [JIT] [GFX1250]OPUS PA MQA Logits MXFP4 | @shay-li77 | merged | 2026-09-18 | 2026-09-22 |
| [#5722](https://github.com/ROCm/aiter/pull/5722) | [HIP] Add DSV4.1 A4W4 fused MoE configs for gfx950 | @yifehuan | merged | 2026-09-21 | 2026-09-22 |
| [#5575](https://github.com/ROCm/aiter/pull/5575) | [Config] [AMD][DSV4] [Tune][gfx950] a8w8 blockscale bpreshuf... | @karverma-amd | merged | 2026-09-16 | 2026-09-22 |
| [#5583](https://github.com/ROCm/aiter/pull/5583) | [FlyDSL] [CI] [a16w4] Support MXFP4 weights on gfx942 (CDNA3... | @MHYangAMD | merged | 2026-09-16 | 2026-09-22 |
| [#5723](https://github.com/ROCm/aiter/pull/5723) | [Triton/Gluon] [Perf] Add persistent CTA scheduling for page... | @zhiding512 | merged | 2026-09-21 | 2026-09-21 |
| [#5332](https://github.com/ROCm/aiter/pull/5332) | [HIP] [OPUS] [JIT] [GFX950]OPUS PA MQA Logits MXFP4 | @shay-li77 | merged | 2026-09-08 | 2026-09-21 |
| [#4885](https://github.com/ROCm/aiter/pull/4885) | [Triton/Gluon] [FlyDSL] feat(flydsl): Add HSTU Backward kern... | @SamiAario-AMD | merged | 2026-08-20 | 2026-09-21 |
| [#5712](https://github.com/ROCm/aiter/pull/5712) | Opt qk_norm_rope_group_quant in gfx1250 | @yzhou103 | merged | 2026-09-21 | 2026-09-21 |
| [#5680](https://github.com/ROCm/aiter/pull/5680) | [HIP] [JIT] Add a DSv4 paged K gather+dequant kernel | @akii96 | merged | 2026-09-19 | 2026-09-21 |
| [#4538](https://github.com/ROCm/aiter/pull/4538) | [FlyDSL] gfx950 FP8 MQA logits indexer kernel | @vpietila-amd | merged | 2026-08-03 | 2026-09-21 |
| [#5718](https://github.com/ROCm/aiter/pull/5718) | [FlyDSL] Expose FP8 attention and gather capability checks | @gbyu-amd | merged | 2026-09-21 | 2026-09-21 |
| [#5702](https://github.com/ROCm/aiter/pull/5702) | [Config] Tune Kimi-K3 BF16 GEMMs for gfx950 | @XiaobingSuper | merged | 2026-09-20 | 2026-09-21 |
| [#5676](https://github.com/ROCm/aiter/pull/5676) | [Triton/Gluon] Create benchmark for fused_rmsnorm_add_bench | @nidal567 | merged | 2026-09-18 | 2026-09-21 |
| [#5608](https://github.com/ROCm/aiter/pull/5608) | [Triton/Gluon] Create benchmark for `Norm/Layernorm` | @nidal567 | merged | 2026-09-17 | 2026-09-21 |
| [#5545](https://github.com/ROCm/aiter/pull/5545) | [Triton/Gluon] Log with % placeholders instead of f-strings | @Boss2002n | merged | 2026-09-15 | 2026-09-21 |
| [#5710](https://github.com/ROCm/aiter/pull/5710) | [OPUS] fix(opus): prevent DSV4 DPA CI OOM with bounded route... | @yifehuan | merged | 2026-09-21 | 2026-09-21 |
| [#5430](https://github.com/ROCm/aiter/pull/5430) | [FlyDSL] Allocate split-K scratch buffers from a private Mem... | @XiaobingSuper | merged | 2026-09-11 | 2026-09-21 |
| [#5630](https://github.com/ROCm/aiter/pull/5630) | [CK] fix(moe): handle 64-aligned A16W16 shards in CK dispatc... | @junna2016 | merged | 2026-09-17 | 2026-09-21 |
| [#5700](https://github.com/ROCm/aiter/pull/5700) | [Triton/Gluon] [Perf] Cut per-iteration address math and cnd... | @zhiding512 | merged | 2026-09-20 | 2026-09-21 |
| [#5713](https://github.com/ROCm/aiter/pull/5713) | [CI] CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-09-21 | 2026-09-21 |
| [#5691](https://github.com/ROCm/aiter/pull/5691) | [Triton/Gluon] [Config] [Tune][gfx942] Add per-shape GEMM co... | @WuLei-AMD | merged | 2026-09-20 | 2026-09-21 |
| [#5714](https://github.com/ROCm/aiter/pull/5714) | [Config] Revert " Modify kimik3_bf16_tuned_gemm.csv" | @XiaobingSuper | merged | 2026-09-21 | 2026-09-21 |
| [#5716](https://github.com/ROCm/aiter/pull/5716) | CI: run Kimi-K2.5 perf nightly only | @gyohuangxin | merged | 2026-09-21 | 2026-09-21 |
| [#5232](https://github.com/ROCm/aiter/pull/5232) | [FlyDSL] [fused_moe] Do not route MXFP4 MoE to CK-Tile when ... | @xiaofei-zheng | merged | 2026-09-03 | 2026-09-21 |
| [#5698](https://github.com/ROCm/aiter/pull/5698) | [HIP] Lift the 2 GiB limit on mla_reduce_v1 final output and... | @kaiyang-1 | merged | 2026-09-20 | 2026-09-21 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-09-25T13:04:53Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#2369](https://github.com/ROCm/ATOM/pull/2369) | fix(plugin): hold the deferred-save clock on the slotted Seq... | @PerryZhang01 | open | 2026-09-23 | 2026-09-25 |
| [#2402](https://github.com/ROCm/ATOM/pull/2402) | fix(ci): validate all LMCache Dockerfile pins before writing | @kvnloo | open | 2026-09-25 | 2026-09-25 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [Lumen-RL] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-09-25 |
| [#2250](https://github.com/ROCm/ATOM/pull/2250) | feat(offload): support native DSv4 checkpoints with LMCache ... | @yhl-amd | open | 2026-09-16 | 2026-09-25 |
| [#2256](https://github.com/ROCm/ATOM/pull/2256) | perf(dsv4): use FlyDSL for native FP8 attention | @yhl-amd | draft | 2026-09-16 | 2026-09-25 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-09-25 |
| [#2365](https://github.com/ROCm/ATOM/pull/2365) | [feature] support pp>1 for Kimi-K3 | @gbyu-amd | draft | 2026-09-23 | 2026-09-24 |
| [#2013](https://github.com/ROCm/ATOM/pull/2013) | docker: fix ATOM and SGLang release builds | @ThomasNing | open | 2026-08-25 | 2026-09-24 |
| [#2384](https://github.com/ROCm/ATOM/pull/2384) | feat(moe): enable mega stage1_fused on fp4/fp8 dispatch wire | @yanboshao | open | 2026-09-24 | 2026-09-24 |
| [#2364](https://github.com/ROCm/ATOM/pull/2364) | feat(sp): add Ulysses sequence parallelism and optimize M3 p... | @whx-sjtu | draft | 2026-09-23 | 2026-09-24 |
| [#2371](https://github.com/ROCm/ATOM/pull/2371) | [WIP][PD][DCP] Reorder mla cache in P to the dcp layout in D | @MengqingCao | draft | 2026-09-23 | 2026-09-24 |
| [#2390](https://github.com/ROCm/ATOM/pull/2390) | [gfx1250][GEMM]: add dsv4-ep4 opt-in gfx1250 MXFP8 ASM GEMMs | @aoli26 | open | 2026-09-24 | 2026-09-24 |
| [#2007](https://github.com/ROCm/ATOM/pull/2007) | feat(pp) support dynamic chunked pipeline parallel | @wanzhenchn | open | 2026-08-24 | 2026-09-24 |
| [#2389](https://github.com/ROCm/ATOM/pull/2389) | ci(mesh): use --spec-decode-acceptance-length for GLM-5.2 ag... | @Jasen2201 | open | 2026-09-24 | 2026-09-24 |
| [#2332](https://github.com/ROCm/ATOM/pull/2332) | feat(kimi-k3): support P/D disaggregation (re-land of #2154) | @wanzhenchn | open | 2026-09-21 | 2026-09-24 |
| [#2386](https://github.com/ROCm/ATOM/pull/2386) | [Performance] Split NUMA-bound CPUs into per-GPU physical-co... | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2385](https://github.com/ROCm/ATOM/pull/2385) | [SGL ATOM] enable qwen3.8-flash mtp in sgl atom | @ZLkanyo009 | open | 2026-09-24 | 2026-09-24 |
| [#2376](https://github.com/ROCm/ATOM/pull/2376) | feat(v41): support DPA and DPA prefill TBO with safe expert ... | @ZhangLirong-amd | open | 2026-09-23 | 2026-09-24 |
| [#2280](https://github.com/ROCm/ATOM/pull/2280) | [sgl+atom] Upgrade SGLang to v0.5.20 | @zhangxinyuanliuhengyu | open | 2026-09-18 | 2026-09-24 |
| [#2350](https://github.com/ROCm/ATOM/pull/2350) | feat(mesh): add Envoy ext-proc inference ingress | @Yuechguo | open | 2026-09-22 | 2026-09-24 |
| [#2367](https://github.com/ROCm/ATOM/pull/2367) | fix(mtp): install the draft work plan when warming draft gra... | @Jasen2201 | open | 2026-09-23 | 2026-09-24 |
| [#2355](https://github.com/ROCm/ATOM/pull/2355) | CI: allow overriding ATOM inference watchdog threshold | @gyohuangxin | open | 2026-09-22 | 2026-09-24 |
| [#2374](https://github.com/ROCm/ATOM/pull/2374) | ci: avoid restarting tests on PR approval | @leo-automation | open | 2026-09-23 | 2026-09-24 |
| [#2381](https://github.com/ROCm/ATOM/pull/2381) | [Performance] Reduce TP host-control overhead for C16 | @yhl-amd | draft | 2026-09-24 | 2026-09-24 |
| [#2380](https://github.com/ROCm/ATOM/pull/2380) | feat(mla): unfused torch fallback for gather_kv_b_proj | @zejunchen-zejun | draft | 2026-09-24 | 2026-09-24 |
| [#2370](https://github.com/ROCm/ATOM/pull/2370) | ci(atomesh): add GLM-5.2 1P2D CPP4+DPA4 agentic benchmark su... | @Jasen2201 | open | 2026-09-23 | 2026-09-24 |
| [#2295](https://github.com/ROCm/ATOM/pull/2295) | Add GPT-OSS IQ2R 2-bit MoE integration | @ssharma4-amd | open | 2026-09-18 | 2026-09-23 |
| [#2375](https://github.com/ROCm/ATOM/pull/2375) | [DO NOT MERGE] Test CI approval orchestration | @leo-automation | open | 2026-09-23 | 2026-09-23 |
| [#2353](https://github.com/ROCm/ATOM/pull/2353) | feat(offload): add MP-only save admission budget | @yhl-amd | open | 2026-09-22 | 2026-09-23 |
| [#2344](https://github.com/ROCm/ATOM/pull/2344) | (doc)GLM-5.3 LMCache: concurrency sweep (8/16/32) and HBM/ti... | @PerryZhang01 | open | 2026-09-22 | 2026-09-23 |
| [#2349](https://github.com/ROCm/ATOM/pull/2349) | Add MiMo V2.5 Pro support to the SGLang plugin | @yucshen | open | 2026-09-22 | 2026-09-23 |
| [#2357](https://github.com/ROCm/ATOM/pull/2357) | feat(plugin): run DeepSeek-V4.1-Flash text path on the vLLM ... | @PerryZhang01 | open | 2026-09-22 | 2026-09-23 |
| [#2359](https://github.com/ROCm/ATOM/pull/2359) | [Bugfix][vLLM] Forward unknown kwargs through the Harmony pa... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2361](https://github.com/ROCm/ATOM/pull/2361) | [Bugfix][vLLM] Fill padded GDN decode state slots with NULL_... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2362](https://github.com/ROCm/ATOM/pull/2362) | [Bugfix][vLLM] Only engage the EAGLE3 heterogeneous KV pool ... | @npoulad1 | open | 2026-09-22 | 2026-09-23 |
| [#2335](https://github.com/ROCm/ATOM/pull/2335) | Add plain GLM-5.3 IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-09-23 |
| [#2340](https://github.com/ROCm/ATOM/pull/2340) | Enable GLM-5.3-Flash under vllm serve on the ATOM plugin.- #... | @sajandhy | draft | 2026-09-22 | 2026-09-22 |
| [#2236](https://github.com/ROCm/ATOM/pull/2236) | plugin/vllm: upgrade the ATOM vLLM plugin to 0.29.0 | @PerryZhang01 | open | 2026-09-15 | 2026-09-22 |
| [#2132](https://github.com/ROCm/ATOM/pull/2132) | [Kimi-K3][LMCache] Fuse the state load leg, and fence the KV... | @zejunchen-zejun | open | 2026-09-03 | 2026-09-22 |
| [#2313](https://github.com/ROCm/ATOM/pull/2313) | ci(mesh): benchmark GLM agentic 2P2D with kv_cache_aware rou... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2308](https://github.com/ROCm/ATOM/pull/2308) | feat(mesh): route calibrated HBM and CPU aware prefill/decod... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2307](https://github.com/ROCm/ATOM/pull/2307) | feat(cache): publish native HBM and CPU catalog with exact r... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2306](https://github.com/ROCm/ATOM/pull/2306) | feat(cache): isolate native layouts and expose execution top... | @Jasen2201 | draft | 2026-09-20 | 2026-09-22 |
| [#2287](https://github.com/ROCm/ATOM/pull/2287) | feat(ci): collect per-GPU hardware metrics in agentic report... | @Jasen2201 | open | 2026-09-18 | 2026-09-22 |
| [#1873](https://github.com/ROCm/ATOM/pull/1873) | Expose Prometheus metrics for KV-aware routing and modernize... | @Jasen2201 | open | 2026-08-12 | 2026-09-22 |
| [#2254](https://github.com/ROCm/ATOM/pull/2254) | [CI] Align GLM-5.2 PD small-concurrency configs with pd mix ... | @MengqingCao | open | 2026-09-16 | 2026-09-22 |
| [#2345](https://github.com/ROCm/ATOM/pull/2345) | (agentic) update glm5.2 recipe for agentX | @zhuyuhua-v | draft | 2026-09-22 | 2026-09-22 |
| [#2330](https://github.com/ROCm/ATOM/pull/2330) | [SGL ATOM]Pin SGLang ATOM image transformers to 5.16.1. | @zhangxinyuanliuhengyu | open | 2026-09-21 | 2026-09-22 |
| [#2337](https://github.com/ROCm/ATOM/pull/2337) | [CI][ROCm][ATOMesh] Add DeepSeek-V4-Pro 2P1D TP8 catalog cas... | @avininjamay8 | open | 2026-09-21 | 2026-09-22 |
| [#2293](https://github.com/ROCm/ATOM/pull/2293) | Add hybrid mega/standard MoE dispatch for MegaMxfp4MoEMethod | @amd-weisun | draft | 2026-09-18 | 2026-09-21 |
| [#2333](https://github.com/ROCm/ATOM/pull/2333) | [WIP] Integrate MoonEP policies with MoRI and fused_moe | @JiaoliangYu | draft | 2026-09-21 | 2026-09-21 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | draft | 2026-08-19 | 2026-09-21 |
| [#2329](https://github.com/ROCm/ATOM/pull/2329) | Add GLM-5.3-Flash IQ2R 2-bit MoE integration | @ssharma4-amd | draft | 2026-09-21 | 2026-09-21 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | draft | 2026-09-07 | 2026-09-21 |
| [#2298](https://github.com/ROCm/ATOM/pull/2298) | [Lumen-RL] Receive trained weights over RCCL, transactionall... | @i-chaochen | open | 2026-09-19 | 2026-09-21 |
| [#2269](https://github.com/ROCm/ATOM/pull/2269) | [minimax-m3]: integrate flydsl index_score kernel | @ganyi1996ppo | open | 2026-09-17 | 2026-09-21 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | draft | 2026-06-30 | 2026-09-21 |
| [#2318](https://github.com/ROCm/ATOM/pull/2318) | fix(spec-decode): honor request sampling during target verif... | @gbyu-amd | draft | 2026-09-20 | 2026-09-20 |
| [#2301](https://github.com/ROCm/ATOM/pull/2301) | [Spec Decode] Add opt-in synthetic forward for forced accept... | @gbyu-amd | open | 2026-09-20 | 2026-09-20 |
| [#2286](https://github.com/ROCm/ATOM/pull/2286) | [FlyDSL] [Gfx1250] mega moe stage1 gfx1250 no overlap | @XingerZhu | open | 2026-09-18 | 2026-09-20 |
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-09-20 |
| [#2203](https://github.com/ROCm/ATOM/pull/2203) | [KV-events] match vLLM/SGLang ZMQ framing and per-DP-rank po... | @vMaroon | open | 2026-09-11 | 2026-09-20 |
| [#2297](https://github.com/ROCm/ATOM/pull/2297) | [Lumen-RL] Generic collective_rpc across all DP and TP ranks... | @i-chaochen | open | 2026-09-19 | 2026-09-19 |
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
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat: support v4 mixed-schedule large conc opt | @jiayyu | open | 2026-08-26 | 2026-09-15 |
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
| [#2282](https://github.com/ROCm/ATOM/pull/2282) | fix(offload): read PP/TP from parallel_config for LMCache wo... | @PerryZhang01 | merged | 2026-09-18 | 2026-09-20 |
| [#2278](https://github.com/ROCm/ATOM/pull/2278) | docs(recipe): M3 agentic InferenceX — add Indexer cp, update... | @yitingw1 | merged | 2026-09-18 | 2026-09-20 |
| [#2273](https://github.com/ROCm/ATOM/pull/2273) | fix(dsv4): don't assign state slots for warmup batches | @linsun12 | merged | 2026-09-17 | 2026-09-19 |
| [#2244](https://github.com/ROCm/ATOM/pull/2244) | perf(sampler): take the greedy picks from aiter.topk_select | @valarLip | merged | 2026-09-15 | 2026-09-19 |
| [#2296](https://github.com/ROCm/ATOM/pull/2296) | ci: forward benchmark runner to container setup | @gyohuangxin | merged | 2026-09-19 | 2026-09-19 |
| [#2294](https://github.com/ROCm/ATOM/pull/2294) | fix: repair main after the #2276 / #2154 merge collision | @ZhangLirong-amd | merged | 2026-09-18 | 2026-09-18 |
| [#2276](https://github.com/ROCm/ATOM/pull/2276) | Fix cache-aware PD routing and enable independent ranks with... | @ZhangLirong-amd | merged | 2026-09-18 | 2026-09-18 |
| [#2242](https://github.com/ROCm/ATOM/pull/2242) | feat: integrate AITER FlyDSL GDN for Qwen3.8-Flash-Next-FP8 ... | @junna2016 | merged | 2026-09-15 | 2026-09-18 |
| [#1316](https://github.com/ROCm/ATOM/pull/1316) | [KV-events] block token_offset + sequence numbers + replay | @bongwoobak | merged | 2026-06-22 | 2026-09-18 |
| [#2154](https://github.com/ROCm/ATOM/pull/2154) | feat(kimi-k3): support P/D disaggregation | @wanzhenchn | merged | 2026-09-07 | 2026-09-18 |
| [#2289](https://github.com/ROCm/ATOM/pull/2289) | Add optional AITER ref for benchmark runs | @gyohuangxin | merged | 2026-09-18 | 2026-09-18 |
| [#2288](https://github.com/ROCm/ATOM/pull/2288) | [sgl atom] fix qwen38-flash ptpc weight load error | @ZLkanyo009 | merged | 2026-09-18 | 2026-09-18 |
| [#2285](https://github.com/ROCm/ATOM/pull/2285) | Fix PITT benchmark workspace cleanup | @gyohuangxin | merged | 2026-09-18 | 2026-09-18 |
| [#2279](https://github.com/ROCm/ATOM/pull/2279) | [SGL ATOM] enable qwen3.8-flash in sgl atom | @ZLkanyo009 | merged | 2026-09-18 | 2026-09-18 |
| [#2247](https://github.com/ROCm/ATOM/pull/2247) | (recipe)update GLM5.2 recipe for agentX | @zhuyuhua-v | merged | 2026-09-15 | 2026-09-18 |
| [#2157](https://github.com/ROCm/ATOM/pull/2157) | feat: add GLM-5.3-Flash MTP support | @cubezhang | merged | 2026-09-07 | 2026-09-18 |
| [#2231](https://github.com/ROCm/ATOM/pull/2231) | Support LMCache KV offload for GLM-5.2 on the vLLM plugin ba... | @PerryZhang01 | merged | 2026-09-14 | 2026-09-17 |
| [#2259](https://github.com/ROCm/ATOM/pull/2259) | [feat] Support LMCache offload with the FP4 sparse indexer | @ZhiweiYan-96 | merged | 2026-09-16 | 2026-09-17 |
| [#2271](https://github.com/ROCm/ATOM/pull/2271) | feat(v4): reuse sparse prefill ASM for decode | @amd-ruitang3 | merged | 2026-09-17 | 2026-09-17 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-09-25T13:04:58Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#623](https://github.com/ROCm/mori/pull/623) | SDMA HIP device management fixes | @pemeliya | open | 2026-08-31 | 2026-09-25 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-09-25 |
| [#674](https://github.com/ROCm/mori/pull/674) | Add multi-NIC OFI/libfabric backend for Slingshot/CXI | @vinaynkaranth | open | 2026-09-15 | 2026-09-25 |
| [#711](https://github.com/ROCm/mori/pull/711) | fix(cco): two SDMA device-post deadlocks (multi-queue publis... | @yoqiu-amd | open | 2026-09-24 | 2026-09-24 |
| [#703](https://github.com/ROCm/mori/pull/703) | refactor(EPv2): replace per-module __device__ staging with s... | @kawhil-amd | open | 2026-09-23 | 2026-09-24 |
| [#698](https://github.com/ROCm/mori/pull/698) | feat(ep): support precompiled active QP subsets | @jhchouuu | open | 2026-09-22 | 2026-09-24 |
| [#710](https://github.com/ROCm/mori/pull/710) | build(cco): compile the SDMA path by default | @jhchouuu | open | 2026-09-24 | 2026-09-24 |
| [#678](https://github.com/ROCm/mori/pull/678) | fix(umbp): arm every standalone-process data-plane RPC with ... | @isytwu | open | 2026-09-16 | 2026-09-24 |
| [#707](https://github.com/ROCm/mori/pull/707) | feat(umbp): add NUMA-aware DRAM placement and shared-key rep... | @maning00 | open | 2026-09-24 | 2026-09-24 |
| [#670](https://github.com/ROCm/mori/pull/670) | Feat/io rdma retry tunables | @amirakb89 | open | 2026-09-14 | 2026-09-23 |
| [#700](https://github.com/ROCm/mori/pull/700) | fix(umbp): stop standalone client_mu_ serializing the whole ... | @isytwu | draft | 2026-09-23 | 2026-09-23 |
| [#621](https://github.com/ROCm/mori/pull/621) | fix(ep): correct recv-slice indexing in DispatchInterNodeRec... | @isytwu | open | 2026-08-31 | 2026-09-23 |
| [#696](https://github.com/ROCm/mori/pull/696) | opt v2 internode | @QizhouZhang97 | open | 2026-09-22 | 2026-09-22 |
| [#695](https://github.com/ROCm/mori/pull/695) | gemm_a2a: fuse a column-sharded all-to-all into the fp8 GEMM... | @yangyuhuiling | draft | 2026-09-22 | 2026-09-22 |
| [#663](https://github.com/ROCm/mori/pull/663) | fix: migrate GPU topology from rocm_smi to amd_smi (ROCm 10.... | @srinivamd | open | 2026-09-11 | 2026-09-22 |
| [#692](https://github.com/ROCm/mori/pull/692) | feat(umbp): make the heartbeat interval changeable at runtim... | @isytwu | draft | 2026-09-21 | 2026-09-21 |
| [#685](https://github.com/ROCm/mori/pull/685) | ci(cco): stop the SDMA queue reclamation race from failing C... | @yangyuhuiling | open | 2026-09-17 | 2026-09-18 |
| [#683](https://github.com/ROCm/mori/pull/683) | feat(umbp): serve metrics from a masterless node, and summar... | @TianDi101 | open | 2026-09-17 | 2026-09-17 |
| [#682](https://github.com/ROCm/mori/pull/682) | [RDMA][ionic] Strip REMOTE_ATOMIC MR flag + restore HIP devi... | @raviguptaamd | open | 2026-09-17 | 2026-09-17 |
| [#681](https://github.com/ROCm/mori/pull/681) | Proof-of-idea adaptive MORI and Kiwi EP backend selection | @JiakunYan | draft | 2026-09-16 | 2026-09-17 |
| [#675](https://github.com/ROCm/mori/pull/675) | fix(ep/intranode training): restore replay-mode payload disp... | @sudhu2k | open | 2026-09-16 | 2026-09-16 |
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
| [#596](https://github.com/ROCm/mori/pull/596) | perf(umbp): cut per-range overhead in local BatchGetRanges | @isytwu | merged | 2026-08-24 | 2026-08-25 |
| [#592](https://github.com/ROCm/mori/pull/592) | bench(cco): add a one-operation P2P latency probe, rename xg... | @jhchouuu | merged | 2026-08-24 | 2026-08-25 |
| [#591](https://github.com/ROCm/mori/pull/591) | feat(shmem): MORI_ENABLE_RAIL_ONLY to restrict RDMA QPs to s... | @jhchouuu | merged | 2026-08-22 | 2026-08-25 |
| [#597](https://github.com/ROCm/mori/pull/597) | feat(EPv2): extend support for rack-level wide-ep. | @kawhil-amd | merged | 2026-08-24 | 2026-08-25 |
| [#583](https://github.com/ROCm/mori/pull/583) | MORI IO improvements 2nd try | @pemeliya | merged | 2026-08-19 | 2026-08-25 |
| [#593](https://github.com/ROCm/mori/pull/593) | feat(EPv2): forward a per-token scale row with dispatch | @jhchouuu | merged | 2026-08-24 | 2026-08-24 |
| [#599](https://github.com/ROCm/mori/pull/599) | Perf/ep disp 1250 ship | @zhangfei829 | merged | 2026-08-24 | 2026-08-24 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-09-25T13:05:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1195](https://github.com/ROCm/FlyDSL/pull/1195) | [JIT] Attach exactly one #rocdl.target per gpu.module | @mustafayildirim | open | 2026-09-25 | 2026-09-25 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-09-25 |
| [#1193](https://github.com/ROCm/FlyDSL/pull/1193) | [LayoutLowering] Ignore size-one leaves in contiguous-segmen... | @mustafayildirim | open | 2026-09-25 | 2026-09-25 |
| [#1190](https://github.com/ROCm/FlyDSL/pull/1190) | [llvm] Extend LLVM for FlyDSL end-to-end performance work | @Phil-amd | open | 2026-09-24 | 2026-09-25 |
| [#1188](https://github.com/ROCm/FlyDSL/pull/1188) | [Compiler][Debug] Add a compile path for hand-edited assembl... | @Phil-amd | open | 2026-09-24 | 2026-09-25 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-09-24 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | open | 2026-07-14 | 2026-09-24 |
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-09-24 |
| [#1191](https://github.com/ROCm/FlyDSL/pull/1191) | [Fix][Expr] Honor allocate(..., alignment=) for static share... | @xudoyuan | draft | 2026-09-24 | 2026-09-24 |
| [#1185](https://github.com/ROCm/FlyDSL/pull/1185) | fix(coop): preserve declared operator element types | @sjfeng1999 | open | 2026-09-23 | 2026-09-24 |
| [#1180](https://github.com/ROCm/FlyDSL/pull/1180) | Bugfix: Unwrap zip2By singleton guides only on rank-2 pairs | @Peter9606 | open | 2026-09-22 | 2026-09-24 |
| [#1184](https://github.com/ROCm/FlyDSL/pull/1184) | [fix] Support waves_per_eu min,max range for full VGPR utili... | @jli-melchior | open | 2026-09-23 | 2026-09-24 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [Feat] Fix `lld invocation failed` when ROCm is not at the b... | @jli-melchior | open | 2026-08-08 | 2026-09-24 |
| [#1113](https://github.com/ROCm/FlyDSL/pull/1113) | [Bugfix][Kernel] Fix fused RoPE for head dimension 96 | @tangzzycc | open | 2026-09-09 | 2026-09-24 |
| [#1186](https://github.com/ROCm/FlyDSL/pull/1186) | Issue causal flash q-blocks longest-first | @RichardChamberlain1 | open | 2026-09-23 | 2026-09-24 |
| [#1162](https://github.com/ROCm/FlyDSL/pull/1162) | [DSL][Runtime][Kernel] Add in-kernel wave tracing (fx.ktrace... | @Phil-amd | open | 2026-09-18 | 2026-09-23 |
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-09-23 |
| [#1157](https://github.com/ROCm/FlyDSL/pull/1157) | feat(review): harden review engine for unattended runs | @jhinpan | open | 2026-09-17 | 2026-09-22 |
| [#1179](https://github.com/ROCm/FlyDSL/pull/1179) | [Enh] Accept LLVM pointer types in ffi declarations | @LWenH | open | 2026-09-22 | 2026-09-22 |
| [#1166](https://github.com/ROCm/FlyDSL/pull/1166) | [dont merge][llvm] cherry commits for unclausevmem patch | @jli-melchior | open | 2026-09-18 | 2026-09-18 |
| [#1145](https://github.com/ROCm/FlyDSL/pull/1145) | [LLVM] bump llvm which improve the sequence for initial uncl... | @jli-melchior | open | 2026-09-16 | 2026-09-18 |
| [#1106](https://github.com/ROCm/FlyDSL/pull/1106) | [Skills] Add flydsl-code-review skill and workflow | @zhiding512 | open | 2026-09-08 | 2026-09-17 |
| [#1155](https://github.com/ROCm/FlyDSL/pull/1155) | gfx950 flex attention with user score/mask mods | @RichardChamberlain1 | open | 2026-09-17 | 2026-09-17 |
| [#1110](https://github.com/ROCm/FlyDSL/pull/1110) | [LLVM] Fix true16 lowering for packed FP8 conversions | @big-yellow-duck | open | 2026-09-09 | 2026-09-17 |
| [#1142](https://github.com/ROCm/FlyDSL/pull/1142) | [Build] Find ROCm through rocm-sdk before falling back to /o... | @xinyazhang | open | 2026-09-15 | 2026-09-16 |
| [#1139](https://github.com/ROCm/FlyDSL/pull/1139) | Opus fa4 align bf16 perf | @coderfeli | open | 2026-09-15 | 2026-09-15 |
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
| [#1015](https://github.com/ROCm/FlyDSL/pull/1015) | [Tools] Add architecture-general ISA resource diff tool | @Phil-amd | merged | 2026-08-17 | 2026-09-11 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-09-25T13:05:04Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#742](https://github.com/ROCm/TransformerEngine/pull/742) | [JAX] grouped GEMM interface fix | @shurale-nkn | open | 2026-09-24 | 2026-09-25 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | open | 2026-08-31 | 2026-09-24 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | Performance dashboard | @matthiasdiener | open | 2026-07-14 | 2026-09-24 |
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-09-24 |
| [#721](https://github.com/ROCm/TransformerEngine/pull/721) | Ifu dev 20260828 v2.19 | @matthiasdiener | open | 2026-08-28 | 2026-09-24 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-09-24 |
| [#741](https://github.com/ROCm/TransformerEngine/pull/741) | Enable gfx950 FP8 HD128/256 fused-attn ASM forward from aite... | @yaomingamd | open | 2026-09-23 | 2026-09-23 |
| [#722](https://github.com/ROCm/TransformerEngine/pull/722) | [TE] IFU release v2.18 | @aris134 | open | 2026-08-31 | 2026-09-23 |
| [#736](https://github.com/ROCm/TransformerEngine/pull/736) | Upgrade ci to therock 10.0 | @VeeraRajasekhar | open | 2026-09-10 | 2026-09-23 |
| [#739](https://github.com/ROCm/TransformerEngine/pull/739) | Fix rocprofv3 Hang in JAX Training Docker 26.6/26.7 by Skipp... | @yaomingamd | open | 2026-09-18 | 2026-09-22 |
| [#734](https://github.com/ROCm/TransformerEngine/pull/734) | Persistent AG + GEMM MXFP8 Enablement | @aris134 | open | 2026-09-09 | 2026-09-21 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-09-21 |
| [#696](https://github.com/ROCm/TransformerEngine/pull/696) | sGPU Test Scheduling: Global Work Queue | @VeeraRajasekhar | open | 2026-08-07 | 2026-09-21 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-09-18 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-09-17 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-09-10 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-09-10 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-09-10 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-09-10 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-09-10 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-09-08 |
| [#705](https://github.com/ROCm/TransformerEngine/pull/705) | [proof-of-concept] Kernel autotuning in TE | @matthiasdiener | draft | 2026-08-18 | 2026-09-08 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-08-27 |
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-08-26 |
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
| [#723](https://github.com/ROCm/TransformerEngine/pull/723) |  Triton mxfp4 (and a8w4) grouped GEMM kernel | @matthiasdiener | merged | 2026-08-31 | 2026-09-23 |
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
| [#640](https://github.com/ROCm/TransformerEngine/pull/640) | PR #613 Hot Fix | @aris134 | merged | 2026-06-19 | 2026-06-22 |
| [#626](https://github.com/ROCm/TransformerEngine/pull/626) | Add gfx1250 support to CK tile group GEMM | @aris134 | merged | 2026-06-16 | 2026-06-21 |
| [#638](https://github.com/ROCm/TransformerEngine/pull/638) | gfx1250: add (lightly-optimized) Triton GMM config | @matthiasdiener | merged | 2026-06-18 | 2026-06-20 |
| [#632](https://github.com/ROCm/TransformerEngine/pull/632) | Introduce a fused padding + cast transpose kernel grouped li... | @alextmagro | merged | 2026-06-17 | 2026-06-20 |
| [#627](https://github.com/ROCm/TransformerEngine/pull/627) | gfx1250 mxfp8 gemm: loosen restrictions on K | @matthiasdiener | merged | 2026-06-16 | 2026-06-19 |
