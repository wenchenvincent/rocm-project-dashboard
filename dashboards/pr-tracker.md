# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-05-07T10:12:10Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#182281](https://github.com/pytorch/pytorch/pull/182281) | [inductor] Disable overlap scheduling SPMD check by default | @IvanKobzarev | open | 2026-05-04 | 2026-05-07 |
| [#182438](https://github.com/pytorch/pytorch/pull/182438) | [xpu][inductor] update Intel Triton commit pin | @dev-tomek | draft | 2026-05-05 | 2026-05-07 |
| [#167536](https://github.com/pytorch/pytorch/pull/167536) |  [ROCm] Expand triton wheel workflow to build ROCm version N... | @jataylo | open | 2025-11-11 | 2026-05-07 |
| [#178958](https://github.com/pytorch/pytorch/pull/178958) | [DO NOT MERGE][DO NOT TOUCH][ROCm] Triton 3.7 ROCm Cherry-pi... | @naromero77amd | draft | 2026-04-01 | 2026-05-07 |
| [#172512](https://github.com/pytorch/pytorch/pull/172512) | [ROCm] Origami integration for AMD GEMM selection | @umechand-amd | open | 2026-01-14 | 2026-05-07 |
| [#182781](https://github.com/pytorch/pytorch/pull/182781) | [1/N] Use const pointers and references | @cyyever | open | 2026-05-07 | 2026-05-07 |
| [#182763](https://github.com/pytorch/pytorch/pull/182763) | [ROCM][CI] Skip tests which consume excessive run time in CI | @jithunnair-amd | draft | 2026-05-07 | 2026-05-07 |
| [#182425](https://github.com/pytorch/pytorch/pull/182425) | [reland][xpu][test] Port distributed checkpoint test cases o... | @zxd1997066 | draft | 2026-05-05 | 2026-05-07 |
| [#182045](https://github.com/pytorch/pytorch/pull/182045) | [AOTInductor] Preserve CUDA error messages across C ABI boun... | @iuliur-meta | open | 2026-04-30 | 2026-05-07 |
| [#166058](https://github.com/pytorch/pytorch/pull/166058) | Skip test_intra_node_comm_all_reduce for CC < 9.0 | @Flamefire | open | 2025-10-22 | 2026-05-07 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-05-07 |
| [#182537](https://github.com/pytorch/pytorch/pull/182537) | [inductor][estimations] Support sparsity_hint for flex_atten... | @IvanKobzarev | open | 2026-05-05 | 2026-05-07 |
| [#182792](https://github.com/pytorch/pytorch/pull/182792) | [dynamo] Handle current stream with torch.xpu.Stream | @guangyey | open | 2026-05-07 | 2026-05-07 |
| [#177037](https://github.com/pytorch/pytorch/pull/177037) | Add cublasLt as a backend for grouped GEMM (bf16/fp16 suppor... | @gderossi | open | 2026-03-10 | 2026-05-07 |
| [#181518](https://github.com/pytorch/pytorch/pull/181518) | [Inductor] enable MSVC precompiled headers for cpp-wrapper | @yuchengliu1 | open | 2026-04-26 | 2026-05-07 |
| [#180455](https://github.com/pytorch/pytorch/pull/180455) | [AARCH64] Enable MKLDNN backend for AArch64 for INT8 Matmul,... | @agrawal-aka | open | 2026-04-15 | 2026-05-07 |
| [#181574](https://github.com/pytorch/pytorch/pull/181574) | Add linear_cross_entropy implementation with chunking along ... | @pearu | open | 2026-04-27 | 2026-05-07 |
| [#159718](https://github.com/pytorch/pytorch/pull/159718) | [Don't Review] Test XPU CI | @guangyey | draft | 2025-08-02 | 2026-05-07 |
| [#182794](https://github.com/pytorch/pytorch/pull/182794) | [inductor][rocm] Fix AOTInductor autotune int64 Triton kerne... | @Arkar-Hema | open | 2026-05-07 | 2026-05-07 |
| [#182799](https://github.com/pytorch/pytorch/pull/182799) | [Docathon] Convert numerical_accuracy.rst to MyST Markdown [... | @Ashish-Soni08 | open | 2026-05-07 | 2026-05-07 |
| [#182675](https://github.com/pytorch/pytorch/pull/182675) | Vectorized scatter_add with TMA bulk reduce on sm_90+ | @ngimel | open | 2026-05-06 | 2026-05-07 |
| [#182657](https://github.com/pytorch/pytorch/pull/182657) | [ROCm] Fix large ROCm arange launch | @jammm | closed | 2026-05-06 | 2026-05-07 |
| [#170679](https://github.com/pytorch/pytorch/pull/170679) | Fix FileBaton leaving dangling lock files that cause compila... | @LLLLKKKK | open | 2025-12-17 | 2026-05-07 |
| [#178181](https://github.com/pytorch/pytorch/pull/178181) | [Inductor][CK][ROCm] Update CK pin and build wheel alongside... | @tenpercent | open | 2026-03-23 | 2026-05-07 |
| [#115316](https://github.com/pytorch/pytorch/pull/115316) | Automated submodule update: FBGEMM | @facebook-github-bot | open | 2023-12-07 | 2026-05-07 |
| [#182616](https://github.com/pytorch/pytorch/pull/182616) | [ROCm][CI] Fix docker rebuild: explicit pip in conda env, fa... | @jeffdaily | closed | 2026-05-06 | 2026-05-07 |
| [#181309](https://github.com/pytorch/pytorch/pull/181309) | Add FX pass to deduplicate reduce_scatter ops in backward gr... | @aditvenk | open | 2026-04-24 | 2026-05-07 |
| [#182179](https://github.com/pytorch/pytorch/pull/182179) | [CI] Floor known-slow file times when stale per-config data ... | @jithunnair-amd | draft | 2026-05-01 | 2026-05-07 |
| [#180485](https://github.com/pytorch/pytorch/pull/180485) | [ROCm] Use CMake native HIP language support, enable_languag... | @jeffdaily | open | 2026-04-15 | 2026-05-07 |
| [#181643](https://github.com/pytorch/pytorch/pull/181643) | Add optimizer reparameterization helper for non-strict traci... | @tugsbayasgalan | open | 2026-04-27 | 2026-05-07 |
| [#175965](https://github.com/pytorch/pytorch/pull/175965) | Skip test_fake_crossref_backward_amp_nn_functional_bilinear_... | @jkosnox | draft | 2026-02-27 | 2026-05-07 |
| [#159523](https://github.com/pytorch/pytorch/pull/159523) | [inductor] Fix FakeTensorUpdater handling of HOPs | @benjaminglass1 | draft | 2025-07-30 | 2026-05-07 |
| [#178215](https://github.com/pytorch/pytorch/pull/178215) | Support resize_ with address hint | @BoyuanFeng | draft | 2026-03-24 | 2026-05-07 |
| [#182773](https://github.com/pytorch/pytorch/pull/182773) | Skip ROCm MI300 mixed precision norm tests | @aorenste | draft | 2026-05-07 | 2026-05-07 |
| [#182696](https://github.com/pytorch/pytorch/pull/182696) | [CD] Port ROCm manywheel build to the Python pipeline | @atalman | open | 2026-05-06 | 2026-05-07 |
| [#174087](https://github.com/pytorch/pytorch/pull/174087) | [reland][ROCm] remove caffe2 from hipify | @jeffdaily | closed | 2026-02-02 | 2026-05-07 |
| [#182733](https://github.com/pytorch/pytorch/pull/182733) | [ROCm] Exclude arch ck | @alugorey | open | 2026-05-06 | 2026-05-07 |
| [#175097](https://github.com/pytorch/pytorch/pull/175097) | [ROCm][Inductor] New Inductor benchmarker based on Torch Pro... | @naromero77amd | draft | 2026-02-16 | 2026-05-06 |
| [#181578](https://github.com/pytorch/pytorch/pull/181578) | [Draft] [04/27/26] Dashboard result update for ROCm | @jataylo | draft | 2026-04-27 | 2026-05-06 |
| [#182079](https://github.com/pytorch/pytorch/pull/182079) | [ROCm] Enable float8 scaled GEMM TunableOp tests for MI350 | @geozhai | open | 2026-04-30 | 2026-05-06 |
| [#182670](https://github.com/pytorch/pytorch/pull/182670) | [ROCm] Refactor TestSACILP.test_sac_ilp_case1 to be not hard... | @zjliu-amd | draft | 2026-05-06 | 2026-05-06 |
| [#182145](https://github.com/pytorch/pytorch/pull/182145) | [ROCm] Reland #181955: Redirect index_add_ to scatter_add_ f... | @jeffdaily | open | 2026-05-01 | 2026-05-06 |
| [#165997](https://github.com/pytorch/pytorch/pull/165997) | [DO NOT MERGE][ROCm][CI] Increase shards in rocm yml and dis... | @jithunnair-amd | draft | 2025-10-21 | 2026-05-06 |
| [#170187](https://github.com/pytorch/pytorch/pull/170187) | [ROCm][CI] remove some models from dynamo benchmark flaky li... | @AmdSampsa | open | 2025-12-11 | 2026-05-06 |
| [#181288](https://github.com/pytorch/pytorch/pull/181288) | [ROCm] Bump ROCm CI images to 7.2.3 | @apakbin | draft | 2026-04-23 | 2026-05-06 |
| [#181748](https://github.com/pytorch/pytorch/pull/181748) | [Inductor][Triton] Enable decompose_k and use Triton for inn... | @CRobeck | open | 2026-04-28 | 2026-05-06 |
| [#180926](https://github.com/pytorch/pytorch/pull/180926) | [ROCm] Replace MI300 TF32 test skips with measured dispositi... | @jeffdaily | open | 2026-04-20 | 2026-05-06 |
| [#177873](https://github.com/pytorch/pytorch/pull/177873) | [ROCm] Fix ROCm 7.2.0 SIGSEGV by rebuilding CLR and ROCR fro... | @apakbin | draft | 2026-03-19 | 2026-05-05 |
| [#174137](https://github.com/pytorch/pytorch/pull/174137) | [TEST][DO NOT MERGE][DO NOT REBASE][ROCm] test enable maxaut... | @naromero77amd | draft | 2026-02-03 | 2026-05-05 |
| [#181877](https://github.com/pytorch/pytorch/pull/181877) | [ROCm][CI] Enable MicroPipelineTPTest tests on ROCm platform... | @zjliu-amd | open | 2026-04-29 | 2026-05-05 |
| [#182148](https://github.com/pytorch/pytorch/pull/182148) | [ROCm] Fix OpInfo property tests for unary domains | @D0ubl3-A | open | 2026-05-01 | 2026-05-05 |
| [#181875](https://github.com/pytorch/pytorch/pull/181875) | [ROCm][release/2.11] Fix test_transformers.py test suite for... | @arsic3 | open | 2026-04-29 | 2026-05-05 |
| [#178737](https://github.com/pytorch/pytorch/pull/178737) | Enable hipsparselt version and initCusparseltBindings | @rraminen | draft | 2026-03-30 | 2026-05-05 |
| [#175701](https://github.com/pytorch/pytorch/pull/175701) | Make hipify input file reading more robust | @davispuh | open | 2026-02-25 | 2026-05-04 |
| [#181948](https://github.com/pytorch/pytorch/pull/181948) | [ROCm] Bump CK submodule to include gfx1033 support | @harkgill-amd | open | 2026-04-30 | 2026-05-04 |
| [#175753](https://github.com/pytorch/pytorch/pull/175753) | [ROCm] Skipped all the tests that fail on ROCm with latest t... | @iupaikov-amd | draft | 2026-02-25 | 2026-05-03 |
| [#171273](https://github.com/pytorch/pytorch/pull/171273) | [Inductor] Fix missing kernel hash for templated kernels | @GSumanth109 | open | 2025-12-24 | 2026-05-02 |
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
Repo: `jax-ml/jax` | Last collected: 2026-05-07T10:12:19Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#37444](https://github.com/jax-ml/jax/pull/37444) | [ROCm] Version-tier S3 layout, standardized CI job naming, a... | @mminutoli | open | 2026-05-07 | 2026-05-07 |
| [#37053](https://github.com/jax-ml/jax/pull/37053) | [ROCm] Fix env var leak in xla_bridge_test register_plugin t... | @magaonka-amd | open | 2026-04-21 | 2026-05-06 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-05-05 |
| [#36739](https://github.com/jax-ml/jax/pull/36739) | [ROCm] Add Bazel option `remote_download_toplevel` for build... | @tsrw2048 | open | 2026-04-13 | 2026-05-04 |
| [#35785](https://github.com/jax-ml/jax/pull/35785) | [ROCm] Fix and simplify jax rocm plugin init script | @alekstheod | open | 2026-03-10 | 2026-05-04 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37183](https://github.com/jax-ml/jax/pull/37183) | [ROCm] Fix inter-block write race in pallas test_non_range_w... | @magaonka-amd | merged | 2026-04-25 | 2026-04-30 |
| [#36909](https://github.com/jax-ml/jax/pull/36909) | [ROCm] Skip unit tests in `testEighIdentity` because of hipS... | @tsrw2048 | merged | 2026-04-16 | 2026-04-30 |
| [#37044](https://github.com/jax-ml/jax/pull/37044) | Fix security issues in bazel_rocm.yml identified by zizmor. | @copybara-service[bot] | merged | 2026-04-21 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#37198](https://github.com/jax-ml/jax/pull/37198) | [ROCm] Introduce shim script for rocm jax upstream CI | @alekstheod | open | 2026-04-27 | 2026-04-28 |
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
| [#35917](https://github.com/jax-ml/jax/pull/35917) | [ROCm] Skip test_tridiagonal_solve_grad0 due to rocSparse nu... | @AratiGanesh | merged | 2026-03-16 | 2026-03-19 |
| [#35944](https://github.com/jax-ml/jax/pull/35944) | Add ROCm xdist device pinning in conftest.py | @gulsumgudukbay | merged | 2026-03-16 | 2026-03-17 |
| [#35638](https://github.com/jax-ml/jax/pull/35638) | [ROCm] Fix HIP memory leaks in RNN kernels | @magaonka-amd | draft | 2026-03-05 | 2026-03-05 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-05-07T10:12:33Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#41446](https://github.com/vllm-project/vllm/pull/41446) | [Kernel][AMD] Optimize GatedDeltaNet FLA prefill kernels on ... | @zobinHuang | open | 2026-05-01 | 2026-05-07 |
| [#38476](https://github.com/vllm-project/vllm/pull/38476) | TRITON_MLA_SPARSE backend for SM8x/11x/12x DSA Sparse MLA Su... | @haosdent | open | 2026-03-29 | 2026-05-07 |
| [#41713](https://github.com/vllm-project/vllm/pull/41713) | Eliminate redundant MoE buffer copies in AITER fused experts... | @amd-mghanimi | open | 2026-05-05 | 2026-05-07 |
| [#41222](https://github.com/vllm-project/vllm/pull/41222) | [ROCm][AITER] Enable shuffled rope and KV-cache fusion | @tuukkjs | open | 2026-04-29 | 2026-05-07 |
| [#41901](https://github.com/vllm-project/vllm/pull/41901) | [Model] Use AutoWeightsLoader for AXK1 | @wenyili | open | 2026-05-07 | 2026-05-07 |
| [#41394](https://github.com/vllm-project/vllm/pull/41394) | [Kernel][ROCm] Native W4A16 kernel for AMD RDNA3 (gfx1100) —... | @JartX | open | 2026-04-30 | 2026-05-07 |
| [#41895](https://github.com/vllm-project/vllm/pull/41895) | [Bugfix] Restore mp.set_start_method("spawn") in spawn_new_p... | @dzhengAP | open | 2026-05-07 | 2026-05-07 |
| [#41423](https://github.com/vllm-project/vllm/pull/41423) | [Bugfix] Fix spawn_new_process_for_each_test silently swallo... | @dzhengAP | merged | 2026-04-30 | 2026-05-07 |
| [#41675](https://github.com/vllm-project/vllm/pull/41675) | [ROCm] Add QuickReduce min-size override and codec threshold | @akii96 | open | 2026-05-04 | 2026-05-07 |
| [#41679](https://github.com/vllm-project/vllm/pull/41679) | Add ROCm QuickReduce quantization min size override | @akii96 | closed | 2026-05-04 | 2026-05-07 |
| [#41735](https://github.com/vllm-project/vllm/pull/41735) | File system secondary tier implemented in python | @rshavitt | draft | 2026-05-05 | 2026-05-07 |
| [#41930](https://github.com/vllm-project/vllm/pull/41930) | [Bugfix] Fix EPLB expert mapping for DeepSeekV2 and AXK1 | @robellliu-dev | open | 2026-05-07 | 2026-05-07 |
| [#40119](https://github.com/vllm-project/vllm/pull/40119) |  [CPU][RISC-V] Add RVV-optimized attention kernels for RISC-... | @lyd1992 | open | 2026-04-17 | 2026-05-07 |
| [#41866](https://github.com/vllm-project/vllm/pull/41866) | [ROCm] Disable AITER allreduce fusion | @jpvillam-amd | open | 2026-05-06 | 2026-05-07 |
| [#41802](https://github.com/vllm-project/vllm/pull/41802) | use HIP_VERSION variables to guard against duplicate atomicA... | @pmaybank | open | 2026-05-06 | 2026-05-07 |
| [#40344](https://github.com/vllm-project/vllm/pull/40344) | [Fix][ROCm] Resolve MoRI connector hangs at high concurrency | @simondanielsson | open | 2026-04-20 | 2026-05-07 |
| [#40711](https://github.com/vllm-project/vllm/pull/40711) | [Aiter][ROCm] gdn_linear_attn kernel fusion | @tpopp | open | 2026-04-23 | 2026-05-07 |
| [#36517](https://github.com/vllm-project/vllm/pull/36517) | Add VLLM_USE_SPINLOOP_EXT to use more efficient busy polling | @pschlan-amd | open | 2026-03-09 | 2026-05-07 |
| [#40327](https://github.com/vllm-project/vllm/pull/40327) | attention: add USE_TD constexpr for tensor descriptor Q/K/V ... | @afierka-intel | open | 2026-04-20 | 2026-05-07 |
| [#40264](https://github.com/vllm-project/vllm/pull/40264) | [ROCm] Profiler api support for ROCm MORI toy proxy server i... | @itej89 | merged | 2026-04-19 | 2026-05-07 |
| [#41293](https://github.com/vllm-project/vllm/pull/41293) | [Bugfix][ROCm] Fix FP8 per-tensor scale rank mismatch causin... | @nehmathe2 | open | 2026-04-29 | 2026-05-07 |
| [#39783](https://github.com/vllm-project/vllm/pull/39783) | [Feature] Add Int8/FP8-quantized all-reduce | @matkle | open | 2026-04-14 | 2026-05-07 |
| [#41917](https://github.com/vllm-project/vllm/pull/41917) | fixed kimi k2.5 dflash | @hangy-amd | draft | 2026-05-07 | 2026-05-07 |
| [#33127](https://github.com/vllm-project/vllm/pull/33127) | [Kernel] adding native nccl4py support | @pkousha | open | 2026-01-27 | 2026-05-07 |
| [#37993](https://github.com/vllm-project/vllm/pull/37993) | [ROCm] Fall back to native rotary embedding when flash_attn ... | @xuebwang-amd | draft | 2026-03-24 | 2026-05-07 |
| [#39864](https://github.com/vllm-project/vllm/pull/39864) | fix: resolve ROCm VRAM release issue in sleep mode | @aaab8b | closed | 2026-04-15 | 2026-05-07 |
| [#31607](https://github.com/vllm-project/vllm/pull/31607) | [Bugfix] Add SM 12.1 support + Fix GPT-OSS Harmony garbled r... | @ohsono | open | 2026-01-01 | 2026-05-07 |
| [#41779](https://github.com/vllm-project/vllm/pull/41779) | [Kernel] Fuse logit softcapping into a single Triton kernel | @huaxin0 | open | 2026-05-06 | 2026-05-07 |
| [#36634](https://github.com/vllm-project/vllm/pull/36634) | fix mtp launch error in vllm-0.17.1-rc, about cuda graph dur... | @flutist | open | 2026-03-10 | 2026-05-07 |
| [#41181](https://github.com/vllm-project/vllm/pull/41181) | [Bugfix] Fix `RuntimeError: Already borrowed` by adding thre... | @yzong-rh | merged | 2026-04-29 | 2026-05-07 |
| [#41887](https://github.com/vllm-project/vllm/pull/41887) | Revert "[Bugfix] Fix spawn_new_process_for_each_test silentl... | @vllm-agent | draft | 2026-05-07 | 2026-05-07 |
| [#39778](https://github.com/vllm-project/vllm/pull/39778) | [Quantization][Autoround][Toolkit] Add W4A16 Support | @Zhenzhong1 | open | 2026-04-14 | 2026-05-07 |
| [#40549](https://github.com/vllm-project/vllm/pull/40549) | [ROCm] Enable SimpleCPUOffloadConnector on ROCm | @hongxiayang | merged | 2026-04-21 | 2026-05-07 |
| [#33893](https://github.com/vllm-project/vllm/pull/33893) | [Linear Kernel Refactor] Make all scaled MM kernels inherit ... | @maralbahari | open | 2026-02-05 | 2026-05-07 |
| [#41892](https://github.com/vllm-project/vllm/pull/41892) | [Bugfix][Quark] Fix W8A8 INT8 garbage outputs on Step-3.5-Fl... | @JoursBleu | draft | 2026-05-07 | 2026-05-07 |
| [#41786](https://github.com/vllm-project/vllm/pull/41786) | Upgrade the aiter version to v0.1.13-rc4 | @wuhuikx | open | 2026-05-06 | 2026-05-07 |
| [#41187](https://github.com/vllm-project/vllm/pull/41187) | [ROCm] Fix LDS bank conflicts in vecMatMul reduction_smem la... | @wjabbour | open | 2026-04-29 | 2026-05-07 |
| [#40827](https://github.com/vllm-project/vllm/pull/40827) | [ROCm] Rename LLMM1 to vecMatMul, refactor, and fix RDNA4 co... | @wjabbour | open | 2026-04-24 | 2026-05-07 |
| [#39856](https://github.com/vllm-project/vllm/pull/39856) | [XPU] update dp rank w/o env-var isolation | @zhenwei-intel | open | 2026-04-15 | 2026-05-07 |
| [#36949](https://github.com/vllm-project/vllm/pull/36949) | [ROCm][CI] Optimize ROCm Docker build: registry cache, DeepE... | @AndreasKaratzas | open | 2026-03-13 | 2026-05-07 |
| [#28803](https://github.com/vllm-project/vllm/pull/28803) | Starscream Changes to support CPX NPS4 | @sgudapar | open | 2025-11-16 | 2026-05-07 |
| [#30582](https://github.com/vllm-project/vllm/pull/30582) | [ROCm] Restore 16-wide fast path in Triton unified attention | @hyoon1 | open | 2025-12-13 | 2026-05-07 |
| [#37826](https://github.com/vllm-project/vllm/pull/37826) | [ROCm] Widen OAI Triton MoE capability range to include gfx1... | @laudney | open | 2026-03-22 | 2026-05-07 |
| [#40426](https://github.com/vllm-project/vllm/pull/40426) | [ROCM] [FEAT] Integrate Aiter hipBLASLt GEMM online tuning | @hanlin12-AMD | open | 2026-04-21 | 2026-05-07 |
| [#41840](https://github.com/vllm-project/vllm/pull/41840) | [ROCm][CI] Remove `TORCH_NCCL_BLOCKING_WAIT=1` After Bugfix ... | @micah-wil | merged | 2026-05-06 | 2026-05-06 |
| [#40392](https://github.com/vllm-project/vllm/pull/40392) | [Performance][DSR1]: Fused RoPE+KVCache+q_concat for MLA | @Rohan138 | open | 2026-04-20 | 2026-05-06 |
| [#41877](https://github.com/vllm-project/vllm/pull/41877) | [CI] Add tests/parser to CI coverage | @sfeng33 | open | 2026-05-06 | 2026-05-06 |
| [#36297](https://github.com/vllm-project/vllm/pull/36297) | Fused BMM+FP8 quant Triton kernel for MLA _v_up_proj (forwar... | @dorhuri123 | open | 2026-03-07 | 2026-05-06 |
| [#39527](https://github.com/vllm-project/vllm/pull/39527) | [Model][Hardware][AMD][Kernel]: Enable e2e QK Norm + RoPE + ... | @jhu960213 | open | 2026-04-10 | 2026-05-06 |
| [#41825](https://github.com/vllm-project/vllm/pull/41825) | [ROCm][Perf] Fix RMSNorm+Quant fusion for gfx950 (non-fnuz) | @frida-andersson | open | 2026-05-06 | 2026-05-06 |
| [#41835](https://github.com/vllm-project/vllm/pull/41835) | [ROCm][DeepSeek] Enable V3.2 TP4 AITER MLA | @akii96 | open | 2026-05-06 | 2026-05-06 |
| [#9396](https://github.com/vllm-project/vllm/pull/9396) | [Model][Bugfix] Add FATReLU activation and support for openb... | @0xjunhao | merged | 2024-10-16 | 2026-05-06 |
| [#41857](https://github.com/vllm-project/vllm/pull/41857) | [CI] Enable gemma4 parser test on CI | @sfeng33 | merged | 2026-05-06 | 2026-05-06 |
| [#41767](https://github.com/vllm-project/vllm/pull/41767) | [WIP][ROCm] Fix allreduce + RMSNorm fusion pattern matchin | @rbrugaro-amd | draft | 2026-05-06 | 2026-05-06 |
| [#41816](https://github.com/vllm-project/vllm/pull/41816) | [ROCm] Disable AITER allreduce fusion for HIP graph replay | @akii96 | open | 2026-05-06 | 2026-05-06 |
| [#38296](https://github.com/vllm-project/vllm/pull/38296) | [ROCm] aiter_unified_attn fp8 q scale refactor | @divakar-amd | merged | 2026-03-27 | 2026-05-06 |
| [#41856](https://github.com/vllm-project/vllm/pull/41856) | [ROCm][Bugfix] Add +256 col guard to preshuffle logits buffe... | @frida-andersson | open | 2026-05-06 | 2026-05-06 |
| [#41839](https://github.com/vllm-project/vllm/pull/41839) | [Performance][MLA][ROCm] AITER fused QK-RoPE + KV cache + q-... | @xaguilar-amd | draft | 2026-05-06 | 2026-05-06 |
| [#41812](https://github.com/vllm-project/vllm/pull/41812) | [ROCm][DSv4] implement flash sparse mla with triton kernels | @whx-sjtu | draft | 2026-05-06 | 2026-05-06 |
| [#40246](https://github.com/vllm-project/vllm/pull/40246) | [torch.compile] refactor config hashing through compile_fact... | @WorldExplored | open | 2026-04-18 | 2026-05-06 |
| [#39280](https://github.com/vllm-project/vllm/pull/39280) | [ROCm][Perf] Add Fused Shared Expert (FSE) support for Qwen3... | @nholmber | open | 2026-04-08 | 2026-05-06 |
| [#37390](https://github.com/vllm-project/vllm/pull/37390) | Fix Quark OCP-MX W4A6 support: dequant dtype + apply_weights | @vecheruk-amd | open | 2026-03-18 | 2026-05-06 |
| [#41136](https://github.com/vllm-project/vllm/pull/41136) | [ROCm] DeepSeekV4-Flash-Base model enablement on ROCm with t... | @lcskrishna | open | 2026-04-28 | 2026-05-06 |
| [#41806](https://github.com/vllm-project/vllm/pull/41806) | fix nixl side-channel host selection | @shaharmor98 | open | 2026-05-06 | 2026-05-06 |
| [#35859](https://github.com/vllm-project/vllm/pull/35859) | [Quark] Support loading Quark NVFP4 checkpoints in vLLM | @fxmarty-amd | open | 2026-03-03 | 2026-05-06 |
| [#40390](https://github.com/vllm-project/vllm/pull/40390) | [Bugfix][Rocm]Aiter MoE re-uses existing tensor addresses af... | @yuankaichen-amd | merged | 2026-04-20 | 2026-05-06 |
| [#40687](https://github.com/vllm-project/vllm/pull/40687) | [ROCm][Perf] Support N=5 in wvSplitK skinny GEMM kernels for... | @mgehre-amd | open | 2026-04-23 | 2026-05-06 |
| [#40686](https://github.com/vllm-project/vllm/pull/40686) | fix(rocm): remove workaround causing invalid argument on Qwe... | @aaab8b | merged | 2026-04-23 | 2026-05-06 |
| [#41756](https://github.com/vllm-project/vllm/pull/41756) | Fix hipErrorCapturedEvent on RoCM when using LoRA with cuda ... | @Nero10578 | open | 2026-05-05 | 2026-05-06 |
| [#26807](https://github.com/vllm-project/vllm/pull/26807) | [V1][Hybrid] GatedDeltaNet Automatic Prefix Caching (`all`-m... | @simondanielsson | open | 2025-10-14 | 2026-05-06 |
| [#37243](https://github.com/vllm-project/vllm/pull/37243) | [ROCm][CI] Refine gating tests | @AndreasKaratzas | merged | 2026-03-17 | 2026-05-06 |
| [#40749](https://github.com/vllm-project/vllm/pull/40749) | [Bugfix] Skip PP sampled-token receive on last rank during a... | @wi-adam | merged | 2026-04-24 | 2026-05-06 |
| [#41119](https://github.com/vllm-project/vllm/pull/41119) | [ROCm][Bugfix]: dynamically align BLOCK_DMODEL with Lv in ML... | @vllmellm | open | 2026-04-28 | 2026-05-06 |
| [#41575](https://github.com/vllm-project/vllm/pull/41575) | [ROCm][CI] Use vLLM generation defaults for DeepSeek prefetc... | @AndreasKaratzas | merged | 2026-05-03 | 2026-05-06 |
| [#11844](https://github.com/vllm-project/vllm/pull/11844) | Implements dual-chunk-flash-attn backend for dual chunk atte... | @sighingnow | merged | 2025-01-08 | 2026-05-06 |
| [#40415](https://github.com/vllm-project/vllm/pull/40415) | [CI] Automate Docker Hub release image publishing | @khluu | merged | 2026-04-20 | 2026-05-06 |
| [#41746](https://github.com/vllm-project/vllm/pull/41746) | [Bugfix] find_loaded_library: skip stub libraries and contin... | @Lambdauv | open | 2026-05-05 | 2026-05-05 |
| [#40871](https://github.com/vllm-project/vllm/pull/40871) | [New Model][ROCm] Add AMD support for DeepSeek V4 | @whx-sjtu | merged | 2026-04-25 | 2026-05-05 |
| [#40380](https://github.com/vllm-project/vllm/pull/40380) | Require C++20 for compatibility with PyTorch | @r-barnes | open | 2026-04-20 | 2026-05-05 |
| [#41568](https://github.com/vllm-project/vllm/pull/41568) | [Performance][MLA] Lift decode Q-prep (q-absorb + cat + FP8 ... | @xaguilar-amd | open | 2026-05-03 | 2026-05-05 |
| [#41054](https://github.com/vllm-project/vllm/pull/41054) | Fix LFM2 decoding on ROCm | @tianshu-Michael-yu | open | 2026-04-27 | 2026-05-05 |
| [#41002](https://github.com/vllm-project/vllm/pull/41002) | [ROCm][perf] Use workspace manager for sparse indexer alloca... | @tuukkjs | open | 2026-04-27 | 2026-05-05 |
| [#39931](https://github.com/vllm-project/vllm/pull/39931) | [Feature] TurboQuant: support hybrid models and uniform quan... | @JartX | merged | 2026-04-15 | 2026-05-05 |
| [#39136](https://github.com/vllm-project/vllm/pull/39136) | [ROCm][Quantization][2/N] Refactor quark_moe w4a8 w/ oracle  | @BowenBao | merged | 2026-04-07 | 2026-05-05 |
| [#37196](https://github.com/vllm-project/vllm/pull/37196) | [Perf] consolidating, vectorizing and cleaning up CUDA/HIP i... | @GOavi101 | open | 2026-03-16 | 2026-05-05 |
| [#41569](https://github.com/vllm-project/vllm/pull/41569) | [ROCm][CI] Fix MLA prefill scale for DeepSeek GSM8K | @AndreasKaratzas | merged | 2026-05-03 | 2026-05-05 |
| [#37481](https://github.com/vllm-project/vllm/pull/37481) | [XPU] enable is_act_and_mul for xpu | @xuechendi | merged | 2026-03-18 | 2026-05-05 |
| [#39513](https://github.com/vllm-project/vllm/pull/39513) | [ROCm] 1st stage of enabling torch stable on ROCm. | @gshtras | open | 2026-04-10 | 2026-05-04 |
| [#41386](https://github.com/vllm-project/vllm/pull/41386) | [ROCm] ROCm7.2.2 + profiler fix + AITER 0.1.12.post2 | @gshtras | merged | 2026-04-30 | 2026-05-04 |
| [#40977](https://github.com/vllm-project/vllm/pull/40977) | [ROCm][Kernel] Add HybridW4A16LinearKernel: Triton prefill +... | @mgehre-amd | open | 2026-04-27 | 2026-05-04 |
| [#36823](https://github.com/vllm-project/vllm/pull/36823) | [vLLM IR] 2/N fused_add_rms_norm and maybe_inplace overload | @ProExpertProg | merged | 2026-03-11 | 2026-05-04 |
| [#41335](https://github.com/vllm-project/vllm/pull/41335) | [ROCm][CI] Align spec decode logprob test prefill settings | @AndreasKaratzas | merged | 2026-04-30 | 2026-05-04 |
| [#41570](https://github.com/vllm-project/vllm/pull/41570) | [CI] Clean up remote servers on pytest parent exit | @AndreasKaratzas | merged | 2026-05-03 | 2026-05-04 |
| [#41405](https://github.com/vllm-project/vllm/pull/41405) | [ROCm][Bugfix] Fix init-time bias dtype cast when gate.out_d... | @rbrugaro-amd | merged | 2026-04-30 | 2026-05-02 |
| [#41210](https://github.com/vllm-project/vllm/pull/41210) | [ROCm][CI] Upgraded UCX and RIXL | @AndreasKaratzas | merged | 2026-04-29 | 2026-05-02 |
| [#41341](https://github.com/vllm-project/vllm/pull/41341) | [ROCm][CI] Add ROCm score absolute tolerance floor | @AndreasKaratzas | merged | 2026-04-30 | 2026-05-02 |
| [#41165](https://github.com/vllm-project/vllm/pull/41165) | [ROCm][Bugfix][GPTOSS]: fix input_ids and expert_map args fo... | @Rohan138 | merged | 2026-04-28 | 2026-05-01 |
| [#32623](https://github.com/vllm-project/vllm/pull/32623) | [Attention] Abstract the MLA prefill backends and eliminate ... | @MatthewBonanni | merged | 2026-01-19 | 2026-05-01 |
| [#37646](https://github.com/vllm-project/vllm/pull/37646) | [ROCm][FEAT] AITER Fused Allreduce + RMSNorm | @vllmellm | merged | 2026-03-20 | 2026-05-01 |
| [#41217](https://github.com/vllm-project/vllm/pull/41217) | [ROCm][Deepseek] dsv3.2 further optimization | @ganyi1996ppo | merged | 2026-04-29 | 2026-05-01 |
| [#34726](https://github.com/vllm-project/vllm/pull/34726) | [ROCm] Enable DBO (Dynamic Batch Optimization) on ROCm | @raviguptaamd | merged | 2026-02-17 | 2026-05-01 |
| [#40033](https://github.com/vllm-project/vllm/pull/40033) | [NVFP4][Hopper/AMD Instinct] Add Triton kernels for NVFP4 de... | @fxmarty-amd | merged | 2026-04-16 | 2026-04-30 |
| [#20859](https://github.com/vllm-project/vllm/pull/20859) | [Feature] limit thinking tokens (hard limit) | @llsj14 | merged | 2025-07-12 | 2026-04-30 |
| [#41175](https://github.com/vllm-project/vllm/pull/41175) | [ROCm][Bugfix]: W4A4 MOE using emulation instead of AITER on... | @Rohan138 | merged | 2026-04-28 | 2026-04-29 |
| [#40973](https://github.com/vllm-project/vllm/pull/40973) | [Bugfix][CPU] Backport PT cpp codegen indirect_assert scalar... | @amd-lalithnc | merged | 2026-04-27 | 2026-04-29 |
| [#38479](https://github.com/vllm-project/vllm/pull/38479) | [Attention Backend] TurboQuant: 2-bit KV cache compression w... | @vibhavagarwal5 | merged | 2026-03-29 | 2026-04-29 |
| [#41072](https://github.com/vllm-project/vllm/pull/41072) | [CI][AMD][BugFix] Patch has_flashinfer decorator for test_se... | @rasmith | merged | 2026-04-28 | 2026-04-29 |
| [#39801](https://github.com/vllm-project/vllm/pull/39801) | [ROCm][CI] Add missing quantization methods and fix online q... | @AndreasKaratzas | merged | 2026-04-14 | 2026-04-28 |
| [#41076](https://github.com/vllm-project/vllm/pull/41076) | [CI][AMD][BugFix] Update request URL in test_moriio_connecto... | @rasmith | merged | 2026-04-28 | 2026-04-28 |
| [#38371](https://github.com/vllm-project/vllm/pull/38371) | Enable building MoRI with AMD AINIC stack | @ichbinblau | merged | 2026-03-27 | 2026-04-28 |
| [#40537](https://github.com/vllm-project/vllm/pull/40537) | Add system_fingerprint field to OpenAI-compatible API respon... | @simon-mo | merged | 2026-04-21 | 2026-04-27 |
| [#40767](https://github.com/vllm-project/vllm/pull/40767) | [CI][AMD]BugFix] Fix deadlock occuring in test_moe_layer | @rasmith | merged | 2026-04-24 | 2026-04-25 |
| [#38503](https://github.com/vllm-project/vllm/pull/38503) | [ROCm][Engine] Fix GPU memory leaks in engine shutdown and t... | @AndreasKaratzas | merged | 2026-03-30 | 2026-04-25 |
| [#40015](https://github.com/vllm-project/vllm/pull/40015) | [ROCm] Implement GPU-to-NUMA-node detection | @pschlan-amd | merged | 2026-04-16 | 2026-04-23 |
| [#40681](https://github.com/vllm-project/vllm/pull/40681) | [Model] Support Hy3 preview | @stevenkuang-tencent | merged | 2026-04-23 | 2026-04-23 |
| [#40037](https://github.com/vllm-project/vllm/pull/40037) | [ROCm] Add gfx1102/gfx1103 support | @mgehre-amd | merged | 2026-04-16 | 2026-04-23 |
| [#40413](https://github.com/vllm-project/vllm/pull/40413) | [Perf] Optimize batch invariant with fused rms norm, 2.1% E2... | @yewentao256 | merged | 2026-04-20 | 2026-04-21 |
| [#39242](https://github.com/vllm-project/vllm/pull/39242) | [ROCm] Add MLA dual RMS norm fusion (Q, KV) pass for DeepSee... | @rbrugaro-amd | merged | 2026-04-07 | 2026-04-20 |
| [#36276](https://github.com/vllm-project/vllm/pull/36276) | [EPLB] Add nixl-based eplb communicator | @ilmarkov | merged | 2026-03-06 | 2026-04-20 |
| [#39977](https://github.com/vllm-project/vllm/pull/39977) | [XPU] [torch.compile] Skipping CUDA graph memory estimation ... | @chaojun-zhang | merged | 2026-04-16 | 2026-04-20 |
| [#38396](https://github.com/vllm-project/vllm/pull/38396) | [AMD][CI] Update DeepEP branch | @rjrock | merged | 2026-03-27 | 2026-04-17 |
| [#39217](https://github.com/vllm-project/vllm/pull/39217) | [Mistral Grammar] Fix tool and reasoning parsing | @juliendenize | merged | 2026-04-07 | 2026-04-16 |
| [#37352](https://github.com/vllm-project/vllm/pull/37352) | [Kernel][Hardware][AMD] Add TritonW4A16LinearKernel for ROCm | @jatseng-ai | merged | 2026-03-17 | 2026-04-10 |
| [#39421](https://github.com/vllm-project/vllm/pull/39421) | [ROCm][CI] Resolved nvidia package deps issue | @AndreasKaratzas | merged | 2026-04-09 | 2026-04-09 |
| [#33825](https://github.com/vllm-project/vllm/pull/33825) | [vLLM IR] 1/N Implement IR skeleton and rms_norm op | @ProExpertProg | merged | 2026-02-04 | 2026-04-09 |
| [#39181](https://github.com/vllm-project/vllm/pull/39181) | [Bugfix]Fix EP precision for Qwen3.5, Qwen3-Next | @USTCKAY | merged | 2026-04-07 | 2026-04-09 |
| [#33892](https://github.com/vllm-project/vllm/pull/33892) | [W8A8 Block Linear Refactor][2/N] Remove W8A8Fp8BlockLinearO... | @maralbahari | merged | 2026-02-05 | 2026-04-09 |
| [#38580](https://github.com/vllm-project/vllm/pull/38580) | [ROCm][CI-Build] Cherry pick triton BUFFER_OPS fix and updat... | @gshtras | merged | 2026-03-30 | 2026-04-08 |
| [#32914](https://github.com/vllm-project/vllm/pull/32914) | [ROCm][perf] Shuffle KV cache to use paged_attention_common | @samutamm | merged | 2026-01-23 | 2026-04-08 |
| [#39224](https://github.com/vllm-project/vllm/pull/39224) | [Bugfix] Cuda Clean up scales Kvcache fp8/int8_per_token_hea... | @JartX | merged | 2026-04-07 | 2026-04-08 |
| [#38504](https://github.com/vllm-project/vllm/pull/38504) | [Kernels][MoE] Fix legacy_routing to use bitmatrix-based rou... | @AndreasKaratzas | merged | 2026-03-30 | 2026-04-07 |
| [#38961](https://github.com/vllm-project/vllm/pull/38961) | [IR][RmsNorm] pass None if not has_weight | @lk-chen | merged | 2026-04-04 | 2026-04-04 |
| [#36836](https://github.com/vllm-project/vllm/pull/36836) | [Feat][Executor] Introduce RayExecutorV2 | @jeffreywang-anyscale | merged | 2026-03-12 | 2026-04-01 |
| [#37221](https://github.com/vllm-project/vllm/pull/37221) | [3/n] Migrate cutlass/scaled_mm_entry.cu torch stable ABI  | @mikaylagawarecki | merged | 2026-03-16 | 2026-03-31 |
| [#38108](https://github.com/vllm-project/vllm/pull/38108) | Fix Device Index for ROCm Ray Workers in MoE Benchmark | @li-liwen | merged | 2026-03-25 | 2026-03-28 |
| [#36702](https://github.com/vllm-project/vllm/pull/36702) | [ROCm] Attention selector reordering | @gshtras | merged | 2026-03-10 | 2026-03-28 |
| [#37930](https://github.com/vllm-project/vllm/pull/37930) | [ROCm][CI] Add uv pip compile workflow for rocm-test.txt loc... | @AndreasKaratzas | merged | 2026-03-23 | 2026-03-26 |
| [#36058](https://github.com/vllm-project/vllm/pull/36058) | [2/n] Migrate per_token_group_quant to torch stable ABI | @mikaylagawarecki | merged | 2026-03-04 | 2026-03-25 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-05-07T10:12:48Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#22872](https://github.com/sgl-project/sglang/pull/22872) | [Fix][Perf] Improve Elastic EP fault tolerance with direct c... | @KMSorSMS | open | 2026-04-15 | 2026-05-07 |
| [#24129](https://github.com/sgl-project/sglang/pull/24129) | fix(aiter): drop FP8 KV upcast; use native FP8 path in paged... | @fanxingran | open | 2026-04-30 | 2026-05-07 |
| [#24594](https://github.com/sgl-project/sglang/pull/24594) | [DRAFT] [AMD] [ROCM] Opt ds_v4 attention kernels | @benenzhu | open | 2026-05-07 | 2026-05-07 |
| [#24601](https://github.com/sgl-project/sglang/pull/24601) | [PD] Centralize per-room cleanup in common backend | @ShangmingCai | open | 2026-05-07 | 2026-05-07 |
| [#24005](https://github.com/sgl-project/sglang/pull/24005) | [AMD] Enable dual-stream MoE on ROCm | @inkcherry | merged | 2026-04-29 | 2026-05-07 |
| [#23261](https://github.com/sgl-project/sglang/pull/23261) | [AMD] enable aiter attention backend for non-power 2 rope/no... | @amd-oshkarav | open | 2026-04-20 | 2026-05-07 |
| [#24569](https://github.com/sgl-project/sglang/pull/24569) | [AMD] Register 8 CPU-bound unit tests for AMD 1-GPU PR CI | @michaelzhang-ai | open | 2026-05-07 | 2026-05-07 |
| [#23882](https://github.com/sgl-project/sglang/pull/23882) | Deepseek V4 rebase tracking | @hnyls2002 | open | 2026-04-27 | 2026-05-07 |
| [#21388](https://github.com/sgl-project/sglang/pull/21388) | Multi platform Plugin | @Baidu-AIAK | merged | 2026-03-25 | 2026-05-07 |
| [#20672](https://github.com/sgl-project/sglang/pull/20672) | [MUSA][17/N] ci: Add MUSA diffusion, sgl-kernel tests, and C... | @johnnycxm | open | 2026-03-16 | 2026-05-07 |
| [#24135](https://github.com/sgl-project/sglang/pull/24135) | Bingxche/fix amd mm | @bingxche | draft | 2026-04-30 | 2026-05-07 |
| [#24592](https://github.com/sgl-project/sglang/pull/24592) | [MUSA] Bump torchada to 0.1.54 | @yeahdongcn | open | 2026-05-07 | 2026-05-07 |
| [#21491](https://github.com/sgl-project/sglang/pull/21491) | Enable Fused Shared Expert for FlashInfer TrtLLM FP8 Block-S... | @wenscarl | draft | 2026-03-26 | 2026-05-07 |
| [#17392](https://github.com/sgl-project/sglang/pull/17392) | Add BF16 support to EP-MoE for DeepGEMM | @froststeam | open | 2026-01-20 | 2026-05-07 |
| [#24584](https://github.com/sgl-project/sglang/pull/24584) | amd/deepseek_v4 integration 13/N Attn kernel early exit with... | @1am9trash | merged | 2026-05-07 | 2026-05-07 |
| [#24572](https://github.com/sgl-project/sglang/pull/24572) | [AMD] Register 12 server-style 1-GPU tests for AMD PR CI | @michaelzhang-ai | open | 2026-05-07 | 2026-05-07 |
| [#24587](https://github.com/sgl-project/sglang/pull/24587) | [AMD][aiter] Fix cuda_graph_kv_indices OOB under page_size>1 | @xiaobochen-amd | open | 2026-05-07 | 2026-05-07 |
| [#24477](https://github.com/sgl-project/sglang/pull/24477) | [AMD] Fix Quark MXFP4 mapping for Kimi K2.5 | @yuychang | open | 2026-05-06 | 2026-05-07 |
| [#24586](https://github.com/sgl-project/sglang/pull/24586) | [AMD] WIP - update scripts/ci/amd/ensure_vram_clear.sh | @yctseng0211 | draft | 2026-05-07 | 2026-05-07 |
| [#24426](https://github.com/sgl-project/sglang/pull/24426) | [AMD] Add Xiaomi MiMo-V2.5-Pro in nightly tests for MI30x an... | @michaelzhang-ai | open | 2026-05-05 | 2026-05-07 |
| [#24541](https://github.com/sgl-project/sglang/pull/24541) | [AMD] feat(attention): pick native vs padded MLA decode head... | @tnguyeng | open | 2026-05-06 | 2026-05-07 |
| [#23562](https://github.com/sgl-project/sglang/pull/23562) | [AMD] Enable preshuffle paged MQA and page_size=64 for NSA i... | @1am9trash | open | 2026-04-23 | 2026-05-07 |
| [#24476](https://github.com/sgl-project/sglang/pull/24476) | [AMD] Skip x_scale.transpose+contiguous before bpreshuffle G... | @Jacob0226 | open | 2026-05-06 | 2026-05-07 |
| [#20479](https://github.com/sgl-project/sglang/pull/20479) | Support Triton MLA FP8 KV cache | @b8zhong | merged | 2026-03-13 | 2026-05-07 |
| [#24363](https://github.com/sgl-project/sglang/pull/24363) | Turn on JIT custom AR implementation by default | @b8zhong | open | 2026-05-04 | 2026-05-07 |
| [#24253](https://github.com/sgl-project/sglang/pull/24253) | ci: combine H200 8-GPU warmup steps and surface server log o... | @alisonshao | open | 2026-05-02 | 2026-05-06 |
| [#24331](https://github.com/sgl-project/sglang/pull/24331) | chore: update CI test est_time values | @sglang-bot | open | 2026-05-04 | 2026-05-06 |
| [#24535](https://github.com/sgl-project/sglang/pull/24535) | amd/deepseek_v4 integration 12/N enable triton swa prepare k... | @kkHuang-amd | merged | 2026-05-06 | 2026-05-06 |
| [#24227](https://github.com/sgl-project/sglang/pull/24227) | [diffusion] WanVideo TeaCache skipping is off-by-one | @eitanturok | open | 2026-05-01 | 2026-05-06 |
| [#24530](https://github.com/sgl-project/sglang/pull/24530) | [AMD] WIP - add amd nightly test | @yctseng0211 | draft | 2026-05-06 | 2026-05-06 |
| [#24528](https://github.com/sgl-project/sglang/pull/24528) | WIP: [AMD] Enhance wheel support for ROCm | @akao-amd | draft | 2026-05-06 | 2026-05-06 |
| [#24405](https://github.com/sgl-project/sglang/pull/24405) | [AMD] Eliminate per-layer direct_copy in MLA o_proj input on... | @sogalin | open | 2026-05-05 | 2026-05-06 |
| [#24424](https://github.com/sgl-project/sglang/pull/24424) | amd/deepseek_v4 integration 11/N Compressor element-wise ker... | @1am9trash | merged | 2026-05-05 | 2026-05-06 |
| [#24125](https://github.com/sgl-project/sglang/pull/24125) | [AMD] Skip redundant CatArrayBatchedCopy in GLM-5 NSA TileLa... | @Jacob0226 | open | 2026-04-30 | 2026-05-06 |
| [#24148](https://github.com/sgl-project/sglang/pull/24148) | [AMD] Add _skip_rope_for_aiter_fused_mla method and check to... | @amd-mvarjoka | open | 2026-04-30 | 2026-05-06 |
| [#22665](https://github.com/sgl-project/sglang/pull/22665) | [PD] MORI-IO: Add state transfer, inline transfer model, and... | @maning00 | open | 2026-04-13 | 2026-05-06 |
| [#24480](https://github.com/sgl-project/sglang/pull/24480) | [AMD] WIP - Nightly Test | @yctseng0211 | draft | 2026-05-06 | 2026-05-06 |
| [#23633](https://github.com/sgl-project/sglang/pull/23633) | [MUSA] Use MUSA-optimized operators in piecewise CUDA graph | @popsiclexu | draft | 2026-04-24 | 2026-05-06 |
| [#24457](https://github.com/sgl-project/sglang/pull/24457) | chore: bump sgl-kernel version to 0.4.2.post1 | @sglang-bot | merged | 2026-05-05 | 2026-05-05 |
| [#22289](https://github.com/sgl-project/sglang/pull/22289) | [Bugfix] multimodal_gen(hunyuan3d): honor config precisions ... | @jy-song-hub | open | 2026-04-07 | 2026-05-05 |
| [#20360](https://github.com/sgl-project/sglang/pull/20360) | [AMD][Bug fix] Fix NSA context parallelism (round-robin-spli... | @pbkowalski | open | 2026-03-11 | 2026-05-05 |
| [#22201](https://github.com/sgl-project/sglang/pull/22201) | [AMD][CI] Add Gemma 4 nightly accuracy tests for MI30x and M... | @michaelzhang-ai | open | 2026-04-06 | 2026-05-05 |
| [#24319](https://github.com/sgl-project/sglang/pull/24319) | [AMD] fix tbo specv2 seq_lens_cpu NoneType error | @billishyahao | merged | 2026-05-03 | 2026-05-05 |
| [#24407](https://github.com/sgl-project/sglang/pull/24407) | [AMD] fix(docker): unbreak nightly when archive.ubuntu.com:8... | @yctseng0211 | merged | 2026-05-05 | 2026-05-05 |
| [#23146](https://github.com/sgl-project/sglang/pull/23146) | [AMD] Enable EAGLE speculative decoding for Qwen3.5 FP8 and ... | @hubertlu-tw | merged | 2026-04-18 | 2026-05-05 |
| [#23848](https://github.com/sgl-project/sglang/pull/23848) | [AMD] Add Kimi-K2.6 in nightly tests for MI30x and MI35x | @michaelzhang-ai | merged | 2026-04-27 | 2026-05-05 |
| [#23608](https://github.com/sgl-project/sglang/pull/23608) | Add AMD support for DeepSeek V4 | @AgainstEntropy | open | 2026-04-24 | 2026-05-05 |
| [#24360](https://github.com/sgl-project/sglang/pull/24360) | [AMD] Replace naive triton RMSNorm with aiter RMSNorm for di... | @yichiche | open | 2026-05-04 | 2026-05-05 |
| [#24398](https://github.com/sgl-project/sglang/pull/24398) | [bugfix] +1 padding row in compress state | @RolaoDenthu | merged | 2026-05-05 | 2026-05-05 |
| [#24262](https://github.com/sgl-project/sglang/pull/24262) | (3/n - prefill optimize)[LoRA][MoE] Optimize virtual experts... | @yushengsu-thu | open | 2026-05-02 | 2026-05-05 |
| [#24340](https://github.com/sgl-project/sglang/pull/24340) | dedup state_kv_args setup into helper | @hnyls2002 | merged | 2026-05-04 | 2026-05-04 |
| [#23581](https://github.com/sgl-project/sglang/pull/23581) | [AMD] Default SGLANG_USE_AITER_AR to false to avoid HIP grap... | @andyluo7 | open | 2026-04-23 | 2026-05-04 |
| [#24355](https://github.com/sgl-project/sglang/pull/24355) | amd/deepseek_v4 integration 10/N optimize mhc performance | @kkHuang-amd | merged | 2026-05-04 | 2026-05-04 |
| [#11052](https://github.com/sgl-project/sglang/pull/11052) | [Ascend] Add Ascend NPU support for sglang.check_env & rewor... | @Alexhaoge | merged | 2025-09-29 | 2026-05-04 |
| [#8909](https://github.com/sgl-project/sglang/pull/8909) | [feat]Ascend NPU Gemma-3-12b and Gemma-3-27b support | @VDV1985 | merged | 2025-08-07 | 2026-05-04 |
| [#22037](https://github.com/sgl-project/sglang/pull/22037) | [AMD][Dockerfile] Multi-stage build for ROCm image to reduce... | @Duyi-Wang | open | 2026-04-03 | 2026-05-04 |
| [#24203](https://github.com/sgl-project/sglang/pull/24203) | [AMD] Deepseek v4 Flash  / Pro nightly tests for MI35x ROCm ... | @bingxche | merged | 2026-05-01 | 2026-05-04 |
| [#24339](https://github.com/sgl-project/sglang/pull/24339) | revert rocm artifacts from dsv4-rebase (cuda-only scope) | @hnyls2002 | merged | 2026-05-04 | 2026-05-04 |
| [#24337](https://github.com/sgl-project/sglang/pull/24337) | amd/deepseek_v4 integration 9/N - Check MoE weight type from... | @kkHuang-amd | merged | 2026-05-04 | 2026-05-04 |
| [#24031](https://github.com/sgl-project/sglang/pull/24031) | amd/deepseek_v4 integration 3/N - FP4 Models 0428 | @kkHuang-amd | merged | 2026-04-29 | 2026-05-04 |
| [#24127](https://github.com/sgl-project/sglang/pull/24127) | amd/deepseek_v4 integration 6/N - Fix run failed of dp enabl... | @kkHuang-amd | merged | 2026-04-30 | 2026-05-04 |
| [#24216](https://github.com/sgl-project/sglang/pull/24216) | [Test] Add OpenAI tokenize serving unit tests | @wenkikikiki | open | 2026-05-01 | 2026-05-03 |
| [#24305](https://github.com/sgl-project/sglang/pull/24305) | test: add OpenAI classify serving unit coverage | @wenkikikiki | open | 2026-05-03 | 2026-05-03 |
| [#24211](https://github.com/sgl-project/sglang/pull/24211) | [Feat] DWDP Implementation for DeepSeek R1 | @AMD-yanfeiwang | draft | 2026-05-01 | 2026-05-03 |
| [#24290](https://github.com/sgl-project/sglang/pull/24290) | [LoRA] Add Kimi K2.5 NVFP4 expert LoRA support | @gh1595 | draft | 2026-05-03 | 2026-05-03 |
| [#24280](https://github.com/sgl-project/sglang/pull/24280) | [Kernel] Support GELU activation in compressed-tensors W4A16... | @Reza2kn | open | 2026-05-02 | 2026-05-02 |
| [#20894](https://github.com/sgl-project/sglang/pull/20894) | Skip unnecessary testcases for CPU | @yanbing-j | draft | 2026-03-19 | 2026-05-02 |
| [#24259](https://github.com/sgl-project/sglang/pull/24259) | [AMD] enable sdma for moriep unittest | @billishyahao | merged | 2026-05-02 | 2026-05-02 |
| [#24249](https://github.com/sgl-project/sglang/pull/24249) | amd/deepseek_v4 integration 8/N - fuse compress decode 0501 | @RolaoDenthu | merged | 2026-05-01 | 2026-05-02 |
| [#24247](https://github.com/sgl-project/sglang/pull/24247) | [CI] release-whl-kernel: extract composite action and consol... | @Kangyan-Zhou | draft | 2026-05-01 | 2026-05-01 |
| [#23760](https://github.com/sgl-project/sglang/pull/23760) | [MoE] Unify DeepEPMoE+MoriEPMoE through AITER MoeRunner pre/... | @ch-wan | open | 2026-04-26 | 2026-05-01 |
| [#23957](https://github.com/sgl-project/sglang/pull/23957) | [AMD] Add CDNA4 Gluon Extend Attention to Triton Attention B... | @realvideogame2 | open | 2026-04-28 | 2026-05-01 |
| [#24218](https://github.com/sgl-project/sglang/pull/24218) | Upd: AITER->(#2879)a6bb499 | @HaiShaw | merged | 2026-05-01 | 2026-05-01 |
| [#24205](https://github.com/sgl-project/sglang/pull/24205) | [AMD] fix moriep unittest failure | @billishyahao | merged | 2026-05-01 | 2026-05-01 |
| [#24158](https://github.com/sgl-project/sglang/pull/24158) | [ROCm]Add RDNA4 GPU Support for sgl-kernel | @zhangnju | open | 2026-04-30 | 2026-05-01 |
| [#23597](https://github.com/sgl-project/sglang/pull/23597) | [MoE] Add Aiter MoE runner backend and purge aiter.fused_moe... | @ch-wan | merged | 2026-04-24 | 2026-05-01 |
| [#24084](https://github.com/sgl-project/sglang/pull/24084) | [Bench] extend MMMU answer extractor with explicit-commit pa... | @AgainstEntropy | merged | 2026-04-29 | 2026-05-01 |
| [#24191](https://github.com/sgl-project/sglang/pull/24191) | [CI] release-whl-kernel: skip musa wheels in update_kernel_w... | @Fridge003 | merged | 2026-05-01 | 2026-05-01 |
| [#23970](https://github.com/sgl-project/sglang/pull/23970) | [HiSparse][ROCm] Fix long prompt swap-in | @andyluo7 | draft | 2026-04-28 | 2026-04-30 |
| [#23963](https://github.com/sgl-project/sglang/pull/23963) | [HiSparse][ROCm] Add GLM5 DSA E2E coverage | @andyluo7 | draft | 2026-04-28 | 2026-04-30 |
| [#23884](https://github.com/sgl-project/sglang/pull/23884) | [HiSparse][ROCm] Enable runtime unit path on HIP | @andyluo7 | draft | 2026-04-27 | 2026-04-30 |
| [#23878](https://github.com/sgl-project/sglang/pull/23878) | [HiSparse][ROCm] Add HIP JIT kernel fallback | @andyluo7 | draft | 2026-04-27 | 2026-04-30 |
| [#23877](https://github.com/sgl-project/sglang/pull/23877) | [HiSparse][ROCm] Use TileLang NSA backend policy on HIP | @andyluo7 | open | 2026-04-27 | 2026-04-30 |
| [#23975](https://github.com/sgl-project/sglang/pull/23975) | Fix LFM2 ShortConv Mamba State Indexing | @hubertlu-tw | merged | 2026-04-29 | 2026-04-30 |
| [#24170](https://github.com/sgl-project/sglang/pull/24170) | chore: bump sgl-kernel version to 0.4.2 | @sglang-bot | merged | 2026-04-30 | 2026-04-30 |
| [#24143](https://github.com/sgl-project/sglang/pull/24143) | amd/deepseek_v4 integration 7/N - topk512transform kernel 04... | @1am9trash | merged | 2026-04-30 | 2026-04-30 |
| [#23654](https://github.com/sgl-project/sglang/pull/23654) | [MUSA][19/N] Support qwen series models | @froststeam | merged | 2026-04-24 | 2026-04-30 |
| [#24155](https://github.com/sgl-project/sglang/pull/24155) | [AMD] Nightly image release for deepseek v4 | @yctseng0211 | merged | 2026-04-30 | 2026-04-30 |
| [#24151](https://github.com/sgl-project/sglang/pull/24151) | [Docker][ROCm] Bump ROCm720 base image from 7.2.0 to 7.2.2 t... | @andyluo7 | open | 2026-04-30 | 2026-04-30 |
| [#18810](https://github.com/sgl-project/sglang/pull/18810) | [DLLM] Add fused Triton post-process kernel with on-device f... | @YJMSTR | open | 2026-02-13 | 2026-04-30 |
| [#24133](https://github.com/sgl-project/sglang/pull/24133) | [NPU]: Optimize xgrammar token bitmask on NPU  with AscendC | @ChefWu551 | open | 2026-04-30 | 2026-04-30 |
| [#23929](https://github.com/sgl-project/sglang/pull/23929) | [AMD] Support sdma path for moriep | @billishyahao | merged | 2026-04-28 | 2026-04-30 |
| [#23062](https://github.com/sgl-project/sglang/pull/23062) | [bugfix]fix(qwen3_5): broadcast per-tensor scale in _make_pa... | @kkyyxhll | merged | 2026-04-17 | 2026-04-30 |
| [#24112](https://github.com/sgl-project/sglang/pull/24112) | [AMD] Update AMD Nightly Test checkout mechanism | @yctseng0211 | merged | 2026-04-30 | 2026-04-30 |
| [#23080](https://github.com/sgl-project/sglang/pull/23080) | Fix triton and wave attention backends for mamba-hybrid mode... | @ashutoshuiuc | open | 2026-04-17 | 2026-04-29 |
| [#22416](https://github.com/sgl-project/sglang/pull/22416) | [Apple Silicon] [MLX] MLX decode partial overlap scheduling ... | @changminbark | merged | 2026-04-09 | 2026-04-29 |
| [#24023](https://github.com/sgl-project/sglang/pull/24023) | ci: add /rerun-group to rerun all registered tests in a grou... | @alphabetc1 | merged | 2026-04-29 | 2026-04-29 |
| [#24050](https://github.com/sgl-project/sglang/pull/24050) | amd/deepseek_v4 integration 5/N - indexer TilelangAttn 0428 | @1am9trash | merged | 2026-04-29 | 2026-04-29 |
| [#24065](https://github.com/sgl-project/sglang/pull/24065) | [AMD] Update AMD CI workflow concurrency group  | @yctseng0211 | merged | 2026-04-29 | 2026-04-29 |
| [#24043](https://github.com/sgl-project/sglang/pull/24043) | [JIT Kernel] Migrate causal_conv1d from AOT to JIT  | @Godmook | open | 2026-04-29 | 2026-04-29 |
| [#23940](https://github.com/sgl-project/sglang/pull/23940) | [AMD] Fix CI RuntimeError: opentelemetry package is not inst... | @yichiche | merged | 2026-04-28 | 2026-04-29 |
| [#23832](https://github.com/sgl-project/sglang/pull/23832) | amd/deepseek_v4 integration 2/N - cuda graph 0426 | @kkHuang-amd | merged | 2026-04-27 | 2026-04-29 |
| [#23388](https://github.com/sgl-project/sglang/pull/23388) | [Speculative][ROCm/MI355X] Enable DFlash speculative decodin... | @zhentaocc | draft | 2026-04-21 | 2026-04-29 |
| [#22938](https://github.com/sgl-project/sglang/pull/22938) | [AMD][MI30X] Restore DeepSeek MLA MI300X paths after MLA ref... | @zhentaocc | open | 2026-04-16 | 2026-04-29 |
| [#23974](https://github.com/sgl-project/sglang/pull/23974) | [AMD] Fix Aiter RMSNorm layout handling | @hubertlu-tw | merged | 2026-04-29 | 2026-04-29 |
| [#13760](https://github.com/sgl-project/sglang/pull/13760) | [AMD] Diffusion Support on ROCm | @zyzshishui | merged | 2025-11-22 | 2026-04-29 |
| [#23646](https://github.com/sgl-project/sglang/pull/23646) | [MUSA][Diffusion] Fix fa3 API on MT MUSA | @wenqf11 | merged | 2026-04-24 | 2026-04-28 |
| [#23770](https://github.com/sgl-project/sglang/pull/23770) | [AMD] Restore CK gemm_a8w8_blockscale for non-tuned shapes | @yctseng0211 | open | 2026-04-26 | 2026-04-28 |
| [#13774](https://github.com/sgl-project/sglang/pull/13774) | Avoid failed import of aiter in `QuarkW4A4MXFP4` when using ... | @Inokinoki | open | 2025-11-22 | 2026-04-28 |
| [#23787](https://github.com/sgl-project/sglang/pull/23787) | amd/deepseek_v4 integration 1/N - 0426 | @HaiShaw | merged | 2026-04-27 | 2026-04-27 |
| [#23707](https://github.com/sgl-project/sglang/pull/23707) | [MoE] Deprecate act_and_mul_triton; fold filter_expert into ... | @ch-wan | merged | 2026-04-25 | 2026-04-26 |
| [#23747](https://github.com/sgl-project/sglang/pull/23747) | [CI] release-whl-kernel: clean root-owned build artifacts be... | @Kangyan-Zhou | merged | 2026-04-26 | 2026-04-26 |
| [#23720](https://github.com/sgl-project/sglang/pull/23720) | chore: bump sgl-kernel version to 0.4.1.post1 | @sglang-bot | merged | 2026-04-25 | 2026-04-26 |
| [#23648](https://github.com/sgl-project/sglang/pull/23648) | [diffusion] model: Fix FLUX.1/2 graph breaks | @avjves | merged | 2026-04-24 | 2026-04-25 |
| [#23699](https://github.com/sgl-project/sglang/pull/23699) | [NSA] Fall back to fast_hadamard_transform when sgl_kernel l... | @Fridge003 | merged | 2026-04-25 | 2026-04-25 |
| [#23575](https://github.com/sgl-project/sglang/pull/23575) | [AMD] fused qk gemma norm kernels to reduce four kernels  | @kkHuang-amd | merged | 2026-04-23 | 2026-04-25 |
| [#22094](https://github.com/sgl-project/sglang/pull/22094) | [JIT Kernel] Reland JIT activation | @DarkSharpness | merged | 2026-04-04 | 2026-04-25 |
| [#23671](https://github.com/sgl-project/sglang/pull/23671) | [AMD][bugfix] add gate rocm >= 7.2 for bpreshuffle | @RolaoDenthu | merged | 2026-04-24 | 2026-04-24 |
| [#23642](https://github.com/sgl-project/sglang/pull/23642) | [AMD][MoRI] bump MoRI to v1.1.1 | @jhchouuu | merged | 2026-04-24 | 2026-04-24 |
| [#23533](https://github.com/sgl-project/sglang/pull/23533) | support Hy3 preview | @JustinTong0323 | merged | 2026-04-23 | 2026-04-24 |
| [#17946](https://github.com/sgl-project/sglang/pull/17946) | [MUSA][8/N] Port CUDA kernels that are compatible with MUSA | @yafengio | merged | 2026-01-29 | 2026-04-24 |
| [#23319](https://github.com/sgl-project/sglang/pull/23319) | [AMD] Use bpreshuffle FP8 blockscale GEMM to replace ABScale... | @RolaoDenthu | merged | 2026-04-21 | 2026-04-23 |
| [#23382](https://github.com/sgl-project/sglang/pull/23382) | [AMD] skip deterministic inference for MLA FP8 test | @bingxche | merged | 2026-04-21 | 2026-04-23 |
| [#23270](https://github.com/sgl-project/sglang/pull/23270) | [MUSA] Resolve output garbage in Context Parallel on MusaFla... | @froststeam | merged | 2026-04-20 | 2026-04-23 |
| [#22802](https://github.com/sgl-project/sglang/pull/22802) | [diffusion] [AMD] model: allow AITER backends in Flux 2 pipe... | @avjves | merged | 2026-04-14 | 2026-04-22 |
| [#23186](https://github.com/sgl-project/sglang/pull/23186) | [AMD] Fused qk rmsnorm bf16 for amd/Kimi-K2.5-MXFP4 | @akao-amd | merged | 2026-04-19 | 2026-04-21 |
| [#22908](https://github.com/sgl-project/sglang/pull/22908) | [AMD] Resolve Qwen3.5 MTP (speculative decoding) radix cache... | @ChangLiu0709 | merged | 2026-04-15 | 2026-04-21 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-05-07T10:12:55Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#10253](https://github.com/triton-lang/triton/pull/10253) | [AMD][gluon] Accept boolean predicates in tdm load/gather | @peterbell10 | merged | 2026-05-06 | 2026-05-07 |
| [#10248](https://github.com/triton-lang/triton/pull/10248) | [AMD] Split uniform buffer offsets into soffset | @panditsa | draft | 2026-05-06 | 2026-05-07 |
| [#10224](https://github.com/triton-lang/triton/pull/10224) | [AMD][GFX1250][FA-BF16] Bug fix: Reorder TDM in Prologue to ... | @cagrikymk | merged | 2026-05-05 | 2026-05-07 |
| [#10254](https://github.com/triton-lang/triton/pull/10254) | [AMD] Add LLVM flag passthrough for AMDGPU codegen | @raikonenfnu | draft | 2026-05-07 | 2026-05-07 |
| [#10056](https://github.com/triton-lang/triton/pull/10056) | [AMD][gfx1250] Support warp usage hints in TDM copy | @jungpark-mlir | open | 2026-04-16 | 2026-05-06 |
| [#9662](https://github.com/triton-lang/triton/pull/9662) | [AMD][LAYOUTS] Refine optimal swizzling for wavefront64 | @amd-jianli12 | open | 2026-03-06 | 2026-05-06 |
| [#9886](https://github.com/triton-lang/triton/pull/9886) | [AMD] Enable f32 WMMA for AccelerateMatmul (#470) | @ravil-mobile | open | 2026-03-30 | 2026-05-06 |
| [#10230](https://github.com/triton-lang/triton/pull/10230) | [AMD][gfx1250] Combine redundant amdgpu.async_tdm_wait ops | @jerryyin | merged | 2026-05-05 | 2026-05-06 |
| [#10216](https://github.com/triton-lang/triton/pull/10216) | [AMD] Ignore tf32 precision for fp64 mfma dots | @draganmladjenovic | open | 2026-05-04 | 2026-05-05 |
| [#10194](https://github.com/triton-lang/triton/pull/10194) | [AMD] Fixing mi350 BlockPingpong update waits | @jerryyin | merged | 2026-05-01 | 2026-05-05 |
| [#9929](https://github.com/triton-lang/triton/pull/9929) | [AMD] Warp-pipeline: back-to-back loop optimization & flat (... | @jungpark-mlir | open | 2026-04-05 | 2026-05-05 |
| [#10222](https://github.com/triton-lang/triton/pull/10222) | [AMD][gfx1250] Add transposed support for 32x16 scaled WMMA | @sriakrish | merged | 2026-05-05 | 2026-05-05 |
| [#10225](https://github.com/triton-lang/triton/pull/10225) | [AMD][gfx1250] Add `tdm_advance_descriptor` op | @zhanglx13 | draft | 2026-05-05 | 2026-05-05 |
| [#10215](https://github.com/triton-lang/triton/pull/10215) | [AMD][gfx1250] Drop ttg.async_commit_group from TDM async ch... | @jerryyin | merged | 2026-05-04 | 2026-05-05 |
| [#10184](https://github.com/triton-lang/triton/pull/10184) | [subslice][AMD] Fix an assertion about PaddedSharedEncodingA... | @yangshuxin | open | 2026-04-30 | 2026-05-05 |
| [#10208](https://github.com/triton-lang/triton/pull/10208) | [AMD][gfx1250] Explicitly propagate NaN for MXFP attn exampl... | @antiagainst | merged | 2026-05-03 | 2026-05-04 |
| [#10207](https://github.com/triton-lang/triton/pull/10207) | [AMD][gfx1250] Update stale tests and examples | @antiagainst | merged | 2026-05-03 | 2026-05-04 |
| [#10142](https://github.com/triton-lang/triton/pull/10142) | [AMD] Create TargetFeatures for architectural checks | @antiagainst | open | 2026-04-27 | 2026-05-02 |
| [#10204](https://github.com/triton-lang/triton/pull/10204) | [AMD]Add MoE Gluon Kernel for GFX1250 | @knwng | draft | 2026-05-02 | 2026-05-02 |
| [#10200](https://github.com/triton-lang/triton/pull/10200) | [AMD] Extend chain-dot detection across loop iteration bound... | @raikonenfnu | open | 2026-05-02 | 2026-05-02 |
| [#10185](https://github.com/triton-lang/triton/pull/10185) | [AMD] Enable IN_THREAD_TRANSPOSE to GFX1201 by default  | @skysnow2001 | merged | 2026-04-30 | 2026-05-01 |
| [#10193](https://github.com/triton-lang/triton/pull/10193) | [AMD] Add v_pk_{mul,add,sub}_bf16 conversion and fix sqrt de... | @FrederickVu | merged | 2026-05-01 | 2026-05-01 |
| [#9883](https://github.com/triton-lang/triton/pull/9883) | [AMD][gfx9] Use asyncmark/wait_asyncmark for CDNA3/CDNA4 buf... | @zhanglx13 | merged | 2026-03-30 | 2026-05-01 |
| [#10170](https://github.com/triton-lang/triton/pull/10170) | [Tools][Translator][AMD] Add RDNA backend support for Triton... | @skysnow2001 | draft | 2026-04-29 | 2026-04-30 |
| [#10178](https://github.com/triton-lang/triton/pull/10178) | [AMD][gfx1250] Fix f32 to fp8*fnuz conversion and test skips | @antiagainst | merged | 2026-04-30 | 2026-04-30 |
| [#10172](https://github.com/triton-lang/triton/pull/10172) | [AMD][TDM] Pipeline tt.descriptor_gather through the TDM asy... | @jerryyin | merged | 2026-04-29 | 2026-04-30 |
| [#10179](https://github.com/triton-lang/triton/pull/10179) | [Gluon for AMD] unwrap constexpr None in buffer_load/buffer_... | @Dewei-Wang-sh | merged | 2026-04-30 | 2026-04-30 |
| [#10081](https://github.com/triton-lang/triton/pull/10081) | [AMD][gfx9] Restore token-aware wait count derivation on asy... | @lijinpei-amd | merged | 2026-04-20 | 2026-04-30 |
| [#10169](https://github.com/triton-lang/triton/pull/10169) | [AMD][TDM] Support cache modifier in TDM operations | @alefimov-amd | merged | 2026-04-29 | 2026-04-29 |
| [#10145](https://github.com/triton-lang/triton/pull/10145) | [AMD] End-to-end support for resolving LDS partition conflic... | @plognjen | merged | 2026-04-27 | 2026-04-29 |
| [#10154](https://github.com/triton-lang/triton/pull/10154) | [WIP][AMD][Tests] Move part of ISA checks to aggregate funct... | @alefimov-amd | open | 2026-04-28 | 2026-04-29 |
| [#10159](https://github.com/triton-lang/triton/pull/10159) | [AMD][Backend] Apply bitwise disjoint affine offset padding ... | @FrederickVu | merged | 2026-04-28 | 2026-04-29 |
| [#10157](https://github.com/triton-lang/triton/pull/10157) | [AMD] Add Triton-level tt.descriptor_gather and tt.descripto... | @jerryyin | merged | 2026-04-28 | 2026-04-29 |
| [#10161](https://github.com/triton-lang/triton/pull/10161) | [AMD][CI] Allow continue-on-error for all targets | @antiagainst | merged | 2026-04-28 | 2026-04-28 |
| [#9666](https://github.com/triton-lang/triton/pull/9666) | [AMD] Enable loop unrolling for Gluon warp-pipelined kernels | @Hardcode84 | merged | 2026-03-06 | 2026-04-28 |
| [#10144](https://github.com/triton-lang/triton/pull/10144) | [AMD] Add rocprofiler SDK HIP headers for proton use | @ZelboK | merged | 2026-04-27 | 2026-04-28 |
| [#10146](https://github.com/triton-lang/triton/pull/10146) | [AMD][CI] Switch gfx942 to use normal pytorch docker | @antiagainst | merged | 2026-04-27 | 2026-04-27 |
| [#10138](https://github.com/triton-lang/triton/pull/10138) | [AMD] NFC: Unify AMD GFX architecture pass option | @antiagainst | merged | 2026-04-26 | 2026-04-27 |
| [#10133](https://github.com/triton-lang/triton/pull/10133) | [AMD] Support probing versioned runtime dylib | @antiagainst | draft | 2026-04-25 | 2026-04-25 |
| [#10108](https://github.com/triton-lang/triton/pull/10108) | [AMD][gfx1250] Add fused SwiGLU mode to gluon mxfp GEMM exam... | @kelesvol | merged | 2026-04-22 | 2026-04-24 |
| [#10088](https://github.com/triton-lang/triton/pull/10088) | [AMD][gluon] Derive gfx1250 write slot from read phase for m... | @jungpark-mlir | merged | 2026-04-20 | 2026-04-24 |
| [#10115](https://github.com/triton-lang/triton/pull/10115) | [AMD][BACKEND] Fix TDM gather/scatter intrinsic waitcnt comp... | @AlexAUT | merged | 2026-04-23 | 2026-04-24 |
| [#10109](https://github.com/triton-lang/triton/pull/10109) | [AMD][GFX12] Cache modifiers for buffer and async ops | @alefimov-amd | merged | 2026-04-22 | 2026-04-23 |
| [#10113](https://github.com/triton-lang/triton/pull/10113) | [AMD][gfx1250][TDM] Vector-typed internal TDM descriptor rep... | @zhanglx13 | merged | 2026-04-23 | 2026-04-23 |
| [#10111](https://github.com/triton-lang/triton/pull/10111) | [AMD][GLUON] Expose AMD scaled_upcast ops in Gluon | @FrederickVu | merged | 2026-04-22 | 2026-04-23 |
| [#9260](https://github.com/triton-lang/triton/pull/9260) | [AMD] Add a knob to disable vector combine pass | @antiagainst | draft | 2026-01-21 | 2026-04-22 |
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

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-05-07T10:12:59Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4817](https://github.com/ROCm/AMDMIGraphX/pull/4817) | Enable static build of migraphx | @pfultz2 | open | 2026-04-23 | 2026-05-07 |
| [#4801](https://github.com/ROCm/AMDMIGraphX/pull/4801) | Add md5 sum function | @pfultz2 | open | 2026-04-20 | 2026-05-07 |
| [#4805](https://github.com/ROCm/AMDMIGraphX/pull/4805) | Bump CI to 7.2.3 | @causten | open | 2026-04-20 | 2026-05-07 |
| [#4831](https://github.com/ROCm/AMDMIGraphX/pull/4831) | Addition of MLSS MHA for GFX1201 as standalone header | @Zhaeong | open | 2026-04-29 | 2026-05-07 |
| [#4854](https://github.com/ROCm/AMDMIGraphX/pull/4854) | Update .gitignore | @causten | open | 2026-05-06 | 2026-05-07 |
| [#4851](https://github.com/ROCm/AMDMIGraphX/pull/4851) | Flag to control throwing an exception after mxr files have b... | @ahsan-ca | open | 2026-05-06 | 2026-05-07 |
| [#4855](https://github.com/ROCm/AMDMIGraphX/pull/4855) | Update rocMLIR for TheRock support | @causten | open | 2026-05-06 | 2026-05-07 |
| [#4850](https://github.com/ROCm/AMDMIGraphX/pull/4850) | [AIMIGRAPHX-1003] Add warnings for dim and value not set | @eddieliao | open | 2026-05-06 | 2026-05-06 |
| [#4823](https://github.com/ROCm/AMDMIGraphX/pull/4823) | support symbolic shape transpose, contiguous, as_shape | @shivadbhavsar | open | 2026-04-24 | 2026-05-06 |
| [#4853](https://github.com/ROCm/AMDMIGraphX/pull/4853) | disable fuse_horizontal for dynamic shapes | @shivadbhavsar | open | 2026-05-06 | 2026-05-06 |
| [#4852](https://github.com/ROCm/AMDMIGraphX/pull/4852) | Create SECURITY.md | @causten | open | 2026-05-06 | 2026-05-06 |
| [#4841](https://github.com/ROCm/AMDMIGraphX/pull/4841) | [AIMIGRAPHX-1002] Match nop reshapes with broadcasted inputs | @eddieliao | open | 2026-05-05 | 2026-05-06 |
| [#4849](https://github.com/ROCm/AMDMIGraphX/pull/4849) | Bump gitpython from 3.1.47 to 3.1.48 in /docs/sphinx | @dependabot[bot] | open | 2026-05-06 | 2026-05-06 |
| [#4832](https://github.com/ROCm/AMDMIGraphX/pull/4832) | Sym reshapes | @shivadbhavsar | draft | 2026-04-29 | 2026-05-06 |
| [#4723](https://github.com/ROCm/AMDMIGraphX/pull/4723) | [AIMIGRAPHX-885]  MLP tower batched horizontal fusions | @TedThemistokleous | open | 2026-03-31 | 2026-05-06 |
| [#4848](https://github.com/ROCm/AMDMIGraphX/pull/4848) | [AIMIGRAPHX-1029] Update ROCm CMake dependency version to 7.... | @kentqian | open | 2026-05-06 | 2026-05-06 |
| [#4727](https://github.com/ROCm/AMDMIGraphX/pull/4727) | [AIMIGRAPHX-885] Dedupilicate Gather Reads from Constant Emb... | @TedThemistokleous | draft | 2026-03-31 | 2026-05-06 |
| [#4835](https://github.com/ROCm/AMDMIGraphX/pull/4835) | Extend problem cache with hardware provenance metadata | @danieyan-amd | draft | 2026-04-30 | 2026-05-06 |
| [#4819](https://github.com/ROCm/AMDMIGraphX/pull/4819) | [AIMIGRAPHX-839] support symbolic shapes for broadcast ops | @shivadbhavsar | open | 2026-04-24 | 2026-05-06 |
| [#4775](https://github.com/ROCm/AMDMIGraphX/pull/4775) | [AIMIGRAPHX-885][AIMIGRAPGX-987] Use External Stream Context... | @TedThemistokleous | open | 2026-04-10 | 2026-05-06 |
| [#4847](https://github.com/ROCm/AMDMIGraphX/pull/4847) | Use a wrapper function for github status in jenkins | @pfultz2 | open | 2026-05-06 | 2026-05-06 |
| [#4830](https://github.com/ROCm/AMDMIGraphX/pull/4830) |  CI: Automating workflow execution for internal contributors... | @Muhamed-Husic | open | 2026-04-29 | 2026-05-06 |
| [#4836](https://github.com/ROCm/AMDMIGraphX/pull/4836) | Onnxruntime Weekly Sync 2026-05-01 | @github-actions[bot] | open | 2026-05-01 | 2026-05-06 |
| [#4839](https://github.com/ROCm/AMDMIGraphX/pull/4839) | upgrade for protobuf v30 on Windows | @apwojcik | open | 2026-05-04 | 2026-05-06 |
| [#3753](https://github.com/ROCm/AMDMIGraphX/pull/3753) | Propagate layout in reshape operator and broadcasting in bin... | @pfultz2 | open | 2025-01-09 | 2026-05-06 |
| [#4737](https://github.com/ROCm/AMDMIGraphX/pull/4737) | Add windows cpu runner | @pfultz2 | open | 2026-04-02 | 2026-05-04 |
| [#4765](https://github.com/ROCm/AMDMIGraphX/pull/4765) | Add versioninfo to migraphx binaries WINDOWS | @ivarusic-amd | open | 2026-04-09 | 2026-05-04 |
| [#4665](https://github.com/ROCm/AMDMIGraphX/pull/4665) | Add missing `trace` check for debug output in `compile_plan` | @mferencevic | open | 2026-03-13 | 2026-05-04 |
| [#3972](https://github.com/ROCm/AMDMIGraphX/pull/3972) | Allow ONNX and TF modules optional | @apwojcik | open | 2025-04-25 | 2026-05-04 |
| [#3750](https://github.com/ROCm/AMDMIGraphX/pull/3750) | Tile channels for group norm and also fuse output reshapes i... | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#3752](https://github.com/ROCm/AMDMIGraphX/pull/3752) | Fuse multiple outputs for pointwise and reductions | @pfultz2 | draft | 2025-01-09 | 2026-05-04 |
| [#4826](https://github.com/ROCm/AMDMIGraphX/pull/4826) | Fix literal promotion | @ivarusic-amd | open | 2026-04-28 | 2026-05-03 |
| [#4704](https://github.com/ROCm/AMDMIGraphX/pull/4704) | [AIMIGRAPHX-840] support symbolic shape prop through conv an... | @shivadbhavsar | open | 2026-03-25 | 2026-05-01 |
| [#4806](https://github.com/ROCm/AMDMIGraphX/pull/4806) | Add fused MatMul operator | @ahsan-ca | open | 2026-04-20 | 2026-05-01 |
| [#4770](https://github.com/ROCm/AMDMIGraphX/pull/4770) | Adding compilation mode | @pnikolic-amd | open | 2026-04-09 | 2026-04-29 |
| [#4829](https://github.com/ROCm/AMDMIGraphX/pull/4829) | support stride > 1 case. | @weizhu12-amd | draft | 2026-04-29 | 2026-04-29 |
| [#4608](https://github.com/ROCm/AMDMIGraphX/pull/4608) | Use rocBLAS GEMV for skinny GEMM (M=1 or N=1) to improve per... | @klin2024 | draft | 2026-02-12 | 2026-04-28 |
| [#4701](https://github.com/ROCm/AMDMIGraphX/pull/4701) | Netron output update - use protobuff, API integration, debug... | @CharlieL7 | open | 2026-03-24 | 2026-04-27 |
| [#4808](https://github.com/ROCm/AMDMIGraphX/pull/4808) | Enable fp16 channelwise convolution | @klin2024 | open | 2026-04-21 | 2026-04-27 |
| [#4718](https://github.com/ROCm/AMDMIGraphX/pull/4718) | Fuse avg pooling with convolution | @pfultz2 | draft | 2026-03-30 | 2026-04-27 |
| [#4303](https://github.com/ROCm/AMDMIGraphX/pull/4303) | Add initial integration of amdmlss mha | @Zhaeong | draft | 2025-09-18 | 2026-04-26 |
| [#4751](https://github.com/ROCm/AMDMIGraphX/pull/4751) | Add missing tests and fixes from 4647 | @pfultz2 | open | 2026-04-08 | 2026-04-26 |
| [#4734](https://github.com/ROCm/AMDMIGraphX/pull/4734) | Bump onnx from 1.17.0 to 1.21.0 in /tools | @dependabot[bot] | open | 2026-04-02 | 2026-04-26 |
| [#4729](https://github.com/ROCm/AMDMIGraphX/pull/4729) | Improve horizontal fusions | @pfultz2 | open | 2026-04-01 | 2026-04-24 |
| [#4795](https://github.com/ROCm/AMDMIGraphX/pull/4795) | [AIMIGRAPHX-828] Cross Compile Pt 2: add env variable to ena... | @kahmed10 | open | 2026-04-17 | 2026-04-24 |
| [#4782](https://github.com/ROCm/AMDMIGraphX/pull/4782) | Add symbolic expression | @pfultz2 | open | 2026-04-13 | 2026-04-24 |
| [#4797](https://github.com/ROCm/AMDMIGraphX/pull/4797) | Add rocprofv3 and att trace library | @pfultz2 | open | 2026-04-17 | 2026-04-23 |
| [#4742](https://github.com/ROCm/AMDMIGraphX/pull/4742) | [AIRADSW-64] Add Parser for arrayfeatureextractor Onnx op | @tamahedi | open | 2026-04-06 | 2026-04-23 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | open | 2026-04-22 | 2026-04-23 |
| [#4733](https://github.com/ROCm/AMDMIGraphX/pull/4733) | Fuse pointwise across split slices | @pfultz2 | open | 2026-04-01 | 2026-04-23 |
| [#4803](https://github.com/ROCm/AMDMIGraphX/pull/4803) | Python API debug symbols | @CharlieL7 | open | 2026-04-20 | 2026-04-21 |
| [#4809](https://github.com/ROCm/AMDMIGraphX/pull/4809) | Use fp32 FMA in channelwise conv | @klin2024 | draft | 2026-04-21 | 2026-04-21 |
| [#4607](https://github.com/ROCm/AMDMIGraphX/pull/4607) | Optimize 1x1 and Depthwise Convolution for Small Shapes | @klin2024 | draft | 2026-02-12 | 2026-04-21 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | draft | 2026-04-08 | 2026-04-19 |
| [#4709](https://github.com/ROCm/AMDMIGraphX/pull/4709) | Tune GPU scheduling, return copies, and pointwise launch bou... | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-18 |
| [#4746](https://github.com/ROCm/AMDMIGraphX/pull/4746) | Handle more cases for global pooling | @pfultz2 | open | 2026-04-07 | 2026-04-18 |
| [#4764](https://github.com/ROCm/AMDMIGraphX/pull/4764) | Fix concat_past_present OOB write when seqlens_k is negative | @danieyan-amd | open | 2026-04-09 | 2026-04-16 |
| [#4787](https://github.com/ROCm/AMDMIGraphX/pull/4787) | Rewrite mul reduce to use fdot2 instructions | @pfultz2 | draft | 2026-04-15 | 2026-04-15 |
| [#4785](https://github.com/ROCm/AMDMIGraphX/pull/4785) | Improve yolov10n Performance | @ahsan-ca | draft | 2026-04-14 | 2026-04-15 |
| [#4707](https://github.com/ROCm/AMDMIGraphX/pull/4707) | Improve adaptive GPU defaults and device feature caching | @Rolaand-Jayz | open | 2026-03-26 | 2026-04-14 |
| [#4563](https://github.com/ROCm/AMDMIGraphX/pull/4563) | Add Windows build documentation for TheRock ROCm | @ppetrovi-amd | draft | 2026-01-21 | 2026-04-14 |
| [#4697](https://github.com/ROCm/AMDMIGraphX/pull/4697) | Add symbolic expression | @pfultz2 | open | 2026-03-23 | 2026-04-13 |
| [#3465](https://github.com/ROCm/AMDMIGraphX/pull/3465) | Remove layernorm fusion | @pfultz2 | open | 2024-09-20 | 2026-04-13 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | open | 2024-09-25 | 2026-04-13 |
| [#4777](https://github.com/ROCm/AMDMIGraphX/pull/4777) | Remove gqa_rotary_embedding and use op builder in its place | @turneram | open | 2026-04-10 | 2026-04-10 |
| [#4776](https://github.com/ROCm/AMDMIGraphX/pull/4776) | Add insert_slice op and remove concat_past_present | @turneram | draft | 2026-04-10 | 2026-04-10 |
| [#4726](https://github.com/ROCm/AMDMIGraphX/pull/4726) | [AIMIGRAPHX-885] Fuse Expert Heads into mlir_slice_sigmoid_m... | @TedThemistokleous | draft | 2026-03-31 | 2026-04-10 |
| [#4514](https://github.com/ROCm/AMDMIGraphX/pull/4514) | Add early return for element tile calculation | @TedThemistokleous | open | 2025-12-19 | 2026-04-10 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-04-09 |
| [#4163](https://github.com/ROCm/AMDMIGraphX/pull/4163) | Improve split reshape | @pfultz2 | open | 2025-07-23 | 2026-04-08 |
| [#4725](https://github.com/ROCm/AMDMIGraphX/pull/4725) | [AIMIGRAPHX-885] Add gather_slice_concat matcher | @TedThemistokleous | draft | 2026-03-31 | 2026-04-08 |
| [#4744](https://github.com/ROCm/AMDMIGraphX/pull/4744) | Add dockerfile for building TheRock | @causten | open | 2026-04-06 | 2026-04-08 |
| [#4724](https://github.com/ROCm/AMDMIGraphX/pull/4724) | [AIMIGRAPHX-885] Add Releaxed Check for Concat fusions | @TedThemistokleous | draft | 2026-03-31 | 2026-04-07 |
| [#4743](https://github.com/ROCm/AMDMIGraphX/pull/4743) | [AIMIGRAPHX-885] Add_gather_kernel Matcher | @TedThemistokleous | draft | 2026-04-06 | 2026-04-06 |
| [#3815](https://github.com/ROCm/AMDMIGraphX/pull/3815) | Use fill_argument for literals that have the same value | @pfultz2 | open | 2025-02-14 | 2026-04-06 |
| [#3222](https://github.com/ROCm/AMDMIGraphX/pull/3222) | Add weight streaming | @eddieliao | open | 2024-06-26 | 2026-04-05 |
| [#3873](https://github.com/ROCm/AMDMIGraphX/pull/3873) | wait() failing for the default stream 0 | @lakhinderwalia | open | 2025-03-07 | 2026-04-03 |
| [#4571](https://github.com/ROCm/AMDMIGraphX/pull/4571) |  ONNX: Added support for `SplitToSequence` and `ConcatFromSe... | @RajBarshikar | open | 2026-01-26 | 2026-03-31 |
| [#4710](https://github.com/ROCm/AMDMIGraphX/pull/4710) | Fix GPU MLIR-off builds and extend MLIR pointwise support | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-31 |
| [#4708](https://github.com/ROCm/AMDMIGraphX/pull/4708) | Cache repeated HIP compilation and MIOpen solution lookups | @Rolaand-Jayz | open | 2026-03-26 | 2026-03-27 |
| [#4686](https://github.com/ROCm/AMDMIGraphX/pull/4686) | add symengine dep | @shivadbhavsar | draft | 2026-03-18 | 2026-03-18 |
| [#4682](https://github.com/ROCm/AMDMIGraphX/pull/4682) | Add caching mechanism for CI tests in Jenkinsfile | @causten | open | 2026-03-18 | 2026-03-18 |
| [#4676](https://github.com/ROCm/AMDMIGraphX/pull/4676) | Reduce fusion with multi-output | @pfultz2 | draft | 2026-03-16 | 2026-03-17 |
| [#4154](https://github.com/ROCm/AMDMIGraphX/pull/4154) | Switch to c++23 | @pfultz2 | open | 2025-07-21 | 2026-03-13 |
| [#3766](https://github.com/ROCm/AMDMIGraphX/pull/3766) | Remove rocmlir unsupported reduce types | @dhernandez0 | open | 2025-01-17 | 2026-03-12 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | open | 2026-03-04 | 2026-03-12 |
| [#2224](https://github.com/ROCm/AMDMIGraphX/pull/2224) | Added mutex locks in register_target.cpp and created a multi... | @bpickrel | open | 2023-09-20 | 2026-03-11 |
| [#3666](https://github.com/ROCm/AMDMIGraphX/pull/3666) | Llama2 7b model C++ example | @ototh-htec | open | 2024-11-29 | 2026-03-09 |
| [#4439](https://github.com/ROCm/AMDMIGraphX/pull/4439) | AIMIGRAPHX-317 g+g heuristic added to apply | @bdevorem | draft | 2025-11-12 | 2026-03-06 |
| [#4573](https://github.com/ROCm/AMDMIGraphX/pull/4573) | Allow running in the driver a pass from a backend target usi... | @pfultz2 | open | 2026-01-26 | 2026-03-03 |
| [#4642](https://github.com/ROCm/AMDMIGraphX/pull/4642) | fix jit pooling | @aarushjain29 | open | 2026-02-27 | 2026-02-27 |
| [#4546](https://github.com/ROCm/AMDMIGraphX/pull/4546) | [DRAFT] flash decoding kvcache | @bdevorem | draft | 2026-01-14 | 2026-02-18 |
| [#4448](https://github.com/ROCm/AMDMIGraphX/pull/4448) | Gpu concat kernel improvements | @pfultz2 | draft | 2025-11-19 | 2026-02-16 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | draft | 2026-02-12 | 2026-02-12 |
| [#4049](https://github.com/ROCm/AMDMIGraphX/pull/4049) | Store literals in pinned memory when there isnt enough GPU m... | @pfultz2 | open | 2025-06-03 | 2026-02-06 |
| [#4577](https://github.com/ROCm/AMDMIGraphX/pull/4577) | Create op. builders (6.) (AI generated) | @gchinora | draft | 2026-01-28 | 2026-01-28 |
| [#4554](https://github.com/ROCm/AMDMIGraphX/pull/4554) | Add deref op | @pfultz2 | open | 2026-01-19 | 2026-01-21 |
| [#4489](https://github.com/ROCm/AMDMIGraphX/pull/4489) | [AI Generated]Gather optimization to speed things up | @TedThemistokleous | draft | 2025-12-08 | 2026-01-14 |
| [#4472](https://github.com/ROCm/AMDMIGraphX/pull/4472) | Update driver documentation with missing options and fix inc... | @Copilot | draft | 2025-11-26 | 2025-11-26 |
| [#4456](https://github.com/ROCm/AMDMIGraphX/pull/4456) | Horizontally fuse pointwise with more than 2 arguments in fi... | @pfultz2 | draft | 2025-11-20 | 2025-11-20 |
| [#4381](https://github.com/ROCm/AMDMIGraphX/pull/4381) | Enable pointwise fusion for dynamic IR | @shivadbhavsar | draft | 2025-10-13 | 2025-11-20 |
| [#4403](https://github.com/ROCm/AMDMIGraphX/pull/4403) | `generic_float` for Float8E8M0 | @CharlieL7 | draft | 2025-10-23 | 2025-11-08 |
| [#4376](https://github.com/ROCm/AMDMIGraphX/pull/4376) | failure of test_topk<migraphx::shape::float_type, 1000, 1200... | @lakhinderwalia | draft | 2025-10-10 | 2025-10-13 |
| [#4312](https://github.com/ROCm/AMDMIGraphX/pull/4312) | Add ONNX model testing workflow | @danieyan-amd | open | 2025-09-23 | 2025-09-24 |
| [#4275](https://github.com/ROCm/AMDMIGraphX/pull/4275) | SparseAttention ONNX Contrib Op Implementation | @music-dino | draft | 2025-09-03 | 2025-09-09 |
| [#4217](https://github.com/ROCm/AMDMIGraphX/pull/4217) | Set attribute to help bypass the warning about amdgpu_waves_... | @lakhinderwalia | open | 2025-08-08 | 2026-04-10 |
| [#3770](https://github.com/ROCm/AMDMIGraphX/pull/3770) | Fix: Driver --batch option sets Window Dimensions. | @lakhinderwalia | open | 2025-01-20 | 2025-06-16 |
| [#3725](https://github.com/ROCm/AMDMIGraphX/pull/3725) | Issue with int8 for MaxPool  | @taylding-amd | draft | 2024-12-19 | 2025-05-17 |
| [#3759](https://github.com/ROCm/AMDMIGraphX/pull/3759) | Experimental output fusion | @shivadbhavsar | draft | 2025-01-12 | 2025-05-17 |
| [#3938](https://github.com/ROCm/AMDMIGraphX/pull/3938) | Add GPU onnx support for com.microsoft.SparseAttention | @music-dino | open | 2025-04-09 | 2025-05-12 |
| [#3416](https://github.com/ROCm/AMDMIGraphX/pull/3416) | Weight stripping | @simberg-amd | open | 2024-09-04 | 2025-03-07 |
| [#3721](https://github.com/ROCm/AMDMIGraphX/pull/3721) | Introduce export feature to TensorRT JSON format | @mirza-halilcevic | draft | 2024-12-18 | 2025-03-07 |
| [#3718](https://github.com/ROCm/AMDMIGraphX/pull/3718) | Tile scale and bias for block quantization | @pfultz2 | draft | 2024-12-16 | 2025-03-07 |
| [#2687](https://github.com/ROCm/AMDMIGraphX/pull/2687) | Add optional fp16 rmsnorm conversion pass to fix fp16 accura... | @attila-dusnoki-htec | draft | 2024-01-25 | 2025-03-07 |
| [#1417](https://github.com/ROCm/AMDMIGraphX/pull/1417) | Warnings upon tuning  information mismatch for Convolutions | @umangyadav | open | 2022-10-19 | 2025-03-07 |
| [#3468](https://github.com/ROCm/AMDMIGraphX/pull/3468) | Fix for Lower unsupported pooling sizes for the CPU to Refer... | @aditya-167 | open | 2024-09-22 | 2024-10-21 |
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
| [#4699](https://github.com/ROCm/AMDMIGraphX/pull/4699) | Support dynamic input shapes for NonMaxSuppression op with r... | @klin2024 | merged | 2026-03-24 | 2026-04-24 |
| [#4735](https://github.com/ROCm/AMDMIGraphX/pull/4735) | Add MIGraphX MLIR dialect testcase for MXFP4 GEMM | @CharlieL7 | merged | 2026-04-02 | 2026-04-24 |
| [#4798](https://github.com/ROCm/AMDMIGraphX/pull/4798) | Onnxruntime Weekly Sync 2026-04-17 | @github-actions[bot] | merged | 2026-04-17 | 2026-04-24 |
| [#4813](https://github.com/ROCm/AMDMIGraphX/pull/4813) | Add tests for grouped convolution | @CharlieL7 | merged | 2026-04-22 | 2026-04-24 |
| [#4812](https://github.com/ROCm/AMDMIGraphX/pull/4812) | Adding imagetag comment for clarity | @Muhamed-Husic | merged | 2026-04-22 | 2026-04-24 |
| [#4761](https://github.com/ROCm/AMDMIGraphX/pull/4761) | Update rocMLIR integration API to version 5 (perfConfig, clu... | @dhernandez0 | merged | 2026-04-09 | 2026-04-23 |
| [#4816](https://github.com/ROCm/AMDMIGraphX/pull/4816) | Add copilot custom instructions | @pfultz2 | merged | 2026-04-23 | 2026-04-23 |
| [#4810](https://github.com/ROCm/AMDMIGraphX/pull/4810) | fix for intra op threads issue | @aarushjain29 | merged | 2026-04-21 | 2026-04-23 |
| [#4807](https://github.com/ROCm/AMDMIGraphX/pull/4807) | Add checks for `::value` and improve check for redundant sta... | @pfultz2 | merged | 2026-04-21 | 2026-04-21 |
| [#4796](https://github.com/ROCm/AMDMIGraphX/pull/4796) | Rocm7.2.3 changes  | @TedThemistokleous | merged | 2026-04-17 | 2026-04-21 |
| [#4691](https://github.com/ROCm/AMDMIGraphX/pull/4691) | add Dockerfile for ubuntu 24.04 | @kahmed10 | merged | 2026-03-21 | 2026-04-20 |
| [#4548](https://github.com/ROCm/AMDMIGraphX/pull/4548) | AIMIGRAPHX-501 Fix gridsample parser type mismatch | @kahmed10 | merged | 2026-01-15 | 2026-04-18 |
| [#4771](https://github.com/ROCm/AMDMIGraphX/pull/4771) | Cross Compile Pt 1: Add optional string to device_name funct... | @kahmed10 | merged | 2026-04-09 | 2026-04-18 |
| [#4720](https://github.com/ROCm/AMDMIGraphX/pull/4720) | JIT implementations for scan lib, and nonzero & prefix_scan_... | @bdevorem | merged | 2026-03-30 | 2026-04-18 |
| [#4794](https://github.com/ROCm/AMDMIGraphX/pull/4794) | Edit github action to cleanup deployments before github-page... | @CharlieL7 | merged | 2026-04-16 | 2026-04-18 |
| [#4783](https://github.com/ROCm/AMDMIGraphX/pull/4783) | Update PR reporting action | @causten | merged | 2026-04-14 | 2026-04-17 |
| [#4793](https://github.com/ROCm/AMDMIGraphX/pull/4793) | Remove the add-to-project.yaml file | @causten | merged | 2026-04-16 | 2026-04-16 |
| [#4784](https://github.com/ROCm/AMDMIGraphX/pull/4784) | refactor how dyn dim intervals are stored and accessed | @shivadbhavsar | merged | 2026-04-14 | 2026-04-15 |
| [#4779](https://github.com/ROCm/AMDMIGraphX/pull/4779) | PR status dashboard using Github pages | @CharlieL7 | merged | 2026-04-10 | 2026-04-15 |
| [#4768](https://github.com/ROCm/AMDMIGraphX/pull/4768) | Fix the logger tests on windows | @pfultz2 | merged | 2026-04-09 | 2026-04-15 |
| [#4747](https://github.com/ROCm/AMDMIGraphX/pull/4747) | Expose op builder to the python API using a macro class | @pfultz2 | merged | 2026-04-07 | 2026-04-15 |
| [#4754](https://github.com/ROCm/AMDMIGraphX/pull/4754) | Add build capability for Python 3.14 | @causten | merged | 2026-04-08 | 2026-04-15 |
| [#4786](https://github.com/ROCm/AMDMIGraphX/pull/4786) | Dont log intended driver output | @pfultz2 | merged | 2026-04-14 | 2026-04-15 |
| [#4755](https://github.com/ROCm/AMDMIGraphX/pull/4755) | [AIMIGRAPHX-799] jit implementation for rnn variable seq len... | @bdevorem | merged | 2026-04-08 | 2026-04-14 |
| [#4763](https://github.com/ROCm/AMDMIGraphX/pull/4763) | Check if workaround deduction guide is needed | @pfultz2 | merged | 2026-04-09 | 2026-04-14 |
| [#4516](https://github.com/ROCm/AMDMIGraphX/pull/4516) | rocMLIR Weekly Sync 2025-12-21 | @github-actions[bot] | merged | 2025-12-21 | 2026-04-14 |
| [#4464](https://github.com/ROCm/AMDMIGraphX/pull/4464) | Fixes for ONNX and FP4 in 7.2 | @causten | merged | 2025-11-24 | 2026-04-14 |
| [#4441](https://github.com/ROCm/AMDMIGraphX/pull/4441) | Onnxruntime Weekly Sync 2025-11-14 | @github-actions[bot] | merged | 2025-11-14 | 2026-04-14 |
| [#4401](https://github.com/ROCm/AMDMIGraphX/pull/4401) | [7.1.1] check if instruction is actually a literal (#4388) | @causten | merged | 2025-10-21 | 2026-04-14 |
| [#4377](https://github.com/ROCm/AMDMIGraphX/pull/4377) | Onnxruntime Weekly Sync 2025-10-10 | @github-actions[bot] | merged | 2025-10-10 | 2026-04-14 |
| [#4354](https://github.com/ROCm/AMDMIGraphX/pull/4354) | [7.1] Resolve Bert and Inception quick tune | @causten | merged | 2025-10-06 | 2026-04-14 |
| [#4344](https://github.com/ROCm/AMDMIGraphX/pull/4344) | Updated SD3 example for change in optimum-onnx[onnxruntime] | @causten | merged | 2025-10-02 | 2026-04-14 |
| [#4274](https://github.com/ROCm/AMDMIGraphX/pull/4274) | [7.0.2] Remove -wnrvo warning on unsupported compilers | @causten | merged | 2025-09-03 | 2026-04-14 |
| [#4125](https://github.com/ROCm/AMDMIGraphX/pull/4125) | Optimize checking for interdependencies | @pfultz2 | merged | 2025-07-07 | 2026-04-14 |
| [#4225](https://github.com/ROCm/AMDMIGraphX/pull/4225) | [7.0] Pull in fix for Const folding of immediate args | @causten | merged | 2025-08-08 | 2026-04-14 |
| [#4196](https://github.com/ROCm/AMDMIGraphX/pull/4196) | [7.0] Pull in fix for minCU from rocMLIR | @causten | merged | 2025-08-01 | 2026-04-14 |
| [#4174](https://github.com/ROCm/AMDMIGraphX/pull/4174) | [ROCM 7.0] Improve Softmax accuracy | @causten | merged | 2025-07-27 | 2026-04-14 |
| [#4155](https://github.com/ROCm/AMDMIGraphX/pull/4155) | [rocm7.0] Fix parse resize when input and output shapes are ... | @TedThemistokleous | merged | 2025-07-21 | 2026-04-14 |
| [#4145](https://github.com/ROCm/AMDMIGraphX/pull/4145) | Update failing GQA tests | @turneram | merged | 2025-07-17 | 2026-04-14 |
| [#4072](https://github.com/ROCm/AMDMIGraphX/pull/4072) | Add edge padding mode | @eddieliao | merged | 2025-06-13 | 2026-04-14 |
| [#4053](https://github.com/ROCm/AMDMIGraphX/pull/4053) | represent BF16::max by its encoding, rather than the expecte... | @lakhinderwalia | merged | 2025-06-04 | 2026-04-14 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-05-07T10:13:08Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#3071](https://github.com/ROCm/aiter/pull/3071) | So/a8w8 bpreshuflle flydsl xcd remap | @solinzby1 | open | 2026-05-07 | 2026-05-07 |
| [#3070](https://github.com/ROCm/aiter/pull/3070) | Fix dsink bf16 noise in Triton MHA one-kernel backward | @kyle-256 | open | 2026-05-07 | 2026-05-07 |
| [#3067](https://github.com/ROCm/aiter/pull/3067) | refactor topk softplus bias and opt | @yzhou103 | open | 2026-05-07 | 2026-05-07 |
| [#2884](https://github.com/ROCm/aiter/pull/2884) | Expand SGLang downstream coverage with MI35X model E2E tests | @bingxche | open | 2026-04-23 | 2026-05-07 |
| [#2958](https://github.com/ROCm/aiter/pull/2958) | [kernel] add fused_qk_rmsnorm_per_token_quant kernel | @gbyu-amd | open | 2026-04-29 | 2026-05-07 |
| [#2972](https://github.com/ROCm/aiter/pull/2972) | add swiglu a4w4 moe path for gpt-oss model | @XiaobingSuper | open | 2026-04-30 | 2026-05-07 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-05-07 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-05-07 |
| [#2954](https://github.com/ROCm/aiter/pull/2954) | Fix indexing in cp_gather_indexer_k_quant_cache | @kliuae-amd | open | 2026-04-29 | 2026-05-07 |
| [#3066](https://github.com/ROCm/aiter/pull/3066) | Qwen3.5 dev | @IzacharyI | open | 2026-05-07 | 2026-05-07 |
| [#3056](https://github.com/ROCm/aiter/pull/3056) | Add FlyDSL A8W4 MoE AOT run-only coverage | @zhiding512 | draft | 2026-05-06 | 2026-05-07 |
| [#2945](https://github.com/ROCm/aiter/pull/2945) | [OPUS]bf16 opus gemm support | @demonsan | open | 2026-04-29 | 2026-05-07 |
| [#3065](https://github.com/ROCm/aiter/pull/3065) | mla:host passes gqa_ratio and kernel derives effective s_MQA | @fangche123 | open | 2026-05-07 | 2026-05-07 |
| [#2887](https://github.com/ROCm/aiter/pull/2887) | Feat/step3p5 moe swiglustep | @LJ-underdog | open | 2026-04-23 | 2026-05-07 |
| [#2951](https://github.com/ROCm/aiter/pull/2951) | [MOE DSV4] flydsl a8w4 moe for dsv4 | @Zzz9990 | draft | 2026-04-29 | 2026-05-07 |
| [#3057](https://github.com/ROCm/aiter/pull/3057) | [Triton] [ATOM] DSV4 fusions phase 1 | @k50112113 | open | 2026-05-07 | 2026-05-07 |
| [#3063](https://github.com/ROCm/aiter/pull/3063) | mla ps mode support nhead*qseqlen = n*64 through mla_a16w16_... | @minmengdie | open | 2026-05-07 | 2026-05-07 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-05-07 |
| [#3053](https://github.com/ROCm/aiter/pull/3053) | CI: add manual image selection and Kimi serve benchmarks | @gyohuangxin | open | 2026-05-06 | 2026-05-07 |
| [#3032](https://github.com/ROCm/aiter/pull/3032) | fix(batch_prefill): OOB page table read fix + regression tes... | @Jeff-Huang | open | 2026-05-05 | 2026-05-07 |
| [#3017](https://github.com/ROCm/aiter/pull/3017) | CI: drop signal artifact, limit downstream on Checks run sta... | @leo-automation | open | 2026-05-04 | 2026-05-07 |
| [#2948](https://github.com/ROCm/aiter/pull/2948) | [CK_TILE] Use Unified Workspace for FMHA BWD | @DDEle | open | 2026-04-29 | 2026-05-07 |
| [#3051](https://github.com/ROCm/aiter/pull/3051) | add BF16 output path to fused Gated RMSNorm HIP kernel | @zovonoir | open | 2026-05-06 | 2026-05-07 |
| [#3008](https://github.com/ROCm/aiter/pull/3008) | [FLYDSL] test only. bump dependency to 0.1.5.dev526 | @coderfeli | open | 2026-05-03 | 2026-05-07 |
| [#2332](https://github.com/ROCm/aiter/pull/2332) | [Gluon][gfx1250] Gemm MXFP4 preshuffled | @Boss2002n | draft | 2026-03-18 | 2026-05-07 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-05-06 |
| [#2994](https://github.com/ROCm/aiter/pull/2994) | [Gluon]: Gluon kernel for mxfp4 quant | @NimitPtl | draft | 2026-05-01 | 2026-05-06 |
| [#2695](https://github.com/ROCm/aiter/pull/2695) | [Triton] Declare triton>=3.6.0 dependency  | @micmelesse | open | 2026-04-10 | 2026-05-06 |
| [#3048](https://github.com/ROCm/aiter/pull/3048) | refactor(triton): reorganize conv modules and unify gated FP... | @hellozhuo-amd | open | 2026-05-06 | 2026-05-06 |
| [#2886](https://github.com/ROCm/aiter/pull/2886) | [TRITON] Conv Kernels First Commit to AITER | @saeid-rostami | draft | 2026-04-23 | 2026-05-06 |
| [#2494](https://github.com/ROCm/aiter/pull/2494) | [TRITON] Moe a8w4 on gfx1250 | @lburzawa | open | 2026-03-26 | 2026-05-06 |
| [#3016](https://github.com/ROCm/aiter/pull/3016) | [MoE] Cache split-K scratch buffers to avoid per-call hipMal... | @frida-andersson | open | 2026-05-04 | 2026-05-06 |
| [#3037](https://github.com/ROCm/aiter/pull/3037) | Optimize dynamic_per_group_scaled_quant via compile-time gro... | @RichardChamberlain1 | draft | 2026-05-05 | 2026-05-06 |
| [#2998](https://github.com/ROCm/aiter/pull/2998) | Dsv4 sparse indexer | @Oseltamivir | open | 2026-05-01 | 2026-05-06 |
| [#2513](https://github.com/ROCm/aiter/pull/2513) | [TRITON] [GLUON] GFX1250 Gluon MoE A4W4 Kernel | @farlukas | open | 2026-03-27 | 2026-05-06 |
| [#2967](https://github.com/ROCm/aiter/pull/2967) | [TRITON] mHC-post: Apply post-stream and res-stream mixing | @waqahmed-amd-fi | open | 2026-04-29 | 2026-05-06 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | draft | 2026-04-24 | 2026-05-06 |
| [#2920](https://github.com/ROCm/aiter/pull/2920) | refactor and unify triton/bench_fav3_sage.py scripts | @jcaraban | open | 2026-04-27 | 2026-05-06 |
| [#2774](https://github.com/ROCm/aiter/pull/2774) | [HIP] add chunk_gated_delta_rule_fwd_h_hip kernel for prefil... | @yiijin | open | 2026-04-17 | 2026-05-06 |
| [#3041](https://github.com/ROCm/aiter/pull/3041) | [Triton] fused_flatten_fp8_group_quant: add transpose_scale ... | @Jacob0226 | open | 2026-05-06 | 2026-05-06 |
| [#2854](https://github.com/ROCm/aiter/pull/2854) | [FLYDSL] Add GDR prefill chunk_gdn_fwd_h kernel for MI35X | @huizzhan | open | 2026-04-22 | 2026-05-06 |
| [#3046](https://github.com/ROCm/aiter/pull/3046) | Add nhead128,1 mask=1 to support mtp>0 | @fangche123 | open | 2026-05-06 | 2026-05-06 |
| [#3013](https://github.com/ROCm/aiter/pull/3013) | fix(mla): bypass fp8 qseqlen2 kernel precision issue on gfx9... | @fangche123 | open | 2026-05-03 | 2026-05-06 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-05-06 |
| [#2902](https://github.com/ROCm/aiter/pull/2902) | feat(triton/rope): fused QKV split, QK RMSNorm, RoPE, and pa... | @hellozhuo-amd | open | 2026-04-24 | 2026-05-06 |
| [#3039](https://github.com/ROCm/aiter/pull/3039) | fmha f16 | @feifei14119 | open | 2026-05-06 | 2026-05-06 |
| [#2999](https://github.com/ROCm/aiter/pull/2999) | Replace QH16 bf16 kernel with a new one that does not use pt... | @JohnNikolay84 | open | 2026-05-01 | 2026-05-05 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-05-05 |
| [#3036](https://github.com/ROCm/aiter/pull/3036) | Add -o flag to bench_gmm.py for CSV output | @apicciau | draft | 2026-05-05 | 2026-05-05 |
| [#2646](https://github.com/ROCm/aiter/pull/2646) | [TRITON] mHC-pre: Manifold-constrained Hyper Connection  | @anhminhnguyenhoang | open | 2026-04-07 | 2026-05-05 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-05-05 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-05-05 |
| [#3031](https://github.com/ROCm/aiter/pull/3031) | attention.cu: guard out-of-head Q load in mfma16 paged-atten... | @JohnQinAMD | open | 2026-05-05 | 2026-05-05 |
| [#3029](https://github.com/ROCm/aiter/pull/3029) | [Perf][Kernel] Simplify per_1x32 MXFP4 quant path with token... | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3030](https://github.com/ROCm/aiter/pull/3030) | [Refactor] Clean up cktile wrappers, lru_cache sizes, get_pa... | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3028](https://github.com/ROCm/aiter/pull/3028) | [Refactor] Remove FlyDSL kernel dispatch layer and ck_moe_st... | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3027](https://github.com/ROCm/aiter/pull/3027) | [Perf][Kernel] Add gfx950 per_1x128 FP8 blockscale 1-stage A... | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3026](https://github.com/ROCm/aiter/pull/3026) | [Perf] Cache moe_sorting output buffers and quant partials t... | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3025](https://github.com/ROCm/aiter/pull/3025) | [Perf] Cache GFX string and CU count at module import time | @peymanr | draft | 2026-05-04 | 2026-05-04 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-05-04 |
| [#2918](https://github.com/ROCm/aiter/pull/2918) | CI: auto-update split test FILE_TIMES | @github-actions[bot] | open | 2026-04-27 | 2026-05-04 |
| [#2962](https://github.com/ROCm/aiter/pull/2962) | [kernel] add fused_qk_norm_rope_1way kernel | @MHYangAMD | open | 2026-04-29 | 2026-05-04 |
| [#2968](https://github.com/ROCm/aiter/pull/2968) | [GFX1250] Add Triton TDM to MoE Metadata kernels  | @nsusanto | open | 2026-04-29 | 2026-05-01 |
| [#3001](https://github.com/ROCm/aiter/pull/3001) | Remove sorting for fmoe | @JohnNikolay84 | draft | 2026-05-01 | 2026-05-01 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-05-01 |
| [#2997](https://github.com/ROCm/aiter/pull/2997) | mla: refuse page_size > 1 on bf16 decode-stage1 kernel (no _... | @kzjeef | open | 2026-05-01 | 2026-05-01 |
| [#2888](https://github.com/ROCm/aiter/pull/2888) | [[Triton] [Gluon] [GFX12] add FP4 support for UA3D, MLA, KV ... | @k50112113 | draft | 2026-04-23 | 2026-05-01 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-04-30 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-04-30 |
| [#2765](https://github.com/ROCm/aiter/pull/2765) | Satya.gfx12 mxfp4 gemm scale buffer load | @Boss2002n | draft | 2026-04-16 | 2026-04-30 |
| [#2976](https://github.com/ROCm/aiter/pull/2976) | mxfp4 quantize kernel | @amd-yilizhao | open | 2026-04-30 | 2026-04-30 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-04-30 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-04-29 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | Flydsl implementation of a8w8 blockscale for gfx1250 (WIP) | @omuhamma | draft | 2026-04-20 | 2026-04-29 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-04-29 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-04-29 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | open | 2026-04-29 | 2026-04-29 |
| [#2936](https://github.com/ROCm/aiter/pull/2936) | [gluon][pa_mqa_logits] memory-safety: mask all OutLogits buf... | @maeehart | draft | 2026-04-28 | 2026-04-29 |
| [#2949](https://github.com/ROCm/aiter/pull/2949) | [MOE][WIP] Integrate Qwen3.5 397B FP8 PTPC MOE Optimization ... | @sammysun0711 | draft | 2026-04-29 | 2026-04-29 |
| [#2957](https://github.com/ROCm/aiter/pull/2957) | avoid online build for mha fwd | @XiaobingSuper | open | 2026-04-29 | 2026-04-29 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-04-29 |
| [#2942](https://github.com/ROCm/aiter/pull/2942) | revert gpt-oss tuned fmoe config | @XiaobingSuper | open | 2026-04-29 | 2026-04-29 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-04-28 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-04-28 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | flydsl implementation of a16w16 gemm | @omuhamma | draft | 2026-04-13 | 2026-04-28 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-04-28 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-04-28 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-04-27 |
| [#2922](https://github.com/ROCm/aiter/pull/2922) | Deepseek Sparse Attention Triton Kernels for Training | @wangye805 | draft | 2026-04-27 | 2026-04-27 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-04-25 |
| [#2642](https://github.com/ROCm/aiter/pull/2642) | fix: enable MXFP4 MoE at TP=4/8 via CKTile a4w4 kernels and ... | @thpereir | open | 2026-04-07 | 2026-04-24 |
| [#2910](https://github.com/ROCm/aiter/pull/2910) | improve fused rope kernel | @amd-weisun | open | 2026-04-24 | 2026-04-24 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | open | 2026-04-24 | 2026-04-24 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-04-24 |
| [#2512](https://github.com/ROCm/aiter/pull/2512) | [TRITON][GLUON] Unified attention 2d gluon kernel | @cagrikymk | draft | 2026-03-27 | 2026-04-24 |
| [#2885](https://github.com/ROCm/aiter/pull/2885) | Implement TurboQuant | @waqahmed-amd-fi | draft | 2026-04-23 | 2026-04-23 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | draft | 2026-04-22 | 2026-04-23 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-04-23 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | Add initial Windows support | @0xDELUXA | draft | 2026-04-11 | 2026-04-22 |
| [#2862](https://github.com/ROCm/aiter/pull/2862) | Bump CK for a stride fix in CKTile Block-Scale GEMM | @samremes | draft | 2026-04-22 | 2026-04-22 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-04-22 |
| [#2383](https://github.com/ROCm/aiter/pull/2383) | CI: Skip perftest profiling in CI to speed up correctness te... | @gyohuangxin | open | 2026-03-20 | 2026-04-22 |
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
| [#2793](https://github.com/ROCm/aiter/pull/2793) | refactor(flydsl): unify AOT job compilation helpers | @zhiding512 | draft | 2026-04-20 | 2026-04-20 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-04-17 |
| [#2779](https://github.com/ROCm/aiter/pull/2779) | [Don't merge] Gluon pa bad case reproducer | @ganyi1996ppo | draft | 2026-04-17 | 2026-04-17 |
| [#2773](https://github.com/ROCm/aiter/pull/2773) | [DO NOT MERGE] CI: install Triton wheel before Aiter standar... | @gyohuangxin | open | 2026-04-17 | 2026-04-17 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-04-17 |
| [#2585](https://github.com/ROCm/aiter/pull/2585) | feat(mla): support nhead < 16 in MLA decode via transparent ... | @ChuanLi1101 | open | 2026-04-01 | 2026-04-17 |
| [#2697](https://github.com/ROCm/aiter/pull/2697) | Add FlyDSL fused RoPE + KV Cache backend | @coderfeli | open | 2026-04-11 | 2026-04-17 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-04-16 |
| [#2647](https://github.com/ROCm/aiter/pull/2647) | refactor_hip_kernel | @amd-ruitang3 | open | 2026-04-08 | 2026-04-16 |
| [#2764](https://github.com/ROCm/aiter/pull/2764) | [Triton] Fix Flash Attention Cuda Graphs issues | @micmelesse | draft | 2026-04-16 | 2026-04-16 |
| [#2357](https://github.com/ROCm/aiter/pull/2357) | latest | @Boss2002n | draft | 2026-03-19 | 2026-04-16 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-04-16 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-04-15 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-04-15 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-04-14 |
| [#2238](https://github.com/ROCm/aiter/pull/2238) | [COMMS] Fused allreduce, residual add, rms, quant, gemm | @micmelesse | draft | 2026-03-10 | 2026-04-14 |
| [#2264](https://github.com/ROCm/aiter/pull/2264) | [CI] Flash Attention CK CI | @micmelesse | draft | 2026-03-12 | 2026-04-14 |
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
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-04-14 |
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
| [#2598](https://github.com/ROCm/aiter/pull/2598) | CI: use internal registry for MI35x pre-build images | @gyohuangxin | open | 2026-04-02 | 2026-04-14 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-04-14 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-04-14 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-04-14 |
| [#2640](https://github.com/ROCm/aiter/pull/2640) | Restore CKTile MOE tuning and add between-stage quant fairne... | @amd-yashagar | open | 2026-04-07 | 2026-04-14 |
| [#2529](https://github.com/ROCm/aiter/pull/2529) | Update pa kernel for case when all unused kv are filled with... | @ZhangLirong-amd | open | 2026-03-30 | 2026-04-14 |
| [#2632](https://github.com/ROCm/aiter/pull/2632) | [config] Add bf16 tuned GEMM config for Kimi-K2.5 on MI355 (... | @akao-amd | open | 2026-04-07 | 2026-04-14 |
| [#2509](https://github.com/ROCm/aiter/pull/2509) | [Triton] [Gluon] [GFX12] Add gluon gemm for a8w8 MoE blocksc... | @nsusanto | open | 2026-03-27 | 2026-04-14 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-04-14 |
| [#2540](https://github.com/ROCm/aiter/pull/2540) | Optimization of Topk Operator in March | @chuanbowang2026 | draft | 2026-03-30 | 2026-04-14 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-04-14 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-04-14 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-04-14 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-04-14 |
| [#2692](https://github.com/ROCm/aiter/pull/2692) | [TRITON][GLUON] Remove support to Gluon API older than the o... | @brunomazzottiamd | draft | 2026-04-10 | 2026-04-14 |
| [#2615](https://github.com/ROCm/aiter/pull/2615) | Add pytest for fmha_v3_varlen_fwd to trigger module_fmha_v3_... | @Copilot | draft | 2026-04-03 | 2026-04-14 |
| [#2649](https://github.com/ROCm/aiter/pull/2649) | Fuse qk norm cache group quant | @yzhou103 | open | 2026-04-08 | 2026-04-14 |
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
| [#2270](https://github.com/ROCm/aiter/pull/2270) | Add topk implementations: csdn baseline, csdn reduceAtomic, ... | @chuanbowang2026 | open | 2026-03-13 | 2026-03-18 |
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
| [#2911](https://github.com/ROCm/aiter/pull/2911) | F8 fmha ASM gfx950 | @JohnNikolay84 | merged | 2026-04-24 | 2026-05-07 |
| [#3064](https://github.com/ROCm/aiter/pull/3064) | CI: Temporarily move Aiter build to linux-aiter-mi300x-1 | @gyohuangxin | merged | 2026-05-07 | 2026-05-07 |
| [#3068](https://github.com/ROCm/aiter/pull/3068) | sync branch fix_cp_gather_indexer_cache with main | @kliuae | merged | 2026-05-07 | 2026-05-07 |
| [#3059](https://github.com/ROCm/aiter/pull/3059) | Add mhc_pre to custom_op | @junhaha666 | merged | 2026-05-07 | 2026-05-07 |
| [#3055](https://github.com/ROCm/aiter/pull/3055) | [OPUS] Support compile-time shift to layout and enhance imme... | @kaiyang-1 | merged | 2026-05-06 | 2026-05-07 |
| [#3049](https://github.com/ROCm/aiter/pull/3049) | [Hotfix] aiter/__init__: do not swallow import errors on Lin... | @ChuanLi1101 | merged | 2026-05-06 | 2026-05-06 |
| [#3002](https://github.com/ROCm/aiter/pull/3002) | ci(nightly): fix wheel/image ABI mismatch + 0-test false-pas... | @sunway513 | merged | 2026-05-01 | 2026-05-06 |
| [#2863](https://github.com/ROCm/aiter/pull/2863) | kimi a16wi4 moe support | @yadaish | merged | 2026-04-22 | 2026-05-06 |
| [#3019](https://github.com/ROCm/aiter/pull/3019) | Fix batched_model_benchmark_shapes returning hidden/intermed... | @apicciau | merged | 2026-05-04 | 2026-05-06 |
| [#3014](https://github.com/ROCm/aiter/pull/3014) | Add fp8 mla decode kernel for sub_kv=64, sub_qh=8 (gqa_ratio... | @JohnNikolay84 | merged | 2026-05-03 | 2026-05-06 |
| [#3054](https://github.com/ROCm/aiter/pull/3054) | CI: retry aiter editable install without build isolation | @gyohuangxin | merged | 2026-05-06 | 2026-05-06 |
| [#3050](https://github.com/ROCm/aiter/pull/3050) | Fix CK MoE split-k dispatch for blockscale FP8 | @kliuae | merged | 2026-05-06 | 2026-05-06 |
| [#3043](https://github.com/ROCm/aiter/pull/3043) | CI: Temporarily use previous vllm nightly image | @gyohuangxin | merged | 2026-05-06 | 2026-05-06 |
| [#2855](https://github.com/ROCm/aiter/pull/2855) | [feat](norm_rope_cache): support q k v input for fused_qk_no... | @PerryZhang01 | merged | 2026-04-22 | 2026-05-06 |
| [#3018](https://github.com/ROCm/aiter/pull/3018) | Remove async copy override from Triton test workflow | @nidal567 | merged | 2026-05-04 | 2026-05-06 |
| [#3047](https://github.com/ROCm/aiter/pull/3047) | [OPUS] moe_sorting_opus: allocate workspace tensor in Python... | @carlushuang | merged | 2026-05-06 | 2026-05-06 |
| [#3044](https://github.com/ROCm/aiter/pull/3044) | Update mhc_pre hip kernel support hc_head | @junhaha666 | merged | 2026-05-06 | 2026-05-06 |
| [#3035](https://github.com/ROCm/aiter/pull/3035) | add rope/rotate_activation/fp4_quant_inplace fused kernel fo... | @junhaha666 | merged | 2026-05-05 | 2026-05-06 |
| [#2995](https://github.com/ROCm/aiter/pull/2995) | add topk_softplus kernel | @yzhou103 | merged | 2026-05-01 | 2026-05-06 |
| [#3040](https://github.com/ROCm/aiter/pull/3040) | CI: set HSA_NO_SCRATCH_RECLAIM for gpt-oss atom test | @gyohuangxin | merged | 2026-05-06 | 2026-05-06 |
| [#2983](https://github.com/ROCm/aiter/pull/2983) | [MLA] Fix nhead=32 non-persistent decode crash on gfx950 | @frida-andersson | merged | 2026-04-30 | 2026-05-06 |
| [#2877](https://github.com/ROCm/aiter/pull/2877) | Fix FlyDSL split-k barrier synchronization issue | @XiaobingSuper | merged | 2026-04-23 | 2026-05-06 |
| [#3033](https://github.com/ROCm/aiter/pull/3033) | Fix sqrsum store race condition in mhc_pre_gemm_sqrsum_kerne... | @kkHuang-amd | merged | 2026-05-05 | 2026-05-06 |
| [#3007](https://github.com/ROCm/aiter/pull/3007) | ci: replace deprecated zmq with pyzmq in CI scripts | @sunway513 | merged | 2026-05-03 | 2026-05-06 |
| [#2969](https://github.com/ROCm/aiter/pull/2969) | [FLYDSL] Add gfx1201 (RDNA4) flash_attn_func backend | @sunway513 | merged | 2026-04-29 | 2026-05-06 |
| [#3024](https://github.com/ROCm/aiter/pull/3024) | [Silo] Add configs missing from bulk merge #3004 | @azaidy | merged | 2026-05-04 | 2026-05-05 |
| [#3005](https://github.com/ROCm/aiter/pull/3005) | [Silo] Bulk merge: kernel fixes and features (SplitK, MoE fi... | @sunway513 | merged | 2026-05-01 | 2026-05-05 |
| [#2974](https://github.com/ROCm/aiter/pull/2974) | [Moe_sorting_opus] refactor | @amd-ruitang3 | merged | 2026-04-30 | 2026-05-05 |
| [#3004](https://github.com/ROCm/aiter/pull/3004) | [Silo] Bulk merge: tuned GEMM and FMoE configs (GLM-4.7, Kim... | @sunway513 | merged | 2026-05-01 | 2026-05-04 |
| [#3009](https://github.com/ROCm/aiter/pull/3009) | [FLYDSL] pin dependency to 0.1.5 | @coderfeli | merged | 2026-05-03 | 2026-05-04 |
| [#2977](https://github.com/ROCm/aiter/pull/2977) | CI: retry docker pulls in workflow image downloads | @gyohuangxin | merged | 2026-04-30 | 2026-05-04 |
| [#2984](https://github.com/ROCm/aiter/pull/2984) | [TRITON] Split `test_mha.py` into smaller test files | @brunomazzottiamd | merged | 2026-04-30 | 2026-05-04 |
| [#3011](https://github.com/ROCm/aiter/pull/3011) | use opus moe as default | @amd-ruitang3 | merged | 2026-05-03 | 2026-05-04 |
| [#3010](https://github.com/ROCm/aiter/pull/3010) | no quant rmsnorm support | @ganyi1996ppo | merged | 2026-05-03 | 2026-05-04 |
| [#3012](https://github.com/ROCm/aiter/pull/3012) | feat(top_k_per_row): expose parametric k via runtime arg | @valarLip | merged | 2026-05-03 | 2026-05-04 |
| [#2985](https://github.com/ROCm/aiter/pull/2985) | ci: make Standard Tests resilient to PRs missing install_tri... | @sunway513 | merged | 2026-04-30 | 2026-05-03 |
| [#3006](https://github.com/ROCm/aiter/pull/3006) | mla/gather_kv_b_proj: handle unquantized kv_b_proj weight (k... | @kzjeef | merged | 2026-05-02 | 2026-05-03 |
| [#2990](https://github.com/ROCm/aiter/pull/2990) | [FLYDSL] Extend gfx1201 FA backend coverage to Wan2.2 TI2V-5... | @sunway513 | merged | 2026-05-01 | 2026-05-03 |
| [#2688](https://github.com/ROCm/aiter/pull/2688) | [TRITON] fix torch.compile graph break in arch_info.get_arch... | @lauri9 | merged | 2026-04-10 | 2026-05-02 |
| [#2817](https://github.com/ROCm/aiter/pull/2817) | FlyDSL tuning improvements: prune M-incompatible tile candid... | @apicciau | merged | 2026-04-20 | 2026-05-02 |
| [#2917](https://github.com/ROCm/aiter/pull/2917) | Add a new kernel that supports decode mla with sub_kv=64 and... | @JohnNikolay84 | merged | 2026-04-25 | 2026-05-01 |
| [#2487](https://github.com/ROCm/aiter/pull/2487) | Expose AQLayout as tunable parameter for CKTile blockscale 8... | @samremes | merged | 2026-03-26 | 2026-05-01 |
| [#2978](https://github.com/ROCm/aiter/pull/2978) | Fix mhc_pre_big_fuse's accuracy because of loading synchroni... | @junhaha666 | merged | 2026-04-30 | 2026-05-01 |
| [#2685](https://github.com/ROCm/aiter/pull/2685) | [Triton]Integrate mla_decode_gluon kernel | @Dewei-Wang-sh | merged | 2026-04-10 | 2026-05-01 |
| [#2980](https://github.com/ROCm/aiter/pull/2980) | [Bugfix] Suppress pandas FutureWarning and fix pybind11 type... | @valarLip | merged | 2026-04-30 | 2026-05-01 |
| [#2953](https://github.com/ROCm/aiter/pull/2953) | [cache] hip kl refactor | @amd-ruitang3 | merged | 2026-04-29 | 2026-04-30 |
| [#2963](https://github.com/ROCm/aiter/pull/2963) | Fix mhc_post accuracy and optimize perfmance on small M | @junhaha666 | merged | 2026-04-29 | 2026-04-30 |
| [#2973](https://github.com/ROCm/aiter/pull/2973) | Skip triton install in develop mode when already installed | @mengfei-jiang | merged | 2026-04-30 | 2026-04-30 |
| [#2952](https://github.com/ROCm/aiter/pull/2952) | CI: add top-priority models to vLLM benchmark | @gyohuangxin | merged | 2026-04-29 | 2026-04-30 |
| [#2900](https://github.com/ROCm/aiter/pull/2900) | Fix: correct mxfp4  for K not divisible by 256 | @Wanzizhu | merged | 2026-04-24 | 2026-04-30 |
| [#2959](https://github.com/ROCm/aiter/pull/2959) | Use triton wheel no fork | @mengfei-jiang | merged | 2026-04-29 | 2026-04-30 |
| [#2881](https://github.com/ROCm/aiter/pull/2881) | dsv3 blockscale gemm config  in mi300 | @yzhou103 | merged | 2026-04-23 | 2026-04-30 |
| [#2933](https://github.com/ROCm/aiter/pull/2933) | fix tuner test and add more test | @yzhou103 | merged | 2026-04-28 | 2026-04-30 |
| [#2940](https://github.com/ROCm/aiter/pull/2940) | fix num_stages in `test_ff_a16w16_fused.py` to account for i... | @nidal567 | merged | 2026-04-28 | 2026-04-29 |
| [#2966](https://github.com/ROCm/aiter/pull/2966) | ci: retry docker login, skip on fork PRs | @gyohuangxin | merged | 2026-04-29 | 2026-04-29 |
| [#2956](https://github.com/ROCm/aiter/pull/2956) | fix gptoss moe aot | @zhiding512 | merged | 2026-04-29 | 2026-04-29 |
| [#2879](https://github.com/ROCm/aiter/pull/2879) | Support preshuffled layout in indexer_k_quant_and_cache / cp... | @1am9trash | merged | 2026-04-23 | 2026-04-29 |
| [#2927](https://github.com/ROCm/aiter/pull/2927) | Re-enable the native qh128 fp8 kernel (mla_a8w8_qh128_m32x4_... | @fangche123 | merged | 2026-04-28 | 2026-04-29 |
| [#2961](https://github.com/ROCm/aiter/pull/2961) | [MOE] Special path for moe ptpc fp8 , batch 1~32 | @sammysun0711 | merged | 2026-04-29 | 2026-04-29 |
| [#2890](https://github.com/ROCm/aiter/pull/2890) | Fix 2-stage fused_allreduce_rmsnorm memory ordering | @hubertlu-tw | merged | 2026-04-23 | 2026-04-29 |
| [#2721](https://github.com/ROCm/aiter/pull/2721) | Ensure GemmTuner doesn't generate invalid input combinations... | @apicciau | merged | 2026-04-13 | 2026-04-29 |
| [#2950](https://github.com/ROCm/aiter/pull/2950) | Revert "CI: Use build-only-aiter runner to build Triton whee... | @gyohuangxin | merged | 2026-04-29 | 2026-04-29 |
| [#2925](https://github.com/ROCm/aiter/pull/2925) | ci: enable prebuilt kernel wheels for fork PRs | @okakarpa | merged | 2026-04-27 | 2026-04-29 |
| [#2924](https://github.com/ROCm/aiter/pull/2924) | [FLYDSL] Update GDR decode kernel | @xytpai | merged | 2026-04-27 | 2026-04-29 |
| [#2937](https://github.com/ROCm/aiter/pull/2937) | [FIX] Update fmha bwd recompile kernel for sbhd layout | @JaxChen29 | merged | 2026-04-28 | 2026-04-29 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-05-07T10:13:16Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#682](https://github.com/ROCm/ATOM/pull/682) | Remove chunk split in Qwen3.5 and Qwen3Next | @ganyi1996ppo | open | 2026-05-02 | 2026-05-07 |
| [#545](https://github.com/ROCm/ATOM/pull/545) | [feat](minimax): support minimax-2.5 in atom-vllm mode | @PerryZhang01 | open | 2026-04-12 | 2026-05-07 |
| [#711](https://github.com/ROCm/ATOM/pull/711) | [fix](plugin): remove qkv arg in vllm-atom | @PerryZhang01 | open | 2026-05-07 | 2026-05-07 |
| [#653](https://github.com/ROCm/ATOM/pull/653) | [Enhancement] support online quantization | @haoyangli0109 | open | 2026-04-28 | 2026-05-07 |
| [#670](https://github.com/ROCm/ATOM/pull/670) | [fix][acc] fix accuracy of fp8 attn weights model using ptpc... | @gbyu-amd | open | 2026-04-29 | 2026-05-07 |
| [#494](https://github.com/ROCm/ATOM/pull/494) | [Feat][Plugin] Enable DeepSeek-V3.2 for vLLM-ATOM Plugin | @kliuae-amd | open | 2026-04-06 | 2026-05-07 |
| [#708](https://github.com/ROCm/ATOM/pull/708) | perf: fused Triton kernels for Qwen3.5 RMSNorm and MRoPE | @zovonoir | open | 2026-05-07 | 2026-05-07 |
| [#690](https://github.com/ROCm/ATOM/pull/690) | Support (P/D) disaggregation on mooncake | @ZhangLirong-amd | open | 2026-05-05 | 2026-05-07 |
| [#705](https://github.com/ROCm/ATOM/pull/705) | Support torch compile in deepseek v4  | @ZhangLirong-amd | open | 2026-05-07 | 2026-05-07 |
| [#631](https://github.com/ROCm/ATOM/pull/631) | [Kimi] support Eagle3 speculative decoding for Kimi K2.5 | @yhl-amd | open | 2026-04-22 | 2026-05-07 |
| [#674](https://github.com/ROCm/ATOM/pull/674) | support swiglu a4w4 moe | @XiaobingSuper | open | 2026-04-30 | 2026-05-07 |
| [#709](https://github.com/ROCm/ATOM/pull/709) | Glm mtp test | @jiayyu | open | 2026-05-07 | 2026-05-07 |
| [#704](https://github.com/ROCm/ATOM/pull/704) | [Triton] DSV4 fusions phase 1 | @k50112113 | open | 2026-05-07 | 2026-05-07 |
| [#700](https://github.com/ROCm/ATOM/pull/700) | [ci] add Qwen3.5 Dense/MoE models accuracy validation for at... | @wanzhenchn | open | 2026-05-06 | 2026-05-07 |
| [#549](https://github.com/ROCm/ATOM/pull/549) | [feat] Add RLHF rollout integration support (verl) | @sijyang | open | 2026-04-13 | 2026-05-07 |
| [#691](https://github.com/ROCm/ATOM/pull/691) | use zane flydsl fused moe | @amd-ruitang3 | open | 2026-05-05 | 2026-05-06 |
| [#676](https://github.com/ROCm/ATOM/pull/676) | feat(deepseek_v4): FP8 batched BMM for grouped output LoRA w... | @zufayu | open | 2026-05-01 | 2026-05-06 |
| [#698](https://github.com/ROCm/ATOM/pull/698) | update triton version for sglang-atom docker | @zhuyuhua-v | open | 2026-05-06 | 2026-05-06 |
| [#639](https://github.com/ROCm/ATOM/pull/639) | [benchmark] Add TP8 EP8 case for deepseek FP4 | @qichu-yun | open | 2026-04-23 | 2026-05-06 |
| [#614](https://github.com/ROCm/ATOM/pull/614) | (ci)(recipe): Add DeepSeek-R1 FP4 TP4 validation and DS reci... | @zhuyuhua-v | draft | 2026-04-20 | 2026-05-06 |
| [#606](https://github.com/ROCm/ATOM/pull/606) | [plugin] Flux2 model support | @Phi-C | open | 2026-04-19 | 2026-05-06 |
| [#641](https://github.com/ROCm/ATOM/pull/641) | feat: add Step-3.5-Flash support and fix MoE weight shufflin... | @LJ-underdog | draft | 2026-04-23 | 2026-05-06 |
| [#694](https://github.com/ROCm/ATOM/pull/694) | enable configurable weight bpreshuffle for fp8 blockscale ge... | @ganyi1996ppo | open | 2026-05-06 | 2026-05-06 |
| [#695](https://github.com/ROCm/ATOM/pull/695) | [vLLM-ATOM benchmark] add GLM-4.7 and Minimax-2.5 to vLLM-AT... | @gbyu-amd | open | 2026-05-06 | 2026-05-06 |
| [#658](https://github.com/ROCm/ATOM/pull/658) | dsa: remove block_table_convert_triton in dsa | @junhaha666 | open | 2026-04-28 | 2026-05-01 |
| [#675](https://github.com/ROCm/ATOM/pull/675) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-04-30 | 2026-04-30 |
| [#644](https://github.com/ROCm/ATOM/pull/644) | [vLLM-ATOM] Add profile trace parsing tool for vLLM-ATOM | @kliuae-amd | draft | 2026-04-24 | 2026-04-30 |
| [#649](https://github.com/ROCm/ATOM/pull/649) | support sparse attn mtp | @jiayyu | open | 2026-04-25 | 2026-04-30 |
| [#669](https://github.com/ROCm/ATOM/pull/669) | [vllm-atom] Fix GLM-5 accuracy in vLLM plugin | @kliuae-amd | open | 2026-04-29 | 2026-04-29 |
| [#654](https://github.com/ROCm/ATOM/pull/654) | Support Mimo-v2.5-Pro | @wufann | draft | 2026-04-28 | 2026-04-29 |
| [#656](https://github.com/ROCm/ATOM/pull/656) | prefill gdr kernel enablement | @ganyi1996ppo | open | 2026-04-28 | 2026-04-28 |
| [#533](https://github.com/ROCm/ATOM/pull/533) | [atom-vllm][DP/EP] enable DP/EP for atom-vllm | @zejunchen-zejun | draft | 2026-04-09 | 2026-04-28 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-04-27 |
| [#643](https://github.com/ROCm/ATOM/pull/643) | [Draft][ATOM-SGLang][Feat] Enable Deepseek v3 MTP | @ZhiweiYan-96 | draft | 2026-04-24 | 2026-04-24 |
| [#557](https://github.com/ROCm/ATOM/pull/557) | [Feat][Plugin] Enable MTP for vLLM Plugin | @whx-sjtu | draft | 2026-04-14 | 2026-04-23 |
| [#514](https://github.com/ROCm/ATOM/pull/514) | Add the benchmark flow for ATOM vLLM plugin | @wuhuikx | draft | 2026-04-08 | 2026-04-23 |
| [#632](https://github.com/ROCm/ATOM/pull/632) | fix: correct MXFP4 MoE weight shuffle for Quark models (Mini... | @thpereir | draft | 2026-04-22 | 2026-04-22 |
| [#627](https://github.com/ROCm/ATOM/pull/627) | Gemma16w16 integration | @amirumoAMD | draft | 2026-04-21 | 2026-04-21 |
| [#622](https://github.com/ROCm/ATOM/pull/622) | [atom-vllm] use aiter greedy sampler | @zejunchen-zejun | draft | 2026-04-21 | 2026-04-21 |
| [#613](https://github.com/ROCm/ATOM/pull/613) | [feat](minimax): refactor rmsnorm for minimax | @PerryZhang01 | open | 2026-04-20 | 2026-04-21 |
| [#566](https://github.com/ROCm/ATOM/pull/566) | [Gluon] [Triton] [MI450] [MI350] Enable Unified Attention op... | @k50112113 | open | 2026-04-14 | 2026-04-21 |
| [#598](https://github.com/ROCm/ATOM/pull/598) | ci: add Atom SGLang mesh PD disaggregation benchmark workflo... | @Jasen2201 | draft | 2026-04-17 | 2026-04-21 |
| [#592](https://github.com/ROCm/ATOM/pull/592) | docker: pin base image from ubuntu 24.04 py3.12 to ubuntu 22... | @Jasen2201 | draft | 2026-04-17 | 2026-04-21 |
| [#502](https://github.com/ROCm/ATOM/pull/502) | [ATOM_MESH] PD disaggregation router with multi-node support | @Jasen2201 | draft | 2026-04-07 | 2026-04-21 |
| [#611](https://github.com/ROCm/ATOM/pull/611) | mla: drop max_split_per_batch=16 cap to match vLLM | @peizhang56 | open | 2026-04-20 | 2026-04-20 |
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
| [#427](https://github.com/ROCm/ATOM/pull/427) | [feat](a8w4): support a8w4 gpt oss | @PerryZhang01 | draft | 2026-03-27 | 2026-03-27 |
| [#404](https://github.com/ROCm/ATOM/pull/404) | [Draft][Feature][Plugin] support GLM4.7 for sglang plugin | @qichu-yun | draft | 2026-03-25 | 2026-03-27 |
| [#402](https://github.com/ROCm/ATOM/pull/402) | [Fix](docker): fix transformers version for atom-vllm | @PerryZhang01 | draft | 2026-03-25 | 2026-03-25 |
| [#342](https://github.com/ROCm/ATOM/pull/342) | refactor: unify RMSNorm fusion with DualRMSNorm + master swi... | @valarLip | draft | 2026-03-16 | 2026-03-16 |
| [#250](https://github.com/ROCm/ATOM/pull/250) | Fix block allocation for multi-token decode (speculative dec... | @brucechanglongxu | open | 2026-03-01 | 2026-03-16 |
| [#168](https://github.com/ROCm/ATOM/pull/168) | [POC][Deepseek] Engram support, model_runner hash compute ov... | @ZhangLirong-amd | draft | 2026-01-28 | 2026-03-16 |
| [#226](https://github.com/ROCm/ATOM/pull/226) | Enable Triton MOE for MXFP4 on gfx950 (MI355X) | @sunway513 | draft | 2026-02-20 | 2026-03-16 |
| [#156](https://github.com/ROCm/ATOM/pull/156) | Adding prefill decode markers to trace and enable shapes | @msiddaiah | open | 2026-01-20 | 2026-03-16 |
| [#45](https://github.com/ROCm/ATOM/pull/45) | [feat]Add aiter quick allreduce path for Qwen3-MoE | @zhuyuhua-v | draft | 2025-12-12 | 2026-03-16 |
| [#218](https://github.com/ROCm/ATOM/pull/218) | Enable AllReduce+RMSNorm fusion for GPT-OSS model | @ChuanLi1101 | open | 2026-02-15 | 2026-03-16 |
| [#170](https://github.com/ROCm/ATOM/pull/170) | Add Flux diffusion model support | @ChuanLi1101 | open | 2026-01-29 | 2026-03-16 |
| [#148](https://github.com/ROCm/ATOM/pull/148) | feat: Add fused attention output + RMSNorm support for GPT-O... | @ChuanLi1101 | open | 2026-01-17 | 2026-03-16 |
| [#50](https://github.com/ROCm/ATOM/pull/50) | feat: add skip_tokenizer option for pre-tokenized input | @ChuanLi1101 | open | 2025-12-14 | 2026-03-16 |
| [#32](https://github.com/ROCm/ATOM/pull/32) | Add unit tests for SamplingParams and CompilationConfig | @ChuanLi1101 | open | 2025-12-09 | 2026-03-16 |
| [#278](https://github.com/ROCm/ATOM/pull/278) | docker: add clean build and wheel-based install Dockerfiles | @sunway513 | open | 2026-03-08 | 2026-03-16 |
| [#154](https://github.com/ROCm/ATOM/pull/154) | [recipe] update qwen3 recipe | @gbyu-amd | open | 2026-01-20 | 2026-03-16 |
| [#296](https://github.com/ROCm/ATOM/pull/296) | [draft][plugin] sgl radix attn backend | @ZhiweiYan-96 | open | 2026-03-10 | 2026-03-16 |
| [#249](https://github.com/ROCm/ATOM/pull/249) | Fix typos, dead code, uninitialized variable, and improve er... | @brucechanglongxu | open | 2026-03-01 | 2026-03-16 |
| [#97](https://github.com/ROCm/ATOM/pull/97) | [Perf](bench): refactor benchmark scripts for unified format | @PerryZhang01 | open | 2025-12-24 | 2026-03-16 |
| [#37](https://github.com/ROCm/ATOM/pull/37) | [fusion] add new ar_norm fusion kernel | @gbyu-amd | open | 2025-12-09 | 2026-03-16 |
| [#113](https://github.com/ROCm/ATOM/pull/113) | [fix] disable gluon pa for llama | @gbyu-amd | open | 2026-01-06 | 2026-03-16 |
| [#146](https://github.com/ROCm/ATOM/pull/146) | kv and output scale loading bug -- FIX | @amirumoAMD | open | 2026-01-16 | 2026-03-16 |
| [#206](https://github.com/ROCm/ATOM/pull/206) | Revert "CI: Use DeepSeek-R1-0528-mtp-mxfp4 models for deepse... | @gyohuangxin | open | 2026-02-11 | 2026-03-16 |
| [#240](https://github.com/ROCm/ATOM/pull/240) | CI: Make ATOM benchmark can be called from other repos | @gyohuangxin | draft | 2026-02-26 | 2026-03-16 |
| [#151](https://github.com/ROCm/ATOM/pull/151) | qwen3-235b fp4 support | @gbyu-amd | draft | 2026-01-19 | 2026-03-16 |
| [#302](https://github.com/ROCm/ATOM/pull/302) | CI: Add warmup requests before benchmark to avoid JIT compil... | @gyohuangxin | open | 2026-03-11 | 2026-03-16 |
| [#712](https://github.com/ROCm/ATOM/pull/712) | CI: Use linux-atom-mi35x-1 in docker release pipeline | @gyohuangxin | merged | 2026-05-07 | 2026-05-07 |
| [#710](https://github.com/ROCm/ATOM/pull/710) | fix(v4): triton-3.6+ MoE SMEM OOM + empty-batch indexer pref... | @valarLip | merged | 2026-05-07 | 2026-05-07 |
| [#706](https://github.com/ROCm/ATOM/pull/706) | [atom-vllm CI] align the aiter download logic with atom CI | @zejunchen-zejun | merged | 2026-05-07 | 2026-05-07 |
| [#703](https://github.com/ROCm/ATOM/pull/703) | fix(v4-ci): unblock nightly Docker test + V4-Pro accuracy st... | @valarLip | merged | 2026-05-06 | 2026-05-06 |
| [#650](https://github.com/ROCm/ATOM/pull/650) | feat(deepseek_v4): PR1 skeleton — end-to-end inference with ... | @valarLip | merged | 2026-04-25 | 2026-05-06 |
| [#687](https://github.com/ROCm/ATOM/pull/687) | ci(docker): install triton_kernels for ATOM_USE_TRITON_MOE | @valarLip | merged | 2026-05-04 | 2026-05-06 |
| [#699](https://github.com/ROCm/ATOM/pull/699) | [atom-vllm benchmark] force auto bench run wait for the manu... | @zejunchen-zejun | merged | 2026-05-06 | 2026-05-06 |
| [#701](https://github.com/ROCm/ATOM/pull/701) | feat(deepseek_v4): 1. use rope_rotate_activation instead of ... | @junhaha666 | merged | 2026-05-06 | 2026-05-06 |
| [#692](https://github.com/ROCm/ATOM/pull/692) | ci(dashboard): use amd-smi for GPU name to fix MI355X identi... | @ChuanLi1101 | merged | 2026-05-05 | 2026-05-06 |
| [#696](https://github.com/ROCm/ATOM/pull/696) | CI: keep ATOM aligned with the latest aiter wheel | @gyohuangxin | merged | 2026-05-06 | 2026-05-06 |
| [#671](https://github.com/ROCm/ATOM/pull/671) | [atom-vllm benchmark][docker release] refine docker release ... | @zejunchen-zejun | merged | 2026-04-29 | 2026-05-06 |
| [#678](https://github.com/ROCm/ATOM/pull/678) | feat(deepseek_v4): use triton sparse attn kernel and move at... | @junhaha666 | merged | 2026-05-01 | 2026-05-01 |
| [#655](https://github.com/ROCm/ATOM/pull/655) | Fix Qwen3.5 model config type error | @zovonoir | merged | 2026-04-28 | 2026-04-30 |
| [#645](https://github.com/ROCm/ATOM/pull/645) | optimize qwen3 next inplace copy | @ganyi1996ppo | merged | 2026-04-24 | 2026-04-30 |
| [#665](https://github.com/ROCm/ATOM/pull/665) | [Feat] enable pure data parallel(not dp attention) in sgl + ... | @ZLkanyo009 | merged | 2026-04-29 | 2026-04-29 |
| [#663](https://github.com/ROCm/ATOM/pull/663) | Fix flydsl gdr decode error in attention backend | @ganyi1996ppo | merged | 2026-04-29 | 2026-04-29 |
| [#659](https://github.com/ROCm/ATOM/pull/659) | refactor: delegate ATOM KV cache subsystem to attention buil... | @valarLip | merged | 2026-04-28 | 2026-04-29 |
| [#666](https://github.com/ROCm/ATOM/pull/666) | Revert "[fix](attn): align plugin pa to atom pa (#657)" | @PerryZhang01 | merged | 2026-04-29 | 2026-04-29 |
| [#532](https://github.com/ROCm/ATOM/pull/532) | [feat] Add support for Qwen3.5 and Qwen3-Next to ATOM-plugin... | @wanzhenchn | merged | 2026-04-09 | 2026-04-29 |
| [#657](https://github.com/ROCm/ATOM/pull/657) | [fix](attn): align plugin pa to atom pa | @PerryZhang01 | merged | 2026-04-28 | 2026-04-29 |
| [#634](https://github.com/ROCm/ATOM/pull/634) | [atom-vllm benchmark] refine the atom-vllm benchmark and add... | @zejunchen-zejun | merged | 2026-04-23 | 2026-04-28 |
| [#647](https://github.com/ROCm/ATOM/pull/647) | feat: honor OpenAI `n` param in /v1/completions and /v1/chat... | @ChuanLi1101 | merged | 2026-04-24 | 2026-04-28 |
| [#652](https://github.com/ROCm/ATOM/pull/652) | fix(dashboard): show separate trend points for nightly runs ... | @valarLip | merged | 2026-04-27 | 2026-04-27 |
| [#646](https://github.com/ROCm/ATOM/pull/646) | fix: robust MTP quant exclude for MXFP4 and FP8 | @valarLip | merged | 2026-04-24 | 2026-04-24 |
| [#640](https://github.com/ROCm/ATOM/pull/640) | fix: remap MXFP4 exclude list for Qwen3.5 MTP layers | @valarLip | merged | 2026-04-23 | 2026-04-23 |
| [#530](https://github.com/ROCm/ATOM/pull/530) | [shuffle weight][model_ops] chunk shuffle_weights to reduce ... | @whx-sjtu | merged | 2026-04-09 | 2026-04-23 |
| [#637](https://github.com/ROCm/ATOM/pull/637) | [atom-vllm ci] add model hf revision check for updating the ... | @zejunchen-zejun | merged | 2026-04-23 | 2026-04-23 |
| [#594](https://github.com/ROCm/ATOM/pull/594) | [Perf] enable shuffle layout full attention for qwen3.5 and ... | @ganyi1996ppo | merged | 2026-04-17 | 2026-04-23 |
| [#636](https://github.com/ROCm/ATOM/pull/636) | fix(plugin): guard mixed attention metadata reductions | @XiaobingSuper | merged | 2026-04-23 | 2026-04-23 |
| [#560](https://github.com/ROCm/ATOM/pull/560) | MiMo-V2-Flash Support | @wufann | merged | 2026-04-14 | 2026-04-23 |
| [#635](https://github.com/ROCm/ATOM/pull/635) | CI: Extend ATOM server readiness wait to 45 minutes | @gyohuangxin | merged | 2026-04-23 | 2026-04-23 |
| [#253](https://github.com/ROCm/ATOM/pull/253) | feat: PD disaggregation | @inkcherry | merged | 2026-03-02 | 2026-04-23 |
| [#629](https://github.com/ROCm/ATOM/pull/629) | fix(dashboard): deduplicate historyMap entries per commit | @valarLip | merged | 2026-04-22 | 2026-04-22 |
| [#597](https://github.com/ROCm/ATOM/pull/597) | [atom-vllm] upgrade atom-vllm transformers version to 5.2.0(... | @zejunchen-zejun | merged | 2026-04-17 | 2026-04-22 |
| [#628](https://github.com/ROCm/ATOM/pull/628) | [plugin][script] update DS fp4 model to amd/DeepSeek-R1-0528... | @gbyu-amd | merged | 2026-04-22 | 2026-04-22 |
| [#624](https://github.com/ROCm/ATOM/pull/624) | fix(docker): remove setuptools_scm<9 pin to fix aiter build | @valarLip | merged | 2026-04-21 | 2026-04-21 |
| [#621](https://github.com/ROCm/ATOM/pull/621) | fix(dashboard): MTP acceptance trend chart and docker image ... | @valarLip | merged | 2026-04-21 | 2026-04-21 |
| [#620](https://github.com/ROCm/ATOM/pull/620) | CI: expose runner override for manual runs | @gyohuangxin | merged | 2026-04-21 | 2026-04-21 |
| [#617](https://github.com/ROCm/ATOM/pull/617) | [fix](benchmark): fix podman compatibility in SGLang and vLL... | @zhuyuhua-v | merged | 2026-04-21 | 2026-04-21 |
| [#582](https://github.com/ROCm/ATOM/pull/582) | [Acc] remove flatten in dpsk fp4 by quantizing mla weights &... | @ZLkanyo009 | merged | 2026-04-16 | 2026-04-21 |
| [#528](https://github.com/ROCm/ATOM/pull/528) | [Plugin] [Feature] Supoort MLA q/k norm-quant fusion with SG... | @qichu-yun | merged | 2026-04-09 | 2026-04-21 |
| [#615](https://github.com/ROCm/ATOM/pull/615) | feat(qwen3_next): add DualRMSNorm and QKVGParallelLinear | @valarLip | merged | 2026-04-20 | 2026-04-20 |
| [#589](https://github.com/ROCm/ATOM/pull/589) | [qwen3next] fix gdr | @ganyi1996ppo | merged | 2026-04-17 | 2026-04-20 |
| [#612](https://github.com/ROCm/ATOM/pull/612) | Update README | @wuhuikx | merged | 2026-04-20 | 2026-04-20 |
| [#601](https://github.com/ROCm/ATOM/pull/601) | [fix](benchmark): support podman as container engine fallbac... | @zhuyuhua-v | merged | 2026-04-18 | 2026-04-20 |
| [#608](https://github.com/ROCm/ATOM/pull/608) | fix(dashboard): regression detection, MTP parsing, TP/GPU di... | @valarLip | merged | 2026-04-19 | 2026-04-19 |
| [#605](https://github.com/ROCm/ATOM/pull/605) | Fix ZeroDivisionError when `--method mtp --num-speculative-t... | @Copilot | merged | 2026-04-19 | 2026-04-19 |
| [#602](https://github.com/ROCm/ATOM/pull/602) | feat: decouple GDN recurrent state from KV cache block pool | @valarLip | merged | 2026-04-18 | 2026-04-18 |
| [#600](https://github.com/ROCm/ATOM/pull/600) | feat: Qwen3.5 MTP support, dashboard MTP acceptance, model n... | @valarLip | merged | 2026-04-18 | 2026-04-18 |
| [#586](https://github.com/ROCm/ATOM/pull/586) | ci: add Qwen3.5-397B-A17B-MXFP4 to per-PR accuracy test | @valarLip | merged | 2026-04-16 | 2026-04-17 |
| [#587](https://github.com/ROCm/ATOM/pull/587) | [dashboard] show docker info in dashboard accuracy chart | @zejunchen-zejun | merged | 2026-04-17 | 2026-04-17 |
| [#590](https://github.com/ROCm/ATOM/pull/590) | Update mori version and make tbo in nightly | @ZhangLirong-amd | merged | 2026-04-17 | 2026-04-17 |
| [#596](https://github.com/ROCm/ATOM/pull/596) | fix: prefix benchmark artifacts to avoid downloading multi-G... | @valarLip | merged | 2026-04-17 | 2026-04-17 |
| [#593](https://github.com/ROCm/ATOM/pull/593) | Add Qwen3.5 FP4 to vLLM-ATOM nightly accuracy check and benc... | @wuhuikx | merged | 2026-04-17 | 2026-04-17 |
| [#595](https://github.com/ROCm/ATOM/pull/595) | [fix](dashboard): Add dashboard_model for SGLang deepseek TP... | @zhuyuhua-v | merged | 2026-04-17 | 2026-04-17 |
| [#571](https://github.com/ROCm/ATOM/pull/571) | [fix](metadata): optimize attention metadata | @PerryZhang01 | merged | 2026-04-15 | 2026-04-17 |
| [#588](https://github.com/ROCm/ATOM/pull/588) | fix kv cache fp8 issue | @ganyi1996ppo | merged | 2026-04-17 | 2026-04-17 |
| [#525](https://github.com/ROCm/ATOM/pull/525) | [Feat] remove flatten in atom sglang mla like atom vllm mla | @ZLkanyo009 | merged | 2026-04-09 | 2026-04-17 |
| [#576](https://github.com/ROCm/ATOM/pull/576) | mxfp4 support for qwen3.5 | @ganyi1996ppo | merged | 2026-04-15 | 2026-04-16 |
| [#585](https://github.com/ROCm/ATOM/pull/585) | [ATOM Test] fix file issue when finish lmeval acc test | @zejunchen-zejun | merged | 2026-04-16 | 2026-04-16 |
| [#515](https://github.com/ROCm/ATOM/pull/515) | Suppport TBO in ATOM | @ZhangLirong-amd | merged | 2026-04-08 | 2026-04-16 |
| [#569](https://github.com/ROCm/ATOM/pull/569) | [nightly][vllm] add GLM-5.1-FP8 to vLLM nightly coverage | @whx-sjtu | merged | 2026-04-15 | 2026-04-16 |
| [#584](https://github.com/ROCm/ATOM/pull/584) | [fix](dashboard): fix thresholds for nightly model | @PerryZhang01 | merged | 2026-04-16 | 2026-04-16 |
| [#561](https://github.com/ROCm/ATOM/pull/561) | [atom-vllm][atom-sglang][CI] build CI image on GPU machine i... | @zejunchen-zejun | merged | 2026-04-14 | 2026-04-16 |
| [#568](https://github.com/ROCm/ATOM/pull/568) | integrate flydsl gdr decode | @ganyi1996ppo | merged | 2026-04-15 | 2026-04-16 |
| [#527](https://github.com/ROCm/ATOM/pull/527) | [BugFix] enable deepseek r1 fp4 | @ZLkanyo009 | merged | 2026-04-09 | 2026-04-16 |
| [#548](https://github.com/ROCm/ATOM/pull/548) | fix(dashboard): Fix SGLang benchmark workflow and integrate ... | @zhuyuhua-v | merged | 2026-04-13 | 2026-04-16 |
| [#581](https://github.com/ROCm/ATOM/pull/581) | fix mamba blocks ref count | @jiayyu | merged | 2026-04-16 | 2026-04-16 |
| [#570](https://github.com/ROCm/ATOM/pull/570) | [Bugfix] Remove custom config class since transformers 5.2.0... | @ganyi1996ppo | merged | 2026-04-15 | 2026-04-16 |
| [#575](https://github.com/ROCm/ATOM/pull/575) | fix(docker): remove pinned torchvision/torchaudio wheels for... | @zhuyuhua-v | merged | 2026-04-15 | 2026-04-15 |
| [#574](https://github.com/ROCm/ATOM/pull/574) | fix: disable gradient tracking on all nn.Parameter for infer... | @valarLip | merged | 2026-04-15 | 2026-04-15 |
| [#550](https://github.com/ROCm/ATOM/pull/550) | try to print server log | @jiayyu | merged | 2026-04-13 | 2026-04-15 |
| [#399](https://github.com/ROCm/ATOM/pull/399) | [Feat][Plugin] Enable Sparse MLA and GLM-5 for vLLM-ATOM | @kliuae-amd | merged | 2026-03-24 | 2026-04-15 |
| [#421](https://github.com/ROCm/ATOM/pull/421) | [Qwen3Next/Qwen3.5] fuse gated_rmsnorm_quant | @ganyi1996ppo | merged | 2026-03-27 | 2026-04-15 |
| [#564](https://github.com/ROCm/ATOM/pull/564) | ci: add MiniMax-M2.5-MXFP4 to nightly benchmark and accuracy... | @valarLip | merged | 2026-04-14 | 2026-04-14 |
| [#563](https://github.com/ROCm/ATOM/pull/563) | [recipe] ds r1 fp4 mtp3 model change | @seungrokj | merged | 2026-04-14 | 2026-04-14 |
| [#562](https://github.com/ROCm/ATOM/pull/562) | ci: fix benchmark workflow bugs and add GLM-5.1-MXFP4 | @valarLip | merged | 2026-04-14 | 2026-04-14 |
| [#517](https://github.com/ROCm/ATOM/pull/517) | [Qwem3.5] atom native support for qwen3.5 | @ganyi1996ppo | merged | 2026-04-08 | 2026-04-14 |
| [#558](https://github.com/ROCm/ATOM/pull/558) | fix: allow MiniMax-M2.5 loading in TP1 on MI355X | @benenzhu | merged | 2026-04-14 | 2026-04-14 |
| [#411](https://github.com/ROCm/ATOM/pull/411) | [Performance] Relaxed mtp  | @haoyangli0109 | merged | 2026-03-25 | 2026-04-14 |
| [#556](https://github.com/ROCm/ATOM/pull/556) | CI:  Keep scheduled main runs from blocking push-triggered v... | @gyohuangxin | merged | 2026-04-14 | 2026-04-14 |
| [#551](https://github.com/ROCm/ATOM/pull/551) | docs: add Hermes Agent setup guide | @carlushuang | merged | 2026-04-13 | 2026-04-14 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-05-07T10:13:20Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#304](https://github.com/ROCm/mori/pull/304) | Dev/cq a71 validate | @QizhouZhang97 | open | 2026-05-07 | 2026-05-07 |
| [#303](https://github.com/ROCm/mori/pull/303) | feat(ccl): add C++ AllGatherIntoTensor  over SDMA | @inkcherry | open | 2026-05-06 | 2026-05-07 |
| [#257](https://github.com/ROCm/mori/pull/257) | Refactor(umbp): introduce IUMBPClient interface for dual-sch... | @isytwu | open | 2026-04-10 | 2026-05-07 |
| [#295](https://github.com/ROCm/mori/pull/295) | Some fixes for XLA build, shmem_api includes separation | @pemeliya | open | 2026-04-28 | 2026-05-06 |
| [#299](https://github.com/ROCm/mori/pull/299) | Update FlyDSL extern integration | @coderfeli | draft | 2026-04-30 | 2026-04-30 |
| [#297](https://github.com/ROCm/mori/pull/297) | feat(cli): add 'mori' console entry point for env helper scr... | @Duyi-Wang | open | 2026-04-28 | 2026-04-28 |
| [#289](https://github.com/ROCm/mori/pull/289) | ci: add nightly wheel build workflow | @jhchouuu | open | 2026-04-22 | 2026-04-22 |
| [#284](https://github.com/ROCm/mori/pull/284) | feat(io): support large-memory RDMA via chunked registration | @maning00 | open | 2026-04-21 | 2026-04-22 |
| [#251](https://github.com/ROCm/mori/pull/251) | feat(umbp): chunked DRAM MR registration for NICs with limit... | @maning00 | open | 2026-04-03 | 2026-04-14 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-04-01 |
| [#200](https://github.com/ROCm/mori/pull/200) | Add ReduceScatter SDMA implementation and AG/RS benchmarks | @amd-andycha | open | 2026-03-18 | 2026-03-24 |
| [#202](https://github.com/ROCm/mori/pull/202) | Update Docker environment for MI355X benchmark reproducibili... | @amd-andycha | open | 2026-03-19 | 2026-03-19 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-03-02 |
| [#175](https://github.com/ROCm/mori/pull/175) | Add elastic EP for dispatch/combine flows | @maning00 | open | 2026-02-27 | 2026-02-27 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-01-08 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-01-08 |
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
| [#215](https://github.com/ROCm/mori/pull/215) | Fix(tensor_utils): support float8_e8m0fnu in from_gpu_ptr | @jhchouuu | merged | 2026-03-23 | 2026-03-31 |
| [#211](https://github.com/ROCm/mori/pull/211) | Fix(ep): align optional tensor ptrs with legacy c++ launch | @jhchouuu | merged | 2026-03-23 | 2026-03-31 |
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
| [#213](https://github.com/ROCm/mori/pull/213) | support SPDK storge backend | @zhangfei829 | merged | 2026-03-23 | 2026-03-24 |
| [#183](https://github.com/ROCm/mori/pull/183) | [IO] Add QP param options/env | @maning00 | merged | 2026-03-04 | 2026-03-23 |
| [#212](https://github.com/ROCm/mori/pull/212) | Fix: enhance mlx5 find logic for correct NIC detection | @jhchouuu | merged | 2026-03-23 | 2026-03-23 |
| [#208](https://github.com/ROCm/mori/pull/208) | Fix [UMBP]: change integration default test mode to tp | @TianDi101 | merged | 2026-03-22 | 2026-03-22 |
| [#180](https://github.com/ROCm/mori/pull/180) | [UMP] Feat: add control plane implementation for unified mem... | @TianDi101 | merged | 2026-03-03 | 2026-03-22 |
| [#206](https://github.com/ROCm/mori/pull/206) | feat(umbp): segmented SSD log, pluggable storage IO (io_urin... | @maning00 | merged | 2026-03-20 | 2026-03-20 |
| [#182](https://github.com/ROCm/mori/pull/182) | Refactor: universal wheel with host/device separation, JIT w... | @jhchouuu | merged | 2026-03-04 | 2026-03-20 |
| [#196](https://github.com/ROCm/mori/pull/196) | Fix: guard ShmemInit against double initialization | @jhchouuu | merged | 2026-03-12 | 2026-03-20 |
| [#203](https://github.com/ROCm/mori/pull/203) | Refactor: CMake C++ integration, lazy imports & optional MPI... | @jhchouuu | merged | 2026-03-19 | 2026-03-20 |
| [#199](https://github.com/ROCm/mori/pull/199) | Fix: Fix example dispatch_combine test for fp8_direct_cast | @jhchouuu | merged | 2026-03-17 | 2026-03-19 |
| [#204](https://github.com/ROCm/mori/pull/204) | Feat(shmem): increase default static heap to 4GB and VMM hea... | @jhchouuu | merged | 2026-03-19 | 2026-03-19 |
| [#201](https://github.com/ROCm/mori/pull/201) | Fix: clear stale pointers in recv-only PrepareAndBuildArgs | @maning00 | merged | 2026-03-19 | 2026-03-19 |
| [#185](https://github.com/ROCm/mori/pull/185) | Optimization: ep async kernel | @TianDi101 | merged | 2026-03-05 | 2026-03-18 |
| [#191](https://github.com/ROCm/mori/pull/191) | [UMP] Feat: add umbp client implementation for unified memor... | @maning00 | merged | 2026-03-10 | 2026-03-13 |
| [#198](https://github.com/ROCm/mori/pull/198) | Sdma batch | @zhangfei829 | merged | 2026-03-13 | 2026-03-13 |
| [#197](https://github.com/ROCm/mori/pull/197) | Feat sdma async ep1 | @TianDi101 | merged | 2026-03-12 | 2026-03-12 |
| [#194](https://github.com/ROCm/mori/pull/194) | Refactor MORI IO env override parsing | @maning00 | merged | 2026-03-11 | 2026-03-11 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-05-07T10:13:24Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#475](https://github.com/ROCm/FlyDSL/pull/475) | Add backend support | @coderfeli | open | 2026-05-06 | 2026-05-07 |
| [#477](https://github.com/ROCm/FlyDSL/pull/477) | use layout to calculate num_ds_load and num_gmem_load | @yadaish | open | 2026-05-07 | 2026-05-07 |
| [#442](https://github.com/ROCm/FlyDSL/pull/442) | [FLYDSL]: Error message for None in control flow variable an... | @xudoyuan | open | 2026-04-28 | 2026-05-07 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-05-06 |
| [#345](https://github.com/ROCm/FlyDSL/pull/345) | Fujun.han/multi vendor support | @Peter9606 | open | 2026-04-03 | 2026-05-06 |
| [#476](https://github.com/ROCm/FlyDSL/pull/476) | support run only mode for AOT CI test | @zhiding512 | open | 2026-05-06 | 2026-05-06 |
| [#474](https://github.com/ROCm/FlyDSL/pull/474) | fix: handle co_freevars mismatch in ASTRewriter for closure ... | @ZJLi2013 | open | 2026-05-06 | 2026-05-06 |
| [#470](https://github.com/ROCm/FlyDSL/pull/470) | [FlYDSL] llvm pass plugin | @Zzz9990 | open | 2026-05-02 | 2026-05-06 |
| [#472](https://github.com/ROCm/FlyDSL/pull/472) | ci: add RDNA4 flash attention benchmark | @vivienfanghuagood | open | 2026-05-06 | 2026-05-06 |
| [#449](https://github.com/ROCm/FlyDSL/pull/449) | blockscale a8w8 initial implementation for flydsl | @omuhamma | draft | 2026-04-28 | 2026-05-05 |
| [#431](https://github.com/ROCm/FlyDSL/pull/431) | Add A16W4 MoE GEMM stage2 kernel (BF16 activations x MXFP4 w... | @apicciau | open | 2026-04-23 | 2026-04-30 |
| [#461](https://github.com/ROCm/FlyDSL/pull/461) | add gfx950 16x16x64 I8 MFMA support to MoE 2-stage GEMM | @yadaish | draft | 2026-04-30 | 2026-04-30 |
| [#405](https://github.com/ROCm/FlyDSL/pull/405) | [Kernel][MI350] GDR prefill K5 vk implementation | @huizzhan | draft | 2026-04-16 | 2026-04-28 |
| [#430](https://github.com/ROCm/FlyDSL/pull/430) | Add RDNA4 MoE WMMA kernel path | @vivienfanghuagood | draft | 2026-04-23 | 2026-04-27 |
| [#429](https://github.com/ROCm/FlyDSL/pull/429) | Kefan.cao/fix universal copy | @kefan203 | open | 2026-04-23 | 2026-04-24 |
| [#424](https://github.com/ROCm/FlyDSL/pull/424) | Add BF16xFP4 MoE GEMM stage1 kernel | @apicciau | draft | 2026-04-21 | 2026-04-21 |
| [#420](https://github.com/ROCm/FlyDSL/pull/420) | Pr/a16wi4 group splitk | @yadaish | draft | 2026-04-21 | 2026-04-21 |
| [#395](https://github.com/ROCm/FlyDSL/pull/395) | Add initial Windows support | @0xDELUXA | draft | 2026-04-13 | 2026-04-16 |
| [#401](https://github.com/ROCm/FlyDSL/pull/401) | gemm a16w16 flydsl implementation (WIP) | @omuhamma | draft | 2026-04-14 | 2026-04-14 |
| [#354](https://github.com/ROCm/FlyDSL/pull/354) | Add `hgemm_splitk+allreduce` prologue/epilogue fusion kernel... | @xytpai | draft | 2026-04-07 | 2026-04-08 |
| [#257](https://github.com/ROCm/FlyDSL/pull/257) | [Feature] Add JAX integration for FlyDSL kernels | @wenchenvincent | open | 2026-03-21 | 2026-03-27 |
| [#466](https://github.com/ROCm/FlyDSL/pull/466) | add xcd remap | @solinzby1 | merged | 2026-04-30 | 2026-05-07 |
| [#473](https://github.com/ROCm/FlyDSL/pull/473) | [Feat] Add CoordSwizzle and support composedLayout as outer ... | @sjfeng1999 | merged | 2026-05-06 | 2026-05-07 |
| [#471](https://github.com/ROCm/FlyDSL/pull/471) | Update ATOM nightly models to MXFP4 variants | @coderfeli | merged | 2026-05-06 | 2026-05-06 |
| [#454](https://github.com/ROCm/FlyDSL/pull/454) | feat(pa): add persistent FP8 decode path | @fsx950223 | merged | 2026-04-29 | 2026-05-04 |
| [#418](https://github.com/ROCm/FlyDSL/pull/418) | feat: support mori IR JIT compilation with shmem | @yanboshao | merged | 2026-04-21 | 2026-05-04 |
| [#421](https://github.com/ROCm/FlyDSL/pull/421) | feat: align quant and fused kernels with Triton in FlyDSL | @cschenjunlin | merged | 2026-04-21 | 2026-05-03 |
| [#386](https://github.com/ROCm/FlyDSL/pull/386) | support glibc2.28 | @coderfeli | merged | 2026-04-13 | 2026-05-02 |
| [#469](https://github.com/ROCm/FlyDSL/pull/469) | [Refactor] Refine generic address-space | @sjfeng1999 | merged | 2026-04-30 | 2026-05-02 |
| [#462](https://github.com/ROCm/FlyDSL/pull/462) | clean fa and tune mla slightly | @coderfeli | merged | 2026-04-30 | 2026-05-02 |
| [#463](https://github.com/ROCm/FlyDSL/pull/463) | docs: Update FlyDSL agent guidance | @fsx950223 | merged | 2026-04-30 | 2026-04-30 |
| [#468](https://github.com/ROCm/FlyDSL/pull/468) | add ps swa | @fsx950223 | merged | 2026-04-30 | 2026-04-30 |
| [#465](https://github.com/ROCm/FlyDSL/pull/465) | some optimization about smoothquant moe | @yadaish | merged | 2026-04-30 | 2026-04-30 |
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
| [#346](https://github.com/ROCm/FlyDSL/pull/346) | [FLYDSL]: if dispatch dynamic tests refactor | @xudoyuan | merged | 2026-04-03 | 2026-04-28 |
| [#438](https://github.com/ROCm/FlyDSL/pull/438) | Release 0.1.4.2 | @coderfeli | merged | 2026-04-27 | 2026-04-27 |
| [#437](https://github.com/ROCm/FlyDSL/pull/437) | [FlyOp] Add stages args for MmaMakeFragment to simplify mult... | @sjfeng1999 | merged | 2026-04-25 | 2026-04-27 |
| [#434](https://github.com/ROCm/FlyDSL/pull/434) | Release 0.1.4 | @coderfeli | merged | 2026-04-24 | 2026-04-24 |
| [#412](https://github.com/ROCm/FlyDSL/pull/412) | Adds Grouped GEMM kernels matching DeepGEMM API | @aryaman-gupta | merged | 2026-04-17 | 2026-04-23 |
| [#416](https://github.com/ROCm/FlyDSL/pull/416) | improve fused_rope kernel | @amd-weisun | merged | 2026-04-20 | 2026-04-23 |
| [#388](https://github.com/ROCm/FlyDSL/pull/388) | [Perf] Port mixed_moe kernel optimizations for stage1/stage2 | @lalala-sh | merged | 2026-04-13 | 2026-04-23 |
| [#403](https://github.com/ROCm/FlyDSL/pull/403) | Implement MLA decode fwd nh128 a8w8 kernel with FlyDSL. | @ruanjm | merged | 2026-04-15 | 2026-04-23 |
| [#427](https://github.com/ROCm/FlyDSL/pull/427) | [OPT] Add fly-int-swizzle-simplify pass | @sjfeng1999 | merged | 2026-04-22 | 2026-04-23 |
| [#422](https://github.com/ROCm/FlyDSL/pull/422) | Port v2 gemm to main | @coderfeli | merged | 2026-04-21 | 2026-04-22 |
| [#423](https://github.com/ROCm/FlyDSL/pull/423) | [Agent] New skill: add-target-atom-op | @sjfeng1999 | merged | 2026-04-21 | 2026-04-21 |
| [#419](https://github.com/ROCm/FlyDSL/pull/419) | Adjust allreduce CI benchmark thresholds | @yanboshao | merged | 2026-04-21 | 2026-04-21 |
| [#417](https://github.com/ROCm/FlyDSL/pull/417) | [ROCDL] Add CDNA4_MFMAScaleType | @sjfeng1999 | merged | 2026-04-20 | 2026-04-21 |
| [#415](https://github.com/ROCm/FlyDSL/pull/415) | [Fix] eliminate llvm unsupported type (Float8/4) before llvm... | @sjfeng1999 | merged | 2026-04-20 | 2026-04-20 |
| [#404](https://github.com/ROCm/FlyDSL/pull/404) | Add fused epilogue support to preshuffle GEMM: bias + ReLU/S... | @andyluo7 | merged | 2026-04-15 | 2026-04-20 |
| [#413](https://github.com/ROCm/FlyDSL/pull/413) | fix version err after uninstall | @coderfeli | merged | 2026-04-18 | 2026-04-19 |
| [#410](https://github.com/ROCm/FlyDSL/pull/410) | [OPT] Add pass promote-regmem-to-vectorssa | @sjfeng1999 | merged | 2026-04-16 | 2026-04-17 |
| [#409](https://github.com/ROCm/FlyDSL/pull/409) | Detach requires_grad tensors before FlyDSL DLPack export | @zhiding512 | merged | 2026-04-16 | 2026-04-16 |
| [#406](https://github.com/ROCm/FlyDSL/pull/406) | docs(claude): add frontend semantic restrictions for MLIR ke... | @zhiding512 | merged | 2026-04-16 | 2026-04-16 |
| [#407](https://github.com/ROCm/FlyDSL/pull/407) | [OPT] Add pass: convert-atom-call-to-ssa-form | @sjfeng1999 | merged | 2026-04-16 | 2026-04-16 |
| [#387](https://github.com/ROCm/FlyDSL/pull/387) | Add CI testcases and benchmark for allreduce | @yanboshao | merged | 2026-04-13 | 2026-04-16 |
| [#402](https://github.com/ROCm/FlyDSL/pull/402) | Gfx1250 moe | @XingerZhu | merged | 2026-04-14 | 2026-04-16 |
| [#390](https://github.com/ROCm/FlyDSL/pull/390) | support split-k algo for moe_gemm_2stage | @yadaish | merged | 2026-04-13 | 2026-04-14 |
| [#399](https://github.com/ROCm/FlyDSL/pull/399) | Add MakeFragmentLayoutLikeOp, improve robustness of prim fun... | @sjfeng1999 | merged | 2026-04-14 | 2026-04-14 |
| [#397](https://github.com/ROCm/FlyDSL/pull/397) | [gfx1250] Support padded GPTOSS GEMM shapes on gfx1250 | @aoli26 | merged | 2026-04-14 | 2026-04-14 |
| [#398](https://github.com/ROCm/FlyDSL/pull/398) | [MLIR] enhance get_scalar op, only requires dyn_leaf_cnt = 1 | @sjfeng1999 | merged | 2026-04-14 | 2026-04-14 |
| [#392](https://github.com/ROCm/FlyDSL/pull/392) | Change result type of elem_less/equal to i1 | @sjfeng1999 | merged | 2026-04-13 | 2026-04-13 |
| [#394](https://github.com/ROCm/FlyDSL/pull/394) | remove ci massive llvm log  | @coderfeli | merged | 2026-04-13 | 2026-04-13 |
| [#391](https://github.com/ROCm/FlyDSL/pull/391) | [FEAT] Add get_leaves op and support convert dyn_tuple to py... | @sjfeng1999 | merged | 2026-04-13 | 2026-04-13 |
| [#370](https://github.com/ROCm/FlyDSL/pull/370) | Pr/a16wi4 group | @yadaish | merged | 2026-04-09 | 2026-04-13 |
| [#385](https://github.com/ROCm/FlyDSL/pull/385) | update to v0.1.3 | @coderfeli | merged | 2026-04-12 | 2026-04-12 |
| [#384](https://github.com/ROCm/FlyDSL/pull/384) | [Docs] Add MI355X/gfx1201 and MI450/gfx1250 to platform docs | @coderfeli | merged | 2026-04-12 | 2026-04-12 |
| [#383](https://github.com/ROCm/FlyDSL/pull/383) | [FIX] Support AOT cross-compilation with COMPILE_ONLY cache ... | @coderfeli | merged | 2026-04-11 | 2026-04-12 |
| [#378](https://github.com/ROCm/FlyDSL/pull/378) | [FEAT][ROCDL] Add BufferCopyLDS, BufferAtomic & LdsReadTrans... | @sjfeng1999 | merged | 2026-04-10 | 2026-04-10 |
| [#377](https://github.com/ROCm/FlyDSL/pull/377) | implement 1d tensorssa, remove vector dialect in kernels and... | @coderfeli | merged | 2026-04-10 | 2026-04-10 |
| [#372](https://github.com/ROCm/FlyDSL/pull/372) | [Fix] Support IntAttr tiled MMA permutation modes | @sjfeng1999 | merged | 2026-04-09 | 2026-04-09 |
| [#375](https://github.com/ROCm/FlyDSL/pull/375) | [Utils] Refine print_typst grid sizing | @sjfeng1999 | merged | 2026-04-09 | 2026-04-09 |
| [#371](https://github.com/ROCm/FlyDSL/pull/371) | docs(skills): standardize skill frontmatter and add new skil... | @zhiding512 | merged | 2026-04-09 | 2026-04-09 |
| [#374](https://github.com/ROCm/FlyDSL/pull/374) | fix: correct SwizzleAttr argument order in layout upcast/dow... | @kefan203 | merged | 2026-04-09 | 2026-04-09 |
| [#373](https://github.com/ROCm/FlyDSL/pull/373) | fix run without aiter | @coderfeli | merged | 2026-04-09 | 2026-04-09 |
| [#369](https://github.com/ROCm/FlyDSL/pull/369) | [FEAT] Update BufferCopy has a soffset as state | @sjfeng1999 | merged | 2026-04-09 | 2026-04-09 |
| [#368](https://github.com/ROCm/FlyDSL/pull/368) | [Docs] Update CLAUDE.md, skills, and add 3 new skills | @coderfeli | merged | 2026-04-09 | 2026-04-09 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-05-07T10:13:27Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#580](https://github.com/ROCm/TransformerEngine/pull/580) | NVFP4: Workaround intermittent incorrect results for backwar... | @matthiasdiener | draft | 2026-05-07 | 2026-05-07 |
| [#578](https://github.com/ROCm/TransformerEngine/pull/578) | CK Tile MXFP8 Group GEMM gfx1250 | @aris134 | open | 2026-05-06 | 2026-05-06 |
| [#576](https://github.com/ROCm/TransformerEngine/pull/576) | CK Tile Group GEMM gfx1250 | @aris134 | open | 2026-05-06 | 2026-05-06 |
| [#577](https://github.com/ROCm/TransformerEngine/pull/577) | Update AITER CK dependency for gfx1250 grouped GEMM | @aris134 | open | 2026-05-06 | 2026-05-06 |
| [#566](https://github.com/ROCm/TransformerEngine/pull/566) | HipKittens MXFP8 GEMM Support | @alextmagro | open | 2026-04-28 | 2026-05-06 |
| [#573](https://github.com/ROCm/TransformerEngine/pull/573) | [ROCm] Allow bf16/bf16/fp32 in nvte_multi_tensor_gemm dispat... | @lizamd | open | 2026-05-04 | 2026-05-06 |
| [#571](https://github.com/ROCm/TransformerEngine/pull/571) | gfx1250 swizzle_xor changes for FP4 | @matthiasdiener | open | 2026-05-01 | 2026-05-06 |
| [#574](https://github.com/ROCm/TransformerEngine/pull/574) | ck_tile grouped gemm: more padding | @matthiasdiener | draft | 2026-05-05 | 2026-05-06 |
| [#568](https://github.com/ROCm/TransformerEngine/pull/568) | [proof-of-concept] add MXFP8 pre-swizzling for gfx1250 | @matthiasdiener | draft | 2026-04-29 | 2026-05-05 |
| [#560](https://github.com/ROCm/TransformerEngine/pull/560) | Claude PR review use OIDC-free method | @Micky774 | open | 2026-04-24 | 2026-05-05 |
| [#543](https://github.com/ROCm/TransformerEngine/pull/543) | CI: auto-trigger AITER prebuilt upload when 3rdparty/aiter u... | @VeeraRajasekhar | open | 2026-04-15 | 2026-05-02 |
| [#570](https://github.com/ROCm/TransformerEngine/pull/570) | [No Merge][No Review] testing aiter auto trigger on gh actio... | @VeeraRajasekhar | draft | 2026-05-01 | 2026-05-02 |
| [#538](https://github.com/ROCm/TransformerEngine/pull/538) | NV upstream release 2.12 merge | @Micky774 | open | 2026-04-13 | 2026-05-01 |
| [#563](https://github.com/ROCm/TransformerEngine/pull/563) | Update QoLA reducing [compile time, kernel count, lib size] ... | @Micky774 | open | 2026-04-27 | 2026-05-01 |
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-04-30 |
| [#542](https://github.com/ROCm/TransformerEngine/pull/542) | [TE] Phase 2 of small-seq cross-attn integration: a separate... | @VeeraRajasekhar | open | 2026-04-15 | 2026-04-28 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-04-27 |
| [#478](https://github.com/ROCm/TransformerEngine/pull/478) | Microbenchmarking, CSV-based | @matthiasdiener | draft | 2026-03-10 | 2026-04-26 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-04-24 |
| [#448](https://github.com/ROCm/TransformerEngine/pull/448) | Added initial AI Agent instructions and skills | @Micky774 | open | 2026-02-12 | 2026-04-23 |
| [#487](https://github.com/ROCm/TransformerEngine/pull/487) | ASV-format microbenchmark suite | @Micky774 | open | 2026-03-16 | 2026-04-22 |
| [#557](https://github.com/ROCm/TransformerEngine/pull/557) | IFU v2.14.dev0 | @ipanfilo | draft | 2026-04-21 | 2026-04-21 |
| [#515](https://github.com/ROCm/TransformerEngine/pull/515) | NVFP4: hadamard_transform_cast_fusion_columnwise | @matthiasdiener | draft | 2026-04-01 | 2026-04-20 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-04-14 |
| [#461](https://github.com/ROCm/TransformerEngine/pull/461) | [NO MERGE] Integrate CK varlen cross attention for small-seq... | @VeeraRajasekhar | open | 2026-02-24 | 2026-04-07 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-04-07 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-04-07 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-04-07 |
| [#435](https://github.com/ROCm/TransformerEngine/pull/435) | Update README.rst | @aris134 | draft | 2026-01-28 | 2026-04-07 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-04-07 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-04-07 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-04-07 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-04-07 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-04-07 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-04-07 |
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
| [#474](https://github.com/ROCm/TransformerEngine/pull/474) | Cherry pick build and test fixes from dev | @ipanfilo | merged | 2026-03-04 | 2026-03-04 |
| [#467](https://github.com/ROCm/TransformerEngine/pull/467) | Check only major ROCm version on load | @ipanfilo | merged | 2026-03-02 | 2026-03-03 |
| [#434](https://github.com/ROCm/TransformerEngine/pull/434) | Grouped GEMM with ck_tile | @matthiasdiener | merged | 2026-01-28 | 2026-03-03 |
