# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-11-27T17:41:23Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#206478](https://github.com/pytorch/pytorch/pull/206478) | [ROCm] Add hipccl include dir for HIP extension builds | @Naraenda | closed | 2026-11-24 | 2026-11-27 |
| [#193636](https://github.com/pytorch/pytorch/pull/193636) | Migrate the CUDA 13 py3.10 CI image to gcc13 | @tinglvv | open | 2026-08-14 | 2026-11-27 |
| [#206920](https://github.com/pytorch/pytorch/pull/206920) | Barrier before returning from test_gather_single on backends... | @pablo-garay | draft | 2026-11-27 | 2026-11-27 |
| [#206919](https://github.com/pytorch/pytorch/pull/206919) | [ROCm] Use HIP include paths in libtorch_agnostic version-co... | @amd-mcieslak | draft | 2026-11-27 | 2026-11-27 |
| [#206800](https://github.com/pytorch/pytorch/pull/206800) | Align pixel_unshuffle output layouts | @Driller-Killer | draft | 2026-11-26 | 2026-11-27 |
| [#206918](https://github.com/pytorch/pytorch/pull/206918) | [ROCm] Account for per-shape MIOpen solver choice in test_co... | @pablo-garay | draft | 2026-11-27 | 2026-11-27 |
| [#203229](https://github.com/pytorch/pytorch/pull/203229) | [CPU] Add USE_MKLDNN_ZENDNN to build oneDNN with ZenDNN | @naveenthangudu | open | 2026-11-03 | 2026-11-27 |
| [#166063](https://github.com/pytorch/pytorch/pull/166063) | Add Gluon based grouped MM kernel for Blackwell into Inducto... | @alexsamardzic | open | 2025-10-22 | 2026-11-27 |
| [#203221](https://github.com/pytorch/pytorch/pull/203221) | [Inductor] Prepare Triton templates for other Triton-based D... | @alexsamardzic | open | 2026-11-03 | 2026-11-27 |
| [#203223](https://github.com/pytorch/pytorch/pull/203223) | [Inductor] Add Gluon grouped MM kernel for Blackwell | @alexsamardzic | open | 2026-11-03 | 2026-11-27 |
| [#206874](https://github.com/pytorch/pytorch/pull/206874) | [xpu] Honor the DLPack stream argument in Tensor.__dlpack__ ... | @tszulist-hbn | draft | 2026-11-27 | 2026-11-27 |
| [#204811](https://github.com/pytorch/pytorch/pull/204811) | [Test][XPU] Enable test_median_dim_index_is_first_occurrence... | @gplutop7 | draft | 2026-11-13 | 2026-11-27 |
| [#206875](https://github.com/pytorch/pytorch/pull/206875) | [Inductor][XPU] Odd-K tail, split-K and descriptor store for... | @chunhuanMeng | draft | 2026-11-27 | 2026-11-27 |
| [#205125](https://github.com/pytorch/pytorch/pull/205125) | [Inductor][xpu] Enable e8m0 log2+ceil bit-manipulation patte... | @DamJanusz | draft | 2026-11-16 | 2026-11-27 |
| [#198188](https://github.com/pytorch/pytorch/pull/198188) | [scaled_mm] Report the TN-only block-scaled layout restricti... | @krllx | open | 2026-09-22 | 2026-11-27 |
| [#206027](https://github.com/pytorch/pytorch/pull/206027) | [inductor] fix recompilations in conv{1d, 2d, 3d} | @khushi-411 | open | 2026-11-21 | 2026-11-27 |
| [#115316](https://github.com/pytorch/pytorch/pull/115316) | Automated submodule update: FBGEMM | @facebook-github-bot | open | 2023-12-07 | 2026-11-27 |
| [#189247](https://github.com/pytorch/pytorch/pull/189247) | Register _foreach_clone XPU dispatch | @msnliu | open | 2026-07-08 | 2026-11-27 |
| [#198352](https://github.com/pytorch/pytorch/pull/198352) | [Test] Split Triton heuristic test classes by hardware class... | @ll-pen | draft | 2026-09-23 | 2026-11-27 |
| [#193482](https://github.com/pytorch/pytorch/pull/193482) | [Test] Decouple Triton kernel tests from device selection | @ll-pen | draft | 2026-08-14 | 2026-11-27 |
| [#193340](https://github.com/pytorch/pytorch/pull/193340) | [Test] Decouple Triton heuristic tests from device selection | @ll-pen | draft | 2026-08-13 | 2026-11-27 |
| [#200965](https://github.com/pytorch/pytorch/pull/200965) | [profiler][xpu] Emit `stream` on XPU kernel trace events | @tszulist-hbn | open | 2026-10-14 | 2026-11-27 |
| [#203686](https://github.com/pytorch/pytorch/pull/203686) | [inductor] Finalize mix-order reductions with second-stage r... | @romanmeta | open | 2026-11-05 | 2026-11-27 |
| [#193086](https://github.com/pytorch/pytorch/pull/193086) | [Testcase Refactoring] Refactor test_fp8.py to use capabilit... | @leewayx | draft | 2026-08-12 | 2026-11-27 |
| [#193413](https://github.com/pytorch/pytorch/pull/193413) | [Testcase Refactoring] 1. Add instantiate_device_type_tests ... | @wyb2939 | draft | 2026-08-13 | 2026-11-27 |
| [#202032](https://github.com/pytorch/pytorch/pull/202032) | [ROCm][inductor] ROCm collective analytical estimate improve... | @Eetusjo | open | 2026-10-26 | 2026-11-27 |
| [#193118](https://github.com/pytorch/pytorch/pull/193118) | [Testcase Refactoring] Decouple and classify torchinductor t... | @ll-pen | open | 2026-08-12 | 2026-11-27 |
| [#192211](https://github.com/pytorch/pytorch/pull/192211) | Fix _scaled_mm ignoring scale_result for FP8 output | @PatrykWilczewski | draft | 2026-08-05 | 2026-11-27 |
| [#192337](https://github.com/pytorch/pytorch/pull/192337) | [Testcase Refactoring] Classify activation memory budget tes... | @ll-pen | open | 2026-08-06 | 2026-11-27 |
| [#193188](https://github.com/pytorch/pytorch/pull/193188) | [functorch] Decouple AOTDispatch tests from hardware-specifi... | @ll-pen | draft | 2026-08-12 | 2026-11-27 |
| [#206616](https://github.com/pytorch/pytorch/pull/206616) | [c10d][nccl2] Register MemPool segments from the pool's allo... | @kapilsh | draft | 2026-11-25 | 2026-11-27 |
| [#204214](https://github.com/pytorch/pytorch/pull/204214) | [Inductor] Offer the Blackwell scaled_mm template only for e... | @mattteochen | open | 2026-11-10 | 2026-11-27 |
| [#206880](https://github.com/pytorch/pytorch/pull/206880) | Keep the DataLoader pin-memory thread's thread count local t... | @eilamc14 | draft | 2026-11-27 | 2026-11-27 |
| [#206859](https://github.com/pytorch/pytorch/pull/206859) | [ROCm] Tiled non-last-dim cumsum / cumprod for gfx950 and gf... | @jerrymannil | draft | 2026-11-27 | 2026-11-27 |
| [#206831](https://github.com/pytorch/pytorch/pull/206831) | [ROCm][Inductor] Enable torch.compile on Windows | @zjliu-amd | draft | 2026-11-26 | 2026-11-27 |
| [#197866](https://github.com/pytorch/pytorch/pull/197866) | [CUDAGraph trees] Add XPU backend support | @majing921201 | open | 2026-09-21 | 2026-11-27 |
| [#205278](https://github.com/pytorch/pytorch/pull/205278) | [CPU] Fix BF16 int8pack_mm for unaligned inputs and K tails | @Super262 | open | 2026-11-17 | 2026-11-27 |
| [#203825](https://github.com/pytorch/pytorch/pull/203825) | [ROCm] Faster cumsum / cumprod / logcumsumexp: register-bloc... | @jerrymannil | closed | 2026-11-06 | 2026-11-27 |
| [#206279](https://github.com/pytorch/pytorch/pull/206279) | [mkldnn][24/N] Let inner_product_forward_expected_weights_de... | @frost-intel | open | 2026-11-23 | 2026-11-27 |
| [#206834](https://github.com/pytorch/pytorch/pull/206834) | [ROCm] Use the MI200 fp16 grad tolerance in test_sdpa_rewrit... | @pablo-garay | draft | 2026-11-26 | 2026-11-27 |
| [#206676](https://github.com/pytorch/pytorch/pull/206676) | [inductor] Make each autotune subprocess see only its own GP... | @lovetoburnswhen | open | 2026-11-25 | 2026-11-27 |
| [#192972](https://github.com/pytorch/pytorch/pull/192972) | [Testcase Refactoring] Migrate test_inplace_padding to hw_cl... | @leewayx | open | 2026-08-11 | 2026-11-27 |
| [#189335](https://github.com/pytorch/pytorch/pull/189335) | [Test] Using TEST_MULTIACCELERATOR for multi-gpu checking | @libohao1201 | open | 2026-07-09 | 2026-11-27 |
| [#206833](https://github.com/pytorch/pytorch/pull/206833) | [ROCm] native layernorm kernels | @anatoliylitv | draft | 2026-11-26 | 2026-11-26 |
| [#201107](https://github.com/pytorch/pytorch/pull/201107) | [ROCm] NHWC gather for upsample_bilinear2d_backward | @anatoliylitv | open | 2026-10-15 | 2026-11-26 |
| [#206820](https://github.com/pytorch/pytorch/pull/206820) | Build the reduced float Reduce test reference from the round... | @pablo-garay | draft | 2026-11-26 | 2026-11-26 |
| [#205613](https://github.com/pytorch/pytorch/pull/205613) | [ROCm] Test SDPA correctness for head_dim above 256 | @saman-amd | open | 2026-11-19 | 2026-11-26 |
| [#203218](https://github.com/pytorch/pytorch/pull/203218) | [xpu][inductor] Unskip test_flop_counter_op on XPU | @jkosnox | open | 2026-11-03 | 2026-11-26 |
| [#204592](https://github.com/pytorch/pytorch/pull/204592) | [Don't merge] Consolidated for XPU test PRs | @daisyden | draft | 2026-11-12 | 2026-11-26 |
| [#204295](https://github.com/pytorch/pytorch/pull/204295) | Scan non-innermost dims row by row in the CPU cumsum kernel | @egeboy35 | open | 2026-11-10 | 2026-11-26 |
| [#187778](https://github.com/pytorch/pytorch/pull/187778) | Flatten all_to_all_nd copy to fix narrow-row throughput | @kwen2501 | open | 2026-06-20 | 2026-11-26 |
| [#206705](https://github.com/pytorch/pytorch/pull/206705) | [inductor] Opt-in faster wide gather cats and tiled reductio... | @longwgmeta | open | 2026-11-26 | 2026-11-26 |
| [#192986](https://github.com/pytorch/pytorch/pull/192986) | [Testcase Refactoring] Split TestLookupTable and migrate to ... | @leewayx | draft | 2026-08-11 | 2026-11-26 |
| [#206739](https://github.com/pytorch/pytorch/pull/206739) | [ROCm] Vectorize inner-broadcast elementwise kernels on gfx1... | @haowu14 | open | 2026-11-26 | 2026-11-26 |
| [#201039](https://github.com/pytorch/pytorch/pull/201039) | [inductor][flydsl] Remove vendor checks from the shared FlyD... | @Peter9606 | open | 2026-10-15 | 2026-11-26 |
| [#203550](https://github.com/pytorch/pytorch/pull/203550) | [Testcase Refactoring] Move RoCm-scratch unit tests into a C... | @gavinwang269 | open | 2026-11-05 | 2026-11-26 |
| [#204852](https://github.com/pytorch/pytorch/pull/204852) | [ROCm] Treat gfx1250-strict as a gfx1250 peer target | @BLOrange-AMD | open | 2026-11-13 | 2026-11-26 |
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
Repo: `jax-ml/jax` | Last collected: 2026-11-27T17:41:28Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#42843](https://github.com/jax-ml/jax/pull/42843) | [ROCm] Allow post-release versions in the JAX version test r... | @zahiqbal | merged | 2026-11-23 | 2026-11-25 |
| [#41702](https://github.com/jax-ml/jax/pull/41702) | [ROCm] Trim wheel RUNPATH: drop per-family, tarball, cross-P... | @gulsumgudukbay | merged | 2026-10-16 | 2026-11-24 |
| [#42735](https://github.com/jax-ml/jax/pull/42735) | [ROCm] Switch the pinned ROCm CI legs from 10.1 to 10.2 | @magaonka-amd | merged | 2026-11-18 | 2026-11-23 |
| [#42753](https://github.com/jax-ml/jax/pull/42753) |  ROCm-from-pip install in the top-level install docs | @AratiGanesh | open | 2026-11-19 | 2026-11-23 |
| [#42746](https://github.com/jax-ml/jax/pull/42746) | [ROCm] Edit testScaledMatmul against an fp32 accumulation bo... | @shurale-nkn | open | 2026-11-18 | 2026-11-20 |
| [#42612](https://github.com/jax-ml/jax/pull/42612) | [ROCm] Build debug-symbol and ASAN ROCm wheels in nightly an... | @gulsumgudukbay | open | 2026-11-14 | 2026-11-19 |
| [#42709](https://github.com/jax-ml/jax/pull/42709) | [ROCm] Move remaining Bazel ROCm test jobs to the dedicated ... | @psanal35 | merged | 2026-11-17 | 2026-11-17 |
| [#42698](https://github.com/jax-ml/jax/pull/42698) | [Build] Read JAX version from `jax/version.py` in `rocm_whee... | @copybara-service[bot] | open | 2026-11-17 | 2026-11-17 |
| [#42668](https://github.com/jax-ml/jax/pull/42668) | [ROCm] Use static libc++ and C++20 for hermetic ROCm builds | @psanal35 | merged | 2026-11-16 | 2026-11-16 |
| [#42552](https://github.com/jax-ml/jax/pull/42552) | [ROCm] Fix tests that assume exactly 8 devices | @magaonka-amd | merged | 2026-11-12 | 2026-11-16 |
| [#41703](https://github.com/jax-ml/jax/pull/41703) | [ROCm] Build and test the ROCm wheels in the rocmless contai... | @gulsumgudukbay | merged | 2026-10-16 | 2026-11-12 |
| [#42311](https://github.com/jax-ml/jax/pull/42311) | [ROCm] Temporarily skip failing buffer callback tests | @psanal35 | open | 2026-11-04 | 2026-11-12 |
| [#42394](https://github.com/jax-ml/jax/pull/42394) | [ROCm] Compile IFRT IR MPMD programs on PJRT-backed IFRT cli... | @i-chaochen | open | 2026-11-06 | 2026-11-11 |
| [#42404](https://github.com/jax-ml/jax/pull/42404) | [jax-buildcop] Remove workflow-level `permissions: {}` from ... | @copybara-service[bot] | merged | 2026-11-06 | 2026-11-06 |
| [#42366](https://github.com/jax-ml/jax/pull/42366) | Run Bazel ROCm presubmit on the dedicated 1-GPU runner | @psanal35 | merged | 2026-11-05 | 2026-11-06 |
| [#42351](https://github.com/jax-ml/jax/pull/42351) | [CI] Forward `x64` and free-threaded Python flags in `ci/run... | @copybara-service[bot] | merged | 2026-11-05 | 2026-11-05 |
| [#42360](https://github.com/jax-ml/jax/pull/42360) | [CI] Fix ROCm presubmit fork gating and `actionlint` runner ... | @copybara-service[bot] | merged | 2026-11-05 | 2026-11-05 |
| [#41815](https://github.com/jax-ml/jax/pull/41815) | [ROCm] Switch the pinned ROCm CI legs from 10.0 to 10.1 | @magaonka-amd | merged | 2026-10-20 | 2026-11-05 |
| [#42294](https://github.com/jax-ml/jax/pull/42294) | [ROCm] : Remove volume mount on Bazel runner | @pelumi1163 | merged | 2026-11-04 | 2026-11-05 |
| [#42141](https://github.com/jax-ml/jax/pull/42141) | [ROCm] Run wheel packaging locally with remote compilation | @psanal35 | merged | 2026-10-30 | 2026-11-02 |
| [#42127](https://github.com/jax-ml/jax/pull/42127) | [jax-buildcop] Fix ROCm/oneAPI `static_libcxx` and CUDA 13 `... | @copybara-service[bot] | merged | 2026-10-29 | 2026-10-30 |
| [#42067](https://github.com/jax-ml/jax/pull/42067) | [ROCm] Enable remote compilation for jax | @alekstheod | merged | 2026-10-28 | 2026-10-29 |
| [#41986](https://github.com/jax-ml/jax/pull/41986) | [ROCm] Exclude lax_scipy_special_functions_test_gpu from ROC... | @psanal35 | merged | 2026-10-26 | 2026-10-27 |
| [#41230](https://github.com/jax-ml/jax/pull/41230) | [ROCM]  Add TheRock `rocm_sysdeps/lib` to wheel RUNPATHs nee... | @pemeliya | merged | 2026-10-02 | 2026-10-21 |
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
| [#40877](https://github.com/jax-ml/jax/pull/40877) | [ROCM] Added gfx1250 and gfx1250-strict targets | @zahiqbal | merged | 2026-09-22 | 2026-09-30 |
| [#40972](https://github.com/jax-ml/jax/pull/40972) | [ROCm] Enable build on rocm rbe and switch to dpx runners | @alekstheod | draft | 2026-09-25 | 2026-09-25 |
| [#40859](https://github.com/jax-ml/jax/pull/40859) | [ROCm] Build with the pinned ROCm, not rules_ml_toolchain's ... | @gulsumgudukbay | merged | 2026-09-22 | 2026-09-23 |
| [#40844](https://github.com/jax-ml/jax/pull/40844) | [ROCm] Trim ROCm skip debt: enable two stale skips | @magaonka-amd | merged | 2026-09-21 | 2026-09-21 |
| [#39846](https://github.com/jax-ml/jax/pull/39846) | [ROCm] Enable previously skipped unit tests on ROCm platform | @magaonka-amd | merged | 2026-08-10 | 2026-09-21 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-09-18 |
| [#40706](https://github.com/jax-ml/jax/pull/40706) | [ROCm] Skip torch dependency for Python 3.15 until wheels ar... | @pelumi1163 | open | 2026-09-15 | 2026-09-17 |
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-11-27T17:41:37Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#61662](https://github.com/vllm-project/vllm/pull/61662) | [ROCm][Perf][GLM-5.3-Flash] Mono decode layer for GLM-5.3-Fl... | @amd-sriram | open | 2026-10-14 | 2026-11-27 |
| [#67715](https://github.com/vllm-project/vllm/pull/67715) | [Bugfix][LoRA] Fail only the request when an adapter cannot ... | @BitlyTwiser | open | 2026-11-15 | 2026-11-27 |
| [#70112](https://github.com/vllm-project/vllm/pull/70112) | [Core/Scheduler] Fix infinite stall when unchunked MM placeh... | @Aravind0403 | open | 2026-11-26 | 2026-11-27 |
| [#55494](https://github.com/vllm-project/vllm/pull/55494) | [Kernel] Add losslessly packed BF16 lm_head backend | @adenzhou1350 | open | 2026-09-05 | 2026-11-27 |
| [#66987](https://github.com/vllm-project/vllm/pull/66987) | [MM][Kernel] FP8 ViT attention on SM 12.0 via FlashInfer's S... | @DuFanYin | open | 2026-11-11 | 2026-11-27 |
| [#66272](https://github.com/vllm-project/vllm/pull/66272) | [Perf][Parser] Skip intermediate argument conversion in buff... | @tiulpin | open | 2026-11-07 | 2026-11-27 |
| [#65220](https://github.com/vllm-project/vllm/pull/65220) | [Feature][Distributed] Default supported shared-memory queue... | @skhasawneh | draft | 2026-11-02 | 2026-11-27 |
| [#64335](https://github.com/vllm-project/vllm/pull/64335) | [Bugfix][RL] Destroy the previous NCCL communicator when the... | @hivaze | open | 2026-10-28 | 2026-11-27 |
| [#60743](https://github.com/vllm-project/vllm/pull/60743) | [Bugfix][MoRIIO] Fail startup when notify listener cannot bi... | @frank-suwen | open | 2026-10-09 | 2026-11-27 |
| [#68039](https://github.com/vllm-project/vllm/pull/68039) | [Build] Skip source fetches for unsupported CUDA architectur... | @xiangsiersheng-web | open | 2026-11-17 | 2026-11-27 |
| [#68680](https://github.com/vllm-project/vllm/pull/68680) | [ROCm][Recipe] Llama-3.3-70B-Instruct: add AMD FP8 variant (... | @mjkvaak-amd | draft | 2026-11-19 | 2026-11-27 |
| [#64964](https://github.com/vllm-project/vllm/pull/64964) | [Security] Keep prefill truncation state internal to each re... | @jperezdealgaba | open | 2026-11-01 | 2026-11-27 |
| [#59893](https://github.com/vllm-project/vllm/pull/59893) | [Bugfix][Core] Release the profile run's allocator cache bef... | @TyroneNel | open | 2026-10-03 | 2026-11-27 |
| [#69176](https://github.com/vllm-project/vllm/pull/69176) | [Bugfix][Kernel] Do not split strided logits in `top_k_per_r... | @xaguilar-amd | draft | 2026-11-21 | 2026-11-27 |
| [#70396](https://github.com/vllm-project/vllm/pull/70396) | [ROCm] PCP with FULL cudagraphs during decode | @simondanielsson | draft | 2026-11-27 | 2026-11-27 |
| [#70170](https://github.com/vllm-project/vllm/pull/70170) | [Perf][HY4 Flash] Sequence parallelism for iHC | @grYe99 | draft | 2026-11-26 | 2026-11-27 |
| [#69889](https://github.com/vllm-project/vllm/pull/69889) | [CPU] Support DeepSeekV3 routing in x86 int4/int8 MoE expert... | @aadwived | open | 2026-11-25 | 2026-11-27 |
| [#70036](https://github.com/vllm-project/vllm/pull/70036) | [MyPy][7/N] Enforce mypy for remaining standalone test direc... | @luyixiao95 | open | 2026-11-26 | 2026-11-27 |
| [#70399](https://github.com/vllm-project/vllm/pull/70399) | [Bugfix][Parser] Honor server-default force_nonempty_content... | @BachNg311 | draft | 2026-11-27 | 2026-11-27 |
| [#70368](https://github.com/vllm-project/vllm/pull/70368) | [Bugfix][Core] Validate multimodal placeholder ranges from e... | @pdtgct | draft | 2026-11-27 | 2026-11-27 |
| [#69934](https://github.com/vllm-project/vllm/pull/69934) | [Transformers backend] Use the flat `get_*_embeddings` when ... | @IlyasMoutawwakil | open | 2026-11-25 | 2026-11-27 |
| [#67714](https://github.com/vllm-project/vllm/pull/67714) | [Bugfix][Core] Stop starving a request that waits for a LoRA... | @BitlyTwiser | open | 2026-11-15 | 2026-11-27 |
| [#65958](https://github.com/vllm-project/vllm/pull/65958) | [Recipe] Kimi-K3.1-Pro: add MI325X (gfx942) single-node TP8 ... | @xaguilar-amd | open | 2026-11-05 | 2026-11-27 |
| [#69691](https://github.com/vllm-project/vllm/pull/69691) | [Bugfix][MoE][MXFP4] Fix emulation fallback ordering and inp... | @gwokhou | open | 2026-11-24 | 2026-11-27 |
| [#60294](https://github.com/vllm-project/vllm/pull/60294) | [ROCm] gfx950: use aiter.mqa_logits for the sparse indexer p... | @amd-sriram | open | 2026-10-06 | 2026-11-27 |
| [#60042](https://github.com/vllm-project/vllm/pull/60042) | [ROCm] Use aiter.paged_mqa_logits for the sparse indexer dec... | @amd-sriram | open | 2026-10-05 | 2026-11-27 |
| [#68968](https://github.com/vllm-project/vllm/pull/68968) | [MoE][FP8] Let out-of-tree platforms register FP8 MoE expert... | @R3hankhan123 | merged | 2026-11-20 | 2026-11-27 |
| [#67529](https://github.com/vllm-project/vllm/pull/67529) | [Online quantization] Deprecate `VLLM_FP8_MOE_REQUANT`/`VLLM... | @fxmarty-amd | draft | 2026-11-13 | 2026-11-27 |
| [#70391](https://github.com/vllm-project/vllm/pull/70391) | [ROCm][Kernel] Migrate rocm paged attention to torch stable ... | @giuseppegrossi | open | 2026-11-27 | 2026-11-27 |
| [#70390](https://github.com/vllm-project/vllm/pull/70390) | [Bugfix][Frontend] Reserve tools, conversation, messages, an... | @Dyslex7c | open | 2026-11-27 | 2026-11-27 |
| [#67367](https://github.com/vllm-project/vllm/pull/67367) | [ROCm][Perf][DSv4.1] Keep few-row gfx950 top-512 calls in on... | @okorzh-amd | open | 2026-11-13 | 2026-11-27 |
| [#70002](https://github.com/vllm-project/vllm/pull/70002) | [ROCm][Kernel] Migrate skinny gemms to libtorch stable | @giuseppegrossi | open | 2026-11-25 | 2026-11-27 |
| [#62916](https://github.com/vllm-project/vllm/pull/62916) | [Bugfix][KV Connector] Synchronize engine IDs across PCP ran... | @nwpu-zxr | draft | 2026-10-21 | 2026-11-27 |
| [#70171](https://github.com/vllm-project/vllm/pull/70171) | [Bugfix] Eagerly admit streaming requests before HTTP respon... | @Ruye-aa | open | 2026-11-26 | 2026-11-27 |
| [#65661](https://github.com/vllm-project/vllm/pull/65661) | [Bugfix][CPU] Support Mamba2 internal prefill checkpoints on... | @vietnamesekid | open | 2026-11-04 | 2026-11-27 |
| [#65427](https://github.com/vllm-project/vllm/pull/65427) | [Kernel][Perf] Do not split rows no longer than k in `top_k_... | @xaguilar-amd | merged | 2026-11-03 | 2026-11-27 |
| [#62666](https://github.com/vllm-project/vllm/pull/62666) | [ROCm][Perf] Extend ROCM_SEGMENTED_ATTN to D=512 for Gemma 4 | @big-yellow-duck | open | 2026-10-20 | 2026-11-27 |
| [#70114](https://github.com/vllm-project/vllm/pull/70114) | [ROCm][Qwen4Exp] Declare and test UMBP KV offloading support... | @haoshan98 | open | 2026-11-26 | 2026-11-27 |
| [#70295](https://github.com/vllm-project/vllm/pull/70295) | [MoE oracle][1/N] Move weight conversion onto the experts cl... | @R3hankhan123 | draft | 2026-11-27 | 2026-11-27 |
| [#68325](https://github.com/vllm-project/vllm/pull/68325) | [ROCm][Perf] Add tuned W8A8 block-FP8 Triton GEMM configs fo... | @BoyuZhang-amd | open | 2026-11-18 | 2026-11-27 |
| [#61091](https://github.com/vllm-project/vllm/pull/61091) | [ROCm][Perf] Add native per-token FP8 Triton linear backend ... | @big-yellow-duck | open | 2026-10-11 | 2026-11-27 |
| [#67844](https://github.com/vllm-project/vllm/pull/67844) | [ROCm] Enable Octave KV on RDNA4 with native HIP kernels | @big-yellow-duck | open | 2026-11-16 | 2026-11-27 |
| [#68468](https://github.com/vllm-project/vllm/pull/68468) | [Bugfix][DeepSeek v4.1] Align with `deepseek-recipe`: treat ... | @fxmarty-amd | open | 2026-11-18 | 2026-11-27 |
| [#62891](https://github.com/vllm-project/vllm/pull/62891) | [MyPy][9/N] Parent rollups and enable `tests/` | @hickeyma | open | 2026-10-21 | 2026-11-27 |
| [#61644](https://github.com/vllm-project/vllm/pull/61644) | [SP + Fused GEMM-Collective]: Support Eager Sequence Paralle... | @chaojun-zhang | open | 2026-10-14 | 2026-11-27 |
| [#70209](https://github.com/vllm-project/vllm/pull/70209) | [ROCm][Perf] W4A16: per-dtype dense prefill threshold, bf16 ... | @zohaibm-amd | draft | 2026-11-26 | 2026-11-27 |
| [#64752](https://github.com/vllm-project/vllm/pull/64752) | [ROCm] Skip RTLD_GLOBAL libtorch_cpu.so promotion when HSA_T... | @gurpreet-dhami | open | 2026-10-30 | 2026-11-27 |
| [#70136](https://github.com/vllm-project/vllm/pull/70136) | [Performance][Multimodal] Cache interpolated get_abs_pos emb... | @QwertyJack | open | 2026-11-26 | 2026-11-27 |
| [#64142](https://github.com/vllm-project/vllm/pull/64142) | [ROCm][Perf] Re-land the AITER preshuffled FP8 block-scale G... | @amd-sriram | open | 2026-10-27 | 2026-11-27 |
| [#55098](https://github.com/vllm-project/vllm/pull/55098) | [ROCm] Route AWQ linear through choose_mp_linear_kernel | @mgehre-amd | open | 2026-09-03 | 2026-11-27 |
| [#68060](https://github.com/vllm-project/vllm/pull/68060) | [ROCm][Perf] W4A16: serve deep-K skinny GEMM shapes with the... | @BoyuZhang-amd | open | 2026-11-17 | 2026-11-27 |
| [#66485](https://github.com/vllm-project/vllm/pull/66485) | [ROCm][Perf] Use 64 split-KV segments for small decode batch... | @tc3oliver | open | 2026-11-09 | 2026-11-27 |
| [#67816](https://github.com/vllm-project/vllm/pull/67816) | [KV Offload] generic backend for KV cache DRAM offload | @rikvanriel | open | 2026-11-15 | 2026-11-27 |
| [#70300](https://github.com/vllm-project/vllm/pull/70300) | [Model] HY4 Flash: support pipeline parallelism and DFly wit... | @jeejeelee | merged | 2026-11-27 | 2026-11-27 |
| [#70289](https://github.com/vllm-project/vllm/pull/70289) | [Refactor][Mamba] Unify MambaBase prefill checkpoint alignme... | @specture724 | merged | 2026-11-27 | 2026-11-27 |
| [#69452](https://github.com/vllm-project/vllm/pull/69452) | [Bugfix][Model] Inkling 2: stop Triton %16 recompiles in pre... | @simon-veitner-redhat | merged | 2026-11-23 | 2026-11-27 |
| [#69232](https://github.com/vllm-project/vllm/pull/69232) | [ROCm][Perf] FlyDSL INT4 QuickReduce: opt-in TP2 xGMI relay ... | @mjkvaak-amd | draft | 2026-11-22 | 2026-11-27 |
| [#70348](https://github.com/vllm-project/vllm/pull/70348) | [CI] Use SingleRankGroup instead of dist_init in single-GPU ... | @stefankoncarevic | merged | 2026-11-27 | 2026-11-27 |
| [#70333](https://github.com/vllm-project/vllm/pull/70333) | [CI][Kimi-K3] Expect prefiller prefix hits one unit lower un... | @bogdan-petkovic | merged | 2026-11-27 | 2026-11-27 |
| [#70166](https://github.com/vllm-project/vllm/pull/70166) | [Bugfix][Frontend] Clear AsyncMultiModalItemTracker callback... | @jkiczka-nvidia | merged | 2026-11-26 | 2026-11-27 |
| [#68488](https://github.com/vllm-project/vllm/pull/68488) | [Bugfix][Rust Frontend] Keep the most likely candidate's log... | @spped2000 | merged | 2026-11-18 | 2026-11-27 |
| [#64722](https://github.com/vllm-project/vllm/pull/64722) | [ROCm][MoRIIO] Support DCP for decode instance in PD disaggr... | @kliuae | open | 2026-10-30 | 2026-11-27 |
| [#70331](https://github.com/vllm-project/vllm/pull/70331) | [ROCm][MoE] Overlap large eager routed MoE dispatch and comb... | @fanxingran | open | 2026-11-27 | 2026-11-27 |
| [#70327](https://github.com/vllm-project/vllm/pull/70327) | [CI][LoRA] Enable embedding module LoRA in test_mixtral_lora | @bogdan-petkovic | merged | 2026-11-27 | 2026-11-27 |
| [#68606](https://github.com/vllm-project/vllm/pull/68606) | [Feature][EPLB] Run async policy computation in a persistent... | @freyfwt | merged | 2026-11-19 | 2026-11-27 |
| [#69064](https://github.com/vllm-project/vllm/pull/69064) | [Bug][Spec Decode] Enable VLM hidden states extraction | @HangruiCao2000 | merged | 2026-11-21 | 2026-11-27 |
| [#69250](https://github.com/vllm-project/vllm/pull/69250) | [XPU] Fix GDN fp16 long-context readout overflow | @jinyouzhi | open | 2026-11-22 | 2026-11-27 |
| [#67218](https://github.com/vllm-project/vllm/pull/67218) | [Bugfix][ROCm][MoRIIO] WRITE mode free prefill blocks releas... | @kliuae | merged | 2026-11-12 | 2026-11-27 |
| [#70305](https://github.com/vllm-project/vllm/pull/70305) | [ROCm][CI] Fix HY4 sequence parallel test on the ROCm decode... | @stefankoncarevic | merged | 2026-11-27 | 2026-11-27 |
| [#65128](https://github.com/vllm-project/vllm/pull/65128) | [MORI][DBO] Dual batch overlap with MoRI EPv2 (native and As... | @ChengYM5685 | open | 2026-11-02 | 2026-11-27 |
| [#67942](https://github.com/vllm-project/vllm/pull/67942) | [Bugfix][UMBP] Restore Mamba hybrid prefixes at boundaries i... | @isytwu | merged | 2026-11-16 | 2026-11-27 |
| [#70188](https://github.com/vllm-project/vllm/pull/70188) | [Recipe] Kimi-K3.1-Pro: B300 PD preset points 64, 264 and 64... | @mispa-ms | merged | 2026-11-26 | 2026-11-27 |
| [#67428](https://github.com/vllm-project/vllm/pull/67428) | [XPU][CI] Build and reuse XPU base image across CI runs | @RyanMa29 | merged | 2026-11-13 | 2026-11-27 |
| [#70294](https://github.com/vllm-project/vllm/pull/70294) | [Bugfix][ROCm][DSv4.1] Keep the FNUZ NaN byte out of the ind... | @yuzhouo7 | open | 2026-11-27 | 2026-11-27 |
| [#64435](https://github.com/vllm-project/vllm/pull/64435) | [DSv4.1][PCP] Support image input | @xijiaat | merged | 2026-10-29 | 2026-11-27 |
| [#67782](https://github.com/vllm-project/vllm/pull/67782) | [Bugfix][CPU] Skip unused embedding packs and refresh tied L... | @Totoro-qaq | merged | 2026-11-15 | 2026-11-27 |
| [#70220](https://github.com/vllm-project/vllm/pull/70220) | [ROCm][Perf] Use CDNA paged attention for dense LBHNC KV cac... | @Super262 | open | 2026-11-26 | 2026-11-27 |
| [#69960](https://github.com/vllm-project/vllm/pull/69960) | [Model][Hardware] Inkling: relative attention on SM8x via In... | @amasin2111 | merged | 2026-11-25 | 2026-11-27 |
| [#69838](https://github.com/vllm-project/vllm/pull/69838) | [Kimi K3][Bugfix] Honor indexer_logits_dtype in the DSA inde... | @mispa-ms | merged | 2026-11-25 | 2026-11-27 |
| [#70086](https://github.com/vllm-project/vllm/pull/70086) | [ROCm][CI] Wake the ROCm image cache bot on its two jobs' st... | @AndreasKaratzas | merged | 2026-11-26 | 2026-11-27 |
| [#70167](https://github.com/vllm-project/vllm/pull/70167) | [Bugfix][EPD] Preserve per-video processor kwargs during enc... | @grYe99 | merged | 2026-11-26 | 2026-11-27 |
| [#69390](https://github.com/vllm-project/vllm/pull/69390) | [Bugfix][ROCm][Quantization] Use kFp8StaticChannelSym for FB... | @gwokhou | open | 2026-11-23 | 2026-11-27 |
| [#69170](https://github.com/vllm-project/vllm/pull/69170) | [Perf][Attention] Vectorize per-token-head KV tile loads in ... | @Jeremiah-HL | merged | 2026-11-21 | 2026-11-27 |
| [#69603](https://github.com/vllm-project/vllm/pull/69603) | [ROCm][CI] Bound the logprob shift in the per-token-head KV ... | @gchinora | open | 2026-11-24 | 2026-11-27 |
| [#69622](https://github.com/vllm-project/vllm/pull/69622) | [Bugfix][Frontend] Kimi K3: accept strict tool schemas with ... | @AndreasKaratzas | merged | 2026-11-24 | 2026-11-27 |
| [#70067](https://github.com/vllm-project/vllm/pull/70067) | [Bugfix][DSv4.1] Avoid GPU<->CPU sync in eager _build_image_... | @pisceskkk | merged | 2026-11-26 | 2026-11-27 |
| [#68374](https://github.com/vllm-project/vllm/pull/68374) | [Bugfix][ROCm][MoRIIO] Skip layers sharing another layer's K... | @kliuae | merged | 2026-11-18 | 2026-11-27 |
| [#67944](https://github.com/vllm-project/vllm/pull/67944) | [Perf][UMBP] Default the embedded DRAM pool to 0.99/0.97 evi... | @isytwu | merged | 2026-11-16 | 2026-11-27 |
| [#69920](https://github.com/vllm-project/vllm/pull/69920) | [KV Offload] Store the TP-replicated KV regions only once in... | @kliuae | open | 2026-11-25 | 2026-11-27 |
| [#69165](https://github.com/vllm-project/vllm/pull/69165) | [Model][Hardware] Inkling 2: run on Ampere and Ada (SM80/SM8... | @Ar4ikov | merged | 2026-11-21 | 2026-11-27 |
| [#69404](https://github.com/vllm-project/vllm/pull/69404) | [Bugfix] Hy4-flash Engram: hash padded-vocab ids as pad, rej... | @simon-veitner-redhat | merged | 2026-11-23 | 2026-11-27 |
| [#66502](https://github.com/vllm-project/vllm/pull/66502) | [Feature][KV Connector][Mooncake] Support HiSparse host-pool... | @wjinxu | merged | 2026-11-09 | 2026-11-27 |
| [#70214](https://github.com/vllm-project/vllm/pull/70214) | [Model][Qwen4Exp] Apply an online quantization target to the... | @avifenesh | merged | 2026-11-26 | 2026-11-27 |
| [#70004](https://github.com/vllm-project/vllm/pull/70004) | [ROCm][HY4] fp8_ds_mla with sinks, ShardQ and iHC sequence p... | @AndreasKaratzas | merged | 2026-11-25 | 2026-11-27 |
| [#60783](https://github.com/vllm-project/vllm/pull/60783) | [Bugfix][KV Connector][ROCm] MoRIIO: accept kernel-block-spl... | @MIR-AMD | open | 2026-10-09 | 2026-11-27 |
| [#69819](https://github.com/vllm-project/vllm/pull/69819) | [Bugfix][MoRIIO] Support grouped 4D KV cache blocks | @maralbahari | merged | 2026-11-25 | 2026-11-27 |
| [#68821](https://github.com/vllm-project/vllm/pull/68821) | [Feature][KV Connector] Add PeerL1Connector to restore prefi... | @maning00 | draft | 2026-11-20 | 2026-11-27 |
| [#69797](https://github.com/vllm-project/vllm/pull/69797) | [ROCm] ViT: fall back from FLASH_ATTN when flash_attn cannot... | @Shan2L | open | 2026-11-25 | 2026-11-27 |
| [#69573](https://github.com/vllm-project/vllm/pull/69573) | [Bugfix][Model] Hy4 VL: emit encoder graph axis keys only wi... | @AndreasKaratzas | merged | 2026-11-24 | 2026-11-27 |
| [#70197](https://github.com/vllm-project/vllm/pull/70197) | [LoRA] Add --lora-split-k-reduction for LoRA BI | @jeejeelee | merged | 2026-11-26 | 2026-11-27 |
| [#62536](https://github.com/vllm-project/vllm/pull/62536) | [ROCm] Update ROCm to 10.1 and MORI to v1.2.4 and amd-smi fi... | @rasmith | open | 2026-10-19 | 2026-11-27 |
| [#70238](https://github.com/vllm-project/vllm/pull/70238) | [ROCm][KV Offload] SimpleCPUOffload: keep the CPU KV cache u... | @Fangzhou-Ai | draft | 2026-11-27 | 2026-11-27 |
| [#62524](https://github.com/vllm-project/vllm/pull/62524) | [ROCm][CI] Fix ViT backend and custom all-reduce tests with ... | @Concurrensee | merged | 2026-10-19 | 2026-11-26 |
| [#70169](https://github.com/vllm-project/vllm/pull/70169) | [ROCm][Bugfix] Pass is_ultraquant_run in automatic attention... | @SRKRZ23 | merged | 2026-11-26 | 2026-11-26 |
| [#69911](https://github.com/vllm-project/vllm/pull/69911) | [ROCm][CI] Make the child stack dump work on Python 3.14 | @bogdan-petkovic | merged | 2026-11-25 | 2026-11-26 |
| [#70159](https://github.com/vllm-project/vllm/pull/70159) | [CI] Skip the global cleanup after kernel tests that skipped... | @stefankoncarevic | merged | 2026-11-26 | 2026-11-26 |
| [#70155](https://github.com/vllm-project/vllm/pull/70155) | [CI][ROCm] Speed up the block-quant reference matmul in kern... | @stefankoncarevic | merged | 2026-11-26 | 2026-11-26 |
| [#70134](https://github.com/vllm-project/vllm/pull/70134) | [ROCm][CI] Use an fp32 lm_head for granite4_h in test_pp_tie... | @stefankoncarevic | merged | 2026-11-26 | 2026-11-26 |
| [#62090](https://github.com/vllm-project/vllm/pull/62090) | [CI][Unit Test] Patch MoE layer unit tests for Blackwell and... | @johncalesp | merged | 2026-10-16 | 2026-11-26 |
| [#68836](https://github.com/vllm-project/vllm/pull/68836) | [Bugfix][KV Offload] Offload the prompt tail of every attent... | @ChengYao-amd | merged | 2026-11-20 | 2026-11-26 |
| [#70026](https://github.com/vllm-project/vllm/pull/70026) | [KV Offload] Prefer eviction of non-retained CPU chunks | @maithilijoshi20 | merged | 2026-11-26 | 2026-11-26 |
| [#60839](https://github.com/vllm-project/vllm/pull/60839) | [ROCm][Bugfix] Keep non-float all-reduces off AITER custom a... | @mjkvaak-amd | merged | 2026-10-09 | 2026-11-26 |
| [#70009](https://github.com/vllm-project/vllm/pull/70009) | [Bugfix] Avoid importing ROCm platform in AITER W4A16 suppor... | @zhenwei-intel | merged | 2026-11-26 | 2026-11-26 |
| [#67977](https://github.com/vllm-project/vllm/pull/67977) | [CI][ROCm] Transcendental, reduction and MFMA bounds for spe... | @divakar-amd | merged | 2026-11-16 | 2026-11-26 |
| [#69625](https://github.com/vllm-project/vllm/pull/69625) | [ROCm][Kimi-K3] Log the SiTUv2 MoE activation mode and corre... | @AndreasKaratzas | merged | 2026-11-24 | 2026-11-26 |
| [#65202](https://github.com/vllm-project/vllm/pull/65202) | [ROCm][RDNA] Add gfx1170 and gfx1171 support | @umarkovi-amd | merged | 2026-11-02 | 2026-11-26 |
| [#63078](https://github.com/vllm-project/vllm/pull/63078) | [Bugfix][Muse Spark] Keep the FP32 RoPE tables in FP32 | @fanxingran | merged | 2026-10-22 | 2026-11-26 |
| [#66159](https://github.com/vllm-project/vllm/pull/66159) | [ROCm] Support DP-attention in AITER Triton W4A16 MoE | @simondanielsson | merged | 2026-11-06 | 2026-11-25 |
| [#65742](https://github.com/vllm-project/vllm/pull/65742) | [ROCm][Perf][DSv4.1] Use the single-kernel DSv4 top-k on ROC... | @davzhuAMD | merged | 2026-11-04 | 2026-11-25 |
| [#67306](https://github.com/vllm-project/vllm/pull/67306) | [ROCm][Muse Spark] Decode MoE on native routes | @mawong-amd | merged | 2026-11-12 | 2026-11-25 |
| [#69321](https://github.com/vllm-project/vllm/pull/69321) | [Perf][ROCm][Attention] Use smaller tiles in the prefix_pref... | @lijipeng787 | merged | 2026-11-23 | 2026-11-24 |
| [#69374](https://github.com/vllm-project/vllm/pull/69374) | [CI][ROCm] Spawn the GPU memory wait worker | @RuibinCheung | merged | 2026-11-23 | 2026-11-24 |
| [#63867](https://github.com/vllm-project/vllm/pull/63867) | [ROCm][Perf] Skip masked-out context tiles for sliding-windo... | @phambinhfin | merged | 2026-10-27 | 2026-11-23 |
| [#65935](https://github.com/vllm-project/vllm/pull/65935) | [Bugfix][ROCm] benchmark_moe: keep HIP_VISIBLE_DEVICES for R... | @YaashuDave | merged | 2026-11-05 | 2026-11-20 |
| [#68012](https://github.com/vllm-project/vllm/pull/68012) | [ROCm] Warm the AITER FA extend kernels from the attention b... | @amd-mghanimi | merged | 2026-11-16 | 2026-11-20 |
| [#68528](https://github.com/vllm-project/vllm/pull/68528) | [ROCm][CI] Don't run every AMD step on files only the CUDA b... | @ahsan-ca | merged | 2026-11-18 | 2026-11-20 |
| [#65911](https://github.com/vllm-project/vllm/pull/65911) | [ROCm][Perf] W4A16: serve 6-8 decode rows with the HIP skinn... | @weimin023 | merged | 2026-11-05 | 2026-11-20 |
| [#60153](https://github.com/vllm-project/vllm/pull/60153) | [ROCm][DSv4.1][Perf] Fuse the gfx942 mHC seam in the V4.1 AM... | @frida-andersson | merged | 2026-10-06 | 2026-11-20 |
| [#61428](https://github.com/vllm-project/vllm/pull/61428) | [ROCm][Perf] Fuse GDN decode (conv1d + delta rule + gated no... | @eky-amd | merged | 2026-10-13 | 2026-11-20 |
| [#67414](https://github.com/vllm-project/vllm/pull/67414) | [Bugfix][Quantization] Remove the Qwen3.5 MTP draft quantiza... | @vllmellm | merged | 2026-11-13 | 2026-11-19 |
| [#67365](https://github.com/vllm-project/vllm/pull/67365) | [ROCm][Perf][DSv4.1] Pack the decode sparse-MLA ragged top-k... | @okorzh-amd | merged | 2026-11-13 | 2026-11-19 |
| [#64715](https://github.com/vllm-project/vllm/pull/64715) | [ROCm][UMBP] Support UMBP standalone mode for DeepSeek-V4.1-... | @shen-shanshan | merged | 2026-10-30 | 2026-11-19 |
| [#67364](https://github.com/vllm-project/vllm/pull/67364) | [ROCm][Perf][DSv4.1] Insert the compressed KV cache inside t... | @okorzh-amd | merged | 2026-11-13 | 2026-11-19 |
| [#66444](https://github.com/vllm-project/vllm/pull/66444) | [ROCm] wvSplitK: keep bf16 N=5 at YTILE 2 on wave64 to avoid... | @XiaobingSuper | merged | 2026-11-09 | 2026-11-19 |
| [#68188](https://github.com/vllm-project/vllm/pull/68188) | [ROCm][CI] Force the ASM path in test_online_mxfp4_hadamard[... | @mirza-halilcevic | merged | 2026-11-17 | 2026-11-18 |
| [#58838](https://github.com/vllm-project/vllm/pull/58838) | [vLLM IR][RoPE] Port base RotaryEmbedding to a vLLM IR op (C... | @mpashkovskii | merged | 2026-09-26 | 2026-11-18 |
| [#68086](https://github.com/vllm-project/vllm/pull/68086) | [ROCm][Perf][MoE] Dequantize only distinct routed experts in... | @AndreasKaratzas | merged | 2026-11-17 | 2026-11-18 |
| [#67567](https://github.com/vllm-project/vllm/pull/67567) | [ROCm][CI] Make test_amd_ci_fast_exit independent of inherit... | @AndreasKaratzas | merged | 2026-11-13 | 2026-11-18 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-11-27T17:41:48Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#53604](https://github.com/sgl-project/sglang/pull/53604) | [Fix] sglang-server: Preserve invalidations during model fac... | @CLCK0622 | open | 2026-11-27 | 2026-11-27 |
| [#52182](https://github.com/sgl-project/sglang/pull/52182) | [Perf] [NVIDIA] muse-spark: Add a Hopper (H200) serving path... | @DongyunZou | open | 2026-11-22 | 2026-11-27 |
| [#53603](https://github.com/sgl-project/sglang/pull/53603) | [Fix] kimi_k3: Key image identities by decode route and prep... | @TirthBorasaniya | open | 2026-11-27 | 2026-11-27 |
| [#53601](https://github.com/sgl-project/sglang/pull/53601) | [Fix] kernel: Avoid SIGFPE on empty token bitmask batches | @YuvrajSinghBhadoria2 | open | 2026-11-27 | 2026-11-27 |
| [#53600](https://github.com/sgl-project/sglang/pull/53600) | [Fix] spec_decode: Skip empty local batch in speculative att... | @YuvrajSinghBhadoria2 | open | 2026-11-27 | 2026-11-27 |
| [#52622](https://github.com/sgl-project/sglang/pull/52622) | [Feat] xpu: Consolidate simple XPU enablements | @airMeng | open | 2026-11-23 | 2026-11-27 |
| [#49315](https://github.com/sgl-project/sglang/pull/49315) | [Fix] [AMD] kimi-k3: Give AITER's A16W4 SiTU MoE the separat... | @amd-mvarjoka | open | 2026-11-09 | 2026-11-27 |
| [#53312](https://github.com/sgl-project/sglang/pull/53312) | [Fix] diffusion: Warm up each BCG benchmark run at its own q... | @mickqian | merged | 2026-11-26 | 2026-11-27 |
| [#53171](https://github.com/sgl-project/sglang/pull/53171) | [Doc] cookbook: Rename the VLA section to Action Models and ... | @mickqian | open | 2026-11-25 | 2026-11-27 |
| [#52399](https://github.com/sgl-project/sglang/pull/52399) | [CI] nixl: Bump the CUDA CI pin for PyTorch 2.14 | @algebra-MCX | open | 2026-11-22 | 2026-11-27 |
| [#33198](https://github.com/sgl-project/sglang/pull/33198) | [Fix] mimo-audio: Fix causal sliding-window attention in tok... | @CJack812 | open | 2026-08-01 | 2026-11-27 |
| [#53602](https://github.com/sgl-project/sglang/pull/53602) | [Doc] cookbook: Refresh NEW tags on diffusion pages | @mickqian | open | 2026-11-27 | 2026-11-27 |
| [#52468](https://github.com/sgl-project/sglang/pull/52468) | [Feat] warmup: Add a concurrent_prefill warmup for multi-req... | @DongyunZou | open | 2026-11-23 | 2026-11-27 |
| [#53599](https://github.com/sgl-project/sglang/pull/53599) | [Fix] jit: Build with the pip CUDA toolkit when there is no ... | @DarkSharpness | open | 2026-11-27 | 2026-11-27 |
| [#47673](https://github.com/sgl-project/sglang/pull/47673) | [Feat] qwen4-exp: Add local and auto/manual remote Engram st... | @magicYang1573 | open | 2026-10-31 | 2026-11-27 |
| [#52650](https://github.com/sgl-project/sglang/pull/52650) | [Fix] responses: Keep images in function_call_output | @phphlio1 | open | 2026-11-23 | 2026-11-27 |
| [#51229](https://github.com/sgl-project/sglang/pull/51229) | [Feat] scheduler: Allow lpm with priority scheduling | @phphlio1 | open | 2026-11-18 | 2026-11-27 |
| [#47111](https://github.com/sgl-project/sglang/pull/47111) | [Fix] gemma4: Refold the router scale when it is reloaded | @hivaze | open | 2026-10-28 | 2026-11-27 |
| [#53515](https://github.com/sgl-project/sglang/pull/53515) | [Fix] constrained: Synchronize grammar admission across atte... | @zavia1997 | open | 2026-11-27 | 2026-11-27 |
| [#51778](https://github.com/sgl-project/sglang/pull/51778) | [Fix] gemma4: Scope Triton image masks to sliding layers | @phphlio1 | open | 2026-11-20 | 2026-11-27 |
| [#34302](https://github.com/sgl-project/sglang/pull/34302) | [Feat] nvfp4_online: Support online NVFP4 for dense linear l... | @b8zhong | open | 2026-08-10 | 2026-11-27 |
| [#52648](https://github.com/sgl-project/sglang/pull/52648) | [Fix] function_call: Drop Gemma 4 tool calls cut off by max_... | @phphlio1 | open | 2026-11-23 | 2026-11-27 |
| [#52899](https://github.com/sgl-project/sglang/pull/52899) | [Perf] diffusion: Build every head-group copy width when the... | @mickqian | merged | 2026-11-24 | 2026-11-27 |
| [#53081](https://github.com/sgl-project/sglang/pull/53081) | [Feat] WeightCache: Define the weight snapshot protocol, sch... | @Shunkangz | open | 2026-11-25 | 2026-11-27 |
| [#53598](https://github.com/sgl-project/sglang/pull/53598) | [Fix] sampling: Reject a custom_params that is not an object... | @BachNg311 | open | 2026-11-27 | 2026-11-27 |
| [#53452](https://github.com/sgl-project/sglang/pull/53452) | [Perf] diffusion/magi2: Run the text encoder on the GPU, str... | @mickqian | merged | 2026-11-27 | 2026-11-27 |
| [#53315](https://github.com/sgl-project/sglang/pull/53315) | [Fix] mem_cache: Refresh the hybrid prompt checkpoint when a... | @Vegetog | open | 2026-11-26 | 2026-11-27 |
| [#53596](https://github.com/sgl-project/sglang/pull/53596) | [Fix] function_call: Preserve streamed tool arguments with e... | @WeiLiuu | open | 2026-11-27 | 2026-11-27 |
| [#46268](https://github.com/sgl-project/sglang/pull/46268) | [Fix] deterministic: Run the MoE routing functions eagerly i... | @aarnetalman | open | 2026-10-24 | 2026-11-27 |
| [#53594](https://github.com/sgl-project/sglang/pull/53594) | [CI] diffusion: Fix Python startup during model prefetch | @mickqian | open | 2026-11-27 | 2026-11-27 |
| [#53143](https://github.com/sgl-project/sglang/pull/53143) | [Feat] mem_cache: Support pipeline parallelism in linker lay... | @alphabetc1 | open | 2026-11-25 | 2026-11-27 |
| [#53586](https://github.com/sgl-project/sglang/pull/53586) | [Perf] mem_cache: Lease only the deepest Mamba state on Moon... | @alphabetc1 | open | 2026-11-27 | 2026-11-27 |
| [#52448](https://github.com/sgl-project/sglang/pull/52448) | [Perf] [AMD] diffusion: Drop the redundant fp32 casts and se... | @yichiche | open | 2026-11-23 | 2026-11-27 |
| [#49812](https://github.com/sgl-project/sglang/pull/49812) | [Fix] [AMD] deterministic: Batch-invariant mHC pre for GLM-5... | @aarnetalman | open | 2026-11-11 | 2026-11-27 |
| [#51577](https://github.com/sgl-project/sglang/pull/51577) | [Fix] [AMD] diffusion: Keep gfx12xx off the slow hipBLASLt l... | @yichiche | open | 2026-11-19 | 2026-11-27 |
| [#52504](https://github.com/sgl-project/sglang/pull/52504) | [Feat] [AMD] speculative: Add per-request sliding-window dra... | @yuychang | open | 2026-11-23 | 2026-11-27 |
| [#41573](https://github.com/sgl-project/sglang/pull/41573) | [Fix] [AMD] mimo-v2.6: Enable MXFP4 on ROCm | @pbkowalski | open | 2026-09-28 | 2026-11-27 |
| [#48072](https://github.com/sgl-project/sglang/pull/48072) | [Perf] [NVIDIA] dp-attention: Route the padding rows of the ... | @QNan0513 | open | 2026-11-03 | 2026-11-27 |
| [#41879](https://github.com/sgl-project/sglang/pull/41879) | [Perf] [AMD] Qwen3.5/Qwen3.8: Opt-in AITER FlyDSL causal con... | @amd-nprotaso | open | 2026-09-30 | 2026-11-27 |
| [#51894](https://github.com/sgl-project/sglang/pull/51894) | [Fix] [AMD] distributed: Reuse TP communicators for full-wid... | @yuychang | open | 2026-11-20 | 2026-11-27 |
| [#53555](https://github.com/sgl-project/sglang/pull/53555) | [Fix] quantization: Add native PyTorch defaults for FP8 quan... | @labAxiaoming | open | 2026-11-27 | 2026-11-27 |
| [#49283](https://github.com/sgl-project/sglang/pull/49283) | [Perf] [AMD] deepseek-v4.1: Run the closed mHC seams through... | @amd-pedghazi | open | 2026-11-09 | 2026-11-27 |
| [#44466](https://github.com/sgl-project/sglang/pull/44466) | [Fix] attention: Keep shared-KV verify split partials in FP3... | @riversky0014 | open | 2026-10-15 | 2026-11-27 |
| [#48620](https://github.com/sgl-project/sglang/pull/48620) | [Fix] [AMD] JIT: Port per-token group FP8 quantization v2 to... | @mustafa-khalid | open | 2026-11-05 | 2026-11-27 |
| [#46653](https://github.com/sgl-project/sglang/pull/46653) | [Perf] [AMD] Kimi-K3: static FP8 dense layers and tuned deco... | @aryatsc | open | 2026-10-26 | 2026-11-27 |
| [#48641](https://github.com/sgl-project/sglang/pull/48641) | [Perf] [AMD] deepseek-v4.1: Keep the exact decoder SWA tail ... | @amd-pedghazi | open | 2026-11-05 | 2026-11-27 |
| [#53249](https://github.com/sgl-project/sglang/pull/53249) | [Refactor] mem_cache: Own the req_to_token row width on the ... | @hnyls2002 | merged | 2026-11-26 | 2026-11-27 |
| [#52437](https://github.com/sgl-project/sglang/pull/52437) | [Fix] hicache: Wait for stream-fenced write-back copies befo... | @alphabetc1 | merged | 2026-11-23 | 2026-11-27 |
| [#47241](https://github.com/sgl-project/sglang/pull/47241) | [Perf] [AMD] dsv4: Speed up the gfx950 swap-AB decode attent... | @anhminhnguyenhoang | open | 2026-10-29 | 2026-11-27 |
| [#40585](https://github.com/sgl-project/sglang/pull/40585) | [Fix] [AMD] kernels: Repair fused diffusion QK-norm JIT kern... | @avjves | open | 2026-09-21 | 2026-11-27 |
| [#47276](https://github.com/sgl-project/sglang/pull/47276) | [Perf] [AMD] dsa: Faster gfx950 fused indexer logits and top... | @dorado269 | open | 2026-10-29 | 2026-11-27 |
| [#50021](https://github.com/sgl-project/sglang/pull/50021) | [Fix] nemotron: Apply the NemotronH defaults to Nemotron 3 N... | @leejnau | merged | 2026-11-12 | 2026-11-27 |
| [#51967](https://github.com/sgl-project/sglang/pull/51967) | [Fix] attention: Default to triton when FlashInfer FA2 can't... | @leejnau | merged | 2026-11-20 | 2026-11-27 |
| [#47193](https://github.com/sgl-project/sglang/pull/47193) | [Perf] [AMD] attention: Switch MLA decode to Aiter on gfx125... | @mqhc2020 | open | 2026-10-29 | 2026-11-27 |
| [#48690](https://github.com/sgl-project/sglang/pull/48690) | [Perf] [AMD] KDA: Build extend chunk indices from host seq l... | @aryatsc | open | 2026-11-05 | 2026-11-27 |
| [#50651](https://github.com/sgl-project/sglang/pull/50651) | [Feat] [NVIDIA] deepseek-v4.1: Honor --dsa-topk-backend flas... | @zianglih | open | 2026-11-15 | 2026-11-27 |
| [#49500](https://github.com/sgl-project/sglang/pull/49500) | [Fix] [AMD] dsv4: Use the gfx942 FP4 indexer kernels | @mustafa-khalid | open | 2026-11-10 | 2026-11-27 |
| [#53557](https://github.com/sgl-project/sglang/pull/53557) | [Perf] [NVIDIA] inkling2: Gate low-M MXFP8 MoE grouped GEMM ... | @Jiminator | merged | 2026-11-27 | 2026-11-27 |
| [#53532](https://github.com/sgl-project/sglang/pull/53532) | [Test] inkling2: Add Inkling-2-Mini e2e test | @ispobock | merged | 2026-11-27 | 2026-11-27 |
| [#53370](https://github.com/sgl-project/sglang/pull/53370) | [Perf] [NVIDIA] inkling2: SM120 low-M NVFP4 MoE grouped GEMM... | @Jiminator | merged | 2026-11-26 | 2026-11-27 |
| [#52416](https://github.com/sgl-project/sglang/pull/52416) | [Test] [AMD] diffusion: Skip the CUDA-only mapped-weight sna... | @michaelzhang-ai | merged | 2026-11-23 | 2026-11-27 |
| [#53369](https://github.com/sgl-project/sglang/pull/53369) | [Perf] [NVIDIA] inkling2: SM120 low-M MXFP8 MoE grouped GEMM... | @Jiminator | merged | 2026-11-26 | 2026-11-27 |
| [#53368](https://github.com/sgl-project/sglang/pull/53368) | [Perf] [NVIDIA] inkling2: SM120 low-M MoE routing and metada... | @Jiminator | merged | 2026-11-26 | 2026-11-27 |
| [#43360](https://github.com/sgl-project/sglang/pull/43360) | [Feat] [AMD] fp4: Select the Quark MXFP4 dense GEMM with --f... | @vorapolsiloai | open | 2026-10-09 | 2026-11-27 |
| [#53531](https://github.com/sgl-project/sglang/pull/53531) | [Perf] inkling2: data-parallel image encoding under --mm-ena... | @sahirema | draft | 2026-11-27 | 2026-11-27 |
| [#52790](https://github.com/sgl-project/sglang/pull/52790) | [Feat] [AMD] inkling2: re-tile the prefill expert GEMM for g... | @sahirema | open | 2026-11-24 | 2026-11-27 |
| [#42388](https://github.com/sgl-project/sglang/pull/42388) | [Feat] gdn: Bit-exact tuple replay for linear-chain spec ver... | @hsthe29 | open | 2026-10-03 | 2026-11-27 |
| [#43499](https://github.com/sgl-project/sglang/pull/43499) | [Fix] [AMD] deepseek-v4.1: Fix two MegaMoE crashes at attent... | @amd-pedghazi | open | 2026-10-10 | 2026-11-27 |
| [#45820](https://github.com/sgl-project/sglang/pull/45820) | [CI] [AMD] dsa: Run the DSA dense-MHA fallback cases on gfx9... | @amd-pedghazi | open | 2026-10-22 | 2026-11-27 |
| [#42502](https://github.com/sgl-project/sglang/pull/42502) | [Perf] [AMD] deepseek-v4.1: All-gather the owned Engram rows... | @amd-pedghazi | open | 2026-10-04 | 2026-11-27 |
| [#51001](https://github.com/sgl-project/sglang/pull/51001) | [Perf] [AMD] deepseek-v4.1: Serve group32 FP8 dense linears ... | @lishuoshuo-amd | open | 2026-11-17 | 2026-11-27 |
| [#53554](https://github.com/sgl-project/sglang/pull/53554) | [Fix] test: Stub flush_wrapper in the PP loop stage-capacity... | @alphabetc1 | merged | 2026-11-27 | 2026-11-27 |
| [#43737](https://github.com/sgl-project/sglang/pull/43737) | chore: update CI test est_time values | @sglang-bot | closed | 2026-10-12 | 2026-11-27 |
| [#53546](https://github.com/sgl-project/sglang/pull/53546) | [Fix] ci: Skip short first-attempt runs of every event in th... | @bingxche | merged | 2026-11-27 | 2026-11-27 |
| [#43126](https://github.com/sgl-project/sglang/pull/43126) | [Perf] [AMD] Kimi-K3: emit AITER's MoE sort from the radix-4... | @yuychang | closed | 2026-10-08 | 2026-11-27 |
| [#52855](https://github.com/sgl-project/sglang/pull/52855) | [Perf] Diffusion: Reuse fixed Anima text K/V within eager de... | @BBuf | merged | 2026-11-24 | 2026-11-27 |
| [#51185](https://github.com/sgl-project/sglang/pull/51185) | [Feat] [NPU] glm5: Add interleaved prefill CP for GLM-5.3-Fl... | @stellaxcpeng | merged | 2026-11-18 | 2026-11-27 |
| [#53293](https://github.com/sgl-project/sglang/pull/53293) | [Feat] disaggregation: Choose when a PD decode server stream... | @metamergebot | merged | 2026-11-26 | 2026-11-27 |
| [#53435](https://github.com/sgl-project/sglang/pull/53435) | [Fix] CPU: Unlink shared memory after mapping | @yuchengliu1 | merged | 2026-11-26 | 2026-11-27 |
| [#52957](https://github.com/sgl-project/sglang/pull/52957) | [Feat] metrics: Export total_kv_bytes_usage, the used-page s... | @metamergebot | merged | 2026-11-25 | 2026-11-27 |
| [#37333](https://github.com/sgl-project/sglang/pull/37333) | [CI] [CPU] xeon: Add Nightly Test (Xeon) for large-model acc... | @MingxuZh | merged | 2026-09-01 | 2026-11-27 |
| [#53513](https://github.com/sgl-project/sglang/pull/53513) | [Test] hicache: Retain checkpoints for branching KL tests | @alphabetc1 | merged | 2026-11-27 | 2026-11-27 |
| [#53145](https://github.com/sgl-project/sglang/pull/53145) | [CI] [Intel] ci/xpu: Keep the HF token and shared caches awa... | @arathi-hlab | merged | 2026-11-25 | 2026-11-27 |
| [#53516](https://github.com/sgl-project/sglang/pull/53516) | [Doc] [NPU] cookbook: add Kimi K3.1 Pro A3 Series deployment | @amote-i | merged | 2026-11-27 | 2026-11-27 |
| [#52632](https://github.com/sgl-project/sglang/pull/52632) | [Perf] [NVIDIA] kimi-k3: Push the fused all-reduce up to 2 M... | @willhu-jpg | merged | 2026-11-23 | 2026-11-27 |
| [#53214](https://github.com/sgl-project/sglang/pull/53214) | [Fix] [NPU] kimi-k3: Fix graph capture with shared-expert ov... | @hanwlax | merged | 2026-11-26 | 2026-11-27 |
| [#53517](https://github.com/sgl-project/sglang/pull/53517) | [Test] [NPU] acc: detect the PR pipeline by workflow ref | @pllimax | merged | 2026-11-27 | 2026-11-27 |
| [#53486](https://github.com/sgl-project/sglang/pull/53486) | [Doc] [AMD] GLM-5.3: Add the MI355X FP8 DCP4 recipe for conc... | @jiejingzhangamd | merged | 2026-11-27 | 2026-11-27 |
| [#52518](https://github.com/sgl-project/sglang/pull/52518) | [Feat] [NPU] kimi-k3.1: Enable DFLASH speculative decoding o... | @iridiumine | merged | 2026-11-23 | 2026-11-27 |
| [#51524](https://github.com/sgl-project/sglang/pull/51524) | [CI] [AMD] ci: Run 122 more kernel tests per PR on AMD, as C... | @bingxche | merged | 2026-11-19 | 2026-11-27 |
| [#52870](https://github.com/sgl-project/sglang/pull/52870) | [Refactor] minimax_sparse: Split MiniMax sparse attention in... | @Denji-kk | merged | 2026-11-24 | 2026-11-27 |
| [#39595](https://github.com/sgl-project/sglang/pull/39595) | [Feat] [AMD] linear-attn: Add FlyDSL GDN prefill backend | @chuyeh | merged | 2026-09-15 | 2026-11-27 |
| [#53348](https://github.com/sgl-project/sglang/pull/53348) | [Fix] attention: Size the remaining KV row bounds by the req... | @hnyls2002 | merged | 2026-11-26 | 2026-11-27 |
| [#40872](https://github.com/sgl-project/sglang/pull/40872) | [Fix] [AMD] aiter: Fix NEXTN draft extend crash on the CK ke... | @chuyeh | merged | 2026-09-23 | 2026-11-26 |
| [#43242](https://github.com/sgl-project/sglang/pull/43242) | [Fix] diffusion: keep TP/Ulysses head shards on the unsharde... | @fusheng-ji | merged | 2026-10-09 | 2026-11-26 |
| [#53131](https://github.com/sgl-project/sglang/pull/53131) | [Fix] [AMD] docker: Bump TileLang to v0.1.12 for apache-tvm-... | @JustinTong0323 | merged | 2026-11-25 | 2026-11-26 |
| [#47856](https://github.com/sgl-project/sglang/pull/47856) | [Fix] [NPU] profiler: :bug: Fix patches and daemon trace par... | @TallMessiWu | merged | 2026-11-02 | 2026-11-26 |
| [#51196](https://github.com/sgl-project/sglang/pull/51196) | [Fix] kernels/quantization: Use int64 row offsets in the per... | @xiaoke12345678 | merged | 2026-11-18 | 2026-11-26 |
| [#52926](https://github.com/sgl-project/sglang/pull/52926) | [Fix] mem_cache: Size req_to_token rows from the per-decode ... | @hnyls2002 | merged | 2026-11-24 | 2026-11-25 |
| [#52728](https://github.com/sgl-project/sglang/pull/52728) | [Feat] [AMD] inkling2: Add the MI35x norm, sconv and MTP ker... | @kevin-mii | merged | 2026-11-24 | 2026-11-25 |
| [#52727](https://github.com/sgl-project/sglang/pull/52727) | [Feat] [AMD] inkling2: Add the MI35x MoE routing and expert ... | @kevin-mii | merged | 2026-11-24 | 2026-11-25 |
| [#52873](https://github.com/sgl-project/sglang/pull/52873) | [Fix] [AMD] docker: Pin apache-tvm-ffi==0.1.11 in ROCm image... | @JustinTong0323 | merged | 2026-11-24 | 2026-11-25 |
| [#52726](https://github.com/sgl-project/sglang/pull/52726) | [Feat] [AMD] inkling2: Add the MI35x attention kernels | @kevin-mii | merged | 2026-11-24 | 2026-11-25 |
| [#50804](https://github.com/sgl-project/sglang/pull/50804) | [Refactor] models: Fix silent failures and prune dead code i... | @BBuf | merged | 2026-11-16 | 2026-11-25 |
| [#47278](https://github.com/sgl-project/sglang/pull/47278) | [Perf] [AMD] dsa: gfx950 split-K decode plan for 64-head fp8... | @dorado269 | merged | 2026-10-29 | 2026-11-25 |
| [#44415](https://github.com/sgl-project/sglang/pull/44415) | [Fix] [AMD] GLM-5.3-Flash: Keep the MoE correction bias fp32 | @Jacob0226 | merged | 2026-10-15 | 2026-11-25 |
| [#51631](https://github.com/sgl-project/sglang/pull/51631) | [Perf] [AMD] carv2: SPX-specific gfx1250 table for TP2/TP4 | @hubertlu-tw | merged | 2026-11-19 | 2026-11-24 |
| [#44265](https://github.com/sgl-project/sglang/pull/44265) | [Feat] [AMD] dsv4: Dispatch Mega-mHC prefill to aiter on gfx... | @stahtine | merged | 2026-10-14 | 2026-11-24 |
| [#50685](https://github.com/sgl-project/sglang/pull/50685) | [Perf] [AMD] muse-spark: Faster FP8 joint router/pooler GEMM... | @jiaqiang-dot-liu | merged | 2026-11-16 | 2026-11-24 |
| [#49566](https://github.com/sgl-project/sglang/pull/49566) | [Perf] [AMD] rotary_embedding: tile fused RoPE and KV write ... | @akao-amd | merged | 2026-11-10 | 2026-11-24 |
| [#49347](https://github.com/sgl-project/sglang/pull/49347) | [Perf] [AMD] mla: Read the fused_qkv_a slices in place in th... | @jiaryang | merged | 2026-11-09 | 2026-11-24 |
| [#48154](https://github.com/sgl-project/sglang/pull/48154) | [Perf] [AMD] mla: Use the gfx950 aiter RoPE, RMSNorm and MLA... | @jiaryang | merged | 2026-11-03 | 2026-11-24 |
| [#52644](https://github.com/sgl-project/sglang/pull/52644) | [Fix] [AMD] moe: Fall back to the Triton MoE runner on gfx12... | @hubertlu-tw | merged | 2026-11-23 | 2026-11-24 |
| [#50196](https://github.com/sgl-project/sglang/pull/50196) | [Perf] [AMD] mhc: Enable AITER mHC kernels on gfx942 | @siliangchen-amd | merged | 2026-11-12 | 2026-11-23 |
| [#45196](https://github.com/sgl-project/sglang/pull/45196) | [Perf] [AMD] Qwen3.8: Serve QSA decode with AITER's fused Fl... | @amd-nprotaso | merged | 2026-10-19 | 2026-11-23 |
| [#48649](https://github.com/sgl-project/sglang/pull/48649) | [Perf] [AMD] qsa: Faster decode MQA logits on ROCm (padded Q... | @amd-cgilli | merged | 2026-11-05 | 2026-11-23 |
| [#51523](https://github.com/sgl-project/sglang/pull/51523) | [CI] [AMD] ci: Run 73 more CUDA per-PR tests on AMD in their... | @bingxche | merged | 2026-11-19 | 2026-11-23 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-11-27T17:41:54Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#12813](https://github.com/triton-lang/triton/pull/12813) | [AMD] Fix rounding-mode handling in FpToFpOp lowering | @umangyadav | open | 2026-11-17 | 2026-11-27 |
| [#12857](https://github.com/triton-lang/triton/pull/12857) | [AMD] Remove MoveUpPrologueLoads pass | @lijinpei-amd | merged | 2026-11-20 | 2026-11-27 |
| [#12691](https://github.com/triton-lang/triton/pull/12691) | [AMD][Gluon] Fix scaled_downcast for CDNA4 verification and ... | @lijinpei-amd | merged | 2026-11-10 | 2026-11-27 |
| [#12961](https://github.com/triton-lang/triton/pull/12961) | [CONSAN][AMD][CDNA5] Instrument split cluster barriers | @PMylon | open | 2026-11-26 | 2026-11-27 |
| [#12967](https://github.com/triton-lang/triton/pull/12967) | [AMD] Lower eviction_policy in tt.cache_policy to LLVM IR | @wzn406589639-sudo | open | 2026-11-27 | 2026-11-27 |
| [#12828](https://github.com/triton-lang/triton/pull/12828) | [AMD] Swizzle the LDS buffer of a dot operand reached throug... | @klin2024 | open | 2026-11-18 | 2026-11-27 |
| [#12937](https://github.com/triton-lang/triton/pull/12937) | [AMD][BUILD] Add missing amd build script for `dev-install-l... | @AlexAUT | merged | 2026-11-24 | 2026-11-26 |
| [#12943](https://github.com/triton-lang/triton/pull/12943) | [AMD] Allow TDM loads into one piece of a partitioned buffer | @ppalaniappan-amd | open | 2026-11-24 | 2026-11-26 |
| [#12964](https://github.com/triton-lang/triton/pull/12964) | [AMD] Accept buffer descriptors and soffset in buffer atomic... | @justinrosner | draft | 2026-11-26 | 2026-11-26 |
| [#12835](https://github.com/triton-lang/triton/pull/12835) | [Build] Fix TRITON_AMD_CODEGEN_PATH to copy codegen library ... | @benrichard-amd | merged | 2026-11-19 | 2026-11-26 |
| [#12938](https://github.com/triton-lang/triton/pull/12938) | [AMD] Fix multi-instruction partitioned TDM copies across CT... | @PMylon | open | 2026-11-24 | 2026-11-26 |
| [#12233](https://github.com/triton-lang/triton/pull/12233) | [AMD] Support scheduling and LDS prefetch for sliced GEMM ke... | @plognjen | open | 2026-10-12 | 2026-11-26 |
| [#12734](https://github.com/triton-lang/triton/pull/12734) | [AMD]Support FP6 in Gluon on CDNA4 | @knwng | draft | 2026-11-13 | 2026-11-25 |
| [#12948](https://github.com/triton-lang/triton/pull/12948) | [AMD] Fix signed tl.atomic_max / tl.atomic_min in intra-wave... | @shotsan | merged | 2026-11-25 | 2026-11-25 |
| [#12593](https://github.com/triton-lang/triton/pull/12593) | [AMD][CDNA5] Emulate descriptor reductions with global atomi... | @nzaghen | open | 2026-11-02 | 2026-11-25 |
| [#12604](https://github.com/triton-lang/triton/pull/12604) | [AMD][gfx1250] Keep whole-line epilogue stores for WMMA | @reger-men | open | 2026-11-03 | 2026-11-25 |
| [#12880](https://github.com/triton-lang/triton/pull/12880) | [AMD][gfx1250] Extend the TDM copy reorder to non-scaled dot... | @yiqian1 | merged | 2026-11-20 | 2026-11-25 |
| [#12928](https://github.com/triton-lang/triton/pull/12928) | [AMD] Apply target CPU and features to bundled device librar... | @justinrosner | merged | 2026-11-23 | 2026-11-24 |
| [#12781](https://github.com/triton-lang/triton/pull/12781) | [AMD][GLUON] Add AMD gluon tutorials | @borontion | open | 2026-11-16 | 2026-11-24 |
| [#12747](https://github.com/triton-lang/triton/pull/12747) | [AMD] Add RDNA1/RDNA2 (gfx10) target support | @PelaGB17 | open | 2026-11-13 | 2026-11-24 |
| [#12755](https://github.com/triton-lang/triton/pull/12755) | [Autotuner][AMD] Prune compiled configs before benchmarking ... | @CRobeck | open | 2026-11-13 | 2026-11-24 |
| [#12356](https://github.com/triton-lang/triton/pull/12356) | [QoL] Extend llvm build targets to support building AMD code... | @AlexAUT | merged | 2026-10-19 | 2026-11-24 |
| [#12887](https://github.com/triton-lang/triton/pull/12887) | [LLVM] Update LLVM to 293a85c0 and AMD CodeGen to 1cc81891 | @antiagainst | draft | 2026-11-21 | 2026-11-23 |
| [#12929](https://github.com/triton-lang/triton/pull/12929) | [AMD] Support rank-reducing TDM stores | @justinrosner | draft | 2026-11-23 | 2026-11-23 |
| [#12802](https://github.com/triton-lang/triton/pull/12802) |  [AMD] Add k_warp_bases to the WMMA layout for per-warp K or... | @Dewei-Wang-sh | draft | 2026-11-17 | 2026-11-23 |
| [#12286](https://github.com/triton-lang/triton/pull/12286) | [AMD][membar] Prove slots of loop-carried views of multi-buf... | @yanxuer-999 | open | 2026-10-14 | 2026-11-23 |
| [#12587](https://github.com/triton-lang/triton/pull/12587) | [AMD] Add warp_pipeline_stage(schedule_hint="mfma-valu") and... | @zhanglx13 | open | 2026-11-02 | 2026-11-23 |
| [#12854](https://github.com/triton-lang/triton/pull/12854) | [AMD] Restore the masked offset for pointer-based buffers | @Liang-jianhao97 | open | 2026-11-20 | 2026-11-21 |
| [#12884](https://github.com/triton-lang/triton/pull/12884) | [AMD] Build LLVM @1cc8189160e9 for CodeGen | @antiagainst | merged | 2026-11-21 | 2026-11-21 |
| [#12877](https://github.com/triton-lang/triton/pull/12877) | [AMD] Enable ConSan on gfx950 with warp-scheduling guards | @Max191 | open | 2026-11-20 | 2026-11-20 |
| [#12634](https://github.com/triton-lang/triton/pull/12634) | [AMD][Triton] Use aligned buffer mask offsets when bounds pe... | @Liang-jianhao97 | draft | 2026-11-05 | 2026-11-20 |
| [#12852](https://github.com/triton-lang/triton/pull/12852) | [AMD] Scope the CDNA5 WMMA FileCheck assertion | @bartek-openai | merged | 2026-11-20 | 2026-11-20 |
| [#12841](https://github.com/triton-lang/triton/pull/12841) | [AMD] Fix MN packed scaled argument transformation in Decomp... | @alefimov-amd | merged | 2026-11-19 | 2026-11-19 |
| [#12800](https://github.com/triton-lang/triton/pull/12800) | [AMD][gfx1250] Give AsyncTDMIntrinsicWait's token a replacem... | @yiqian1 | merged | 2026-11-17 | 2026-11-19 |
| [#12833](https://github.com/triton-lang/triton/pull/12833) | [AMD] [gfx1250-strict] Fix WMMA Fallback + Allow Now-Support... | @amirumoAMD | merged | 2026-11-18 | 2026-11-19 |
| [#12836](https://github.com/triton-lang/triton/pull/12836) | [AMD] Avoid importing torch for pointer range specialization | @ThomasRaoux | merged | 2026-11-19 | 2026-11-19 |
| [#12838](https://github.com/triton-lang/triton/pull/12838) | [AMD] Load the mbarrier state atomically in the wait loop | @jammm | open | 2026-11-19 | 2026-11-19 |
| [#12759](https://github.com/triton-lang/triton/pull/12759) | [AMD][Gluon] Add CDNA5 cooperative atomic ops | @efric | open | 2026-11-14 | 2026-11-19 |
| [#12686](https://github.com/triton-lang/triton/pull/12686) | [AMD] Implement TargetFeatures with mlir::ROCDL::TargetInfo | @krzysz00 | open | 2026-11-09 | 2026-11-18 |
| [#12810](https://github.com/triton-lang/triton/pull/12810) | [AMD] Drop the workaround for swizzle reorder | @borontion | merged | 2026-11-17 | 2026-11-18 |
| [#12714](https://github.com/triton-lang/triton/pull/12714) | [AMD] Preserve store coalescing when bypassing epilogue rela... | @leonling-ll | merged | 2026-11-11 | 2026-11-18 |
| [#12814](https://github.com/triton-lang/triton/pull/12814) | [AMD][NFC] Table-driven FpToFpOp lowering | @umangyadav | draft | 2026-11-18 | 2026-11-18 |
| [#12809](https://github.com/triton-lang/triton/pull/12809) | [AMD] Remove preshuffle overhead from MXFP4 GEMM on gfx950 | @leonling-ll | open | 2026-11-17 | 2026-11-17 |
| [#12804](https://github.com/triton-lang/triton/pull/12804) | [AMD] Report backend compilation failures as BackendCompilat... | @jungpark-mlir | draft | 2026-11-17 | 2026-11-17 |
| [#12782](https://github.com/triton-lang/triton/pull/12782) | [AMD] Avoid hashing stale cluster iterators in initSchedule | @kazhang2 | open | 2026-11-16 | 2026-11-17 |
| [#12715](https://github.com/triton-lang/triton/pull/12715) | [AMD] Expose AMD LDS allocation to LLVM with static shared m... | @njriasan | merged | 2026-11-11 | 2026-11-17 |
| [#12656](https://github.com/triton-lang/triton/pull/12656) | [AMD] Build LLVM @293a85c048f7 for CodeGen | @njriasan | merged | 2026-11-07 | 2026-11-16 |
| [#12115](https://github.com/triton-lang/triton/pull/12115) | [AMD] Use native F8F6F4 MFMAs when scales are absent | @dhernandez0 | draft | 2026-10-05 | 2026-11-16 |
| [#12657](https://github.com/triton-lang/triton/pull/12657) | [AMD] Make release atomics cover writes from every warp | @antiagainst | merged | 2026-11-08 | 2026-11-14 |
| [#12719](https://github.com/triton-lang/triton/pull/12719) | [AMD][GLUON] Add bank conflict detection for padded shared l... | @borontion | merged | 2026-11-12 | 2026-11-13 |
| [#12736](https://github.com/triton-lang/triton/pull/12736) | [AMD] Add `libdevice.ffs` for the HIP backend | @antiagainst | merged | 2026-11-13 | 2026-11-13 |
| [#12596](https://github.com/triton-lang/triton/pull/12596) | [AMD] Fix TDM copies to and from shared memory subviews | @justinrosner | merged | 2026-11-03 | 2026-11-13 |
| [#12633](https://github.com/triton-lang/triton/pull/12633) | [AMD][CDNA5] Fix partition selection for transposing LDS loa... | @PMylon | merged | 2026-11-05 | 2026-11-12 |
| [#12716](https://github.com/triton-lang/triton/pull/12716) | [AMD]Handle tt.annotate in Pointer Canonicalization | @knwng | merged | 2026-11-11 | 2026-11-12 |
| [#12669](https://github.com/triton-lang/triton/pull/12669) | [AMD] Invalidate the compilation cache on the MIR swap knobs | @tyb0807 | merged | 2026-11-09 | 2026-11-12 |
| [#12648](https://github.com/triton-lang/triton/pull/12648) | [AMD] Infer async_wait completion scope | @jungpark-mlir | merged | 2026-11-06 | 2026-11-11 |
| [#12702](https://github.com/triton-lang/triton/pull/12702) | [AMD]Support PartitionedSharedLayout in TDM Store and Scatte... | @knwng | merged | 2026-11-10 | 2026-11-10 |
| [#12651](https://github.com/triton-lang/triton/pull/12651) | [AMD]Support PartitionedSharedLayout in TDM Gather | @knwng | merged | 2026-11-06 | 2026-11-10 |
| [#12646](https://github.com/triton-lang/triton/pull/12646) | [AMD][ConSan] Handle startup cluster barrier synchronization... | @PMylon | merged | 2026-11-06 | 2026-11-10 |
| [#12697](https://github.com/triton-lang/triton/pull/12697) | [AMD][CI] Bump rocjitsu image | @sriakrish | merged | 2026-11-10 | 2026-11-10 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-11-27T17:41:57Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#5591](https://github.com/ROCm/AMDMIGraphX/pull/5591) | [AIMIGRAPHX-1328] MXR Enhancements: external weights and sha... | @gkrivor | open | 2026-11-23 | 2026-11-27 |
| [#5605](https://github.com/ROCm/AMDMIGraphX/pull/5605) | Add mlir_float16_accumulation backend option to request 16-b... | @VishalX | open | 2026-11-26 | 2026-11-27 |
| [#5613](https://github.com/ROCm/AMDMIGraphX/pull/5613) | gpu: add mlir_num_ctas, mlir_warp_specialize and lds_carveou... | @anilmartha | open | 2026-11-27 | 2026-11-27 |
| [#5609](https://github.com/ROCm/AMDMIGraphX/pull/5609) | [AIMIGRAPHX-1316] Return a non-zero exit code from migraphx-... | @VishalX | open | 2026-11-27 | 2026-11-27 |
| [#5578](https://github.com/ROCm/AMDMIGraphX/pull/5578) | gpu: declare gfx_default_rocblas unconditionally to support ... | @akshat-lakhera | open | 2026-11-18 | 2026-11-27 |
| [#5579](https://github.com/ROCm/AMDMIGraphX/pull/5579) | tf: isolate protobuf messages in tensorflow_for_migraphx pac... | @akshat-lakhera | open | 2026-11-18 | 2026-11-27 |
| [#5612](https://github.com/ROCm/AMDMIGraphX/pull/5612) | docs(conf): bump ROCm version to 7.14.2 | @peterjunpark | draft | 2026-11-27 | 2026-11-27 |
| [#5611](https://github.com/ROCm/AMDMIGraphX/pull/5611) | [AIMIGRAPHX-1318] Add ATG zoo golden-value check to model zo... | @anupsing-amd | open | 2026-11-27 | 2026-11-27 |
| [#5610](https://github.com/ROCm/AMDMIGraphX/pull/5610) | Pack nonstandard GPU outputs after fusion. | @jtuyls | open | 2026-11-27 | 2026-11-27 |
| [#5462](https://github.com/ROCm/AMDMIGraphX/pull/5462) | Bump RocMlirTriton with triton_amd_codegen library | @ilango100 | open | 2026-10-30 | 2026-11-27 |
| [#5608](https://github.com/ROCm/AMDMIGraphX/pull/5608) | Align the topk lds buffer so a pair moves in one access | @kazhang2 | open | 2026-11-27 | 2026-11-27 |
| [#5527](https://github.com/ROCm/AMDMIGraphX/pull/5527) | [ROCM-30410] Fix ScatterND ignoring negative indices | @tanzeel-amd | open | 2026-11-13 | 2026-11-27 |
| [#5569](https://github.com/ROCm/AMDMIGraphX/pull/5569) | Parse Slice with run-time bounds over a static input as dyn_... | @kazhang2 | open | 2026-11-18 | 2026-11-27 |
| [#5450](https://github.com/ROCm/AMDMIGraphX/pull/5450) | Combined data dependent support branches | @CharlieL7 | open | 2026-10-28 | 2026-11-27 |
| [#5562](https://github.com/ROCm/AMDMIGraphX/pull/5562) | split_sym_dim: specialize the branches of an If with a run-t... | @klin2024 | open | 2026-11-17 | 2026-11-27 |
| [#5506](https://github.com/ROCm/AMDMIGraphX/pull/5506) | Support in-memory external initializers and avoid stack over... | @ivarusic-amd | open | 2026-11-12 | 2026-11-26 |
| [#5598](https://github.com/ROCm/AMDMIGraphX/pull/5598) | Add a compile option to save the weights to an external file | @pfultz2 | open | 2026-11-25 | 2026-11-26 |
| [#5583](https://github.com/ROCm/AMDMIGraphX/pull/5583) | Write fp32 scores for unfused fp16 attention blocks to preve... | @menglcai | open | 2026-11-20 | 2026-11-26 |
| [#5539](https://github.com/ROCm/AMDMIGraphX/pull/5539) | Fix split_sym_dim blocks in loop bodies: outer-module inputs... | @klin2024 | open | 2026-11-14 | 2026-11-26 |
| [#5521](https://github.com/ROCm/AMDMIGraphX/pull/5521) | Accept Loop body outputs with fixed symbolic shapes | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5495](https://github.com/ROCm/AMDMIGraphX/pull/5495) | Fold single-element widening converts in propagate_constant ... | @klin2024 | open | 2026-11-09 | 2026-11-26 |
| [#5496](https://github.com/ROCm/AMDMIGraphX/pull/5496) | Write a Loop scan output that the body returns as a paramete... | @klin2024 | open | 2026-11-09 | 2026-11-26 |
| [#5514](https://github.com/ROCm/AMDMIGraphX/pull/5514) | Parse Pad with pads that resolve to symbolic expressions | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5516](https://github.com/ROCm/AMDMIGraphX/pull/5516) | Skip the slice-squeeze rewrite for a squeeze to a scalar (re... | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5518](https://github.com/ROCm/AMDMIGraphX/pull/5518) | Skip symbolic reshapes in the layout_convolution score | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5522](https://github.com/ROCm/AMDMIGraphX/pull/5522) | Lower a bounded dynamic_range to the host on the GPU | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5523](https://github.com/ROCm/AMDMIGraphX/pull/5523) | Run a topk on the host when it exceeds the GPU kernel | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5524](https://github.com/ROCm/AMDMIGraphX/pull/5524) | Accept int64 in the GPU device visitor | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5530](https://github.com/ROCm/AMDMIGraphX/pull/5530) | Convert to bool as nonzero on ref | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5533](https://github.com/ROCm/AMDMIGraphX/pull/5533) | Skip tuple parameters when the driver warns about unset inpu... | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5534](https://github.com/ROCm/AMDMIGraphX/pull/5534) | Keep nested converts that change the values | @klin2024 | open | 2026-11-14 | 2026-11-26 |
| [#5536](https://github.com/ROCm/AMDMIGraphX/pull/5536) | Read the output index of a GPU loop body from padded paramet... | @klin2024 | open | 2026-11-14 | 2026-11-26 |
| [#5538](https://github.com/ROCm/AMDMIGraphX/pull/5538) | Fix a GPU Loop body that returns a fixed_pad | @klin2024 | open | 2026-11-14 | 2026-11-26 |
| [#5546](https://github.com/ROCm/AMDMIGraphX/pull/5546) | Only fuse and split the users of an instruction in its own m... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5547](https://github.com/ROCm/AMDMIGraphX/pull/5547) | Keep inputs from enclosing modules when fusing into MLIR | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5552](https://github.com/ROCm/AMDMIGraphX/pull/5552) | Make a dim_param with a fixed value a literal with symbolic ... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5553](https://github.com/ROCm/AMDMIGraphX/pull/5553) | Slice a static input by symbolic bounds with dyn_slice | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5554](https://github.com/ROCm/AMDMIGraphX/pull/5554) | Unify the symbolic dims an elementwise op requires to be equ... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5555](https://github.com/ROCm/AMDMIGraphX/pull/5555) | Keep the rank of a one-element tensor in rewrites that meet ... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5558](https://github.com/ROCm/AMDMIGraphX/pull/5558) | Keep the broadcast of a sliced 1-D tensor in find_slice_shap... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5559](https://github.com/ROCm/AMDMIGraphX/pull/5559) | Skip GPU copies of empty arguments with offload copy | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5561](https://github.com/ROCm/AMDMIGraphX/pull/5561) | Read the values of an enclosing module as the canonical shap... | @klin2024 | open | 2026-11-17 | 2026-11-26 |
| [#5517](https://github.com/ROCm/AMDMIGraphX/pull/5517) | Do not fuse split groups whose members read each other (regr... | @klin2024 | open | 2026-11-13 | 2026-11-26 |
| [#5439](https://github.com/ROCm/AMDMIGraphX/pull/5439) | KV cache attention flash decoding | @bdevorem | open | 2026-10-26 | 2026-11-26 |
| [#5593](https://github.com/ROCm/AMDMIGraphX/pull/5593) | Eliminate nested concats and gate the conv concat split fusi... | @pfultz2 | open | 2026-11-24 | 2026-11-26 |
| [#5537](https://github.com/ROCm/AMDMIGraphX/pull/5537) | Preserve explicit zero padding before MaxPool | @Kataglyphis | open | 2026-11-14 | 2026-11-25 |
| [#5502](https://github.com/ROCm/AMDMIGraphX/pull/5502) | Enable OCP fp8 for gfx117x | @ppetrovi-amd | open | 2026-11-11 | 2026-11-25 |
| [#5565](https://github.com/ROCm/AMDMIGraphX/pull/5565) | Exit the hiprtc driver without running DLL detach on Windows... | @ppetrovi-amd | open | 2026-11-17 | 2026-11-25 |
| [#5477](https://github.com/ROCm/AMDMIGraphX/pull/5477) | Binary cache read only option | @pnikolic-amd | open | 2026-11-04 | 2026-11-25 |
| [#5599](https://github.com/ROCm/AMDMIGraphX/pull/5599) | Memory map ONNX external data instead of copying it into lit... | @pfultz2 | open | 2026-11-25 | 2026-11-25 |
| [#5597](https://github.com/ROCm/AMDMIGraphX/pull/5597) | Symbolic LLM Support  | @shivadbhavsar | draft | 2026-11-24 | 2026-11-24 |
| [#5568](https://github.com/ROCm/AMDMIGraphX/pull/5568) | [DO NOT REVIEW] Free shared weight literals with the last pr... | @danieyan-amd | open | 2026-11-17 | 2026-11-24 |
| [#5567](https://github.com/ROCm/AMDMIGraphX/pull/5567) | [DO NOT REVIEW] Free shared weight literals with the last pr... | @danieyan-amd | open | 2026-11-17 | 2026-11-24 |
| [#5566](https://github.com/ROCm/AMDMIGraphX/pull/5566) | Free shared weight literals with the last program that uses ... | @danieyan-amd | open | 2026-11-17 | 2026-11-24 |
| [#5595](https://github.com/ROCm/AMDMIGraphX/pull/5595) | Add support for fp32 winograd for gfx11 | @pfultz2 | open | 2026-11-24 | 2026-11-24 |
| [#5227](https://github.com/ROCm/AMDMIGraphX/pull/5227) | fix: enable Linux build hardening flags and CI checksec gate | @causten | open | 2026-08-31 | 2026-11-23 |
| [#5501](https://github.com/ROCm/AMDMIGraphX/pull/5501) | Parse ONNX FLOAT8E4M3FN and FLOAT8E5M2 tensors | @ppetrovi-amd | open | 2026-11-11 | 2026-11-23 |
| [#5503](https://github.com/ROCm/AMDMIGraphX/pull/5503) | Weigh channels_auto layout copies by the bytes they move | @ppetrovi-amd | open | 2026-11-11 | 2026-11-23 |
| [#5560](https://github.com/ROCm/AMDMIGraphX/pull/5560) | Allow If branches with different symbolic output shapes | @klin2024 | open | 2026-11-17 | 2026-11-23 |
| [#5556](https://github.com/ROCm/AMDMIGraphX/pull/5556) | split_sym_dim: specialize attention over a variable KV cache | @klin2024 | open | 2026-11-17 | 2026-11-23 |
| [#5548](https://github.com/ROCm/AMDMIGraphX/pull/5548) | Let the ONNX parser use given values for an input | @klin2024 | open | 2026-11-17 | 2026-11-23 |
| [#5485](https://github.com/ROCm/AMDMIGraphX/pull/5485) | Time benchmark candidates as HIP graphs  | @kazhang2 | open | 2026-11-06 | 2026-11-23 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2026-11-22 |
| [#5590](https://github.com/ROCm/AMDMIGraphX/pull/5590) | Fix linear ONNX Resize indexing for strided inputs on ROCm 7... | @varyagnord | open | 2026-11-22 | 2026-11-22 |
| [#5576](https://github.com/ROCm/AMDMIGraphX/pull/5576) | Parse ONNX GatherElements with indices dynamic on the gather... | @klin2024 | open | 2026-11-18 | 2026-11-21 |
| [#5575](https://github.com/ROCm/AMDMIGraphX/pull/5575) | Read ONNX Tile repeats from sym_eval when eval is empty | @klin2024 | open | 2026-11-18 | 2026-11-21 |
| [#5574](https://github.com/ROCm/AMDMIGraphX/pull/5574) | Parse ONNX Tile of a dynamic input | @klin2024 | open | 2026-11-18 | 2026-11-21 |
| [#5573](https://github.com/ROCm/AMDMIGraphX/pull/5573) | Parse ONNX Expand of a dynamic input with constant dims | @klin2024 | open | 2026-11-18 | 2026-11-21 |
| [#5572](https://github.com/ROCm/AMDMIGraphX/pull/5572) | Parse LayerNormalization with a dynamic input and a 1-D scal... | @klin2024 | open | 2026-11-18 | 2026-11-21 |
| [#5520](https://github.com/ROCm/AMDMIGraphX/pull/5520) | Slice a symbolic shape by run-time bounds with dyn_slice | @klin2024 | open | 2026-11-13 | 2026-11-21 |
| [#5582](https://github.com/ROCm/AMDMIGraphX/pull/5582) | Report the configured commit in the version string | @causten | open | 2026-11-19 | 2026-11-20 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | open | 2026-04-15 | 2026-11-20 |
| [#5482](https://github.com/ROCm/AMDMIGraphX/pull/5482) | Fuse the chunked linear attention recurrence into one kernel | @pfultz2 | open | 2026-11-05 | 2026-11-20 |
| [#5290](https://github.com/ROCm/AMDMIGraphX/pull/5290) | Bump rocm-docs-core from 1.40.2 to 1.41.0 in /docs/sphinx | @dependabot[bot] | open | 2026-09-21 | 2026-11-20 |
| [#5281](https://github.com/ROCm/AMDMIGraphX/pull/5281) | Bump soupsieve from 2.8.4 to 2.9 in /docs/sphinx | @dependabot[bot] | open | 2026-09-18 | 2026-11-20 |
| [#5458](https://github.com/ROCm/AMDMIGraphX/pull/5458) | Fix GPU compile for deep graphs, wide concats, and long stat... | @cliffcai | open | 2026-10-30 | 2026-11-20 |
| [#5447](https://github.com/ROCm/AMDMIGraphX/pull/5447) | Parse LinearAttention and fuse causal gemm-elementwise-gemm ... | @pfultz2 | open | 2026-10-27 | 2026-11-19 |
| [#5186](https://github.com/ROCm/AMDMIGraphX/pull/5186) | Jenkins: retry checkout scm with backoff and debug diagnosti... | @causten | open | 2026-08-24 | 2026-11-19 |
| [#5169](https://github.com/ROCm/AMDMIGraphX/pull/5169) | fix(security): spawn processes directly instead of through p... | @causten | open | 2026-08-21 | 2026-11-19 |
| [#5512](https://github.com/ROCm/AMDMIGraphX/pull/5512) | MaskRCNN and SSD examples | @CharlieL7 | open | 2026-11-13 | 2026-11-18 |
| [#5333](https://github.com/ROCm/AMDMIGraphX/pull/5333) | Give the TensorFlow protobuf unique package and file names | @fwyzard | open | 2026-09-29 | 2026-11-18 |
| [#5210](https://github.com/ROCm/AMDMIGraphX/pull/5210) | Fix credential issue for performance tests | @ahsan-ca | open | 2026-08-28 | 2026-11-18 |
| [#5570](https://github.com/ROCm/AMDMIGraphX/pull/5570) | Fix negative ScatterND indices with symbolic dimensions on t... | @tanzeel-amd | draft | 2026-11-18 | 2026-11-18 |
| [#5511](https://github.com/ROCm/AMDMIGraphX/pull/5511) | Compute symbolic values for int32 shape arithmetic | @klin2024 | open | 2026-11-13 | 2026-11-17 |
| [#5515](https://github.com/ROCm/AMDMIGraphX/pull/5515) | Compute symbolic values through a float min of a size | @klin2024 | open | 2026-11-13 | 2026-11-17 |
| [#5519](https://github.com/ROCm/AMDMIGraphX/pull/5519) | Bound a Range whose limit is only known at run time | @klin2024 | open | 2026-11-13 | 2026-11-15 |
| [#5542](https://github.com/ROCm/AMDMIGraphX/pull/5542) | Add a direct convolution kernel for convolutions with few ou... | @pfultz2 | open | 2026-11-14 | 2026-11-15 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | draft | 2024-06-26 | 2026-11-15 |
| [#5513](https://github.com/ROCm/AMDMIGraphX/pull/5513) | Use slice bounds that resolve to fixed values symbolically | @klin2024 | open | 2026-11-13 | 2026-11-15 |
| [#5540](https://github.com/ROCm/AMDMIGraphX/pull/5540) | Fuse expert gather dot | @pfultz2 | open | 2026-11-14 | 2026-11-14 |
| [#5304](https://github.com/ROCm/AMDMIGraphX/pull/5304) | Support for operators with data-depdendent shape functions | @CharlieL7 | draft | 2026-09-24 | 2026-11-14 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | open | 2026-07-30 | 2026-11-13 |
| [#5412](https://github.com/ROCm/AMDMIGraphX/pull/5412) | Apply MatMulInteger zero-point corrections in int32 | @royzhang-amd | open | 2026-10-20 | 2026-11-13 |
| [#5510](https://github.com/ROCm/AMDMIGraphX/pull/5510) | Add dynamic TinyLlama and Qwen examples | @shivadbhavsar | draft | 2026-11-12 | 2026-11-12 |
| [#5499](https://github.com/ROCm/AMDMIGraphX/pull/5499) | Validate MXR file version as a supported range, before decod... | @tanzeel-amd | draft | 2026-11-11 | 2026-11-12 |
| [#5498](https://github.com/ROCm/AMDMIGraphX/pull/5498) | Add rewrite_gather_dot pass to compute MoE expert dots as on... | @pfultz2 | open | 2026-11-11 | 2026-11-11 |
| [#5299](https://github.com/ROCm/AMDMIGraphX/pull/5299) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#5489](https://github.com/ROCm/AMDMIGraphX/pull/5489) | Port the CPU target to oneDNN 3 | @adityas-amd | open | 2026-11-07 | 2026-11-09 |
| [#5493](https://github.com/ROCm/AMDMIGraphX/pull/5493) | Direct FP32 3x3 stride-2 convolution kernel for gfx12 (conv3... | @kazhang2 | open | 2026-11-09 | 2026-11-09 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | draft | 2025-03-07 | 2026-11-09 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-11-07 |
| [#5488](https://github.com/ROCm/AMDMIGraphX/pull/5488) | Sink layout copies into concat buffers and fold layouts into... | @pfultz2 | open | 2026-11-07 | 2026-11-07 |
| [#5400](https://github.com/ROCm/AMDMIGraphX/pull/5400) | Support quantized concat in simplify_qdq | @pfultz2 | open | 2026-10-15 | 2026-11-07 |
| [#4994](https://github.com/ROCm/AMDMIGraphX/pull/4994) | simplify_reshapes: skip find_reshape_dot when it would chang... | @ycastill2-amd | draft | 2026-06-19 | 2026-11-07 |
| [#5397](https://github.com/ROCm/AMDMIGraphX/pull/5397) | update parsers to support LLMs | @shivadbhavsar | open | 2026-10-15 | 2026-11-05 |
| [#4941](https://github.com/ROCm/AMDMIGraphX/pull/4941) | Default HIP multi-arch workaround on Windows clang-cl | @DanyiLin | draft | 2026-06-04 | 2026-11-05 |
| [#5475](https://github.com/ROCm/AMDMIGraphX/pull/5475) | Support per-channel quantized models with expanded QDQ param... | @royzhang-amd | open | 2026-11-04 | 2026-11-05 |
| [#5469](https://github.com/ROCm/AMDMIGraphX/pull/5469) | Check driver input names against the program parameters | @pfultz2 | open | 2026-11-03 | 2026-11-03 |
| [#5463](https://github.com/ROCm/AMDMIGraphX/pull/5463) | Onnxruntime Weekly Sync 2026-10-30 | @github-actions[bot] | open | 2026-10-30 | 2026-11-03 |
| [#5457](https://github.com/ROCm/AMDMIGraphX/pull/5457) | [AIMIGRAPHX-595] NVFP4 E4M3-scaled GEMM on gfx1250 | @anupsing-amd | draft | 2026-10-29 | 2026-10-31 |
| [#5448](https://github.com/ROCm/AMDMIGraphX/pull/5448) | Check runtime dependent ops for symbol simplification | @shivadbhavsar | draft | 2026-10-27 | 2026-10-30 |
| [#5433](https://github.com/ROCm/AMDMIGraphX/pull/5433) | Bump gitpython from 3.1.62 to 3.2.1 in /docs/sphinx | @dependabot[bot] | open | 2026-10-26 | 2026-10-29 |
| [#5432](https://github.com/ROCm/AMDMIGraphX/pull/5432) | Bump certifi from 2024.7.4 to 2026.10.19 in /docs/sphinx | @dependabot[bot] | open | 2026-10-24 | 2026-10-29 |
| [#5449](https://github.com/ROCm/AMDMIGraphX/pull/5449) | Fix lowering for eval_expr_from_shape | @shivadbhavsar | draft | 2026-10-27 | 2026-10-28 |
| [#5295](https://github.com/ROCm/AMDMIGraphX/pull/5295) | Suggest license changes as well | @pfultz2 | draft | 2026-09-21 | 2026-10-28 |
| [#5340](https://github.com/ROCm/AMDMIGraphX/pull/5340) | Split_sym_dim prefill+decode support | @turneram | open | 2026-09-30 | 2026-10-24 |
| [#5428](https://github.com/ROCm/AMDMIGraphX/pull/5428) | Onnxruntime Weekly Sync 2026-10-23 | @github-actions[bot] | open | 2026-10-23 | 2026-10-23 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-10-21 |
| [#5377](https://github.com/ROCm/AMDMIGraphX/pull/5377) | Use small_vector | @pfultz2 | draft | 2026-10-12 | 2026-10-12 |
| [#5369](https://github.com/ROCm/AMDMIGraphX/pull/5369) | Claude code review | @pfultz2 | draft | 2026-10-08 | 2026-10-09 |
| [#5260](https://github.com/ROCm/AMDMIGraphX/pull/5260) | gqa/fuse_attention: attention sinks + sliding-window decode ... | @rlegithub | open | 2026-09-13 | 2026-09-30 |
| [#5336](https://github.com/ROCm/AMDMIGraphX/pull/5336) | Asymnetric padding | @pfultz2 | open | 2026-09-29 | 2026-09-29 |
| [#5259](https://github.com/ROCm/AMDMIGraphX/pull/5259) | layernorm: FP32 SimplifiedLayerNorm/SkipSLN to prevent MoE r... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5258](https://github.com/ROCm/AMDMIGraphX/pull/5258) | gpu: fused GptOssMoE op (sparse top-4 INT4 MoE) for GPT-OSS-... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5256](https://github.com/ROCm/AMDMIGraphX/pull/5256) | gpu/hip: fall back to hipHostMalloc when hipHostRegister fai... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5257](https://github.com/ROCm/AMDMIGraphX/pull/5257) | cse: skip merging >64MB single-output ops | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5255](https://github.com/ROCm/AMDMIGraphX/pull/5255) | fuse_attention: exclude side-input reductions from the decod... | @rlegithub | open | 2026-09-13 | 2026-09-27 |
| [#5272](https://github.com/ROCm/AMDMIGraphX/pull/5272) | Add fused M=1 INT4 GEMV kernel for LLM decode (opt-in) | @aditya-dl | draft | 2026-09-16 | 2026-09-25 |
| [#5278](https://github.com/ROCm/AMDMIGraphX/pull/5278) | Share identical weight literals across programs on the same ... | @aditya-dl | draft | 2026-09-17 | 2026-09-24 |
| [#5254](https://github.com/ROCm/AMDMIGraphX/pull/5254) | gpu/compile_ops: make tuning-config computation exception-sa... | @rlegithub | open | 2026-09-13 | 2026-09-24 |
| [#5309](https://github.com/ROCm/AMDMIGraphX/pull/5309) | [CI][Diagnostic] Isolate MI300 MLIR attention flake | @kentqian | draft | 2026-09-24 | 2026-09-24 |
| [#5284](https://github.com/ROCm/AMDMIGraphX/pull/5284) | Update mlir problem key with a md5 sum | @pfultz2 | open | 2026-09-18 | 2026-09-18 |
| [#5270](https://github.com/ROCm/AMDMIGraphX/pull/5270) | Cache HIP code object compilation | @dhernandez0 | open | 2026-09-16 | 2026-09-16 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-09-16 |
| [#5264](https://github.com/ROCm/AMDMIGraphX/pull/5264) | Opt int4 2 | @pfultz2 | draft | 2026-09-14 | 2026-09-14 |
| [#5261](https://github.com/ROCm/AMDMIGraphX/pull/5261) | gpu: opt-in GPU graph capture/replay for the async eval path... | @rlegithub | open | 2026-09-14 | 2026-09-14 |
| [#5236](https://github.com/ROCm/AMDMIGraphX/pull/5236) | Unify prefill and decode | @pfultz2 | draft | 2026-09-03 | 2026-09-03 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | draft | 2025-01-20 | 2026-08-29 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | draft | 2024-11-29 | 2026-08-29 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-08-29 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | draft | 2025-01-09 | 2026-08-29 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-08-29 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | draft | 2024-09-22 | 2026-08-29 |
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
| [#5604](https://github.com/ROCm/AMDMIGraphX/pull/5604) | Add documentation for quantization | @anilmartha | merged | 2026-11-26 | 2026-11-27 |
| [#5607](https://github.com/ROCm/AMDMIGraphX/pull/5607) | Set CHANGELOG for ROCm 10.2 | @VishalX | merged | 2026-11-26 | 2026-11-27 |
| [#5606](https://github.com/ROCm/AMDMIGraphX/pull/5606) | docs(install/2.19.0): update MIGraphX and Torch-MIGraphX ins... | @peterjunpark | merged | 2026-11-26 | 2026-11-27 |
| [#5594](https://github.com/ROCm/AMDMIGraphX/pull/5594) | Add documentation for MXR recompile | @anilmartha | merged | 2026-11-24 | 2026-11-27 |
| [#5601](https://github.com/ROCm/AMDMIGraphX/pull/5601) | Add support for the gfx1250-strict offload target | @VishalX | merged | 2026-11-25 | 2026-11-27 |
| [#5602](https://github.com/ROCm/AMDMIGraphX/pull/5602) | Bump version to 2.20.0 | @VishalX | merged | 2026-11-25 | 2026-11-26 |
| [#5600](https://github.com/ROCm/AMDMIGraphX/pull/5600) | Unroll the bounds check in in_bounds() at compile time | @menglcai | merged | 2026-11-25 | 2026-11-26 |
| [#5549](https://github.com/ROCm/AMDMIGraphX/pull/5549) | Update the shape of instructions whose submodules a pass cha... | @klin2024 | merged | 2026-11-17 | 2026-11-25 |
| [#5581](https://github.com/ROCm/AMDMIGraphX/pull/5581) | Recompile follow-ups: benchmark MXR dump, no external librar... | @anilmartha | merged | 2026-11-19 | 2026-11-25 |
| [#5596](https://github.com/ROCm/AMDMIGraphX/pull/5596) | Binary cache: add support for compression | @pnikolic-amd | merged | 2026-11-24 | 2026-11-25 |
| [#5592](https://github.com/ROCm/AMDMIGraphX/pull/5592) | Cherry-pick #5563 into release/rocm-rel-10.0.1 | @VishalX | merged | 2026-11-23 | 2026-11-24 |
| [#5507](https://github.com/ROCm/AMDMIGraphX/pull/5507) | Sort ONNX nodes after the values their subgraphs read from t... | @klin2024 | merged | 2026-11-12 | 2026-11-23 |
| [#5589](https://github.com/ROCm/AMDMIGraphX/pull/5589) | Update windows CI to use clang 22 | @pfultz2 | merged | 2026-11-20 | 2026-11-20 |
| [#5587](https://github.com/ROCm/AMDMIGraphX/pull/5587) | docs(install/2.19.0): update MIGraphX and Torch-MIGraphX ins... | @peterjunpark | merged | 2026-11-20 | 2026-11-20 |
| [#5584](https://github.com/ROCm/AMDMIGraphX/pull/5584) | docs(install/2.16.0): update MIGraphX and Torch-MIGraphX ins... | @peterjunpark | merged | 2026-11-20 | 2026-11-20 |
| [#5585](https://github.com/ROCm/AMDMIGraphX/pull/5585) | docs(install/2.17.0): update MIGraphX and Torch-MIGraphX ins... | @peterjunpark | merged | 2026-11-20 | 2026-11-20 |
| [#5586](https://github.com/ROCm/AMDMIGraphX/pull/5586) | docs(install/2.18.0): update MIGraphX and Torch-MIGraphX ins... | @peterjunpark | merged | 2026-11-20 | 2026-11-20 |
| [#5479](https://github.com/ROCm/AMDMIGraphX/pull/5479) | Fold axis-linear operations on a dot input into its constant... | @pfultz2 | merged | 2026-11-04 | 2026-11-20 |
| [#5373](https://github.com/ROCm/AMDMIGraphX/pull/5373) | docs: update installation docs with TheRock packages for ROC... | @peterjunpark | merged | 2026-10-09 | 2026-11-20 |
| [#5531](https://github.com/ROCm/AMDMIGraphX/pull/5531) | Copy the dims of broadcast_with_dims to the host on the GPU | @klin2024 | merged | 2026-11-13 | 2026-11-20 |
| [#5535](https://github.com/ROCm/AMDMIGraphX/pull/5535) | Print empty tensors in the level 2 eval trace | @klin2024 | merged | 2026-11-14 | 2026-11-20 |
| [#5544](https://github.com/ROCm/AMDMIGraphX/pull/5544) | Compress GPU device code in migraphx_device on Windows with ... | @ivarusic-amd | merged | 2026-11-16 | 2026-11-20 |
| [#5563](https://github.com/ROCm/AMDMIGraphX/pull/5563) | Merge split axes in source order when inverting a shape tran... | @VishalX | merged | 2026-11-17 | 2026-11-20 |
| [#5577](https://github.com/ROCm/AMDMIGraphX/pull/5577) | [AIMIGRAPHX-1374] ONNX parser: add test for external data le... | @anupsing-amd | merged | 2026-11-18 | 2026-11-20 |
| [#5500](https://github.com/ROCm/AMDMIGraphX/pull/5500) | Keep the input layout when a copying reshape is applied to a... | @pfultz2 | merged | 2026-11-11 | 2026-11-20 |
| [#5423](https://github.com/ROCm/AMDMIGraphX/pull/5423) | Add ONNX parser for the CausalConvWithState contrib op | @pfultz2 | merged | 2026-10-22 | 2026-11-19 |
| [#5484](https://github.com/ROCm/AMDMIGraphX/pull/5484) | [AIMIGRAPHX-1371] Keep program outputs standard in eliminate... | @anupsing-amd | merged | 2026-11-06 | 2026-11-19 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | merged | 2026-06-19 | 2026-11-19 |
| [#5466](https://github.com/ROCm/AMDMIGraphX/pull/5466) | Add MXR recompiling: keep kernel recipes and recompile compi... | @anilmartha | merged | 2026-11-02 | 2026-11-19 |
| [#5474](https://github.com/ROCm/AMDMIGraphX/pull/5474) | Prevent FP16 GroupNorm overflow with float intermediates | @royzhang-amd | merged | 2026-11-04 | 2026-11-18 |
| [#5481](https://github.com/ROCm/AMDMIGraphX/pull/5481) | gpu: use hip::load_scalar for if/loop host scalars | @ivarusic-amd | merged | 2026-11-05 | 2026-11-18 |
| [#5467](https://github.com/ROCm/AMDMIGraphX/pull/5467) | Fuse pointwise into the MLIR conv/dot that no sibling input ... | @pfultz2 | merged | 2026-11-02 | 2026-11-18 |
| [#5430](https://github.com/ROCm/AMDMIGraphX/pull/5430) | Forward slices spanning several concat segments through resh... | @pfultz2 | merged | 2026-10-23 | 2026-11-18 |
| [#5532](https://github.com/ROCm/AMDMIGraphX/pull/5532) | Onnxruntime Weekly Sync 2026-11-13 | @github-actions[bot] | merged | 2026-11-13 | 2026-11-18 |
| [#5525](https://github.com/ROCm/AMDMIGraphX/pull/5525) | Suppress experimental clang lifetime-safety false positive i... | @anilmartha | merged | 2026-11-13 | 2026-11-18 |
| [#5543](https://github.com/ROCm/AMDMIGraphX/pull/5543) | [ROCM-34004] Fix FP8 BERT regression: | @anupsing-amd | merged | 2026-11-16 | 2026-11-18 |
| [#5526](https://github.com/ROCm/AMDMIGraphX/pull/5526) | [AIMIGRAPHX-1374]:ONNX parser: treat external data length 0 ... | @anupsing-amd | merged | 2026-11-13 | 2026-11-18 |
| [#5170](https://github.com/ROCm/AMDMIGraphX/pull/5170) | fix(security): harden Python driver/codegen tools | @causten | merged | 2026-08-21 | 2026-11-18 |
| [#5219](https://github.com/ROCm/AMDMIGraphX/pull/5219) | Add a partial split to split_reduce for large reductions | @pfultz2 | merged | 2026-08-30 | 2026-11-17 |
| [#5529](https://github.com/ROCm/AMDMIGraphX/pull/5529) | Broadcast a dimension of 1 to a dimension of 0 | @klin2024 | merged | 2026-11-13 | 2026-11-16 |
| [#5478](https://github.com/ROCm/AMDMIGraphX/pull/5478) | Binary cache: store only winner if problem cache is used | @pnikolic-amd | merged | 2026-11-04 | 2026-11-16 |
| [#5504](https://github.com/ROCm/AMDMIGraphX/pull/5504) | Fix time_loop ignoring its bundle and nruns: do not cache th... | @kazhang2 | merged | 2026-11-12 | 2026-11-16 |
| [#5492](https://github.com/ROCm/AMDMIGraphX/pull/5492) | Fix Selu lowering returning 0 or NaN for large positive inpu... | @akshat-lakhera | merged | 2026-11-08 | 2026-11-16 |
| [#5455](https://github.com/ROCm/AMDMIGraphX/pull/5455) | Add post-lowering GPU copy optimization | @shivadbhavsar | merged | 2026-10-28 | 2026-11-15 |
| [#5508](https://github.com/ROCm/AMDMIGraphX/pull/5508) | Bump ROCm version to 2.19.0 for ROCm 10.2 | @CSkmd | merged | 2026-11-12 | 2026-11-14 |
| [#5468](https://github.com/ROCm/AMDMIGraphX/pull/5468) | Support stride and dilation in the channelwise convolution k... | @pfultz2 | merged | 2026-11-02 | 2026-11-13 |
| [#5505](https://github.com/ROCm/AMDMIGraphX/pull/5505) | Bump RocMlirTriton to newer version | @ilango100 | merged | 2026-11-12 | 2026-11-13 |
| [#5394](https://github.com/ROCm/AMDMIGraphX/pull/5394) | Split/symbolic reshape parsing | @CharlieL7 | merged | 2026-10-13 | 2026-11-12 |
| [#5483](https://github.com/ROCm/AMDMIGraphX/pull/5483) | Clamp layernorm variance to avoid NaN from cancellation | @VishalX | merged | 2026-11-06 | 2026-11-12 |
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

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-11-27T17:42:12Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#8070](https://github.com/ROCm/aiter/pull/8070) | [Triton/Gluon] [gfx1250] fp8_mqa_logits: row-group kernel an... | @omuhamma | open | 2026-11-17 | 2026-11-27 |
| [#8347](https://github.com/ROCm/aiter/pull/8347) | [Triton/Gluon] [GFX12] Add a gfx1250 Gluon FP8 PTPC GEMM for... | @omuhamma | draft | 2026-11-20 | 2026-11-27 |
| [#8784](https://github.com/ROCm/aiter/pull/8784) | [HIP] [Feature] minimax_qk_norm_rope: rows of up to 4096 pac... | @hiteshK03 | open | 2026-11-26 | 2026-11-27 |
| [#8852](https://github.com/ROCm/aiter/pull/8852) | [Triton/Gluon] [Bugfix] mla_gluon: add attn_sink once per se... | @lucas-santos-amd | open | 2026-11-27 | 2026-11-27 |
| [#7580](https://github.com/ROCm/aiter/pull/7580) | [HIP] [Tune] GLM-5 MQA logits: retune with clean_logits=Fals... | @amd-sriram | open | 2026-11-06 | 2026-11-27 |
| [#8834](https://github.com/ROCm/aiter/pull/8834) | [HIP] [OPUS] [JIT] [Bugfix] Fall back when a tuned row names... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#8865](https://github.com/ROCm/aiter/pull/8865) | [Test] Seed test_grouped_topk inputs in test_moeTopkSoftmax | @samremes | open | 2026-11-27 | 2026-11-27 |
| [#8826](https://github.com/ROCm/aiter/pull/8826) | [OPUS] [Bugfix] Mask the K tail of A and B in gfx950 a16w16 ... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#7941](https://github.com/ROCm/aiter/pull/7941) | [ASM] [gfx950] Add single-launch fused TP MXFP4/MXFP8 MoE + ... | @samremes | draft | 2026-11-13 | 2026-11-27 |
| [#7413](https://github.com/ROCm/aiter/pull/7413) | [Triton/Gluon] [Feature] FlashKDA: store the recurrent state... | @davzhuAMD | open | 2026-11-03 | 2026-11-27 |
| [#8833](https://github.com/ROCm/aiter/pull/8833) | [HIP] [Bugfix] gated RMSNorm FP8 per-token quant: reduce the... | @menglcai | open | 2026-11-27 | 2026-11-27 |
| [#8483](https://github.com/ROCm/aiter/pull/8483) | [FlyDSL] MegaMoE gfx1250 S1F: fix the stage-1 plan's LDS ove... | @zejunchen-zejun | open | 2026-11-23 | 2026-11-27 |
| [#8704](https://github.com/ROCm/aiter/pull/8704) | [ASM] [HIP] fmha hd256 bf16 in mha_v3 | @JohnNikolay84 | open | 2026-11-25 | 2026-11-27 |
| [#8818](https://github.com/ROCm/aiter/pull/8818) | [HIP] [Bugfix] Never launch a split-K bf16 asm GEMM kernel o... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#8864](https://github.com/ROCm/aiter/pull/8864) | [JIT] [Bugfix] Add hipccl include path for libhipcxx | @NguyenNhuDi | open | 2026-11-27 | 2026-11-27 |
| [#8781](https://github.com/ROCm/aiter/pull/8781) | [Triton/Gluon] [Feature] RMSNorm: optional input bias and ac... | @hiteshK03 | open | 2026-11-26 | 2026-11-27 |
| [#7233](https://github.com/ROCm/aiter/pull/7233) | [Config] [Perf] Add gfx942 a8w8 blockscale B-preshuffle rows... | @phambinhfin | open | 2026-10-30 | 2026-11-27 |
| [#8211](https://github.com/ROCm/aiter/pull/8211) | [ASM] [HIP] gfx942: 1-stage ASM MXFP4 x MXFP8 SiTUv2 MoE ker... | @MiloLurati | open | 2026-11-18 | 2026-11-27 |
| [#8071](https://github.com/ROCm/aiter/pull/8071) | [Triton/Gluon] [gfx1250] Sparse MLA with a 640 B FP8 KV reco... | @omuhamma | draft | 2026-11-17 | 2026-11-27 |
| [#8499](https://github.com/ROCm/aiter/pull/8499) | [FlyDSL] gfx950 4-wave MXFP6 (A6W6) GEMM: gemm_a6w6's defaul... | @ksikiric | draft | 2026-11-23 | 2026-11-27 |
| [#8500](https://github.com/ROCm/aiter/pull/8500) | [FlyDSL] Pre-attention monokernel: fused Q/K/V projection, Q... | @ksikiric | draft | 2026-11-23 | 2026-11-27 |
| [#8498](https://github.com/ROCm/aiter/pull/8498) | [FlyDSL] INT8 4-wave GEMM: fused bias, Q/K prep epilogue, pe... | @ksikiric | draft | 2026-11-23 | 2026-11-27 |
| [#8863](https://github.com/ROCm/aiter/pull/8863) | [Triton/Gluon] [GFX12] Add a gfx1250 Gluon AttnRes path | @omuhamma | open | 2026-11-27 | 2026-11-27 |
| [#8806](https://github.com/ROCm/aiter/pull/8806) | [FlyDSL] [MoE] MegaMoEV2: fused large-input route at capacit... | @GwilliamHu | open | 2026-11-27 | 2026-11-27 |
| [#8054](https://github.com/ROCm/aiter/pull/8054) | [Config] [gfx1250] DSv4.1 grouped MoE: e96 mid-bucket row (r... | @yhl-amd | open | 2026-11-16 | 2026-11-27 |
| [#7497](https://github.com/ROCm/aiter/pull/7497) | [FlyDSL] [CI] [MoE] Intra-node EP dispatch/combine without t... | @yhl-amd | open | 2026-11-05 | 2026-11-27 |
| [#8385](https://github.com/ROCm/aiter/pull/8385) | [HIP] [MoE] topk_gating, topk_softmax: keep ids distinct whe... | @mjkvaak-amd | open | 2026-11-20 | 2026-11-27 |
| [#8844](https://github.com/ROCm/aiter/pull/8844) | [FlyDSL] [Build] AOT prebuild: trace a kernel once per worke... | @coderfeli | open | 2026-11-27 | 2026-11-27 |
| [#6403](https://github.com/ROCm/aiter/pull/6403) | [FlyDSL] Two-launch FlyDSL delayed mHC seam for gfx942 | @RElbers | open | 2026-10-11 | 2026-11-27 |
| [#8862](https://github.com/ROCm/aiter/pull/8862) | [Config] gfx1250 96cu bf16 GEMM: GPT-OSS TP2 LM head, M 64..... | @xiaohuguo2023 | open | 2026-11-27 | 2026-11-27 |
| [#8379](https://github.com/ROCm/aiter/pull/8379) | [MoE] gfx942: fall back MXFP4 MoE activation to bf16 (no FP4... | @tnguyeng | draft | 2026-11-20 | 2026-11-27 |
| [#8516](https://github.com/ROCm/aiter/pull/8516) | [ASM] MHA v4 gfx950: XCD relabel on every grid | @jcaraban | open | 2026-11-23 | 2026-11-27 |
| [#8861](https://github.com/ROCm/aiter/pull/8861) | [Triton] [Config] Add gfx1100 SonicMoE (sonicmoe_bf16) DEFAU... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8859](https://github.com/ROCm/aiter/pull/8859) | [Triton/Gluon] [] gfx1250 gemm_a16w16: GPT-OSS TP2 decode M ... | @xiaohuguo2023 | open | 2026-11-27 | 2026-11-27 |
| [#8301](https://github.com/ROCm/aiter/pull/8301) | [Tune] Split the FMoE tuner into aiter.tuning.moe | @a-canadasruiz | draft | 2026-11-19 | 2026-11-27 |
| [#8822](https://github.com/ROCm/aiter/pull/8822) | [CI] [Misc] Log GEMM tuned-config misses once per N/K unless... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#7326](https://github.com/ROCm/aiter/pull/7326) | [FlyDSL] QuickAllReduce INT4/INT5/INT6: fp32 divisor and pai... | @samremes | draft | 2026-11-02 | 2026-11-27 |
| [#7338](https://github.com/ROCm/aiter/pull/7338) | [HIP] [Perf] MoE routing top-k: readlane/DPP instead of ds_b... | @phambinhfin | open | 2026-11-02 | 2026-11-27 |
| [#8860](https://github.com/ROCm/aiter/pull/8860) | [Triton] [Config] Add gfx1100 grouped GEMM (gmm / ptgmm / np... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8398](https://github.com/ROCm/aiter/pull/8398) | [Config] Add MiMo-V2.6-Pro FP8 block-scale GEMM tunings for ... | @gurpreet-dhami | open | 2026-11-20 | 2026-11-27 |
| [#8858](https://github.com/ROCm/aiter/pull/8858) | [Triton/Gluon] gfx1250 KDA decode updates | @omuhamma | open | 2026-11-27 | 2026-11-27 |
| [#8857](https://github.com/ROCm/aiter/pull/8857) | [Tune] [Bugfix] --run_config <tuned_csv> runs without the de... | @demonsan | draft | 2026-11-27 | 2026-11-27 |
| [#7596](https://github.com/ROCm/aiter/pull/7596) | [FlyDSL] [Perf] gfx950 A16W16: rectangular tiles, nonuniform... | @xiaohuguo2023 | draft | 2026-11-06 | 2026-11-27 |
| [#8847](https://github.com/ROCm/aiter/pull/8847) | [CK] [Tune] [Bugfix] a4w4 tuner: skip candidates illegal for... | @demonsan | draft | 2026-11-27 | 2026-11-27 |
| [#7658](https://github.com/ROCm/aiter/pull/7658) | [FlyDSL] [Bugfix] Reject gate/up-interleaved w1 on the a16w4... | @amd-mvarjoka | draft | 2026-11-09 | 2026-11-27 |
| [#8851](https://github.com/ROCm/aiter/pull/8851) | [FlyDSL] TP2 multi-relay (K=1..3) and TP4 sender-owned xGMI ... | @samremes | draft | 2026-11-27 | 2026-11-27 |
| [#6236](https://github.com/ROCm/aiter/pull/6236) | [FlyDSL] TP2 quick all-reduce through a passive xGMI relay | @samremes | open | 2026-10-07 | 2026-11-27 |
| [#8856](https://github.com/ROCm/aiter/pull/8856) | [Triton] [Config] Add gfx1100 fused_reduce_add_rmsnorm DEFAU... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7364](https://github.com/ROCm/aiter/pull/7364) | [Triton/Gluon] [gfx1250] Add WG cluster stream-k GEMM `gemm_... | @xiaohuguo2023 | open | 2026-11-02 | 2026-11-27 |
| [#8839](https://github.com/ROCm/aiter/pull/8839) | [FlyDSL] AOT build: budget fork-pool workers by private memo... | @coderfeli | open | 2026-11-27 | 2026-11-27 |
| [#8855](https://github.com/ROCm/aiter/pull/8855) | [HIP] [Bugfix] grouped_topk: score and mask every expert of ... | @djramic | open | 2026-11-27 | 2026-11-27 |
| [#8854](https://github.com/ROCm/aiter/pull/8854) | [Triton] [Config] Add gfx1100 gemm_a16w16_persistent DEFAULT... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7453](https://github.com/ROCm/aiter/pull/7453) | [CK] [MoE] Speed up the a16w16 CK 2-stage MoE: build without... | @waqahmed-amd-fi | draft | 2026-11-04 | 2026-11-27 |
| [#8327](https://github.com/ROCm/aiter/pull/8327) | [FlyDSL] gfx950 paged FP8 MQA logits: write -inf past each M... | @amd-sriram | draft | 2026-11-19 | 2026-11-27 |
| [#8825](https://github.com/ROCm/aiter/pull/8825) | [CK] [CI] [Feature] a4w4 blockscale tuner: add --libtype bac... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#8835](https://github.com/ROCm/aiter/pull/8835) | [Kernel] Add gfx1151 FlyDSL dense MXFP4 W4A16 GEMM | @big-yellow-duck | draft | 2026-11-27 | 2026-11-27 |
| [#8242](https://github.com/ROCm/aiter/pull/8242) | [Triton] [Config] Tune gfx1151 unified_attention configs | @klin2024 | draft | 2026-11-18 | 2026-11-27 |
| [#8849](https://github.com/ROCm/aiter/pull/8849) | [Triton/Gluon] gfx942 unified_attention: large-prefill confi... | @mpashkovskii | open | 2026-11-27 | 2026-11-27 |
| [#8823](https://github.com/ROCm/aiter/pull/8823) | [HIP] [CI] [JIT] [Bugfix] gemm_a16w16: select the ASM kernel... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#8850](https://github.com/ROCm/aiter/pull/8850) | [FlyDSL] gfx942 FP8 MoE: keep the build directory out of the... | @coderfeli | draft | 2026-11-27 | 2026-11-27 |
| [#8037](https://github.com/ROCm/aiter/pull/8037) | [FlyDSL] Add finite_only and compact modes to one-workgroup ... | @SamiAario-AMD | open | 2026-11-16 | 2026-11-27 |
| [#6172](https://github.com/ROCm/aiter/pull/6172) | [ASM] [HIP] [JIT] [Hardware][MI300X] gfx942 asm GEMM with BF... | @jhartika-amd | open | 2026-10-06 | 2026-11-27 |
| [#8785](https://github.com/ROCm/aiter/pull/8785) | [Triton/Gluon] [Feature] ff_a16w16_fused_ungated: optional u... | @hiteshK03 | open | 2026-11-26 | 2026-11-27 |
| [#8842](https://github.com/ROCm/aiter/pull/8842) | [FlyDSL] Fix >2 GiB and >4 GiB KV cache addressing in gfx950... | @samremes | draft | 2026-11-27 | 2026-11-27 |
| [#6375](https://github.com/ROCm/aiter/pull/6375) | [ASM] Rebuild gfx950 fp8 block-scale fused-MoE 64x128, 64x25... | @samremes | open | 2026-10-10 | 2026-11-27 |
| [#8293](https://github.com/ROCm/aiter/pull/8293) | [Config] [MoE] Add gfx950 MXFP4 FMoE rows for Muse Spark Ope... | @mjkvaak-amd | open | 2026-11-19 | 2026-11-27 |
| [#8786](https://github.com/ROCm/aiter/pull/8786) | [ASM] Qwen38 emsort stk xscale fix | @JohnNikolay84 | open | 2026-11-26 | 2026-11-27 |
| [#8032](https://github.com/ROCm/aiter/pull/8032) | [FlyDSL] MoE stage 2: pick FP8 route output per tuned row; D... | @cpersson-amd | draft | 2026-11-16 | 2026-11-27 |
| [#8837](https://github.com/ROCm/aiter/pull/8837) | [Config] Add gfx942 Qwen3-14B-FP8 a8w8 blockscale bpreshuffl... | @BaoYunkai | open | 2026-11-27 | 2026-11-27 |
| [#8848](https://github.com/ROCm/aiter/pull/8848) | [Triton] [Config] Add gfx1100 mla_decode launch values (BF16... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7753](https://github.com/ROCm/aiter/pull/7753) | [CI] [Bugfix] perftest: time candidates on cold inputs regar... | @JH-Leon-KIM-AMD | open | 2026-11-10 | 2026-11-27 |
| [#7139](https://github.com/ROCm/aiter/pull/7139) | [CK] aiter#6643: relu2 for legacy ck_gemm_moe_2stages kernel | @shantipriya-amd | open | 2026-10-29 | 2026-11-27 |
| [#8647](https://github.com/ROCm/aiter/pull/8647) | [HIP] [Bugfix] fused_qk_rmsnorm: add a barrier between the r... | @merrittttt | open | 2026-11-25 | 2026-11-27 |
| [#8318](https://github.com/ROCm/aiter/pull/8318) | [Triton/Gluon] [Perf] mla_gluon: fp8 query for the bh16bn128... | @lucas-santos-amd | open | 2026-11-19 | 2026-11-27 |
| [#8846](https://github.com/ROCm/aiter/pull/8846) | [Triton/Gluon] [Config] Add gfx1100 sparse_mla_dsv4_train DE... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8730](https://github.com/ROCm/aiter/pull/8730) | [Config] [gfx1250] MiniMax-M3.1 TP1 routed MXFP4 MoE rows (1... | @lirui927 | open | 2026-11-26 | 2026-11-27 |
| [#6531](https://github.com/ROCm/aiter/pull/6531) | [Config] [Perf] Add MiniMax-M3 BF16 GEMM rows for gfx950 | @amd-bishwoadhikari | open | 2026-10-14 | 2026-11-27 |
| [#5996](https://github.com/ROCm/aiter/pull/5996) | [FlyDSL] FlyDSL QSA indexer scorer + sparse GQA | @SamiAario-AMD | open | 2026-09-30 | 2026-11-27 |
| [#8760](https://github.com/ROCm/aiter/pull/8760) | [HIP] [FlyDSL] Kimi-K3.1: MLA metadata whole-wave cap, dcp_l... | @whx-sjtu | draft | 2026-11-26 | 2026-11-27 |
| [#8763](https://github.com/ROCm/aiter/pull/8763) | [HIP] [FlyDSL] [Config] Kimi-K3.1: MoE prefill sort/quant/ep... | @whx-sjtu | draft | 2026-11-26 | 2026-11-27 |
| [#8026](https://github.com/ROCm/aiter/pull/8026) | [HIP] [OPUS] Add opus gfx950 a8w8 mxfp8 1x32 gemm bpreshuffl... | @Fyzyukk | open | 2026-11-16 | 2026-11-27 |
| [#8608](https://github.com/ROCm/aiter/pull/8608) | [FlyDSL] Add a W4A16 MoE for gfx115x (RDNA3.5) | @mgehre-amd | open | 2026-11-24 | 2026-11-27 |
| [#8696](https://github.com/ROCm/aiter/pull/8696) | [Triton/Gluon] Fix model benchmark scripts - part 2 | @brunomazzottiamd | open | 2026-11-25 | 2026-11-27 |
| [#8845](https://github.com/ROCm/aiter/pull/8845) | [Triton/Gluon] [Config] Add gfx1100 batched_gemm_a8w8 prequa... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8646](https://github.com/ROCm/aiter/pull/8646) | [HIP] [OPUS] [JIT] [Feature] MoE token permute/unpermute, fo... | @Fyzyukk | open | 2026-11-25 | 2026-11-27 |
| [#6585](https://github.com/ROCm/aiter/pull/6585) | [Config] [Perf] Add MiniMax-M3 FP8-attention A8W8 GEMM rows ... | @amd-bishwoadhikari | open | 2026-10-15 | 2026-11-27 |
| [#7750](https://github.com/ROCm/aiter/pull/7750) | [Bugfix] Fix wrong GLM-5 FP8 MoE output on gfx942 at 9-16 to... | @phambinhfin | open | 2026-11-10 | 2026-11-27 |
| [#8684](https://github.com/ROCm/aiter/pull/8684) | [ASM] [HIP] MHA v4: hd256 block-sparse and Sol-Attn on gfx95... | @nsakkine | open | 2026-11-25 | 2026-11-27 |
| [#8683](https://github.com/ROCm/aiter/pull/8683) | [Triton/Gluon] Sol-Attn: hd256 pooled K/V packing, value til... | @nsakkine | open | 2026-11-25 | 2026-11-27 |
| [#7170](https://github.com/ROCm/aiter/pull/7170) | [Config] [Perf] Add MiniMax-M3-EAGLE3.1 BF16 GEMM rows for g... | @amd-bishwoadhikari | open | 2026-10-29 | 2026-11-27 |
| [#8049](https://github.com/ROCm/aiter/pull/8049) | [Triton/Gluon] [Config] [gfx1250] DSv4.1 router GEMM (N=384,... | @yhl-amd | open | 2026-11-16 | 2026-11-27 |
| [#7345](https://github.com/ROCm/aiter/pull/7345) | [FlyDSL] perf(mega_moe): gfx1250 decode megakernel - dispatc... | @GwilliamHu | draft | 2026-11-02 | 2026-11-27 |
| [#8843](https://github.com/ROCm/aiter/pull/8843) | [Triton/Gluon] [Config] Add gfx1100 batched_gemm_a8w8_a_per_... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8038](https://github.com/ROCm/aiter/pull/8038) | [Perf] Add an eager fast path for FP8 per-token linear ops | @ZLkanyo009 | open | 2026-11-16 | 2026-11-27 |
| [#8678](https://github.com/ROCm/aiter/pull/8678) | [FlyDSL] [gfx1250] Launch the GEMM and grouped-MoE kernels t... | @coderfeli | open | 2026-11-25 | 2026-11-27 |
| [#8838](https://github.com/ROCm/aiter/pull/8838) | [Config] [gfx950] Retune Kimi A8W4 selector rows 256 and 512 | @yuychang | open | 2026-11-27 | 2026-11-27 |
| [#8732](https://github.com/ROCm/aiter/pull/8732) | [FlyDSL] gfx11 flash attention: varlen forward and ViT qkv +... | @klin2024 | draft | 2026-11-26 | 2026-11-27 |
| [#7410](https://github.com/ROCm/aiter/pull/7410) | [FlyDSL] perf: integrate APRE M256 kernels into gfx1250 Mega... | @yanguahe | open | 2026-11-03 | 2026-11-27 |
| [#8570](https://github.com/ROCm/aiter/pull/8570) |  [Triton/Gluon][FlyDSL] Add gfx942 QSA indexer with full and... | @apinge | open | 2026-11-24 | 2026-11-27 |
| [#8725](https://github.com/ROCm/aiter/pull/8725) | [Config] Add gfx942 DSV4.1 Flash BF16 and FP8 bpreshuffle tu... | @bobofang11235 | open | 2026-11-26 | 2026-11-27 |
| [#8820](https://github.com/ROCm/aiter/pull/8820) | [Config] Add MiMo-V2.6-Flash-MOPD FP8 a8w8 blockscale GEMM t... | @abrahamzewoudie | open | 2026-11-27 | 2026-11-27 |
| [#7979](https://github.com/ROCm/aiter/pull/7979) | [HIP] [CK] [OPUS] Add opus mxfp4 bpreshuffle nt gemm | @Fyzyukk | open | 2026-11-15 | 2026-11-27 |
| [#8464](https://github.com/ROCm/aiter/pull/8464) | [OPUS] Define Latent MoE grouped-GEMM backward for Kimi-K3/K... | @minmengdie | draft | 2026-11-23 | 2026-11-27 |
| [#8740](https://github.com/ROCm/aiter/pull/8740) | [FlyDSL] [gfx950] Kimi-K3 KDA chunk backward (96 heads) | @huizzhan | draft | 2026-11-26 | 2026-11-27 |
| [#8840](https://github.com/ROCm/aiter/pull/8840) | [HIP] [FlyDSL] DSV4.1 decode: FlyDSL sqrtsoftplus router (E3... | @yhl-amd | open | 2026-11-27 | 2026-11-27 |
| [#8746](https://github.com/ROCm/aiter/pull/8746) | [Config] [Tune] Add gfx950 128-CU (MI350P) BF16 and a4w4 GEM... | @mjkvaak-amd | open | 2026-11-26 | 2026-11-27 |
| [#8809](https://github.com/ROCm/aiter/pull/8809) | [ASM] [HIP] Fuse Q/O RoPE and quantization into gfx1250 MLA ... | @tingchen988 | open | 2026-11-27 | 2026-11-27 |
| [#8030](https://github.com/ROCm/aiter/pull/8030) | [CI] [JIT] [Perf] Reduce Python overhead in tuned GEMM dispa... | @ZLkanyo009 | open | 2026-11-16 | 2026-11-27 |
| [#8801](https://github.com/ROCm/aiter/pull/8801) | [Fix] MHAv4: refuse pooled K scales in 64x64 MXFP8 Sol-Attn | @nsakkine | draft | 2026-11-27 | 2026-11-27 |
| [#8800](https://github.com/ROCm/aiter/pull/8800) | [Fix] Sol-Attn: back pooled E8M0 K scales with lookahead row... | @nsakkine | draft | 2026-11-27 | 2026-11-27 |
| [#8758](https://github.com/ROCm/aiter/pull/8758) | [FlyDSL] [MoE] MegaMoEV2: per-bucket small-input knobs for E... | @yhl-amd | open | 2026-11-26 | 2026-11-27 |
| [#7543](https://github.com/ROCm/aiter/pull/7543) | [FlyDSL] perf(flydsl): fold the gfx1250 TP MoE route into th... | @lirui927 | open | 2026-11-06 | 2026-11-27 |
| [#6742](https://github.com/ROCm/aiter/pull/6742) | [HIP] [JIT] [Kernel] Add HipKittens block-FP8 MoE for gfx950 | @willhu-jpg | open | 2026-10-20 | 2026-11-27 |
| [#7949](https://github.com/ROCm/aiter/pull/7949) | [FlyDSL] MoE stage 2: fix the fp8 route-out scale group for ... | @cpersson-amd | open | 2026-11-13 | 2026-11-27 |
| [#8824](https://github.com/ROCm/aiter/pull/8824) | [Tune][MoE] gfx1250 grouped tuner: search both GEMMs' knobs,... | @gbyu-amd | draft | 2026-11-27 | 2026-11-27 |
| [#7372](https://github.com/ROCm/aiter/pull/7372) | [FlyDSL] conv3d gfx950: kernel-only timing in tuner and tabl... | @huizzhan | open | 2026-11-03 | 2026-11-27 |
| [#8741](https://github.com/ROCm/aiter/pull/8741) | [FlyDSL] [gfx950] Kimi-K3 KDA gated RMSNorm backward | @huizzhan | draft | 2026-11-26 | 2026-11-27 |
| [#8739](https://github.com/ROCm/aiter/pull/8739) | [FlyDSL] [gfx950] Kimi-K3 KDA fused layer backward | @huizzhan | draft | 2026-11-26 | 2026-11-27 |
| [#8726](https://github.com/ROCm/aiter/pull/8726) | [FlyDSL] [MI350X] causal conv1d backward support for Kimi-K3 | @huizzhan | open | 2026-11-26 | 2026-11-27 |
| [#8836](https://github.com/ROCm/aiter/pull/8836) | [Triton/Gluon] [Config] Add gfx1100 fused_indexed_gated_resi... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7349](https://github.com/ROCm/aiter/pull/7349) | [FlyDSL] Fix LDS race in MoE sorting p23 kernel | @cpersson-amd | open | 2026-11-02 | 2026-11-27 |
| [#8607](https://github.com/ROCm/aiter/pull/8607) | [FlyDSL] [Perf] MiniMax-M3.1 TP4 decode QKV front as one op:... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#7733](https://github.com/ROCm/aiter/pull/7733) | [Triton/Gluon] [HIP] [Perf] gfx1250: wave32 register top-k f... | @lirui927 | open | 2026-11-10 | 2026-11-27 |
| [#8581](https://github.com/ROCm/aiter/pull/8581) | [FlyDSL] [Perf] topk_per_row_small_k: one-wave k=16 path for... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#8575](https://github.com/ROCm/aiter/pull/8575) | [FlyDSL] [Perf] sparse_pa_nvfp4_decode: all-wave merge, in-k... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#8283](https://github.com/ROCm/aiter/pull/8283) | [HIP] [OPUS] Add opus gfx950 blockscale_mxfp8 nn/tt/tn layou... | @Fyzyukk | open | 2026-11-19 | 2026-11-27 |
| [#8675](https://github.com/ROCm/aiter/pull/8675) | [HIP] [FlyDSL] [CI] [Perf] gfx950 small-M BF16 ring GEMM pol... | @ganyi1996ppo | open | 2026-11-25 | 2026-11-27 |
| [#8474](https://github.com/ROCm/aiter/pull/8474) | [Bugfix] Fix A4W4 mutation schemas under torch.compile | @zufayu | open | 2026-11-23 | 2026-11-27 |
| [#8656](https://github.com/ROCm/aiter/pull/8656) | [HIP] [quant] per_group_quant_hip: allocate the padded MX-sh... | @ganyi1996ppo | open | 2026-11-25 | 2026-11-27 |
| [#8006](https://github.com/ROCm/aiter/pull/8006) | [Config] Tune GLM-5.3-Flash KDA in-proj and o_proj bf16 GEMM... | @Jacob0226 | open | 2026-11-16 | 2026-11-27 |
| [#8799](https://github.com/ROCm/aiter/pull/8799) | [Config] [Perf] Qwen3.8-Flash-Next FP8 gfx950: tuned MoE (51... | @chuyeh | open | 2026-11-27 | 2026-11-27 |
| [#8830](https://github.com/ROCm/aiter/pull/8830) | [Config] [gfx1250] Tune Kimi-K2 TP8 dense block FP8 GEMMs (m... | @mqhc2020 | open | 2026-11-27 | 2026-11-27 |
| [#8625](https://github.com/ROCm/aiter/pull/8625) | [FlyDSL] [Bugfix] [gfx950] Fix cumsum[] race in MoE sorting ... | @thechenli | open | 2026-11-25 | 2026-11-27 |
| [#8767](https://github.com/ROCm/aiter/pull/8767) | [FlyDSL] [MoE] [Perf] Widen the interleaved a8w4 stage-1 gat... | @Arist12 | open | 2026-11-26 | 2026-11-27 |
| [#8829](https://github.com/ROCm/aiter/pull/8829) | [FlyDSL] [MoE] Read the stage2 FP8 row table also for AITER_... | @omirosh | draft | 2026-11-27 | 2026-11-27 |
| [#8742](https://github.com/ROCm/aiter/pull/8742) | [FlyDSL] MoE stage 1: rotate the SwiGLU output before the fu... | @jimmy-adams | open | 2026-11-26 | 2026-11-27 |
| [#7222](https://github.com/ROCm/aiter/pull/7222) | [FlyDSL] [Fix] Guard dropped expert IDs in fused MoE route a... | @xytpai | open | 2026-10-30 | 2026-11-27 |
| [#7248](https://github.com/ROCm/aiter/pull/7248) | [FlyDSL] [Perf] Avoid empty Tensor construction for omitted ... | @xytpai | open | 2026-10-31 | 2026-11-27 |
| [#7274](https://github.com/ROCm/aiter/pull/7274) | [FlyDSL] [Test] Honor the requested grouped MoE activation f... | @xytpai | open | 2026-11-01 | 2026-11-27 |
| [#7263](https://github.com/ROCm/aiter/pull/7263) | [FlyDSL] [Fix] Use legal buffer access widths for vec8 MoE g... | @xytpai | open | 2026-11-01 | 2026-11-27 |
| [#7262](https://github.com/ROCm/aiter/pull/7262) | [FlyDSL] [Perf] Avoid allocating an unread MoE quantizer pla... | @xytpai | open | 2026-11-01 | 2026-11-27 |
| [#7261](https://github.com/ROCm/aiter/pull/7261) | [FlyDSL] [Perf] Cache immutable grouped MoE integer config p... | @xytpai | open | 2026-11-01 | 2026-11-27 |
| [#8297](https://github.com/ROCm/aiter/pull/8297) | [FlyDSL] [CI] [Bugfix] MoE: re-base each expert's MXFP4 weig... | @Jasen2201 | open | 2026-11-19 | 2026-11-27 |
| [#7449](https://github.com/ROCm/aiter/pull/7449) | [FlyDSL] [Perf] Let the consumer finish a gfx1250 PTPC split... | @lirui927 | open | 2026-11-04 | 2026-11-27 |
| [#8828](https://github.com/ROCm/aiter/pull/8828) | [Triton/Gluon] [Config] Add gfx1100 fused_sigmoid_mul DEFAUL... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7869](https://github.com/ROCm/aiter/pull/7869) | [FlyDSL] perf(flydsl): launch a repeated gfx1250 pa_decode c... | @lirui927 | draft | 2026-11-12 | 2026-11-27 |
| [#8011](https://github.com/ROCm/aiter/pull/8011) | [HIP] [Perf] fused_qknorm_idxrqknorm: faster on gfx1250, spl... | @lirui927 | draft | 2026-11-16 | 2026-11-27 |
| [#8290](https://github.com/ROCm/aiter/pull/8290) | [HIP] fused_qknorm_idxrqknorm: write NVFP4 K/V and the index... | @lirui927 | draft | 2026-11-19 | 2026-11-27 |
| [#8364](https://github.com/ROCm/aiter/pull/8364) | [FlyDSL] [CI] gfx1250 MoE A1 quant: emit the shared expert's... | @lirui927 | draft | 2026-11-20 | 2026-11-27 |
| [#8496](https://github.com/ROCm/aiter/pull/8496) | [FlyDSL] refactor(flydsl): share the token-multidest quant c... | @lirui927 | draft | 2026-11-23 | 2026-11-27 |
| [#8794](https://github.com/ROCm/aiter/pull/8794) | fix(moe-dispatch): regenerate golden snapshot for intermedia... | @ganyi1996ppo | open | 2026-11-27 | 2026-11-27 |
| [#5163](https://github.com/ROCm/aiter/pull/5163) | [gfx1250] feat(mega_moe): add operand init modes and b2b tim... | @arakowsk-amd | open | 2026-09-01 | 2026-11-27 |
| [#8387](https://github.com/ROCm/aiter/pull/8387) | [Docs] [Misc] Prevent hipBLASLt entries in shared tuning fil... | @samremes | open | 2026-11-20 | 2026-11-27 |
| [#8458](https://github.com/ROCm/aiter/pull/8458) | [FlyDSL] [Feature] gfx1250 prefill index block scores over a... | @XiaobingSuper | open | 2026-11-23 | 2026-11-27 |
| [#8189](https://github.com/ROCm/aiter/pull/8189) | [FlyDSL] [gfx1250][MegaMoE] EP8 and EP16 mega tuning + stage... | @XingerZhu | open | 2026-11-18 | 2026-11-27 |
| [#7657](https://github.com/ROCm/aiter/pull/7657) | [CK] [Tuner] fmoe FlyDSL: random routing for v2 tuning data,... | @cpersson-amd | open | 2026-11-09 | 2026-11-27 |
| [#8392](https://github.com/ROCm/aiter/pull/8392) | [Docs] [Misc] review-pr: Check new tuned workload input cove... | @samremes | draft | 2026-11-20 | 2026-11-27 |
| [#8673](https://github.com/ROCm/aiter/pull/8673) | [FlyDSL] [Feature] [Perf] Fused MoE routing (sqrt-softplus t... | @amd-pedghazi | draft | 2026-11-25 | 2026-11-27 |
| [#8810](https://github.com/ROCm/aiter/pull/8810) | [HIP] [Bugfix] mrope cache-quant: stop GPT-J cos/sin loads r... | @menglcai | open | 2026-11-27 | 2026-11-27 |
| [#8821](https://github.com/ROCm/aiter/pull/8821) | [Triton/Gluon] [Config] Add gfx1100 gemm_a8w8_blockscale_pre... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8753](https://github.com/ROCm/aiter/pull/8753) | [Bugfix] Keep non-float all-reduces off custom all-reduce | @mjkvaak-amd | open | 2026-11-26 | 2026-11-27 |
| [#7821](https://github.com/ROCm/aiter/pull/7821) | [Triton/Gluon] [HIP] [OPUS] FP8 DMA deepseek prefill | @Chi-Chu319 | open | 2026-11-11 | 2026-11-27 |
| [#8819](https://github.com/ROCm/aiter/pull/8819) | [FlyDSL] [Perf] gfx1250 NVFP4 sparse prefill v3: tile rows o... | @fsx950223 | draft | 2026-11-27 | 2026-11-27 |
| [#8804](https://github.com/ROCm/aiter/pull/8804) | [FlyDSL] [gfx942] GDN prefill front: conv + split + q/k L2 n... | @yicyang | draft | 2026-11-27 | 2026-11-27 |
| [#8648](https://github.com/ROCm/aiter/pull/8648) | [HIP] [QuickReduce] Clamp fp16 overflow on gfx950 and accumu... | @haoyangli0109 | open | 2026-11-25 | 2026-11-27 |
| [#8658](https://github.com/ROCm/aiter/pull/8658) | [FlyDSL] [MoE] [Perf] DeepSeek-V4.1-Flash TP4 A8W4: stage 1 ... | @amd-pedghazi | draft | 2026-11-25 | 2026-11-27 |
| [#8765](https://github.com/ROCm/aiter/pull/8765) | [CK] [FlyDSL] Optimize fp8 legacy blockscale gemm kernel via... | @LuweiZhou2025 | open | 2026-11-26 | 2026-11-27 |
| [#8623](https://github.com/ROCm/aiter/pull/8623) | [FlyDSL] [CI] [MoE] MegaMoEV2: fully fused A4W4 routes and A... | @GwilliamHu | open | 2026-11-25 | 2026-11-27 |
| [#8817](https://github.com/ROCm/aiter/pull/8817) | [FlyDSL] gfx1250 MiniMax-M3 decode indexer over the NVFP4 in... | @lirui927 | draft | 2026-11-27 | 2026-11-27 |
| [#7337](https://github.com/ROCm/aiter/pull/7337) | [HIP] [Perf] Route large gfx942 MoE sorts to multi-phase | @phambinhfin | open | 2026-11-02 | 2026-11-27 |
| [#7516](https://github.com/ROCm/aiter/pull/7516) | [Triton/Gluon] Add gfx942 FP8 head-dim-256 MHA config | @phambinhfin | open | 2026-11-05 | 2026-11-27 |
| [#7752](https://github.com/ROCm/aiter/pull/7752) | [Config] [Perf] Retune gfx942 Qwen3.8-27B a8w8 blockscale de... | @phambinhfin | open | 2026-11-10 | 2026-11-27 |
| [#8416](https://github.com/ROCm/aiter/pull/8416) | [Triton/Gluon] [Perf] Add an optional out argument to the MH... | @phambinhfin | open | 2026-11-21 | 2026-11-27 |
| [#8447](https://github.com/ROCm/aiter/pull/8447) | [Triton/Gluon] [Perf] Do not specialize the MHA forward on b... | @phambinhfin | open | 2026-11-22 | 2026-11-27 |
| [#8815](https://github.com/ROCm/aiter/pull/8815) | MHA v4: read strided BSHD rows in the HIP quantizers and acc... | @nsakkine | draft | 2026-11-27 | 2026-11-27 |
| [#8811](https://github.com/ROCm/aiter/pull/8811) | MHA v4: quantize strided BSHD views in the Triton per-tensor... | @nsakkine | draft | 2026-11-27 | 2026-11-27 |
| [#8813](https://github.com/ROCm/aiter/pull/8813) | [FlyDSL] MegaMoEV2: combine_wire option that every route hon... | @MengqingCao | draft | 2026-11-27 | 2026-11-27 |
| [#8708](https://github.com/ROCm/aiter/pull/8708) | [HIP] [Sample] spec_verify_pick: a sampled spec-verify step'... | @yhl-amd | open | 2026-11-25 | 2026-11-27 |
| [#8530](https://github.com/ROCm/aiter/pull/8530) | [FlyDSL] [MI300X] MegaMoEGfx942: EP8 a8w4 / a8w8 MegaMoE for... | @tingqli | open | 2026-11-24 | 2026-11-27 |
| [#8202](https://github.com/ROCm/aiter/pull/8202) | [ASM] [HIP] [JIT] [gfx1250] Mega-MHC: add asm kernels, on by... | @liyjiang | open | 2026-11-18 | 2026-11-27 |
| [#8652](https://github.com/ROCm/aiter/pull/8652) | [HIP] [Bugfix] rope_2d: use d/4 frequencies per half with re... | @merrittttt | open | 2026-11-25 | 2026-11-27 |
| [#7667](https://github.com/ROCm/aiter/pull/7667) | [FlyDSL] [gfx1250] Batched mxfp8 GEMM fused-quant epilogue: ... | @yhl-amd | open | 2026-11-09 | 2026-11-27 |
| [#8803](https://github.com/ROCm/aiter/pull/8803) | [Triton/Gluon] [Config] Add gfx1100 gemm_a8w8_preshuffled DE... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#7668](https://github.com/ROCm/aiter/pull/7668) | [FlyDSL] [gfx1250] mx32 GEMM: software-pipelined K loop; DSv... | @yhl-amd | open | 2026-11-09 | 2026-11-27 |
| [#8497](https://github.com/ROCm/aiter/pull/8497) | [HIP] [Bugfix] Activation: keep the gate ops and gelu_fast i... | @iraj465 | open | 2026-11-23 | 2026-11-27 |
| [#8057](https://github.com/ROCm/aiter/pull/8057) | [FlyDSL] [gfx1250] gate_up GEMM with a fused SwiGLU + MXFP8 ... | @yhl-amd | open | 2026-11-16 | 2026-11-27 |
| [#8759](https://github.com/ROCm/aiter/pull/8759) | [FlyDSL] [MoE] MegaMoEV2: EP8 V4.1-Flash DSpark draft MoE on... | @yhl-amd | open | 2026-11-26 | 2026-11-27 |
| [#8792](https://github.com/ROCm/aiter/pull/8792) | [FlyDSL] [gfx942] Fused GDN decode and MTP verify with an fp... | @yicyang | draft | 2026-11-27 | 2026-11-27 |
| [#8791](https://github.com/ROCm/aiter/pull/8791) | [Triton/Gluon] [gfx942] GDN chunk_o opt_vk: default tile for... | @yicyang | draft | 2026-11-27 | 2026-11-27 |
| [#8783](https://github.com/ROCm/aiter/pull/8783) | [HIP] fused_norm_rope_attn_rope_cast: reduce H64 two-way spl... | @yhl-amd | open | 2026-11-26 | 2026-11-27 |
| [#8762](https://github.com/ROCm/aiter/pull/8762) | [ASM] [HIP] [OPUS] [Feature] Add the Kimi-K3 gated MLA backw... | @JingPhil | draft | 2026-11-26 | 2026-11-27 |
| [#7789](https://github.com/ROCm/aiter/pull/7789) | [Triton/Gluon] [ASM] attn_res_gate: gfx1250 Gluon kernel tha... | @yanxuer-999 | open | 2026-11-11 | 2026-11-27 |
| [#7455](https://github.com/ROCm/aiter/pull/7455) | [Triton/Gluon] Sparse attention block mask to LUT optimizati... | @nsakkine | open | 2026-11-04 | 2026-11-27 |
| [#7699](https://github.com/ROCm/aiter/pull/7699) | [FlyDSL] MegaMoEV2: enable, tune and speed up small_m / larg... | @Yaowu-Xiong | open | 2026-11-10 | 2026-11-27 |
| [#8273](https://github.com/ROCm/aiter/pull/8273) | [HIP] [FlyDSL] [gfx1250] Optimize native MXFP8 GEMM across M... | @XiaobingSuper | open | 2026-11-19 | 2026-11-27 |
| [#8691](https://github.com/ROCm/aiter/pull/8691) | [FlyDSL] [Perf] PA decode plan: reuse the planner launch on ... | @XiaobingSuper | open | 2026-11-25 | 2026-11-27 |
| [#7623](https://github.com/ROCm/aiter/pull/7623) | [ASM] Fix MFMA operand race in gfx950 FP8 QH16 qseqlen4 v3 M... | @AndreasKaratzas | open | 2026-11-08 | 2026-11-27 |
| [#8541](https://github.com/ROCm/aiter/pull/8541) | [CK] [Bugfix] Make a8w8 blockscale split-K deterministic | @AndreasKaratzas | open | 2026-11-24 | 2026-11-27 |
| [#8747](https://github.com/ROCm/aiter/pull/8747) | [HIP] [JIT] gfx1250 markov_argmax_chain: K greedy steps of a... | @XiaobingSuper | open | 2026-11-26 | 2026-11-27 |
| [#8798](https://github.com/ROCm/aiter/pull/8798) | [Triton/Gluon] [Config] Add gfx1100 gemm_a8w8 DEFAULT.json | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8166](https://github.com/ROCm/aiter/pull/8166) | [hipBLASLt] [Bugfix] Skip tuned BF16 rows whose solution ind... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8796](https://github.com/ROCm/aiter/pull/8796) | [HIP] [QuickReduce] Rotate the two-shot send order per wave | @haoyangli0109 | draft | 2026-11-27 | 2026-11-27 |
| [#8238](https://github.com/ROCm/aiter/pull/8238) | [FlyDSL] [JIT] [MHC] Use the full-chip tuned policy for the ... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8234](https://github.com/ROCm/aiter/pull/8234) | [FlyDSL] [JIT] Use the full-chip tuned rows for IQ2R GLM-5.3... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#7053](https://github.com/ROCm/aiter/pull/7053) | [FlyDSL] [Bugfix] gfx950 A16W16: reduce split-K and slice-K ... | @AndreasKaratzas | draft | 2026-10-28 | 2026-11-27 |
| [#7184](https://github.com/ROCm/aiter/pull/7184) | [HIP] [JIT] Add gfx950 paged FP8 MQA logits | @sumin-hong | open | 2026-10-30 | 2026-11-27 |
| [#8236](https://github.com/ROCm/aiter/pull/8236) | [FlyDSL] [JIT] Use the full-chip tuned BV for chunk GDN on c... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8010](https://github.com/ROCm/aiter/pull/8010) | [HIP] [JIT] Fuse gfx950 FP8 MQA prefill logits and exact top... | @sumin-hong | open | 2026-11-16 | 2026-11-27 |
| [#8229](https://github.com/ROCm/aiter/pull/8229) | [OPUS] [FlyDSL] [JIT] Use the full-chip tuned rows for the M... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8225](https://github.com/ROCm/aiter/pull/8225) | [FlyDSL] [JIT] Add the partition rule for tuned CU count loo... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#7988](https://github.com/ROCm/aiter/pull/7988) | [FlyDSL] [gfx1250] Tune MXFP8 bpreshuffle GEMM | @jli-melchior | open | 2026-11-15 | 2026-11-27 |
| [#7220](https://github.com/ROCm/aiter/pull/7220) | fix the _fold_seqlen_indptr perf error | @minmengdie | open | 2026-10-30 | 2026-11-27 |
| [#8780](https://github.com/ROCm/aiter/pull/8780) | [Python] Use get_gfx_runtime() for the fp8_mqa_logits arch g... | @amd-ruitang3 | open | 2026-11-26 | 2026-11-27 |
| [#8228](https://github.com/ROCm/aiter/pull/8228) | [FlyDSL] [JIT] Use the full-chip tuned rows for A4W4 GEMM on... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8235](https://github.com/ROCm/aiter/pull/8235) | [FlyDSL] [JIT] Use the full-chip tuned tiles for conv3d impl... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8465](https://github.com/ROCm/aiter/pull/8465) | [FlyDSL] [Perf] MiniMax-M3 prefill scorer and sparse attenti... | @ganyi1996ppo | draft | 2026-11-23 | 2026-11-27 |
| [#8232](https://github.com/ROCm/aiter/pull/8232) | [FlyDSL] [JIT] [MoE] Use the full-chip tuned rows for fused ... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8237](https://github.com/ROCm/aiter/pull/8237) | [OPUS] [FlyDSL] [JIT] Use the full-chip tuned rows for OPUS ... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8231](https://github.com/ROCm/aiter/pull/8231) | [FlyDSL] [JIT] Use the full-chip tuned rows for BF16 GEMM on... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8184](https://github.com/ROCm/aiter/pull/8184) | [FlyDSL] gfx942 a16w4: decode MXFP4 with a negative LUT, v_p... | @MHYangAMD | open | 2026-11-18 | 2026-11-27 |
| [#8233](https://github.com/ROCm/aiter/pull/8233) | [FlyDSL] [JIT] [Attention] Use the full-chip tuned rows for ... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8227](https://github.com/ROCm/aiter/pull/8227) | [FlyDSL] [JIT] Use the full-chip tuned rows for MXFP8 and mx... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8226](https://github.com/ROCm/aiter/pull/8226) | [HIP] [CK] [FlyDSL] Use the full-chip tuned rows for CK GEMM... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8737](https://github.com/ROCm/aiter/pull/8737) | [FlyDSL] Work around gfx1250 LDS-to-TDM store corruption | @yadaish | open | 2026-11-26 | 2026-11-27 |
| [#8649](https://github.com/ROCm/aiter/pull/8649) | [HIP] [Bugfix] qk norm rope: find the NeoX partner lane by o... | @merrittttt | open | 2026-11-25 | 2026-11-27 |
| [#8040](https://github.com/ROCm/aiter/pull/8040) | [CI] Cache fused_moe plans and bypass eager op dispatch | @ZLkanyo009 | open | 2026-11-16 | 2026-11-27 |
| [#7391](https://github.com/ROCm/aiter/pull/7391) |  [Triton/Gluon] gfx950 a16w16: Stream-K for compute-bound sh... | @jamesbowley | draft | 2026-11-03 | 2026-11-27 |
| [#5897](https://github.com/ROCm/aiter/pull/5897) | [WIP] [Triton/Gluon] gfx950 a16w16: compute-bound Gluon kern... | @zhanglx13 | draft | 2026-09-28 | 2026-11-27 |
| [#8224](https://github.com/ROCm/aiter/pull/8224) | [FlyDSL] [JIT] Read the CU count and partition of the curren... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#6911](https://github.com/ROCm/aiter/pull/6911) | [FlyDSL] Preserve FP32 precision in GDN prepare inverse bloc... | @apinge | open | 2026-10-25 | 2026-11-27 |
| [#8261](https://github.com/ROCm/aiter/pull/8261) | [FlyDSL] [gfx1250] Fuse the MLA KV split-cat into the A16W16... | @XiaobingSuper | open | 2026-11-19 | 2026-11-27 |
| [#8714](https://github.com/ROCm/aiter/pull/8714) | [HIP] [JIT] [Build] [gfx1201] FP8 per-token GEMM with a pres... | @Shan2L | open | 2026-11-25 | 2026-11-27 |
| [#8717](https://github.com/ROCm/aiter/pull/8717) | [Triton/Gluon] bench_fused_indexed_gated_residual: time the ... | @Shan2L | open | 2026-11-26 | 2026-11-27 |
| [#8727](https://github.com/ROCm/aiter/pull/8727) | [Triton/Gluon] [Bugfix] Fix zero outputs of RMSNorm forward ... | @menglcai | open | 2026-11-26 | 2026-11-27 |
| [#8729](https://github.com/ROCm/aiter/pull/8729) | [Perf] Consolidate Kimi K3 TP1 GEMM tuning on gfx1250 | @ZLkanyo009 | open | 2026-11-26 | 2026-11-27 |
| [#8731](https://github.com/ROCm/aiter/pull/8731) | [FlyDSL] fix(mega_moe_gfx1250): s1f_stage1 pre_ready must re... | @leishaoSC | open | 2026-11-26 | 2026-11-27 |
| [#8766](https://github.com/ROCm/aiter/pull/8766) | [Triton/Gluon] [JIT] [Hardware] Add gfx1170 and gfx1171 arch... | @umarkovi-amd | open | 2026-11-26 | 2026-11-27 |
| [#8768](https://github.com/ROCm/aiter/pull/8768) | [Triton/Gluon] Fix a16wfp4 GEMM NaN flake: mask the b_scales... | @ganyi1996ppo | open | 2026-11-26 | 2026-11-27 |
| [#8770](https://github.com/ROCm/aiter/pull/8770) | [Triton/Gluon] [Feature] [Perf] unified_attention: support s... | @omoisis-dn | open | 2026-11-26 | 2026-11-27 |
| [#8776](https://github.com/ROCm/aiter/pull/8776) | [Config] [Tuning] Retune Qwen3.5-397B FP8 block-scale GEMMs ... | @sammysun0711 | open | 2026-11-26 | 2026-11-27 |
| [#8778](https://github.com/ROCm/aiter/pull/8778) | [HIP] [CK] [FlyDSL] [gfx1250] K3 TP1 a8w8 GEMM: compute N ta... | @aoli26 | open | 2026-11-26 | 2026-11-27 |
| [#5543](https://github.com/ROCm/aiter/pull/5543) | [FlyDSL] Add token-major layout option to GDN prefill h kern... | @johannes-graner | open | 2026-09-15 | 2026-11-27 |
| [#5767](https://github.com/ROCm/aiter/pull/5767) | [HIP] Mask partial vectors in sampling kernels | @UD-mmcminn | open | 2026-09-22 | 2026-11-27 |
| [#5801](https://github.com/ROCm/aiter/pull/5801) | [FlyDSL] Fix gfx1250 TDM grouped GEMM bias index missing in ... | @JadenMathias | open | 2026-09-23 | 2026-11-27 |
| [#5882](https://github.com/ROCm/aiter/pull/5882) | [FlyDSL] [MLA] DeepSeek-V4 fp8 MLA decode (v4 nm) in one Fly... | @AMD-yanfeiwang | open | 2026-09-27 | 2026-11-27 |
| [#6013](https://github.com/ROCm/aiter/pull/6013) | [CK] [CI] [Bugfix] Fix gfx942 FLAT candidates in ASM FMoE tu... | @yuzhouo7 | open | 2026-09-30 | 2026-11-27 |
| [#6267](https://github.com/ROCm/aiter/pull/6267) | [FlyDSL] [Build] [GEMM] Add optional RDNA3 FlyDSL A8W8 backe... | @Yasei-no-otoko | open | 2026-10-08 | 2026-11-27 |
| [#6433](https://github.com/ROCm/aiter/pull/6433) | [Config] [Perf] Add gfx950 DSV4.1 Flash TP4 fused-shared-exp... | @kevin-mii | open | 2026-10-12 | 2026-11-27 |
| [#6638](https://github.com/ROCm/aiter/pull/6638) | [Config] Add gfx950 128-CU A4W4 GEMM tunings for Qwen3.8-27B... | @fyun89 | open | 2026-10-17 | 2026-11-27 |
| [#6814](https://github.com/ROCm/aiter/pull/6814) | [Triton/Gluon] : Benchmarks model config changes(scripts for... | @rahulbatra85 | open | 2026-10-22 | 2026-11-27 |
| [#6861](https://github.com/ROCm/aiter/pull/6861) | [FlyDSL] [MoE] Add optional per_slot_output for fused_moe | @kliuae | open | 2026-10-23 | 2026-11-27 |
| [#7017](https://github.com/ROCm/aiter/pull/7017) | [FlyDSL] Add gfx942 FP4 paged MQA logits for decode and pref... | @akii96 | open | 2026-10-27 | 2026-11-27 |
| [#7065](https://github.com/ROCm/aiter/pull/7065) | [Triton/Gluon] [MoE] One-launch decode sort that also zeroes... | @micah-wil | open | 2026-10-28 | 2026-11-27 |
| [#7119](https://github.com/ROCm/aiter/pull/7119) | [FlyDSL] Fix gfx1250 GEMM output offset overflow | @chandankumr | open | 2026-10-29 | 2026-11-27 |
| [#7206](https://github.com/ROCm/aiter/pull/7206) | [FlyDSL] feat(flydsl pa_decode): expose can_use_flydsl_pa_de... | @ZhiweiYan-96 | open | 2026-10-30 | 2026-11-27 |
| [#7269](https://github.com/ROCm/aiter/pull/7269) | [FlyDSL] Generalize gfx1250 BF16 wave query tiles | @zhiding512 | open | 2026-11-01 | 2026-11-27 |
| [#7319](https://github.com/ROCm/aiter/pull/7319) | [FlyDSL] Support independent output layouts in gfx1250 PA de... | @zhiding512 | open | 2026-11-02 | 2026-11-27 |
| [#7423](https://github.com/ROCm/aiter/pull/7423) | [FlyDSL] [PA] Avoid unused arrival counters and direct-outpu... | @zhiding512 | open | 2026-11-04 | 2026-11-27 |
| [#7447](https://github.com/ROCm/aiter/pull/7447) | [FlyDSL] Generalize gfx1250 FP8 PA to two and three query ti... | @zhiding512 | open | 2026-11-04 | 2026-11-27 |
| [#7526](https://github.com/ROCm/aiter/pull/7526) | [OPUS] [Build] Extract C++ code in generators to jinja templ... | @jbelloncastro | open | 2026-11-05 | 2026-11-27 |
| [#7548](https://github.com/ROCm/aiter/pull/7548) | [HIP] [FlyDSL] Port gfx1250 TDM HGEMM and source tuning spac... | @xytpai | open | 2026-11-06 | 2026-11-27 |
| [#7626](https://github.com/ROCm/aiter/pull/7626) | [Triton/Gluon] [Config] gfx1151 SonicMoE: measured grouped-G... | @klin2024 | open | 2026-11-08 | 2026-11-27 |
| [#7632](https://github.com/ROCm/aiter/pull/7632) | [Triton/Gluon] [Bugfix] gfx1250 a4w4 MoE decode: store the o... | @hubertlu-tw | open | 2026-11-08 | 2026-11-27 |
| [#7674](https://github.com/ROCm/aiter/pull/7674) | [FlyDSL] Add FP32 output to gfx950 skinny HGEMM | @xytpai | open | 2026-11-09 | 2026-11-27 |
| [#7677](https://github.com/ROCm/aiter/pull/7677) | [Triton/Gluon] [gfx1250] unified_attention 2D: bound gathere... | @vgokhale | open | 2026-11-09 | 2026-11-27 |
| [#7786](https://github.com/ROCm/aiter/pull/7786) | [Triton/Gluon] unified_attention: mask the block-table read ... | @zijiecode | open | 2026-11-11 | 2026-11-27 |
| [#7959](https://github.com/ROCm/aiter/pull/7959) | [MLA] mla_decode_fwd: size persistent split buffers by the p... | @AndreasKaratzas | open | 2026-11-14 | 2026-11-27 |
| [#7805](https://github.com/ROCm/aiter/pull/7805) | [FlyDSL] [AOT] Assign into FakeTensor slices without reachin... | @zhiding512 | open | 2026-11-11 | 2026-11-27 |
| [#7836](https://github.com/ROCm/aiter/pull/7836) | [Triton/Gluon] [gfx1250] unified_attention: bound 2D gathere... | @ahmed-bsod | open | 2026-11-11 | 2026-11-27 |
| [#7839](https://github.com/ROCm/aiter/pull/7839) | [FlyDSL] [Fix] Preserve inverse route map for gfx1250 TP A-p... | @xytpai | open | 2026-11-11 | 2026-11-27 |
| [#5220](https://github.com/ROCm/aiter/pull/5220) | [HIP] pa_sparse_prefill: address out with its own strides | @kevin-mii | open | 2026-09-03 | 2026-11-27 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | [HIP] [FlyDSL] FlyDSL gemm_decode: small-M dense GEMM kernel... | @vedenev-amd | open | 2026-07-07 | 2026-11-27 |
| [#8789](https://github.com/ROCm/aiter/pull/8789) | [Triton/Gluon] [Config] Add gfx1100 batched_gemm_a16w16 DEFA... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8230](https://github.com/ROCm/aiter/pull/8230) | [FlyDSL] [JIT] Use the full-chip tuned rows for A6W6, A6W4 a... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-27 |
| [#8325](https://github.com/ROCm/aiter/pull/8325) | [Config] [Perf] MiniMax-M3.1-Flash TP2: tuned a8w8 block-sca... | @amd-bishwoadhikari | open | 2026-11-19 | 2026-11-27 |
| [#8788](https://github.com/ROCm/aiter/pull/8788) | [Triton/Gluon] [Config] Add gfx1100 gemm_a16w16_gated DEFAUL... | @klin2024 | draft | 2026-11-27 | 2026-11-27 |
| [#8326](https://github.com/ROCm/aiter/pull/8326) | [Config] [Perf] MiniMax-M3.1-Flash: tuned a8w8 PTPC FlyDSL G... | @amd-bishwoadhikari | open | 2026-11-19 | 2026-11-26 |
| [#8787](https://github.com/ROCm/aiter/pull/8787) | [Triton/Gluon] [Config] Add gfx1100 MHA forward configs | @klin2024 | draft | 2026-11-26 | 2026-11-26 |
| [#8782](https://github.com/ROCm/aiter/pull/8782) | Mha v4: name the per-batch key-length gate after key lengths... | @jcaraban | open | 2026-11-26 | 2026-11-26 |
| [#7474](https://github.com/ROCm/aiter/pull/7474) | [MHA] Fix flash_attn_varlen_func with block_table (paged KV) | @AndreasKaratzas | open | 2026-11-04 | 2026-11-26 |
| [#7415](https://github.com/ROCm/aiter/pull/7415) | [HIP] [OPUS] [JIT] [MLA] gfx950 fp8 flat-row MTP decode: hos... | @nehmathe2 | open | 2026-11-03 | 2026-11-26 |
| [#8662](https://github.com/ROCm/aiter/pull/8662) | [Triton/Gluon] [Bugfix] softmax, rms_norm, layer_norm: copy ... | @merrittttt | open | 2026-11-25 | 2026-11-26 |
| [#8660](https://github.com/ROCm/aiter/pull/8660) | [Triton/Gluon] [Bugfix] Fused add + rmsnorm/layernorm: pass ... | @merrittttt | open | 2026-11-25 | 2026-11-26 |
| [#8659](https://github.com/ROCm/aiter/pull/8659) | [Triton/Gluon] [Bugfix] MHA: treat window_size=(0, -1) as a ... | @merrittttt | open | 2026-11-25 | 2026-11-26 |
| [#6529](https://github.com/ROCm/aiter/pull/6529) | [MoE] Add MiniMax-M3 TP2 a16w4 decode rows for gfx950 | @amd-bishwoadhikari | open | 2026-10-14 | 2026-11-26 |
| [#8609](https://github.com/ROCm/aiter/pull/8609) | [HIP] [Perf] Deterministic slice-K a8w8 blockscale kernels f... | @AndreasKaratzas | draft | 2026-11-24 | 2026-11-26 |
| [#8756](https://github.com/ROCm/aiter/pull/8756) | [FlyDSL] Block-FP8 MoE ping-pong kernels as a fused_moe back... | @hellozhuo-amd | draft | 2026-11-26 | 2026-11-26 |
| [#7983](https://github.com/ROCm/aiter/pull/7983) | [HIP] [OPUS] Add opus gfx950 a4w4 no-shuffle nt gemm | @Fyzyukk | open | 2026-11-15 | 2026-11-26 |
| [#8502](https://github.com/ROCm/aiter/pull/8502) | [HIP] [OPUS] Add gfx950 blockscale grouped gemm (m_grouped /... | @Fyzyukk | open | 2026-11-23 | 2026-11-26 |
| [#8310](https://github.com/ROCm/aiter/pull/8310) | [Triton/Gluon] [HIP] [Perf] Fuse gfx1250 AR RMSNorm native M... | @XiaobingSuper | open | 2026-11-19 | 2026-11-26 |
| [#6830](https://github.com/ROCm/aiter/pull/6830) | [Triton/Gluon] [Kernel] Add an eight-row FP8 MQA logits path... | @iraj465 | open | 2026-10-22 | 2026-11-26 |
| [#7586](https://github.com/ROCm/aiter/pull/7586) | [Bugfix] Keep gfx942 asm 1-stage fmoe off expert weights pas... | @yuychang | open | 2026-11-06 | 2026-11-26 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] [JIT] jagged_dense_bmm_broadcast_add (MI300X, MI355... | @anhminhnguyenhoang | open | 2026-07-08 | 2026-11-26 |
| [#6247](https://github.com/ROCm/aiter/pull/6247) | [CK] [FlyDSL] [JIT] gfx942 a8w4 MoE stage1 fp8 kernel | @vedenev-amd | open | 2026-10-08 | 2026-11-26 |
| [#8051](https://github.com/ROCm/aiter/pull/8051) | [Config] gfx950 DSv4.1-Flash TP4 A8W4 MoE rows for the 385-e... | @fhuizing | draft | 2026-11-16 | 2026-11-26 |
| [#8772](https://github.com/ROCm/aiter/pull/8772) | [FlyDSL] MegaMoEV2: fused small-input route for the MiniMax-... | @MengqingCao | draft | 2026-11-26 | 2026-11-26 |
| [#8771](https://github.com/ROCm/aiter/pull/8771) | [FlyDSL] MegaMoEV2: SwiGLU-OAI GEMM1 epilogue and the MiniMa... | @MengqingCao | draft | 2026-11-26 | 2026-11-26 |
| [#8764](https://github.com/ROCm/aiter/pull/8764) | [Perf] gfx1250 fused AR + RMSNorm: Gluon power-of-2 route up... | @XiaobingSuper | open | 2026-11-26 | 2026-11-26 |
| [#8388](https://github.com/ROCm/aiter/pull/8388) | [FlyDSL] FP8 Block-Scale GEMM Optimization (MiMo) | @damien-lejeune | draft | 2026-11-20 | 2026-11-26 |
| [#6543](https://github.com/ROCm/aiter/pull/6543) | [FlyDSL] [JIT] Optimize FlyDSL Kimi K2 Thinking Kernel | @amirumoAMD | open | 2026-10-14 | 2026-11-26 |
| [#8769](https://github.com/ROCm/aiter/pull/8769) | [WIP][FlyDSL][MLA] Add gfx942 FlyDSL decode kernel for low-h... | @amd-meskelin | draft | 2026-11-26 | 2026-11-26 |
| [#8459](https://github.com/ROCm/aiter/pull/8459) | [FlyDSL] [Perf] gfx1250 NVFP4 sparse prefill attention with ... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-26 |
| [#8755](https://github.com/ROCm/aiter/pull/8755) | [KDA] Recurrence-level KDA API with chunkwise CP and a Megat... | @huizzhan | draft | 2026-11-26 | 2026-11-26 |
| [#8744](https://github.com/ROCm/aiter/pull/8744) | [FlyDSL] [gfx950] KDA chunk forward for Kimi-K3 | @huizzhan | draft | 2026-11-26 | 2026-11-26 |
| [#8757](https://github.com/ROCm/aiter/pull/8757) | KDA layer: gemm_precision="mxfp8" (Megatron-LM / TE MXFP8 re... | @huizzhan | draft | 2026-11-26 | 2026-11-26 |
| [#6919](https://github.com/ROCm/aiter/pull/6919) | [FlyDSL] [JIT] Add Mamba-2 SSD chunked forward for RDNA3 and... | @kashif | open | 2026-10-25 | 2026-11-26 |
| [#8754](https://github.com/ROCm/aiter/pull/8754) | [WIP] KDA projection GEMM epilogues: split-K/HTI epilogues, ... | @huizzhan | draft | 2026-11-26 | 2026-11-26 |
| [#8761](https://github.com/ROCm/aiter/pull/8761) | [FlyDSL] gemm_a16w16 gfx950 HTI: fix the unsplit C-store rac... | @huizzhan | draft | 2026-11-26 | 2026-11-26 |
| [#8501](https://github.com/ROCm/aiter/pull/8501) | [HIP] [OPUS] [JIT] Add gfx950 bf16 grouped gemm (m_grouped /... | @Fyzyukk | open | 2026-11-23 | 2026-11-26 |
| [#7933](https://github.com/ROCm/aiter/pull/7933) | [OPUS] Add gfx950 opus a16w16 NT/NN/TT/TN layout gemm | @Fyzyukk | open | 2026-11-13 | 2026-11-26 |
| [#8550](https://github.com/ROCm/aiter/pull/8550) | [FlyDSL] [Bugfix] MoE stage 1: wait for the A LDS-DMA before... | @cpersson-amd | open | 2026-11-24 | 2026-11-26 |
| [#8044](https://github.com/ROCm/aiter/pull/8044) | [ASM] Add gfx950 Qwen3.8-Flash-Next fused MXFP4 prefill prod... | @vstakhov-amd | open | 2026-11-16 | 2026-11-26 |
| [#8412](https://github.com/ROCm/aiter/pull/8412) | [Triton/Gluon] [Bugfix] [gfx1250] a8w4 MoE: scatter the EP r... | @xiaohuguo2023 | open | 2026-11-20 | 2026-11-26 |
| [#8681](https://github.com/ROCm/aiter/pull/8681) | [Triton/Gluon] fused_indexed_gated_residual: reject overlapp... | @Shan2L | open | 2026-11-25 | 2026-11-26 |
| [#8698](https://github.com/ROCm/aiter/pull/8698) | [Triton/Gluon] Dynamic per-token FP8 outputs for the DiT Ada... | @Shan2L | open | 2026-11-25 | 2026-11-26 |
| [#8431](https://github.com/ROCm/aiter/pull/8431) | [FlyDSL] [JIT] [Perf] gfx1250 MoE router GEMM + biased sigmo... | @XiaobingSuper | open | 2026-11-21 | 2026-11-26 |
| [#8665](https://github.com/ROCm/aiter/pull/8665) | [Config] [Perf] DSv4.1 TP4 a8w4: fused-quant stage 1 for the... | @cpersson-amd | draft | 2026-11-25 | 2026-11-26 |
| [#6832](https://github.com/ROCm/aiter/pull/6832) | [Triton/Gluon] [Kernel] Add a gfx950 prefill kernel for the ... | @iraj465 | open | 2026-10-22 | 2026-11-26 |
| [#7565](https://github.com/ROCm/aiter/pull/7565) | [FlyDSL] [MOE] Rotate the SwiGLU output between the two GEMM... | @jimmy-adams | open | 2026-11-06 | 2026-11-26 |
| [#5762](https://github.com/ROCm/aiter/pull/5762) | [FlyDSL] [CI] [JIT] [MHA] Route MHA forward through a tuned ... | @amd-bartgips | open | 2026-09-22 | 2026-11-26 |
| [#8432](https://github.com/ROCm/aiter/pull/8432) | [FlyDSL] [Perf] gfx1250 fused decode QKV chain: MXFP8 GEMM +... | @XiaobingSuper | draft | 2026-11-21 | 2026-11-26 |
| [#7001](https://github.com/ROCm/aiter/pull/7001) | [FlyDSL] [Perf] MegaMoE: faster compact Stage1 producer and ... | @chushic | open | 2026-10-27 | 2026-11-26 |
| [#8653](https://github.com/ROCm/aiter/pull/8653) | [HIP] [JIT] [Bugfix] Round mHC outputs to nearest even on gf... | @Arist12 | open | 2026-11-25 | 2026-11-26 |
| [#8427](https://github.com/ROCm/aiter/pull/8427) | [HIP] [JIT] [Perf] gfx1250 custom AR: pushed two-shot AR + R... | @XiaobingSuper | open | 2026-11-21 | 2026-11-26 |
| [#6390](https://github.com/ROCm/aiter/pull/6390) | [HIP] [JIT] [Build] gfx1201: SageAttention forward (INT8 QK,... | @Shan2L | open | 2026-10-10 | 2026-11-26 |
| [#8316](https://github.com/ROCm/aiter/pull/8316) | [HIP] Perf/opus moe sort latency | @Bernard-Liu | open | 2026-11-19 | 2026-11-26 |
| [#7332](https://github.com/ROCm/aiter/pull/7332) | [FlyDSL] [GFX1250] [MoE] Retune gfx1250 DSv4.1 EP4 a4w4 grou... | @Zzz9990 | open | 2026-11-02 | 2026-11-26 |
| [#8736](https://github.com/ROCm/aiter/pull/8736) | [ASM] [HIP] [FlyDSL] Optimize gfx1250 PS1 FP8 MLA decode for... | @xiangM99 | open | 2026-11-26 | 2026-11-26 |
| [#8512](https://github.com/ROCm/aiter/pull/8512) | [FlyDSL] Count tile2_pad in the stage-1 XCD remap grid | @peymanr | open | 2026-11-23 | 2026-11-26 |
| [#8475](https://github.com/ROCm/aiter/pull/8475) | [Fix] skinny_gemm: make strided input contiguous before skin... | @peymanr | open | 2026-11-23 | 2026-11-26 |
| [#8181](https://github.com/ROCm/aiter/pull/8181) | [MLA] Add get_mla_decode_num_heads: the head count to pad a ... | @gbyu-amd | open | 2026-11-18 | 2026-11-26 |
| [#7849](https://github.com/ROCm/aiter/pull/7849) | [CI] Re-enable single-node multi-GPU MoE tests | @gyohuangxin | open | 2026-11-12 | 2026-11-26 |
| [#7431](https://github.com/ROCm/aiter/pull/7431) | [FlyDSL] [JIT] [gfx1250] Optimize grouped MXFP4 native prefi... | @yanguahe | open | 2026-11-04 | 2026-11-26 |
| [#8626](https://github.com/ROCm/aiter/pull/8626) | [Config] [Perf] Add Kimi K3 PTPC M128 tuning for gfx1250 | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8219](https://github.com/ROCm/aiter/pull/8219) | [CK] [Feature] ck2stages MoE: NK-padded bf16/fp16 instances ... | @Concurrensee | open | 2026-11-18 | 2026-11-26 |
| [#8723](https://github.com/ROCm/aiter/pull/8723) | [Config] perf(gfx1250): tune DSV4.1-Flash mono-TP4 grouped M... | @vecheruk-amd | open | 2026-11-26 | 2026-11-26 |
| [#8666](https://github.com/ROCm/aiter/pull/8666) | [HIP] fmha_v3_bwd: accept rng_state=None without dropout | @JohnNikolay84 | open | 2026-11-25 | 2026-11-26 |
| [#8059](https://github.com/ROCm/aiter/pull/8059) | [HIP] [Fix] Keep mha_bwd's deterministic split clamp compili... | @Ruturaj4 | open | 2026-11-16 | 2026-11-26 |
| [#8469](https://github.com/ROCm/aiter/pull/8469) | [Feature] Implement AttnRes forward and backward | @slippedJim | draft | 2026-11-23 | 2026-11-26 |
| [#8411](https://github.com/ROCm/aiter/pull/8411) | [MoE] [Perf] gfx942: skip a padded BF16 intermediate tail in... | @frida-andersson | draft | 2026-11-20 | 2026-11-26 |
| [#7137](https://github.com/ROCm/aiter/pull/7137) | [HIP] [Perf] topk sampled: a stable mode for topk_select's t... | @MHYangAMD | open | 2026-10-29 | 2026-11-26 |
| [#7718](https://github.com/ROCm/aiter/pull/7718) | [Triton/Gluon] [Perf] gfx950: tune the act_mul_and_fp8_group... | @zengleixin-amd | open | 2026-11-10 | 2026-11-26 |
| [#8711](https://github.com/ROCm/aiter/pull/8711) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 DSpark down at M192 | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8710](https://github.com/ROCm/aiter/pull/8710) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 DSpark down at M96 | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8709](https://github.com/ROCm/aiter/pull/8709) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 DSpark o_proj at M9... | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8706](https://github.com/ROCm/aiter/pull/8706) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 DSpark gate_up at M... | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8705](https://github.com/ROCm/aiter/pull/8705) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 DSpark q_b at M192 | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8703](https://github.com/ROCm/aiter/pull/8703) | [Config] [Perf] Tune gfx1250 Kimi K3 TP1 q_b at M3072 | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8677](https://github.com/ROCm/aiter/pull/8677) | [Config] Add three gfx1250 K3 DSpark prefill and decode tuni... | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8674](https://github.com/ROCm/aiter/pull/8674) | [Fix] Add gfx1250 K3 lm_head M128 tuning with strict TDM fal... | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8561](https://github.com/ROCm/aiter/pull/8561) | [Config] [Perf] Tune Kimi K3 TP1 f_b E8M0 GEMM on gfx1250 | @ZLkanyo009 | open | 2026-11-24 | 2026-11-26 |
| [#8557](https://github.com/ROCm/aiter/pull/8557) | [Config] [Perf] Tune eight Kimi K3 TP1 dense E8M0 GEMM rows ... | @ZLkanyo009 | open | 2026-11-24 | 2026-11-26 |
| [#8639](https://github.com/ROCm/aiter/pull/8639) | [Triton/Gluon] [Attention] Deterministic sink gradient in th... | @Z-Y00 | open | 2026-11-25 | 2026-11-26 |
| [#8728](https://github.com/ROCm/aiter/pull/8728) | [FlyDSL] [GFX1250] [MoE] IOD-local MoE weight placement and ... | @Boss2002n | draft | 2026-11-26 | 2026-11-26 |
| [#7041](https://github.com/ROCm/aiter/pull/7041) | [Triton/Gluon] tuning_on_benchmarks | @Boss2002n | open | 2026-10-27 | 2026-11-26 |
| [#7059](https://github.com/ROCm/aiter/pull/7059) | [Triton/Gluon] [Config] Add gfx1150 RMSNorm large-M/small-N ... | @klin2024 | open | 2026-10-28 | 2026-11-26 |
| [#7369](https://github.com/ROCm/aiter/pull/7369) | [Triton/Gluon] [Config] Add gfx1201 RMSNorm large-M/small-N ... | @klin2024 | open | 2026-11-03 | 2026-11-26 |
| [#7704](https://github.com/ROCm/aiter/pull/7704) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w16_atomic confi... | @klin2024 | open | 2026-11-10 | 2026-11-26 |
| [#7705](https://github.com/ROCm/aiter/pull/7705) | [Triton/Gluon] [Config] Add gfx1150 fused_reduce_add_rmsnorm... | @klin2024 | open | 2026-11-10 | 2026-11-26 |
| [#8564](https://github.com/ROCm/aiter/pull/8564) | [ASM] [Bugfix] Scale softmax P before the FP8 cast in gfx942... | @alexioslyrakis-amd | open | 2026-11-24 | 2026-11-26 |
| [#8622](https://github.com/ROCm/aiter/pull/8622) | [Config] [Perf] Add gfx942 a8w8_bpreshuffle CK tunings for L... | @gwokhou | open | 2026-11-25 | 2026-11-26 |
| [#8624](https://github.com/ROCm/aiter/pull/8624) | [FlyDSL] [Bugfix] [gfx950] Fix LDS races in the A16W16 GEMM ... | @thechenli | open | 2026-11-25 | 2026-11-26 |
| [#8627](https://github.com/ROCm/aiter/pull/8627) | [Triton/Gluon] bench_unified_attention: -max_sk for a CUDA-g... | @amd-mghanimi | open | 2026-11-25 | 2026-11-26 |
| [#8633](https://github.com/ROCm/aiter/pull/8633) | [FlyDSL] [MoE] MegaMoEV2: faster small-input route (bitwise ... | @GwilliamHu | open | 2026-11-25 | 2026-11-26 |
| [#8654](https://github.com/ROCm/aiter/pull/8654) | [Triton/Gluon] Enable moe_gemm_a16w4 on software-emulated FP... | @tangzzycc | open | 2026-11-25 | 2026-11-26 |
| [#8667](https://github.com/ROCm/aiter/pull/8667) | [FlyDSL] [gfx1250] MegaMoE: split cross-rank sync out of the... | @XingerZhu | open | 2026-11-25 | 2026-11-26 |
| [#8668](https://github.com/ROCm/aiter/pull/8668) | [FlyDSL] [Perf] Add a small-M FP8 blockscale GEMM decode ker... | @Arist12 | open | 2026-11-25 | 2026-11-26 |
| [#8672](https://github.com/ROCm/aiter/pull/8672) | [Config] Tune seven gfx1250 K3 TP1 DSpark rows | @ZLkanyo009 | open | 2026-11-25 | 2026-11-26 |
| [#8682](https://github.com/ROCm/aiter/pull/8682) | [ASM] Fix Q/KV LDS race in gfx950 FP8 QH32 qseqlen4 persiste... | @stefankoncarevic | open | 2026-11-25 | 2026-11-26 |
| [#8687](https://github.com/ROCm/aiter/pull/8687) | [Config] [Tuning] Kimi-K3.1: bf16 GEMM rows for the folded D... | @nsusanto | open | 2026-11-25 | 2026-11-26 |
| [#8688](https://github.com/ROCm/aiter/pull/8688) | [JIT] [Bugfix] Exclude native builds from mp_tuner execution... | @yzhou103 | open | 2026-11-25 | 2026-11-26 |
| [#7980](https://github.com/ROCm/aiter/pull/7980) | [Perf] [MoE] fused_moe: keep CK split-K under swiglu_limit | @eppaneamd | open | 2026-11-15 | 2026-11-26 |
| [#8488](https://github.com/ROCm/aiter/pull/8488) | [HIP] [gfx9] Fuse the add of tensor_model_parallel_all_reduc... | @TennyWang1223 | open | 2026-11-23 | 2026-11-26 |
| [#4708](https://github.com/ROCm/aiter/pull/4708) | [JIT] feat: Support LoongArch64, LoongArch64 not support Cod... | @Xinmudotmoe | open | 2026-08-12 | 2026-11-26 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-11-26 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | [HIP] Cache the paged_attention_v1 launch plan to fix batch=... | @zjin-lcf | open | 2026-08-03 | 2026-11-26 |
| [#5770](https://github.com/ROCm/aiter/pull/5770) | [CI] chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-26 |
| [#6337](https://github.com/ROCm/aiter/pull/6337) | [Triton/Gluon] Restructure Unified Attention Kernel (merging... | @cagrikymk | open | 2026-10-09 | 2026-11-26 |
| [#6697](https://github.com/ROCm/aiter/pull/6697) | [FlyDSL] [Perf] Fold the MXFP4 MoE sort into GEMM1 for GLM-5... | @chushic | open | 2026-10-20 | 2026-11-26 |
| [#6816](https://github.com/ROCm/aiter/pull/6816) | [Triton/Gluon] [GFX1250] Add bench MOE EP with no-mega suppo... | @k50112113 | open | 2026-10-22 | 2026-11-26 |
| [#6904](https://github.com/ROCm/aiter/pull/6904) | [HIP] Add gfx1101 to allowed_archs in csrc/cpp_itfs/utils.py | @Ragua1 | open | 2026-10-24 | 2026-11-26 |
| [#6905](https://github.com/ROCm/aiter/pull/6905) | [Triton/Gluon] [gfx1250] Fused GDN decode for Qwen3.5/3.8 on... | @ahmed-bsod | open | 2026-10-24 | 2026-11-26 |
| [#6973](https://github.com/ROCm/aiter/pull/6973) | [Triton/Gluon] [Config] Add gfx1151 Conv3D configs | @klin2024 | open | 2026-10-27 | 2026-11-26 |
| [#7107](https://github.com/ROCm/aiter/pull/7107) | [Triton/Gluon] [gfx1250] Fused GDN speculative-verify step o... | @ahmed-bsod | open | 2026-10-28 | 2026-11-26 |
| [#7603](https://github.com/ROCm/aiter/pull/7603) | [Triton/Gluon] Add more support to mxfp8 attention | @lburzawa | open | 2026-11-07 | 2026-11-26 |
| [#7605](https://github.com/ROCm/aiter/pull/7605) | [FlyDSL] [Bugfix] gfx1250 grouped MoE GEMM: store the output... | @hubertlu-tw | open | 2026-11-07 | 2026-11-26 |
| [#7625](https://github.com/ROCm/aiter/pull/7625) | [Triton/Gluon] [Config] gfx1151 sparse_mla_dsv4_train: forwa... | @klin2024 | open | 2026-11-08 | 2026-11-26 |
| [#5556](https://github.com/ROCm/aiter/pull/5556) | [FlyDSL] [CI] gfx950 FP8 paged-prefill attention with asymme... | @sammysun0711 | open | 2026-09-15 | 2026-11-26 |
| [#6764](https://github.com/ROCm/aiter/pull/6764) | [FlyDSL] Add non-causal mode to multi-token PA decode | @rebklee | open | 2026-10-21 | 2026-11-26 |
| [#8525](https://github.com/ROCm/aiter/pull/8525) | [Triton/Gluon] : (FUSED) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-11-24 | 2026-11-26 |
| [#8722](https://github.com/ROCm/aiter/pull/8722) | [Gluon] [gfx1250] Top-k / top-p sampling kernels: draft adva... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#8721](https://github.com/ROCm/aiter/pull/8721) | [Gluon] [gfx1250] Router + shared-expert decode kernel (wide... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#8720](https://github.com/ROCm/aiter/pull/8720) | [FlyDSL] [gfx1250] Grouped MoE: expert lookup in one memory ... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#8719](https://github.com/ROCm/aiter/pull/8719) | [Gluon] [gfx1250] GDN verify: register replay with the FP32 ... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#8718](https://github.com/ROCm/aiter/pull/8718) | [Config] [gfx1250] Qwen3.6-35B-A3B grouped MoE, 257-512 rows... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#8514](https://github.com/ROCm/aiter/pull/8514) | [HIP] [CI] [IQ2R] IQ2R-v2 for GLM-5.3: 512/1,024-entry codeb... | @ssharma4-amd | open | 2026-11-23 | 2026-11-26 |
| [#8716](https://github.com/ROCm/aiter/pull/8716) | [ASM] [Bugfix] gemm_a4w4: opt-in deterministic mode, and no ... | @josh-schell-amd | draft | 2026-11-26 | 2026-11-26 |
| [#6277](https://github.com/ROCm/aiter/pull/6277) | [ASM] [HIP] [CI] [MLA] [Bugfix] Fix and optimize the gfx942 ... | @jonahbernard | open | 2026-10-08 | 2026-11-25 |
| [#6987](https://github.com/ROCm/aiter/pull/6987) | [FlyDSL] FlyDSL MoE RMSNorm Support | @amirumoAMD | open | 2026-10-27 | 2026-11-25 |
| [#8365](https://github.com/ROCm/aiter/pull/8365) | [FlyDSL] gfx1250 PA decode: MXFP8 (E8M0 group-32) output for... | @lirui927 | draft | 2026-11-20 | 2026-11-25 |
| [#8588](https://github.com/ROCm/aiter/pull/8588) | [FlyDSL] mxfp8 8-wave GEMM: cover the padded rows of preshuf... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8589](https://github.com/ROCm/aiter/pull/8589) | [HIP] [FlyDSL] [CI] [MoE] MXMOE GEMM1 _bf16q: round to bf16 ... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8591](https://github.com/ROCm/aiter/pull/8591) | [HIP] [JIT] MiniMax-M3.1 TP1: qknorm_v3, the q/k/index norm,... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8594](https://github.com/ROCm/aiter/pull/8594) | [HIP] [JIT] MiniMax-M3 TP1: token-tiled FP8 sparse prefill a... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8595](https://github.com/ROCm/aiter/pull/8595) | [HIP] [JIT] MiniMax-M3 TP1: fused FP8 index block scorer wit... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8602](https://github.com/ROCm/aiter/pull/8602) | [Config] MiniMax-M3.1 TP1: MXFP8 linear rows (8-wave, mxpsh ... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8638](https://github.com/ROCm/aiter/pull/8638) | [Triton/Gluon] [HIP] Fix C++ interface JIT import path | @gyohuangxin | open | 2026-11-25 | 2026-11-25 |
| [#8187](https://github.com/ROCm/aiter/pull/8187) | [Triton/Gluon] [Config] gfx950: tune gemm_a8w8_per_token_sca... | @mawong-amd | open | 2026-11-18 | 2026-11-25 |
| [#8089](https://github.com/ROCm/aiter/pull/8089) | [Triton/Gluon] unified_attention decode one query block per ... | @amd-mghanimi | open | 2026-11-17 | 2026-11-25 |
| [#8069](https://github.com/ROCm/aiter/pull/8069) | [Triton/Gluon] [gfx1250] DSA indexer prefill top-k (k=2048) | @omuhamma | draft | 2026-11-17 | 2026-11-25 |
| [#8478](https://github.com/ROCm/aiter/pull/8478) | [Triton/Gluon] unified_attention: architecture-neutral Gluon... | @rbrugaro-amd | open | 2026-11-23 | 2026-11-25 |
| [#7360](https://github.com/ROCm/aiter/pull/7360) | [Triton/Gluon] [Perf] [KDA] Optimize the gfx950 FlashKDA pre... | @waqahmed-amd-fi | draft | 2026-11-02 | 2026-11-25 |
| [#8050](https://github.com/ROCm/aiter/pull/8050) | Waqahmed/silotiger 1364 base (Do not merge) | @waqahmed-amd-fi | draft | 2026-11-16 | 2026-11-25 |
| [#8338](https://github.com/ROCm/aiter/pull/8338) | [HIP] Let several ctypes modules be linked into one library ... | @echen4096 | open | 2026-11-20 | 2026-11-25 |
| [#8336](https://github.com/ROCm/aiter/pull/8336) | [HIP] Use type aliases for the vector types of mha_v4_quant'... | @echen4096 | open | 2026-11-20 | 2026-11-25 |
| [#8635](https://github.com/ROCm/aiter/pull/8635) | [Perf] Integrate Kimi K3 TP1 GEMM tuning and dependencies on... | @ZLkanyo009 | open | 2026-11-25 | 2026-11-25 |
| [#8707](https://github.com/ROCm/aiter/pull/8707) | [HIP] [Perf] Fuse MoE route sort and MXFP8 activation quant ... | @cpersson-amd | draft | 2026-11-25 | 2026-11-25 |
| [#8223](https://github.com/ROCm/aiter/pull/8223) | [Triton/Gluon] Add triton_ar: Lamport all-reduce for gfx950 ... | @amgddm | open | 2026-11-18 | 2026-11-25 |
| [#8700](https://github.com/ROCm/aiter/pull/8700) | [Perf][gfx942] Route MI300X/MI325X decode top-k to the FlyDS... | @xaguilar-amd | draft | 2026-11-25 | 2026-11-25 |
| [#8612](https://github.com/ROCm/aiter/pull/8612) | Reject NaN scale in packed BF16 GDR decode | @zijiecode | open | 2026-11-24 | 2026-11-25 |
| [#8213](https://github.com/ROCm/aiter/pull/8213) | [Config] [Perf] Add DeepSeek-V4.1-Flash TP4 A8W4 MoE rows fo... | @amd-pedghazi | draft | 2026-11-18 | 2026-11-25 |
| [#6417](https://github.com/ROCm/aiter/pull/6417) | [HIP] [JIT] Add fused_indexed_gated_residual for diffusion t... | @Shan2L | open | 2026-10-12 | 2026-11-25 |
| [#6083](https://github.com/ROCm/aiter/pull/6083) | [FlyDSL] FlyDSL QSA indexer scorer + sparse GQA gfx942 perfo... | @SamiAario-AMD | open | 2026-10-02 | 2026-11-25 |
| [#7554](https://github.com/ROCm/aiter/pull/7554) | [Triton/Gluon] [Bugfix] gemm_afp4wfp4: mask K-tail scales wi... | @vorapolsiloai | open | 2026-11-06 | 2026-11-25 |
| [#8619](https://github.com/ROCm/aiter/pull/8619) | [Triton/Gluon] Implementing depthwise conv on Triton conv2d | @saeid-rostami | open | 2026-11-24 | 2026-11-25 |
| [#7343](https://github.com/ROCm/aiter/pull/7343) | [FlyDSL] [Perf] fn-resident mHC pre GEMM for gfx950 prefill | @anhminhnguyenhoang | draft | 2026-11-02 | 2026-11-25 |
| [#5592](https://github.com/ROCm/aiter/pull/5592) | [ASM] [HIP] [CI] [gfx942] Optimize long-context FMHA with sp... | @amd-yashagar | open | 2026-09-16 | 2026-11-25 |
| [#8697](https://github.com/ROCm/aiter/pull/8697) | [Bugfix] Fix fp8 kv_cache comparisons in persistent MLA kern... | @amd-meskelin | draft | 2026-11-25 | 2026-11-25 |
| [#8695](https://github.com/ROCm/aiter/pull/8695) | [FlyDSL] [Perf] gfx1250 decode MoE GEMM1: wave-level route, ... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#7714](https://github.com/ROCm/aiter/pull/7714) | [FlyDSL] Add hc_seam: fused hyper-connection gated-residual ... | @johannes-graner | draft | 2026-11-10 | 2026-11-25 |
| [#8690](https://github.com/ROCm/aiter/pull/8690) | [FlyDSL] [Perf] gfx1250 TP4 decode: o_proj + all-reduce + re... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#8689](https://github.com/ROCm/aiter/pull/8689) | [FlyDSL] [Perf] gfx1250 MoE router: one 8-row launch for the... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#7938](https://github.com/ROCm/aiter/pull/7938) | [HIP] [CI] Generate MXFP4 MoE aux kernels for (64, 4096, 409... | @mpashkovskii | open | 2026-11-13 | 2026-11-26 |
| [#8062](https://github.com/ROCm/aiter/pull/8062) | [FlyDSL] HSTU Forward performance improvement with ping-pong... | @hellozhuo-amd | draft | 2026-11-16 | 2026-11-25 |
| [#7879](https://github.com/ROCm/aiter/pull/7879) | [FlyDSL] [Bugfix] Support gfx950 GEMM operands of 4 GiB or m... | @amd-bartgips | draft | 2026-11-12 | 2026-11-25 |
| [#7547](https://github.com/ROCm/aiter/pull/7547) | [FlyDSL] perf(flydsl): route the gfx1250 TP prefill MoE in o... | @lirui927 | open | 2026-11-06 | 2026-11-25 |
| [#4612](https://github.com/ROCm/aiter/pull/4612) | [HIP] [CK] [BUG][MHA] Fix for MHA with softmax-sink | @shurale-nkn | open | 2026-08-06 | 2026-11-25 |
| [#8468](https://github.com/ROCm/aiter/pull/8468) | Feat/ms ep32 opt | @Bernard-Liu | draft | 2026-11-23 | 2026-11-25 |
| [#8569](https://github.com/ROCm/aiter/pull/8569) | [FlyDSL] pa_decode: GPU grouping planner for cascade decode | @mpashkovskii | draft | 2026-11-24 | 2026-11-25 |
| [#8568](https://github.com/ROCm/aiter/pull/8568) | [FlyDSL] pa_decode: cascade (shared-prefix) decode attention... | @mpashkovskii | draft | 2026-11-24 | 2026-11-25 |
| [#7011](https://github.com/ROCm/aiter/pull/7011) | [FlyDSL] [JIT] GEMM bf16 gfx942 | @damien-lejeune | open | 2026-10-27 | 2026-11-25 |
| [#8641](https://github.com/ROCm/aiter/pull/8641) | [FlyDSL] [MoE] [Config] MXMOE GEMM1 _ks2_ad1_ps for MiniMax-... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8643](https://github.com/ROCm/aiter/pull/8643) | [HIP] [JIT] [Perf] [MoE] MiniMax-M3.1 TP1: one-launch MoE so... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8605](https://github.com/ROCm/aiter/pull/8605) | [RDNA] Port vLLM's ROCM_RDNA_ATTN attention kernels to aiter | @roberteg16 | draft | 2026-11-24 | 2026-11-25 |
| [#8650](https://github.com/ROCm/aiter/pull/8650) | [Config] [Perf] Add DeepSeek-V4.1-Flash TP4 A8W4 MoE rows fo... | @amd-pedghazi | draft | 2026-11-25 | 2026-11-25 |
| [#6755](https://github.com/ROCm/aiter/pull/6755) | [Triton/Gluon] gfx950 Gluon unified attention: mask stale V ... | @WhatGhost | open | 2026-10-21 | 2026-11-25 |
| [#8092](https://github.com/ROCm/aiter/pull/8092) | [FlyDSL] DSR1 EP4 fused-shared: uncap S1F at top-9 and retun... | @XingerZhu | open | 2026-11-17 | 2026-11-25 |
| [#8509](https://github.com/ROCm/aiter/pull/8509) | [FlyDSL] Lamport quick-allreduce | @vpietila-amd | draft | 2026-11-23 | 2026-11-25 |
| [#7741](https://github.com/ROCm/aiter/pull/7741) | [fix] Treat runtime GPU architecture as a compile-time const... | @lauri9 | draft | 2026-11-10 | 2026-11-25 |
| [#5910](https://github.com/ROCm/aiter/pull/5910) | [fix] Make dropout-free varlen attention inference CUDA-grap... | @lauri9 | open | 2026-09-28 | 2026-11-25 |
| [#7538](https://github.com/ROCm/aiter/pull/7538) | [CK] [JIT] [Feature] Add model-specific MXFP4 A4W4 tuning pr... | @DaiXindi-AMD | open | 2026-11-06 | 2026-11-25 |
| [#7157](https://github.com/ROCm/aiter/pull/7157) | [FlyDSL] [CI] Fuse the Kimi-K3 attention-residual aggregatio... | @vedenev-amd | draft | 2026-10-29 | 2026-11-25 |
| [#6707](https://github.com/ROCm/aiter/pull/6707) | [Triton/Gluon] gemm_a16w16_gated: add bias and a gate_first ... | @klin2024 | open | 2026-10-20 | 2026-11-25 |
| [#7913](https://github.com/ROCm/aiter/pull/7913) | [HIP] [FlyDSL] [gfx1250] MLA PS1: take 32/64-head multi-toke... | @gbyu-amd | open | 2026-11-13 | 2026-11-25 |
| [#8185](https://github.com/ROCm/aiter/pull/8185) | [FlyDSL] gfx942 a16w4 gemm2: size the atomic-epilog LDS to t... | @MHYangAMD | open | 2026-11-18 | 2026-11-25 |
| [#8152](https://github.com/ROCm/aiter/pull/8152) | [OPUS] [Bugfix] Run OPUS GEMM on compute partitions and othe... | @AndreasKaratzas | open | 2026-11-18 | 2026-11-25 |
| [#8461](https://github.com/ROCm/aiter/pull/8461) | [FlyDSL] [Perf] gfx1250 MoE: router writes MXFP4 token rows,... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#8462](https://github.com/ROCm/aiter/pull/8462) | [FlyDSL] [Perf] gfx1250 NVFP4 sparse decode: plan-free launc... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#8549](https://github.com/ROCm/aiter/pull/8549) | [Triton/Gluon] ​ Add gfx1151 GDN decode tuning configs | @tangzzycc | open | 2026-11-24 | 2026-11-25 |
| [#4676](https://github.com/ROCm/aiter/pull/4676) | [FlyDSL] [CI] fp8 unified attention for gfx950 | @johannes-graner | open | 2026-08-11 | 2026-11-25 |
| [#8538](https://github.com/ROCm/aiter/pull/8538) | [Triton/Gluon] [gfx1250] KDA gating: take an FP16 or BF16 st... | @gbyu-amd | draft | 2026-11-24 | 2026-11-25 |
| [#8645](https://github.com/ROCm/aiter/pull/8645) | [Config] MiniMax-M3 router GEMM: fp32-accumulating 4096 and ... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8644](https://github.com/ROCm/aiter/pull/8644) | [HIP] [JIT] [Perf] MiniMax-M3 TP1 token-tiled sparse prefill... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8642](https://github.com/ROCm/aiter/pull/8642) | [FlyDSL] mxfp8 8-wave GEMM: SwiGLU-OAI + MXFP8 (w4) epilogue... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8640](https://github.com/ROCm/aiter/pull/8640) | [HIP] [JIT] [Perf] [MoE] MiniMax-M3.1 TP1: 8-wave ragged-til... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#8593](https://github.com/ROCm/aiter/pull/8593) | [HIP] [JIT] [Perf] [MoE] MiniMax-M3.1 TP1: ragged-tile MXFP4... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8592](https://github.com/ROCm/aiter/pull/8592) | [HIP] [JIT] [Perf] MiniMax-M3.1 TP1: add+RMSNorm with MXFP8/... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8590](https://github.com/ROCm/aiter/pull/8590) | [Config] MiniMax-M3 / M3.1 TP1: MXFP4 MoE prefill rows (128 ... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#8160](https://github.com/ROCm/aiter/pull/8160) | [HIP] [Feature] OPUS hd128: paged KV, split-KV and attention... | @siqiy-cerebras | open | 2026-11-18 | 2026-11-25 |
| [#8463](https://github.com/ROCm/aiter/pull/8463) | [HIP] [JIT] [Perf] aiter.add/sub/mul/div: flat vector kernel... | @ClementLinCF | open | 2026-11-23 | 2026-11-25 |
| [#8180](https://github.com/ROCm/aiter/pull/8180) | [Triton/Gluon] gfx1250 bf16 MHA forward: subtiled, warp-pipe... | @nsusanto | open | 2026-11-18 | 2026-11-25 |
| [#7627](https://github.com/ROCm/aiter/pull/7627) | [Triton] [Config] Add gfx1150 batched_gemm_a16w16 configs | @klin2024 | draft | 2026-11-08 | 2026-11-25 |
| [#7966](https://github.com/ROCm/aiter/pull/7966) | [Triton/Gluon] gfx942 a16w4: optional STRIP16 weight layout ... | @ishara0925 | open | 2026-11-14 | 2026-11-25 |
| [#7964](https://github.com/ROCm/aiter/pull/7964) | [Triton/Gluon] gfx942 a16w4: fp16 B operand with the e8m0 sc... | @ishara0925 | open | 2026-11-14 | 2026-11-25 |
| [#8586](https://github.com/ROCm/aiter/pull/8586) | [FlyDSL] [gfx1250] Kimi-K3 TP1 decode: mxfp8_128 rows for ev... | @zejunchen-zejun | draft | 2026-11-24 | 2026-11-25 |
| [#4863](https://github.com/ROCm/aiter/pull/4863) | [ASM] [FlyDSL] [Kernel][Feature] Add Kimi-K3 AttnResidual sc... | @nehaprakriya | open | 2026-08-19 | 2026-11-25 |
| [#5955](https://github.com/ROCm/aiter/pull/5955) | [HIP] [JIT] Fuse six-way split-K reduction and q/KV RMSNorm | @heslami | open | 2026-09-29 | 2026-11-25 |
| [#6957](https://github.com/ROCm/aiter/pull/6957) | [HIP] Fix mHC pre cross-batch numerical consistency on gfx95... | @Qubitium | open | 2026-10-26 | 2026-11-25 |
| [#7283](https://github.com/ROCm/aiter/pull/7283) | [HIP] [Bugfix] Reject non-contiguous mixes and out in mhc_po... | @ASHMEET555 | open | 2026-11-01 | 2026-11-25 |
| [#8634](https://github.com/ROCm/aiter/pull/8634) | [Config] [gfx1250] Kimi-K3 TP1 decode: BF16 MoE router and l... | @zejunchen-zejun | draft | 2026-11-25 | 2026-11-25 |
| [#7111](https://github.com/ROCm/aiter/pull/7111) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-11-25 |
| [#8107](https://github.com/ROCm/aiter/pull/8107) | [Triton/Gluon] [Bugfix] Derive split-K params for explicit g... | @Woody-Hu | open | 2026-11-17 | 2026-11-25 |
| [#7608](https://github.com/ROCm/aiter/pull/7608) | [FlyDSL] gfx1201 flash attention: head_dim % 8, GQA, packed ... | @klin2024 | draft | 2026-11-07 | 2026-11-25 |
| [#8106](https://github.com/ROCm/aiter/pull/8106) | [Triton/Gluon] [Tune] gfx950 gemm_a16w8_blockscale: add N=12... | @mengfei-jiang | open | 2026-11-17 | 2026-11-25 |
| [#6669](https://github.com/ROCm/aiter/pull/6669) | [FlyDSL] Add gfx11 (RDNA3 / RDNA3.5) flash attention forward | @klin2024 | open | 2026-10-19 | 2026-11-25 |
| [#6612](https://github.com/ROCm/aiter/pull/6612) | [Config] [Qwen3.5][Tuning] Add TP8 (inter_dim=128) fused-MoE... | @chuyeh | open | 2026-10-16 | 2026-11-25 |
| [#4962](https://github.com/ROCm/aiter/pull/4962) | [CI] ci: add Kimi and MiniMax to ATOM DI matrix | @JiaoliangYu | open | 2026-08-24 | 2026-11-25 |
| [#5336](https://github.com/ROCm/aiter/pull/5336) | [HIP] [Bugfix] Fix gfx90a module_custom builds by guarding F... | @Mazukiri | open | 2026-09-08 | 2026-11-25 |
| [#6141](https://github.com/ROCm/aiter/pull/6141) | [CI] [gfx950] Execute pytest regressions in standard shards ... | @chandankumr | open | 2026-10-05 | 2026-11-25 |
| [#6167](https://github.com/ROCm/aiter/pull/6167) | [Triton/Gluon] unified_attention_sparse_mla: read launch val... | @Ragua1 | open | 2026-10-06 | 2026-11-25 |
| [#6445](https://github.com/ROCm/aiter/pull/6445) | [Triton/Gluon] Gluon PA decode: ragged (varlen) query suppor... | @andrei-kochin | open | 2026-10-12 | 2026-11-25 |
| [#6586](https://github.com/ROCm/aiter/pull/6586) | [HIP] [Fix][Perf] topk_plain: correct multi-block fp16/bf16 ... | @zhentaocc | open | 2026-10-15 | 2026-11-25 |
| [#6705](https://github.com/ROCm/aiter/pull/6705) | [Triton/Gluon] [JIT] Fix imports under AITER_TRITON_ONLY=1: ... | @MHYangAMD | open | 2026-10-20 | 2026-11-25 |
| [#6978](https://github.com/ROCm/aiter/pull/6978) | [Config] Add MI455 QWEN3.8 TUNED GEMM RESULT | @minmengdie | open | 2026-10-27 | 2026-11-25 |
| [#7030](https://github.com/ROCm/aiter/pull/7030) | [Triton/Gluon] [Config] Tune the gfx1150 gemm_a16w16 DEFAULT... | @klin2024 | open | 2026-10-27 | 2026-11-25 |
| [#7071](https://github.com/ROCm/aiter/pull/7071) | [Triton/Gluon] [Config] Add gfx1150 fused_sigmoid_mul config | @klin2024 | open | 2026-10-28 | 2026-11-25 |
| [#7078](https://github.com/ROCm/aiter/pull/7078) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w16_gated DEFAUL... | @klin2024 | open | 2026-10-28 | 2026-11-25 |
| [#7249](https://github.com/ROCm/aiter/pull/7249) | [Triton/Gluon] Add gfx1151 gemm_a16w4 configs | @klin2024 | open | 2026-10-31 | 2026-11-25 |
| [#7679](https://github.com/ROCm/aiter/pull/7679) | [FlyDSL][gfx1250] moe_topk_route_quant_prefill: TDM gather p... | @vgokhale | open | 2026-11-09 | 2026-11-25 |
| [#7867](https://github.com/ROCm/aiter/pull/7867) | [FlyDSL] MegaMoEV2 EP4 V4.1-Flash: fix the large-input scale... | @zhiding512 | open | 2026-11-12 | 2026-11-25 |
| [#8383](https://github.com/ROCm/aiter/pull/8383) | [Config] [Perf] gfx942: MiniMax-M3.1-Flash TP2 tuned a8w8 bl... | @tnguyeng | open | 2026-11-20 | 2026-11-25 |
| [#8491](https://github.com/ROCm/aiter/pull/8491) | [FlyDSL] MegaMoEV2 V4.1-Flash small-input: shared expert ins... | @zhiding512 | open | 2026-11-23 | 2026-11-25 |
| [#8524](https://github.com/ROCm/aiter/pull/8524) | [Triton/Gluon] : (ATTN_MISC) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-11-24 | 2026-11-25 |
| [#8526](https://github.com/ROCm/aiter/pull/8526) | [Triton/Gluon] : (QUANT_HADAMARD) Add RotatingBufferBench su... | @rahulbatra85 | open | 2026-11-24 | 2026-11-25 |
| [#8535](https://github.com/ROCm/aiter/pull/8535) | [Config] [Perf] Add DeepSeek-V4.1-Flash EP2/EP4 fused-MoE ro... | @limou102 | open | 2026-11-24 | 2026-11-25 |
| [#8108](https://github.com/ROCm/aiter/pull/8108) | [Triton/Gluon] [Config] [Perf] Replace seeded gfx1151 gemm_a... | @Woody-Hu | open | 2026-11-17 | 2026-11-25 |
| [#8572](https://github.com/ROCm/aiter/pull/8572) | [Triton/Gluon] Add gfx1151 3D-tiled wave32 na3d_flash forwar... | @tangzzycc | open | 2026-11-24 | 2026-11-25 |
| [#8583](https://github.com/ROCm/aiter/pull/8583) | [FlyDSL] MegaMoEInternode.prepare_weights: expose the op's w... | @JiaoliangYu | open | 2026-11-24 | 2026-11-25 |
| [#8415](https://github.com/ROCm/aiter/pull/8415) | [HIP] Fix pa_v1 workspace region offsets for MTP | @fsx950223 | draft | 2026-11-21 | 2026-11-25 |
| [#7148](https://github.com/ROCm/aiter/pull/7148) | [JIT] fix(jit): treat a zombie lock holder as dead in FileBa... | @Woody-Hu | open | 2026-10-29 | 2026-11-25 |
| [#8515](https://github.com/ROCm/aiter/pull/8515) | [Triton/Gluon] Add config-driven Triton A16W16 MoE backend a... | @keneoneth | open | 2026-11-23 | 2026-11-25 |
| [#7473](https://github.com/ROCm/aiter/pull/7473) | [Build] [MHA] Stop flash_attn_varlen_func from dropping sequ... | @AndreasKaratzas | open | 2026-11-04 | 2026-11-25 |
| [#6765](https://github.com/ROCm/aiter/pull/6765) | [Triton/Gluon] [Perf] Floor the gfx942 bf16 unified-attentio... | @siliangchen-amd | open | 2026-10-21 | 2026-11-24 |
| [#7189](https://github.com/ROCm/aiter/pull/7189) | [Triton/Gluon] [Config] [gfx1250] Kimi-K3/K3.1 tuning: a16w1... | @omuhamma | draft | 2026-10-30 | 2026-11-24 |
| [#7621](https://github.com/ROCm/aiter/pull/7621) | [ASM] Fix LDS races in gfx950 FP8 QH16 qseqlen2 MLA decode | @AndreasKaratzas | open | 2026-11-08 | 2026-11-24 |
| [#7607](https://github.com/ROCm/aiter/pull/7607) | [Triton/Gluon] [gfx1250] MLA decode: tune H64 and TP8, add s... | @justinrosner | open | 2026-11-07 | 2026-11-24 |
| [#6908](https://github.com/ROCm/aiter/pull/6908) | [Triton/Gluon] gfx942: A16W4 (bf16 x MXFP4) MoE GEMM with v_... | @ishara0925 | open | 2026-10-25 | 2026-11-24 |
| [#8186](https://github.com/ROCm/aiter/pull/8186) | [FlyDSL] [DSV41] MegaMoE improvements for DEP8 | @heachary | open | 2026-11-18 | 2026-11-24 |
| [#7594](https://github.com/ROCm/aiter/pull/7594) | [Triton/Gluon] mha variant for varlen | @omuhamma | open | 2026-11-06 | 2026-11-24 |
| [#8177](https://github.com/ROCm/aiter/pull/8177) | [FlyDSL] pa_mqa_logits_fp4_rowgroup: accept physical page st... | @nsusanto | open | 2026-11-18 | 2026-11-24 |
| [#8008](https://github.com/ROCm/aiter/pull/8008) | [Config] [Tuning] Kimi-K3.1 DSA merged hidden GEMM bf16 conf... | @nsusanto | open | 2026-11-16 | 2026-11-24 |
| [#6838](https://github.com/ROCm/aiter/pull/6838) | [Triton/Gluon] : (CHUNK_KDA) Add RotatingBufferBench support | @rahulbatra85 | open | 2026-10-22 | 2026-11-24 |
| [#5148](https://github.com/ROCm/aiter/pull/5148) | [FlyDSL] Single-launch decode GEMM: in-kernel blockscale, ra... | @johannes-graner | draft | 2026-08-31 | 2026-11-24 |
| [#8115](https://github.com/ROCm/aiter/pull/8115) | [FlyDSL] (feat) BF16 unified attention for MiMo V2.6 on gfx9... | @damien-lejeune | draft | 2026-11-17 | 2026-11-24 |
| [#8601](https://github.com/ROCm/aiter/pull/8601) | [Config] [gfx1250] Kimi-K3 TP1 prefill: mxfp8_128 rows at M ... | @zejunchen-zejun | draft | 2026-11-24 | 2026-11-24 |
| [#8563](https://github.com/ROCm/aiter/pull/8563) | [HIP] [JIT] hipb_w4a16: tuned kernel table for known W4A16 l... | @roberteg16 | draft | 2026-11-24 | 2026-11-24 |
| [#8386](https://github.com/ROCm/aiter/pull/8386) | [FlyDSL] [Test] pa_decode: cover four bugs the suite let thr... | @fsx950223 | open | 2026-11-20 | 2026-11-24 |
| [#8454](https://github.com/ROCm/aiter/pull/8454) | [Triton/Gluon] [Amnaro][AMD][MI300X][DS V4.1 Flash] moe_gemm... | @Qam2ng | open | 2026-11-22 | 2026-11-24 |
| [#8522](https://github.com/ROCm/aiter/pull/8522) | [Triton/Gluon] [Perf] fp8_mqa_logits: split under-filled gfx... | @Arist12 | open | 2026-11-23 | 2026-11-24 |
| [#8114](https://github.com/ROCm/aiter/pull/8114) | [Triton/Gluon] [gfx950] unified_attention: keep head-192 spe... | @tkarttunen | open | 2026-11-17 | 2026-11-24 |
| [#8503](https://github.com/ROCm/aiter/pull/8503) | [Triton/Gluon] [Perf] unified_attention: 128-row query block... | @Arist12 | open | 2026-11-23 | 2026-11-24 |
| [#6837](https://github.com/ROCm/aiter/pull/6837) | [FlyDSL] Select a16w4 stage2 reduce for fp4 | @zjin-lcf | open | 2026-10-22 | 2026-11-24 |
| [#6968](https://github.com/ROCm/aiter/pull/6968) | [Test] Cover 192x128, 128x64, and 256x256 in the FP8 MHA har... | @zjin-lcf | open | 2026-10-26 | 2026-11-24 |
| [#8043](https://github.com/ROCm/aiter/pull/8043) | [Triton/Gluon] [gfx950/1250] FlashKDA updates | @omuhamma | open | 2026-11-16 | 2026-11-24 |
| [#8579](https://github.com/ROCm/aiter/pull/8579) | [Config] [FlyDSL] [gfx1250] Kimi-K3 TP1 decode mx128 rows (o... | @zejunchen-zejun | draft | 2026-11-24 | 2026-11-24 |
| [#5150](https://github.com/ROCm/aiter/pull/5150) | [HIP] [CI] [JIT] [ROCm][MoE] Add fused MoE routing preamble ... | @sshlyapn | open | 2026-08-31 | 2026-11-24 |
| [#6623](https://github.com/ROCm/aiter/pull/6623) | [Config][GEMM][gfx950] Qwen3.8-27B ViT BF16 GEMM shapes (tun... | @vorapolsiloai | draft | 2026-10-16 | 2026-11-24 |
| [#7117](https://github.com/ROCm/aiter/pull/7117) | [Triton/Gluon] [Config] a4w4: dispatch triton_preshuffle tun... | @vorapolsiloai | draft | 2026-10-28 | 2026-11-24 |
| [#7280](https://github.com/ROCm/aiter/pull/7280) | [Perf] mha: flash_attn_varlen_fp8_pertensor_func writes into... | @vorapolsiloai | draft | 2026-11-01 | 2026-11-24 |
| [#8191](https://github.com/ROCm/aiter/pull/8191) | [Config] [Perf] MiniMax-M3.1 TP2 MXFP8 GEMM: qkv_proj rows a... | @vorapolsiloai | draft | 2026-11-18 | 2026-11-24 |
| [#8192](https://github.com/ROCm/aiter/pull/8192) | [Config] [Perf] MiniMax-M3.1 TP2 MXFP4 MoE (E=128): use the ... | @vorapolsiloai | draft | 2026-11-18 | 2026-11-24 |
| [#8193](https://github.com/ROCm/aiter/pull/8193) | [ASM] [Perf] MXFP4 MoE stage 2: opt-in gfx950 flat/dense ker... | @vorapolsiloai | draft | 2026-11-18 | 2026-11-24 |
| [#7736](https://github.com/ROCm/aiter/pull/7736) | [JIT] [Bugfix] Exclude FP8 kernels from BF16 varlen attentio... | @lauri9 | open | 2026-11-10 | 2026-11-24 |
| [#6840](https://github.com/ROCm/aiter/pull/6840) | [Triton/Gluon] : (QSA) Add rotating buffers and do_bench_ait... | @rahulbatra85 | open | 2026-10-22 | 2026-11-24 |
| [#6558](https://github.com/ROCm/aiter/pull/6558) | [FlyDSL] [CI] [MoonEP] Run the planner and weight pool on gf... | @JiaoliangYu | open | 2026-10-15 | 2026-11-24 |
| [#8506](https://github.com/ROCm/aiter/pull/8506) | [FlyDSL] gfx1250: Qwen3.8 decode fusions: route+psum for up ... | @minmengdie | open | 2026-11-23 | 2026-11-24 |
| [#8391](https://github.com/ROCm/aiter/pull/8391) | [Config] [gfx942] Mistral Large 4 FP8 block-scale GEMM rows ... | @xaguilar-amd | open | 2026-11-20 | 2026-11-24 |
| [#8542](https://github.com/ROCm/aiter/pull/8542) | [FlyDSL] gfx1250 mha bwd: hdim 128 FlyDSL backward (opt-in) | @slippedJim | draft | 2026-11-24 | 2026-11-24 |
| [#8259](https://github.com/ROCm/aiter/pull/8259) | [Config] Kimi-K3 gfx1250 grouped MoE: EP8 rows for the non-f... | @qichu-yun | open | 2026-11-19 | 2026-11-24 |
| [#8543](https://github.com/ROCm/aiter/pull/8543) | [Triton/Gluon] [gfx1250] ReplaySSM KDA: take an FP16 or BF16... | @gbyu-amd | draft | 2026-11-24 | 2026-11-24 |
| [#7153](https://github.com/ROCm/aiter/pull/7153) | [FlyDSL] a16w4 gfx942: opt-in fp8 MFMA mode, and fallback ti... | @MHYangAMD | open | 2026-10-29 | 2026-11-24 |
| [#8457](https://github.com/ROCm/aiter/pull/8457) | [FlyDSL] [Perf] gfx1250 MoE: defer the decode gather-reduce ... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-24 |
| [#8456](https://github.com/ROCm/aiter/pull/8456) | [HIP] [Perf] gfx1250 TP4 one-shot decode AR + RMSNorm (+ MXF... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-24 |
| [#8545](https://github.com/ROCm/aiter/pull/8545) | [Triton/Gluon] [Bugfix] Fix VarCtx paged MQA grid for batche... | @Ruye-aa | draft | 2026-11-24 | 2026-11-24 |
| [#8408](https://github.com/ROCm/aiter/pull/8408) | [CK] [Bugfix] gemm_moe_tune: give FLAT asm candidates fused_... | @eppaneamd | draft | 2026-11-20 | 2026-11-24 |
| [#8335](https://github.com/ROCm/aiter/pull/8335) | [Config] Add tuned gfx950 BF16 GEMM configs for Qwen3-14B de... | @WhatGhost | open | 2026-11-20 | 2026-11-24 |
| [#8544](https://github.com/ROCm/aiter/pull/8544) | mega_moe bench: fix mixed DPX/SPX weights, bf16 ref cache | @yanboshao | draft | 2026-11-24 | 2026-11-24 |
| [#6016](https://github.com/ROCm/aiter/pull/6016) | [CK] [CI] [Bugfix] Align FMoE tuning token buckets with runt... | @yuzhouo7 | open | 2026-09-30 | 2026-11-24 |
| [#8536](https://github.com/ROCm/aiter/pull/8536) | [FlyDSL] [gfx1250-strict] Fix grouped FP4 MoE WMMA on A0 | @JiaoliangYu | draft | 2026-11-24 | 2026-11-24 |
| [#7989](https://github.com/ROCm/aiter/pull/7989) | Dev/ms ep32 m4096 bm96 | @Bernard-Liu | draft | 2026-11-15 | 2026-11-24 |
| [#5268](https://github.com/ROCm/aiter/pull/5268) | feat(tune): record untuned shapes for every GEMM family, not... | @ThomasNing | open | 2026-09-03 | 2026-11-24 |
| [#6605](https://github.com/ROCm/aiter/pull/6605) | [FlyDSL] [Perf] [gfx950] Swap A/B in the mxfp8 8-wave epilog... | @yangyuhuiling | open | 2026-10-16 | 2026-11-24 |
| [#5358](https://github.com/ROCm/aiter/pull/5358) | [HIP] [FlyDSL] [JIT] Add a6w4 preshuffle GEMM from FlyDSL | @amd-satre | open | 2026-09-08 | 2026-11-24 |
| [#5269](https://github.com/ROCm/aiter/pull/5269) | [HIP] [OPUS] [CI] fix(jit): baton liveness is undecidable fr... | @ThomasNing | open | 2026-09-03 | 2026-11-24 |
| [#7552](https://github.com/ROCm/aiter/pull/7552) | [HIP] getPaddedM: fall back to the M=16 row for M<16 when no... | @afriedri-amd | open | 2026-11-06 | 2026-11-24 |
| [#5588](https://github.com/ROCm/aiter/pull/5588) | [FlyDSL] remove g2l for ep and accepts local_expert_hash as ... | @yadaish | open | 2026-09-16 | 2026-11-24 |
| [#5891](https://github.com/ROCm/aiter/pull/5891) | [HIP] [FlyDSL] [CI] [MoE]: Optimize MiMo MXFP4 EP8/EP16 on g... | @sammysun0711 | open | 2026-09-27 | 2026-11-24 |
| [#6268](https://github.com/ROCm/aiter/pull/6268) | [FlyDSL] [CI] [MoonEP] Balance MegaMoE v2 prefill with MoonE... | @JiaoliangYu | open | 2026-10-08 | 2026-11-24 |
| [#6308](https://github.com/ROCm/aiter/pull/6308) | [FlyDSL] Feat/compact plan align32 | @james-huang09 | open | 2026-10-09 | 2026-11-24 |
| [#7024](https://github.com/ROCm/aiter/pull/7024) | [FlyDSL] [Feature] mega_moe_tp: Make the cross-rank wait tim... | @eppaneamd | open | 2026-10-27 | 2026-11-24 |
| [#7425](https://github.com/ROCm/aiter/pull/7425) | [Triton/Gluon] [Config] Add gfx950 preshuffled AFP4WFP4 GEMM... | @fyun89 | open | 2026-11-04 | 2026-11-24 |
| [#8053](https://github.com/ROCm/aiter/pull/8053) | [FlyDSL] [gfx1250] Grouped MoE: tuned CSV rows inside a pow2... | @yhl-amd | open | 2026-11-16 | 2026-11-24 |
| [#7063](https://github.com/ROCm/aiter/pull/7063) | [FlyDSL] [Feature] Precompile MoE deployments (EP and TP), d... | @zhiding512 | open | 2026-10-28 | 2026-11-24 |
| [#7027](https://github.com/ROCm/aiter/pull/7027) | [Triton/Gluon] [gfx950] unified_attention: two-chunk QK dot ... | @tkarttunen | open | 2026-10-27 | 2026-11-24 |
| [#8104](https://github.com/ROCm/aiter/pull/8104) | [Config] [MoE] [gfx950] MiMo-V2.6-Pro MXFP4: FlyDSL fused-Mo... | @tkarttunen | open | 2026-11-17 | 2026-11-24 |
| [#8460](https://github.com/ROCm/aiter/pull/8460) | [Build] Pin FlyDSL to v0.5.4 | @jli-melchior | open | 2026-11-23 | 2026-11-24 |
| [#8471](https://github.com/ROCm/aiter/pull/8471) | [Triton/Gluon] [Bugfix] gfx1250 moe_gemm_a8w4: size GFX1250_... | @YingZhang-ML | open | 2026-11-23 | 2026-11-24 |
| [#8511](https://github.com/ROCm/aiter/pull/8511) | test(mha): deterministic dQ at long seqlen with batch = nhea... | @riptide-compute | open | 2026-11-23 | 2026-11-24 |
| [#6798](https://github.com/ROCm/aiter/pull/6798) | [HIP] [Bugfix] paged_attention_ll4mi: fix query-head offset ... | @Arist12 | open | 2026-10-21 | 2026-11-24 |
| [#7697](https://github.com/ROCm/aiter/pull/7697) | [Triton/Gluon] [gfx1250] gemm_a16w16: add compute_bound_clus... | @ahmed-bsod | open | 2026-11-10 | 2026-11-23 |
| [#6237](https://github.com/ROCm/aiter/pull/6237) | [CK] [CI] Catch MoE accuracy failures that CI currently logs... | @KHassanQazi | open | 2026-10-07 | 2026-11-23 |
| [#8513](https://github.com/ROCm/aiter/pull/8513) | Optimize GFX1250 MLA Decode | @farlukas | draft | 2026-11-23 | 2026-11-23 |
| [#6360](https://github.com/ROCm/aiter/pull/6360) | [FlyDSL] [Bugfix] gfx1250 grouped MoE: read integer config c... | @jhinpan | open | 2026-10-10 | 2026-11-23 |
| [#6358](https://github.com/ROCm/aiter/pull/6358) | [Config] [gfx1250] Select the FlyDSL kernel for 20 BF16 GEMM... | @jhinpan | open | 2026-10-10 | 2026-11-23 |
| [#6356](https://github.com/ROCm/aiter/pull/6356) | [CK] [Bugfix] Fix gfx1250 grouped MoE tuning and re-tune 6 A... | @jhinpan | open | 2026-10-10 | 2026-11-23 |
| [#7686](https://github.com/ROCm/aiter/pull/7686) | [Triton/Gluon] [Perf] Tune MLA decode launch configuration f... | @hyjuunn | open | 2026-11-09 | 2026-11-23 |
| [#8444](https://github.com/ROCm/aiter/pull/8444) | [HIP] Add a mesh-lending all-reduce: SDMA transport over the... | @mjkvaak-amd | draft | 2026-11-22 | 2026-11-23 |
| [#7556](https://github.com/ROCm/aiter/pull/7556) | [FlyDSL] [QSA] Sparse prefill attention on gfx950: union and... | @eppaneamd | open | 2026-11-06 | 2026-11-23 |
| [#7917](https://github.com/ROCm/aiter/pull/7917) | [FlyDSL] MoE v2 stage 2: skip the inter_dim padding | @cpersson-amd | open | 2026-11-13 | 2026-11-23 |
| [#7918](https://github.com/ROCm/aiter/pull/7918) | [FlyDSL] MoE stage 1: XCD remap over the valid rows only | @cpersson-amd | draft | 2026-11-13 | 2026-11-23 |
| [#7509](https://github.com/ROCm/aiter/pull/7509) | [OPUS] [Bugfix] Fix LDS race in gfx942 A8W8 blockscale B-pre... | @xiaohong42 | open | 2026-11-05 | 2026-11-23 |
| [#6026](https://github.com/ROCm/aiter/pull/6026) | [FlyDSL] [CI] [Kernel] Add fused KDA decode kernels on gfx94... | @yuychang | open | 2026-10-01 | 2026-11-23 |
| [#7529](https://github.com/ROCm/aiter/pull/7529) | [FlyDSL] [CI] [Kernel] Add a fused Kimi-K3 KDA target-verify... | @yuychang | open | 2026-11-05 | 2026-11-23 |
| [#6485](https://github.com/ROCm/aiter/pull/6485) | [Perf] MoE fused_moe(output=): reject overlapping outputs, c... | @yuychang | open | 2026-10-13 | 2026-11-23 |
| [#7569](https://github.com/ROCm/aiter/pull/7569) | [HIP] [Bugfix] Saturate the fp8 rope output of fused_qk_rope... | @yuychang | open | 2026-11-06 | 2026-11-23 |
| [#7245](https://github.com/ROCm/aiter/pull/7245) | [HIP] [Perf] MLA: Opt-in native 96-head FP8 decode at qlen 7... | @yuychang | draft | 2026-10-31 | 2026-11-23 |
| [#8265](https://github.com/ROCm/aiter/pull/8265) | [HIP] [Bugfix] Fall back to the mp sort when the moe_sorting... | @yuychang | draft | 2026-11-19 | 2026-11-23 |
| [#8422](https://github.com/ROCm/aiter/pull/8422) | [FlyDSL] fp8_mqa_logits: caller-owned output | @reger-men | open | 2026-11-21 | 2026-11-23 |
| [#8074](https://github.com/ROCm/aiter/pull/8074) | [Triton/Gluon] gfx1250 MLA decode: accept a KV cache with st... | @omuhamma | open | 2026-11-17 | 2026-11-23 |
| [#7417](https://github.com/ROCm/aiter/pull/7417) | [Triton/Gluon] fixed a moe bug related to swiglu on gfx1250 | @scxiao | open | 2026-11-03 | 2026-11-23 |
| [#8505](https://github.com/ROCm/aiter/pull/8505) | [Triton/Gluon] [gfx1250] Batched mxfp8 GEMM: fused fp8 outpu... | @ahmed-bsod | open | 2026-11-23 | 2026-11-23 |
| [#7735](https://github.com/ROCm/aiter/pull/7735) | [Build] Prebuild opus fwd and three more mha_varlen_fwd vari... | @stefankoncarevic | open | 2026-11-10 | 2026-11-23 |
| [#6143](https://github.com/ROCm/aiter/pull/6143) | [Perf] Tune MiMo-V2.6 unified-attention decode on gfx950 | @pbkowalski | draft | 2026-10-05 | 2026-11-23 |
| [#6710](https://github.com/ROCm/aiter/pull/6710) | [Triton/Gluon] Add fused_layernorm_indexed_adaln for diffusi... | @klin2024 | open | 2026-10-20 | 2026-11-23 |
| [#6712](https://github.com/ROCm/aiter/pull/6712) | [CI] [Test] Check that an A16W16 AOT replay cache serves a R... | @yuychang | open | 2026-10-20 | 2026-11-23 |
| [#7558](https://github.com/ROCm/aiter/pull/7558) | [fused_moe] Keep Swiglu MXFP4 A4W4 off a numerically-broken ... | @sahirema | open | 2026-11-06 | 2026-11-23 |
| [#8358](https://github.com/ROCm/aiter/pull/8358) | [FlyDSL] MegaMoE small-M: DeepSeek-V4.1-Flash, any experts p... | @zovonoir | open | 2026-11-20 | 2026-11-23 |
| [#8360](https://github.com/ROCm/aiter/pull/8360) | [FlyDSL] [Perf] MegaMoE small-M: pipelined GEMM2, lower per-... | @zovonoir | open | 2026-11-20 | 2026-11-23 |
| [#8396](https://github.com/ROCm/aiter/pull/8396) | [FlyDSL] perf(mega_moe): gfx1250 megakernel with s1f | @XingerZhu | open | 2026-11-20 | 2026-11-23 |
| [#7859](https://github.com/ROCm/aiter/pull/7859) | [FlyDSL] MegaMoE EP: expert-parallel MoE as one persistent k... | @Yaowu-Xiong | open | 2026-11-12 | 2026-11-23 |
| [#7196](https://github.com/ROCm/aiter/pull/7196) | [FlyDSL] MegaMoEV2: opt-in Stage2 + combine over SDMA with a... | @yangyuhuiling | open | 2026-10-30 | 2026-11-23 |
| [#7264](https://github.com/ROCm/aiter/pull/7264) | [FlyDSL] [JIT] optimize mega moe tp for small token | @binding7012 | open | 2026-11-01 | 2026-11-23 |
| [#7764](https://github.com/ROCm/aiter/pull/7764) | [JIT] Bind load_hip_runtime to the HIP runtime already loade... | @Ragua1 | open | 2026-11-10 | 2026-11-23 |
| [#8455](https://github.com/ROCm/aiter/pull/8455) | [HIP] [Perf] gfx1250 ar2s: MoE-front mode for the sequence-p... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-23 |
| [#8428](https://github.com/ROCm/aiter/pull/8428) | [HIP] [Perf] gfx1250 ar2s: MXFP8 output and sequence-paralle... | @XiaobingSuper | draft | 2026-11-21 | 2026-11-23 |
| [#7910](https://github.com/ROCm/aiter/pull/7910) | [Triton] [Bugfix] gemm_afp4wfp4: run short K loops with a ma... | @xiaobochen-amd | open | 2026-11-13 | 2026-11-23 |
| [#8009](https://github.com/ROCm/aiter/pull/8009) | [Triton/Gluon] KDA packed decode: fold gate projections on g... | @sumin-hong | open | 2026-11-16 | 2026-11-23 |
| [#4577](https://github.com/ROCm/aiter/pull/4577) | [FlyDSL] [Feature] Add the Kimi-K3 KDA per-channel decay gat... | @waqahmed-amd-fi | open | 2026-08-05 | 2026-11-23 |
| [#6123](https://github.com/ROCm/aiter/pull/6123) | [FlyDSL] [CI] fp8 unified attention for gfx942 (Gemma-4) | @waqahmed-amd-fi | open | 2026-10-03 | 2026-11-23 |
| [#7890](https://github.com/ROCm/aiter/pull/7890) | [FlyDSL] Remove padding copies from gfx1201 attention | @pds-amd | open | 2026-11-12 | 2026-11-23 |
| [#7088](https://github.com/ROCm/aiter/pull/7088) | [Triton/Gluon] [Perf] unified_attention: split KV by actual ... | @yuychang | open | 2026-10-28 | 2026-11-23 |
| [#7745](https://github.com/ROCm/aiter/pull/7745) | [Triton/Gluon] [Perf] [gfx1250] gluon UA2D: BLOCK_M 256 only... | @akao-amd | open | 2026-11-10 | 2026-11-23 |
| [#8246](https://github.com/ROCm/aiter/pull/8246) | [HIP] [CK] [FlyDSL] [gfx1250] Fused split-K for the generic ... | @aoli26 | open | 2026-11-19 | 2026-11-23 |
| [#6883](https://github.com/ROCm/aiter/pull/6883) | [Test] Stop test_kvcache from counting uninitialized cache b... | @KHassanQazi | open | 2026-10-23 | 2026-11-23 |
| [#8477](https://github.com/ROCm/aiter/pull/8477) | [WIP] Add SiTU-and-mul backward for Kimi-K3/K3.1 | @xiangM99 | draft | 2026-11-23 | 2026-11-23 |
| [#8446](https://github.com/ROCm/aiter/pull/8446) | [Triton] Add fused_indexed_gated_residual_layernorm_adaln fo... | @klin2024 | draft | 2026-11-22 | 2026-11-23 |
| [#8425](https://github.com/ROCm/aiter/pull/8425) | [FlyDSL] [Perf] fp8_mqa_logits: keep past-the-end rows out o... | @yuychang | open | 2026-11-21 | 2026-11-23 |
| [#8276](https://github.com/ROCm/aiter/pull/8276) | [CK] [Bugfix] Fall back to the mp sort when the CK moe_sorti... | @yuychang | draft | 2026-11-19 | 2026-11-23 |
| [#7244](https://github.com/ROCm/aiter/pull/7244) | [Triton/Gluon] [Feature] unified_attention: support causal=F... | @yuychang | open | 2026-10-31 | 2026-11-23 |
| [#8390](https://github.com/ROCm/aiter/pull/8390) | [Feature] Add whole-row MLA metadata range updates | @whx-sjtu | draft | 2026-11-20 | 2026-11-23 |
| [#5742](https://github.com/ROCm/aiter/pull/5742) | Guard unsupported layouts in unary operator dispatch | @UD-mmcminn | open | 2026-09-22 | 2026-11-23 |
| [#7571](https://github.com/ROCm/aiter/pull/7571) | [Docs] Update ruff version in contribution guidelines to mat... | @jbelloncastro | open | 2026-11-06 | 2026-11-23 |
| [#8414](https://github.com/ROCm/aiter/pull/8414) | [Triton] [Config] Add a gfx1150 fav3_sage table | @klin2024 | draft | 2026-11-21 | 2026-11-23 |
| [#8442](https://github.com/ROCm/aiter/pull/8442) | [Triton] [Config] Add a gfx1151 fav3_sage table | @klin2024 | draft | 2026-11-22 | 2026-11-23 |
| [#8453](https://github.com/ROCm/aiter/pull/8453) | [FlyDSL] [MegaMoE] Tune DeepSeek-V4.1-Flash EP8 at 49 expert... | @Fangzhou-Ai | draft | 2026-11-22 | 2026-11-22 |
| [#6676](https://github.com/ROCm/aiter/pull/6676) | [Triton/Gluon] gfx1151 gemm_a16w16: round before the activat... | @klin2024 | open | 2026-10-19 | 2026-11-22 |
| [#6986](https://github.com/ROCm/aiter/pull/6986) | [Triton/Gluon] batched_gemm_bf16: tile-major grid on gfx1151 | @klin2024 | open | 2026-10-27 | 2026-11-22 |
| [#5504](https://github.com/ROCm/aiter/pull/5504) | [FlyDSL] Fix the hardcoded die and CU counts in the FlyDSL k... | @RElbers | open | 2026-09-14 | 2026-11-22 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-11-22 |
| [#7637](https://github.com/ROCm/aiter/pull/7637) | [Triton/Gluon] gemm_a16w16_atomic: fix wrong results when th... | @klin2024 | open | 2026-11-09 | 2026-11-22 |
| [#8440](https://github.com/ROCm/aiter/pull/8440) | [Triton] [Config] Add gfx1151 mla_decode launch values (BF16... | @klin2024 | draft | 2026-11-22 | 2026-11-22 |
| [#6043](https://github.com/ROCm/aiter/pull/6043) | [Triton/Gluon] Tune bf16 a16w16 GEMM for Qwen3.5-397B on gfx... | @mqhc2020 | open | 2026-10-01 | 2026-11-22 |
| [#6848](https://github.com/ROCm/aiter/pull/6848) | [Triton/Gluon] feat(triton): add M-FALCON candidate attentio... | @sunxxuns | open | 2026-10-22 | 2026-11-22 |
| [#7081](https://github.com/ROCm/aiter/pull/7081) | [FlyDSL] Optimize gfx1250 PA partitions and packed attention | @fsx950223 | open | 2026-10-28 | 2026-11-22 |
| [#7532](https://github.com/ROCm/aiter/pull/7532) | [Triton/Gluon] [Hardware] Enable gemm_a16wfp4 and gemm_a8wfp... | @Ragua1 | open | 2026-11-05 | 2026-11-22 |
| [#7533](https://github.com/ROCm/aiter/pull/7533) | [Triton/Gluon] [Hardware] Enable batched and fused FP4 GEMMs... | @Ragua1 | open | 2026-11-05 | 2026-11-22 |
| [#8421](https://github.com/ROCm/aiter/pull/8421) | [Triton] [Config] Tune the gfx1151 gemm_a8w8_blockscale conf... | @klin2024 | draft | 2026-11-21 | 2026-11-22 |
| [#8439](https://github.com/ROCm/aiter/pull/8439) | [Triton] [Config] Add gfx1151 gemm_a8w8_blockscale_preshuffl... | @klin2024 | draft | 2026-11-22 | 2026-11-22 |
| [#8424](https://github.com/ROCm/aiter/pull/8424) | [Triton] [Bugfix] unified_attention: store zero for a kv_len... | @yuychang | draft | 2026-11-21 | 2026-11-22 |
| [#8426](https://github.com/ROCm/aiter/pull/8426) | [Triton] [Config] Tune the gfx1151 gemm_afp4wfp4 DEFAULT.jso... | @klin2024 | draft | 2026-11-21 | 2026-11-21 |
| [#8073](https://github.com/ROCm/aiter/pull/8073) | [Triton] [Config] Tune the gfx1150 gemm_a8w8 DEFAULT.json | @klin2024 | draft | 2026-11-17 | 2026-11-21 |
| [#8307](https://github.com/ROCm/aiter/pull/8307) | [ASM] [Bugfix] Apply kv_scale to the output of gfx942 FP8 ML... | @alexioslyrakis-amd | open | 2026-11-19 | 2026-11-21 |
| [#8340](https://github.com/ROCm/aiter/pull/8340) | [Config] [MoE] Retune Beam FP8 fused-MoE decode buckets for ... | @jamesETsmith | open | 2026-11-20 | 2026-11-21 |
| [#8346](https://github.com/ROCm/aiter/pull/8346) | [Triton/Gluon] [Perf] Tune fused_silu_mul_fp8_per_tensor_sta... | @amd-jrosas | open | 2026-11-20 | 2026-11-21 |
| [#8348](https://github.com/ROCm/aiter/pull/8348) | [Config] [gfx1250] Kimi-K3 latent-MoE BF16 GEMM rows for 256... | @gbyu-amd | open | 2026-11-20 | 2026-11-21 |
| [#8350](https://github.com/ROCm/aiter/pull/8350) | [MoE] [Test] gfx942: clamped FP8 SiLU cases use the running ... | @HaonanWang98 | open | 2026-11-20 | 2026-11-21 |
| [#8371](https://github.com/ROCm/aiter/pull/8371) | [FlyDSL] [gfx1151] Add GDN prefill support | @tangzzycc | open | 2026-11-20 | 2026-11-21 |
| [#7589](https://github.com/ROCm/aiter/pull/7589) | [CK] [Bugfix] Give every GPU_ARCHS arch its own ck2stages Mo... | @aarushjain29 | open | 2026-11-06 | 2026-11-21 |
| [#8417](https://github.com/ROCm/aiter/pull/8417) | [Triton] FA dao_ai: fix varlen dropout without attn probs, a... | @micmelesse | draft | 2026-11-21 | 2026-11-21 |
| [#4741](https://github.com/ROCm/aiter/pull/4741) | [FlyDSL] [Build] Add gfx950 Kimi Delta Attention prefill ker... | @amd-wsung102 | open | 2026-08-13 | 2026-11-21 |
| [#6511](https://github.com/ROCm/aiter/pull/6511) | [CK] [FlyDSL] fix(fused_moe): make the MXFP4 MoE stage2 epil... | @Qubitium | open | 2026-10-14 | 2026-11-21 |
| [#6947](https://github.com/ROCm/aiter/pull/6947) | [Config] Tuning/beam bf16 gemms for gfx950 | @jamesETsmith | open | 2026-10-26 | 2026-11-21 |
| [#7342](https://github.com/ROCm/aiter/pull/7342) | [Triton/Gluon] [CI] [DO NOT MERGE] : Migrating Triton tests ... | @pelumi1163 | open | 2026-11-02 | 2026-11-21 |
| [#7525](https://github.com/ROCm/aiter/pull/7525) | validate-kernel-pr: read the identity gate after fetch.sh's ... | @rpoornac | open | 2026-11-05 | 2026-11-21 |
| [#8413](https://github.com/ROCm/aiter/pull/8413) | [Triton] [Config] Add gfx1150 mla_decode launch values (BF16... | @klin2024 | draft | 2026-11-21 | 2026-11-21 |
| [#7891](https://github.com/ROCm/aiter/pull/7891) | [Triton/Gluon] [GFX12] sparse_mla_fwd wiring for 640-B align... | @k50112113 | open | 2026-11-12 | 2026-11-20 |
| [#7612](https://github.com/ROCm/aiter/pull/7612) | [Bugfix] MHA varlen forward: copy inputs with a zero stride ... | @AndreasKaratzas | open | 2026-11-07 | 2026-11-20 |
| [#6524](https://github.com/ROCm/aiter/pull/6524) | [HIP] [MLA][gfx942] Fix BF16 decode dispatch for GQA 64 | @chandankumr | open | 2026-10-14 | 2026-11-20 |
| [#7965](https://github.com/ROCm/aiter/pull/7965) | [Triton/Gluon] gfx942 a16w4: tuned prefill launch configs (b... | @ishara0925 | open | 2026-11-14 | 2026-11-20 |
| [#8410](https://github.com/ROCm/aiter/pull/8410) | [CK] [Feature] gemm_moe_tune: tune the swiglu_limit asm 1-st... | @eppaneamd | draft | 2026-11-20 | 2026-11-20 |
| [#8409](https://github.com/ROCm/aiter/pull/8409) | [ASM] [HIP] [Kernel] swiglu_limit in gfx950 FP8-input ps_64x... | @eppaneamd | draft | 2026-11-20 | 2026-11-20 |
| [#8407](https://github.com/ROCm/aiter/pull/8407) | [ASM] [HIP] [Kernel] swiglu_limit in gfx950 FP8 asm 1-stage ... | @eppaneamd | draft | 2026-11-20 | 2026-11-20 |
| [#7243](https://github.com/ROCm/aiter/pull/7243) | [Build] Reuse preshuffle_on ck2stages modules for non-fp4 Mo... | @AndreasKaratzas | draft | 2026-10-31 | 2026-11-20 |
| [#8100](https://github.com/ROCm/aiter/pull/8100) | [Triton/Gluon] Probe the arch from KFD sysfs so import aiter... | @AndreasKaratzas | open | 2026-11-17 | 2026-11-20 |
| [#6961](https://github.com/ROCm/aiter/pull/6961) | [Triton/Gluon] [ASM] [HIP] [MLA] Add Kimi-K3 HipKittens MLA ... | @aryatsc | open | 2026-10-26 | 2026-11-20 |
| [#8001](https://github.com/ROCm/aiter/pull/8001) | [Triton/Gluon] [Feature] fused_qk_rope_reshape_and_cache: op... | @chelnnexy | open | 2026-11-16 | 2026-11-20 |
| [#7479](https://github.com/ROCm/aiter/pull/7479) | [Config] [Perf] Retune Llama-3.1-405B BF16 GEMM config for g... | @afriedri-amd | open | 2026-11-04 | 2026-11-20 |
| [#8395](https://github.com/ROCm/aiter/pull/8395) | [Triton] [Config] Add gfx1150 gemm_a8w8_blockscale_preshuffl... | @klin2024 | draft | 2026-11-20 | 2026-11-20 |
| [#7977](https://github.com/ROCm/aiter/pull/7977) | [Triton] [Config] Add gfx1150 mla_decode_rope config | @klin2024 | draft | 2026-11-15 | 2026-11-20 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Triton/Gluon] [Kernel][Perf] split-K long-context decode fo... | @reger-men | open | 2026-06-26 | 2026-11-20 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Triton/Gluon] [Kernel] sliding-window decode over shuffled ... | @reger-men | open | 2026-06-26 | 2026-11-20 |
| [#8220](https://github.com/ROCm/aiter/pull/8220) | [Triton/Gluon] sparse_mla_fwd: 64-head fp8 decode kernels fo... | @rbrugaro-amd | open | 2026-11-18 | 2026-11-20 |
| [#5975](https://github.com/ROCm/aiter/pull/5975) | [Triton/Gluon] [Bugfix] Decouple pure-Torch FP6 packers from... | @adenzhou1350 | open | 2026-09-30 | 2026-11-20 |
| [#7822](https://github.com/ROCm/aiter/pull/7822) | [MoE] [Bugfix] Give stage 1 only the padding columns its sta... | @eppaneamd | open | 2026-11-11 | 2026-11-20 |
| [#7981](https://github.com/ROCm/aiter/pull/7981) | [Config] [GLM-5.3] gfx950 FP8 fused_moe: swiglu_limit=10 row... | @eppaneamd | open | 2026-11-15 | 2026-11-20 |
| [#7762](https://github.com/ROCm/aiter/pull/7762) | [Kimi-K3] Tune a8w8 bpreshuffle 6144x7168 prefill buckets on... | @jakki-amd | open | 2026-11-10 | 2026-11-20 |
| [#5732](https://github.com/ROCm/aiter/pull/5732) | [FlyDSL] [JIT] Add adaptive-blocked K5 prefill h-recurrence ... | @johannes-graner | open | 2026-09-21 | 2026-11-20 |
| [#8377](https://github.com/ROCm/aiter/pull/8377) | [OPUS] [Feature] Sparse MLA training backward with Q/K 576 a... | @shay-li77 | draft | 2026-11-20 | 2026-11-20 |
| [#8372](https://github.com/ROCm/aiter/pull/8372) | [Triton] [Config] Tune the gfx1151 conv2d configs | @klin2024 | draft | 2026-11-20 | 2026-11-20 |
| [#8362](https://github.com/ROCm/aiter/pull/8362) | Opt gptoss120b long context attention | @Emmanuel0612 | draft | 2026-11-20 | 2026-11-20 |
| [#7684](https://github.com/ROCm/aiter/pull/7684) | [MoE] [gfx950] a16w4 rows with 16-row FlyDSL kernels for Min... | @ZhengGong-amd | open | 2026-11-09 | 2026-11-20 |
| [#6627](https://github.com/ROCm/aiter/pull/6627) | [ASM] [HIP] [JIT] gfx1201: SageAttention H3 backend (BF16 Q,... | @kaijiliu | open | 2026-10-16 | 2026-11-20 |
| [#7564](https://github.com/ROCm/aiter/pull/7564) | [Triton/Gluon] gfx950: add opt-in ping-pong Gluon kernel for... | @nidal567 | open | 2026-11-06 | 2026-11-20 |
| [#5776](https://github.com/ROCm/aiter/pull/5776) | MLA v4 nm: faster cross-split merge for small decode grids | @AMD-yanfeiwang | open | 2026-09-23 | 2026-11-20 |
| [#8272](https://github.com/ROCm/aiter/pull/8272) | [FlyDSL] [gfx1250] Fuse a SwiGLU epilogue into the BF16/FP16... | @yichiche | open | 2026-11-19 | 2026-11-20 |
| [#7082](https://github.com/ROCm/aiter/pull/7082) | [HIP] Fuse gfx1250 LL all-reduce RMSNorm FP8 epilogue | @xytpai | open | 2026-10-28 | 2026-11-20 |
| [#8345](https://github.com/ROCm/aiter/pull/8345) | [Misc] tuned_gemm: log an untuned a16w16 shape once, not onc... | @ZhengGong-amd | draft | 2026-11-20 | 2026-11-20 |
| [#7480](https://github.com/ROCm/aiter/pull/7480) | [HIP] [CK] [Tuner] Sample package power by CUDA graph replay | @rpoornac | open | 2026-11-04 | 2026-11-20 |
| [#7629](https://github.com/ROCm/aiter/pull/7629) | [Triton/Gluon] fused_clamp_act_mul: Do not recompile per row... | @eppaneamd | open | 2026-11-08 | 2026-11-20 |
| [#5513](https://github.com/ROCm/aiter/pull/5513) | [CI] Add Some vLLM lm_eval Nightly Tests | @micah-wil | open | 2026-09-14 | 2026-11-20 |
| [#5787](https://github.com/ROCm/aiter/pull/5787) | [HIP] Enable CK fmha LLC head grouping on RDNA (batch mode) | @qiangpan2 | open | 2026-09-23 | 2026-11-20 |
| [#7000](https://github.com/ROCm/aiter/pull/7000) | [HIP] [Perf] OPUS sparse MLA v4 prefill: warp-specialized fp... | @chushic | open | 2026-10-27 | 2026-11-20 |
| [#7281](https://github.com/ROCm/aiter/pull/7281) | [Triton/Gluon] Mask OOB e8m0 scales on the ragged-K path of ... | @Ragua1 | open | 2026-11-01 | 2026-11-20 |
| [#7295](https://github.com/ROCm/aiter/pull/7295) | [Config] Dev/qwen38 flash moe | @yadaish | open | 2026-11-02 | 2026-11-20 |
| [#6876](https://github.com/ROCm/aiter/pull/6876) | [Triton/Gluon] unified_attention: add a deterministic (batch... | @aarnetalman | open | 2026-10-23 | 2026-11-20 |
| [#8245](https://github.com/ROCm/aiter/pull/8245) | [Config] [Bugfix] Add Kimi-K3.1 gfx950 TP1 BF16 GEMM rows so... | @Jasen2201 | open | 2026-11-19 | 2026-11-20 |
| [#8252](https://github.com/ROCm/aiter/pull/8252) | [Config] [Perf] Add GLM-5.3 TP4 FP8 fused-MoE rows (shared e... | @Arist12 | open | 2026-11-19 | 2026-11-20 |
| [#8257](https://github.com/ROCm/aiter/pull/8257) | [Triton/Gluon] Add triton_rmsnorm: fused all-reduce + residu... | @amgddm | open | 2026-11-19 | 2026-11-20 |
| [#8271](https://github.com/ROCm/aiter/pull/8271) | [FlyDSL] [Perf] MI308X clamped A16W4 small-M decode | @LiuYinfeng01 | open | 2026-11-19 | 2026-11-20 |
| [#8323](https://github.com/ROCm/aiter/pull/8323) | [Triton/Gluon] [Config] [Perf] gfx950: tune gemm_afp4wfp4_pr... | @amd-jrosas | open | 2026-11-19 | 2026-11-20 |
| [#8329](https://github.com/ROCm/aiter/pull/8329) | [FlyDSL] [Perf] GDN fused prefill: parallel prep + serial st... | @eppaneamd | draft | 2026-11-20 | 2026-11-20 |
| [#8328](https://github.com/ROCm/aiter/pull/8328) | [FlyDSL] [gfx950] Add opt-in vectorized prefill causal conv1... | @eppaneamd | draft | 2026-11-19 | 2026-11-19 |
| [#8304](https://github.com/ROCm/aiter/pull/8304) | [Triton/Gluon] [Bugfix] [gfx950] Refill an LDS buffer after ... | @AMD-yanfeiwang | open | 2026-11-19 | 2026-11-19 |
| [#7909](https://github.com/ROCm/aiter/pull/7909) | [ASM] [HIP] fix(mla): use native MI350 Q32 kernel for BF16 Q... | @fangche123 | draft | 2026-11-13 | 2026-11-19 |
| [#7815](https://github.com/ROCm/aiter/pull/7815) | [Triton/Gluon] [QSA] Add qsa_select_paged_groups for row-sha... | @zovonoir | open | 2026-11-11 | 2026-11-19 |
| [#8320](https://github.com/ROCm/aiter/pull/8320) | [Triton/Gluon] [GFX12] UA3D Tunning for real number of CUs | @k50112113 | open | 2026-11-19 | 2026-11-19 |
| [#8322](https://github.com/ROCm/aiter/pull/8322) | [Tuning] Qwen3-VL MXFP4: scatter stage-2 at block_m 128 from... | @sahirema | draft | 2026-11-19 | 2026-11-19 |
| [#8217](https://github.com/ROCm/aiter/pull/8217) | [JIT] develop=True ops launch on their tensors' device strea... | @jcaraban | open | 2026-11-18 | 2026-11-19 |
| [#8127](https://github.com/ROCm/aiter/pull/8127) | [Triton/Gluon] [gfx1250] unified attention: A8K4V4PT | @k50112113 | open | 2026-11-17 | 2026-11-19 |
| [#8312](https://github.com/ROCm/aiter/pull/8312) | [Triton/Gluon] [GFX12] Add batched mxfp8 gfx1250 gluon | @eky-amd | draft | 2026-11-19 | 2026-11-19 |
| [#8315](https://github.com/ROCm/aiter/pull/8315) | [ASM] MXFP4 MoE stage-2 t1: parametric shape + hook the v2 s... | @sahirema | draft | 2026-11-19 | 2026-11-19 |
| [#7986](https://github.com/ROCm/aiter/pull/7986) | [Triton] [Config] Add gfx1150 grouped GEMM (gmm / ptgmm / np... | @klin2024 | draft | 2026-11-15 | 2026-11-19 |
| [#6218](https://github.com/ROCm/aiter/pull/6218) | [CK] [FlyDSL] FlyDSL A4W4 decode GEMM for M<=16 on gfx950 | @johannes-graner | open | 2026-10-07 | 2026-11-19 |
| [#7819](https://github.com/ROCm/aiter/pull/7819) | [FlyDSL] route sequence-parallel reduce-scatter / all-gather... | @eppaneamd | open | 2026-11-11 | 2026-11-19 |
| [#7994](https://github.com/ROCm/aiter/pull/7994) | [Triton] [Config] Tune gfx1150 MHA forward configs | @klin2024 | draft | 2026-11-15 | 2026-11-19 |
| [#6920](https://github.com/ROCm/aiter/pull/6920) | [HIP] [Bugfix] Fix LDS races in HIP chunk_gated_delta_rule_f... | @eppaneamd | open | 2026-10-25 | 2026-11-19 |
| [#8292](https://github.com/ROCm/aiter/pull/8292) | [CI] [DO NOT MERGE] ci: run Triton tests on DPX 1-GPU runner | @gyohuangxin | open | 2026-11-19 | 2026-11-19 |
| [#8190](https://github.com/ROCm/aiter/pull/8190) | [Triton/Gluon] [Bugfix] [gfx950] Avoid a packed head-fold fo... | @AMD-yanfeiwang | open | 2026-11-18 | 2026-11-19 |
| [#5849](https://github.com/ROCm/aiter/pull/5849) | [Tuning] A family-agnostic race for large candidate fields (... | @amd-bartgips | draft | 2026-09-25 | 2026-11-19 |
| [#6580](https://github.com/ROCm/aiter/pull/6580) | [MHA] Tune MHA forward across every backend on the shared tu... | @amd-bartgips | draft | 2026-10-15 | 2026-11-19 |
| [#8221](https://github.com/ROCm/aiter/pull/8221) | [Triton/Gluon] [Bugfix] unified_attention: Round P to neares... | @eppaneamd | draft | 2026-11-18 | 2026-11-19 |
| [#8280](https://github.com/ROCm/aiter/pull/8280) | [Triton] [Config] Tune gfx1150 pa_decode launch and dispatch | @klin2024 | draft | 2026-11-19 | 2026-11-19 |
| [#7179](https://github.com/ROCm/aiter/pull/7179) | [HIP] [Bugfix] Raise a clear error when hipconfig is missing... | @zoroyihan7 | open | 2026-10-29 | 2026-11-19 |
| [#8275](https://github.com/ROCm/aiter/pull/8275) | [Triton] [Config] Tune the gfx1150 gemm_a8w8_blockscale conf... | @klin2024 | draft | 2026-11-19 | 2026-11-19 |
| [#8269](https://github.com/ROCm/aiter/pull/8269) | [Triton/Gluon] PA decode: start PS splits on 256-token parti... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-19 |
| [#6891](https://github.com/ROCm/aiter/pull/6891) | [HIP] [MLA] Fix dropped and misplaced KV ranges in v1_0 and ... | @m8than | open | 2026-10-23 | 2026-11-19 |
| [#6743](https://github.com/ROCm/aiter/pull/6743) | [HIP] [JIT] [Kernel] Add HipKittens H32 sparse MLA for gfx95... | @willhu-jpg | open | 2026-10-20 | 2026-11-19 |
| [#8268](https://github.com/ROCm/aiter/pull/8268) | [Bugfix] top-k-first sampling: pass deterministic to the top... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-19 |
| [#8239](https://github.com/ROCm/aiter/pull/8239) | [Triton] [Config] Tune gfx1151 MHA forward configs, with a l... | @klin2024 | draft | 2026-11-18 | 2026-11-19 |
| [#8256](https://github.com/ROCm/aiter/pull/8256) | Dev/dsv41 flash ep8 ep16 | @yadaish | draft | 2026-11-19 | 2026-11-19 |
| [#7911](https://github.com/ROCm/aiter/pull/7911) | [CI] [Build] [DO NOT MERGE] Use amd-triton/amd-triton-kernel... | @mengfei-jiang | open | 2026-11-13 | 2026-11-19 |
| [#7783](https://github.com/ROCm/aiter/pull/7783) | [MLA] [RFC #7240] Route mla_sparse_prefill_v41 through the k... | @zhiding512 | open | 2026-11-11 | 2026-11-19 |
| [#8222](https://github.com/ROCm/aiter/pull/8222) | [Triton/Gluon] [Feature] Fused DSA indexer prepare for block... | @rbrugaro-amd | open | 2026-11-18 | 2026-11-19 |
| [#7876](https://github.com/ROCm/aiter/pull/7876) | [HIP] [Perf] Wave-per-head MLA reduce for wave32 (gfx1250) d... | @gbyu-amd | open | 2026-11-12 | 2026-11-19 |
| [#8079](https://github.com/ROCm/aiter/pull/8079) | [FlyDSL] [gfx1250] mxfp8_128 bpreshuffle GEMM: read a row-ma... | @ZLkanyo009 | open | 2026-11-17 | 2026-11-19 |
| [#4566](https://github.com/ROCm/aiter/pull/4566) | fix(jit): isolate AITER extensions from HIP interposers | @JohnQin-llm | open | 2026-08-05 | 2026-11-19 |
| [#5788](https://github.com/ROCm/aiter/pull/5788) | [HIP] [JIT] Topk index score minimax m3 | @demonsan | open | 2026-09-23 | 2026-11-19 |
| [#8047](https://github.com/ROCm/aiter/pull/8047) | [Config] [gfx1250] DSv4.1 indexer wq_b MXFP8 rows at decode ... | @yhl-amd | open | 2026-11-16 | 2026-11-19 |
| [#6295](https://github.com/ROCm/aiter/pull/6295) | fix(fused_moe): rank get_block_size_M candidates by useful w... | @jiaweche | open | 2026-10-09 | 2026-11-19 |
| [#5524](https://github.com/ROCm/aiter/pull/5524) | Test ci:extended-test dispatch | @gyohuangxin | open | 2026-09-15 | 2026-11-19 |
| [#4616](https://github.com/ROCm/aiter/pull/4616) | [FlyDSL] MLA kernel flydsl bf16 | @ahmed-bsod | open | 2026-08-06 | 2026-11-19 |
| [#4998](https://github.com/ROCm/aiter/pull/4998) | [bugfix] Fix caching of dynamic FlyDSL stage2 tensors | @RolaoDenthu | open | 2026-08-25 | 2026-11-19 |
| [#5460](https://github.com/ROCm/aiter/pull/5460) | [FlyDSL] Store fp8 MoE stage2 output through 64-bit pointers | @jamesbowley | open | 2026-09-11 | 2026-11-19 |
| [#7035](https://github.com/ROCm/aiter/pull/7035) | [OPUS] [CI] [GEMM] Keep GLM-5.3 indexer prefills consistent ... | @Qubitium | open | 2026-10-27 | 2026-11-19 |
| [#8145](https://github.com/ROCm/aiter/pull/8145) | [Triton/Gluon] [gfx1250] Add tuned TP4 FP4 all-gather | @vgokhale | open | 2026-11-18 | 2026-11-19 |
| [#8147](https://github.com/ROCm/aiter/pull/8147) | [Triton/Gluon] [gfx1250] Optimize TP4 BF16 all-reduce for la... | @vgokhale | open | 2026-11-18 | 2026-11-19 |
| [#8153](https://github.com/ROCm/aiter/pull/8153) | Include zero-tag rows in fused-MoE CSV tests | @yifehuan | open | 2026-11-18 | 2026-11-19 |
| [#8156](https://github.com/ROCm/aiter/pull/8156) | [FlyDSL] [MoE] Define W4A4 scratch on every HIP graph replay | @zjin-lcf | open | 2026-11-18 | 2026-11-19 |
| [#8216](https://github.com/ROCm/aiter/pull/8216) | [Triton/Gluon] [Config] gemm_a8w8, gemm_a16w16: retune five ... | @Ragua1 | open | 2026-11-18 | 2026-11-19 |
| [#8218](https://github.com/ROCm/aiter/pull/8218) | [Triton/Gluon] Add fused MLA qkv_a projection + q/kv RMSNorm... | @rbrugaro-amd | open | 2026-11-18 | 2026-11-19 |
| [#6912](https://github.com/ROCm/aiter/pull/6912) | [Triton/Gluon] KDA: accept cu_seqlens_cpu, upload varlen met... | @eppaneamd | open | 2026-10-25 | 2026-11-19 |
| [#6969](https://github.com/ROCm/aiter/pull/6969) | Feat/proxy model gfx1250 1023 | @kkHuang-amd | draft | 2026-10-26 | 2026-11-19 |
| [#8243](https://github.com/ROCm/aiter/pull/8243) | [Triton/Gluon] [GFX12] UA3D Tunning | @k50112113 | draft | 2026-11-18 | 2026-11-18 |
| [#8241](https://github.com/ROCm/aiter/pull/8241) | [Triton] [Config] Tune gfx1151 pa_decode launch and dispatch | @klin2024 | draft | 2026-11-18 | 2026-11-18 |
| [#7587](https://github.com/ROCm/aiter/pull/7587) | [Triton/Gluon] [GFX12] Optimize mxfp8 gfx1250 gluon | @k50112113 | draft | 2026-11-06 | 2026-11-18 |
| [#7129](https://github.com/ROCm/aiter/pull/7129) | [CK] [MoE] Run FP8 MoE on any multiple-of-8 intermediate siz... | @rasmith | open | 2026-10-29 | 2026-11-18 |
| [#7225](https://github.com/ROCm/aiter/pull/7225) | [Triton/Gluon] KDA packed decode: accept the fused conv1d we... | @eppaneamd | open | 2026-10-30 | 2026-11-18 |
| [#8132](https://github.com/ROCm/aiter/pull/8132) | [Triton/Gluon] unified_attention decode bf16 query over fp8 ... | @amd-mghanimi | draft | 2026-11-17 | 2026-11-18 |
| [#7444](https://github.com/ROCm/aiter/pull/7444) | [FlyDSL] FlyQuickAllReduce: reduce-scatter and all-gather mo... | @eppaneamd | open | 2026-11-04 | 2026-11-18 |
| [#7567](https://github.com/ROCm/aiter/pull/7567) | [FlyDSL] [Bugfix] Fix MoE XCD swizzle on grids not divisible... | @eppaneamd | open | 2026-11-06 | 2026-11-18 |
| [#7712](https://github.com/ROCm/aiter/pull/7712) | [Config] [Perf] gfx950: tune a8w8 bpreshuffle GEMM for Qwen3... | @zengleixin-amd | open | 2026-11-10 | 2026-11-18 |
| [#5525](https://github.com/ROCm/aiter/pull/5525) | [FlyDSL] gfx950 FP8 paged DSA indexer score-plus-local-TopK | @samremes | draft | 2026-09-15 | 2026-11-18 |
| [#7409](https://github.com/ROCm/aiter/pull/7409) | [FlyDSL] gfx942 a16wi4: faster int4 MoE dequant via v_perm_b... | @xaguilar-amd | open | 2026-11-03 | 2026-11-18 |
| [#6893](https://github.com/ROCm/aiter/pull/6893) | [MHA] Test that a varlen attention sink does not take the v3... | @jatseng-ai | open | 2026-10-23 | 2026-11-18 |
| [#8045](https://github.com/ROCm/aiter/pull/8045) | [Feature][MoE] fused_moe: Accept a caller's plain-layout MoE... | @EricKing626 | open | 2026-11-16 | 2026-11-18 |
| [#8212](https://github.com/ROCm/aiter/pull/8212) | [Test] Check fp8 GEMM against a derived per-element and aggr... | @KHassanQazi | draft | 2026-11-18 | 2026-11-18 |
| [#8209](https://github.com/ROCm/aiter/pull/8209) | [HIP] Reject the 2-way per-head fp8 quant off gfx942 | @KHassanQazi | draft | 2026-11-18 | 2026-11-18 |
| [#8210](https://github.com/ROCm/aiter/pull/8210) | [Test] Compute the qk_norm_rope e8m0 reference scale in the ... | @KHassanQazi | draft | 2026-11-18 | 2026-11-18 |
| [#8208](https://github.com/ROCm/aiter/pull/8208) | [Test] Accept equal-probability top-k ties in test_moeTopkSo... | @KHassanQazi | draft | 2026-11-18 | 2026-11-18 |
| [#8207](https://github.com/ROCm/aiter/pull/8207) | [Test] Quantize the compress-attn fp8 group reference in the... | @KHassanQazi | draft | 2026-11-18 | 2026-11-18 |
| [#8206](https://github.com/ROCm/aiter/pull/8206) | Add embedded sorting moe kernel for conc128 | @antsaukk | draft | 2026-11-18 | 2026-11-18 |
| [#8199](https://github.com/ROCm/aiter/pull/8199) | [Triton/Gluon] [Config] gfx1150 Conv3D: prepack and Winograd... | @klin2024 | draft | 2026-11-18 | 2026-11-18 |
| [#8198](https://github.com/ROCm/aiter/pull/8198) | [Triton/Gluon] [Config] gfx1150 SonicMoE: measured forward g... | @klin2024 | draft | 2026-11-18 | 2026-11-18 |
| [#8019](https://github.com/ROCm/aiter/pull/8019) | [Config] Qwen3.5-397B AttnFP8: tune the merged GDN in_proj a... | @ZhiweiYan-96 | open | 2026-11-16 | 2026-11-18 |
| [#7412](https://github.com/ROCm/aiter/pull/7412) | [FlyDSL] FP8 MQA logits improvements for gfx950 | @vpietila-amd | draft | 2026-11-03 | 2026-11-18 |
| [#7436](https://github.com/ROCm/aiter/pull/7436) | [HIP] [CK] [FlyDSL] SwiGLU-step activation and exact FP8 blo... | @akii96 | open | 2026-11-04 | 2026-11-18 |
| [#8183](https://github.com/ROCm/aiter/pull/8183) | [Triton] [Config] Tune the gfx1150 gemm_afp4wfp4 DEFAULT.jso... | @klin2024 | draft | 2026-11-18 | 2026-11-18 |
| [#8021](https://github.com/ROCm/aiter/pull/8021) | [Triton/Gluon] Capture MiniMax-M3 UTs and reproducible basel... | @Liang-jianhao97 | open | 2026-11-16 | 2026-11-18 |
| [#7353](https://github.com/ROCm/aiter/pull/7353) | [FlyDSL] [Bugfix] Synchronize MoE sorting before reusing cum... | @yelkhamra | open | 2026-11-02 | 2026-11-18 |
| [#7355](https://github.com/ROCm/aiter/pull/7355) | [FlyDSL] [Bugfix] MoE sorting: allocate the multiphase works... | @yelkhamra | open | 2026-11-02 | 2026-11-18 |
| [#5141](https://github.com/ROCm/aiter/pull/5141) | [CK] [FlyDSL] FP8 block-scale B-preshuffle GEMM and tuned Qw... | @RElbers | open | 2026-08-31 | 2026-11-18 |
| [#8174](https://github.com/ROCm/aiter/pull/8174) | [MoE] Add fused_moe(stage2_fp8=True): per-call FP8 stage-2 r... | @eppaneamd | draft | 2026-11-18 | 2026-11-18 |
| [#7346](https://github.com/ROCm/aiter/pull/7346) | [FlyDSL] dist: public SP APIs: PCP graph_capture, head excha... | @whx-sjtu | open | 2026-11-02 | 2026-11-18 |
| [#7946](https://github.com/ROCm/aiter/pull/7946) | [gfx1250] [Perf] FP8 varlen ASM prefill: split the keys of a... | @gbyu-amd | draft | 2026-11-13 | 2026-11-18 |
| [#8124](https://github.com/ROCm/aiter/pull/8124) | [Triton/Gluon] [gfx1250] Gluon a8w4 MoE: warp layouts, TDM s... | @Boss2002n | draft | 2026-11-17 | 2026-11-18 |
| [#8111](https://github.com/ROCm/aiter/pull/8111) | [Triton/Gluon] [gfx1250] Gluon a4w4 DP MoE: fused EP sort, o... | @Boss2002n | draft | 2026-11-17 | 2026-11-18 |
| [#5549](https://github.com/ROCm/aiter/pull/5549) | [CK] [FlyDSL] [FMoE] Enable Silu A16W4 INTERLEAVE fused_moe ... | @SamiAario-AMD | open | 2026-09-15 | 2026-11-18 |
| [#6089](https://github.com/ROCm/aiter/pull/6089) | [Config] [Perf] [gfx950] Add Kimi-K3 BF16 decode GEMM config... | @xiaohuguo2023 | open | 2026-10-02 | 2026-11-18 |
| [#6754](https://github.com/ROCm/aiter/pull/6754) | [FlyDSL] [Muse Spark] Muse MoE GEMM and finalize on MXFP4 we... | @azaidy | open | 2026-10-21 | 2026-11-18 |
| [#7005](https://github.com/ROCm/aiter/pull/7005) | [DSV4.1Flash][MoE tuning] MoE tuner fixes for DEP | @heachary | open | 2026-10-27 | 2026-11-18 |
| [#7207](https://github.com/ROCm/aiter/pull/7207) | [Build] [Misc] Add create-pr skill for review-ready aiter PR... | @fsx950223 | open | 2026-10-30 | 2026-11-18 |
| [#7300](https://github.com/ROCm/aiter/pull/7300) | [Config] feat(minimax-m3.1): add TP4 tuned gfx950 GEMM confi... | @kevin-mii | open | 2026-11-02 | 2026-11-18 |
| [#8058](https://github.com/ROCm/aiter/pull/8058) | [FlyDSL] [gfx1250] mx32 GEMM: the _pl K loop also runs at ti... | @yhl-amd | open | 2026-11-16 | 2026-11-18 |
| [#8110](https://github.com/ROCm/aiter/pull/8110) | [Triton/Gluon] Add scale-only MXFP4 benchmarks and tune gfx9... | @leonling-ll | open | 2026-11-17 | 2026-11-18 |
| [#8122](https://github.com/ROCm/aiter/pull/8122) | [Triton/Gluon] Mask OOB e8m0 scales on the ragged-K path of ... | @Ragua1 | open | 2026-11-17 | 2026-11-18 |
| [#7277](https://github.com/ROCm/aiter/pull/7277) | [Triton/Gluon] MHA fp8 prefill: run the fp16 kernel on archs... | @Ragua1 | open | 2026-11-01 | 2026-11-17 |
| [#8130](https://github.com/ROCm/aiter/pull/8130) | [Triton/Gluon] [gfx1250] Unified attention 2D prefill: fixed... | @michael604work | draft | 2026-11-17 | 2026-11-17 |
| [#8129](https://github.com/ROCm/aiter/pull/8129) | [Triton/Gluon] [gfx1250] Unified attention 2D: K/V TDM ring ... | @michael604work | draft | 2026-11-17 | 2026-11-17 |
| [#8128](https://github.com/ROCm/aiter/pull/8128) | [Triton/Gluon] Migrate Conv2D/Conv3D benchmarks to rotating ... | @saeid-rostami | open | 2026-11-17 | 2026-11-17 |
| [#8125](https://github.com/ROCm/aiter/pull/8125) | [Triton/Gluon] [gfx1250] fused_qk_norm_mrope_cache: A8K4V4PT... | @k50112113 | open | 2026-11-17 | 2026-11-17 |
| [#6372](https://github.com/ROCm/aiter/pull/6372) | [Triton/Gluon] Add gfx1201 Triton support for per-channel FP... | @jyohukuchan | open | 2026-10-10 | 2026-11-17 |
| [#8120](https://github.com/ROCm/aiter/pull/8120) | [Triton/Gluon] [Perf] GDN prefill: Do not specialize kernels... | @eppaneamd | draft | 2026-11-17 | 2026-11-17 |
| [#7906](https://github.com/ROCm/aiter/pull/7906) | [Triton/Gluon] Flashkda k2 pipelined pass a doc | @Liang-jianhao97 | open | 2026-11-13 | 2026-11-17 |
| [#6550](https://github.com/ROCm/aiter/pull/6550) | [Triton/Gluon] Add fused Kimi-K3 KDA whole-layer ops (gfx950... | @karverma-amd | open | 2026-10-14 | 2026-11-17 |
| [#6498](https://github.com/ROCm/aiter/pull/6498) | [Triton/Gluon] KDA: add the chunk_delta_attn backward pass | @Micky774 | open | 2026-10-13 | 2026-11-17 |
| [#6868](https://github.com/ROCm/aiter/pull/6868) | [Triton/Gluon] Support non-causal right sliding window in Tr... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-11-17 |
| [#6867](https://github.com/ROCm/aiter/pull/6867) | [Triton/Gluon] Allow a right window with causal sliding-wind... | @Abdennacer-Badaoui | open | 2026-10-23 | 2026-11-17 |
| [#8065](https://github.com/ROCm/aiter/pull/8065) | [Gluon] KDA: batch-invariant decode (kda_bi_decode) | @indianspeedster | draft | 2026-11-16 | 2026-11-17 |
| [#8113](https://github.com/ROCm/aiter/pull/8113) | [Gluon] Attention: batch-invariant sparse MLA forward (spars... | @indianspeedster | draft | 2026-11-17 | 2026-11-17 |
| [#8112](https://github.com/ROCm/aiter/pull/8112) | [Triton/Gluon] Attention: batch-invariant DSA indexer (dsa_i... | @indianspeedster | draft | 2026-11-17 | 2026-11-17 |
| [#7680](https://github.com/ROCm/aiter/pull/7680) | [Triton/Gluon] pa_prefill_sparse: single-pass gluon kernel f... | @eppaneamd | open | 2026-11-09 | 2026-11-17 |
| [#7720](https://github.com/ROCm/aiter/pull/7720) | [JIT] [Bugfix] Config merge: catch live duplicates that diff... | @eppaneamd | open | 2026-11-10 | 2026-11-17 |
| [#7721](https://github.com/ROCm/aiter/pull/7721) | [CK] [Bugfix] MoE tuner: skip v2 stage-1 k_wave splits that ... | @eppaneamd | open | 2026-11-10 | 2026-11-17 |
| [#7091](https://github.com/ROCm/aiter/pull/7091) | [CK] Check fmoe tuning candidates and run_config results aga... | @RElbers | open | 2026-10-28 | 2026-11-17 |
| [#6855](https://github.com/ROCm/aiter/pull/6855) | [HIP] fused_qk_norm_rope_group_quant: multi-row TDM kernel f... | @Boss2002n | open | 2026-10-23 | 2026-11-17 |
| [#4610](https://github.com/ROCm/aiter/pull/4610) | [FlyDSL] Add Kimi K3 Attention Residual kernel | @anhminhnguyenhoang | open | 2026-08-06 | 2026-11-17 |
| [#4884](https://github.com/ROCm/aiter/pull/4884) | [Triton/Gluon] [FlyDSL] Fused K5 + K6 gfx942 kernel for line... | @vpietila-amd | open | 2026-08-20 | 2026-11-17 |
| [#5379](https://github.com/ROCm/aiter/pull/5379) | [Config] [MoE] Add Qwen3.8 Flash Next FP8 tuned config for P... | @sammysun0711 | open | 2026-09-09 | 2026-11-17 |
| [#6335](https://github.com/ROCm/aiter/pull/6335) | [fused_moe] Raise when an active swiglu_limit would be silen... | @jatseng-ai | open | 2026-10-09 | 2026-11-17 |
| [#6714](https://github.com/ROCm/aiter/pull/6714) | [Triton/Gluon] Avoid attn_fwd recompiles for new varlen max ... | @umarkovi-amd | draft | 2026-10-20 | 2026-11-17 |
| [#8088](https://github.com/ROCm/aiter/pull/8088) | [FlyDSL] [gfx1250] mxfp8_128 bpreshuffle GEMM: read a row-ma... | @ZLkanyo009 | open | 2026-11-17 | 2026-11-17 |
| [#7106](https://github.com/ROCm/aiter/pull/7106) | [Tuning] Skip run_config tests that have no tuned rows for t... | @RElbers | open | 2026-10-28 | 2026-11-17 |
| [#7406](https://github.com/ROCm/aiter/pull/7406) | [Triton/Gluon] Add pa_mqa_logits_shared_pages as a paged_mqa... | @akii96 | open | 2026-11-03 | 2026-11-17 |
| [#8096](https://github.com/ROCm/aiter/pull/8096) | [HIP] [Fix] mla_decode_stage1_asm_fwd: reject KV views the g... | @xaguilar-amd | draft | 2026-11-17 | 2026-11-17 |
| [#7864](https://github.com/ROCm/aiter/pull/7864) | [FlyDSL] [Perf] pa_decode: K/V streaming, MTP query split an... | @fsx950223 | open | 2026-11-12 | 2026-11-17 |
| [#7888](https://github.com/ROCm/aiter/pull/7888) | fused_moe: make fused_moe_2stages respect metadata.run_1stag... | @sahirema | open | 2026-11-12 | 2026-11-17 |
| [#5563](https://github.com/ROCm/aiter/pull/5563) | [JIT] Undefine __HIP_NO_HALF_{OPERATORS,CONVERSIONS}__ in CO... | @MohitAMD | open | 2026-09-15 | 2026-11-17 |
| [#5747](https://github.com/ROCm/aiter/pull/5747) | [CK] Fix/moe ck2stages dim alignment | @yzhou103 | open | 2026-09-22 | 2026-11-17 |
| [#7744](https://github.com/ROCm/aiter/pull/7744) | [Config] [gfx1250] gpt-oss prefill a8w4: 128x256x256, no clu... | @akao-amd | open | 2026-11-10 | 2026-11-17 |
| [#7691](https://github.com/ROCm/aiter/pull/7691) | [Config] [MoE] [gfx950] MXFP4 TP1 rows for Qwen3.5-397B and ... | @ZhengGong-amd | open | 2026-11-10 | 2026-11-17 |
| [#6397](https://github.com/ROCm/aiter/pull/6397) | Use the FlyDSL BF16 GEMM by default for large untuned gfx125... | @jhinpan | open | 2026-10-11 | 2026-11-17 |
| [#5571](https://github.com/ROCm/aiter/pull/5571) | [CK] Yzhou/fmoe runcfg gatemode verify | @yzhou103 | open | 2026-09-16 | 2026-11-17 |
| [#8077](https://github.com/ROCm/aiter/pull/8077) | [Triton] [Config] Tune the gfx1150 conv2d configs | @klin2024 | draft | 2026-11-17 | 2026-11-17 |
| [#8000](https://github.com/ROCm/aiter/pull/8000) | [FlyDSL] [Perf] pa_decode: gfx950 MXFP4 KV — MTP, large grou... | @zhiding512 | open | 2026-11-16 | 2026-11-17 |
| [#6139](https://github.com/ROCm/aiter/pull/6139) | [ASM] [Bugfix] Scale gfx942 v3 FP8 FMHA probabilities before... | @akshatvishu | open | 2026-10-04 | 2026-11-17 |
| [#7216](https://github.com/ROCm/aiter/pull/7216) | [Docs] Persist FlyDSL kernel caches across containers | @xytpai | open | 2026-10-30 | 2026-11-17 |
| [#7251](https://github.com/ROCm/aiter/pull/7251) | [FlyDSL] [Fix] Honor omitted valid-route counts in EP routin... | @xytpai | open | 2026-10-31 | 2026-11-17 |
| [#7252](https://github.com/ROCm/aiter/pull/7252) | [FlyDSL] [Perf] Reduce scan barriers in gfx1250 fused TP rou... | @xytpai | open | 2026-10-31 | 2026-11-17 |
| [#8063](https://github.com/ROCm/aiter/pull/8063) | [Gluon] KDA: batch-invariant chunk forward (kda_bi) | @indianspeedster | draft | 2026-11-16 | 2026-11-17 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | [FlyDSL] Flydsl implementation of a8w8 blockscale for gfx125... | @omuhamma | open | 2026-04-20 | 2026-11-17 |
| [#5887](https://github.com/ROCm/aiter/pull/5887) | [FlyDSL] [PA] Extend pa decode tile to support Qlen8 and SWA... | @sammysun0711 | open | 2026-09-27 | 2026-11-17 |
| [#8024](https://github.com/ROCm/aiter/pull/8024) | [FlyDSL][gfx950] Tune DSV4.1 MXFP8 Q-a+KV prefill at four M ... | @xytpai | open | 2026-11-16 | 2026-11-17 |
| [#7743](https://github.com/ROCm/aiter/pull/7743) | [Triton/Gluon] [Perf] [gfx1250] unified attention 3D: tuned ... | @akao-amd | open | 2026-11-10 | 2026-11-16 |
| [#7746](https://github.com/ROCm/aiter/pull/7746) | [Triton/Gluon] [Perf] [gfx1250] RMSNorm forward: 4 programs ... | @akao-amd | open | 2026-11-10 | 2026-11-16 |
| [#6175](https://github.com/ROCm/aiter/pull/6175) | [FlyDSL] HSTU Backward performance improvement | @damien-lejeune | draft | 2026-10-06 | 2026-11-16 |
| [#8052](https://github.com/ROCm/aiter/pull/8052) | [Config] gfx950 DSv4.1-Flash MXFP8 GEMM rows for the rank-sh... | @fhuizing | draft | 2026-11-16 | 2026-11-16 |
| [#7823](https://github.com/ROCm/aiter/pull/7823) | [Triton/Gluon] [gfx950] Fix LDS WAR race in single-warp fp8_... | @akii96 | draft | 2026-11-11 | 2026-11-16 |
| [#7975](https://github.com/ROCm/aiter/pull/7975) | [Triton/Gluon] Feat/gfx1250 replayssm kda verify | @Liang-jianhao97 | open | 2026-11-15 | 2026-11-16 |
| [#7997](https://github.com/ROCm/aiter/pull/7997) | [Triton/Gluon] [Perf] sparse_mla_fwd: optional fused Q RoPE ... | @Fangzhou-Ai | open | 2026-11-15 | 2026-11-16 |
| [#7817](https://github.com/ROCm/aiter/pull/7817) | [Triton/Gluon] unified_attention: run causal=False on the gf... | @WhatGhost | open | 2026-11-11 | 2026-11-16 |
| [#7894](https://github.com/ROCm/aiter/pull/7894) | [OPUS] [Bugfix] Refuse A16W16 operands of 4 GiB or more on k... | @amd-bartgips | draft | 2026-11-12 | 2026-11-16 |
| [#7884](https://github.com/ROCm/aiter/pull/7884) | [Bugfix] Apply scale_a and scale_b in BF16 tgemm.mm instead ... | @amd-bartgips | draft | 2026-11-12 | 2026-11-16 |
| [#8025](https://github.com/ROCm/aiter/pull/8025) | [Config] Add gfx950 MXFP4 GEMM tuning candidates for FLUX.3 ... | @jackyhkust | draft | 2026-11-16 | 2026-11-16 |
| [#7882](https://github.com/ROCm/aiter/pull/7882) | [CK] [Bugfix] Reject K that is not a multiple of the CKTile ... | @amd-bartgips | draft | 2026-11-12 | 2026-11-16 |
| [#8004](https://github.com/ROCm/aiter/pull/8004) | Give an empty MLA decode work item no weight in mla_reduce_v... | @whx-sjtu | draft | 2026-11-16 | 2026-11-16 |
| [#8005](https://github.com/ROCm/aiter/pull/8005) | Measure a strided tensor's span in the MoE output overlap ch... | @whx-sjtu | draft | 2026-11-16 | 2026-11-16 |
| [#5706](https://github.com/ROCm/aiter/pull/5706) | [tuning] Add DSv4 EP16 a4w4 fused-MoE tables and MXFP4 auxil... | @JiaoliangYu | draft | 2026-09-20 | 2026-11-16 |
| [#7808](https://github.com/ROCm/aiter/pull/7808) | custom all-reduce: MXFP8 mode for fused AR + RMSNorm + per-g... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-16 |
| [#6119](https://github.com/ROCm/aiter/pull/6119) | [HIP] [Bugfix] mxfp4 moe sort skip invalid ids (-1s) | @cagrikymk | open | 2026-10-03 | 2026-11-16 |
| [#6766](https://github.com/ROCm/aiter/pull/6766) | Add a routing-independence test for persistent fused_moe | @siliangchen-amd | open | 2026-10-21 | 2026-11-16 |
| [#4581](https://github.com/ROCm/aiter/pull/4581) | [Bug] Make blockscale split-K deterministic | @maeehart | open | 2026-08-05 | 2026-11-16 |
| [#7210](https://github.com/ROCm/aiter/pull/7210) | [Perf] Reduce fused MoE dispatcher keyword matching overhead | @xytpai | open | 2026-10-30 | 2026-11-16 |
| [#8012](https://github.com/ROCm/aiter/pull/8012) | [HIP] gfx1250: INT4 / INT8-coded Lamport two-shot all-reduce... | @gbyu-amd | draft | 2026-11-16 | 2026-11-16 |
| [#8015](https://github.com/ROCm/aiter/pull/8015) | [HIP] gfx1250: Lamport inbox on the torch.symm_mem transport... | @gbyu-amd | draft | 2026-11-16 | 2026-11-16 |
| [#7916](https://github.com/ROCm/aiter/pull/7916) | [Triton/Gluon] Optimize gfx1250 KDA decode with cached launc... | @Liang-jianhao97 | open | 2026-11-13 | 2026-11-16 |
| [#7188](https://github.com/ROCm/aiter/pull/7188) | Tune gfx1250 A4W4 MoE prefill TDM GEMM, retune E96 and add E... | @yanguahe | open | 2026-10-30 | 2026-11-16 |
| [#5454](https://github.com/ROCm/aiter/pull/5454) | [Perf][gfx1250] Add combined benchmark driver | @JiaoliangYu | draft | 2026-09-11 | 2026-11-16 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | [FlyDSL] Implement FlyDSL version of fused_qk_norm_mrope_3d_... | @amd-meskelin | open | 2026-07-24 | 2026-11-16 |
| [#7090](https://github.com/ROCm/aiter/pull/7090) | [Triton/Gluon] Cache gfx1250 GEMM layout metadata on the hos... | @xytpai | open | 2026-10-28 | 2026-11-16 |
| [#7998](https://github.com/ROCm/aiter/pull/7998) | [Triton] [Config] Tune gfx1150 unified_attention configs | @klin2024 | draft | 2026-11-15 | 2026-11-15 |
| [#7996](https://github.com/ROCm/aiter/pull/7996) | [FlyDSL] Causal conv1d prefill: accept strided one-element i... | @eppaneamd | draft | 2026-11-15 | 2026-11-15 |
| [#7614](https://github.com/ROCm/aiter/pull/7614) | [Triton/Gluon] [Config] [Perf] Tune gfx950 FP8 blockscale se... | @XinyuJiangCMU | open | 2026-11-07 | 2026-11-15 |
| [#7992](https://github.com/ROCm/aiter/pull/7992) | [gfx1250] Add gfx1250 ReplaySSM KDA verification | @Liang-jianhao97 | open | 2026-11-15 | 2026-11-15 |
| [#7108](https://github.com/ROCm/aiter/pull/7108) | [HIP] [Feature] Allow explicit Even activation-scale selecti... | @XinyuJiangCMU | open | 2026-10-28 | 2026-11-15 |
| [#7956](https://github.com/ROCm/aiter/pull/7956) | [FlyDSL] [gfx1250] Close MXFP8 bpreshuffle GEMM vs ASM on ge... | @jli-melchior | open | 2026-11-14 | 2026-11-15 |
| [#7978](https://github.com/ROCm/aiter/pull/7978) | [Triton] [Config] Add gfx1150 gemm_a16w16_persistent configs | @klin2024 | draft | 2026-11-15 | 2026-11-15 |
| [#7976](https://github.com/ROCm/aiter/pull/7976) | [Triton] [Config] Add gfx1150 extend_attention config | @klin2024 | draft | 2026-11-15 | 2026-11-15 |
| [#7422](https://github.com/ROCm/aiter/pull/7422) | [FlyDSL] Add opt-in geometry-only PA decode partition prepar... | @zhiding512 | open | 2026-11-04 | 2026-11-15 |
| [#6932](https://github.com/ROCm/aiter/pull/6932) | [Config] [Perf] Add DSV4 EP8 MXFP4 (a4w4) fused-MoE rows for... | @jbelofamd | open | 2026-10-26 | 2026-11-14 |
| [#7961](https://github.com/ROCm/aiter/pull/7961) | [FlyDSL] [Config] [gfx1250] Kimi-K2 a4w4 MoE rows, and the p... | @xiaohuguo2023 | draft | 2026-11-14 | 2026-11-14 |
| [#4810](https://github.com/ROCm/aiter/pull/4810) | [FlyDSL] registering ops in pytorch | @mohbasit | open | 2026-08-17 | 2026-11-14 |
| [#4905](https://github.com/ROCm/aiter/pull/4905) | [FlyDSL] [Build] Use upstream parallel scheduler for AOT bui... | @zhiding512 | open | 2026-08-21 | 2026-11-14 |
| [#4999](https://github.com/ROCm/aiter/pull/4999) | [Triton/Gluon] Fix AMDGCN codegen abort in fp8_mqa_logits pa... | @kzjeef | open | 2026-08-25 | 2026-11-14 |
| [#6241](https://github.com/ROCm/aiter/pull/6241) | [Triton/Gluon] Add improved fused kv cache kernel for DSR1 | @azaidy | open | 2026-10-08 | 2026-11-14 |
| [#6851](https://github.com/ROCm/aiter/pull/6851) | [Triton/Gluon] perf(triton): tune gfx950 one-kernel MHA back... | @sunxxuns | open | 2026-10-22 | 2026-11-22 |
| [#7064](https://github.com/ROCm/aiter/pull/7064) | [HIP] Optimize gfx1250 no-quant RMSNorm dispatch for wave32 | @xytpai | open | 2026-10-28 | 2026-11-14 |
| [#7146](https://github.com/ROCm/aiter/pull/7146) | [FlyDSL] Dev/yadai prefill clean | @yadaish | open | 2026-10-29 | 2026-11-14 |
| [#7954](https://github.com/ROCm/aiter/pull/7954) | Route the a2a_gemm_fused v1 contract with a pure-torch SP4 r... | @demonsan | draft | 2026-11-14 | 2026-11-14 |
| [#7953](https://github.com/ROCm/aiter/pull/7953) | [Triton/Gluon] [gfx1250] IOD-local KV cache and LM head plac... | @vgokhale | draft | 2026-11-14 | 2026-11-14 |
| [#7902](https://github.com/ROCm/aiter/pull/7902) | [Triton/Gluon] Tune gfx1250 Gluon A4W4 MoE prefill GEMM1 BLO... | @Liang-jianhao97 | open | 2026-11-13 | 2026-11-14 |
| [#7904](https://github.com/ROCm/aiter/pull/7904) | [FlyDSL] Prune gfx1250 TDM GEMM tuning search space | @xytpai | open | 2026-11-13 | 2026-11-14 |
| [#7905](https://github.com/ROCm/aiter/pull/7905) | [Triton/Gluon] gfx950: recover three regressions from the LL... | @yanxuer-999 | open | 2026-11-13 | 2026-11-14 |
| [#7929](https://github.com/ROCm/aiter/pull/7929) | [FlyDSL] Reduce gfx1250 TDM split-K synchronization overhead... | @xytpai | open | 2026-11-13 | 2026-11-14 |
| [#7951](https://github.com/ROCm/aiter/pull/7951) | gfx1250: HIP kernel for the KDA ReplaySSM decode / verify st... | @gbyu-amd | draft | 2026-11-13 | 2026-11-13 |
| [#7950](https://github.com/ROCm/aiter/pull/7950) | [FlyDSL] MoE reduce: drop padded (negative topk id) slots | @cpersson-amd | draft | 2026-11-13 | 2026-11-13 |
| [#7681](https://github.com/ROCm/aiter/pull/7681) | [Triton/Gluon] mla_sparse_prefill: triton backend on gfx950,... | @eppaneamd | open | 2026-11-09 | 2026-11-13 |
| [#7768](https://github.com/ROCm/aiter/pull/7768) | [Triton/Gluon][gfx1250] gemm_a16w16: workgroup clusters on b... | @azaidy | draft | 2026-11-10 | 2026-11-13 |
| [#6877](https://github.com/ROCm/aiter/pull/6877) | [HIP] Fix the hardcoded die count in the HIP kernels | @RElbers | open | 2026-10-23 | 2026-11-13 |
| [#7223](https://github.com/ROCm/aiter/pull/7223) | [FlyDSL] [Perf] Keep FP4 quantization K-splits before select... | @xytpai | open | 2026-10-30 | 2026-11-13 |
| [#7932](https://github.com/ROCm/aiter/pull/7932) | [Tuning] Add MiMo V2.6 A8W8 prefill configs for gfx950 | @pbkowalski | draft | 2026-11-13 | 2026-11-13 |
| [#7430](https://github.com/ROCm/aiter/pull/7430) | [HIP] [FlyDSL] [Feature] [Perf] DeepSeek V4.1: MXFP8 dual RM... | @yzhou103 | open | 2026-11-04 | 2026-11-13 |
| [#7931](https://github.com/ROCm/aiter/pull/7931) | [FlyDSL] gfx950 ring GEMM for the DSv4.1 router (16384x384x5... | @fhuizing | draft | 2026-11-13 | 2026-11-13 |
| [#5211](https://github.com/ROCm/aiter/pull/5211) | [ASM] [HIP] fix(mla): mark bf16 mla_pfl prefill CSV/lookup a... | @amd-yashagar | open | 2026-09-02 | 2026-11-13 |
| [#7870](https://github.com/ROCm/aiter/pull/7870) | [HIP] Add Muse Spark one-launch mega attention kernel (TP4, ... | @IzacharyI | open | 2026-11-12 | 2026-11-13 |
| [#7785](https://github.com/ROCm/aiter/pull/7785) | [Config] Add gfx950 BF16 GEMM tunings for Muse Spark | @zijiecode | open | 2026-11-11 | 2026-11-13 |
| [#7914](https://github.com/ROCm/aiter/pull/7914) | [HIP] [gfx1250] MLA reduce: run kn_mla_reduce_v1_wide on wav... | @gbyu-amd | draft | 2026-11-13 | 2026-11-13 |
| [#5778](https://github.com/ROCm/aiter/pull/5778) | [OPUS] [JIT] Exp/mx32 plain | @yzhou103 | open | 2026-09-23 | 2026-11-24 |
| [#6824](https://github.com/ROCm/aiter/pull/6824) | [OPUS] support 1x32 bmm bpreshuffle | @yzhou103 | open | 2026-10-22 | 2026-11-13 |
| [#7530](https://github.com/ROCm/aiter/pull/7530) | [Triton/Gluon] [Kernel] Add a Triton fallback for paged_mxfp... | @Ragua1 | open | 2026-11-05 | 2026-11-13 |
| [#7069](https://github.com/ROCm/aiter/pull/7069) | [Triton/Gluon] GDR decode: optional deferred spec-decode sta... | @zhentaocc | open | 2026-10-28 | 2026-11-13 |
| [#6124](https://github.com/ROCm/aiter/pull/6124) | [Triton/Gluon] [Bugfix] Guard SiLU backward on unsupported a... | @DaiXindi-AMD | open | 2026-10-03 | 2026-11-13 |
| [#6081](https://github.com/ROCm/aiter/pull/6081) | [Triton/Gluon] Fix: gfx1250 unified attention faults and NaN... | @mqhc2020 | open | 2026-10-02 | 2026-11-13 |
| [#5868](https://github.com/ROCm/aiter/pull/5868) | [Triton/Gluon] unified_attention 2D: optional block skipping... | @amd-sonsingh | open | 2026-09-26 | 2026-11-13 |
| [#7118](https://github.com/ROCm/aiter/pull/7118) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE for Q... | @Boss2002n | open | 2026-10-28 | 2026-11-13 |
| [#7122](https://github.com/ROCm/aiter/pull/7122) | [Triton/Gluon] Add a gfx1250 Gluon gemm_a16w16 + all-reduce ... | @Boss2002n | open | 2026-10-29 | 2026-11-13 |
| [#7154](https://github.com/ROCm/aiter/pull/7154) | [Triton/Gluon] [Config] Add gfx1150 Conv3D configs | @klin2024 | open | 2026-10-29 | 2026-11-13 |
| [#7256](https://github.com/ROCm/aiter/pull/7256) | [Triton/Gluon] [CI] [gfx1250] fused_rmsnorm_add: row kernel,... | @Boss2002n | open | 2026-10-31 | 2026-11-13 |
| [#6340](https://github.com/ROCm/aiter/pull/6340) | [HIP] Avoid duplicate binary-op instantiation in the dispatc... | @kainanpeace666 | open | 2026-10-09 | 2026-11-13 |
| [#6475](https://github.com/ROCm/aiter/pull/6475) | [Triton/Gluon] [Bugfix] unified_attention: mask the V page t... | @aaab8b | open | 2026-10-13 | 2026-11-13 |
| [#6486](https://github.com/ROCm/aiter/pull/6486) | [HIP] [Bugfix] Fix Gluon PA AOT padding specialization and c... | @sammysun0711 | open | 2026-10-13 | 2026-11-13 |
| [#6894](https://github.com/ROCm/aiter/pull/6894) | [FlyDSL] [Perf] gfx1250 grouped MoE: route small TP batches ... | @ahmed-bsod | open | 2026-10-23 | 2026-11-13 |
| [#7031](https://github.com/ROCm/aiter/pull/7031) | [Triton/Gluon] [HIP] [OPUS] [GEMM] Keep GLM-5.3 BF16 project... | @Qubitium | open | 2026-10-27 | 2026-11-13 |
| [#7033](https://github.com/ROCm/aiter/pull/7033) | [Triton/Gluon] Fix GLM-5.3 FP8 GEMM batch consistency | @Qubitium | open | 2026-10-27 | 2026-11-13 |
| [#7895](https://github.com/ROCm/aiter/pull/7895) | [FlyDSL] [Perf] Use transposed V loads in gfx1201 Flash Atte... | @zlf111 | open | 2026-11-12 | 2026-11-13 |
| [#6853](https://github.com/ROCm/aiter/pull/6853) | [FlyDSL] [Bugfix] gfx950 A16W16: fix int32 C-offset overflow | @josh-schell-amd | open | 2026-10-23 | 2026-11-12 |
| [#7899](https://github.com/ROCm/aiter/pull/7899) | [Triton/Gluon] sparse_mla_dsv4_train: chunked backward with ... | @wangye805 | draft | 2026-11-12 | 2026-11-12 |
| [#7898](https://github.com/ROCm/aiter/pull/7898) | [Triton/Gluon] [gfx942] sparse_mla_dsv4_train: retune the fo... | @wangye805 | draft | 2026-11-12 | 2026-11-12 |
| [#7635](https://github.com/ROCm/aiter/pull/7635) | [Triton] [Config] Add gfx1151 gemm_a16w16_atomic configs | @klin2024 | draft | 2026-11-09 | 2026-11-12 |
| [#7840](https://github.com/ROCm/aiter/pull/7840) | fix: set _layout_ = "ms" on packed ctypes structs in mla_dec... | @anish-01 | open | 2026-11-11 | 2026-11-12 |
| [#7887](https://github.com/ROCm/aiter/pull/7887) | [Triton/Gluon] [Config] [Perf] Retune gfx1250 96-CU Gluon bf... | @mqhc2020 | draft | 2026-11-12 | 2026-11-12 |
| [#6810](https://github.com/ROCm/aiter/pull/6810) | [FlyDSL] FlyDSL FCA | @Boss2002n | open | 2026-10-21 | 2026-11-12 |
| [#6914](https://github.com/ROCm/aiter/pull/6914) | [FlyDSL] Match ep_fused=1 grouped MoE config rows after the ... | @Boss2002n | open | 2026-10-25 | 2026-11-12 |
| [#7120](https://github.com/ROCm/aiter/pull/7120) | [Triton/Gluon] gfx1250 fused Q/K Gemma RMSNorm + MRoPE + KV ... | @Boss2002n | open | 2026-10-29 | 2026-11-12 |
| [#7873](https://github.com/ROCm/aiter/pull/7873) | [Triton] [Config] Add gfx1201 extend_attention config | @klin2024 | draft | 2026-11-12 | 2026-11-12 |
| [#6164](https://github.com/ROCm/aiter/pull/6164) | [FlyDSL] fp8_mqa_logits gfx942: add LDS-staged variant, use ... | @akii96 | open | 2026-10-06 | 2026-11-12 |
| [#7816](https://github.com/ROCm/aiter/pull/7816) | [Recipe] Guarded M3 TP4 M16/M32 MoE decode overlays with ser... | @xytpai | open | 2026-11-11 | 2026-11-12 |
| [#7698](https://github.com/ROCm/aiter/pull/7698) | [HIP] [FlyDSL] conv3d gfx1250: fold small-C convs, FlyDSL pr... | @huizzhan | open | 2026-11-10 | 2026-11-12 |
| [#7377](https://github.com/ROCm/aiter/pull/7377) | Qsa index scorer/stage2 | @demonsan | draft | 2026-11-03 | 2026-11-12 |
| [#7852](https://github.com/ROCm/aiter/pull/7852) | [Triton] [Config] Add gfx1201 mla_decode_rope config | @klin2024 | draft | 2026-11-12 | 2026-11-12 |
| [#7076](https://github.com/ROCm/aiter/pull/7076) | [HIP] [FlyDSL] [JIT] GDN K5 opt: fix tuner BV override; add ... | @yicyang | open | 2026-10-28 | 2026-11-12 |
| [#7845](https://github.com/ROCm/aiter/pull/7845) | [Triton] [Config] Add gfx1201 grouped GEMM (gmm / ptgmm / np... | @klin2024 | draft | 2026-11-12 | 2026-11-12 |
| [#5301](https://github.com/ROCm/aiter/pull/5301) | [FlyDSL] [Kernel] gfx950 FP8 sparse MLA prefill and decode (... | @JohnQin-llm | open | 2026-09-07 | 2026-11-12 |
| [#5855](https://github.com/ROCm/aiter/pull/5855) | [MORI] Multi-node + MORI_V2 | @k50112113 | open | 2026-09-25 | 2026-11-12 |
| [#6111](https://github.com/ROCm/aiter/pull/6111) | [op_tests] test_gemm_a8w8_blockscale: --graph/--graph-replay... | @arakowsk-amd | open | 2026-10-02 | 2026-11-12 |
| [#6785](https://github.com/ROCm/aiter/pull/6785) | [HIP] [Perf] paged_attention_ll4mi: read V transposed with d... | @Arist12 | open | 2026-10-21 | 2026-11-12 |
| [#6967](https://github.com/ROCm/aiter/pull/6967) | [Triton/Gluon] Add fused MoE routing kernel | @azaidy | open | 2026-10-26 | 2026-11-12 |
| [#7843](https://github.com/ROCm/aiter/pull/7843) | [Triton] [Config] Add gfx1201 ff_a16w16_fused configs | @klin2024 | draft | 2026-11-12 | 2026-11-12 |
| [#5025](https://github.com/ROCm/aiter/pull/5025) | [FlyDSL] jdbmm backward pass | @SamiAario-AMD | draft | 2026-08-26 | 2026-11-11 |
| [#6955](https://github.com/ROCm/aiter/pull/6955) | [Triton/Gluon] Take sparse MLA's native fp8 dtype from get_f... | @jin-amd | draft | 2026-10-26 | 2026-11-11 |
| [#7838](https://github.com/ROCm/aiter/pull/7838) | [HIP] [Bugfix] topk_gating: distinct expert ids for rows wit... | @rjrock | draft | 2026-11-11 | 2026-11-11 |
| [#7835](https://github.com/ROCm/aiter/pull/7835) | [Feature] gfx1250 MLA: MXFP4 packed KV cache formats (writer... | @ppalanga | draft | 2026-11-11 | 2026-11-11 |
| [#7834](https://github.com/ROCm/aiter/pull/7834) | [Bugfix] gfx1250 MLA decode: fix the NVFP4 KV cache's PV tok... | @ppalanga | draft | 2026-11-11 | 2026-11-11 |
| [#7831](https://github.com/ROCm/aiter/pull/7831) | [Triton] [Config] Add gfx1201 fused_reduce_add_rmsnorm confi... | @klin2024 | draft | 2026-11-11 | 2026-11-11 |
| [#7830](https://github.com/ROCm/aiter/pull/7830) | [Triton] gemm_afp4wfp4: enable the software-emulated FP4 pat... | @klin2024 | draft | 2026-11-11 | 2026-11-11 |
| [#6843](https://github.com/ROCm/aiter/pull/6843) | [Triton/Gluon] : (GATED DELTA) Add RotatingBufferBench suppo... | @rahulbatra85 | draft | 2026-10-22 | 2026-11-11 |
| [#7795](https://github.com/ROCm/aiter/pull/7795) | [FlyDSL] Cache gfx1250 decode MoE gather routes within each ... | @xytpai | draft | 2026-11-11 | 2026-11-11 |
| [#7810](https://github.com/ROCm/aiter/pull/7810) | [Comm] Prefetch gfx1250 TP4 PullQ4 peer loads; M3 prefill-se... | @xytpai | draft | 2026-11-11 | 2026-11-11 |
| [#5244](https://github.com/ROCm/aiter/pull/5244) | [FlyDSL] Dev/ubench gemm | @yadaish | open | 2026-09-03 | 2026-11-11 |
| [#5260](https://github.com/ROCm/aiter/pull/5260) | [FlyDSL] Add tuned BF16 GEMM configs for GLM-5.2 decode shap... | @nehaprakriya | open | 2026-09-03 | 2026-11-11 |
| [#7806](https://github.com/ROCm/aiter/pull/7806) | fused_moe: take a caller presort on moe_sorting-layout pipel... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#4864](https://github.com/ROCm/aiter/pull/4864) | [ASM] [FlyDSL] perf(flydsl): tuned BF16 TN GEMM for Kimi-K3 ... | @nehaprakriya | open | 2026-08-19 | 2026-11-11 |
| [#6509](https://github.com/ROCm/aiter/pull/6509) | [Config] Add gfx950 bf16 GEMM tunings for Qwen3 480B shapes | @jbelloncastro | open | 2026-10-14 | 2026-11-11 |
| [#6812](https://github.com/ROCm/aiter/pull/6812) | [CI] Include tests/ directory in test sharding | @okakarpa | open | 2026-10-22 | 2026-11-11 |
| [#7782](https://github.com/ROCm/aiter/pull/7782) | [Triton] [Config] Add gfx1201 gemm_a16w16_persistent configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7766](https://github.com/ROCm/aiter/pull/7766) | [Triton/Gluon] [gfx1250] unified_attention 3D: causal-mask o... | @michael604work | draft | 2026-11-10 | 2026-11-10 |
| [#7763](https://github.com/ROCm/aiter/pull/7763) | [Triton] [Config] Add gfx1151 mla_decode_rope config | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7761](https://github.com/ROCm/aiter/pull/7761) | [FlyDSL] Fuse a two-norm residual boundary into INT4 QuickRe... | @amd-mghanimi | draft | 2026-11-10 | 2026-11-10 |
| [#7749](https://github.com/ROCm/aiter/pull/7749) | [Triton/Gluon] [Config] [gfx950] unified_attention: 128-CU s... | @mpashkovskii | draft | 2026-11-10 | 2026-11-10 |
| [#7740](https://github.com/ROCm/aiter/pull/7740) | [Triton] [Config] Add gfx1151 grouped GEMM (gmm / ptgmm / np... | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7738](https://github.com/ROCm/aiter/pull/7738) | [Triton] [Config] Add gfx1151 extend_attention config | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7734](https://github.com/ROCm/aiter/pull/7734) | [Triton] [Config] Add gfx1201 gemm_a16w16_atomic configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7732](https://github.com/ROCm/aiter/pull/7732) | [Triton][MoE] Add a16w16 Triton stages to the fused_moe 2-st... | @amd-mghanimi | draft | 2026-11-10 | 2026-11-10 |
| [#7722](https://github.com/ROCm/aiter/pull/7722) | [Triton/Gluon] [GFX12] MLA decode: partitioned-LDS kernel fo... | @Dewei-Wang-sh | draft | 2026-11-10 | 2026-11-10 |
| [#7707](https://github.com/ROCm/aiter/pull/7707) | [Triton] [Config] Add gfx1150 ff_a16w16_fused configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7703](https://github.com/ROCm/aiter/pull/7703) | [Triton] [Config] Add gfx1151 gemm_a16w16_persistent configs | @klin2024 | draft | 2026-11-10 | 2026-11-10 |
| [#7492](https://github.com/ROCm/aiter/pull/7492) | [Triton] [Config] gfx1201 gemm_a16w16: shape-specific config... | @klin2024 | draft | 2026-11-05 | 2026-11-10 |
| [#7378](https://github.com/ROCm/aiter/pull/7378) | [Triton] [Config] Add gfx1201 gemm_a16w16 config | @klin2024 | draft | 2026-11-03 | 2026-11-10 |
| [#7502](https://github.com/ROCm/aiter/pull/7502) | [Triton] [Config] Add gfx1201 batched_gemm_a16w16 configs | @klin2024 | draft | 2026-11-05 | 2026-11-10 |
| [#7577](https://github.com/ROCm/aiter/pull/7577) | [Triton] [Config] Add gfx1201 gemm_a16w4 configs | @klin2024 | draft | 2026-11-06 | 2026-11-10 |
| [#7693](https://github.com/ROCm/aiter/pull/7693) | [FlyDSL] Add static-ring BF16 projection GEMM for gfx950 | @xytpai | draft | 2026-11-10 | 2026-11-10 |
| [#6909](https://github.com/ROCm/aiter/pull/6909) | [ASM] [gfx942] Use AI-tuned FP8 blockscale GEMM code objects | @feifei14119 | open | 2026-10-25 | 2026-11-10 |
| [#7322](https://github.com/ROCm/aiter/pull/7322) | [Build] Ci/test marker classification | @gyohuangxin | draft | 2026-11-02 | 2026-11-10 |
| [#7689](https://github.com/ROCm/aiter/pull/7689) | [Triton] [Config] Add gfx1151 fused_reduce_add_rmsnorm confi... | @klin2024 | draft | 2026-11-09 | 2026-11-09 |
| [#7687](https://github.com/ROCm/aiter/pull/7687) | [Triton] [Config] Add gfx1151 ff_a16w16_fused configs | @klin2024 | draft | 2026-11-09 | 2026-11-09 |
| [#7678](https://github.com/ROCm/aiter/pull/7678) | [Triton/Gluon] [gfx1250] fused_qk_norm_mrope_cache: A8K4V8 c... | @vgokhale | draft | 2026-11-09 | 2026-11-09 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | draft | 2026-08-03 | 2026-11-09 |
| [#4782](https://github.com/ROCm/aiter/pull/4782) | [gfx950][FlyDSL] Add direct dense A4W4 MXFP4 GEMM | @LiuYinfeng01 | draft | 2026-08-16 | 2026-11-09 |
| [#7618](https://github.com/ROCm/aiter/pull/7618) | [FlyDSL] Optimize gfx1250 MiniMax-M3 paged attention and pla... | @zhiding512 | draft | 2026-11-08 | 2026-11-09 |
| [#7633](https://github.com/ROCm/aiter/pull/7633) | [Config] [FlyDSL] MiniMax-M3.1 EP4/EP8 fused-MoE tuned rows ... | @ganyi1996ppo | draft | 2026-11-09 | 2026-11-09 |
| [#7260](https://github.com/ROCm/aiter/pull/7260) | [Triton/Gluon] [Config] Add gfx1150 gemm_a16w4 configs | @klin2024 | draft | 2026-11-01 | 2026-11-09 |
| [#6753](https://github.com/ROCm/aiter/pull/6753) | [Triton/Gluon] [Config] [gfx950] unified_attention: num_stag... | @azaidy | open | 2026-10-21 | 2026-11-09 |
| [#7628](https://github.com/ROCm/aiter/pull/7628) | [Triton] [Config] gfx1151 gemm_a16w16: shape-specific config... | @klin2024 | draft | 2026-11-08 | 2026-11-08 |
| [#4647](https://github.com/ROCm/aiter/pull/4647) | [FlyDSL] [MoE]: reuse stage-1(gate up) scratch buffer across... | @xiaohuguo2023 | open | 2026-08-09 | 2026-11-08 |
| [#7597](https://github.com/ROCm/aiter/pull/7597) | [Triton] [Config] Add gfx1201 sparse_mla_dsv4_train config | @klin2024 | draft | 2026-11-07 | 2026-11-07 |
| [#6740](https://github.com/ROCm/aiter/pull/6740) | [Triton/Gluon] [Config] [Perf] gfx950 a16w16 M_LEQ_8: avoid ... | @Arist12 | open | 2026-10-20 | 2026-11-07 |
| [#7368](https://github.com/ROCm/aiter/pull/7368) | Decouple MoE public names from backends (#7150 batch 1) | @zufayu | draft | 2026-11-03 | 2026-11-07 |
| [#7585](https://github.com/ROCm/aiter/pull/7585) | [Triton] [Config] Add gfx1201 SonicMoE config | @klin2024 | draft | 2026-11-06 | 2026-11-06 |
| [#7454](https://github.com/ROCm/aiter/pull/7454) | [Triton/Gluon] Allow pa_decode_gluon query length 8 | @amd-mghanimi | draft | 2026-11-04 | 2026-11-06 |
| [#7537](https://github.com/ROCm/aiter/pull/7537) | [FlyDSL] FP4 row-group MQA logits: opt-in |s| epilogue and 1... | @AMD-yanfeiwang | draft | 2026-11-06 | 2026-11-06 |
| [#6482](https://github.com/ROCm/aiter/pull/6482) | [Tune] Make pretune fail on tuner errors and rebuild every i... | @a-canadasruiz | draft | 2026-10-13 | 2026-11-06 |
| [#6532](https://github.com/ROCm/aiter/pull/6532) | [Tune] Report online fmoe tune failures and share one tune p... | @a-canadasruiz | draft | 2026-10-14 | 2026-11-06 |
| [#5058](https://github.com/ROCm/aiter/pull/5058) | [FlyDSL] [ROCm] Keep untuned SiLU A4W4 on native CK | @andyluo7 | open | 2026-08-27 | 2026-11-06 |
| [#7471](https://github.com/ROCm/aiter/pull/7471) | [Triton] fp8_mqa_logits: add a deterministic option | @aarnetalman | draft | 2026-11-04 | 2026-11-06 |
| [#6100](https://github.com/ROCm/aiter/pull/6100) | [ASM] [HIP] [JIT] Fuse the router GEMM and top-k softmax int... | @maeehart | open | 2026-10-02 | 2026-11-06 |
| [#6371](https://github.com/ROCm/aiter/pull/6371) | mHC fused post+pre: launch policy for MI300X (gfx942, 304 CU... | @anshss | open | 2026-10-10 | 2026-11-06 |
| [#7301](https://github.com/ROCm/aiter/pull/7301) | [Triton/Gluon] : Add RotatingBufferBench support for sage, h... | @rahulbatra85 | draft | 2026-11-02 | 2026-11-06 |
| [#7304](https://github.com/ROCm/aiter/pull/7304) | [CI] Rebalance slow op tests across shards | @zufayu | draft | 2026-11-02 | 2026-11-06 |
| [#7511](https://github.com/ROCm/aiter/pull/7511) | [Triton] [Config] Add gfx1201 fused_sigmoid_mul config | @klin2024 | draft | 2026-11-05 | 2026-11-05 |
| [#6526](https://github.com/ROCm/aiter/pull/6526) | [FlyDSL] [gfx1250] [MoE] Copy each prequantized a1 row once ... | @lalala-sh | open | 2026-10-14 | 2026-11-05 |
| [#6305](https://github.com/ROCm/aiter/pull/6305) | [Test] Time with cuda.Event when the torch build has no Kine... | @zufayu | draft | 2026-10-09 | 2026-11-05 |
| [#7478](https://github.com/ROCm/aiter/pull/7478) | [Config] Add Gemma-4-E4B bf16 GEMM configs for gfx950 (MI350... | @mpashkovskii | draft | 2026-11-04 | 2026-11-04 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-11-04 |
| [#7470](https://github.com/ROCm/aiter/pull/7470) | [Triton/Gluon] [Perf] Add optional gfx942 small-M MoE sorter | @LiuYinfeng01 | draft | 2026-11-04 | 2026-11-04 |
| [#7467](https://github.com/ROCm/aiter/pull/7467) | [Triton/Gluon] [Config] gfx1151 batched_gemm_a16w16: B-speci... | @klin2024 | draft | 2026-11-04 | 2026-11-04 |
| [#7461](https://github.com/ROCm/aiter/pull/7461) | [Triton/Gluon] gfx942 MXFP4-KV sparse paged-attention decode | @akii96 | draft | 2026-11-04 | 2026-11-04 |
| [#7427](https://github.com/ROCm/aiter/pull/7427) | [HIP] [Perf] Tune large-row BF16-to-FP8 quant on gfx1250 | @XiaobingSuper | draft | 2026-11-04 | 2026-11-04 |
| [#7448](https://github.com/ROCm/aiter/pull/7448) | [Triton/Gluon] [Config] [gfx950] unified_attention: bf16 hea... | @mpashkovskii | draft | 2026-11-04 | 2026-11-04 |
| [#7180](https://github.com/ROCm/aiter/pull/7180) | [CI] Cache compiled objects across builds with ccache (2h16m... | @zufayu | draft | 2026-10-30 | 2026-11-04 |
| [#6598](https://github.com/ROCm/aiter/pull/6598) | [FlyDSL] [MoE] Fix stage-1 grid leaving padded intermediate ... | @micah-wil | open | 2026-10-15 | 2026-11-04 |
| [#7420](https://github.com/ROCm/aiter/pull/7420) | [gfx1250] Qwen3.5-35B-A3B DP: retuned Gluon a16w16 configs +... | @Boss2002n | draft | 2026-11-03 | 2026-11-03 |
| [#7419](https://github.com/ROCm/aiter/pull/7419) | [FlyDSL] [gfx1250] Fix a K-split race in the fused EP psum-q... | @k50112113 | draft | 2026-11-03 | 2026-11-03 |
| [#5751](https://github.com/ROCm/aiter/pull/5751) | [FlyDSL] Add gfx950 FHMoE tuner in fhmoe_tune.py | @a-canadasruiz | draft | 2026-09-22 | 2026-11-03 |
| [#7386](https://github.com/ROCm/aiter/pull/7386) | [Bugfix] Allow gfx942 FlyDSL a16w4 and a16wi4 MoE tuning | @amd-oshkarav | draft | 2026-11-03 | 2026-11-03 |
| [#7382](https://github.com/ROCm/aiter/pull/7382) | [Triton] [Config] Add gfx1201 gemm_a16w16_gated config | @klin2024 | draft | 2026-11-03 | 2026-11-03 |
| [#7125](https://github.com/ROCm/aiter/pull/7125) | [HIP] [MLA] Balance the gfx950 XCD-lane decode planner on sk... | @nehmathe2 | draft | 2026-10-29 | 2026-11-03 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-11-03 |
| [#7380](https://github.com/ROCm/aiter/pull/7380) | [Triton] gfx950 unified attention: do not specialize on num_... | @vorapolsiloai | draft | 2026-11-03 | 2026-11-03 |
| [#7339](https://github.com/ROCm/aiter/pull/7339) | [Triton] Add conv2d_nearest_up2x_3x3: nearest x2 upsample + ... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#7327](https://github.com/ROCm/aiter/pull/7327) | [Triton] fused_nhwc_to_nchw_add: channels-last to NCHW plus ... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#7312](https://github.com/ROCm/aiter/pull/7312) | [Triton] Add fused_qk_norm_rope_across_heads: cross-head Q/K... | @klin2024 | draft | 2026-11-02 | 2026-11-03 |
| [#5120](https://github.com/ROCm/aiter/pull/5120) | [HIP] Guard MLA decode output dtype before kernel launch | @tanth47 | open | 2026-08-30 | 2026-11-03 |
| [#5893](https://github.com/ROCm/aiter/pull/5893) | [HIP] fix(mla): stop gfx950 MLA decode from reading wrong KV... | @vanshbhatia-amd | open | 2026-09-27 | 2026-11-03 |
| [#6022](https://github.com/ROCm/aiter/pull/6022) | [CK] [bug fix] Fix wrong cktile 2stages `moe_gemm1_heuristic... | @fxmarty-amd | open | 2026-09-30 | 2026-11-03 |
| [#7084](https://github.com/ROCm/aiter/pull/7084) | [Triton/Gluon] [Perf] [KDA] Optimize the gfx950 FlashKDA pre... | @waqahmed-amd-fi | draft | 2026-10-28 | 2026-11-02 |
| [#7320](https://github.com/ROCm/aiter/pull/7320) | [Triton] Add conv2d_depthwise with a fused bias, activation ... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7307](https://github.com/ROCm/aiter/pull/7307) | [Triton] Add channel_rmsnorm: RMS norm over dim 1 + activati... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7114](https://github.com/ROCm/aiter/pull/7114) | [HIP] [Perf] fn-resident mHC pre GEMM and bf16 hi/lo split f... | @anhminhnguyenhoang | draft | 2026-10-28 | 2026-11-02 |
| [#7199](https://github.com/ROCm/aiter/pull/7199) | perf(flydsl pa_decode): let the head-256 FP8 pipe take three... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-02 |
| [#7293](https://github.com/ROCm/aiter/pull/7293) | [Triton] gfx1150: add fused_gemm_a16w16_mul_add config (2.08... | @klin2024 | draft | 2026-11-02 | 2026-11-02 |
| [#7286](https://github.com/ROCm/aiter/pull/7286) | Fail the MXMOE shape on a fatal GPU error in pruned and full... | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#7285](https://github.com/ROCm/aiter/pull/7285) | Validate the timed output in ordinary MXMOE coupled search | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#7284](https://github.com/ROCm/aiter/pull/7284) | [FlyDSL] [MoE] Support expert parallel for MXMOE a4w4 GEMM1 ... | @Bernard-Liu | draft | 2026-11-02 | 2026-11-02 |
| [#4872](https://github.com/ROCm/aiter/pull/4872) | [HIP] fix(mla): fold fp8 qlen 2 onto the qseqlen-4 kernel on... | @JohnQin-llm | open | 2026-08-20 | 2026-11-02 |
| [#5297](https://github.com/ROCm/aiter/pull/5297) | [HIP] [Bugfix] asm_mla: route ctypes entrypoint failures thr... | @wjabbour | open | 2026-09-06 | 2026-11-02 |
| [#7275](https://github.com/ROCm/aiter/pull/7275) | [FlyDSL] [Perf] Use wave32 ballots for small persistent expe... | @xytpai | draft | 2026-11-01 | 2026-11-01 |
| [#7268](https://github.com/ROCm/aiter/pull/7268) | [Triton] ep_sort_routing: grid size at run time, no compile ... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#7266](https://github.com/ROCm/aiter/pull/7266) | [Triton] ep_sort_routing: barrier before the last-CTA ticket... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#7267](https://github.com/ROCm/aiter/pull/7267) | [Triton/Gluon] [gfx1250] a4w4 MoE configs for Qwen3.5-35B-A3... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [FlyDSL] [Bugfix] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-11-01 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-11-01 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [CI] [MLA] Deterministic single-split decode option for repr... | @MohitAMD | open | 2026-07-24 | 2026-11-01 |
| [#4848](https://github.com/ROCm/aiter/pull/4848) | [FlyDSL] [MoE] Address expert weights past 4 GB in the MoE G... | @dianzhan0124 | open | 2026-08-19 | 2026-11-01 |
| [#5450](https://github.com/ROCm/aiter/pull/5450) | [FlyDSL] [CI] [Bugfix] Rebase large MoE expert weights | @xudonlyu | open | 2026-09-11 | 2026-11-01 |
| [#5559](https://github.com/ROCm/aiter/pull/5559) | [Bugfix][MLA] Fix reduce_partial_map over-allocation when ma... | @xiaohuguo2023 | open | 2026-09-15 | 2026-11-01 |
| [#5752](https://github.com/ROCm/aiter/pull/5752) | [FlyDSL] [gfx1250] Optimize A4W4 MoE prefill with A preshuff... | @yanguahe | open | 2026-09-22 | 2026-11-01 |
| [#5779](https://github.com/ROCm/aiter/pull/5779) | [HIP] [JIT] Remove unintended CK dependency from plain top-k | @UD-mmcminn | open | 2026-09-23 | 2026-11-01 |
| [#5884](https://github.com/ROCm/aiter/pull/5884) | [FlyDSL] Respect GPU_ARCHS for Grouped MoE AOT builds | @chandankumr | open | 2026-09-27 | 2026-11-01 |
| [#6047](https://github.com/ROCm/aiter/pull/6047) | [FlyDSL] MiniMax-M3 fused sparse-layer decode | @akii96 | draft | 2026-10-01 | 2026-11-01 |
| [#7259](https://github.com/ROCm/aiter/pull/7259) | [Config] [Perf] [gfx950] MiniMax-M3 MoE tuned rows: TP2 a4w4... | @vorapolsiloai | draft | 2026-10-31 | 2026-10-31 |
| [#6054](https://github.com/ROCm/aiter/pull/6054) | fix: diverge on active chunks in topk decode | @simondanielsson | draft | 2026-10-01 | 2026-10-31 |
| [#7242](https://github.com/ROCm/aiter/pull/7242) | [Triton/Gluon] [gfx950] Read DeepSeek-V4.1 KV records in spa... | @JohnQin-llm | draft | 2026-10-31 | 2026-10-31 |
| [#6483](https://github.com/ROCm/aiter/pull/6483) | [FlyDSL] Add gfx950 SonicMoE forward and backward | @jayzlee147 | open | 2026-10-13 | 2026-10-31 |
| [#6064](https://github.com/ROCm/aiter/pull/6064) | [FlyDSL] [Perf] Add exact-M4 native MXFP4 GLM MoE pipeline | @heslami | open | 2026-10-01 | 2026-10-31 |
| [#6065](https://github.com/ROCm/aiter/pull/6065) | [FlyDSL] [Perf] Add exact-M8 native MXFP4 GLM MoE route merg... | @heslami | open | 2026-10-01 | 2026-10-31 |
| [#6113](https://github.com/ROCm/aiter/pull/6113) | [FlyDSL] Fix force-reduce Stage-2 dispatch | @chandankumr | open | 2026-10-03 | 2026-10-31 |
| [#6136](https://github.com/ROCm/aiter/pull/6136) | [FlyDSL] Optimize gfx1250 A4W4 MoE prefill with fused GEMM1 ... | @yanguahe | open | 2026-10-04 | 2026-10-31 |
| [#6170](https://github.com/ROCm/aiter/pull/6170) | [FlyDSL] [MoE] Fix a race in the async stage-1 LDS pipeline;... | @jiaweche | open | 2026-10-06 | 2026-10-31 |
| [#6342](https://github.com/ROCm/aiter/pull/6342) | [FlyDSL] fix: handle float strings in _as_int for CSV config... | @srinivamd | open | 2026-10-09 | 2026-10-31 |
| [#6020](https://github.com/ROCm/aiter/pull/6020) | [FlyDSL] Add a GFX11 wave32 FlashAttention variant for gfx11... | @weimin023 | draft | 2026-09-30 | 2026-10-30 |
| [#7195](https://github.com/ROCm/aiter/pull/7195) | [DO NOT MERGE] [CI] Add a manual gfx1201 DevLab Dispatch smo... | @keerthana-bidar | draft | 2026-10-30 | 2026-10-30 |
| [#6248](https://github.com/ROCm/aiter/pull/6248) | [WIP] [HIP] [FlyDSL] [CI] Feat/topk select tuner | @MHYangAMD | open | 2026-10-08 | 2026-10-30 |
| [#7165](https://github.com/ROCm/aiter/pull/7165) | [CI] Select aiter op_tests from the PR diff (dry run) | @zufayu | draft | 2026-10-29 | 2026-10-29 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-10-29 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-10-28 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-10-28 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-10-28 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-10-28 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-10-28 |
| [#5561](https://github.com/ROCm/aiter/pull/5561) | [Bugfix] Drain FlyDSL stage-1 LDS-DMA loads before the tile ... | @kevin-mii | draft | 2026-09-15 | 2026-10-28 |
| [#6786](https://github.com/ROCm/aiter/pull/6786) | [HIP] [Feature] a8w8 blockscale asm: out_zeroed skips the sp... | @kevin-mii | draft | 2026-10-21 | 2026-10-28 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [HIP] [MLA v4 nm] Drop kv_last_page_lens from ABI + self-con... | @amd-ruitang3 | open | 2026-07-21 | 2026-10-27 |
| [#4923](https://github.com/ROCm/aiter/pull/4923) | [Docs] : fix MI300A gfx target in attention docs (gfx942, no... | @zjin-lcf | open | 2026-08-23 | 2026-10-27 |
| [#6108](https://github.com/ROCm/aiter/pull/6108) | [Triton/Gluon] Add non-causal support to unified attention | @amd-xavierwang | open | 2026-10-02 | 2026-10-27 |
| [#6971](https://github.com/ROCm/aiter/pull/6971) | [MLA] Return a valid LSE from single-split BF16 QH64/QH128 d... | @maeehart | draft | 2026-10-26 | 2026-10-26 |
| [#6613](https://github.com/ROCm/aiter/pull/6613) | [Triton][MHA] Proposal: Triton harness tunes MHA tiles for t... | @amd-bartgips | draft | 2026-10-16 | 2026-10-26 |
| [#4713](https://github.com/ROCm/aiter/pull/4713) | [mla] fp8: don't KeyError on unlisted folded query widths in... | @xiaohuguo2023 | open | 2026-08-12 | 2026-10-26 |
| [#5278](https://github.com/ROCm/aiter/pull/5278) | [Config] Add gfx950 a8w8_blockscale tunings for GLM-5.3 shap... | @stefanskiasan | open | 2026-09-04 | 2026-10-26 |
| [#6759](https://github.com/ROCm/aiter/pull/6759) | [Triton/Gluon] Retune gfx950 Triton ops that regressed with ... | @yanxuer-999 | draft | 2026-10-21 | 2026-10-25 |
| [#5024](https://github.com/ROCm/aiter/pull/5024) | [HIP] [CK] [CI] Add MHA forward tuning scripts and kernel-in... | @huishi-hs | open | 2026-08-26 | 2026-10-25 |
| [#6882](https://github.com/ROCm/aiter/pull/6882) | [CI] Upgrade shared PyTorch images to ROCm 10.1 and PyTorch ... | @rkayaith | draft | 2026-10-23 | 2026-10-23 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | [Triton/Gluon] rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-10-23 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-10-22 |
| [#5384](https://github.com/ROCm/aiter/pull/5384) | [Triton/Gluon] Move gluon mla_gluon kernel into _gluon_kerne... | @vgokhale | draft | 2026-09-09 | 2026-10-22 |
| [#6720](https://github.com/ROCm/aiter/pull/6720) | [HIP] fused_dynamic_mx_quant_moe_sort: use the split path ab... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6719](https://github.com/ROCm/aiter/pull/6719) | [Triton] gfx1250: fix MXFP4 quant, RMSNorm and gemm_afp4wfp4... | @sogalin | draft | 2026-10-20 | 2026-10-20 |
| [#6698](https://github.com/ROCm/aiter/pull/6698) | add bmm apf8wfp8 gemm and inverse rope quant kernel | @ahmed-bsod | draft | 2026-10-20 | 2026-10-20 |
| [#6052](https://github.com/ROCm/aiter/pull/6052) | [FlyDSL] [CI] MegaMoE: stage1_fused/stage2_fused switches, m... | @yanboshao | draft | 2026-10-01 | 2026-10-20 |
| [#6628](https://github.com/ROCm/aiter/pull/6628) | Optimize mxfp4 gfx1250 gluon | @azaidy | draft | 2026-10-16 | 2026-10-19 |
| [#5532](https://github.com/ROCm/aiter/pull/5532) | Add --fused-expert option to 2stage moe tests | @JohnNikolay84 | draft | 2026-09-15 | 2026-10-18 |
| [#5654](https://github.com/ROCm/aiter/pull/5654) | [ASM] Fix gfx950 GQA16 FP8 paged attention short-tail NaNs | @fangche123 | draft | 2026-09-18 | 2026-10-16 |
| [#6555](https://github.com/ROCm/aiter/pull/6555) | Satya/tuning rel to default | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6553](https://github.com/ROCm/aiter/pull/6553) | Satya/tuning preempt local best | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#6554](https://github.com/ROCm/aiter/pull/6554) | satya/tuning_search_space | @Boss2002n | draft | 2026-10-15 | 2026-10-15 |
| [#5347](https://github.com/ROCm/aiter/pull/5347) | [Feature] Add manifest-driven static-page batch prefill disp... | @vstakhov-amd | draft | 2026-09-08 | 2026-10-14 |
| [#6487](https://github.com/ROCm/aiter/pull/6487) | [Triton/Gluon] Extend Gluon PA benchmark for asymmetric K/V ... | @sammysun0711 | draft | 2026-10-13 | 2026-10-14 |
| [#6292](https://github.com/ROCm/aiter/pull/6292) | [ASM] [HIP] [JIT] gfx1201: Sol sparse attention for MiniMax-... | @Shan2L | draft | 2026-10-08 | 2026-10-14 |
| [#6510](https://github.com/ROCm/aiter/pull/6510) | [Triton/Gluon] [GFX12] 8-wave-ping-pong mxfp8 GEMM | @k50112113 | draft | 2026-10-14 | 2026-10-14 |
| [#5692](https://github.com/ROCm/aiter/pull/5692) | [Triton/Gluon] [ASM] [HIP] Chefang/fix pa gqa16 short tail p... | @fangche123 | draft | 2026-09-20 | 2026-10-14 |
| [#5900](https://github.com/ROCm/aiter/pull/5900) | [ASM] [HIP] [JIT] [Feature] Add gfx1201 SageAttention operat... | @Shan2L | draft | 2026-09-28 | 2026-10-14 |
| [#6066](https://github.com/ROCm/aiter/pull/6066) | gfx1201: MiniMax-H3 multi-GPU (Ulysses SP2/4/8) ops | @Shan2L | draft | 2026-10-01 | 2026-10-14 |
| [#6506](https://github.com/ROCm/aiter/pull/6506) | [FlyDSL] Extend fused KDA decode to GLM-5.3 on gfx950 | @Raiden-Makoto | draft | 2026-10-13 | 2026-10-13 |
| [#6311](https://github.com/ROCm/aiter/pull/6311) | [Perf][gfx1250] Add  ubench for atlas runner | @JiaoliangYu | draft | 2026-10-09 | 2026-10-13 |
| [#6434](https://github.com/ROCm/aiter/pull/6434) | [Triton/Gluon] PA decode: split PS work on whole partitions,... | @jiaqiang-dot-liu | draft | 2026-10-12 | 2026-10-12 |
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
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-10-07 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-10-07 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-10-07 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | draft | 2026-04-24 | 2026-10-07 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-10-07 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-10-07 |
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
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-10-07 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-10-07 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | [CI] [JIT] gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | draft | 2026-07-21 | 2026-10-07 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-10-07 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [Qwen3.5_dev][MoE] Add FlyDSL FP8 MoE kernels (decode weight... | @apinge | draft | 2026-07-27 | 2026-10-07 |
| [#4466](https://github.com/ROCm/aiter/pull/4466) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-30 | 2026-10-07 |
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
| [#4993](https://github.com/ROCm/aiter/pull/4993) | [Triton/Gluon] Fix PR#4562 and PR#4470 for GPT-OSS-120b on g... | @sogalin | open | 2026-08-25 | 2026-10-07 |
| [#5010](https://github.com/ROCm/aiter/pull/5010) | [Triton/Gluon] Support caller-defined padding cache slot in ... | @tanth47 | open | 2026-08-26 | 2026-10-07 |
| [#5090](https://github.com/ROCm/aiter/pull/5090) | [Triton/Gluon] [Bugfix] fwd_decode: only one K-block program... | @mark14wu | open | 2026-08-28 | 2026-10-07 |
| [#5122](https://github.com/ROCm/aiter/pull/5122) | [HIP] topk: fuse the DSA page-table transform into a coopera... | @xiaobochen-amd | open | 2026-08-30 | 2026-10-07 |
| [#5126](https://github.com/ROCm/aiter/pull/5126) | [FlyDSL] Keep FP4 prefill modules alive across async dispatc... | @AMD-yanfeiwang | open | 2026-08-30 | 2026-10-07 |
| [#5159](https://github.com/ROCm/aiter/pull/5159) | [Config] gptoss bf16 tuned gemm: drop the losing large-M QKV... | @alexnails | open | 2026-09-01 | 2026-10-07 |
| [#5208](https://github.com/ROCm/aiter/pull/5208) | DO NOT MERGE: test extended CI dispatch flow | @gyohuangxin | open | 2026-09-02 | 2026-10-07 |
| [#5290](https://github.com/ROCm/aiter/pull/5290) | [HIP] Fix rmsnorm_quant cross-row reads and writes for rows ... | @rk9595 | open | 2026-09-05 | 2026-10-07 |
| [#5597](https://github.com/ROCm/aiter/pull/5597) | [CI] docs: refresh onboarding and enforce source-backed refe... | @sunway513 | open | 2026-09-16 | 2026-10-07 |
| [#5645](https://github.com/ROCm/aiter/pull/5645) | [CI] Remove stale `rocm/vllm-dev:nightly` image | @micah-wil | open | 2026-09-17 | 2026-10-07 |
| [#5701](https://github.com/ROCm/aiter/pull/5701) | [Config] [GFX1250][Moe] ep8 tuned config setup | @Zzz9990 | open | 2026-09-20 | 2026-10-07 |
| [#6194](https://github.com/ROCm/aiter/pull/6194) | [AMD] AgentX draft slot 3 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#6193](https://github.com/ROCm/aiter/pull/6193) | [AMD] AgentX draft slot 2 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#6192](https://github.com/ROCm/aiter/pull/6192) | [AMD] AgentX draft slot 1 | @chien-an-chen | draft | 2026-10-07 | 2026-10-07 |
| [#5218](https://github.com/ROCm/aiter/pull/5218) | [Triton/Gluon] [BENCHMARK] Adding utility function for torch... | @cagrikymk | draft | 2026-09-02 | 2026-10-07 |
| [#5719](https://github.com/ROCm/aiter/pull/5719) | [HIP] [JIT] [Build] Add GLM-5.3-Flash IQ2R 2-bit MoE support | @ssharma4-amd | draft | 2026-09-21 | 2026-10-06 |
| [#6112](https://github.com/ROCm/aiter/pull/6112) | [MLA gluon] Optional kv_len_hint to pick the bh16 KV split b... | @chien-an-chen | draft | 2026-10-02 | 2026-10-03 |
| [#6086](https://github.com/ROCm/aiter/pull/6086) | [cktile BF16-MXFP4 MOE][bug] Fix wrong output with `model_di... | @fxmarty-amd | draft | 2026-10-02 | 2026-10-02 |
| [#5920](https://github.com/ROCm/aiter/pull/5920) | [Perf] Add SPLIT_UNMASKED_LOOP=true to fp8 Gemma4 prefill un... | @simondanielsson | draft | 2026-09-28 | 2026-10-02 |
| [#6029](https://github.com/ROCm/aiter/pull/6029) | [Triton][CK][DSv4] wq_b / wo_b fp8 blockscale GEMMs (N=8192 ... | @AMD-yanfeiwang | draft | 2026-10-01 | 2026-10-01 |
| [#6005](https://github.com/ROCm/aiter/pull/6005) | [FlyDSL] HGEMM: keep the C shuffle in fp32 for fp32 output; ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#6004](https://github.com/ROCm/aiter/pull/6004) | [Triton][DSv4] wqkv_a fp8 blockscale GEMM (N=2048, K=7168): ... | @AMD-yanfeiwang | draft | 2026-09-30 | 2026-09-30 |
| [#5983](https://github.com/ROCm/aiter/pull/5983) | [Triton/Gluon] [Config] Fix gfx950 FP8 preshuffle shared-mem... | @whx-sjtu | draft | 2026-09-30 | 2026-09-30 |
| [#5950](https://github.com/ROCm/aiter/pull/5950) | [DO NOT MERGE] Add GPU ASan CI | @leo-automation | draft | 2026-09-29 | 2026-09-29 |
| [#5924](https://github.com/ROCm/aiter/pull/5924) | [HIP] [Bugfix] Guard gfx942 BF16 MLA KV address span | @BANANASJIM | draft | 2026-09-29 | 2026-09-29 |
| [#5727](https://github.com/ROCm/aiter/pull/5727) | [WIP] Add MoonEP prefill and decode planning policies | @JiaoliangYu | draft | 2026-09-21 | 2026-09-28 |
| [#5881](https://github.com/ROCm/aiter/pull/5881) | [FlyDSL] Fuse the GDN gated RMSNorm into the out_proj GEMM f... | @maeehart | draft | 2026-09-26 | 2026-09-26 |
| [#5707](https://github.com/ROCm/aiter/pull/5707) | [FlyDSL][gfx950] Optimize FP4 MQA prefill and decode | @jiacao-amd | draft | 2026-09-20 | 2026-09-24 |
| [#5756](https://github.com/ROCm/aiter/pull/5756) | [Config] Restore accurate Kimi-K3 A4W4 FMoE decode tiles | @amd-mghanimi | draft | 2026-09-22 | 2026-09-22 |
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
| [#8748](https://github.com/ROCm/aiter/pull/8748) | [ASM] add 64 bit address pointer support for FMHA BWD HD256 | @antsaukk | merged | 2026-11-26 | 2026-11-27 |
| [#8841](https://github.com/ROCm/aiter/pull/8841) | [FlyDSL] AOT build: replay the stages side by side within on... | @coderfeli | merged | 2026-11-27 | 2026-11-27 |
| [#8832](https://github.com/ROCm/aiter/pull/8832) | [HIP] Fix cross-GPU flag polling in custom all-reduce | @TennyWang1223 | merged | 2026-11-27 | 2026-11-27 |
| [#8048](https://github.com/ROCm/aiter/pull/8048) | [Config] [gfx1250] DSv4.1 engram wkv / main_proj MXFP8 compu... | @yhl-amd | merged | 2026-11-16 | 2026-11-27 |
| [#8699](https://github.com/ROCm/aiter/pull/8699) | [FlyDSL] MiniMax-M3 MXFP4 prefill MoE kernels for SP prefill | @zhuyuhua-v | merged | 2026-11-25 | 2026-11-27 |
| [#6998](https://github.com/ROCm/aiter/pull/6998) | [FlyDSL] [CI] Support wave32 (gfx1250) in the DCP decode top... | @zejunchen-zejun | merged | 2026-10-27 | 2026-11-27 |
| [#7937](https://github.com/ROCm/aiter/pull/7937) | [HIP] perf(custom_ar): one gfx1250 Lamport two-shot replaces... | @zejunchen-zejun | merged | 2026-11-13 | 2026-11-27 |
| [#8587](https://github.com/ROCm/aiter/pull/8587) | [HIP] comms: general all_to_all (MXFP8 codes + e8m0 scales, ... | @ganyi1996ppo | merged | 2026-11-24 | 2026-11-27 |
| [#8314](https://github.com/ROCm/aiter/pull/8314) | [Triton/Gluon] [FlyDSL] [CI] Make the lint versions in CONTR... | @menglcai | merged | 2026-11-19 | 2026-11-27 |
| [#8724](https://github.com/ROCm/aiter/pull/8724) | [FlyDSL] [gfx1250] grouped MoE: read the live GPU, not GPU_A... | @zufayu | merged | 2026-11-26 | 2026-11-27 |
| [#8827](https://github.com/ROCm/aiter/pull/8827) | [dist] deferred MoE tail: a registered tail launch (GEMM2 in... | @XiaobingSuper | merged | 2026-11-27 | 2026-11-27 |
| [#6522](https://github.com/ROCm/aiter/pull/6522) | [FlyDSL] generalize gfx942 FMHA varlen backward to head dims... | @amd-wangfan | merged | 2026-10-14 | 2026-11-27 |
| [#8031](https://github.com/ROCm/aiter/pull/8031) | [FlyDSL] [gfx1250] TDM HGEMM: FP32 cluster split-K, and DSV4... | @xytpai | merged | 2026-11-16 | 2026-11-27 |
| [#8472](https://github.com/ROCm/aiter/pull/8472) | [HIP] [Perf] fused_qknorm_idxrqknorm: early loads, hardware ... | @ganyi1996ppo | merged | 2026-11-23 | 2026-11-27 |
| [#8574](https://github.com/ROCm/aiter/pull/8574) | [FlyDSL] [CI] fused all-reduce + Gemma RMSNorm: exact bf16 p... | @ganyi1996ppo | merged | 2026-11-24 | 2026-11-27 |
| [#8790](https://github.com/ROCm/aiter/pull/8790) | [MoE] Refresh the legacy dispatch golden for #7611's interme... | @GwilliamHu | merged | 2026-11-27 | 2026-11-27 |
| [#8795](https://github.com/ROCm/aiter/pull/8795) | bench: improve attn-res metrics and restore millisecond timi... | @yanxuer-999 | merged | 2026-11-27 | 2026-11-27 |
| [#8085](https://github.com/ROCm/aiter/pull/8085) | [ASM] [HIP] Enable BF16 split partials and 4-wave reduction ... | @fangche123 | merged | 2026-11-17 | 2026-11-27 |
| [#7152](https://github.com/ROCm/aiter/pull/7152) | [HIP] [Perf] Several rows per block in dynamic_per_token_sca... | @MHYangAMD | merged | 2026-10-29 | 2026-11-27 |
| [#8556](https://github.com/ROCm/aiter/pull/8556) | [FlyDSL] MoE: one-workgroup E128 expert sort and routed-slot... | @ganyi1996ppo | merged | 2026-11-24 | 2026-11-27 |
| [#8480](https://github.com/ROCm/aiter/pull/8480) | [Triton/Gluon] [gfx1250] Add fused BF16 BMM with NVFP4 MLA q... | @yzhou103 | merged | 2026-11-23 | 2026-11-27 |
| [#8161](https://github.com/ROCm/aiter/pull/8161) | [Config] [gfx1250] Tune MiniMax-M3.1 TP4 DSpark BF16 FC and ... | @XiaobingSuper | merged | 2026-11-18 | 2026-11-27 |
| [#8559](https://github.com/ROCm/aiter/pull/8559) | [HIP] fea: gfx1250 Lamport AR + RMSNorm: split sends, preloa... | @TennyWang1223 | merged | 2026-11-24 | 2026-11-27 |
| [#8655](https://github.com/ROCm/aiter/pull/8655) | [HIP] [Bugfix] MLA prefill: derive kv_lora_vec from the vect... | @merrittttt | merged | 2026-11-25 | 2026-11-27 |
| [#7093](https://github.com/ROCm/aiter/pull/7093) | [FlyDSL] QuickAllReduce INT4: faster poll and codec, kernel-... | @a-sidorova | merged | 2026-10-28 | 2026-11-27 |
| [#7832](https://github.com/ROCm/aiter/pull/7832) | [Triton/Gluon] [Feature] Fused all-reduce + RMSNorm + MoE ro... | @vgokhale | merged | 2026-11-11 | 2026-11-26 |
| [#7792](https://github.com/ROCm/aiter/pull/7792) | [Triton/Gluon] [Feature] Fused all-reduce + RMSNorm + MXFP8 ... | @vgokhale | merged | 2026-11-11 | 2026-11-26 |
| [#8600](https://github.com/ROCm/aiter/pull/8600) | [FlyDSL] Launch the planner, GDN, conv3d, FP8 attention and ... | @coderfeli | merged | 2026-11-24 | 2026-11-26 |
| [#8663](https://github.com/ROCm/aiter/pull/8663) | [HIP] Mega-MHC: mid256 finisher publishes from wave 4 while ... | @yhl-amd | merged | 2026-11-25 | 2026-11-26 |
| [#8016](https://github.com/ROCm/aiter/pull/8016) | [Config] Add Qwen3.8-27B FP8 a8w8 blockscale GEMM tunings fo... | @abrahamzewoudie | merged | 2026-11-16 | 2026-11-26 |
| [#6322](https://github.com/ROCm/aiter/pull/6322) | [HIP] [Bugfix] sampling radix_topk_one_block_kernel: honor r... | @truong-v | merged | 2026-10-09 | 2026-11-26 |
| [#8309](https://github.com/ROCm/aiter/pull/8309) | [Triton/Gluon] fused_kv_cache: add q_nope_prestored_supporte... | @JiaoliangYu | merged | 2026-11-19 | 2026-11-26 |
| [#8093](https://github.com/ROCm/aiter/pull/8093) | [Triton/Gluon] gfx950: turn off SLP single-use seeding for b... | @yanxuer-999 | merged | 2026-11-17 | 2026-11-26 |
| [#7611](https://github.com/ROCm/aiter/pull/7611) | [ASM] [HIP] [MoE] Run the FLAT and EMSORT MXFP4 fmoe tiles o... | @mjkvaak-amd | merged | 2026-11-07 | 2026-11-26 |
| [#8745](https://github.com/ROCm/aiter/pull/8745) | [k3-455-dev] MegaMoE: update ROCm/aiter#8189 to 1e974a93 (S1... | @gbyu-amd | merged | 2026-11-26 | 2026-11-26 |
| [#8429](https://github.com/ROCm/aiter/pull/8429) | [FlyDSL] [Perf] gfx1250 MoE gather-reduce: routed scale + sh... | @XiaobingSuper | merged | 2026-11-21 | 2026-11-26 |
| [#7921](https://github.com/ROCm/aiter/pull/7921) | [FlyDSL] [gfx1250] grouped MoE GEMM1 opts into mega | @XingerZhu | merged | 2026-11-13 | 2026-11-26 |
| [#8560](https://github.com/ROCm/aiter/pull/8560) | [HIP] [OPUS] [JIT] [Feature] Fused BF16 MQA logits + top-204... | @kaiyang-1 | merged | 2026-11-24 | 2026-11-26 |
| [#8694](https://github.com/ROCm/aiter/pull/8694) | [HIP] [gfx950] Mega-MHC: post192/mid768 token ranges, faster... | @junhaha666 | merged | 2026-11-25 | 2026-11-26 |
| [#8743](https://github.com/ROCm/aiter/pull/8743) | [k3-455-dev] MLA gfx1250 PS1: port ROCm/aiter#8736 (QH64 cod... | @gbyu-amd | merged | 2026-11-26 | 2026-11-26 |
| [#8669](https://github.com/ROCm/aiter/pull/8669) | [CK] [FlyDSL] [JIT] [MoE] Add a stage2 FP8 row table for AIT... | @omirosh | merged | 2026-11-25 | 2026-11-26 |
| [#8305](https://github.com/ROCm/aiter/pull/8305) | [CK] [fix] blockscale moe header: include moe_silu.hpp and <... | @zufayu | merged | 2026-11-19 | 2026-11-26 |
| [#8479](https://github.com/ROCm/aiter/pull/8479) | [HIP] [CI] [JIT] Mla nvfp4 decode prep | @yzhou103 | merged | 2026-11-23 | 2026-11-26 |
| [#6915](https://github.com/ROCm/aiter/pull/6915) | [Config] Tune gfx1250 grouped MoE for Qwen3.5-35B-A3B TP4 an... | @Boss2002n | merged | 2026-10-25 | 2026-11-26 |
| [#8146](https://github.com/ROCm/aiter/pull/8146) | [HIP] [JIT] [Perf] gfx950 mHC: two-kernel packed prefill rou... | @iraj465 | merged | 2026-11-18 | 2026-11-26 |
| [#8510](https://github.com/ROCm/aiter/pull/8510) | hipb_w4a16_mm: ask hipBLASLt's heuristic at the exact batch | @roberteg16 | merged | 2026-11-23 | 2026-11-26 |
| [#8046](https://github.com/ROCm/aiter/pull/8046) | [Config] [gfx1250] DSv4.1 draft LM head bf16 rows for M 1120... | @yhl-amd | merged | 2026-11-16 | 2026-11-26 |
| [#8582](https://github.com/ROCm/aiter/pull/8582) | [FlyDSL] [Perf] gfx950: persistent 4-wave MXFP8 GEMM kernel,... | @ganyi1996ppo | merged | 2026-11-24 | 2026-11-26 |
| [#8159](https://github.com/ROCm/aiter/pull/8159) | [Config] Add gfx950 DeepSeek-V4.1 MXFP8 GEMM rows for N = 12... | @iraj465 | merged | 2026-11-18 | 2026-11-26 |
| [#8317](https://github.com/ROCm/aiter/pull/8317) | [Config] [Perf] Retune 48 large-batch BF16 GEMM rows for gfx... | @iraj465 | merged | 2026-11-19 | 2026-11-26 |
| [#8270](https://github.com/ROCm/aiter/pull/8270) | [FlyDSL] [JIT] mega_moe_tp optimizations | @binding7012 | merged | 2026-11-19 | 2026-11-26 |
| [#8733](https://github.com/ROCm/aiter/pull/8733) | [CI] Add XGMI check to 8-GPU visibility probe | @gyohuangxin | merged | 2026-11-26 | 2026-11-26 |
| [#8702](https://github.com/ROCm/aiter/pull/8702) | [FlyDSL] AOT: prebuild the fused-quant entry of the batched ... | @coderfeli | merged | 2026-11-25 | 2026-11-26 |
| [#8151](https://github.com/ROCm/aiter/pull/8151) | [Perf] gfx950 mHC: regular stores in post + pre for FP32 wei... | @iraj465 | merged | 2026-11-18 | 2026-11-26 |
| [#7394](https://github.com/ROCm/aiter/pull/7394) | [ASM] MHAv4 gfx942 parity | @nsakkine | merged | 2026-11-03 | 2026-11-26 |
| [#8599](https://github.com/ROCm/aiter/pull/8599) | [Config] [Perf] MiniMax-M3.1 TP4 MXFP8 small-M rows (gfx950)... | @ganyi1996ppo | merged | 2026-11-24 | 2026-11-26 |
| [#7172](https://github.com/ROCm/aiter/pull/7172) | [MoE] Skip unused intermediate allocation for fused stage-1 ... | @iraj465 | merged | 2026-10-29 | 2026-11-26 |
| [#8661](https://github.com/ROCm/aiter/pull/8661) | [MLA] mla_decode_fwd: has_partials=False skips the reduce la... | @yitingw1 | merged | 2026-11-25 | 2026-11-26 |
| [#7325](https://github.com/ROCm/aiter/pull/7325) | [Config] [gfx950] Gemma 4 26B-A4B BF16 fused-MoE tuned confi... | @amd-sriram | merged | 2026-11-02 | 2026-11-26 |
| [#8712](https://github.com/ROCm/aiter/pull/8712) | [Triton/Gluon] [Config] Change BLOCK_SIZE_K from 128 to 256 | @Boss2002n | merged | 2026-11-25 | 2026-11-26 |
| [#7688](https://github.com/ROCm/aiter/pull/7688) | [Config] [MoE] [gfx950] BF16 rows with a narrower block_m fo... | @ZhengGong-amd | merged | 2026-11-09 | 2026-11-26 |
| [#7230](https://github.com/ROCm/aiter/pull/7230) | [HIP] [Tuning] [gfx950] Add MiniMax-M3 MXFP4 MoE configs for... | @afriedri-amd | merged | 2026-10-30 | 2026-11-26 |
| [#7109](https://github.com/ROCm/aiter/pull/7109) | [Config] Add Muse Spark Open 816B MXFP4 fused-MoE FlyDSL con... | @mpashkovskii | merged | 2026-10-28 | 2026-11-25 |
| [#8713](https://github.com/ROCm/aiter/pull/8713) | [Triton/Gluon] Fix the fast_launch import in kda_gating | @Boss2002n | merged | 2026-11-25 | 2026-11-25 |
| [#8036](https://github.com/ROCm/aiter/pull/8036) | [Triton/Gluon] Reduce the number of tests in shard 1 to avoi... | @Boss2002n | merged | 2026-11-16 | 2026-11-25 |
| [#8701](https://github.com/ROCm/aiter/pull/8701) | [Triton/Gluon] gemm_a16w32: configs that fit the LDS on Trit... | @vgokhale | merged | 2026-11-25 | 2026-11-25 |
| [#8302](https://github.com/ROCm/aiter/pull/8302) | [Config] [MoE] [gfx950] Use the emsort kernel for Qwen3.8 MX... | @omirosh | merged | 2026-11-19 | 2026-11-25 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-11-27T17:42:32Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#3518](https://github.com/ROCm/ATOM/pull/3518) | build(docker): cut ~15 GB of dead weight from the release im... | @maple52046 | open | 2026-11-18 | 2026-11-27 |
| [#3883](https://github.com/ROCm/ATOM/pull/3883) | feat(eplb): swap placement policy that stops when no swap ga... | @JiaoliangYu | open | 2026-11-26 | 2026-11-27 |
| [#3932](https://github.com/ROCm/ATOM/pull/3932) | fix(dsv41): use fused mHC initialization in compiled prefill | @yhl-amd | draft | 2026-11-27 | 2026-11-27 |
| [#3950](https://github.com/ROCm/ATOM/pull/3950) | mono(v41, gfx950): follow in-place weight updates on the lay... | @yifehuan | draft | 2026-11-27 | 2026-11-27 |
| [#3813](https://github.com/ROCm/ATOM/pull/3813) | perf(v41 mono): TP8 layer kernel - seam x8 handoff, index se... | @yifehuan | open | 2026-11-25 | 2026-11-27 |
| [#3862](https://github.com/ROCm/ATOM/pull/3862) | ci: maintainer-only manual runs; heavy-CI evaluator in shado... | @valarLip | open | 2026-11-25 | 2026-11-27 |
| [#3582](https://github.com/ROCm/ATOM/pull/3582) | Split qualified Kimi KDA prefill input projections | @whx-sjtu | open | 2026-11-19 | 2026-11-27 |
| [#3679](https://github.com/ROCm/ATOM/pull/3679) | [ATOM gRPC] atomesh: route ATOM requests over the Session (-... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3677](https://github.com/ROCm/ATOM/pull/3677) | [ATOM gRPC] atomesh: structured output to ATOM gRPC workers;... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3678](https://github.com/ROCm/ATOM/pull/3678) | [ATOM gRPC] atomesh: the Session link to an ATOM instance | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3676](https://github.com/ROCm/ATOM/pull/3676) | [ATOM gRPC] atomesh: discover ATOM gRPC workers and run ATOM... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3773](https://github.com/ROCm/ATOM/pull/3773) | perf(pd): negotiated P/D early handoff, overlap the P->D KV ... | @ZhangLirong-amd | open | 2026-11-24 | 2026-11-27 |
| [#3620](https://github.com/ROCm/ATOM/pull/3620) | feat(mesh): UMBP share groups 2/2 — cache_aware counts prefi... | @wanzhenchn | open | 2026-11-20 | 2026-11-27 |
| [#3946](https://github.com/ROCm/ATOM/pull/3946) | feat(mesh): UMBP share groups 1/2 — ATOM's reports and the r... | @wanzhenchn | open | 2026-11-27 | 2026-11-27 |
| [#3772](https://github.com/ROCm/ATOM/pull/3772) | perf(offload): event-driven tier-load wait ahead of schedule... | @ZhangLirong-amd | open | 2026-11-24 | 2026-11-27 |
| [#3403](https://github.com/ROCm/ATOM/pull/3403) | [Scheduler] Prefill initial ramp for a positive decode inter... | @JiaoliangYu | open | 2026-11-16 | 2026-11-27 |
| [#3929](https://github.com/ROCm/ATOM/pull/3929) |  [rollout] Requantize FP8 experts in an RL weight sync | @xysheng-AMD | open | 2026-11-27 | 2026-11-27 |
| [#3949](https://github.com/ROCm/ATOM/pull/3949) | [PP][Kimi-K3] PP mailbox: stage handoff without NCCL send/re... | @zejunchen-zejun | draft | 2026-11-27 | 2026-11-27 |
| [#3948](https://github.com/ROCm/ATOM/pull/3948) | [PP][Kimi-K3] PP mailbox: stage handoff without NCCL send/re... | @zejunchen-zejun | open | 2026-11-27 | 2026-11-27 |
| [#3865](https://github.com/ROCm/ATOM/pull/3865) | [P/D] Send process: a Mooncake producer's send path over a s... | @Jasen2201 | open | 2026-11-26 | 2026-11-27 |
| [#3354](https://github.com/ROCm/ATOM/pull/3354) | [MLA] Prefill K concat as one Triton copy instead of torch.c... | @JiaoliangYu | open | 2026-11-14 | 2026-11-27 |
| [#3866](https://github.com/ROCm/ATOM/pull/3866) | [P/D] ATOM_PD_SEND_PROCESS: send a MiniMax PP stage's KV fro... | @Jasen2201 | open | 2026-11-26 | 2026-11-27 |
| [#3510](https://github.com/ROCm/ATOM/pull/3510) | [MiniMax-M3.1] Prefill TBO (DBO) under pure TP | @zhuyuhua-v | open | 2026-11-18 | 2026-11-27 |
| [#3628](https://github.com/ROCm/ATOM/pull/3628) | Fuse Kimi ReplaySSM decode and verify with convolution and g... | @whx-sjtu | open | 2026-11-20 | 2026-11-27 |
| [#3101](https://github.com/ROCm/ATOM/pull/3101) | [feature] LeapQuant for GDN: int8 recurrent state, with pref... | @haoyangli0109 | open | 2026-11-09 | 2026-11-27 |
| [#3944](https://github.com/ROCm/ATOM/pull/3944) | fix(engram): mark the page-locked host shards MADV_NOHUGEPAG... | @demonsan | open | 2026-11-27 | 2026-11-27 |
| [#3675](https://github.com/ROCm/ATOM/pull/3675) | [ATOM gRPC] atomesh: an ATOM gRPC client, ATOM's protos in e... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3498](https://github.com/ROCm/ATOM/pull/3498) | MLA decode: fuse K-up GEMM + q_pe RoPE + KV-cache write into... | @JiaoliangYu | open | 2026-11-18 | 2026-11-27 |
| [#3496](https://github.com/ROCm/ATOM/pull/3496) | MLA decode: let the K-up GEMM write q_nope straight into q_o... | @JiaoliangYu | open | 2026-11-18 | 2026-11-27 |
| [#3674](https://github.com/ROCm/ATOM/pull/3674) | [ATOM gRPC] The Session RPC: many requests on one stream, on... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3761](https://github.com/ROCm/ATOM/pull/3761) | Atom plugin poc | @demonsan | draft | 2026-11-24 | 2026-11-27 |
| [#3673](https://github.com/ROCm/ATOM/pull/3673) | [ATOM gRPC] The atom.grpc.v1 service: proto, generated modul... | @Jasen2201 | open | 2026-11-21 | 2026-11-27 |
| [#3644](https://github.com/ROCm/ATOM/pull/3644) | perf(dp): opt-in short-first prefill and confirmed prefix-ow... | @xytpai | open | 2026-11-20 | 2026-11-27 |
| [#3943](https://github.com/ROCm/ATOM/pull/3943) | [ReplaySSM] Use BV16 for the measured gfx942 single-sequence... | @ZLkanyo009 | draft | 2026-11-27 | 2026-11-27 |
| [#3578](https://github.com/ROCm/ATOM/pull/3578) | feat(mesh): session affinity 1/4 — dp_sticky releases a sess... | @MengqingCao | open | 2026-11-19 | 2026-11-27 |
| [#3942](https://github.com/ROCm/ATOM/pull/3942) | [SGLang] Batch ReplaySSM radix materialization across compat... | @ZLkanyo009 | draft | 2026-11-27 | 2026-11-27 |
| [#3938](https://github.com/ROCm/ATOM/pull/3938) | perf(dsv41): route V4.1 decode steps (<=128 rows) in one lau... | @yhl-amd | open | 2026-11-27 | 2026-11-27 |
| [#3939](https://github.com/ROCm/ATOM/pull/3939) | [DSV4.1] DSpark: DP-shard the draft head under ATOM_DP_DRAFT... | @yhl-amd | open | 2026-11-27 | 2026-11-27 |
| [#3940](https://github.com/ROCm/ATOM/pull/3940) | perf(dsv41): the FFN seam writes the shared expert's MXFP8 i... | @yhl-amd | draft | 2026-11-27 | 2026-11-27 |
| [#3898](https://github.com/ROCm/ATOM/pull/3898) | Kimi-K3.1 KDA prefill glue: fused state and input gathers, r... | @whx-sjtu | draft | 2026-11-26 | 2026-11-27 |
| [#3408](https://github.com/ROCm/ATOM/pull/3408) | feat(mesh): declare encode workers beside prefill and decode | @junyyang-amd | open | 2026-11-16 | 2026-11-27 |
| [#3525](https://github.com/ROCm/ATOM/pull/3525) | feat(mesh): session affinity 4/4 — the session table around ... | @MengqingCao | open | 2026-11-18 | 2026-11-27 |
| [#3206](https://github.com/ROCm/ATOM/pull/3206) | feat(mesh): session affinity 3/4 — configurable session keys... | @MengqingCao | open | 2026-11-11 | 2026-11-27 |
| [#3579](https://github.com/ROCm/ATOM/pull/3579) | refactor(mesh): session affinity 2/4 — a session table aroun... | @MengqingCao | open | 2026-11-19 | 2026-11-27 |
| [#3877](https://github.com/ROCm/ATOM/pull/3877) | feat(weight_cache): stop/load in place, one daemon entry, mo... | @HaonanWang98 | draft | 2026-11-26 | 2026-11-27 |
| [#3431](https://github.com/ROCm/ATOM/pull/3431) | [Sgl Atom][Native][perf] cut Qwen4Exp prefill host overhead:... | @ZLkanyo009 | draft | 2026-11-16 | 2026-11-27 |
| [#3847](https://github.com/ROCm/ATOM/pull/3847) | [atomrl] Sync framework plugin integrations | @ZhangDanyang-AMD | open | 2026-11-25 | 2026-11-27 |
| [#3930](https://github.com/ROCm/ATOM/pull/3930) | MiniMax-M3.1: MegaMoE decode with SwiGLU-OAI, per-model BF16... | @MengqingCao | open | 2026-11-27 | 2026-11-27 |
| [#3937](https://github.com/ROCm/ATOM/pull/3937) | [atomrl] GRPOPerf: NeMo-RL v0.8's GRPO performance cases on ... | @xysheng-AMD | open | 2026-11-27 | 2026-11-27 |
| [#3718](https://github.com/ROCm/ATOM/pull/3718) | [Native][SGLang] Zero padded recurrent attention outputs | @ZLkanyo009 | open | 2026-11-23 | 2026-11-27 |
| [#3415](https://github.com/ROCm/ATOM/pull/3415) | ci(atomesh): M3.1 image case in models_atomesh.yaml and its ... | @junyyang-amd | open | 2026-11-16 | 2026-11-27 |
| [#3409](https://github.com/ROCm/ATOM/pull/3409) | feat(mesh): run E before P for image chat requests, falling ... | @junyyang-amd | open | 2026-11-16 | 2026-11-27 |
| [#3934](https://github.com/ROCm/ATOM/pull/3934) | perf(lm-head): TDM-streamed LM head for decode rows on gfx12... | @XiaobingSuper | draft | 2026-11-27 | 2026-11-27 |
| [#3511](https://github.com/ROCm/ATOM/pull/3511) | [MiniMax-M3.1] Sequence-parallel prefill under pure TP | @zhuyuhua-v | open | 2026-11-18 | 2026-11-27 |
| [#3700](https://github.com/ROCm/ATOM/pull/3700) | fix(state): evict PAGE state checkpoints in one LRU with cac... | @qichu-yun | open | 2026-11-22 | 2026-11-27 |
| [#3896](https://github.com/ROCm/ATOM/pull/3896) | Kimi-K3.1 KDA prefill: tiled/sliding conv, paged state, Flas... | @whx-sjtu | draft | 2026-11-26 | 2026-11-27 |
| [#3925](https://github.com/ROCm/ATOM/pull/3925) | review-pr: add N7 from ATOM#3353 — no mode-specific attribut... | @yhl-amd | open | 2026-11-27 | 2026-11-27 |
| [#2493](https://github.com/ROCm/ATOM/pull/2493) | [MiniMax-M3] Score the lightning indexer with aiter's FlyDSL... | @ganyi1996ppo | open | 2026-10-08 | 2026-11-27 |
| [#3901](https://github.com/ROCm/ATOM/pull/3901) | [State] Rebuildable per-request state: window-bounded hits, ... | @Jasen2201 | open | 2026-11-26 | 2026-11-27 |
| [#3615](https://github.com/ROCm/ATOM/pull/3615) | Build DCP FP4 staging indices once per forward | @whx-sjtu | open | 2026-11-20 | 2026-11-27 |
| [#3566](https://github.com/ROCm/ATOM/pull/3566) | fix(mesh): sample power_of_two load per instance and drop fa... | @MengqingCao | open | 2026-11-19 | 2026-11-27 |
| [#3564](https://github.com/ROCm/ATOM/pull/3564) | feat(minimax-m3): DSpark block attention with several KV hea... | @XiaobingSuper | open | 2026-11-19 | 2026-11-27 |
| [#3495](https://github.com/ROCm/ATOM/pull/3495) | perf(minimax-m3): plan cached sparse prefill by prefix satur... | @XiaobingSuper | open | 2026-11-18 | 2026-11-27 |
| [#3513](https://github.com/ROCm/ATOM/pull/3513) | feat(pd): MoRIIO P/D KV over the UALoE fabric for MiniMax-M3... | @Yuechguo | open | 2026-11-18 | 2026-11-27 |
| [#2904](https://github.com/ROCm/ATOM/pull/2904) | feat(minimax-m3): record prefill as token graphs | @lirui927 | open | 2026-11-02 | 2026-11-27 |
| [#2616](https://github.com/ROCm/ATOM/pull/2616) | fix(moe): keep the shared expert unfused on MegaMoE's MoRI d... | @XiaobingSuper | open | 2026-10-16 | 2026-11-27 |
| [#3935](https://github.com/ROCm/ATOM/pull/3935) | [MiniMax-M3.1] gfx1250 C4 decode launches under mono/gfx1250... | @XiaobingSuper | draft | 2026-11-27 | 2026-11-27 |
| [#3783](https://github.com/ROCm/ATOM/pull/3783) | [MiniMax-M3] Prefill token graphs for the sparse-attention b... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#2126](https://github.com/ROCm/ATOM/pull/2126) | fix kimi k3 piecewise cudagraph | @ganyi1996ppo | draft | 2026-09-03 | 2026-11-27 |
| [#3622](https://github.com/ROCm/ATOM/pull/3622) | Reuse native sparse DCP decode plans across layers | @whx-sjtu | open | 2026-11-20 | 2026-11-27 |
| [#3417](https://github.com/ROCm/ATOM/pull/3417) | docs: ATOMesh multimodal image requests and E/P/D disaggrega... | @junyyang-amd | open | 2026-11-16 | 2026-11-27 |
| [#3778](https://github.com/ROCm/ATOM/pull/3778) | [MLA] bf16 sparse prefill: run on mla_decode_fwd, drop asm m... | @yitingw1 | open | 2026-11-24 | 2026-11-27 |
| [#3194](https://github.com/ROCm/ATOM/pull/3194) | [Offload] umbp_store: KV offload over a Mori UMBP standalone... | @yhl-amd | open | 2026-11-11 | 2026-11-27 |
| [#3455](https://github.com/ROCm/ATOM/pull/3455) | feat(umbp_store): server-side group eviction — LinkGroup + p... | @TianDi101 | open | 2026-11-17 | 2026-11-27 |
| [#3421](https://github.com/ROCm/ATOM/pull/3421) | [Offload] Extend UMBP Store with shared-prefix routing and e... | @ZhangLirong-amd | draft | 2026-11-16 | 2026-11-27 |
| [#3760](https://github.com/ROCm/ATOM/pull/3760) | [DSV4.1] FP8 KV cache on gfx942 without AITER MXFP8 sparse a... | @bobofang11235 | open | 2026-11-24 | 2026-11-27 |
| [#3713](https://github.com/ROCm/ATOM/pull/3713) | perf(minimax-m3): prefill index block scores through aiter's... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-27 |
| [#3931](https://github.com/ROCm/ATOM/pull/3931) | perf(minimax-m3): opt-in FlyDSL decode indexer on the NVFP4 ... | @lirui927 | draft | 2026-11-27 | 2026-11-27 |
| [#3881](https://github.com/ROCm/ATOM/pull/3881) | Profile DP-unified decode and bound mixed attention workspac... | @jiayyu | open | 2026-11-26 | 2026-11-27 |
| [#3828](https://github.com/ROCm/ATOM/pull/3828) | feat(kv): opt into native L1 FABRIC sharing across trays | @wuyl1 | open | 2026-11-25 | 2026-11-27 |
| [#3491](https://github.com/ROCm/ATOM/pull/3491) | [gfx1250] NVFP4 MLA KV cache and decode for DeepSeek-R1 | @yzhou103 | open | 2026-11-18 | 2026-11-27 |
| [#3863](https://github.com/ROCm/ATOM/pull/3863) | perf(spec): make a sampled verify step's picks in one aiter ... | @yhl-amd | draft | 2026-11-25 | 2026-11-27 |
| [#3906](https://github.com/ROCm/ATOM/pull/3906) | MiniMax-M3.1: DSpark draft at attention TP1; refuse indexer ... | @MengqingCao | open | 2026-11-26 | 2026-11-27 |
| [#3920](https://github.com/ROCm/ATOM/pull/3920) | [DeepSeek-V4.1] Mono TP4: run the 12-row width token paralle... | @yhl-amd | open | 2026-11-27 | 2026-11-27 |
| [#3880](https://github.com/ROCm/ATOM/pull/3880) | [AtomRL] Release the full-model staging memory after FSDP2 s... | @wenchenvincent | open | 2026-11-26 | 2026-11-27 |
| [#3367](https://github.com/ROCm/ATOM/pull/3367) | ci(atomesh): kv_events suite — GLM-5.2 1P1D agentic cells ro... | @wanzhenchn | draft | 2026-11-15 | 2026-11-27 |
| [#3429](https://github.com/ROCm/ATOM/pull/3429) | [Sgl Atom][Native][perf] cut Qwen4Exp prefill host overhead:... | @ZLkanyo009 | open | 2026-11-16 | 2026-11-27 |
| [#2903](https://github.com/ROCm/ATOM/pull/2903) | [DSV4.1][Perf] Fuse Q RoPE/quant, sparse attention and outpu... | @yzhou103 | open | 2026-11-02 | 2026-11-27 |
| [#3739](https://github.com/ROCm/ATOM/pull/3739) | perf(qwen38): Triton router top-k and fused hyper-connection... | @minmengdie | open | 2026-11-23 | 2026-11-27 |
| [#3924](https://github.com/ROCm/ATOM/pull/3924) | fix(engine): class-level defaults for _greedy_ids_only / is_... | @ganyi1996ppo | open | 2026-11-27 | 2026-11-27 |
| [#3636](https://github.com/ROCm/ATOM/pull/3636) | Restore Kimi-K3.1 token graphs and qualify zero-addend stora... | @whx-sjtu | open | 2026-11-20 | 2026-11-27 |
| [#3637](https://github.com/ROCm/ATOM/pull/3637) | Merge Kimi BF16 MoE front and combine its reductions | @whx-sjtu | open | 2026-11-20 | 2026-11-27 |
| [#2814](https://github.com/ROCm/ATOM/pull/2814) | perf(kimi-k3): stream attn-res candidate rows through LDS wi... | @yanxuer-999 | open | 2026-10-29 | 2026-11-27 |
| [#3775](https://github.com/ROCm/ATOM/pull/3775) | [Scheduler] Opt-in prefill policies for decode-heavy serving... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#3923](https://github.com/ROCm/ATOM/pull/3923) | [PP] Draft K3 same-host IPC transport with CPU completion me... | @ZLkanyo009 | draft | 2026-11-27 | 2026-11-27 |
| [#2661](https://github.com/ROCm/ATOM/pull/2661) | [DSpark] let --max-num-seqs 1 start: size the engine for 2, ... | @ganyi1996ppo | open | 2026-10-21 | 2026-11-27 |
| [#3512](https://github.com/ROCm/ATOM/pull/3512) | feat(moe): TP MegaMoE under --moe-backend mega (reuses the S... | @ganyi1996ppo | draft | 2026-11-18 | 2026-11-27 |
| [#3443](https://github.com/ROCm/ATOM/pull/3443) | perf(dsv41): write the DSpark input taps straight into the d... | @yhl-amd | open | 2026-11-16 | 2026-11-27 |
| [#3922](https://github.com/ROCm/ATOM/pull/3922) | Perf/kda conv1d opt | @yanxuer-999 | draft | 2026-11-27 | 2026-11-27 |
| [#3444](https://github.com/ROCm/ATOM/pull/3444) | perf(h2d): upload only the block-table rows the device lacks... | @yhl-amd | open | 2026-11-16 | 2026-11-27 |
| [#3852](https://github.com/ROCm/ATOM/pull/3852) | perf(minimax-m3): DSpark Markov chain of one request in one ... | @XiaobingSuper | open | 2026-11-25 | 2026-11-27 |
| [#3643](https://github.com/ROCm/ATOM/pull/3643) | ci(sglang): add MI308 Qwen3.8 and Qwen3.5 PTPC cases (base, ... | @yicyang | draft | 2026-11-20 | 2026-11-27 |
| [#3831](https://github.com/ROCm/ATOM/pull/3831) | perf(deepseek-v41): fuse and capture quantized prefill atten... | @yzhou103 | open | 2026-11-25 | 2026-11-27 |
| [#3910](https://github.com/ROCm/ATOM/pull/3910) | feat(mesh): serve P/D legs from ATOM standalone's Rust front... | @Yuechguo | open | 2026-11-26 | 2026-11-27 |
| [#3492](https://github.com/ROCm/ATOM/pull/3492) | DeepSeek MLA: fuse q_a + kv_a RMSNorm and q_b's MXFP4 quant ... | @JiaoliangYu | open | 2026-11-18 | 2026-11-27 |
| [#3788](https://github.com/ROCm/ATOM/pull/3788) | [MiniMax-M3] Prefill index top-16 through topk_per_row_small... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#3806](https://github.com/ROCm/ATOM/pull/3806) | MiniMax-M3: sparse decode attention writes o_proj's MXFP8 in... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-27 |
| [#3724](https://github.com/ROCm/ATOM/pull/3724) | [MiniMax-M3.1] Step watchdog and GPU guard for Mono decode s... | @ganyi1996ppo | draft | 2026-11-23 | 2026-11-27 |
| [#3919](https://github.com/ROCm/ATOM/pull/3919) | feat(kv): Mooncake P/D over a shared umbp_pool, and scheduli... | @TianDi101 | draft | 2026-11-27 | 2026-11-27 |
| [#3890](https://github.com/ROCm/ATOM/pull/3890) | feat(mesh): power_of_two reads vLLM /metrics load per url@ra... | @MengqingCao | open | 2026-11-26 | 2026-11-27 |
| [#3567](https://github.com/ROCm/ATOM/pull/3567) | feat(mesh): charge decode least_load when the request is sel... | @MengqingCao | open | 2026-11-19 | 2026-11-27 |
| [#3861](https://github.com/ROCm/ATOM/pull/3861) | feat(mesh): charge non-streaming single-worker prefill, rele... | @MengqingCao | open | 2026-11-25 | 2026-11-27 |
| [#3860](https://github.com/ROCm/ATOM/pull/3860) | feat(mesh): charge ext-proc and gRPC single-worker streaming... | @MengqingCao | open | 2026-11-25 | 2026-11-27 |
| [#3568](https://github.com/ROCm/ATOM/pull/3568) | ci(mesh): select agentic prefill and least_load decode on tw... | @MengqingCao | open | 2026-11-19 | 2026-11-27 |
| [#3406](https://github.com/ROCm/ATOM/pull/3406) | feat(mesh): agentic routing policy on the KV event index | @MengqingCao | open | 2026-11-16 | 2026-11-27 |
| [#3544](https://github.com/ROCm/ATOM/pull/3544) | fix(runner): a V4.1 mono hi server survives a prefill chunk ... | @PerryZhang01 | open | 2026-11-19 | 2026-11-27 |
| [#3800](https://github.com/ROCm/ATOM/pull/3800) | [MiniMax-M3.1] P/D prefill PP stage boundary over HIP IPC: S... | @Jasen2201 | open | 2026-11-24 | 2026-11-27 |
| [#3851](https://github.com/ROCm/ATOM/pull/3851) | perf(engine): cut decode-step host time: one capture check p... | @XiaobingSuper | open | 2026-11-25 | 2026-11-27 |
| [#3855](https://github.com/ROCm/ATOM/pull/3855) | perf(minimax-m3): DSpark draft block metadata in one launch | @XiaobingSuper | open | 2026-11-25 | 2026-11-27 |
| [#3856](https://github.com/ROCm/ATOM/pull/3856) | perf(minimax-m3): DSpark draft PA: window-sized splits, one ... | @XiaobingSuper | open | 2026-11-25 | 2026-11-27 |
| [#3876](https://github.com/ROCm/ATOM/pull/3876) | perf(dsv41): run gfx942 prefill mHC seams on a row kernel an... | @bobofang11235 | open | 2026-11-26 | 2026-11-27 |
| [#3908](https://github.com/ROCm/ATOM/pull/3908) | [3/N atomesh rust runtime] feat(mesh): msgspec EngineCore pr... | @Yuechguo | open | 2026-11-26 | 2026-11-27 |
| [#3447](https://github.com/ROCm/ATOM/pull/3447) | [Sampling] presence_penalty on decode and speculative-verify... | @vgokhale | open | 2026-11-16 | 2026-11-27 |
| [#3593](https://github.com/ROCm/ATOM/pull/3593) | feat(mesh): add native vLLM MoRI READ and WRITE routing | @whx-sjtu | draft | 2026-11-19 | 2026-11-26 |
| [#3894](https://github.com/ROCm/ATOM/pull/3894) | [DeepSeek-V4.1] MegaMoE: target layers hand their FP8 shared... | @yhl-amd | draft | 2026-11-26 | 2026-11-26 |
| [#2604](https://github.com/ROCm/ATOM/pull/2604) | fix(cudagraph): run the model runner on a High-priority stre... | @nehmathe2 | open | 2026-10-16 | 2026-11-26 |
| [#2959](https://github.com/ROCm/ATOM/pull/2959) | [Kimi-K3] Midstep KDA state checkpoints from the FlashKDA re... | @davzhuAMD | open | 2026-11-03 | 2026-11-26 |
| [#3905](https://github.com/ROCm/ATOM/pull/3905) | [PP] Opt in to receiving stage tensors on a separate stream | @ZLkanyo009 | draft | 2026-11-26 | 2026-11-26 |
| [#3911](https://github.com/ROCm/ATOM/pull/3911) | [4/N atomesh rust runtime] feat(engine): EngineCore and Core... | @Yuechguo | open | 2026-11-26 | 2026-11-26 |
| [#3912](https://github.com/ROCm/ATOM/pull/3912) | [5/N atomesh rust runtime] feat(atomesh): --engine-dispatch ... | @Yuechguo | open | 2026-11-26 | 2026-11-26 |
| [#3903](https://github.com/ROCm/ATOM/pull/3903) | [MiniMax-M3.1] DSpark draft window kept as per-request state | @Jasen2201 | open | 2026-11-26 | 2026-11-26 |
| [#3907](https://github.com/ROCm/ATOM/pull/3907) | P/D: skip the failed-write hold when no prefill stage wrote ... | @MengqingCao | draft | 2026-11-26 | 2026-11-26 |
| [#3902](https://github.com/ROCm/ATOM/pull/3902) | [Mooncake Store] A per-request state tier: checkpoint images... | @Jasen2201 | open | 2026-11-26 | 2026-11-26 |
| [#3897](https://github.com/ROCm/ATOM/pull/3897) | [MiniMax-M3] TP 1 norms write the native MXFP8 linear's inpu... | @lirui927 | draft | 2026-11-26 | 2026-11-26 |
| [#3812](https://github.com/ROCm/ATOM/pull/3812) | [MiniMax-M3.1] SP prefill: o_proj all-to-all through aiter's... | @ganyi1996ppo | open | 2026-11-25 | 2026-11-26 |
| [#3811](https://github.com/ROCm/ATOM/pull/3811) | [MiniMax-M3.1] SP prefill: read moe.fhmoe with getattr (FHMo... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3808](https://github.com/ROCm/ATOM/pull/3808) | [MiniMax-M3.1] SP prefill: norm + quant hand-off chains thro... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3807](https://github.com/ROCm/ATOM/pull/3807) | [MiniMax-M3.1] SP prefill glue: routed scale + shared add in... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3805](https://github.com/ROCm/ATOM/pull/3805) | [MiniMax-M3.1] SP prefill: owner-local shared expert (ATOM_M... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3895](https://github.com/ROCm/ATOM/pull/3895) | [Kimi-K3.1] Mono decode: lean rebuilds for spilled widths, K... | @whx-sjtu | draft | 2026-11-26 | 2026-11-26 |
| [#3638](https://github.com/ROCm/ATOM/pull/3638) | Port Kimi column-tail and auxiliary dataflow to main | @whx-sjtu | open | 2026-11-20 | 2026-11-26 |
| [#3432](https://github.com/ROCm/ATOM/pull/3432) | [Sgl Atom][perf] read FlyDSL's VK GDN chunk states in place ... | @ZLkanyo009 | open | 2026-11-16 | 2026-11-26 |
| [#3587](https://github.com/ROCm/ATOM/pull/3587) | Row-shard Kimi attention residual and latent MoE tail | @whx-sjtu | open | 2026-11-19 | 2026-11-26 |
| [#3785](https://github.com/ROCm/ATOM/pull/3785) | [MiniMax-M3] NVFP4 decode: let the attention select the inde... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3787](https://github.com/ROCm/ATOM/pull/3787) | [MiniMax-M3] Decode MoE through aiter's mega_moe_tp decode o... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#3888](https://github.com/ROCm/ATOM/pull/3888) | [SGL ATOM] Upgrade SGLang to 0.5.23 | @zhangxinyuanliuhengyu | draft | 2026-11-26 | 2026-11-26 |
| [#3886](https://github.com/ROCm/ATOM/pull/3886) | feat(kv): umbp_pool under tensor-parallel attention, and for... | @TianDi101 | draft | 2026-11-26 | 2026-11-26 |
| [#3611](https://github.com/ROCm/ATOM/pull/3611) | perf(minimax-m3): feed native MXFP8 linears from the fused A... | @XiaobingSuper | open | 2026-11-20 | 2026-11-26 |
| [#3882](https://github.com/ROCm/ATOM/pull/3882) | [gfx1250] Mxfp4 MoE: shuffle weight and scale with moe_shuff... | @Boss2002n | draft | 2026-11-26 | 2026-11-26 |
| [#3727](https://github.com/ROCm/ATOM/pull/3727) | Fix FP8 block MoE loading for TP shards smaller than a quant... | @ZLkanyo009 | open | 2026-11-23 | 2026-11-26 |
| [#3790](https://github.com/ROCm/ATOM/pull/3790) | docs(recipes): MiniMax-M3.1 TP4 AgentX opt-in flags and the ... | @ganyi1996ppo | open | 2026-11-24 | 2026-11-26 |
| [#1879](https://github.com/ROCm/ATOM/pull/1879) | Optimize statecache and prefix caching strategy for Mamba li... | @ganyi1996ppo | open | 2026-08-13 | 2026-11-26 |
| [#1947](https://github.com/ROCm/ATOM/pull/1947) | state checkpoint port optimized | @ganyi1996ppo | open | 2026-08-19 | 2026-11-26 |
| [#2629](https://github.com/ROCm/ATOM/pull/2629) | follow-up(#2535): mono review items that need no GPU | @ganyi1996ppo | open | 2026-10-19 | 2026-11-26 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-11-26 |
| [#1842](https://github.com/ROCm/ATOM/pull/1842) | perf(kimi-k3): fuse the KDA prefill gather, scatter, and out... | @ganyi1996ppo | open | 2026-08-10 | 2026-11-26 |
| [#2024](https://github.com/ROCm/ATOM/pull/2024) | state checkpoint superblock | @ganyi1996ppo | open | 2026-08-26 | 2026-11-26 |
| [#2158](https://github.com/ROCm/ATOM/pull/2158) | [Scheduler] Shortest-job-first prefill admission to cut p90 ... | @ganyi1996ppo | open | 2026-09-07 | 2026-11-26 |
| [#3810](https://github.com/ROCm/ATOM/pull/3810) | [M3] decode: QKV front chain window 17-64 -> 17-128 rows (-0... | @ganyi1996ppo | draft | 2026-11-24 | 2026-11-26 |
| [#3809](https://github.com/ROCm/ATOM/pull/3809) | [M3] decode: 17-64 row QKV front chain (quantize in the line... | @ganyi1996ppo | draft | 2026-11-24 | 2026-11-26 |
| [#2274](https://github.com/ROCm/ATOM/pull/2274) | [atom-rl] Enable Rollout Router Replay (R3) | @sudhu2k | open | 2026-09-17 | 2026-11-26 |
| [#3878](https://github.com/ROCm/ATOM/pull/3878) | feat(dsv41 mono): serve EPLB without redundant experts | @JiaoliangYu | draft | 2026-11-26 | 2026-11-26 |
| [#3789](https://github.com/ROCm/ATOM/pull/3789) | [DSpark] ATOM_DSPARK_BLOCK_BS_LADDER pins the draft block's ... | @ganyi1996ppo | draft | 2026-11-24 | 2026-11-26 |
| [#3723](https://github.com/ROCm/ATOM/pull/3723) | [MiniMax-M3.1] DSpark draft: Gemma RMSNorm writes the MXFP8 ... | @ganyi1996ppo | draft | 2026-11-23 | 2026-11-26 |
| [#3722](https://github.com/ROCm/ATOM/pull/3722) | [MiniMax-M3.1] DSpark block: metadata and embedding in one k... | @ganyi1996ppo | draft | 2026-11-23 | 2026-11-26 |
| [#1926](https://github.com/ROCm/ATOM/pull/1926) | perf(eplb): remove shared-expert cold-start and decode overh... | @JiaoliangYu | open | 2026-08-17 | 2026-11-26 |
| [#3540](https://github.com/ROCm/ATOM/pull/3540) | fix(tests): the freeze, load-counter and Mooncake-port tests... | @PerryZhang01 | open | 2026-11-19 | 2026-11-26 |
| [#3845](https://github.com/ROCm/ATOM/pull/3845) | feat(eplb): gate-permute EPLB with a swap policy, no redunda... | @zhiding512 | draft | 2026-11-25 | 2026-11-26 |
| [#3870](https://github.com/ROCm/ATOM/pull/3870) | [Qwen3.5/3.6 recipe] 2026-11-25: GDN verify occupancy, MoE e... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#3869](https://github.com/ROCm/ATOM/pull/3869) | [gfx1250][Qwen3.5] Mixed prefill + decode steps (opt-in ATOM... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#3868](https://github.com/ROCm/ATOM/pull/3868) | [gfx1250][Qwen3.5] Low-concurrency decode: 9 fewer ops per s... | @azaidy | open | 2026-11-26 | 2026-11-26 |
| [#3757](https://github.com/ROCm/ATOM/pull/3757) | [Feature] IQ2R glm53_moe: load IQ2R-v2 checkpoints (glm53-pa... | @ssharma4-amd | open | 2026-11-23 | 2026-11-26 |
| [#3791](https://github.com/ROCm/ATOM/pull/3791) | [MiniMax-M3.1] Sparse prefill on the GQA-16 ASM kernel; gfx9... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3794](https://github.com/ROCm/ATOM/pull/3794) | [MiniMax-M3.1] TP1 prefill: aiter qknorm_v3 for the q/k/inde... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3795](https://github.com/ROCm/ATOM/pull/3795) | [MiniMax-M3.1] Token-tiled sparse prefill attention at TP1 f... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3796](https://github.com/ROCm/ATOM/pull/3796) | [MiniMax-M3.1] TP1 decoder layer: fused add+RMSNorm with MXF... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3801](https://github.com/ROCm/ATOM/pull/3801) | [MiniMax-M3.1] DSpark draft context K/V at TP1: one stacked ... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3859](https://github.com/ROCm/ATOM/pull/3859) | perf(minimax-m3): DSpark draft layer as two launches around ... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#3858](https://github.com/ROCm/ATOM/pull/3858) | perf(engine): DSpark decode: take the previous verdict on th... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#3857](https://github.com/ROCm/ATOM/pull/3857) | NVFP4 MLA decode: KV-only update and Q RoPE in the decoder b... | @JiaoliangYu | draft | 2026-11-25 | 2026-11-25 |
| [#3647](https://github.com/ROCm/ATOM/pull/3647) | fix(scheduler): adaptive prefill admission: keep the decode-... | @yhl-amd | draft | 2026-11-20 | 2026-11-25 |
| [#3445](https://github.com/ROCm/ATOM/pull/3445) | perf(engram): split the cached UVA gather into a device pass... | @yhl-amd | draft | 2026-11-16 | 2026-11-25 |
| [#3441](https://github.com/ROCm/ATOM/pull/3441) | perf(engram): give the Engram side stream a hardware queue o... | @yhl-amd | draft | 2026-11-16 | 2026-11-25 |
| [#3440](https://github.com/ROCm/ATOM/pull/3440) | perf(engram): keep a set-associative HBM cache of the UVA ta... | @yhl-amd | draft | 2026-11-16 | 2026-11-25 |
| [#2855](https://github.com/ROCm/ATOM/pull/2855) | perf(attn): unified attention for prefix-hit FP8 prefill + s... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2854](https://github.com/ROCm/ATOM/pull/2854) | Qwen3.5 MTP: gather the fc output with aiter's custom all-ga... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2853](https://github.com/ROCm/ATOM/pull/2853) | Qwen3.5 MTP: capture draft mid-steps (MRoPE opt-in) and reus... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2852](https://github.com/ROCm/ATOM/pull/2852) | perf(qwen3.5): prefill all-reduce + norm via INT4 quick-redu... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2851](https://github.com/ROCm/ATOM/pull/2851) | perf(qwen3.5): compute the GDN gate inside the ReplaySSM ker... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2845](https://github.com/ROCm/ATOM/pull/2845) | perf(flydsl pa_decode): head-256 batch-1/2 plan ceiling and ... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2843](https://github.com/ROCm/ATOM/pull/2843) | fix(attention): keep MTP-5 decode on FlyDSL pa_decode past t... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2842](https://github.com/ROCm/ATOM/pull/2842) | fix(state checkpoints): keep block 0 a zero null page and ze... | @ZhiweiYan-96 | draft | 2026-10-30 | 2026-11-25 |
| [#2726](https://github.com/ROCm/ATOM/pull/2726) | fix(dsv4): make Mono refusal safe and bound peer waits | @yifehuan | draft | 2026-10-26 | 2026-11-25 |
| [#2585](https://github.com/ROCm/ATOM/pull/2585) | Test ATOM accuracy on DI MI350X8 runner | @gyohuangxin | draft | 2026-10-15 | 2026-11-25 |
| [#2222](https://github.com/ROCm/ATOM/pull/2222) | perf(loader): separate streaming and drain concurrency | @JiaoliangYu | draft | 2026-09-14 | 2026-11-25 |
| [#1952](https://github.com/ROCm/ATOM/pull/1952) | perf(dsv4): let low-concurrency serving turn the side stream... | @zufayu | draft | 2026-08-19 | 2026-11-25 |
| [#3837](https://github.com/ROCm/ATOM/pull/3837) | perf(dp): share_cache places a request by the lockstep step ... | @yhl-amd | draft | 2026-11-25 | 2026-11-25 |
| [#3460](https://github.com/ROCm/ATOM/pull/3460) | feat(v4): enable TBO for mixed prefill/decode batches | @jiayyu | draft | 2026-11-17 | 2026-11-25 |
| [#3619](https://github.com/ROCm/ATOM/pull/3619) | perf(minimax-m3): fuse SwiGLU-OAI with the down projection's... | @XiaobingSuper | open | 2026-11-20 | 2026-11-25 |
| [#3762](https://github.com/ROCm/ATOM/pull/3762) | fix(pd): a failed Mooncake write frees prefill's pages, and ... | @Phi-C | open | 2026-11-24 | 2026-11-25 |
| [#3853](https://github.com/ROCm/ATOM/pull/3853) | perf(minimax-m3): Stage O: o_proj + post-attention AR + RMSN... | @XiaobingSuper | draft | 2026-11-25 | 2026-11-25 |
| [#3835](https://github.com/ROCm/ATOM/pull/3835) | moriio: incremental push and held-prefix verify on the fabri... | @lirui927 | draft | 2026-11-25 | 2026-11-25 |
| [#3488](https://github.com/ROCm/ATOM/pull/3488) | GFX1250 PD fix | @zejunchen-zejun | draft | 2026-11-18 | 2026-11-25 |
| [#2980](https://github.com/ROCm/ATOM/pull/2980) | feat(k3-mono): read FP8 dense projections in place | @rebklee | open | 2026-11-04 | 2026-11-25 |
| [#3833](https://github.com/ROCm/ATOM/pull/3833) | Default ATOM_MORI_V2 to on for gfx1250 | @lirui927 | draft | 2026-11-25 | 2026-11-25 |
| [#3832](https://github.com/ROCm/ATOM/pull/3832) | PP: receive and send stage payloads through resident row-bou... | @lirui927 | draft | 2026-11-25 | 2026-11-25 |
| [#3554](https://github.com/ROCm/ATOM/pull/3554) | [MLA] [gfx1250] Write BF16 prefill K/V in final layout | @XiaobingSuper | draft | 2026-11-19 | 2026-11-25 |
| [#3640](https://github.com/ROCm/ATOM/pull/3640) | perf(minimax-m3): overlap independent shared and routed MoE | @XiaobingSuper | draft | 2026-11-20 | 2026-11-25 |
| [#3702](https://github.com/ROCm/ATOM/pull/3702) | perf(offload): ship in-process LMCache saves as pre-hashed c... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#3709](https://github.com/ROCm/ATOM/pull/3709) | perf(minimax-m3): o_proj on the NVFP4 PA's MXFP8 output thro... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#3710](https://github.com/ROCm/ATOM/pull/3710) | perf(minimax-m3): run the decode QKV chain as one aiter laun... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#3711](https://github.com/ROCm/ATOM/pull/3711) | perf(minimax-m3): merge the NVFP4 sparse decode's top-k wind... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#3712](https://github.com/ROCm/ATOM/pull/3712) | perf(minimax-m3): NVFP4 sparse prefill through aiter's K/V-r... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-25 |
| [#3026](https://github.com/ROCm/ATOM/pull/3026) | [ATOMesh][DI][CI] Add DeepSeek-V4-Pro wide-EP MoRIIO write g... | @avininjamay8 | open | 2026-11-05 | 2026-11-25 |
| [#3629](https://github.com/ROCm/ATOM/pull/3629) | feat(kimi-k3.1): send a PP prefill's index cache to a DCP de... | @MengqingCao | open | 2026-11-20 | 2026-11-25 |
| [#3821](https://github.com/ROCm/ATOM/pull/3821) | [MiniMax-M3.1] TP1 prefill: aiter's one-launch MoE sort as a... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3820](https://github.com/ROCm/ATOM/pull/3820) | [MiniMax-M3.1] TP1 prefill: SwiGLU-OAI and down's MXFP8 quan... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3827](https://github.com/ROCm/ATOM/pull/3827) | [MiniMax-M3.1] P/D prefill producer under PP: small prefill ... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3826](https://github.com/ROCm/ATOM/pull/3826) | [MiniMax-M3.1] Startup warmup: build the step-size and atten... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3825](https://github.com/ROCm/ATOM/pull/3825) | [MiniMax-M3.1] gfx950 prefill top-k selector: rows of at mos... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3824](https://github.com/ROCm/ATOM/pull/3824) | [MiniMax-M3.1] Token-tiled prefill steps select without the ... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3823](https://github.com/ROCm/ATOM/pull/3823) | [MiniMax-M3.1] Token-tiled prefill: the step's row and tile ... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3822](https://github.com/ROCm/ATOM/pull/3822) | [MiniMax-M3.1] Token-tiled sparse prefill up to 64K context | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3819](https://github.com/ROCm/ATOM/pull/3819) | [MiniMax-M3.1] TP1 prefill: MoE route rows from aiter's 8-wa... | @Jasen2201 | draft | 2026-11-25 | 2026-11-25 |
| [#3799](https://github.com/ROCm/ATOM/pull/3799) | [MiniMax-M3.1] TP1 prefill: MoE route rows from aiter's ragg... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3798](https://github.com/ROCm/ATOM/pull/3798) | [MiniMax-M3.1] TP1 prefill: MoE per-route rows summed in the... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3797](https://github.com/ROCm/ATOM/pull/3797) | [MiniMax-M3.1] TP1 prefill: MXFP8 GEMMs read preshuffled e8m... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3793](https://github.com/ROCm/ATOM/pull/3793) | [MiniMax-M3.1] FP8 index prefill: aiter's fused scorer + top... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3792](https://github.com/ROCm/ATOM/pull/3792) | [MiniMax-M3.1] FP8 index prefill: one fixed score workspace ... | @Jasen2201 | draft | 2026-11-24 | 2026-11-25 |
| [#3555](https://github.com/ROCm/ATOM/pull/3555) | fix(sglang): support R-Fork (remote_instance) loading for Qw... | @yicyang | open | 2026-11-19 | 2026-11-25 |
| [#3814](https://github.com/ROCm/ATOM/pull/3814) | fix(mesh): resolve DeepSeek-V4.1 chat controls in ATOM's ord... | @wanzhenchn | open | 2026-11-25 | 2026-11-25 |
| [#2800](https://github.com/ROCm/ATOM/pull/2800) | Alizaidy/gfx1250 qwen support | @Boss2002n | draft | 2026-10-28 | 2026-11-25 |
| [#3625](https://github.com/ROCm/ATOM/pull/3625) | feat(kimi-k3.1): stage and land a PP stage's MLA rows and KD... | @MengqingCao | draft | 2026-11-20 | 2026-11-25 |
| [#3719](https://github.com/ROCm/ATOM/pull/3719) | [vLLM] Make the FlyDSL GDN opt-in require its dependency | @ZLkanyo009 | open | 2026-11-23 | 2026-11-25 |
| [#3763](https://github.com/ROCm/ATOM/pull/3763) | [Qwen3.8-Flash-Next] Run the QSA FlyDSL prefill attention un... | @zovonoir | open | 2026-11-24 | 2026-11-25 |
| [#3770](https://github.com/ROCm/ATOM/pull/3770) | fix(eplb): bring up the migration communicator at the first ... | @JiaoliangYu | open | 2026-11-24 | 2026-11-25 |
| [#3781](https://github.com/ROCm/ATOM/pull/3781) | fix(offload): cap failed-save retries so a broken Store clie... | @ZhangLirong-amd | open | 2026-11-24 | 2026-11-25 |
| [#3645](https://github.com/ROCm/ATOM/pull/3645) | perf(dsv41): DEP8 kernel/model integration and BF16 guards (... | @xytpai | draft | 2026-11-20 | 2026-11-24 |
| [#3639](https://github.com/ROCm/ATOM/pull/3639) | perf(dsv41): fuse draft embedding gather, indices and block ... | @xytpai | draft | 2026-11-20 | 2026-11-24 |
| [#2747](https://github.com/ROCm/ATOM/pull/2747) | docs(recipe): MiniMax-M3.1-Flash TP4 + DSpark AgentX recipe | @zhuyuhua-v | open | 2026-10-27 | 2026-11-24 |
| [#3228](https://github.com/ROCm/ATOM/pull/3228) | feat(moe): add DSv4.1 two-node EP16 MegaMoE | @JiaoliangYu | open | 2026-11-12 | 2026-11-24 |
| [#2953](https://github.com/ROCm/ATOM/pull/2953) | perf(kimi-k3): one aiter launch for the DSpark GQA draft's q... | @chelnnexy | open | 2026-11-03 | 2026-11-24 |
| [#3006](https://github.com/ROCm/ATOM/pull/3006) | perf(kimi-k3): mono MLA post / prep folds into K2 (ATOM_MONO... | @chelnnexy | open | 2026-11-04 | 2026-11-24 |
| [#3784](https://github.com/ROCm/ATOM/pull/3784) | [MiniMax-M3] ATOM_MONO_MAX_ROWS caps the decode rows routed ... | @ganyi1996ppo | draft | 2026-11-24 | 2026-11-24 |
| [#3782](https://github.com/ROCm/ATOM/pull/3782) | fix(mesh): propagate vLLM Mooncake prefill failures | @whx-sjtu | draft | 2026-11-24 | 2026-11-24 |
| [#3779](https://github.com/ROCm/ATOM/pull/3779) | docs(recipes): GLM-5.3-Flash serves with fp8 KV, since bf16 ... | @PerryZhang01 | draft | 2026-11-24 | 2026-11-24 |
| [#3780](https://github.com/ROCm/ATOM/pull/3780) | feat(eplb): gate-permute swap-policy options for a high deco... | @xytpai | draft | 2026-11-24 | 2026-11-24 |
| [#3742](https://github.com/ROCm/ATOM/pull/3742) | fix(pd): a Mooncake producer opens each consumer once, when ... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#3741](https://github.com/ROCm/ATOM/pull/3741) | perf(dp): the per-step DP sync packs and reads its rows in o... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#3541](https://github.com/ROCm/ATOM/pull/3541) | fix(pd): a producer's staged state-slot gather waits only fo... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-24 |
| [#3550](https://github.com/ROCm/ATOM/pull/3550) | feat(dp): optional RCCL backend for the per-step DP metadata... | @JiaoliangYu | open | 2026-11-19 | 2026-11-24 |
| [#3164](https://github.com/ROCm/ATOM/pull/3164) | [DSV4.1] Fuse the FP8 shared expert into the MXFP4 MoE under... | @JiaoliangYu | open | 2026-11-10 | 2026-11-24 |
| [#3151](https://github.com/ROCm/ATOM/pull/3151) | [Config] Resolve parallel mapping before worker initializati... | @JiaoliangYu | open | 2026-11-10 | 2026-11-24 |
| [#3746](https://github.com/ROCm/ATOM/pull/3746) | fix(runner): the startup memory profile covers a DP group's ... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#2499](https://github.com/ROCm/ATOM/pull/2499) | [MoonEP] Balance MegaMoE prefill with MoonEP | @JiaoliangYu | open | 2026-10-08 | 2026-11-24 |
| [#3749](https://github.com/ROCm/ATOM/pull/3749) | fix(engine): ATOM_WARMUP_PREFILL_BUCKETS=1 builds every pref... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#2760](https://github.com/ROCm/ATOM/pull/2760) | [DSpark][DCP] Allow speculative decode with DCP on gfx1250's... | @gbyu-amd | open | 2026-10-27 | 2026-11-24 |
| [#3740](https://github.com/ROCm/ATOM/pull/3740) | fix(kv): a MoRIIO prefill frees an unread request's blocks a... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#3771](https://github.com/ROCm/ATOM/pull/3771) | [gfx1250] Route FP16/BF16 ReplaySSM checkpoints to AITER | @gbyu-amd | draft | 2026-11-24 | 2026-11-24 |
| [#3766](https://github.com/ROCm/ATOM/pull/3766) | feat(offload): lazy LMCache save policy that stores what HBM... | @lirui927 | draft | 2026-11-24 | 2026-11-24 |
| [#3685](https://github.com/ROCm/ATOM/pull/3685) | fix(mesh): render GLM-5 chats under ATOM's reasoning control... | @wanzhenchn | open | 2026-11-21 | 2026-11-24 |
| [#3524](https://github.com/ROCm/ATOM/pull/3524) | [Mono] Add DSV4.1 Flash FP4 indexer for TP and opt-in DP | @junhaha666 | open | 2026-11-18 | 2026-11-24 |
| [#3726](https://github.com/ROCm/ATOM/pull/3726) | [DSV41] MegaMoE improvements for DEP8 | @heachary | open | 2026-11-23 | 2026-11-24 |
| [#3630](https://github.com/ROCm/ATOM/pull/3630) | [MiniMax-M3] Shared expert input from the routed MoE quant (... | @lirui927 | open | 2026-11-20 | 2026-11-24 |
| [#3545](https://github.com/ROCm/ATOM/pull/3545) | fix(compile): a non-first PP stage marks its received tensor... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-24 |
| [#3200](https://github.com/ROCm/ATOM/pull/3200) | fix(models): the Qwen3.5 MTP drafter loads on a dense target | @PerryZhang01 | draft | 2026-11-11 | 2026-11-24 |
| [#3767](https://github.com/ROCm/ATOM/pull/3767) | fix(utils): resolve ROCm GPU UUIDs in *_VISIBLE_DEVICES to t... | @PerryZhang01 | draft | 2026-11-24 | 2026-11-24 |
| [#3747](https://github.com/ROCm/ATOM/pull/3747) | fix(rapidserve): an eager decode process compiles its model ... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#3548](https://github.com/ROCm/ATOM/pull/3548) | fix(rapidserve): a request receives the token prefill sample... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-24 |
| [#3196](https://github.com/ROCm/ATOM/pull/3196) | fix(scheduler): a DP prefill rank whose cost sets the step's... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-24 |
| [#3655](https://github.com/ROCm/ATOM/pull/3655) | fix(pd): Mooncake registers a rank on the HCA behind its GPU... | @PerryZhang01 | draft | 2026-11-21 | 2026-11-24 |
| [#3691](https://github.com/ROCm/ATOM/pull/3691) | fix(offload): an early-load take-back gives back the tier hi... | @PerryZhang01 | draft | 2026-11-22 | 2026-11-24 |
| [#3744](https://github.com/ROCm/ATOM/pull/3744) | fix(fla): with ATOM_FLA_PIN_AUTOTUNE=1 every autotuned FLA k... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-24 |
| [#3720](https://github.com/ROCm/ATOM/pull/3720) | docs(gpt-oss): clarify SGLang runner constraints | @ZLkanyo009 | open | 2026-11-23 | 2026-11-24 |
| [#3725](https://github.com/ROCm/ATOM/pull/3725) | fix(pd): raise the RLIMIT_MEMLOCK soft limit to the hard lim... | @Jasen2201 | open | 2026-11-23 | 2026-11-24 |
| [#1834](https://github.com/ROCm/ATOM/pull/1834) | [ATOM SGL] [bug fix]fix glm52 regression | @ZhiweiYan-96 | draft | 2026-08-07 | 2026-11-23 |
| [#1891](https://github.com/ROCm/ATOM/pull/1891) | [ATOM SGL] fix ci error | @ZhiweiYan-96 | draft | 2026-08-13 | 2026-11-23 |
| [#3159](https://github.com/ROCm/ATOM/pull/3159) | fix(api): take Kimi-K3 chat prompt ids from its tokenizer's ... | @ZhiweiYan-96 | draft | 2026-11-10 | 2026-11-23 |
| [#3608](https://github.com/ROCm/ATOM/pull/3608) | feat(scheduler): add the protect prefill admit policy | @ZhiweiYan-96 | draft | 2026-11-20 | 2026-11-23 |
| [#3755](https://github.com/ROCm/ATOM/pull/3755) | test(mesh): wait for a worker's registration job in the KV e... | @wanzhenchn | open | 2026-11-23 | 2026-11-23 |
| [#3559](https://github.com/ROCm/ATOM/pull/3559) | test(gfx1250): skip pa_fwd_asm and gfx950-only FP4 / GLM-5.2... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3753](https://github.com/ROCm/ATOM/pull/3753) | perf(dsv4): fuse wo_b's input quant into wo_a's GEMM epilogu... | @ahmed-bsod | draft | 2026-11-23 | 2026-11-23 |
| [#3752](https://github.com/ROCm/ATOM/pull/3752) | perf(pp): a PP stage posts a frame's RCCL receives without a... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-23 |
| [#3694](https://github.com/ROCm/ATOM/pull/3694) | [Kimi-K3][PP] A per-stage store for PP state checkpoints | @zejunchen-zejun | open | 2026-11-22 | 2026-11-23 |
| [#3751](https://github.com/ROCm/ATOM/pull/3751) | fix(models): each PP stage builds only the embedding, norm a... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-23 |
| [#3041](https://github.com/ROCm/ATOM/pull/3041) | [Bugfix][Qwen3.5] Give image prompts embedding spans so pref... | @syang-genai | open | 2026-11-05 | 2026-11-23 |
| [#3745](https://github.com/ROCm/ATOM/pull/3745) | perf(gdn): an MTP verify lays its metadata out from the prev... | @PerryZhang01 | draft | 2026-11-23 | 2026-11-23 |
| [#3743](https://github.com/ROCm/ATOM/pull/3743) | fix(tbo): a released UBatchWrapper's workers stop and join | @PerryZhang01 | draft | 2026-11-23 | 2026-11-23 |
| [#3538](https://github.com/ROCm/ATOM/pull/3538) | fix(frontend): a non-streamed chat or completion response re... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3203](https://github.com/ROCm/ATOM/pull/3203) | fix(pd): a P/D producer reports its first token from the for... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-23 |
| [#3201](https://github.com/ROCm/ATOM/pull/3201) | fix(kv): an abort before decode's pull retires prefill's sen... | @PerryZhang01 | draft | 2026-11-11 | 2026-11-23 |
| [#3560](https://github.com/ROCm/ATOM/pull/3560) | test(mono): name the compile-only builds' target with FLYDSL... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3546](https://github.com/ROCm/ATOM/pull/3546) | fix(config): DeepSeek-V4 refuses pipeline parallelism by nam... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3543](https://github.com/ROCm/ATOM/pull/3543) | fix(kv): a MoRIIO decode that ends before its transfer frees... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3542](https://github.com/ROCm/ATOM/pull/3542) | fix(kv): under PP prefill an abort before decode's pull reti... | @PerryZhang01 | draft | 2026-11-19 | 2026-11-23 |
| [#3646](https://github.com/ROCm/ATOM/pull/3646) | [ROCm][ATOMesh][CI] Add MiniMax-M3 MoRIIO write 1P1D and 2P1... | @avininjamay8 | open | 2026-11-20 | 2026-11-23 |
| [#3707](https://github.com/ROCm/ATOM/pull/3707) | perf(minimax-m3): fuse the DSpark draft's all-reduces into i... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-23 |
| [#3534](https://github.com/ROCm/ATOM/pull/3534) | feat(ci): make ROCm 10.3 the only line, retiring ROCm 7.2.4 | @zufayu | draft | 2026-11-19 | 2026-11-23 |
| [#2988](https://github.com/ROCm/ATOM/pull/2988) | perf(minimax-m3): reduce split-K QKV and gate/up partials in... | @lirui927 | open | 2026-11-04 | 2026-11-23 |
| [#3705](https://github.com/ROCm/ATOM/pull/3705) | perf(minimax-m3): MoE front on the sequence-parallel owner r... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-23 |
| [#3714](https://github.com/ROCm/ATOM/pull/3714) | perf(minimax-m3): the fused router writes the MoE input as M... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-23 |
| [#3706](https://github.com/ROCm/ATOM/pull/3706) | perf(minimax-m3): MoE glue into the decode all-reduce: route... | @XiaobingSuper | draft | 2026-11-23 | 2026-11-23 |
| [#3682](https://github.com/ROCm/ATOM/pull/3682) | perf(minimax-m3): router GEMM + biased top-k in one aiter la... | @XiaobingSuper | draft | 2026-11-21 | 2026-11-23 |
| [#3680](https://github.com/ROCm/ATOM/pull/3680) | perf(minimax-m3): fold the routed scale and shared-expert ad... | @XiaobingSuper | draft | 2026-11-21 | 2026-11-23 |
| [#3683](https://github.com/ROCm/ATOM/pull/3683) | perf(minimax-m3): sequence-parallel residual for prefill-siz... | @XiaobingSuper | draft | 2026-11-21 | 2026-11-23 |
| [#3627](https://github.com/ROCm/ATOM/pull/3627) | feat(mesh): RL control plane 3/3 — selector and control fan-... | @junyyang-amd | open | 2026-11-20 | 2026-11-23 |
| [#3623](https://github.com/ROCm/ATOM/pull/3623) | feat(mesh): RL control plane 2/3 — per-worker engine proxy b... | @junyyang-amd | open | 2026-11-20 | 2026-11-23 |
| [#3405](https://github.com/ROCm/ATOM/pull/3405) | perf(mha): Gemma q/k norm + RoPE + KV write through aiter fu... | @lirui927 | open | 2026-11-16 | 2026-11-23 |
| [#3693](https://github.com/ROCm/ATOM/pull/3693) | kimi_k3: 64-bit row offsets in the SiTUv2-and-mul kernel | @zejunchen-zejun | open | 2026-11-22 | 2026-11-23 |
| [#3458](https://github.com/ROCm/ATOM/pull/3458) | [DSV4.1][gfx950] TP8 decode step in FlyDSL  | @yifehuan | draft | 2026-11-17 | 2026-11-23 |
| [#3721](https://github.com/ROCm/ATOM/pull/3721) | [MiniMax-M3.1] DSpark draft: sharded greedy Markov block, on... | @ganyi1996ppo | draft | 2026-11-23 | 2026-11-23 |
| [#3697](https://github.com/ROCm/ATOM/pull/3697) | state checkpoints: LRU policy for an anchor's first restore ... | @zejunchen-zejun | open | 2026-11-22 | 2026-11-23 |
| [#3634](https://github.com/ROCm/ATOM/pull/3634) | [MiniMax-M3] NVFP4 sparse attention writes o_proj's MXFP8 in... | @lirui927 | draft | 2026-11-20 | 2026-11-23 |
| [#2605](https://github.com/ROCm/ATOM/pull/2605) | [Scheduler] DP phase lockstep: idle beside a peer's prefill ... | @karverma-amd | open | 2026-10-16 | 2026-11-23 |
| [#2600](https://github.com/ROCm/ATOM/pull/2600) | scheduler: DP prefill-sync — align prefill waves across DP r... | @karverma-amd | open | 2026-10-15 | 2026-11-23 |
| [#3650](https://github.com/ROCm/ATOM/pull/3650) | [ATOMesh] Add GLM-5.3-Quark-MXFP4-AttnFP8 disagg tests | @itej89 | open | 2026-11-21 | 2026-11-23 |
| [#3695](https://github.com/ROCm/ATOM/pull/3695) | fix(mla): 64-bit offsets in the fused QKV quant past 2**31 e... | @zejunchen-zejun | open | 2026-11-22 | 2026-11-23 |
| [#3696](https://github.com/ROCm/ATOM/pull/3696) | fix(compile): key the torch.compile cache by each PP stage's... | @zejunchen-zejun | open | 2026-11-22 | 2026-11-23 |
| [#3594](https://github.com/ROCm/ATOM/pull/3594) | [PP] Run one pipeline's stages on several nodes (multi-node ... | @zejunchen-zejun | draft | 2026-11-19 | 2026-11-22 |
| [#3565](https://github.com/ROCm/ATOM/pull/3565) | feat(mesh): RL control plane 1/3 — /v1/rl read routes, capab... | @junyyang-amd | open | 2026-11-19 | 2026-11-21 |
| [#2894](https://github.com/ROCm/ATOM/pull/2894) | feat(kimi-k3): add gfx1250 monokernel | @XiaobingSuper | draft | 2026-11-02 | 2026-11-21 |
| [#3648](https://github.com/ROCm/ATOM/pull/3648) | profiler: clear inherited ROCPROFILER_REGISTER_LIBRARY befor... | @vecheruk-amd | open | 2026-11-20 | 2026-11-21 |
| [#3656](https://github.com/ROCm/ATOM/pull/3656) | [draft][PD][Kimi-K3] moriio: PP prefill producer for TP/DCP/... | @zejunchen-zejun | draft | 2026-11-21 | 2026-11-21 |
| [#3362](https://github.com/ROCm/ATOM/pull/3362) | [gfx1250] KDA Decode with AITER fused gating on GFX1250 | @Liang-jianhao97 | open | 2026-11-15 | 2026-11-21 |
| [#3336](https://github.com/ROCm/ATOM/pull/3336) | fix(dspark): keep the GQA draft's per-tensor KV scale out of... | @rbrugaro-amd | open | 2026-11-14 | 2026-11-21 |
| [#3536](https://github.com/ROCm/ATOM/pull/3536) | [PD][Mooncake] Hold a failed receive only when a producer ra... | @Jasen2201 | open | 2026-11-19 | 2026-11-21 |
| [#2112](https://github.com/ROCm/ATOM/pull/2112) | Adding support to define profiler window  | @devalshahamd | open | 2026-09-02 | 2026-11-20 |
| [#3333](https://github.com/ROCm/ATOM/pull/3333) |  fix(dspark): use aiter's public gfx950_gluon_supported in t... | @rbrugaro-amd | open | 2026-11-13 | 2026-11-20 |
| [#3572](https://github.com/ROCm/ATOM/pull/3572) | feat(pd): receive only the suffix past the decode's prefix, ... | @Jasen2201 | open | 2026-11-19 | 2026-11-20 |
| [#3529](https://github.com/ROCm/ATOM/pull/3529) | feat(plugins): capture and replay all ATOM plugin seams | @demonsan | draft | 2026-11-18 | 2026-11-20 |
| [#3641](https://github.com/ROCm/ATOM/pull/3641) | feat(mesh): split Entrypoints out of Mesh behind a token-lev... | @MengqingCao | draft | 2026-11-20 | 2026-11-20 |
| [#3551](https://github.com/ROCm/ATOM/pull/3551) | feat(moriio): move ReplaySSM records and cursor with the lin... | @Jasen2201 | open | 2026-11-19 | 2026-11-20 |
| [#3631](https://github.com/ROCm/ATOM/pull/3631) | Deliver exact tokenizer ingress for the shared Store recipe | @ZhangLirong-amd | draft | 2026-11-20 | 2026-11-20 |
| [#3581](https://github.com/ROCm/ATOM/pull/3581) | [MiniMax-M3] NVFP4 sparse KV and FP4 index on gfx1250 (stack... | @lirui927 | draft | 2026-11-19 | 2026-11-20 |
| [#3424](https://github.com/ROCm/ATOM/pull/3424) | [PD] Share the KV staging and landing test fakes | @MengqingCao | draft | 2026-11-16 | 2026-11-20 |
| [#3446](https://github.com/ROCm/ATOM/pull/3446) | perf(dsv4): run the shared expert's SwiGLU and MXFP8 quant i... | @yhl-amd | open | 2026-11-16 | 2026-11-20 |
| [#3532](https://github.com/ROCm/ATOM/pull/3532) | ci(agentic): add the DSv4.1 DEP8 c256 cell (8192-token prefi... | @xytpai | open | 2026-11-19 | 2026-11-20 |
| [#2922](https://github.com/ROCm/ATOM/pull/2922) | [ATOMesh] Add Kimi-K2.6-MXFP4 1P1D TP8 + 2P1D TP8 Mooncake d... | @itej89 | open | 2026-11-02 | 2026-11-20 |
| [#3604](https://github.com/ROCm/ATOM/pull/3604) | feat(pd): Mooncake receives only the suffix past the decode'... | @rbrugaro-amd | draft | 2026-11-19 | 2026-11-19 |
| [#3479](https://github.com/ROCm/ATOM/pull/3479) | fix(pd): apply the decode reserve to every Mooncake P/D rece... | @Jasen2201 | open | 2026-11-17 | 2026-11-19 |
| [#3590](https://github.com/ROCm/ATOM/pull/3590) | [MoE] Opt in to native FlyDSL A16W4 routed experts for DeepS... | @LiuYinfeng01 | draft | 2026-11-19 | 2026-11-19 |
| [#3316](https://github.com/ROCm/ATOM/pull/3316) | feat(dsv41 mono): serve the hi monokernel decode at TP2 | @zengleixin-amd | open | 2026-11-13 | 2026-11-19 |
| [#3527](https://github.com/ROCm/ATOM/pull/3527) | fix(dsv41): launch the router GEMV through its compiled func... | @zhiding512 | draft | 2026-11-18 | 2026-11-19 |
| [#3520](https://github.com/ROCm/ATOM/pull/3520) | feat(plugins): v41.block.ffn capability carries the FFN modu... | @zhiding512 | draft | 2026-11-18 | 2026-11-18 |
| [#2656](https://github.com/ROCm/ATOM/pull/2656) | feat(qwen3.5): Qwen3.5-397B mono decode | @amd-weisun | open | 2026-10-20 | 2026-11-18 |
| [#1933](https://github.com/ROCm/ATOM/pull/1933) | ci: prefer commit-specific Aiter S3 manifest | @gyohuangxin | open | 2026-08-17 | 2026-11-18 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-11-18 |
| [#1890](https://github.com/ROCm/ATOM/pull/1890) | Fuse block-banking cat into attn_res kernel | @yanxuer-999 | open | 2026-08-13 | 2026-11-18 |
| [#3461](https://github.com/ROCm/ATOM/pull/3461) | perf(kimi-k3): fuse the KDA o_norm into the decode recurrenc... | @ZLkanyo009 | open | 2026-11-17 | 2026-11-18 |
| [#3503](https://github.com/ROCm/ATOM/pull/3503) | perf(kimi-k3): fuse the KDA o_norm into the decode recurrenc... | @ZLkanyo009 | draft | 2026-11-18 | 2026-11-18 |
| [#3505](https://github.com/ROCm/ATOM/pull/3505) | perf(kimi-k3): pick the E8M0 x_scale layout per T with its g... | @ZLkanyo009 | draft | 2026-11-18 | 2026-11-18 |
| [#3453](https://github.com/ROCm/ATOM/pull/3453) | perf(kimi-k3): remap attn-res programs to XCDs only from 512... | @ZLkanyo009 | open | 2026-11-17 | 2026-11-18 |
| [#3504](https://github.com/ROCm/ATOM/pull/3504) | perf(kimi-k3): remap attn-res programs to XCDs only from 512... | @ZLkanyo009 | draft | 2026-11-18 | 2026-11-18 |
| [#3502](https://github.com/ROCm/ATOM/pull/3502) | perf(kimi-k3): tile the gfx1250 E8M0 KDA o_norm by T | @ZLkanyo009 | draft | 2026-11-18 | 2026-11-18 |
| [#3452](https://github.com/ROCm/ATOM/pull/3452) | perf(kimi-k3): tile the gfx1250 E8M0 KDA o_norm by T | @ZLkanyo009 | open | 2026-11-17 | 2026-11-18 |
| [#2981](https://github.com/ROCm/ATOM/pull/2981) | Codex/deepinfer dp scheduler | @jiayyu | draft | 2026-11-04 | 2026-11-18 |
| [#2876](https://github.com/ROCm/ATOM/pull/2876) | [MiniMax-M3.1] Run the DSpark draft's MXFP8 linears on AITER... | @zhuyuhua-v | open | 2026-11-01 | 2026-11-18 |
| [#3486](https://github.com/ROCm/ATOM/pull/3486) | [Qwen3.5/3.6][gfx1250] MLPerf Endpoints agentic: the 2026-11... | @vgokhale | open | 2026-11-18 | 2026-11-18 |
| [#3483](https://github.com/ROCm/ATOM/pull/3483) | fix(dsv41 hi): sgpr_spill_ok resolves an explicit RESIDUAL | @xytpai | open | 2026-11-17 | 2026-11-18 |
| [#3082](https://github.com/ROCm/ATOM/pull/3082) | Share the DeepSeek-V4 target with SGLang's DSpark draft | @vbayanag | draft | 2026-11-06 | 2026-11-17 |
| [#3470](https://github.com/ROCm/ATOM/pull/3470) | feat(mooncake-store): Kimi-K3's KV and KDA state tier on the... | @Jasen2201 | draft | 2026-11-17 | 2026-11-17 |
| [#2620](https://github.com/ROCm/ATOM/pull/2620) | [GFX-1250][DP][Kimi-K3 DSpark] Pad the draft's block decode ... | @zejunchen-zejun | open | 2026-10-17 | 2026-11-17 |
| [#2621](https://github.com/ROCm/ATOM/pull/2621) | feat(offload): run lmcache_mp under multi-node DP with one l... | @zejunchen-zejun | open | 2026-10-17 | 2026-11-17 |
| [#1908](https://github.com/ROCm/ATOM/pull/1908) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-08-15 | 2026-11-17 |
| [#2301](https://github.com/ROCm/ATOM/pull/2301) | [Spec Decode] Add opt-in synthetic forward for forced accept... | @gbyu-amd | open | 2026-09-20 | 2026-11-17 |
| [#2152](https://github.com/ROCm/ATOM/pull/2152) | [CI] Add opt-in paired performance check for pull requests (... | @zufayu | draft | 2026-09-07 | 2026-11-17 |
| [#3454](https://github.com/ROCm/ATOM/pull/3454) | perf(kimi-k3): pick the E8M0 x_scale layout per T with its g... | @ZLkanyo009 | open | 2026-11-17 | 2026-11-18 |
| [#3049](https://github.com/ROCm/ATOM/pull/3049) | perf(minimax-m3): quantize the dense MLP activation in the S... | @lirui927 | draft | 2026-11-06 | 2026-11-17 |
| [#3399](https://github.com/ROCm/ATOM/pull/3399) | feat(plugins): boot-only v41.mono.install seam for a plugin ... | @zhiding512 | draft | 2026-11-16 | 2026-11-17 |
| [#1920](https://github.com/ROCm/ATOM/pull/1920) | Skip duplicate heavy CI runs for same PR SHA | @gyohuangxin | open | 2026-08-17 | 2026-11-17 |
| [#2355](https://github.com/ROCm/ATOM/pull/2355) | CI: allow overriding ATOM inference watchdog threshold | @gyohuangxin | open | 2026-09-22 | 2026-11-17 |
| [#3021](https://github.com/ROCm/ATOM/pull/3021) | perf(dsv41): take the fused shared-expert act + quant at TP4... | @karverma-amd | open | 2026-11-05 | 2026-11-17 |
| [#3384](https://github.com/ROCm/ATOM/pull/3384) | refactor(runner): check the KV connector reserve after agree... | @MengqingCao | open | 2026-11-16 | 2026-11-17 |
| [#3298](https://github.com/ROCm/ATOM/pull/3298) | test: cover PR welcome CI label table | @gyohuangxin | open | 2026-11-13 | 2026-11-16 |
| [#3193](https://github.com/ROCm/ATOM/pull/3193) | perf(dcp): merge decode partials with aiter's fused DCP merg... | @zejunchen-zejun | open | 2026-11-11 | 2026-11-16 |
| [#3389](https://github.com/ROCm/ATOM/pull/3389) | Fuse Kimi-K3.1's row-sharded MoE tail adds into one kernel | @whx-sjtu | open | 2026-11-16 | 2026-11-16 |
| [#3401](https://github.com/ROCm/ATOM/pull/3401) | Yzhou103/dsv41 planar followup 20261116 | @yzhou103 | draft | 2026-11-16 | 2026-11-16 |
| [#3400](https://github.com/ROCm/ATOM/pull/3400) | Send each DCP rank only the DSA top-k indices it owns | @whx-sjtu | draft | 2026-11-16 | 2026-11-16 |
| [#3199](https://github.com/ROCm/ATOM/pull/3199) | [MiniMax-M3.1] Fused all-reduce + Gemma RMSNorm writes qkv_p... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-16 |
| [#3398](https://github.com/ROCm/ATOM/pull/3398) | Kimi-K3: fold the KDA f_a gather into the block-FP8 activati... | @gbyu-amd | draft | 2026-11-16 | 2026-11-16 |
| [#3391](https://github.com/ROCm/ATOM/pull/3391) | Write Kimi-K3.1's whole prefill q_out from the absorb q-pack... | @whx-sjtu | open | 2026-11-16 | 2026-11-16 |
| [#3315](https://github.com/ROCm/ATOM/pull/3315) | fix(dsv41 mono): check the hi programs in every FP4 index la... | @zengleixin-amd | open | 2026-11-13 | 2026-11-16 |
| [#3390](https://github.com/ROCm/ATOM/pull/3390) | Fail LLMEngine.generate when an engine core reports failure | @whx-sjtu | open | 2026-11-16 | 2026-11-16 |
| [#3373](https://github.com/ROCm/ATOM/pull/3373) | [gfx1250] Integrate AITER ReplaySSM KDA backend | @Liang-jianhao97 | open | 2026-11-15 | 2026-11-16 |
| [#3388](https://github.com/ROCm/ATOM/pull/3388) | Let Kimi-K3.1's DCP sparse decode take empty work items past... | @whx-sjtu | open | 2026-11-16 | 2026-11-16 |
| [#3271](https://github.com/ROCm/ATOM/pull/3271) | fix(engram): keep UVA rows in GTT host memory, one copy per ... | @yhl-amd | open | 2026-11-12 | 2026-11-16 |
| [#3325](https://github.com/ROCm/ATOM/pull/3325) | [Qwen3.5 MTP] Speculative rejection sampling for MTP drafts ... | @vgokhale | open | 2026-11-13 | 2026-11-15 |
| [#3188](https://github.com/ROCm/ATOM/pull/3188) | perf(engram): tune quantized UVA lookup geometry on gfx1250 | @amd-ruitang3 | open | 2026-11-11 | 2026-11-15 |
| [#3326](https://github.com/ROCm/ATOM/pull/3326) | [Qwen3.5 recipe] mkcfg.py: SUBMISSION_RULESET binds the clie... | @vgokhale | open | 2026-11-13 | 2026-11-15 |
| [#2958](https://github.com/ROCm/ATOM/pull/2958) | Enable DSpark adaptive ragged verification | @ykamiset | open | 2026-11-03 | 2026-11-14 |
| [#2960](https://github.com/ROCm/ATOM/pull/2960) | [Kimi-K3] Prefill token graphs: the KDA/MLA backend takes a ... | @davzhuAMD | open | 2026-11-03 | 2026-11-14 |
| [#2961](https://github.com/ROCm/ATOM/pull/2961) | perf(mla): opt-in opus flat-row decode for DCP8/DCP1 MTP (AT... | @nehmathe2 | open | 2026-11-04 | 2026-11-14 |
| [#3351](https://github.com/ROCm/ATOM/pull/3351) | ReplaySSM: park the prefill record cursors without a device ... | @gbyu-amd | draft | 2026-11-14 | 2026-11-14 |
| [#3267](https://github.com/ROCm/ATOM/pull/3267) | feat(kv): pluggable KV pool backend, with MORI-UMBP owning t... | @TianDi101 | draft | 2026-11-12 | 2026-11-14 |
| [#3338](https://github.com/ROCm/ATOM/pull/3338) | ci: cover the Kimi-K3 DSpark GQA draft (accuracy entry + GPU... | @rbrugaro-amd | draft | 2026-11-14 | 2026-11-14 |
| [#3087](https://github.com/ROCm/ATOM/pull/3087) | refactor(mono): set FlyDSL's target arch through FLYDSL_GPU_... | @coderfeli | open | 2026-11-07 | 2026-11-14 |
| [#3100](https://github.com/ROCm/ATOM/pull/3100) | [kv_transfer] lmcache_mp: pass optional LMCache ATOM adapter... | @yhl-amd | open | 2026-11-09 | 2026-11-14 |
| [#3339](https://github.com/ROCm/ATOM/pull/3339) | feat(aiter-providers): a2a_gemm_fused provider rail + gated ... | @demonsan | draft | 2026-11-14 | 2026-11-14 |
| [#3337](https://github.com/ROCm/ATOM/pull/3337) | [gfx1250] Qwen3.5/3.6: IOD-local KV cache and LM head (ATOM_... | @vgokhale | draft | 2026-11-14 | 2026-11-14 |
| [#3335](https://github.com/ROCm/ATOM/pull/3335) | [Qwen3.5 MTP] Drafter pass as persistent gfx1250 kernels (AT... | @vgokhale | open | 2026-11-14 | 2026-11-14 |
| [#3084](https://github.com/ROCm/ATOM/pull/3084) | [SP] Fuse the MiniMax-M3 QKV GEMM with the Ulysses exchange ... | @whx-sjtu | draft | 2026-11-06 | 2026-11-14 |
| [#3332](https://github.com/ROCm/ATOM/pull/3332) | Kimi-K3: KDA prefill on the state pool in place (FlashKDA pa... | @gbyu-amd | draft | 2026-11-13 | 2026-11-13 |
| [#3330](https://github.com/ROCm/ATOM/pull/3330) | KDA ReplaySSM: optional HIP decode / verify step (ATOM_REPLA... | @gbyu-amd | draft | 2026-11-13 | 2026-11-13 |
| [#2490](https://github.com/ROCm/ATOM/pull/2490) | [gfx1250] MLA absorb: emit ql_nope in the fp8 KV-cache dtype | @karverma-amd | open | 2026-10-08 | 2026-11-13 |
| [#2701](https://github.com/ROCm/ATOM/pull/2701) | fix(kimi-k3): load a checkpoint with statically FP8-quantize... | @rbrugaro-amd | open | 2026-10-25 | 2026-11-13 |
| [#2781](https://github.com/ROCm/ATOM/pull/2781) | [Perf] Keep SwiGLU-OAI arithmetic in FP32 under torch.compil... | @xytpai | open | 2026-10-28 | 2026-11-13 |
| [#2873](https://github.com/ROCm/ATOM/pull/2873) | [Perf] Use finer gfx1250 index-score chunks for small decode... | @xytpai | open | 2026-10-31 | 2026-11-13 |
| [#3088](https://github.com/ROCm/ATOM/pull/3088) | [Docs] Add contributing guide, area contacts and review guid... | @zufayu | draft | 2026-11-07 | 2026-11-13 |
| [#3176](https://github.com/ROCm/ATOM/pull/3176) | [DSV4.1][gfx1250] Extend single-launch decode to C16 with FP... | @yifehuan | draft | 2026-11-10 | 2026-11-13 |
| [#2909](https://github.com/ROCm/ATOM/pull/2909) | feat(dsv41): carry the mHC residual in Mega-MHC's res_preshu... | @junhaha666 | draft | 2026-11-02 | 2026-11-13 |
| [#3258](https://github.com/ROCm/ATOM/pull/3258) | perf(kda): reuse Conv1D state and input registers for decode | @yanxuer-999 | draft | 2026-11-12 | 2026-11-12 |
| [#3251](https://github.com/ROCm/ATOM/pull/3251) | feat(minimax-m3): read DSpark taps from the next layer all-r... | @zhuyuhua-v | draft | 2026-11-12 | 2026-11-12 |
| [#2557](https://github.com/ROCm/ATOM/pull/2557) | fix(mla): plan persistent decode over the rows q/o have | @gbyu-amd | open | 2026-10-13 | 2026-11-12 |
| [#2947](https://github.com/ROCm/ATOM/pull/2947) | Qsa index scorer/stage2 | @demonsan | draft | 2026-11-03 | 2026-11-12 |
| [#2990](https://github.com/ROCm/ATOM/pull/2990) | [Kimi-K3] Video inputs with chunked prefill and bounded visi... | @IvanShan177 | open | 2026-11-04 | 2026-11-12 |
| [#2511](https://github.com/ROCm/ATOM/pull/2511) | feat(attention): add BLASST block skipping to the Triton pre... | @amd-sonsingh | open | 2026-10-10 | 2026-11-12 |
| [#3220](https://github.com/ROCm/ATOM/pull/3220) | feat(mla): packed FP4 KV cache (MXFP4 / NVFP4) for the gfx12... | @ppalanga | draft | 2026-11-11 | 2026-11-11 |
| [#3219](https://github.com/ROCm/ATOM/pull/3219) | fix(mla): pass the Triton decode only the sequences that own... | @ppalanga | draft | 2026-11-11 | 2026-11-11 |
| [#3144](https://github.com/ROCm/ATOM/pull/3144) | [GFX1250][MOE]iod weight preshuffle | @Zzz9990 | open | 2026-11-10 | 2026-11-11 |
| [#3178](https://github.com/ROCm/ATOM/pull/3178) | [Qwen3.5] FHMoE: the shared expert inside the gfx1250 groupe... | @vgokhale | open | 2026-11-10 | 2026-11-11 |
| [#3125](https://github.com/ROCm/ATOM/pull/3125) | [kv_transfer] lmcache_mp: name prompts by LMCache chunk hash... | @yhl-amd | open | 2026-11-09 | 2026-11-11 |
| [#3214](https://github.com/ROCm/ATOM/pull/3214) | feat(minimax-m3): run the M3.1 shared gate_up GEMM inside th... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#2679](https://github.com/ROCm/ATOM/pull/2679) | refactor(qsa): use aiter QSA kernels instead of vendored cop... | @mengfei-jiang | open | 2026-10-23 | 2026-11-11 |
| [#3205](https://github.com/ROCm/ATOM/pull/3205) | feat(minimax-m3): M3.1 decode router sharing a launch with t... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3207](https://github.com/ROCm/ATOM/pull/3207) | feat(minimax-m3): fold the M3.1 shared expert output into th... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3198](https://github.com/ROCm/ATOM/pull/3198) | [MiniMax-M3.1] Fuse SwiGLU-OAI with the MXFP8 quant of down_... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#3195](https://github.com/ROCm/ATOM/pull/3195) | [MiniMax-M3.1] One-launch decode router (GEMV + top-4 gate +... | @zhuyuhua-v | draft | 2026-11-11 | 2026-11-11 |
| [#2728](https://github.com/ROCm/ATOM/pull/2728) | Fix speculative block table capacity | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#2729](https://github.com/ROCm/ATOM/pull/2729) | Fix GDN draft metadata | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#2043](https://github.com/ROCm/ATOM/pull/2043) | [Feat] Conform MiniMax-M3 serving to OpenAI API | @kliuae | open | 2026-08-26 | 2026-11-11 |
| [#1973](https://github.com/ROCm/ATOM/pull/1973) | Qwen38 accuracy | @PerryZhang01 | open | 2026-08-20 | 2026-11-11 |
| [#2689](https://github.com/ROCm/ATOM/pull/2689) | perf(qwen3_5): use the fused GDN in_proj GEMM on Quark MXFP4... | @ahmed-bsod | open | 2026-10-23 | 2026-11-11 |
| [#2555](https://github.com/ROCm/ATOM/pull/2555) | perf(deepseek_v41): MI308 gfx942 enablement and decode for V... | @zhangxinyuanliuhengyu | open | 2026-10-13 | 2026-11-11 |
| [#2730](https://github.com/ROCm/ATOM/pull/2730) | Integrate AITER fused MoE routing | @azaidy | open | 2026-10-26 | 2026-11-11 |
| [#2939](https://github.com/ROCm/ATOM/pull/2939) | [MoE] ATOM_MEGA_COMBINE_WIRE applies to decode steps too | @yanboshao | draft | 2026-11-03 | 2026-11-11 |
| [#2358](https://github.com/ROCm/ATOM/pull/2358) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#3114](https://github.com/ROCm/ATOM/pull/3114) | feat(gemm_fusion): route MiniMax-M3 SP QKV through aiter.sp_... | @demonsan | draft | 2026-11-09 | 2026-11-10 |
| [#2258](https://github.com/ROCm/ATOM/pull/2258) | feed local expert hash from atom to moe | @yadaish | open | 2026-09-16 | 2026-11-10 |
| [#3145](https://github.com/ROCm/ATOM/pull/3145) | [MI355X] feat(diffusion): Wan2.1 VAE with conv3d dispatched ... | @huizzhan | draft | 2026-11-10 | 2026-11-10 |
| [#3124](https://github.com/ROCm/ATOM/pull/3124) | fix(api): keep structured-output extras optional at startup | @jiayyu | draft | 2026-11-09 | 2026-11-09 |
| [#1937](https://github.com/ROCm/ATOM/pull/1937) | perf(mtp): defer draft proposal publication | @yhl-amd | open | 2026-08-18 | 2026-11-09 |
| [#2698](https://github.com/ROCm/ATOM/pull/2698) | perf(qwen3.5): one-kernel GDN decode on gfx1250 | @ahmed-bsod | open | 2026-10-24 | 2026-11-09 |
| [#2662](https://github.com/ROCm/ATOM/pull/2662) | feat(mono): Qwen3.8-Flash-Next mono decode | @ssharma4-amd | open | 2026-10-21 | 2026-11-09 |
| [#2403](https://github.com/ROCm/ATOM/pull/2403) | fix(gdn): store the temporal state in the checkpoint's mamba... | @eky-amd | open | 2026-09-25 | 2026-11-09 |
| [#2404](https://github.com/ROCm/ATOM/pull/2404) | fix(offload): distinguish unmeasured profile timings | @kvnloo | open | 2026-09-25 | 2026-11-09 |
| [#2406](https://github.com/ROCm/ATOM/pull/2406) | fix(offload): include exception type in dense lookup warning... | @kvnloo | open | 2026-09-25 | 2026-11-09 |
| [#2286](https://github.com/ROCm/ATOM/pull/2286) | [FlyDSL] [Gfx1250] mega moe stage1 gfx1250 no overlap | @XingerZhu | open | 2026-09-18 | 2026-11-09 |
| [#2243](https://github.com/ROCm/ATOM/pull/2243) | Size the staging pack grid by the bytes it moves, not the wi... | @PerryZhang01 | open | 2026-09-15 | 2026-11-09 |
| [#2203](https://github.com/ROCm/ATOM/pull/2203) | [KV-events] match vLLM/SGLang ZMQ framing and per-DP-rank po... | @vMaroon | open | 2026-09-11 | 2026-11-09 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-11-09 |
| [#3093](https://github.com/ROCm/ATOM/pull/3093) | [Qwen3.5 MTP] Decode-step trims: host token split, one-shot ... | @vgokhale | open | 2026-11-07 | 2026-11-07 |
| [#3086](https://github.com/ROCm/ATOM/pull/3086) | [Engine] ATOM_EARLY_PREFILL_SCHEDULE on independent DP ranks... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#3085](https://github.com/ROCm/ATOM/pull/3085) | [Qwen3.5 MTP] Draft argmax under the presence penalty + FP8 ... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#3081](https://github.com/ROCm/ATOM/pull/3081) | [DO NOT MERGE] [gfx1250][GDN] Prefill chain: conv1d, fused K... | @Boss2002n | draft | 2026-11-06 | 2026-11-06 |
| [#2997](https://github.com/ROCm/ATOM/pull/2997) | feat(mesh): defer ATOM Decode placement until Prefill handof... | @ZhangLirong-amd | draft | 2026-11-04 | 2026-11-06 |
| [#2381](https://github.com/ROCm/ATOM/pull/2381) | [Performance] Reduce TP host-control overhead for C16 | @yhl-amd | draft | 2026-09-24 | 2026-11-06 |
| [#3054](https://github.com/ROCm/ATOM/pull/3054) | feat(kimi-k3): fold the consumer's E8M0 activation quant int... | @qichu-yun | draft | 2026-11-06 | 2026-11-06 |
| [#3053](https://github.com/ROCm/ATOM/pull/3053) | feat(kimi-k3): fuse o_proj's E8M0 activation quant into the ... | @qichu-yun | draft | 2026-11-06 | 2026-11-06 |
| [#3045](https://github.com/ROCm/ATOM/pull/3045) | [Qwen3.5 DP] MoE-block and attention-reduce fusions for deco... | @vgokhale | open | 2026-11-05 | 2026-11-06 |
| [#3046](https://github.com/ROCm/ATOM/pull/3046) | [API] Offloaded chat preparation reuses a session's earlier ... | @vgokhale | open | 2026-11-06 | 2026-11-06 |
| [#3016](https://github.com/ROCm/ATOM/pull/3016) | [Qwen3.5 MTP] TP4 drafter small-kernel fusions + the drafter... | @vgokhale | open | 2026-11-04 | 2026-11-05 |
| [#3044](https://github.com/ROCm/ATOM/pull/3044) | [Qwen3.5 recipe] e8m0 FP8 projections on by default for DP p... | @Boss2002n | open | 2026-11-05 | 2026-11-05 |
| [#2973](https://github.com/ROCm/ATOM/pull/2973) | [GFX1250][K3][LMCache] Enable LMCache MP for K3 TP8DCP8 on G... | @zejunchen-zejun | draft | 2026-11-04 | 2026-11-05 |
| [#3031](https://github.com/ROCm/ATOM/pull/3031) | [Kimi-K3] docs(recipes): Kimi-K3.1 AgentX recipe on MI355X | @zhuyuhua-v | draft | 2026-11-05 | 2026-11-05 |
| [#3014](https://github.com/ROCm/ATOM/pull/3014) | [DO NOT MERGE] [gfx1250][GDN] chunk_h: last-gate lookup, per... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3010](https://github.com/ROCm/ATOM/pull/3010) | [DO NOT MERGE] [gfx1250][GDN] Fuse KKT + gating into the Glu... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3008](https://github.com/ROCm/ATOM/pull/3008) | [DO NOT MERGE] [gfx1250][GDN] Persistent Gluon conv1d for pr... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#3012](https://github.com/ROCm/ATOM/pull/3012) | [DO NOT MERGE] [gfx1250][GDN] chunk_o: K32 q.h panels, V in ... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2970](https://github.com/ROCm/ATOM/pull/2970) | [Qwen3.5] Fused TP4 decode MoE half in one persistent kernel... | @vgokhale | draft | 2026-11-04 | 2026-11-04 |
| [#2998](https://github.com/ROCm/ATOM/pull/2998) | [DSV4.1] Bucket decoder tails by DP final-prefill request co... | @JiaoliangYu | draft | 2026-11-04 | 2026-11-04 |
| [#2996](https://github.com/ROCm/ATOM/pull/2996) | perf(kimi-k3): quantize the shared qkv_a / g_proj input once | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2994](https://github.com/ROCm/ATOM/pull/2994) | feat(kimi-k3): fuse o_proj's E8M0 activation quant into the ... | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2995](https://github.com/ROCm/ATOM/pull/2995) | feat(kimi-k3): fuse down_proj's E8M0 activation quant into S... | @qichu-yun | draft | 2026-11-04 | 2026-11-04 |
| [#2976](https://github.com/ROCm/ATOM/pull/2976) | perf(kimi-k3): no k copy before the DFlash draft's context k... | @davzhuAMD | draft | 2026-11-04 | 2026-11-04 |
| [#2975](https://github.com/ROCm/ATOM/pull/2975) | perf(dspark): one-launch draft KV addressing (context slots ... | @davzhuAMD | draft | 2026-11-04 | 2026-11-04 |
| [#2968](https://github.com/ROCm/ATOM/pull/2968) | [DO NOT MERGE] [Qwen3.5][GDN] chunk_h paired TDM loads + chu... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2967](https://github.com/ROCm/ATOM/pull/2967) | [DO NOT MERGE] [Qwen3.5][GDN] Gluon inverse/WY kernel for gf... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2966](https://github.com/ROCm/ATOM/pull/2966) | [DO NOT MERGE] [Qwen3.5][GDN] Gates inside the KKT kernel (A... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2963](https://github.com/ROCm/ATOM/pull/2963) | [GDN] Write the linear-attention output into the graph buffe... | @Boss2002n | draft | 2026-11-04 | 2026-11-04 |
| [#2770](https://github.com/ROCm/ATOM/pull/2770) | [MiniMax-M3.1] MXFP4 sparse KV cache and index cache | @ganyi1996ppo | open | 2026-10-28 | 2026-11-04 |
| [#2901](https://github.com/ROCm/ATOM/pull/2901) | feat(docker): move the ROCm 10 line from 10.0.0 to 10.1.0 (H... | @junyyang-amd | draft | 2026-11-02 | 2026-11-03 |
| [#2899](https://github.com/ROCm/ATOM/pull/2899) | [MLA] Opt-in FP8 prefill attention on gfx1250: ASM or FlyDSL | @gbyu-amd | draft | 2026-11-02 | 2026-11-03 |
| [#1995](https://github.com/ROCm/ATOM/pull/1995) | [ATOM] add persistent path for DCP GLM5.2 | @zhuyuhua-v | open | 2026-08-24 | 2026-11-03 |
| [#2673](https://github.com/ROCm/ATOM/pull/2673) | feat(eplb): add step_peak placement policy | @HaonanWang98 | open | 2026-10-22 | 2026-11-03 |
| [#2887](https://github.com/ROCm/ATOM/pull/2887) | optimize dsv4 flash opt | @binding7012 | draft | 2026-11-01 | 2026-11-03 |
| [#2806](https://github.com/ROCm/ATOM/pull/2806) | [GDN] Fix the KV cache writes of the Gemma Q/K norm + RoPE p... | @Boss2002n | draft | 2026-10-29 | 2026-11-02 |
| [#2860](https://github.com/ROCm/ATOM/pull/2860) | feat(v41): replay the decoder graph on over-band prefills (o... | @carlushuang | draft | 2026-10-30 | 2026-11-02 |
| [#2744](https://github.com/ROCm/ATOM/pull/2744) | [MiniMax-M3.1] FP4 index cache and NVFP4 sparse KV cache | @zhuyuhua-v | open | 2026-10-27 | 2026-11-02 |
| [#2848](https://github.com/ROCm/ATOM/pull/2848) | feat(eplb): add DeepInfer hot expert selection | @JiaoliangYu | open | 2026-10-30 | 2026-11-02 |
| [#2858](https://github.com/ROCm/ATOM/pull/2858) | Fix standalone Inductor/Triton cache persistence across cont... | @xytpai | open | 2026-10-30 | 2026-11-02 |
| [#2815](https://github.com/ROCm/ATOM/pull/2815) | Enable prefix caching for DeepSeek V4 Mono decode | @yifehuan | open | 2026-10-29 | 2026-11-01 |
| [#2881](https://github.com/ROCm/ATOM/pull/2881) | [gfx1250] GemmaRMSNorm: aiter Gluon fused_rmsnorm_add in pla... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#2880](https://github.com/ROCm/ATOM/pull/2880) | [gfx1250] Triton MoE over MegaMoE: SwiGLU clamp default 0.0 ... | @Boss2002n | draft | 2026-11-01 | 2026-11-01 |
| [#2812](https://github.com/ROCm/ATOM/pull/2812) | [MiniMax-M3.1] Mono decode over the MXFP4 KV and index cache... | @ganyi1996ppo | draft | 2026-10-29 | 2026-11-01 |
| [#2563](https://github.com/ROCm/ATOM/pull/2563) | feat(eplb): decode expert swap | @JiaoliangYu | open | 2026-10-14 | 2026-10-31 |
| [#2826](https://github.com/ROCm/ATOM/pull/2826) | [gfx1250] Qwen3.5: o_proj / out_proj + all-reduce + RMSNorm ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#2805](https://github.com/ROCm/ATOM/pull/2805) | [gfx1250] Qwen3.5: Q/K norm + MRoPE + KV cache write in one ... | @Boss2002n | draft | 2026-10-29 | 2026-10-30 |
| [#2793](https://github.com/ROCm/ATOM/pull/2793) | [Triton/Gluon] [GFX12] Add spec_decode flag To Unified Atten... | @k50112113 | draft | 2026-10-28 | 2026-10-30 |
| [#2840](https://github.com/ROCm/ATOM/pull/2840) | feat(dsv41): add gfx1250 mono backend and separate architect... | @yifehuan | draft | 2026-10-30 | 2026-10-30 |
| [#2838](https://github.com/ROCm/ATOM/pull/2838) | [MiniMax M3.1] Add PP4-to-DCP4 Mooncake KV transfer and targ... | @MengqingCao | draft | 2026-10-30 | 2026-10-30 |
| [#2439](https://github.com/ROCm/ATOM/pull/2439) | add more MP LMCache instructions hosting Kimi-K3 from vllm A... | @linsun12 | open | 2026-09-30 | 2026-10-30 |
| [#2641](https://github.com/ROCm/ATOM/pull/2641) | Add initial muse spark support | @azaidy | open | 2026-10-19 | 2026-10-29 |
| [#2797](https://github.com/ROCm/ATOM/pull/2797) | [ATOM] scheduler: one checkpoint-demand cut per prefix per a... | @vgokhale | open | 2026-10-28 | 2026-10-29 |
| [#2802](https://github.com/ROCm/ATOM/pull/2802) | [gfx1250] Qwen3.5: Q/K norm + MRoPE in one aiter kernel | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2795](https://github.com/ROCm/ATOM/pull/2795) | [gfx1250] Qwen3.5 MTP under DP attention + EP | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2794](https://github.com/ROCm/ATOM/pull/2794) | [gfx1250] Qwen3.5 MoE MXFP4 bring-up (TP1/TP4/EP4) | @Boss2002n | draft | 2026-10-28 | 2026-10-28 |
| [#2720](https://github.com/ROCm/ATOM/pull/2720) | perf(dspark): drop the per-step host sync; measure SPS at st... | @ZhangLirong-amd | open | 2026-10-26 | 2026-10-28 |
| [#2750](https://github.com/ROCm/ATOM/pull/2750) | [MiniMax-M3.1] Add TP4 P/D Mooncake Store benchmarks and NVF... | @MengqingCao | draft | 2026-10-27 | 2026-10-28 |
| [#2141](https://github.com/ROCm/ATOM/pull/2141) | feat: add GLM-5.3-Flash multimodal support | @cubezhang | open | 2026-09-04 | 2026-10-28 |
| [#2749](https://github.com/ROCm/ATOM/pull/2749) | fix(docker): multi-arch SGLang+ATOM image path for gfx942/gf... | @zhangxinyuanliuhengyu | open | 2026-10-27 | 2026-10-28 |
| [#2658](https://github.com/ROCm/ATOM/pull/2658) | EAGLE3 speculative decoding support for LLama/Qwen3 models | @kyle-hoffmeyer | open | 2026-10-20 | 2026-10-28 |
| [#2763](https://github.com/ROCm/ATOM/pull/2763) | feat(api): add idle prefix cache reset endpoint | @JiaoliangYu | draft | 2026-10-27 | 2026-10-27 |
| [#2061](https://github.com/ROCm/ATOM/pull/2061) | Glm5.3 flash support | @PerryZhang01 | open | 2026-08-27 | 2026-10-27 |
| [#2529](https://github.com/ROCm/ATOM/pull/2529) | Add Qwen3.8 FlyDSL HC and long-context QSA index CP | @coderfeli | open | 2026-10-11 | 2026-10-27 |
| [#2737](https://github.com/ROCm/ATOM/pull/2737) | [DCP] Prefetch the next MLA layer's cached-prefix KV all-gat... | @ganyi1996ppo | draft | 2026-10-27 | 2026-10-27 |
| [#2137](https://github.com/ROCm/ATOM/pull/2137) | [atom-vllm]: enable DSpark speculative decoding for DeepSeek... | @peizhang56 | open | 2026-09-03 | 2026-10-27 |
| [#2687](https://github.com/ROCm/ATOM/pull/2687) | [MiniMax-M3.1] Load the MiniMax-M3.1-Flash release checkpoin... | @wuhuikx | draft | 2026-10-23 | 2026-10-26 |
| [#2694](https://github.com/ROCm/ATOM/pull/2694) | test(observability): allow additional runner startup RPCs | @NidhoggD1 | draft | 2026-10-24 | 2026-10-24 |
| [#2667](https://github.com/ROCm/ATOM/pull/2667) | fix(sglang): keep Flash full decode graph correct with mamba... | @zhangxinyuanliuhengyu | open | 2026-10-21 | 2026-10-22 |
| [#2639](https://github.com/ROCm/ATOM/pull/2639) | refactor(mono): use FlyDSL JIT and typed device APIs | @coderfeli | open | 2026-10-19 | 2026-10-22 |
| [#2619](https://github.com/ROCm/ATOM/pull/2619) | fix(atomesh): keep dashboard metrics finite without dropping... | @kvnloo | open | 2026-10-16 | 2026-10-18 |
| [#2608](https://github.com/ROCm/ATOM/pull/2608) | (recipe) Add Qwen3.8-Flash-Next AgentX Recipe | @zhuyuhua-v | draft | 2026-10-16 | 2026-10-16 |
| [#2597](https://github.com/ROCm/ATOM/pull/2597) | add asm mla qh64 kvsf  | @feifei14119 | open | 2026-10-15 | 2026-10-16 |
| [#2596](https://github.com/ROCm/ATOM/pull/2596) | [DP] Decouple prefill cost balancing from PrefillDelayer, ro... | @zejunchen-zejun | draft | 2026-10-15 | 2026-10-16 |
| [#2248](https://github.com/ROCm/ATOM/pull/2248) | [WIP]fix(attention): stabilize MLA/MHA outputs for piecewise... | @MengqingCao | open | 2026-09-15 | 2026-10-16 |
| [#2405](https://github.com/ROCm/ATOM/pull/2405) | [MORI] Multi-node + MORI_V2- #5855 | @k50112113 | open | 2026-09-25 | 2026-10-15 |
| [#2501](https://github.com/ROCm/ATOM/pull/2501) | fix(plugin/dsv4): score 1-token prefill rows on the dense in... | @linsun12 | open | 2026-10-08 | 2026-10-13 |
| [#2544](https://github.com/ROCm/ATOM/pull/2544) | feat(diag): record per-step routed expert counts (ATOM_EXPER... | @JiaoliangYu | draft | 2026-10-12 | 2026-10-12 |
| [#2542](https://github.com/ROCm/ATOM/pull/2542) | ci: tune GLM-5.2 FP8 MTP3 benchmark memory | @gyohuangxin | draft | 2026-10-12 | 2026-10-12 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-10-12 |
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
| [#2044](https://github.com/ROCm/ATOM/pull/2044) | fix(vllm): mark DP lockstep dummy batch as dummy run | @linsun12 | open | 2026-08-27 | 2026-09-20 |
| [#2275](https://github.com/ROCm/ATOM/pull/2275) | fix(plugin/vllm): keep the platform hook from dropping ATOMP... | @linsun12 | open | 2026-09-17 | 2026-09-18 |
| [#2266](https://github.com/ROCm/ATOM/pull/2266) | [ATOM][Metrics]: add decode TTFT stages, GPU sample/propose,... | @MengqingCao | draft | 2026-09-17 | 2026-09-17 |
| [#2262](https://github.com/ROCm/ATOM/pull/2262) | docs: refresh installation, model inventory and publication ... | @sunway513 | open | 2026-09-16 | 2026-09-17 |
| [#2252](https://github.com/ROCm/ATOM/pull/2252) | feat(dsv4-flash): vLLM-plugin in-process LMCache offload for... | @linsun12 | draft | 2026-09-16 | 2026-09-16 |
| [#2241](https://github.com/ROCm/ATOM/pull/2241) | ci: add Copilot code review instructions | @valarLip | open | 2026-09-15 | 2026-09-16 |
| [#2206](https://github.com/ROCm/ATOM/pull/2206) | setting HSA_ENABLE_IPC_MODE_LEGACY=1 to avoid GPU memory pin... | @linsun12 | open | 2026-09-12 | 2026-09-14 |
| [#2212](https://github.com/ROCm/ATOM/pull/2212) | Qichu/allow mtp8 with spec decode | @ZhiweiYan-96 | draft | 2026-09-13 | 2026-09-13 |
| [#2071](https://github.com/ROCm/ATOM/pull/2071) | [Ci]agentic benchmark ci weekly | @ZhangLirong-amd | open | 2026-08-28 | 2026-09-11 |
| [#2187](https://github.com/ROCm/ATOM/pull/2187) | feat(wideep): integrate EP16 transport with modular fused Mo... | @JiaoliangYu | draft | 2026-09-10 | 2026-09-11 |
| [#2196](https://github.com/ROCm/ATOM/pull/2196) | scheduler: make the prefill coalescer work on the TP/DCP pat... | @ZhiweiYan-96 | draft | 2026-09-11 | 2026-09-11 |
| [#1942](https://github.com/ROCm/ATOM/pull/1942) | feat(wideep): multi-node wide expert parallelism on top of #... | @JiaoliangYu | draft | 2026-08-18 | 2026-09-10 |
| [#2142](https://github.com/ROCm/ATOM/pull/2142) | [atom-vllm] LMCache offload for GLM-5.2 | @kliuae | open | 2026-09-04 | 2026-09-07 |
| [#2059](https://github.com/ROCm/ATOM/pull/2059) | docs: Fix duplicated table on atom overview | @timothycarambat | open | 2026-08-27 | 2026-08-29 |
| [#2074](https://github.com/ROCm/ATOM/pull/2074) | [DO NOT MERGE] bench: fixed-length prompts and no warmup | @JiaoliangYu | open | 2026-08-28 | 2026-08-28 |
| [#2066](https://github.com/ROCm/ATOM/pull/2066) | [MTP] fix low acceptance rate issue of glm5.2 MTP | @ZhiweiYan-96 | draft | 2026-08-28 | 2026-08-28 |
| [#2011](https://github.com/ROCm/ATOM/pull/2011) | [Feature] Integrate the AITER MK1 persistent decoder | @ssharma4-amd | draft | 2026-08-24 | 2026-08-26 |
| [#2015](https://github.com/ROCm/ATOM/pull/2015) | Optimized Attention Residual for Kimi-K3 | @amd-wsung102 | draft | 2026-08-25 | 2026-08-26 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-26 |
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-08-26 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-08-26 |
| [#1217](https://github.com/ROCm/ATOM/pull/1217) | [CI] add performance CI for online quant | @haoyangli0109 | open | 2026-06-15 | 2026-08-26 |
| [#2023](https://github.com/ROCm/ATOM/pull/2023) | feat(mla): optionally run sparse MLA on aiter's Gluon kernel | @cagrikymk | draft | 2026-08-25 | 2026-08-25 |
| [#1901](https://github.com/ROCm/ATOM/pull/1901) | [ATOM-vLLM] Add support for Qwen3.8 | @kliuae | open | 2026-08-14 | 2026-08-25 |
| [#1893](https://github.com/ROCm/ATOM/pull/1893) | [Kimi-K3] Route KDA prefill through the FlyDSL AITER kernel | @amd-wsung102 | open | 2026-08-13 | 2026-08-24 |
| [#1922](https://github.com/ROCm/ATOM/pull/1922) | [DO NOT MERGE] [LONG TERM] Gate heavy CI with reusable workf... | @gyohuangxin | open | 2026-08-17 | 2026-08-18 |
| [#1932](https://github.com/ROCm/ATOM/pull/1932) | fix(moe): preserve FP8 shuffle metadata | @akii96 | draft | 2026-08-17 | 2026-08-17 |
| [#1843](https://github.com/ROCm/ATOM/pull/1843) | [ATOM SGL][feat] K3 dspark | @ZhiweiYan-96 | draft | 2026-08-10 | 2026-08-17 |
| [#1867](https://github.com/ROCm/ATOM/pull/1867) | add new torch base docker | @zhuyuhua-v | draft | 2026-08-12 | 2026-08-17 |
| [#1888](https://github.com/ROCm/ATOM/pull/1888) | [fix](vllm): remove vllm patch | @PerryZhang01 | open | 2026-08-13 | 2026-08-14 |
| [#1892](https://github.com/ROCm/ATOM/pull/1892) | [Feat] Allow passing token ids to /v1/completions  | @simondanielsson | draft | 2026-08-13 | 2026-08-13 |
| [#1808](https://github.com/ROCm/ATOM/pull/1808) | feat: add reliable DP/TP collective RPC support for ATOM wor... | @JiaoliangYu | draft | 2026-08-06 | 2026-08-13 |
| [#1871](https://github.com/ROCm/ATOM/pull/1871) | [ATOM SGL] k3 dspark perf | @ZhiweiYan-96 | draft | 2026-08-12 | 2026-08-12 |
| [#837](https://github.com/ROCm/ATOM/pull/837) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-07-03 |
| [#3577](https://github.com/ROCm/ATOM/pull/3577) | Allocate Kimi's block-residual bank once per forward | @whx-sjtu | merged | 2026-11-19 | 2026-11-27 |
| [#3892](https://github.com/ROCm/ATOM/pull/3892) | feat(dsv41 mono): run mono decode beside --moe-backend mega | @JiaoliangYu | merged | 2026-11-26 | 2026-11-27 |
| [#3840](https://github.com/ROCm/ATOM/pull/3840) | fix(api_server): run the front-end workers on jemalloc so th... | @yhl-amd | merged | 2026-11-25 | 2026-11-27 |
| [#3672](https://github.com/ROCm/ATOM/pull/3672) | [ATOM gRPC] Engine: token-id prompts reuse block-hash chains... | @Jasen2201 | merged | 2026-11-21 | 2026-11-27 |
| [#3838](https://github.com/ROCm/ATOM/pull/3838) | perf(dsv41): indexer: wide block-maxima grid on gfx950, and ... | @yhl-amd | merged | 2026-11-25 | 2026-11-27 |
| [#3928](https://github.com/ROCm/ATOM/pull/3928) | ci: keep the SGLang accuracy image cached between cases; pau... | @junyyang-amd | merged | 2026-11-27 | 2026-11-27 |
| [#3412](https://github.com/ROCm/ATOM/pull/3412) | feat(engine): encoder-only openai_server; prefill reads E's ... | @junyyang-amd | merged | 2026-11-16 | 2026-11-27 |
| [#3411](https://github.com/ROCm/ATOM/pull/3411) | feat(engine): image embedding transport over Mooncake | @junyyang-amd | merged | 2026-11-16 | 2026-11-27 |
| [#3933](https://github.com/ROCm/ATOM/pull/3933) | MiniMax-M3.1 gfx1250 C4 decode (11-27): AQ, MoE front + tail... | @XiaobingSuper | merged | 2026-11-27 | 2026-11-27 |
| [#3774](https://github.com/ROCm/ATOM/pull/3774) | [Sgl Atom][test] Check GDN forward-context step ownership | @ZLkanyo009 | merged | 2026-11-24 | 2026-11-27 |
| [#3748](https://github.com/ROCm/ATOM/pull/3748) | fix(graphs): ATOM_GRAPH_SIDE_STREAMS=0 records every CUDA gr... | @PerryZhang01 | merged | 2026-11-23 | 2026-11-27 |
| [#3731](https://github.com/ROCm/ATOM/pull/3731) | [Docs] Add Qwen3.8 AgentX c1-c64 performance recipe | @ZLkanyo009 | merged | 2026-11-23 | 2026-11-27 |
| [#3849](https://github.com/ROCm/ATOM/pull/3849) | [atomrl] Keep AtomRL and Lumen CI CPU-only | @ZhangDanyang-AMD | merged | 2026-11-25 | 2026-11-27 |
| [#3612](https://github.com/ROCm/ATOM/pull/3612) | Gather DCP decode candidates in the merge layout | @whx-sjtu | merged | 2026-11-20 | 2026-11-27 |
| [#3875](https://github.com/ROCm/ATOM/pull/3875) | [P/D] PP stages push their Mooncake Store load terminals to ... | @Jasen2201 | merged | 2026-11-26 | 2026-11-27 |
| [#3344](https://github.com/ROCm/ATOM/pull/3344) | feat(mesh): KV events 5/5 — tiered scoring: cache_aware weig... | @wanzhenchn | merged | 2026-11-14 | 2026-11-27 |
| [#3921](https://github.com/ROCm/ATOM/pull/3921) | Fix main CI after #3353: read ATOM_DP_LM_HEAD_MODE at admiss... | @JiaoliangYu | merged | 2026-11-27 | 2026-11-27 |
| [#3927](https://github.com/ROCm/ATOM/pull/3927) | [recipe] DeepSeek-V4.1-Flash P/D: report y with the SemiAnal... | @ZhangLirong-amd | merged | 2026-11-27 | 2026-11-27 |
| [#3916](https://github.com/ROCm/ATOM/pull/3916) | [recipe] DeepSeek-V4.1-Flash P/D: how to configure the PRs u... | @ZhangLirong-amd | merged | 2026-11-27 | 2026-11-27 |
| [#3839](https://github.com/ROCm/ATOM/pull/3839) | perf(sampler): skip the greedy-row argmax when no request in... | @yhl-amd | merged | 2026-11-25 | 2026-11-27 |
| [#3884](https://github.com/ROCm/ATOM/pull/3884) | [P/D] Mooncake: register on the GPU's PCIe-local NIC, not rd... | @Jasen2201 | merged | 2026-11-26 | 2026-11-27 |
| [#3618](https://github.com/ROCm/ATOM/pull/3618) | Fix ReplaySSM flush record ordering | @whx-sjtu | merged | 2026-11-20 | 2026-11-27 |
| [#3818](https://github.com/ROCm/ATOM/pull/3818) | feat(mesh): render every chat in Rust, DeepSeek V3.2 / V4 / ... | @Yuechguo | merged | 2026-11-25 | 2026-11-27 |
| [#3353](https://github.com/ROCm/ATOM/pull/3353) | [DP] ATOM_DP_LM_HEAD_MODE=argmax: exchange the DP-sharded LM... | @JiaoliangYu | merged | 2026-11-14 | 2026-11-27 |
| [#3497](https://github.com/ROCm/ATOM/pull/3497) | review-pr: refuse a finding that opens with an internal rule... | @zufayu | merged | 2026-11-18 | 2026-11-27 |
| [#3556](https://github.com/ROCm/ATOM/pull/3556) | review-pr: say which check refused, instead of always saying... | @zufayu | merged | 2026-11-19 | 2026-11-27 |
| [#3686](https://github.com/ROCm/ATOM/pull/3686) | embed_head: mask out-of-range ids at TP1 too | @zejunchen-zejun | merged | 2026-11-21 | 2026-11-27 |
| [#3715](https://github.com/ROCm/ATOM/pull/3715) | feat(offload): runtime switch for lmcache_mp tier lookups | @HaonanWang98 | merged | 2026-11-23 | 2026-11-27 |
| [#3632](https://github.com/ROCm/ATOM/pull/3632) | perf(sglang): Qwen3.8-Flash-Next sequence-parallel reduce-sc... | @yicyang | merged | 2026-11-20 | 2026-11-27 |
| [#3887](https://github.com/ROCm/ATOM/pull/3887) | [SGLang] Transfer Native Qwen4Exp QSA and PLE state in PD | @apinge | merged | 2026-11-26 | 2026-11-27 |
| [#3759](https://github.com/ROCm/ATOM/pull/3759) | [recipe] DeepSeek-V4.1-Flash P/D: 4P4D TTFT config + 4P8D Ag... | @ZhangLirong-amd | merged | 2026-11-24 | 2026-11-27 |
| [#3777](https://github.com/ROCm/ATOM/pull/3777) | perf(dp): let DP ranks idle while their only work is blocked... | @ZhangLirong-amd | merged | 2026-11-24 | 2026-11-27 |
| [#3311](https://github.com/ROCm/ATOM/pull/3311) | Cut Kimi-K3.1's DCP sparse prefill overhead in its DSA layer... | @whx-sjtu | merged | 2026-11-13 | 2026-11-26 |
| [#3874](https://github.com/ROCm/ATOM/pull/3874) | [atomesh] Dispatch the ATOM decode leg concurrently with pre... | @ZhangLirong-amd | merged | 2026-11-26 | 2026-11-26 |
| [#3854](https://github.com/ROCm/ATOM/pull/3854) | perf(pd): accept prompt ids as base64 packed uint32 to cut d... | @ZhangLirong-amd | merged | 2026-11-25 | 2026-11-26 |
| [#3873](https://github.com/ROCm/ATOM/pull/3873) | [PD] Decode side: accept late KV params on /v1/pd/late_kv/ch... | @ZhangLirong-amd | merged | 2026-11-26 | 2026-11-26 |
| [#3653](https://github.com/ROCm/ATOM/pull/3653) | Refuse a prompt that encodes to no tokens with a 400 | @wanzhenchn | merged | 2026-11-21 | 2026-11-26 |
| [#3889](https://github.com/ROCm/ATOM/pull/3889) | [DSpark][gfx1250] Take the draft block decode's head count f... | @gbyu-amd | merged | 2026-11-26 | 2026-11-26 |
| [#3732](https://github.com/ROCm/ATOM/pull/3732) | [SGLang plugin] DeepSeek-V4.1-Flash: DSpark speculative deco... | @ZhiweiYan-96 | merged | 2026-11-23 | 2026-11-26 |
| [#3879](https://github.com/ROCm/ATOM/pull/3879) | test(kimi-k3): complete checkpoint forward context mock | @whx-sjtu | merged | 2026-11-26 | 2026-11-26 |
| [#2942](https://github.com/ROCm/ATOM/pull/2942) | feat(kimi-k3): record prefill as token graphs | @gbyu-amd | merged | 2026-11-03 | 2026-11-26 |
| [#3501](https://github.com/ROCm/ATOM/pull/3501) | Build Kimi ladder, demand and anchor checkpoints with head r... | @whx-sjtu | merged | 2026-11-18 | 2026-11-26 |
| [#3437](https://github.com/ROCm/ATOM/pull/3437) | perf(dsv41): settle an owed mHC post into the collapse and t... | @yhl-amd | merged | 2026-11-16 | 2026-11-26 |
| [#3186](https://github.com/ROCm/ATOM/pull/3186) | feat(dsv41): EPLB on the layers before the decoder | @JiaoliangYu | merged | 2026-11-11 | 2026-11-26 |
| [#3521](https://github.com/ROCm/ATOM/pull/3521) | [sgl+atom] Fix Qwen3.8 TP2/TP4 MoE padding and BF16 MTP on g... | @apinge | merged | 2026-11-18 | 2026-11-26 |
| [#3535](https://github.com/ROCm/ATOM/pull/3535) | perf(dsv41): fold indexer weights_proj into the FP4 query qu... | @karverma-amd | merged | 2026-11-19 | 2026-11-26 |
| [#3407](https://github.com/ROCm/ATOM/pull/3407) | feat(mesh): key routing by image identity and log the media ... | @junyyang-amd | merged | 2026-11-16 | 2026-11-26 |
| [#3481](https://github.com/ROCm/ATOM/pull/3481) | feat(mesh): count in-flight prefill tokens per worker (url@r... | @MengqingCao | merged | 2026-11-17 | 2026-11-26 |
| [#3610](https://github.com/ROCm/ATOM/pull/3610) | fix(api): fold mid-conversation system messages for template... | @yitingw1 | merged | 2026-11-20 | 2026-11-26 |
| [#3842](https://github.com/ROCm/ATOM/pull/3842) | [Fix] Initialize V4.1 DSpark noise embedding before graph wa... | @yifehuan | merged | 2026-11-25 | 2026-11-25 |
| [#3197](https://github.com/ROCm/ATOM/pull/3197) | fix(graphs): a token-graph recording keeps no argument its r... | @PerryZhang01 | merged | 2026-11-11 | 2026-11-25 |
| [#2037](https://github.com/ROCm/ATOM/pull/2037) | feat(v4): mixed prefill/decode batching with DSpark | @jiayyu | merged | 2026-08-26 | 2026-11-25 |
| [#3843](https://github.com/ROCm/ATOM/pull/3843) | CI: gate DeepSeek-V4.1 DSpark acceptance | @yifehuan | merged | 2026-11-25 | 2026-11-25 |
| [#2877](https://github.com/ROCm/ATOM/pull/2877) | [DSV4.1] DSpark lossless draft: four launches per draft posi... | @JiaoliangYu | merged | 2026-11-01 | 2026-11-25 |
| [#3848](https://github.com/ROCm/ATOM/pull/3848) | [CI sandbox - not for main] evaluator design test A | @valarLip | merged | 2026-11-25 | 2026-11-25 |
| [#3187](https://github.com/ROCm/ATOM/pull/3187) | [MoE] MegaMoE: let AITER pick small/large/staged routes from... | @GwilliamHu | merged | 2026-11-11 | 2026-11-25 |
| [#3410](https://github.com/ROCm/ATOM/pull/3410) | feat(engine): multimodal PD through the chat path | @junyyang-amd | merged | 2026-11-16 | 2026-11-25 |
| [#3552](https://github.com/ROCm/ATOM/pull/3552) | [Sgl Atom][fix] GDN target verify: zero padded rows in the b... | @ZLkanyo009 | merged | 2026-11-19 | 2026-11-25 |
| [#3586](https://github.com/ROCm/ATOM/pull/3586) | docs: add a guide for using Claude Code with ATOM | @yitingw1 | merged | 2026-11-19 | 2026-11-25 |
| [#3729](https://github.com/ROCm/ATOM/pull/3729) | Install structured output by default (llguidance and RE2 as ... | @yitingw1 | merged | 2026-11-23 | 2026-11-25 |
| [#2945](https://github.com/ROCm/ATOM/pull/2945) | feat(k3-mono): run on an fp16 KDA recurrent state pool | @rebklee | merged | 2026-11-03 | 2026-11-25 |
| [#3419](https://github.com/ROCm/ATOM/pull/3419) | [SGLang plugin] DeepSeek-V4.1-Flash: decode CUDA graphs, dec... | @ZhiweiYan-96 | merged | 2026-11-16 | 2026-11-25 |
| [#3482](https://github.com/ROCm/ATOM/pull/3482) | feat(kv): umbp_pool KV connector that provides the KV pool (... | @yhl-amd | merged | 2026-11-17 | 2026-11-25 |
| [#3816](https://github.com/ROCm/ATOM/pull/3816) | [Qwen3.5/3.6 recipe] 2026-11-24: low-concurrency decode bund... | @azaidy | merged | 2026-11-25 | 2026-11-25 |
| [#3815](https://github.com/ROCm/ATOM/pull/3815) | [gfx1250][Qwen3.5] Low-concurrency decode: fewer kernels and... | @azaidy | merged | 2026-11-25 | 2026-11-25 |
| [#3728](https://github.com/ROCm/ATOM/pull/3728) | [structured-output] report availability on /v1/models, requi... | @yitingw1 | merged | 2026-11-23 | 2026-11-25 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-11-27T17:42:40Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1109](https://github.com/ROCm/mori/pull/1109) |  feat(metrics): IO / EP traffic metrics with Prometheus expo... | @QizhouZhang97 | open | 2026-11-27 | 2026-11-27 |
| [#1050](https://github.com/ROCm/mori/pull/1050) | fix(umbp): a lookup leases the keys it finds instead of rene... | @isytwu | open | 2026-11-19 | 2026-11-27 |
| [#1110](https://github.com/ROCm/mori/pull/1110) | feat(umbp): lookups change nothing; BatchLease protects what... | @isytwu | open | 2026-11-27 | 2026-11-27 |
| [#1049](https://github.com/ROCm/mori/pull/1049) | perf(umbp): search the page bitmap a word at a time | @isytwu | open | 2026-11-19 | 2026-11-27 |
| [#1048](https://github.com/ROCm/mori/pull/1048) | fix(umbp): keep the standalone server's transfer buffers on ... | @isytwu | open | 2026-11-19 | 2026-11-27 |
| [#1047](https://github.com/ROCm/mori/pull/1047) | fix(umbp): plan local ranged puts object by object, with end... | @isytwu | open | 2026-11-19 | 2026-11-27 |
| [#1056](https://github.com/ROCm/mori/pull/1056) | docs(umbp): RFC for agent context retention | @GL-AMD | draft | 2026-11-20 | 2026-11-27 |
| [#1107](https://github.com/ROCm/mori/pull/1107) | feat(umbp/l1): multi-part pools, and evicted last copies go ... | @TianDi101 | draft | 2026-11-27 | 2026-11-27 |
| [#1105](https://github.com/ROCm/mori/pull/1105) | perf(EPv2/AsyncLL): send phases on 8 blocks, dispatch receiv... | @jhchouuu | open | 2026-11-26 | 2026-11-27 |
| [#1042](https://github.com/ROCm/mori/pull/1042) | feat(cco): ccoProxy, a host-proxy RDMA transport (KIWI step ... | @jhchouuu | open | 2026-11-19 | 2026-11-27 |
| [#1074](https://github.com/ROCm/mori/pull/1074) | feat(umbp): add direct native L1 sharing across trays | @wuyl1 | open | 2026-11-23 | 2026-11-27 |
| [#1069](https://github.com/ROCm/mori/pull/1069) | perf(fused): SDMA MoE stage1 gemm tile-loop changes behind -... | @kawhil-amd | draft | 2026-11-22 | 2026-11-27 |
| [#996](https://github.com/ROCm/mori/pull/996) | perf(ep/v2): atomic-free inter-node signalling, lower v2_ll ... | @jhchouuu | open | 2026-11-13 | 2026-11-27 |
| [#1108](https://github.com/ROCm/mori/pull/1108) | feat(sdma): optional fix for device-posted queues on odd SDM... | @kawhil-amd | draft | 2026-11-27 | 2026-11-27 |
| [#816](https://github.com/ROCm/mori/pull/816) | Draft collectives develop | @pemeliya | draft | 2026-10-20 | 2026-11-26 |
| [#1092](https://github.com/ROCm/mori/pull/1092) | perf(umbp): fuse page-fragment expansion into the GPU gather... | @BadrBasowid | open | 2026-11-25 | 2026-11-26 |
| [#818](https://github.com/ROCm/mori/pull/818) | Refactor GPU vector load/store primitives and WarpAccum func... | @pemeliya | open | 2026-10-20 | 2026-11-26 |
| [#1102](https://github.com/ROCm/mori/pull/1102) | feat(umbp/l1): multi-part pools (TP ranks), and evicted last... | @TianDi101 | draft | 2026-11-26 | 2026-11-26 |
| [#1103](https://github.com/ROCm/mori/pull/1103) | ci: /ci-rerun merges the current main into the PR branch and... | @jhchouuu | open | 2026-11-26 | 2026-11-26 |
| [#1004](https://github.com/ROCm/mori/pull/1004) | feat(ep/v2): internode dispatch can write aiter's moe_sortin... | @jhchouuu | open | 2026-11-13 | 2026-11-26 |
| [#997](https://github.com/ROCm/mori/pull/997) | feat(sdma): choose SDMA engines per GPU arch from one plan | @jhchouuu | open | 2026-11-13 | 2026-11-26 |
| [#1096](https://github.com/ROCm/mori/pull/1096) | perf(umbp): borrow NumPy descriptors for ranged restores | @BadrBasowid | draft | 2026-11-25 | 2026-11-25 |
| [#1067](https://github.com/ROCm/mori/pull/1067) | fix(io): preserve GEM pointer device with HIP VMM mapping | @YukioZzz | open | 2026-11-21 | 2026-11-25 |
| [#1093](https://github.com/ROCm/mori/pull/1093) | perf(umbp): enable fused paged gather for striped restores [... | @BadrBasowid | draft | 2026-11-25 | 2026-11-25 |
| [#911](https://github.com/ROCm/mori/pull/911) | feat(ras): host NIC inventory, topology, and labels in the i... | @i-chaochen | open | 2026-11-04 | 2026-11-25 |
| [#1088](https://github.com/ROCm/mori/pull/1088) | feat(umbp/l1): carry the per-step pool calls in shared memor... | @TianDi101 | open | 2026-11-24 | 2026-11-25 |
| [#1083](https://github.com/ROCm/mori/pull/1083) | perf(cco): write SDMA packets back to back, without NOP padd... | @dsidler | open | 2026-11-24 | 2026-11-25 |
| [#1091](https://github.com/ROCm/mori/pull/1091) | perf(umbp): a remote reader's report makes its DRAM/HBM key ... | @TianDi101 | open | 2026-11-25 | 2026-11-25 |
| [#1054](https://github.com/ROCm/mori/pull/1054) | perf(gemm-ar): stage the fp8-scatter epilogue in LDS and wid... | @kawhil-amd | open | 2026-11-19 | 2026-11-25 |
| [#1084](https://github.com/ROCm/mori/pull/1084) | perf(fused): SDMA MoE stage2 drops the plan kernel and slims... | @kawhil-amd | draft | 2026-11-24 | 2026-11-24 |
| [#850](https://github.com/ROCm/mori/pull/850) | [UMBP] Add async prefetch requests for Router integration | @wuyl1 | open | 2026-10-27 | 2026-11-24 |
| [#1038](https://github.com/ROCm/mori/pull/1038) | fix(jit): add rocm_sysdeps include dir so hipcc finds libdrm... | @IzacharyI | open | 2026-11-18 | 2026-11-24 |
| [#1081](https://github.com/ROCm/mori/pull/1081) | Ci/radeon r9700 io dispatch | @amirakb89 | open | 2026-11-23 | 2026-11-23 |
| [#1080](https://github.com/ROCm/mori/pull/1080) | Fix/io xgmi python test stream race | @amirakb89 | open | 2026-11-23 | 2026-11-23 |
| [#1079](https://github.com/ROCm/mori/pull/1079) | [Bugfix][UMBP] Reclaim registrations of exited standalone wo... | @YukioZzz | draft | 2026-11-23 | 2026-11-23 |
| [#1044](https://github.com/ROCm/mori/pull/1044) | feat(umbp): pool rules, a per-pool table for the put, evict,... | @TianDi101 | draft | 2026-11-19 | 2026-11-23 |
| [#1077](https://github.com/ROCm/mori/pull/1077) | [Bugfix][UMBP] Keep standalone client IDs unique across PID ... | @YukioZzz | draft | 2026-11-23 | 2026-11-23 |
| [#1053](https://github.com/ROCm/mori/pull/1053) | fix(umbp/l1): fence external fetch destinations before copyi... | @wuyl1 | open | 2026-11-19 | 2026-11-23 |
| [#1072](https://github.com/ROCm/mori/pull/1072) | ci: i132ghgate-mori bounded runner gate (auto-close) | @lijinhan21 | open | 2026-11-22 | 2026-11-22 |
| [#1071](https://github.com/ROCm/mori/pull/1071) | fix(umbp): ack resent delta bundles without requesting a ful... | @ZeXi0308 | open | 2026-11-22 | 2026-11-22 |
| [#1068](https://github.com/ROCm/mori/pull/1068) | feat(umbp): make complete ranged-read caching optional | @YukioZzz | draft | 2026-11-22 | 2026-11-22 |
| [#1058](https://github.com/ROCm/mori/pull/1058) | docs(umbp): RFC for role-independent KV lifetime and handoff | @GL-AMD | draft | 2026-11-20 | 2026-11-20 |
| [#1057](https://github.com/ROCm/mori/pull/1057) | docs(umbp): RFC for KV readiness estimates and routing | @GL-AMD | draft | 2026-11-20 | 2026-11-20 |
| [#1051](https://github.com/ROCm/mori/pull/1051) | feat(rdma): HIP GEM allocator so RDMA-registered KV caches a... | @isytwu | open | 2026-11-19 | 2026-11-19 |
| [#1023](https://github.com/ROCm/mori/pull/1023) | feat(umbp): server-side group eviction for umbp_store (LinkG... | @TianDi101 | open | 2026-11-17 | 2026-11-19 |
| [#846](https://github.com/ROCm/mori/pull/846) | feat(io): add version/mode/layout compatibility check to han... | @kudomcho | open | 2026-10-26 | 2026-11-18 |
| [#1039](https://github.com/ROCm/mori/pull/1039) | feat(umbp): BatchRemove, so a client can drop objects it wil... | @isytwu | open | 2026-11-18 | 2026-11-18 |
| [#1037](https://github.com/ROCm/mori/pull/1037) | Fix/io deregister tears down peer | @amirakb89 | open | 2026-11-18 | 2026-11-18 |
| [#1033](https://github.com/ROCm/mori/pull/1033) | feat(cco): per-comm config (cpuAffinity, lsaOnly), a Context... | @jhchouuu | draft | 2026-11-17 | 2026-11-17 |
| [#1035](https://github.com/ROCm/mori/pull/1035) | feat(allocator): contract-complete torch.symm_mem backend, d... | @jhchouuu | draft | 2026-11-17 | 2026-11-17 |
| [#1034](https://github.com/ROCm/mori/pull/1034) | feat(cco): versioned host C ABI (cco_c.h) and libmori_cco.so... | @jhchouuu | draft | 2026-11-17 | 2026-11-17 |
| [#1031](https://github.com/ROCm/mori/pull/1031) | docs(skills): add umbp-tuning, a framework for analyzing and... | @TianDi101 | open | 2026-11-17 | 2026-11-17 |
| [#842](https://github.com/ROCm/mori/pull/842) | fix(umbp): master routes a repeat put of an in-flight key to... | @TianDi101 | open | 2026-10-26 | 2026-11-17 |
| [#1026](https://github.com/ROCm/mori/pull/1026) | fix(umbp): a remote read that outlives the peer's read lease... | @TianDi101 | draft | 2026-11-17 | 2026-11-17 |
| [#1024](https://github.com/ROCm/mori/pull/1024) | feat(umbp): one-hop UALink fabric paths between DRAM and HBM... | @TianDi101 | draft | 2026-11-17 | 2026-11-17 |
| [#891](https://github.com/ROCm/mori/pull/891) | [DSV4.1] Vectorize the top-6 fp4_blockwise intranode combine... | @heachary | open | 2026-11-02 | 2026-11-16 |
| [#1005](https://github.com/ROCm/mori/pull/1005) | feat(io,umbp): serve RDMA reads as owner-side writes on NICs... | @TianDi101 | open | 2026-11-14 | 2026-11-14 |
| [#797](https://github.com/ROCm/mori/pull/797) | Fall back to scoped 64-bit atomics when b128 global builtins... | @aokblast | open | 2026-10-18 | 2026-11-12 |
| [#941](https://github.com/ROCm/mori/pull/941) | fix(umbp): re-register standalone memory after the server re... | @charxwu | open | 2026-11-09 | 2026-11-12 |
| [#986](https://github.com/ROCm/mori/pull/986) | feat(umbp): add low-priority gather copies | @BadrBasowid | draft | 2026-11-11 | 2026-11-11 |
| [#966](https://github.com/ROCm/mori/pull/966) | feat(ep): GPU-free dispatch/combine simulation with config-d... | @TianDi101 | open | 2026-11-10 | 2026-11-11 |
| [#980](https://github.com/ROCm/mori/pull/980) | [Fix][IO] Bound TCP control frames by a shared receive deadl... | @Lzy17 | open | 2026-11-10 | 2026-11-10 |
| [#699](https://github.com/ROCm/mori/pull/699) | chore: add security scanning workflows | @haribabug | open | 2026-09-22 | 2026-11-10 |
| [#962](https://github.com/ROCm/mori/pull/962) | gemm_ar: run the triggered all-reduce's reducer beside the G... | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#888](https://github.com/ROCm/mori/pull/888) | feat(umbp): direct pool ranged GET with missing-range dedupl... | @wuyl1 | open | 2026-11-02 | 2026-11-10 |
| [#885](https://github.com/ROCm/mori/pull/885) | ci: request a Claude PR review with /claude-review or the cl... | @i-chaochen | open | 2026-11-01 | 2026-11-10 |
| [#959](https://github.com/ROCm/mori/pull/959) | feat(cco): Python bindings for trigger queues | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#957](https://github.com/ROCm/mori/pull/957) | feat(cco): host-armed SDMA trigger queues | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#956](https://github.com/ROCm/mori/pull/956) | feat(anvil): private SDMA queues with host access to the rin... | @BKP | open | 2026-11-09 | 2026-11-10 |
| [#887](https://github.com/ROCm/mori/pull/887) | [UMBP] Add local-only PUT placement with cross-node sharing | @wuyl1 | open | 2026-11-02 | 2026-11-10 |
| [#961](https://github.com/ROCm/mori/pull/961) | gemm_ar: triggered GEMM + two-shot all-reduce op | @BKP | open | 2026-11-09 | 2026-11-09 |
| [#960](https://github.com/ROCm/mori/pull/960) | gemm_ar: gate table and gate-epilogue view | @BKP | open | 2026-11-09 | 2026-11-09 |
| [#946](https://github.com/ROCm/mori/pull/946) | fix(cco): import a torch.symm_mem buffer whose data starts i... | @jhchouuu | open | 2026-11-09 | 2026-11-09 |
| [#933](https://github.com/ROCm/mori/pull/933) | feat(io/sim): post_on_host -- per-op / per-segment cost on t... | @ZhaiFeiyue | open | 2026-11-07 | 2026-11-08 |
| [#934](https://github.com/ROCm/mori/pull/934) | fix(io/sim): skip unknown catalog fields with a warning; MOR... | @ZhaiFeiyue | open | 2026-11-07 | 2026-11-07 |
| [#632](https://github.com/ROCm/mori/pull/632) | fix(cco): take allocMutex on the window paths | @jhchouuu | open | 2026-09-02 | 2026-11-06 |
| [#904](https://github.com/ROCm/mori/pull/904) | feat(cco): example 13 -- MegaMoE Stage1 with the dispatch on... | @yangyuhuiling | draft | 2026-11-03 | 2026-11-06 |
| [#922](https://github.com/ROCm/mori/pull/922) | fix(io): name a QP that enters the error state with no faile... | @isytwu | open | 2026-11-05 | 2026-11-05 |
| [#919](https://github.com/ROCm/mori/pull/919) | feat(cco): example 14 -- the whole EP MoE layer in one persi... | @yangyuhuiling | draft | 2026-11-05 | 2026-11-05 |
| [#916](https://github.com/ROCm/mori/pull/916) | poc(cco): MoE quantise-and-dispatch with SDMA | @kawhil-amd | draft | 2026-11-04 | 2026-11-05 |
| [#884](https://github.com/ROCm/mori/pull/884) | feat(umbp): move remote ranged I/O straight between register... | @isytwu | draft | 2026-11-01 | 2026-11-04 |
| [#865](https://github.com/ROCm/mori/pull/865) | feat(umbp): the UMBP_DISTRIBUTED_* variables configure an in... | @isytwu | open | 2026-10-28 | 2026-11-04 |
| [#883](https://github.com/ROCm/mori/pull/883) | feat(umbp): lease ranged scratch slices by size instead of f... | @isytwu | draft | 2026-10-31 | 2026-11-04 |
| [#912](https://github.com/ROCm/mori/pull/912) | feat(ras): record which GPU and NICs each local engine uses ... | @i-chaochen | open | 2026-11-04 | 2026-11-04 |
| [#869](https://github.com/ROCm/mori/pull/869) | fix(rdma): opt-in workaround for KFD free-VRAM miscount of R... | @isytwu | open | 2026-10-29 | 2026-10-29 |
| [#864](https://github.com/ROCm/mori/pull/864) | fix(io): a post that runs out of SQ depth no longer leaks th... | @isytwu | open | 2026-10-28 | 2026-10-28 |
| [#863](https://github.com/ROCm/mori/pull/863) | fix(bootstrap): close sockets and peer fds on failure paths | @jhchouuu | open | 2026-10-28 | 2026-10-28 |
| [#833](https://github.com/ROCm/mori/pull/833) | fix(topology): give each NIC its closest GPUs before farther... | @MohitAMD | open | 2026-10-22 | 2026-10-22 |
| [#730](https://github.com/ROCm/mori/pull/730) | draft: perf(ep/asyncll): fuse recv-count signal onto send QP... | @yoqiu-amd | open | 2026-10-09 | 2026-10-16 |
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
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-08-31 |
| [#598](https://github.com/ROCm/mori/pull/598) | tune(ep/v2): give fp8 dispatch its own gfx1250 EP4 row | @jhchouuu | open | 2026-08-24 | 2026-08-31 |
| [#1106](https://github.com/ROCm/mori/pull/1106) | perf(EPv2): HIP dispatch rows for EP8 model shapes on MI300X... | @jhchouuu | merged | 2026-11-26 | 2026-11-27 |
| [#1094](https://github.com/ROCm/mori/pull/1094) | examples(ep): JAX MoE block on dispatch/combine  | @pemeliya | merged | 2026-11-25 | 2026-11-27 |
| [#1098](https://github.com/ROCm/mori/pull/1098) | fix(gfx1250): pass the TDM descriptor groups as unsigned vec... | @mhalk | merged | 2026-11-25 | 2026-11-27 |
| [#1101](https://github.com/ROCm/mori/pull/1101) | cco: open the NICs only when a peer needs RDMA | @jhchouuu | merged | 2026-11-26 | 2026-11-26 |
| [#1104](https://github.com/ROCm/mori/pull/1104) | ci(umbp): run the io_uring storage tests on io_uring | @TianDi101 | merged | 2026-11-26 | 2026-11-26 |
| [#1086](https://github.com/ROCm/mori/pull/1086) | fix(umbp): submit an io_uring request again when it complete... | @Hoipang | merged | 2026-11-24 | 2026-11-26 |
| [#1100](https://github.com/ROCm/mori/pull/1100) | fix(shmem): broadcast UniqueId from the subgroup leader's gl... | @zhenhantech | merged | 2026-11-26 | 2026-11-26 |
| [#1059](https://github.com/ROCm/mori/pull/1059) | perf(EPv2): replace the intranode dispatch with a block-per-... | @kawhil-amd | merged | 2026-11-20 | 2026-11-26 |
| [#1099](https://github.com/ROCm/mori/pull/1099) | ci: switch off the AsyncLL quantized combine step, which red... | @kawhil-amd | merged | 2026-11-26 | 2026-11-26 |
| [#1089](https://github.com/ROCm/mori/pull/1089) | perf(umbp/l1): cheaper pool manager bookkeeping, and grants ... | @TianDi101 | merged | 2026-11-24 | 2026-11-25 |
| [#1078](https://github.com/ROCm/mori/pull/1078) | [Bugfix][UMBP] Confirm lookup hits while acquiring their lea... | @YukioZzz | merged | 2026-11-23 | 2026-11-25 |
| [#1066](https://github.com/ROCm/mori/pull/1066) | fix(cco): create SDMA queues only for an explicit sdma_queue... | @jhchouuu | merged | 2026-11-20 | 2026-11-25 |
| [#1082](https://github.com/ROCm/mori/pull/1082) | fix(umbp/l1): nine pool and copy defects from the #1045 revi... | @TianDi101 | merged | 2026-11-24 | 2026-11-25 |
| [#910](https://github.com/ROCm/mori/pull/910) | feat(ras): link round-trip time and clock offset (RAS 3/5) | @i-chaochen | merged | 2026-11-04 | 2026-11-25 |
| [#1087](https://github.com/ROCm/mori/pull/1087) | perf(EPv2): fp8 quantized combine for single-node SDMA Async... | @kawhil-amd | merged | 2026-11-24 | 2026-11-25 |
| [#1090](https://github.com/ROCm/mori/pull/1090) | ci(umbp): run every UMBP C++ unit test, not only the umbp_-n... | @TianDi101 | merged | 2026-11-25 | 2026-11-25 |
| [#985](https://github.com/ROCm/mori/pull/985) | feat(umbp): opt-in NIC loopback for local host<->GPU copies | @kawhil-amd | merged | 2026-11-11 | 2026-11-25 |
| [#1075](https://github.com/ROCm/mori/pull/1075) | fix(ep): AsyncLL and InterNodeV1LL dispatch send -1 expert s... | @PerryZhang01 | merged | 2026-11-23 | 2026-11-25 |
| [#795](https://github.com/ROCm/mori/pull/795) | fix(EPv2): map the gfx942 HF and VF device IDs to their mode... | @jeffdaily | merged | 2026-10-17 | 2026-11-25 |
| [#1085](https://github.com/ROCm/mori/pull/1085) | fix(ep/v2): FlyDSL intranode dispatch drops slots with a neg... | @Duyi-Wang | merged | 2026-11-24 | 2026-11-25 |
| [#1062](https://github.com/ROCm/mori/pull/1062) | fix(umbp): answer UNKNOWN to keepalives and deltas from expi... | @ZeXi0308 | merged | 2026-11-20 | 2026-11-24 |
| [#1076](https://github.com/ROCm/mori/pull/1076) | ci: run the EPv2 internode test on the MI300X pair, in PR CI... | @jhchouuu | merged | 2026-11-23 | 2026-11-24 |
| [#998](https://github.com/ROCm/mori/pull/998) | fix(jit): release the JIT build lock when its holder dies | @jhchouuu | merged | 2026-11-13 | 2026-11-24 |
| [#1065](https://github.com/ROCm/mori/pull/1065) | feat(ep/v2): HIP intranode on gfx942/gfx950: token dropping,... | @jhchouuu | merged | 2026-11-20 | 2026-11-24 |
| [#1045](https://github.com/ROCm/mori/pull/1045) | feat(umbp/l1): adopt the engine's KV memory, and fetch into ... | @yhl-amd | merged | 2026-11-19 | 2026-11-24 |
| [#825](https://github.com/ROCm/mori/pull/825) | feat(umbp): add multi-GPU KV cache restores | @BadrBasowid | merged | 2026-10-21 | 2026-11-24 |
| [#1073](https://github.com/ROCm/mori/pull/1073) | fix(umbp): a coalesced HBM copy never crosses a host registr... | @TianDi101 | merged | 2026-11-23 | 2026-11-23 |
| [#848](https://github.com/ROCm/mori/pull/848) | Feat/io receiver fence | @amirakb89 | merged | 2026-10-27 | 2026-11-23 |
| [#1064](https://github.com/ROCm/mori/pull/1064) | fix(EPv2/gfx1250): derive the dispatch warp default from the... | @kawhil-amd | merged | 2026-11-20 | 2026-11-23 |
| [#937](https://github.com/ROCm/mori/pull/937) | perf(ep/v1ll): lower MI355X EP32 small-batch latency for hid... | @jhchouuu | merged | 2026-11-09 | 2026-11-23 |
| [#1043](https://github.com/ROCm/mori/pull/1043) | perf(EPv2/gfx1250): EP4 fp8 / fp4 push combine fills its rin... | @zhangfei829 | merged | 2026-11-19 | 2026-11-23 |
| [#1025](https://github.com/ROCm/mori/pull/1025) | perf(EPv2/gfx1250): EP4 fp8 / fp4 dispatch cuts its metadata... | @zhangfei829 | merged | 2026-11-17 | 2026-11-23 |
| [#1012](https://github.com/ROCm/mori/pull/1012) | feat(ep/v2): explicit 1x32/1x128 combine quant formats, serv... | @jhchouuu | merged | 2026-11-16 | 2026-11-20 |
| [#950](https://github.com/ROCm/mori/pull/950) | feat(ep): sync KIWI EP with upstream tuning, proxy affinity ... | @charlifu | merged | 2026-11-09 | 2026-11-19 |
| [#1052](https://github.com/ROCm/mori/pull/1052) | docs(netmon): dashboard screenshots in the netmon and xgmi-n... | @TianDi101 | merged | 2026-11-19 | 2026-11-19 |
| [#1046](https://github.com/ROCm/mori/pull/1046) | ci: switch off the MI355X-AINIC jobs while the runner is dow... | @QizhouZhang97 | merged | 2026-11-19 | 2026-11-19 |
| [#1002](https://github.com/ROCm/mori/pull/1002) | feat(netmon): multi-gpus XGMI bandwidth recorder with a Graf... | @kawhil-amd | merged | 2026-11-13 | 2026-11-19 |
| [#1028](https://github.com/ROCm/mori/pull/1028) | fix(jit/v2): a plan call's arch= applies to that call only | @jhchouuu | merged | 2026-11-17 | 2026-11-19 |
| [#1000](https://github.com/ROCm/mori/pull/1000) | feat(netmon): ainic-netmon, a millisecond-level AINIC counte... | @maning00 | merged | 2026-11-13 | 2026-11-19 |
| [#1029](https://github.com/ROCm/mori/pull/1029) | feat(io): report once when READs go over AINIC firmware that... | @isytwu | merged | 2026-11-17 | 2026-11-19 |
| [#1040](https://github.com/ROCm/mori/pull/1040) | fix(topology): a bridge without bus numbers no longer aborts... | @TianDi101 | merged | 2026-11-18 | 2026-11-19 |
| [#1036](https://github.com/ROCm/mori/pull/1036) | perf(umbp): keep HBM writes on the source GPU and gather acr... | @TianDi101 | merged | 2026-11-18 | 2026-11-19 |
| [#1041](https://github.com/ROCm/mori/pull/1041) | perf(umbp): a remote reader's report releases its SSD stagin... | @TianDi101 | merged | 2026-11-18 | 2026-11-19 |
| [#1027](https://github.com/ROCm/mori/pull/1027) | docs(known-issues): amdgpu miscounts RDMA-registered VRAM (I... | @isytwu | merged | 2026-11-17 | 2026-11-18 |
| [#787](https://github.com/ROCm/mori/pull/787) | fix(umbp): a remote read checks after the copy that it read ... | @TianDi101 | merged | 2026-10-16 | 2026-11-18 |
| [#1032](https://github.com/ROCm/mori/pull/1032) | perf(umbp): gather same-GPU fragment copies in one kernel la... | @TianDi101 | merged | 2026-11-17 | 2026-11-18 |
| [#990](https://github.com/ROCm/mori/pull/990) | feat(cco): add cco-fusion agent definition | @kawhil-amd | merged | 2026-11-12 | 2026-11-18 |
| [#982](https://github.com/ROCm/mori/pull/982) | feat(umbp): pull each remote whole object once per node (rem... | @TianDi101 | merged | 2026-11-11 | 2026-11-18 |
| [#929](https://github.com/ROCm/mori/pull/929) | fix(umbp): stop rescanning a full buffer for every key of a ... | @TianDi101 | merged | 2026-11-06 | 2026-11-18 |
| [#909](https://github.com/ROCm/mori/pull/909) | feat(ras): heartbeat links between MORI-IO peers, with exit ... | @i-chaochen | merged | 2026-11-04 | 2026-11-17 |
| [#967](https://github.com/ROCm/mori/pull/967) | fix(umbp): backend-policy SSD instances keep the UMBP_SSD_* ... | @TianDi101 | merged | 2026-11-10 | 2026-11-17 |
| [#979](https://github.com/ROCm/mori/pull/979) | fix(fused-ops): make supports() and the tile check match con... | @yangyuhuiling | merged | 2026-11-10 | 2026-11-17 |
| [#1021](https://github.com/ROCm/mori/pull/1021) | feat(io): batch Fabric copies and report why Fabric is not u... | @maning00 | merged | 2026-11-17 | 2026-11-17 |
| [#1010](https://github.com/ROCm/mori/pull/1010) | docs(readme): add a MORI-FUSED GEMM + all-reduce benchmark | @yangyuhuiling | merged | 2026-11-16 | 2026-11-17 |
| [#871](https://github.com/ROCm/mori/pull/871) | CI: Migrate MoRI to ROCm 10.1 | @QizhouZhang97 | merged | 2026-10-29 | 2026-11-16 |
| [#1007](https://github.com/ROCm/mori/pull/1007) | perf(EPv2/gfx1250): EP8 bf16 on the 96-CU partitions sends a... | @zhangfei829 | merged | 2026-11-15 | 2026-11-16 |
| [#1009](https://github.com/ROCm/mori/pull/1009) | chore(ep): remove the fp8_direct_cast combine quantization | @jhchouuu | merged | 2026-11-16 | 2026-11-16 |
| [#1003](https://github.com/ROCm/mori/pull/1003) | feat(ep/v2): peak and capped tuning profiles for the hip sch... | @jhchouuu | merged | 2026-11-13 | 2026-11-16 |
| [#1008](https://github.com/ROCm/mori/pull/1008) | ci: run the internode CCL smoke against the installed mori | @jhchouuu | merged | 2026-11-16 | 2026-11-16 |
| [#1001](https://github.com/ROCm/mori/pull/1001) | tune(ep/v2): FlyDSL MI300X EP8 schedules | @jhchouuu | merged | 2026-11-13 | 2026-11-14 |
| [#999](https://github.com/ROCm/mori/pull/999) | tune(ep): MI300X EP8 V1 and V2 tables | @jhchouuu | merged | 2026-11-13 | 2026-11-14 |
| [#993](https://github.com/ROCm/mori/pull/993) | fix(ep/v2): choose low-latency kernels from low_latency or t... | @zhangfei829 | merged | 2026-11-12 | 2026-11-13 |
| [#907](https://github.com/ROCm/mori/pull/907) | Fix/io failed status waits for all wrs | @amirakb89 | merged | 2026-11-03 | 2026-11-13 |
| [#918](https://github.com/ROCm/mori/pull/918) | perf(ep/v2): AsyncLL segmented receive layout for single-nod... | @ChengYM5685 | merged | 2026-11-05 | 2026-11-13 |
| [#972](https://github.com/ROCm/mori/pull/972) | docs: organize the site by component, and fix pages that no ... | @yangyuhuiling | merged | 2026-11-10 | 2026-11-13 |
| [#989](https://github.com/ROCm/mori/pull/989) | perf(EPv2/gfx1250): dispatch/combine rows for EP4 hidden 512... | @inkcherry | merged | 2026-11-12 | 2026-11-13 |
| [#992](https://github.com/ROCm/mori/pull/992) | docs: add the MORI logo to the top of the README | @jhchouuu | merged | 2026-11-12 | 2026-11-12 |
| [#938](https://github.com/ROCm/mori/pull/938) | fix(io): bounded WaitFor polls a status that only completes ... | @amirakb89 | merged | 2026-11-09 | 2026-11-12 |
| [#898](https://github.com/ROCm/mori/pull/898) | fix(io/xgmi): open hidden-device sessions between PCIe peers... | @akshayv | merged | 2026-11-02 | 2026-11-12 |
| [#964](https://github.com/ROCm/mori/pull/964) | feat(ep/v2): bf16 push combine on gfx1250, chosen per call | @zhangfei829 | merged | 2026-11-10 | 2026-11-12 |
| [#991](https://github.com/ROCm/mori/pull/991) | ci: show the scheduled main run's jobs on its commit and in ... | @QizhouZhang97 | merged | 2026-11-12 | 2026-11-12 |
| [#944](https://github.com/ROCm/mori/pull/944) | fix(sdma): use the OAM table when amdkfd reports every xGMI ... | @YeSho-cpp | merged | 2026-11-09 | 2026-11-12 |
| [#921](https://github.com/ROCm/mori/pull/921) | perf(anvil): balance MI308X peer links over the xGMI SDMA en... | @yicyang | merged | 2026-11-05 | 2026-11-12 |
| [#977](https://github.com/ROCm/mori/pull/977) | fix(ep): read the scale row before groups skip in the 1250x ... | @zhangfei829 | merged | 2026-11-10 | 2026-11-12 |
| [#949](https://github.com/ROCm/mori/pull/949) | feat(umbp): bound standalone lookups with lookup_timeout_ms | @charxwu | merged | 2026-11-09 | 2026-11-12 |
| [#975](https://github.com/ROCm/mori/pull/975) | refactor(ep): remove EP v1's gfx125x and cco code | @zhangfei829 | merged | 2026-11-10 | 2026-11-12 |
| [#976](https://github.com/ROCm/mori/pull/976) | test(ep): report bus bandwidth in the EP v2 bench | @zhangfei829 | merged | 2026-11-10 | 2026-11-12 |
| [#987](https://github.com/ROCm/mori/pull/987) | ci: report the scheduled main run as a commit status | @jhchouuu | merged | 2026-11-11 | 2026-11-12 |
| [#988](https://github.com/ROCm/mori/pull/988) | docs(known-issues): Issue 1 depends on the amdgpu build, not... | @jhchouuu | merged | 2026-11-12 | 2026-11-12 |
| [#984](https://github.com/ROCm/mori/pull/984) | fix(mlx5): key the next-hop MAC cache on the local NIC, port... | @jhchouuu | merged | 2026-11-11 | 2026-11-11 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-11-27T17:42:44Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1528](https://github.com/ROCm/FlyDSL/pull/1528) | [Bugfix] Stop products of dynamic shape extents from wrappin... | @Phil-amd | open | 2026-11-26 | 2026-11-27 |
| [#1538](https://github.com/ROCm/FlyDSL/pull/1538) | [Bugfix] Link MLIR's nanobind libraries when build_llvm.sh h... | @sjfeng1999 | open | 2026-11-27 | 2026-11-27 |
| [#1535](https://github.com/ROCm/FlyDSL/pull/1535) | [Refactor] Align registration with upstream MLIR and make ba... | @sjfeng1999 | open | 2026-11-26 | 2026-11-27 |
| [#1537](https://github.com/ROCm/FlyDSL/pull/1537) | [Coop] Add warp_sort: the call picks the bitonic network or ... | @jhinpan | open | 2026-11-27 | 2026-11-27 |
| [#1531](https://github.com/ROCm/FlyDSL/pull/1531) | [Feat] Add a max_flat_work_group_size compile hint | @Phil-amd | open | 2026-11-26 | 2026-11-27 |
| [#1527](https://github.com/ROCm/FlyDSL/pull/1527) | [Bugfix] Reject a gfx1250 WMMA C modifier in a multi-K fx.ge... | @Phil-amd | open | 2026-11-25 | 2026-11-27 |
| [#1487](https://github.com/ROCm/FlyDSL/pull/1487) | [Bugfix] Line-buffer the C stdout stream so device printf sh... | @Nikunj-Mehndiratta | open | 2026-11-23 | 2026-11-27 |
| [#1515](https://github.com/ROCm/FlyDSL/pull/1515) | [ROCDL] Hoist loop-invariant lane intrinsics and LDS DMA M0 ... | @sjfeng1999 | open | 2026-11-25 | 2026-11-27 |
| [#1495](https://github.com/ROCm/FlyDSL/pull/1495) | [Bugfix] Fix the NeoX pair lane in fused_rope_cache for head... | @merrittttt | open | 2026-11-24 | 2026-11-26 |
| [#1506](https://github.com/ROCm/FlyDSL/pull/1506) | [Bugfix] Fix the V page-id LDS race in pa_decode_tile_kernel | @thechenli | open | 2026-11-25 | 2026-11-26 |
| [#1492](https://github.com/ROCm/FlyDSL/pull/1492) | [Bugfix] Export custom all-reduce IPC buffers at their alloc... | @Arist12 | open | 2026-11-23 | 2026-11-26 |
| [#1532](https://github.com/ROCm/FlyDSL/pull/1532) | [Kernel][Perf] Add the fp8 32x32-block-scale MoE layer and t... | @Arist12 | open | 2026-11-26 | 2026-11-26 |
| [#1430](https://github.com/ROCm/FlyDSL/pull/1430) | [Bugfix] Wait for the last B0 and A0 tiles in the FP8 8-wave... | @Arist12 | open | 2026-11-18 | 2026-11-26 |
| [#1502](https://github.com/ROCm/FlyDSL/pull/1502) | [Bugfix] Fix a main-loop LDS race in the gemm_a16w16 gfx950 ... | @thechenli | open | 2026-11-25 | 2026-11-26 |
| [#1514](https://github.com/ROCm/FlyDSL/pull/1514) | [Bugfix] Fix the A-buffer refill LDS race in fp8_gemm_4wave | @thechenli | open | 2026-11-25 | 2026-11-25 |
| [#1507](https://github.com/ROCm/FlyDSL/pull/1507) | [Bugfix] Fix the query-scale LDS race in pa_decode_sw_kernel | @thechenli | open | 2026-11-25 | 2026-11-25 |
| [#1505](https://github.com/ROCm/FlyDSL/pull/1505) | [Bugfix] Fix the P/query LDS race in pa_decode_metadata_kern... | @thechenli | open | 2026-11-25 | 2026-11-25 |
| [#1504](https://github.com/ROCm/FlyDSL/pull/1504) | [Bugfix] Fix the KV buffer reuse race in mla_fwd_decode_m16x... | @thechenli | open | 2026-11-25 | 2026-11-25 |
| [#1510](https://github.com/ROCm/FlyDSL/pull/1510) | [Bugfix] Fix early flag stores in the write-mode custom all-... | @thechenli | draft | 2026-11-25 | 2026-11-25 |
| [#1508](https://github.com/ROCm/FlyDSL/pull/1508) | [Bugfix] Add an end handshake to the 1-stage custom all-redu... | @thechenli | draft | 2026-11-25 | 2026-11-25 |
| [#1490](https://github.com/ROCm/FlyDSL/pull/1490) | [Bugfix] Require flat_out_scale for the quantizing mxfp_moe ... | @Nikunj-Mehndiratta | open | 2026-11-23 | 2026-11-25 |
| [#1489](https://github.com/ROCm/FlyDSL/pull/1489) | [Bugfix] Reject a non-contiguous out in flydsl_flash_attn_fu... | @Nikunj-Mehndiratta | open | 2026-11-23 | 2026-11-25 |
| [#1343](https://github.com/ROCm/FlyDSL/pull/1343) | [Bugfix] Keep every frame of an op's call chain in debug inf... | @hanli0612 | open | 2026-10-28 | 2026-11-24 |
| [#1499](https://github.com/ROCm/FlyDSL/pull/1499) | llvm update to coexec scheduler  branch | @jli-melchior | draft | 2026-11-24 | 2026-11-24 |
| [#1498](https://github.com/ROCm/FlyDSL/pull/1498) | [Bugfix] Fix cross-wave-group LDS races in the gemm_a16w16 g... | @merrittttt | open | 2026-11-24 | 2026-11-24 |
| [#1497](https://github.com/ROCm/FlyDSL/pull/1497) | [Bugfix] Require N % 4 == 0 in the vectorAdd example | @merrittttt | open | 2026-11-24 | 2026-11-24 |
| [#1496](https://github.com/ROCm/FlyDSL/pull/1496) | [Bugfix] Size the gemm_a16w16 gfx950 LDS swizzle to block_k | @merrittttt | open | 2026-11-24 | 2026-11-24 |
| [#1485](https://github.com/ROCm/FlyDSL/pull/1485) | [Bugfix] Step 4 and 6-bit view offsets in bytes | @Phil-amd | open | 2026-11-23 | 2026-11-23 |
| [#1484](https://github.com/ROCm/FlyDSL/pull/1484) | [Feat] Add CompiledFunction.kernel_names() | @coderfeli | open | 2026-11-23 | 2026-11-23 |
| [#1486](https://github.com/ROCm/FlyDSL/pull/1486) | [Skills] Batch: debug-flydsl-kernel, prefetch-data-load, fly... | @fsx950223 | open | 2026-11-23 | 2026-11-23 |
| [#1374](https://github.com/ROCm/FlyDSL/pull/1374) | [Kernel] Add native RDNA4 MXFP4 × FP8 dense GEMM | @big-yellow-duck | open | 2026-11-05 | 2026-11-23 |
| [#1326](https://github.com/ROCm/FlyDSL/pull/1326) | [JIT] flyc.compile[hints] no longer leaves its hints on the ... | @Phil-amd | open | 2026-10-26 | 2026-11-23 |
| [#1482](https://github.com/ROCm/FlyDSL/pull/1482) | CI: run ATOM and sgl-amd-mono unit tests against the PR whee... | @coderfeli | open | 2026-11-23 | 2026-11-23 |
| [#1479](https://github.com/ROCm/FlyDSL/pull/1479) | [Bugfix] Fix wrong flash_attn_generic cross-attention result... | @merrittttt | open | 2026-11-22 | 2026-11-22 |
| [#1478](https://github.com/ROCm/FlyDSL/pull/1478) | [Bugfix] Add the missing barrier before p23_kernel overwrite... | @merrittttt | open | 2026-11-22 | 2026-11-22 |
| [#1380](https://github.com/ROCm/FlyDSL/pull/1380) | [Windows][CI] Add a Windows gfx1201 GPU workflow | @Phil-amd | draft | 2026-11-06 | 2026-11-22 |
| [#1476](https://github.com/ROCm/FlyDSL/pull/1476) | [Bugfix] Fix dropped rmsnorm tail elements when BLOCK_THREAD... | @merrittttt | open | 2026-11-22 | 2026-11-22 |
| [#1453](https://github.com/ROCm/FlyDSL/pull/1453) | [Kernel][Perf] Pick the MXFP4 GEMM geometry from M and pipel... | @Monstertail | open | 2026-11-19 | 2026-11-19 |
| [#1452](https://github.com/ROCm/FlyDSL/pull/1452) | [Kernel][Perf] Split the KV range of under-filled paged FP8 ... | @Monstertail | open | 2026-11-19 | 2026-11-19 |
| [#1422](https://github.com/ROCm/FlyDSL/pull/1422) | [Kernel][Perf] Add 128x128 and 64x64 tiles to the MXFP8 8-wa... | @Monstertail | open | 2026-11-16 | 2026-11-19 |
| [#1448](https://github.com/ROCm/FlyDSL/pull/1448) | [Kernel][Perf] Pick the paged flash-attention CTA height fro... | @Monstertail | draft | 2026-11-19 | 2026-11-19 |
| [#1443](https://github.com/ROCm/FlyDSL/pull/1443) | [Kernel][Perf] Register-cached vectorised LayerNorm smooth q... | @Monstertail | draft | 2026-11-18 | 2026-11-18 |
| [#1442](https://github.com/ROCm/FlyDSL/pull/1442) | [Kernel][Perf] Multi-row blocks and f32 vectorisation for La... | @Monstertail | draft | 2026-11-18 | 2026-11-18 |
| [#1441](https://github.com/ROCm/FlyDSL/pull/1441) | [Kernel][Perf] Single-pass fused add + RMSNorm + smooth quan... | @Monstertail | draft | 2026-11-18 | 2026-11-18 |
| [#1440](https://github.com/ROCm/FlyDSL/pull/1440) | [Kernel][Perf] Vectorise fused add + RMSNorm forward for eve... | @Monstertail | draft | 2026-11-18 | 2026-11-18 |
| [#1439](https://github.com/ROCm/FlyDSL/pull/1439) | [Kernel][Perf] Single-sweep vectorised RMSNorm dynamic quant | @Monstertail | draft | 2026-11-18 | 2026-11-18 |
| [#1421](https://github.com/ROCm/FlyDSL/pull/1421) | [Kernel][Perf] Split wide softmax rows across blocks | @Monstertail | draft | 2026-11-16 | 2026-11-18 |
| [#1404](https://github.com/ROCm/FlyDSL/pull/1404) | [Kernel] Add gfx1100 bf16 MoE (grouped WMMA GEMM + wave32 ro... | @vlluvia | open | 2026-11-12 | 2026-11-18 |
| [#1432](https://github.com/ROCm/FlyDSL/pull/1432) | [AST] Apply the structural rewrites in one walk | @xudoyuan | draft | 2026-11-18 | 2026-11-18 |
| [#1396](https://github.com/ROCm/FlyDSL/pull/1396) | [Kernel][Perf] Add a small-M kernel to the FP8 8-wave GEMM | @Arist12 | open | 2026-11-11 | 2026-11-18 |
| [#1397](https://github.com/ROCm/FlyDSL/pull/1397) | [Kernel][Perf] Add a persistent-row RMSNorm SmoothQuant kern... | @Arist12 | open | 2026-11-11 | 2026-11-18 |
| [#1395](https://github.com/ROCm/FlyDSL/pull/1395) | [Kernel][Perf] Vectorize LayerNorm backward and reduce dgamm... | @Arist12 | open | 2026-11-11 | 2026-11-18 |
| [#1375](https://github.com/ROCm/FlyDSL/pull/1375) | [DSL] Add ROCDL wrappers for FP8/BF8/F16 conversion, dot, ma... | @dimitri91209 | open | 2026-11-05 | 2026-11-17 |
| [#1350](https://github.com/ROCm/FlyDSL/pull/1350) | [CDNA5] Add indexed-addressing plumbing to the TDM atom | @xudoyuan | draft | 2026-10-30 | 2026-11-17 |
| [#1267](https://github.com/ROCm/FlyDSL/pull/1267) | [Runtime] Report GPU last-level cache size from KFD | @qiangpan2 | open | 2026-10-11 | 2026-11-17 |
| [#1417](https://github.com/ROCm/FlyDSL/pull/1417) | [test] Locate libamdhip64 for AOT export links on TheRock pi... | @jli-melchior | draft | 2026-11-16 | 2026-11-17 |
| [#1400](https://github.com/ROCm/FlyDSL/pull/1400) | [Feat] Honor divisibility info in the Int32/64 type | @sjfeng1999 | draft | 2026-11-12 | 2026-11-16 |
| [#1377](https://github.com/ROCm/FlyDSL/pull/1377) | [Dialect][DSL] Add GFX120X SWMMAC 2:4 sparse MMA dialect ato... | @dimitri91209 | open | 2026-11-05 | 2026-11-14 |
| [#1216](https://github.com/ROCm/FlyDSL/pull/1216) | [Kernel] Add dense Flash Attention for gfx1100 | @vlluvia | open | 2026-09-30 | 2026-11-12 |
| [#869](https://github.com/ROCm/FlyDSL/pull/869) | [Kernel] Add CDNA SageAttention kernel | @LiuYinfeng01 | open | 2026-07-16 | 2026-11-12 |
| [#1192](https://github.com/ROCm/FlyDSL/pull/1192) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-11-11 |
| [#1383](https://github.com/ROCm/FlyDSL/pull/1383) | [Feature][DSL] Add quantization codecs extension (fx.quant) | @dimitri91209 | draft | 2026-11-07 | 2026-11-10 |
| [#1385](https://github.com/ROCm/FlyDSL/pull/1385) | [Feature][DSL] Add Fast Walsh-Hadamard Transform (fx.hadamar... | @dimitri91209 | draft | 2026-11-07 | 2026-11-07 |
| [#1384](https://github.com/ROCm/FlyDSL/pull/1384) | [Feature][DSL] Add warp vote collectives, RDNA DPP, and warp... | @dimitri91209 | draft | 2026-11-07 | 2026-11-07 |
| [#1316](https://github.com/ROCm/FlyDSL/pull/1316) | [Kernel][Refactor] Extract shared softmax row-copy helpers | @ppppqp | draft | 2026-10-21 | 2026-11-06 |
| [#1303](https://github.com/ROCm/FlyDSL/pull/1303) | [Kernel] rdna3 GEMM: serve any M and any N, down to a 16x16 ... | @vlluvia | draft | 2026-10-16 | 2026-11-06 |
| [#1264](https://github.com/ROCm/FlyDSL/pull/1264) | [Bugfix][gfx1250] Reject FP8 and A8W4 GEMM tiles that issue ... | @jhinpan | open | 2026-10-11 | 2026-11-06 |
| [#1253](https://github.com/ROCm/FlyDSL/pull/1253) | [Bugfix][Test] Round MXFP8 E8M0 scales up in the test quanti... | @jhinpan | open | 2026-10-09 | 2026-11-06 |
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
| [#1111](https://github.com/ROCm/FlyDSL/pull/1111) | [DO NOT MERGE] Add MegaMoE engineering skill | @GwilliamHu | draft | 2026-09-09 | 2026-11-06 |
| [#1340](https://github.com/ROCm/FlyDSL/pull/1340) | [WIP][feat] support gpu asan feature  | @jli-melchior | draft | 2026-10-28 | 2026-11-05 |
| [#1109](https://github.com/ROCm/FlyDSL/pull/1109) | [DSL] Expose F32_FP8 conversion from packed_i32 | @big-yellow-duck | open | 2026-09-09 | 2026-11-05 |
| [#1288](https://github.com/ROCm/FlyDSL/pull/1288) | [Feat] Support warp exchange with layout | @ppppqp | open | 2026-10-14 | 2026-11-05 |
| [#1295](https://github.com/ROCm/FlyDSL/pull/1295) | [Debug] Support device assert | @ppppqp | open | 2026-10-14 | 2026-11-05 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-11-04 |
| [#887](https://github.com/ROCm/FlyDSL/pull/887) | gemm: add fp8 per-tensor grouped GEMM forward (M-grouped/MoE... | @kyle-256 | open | 2026-07-23 | 2026-11-04 |
| [#886](https://github.com/ROCm/FlyDSL/pull/886) | Add optional forward LSE output | @AakarshAMD | open | 2026-07-23 | 2026-11-04 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-11-04 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-11-04 |
| [#1222](https://github.com/ROCm/FlyDSL/pull/1222) | [Build][JIT] Support core-only ROCm SDK environments | @apinge | open | 2026-10-01 | 2026-11-02 |
| [#1272](https://github.com/ROCm/FlyDSL/pull/1272) | [Benchmark] fix rdna gemm benchmark option | @ppppqp | open | 2026-10-11 | 2026-10-28 |
| [#1277](https://github.com/ROCm/FlyDSL/pull/1277) | [Test] Cover the FlyDSL kernels vLLM depends on | @zhiding512 | open | 2026-10-12 | 2026-10-21 |
| [#1210](https://github.com/ROCm/FlyDSL/pull/1210) | [CI] Run full cooperative matrix before PyPI releases | @coderfeli | draft | 2026-09-28 | 2026-10-21 |
| [#1194](https://github.com/ROCm/FlyDSL/pull/1194) | [JIT] Actionable diagnostic for dynamic layout field overflo... | @mustafayildirim | open | 2026-09-25 | 2026-10-14 |
| [#1282](https://github.com/ROCm/FlyDSL/pull/1282) | [Kernel][Attention] Add SageAttention2 gfx120 dense prefill | @qiangpan2 | draft | 2026-10-13 | 2026-10-13 |
| [#1239](https://github.com/ROCm/FlyDSL/pull/1239) | [Windows] Add native ROCm JIT support | @Yasei-no-otoko | open | 2026-10-08 | 2026-10-08 |
| [#1179](https://github.com/ROCm/FlyDSL/pull/1179) | [Enh] Accept LLVM pointer types in ffi declarations | @LWenH | open | 2026-09-22 | 2026-10-10 |
| [#976](https://github.com/ROCm/FlyDSL/pull/976) | [Feat] Add an experimental cuda nvvm backend | @sjfeng1999 | open | 2026-08-06 | 2026-09-28 |
| [#1191](https://github.com/ROCm/FlyDSL/pull/1191) | [Fix][Expr] Honor allocate(..., alignment=) for static share... | @xudoyuan | draft | 2026-09-24 | 2026-09-24 |
| [#1110](https://github.com/ROCm/FlyDSL/pull/1110) | [LLVM] Fix true16 lowering for packed FP8 conversions | @big-yellow-duck | open | 2026-09-09 | 2026-09-17 |
| [#1057](https://github.com/ROCm/FlyDSL/pull/1057) | [Kernel][Perf] Add gfx1151 tile selection for RDNA3 GEMM | @tangzzycc | open | 2026-08-22 | 2026-09-11 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-08-28 |
| [#1012](https://github.com/ROCm/FlyDSL/pull/1012) | [MFMA] Add 16x16x16 bf16/f16 support with fly-fix-bitcast-wi... | @RichardChamberlain1 | open | 2026-08-14 | 2026-08-20 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-08-18 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#1533](https://github.com/ROCm/FlyDSL/pull/1533) | [ROCDL] Lower float conversions for the chip in convert-rocd... | @sjfeng1999 | merged | 2026-11-26 | 2026-11-27 |
| [#1431](https://github.com/ROCm/FlyDSL/pull/1431) | [LLVM] Bump LLVM pin to e2ce52c885 and rebase llvm-extension... | @jli-melchior | merged | 2026-11-18 | 2026-11-27 |
| [#1503](https://github.com/ROCm/FlyDSL/pull/1503) | [Bugfix] Fix the stagger K/V LDS race in flash_attn_fp8_gfx9... | @thechenli | merged | 2026-11-25 | 2026-11-27 |
| [#1534](https://github.com/ROCm/FlyDSL/pull/1534) | [Bugfix] Register ArithValue casters for the FNUZ fp8 types | @sjfeng1999 | merged | 2026-11-26 | 2026-11-27 |
| [#1511](https://github.com/ROCm/FlyDSL/pull/1511) | [Bugfix] Fix the pipeline-drain LDS race in conv3d_implicit_... | @thechenli | merged | 2026-11-25 | 2026-11-26 |
| [#1494](https://github.com/ROCm/FlyDSL/pull/1494) | [Bugfix] Fix custom all-reduce outputs that differ between r... | @Arist12 | merged | 2026-11-23 | 2026-11-26 |
| [#1513](https://github.com/ROCm/FlyDSL/pull/1513) | [Bugfix] Fix the A-tile LDS race in mxfp_moe stage-1 GEMM at... | @thechenli | merged | 2026-11-25 | 2026-11-26 |
| [#1512](https://github.com/ROCm/FlyDSL/pull/1512) | [Bugfix] Fix A-tile LDS overlap in MoE stage-1 GEMM at tile_... | @thechenli | merged | 2026-11-25 | 2026-11-26 |
| [#1509](https://github.com/ROCm/FlyDSL/pull/1509) | [Bugfix] Fix the 2-stage custom all-reduce all-gather for un... | @thechenli | merged | 2026-11-25 | 2026-11-26 |
| [#1526](https://github.com/ROCm/FlyDSL/pull/1526) | [DSL][Perf] Lower signed // by a constant power of two to an... | @apakbin | merged | 2026-11-25 | 2026-11-26 |
| [#1428](https://github.com/ROCm/FlyDSL/pull/1428) | [Bugfix] Wait for b_cur1 before the FP4 4-wave prologue read... | @Arist12 | merged | 2026-11-18 | 2026-11-26 |
| [#1401](https://github.com/ROCm/FlyDSL/pull/1401) | [Feat] Introduce experimental register_allocation on ROCDL | @sjfeng1999 | merged | 2026-11-12 | 2026-11-26 |
| [#1530](https://github.com/ROCm/FlyDSL/pull/1530) | [AOT] Return the export metadata from export_to_c and name r... | @Phil-amd | merged | 2026-11-26 | 2026-11-26 |
| [#1524](https://github.com/ROCm/FlyDSL/pull/1524) | [Skills] Trim redundant content and fix stale guidance in th... | @fsx950223 | merged | 2026-11-25 | 2026-11-26 |
| [#1529](https://github.com/ROCm/FlyDSL/pull/1529) | [Tests] Give run_tests.sh a private scratch directory | @Phil-amd | merged | 2026-11-26 | 2026-11-26 |
| [#1523](https://github.com/ROCm/FlyDSL/pull/1523) | [Docs] Acknowledge MORI in the README | @coderfeli | merged | 2026-11-25 | 2026-11-25 |
| [#1501](https://github.com/ROCm/FlyDSL/pull/1501) | [Kernel][Perf] PA decode: interleave independent MFMA chains | @reble | merged | 2026-11-24 | 2026-11-25 |
| [#1521](https://github.com/ROCm/FlyDSL/pull/1521) | [Skills] Batch: capture-kernel-trace, flydsl-kernel-authorin... | @fsx950223 | merged | 2026-11-25 | 2026-11-25 |
| [#1412](https://github.com/ROCm/FlyDSL/pull/1412) | [JIT] Speed up tracing and fix exponential and/or rewriting | @coderfeli | merged | 2026-11-14 | 2026-11-25 |
| [#1488](https://github.com/ROCm/FlyDSL/pull/1488) | [Test] Bench gfx1250 FP8/FP4 GEMM per launch batch; add trig... | @aoli26 | merged | 2026-11-23 | 2026-11-24 |
| [#1483](https://github.com/ROCm/FlyDSL/pull/1483) | [Bugfix] Link external-codegen Assembly after run_external_b... | @coderfeli | merged | 2026-11-23 | 2026-11-23 |
| [#1444](https://github.com/ROCm/FlyDSL/pull/1444) | [compiler][opt] tie the same vgpr when strict pin a register... | @jli-melchior | merged | 2026-11-19 | 2026-11-23 |
| [#1456](https://github.com/ROCm/FlyDSL/pull/1456) | [Fly] Resolve register addresses by dataflow in rmem SSA pro... | @sjfeng1999 | merged | 2026-11-20 | 2026-11-23 |
| [#1455](https://github.com/ROCm/FlyDSL/pull/1455) | [ROCDL] Lower math ops that MathToLLVM gets wrong to OCML | @sjfeng1999 | merged | 2026-11-20 | 2026-11-23 |
| [#1481](https://github.com/ROCm/FlyDSL/pull/1481) | [Misc] Bump version to 0.5.3 | @coderfeli | merged | 2026-11-23 | 2026-11-23 |
| [#1480](https://github.com/ROCm/FlyDSL/pull/1480) | [Bugfix] Tag fly-emit-gpu-binary output as binary, not fatbi... | @coderfeli | merged | 2026-11-23 | 2026-11-23 |
| [#1465](https://github.com/ROCm/FlyDSL/pull/1465) | [AOT] Build the embedded AOT runtime without debug info | @coderfeli | merged | 2026-11-21 | 2026-11-23 |
| [#1477](https://github.com/ROCm/FlyDSL/pull/1477) | Revert "[compiler][kernel] strict pin agpr feature and kerne... | @coderfeli | merged | 2026-11-22 | 2026-11-22 |
| [#1474](https://github.com/ROCm/FlyDSL/pull/1474) | [Bugfix] Re-apply llvm_options for the final ISA dump | @coderfeli | merged | 2026-11-22 | 2026-11-22 |
| [#1473](https://github.com/ROCm/FlyDSL/pull/1473) | [CI] Give pip-ROCm an unversioned libamdhip64.so before the ... | @coderfeli | merged | 2026-11-22 | 2026-11-22 |
| [#1454](https://github.com/ROCm/FlyDSL/pull/1454) | [Bugfix] Fold fly.get_iter of fly.make_view | @coderfeli | merged | 2026-11-20 | 2026-11-20 |
| [#1435](https://github.com/ROCm/FlyDSL/pull/1435) | [Tests] Keep tests that read source_ir off the JIT disk cach... | @Phil-amd | merged | 2026-11-18 | 2026-11-19 |
| [#1451](https://github.com/ROCm/FlyDSL/pull/1451) | [AOT] Add flyc.load_module to load export_to_c objects in-pr... | @coderfeli | merged | 2026-11-19 | 2026-11-19 |
| [#1434](https://github.com/ROCm/FlyDSL/pull/1434) | [Tests] Honour FLY_BUILD_DIR in tests/conftest.py | @Phil-amd | merged | 2026-11-18 | 2026-11-19 |
| [#1436](https://github.com/ROCm/FlyDSL/pull/1436) | [Bugfix] Stop dropping a return inside a traced if branch | @Phil-amd | merged | 2026-11-18 | 2026-11-19 |
| [#1445](https://github.com/ROCm/FlyDSL/pull/1445) | [Skills] capture-kernel-trace: trace eager launches, pin the... | @fsx950223 | merged | 2026-11-19 | 2026-11-19 |
| [#1446](https://github.com/ROCm/FlyDSL/pull/1446) | [Skills] prefetch-data-load: check that the ISA keeps the lo... | @fsx950223 | merged | 2026-11-19 | 2026-11-19 |
| [#1447](https://github.com/ROCm/FlyDSL/pull/1447) | [Skills] isa-resource-diff: compile-only runs still see the ... | @fsx950223 | merged | 2026-11-19 | 2026-11-19 |
| [#1449](https://github.com/ROCm/FlyDSL/pull/1449) | [Tests] Move layout algebra checks to the Core tests  | @sjfeng1999 | merged | 2026-11-19 | 2026-11-19 |
| [#1437](https://github.com/ROCm/FlyDSL/pull/1437) | [ROCDL] Add arch atoms with valid check | @sjfeng1999 | merged | 2026-11-18 | 2026-11-19 |
| [#1433](https://github.com/ROCm/FlyDSL/pull/1433) | [Misc] Bump version to 0.5.1 | @coderfeli | merged | 2026-11-18 | 2026-11-18 |
| [#1426](https://github.com/ROCm/FlyDSL/pull/1426) | [Feat] Introduce fx.range expr as the carrier of loop pragma | @sjfeng1999 | merged | 2026-11-17 | 2026-11-18 |
| [#1425](https://github.com/ROCm/FlyDSL/pull/1425) | [Runtime] Fix current_device_id() always returning 0 on ROCm... | @qiangpan2 | merged | 2026-11-17 | 2026-11-18 |
| [#1424](https://github.com/ROCm/FlyDSL/pull/1424) | [Docs] Point the TDM docstrings at the tiled atom | @xudoyuan | merged | 2026-11-17 | 2026-11-17 |
| [#1419](https://github.com/ROCm/FlyDSL/pull/1419) | [Pass] Add an optional check-resource-limits pass | @sjfeng1999 | merged | 2026-11-16 | 2026-11-17 |
| [#1399](https://github.com/ROCm/FlyDSL/pull/1399) | [Tests] Make the location, perftest and arch-detection tests... | @Phil-amd | merged | 2026-11-12 | 2026-11-17 |
| [#1418](https://github.com/ROCm/FlyDSL/pull/1418) | [Feat] Support static slices in Vector indexing | @sjfeng1999 | merged | 2026-11-16 | 2026-11-17 |
| [#1415](https://github.com/ROCm/FlyDSL/pull/1415) | [Feat] Add the Float8E5M2FNUZ numeric type | @sjfeng1999 | merged | 2026-11-16 | 2026-11-17 |
| [#1416](https://github.com/ROCm/FlyDSL/pull/1416) | [CI] Keep forked PRs off linux-flydsl-navi-2 | @vlluvia | merged | 2026-11-16 | 2026-11-16 |
| [#1368](https://github.com/ROCm/FlyDSL/pull/1368) | [compiler][kernel] strict pin agpr feature and kernel exampl... | @jli-melchior | merged | 2026-11-04 | 2026-11-16 |
| [#987](https://github.com/ROCm/FlyDSL/pull/987) | [Feat] Fix `lld invocation failed` when ROCm is not at the b... | @jli-melchior | merged | 2026-08-08 | 2026-11-16 |
| [#1394](https://github.com/ROCm/FlyDSL/pull/1394) | [Bugfix] Find native libraries when the package is split acr... | @cp2923 | merged | 2026-11-11 | 2026-11-14 |
| [#1410](https://github.com/ROCm/FlyDSL/pull/1410) | [JIT] Fix main CI after the ARCH env var removal and a dispa... | @coderfeli | merged | 2026-11-14 | 2026-11-14 |
| [#1408](https://github.com/ROCm/FlyDSL/pull/1408) | [JIT] Attach the gpu.module target at creation | @sjfeng1999 | merged | 2026-11-13 | 2026-11-13 |
| [#1407](https://github.com/ROCm/FlyDSL/pull/1407) | [Bugfix] Refuse a tiled-MMA fragment whose view does not til... | @Phil-amd | merged | 2026-11-13 | 2026-11-13 |
| [#1405](https://github.com/ROCm/FlyDSL/pull/1405) | [Fix] Support default trailed arguments in the CompiledFunct... | @sjfeng1999 | merged | 2026-11-12 | 2026-11-13 |
| [#1386](https://github.com/ROCm/FlyDSL/pull/1386) | [Runtime] Drop the ARCH env var in favor of FLYDSL_GPU_ARCH | @coderfeli | merged | 2026-11-07 | 2026-11-13 |
| [#1406](https://github.com/ROCm/FlyDSL/pull/1406) | [Coop] Cross 16-lane rows with gfx950 permlane swaps in the ... | @sjfeng1999 | merged | 2026-11-13 | 2026-11-13 |
| [#1402](https://github.com/ROCm/FlyDSL/pull/1402) | [JIT] Drop redundant LLVM lowering passes from the ROCm pipe... | @sjfeng1999 | merged | 2026-11-12 | 2026-11-12 |
| [#1390](https://github.com/ROCm/FlyDSL/pull/1390) | [Coop] Optimize warp-level prims on the rocdl | @sjfeng1999 | merged | 2026-11-09 | 2026-11-12 |
| [#1398](https://github.com/ROCm/FlyDSL/pull/1398) | [Windows] Fix the Fly extension link after the Core rewrite | @Phil-amd | merged | 2026-11-12 | 2026-11-12 |
| [#1387](https://github.com/ROCm/FlyDSL/pull/1387) | [CI] Add kimik3 a4w4 tuned CSV to the aiter wheel-validation... | @coderfeli | merged | 2026-11-09 | 2026-11-12 |
| [#1313](https://github.com/ROCm/FlyDSL/pull/1313) | [Core] Replace the Fly layout implementation with the Core l... | @sjfeng1999 | merged | 2026-10-20 | 2026-11-11 |
| [#1392](https://github.com/ROCm/FlyDSL/pull/1392) | [JIT] Add compile_only to flyc.compile | @sjfeng1999 | merged | 2026-11-09 | 2026-11-10 |
| [#1389](https://github.com/ROCm/FlyDSL/pull/1389) | [CI] Shrink the wheel artifact the GPU jobs download | @sjfeng1999 | merged | 2026-11-09 | 2026-11-10 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-11-27T17:42:47Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#819](https://github.com/ROCm/TransformerEngine/pull/819) | [ROCm] Pass short vectors to the bf16 MFMAs of the small-seq... | @mhalk | open | 2026-11-27 | 2026-11-27 |
| [#789](https://github.com/ROCm/TransformerEngine/pull/789) | [gfx1250] TDM normalization/swizzle/transpose | @matthiasdiener | open | 2026-10-30 | 2026-11-26 |
| [#794](https://github.com/ROCm/TransformerEngine/pull/794) | [HK] [gfx1250] BF16 and MXFP8 GEMM kernels for gfx1250 and g... | @alextmagro | open | 2026-11-06 | 2026-11-26 |
| [#817](https://github.com/ROCm/TransformerEngine/pull/817) | Integrate KOSMOS fused MoE into TE for bf16 | @wangye805 | open | 2026-11-25 | 2026-11-26 |
| [#816](https://github.com/ROCm/TransformerEngine/pull/816) | [ROCm] Fix JAX CI OOM flake: drain stale HIP last-error stat... | @VeeraRajasekhar | open | 2026-11-25 | 2026-11-26 |
| [#811](https://github.com/ROCm/TransformerEngine/pull/811) | fix hipBLASLt autotuning issues | @matthiasdiener | open | 2026-11-20 | 2026-11-25 |
| [#814](https://github.com/ROCm/TransformerEngine/pull/814) | Install the CI test environment at runtime instead of a CI i... | @VeeraRajasekhar | open | 2026-11-23 | 2026-11-25 |
| [#788](https://github.com/ROCm/TransformerEngine/pull/788) | [TE][HipKittens] Require K % 128 for blockwise FP8 GEMMs | @AllenFarcas | open | 2026-10-30 | 2026-11-25 |
| [#792](https://github.com/ROCm/TransformerEngine/pull/792) | pin Triton RMSNorm/LayerNorm launch configs instead of autot... | @matthiasdiener | open | 2026-11-02 | 2026-11-24 |
| [#815](https://github.com/ROCm/TransformerEngine/pull/815) | 16-bit grouped GEMMs with HK | @alextmagro | open | 2026-11-23 | 2026-11-23 |
| [#755](https://github.com/ROCm/TransformerEngine/pull/755) | [TE] CK fused attention: return max_logit | @AllenFarcas | open | 2026-10-07 | 2026-11-23 |
| [#800](https://github.com/ROCm/TransformerEngine/pull/800) | Shrink the CI deps image from 9.8 to 5.9 GB and switch CI to... | @VeeraRajasekhar | draft | 2026-11-10 | 2026-11-23 |
| [#812](https://github.com/ROCm/TransformerEngine/pull/812) | [gfx1250] use the padded MXFP8 scale stride in dequantize an... | @matthiasdiener | open | 2026-11-20 | 2026-11-20 |
| [#810](https://github.com/ROCm/TransformerEngine/pull/810) | [HK] Relaxes alignment requirements for gfx950 mxfp8 GEMMs | @alextmagro | open | 2026-11-19 | 2026-11-20 |
| [#762](https://github.com/ROCm/TransformerEngine/pull/762) | Ipanfilo/security scaning | @ipanfilo | open | 2026-10-16 | 2026-11-19 |
| [#803](https://github.com/ROCm/TransformerEngine/pull/803) | NVFP4 UE5M3 support for gfx1250/gfx950 | @matthiasdiener | open | 2026-11-12 | 2026-11-19 |
| [#801](https://github.com/ROCm/TransformerEngine/pull/801) | [TE] MXFP8 quantize: 2D block scaling and GEMM-swizzled scal... | @AllenFarcas | open | 2026-11-12 | 2026-11-19 |
| [#759](https://github.com/ROCm/TransformerEngine/pull/759) | speed up multi-stream execution | @matthiasdiener | draft | 2026-10-13 | 2026-11-19 |
| [#694](https://github.com/ROCm/TransformerEngine/pull/694) | Permute-Free Grouped GEMM for MoE (bf16, gfx950) | @sudhu2k | open | 2026-08-06 | 2026-11-19 |
| [#807](https://github.com/ROCm/TransformerEngine/pull/807) | CI: pilot DPX runner for mi35x mGPU (8-GPU) tests | @pelumi1163 | open | 2026-11-17 | 2026-11-19 |
| [#809](https://github.com/ROCm/TransformerEngine/pull/809) | [Draft][test] Solve OOM issue on new runners | @VeeraRajasekhar | draft | 2026-11-19 | 2026-11-19 |
| [#766](https://github.com/ROCm/TransformerEngine/pull/766) | gfx1250: use hipblaslt device alpha for NVFP4 GEMM | @matthiasdiener | open | 2026-10-16 | 2026-11-18 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Integration of AITER a4w4 GEMM | @Micky774 | open | 2026-07-07 | 2026-11-18 |
| [#802](https://github.com/ROCm/TransformerEngine/pull/802) | [WIP] IFU dev 20261110 v2.22 (upstream 1f251a125) | @wangye805 | draft | 2026-11-12 | 2026-11-18 |
| [#796](https://github.com/ROCm/TransformerEngine/pull/796) | add warmup to hipblaslt tuning | @matthiasdiener | open | 2026-11-06 | 2026-11-16 |
| [#805](https://github.com/ROCm/TransformerEngine/pull/805) | [gfx1250] Add accumulate, alpha and bias epilogues to FlyDSL... | @aris134 | open | 2026-11-13 | 2026-11-14 |
| [#743](https://github.com/ROCm/TransformerEngine/pull/743) | chore: add security scanning workflows | @haribabug | open | 2026-09-24 | 2026-11-11 |
| [#724](https://github.com/ROCm/TransformerEngine/pull/724) | [proof-of-concept] comm overlap microbenchmarks | @matthiasdiener | draft | 2026-08-31 | 2026-11-10 |
| [#717](https://github.com/ROCm/TransformerEngine/pull/717) | Integrate Grouped Gemm v2 on ROCm | @VeeraRajasekhar | draft | 2026-08-26 | 2026-11-08 |
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
| [#718](https://github.com/ROCm/TransformerEngine/pull/718) | Add gfx950 MXFP8 CK grouped GEMM | @aris134 | draft | 2026-08-26 | 2026-10-16 |
| [#712](https://github.com/ROCm/TransformerEngine/pull/712) | CI: upload Python coverage.json from pytest (non-blocking) | @jiagaoxiang | open | 2026-08-21 | 2026-10-16 |
| [#708](https://github.com/ROCm/TransformerEngine/pull/708) | [ROCm] Route dense CP softmax-LSE correction through a nativ... | @zjin-lcf | open | 2026-08-19 | 2026-10-16 |
| [#700](https://github.com/ROCm/TransformerEngine/pull/700) | [gfx1250] detect when building on gfx1250, add to build arch... | @matthiasdiener | open | 2026-08-11 | 2026-10-16 |
| [#695](https://github.com/ROCm/TransformerEngine/pull/695) | Compile CP softmax LSE corrections with dynamic shapes | @JessicaJiang-123 | open | 2026-08-06 | 2026-10-16 |
| [#808](https://github.com/ROCm/TransformerEngine/pull/808) | build HK gfx1250 MXFP8 GEMMs with the min-register scheduler... | @matthiasdiener | merged | 2026-11-17 | 2026-11-26 |
| [#778](https://github.com/ROCm/TransformerEngine/pull/778) | [gfx1250] TDM for MXFP8/FP8/MXFP4/NVFP4 quantization | @matthiasdiener | merged | 2026-10-22 | 2026-11-25 |
| [#813](https://github.com/ROCm/TransformerEngine/pull/813) | Zero the padding of MXFP4 scale tensors allocated in C++ | @VeeraRajasekhar | merged | 2026-11-23 | 2026-11-25 |
| [#793](https://github.com/ROCm/TransformerEngine/pull/793) | CI: speed up wheel build with ccache | @leo-automation | merged | 2026-11-05 | 2026-11-24 |
| [#804](https://github.com/ROCm/TransformerEngine/pull/804) | Persistent GEMM + RS MXFP8 Enablement | @aris134 | merged | 2026-11-13 | 2026-11-23 |
| [#726](https://github.com/ROCm/TransformerEngine/pull/726) | microbenchmarks: use pytest as execution backend | @matthiasdiener | merged | 2026-08-31 | 2026-11-20 |
| [#797](https://github.com/ROCm/TransformerEngine/pull/797) | Veergopu/release v2.21 rocm | @VeeraRajasekhar | merged | 2026-11-07 | 2026-11-18 |
| [#799](https://github.com/ROCm/TransformerEngine/pull/799) | Run gfx1250 CI tests via rocjitsu | @matthiasdiener | merged | 2026-11-09 | 2026-11-18 |
| [#806](https://github.com/ROCm/TransformerEngine/pull/806) | Fix order-dependent fp32 layout-invariance failure on gfx942 | @VeeraRajasekhar | merged | 2026-11-17 | 2026-11-18 |
| [#791](https://github.com/ROCm/TransformerEngine/pull/791) | Fix MoE permutation on gfx1250 w/ Triton 3.8, faster row_id_... | @matthiasdiener | merged | 2026-11-02 | 2026-11-16 |
| [#777](https://github.com/ROCm/TransformerEngine/pull/777) | XCD work stealing improvements for HK Grouped GEMMs | @alextmagro | merged | 2026-10-22 | 2026-11-12 |
| [#798](https://github.com/ROCm/TransformerEngine/pull/798) | [ROCm] Fix int32 overflow in the custom multi-tensor L2 norm | @Z-Y00 | merged | 2026-11-09 | 2026-11-11 |
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
