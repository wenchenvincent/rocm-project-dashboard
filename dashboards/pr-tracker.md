# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-07-15T09:46:33Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#184963](https://github.com/pytorch/pytorch/pull/184963) | Fix FakeTensor shallow copy state | @jansel | open | 2026-05-23 | 2026-07-15 |
| [#186833](https://github.com/pytorch/pytorch/pull/186833) | Remove stale export OpInfo xfails | @jansel | open | 2026-06-09 | 2026-07-15 |
| [#189957](https://github.com/pytorch/pytorch/pull/189957) | [torchcomms hash update] update the pinned torchcomms hash | @pytorchupdatebot | open | 2026-07-15 | 2026-07-15 |
| [#173459](https://github.com/pytorch/pytorch/pull/173459) | Add dtype mismatch validation for mm/bmm in meta registratio... | @adabeyta | open | 2026-01-27 | 2026-07-15 |
| [#186899](https://github.com/pytorch/pytorch/pull/186899) | [2/N] Replace module-level RNG-related APIs with torch.accel... | @guangyey | open | 2026-06-10 | 2026-07-15 |
| [#186902](https://github.com/pytorch/pytorch/pull/186902) | Generalize dynamo RNG-related part to be device-agnostic | @guangyey | open | 2026-06-10 | 2026-07-15 |
| [#181726](https://github.com/pytorch/pytorch/pull/181726) | [xpu][1/4]Implement scaled_mm_v2 for MXFP8/MXFP4/NVFP4 on XP... | @carsonwang | open | 2026-04-28 | 2026-07-15 |
| [#189952](https://github.com/pytorch/pytorch/pull/189952) | Avoid specializing FlexAttention dynamic sequence lengths in... | @drisspg | open | 2026-07-14 | 2026-07-15 |
| [#189149](https://github.com/pytorch/pytorch/pull/189149) | [inductor] Emit pointwise kernel for small mm (K<5, N<5) ins... | @XAheli | open | 2026-07-07 | 2026-07-15 |
| [#185457](https://github.com/pytorch/pytorch/pull/185457) | [Inductor][xpu] Enable grouped_mm Triton template on XPU | @etaf | draft | 2026-05-28 | 2026-07-15 |
| [#178305](https://github.com/pytorch/pytorch/pull/178305) | [XPU][oneDNN] Enforce const/mutable pointer semantics for mk... | @gplutop7 | draft | 2026-03-24 | 2026-07-15 |
| [#186599](https://github.com/pytorch/pytorch/pull/186599) | Introduce isInitialized&set_rng_state in torch.accelerator | @guangyey | open | 2026-06-08 | 2026-07-15 |
| [#184356](https://github.com/pytorch/pytorch/pull/184356) | [4/N][Test] Migrate TestFwdGradients device-agnostic skips t... | @KarhouTam | open | 2026-05-19 | 2026-07-15 |
| [#184355](https://github.com/pytorch/pytorch/pull/184355) | [3/N][Test] Migrate TestBwdGradients device-agnostic skips t... | @KarhouTam | open | 2026-05-19 | 2026-07-15 |
| [#185797](https://github.com/pytorch/pytorch/pull/185797) | [Test] Refactor test/test_bmm_outer_product.py | @KarhouTam | open | 2026-06-01 | 2026-07-15 |
| [#186906](https://github.com/pytorch/pytorch/pull/186906) | Update trace_rules for torch.accelerator | @guangyey | open | 2026-06-10 | 2026-07-15 |
| [#186600](https://github.com/pytorch/pytorch/pull/186600) | Introduce manual_seed&seed to torch.accelerator | @guangyey | open | 2026-06-08 | 2026-07-15 |
| [#186771](https://github.com/pytorch/pytorch/pull/186771) | Introduce _isInBadFork and refine torch.random | @guangyey | open | 2026-06-09 | 2026-07-15 |
| [#186777](https://github.com/pytorch/pytorch/pull/186777) | [1/N] Replace module-level RNG-related APIs with torch.accel... | @guangyey | open | 2026-06-09 | 2026-07-15 |
| [#185069](https://github.com/pytorch/pytorch/pull/185069) | Fix AOTI Windows cross-compile package loading | @jansel | open | 2026-05-24 | 2026-07-15 |
| [#186897](https://github.com/pytorch/pytorch/pull/186897) | Warn when custom op int schema specializes SymInts | @jansel | open | 2026-06-10 | 2026-07-15 |
| [#188320](https://github.com/pytorch/pytorch/pull/188320) | [c10d] Integrate ncclGather into PT | @fduwjj | open | 2026-06-27 | 2026-07-15 |
| [#179651](https://github.com/pytorch/pytorch/pull/179651) | [torchtitan hash update] update the pinned torchtitan hash | @pytorchupdatebot | open | 2026-04-08 | 2026-07-15 |
| [#184312](https://github.com/pytorch/pytorch/pull/184312) | Fix efficient zero tensor handling in torch.compile | @tirthasheshpatel | open | 2026-05-19 | 2026-07-15 |
| [#189954](https://github.com/pytorch/pytorch/pull/189954) | [inductor] Type the V global accessors and add a KernelLike ... | @bobrenjc93 | draft | 2026-07-14 | 2026-07-15 |
| [#185976](https://github.com/pytorch/pytorch/pull/185976) | Fix Dynamo autograd.Function backward grad mode tracing | @jansel | open | 2026-06-02 | 2026-07-15 |
| [#189422](https://github.com/pytorch/pytorch/pull/189422) | Add mode="max-precision" and accuracy_high sugar to torch.co... | @heytanix | open | 2026-07-09 | 2026-07-15 |
| [#181680](https://github.com/pytorch/pytorch/pull/181680) | [triton hash update] update the pinned triton hash | @pytorchupdatebot | open | 2026-04-28 | 2026-07-15 |
| [#189453](https://github.com/pytorch/pytorch/pull/189453) | [c10d] Use weights_only=True in internal object collective c... | @d4l3k | open | 2026-07-09 | 2026-07-15 |
| [#188785](https://github.com/pytorch/pytorch/pull/188785) | Upgrade submodule oneDNN to v3.12.2 | @LuFinch | open | 2026-07-02 | 2026-07-15 |
| [#189846](https://github.com/pytorch/pytorch/pull/189846) | Add FlyDSL RMSNorm forward and backward overrides | @HengYi-amd | draft | 2026-07-14 | 2026-07-15 |
| [#186252](https://github.com/pytorch/pytorch/pull/186252) | [inductor] Fix truncdiv off-by-one on CUDA with _div_rn | @Aminsed | open | 2026-06-04 | 2026-07-15 |
| [#189958](https://github.com/pytorch/pytorch/pull/189958) | [c10d][nccl2] Fix ROCm <7.0 build by guarding hipEventRecord... | @d4l3k | closed | 2026-07-15 | 2026-07-15 |
| [#189722](https://github.com/pytorch/pytorch/pull/189722) | [ROCm] Fix Python 3.15 manywheel build: redirect pkg-config ... | @atalman | open | 2026-07-13 | 2026-07-15 |
| [#189903](https://github.com/pytorch/pytorch/pull/189903) | [CD] Repackage manywheels with auditwheel to fix invalid ZIP... | @atalman | open | 2026-07-14 | 2026-07-15 |
| [#188276](https://github.com/pytorch/pytorch/pull/188276) | [FSDP] Add MORI SDMA all-gather backend and zero-copy output... | @wuyl1 | open | 2026-06-26 | 2026-07-15 |
| [#189229](https://github.com/pytorch/pytorch/pull/189229) | [DO NOT MERGE][ROCm] Use torch.version.hip to detect ROCm wh... | @chinmaydk99 | draft | 2026-07-08 | 2026-07-15 |
| [#189906](https://github.com/pytorch/pytorch/pull/189906) | [ROCm] Rewrite bundled-lib NEEDED entries after all libs are... | @jeffdaily | open | 2026-07-14 | 2026-07-15 |
| [#189900](https://github.com/pytorch/pytorch/pull/189900) | [ROCm] Retry VecISA dlopen probe with import torch on cold l... | @jeffdaily | open | 2026-07-14 | 2026-07-15 |
| [#177961](https://github.com/pytorch/pytorch/pull/177961) | [ROCm] Enable native AsyncTP | @chinmaydk99 | draft | 2026-03-20 | 2026-07-15 |
| [#186127](https://github.com/pytorch/pytorch/pull/186127) | [AI Codemod][PerfAICT-General] fbcode/caffe2/torch/csrc/jit/... | @yuxuanchen1997 | open | 2026-06-03 | 2026-07-15 |
| [#184253](https://github.com/pytorch/pytorch/pull/184253) | [DO NOT MERGE][ROCm][CI] Test k8s dpx | @amdfaa | draft | 2026-05-18 | 2026-07-15 |
| [#188682](https://github.com/pytorch/pytorch/pull/188682) | Limit ROCm build targets to architectures covered by testing | @abhilashKaturu | draft | 2026-07-01 | 2026-07-15 |
| [#187165](https://github.com/pytorch/pytorch/pull/187165) | [ROCm] Enable FMA inductor lowering on ROCm | @jataylo | open | 2026-06-12 | 2026-07-14 |
| [#184007](https://github.com/pytorch/pytorch/pull/184007) | [inductor] Clear stale subprocess cache env vars | @jansel | open | 2026-05-16 | 2026-07-14 |
| [#186403](https://github.com/pytorch/pytorch/pull/186403) | Avoid CUDA init during CPU torch.compile | @jansel | open | 2026-06-05 | 2026-07-14 |
| [#189685](https://github.com/pytorch/pytorch/pull/189685) | Fix int32 overflow in CUDA bincount/histogram bin index | @CodersAcademy006 | open | 2026-07-13 | 2026-07-14 |
| [#188720](https://github.com/pytorch/pytorch/pull/188720) | [ROCm] Enable cholesky_ex via hipSOLVER xgeev (ROCm >= 7.14)... | @akashveramd | open | 2026-07-01 | 2026-07-14 |
| [#189760](https://github.com/pytorch/pytorch/pull/189760) | [BE] Switch ubuntu-rocm CI image off conda to a deadsnakes v... | @ethanwee1 | open | 2026-07-13 | 2026-07-14 |
| [#189124](https://github.com/pytorch/pytorch/pull/189124) | [inductor] Cache DSR-expanded single-config reductions | @SakshamKapoor2911 | open | 2026-07-07 | 2026-07-14 |
| [#187164](https://github.com/pytorch/pytorch/pull/187164) | [ROCm] unskip export tests on ROCm | @jataylo | open | 2026-06-12 | 2026-07-14 |
| [#187778](https://github.com/pytorch/pytorch/pull/187778) | Flatten all_to_all_nd copy to fix narrow-row throughput | @kwen2501 | open | 2026-06-20 | 2026-07-14 |
| [#184276](https://github.com/pytorch/pytorch/pull/184276) | [inductor] fix torch.randperm for slice_shape node in fx_pas... | @khushi-411 | open | 2026-05-18 | 2026-07-14 |
| [#184365](https://github.com/pytorch/pytorch/pull/184365) | Memory aware partition selection for partitioned scatter fx ... | @jataylo | open | 2026-05-19 | 2026-07-14 |
| [#185813](https://github.com/pytorch/pytorch/pull/185813) | [ROCm][Windows] Audit license-files: explicit enumeration + ... | @tvukovic-amd | open | 2026-06-01 | 2026-07-14 |
| [#189257](https://github.com/pytorch/pytorch/pull/189257) | [rocm] Re-enable conv2d backward parametrized test on ROCm b... | @k-artem | open | 2026-07-08 | 2026-07-14 |
| [#188357](https://github.com/pytorch/pytorch/pull/188357) | [ROCm] Add MIOpen convolution ops to FORBIDDEN_CUDAGRAPH_OPS... | @bouclem | open | 2026-06-28 | 2026-07-14 |
| [#186015](https://github.com/pytorch/pytorch/pull/186015) | Revive CUDA 12.9 nightly binary builds | @malfet | merged | 2026-06-02 | 2026-07-10 |
| [#186654](https://github.com/pytorch/pytorch/pull/186654) | [CD] Drop CPython 3.13t from binary build matrix (#182951) | @malfet | merged | 2026-06-08 | 2026-07-09 |
| [#188160](https://github.com/pytorch/pytorch/pull/188160) | [MPS] Migrate argmin/argmax from MPSGraph to Metal | @malfet | merged | 2026-06-25 | 2026-06-25 |
| [#188117](https://github.com/pytorch/pytorch/pull/188117) | Add CUDAGraph cloning for live user outputs | @eellison | merged | 2026-06-24 | 2026-06-24 |
| [#187983](https://github.com/pytorch/pytorch/pull/187983) | Fix bmm outer product Triton launch on non-current CUDA devi... | @pytorchbot | merged | 2026-06-23 | 2026-06-23 |
| [#187973](https://github.com/pytorch/pytorch/pull/187973) | Fix Windows libtorch x86_64 and arm64 packages overwriting e... | @pytorchbot | merged | 2026-06-23 | 2026-06-23 |
| [#187417](https://github.com/pytorch/pytorch/pull/187417) | [xpu][fix] Include kernel_compile_result.h in aoti xpu.h hea... | @pytorchbot | merged | 2026-06-16 | 2026-06-16 |
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
| [#178443](https://github.com/pytorch/pytorch/pull/178443) | Bump requests from 2.32.4 to 2.33.0 in /.github | @dependabot[bot] | merged | 2026-03-25 | 2026-03-25 |
| [#175159](https://github.com/pytorch/pytorch/pull/175159) | [ROCm] forward fix #174087, take 4 | @pytorchbot | merged | 2026-02-17 | 2026-03-23 |
| [#175299](https://github.com/pytorch/pytorch/pull/175299) | [benchmark] Skip pytorch_CycleGAN_and_pix2pix from inductor ... | @pytorchbot | merged | 2026-02-19 | 2026-03-22 |
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
| [#156728](https://github.com/pytorch/pytorch/pull/156728) | [RELEASE 2.8] Release only changes | @atalman | merged | 2025-06-24 | 2025-06-24 |
| [#154135](https://github.com/pytorch/pytorch/pull/154135) | [ROCm] Added unit test to test the cuda_pluggable allocator  | @pytorchbot | merged | 2025-05-22 | 2025-06-23 |

## jax (Upstream Watch)
Repo: `jax-ml/jax` | Last collected: 2026-07-15T09:46:39Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#39038](https://github.com/jax-ml/jax/pull/39038) | [pallas:triton] Resolve ROCm gfx arch from the device ISA | @magaonka-amd | merged | 2026-07-09 | 2026-07-14 |
| [#39074](https://github.com/jax-ml/jax/pull/39074) | [ROCm][Pallas] Skip fused attention fwd tests that exceed de... | @tsrw2048 | merged | 2026-07-10 | 2026-07-13 |
| [#37475](https://github.com/jax-ml/jax/pull/37475) | [ROCm] Move ROCm Bazel presubmit workflow to 32-bit mode. | @tsrw2048 | merged | 2026-05-07 | 2026-07-10 |
| [#38490](https://github.com/jax-ml/jax/pull/38490) | [ROCm] Allow XLA_PYTHON_CLIENT_ALLOCATOR=address | @magaonka-amd | merged | 2026-06-15 | 2026-07-10 |
| [#38884](https://github.com/jax-ml/jax/pull/38884) | [ROCm] Update rules_ml_toolchain as well as xla refs | @alekstheod | merged | 2026-07-01 | 2026-07-10 |
| [#38808](https://github.com/jax-ml/jax/pull/38808) | [ROCm] Add blocking PR gate with a reduced set of tests | @mminutoli | merged | 2026-06-26 | 2026-07-07 |
| [#38950](https://github.com/jax-ml/jax/pull/38950) | [ROCm] Fix PgleTest.testAutoPgle expected fdo profile counts | @magaonka-amd | merged | 2026-07-06 | 2026-07-06 |
| [#38862](https://github.com/jax-ml/jax/pull/38862) | [ROCm] Skip flaky approx_top_k and Welch tests on ROCm | @magaonka-amd | merged | 2026-06-30 | 2026-07-06 |
| [#38824](https://github.com/jax-ml/jax/pull/38824) | [ROCm] Preserve pinned_host memory kind across DLPack round-... | @magaonka-amd | merged | 2026-06-28 | 2026-07-06 |
| [#38493](https://github.com/jax-ml/jax/pull/38493) | [ROCm] CI: use address allocator for pytest | @magaonka-amd | merged | 2026-06-16 | 2026-07-06 |
| [#38803](https://github.com/jax-ml/jax/pull/38803) | [ROCm] Add expanded target set for ROCm | @tsrw2048 | open | 2026-06-26 | 2026-06-29 |
| [#38810](https://github.com/jax-ml/jax/pull/38810) | [ROCm] Add TheRock latest to nightly and continuous CI workf... | @mminutoli | open | 2026-06-26 | 2026-06-26 |
| [#38663](https://github.com/jax-ml/jax/pull/38663) | Consolidate AMD GPU (ROCm) installation documentation | @JehandadKhan | merged | 2026-06-22 | 2026-06-26 |
| [#38604](https://github.com/jax-ml/jax/pull/38604) | [ROCm] Add blocking Bazel PR gate and file-driven test selec... | @mminutoli | draft | 2026-06-20 | 2026-06-26 |
| [#38666](https://github.com/jax-ml/jax/pull/38666) | [ROCm] Update ROCm runner labels to new labels | @psanal35 | merged | 2026-06-22 | 2026-06-22 |
| [#38558](https://github.com/jax-ml/jax/pull/38558) | Try to resolve test failure on ROCM. | @copybara-service[bot] | merged | 2026-06-18 | 2026-06-18 |
| [#37053](https://github.com/jax-ml/jax/pull/37053) | [ROCm] Fix env var and backend factory leak in xla_bridge_te... | @magaonka-amd | open | 2026-04-21 | 2026-06-16 |
| [#38478](https://github.com/jax-ml/jax/pull/38478) | [ROCm] Skip testConvGeneralDilated on ROCm | @magaonka-amd | merged | 2026-06-15 | 2026-06-15 |
| [#38296](https://github.com/jax-ml/jax/pull/38296) | [ROCm] Bypass hipSOLVER for Cholesky: route `jnp.linalg.chol... | @cj401-amd | open | 2026-06-09 | 2026-06-15 |
| [#38030](https://github.com/jax-ml/jax/pull/38030) | Skip ROCm plugin discovery when JAX_PLATFORMS excludes ROCm | @factnn | open | 2026-05-28 | 2026-06-14 |
| [#38276](https://github.com/jax-ml/jax/pull/38276) | [ROCm] Bake TheRock-aware RUNPATH into wheels and fix /opt/r... | @gulsumgudukbay | merged | 2026-06-08 | 2026-06-11 |
| [#38372](https://github.com/jax-ml/jax/pull/38372) | [ROCm][Pallas] Skip fused attention bwd tests that exceed de... | @mminutoli | merged | 2026-06-10 | 2026-06-10 |
| [#38352](https://github.com/jax-ml/jax/pull/38352) | [ROCm] Reduce number of jobs for jax builds under rocm rbe | @alekstheod | merged | 2026-06-10 | 2026-06-10 |
| [#38308](https://github.com/jax-ml/jax/pull/38308) | [ROCm] Update rules_ml_toolchain refs | @alekstheod | merged | 2026-06-09 | 2026-06-10 |
| [#38200](https://github.com/jax-ml/jax/pull/38200) | [ROCm] Remove outdated ROCm skip that depends on ROCm versio... | @gulsumgudukbay | merged | 2026-06-04 | 2026-06-08 |
| [#38258](https://github.com/jax-ml/jax/pull/38258) | [ROCm] CI improvements for ROCm | @magaonka-amd | merged | 2026-06-08 | 2026-06-08 |
| [#38208](https://github.com/jax-ml/jax/pull/38208) | Use ROCm tag in S3 prefix instead of version | @psanal35 | merged | 2026-06-04 | 2026-06-05 |
| [#38205](https://github.com/jax-ml/jax/pull/38205) | [ROCm] xdist: select GPU from runner-allocated ROCR slice | @magaonka-amd | merged | 2026-06-04 | 2026-06-04 |
| [#37485](https://github.com/jax-ml/jax/pull/37485) | [ROCm] Add org-based guards to all CI caller workflows | @mminutoli | merged | 2026-05-07 | 2026-06-03 |
| [#37444](https://github.com/jax-ml/jax/pull/37444) | [ROCm] Version-tier S3 layout, standardized CI job naming, a... | @mminutoli | merged | 2026-05-07 | 2026-06-03 |
| [#38146](https://github.com/jax-ml/jax/pull/38146) | Disable more ROCm tests. | @copybara-service[bot] | merged | 2026-06-03 | 2026-06-03 |
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#38065](https://github.com/jax-ml/jax/pull/38065) | [ROCm] Skip complex-GEMM-failing GPU test suites in ROCm CI | @magaonka-amd | merged | 2026-05-29 | 2026-05-29 |
| [#37977](https://github.com/jax-ml/jax/pull/37977) | [ROCm] Switch to build jax using hermetic sysroot | @alekstheod | merged | 2026-05-26 | 2026-05-29 |
| [#37840](https://github.com/jax-ml/jax/pull/37840) | [ROCm] Remove redundant --config=rocm_base from wheel build ... | @mminutoli | merged | 2026-05-19 | 2026-05-20 |
| [#37740](https://github.com/jax-ml/jax/pull/37740) | [ROCm] Switch to hermetic llvm for rocm | @alekstheod | merged | 2026-05-18 | 2026-05-19 |
| [#37071](https://github.com/jax-ml/jax/pull/37071) | [ROCm] Switch to hermetic llvm | @alekstheod | draft | 2026-04-22 | 2026-05-18 |
| [#35785](https://github.com/jax-ml/jax/pull/35785) | [ROCm] Fix and simplify jax rocm plugin init script | @alekstheod | merged | 2026-03-10 | 2026-05-08 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-05-05 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#34491](https://github.com/jax-ml/jax/pull/34491) | Enable ROCm testing for threefry_partitionable PRNG tests | @hrideymarwah15 | open | 2026-01-20 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-07-15T09:46:49Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#48247](https://github.com/vllm-project/vllm/pull/48247) | [Perf][ROCm] Add AITER custom AG/RS | @simondanielsson | open | 2026-07-10 | 2026-07-15 |
| [#48712](https://github.com/vllm-project/vllm/pull/48712) | [Bugfix][ROCm] Only run FP8 AITER MLA prefill when using FP8... | @simondanielsson | open | 2026-07-15 | 2026-07-15 |
| [#48722](https://github.com/vllm-project/vllm/pull/48722) | [ROCm] Fix sparse MLA metadata missing num_decodes | @fanxingran | open | 2026-07-15 | 2026-07-15 |
| [#42436](https://github.com/vllm-project/vllm/pull/42436) | fused_moe: add VLLM_TRITON_USE_TD tensor-descriptor path | @afierka-intel | open | 2026-05-12 | 2026-07-15 |
| [#48012](https://github.com/vllm-project/vllm/pull/48012) | [Attention] Allow selecting a different attention backend pe... | @NickLucche | draft | 2026-07-08 | 2026-07-15 |
| [#41834](https://github.com/vllm-project/vllm/pull/41834) | [New Model][Nvidia] Add SM12x support for DeepSeek V4 Flash ... | @jasl | open | 2026-05-06 | 2026-07-15 |
| [#48607](https://github.com/vllm-project/vllm/pull/48607) | [ROCm][CI] Keep original layer count for Gemma4MTP init test | @stefankoncarevic | open | 2026-07-14 | 2026-07-15 |
| [#48593](https://github.com/vllm-project/vllm/pull/48593) | [ROCm][CI] Cap KimiK25 init test max_model_len to fit CI VRA... | @stefankoncarevic | open | 2026-07-14 | 2026-07-15 |
| [#48257](https://github.com/vllm-project/vllm/pull/48257) | [ROCm] [CI] Support cached K/V (key/value=None) in Triton pr... | @stefankoncarevic | open | 2026-07-10 | 2026-07-15 |
| [#48260](https://github.com/vllm-project/vllm/pull/48260) | [ROCm] [CI] Keep original layer count for Eagle3DeepseekV2 i... | @stefankoncarevic | open | 2026-07-10 | 2026-07-15 |
| [#48259](https://github.com/vllm-project/vllm/pull/48259) | [ROCm] [CI] Keep original layer count for Eagle3Qwen3vl init... | @stefankoncarevic | open | 2026-07-10 | 2026-07-15 |
| [#47992](https://github.com/vllm-project/vllm/pull/47992) | [ROCm][CI] Avoid HIP init at config time for non-MLA models | @stefankoncarevic | open | 2026-07-08 | 2026-07-15 |
| [#48009](https://github.com/vllm-project/vllm/pull/48009) | [Misc][Nixl] Unify `_logical_to_remote_kernel_block_ids` | @NickLucche | closed | 2026-07-08 | 2026-07-15 |
| [#48688](https://github.com/vllm-project/vllm/pull/48688) | [ROCm][Bugfix] Enable the fp32 head_dtype torch.mm fast path... | @wjabbour | merged | 2026-07-15 | 2026-07-15 |
| [#39330](https://github.com/vllm-project/vllm/pull/39330) | feat[vLLM × v5]: Add audio support for the Transformers back... | @harshaljanjani | open | 2026-04-08 | 2026-07-15 |
| [#47807](https://github.com/vllm-project/vllm/pull/47807) | refactor: streamline DeepSeek V4 mHC warmup and remove token... | @leihuang-sketch | open | 2026-07-07 | 2026-07-15 |
| [#48697](https://github.com/vllm-project/vllm/pull/48697) | [Bugfix] Reject DeepSeek V4 FP4 MoE tensor parallelism | @dumko2001 | open | 2026-07-15 | 2026-07-15 |
| [#48206](https://github.com/vllm-project/vllm/pull/48206) | fix flaky multi example connector consistency | @aarushjain29 | merged | 2026-07-10 | 2026-07-15 |
| [#48606](https://github.com/vllm-project/vllm/pull/48606) | [Quantization] Support Quark AWQ INT4 exports in vLLM | @limitmhw | open | 2026-07-14 | 2026-07-15 |
| [#48159](https://github.com/vllm-project/vllm/pull/48159) | [ROCm] Add tuned selective_state_update config for AMD MI350 | @giuseppegrossi | merged | 2026-07-09 | 2026-07-15 |
| [#48708](https://github.com/vllm-project/vllm/pull/48708) | [ROCm][Bugfix] Return empty UUID string when amdsmi uuid que... | @ChuanLi1101 | draft | 2026-07-15 | 2026-07-15 |
| [#36422](https://github.com/vllm-project/vllm/pull/36422) | [ROCm][Bugfix] Fix MXFP4 MoE emulate fallback logic on MX-ca... | @ChuanLi1101 | closed | 2026-03-08 | 2026-07-15 |
| [#48671](https://github.com/vllm-project/vllm/pull/48671) | [Bugfix][Spec Decode] Support heterogeneous QK fusion geomet... | @aoshen02 | merged | 2026-07-14 | 2026-07-15 |
| [#48676](https://github.com/vllm-project/vllm/pull/48676) | [ROCm][CI] fix test_common.py | @charlifu | merged | 2026-07-15 | 2026-07-15 |
| [#48526](https://github.com/vllm-project/vllm/pull/48526) | [ROCm] Re-enable cudagraph memory profiling, captured on the... | @peizhang56 | open | 2026-07-13 | 2026-07-15 |
| [#48527](https://github.com/vllm-project/vllm/pull/48527) | [ROCm] Run init test engine in-process to avoid KV-cache OOM | @djramic | merged | 2026-07-13 | 2026-07-15 |
| [#37353](https://github.com/vllm-project/vllm/pull/37353) | [ROCm][Perf] Skip head repeat_interleave for AITER MLA decod... | @ChuanLi1101 | open | 2026-03-17 | 2026-07-15 |
| [#36855](https://github.com/vllm-project/vllm/pull/36855) | [ROCm] Fix AITER sparse MLA crash for num_heads < 16 (e.g. G... | @ChuanLi1101 | open | 2026-03-12 | 2026-07-15 |
| [#37514](https://github.com/vllm-project/vllm/pull/37514) | [MODEL] Cherry-pick: Adding Support for Qwen3.5 Models | @ChuanLi1101 | open | 2026-03-19 | 2026-07-15 |
| [#48427](https://github.com/vllm-project/vllm/pull/48427) | [ROCm][Quant] Requantize serialized MXFP8 linears to FP8 PTP... | @tanpinsiang | open | 2026-07-12 | 2026-07-15 |
| [#37800](https://github.com/vllm-project/vllm/pull/37800) | [ROCm][Perf] Add MXFP4 linear method and enable shared exper... | @ChuanLi1101 | closed | 2026-03-22 | 2026-07-15 |
| [#40697](https://github.com/vllm-project/vllm/pull/40697) | [ROCm][Kimi-Linear] Wire FlyDSL gated delta rule decode kern... | @ChuanLi1101 | closed | 2026-04-23 | 2026-07-15 |
| [#40892](https://github.com/vllm-project/vllm/pull/40892) | [ROCm][DSv4] Make AITER sparse MLA decode cudagraph-clean (f... | @ChuanLi1101 | closed | 2026-04-26 | 2026-07-15 |
| [#40889](https://github.com/vllm-project/vllm/pull/40889) | [ROCm] Add AITER-accelerated MLA decode for DeepSeek V4 on M... | @ChuanLi1101 | closed | 2026-04-25 | 2026-07-15 |
| [#43199](https://github.com/vllm-project/vllm/pull/43199) | [vLLM IR][Rope] Port RotaryEmbedding to IR Ops | @wxsIcey | open | 2026-05-20 | 2026-07-15 |
| [#42755](https://github.com/vllm-project/vllm/pull/42755) | [Model][Hardware][AMD][Kernel]: Part 2/2 -> Enable e2e QK No... | @jhu960213 | open | 2026-05-15 | 2026-07-15 |
| [#42749](https://github.com/vllm-project/vllm/pull/42749) | [Model][Hardware][AMD]: Part 1/2 -> Enable e2e QK Norm + RoP... | @jhu960213 | open | 2026-05-15 | 2026-07-15 |
| [#47764](https://github.com/vllm-project/vllm/pull/47764) | [ROCm][KVConnector][MoRI-IO] Fix WRITE-mode remote-TP rank c... | @avininjamay8 | open | 2026-07-06 | 2026-07-15 |
| [#47680](https://github.com/vllm-project/vllm/pull/47680) | [Bugfix][V1/V2] Fix prompt_logprobs to respect logprobs_mode | @aoshen02 | open | 2026-07-06 | 2026-07-15 |
| [#47375](https://github.com/vllm-project/vllm/pull/47375) | [CI] Fix flaky lora test | @qli88 | open | 2026-07-02 | 2026-07-15 |
| [#47030](https://github.com/vllm-project/vllm/pull/47030) | [ROCm][DistInf] Enable vLLM DI CI with buildkite/slurm | @lcskrishna | open | 2026-06-29 | 2026-07-15 |
| [#48214](https://github.com/vllm-project/vllm/pull/48214) | [Bugfix] Fix pooling input buffer race across chunked prefil... | @frankwang28 | open | 2026-07-10 | 2026-07-15 |
| [#40938](https://github.com/vllm-project/vllm/pull/40938) | [ROCm][CI] Move ROCm AITER quantization tests | @AndreasKaratzas | draft | 2026-04-26 | 2026-07-15 |
| [#47484](https://github.com/vllm-project/vllm/pull/47484) | [ROCm][CI] Adding rocm multinode proto | @AndreasKaratzas | draft | 2026-07-02 | 2026-07-15 |
| [#41191](https://github.com/vllm-project/vllm/pull/41191) | [Core][CI/Build] Make outlines disk cache optional | @mrDzurb | open | 2026-04-29 | 2026-07-15 |
| [#48451](https://github.com/vllm-project/vllm/pull/48451) | [feature]Add int4 quantization support for emulation moe bac... | @qli88 | open | 2026-07-13 | 2026-07-15 |
| [#48387](https://github.com/vllm-project/vllm/pull/48387) | [CI][AMD] Configure MI300 tests for native execution without... | @AndreasKaratzas | merged | 2026-07-12 | 2026-07-15 |
| [#47330](https://github.com/vllm-project/vllm/pull/47330) | [ROCm][CI] Remove mxfp4 test skips after `amd-quark` 0.12 re... | @micah-wil | merged | 2026-07-01 | 2026-07-15 |
| [#48646](https://github.com/vllm-project/vllm/pull/48646) | [ROCm][CI] Share communication runtime layers across CI and ... | @AndreasKaratzas | draft | 2026-07-14 | 2026-07-15 |
| [#44374](https://github.com/vllm-project/vllm/pull/44374) | [AMD] fix mori dockerfile | @billishyahao | open | 2026-06-03 | 2026-07-15 |
| [#48609](https://github.com/vllm-project/vllm/pull/48609) | Revert "[1/N] Add dense MHA path for sparse MLA short sequen... | @vllm-agent | closed | 2026-07-14 | 2026-07-15 |
| [#48683](https://github.com/vllm-project/vllm/pull/48683) | [ROCm] Bump AITER to v0.1.16.post4 | @Fangzhou-Ai | open | 2026-07-15 | 2026-07-15 |
| [#39875](https://github.com/vllm-project/vllm/pull/39875) | [Core] Add Ring Attention Primitives for Context Parallelism | @knitcapcat-amd | open | 2026-04-15 | 2026-07-15 |
| [#42459](https://github.com/vllm-project/vllm/pull/42459) | [CI][AMD][BugFix] Set num_gpus=2 for trainer for distributed... | @rasmith | open | 2026-05-12 | 2026-07-15 |
| [#39448](https://github.com/vllm-project/vllm/pull/39448) | AMD remove sync visible devices | @vickytsang | open | 2026-04-09 | 2026-07-15 |
| [#48044](https://github.com/vllm-project/vllm/pull/48044) | Fused Shared Expert Support for AMD Quark DeepSeek-V4 Model ... | @ColinZ22 | open | 2026-07-08 | 2026-07-15 |
| [#40246](https://github.com/vllm-project/vllm/pull/40246) | [torch.compile] refactor config hashing through compile_fact... | @WorldExplored | open | 2026-04-18 | 2026-07-15 |
| [#40943](https://github.com/vllm-project/vllm/pull/40943) | [ROCm][CI] Upgrade ROCm quantized MoE coverage | @AndreasKaratzas | open | 2026-04-26 | 2026-07-15 |
| [#47770](https://github.com/vllm-project/vllm/pull/47770) | [ROCm][BugFix] Triton W4A16 handling for GPTQ/AutoGPTQ qzero... | @giuseppegrossi | open | 2026-07-06 | 2026-07-15 |
| [#47495](https://github.com/vllm-project/vllm/pull/47495) | [Bugfix][KV-transfer] MoRIIO: retry RDMA send-queue-full bac... | @edwinlim0919 | open | 2026-07-03 | 2026-07-15 |
| [#48654](https://github.com/vllm-project/vllm/pull/48654) | [Bugfix][CI] Fix test_head_dtype quant_method test on ROCm | @micah-wil | merged | 2026-07-14 | 2026-07-14 |
| [#46115](https://github.com/vllm-project/vllm/pull/46115) | [Bugfix] MoRIIO toy P/D proxy: fix DP-rank index aliasing + ... | @edwinlim0919 | open | 2026-06-18 | 2026-07-14 |
| [#45222](https://github.com/vllm-project/vllm/pull/45222) | [Bugfix] MoRIIO toy P/D proxy: add /health | @chaeminlim-mb | merged | 2026-06-11 | 2026-07-14 |
| [#48647](https://github.com/vllm-project/vllm/pull/48647) | [ROCm][CI] fix flashinfer import check | @divakar-amd | merged | 2026-07-14 | 2026-07-14 |
| [#48373](https://github.com/vllm-project/vllm/pull/48373) | [ROCm] Retune MI355 selective_state_update float32 config on... | @vanshbhatia-amd | merged | 2026-07-11 | 2026-07-14 |
| [#48513](https://github.com/vllm-project/vllm/pull/48513) | [ROCm][CI] Unblock `AMD: Language Models Test (Extended Pool... | @micah-wil | merged | 2026-07-13 | 2026-07-14 |
| [#45437](https://github.com/vllm-project/vllm/pull/45437) | [Doc] Sync four function docstrings with their signatures | @DaoyuanLi2816 | merged | 2026-06-12 | 2026-07-14 |
| [#46757](https://github.com/vllm-project/vllm/pull/46757) | Fix Quark mxfp4 quantized model loading issue under mtp | @xiao-llm | open | 2026-06-25 | 2026-07-14 |
| [#48223](https://github.com/vllm-project/vllm/pull/48223) | [Perf][ROCm] Dual-stream decode with hipgraphs | @simondanielsson | open | 2026-07-10 | 2026-07-14 |
| [#40977](https://github.com/vllm-project/vllm/pull/40977) | [ROCm][Kernel] Add HybridW4A16LinearKernel: Triton prefill +... | @mgehre-amd | merged | 2026-04-27 | 2026-07-14 |
| [#48372](https://github.com/vllm-project/vllm/pull/48372) | [ROCm] Retune MI355 selective_state_update float16 config on... | @vanshbhatia-amd | merged | 2026-07-11 | 2026-07-14 |
| [#42640](https://github.com/vllm-project/vllm/pull/42640) | linear: add CDNA-tuned W4A16 linear kernel  | @Arkar-Hema | open | 2026-05-14 | 2026-07-14 |
| [#47984](https://github.com/vllm-project/vllm/pull/47984) | [ROCm][MiniMax-M3][Spec Decode] Support speculative decode w... | @tanpinsiang | merged | 2026-07-08 | 2026-07-14 |
| [#45000](https://github.com/vllm-project/vllm/pull/45000) | [Perf][ROCm] Fix GDN KKT warmup regression on RDNA by avoidi... | @nemanjaudovic | merged | 2026-06-09 | 2026-07-14 |
| [#44849](https://github.com/vllm-project/vllm/pull/44849) | [ROCm][MiniMax-M2] Dispatch fused QK-norm + AllReduce via AI... | @akii96 | merged | 2026-06-08 | 2026-07-14 |
| [#46913](https://github.com/vllm-project/vllm/pull/46913) | [communication] [bugfix] fix quickreduce acc error in cudagr... | @haoyangli0109 | open | 2026-06-27 | 2026-07-14 |
| [#43463](https://github.com/vllm-project/vllm/pull/43463) | [Frontend] Expose logprob_token_ids on Python OpenAI endpoin... | @langzhao-netizen | merged | 2026-05-23 | 2026-07-13 |
| [#47606](https://github.com/vllm-project/vllm/pull/47606) | [Bugfix][Frontend] Flush engine reasoning parser at engine-r... | @akii96 | merged | 2026-07-04 | 2026-07-13 |
| [#48258](https://github.com/vllm-project/vllm/pull/48258) | [ROCm][CI] Transformers: pass only one of input_ids/inputs_e... | @stefankoncarevic | merged | 2026-07-10 | 2026-07-13 |
| [#48440](https://github.com/vllm-project/vllm/pull/48440) | Re-disable CUDA graph memory profiling on ROCm | @Rohan138 | merged | 2026-07-12 | 2026-07-13 |
| [#48467](https://github.com/vllm-project/vllm/pull/48467) | remove force channels_last in Idefics3MultiModalProcessor | @yma11 | merged | 2026-07-13 | 2026-07-13 |
| [#44400](https://github.com/vllm-project/vllm/pull/44400) | [ROCm][Perf] Enable W4A16 FlyDSL MoE | @amd-asalykov | merged | 2026-06-03 | 2026-07-13 |
| [#43159](https://github.com/vllm-project/vllm/pull/43159) | [DSv4][Performance][MoE] Optimize pack_bitmatrix Triton kern... | @akash-amd | open | 2026-05-19 | 2026-07-13 |
| [#47553](https://github.com/vllm-project/vllm/pull/47553) | [AMD][NVFP4] Add aiter backend for NVFP4 MOE runtime on gfx9... | @fxmarty-amd | open | 2026-07-03 | 2026-07-13 |
| [#38476](https://github.com/vllm-project/vllm/pull/38476) | [Feature] TRITON_MLA_SPARSE backend for SM8x/11x/12x DSA Spa... | @haosdent | open | 2026-03-29 | 2026-07-13 |
| [#48011](https://github.com/vllm-project/vllm/pull/48011) | [Attention] Make sliding-window support an explicit backend ... | @NickLucche | merged | 2026-07-08 | 2026-07-13 |
| [#48471](https://github.com/vllm-project/vllm/pull/48471) | [ROCm][P/D] Fix MoRIIO READ prefix-cache block matching | @junkang1991 | open | 2026-07-13 | 2026-07-13 |
| [#46527](https://github.com/vllm-project/vllm/pull/46527) | [ROCm][CI] Cache Rust builds by source inputs | @AndreasKaratzas | merged | 2026-06-23 | 2026-07-13 |
| [#48446](https://github.com/vllm-project/vllm/pull/48446) | [Bugfix][ROCm] Keep TP all_gather on base-class collective | @Fangzhou-Ai | merged | 2026-07-13 | 2026-07-13 |
| [#47287](https://github.com/vllm-project/vllm/pull/47287) | [ROCm][MiniMax-M3] Add AITER sparse paged attention | @tanpinsiang | merged | 2026-07-01 | 2026-07-13 |
| [#39058](https://github.com/vllm-project/vllm/pull/39058) | [Kernel] Implement CUDA kernel for ReLUSquaredActivation (re... | @tanish-malekar | merged | 2026-04-06 | 2026-07-13 |
| [#46384](https://github.com/vllm-project/vllm/pull/46384) | [2/N][Core] support partial prefix cache hit for hybrid mode... | @ZJY0516 | merged | 2026-06-22 | 2026-07-12 |
| [#45234](https://github.com/vllm-project/vllm/pull/45234) | [ROCm] Enable ROCm Attention Sinks and Connector-Friendly KV... | @AndreasKaratzas | draft | 2026-06-11 | 2026-07-12 |
| [#44455](https://github.com/vllm-project/vllm/pull/44455) | [2/N][KV-Cache Layout Refactor] Pack K/V into the content di... | @LucasWilkinson | merged | 2026-06-03 | 2026-07-11 |
| [#44972](https://github.com/vllm-project/vllm/pull/44972) | [Test][V1] Add sleep/wake correctness regression test for hy... | @chun-wan | open | 2026-06-09 | 2026-07-11 |
| [#47419](https://github.com/vllm-project/vllm/pull/47419) | [ROCm] Enable DeepSeek-V4 DSpark speculative decoding on AMD... | @larryli2-amd | merged | 2026-07-02 | 2026-07-10 |
| [#47454](https://github.com/vllm-project/vllm/pull/47454) | [Frontend] Add endpoint plugins framework | @hickeyma | merged | 2026-07-02 | 2026-07-10 |
| [#48015](https://github.com/vllm-project/vllm/pull/48015) | [ROCm][CI] Avoid HIP init at config time via lazy aiter impo... | @music-dino | open | 2026-07-08 | 2026-07-10 |
| [#48186](https://github.com/vllm-project/vllm/pull/48186) | [CI] Right-size test-area timeouts from nightly durations | @khluu | merged | 2026-07-09 | 2026-07-10 |
| [#45261](https://github.com/vllm-project/vllm/pull/45261) | [Core][KV events] Report prefix-cache-reused blocks in full ... | @GongLei-HW | merged | 2026-06-11 | 2026-07-10 |
| [#47366](https://github.com/vllm-project/vllm/pull/47366) | [CI/Build][AMD] Fix ROCm OOM in eagle_correctness_heavy by r... | @peizhang56 | merged | 2026-07-02 | 2026-07-10 |
| [#44969](https://github.com/vllm-project/vllm/pull/44969) | [ROCm][CI] Gating more ROCm tests | @AndreasKaratzas | open | 2026-06-09 | 2026-07-10 |
| [#48169](https://github.com/vllm-project/vllm/pull/48169) | [ROCm][CI] Move remaining engine/samplers AMD steps to mi325... | @peizhang56 | merged | 2026-07-09 | 2026-07-10 |
| [#48170](https://github.com/vllm-project/vllm/pull/48170) | [CI] Fix cargo-deny config flag ordering | @LucasWilkinson | merged | 2026-07-09 | 2026-07-09 |
| [#48154](https://github.com/vllm-project/vllm/pull/48154) | [ROCm] Revert Part of `[ROCm] Fix pooling startup workspace ... | @micah-wil | merged | 2026-07-09 | 2026-07-09 |
| [#47404](https://github.com/vllm-project/vllm/pull/47404) | [ROCm] Synchronize sparse MLA metadata before graph replay | @zihaomu | merged | 2026-07-02 | 2026-07-09 |
| [#45043](https://github.com/vllm-project/vllm/pull/45043) | llmd+vllm+mori-ep(inter node wide-ep)+mori-io(write) for 2p2... | @shikamd123 | open | 2026-06-09 | 2026-07-09 |
| [#46009](https://github.com/vllm-project/vllm/pull/46009) | [Bugfix][MoE] Preserve unquantized weight storage on ROCm | @aaab8b | open | 2026-06-18 | 2026-07-09 |
| [#43327](https://github.com/vllm-project/vllm/pull/43327) | [ROCm] Add per-call decode budget to sparse-MLA indexer | @reger-men | open | 2026-05-21 | 2026-07-08 |
| [#47719](https://github.com/vllm-project/vllm/pull/47719) | [ROCm][Perf] Add Qwen3 AITER fused QKV/RoPE KV-cache path | @mjkvaak-amd | open | 2026-07-06 | 2026-07-08 |
| [#46063](https://github.com/vllm-project/vllm/pull/46063) | [ROCm][Perf] MiniMax-M3 MXFP8 gemm/group gemm dispatch AITER | @JohnQinAMD | draft | 2026-06-18 | 2026-07-08 |
| [#47950](https://github.com/vllm-project/vllm/pull/47950) | [Bug]: Combination of sleep mode and speculative decoding ca... | @pjdurden | open | 2026-07-08 | 2026-07-08 |
| [#47932](https://github.com/vllm-project/vllm/pull/47932) | [CI/Build][BugFix][The Rock][AMD] Add spawn method in vision... | @rasmith | open | 2026-07-07 | 2026-07-08 |
| [#38365](https://github.com/vllm-project/vllm/pull/38365) | [ROCm] patch benchmark_moe  | @big-yellow-duck | open | 2026-03-27 | 2026-07-07 |
| [#46699](https://github.com/vllm-project/vllm/pull/46699) | [ROCm][DSV4][Kernel] Add gfx950 HIP compressor path | @qilihuan | open | 2026-06-25 | 2026-07-06 |
| [#46720](https://github.com/vllm-project/vllm/pull/46720) | [ROCm][DSV4] B-preshuffle the attention fp8 projections | @cagrikymk | open | 2026-06-25 | 2026-07-06 |
| [#44988](https://github.com/vllm-project/vllm/pull/44988) | [ROCm][Bugfix] Disable cudagraph for AITER MXFP4xMXFP4 MoE (... | @larryli2-amd | open | 2026-06-09 | 2026-07-06 |
| [#46944](https://github.com/vllm-project/vllm/pull/46944) | [ROCm][Test] Fix test_per_token_group_quant_fp8 tolerance fo... | @spandantiwari | merged | 2026-06-28 | 2026-07-05 |
| [#44977](https://github.com/vllm-project/vllm/pull/44977) | [ROCm][MLA] Fuse MLA q/kv RMSNorm + FP8 per-token quant in t... | @xaguilar-amd | merged | 2026-06-09 | 2026-07-02 |
| [#46730](https://github.com/vllm-project/vllm/pull/46730) | [ROCm][Perf][Bugfix] DSv4 indexer: use platform FP8 dtype (f... | @akii96 | merged | 2026-06-25 | 2026-07-01 |
| [#43950](https://github.com/vllm-project/vllm/pull/43950) | [ROCm][DSV4] Use aiter mHC pre/post as the default ROCm path | @Fangzhou-Ai | merged | 2026-05-29 | 2026-07-01 |
| [#45140](https://github.com/vllm-project/vllm/pull/45140) | [Kernel][XPU] Adjust kernel unit tests for XPU | @adobrzyn | merged | 2026-06-10 | 2026-06-30 |
| [#47000](https://github.com/vllm-project/vllm/pull/47000) | [ROCm][Ray][CI] Keep assigned GPU visible for weight transfe... | @AndreasKaratzas | merged | 2026-06-29 | 2026-06-30 |
| [#46895](https://github.com/vllm-project/vllm/pull/46895) | [ROCm][CI] Fix `rlhf_async_new_apis` Example On ROCm | @micah-wil | merged | 2026-06-27 | 2026-06-29 |
| [#46851](https://github.com/vllm-project/vllm/pull/46851) | [ROCm][CI] Fix rlhf_nccl.py on ROCm | @charlifu | merged | 2026-06-26 | 2026-06-29 |
| [#46600](https://github.com/vllm-project/vllm/pull/46600) | [Bugfix][DSv3.2] Skip indexer weights for index-cache-skippe... | @frida-andersson | merged | 2026-06-24 | 2026-06-28 |
| [#46184](https://github.com/vllm-project/vllm/pull/46184) | [ROCm][Perf] Use flydsl moe with Minimax-M3 mxfp8 weights on... | @hongxiayang | merged | 2026-06-19 | 2026-06-27 |
| [#46658](https://github.com/vllm-project/vllm/pull/46658) | [ROCm][CI] Relax fused layernorm quant test tolerances for o... | @divakar-amd | merged | 2026-06-24 | 2026-06-27 |
| [#35232](https://github.com/vllm-project/vllm/pull/35232) | [Build] Show error message when using ROCm with LTO and diff... | @davispuh | merged | 2026-02-24 | 2026-06-27 |
| [#46735](https://github.com/vllm-project/vllm/pull/46735) | [CI] Fix failing CUDA graph capture in Triton MOE | @fxmarty-amd | merged | 2026-06-25 | 2026-06-26 |
| [#46749](https://github.com/vllm-project/vllm/pull/46749) | [CI][Bugfix] Spawn engine in mm cache sleep test to fix ROCm... | @peizhang56 | merged | 2026-06-25 | 2026-06-26 |
| [#46741](https://github.com/vllm-project/vllm/pull/46741) | [ROCm][Bugfix] Fix HIP fork re-init in multimodal offline ex... | @peizhang56 | merged | 2026-06-25 | 2026-06-26 |
| [#46254](https://github.com/vllm-project/vllm/pull/46254) | [Bugfix] Fix NVFP4/OCP MX MoE emulation | @mawong-amd | merged | 2026-06-20 | 2026-06-25 |
| [#46386](https://github.com/vllm-project/vllm/pull/46386) | Run DeepSeek-V2-Lite prefetch-offload eval eager on ROCm | @aarushjain29 | merged | 2026-06-22 | 2026-06-24 |
| [#45998](https://github.com/vllm-project/vllm/pull/45998) | [ROCm][Bugfix] Fix `use_v2_model_runner` inside Ray driver t... | @micah-wil | merged | 2026-06-18 | 2026-06-24 |
| [#40835](https://github.com/vllm-project/vllm/pull/40835) | [Feature] Triton INT4 per-token-head KV cache quantization | @JartX | merged | 2026-04-24 | 2026-06-24 |
| [#43022](https://github.com/vllm-project/vllm/pull/43022) | [ROCm][CI] Stabilize sleep-mode memory release | @AndreasKaratzas | merged | 2026-05-18 | 2026-06-23 |
| [#46332](https://github.com/vllm-project/vllm/pull/46332) | [ROCm][P/D] Support MoRIIO heterogeneous TP fan-in | @tanpinsiang | merged | 2026-06-22 | 2026-06-23 |
| [#18242](https://github.com/vllm-project/vllm/pull/18242) | [V1][P/D] An native implementation of xPyD based on P2P NCCL | @Abatom | merged | 2025-05-16 | 2026-06-23 |
| [#46141](https://github.com/vllm-project/vllm/pull/46141) | [ROCm][CI] Query total device memory via amdsmi to avoid HIP... | @stefankoncarevic | merged | 2026-06-19 | 2026-06-22 |
| [#45931](https://github.com/vllm-project/vllm/pull/45931) | [ROCm][DSV4] Disable TileLang MHC dispatch on gfx942 | @tuukkjs | merged | 2026-06-17 | 2026-06-22 |
| [#46039](https://github.com/vllm-project/vllm/pull/46039) | [ROCm][P/D] Support MiniMax-M3 mixed KV layouts in MoRIIO RE... | @junkang1991 | merged | 2026-06-18 | 2026-06-21 |
| [#46222](https://github.com/vllm-project/vllm/pull/46222) | [ROCm] [Bugfix] Bugfix ROCm Sparse Indexer | @tjtanaa | merged | 2026-06-20 | 2026-06-20 |

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-07-15T09:47:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#31313](https://github.com/sgl-project/sglang/pull/31313) | [diffusion] test: fix GLM-Image AR model-path to resolve loc... | @kangwangamd | open | 2026-07-15 | 2026-07-15 |
| [#30506](https://github.com/sgl-project/sglang/pull/30506) | [AMD] Disable DSA fused top-k v2 on ROCm for GLM-5.x / DeepS... | @fanxingran | open | 2026-07-08 | 2026-07-15 |
| [#29723](https://github.com/sgl-project/sglang/pull/29723) | [AMD] Add fused all-reduce RMSNorm per-token FP8/MXFP4 quant | @mqhc2020 | draft | 2026-06-30 | 2026-07-15 |
| [#31213](https://github.com/sgl-project/sglang/pull/31213) | [GLM-5.2] Keep GlmMoeDsa MoE e_score_correction_bias in fp32 | @JohnQinAMD | open | 2026-07-14 | 2026-07-15 |
| [#31214](https://github.com/sgl-project/sglang/pull/31214) | [ROCm] Fix EAGLE spec-decode verify silently sampling greedy... | @JohnQinAMD | open | 2026-07-14 | 2026-07-15 |
| [#27141](https://github.com/sgl-project/sglang/pull/27141) | [ROCm] Support radix-cache with mamba-extra-buffer for Qwen3... | @ntgiang71096 | closed | 2026-06-03 | 2026-07-15 |
| [#30273](https://github.com/sgl-project/sglang/pull/30273) | [XPU] Enable breakable prefill CUDA graph on XPU | @rahulvijayaraghavan | open | 2026-07-06 | 2026-07-15 |
| [#30096](https://github.com/sgl-project/sglang/pull/30096) | [DFLASH] Support grammar-constrained decoding in speculative... | @hsthe29 | open | 2026-07-04 | 2026-07-15 |
| [#31291](https://github.com/sgl-project/sglang/pull/31291) | [AMD] DeepSeek-V3.2: disable top-k v2 on rocm (unblock stage... | @yctseng0211 | open | 2026-07-15 | 2026-07-15 |
| [#30359](https://github.com/sgl-project/sglang/pull/30359) | [AMD] Enable mamba-extra-buffer for Qwen3.5 on ROCm | @bingxche | open | 2026-07-07 | 2026-07-15 |
| [#31307](https://github.com/sgl-project/sglang/pull/31307) | [Kernel] Fill non-CUDA coverage: HIP (aiter/rocm-triton) + A... | @BBuf | open | 2026-07-15 | 2026-07-15 |
| [#29633](https://github.com/sgl-project/sglang/pull/29633) | [AMD][Bugfix] Mamba radix cache: avoid the degenerate single... | @ntgiang71096 | open | 2026-06-29 | 2026-07-15 |
| [#30105](https://github.com/sgl-project/sglang/pull/30105) | [AMD][Spec] Fix aiter GQA packing + split-KV routing in NEXT... | @hsthe29 | open | 2026-07-04 | 2026-07-15 |
| [#14194](https://github.com/sgl-project/sglang/pull/14194) | [feature] implement dcp for deepseek_v2 | @staugust | merged | 2025-12-01 | 2026-07-15 |
| [#31300](https://github.com/sgl-project/sglang/pull/31300) | [Build] Add srt_empty extra group for device-agnostic instal... | @yixiaodapeng | open | 2026-07-15 | 2026-07-15 |
| [#31292](https://github.com/sgl-project/sglang/pull/31292) | [Kernel] Decouple KernelBackend from device + device-based C... | @BBuf | open | 2026-07-15 | 2026-07-15 |
| [#26411](https://github.com/sgl-project/sglang/pull/26411) | [Bugfix][HiCache] measure load-back duration with CUDA event... | @vuuihc | open | 2026-05-26 | 2026-07-15 |
| [#30469](https://github.com/sgl-project/sglang/pull/30469) | [AMD] Enable MLA DCP for aiter backend | @billishyahao | open | 2026-07-08 | 2026-07-15 |
| [#28666](https://github.com/sgl-project/sglang/pull/28666) | [AMD] Fuse shared_expert_gate GEMV into the MoE append kerne... | @yichiche | open | 2026-06-18 | 2026-07-15 |
| [#25763](https://github.com/sgl-project/sglang/pull/25763) | [Feature] Support DeepSeek-V4 Wint4Abf16 and Win4Afp8. | @yuyu5333 | open | 2026-05-19 | 2026-07-15 |
| [#31297](https://github.com/sgl-project/sglang/pull/31297) | [jit_kernel] Default JIT builds to arch-specific target on H... | @jessiewei7 | open | 2026-07-15 | 2026-07-15 |
| [#30964](https://github.com/sgl-project/sglang/pull/30964) | [AMD] Support DeepSeek V4 DSpark on AMD HIP platform | @At1a8 | open | 2026-07-13 | 2026-07-15 |
| [#23795](https://github.com/sgl-project/sglang/pull/23795) | :sparkles: [llm][npu][quant] Add W4A4 MXFP4 quantization sup... | @TallMessiWu | open | 2026-04-27 | 2026-07-15 |
| [#30024](https://github.com/sgl-project/sglang/pull/30024) | perf(sgl-kernel): default block_quota=16 for MLA page_first ... | @TianDi101 | open | 2026-07-03 | 2026-07-15 |
| [#24959](https://github.com/sgl-project/sglang/pull/24959) | XPU: Enable GLM5.1 (GlmMoeDsaForCausalLM) DSA Attention | @Xia-Weiwen | open | 2026-05-11 | 2026-07-15 |
| [#31038](https://github.com/sgl-project/sglang/pull/31038) | [XPU] Route topk_sigmoid and topk_softmax to AOT sgl-kernel-... | @arathi-hlab | open | 2026-07-13 | 2026-07-15 |
| [#30651](https://github.com/sgl-project/sglang/pull/30651) | cookbook(deepseek-v4): add MORI disagg backend for AMD + bum... | @ChangLiu0709 | merged | 2026-07-09 | 2026-07-15 |
| [#23515](https://github.com/sgl-project/sglang/pull/23515) | [Disagg] Layer-pipelined KV transfer: overlap RDMA with GPU ... | @michael7193 | open | 2026-04-23 | 2026-07-15 |
| [#31137](https://github.com/sgl-project/sglang/pull/31137) | [AMD] sgl-kernel: enable gfx1151 (RDNA3.5 / Strix Halo) for ... | @ankith117 | open | 2026-07-14 | 2026-07-15 |
| [#31122](https://github.com/sgl-project/sglang/pull/31122) | [Docs] Add AMD-specific HiCache config for DeepSeek V4 playg... | @seungrokj | open | 2026-07-14 | 2026-07-15 |
| [#28695](https://github.com/sgl-project/sglang/pull/28695) | [GDN] Support ReplaySSM Ring Spec-Verify | @yuan-luo | open | 2026-06-19 | 2026-07-15 |
| [#31237](https://github.com/sgl-project/sglang/pull/31237) | [not to merge] fix: fall back to no_buffer mamba radix cache... | @michaelzhang-ai | open | 2026-07-14 | 2026-07-15 |
| [#25663](https://github.com/sgl-project/sglang/pull/25663) | [MoE Refactor] [NPU] Refactor Ascend MoE implementation to r... | @OrangeRedeng | open | 2026-05-18 | 2026-07-15 |
| [#29432](https://github.com/sgl-project/sglang/pull/29432) | Fix bookkeeping fields not encapsulated with real allocation... | @fzyzcjy | merged | 2026-06-26 | 2026-07-15 |
| [#31290](https://github.com/sgl-project/sglang/pull/31290) | [Intel XPU] Fix DP-attention `reduce_scatterv` / `all_gather... | @Amrutha-M05 | open | 2026-07-15 | 2026-07-15 |
| [#30677](https://github.com/sgl-project/sglang/pull/30677) | Avoid relaying per-step outputs through ScheduleBatch fields... | @fzyzcjy | merged | 2026-07-09 | 2026-07-15 |
| [#30535](https://github.com/sgl-project/sglang/pull/30535) | [hicache]: add  mamba_io_kernel | @jojoakm | open | 2026-07-08 | 2026-07-15 |
| [#30238](https://github.com/sgl-project/sglang/pull/30238) | [AMD] Support two batch overlap with MTP on DeepSeekV4 | @At1a8 | open | 2026-07-06 | 2026-07-15 |
| [#30206](https://github.com/sgl-project/sglang/pull/30206) | fix(server): capture legal multi-request prefill CUDA graph ... | @nvpohanh | open | 2026-07-06 | 2026-07-15 |
| [#31180](https://github.com/sgl-project/sglang/pull/31180) | [mem_cache][8/N] refactor: move MambaPoolHost to pool_host.m... | @alphabetc1 | open | 2026-07-14 | 2026-07-15 |
| [#30929](https://github.com/sgl-project/sglang/pull/30929) | Support decode radix cache on DeepSeek-V4 (hybrid-SWA, SWA-t... | @AMD-yanfeiwang | open | 2026-07-12 | 2026-07-15 |
| [#30622](https://github.com/sgl-project/sglang/pull/30622) | [AMD] Remove ROCm page_first+kernel -> layer_first HiCache f... | @AMD-yanfeiwang | merged | 2026-07-09 | 2026-07-15 |
| [#30407](https://github.com/sgl-project/sglang/pull/30407) | [AMD] [Fix] Skip split-KV EAGLE-verify fast path for MLA to ... | @yichiche | open | 2026-07-07 | 2026-07-15 |
| [#30706](https://github.com/sgl-project/sglang/pull/30706) | feat(moriep): add fp4 combine dtype (SGLANG_MORI_COMBINE_DTY... | @karverma-amd | open | 2026-07-09 | 2026-07-15 |
| [#29508](https://github.com/sgl-project/sglang/pull/29508) | [Bugfix] fix quickreduce acc error in cudagraph mode | @haoyangli0109 | merged | 2026-06-27 | 2026-07-15 |
| [#18717](https://github.com/sgl-project/sglang/pull/18717) | Adding missing test dependencies to all pyproject.toml | @singhalshubham03 | open | 2026-02-12 | 2026-07-15 |
| [#28040](https://github.com/sgl-project/sglang/pull/28040) | [Intel GPU] DeepSeek V4 8/N: Add torch implementation for fu... | @polisettyvarma | draft | 2026-06-12 | 2026-07-15 |
| [#27790](https://github.com/sgl-project/sglang/pull/27790) | [Intel GPU] DeepSeek V4 4/N: Add torch implementation for fu... | @polisettyvarma | draft | 2026-06-10 | 2026-07-15 |
| [#31263](https://github.com/sgl-project/sglang/pull/31263) | [diffusion] post_training: run weight update under torch.inf... | @kangwangamd | open | 2026-07-15 | 2026-07-15 |
| [#28046](https://github.com/sgl-project/sglang/pull/28046) | [Intel GPU] DeepSeek V4 9/N: use sgl-kernel implementation o... | @polisettyvarma | merged | 2026-06-12 | 2026-07-15 |
| [#27873](https://github.com/sgl-project/sglang/pull/27873) | [Intel GPU] DeepSeek V4 5/N: Use sgl-kernel implementation o... | @polisettyvarma | merged | 2026-06-11 | 2026-07-15 |
| [#30792](https://github.com/sgl-project/sglang/pull/30792) | [Kernel] Migrate DSA + DSV4 attention kernels to sglang.kern... | @BBuf | merged | 2026-07-10 | 2026-07-15 |
| [#31262](https://github.com/sgl-project/sglang/pull/31262) | [Cherry-pick to release/v0.5.15] [AMD] Pin cmake==4.3.4 in R... | @Kangyan-Zhou | merged | 2026-07-15 | 2026-07-15 |
| [#31258](https://github.com/sgl-project/sglang/pull/31258) | [AMD] Update qwen3.5 cookbook | @1am9trash | merged | 2026-07-15 | 2026-07-15 |
| [#31260](https://github.com/sgl-project/sglang/pull/31260) | Stabilize GLM DSA config on ROCm | @tanth47 | draft | 2026-07-15 | 2026-07-15 |
| [#31259](https://github.com/sgl-project/sglang/pull/31259) | [AMD] Default RDNA (gfx1151 / Strix Halo) to the Triton atte... | @ankith117 | open | 2026-07-15 | 2026-07-15 |
| [#31131](https://github.com/sgl-project/sglang/pull/31131) | [AMD] Fix DSV4 JIT build on rocm  | @yctseng0211 | open | 2026-07-14 | 2026-07-15 |
| [#28716](https://github.com/sgl-project/sglang/pull/28716) | Feat/xpu jit kernel support | @roopaksrivastav | open | 2026-06-19 | 2026-07-15 |
| [#29677](https://github.com/sgl-project/sglang/pull/29677) | [AMD] perf: compact Triton extend-attention for ragged prefi... | @valechen | open | 2026-06-29 | 2026-07-15 |
| [#31246](https://github.com/sgl-project/sglang/pull/31246) | [Fix] MoE: run torch.compile sum-reduce under no_grad to unb... | @ankith117 | open | 2026-07-15 | 2026-07-15 |
| [#31088](https://github.com/sgl-project/sglang/pull/31088) | [AMD] Register 3 CPU-bound / triton unit + light-integration... | @michaelzhang-ai | open | 2026-07-14 | 2026-07-15 |
| [#29202](https://github.com/sgl-project/sglang/pull/29202) | [AMD] Enable draft-extend CUDA graph and reduce bubble for M... | @RolaoDenthu | open | 2026-06-24 | 2026-07-14 |
| [#31068](https://github.com/sgl-project/sglang/pull/31068) | [AMD] ci: detect and recover hung GPUs in MI35x pre-flight | @michaelzhang-ai | open | 2026-07-13 | 2026-07-14 |
| [#28734](https://github.com/sgl-project/sglang/pull/28734) | [AMD] Fix Load and Inference of MLA models with Quark PTPC F... | @ColinZ22 | open | 2026-06-19 | 2026-07-14 |
| [#30619](https://github.com/sgl-project/sglang/pull/30619) | [NPU] Fix CPU device for node topology probe | @stellaxcpeng | merged | 2026-07-09 | 2026-07-14 |
| [#27063](https://github.com/sgl-project/sglang/pull/27063) | [AMD] Optimize gpt-oss-120B performance | @kkHuang-amd | merged | 2026-06-02 | 2026-07-14 |
| [#29352](https://github.com/sgl-project/sglang/pull/29352) | [bug2] skip swa recovery on locked full kv | @yaof20 | merged | 2026-06-26 | 2026-07-14 |
| [#28612](https://github.com/sgl-project/sglang/pull/28612) | Optimize C128 state pool allocation using request state pool | @zhangxiaolei123456 | merged | 2026-06-18 | 2026-07-14 |
| [#31143](https://github.com/sgl-project/sglang/pull/31143) | [AMD] jit_kernel: complete utils.cuh HIP-compat (cudaDevAttr... | @ankith117 | merged | 2026-07-14 | 2026-07-14 |
| [#31147](https://github.com/sgl-project/sglang/pull/31147) | Extract kv cache dtype configuration into mem_cache | @fzyzcjy | merged | 2026-07-14 | 2026-07-14 |
| [#30786](https://github.com/sgl-project/sglang/pull/30786) | [Kernel] Migrate scattered MoE kernels to sglang.kernels (RF... | @BBuf | merged | 2026-07-10 | 2026-07-14 |
| [#23754](https://github.com/sgl-project/sglang/pull/23754) | [Quantization] add humming quantization kernel | @jinzhen-lin | merged | 2026-04-26 | 2026-07-14 |
| [#28964](https://github.com/sgl-project/sglang/pull/28964) | Remove legacy Sphinx docs/ and finish the Mintlify cutover | @zijiexia | merged | 2026-06-22 | 2026-07-13 |
| [#31056](https://github.com/sgl-project/sglang/pull/31056) | Fix MockDSV4ModelRunner missing spec_algorithm | @Jialin | merged | 2026-07-13 | 2026-07-13 |
| [#31058](https://github.com/sgl-project/sglang/pull/31058) | chore: bump docs install version to 0.5.15 | @sglang-bot | merged | 2026-07-13 | 2026-07-13 |
| [#28113](https://github.com/sgl-project/sglang/pull/28113) | [Platform] Route pin memory availability through current_pla... | @N3u0ns | merged | 2026-06-13 | 2026-07-13 |
| [#30784](https://github.com/sgl-project/sglang/pull/30784) | [Kernel] Migrate scattered quantization kernels to sglang.ke... | @BBuf | merged | 2026-07-10 | 2026-07-13 |
| [#30942](https://github.com/sgl-project/sglang/pull/30942) | [AMD] Pin cmake==4.3.4 in ROCm Dockerfile to fix MoRI gtest_... | @yctseng0211 | merged | 2026-07-12 | 2026-07-13 |
| [#30951](https://github.com/sgl-project/sglang/pull/30951) | [PD] Improve optimistic prefill | @cctry | merged | 2026-07-12 | 2026-07-12 |
| [#30580](https://github.com/sgl-project/sglang/pull/30580) | Lazy load TileLang MHC kernels | @mmangkad | merged | 2026-07-09 | 2026-07-12 |
| [#29417](https://github.com/sgl-project/sglang/pull/29417) | [AMD] Enable unified-KV HiCache on DeepSeek-V4 | @1am9trash | merged | 2026-06-26 | 2026-07-11 |
| [#30857](https://github.com/sgl-project/sglang/pull/30857) | [Spec] Extract shared draft worker construction and generali... | @hnyls2002 | merged | 2026-07-11 | 2026-07-11 |
| [#30627](https://github.com/sgl-project/sglang/pull/30627) | Fix CuTe DSL DSA paged MQA export | @mmangkad | merged | 2026-07-09 | 2026-07-11 |
| [#30121](https://github.com/sgl-project/sglang/pull/30121) | [Apple Silicon] [CI] Move the MLX lane to the check-changes ... | @jlee5814 | merged | 2026-07-04 | 2026-07-11 |
| [#30829](https://github.com/sgl-project/sglang/pull/30829) | [eplb] chunk expert-weight P2P on CUDA to prevent NCCL rebal... | @luccafong | merged | 2026-07-10 | 2026-07-11 |
| [#27546](https://github.com/sgl-project/sglang/pull/27546) | fix(pd): do not abort when req.disagg_prefill_dp_rank is use... | @lawrence-harmonic | merged | 2026-06-08 | 2026-07-11 |
| [#28715](https://github.com/sgl-project/sglang/pull/28715) | [minimax-m3] Split 4/4: model + VL + glue + function-call + ... | @JustinTong0323 | merged | 2026-06-19 | 2026-07-11 |
| [#25164](https://github.com/sgl-project/sglang/pull/25164) | amd/deepseek_v4 integration 22/N enable SGLANG_OPT_DPSK_V4_R... | @XinyuJiangCMU | merged | 2026-05-13 | 2026-07-10 |
| [#30587](https://github.com/sgl-project/sglang/pull/30587) | [AMD-miles] Bump miles rocm700-mi35x base image and migrate ... | @JessicaJiang-123 | merged | 2026-07-09 | 2026-07-10 |
| [#30044](https://github.com/sgl-project/sglang/pull/30044) | [Kernel] Introduce sglang.kernels namespace and migrate scat... | @BBuf | merged | 2026-07-03 | 2026-07-10 |
| [#30754](https://github.com/sgl-project/sglang/pull/30754) | Seed sgl-kernel topk sigmoid tests on all backends | @mmangkad | merged | 2026-07-10 | 2026-07-10 |
| [#30729](https://github.com/sgl-project/sglang/pull/30729) | [Cherry-pick to release/v0.5.15] [AMD] Fix DeepSeekV4 server... | @Kangyan-Zhou | merged | 2026-07-10 | 2026-07-10 |
| [#29408](https://github.com/sgl-project/sglang/pull/29408) | Avoid implicit field-based side channel in Scheduler plannin... | @fzyzcjy | merged | 2026-06-26 | 2026-07-10 |
| [#30645](https://github.com/sgl-project/sglang/pull/30645) | [DSA] Fix top-k v2 emitting invalid indices under tie overfl... | @DarkSharpness | merged | 2026-07-09 | 2026-07-09 |
| [#30339](https://github.com/sgl-project/sglang/pull/30339) | [AMD] Fix stale SWA ring buffer on radix prefix reuse for De... | @amd-danli103 | merged | 2026-07-07 | 2026-07-09 |
| [#28788](https://github.com/sgl-project/sglang/pull/28788) | [AMD] Fix int32 offset overflow in Triton decode-attention k... | @yuankaichen-amd | merged | 2026-06-20 | 2026-07-09 |
| [#29479](https://github.com/sgl-project/sglang/pull/29479) | [AMD] fix dsv4 indexer dtype dispatch on gfx950 | @billishyahao | merged | 2026-06-27 | 2026-07-09 |
| [#30629](https://github.com/sgl-project/sglang/pull/30629) | [NPU]Fix npu import cutlass error | @zhaozx-cn | merged | 2026-07-09 | 2026-07-09 |
| [#29729](https://github.com/sgl-project/sglang/pull/29729) | Add opt-in SGLANG_ROPE_CACHE_FP32 to keep RoPE cache in fp32... | @zx3xyy | merged | 2026-06-30 | 2026-07-09 |
| [#30557](https://github.com/sgl-project/sglang/pull/30557) | [AMD] Fix AITER custom all-gather CUDA-graph capture crash u... | @JessicaJiang-123 | merged | 2026-07-08 | 2026-07-09 |
| [#28534](https://github.com/sgl-project/sglang/pull/28534) | [AMD] Enable JIT staged HiCache write-back and fix CPU-index... | @AMD-yanfeiwang | merged | 2026-06-17 | 2026-07-09 |
| [#30235](https://github.com/sgl-project/sglang/pull/30235) | [Intel GPU] xpu_piecewise: fall back to eager when PCG captu... | @ckvermaAI | merged | 2026-07-06 | 2026-07-09 |
| [#30307](https://github.com/sgl-project/sglang/pull/30307) | [AMD] add dedicated jit-kernel-benchmark-test-amd stage + re... | @michaelzhang-ai | merged | 2026-07-06 | 2026-07-09 |
| [#22416](https://github.com/sgl-project/sglang/pull/22416) | [Apple Silicon] [MLX] MLX decode partial overlap scheduling ... | @changminbark | merged | 2026-04-09 | 2026-07-09 |
| [#30265](https://github.com/sgl-project/sglang/pull/30265) | [AMD] Fix GLM-5.2 MTP Quark excludes | @wangjiaxin99 | merged | 2026-07-06 | 2026-07-08 |
| [#30446](https://github.com/sgl-project/sglang/pull/30446) | [AMD] Register 2 CPU-bound 1-GPU tests (phase_checker, scrip... | @michaelzhang-ai | merged | 2026-07-08 | 2026-07-08 |
| [#30212](https://github.com/sgl-project/sglang/pull/30212) | [AMD] Register 3 ROCm-portable JIT kernel tests for AMD CI | @michaelzhang-ai | merged | 2026-07-06 | 2026-07-08 |
| [#29275](https://github.com/sgl-project/sglang/pull/29275) | Fix gfx95 bpreshuffle FP8 activation scale layout | @hdt98 | merged | 2026-06-25 | 2026-07-08 |
| [#28658](https://github.com/sgl-project/sglang/pull/28658) | [AMD] Fuse shared-expert sigmoid + bf16->fp32 cast into the ... | @yichiche | merged | 2026-06-18 | 2026-07-08 |
| [#30415](https://github.com/sgl-project/sglang/pull/30415) | Enable RDNA3/4 (gfx1100/gfx1201) for ROCm kernels | @nemanjaudovic | merged | 2026-07-07 | 2026-07-08 |
| [#30374](https://github.com/sgl-project/sglang/pull/30374) | [AMD] Fix DeepSeekV4 server cutlass error | @At1a8 | merged | 2026-07-07 | 2026-07-07 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-07-15T09:47:07Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#10871](https://github.com/triton-lang/triton/pull/10871) | [AMD] emulate descriptor reduce on GFX1250 | @zwu-2025 | draft | 2026-07-14 | 2026-07-15 |
| [#10870](https://github.com/triton-lang/triton/pull/10870) | [AMD][gfx1250] Error out for non-zero padding descriptor | @zwu-2025 | merged | 2026-07-14 | 2026-07-15 |
| [#10759](https://github.com/triton-lang/triton/pull/10759) | [AMD] Form masked regions for equivalent masked loads/stores | @efric | open | 2026-06-30 | 2026-07-15 |
| [#10564](https://github.com/triton-lang/triton/pull/10564) | [AMD] Pipeline TDM descriptor stores and scatters in loops | @jerryyin | merged | 2026-06-10 | 2026-07-15 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add gfx1250 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-07-15 |
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD] Emit actionable errors when a direct-to-LDS copy canno... | @vmalepati1 | open | 2026-07-14 | 2026-07-15 |
| [#10813](https://github.com/triton-lang/triton/pull/10813) | [AMD] gfx1250 proton clock instructions | @ZelboK | open | 2026-07-07 | 2026-07-15 |
| [#10885](https://github.com/triton-lang/triton/pull/10885) | [AMD][DRAFT] test out if still broken  | @ZelboK | open | 2026-07-14 | 2026-07-14 |
| [#10628](https://github.com/triton-lang/triton/pull/10628) | [Gluon][AMD][gfx1250] Add explicit fused TDM copy ops | @jungpark-mlir | merged | 2026-06-16 | 2026-07-14 |
| [#10878](https://github.com/triton-lang/triton/pull/10878) | [AMD] Add RDNA4m target | @ptrojahn | draft | 2026-07-14 | 2026-07-14 |
| [#10874](https://github.com/triton-lang/triton/pull/10874) | [AMD] Add tests for compiler fence in AtomicRMWOp lowering o... | @tyb0807 | open | 2026-07-14 | 2026-07-14 |
| [#10866](https://github.com/triton-lang/triton/pull/10866) | [AMD] f16_gemm_gfx1250.py support multi-cta | @yangshuxin | merged | 2026-07-13 | 2026-07-14 |
| [#10868](https://github.com/triton-lang/triton/pull/10868) | [AMD][CI] Temporarily Switch to a new gfx950 pool | @antiagainst | merged | 2026-07-14 | 2026-07-14 |
| [#10635](https://github.com/triton-lang/triton/pull/10635) | [AMD] Fix direct-to-LDS staging for undersized tiles | @justinrosner | draft | 2026-06-16 | 2026-07-14 |
| [#10840](https://github.com/triton-lang/triton/pull/10840) | [AMD] Warp-pipeline: keep each stage's memory ops in program... | @zhanglx13 | merged | 2026-07-10 | 2026-07-13 |
| [#10747](https://github.com/triton-lang/triton/pull/10747) | [AMD] Fix fp8 e4m3fnuz/e5m2fnuz NaN (0x80) silently decoding... | @Hughshine | merged | 2026-06-29 | 2026-07-12 |
| [#10810](https://github.com/triton-lang/triton/pull/10810) | [AMD][TRITON_KERNELS] Improve MXFP4 matmul_ogs config on RDN... | @leeliu103 | merged | 2026-07-06 | 2026-07-12 |
| [#10846](https://github.com/triton-lang/triton/pull/10846) | [AMD][NFC] Remove incorrect fp32->fp8 conversion via f16 int... | @AlexAUT | merged | 2026-07-10 | 2026-07-10 |
| [#10845](https://github.com/triton-lang/triton/pull/10845) | [AMD][PROTON] Add dependency on `external_correlation.h` and... | @Jokeren | merged | 2026-07-10 | 2026-07-10 |
| [#10842](https://github.com/triton-lang/triton/pull/10842) | [AMD][BACKEND] Fix compile crash in lowering of f32->bf16 RT... | @AlexAUT | merged | 2026-07-10 | 2026-07-10 |
| [#10194](https://github.com/triton-lang/triton/pull/10194) | [AMD] Fixing mi350 BlockPingpong update waits | @jerryyin | merged | 2026-05-01 | 2026-07-09 |
| [#10809](https://github.com/triton-lang/triton/pull/10809) | [AMD] Rewrite gluon partition layout derivation | @plognjen | merged | 2026-07-06 | 2026-07-09 |
| [#10824](https://github.com/triton-lang/triton/pull/10824) | [AMD] Update mxfp fa example | @borontion | merged | 2026-07-09 | 2026-07-09 |
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-07-08 |
| [#10755](https://github.com/triton-lang/triton/pull/10755) | [AMD] Fix atomic_poll timeout crash on gfx11/gfx12 | @saeid-rostami | merged | 2026-06-30 | 2026-07-07 |
| [#10763](https://github.com/triton-lang/triton/pull/10763) | [AMD] Enable local prefetch schedule in pipeliner | @plognjen | merged | 2026-06-30 | 2026-07-07 |
| [#10804](https://github.com/triton-lang/triton/pull/10804) | [AMD] CanonicalizePointers: fix asymmetric select on tensor ... | @kashif | merged | 2026-07-05 | 2026-07-06 |
| [#10721](https://github.com/triton-lang/triton/pull/10721) | [AMD][gfx1250] Refine control knobs for CodeGen | @antiagainst | merged | 2026-06-25 | 2026-07-06 |
| [#9414](https://github.com/triton-lang/triton/pull/9414) | [AMD] Update gfx1250 MXFP FA example kernel | @borontion | merged | 2026-02-09 | 2026-07-06 |
| [#9545](https://github.com/triton-lang/triton/pull/9545) | [AMD] Fix scale layouts for batched WMMA scaled  | @borontion | merged | 2026-02-23 | 2026-07-06 |
| [#9758](https://github.com/triton-lang/triton/pull/9758) | [AMD] Use lds reduction for mxfp fa example | @borontion | merged | 2026-03-18 | 2026-07-06 |
| [#9788](https://github.com/triton-lang/triton/pull/9788) | [AMD][GLUON] Fix deduce scale factor when using scalar value | @borontion | merged | 2026-03-20 | 2026-07-06 |
| [#9813](https://github.com/triton-lang/triton/pull/9813) | [AMD] Use TDM store for mxfp fa example | @borontion | merged | 2026-03-23 | 2026-07-06 |
| [#9879](https://github.com/triton-lang/triton/pull/9879) | [AMD] Support MQA for prefill in mxfp fa example | @borontion | merged | 2026-03-28 | 2026-07-06 |
| [#10793](https://github.com/triton-lang/triton/pull/10793) | [PROTON] Skip AMD tests in periodic flushing due to current ... | @Jokeren | merged | 2026-07-03 | 2026-07-03 |
| [#8264](https://github.com/triton-lang/triton/pull/8264) | [AMD] Turn off cache-swizzling for the time being. | @yangshuxin | merged | 2025-09-23 | 2026-07-02 |
| [#10725](https://github.com/triton-lang/triton/pull/10725) | [AMD] Add schedule hint for warp-pipeline backedge barrier p... | @willghatch | open | 2026-06-26 | 2026-07-01 |
| [#10733](https://github.com/triton-lang/triton/pull/10733) | [AMD] Fix batched WMMA scale layout | @alefimov-amd | open | 2026-06-26 | 2026-06-26 |
| [#10710](https://github.com/triton-lang/triton/pull/10710) | [AMD] Adding lds prefetch pass to amd compiler path | @guacamoleo | open | 2026-06-24 | 2026-06-25 |
| [#10720](https://github.com/triton-lang/triton/pull/10720) | [release/3.8.x] Cherry pick AMD buffer soffset optimization ... | @warrendeng | merged | 2026-06-25 | 2026-06-25 |
| [#10715](https://github.com/triton-lang/triton/pull/10715) | [AMD] Revert AMD buffer soffset optimization series | @antiagainst | merged | 2026-06-25 | 2026-06-25 |
| [#10625](https://github.com/triton-lang/triton/pull/10625) | Upgrade AMD CI to PyTorch 2.10 | @roman-openai | merged | 2026-06-16 | 2026-06-24 |
| [#10702](https://github.com/triton-lang/triton/pull/10702) | [AMD] Guard detached blocks in uniformity fallback | @panditsa | merged | 2026-06-23 | 2026-06-24 |
| [#10701](https://github.com/triton-lang/triton/pull/10701) | [AMD] Materialize fat pointers for buffer ops in canonicaliz... | @vmalepati1 | open | 2026-06-22 | 2026-06-23 |
| [#10483](https://github.com/triton-lang/triton/pull/10483) | [AMD] Prove buffer-load contiguity along LinearLayout regist... | @panditsa | draft | 2026-06-04 | 2026-06-22 |
| [#10694](https://github.com/triton-lang/triton/pull/10694) | [AMD] Use operand-major LDS layout for FMA dot operands | @pabloantoniom | draft | 2026-06-22 | 2026-06-22 |
| [#6714](https://github.com/triton-lang/triton/pull/6714) | [DRAFT][AMD][Backend] Enable 2:4 Structured Sparsity for Tri... | @SamGinzburg | draft | 2025-05-05 | 2026-06-17 |
| [#7721](https://github.com/triton-lang/triton/pull/7721) | [WIP] [AMD] Investigate custom epilogue peeling | @PMylon | draft | 2025-07-31 | 2026-06-17 |
| [#7756](https://github.com/triton-lang/triton/pull/7756) | [AMD] Added initial support for mxfp6 data type | @ravil-mobile | draft | 2025-08-04 | 2026-06-17 |
| [#8198](https://github.com/triton-lang/triton/pull/8198) | [AMD][Draft] Fix make test failure in AMD backend | @jwu10003 | draft | 2025-09-16 | 2026-06-17 |
| [#8500](https://github.com/triton-lang/triton/pull/8500) | [AMD][Draft] Optimize reduce waves layout | @Liang-jianhao97 | draft | 2025-10-21 | 2026-06-17 |
| [#8449](https://github.com/triton-lang/triton/pull/8449) | [AMD][Draft] Eliminate redundant matmul by adjusting HeadDot... | @the-strawhat | open | 2025-10-16 | 2026-06-17 |
| [#8304](https://github.com/triton-lang/triton/pull/8304) | [AMD] Support float8_e5m2 in tutorials/03-matrix-multiplicat... | @matthiasdiener | open | 2025-09-26 | 2026-06-17 |
| [#8450](https://github.com/triton-lang/triton/pull/8450) | [AMD][Draft] Implement implicit layout conversion for DotOp ... | @the-strawhat | open | 2025-10-16 | 2026-06-17 |
| [#9533](https://github.com/triton-lang/triton/pull/9533) | [AMD] Update default to `block_m=16` in `make_default_opt_fl... | @micah-wil | draft | 2026-02-20 | 2026-06-17 |
| [#9292](https://github.com/triton-lang/triton/pull/9292) | [AMD] Fixing WMMA.f32 conversion | @ravil-mobile | draft | 2026-01-23 | 2026-06-17 |
| [#8702](https://github.com/triton-lang/triton/pull/8702) | [AMD]: intra warp atomic_add experiment | @xiaohuguo2023 | draft | 2025-11-12 | 2026-06-17 |
| [#9562](https://github.com/triton-lang/triton/pull/9562) | Add maxnreg support for ROCm/AMD backend | @fsx950223 | open | 2026-02-25 | 2026-06-17 |
| [#9113](https://github.com/triton-lang/triton/pull/9113) | [AMD] Use fine-grained lgkmcnt for better compute-memory ove... | @vivienfanghuagood | draft | 2025-12-25 | 2026-06-17 |
| [#9195](https://github.com/triton-lang/triton/pull/9195) | [AMD][mxfp4] ttg::Fp4ToFpOp add support for FP4 upcast to FP... | @jwu10003 | draft | 2026-01-12 | 2026-06-17 |

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-07-15T09:47:10Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4977](https://github.com/ROCm/AMDMIGraphX/pull/4977) | symbolic reshape ops | @shivadbhavsar | open | 2026-06-16 | 2026-07-15 |
| [#5060](https://github.com/ROCm/AMDMIGraphX/pull/5060) | Update torchkit to support full converter refactor | @shivadbhavsar | open | 2026-07-13 | 2026-07-15 |
| [#5014](https://github.com/ROCm/AMDMIGraphX/pull/5014) | Hoist and horizontal dot | @TedThemistokleous | open | 2026-06-25 | 2026-07-15 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-07-15 |
| [#5068](https://github.com/ROCm/AMDMIGraphX/pull/5068) | fix reverse op bug | @shivadbhavsar | open | 2026-07-15 | 2026-07-15 |
| [#5066](https://github.com/ROCm/AMDMIGraphX/pull/5066) | [AIMIGRAPHX-1164] Replace device ops inserted during `compil... | @eddieliao | draft | 2026-07-15 | 2026-07-15 |
| [#5067](https://github.com/ROCm/AMDMIGraphX/pull/5067) | [AIMIGRAPHX-1100] Add no-rebuild callback for verify | @eddieliao | draft | 2026-07-15 | 2026-07-15 |
| [#5056](https://github.com/ROCm/AMDMIGraphX/pull/5056) | Tune max block size | @pfultz2 | open | 2026-07-10 | 2026-07-15 |
| [#5006](https://github.com/ROCm/AMDMIGraphX/pull/5006) | [AIMIGRAPHX-1151] Add pytest bridge for unit tests | @eddieliao | open | 2026-06-23 | 2026-07-15 |
| [#5040](https://github.com/ROCm/AMDMIGraphX/pull/5040) | Auto select NCHW/NHWC layout | @pfultz2 | open | 2026-07-07 | 2026-07-15 |
| [#5065](https://github.com/ROCm/AMDMIGraphX/pull/5065) | Add toggle for wavefront size to cross compilation options | @bdevorem | draft | 2026-07-14 | 2026-07-15 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | draft | 2026-04-08 | 2026-07-14 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-07-14 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | open | 2026-02-12 | 2026-07-14 |
| [#5063](https://github.com/ROCm/AMDMIGraphX/pull/5063) | SSD static sidestep | @CharlieL7 | draft | 2026-07-14 | 2026-07-14 |
| [#5043](https://github.com/ROCm/AMDMIGraphX/pull/5043) | Symbolic attr support for slice | @shivadbhavsar | open | 2026-07-07 | 2026-07-14 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-07-14 |
| [#4911](https://github.com/ROCm/AMDMIGraphX/pull/4911) | Reduce dynamic-shape compile cost and select_module dispatch... | @chun-wan | open | 2026-05-26 | 2026-07-14 |
| [#5059](https://github.com/ROCm/AMDMIGraphX/pull/5059) | if miopen/hipblas/rocblas are not enabled, send gemms to roc... | @bdevorem | open | 2026-07-13 | 2026-07-14 |
| [#4924](https://github.com/ROCm/AMDMIGraphX/pull/4924) | concat: treat fully-unconstrained dynamic dim as a wildcard | @chun-wan | open | 2026-05-30 | 2026-07-14 |
| [#5061](https://github.com/ROCm/AMDMIGraphX/pull/5061) | Bump rocm-docs-core from 1.36.0 to 1.37.0 in /docs/sphinx | @dependabot[bot] | open | 2026-07-14 | 2026-07-14 |
| [#4999](https://github.com/ROCm/AMDMIGraphX/pull/4999) | NMS: Early exit ref 0 boxes, add tests for 0 and 1 box edge ... | @mvanhorn | open | 2026-06-19 | 2026-07-14 |
| [#4946](https://github.com/ROCm/AMDMIGraphX/pull/4946) | Driver and API updates for using sym shapes | @shivadbhavsar | open | 2026-06-05 | 2026-07-14 |
| [#5026](https://github.com/ROCm/AMDMIGraphX/pull/5026) | Enable mlir attention for yolon12 | @weizhu12-amd | open | 2026-07-01 | 2026-07-14 |
| [#5030](https://github.com/ROCm/AMDMIGraphX/pull/5030) | [AIMIGRAPHX-1163] Add lower_device_ops pass | @eddieliao | open | 2026-07-01 | 2026-07-13 |
| [#4956](https://github.com/ROCm/AMDMIGraphX/pull/4956) | Add support for HipGraph | @pfultz2 | open | 2026-06-11 | 2026-07-13 |
| [#4895](https://github.com/ROCm/AMDMIGraphX/pull/4895) | Use fp16 for convolution on navi | @pfultz2 | draft | 2026-05-19 | 2026-07-13 |
| [#4952](https://github.com/ROCm/AMDMIGraphX/pull/4952) | Bump CI to TheRock 7.13 | @causten | open | 2026-06-10 | 2026-07-13 |
| [#5057](https://github.com/ROCm/AMDMIGraphX/pull/5057) | Bump soupsieve from 2.5 to 2.8.4 in /docs/sphinx | @dependabot[bot] | open | 2026-07-10 | 2026-07-13 |
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-07-12 |
| [#5005](https://github.com/ROCm/AMDMIGraphX/pull/5005) | Leaky relu using max | @pfultz2 | draft | 2026-06-22 | 2026-07-10 |
| [#4734](https://github.com/ROCm/AMDMIGraphX/pull/4734) | Bump onnx from 1.17.0 to 1.21.0 in /tools | @dependabot[bot] | open | 2026-04-02 | 2026-07-10 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-07-09 |
| [#5046](https://github.com/ROCm/AMDMIGraphX/pull/5046) | Fix nonzero for non-standard input layouts | @ikalinic | open | 2026-07-08 | 2026-07-09 |
| [#4835](https://github.com/ROCm/AMDMIGraphX/pull/4835) | Extend problem cache with hardware provenance metadata | @danieyan-amd | open | 2026-04-30 | 2026-07-08 |
| [#5039](https://github.com/ROCm/AMDMIGraphX/pull/5039) | Add opt-in sharing of identical weight literals across progr... | @aditya-dl | open | 2026-07-06 | 2026-07-07 |
| [#5041](https://github.com/ROCm/AMDMIGraphX/pull/5041) | Fix `security_gate` workflow semantics for blocked external ... | @Copilot | draft | 2026-07-07 | 2026-07-07 |
| [#5020](https://github.com/ROCm/AMDMIGraphX/pull/5020) | Add opt-in parallel finalization of independent operations | @aditya-dl | open | 2026-06-29 | 2026-07-07 |
| [#5035](https://github.com/ROCm/AMDMIGraphX/pull/5035) | Onnxruntime Weekly Sync 2026-07-03 | @github-actions[bot] | open | 2026-07-03 | 2026-07-03 |
| [#5033](https://github.com/ROCm/AMDMIGraphX/pull/5033) | MultiHeadAttention with dynamic kv-cache attention | @turneram | draft | 2026-07-02 | 2026-07-02 |
| [#5032](https://github.com/ROCm/AMDMIGraphX/pull/5032) | Dynamic concat gpu support | @turneram | draft | 2026-07-02 | 2026-07-02 |
| [#5031](https://github.com/ROCm/AMDMIGraphX/pull/5031) | Shape op changes for dynamic kv-cache | @turneram | draft | 2026-07-01 | 2026-07-02 |
| [#5023](https://github.com/ROCm/AMDMIGraphX/pull/5023) | Change option name to MIGRAPHX_USE_MSVC_STATIC_RUNTIME | @apwojcik | open | 2026-06-30 | 2026-06-30 |
| [#5019](https://github.com/ROCm/AMDMIGraphX/pull/5019) | Add hipGraph capture/replay for decode eval (gated to fp16) | @aditya-dl | open | 2026-06-29 | 2026-06-29 |
| [#5007](https://github.com/ROCm/AMDMIGraphX/pull/5007) | Fix ref average pooling divisor for count_include_pad with a... | @HamzaIkhurram | open | 2026-06-24 | 2026-06-26 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-06-26 |
| [#4994](https://github.com/ROCm/AMDMIGraphX/pull/4994) | simplify_reshapes: skip find_reshape_dot when it would chang... | @ycastill2-amd | draft | 2026-06-19 | 2026-06-25 |
| [#5008](https://github.com/ROCm/AMDMIGraphX/pull/5008) | Change amdmlss option to be activated via compile option | @Zhaeong | draft | 2026-06-24 | 2026-06-24 |
| [#4931](https://github.com/ROCm/AMDMIGraphX/pull/4931) | Add support for 3d kernel launches | @music-dino | open | 2026-06-02 | 2026-06-24 |
| [#4995](https://github.com/ROCm/AMDMIGraphX/pull/4995) | Copy AMDMLSS PDB file and install AMDMLSS with MIGraphX | @apwojcik | open | 2026-06-19 | 2026-06-22 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | draft | 2026-06-19 | 2026-06-19 |
| [#4998](https://github.com/ROCm/AMDMIGraphX/pull/4998) | Bump CAPI version number for LDS usage estimation function | @justinrosner | draft | 2026-06-19 | 2026-06-19 |
| [#4980](https://github.com/ROCm/AMDMIGraphX/pull/4980) | [ROCM-26203] Modify existing tests to work with pytest | @eddieliao | open | 2026-06-17 | 2026-06-19 |
| [#4992](https://github.com/ROCm/AMDMIGraphX/pull/4992) | adjust_allocation: reallocate undersized aliased output buff... | @ycastill2-amd | open | 2026-06-18 | 2026-06-18 |
| [#4983](https://github.com/ROCm/AMDMIGraphX/pull/4983) | NOT TO BE MERGED: Python script to benchmark mxr files - con... | @ahsan-ca | draft | 2026-06-17 | 2026-06-18 |
| [#4651](https://github.com/ROCm/AMDMIGraphX/pull/4651) | Added support to set mlir defaults | @pnikolic-amd | open | 2026-03-04 | 2026-06-17 |
| [#4770](https://github.com/ROCm/AMDMIGraphX/pull/4770) | Adding compilation mode | @pnikolic-amd | open | 2026-04-09 | 2026-06-17 |
| [#4961](https://github.com/ROCm/AMDMIGraphX/pull/4961) | Generate API sources in the build directory | @pfultz2 | open | 2026-06-12 | 2026-06-17 |
| [#4958](https://github.com/ROCm/AMDMIGraphX/pull/4958) | Improve picking max block size | @pfultz2 | draft | 2026-06-12 | 2026-06-12 |
| [#3478](https://github.com/ROCm/AMDMIGraphX/pull/3478) | reorder_slice_add_mul matcher | @aarushjain29 | draft | 2024-09-25 | 2026-06-12 |
| [#3972](https://github.com/ROCm/AMDMIGraphX/pull/3972) | Allow ONNX and TF modules optional | @apwojcik | open | 2025-04-25 | 2026-06-12 |
| [#4954](https://github.com/ROCm/AMDMIGraphX/pull/4954) | Add tiling for reductions | @pfultz2 | draft | 2026-06-10 | 2026-06-11 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | draft | 2026-04-22 | 2026-06-10 |
| [#4439](https://github.com/ROCm/AMDMIGraphX/pull/4439) | AIMIGRAPHX-317 g+g heuristic added to apply | @bdevorem | draft | 2025-11-12 | 2026-06-10 |
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
| [#5054](https://github.com/ROCm/AMDMIGraphX/pull/5054) | Add from_string/to_string enum macro | @pfultz2 | merged | 2026-07-10 | 2026-07-12 |
| [#4928](https://github.com/ROCm/AMDMIGraphX/pull/4928) | Convolution backwards v4r1 | @pfultz2 | merged | 2026-06-01 | 2026-07-10 |
| [#4767](https://github.com/ROCm/AMDMIGraphX/pull/4767) | Move the data into the for loop to avoid data races | @pfultz2 | merged | 2026-04-09 | 2026-07-10 |
| [#4703](https://github.com/ROCm/AMDMIGraphX/pull/4703) | Adding past inputs to MultiHeadAttention parser for supporti... | @urpetkov-amd | merged | 2026-03-25 | 2026-07-09 |
| [#5044](https://github.com/ROCm/AMDMIGraphX/pull/5044) | Mixed length gather merge | @TedThemistokleous | merged | 2026-07-07 | 2026-07-09 |
| [#4631](https://github.com/ROCm/AMDMIGraphX/pull/4631) | [AIMIGRAPHX-578] Use Eigen 3rd party library for ref GEMMs | @kahmed10 | merged | 2026-02-24 | 2026-07-09 |
| [#4758](https://github.com/ROCm/AMDMIGraphX/pull/4758) | Logger updates | @pfultz2 | merged | 2026-04-08 | 2026-07-09 |
| [#5050](https://github.com/ROCm/AMDMIGraphX/pull/5050) | update before installing | @causten | merged | 2026-07-08 | 2026-07-08 |
| [#5049](https://github.com/ROCm/AMDMIGraphX/pull/5049) | Prevent propagate_precision from removing fp8 converts | @CharlieL7 | merged | 2026-07-08 | 2026-07-08 |
| [#5029](https://github.com/ROCm/AMDMIGraphX/pull/5029) | Lower `dimensions_of` on GPU | @CharlieL7 | merged | 2026-07-01 | 2026-07-08 |
| [#4978](https://github.com/ROCm/AMDMIGraphX/pull/4978) | [AIMIGRAPHX-1054] Log debug symbols when exceptions are thro... | @eddieliao | merged | 2026-06-16 | 2026-07-08 |
| [#4990](https://github.com/ROCm/AMDMIGraphX/pull/4990) | Add backend options | @pfultz2 | merged | 2026-06-18 | 2026-07-08 |
| [#5038](https://github.com/ROCm/AMDMIGraphX/pull/5038) | Fix gather regression | @TedThemistokleous | merged | 2026-07-06 | 2026-07-08 |
| [#4581](https://github.com/ROCm/AMDMIGraphX/pull/4581) | [AIMIGRAPHX-408] Update intermediate ops to support dynamic ... | @shivadbhavsar | merged | 2026-01-29 | 2026-07-08 |
| [#5045](https://github.com/ROCm/AMDMIGraphX/pull/5045) | Fix the unit tests that are broken on develop | @pfultz2 | merged | 2026-07-07 | 2026-07-08 |
| [#4732](https://github.com/ROCm/AMDMIGraphX/pull/4732) | [AIMIGRAPHX-143] Replace usages of cout/cerr with logger | @eddieliao | merged | 2026-04-01 | 2026-07-07 |
| [#4745](https://github.com/ROCm/AMDMIGraphX/pull/4745) | [AIMIGRAPHX-801] Fix int convert bf16/fp16 | @TedThemistokleous | merged | 2026-04-06 | 2026-07-07 |
| [#4163](https://github.com/ROCm/AMDMIGraphX/pull/4163) | Improve split reshape | @pfultz2 | merged | 2025-07-23 | 2026-07-06 |
| [#4951](https://github.com/ROCm/AMDMIGraphX/pull/4951) | [AIMIGRAPHX-1082] Decouple OnnxRT from user/local via update... | @TedThemistokleous | merged | 2026-06-10 | 2026-07-06 |
| [#5034](https://github.com/ROCm/AMDMIGraphX/pull/5034) | Add windows gpu build | @pfultz2 | merged | 2026-07-02 | 2026-07-06 |
| [#4728](https://github.com/ROCm/AMDMIGraphX/pull/4728) | [AIRADSW-167] Fix dimensions do not match issue with claa mo... | @urpetkov-amd | merged | 2026-04-01 | 2026-07-05 |
| [#4700](https://github.com/ROCm/AMDMIGraphX/pull/4700) | [AIMIGRAPHX-886] [AIMIGRAPHX-834] custom symbolic expression... | @shivadbhavsar | merged | 2026-03-24 | 2026-07-05 |
| [#4738](https://github.com/ROCm/AMDMIGraphX/pull/4738) | [AIRADSW-179] Fixing dimensions do not match issue with SD X... | @urpetkov-amd | merged | 2026-04-03 | 2026-07-05 |
| [#4880](https://github.com/ROCm/AMDMIGraphX/pull/4880) | Add dynamic shape support for TopK | @klin2024 | merged | 2026-05-13 | 2026-07-03 |
| [#4927](https://github.com/ROCm/AMDMIGraphX/pull/4927) | broadcast_with_dims: lower-bound the dynamic output dims at ... | @chun-wan | merged | 2026-06-01 | 2026-07-03 |
| [#5017](https://github.com/ROCm/AMDMIGraphX/pull/5017) | Skip fuse_horizontal pass on dynamic shaped inputs | @CharlieL7 | merged | 2026-06-26 | 2026-07-03 |
| [#5024](https://github.com/ROCm/AMDMIGraphX/pull/5024) | Sanitize benchmark mxr file name to use `_` instead of inval... | @ahsan-ca | merged | 2026-06-30 | 2026-07-03 |
| [#5025](https://github.com/ROCm/AMDMIGraphX/pull/5025) | Don't throw an exception when using MIGRAPHX_GPU_DUMP_BENCHM... | @ahsan-ca | merged | 2026-06-30 | 2026-07-03 |
| [#4733](https://github.com/ROCm/AMDMIGraphX/pull/4733) | Fuse pointwise across split slices | @pfultz2 | merged | 2026-04-01 | 2026-07-03 |
| [#4722](https://github.com/ROCm/AMDMIGraphX/pull/4722) | Remove MIGRAPHX_TIDY_CONST | @pfultz2 | merged | 2026-03-31 | 2026-07-02 |
| [#4582](https://github.com/ROCm/AMDMIGraphX/pull/4582) | Adjust allocation even when a fill is used on the allocation | @pfultz2 | merged | 2026-01-30 | 2026-07-01 |
| [#5022](https://github.com/ROCm/AMDMIGraphX/pull/5022) | Allow benchmark MXR dumps during cross-compile | @ikalinic | merged | 2026-06-30 | 2026-06-30 |
| [#5018](https://github.com/ROCm/AMDMIGraphX/pull/5018) | Use eigen for convolution | @pfultz2 | merged | 2026-06-28 | 2026-06-30 |
| [#5016](https://github.com/ROCm/AMDMIGraphX/pull/5016) | Onnxruntime Weekly Sync 2026-06-26 | @github-actions[bot] | merged | 2026-06-26 | 2026-06-29 |
| [#5004](https://github.com/ROCm/AMDMIGraphX/pull/5004) | [AIMIGRAPHX-885] Add slice squeeze matcher | @TedThemistokleous | merged | 2026-06-22 | 2026-06-29 |
| [#4725](https://github.com/ROCm/AMDMIGraphX/pull/4725) | [AIMIGRAPHX-885] Add gather_slice_concat matcher | @TedThemistokleous | merged | 2026-03-31 | 2026-06-29 |
| [#4986](https://github.com/ROCm/AMDMIGraphX/pull/4986) | Pass in a JSON file to driver | @kahmed10 | merged | 2026-06-17 | 2026-06-29 |
| [#4713](https://github.com/ROCm/AMDMIGraphX/pull/4713) | Fix bug in rewrite_resize with nhwc | @pfultz2 | merged | 2026-03-27 | 2026-06-27 |
| [#5013](https://github.com/ROCm/AMDMIGraphX/pull/5013) | fix bug with simplify reshapes and multi reduction axis | @kahmed10 | merged | 2026-06-25 | 2026-06-26 |
| [#5009](https://github.com/ROCm/AMDMIGraphX/pull/5009) | Bump rocmlir to June 24 | @causten | merged | 2026-06-24 | 2026-06-26 |
| [#4981](https://github.com/ROCm/AMDMIGraphX/pull/4981) | Cross Compile: expose more device_props and pass JSON object... | @kahmed10 | merged | 2026-06-17 | 2026-06-26 |
| [#4965](https://github.com/ROCm/AMDMIGraphX/pull/4965) | [Docs] Add precision support reference page | @adeljo-amd | merged | 2026-06-15 | 2026-06-25 |
| [#4984](https://github.com/ROCm/AMDMIGraphX/pull/4984) | [AIMIGRAPHX-885] Add concat reshape matcher | @TedThemistokleous | merged | 2026-06-17 | 2026-06-25 |
| [#5002](https://github.com/ROCm/AMDMIGraphX/pull/5002) | [AIMIGRAPHX-1082] Update OnnxRT workloads use Plugin EP Regi... | @TedThemistokleous | merged | 2026-06-19 | 2026-06-25 |
| [#4989](https://github.com/ROCm/AMDMIGraphX/pull/4989) | [4979] Adaptive benchmark bundle during tuning | @itikhono | merged | 2026-06-18 | 2026-06-25 |
| [#4591](https://github.com/ROCm/AMDMIGraphX/pull/4591) | Support dynamic input values for range op | @klin2024 | merged | 2026-02-04 | 2026-06-25 |
| [#5012](https://github.com/ROCm/AMDMIGraphX/pull/5012) | Use gfx90a for HIP RTC Debug | @causten | merged | 2026-06-25 | 2026-06-25 |
| [#4729](https://github.com/ROCm/AMDMIGraphX/pull/4729) | Improve horizontal fusions | @pfultz2 | merged | 2026-04-01 | 2026-06-25 |
| [#5010](https://github.com/ROCm/AMDMIGraphX/pull/5010) | Add the gfx942 build target | @causten | merged | 2026-06-24 | 2026-06-24 |
| [#4554](https://github.com/ROCm/AMDMIGraphX/pull/4554) | Add deref op | @pfultz2 | merged | 2026-01-19 | 2026-06-23 |
| [#4696](https://github.com/ROCm/AMDMIGraphX/pull/4696) | find_nop_reshapes: Remove extra assignments/inserts | @TedThemistokleous | merged | 2026-03-23 | 2026-06-23 |
| [#4993](https://github.com/ROCm/AMDMIGraphX/pull/4993) | Remove dev_intro.rst and formatting contributing-to-migraphx | @CharlieL7 | merged | 2026-06-19 | 2026-06-23 |
| [#4987](https://github.com/ROCm/AMDMIGraphX/pull/4987) | Fix verify auto-print handler registration for late targets | @ikalinic | merged | 2026-06-18 | 2026-06-22 |
| [#5003](https://github.com/ROCm/AMDMIGraphX/pull/5003) | Add checkers for redundant static_cast | @pfultz2 | merged | 2026-06-22 | 2026-06-22 |
| [#4680](https://github.com/ROCm/AMDMIGraphX/pull/4680) | Adding attention bias input to Multi Head Attention parser | @urpetkov-amd | merged | 2026-03-17 | 2026-06-22 |
| [#4991](https://github.com/ROCm/AMDMIGraphX/pull/4991) | Fix redundant re-benchmarking for pooling when using problem... | @ahsan-ca | merged | 2026-06-18 | 2026-06-22 |
| [#5000](https://github.com/ROCm/AMDMIGraphX/pull/5000) | Onnxruntime Weekly Sync 2026-06-19 | @github-actions[bot] | merged | 2026-06-19 | 2026-06-22 |
| [#4971](https://github.com/ROCm/AMDMIGraphX/pull/4971) | [4970] Generate tuning inputs on GPU via splitmix64 device R... | @itikhono | merged | 2026-06-16 | 2026-06-22 |
| [#4673](https://github.com/ROCm/AMDMIGraphX/pull/4673) | Adding parser support for MatMulBnb4 operator | @urpetkov-amd | merged | 2026-03-16 | 2026-06-22 |
| [#4692](https://github.com/ROCm/AMDMIGraphX/pull/4692) | fix various typos in codebase | @kahmed10 | merged | 2026-03-21 | 2026-06-22 |
| [#4765](https://github.com/ROCm/AMDMIGraphX/pull/4765) | Add versioninfo to migraphx binaries WINDOWS | @ivarusic-amd | merged | 2026-04-09 | 2026-06-20 |
| [#4939](https://github.com/ROCm/AMDMIGraphX/pull/4939) | ONNX parser updates for symbolic shapes | @shivadbhavsar | merged | 2026-06-04 | 2026-06-19 |
| [#4949](https://github.com/ROCm/AMDMIGraphX/pull/4949) | Improve error reporting with loop operator | @pfultz2 | merged | 2026-06-09 | 2026-06-19 |
| [#3815](https://github.com/ROCm/AMDMIGraphX/pull/3815) | Use fill_argument for literals that have the same value | @pfultz2 | merged | 2025-02-14 | 2026-06-19 |
| [#4967](https://github.com/ROCm/AMDMIGraphX/pull/4967) | Vectorize Resize | @pfultz2 | merged | 2026-06-15 | 2026-06-19 |
| [#4893](https://github.com/ROCm/AMDMIGraphX/pull/4893) | GPU NMS kernel and refactor of NMS operator | @CharlieL7 | merged | 2026-05-18 | 2026-06-19 |
| [#4976](https://github.com/ROCm/AMDMIGraphX/pull/4976) | Propagate layout with reshape after lowering | @pfultz2 | merged | 2026-06-16 | 2026-06-19 |
| [#4973](https://github.com/ROCm/AMDMIGraphX/pull/4973) | Reject zero-size operation name buffers | @fallintoplace | merged | 2026-06-16 | 2026-06-19 |
| [#4684](https://github.com/ROCm/AMDMIGraphX/pull/4684) | Update to cppcheck 2.20 | @pfultz2 | merged | 2026-03-18 | 2026-06-18 |
| [#4652](https://github.com/ROCm/AMDMIGraphX/pull/4652) | Add Cubic resize jit kernel | @TedThemistokleous | merged | 2026-03-05 | 2026-06-18 |
| [#4985](https://github.com/ROCm/AMDMIGraphX/pull/4985) | Debug symbols docs update | @CharlieL7 | merged | 2026-06-17 | 2026-06-18 |
| [#4969](https://github.com/ROCm/AMDMIGraphX/pull/4969) | [AIRADSW-567] Fix int8 models qlinearconv | @urpetkov-amd | merged | 2026-06-16 | 2026-06-18 |
| [#4982](https://github.com/ROCm/AMDMIGraphX/pull/4982) | Encode benchmark MXR comment metadata as JSON | @ahsan-ca | merged | 2026-06-17 | 2026-06-18 |
| [#4638](https://github.com/ROCm/AMDMIGraphX/pull/4638) | Auto padding convTrans | @ivarusic-amd | merged | 2026-02-26 | 2026-06-17 |
| [#4660](https://github.com/ROCm/AMDMIGraphX/pull/4660) | [AIMIGRAPHX-800] Add causal mask fix to fuse_attention | @eddieliao | merged | 2026-03-10 | 2026-06-17 |
| [#4657](https://github.com/ROCm/AMDMIGraphX/pull/4657) | [AIMIGRAPHX-604] Add small convolution path for non-zero pad... | @eddieliao | merged | 2026-03-09 | 2026-06-17 |
| [#4899](https://github.com/ROCm/AMDMIGraphX/pull/4899) | Add torch kit | @pfultz2 | merged | 2026-05-20 | 2026-06-17 |
| [#4808](https://github.com/ROCm/AMDMIGraphX/pull/4808) | Enable fp16 channelwise convolution | @klin2024 | merged | 2026-04-21 | 2026-06-17 |
| [#4320](https://github.com/ROCm/AMDMIGraphX/pull/4320) | Refactor eliminate_concat | @pfultz2 | merged | 2025-09-25 | 2026-06-16 |
| [#4975](https://github.com/ROCm/AMDMIGraphX/pull/4975) | Bump cryptography from 46.0.7 to 48.0.1 in /docs/sphinx | @dependabot[bot] | merged | 2026-06-16 | 2026-06-16 |
| [#4974](https://github.com/ROCm/AMDMIGraphX/pull/4974) | Bump tornado from 6.5.6 to 6.5.7 in /docs/sphinx | @dependabot[bot] | merged | 2026-06-16 | 2026-06-16 |
| [#4972](https://github.com/ROCm/AMDMIGraphX/pull/4972) | Bump pyjwt from 2.8.0 to 2.13.0 in /docs/sphinx | @dependabot[bot] | merged | 2026-06-16 | 2026-06-16 |
| [#4902](https://github.com/ROCm/AMDMIGraphX/pull/4902) | Replace deprecated __hip_atomic_* builtins with __scoped_ato... | @srinivamd | merged | 2026-05-21 | 2026-06-16 |

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-07-15T09:47:19Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4236](https://github.com/ROCm/aiter/pull/4236) | [GLM5.2] Add GLM5.2-FP8 PTPC GEMM & MoE tuned configs | @qichu-yun | open | 2026-07-14 | 2026-07-15 |
| [#4184](https://github.com/ROCm/aiter/pull/4184) | CI: add mini-max-fp8 vLLM disagg Spur smoke workflow | @gyohuangxin | draft | 2026-07-10 | 2026-07-15 |
| [#3901](https://github.com/ROCm/aiter/pull/3901) | [FLYDSL] add MLA reduce decode kernel for gfx942 | @anhminhnguyenhoang | draft | 2026-06-24 | 2026-07-15 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-07-15 |
| [#4100](https://github.com/ROCm/aiter/pull/4100) | CI: add ATOM DI CI smoke workflow in Aiter CI | @gyohuangxin | draft | 2026-07-06 | 2026-07-15 |
| [#4247](https://github.com/ROCm/aiter/pull/4247) | [bugfix] Topk gating nan/inf inputs | @yzhou103 | open | 2026-07-15 | 2026-07-15 |
| [#4179](https://github.com/ROCm/aiter/pull/4179) | [fmoe][gfx950]Flydsl mxmoe v2 | @charlieguo1106 | open | 2026-07-10 | 2026-07-15 |
| [#3749](https://github.com/ROCm/aiter/pull/3749) | CK Tile integration into a8w8 gemm | @zsotakal | open | 2026-06-16 | 2026-07-15 |
| [#4246](https://github.com/ROCm/aiter/pull/4246) | gfx1250 opus gemm splitk fuse | @demonsan | open | 2026-07-15 | 2026-07-15 |
| [#3602](https://github.com/ROCm/aiter/pull/3602) | [FLYDSL] Optimize GDR prefill chunk_gdn_fwd_h for MI35X | @huizzhan | open | 2026-06-08 | 2026-07-15 |
| [#4139](https://github.com/ROCm/aiter/pull/4139) | [OPUS] fp4_t/int4_t/uint4_t as one sub-byte element with pac... | @carlushuang | open | 2026-07-08 | 2026-07-15 |
| [#4244](https://github.com/ROCm/aiter/pull/4244) | [triton][mqa] fix silent tail-row drop in deepgemm_fp8_paged... | @zejunchen-zejun | open | 2026-07-15 | 2026-07-15 |
| [#4218](https://github.com/ROCm/aiter/pull/4218) | [FEAT]: add support for pool indexing of hidden states tenso... | @yiijin | open | 2026-07-13 | 2026-07-15 |
| [#4232](https://github.com/ROCm/aiter/pull/4232) | [gfx942] Add native-fp8-MFMA Gluon fp8_mqa_logits kernel | @haosdent | draft | 2026-07-14 | 2026-07-15 |
| [#4233](https://github.com/ROCm/aiter/pull/4233) | custom_all_reduce: gate gfx1250 transport by ROCm version 7.... | @TennyWang1223 | open | 2026-07-14 | 2026-07-15 |
| [#3844](https://github.com/ROCm/aiter/pull/3844) | add kernel for rmsnorm and per-token quant | @mqhc2020 | open | 2026-06-22 | 2026-07-15 |
| [#4245](https://github.com/ROCm/aiter/pull/4245) | [MLA v4 nm] Fix NaN leak from OOB kv page-id folding to slot... | @liyjiang | open | 2026-07-15 | 2026-07-15 |
| [#4144](https://github.com/ROCm/aiter/pull/4144) | [FIX] [MLA] Gate persistent MLA decode kernel by batch size | @jamesETsmith | open | 2026-07-08 | 2026-07-15 |
| [#4044](https://github.com/ROCm/aiter/pull/4044) | [triton] Optimized Unified Attention for Gemma-4-31b | @a-sidorova | open | 2026-07-01 | 2026-07-15 |
| [#4239](https://github.com/ROCm/aiter/pull/4239) | Chefang mha global | @fangche123 | open | 2026-07-14 | 2026-07-15 |
| [#4147](https://github.com/ROCm/aiter/pull/4147) | [TRITON] [GLUON] [GFX950] Add MHA Gluon Kernel | @lucas-santos-amd | draft | 2026-07-08 | 2026-07-15 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [MI455] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-24 | 2026-07-15 |
| [#4171](https://github.com/ROCm/aiter/pull/4171) | review-pr skill v2: dispatch gap rule, arch-string FP fix, P... | @zufayu | open | 2026-07-10 | 2026-07-15 |
| [#2830](https://github.com/ROCm/aiter/pull/2830) | fav3 kernel with improved softmax | @antsaukk | draft | 2026-04-21 | 2026-07-15 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | draft | 2026-04-29 | 2026-07-15 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-07-15 |
| [#3115](https://github.com/ROCm/aiter/pull/3115) | feat(flydsl): Add MQA logits FP4 kernel for gfx950 | @zhiding512 | draft | 2026-05-11 | 2026-07-15 |
| [#3248](https://github.com/ROCm/aiter/pull/3248) | add mla qseqlen4 causal mask related changes | @antsaukk | draft | 2026-05-18 | 2026-07-15 |
| [#3262](https://github.com/ROCm/aiter/pull/3262) | Unified Attention Sparse MLA FP8 | @anhminhnguyenhoang | draft | 2026-05-19 | 2026-07-15 |
| [#3308](https://github.com/ROCm/aiter/pull/3308) | Replace fmha with a new kernel | @JohnNikolay84 | draft | 2026-05-22 | 2026-07-15 |
| [#3771](https://github.com/ROCm/aiter/pull/3771) | fix: disable EP topk-1 strip | @JiaoliangYu | draft | 2026-06-17 | 2026-07-15 |
| [#3938](https://github.com/ROCm/aiter/pull/3938) | gate custom all-reduce on XGMI topology | @skysnow2001 | open | 2026-06-25 | 2026-07-15 |
| [#4228](https://github.com/ROCm/aiter/pull/4228) | [Perf][gfx1250]update tuned flydsl moe | @lalala-sh | open | 2026-07-14 | 2026-07-15 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | Paged mla indexer | @fhuizing | open | 2026-07-13 | 2026-07-15 |
| [#4230](https://github.com/ROCm/aiter/pull/4230) | [FLYDSL] Support paged mqa logits fp4  varqlen kernel | @zhiding512 | open | 2026-07-14 | 2026-07-15 |
| [#4235](https://github.com/ROCm/aiter/pull/4235) | fix FIPS crash in hash_signature | @dtrifiro | open | 2026-07-14 | 2026-07-15 |
| [#4243](https://github.com/ROCm/aiter/pull/4243) | feat(gemm_a8w8_blockscale_bpreshuffle): add GLM-5.2 tuned co... | @Raiden-Makoto | open | 2026-07-15 | 2026-07-15 |
| [#3766](https://github.com/ROCm/aiter/pull/3766) | Fix batched_gemm_a16wfp4 split-K garbage output / OOB for sm... | @srinivamd | open | 2026-06-17 | 2026-07-15 |
| [#4198](https://github.com/ROCm/aiter/pull/4198) | Moe a8w4 tp4 tuning | @lburzawa | open | 2026-07-11 | 2026-07-15 |
| [#4240](https://github.com/ROCm/aiter/pull/4240) | Make shuffle_scale_moe arch-agnostic  (Fix non-gfx950/gfx125... | @skysnow2001 | open | 2026-07-14 | 2026-07-15 |
| [#4241](https://github.com/ROCm/aiter/pull/4241) | [Triton] [Gluon] [GFX12] a8w8 blockscale gemm config avoid e... | @k50112113 | open | 2026-07-14 | 2026-07-15 |
| [#4242](https://github.com/ROCm/aiter/pull/4242) | [gfx1151] [triton-fa]: tune FlashAttention backward configs | @hogeheer499-commits | open | 2026-07-14 | 2026-07-14 |
| [#4181](https://github.com/ROCm/aiter/pull/4181) | Fix ragged-K mask in batched A16WFP4 GEMM | @mjkvaak-amd | open | 2026-07-10 | 2026-07-14 |
| [#4237](https://github.com/ROCm/aiter/pull/4237) | [Triton] [GFX950] BMM BF16 CI fix | @k50112113 | open | 2026-07-14 | 2026-07-14 |
| [#4040](https://github.com/ROCm/aiter/pull/4040) | gfx942: add flat + 16x FMoE kernels for GLM5.2-FP8 decode | @alexioslyrakis-amd | open | 2026-07-01 | 2026-07-14 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | torch-free a4w4 GEMM + C++ library build | @Micky774 | draft | 2026-07-07 | 2026-07-14 |
| [#4220](https://github.com/ROCm/aiter/pull/4220) | fix fused_qk_norm_rope_cache_quant build without ck | @junhaha666 | open | 2026-07-13 | 2026-07-14 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-07-14 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | draft | 2026-07-14 | 2026-07-14 |
| [#2513](https://github.com/ROCm/aiter/pull/2513) | [TRITON] [GLUON] GFX1250 Gluon MoE A4W4 Kernel | @farlukas | open | 2026-03-27 | 2026-07-14 |
| [#4210](https://github.com/ROCm/aiter/pull/4210) | [gfx1250][FlyDSL] Support a8w8 blockscale bpreshuffle gemm | @aoli26 | open | 2026-07-13 | 2026-07-14 |
| [#4205](https://github.com/ROCm/aiter/pull/4205) | Add OPUS gfx950 bf16 fmha d192x128 kernel | @shay-li77 | open | 2026-07-12 | 2026-07-14 |
| [#4161](https://github.com/ROCm/aiter/pull/4161) | [FlyDSL] Add strided-batched MXFP4/MXFP8 preshuffle batched ... | @coderfeli | open | 2026-07-09 | 2026-07-14 |
| [#4029](https://github.com/ROCm/aiter/pull/4029) | DeepSeek-V4 FP4: fused_compress FP4 scatter + rmsnorm_rope_r... | @junhaha666 | open | 2026-07-01 | 2026-07-14 |
| [#4234](https://github.com/ROCm/aiter/pull/4234) | [gfx1100] Add gfx1100 (RDNA3) tuned Triton A16W16 GEMM confi... | @WhatGhost | open | 2026-07-14 | 2026-07-14 |
| [#3571](https://github.com/ROCm/aiter/pull/3571) | ci(sglang-downstream): add MoRI EP accuracy gate (guards moe... | @sunway513 | open | 2026-06-06 | 2026-07-14 |
| [#4216](https://github.com/ROCm/aiter/pull/4216) | [OPUS][ATOM] Update sparse prefill attn: fix rescale, zero p... | @kaiyang-1 | open | 2026-07-13 | 2026-07-14 |
| [#4114](https://github.com/ROCm/aiter/pull/4114) | FlyDSL gemm_decode: small-M dense GEMM kernels (BF16/FP8/blo... | @vedenev-amd | open | 2026-07-07 | 2026-07-14 |
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [Bugfix][Build] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-07-14 |
| [#3606](https://github.com/ROCm/aiter/pull/3606) | [Bugfix][MLA] Correct final_lse in PS MLA prefill kernel for... | @simondanielsson | open | 2026-06-08 | 2026-07-14 |
| [#4108](https://github.com/ROCm/aiter/pull/4108) | Fix A8W4 CDNA4 scale addressing for padded MoE shapes | @xiaohuguo2023 | open | 2026-07-06 | 2026-07-14 |
| [#4206](https://github.com/ROCm/aiter/pull/4206) | [FlyDSL][GFX1250] Add FlyDSL Blockwise BMM W8A8 | @xiangM99 | open | 2026-07-12 | 2026-07-14 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-07-14 |
| [#4214](https://github.com/ROCm/aiter/pull/4214) | fix gfx12 ENABLE_Ck0 cmp err | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#4217](https://github.com/ROCm/aiter/pull/4217) | update mlav4 kernel | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-07-14 |
| [#4222](https://github.com/ROCm/aiter/pull/4222) | a16w16 gemm tuned dsv4 pro shapes | @ahmed-bsod | open | 2026-07-13 | 2026-07-14 |
| [#4224](https://github.com/ROCm/aiter/pull/4224) | Repining CK to cb859854 and fixes for CI tests | @JiaLuo-CAN | open | 2026-07-13 | 2026-07-14 |
| [#4065](https://github.com/ROCm/aiter/pull/4065) | feat(attention): head-dim-tiled Triton flash attention for V... | @carlushuang | open | 2026-07-02 | 2026-07-14 |
| [#3919](https://github.com/ROCm/aiter/pull/3919) | feat(gfx1151): allow gfx1151 in cpp_itfs JIT arch validation | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#3917](https://github.com/ROCm/aiter/pull/3917) | feat(gfx1151): INT8 W8A8 GEMM config + int8 fused-MoE forwar... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#3915](https://github.com/ROCm/aiter/pull/3915) | perf(unified_attention): use 8 warps for gfx1151 3D decode | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#3446](https://github.com/ROCm/aiter/pull/3446) | revert back the copilot extra operation in pr 3338 ci: remov... | @shengnxu | open | 2026-06-01 | 2026-07-14 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-07-14 |
| [#3578](https://github.com/ROCm/aiter/pull/3578) | ci: add paired-release validation gate workflow (AITER+ATOM ... | @sunway513 | open | 2026-06-06 | 2026-07-14 |
| [#4003](https://github.com/ROCm/aiter/pull/4003) | Flash attention sliding window tests | @micmelesse | open | 2026-06-29 | 2026-07-13 |
| [#4121](https://github.com/ROCm/aiter/pull/4121) | [Do not merge]Reproduce atom ci error with CK update | @JiaLuo-CAN | open | 2026-07-07 | 2026-07-13 |
| [#4223](https://github.com/ROCm/aiter/pull/4223) | Tune & include fuse-aware gfx950 fused GEMM A8W8 blockscale ... | @nidal567 | open | 2026-07-13 | 2026-07-13 |
| [#3805](https://github.com/ROCm/aiter/pull/3805) | fix(fmoe tune): dedup fused/non-fused stage1 separately  | @rbrugaro-amd | open | 2026-06-18 | 2026-07-13 |
| [#4207](https://github.com/ROCm/aiter/pull/4207) | op_tests: IFOE cross-node custom all-reduce (module_custom_a... | @carlushuang | open | 2026-07-12 | 2026-07-13 |
| [#3926](https://github.com/ROCm/aiter/pull/3926) | Feat/gfx942 flydsl mxfp4 moe | @msaffari-amd | draft | 2026-06-25 | 2026-07-13 |
| [#3468](https://github.com/ROCm/aiter/pull/3468) | Add MLA reduce fast path | @ftyghome | open | 2026-06-01 | 2026-07-13 |
| [#4170](https://github.com/ROCm/aiter/pull/4170) | moe a8w4: GUGU act+quant fusion  | @Boss2002n | open | 2026-07-10 | 2026-07-13 |
| [#4080](https://github.com/ROCm/aiter/pull/4080) | [OPUS] Absorb module_rmsnorm_quant into the opus rmsnorm mod... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#4021](https://github.com/ROCm/aiter/pull/4021) | [2-stages MOE][gfx950/gfx942] Support NVFP4-BF16 mixed-preci... | @fxmarty-amd | open | 2026-06-30 | 2026-07-13 |
| [#4213](https://github.com/ROCm/aiter/pull/4213) | fea: support add fused allreduce | @TennyWang1223 | open | 2026-07-13 | 2026-07-13 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-07-13 |
| [#3162](https://github.com/ROCm/aiter/pull/3162) | CI: add test prebuild profile for PR wheels | @gyohuangxin | open | 2026-05-13 | 2026-07-13 |
| [#3180](https://github.com/ROCm/aiter/pull/3180) | CI: add tuned config smoke mode | @gyohuangxin | open | 2026-05-14 | 2026-07-13 |
| [#3260](https://github.com/ROCm/aiter/pull/3260) | Revert "CI: use vultr 325 runner labels" | @gyohuangxin | open | 2026-05-19 | 2026-07-13 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-07-13 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-07-13 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-07-13 |
| [#3429](https://github.com/ROCm/aiter/pull/3429) | Fuse dynamic_per_tensor_quant_fp8_i8 into one launch for the... | @JohnQinAMD | open | 2026-05-29 | 2026-07-13 |
| [#3639](https://github.com/ROCm/aiter/pull/3639) | Gfx1250 moe 2mode e2e v1 yadai tmp | @yadaish | open | 2026-06-09 | 2026-07-13 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-07-13 |
| [#3972](https://github.com/ROCm/aiter/pull/3972) |  Add gelu_tanh activation to no-quant CK 2-stage fused MoE | @jonahbernard | open | 2026-06-27 | 2026-07-13 |
| [#3973](https://github.com/ROCm/aiter/pull/3973) | [CK] Fix MoE 2-stage dispatch for non-128-divisible inter_di... | @jonahbernard | open | 2026-06-27 | 2026-07-13 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-07-13 |
| [#3340](https://github.com/ROCm/aiter/pull/3340) | docs: AITER late May 2026 newsletter (v0.1.14 + v0.1.13.post... | @sunway513 | open | 2026-05-25 | 2026-07-13 |
| [#2406](https://github.com/ROCm/aiter/pull/2406) | Add operator performance benchmark CI workflow | @sunway513 | open | 2026-03-22 | 2026-07-13 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-07-13 |
| [#4103](https://github.com/ROCm/aiter/pull/4103) | [tune] DSv4(TP4) FP8 a8w8 blockscale BpreShuffle GEMM for gf... | @xiangM99 | open | 2026-07-06 | 2026-07-13 |
| [#3940](https://github.com/ROCm/aiter/pull/3940) | [Triton] Add fused_gemm_a16w16_split_cat | @rbrugaro-amd | open | 2026-06-25 | 2026-07-13 |
| [#2565](https://github.com/ROCm/aiter/pull/2565) | Unify FlyDSL W4A4/G1U0 updates and tuning fixes | @rujiacai | open | 2026-04-01 | 2026-07-13 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-07-13 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-07-13 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-07-13 |
| [#3835](https://github.com/ROCm/aiter/pull/3835) | Dev/dsv4 a4w4 tuned | @Bernard-Liu | open | 2026-06-22 | 2026-07-13 |
| [#2822](https://github.com/ROCm/aiter/pull/2822) | [ROCm][Perf] Optimize batched_gemm_a16wfp4 kernel — 2.97x mi... | @rbrugaro-amd | draft | 2026-04-20 | 2026-07-13 |
| [#4211](https://github.com/ROCm/aiter/pull/4211) | CI: make `check-signal` neutral on pre-check failure and gat... | @Copilot | draft | 2026-07-13 | 2026-07-13 |
| [#3991](https://github.com/ROCm/aiter/pull/3991) | refactor aot | @zhiding512 | draft | 2026-06-29 | 2026-07-13 |
| [#3147](https://github.com/ROCm/aiter/pull/3147) | [BugFix] Align FlyDSL MXFP4 quantization with reference | @zihaomu | open | 2026-05-12 | 2026-07-13 |
| [#3110](https://github.com/ROCm/aiter/pull/3110) | [BugFix] A4W4 FMoE run_config weight shuffle | @zihaomu | open | 2026-05-11 | 2026-07-13 |
| [#4191](https://github.com/ROCm/aiter/pull/4191) | Omuhamma/tune a8w8 | @omuhamma | draft | 2026-07-10 | 2026-07-13 |
| [#4167](https://github.com/ROCm/aiter/pull/4167) | Satya/aiter shuffle scale guinterleave | @Boss2002n | draft | 2026-07-09 | 2026-07-13 |
| [#4141](https://github.com/ROCm/aiter/pull/4141) | gemma4w4 split-k bug | @amirumoAMD | draft | 2026-07-08 | 2026-07-13 |
| [#4143](https://github.com/ROCm/aiter/pull/4143) | Satya/aiter dsv4 stuff | @Boss2002n | draft | 2026-07-08 | 2026-07-13 |
| [#4118](https://github.com/ROCm/aiter/pull/4118) | ATOM MXFP4 Scale Shuffle | @amirumoAMD | draft | 2026-07-07 | 2026-07-13 |
| [#4107](https://github.com/ROCm/aiter/pull/4107) | [opus] Refactor Opus MoE stage2 pipeline and generated TUs | @yifehuan | draft | 2026-07-06 | 2026-07-13 |
| [#4061](https://github.com/ROCm/aiter/pull/4061) | docs(csrc): condense verbose comments (comments-only, no cod... | @carlushuang | draft | 2026-07-02 | 2026-07-13 |
| [#4062](https://github.com/ROCm/aiter/pull/4062) | docs(python): condense verbose comments (comments-only, no c... | @carlushuang | draft | 2026-07-02 | 2026-07-13 |
| [#3987](https://github.com/ROCm/aiter/pull/3987) | Add FlyDSL weight-decompression MoE kernels for gfx942 (Qwen... | @luocheng25 | draft | 2026-06-29 | 2026-07-13 |
| [#2615](https://github.com/ROCm/aiter/pull/2615) | Add pytest for fmha_v3_varlen_fwd to trigger module_fmha_v3_... | @Copilot | draft | 2026-04-03 | 2026-07-13 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | Add initial Windows support | @0xDELUXA | draft | 2026-04-11 | 2026-07-13 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | flydsl implementation of a16w16 gemm | @omuhamma | draft | 2026-04-13 | 2026-07-13 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-07-13 |
| [#2813](https://github.com/ROCm/aiter/pull/2813) | update ds a8w8 moe config | @XiaobingSuper | draft | 2026-04-20 | 2026-07-13 |
| [#2885](https://github.com/ROCm/aiter/pull/2885) | Implement TurboQuant | @waqahmed-amd-fi | draft | 2026-04-23 | 2026-07-13 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-07-13 |
| [#3169](https://github.com/ROCm/aiter/pull/3169) |  MTP + kv cache fp8 + shuffled KV layout support | @waqahmed-amd-fi | draft | 2026-05-13 | 2026-07-13 |
| [#3253](https://github.com/ROCm/aiter/pull/3253) | add gptoss prefill tuned shape | @XiaobingSuper | draft | 2026-05-18 | 2026-07-13 |
| [#3374](https://github.com/ROCm/aiter/pull/3374) | add deepseek_v2 model a4w4 gemm tuned config | @XiaobingSuper | draft | 2026-05-27 | 2026-07-13 |
| [#3409](https://github.com/ROCm/aiter/pull/3409) | mla | @feifei14119 | draft | 2026-05-29 | 2026-07-13 |
| [#3477](https://github.com/ROCm/aiter/pull/3477) | [Tuning] Opt-in post-tune verification + pick-stability leve... | @yzhou103 | draft | 2026-06-02 | 2026-07-13 |
| [#3557](https://github.com/ROCm/aiter/pull/3557) | feat(pa): enable paged-attention on gfx1201 (RDNA4) via WMMA | @stevenshenyj | draft | 2026-06-05 | 2026-07-13 |
| [#3573](https://github.com/ROCm/aiter/pull/3573) | CI: add retry logic for Aiter wheel artifact downloads | @Copilot | draft | 2026-06-06 | 2026-07-13 |
| [#3616](https://github.com/ROCm/aiter/pull/3616) | GFX1250 MXFP4 changes | @Boss2002n | draft | 2026-06-08 | 2026-07-13 |
| [#3617](https://github.com/ROCm/aiter/pull/3617) | Fix pa_mqa_logits MI300X divide-by-zero for small TileQCount | @ysmkone | draft | 2026-06-08 | 2026-07-13 |
| [#3645](https://github.com/ROCm/aiter/pull/3645) | Add env overrides for unified attention tuning | @akii96 | draft | 2026-06-10 | 2026-07-13 |
| [#3976](https://github.com/ROCm/aiter/pull/3976) | [FlyDSL] Implement flash attention backward kernel | @waqahmed-amd-fi | draft | 2026-06-28 | 2026-07-13 |
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-07-13 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | Flydsl implementation of a8w8 blockscale for gfx1250 (WIP) | @omuhamma | draft | 2026-04-20 | 2026-07-13 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-07-13 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-07-13 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-07-13 |
| [#3685](https://github.com/ROCm/aiter/pull/3685) | Moe a8w4 multicast | @Boss2002n | draft | 2026-06-11 | 2026-07-13 |
| [#3897](https://github.com/ROCm/aiter/pull/3897) | [gfx1250][FLYDSL]moe gemm tune | @Zzz9990 | draft | 2026-06-24 | 2026-07-13 |
| [#4082](https://github.com/ROCm/aiter/pull/4082) | fix: synchronize custom collectives before return | @jpy794 | open | 2026-07-05 | 2026-07-13 |
| [#4084](https://github.com/ROCm/aiter/pull/4084) | perf: eliminate end_sync in custom allreduce by delaying inp... | @jpy794 | open | 2026-07-05 | 2026-07-13 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#4083](https://github.com/ROCm/aiter/pull/4083) | refine mla v4 co | @feifei14119 | open | 2026-07-05 | 2026-07-13 |
| [#4088](https://github.com/ROCm/aiter/pull/4088) | [MLA] Fold gqa=64 sparse-MLA decode through the gqa=16 kerne... | @raviguptaamd | open | 2026-07-06 | 2026-07-13 |
| [#4041](https://github.com/ROCm/aiter/pull/4041) | [fix](moe): fix the accuracy M=1 in qwen3.5 | @PerryZhang01 | open | 2026-07-01 | 2026-07-13 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-07-13 |
| [#3979](https://github.com/ROCm/aiter/pull/3979) | [op_tests] add whole-block GPT-OSS attention test | @carlushuang | open | 2026-06-29 | 2026-07-13 |
| [#4007](https://github.com/ROCm/aiter/pull/4007) | fix(topk): add __threadfence before cross-block barrier in r... | @Jasen2201 | open | 2026-06-30 | 2026-07-13 |
| [#4011](https://github.com/ROCm/aiter/pull/4011) | perf: add fixed-tile HGEMM candidate | @ftyghome | open | 2026-06-30 | 2026-07-13 |
| [#4016](https://github.com/ROCm/aiter/pull/4016) | [GDN] Add gdn_chunk_prepare: fused intra-chunk GDN prefill p... | @jayzlee147 | open | 2026-06-30 | 2026-07-13 |
| [#3989](https://github.com/ROCm/aiter/pull/3989) | add assertion for oob check | @Bernard-Liu | open | 2026-06-29 | 2026-07-13 |
| [#3256](https://github.com/ROCm/aiter/pull/3256) | [flydsl] PA DECODE | @ahmed-bsod | open | 2026-05-18 | 2026-07-13 |
| [#3369](https://github.com/ROCm/aiter/pull/3369) | fp8 einsum flydsl impl | @ganyi1996ppo | open | 2026-05-27 | 2026-07-13 |
| [#3818](https://github.com/ROCm/aiter/pull/3818) | Flydsl moe 4gib fix | @IzacharyI | open | 2026-06-20 | 2026-07-13 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-07-13 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | gfx1201 (RDNA4) FlyDSL BF16 attention optimizations & FP8 at... | @pds-amd | open | 2026-07-10 | 2026-07-13 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-07-13 |
| [#4208](https://github.com/ROCm/aiter/pull/4208) | fix: apply Black formatting to FlyDSL BMM W8A8 GFX1250 files | @Copilot | draft | 2026-07-13 | 2026-07-13 |
| [#4165](https://github.com/ROCm/aiter/pull/4165) | [gfx1250] [flydsl] moe ep | @XingerZhu | open | 2026-07-09 | 2026-07-12 |
| [#4193](https://github.com/ROCm/aiter/pull/4193) | [TRITON] Add gluon support for MXFP4 quant kernel in gfx950 ... | @NimitPtl | open | 2026-07-10 | 2026-07-11 |
| [#4057](https://github.com/ROCm/aiter/pull/4057) | [Triton][GDN] Support V-major (hvk) state layout in decode k... | @hsthe29 | open | 2026-07-02 | 2026-07-11 |
| [#4190](https://github.com/ROCm/aiter/pull/4190) | [gfx950][gluon] Correct A8W8 default config to avoid accumul... | @MrSidims | open | 2026-07-10 | 2026-07-10 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-07-10 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | open | 2026-07-08 | 2026-07-10 |
| [#3721](https://github.com/ROCm/aiter/pull/3721) | [FLYDSL] Rebase flydsl hgemm kernels with mixed policies | @xytpai | open | 2026-06-15 | 2026-07-10 |
| [#4175](https://github.com/ROCm/aiter/pull/4175) | fix no ck compile | @feifei14119 | open | 2026-07-10 | 2026-07-10 |
| [#4101](https://github.com/ROCm/aiter/pull/4101) | [DO NOT MERGE] Release test: triton release_tmp index + afp4... | @yuyzhang512 | open | 2026-07-06 | 2026-07-10 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-07-09 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-07-09 |
| [#4158](https://github.com/ROCm/aiter/pull/4158) | Remove deprecated offset arg from tdm.async_gather calls on ... | @Liang-jianhao97 | open | 2026-07-09 | 2026-07-09 |
| [#4145](https://github.com/ROCm/aiter/pull/4145) | Block pointers only support 32 bit error | @jpvillam-amd | open | 2026-07-08 | 2026-07-09 |
| [#3277](https://github.com/ROCm/aiter/pull/3277) | [TRITON/GLUON]: Add moe_a16w4 gfx1250 gluon kernel | @rahulbatra85 | open | 2026-05-19 | 2026-07-08 |
| [#3936](https://github.com/ROCm/aiter/pull/3936) | Spatial Attention: XCD-aware spatial workgroup mapping for M... | @mc186 | open | 2026-06-25 | 2026-07-08 |
| [#4146](https://github.com/ROCm/aiter/pull/4146) | [GFX1250] fused_add_rmsnorm_pad() gluon equivalent function | @amd-jrosas | open | 2026-07-08 | 2026-07-08 |
| [#4140](https://github.com/ROCm/aiter/pull/4140) | [TRITON] Tuned GFX1201 DSV4-Flash FP16 and FP8 GEMMs for ATO... | @skysnow2001 | open | 2026-07-08 | 2026-07-08 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | Simplify ck_gemm_a8w8_blockscale GemmSpecialization construc... | @jbelloncastro | open | 2026-06-19 | 2026-07-08 |
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton] unified_attention: mask V load and output store by ... | @reger-men | open | 2026-06-12 | 2026-07-07 |
| [#3739](https://github.com/ROCm/aiter/pull/3739) | configs: add DSv3-MXFP4 E=33/topk9 fused-MoE shape (shared-e... | @rbrugaro-amd | open | 2026-06-15 | 2026-07-07 |
| [#4087](https://github.com/ROCm/aiter/pull/4087) | [gfx1250][Gluon] MoE1 + act + quant fusion for DSv4 | @azaidy | open | 2026-07-05 | 2026-07-06 |
| [#3809](https://github.com/ROCm/aiter/pull/3809) | Qwen3.5-397B-A17B MXFP4: add tuned flydsl fused-MoE config (... | @jiangyon-amd | open | 2026-06-19 | 2026-07-06 |
| [#3886](https://github.com/ROCm/aiter/pull/3886) | [MoE] Add swiglu_oai (OAI SwiGLU) for per-token fp8 CK XDL 2... | @LJ-underdog | open | 2026-06-24 | 2026-07-06 |
| [#4058](https://github.com/ROCm/aiter/pull/4058) | [Triton][GDN] Add in-place state scatter + h output to VK ch... | @hsthe29 | open | 2026-07-02 | 2026-07-06 |
| [#4086](https://github.com/ROCm/aiter/pull/4086) | Fix Gluon apis | @azaidy | open | 2026-07-05 | 2026-07-06 |
| [#3890](https://github.com/ROCm/aiter/pull/3890) | [feat][gluon][mla] support MTP for mla | @yanxuer-999 | open | 2026-06-24 | 2026-07-05 |
| [#3858](https://github.com/ROCm/aiter/pull/3858) | [triton] [mha]: split-D forward for non-power-of-2 head_dim | @roberteg16 | open | 2026-06-22 | 2026-07-03 |
| [#3817](https://github.com/ROCm/aiter/pull/3817) | perf: optimize fused AllReduce + RMSNorm (custom_all_reduce) | @ftyghome | open | 2026-06-20 | 2026-07-03 |
| [#3993](https://github.com/ROCm/aiter/pull/3993) | mla_decode_fwd: wire is_causal through Python and C++ dispat... | @alexioslyrakis-amd | open | 2026-06-29 | 2026-07-03 |
| [#2922](https://github.com/ROCm/aiter/pull/2922) | Deepseek Sparse Attention Triton Kernels for Training | @wangye805 | draft | 2026-04-27 | 2026-07-03 |
| [#3481](https://github.com/ROCm/aiter/pull/3481) | [gfx1151] flash_attn_triton_amd: enable in-thread transpose | @mgehre-amd | draft | 2026-06-02 | 2026-07-03 |
| [#3494](https://github.com/ROCm/aiter/pull/3494) | Amemoore/gfx950 moe triton integration | @amirumoAMD | draft | 2026-06-02 | 2026-07-03 |
| [#3596](https://github.com/ROCm/aiter/pull/3596) | CI: add FFM aiter UT workflow | @gyohuangxin | draft | 2026-06-08 | 2026-07-02 |
| [#3956](https://github.com/ROCm/aiter/pull/3956) | fix(triton): support gfx1201 unified attention within LDS li... | @papadako | open | 2026-06-26 | 2026-07-02 |
| [#4049](https://github.com/ROCm/aiter/pull/4049) | Gluon Fused Dynamic mxfp4 Quant Moe Sort for gfx1250 | @amd-jrosas | open | 2026-07-01 | 2026-07-01 |
| [#3935](https://github.com/ROCm/aiter/pull/3935) | [DO NOT MERGE] [TESTING CI] | @Boss2002n | open | 2026-06-25 | 2026-06-30 |
| [#4019](https://github.com/ROCm/aiter/pull/4019) | fix: increase check_signal.sh retry budget from 5 to 60 atte... | @Copilot | draft | 2026-06-30 | 2026-06-30 |
| [#3944](https://github.com/ROCm/aiter/pull/3944) | Dev/fly pa reduce jit build | @Bernard-Liu | open | 2026-06-26 | 2026-06-30 |
| [#3210](https://github.com/ROCm/aiter/pull/3210) | [feat](gpt-oss): add a8w8 gemm tunefile for gpt-oss | @PerryZhang01 | open | 2026-05-15 | 2026-06-30 |
| [#2337](https://github.com/ROCm/aiter/pull/2337) | GFX1250 Gluon MoE A4W4 Kernel | @farlukas | draft | 2026-03-18 | 2026-06-30 |
| [#2362](https://github.com/ROCm/aiter/pull/2362) | Gluon kernel for a16w16 gemm | @omuhamma | draft | 2026-03-19 | 2026-06-30 |
| [#2429](https://github.com/ROCm/aiter/pull/2429) | add README for gluon kernels | @Dewei-Wang-sh | open | 2026-03-23 | 2026-06-30 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-06-30 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-06-30 |
| [#2227](https://github.com/ROCm/aiter/pull/2227) | Add Triton fallback for fused_rope_rms (QKNorm+RoPE) | @sunway513 | open | 2026-03-09 | 2026-06-30 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-06-30 |
| [#4000](https://github.com/ROCm/aiter/pull/4000) | fix: optimize MXFP4 a4w4 MoE dispatch for MiniMax-M2.1-MXFP4 | @thpereir | open | 2026-06-29 | 2026-06-30 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-06-30 |
| [#3800](https://github.com/ROCm/aiter/pull/3800) | [gfx950] Add JIT grouped_gemm_mxfp8 for MXFP8 prefill MoE | @fanxingran | open | 2026-06-18 | 2026-06-29 |
| [#3671](https://github.com/ROCm/aiter/pull/3671) | gemm_mxscale_gfx1250: add static N/K-pad grid skip | @zhiding512 | draft | 2026-06-11 | 2026-06-29 |
| [#2351](https://github.com/ROCm/aiter/pull/2351) | [gfx1201] Enable quantization kernels for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-06-29 |
| [#2314](https://github.com/ROCm/aiter/pull/2314) | Add MPerBlock=128 tile size for blockscale FP8 MoE kernels | @ChuanLi1101 | open | 2026-03-17 | 2026-06-29 |
| [#3457](https://github.com/ROCm/aiter/pull/3457) | Fused SplitK zero-init for FP8 a8w8 blockscale GEMMs (y_is_z... | @samremes | open | 2026-06-01 | 2026-06-29 |
| [#3556](https://github.com/ROCm/aiter/pull/3556) | Fix e8m0 conversion to fp32 | @Arech8 | open | 2026-06-05 | 2026-06-29 |
| [#3567](https://github.com/ROCm/aiter/pull/3567) | [Triton] [GFX12]] non-MLA fused_kv_cache | @k50112113 | draft | 2026-06-05 | 2026-06-26 |
| [#2350](https://github.com/ROCm/aiter/pull/2350) | [gfx1201] Added tuned gemm_a8w8_configs for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-06-26 |
| [#2355](https://github.com/ROCm/aiter/pull/2355) | Fix ASM I8 GEMM: split the M dimension into chunks that keep... | @xudonlyu | open | 2026-03-19 | 2026-06-26 |
| [#2369](https://github.com/ROCm/aiter/pull/2369) | [Bugfix] Handle expert groups > 32 in biased_grouped_topk | @ianschenck | open | 2026-03-20 | 2026-06-26 |
| [#2374](https://github.com/ROCm/aiter/pull/2374) | [Bugfix][gfx950] Force 1-stage MoE assembly kernels for FP8 ... | @maeehart | open | 2026-03-20 | 2026-06-26 |
| [#2443](https://github.com/ROCm/aiter/pull/2443) | [FEAT] add enable_ck = 0 for dispatching | @HaonanWang98 | open | 2026-03-24 | 2026-06-26 |
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-06-26 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-06-26 |
| [#3774](https://github.com/ROCm/aiter/pull/3774) | [gfx1250][FlyDSL]opt conc1 moe. | @lalala-sh | open | 2026-06-17 | 2026-06-26 |
| [#3834](https://github.com/ROCm/aiter/pull/3834) | Felix/add kwave 1250 | @coderfeli | open | 2026-06-22 | 2026-06-26 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-06-26 |
| [#2789](https://github.com/ROCm/aiter/pull/2789) | gemma quant | @ganyi1996ppo | open | 2026-04-19 | 2026-06-26 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-06-26 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-06-26 |
| [#2559](https://github.com/ROCm/aiter/pull/2559) | Kimi 128k tuned config(TP4&TP8) | @inkcherry | open | 2026-03-31 | 2026-06-26 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-06-26 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-06-26 |
| [#2613](https://github.com/ROCm/aiter/pull/2613) | add a8w8 gemm config for gfx942 | @wangxunx | open | 2026-04-03 | 2026-06-26 |
| [#2632](https://github.com/ROCm/aiter/pull/2632) | [config] Add bf16 tuned GEMM config for Kimi-K2.5 on MI355 (... | @akao-amd | open | 2026-04-07 | 2026-06-26 |
| [#2640](https://github.com/ROCm/aiter/pull/2640) | Restore CKTile MOE tuning and add between-stage quant fairne... | @amd-yashagar | open | 2026-04-07 | 2026-06-26 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-06-26 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-06-26 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-06-26 |
| [#2730](https://github.com/ROCm/aiter/pull/2730) | introduce g1u0 smoothquant int8 fused moe : fused_moe_gelu_s... | @tingqli | open | 2026-04-14 | 2026-06-26 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-06-26 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-06-26 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-06-26 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-06-26 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | open | 2026-04-24 | 2026-06-26 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-06-26 |
| [#2997](https://github.com/ROCm/aiter/pull/2997) | mla: refuse page_size > 1 on bf16 decode-stage1 kernel (no _... | @kzjeef | open | 2026-05-01 | 2026-06-26 |
| [#2998](https://github.com/ROCm/aiter/pull/2998) | Dsv4 sparse indexer | @Oseltamivir | open | 2026-05-01 | 2026-06-26 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-06-26 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-06-26 |
| [#3109](https://github.com/ROCm/aiter/pull/3109) | [ROCm][aiter] Add DSv3.2 BF16 GEMM tuned configs for gfx950 ... | @sunway513 | open | 2026-05-10 | 2026-06-26 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-06-26 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-06-26 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-06-26 |
| [#3280](https://github.com/ROCm/aiter/pull/3280) | [FlyDSL][MOE] Enable a8w8 blockscale moe splitk in flydsl  | @lalala-sh | open | 2026-05-20 | 2026-06-26 |
| [#3295](https://github.com/ROCm/aiter/pull/3295) | repro(pa-asm): standalone reproducer for fp8 PA OOB at bs=12... | @yhl-amd | open | 2026-05-21 | 2026-06-26 |
| [#3297](https://github.com/ROCm/aiter/pull/3297) | add pageattention with sliding window | @ChengYao-amd | open | 2026-05-21 | 2026-06-26 |
| [#3316](https://github.com/ROCm/aiter/pull/3316) | [ck gemm a8w8 blockscale] shape-aware kernel selection heuri... | @eppaneamd | open | 2026-05-22 | 2026-06-26 |
| [#3361](https://github.com/ROCm/aiter/pull/3361) | [feat] add no_combine flag in 2-stage MoE backend | @zx3xyy | open | 2026-05-26 | 2026-06-26 |
| [#3379](https://github.com/ROCm/aiter/pull/3379) | Gate opus fp8 code for gfx1100 | @Calandracas606 | open | 2026-05-28 | 2026-06-26 |
| [#3389](https://github.com/ROCm/aiter/pull/3389) | Add Qwen-Image-Edit FP8 a8w8 bpreshuffle GEMM tune configs f... | @LiuYinfeng01 | open | 2026-05-28 | 2026-06-26 |
| [#3418](https://github.com/ROCm/aiter/pull/3418) | Add PER_TOKEN_HEAD FP8 quantization and P-scale for mha_batc... | @msaffari-amd | open | 2026-05-29 | 2026-06-26 |
| [#3439](https://github.com/ROCm/aiter/pull/3439) | sglang downstream: run 8-GPU tests on the DO MI350X runner l... | @okakarpa | open | 2026-05-30 | 2026-06-26 |
| [#3451](https://github.com/ROCm/aiter/pull/3451) | Fix Q UE8M0 quant and require fp32 LN params in fused DSv3.2... | @frida-andersson | open | 2026-06-01 | 2026-06-26 |
| [#3532](https://github.com/ROCm/aiter/pull/3532) | fix(moe-tune): bound registration-barrier deadlock + harden ... | @jhinpan | open | 2026-06-04 | 2026-06-26 |
| [#3545](https://github.com/ROCm/aiter/pull/3545) | perf: optimize moe_fused_gate kernel for MI300X | @kudomcho | open | 2026-06-04 | 2026-06-26 |
| [#3547](https://github.com/ROCm/aiter/pull/3547) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-04 | 2026-06-26 |
| [#3549](https://github.com/ROCm/aiter/pull/3549) | perf: remove redundant __syncthreads() in allreduce block re... | @kudomcho | open | 2026-06-05 | 2026-06-26 |
| [#3553](https://github.com/ROCm/aiter/pull/3553) | [fmoe] Add EP Support to Two-Stage MoE Op Tests | @BangBOOM | open | 2026-06-05 | 2026-06-26 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-06-26 |
| [#3585](https://github.com/ROCm/aiter/pull/3585) | [op_tests] Refactor MoE legacy UT into per-quant smoke sweep | @zhiding512 | open | 2026-06-07 | 2026-06-26 |
| [#3591](https://github.com/ROCm/aiter/pull/3591) | [hotfix] always use fp4x2 for swiglu separated per_1x32 path | @yadaish | open | 2026-06-08 | 2026-06-26 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-06-26 |
| [#3626](https://github.com/ROCm/aiter/pull/3626) | Add gfx1250 A8W4 MoE E2E test and fair FlyDSL comparison | @charlieguo1106 | open | 2026-06-09 | 2026-06-26 |
| [#3628](https://github.com/ROCm/aiter/pull/3628) | Gfx1250 moe 2mode e2e v1 yadai | @yadaish | open | 2026-06-09 | 2026-06-26 |
| [#3662](https://github.com/ROCm/aiter/pull/3662) | [config] add tuned files for minimax-m2.5 PTPC fp8 model | @gbyu-amd | open | 2026-06-10 | 2026-06-26 |
| [#3667](https://github.com/ROCm/aiter/pull/3667) | Guard `v_cvt_pk_fp8_f32` and `v_cvt_pk_bf8_f32` asm in aiter... | @menglcai | open | 2026-06-10 | 2026-06-26 |
| [#3682](https://github.com/ROCm/aiter/pull/3682) | Fix the mla bf16 16mx4 kernel random nan error in MI350 | @minmengdie | open | 2026-06-11 | 2026-06-26 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-06-26 |
| [#3718](https://github.com/ROCm/aiter/pull/3718) | Yhl/gptoss pa asm shuf repro 20260611 | @yhl-amd | open | 2026-06-15 | 2026-06-26 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-06-26 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-06-26 |
| [#3781](https://github.com/ROCm/aiter/pull/3781) | perf: use vectorized LDS loads for mhc_pre_gemm_sqrsum on gf... | @kudomcho | open | 2026-06-17 | 2026-06-26 |
| [#3787](https://github.com/ROCm/aiter/pull/3787) | [FlyDSL] Port compress_attn kernels to gfx1250 (wave32) | @jli-melchior | open | 2026-06-18 | 2026-06-26 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [feature] Extract C++ code to jinja template files | @jbelloncastro | open | 2026-06-18 | 2026-06-26 |
| [#3810](https://github.com/ROCm/aiter/pull/3810) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-19 | 2026-06-26 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-06-26 |
| [#3870](https://github.com/ROCm/aiter/pull/3870) | feat(mha): add FlyDSL BSHD batch-mode dispatch for gfx1250 | @jli-melchior | open | 2026-06-23 | 2026-06-26 |
| [#3876](https://github.com/ROCm/aiter/pull/3876) | [Feature][HIP] Support fused shared expert topk append | @yuychang | open | 2026-06-23 | 2026-06-26 |
| [#3907](https://github.com/ROCm/aiter/pull/3907) | [FlyDSL] [gfx1250] gather moe support | @XingerZhu | open | 2026-06-24 | 2026-06-26 |
| [#3923](https://github.com/ROCm/aiter/pull/3923) | change default pa reduce kernel from cxx to flydsl | @Bernard-Liu | open | 2026-06-25 | 2026-06-26 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-06-26 |
| [#3941](https://github.com/ROCm/aiter/pull/3941) | Feat/flydsl mxfp4 gemm | @lizamd | open | 2026-06-26 | 2026-06-26 |
| [#3951](https://github.com/ROCm/aiter/pull/3951) | [Configs] DSv3.2 gfx942 (MI325X): tuned a8w8 blockscale GEMM... | @frida-andersson | open | 2026-06-26 | 2026-06-26 |
| [#3783](https://github.com/ROCm/aiter/pull/3783) | [Small_M_GEMM_GroupGEMM_MXFP8] Decode small-M MX-FP8 GEMM an... | @JohnQinAMD | open | 2026-06-17 | 2026-06-26 |
| [#3937](https://github.com/ROCm/aiter/pull/3937) | Gluon MXFP4 Fuse Reduce Quant | @amd-jrosas | open | 2026-06-25 | 2026-06-25 |
| [#3896](https://github.com/ROCm/aiter/pull/3896) | Fix HIP fp8 paged-attention kPerHead scale OOB page fault. | @JohnNikolay84 | open | 2026-06-24 | 2026-06-25 |
| [#3686](https://github.com/ROCm/aiter/pull/3686) | [DO NOT MERGE][TRITON] Evaluating impact of LLVM bump in Tri... | @brunomazzottiamd | open | 2026-06-11 | 2026-06-24 |
| [#3875](https://github.com/ROCm/aiter/pull/3875) | [module_groupnorm] refactor | @amd-ruitang3 | open | 2026-06-23 | 2026-06-23 |
| [#3732](https://github.com/ROCm/aiter/pull/3732) | HD256 FMHA FP8 GFX950 | @JohnNikolay84 | open | 2026-06-15 | 2026-06-22 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-06-22 |
| [#3493](https://github.com/ROCm/aiter/pull/3493) | Add MiniMax-M2.7 MI325X (gfx942) tuned configs + fix fmoe tu... | @jiejingzhangamd | open | 2026-06-02 | 2026-06-22 |
| [#3456](https://github.com/ROCm/aiter/pull/3456) | [TRITON][GLUON] Add Triton and Gluon kernels for DSv4 compre... | @leonling-ll | draft | 2026-06-01 | 2026-06-22 |
| [#3495](https://github.com/ROCm/aiter/pull/3495) | mxfp4fp8 fmha gfx950 | @jcaraban | open | 2026-06-02 | 2026-06-20 |
| [#2488](https://github.com/ROCm/aiter/pull/2488) | GEMMa8w8 blockscale gluon gfx12 kernel v2 | @amirumoAMD | open | 2026-03-26 | 2026-06-19 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-06-19 |
| [#2340](https://github.com/ROCm/aiter/pull/2340) | feat: add INT8/INT4 quantization support for 2-stage ASM MoE... | @amd-zfyu | open | 2026-03-19 | 2026-06-19 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-06-19 |
| [#2179](https://github.com/ROCm/aiter/pull/2179) | Adds the ability to build static archives in addition to sha... | @Micky774 | open | 2026-03-04 | 2026-06-19 |
| [#2779](https://github.com/ROCm/aiter/pull/2779) | [Don't merge] Gluon pa bad case reproducer | @ganyi1996ppo | draft | 2026-04-17 | 2026-06-19 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-06-19 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-06-19 |
| [#2622](https://github.com/ROCm/aiter/pull/2622) | [FlyDSL] Tune MXFP4 MOE stage1 tile configs for DeepSeek-R1 | @sunway513 | open | 2026-04-05 | 2026-06-19 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-06-19 |
| [#2605](https://github.com/ROCm/aiter/pull/2605) | fix: replace hardcoded /opt/rocm paths with ROCM_HOME env va... | @zufayu | open | 2026-04-03 | 2026-06-19 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-06-19 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-06-19 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-06-19 |
| [#2585](https://github.com/ROCm/aiter/pull/2585) | feat(mla): support nhead < 16 in MLA decode via transparent ... | @ChuanLi1101 | open | 2026-04-01 | 2026-06-19 |
| [#2554](https://github.com/ROCm/aiter/pull/2554) | Remove torch dependency from module_moe_asm | @zufayu | open | 2026-03-31 | 2026-06-19 |
| [#2530](https://github.com/ROCm/aiter/pull/2530) | [DO NOT MERG] CI: test switch MI35x runners to DPX labels | @gyohuangxin | open | 2026-03-30 | 2026-06-19 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-06-19 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-06-19 |
| [#2509](https://github.com/ROCm/aiter/pull/2509) | [Triton] [Gluon] [GFX12] Add gluon gemm for a8w8 MoE blocksc... | @nsusanto | open | 2026-03-27 | 2026-06-19 |
| [#2504](https://github.com/ROCm/aiter/pull/2504) | [TRITON] Unified attention benchmark | @juuso-oskari | open | 2026-03-27 | 2026-06-19 |
| [#2478](https://github.com/ROCm/aiter/pull/2478) | Fix GPU memory access fault in CK MoE FP4 kernel with Expert... | @M4jupitercannon | open | 2026-03-26 | 2026-06-19 |
| [#2472](https://github.com/ROCm/aiter/pull/2472) | [Triton] [Gluon] [GFX12] add UA3D gluon kernel for gfx12 | @k50112113 | draft | 2026-03-25 | 2026-06-19 |
| [#2417](https://github.com/ROCm/aiter/pull/2417) | feat: CK-free shim + Triton MLA for (gfx1250) | @sunway513 | open | 2026-03-22 | 2026-06-19 |
| [#2409](https://github.com/ROCm/aiter/pull/2409) | Add gfx950 Triton GEMM tuning configs for DeepSeek-R1 shapes | @sunway513 | open | 2026-03-22 | 2026-06-19 |
| [#2401](https://github.com/ROCm/aiter/pull/2401) | Fix kernel map collision on MGPU context | @Micky774 | open | 2026-03-20 | 2026-06-19 |
| [#2352](https://github.com/ROCm/aiter/pull/2352) | [gfx1201] Enable RMSNorm support for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-06-19 |
| [#3254](https://github.com/ROCm/aiter/pull/3254) | feat(flydsl): two-stage a16w4 MoE GEMM — Python API, correct... | @apicciau | open | 2026-05-18 | 2026-06-19 |
| [#3222](https://github.com/ROCm/aiter/pull/3222) | FlyDSL sage mxfp4 (v2) | @hellozhuo-amd | draft | 2026-05-15 | 2026-06-19 |
| [#3186](https://github.com/ROCm/aiter/pull/3186) | i8fp8 fmha gfx950/942 asm | @jcaraban | open | 2026-05-14 | 2026-06-19 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-06-19 |
| [#3165](https://github.com/ROCm/aiter/pull/3165) | FlyDSL sage v1 | @hellozhuo-amd | draft | 2026-05-13 | 2026-06-19 |
| [#3160](https://github.com/ROCm/aiter/pull/3160) | [DO NOT MERGE] CI: split Aiter wheel prebuild by architectur... | @gyohuangxin | open | 2026-05-13 | 2026-06-19 |
| [#3114](https://github.com/ROCm/aiter/pull/3114) | Update gluon | @fsx950223 | open | 2026-05-11 | 2026-06-19 |
| [#3094](https://github.com/ROCm/aiter/pull/3094) | [FLYDSL] [TRITON] Attention backward mxfp8 gfx950 | @lburzawa | open | 2026-05-08 | 2026-06-19 |
| [#3093](https://github.com/ROCm/aiter/pull/3093) | [Gluon] fused_mxfp4_quant for gfx1250 | @amd-jrosas | open | 2026-05-08 | 2026-06-19 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-06-19 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-06-19 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-06-19 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-06-19 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-06-19 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-06-19 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-06-19 |
| [#2936](https://github.com/ROCm/aiter/pull/2936) | [gluon][pa_mqa_logits] memory-safety: mask all OutLogits buf... | @maeehart | draft | 2026-04-28 | 2026-06-19 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-06-19 |
| [#2844](https://github.com/ROCm/aiter/pull/2844) | aiter/__init__: per-module try/except so the first broken op... | @ChuanLi1101 | open | 2026-04-21 | 2026-06-19 |
| [#2839](https://github.com/ROCm/aiter/pull/2839) | fix(build): add missing c10/hip/HIPException.h include in ga... | @ChuanLi1101 | open | 2026-04-21 | 2026-06-19 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-06-19 |
| [#3430](https://github.com/ROCm/aiter/pull/3430) | Add native integer all-gather dtype support and optimize gfx... | @hubertlu-tw | open | 2026-05-29 | 2026-06-19 |
| [#3355](https://github.com/ROCm/aiter/pull/3355) | [gluon gemm_afp4wfp4] Fix data access pattern to remove redu... | @Arech8 | open | 2026-05-26 | 2026-06-19 |
| [#3321](https://github.com/ROCm/aiter/pull/3321) | [FlyDSL AOT] Skip kernels for unrequested arches when GPU_AR... | @eppaneamd | open | 2026-05-24 | 2026-06-19 |
| [#3286](https://github.com/ROCm/aiter/pull/3286) | [Triton] [ATOM] DSV4 mxfp8 GEMM | @k50112113 | draft | 2026-05-20 | 2026-06-19 |
| [#3275](https://github.com/ROCm/aiter/pull/3275) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-06-19 |
| [#3272](https://github.com/ROCm/aiter/pull/3272) | Revert "[Triton] Declare triton>=3.6.0 dependency " | @gyohuangxin | open | 2026-05-19 | 2026-06-19 |
| [#3263](https://github.com/ROCm/aiter/pull/3263) | Fused ar(use_new=false) + rmsnorm | @IzacharyI | open | 2026-05-19 | 2026-06-19 |
| [#3249](https://github.com/ROCm/aiter/pull/3249) | [Perf] add_rmsnorm_quant: fuse two block reduces into single... | @kudomcho | open | 2026-05-18 | 2026-06-19 |
| [#3242](https://github.com/ROCm/aiter/pull/3242) | [Bugfix] Fix op schema for fmha_v3_fowd and gemm_a16w16 | @Phi-C | open | 2026-05-18 | 2026-06-19 |
| [#3152](https://github.com/ROCm/aiter/pull/3152) | [feat] Add HIP inline asm GDN decode op | @IzacharyI | open | 2026-05-12 | 2026-06-19 |
| [#3653](https://github.com/ROCm/aiter/pull/3653) | [Perf] Add Qwen3-32B-FP8 tuned configs for MI308X | @ningding01 | open | 2026-06-10 | 2026-06-19 |
| [#3613](https://github.com/ROCm/aiter/pull/3613) | [Triton] [Gluon] [GFX12] mHC_post_pre kernel | @k50112113 | draft | 2026-06-08 | 2026-06-19 |
| [#3564](https://github.com/ROCm/aiter/pull/3564) | [TRITON] Clean-up pa_mqa_logits (deepgemm attention) benchma... | @cagrikymk | open | 2026-06-05 | 2026-06-19 |
| [#3548](https://github.com/ROCm/aiter/pull/3548) | [MOE]: production EP + pure-TP-pad stack for Step-3.5-Flash-... | @LJ-underdog | open | 2026-06-05 | 2026-06-19 |
| [#3538](https://github.com/ROCm/aiter/pull/3538) | fix(flydsl_moe_stage1): pre-zero output when inter_dim_pad >... | @kkHuang-amd | open | 2026-06-04 | 2026-06-19 |
| [#3535](https://github.com/ROCm/aiter/pull/3535) | Add Radeon GPU CI smoke test | @vivienfanghuagood | open | 2026-06-04 | 2026-06-19 |
| [#3523](https://github.com/ROCm/aiter/pull/3523) | ci(sglang-downstream): add GLM-5-MXFP4 accuracy gate | @sunway513 | draft | 2026-06-03 | 2026-06-19 |
| [#3472](https://github.com/ROCm/aiter/pull/3472) | Add GQA<=8 blk32 mtp=0 per token asm kernel for pa | @JohnNikolay84 | open | 2026-06-01 | 2026-06-19 |
| [#3785](https://github.com/ROCm/aiter/pull/3785) | [fea] Add fp32 RMSNorm output for fused qk group quant | @wuhuikx | open | 2026-06-18 | 2026-06-19 |
| [#3690](https://github.com/ROCm/aiter/pull/3690) | [TRITON] Sparge vfa | @Chi-Chu319 | open | 2026-06-12 | 2026-06-19 |
| [#3364](https://github.com/ROCm/aiter/pull/3364) | Reduced gfx1250 triton_tests for FFM CI | @Boss2002n | open | 2026-05-26 | 2026-06-18 |
| [#2228](https://github.com/ROCm/aiter/pull/2228) | [TRITON] Moe a8w4 gluon gfx1250 | @lburzawa | open | 2026-03-09 | 2026-03-18 |
| [#1831](https://github.com/ROCm/aiter/pull/1831) | [Triton] Remove mod N in ptr offsets for preshuffle gemms | @k50112113 | open | 2026-01-13 | 2026-03-18 |
| [#1829](https://github.com/ROCm/aiter/pull/1829) | [TRITON] Support gfx1201 for triton gemm_a8w8_blockscale | @big-yellow-duck | open | 2026-01-13 | 2026-03-18 |
| [#1484](https://github.com/ROCm/aiter/pull/1484) | [TRITON] Extend fp8 mqa tests | @cagrikymk | open | 2025-11-24 | 2026-03-18 |
| [#1195](https://github.com/ROCm/aiter/pull/1195) | [Triton] A8W8 blockscale GEMM tuning for Qwen3 | @anhminhnguyenhoang | open | 2025-10-14 | 2026-03-18 |
| [#1031](https://github.com/ROCm/aiter/pull/1031) | [TRITON] Fix GEMM a16w16 and a8w8 splitK Triton | @lucas-santos-amd | open | 2025-09-18 | 2026-03-18 |
| [#985](https://github.com/ROCm/aiter/pull/985) | [TRITON]: Optimize FF Fused Kernels | @willzhou-amd | open | 2025-09-10 | 2026-03-18 |
| [#2306](https://github.com/ROCm/aiter/pull/2306) | [TRITON] Gluon extend-attention kernel for gfx950 | @realvideogame2 | open | 2026-03-17 | 2026-03-18 |
| [#2277](https://github.com/ROCm/aiter/pull/2277) | [Triton MoE] Add optimized Gluon kernel for AMD CDNA3 with K... | @jwu10003 | open | 2026-03-14 | 2026-03-18 |
| [#2197](https://github.com/ROCm/aiter/pull/2197) | Add Gluon GEMM tutorial | @mengfei-jiang | open | 2026-03-06 | 2026-03-18 |
| [#1980](https://github.com/ROCm/aiter/pull/1980) | [Triton]-Flashattn - sync the changes from tridao PR2217 | @tianwyan | open | 2026-02-05 | 2026-03-18 |
| [#1936](https://github.com/ROCm/aiter/pull/1936) | [FMHA] Add Architecture safety check for enable_gluon_pa_mqa... | @raikonenfnu | open | 2026-01-31 | 2026-03-18 |
| [#1888](https://github.com/ROCm/aiter/pull/1888) | [TRITON] support.conv3d.triton.kernel | @kxyk99 | open | 2026-01-22 | 2026-03-18 |
| [#1232](https://github.com/ROCm/aiter/pull/1232) | [TRITON] FP8 blockscale fix and finetuning for Deepseek on M... | @juuso-oskari | open | 2025-10-21 | 2025-11-24 |
| [#4212](https://github.com/ROCm/aiter/pull/4212) | CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-07-13 | 2026-07-15 |
| [#3656](https://github.com/ROCm/aiter/pull/3656) | Fix fmoe run config quant align | @yzhou103 | merged | 2026-06-10 | 2026-07-15 |
| [#3997](https://github.com/ROCm/aiter/pull/3997) | fix(fused_moe): require KBatch >= 2 for block-fp8 split-k | @ZiguanWang | merged | 2026-06-29 | 2026-07-15 |
| [#2226](https://github.com/ROCm/aiter/pull/2226) | fix crash on import if git is missing | @dtrifiro | merged | 2026-03-09 | 2026-07-14 |
| [#4227](https://github.com/ROCm/aiter/pull/4227) | Add forward compatibility to get_mla_metadata_v1 | @ruanjm | merged | 2026-07-14 | 2026-07-14 |
| [#4231](https://github.com/ROCm/aiter/pull/4231) | Add e8m0 block-scale output to fused rmsnorm quant | @junhaha666 | merged | 2026-07-14 | 2026-07-14 |
| [#3257](https://github.com/ROCm/aiter/pull/3257) | [Bugfix][Triton][Hardware][MI300X] fp8_mqa_logits: shrink BL... | @jin-amd | merged | 2026-05-18 | 2026-07-14 |
| [#4229](https://github.com/ROCm/aiter/pull/4229) | Dev/yadai moe ep | @yadaish | merged | 2026-07-14 | 2026-07-14 |
| [#4195](https://github.com/ROCm/aiter/pull/4195) | fix(dsv4): floor fp8 e8m0 group amax to avoid zero-scale in ... | @yzhou103 | merged | 2026-07-11 | 2026-07-14 |
| [#3459](https://github.com/ROCm/aiter/pull/3459) | Introduce the 1st Gen 64 and 128 Heads MLA Decode Kernel for... | @ruanjm | merged | 2026-06-01 | 2026-07-14 |
| [#4215](https://github.com/ROCm/aiter/pull/4215) | Bump flydsl to 0.2.4 | @coderfeli | merged | 2026-07-13 | 2026-07-14 |
| [#4196](https://github.com/ROCm/aiter/pull/4196) | gfx1250 moe occupancy improve & moe gemm kernel args preload... | @yadaish | merged | 2026-07-11 | 2026-07-14 |
| [#4157](https://github.com/ROCm/aiter/pull/4157) | Dev/env to control kernel preload | @yadaish | merged | 2026-07-09 | 2026-07-14 |
| [#4150](https://github.com/ROCm/aiter/pull/4150) | feat(dsv4): mxscale/MoE gfx1250 optimization | @yadaish | merged | 2026-07-09 | 2026-07-14 |
| [#4068](https://github.com/ROCm/aiter/pull/4068) | bf16 asm mha: enable doubleq and kv reverse to improve perf | @tingchen988 | merged | 2026-07-03 | 2026-07-14 |
| [#3593](https://github.com/ROCm/aiter/pull/3593) | MOE: add AITER_MOE_FORCE_BF16_ACT to force bf16 activations ... | @sphinx07 | merged | 2026-06-08 | 2026-07-14 |
| [#4225](https://github.com/ROCm/aiter/pull/4225) | Revert "MOE: add AITER_MOE_FORCE_BF16_ACT to force bf16 acti... | @valarLip | merged | 2026-07-14 | 2026-07-14 |
| [#3974](https://github.com/ROCm/aiter/pull/3974) | [Tune] Add qwen3.5-397B MXFP4 a16w16 GEMM tuning configs | @yichiche | merged | 2026-06-28 | 2026-07-13 |
| [#4117](https://github.com/ROCm/aiter/pull/4117) | [MLA v4 nm] Ragged split_indptr short-seq fix + OOB/bucket t... | @liyjiang | merged | 2026-07-07 | 2026-07-13 |
| [#4204](https://github.com/ROCm/aiter/pull/4204) | [gfx942][opus] Support A8W8 blockscale BpreShuffle GEMM | @yifehuan | merged | 2026-07-12 | 2026-07-13 |
| [#4186](https://github.com/ROCm/aiter/pull/4186) | Revert "refine mla v4 co (#4129)" | @feifei14119 | merged | 2026-07-10 | 2026-07-13 |
| [#3934](https://github.com/ROCm/aiter/pull/3934) | [test] test_topk_plain: parametrize sweep to fix collection-... | @JohnQinAMD | merged | 2026-06-25 | 2026-07-13 |
| [#4098](https://github.com/ROCm/aiter/pull/4098) | minimax fp8 index cache write | @ganyi1996ppo | merged | 2026-07-06 | 2026-07-13 |
| [#4154](https://github.com/ROCm/aiter/pull/4154) | [gfx1250]support causal mask and add init-pattern for asm mx... | @shay-li77 | merged | 2026-07-09 | 2026-07-13 |
| [#3331](https://github.com/ROCm/aiter/pull/3331) | [Optest] Fix test_moe.py activation cli arg parse | @sammysun0711 | merged | 2026-05-25 | 2026-07-13 |
| [#3111](https://github.com/ROCm/aiter/pull/3111) | Add FMoE run_config mismatch diagnostics | @zihaomu | merged | 2026-05-11 | 2026-07-13 |
| [#3681](https://github.com/ROCm/aiter/pull/3681) | [FLYDSL] Support paged mqa logits fp4 kernel | @zhiding512 | merged | 2026-06-11 | 2026-07-13 |
| [#4104](https://github.com/ROCm/aiter/pull/4104) | Add QuickReduce RMSNorm fusion kernel | @mjkvaak-amd | merged | 2026-07-06 | 2026-07-13 |
| [#4053](https://github.com/ROCm/aiter/pull/4053) | [MoE] Optimize Qwen3.5-397B PTPC FP8 MoE performance for bat... | @apinge | merged | 2026-07-02 | 2026-07-13 |
| [#4202](https://github.com/ROCm/aiter/pull/4202) | feat(gemm_a8w8_blockscale_bpreshuffle): route decode-M DeepS... | @valarLip | merged | 2026-07-12 | 2026-07-12 |
| [#4201](https://github.com/ROCm/aiter/pull/4201) | [Triton] [Gluon] [GFX12] pa_decode_sparse pa_prefill_sparse ... | @k50112113 | merged | 2026-07-12 | 2026-07-12 |
| [#4200](https://github.com/ROCm/aiter/pull/4200) | [Triton] [Gluon] [GFX12] Gluon BF16 BMM | @k50112113 | merged | 2026-07-12 | 2026-07-12 |
| [#4194](https://github.com/ROCm/aiter/pull/4194) | [Sglang+ATOM]Fix Qwen3.5 397B gfx942 tuned GEMM dispatch | @zhangxinyuanliuhengyu | merged | 2026-07-11 | 2026-07-12 |
| [#4197](https://github.com/ROCm/aiter/pull/4197) | Fix/gfx1250 flydsl jit | @valarLip | merged | 2026-07-11 | 2026-07-12 |
| [#4156](https://github.com/ROCm/aiter/pull/4156) | update mla qh16 to support global load kv | @fangche123 | merged | 2026-07-09 | 2026-07-12 |
| [#4199](https://github.com/ROCm/aiter/pull/4199) | [Triton] a8w8 gemm remove GRID_MN and re-tune Pro and Flash | @k50112113 | merged | 2026-07-11 | 2026-07-12 |
| [#4192](https://github.com/ROCm/aiter/pull/4192) | tuning a8w8 | @omuhamma | merged | 2026-07-10 | 2026-07-11 |
| [#4033](https://github.com/ROCm/aiter/pull/4033) | [Triton] Feat/qwen sage attention v1  smooth q and Hadamard ... | @LiuYinfeng01 | merged | 2026-07-01 | 2026-07-11 |
| [#3188](https://github.com/ROCm/aiter/pull/3188) | Add native MLA QH64 fp8 persistent decode kernel for gfx942 | @vstakhov-amd | merged | 2026-05-14 | 2026-07-11 |
| [#4178](https://github.com/ROCm/aiter/pull/4178) | [gfx1250][triton] a8w8 block_size_k 128 => 64 guarded by AIT... | @Dewei-Wang-sh | merged | 2026-07-10 | 2026-07-11 |
| [#4185](https://github.com/ROCm/aiter/pull/4185) | CI: update triton version from d0d77a509 to 89002410 | @yuyzhang512 | merged | 2026-07-10 | 2026-07-11 |
| [#4189](https://github.com/ROCm/aiter/pull/4189) | API name change | @Boss2002n | merged | 2026-07-10 | 2026-07-11 |
| [#3911](https://github.com/ROCm/aiter/pull/3911) | configs(fmoe): add expert=256/topk=8 MXFP4 tuned entries for... | @Rohan138 | merged | 2026-06-24 | 2026-07-11 |
| [#4173](https://github.com/ROCm/aiter/pull/4173) | Satya/aiter gguu shuffle deps | @Boss2002n | merged | 2026-07-10 | 2026-07-10 |
| [#4093](https://github.com/ROCm/aiter/pull/4093) | update afp4wfp4/afp16wfp4 config for triton asynkmarker | @yanxuer-999 | merged | 2026-07-06 | 2026-07-10 |
| [#4163](https://github.com/ROCm/aiter/pull/4163) | Fix gfx950 triton codegen crashes and numeric miscompiles on... | @yuyzhang512 | merged | 2026-07-09 | 2026-07-10 |
| [#4151](https://github.com/ROCm/aiter/pull/4151) | A8w8 dsl | @solinzby1 | merged | 2026-07-09 | 2026-07-10 |
| [#4152](https://github.com/ROCm/aiter/pull/4152) | [opus] Optimize Opus MoE A8W4 stage2 candidate set | @yifehuan | merged | 2026-07-09 | 2026-07-10 |
| [#4172](https://github.com/ROCm/aiter/pull/4172) | [CI] fix oom of moe ci | @benenzhu | merged | 2026-07-10 | 2026-07-10 |
| [#4155](https://github.com/ROCm/aiter/pull/4155) | [gfx1250] fmha fwd bf16 hdim128/64 support per tensor bf16 f... | @tingchen988 | merged | 2026-07-09 | 2026-07-10 |
| [#4116](https://github.com/ROCm/aiter/pull/4116) | Update flydsl 0.2.3 | @coderfeli | merged | 2026-07-07 | 2026-07-10 |
| [#4159](https://github.com/ROCm/aiter/pull/4159) | [flydsl] qk_norm_rope: paged (block_tables) SWA cache-write ... | @yhl-amd | merged | 2026-07-09 | 2026-07-09 |
| [#4164](https://github.com/ROCm/aiter/pull/4164) | CI: Modify the runner override in ATOM tests | @gyohuangxin | merged | 2026-07-09 | 2026-07-09 |
| [#4130](https://github.com/ROCm/aiter/pull/4130) | [Perf]update moe tuend config | @lalala-sh | merged | 2026-07-08 | 2026-07-09 |
| [#4160](https://github.com/ROCm/aiter/pull/4160) | Add review-pr Claude Code skill for aiter PRs | @zufayu | merged | 2026-07-09 | 2026-07-09 |
| [#4153](https://github.com/ROCm/aiter/pull/4153) | fea: gfx1250 comm kernel naive impl | @TennyWang1223 | merged | 2026-07-09 | 2026-07-09 |
| [#3832](https://github.com/ROCm/aiter/pull/3832) | [RadeonFlow] MXFP4 (a4w4) MoE backend for gfx950 | @coderfeli | merged | 2026-06-22 | 2026-07-09 |
| [#4122](https://github.com/ROCm/aiter/pull/4122) | add get_getamdgpu_arch to support The Rock | @rasmith | merged | 2026-07-07 | 2026-07-09 |
| [#4129](https://github.com/ROCm/aiter/pull/4129) | refine mla v4 co | @feifei14119 | merged | 2026-07-08 | 2026-07-09 |
| [#3924](https://github.com/ROCm/aiter/pull/3924) | feat: support flydsl all2all | @JiaoliangYu | merged | 2026-06-25 | 2026-07-09 |
| [#4148](https://github.com/ROCm/aiter/pull/4148) | Skip MI300X 8 GPU multi-GPU tests | @gyohuangxin | merged | 2026-07-09 | 2026-07-09 |
| [#4128](https://github.com/ROCm/aiter/pull/4128) | [Triton] [Gluon] [GFX12] pa_prefill_sparse | @k50112113 | merged | 2026-07-08 | 2026-07-08 |
| [#4125](https://github.com/ROCm/aiter/pull/4125) | [Triton] Shaoclee/a8w8 more more tune | @k50112113 | merged | 2026-07-07 | 2026-07-08 |
| [#4138](https://github.com/ROCm/aiter/pull/4138) | Revert "CI: make test log uploads non-blocking" | @gyohuangxin | merged | 2026-07-08 | 2026-07-08 |
| [#3422](https://github.com/ROCm/aiter/pull/3422) | Add GLM-5.1 FP8 blockscale GEMM/FMoE tunings for gfx942 (MI3... | @akii96 | merged | 2026-05-29 | 2026-07-08 |
| [#4131](https://github.com/ROCm/aiter/pull/4131) | [Fix][dist] wrap per_group emit_bf16 fused AR+RMSNorm+quant ... | @zejunchen-zejun | merged | 2026-07-08 | 2026-07-08 |
| [#4135](https://github.com/ROCm/aiter/pull/4135) | perf(flydsl-moe): reduce a8w4 GEMM2 VGPR pressure for DSV4 | @charlieguo1106 | merged | 2026-07-08 | 2026-07-08 |
| [#4123](https://github.com/ROCm/aiter/pull/4123) | CI: make test log uploads non-blocking | @gyohuangxin | merged | 2026-07-07 | 2026-07-08 |
| [#4095](https://github.com/ROCm/aiter/pull/4095) | [GLM5.2] add tuned configs for GLM-5.2-FP8 fp8 PTPC GEMM and... | @gbyu-amd | merged | 2026-07-06 | 2026-07-08 |
| [#4025](https://github.com/ROCm/aiter/pull/4025) | Remove FlyDSL fallback machinery from MoE tuning (FlyDSL now... | @coderfeli | merged | 2026-07-01 | 2026-07-08 |
| [#4120](https://github.com/ROCm/aiter/pull/4120) | CI: sync ATOM Kimi default model name | @yifehuan | merged | 2026-07-07 | 2026-07-08 |
| [#4079](https://github.com/ROCm/aiter/pull/4079) | condense comments | @JaxChen29 | merged | 2026-07-04 | 2026-07-08 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-07-15T09:47:27Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1473](https://github.com/ROCm/ATOM/pull/1473) | enable minimax m3 fp8 index cache and fuse index_score_kerne... | @ganyi1996ppo | open | 2026-07-06 | 2026-07-15 |
| [#1607](https://github.com/ROCm/ATOM/pull/1607) | [atom/atom-vllm] update GLM5.2 FP8/MXFP4 in recipe, nightly ... | @zejunchen-zejun | draft | 2026-07-15 | 2026-07-15 |
| [#1608](https://github.com/ROCm/ATOM/pull/1608) | [atom-ci] Fix aiperf install to preserve SGLang dependency s... | @junyyang-amd | open | 2026-07-15 | 2026-07-15 |
| [#1210](https://github.com/ROCm/ATOM/pull/1210) | [WIP](eplb): EPLB_V0.1 | @JiaoliangYu | draft | 2026-06-15 | 2026-07-15 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-07-15 |
| [#1606](https://github.com/ROCm/ATOM/pull/1606) | [SGL][GLM5.2]align attention path with atom | @zhuyuhua-v | draft | 2026-07-15 | 2026-07-15 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-07-15 |
| [#1591](https://github.com/ROCm/ATOM/pull/1591) | Fix DeepSeek-V4 SGLang index top-k metadata | @junna2016 | open | 2026-07-14 | 2026-07-15 |
| [#1585](https://github.com/ROCm/ATOM/pull/1585) | [Sglang+atom]Update ATOM SGLang plugin for SGLang 0.5.15 | @zhangxinyuanliuhengyu | open | 2026-07-14 | 2026-07-15 |
| [#1414](https://github.com/ROCm/ATOM/pull/1414) | [Spec Decode] Add DeepSeek-V4 DSpark speculative decoding | @ZhangLirong-amd | open | 2026-06-30 | 2026-07-15 |
| [#1530](https://github.com/ROCm/ATOM/pull/1530) | [ATOM-SGL/VLLM-CI] Modify testing cases for SGLang and vLLM. | @junyyang-amd | open | 2026-07-09 | 2026-07-15 |
| [#1576](https://github.com/ROCm/ATOM/pull/1576) | [Sglang Plugin] Support GLM5.2 FP8 and FP4 | @qichu-yun | open | 2026-07-13 | 2026-07-15 |
| [#1600](https://github.com/ROCm/ATOM/pull/1600) | [dsv4] kv cache fp8 | @amd-ruitang3 | open | 2026-07-14 | 2026-07-15 |
| [#1594](https://github.com/ROCm/ATOM/pull/1594) | Add MoRIIO write-push KV transfer with DeepSeek-V4 and fabri... | @maning00 | open | 2026-07-14 | 2026-07-15 |
| [#1604](https://github.com/ROCm/ATOM/pull/1604) | [feat](vllm): upgrade vllm to 0.25.1 | @PerryZhang01 | draft | 2026-07-15 | 2026-07-15 |
| [#477](https://github.com/ROCm/ATOM/pull/477) | adding profiling context | @mohbasit | open | 2026-04-02 | 2026-07-15 |
| [#1603](https://github.com/ROCm/ATOM/pull/1603) | multi-node dp support | @ganyi1996ppo | open | 2026-07-15 | 2026-07-15 |
| [#1586](https://github.com/ROCm/ATOM/pull/1586) | Fix: support agentic dataset benchmark under PD disaggregati... | @Phi-C | open | 2026-07-14 | 2026-07-15 |
| [#1465](https://github.com/ROCm/ATOM/pull/1465) | perf: optimize model loading speed | @ftyghome | open | 2026-07-04 | 2026-07-15 |
| [#1587](https://github.com/ROCm/ATOM/pull/1587) | [feat](vllm): upgrade vllm to v0.25.1 | @PerryZhang01 | draft | 2026-07-14 | 2026-07-15 |
| [#1596](https://github.com/ROCm/ATOM/pull/1596) | [Bugfix] DeepSeek-V4 DP+PIECEWISE: force aiter unreg collect... | @ZhangLirong-amd | open | 2026-07-14 | 2026-07-15 |
| [#1549](https://github.com/ROCm/ATOM/pull/1549) | review-pr skill v2: dispatch gap rule, arch-constant FP fix,... | @zufayu | open | 2026-07-10 | 2026-07-15 |
| [#1599](https://github.com/ROCm/ATOM/pull/1599) | [atom sgl] glm 5.2 mtp optimize | @ZhiweiYan-96 | draft | 2026-07-14 | 2026-07-15 |
| [#1564](https://github.com/ROCm/ATOM/pull/1564) | [ATOM SGL] Minimax M3 FP8 & EAGLE | @ZhiweiYan-96 | draft | 2026-07-11 | 2026-07-15 |
| [#1578](https://github.com/ROCm/ATOM/pull/1578) | [ATOM SGL] GLM 5.2 MTP | @ZhiweiYan-96 | draft | 2026-07-13 | 2026-07-15 |
| [#1584](https://github.com/ROCm/ATOM/pull/1584) | [fix] MXFP4 MoE: single-source use_triton_moe() to fix gfx94... | @zejunchen-zejun | open | 2026-07-14 | 2026-07-15 |
| [#1590](https://github.com/ROCm/ATOM/pull/1590) | Avoid cancelling heavy CI on review events | @gyohuangxin | open | 2026-07-14 | 2026-07-15 |
| [#1597](https://github.com/ROCm/ATOM/pull/1597) | [Misc][UI] Allow using --kv-cache-dtype kebab-case flag  | @simondanielsson | open | 2026-07-14 | 2026-07-15 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#1553](https://github.com/ROCm/ATOM/pull/1553) | [feat][PCP] Enable PCP MoE-Merge+TBO for DeepSeek V4 | @yitingw1 | open | 2026-07-10 | 2026-07-15 |
| [#860](https://github.com/ROCm/ATOM/pull/860) | Atom-RAPIDserve merge | @amnamasood-amd | open | 2026-05-20 | 2026-07-14 |
| [#1501](https://github.com/ROCm/ATOM/pull/1501) | [Feature] Enable cache aware DP routing for standalone ATOMe... | @simondanielsson | open | 2026-07-07 | 2026-07-14 |
| [#1459](https://github.com/ROCm/ATOM/pull/1459) | [Feature] Supports dequantization of common Quark formats | @haoyangli0109 | draft | 2026-07-03 | 2026-07-14 |
| [#1552](https://github.com/ROCm/ATOM/pull/1552) | [Feature] support Chunked Pipeline Parallelism + PD Disaggre... | @Jasen2201 | draft | 2026-07-10 | 2026-07-14 |
| [#1518](https://github.com/ROCm/ATOM/pull/1518) | [vLLM-ATOM] Support EAGLE3 spec decoding for MiniMax-M3 | @kliuae | draft | 2026-07-08 | 2026-07-14 |
| [#1514](https://github.com/ROCm/ATOM/pull/1514) | enable pcp for dsa models | @whx-sjtu | open | 2026-07-08 | 2026-07-14 |
| [#1575](https://github.com/ROCm/ATOM/pull/1575) | Add Kimi-K2.5 MXFP4 PD disaggregation recipe and update conf... | @Jasen2201 | open | 2026-07-13 | 2026-07-14 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-14 |
| [#1579](https://github.com/ROCm/ATOM/pull/1579) | Feiw/v4/mlapr | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#1581](https://github.com/ROCm/ATOM/pull/1581) | DeepSeek-V4: FP4 CSA indexer (gfx950) | @junhaha666 | open | 2026-07-13 | 2026-07-14 |
| [#1499](https://github.com/ROCm/ATOM/pull/1499) | [KVConnector] native scale-up KV connector (HIP VMM, kv_conn... | @carlushuang | open | 2026-07-07 | 2026-07-14 |
| [#1337](https://github.com/ROCm/ATOM/pull/1337) | [gfx1151] Online INT8 W8A8 for Qwen3.6 27B / 35B-A3B on RDNA... | @carlushuang | open | 2026-06-24 | 2026-07-14 |
| [#1358](https://github.com/ROCm/ATOM/pull/1358) | fix(prefix-cache): bypass prefix caching for multimodal sequ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1357](https://github.com/ROCm/ATOM/pull/1357) | feat(gfx1151): custom head-dim-tiled Triton flash attention ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1314](https://github.com/ROCm/ATOM/pull/1314) | [gfx1151] Qwen3.5/3.6 (GDN hybrid) BF16 on RDNA3.5 via nativ... | @carlushuang | open | 2026-06-22 | 2026-07-14 |
| [#1316](https://github.com/ROCm/ATOM/pull/1316) | [KV-events] block token_offset + sequence numbers + replay | @bongwoobak | open | 2026-06-22 | 2026-07-14 |
| [#1317](https://github.com/ROCm/ATOM/pull/1317) | Add MiniMax-M3 (MXFP4/AttnFP8) model support | @thpereir | open | 2026-06-22 | 2026-07-13 |
| [#1570](https://github.com/ROCm/ATOM/pull/1570) | wire GUGU - act+quant fusion into triton decode  | @Boss2002n | open | 2026-07-12 | 2026-07-13 |
| [#1369](https://github.com/ROCm/ATOM/pull/1369) | Enable TBO Support & Fix Accuracy Regressions for Kimi K2.5 | @jpy794 | open | 2026-06-26 | 2026-07-13 |
| [#1441](https://github.com/ROCm/ATOM/pull/1441) | [Bugfix] Cancel inference on client disconnect + fix non-str... | @yhl-amd | open | 2026-07-02 | 2026-07-13 |
| [#1201](https://github.com/ROCm/ATOM/pull/1201) | [vLLM-ATOM] Support Eagle 3.1 spec decoding | @kliuae | open | 2026-06-12 | 2026-07-13 |
| [#1403](https://github.com/ROCm/ATOM/pull/1403) | enable deepseek v4 kv cache fp8 | @amd-ruitang3 | open | 2026-06-29 | 2026-07-13 |
| [#1571](https://github.com/ROCm/ATOM/pull/1571) | Guanbao/fix atom mtp memory fault | @gbyu-amd | draft | 2026-07-13 | 2026-07-13 |
| [#1563](https://github.com/ROCm/ATOM/pull/1563) | [Frontend] DeepSeek-V4 native OpenAI/Anthropic/Responses API... | @yhl-amd | draft | 2026-07-10 | 2026-07-13 |
| [#1559](https://github.com/ROCm/ATOM/pull/1559) | fix | @gbyu-amd | draft | 2026-07-10 | 2026-07-13 |
| [#1495](https://github.com/ROCm/ATOM/pull/1495) | fix(kv): reserve prefill-activation headroom and size KV poo... | @carlushuang | draft | 2026-07-07 | 2026-07-13 |
| [#1500](https://github.com/ROCm/ATOM/pull/1500) | [feature] online quantize weights when loading weights | @haoyangli0109 | draft | 2026-07-07 | 2026-07-13 |
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
| [#847](https://github.com/ROCm/ATOM/pull/847) | [feat][DCP] Enable MLA DCP (Decode Context Parallel) | @yitingw1 | draft | 2026-05-20 | 2026-07-13 |
| [#918](https://github.com/ROCm/ATOM/pull/918) | remove ssm index copy | @ganyi1996ppo | draft | 2026-05-26 | 2026-07-13 |
| [#960](https://github.com/ROCm/ATOM/pull/960) | deepseek v4 fp8_einsum enable | @ganyi1996ppo | draft | 2026-05-28 | 2026-07-13 |
| [#969](https://github.com/ROCm/ATOM/pull/969) | 455 test yadai dump | @yadaish | draft | 2026-05-28 | 2026-07-13 |
| [#985](https://github.com/ROCm/ATOM/pull/985) | ci(sglang): add Kimi-K2 e2e accuracy + perf regression | @sunway513 | draft | 2026-05-30 | 2026-07-13 |
| [#1007](https://github.com/ROCm/ATOM/pull/1007) | Gfx1250 bringup moe | @yadaish | draft | 2026-06-01 | 2026-07-13 |
| [#1045](https://github.com/ROCm/ATOM/pull/1045) | gpt-oss WAs + triton moe a8w4 support | @ahmed-bsod | draft | 2026-06-03 | 2026-07-13 |
| [#1054](https://github.com/ROCm/ATOM/pull/1054) | [atom-vllm MLA] add back missing concat+quant kernel from or... | @zejunchen-zejun | draft | 2026-06-03 | 2026-07-13 |
| [#1070](https://github.com/ROCm/ATOM/pull/1070) | [atom-vllm] remove benchmark override | @zejunchen-zejun | draft | 2026-06-04 | 2026-07-13 |
| [#1138](https://github.com/ROCm/ATOM/pull/1138) | [WIP][ATOM SGLang] Plan stream for specv2 | @ZhiweiYan-96 | draft | 2026-06-09 | 2026-07-13 |
| [#1242](https://github.com/ROCm/ATOM/pull/1242) | pa draft | @vgokhale | draft | 2026-06-17 | 2026-07-13 |
| [#1283](https://github.com/ROCm/ATOM/pull/1283) | [vllm-atom] support eagle3 for M3 | @whx-sjtu | draft | 2026-06-18 | 2026-07-13 |
| [#1336](https://github.com/ROCm/ATOM/pull/1336) | Feat/low bit ep | @JiaoliangYu | draft | 2026-06-24 | 2026-07-13 |
| [#1341](https://github.com/ROCm/ATOM/pull/1341) | feat: add backend for moe | @JiaoliangYu | draft | 2026-06-24 | 2026-07-13 |
| [#1351](https://github.com/ROCm/ATOM/pull/1351) | [fix](qwen): fix qwen3.5-35b accuracy | @PerryZhang01 | draft | 2026-06-25 | 2026-07-13 |
| [#1490](https://github.com/ROCm/ATOM/pull/1490) | feat(prezero): wire split-K GEMM prezero into Kimi MLA/MoE d... | @ColorsWind | open | 2026-07-06 | 2026-07-13 |
| [#1412](https://github.com/ROCm/ATOM/pull/1412) | fix(rtpllm): adapt to RTP-LLM PyAttentionInputs host/device ... | @Jonathan-hwx | open | 2026-06-30 | 2026-07-13 |
| [#1402](https://github.com/ROCm/ATOM/pull/1402) | test: add block-level GPT-OSS attention test (real OAIAttent... | @carlushuang | open | 2026-06-29 | 2026-07-13 |
| [#1550](https://github.com/ROCm/ATOM/pull/1550) | fix gfx950 only | @feifei14119 | open | 2026-07-10 | 2026-07-13 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [MI455] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-30 | 2026-07-09 |
| [#1528](https://github.com/ROCm/ATOM/pull/1528) | di ci: glm-5-2 1p 1d && 2p1d | @JiaoliangYu | open | 2026-07-09 | 2026-07-09 |
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
| [#1443](https://github.com/ROCm/ATOM/pull/1443) | [Frontend] openai: multi-model tool-call parsing + reasoning... | @yhl-amd | open | 2026-07-02 | 2026-07-03 |
| [#1386](https://github.com/ROCm/ATOM/pull/1386) | docs: add gfx1200 (Navi 44) alongside gfx1201 for RDNA4 supp... | @0xDELUXA | open | 2026-06-28 | 2026-07-02 |
| [#1431](https://github.com/ROCm/ATOM/pull/1431) | feat(openai): add tool calling support with GPT-OSS Harmony ... | @seungrokj | open | 2026-07-01 | 2026-07-01 |
| [#1427](https://github.com/ROCm/ATOM/pull/1427) | Add feature to parse Hermes <tool_call>{json}</tool_call> to... | @hyukjlee | open | 2026-07-01 | 2026-07-01 |
| [#1399](https://github.com/ROCm/ATOM/pull/1399) | ci: add HIP debug probes for DO runner | @gyohuangxin | open | 2026-06-29 | 2026-06-30 |
| [#1387](https://github.com/ROCm/ATOM/pull/1387) | [plugin][script][recipe] update env vars for kimi and minima... | @gbyu-amd | open | 2026-06-28 | 2026-06-30 |
| [#1150](https://github.com/ROCm/ATOM/pull/1150) | minimax allreduce rmsnorm quant | @ganyi1996ppo | open | 2026-06-10 | 2026-06-29 |
| [#1300](https://github.com/ROCm/ATOM/pull/1300) | fix(minimax): restore qkv<=256 shape guard + harden compile-... | @sunway513 | open | 2026-06-20 | 2026-06-29 |
| [#1359](https://github.com/ROCm/ATOM/pull/1359) | feat: add dtype option in LayerNorm class | @cpersson-amd | open | 2026-06-25 | 2026-06-26 |
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
| [#675](https://github.com/ROCm/ATOM/pull/675) | Enable Cohere Command-R (CohereForCausalLM / Cohere2ForCausa... | @jatseng-ai | open | 2026-04-30 | 2026-06-26 |
| [#656](https://github.com/ROCm/ATOM/pull/656) | prefill gdr kernel enablement | @ganyi1996ppo | open | 2026-04-28 | 2026-06-26 |
| [#546](https://github.com/ROCm/ATOM/pull/546) | feat: add Gemma4 31B support for standalone and vLLM plugin ... | @ClementLinCF | open | 2026-04-12 | 2026-06-26 |
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
| [#1531](https://github.com/ROCm/ATOM/pull/1531) | [atom][atom-vllm] optimize MTP for GLM 5.2 | @whx-sjtu | merged | 2026-07-09 | 2026-07-15 |
| [#1602](https://github.com/ROCm/ATOM/pull/1602) | [ci][mesh] optimize mesh ci log and dashboard font | @wanzhenchn | merged | 2026-07-15 | 2026-07-15 |
| [#1592](https://github.com/ROCm/ATOM/pull/1592) | [atomesh-ci] Add GLM-5.2-MXFP4 TP4/TP8 to ATOMesh | @junyyang-amd | merged | 2026-07-14 | 2026-07-15 |
| [#1598](https://github.com/ROCm/ATOM/pull/1598) | [ci][mesh] optimize workflow dispatch and scripts for Spur c... | @wanzhenchn | merged | 2026-07-14 | 2026-07-14 |
| [#1589](https://github.com/ROCm/ATOM/pull/1589) | [Frontend] Abort streaming seq only on real disconnect, not ... | @yhl-amd | merged | 2026-07-14 | 2026-07-14 |
| [#1595](https://github.com/ROCm/ATOM/pull/1595) | [atom-vllm] DeepSeek-V4: reconcile CUDA-graph padding in vLL... | @whx-sjtu | merged | 2026-07-14 | 2026-07-14 |
| [#1572](https://github.com/ROCm/ATOM/pull/1572) | [gfx1250][FlyDSL] add blockscale gemm for dsv4 | @aoli26 | merged | 2026-07-13 | 2026-07-14 |
| [#1411](https://github.com/ROCm/ATOM/pull/1411) | [Enhancement] Supports per_block_fp8 format for online quant... | @haoyangli0109 | merged | 2026-06-30 | 2026-07-14 |
| [#1457](https://github.com/ROCm/ATOM/pull/1457) | add SemiAnalysis aiperf install to ATOM image | @Yuechguo | merged | 2026-07-03 | 2026-07-14 |
| [#1540](https://github.com/ROCm/ATOM/pull/1540) | update shuffle weight for gfx1250 | @yadaish | merged | 2026-07-09 | 2026-07-14 |
| [#1580](https://github.com/ROCm/ATOM/pull/1580) | [ci][mesh] improve ATOMesh benchmark configuration and dashb... | @wanzhenchn | merged | 2026-07-13 | 2026-07-14 |
| [#1562](https://github.com/ROCm/ATOM/pull/1562) | [Frontend] Abort engine request on client disconnect (free l... | @yhl-amd | merged | 2026-07-10 | 2026-07-13 |
| [#1573](https://github.com/ROCm/ATOM/pull/1573) | [Bugfix] DeepSeek-V4: fix sglang/vllm plugin SWA after paged... | @yhl-amd | merged | 2026-07-13 | 2026-07-13 |
| [#1577](https://github.com/ROCm/ATOM/pull/1577) | code refactor | @gbyu-amd | merged | 2026-07-13 | 2026-07-13 |
| [#1574](https://github.com/ROCm/ATOM/pull/1574) | fix atom native memory fault | @gbyu-amd | merged | 2026-07-13 | 2026-07-13 |
| [#1529](https://github.com/ROCm/ATOM/pull/1529) | CI: change SGLang plugin M3 nightly accuracy threshold | @Phi-C | merged | 2026-07-09 | 2026-07-13 |
| [#1567](https://github.com/ROCm/ATOM/pull/1567) | ci: re-login to Docker Hub before each push in nightly relea... | @valarLip | merged | 2026-07-12 | 2026-07-12 |
| [#1566](https://github.com/ROCm/ATOM/pull/1566) | [Recipe][Docs] Add MXFP4 intermediate variable and scheduler... | @benenzhu | merged | 2026-07-12 | 2026-07-12 |
| [#1423](https://github.com/ROCm/ATOM/pull/1423) | [Bugfix] DeepSeek-V4: content-addressed paged SWA fixes pref... | @yhl-amd | merged | 2026-07-01 | 2026-07-11 |
| [#1458](https://github.com/ROCm/ATOM/pull/1458) | [GLM5.2 FP8/MXFP4] optimize GLM5.2 | @zejunchen-zejun | merged | 2026-07-03 | 2026-07-11 |
| [#1560](https://github.com/ROCm/ATOM/pull/1560) | [plugin][fix] DSA indexer: single-source decode_lens to fix ... | @zejunchen-zejun | merged | 2026-07-10 | 2026-07-11 |
| [#1547](https://github.com/ROCm/ATOM/pull/1547) | triton GGUU a8w4 MoE decode path | @Boss2002n | merged | 2026-07-09 | 2026-07-11 |
| [#1521](https://github.com/ROCm/ATOM/pull/1521) | [fix](acc): fix gpt-oss tp8 accuracy | @PerryZhang01 | merged | 2026-07-08 | 2026-07-11 |
| [#1557](https://github.com/ROCm/ATOM/pull/1557) | CI: gate MTP acceptance rate alongside gsm8k accuracy | @junhaha666 | merged | 2026-07-10 | 2026-07-10 |
| [#1561](https://github.com/ROCm/ATOM/pull/1561) | [atom-sglang-ci] Add qwen3.5-35b-ptpc-fp8 for atom sglang on... | @junyyang-amd | merged | 2026-07-10 | 2026-07-10 |
| [#1543](https://github.com/ROCm/ATOM/pull/1543) | [sglang+atom] Add Qwen3.5 35B PTPC FP8 support | @zhangxinyuanliuhengyu | merged | 2026-07-09 | 2026-07-10 |
| [#1555](https://github.com/ROCm/ATOM/pull/1555) | [ci][mesh] Improve ATOMesh dashboard visualization | @wanzhenchn | merged | 2026-07-10 | 2026-07-10 |
| [#1556](https://github.com/ROCm/ATOM/pull/1556) | Align Kimi-K2.5 benchmark config and enhance launch diagnost... | @Jasen2201 | merged | 2026-07-10 | 2026-07-10 |
| [#1554](https://github.com/ROCm/ATOM/pull/1554) | [atom-sgl-accuracy] Modify sglang accurucy runner name on mi... | @junyyang-amd | merged | 2026-07-10 | 2026-07-10 |
| [#1509](https://github.com/ROCm/ATOM/pull/1509) | [Triton] [Gluon] [GFX12] pa_prefill_sparse | @k50112113 | merged | 2026-07-08 | 2026-07-10 |
| [#1541](https://github.com/ROCm/ATOM/pull/1541) | Enable PIECEWISE cudagraph for DeepSeek-V4 (non-spec) | @ZhangLirong-amd | merged | 2026-07-09 | 2026-07-10 |
| [#1542](https://github.com/ROCm/ATOM/pull/1542) | feat(tbo): skip prefill TBO below a min token count | @ZhangLirong-amd | merged | 2026-07-09 | 2026-07-10 |
| [#1548](https://github.com/ROCm/ATOM/pull/1548) | Fix DeepSeek V4 MTP fused shared expert mapping | @yitingw1 | merged | 2026-07-10 | 2026-07-10 |
| [#1546](https://github.com/ROCm/ATOM/pull/1546) | ci: allow PR welcome comment workflow to comment on PRs | @gyohuangxin | merged | 2026-07-09 | 2026-07-10 |
| [#1544](https://github.com/ROCm/ATOM/pull/1544) | code refactor | @gbyu-amd | merged | 2026-07-09 | 2026-07-09 |
| [#1526](https://github.com/ROCm/ATOM/pull/1526) | fix(dsv4): align TBO v4_batch_id_per_token buffer to int32 | @valarLip | merged | 2026-07-08 | 2026-07-09 |
| [#1527](https://github.com/ROCm/ATOM/pull/1527) | Fix DeepSeek V4 fused shared expert mapping | @cubezhang | merged | 2026-07-09 | 2026-07-09 |
| [#1505](https://github.com/ROCm/ATOM/pull/1505) | fix: dpa kv transfer error on spur | @JiaoliangYu | merged | 2026-07-07 | 2026-07-09 |
| [#1539](https://github.com/ROCm/ATOM/pull/1539) | Add review-pr Claude Code skill for ATOM PRs | @zufayu | merged | 2026-07-09 | 2026-07-09 |
| [#1537](https://github.com/ROCm/ATOM/pull/1537) | Revert for DP Stablize perf | @ZhangLirong-amd | merged | 2026-07-09 | 2026-07-09 |
| [#1538](https://github.com/ROCm/ATOM/pull/1538) | [ci][atomesh] fix file permissions and update ATOMesh dashbo... | @wanzhenchn | merged | 2026-07-09 | 2026-07-09 |
| [#1536](https://github.com/ROCm/ATOM/pull/1536) | ci: treat ci labels as persistent gate switches | @gyohuangxin | merged | 2026-07-09 | 2026-07-09 |
| [#1535](https://github.com/ROCm/ATOM/pull/1535) | [atom-sgl-benchmark] Remove the content of SGLang-Mesh from ... | @junyyang-amd | merged | 2026-07-09 | 2026-07-09 |
| [#1533](https://github.com/ROCm/ATOM/pull/1533) | ci: keep PR welcome comment best effort | @gyohuangxin | merged | 2026-07-09 | 2026-07-09 |
| [#1516](https://github.com/ROCm/ATOM/pull/1516) | ci: gate heavy PR tests by approval or label | @gyohuangxin | merged | 2026-07-08 | 2026-07-09 |
| [#1523](https://github.com/ROCm/ATOM/pull/1523) | [sgl-atom] Fix MI308 DeepSeek-V4 Flash FP8 CI config | @zhangxinyuanliuhengyu | merged | 2026-07-08 | 2026-07-09 |
| [#1513](https://github.com/ROCm/ATOM/pull/1513) | [feat](glm): support glm5.2 in vllm plugin mode | @PerryZhang01 | merged | 2026-07-08 | 2026-07-09 |
| [#1510](https://github.com/ROCm/ATOM/pull/1510) | [Fix] Automatic orphan reaping  so EngineCore/worker process... | @JohnQinAMD | merged | 2026-07-08 | 2026-07-08 |
| [#1524](https://github.com/ROCm/ATOM/pull/1524) | ci: trim benchmark/accuracy catalogs and de-brittle the shap... | @valarLip | merged | 2026-07-08 | 2026-07-08 |
| [#1522](https://github.com/ROCm/ATOM/pull/1522) | refactor: dedup prefill density check and drop dead threshol... | @valarLip | merged | 2026-07-08 | 2026-07-08 |
| [#1480](https://github.com/ROCm/ATOM/pull/1480) | Fix sglang minimax m3 cuda graph capture problem | @Phi-C | merged | 2026-07-06 | 2026-07-08 |
| [#1409](https://github.com/ROCm/ATOM/pull/1409) | fix(kimi): align input norm quant with attention quant | @qichu-yun | merged | 2026-06-30 | 2026-07-08 |
| [#1508](https://github.com/ROCm/ATOM/pull/1508) | [atom-sgl-accuracy] Add fewshot for GLM-5.1-FP8 on MI355 | @junyyang-amd | merged | 2026-07-08 | 2026-07-08 |
| [#1519](https://github.com/ROCm/ATOM/pull/1519) | publish ATOMesh benchmark data with MI350X/MI355X hardware t... | @wanzhenchn | merged | 2026-07-08 | 2026-07-08 |
| [#1517](https://github.com/ROCm/ATOM/pull/1517) | fix: dpa kv transfer error on spur | @JiaoliangYu | merged | 2026-07-08 | 2026-07-08 |
| [#1512](https://github.com/ROCm/ATOM/pull/1512) | fix atomesh mocker benchmark timeout | @wanzhenchn | merged | 2026-07-08 | 2026-07-08 |
| [#1475](https://github.com/ROCm/ATOM/pull/1475) | ci(atomesh): add Spur cluster benchmark support | @wanzhenchn | merged | 2026-07-06 | 2026-07-08 |
| [#1496](https://github.com/ROCm/ATOM/pull/1496) | [fix](llama): support llama-405B quant type | @PerryZhang01 | merged | 2026-07-07 | 2026-07-08 |
| [#1498](https://github.com/ROCm/ATOM/pull/1498) | [Kernel Opt] Optimize DeepSeek-V4 sparse prefill attention t... | @ZLkanyo009 | merged | 2026-07-07 | 2026-07-08 |
| [#1454](https://github.com/ROCm/ATOM/pull/1454) | [atom-vllm] enable prefix cache for deepseek v4 | @whx-sjtu | merged | 2026-07-03 | 2026-07-08 |
| [#1447](https://github.com/ROCm/ATOM/pull/1447) |  Remove legacy proxy, update docs, and enhance scripts | @Jasen2201 | merged | 2026-07-03 | 2026-07-08 |
| [#1502](https://github.com/ROCm/ATOM/pull/1502) | [Fix] fix GLM5.2 n-shot100 accuracy | @yitingw1 | merged | 2026-07-07 | 2026-07-07 |
| [#1503](https://github.com/ROCm/ATOM/pull/1503) | Revert "[ATOM][Fix] propagate dp_uniform_decode to TBO ubatc... | @ZhangLirong-amd | merged | 2026-07-07 | 2026-07-07 |
| [#1493](https://github.com/ROCm/ATOM/pull/1493) | [fix OOM][Sparse MLA] chunked indexer and online topk to red... | @zejunchen-zejun | merged | 2026-07-07 | 2026-07-07 |
| [#1494](https://github.com/ROCm/ATOM/pull/1494) | enable ar+norm+quant fusion | @gbyu-amd | merged | 2026-07-07 | 2026-07-07 |
| [#1461](https://github.com/ROCm/ATOM/pull/1461) | [ci][mesh] publish benchmark data on dashboard | @wanzhenchn | merged | 2026-07-03 | 2026-07-07 |
| [#1478](https://github.com/ROCm/ATOM/pull/1478) | [Benchmark] Update Kimi2.7 recipe and workflow | @qichu-yun | merged | 2026-07-06 | 2026-07-07 |
| [#1489](https://github.com/ROCm/ATOM/pull/1489) | [fix][sgl-atom] avoid Qwen3-32B GSM8K truncation | @zhangxinyuanliuhengyu | merged | 2026-07-06 | 2026-07-07 |
| [#1485](https://github.com/ROCm/ATOM/pull/1485) | [atom-sglang-accuracy] Modify checkbox to dropdown for sglan... | @junyyang-amd | merged | 2026-07-06 | 2026-07-07 |
| [#1436](https://github.com/ROCm/ATOM/pull/1436) | [fix](qwen3.5): fix qwen3.5 full decode graph error | @PerryZhang01 | merged | 2026-07-02 | 2026-07-07 |
| [#1451](https://github.com/ROCm/ATOM/pull/1451) | [atom-vllm] fix V4 OOM issue | @whx-sjtu | merged | 2026-07-03 | 2026-07-07 |
| [#1474](https://github.com/ROCm/ATOM/pull/1474) | [ATOM][Fix] propagate dp_uniform_decode to TBO ubatches | @ZLkanyo009 | merged | 2026-07-06 | 2026-07-06 |
| [#1472](https://github.com/ROCm/ATOM/pull/1472) | perf(tbo): reuse persistent ubatch worker threads | @ZhangLirong-amd | merged | 2026-07-06 | 2026-07-06 |
| [#1487](https://github.com/ROCm/ATOM/pull/1487) | test(benchmark): replace brittle build_args golden with comp... | @valarLip | merged | 2026-07-06 | 2026-07-06 |
| [#1486](https://github.com/ROCm/ATOM/pull/1486) | ci(benchmark): disable prefix cache for dsv4 nightly, drop i... | @valarLip | merged | 2026-07-06 | 2026-07-06 |
| [#1476](https://github.com/ROCm/ATOM/pull/1476) | [atom test/benchmark] add GLM5.2 MXFP4 MTP into nightly acc ... | @zejunchen-zejun | merged | 2026-07-06 | 2026-07-06 |
| [#1482](https://github.com/ROCm/ATOM/pull/1482) | feat: set process titles for engine/worker processes | @valarLip | merged | 2026-07-06 | 2026-07-06 |
| [#1395](https://github.com/ROCm/ATOM/pull/1395) | [Feat] Sglang plugin m3 support | @Phi-C | merged | 2026-06-29 | 2026-07-06 |
| [#1470](https://github.com/ROCm/ATOM/pull/1470) | [ATOM SGL] dsv4 mtp bechmark | @ZhiweiYan-96 | merged | 2026-07-06 | 2026-07-06 |
| [#1342](https://github.com/ROCm/ATOM/pull/1342) | [MiniMax-M3] optimize sparse vLLM metadata for improved perf... | @lirui927 | merged | 2026-06-24 | 2026-07-06 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-07-15T09:47:32Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#441](https://github.com/ROCm/mori/pull/441) | ccl: hierarchical cross-node AllGather (intra-node SDMA + in... | @inkcherry | open | 2026-07-01 | 2026-07-15 |
| [#471](https://github.com/ROCm/mori/pull/471) | (tools)  Add NIC firmware version checks + mori check CI ste... | @QizhouZhang97 | open | 2026-07-14 | 2026-07-15 |
| [#468](https://github.com/ROCm/mori/pull/468) | feat(umbp): Redis/RESP master metadata store backend | @isytwu | open | 2026-07-13 | 2026-07-15 |
| [#459](https://github.com/ROCm/mori/pull/459) | test(ep): add configurable CLI knobs to dispatch/combine ben... | @amd-arozanov | open | 2026-07-09 | 2026-07-13 |
| [#454](https://github.com/ROCm/mori/pull/454) | (cco) impl sdma transport in cco primitives | @QizhouZhang97 | open | 2026-07-07 | 2026-07-13 |
| [#464](https://github.com/ROCm/mori/pull/464) | perf(ep): add MI350X IntraNode/IntraNodeLL tuning configs fo... | @kudomcho | open | 2026-07-10 | 2026-07-13 |
| [#452](https://github.com/ROCm/mori/pull/452) | feat(umbp): tunable read leases and tighter master lease def... | @isytwu | open | 2026-07-06 | 2026-07-13 |
| [#463](https://github.com/ROCm/mori/pull/463) | feat(cco): add fabric handle support for gfx1250 | @kawhil-amd | open | 2026-07-10 | 2026-07-10 |
| [#460](https://github.com/ROCm/mori/pull/460) | Add UMBP standalone process mode | @maning00 | draft | 2026-07-09 | 2026-07-10 |
| [#434](https://github.com/ROCm/mori/pull/434) | Fix(io): track RDMA notification completions in transfer sta... | @amd-dlimpus | open | 2026-06-26 | 2026-07-09 |
| [#450](https://github.com/ROCm/mori/pull/450) | a2a_gemm examples with flydsl + mori | @zjing14 | draft | 2026-07-06 | 2026-07-07 |
| [#445](https://github.com/ROCm/mori/pull/445) | feat(shmem/sdma): implement address-based device putmem_nbi_... | @zjing14 | open | 2026-07-02 | 2026-07-03 |
| [#444](https://github.com/ROCm/mori/pull/444) | perf(io): add busy-wait completion mode and numpy batch-tran... | @TianDi101 | open | 2026-07-01 | 2026-07-01 |
| [#443](https://github.com/ROCm/mori/pull/443) | feat(io): Add configurable RDMA signal interval | @maning00 | open | 2026-07-01 | 2026-07-01 |
| [#437](https://github.com/ROCm/mori/pull/437) | Refactor: umbp metadata store rebase | @TianDi101 | open | 2026-06-29 | 2026-07-01 |
| [#345](https://github.com/ROCm/mori/pull/345) | feat(io): add RDMA telemetry snapshot APIs | @maning00 | open | 2026-06-01 | 2026-06-30 |
| [#416](https://github.com/ROCm/mori/pull/416) | io/xgmi: honor sub-region base offset in IPC remapping (fixe... | @carlushuang | draft | 2026-06-22 | 2026-06-26 |
| [#394](https://github.com/ROCm/mori/pull/394) | Refactor: umbp metadata store | @TianDi101 | open | 2026-06-15 | 2026-06-15 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-04-01 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-03-02 |
| [#175](https://github.com/ROCm/mori/pull/175) | Add elastic EP for dispatch/combine flows | @maning00 | open | 2026-02-27 | 2026-02-27 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-01-08 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-01-08 |
| [#465](https://github.com/ROCm/mori/pull/465) | feat(ep): add blockwise-FP8 combine to the AsyncLL (low-late... | @rbrugaro-amd | merged | 2026-07-11 | 2026-07-15 |
| [#469](https://github.com/ROCm/mori/pull/469) | fix(jit): invalidate kernel cache on #included source change... | @Oseltamivir | merged | 2026-07-13 | 2026-07-15 |
| [#477](https://github.com/ROCm/mori/pull/477) | ci(cco): move runner to MI355X-AINIC; temporarily bypass cco... | @jhchouuu | merged | 2026-07-15 | 2026-07-15 |
| [#476](https://github.com/ROCm/mori/pull/476) | fix(cco): serialize handle import under the VMM process lock... | @jhchouuu | merged | 2026-07-14 | 2026-07-15 |
| [#467](https://github.com/ROCm/mori/pull/467) | feat[io]: add fabric (UALink scale-up) transfer backend | @maning00 | merged | 2026-07-13 | 2026-07-14 |
| [#474](https://github.com/ROCm/mori/pull/474) | fix(cco): deterministic release of per-op symmetric memory | @jhchouuu | merged | 2026-07-14 | 2026-07-14 |
| [#473](https://github.com/ROCm/mori/pull/473) | ci: prevent GPU VRAM leaks via tini reaping + graceful conta... | @jhchouuu | merged | 2026-07-14 | 2026-07-14 |
| [#472](https://github.com/ROCm/mori/pull/472) | tune(cco): re-tune MI355X (gfx950) EP8 schedule for vec4 com... | @jhchouuu | merged | 2026-07-14 | 2026-07-14 |
| [#466](https://github.com/ROCm/mori/pull/466) | feat(EPv2): gfx1250 + cross-node fabric support | @jhchouuu | merged | 2026-07-12 | 2026-07-14 |
| [#470](https://github.com/ROCm/mori/pull/470) | fix umbp compiling tests error | @QizhouZhang97 | merged | 2026-07-14 | 2026-07-14 |
| [#461](https://github.com/ROCm/mori/pull/461) | feat(dispatch_combine): add blockwise FP4 (E2M1) combine tra... | @karverma-amd | merged | 2026-07-10 | 2026-07-14 |
| [#448](https://github.com/ROCm/mori/pull/448) | feat(EPv2): [preview] FlyDSL intranode MoE dispatch/combine | @jhchouuu | merged | 2026-07-06 | 2026-07-10 |
| [#462](https://github.com/ROCm/mori/pull/462) | ci: recover podman state before internode build on MI355X_AI... | @QizhouZhang97 | merged | 2026-07-10 | 2026-07-10 |
| [#449](https://github.com/ROCm/mori/pull/449) | feat(cco): merge dev/cco — Collective Communication Object (... | @jhchouuu | merged | 2026-07-06 | 2026-07-09 |
| [#455](https://github.com/ROCm/mori/pull/455) | fix(cco): fix hip vmm memory leak and crash issues | @kawhil-amd | merged | 2026-07-07 | 2026-07-08 |
| [#458](https://github.com/ROCm/mori/pull/458) | feat(cco): update mori-cco dockerfile | @kawhil-amd | merged | 2026-07-08 | 2026-07-08 |
| [#457](https://github.com/ROCm/mori/pull/457) | fix: only define true/false for C in bnxt_re_hsi.h | @pemeliya | merged | 2026-07-07 | 2026-07-08 |
| [#456](https://github.com/ROCm/mori/pull/456) | ci(cco): enable cco python test | @kawhil-amd | merged | 2026-07-07 | 2026-07-07 |
| [#453](https://github.com/ROCm/mori/pull/453) | perf(rdma): default to ibv_reg_mr, opt into dmabuf via MORI_... | @jhchouuu | merged | 2026-07-06 | 2026-07-07 |
| [#451](https://github.com/ROCm/mori/pull/451) | fix(io): Cap max_send_wr to 32767 for ionic | @maning00 | merged | 2026-07-06 | 2026-07-06 |
| [#442](https://github.com/ROCm/mori/pull/442) | feat(umbp): cache remote fetches into local DRAM (dual-schem... | @inkcherry | merged | 2026-07-01 | 2026-07-06 |
| [#447](https://github.com/ROCm/mori/pull/447) | Move ci runner to bnxt_325_108 | @QizhouZhang97 | merged | 2026-07-03 | 2026-07-03 |
| [#446](https://github.com/ROCm/mori/pull/446) | ci(cco): add cco dockerfile | @kawhil-amd | merged | 2026-07-03 | 2026-07-03 |
| [#355](https://github.com/ROCm/mori/pull/355) | feat(rdma): add dmabuf-first MR registration with MORI_DISAB... | @jhchouuu | merged | 2026-06-03 | 2026-07-01 |
| [#439](https://github.com/ROCm/mori/pull/439) | perf(mori-io): eliminate SQ full spin with futex admission | @maning00 | merged | 2026-06-29 | 2026-07-01 |
| [#433](https://github.com/ROCm/mori/pull/433) | feat(ccl): add param-contiguous SDMA allgather | @wuyl1 | merged | 2026-06-26 | 2026-06-30 |
| [#438](https://github.com/ROCm/mori/pull/438) | (CI) migrate bnxt 300x CI to 325 platform | @QizhouZhang97 | merged | 2026-06-29 | 2026-06-30 |
| [#401](https://github.com/ROCm/mori/pull/401) | feat(shmem): bind ranks to GPU-local CPUs by default | @jhchouuu | merged | 2026-06-16 | 2026-06-29 |
| [#440](https://github.com/ROCm/mori/pull/440) | perf(umbp): reduce master RPC latency under load, add kv-eve... | @isytwu | merged | 2026-06-29 | 2026-06-29 |
| [#429](https://github.com/ROCm/mori/pull/429) | feat(sdma): use KFD recommended engine mask for SDMA engine ... | @pemeliya | merged | 2026-06-26 | 2026-06-29 |
| [#435](https://github.com/ROCm/mori/pull/435) | (bugfix)Fix MLX5 collapsed-CQ bandwidth spikes | @QizhouZhang97 | merged | 2026-06-29 | 2026-06-29 |
| [#412](https://github.com/ROCm/mori/pull/412) | perf(ep): improve intranode dispatch kernel load balancing a... | @kawhil-amd | merged | 2026-06-22 | 2026-06-29 |
| [#436](https://github.com/ROCm/mori/pull/436) | feat(io): Enable worker chunking for GPU single-NIC sessions | @maning00 | merged | 2026-06-29 | 2026-06-29 |
| [#425](https://github.com/ROCm/mori/pull/425) | ci(cco): add temp ci job for branch dev/cco | @kawhil-amd | merged | 2026-06-25 | 2026-06-29 |
| [#218](https://github.com/ROCm/mori/pull/218) | Feat umbp pool phase2 | @TianDi101 | merged | 2026-03-24 | 2026-06-29 |
| [#205](https://github.com/ROCm/mori/pull/205) | Optimize XGMI `batch_write`/`batch_read` for discrete (non-c... | @inkcherry | merged | 2026-03-19 | 2026-06-29 |
| [#216](https://github.com/ROCm/mori/pull/216) | fix bench_umbp_spdk: steady_clock, interpolated percentiles,... | @zhangfei829 | merged | 2026-03-24 | 2026-06-29 |
| [#174](https://github.com/ROCm/mori/pull/174) | Doc: update perf & hardware support matrix & news | @TianDi101 | merged | 2026-02-26 | 2026-06-29 |
| [#117](https://github.com/ROCm/mori/pull/117) | [feat]: allreduce eager interface | @TennyWang1223 | merged | 2025-12-08 | 2026-06-29 |
| [#124](https://github.com/ROCm/mori/pull/124) | Fix: topo bug caused by incorrect pcie tree | @TianDi101 | merged | 2025-12-23 | 2026-06-29 |
| [#72](https://github.com/ROCm/mori/pull/72) | Feature: add EP kernels with inter-node deduplication | @TianDi101 | merged | 2025-09-17 | 2026-06-29 |
| [#98](https://github.com/ROCm/mori/pull/98) | Fix: compile bug introduced by EP fix | @TianDi101 | merged | 2025-10-28 | 2026-06-29 |
| [#100](https://github.com/ROCm/mori/pull/100) | Feat: add weight combine support in EPv1 kernel | @TianDi101 | merged | 2025-10-29 | 2026-06-29 |
| [#103](https://github.com/ROCm/mori/pull/103) | Feat: add more envs for gpu archs | @TianDi101 | merged | 2025-11-05 | 2026-06-29 |
| [#101](https://github.com/ROCm/mori/pull/101) | Fix: epv1 hang & Feature: add support for dispatch with scal... | @TianDi101 | merged | 2025-10-31 | 2026-06-29 |
| [#104](https://github.com/ROCm/mori/pull/104) | Fix: failed compilation by unsupported archs | @TianDi101 | merged | 2025-11-05 | 2026-06-29 |
| [#105](https://github.com/ROCm/mori/pull/105) | Fix: EP32 bug & Feat: EPV1 LL Kernel | @TianDi101 | merged | 2025-11-12 | 2026-06-29 |
| [#109](https://github.com/ROCm/mori/pull/109) | Fix: none dispatch weights when local token number is 0 | @TianDi101 | merged | 2025-11-18 | 2026-06-29 |
| [#112](https://github.com/ROCm/mori/pull/112) | Fix: gfx950 compilation error | @TianDi101 | merged | 2025-11-19 | 2026-06-29 |
| [#418](https://github.com/ROCm/mori/pull/418) | (bugfix) fix tool bug when tested in ROCm 714 docker | @QizhouZhang97 | merged | 2026-06-23 | 2026-06-29 |
| [#431](https://github.com/ROCm/mori/pull/431) | bugfix: shm spike bandwidth | @QizhouZhang97 | merged | 2026-06-26 | 2026-06-29 |
| [#427](https://github.com/ROCm/mori/pull/427) | fix(cco): bind P2P FD-exchange sockets up front to avoid ENO... | @QizhouZhang97 | merged | 2026-06-25 | 2026-06-29 |
| [#432](https://github.com/ROCm/mori/pull/432) | rdma: Harden RDMA control-plane resilience | @maning00 | merged | 2026-06-26 | 2026-06-29 |
| [#419](https://github.com/ROCm/mori/pull/419) | Feature: add umbp benchmark / distributed mode flush API / h... | @TianDi101 | merged | 2026-06-23 | 2026-06-26 |
| [#430](https://github.com/ROCm/mori/pull/430) | chore(cco): clean up redundant/verbose/inaccurate comments | @jhchouuu | merged | 2026-06-26 | 2026-06-26 |
| [#426](https://github.com/ROCm/mori/pull/426) | feat(cco): FlyDSL device bindings + C++/Python examples + pi... | @jhchouuu | merged | 2026-06-25 | 2026-06-26 |
| [#424](https://github.com/ROCm/mori/pull/424) | fix(io): set QP max_inline_data for notification SENDs | @amirakb89 | merged | 2026-06-24 | 2026-06-26 |
| [#428](https://github.com/ROCm/mori/pull/428) | (bugfix) mlx barrier hung | @QizhouZhang97 | merged | 2026-06-25 | 2026-06-26 |
| [#422](https://github.com/ROCm/mori/pull/422) | feat(cco): add support for cco python runtime api | @kawhil-amd | merged | 2026-06-24 | 2026-06-25 |
| [#396](https://github.com/ROCm/mori/pull/396) | feat(ep): add AccumNum=9 vec8 intranode combine for shared-e... | @rbrugaro-amd | merged | 2026-06-16 | 2026-06-25 |
| [#423](https://github.com/ROCm/mori/pull/423) | Doc: add mori sglang news | @billishyahao | merged | 2026-06-24 | 2026-06-24 |
| [#421](https://github.com/ROCm/mori/pull/421) | feat(cco): BNXT GDA per-packet PSN + per-peer doorbell group... | @jhchouuu | merged | 2026-06-24 | 2026-06-24 |
| [#420](https://github.com/ROCm/mori/pull/420) | Fix RDMA QP load imbalance | @maning00 | merged | 2026-06-23 | 2026-06-23 |
| [#417](https://github.com/ROCm/mori/pull/417) | test(umbp): use kernel-assigned ports in distributed tests t... | @isytwu | merged | 2026-06-22 | 2026-06-23 |
| [#414](https://github.com/ROCm/mori/pull/414) | (bugfix) mori bug on RoCM714 | @QizhouZhang97 | merged | 2026-06-22 | 2026-06-23 |
| [#171](https://github.com/ROCm/mori/pull/171) | Fix: support runtime hidden_dim for dispatch/combine | @isytwu | merged | 2026-02-18 | 2026-06-23 |
| [#167](https://github.com/ROCm/mori/pull/167) | Feature: add fp4 support  | @TianDi101 | merged | 2026-02-11 | 2026-06-23 |
| [#166](https://github.com/ROCm/mori/pull/166) | Feat: Fp8 direct cast in Combine | @maning00 | merged | 2026-02-11 | 2026-06-23 |
| [#163](https://github.com/ROCm/mori/pull/163) | update the ci for AINIC | @zhangfei829 | merged | 2026-02-06 | 2026-06-23 |
| [#135](https://github.com/ROCm/mori/pull/135) | Fix: incorrect gpu-nic mapping & add sl,tc env | @TianDi101 | merged | 2026-01-12 | 2026-06-23 |
| [#208](https://github.com/ROCm/mori/pull/208) | Fix [UMBP]: change integration default test mode to tp | @TianDi101 | merged | 2026-03-22 | 2026-06-23 |
| [#206](https://github.com/ROCm/mori/pull/206) | feat(umbp): segmented SSD log, pluggable storage IO (io_urin... | @maning00 | merged | 2026-03-20 | 2026-06-23 |
| [#180](https://github.com/ROCm/mori/pull/180) | [UMP] Feat: add control plane implementation for unified mem... | @TianDi101 | merged | 2026-03-03 | 2026-06-23 |
| [#200](https://github.com/ROCm/mori/pull/200) | Add ReduceScatter SDMA implementation and AG/RS benchmarks | @amd-andycha | merged | 2026-03-18 | 2026-06-23 |
| [#185](https://github.com/ROCm/mori/pull/185) | Optimization: ep async kernel | @TianDi101 | merged | 2026-03-05 | 2026-06-23 |
| [#198](https://github.com/ROCm/mori/pull/198) | Sdma batch | @zhangfei829 | merged | 2026-03-13 | 2026-06-23 |
| [#197](https://github.com/ROCm/mori/pull/197) | Feat sdma async ep1 | @TianDi101 | merged | 2026-03-12 | 2026-06-23 |
| [#161](https://github.com/ROCm/mori/pull/161) | Feat epv1 async rebase | @TianDi101 | merged | 2026-02-05 | 2026-06-23 |
| [#159](https://github.com/ROCm/mori/pull/159) | Feature: add MORI-EP launch configuration mode | @TianDi101 | merged | 2026-02-04 | 2026-06-23 |
| [#157](https://github.com/ROCm/mori/pull/157) | Refactor allgather and all2all to support Python scenarios | @zhangfei829 | merged | 2026-01-30 | 2026-06-23 |
| [#156](https://github.com/ROCm/mori/pull/156) | Fix: internode inconsistency test failed on gfx950 | @TianDi101 | merged | 2026-01-30 | 2026-06-23 |
| [#153](https://github.com/ROCm/mori/pull/153) | Refactor: add acknowledgements for SDMA | @wuyl1 | merged | 2026-01-27 | 2026-06-23 |
| [#152](https://github.com/ROCm/mori/pull/152) | Feat kernel trace test | @TianDi101 | merged | 2026-01-26 | 2026-06-23 |
| [#140](https://github.com/ROCm/mori/pull/140) | Add Kernel Profiler with Warp-Level Tracing and Perfetto Int... | @maning00 | merged | 2026-01-16 | 2026-06-23 |
| [#128](https://github.com/ROCm/mori/pull/128) | Optimization: EPV1 dispatch & combine kernel | @TianDi101 | merged | 2026-01-08 | 2026-06-23 |
| [#134](https://github.com/ROCm/mori/pull/134) | fix up the sdma instance's issue | @zhangfei829 | merged | 2026-01-12 | 2026-06-23 |
| [#407](https://github.com/ROCm/mori/pull/407) | fix(cco-bench): align p2p bw scope & sync with shmem for fai... | @QizhouZhang97 | merged | 2026-06-17 | 2026-06-23 |
| [#406](https://github.com/ROCm/mori/pull/406) | minor fix benchmark | @QizhouZhang97 | merged | 2026-06-17 | 2026-06-23 |
| [#398](https://github.com/ROCm/mori/pull/398) | (bench) add CCO api bench, similar to shmem | @QizhouZhang97 | merged | 2026-06-16 | 2026-06-23 |
| [#383](https://github.com/ROCm/mori/pull/383) | Add some gda UTs & abstract the common component of cco test... | @QizhouZhang97 | merged | 2026-06-11 | 2026-06-23 |
| [#391](https://github.com/ROCm/mori/pull/391) | [CCO] Fix PSD quietUntil early return causing bogus GDA band... | @QizhouZhang97 | merged | 2026-06-15 | 2026-06-23 |
| [#386](https://github.com/ROCm/mori/pull/386) | (tools) add Broadcom (bnxt) support to env_check.sh and env_... | @QizhouZhang97 | merged | 2026-06-11 | 2026-06-23 |
| [#333](https://github.com/ROCm/mori/pull/333) | perf(ep): optimize dispatch intranode kernel perf in cases w... | @kawhil-amd | merged | 2026-05-21 | 2026-06-22 |
| [#411](https://github.com/ROCm/mori/pull/411) | feat(cco): add warp aggregate mode for thread level api | @kawhil-amd | merged | 2026-06-22 | 2026-06-22 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-07-15T09:47:35Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#863](https://github.com/ROCm/FlyDSL/pull/863) | add xcd remap | @solinzby1 | open | 2026-07-15 | 2026-07-15 |
| [#825](https://github.com/ROCm/FlyDSL/pull/825) | perf(pa tile): readable tile-programming PA decode kernel, m... | @fsx950223 | open | 2026-07-10 | 2026-07-15 |
| [#812](https://github.com/ROCm/FlyDSL/pull/812) | [kernels] Migrate pa_decode_swa reduce kernel to SharedAlloc... | @xudoyuan | draft | 2026-07-07 | 2026-07-15 |
| [#820](https://github.com/ROCm/FlyDSL/pull/820) | [Kernel] conv3d: parameterize tile size + add autotuner | @jiacao-amd | open | 2026-07-08 | 2026-07-15 |
| [#860](https://github.com/ROCm/FlyDSL/pull/860) | [Kernel] fp8 conv3d: 8-wave GEMM pipeline + BIG_IN fix | @jiacao-amd | draft | 2026-07-15 | 2026-07-15 |
| [#857](https://github.com/ROCm/FlyDSL/pull/857) | [CI] Make benchmark baselines fork-safe and bounded | @jhinpan | open | 2026-07-15 | 2026-07-15 |
| [#855](https://github.com/ROCm/FlyDSL/pull/855) | [Perf] Add staged dweight reduction for RMSNorm backward | @jhinpan | draft | 2026-07-15 | 2026-07-15 |
| [#801](https://github.com/ROCm/FlyDSL/pull/801) | [layernorm] Add backward pass for training (PR 3/3, #769) | @jhinpan | open | 2026-07-03 | 2026-07-14 |
| [#854](https://github.com/ROCm/FlyDSL/pull/854) | [Test] Expand RMSNorm backward configs, cache reuse, and Tor... | @jhinpan | open | 2026-07-14 | 2026-07-14 |
| [#785](https://github.com/ROCm/FlyDSL/pull/785) | [2/5] autotune: two-track config + first real adopter (rmsno... | @jhinpan | open | 2026-07-01 | 2026-07-14 |
| [#786](https://github.com/ROCm/FlyDSL/pull/786) | [3/5] autotune: offline config emit + runtime lookup (#770) | @jhinpan | open | 2026-07-01 | 2026-07-14 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | Cjl/norm perf | @cschenjunlin | open | 2026-07-14 | 2026-07-14 |
| [#853](https://github.com/ROCm/FlyDSL/pull/853) | [Refactor] move buffer_ops to kernels.common; remove expr/ve... | @sjfeng1999 | open | 2026-07-14 | 2026-07-14 |
| [#850](https://github.com/ROCm/FlyDSL/pull/850) | optimize flydsl flash attention kernel | @binding7012 | open | 2026-07-14 | 2026-07-14 |
| [#844](https://github.com/ROCm/FlyDSL/pull/844) | Add forward LSE output to FlyDSL flash attention kernels | @amd-wsung102 | open | 2026-07-14 | 2026-07-14 |
| [#845](https://github.com/ROCm/FlyDSL/pull/845) | [FMHA] Kernel refactor for modularity and code simplificatio... | @yanguahe | open | 2026-07-14 | 2026-07-14 |
| [#837](https://github.com/ROCm/FlyDSL/pull/837) | Add a8w4 kernel for Quark mix-precision | @amd-xiaoyu12 | open | 2026-07-12 | 2026-07-12 |
| [#833](https://github.com/ROCm/FlyDSL/pull/833) | Gfx1250 tdm gather scatter | @coderfeli | open | 2026-07-12 | 2026-07-12 |
| [#823](https://github.com/ROCm/FlyDSL/pull/823) | [MoE] Add gelu_tanh activation to MoE stage1 GEMM kernels | @jonahbernard | open | 2026-07-09 | 2026-07-11 |
| [#829](https://github.com/ROCm/FlyDSL/pull/829) | [Feature] Extract reusable event-based benchmarking helper | @jhinpan | draft | 2026-07-10 | 2026-07-10 |
| [#748](https://github.com/ROCm/FlyDSL/pull/748) | runtime: hard-fail mgpuModuleLoadJIT on HIP | @fallintoplace | open | 2026-06-25 | 2026-07-10 |
| [#487](https://github.com/ROCm/FlyDSL/pull/487) | blockscale code gfx1250 (WIP) | @omuhamma | draft | 2026-05-08 | 2026-07-09 |
| [#613](https://github.com/ROCm/FlyDSL/pull/613) | feat(compiler): Add custom LLVM pass pipeline and plugin sup... | @fsx950223 | open | 2026-06-02 | 2026-07-08 |
| [#757](https://github.com/ROCm/FlyDSL/pull/757) | FlyDSL gemm_decode: small-M dense GEMM kernels (BF16/FP8/blo... | @vedenev-amd | draft | 2026-06-26 | 2026-07-07 |
| [#764](https://github.com/ROCm/FlyDSL/pull/764) | flash_attn_generic: replace raw arith.* FP ops with FlyDSL-t... | @xudoyuan | draft | 2026-06-29 | 2026-07-06 |
| [#788](https://github.com/ROCm/FlyDSL/pull/788) | [4/5] autotune: CI guard + committed-config regression check... | @jhinpan | open | 2026-07-01 | 2026-07-02 |
| [#763](https://github.com/ROCm/FlyDSL/pull/763) | [repro] flash_attn_generic: concise causal-mask loop trips d... | @xudoyuan | draft | 2026-06-29 | 2026-06-29 |
| [#744](https://github.com/ROCm/FlyDSL/pull/744) | [Fix] Set identity block scales for CDNA4 MFMA_Scale in fp8 ... | @amd-songpiao | open | 2026-06-25 | 2026-06-26 |
| [#746](https://github.com/ROCm/FlyDSL/pull/746) | fix tile syntax in divide | @tingqli | open | 2026-06-25 | 2026-06-26 |
| [#709](https://github.com/ROCm/FlyDSL/pull/709) | [Kernel] feat: Add MXFP6-E2M3 activation support to mixed_mo... | @amd-satre | open | 2026-06-19 | 2026-06-20 |
| [#638](https://github.com/ROCm/FlyDSL/pull/638) | [Feat] Complete BasisAttr support in IntTupleBuilder (#574) | @jhinpan | open | 2026-06-03 | 2026-06-18 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-06-17 |
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
| [#401](https://github.com/ROCm/FlyDSL/pull/401) | gemm a16w16 flydsl implementation (WIP) | @omuhamma | draft | 2026-04-14 | 2026-04-14 |
| [#354](https://github.com/ROCm/FlyDSL/pull/354) | Add `hgemm_splitk+allreduce` prologue/epilogue fusion kernel... | @xytpai | draft | 2026-04-07 | 2026-04-08 |
| [#257](https://github.com/ROCm/FlyDSL/pull/257) | [Feature] Add JAX integration for FlyDSL kernels | @wenchenvincent | open | 2026-03-21 | 2026-03-27 |
| [#849](https://github.com/ROCm/FlyDSL/pull/849) | [kernels] Relocate shared MMA infrastructure under common | @Phil-amd | merged | 2026-07-14 | 2026-07-15 |
| [#852](https://github.com/ROCm/FlyDSL/pull/852) | [CI] skip build/test for docs-only changes | @Phil-amd | merged | 2026-07-14 | 2026-07-15 |
| [#842](https://github.com/ROCm/FlyDSL/pull/842) | [CI] run_benchmark: treat runtime pytest.skip as skipped, no... | @jhinpan | merged | 2026-07-13 | 2026-07-14 |
| [#835](https://github.com/ROCm/FlyDSL/pull/835) | [Misc] Propagate signatures through expr decorators | @simondanielsson | merged | 2026-07-12 | 2026-07-14 |
| [#846](https://github.com/ROCm/FlyDSL/pull/846) | [Docs] Remove duplicate Documentation table from README | @Peter9606 | merged | 2026-07-14 | 2026-07-14 |
| [#839](https://github.com/ROCm/FlyDSL/pull/839) | [kernels]: add common/mem_ops for shared memory/atomic helpe... | @Phil-amd | merged | 2026-07-13 | 2026-07-14 |
| [#841](https://github.com/ROCm/FlyDSL/pull/841) | [Enh] Add rocdl.buffer_rsrc utilities: make_buffer_ptr & get... | @sjfeng1999 | merged | 2026-07-13 | 2026-07-14 |
| [#838](https://github.com/ROCm/FlyDSL/pull/838) | add mxfp8 support | @solinzby1 | merged | 2026-07-13 | 2026-07-13 |
| [#840](https://github.com/ROCm/FlyDSL/pull/840) | [Fix]: mla_decode test aborts whole collection on aiter API ... | @Phil-amd | merged | 2026-07-13 | 2026-07-13 |
| [#814](https://github.com/ROCm/FlyDSL/pull/814) | [kernels] Structure-only cleanup: unify naming, dedup helper... | @Phil-amd | merged | 2026-07-07 | 2026-07-13 |
| [#834](https://github.com/ROCm/FlyDSL/pull/834) | update version | @coderfeli | merged | 2026-07-12 | 2026-07-12 |
| [#832](https://github.com/ROCm/FlyDSL/pull/832) | [FlyROCDL] gfx1250 review follow-ups: signed-int WMMA, comme... | @coderfeli | merged | 2026-07-12 | 2026-07-12 |
| [#830](https://github.com/ROCm/FlyDSL/pull/830) | Add gfx1250 MX-scaled WMMA + N-D TDM copy atoms | @coderfeli | merged | 2026-07-12 | 2026-07-12 |
| [#756](https://github.com/ROCm/FlyDSL/pull/756) | Add fp4_gemm_4wave: 4-wave MXFP4 GEMM kernel for gfx950 | @benenzhu | merged | 2026-06-26 | 2026-07-12 |
| [#800](https://github.com/ROCm/FlyDSL/pull/800) | [rmsnorm] Add fused-add / residual backward (PR 2/3, #769) | @jhinpan | merged | 2026-07-03 | 2026-07-10 |
| [#826](https://github.com/ROCm/FlyDSL/pull/826) | [Opt] Improve rewrite config to match with CBV pattern | @sjfeng1999 | merged | 2026-07-10 | 2026-07-10 |
| [#828](https://github.com/ROCm/FlyDSL/pull/828) | [Docs] Kernel-tuning primer + occupancy, recent-API coverage... | @coderfeli | merged | 2026-07-10 | 2026-07-10 |
| [#827](https://github.com/ROCm/FlyDSL/pull/827) | [Docs] Refresh API docs, add kernel tuning guide, fix kernel... | @coderfeli | merged | 2026-07-10 | 2026-07-10 |
| [#819](https://github.com/ROCm/FlyDSL/pull/819) | [FMHA] Add D=64 support and optimize short-sequence gfx950 r... | @yanguahe | merged | 2026-07-08 | 2026-07-10 |
| [#824](https://github.com/ROCm/FlyDSL/pull/824) | [Kernel] mxfp4 preshuffle GEMM: thin batched @flyc.jit launc... | @coderfeli | merged | 2026-07-10 | 2026-07-10 |
| [#822](https://github.com/ROCm/FlyDSL/pull/822) | perf(pa): use _run_compiled for PA decode kernel launches | @fsx950223 | merged | 2026-07-09 | 2026-07-10 |
| [#780](https://github.com/ROCm/FlyDSL/pull/780) | [Kernel] Add compile_mxfp6_gemm: MXFP6×MXFP4 preshuffle GEMM... | @amd-satre | merged | 2026-06-30 | 2026-07-09 |
| [#795](https://github.com/ROCm/FlyDSL/pull/795) | [rmsnorm] Add backward pass + forward store_rstd for trainin... | @jhinpan | merged | 2026-07-03 | 2026-07-09 |
| [#818](https://github.com/ROCm/FlyDSL/pull/818) | Gemm tune v2 | @solinzby1 | merged | 2026-07-08 | 2026-07-08 |
| [#816](https://github.com/ROCm/FlyDSL/pull/816) | [Fix] Consistent promotion rules for Vector and Numeric | @sjfeng1999 | merged | 2026-07-07 | 2026-07-08 |
| [#803](https://github.com/ROCm/FlyDSL/pull/803) | [Fix] Break JIT cache-key dependency-traversal recursion cyc... | @sjfeng1999 | merged | 2026-07-06 | 2026-07-07 |
| [#815](https://github.com/ROCm/FlyDSL/pull/815) | [CI]: skip build/test for non-code changes | @Phil-amd | merged | 2026-07-07 | 2026-07-07 |
| [#805](https://github.com/ROCm/FlyDSL/pull/805) | [Feat] Add gather/scatter as derived exprs | @sjfeng1999 | merged | 2026-07-06 | 2026-07-07 |
| [#789](https://github.com/ROCm/FlyDSL/pull/789) | [Enh] Add finer FastMathFlag control | @sjfeng1999 | merged | 2026-07-01 | 2026-07-07 |
| [#783](https://github.com/ROCm/FlyDSL/pull/783) | [1/5] autotune: harden cache key + add restore_value (#770) | @jhinpan | merged | 2026-07-01 | 2026-07-07 |
| [#807](https://github.com/ROCm/FlyDSL/pull/807) | refactor(kernels): domain subpackages, layered common, de-du... | @Phil-amd | merged | 2026-07-07 | 2026-07-07 |
| [#772](https://github.com/ROCm/FlyDSL/pull/772) | [Feat]: Add dispatch & combine tuning configuration | @yanboshao | merged | 2026-06-30 | 2026-07-07 |
| [#794](https://github.com/ROCm/FlyDSL/pull/794) | [Kernel] conv3d: 8-wave double-buffered FP8 implicit-GEMM ke... | @jiacao-amd | merged | 2026-07-01 | 2026-07-07 |
| [#804](https://github.com/ROCm/FlyDSL/pull/804) | update to 0.2.3 | @coderfeli | merged | 2026-07-06 | 2026-07-06 |
| [#802](https://github.com/ROCm/FlyDSL/pull/802) | Refactor/fp8 8wave fx gemm call | @coderfeli | merged | 2026-07-06 | 2026-07-06 |
| [#799](https://github.com/ROCm/FlyDSL/pull/799) | [Enh] Support chained comparison | @sjfeng1999 | merged | 2026-07-03 | 2026-07-05 |
| [#792](https://github.com/ROCm/FlyDSL/pull/792) | [Fix] Lower CDNA3 32x32x8 BF16 MFMA | @coderfeli | merged | 2026-07-01 | 2026-07-03 |
| [#776](https://github.com/ROCm/FlyDSL/pull/776) | [pa] Deterministic split-partition reduce for PS decode | @fsx950223 | merged | 2026-06-30 | 2026-07-01 |
| [#784](https://github.com/ROCm/FlyDSL/pull/784) | [Fix] Add coalesceX to keep layout boundary | @sjfeng1999 | merged | 2026-07-01 | 2026-07-01 |
| [#782](https://github.com/ROCm/FlyDSL/pull/782) | [Fix] preshuffle_gemm: wire xcd_swizzle + fix xcd_remap_bx_b... | @coderfeli | merged | 2026-07-01 | 2026-07-01 |
| [#787](https://github.com/ROCm/FlyDSL/pull/787) | fix: fix gf1250 naming style | @jli-melchior | merged | 2026-07-01 | 2026-07-01 |
| [#778](https://github.com/ROCm/FlyDSL/pull/778) | refactor: move scalar buffer_load and maxnumf into the FlyDS... | @fsx950223 | merged | 2026-06-30 | 2026-07-01 |
| [#781](https://github.com/ROCm/FlyDSL/pull/781) | [Docs] Refer to gfx1250 by arch name only in docs and commen... | @coderfeli | merged | 2026-07-01 | 2026-07-01 |
| [#779](https://github.com/ROCm/FlyDSL/pull/779) | Add boundary check on example01, make it target-neutral | @sjfeng1999 | merged | 2026-06-30 | 2026-07-01 |
| [#737](https://github.com/ROCm/FlyDSL/pull/737) | ci: restore CI performance dashboard (gh-pages, lean main) +... | @jhinpan | merged | 2026-06-25 | 2026-06-30 |
| [#777](https://github.com/ROCm/FlyDSL/pull/777) | [Enh] Add FallbackLocations rewriter for bare-op source loca... | @sjfeng1999 | merged | 2026-06-30 | 2026-06-30 |
| [#741](https://github.com/ROCm/FlyDSL/pull/741) | perf(pa): Raw-pointer kernargs and decode kernel refactor | @fsx950223 | merged | 2026-06-25 | 2026-06-30 |
| [#768](https://github.com/ROCm/FlyDSL/pull/768) | Fix pipeline | @solinzby1 | merged | 2026-06-30 | 2026-06-30 |
| [#766](https://github.com/ROCm/FlyDSL/pull/766) | [Enh] Support memref_load_vec on coord_tensor 1d | @sjfeng1999 | merged | 2026-06-29 | 2026-06-30 |
| [#759](https://github.com/ROCm/FlyDSL/pull/759) | Fix loop-carried Vector losing multi-dim shape (issue #734) | @xudoyuan | merged | 2026-06-26 | 2026-06-30 |
| [#750](https://github.com/ROCm/FlyDSL/pull/750) | [gfx1250] Add cluster launch support with TDM multicast band... | @jli-melchior | merged | 2026-06-26 | 2026-06-30 |
| [#765](https://github.com/ROCm/FlyDSL/pull/765) | Rlcr/moe fxcopy impl | @coderfeli | merged | 2026-06-29 | 2026-06-29 |
| [#762](https://github.com/ROCm/FlyDSL/pull/762) | Add common VectorType alias | @sjfeng1999 | merged | 2026-06-29 | 2026-06-29 |
| [#754](https://github.com/ROCm/FlyDSL/pull/754) | Extend v2 gemm | @coderfeli | merged | 2026-06-26 | 2026-06-28 |
| [#758](https://github.com/ROCm/FlyDSL/pull/758) | [FMHA] Paged-KV cache support for prefill: linear and vector... | @yanguahe | merged | 2026-06-26 | 2026-06-27 |
| [#711](https://github.com/ROCm/FlyDSL/pull/711) | feat(flash-attn): fp8 e4m3fn forward on gfx950 dual-wave SWP... | @jhinpan | merged | 2026-06-20 | 2026-06-26 |
| [#755](https://github.com/ROCm/FlyDSL/pull/755) | [Diag] Warn if annotations mismatch with actual arguments | @sjfeng1999 | merged | 2026-06-26 | 2026-06-26 |
| [#742](https://github.com/ROCm/FlyDSL/pull/742) | [Feat] Export SyncScope enum to fine control memory semantic | @sjfeng1999 | merged | 2026-06-25 | 2026-06-26 |
| [#745](https://github.com/ROCm/FlyDSL/pull/745) | Moe layout api copyatom | @coderfeli | merged | 2026-06-25 | 2026-06-26 |
| [#743](https://github.com/ROCm/FlyDSL/pull/743) | Tune v2 gemm | @coderfeli | merged | 2026-06-25 | 2026-06-25 |
| [#735](https://github.com/ROCm/FlyDSL/pull/735) | [Feat] Export Basis to dsl expression | @sjfeng1999 | merged | 2026-06-24 | 2026-06-24 |
| [#728](https://github.com/ROCm/FlyDSL/pull/728) | [Fix] Let Layout permissive in the IntTupleLike ops | @sjfeng1999 | merged | 2026-06-23 | 2026-06-24 |
| [#729](https://github.com/ROCm/FlyDSL/pull/729) | [Fix] Capture the width of ir.Value correctly in the IntTupl... | @sjfeng1999 | merged | 2026-06-23 | 2026-06-24 |
| [#705](https://github.com/ROCm/FlyDSL/pull/705) | [gfx1250][gemm] Fix A-scale VGPR and optimize decode GEMM | @aoli26 | merged | 2026-06-19 | 2026-06-23 |
| [#679](https://github.com/ROCm/FlyDSL/pull/679) | [gfx1250][gemm] Make mxscale B-scale preshuffle tile-indepen... | @aoli26 | merged | 2026-06-14 | 2026-06-23 |
| [#685](https://github.com/ROCm/FlyDSL/pull/685) | [FMHA] gfx950: batch-aware dense seq_len routing (DUALWAVE_S... | @jhinpan | merged | 2026-06-16 | 2026-06-23 |
| [#610](https://github.com/ROCm/FlyDSL/pull/610) | Optimize rmsnorm/layernorm to get better performance than ai... | @cschenjunlin | merged | 2026-06-02 | 2026-06-22 |
| [#703](https://github.com/ROCm/FlyDSL/pull/703) | [Enh] More readable DslError traceback | @sjfeng1999 | merged | 2026-06-18 | 2026-06-22 |
| [#707](https://github.com/ROCm/FlyDSL/pull/707) | fix slice return type on coord_tensor | @tingqli | merged | 2026-06-19 | 2026-06-22 |
| [#714](https://github.com/ROCm/FlyDSL/pull/714) | [Kernel] FP8 4-Wave GEMM: pin MFMA accumulator in AGPR (+5~1... | @benenzhu | merged | 2026-06-22 | 2026-06-22 |
| [#704](https://github.com/ROCm/FlyDSL/pull/704) | [FMHA] add flash_attn_interface L2 wrapper and cross-length ... | @yanguahe | merged | 2026-06-18 | 2026-06-21 |
| [#710](https://github.com/ROCm/FlyDSL/pull/710) | [Fix] Call aiter pa_reduce_v1 by keyword to track arg-order ... | @coderfeli | merged | 2026-06-20 | 2026-06-20 |
| [#675](https://github.com/ROCm/FlyDSL/pull/675) | ci: add CI performance dashboard at /ci-dashboard | @jhinpan | merged | 2026-06-11 | 2026-06-17 |
| [#702](https://github.com/ROCm/FlyDSL/pull/702) | [FEAT] Update location tracing coverage | @sjfeng1999 | merged | 2026-06-17 | 2026-06-17 |
| [#700](https://github.com/ROCm/FlyDSL/pull/700) | [Fix] Align tensor integer storage with pointer types | @sjfeng1999 | merged | 2026-06-17 | 2026-06-17 |
| [#656](https://github.com/ROCm/FlyDSL/pull/656) | enh(test_common): add profiler-safe HIP-event timing path to... | @Arist12 | merged | 2026-06-04 | 2026-06-17 |
| [#692](https://github.com/ROCm/FlyDSL/pull/692) | [Chore] Multi-Gpu CI: Switch Mori IR installation from sourc... | @yanboshao | merged | 2026-06-16 | 2026-06-17 |
| [#683](https://github.com/ROCm/FlyDSL/pull/683) | [FMHA] gfx950 dualwave SWP forward kernel: split-K, varlen, ... | @yanguahe | merged | 2026-06-15 | 2026-06-16 |

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-07-15T09:47:39Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#602](https://github.com/ROCm/TransformerEngine/pull/602) | Update CI to use TheRock | @VeeraRajasekhar | open | 2026-05-29 | 2026-07-15 |
| [#667](https://github.com/ROCm/TransformerEngine/pull/667) | Experimental Triton GEMM backend for TE PyTorch (BF16/FP16/F... | @wenchenvincent | open | 2026-07-09 | 2026-07-15 |
| [#660](https://github.com/ROCm/TransformerEngine/pull/660) | Ifu dev 20260706 v2.17 | @AllenFarcas | draft | 2026-07-07 | 2026-07-14 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | [proof-of-concept] benchmarks dashboard | @matthiasdiener | draft | 2026-07-14 | 2026-07-14 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-07-14 |
| [#664](https://github.com/ROCm/TransformerEngine/pull/664) | optimize mxfp4 cast/transpose | @matthiasdiener | open | 2026-07-07 | 2026-07-14 |
| [#599](https://github.com/ROCm/TransformerEngine/pull/599) | Update QoLA/AITER  | @Micky774 | open | 2026-05-28 | 2026-07-14 |
| [#668](https://github.com/ROCm/TransformerEngine/pull/668) | Fix CI  | @pelumi1163 | open | 2026-07-10 | 2026-07-14 |
| [#662](https://github.com/ROCm/TransformerEngine/pull/662) | Added AITER V3 API check mechanism | @Micky774 | open | 2026-07-07 | 2026-07-14 |
| [#656](https://github.com/ROCm/TransformerEngine/pull/656) | Release 2.15 | @VeeraRajasekhar | open | 2026-07-01 | 2026-07-14 |
| [#669](https://github.com/ROCm/TransformerEngine/pull/669) | fix spurious recompilation on incremental editable builds | @matthiasdiener | open | 2026-07-13 | 2026-07-13 |
| [#661](https://github.com/ROCm/TransformerEngine/pull/661) | Grouped MXFP8 GEMMs with HipKittens | @alextmagro | open | 2026-07-07 | 2026-07-13 |
| [#625](https://github.com/ROCm/TransformerEngine/pull/625) | Add ROCm HIP small-seq fused attention via crossattn_hip_ker... | @VeeraRajasekhar | open | 2026-06-15 | 2026-07-11 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-07-09 |
| [#649](https://github.com/ROCm/TransformerEngine/pull/649) | [Feat] Added JAX-Triton bridge for ROCm | @AllenFarcas | open | 2026-06-24 | 2026-07-09 |
| [#658](https://github.com/ROCm/TransformerEngine/pull/658) | blockwise fp8 gemm integration for gfx942 and gfx950 | @asdfvg123 | open | 2026-07-06 | 2026-07-09 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-07-08 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-07-08 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | draft | 2026-07-07 | 2026-07-08 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-07-01 |
| [#657](https://github.com/ROCm/TransformerEngine/pull/657) | [ROCm] Fix THD/ragged dQ backward on the bf16 dq_shuffle pat... | @wenchenvincent | open | 2026-07-01 | 2026-07-01 |
| [#655](https://github.com/ROCm/TransformerEngine/pull/655) | Ipanfilo/aiter split kv fwd | @ipanfilo | draft | 2026-06-29 | 2026-06-29 |
| [#620](https://github.com/ROCm/TransformerEngine/pull/620) | [FEAT] Microbenchmark add visualization | @Micky774 | open | 2026-06-08 | 2026-06-25 |
| [#603](https://github.com/ROCm/TransformerEngine/pull/603) | TE AITER gfx1250 integration WIP | @Micky774 | draft | 2026-05-29 | 2026-06-23 |
| [#614](https://github.com/ROCm/TransformerEngine/pull/614) | Incorporate statistical significance testing to benchmarks | @Micky774 | open | 2026-06-08 | 2026-06-23 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-06-25 |
| [#639](https://github.com/ROCm/TransformerEngine/pull/639) | grouped gemm microbenchmark: use te.GroupedLinear | @matthiasdiener | open | 2026-06-18 | 2026-06-22 |
| [#642](https://github.com/ROCm/TransformerEngine/pull/642) | Relax MXFP8 GEMM K constraint from multiple-of-128 to multip... | @JohnQinAMD | open | 2026-06-19 | 2026-06-20 |
| [#581](https://github.com/ROCm/TransformerEngine/pull/581) | Add Tealite: pure-Python TransformerEngine for ROCm/AMD GPUs | @jayfurmanek | open | 2026-05-07 | 2026-06-17 |
| [#492](https://github.com/ROCm/TransformerEngine/pull/492) | Add fsdp2 fp8 unit tests TE 2.10 | @sudhu2k | open | 2026-03-17 | 2026-06-15 |
| [#618](https://github.com/ROCm/TransformerEngine/pull/618) | Refactored reduction kernels | @Micky774 | open | 2026-06-08 | 2026-06-12 |
| [#622](https://github.com/ROCm/TransformerEngine/pull/622) | [CI] Add resilience to artifacts fetch | @leo-automation | open | 2026-06-09 | 2026-06-09 |
| [#590](https://github.com/ROCm/TransformerEngine/pull/590) | add production GEMM tests | @matthiasdiener | open | 2026-05-19 | 2026-06-04 |
| [#541](https://github.com/ROCm/TransformerEngine/pull/541) | Integrate AITER fused RoPE kernels with fallback to TE nativ... | @suachong | open | 2026-04-15 | 2026-06-01 |
| [#591](https://github.com/ROCm/TransformerEngine/pull/591) | Bump CI retention days | @matthiasdiener | draft | 2026-05-20 | 2026-05-29 |
| [#573](https://github.com/ROCm/TransformerEngine/pull/573) | [ROCm] Allow bf16/bf16/fp32 in nvte_multi_tensor_gemm dispat... | @lizamd | open | 2026-05-04 | 2026-05-15 |
| [#543](https://github.com/ROCm/TransformerEngine/pull/543) | CI: auto-trigger AITER prebuilt upload when 3rdparty/aiter u... | @VeeraRajasekhar | open | 2026-04-15 | 2026-05-08 |
| [#547](https://github.com/ROCm/TransformerEngine/pull/547) | Enable CI lint gh action on ROCm | @VeeraRajasekhar | open | 2026-04-17 | 2026-05-07 |
| [#570](https://github.com/ROCm/TransformerEngine/pull/570) | [No Merge][No Review] testing aiter auto trigger on gh actio... | @VeeraRajasekhar | draft | 2026-05-01 | 2026-05-02 |
| [#558](https://github.com/ROCm/TransformerEngine/pull/558) | [WIP] TDM porting | @wangye805 | draft | 2026-04-22 | 2026-04-30 |
| [#542](https://github.com/ROCm/TransformerEngine/pull/542) | [TE] Phase 2 of small-seq cross-attn integration: a separate... | @VeeraRajasekhar | open | 2026-04-15 | 2026-04-28 |
| [#515](https://github.com/ROCm/TransformerEngine/pull/515) | NVFP4: hadamard_transform_cast_fusion_columnwise | @matthiasdiener | draft | 2026-04-01 | 2026-04-20 |
| [#461](https://github.com/ROCm/TransformerEngine/pull/461) | [NO MERGE] Integrate CK varlen cross attention for small-seq... | @VeeraRajasekhar | open | 2026-02-24 | 2026-04-07 |
| [#177](https://github.com/ROCm/TransformerEngine/pull/177) | [ROCm] support triton-based flash-attn in TE | @wangye805 | open | 2025-05-01 | 2026-04-07 |
| [#152](https://github.com/ROCm/TransformerEngine/pull/152) | Update attention example attention.ipynb | @anhminhnguyenhoang | open | 2025-03-19 | 2026-04-07 |
| [#123](https://github.com/ROCm/TransformerEngine/pull/123) | Honor the NVTE_FUSED_ATTN_<backend> in test_fused_attn.py | @wangye805 | open | 2025-02-11 | 2026-04-07 |
| [#489](https://github.com/ROCm/TransformerEngine/pull/489) | Add AITER fused RoPE dispatch to FusedRoPEFunc | @sarthak-amd | open | 2026-03-17 | 2026-04-07 |
| [#480](https://github.com/ROCm/TransformerEngine/pull/480) | Add Claude to review PRs | @wenchenvincent | open | 2026-03-13 | 2026-04-07 |
| [#435](https://github.com/ROCm/TransformerEngine/pull/435) | Update README.rst | @aris134 | draft | 2026-01-28 | 2026-04-07 |
| [#400](https://github.com/ROCm/TransformerEngine/pull/400) | CI: Switch GHA pipeline to build and test wheels | @leo-automation | draft | 2025-12-09 | 2026-04-07 |
| [#377](https://github.com/ROCm/TransformerEngine/pull/377) | Layernorm forward optimization | @eliotwang | open | 2025-11-24 | 2026-04-07 |
| [#336](https://github.com/ROCm/TransformerEngine/pull/336) | Fused Cross Entropy Triton - Loss Scaling and Vanishing Grad... | @sarthak-amd | open | 2025-10-16 | 2026-04-07 |
| [#225](https://github.com/ROCm/TransformerEngine/pull/225) | heyi's layernorm optimization | @eliotwang | open | 2025-07-03 | 2026-04-07 |
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
| [#584](https://github.com/ROCm/TransformerEngine/pull/584) | Harden claude-pr-action.yml | @Micky774 | merged | 2026-05-12 | 2026-05-20 |
| [#583](https://github.com/ROCm/TransformerEngine/pull/583) | RMS Norm Optimization | @aris134 | merged | 2026-05-12 | 2026-05-19 |
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
