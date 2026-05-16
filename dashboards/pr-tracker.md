# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-05-16T09:18:24Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#183583](https://github.com/pytorch/pytorch/pull/183583) | Support per dim marking in dynamic source list. (#183583) | @laithsakka | open | 2026-05-13 | 2026-05-16 |
| [#176558](https://github.com/pytorch/pytorch/pull/176558) | [dynamo] Fix torch.cuda.Event under torch.compile | @NikhilAPatel | open | 2026-03-05 | 2026-05-16 |
| [#183455](https://github.com/pytorch/pytorch/pull/183455) | Port D104346887/PR 182675 for index large select (#183455) | @AlbertDachiChen | open | 2026-05-12 | 2026-05-16 |
| [#183275](https://github.com/pytorch/pytorch/pull/183275) | [Inductor][Refactor] 1/N Introduce heuristics/ module with t... | @etaf | open | 2026-05-11 | 2026-05-16 |
| [#183276](https://github.com/pytorch/pytorch/pull/183276) | [Inductor][Refactor] 2/N Introduce shared heuristic registry... | @etaf | open | 2026-05-11 | 2026-05-16 |
| [#183277](https://github.com/pytorch/pytorch/pull/183277) | [Inductor][Refactor] 3/N Move pointwise heuristics from trit... | @etaf | open | 2026-05-11 | 2026-05-16 |
| [#173459](https://github.com/pytorch/pytorch/pull/173459) | Add dtype mismatch validation for mm/bmm in meta registratio... | @adabeyta | open | 2026-01-27 | 2026-05-16 |
| [#183278](https://github.com/pytorch/pytorch/pull/183278) | [Inductor][Refactor] 4/N Move reduction heuristics from trit... | @etaf | open | 2026-05-11 | 2026-05-16 |
| [#183970](https://github.com/pytorch/pytorch/pull/183970) | Fix FakeTensor device hint in DTensor sharding propagation | @acisseJZhong | open | 2026-05-15 | 2026-05-16 |
| [#183647](https://github.com/pytorch/pytorch/pull/183647) | [OSDC] Migrate inductor-periodic.yml to OSDC (ARC) via dial-... | @huydhn | open | 2026-05-14 | 2026-05-16 |
| [#178362](https://github.com/pytorch/pytorch/pull/178362) | [CUDA][Mempool] use allocation-time counter instead of addre... | @staugust | open | 2026-03-25 | 2026-05-16 |
| [#183942](https://github.com/pytorch/pytorch/pull/183942) | Enabling tl.fma and unskipping | @umechand-amd | open | 2026-05-15 | 2026-05-16 |
| [#183592](https://github.com/pytorch/pytorch/pull/183592) | [ROCm] op benchmark: use noble nightly image | @apakbin | open | 2026-05-13 | 2026-05-16 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-05-16 |
| [#183788](https://github.com/pytorch/pytorch/pull/183788) | Xfail ROCm log10 strict numerics test | @jansel | open | 2026-05-14 | 2026-05-16 |
| [#183068](https://github.com/pytorch/pytorch/pull/183068) | [vllm hash update] update the pinned vllm hash | @pytorchupdatebot | open | 2026-05-10 | 2026-05-16 |
| [#182999](https://github.com/pytorch/pytorch/pull/182999) | [test] Remove unintentional skip for OpInfo test against Num... | @benjaminglass1 | open | 2026-05-08 | 2026-05-16 |
| [#179651](https://github.com/pytorch/pytorch/pull/179651) | [torchtitan hash update] update the pinned torchtitan hash | @pytorchupdatebot | open | 2026-04-08 | 2026-05-16 |
| [#183963](https://github.com/pytorch/pytorch/pull/183963) | Unskipping linalg_householder_product_cuda tests  | @umechand-amd | open | 2026-05-15 | 2026-05-16 |
| [#182108](https://github.com/pytorch/pytorch/pull/182108) | [Native DSL] Quack-based cuteDSL RMSNorm | @slayton58 | open | 2026-05-01 | 2026-05-16 |
| [#176518](https://github.com/pytorch/pytorch/pull/176518) | [Inductor][NVGEMM] Vendor blockscaled GEMM CuTeDSL kernel | @NikhilAPatel | open | 2026-03-05 | 2026-05-16 |
| [#183479](https://github.com/pytorch/pytorch/pull/183479) | TMA scatter_add: add multi-row-per-warp path for small rows | @liqiangxl | draft | 2026-05-12 | 2026-05-16 |
| [#183991](https://github.com/pytorch/pytorch/pull/183991) | Remove obsolete ROCm_Bug workaround in std::arg<c10::complex... | @cyyever | open | 2026-05-16 | 2026-05-16 |
| [#178541](https://github.com/pytorch/pytorch/pull/178541) | [ROCm][Inductor] Don't apply pointer_range_32 to user-define... | @nithinsubbiah | open | 2026-03-26 | 2026-05-16 |
| [#170051](https://github.com/pytorch/pytorch/pull/170051) | Add pivoted QR decomposition to ATen and torch.linalg | @thkloss | open | 2025-12-10 | 2026-05-16 |
| [#180118](https://github.com/pytorch/pytorch/pull/180118) | [dynamo] Skip pad_packed_sequence during tracing | @WeishuZ | open | 2026-04-11 | 2026-05-16 |
| [#183766](https://github.com/pytorch/pytorch/pull/183766) | [ROCm] route fp16 backward GEMMs to rocBLAS to preserve subn... | @naromero77amd | draft | 2026-05-14 | 2026-05-16 |
| [#183973](https://github.com/pytorch/pytorch/pull/183973) | Fix an exception in tuned_addmm when bias is unrealized | @fnz | open | 2026-05-15 | 2026-05-16 |
| [#183949](https://github.com/pytorch/pytorch/pull/183949) | Guard SM100 FP8 lowering to NVIDIA | @jansel | draft | 2026-05-15 | 2026-05-16 |
| [#115316](https://github.com/pytorch/pytorch/pull/115316) | Automated submodule update: FBGEMM | @facebook-github-bot | open | 2023-12-07 | 2026-05-16 |
| [#183832](https://github.com/pytorch/pytorch/pull/183832) | Fix ROCm combo kernel profiler grid checks | @jansel | open | 2026-05-15 | 2026-05-16 |
| [#183876](https://github.com/pytorch/pytorch/pull/183876) | [ROCm] Fix conv stride constraint layout expectation | @jansel | open | 2026-05-15 | 2026-05-16 |
| [#183014](https://github.com/pytorch/pytorch/pull/183014) | [ROCm][inductor] Make Inductor warp-size handling device-awa... | @naromero77amd | draft | 2026-05-09 | 2026-05-16 |
| [#179639](https://github.com/pytorch/pytorch/pull/179639) | [ROCm][CI] Switch rocm-nightly from tarballs back to TheRock... | @ethanwee1 | draft | 2026-04-07 | 2026-05-16 |
| [#183926](https://github.com/pytorch/pytorch/pull/183926) | [ROCm][inductor] Use hipModuleLoadData in StaticCudaLauncher... | @naromero77amd | draft | 2026-05-15 | 2026-05-16 |
| [#183965](https://github.com/pytorch/pytorch/pull/183965) | [ROCm] Update CK and AITER with corresponding PyTorch change... | @alugorey | draft | 2026-05-15 | 2026-05-16 |
| [#183945](https://github.com/pytorch/pytorch/pull/183945) | [Inductor][ROCm] Add XCD remapping to flex_attention forward... | @nithinsubbiah | open | 2026-05-15 | 2026-05-16 |
| [#180721](https://github.com/pytorch/pytorch/pull/180721) | [ROCm][FlexAttention] Auto-detect BLOCKS_ARE_CONTIGUOUS from... | @nithinsubbiah | open | 2026-04-17 | 2026-05-16 |
| [#178958](https://github.com/pytorch/pytorch/pull/178958) | [DO NOT MERGE][DO NOT TOUCH][ROCm] Triton 3.7 ROCm Cherry-pi... | @naromero77amd | draft | 2026-04-01 | 2026-05-15 |
| [#183897](https://github.com/pytorch/pytorch/pull/183897) | [TESTING] [DO NOT MERGE] Testing ROCm disables for test_bmm ... | @iupaikov-amd | draft | 2026-05-15 | 2026-05-15 |
| [#183962](https://github.com/pytorch/pytorch/pull/183962) | [ROCm][Windows] Don't set USE_ROCM_CK_SDPA on Windows | @astrelsky | open | 2026-05-15 | 2026-05-15 |
| [#183791](https://github.com/pytorch/pytorch/pull/183791) |  [Inductor] Fix bytes-vs-elements mismatch in select_algorit... | @zijianshen | open | 2026-05-14 | 2026-05-15 |
| [#183824](https://github.com/pytorch/pytorch/pull/183824) | Mark ROCm fp16 log10 numerics xfail | @jansel | open | 2026-05-15 | 2026-05-15 |
| [#159850](https://github.com/pytorch/pytorch/pull/159850) | Guard the CPU cpp wrapper tests on having a cpp wrapper | @charlie-wt | open | 2025-08-05 | 2026-05-15 |
| [#183589](https://github.com/pytorch/pytorch/pull/183589) | [Inductor] Preserve `out_dtype` in `MMKernelInputs` | @eqy | open | 2026-05-13 | 2026-05-15 |
| [#182432](https://github.com/pytorch/pytorch/pull/182432) | [Test] Refactor use_cuda to device param in test_profiler | @RiyaP2508 | open | 2026-05-05 | 2026-05-15 |
| [#182794](https://github.com/pytorch/pytorch/pull/182794) | [inductor][rocm] Fix AOTInductor autotune int64 Triton kerne... | @Arkar-Hema | open | 2026-05-07 | 2026-05-15 |
| [#180310](https://github.com/pytorch/pytorch/pull/180310) | [ROCm] Workaround for UpSamplingNearest2D Fwd due to HIP UIN... | @glen-amd | open | 2026-04-14 | 2026-05-15 |
| [#173177](https://github.com/pytorch/pytorch/pull/173177) | [Inductor] Eliminate clones for dtype views in auto_function... | @iupaikov-amd | open | 2026-01-23 | 2026-05-15 |
| [#183864](https://github.com/pytorch/pytorch/pull/183864) | Fix LayerNorm backward kernel for AMD Strix Halo GPUs | @bozhou2021 | open | 2026-05-15 | 2026-05-15 |
| [#183905](https://github.com/pytorch/pytorch/pull/183905) | [ROCM][CI] Increase shards for trunk-rocm-sandbox workflow | @amdfaa | open | 2026-05-15 | 2026-05-15 |
| [#183570](https://github.com/pytorch/pytorch/pull/183570) | [ROCm][CI] Fix Permissions of the navi31s after the testing | @amdfaa | open | 2026-05-13 | 2026-05-15 |
| [#183673](https://github.com/pytorch/pytorch/pull/183673) | [ROCm][Windows] torchgen: fix Windows DLL linkage for native... | @tvukovic-amd | open | 2026-05-14 | 2026-05-15 |
| [#181721](https://github.com/pytorch/pytorch/pull/181721) | [release/2.12] Cherry-pick: [CI][Build] Goodbye Bazel | @malfet | merged | 2026-04-28 | 2026-04-28 |
| [#181364](https://github.com/pytorch/pytorch/pull/181364) | revert https://github.com/pytorch/pytorch/pull/172340 | @pytorchbot | merged | 2026-04-24 | 2026-04-27 |
| [#180927](https://github.com/pytorch/pytorch/pull/180927) | [ROCm][RELEASE_ONLY] skip test_autoheuristic in-code (alread... | @pragupta | merged | 2026-04-20 | 2026-04-22 |
| [#180903](https://github.com/pytorch/pytorch/pull/180903) | [ROCm][UT] Remove previously retained Triton 3.7 skip for to... | @pytorchbot | merged | 2026-04-20 | 2026-04-22 |
| [#180897](https://github.com/pytorch/pytorch/pull/180897) | [ROCm] Run test_scaled_mm_deepseek_error_messages on mi350 a... | @pytorchbot | merged | 2026-04-20 | 2026-04-22 |
| [#180715](https://github.com/pytorch/pytorch/pull/180715) | [ROCm] Fix evaluate_platform_supports_fp8 false-positive | @pytorchbot | merged | 2026-04-17 | 2026-04-20 |
| [#180692](https://github.com/pytorch/pytorch/pull/180692) | [ROCm] Resolve timeouts caused due to hipblasLT module creat... | @pytorchbot | merged | 2026-04-17 | 2026-04-20 |
| [#180815](https://github.com/pytorch/pytorch/pull/180815) | [xpu][fix] Include lazy_triton_compile.h in XPU cpp_wrapper ... | @etaf | merged | 2026-04-20 | 2026-04-20 |
| [#177193](https://github.com/pytorch/pytorch/pull/177193) | [Inductor][MPS] Fix half-precision type mismatches in Metal ... | @malfet | merged | 2026-03-11 | 2026-04-20 |
| [#180691](https://github.com/pytorch/pytorch/pull/180691) | [ROCm] Enable ROCm swizzle check and update scaled_mm swizzl... | @pytorchbot | merged | 2026-04-17 | 2026-04-19 |
| [#180690](https://github.com/pytorch/pytorch/pull/180690) | [ROCm] Update scaled_mm DeepSeek error message | @pytorchbot | merged | 2026-04-17 | 2026-04-19 |
| [#180687](https://github.com/pytorch/pytorch/pull/180687) | [UT][ROCm][inductor] ROCm-specific XFAILS list for torchindu... | @pytorchbot | merged | 2026-04-17 | 2026-04-19 |
| [#180600](https://github.com/pytorch/pytorch/pull/180600) | [ROCm] Fix inline_asm_elementwise for ROCm | @pytorchbot | merged | 2026-04-16 | 2026-04-19 |
| [#177616](https://github.com/pytorch/pytorch/pull/177616) | Update pytorch_sphinx_theme2 version to 0.4.6 | @pytorchbot | merged | 2026-03-17 | 2026-04-17 |
| [#175767](https://github.com/pytorch/pytorch/pull/175767) | [ROCm][CI] Upgrade ROCm CI to 7.2 - 4/N | @pytorchbot | merged | 2026-02-25 | 2026-03-28 |
| [#175766](https://github.com/pytorch/pytorch/pull/175766) | [ROCm] Added CUDA check to test_pattern_matcher | @pytorchbot | merged | 2026-02-25 | 2026-03-28 |
| [#178443](https://github.com/pytorch/pytorch/pull/178443) | Bump requests from 2.32.4 to 2.33.0 in /.github | @dependabot[bot] | merged | 2026-03-25 | 2026-03-25 |
| [#175159](https://github.com/pytorch/pytorch/pull/175159) | [ROCm] forward fix #174087, take 4 | @pytorchbot | merged | 2026-02-17 | 2026-03-23 |
| [#175299](https://github.com/pytorch/pytorch/pull/175299) | [benchmark] Skip pytorch_CycleGAN_and_pix2pix from inductor ... | @pytorchbot | merged | 2026-02-19 | 2026-03-22 |
| [#178006](https://github.com/pytorch/pytorch/pull/178006) | [release only] Increase timeout for rocm libtorch and manywh... | @atalman | merged | 2026-03-20 | 2026-03-21 |
| [#175096](https://github.com/pytorch/pytorch/pull/175096) | Update inductor expected accuracy files | @pytorchbot | merged | 2026-02-16 | 2026-03-19 |
| [#175095](https://github.com/pytorch/pytorch/pull/175095) | Revert "[CI] Enable TIMM pretrained model caching on shared ... | @jeffdaily | merged | 2026-02-16 | 2026-03-19 |
| [#175094](https://github.com/pytorch/pytorch/pull/175094) | Revert "[fix] DISABLED test_index (__main__.DistTensorOpsTes... | @jeffdaily | merged | 2026-02-16 | 2026-03-19 |
| [#172179](https://github.com/pytorch/pytorch/pull/172179) | Bump fbgemm and torchrec pinned commit | @pytorchbot | merged | 2026-01-11 | 2026-02-12 |
| [#171147](https://github.com/pytorch/pytorch/pull/171147) | [ROCm][CI] additional PLATFORM_SUPPORTS_SYMM_MEM skips | @pytorchbot | merged | 2025-12-23 | 2026-01-23 |
| [#170888](https://github.com/pytorch/pytorch/pull/170888) | [dynamo] do not include source hashes in pickle | @pytorchbot | merged | 2025-12-19 | 2026-01-22 |
| [#170731](https://github.com/pytorch/pytorch/pull/170731) | Add check for GPU/cuDNN compatibility on import | @pytorchbot | merged | 2025-12-18 | 2026-01-22 |
| [#171140](https://github.com/pytorch/pytorch/pull/171140) | [ROCm] Make grouped GEMM CK opt‑in via env and default to fa... | @jagadish-amd | merged | 2025-12-22 | 2026-01-19 |
| [#170246](https://github.com/pytorch/pytorch/pull/170246) | [Inductor] ExternKernelBenchmarkRequest best attempt | @pytorchbot | merged | 2025-12-11 | 2026-01-17 |
| [#170190](https://github.com/pytorch/pytorch/pull/170190) | [ROCm] Enable shared memory based pruning for Triton configs | @pytorchbot | merged | 2025-12-11 | 2026-01-16 |
| [#170112](https://github.com/pytorch/pytorch/pull/170112) | [RELEASE 2.10] Release only changes | @atalman | merged | 2025-12-10 | 2026-01-10 |
| [#171760](https://github.com/pytorch/pytorch/pull/171760) | Bump aiohttp from 3.13.2 to 3.13.3 in /.ci/docker | @dependabot[bot] | merged | 2026-01-06 | 2026-01-09 |
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
| [#156728](https://github.com/pytorch/pytorch/pull/156728) | [RELEASE 2.8] Release only changes | @atalman | merged | 2025-06-24 | 2025-06-24 |
| [#154135](https://github.com/pytorch/pytorch/pull/154135) | [ROCm] Added unit test to test the cuda_pluggable allocator  | @pytorchbot | merged | 2025-05-22 | 2025-06-23 |

## jax (Upstream Watch)
Repo: `jax-ml/jax` | Last collected: 2026-05-16T09:18:29Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#37053](https://github.com/jax-ml/jax/pull/37053) | [ROCm] Fix env var leak in xla_bridge_test register_plugin t... | @magaonka-amd | draft | 2026-04-21 | 2026-05-15 |
| [#37444](https://github.com/jax-ml/jax/pull/37444) | [ROCm] Version-tier S3 layout, standardized CI job naming, a... | @mminutoli | open | 2026-05-07 | 2026-05-11 |
| [#37475](https://github.com/jax-ml/jax/pull/37475) | [ROCm] Move ROCm Bazel presubmit workflow to 32-bit mode. | @tsrw2048 | open | 2026-05-07 | 2026-05-08 |
| [#35785](https://github.com/jax-ml/jax/pull/35785) | [ROCm] Fix and simplify jax rocm plugin init script | @alekstheod | merged | 2026-03-10 | 2026-05-08 |
| [#36739](https://github.com/jax-ml/jax/pull/36739) | [ROCm] Add Bazel option `remote_download_toplevel` for build... | @tsrw2048 | merged | 2026-04-13 | 2026-05-07 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-05-05 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37183](https://github.com/jax-ml/jax/pull/37183) | [ROCm] Fix inter-block write race in pallas test_non_range_w... | @magaonka-amd | merged | 2026-04-25 | 2026-04-30 |
| [#36909](https://github.com/jax-ml/jax/pull/36909) | [ROCm] Skip unit tests in `testEighIdentity` because of hipS... | @tsrw2048 | merged | 2026-04-16 | 2026-04-30 |
| [#37044](https://github.com/jax-ml/jax/pull/37044) | Fix security issues in bazel_rocm.yml identified by zizmor. | @copybara-service[bot] | merged | 2026-04-21 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#37072](https://github.com/jax-ml/jax/pull/37072) | [ROCm] Update rules_ml_toolchain reference | @alekstheod | merged | 2026-04-22 | 2026-04-28 |
| [#37054](https://github.com/jax-ml/jax/pull/37054) | [ROCm] Override HIP_VISIBLE_DEVICES per ROCm xdist worker | @magaonka-amd | merged | 2026-04-21 | 2026-04-27 |
| [#37071](https://github.com/jax-ml/jax/pull/37071) | [ROCm] Switch to hermetic llvm | @alekstheod | draft | 2026-04-22 | 2026-04-22 |
| [#34722](https://github.com/jax-ml/jax/pull/34722) | [ROCm] ToT ROCm Unit Test Skips | @gulsumgudukbay | merged | 2026-01-30 | 2026-04-21 |
| [#36854](https://github.com/jax-ml/jax/pull/36854) | Pin ROCm JAX dev container image to a specific SHA. | @copybara-service[bot] | open | 2026-04-15 | 2026-04-21 |
| [#36984](https://github.com/jax-ml/jax/pull/36984) | [ROCm] Skip `tridiagonal_solve_perturbed` code path in eigh ... | @tsrw2048 | merged | 2026-04-20 | 2026-04-21 |
| [#36911](https://github.com/jax-ml/jax/pull/36911) | Fix security issues in download-jax-rocm-wheels action ident... | @copybara-service[bot] | merged | 2026-04-16 | 2026-04-21 |
| [#36851](https://github.com/jax-ml/jax/pull/36851) | [ROCm] Split ROCm pytest into single- and multi-accelerator ... | @magaonka-amd | merged | 2026-04-15 | 2026-04-20 |
| [#36981](https://github.com/jax-ml/jax/pull/36981) | [Pallas:GPU] Use is_device_cuda/rocm instead of checking it ... | @copybara-service[bot] | open | 2026-04-20 | 2026-04-20 |
| [#36982](https://github.com/jax-ml/jax/pull/36982) | [JAX:GPU] Use is_device_cuda/rocm instead of checking it wit... | @copybara-service[bot] | open | 2026-04-20 | 2026-04-20 |
| [#36902](https://github.com/jax-ml/jax/pull/36902) | Pin ROCm container images and fix command injection in `baze... | @copybara-service[bot] | open | 2026-04-16 | 2026-04-16 |
| [#36684](https://github.com/jax-ml/jax/pull/36684) | [ROCm] Use CloudFront download for ROCm wheels instead of S3 | @psanal35 | merged | 2026-04-10 | 2026-04-16 |
| [#36840](https://github.com/jax-ml/jax/pull/36840) | [ROCm] Override ROCR_VISIBLE_DEVICES instead of using setdef... | @magaonka-amd | draft | 2026-04-15 | 2026-04-15 |
| [#36806](https://github.com/jax-ml/jax/pull/36806) | [ROCm] Rotate GPU visibility across xdist workers instead of... | @magaonka-amd | draft | 2026-04-15 | 2026-04-15 |
| [#36644](https://github.com/jax-ml/jax/pull/36644) | [ROCm] Skip tridiagonal pivot reference tests on ROCm for pe... | @magaonka-amd | merged | 2026-04-09 | 2026-04-09 |
| [#36522](https://github.com/jax-ml/jax/pull/36522) | [ROCm] Added fixes to Bazel ROCm CI to use proper wheels. | @tsrw2048 | merged | 2026-04-06 | 2026-04-09 |
| [#36621](https://github.com/jax-ml/jax/pull/36621) | [ROCm] Accept manylinux_2_28 wheels in auditwheel validation | @psanal35 | merged | 2026-04-09 | 2026-04-09 |
| [#36355](https://github.com/jax-ml/jax/pull/36355) | [ROCm] fix: wire up clone_main_xla for ROCm builds and tests | @mminutoli | merged | 2026-03-31 | 2026-04-08 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#36492](https://github.com/jax-ml/jax/pull/36492) | [ROCm] Skip failing ROCm CI tests | @magaonka-amd | merged | 2026-04-03 | 2026-04-03 |
| [#36426](https://github.com/jax-ml/jax/pull/36426) | [ROCm] Restore default SVD algorithms on ROCm. | @tsrw2048 | merged | 2026-04-01 | 2026-04-03 |
| [#35534](https://github.com/jax-ml/jax/pull/35534) | [ROCm] bring gesdd for computing SVD on ROCm | @cj401-amd | merged | 2026-03-02 | 2026-03-30 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#34491](https://github.com/jax-ml/jax/pull/34491) | Enable ROCm testing for threefry_partitionable PRNG tests | @hrideymarwah15 | open | 2026-01-20 | 2026-03-30 |
| [#34971](https://github.com/jax-ml/jax/pull/34971) | [ROCm] fix the performance issue when n=1 or 2 | @cj401-amd | merged | 2026-02-10 | 2026-03-26 |
| [#34135](https://github.com/jax-ml/jax/pull/34135) | [ROCm] update to test if there are GPU events when doing pro... | @cj401-amd | merged | 2026-01-02 | 2026-03-26 |
| [#36267](https://github.com/jax-ml/jax/pull/36267) | Bump rules_ml_toolchain to version with ROCM/SYCL (OneAPI) c... | @copybara-service[bot] | merged | 2026-03-26 | 2026-03-26 |
| [#35995](https://github.com/jax-ml/jax/pull/35995) | [ROCm] Add lowering for ScaledMatmul, ScaledDot | @shurale-nkn | merged | 2026-03-18 | 2026-03-25 |
| [#36055](https://github.com/jax-ml/jax/pull/36055) | [ROCm] Add offload-compress flag to reduce rocm wheel size | @gulsumgudukbay | merged | 2026-03-19 | 2026-03-23 |
| [#36103](https://github.com/jax-ml/jax/pull/36103) | [ROCm] Use local spawn strategy to force build locally | @alekstheod | merged | 2026-03-23 | 2026-03-23 |
| [#36056](https://github.com/jax-ml/jax/pull/36056) | [ROCm] Add wheel version suffix support for ROCm post-releas... | @gulsumgudukbay | merged | 2026-03-19 | 2026-03-20 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |
| [#36044](https://github.com/jax-ml/jax/pull/36044) | [ROCm] Use dynamic spawn strategy for rocm rbe ci test execu... | @alekstheod | merged | 2026-03-19 | 2026-03-19 |
| [#34702](https://github.com/jax-ml/jax/pull/34702) | [ROCm] Add script for running bazel tests on ROCm | @charleshofer | merged | 2026-01-29 | 2026-03-19 |
| [#35611](https://github.com/jax-ml/jax/pull/35611) | [ROCm] Skip ann_test test_pmap on ROCm due to IndivisibleErr... | @AratiGanesh | merged | 2026-03-04 | 2026-03-19 |
| [#26604](https://github.com/jax-ml/jax/pull/26604) | [ROCm][pallas:triton] Fix atomic min/max lowering for uint a... | @draganmladjenovic | merged | 2025-02-19 | 2026-03-19 |
| [#35638](https://github.com/jax-ml/jax/pull/35638) | [ROCm] Fix HIP memory leaks in RNN kernels | @magaonka-amd | draft | 2026-03-05 | 2026-03-05 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-05-16T09:18:37Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#42374](https://github.com/vllm-project/vllm/pull/42374) | [Core][WIP][1/N] Standardize kv layout | @LucasWilkinson | open | 2026-05-12 | 2026-05-16 |
| [#42758](https://github.com/vllm-project/vllm/pull/42758) | Enable perf_token_group_quant/_C_stable_libtorch for ROCm | @charlifu | open | 2026-05-15 | 2026-05-16 |
| [#40601](https://github.com/vllm-project/vllm/pull/40601) | [quant][autoround]Refactor INC quantization into package wit... | @yiliu30 | open | 2026-04-22 | 2026-05-16 |
| [#42304](https://github.com/vllm-project/vllm/pull/42304) | [Experimental] Breakable CUDA graph | @ZJY0516 | open | 2026-05-11 | 2026-05-16 |
| [#42735](https://github.com/vllm-project/vllm/pull/42735) | [Perf][Kernel] Use bf16 shared staging in mHC pre TileLang k... | @piaoyanglink15 | open | 2026-05-15 | 2026-05-16 |
| [#42288](https://github.com/vllm-project/vllm/pull/42288) | Adjust design around encoder_cudagraph_forward | @wdhongtw | open | 2026-05-11 | 2026-05-16 |
| [#33127](https://github.com/vllm-project/vllm/pull/33127) | [Kernel] adding native nccl4py support | @pkousha | open | 2026-01-27 | 2026-05-16 |
| [#42818](https://github.com/vllm-project/vllm/pull/42818) | perf(steering): fuse per-layer index_copy in populate | @RhizoNymph | closed | 2026-05-16 | 2026-05-16 |
| [#42816](https://github.com/vllm-project/vllm/pull/42816) | perf(steering): non-blocking H2D in stack_vectors_to_device | @RhizoNymph | closed | 2026-05-16 | 2026-05-16 |
| [#42817](https://github.com/vllm-project/vllm/pull/42817) | perf(steering): make auto-promote broadcast fire-and-forget | @RhizoNymph | closed | 2026-05-16 | 2026-05-16 |
| [#42815](https://github.com/vllm-project/vllm/pull/42815) | perf(steering): pre-warm Triton JIT for all served shapes | @RhizoNymph | closed | 2026-05-16 | 2026-05-16 |
| [#42810](https://github.com/vllm-project/vllm/pull/42810) | [ROCm] [Bugfix] Fix DeepSeek V4 Functionality and Accuracy | @tjtanaa | open | 2026-05-16 | 2026-05-16 |
| [#42807](https://github.com/vllm-project/vllm/pull/42807) | [ROCm][CI] Removed problematic command override mechanism | @AndreasKaratzas | open | 2026-05-16 | 2026-05-16 |
| [#42798](https://github.com/vllm-project/vllm/pull/42798) | [ROCm] Fix ROCm Attention Backend Slection | @Concurrensee | open | 2026-05-16 | 2026-05-16 |
| [#42746](https://github.com/vllm-project/vllm/pull/42746) | [Perf][Qwen3.5] Fuse GDN linear_attn qkv|z|b|a into a single... | @forrestl111 | open | 2026-05-15 | 2026-05-16 |
| [#39538](https://github.com/vllm-project/vllm/pull/39538) | [Kernel][UX] Add `--linear-backend` arg for linear kernel se... | @mgoin | merged | 2026-04-10 | 2026-05-16 |
| [#42793](https://github.com/vllm-project/vllm/pull/42793) | [ROCm][CI] Stage C mirrors | @AndreasKaratzas | open | 2026-05-15 | 2026-05-15 |
| [#39949](https://github.com/vllm-project/vllm/pull/39949) | [Spec Decode] Support hybrid attention models in extract_hid... | @mgoin | merged | 2026-04-15 | 2026-05-15 |
| [#42558](https://github.com/vllm-project/vllm/pull/42558) | [Bugfix] Keep streaming detokenization on HF when tokenizer_... | @kouroshHakha | open | 2026-05-13 | 2026-05-15 |
| [#41711](https://github.com/vllm-project/vllm/pull/41711) | [CI/Build] Bump flashinfer to v0.6.11.post2 | @arpera | open | 2026-05-05 | 2026-05-15 |
| [#42462](https://github.com/vllm-project/vllm/pull/42462) | [ROCm][Bugfix]: add aiter MoE backends to MOEBackend list | @Rohan138 | open | 2026-05-12 | 2026-05-15 |
| [#42606](https://github.com/vllm-project/vllm/pull/42606) | [ROCm][Bugfix] Fix fused_mla_dual_rms_norm for AITER API ren... | @rbrugaro-amd | merged | 2026-05-14 | 2026-05-15 |
| [#42663](https://github.com/vllm-project/vllm/pull/42663) | [6/n] Migrate activation kernels, gptq, gguf, non cutlass w8... | @cleonard530 | open | 2026-05-14 | 2026-05-15 |
| [#40826](https://github.com/vllm-project/vllm/pull/40826) | [NIXL] Support heterogeneous split_k_and_v policies for NIXL... | @skavulya | open | 2026-04-24 | 2026-05-15 |
| [#42775](https://github.com/vllm-project/vllm/pull/42775) | Add opt-in draft vocab padding for speculative decoding | @massif-01 | open | 2026-05-15 | 2026-05-15 |
| [#42772](https://github.com/vllm-project/vllm/pull/42772) | Add dllehr-amd to CODEOWNERS and committers list | @dllehr-amd | open | 2026-05-15 | 2026-05-15 |
| [#42767](https://github.com/vllm-project/vllm/pull/42767) | [Refactor] Remove dead cuda kernels | @yewentao256 | open | 2026-05-15 | 2026-05-15 |
| [#42409](https://github.com/vllm-project/vllm/pull/42409) | [ROCm] Widen AITER fused AR RMSNorm 1-stage gate | @akii96 | merged | 2026-05-12 | 2026-05-15 |
| [#41790](https://github.com/vllm-project/vllm/pull/41790) | [KV Offload] Expose SimpleCPU offload metrics | @OCWC22 | open | 2026-05-06 | 2026-05-15 |
| [#41751](https://github.com/vllm-project/vllm/pull/41751) | [ROCm] mori: add InterNodeV1LL inter-node kernel selection v... | @jatseng-ai | open | 2026-05-05 | 2026-05-15 |
| [#42072](https://github.com/vllm-project/vllm/pull/42072) | [ROCm] Restore fast top_k_per_row kernels for sparse MLA whe... | @frida-andersson | merged | 2026-05-08 | 2026-05-15 |
| [#40745](https://github.com/vllm-project/vllm/pull/40745) | [Bugfix][ROCm] Fix OOB query read in paged_attention_rocm fo... | @Concurrensee | open | 2026-04-23 | 2026-05-15 |
| [#39168](https://github.com/vllm-project/vllm/pull/39168) | [ROCm] Expanded sparse MLA support | @ekuznetsov139 | open | 2026-04-07 | 2026-05-15 |
| [#41856](https://github.com/vllm-project/vllm/pull/41856) | [ROCm][Bugfix] Add +256 col guard to preshuffle logits buffe... | @frida-andersson | open | 2026-05-06 | 2026-05-15 |
| [#42025](https://github.com/vllm-project/vllm/pull/42025) | [ROCm][CI] Stage B gating | @AndreasKaratzas | merged | 2026-05-08 | 2026-05-15 |
| [#42765](https://github.com/vllm-project/vllm/pull/42765) | [Bugfix] _triton_mrope_forward: support GPT-J-style rotation... | @sudhir-mcw | draft | 2026-05-15 | 2026-05-15 |
| [#42270](https://github.com/vllm-project/vllm/pull/42270) | [models] Mimo v2.5 Pro: Pro-specific fused-QKV FP8 loader  | @amd-satre | open | 2026-05-11 | 2026-05-15 |
| [#29916](https://github.com/vllm-project/vllm/pull/29916) | [ROCm][CI] Fix test_max_len.py for Rocm | @charlifu | merged | 2025-12-02 | 2026-05-15 |
| [#25693](https://github.com/vllm-project/vllm/pull/25693) | [Rocm][torch.compile] Adding layernorm + fp8 block quant and... | @charlifu | merged | 2025-09-25 | 2026-05-15 |
| [#28895](https://github.com/vllm-project/vllm/pull/28895) | [ROCm][CI] Fix tests/compile unit tests | @charlifu | merged | 2025-11-18 | 2026-05-15 |
| [#33734](https://github.com/vllm-project/vllm/pull/33734) | [Rocm][Bugfix] Fix dtype not same for gemm_a4w4 op | @charlifu | merged | 2026-02-03 | 2026-05-15 |
| [#33945](https://github.com/vllm-project/vllm/pull/33945) | [torch.compile][Fusion] Fix attention fusion pass removing k... | @charlifu | merged | 2026-02-05 | 2026-05-15 |
| [#34750](https://github.com/vllm-project/vllm/pull/34750) | [Rocm][CI] Fix LM Eval Large Models (H100) test group | @charlifu | merged | 2026-02-17 | 2026-05-15 |
| [#35913](https://github.com/vllm-project/vllm/pull/35913) | [Rocm][CI] Fix ROCm LM Eval Large Models (8 Card) | @charlifu | merged | 2026-03-03 | 2026-05-15 |
| [#38680](https://github.com/vllm-project/vllm/pull/38680) | [CI][ROCm] Remove unsupported cases in test_fusion.py | @charlifu | merged | 2026-04-01 | 2026-05-15 |
| [#42755](https://github.com/vllm-project/vllm/pull/42755) | [Model][Hardware][AMD][Kernel]: Part 2/2 -> Enable e2e QK No... | @jhu960213 | open | 2026-05-15 | 2026-05-15 |
| [#42749](https://github.com/vllm-project/vllm/pull/42749) | [Model][Hardware][AMD]: Part 1/2 -> Enable e2e QK Norm + RoP... | @jhu960213 | open | 2026-05-15 | 2026-05-15 |
| [#42754](https://github.com/vllm-project/vllm/pull/42754) | [Bugfix] Add deepseek_v32 to Quark dynamic MXFP4 model type ... | @shantipriya-amd | open | 2026-05-15 | 2026-05-15 |
| [#42509](https://github.com/vllm-project/vllm/pull/42509) | [ROCm][MLA] FP8 ASM prefill for AITER dense MLA backend on g... | @maeehart | merged | 2026-05-13 | 2026-05-15 |
| [#37826](https://github.com/vllm-project/vllm/pull/37826) | [ROCm] Widen OAI Triton MoE capability range to include gfx1... | @laudney | merged | 2026-03-22 | 2026-05-15 |
| [#36634](https://github.com/vllm-project/vllm/pull/36634) | fix mtp launch error in vllm-0.17.1-rc, about cuda graph dur... | @flutist | open | 2026-03-10 | 2026-05-15 |
| [#40710](https://github.com/vllm-project/vllm/pull/40710) | [Aiter][ROCm] RMSNormGated+GroupedQuantFP8 fusion | @tpopp | merged | 2026-04-23 | 2026-05-15 |
| [#41293](https://github.com/vllm-project/vllm/pull/41293) | [Bugfix][ROCm] Fix FP8 per-tensor scale rank mismatch causin... | @nehmathe2 | open | 2026-04-29 | 2026-05-15 |
| [#39192](https://github.com/vllm-project/vllm/pull/39192) | [ROCm] Fix shuffled KV-cache writes for hybrid attention lay... | @tuukkjs | open | 2026-04-07 | 2026-05-15 |
| [#41813](https://github.com/vllm-project/vllm/pull/41813) | Route TorchAO and LLM-Compressor Quantized Inference through... | @aadwived | open | 2026-05-06 | 2026-05-15 |
| [#42736](https://github.com/vllm-project/vllm/pull/42736) | [Kernel][Test] Make test_mamba_ssm_ssd dual-HW (CUDA + XPU) | @adobrzyn | draft | 2026-05-15 | 2026-05-15 |
| [#39668](https://github.com/vllm-project/vllm/pull/39668) | INT4 per-token-head KV cache + kv_dequant dispatch scaffold | @lesj0610 | draft | 2026-04-13 | 2026-05-15 |
| [#42048](https://github.com/vllm-project/vllm/pull/42048) | [Performance] Bypass vllm_ir custom op wrap when only native... | @AjAnubolu | open | 2026-05-08 | 2026-05-15 |
| [#39578](https://github.com/vllm-project/vllm/pull/39578) | Test mi300 | @dhonnappa-amd | open | 2026-04-11 | 2026-05-15 |
| [#37495](https://github.com/vllm-project/vllm/pull/37495) | [ROCm] Add VLLM_ROCM_W8A8_TRITON_MAX_M env var for CK/Triton... | @rbrugaro-amd | draft | 2026-03-18 | 2026-05-15 |
| [#37134](https://github.com/vllm-project/vllm/pull/37134) | [Hardware] replace torch.cuda.Stream with torch.Stream | @jikunshang | open | 2026-03-16 | 2026-05-15 |
| [#42726](https://github.com/vllm-project/vllm/pull/42726) | [ZenCPU] Add zencpu Platform Runtime Logging and Docs | @amd-lalithnc | open | 2026-05-15 | 2026-05-15 |
| [#42604](https://github.com/vllm-project/vllm/pull/42604) | DeepSeekV4-Pro enable cuda graph full and piecewise mode | @bobofang11235 | merged | 2026-05-14 | 2026-05-15 |
| [#42062](https://github.com/vllm-project/vllm/pull/42062) | [ROCm] Enable gluon paged MQA logits on gfx950 (MI355X) | @frida-andersson | merged | 2026-05-08 | 2026-05-15 |
| [#39498](https://github.com/vllm-project/vllm/pull/39498) | [Bugfix] Add deepseek_v32 to Quark dynamic MXFP4 model type ... | @shantipriya-amd | open | 2026-04-10 | 2026-05-15 |
| [#42711](https://github.com/vllm-project/vllm/pull/42711) | Fix : crash in DeepSeek V4 _forward_rocm due to stale ffn_no... | @weizhoublue | open | 2026-05-15 | 2026-05-15 |
| [#42373](https://github.com/vllm-project/vllm/pull/42373) | fix: MoE model using shared routed experts crashes on AMD GP... | @weizhoublue | open | 2026-05-12 | 2026-05-15 |
| [#40119](https://github.com/vllm-project/vllm/pull/40119) |  [CPU][RISC-V] Add RVV-optimized attention kernels for RISC-... | @lyd1992 | merged | 2026-04-17 | 2026-05-15 |
| [#38476](https://github.com/vllm-project/vllm/pull/38476) | [Feature] TRITON_MLA_SPARSE backend for SM8x/11x/12x DSA Spa... | @haosdent | open | 2026-03-29 | 2026-05-15 |
| [#41812](https://github.com/vllm-project/vllm/pull/41812) | [ROCm][DSv4] implement flash sparse mla with triton kernels | @whx-sjtu | merged | 2026-05-06 | 2026-05-15 |
| [#40426](https://github.com/vllm-project/vllm/pull/40426) | [ROCM] [FEAT] Integrate Aiter hipBLASLt GEMM online tuning | @hanlin12-AMD | open | 2026-04-21 | 2026-05-15 |
| [#42150](https://github.com/vllm-project/vllm/pull/42150) | Bump llguidance to 1.7 | @ricky-chaoju | merged | 2026-05-09 | 2026-05-15 |
| [#39604](https://github.com/vllm-project/vllm/pull/39604) | [Quantization] [Refactor] Create special "GptOssMxfp4MoeMeth... | @zyongye | merged | 2026-04-12 | 2026-05-15 |
| [#39716](https://github.com/vllm-project/vllm/pull/39716) | Test mi300 2 | @dhonnappa-amd | open | 2026-04-13 | 2026-05-14 |
| [#37390](https://github.com/vllm-project/vllm/pull/37390) | Fix Quark OCP-MX W4A6 support: dequant dtype + apply_weights | @vecheruk-amd | open | 2026-03-18 | 2026-05-14 |
| [#36422](https://github.com/vllm-project/vllm/pull/36422) | [ROCm][Bugfix] Fix MXFP4 MoE emulate fallback logic on MX-ca... | @ChuanLi1101 | open | 2026-03-08 | 2026-05-14 |
| [#41294](https://github.com/vllm-project/vllm/pull/41294) | [ROCm][CI] Fix and stabilize EAGLE3 acceptance tests | @AndreasKaratzas | open | 2026-04-29 | 2026-05-14 |
| [#40697](https://github.com/vllm-project/vllm/pull/40697) | [ROCm][Kimi-Linear] Wire FlyDSL gated delta rule decode kern... | @ChuanLi1101 | draft | 2026-04-23 | 2026-05-14 |
| [#32623](https://github.com/vllm-project/vllm/pull/32623) | [Attention] Abstract the MLA prefill backends and eliminate ... | @MatthewBonanni | merged | 2026-01-19 | 2026-05-14 |
| [#42640](https://github.com/vllm-project/vllm/pull/42640) | linear: add CDNA-tuned W4A16 linear kernel  | @Arkar-Hema | open | 2026-05-14 | 2026-05-14 |
| [#39778](https://github.com/vllm-project/vllm/pull/39778) | [Quantization][Autoround][Toolkit] Add W4A16 Support | @Zhenzhong1 | merged | 2026-04-14 | 2026-05-14 |
| [#40453](https://github.com/vllm-project/vllm/pull/40453) | Update Dockerfile.rocm for AINIC & Thor NIC | @haic0 | merged | 2026-04-21 | 2026-05-14 |
| [#40857](https://github.com/vllm-project/vllm/pull/40857) | [CI][AMD][BugFix] Prevent triton compiler error when running... | @rasmith | merged | 2026-04-25 | 2026-05-14 |
| [#42126](https://github.com/vllm-project/vllm/pull/42126) | [CI][AMD] Skip tests where models have problems or fails on ... | @rasmith | merged | 2026-05-09 | 2026-05-14 |
| [#42602](https://github.com/vllm-project/vllm/pull/42602) | [Compile][ROCm][MiniMax-M2] Enable MiniMaxQKNormPass on ROCm... | @akii96 | open | 2026-05-14 | 2026-05-14 |
| [#42098](https://github.com/vllm-project/vllm/pull/42098) | Use hidden_pad and intermediate_pad from vLLM #34301 | @rebklee | merged | 2026-05-08 | 2026-05-14 |
| [#42104](https://github.com/vllm-project/vllm/pull/42104) | [CI] set max transformers version for skywork model | @divakar-amd | merged | 2026-05-08 | 2026-05-13 |
| [#42563](https://github.com/vllm-project/vllm/pull/42563) | [CI] Fix pre-commit issue | @yewentao256 | merged | 2026-05-13 | 2026-05-13 |
| [#35859](https://github.com/vllm-project/vllm/pull/35859) | [Quark] Support loading Quark NVFP4 checkpoints in vLLM | @fxmarty-amd | merged | 2026-03-03 | 2026-05-13 |
| [#39527](https://github.com/vllm-project/vllm/pull/39527) | [Model][Hardware][AMD][Kernel]: Enable e2e QK Norm + RoPE + ... | @jhu960213 | open | 2026-04-10 | 2026-05-13 |
| [#41572](https://github.com/vllm-project/vllm/pull/41572) | [ROCm][CI] Skip ROCm batch invalid-input test pending torch ... | @AndreasKaratzas | merged | 2026-05-03 | 2026-05-13 |
| [#41394](https://github.com/vllm-project/vllm/pull/41394) | [Kernel][ROCm] Native W4A16 kernel for AMD RDNA3 (gfx1100) —... | @JartX | open | 2026-04-30 | 2026-05-13 |
| [#41946](https://github.com/vllm-project/vllm/pull/41946) | [Bugfix] [ROCm] [DSV4] [Perf] Add aiter mhc support | @tjtanaa | merged | 2026-05-07 | 2026-05-13 |
| [#42326](https://github.com/vllm-project/vllm/pull/42326) | [AMD] skip machete tests for rocm | @hissu-hyvarinen | merged | 2026-05-11 | 2026-05-13 |
| [#41892](https://github.com/vllm-project/vllm/pull/41892) | [Bugfix][Quark] Fix W8A8 INT8 garbage outputs on Step-3.5-Fl... | @JoursBleu | merged | 2026-05-07 | 2026-05-13 |
| [#42339](https://github.com/vllm-project/vllm/pull/42339) | [5/n] Migrate CUTLASS MLA, hadamard, awq, allspark and DSV3 ... | @cleonard530 | merged | 2026-05-11 | 2026-05-13 |
| [#42129](https://github.com/vllm-project/vllm/pull/42129) | [Inductor] Fast-path Inductor fallback for vllm::*/vllm_aite... | @okorzh-amd | open | 2026-05-09 | 2026-05-13 |
| [#34726](https://github.com/vllm-project/vllm/pull/34726) | [ROCm] Enable DBO (Dynamic Batch Optimization) on ROCm | @raviguptaamd | merged | 2026-02-17 | 2026-05-12 |
| [#41136](https://github.com/vllm-project/vllm/pull/41136) | [ROCm] DeepSeekV4-Flash-Base model enablement on ROCm with t... | @lcskrishna | open | 2026-04-28 | 2026-05-12 |
| [#36517](https://github.com/vllm-project/vllm/pull/36517) | Add VLLM_USE_SPINLOOP_EXT to use more efficient busy polling | @pschlan-amd | merged | 2026-03-09 | 2026-05-12 |
| [#37993](https://github.com/vllm-project/vllm/pull/37993) | [ROCm] Fall back to native rotary embedding when flash_attn ... | @xuebwang-amd | open | 2026-03-24 | 2026-05-12 |
| [#42070](https://github.com/vllm-project/vllm/pull/42070) | [Bugfix] Remove nested torch.compile in GDN rearrange_mixed_... | @tdoublep | merged | 2026-05-08 | 2026-05-12 |
| [#39856](https://github.com/vllm-project/vllm/pull/39856) | [XPU] update dp rank w/o env-var isolation | @zhenwei-intel | merged | 2026-04-15 | 2026-05-12 |
| [#41713](https://github.com/vllm-project/vllm/pull/41713) | Eliminate redundant MoE buffer copies in AITER fused experts... | @amd-mghanimi | merged | 2026-05-05 | 2026-05-11 |
| [#41877](https://github.com/vllm-project/vllm/pull/41877) | [CI] Add tests/parser to CI coverage | @sfeng33 | merged | 2026-05-06 | 2026-05-11 |
| [#41825](https://github.com/vllm-project/vllm/pull/41825) | [ROCm][Perf] Fix RMSNorm+Quant fusion for gfx950 (non-fnuz) | @frida-andersson | merged | 2026-05-06 | 2026-05-11 |
| [#41753](https://github.com/vllm-project/vllm/pull/41753) | [ROCm] Add XGMI backend for MoRI Connector | @simondanielsson | open | 2026-05-05 | 2026-05-11 |
| [#41942](https://github.com/vllm-project/vllm/pull/41942) | [ROCm] Clean up a bit the AITER FA backend | @pschlan-amd | merged | 2026-05-07 | 2026-05-11 |
| [#40392](https://github.com/vllm-project/vllm/pull/40392) | [Performance][DSR1]: Fused RoPE+KVCache+q_concat for MLA | @Rohan138 | merged | 2026-04-20 | 2026-05-11 |
| [#26807](https://github.com/vllm-project/vllm/pull/26807) | [V1][Hybrid] GatedDeltaNet Automatic Prefix Caching (`all`-m... | @simondanielsson | open | 2025-10-14 | 2026-05-11 |
| [#41756](https://github.com/vllm-project/vllm/pull/41756) | Fix hipErrorCapturedEvent on RoCM when using LoRA with cuda ... | @Nero10578 | open | 2026-05-05 | 2026-05-11 |
| [#41806](https://github.com/vllm-project/vllm/pull/41806) | fix nixl side-channel host selection | @shaharmor98 | merged | 2026-05-06 | 2026-05-11 |
| [#42266](https://github.com/vllm-project/vllm/pull/42266) | [CI/Build] Reduce LoRA model tests.  | @jeejeelee | merged | 2026-05-11 | 2026-05-11 |
| [#41119](https://github.com/vllm-project/vllm/pull/41119) | [ROCm][Bugfix]: dynamically align BLOCK_DMODEL with Lv in ML... | @vllmellm | merged | 2026-04-28 | 2026-05-11 |
| [#42251](https://github.com/vllm-project/vllm/pull/42251) | [Perf] Auto-compile trivial CustomOp fallbacks to complete G... | @Ray-RP | open | 2026-05-10 | 2026-05-11 |
| [#40246](https://github.com/vllm-project/vllm/pull/40246) | [torch.compile] refactor config hashing through compile_fact... | @WorldExplored | open | 2026-04-18 | 2026-05-10 |
| [#34816](https://github.com/vllm-project/vllm/pull/34816) | [Bugfix] Kill orphan EngineCore/WorkerProc via prctl(PR_SET_... | @wojciech-wais | open | 2026-02-18 | 2026-05-09 |
| [#40380](https://github.com/vllm-project/vllm/pull/40380) | Require C++20 for compatibility with PyTorch | @r-barnes | merged | 2026-04-20 | 2026-05-09 |
| [#41451](https://github.com/vllm-project/vllm/pull/41451) | [ROCm][Deepseekv4] DeepseekV4 Mi300 support  | @ganyi1996ppo | draft | 2026-05-01 | 2026-05-09 |
| [#41802](https://github.com/vllm-project/vllm/pull/41802) | use HIP_VERSION variables to guard against duplicate atomicA... | @pmaybank | merged | 2026-05-06 | 2026-05-08 |
| [#39001](https://github.com/vllm-project/vllm/pull/39001) | [ROCm] Support unlimited sequence lengths via multi-pass red... | @ekuznetsov139 | open | 2026-04-04 | 2026-05-08 |
| [#39280](https://github.com/vllm-project/vllm/pull/39280) | [ROCm][Perf] Add Fused Shared Expert (FSE) support for Qwen3... | @nholmber | merged | 2026-04-08 | 2026-05-08 |
| [#40711](https://github.com/vllm-project/vllm/pull/40711) | [Aiter][ROCm] gdn_linear_attn kernel fusion | @tpopp | merged | 2026-04-23 | 2026-05-08 |
| [#41835](https://github.com/vllm-project/vllm/pull/41835) | [ROCm][DeepSeek] Enable V3.2 TP4 AITER MLA | @akii96 | merged | 2026-05-06 | 2026-05-07 |
| [#34741](https://github.com/vllm-project/vllm/pull/34741) | [ROCm] Enable FP8 KV-cache and relax constraints for RDNA4 c... | @laudney | open | 2026-02-17 | 2026-05-07 |
| [#41840](https://github.com/vllm-project/vllm/pull/41840) | [ROCm][CI] Remove `TORCH_NCCL_BLOCKING_WAIT=1` After Bugfix ... | @micah-wil | merged | 2026-05-06 | 2026-05-07 |
| [#41978](https://github.com/vllm-project/vllm/pull/41978) | [ROCm] Add RDNA support to wvSplitKrc skinny GEMM | @wjabbour | draft | 2026-05-07 | 2026-05-07 |
| [#41181](https://github.com/vllm-project/vllm/pull/41181) | [Bugfix] Fix `RuntimeError: Already borrowed` by adding thre... | @yzong-rh | merged | 2026-04-29 | 2026-05-07 |
| [#40687](https://github.com/vllm-project/vllm/pull/40687) | [ROCm][Perf] Support N=5 in wvSplitK skinny GEMM kernels for... | @mgehre-amd | open | 2026-04-23 | 2026-05-06 |
| [#41386](https://github.com/vllm-project/vllm/pull/41386) | [ROCm] ROCm7.2.2 + profiler fix + AITER 0.1.12.post2 | @gshtras | merged | 2026-04-30 | 2026-05-04 |
| [#36823](https://github.com/vllm-project/vllm/pull/36823) | [vLLM IR] 2/N fused_add_rms_norm and maybe_inplace overload | @ProExpertProg | merged | 2026-03-11 | 2026-05-04 |
| [#38479](https://github.com/vllm-project/vllm/pull/38479) | [Attention Backend] TurboQuant: 2-bit KV cache compression w... | @vibhavagarwal5 | merged | 2026-03-29 | 2026-04-29 |
| [#39801](https://github.com/vllm-project/vllm/pull/39801) | [ROCm][CI] Add missing quantization methods and fix online q... | @AndreasKaratzas | merged | 2026-04-14 | 2026-04-28 |
| [#40037](https://github.com/vllm-project/vllm/pull/40037) | [ROCm] Add gfx1102/gfx1103 support | @mgehre-amd | merged | 2026-04-16 | 2026-04-23 |
| [#40413](https://github.com/vllm-project/vllm/pull/40413) | [Perf] Optimize batch invariant with fused rms norm, 2.1% E2... | @yewentao256 | merged | 2026-04-20 | 2026-04-21 |
| [#39242](https://github.com/vllm-project/vllm/pull/39242) | [ROCm] Add MLA dual RMS norm fusion (Q, KV) pass for DeepSee... | @rbrugaro-amd | merged | 2026-04-07 | 2026-04-20 |
| [#36276](https://github.com/vllm-project/vllm/pull/36276) | [EPLB] Add nixl-based eplb communicator | @ilmarkov | merged | 2026-03-06 | 2026-04-20 |
| [#39977](https://github.com/vllm-project/vllm/pull/39977) | [XPU] [torch.compile] Skipping CUDA graph memory estimation ... | @chaojun-zhang | merged | 2026-04-16 | 2026-04-20 |
| [#38396](https://github.com/vllm-project/vllm/pull/38396) | [AMD][CI] Update DeepEP branch | @rjrock | merged | 2026-03-27 | 2026-04-17 |
| [#39217](https://github.com/vllm-project/vllm/pull/39217) | [Mistral Grammar] Fix tool and reasoning parsing | @juliendenize | merged | 2026-04-07 | 2026-04-16 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-05-16T09:18:47Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#25406](https://github.com/sgl-project/sglang/pull/25406) | [MoE] Decouple Mega MoE from DeepEP backend | @yhyang201 | merged | 2026-05-15 | 2026-05-16 |
| [#23760](https://github.com/sgl-project/sglang/pull/23760) | [MoE] Unify DeepEPMoE+MoriEPMoE through AITER MoeRunner pre/... | @ch-wan | open | 2026-04-26 | 2026-05-16 |
| [#25463](https://github.com/sgl-project/sglang/pull/25463) | [ROCm] Eliminate redundant contiguous copy in MLA attention ... | @rbrugaro-amd | open | 2026-05-16 | 2026-05-16 |
| [#25375](https://github.com/sgl-project/sglang/pull/25375) | amd/deepseek_v4 integration 26/N rmsnorm_quant fusion for wq... | @1am9trash | open | 2026-05-15 | 2026-05-16 |
| [#25047](https://github.com/sgl-project/sglang/pull/25047) | [AMD] Forward-merge cache-dit==1.3.0 pin onto amd/deepseek_v... | @michaelzhang-ai | closed | 2026-05-12 | 2026-05-16 |
| [#25415](https://github.com/sgl-project/sglang/pull/25415) | fix: MUSA integrated GPU memory overwrite, file handle leak,... | @Kevin-Li-2025 | open | 2026-05-15 | 2026-05-16 |
| [#25402](https://github.com/sgl-project/sglang/pull/25402) | amd/deepseek_v4: drop is_v4_compressed short-circuit so V4 u... | @XinyuJiangCMU | open | 2026-05-15 | 2026-05-16 |
| [#24053](https://github.com/sgl-project/sglang/pull/24053) | [diffusion] attention: Fix USP attention when using replicat... | @avjves | open | 2026-04-29 | 2026-05-16 |
| [#25451](https://github.com/sgl-project/sglang/pull/25451) | Upgrade transformers to 5.8.1 | @JustinTong0323 | open | 2026-05-16 | 2026-05-16 |
| [#25450](https://github.com/sgl-project/sglang/pull/25450) | Fix invalid suite name in test_multi_detokenizer | @fzyzcjy | merged | 2026-05-16 | 2026-05-16 |
| [#25420](https://github.com/sgl-project/sglang/pull/25420) | [CI] Rename basic CI `stage-a/b/c` -> `base-a/b/c` for symme... | @hnyls2002 | merged | 2026-05-15 | 2026-05-16 |
| [#25426](https://github.com/sgl-project/sglang/pull/25426) | [AMD] greedy LM-head AG+argmax shortcut with EAGLE compatibi... | @hubertlu-tw | draft | 2026-05-16 | 2026-05-16 |
| [#25093](https://github.com/sgl-project/sglang/pull/25093) | [AMD] Enable AITER custom all-gather on ROCm | @hubertlu-tw | open | 2026-05-12 | 2026-05-15 |
| [#25094](https://github.com/sgl-project/sglang/pull/25094) | [AMD] Enable Mori XGMI for Single-Node PD Disaggregation | @clintg6 | open | 2026-05-12 | 2026-05-15 |
| [#25394](https://github.com/sgl-project/sglang/pull/25394) | [CI] slash handler: lookup `runs_on` from `runner_configs.ym... | @hnyls2002 | merged | 2026-05-15 | 2026-05-15 |
| [#24909](https://github.com/sgl-project/sglang/pull/24909) | [AMD] Support MXFP4 dense and MoE layer for AMD CDNA3 | @haohui | open | 2026-05-10 | 2026-05-15 |
| [#18005](https://github.com/sgl-project/sglang/pull/18005) | [AMD][MXFP4] Support online MXFP4 quantization of dense and ... | @fxmarty-amd | open | 2026-01-30 | 2026-05-15 |
| [#24659](https://github.com/sgl-project/sglang/pull/24659) | Optimize streaming detokenizer updates | @inkcherry | open | 2026-05-08 | 2026-05-15 |
| [#25390](https://github.com/sgl-project/sglang/pull/25390) | [AMD] Enable shared-experts fusion with new KIMI-K2.5-MXFP4 ... | @sogalin | open | 2026-05-15 | 2026-05-15 |
| [#25353](https://github.com/sgl-project/sglang/pull/25353) | amd/deepseek_v4 integration 25/N enable new compressor path | @RolaoDenthu | merged | 2026-05-15 | 2026-05-15 |
| [#25345](https://github.com/sgl-project/sglang/pull/25345) | [AMD] amd/deepseek_v4 integration 24/N enable fuse_wqkv in R... | @kkHuang-amd | merged | 2026-05-15 | 2026-05-15 |
| [#25251](https://github.com/sgl-project/sglang/pull/25251) | [AMD] amd/deepseek_v4 integration 23/N use aiter greedy_samp... | @yichiche | open | 2026-05-14 | 2026-05-15 |
| [#25245](https://github.com/sgl-project/sglang/pull/25245) | [AMD] amd/deepseek_v4 integration 23/N fused softmax pool Tr... | @yichiche | merged | 2026-05-14 | 2026-05-15 |
| [#25301](https://github.com/sgl-project/sglang/pull/25301) | [AMD] fix moriep oom | @billishyahao | open | 2026-05-14 | 2026-05-15 |
| [#23261](https://github.com/sgl-project/sglang/pull/23261) | [AMD] enable aiter attention backend for non-power 2 rope/no... | @amd-oshkarav | open | 2026-04-20 | 2026-05-15 |
| [#25090](https://github.com/sgl-project/sglang/pull/25090) | [AMD] Support triton backend decode context parallel for Qwe... | @At1a8 | open | 2026-05-12 | 2026-05-15 |
| [#25262](https://github.com/sgl-project/sglang/pull/25262) | [CI] Move test_moriep_small to MI35X 8-GPU suite | @bingxche | draft | 2026-05-14 | 2026-05-15 |
| [#25405](https://github.com/sgl-project/sglang/pull/25405) | [XPU] Add registry mechanism for XPU CI tests | @vshekhawat-hlab | open | 2026-05-15 | 2026-05-15 |
| [#23424](https://github.com/sgl-project/sglang/pull/23424) | [AMD] support new model amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP... | @kkHuang-amd | open | 2026-04-22 | 2026-05-15 |
| [#24975](https://github.com/sgl-project/sglang/pull/24975) | Fix FP8 MoE kernel OOM on non-Hopper GPUs (L20/L40/RTX 4090)... | @flutist | open | 2026-05-11 | 2026-05-15 |
| [#20535](https://github.com/sgl-project/sglang/pull/20535) | [HiCache] Add L2 prefetch-buffer-only memory mode | @vladnosiv | open | 2026-03-13 | 2026-05-15 |
| [#22338](https://github.com/sgl-project/sglang/pull/22338) | :sparkles: [diffusion][npu][quant] Add MXFP4 quantization su... | @TallMessiWu | open | 2026-04-08 | 2026-05-15 |
| [#24541](https://github.com/sgl-project/sglang/pull/24541) | [AMD] feat(attention): pick native vs padded MLA decode head... | @tnguyeng | open | 2026-05-06 | 2026-05-15 |
| [#24933](https://github.com/sgl-project/sglang/pull/24933) | Amd/deepseek v4 rebase main 0509 | @kkHuang-amd | open | 2026-05-11 | 2026-05-15 |
| [#18810](https://github.com/sgl-project/sglang/pull/18810) | [DLLM] Add fused Triton post-process kernel with on-device f... | @YJMSTR | open | 2026-02-13 | 2026-05-15 |
| [#25322](https://github.com/sgl-project/sglang/pull/25322) | Deprecate /rerun-stage; scrub CUDA target_stage infra | @hnyls2002 | merged | 2026-05-15 | 2026-05-15 |
| [#25377](https://github.com/sgl-project/sglang/pull/25377) | [HiCache][AMD] Add MORI-UMBP tiered DRAM + SSD L3 storage ba... | @inkcherry | draft | 2026-05-15 | 2026-05-15 |
| [#22786](https://github.com/sgl-project/sglang/pull/22786) | [AMD][diffusion] Add FlyDSL fused normalization kernels for ... | @yctseng0211 | open | 2026-04-14 | 2026-05-15 |
| [#23927](https://github.com/sgl-project/sglang/pull/23927) | [AMD] Replace fp8 mla with fp8 mha kernel for diffusion mode... | @yichiche | open | 2026-04-28 | 2026-05-15 |
| [#25356](https://github.com/sgl-project/sglang/pull/25356) | [AMD] test(sgl-kernel): seed RNG on ROCm in test_moe_topk_si... | @michaelzhang-ai | open | 2026-05-15 | 2026-05-15 |
| [#25112](https://github.com/sgl-project/sglang/pull/25112) | [AMD] Bump --timeout-per-file 1800->2400 for stage-b-test-1-... | @michaelzhang-ai | merged | 2026-05-13 | 2026-05-15 |
| [#25208](https://github.com/sgl-project/sglang/pull/25208) | [AMD] ci: register 5 framework tests to run on AMD CI | @michaelzhang-ai | open | 2026-05-14 | 2026-05-15 |
| [#25260](https://github.com/sgl-project/sglang/pull/25260) | [AMD][CI] Register Eagle constrained decoding test | @yuychang | open | 2026-05-14 | 2026-05-15 |
| [#25237](https://github.com/sgl-project/sglang/pull/25237) | [AMD] Fix MoE LoRA JIT compilation | @yuychang | open | 2026-05-14 | 2026-05-15 |
| [#25154](https://github.com/sgl-project/sglang/pull/25154) | [AMD] Add AMD ROCm support for HiCache JIT kernel benchmark | @Emmanuel0612 | open | 2026-05-13 | 2026-05-15 |
| [#25326](https://github.com/sgl-project/sglang/pull/25326) | chore: bump sgl-kernel version to 0.4.2.post2 | @sglang-bot | merged | 2026-05-15 | 2026-05-15 |
| [#24725](https://github.com/sgl-project/sglang/pull/24725) | ci: tag-gated nightly migration — foundation + 40 whole-file... | @alisonshao | merged | 2026-05-08 | 2026-05-14 |
| [#21531](https://github.com/sgl-project/sglang/pull/21531) | [JIT Kernel] Migrate dsv3_router_gemm from AOT sgl-kernel to... | @meinie0826 | open | 2026-03-27 | 2026-05-14 |
| [#25297](https://github.com/sgl-project/sglang/pull/25297) | Fix HiCache JIT support for AMD ROCm/HIP platforms | @Emmanuel0612 | draft | 2026-05-14 | 2026-05-14 |
| [#25191](https://github.com/sgl-project/sglang/pull/25191) | [Apple Silicon] [MLX] Auto-detect MLX-format quantization_co... | @jlee5814 | merged | 2026-05-13 | 2026-05-14 |
| [#25296](https://github.com/sgl-project/sglang/pull/25296) | amd/deepseek_v4: register _DeepseekV4ConfigAlias (sync from ... | @XinyuJiangCMU | open | 2026-05-14 | 2026-05-14 |
| [#25295](https://github.com/sgl-project/sglang/pull/25295) | [AMD] Register standalone speculative decoding CI | @yuychang | open | 2026-05-14 | 2026-05-14 |
| [#25097](https://github.com/sgl-project/sglang/pull/25097) | amd/deepseek_v4 integration 21/N Triton fused store cache fo... | @Raiden-Makoto | merged | 2026-05-12 | 2026-05-14 |
| [#24762](https://github.com/sgl-project/sglang/pull/24762) | [AMD] fix(triton-mla): cap max_kv_splits at 256 on gfx942 (K... | @bingxche | open | 2026-05-09 | 2026-05-14 |
| [#25273](https://github.com/sgl-project/sglang/pull/25273) | [Fix] Core dump issue caused by aiter cr in AMD MI30X | @yixionghuo | draft | 2026-05-14 | 2026-05-14 |
| [#25266](https://github.com/sgl-project/sglang/pull/25266) | [AMD][CI] Reorder nightly workflows by model + fix pr-test-a... | @bingxche | draft | 2026-05-14 | 2026-05-14 |
| [#25164](https://github.com/sgl-project/sglang/pull/25164) | amd/deepseek_v4 integration 22/N enable SGLANG_OPT_DPSK_V4_R... | @XinyuJiangCMU | merged | 2026-05-13 | 2026-05-14 |
| [#25210](https://github.com/sgl-project/sglang/pull/25210) | [AMD] Add amd jit resolve token ids bench ci | @Emmanuel0612 | merged | 2026-05-14 | 2026-05-14 |
| [#25209](https://github.com/sgl-project/sglang/pull/25209) | [AMD] Add amd jit clamp position bench ci | @Emmanuel0612 | merged | 2026-05-14 | 2026-05-14 |
| [#25205](https://github.com/sgl-project/sglang/pull/25205) | [AMD]  Auto-fallback NSA indexer to page_size=1 when aiter p... | @yctseng0211 | merged | 2026-05-14 | 2026-05-14 |
| [#24717](https://github.com/sgl-project/sglang/pull/24717) | LFM2: pass has_initial_state to causal_conv1d_fn for prefill | @tugot17 | merged | 2026-05-08 | 2026-05-14 |
| [#22342](https://github.com/sgl-project/sglang/pull/22342) | [AMD] Enable DFLASH speculative decoding on ROCm | @andyluo7 | merged | 2026-04-08 | 2026-05-14 |
| [#25138](https://github.com/sgl-project/sglang/pull/25138) | ci: extract cuda stage actions + runner_config mapping | @hnyls2002 | merged | 2026-05-13 | 2026-05-14 |
| [#24253](https://github.com/sgl-project/sglang/pull/24253) | ci: combine H200 8-GPU warmup steps and surface server log o... | @alisonshao | merged | 2026-05-02 | 2026-05-14 |
| [#24970](https://github.com/sgl-project/sglang/pull/24970) | [FIX]Fix Step3-VL multi-image embedding and local patch spli... | @kousakawang | open | 2026-05-11 | 2026-05-14 |
| [#24816](https://github.com/sgl-project/sglang/pull/24816) | Add FlashInfer SM90 cutlass MXFP4 MoE backend (W4A16) for GP... | @yuan-luo | merged | 2026-05-09 | 2026-05-14 |
| [#21431](https://github.com/sgl-project/sglang/pull/21431) | [Diffusion] [AMD] Online MXFP4 and FP8 Quantization for Mult... | @ColinZ22 | merged | 2026-03-25 | 2026-05-14 |
| [#25197](https://github.com/sgl-project/sglang/pull/25197) | ci: decouple stage and runner for cuda registry | @hnyls2002 | merged | 2026-05-13 | 2026-05-14 |
| [#25001](https://github.com/sgl-project/sglang/pull/25001) | [LoRA] MLA attention LoRA: q_b_proj / kv_b_proj support | @jybsuper | merged | 2026-05-11 | 2026-05-13 |
| [#24084](https://github.com/sgl-project/sglang/pull/24084) | [Bench] extend MMMU answer extractor with explicit-commit pa... | @AgainstEntropy | merged | 2026-04-29 | 2026-05-13 |
| [#24651](https://github.com/sgl-project/sglang/pull/24651) | [AMD] Add fused all-reduce RMSNorm per-group quant for Qwen3... | @hubertlu-tw | open | 2026-05-08 | 2026-05-13 |
| [#17392](https://github.com/sgl-project/sglang/pull/17392) | Add BF16 support to EP-MoE for DeepGEMM | @froststeam | merged | 2026-01-20 | 2026-05-13 |
| [#24907](https://github.com/sgl-project/sglang/pull/24907) | [MLX] Add on-the-fly --quantization mlx_q4 / mlx_q8 for Appl... | @damahua | merged | 2026-05-10 | 2026-05-13 |
| [#24897](https://github.com/sgl-project/sglang/pull/24897) | Port fused SiLU+clamp+FP8 quant from DSV4 dev branch | @yhyang201 | merged | 2026-05-10 | 2026-05-13 |
| [#22371](https://github.com/sgl-project/sglang/pull/22371) | Fix image (random multimodal) dataset token statistics | @amd-bishwoadhikari | open | 2026-04-08 | 2026-05-13 |
| [#24987](https://github.com/sgl-project/sglang/pull/24987) | [AMD] Run jit kernel PR test through run_suite.py register m... | @yctseng0211 | merged | 2026-05-11 | 2026-05-13 |
| [#24125](https://github.com/sgl-project/sglang/pull/24125) | [AMD] Skip redundant CatArrayBatchedCopy in GLM-5 NSA TileLa... | @Jacob0226 | merged | 2026-04-30 | 2026-05-13 |
| [#23562](https://github.com/sgl-project/sglang/pull/23562) | [AMD] Enable preshuffle paged MQA and page_size=64 for NSA i... | @1am9trash | merged | 2026-04-23 | 2026-05-13 |
| [#24148](https://github.com/sgl-project/sglang/pull/24148) | [AMD] Add _skip_rope_for_aiter_fused_mla method and check to... | @amd-mvarjoka | merged | 2026-04-30 | 2026-05-13 |
| [#24879](https://github.com/sgl-project/sglang/pull/24879) | [AMD] support fp8 blockwise quantization combine for mori ep | @billishyahao | merged | 2026-05-10 | 2026-05-13 |
| [#24405](https://github.com/sgl-project/sglang/pull/24405) | [AMD] Eliminate per-layer direct_copy in MLA o_proj input on... | @sogalin | open | 2026-05-05 | 2026-05-13 |
| [#25039](https://github.com/sgl-project/sglang/pull/25039) | [AMD] Disable unittest fail-fast for deepseekv4 perf test | @yctseng0211 | merged | 2026-05-12 | 2026-05-13 |
| [#23608](https://github.com/sgl-project/sglang/pull/23608) | Add AMD support for DeepSeek V4 | @AgainstEntropy | open | 2026-04-24 | 2026-05-13 |
| [#25070](https://github.com/sgl-project/sglang/pull/25070) | amd/deepseek_v4 integration 20/N add swiglu limit with dense... | @1am9trash | merged | 2026-05-12 | 2026-05-13 |
| [#25043](https://github.com/sgl-project/sglang/pull/25043) | amd/deepseek_v4 integration 19/N fuse input_layernorm + FP8 ... | @yichiche | merged | 2026-05-12 | 2026-05-12 |
| [#24990](https://github.com/sgl-project/sglang/pull/24990) | [Test] Add unit tests for srt/mem_cache/hicache_storage.py | @varvelworld | open | 2026-05-11 | 2026-05-12 |
| [#24477](https://github.com/sgl-project/sglang/pull/24477) | [AMD] Fix Quark MXFP4 mapping for Kimi K2.5 | @yuychang | open | 2026-05-06 | 2026-05-12 |
| [#24752](https://github.com/sgl-project/sglang/pull/24752) | [diffusion] hardware: support sage attention backend on MUSA... | @yeahdongcn | merged | 2026-05-09 | 2026-05-12 |
| [#23633](https://github.com/sgl-project/sglang/pull/23633) | [MUSA] Use MUSA-optimized operators in piecewise CUDA graph | @popsiclexu | merged | 2026-04-24 | 2026-05-12 |
| [#23449](https://github.com/sgl-project/sglang/pull/23449) | [Apple Silicon] Add Metal kernel support in sgl-kernel | @yeahdongcn | merged | 2026-04-22 | 2026-05-12 |
| [#24981](https://github.com/sgl-project/sglang/pull/24981) | [AMD] avoid aiter re-installing triton in amd_install_depend... | @bingxche | merged | 2026-05-11 | 2026-05-11 |
| [#24924](https://github.com/sgl-project/sglang/pull/24924) | [AMD] Pin cache-dit==1.3.0 in rocm.Dockerfile + AMD CI insta... | @bingxche | merged | 2026-05-11 | 2026-05-11 |
| [#24586](https://github.com/sgl-project/sglang/pull/24586) | [AMD] Update scripts/ci/amd/ensure_vram_clear.sh | @yctseng0211 | merged | 2026-05-07 | 2026-05-11 |
| [#23388](https://github.com/sgl-project/sglang/pull/23388) | [Speculative][ROCm/MI355X] Enable DFlash speculative decodin... | @zhentaocc | draft | 2026-04-21 | 2026-05-11 |
| [#24799](https://github.com/sgl-project/sglang/pull/24799) | [AMD] Fix DeepSeek import cascade by supporting both pre- an... | @bingxche | merged | 2026-05-09 | 2026-05-11 |
| [#24612](https://github.com/sgl-project/sglang/pull/24612) | [AMD] VRAM cleanup step to AMD nightly test workflows | @yctseng0211 | merged | 2026-05-07 | 2026-05-11 |
| [#18182](https://github.com/sgl-project/sglang/pull/18182) | [AMD][Quantization] Support online FP8 to MXFP4 requantizati... | @fxmarty-amd | open | 2026-02-03 | 2026-05-10 |
| [#17564](https://github.com/sgl-project/sglang/pull/17564) | [AMD] enable compile mode running Deepseek R1 | @mqhc2020 | open | 2026-01-22 | 2026-05-10 |
| [#23654](https://github.com/sgl-project/sglang/pull/23654) | [MUSA][20/N] Support qwen series models | @froststeam | merged | 2026-04-24 | 2026-05-09 |
| [#24680](https://github.com/sgl-project/sglang/pull/24680) | ci(amd): add sgl-kernel-unit-test-8-gpu-amd benchmark smoke ... | @bingxche | draft | 2026-05-08 | 2026-05-08 |
| [#24587](https://github.com/sgl-project/sglang/pull/24587) | [AMD][aiter] Fix cuda_graph_kv_indices OOB under page_size>1 | @xiaobochen-amd | open | 2026-05-07 | 2026-05-08 |
| [#24360](https://github.com/sgl-project/sglang/pull/24360) | [AMD] Replace naive triton RMSNorm with aiter RMSNorm for di... | @yichiche | merged | 2026-05-04 | 2026-05-08 |
| [#22971](https://github.com/sgl-project/sglang/pull/22971) | [AMD][diffusion] Temporal-unfolded batched Conv2D for ROCm V... | @yctseng0211 | merged | 2026-04-16 | 2026-05-08 |
| [#20319](https://github.com/sgl-project/sglang/pull/20319) | [AMD] Support fp8 MLA for diffusion model | @yichiche | merged | 2026-03-11 | 2026-05-08 |
| [#20672](https://github.com/sgl-project/sglang/pull/20672) | [MUSA][17/N] ci: Add MUSA diffusion, sgl-kernel tests, and C... | @johnnycxm | merged | 2026-03-16 | 2026-05-08 |
| [#23882](https://github.com/sgl-project/sglang/pull/23882) | Deepseek V4 | @hnyls2002 | merged | 2026-04-27 | 2026-05-08 |
| [#21388](https://github.com/sgl-project/sglang/pull/21388) | Multi platform Plugin | @Baidu-AIAK | merged | 2026-03-25 | 2026-05-07 |
| [#24005](https://github.com/sgl-project/sglang/pull/24005) | [AMD] Enable dual-stream MoE on ROCm | @inkcherry | merged | 2026-04-29 | 2026-05-07 |
| [#24528](https://github.com/sgl-project/sglang/pull/24528) | WIP: [AMD] Enhance wheel support for ROCm | @akao-amd | draft | 2026-05-06 | 2026-05-06 |
| [#24424](https://github.com/sgl-project/sglang/pull/24424) | amd/deepseek_v4 integration 11/N Compressor element-wise ker... | @1am9trash | merged | 2026-05-05 | 2026-05-06 |
| [#23146](https://github.com/sgl-project/sglang/pull/23146) | [AMD] Enable EAGLE speculative decoding for Qwen3.5 FP8 and ... | @hubertlu-tw | merged | 2026-04-18 | 2026-05-05 |
| [#23581](https://github.com/sgl-project/sglang/pull/23581) | [AMD] Default SGLANG_USE_AITER_AR to false to avoid HIP grap... | @andyluo7 | open | 2026-04-23 | 2026-05-04 |
| [#24355](https://github.com/sgl-project/sglang/pull/24355) | amd/deepseek_v4 integration 10/N optimize mhc performance | @kkHuang-amd | merged | 2026-05-04 | 2026-05-04 |
| [#11052](https://github.com/sgl-project/sglang/pull/11052) | [Ascend] Add Ascend NPU support for sglang.check_env & rewor... | @Alexhaoge | merged | 2025-09-29 | 2026-05-04 |
| [#8909](https://github.com/sgl-project/sglang/pull/8909) | [feat]Ascend NPU Gemma-3-12b and Gemma-3-27b support | @VDV1985 | merged | 2025-08-07 | 2026-05-04 |
| [#22037](https://github.com/sgl-project/sglang/pull/22037) | [AMD][Dockerfile] Multi-stage build for ROCm image to reduce... | @Duyi-Wang | open | 2026-04-03 | 2026-05-04 |
| [#24216](https://github.com/sgl-project/sglang/pull/24216) | [Test] Add OpenAI tokenize serving unit tests | @wenkikikiki | open | 2026-05-01 | 2026-05-03 |
| [#24305](https://github.com/sgl-project/sglang/pull/24305) | test: add OpenAI classify serving unit coverage | @wenkikikiki | open | 2026-05-03 | 2026-05-03 |
| [#24249](https://github.com/sgl-project/sglang/pull/24249) | amd/deepseek_v4 integration 8/N - fuse compress decode 0501 | @RolaoDenthu | merged | 2026-05-01 | 2026-05-02 |
| [#23597](https://github.com/sgl-project/sglang/pull/23597) | [MoE] Add Aiter MoE runner backend and purge aiter.fused_moe... | @ch-wan | merged | 2026-04-24 | 2026-05-01 |
| [#24143](https://github.com/sgl-project/sglang/pull/24143) | amd/deepseek_v4 integration 7/N - topk512transform kernel 04... | @1am9trash | merged | 2026-04-30 | 2026-04-30 |
| [#23062](https://github.com/sgl-project/sglang/pull/23062) | [bugfix]fix(qwen3_5): broadcast per-tensor scale in _make_pa... | @kkyyxhll | merged | 2026-04-17 | 2026-04-30 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-05-16T09:18:51Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-05-15 |
| [#10290](https://github.com/triton-lang/triton/pull/10290) | [AMD] Fix incorrect kWidth selection for MFMA with kPack > 1 | @justinrosner | draft | 2026-05-11 | 2026-05-15 |
| [#10302](https://github.com/triton-lang/triton/pull/10302) | [AMD][GLUON] Expose compute_padded_layout_cdna4 to Python | @xiaohuguo2023 | draft | 2026-05-13 | 2026-05-15 |
| [#10184](https://github.com/triton-lang/triton/pull/10184) | [AMD] Handle padded layout in MemDescReinterpretOp verifier | @yangshuxin | open | 2026-04-30 | 2026-05-15 |
| [#10305](https://github.com/triton-lang/triton/pull/10305) | [AMD] Guard MFMA store layout for small N dimensions | @justinrosner | merged | 2026-05-13 | 2026-05-15 |
| [#10310](https://github.com/triton-lang/triton/pull/10310) | [AMD][BACKEND][TDM] Handle Negative Offsets as Fully Out-of-... | @AlexAUT | merged | 2026-05-14 | 2026-05-15 |
| [#10304](https://github.com/triton-lang/triton/pull/10304) | [AMD] Skip triton-to-gluon translator tests on RDNA3/RDNA4 | @saeid-rostami | merged | 2026-05-13 | 2026-05-13 |
| [#10056](https://github.com/triton-lang/triton/pull/10056) | [AMD][gfx1250] Support warp usage hints in TDM copy | @jungpark-mlir | merged | 2026-04-16 | 2026-05-13 |
| [#10204](https://github.com/triton-lang/triton/pull/10204) | [AMD]Add MoE Gluon Kernel for GFX1250 | @knwng | merged | 2026-05-02 | 2026-05-13 |
| [#9929](https://github.com/triton-lang/triton/pull/9929) | [AMD] Warp-pipeline: back-to-back loop optimization & flat (... | @jungpark-mlir | merged | 2026-04-05 | 2026-05-12 |
| [#10254](https://github.com/triton-lang/triton/pull/10254) | [AMD] Add LLVM flag passthrough for AMDGPU codegen | @raikonenfnu | open | 2026-05-07 | 2026-05-12 |
| [#9260](https://github.com/triton-lang/triton/pull/9260) | [AMD] Disable LLVM vector combine pass | @antiagainst | merged | 2026-01-21 | 2026-05-12 |
| [#10287](https://github.com/triton-lang/triton/pull/10287) | [AMD][BACKEND] Do not truncate TDM strides to 32bit | @AlexAUT | merged | 2026-05-11 | 2026-05-12 |
| [#10276](https://github.com/triton-lang/triton/pull/10276) | [AMD][gfx1250] Support predicate descriptor store for pipeli... | @antiagainst | merged | 2026-05-09 | 2026-05-12 |
| [#10200](https://github.com/triton-lang/triton/pull/10200) | [AMD] Extend chain-dot detection across loop iteration bound... | @raikonenfnu | merged | 2026-05-02 | 2026-05-09 |
| [#10142](https://github.com/triton-lang/triton/pull/10142) | [AMD] Create TargetFeatures for architectural checks | @antiagainst | merged | 2026-04-27 | 2026-05-09 |
| [#10272](https://github.com/triton-lang/triton/pull/10272) | [AMD] Support predicate descriptor load when pipelining | @antiagainst | merged | 2026-05-08 | 2026-05-08 |
| [#10225](https://github.com/triton-lang/triton/pull/10225) | [AMD][gfx1250] Add `update_tensor_descriptor` op | @zhanglx13 | merged | 2026-05-05 | 2026-05-08 |
| [#9662](https://github.com/triton-lang/triton/pull/9662) | [AMD][LAYOUTS] Refine optimal swizzling for wavefront64 | @amd-jianli12 | merged | 2026-03-06 | 2026-05-07 |
| [#10216](https://github.com/triton-lang/triton/pull/10216) | [AMD] Ignore tf32 precision for fp64 mfma dots | @draganmladjenovic | merged | 2026-05-04 | 2026-05-07 |
| [#10259](https://github.com/triton-lang/triton/pull/10259) | [AMD][NFC] Refactor lowerInst to a function, cleanup of Tile... | @nzaghen | merged | 2026-05-07 | 2026-05-07 |
| [#9886](https://github.com/triton-lang/triton/pull/9886) | [AMD] Enable f32 WMMA for AccelerateMatmul (#470) | @ravil-mobile | merged | 2026-03-30 | 2026-05-07 |
| [#10253](https://github.com/triton-lang/triton/pull/10253) | [AMD][gluon] Accept boolean predicates in tdm load/gather | @peterbell10 | merged | 2026-05-06 | 2026-05-07 |
| [#10224](https://github.com/triton-lang/triton/pull/10224) | [AMD][GFX1250][FA-BF16] Bug fix: Reorder TDM in Prologue to ... | @cagrikymk | merged | 2026-05-05 | 2026-05-07 |
| [#10230](https://github.com/triton-lang/triton/pull/10230) | [AMD][gfx1250] Combine redundant amdgpu.async_tdm_wait ops | @jerryyin | merged | 2026-05-05 | 2026-05-06 |
| [#10194](https://github.com/triton-lang/triton/pull/10194) | [AMD] Fixing mi350 BlockPingpong update waits | @jerryyin | merged | 2026-05-01 | 2026-05-05 |
| [#10222](https://github.com/triton-lang/triton/pull/10222) | [AMD][gfx1250] Add transposed support for 32x16 scaled WMMA | @sriakrish | merged | 2026-05-05 | 2026-05-05 |
| [#10215](https://github.com/triton-lang/triton/pull/10215) | [AMD][gfx1250] Drop ttg.async_commit_group from TDM async ch... | @jerryyin | merged | 2026-05-04 | 2026-05-05 |
| [#10208](https://github.com/triton-lang/triton/pull/10208) | [AMD][gfx1250] Explicitly propagate NaN for MXFP attn exampl... | @antiagainst | merged | 2026-05-03 | 2026-05-04 |
| [#10207](https://github.com/triton-lang/triton/pull/10207) | [AMD][gfx1250] Update stale tests and examples | @antiagainst | merged | 2026-05-03 | 2026-05-04 |
| [#10185](https://github.com/triton-lang/triton/pull/10185) | [AMD] Enable IN_THREAD_TRANSPOSE to GFX1201 by default  | @skysnow2001 | merged | 2026-04-30 | 2026-05-01 |
| [#10193](https://github.com/triton-lang/triton/pull/10193) | [AMD] Add v_pk_{mul,add,sub}_bf16 conversion and fix sqrt de... | @FrederickVu | merged | 2026-05-01 | 2026-05-01 |
| [#9883](https://github.com/triton-lang/triton/pull/9883) | [AMD][gfx9] Use asyncmark/wait_asyncmark for CDNA3/CDNA4 buf... | @zhanglx13 | merged | 2026-03-30 | 2026-05-01 |
| [#10178](https://github.com/triton-lang/triton/pull/10178) | [AMD][gfx1250] Fix f32 to fp8*fnuz conversion and test skips | @antiagainst | merged | 2026-04-30 | 2026-04-30 |
| [#10172](https://github.com/triton-lang/triton/pull/10172) | [AMD][TDM] Pipeline tt.descriptor_gather through the TDM asy... | @jerryyin | merged | 2026-04-29 | 2026-04-30 |
| [#10154](https://github.com/triton-lang/triton/pull/10154) | [WIP][AMD][Tests] Move part of ISA checks to aggregate funct... | @alefimov-amd | open | 2026-04-28 | 2026-04-29 |
| [#10133](https://github.com/triton-lang/triton/pull/10133) | [AMD] Support probing versioned runtime dylib | @antiagainst | draft | 2026-04-25 | 2026-04-25 |
| [#10020](https://github.com/triton-lang/triton/pull/10020) | [AMD][DRAFT] PC Sampling, wave stall reasonings | @ZelboK | draft | 2026-04-13 | 2026-04-13 |
| [#9898](https://github.com/triton-lang/triton/pull/9898) | [AMD] Reduce VGPR pressure for 4-stage chained dot schedule | @nithinsubbiah | open | 2026-04-02 | 2026-04-10 |
| [#9891](https://github.com/triton-lang/triton/pull/9891) | [AMD] Fix CanonicalizePointers to handle ptr mergepoints wit... | @karthik-man | draft | 2026-03-31 | 2026-04-02 |
| [#9860](https://github.com/triton-lang/triton/pull/9860) | [AMD] Support per-function PID bounds on TritonIntegerRangeA... | @patrick-toulme | open | 2026-03-26 | 2026-03-30 |
| [#7756](https://github.com/triton-lang/triton/pull/7756) | [AMD] Added initial support for mxfp6 data type | @ravil-mobile | draft | 2025-08-04 | 2026-03-26 |
| [#9562](https://github.com/triton-lang/triton/pull/9562) | Add maxnreg support for ROCm/AMD backend | @fsx950223 | open | 2026-02-25 | 2026-02-27 |
| [#9533](https://github.com/triton-lang/triton/pull/9533) | [AMD] Update default to `block_m=16` in `make_default_opt_fl... | @micah-wil | draft | 2026-02-20 | 2026-02-20 |
| [#9195](https://github.com/triton-lang/triton/pull/9195) | [AMD][mxfp4] ttg::Fp4ToFpOp add support for FP4 upcast to FP... | @jwu10003 | draft | 2026-01-12 | 2026-02-01 |
| [#9292](https://github.com/triton-lang/triton/pull/9292) | [AMD] Fixing WMMA.f32 conversion | @ravil-mobile | draft | 2026-01-23 | 2026-01-23 |
| [#9113](https://github.com/triton-lang/triton/pull/9113) | [AMD] Use fine-grained lgkmcnt for better compute-memory ove... | @vivienfanghuagood | draft | 2025-12-25 | 2025-12-25 |
| [#8792](https://github.com/triton-lang/triton/pull/8792) | [AMD] Refactor kWidth Assignment | @christopherpriebe | draft | 2025-11-21 | 2025-12-11 |
| [#8894](https://github.com/triton-lang/triton/pull/8894) | [AMD] refactor proton to use rocprofiler-sdk and deprecate r... | @ZelboK | draft | 2025-12-03 | 2025-12-03 |
| [#8702](https://github.com/triton-lang/triton/pull/8702) | [AMD]: intra warp atomic_add experiment | @xiaohuguo2023 | draft | 2025-11-12 | 2025-11-12 |
| [#8198](https://github.com/triton-lang/triton/pull/8198) | [AMD][Draft] Fix make test failure in AMD backend | @jwu10003 | draft | 2025-09-16 | 2025-11-10 |
| [#8500](https://github.com/triton-lang/triton/pull/8500) | [AMD][Draft] Optimize reduce waves layout | @Liang-jianhao97 | draft | 2025-10-21 | 2025-10-29 |
| [#8449](https://github.com/triton-lang/triton/pull/8449) | [AMD][Draft] Eliminate redundant matmul by adjusting HeadDot... | @the-strawhat | open | 2025-10-16 | 2025-10-16 |
| [#8450](https://github.com/triton-lang/triton/pull/8450) | [AMD][Draft] Implement implicit layout conversion for DotOp ... | @the-strawhat | open | 2025-10-16 | 2025-10-16 |
| [#8304](https://github.com/triton-lang/triton/pull/8304) | [AMD] Support float8_e5m2 in tutorials/03-matrix-multiplicat... | @matthiasdiener | open | 2025-09-26 | 2025-10-07 |
| [#7616](https://github.com/triton-lang/triton/pull/7616) | [AMD] Enable global_load_tr_b128 on gfx12 | @ptrojahn | draft | 2025-07-23 | 2025-08-01 |
| [#7721](https://github.com/triton-lang/triton/pull/7721) | [WIP] [AMD] Investigate custom epilogue peeling | @PMylon | draft | 2025-07-31 | 2025-08-01 |
| [#6714](https://github.com/triton-lang/triton/pull/6714) | [DRAFT][AMD][Backend] Enable 2:4 Structured Sparsity for Tri... | @SamGinzburg | draft | 2025-05-05 | 2025-06-13 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-05-16T09:18:54Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4891](https://github.com/ROCm/AMDMIGraphX/pull/4891) | [AIMIGRAPHX-885] Add find_concat_same_input matcher | @TedThemistokleous | open | 2026-05-16 | 2026-05-16 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | open | 2026-03-04 | 2026-05-16 |
| [#4770](https://github.com/ROCm/AMDMIGraphX/pull/4770) | Adding compilation mode | @pnikolic-amd | open | 2026-04-09 | 2026-05-16 |
| [#4831](https://github.com/ROCm/AMDMIGraphX/pull/4831) | Addition of MLSS initial kernels for GFX1201 | @Zhaeong | open | 2026-04-29 | 2026-05-16 |
| [#4880](https://github.com/ROCm/AMDMIGraphX/pull/4880) | Add dynamic shape support for TopK | @klin2024 | open | 2026-05-13 | 2026-05-16 |
| [#4746](https://github.com/ROCm/AMDMIGraphX/pull/4746) | Handle more cases for global pooling | @pfultz2 | open | 2026-04-07 | 2026-05-16 |
| [#4890](https://github.com/ROCm/AMDMIGraphX/pull/4890) | Add picked variant | @pfultz2 | open | 2026-05-15 | 2026-05-16 |
| [#4795](https://github.com/ROCm/AMDMIGraphX/pull/4795) | [AIMIGRAPHX-828] Cross Compile Pt 2: add env variable to ena... | @kahmed10 | open | 2026-04-17 | 2026-05-16 |
| [#4881](https://github.com/ROCm/AMDMIGraphX/pull/4881) | Sym reduce ops | @shivadbhavsar | open | 2026-05-13 | 2026-05-16 |
| [#4801](https://github.com/ROCm/AMDMIGraphX/pull/4801) | Add md5 sum function | @pfultz2 | open | 2026-04-20 | 2026-05-16 |
| [#4817](https://github.com/ROCm/AMDMIGraphX/pull/4817) | Enable static build of migraphx | @pfultz2 | open | 2026-04-23 | 2026-05-15 |
| [#4701](https://github.com/ROCm/AMDMIGraphX/pull/4701) | Netron output update - use protobuff, debug symbols | @CharlieL7 | open | 2026-03-24 | 2026-05-15 |
| [#4876](https://github.com/ROCm/AMDMIGraphX/pull/4876) | Changes to enable benchmarking mxr files using a Python scri... | @ahsan-ca | open | 2026-05-12 | 2026-05-15 |
| [#4847](https://github.com/ROCm/AMDMIGraphX/pull/4847) | Use a wrapper function for github status in jenkins | @pfultz2 | open | 2026-05-06 | 2026-05-15 |
| [#4751](https://github.com/ROCm/AMDMIGraphX/pull/4751) | Add missing tests and fixes from 4647 | @pfultz2 | open | 2026-04-08 | 2026-05-15 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | draft | 2026-04-22 | 2026-05-15 |
| [#4832](https://github.com/ROCm/AMDMIGraphX/pull/4832) | Sym reshapes | @shivadbhavsar | draft | 2026-04-29 | 2026-05-15 |
| [#4886](https://github.com/ROCm/AMDMIGraphX/pull/4886) | NOT TO BE MERGED: Python script to benchmark mxr files | @ahsan-ca | open | 2026-05-15 | 2026-05-15 |
| [#4888](https://github.com/ROCm/AMDMIGraphX/pull/4888) | Move UseNamedLogicOperator cppcheck rule to addon | @pfultz2 | open | 2026-05-15 | 2026-05-15 |
| [#4850](https://github.com/ROCm/AMDMIGraphX/pull/4850) | [AIMIGRAPHX-1003] Add warnings for dim and value not set | @eddieliao | open | 2026-05-06 | 2026-05-15 |
| [#4882](https://github.com/ROCm/AMDMIGraphX/pull/4882) | autotune using env variables | @aarushjain29 | open | 2026-05-14 | 2026-05-15 |
| [#4775](https://github.com/ROCm/AMDMIGraphX/pull/4775) | [AIMIGRAPHX-885][AIMIGRAPGX-987] Use External Stream Context... | @TedThemistokleous | open | 2026-04-10 | 2026-05-15 |
| [#4725](https://github.com/ROCm/AMDMIGraphX/pull/4725) | [AIMIGRAPHX-885] Add gather_slice_concat matcher | @TedThemistokleous | draft | 2026-03-31 | 2026-05-15 |
| [#4841](https://github.com/ROCm/AMDMIGraphX/pull/4841) | [AIMIGRAPHX-1002] Match nop reshapes with broadcasted inputs | @eddieliao | open | 2026-05-05 | 2026-05-15 |
| [#4851](https://github.com/ROCm/AMDMIGraphX/pull/4851) | Only throw on the root module when dumping benchmark-mxr fil... | @ahsan-ca | open | 2026-05-06 | 2026-05-15 |
| [#4885](https://github.com/ROCm/AMDMIGraphX/pull/4885) | [#4884] Fold Reduce_*(axes) op when all reduced axes have le... | @itikhono | open | 2026-05-14 | 2026-05-15 |
| [#4860](https://github.com/ROCm/AMDMIGraphX/pull/4860) | Clean up the #include dependencies for the instruction_ref | @apwojcik | open | 2026-05-08 | 2026-05-14 |
| [#4839](https://github.com/ROCm/AMDMIGraphX/pull/4839) | Option to link MIGraphX to MVSC Runtime Library statically o... | @apwojcik | open | 2026-05-04 | 2026-05-14 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | draft | 2025-01-20 | 2026-05-14 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | draft | 2024-09-22 | 2026-05-14 |
| [#4642](https://github.com/ROCm/AMDMIGraphX/pull/4642) | fix jit pooling | @aarushjain29 | draft | 2026-02-27 | 2026-05-14 |
| [#4571](https://github.com/ROCm/AMDMIGraphX/pull/4571) |  ONNX: Added support for `SplitToSequence` and `ConcatFromSe... | @RajBarshikar | draft | 2026-01-26 | 2026-05-14 |
| [#4554](https://github.com/ROCm/AMDMIGraphX/pull/4554) | Add deref op | @pfultz2 | draft | 2026-01-19 | 2026-05-14 |
| [#4312](https://github.com/ROCm/AMDMIGraphX/pull/4312) | Add ONNX model testing workflow | @danieyan-amd | draft | 2025-09-23 | 2026-05-14 |
| [#4217](https://github.com/ROCm/AMDMIGraphX/pull/4217) | Set attribute to help bypass the warning about amdgpu_waves_... | @lakhinderwalia | draft | 2025-08-08 | 2026-05-14 |
| [#4049](https://github.com/ROCm/AMDMIGraphX/pull/4049) | Store literals in pinned memory when there isnt enough GPU m... | @pfultz2 | draft | 2025-06-03 | 2026-05-14 |
| [#3938](https://github.com/ROCm/AMDMIGraphX/pull/3938) | Add GPU onnx support for com.microsoft.SparseAttention | @music-dino | draft | 2025-04-09 | 2026-05-14 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | draft | 2025-03-07 | 2026-05-14 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | draft | 2025-01-17 | 2026-05-14 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | draft | 2024-11-29 | 2026-05-14 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-05-14 |
| [#4765](https://github.com/ROCm/AMDMIGraphX/pull/4765) | Add versioninfo to migraphx binaries WINDOWS | @ivarusic-amd | open | 2026-04-09 | 2026-05-14 |
| [#3465](https://github.com/ROCm/AMDMIGraphX/pull/3465) | Remove layernorm fusion | @pfultz2 | draft | 2024-09-20 | 2026-05-14 |
| [#4154](https://github.com/ROCm/AMDMIGraphX/pull/4154) | Switch to c++23 | @pfultz2 | draft | 2025-07-21 | 2026-05-14 |
| [#3416](https://github.com/ROCm/AMDMIGraphX/pull/3416) | Weight stripping | @simberg-amd | draft | 2024-09-04 | 2026-05-13 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | draft | 2024-06-26 | 2026-05-13 |
| [#1417](https://github.com/ROCm/AMDMIGraphX/pull/1417) | Warnings upon tuning  information mismatch for Convolutions | @umangyadav | draft | 2022-10-19 | 2026-05-13 |
| [#2224](https://github.com/ROCm/AMDMIGraphX/pull/2224) | Added mutex locks in register_target.cpp and created a multi... | @bpickrel | draft | 2023-09-20 | 2026-05-13 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | draft | 2026-04-08 | 2026-05-13 |
| [#4456](https://github.com/ROCm/AMDMIGraphX/pull/4456) | Horizontally fuse pointwise with more than 2 arguments in fi... | @pfultz2 | draft | 2025-11-20 | 2026-05-13 |
| [#4863](https://github.com/ROCm/AMDMIGraphX/pull/4863) | Add measurement of overall compile time to `migraphx-driver` | @apwojcik | open | 2026-05-08 | 2026-05-13 |
| [#4743](https://github.com/ROCm/AMDMIGraphX/pull/4743) | [AIMIGRAPHX-885] Add_gather_kernel Matcher | @TedThemistokleous | draft | 2026-04-06 | 2026-05-13 |
| [#4727](https://github.com/ROCm/AMDMIGraphX/pull/4727) | [AIMIGRAPHX-885] Dedupilicate Gather Reads from Constant Emb... | @TedThemistokleous | open | 2026-03-31 | 2026-05-13 |
| [#4877](https://github.com/ROCm/AMDMIGraphX/pull/4877) | Fix attention for non-standard literal | @ahsan-ca | open | 2026-05-12 | 2026-05-12 |
| [#4723](https://github.com/ROCm/AMDMIGraphX/pull/4723) | [AIMIGRAPHX-885]  MLP tower batched horizontal fusions | @TedThemistokleous | open | 2026-03-31 | 2026-05-12 |
| [#4808](https://github.com/ROCm/AMDMIGraphX/pull/4808) | Enable fp16 channelwise convolution | @klin2024 | open | 2026-04-21 | 2026-05-11 |
| [#3815](https://github.com/ROCm/AMDMIGraphX/pull/3815) | Use fill_argument for literals that have the same value | @pfultz2 | open | 2025-02-14 | 2026-05-10 |
| [#4806](https://github.com/ROCm/AMDMIGraphX/pull/4806) | Add fusedMatMul microsoft contrib operator | @ahsan-ca | open | 2026-04-20 | 2026-05-10 |
| [#4665](https://github.com/ROCm/AMDMIGraphX/pull/4665) | Add missing `trace` check for debug output in `compile_plan` | @mferencevic | open | 2026-03-13 | 2026-05-08 |
| [#4835](https://github.com/ROCm/AMDMIGraphX/pull/4835) | Extend problem cache with hardware provenance metadata | @danieyan-amd | open | 2026-04-30 | 2026-05-08 |
| [#3972](https://github.com/ROCm/AMDMIGraphX/pull/3972) | Allow ONNX and TF modules optional | @apwojcik | open | 2025-04-25 | 2026-05-08 |
| [#4563](https://github.com/ROCm/AMDMIGraphX/pull/4563) | Add Windows build documentation for TheRock ROCm | @ppetrovi-amd | draft | 2026-01-21 | 2026-05-08 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | draft | 2025-01-09 | 2026-05-07 |
| [#4830](https://github.com/ROCm/AMDMIGraphX/pull/4830) |  CI: Automating workflow execution for internal contributors... | @Muhamed-Husic | open | 2026-04-29 | 2026-05-06 |
| [#3750](https://github.com/ROCm/AMDMIGraphX/pull/3750) | Tile channels for group norm and also fuse output reshapes i... | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#3752](https://github.com/ROCm/AMDMIGraphX/pull/3752) | Fuse multiple outputs for pointwise and reductions | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#4826](https://github.com/ROCm/AMDMIGraphX/pull/4826) | Fix literal promotion | @ivarusic-amd | open | 2026-04-28 | 2026-05-03 |
| [#4829](https://github.com/ROCm/AMDMIGraphX/pull/4829) | support stride > 1 case. | @weizhu12-amd | draft | 2026-04-29 | 2026-04-29 |
| [#4608](https://github.com/ROCm/AMDMIGraphX/pull/4608) | Use rocBLAS GEMV for skinny GEMM (M=1 or N=1) to improve per... | @klin2024 | draft | 2026-02-12 | 2026-04-28 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-04-27 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#4734](https://github.com/ROCm/AMDMIGraphX/pull/4734) | Bump onnx from 1.17.0 to 1.21.0 in /tools | @dependabot[bot] | open | 2026-04-02 | 2026-04-26 |
| [#4729](https://github.com/ROCm/AMDMIGraphX/pull/4729) | Improve horizontal fusions | @pfultz2 | open | 2026-04-01 | 2026-04-24 |
| [#4782](https://github.com/ROCm/AMDMIGraphX/pull/4782) | Add symbolic expression | @pfultz2 | open | 2026-04-13 | 2026-04-24 |
| [#4742](https://github.com/ROCm/AMDMIGraphX/pull/4742) | [AIRADSW-64] Add Parser for arrayfeatureextractor Onnx op | @tamahedi | open | 2026-04-06 | 2026-04-23 |
| [#4733](https://github.com/ROCm/AMDMIGraphX/pull/4733) | Fuse pointwise across split slices | @pfultz2 | open | 2026-04-01 | 2026-04-23 |
| [#4803](https://github.com/ROCm/AMDMIGraphX/pull/4803) | Python API debug symbols | @CharlieL7 | open | 2026-04-20 | 2026-04-21 |
| [#4809](https://github.com/ROCm/AMDMIGraphX/pull/4809) | Use fp32 FMA in channelwise conv | @klin2024 | draft | 2026-04-21 | 2026-04-21 |
| [#4607](https://github.com/ROCm/AMDMIGraphX/pull/4607) | Optimize 1x1 and Depthwise Convolution for Small Shapes | @klin2024 | draft | 2026-02-12 | 2026-04-21 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-18 |
| [#4764](https://github.com/ROCm/AMDMIGraphX/pull/4764) | Fix concat_past_present OOB write when seqlens_k is negative | @danieyan-amd | open | 2026-04-09 | 2026-04-16 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-04-15 |
| [#4785](https://github.com/ROCm/AMDMIGraphX/pull/4785) | Improve yolov10n Performance | @ahsan-ca | draft | 2026-04-14 | 2026-04-15 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-14 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | open | 2026-03-23 | 2026-04-13 |
| [#4777](https://github.com/ROCm/AMDMIGraphX/pull/4777) | Remove gqa_rotary_embedding and use op builder in its place | @turneram | open | 2026-04-10 | 2026-04-10 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-04-10 |
| [#4726](https://github.com/ROCm/AMDMIGraphX/pull/4726) | [AIMIGRAPHX-885] Fuse Expert Heads into mlir_slice_sigmoid_m... | @TedThemistokleous | draft | 2026-03-31 | 2026-04-10 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-04-09 |
| [#4163](https://github.com/ROCm/AMDMIGraphX/pull/4163) | Improve split reshape | @pfultz2 | open | 2025-07-23 | 2026-04-08 |
| [#4744](https://github.com/ROCm/AMDMIGraphX/pull/4744) | Add dockerfile for building TheRock | @causten | open | 2026-04-06 | 2026-04-08 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-31 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-27 |
| [#4682](https://github.com/ROCm/AMDMIGraphX/pull/4682) | Add caching mechanism for CI tests in Jenkinsfile | @causten | open | 2026-03-18 | 2026-03-18 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-03-17 |
| [#4439](https://github.com/ROCm/AMDMIGraphX/pull/4439) | AIMIGRAPHX-317 g+g heuristic added to apply | @bdevorem | draft | 2025-11-12 | 2026-03-06 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-03-03 |
| [#4546](https://github.com/ROCm/AMDMIGraphX/pull/4546) | [DRAFT] flash decoding kvcache | @bdevorem | draft | 2026-01-14 | 2026-02-18 |
| [#4448](https://github.com/ROCm/AMDMIGraphX/pull/4448) | Gpu concat kernel improvements | @pfultz2 | draft | 2025-11-19 | 2026-02-16 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | draft | 2026-02-12 | 2026-02-12 |
| [#4577](https://github.com/ROCm/AMDMIGraphX/pull/4577) | Create op. builders (6.) (AI generated) | @gchinora | draft | 2026-01-28 | 2026-01-28 |
| [#4489](https://github.com/ROCm/AMDMIGraphX/pull/4489) | [AI Generated]Gather optimization to speed things up | @TedThemistokleous | draft | 2025-12-08 | 2026-01-14 |
| [#4472](https://github.com/ROCm/AMDMIGraphX/pull/4472) | Update driver documentation with missing options and fix inc... | @Copilot | draft | 2025-11-26 | 2025-11-26 |
| [#4381](https://github.com/ROCm/AMDMIGraphX/pull/4381) | Enable pointwise fusion for dynamic IR | @shivadbhavsar | draft | 2025-10-13 | 2025-11-20 |
| [#4403](https://github.com/ROCm/AMDMIGraphX/pull/4403) | `generic_float` for Float8E8M0 | @CharlieL7 | draft | 2025-10-23 | 2025-11-08 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2025-10-13 |
| [#4275](https://github.com/ROCm/AMDMIGraphX/pull/4275) | SparseAttention ONNX Contrib Op Implementation | @music-dino | draft | 2025-09-03 | 2025-09-09 |
| [#3725](https://github.com/ROCm/AMDMIGraphX/pull/3725) | Issue with int8 for MaxPool  | @taylding-amd | draft | 2024-12-19 | 2025-05-17 |
| [#3759](https://github.com/ROCm/AMDMIGraphX/pull/3759) | Experimental output fusion | @shivadbhavsar | draft | 2025-01-12 | 2025-05-17 |
| [#3721](https://github.com/ROCm/AMDMIGraphX/pull/3721) | Introduce export feature to TensorRT JSON format | @mirza-halilcevic | draft | 2024-12-18 | 2025-03-07 |
| [#3718](https://github.com/ROCm/AMDMIGraphX/pull/3718) | Tile scale and bias for block quantization | @pfultz2 | draft | 2024-12-16 | 2025-03-07 |
| [#2687](https://github.com/ROCm/AMDMIGraphX/pull/2687) | Add optional fp16 rmsnorm conversion pass to fix fp16 accura... | @attila-dusnoki-htec | draft | 2024-01-25 | 2025-03-07 |
| [#4889](https://github.com/ROCm/AMDMIGraphX/pull/4889) | Add initial agents.md file | @pfultz2 | merged | 2026-05-15 | 2026-05-16 |
| [#4883](https://github.com/ROCm/AMDMIGraphX/pull/4883) | weekly rocmlir merge 5/14 | @causten | merged | 2026-05-14 | 2026-05-16 |
| [#4887](https://github.com/ROCm/AMDMIGraphX/pull/4887) | Onnxruntime Weekly Sync 2026-05-15 | @github-actions[bot] | merged | 2026-05-15 | 2026-05-16 |
| [#4514](https://github.com/ROCm/AMDMIGraphX/pull/4514) | Add early return for element tile calculation | @TedThemistokleous | merged | 2025-12-19 | 2026-05-15 |
| [#4699](https://github.com/ROCm/AMDMIGraphX/pull/4699) | Support dynamic input shapes for NonMaxSuppression op with r... | @klin2024 | merged | 2026-03-24 | 2026-05-15 |
| [#4823](https://github.com/ROCm/AMDMIGraphX/pull/4823) | support symbolic shape transpose, contiguous, as_shape | @shivadbhavsar | merged | 2026-04-24 | 2026-05-15 |
| [#4868](https://github.com/ROCm/AMDMIGraphX/pull/4868) | Improve failure reporting in op_shape_test | @pfultz2 | merged | 2026-05-08 | 2026-05-15 |
| [#4704](https://github.com/ROCm/AMDMIGraphX/pull/4704) | [AIMIGRAPHX-840] support symbolic shape prop through conv an... | @shivadbhavsar | merged | 2026-03-25 | 2026-05-15 |
| [#4600](https://github.com/ROCm/AMDMIGraphX/pull/4600) | Have eliminate_pad skip over non-constant padding, ref tests... | @CharlieL7 | merged | 2026-02-10 | 2026-05-15 |
| [#4610](https://github.com/ROCm/AMDMIGraphX/pull/4610) | Fix bug in gather rewrite with nhwc shapes | @pfultz2 | merged | 2026-02-12 | 2026-05-15 |
| [#4853](https://github.com/ROCm/AMDMIGraphX/pull/4853) | disable fuse_horizontal for dynamic shapes | @shivadbhavsar | merged | 2026-05-06 | 2026-05-14 |
| [#4819](https://github.com/ROCm/AMDMIGraphX/pull/4819) | [AIMIGRAPHX-839] support symbolic shapes for broadcast ops | @shivadbhavsar | merged | 2026-04-24 | 2026-05-14 |
| [#4873](https://github.com/ROCm/AMDMIGraphX/pull/4873) | Bump urllib3 from 2.6.3 to 2.7.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-05-11 | 2026-05-13 |
| [#4567](https://github.com/ROCm/AMDMIGraphX/pull/4567) | Filter zero arg operators during ONNX Parsing | @TedThemistokleous | merged | 2026-01-23 | 2026-05-13 |
| [#4875](https://github.com/ROCm/AMDMIGraphX/pull/4875) | [ #4840] Accept keep_aspect_ratio_policy=stretch in Resize p... | @itikhono | merged | 2026-05-12 | 2026-05-13 |
| [#4865](https://github.com/ROCm/AMDMIGraphX/pull/4865) | [AIRADSW-468] Fix Windows hang by draining the output pipe b... | @ivarusic-amd | merged | 2026-05-08 | 2026-05-13 |
| [#4878](https://github.com/ROCm/AMDMIGraphX/pull/4878) | Fix formatting for short function blocks | @pfultz2 | merged | 2026-05-12 | 2026-05-13 |
| [#4601](https://github.com/ROCm/AMDMIGraphX/pull/4601) | Move move_output_instructions_after to the module class | @pfultz2 | merged | 2026-02-10 | 2026-05-13 |
| [#4603](https://github.com/ROCm/AMDMIGraphX/pull/4603) | Prevent propagate precision across precision boundaries for ... | @kahmed10 | merged | 2026-02-11 | 2026-05-13 |
| [#4861](https://github.com/ROCm/AMDMIGraphX/pull/4861) | Do not force temp removal on Windows | @apwojcik | merged | 2026-05-08 | 2026-05-12 |
| [#4872](https://github.com/ROCm/AMDMIGraphX/pull/4872) | [AIMIGRAPHX-1033] Consolidate CMakefile.txt with the version... | @kentqian | merged | 2026-05-11 | 2026-05-11 |
| [#4874](https://github.com/ROCm/AMDMIGraphX/pull/4874) | [AIMIGRAPHX-1032] Fix ambiguous __hmax/__hmin calls for half... | @kentqian | merged | 2026-05-11 | 2026-05-11 |
| [#4848](https://github.com/ROCm/AMDMIGraphX/pull/4848) | [AIMIGRAPHX-1029] Update ROCm CMake dependency version to 7.... | @kentqian | merged | 2026-05-06 | 2026-05-11 |
| [#4594](https://github.com/ROCm/AMDMIGraphX/pull/4594) | Fix bug in reshape_lazy calculation | @pfultz2 | merged | 2026-02-05 | 2026-05-11 |
| [#4871](https://github.com/ROCm/AMDMIGraphX/pull/4871) | Update gfx1201 list in CI | @causten | merged | 2026-05-11 | 2026-05-11 |
| [#4867](https://github.com/ROCm/AMDMIGraphX/pull/4867) | Onnxruntime Weekly Sync 2026-05-08 | @github-actions[bot] | merged | 2026-05-08 | 2026-05-11 |
| [#4870](https://github.com/ROCm/AMDMIGraphX/pull/4870) | Bump gitpython from 3.1.49 to 3.1.50 in /docs/sphinx | @dependabot[bot] | merged | 2026-05-09 | 2026-05-11 |
| [#4797](https://github.com/ROCm/AMDMIGraphX/pull/4797) | Add rocprofv3 and att trace library | @pfultz2 | merged | 2026-04-17 | 2026-05-10 |
| [#4805](https://github.com/ROCm/AMDMIGraphX/pull/4805) | Bump CI to 7.2.3 | @causten | merged | 2026-04-20 | 2026-05-10 |
| [#4858](https://github.com/ROCm/AMDMIGraphX/pull/4858) | Propagate layout in reshape operator | @pfultz2 | merged | 2026-05-07 | 2026-05-09 |
| [#4869](https://github.com/ROCm/AMDMIGraphX/pull/4869) | Fix report.yaml to handle github app token | @causten | merged | 2026-05-08 | 2026-05-08 |
| [#4866](https://github.com/ROCm/AMDMIGraphX/pull/4866) | test/py: warn when an onnx_backend_test include pattern matc... | @mvanhorn | merged | 2026-05-08 | 2026-05-08 |
| [#4737](https://github.com/ROCm/AMDMIGraphX/pull/4737) | Add windows cpu runner | @pfultz2 | merged | 2026-04-02 | 2026-05-08 |
| [#4859](https://github.com/ROCm/AMDMIGraphX/pull/4859) | Enable ControlGuard for MIGraphX on Windows | @apwojcik | merged | 2026-05-07 | 2026-05-08 |
| [#4864](https://github.com/ROCm/AMDMIGraphX/pull/4864) | Update to `.gitignore` | @apwojcik | merged | 2026-05-08 | 2026-05-08 |
| [#4518](https://github.com/ROCm/AMDMIGraphX/pull/4518) | AIMIGRAPHX-549 Update clip operator to opset 13 | @TedThemistokleous | merged | 2025-12-22 | 2026-05-08 |
| [#4550](https://github.com/ROCm/AMDMIGraphX/pull/4550) | Rewrite gather to transpose/reshape/broadcast/slice | @pfultz2 | merged | 2026-01-16 | 2026-05-07 |
| [#4857](https://github.com/ROCm/AMDMIGraphX/pull/4857) | Update PR report to use app token | @causten | merged | 2026-05-07 | 2026-05-07 |
| [#4856](https://github.com/ROCm/AMDMIGraphX/pull/4856) | Bump gitpython from 3.1.47 to 3.1.49 in /docs/sphinx | @dependabot[bot] | merged | 2026-05-07 | 2026-05-07 |
| [#4855](https://github.com/ROCm/AMDMIGraphX/pull/4855) | Update rocMLIR for TheRock support | @causten | merged | 2026-05-06 | 2026-05-07 |
| [#4852](https://github.com/ROCm/AMDMIGraphX/pull/4852) | Create SECURITY.md | @causten | merged | 2026-05-06 | 2026-05-07 |
| [#4854](https://github.com/ROCm/AMDMIGraphX/pull/4854) | Update .gitignore | @causten | merged | 2026-05-06 | 2026-05-07 |
| [#4521](https://github.com/ROCm/AMDMIGraphX/pull/4521) | Correct QLinearMatMul broadcasting and QLinearConv bias quan... | @klin2024 | merged | 2026-01-02 | 2026-05-07 |
| [#4639](https://github.com/ROCm/AMDMIGraphX/pull/4639) | yolo26 example | @alexsu52 | merged | 2026-02-26 | 2026-05-07 |
| [#4838](https://github.com/ROCm/AMDMIGraphX/pull/4838) | compilation error on unused function | @apwojcik | merged | 2026-05-04 | 2026-05-07 |
| [#4843](https://github.com/ROCm/AMDMIGraphX/pull/4843) | Suggest formatting changes | @pfultz2 | merged | 2026-05-06 | 2026-05-06 |
| [#4540](https://github.com/ROCm/AMDMIGraphX/pull/4540) | Return vector for output alias | @pfultz2 | merged | 2026-01-12 | 2026-05-06 |
| [#4560](https://github.com/ROCm/AMDMIGraphX/pull/4560) | Add axis attribute to unpack_fp4 and pack_fp4 | @CharlieL7 | merged | 2026-01-21 | 2026-05-06 |
| [#4842](https://github.com/ROCm/AMDMIGraphX/pull/4842) | Use Github App permissions for Jenkins | @causten | merged | 2026-05-05 | 2026-05-06 |
| [#4730](https://github.com/ROCm/AMDMIGraphX/pull/4730) | [AIMIGRAPHX-841] sym shapes for gemm ops | @shivadbhavsar | merged | 2026-04-01 | 2026-05-06 |
| [#4587](https://github.com/ROCm/AMDMIGraphX/pull/4587) | Add debug print to shape class | @pfultz2 | merged | 2026-02-03 | 2026-05-05 |
| [#4574](https://github.com/ROCm/AMDMIGraphX/pull/4574) | fix compute_shapes lens check | @shivadbhavsar | merged | 2026-01-27 | 2026-05-04 |
| [#4837](https://github.com/ROCm/AMDMIGraphX/pull/4837) | Docs: update formatting and fix typo in MLIR issue triaging ... | @anisha-amd | merged | 2026-05-01 | 2026-05-01 |
| [#4833](https://github.com/ROCm/AMDMIGraphX/pull/4833) | Docs: update formatting and fix typo in MLIR issue triaging ... | @anisha-amd | merged | 2026-04-30 | 2026-05-01 |
| [#4712](https://github.com/ROCm/AMDMIGraphX/pull/4712) | Output debug symbols | @CharlieL7 | merged | 2026-03-26 | 2026-05-01 |
| [#4788](https://github.com/ROCm/AMDMIGraphX/pull/4788) | Bump pytest from 6.0.1 to 9.0.3 in /tools | @dependabot[bot] | merged | 2026-04-15 | 2026-04-30 |
| [#4834](https://github.com/ROCm/AMDMIGraphX/pull/4834) | Run pr_dashboard job on develop branch update or PR set to r... | @CharlieL7 | merged | 2026-04-30 | 2026-04-30 |
| [#4828](https://github.com/ROCm/AMDMIGraphX/pull/4828) | Fix dynamic shape conversion semantics  | @shivadbhavsar | merged | 2026-04-28 | 2026-04-30 |
| [#4780](https://github.com/ROCm/AMDMIGraphX/pull/4780) | [AIMIGRAPHX-911] Add callback function to eval() | @eddieliao | merged | 2026-04-13 | 2026-04-29 |
| [#4827](https://github.com/ROCm/AMDMIGraphX/pull/4827) | rocMLIR LLVM fixes for TheRock | @causten | merged | 2026-04-28 | 2026-04-29 |
| [#4559](https://github.com/ROCm/AMDMIGraphX/pull/4559) | Fix shape_transform_descriptor::rebase when flattening a bro... | @pfultz2 | merged | 2026-01-20 | 2026-04-28 |
| [#4818](https://github.com/ROCm/AMDMIGraphX/pull/4818) | Fix flaky logger test | @eddieliao | merged | 2026-04-23 | 2026-04-28 |
| [#4820](https://github.com/ROCm/AMDMIGraphX/pull/4820) | Improve PR benchmarks | @causten | merged | 2026-04-24 | 2026-04-28 |
| [#4822](https://github.com/ROCm/AMDMIGraphX/pull/4822) | Onnxruntime Weekly Sync 2026-04-24 | @github-actions[bot] | merged | 2026-04-24 | 2026-04-27 |
| [#4534](https://github.com/ROCm/AMDMIGraphX/pull/4534) | [AIMIGRAPHX-231] Enable dynamic shapes for pointwise and red... | @shivadbhavsar | merged | 2026-01-09 | 2026-04-27 |
| [#4561](https://github.com/ROCm/AMDMIGraphX/pull/4561) | Prevent propagating precision across type boundaries | @kahmed10 | merged | 2026-01-21 | 2026-04-27 |
| [#4814](https://github.com/ROCm/AMDMIGraphX/pull/4814) | ROCm 7.2.3. Update Changelog.md | @TedThemistokleous | merged | 2026-04-22 | 2026-04-27 |
| [#4714](https://github.com/ROCm/AMDMIGraphX/pull/4714) | AIMIGRAPHX-585 Update MIGraphX build/package scripts for The... | @kentqian | merged | 2026-03-27 | 2026-04-27 |
| [#4469](https://github.com/ROCm/AMDMIGraphX/pull/4469) | [AIMIGRAPHX-371] Add logger with basic sinks | @eddieliao | merged | 2025-11-26 | 2026-04-26 |
| [#4537](https://github.com/ROCm/AMDMIGraphX/pull/4537) | [AIMIGRAPHX-510] Enable dynamic shapes for mlir_op | @shivadbhavsar | merged | 2026-01-09 | 2026-04-26 |
| [#4494](https://github.com/ROCm/AMDMIGraphX/pull/4494) | [7.2.1] Fix MXR writes  | @causten | merged | 2025-12-10 | 2026-04-26 |
| [#4824](https://github.com/ROCm/AMDMIGraphX/pull/4824) | Bump gitpython from 3.1.43 to 3.1.47 in /docs/sphinx | @dependabot[bot] | merged | 2026-04-26 | 2026-04-26 |
| [#4702](https://github.com/ROCm/AMDMIGraphX/pull/4702) | [AIMIGRAPHX-835] integrate symbolic expression in dynamic_di... | @shivadbhavsar | merged | 2026-03-25 | 2026-04-25 |
| [#4790](https://github.com/ROCm/AMDMIGraphX/pull/4790) | JIT - add back vectorization for argmin/argmax | @bdevorem | merged | 2026-04-15 | 2026-04-25 |
| [#4815](https://github.com/ROCm/AMDMIGraphX/pull/4815) | Allow Grouped 1D and 3D convolutions to rocmlir | @CharlieL7 | merged | 2026-04-22 | 2026-04-25 |
| [#4821](https://github.com/ROCm/AMDMIGraphX/pull/4821) | Update applyTo to copilot instructions | @pfultz2 | merged | 2026-04-24 | 2026-04-24 |
| [#4766](https://github.com/ROCm/AMDMIGraphX/pull/4766) | Generate mxr files for benchmarking | @ahsan-ca | merged | 2026-04-09 | 2026-04-24 |
| [#4648](https://github.com/ROCm/AMDMIGraphX/pull/4648) | Add flag to strip context | @pfultz2 | merged | 2026-03-03 | 2026-04-24 |
| [#4735](https://github.com/ROCm/AMDMIGraphX/pull/4735) | Add MIGraphX MLIR dialect testcase for MXFP4 GEMM | @CharlieL7 | merged | 2026-04-02 | 2026-04-24 |
| [#4798](https://github.com/ROCm/AMDMIGraphX/pull/4798) | Onnxruntime Weekly Sync 2026-04-17 | @github-actions[bot] | merged | 2026-04-17 | 2026-04-24 |
| [#4813](https://github.com/ROCm/AMDMIGraphX/pull/4813) | Add tests for grouped convolution | @CharlieL7 | merged | 2026-04-22 | 2026-04-24 |
| [#4812](https://github.com/ROCm/AMDMIGraphX/pull/4812) | Adding imagetag comment for clarity | @Muhamed-Husic | merged | 2026-04-22 | 2026-04-24 |
| [#4761](https://github.com/ROCm/AMDMIGraphX/pull/4761) | Update rocMLIR integration API to version 5 (perfConfig, clu... | @dhernandez0 | merged | 2026-04-09 | 2026-04-23 |
| [#4816](https://github.com/ROCm/AMDMIGraphX/pull/4816) | Add copilot custom instructions | @pfultz2 | merged | 2026-04-23 | 2026-04-23 |
| [#4810](https://github.com/ROCm/AMDMIGraphX/pull/4810) | fix for intra op threads issue | @aarushjain29 | merged | 2026-04-21 | 2026-04-23 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-05-16T09:19:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#3229](https://github.com/ROCm/aiter/pull/3229) | Add fused Allreduce + RMSNorm + MXFP4 quant | @hubertlu-tw | open | 2026-05-15 | 2026-05-16 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-05-16 |
| [#3106](https://github.com/ROCm/aiter/pull/3106) | [Kernel][gfx1250] Add FlyDSL MXScale FP8/A8W4 GEMM | @aoli26 | open | 2026-05-09 | 2026-05-16 |
| [#3039](https://github.com/ROCm/aiter/pull/3039) | fmha f16 | @feifei14119 | open | 2026-05-06 | 2026-05-16 |
| [#3232](https://github.com/ROCm/aiter/pull/3232) | [FLYDSL] bump version to 0.1.8.dev574 | @coderfeli | open | 2026-05-16 | 2026-05-16 |
| [#3164](https://github.com/ROCm/aiter/pull/3164) | feat(aot): align FlyDSL AOT precompile with runtime cache ke... | @zhiding512 | open | 2026-05-13 | 2026-05-16 |
| [#3219](https://github.com/ROCm/aiter/pull/3219) | Fix: surface AITER import errors on Linux | @gyohuangxin | open | 2026-05-15 | 2026-05-16 |
| [#2854](https://github.com/ROCm/aiter/pull/2854) | [FLYDSL] Add GDR prefill chunk_gdn_fwd_h kernel for MI35X | @huizzhan | open | 2026-04-22 | 2026-05-16 |
| [#3217](https://github.com/ROCm/aiter/pull/3217) | perf(sampling): replace ternary-search TopKRenorm with radix... | @chuanbowang2026 | open | 2026-05-15 | 2026-05-16 |
| [#3001](https://github.com/ROCm/aiter/pull/3001) | Remove sorting for fmoe | @JohnNikolay84 | open | 2026-05-01 | 2026-05-15 |
| [#3230](https://github.com/ROCm/aiter/pull/3230) | [TRITON] Make splitk reduce common | @vgokhale | open | 2026-05-15 | 2026-05-15 |
| [#2513](https://github.com/ROCm/aiter/pull/2513) | [TRITON] [GLUON] GFX1250 Gluon MoE A4W4 Kernel | @farlukas | open | 2026-03-27 | 2026-05-15 |
| [#3231](https://github.com/ROCm/aiter/pull/3231) | [TRITON] Use tl.dot(..., acc=...) accumulator form | @vgokhale | open | 2026-05-15 | 2026-05-15 |
| [#3226](https://github.com/ROCm/aiter/pull/3226) | [TRITON][GLUON] Add fp8_mqa_logits gluon kernel for gfx950 a... | @cagrikymk | open | 2026-05-15 | 2026-05-15 |
| [#3048](https://github.com/ROCm/aiter/pull/3048) | refactor(triton): reorganize conv modules and unify gated FP... | @hellozhuo-amd | open | 2026-05-06 | 2026-05-15 |
| [#3228](https://github.com/ROCm/aiter/pull/3228) | [TRITON] Add gfx1201 fp8 gemm configs | @skysnow2001 | open | 2026-05-15 | 2026-05-15 |
| [#3223](https://github.com/ROCm/aiter/pull/3223) | fix mi350 bf16gemm issue when m is not multiple of 16 | @tingchen988 | open | 2026-05-15 | 2026-05-15 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-05-15 |
| [#3225](https://github.com/ROCm/aiter/pull/3225) | [OPUS] [ATOM] Add pa_sparse_prefill_opus kernel for DeepSeek... | @kaiyang-1 | open | 2026-05-15 | 2026-05-15 |
| [#2695](https://github.com/ROCm/aiter/pull/2695) | [Triton] Declare triton>=3.6.0 dependency  | @micmelesse | open | 2026-04-10 | 2026-05-15 |
| [#2999](https://github.com/ROCm/aiter/pull/2999) | Replace QH16 bf16 kernel with a new one that does not use pt... | @JohnNikolay84 | open | 2026-05-01 | 2026-05-15 |
| [#2922](https://github.com/ROCm/aiter/pull/2922) | Deepseek Sparse Attention Triton Kernels for Training | @wangye805 | draft | 2026-04-27 | 2026-05-15 |
| [#3112](https://github.com/ROCm/aiter/pull/3112) | [MLA ASM kernel] add v4 MLA decode for mi350 (recompile mi30... | @liyjiang | open | 2026-05-11 | 2026-05-15 |
| [#3222](https://github.com/ROCm/aiter/pull/3222) | FlyDSL sage mxfp4 (v2) | @hellozhuo-amd | draft | 2026-05-15 | 2026-05-15 |
| [#2945](https://github.com/ROCm/aiter/pull/2945) | [OPUS]bf16 opus gemm support | @demonsan | open | 2026-04-29 | 2026-05-15 |
| [#3216](https://github.com/ROCm/aiter/pull/3216) | [FLYDSL] gfx1250 mha integration | @Zzz9990 | draft | 2026-05-15 | 2026-05-15 |
| [#3165](https://github.com/ROCm/aiter/pull/3165) | FlyDSL sage v1 | @hellozhuo-amd | draft | 2026-05-13 | 2026-05-15 |
| [#3220](https://github.com/ROCm/aiter/pull/3220) | Fix checkclose and refactor tuner | @yzhou103 | open | 2026-05-15 | 2026-05-15 |
| [#3212](https://github.com/ROCm/aiter/pull/3212) | feat(fp4): align E8M0 scale to OCP standard + add  ROUND_UP ... | @yzhou103 | draft | 2026-05-15 | 2026-05-15 |
| [#3150](https://github.com/ROCm/aiter/pull/3150) | [CK_TILE] FMHA BWD: stream-async workspace prepare for group... | @DDEle | open | 2026-05-12 | 2026-05-15 |
| [#3184](https://github.com/ROCm/aiter/pull/3184) | fix deepseek v4 padding issue | @yadaish | draft | 2026-05-14 | 2026-05-15 |
| [#3148](https://github.com/ROCm/aiter/pull/3148) | Rchamber/optimised dynamic per group scaled quant v2 | @RichardChamberlain1 | open | 2026-05-12 | 2026-05-15 |
| [#3151](https://github.com/ROCm/aiter/pull/3151) | [tune] add EP tuned configs | @inkcherry | open | 2026-05-12 | 2026-05-15 |
| [#3210](https://github.com/ROCm/aiter/pull/3210) | [feat](gpt-oss): add a8w8 gemm tunefile for gpt-oss | @PerryZhang01 | open | 2026-05-15 | 2026-05-15 |
| [#3205](https://github.com/ROCm/aiter/pull/3205) | [Perf][Kernel] Add gfx950 1-stage ASM FP8-blockscale fast pa... | @peymanr | draft | 2026-05-14 | 2026-05-15 |
| [#3213](https://github.com/ROCm/aiter/pull/3213) | [fused_moe] kernel2 is cktile | @amd-ruitang3 | open | 2026-05-15 | 2026-05-15 |
| [#3206](https://github.com/ROCm/aiter/pull/3206) | [Perf] Add MiniMax-M2.5 GEMM and FMoE tuning configs with do... | @peymanr | draft | 2026-05-14 | 2026-05-15 |
| [#3183](https://github.com/ROCm/aiter/pull/3183) | [Config] Add DeepSeek-V4 FP4 MoE tuned config for FlyDSL ker... | @MHYangAMD | open | 2026-05-14 | 2026-05-15 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-05-15 |
| [#3117](https://github.com/ROCm/aiter/pull/3117) | perf(flydsl): MXFP4 fused-MoE stage2 optimization for EP pre... | @inkcherry | open | 2026-05-11 | 2026-05-15 |
| [#3211](https://github.com/ROCm/aiter/pull/3211) | fix(pa): support block_id > 65535 in ASM paged-attention ker... | @fangche123 | open | 2026-05-15 | 2026-05-15 |
| [#3214](https://github.com/ROCm/aiter/pull/3214) | configs: add DSv4-Flash shape to dsv4_fp8fp4_tuned_fmoe.csv | @XinyuJiangCMU | open | 2026-05-15 | 2026-05-15 |
| [#3102](https://github.com/ROCm/aiter/pull/3102) | Revert "CI: Temporarily use previous vllm nightly image" | @gyohuangxin | open | 2026-05-09 | 2026-05-15 |
| [#3208](https://github.com/ROCm/aiter/pull/3208) | [Bugfix][CKTile] Use local expert ids for MoE bias activatio... | @XiaobingSuper | open | 2026-05-15 | 2026-05-15 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | Flydsl implementation of a8w8 blockscale for gfx1250 (WIP) | @omuhamma | draft | 2026-04-20 | 2026-05-15 |
| [#3093](https://github.com/ROCm/aiter/pull/3093) | [Gluon] fused_mxfp4_quant for gfx1250 | @amd-jrosas | open | 2026-05-08 | 2026-05-15 |
| [#2994](https://github.com/ROCm/aiter/pull/2994) | [Gluon]: Gluon kernel for mxfp4 quant | @NimitPtl | open | 2026-05-01 | 2026-05-14 |
| [#3203](https://github.com/ROCm/aiter/pull/3203) | Marcusr/aiesw 32176 w4a16 ck wmma | @marcusr-amd | draft | 2026-05-14 | 2026-05-14 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-05-14 |
| [#3188](https://github.com/ROCm/aiter/pull/3188) | Add native MLA QH64 fp8 persistent decode kernel for gfx942 | @vstakhov-amd | draft | 2026-05-14 | 2026-05-14 |
| [#3158](https://github.com/ROCm/aiter/pull/3158) | add error info to indicate no sliding window for triton back... | @scxiao | open | 2026-05-12 | 2026-05-14 |
| [#3186](https://github.com/ROCm/aiter/pull/3186) | i8fp8 fmha gfx950 asm | @jcaraban | open | 2026-05-14 | 2026-05-14 |
| [#3152](https://github.com/ROCm/aiter/pull/3152) | [feat] Add HIP inline asm GDN decode op | @IzacharyI | open | 2026-05-12 | 2026-05-14 |
| [#3180](https://github.com/ROCm/aiter/pull/3180) | CI: add tuned config smoke mode | @gyohuangxin | open | 2026-05-14 | 2026-05-14 |
| [#3162](https://github.com/ROCm/aiter/pull/3162) | CI: add test prebuild profile for PR wheels | @gyohuangxin | open | 2026-05-13 | 2026-05-14 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-05-14 |
| [#2962](https://github.com/ROCm/aiter/pull/2962) | [kernel] add fused_qk_norm_rope_1way kernel | @MHYangAMD | open | 2026-04-29 | 2026-05-14 |
| [#3114](https://github.com/ROCm/aiter/pull/3114) | Update gluon | @fsx950223 | open | 2026-05-11 | 2026-05-14 |
| [#3159](https://github.com/ROCm/aiter/pull/3159) | [module_fused_qk_norm_rope_cache_quant_shuffle] hip kl refac... | @amd-ruitang3 | open | 2026-05-13 | 2026-05-14 |
| [#2642](https://github.com/ROCm/aiter/pull/2642) | fix: enable MXFP4 MoE at TP=4/8 via CKTile a4w4 kernels and ... | @thpereir | open | 2026-04-07 | 2026-05-14 |
| [#3041](https://github.com/ROCm/aiter/pull/3041) | [Triton] fused_flatten_fp8_group_quant: add transpose_scale ... | @Jacob0226 | open | 2026-05-06 | 2026-05-14 |
| [#3178](https://github.com/ROCm/aiter/pull/3178) | [DO NOT MERGE] CI: test AITER runner labels | @gyohuangxin | open | 2026-05-14 | 2026-05-14 |
| [#3094](https://github.com/ROCm/aiter/pull/3094) | [FLYDSL] [TRITON] Attention backward mxfp8 gfx950 | @lburzawa | open | 2026-05-08 | 2026-05-14 |
| [#3175](https://github.com/ROCm/aiter/pull/3175) | DeepSeek FP4 stage1 FQ compatibility override | @josusanmartin | draft | 2026-05-13 | 2026-05-13 |
| [#3169](https://github.com/ROCm/aiter/pull/3169) |  MTP + kv cache fp8 + shuffled KV layout support | @waqahmed-amd-fi | draft | 2026-05-13 | 2026-05-13 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-05-13 |
| [#2332](https://github.com/ROCm/aiter/pull/2332) | [Gluon][gfx1250] Gemm MXFP4 preshuffled | @Boss2002n | open | 2026-03-18 | 2026-05-13 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-05-13 |
| [#2888](https://github.com/ROCm/aiter/pull/2888) | [[Triton] [Gluon] [GFX12] add FP4 support for UA3D, MLA, KV ... | @k50112113 | open | 2026-04-23 | 2026-05-13 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-05-13 |
| [#3161](https://github.com/ROCm/aiter/pull/3161) | [DO NOT MERGE] Just for testing atom full | @mengfei-jiang | open | 2026-05-13 | 2026-05-13 |
| [#3160](https://github.com/ROCm/aiter/pull/3160) | [DO NOT MERGE] CI: split Aiter wheel prebuild by architectur... | @gyohuangxin | open | 2026-05-13 | 2026-05-13 |
| [#2886](https://github.com/ROCm/aiter/pull/2886) | [TRITON] Conv Kernels First Commit to AITER | @saeid-rostami | draft | 2026-04-23 | 2026-05-14 |
| [#3031](https://github.com/ROCm/aiter/pull/3031) | attention.cu: guard out-of-head Q load in mfma16 paged-atten... | @JohnQinAMD | open | 2026-05-05 | 2026-05-12 |
| [#3147](https://github.com/ROCm/aiter/pull/3147) | [BugFix] Align FlyDSL MXFP4 quantization with reference | @zihaomu | open | 2026-05-12 | 2026-05-12 |
| [#3129](https://github.com/ROCm/aiter/pull/3129) | [FlyDSL MOE]a4w4 enable gui & remove some pathes | @Zzz9990 | draft | 2026-05-11 | 2026-05-12 |
| [#3109](https://github.com/ROCm/aiter/pull/3109) | [ROCm][aiter] Add DSv3.2 BF16 GEMM tuned configs for gfx950 ... | @sunway513 | open | 2026-05-10 | 2026-05-12 |
| [#3131](https://github.com/ROCm/aiter/pull/3131) | CI: enable DeepSeek-V3.2 sglang downstream tests | @bingxche | open | 2026-05-11 | 2026-05-12 |
| [#2357](https://github.com/ROCm/aiter/pull/2357) | latest | @Boss2002n | draft | 2026-03-19 | 2026-05-11 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-05-11 |
| [#3128](https://github.com/ROCm/aiter/pull/3128) | hsa/gfx942/mla: fix mla_qh8 .co LDS size for gfx942 (MI300X) | @alexioslyrakis-amd | open | 2026-05-11 | 2026-05-11 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-05-11 |
| [#3110](https://github.com/ROCm/aiter/pull/3110) | [BugFix] A4W4 FMoE run_config weight shuffle | @zihaomu | open | 2026-05-11 | 2026-05-11 |
| [#3115](https://github.com/ROCm/aiter/pull/3115) | feat(flydsl): Add MQA logits FP4 kernel for gfx950 | @zhiding512 | open | 2026-05-11 | 2026-05-11 |
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-05-11 |
| [#3111](https://github.com/ROCm/aiter/pull/3111) | Add FMoE run_config mismatch diagnostics | @zihaomu | open | 2026-05-11 | 2026-05-11 |
| [#3065](https://github.com/ROCm/aiter/pull/3065) | mla:host passes gqa_ratio and kernel derives effective s_MQA | @fangche123 | open | 2026-05-07 | 2026-05-09 |
| [#3077](https://github.com/ROCm/aiter/pull/3077) | add tuned GEMM config for Qwen3.5 bf16 on MI308X | @zovonoir | open | 2026-05-08 | 2026-05-09 |
| [#2697](https://github.com/ROCm/aiter/pull/2697) | Add FlyDSL fused RoPE + KV Cache backend | @coderfeli | open | 2026-04-11 | 2026-05-08 |
| [#3083](https://github.com/ROCm/aiter/pull/3083) | test: use flydsl==0.1.6.dev20260508 from devreleases for CI ... | @xudoyuan | open | 2026-05-08 | 2026-05-08 |
| [#2774](https://github.com/ROCm/aiter/pull/2774) | [HIP] add chunk_gated_delta_rule_fwd_h_hip kernel for prefil... | @yiijin | open | 2026-04-17 | 2026-05-08 |
| [#2887](https://github.com/ROCm/aiter/pull/2887) | Feat/step3p5 moe swiglustep | @LJ-underdog | open | 2026-04-23 | 2026-05-08 |
| [#2649](https://github.com/ROCm/aiter/pull/2649) | Fuse qk norm cache group quant | @yzhou103 | open | 2026-04-08 | 2026-05-08 |
| [#3075](https://github.com/ROCm/aiter/pull/3075) | blockscale gemm: dispatch by kernelName, strict tuned-CSV va... | @samremes | draft | 2026-05-07 | 2026-05-08 |
| [#2998](https://github.com/ROCm/aiter/pull/2998) | Dsv4 sparse indexer | @Oseltamivir | open | 2026-05-01 | 2026-05-07 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-05-07 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-05-07 |
| [#3056](https://github.com/ROCm/aiter/pull/3056) | Add FlyDSL A8W4 MoE AOT run-only coverage | @zhiding512 | draft | 2026-05-06 | 2026-05-07 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-05-07 |
| [#3051](https://github.com/ROCm/aiter/pull/3051) | add BF16 output path to fused Gated RMSNorm HIP kernel | @zovonoir | open | 2026-05-06 | 2026-05-07 |
| [#3008](https://github.com/ROCm/aiter/pull/3008) | [FLYDSL] test only. bump dependency to 0.1.5.dev526 | @coderfeli | open | 2026-05-03 | 2026-05-07 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-05-06 |
| [#3013](https://github.com/ROCm/aiter/pull/3013) | fix(mla): bypass fp8 qseqlen2 kernel precision issue on gfx9... | @fangche123 | open | 2026-05-03 | 2026-05-06 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-05-06 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-05-05 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-05-05 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-05-01 |
| [#2997](https://github.com/ROCm/aiter/pull/2997) | mla: refuse page_size > 1 on bf16 decode-stage1 kernel (no _... | @kzjeef | open | 2026-05-01 | 2026-05-01 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-04-30 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-04-30 |
| [#2765](https://github.com/ROCm/aiter/pull/2765) | Satya.gfx12 mxfp4 gemm scale buffer load | @Boss2002n | draft | 2026-04-16 | 2026-04-30 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-04-30 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-04-29 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | open | 2026-04-29 | 2026-04-29 |
| [#2936](https://github.com/ROCm/aiter/pull/2936) | [gluon][pa_mqa_logits] memory-safety: mask all OutLogits buf... | @maeehart | draft | 2026-04-28 | 2026-04-29 |
| [#2957](https://github.com/ROCm/aiter/pull/2957) | avoid online build for mha fwd | @XiaobingSuper | open | 2026-04-29 | 2026-04-29 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-04-29 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-04-28 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-04-28 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | flydsl implementation of a16w16 gemm | @omuhamma | draft | 2026-04-13 | 2026-04-28 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-04-28 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-04-28 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-04-27 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-04-25 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | open | 2026-04-24 | 2026-04-24 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-04-24 |
| [#2512](https://github.com/ROCm/aiter/pull/2512) | [TRITON][GLUON] Unified attention 2d gluon kernel | @cagrikymk | draft | 2026-03-27 | 2026-04-24 |
| [#2885](https://github.com/ROCm/aiter/pull/2885) | Implement TurboQuant | @waqahmed-amd-fi | draft | 2026-04-23 | 2026-04-23 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | draft | 2026-04-22 | 2026-04-23 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-04-23 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | Add initial Windows support | @0xDELUXA | draft | 2026-04-11 | 2026-04-22 |
| [#2862](https://github.com/ROCm/aiter/pull/2862) | Bump CK for a stride fix in CKTile Block-Scale GEMM | @samremes | draft | 2026-04-22 | 2026-04-22 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-04-22 |
| [#2730](https://github.com/ROCm/aiter/pull/2730) | introduce g1u0 smoothquant int8 fused moe : fused_moe_gelu_s... | @tingqli | open | 2026-04-14 | 2026-04-22 |
| [#2806](https://github.com/ROCm/aiter/pull/2806) | [FLYDSL]: flydsl-0.1.4+20260420.23f59ab | @xudoyuan | open | 2026-04-20 | 2026-04-22 |
| [#2844](https://github.com/ROCm/aiter/pull/2844) | aiter/__init__: per-module try/except so the first broken op... | @ChuanLi1101 | open | 2026-04-21 | 2026-04-21 |
| [#2839](https://github.com/ROCm/aiter/pull/2839) | fix(build): add missing c10/hip/HIPException.h include in ga... | @ChuanLi1101 | open | 2026-04-21 | 2026-04-21 |
| [#2830](https://github.com/ROCm/aiter/pull/2830) | fav3 kernel with improved softmax | @antsaukk | draft | 2026-04-21 | 2026-04-21 |
| [#2613](https://github.com/ROCm/aiter/pull/2613) | add a8w8 gemm config for gfx942 | @wangxunx | open | 2026-04-03 | 2026-04-21 |
| [#2822](https://github.com/ROCm/aiter/pull/2822) | [ROCm][Perf] Optimize batched_gemm_a16wfp4 kernel — 2.97x mi... | @rbrugaro-amd | draft | 2026-04-20 | 2026-04-20 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-04-20 |
| [#2492](https://github.com/ROCm/aiter/pull/2492) | [Triton] [Gluon] [GFX12] add MLA triton and gluon kernel | @k50112113 | open | 2026-03-26 | 2026-04-20 |
| [#2472](https://github.com/ROCm/aiter/pull/2472) | [Triton] [Gluon] [GFX12] add UA3D gluon kernel for gfx12 | @k50112113 | open | 2026-03-25 | 2026-04-20 |
| [#2815](https://github.com/ROCm/aiter/pull/2815) | Port 3-stage pipelining from MXFP4 dense kernel to MoE a4w4 ... | @Boss2002n | draft | 2026-04-20 | 2026-04-20 |
| [#2813](https://github.com/ROCm/aiter/pull/2813) | update ds a8w8 moe config | @XiaobingSuper | draft | 2026-04-20 | 2026-04-20 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-04-20 |
| [#2605](https://github.com/ROCm/aiter/pull/2605) | fix: replace hardcoded /opt/rocm paths with ROCM_HOME env va... | @zufayu | open | 2026-04-03 | 2026-04-20 |
| [#2789](https://github.com/ROCm/aiter/pull/2789) | gemma quant | @ganyi1996ppo | open | 2026-04-19 | 2026-04-20 |
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-04-20 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-04-17 |
| [#2779](https://github.com/ROCm/aiter/pull/2779) | [Don't merge] Gluon pa bad case reproducer | @ganyi1996ppo | draft | 2026-04-17 | 2026-04-17 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-04-17 |
| [#2585](https://github.com/ROCm/aiter/pull/2585) | feat(mla): support nhead < 16 in MLA decode via transparent ... | @ChuanLi1101 | open | 2026-04-01 | 2026-04-17 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-04-16 |
| [#2647](https://github.com/ROCm/aiter/pull/2647) | refactor_hip_kernel | @amd-ruitang3 | open | 2026-04-08 | 2026-04-16 |
| [#2764](https://github.com/ROCm/aiter/pull/2764) | [Triton] Fix Flash Attention Cuda Graphs issues | @micmelesse | draft | 2026-04-16 | 2026-04-16 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-04-16 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-04-15 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-04-14 |
| [#2179](https://github.com/ROCm/aiter/pull/2179) | Adds the ability to build static archives in addition to sha... | @Micky774 | open | 2026-03-04 | 2026-04-14 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-04-14 |
| [#2369](https://github.com/ROCm/aiter/pull/2369) | [Bugfix] Handle expert groups > 32 in biased_grouped_topk | @ianschenck | open | 2026-03-20 | 2026-04-14 |
| [#2406](https://github.com/ROCm/aiter/pull/2406) | Add operator performance benchmark CI workflow | @sunway513 | open | 2026-03-22 | 2026-04-14 |
| [#2409](https://github.com/ROCm/aiter/pull/2409) | Add gfx950 Triton GEMM tuning configs for DeepSeek-R1 shapes | @sunway513 | open | 2026-03-22 | 2026-04-14 |
| [#2417](https://github.com/ROCm/aiter/pull/2417) | feat: CK-free shim + Triton MLA for (gfx1250) | @sunway513 | open | 2026-03-22 | 2026-04-14 |
| [#2374](https://github.com/ROCm/aiter/pull/2374) | [Bugfix][gfx950] Force 1-stage MoE assembly kernels for FP8 ... | @maeehart | open | 2026-03-20 | 2026-04-14 |
| [#2401](https://github.com/ROCm/aiter/pull/2401) | Fix kernel map collision on MGPU context | @Micky774 | open | 2026-03-20 | 2026-04-14 |
| [#2504](https://github.com/ROCm/aiter/pull/2504) | [TRITON] Unified attention benchmark | @juuso-oskari | open | 2026-03-27 | 2026-04-14 |
| [#2530](https://github.com/ROCm/aiter/pull/2530) | [DO NOT MERG] CI: test switch MI35x runners to DPX labels | @gyohuangxin | open | 2026-03-30 | 2026-04-14 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-04-14 |
| [#2432](https://github.com/ROCm/aiter/pull/2432) | Shared/triton gfx12 | @Boss2002n | draft | 2026-03-23 | 2026-04-14 |
| [#2429](https://github.com/ROCm/aiter/pull/2429) | add README for gluon kernels | @Dewei-Wang-sh | open | 2026-03-23 | 2026-04-14 |
| [#2340](https://github.com/ROCm/aiter/pull/2340) | feat: add INT8/INT4 quantization support for 2-stage ASM MoE... | @amd-zfyu | open | 2026-03-19 | 2026-04-14 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-04-14 |
| [#2478](https://github.com/ROCm/aiter/pull/2478) | Fix GPU memory access fault in CK MoE FP4 kernel with Expert... | @M4jupitercannon | open | 2026-03-26 | 2026-04-14 |
| [#2350](https://github.com/ROCm/aiter/pull/2350) | [gfx1201] Added tuned gemm_a8w8_configs for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-04-14 |
| [#2351](https://github.com/ROCm/aiter/pull/2351) | [gfx1201] Enable quantization kernels for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-04-14 |
| [#2352](https://github.com/ROCm/aiter/pull/2352) | [gfx1201] Enable RMSNorm support for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-04-14 |
| [#2565](https://github.com/ROCm/aiter/pull/2565) | Unify FlyDSL W4A4/G1U0 updates and tuning fixes | @rujiacai | open | 2026-04-01 | 2026-04-14 |
| [#2355](https://github.com/ROCm/aiter/pull/2355) | Fix ASM I8 GEMM: split the M dimension into chunks that keep... | @xudonlyu | open | 2026-03-19 | 2026-04-14 |
| [#2443](https://github.com/ROCm/aiter/pull/2443) | [FEAT] add enable_ck = 0 for dispatching | @HaonanWang98 | open | 2026-03-24 | 2026-04-14 |
| [#2337](https://github.com/ROCm/aiter/pull/2337) | GFX1250 Gluon MoE A4W4 Kernel | @farlukas | draft | 2026-03-18 | 2026-04-14 |
| [#2362](https://github.com/ROCm/aiter/pull/2362) | Gluon kernel for a16w16 gemm | @omuhamma | draft | 2026-03-19 | 2026-04-14 |
| [#2488](https://github.com/ROCm/aiter/pull/2488) | GEMMa8w8 blockscale gluon gfx12 kernel v2 | @amirumoAMD | open | 2026-03-26 | 2026-04-14 |
| [#2314](https://github.com/ROCm/aiter/pull/2314) | Add MPerBlock=128 tile size for blockscale FP8 MoE kernels | @ChuanLi1101 | open | 2026-03-17 | 2026-04-14 |
| [#2622](https://github.com/ROCm/aiter/pull/2622) | [FlyDSL] Tune MXFP4 MOE stage1 tile configs for DeepSeek-R1 | @sunway513 | open | 2026-04-05 | 2026-04-14 |
| [#2554](https://github.com/ROCm/aiter/pull/2554) | Remove torch dependency from module_moe_asm | @zufayu | open | 2026-03-31 | 2026-04-14 |
| [#2559](https://github.com/ROCm/aiter/pull/2559) | Kimi 128k tuned config(TP4&TP8) | @inkcherry | open | 2026-03-31 | 2026-04-14 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-04-14 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-04-14 |
| [#2640](https://github.com/ROCm/aiter/pull/2640) | Restore CKTile MOE tuning and add between-stage quant fairne... | @amd-yashagar | open | 2026-04-07 | 2026-04-14 |
| [#2632](https://github.com/ROCm/aiter/pull/2632) | [config] Add bf16 tuned GEMM config for Kimi-K2.5 on MI355 (... | @akao-amd | open | 2026-04-07 | 2026-04-14 |
| [#2509](https://github.com/ROCm/aiter/pull/2509) | [Triton] [Gluon] [GFX12] Add gluon gemm for a8w8 MoE blocksc... | @nsusanto | open | 2026-03-27 | 2026-04-14 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-04-14 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-04-14 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-04-14 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-04-14 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-04-14 |
| [#2692](https://github.com/ROCm/aiter/pull/2692) | [TRITON][GLUON] Remove support to Gluon API older than the o... | @brunomazzottiamd | draft | 2026-04-10 | 2026-04-14 |
| [#2615](https://github.com/ROCm/aiter/pull/2615) | Add pytest for fmha_v3_varlen_fwd to trigger module_fmha_v3_... | @Copilot | draft | 2026-04-03 | 2026-04-14 |
| [#2737](https://github.com/ROCm/aiter/pull/2737) | Revert max_size from 1GB to 128MB to fix KV cache regression | @AMD-yanfeiwang | draft | 2026-04-14 | 2026-04-14 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-04-14 |
| [#1629](https://github.com/ROCm/aiter/pull/1629) | disable 16bit computetype | @Bernard-Liu | open | 2025-12-12 | 2026-03-28 |
| [#1565](https://github.com/ROCm/aiter/pull/1565) | MoE Fusions | @shikamd123 | open | 2025-12-04 | 2026-03-28 |
| [#1940](https://github.com/ROCm/aiter/pull/1940) | Add CODEOWNERS file | @azaidy | open | 2026-01-31 | 2026-03-27 |
| [#2469](https://github.com/ROCm/aiter/pull/2469) | Adding gluon benchmark for gfx1250 | @omuhamma | open | 2026-03-25 | 2026-03-25 |
| [#2465](https://github.com/ROCm/aiter/pull/2465) | commit | @Boss2002n | draft | 2026-03-25 | 2026-03-25 |
| [#2454](https://github.com/ROCm/aiter/pull/2454) | added gfx1250 gemm_a8w8 kernel, test, and bench support | @ahmed-bsod | draft | 2026-03-24 | 2026-03-24 |
| [#2224](https://github.com/ROCm/aiter/pull/2224) | Add `Quantype.per_1x128` support to fused MoE testing | @jakki-amd | open | 2026-03-09 | 2026-03-19 |
| [#2338](https://github.com/ROCm/aiter/pull/2338) | feat: parallel JIT warmup for faster server startup | @sunway513 | draft | 2026-03-18 | 2026-03-18 |
| [#2228](https://github.com/ROCm/aiter/pull/2228) | [TRITON] Moe a8w4 gluon gfx1250 | @lburzawa | open | 2026-03-09 | 2026-03-18 |
| [#2148](https://github.com/ROCm/aiter/pull/2148) | Add GemmaRMSNorm | @apinge | open | 2026-03-02 | 2026-03-18 |
| [#1129](https://github.com/ROCm/aiter/pull/1129) | [CK_TILE] Temporarily disable k length=1 test cases in seqen... | @Jeff-Huang | open | 2025-10-03 | 2026-03-18 |
| [#1506](https://github.com/ROCm/aiter/pull/1506) | [CK Tile] Fix FMHA LSE calculation and potential division by... | @Jeff-Huang | open | 2025-11-28 | 2026-03-18 |
| [#918](https://github.com/ROCm/aiter/pull/918) | add gfx1201 and gfx908 definitions | @muhammadn | open | 2025-08-28 | 2026-03-18 |
| [#1403](https://github.com/ROCm/aiter/pull/1403) | Multinode_build | @zufayu | open | 2025-11-13 | 2026-03-18 |
| [#1516](https://github.com/ROCm/aiter/pull/1516) | bugs fix prebuild=1/2 | @zufayu | open | 2025-12-01 | 2026-03-18 |
| [#1704](https://github.com/ROCm/aiter/pull/1704) | rd only env | @zufayu | open | 2025-12-22 | 2026-03-18 |
| [#1923](https://github.com/ROCm/aiter/pull/1923) | Fmoe_fp32_pro | @zufayu | open | 2026-01-28 | 2026-03-18 |
| [#1811](https://github.com/ROCm/aiter/pull/1811) | Specify hsa path relative to aiter lib*so compiled | @wangye805 | open | 2026-01-12 | 2026-03-18 |
| [#1484](https://github.com/ROCm/aiter/pull/1484) | [TRITON] Extend fp8 mqa tests | @cagrikymk | open | 2025-11-24 | 2026-03-18 |
| [#1771](https://github.com/ROCm/aiter/pull/1771) | Add activation and mul and per-token dynamic FP8 quant fusio... | @kliuae | open | 2026-01-06 | 2026-03-18 |
| [#1831](https://github.com/ROCm/aiter/pull/1831) | [Triton] Remove mod N in ptr offsets for preshuffle gemms | @k50112113 | open | 2026-01-13 | 2026-03-18 |
| [#1646](https://github.com/ROCm/aiter/pull/1646) | Rmove head check in test_mla and add report log | @13524182838 | open | 2025-12-15 | 2026-03-18 |
| [#906](https://github.com/ROCm/aiter/pull/906) | Benchmark Gemm from Models | @wuhuikx | open | 2025-08-28 | 2026-03-18 |
| [#913](https://github.com/ROCm/aiter/pull/913) | Benchmark module level cases | @wuhuikx | open | 2025-08-28 | 2026-03-18 |
| [#1060](https://github.com/ROCm/aiter/pull/1060) | integrated ck-tile bf16 gemm into aiter | @eliotwang | open | 2025-09-23 | 2026-03-18 |
| [#1076](https://github.com/ROCm/aiter/pull/1076) | Integrated ck_tile_a8w8_blockscale into aiter | @eliotwang | open | 2025-09-25 | 2026-03-18 |
| [#1531](https://github.com/ROCm/aiter/pull/1531) | Bench unified attention | @Chi-Chu319 | open | 2025-12-02 | 2026-03-18 |
| [#1925](https://github.com/ROCm/aiter/pull/1925) | [FIX] address NaN values in KV cache for unused tokens in pa... | @Wanzizhu | open | 2026-01-29 | 2026-03-18 |
| [#1909](https://github.com/ROCm/aiter/pull/1909) | topk_sigmoid: 1.66x faster DPP kernel with 256-expert and FP... | @stevenarellano | open | 2026-01-26 | 2026-03-18 |
| [#1343](https://github.com/ROCm/aiter/pull/1343) | Add unit-test for ragged layout transformation | @mqhc2020 | open | 2025-11-05 | 2026-03-18 |
| [#1528](https://github.com/ROCm/aiter/pull/1528) | [GEMM & FMOE][Config & Bugfix] add a8w8 ptpc tuned config fo... | @ZLkanyo009 | open | 2025-12-02 | 2026-03-18 |
| [#1123](https://github.com/ROCm/aiter/pull/1123) | lean_attention: add GQA support across kernel and wrapper; a... | @kesavanramakrishnan | open | 2025-10-01 | 2026-03-18 |
| [#1441](https://github.com/ROCm/aiter/pull/1441) | Update calculate_max_output_tiles to support configs | @kesavanramakrishnan | open | 2025-11-19 | 2026-03-18 |
| [#1583](https://github.com/ROCm/aiter/pull/1583) | Fix racing between different devices when read/write combine... | @huishi-hs | open | 2025-12-08 | 2026-03-18 |
| [#1882](https://github.com/ROCm/aiter/pull/1882) | use FAV3_ON and FAV2_ON for mha bwd instead of ONLY_FAV3 | @yuguo68 | open | 2026-01-21 | 2026-03-18 |
| [#989](https://github.com/ROCm/aiter/pull/989) | tune w8a8 gemm and fmoe for qwen 235b on MI355 | @zhuyuhua-v | open | 2025-09-11 | 2026-03-18 |
| [#1094](https://github.com/ROCm/aiter/pull/1094) | [MI300X] tune Gemm performance for llama 70b/405b | @zhuyuhua-v | open | 2025-09-26 | 2026-03-18 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-03-18 |
| [#1177](https://github.com/ROCm/aiter/pull/1177) | fix torch compile when using fp8 fla | @guangzlu | open | 2025-10-13 | 2026-03-18 |
| [#1763](https://github.com/ROCm/aiter/pull/1763) | add rms library which supports both multithreaded and distri... | @amgddm | open | 2025-12-31 | 2026-03-18 |
| [#1808](https://github.com/ROCm/aiter/pull/1808) | Add AITER_ASM_ROOT env to specify HSA path w/o GPU arch | @ipanfilo | open | 2026-01-11 | 2026-03-18 |
| [#1613](https://github.com/ROCm/aiter/pull/1613) | Add support to a8w8_ck_moe_blk_gemm1 splitk | @huaiguxu | open | 2025-12-11 | 2026-03-18 |
| [#1195](https://github.com/ROCm/aiter/pull/1195) | [Triton] A8W8 blockscale GEMM tuning for Qwen3 | @anhminhnguyenhoang | open | 2025-10-14 | 2026-03-18 |
| [#1064](https://github.com/ROCm/aiter/pull/1064) | Add fp8 default q-scale calculation | @amd-xiaoyu12 | open | 2025-09-24 | 2026-03-18 |
| [#1136](https://github.com/ROCm/aiter/pull/1136) | [BugFix] Change Vskip Selection Logic | @vllmellm | open | 2025-10-08 | 2026-03-18 |
| [#1031](https://github.com/ROCm/aiter/pull/1031) | [TRITON] Fix GEMM a16w16 and a8w8 splitK Triton | @lucas-santos-amd | open | 2025-09-18 | 2026-03-18 |
| [#1179](https://github.com/ROCm/aiter/pull/1179) | [MI35X] Enhance mha bwd varlen kernels | @slippedJim | open | 2025-10-13 | 2026-03-18 |
| [#1294](https://github.com/ROCm/aiter/pull/1294) | Temporary PR for Fixing a PA issue. Will Remove once the own... | @peizhang56 | open | 2025-10-29 | 2026-03-18 |
| [#985](https://github.com/ROCm/aiter/pull/985) | [TRITON]: Optimize FF Fused Kernels | @willzhou-amd | open | 2025-09-10 | 2026-03-18 |
| [#1976](https://github.com/ROCm/aiter/pull/1976) | Jun/smoothquant update yadai rebase v2 0204 | @yadaish | open | 2026-02-05 | 2026-03-18 |
| [#1452](https://github.com/ROCm/aiter/pull/1452) | reproduce the mha fwd error with loading pt files | @minmengdie | open | 2025-11-20 | 2026-03-18 |
| [#1982](https://github.com/ROCm/aiter/pull/1982) | mla_sparse support page64 and 3buffer | @minmengdie | open | 2026-02-05 | 2026-03-18 |
| [#1023](https://github.com/ROCm/aiter/pull/1023) | fmha bwd fp32 asm kernel | @javier-amd | open | 2025-09-18 | 2026-03-18 |
| [#1084](https://github.com/ROCm/aiter/pull/1084) | [config] tune gemm and moe for qwen3 480b ptpc model on MI30... | @gbyu-amd | open | 2025-09-25 | 2026-03-18 |
| [#1492](https://github.com/ROCm/aiter/pull/1492) | [main] MI355 a8w8 test_moe_2stage.py assert check always fai... | @xudoyuan | open | 2025-11-26 | 2026-03-18 |
| [#1863](https://github.com/ROCm/aiter/pull/1863) | feat: Add fused attention output + residual + RMSNorm kernel | @ChuanLi1101 | open | 2026-01-17 | 2026-03-18 |
| [#2008](https://github.com/ROCm/aiter/pull/2008) | Update FMHA calls with new MX qscale related args | @ex-rzr | open | 2026-02-09 | 2026-03-18 |
| [#2227](https://github.com/ROCm/aiter/pull/2227) | Add Triton fallback for fused_rope_rms (QKNorm+RoPE) | @sunway513 | open | 2026-03-09 | 2026-03-18 |
| [#2284](https://github.com/ROCm/aiter/pull/2284) | Use arch-aware fp8 dtype in tests for gfx1250 support | @sunway513 | open | 2026-03-15 | 2026-03-18 |
| [#2301](https://github.com/ROCm/aiter/pull/2301) | gfx1250 C++ JIT build support | @sunway513 | open | 2026-03-16 | 2026-03-18 |
| [#1904](https://github.com/ROCm/aiter/pull/1904) | Temp skip batch prefill tests for causal/logits=False | @Jeff-Huang | open | 2026-01-26 | 2026-03-18 |
| [#2248](https://github.com/ROCm/aiter/pull/2248) |  [Kernel] Add 2-stage ASM MoE INT8 kernels     | @zufayu | open | 2026-03-11 | 2026-03-18 |
| [#2308](https://github.com/ROCm/aiter/pull/2308) | Refactor MoE ASM ops: remove PyTorch/pybind dependency, use ... | @zufayu | open | 2026-03-17 | 2026-03-18 |
| [#2201](https://github.com/ROCm/aiter/pull/2201) | mha: make impl_ptr_map caceh in fmha_v3_bwd and fmha_fwd_v3 ... | @xinyazhang | open | 2026-03-06 | 2026-03-18 |
| [#2056](https://github.com/ROCm/aiter/pull/2056) | Enabling FPMX4 GEMM on non-FPMX4 devices (Navi31 in particul... | @ekuznetsov139 | open | 2026-02-16 | 2026-03-18 |
| [#2068](https://github.com/ROCm/aiter/pull/2068) | Optimize top-k top-p sampler kernel by prefetching data | @aryaman-gupta | open | 2026-02-20 | 2026-03-18 |
| [#2071](https://github.com/ROCm/aiter/pull/2071) | Add CLAUDE.md and skill for tune_ck_gemm_a8w8_blockscale. | @sabreshao | open | 2026-02-22 | 2026-03-18 |
| [#2244](https://github.com/ROCm/aiter/pull/2244) | [Fix] result after topK becomes 0 caused by error propagatio... | @kensclin | open | 2026-03-10 | 2026-03-18 |
| [#1888](https://github.com/ROCm/aiter/pull/1888) | [TRITON] support.conv3d.triton.kernel | @kxyk99 | open | 2026-01-22 | 2026-03-18 |
| [#2245](https://github.com/ROCm/aiter/pull/2245) | Added HSA header flag passthrough to `compile.py` | @Micky774 | open | 2026-03-10 | 2026-03-18 |
| [#2283](https://github.com/ROCm/aiter/pull/2283) | Store swa kv for sglang | @kkHuang-amd | open | 2026-03-15 | 2026-03-18 |
| [#2019](https://github.com/ROCm/aiter/pull/2019) | feat(mla_prl_ps): optimize get_ps_metadata & enhance ut | @dbyoung18 | open | 2026-02-10 | 2026-03-18 |
| [#2143](https://github.com/ROCm/aiter/pull/2143) | fix: quant dispatch bugs and dead code cleanup in quant.py | @brucechanglongxu | open | 2026-03-01 | 2026-03-18 |
| [#2133](https://github.com/ROCm/aiter/pull/2133) | add asm_mla csv | @ljl1302924199 | open | 2026-02-28 | 2026-03-18 |
| [#1936](https://github.com/ROCm/aiter/pull/1936) | [FMHA] Add Architecture safety check for enable_gluon_pa_mqa... | @raikonenfnu | open | 2026-01-31 | 2026-03-18 |
| [#1996](https://github.com/ROCm/aiter/pull/1996) | Fixed Batched GEMM Benchmark for a16wfp4 - Import and Functi... | @nidal567 | open | 2026-02-06 | 2026-03-18 |
| [#2297](https://github.com/ROCm/aiter/pull/2297) | Made a new branch to add necessary files for batched_gemm_a1... | @nidal567 | open | 2026-03-16 | 2026-03-18 |
| [#2088](https://github.com/ROCm/aiter/pull/2088) | opt_csrc_torch_header | @amd-ruitang3 | open | 2026-02-24 | 2026-03-18 |
| [#1980](https://github.com/ROCm/aiter/pull/1980) | [Triton]-Flashattn - sync the changes from tridao PR2217 | @tianwyan | open | 2026-02-05 | 2026-03-18 |
| [#2138](https://github.com/ROCm/aiter/pull/2138) | Add nhead=8 support for MLA decode via padding to nhead=16 | @ClementLinCF | open | 2026-02-28 | 2026-03-18 |
| [#2214](https://github.com/ROCm/aiter/pull/2214) | Nightly workflows for aiter | @kiran-thumma | open | 2026-03-09 | 2026-03-18 |
| [#1864](https://github.com/ROCm/aiter/pull/1864) | Fix: Handle non-aligned K dimension for scale loading in gem... | @yichiche | open | 2026-01-18 | 2026-03-18 |
| [#2091](https://github.com/ROCm/aiter/pull/2091) | docs: add missing dependency install steps to contributor gu... | @tuukkjs | open | 2026-02-24 | 2026-03-18 |
| [#1981](https://github.com/ROCm/aiter/pull/1981) | Optimization for _fused_add_rmsnorm_pad Kernel | @amd-wsung102 | open | 2026-02-05 | 2026-03-18 |
| [#2154](https://github.com/ROCm/aiter/pull/2154) | Adding benchmark for MoeFlatmmKernel | @amd-wsung102 | open | 2026-03-02 | 2026-03-18 |
| [#2254](https://github.com/ROCm/aiter/pull/2254) | Capture git errors in case git doesn't exist | @t2h-fb | open | 2026-03-11 | 2026-03-18 |
| [#1918](https://github.com/ROCm/aiter/pull/1918) | Opt scaled_act_and_mul | @yzhou103 | open | 2026-01-28 | 2026-03-18 |
| [#2277](https://github.com/ROCm/aiter/pull/2277) | [Triton MoE] Add optimized Gluon kernel for AMD CDNA3 with K... | @jwu10003 | open | 2026-03-14 | 2026-03-18 |
| [#2197](https://github.com/ROCm/aiter/pull/2197) | Add Gluon GEMM tutorial | @mengfei-jiang | open | 2026-03-06 | 2026-03-18 |
| [#2028](https://github.com/ROCm/aiter/pull/2028) | [MOE]: add qwen3-VL UT | @xudoyuan | open | 2026-02-11 | 2026-03-18 |
| [#2161](https://github.com/ROCm/aiter/pull/2161) | Small refactor for compile_ops control flow for better perfo... | @SampoAMD | open | 2026-03-03 | 2026-03-18 |
| [#2306](https://github.com/ROCm/aiter/pull/2306) | [TRITON] Gluon extend-attention kernel for gfx950 | @realvideogame2 | open | 2026-03-17 | 2026-03-18 |
| [#2296](https://github.com/ROCm/aiter/pull/2296) | [fix]: car warpreduce and ag dispatch | @TennyWang1223 | open | 2026-03-16 | 2026-03-18 |
| [#1232](https://github.com/ROCm/aiter/pull/1232) | [TRITON] FP8 blockscale fix and finetuning for Deepseek on M... | @juuso-oskari | open | 2025-10-21 | 2025-11-24 |
| [#1285](https://github.com/ROCm/aiter/pull/1285) | PA Fix to avoid paged attention v2 | @peizhang56 | open | 2025-10-29 | 2025-10-29 |
| [#1257](https://github.com/ROCm/aiter/pull/1257) | Fused GEMM + SILU for Llama4 Maverick | @juuso-oskari | draft | 2025-10-24 | 2025-10-28 |
| [#1228](https://github.com/ROCm/aiter/pull/1228) | Enable custom op and avoid graph breaks (#740) | @divakar-amd | open | 2025-10-21 | 2025-10-21 |
| [#1222](https://github.com/ROCm/aiter/pull/1222) | add tune file for moe ops in deepseek | @PerryZhang01 | open | 2025-10-19 | 2025-10-19 |
| [#1091](https://github.com/ROCm/aiter/pull/1091) | add module_gemm_a8w8_blockscale in aot_build list | @ZJLi2013 | open | 2025-09-26 | 2025-09-26 |
| [#1028](https://github.com/ROCm/aiter/pull/1028) | Fix rocm 7 for aiter | @xudonlyu | open | 2025-09-18 | 2025-09-18 |
| [#3209](https://github.com/ROCm/aiter/pull/3209) | Revert kimik2_fp4_tuned_fmoe.csv changes from PR #3004 | @okorzh-amd | merged | 2026-05-15 | 2026-05-16 |
| [#2968](https://github.com/ROCm/aiter/pull/2968) | [GFX1250] Add Triton TDM to MoE Metadata kernels  | @nsusanto | merged | 2026-04-29 | 2026-05-15 |
| [#2494](https://github.com/ROCm/aiter/pull/2494) | [TRITON] Moe a8w4 on gfx1250 | @lburzawa | merged | 2026-03-26 | 2026-05-15 |
| [#2578](https://github.com/ROCm/aiter/pull/2578) | silu_mul_fused kernel | @Chi-Chu319 | merged | 2026-04-01 | 2026-05-15 |
| [#3187](https://github.com/ROCm/aiter/pull/3187) | [TRITON] Remove precision ieee from non-F32 tl.dots | @vgokhale | merged | 2026-05-14 | 2026-05-15 |
| [#3174](https://github.com/ROCm/aiter/pull/3174) | [TRITON][GLUON] Add fp8_mqa_logits gluon kernel for gfx950 a... | @cagrikymk | merged | 2026-05-13 | 2026-05-15 |
| [#3224](https://github.com/ROCm/aiter/pull/3224) | Revert "[TRITON][GLUON] Add fp8_mqa_logits gluon kernel for ... | @valarLip | merged | 2026-05-15 | 2026-05-15 |
| [#3215](https://github.com/ROCm/aiter/pull/3215) | CI: add aiter test GPU visibility diagnostics | @gyohuangxin | merged | 2026-05-15 | 2026-05-15 |
| [#3189](https://github.com/ROCm/aiter/pull/3189) | [custom_all_reduce] qknorm_allreduce_fusion_kernel_2stage: g... | @akii96 | merged | 2026-05-14 | 2026-05-15 |
| [#3073](https://github.com/ROCm/aiter/pull/3073) | bump composable_kernel to include rocm-libraries PR #6914 | @arthurliu1998 | merged | 2026-05-07 | 2026-05-15 |
| [#3185](https://github.com/ROCm/aiter/pull/3185) | Add fused DeepSeek-V3.2 indexer cache kernel | @XiaobingSuper | merged | 2026-05-14 | 2026-05-15 |
| [#3116](https://github.com/ROCm/aiter/pull/3116) | perf(moe_gemm_a8w4): tune block_m=32 & block_m=128 config fo... | @JohnQinAMD | merged | 2026-05-11 | 2026-05-14 |
| [#3190](https://github.com/ROCm/aiter/pull/3190) | [Triton] [ATOM] DSV4 fusion phase2 | @k50112113 | merged | 2026-05-14 | 2026-05-14 |
| [#3182](https://github.com/ROCm/aiter/pull/3182) | fix gather mem violation | @jiayyu | merged | 2026-05-14 | 2026-05-14 |
| [#3145](https://github.com/ROCm/aiter/pull/3145) | add silu_and_mul_quant and Opt silu_and_mul | @yzhou103 | merged | 2026-05-12 | 2026-05-14 |
| [#3144](https://github.com/ROCm/aiter/pull/3144) | Fusion allreduce old add rmsnorm | @IzacharyI | merged | 2026-05-12 | 2026-05-14 |
| [#3170](https://github.com/ROCm/aiter/pull/3170) | docs: add AITER May 2026 newsletter | @sunway513 | merged | 2026-05-13 | 2026-05-14 |
| [#3171](https://github.com/ROCm/aiter/pull/3171) | Remove triton backend in dsv4_bf16_tuned_gemm.csv | @junhaha666 | merged | 2026-05-13 | 2026-05-14 |
| [#3134](https://github.com/ROCm/aiter/pull/3134) | So/flydsl xcd remap v2 | @solinzby1 | merged | 2026-05-12 | 2026-05-14 |
| [#3142](https://github.com/ROCm/aiter/pull/3142) | Fix adapt diff head shape | @IzacharyI | merged | 2026-05-12 | 2026-05-14 |
| [#3046](https://github.com/ROCm/aiter/pull/3046) | Add nhead128,1 mask=1 to support mtp < 4, nhead128,4 fold to... | @fangche123 | merged | 2026-05-06 | 2026-05-14 |
| [#2948](https://github.com/ROCm/aiter/pull/2948) | [CK_TILE] Use Unified Workspace for FMHA BWD | @DDEle | merged | 2026-04-29 | 2026-05-14 |
| [#3166](https://github.com/ROCm/aiter/pull/3166) | [Bugfix][Triton] Honor `transpose_bm` in batched_gemm_a16wfp... | @xaguilar-amd | merged | 2026-05-13 | 2026-05-13 |
| [#2902](https://github.com/ROCm/aiter/pull/2902) | feat(triton/rope): fused QKV split, QK RMSNorm, RoPE, and pa... | @hellozhuo-amd | merged | 2026-04-24 | 2026-05-13 |
| [#3132](https://github.com/ROCm/aiter/pull/3132) | [Triton] Add s_barrier to sync waves after writing expert hi... | @vgokhale | merged | 2026-05-11 | 2026-05-13 |
| [#3163](https://github.com/ROCm/aiter/pull/3163) | minimax ops: support fused qknorm+allreduce kernel | @xytpai | merged | 2026-05-13 | 2026-05-13 |
| [#3135](https://github.com/ROCm/aiter/pull/3135) | [FLYDSL] Optimize GDR decode kernel | @xytpai | merged | 2026-05-12 | 2026-05-13 |
| [#3154](https://github.com/ROCm/aiter/pull/3154) | [TRITON] Fix bug in `bench_gmm.py` | @brunomazzottiamd | merged | 2026-05-12 | 2026-05-13 |
| [#2967](https://github.com/ROCm/aiter/pull/2967) | [TRITON] mHC-post: Apply post-stream and res-stream mixing | @waqahmed-amd-fi | merged | 2026-04-29 | 2026-05-13 |
| [#2920](https://github.com/ROCm/aiter/pull/2920) | refactor and unify triton/bench_fav3_sage.py scripts | @jcaraban | merged | 2026-04-27 | 2026-05-13 |
| [#3137](https://github.com/ROCm/aiter/pull/3137) | [qk_rmsnorm_group_quant] refactor hip kl | @amd-ruitang3 | merged | 2026-05-12 | 2026-05-13 |
| [#3136](https://github.com/ROCm/aiter/pull/3136) | Add explicit num_stages to blockscale triton kernel to pipel... | @lijinpei-amd | merged | 2026-05-12 | 2026-05-13 |
| [#3153](https://github.com/ROCm/aiter/pull/3153) | [MoE] Align FlyDSL MXFP4 rounding | @XiaobingSuper | merged | 2026-05-12 | 2026-05-13 |
| [#3133](https://github.com/ROCm/aiter/pull/3133) | flydsl/common: per-kernel parallelism + configurable AOT poo... | @tenpercent | merged | 2026-05-12 | 2026-05-13 |
| [#3057](https://github.com/ROCm/aiter/pull/3057) | [Triton] [ATOM] DSV4 fusions phase 1 | @k50112113 | merged | 2026-05-07 | 2026-05-12 |
| [#3143](https://github.com/ROCm/aiter/pull/3143) | CI: reuse prebuilt kernels in Aiter tests | @gyohuangxin | merged | 2026-05-12 | 2026-05-12 |
| [#2976](https://github.com/ROCm/aiter/pull/2976) | mxfp4 quantize kernel | @amd-yilizhao | merged | 2026-04-30 | 2026-05-12 |
| [#3140](https://github.com/ROCm/aiter/pull/3140) | update gptoss moe tuned config for TP2 and TP8 | @XiaobingSuper | merged | 2026-05-12 | 2026-05-12 |
| [#3127](https://github.com/ROCm/aiter/pull/3127) | AiterAsmKernel: add init-time sanity checks for .co registra... | @alexioslyrakis-amd | merged | 2026-05-11 | 2026-05-12 |
| [#3124](https://github.com/ROCm/aiter/pull/3124) | Fix address overflow extra issue | @JaxChen29 | merged | 2026-05-11 | 2026-05-12 |
| [#3118](https://github.com/ROCm/aiter/pull/3118) | fix tuning test | @yzhou103 | merged | 2026-05-11 | 2026-05-12 |
| [#3126](https://github.com/ROCm/aiter/pull/3126) | CI: stabilize Aiter wheel prebuilds | @gyohuangxin | merged | 2026-05-11 | 2026-05-12 |
| [#3141](https://github.com/ROCm/aiter/pull/3141) | fix flydsl issue about cannot import name 'fly_values' flyds... | @XiaobingSuper | merged | 2026-05-12 | 2026-05-12 |
| [#3123](https://github.com/ROCm/aiter/pull/3123) | [MoE] Align Swiglu MXFP4 fused quant paths | @XiaobingSuper | merged | 2026-05-11 | 2026-05-12 |
| [#3103](https://github.com/ROCm/aiter/pull/3103) | [MOE] Special path for moe ptpc fp8, batch 1~32 with hsaco | @sammysun0711 | merged | 2026-05-09 | 2026-05-12 |
| [#3063](https://github.com/ROCm/aiter/pull/3063) | MI350 mla ps mode all bf16 cases no longer follow the foldin... | @minmengdie | merged | 2026-05-07 | 2026-05-12 |
| [#3100](https://github.com/ROCm/aiter/pull/3100) | feat(topk): optimized topk_gating kernel with sigmoid/softma... | @yzhou103 | merged | 2026-05-09 | 2026-05-12 |
| [#3121](https://github.com/ROCm/aiter/pull/3121) | [FLYDSL] bump version to 0.1.7, support 450 | @coderfeli | merged | 2026-05-11 | 2026-05-12 |
| [#3130](https://github.com/ROCm/aiter/pull/3130) | upload fleet report | @amdfaa | merged | 2026-05-11 | 2026-05-11 |
| [#3036](https://github.com/ROCm/aiter/pull/3036) | Add -o flag to bench_gmm.py for CSV output | @apicciau | merged | 2026-05-05 | 2026-05-11 |
| [#3125](https://github.com/ROCm/aiter/pull/3125) | [FLYDSL] Fix GDR decode indexing error | @xytpai | merged | 2026-05-11 | 2026-05-11 |
| [#3032](https://github.com/ROCm/aiter/pull/3032) | fix(batch_prefill): OOB page table read fix + regression tes... | @Jeff-Huang | merged | 2026-05-05 | 2026-05-11 |
| [#2918](https://github.com/ROCm/aiter/pull/2918) | CI: auto-update split test FILE_TIMES | @github-actions[bot] | merged | 2026-04-27 | 2026-05-11 |
| [#3120](https://github.com/ROCm/aiter/pull/3120) | CI: use SGLang AMD aiter CI branch | @gyohuangxin | merged | 2026-05-11 | 2026-05-11 |
| [#2646](https://github.com/ROCm/aiter/pull/2646) | [TRITON] mHC-pre: Manifold-constrained Hyper Connection  | @anhminhnguyenhoang | merged | 2026-04-07 | 2026-05-11 |
| [#3113](https://github.com/ROCm/aiter/pull/3113) | [Misc] Add DSv4-Pro BF16 tuned GEMM configs (no hipblaslt) | @valarLip | merged | 2026-05-11 | 2026-05-11 |
| [#3072](https://github.com/ROCm/aiter/pull/3072) | HK MLA: MI35x m16x8 retune, new m16x4 kernel, page_size + ma... | @ruanjm | merged | 2026-05-07 | 2026-05-11 |
| [#3086](https://github.com/ROCm/aiter/pull/3086) | Rename amd-triton to triton | @mengfei-jiang | merged | 2026-05-08 | 2026-05-11 |
| [#3087](https://github.com/ROCm/aiter/pull/3087) | perf(topk): optimize radix top-k kernel for MI308X and MI355... | @chuanbowang2026 | merged | 2026-05-08 | 2026-05-10 |
| [#3108](https://github.com/ROCm/aiter/pull/3108) | [Misc] Add pid/pname to JIT build logs + DSv4-Pro a8w8 block... | @valarLip | merged | 2026-05-10 | 2026-05-10 |
| [#3107](https://github.com/ROCm/aiter/pull/3107) | Revert "So/a8w8 bpreshuflle flydsl xcd remap" | @valarLip | merged | 2026-05-10 | 2026-05-10 |
| [#3096](https://github.com/ROCm/aiter/pull/3096) | [Triton] [ATOM] fused topk | @k50112113 | merged | 2026-05-09 | 2026-05-10 |
| [#3104](https://github.com/ROCm/aiter/pull/3104) | add limit parameter to silu_and_mul for input clamping | @yzhou103 | merged | 2026-05-09 | 2026-05-09 |
| [#3097](https://github.com/ROCm/aiter/pull/3097) | robust core.py | @amd-ruitang3 | merged | 2026-05-09 | 2026-05-09 |
| [#3101](https://github.com/ROCm/aiter/pull/3101) | Re tune gemm bf16 8192*2048 for GLM5 accurary dump | @ZhangLirong-amd | merged | 2026-05-09 | 2026-05-09 |
| [#2951](https://github.com/ROCm/aiter/pull/2951) | [MOE DSV4] flydsl a8w4 moe for dsv4 | @Zzz9990 | merged | 2026-04-29 | 2026-05-09 |
| [#3105](https://github.com/ROCm/aiter/pull/3105) | CI: show ATOM default model names | @gyohuangxin | merged | 2026-05-09 | 2026-05-09 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-05-16T09:19:07Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#789](https://github.com/ROCm/ATOM/pull/789) | fix(openai): harden chat request handling | @san-tian | open | 2026-05-14 | 2026-05-16 |
| [#809](https://github.com/ROCm/ATOM/pull/809) | [fix](deepseek): handle padded sparse indexer inputs | @wuhuikx | open | 2026-05-16 | 2026-05-16 |
| [#794](https://github.com/ROCm/ATOM/pull/794) | [WIP] MQA Logits Gluon Path Activation and New Flag | @cagrikymk | draft | 2026-05-15 | 2026-05-15 |
| [#771](https://github.com/ROCm/ATOM/pull/771) | Add mooncake dockerfile  build | @ZhangLirong-amd | open | 2026-05-13 | 2026-05-15 |
| [#805](https://github.com/ROCm/ATOM/pull/805) | [vLLM-ATOM] Fix GLM-4.7 MTP in vLLM plugin | @kliuae | open | 2026-05-15 | 2026-05-15 |
| [#750](https://github.com/ROCm/ATOM/pull/750) | [feat][ATOM-vLLM][Attention Refactor] Reconstruct the Attent... | @zejunchen-zejun | draft | 2026-05-11 | 2026-05-15 |
| [#643](https://github.com/ROCm/ATOM/pull/643) | [Draft][ATOM-SGLang][Feat] Enable Deepseek v3 MTP | @ZhiweiYan-96 | draft | 2026-04-24 | 2026-05-15 |
| [#653](https://github.com/ROCm/ATOM/pull/653) | [Enhancement] support online quantization | @haoyangli0109 | open | 2026-04-28 | 2026-05-15 |
| [#752](https://github.com/ROCm/ATOM/pull/752) | perf: flydsl gdr decode default on | @xytpai | open | 2026-05-11 | 2026-05-15 |
| [#791](https://github.com/ROCm/ATOM/pull/791) | [Triton] DSV4 fusion phase2 | @k50112113 | open | 2026-05-14 | 2026-05-14 |
| [#792](https://github.com/ROCm/ATOM/pull/792) | [Plugin][MLA] Tolerate rotary_emb=None for NoPE-only MLA mod... | @ChuanLi1101 | open | 2026-05-14 | 2026-05-14 |
| [#787](https://github.com/ROCm/ATOM/pull/787) | [fix](gpt-oss): fix quark quantized model in moe bias | @PerryZhang01 | open | 2026-05-14 | 2026-05-14 |
| [#786](https://github.com/ROCm/ATOM/pull/786) | Add DSR1-MXFP4 recipe for MI355X (Team Jons contest submissi... | @j0ons | open | 2026-05-14 | 2026-05-14 |
| [#427](https://github.com/ROCm/ATOM/pull/427) | [feat](a8w4): support a8w4 gpt oss | @PerryZhang01 | draft | 2026-03-27 | 2026-05-14 |
| [#781](https://github.com/ROCm/ATOM/pull/781) | ci(benchmark): upgrade Kimi K2.5 to K2.6 | @carlushuang | open | 2026-05-14 | 2026-05-14 |
| [#780](https://github.com/ROCm/ATOM/pull/780) | [vLLM Plugin] Upgrade vLLM version to v0.21.0 | @whx-sjtu | draft | 2026-05-14 | 2026-05-14 |
| [#549](https://github.com/ROCm/ATOM/pull/549) | [feat] Add RLHF rollout integration support (verl) | @sijyang | open | 2026-04-13 | 2026-05-14 |
| [#749](https://github.com/ROCm/ATOM/pull/749) | Add Mistral-3-8B + Qwen3-8B-FP8 + native triton attention ba... | @carlushuang | open | 2026-05-11 | 2026-05-14 |
| [#778](https://github.com/ROCm/ATOM/pull/778) | feat(server): add Anthropic Messages API endpoint (/v1/messa... | @carlushuang | open | 2026-05-13 | 2026-05-14 |
| [#779](https://github.com/ROCm/ATOM/pull/779) | [codex] DeepSeek FP4 MTP decode safeguards and MLA hooks | @josusanmartin | draft | 2026-05-13 | 2026-05-13 |
| [#533](https://github.com/ROCm/ATOM/pull/533) | [atom-vllm][DP/EP] enable DP/EP for atom-vllm | @zejunchen-zejun | draft | 2026-04-09 | 2026-05-13 |
| [#700](https://github.com/ROCm/ATOM/pull/700) | [ci] add Qwen3.5 Dense/MoE models accuracy validation and be... | @wanzhenchn | open | 2026-05-06 | 2026-05-13 |
| [#741](https://github.com/ROCm/ATOM/pull/741) | [feat][breaking] Enable prefix caching by default | @functionstackx | open | 2026-05-11 | 2026-05-13 |
| [#763](https://github.com/ROCm/ATOM/pull/763) | [MoE] adapt to triton_kernels matmul_ogs -> matmul rename | @Liang-jianhao97 | open | 2026-05-12 | 2026-05-13 |
| [#606](https://github.com/ROCm/ATOM/pull/606) | [plugin] Flux2 model support | @Phi-C | open | 2026-04-19 | 2026-05-12 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-05-11 |
| [#740](https://github.com/ROCm/ATOM/pull/740) | Fpz/chunk prefill | @jiayyu | open | 2026-05-11 | 2026-05-11 |
| [#727](https://github.com/ROCm/ATOM/pull/727) | perf: optimize GDN decode with SGLang fused recurrent kernel | @zovonoir | open | 2026-05-09 | 2026-05-09 |
| [#656](https://github.com/ROCm/ATOM/pull/656) | prefill gdr kernel enablement | @ganyi1996ppo | open | 2026-04-28 | 2026-05-09 |
| [#644](https://github.com/ROCm/ATOM/pull/644) | [vLLM-ATOM] Add profile trace parsing tool for vLLM-ATOM | @kliuae-amd | draft | 2026-04-24 | 2026-05-08 |
| [#715](https://github.com/ROCm/ATOM/pull/715) | docs: deploy compressor page with docs workflow | @gyohuangxin | open | 2026-05-07 | 2026-05-08 |
| [#708](https://github.com/ROCm/ATOM/pull/708) | perf: fused Triton kernels for Qwen3.5 RMSNorm and MRoPE | @zovonoir | open | 2026-05-07 | 2026-05-07 |
| [#641](https://github.com/ROCm/ATOM/pull/641) | feat: add Step-3.5-Flash support and fix MoE weight shufflin... | @LJ-underdog | draft | 2026-04-23 | 2026-05-06 |
| [#695](https://github.com/ROCm/ATOM/pull/695) | [vLLM-ATOM benchmark] add GLM-4.7 and Minimax-2.5 to vLLM-AT... | @gbyu-amd | open | 2026-05-06 | 2026-05-06 |
| [#675](https://github.com/ROCm/ATOM/pull/675) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-04-30 | 2026-04-30 |
| [#654](https://github.com/ROCm/ATOM/pull/654) | Support Mimo-v2.5-Pro | @wufann | draft | 2026-04-28 | 2026-04-29 |
| [#632](https://github.com/ROCm/ATOM/pull/632) | fix: correct MXFP4 MoE weight shuffle for Quark models (Mini... | @thpereir | draft | 2026-04-22 | 2026-04-22 |
| [#627](https://github.com/ROCm/ATOM/pull/627) | Gemma16w16 integration | @amirumoAMD | draft | 2026-04-21 | 2026-04-21 |
| [#622](https://github.com/ROCm/ATOM/pull/622) | [atom-vllm] use aiter greedy sampler | @zejunchen-zejun | draft | 2026-04-21 | 2026-04-21 |
| [#613](https://github.com/ROCm/ATOM/pull/613) | [feat](minimax): refactor rmsnorm for minimax | @PerryZhang01 | open | 2026-04-20 | 2026-04-21 |
| [#566](https://github.com/ROCm/ATOM/pull/566) | [Gluon] [Triton] [MI450] [MI350] Enable Unified Attention op... | @k50112113 | open | 2026-04-14 | 2026-04-21 |
| [#598](https://github.com/ROCm/ATOM/pull/598) | ci: add Atom SGLang mesh PD disaggregation benchmark workflo... | @Jasen2201 | draft | 2026-04-17 | 2026-04-21 |
| [#592](https://github.com/ROCm/ATOM/pull/592) | docker: pin base image from ubuntu 24.04 py3.12 to ubuntu 22... | @Jasen2201 | draft | 2026-04-17 | 2026-04-21 |
| [#502](https://github.com/ROCm/ATOM/pull/502) | [ATOM_MESH] PD disaggregation router with multi-node support | @Jasen2201 | draft | 2026-04-07 | 2026-04-21 |
| [#607](https://github.com/ROCm/ATOM/pull/607) | [feat](ai): add accuracy debug skill for nightly test | @PerryZhang01 | open | 2026-04-19 | 2026-04-20 |
| [#599](https://github.com/ROCm/ATOM/pull/599) | Create issue template for general questions and requests | @amd-mwu10004 | open | 2026-04-17 | 2026-04-17 |
| [#541](https://github.com/ROCm/ATOM/pull/541) | Update the naming of vLLM-ATOM path  | @wuhuikx | open | 2026-04-10 | 2026-04-17 |
| [#408](https://github.com/ROCm/ATOM/pull/408) | feat: enable chunk prefill | @jiayyu | open | 2026-03-25 | 2026-04-17 |
| [#578](https://github.com/ROCm/ATOM/pull/578) | [Gluon] [Triton] [MI450] [MI350] Enable Triton/Gluon MLA wit... | @k50112113 | open | 2026-04-15 | 2026-04-16 |
| [#539](https://github.com/ROCm/ATOM/pull/539) | [Draft] Add vllm-omni plugin for Diffusion models Qwen Image... | @tjtanaavllm | draft | 2026-04-10 | 2026-04-16 |
| [#36](https://github.com/ROCm/ATOM/pull/36) | [Qwen3][fusion]port qknorm+rope fusion | @zhuyuhua-v | draft | 2025-12-09 | 2026-04-15 |
| [#554](https://github.com/ROCm/ATOM/pull/554) | CI: make ATOM test workflow reusable | @gyohuangxin | open | 2026-04-14 | 2026-04-15 |
| [#518](https://github.com/ROCm/ATOM/pull/518) | add triton fallback for mi455 gptoss & dsfp4 | @HaonanWang98 | open | 2026-04-08 | 2026-04-15 |
| [#487](https://github.com/ROCm/ATOM/pull/487) | GPT-OSS-120B MI355X: Performance experiment infra + Pareto o... | @ChuanLi1101 | open | 2026-04-05 | 2026-04-14 |
| [#522](https://github.com/ROCm/ATOM/pull/522) | feat(autotuner): autonomous kernel and inference configurati... | @ChuanLi1101 | open | 2026-04-08 | 2026-04-09 |
| [#478](https://github.com/ROCm/ATOM/pull/478) | feat: add vLLM benchmark workflow and dashboard | @ChuanLi1101 | open | 2026-04-02 | 2026-04-07 |
| [#473](https://github.com/ROCm/ATOM/pull/473) | EP infrastructure and decode buffer pooling for GPT-OSS-120B | @ChuanLi1101 | open | 2026-04-02 | 2026-04-07 |
| [#486](https://github.com/ROCm/ATOM/pull/486) | Add TurboQuant: 5x KV cache compression for inference | @powderluv | draft | 2026-04-05 | 2026-04-05 |
| [#477](https://github.com/ROCm/ATOM/pull/477) | adding profiling context | @mohbasit | open | 2026-04-02 | 2026-04-02 |
| [#475](https://github.com/ROCm/ATOM/pull/475) | enabling flydsl rmsnorm | @kudomcho | open | 2026-04-02 | 2026-04-02 |
| [#465](https://github.com/ROCm/ATOM/pull/465) | [fix](attn): fix the value cache layout | @PerryZhang01 | open | 2026-04-01 | 2026-04-01 |
| [#385](https://github.com/ROCm/ATOM/pull/385) |  adapt triton moe | @HaonanWang98 | draft | 2026-03-23 | 2026-04-01 |
| [#225](https://github.com/ROCm/ATOM/pull/225) | Add FlyDSL MOE backend and Triton fallback for FP8 MoE | @sunway513 | draft | 2026-02-20 | 2026-03-28 |
| [#279](https://github.com/ROCm/ATOM/pull/279) | Add CK-free fallback for fused QKNorm+RoPE+Cache | @sunway513 | open | 2026-03-09 | 2026-03-28 |
| [#309](https://github.com/ROCm/ATOM/pull/309) | [QUARK-493] Fix Qwen3 MXFP4 MoE weight loading with TP 4/8 | @thpereir | open | 2026-03-11 | 2026-03-27 |
| [#404](https://github.com/ROCm/ATOM/pull/404) | [Draft][Feature][Plugin] support GLM4.7 for sglang plugin | @qichu-yun | draft | 2026-03-25 | 2026-03-27 |
| [#402](https://github.com/ROCm/ATOM/pull/402) | [Fix](docker): fix transformers version for atom-vllm | @PerryZhang01 | draft | 2026-03-25 | 2026-03-25 |
| [#342](https://github.com/ROCm/ATOM/pull/342) | refactor: unify RMSNorm fusion with DualRMSNorm + master swi... | @valarLip | draft | 2026-03-16 | 2026-03-16 |
| [#249](https://github.com/ROCm/ATOM/pull/249) | Fix typos, dead code, uninitialized variable, and improve er... | @brucechanglongxu | open | 2026-03-01 | 2026-03-16 |
| [#168](https://github.com/ROCm/ATOM/pull/168) | [POC][Deepseek] Engram support, model_runner hash compute ov... | @ZhangLirong-amd | draft | 2026-01-28 | 2026-03-16 |
| [#226](https://github.com/ROCm/ATOM/pull/226) | Enable Triton MOE for MXFP4 on gfx950 (MI355X) | @sunway513 | draft | 2026-02-20 | 2026-03-16 |
| [#278](https://github.com/ROCm/ATOM/pull/278) | docker: add clean build and wheel-based install Dockerfiles | @sunway513 | open | 2026-03-08 | 2026-03-16 |
| [#296](https://github.com/ROCm/ATOM/pull/296) | [draft][plugin] sgl radix attn backend | @ZhiweiYan-96 | open | 2026-03-10 | 2026-03-16 |
| [#206](https://github.com/ROCm/ATOM/pull/206) | Revert "CI: Use DeepSeek-R1-0528-mtp-mxfp4 models for deepse... | @gyohuangxin | open | 2026-02-11 | 2026-03-16 |
| [#218](https://github.com/ROCm/ATOM/pull/218) | Enable AllReduce+RMSNorm fusion for GPT-OSS model | @ChuanLi1101 | open | 2026-02-15 | 2026-03-16 |
| [#170](https://github.com/ROCm/ATOM/pull/170) | Add Flux diffusion model support | @ChuanLi1101 | open | 2026-01-29 | 2026-03-16 |
| [#148](https://github.com/ROCm/ATOM/pull/148) | feat: Add fused attention output + RMSNorm support for GPT-O... | @ChuanLi1101 | open | 2026-01-17 | 2026-03-16 |
| [#50](https://github.com/ROCm/ATOM/pull/50) | feat: add skip_tokenizer option for pre-tokenized input | @ChuanLi1101 | open | 2025-12-14 | 2026-03-16 |
| [#32](https://github.com/ROCm/ATOM/pull/32) | Add unit tests for SamplingParams and CompilationConfig | @ChuanLi1101 | open | 2025-12-09 | 2026-03-16 |
| [#240](https://github.com/ROCm/ATOM/pull/240) | CI: Make ATOM benchmark can be called from other repos | @gyohuangxin | draft | 2026-02-26 | 2026-03-16 |
| [#302](https://github.com/ROCm/ATOM/pull/302) | CI: Add warmup requests before benchmark to avoid JIT compil... | @gyohuangxin | open | 2026-03-11 | 2026-03-16 |
| [#113](https://github.com/ROCm/ATOM/pull/113) | [fix] disable gluon pa for llama | @gbyu-amd | open | 2026-01-06 | 2026-03-16 |
| [#37](https://github.com/ROCm/ATOM/pull/37) | [fusion] add new ar_norm fusion kernel | @gbyu-amd | open | 2025-12-09 | 2026-03-16 |
| [#250](https://github.com/ROCm/ATOM/pull/250) | Fix block allocation for multi-token decode (speculative dec... | @brucechanglongxu | open | 2026-03-01 | 2026-03-16 |
| [#97](https://github.com/ROCm/ATOM/pull/97) | [Perf](bench): refactor benchmark scripts for unified format | @PerryZhang01 | open | 2025-12-24 | 2026-03-16 |
| [#45](https://github.com/ROCm/ATOM/pull/45) | [feat]Add aiter quick allreduce path for Qwen3-MoE | @zhuyuhua-v | draft | 2025-12-12 | 2026-03-16 |
| [#146](https://github.com/ROCm/ATOM/pull/146) | kv and output scale loading bug -- FIX | @amirumoAMD | open | 2026-01-16 | 2026-03-16 |
| [#156](https://github.com/ROCm/ATOM/pull/156) | Adding prefill decode markers to trace and enable shapes | @msiddaiah | open | 2026-01-20 | 2026-03-16 |
| [#154](https://github.com/ROCm/ATOM/pull/154) | [recipe] update qwen3 recipe | @gbyu-amd | open | 2026-01-20 | 2026-03-16 |
| [#151](https://github.com/ROCm/ATOM/pull/151) | qwen3-235b fp4 support | @gbyu-amd | draft | 2026-01-19 | 2026-03-16 |
| [#802](https://github.com/ROCm/ATOM/pull/802) | Add inferencex-sync skill for ATOM benchmark comparison and ... | @seungrokj | merged | 2026-05-15 | 2026-05-16 |
| [#801](https://github.com/ROCm/ATOM/pull/801) | Add benchmark commit override input | @yhl-amd | merged | 2026-05-15 | 2026-05-15 |
| [#803](https://github.com/ROCm/ATOM/pull/803) | [ci] Add MTP cases and run the case according to P0/P1/P2 | @junyyang-amd | merged | 2026-05-15 | 2026-05-15 |
| [#788](https://github.com/ROCm/ATOM/pull/788) | Add DeepSeek-V3.2 fused indexer path | @XiaobingSuper | merged | 2026-05-14 | 2026-05-15 |
| [#806](https://github.com/ROCm/ATOM/pull/806) | fix: handle auto kv cache dtype in vLLM plugin for sparse ml... | @XiaobingSuper | merged | 2026-05-15 | 2026-05-15 |
| [#793](https://github.com/ROCm/ATOM/pull/793) | [fix](mha): handle scalar kv scales in prefix gather | @XiaobingSuper | merged | 2026-05-15 | 2026-05-15 |
| [#804](https://github.com/ROCm/ATOM/pull/804) | Fix vLLM plugin kv cache dtype auto parsing | @wuhuikx | merged | 2026-05-15 | 2026-05-15 |
| [#795](https://github.com/ROCm/ATOM/pull/795) | Add inferencex-pr skill for ATOM benchmark comparison and PR... | @seungrokj | merged | 2026-05-15 | 2026-05-15 |
| [#798](https://github.com/ROCm/ATOM/pull/798) | Mesh Router refactor | @Jasen2201 | merged | 2026-05-15 | 2026-05-15 |
| [#722](https://github.com/ROCm/ATOM/pull/722) | [Feat] Support GLM-4.7 MTP in vLLM-ATOM plugin | @kliuae | merged | 2026-05-08 | 2026-05-15 |
| [#785](https://github.com/ROCm/ATOM/pull/785) | ci: branch-aware docker release + fix benchmark model select... | @ZhangLirong-amd | merged | 2026-05-14 | 2026-05-15 |
| [#772](https://github.com/ROCm/ATOM/pull/772) | Qwen3Next MTP for vLLM plugin mode | @ganyi1996ppo | merged | 2026-05-13 | 2026-05-15 |
| [#782](https://github.com/ROCm/ATOM/pull/782) | fix: qwen_3.5  bf16 accurancy | @JiaoliangYu | merged | 2026-05-14 | 2026-05-15 |
| [#777](https://github.com/ROCm/ATOM/pull/777) | (ci)[SGLang-ATOM]: Add Qwen3.5 cases for ci, nightly and ben... | @zhuyuhua-v | merged | 2026-05-13 | 2026-05-15 |
| [#765](https://github.com/ROCm/ATOM/pull/765) | [Perf][vLLM-ATOM] Optimize Sparse MLA in vLLM-ATOM | @kliuae | merged | 2026-05-12 | 2026-05-15 |
| [#784](https://github.com/ROCm/ATOM/pull/784) | fix prefix default on | @jiayyu | merged | 2026-05-14 | 2026-05-14 |
| [#774](https://github.com/ROCm/ATOM/pull/774) | Support fused qknorm+allreduce for minimax m2 | @xytpai | merged | 2026-05-13 | 2026-05-14 |
| [#743](https://github.com/ROCm/ATOM/pull/743) | [Feat] enable dp attention in sgl+ATOM | @ZLkanyo009 | merged | 2026-05-11 | 2026-05-14 |
| [#690](https://github.com/ROCm/ATOM/pull/690) | Support (P/D) disaggregation on mooncake | @ZhangLirong-amd | merged | 2026-05-05 | 2026-05-14 |
| [#557](https://github.com/ROCm/ATOM/pull/557) | [Feat][Plugin] Enable MTP for vLLM Plugin | @whx-sjtu | merged | 2026-04-14 | 2026-05-14 |
| [#756](https://github.com/ROCm/ATOM/pull/756) | ci(dashboard): map mi35x runner hint to MI355X and add Radeo... | @ChuanLi1101 | merged | 2026-05-11 | 2026-05-13 |
| [#775](https://github.com/ROCm/ATOM/pull/775) | feat(minimax): upgrade M2.5 to M2.7 + fix reasoning parser | @carlushuang | merged | 2026-05-13 | 2026-05-13 |
| [#776](https://github.com/ROCm/ATOM/pull/776) | [fix](gpt-oss): add int4 allreduce for gpt-oss | @PerryZhang01 | merged | 2026-05-13 | 2026-05-13 |
| [#766](https://github.com/ROCm/ATOM/pull/766) | Support DeepSeek v4 TBO | @ZhangLirong-amd | merged | 2026-05-12 | 2026-05-13 |
| [#762](https://github.com/ROCm/ATOM/pull/762) | Fpz/fix glm prefix | @jiayyu | merged | 2026-05-12 | 2026-05-13 |
| [#755](https://github.com/ROCm/ATOM/pull/755) | [bugfix] Fix/mtp entry proj quant bf16 mismatch | @yhl-amd | merged | 2026-05-11 | 2026-05-13 |
| [#704](https://github.com/ROCm/ATOM/pull/704) | [Triton] DSV4 fusions phase 1 | @k50112113 | merged | 2026-05-07 | 2026-05-13 |
| [#770](https://github.com/ROCm/ATOM/pull/770) | fix HF model path | @HaonanWang98 | merged | 2026-05-13 | 2026-05-13 |
| [#768](https://github.com/ROCm/ATOM/pull/768) | [atom-vllm] fix atom-vllm benchmark issue | @wuhuikx | merged | 2026-05-12 | 2026-05-13 |
| [#767](https://github.com/ROCm/ATOM/pull/767) | fix(benchmark): use fixed ISL/OSL for AW model benchmarks | @zejunchen-zejun | merged | 2026-05-12 | 2026-05-12 |
| [#614](https://github.com/ROCm/ATOM/pull/614) | (ci)(recipe): Add DeepSeek-R1 FP4 TP4 validation and DS reci... | @zhuyuhua-v | merged | 2026-04-20 | 2026-05-12 |
| [#760](https://github.com/ROCm/ATOM/pull/760) | Add chat encode for deepseek v4 without chat template jinja | @HaonanWang98 | merged | 2026-05-12 | 2026-05-12 |
| [#764](https://github.com/ROCm/ATOM/pull/764) | [feat](gpt-oss): enable gpt-oss moe a4w4 | @PerryZhang01 | merged | 2026-05-12 | 2026-05-12 |
| [#746](https://github.com/ROCm/ATOM/pull/746) | refactor(deepseek_v4): switch MoE routing to topk_gating | @yzhou103 | merged | 2026-05-11 | 2026-05-12 |
| [#748](https://github.com/ROCm/ATOM/pull/748) | [fix](gpt-oss): fix gpt-oss model accuracy bug | @PerryZhang01 | merged | 2026-05-11 | 2026-05-12 |
| [#730](https://github.com/ROCm/ATOM/pull/730) | [recipe][vLLM-ATOM] update kimi k2/k2.5 recipe | @gbyu-amd | merged | 2026-05-09 | 2026-05-12 |
| [#745](https://github.com/ROCm/ATOM/pull/745) | support dp attention in deepseek v4 | @ZhangLirong-amd | merged | 2026-05-11 | 2026-05-12 |
| [#751](https://github.com/ROCm/ATOM/pull/751) | [fix][vLLM-ATOM] fix kimi k25 config error with trust-remote... | @gbyu-amd | merged | 2026-05-11 | 2026-05-12 |
| [#744](https://github.com/ROCm/ATOM/pull/744) | [MoE] Align generic MXFP4 shuffle layout | @XiaobingSuper | merged | 2026-05-11 | 2026-05-12 |
| [#742](https://github.com/ROCm/ATOM/pull/742) | Remove lru_cache in get_per_token_exponential func | @junhaha666 | merged | 2026-05-11 | 2026-05-12 |
| [#754](https://github.com/ROCm/ATOM/pull/754) | Add upload step for runner fleet report | @amdfaa | merged | 2026-05-11 | 2026-05-12 |
| [#729](https://github.com/ROCm/ATOM/pull/729) | [atom-vllm benchmark] Refine atom-vllm benchmark | @zejunchen-zejun | merged | 2026-05-09 | 2026-05-12 |
| [#747](https://github.com/ROCm/ATOM/pull/747) | [fix][acc][sgl-atom] fix accuracy of fp8 attn weights model ... | @zhuyuhua-v | merged | 2026-05-11 | 2026-05-11 |
| [#739](https://github.com/ROCm/ATOM/pull/739) | Update the vLLM-ATOM benchmark scope | @wuhuikx | merged | 2026-05-11 | 2026-05-11 |
| [#736](https://github.com/ROCm/ATOM/pull/736) | support three stream in Deepseek V4 | @ZhangLirong-amd | merged | 2026-05-10 | 2026-05-11 |
| [#631](https://github.com/ROCm/ATOM/pull/631) | [Kimi] support Eagle3 speculative decoding for Kimi K2.5 | @yhl-amd | merged | 2026-04-22 | 2026-05-10 |
| [#737](https://github.com/ROCm/ATOM/pull/737) | refactor(deepseek_v4): ParallelHead inherits ParallelLMHead;... | @valarLip | merged | 2026-05-10 | 2026-05-10 |
| [#733](https://github.com/ROCm/ATOM/pull/733) | perf(deepseek_v4): unified aiter rmsnorm_quant + q_norm/wkv_... | @valarLip | merged | 2026-05-10 | 2026-05-10 |
| [#682](https://github.com/ROCm/ATOM/pull/682) | Remove chunk split in Qwen3.5 and Qwen3Next | @ganyi1996ppo | merged | 2026-05-02 | 2026-05-10 |
| [#725](https://github.com/ROCm/ATOM/pull/725) | [Triton] add fused_routing_from_topk switch | @k50112113 | merged | 2026-05-09 | 2026-05-10 |
| [#726](https://github.com/ROCm/ATOM/pull/726) | [dockerfile] temp reinstall triton==3.6.0 for accuracy | @gbyu-amd | merged | 2026-05-09 | 2026-05-10 |
| [#650](https://github.com/ROCm/ATOM/pull/650) | feat(deepseek_v4): PR1 skeleton — end-to-end inference with ... | @valarLip | merged | 2026-04-25 | 2026-05-09 |
| [#732](https://github.com/ROCm/ATOM/pull/732) | [fix] update quant mapping for kimi k25 | @gbyu-amd | merged | 2026-05-09 | 2026-05-09 |
| [#731](https://github.com/ROCm/ATOM/pull/731) | perf(deepseek_v4): use aiter silu_and_mul with in-kernel cla... | @valarLip | merged | 2026-05-09 | 2026-05-09 |
| [#728](https://github.com/ROCm/ATOM/pull/728) | Optimize Deepseek V4 prepare decode | @ZhangLirong-amd | merged | 2026-05-09 | 2026-05-09 |
| [#718](https://github.com/ROCm/ATOM/pull/718) | Dsv4 moe flydsl  | @amd-ruitang3 | merged | 2026-05-08 | 2026-05-09 |
| [#670](https://github.com/ROCm/ATOM/pull/670) | [fix][acc] fix accuracy of fp8 attn weights model using ptpc... | @gbyu-amd | merged | 2026-04-29 | 2026-05-09 |
| [#721](https://github.com/ROCm/ATOM/pull/721) | Add triton fallback for deepseek & gptoss | @HaonanWang98 | merged | 2026-05-08 | 2026-05-09 |
| [#720](https://github.com/ROCm/ATOM/pull/720) | [fix](gpt-oss): change the accuracy test for gpt-oss | @PerryZhang01 | merged | 2026-05-08 | 2026-05-09 |
| [#724](https://github.com/ROCm/ATOM/pull/724) | CI: gate ATOM tests on Pre Checkin workflow status | @gyohuangxin | merged | 2026-05-09 | 2026-05-09 |
| [#723](https://github.com/ROCm/ATOM/pull/723) | perf(deepseek_v4): fused_compress kernel optimization + Dual... | @valarLip | merged | 2026-05-08 | 2026-05-08 |
| [#514](https://github.com/ROCm/ATOM/pull/514) | Add the benchmark flow for ATOM vLLM plugin | @wuhuikx | merged | 2026-04-08 | 2026-05-08 |
| [#709](https://github.com/ROCm/ATOM/pull/709) | Glm mtp test | @jiayyu | merged | 2026-05-07 | 2026-05-08 |
| [#705](https://github.com/ROCm/ATOM/pull/705) | Support torch compile in deepseek v4  | @ZhangLirong-amd | merged | 2026-05-07 | 2026-05-08 |
| [#694](https://github.com/ROCm/ATOM/pull/694) | enable configurable weight bpreshuffle for fp8 blockscale ge... | @ganyi1996ppo | merged | 2026-05-06 | 2026-05-08 |
| [#639](https://github.com/ROCm/ATOM/pull/639) | [benchmark] Add TP8 EP8 case for deepseek FP4 | @qichu-yun | merged | 2026-04-23 | 2026-05-08 |
| [#714](https://github.com/ROCm/ATOM/pull/714) | Add DeepSeek V4 compressor state cache interactive animation | @carlushuang | merged | 2026-05-07 | 2026-05-07 |
| [#494](https://github.com/ROCm/ATOM/pull/494) | [Feat][Plugin] Enable DeepSeek-V3.2 for vLLM-ATOM Plugin | @kliuae-amd | merged | 2026-04-06 | 2026-05-07 |
| [#713](https://github.com/ROCm/ATOM/pull/713) | docs(recipes): add DeepSeek-V4 usage guide | @valarLip | merged | 2026-05-07 | 2026-05-07 |
| [#711](https://github.com/ROCm/ATOM/pull/711) | [fix](plugin): remove qkv arg in vllm-atom | @PerryZhang01 | merged | 2026-05-07 | 2026-05-07 |
| [#545](https://github.com/ROCm/ATOM/pull/545) | [feat](minimax): support minimax-2.5 in atom-vllm mode | @PerryZhang01 | merged | 2026-04-12 | 2026-05-07 |
| [#712](https://github.com/ROCm/ATOM/pull/712) | CI: Use linux-atom-mi35x-1 in docker release pipeline | @gyohuangxin | merged | 2026-05-07 | 2026-05-07 |
| [#710](https://github.com/ROCm/ATOM/pull/710) | fix(v4): triton-3.6+ MoE SMEM OOM + empty-batch indexer pref... | @valarLip | merged | 2026-05-07 | 2026-05-07 |
| [#706](https://github.com/ROCm/ATOM/pull/706) | [atom-vllm CI] align the aiter download logic with atom CI | @zejunchen-zejun | merged | 2026-05-07 | 2026-05-07 |
| [#703](https://github.com/ROCm/ATOM/pull/703) | fix(v4-ci): unblock nightly Docker test + V4-Pro accuracy st... | @valarLip | merged | 2026-05-06 | 2026-05-06 |
| [#687](https://github.com/ROCm/ATOM/pull/687) | ci(docker): install triton_kernels for ATOM_USE_TRITON_MOE | @valarLip | merged | 2026-05-04 | 2026-05-06 |
| [#699](https://github.com/ROCm/ATOM/pull/699) | [atom-vllm benchmark] force auto bench run wait for the manu... | @zejunchen-zejun | merged | 2026-05-06 | 2026-05-06 |
| [#701](https://github.com/ROCm/ATOM/pull/701) | feat(deepseek_v4): 1. use rope_rotate_activation instead of ... | @junhaha666 | merged | 2026-05-06 | 2026-05-06 |
| [#692](https://github.com/ROCm/ATOM/pull/692) | ci(dashboard): use amd-smi for GPU name to fix MI355X identi... | @ChuanLi1101 | merged | 2026-05-05 | 2026-05-06 |
| [#696](https://github.com/ROCm/ATOM/pull/696) | CI: keep ATOM aligned with the latest aiter wheel | @gyohuangxin | merged | 2026-05-06 | 2026-05-06 |
| [#671](https://github.com/ROCm/ATOM/pull/671) | [atom-vllm benchmark][docker release] refine docker release ... | @zejunchen-zejun | merged | 2026-04-29 | 2026-05-06 |
| [#678](https://github.com/ROCm/ATOM/pull/678) | feat(deepseek_v4): use triton sparse attn kernel and move at... | @junhaha666 | merged | 2026-05-01 | 2026-05-01 |
| [#655](https://github.com/ROCm/ATOM/pull/655) | Fix Qwen3.5 model config type error | @zovonoir | merged | 2026-04-28 | 2026-04-30 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-05-16T09:19:09Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#257](https://github.com/ROCm/mori/pull/257) | Refactor(umbp): introduce IUMBPClient interface for dual-sch... | @isytwu | open | 2026-04-10 | 2026-05-15 |
| [#321](https://github.com/ROCm/mori/pull/321) | fix(sdma): All2allSdma completion flags not reset between ca... | @ylerman-dn | open | 2026-05-14 | 2026-05-14 |
| [#307](https://github.com/ROCm/mori/pull/307) | Check CCQE support in runtime instead of compiling | @QizhouZhang97 | open | 2026-05-08 | 2026-05-14 |
| [#308](https://github.com/ROCm/mori/pull/308) | feat(shmem): add MORI_MULTITHREAD_SUPPORT for SPMT | @jhchouuu | open | 2026-05-08 | 2026-05-12 |
| [#312](https://github.com/ROCm/mori/pull/312) | Dev/cq a71 validate | @QizhouZhang97 | open | 2026-05-09 | 2026-05-09 |
| [#305](https://github.com/ROCm/mori/pull/305) | io: SQ flow control rework — diagnostics, SqController, sess... | @maning00 | open | 2026-05-07 | 2026-05-08 |
| [#289](https://github.com/ROCm/mori/pull/289) | ci: add nightly wheel build workflow | @jhchouuu | open | 2026-04-22 | 2026-04-22 |
| [#251](https://github.com/ROCm/mori/pull/251) | feat(umbp): chunked DRAM MR registration for NICs with limit... | @maning00 | open | 2026-04-03 | 2026-04-14 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-04-01 |
| [#200](https://github.com/ROCm/mori/pull/200) | Add ReduceScatter SDMA implementation and AG/RS benchmarks | @amd-andycha | open | 2026-03-18 | 2026-03-24 |
| [#202](https://github.com/ROCm/mori/pull/202) | Update Docker environment for MI355X benchmark reproducibili... | @amd-andycha | open | 2026-03-19 | 2026-03-19 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-03-02 |
| [#175](https://github.com/ROCm/mori/pull/175) | Add elastic EP for dispatch/combine flows | @maning00 | open | 2026-02-27 | 2026-02-27 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-01-08 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-01-08 |
| [#316](https://github.com/ROCm/mori/pull/316) | feat(io): fall back RDMA backend to XGMI when no RDMA device... | @maning00 | merged | 2026-05-13 | 2026-05-15 |
| [#320](https://github.com/ROCm/mori/pull/320) | fix(tool): reorder DSCP mapping before scheduling in env_set... | @jhchouuu | merged | 2026-05-14 | 2026-05-14 |
| [#319](https://github.com/ROCm/mori/pull/319) | refactor(ccl): migrate collective kernels from AOT to JIT co... | @jhchouuu | merged | 2026-05-13 | 2026-05-14 |
| [#297](https://github.com/ROCm/mori/pull/297) | feat(cli): add 'mori' console entry point for env helper scr... | @Duyi-Wang | merged | 2026-04-28 | 2026-05-14 |
| [#295](https://github.com/ROCm/mori/pull/295) | Some fixes for XLA build, shmem_api includes separation | @pemeliya | merged | 2026-04-28 | 2026-05-13 |
| [#318](https://github.com/ROCm/mori/pull/318) | feat(jit): enable hip kernel debug info | @kawhil-amd | merged | 2026-05-13 | 2026-05-13 |
| [#317](https://github.com/ROCm/mori/pull/317) | fix(env): cache MORI_ENABLE_SDMA / MORI_DISABLE_P2P at Conte... | @jhchouuu | merged | 2026-05-13 | 2026-05-13 |
| [#315](https://github.com/ROCm/mori/pull/315) | feat(EP): decouple fp8_blockwise combine scale_dim from user... | @maning00 | merged | 2026-05-12 | 2026-05-13 |
| [#314](https://github.com/ROCm/mori/pull/314) | fix(ep): copy device counters to host before dereferencing | @jhchouuu | merged | 2026-05-12 | 2026-05-12 |
| [#311](https://github.com/ROCm/mori/pull/311) | feat(EP): FP8 blockwise quantization for IntraNode combine | @maning00 | merged | 2026-05-09 | 2026-05-11 |
| [#309](https://github.com/ROCm/mori/pull/309) | Refactor: decouple allocator from master and client | @TianDi101 | merged | 2026-05-09 | 2026-05-11 |
| [#310](https://github.com/ROCm/mori/pull/310) | CI: add placeholder for manual CI trigger | @TianDi101 | merged | 2026-05-09 | 2026-05-09 |
| [#303](https://github.com/ROCm/mori/pull/303) | feat(ccl): add C++ AllGatherIntoTensor  over SDMA | @inkcherry | merged | 2026-05-06 | 2026-05-08 |
| [#299](https://github.com/ROCm/mori/pull/299) | Update FlyDSL extern integration | @coderfeli | merged | 2026-04-30 | 2026-05-08 |
| [#298](https://github.com/ROCm/mori/pull/298) | fix(rdma): bnxt PollCq/QP bugs and ibverbs path_mtu override | @jaeyoun98 | merged | 2026-04-29 | 2026-05-07 |
| [#302](https://github.com/ROCm/mori/pull/302) | ccl: fail fast when MORI_ENABLE_SDMA is not enabled | @inkcherry | merged | 2026-05-06 | 2026-05-06 |
| [#243](https://github.com/ROCm/mori/pull/243) | ci: add JAX intranode test job & optimize shmem tests | @jhchouuu | merged | 2026-03-31 | 2026-05-06 |
| [#244](https://github.com/ROCm/mori/pull/244) | fix(ci): remove stale --batch-non-contiguous arg from intern... | @jhchouuu | merged | 2026-04-01 | 2026-05-06 |
| [#301](https://github.com/ROCm/mori/pull/301) | bugfix: env_check.sh/env_setup.sh error in docker env | @QizhouZhang97 | merged | 2026-04-30 | 2026-05-06 |
| [#193](https://github.com/ROCm/mori/pull/193) | Feat(shmem): implement GET (remote read) device API with blo... | @jhchouuu | merged | 2026-03-10 | 2026-05-01 |
| [#207](https://github.com/ROCm/mori/pull/207) | Fix: remove unused #include <mpi.h> from shmem kernel header... | @jhchouuu | merged | 2026-03-20 | 2026-05-01 |
| [#296](https://github.com/ROCm/mori/pull/296) | refactor: decouple device compilation and public headers fro... | @jhchouuu | merged | 2026-04-28 | 2026-05-01 |
| [#300](https://github.com/ROCm/mori/pull/300) | warn when AsyncLL runs without SDMA | @inkcherry | merged | 2026-04-30 | 2026-04-30 |
| [#294](https://github.com/ROCm/mori/pull/294) | Feature/external kv block events rebased | @TianDi101 | merged | 2026-04-24 | 2026-04-24 |
| [#235](https://github.com/ROCm/mori/pull/235) | Sdma ccl | @wuyl1 | merged | 2026-03-27 | 2026-04-24 |
| [#292](https://github.com/ROCm/mori/pull/292) | chore: format and bump version to 1.1.1 | @jhchouuu | merged | 2026-04-24 | 2026-04-24 |
| [#290](https://github.com/ROCm/mori/pull/290) | CI: add shmem benchmark tests to | @QizhouZhang97 | merged | 2026-04-23 | 2026-04-24 |
| [#291](https://github.com/ROCm/mori/pull/291) | ci: add MI300X_BNXT platform with Broadcom BNXT NIC support | @jhchouuu | merged | 2026-04-23 | 2026-04-23 |
| [#280](https://github.com/ROCm/mori/pull/280) | Flydsl shmem | @TennyWang1223 | merged | 2026-04-20 | 2026-04-23 |
| [#282](https://github.com/ROCm/mori/pull/282) | fix: unblock JAX gfx950 CI tests and wrap profiler macros  | @jhchouuu | merged | 2026-04-20 | 2026-04-23 |
| [#283](https://github.com/ROCm/mori/pull/283) | fix(setup): only pull SPDK submodule when BUILD_UMBP=ON | @jhchouuu | merged | 2026-04-20 | 2026-04-23 |
| [#272](https://github.com/ROCm/mori/pull/272) | benchmark:(shmem) add some basic shmem benchmark tests | @QizhouZhang97 | merged | 2026-04-17 | 2026-04-23 |
| [#288](https://github.com/ROCm/mori/pull/288) | ci: switch intranode tests to MI355X-AINIC-TW | @jhchouuu | merged | 2026-04-22 | 2026-04-22 |
| [#278](https://github.com/ROCm/mori/pull/278) | tools: auto detect ionic env problem. | @QizhouZhang97 | merged | 2026-04-20 | 2026-04-22 |
| [#287](https://github.com/ROCm/mori/pull/287) | Docs: update arch image and add UMBP description | @TianDi101 | merged | 2026-04-22 | 2026-04-22 |
| [#286](https://github.com/ROCm/mori/pull/286) | fix(test): reduce warp_num_per_block in intranode EP | @jhchouuu | merged | 2026-04-22 | 2026-04-22 |
| [#285](https://github.com/ROCm/mori/pull/285) | feat(ep): add profiler support to intranode dispatch/combine | @TianDi101 | merged | 2026-04-21 | 2026-04-21 |
| [#281](https://github.com/ROCm/mori/pull/281) | fix: profile mode detection and doc corrections | @TianDi101 | merged | 2026-04-20 | 2026-04-21 |
| [#277](https://github.com/ROCm/mori/pull/277) | fix(io): refine RDMA flush diagnostics and error hints | @maning00 | merged | 2026-04-20 | 2026-04-20 |
| [#254](https://github.com/ROCm/mori/pull/254) | Feature: add local expert count kernel for sglang EPLB | @TianDi101 | merged | 2026-04-08 | 2026-04-20 |
| [#263](https://github.com/ROCm/mori/pull/263) | feat(ci): add MI355X-AINIC platform with podman and fix buil... | @jhchouuu | merged | 2026-04-14 | 2026-04-19 |
| [#242](https://github.com/ROCm/mori/pull/242) | feat(ep): add tuning config system for dispatch/combine | @isytwu | merged | 2026-03-31 | 2026-04-17 |
| [#271](https://github.com/ROCm/mori/pull/271) | tune(mi355x): add IntraNode FP4 entries for >4k tokens on EP... | @inkcherry | merged | 2026-04-17 | 2026-04-17 |
| [#270](https://github.com/ROCm/mori/pull/270) | fix(packaging): include tools/profiler in JIT sources + add ... | @zhangfei829 | merged | 2026-04-17 | 2026-04-17 |
| [#267](https://github.com/ROCm/mori/pull/267) | io: disable auto XGMI backend for cross-process IPC transfer... | @maning00 | merged | 2026-04-16 | 2026-04-16 |
| [#265](https://github.com/ROCm/mori/pull/265) | Fix: profile mode for JIT kernel | @TianDi101 | merged | 2026-04-15 | 2026-04-15 |
| [#262](https://github.com/ROCm/mori/pull/262) | pybind: release GIL for all UMBPClient methods to fix distri... | @zhangfei829 | merged | 2026-04-14 | 2026-04-14 |
| [#261](https://github.com/ROCm/mori/pull/261) | io: avoid QPN collisions in multi-NIC setups | @maning00 | merged | 2026-04-13 | 2026-04-13 |
| [#260](https://github.com/ROCm/mori/pull/260) | Fix: EP index overflow | @TianDi101 | merged | 2026-04-12 | 2026-04-13 |
| [#256](https://github.com/ROCm/mori/pull/256) | Fix: async kernel recv launch bug | @TianDi101 | merged | 2026-04-09 | 2026-04-12 |
| [#258](https://github.com/ROCm/mori/pull/258) | io: enable hidden-device xgmi ipc | @maning00 | merged | 2026-04-10 | 2026-04-10 |
| [#255](https://github.com/ROCm/mori/pull/255) | pybind: release GIL for blocking IOEngine bindings & xgmi be... | @maning00 | merged | 2026-04-09 | 2026-04-09 |
| [#226](https://github.com/ROCm/mori/pull/226) | Feat: JAX integration via XLA FFI custom calls  | @pemeliya | merged | 2026-03-25 | 2026-04-09 |
| [#252](https://github.com/ROCm/mori/pull/252) | Fix: EP intranode overflow bug when token>65536 | @TianDi101 | merged | 2026-04-07 | 2026-04-07 |
| [#250](https://github.com/ROCm/mori/pull/250) | fix(packaging): rename _jit_sources to _jit-sources to suppr... | @isytwu | merged | 2026-04-03 | 2026-04-03 |
| [#249](https://github.com/ROCm/mori/pull/249) | Fix: wrong EP test command on README | @TianDi101 | merged | 2026-04-02 | 2026-04-02 |
| [#245](https://github.com/ROCm/mori/pull/245) | Feature: EP memory footprint optimization & add max_total_re... | @TianDi101 | merged | 2026-04-01 | 2026-04-01 |
| [#247](https://github.com/ROCm/mori/pull/247) | fix(io-xgmi): resolve polling hangs and wrong cross-process ... | @maning00 | merged | 2026-04-01 | 2026-04-01 |
| [#209](https://github.com/ROCm/mori/pull/209) | Feat: UMBP Distributed integration | @TianDi101 | merged | 2026-03-22 | 2026-04-01 |
| [#195](https://github.com/ROCm/mori/pull/195) | Feat: add C++ launch API for EP kernels (AOT + JIT cache sup... | @jhchouuu | merged | 2026-03-12 | 2026-03-31 |
| [#211](https://github.com/ROCm/mori/pull/211) | Fix(ep): align optional tensor ptrs with legacy c++ launch | @jhchouuu | merged | 2026-03-23 | 2026-03-31 |
| [#215](https://github.com/ROCm/mori/pull/215) | Fix(tensor_utils): support float8_e8m0fnu in from_gpu_ptr | @jhchouuu | merged | 2026-03-23 | 2026-03-31 |
| [#232](https://github.com/ROCm/mori/pull/232) | refactor(io): JIT-compile XGMI scatter/gather kernel instead... | @jhchouuu | merged | 2026-03-27 | 2026-03-31 |
| [#237](https://github.com/ROCm/mori/pull/237) | refactor(rdma): dlopen vendor dv libraries at runtime instea... | @jhchouuu | merged | 2026-03-27 | 2026-03-31 |
| [#240](https://github.com/ROCm/mori/pull/240) | Fix: modify mori-io bench arg, use non-contiguous buffer as ... | @TianDi101 | merged | 2026-03-30 | 2026-03-31 |
| [#241](https://github.com/ROCm/mori/pull/241) | fix(io): harden RDMA CQE handling and tighten packaging/CI | @maning00 | merged | 2026-03-30 | 2026-03-31 |
| [#239](https://github.com/ROCm/mori/pull/239) | feat(ep): support independent combine dtype for EP dispatch/... | @isytwu | merged | 2026-03-30 | 2026-03-30 |
| [#236](https://github.com/ROCm/mori/pull/236) | Build mori as a pip package | @QizhouZhang97 | merged | 2026-03-27 | 2026-03-27 |
| [#233](https://github.com/ROCm/mori/pull/233) | fix(ci): correct fork detection in pre-commit autofix workfl... | @jhchouuu | merged | 2026-03-27 | 2026-03-27 |
| [#234](https://github.com/ROCm/mori/pull/234) | Refactor: EP intranode kernel benchmark | @TianDi101 | merged | 2026-03-27 | 2026-03-27 |
| [#230](https://github.com/ROCm/mori/pull/230) | ci: add /fix-precommit bot for PR comment-triggered auto-fix | @jhchouuu | merged | 2026-03-26 | 2026-03-27 |
| [#231](https://github.com/ROCm/mori/pull/231) | Freeze setuptools_scm version | @erieaton-amd | merged | 2026-03-26 | 2026-03-27 |
| [#228](https://github.com/ROCm/mori/pull/228) | fix(bootstrap): harden socket bootstrap against CI initializ... | @jhchouuu | merged | 2026-03-26 | 2026-03-26 |
| [#224](https://github.com/ROCm/mori/pull/224) | Feat(shmem): expose mori_shmem_free_tensor for triton-dist l... | @isytwu | merged | 2026-03-25 | 2026-03-26 |
| [#227](https://github.com/ROCm/mori/pull/227) | Feature: add disp/comb memory benchmark | @TianDi101 | merged | 2026-03-25 | 2026-03-25 |
| [#225](https://github.com/ROCm/mori/pull/225) | fix(spdk): harden setup and preflight scripts | @maning00 | merged | 2026-03-25 | 2026-03-25 |
| [#223](https://github.com/ROCm/mori/pull/223) | feat(umbp): redesign SPDK proxy as a multitenant service | @maning00 | merged | 2026-03-25 | 2026-03-25 |
| [#214](https://github.com/ROCm/mori/pull/214) | Refactor bench_umbp output | @maning00 | merged | 2026-03-23 | 2026-03-25 |
| [#221](https://github.com/ROCm/mori/pull/221) | Fix(ep): use runtime dtype for AsyncLL recv path | @isytwu | merged | 2026-03-25 | 2026-03-25 |
| [#220](https://github.com/ROCm/mori/pull/220) | fix(tests): allow MORI_SHMEM_HEAP_SIZE override for ep bench | @jhchouuu | merged | 2026-03-25 | 2026-03-25 |
| [#217](https://github.com/ROCm/mori/pull/217) | ci: overhaul CI workflow with hybrid container approach and ... | @jhchouuu | merged | 2026-03-24 | 2026-03-25 |
| [#219](https://github.com/ROCm/mori/pull/219) | ci(pre-commit): add pre-commit CI and apply format to existi... | @jhchouuu | merged | 2026-03-24 | 2026-03-25 |
| [#205](https://github.com/ROCm/mori/pull/205) | Optimize XGMI `batch_write`/`batch_read` for discrete (non-c... | @inkcherry | merged | 2026-03-19 | 2026-03-24 |
| [#218](https://github.com/ROCm/mori/pull/218) | Feat umbp pool phase2 | @TianDi101 | merged | 2026-03-24 | 2026-03-24 |
| [#216](https://github.com/ROCm/mori/pull/216) | fix bench_umbp_spdk: steady_clock, interpolated percentiles,... | @zhangfei829 | merged | 2026-03-24 | 2026-03-24 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-05-16T09:19:12Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#429](https://github.com/ROCm/FlyDSL/pull/429) | Kefan.cao/fix universal copy | @kefan203 | open | 2026-04-23 | 2026-05-16 |
| [#535](https://github.com/ROCm/FlyDSL/pull/535) | bench: add FlashAttention custom LLVM path | @coderfeli | open | 2026-05-16 | 2026-05-16 |
| [#531](https://github.com/ROCm/FlyDSL/pull/531) | [Feature]: support dynamic while | @xudoyuan | draft | 2026-05-15 | 2026-05-16 |
| [#532](https://github.com/ROCm/FlyDSL/pull/532) | [gfx1250] Fix cluster launch detection and silent fallback | @aoli26 | draft | 2026-05-15 | 2026-05-16 |
| [#487](https://github.com/ROCm/FlyDSL/pull/487) | blockscale code gfx1250 (WIP) | @omuhamma | draft | 2026-05-08 | 2026-05-15 |
| [#530](https://github.com/ROCm/FlyDSL/pull/530) | hgemm_splitk: add mixed sllitk/slicek policies | @xytpai | draft | 2026-05-15 | 2026-05-15 |
| [#528](https://github.com/ROCm/FlyDSL/pull/528) | fix: backport manylinux_2_28 wheel build to v0.1.4 (post1 re... | @kiran-thumma | draft | 2026-05-15 | 2026-05-15 |
| [#474](https://github.com/ROCm/FlyDSL/pull/474) | fix: handle co_freevars mismatch in ASTRewriter for closure ... | @ZJLi2013 | open | 2026-05-06 | 2026-05-14 |
| [#522](https://github.com/ROCm/FlyDSL/pull/522) | [Feat] Intranode Dispatch&Combine Kernel  | @yanboshao | draft | 2026-05-14 | 2026-05-14 |
| [#512](https://github.com/ROCm/FlyDSL/pull/512) | [Optimization]: Replace 'scf.if' with 'arith.select' for vis... | @xudoyuan | draft | 2026-05-12 | 2026-05-13 |
| [#431](https://github.com/ROCm/FlyDSL/pull/431) | Add A16W4 MoE GEMM stage2 kernel (BF16 activations x MXFP4 w... | @apicciau | open | 2026-04-23 | 2026-05-11 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-05-06 |
| [#461](https://github.com/ROCm/FlyDSL/pull/461) | add gfx950 16x16x64 I8 MFMA support to MoE 2-stage GEMM | @yadaish | draft | 2026-04-30 | 2026-04-30 |
| [#405](https://github.com/ROCm/FlyDSL/pull/405) | [Kernel][MI350] GDR prefill K5 vk implementation | @huizzhan | draft | 2026-04-16 | 2026-04-28 |
| [#430](https://github.com/ROCm/FlyDSL/pull/430) | Add RDNA4 MoE WMMA kernel path | @vivienfanghuagood | draft | 2026-04-23 | 2026-04-27 |
| [#424](https://github.com/ROCm/FlyDSL/pull/424) | Add BF16xFP4 MoE GEMM stage1 kernel | @apicciau | draft | 2026-04-21 | 2026-04-21 |
| [#420](https://github.com/ROCm/FlyDSL/pull/420) | Pr/a16wi4 group splitk | @yadaish | draft | 2026-04-21 | 2026-04-21 |
| [#395](https://github.com/ROCm/FlyDSL/pull/395) | Add initial Windows support | @0xDELUXA | draft | 2026-04-13 | 2026-04-16 |
| [#401](https://github.com/ROCm/FlyDSL/pull/401) | gemm a16w16 flydsl implementation (WIP) | @omuhamma | draft | 2026-04-14 | 2026-04-14 |
| [#354](https://github.com/ROCm/FlyDSL/pull/354) | Add `hgemm_splitk+allreduce` prologue/epilogue fusion kernel... | @xytpai | draft | 2026-04-07 | 2026-04-08 |
| [#257](https://github.com/ROCm/FlyDSL/pull/257) | [Feature] Add JAX integration for FlyDSL kernels | @wenchenvincent | open | 2026-03-21 | 2026-03-27 |
| [#481](https://github.com/ROCm/FlyDSL/pull/481) | [Feat] Align quant and fused rmsnorm kernels with aiter/trit... | @cschenjunlin | merged | 2026-05-08 | 2026-05-16 |
| [#517](https://github.com/ROCm/FlyDSL/pull/517) | add gfx950-specific MLA fp8 decode kernel | @charlieguo1106 | merged | 2026-05-13 | 2026-05-16 |
| [#534](https://github.com/ROCm/FlyDSL/pull/534) | docs: recommend PyPI install and bump version | @coderfeli | merged | 2026-05-15 | 2026-05-16 |
| [#533](https://github.com/ROCm/FlyDSL/pull/533) | [gfx1250] Optimize FP8/FP4 GEMM kernel and tests | @aoli26 | merged | 2026-05-15 | 2026-05-16 |
| [#525](https://github.com/ROCm/FlyDSL/pull/525) | FP8 GEMM 8wave ping-pong kernel | @amd-cgilli | merged | 2026-05-14 | 2026-05-16 |
| [#529](https://github.com/ROCm/FlyDSL/pull/529) | [Standardization]: apply Python formatting | @sjfeng1999 | merged | 2026-05-15 | 2026-05-15 |
| [#518](https://github.com/ROCm/FlyDSL/pull/518) | [Refactor] Refactor the allreduce kernel by high-level FlyDS... | @yanboshao | merged | 2026-05-13 | 2026-05-15 |
| [#524](https://github.com/ROCm/FlyDSL/pull/524) | [Enh] Add shortcut make_rmem_tensor for allocate register te... | @sjfeng1999 | merged | 2026-05-14 | 2026-05-15 |
| [#277](https://github.com/ROCm/FlyDSL/pull/277) | feat(runtime): implement device runtime layer (Python) | @Peter9606 | merged | 2026-03-24 | 2026-05-15 |
| [#526](https://github.com/ROCm/FlyDSL/pull/526) | Report benchmark ratios against main | @coderfeli | merged | 2026-05-14 | 2026-05-15 |
| [#520](https://github.com/ROCm/FlyDSL/pull/520) | Preshuffle fp8 4wave main | @coderfeli | merged | 2026-05-13 | 2026-05-15 |
| [#521](https://github.com/ROCm/FlyDSL/pull/521) | fix(python): lazily load ROCDL expr modules | @coderfeli | merged | 2026-05-14 | 2026-05-14 |
| [#523](https://github.com/ROCm/FlyDSL/pull/523) | [Enh] enable numRecords field in the bufferRsrc for dynamic ... | @sjfeng1999 | merged | 2026-05-14 | 2026-05-14 |
| [#503](https://github.com/ROCm/FlyDSL/pull/503) | Fix/fly opt gpu llvm translations | @Peter9606 | merged | 2026-05-11 | 2026-05-14 |
| [#511](https://github.com/ROCm/FlyDSL/pull/511) | Use layout api to write 4wave vanilla gemm. | @coderfeli | merged | 2026-05-12 | 2026-05-13 |
| [#513](https://github.com/ROCm/FlyDSL/pull/513) | [Standardization]: remove _could_be_dynamic | @xudoyuan | merged | 2026-05-12 | 2026-05-13 |
| [#500](https://github.com/ROCm/FlyDSL/pull/500) | ci: add local Python style check helper | @coderfeli | merged | 2026-05-11 | 2026-05-13 |
| [#516](https://github.com/ROCm/FlyDSL/pull/516) | ci: add Python 3.14 wheel builds | @coderfeli | merged | 2026-05-13 | 2026-05-13 |
| [#502](https://github.com/ROCm/FlyDSL/pull/502) | test(compiler): generalize attach-target link helpers | @Peter9606 | merged | 2026-05-11 | 2026-05-13 |
| [#506](https://github.com/ROCm/FlyDSL/pull/506) | [Feat] Add SharedAllocator, auto trace shared bytes in the k... | @sjfeng1999 | merged | 2026-05-11 | 2026-05-12 |
| [#514](https://github.com/ROCm/FlyDSL/pull/514) | fix: parametrize fp8 4wave gemm test | @coderfeli | merged | 2026-05-12 | 2026-05-12 |
| [#509](https://github.com/ROCm/FlyDSL/pull/509) | fix: import PA metadata helpers from aiter attention | @coderfeli | merged | 2026-05-12 | 2026-05-12 |
| [#505](https://github.com/ROCm/FlyDSL/pull/505) | [Kernel] Add 4 Wave Interleave FP8 GEMM | @amd-cgilli | merged | 2026-05-11 | 2026-05-12 |
| [#508](https://github.com/ROCm/FlyDSL/pull/508) | fix(python): pass cluster_size only for cluster launches | @Peter9606 | merged | 2026-05-12 | 2026-05-12 |
| [#497](https://github.com/ROCm/FlyDSL/pull/497) | [FLYDSL]: Ast rewrite add visit_ifExp | @xudoyuan | merged | 2026-05-09 | 2026-05-12 |
| [#504](https://github.com/ROCm/FlyDSL/pull/504) | [Feat] support composite type based on DslType | @sjfeng1999 | merged | 2026-05-11 | 2026-05-11 |
| [#501](https://github.com/ROCm/FlyDSL/pull/501) | ci: recover git metadata for wheel builds | @coderfeli | merged | 2026-05-11 | 2026-05-11 |
| [#496](https://github.com/ROCm/FlyDSL/pull/496) | Fix multi process compile v2 | @coderfeli | merged | 2026-05-09 | 2026-05-11 |
| [#499](https://github.com/ROCm/FlyDSL/pull/499) | release: bump version to 0.1.7 and restore gpt-oss ATOM nigh... | @coderfeli | merged | 2026-05-11 | 2026-05-11 |
| [#483](https://github.com/ROCm/FlyDSL/pull/483) | [gfx1250] MoE 2-stage GEMM: MXScale rework + TDM K-loop hois... | @XingerZhu | merged | 2026-05-08 | 2026-05-11 |
| [#498](https://github.com/ROCm/FlyDSL/pull/498) | [gfx1250] Modernize GEMM kernels to high-level Vector API | @aoli26 | merged | 2026-05-09 | 2026-05-11 |
| [#493](https://github.com/ROCm/FlyDSL/pull/493) | ci: gate multi-gpu tests behind explicit triggers | @yanboshao | merged | 2026-05-09 | 2026-05-09 |
| [#495](https://github.com/ROCm/FlyDSL/pull/495) | [CI] Add python code format check | @sjfeng1999 | merged | 2026-05-09 | 2026-05-09 |
| [#488](https://github.com/ROCm/FlyDSL/pull/488) | test: preserve default ROCm backend behavior | @Peter9606 | merged | 2026-05-09 | 2026-05-09 |
| [#463](https://github.com/ROCm/FlyDSL/pull/463) | docs: Update FlyDSL agent guidance | @fsx950223 | merged | 2026-04-30 | 2026-05-09 |
| [#465](https://github.com/ROCm/FlyDSL/pull/465) | some optimization about smoothquant moe | @yadaish | merged | 2026-04-30 | 2026-05-09 |
| [#468](https://github.com/ROCm/FlyDSL/pull/468) | add ps swa | @fsx950223 | merged | 2026-04-30 | 2026-05-09 |
| [#479](https://github.com/ROCm/FlyDSL/pull/479) | fixes shmem SIGSEGV | @yanboshao | merged | 2026-05-07 | 2026-05-09 |
| [#477](https://github.com/ROCm/FlyDSL/pull/477) | use layout to calculate num_ds_load and num_gmem_load | @yadaish | merged | 2026-05-07 | 2026-05-09 |
| [#478](https://github.com/ROCm/FlyDSL/pull/478) | [Refact] Rename JitArgument & DslType interfaces, support Si... | @sjfeng1999 | merged | 2026-05-07 | 2026-05-09 |
| [#492](https://github.com/ROCm/FlyDSL/pull/492) | Move custom LLVM tools build to standalone workflow | @coderfeli | merged | 2026-05-09 | 2026-05-09 |
| [#490](https://github.com/ROCm/FlyDSL/pull/490) | Add custom LLVM tools CI flow | @coderfeli | merged | 2026-05-09 | 2026-05-09 |
| [#484](https://github.com/ROCm/FlyDSL/pull/484) | [gfx1250][tdm] Add K-loop hoist descriptor helpers and modif... | @XingerZhu | merged | 2026-05-08 | 2026-05-09 |
| [#486](https://github.com/ROCm/FlyDSL/pull/486) | support custom mlir opt bin  | @coderfeli | merged | 2026-05-08 | 2026-05-08 |
| [#442](https://github.com/ROCm/FlyDSL/pull/442) | [FLYDSL]: Error message for None in control flow variable an... | @xudoyuan | merged | 2026-04-28 | 2026-05-08 |
| [#480](https://github.com/ROCm/FlyDSL/pull/480) | [Bugfix] [Test] add missing argument to test_blockscale_pres... | @matthiasdiener | merged | 2026-05-07 | 2026-05-08 |
| [#482](https://github.com/ROCm/FlyDSL/pull/482) | Use build-only runner for wheel builds | @coderfeli | merged | 2026-05-08 | 2026-05-08 |
| [#421](https://github.com/ROCm/FlyDSL/pull/421) | feat: align quant and fused kernels with Triton in FlyDSL | @cschenjunlin | merged | 2026-04-21 | 2026-05-08 |
| [#476](https://github.com/ROCm/FlyDSL/pull/476) | support run only mode for AOT CI test | @zhiding512 | merged | 2026-05-06 | 2026-05-08 |
| [#475](https://github.com/ROCm/FlyDSL/pull/475) | Add backend support | @coderfeli | merged | 2026-05-06 | 2026-05-08 |
| [#466](https://github.com/ROCm/FlyDSL/pull/466) | add xcd remap | @solinzby1 | merged | 2026-04-30 | 2026-05-07 |
| [#473](https://github.com/ROCm/FlyDSL/pull/473) | [Feat] Add CoordSwizzle and support composedLayout as outer ... | @sjfeng1999 | merged | 2026-05-06 | 2026-05-07 |
| [#471](https://github.com/ROCm/FlyDSL/pull/471) | Update ATOM nightly models to MXFP4 variants | @coderfeli | merged | 2026-05-06 | 2026-05-06 |
| [#454](https://github.com/ROCm/FlyDSL/pull/454) | feat(pa): add persistent FP8 decode path | @fsx950223 | merged | 2026-04-29 | 2026-05-04 |
| [#418](https://github.com/ROCm/FlyDSL/pull/418) | feat: support mori IR JIT compilation with shmem | @yanboshao | merged | 2026-04-21 | 2026-05-04 |
| [#386](https://github.com/ROCm/FlyDSL/pull/386) | support glibc2.28 | @coderfeli | merged | 2026-04-13 | 2026-05-02 |
| [#469](https://github.com/ROCm/FlyDSL/pull/469) | [Refactor] Refine generic address-space | @sjfeng1999 | merged | 2026-04-30 | 2026-05-02 |
| [#462](https://github.com/ROCm/FlyDSL/pull/462) | clean fa and tune mla slightly | @coderfeli | merged | 2026-04-30 | 2026-05-02 |
| [#460](https://github.com/ROCm/FlyDSL/pull/460) | [DOC] Clean up MLA internal type usage and docs | @coderfeli | merged | 2026-04-29 | 2026-04-30 |
| [#448](https://github.com/ROCm/FlyDSL/pull/448) | Reduce redundant FlyDSL numeric wrappers | @coderfeli | merged | 2026-04-28 | 2026-04-29 |
| [#458](https://github.com/ROCm/FlyDSL/pull/458) | fix: mark fused rope token tensors dynamic | @coderfeli | merged | 2026-04-29 | 2026-04-29 |
| [#457](https://github.com/ROCm/FlyDSL/pull/457) | Add unit/value_attrs params for KernelFunction | @sjfeng1999 | merged | 2026-04-29 | 2026-04-29 |
| [#426](https://github.com/ROCm/FlyDSL/pull/426) | Add TopK Gating Softmax Kernel | @amd-wsung102 | merged | 2026-04-22 | 2026-04-29 |
| [#456](https://github.com/ROCm/FlyDSL/pull/456) | Allow PyPI publish review to run with tests | @coderfeli | merged | 2026-04-29 | 2026-04-29 |
| [#450](https://github.com/ROCm/FlyDSL/pull/450) | Refactor MLA decode kernel: unify types and simplify MLIR ca... | @coderfeli | merged | 2026-04-29 | 2026-04-29 |
| [#455](https://github.com/ROCm/FlyDSL/pull/455) | fix aot stream cachekey | @zhiding512 | merged | 2026-04-29 | 2026-04-29 |
| [#451](https://github.com/ROCm/FlyDSL/pull/451) | [FEAT] Support jit/kernel function as class member | @sjfeng1999 | merged | 2026-04-29 | 2026-04-29 |
| [#447](https://github.com/ROCm/FlyDSL/pull/447) | Port kernels internal types except moe | @coderfeli | merged | 2026-04-28 | 2026-04-29 |
| [#446](https://github.com/ROCm/FlyDSL/pull/446) | Improve stubgen PYTHONPATH handling and availability check | @sjfeng1999 | merged | 2026-04-28 | 2026-04-28 |
| [#444](https://github.com/ROCm/FlyDSL/pull/444) | [ENH] Support IntTuple value as an argument of make_int_tupl... | @sjfeng1999 | merged | 2026-04-28 | 2026-04-28 |
| [#435](https://github.com/ROCm/FlyDSL/pull/435) | Refine hgemm split-k kernel | @xytpai | merged | 2026-04-24 | 2026-04-28 |
| [#445](https://github.com/ROCm/FlyDSL/pull/445) | Use internal types in RDNA GEMM kernels | @coderfeli | merged | 2026-04-28 | 2026-04-28 |
| [#443](https://github.com/ROCm/FlyDSL/pull/443) | Add profile congruence check for prim ops | @sjfeng1999 | merged | 2026-04-28 | 2026-04-28 |
| [#439](https://github.com/ROCm/FlyDSL/pull/439) | fix gemm type to internal | @coderfeli | merged | 2026-04-27 | 2026-04-28 |
| [#440](https://github.com/ROCm/FlyDSL/pull/440) | [CI] Build cp311 + cp313 wheels alongside cp310 + cp312 | @subodh-dubey-amd | merged | 2026-04-28 | 2026-04-28 |
| [#428](https://github.com/ROCm/FlyDSL/pull/428) | CI: add standalone ATOM integration workflow | @gyohuangxin | merged | 2026-04-22 | 2026-04-28 |
| [#441](https://github.com/ROCm/FlyDSL/pull/441) | Support pypi dev version and update to 0.1.5 | @coderfeli | merged | 2026-04-28 | 2026-04-28 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-05-16T09:19:14Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#557](https://github.com/ROCm/TransformerEngine/pull/557) | IFU v2.14.dev0 | @ipanfilo | open | 2026-04-21 | 2026-05-16 |
| [#585](https://github.com/ROCm/TransformerEngine/pull/585) | Add custom multi_tensor_apply kernels (L2norm, Adam) | @matthiasdiener | draft | 2026-05-13 | 2026-05-16 |
| [#568](https://github.com/ROCm/TransformerEngine/pull/568) | add MXFP8 pre-swizzling for gfx1250 GEMM | @matthiasdiener | open | 2026-04-29 | 2026-05-16 |
| [#583](https://github.com/ROCm/TransformerEngine/pull/583) | RMS Norm Optimization | @aris134 | open | 2026-05-12 | 2026-05-16 |
| [#588](https://github.com/ROCm/TransformerEngine/pull/588) | mxfp8: use nvte_multi_tensor_quantize | @matthiasdiener | draft | 2026-05-15 | 2026-05-16 |
| [#574](https://github.com/ROCm/TransformerEngine/pull/574) | ck_tile grouped gemm: more padding | @matthiasdiener | open | 2026-05-05 | 2026-05-15 |
| [#589](https://github.com/ROCm/TransformerEngine/pull/589) | [WIP] Load TE core with RTLD_LOCAL to stop rocroller symbol ... | @sudhu2k | draft | 2026-05-15 | 2026-05-15 |
| [#566](https://github.com/ROCm/TransformerEngine/pull/566) | HipKittens MXFP8 GEMM Support | @alextmagro | open | 2026-04-28 | 2026-05-15 |
| [#573](https://github.com/ROCm/TransformerEngine/pull/573) | [ROCm] Allow bf16/bf16/fp32 in nvte_multi_tensor_gemm dispat... | @lizamd | open | 2026-05-04 | 2026-05-15 |
| [#587](https://github.com/ROCm/TransformerEngine/pull/587) | MXFP8 training bug fixes for quantized_model_init and Torch ... | @sudhu2k | open | 2026-05-15 | 2026-05-15 |
| [#586](https://github.com/ROCm/TransformerEngine/pull/586) | Optimized rocm specific multicast transpose kernel | @alextmagro | open | 2026-05-14 | 2026-05-15 |
| [#582](https://github.com/ROCm/TransformerEngine/pull/582) | CK JIT integration | @ipanfilo | open | 2026-05-11 | 2026-05-14 |
| [#584](https://github.com/ROCm/TransformerEngine/pull/584) | Harden claude-pr-action.yml | @Micky774 | open | 2026-05-12 | 2026-05-12 |
| [#576](https://github.com/ROCm/TransformerEngine/pull/576) | CK Tile Group GEMM gfx1250 | @aris134 | open | 2026-05-06 | 2026-05-12 |
| [#487](https://github.com/ROCm/TransformerEngine/pull/487) | Microbenchmark suite | @Micky774 | open | 2026-03-16 | 2026-05-12 |
| [#478](https://github.com/ROCm/TransformerEngine/pull/478) | Microbenchmarking, Torch+CSV-based | @matthiasdiener | open | 2026-03-10 | 2026-05-11 |
| [#448](https://github.com/ROCm/TransformerEngine/pull/448) | Added initial AI Agent instructions and skills | @Micky774 | open | 2026-02-12 | 2026-05-11 |
| [#538](https://github.com/ROCm/TransformerEngine/pull/538) | NV upstream release 2.12 merge | @Micky774 | open | 2026-04-13 | 2026-05-11 |
| [#578](https://github.com/ROCm/TransformerEngine/pull/578) | CK Tile MXFP8 Group GEMM gfx1250 | @aris134 | open | 2026-05-06 | 2026-05-11 |
| [#581](https://github.com/ROCm/TransformerEngine/pull/581) | Add Tealite: pure-Python TransformerEngine for ROCm/AMD GPUs | @jayfurmanek | open | 2026-05-07 | 2026-05-08 |
| [#543](https://github.com/ROCm/TransformerEngine/pull/543) | CI: auto-trigger AITER prebuilt upload when 3rdparty/aiter u... | @VeeraRajasekhar | open | 2026-04-15 | 2026-05-08 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-05-07 |
| [#563](https://github.com/ROCm/TransformerEngine/pull/563) | Update QoLA reducing [compile time, kernel count, lib size] ... | @Micky774 | open | 2026-04-27 | 2026-05-07 |
| [#570](https://github.com/ROCm/TransformerEngine/pull/570) | [No Merge][No Review] testing aiter auto trigger on gh actio... | @VeeraRajasekhar | draft | 2026-05-01 | 2026-05-02 |
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-04-30 |
| [#542](https://github.com/ROCm/TransformerEngine/pull/542) | [TE] Phase 2 of small-seq cross-attn integration: a separate... | @VeeraRajasekhar | open | 2026-04-15 | 2026-04-28 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-04-24 |
| [#515](https://github.com/ROCm/TransformerEngine/pull/515) | NVFP4: hadamard_transform_cast_fusion_columnwise | @matthiasdiener | draft | 2026-04-01 | 2026-04-20 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-04-14 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-04-07 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-04-07 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-04-07 |
| [#461](https://github.com/ROCm/TransformerEngine/pull/461) | [NO MERGE] Integrate CK varlen cross attention for small-seq... | @VeeraRajasekhar | open | 2026-02-24 | 2026-04-07 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-04-07 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-04-07 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-04-07 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-04-07 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-04-07 |
| [#435](https://github.com/ROCm/TransformerEngine/pull/435) | Update README.rst | @aris134 | draft | 2026-01-28 | 2026-04-07 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-04-07 |
| [#580](https://github.com/ROCm/TransformerEngine/pull/580) | NVFP4: Work around intermittent incorrect results for backwa... | @matthiasdiener | merged | 2026-05-07 | 2026-05-13 |
| [#571](https://github.com/ROCm/TransformerEngine/pull/571) | gfx1250 swizzle_xor changes for FP4 | @matthiasdiener | merged | 2026-05-01 | 2026-05-09 |
| [#560](https://github.com/ROCm/TransformerEngine/pull/560) | Claude PR review use OIDC-free method | @Micky774 | merged | 2026-04-24 | 2026-05-07 |
| [#579](https://github.com/ROCm/TransformerEngine/pull/579) | Fix build on Pytorch 2.11 (#16505) (#575) | @ipanfilo | merged | 2026-05-06 | 2026-05-07 |
| [#527](https://github.com/ROCm/TransformerEngine/pull/527) | Gfx1250 changes | @ipanfilo | merged | 2026-04-07 | 2026-05-06 |
| [#575](https://github.com/ROCm/TransformerEngine/pull/575) | Fix build on Pytorch 2.11 (#16505) | @ipanfilo | merged | 2026-05-05 | 2026-05-05 |
| [#572](https://github.com/ROCm/TransformerEngine/pull/572) | [CI] upgrade hypothesis/setuptools | @matthiasdiener | merged | 2026-05-04 | 2026-05-04 |
| [#555](https://github.com/ROCm/TransformerEngine/pull/555) | ci: add workflow to build and publish CI deps Docker image | @VeeraRajasekhar | merged | 2026-04-20 | 2026-04-29 |
| [#518](https://github.com/ROCm/TransformerEngine/pull/518) | NVFP4 recipe with GEMM via BF16 dequant | @matthiasdiener | merged | 2026-04-02 | 2026-04-29 |
| [#565](https://github.com/ROCm/TransformerEngine/pull/565) | Fix flash-attention build env in CI deps Dockerfile | @VeeraRajasekhar | merged | 2026-04-27 | 2026-04-29 |
| [#567](https://github.com/ROCm/TransformerEngine/pull/567) | Disable all UB layer tests for gfx942 | @alextmagro | merged | 2026-04-28 | 2026-04-29 |
| [#556](https://github.com/ROCm/TransformerEngine/pull/556) | [ROCm] add the bias all row -inf support for jax unfused-att... | @wangye805 | merged | 2026-04-21 | 2026-04-29 |
| [#528](https://github.com/ROCm/TransformerEngine/pull/528) | CI: Refactor ROCm CI to use GPU-sized runners and build-only... | @leo-automation | merged | 2026-04-07 | 2026-04-29 |
| [#551](https://github.com/ROCm/TransformerEngine/pull/551) | Refactor CK FA dispatch, and collapse API | @Micky774 | merged | 2026-04-20 | 2026-04-28 |
| [#529](https://github.com/ROCm/TransformerEngine/pull/529) | Ipanfilo/wheel build action | @ipanfilo | merged | 2026-04-07 | 2026-04-28 |
| [#537](https://github.com/ROCm/TransformerEngine/pull/537) | Full MXFP4 Training Recipe | @sarthak-amd | merged | 2026-04-13 | 2026-04-28 |
| [#508](https://github.com/ROCm/TransformerEngine/pull/508) | [TE] Enable deterministic mode for fused attention | @AllenFarcas | merged | 2026-03-27 | 2026-04-27 |
| [#553](https://github.com/ROCm/TransformerEngine/pull/553) | Refactor TE's CK backend padding add/remove kernels | @Micky774 | merged | 2026-04-20 | 2026-04-27 |
| [#561](https://github.com/ROCm/TransformerEngine/pull/561) | Moved CK/AITER source validation earlier | @Micky774 | merged | 2026-04-24 | 2026-04-27 |
| [#544](https://github.com/ROCm/TransformerEngine/pull/544) | [TE] Improve backward performance for CK Tile FP8 Group GEMM | @aris134 | merged | 2026-04-16 | 2026-04-26 |
| [#562](https://github.com/ROCm/TransformerEngine/pull/562) | [CI] Add aiter installation to CI image for MXFP4 FP4 GEMM k... | @VeeraRajasekhar | merged | 2026-04-24 | 2026-04-25 |
| [#550](https://github.com/ROCm/TransformerEngine/pull/550) | Integrate initial version of QoLA | @Micky774 | merged | 2026-04-20 | 2026-04-24 |
| [#548](https://github.com/ROCm/TransformerEngine/pull/548) | Add Claude PR review/summary action | @Micky774 | merged | 2026-04-17 | 2026-04-24 |
| [#519](https://github.com/ROCm/TransformerEngine/pull/519) | "castonly/casttranspose HIP kernel optimization in fp8 | @alextmagro | merged | 2026-04-04 | 2026-04-23 |
| [#552](https://github.com/ROCm/TransformerEngine/pull/552) | Refactor CK workspace memory management to use a unified tog... | @Micky774 | merged | 2026-04-20 | 2026-04-23 |
| [#549](https://github.com/ROCm/TransformerEngine/pull/549) | PR545 hot fix for un-addressed reviewer comments | @wangye805 | merged | 2026-04-18 | 2026-04-20 |
| [#545](https://github.com/ROCm/TransformerEngine/pull/545) | [ROCm] fix the bug in hipfied optimized cast tranpose flow t... | @wangye805 | merged | 2026-04-16 | 2026-04-19 |
| [#509](https://github.com/ROCm/TransformerEngine/pull/509) | NVFP4 Random Hadamard Transform (butterfly permutation-based... | @matthiasdiener | merged | 2026-03-27 | 2026-04-17 |
| [#505](https://github.com/ROCm/TransformerEngine/pull/505) | NVFP4 dequantization | @aris134 | merged | 2026-03-25 | 2026-04-14 |
| [#534](https://github.com/ROCm/TransformerEngine/pull/534) | Backport fixes to TE2.10 | @ipanfilo | merged | 2026-04-09 | 2026-04-13 |
| [#531](https://github.com/ROCm/TransformerEngine/pull/531) | Fix TE loading w/o meta packages | @ipanfilo | merged | 2026-04-08 | 2026-04-13 |
| [#507](https://github.com/ROCm/TransformerEngine/pull/507) | Mxfp8 cast optimization | @alextmagro | merged | 2026-03-26 | 2026-04-10 |
| [#535](https://github.com/ROCm/TransformerEngine/pull/535) | MXFP4: Add GEMM kernel tuning and MXFP4Quantizer.copy() | @sarthak-amd | merged | 2026-04-09 | 2026-04-09 |
| [#533](https://github.com/ROCm/TransformerEngine/pull/533) | Fix JAX sdist version pinning | @ipanfilo | merged | 2026-04-09 | 2026-04-09 |
| [#532](https://github.com/ROCm/TransformerEngine/pull/532) | Remove OpenMP hotfix | @alextmagro | merged | 2026-04-08 | 2026-04-09 |
| [#522](https://github.com/ROCm/TransformerEngine/pull/522) | CI: enable CI runs on every PR | @matthiasdiener | merged | 2026-04-06 | 2026-04-08 |
| [#475](https://github.com/ROCm/TransformerEngine/pull/475) | Add FP8 Support For CK Tile Group GEMM | @aris134 | merged | 2026-03-06 | 2026-04-07 |
| [#514](https://github.com/ROCm/TransformerEngine/pull/514) | Corrected CI name for pushing to dev | @Micky774 | merged | 2026-04-01 | 2026-04-06 |
| [#521](https://github.com/ROCm/TransformerEngine/pull/521) | Fix TE building on NV platform | @ipanfilo | merged | 2026-04-06 | 2026-04-06 |
| [#516](https://github.com/ROCm/TransformerEngine/pull/516) | Remove unnecessary zeroing in Triton MXFP8 dequantize kernel | @Micky774 | merged | 2026-04-01 | 2026-04-06 |
| [#496](https://github.com/ROCm/TransformerEngine/pull/496) | IFU 2.12 | @Micky774 | merged | 2026-03-18 | 2026-04-03 |
| [#367](https://github.com/ROCm/TransformerEngine/pull/367) | Userbuffer epic | @alextmagro | merged | 2025-11-11 | 2026-04-01 |
| [#513](https://github.com/ROCm/TransformerEngine/pull/513) | Ub mpi hotfix | @alextmagro | merged | 2026-04-01 | 2026-04-01 |
| [#511](https://github.com/ROCm/TransformerEngine/pull/511) | TE building over TheRock | @ipanfilo | merged | 2026-03-30 | 2026-04-01 |
| [#510](https://github.com/ROCm/TransformerEngine/pull/510) | Integrate fix for aiter build w/o torch | @ipanfilo | merged | 2026-03-30 | 2026-03-30 |
| [#450](https://github.com/ROCm/TransformerEngine/pull/450) | Update CI to label-driven testing | @Micky774 | merged | 2026-02-17 | 2026-03-27 |
| [#504](https://github.com/ROCm/TransformerEngine/pull/504) | Update CI runner in rocm-ci.yml to use linux-te-mi35x-8 | @sudhu2k | merged | 2026-03-24 | 2026-03-26 |
| [#472](https://github.com/ROCm/TransformerEngine/pull/472) | NVFP4 cast/transpose without TMA | @matthiasdiener | merged | 2026-03-04 | 2026-03-26 |
| [#483](https://github.com/ROCm/TransformerEngine/pull/483) | fix JAX distributed tests hang: ROCM-1719 | @ipanfilo | merged | 2026-03-14 | 2026-03-26 |
| [#500](https://github.com/ROCm/TransformerEngine/pull/500) | Make distinctive ROCm TE wheels names (#441) | @ipanfilo | merged | 2026-03-20 | 2026-03-26 |
| [#502](https://github.com/ROCm/TransformerEngine/pull/502) | ck_tile grouped GEMM: re-enable accumulate support | @matthiasdiener | merged | 2026-03-23 | 2026-03-26 |
| [#499](https://github.com/ROCm/TransformerEngine/pull/499) | Megatron-LM specific release v2.10 rocm cherrypicks | @sudhu2k | merged | 2026-03-20 | 2026-03-24 |
| [#270](https://github.com/ROCm/TransformerEngine/pull/270) | ResetParam Columnwise usage for Wt FP8 Tranpose | @sarthak-amd | merged | 2025-08-18 | 2026-03-24 |
| [#446](https://github.com/ROCm/TransformerEngine/pull/446) | Update AITER subcommit and refactor internal AITER/CK FA API... | @Micky774 | merged | 2026-02-09 | 2026-03-24 |
| [#501](https://github.com/ROCm/TransformerEngine/pull/501) | [Distributed Optimizer] Fix transpose creation when keep_fp8... | @sudhu2k | merged | 2026-03-20 | 2026-03-23 |
| [#498](https://github.com/ROCm/TransformerEngine/pull/498) | Megatron-LM specific release v2.8 rocm cherrypicks | @sudhu2k | merged | 2026-03-19 | 2026-03-23 |
| [#441](https://github.com/ROCm/TransformerEngine/pull/441) | Make distinctive ROCm TE wheels names | @ipanfilo | merged | 2026-02-03 | 2026-03-20 |
| [#422](https://github.com/ROCm/TransformerEngine/pull/422) | MXFP4 Cast Transpose Triton and Quantizer Infra | @sarthak-amd | merged | 2026-01-20 | 2026-03-18 |
| [#491](https://github.com/ROCm/TransformerEngine/pull/491) | [HOTFIX MGPU unit test] for test_cast_master_weights_to_fp8.... | @sudhu2k | merged | 2026-03-17 | 2026-03-18 |
| [#484](https://github.com/ROCm/TransformerEngine/pull/484) | Alemagro/release v2.10 rocm | @alextmagro | merged | 2026-03-16 | 2026-03-17 |
| [#485](https://github.com/ROCm/TransformerEngine/pull/485) | Update max_fp8 value based on is_fp8_fnuz check in utils.py | @sudhu2k | merged | 2026-03-16 | 2026-03-17 |
| [#490](https://github.com/ROCm/TransformerEngine/pull/490) | Update checkout action version aiter-prebuilt-upload.yml | @leo-automation | merged | 2026-03-17 | 2026-03-17 |
| [#481](https://github.com/ROCm/TransformerEngine/pull/481) | Ipanfilo/backport features to 28 | @ipanfilo | merged | 2026-03-13 | 2026-03-16 |
| [#459](https://github.com/ROCm/TransformerEngine/pull/459) | Always use V2 hipify. Make all hipify results consistent | @ipanfilo | merged | 2026-02-24 | 2026-03-14 |
| [#482](https://github.com/ROCm/TransformerEngine/pull/482) | Change the copyright years to 2026 | @wangye805 | merged | 2026-03-13 | 2026-03-14 |
| [#476](https://github.com/ROCm/TransformerEngine/pull/476) | Use major ROCm version to tag pre-built AITER library | @ipanfilo | merged | 2026-03-09 | 2026-03-13 |
| [#444](https://github.com/ROCm/TransformerEngine/pull/444) | Support release wheels with local version | @ipanfilo | merged | 2026-02-06 | 2026-03-12 |
| [#460](https://github.com/ROCm/TransformerEngine/pull/460) | IFU v2.10 | @alextmagro | merged | 2026-02-24 | 2026-03-11 |
| [#470](https://github.com/ROCm/TransformerEngine/pull/470) | Update README.rst | @wangye805 | merged | 2026-03-04 | 2026-03-04 |
| [#428](https://github.com/ROCm/TransformerEngine/pull/428) | release v2.8 rocm | @VeeraRajasekhar | merged | 2026-01-22 | 2026-03-04 |
| [#471](https://github.com/ROCm/TransformerEngine/pull/471) | [CI] Update release_v2.6_rocm branch to ROCm 7.2 docker | @VeeraRajasekhar | merged | 2026-03-04 | 2026-03-04 |
