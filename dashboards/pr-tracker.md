# PR Tracker

All tracked PRs across projects, grouped by project.

## pytorch (Upstream Watch)
Repo: `pytorch/pytorch` | Last collected: 2026-08-04T10:24:56Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#192037](https://github.com/pytorch/pytorch/pull/192037) | [Testcase Refactoring] Add hw_classification and instantiate... | @xjbanana258 | open | 2026-08-04 | 2026-08-04 |
| [#189646](https://github.com/pytorch/pytorch/pull/189646) | [ROCm][Inductor] Support CK-Tile universal GEMM API change i... | @jagadish-amd | open | 2026-07-12 | 2026-08-04 |
| [#181727](https://github.com/pytorch/pytorch/pull/181727) | [xpu][2/3]Implement scaled_mm_v1 for MXFP8/MXFP4/NVFP4 on XP... | @carsonwang | open | 2026-04-28 | 2026-08-04 |
| [#181000](https://github.com/pytorch/pytorch/pull/181000) | [inductor] Dump Python stacks on CI test subprocess timeout | @jeffdaily | open | 2026-04-21 | 2026-08-04 |
| [#190594](https://github.com/pytorch/pytorch/pull/190594) | [inductor] Fuse interleaved sub-parent reduction epilogues | @eellison | open | 2026-07-20 | 2026-08-04 |
| [#190596](https://github.com/pytorch/pytorch/pull/190596) | [inductor] Fuse contiguous sub-parent reduction epilogues | @eellison | open | 2026-07-20 | 2026-08-04 |
| [#190595](https://github.com/pytorch/pytorch/pull/190595) | [inductor] Fuse interleaved epilogues in nested reductions | @eellison | open | 2026-07-20 | 2026-08-04 |
| [#191775](https://github.com/pytorch/pytorch/pull/191775) | [inductor] Fuse staged MXFP6 packing epilogues | @eellison | open | 2026-07-31 | 2026-08-04 |
| [#187165](https://github.com/pytorch/pytorch/pull/187165) | [ROCm] Enable FMA inductor lowering on ROCm | @jataylo | open | 2026-06-12 | 2026-08-04 |
| [#191628](https://github.com/pytorch/pytorch/pull/191628) | [inductor][ROCm] Skip GEMM configs where BLOCK_K underfills ... | @leonling-ll | open | 2026-07-30 | 2026-08-04 |
| [#191349](https://github.com/pytorch/pytorch/pull/191349) | [Inductor] Guard loop reindexing with selected-tiling coales... | @eellison | open | 2026-07-28 | 2026-08-04 |
| [#190927](https://github.com/pytorch/pytorch/pull/190927) | Build sccache from source for CUDA 13.3+ (--simt-only parser... | @tinglvv | open | 2026-07-23 | 2026-08-04 |
| [#189455](https://github.com/pytorch/pytorch/pull/189455) | Collect build time metrics | @lakshayg | open | 2026-07-09 | 2026-08-04 |
| [#191972](https://github.com/pytorch/pytorch/pull/191972) | [CUDA] Remove cuBLAS grouped_gemm row/col swap workaround | @gderossi | open | 2026-08-03 | 2026-08-04 |
| [#190276](https://github.com/pytorch/pytorch/pull/190276) | [ROCm][CI] Add rocm7.14 nightly manywheel build via TheRock ... | @ethanwee1 | open | 2026-07-16 | 2026-08-04 |
| [#189955](https://github.com/pytorch/pytorch/pull/189955) | Migrate legacy fp32 matmul precision readers to per-backend ... | @jeffdaily | open | 2026-07-14 | 2026-08-04 |
| [#188593](https://github.com/pytorch/pytorch/pull/188593) | [ROCm] Add skipIfRocmVersionAtLeast([7, 14]) skips for ROCm ... | @chinmaydk99 | draft | 2026-06-30 | 2026-08-04 |
| [#191804](https://github.com/pytorch/pytorch/pull/191804) | [dynamo, benchmarks] record ops captured and eager fallbacks... | @williamwen42 | open | 2026-07-31 | 2026-08-04 |
| [#188433](https://github.com/pytorch/pytorch/pull/188433) | linear_cross_entropy: test and document bias with probabilit... | @pearu | open | 2026-06-29 | 2026-08-04 |
| [#190393](https://github.com/pytorch/pytorch/pull/190393) | [dynamo] make torch._dynamo.disable return a C-level Disable... | @williamwen42 | draft | 2026-07-17 | 2026-08-04 |
| [#188328](https://github.com/pytorch/pytorch/pull/188328) | [meta] Add output_padding and bias validation to transposed ... | @MDSALMANSHAMS | open | 2026-06-27 | 2026-08-04 |
| [#190176](https://github.com/pytorch/pytorch/pull/190176) | [Testcase Refactoring] Decouple test_analysis.py from CUDA-s... | @pengyeqing | open | 2026-07-16 | 2026-08-04 |
| [#185208](https://github.com/pytorch/pytorch/pull/185208) | [PoC] uv.lock dependency-groups for runtime + build deps | @zklaus | draft | 2026-05-26 | 2026-08-04 |
| [#190308](https://github.com/pytorch/pytorch/pull/190308) | [CUDA] Unwind abandoned graph captures in CUDAGraph so their... | @eee4017 | draft | 2026-07-17 | 2026-08-04 |
| [#190440](https://github.com/pytorch/pytorch/pull/190440) | [Draft 3.9.0] Update Triton | @warrendeng | draft | 2026-07-18 | 2026-08-04 |
| [#188429](https://github.com/pytorch/pytorch/pull/188429) | [ROCm][CI] Switch rocm-preview to TheRock wheels and upgrade... | @ethanwee1 | draft | 2026-06-29 | 2026-08-04 |
| [#152806](https://github.com/pytorch/pytorch/pull/152806) | [invoke_subgraph] Force the output stride to be same as eage... | @anijain2305 | open | 2025-05-05 | 2026-08-04 |
| [#179286](https://github.com/pytorch/pytorch/pull/179286) | Use C++20 concepts where it improves readability | @lakshayg | open | 2026-04-03 | 2026-08-04 |
| [#191442](https://github.com/pytorch/pytorch/pull/191442) | [ROCm][CI] Use python image for ROCm binary wheel tests | @jithunnair-amd | draft | 2026-07-29 | 2026-08-04 |
| [#190473](https://github.com/pytorch/pytorch/pull/190473) | [inductor] split libdevice path assertion for precise failur... | @bobrenjc93 | open | 2026-07-19 | 2026-08-04 |
| [#191632](https://github.com/pytorch/pytorch/pull/191632) | Include TheRock _rocm_init.py via scikit-build wheel.exclude... | @ethanwee1 | open | 2026-07-30 | 2026-08-04 |
| [#191295](https://github.com/pytorch/pytorch/pull/191295) | [inductor] skip fallback for aten.sym_size.int in lite mode ... | @zoranzhao | open | 2026-07-28 | 2026-08-04 |
| [#191870](https://github.com/pytorch/pytorch/pull/191870) | [ROCm] fix CUDA guard false positive on ROCm devices | @zjliu-amd | closed | 2026-08-02 | 2026-08-04 |
| [#187778](https://github.com/pytorch/pytorch/pull/187778) | Flatten all_to_all_nd copy to fix narrow-row throughput | @kwen2501 | open | 2026-06-20 | 2026-08-04 |
| [#185366](https://github.com/pytorch/pytorch/pull/185366) | [ROCm][Distributed] Add synthesized test for sac_milp to ens... | @zjliu-amd | open | 2026-05-27 | 2026-08-04 |
| [#189760](https://github.com/pytorch/pytorch/pull/189760) | [BE] Switch ubuntu-rocm CI image off conda to a deadsnakes v... | @ethanwee1 | open | 2026-07-13 | 2026-08-04 |
| [#191062](https://github.com/pytorch/pytorch/pull/191062) | [ROCm] Use flattened literal OCKL path for ROCm device kerne... | @apakbin | open | 2026-07-24 | 2026-08-04 |
| [#190290](https://github.com/pytorch/pytorch/pull/190290) | [ROCm] Add gfx950 pre-swizzled MX FP4/FP8 scale layout for s... | @jagadish-amd | open | 2026-07-17 | 2026-08-04 |
| [#191166](https://github.com/pytorch/pytorch/pull/191166) | [ROCm][inductor] gfx1250 TDM support | @glen-amd | open | 2026-07-27 | 2026-08-04 |
| [#188031](https://github.com/pytorch/pytorch/pull/188031) | Fix 64-bit indexing in spatial softmax backward | @he-yufeng | open | 2026-06-24 | 2026-08-04 |
| [#191447](https://github.com/pytorch/pytorch/pull/191447) | Add FlyDSL native RMSNorm forward override | @XiaobingSuper | open | 2026-07-29 | 2026-08-04 |
| [#191446](https://github.com/pytorch/pytorch/pull/191446) | Add FlyDSL as a backend for native op overrides | @XiaobingSuper | open | 2026-07-29 | 2026-08-04 |
| [#191625](https://github.com/pytorch/pytorch/pull/191625) | [ROCm] Install gitignored torch/_rocm_init.py into ROCm whee... | @tvukovic-amd | open | 2026-07-30 | 2026-08-04 |
| [#192005](https://github.com/pytorch/pytorch/pull/192005) | [ROCm] Fix CUDAGuard narrowing in flash attention | @ameilkumar-ibm | open | 2026-08-03 | 2026-08-03 |
| [#184253](https://github.com/pytorch/pytorch/pull/184253) | [DO NOT MERGE][ROCm][CI] Test k8s dpx | @amdfaa | draft | 2026-05-18 | 2026-08-03 |
| [#180885](https://github.com/pytorch/pytorch/pull/180885) | CUDA: unrolled kernels for upsample_linear1d forward/backwar... | @bvillasen | open | 2026-04-20 | 2026-08-03 |
| [#191675](https://github.com/pytorch/pytorch/pull/191675) | [CUDA][ROCm] Remove unnecessary narrowing casts in CUDAGuard... | @xinyazhang | open | 2026-07-30 | 2026-08-03 |
| [#191682](https://github.com/pytorch/pytorch/pull/191682) | Enable FP8 FNUZ sparse semi-structured support on ROCm gfx94... | @rraminen | draft | 2026-07-30 | 2026-08-03 |
| [#170051](https://github.com/pytorch/pytorch/pull/170051) | Add pivoted QR decomposition to ATen and torch.linalg | @thkloss | open | 2025-12-10 | 2026-08-03 |
| [#188296](https://github.com/pytorch/pytorch/pull/188296) | linear_cross_entropy: support probability targets with reduc... | @pearu | open | 2026-06-26 | 2026-08-03 |
| [#190534](https://github.com/pytorch/pytorch/pull/190534) | [inductor][ROCm] Relax tolerance in test_reduction_comprehen... | @jataylo | open | 2026-07-20 | 2026-08-03 |
| [#191629](https://github.com/pytorch/pytorch/pull/191629) | [ROCm][Windows] Install libomp140.x86_64.dll into scikit-bui... | @ethanwee1 | draft | 2026-07-30 | 2026-08-03 |
| [#190550](https://github.com/pytorch/pytorch/pull/190550) | [ROCm] unskips tests | @jataylo | draft | 2026-07-20 | 2026-08-03 |
| [#190703](https://github.com/pytorch/pytorch/pull/190703) | Deduplicate scaled_mm_allowed_device into ScaledBlasUtils | @jagadish-amd | open | 2026-07-21 | 2026-08-03 |
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
Repo: `jax-ml/jax` | Last collected: 2026-08-04T10:25:01Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#39698](https://github.com/jax-ml/jax/pull/39698) | [ROCm] Point TheRock latest nightly CI at ROCm 10 wheels | @magaonka-amd | open | 2026-08-03 | 2026-08-03 |
| [#39632](https://github.com/jax-ml/jax/pull/39632) | [ROCm] Remove the legacy ROCm GPU Post-Merge Check workflow | @magaonka-amd | merged | 2026-07-31 | 2026-08-03 |
| [#39634](https://github.com/jax-ml/jax/pull/39634) | [ROCm] Find ROCm plugin packages by major version | @gulsumgudukbay | merged | 2026-07-31 | 2026-07-31 |
| [#38810](https://github.com/jax-ml/jax/pull/38810) | [ROCm] Add TheRock 7.14.0/latest coverage to CI workflows | @mminutoli | merged | 2026-06-26 | 2026-07-31 |
| [#39616](https://github.com/jax-ml/jax/pull/39616) | [ROCm] Add missing wheel deps | @alekstheod | merged | 2026-07-31 | 2026-07-31 |
| [#39601](https://github.com/jax-ml/jax/pull/39601) | Add --init to docker options in ROCm CI container workflows | @mminutoli | draft | 2026-07-30 | 2026-07-30 |
| [#39550](https://github.com/jax-ml/jax/pull/39550) | [ROCm] Build ROCm artifacts on CPU runners | @psanal35 | merged | 2026-07-29 | 2026-07-29 |
| [#39220](https://github.com/jax-ml/jax/pull/39220) | [ROCm] Add runfiles data files for proper hermetic bzl test ... | @alekstheod | merged | 2026-07-16 | 2026-07-29 |
| [#39419](https://github.com/jax-ml/jax/pull/39419) | [ROCm] Fix invalid parallel local jobs execution | @alekstheod | open | 2026-07-24 | 2026-07-28 |
| [#39473](https://github.com/jax-ml/jax/pull/39473) | [WIP][ROCm] Prevent job-container teardown hangs in ROCm CI | @magaonka-amd | draft | 2026-07-27 | 2026-07-27 |
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
| [#38803](https://github.com/jax-ml/jax/pull/38803) | [ROCm] Add expanded target set for ROCm | @tsrw2048 | open | 2026-06-26 | 2026-06-29 |
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
| [#38142](https://github.com/jax-ml/jax/pull/38142) | [ROCm] Enable HLO module transform registration for GPU back... | @mminutoli | open | 2026-06-02 | 2026-06-02 |
| [#36572](https://github.com/jax-ml/jax/pull/36572) | [ROCm] LSTM fix MIOpen wights layout | @shurale-nkn | open | 2026-04-07 | 2026-05-05 |
| [#37186](https://github.com/jax-ml/jax/pull/37186) | [ROCm] aiter mha kernels (ASM+CK) integration (#747) | @zahiqbal | open | 2026-04-27 | 2026-04-30 |
| [#37085](https://github.com/jax-ml/jax/pull/37085) | Upgrade upstream ROCm CI from 7.2.0 to 7.2.2 | @Ruturaj4 | draft | 2026-04-22 | 2026-04-29 |
| [#36545](https://github.com/jax-ml/jax/pull/36545) | [ROCm] Added stricter checks to detect non-numeric strings i... | @tsrw2048 | open | 2026-04-06 | 2026-04-07 |
| [#31381](https://github.com/jax-ml/jax/pull/31381) | Remove old ROCm build code | @charleshofer | open | 2025-08-27 | 2026-03-30 |
| [#34491](https://github.com/jax-ml/jax/pull/34491) | Enable ROCm testing for threefry_partitionable PRNG tests | @hrideymarwah15 | open | 2026-01-20 | 2026-03-30 |
| [#36061](https://github.com/jax-ml/jax/pull/36061) | Limit the number of jobs to 30 for ROCm bazel tests | @charleshofer | open | 2026-03-19 | 2026-03-20 |

## vllm (Upstream Watch)
Repo: `vllm-project/vllm` | Last collected: 2026-08-04T10:25:10Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#51011](https://github.com/vllm-project/vllm/pull/51011) | [ROCm][MLA] Fix fp8 KV cache decode on the AITER MLA backend | @fanxingran | open | 2026-08-04 | 2026-08-04 |
| [#49347](https://github.com/vllm-project/vllm/pull/49347) | [Online quantization] Add online MXFP4 quantization support | @fxmarty-amd | open | 2026-07-21 | 2026-08-04 |
| [#51006](https://github.com/vllm-project/vllm/pull/51006) | [MoE] Add Platform routing backend interface | @freyfwt | draft | 2026-08-04 | 2026-08-04 |
| [#51004](https://github.com/vllm-project/vllm/pull/51004) | [Rocm] Fix LMcache support issues for the kimik3-dspark mode... | @haic0 | open | 2026-08-04 | 2026-08-04 |
| [#49700](https://github.com/vllm-project/vllm/pull/49700) | [EPLB] Add Platform Backend interface for out-of-tree device... | @freyfwt | draft | 2026-07-24 | 2026-08-04 |
| [#50992](https://github.com/vllm-project/vllm/pull/50992) | [Perf][KV Offload] Avoid quadratic ARC batch eviction | @mindungil | open | 2026-08-04 | 2026-08-04 |
| [#50371](https://github.com/vllm-project/vllm/pull/50371) | [ROCm] Enable 12-head MLA persistent decode | @LiuYinfeng01 | open | 2026-07-30 | 2026-08-04 |
| [#47972](https://github.com/vllm-project/vllm/pull/47972) | Support DeepSeek-V4 AMD Quark NVFP4 with emulation kernel  | @jimmy-adams | open | 2026-07-08 | 2026-08-04 |
| [#50817](https://github.com/vllm-project/vllm/pull/50817) | [Feature] Enable AITER MXFP4 MoE on gfx942 and optimize tile... | @seanfilimon | open | 2026-08-03 | 2026-08-04 |
| [#47017](https://github.com/vllm-project/vllm/pull/47017) | [ROCm] Enable DeepSeek-V4 on gfx11 | @JoursBleu | open | 2026-06-29 | 2026-08-04 |
| [#50593](https://github.com/vllm-project/vllm/pull/50593) | [Kimi-K3][AMD] Fuse AttnRes state updates and norms | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-04 |
| [#50358](https://github.com/vllm-project/vllm/pull/50358) | [Bugfix] Fail fast with a clear error when CPU offload regio... | @Alex-ai-future | open | 2026-07-30 | 2026-08-04 |
| [#50323](https://github.com/vllm-project/vllm/pull/50323) | [CI] Detect and fail evals on when NaNs appear in logits | @tlrmchlsmth | open | 2026-07-29 | 2026-08-04 |
| [#50976](https://github.com/vllm-project/vllm/pull/50976) | Handle unavailable ROCm GCN architecture fallback | @xwu-intel | draft | 2026-08-04 | 2026-08-04 |
| [#50017](https://github.com/vllm-project/vllm/pull/50017) | Chunked prefill paged decode masked load perf [ROCm] [bugfix... | @afriedri | open | 2026-07-27 | 2026-08-04 |
| [#50802](https://github.com/vllm-project/vllm/pull/50802) | [ROCm] Fix AITER all-reduce fusion coverage | @AndreasKaratzas | open | 2026-08-03 | 2026-08-04 |
| [#50712](https://github.com/vllm-project/vllm/pull/50712) | [ROCm][Bugfix] Populate AiterMLADecodeMetadata.min_kv_seq_le... | @amd-ethany | closed | 2026-08-02 | 2026-08-04 |
| [#50632](https://github.com/vllm-project/vllm/pull/50632) | [CI] Add GSM8K accuracy test for amd/DeepSeek-V4-Flash-MXFP4 | @ColinZ22 | open | 2026-07-31 | 2026-08-04 |
| [#48653](https://github.com/vllm-project/vllm/pull/48653) | fix: Add FP8 type dispatch to per_token_group_quant_8bit for... | @fattchris | open | 2026-07-14 | 2026-08-04 |
| [#48646](https://github.com/vllm-project/vllm/pull/48646) | [ROCm][CI] Reuse equivalent ROCm CI images | @AndreasKaratzas | open | 2026-07-14 | 2026-08-04 |
| [#50068](https://github.com/vllm-project/vllm/pull/50068) | [Model] Enable Qwen3.8 for AMD Rocm | @haic0 | open | 2026-07-28 | 2026-08-04 |
| [#47104](https://github.com/vllm-project/vllm/pull/47104) | [XPU] fix collecting oneccl version info | @yma11 | open | 2026-06-30 | 2026-08-04 |
| [#49888](https://github.com/vllm-project/vllm/pull/49888) | [ROCm] Support AITER paged attention on gfx90a | @rlrs | draft | 2026-07-26 | 2026-08-04 |
| [#50727](https://github.com/vllm-project/vllm/pull/50727) | [Bugfix][MoE] Fix fused block-scale orientation | @AndreasKaratzas | open | 2026-08-02 | 2026-08-04 |
| [#39001](https://github.com/vllm-project/vllm/pull/39001) | [ROCm] Support unlimited sequence lengths via multi-pass red... | @ekuznetsov139 | open | 2026-04-04 | 2026-08-04 |
| [#50903](https://github.com/vllm-project/vllm/pull/50903) | [Bugfix][Kernel] Fix divergent warp collectives in partial N... | @drewjin | open | 2026-08-03 | 2026-08-04 |
| [#50649](https://github.com/vllm-project/vllm/pull/50649) | [ROCm][Bugfix] Kimi-K3 Fix KDA NaN on mixed batches and racy... | @kliuae | open | 2026-08-01 | 2026-08-04 |
| [#50806](https://github.com/vllm-project/vllm/pull/50806) | [ROCm] Restore Inkling MTP backend parity | @AndreasKaratzas | open | 2026-08-03 | 2026-08-04 |
| [#50805](https://github.com/vllm-project/vllm/pull/50805) | [ROCm][CI] Baseline legacy extensions in the Torch ABI audit | @AndreasKaratzas | open | 2026-08-03 | 2026-08-04 |
| [#50614](https://github.com/vllm-project/vllm/pull/50614) | Bump the minor-update group across 1 directory with 172 upda... | @dependabot[bot] | closed | 2026-07-31 | 2026-08-04 |
| [#49375](https://github.com/vllm-project/vllm/pull/49375) | [ROCm][CI] Add More AITER quantization/MoE kernel tests | @micah-wil | open | 2026-07-21 | 2026-08-04 |
| [#50654](https://github.com/vllm-project/vllm/pull/50654) | [ROCm][Perf] Kimi-K3 Fused kernel for KDA decode | @kliuae | open | 2026-08-01 | 2026-08-04 |
| [#49953](https://github.com/vllm-project/vllm/pull/49953) | [ROCm][AITER] Add GDN long-prefill split-QKV fast path | @LiuYinfeng01 | open | 2026-07-27 | 2026-08-04 |
| [#50813](https://github.com/vllm-project/vllm/pull/50813) | [ROCm][Quark] Enable opt-in K3 SiTUv2 A8W4 routed MoE | @LiuYinfeng01 | open | 2026-08-03 | 2026-08-04 |
| [#50499](https://github.com/vllm-project/vllm/pull/50499) | [KVConnector][NIXL] Support packed MLA KV layouts in pipelin... | @zixi-qi | draft | 2026-07-31 | 2026-08-04 |
| [#50367](https://github.com/vllm-project/vllm/pull/50367) | [Bugfix][Kimi K3] Stop streaming hold-back from leaking temp... | @manproai | open | 2026-07-30 | 2026-08-04 |
| [#48534](https://github.com/vllm-project/vllm/pull/48534) | [Bugfix][KV-transfer] MoRIIO: per-layer READ-completion barr... | @edwinlim0919 | open | 2026-07-13 | 2026-08-04 |
| [#43018](https://github.com/vllm-project/vllm/pull/43018) | [ROCm] Cpu offload for ROCm 7.13+ to align the hipMemcpyBatc... | @hongxiayang | open | 2026-05-18 | 2026-08-04 |
| [#50955](https://github.com/vllm-project/vllm/pull/50955) | [Bugfix] Preserve Qwen3 structured output content | @jeffdecoste | open | 2026-08-04 | 2026-08-04 |
| [#47896](https://github.com/vllm-project/vllm/pull/47896) | [Kernel][ROCm][Perf] FlyDSL decode-attention kernel for 4-bi... | @aditi-amd | open | 2026-07-07 | 2026-08-04 |
| [#50951](https://github.com/vllm-project/vllm/pull/50951) | [Bugfix][ROCm] Resolve tuned configs across device-name alia... | @liminfei-amd | open | 2026-08-04 | 2026-08-04 |
| [#50866](https://github.com/vllm-project/vllm/pull/50866) | [ROCm][Refactor] Split multi-stream launch/sync into CUDA an... | @shen-shanshan | draft | 2026-08-03 | 2026-08-04 |
| [#48847](https://github.com/vllm-project/vllm/pull/48847) | [ROCm][CI] Loosen block-FP8 fused MoE test tolerance for lar... | @stefankoncarevic | open | 2026-07-16 | 2026-08-04 |
| [#41054](https://github.com/vllm-project/vllm/pull/41054) | Fix LFM2 decoding on ROCm | @tianshu-Michael-yu | closed | 2026-04-27 | 2026-08-04 |
| [#39118](https://github.com/vllm-project/vllm/pull/39118) | [ROCm] Fix UnboundLocalError for prefix_scheduler_metadata i... | @Bortlesboat | closed | 2026-04-06 | 2026-08-04 |
| [#49925](https://github.com/vllm-project/vllm/pull/49925) | [ROCm] Switch to the Rock, Keep Python 3.12 and Ubuntu 22.04 | @rasmith | open | 2026-07-27 | 2026-08-04 |
| [#41709](https://github.com/vllm-project/vllm/pull/41709) | [Model] Adding model support for bharatgenai/Param-1-2.9B-In... | @amd-anchaudh | open | 2026-05-05 | 2026-08-04 |
| [#50859](https://github.com/vllm-project/vllm/pull/50859) | [ROCm][AITER] Hotfix for `memory access fault` errors in AIT... | @fxmarty-amd | merged | 2026-08-03 | 2026-08-04 |
| [#49264](https://github.com/vllm-project/vllm/pull/49264) | [Bugfix][Hardware][AMD] Handle AITER unified-attention LDS o... | @cofuente | open | 2026-07-21 | 2026-08-04 |
| [#50917](https://github.com/vllm-project/vllm/pull/50917) | [ROCm][Test] Use BF16 for Jina v5 nano MTEB test | @AndreasKaratzas | merged | 2026-08-03 | 2026-08-04 |
| [#45043](https://github.com/vllm-project/vllm/pull/45043) | llmd+vllm+mori-ep(inter node wide-ep)+mori-io(write) for 2p2... | @shikamd123 | merged | 2026-06-09 | 2026-08-04 |
| [#49819](https://github.com/vllm-project/vllm/pull/49819) | [Model] Add Cohere2MoE Eagle3 auxiliary hidden states | @sdougbrown | open | 2026-07-25 | 2026-08-03 |
| [#50607](https://github.com/vllm-project/vllm/pull/50607) | [ROCm]: Bump torch 2.12, triton 3.7, torchaudio, torchvision | @Rohan138 | open | 2026-07-31 | 2026-08-03 |
| [#50928](https://github.com/vllm-project/vllm/pull/50928) | [Bugfix][Model] Kimi K3: shard MoE intermediate by the effec... | @hongyeon-yu | open | 2026-08-03 | 2026-08-03 |
| [#44969](https://github.com/vllm-project/vllm/pull/44969) | [ROCm][CI] Gating more ROCm tests | @AndreasKaratzas | open | 2026-06-09 | 2026-08-03 |
| [#43615](https://github.com/vllm-project/vllm/pull/43615) | [ROCm] Enable AITER and FP8 inference on GFX120x | @skysnow2001 | merged | 2026-05-25 | 2026-08-03 |
| [#50728](https://github.com/vllm-project/vllm/pull/50728) | [ROCm][Test] Fix AITER MXFP4 oracle contract | @AndreasKaratzas | merged | 2026-08-02 | 2026-08-03 |
| [#50634](https://github.com/vllm-project/vllm/pull/50634) | [ROCm][Perf] Fuse Kimi-K3 KDA decode gate | @JohnQinAMD | open | 2026-07-31 | 2026-08-03 |
| [#50582](https://github.com/vllm-project/vllm/pull/50582) | [ROCm][Kimi-K3] aiter moe environment variable cleanup | @hongxiayang | merged | 2026-07-31 | 2026-08-03 |
| [#50726](https://github.com/vllm-project/vllm/pull/50726) | [CI][ROCm] Export Helion benchmark script in test artifacts | @AndreasKaratzas | merged | 2026-08-02 | 2026-08-03 |
| [#50656](https://github.com/vllm-project/vllm/pull/50656) | [Kimi-K3] Add option to shard the shared expert instead of r... | @tlrmchlsmth | merged | 2026-08-01 | 2026-08-03 |
| [#49960](https://github.com/vllm-project/vllm/pull/49960) | [CPU] Fix torch.compile crash from torch.accelerator.synchro... | @ganeshr10 | merged | 2026-07-27 | 2026-08-03 |
| [#50592](https://github.com/vllm-project/vllm/pull/50592) | [Kimi-K3][AMD] Return KDA projection output directly | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-03 |
| [#50764](https://github.com/vllm-project/vllm/pull/50764) | [Bugfix][Frontend] Constrain Anthropic cache_salt to non-emp... | @omkar-droid | merged | 2026-08-02 | 2026-08-03 |
| [#50803](https://github.com/vllm-project/vllm/pull/50803) | [ROCm] Fix DeepSeek V4 indexer numerics and coverage | @AndreasKaratzas | draft | 2026-08-03 | 2026-08-03 |
| [#38476](https://github.com/vllm-project/vllm/pull/38476) | [Feature] TRITON_MLA_SPARSE backend for SM8x/11x/12x DSA Spa... | @haosdent | open | 2026-03-29 | 2026-08-03 |
| [#50766](https://github.com/vllm-project/vllm/pull/50766) | [Bugfix] serving_llama70B_tp4 benchmark was silently running... | @wjabbour | merged | 2026-08-02 | 2026-08-03 |
| [#50688](https://github.com/vllm-project/vllm/pull/50688) | [Model] Support jina-embeddings-v5-text-nano (EuroBERT encod... | @omkar-droid | merged | 2026-08-01 | 2026-08-03 |
| [#44972](https://github.com/vllm-project/vllm/pull/44972) | [Test][V1] Add sleep/wake correctness regression test for hy... | @chun-wan | merged | 2026-06-09 | 2026-08-02 |
| [#50761](https://github.com/vllm-project/vllm/pull/50761) | [ROCm][Bugfix][Kimi-K3] Preserve MoE correction bias in FP32 | @Fangzhou-Ai | merged | 2026-08-02 | 2026-08-02 |
| [#50666](https://github.com/vllm-project/vllm/pull/50666) | [ROCm][Perf] Dispatch Kimi-K3 KDA group64 projection | @JohnQinAMD | draft | 2026-08-01 | 2026-08-02 |
| [#47536](https://github.com/vllm-project/vllm/pull/47536) | [ROCm][CI][Bugfix] Use VllmRunner for `voxtral_realtime` tes... | @shen-shanshan | merged | 2026-07-03 | 2026-08-02 |
| [#50636](https://github.com/vllm-project/vllm/pull/50636) | [ROCm][Perf] Select wvSplitK only in measured-profitable gfx... | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#50618](https://github.com/vllm-project/vllm/pull/50618) | [ROCm][Bugfix] Fix wvSplitK OOB reads on strided activations | @JohnQinAMD | open | 2026-07-31 | 2026-08-02 |
| [#49908](https://github.com/vllm-project/vllm/pull/49908) | [CI] Retry Hugging Face processor loading | @AndreasKaratzas | merged | 2026-07-26 | 2026-08-01 |
| [#50608](https://github.com/vllm-project/vllm/pull/50608) | Add @hongxiayang as code owner for amd specific model files ... | @hongxiayang | merged | 2026-07-31 | 2026-08-01 |
| [#50476](https://github.com/vllm-project/vllm/pull/50476) | [ROCm][MLA] Mask the AITER MLA small-head verify flatten cau... | @yudigege86 | merged | 2026-07-30 | 2026-08-01 |
| [#50655](https://github.com/vllm-project/vllm/pull/50655) | Add @shen-shanshan to CODEOWNERS | @shen-shanshan | merged | 2026-08-01 | 2026-08-01 |
| [#50330](https://github.com/vllm-project/vllm/pull/50330) | [CI] Organize speculative decoding E2E tests by coverage | @mgoin | merged | 2026-07-29 | 2026-08-01 |
| [#44570](https://github.com/vllm-project/vllm/pull/44570) | [MoE Refactor] Combine CompressedTensorsWNA16MarlinMoEMethod... | @bnellnm | merged | 2026-06-04 | 2026-07-31 |
| [#40289](https://github.com/vllm-project/vllm/pull/40289) | [ROCm][ViT] Detect Triton-AMD kernels at their new aiter loc... | @Lafunamor | merged | 2026-04-19 | 2026-07-31 |
| [#48886](https://github.com/vllm-project/vllm/pull/48886) | [ROCm] [BugFix] Fix Quark GLM-5.2 Checkpoint inference: inde... | @ColinZ22 | merged | 2026-07-16 | 2026-07-31 |
| [#49634](https://github.com/vllm-project/vllm/pull/49634) | [Bugfix] Fix DeepseekV4FP8 Quark MXFP4 crash on list-valued ... | @ColinZ22 | merged | 2026-07-23 | 2026-07-31 |
| [#48949](https://github.com/vllm-project/vllm/pull/48949) | [ROCm][Quark][7/N] Use MXFP4 linear kernel abstraction for `... | @fxmarty-amd | merged | 2026-07-17 | 2026-07-31 |
| [#50515](https://github.com/vllm-project/vllm/pull/50515) | [ROCm][CI] Restore Mistral tool-parser compatibility after u... | @AndreasKaratzas | merged | 2026-07-31 | 2026-07-31 |
| [#50328](https://github.com/vllm-project/vllm/pull/50328) | [CI/Build][AMD] Install triton_kernels via CMake | @rjrock | merged | 2026-07-29 | 2026-07-31 |
| [#50516](https://github.com/vllm-project/vllm/pull/50516) | [ROCm][CI] Fall back to lossless Kimi K3 MXFP4 emulation on ... | @AndreasKaratzas | merged | 2026-07-31 | 2026-07-31 |
| [#50517](https://github.com/vllm-project/vllm/pull/50517) | [ROCm][CI] Update Transformers AR+RMS fusion expectation | @AndreasKaratzas | merged | 2026-07-31 | 2026-07-31 |
| [#46110](https://github.com/vllm-project/vllm/pull/46110) | [ROCm] Detect ROCm via KFD topology when amdsmi cannot enume... | @lhl | open | 2026-06-18 | 2026-07-31 |
| [#47719](https://github.com/vllm-project/vllm/pull/47719) | [ROCm][Perf] Add Qwen3 AITER fused QKV/RoPE KV-cache path | @mjkvaak-amd | open | 2026-07-06 | 2026-07-31 |
| [#49361](https://github.com/vllm-project/vllm/pull/49361) | [ROCm]: bump AITER to 0.1.19 | @Rohan138 | merged | 2026-07-21 | 2026-07-31 |
| [#48223](https://github.com/vllm-project/vllm/pull/48223) | [Perf][ROCm] Dual-stream decode with hipgraphs | @simondanielsson | open | 2026-07-10 | 2026-07-31 |
| [#50201](https://github.com/vllm-project/vllm/pull/50201) | [Kernel] Harden top_k_per_row against NaN and under-filled o... | @Smallfu666 | open | 2026-07-29 | 2026-07-31 |
| [#50530](https://github.com/vllm-project/vllm/pull/50530) | [UT] add skipif for rocm aiter sampler UT | @mayuyuace | merged | 2026-07-31 | 2026-07-31 |
| [#41978](https://github.com/vllm-project/vllm/pull/41978) | [ROCm] Fix wvSplitKrc kernel guard: restore CDNA support (wa... | @wjabbour | draft | 2026-05-07 | 2026-07-31 |
| [#41586](https://github.com/vllm-project/vllm/pull/41586) | [Docs][ROCm] Add ROCm-specific troubleshooting section | @naarob | open | 2026-05-04 | 2026-07-31 |
| [#41585](https://github.com/vllm-project/vllm/pull/41585) | [ROCm] Fix platform detection failures in unprivileged conta... | @naarob | open | 2026-05-04 | 2026-07-31 |
| [#48047](https://github.com/vllm-project/vllm/pull/48047) | [DSv4] Remove sparse-MLA q-head padding for FlashInfer >=0.6... | @majunze2001 | merged | 2026-07-08 | 2026-07-31 |
| [#49309](https://github.com/vllm-project/vllm/pull/49309) | [ROCm][CI] Use explicit wvSplitKrc skinny-GEMM test toleranc... | @stefankoncarevic | merged | 2026-07-21 | 2026-07-31 |
| [#50301](https://github.com/vllm-project/vllm/pull/50301) | [KV Offload] Enable single-copy MLA layout for CPUOffloading... | @Change72 | merged | 2026-07-29 | 2026-07-31 |
| [#50352](https://github.com/vllm-project/vllm/pull/50352) | [Bugfix][Model] Reject encoder-backbone jina-embeddings-v5 c... | @woosebastian | merged | 2026-07-30 | 2026-07-31 |
| [#50006](https://github.com/vllm-project/vllm/pull/50006) | [ROCm] Add tuned selective_state_update float16 config for A... | @vanshbhatia-amd | merged | 2026-07-27 | 2026-07-31 |
| [#50450](https://github.com/vllm-project/vllm/pull/50450) | [ROCm][CI] Use larger atol value for INT3 in test_quick_all_... | @music-dino | merged | 2026-07-30 | 2026-07-31 |
| [#50467](https://github.com/vllm-project/vllm/pull/50467) | [Hardware][AMD][Kernel][CI][Bugfix] Fix ROCm DeepEP FP8 max | @mawong-amd | merged | 2026-07-30 | 2026-07-31 |
| [#48727](https://github.com/vllm-project/vllm/pull/48727) | [ROCm][Perf] Use AITER tgemm for DeepSeek V4 compressors | @Fangzhou-Ai | open | 2026-07-15 | 2026-07-31 |
| [#50485](https://github.com/vllm-project/vllm/pull/50485) | [Bugfix][ROCm] Launch KV block zeroing on a 3-D grid | @cagrikymk | open | 2026-07-30 | 2026-07-30 |
| [#50470](https://github.com/vllm-project/vllm/pull/50470) | [ROCm] Route sparse-indexer decode top-k through AITER dispa... | @JH-Leon-KIM-AMD | draft | 2026-07-30 | 2026-07-30 |
| [#46720](https://github.com/vllm-project/vllm/pull/46720) | [ROCm][DSV4] B-preshuffle the attention fp8 projections | @cagrikymk | merged | 2026-06-25 | 2026-07-30 |
| [#50316](https://github.com/vllm-project/vllm/pull/50316) | [Bugfix][CI] Fix rms_quant_fusion CPU import and notify-ci-a... | @Change72 | open | 2026-07-29 | 2026-07-30 |
| [#49914](https://github.com/vllm-project/vllm/pull/49914) | [Frontend] Lazily initialize chat media connectors | @AndreasKaratzas | merged | 2026-07-26 | 2026-07-30 |
| [#46676](https://github.com/vllm-project/vllm/pull/46676) | [KERNEL][ROCm]Native HIP MXFP4(Compressed+Quark) (dense + Mo... | @JartX | draft | 2026-06-25 | 2026-07-30 |
| [#42755](https://github.com/vllm-project/vllm/pull/42755) | [Model][Hardware][AMD][Kernel]: Part 2/2 -> Enable e2e QK No... | @jhu960213 | open | 2026-05-15 | 2026-07-30 |
| [#49621](https://github.com/vllm-project/vllm/pull/49621) | Remove triton per group quant [ROCm] [Bugfix] | @afriedri | merged | 2026-07-23 | 2026-07-28 |
| [#44527](https://github.com/vllm-project/vllm/pull/44527) | [ROCm][DSv3.2] Eliminate per-decode FillFunctor launches in ... | @frida-andersson | merged | 2026-06-04 | 2026-07-28 |
| [#46913](https://github.com/vllm-project/vllm/pull/46913) | [communication] [bugfix] fix quickreduce acc error in cudagr... | @haoyangli0109 | merged | 2026-06-27 | 2026-07-27 |
| [#49270](https://github.com/vllm-project/vllm/pull/49270) | [ROCm][CI] Prepare AMD mirrors for regating | @AndreasKaratzas | merged | 2026-07-21 | 2026-07-24 |
| [#47992](https://github.com/vllm-project/vllm/pull/47992) | [ROCm] Remove redundant AITER fused_qk_rmsnorm probe (avoids... | @stefankoncarevic | merged | 2026-07-08 | 2026-07-22 |
| [#47932](https://github.com/vllm-project/vllm/pull/47932) | [CI/Build][BugFix][The Rock][AMD] Add spawn method in vision... | @rasmith | merged | 2026-07-07 | 2026-07-19 |
| [#48788](https://github.com/vllm-project/vllm/pull/48788) | [ROCm][Perf][DSV4] Improve sparse decode reduction occupancy... | @Fangzhou-Ai | merged | 2026-07-15 | 2026-07-17 |
| [#42749](https://github.com/vllm-project/vllm/pull/42749) | [Model][Hardware][AMD]: Part 1/2 -> Enable e2e QK Norm + RoP... | @jhu960213 | merged | 2026-05-15 | 2026-07-16 |
| [#46757](https://github.com/vllm-project/vllm/pull/46757) | Fix Quark mxfp4 quantized model loading issue under mtp | @xiao-llm | merged | 2026-06-25 | 2026-07-16 |
| [#48015](https://github.com/vllm-project/vllm/pull/48015) | [ROCm][CI] Avoid HIP init at config time via lazy aiter impo... | @music-dino | merged | 2026-07-08 | 2026-07-16 |
| [#40977](https://github.com/vllm-project/vllm/pull/40977) | [ROCm][Kernel] Add HybridW4A16LinearKernel: Triton prefill +... | @mgehre-amd | merged | 2026-04-27 | 2026-07-14 |
| [#44849](https://github.com/vllm-project/vllm/pull/44849) | [ROCm][MiniMax-M2] Dispatch fused QK-norm + AllReduce via AI... | @akii96 | merged | 2026-06-08 | 2026-07-14 |
| [#48258](https://github.com/vllm-project/vllm/pull/48258) | [ROCm][CI] Transformers: pass only one of input_ids/inputs_e... | @stefankoncarevic | merged | 2026-07-10 | 2026-07-13 |
| [#47287](https://github.com/vllm-project/vllm/pull/47287) | [ROCm][MiniMax-M3] Add AITER sparse paged attention | @tanpinsiang | merged | 2026-07-01 | 2026-07-13 |
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

## sglang (Upstream Watch)
Repo: `sgl-project/sglang` | Last collected: 2026-08-04T10:25:20Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#30964](https://github.com/sgl-project/sglang/pull/30964) | [AMD] Support DeepSeek V4 DSpark on AMD HIP platform | @At1a8 | open | 2026-07-13 | 2026-08-04 |
| [#33520](https://github.com/sgl-project/sglang/pull/33520) | [Intel][XPU][KVCanary] Enable KV Canary on Intel XPU | @dayanandav | open | 2026-08-04 | 2026-08-04 |
| [#33533](https://github.com/sgl-project/sglang/pull/33533) | [JIT] per_token_group_quant: fix the fp16 UE8M0 multiplier o... | @DarkSharpness | open | 2026-08-04 | 2026-08-04 |
| [#32898](https://github.com/sgl-project/sglang/pull/32898) | [PD] Fix reasoning token accounting for the handoff token | @imReese | open | 2026-07-30 | 2026-08-04 |
| [#30575](https://github.com/sgl-project/sglang/pull/30575) | [AMD] Enable Fast Triton Sparse MLA backend | @clintg6 | open | 2026-07-09 | 2026-08-04 |
| [#32541](https://github.com/sgl-project/sglang/pull/32541) | [Kimi] Support kimi-k3 | @hnyls2002 | open | 2026-07-27 | 2026-08-04 |
| [#33309](https://github.com/sgl-project/sglang/pull/33309) | [PD] Skip cached-prefix early-send when the decode requires ... | @ZhaiFeiyue | draft | 2026-08-03 | 2026-08-04 |
| [#33290](https://github.com/sgl-project/sglang/pull/33290) | [AMD]Fuse Q/K L2 normalization in Qwen3.5 GDN  | @IzacharyI | open | 2026-08-02 | 2026-08-04 |
| [#32997](https://github.com/sgl-project/sglang/pull/32997) | [PD] mori: support DCP KV relayout in the moriio transfer ba... | @ZhaiFeiyue | draft | 2026-07-31 | 2026-08-04 |
| [#29723](https://github.com/sgl-project/sglang/pull/29723) | [AMD] Add fused all-reduce RMSNorm per-token FP8/MXFP4 quant | @mqhc2020 | open | 2026-06-30 | 2026-08-04 |
| [#33462](https://github.com/sgl-project/sglang/pull/33462) | [AMD] Bump mori to latest in sglang | @Lzy17 | open | 2026-08-04 | 2026-08-04 |
| [#33399](https://github.com/sgl-project/sglang/pull/33399) | [AMD] [Fix] Enable aiter hd256 FP8 prefill FMHA on gfx950 | @yichiche | merged | 2026-08-03 | 2026-08-04 |
| [#33368](https://github.com/sgl-project/sglang/pull/33368) | [FIX] [benchmark] Fix flush_cache failure after warmup by wa... | @silencejade | closed | 2026-08-03 | 2026-08-04 |
| [#30993](https://github.com/sgl-project/sglang/pull/30993) | [Feature] Enable a16w4 MXFP4 MoE on the aiter fp4_bf16 FlyDS... | @yichiche | draft | 2026-07-13 | 2026-08-04 |
| [#27790](https://github.com/sgl-project/sglang/pull/27790) | [Intel GPU] DeepSeek V4 4/N: use sgl-kernel implementation o... | @polisettyvarma | open | 2026-06-10 | 2026-08-04 |
| [#31105](https://github.com/sgl-project/sglang/pull/31105) | [ROCm/gfx95] Fix fp8 per-channel attention for Kimi-K2.7-cod... | @Emmanuel0612 | open | 2026-07-14 | 2026-08-04 |
| [#33506](https://github.com/sgl-project/sglang/pull/33506) | [AMD] Fix Triton cache flooding in DSA and aiter backend (_g... | @amd-mvarjoka | open | 2026-08-04 | 2026-08-04 |
| [#32754](https://github.com/sgl-project/sglang/pull/32754) | [AMD] Enable gfx1250 Support | @akao-amd | open | 2026-07-29 | 2026-08-04 |
| [#28040](https://github.com/sgl-project/sglang/pull/28040) | [Intel GPU] DeepSeek V4 8/N: use sgl-kernel implementation o... | @polisettyvarma | open | 2026-06-12 | 2026-08-04 |
| [#30350](https://github.com/sgl-project/sglang/pull/30350) | Add HiCache JIT test and benchmark for ROCm/HIP CI support | @Emmanuel0612 | open | 2026-07-07 | 2026-08-04 |
| [#33313](https://github.com/sgl-project/sglang/pull/33313) | [AMD] DeepSeek-V4: route decode wo_a bf16 batched matmul to ... | @karverma-amd | open | 2026-08-03 | 2026-08-04 |
| [#33519](https://github.com/sgl-project/sglang/pull/33519) | [DO NOT MERGE] Amd test pr32754 0804 | @yctseng0211 | draft | 2026-08-04 | 2026-08-04 |
| [#33494](https://github.com/sgl-project/sglang/pull/33494) | [CI] Install Kimi-K3 FlashInfer assets on B300 | @Fridge003 | merged | 2026-08-04 | 2026-08-04 |
| [#32077](https://github.com/sgl-project/sglang/pull/32077) | [AMD] fix rocm 7.15 image release | @yctseng0211 | closed | 2026-07-22 | 2026-08-04 |
| [#33402](https://github.com/sgl-project/sglang/pull/33402) | [AMD] Enable block-fp8 + quick INT4 all-reduce in MiniMax-M3... | @yctseng0211 | merged | 2026-08-03 | 2026-08-04 |
| [#32966](https://github.com/sgl-project/sglang/pull/32966) | [AMD][DI][CI] MI355X disagg nightly: exclude mia1-p02-g53 an... | @michaelzhang-ai | closed | 2026-07-30 | 2026-08-04 |
| [#31899](https://github.com/sgl-project/sglang/pull/31899) | [AMD] Add msgpack to ROCm diffusion deps (fix multimodal-gen... | @kangwangamd | open | 2026-07-21 | 2026-08-04 |
| [#32746](https://github.com/sgl-project/sglang/pull/32746) | [Fix][AMD] MoRI EP: drop record_stream in TBO dispatch/combi... | @TianDi101 | open | 2026-07-29 | 2026-08-04 |
| [#32994](https://github.com/sgl-project/sglang/pull/32994) | Add flashinfer rmsnorm + quant fusion support SM90, SM100, S... | @DevashishLal-CB | merged | 2026-07-31 | 2026-08-04 |
| [#32767](https://github.com/sgl-project/sglang/pull/32767) | [AMD] Add moonmath MLA attention backend with A16W8 decode f... | @tarik-sarac | open | 2026-07-29 | 2026-08-04 |
| [#28932](https://github.com/sgl-project/sglang/pull/28932) | [AMD] Add dense-FP8 for MXFP4 checkpoints with fused silu, m... | @mqhc2020 | open | 2026-06-22 | 2026-08-04 |
| [#32922](https://github.com/sgl-project/sglang/pull/32922) | [AMD] Fix silent greedy fallback in speculative decoding ver... | @Jacob0226 | open | 2026-07-30 | 2026-08-04 |
| [#28049](https://github.com/sgl-project/sglang/pull/28049) | [AMD] Add LiteAttention-ROCM backend | @nonam3e | open | 2026-06-12 | 2026-08-04 |
| [#32759](https://github.com/sgl-project/sglang/pull/32759) | [AMD] Restore SWA reprefill-tail on UnifiedRadixCache when H... | @amd-danli103 | open | 2026-07-29 | 2026-08-04 |
| [#33465](https://github.com/sgl-project/sglang/pull/33465) | [Kimi-K3][NPU]  Support Kimi-K3 on NPU | @McZyWu | open | 2026-08-04 | 2026-08-04 |
| [#33480](https://github.com/sgl-project/sglang/pull/33480) | [AMD] Support prefill context parallel two batch overlap for... | @At1a8 | draft | 2026-08-04 | 2026-08-04 |
| [#31323](https://github.com/sgl-project/sglang/pull/31323) | [AMD] [GLM5] Fuse shared-expert append into aiter grouped-to... | @Jacob0226 | open | 2026-07-15 | 2026-08-04 |
| [#32323](https://github.com/sgl-project/sglang/pull/32323) | docs(cookbook): fill Qwen3.5 speed benchmarks (B200 + B300) | @dougyster | open | 2026-07-24 | 2026-08-04 |
| [#33068](https://github.com/sgl-project/sglang/pull/33068) | amd: fuse quantized in_proj layers in Qwen3.5 | @mqhc2020 | draft | 2026-07-31 | 2026-08-04 |
| [#32796](https://github.com/sgl-project/sglang/pull/32796) | [AMD] Kimi K3 DCP | @billishyahao | draft | 2026-07-29 | 2026-08-04 |
| [#30345](https://github.com/sgl-project/sglang/pull/30345) | [Intel][XPU][LoRA] Enable LoRA on Intel XPU | @AnuSajikumar6264 | open | 2026-07-07 | 2026-08-04 |
| [#31324](https://github.com/sgl-project/sglang/pull/31324) | [AMD] [GLM5] Skip DSA decode indexer when kv_len <= index_to... | @Jacob0226 | open | 2026-07-15 | 2026-08-04 |
| [#33075](https://github.com/sgl-project/sglang/pull/33075) | [Fix] Allow flashinfer_sparse_mla DSA backend for HiSparse o... | @gongwei1027 | open | 2026-07-31 | 2026-08-04 |
| [#24503](https://github.com/sgl-project/sglang/pull/24503) | [VLM] video_decoder: make pin_memory() best-effort | @mclenithan | open | 2026-05-06 | 2026-08-04 |
| [#33495](https://github.com/sgl-project/sglang/pull/33495) | docs: update cookbook for xpu | @nzr-niu | draft | 2026-08-04 | 2026-08-04 |
| [#33305](https://github.com/sgl-project/sglang/pull/33305) | [AMD] Enable MI455X (gfx1250) CI with GPT-OSS-120B MXFP4 nig... | @Jiminator | closed | 2026-08-03 | 2026-08-04 |
| [#32503](https://github.com/sgl-project/sglang/pull/32503) | [XPU] Enable HiCache support on Intel XPU | @kpjeeja | open | 2026-07-27 | 2026-08-04 |
| [#30052](https://github.com/sgl-project/sglang/pull/30052) | [AMD][DI][CI] 4/N Add mooncake KV-transfer legs to MI355X di... | @Lzy17 | draft | 2026-07-03 | 2026-08-04 |
| [#33484](https://github.com/sgl-project/sglang/pull/33484) | perf(hisparse): fuse the DSv4 value and scale swap-in copy o... | @AMD-yanfeiwang | open | 2026-08-04 | 2026-08-04 |
| [#33085](https://github.com/sgl-project/sglang/pull/33085) | perf(hisparse): 128-bit non-temporal swap-in copy on ROCm | @AMD-yanfeiwang | open | 2026-07-31 | 2026-08-04 |
| [#31500](https://github.com/sgl-project/sglang/pull/31500) | [AMD][DI][CI] 5/N Add DSV4 wide-EP16 4-node 2P1D nightly rec... | @Lzy17 | merged | 2026-07-16 | 2026-08-04 |
| [#29677](https://github.com/sgl-project/sglang/pull/29677) | [AMD] perf: compact Triton extend-attention for ragged prefi... | @valechen | open | 2026-06-29 | 2026-08-04 |
| [#28666](https://github.com/sgl-project/sglang/pull/28666) | [AMD] Fuse shared_expert_gate GEMV into the MoE append kerne... | @yichiche | open | 2026-06-18 | 2026-08-04 |
| [#28655](https://github.com/sgl-project/sglang/pull/28655) | [AMD][AITER-Wait] GDN linear out proj fusion | @mqhc2020 | open | 2026-06-18 | 2026-08-04 |
| [#30519](https://github.com/sgl-project/sglang/pull/30519) | [AMD] [GLM5] fp8 MLA absorbed bmm for GLM-5.2 on gfx950 | @Jacob0226 | open | 2026-07-08 | 2026-08-04 |
| [#30762](https://github.com/sgl-project/sglang/pull/30762) | fix(hicache/umbp): support DeepSeek-V4 hybrid HostPoolGroup ... | @AMD-yanfeiwang | open | 2026-07-10 | 2026-08-04 |
| [#29328](https://github.com/sgl-project/sglang/pull/29328) | [AMD][Quantization] Online MXFP4 quantization 4/N - NVFP4 to... | @ColinZ22 | open | 2026-06-25 | 2026-08-04 |
| [#33113](https://github.com/sgl-project/sglang/pull/33113) | [AMD] Add AITER HIP backend for packed GDN decode on gfx950 | @zijiecode | draft | 2026-07-31 | 2026-08-04 |
| [#33333](https://github.com/sgl-project/sglang/pull/33333) | [AMD][DI][CI] 6/N Add Kimi-K2.6 MXFP4 wide-EP16 2P1D nightly... | @Lzy17 | merged | 2026-08-03 | 2026-08-04 |
| [#30808](https://github.com/sgl-project/sglang/pull/30808) | [AMD] [GLM5] Enable dense-MHA short-context prefill fallback... | @Raiden-Makoto | open | 2026-07-10 | 2026-08-04 |
| [#33374](https://github.com/sgl-project/sglang/pull/33374) | [AMD][DI][CI] Auto-mount  latest host ionic/ibverbs userspac... | @Lzy17 | merged | 2026-08-03 | 2026-08-04 |
| [#31483](https://github.com/sgl-project/sglang/pull/31483) | [AMD] ci: run vetted nested multimodal_gen unit tests on AMD | @michaelzhang-ai | open | 2026-07-16 | 2026-08-04 |
| [#32227](https://github.com/sgl-project/sglang/pull/32227) | [XPU] Fix NemotronH (hybrid mamba2) launch on --device xpu | @jmunetong | open | 2026-07-23 | 2026-08-03 |
| [#30206](https://github.com/sgl-project/sglang/pull/30206) | fix(server): capture legal multi-request prefill CUDA graph ... | @nvpohanh | merged | 2026-07-06 | 2026-08-03 |
| [#33320](https://github.com/sgl-project/sglang/pull/33320) | [XPU] Add CustomOp.forward_xpu fallback to forward_native | @dayanandav | open | 2026-08-03 | 2026-08-03 |
| [#30984](https://github.com/sgl-project/sglang/pull/30984) | [AMD] [Docker] Upgrade Python 3.12 + torch 2.11 + triton 3.6... | @chuyeh | open | 2026-07-13 | 2026-08-03 |
| [#32046](https://github.com/sgl-project/sglang/pull/32046) | [AMD]Qwen3.5 integration gfx950 fmha fp8 hd256 | @amd-oshkarav | merged | 2026-07-22 | 2026-08-03 |
| [#32190](https://github.com/sgl-project/sglang/pull/32190) | [AMD] MiniMax-M3: run MoE via aiter FlyDSL native MXFP8 SwiG... | @yctseng0211 | open | 2026-07-23 | 2026-08-03 |
| [#31713](https://github.com/sgl-project/sglang/pull/31713) | feat: Add DeepSeek V4 SWA recompute | @jellysnack | open | 2026-07-19 | 2026-08-03 |
| [#33057](https://github.com/sgl-project/sglang/pull/33057) | fix(xpu): enable compressed-tensors FP8 W8A8 on XPU (RedHatA... | @vshekhawat-hlab | open | 2026-07-31 | 2026-08-03 |
| [#33195](https://github.com/sgl-project/sglang/pull/33195) | [AMD] Fix JIT compile failure in sgl_kernel/warp.cuh | @At1a8 | merged | 2026-08-01 | 2026-08-03 |
| [#32910](https://github.com/sgl-project/sglang/pull/32910) | [DeepSeek-V4] Fix nvcc 13 crash building the topk_v2 kernel | @guptaishaan | merged | 2026-07-30 | 2026-08-03 |
| [#31741](https://github.com/sgl-project/sglang/pull/31741) | [AMD] Enable mamba JIT transfer kernel on ROCm (fix transfer... | @kangwangamd | merged | 2026-07-20 | 2026-08-02 |
| [#31727](https://github.com/sgl-project/sglang/pull/31727) | [AMD] Fix DeepSeek-V4 fused-RMS FP8 scale metadata on gfx950 | @hdt98 | merged | 2026-07-19 | 2026-08-02 |
| [#31948](https://github.com/sgl-project/sglang/pull/31948) | [NPU] Enable automatic ascend_attn selection for vision atte... | @ltaodream | merged | 2026-07-21 | 2026-08-02 |
| [#32315](https://github.com/sgl-project/sglang/pull/32315) | [AMD] Speed up DSV4 MoE weight loading from mmap views | @bingxche | merged | 2026-07-24 | 2026-08-02 |
| [#31450](https://github.com/sgl-project/sglang/pull/31450) | [AMD] Fix DeepSeek-V4 FP4 MoE expert memory bloat | @1am9trash | merged | 2026-07-16 | 2026-08-02 |
| [#31221](https://github.com/sgl-project/sglang/pull/31221) | [AMD] Derive AITER verify tokens-per-req from input shape | @jinzhenfan | merged | 2026-07-14 | 2026-08-01 |
| [#32890](https://github.com/sgl-project/sglang/pull/32890) | feat(kernels): port standalone Kimi K3 kernels | @BBuf | merged | 2026-07-30 | 2026-08-01 |
| [#33090](https://github.com/sgl-project/sglang/pull/33090) | [AMD][Fix] Restore aiter-padded MoE weight dims for serializ... | @yichiche | merged | 2026-07-31 | 2026-08-01 |
| [#30971](https://github.com/sgl-project/sglang/pull/30971) | [minimax-m3] fp8 attention GEMMs on SM100 (fp8_e4m3 KV + trt... | @alumkal | merged | 2026-07-13 | 2026-08-01 |
| [#32862](https://github.com/sgl-project/sglang/pull/32862) | [AMD] Pin mem_fraction_static for the piecewise CUDA graph 1... | @yctseng0211 | merged | 2026-07-30 | 2026-07-31 |
| [#33083](https://github.com/sgl-project/sglang/pull/33083) | [Docs] Add DeepSeek-V4 Flash Official (0731) recipe | @JustinTong0323 | merged | 2026-07-31 | 2026-07-31 |
| [#32953](https://github.com/sgl-project/sglang/pull/32953) | [Fix] Restore online MXFP8 quantization for linear layers | @b8zhong | merged | 2026-07-30 | 2026-07-31 |
| [#31854](https://github.com/sgl-project/sglang/pull/31854) | perf(diffusion): CUDA-IPC zero-staging all-to-all for 2-rank... | @mickqian | merged | 2026-07-21 | 2026-07-31 |
| [#32641](https://github.com/sgl-project/sglang/pull/32641) | [AMD] Add triton topk renorm kernel and enable renorm CI uni... | @1am9trash | merged | 2026-07-28 | 2026-07-31 |
| [#31220](https://github.com/sgl-project/sglang/pull/31220) | Qwen3.5-MoE: support modelopt_fp4 checkpoints that quantize ... | @vroomfondel | merged | 2026-07-14 | 2026-07-30 |
| [#32939](https://github.com/sgl-project/sglang/pull/32939) | [AMD] Update ROCm AITER pin to d9e5ef7 | @bingxche | merged | 2026-07-30 | 2026-07-30 |
| [#27614](https://github.com/sgl-project/sglang/pull/27614) | Fix LFM 2 tool parser. | @vincentzed | merged | 2026-06-09 | 2026-07-30 |
| [#32230](https://github.com/sgl-project/sglang/pull/32230) | [AMD] MiniMax-M3: opt-in custom/quick all-reduce on ROCm | @yctseng0211 | merged | 2026-07-23 | 2026-07-30 |
| [#32036](https://github.com/sgl-project/sglang/pull/32036) | [AMD] Minimax-M3 : unblock mxfp8 block convert on gfx950 | @yctseng0211 | merged | 2026-07-22 | 2026-07-30 |
| [#31925](https://github.com/sgl-project/sglang/pull/31925) | [AMD] Skip test_update_weights_from_disk on ROCm pending rel... | @kangwangamd | merged | 2026-07-21 | 2026-07-30 |
| [#32879](https://github.com/sgl-project/sglang/pull/32879) | [AMD] Revert ROCm AITER pin to 9127c94 | @bingxche | merged | 2026-07-30 | 2026-07-30 |
| [#32760](https://github.com/sgl-project/sglang/pull/32760) | docker: add Kimi K3 images | @Fridge003 | merged | 2026-07-29 | 2026-07-30 |
| [#31409](https://github.com/sgl-project/sglang/pull/31409) | [AMD] Replace MI325 with MI300 CI Runners | @bingxche | merged | 2026-07-16 | 2026-07-30 |
| [#32022](https://github.com/sgl-project/sglang/pull/32022) | fix(qwen3.5): restrict MoE weights to local PP layers | @ICENacl | merged | 2026-07-22 | 2026-07-29 |
| [#27089](https://github.com/sgl-project/sglang/pull/27089) | Disable extra NCCL CUDA event synchronization with symm mem | @nvcastet | merged | 2026-06-02 | 2026-07-29 |
| [#31563](https://github.com/sgl-project/sglang/pull/31563) | fix mqa preshuffle layout issue for deepseek v4 | @13524182838 | merged | 2026-07-17 | 2026-07-29 |
| [#31747](https://github.com/sgl-project/sglang/pull/31747) | [AMD] DSv4: bring HIP compress-state pool into the memory_sa... | @XinyuJiangCMU | merged | 2026-07-20 | 2026-07-29 |
| [#32648](https://github.com/sgl-project/sglang/pull/32648) | [Kernel] Move sgl-kernel under sglang.kernels.aot | @BBuf | merged | 2026-07-28 | 2026-07-29 |
| [#31181](https://github.com/sgl-project/sglang/pull/31181) | [Hicache][1/2]Support Mamba branching in Unified Radix Cache... | @Chen-0210 | merged | 2026-07-14 | 2026-07-29 |
| [#32613](https://github.com/sgl-project/sglang/pull/32613) | [AMD] add Gemma3RMSNorm.forward_hip to unbreak ROCm | @yctseng0211 | merged | 2026-07-28 | 2026-07-29 |
| [#31931](https://github.com/sgl-project/sglang/pull/31931) | [NPU] Optimize DeepSeek-V4 performance | @Talantan1102 | merged | 2026-07-21 | 2026-07-28 |
| [#32643](https://github.com/sgl-project/sglang/pull/32643) | [AMD] Add Kimi K3 ROCm 7.2 nightly image | @yctseng0211 | merged | 2026-07-28 | 2026-07-28 |
| [#32636](https://github.com/sgl-project/sglang/pull/32636) | [Kernel] Remove unused implementations and stale registry en... | @BBuf | merged | 2026-07-28 | 2026-07-28 |
| [#32621](https://github.com/sgl-project/sglang/pull/32621) | [AMD] Fix top_k/p sampling issue on AMD code path | @1am9trash | merged | 2026-07-28 | 2026-07-28 |
| [#30742](https://github.com/sgl-project/sglang/pull/30742) | [Fix] Make RowParallelLinear k-size tuple-aware for FP8 | @XinyuJiangCMU | merged | 2026-07-10 | 2026-07-28 |
| [#32043](https://github.com/sgl-project/sglang/pull/32043) | [AMD] GFX1250 ROCm bringup: infra, build, kernels and models... | @HaiShaw | merged | 2026-07-22 | 2026-07-25 |
| [#31346](https://github.com/sgl-project/sglang/pull/31346) | fix(dsa): fail fast on fp8_e4m3 KV with tilelang DSA backend... | @mosya415 | merged | 2026-07-15 | 2026-07-24 |
| [#21511](https://github.com/sgl-project/sglang/pull/21511) | [AMD] Enable FP8 KV cache and FP8 attention kernel for NSA o... | @1am9trash | merged | 2026-03-27 | 2026-07-23 |
| [#24651](https://github.com/sgl-project/sglang/pull/24651) | [AMD] Add fused all-reduce RMSNorm per-group quant for Qwen3... | @hubertlu-tw | merged | 2026-05-08 | 2026-07-22 |
| [#31838](https://github.com/sgl-project/sglang/pull/31838) | Fix pad-row top-k masking with custom_routing_function under... | @hanming-lu | merged | 2026-07-20 | 2026-07-21 |
| [#28291](https://github.com/sgl-project/sglang/pull/28291) | [AMD][MXFP4] Reland "Online MXFP4 quantization 2/N - FP8 to ... | @fxmarty-amd | merged | 2026-06-15 | 2026-07-21 |
| [#30273](https://github.com/sgl-project/sglang/pull/30273) | [XPU] Enable breakable prefill CUDA graph on XPU | @rahulvijayaraghavan | merged | 2026-07-06 | 2026-07-21 |
| [#31050](https://github.com/sgl-project/sglang/pull/31050) | [FullCG] Preserve attention LSE through the custom-op bounda... | @paulzhang-tm | merged | 2026-07-13 | 2026-07-21 |
| [#31701](https://github.com/sgl-project/sglang/pull/31701) | [NPU] Fix vit graph tnd cu seqlens | @JinyanYi | merged | 2026-07-19 | 2026-07-20 |
| [#14194](https://github.com/sgl-project/sglang/pull/14194) | [feature] implement dcp for deepseek_v2 | @staugust | merged | 2025-12-01 | 2026-07-20 |
| [#31263](https://github.com/sgl-project/sglang/pull/31263) | [diffusion] post_training: run weight update under torch.inf... | @kangwangamd | merged | 2026-07-15 | 2026-07-20 |
| [#31688](https://github.com/sgl-project/sglang/pull/31688) | Fix ROCm fused KV and KDA paths | @merrymercy | merged | 2026-07-19 | 2026-07-19 |
| [#30838](https://github.com/sgl-project/sglang/pull/30838) | [JIT] Refactor dtype traits into DTypeTrait and unify warp r... | @DarkSharpness | merged | 2026-07-11 | 2026-07-19 |
| [#31675](https://github.com/sgl-project/sglang/pull/31675) | [AMD] Fix DeepSeek MLA prefill shape mismatch on HIP eager f... | @yctseng0211 | merged | 2026-07-18 | 2026-07-19 |
| [#24013](https://github.com/sgl-project/sglang/pull/24013) | [VLM] Batch cross-request ViT encoding and reuse attention m... | @Alisehen | merged | 2026-04-29 | 2026-07-18 |
| [#30688](https://github.com/sgl-project/sglang/pull/30688) | Fix MoE functionality on RDNA (gfx1100/gfx1201) via Python-l... | @nemanjaudovic | merged | 2026-07-09 | 2026-07-17 |
| [#30506](https://github.com/sgl-project/sglang/pull/30506) | [AMD] Disable DSA fused top-k v2 on ROCm for GLM-5.x / DeepS... | @fanxingran | merged | 2026-07-08 | 2026-07-17 |

## triton (Upstream Watch)
Repo: `triton-lang/triton` | Last collected: 2026-08-04T10:25:24Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#11040](https://github.com/triton-lang/triton/pull/11040) | [Proton][AMD] Add ROCProfiler PC sampling with source attrib... | @willghatch | open | 2026-07-24 | 2026-08-03 |
| [#10708](https://github.com/triton-lang/triton/pull/10708) | [AMD] Add gfx1250 Gluon stream bandwidth example | @adityakankariya | open | 2026-06-24 | 2026-08-03 |
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
| [#10886](https://github.com/triton-lang/triton/pull/10886) | [AMD] Emit actionable errors when a direct-to-LDS copy canno... | @vmalepati1 | open | 2026-07-14 | 2026-07-29 |
| [#11019](https://github.com/triton-lang/triton/pull/11019) | [AMD] Fix buffer atomic exchange intrinsic | @umangyadav | merged | 2026-07-22 | 2026-07-29 |
| [#11092](https://github.com/triton-lang/triton/pull/11092) | [AMD][gfx1250] Add noalias_args pointer contract | @jerryyin | draft | 2026-07-29 | 2026-07-29 |
| [#11055](https://github.com/triton-lang/triton/pull/11055) | [AMD] Guard HIP launcher against kernel arg/annotation count... | @zihaomu | open | 2026-07-27 | 2026-07-29 |
| [#11081](https://github.com/triton-lang/triton/pull/11081) | [AMD] Fix swapped structured binding in emitFence for buffer... | @yiqian1 | merged | 2026-07-28 | 2026-07-29 |
| [#11077](https://github.com/triton-lang/triton/pull/11077) | [AMD][BACKEND] Fix rank reducing TDM for INNER_DIM > 1024byt... | @AlexAUT | merged | 2026-07-28 | 2026-07-29 |
| [#10878](https://github.com/triton-lang/triton/pull/10878) | [AMD] Add RDNA4m target | @ptrojahn | merged | 2026-07-14 | 2026-07-29 |
| [#11078](https://github.com/triton-lang/triton/pull/11078) | [AMD][BACKEND] Split multicast groups into smaller subgroups... | @AlexAUT | merged | 2026-07-28 | 2026-07-29 |
| [#11068](https://github.com/triton-lang/triton/pull/11068) | [AMD] Propagate discardable attributes on the small-tensor p... | @pabloantoniom | draft | 2026-07-28 | 2026-07-28 |
| [#11018](https://github.com/triton-lang/triton/pull/11018) | [AMD] Emit buffer atomic min/max only for the supported data... | @umangyadav | open | 2026-07-22 | 2026-07-28 |
| [#11009](https://github.com/triton-lang/triton/pull/11009) | [AMD] rocprofsdk finalization fix for proton | @ZelboK | merged | 2026-07-22 | 2026-07-28 |
| [#11028](https://github.com/triton-lang/triton/pull/11028) | [AMD] TheRock support | @ZelboK | open | 2026-07-23 | 2026-07-28 |
| [#11012](https://github.com/triton-lang/triton/pull/11012) | [AMD][DRAFT] proton rocprofsdk error 16 pytest fix | @ZelboK | draft | 2026-07-22 | 2026-07-27 |
| [#10020](https://github.com/triton-lang/triton/pull/10020) | [AMD] PC Sampling, wave stall reasonings | @ZelboK | open | 2026-04-13 | 2026-07-24 |
| [#10813](https://github.com/triton-lang/triton/pull/10813) | [AMD] gfx1250 proton clock instructions | @ZelboK | merged | 2026-07-07 | 2026-07-22 |
| [#10885](https://github.com/triton-lang/triton/pull/10885) | [AMD][DRAFT] test out if still broken  | @ZelboK | open | 2026-07-14 | 2026-07-21 |
| [#10979](https://github.com/triton-lang/triton/pull/10979) | [AMD][GLUON] Allow compact scales for fp `scaled_upcast' | @AlexAUT | merged | 2026-07-20 | 2026-07-20 |
| [#10978](https://github.com/triton-lang/triton/pull/10978) | [AMD] Fix serval gfx1250 tests | @AlexAUT | merged | 2026-07-20 | 2026-07-20 |
| [#10955](https://github.com/triton-lang/triton/pull/10955) | [AMD] Optimize partitioned shared-memory base-pointer select... | @plognjen | merged | 2026-07-19 | 2026-07-19 |
| [#10871](https://github.com/triton-lang/triton/pull/10871) | [AMD] emulate descriptor reduce on GFX1250 | @zwu-2025 | draft | 2026-07-14 | 2026-07-19 |
| [#10943](https://github.com/triton-lang/triton/pull/10943) | [AMD][CI] Switch back to normal gfx950 ci pool | @antiagainst | merged | 2026-07-18 | 2026-07-18 |
| [#10928](https://github.com/triton-lang/triton/pull/10928) | [AMD][BACKEND][GFX9] Support blocked/shared order mismatch f... | @AlexAUT | merged | 2026-07-17 | 2026-07-17 |
| [#10913](https://github.com/triton-lang/triton/pull/10913) | [AMD]Support TDM Fusion and Split for MXFP GEMM Kernel on GF... | @knwng | merged | 2026-07-16 | 2026-07-17 |
| [#10635](https://github.com/triton-lang/triton/pull/10635) | [AMD] Fix direct-to-LDS staging for undersized tiles | @justinrosner | merged | 2026-06-16 | 2026-07-17 |
| [#10911](https://github.com/triton-lang/triton/pull/10911) | [AMD]Enable Partition Conflicts Tests for MXFP GEMM on GFX12... | @knwng | merged | 2026-07-16 | 2026-07-17 |
| [#10916](https://github.com/triton-lang/triton/pull/10916) | [AMD][CI] Update proton job runs-on pool | @antiagainst | merged | 2026-07-17 | 2026-07-17 |
| [#10912](https://github.com/triton-lang/triton/pull/10912) | [AMD]Add Benchmark Utility to MoE and MXFP GEMM Kernels for ... | @knwng | merged | 2026-07-16 | 2026-07-17 |
| [#10759](https://github.com/triton-lang/triton/pull/10759) | [AMD] Form masked regions for equivalent masked loads/stores | @efric | open | 2026-06-30 | 2026-07-16 |
| [#10483](https://github.com/triton-lang/triton/pull/10483) | [AMD] Prove buffer-load contiguity along LinearLayout regist... | @panditsa | draft | 2026-06-04 | 2026-07-15 |
| [#10870](https://github.com/triton-lang/triton/pull/10870) | [AMD][gfx1250] Error out for non-zero padding descriptor | @zwu-2025 | merged | 2026-07-14 | 2026-07-15 |
| [#10564](https://github.com/triton-lang/triton/pull/10564) | [AMD] Pipeline TDM descriptor stores and scatters in loops | @jerryyin | merged | 2026-06-10 | 2026-07-15 |
| [#10628](https://github.com/triton-lang/triton/pull/10628) | [Gluon][AMD][gfx1250] Add explicit fused TDM copy ops | @jungpark-mlir | merged | 2026-06-16 | 2026-07-14 |
| [#10328](https://github.com/triton-lang/triton/pull/10328) | [AMD] Preserve assumptions in FoldTrueCmpIOp | @Hardcode84 | open | 2026-05-15 | 2026-07-08 |
| [#10733](https://github.com/triton-lang/triton/pull/10733) | [AMD] Fix batched WMMA scale layout | @alefimov-amd | open | 2026-06-26 | 2026-06-26 |
| [#10710](https://github.com/triton-lang/triton/pull/10710) | [AMD] Adding lds prefetch pass to amd compiler path | @guacamoleo | open | 2026-06-24 | 2026-06-25 |
| [#10701](https://github.com/triton-lang/triton/pull/10701) | [AMD] Materialize fat pointers for buffer ops in canonicaliz... | @vmalepati1 | open | 2026-06-22 | 2026-06-23 |
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

## migraphx (Active Development)
Repo: `ROCm/AMDMIGraphX` | Last collected: 2026-08-04T10:25:27Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4616](https://github.com/ROCm/AMDMIGraphX/pull/4616) | [AIMIGRAPHX-544] Parallel compilation for dynamic graphs | @shivadbhavsar | draft | 2026-02-17 | 2026-08-04 |
| [#4752](https://github.com/ROCm/AMDMIGraphX/pull/4752) | Add std C++ components to rocm namespace and add unit tests | @pfultz2 | open | 2026-04-08 | 2026-08-04 |
| [#5103](https://github.com/ROCm/AMDMIGraphX/pull/5103) | Loop subgraph support | @weizhu12-amd | draft | 2026-07-30 | 2026-08-03 |
| [#5104](https://github.com/ROCm/AMDMIGraphX/pull/5104) | skip elimination when reshape_lazy | @weizhu12-amd | draft | 2026-07-30 | 2026-08-03 |
| [#4606](https://github.com/ROCm/AMDMIGraphX/pull/4606) | Refactor rnn ops to op builders | @pfultz2 | open | 2026-02-12 | 2026-08-03 |
| [#5108](https://github.com/ROCm/AMDMIGraphX/pull/5108) | Avoid the output copy when the result is an aliased view | @pfultz2 | open | 2026-07-31 | 2026-08-03 |
| [#4770](https://github.com/ROCm/AMDMIGraphX/pull/4770) | Adding compilation mode | @pnikolic-amd | open | 2026-04-09 | 2026-08-03 |
| [#5088](https://github.com/ROCm/AMDMIGraphX/pull/5088) | Refactor slice op for symbolic bounds and explicit input mod... | @CharlieL7 | open | 2026-07-22 | 2026-08-03 |
| [#5102](https://github.com/ROCm/AMDMIGraphX/pull/5102) | Refactor to use a device_description instead of using the hi... | @pfultz2 | open | 2026-07-29 | 2026-08-03 |
| [#5105](https://github.com/ROCm/AMDMIGraphX/pull/5105) | Lower reshape after  eliminate_contiguous in a single pass | @ivarusic-amd | open | 2026-07-30 | 2026-08-03 |
| [#5048](https://github.com/ROCm/AMDMIGraphX/pull/5048) | Preserve shape ops when removing QDQ pairs | @ikalinic | open | 2026-07-08 | 2026-08-03 |
| [#5107](https://github.com/ROCm/AMDMIGraphX/pull/5107) | Onnxruntime Weekly Sync 2026-07-31 | @github-actions[bot] | open | 2026-07-31 | 2026-08-01 |
| [#4956](https://github.com/ROCm/AMDMIGraphX/pull/4956) | Add support for HipGraph | @pfultz2 | open | 2026-06-11 | 2026-08-01 |
| [#5100](https://github.com/ROCm/AMDMIGraphX/pull/5100) | Add binary cache | @pfultz2 | draft | 2026-07-29 | 2026-08-01 |
| [#5085](https://github.com/ROCm/AMDMIGraphX/pull/5085) | [AIMIGRAPHX-1215] add runtime symbol resolution op | @shivadbhavsar | open | 2026-07-21 | 2026-07-31 |
| [#4811](https://github.com/ROCm/AMDMIGraphX/pull/4811) | Rewrite skinny gemms to mul+reduce_sum | @pfultz2 | open | 2026-04-22 | 2026-07-31 |
| [#4952](https://github.com/ROCm/AMDMIGraphX/pull/4952) | Bump CI to TheRock 7.14 | @causten | open | 2026-06-10 | 2026-07-31 |
| [#5028](https://github.com/ROCm/AMDMIGraphX/pull/5028) | split_single_dyn_dim: add bucket_by_optimals to cut dyn-shap... | @chun-wan | open | 2026-07-01 | 2026-07-31 |
| [#4924](https://github.com/ROCm/AMDMIGraphX/pull/4924) | concat: treat fully-unconstrained dynamic dim as a wildcard | @chun-wan | open | 2026-05-30 | 2026-07-31 |
| [#5077](https://github.com/ROCm/AMDMIGraphX/pull/5077) | Proto data dependent symbolics | @CharlieL7 | draft | 2026-07-17 | 2026-07-31 |
| [#4957](https://github.com/ROCm/AMDMIGraphX/pull/4957) | [In Progress] ONNX weight replacement | @kahmed10 | draft | 2026-06-12 | 2026-07-30 |
| [#5067](https://github.com/ROCm/AMDMIGraphX/pull/5067) | [AIMIGRAPHX-1100] Add no-rebuild callback for verify | @eddieliao | draft | 2026-07-15 | 2026-07-30 |
| [#5092](https://github.com/ROCm/AMDMIGraphX/pull/5092) | Add fp32 winograd for gfx12 | @pfultz2 | open | 2026-07-23 | 2026-07-30 |
| [#5075](https://github.com/ROCm/AMDMIGraphX/pull/5075) | rebias uint8 to int8 on models with mixed datatypes | @kahmed10 | draft | 2026-07-17 | 2026-07-28 |
| [#5096](https://github.com/ROCm/AMDMIGraphX/pull/5096) | [AIRADSW-732] Fix reshape layout propagation | @ivarusic-amd | open | 2026-07-27 | 2026-07-28 |
| [#5020](https://github.com/ROCm/AMDMIGraphX/pull/5020) | Add opt-in parallel finalization of independent operations | @aditya-dl | draft | 2026-06-29 | 2026-07-27 |
| [#5097](https://github.com/ROCm/AMDMIGraphX/pull/5097) | Bump gitpython from 3.1.52 to 3.1.54 in /docs/sphinx | @dependabot[bot] | open | 2026-07-27 | 2026-07-27 |
| [#5039](https://github.com/ROCm/AMDMIGraphX/pull/5039) | Add opt-in sharing of identical weight literals across progr... | @aditya-dl | draft | 2026-07-06 | 2026-07-27 |
| [#4809](https://github.com/ROCm/AMDMIGraphX/pull/4809) | Use fp32 FMA in channelwise conv | @klin2024 | open | 2026-04-21 | 2026-07-24 |
| [#5001](https://github.com/ROCm/AMDMIGraphX/pull/5001) | Nontemporal loads | @pfultz2 | draft | 2026-06-19 | 2026-07-24 |
| [#5032](https://github.com/ROCm/AMDMIGraphX/pull/5032) | Dynamic concat gpu support | @turneram | open | 2026-07-02 | 2026-07-23 |
| [#4835](https://github.com/ROCm/AMDMIGraphX/pull/4835) | Extend problem cache with hardware provenance metadata | @danieyan-amd | open | 2026-04-30 | 2026-07-22 |
| [#5087](https://github.com/ROCm/AMDMIGraphX/pull/5087) | Fuse expert SilU heads (MoE) into batched GEMM via fuse_hori... | @TedThemistokleous | open | 2026-07-22 | 2026-07-22 |
| [#5074](https://github.com/ROCm/AMDMIGraphX/pull/5074) | Add dynamic support to Shape and Expand | @turneram | open | 2026-07-17 | 2026-07-22 |
| [#5069](https://github.com/ROCm/AMDMIGraphX/pull/5069) | Update Tile op builder to work with dynamic inputs | @turneram | open | 2026-07-15 | 2026-07-22 |
| [#5052](https://github.com/ROCm/AMDMIGraphX/pull/5052) | Revert find_reshape_cont guard relaxation from PR#4858 | @tamahedi | open | 2026-07-09 | 2026-07-22 |
| [#5014](https://github.com/ROCm/AMDMIGraphX/pull/5014) | Hoist and horizontal dot | @TedThemistokleous | open | 2026-06-25 | 2026-07-21 |
| [#4992](https://github.com/ROCm/AMDMIGraphX/pull/4992) | adjust_allocation: reallocate undersized aliased output buff... | @ycastill2-amd | open | 2026-06-18 | 2026-07-21 |
| [#5064](https://github.com/ROCm/AMDMIGraphX/pull/5064) | Fix MLIR conv-pointwise-layout fusion splitting | @justinrosner | open | 2026-07-14 | 2026-07-20 |
| [#5073](https://github.com/ROCm/AMDMIGraphX/pull/5073) | MIGraphX build support for MacOS (ref) | @kahmed10 | draft | 2026-07-16 | 2026-07-17 |
| [#5033](https://github.com/ROCm/AMDMIGraphX/pull/5033) | MultiHeadAttention with dynamic kv-cache attention | @turneram | draft | 2026-07-02 | 2026-07-17 |
| [#4911](https://github.com/ROCm/AMDMIGraphX/pull/4911) | Reduce dynamic-shape compile cost and select_module dispatch... | @chun-wan | open | 2026-05-26 | 2026-07-15 |
| [#5063](https://github.com/ROCm/AMDMIGraphX/pull/5063) | SSD static sidestep | @CharlieL7 | draft | 2026-07-14 | 2026-07-14 |
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
| [#3972](https://github.com/ROCm/AMDMIGraphX/pull/3972) | Allow ONNX and TF modules optional | @apwojcik | open | 2025-04-25 | 2026-06-12 |
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

## aiter (Active Development)
Repo: `ROCm/aiter` | Last collected: 2026-08-04T10:25:36Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#4502](https://github.com/ROCm/aiter/pull/4502) | MoE: correct + faster a16w4 (bf16 A x MXFP4 W) SiTUv2 kernel... | @coderfeli | open | 2026-08-01 | 2026-08-04 |
| [#4546](https://github.com/ROCm/aiter/pull/4546) | [fix][flydsl] fix oob scale descriptor in ptpc fp8 gemm | @gbyu-amd | open | 2026-08-04 | 2026-08-04 |
| [#4526](https://github.com/ROCm/aiter/pull/4526) | [Kernel] Extend MXFP4 GEMM1 replacement to A8W4 | @fsx950223 | open | 2026-08-03 | 2026-08-04 |
| [#4551](https://github.com/ROCm/aiter/pull/4551) | [FlyDSL MoE] Enable persistent stage2 grid for large-M mxfp8 | @XiaobingSuper | open | 2026-08-04 | 2026-08-04 |
| [#4398](https://github.com/ROCm/aiter/pull/4398) | Two-stage a16w4 MoE GEMM (INTERLEAVE-gate mode) | @apicciau | open | 2026-07-27 | 2026-08-04 |
| [#4552](https://github.com/ROCm/aiter/pull/4552) | [gfx1250] Route the missing Kimi-K3 fused BF16 GEMM to Trito... | @XiaobingSuper | open | 2026-08-04 | 2026-08-04 |
| [#4450](https://github.com/ROCm/aiter/pull/4450) | Optimize 12-head Gluon MLA split scheduling | @LiuYinfeng01 | open | 2026-07-30 | 2026-08-04 |
| [#4478](https://github.com/ROCm/aiter/pull/4478) | [dist] forward transpose_scale through fused AR+RMSNorm per-... | @yichiche | open | 2026-07-31 | 2026-08-04 |
| [#4554](https://github.com/ROCm/aiter/pull/4554) | configs: add tuned configs for Qwen3-VL-235B MXFP4 (gfx950) | @vorapolsiloai | draft | 2026-08-04 | 2026-08-04 |
| [#4320](https://github.com/ROCm/aiter/pull/4320) | Add opus fp8 mxscale BMM kernels for gfx950 | @yzhou103 | open | 2026-07-21 | 2026-08-04 |
| [#4452](https://github.com/ROCm/aiter/pull/4452) | fix(mla): refresh gfx950 MLA HSACO for large page_id KV addr... | @fangche123 | open | 2026-07-30 | 2026-08-04 |
| [#4538](https://github.com/ROCm/aiter/pull/4538) | [flydsl] gfx942 FP8 MQA logits indexer kernel | @vpietila-amd | draft | 2026-08-03 | 2026-08-04 |
| [#4543](https://github.com/ROCm/aiter/pull/4543) | fix for mxmoe gemm2 | @Bernard-Liu | open | 2026-08-04 | 2026-08-04 |
| [#4510](https://github.com/ROCm/aiter/pull/4510) | [Bugfix][FlyDSL] Honor b_nt in mixed-MoE stage-2 and retune ... | @qiongz | draft | 2026-08-02 | 2026-08-04 |
| [#4531](https://github.com/ROCm/aiter/pull/4531) | [kernel] mrope cache-quant: accept strided flash KV-cache vi... | @vorapolsiloai | draft | 2026-08-03 | 2026-08-04 |
| [#4545](https://github.com/ROCm/aiter/pull/4545) | Fix Triton cache flooding in `_fwd_kernel_stage2_asm` (batch... | @amd-mvarjoka | open | 2026-08-04 | 2026-08-04 |
| [#4521](https://github.com/ROCm/aiter/pull/4521) | MLA PS mode fp8 -n 16,3 16,4 and nhead=32,64,128 support cp ... | @minmengdie | open | 2026-08-03 | 2026-08-04 |
| [#4509](https://github.com/ROCm/aiter/pull/4509) | [Gluon][MLA] Split-major grid and blocked stage-2 reduce for... | @amd-ethany | open | 2026-08-02 | 2026-08-04 |
| [#4537](https://github.com/ROCm/aiter/pull/4537) | [gfx1250] Fix two gluon GEMM pipeline bugs and tune the Kimi... | @XiaobingSuper | draft | 2026-08-03 | 2026-08-04 |
| [#4327](https://github.com/ROCm/aiter/pull/4327) | [MLA v4 nm] Drop kv_last_page_lens from ABI + self-contained... | @amd-ruitang3 | open | 2026-07-21 | 2026-08-04 |
| [#3902](https://github.com/ROCm/aiter/pull/3902) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-24 | 2026-08-04 |
| [#4550](https://github.com/ROCm/aiter/pull/4550) | [FlyDSL] flydsl_gdr_decode: read strided q/k/v directly (qkv... | @jiangyon-amd | open | 2026-08-04 | 2026-08-04 |
| [#4549](https://github.com/ROCm/aiter/pull/4549) | [FlyDSL] Fused online Hadamard rotation + MXFP4 quantization... | @jiangyon-amd | open | 2026-08-04 | 2026-08-04 |
| [#4430](https://github.com/ROCm/aiter/pull/4430) | MI350 MLA PS mode add ds32 opus kernel for nhead*qseqlen=128... | @minmengdie | open | 2026-07-29 | 2026-08-04 |
| [#4322](https://github.com/ROCm/aiter/pull/4322) | gfx1201 RDNA4 a8w8 blockscale GEMM tuning | @pds-amd | open | 2026-07-21 | 2026-08-04 |
| [#4353](https://github.com/ROCm/aiter/pull/4353) | [FLYDSL] mfma16_hip GDR K5 prefill chunk_gdn_fwd_h for MI308 | @huizzhan | open | 2026-07-23 | 2026-08-04 |
| [#4523](https://github.com/ROCm/aiter/pull/4523) | [feat][HIP]: enable chunk-gated-delta-rule-fwd-h on gfx1201. | @stevenshenyj | open | 2026-08-03 | 2026-08-04 |
| [#4439](https://github.com/ROCm/aiter/pull/4439) | megamoe | @GwilliamHu | open | 2026-07-29 | 2026-08-04 |
| [#4547](https://github.com/ROCm/aiter/pull/4547) | [Qwen3.5_dev] Cherry-pick fix for custom all-reduce | @apinge | draft | 2026-08-04 | 2026-08-04 |
| [#4519](https://github.com/ROCm/aiter/pull/4519) | [Triton] Fix gfx950 small-M AFP4WFP4 correctness | @LiuYinfeng01 | open | 2026-08-03 | 2026-08-04 |
| [#4530](https://github.com/ROCm/aiter/pull/4530) | [Triton MOE routing] Fix `memory access fault` surfacing in ... | @fxmarty-amd | open | 2026-08-03 | 2026-08-04 |
| [#4542](https://github.com/ROCm/aiter/pull/4542) | Declare fused_moe/tuned_gemm preshuffled weight layout | @yzhou103 | open | 2026-08-04 | 2026-08-04 |
| [#4491](https://github.com/ROCm/aiter/pull/4491) | [HIP] Add gfx950 packed BF16 GDN decode kernel | @zijiecode | open | 2026-07-31 | 2026-08-04 |
| [#4544](https://github.com/ROCm/aiter/pull/4544) | tune: default --timeout to 100s so a dead worker gets reaped | @yzhou103 | draft | 2026-08-04 | 2026-08-04 |
| [#4534](https://github.com/ROCm/aiter/pull/4534) | [OpusMoe] optimize opus moe situv2 ability | @yifehuan | open | 2026-08-03 | 2026-08-04 |
| [#4540](https://github.com/ROCm/aiter/pull/4540) |     [FLYDSL] Fix GDR reductions for FlyDSL 0.2.4 | @IzacharyI | open | 2026-08-04 | 2026-08-04 |
| [#2818](https://github.com/ROCm/aiter/pull/2818) | Flydsl implementation of a8w8 blockscale for gfx1250 | @omuhamma | open | 2026-04-20 | 2026-08-04 |
| [#4415](https://github.com/ROCm/aiter/pull/4415) | feat(topk): length-adaptive deterministic top-k for sparse-M... | @chuanbowang2026 | open | 2026-07-28 | 2026-08-04 |
| [#4366](https://github.com/ROCm/aiter/pull/4366) | feat: support fp32 chunk states in GDN prefill | @junna2016 | open | 2026-07-24 | 2026-08-04 |
| [#4506](https://github.com/ROCm/aiter/pull/4506) | [triton] fix transpose_scale in fused_rms_fp8_group_quant (w... | @karverma-amd | open | 2026-08-01 | 2026-08-04 |
| [#4362](https://github.com/ROCm/aiter/pull/4362) | Add unit-scale FP8 KV cache support to fused_qknorm_idxrqkno... | @zijiecode | open | 2026-07-23 | 2026-08-04 |
| [#4407](https://github.com/ROCm/aiter/pull/4407) | feat(moe): add SharedEP MXFP4 kernels | @AMD-yanfeiwang | open | 2026-07-28 | 2026-08-04 |
| [#4473](https://github.com/ROCm/aiter/pull/4473) | Add Opus hd192 hybrid buffer path for large KV (>4GiB). | @fangche123 | open | 2026-07-31 | 2026-08-04 |
| [#4476](https://github.com/ROCm/aiter/pull/4476) | [gfx942] WIP: dpskv4 flash tp4 gemm tune | @amd-youchen | open | 2026-07-31 | 2026-08-04 |
| [#4479](https://github.com/ROCm/aiter/pull/4479) | tune Kimi-K3 prefill GEMMs for gfx950 | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-04 |
| [#4480](https://github.com/ROCm/aiter/pull/4480) | Enable fp8 KV cache for small-head MLA decode on gfx950 | @ZhengGong-amd | open | 2026-07-31 | 2026-08-04 |
| [#4486](https://github.com/ROCm/aiter/pull/4486) | fix(cpp_itfs/pa): make the C++ paged_attention_ragged entry ... | @jiejingzhangamd | open | 2026-07-31 | 2026-08-04 |
| [#4487](https://github.com/ROCm/aiter/pull/4487) | [tune] Kimi-K3 SiTUv2 MoE: add block_m=64 for DSpark verify-... | @nehaprakriya | open | 2026-07-31 | 2026-08-04 |
| [#4489](https://github.com/ROCm/aiter/pull/4489) | feat(gemm): complete GLM-5.2 dense tuned configs (gfx950) | @Raiden-Makoto | open | 2026-07-31 | 2026-08-04 |
| [#4494](https://github.com/ROCm/aiter/pull/4494) | Fix ASM split-K semaphore deadlock under CUDA graph capture | @JohnQinAMD | open | 2026-07-31 | 2026-08-04 |
| [#4511](https://github.com/ROCm/aiter/pull/4511) | [GFX950] Add OPUS mxfp8 pa mqa logits | @shay-li77 | open | 2026-08-02 | 2026-08-04 |
| [#4512](https://github.com/ROCm/aiter/pull/4512) | fix(build): resolve gfx1100 targets across JIT paths | @skyguan92 | open | 2026-08-02 | 2026-08-04 |
| [#4513](https://github.com/ROCm/aiter/pull/4513) | MXMoE kernels for Qwen3.5-397B TP2 decode | @zijiecode | open | 2026-08-03 | 2026-08-04 |
| [#4514](https://github.com/ROCm/aiter/pull/4514) | [Feature][FlyDSL] Add multi-B MoE kernels for ROCm DWDP | @AMD-yanfeiwang | open | 2026-08-03 | 2026-08-04 |
| [#4515](https://github.com/ROCm/aiter/pull/4515) | [Perf][FlyDSL] Reduce short-context FP4 prefill tile size | @zhiding512 | open | 2026-08-03 | 2026-08-04 |
| [#4525](https://github.com/ROCm/aiter/pull/4525) | Add gfx90a to GFX_CU_NUM_MAP | @davetha | open | 2026-08-03 | 2026-08-04 |
| [#4535](https://github.com/ROCm/aiter/pull/4535) | [Bugfix][Kernel][Hardware][AMD] Add gfx1201 RDNA4 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-04 |
| [#4539](https://github.com/ROCm/aiter/pull/4539) | Cache the paged_attention_v1 launch plan to fix batch=1 deco... | @zjin-lcf | open | 2026-08-03 | 2026-08-04 |
| [#4355](https://github.com/ROCm/aiter/pull/4355) | Jeongkim/silotiger 699 gfx950 port | @JH-Leon-KIM-AMD | draft | 2026-07-23 | 2026-08-04 |
| [#4507](https://github.com/ROCm/aiter/pull/4507) | [Gluon][MLA] Size NUM_KV_SPLITS from the page table, not the... | @amd-ethany | open | 2026-08-02 | 2026-08-04 |
| [#4361](https://github.com/ROCm/aiter/pull/4361) | perf(expt_data): skip redundant TokenStart/TileStart stores ... | @amd-hhashemi | open | 2026-07-23 | 2026-08-03 |
| [#4330](https://github.com/ROCm/aiter/pull/4330) | perf(gfx1250): autotune gluon batched GEMM bf16 for DeepSeek... | @amd-hhashemi | open | 2026-07-22 | 2026-08-03 |
| [#4147](https://github.com/ROCm/aiter/pull/4147) | [TRITON] [GLUON] [GFX950] Add MHA Gluon Kernel | @lucas-santos-amd | open | 2026-07-08 | 2026-08-03 |
| [#4413](https://github.com/ROCm/aiter/pull/4413) | [Bugfix] mp_tuner: default --timeout so a dead worker is rea... | @vanshbhatia-amd | open | 2026-07-28 | 2026-08-03 |
| [#3596](https://github.com/ROCm/aiter/pull/3596) | CI: add FFM aiter UT workflow | @gyohuangxin | draft | 2026-06-08 | 2026-08-03 |
| [#4348](https://github.com/ROCm/aiter/pull/4348) | Aiterker 112 asm ptl1 | @JohnNikolay84 | open | 2026-07-23 | 2026-08-03 |
| [#3757](https://github.com/ROCm/aiter/pull/3757) | ASM support for AITERKER-112 | @JohnNikolay84 | open | 2026-06-16 | 2026-08-03 |
| [#4536](https://github.com/ROCm/aiter/pull/4536) | [Bugfix][Kernel][Hardware][AMD] Fix invalid GFX12 architectu... | @lowbob84 | open | 2026-08-03 | 2026-08-03 |
| [#4517](https://github.com/ROCm/aiter/pull/4517) | [gfx950][Triton] Fix unified_attention num_stages > 1 crash ... | @Rohan138 | draft | 2026-08-03 | 2026-08-03 |
| [#3364](https://github.com/ROCm/aiter/pull/3364) | Reduced gfx1250 triton_tests for FFM CI | @Boss2002n | open | 2026-05-26 | 2026-08-03 |
| [#3991](https://github.com/ROCm/aiter/pull/3991) | refactor aot | @zhiding512 | draft | 2026-06-29 | 2026-08-03 |
| [#4188](https://github.com/ROCm/aiter/pull/4188) | gfx1201 (RDNA4) FlyDSL BF16 attention optimizations & FP8 at... | @pds-amd | open | 2026-07-10 | 2026-08-03 |
| [#3956](https://github.com/ROCm/aiter/pull/3956) | fix(triton): support gfx1201 unified attention within LDS li... | @papadako | open | 2026-06-26 | 2026-08-03 |
| [#4460](https://github.com/ROCm/aiter/pull/4460) | topk_gating: support softmax + need_renorm and refactor test | @yzhou103 | open | 2026-07-30 | 2026-08-03 |
| [#4396](https://github.com/ROCm/aiter/pull/4396) | tune: a8w8 gemm tuning for Qwen3.5 MXFP4-AttnFP8 model | @yuzho-amd | open | 2026-07-27 | 2026-08-03 |
| [#4295](https://github.com/ROCm/aiter/pull/4295) | [gfx1250] Launch v4 NM MLA decode .co directly from Python (... | @feifei14119 | open | 2026-07-20 | 2026-08-03 |
| [#4481](https://github.com/ROCm/aiter/pull/4481) | parallelize gather_kv_b_proj context chunks | @LiuYinfeng01 | open | 2026-07-31 | 2026-08-03 |
| [#4418](https://github.com/ROCm/aiter/pull/4418) | CI: add always-run Aiter test gate | @gyohuangxin | open | 2026-07-28 | 2026-08-03 |
| [#4497](https://github.com/ROCm/aiter/pull/4497) | perf(flydsl): fuse Kimi-K3 MLA output gate on gfx950 | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4503](https://github.com/ROCm/aiter/pull/4503) | perf(flydsl): add Kimi-K3 FP8 latent MoE tail | @JohnQinAMD | draft | 2026-08-01 | 2026-08-02 |
| [#4504](https://github.com/ROCm/aiter/pull/4504) | perf(flydsl): fuse Kimi-K3 FP8 pre-route projections | @JohnQinAMD | draft | 2026-08-01 | 2026-08-02 |
| [#4499](https://github.com/ROCm/aiter/pull/4499) | perf(flydsl): optimize Kimi-K3 KDA group64 projection on gfx... | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4498](https://github.com/ROCm/aiter/pull/4498) | perf(flydsl): fuse Kimi-K3 B1 BF16 pre-route projections on ... | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4496](https://github.com/ROCm/aiter/pull/4496) | perf(flydsl): fuse Kimi-K3 B1 latent MoE tail | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4495](https://github.com/ROCm/aiter/pull/4495) | perf(flydsl): fuse Kimi-K3 KDA decode and f_b projection | @JohnQinAMD | draft | 2026-07-31 | 2026-08-02 |
| [#4399](https://github.com/ROCm/aiter/pull/4399) | Satya/gfx12 mxfp4 gemm | @Boss2002n | draft | 2026-07-27 | 2026-08-02 |
| [#2754](https://github.com/ROCm/aiter/pull/2754) | [ROPE] refactor hip kls | @amd-ruitang3 | open | 2026-04-16 | 2026-08-02 |
| [#2521](https://github.com/ROCm/aiter/pull/2521) | [Opt] Fused car+rms for gpt-oss and ensure to use 1-stage ke... | @kkHuang-amd | open | 2026-03-30 | 2026-08-02 |
| [#2489](https://github.com/ROCm/aiter/pull/2489) | Fix CPU/GPU device mismatch in _yarn_linear_ramp_mask | @JohnQinAMD | open | 2026-03-26 | 2026-08-02 |
| [#2488](https://github.com/ROCm/aiter/pull/2488) | GEMMa8w8 blockscale gluon gfx12 kernel v2 | @amirumoAMD | open | 2026-03-26 | 2026-08-02 |
| [#2429](https://github.com/ROCm/aiter/pull/2429) | add README for gluon kernels | @Dewei-Wang-sh | open | 2026-03-23 | 2026-08-02 |
| [#2406](https://github.com/ROCm/aiter/pull/2406) | Add operator performance benchmark CI workflow | @sunway513 | open | 2026-03-22 | 2026-08-02 |
| [#2401](https://github.com/ROCm/aiter/pull/2401) | Fix kernel map collision on MGPU context | @Micky774 | open | 2026-03-20 | 2026-08-02 |
| [#2396](https://github.com/ROCm/aiter/pull/2396) | [TRITON] Unified Attention V2 | @juuso-oskari | draft | 2026-03-20 | 2026-08-02 |
| [#2350](https://github.com/ROCm/aiter/pull/2350) | [gfx1201] Added tuned gemm_a8w8_configs for gfx1201 | @vllmellm | open | 2026-03-19 | 2026-08-02 |
| [#2340](https://github.com/ROCm/aiter/pull/2340) | feat: add INT8/INT4 quantization support for 2-stage ASM MoE... | @amd-zfyu | open | 2026-03-19 | 2026-08-02 |
| [#2179](https://github.com/ROCm/aiter/pull/2179) | Adds the ability to build static archives in addition to sha... | @Micky774 | open | 2026-03-04 | 2026-08-02 |
| [#2018](https://github.com/ROCm/aiter/pull/2018) | feat(ck_tile): add a8w8 blockscale gemm with preshuffleQuant... | @amd-khushbu | open | 2026-02-10 | 2026-08-02 |
| [#3045](https://github.com/ROCm/aiter/pull/3045) | add qwen3next/qwen3.5 bf16 fp8 tuning config | @ganyi1996ppo | open | 2026-05-06 | 2026-08-02 |
| [#3015](https://github.com/ROCm/aiter/pull/3015) | test: xfail test_moe_routing on gfx950 for known topk tie-br... | @sunway513 | open | 2026-05-04 | 2026-08-02 |
| [#2964](https://github.com/ROCm/aiter/pull/2964) | [TRITON] Fix: Prevent null pointer dereference with empty de... | @juuso-oskari | open | 2026-04-29 | 2026-08-02 |
| [#2947](https://github.com/ROCm/aiter/pull/2947) | fused_moe: avoid gfx942 CK stage2 OOB crash for large E/mode... | @Copilot | open | 2026-04-29 | 2026-08-02 |
| [#2936](https://github.com/ROCm/aiter/pull/2936) | [gluon][pa_mqa_logits] memory-safety: mask all OutLogits buf... | @maeehart | draft | 2026-04-28 | 2026-08-02 |
| [#2922](https://github.com/ROCm/aiter/pull/2922) | Deepseek Sparse Attention Triton Kernels for Training | @wangye805 | draft | 2026-04-27 | 2026-08-02 |
| [#2912](https://github.com/ROCm/aiter/pull/2912) | rmsnorm gluon kernel created for gfx1250 | @amd-jrosas | open | 2026-04-24 | 2026-08-02 |
| [#2889](https://github.com/ROCm/aiter/pull/2889) | Flydsl rmsnorm | @kudomcho | open | 2026-04-23 | 2026-08-02 |
| [#2865](https://github.com/ROCm/aiter/pull/2865) | Add qwen3.5 397b mxfp4 fmoe tuning | @mqhc2020 | open | 2026-04-22 | 2026-08-02 |
| [#2861](https://github.com/ROCm/aiter/pull/2861) | update qwen3next config | @ganyi1996ppo | open | 2026-04-22 | 2026-08-02 |
| [#2790](https://github.com/ROCm/aiter/pull/2790) | fix(pa_mqa_logits): handle ChunkQ > heads-per-GPU for high t... | @jatseng-ai | open | 2026-04-19 | 2026-08-02 |
| [#2789](https://github.com/ROCm/aiter/pull/2789) | gemma quant | @ganyi1996ppo | open | 2026-04-19 | 2026-08-02 |
| [#2783](https://github.com/ROCm/aiter/pull/2783) | Gluon gemma8w8 blockscale wrap-up | @amirumoAMD | open | 2026-04-17 | 2026-08-02 |
| [#2781](https://github.com/ROCm/aiter/pull/2781) | Add mutates_args=[] to gemm_a4w4 torch_compile_guard to fix ... | @ColinZ22 | open | 2026-04-17 | 2026-08-02 |
| [#2779](https://github.com/ROCm/aiter/pull/2779) | [Don't merge] Gluon pa bad case reproducer | @ganyi1996ppo | draft | 2026-04-17 | 2026-08-02 |
| [#2778](https://github.com/ROCm/aiter/pull/2778) | [attention] refactor hip kl | @amd-ruitang3 | open | 2026-04-17 | 2026-08-02 |
| [#2772](https://github.com/ROCm/aiter/pull/2772) | make cache op support non-contiguous num_blocks dim | @ganyi1996ppo | open | 2026-04-17 | 2026-08-02 |
| [#2769](https://github.com/ROCm/aiter/pull/2769) | docs(skills): add AITER Claude/Cursor skill set with validat... | @ChuanLi1101 | open | 2026-04-16 | 2026-08-02 |
| [#2736](https://github.com/ROCm/aiter/pull/2736) | fix gdr for vllm | @ganyi1996ppo | draft | 2026-04-14 | 2026-08-02 |
| [#2730](https://github.com/ROCm/aiter/pull/2730) | introduce g1u0 smoothquant int8 fused moe : fused_moe_gelu_s... | @tingqli | open | 2026-04-14 | 2026-08-02 |
| [#2725](https://github.com/ROCm/aiter/pull/2725) | flydsl implementation of a16w16 gemm | @omuhamma | open | 2026-04-13 | 2026-08-02 |
| [#2706](https://github.com/ROCm/aiter/pull/2706) | docs: comprehensive documentation overhaul | @sunway513 | open | 2026-04-12 | 2026-08-02 |
| [#2705](https://github.com/ROCm/aiter/pull/2705) | feat: add Gemma4 31B support (ProportionalRotaryEmbedding, r... | @ClementLinCF | open | 2026-04-12 | 2026-08-02 |
| [#2699](https://github.com/ROCm/aiter/pull/2699) | Add Windows support | @0xDELUXA | open | 2026-04-11 | 2026-08-02 |
| [#2698](https://github.com/ROCm/aiter/pull/2698) | Add ROCm-versioned wheel naming to release workflow | @sunway513 | open | 2026-04-11 | 2026-08-02 |
| [#2672](https://github.com/ROCm/aiter/pull/2672) | [TRITON] Add separate ROPE computation path for unified atte... | @anhminhnguyenhoang | open | 2026-04-09 | 2026-08-02 |
| [#2670](https://github.com/ROCm/aiter/pull/2670) | Add release engineering infrastructure | @sunway513 | open | 2026-04-09 | 2026-08-02 |
| [#2664](https://github.com/ROCm/aiter/pull/2664) | fix(setup.py): accept FlyDSL dev/rc builds when version matc... | @guangzlu | open | 2026-04-09 | 2026-08-02 |
| [#2643](https://github.com/ROCm/aiter/pull/2643) | Enable Grouped-Query Attention (GQA) based on MHA | @etemadiamd | open | 2026-04-07 | 2026-08-02 |
| [#2640](https://github.com/ROCm/aiter/pull/2640) | Restore CKTile MOE tuning and add between-stage quant fairne... | @amd-yashagar | open | 2026-04-07 | 2026-08-02 |
| [#2632](https://github.com/ROCm/aiter/pull/2632) | [config] Add bf16 tuned GEMM config for Kimi-K2.5 on MI355 (... | @akao-amd | open | 2026-04-07 | 2026-08-02 |
| [#2630](https://github.com/ROCm/aiter/pull/2630) | Add PA_PS 8-wave kernel for MI308 with co-execution | @quintinwang5 | open | 2026-04-07 | 2026-08-02 |
| [#2622](https://github.com/ROCm/aiter/pull/2622) | [FlyDSL] Tune MXFP4 MOE stage1 tile configs for DeepSeek-R1 | @sunway513 | open | 2026-04-05 | 2026-08-02 |
| [#2615](https://github.com/ROCm/aiter/pull/2615) | Add pytest for fmha_v3_varlen_fwd to trigger module_fmha_v3_... | @Copilot | draft | 2026-04-03 | 2026-08-02 |
| [#2613](https://github.com/ROCm/aiter/pull/2613) | add a8w8 gemm config for gfx942 | @wangxunx | open | 2026-04-03 | 2026-08-02 |
| [#2610](https://github.com/ROCm/aiter/pull/2610) | [TRITON] Fix pa_decode_gluon temporary_output dtype contract... | @zhenhantech | open | 2026-04-03 | 2026-08-02 |
| [#2605](https://github.com/ROCm/aiter/pull/2605) | fix: replace hardcoded /opt/rocm paths with ROCM_HOME env va... | @zufayu | open | 2026-04-03 | 2026-08-02 |
| [#2600](https://github.com/ROCm/aiter/pull/2600) | Enable Aiter Softmax Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2597](https://github.com/ROCm/aiter/pull/2597) | Enable Triton Fp8 Quantization Benchmarking | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2596](https://github.com/ROCm/aiter/pull/2596) | Add Triton Benchmarking Model Configs | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2594](https://github.com/ROCm/aiter/pull/2594) | Enabled rope Benchmarking CSV Output | @etemadiamd | open | 2026-04-02 | 2026-08-02 |
| [#2592](https://github.com/ROCm/aiter/pull/2592) | [TRITON] Add act_mul without quant (DO_QUANT), model configs... | @Chi-Chu319 | open | 2026-04-02 | 2026-08-02 |
| [#2577](https://github.com/ROCm/aiter/pull/2577) | Support MLA decode with nhead < 16 by transparent pad-to-16 | @ChuanLi1101 | open | 2026-04-01 | 2026-08-02 |
| [#2573](https://github.com/ROCm/aiter/pull/2573) | Add native SwigluStep support for Step-3.5 MoE | @GoldenGrapeGentleman | open | 2026-04-01 | 2026-08-02 |
| [#2565](https://github.com/ROCm/aiter/pull/2565) | Unify FlyDSL W4A4/G1U0 updates and tuning fixes | @rujiacai | open | 2026-04-01 | 2026-08-02 |
| [#2559](https://github.com/ROCm/aiter/pull/2559) | Kimi 128k tuned config(TP4&TP8) | @inkcherry | open | 2026-03-31 | 2026-08-02 |
| [#2530](https://github.com/ROCm/aiter/pull/2530) | [DO NOT MERG] CI: test switch MI35x runners to DPX labels | @gyohuangxin | open | 2026-03-30 | 2026-08-02 |
| [#2513](https://github.com/ROCm/aiter/pull/2513) | [TRITON] [GLUON] GFX1250 Gluon MoE A4W4 Kernel | @farlukas | open | 2026-03-27 | 2026-08-02 |
| [#2510](https://github.com/ROCm/aiter/pull/2510) | gemm_a8w8 gfx1250 gluon kernel, + wrapper + test + bench | @ahmed-bsod | open | 2026-03-27 | 2026-08-02 |
| [#2504](https://github.com/ROCm/aiter/pull/2504) | [TRITON] Unified attention benchmark | @juuso-oskari | open | 2026-03-27 | 2026-08-02 |
| [#2483](https://github.com/ROCm/aiter/pull/2483) | [ROCM] Add support with Infinity Cache (LLC) awareness for p... | @tianwyan | open | 2026-03-26 | 2026-08-02 |
| [#2478](https://github.com/ROCm/aiter/pull/2478) | Fix GPU memory access fault in CK MoE FP4 kernel with Expert... | @M4jupitercannon | open | 2026-03-26 | 2026-08-02 |
| [#2472](https://github.com/ROCm/aiter/pull/2472) | [Triton] [Gluon] [GFX12] add UA3D gluon kernel for gfx12 | @k50112113 | draft | 2026-03-25 | 2026-08-02 |
| [#2443](https://github.com/ROCm/aiter/pull/2443) | [FEAT] add enable_ck = 0 for dispatching | @HaonanWang98 | open | 2026-03-24 | 2026-08-02 |
| [#2417](https://github.com/ROCm/aiter/pull/2417) | feat: CK-free shim + Triton MLA for (gfx1250) | @sunway513 | open | 2026-03-22 | 2026-08-02 |
| [#2409](https://github.com/ROCm/aiter/pull/2409) | Add gfx950 Triton GEMM tuning configs for DeepSeek-R1 shapes | @sunway513 | open | 2026-03-22 | 2026-08-02 |
| [#2374](https://github.com/ROCm/aiter/pull/2374) | [Bugfix][gfx950] Force 1-stage MoE assembly kernels for FP8 ... | @maeehart | open | 2026-03-20 | 2026-08-02 |
| [#2369](https://github.com/ROCm/aiter/pull/2369) | [Bugfix] Handle expert groups > 32 in biased_grouped_topk | @ianschenck | open | 2026-03-20 | 2026-08-02 |
| [#2362](https://github.com/ROCm/aiter/pull/2362) | Gluon kernel for a16w16 gemm | @omuhamma | draft | 2026-03-19 | 2026-08-02 |
| [#2355](https://github.com/ROCm/aiter/pull/2355) | Fix ASM I8 GEMM: split the M dimension into chunks that keep... | @xudonlyu | open | 2026-03-19 | 2026-08-02 |
| [#2337](https://github.com/ROCm/aiter/pull/2337) | GFX1250 Gluon MoE A4W4 Kernel | @farlukas | draft | 2026-03-18 | 2026-08-02 |
| [#2314](https://github.com/ROCm/aiter/pull/2314) | Add MPerBlock=128 tile size for blockscale FP8 MoE kernels | @ChuanLi1101 | open | 2026-03-17 | 2026-08-02 |
| [#2258](https://github.com/ROCm/aiter/pull/2258) | Add performance parity tests for AITER kernels | @ChuanLi1101 | open | 2026-03-12 | 2026-08-02 |
| [#3429](https://github.com/ROCm/aiter/pull/3429) | Fuse dynamic_per_tensor_quant_fp8_i8 into one launch for the... | @JohnQinAMD | open | 2026-05-29 | 2026-08-02 |
| [#3369](https://github.com/ROCm/aiter/pull/3369) | fp8 einsum flydsl impl | @ganyi1996ppo | open | 2026-05-27 | 2026-08-02 |
| [#3361](https://github.com/ROCm/aiter/pull/3361) | [feat] add no_combine flag in 2-stage MoE backend | @zx3xyy | open | 2026-05-26 | 2026-08-02 |
| [#3340](https://github.com/ROCm/aiter/pull/3340) | docs: AITER late May 2026 newsletter (v0.1.14 + v0.1.13.post... | @sunway513 | open | 2026-05-25 | 2026-08-02 |
| [#3316](https://github.com/ROCm/aiter/pull/3316) | [ck gemm a8w8 blockscale] shape-aware kernel selection heuri... | @eppaneamd | open | 2026-05-22 | 2026-08-02 |
| [#3297](https://github.com/ROCm/aiter/pull/3297) | add pageattention with sliding window | @ChengYao-amd | open | 2026-05-21 | 2026-08-02 |
| [#3295](https://github.com/ROCm/aiter/pull/3295) | repro(pa-asm): standalone reproducer for fp8 PA OOB at bs=12... | @yhl-amd | open | 2026-05-21 | 2026-08-02 |
| [#3280](https://github.com/ROCm/aiter/pull/3280) | [FlyDSL][MOE] Enable a8w8 blockscale moe splitk in flydsl  | @lalala-sh | open | 2026-05-20 | 2026-08-02 |
| [#3275](https://github.com/ROCm/aiter/pull/3275) | [Triton] remove MOE activation downcast | @k50112113 | draft | 2026-05-19 | 2026-08-02 |
| [#3272](https://github.com/ROCm/aiter/pull/3272) | Revert "[Triton] Declare triton>=3.6.0 dependency " | @gyohuangxin | open | 2026-05-19 | 2026-08-02 |
| [#3269](https://github.com/ROCm/aiter/pull/3269) | add block_cat_fused fused op | @reger-men | open | 2026-05-19 | 2026-08-02 |
| [#3263](https://github.com/ROCm/aiter/pull/3263) | Fused ar(use_new=false) + rmsnorm | @IzacharyI | open | 2026-05-19 | 2026-08-02 |
| [#3256](https://github.com/ROCm/aiter/pull/3256) | [flydsl] PA DECODE | @ahmed-bsod | open | 2026-05-18 | 2026-08-02 |
| [#3249](https://github.com/ROCm/aiter/pull/3249) | [Perf] add_rmsnorm_quant: fuse two block reduces into single... | @kudomcho | open | 2026-05-18 | 2026-08-02 |
| [#3243](https://github.com/ROCm/aiter/pull/3243) | [FIX] fmha bwd test coverage | @JaxChen29 | open | 2026-05-18 | 2026-08-02 |
| [#3242](https://github.com/ROCm/aiter/pull/3242) | [Bugfix] Fix op schema for fmha_v3_fowd and gemm_a16w16 | @Phi-C | open | 2026-05-18 | 2026-08-02 |
| [#3222](https://github.com/ROCm/aiter/pull/3222) | FlyDSL sage mxfp4 (v2) | @hellozhuo-amd | draft | 2026-05-15 | 2026-08-02 |
| [#3210](https://github.com/ROCm/aiter/pull/3210) | [feat](gpt-oss): add a8w8 gemm tunefile for gpt-oss | @PerryZhang01 | open | 2026-05-15 | 2026-08-02 |
| [#3186](https://github.com/ROCm/aiter/pull/3186) | i8fp8 fmha gfx950/942 asm | @jcaraban | open | 2026-05-14 | 2026-08-02 |
| [#3180](https://github.com/ROCm/aiter/pull/3180) | CI: add tuned config smoke mode | @gyohuangxin | open | 2026-05-14 | 2026-08-02 |
| [#3179](https://github.com/ROCm/aiter/pull/3179) | Add tuned configs for Qwen3.5-35B-A3B-FP8 | @ningding01 | open | 2026-05-14 | 2026-08-02 |
| [#3168](https://github.com/ROCm/aiter/pull/3168) | [TRITON] gfx1201: gemm_a8w8 tuning configs (Mistral-3 / Qwen... | @carlushuang | open | 2026-05-13 | 2026-08-02 |
| [#3165](https://github.com/ROCm/aiter/pull/3165) | FlyDSL sage v1 | @hellozhuo-amd | draft | 2026-05-13 | 2026-08-02 |
| [#3162](https://github.com/ROCm/aiter/pull/3162) | CI: add test prebuild profile for PR wheels | @gyohuangxin | open | 2026-05-13 | 2026-08-02 |
| [#3160](https://github.com/ROCm/aiter/pull/3160) | [DO NOT MERGE] CI: split Aiter wheel prebuild by architectur... | @gyohuangxin | open | 2026-05-13 | 2026-08-02 |
| [#3152](https://github.com/ROCm/aiter/pull/3152) | [feat] Add HIP inline asm GDN decode op | @IzacharyI | open | 2026-05-12 | 2026-08-02 |
| [#3147](https://github.com/ROCm/aiter/pull/3147) | [BugFix] Align FlyDSL MXFP4 quantization with reference | @zihaomu | open | 2026-05-12 | 2026-08-02 |
| [#3114](https://github.com/ROCm/aiter/pull/3114) | Update gluon | @fsx950223 | open | 2026-05-11 | 2026-08-02 |
| [#3110](https://github.com/ROCm/aiter/pull/3110) | [BugFix] A4W4 FMoE run_config weight shuffle | @zihaomu | open | 2026-05-11 | 2026-08-02 |
| [#3109](https://github.com/ROCm/aiter/pull/3109) | [ROCm][aiter] Add DSv3.2 BF16 GEMM tuned configs for gfx950 ... | @sunway513 | open | 2026-05-10 | 2026-08-02 |
| [#3094](https://github.com/ROCm/aiter/pull/3094) | [FLYDSL] [TRITON] Attention backward mxfp8 gfx950 | @lburzawa | open | 2026-05-08 | 2026-08-02 |
| [#3093](https://github.com/ROCm/aiter/pull/3093) | [Gluon] fused_mxfp4_quant for gfx1250 | @amd-jrosas | open | 2026-05-08 | 2026-08-02 |
| [#3079](https://github.com/ROCm/aiter/pull/3079) | Add fused inv_rope + FP8 block-scaled quantization kernel fo... | @bobofang11235 | open | 2026-05-08 | 2026-08-02 |
| [#3069](https://github.com/ROCm/aiter/pull/3069) | [draft] Fix MLA decode: zero-init splitK accumulators to avo... | @hangy-amd | draft | 2026-05-07 | 2026-08-02 |
| [#3061](https://github.com/ROCm/aiter/pull/3061) | [bug] reproducer for pa_*.co block_id truncation at 65,536 | @yhl-amd | open | 2026-05-07 | 2026-08-02 |
| [#3058](https://github.com/ROCm/aiter/pull/3058) | [Triton] batched_gemm_a16wfp4 (gfx950): fuse dot_scaled accu... | @iraj465 | open | 2026-05-07 | 2026-08-02 |
| [#3034](https://github.com/ROCm/aiter/pull/3034) | [TRITON] Add scattered-pointer Q4_K_M MoE matvec kernel for ... | @ssubbotin | open | 2026-05-05 | 2026-08-02 |
| [#3003](https://github.com/ROCm/aiter/pull/3003) | Add HipKittens based nhead=32 MLA kernel on MI35x / `gfx950` | @hubertlu-tw | draft | 2026-05-01 | 2026-08-02 |
| [#2998](https://github.com/ROCm/aiter/pull/2998) | Dsv4 sparse indexer | @Oseltamivir | open | 2026-05-01 | 2026-08-02 |
| [#2997](https://github.com/ROCm/aiter/pull/2997) | mla: refuse page_size > 1 on bf16 decode-stage1 kernel (no _... | @kzjeef | open | 2026-05-01 | 2026-08-02 |
| [#2971](https://github.com/ROCm/aiter/pull/2971) | [Triton] [gfx1250] GEMM A16W16 Kernel | @azaidy | draft | 2026-04-29 | 2026-08-02 |
| [#2965](https://github.com/ROCm/aiter/pull/2965) | opt fused_qk_rmsnorm_group_quant in case n2>n1 | @yzhou103 | draft | 2026-04-29 | 2026-08-02 |
| [#2943](https://github.com/ROCm/aiter/pull/2943) | Make `rmsnorm2d_fwd` Handle Strided Higher-Rank Inputs Safel... | @hubertlu-tw | open | 2026-04-29 | 2026-08-02 |
| [#2939](https://github.com/ROCm/aiter/pull/2939) | gfx flex nightly | @kiran-thumma | draft | 2026-04-28 | 2026-08-02 |
| [#2905](https://github.com/ROCm/aiter/pull/2905) | aiter test workflow enhance | @kiran-thumma | draft | 2026-04-24 | 2026-08-02 |
| [#2898](https://github.com/ROCm/aiter/pull/2898) | Fix CK 2stages MoE (always use BK1 = 16) | @ex-rzr | open | 2026-04-24 | 2026-08-02 |
| [#2891](https://github.com/ROCm/aiter/pull/2891) | [Bug] Default value of ChunkQ in deepgemm could lead to divi... | @qli88 | open | 2026-04-24 | 2026-08-02 |
| [#2885](https://github.com/ROCm/aiter/pull/2885) | Implement TurboQuant | @waqahmed-amd-fi | draft | 2026-04-23 | 2026-08-02 |
| [#2844](https://github.com/ROCm/aiter/pull/2844) | aiter/__init__: per-module try/except so the first broken op... | @ChuanLi1101 | open | 2026-04-21 | 2026-08-02 |
| [#2839](https://github.com/ROCm/aiter/pull/2839) | fix(build): add missing c10/hip/HIPException.h include in ga... | @ChuanLi1101 | open | 2026-04-21 | 2026-08-02 |
| [#2830](https://github.com/ROCm/aiter/pull/2830) | fav3 kernel with improved softmax | @antsaukk | draft | 2026-04-21 | 2026-08-02 |
| [#2822](https://github.com/ROCm/aiter/pull/2822) | [ROCm][Perf] Optimize batched_gemm_a16wfp4 kernel — 2.97x mi... | @rbrugaro-amd | draft | 2026-04-20 | 2026-08-02 |
| [#2814](https://github.com/ROCm/aiter/pull/2814) | Optimised all reduce kernel for ATOM using claude clode and ... | @RichardChamberlain1 | open | 2026-04-20 | 2026-08-02 |
| [#2767](https://github.com/ROCm/aiter/pull/2767) | Add SGLang/vLLM/ATOM integration tests to nightly workflow | @kiran-thumma | draft | 2026-04-16 | 2026-08-02 |
| [#2762](https://github.com/ROCm/aiter/pull/2762) | feat(moe): support multi-B weight tensors (DWDP) in FlyDSL M... | @AMD-yanfeiwang | draft | 2026-04-16 | 2026-08-02 |
| [#3923](https://github.com/ROCm/aiter/pull/3923) | change default pa reduce kernel from cxx to flydsl | @Bernard-Liu | open | 2026-06-25 | 2026-08-02 |
| [#3858](https://github.com/ROCm/aiter/pull/3858) | [triton] [mha]: split-D forward for non-power-of-2 head_dim | @roberteg16 | open | 2026-06-22 | 2026-08-02 |
| [#3810](https://github.com/ROCm/aiter/pull/3810) | Port/aakbarza/flydsl blockmoe fusion | @amirakb89 | open | 2026-06-19 | 2026-08-02 |
| [#3800](https://github.com/ROCm/aiter/pull/3800) | [gfx950] Add JIT grouped_gemm_mxfp8 for MXFP8 prefill MoE | @fanxingran | open | 2026-06-18 | 2026-08-02 |
| [#3783](https://github.com/ROCm/aiter/pull/3783) | [Small_M_GEMM_GroupGEMM_MXFP8] Decode small-M MX-FP8 GEMM an... | @JohnQinAMD | open | 2026-06-17 | 2026-08-02 |
| [#3749](https://github.com/ROCm/aiter/pull/3749) | CK Tile integration into a8w8 gemm | @zsotakal | open | 2026-06-16 | 2026-08-02 |
| [#3739](https://github.com/ROCm/aiter/pull/3739) | configs: add DSv3-MXFP4 E=33/topk9 fused-MoE shape (shared-e... | @rbrugaro-amd | open | 2026-06-15 | 2026-08-02 |
| [#3733](https://github.com/ROCm/aiter/pull/3733) | Update 3rdparty commit to take into account instances for th... | @damien-lejeune | open | 2026-06-15 | 2026-08-02 |
| [#3718](https://github.com/ROCm/aiter/pull/3718) | Yhl/gptoss pa asm shuf repro 20260611 | @yhl-amd | open | 2026-06-15 | 2026-08-02 |
| [#3706](https://github.com/ROCm/aiter/pull/3706) | [fix](pa): add prebuild for pa_ps | @PerryZhang01 | open | 2026-06-13 | 2026-08-02 |
| [#3698](https://github.com/ROCm/aiter/pull/3698) | [Triton] unified_attention: mask V load and output store by ... | @reger-men | open | 2026-06-12 | 2026-08-02 |
| [#3639](https://github.com/ROCm/aiter/pull/3639) | Gfx1250 moe 2mode e2e v1 yadai tmp | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3628](https://github.com/ROCm/aiter/pull/3628) | Gfx1250 moe 2mode e2e v1 yadai | @yadaish | open | 2026-06-09 | 2026-08-02 |
| [#3617](https://github.com/ROCm/aiter/pull/3617) | Fix pa_mqa_logits MI300X divide-by-zero for small TileQCount | @ysmkone | draft | 2026-06-08 | 2026-08-02 |
| [#3613](https://github.com/ROCm/aiter/pull/3613) | [Triton] [Gluon] [GFX12] mHC_post_pre kernel | @k50112113 | draft | 2026-06-08 | 2026-08-02 |
| [#3606](https://github.com/ROCm/aiter/pull/3606) | [Bugfix][MLA] Correct final_lse in PS MLA prefill kernel for... | @simondanielsson | open | 2026-06-08 | 2026-08-02 |
| [#3602](https://github.com/ROCm/aiter/pull/3602) | [FLYDSL] Optimize GDR prefill chunk_gdn_fwd_h for MI35X | @huizzhan | open | 2026-06-08 | 2026-08-02 |
| [#3600](https://github.com/ROCm/aiter/pull/3600) | Update flydsl to 0.2.0.dev20260608+c957349 | @xudoyuan | open | 2026-06-08 | 2026-08-02 |
| [#3591](https://github.com/ROCm/aiter/pull/3591) | [hotfix] always use fp4x2 for swiglu separated per_1x32 path | @yadaish | open | 2026-06-08 | 2026-08-02 |
| [#3585](https://github.com/ROCm/aiter/pull/3585) | [op_tests] Refactor MoE legacy UT into per-quant smoke sweep | @zhiding512 | open | 2026-06-07 | 2026-08-02 |
| [#3583](https://github.com/ROCm/aiter/pull/3583) | [feat] FP8 (DeepSeek-V4 layout) sparse paged prefill attenti... | @carlushuang | open | 2026-06-07 | 2026-08-02 |
| [#3578](https://github.com/ROCm/aiter/pull/3578) | ci: add paired-release validation gate workflow (AITER+ATOM ... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3573](https://github.com/ROCm/aiter/pull/3573) | CI: add retry logic for Aiter wheel artifact downloads | @Copilot | draft | 2026-06-06 | 2026-08-02 |
| [#3571](https://github.com/ROCm/aiter/pull/3571) | ci(sglang-downstream): add MoRI EP accuracy gate (guards moe... | @sunway513 | open | 2026-06-06 | 2026-08-02 |
| [#3567](https://github.com/ROCm/aiter/pull/3567) | [Triton] [GFX12]] non-MLA fused_kv_cache | @k50112113 | draft | 2026-06-05 | 2026-08-02 |
| [#3564](https://github.com/ROCm/aiter/pull/3564) | [TRITON] Clean-up pa_mqa_logits (deepgemm attention) benchma... | @cagrikymk | open | 2026-06-05 | 2026-08-02 |
| [#3557](https://github.com/ROCm/aiter/pull/3557) | feat(pa): enable paged-attention on gfx1201 (RDNA4) via WMMA | @stevenshenyj | draft | 2026-06-05 | 2026-08-02 |
| [#3556](https://github.com/ROCm/aiter/pull/3556) | Fix e8m0 conversion to fp32 | @Arech8 | open | 2026-06-05 | 2026-08-02 |
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
| [#3457](https://github.com/ROCm/aiter/pull/3457) | Fused SplitK zero-init for FP8 a8w8 blockscale GEMMs (y_is_z... | @samremes | open | 2026-06-01 | 2026-08-02 |
| [#3456](https://github.com/ROCm/aiter/pull/3456) | [TRITON][GLUON] Add Triton and Gluon kernels for DSv4 compre... | @leonling-ll | draft | 2026-06-01 | 2026-08-02 |
| [#3446](https://github.com/ROCm/aiter/pull/3446) | revert back the copilot extra operation in pr 3338 ci: remov... | @shengnxu | open | 2026-06-01 | 2026-08-02 |
| [#3439](https://github.com/ROCm/aiter/pull/3439) | sglang downstream: run 8-GPU tests on the DO MI350X runner l... | @okakarpa | open | 2026-05-30 | 2026-08-02 |
| [#3430](https://github.com/ROCm/aiter/pull/3430) | Add native integer all-gather dtype support and optimize gfx... | @hubertlu-tw | open | 2026-05-29 | 2026-08-02 |
| [#3418](https://github.com/ROCm/aiter/pull/3418) | Add PER_TOKEN_HEAD FP8 quantization and P-scale for mha_batc... | @msaffari-amd | open | 2026-05-29 | 2026-08-02 |
| [#3409](https://github.com/ROCm/aiter/pull/3409) | mla | @feifei14119 | draft | 2026-05-29 | 2026-08-02 |
| [#3389](https://github.com/ROCm/aiter/pull/3389) | Add Qwen-Image-Edit FP8 a8w8 bpreshuffle GEMM tune configs f... | @LiuYinfeng01 | open | 2026-05-28 | 2026-08-02 |
| [#3379](https://github.com/ROCm/aiter/pull/3379) | Gate opus fp8 code for gfx1100 | @Calandracas606 | open | 2026-05-28 | 2026-08-02 |
| [#3355](https://github.com/ROCm/aiter/pull/3355) | [gluon gemm_afp4wfp4] Fix data access pattern to remove redu... | @Arech8 | open | 2026-05-26 | 2026-08-02 |
| [#3321](https://github.com/ROCm/aiter/pull/3321) | [FlyDSL AOT] Skip kernels for unrequested arches when GPU_AR... | @eppaneamd | open | 2026-05-24 | 2026-08-02 |
| [#3308](https://github.com/ROCm/aiter/pull/3308) | Replace fmha with a new kernel | @JohnNikolay84 | draft | 2026-05-22 | 2026-08-02 |
| [#3286](https://github.com/ROCm/aiter/pull/3286) | [Triton] [ATOM] DSV4 mxfp8 GEMM | @k50112113 | draft | 2026-05-20 | 2026-08-02 |
| [#3262](https://github.com/ROCm/aiter/pull/3262) | Unified Attention Sparse MLA FP8 | @anhminhnguyenhoang | draft | 2026-05-19 | 2026-08-02 |
| [#3260](https://github.com/ROCm/aiter/pull/3260) | Revert "CI: use vultr 325 runner labels" | @gyohuangxin | open | 2026-05-19 | 2026-08-02 |
| [#3248](https://github.com/ROCm/aiter/pull/3248) | add mla qseqlen4 causal mask related changes | @antsaukk | draft | 2026-05-18 | 2026-08-02 |
| [#3200](https://github.com/ROCm/aiter/pull/3200) | hsa/codegen: guard pd.set_option for unsupported pandas vers... | @tenpercent | open | 2026-05-14 | 2026-08-02 |
| [#3169](https://github.com/ROCm/aiter/pull/3169) |  MTP + kv cache fp8 + shuffled KV layout support | @waqahmed-amd-fi | draft | 2026-05-13 | 2026-08-02 |
| [#4158](https://github.com/ROCm/aiter/pull/4158) | Remove deprecated offset arg from tdm.async_gather calls on ... | @Liang-jianhao97 | open | 2026-07-09 | 2026-08-02 |
| [#4127](https://github.com/ROCm/aiter/pull/4127) | Add Opus PA decode skeleton with self-contained sp3 MFMA ker... | @fangche123 | open | 2026-07-08 | 2026-08-02 |
| [#4049](https://github.com/ROCm/aiter/pull/4049) | Gluon Fused Dynamic mxfp4 Quant Moe Sort for gfx1250 | @amd-jrosas | open | 2026-07-01 | 2026-08-02 |
| [#4021](https://github.com/ROCm/aiter/pull/4021) | [2-stages MOE][gfx950/gfx942] Support NVFP4-BF16 mixed-preci... | @fxmarty-amd | open | 2026-06-30 | 2026-08-02 |
| [#4011](https://github.com/ROCm/aiter/pull/4011) | perf: add fixed-tile HGEMM candidate | @ftyghome | open | 2026-06-30 | 2026-08-02 |
| [#4000](https://github.com/ROCm/aiter/pull/4000) | fix: optimize MXFP4 a4w4 MoE dispatch for MiniMax-M2.1-MXFP4 | @thpereir | open | 2026-06-29 | 2026-08-02 |
| [#3993](https://github.com/ROCm/aiter/pull/3993) | mla_decode_fwd: wire is_causal through Python and C++ dispat... | @alexioslyrakis-amd | open | 2026-06-29 | 2026-08-02 |
| [#3987](https://github.com/ROCm/aiter/pull/3987) | [FlyDSL] Add FlyDSL FP8 MoE kernels (decode weight-decompres... | @luocheng25 | open | 2026-06-29 | 2026-08-02 |
| [#3979](https://github.com/ROCm/aiter/pull/3979) | [op_tests] add whole-block GPT-OSS attention test | @carlushuang | open | 2026-06-29 | 2026-08-02 |
| [#3976](https://github.com/ROCm/aiter/pull/3976) | [FlyDSL] Implement flash attention backward kernel | @waqahmed-amd-fi | draft | 2026-06-28 | 2026-08-02 |
| [#3973](https://github.com/ROCm/aiter/pull/3973) | [CK] Fix MoE 2-stage dispatch for non-128-divisible inter_di... | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
| [#3972](https://github.com/ROCm/aiter/pull/3972) |  Add gelu_tanh activation to no-quant CK 2-stage fused MoE | @jonahbernard | open | 2026-06-27 | 2026-08-02 |
| [#3962](https://github.com/ROCm/aiter/pull/3962) | [Kernel][Perf] split-K long-context decode for shuffled fp8 ... | @reger-men | open | 2026-06-26 | 2026-08-02 |
| [#3959](https://github.com/ROCm/aiter/pull/3959) | [Kernel][Triton] sliding-window decode over shuffled fp8 pag... | @reger-men | open | 2026-06-26 | 2026-08-02 |
| [#3944](https://github.com/ROCm/aiter/pull/3944) | Dev/fly pa reduce jit build | @Bernard-Liu | open | 2026-06-26 | 2026-08-02 |
| [#3941](https://github.com/ROCm/aiter/pull/3941) | Feat/flydsl mxfp4 gemm | @lizamd | open | 2026-06-26 | 2026-08-02 |
| [#3940](https://github.com/ROCm/aiter/pull/3940) | [Triton] Add fused_gemm_a16w16_split_cat | @rbrugaro-amd | open | 2026-06-25 | 2026-08-02 |
| [#3939](https://github.com/ROCm/aiter/pull/3939) | Map top-left map to bottom-right for self-attn | @Micky774 | open | 2026-06-25 | 2026-08-02 |
| [#3938](https://github.com/ROCm/aiter/pull/3938) | gate custom all-reduce on XGMI topology | @skysnow2001 | open | 2026-06-25 | 2026-08-02 |
| [#3937](https://github.com/ROCm/aiter/pull/3937) | Gluon MXFP4 Fuse Reduce Quant | @amd-jrosas | open | 2026-06-25 | 2026-08-02 |
| [#3936](https://github.com/ROCm/aiter/pull/3936) | Spatial Attention: XCD-aware spatial workgroup mapping for M... | @mc186 | open | 2026-06-25 | 2026-08-02 |
| [#3926](https://github.com/ROCm/aiter/pull/3926) | Feat/gfx942 flydsl mxfp4 moe | @msaffari-amd | draft | 2026-06-25 | 2026-08-02 |
| [#3907](https://github.com/ROCm/aiter/pull/3907) | [FlyDSL] [gfx1250] gather moe support | @XingerZhu | open | 2026-06-24 | 2026-08-02 |
| [#3901](https://github.com/ROCm/aiter/pull/3901) | [FLYDSL] add MLA reduce decode kernel for gfx942 | @anhminhnguyenhoang | open | 2026-06-24 | 2026-08-02 |
| [#3897](https://github.com/ROCm/aiter/pull/3897) | [gfx1250][FLYDSL]moe gemm tune | @Zzz9990 | draft | 2026-06-24 | 2026-08-02 |
| [#3896](https://github.com/ROCm/aiter/pull/3896) | Fix HIP fp8 paged-attention kPerHead scale OOB page fault. | @JohnNikolay84 | open | 2026-06-24 | 2026-08-02 |
| [#3876](https://github.com/ROCm/aiter/pull/3876) | [Feature][HIP] Support fused shared expert topk append | @yuychang | open | 2026-06-23 | 2026-08-02 |
| [#3870](https://github.com/ROCm/aiter/pull/3870) | feat(mha): add FlyDSL BSHD batch-mode dispatch for gfx1250 | @jli-melchior | open | 2026-06-23 | 2026-08-02 |
| [#3854](https://github.com/ROCm/aiter/pull/3854) | Add conv2d implicit GEMM kernel (gfx942) | @chuanbowang2026 | open | 2026-06-22 | 2026-08-02 |
| [#3836](https://github.com/ROCm/aiter/pull/3836) | [DSV4] Add fp32-output untuned GEMM shapes for indexer kv_sc... | @AMD-yanfeiwang | open | 2026-06-22 | 2026-08-02 |
| [#3835](https://github.com/ROCm/aiter/pull/3835) | Dev/dsv4 a4w4 tuned | @Bernard-Liu | open | 2026-06-22 | 2026-08-02 |
| [#3818](https://github.com/ROCm/aiter/pull/3818) | Flydsl moe 4gib fix | @IzacharyI | open | 2026-06-20 | 2026-08-02 |
| [#3817](https://github.com/ROCm/aiter/pull/3817) | perf: optimize fused AllReduce + RMSNorm (custom_all_reduce) | @ftyghome | open | 2026-06-20 | 2026-08-02 |
| [#3813](https://github.com/ROCm/aiter/pull/3813) | Simplify ck_gemm_a8w8_blockscale GemmSpecialization construc... | @jbelloncastro | open | 2026-06-19 | 2026-08-02 |
| [#3809](https://github.com/ROCm/aiter/pull/3809) | Qwen3.5-397B-A17B MXFP4: add tuned flydsl fused-MoE config (... | @jiangyon-amd | open | 2026-06-19 | 2026-08-02 |
| [#3801](https://github.com/ROCm/aiter/pull/3801) | [feature] Extract C++ code to jinja template files | @jbelloncastro | open | 2026-06-18 | 2026-08-02 |
| [#3787](https://github.com/ROCm/aiter/pull/3787) | [FlyDSL] Port compress_attn kernels to gfx1250 (wave32) | @jli-melchior | open | 2026-06-18 | 2026-08-02 |
| [#3785](https://github.com/ROCm/aiter/pull/3785) | [fea] Add fp32 RMSNorm output for fused qk group quant | @wuhuikx | open | 2026-06-18 | 2026-08-02 |
| [#3774](https://github.com/ROCm/aiter/pull/3774) | [gfx1250][FlyDSL]opt conc1 moe. | @lalala-sh | open | 2026-06-17 | 2026-08-02 |
| [#3771](https://github.com/ROCm/aiter/pull/3771) | fix: disable EP topk-1 strip | @JiaoliangYu | draft | 2026-06-17 | 2026-08-02 |
| [#3766](https://github.com/ROCm/aiter/pull/3766) | Fix batched_gemm_a16wfp4 split-K garbage output / OOB for sm... | @srinivamd | open | 2026-06-17 | 2026-08-02 |
| [#3763](https://github.com/ROCm/aiter/pull/3763) | Update flydsl to 0.2.2.dev658 | @xudoyuan | open | 2026-06-17 | 2026-08-02 |
| [#3746](https://github.com/ROCm/aiter/pull/3746) | Add EP MoE Tuning Workflow and Test Coverage | @BangBOOM | open | 2026-06-16 | 2026-08-02 |
| [#3721](https://github.com/ROCm/aiter/pull/3721) | [FLYDSL] Rebase flydsl hgemm kernels with mixed policies | @xytpai | open | 2026-06-15 | 2026-08-02 |
| [#3694](https://github.com/ROCm/aiter/pull/3694) | Pass --targets to ck-tile generate.py for non-gfx9 hosts | @menglcai | open | 2026-06-12 | 2026-08-02 |
| [#3690](https://github.com/ROCm/aiter/pull/3690) | [TRITON] Sparge vfa | @Chi-Chu319 | open | 2026-06-12 | 2026-08-02 |
| [#3686](https://github.com/ROCm/aiter/pull/3686) | [DO NOT MERGE][TRITON] Evaluating impact of LLVM bump in Tri... | @brunomazzottiamd | open | 2026-06-11 | 2026-08-02 |
| [#3685](https://github.com/ROCm/aiter/pull/3685) | Moe a8w4 multicast | @Boss2002n | draft | 2026-06-11 | 2026-08-02 |
| [#3682](https://github.com/ROCm/aiter/pull/3682) | Fix the mla bf16 16mx4 kernel random nan error in MI350 | @minmengdie | open | 2026-06-11 | 2026-08-02 |
| [#3662](https://github.com/ROCm/aiter/pull/3662) | [config] add tuned files for minimax-m2.5 PTPC fp8 model | @gbyu-amd | open | 2026-06-10 | 2026-08-02 |
| [#3653](https://github.com/ROCm/aiter/pull/3653) | [Perf] Add Qwen3-32B-FP8 tuned configs for MI308X | @ningding01 | open | 2026-06-10 | 2026-08-02 |
| [#3645](https://github.com/ROCm/aiter/pull/3645) | Add env overrides for unified attention tuning | @akii96 | draft | 2026-06-10 | 2026-08-02 |
| [#4273](https://github.com/ROCm/aiter/pull/4273) | [FlyDSL] Add a strided-batched variant (BMM) of the A8W8 blo... | @xiangM99 | open | 2026-07-17 | 2026-08-02 |
| [#4268](https://github.com/ROCm/aiter/pull/4268) | [Triton] Add fused AdaLN-Zero (layernorm + scale/shift) kern... | @sushildubey171 | open | 2026-07-16 | 2026-08-02 |
| [#4265](https://github.com/ROCm/aiter/pull/4265) | [Triton] Enable conv2d Triton kernels for gfx1100 (RDNA3) an... | @saeid-rostami | open | 2026-07-16 | 2026-08-02 |
| [#4254](https://github.com/ROCm/aiter/pull/4254) | Mxfp8 gemm  | @solinzby1 | open | 2026-07-16 | 2026-08-02 |
| [#4242](https://github.com/ROCm/aiter/pull/4242) | [gfx1151] [triton-fa]: tune FlashAttention backward configs | @hogeheer499-commits | open | 2026-07-14 | 2026-08-02 |
| [#4240](https://github.com/ROCm/aiter/pull/4240) | Make shuffle_scale_moe arch-agnostic  (Fix non-gfx950/gfx125... | @skysnow2001 | open | 2026-07-14 | 2026-08-02 |
| [#4238](https://github.com/ROCm/aiter/pull/4238) | fix gemm a16w8/a8w8 scale regression | @yanxuer-999 | open | 2026-07-14 | 2026-08-02 |
| [#4232](https://github.com/ROCm/aiter/pull/4232) | [gfx942] Add native-fp8-MFMA Gluon fp8_mqa_logits kernel | @haosdent | open | 2026-07-14 | 2026-08-02 |
| [#4228](https://github.com/ROCm/aiter/pull/4228) | [Perf][gfx1250]update tuned flydsl moe | @lalala-sh | open | 2026-07-14 | 2026-08-02 |
| [#4223](https://github.com/ROCm/aiter/pull/4223) | Tune & include fuse-aware gfx950 fused GEMM A8W8 blockscale ... | @nidal567 | open | 2026-07-13 | 2026-08-02 |
| [#4222](https://github.com/ROCm/aiter/pull/4222) | a16w16 gemm tuned dsv4 pro shapes | @ahmed-bsod | open | 2026-07-13 | 2026-08-02 |
| [#4221](https://github.com/ROCm/aiter/pull/4221) | Paged mla indexer | @fhuizing | open | 2026-07-13 | 2026-08-02 |
| [#4219](https://github.com/ROCm/aiter/pull/4219) | support test csv | @yadaish | open | 2026-07-13 | 2026-08-02 |
| [#4214](https://github.com/ROCm/aiter/pull/4214) | fix gfx12 ENABLE_Ck0 cmp err | @feifei14119 | open | 2026-07-13 | 2026-08-02 |
| [#4213](https://github.com/ROCm/aiter/pull/4213) | fea: support add fused allreduce | @TennyWang1223 | open | 2026-07-13 | 2026-08-02 |
| [#4211](https://github.com/ROCm/aiter/pull/4211) | CI: make `check-signal` neutral on pre-check failure and gat... | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4209](https://github.com/ROCm/aiter/pull/4209) | [WIP] [FlyDSL] [Simplify] Simplify qk_norm_rope_quant kernel... | @jli-melchior | open | 2026-07-13 | 2026-08-02 |
| [#4208](https://github.com/ROCm/aiter/pull/4208) | fix: apply Black formatting to FlyDSL BMM W8A8 GFX1250 files | @Copilot | draft | 2026-07-13 | 2026-08-02 |
| [#4207](https://github.com/ROCm/aiter/pull/4207) | op_tests: IFOE cross-node custom all-reduce (module_custom_a... | @carlushuang | open | 2026-07-12 | 2026-08-02 |
| [#4203](https://github.com/ROCm/aiter/pull/4203) | [tune] DSv4(DP8TP8) FP8 a8w8 blockscale BpreShuffle and a16w... | @Fyzyukk | open | 2026-07-12 | 2026-08-02 |
| [#4191](https://github.com/ROCm/aiter/pull/4191) | Omuhamma/tune a8w8 | @omuhamma | draft | 2026-07-10 | 2026-08-02 |
| [#4190](https://github.com/ROCm/aiter/pull/4190) | [gfx950][gluon] Correct A8W8 default config to avoid accumul... | @MrSidims | open | 2026-07-10 | 2026-08-02 |
| [#4182](https://github.com/ROCm/aiter/pull/4182) | CI: add SGLang DSV4Pro FP8 1P1D workflow | @gyohuangxin | draft | 2026-07-10 | 2026-08-02 |
| [#4181](https://github.com/ROCm/aiter/pull/4181) | Fix ragged-K mask in batched A16WFP4 GEMM | @mjkvaak-amd | open | 2026-07-10 | 2026-08-02 |
| [#4180](https://github.com/ROCm/aiter/pull/4180) | feat(gfx950): config-gated BLOCK_Q fp8_mqa_logits for DSA in... | @YukioZzz | open | 2026-07-10 | 2026-08-02 |
| [#4170](https://github.com/ROCm/aiter/pull/4170) | moe a8w4: GUGU act+quant fusion  | @Boss2002n | open | 2026-07-10 | 2026-08-02 |
| [#4166](https://github.com/ROCm/aiter/pull/4166) | WP-G1: Replace CK FP8 rowwise GEMM with FlyDSL preshuffle ke... | @kudomcho | open | 2026-07-09 | 2026-08-02 |
| [#4165](https://github.com/ROCm/aiter/pull/4165) | [gfx1250] [flydsl] moe ep | @XingerZhu | open | 2026-07-09 | 2026-08-02 |
| [#4146](https://github.com/ROCm/aiter/pull/4146) | [GFX1250] fused_add_rmsnorm_pad() gluon equivalent function | @amd-jrosas | open | 2026-07-08 | 2026-08-02 |
| [#4145](https://github.com/ROCm/aiter/pull/4145) | Block pointers only support 32 bit error | @jpvillam-amd | open | 2026-07-08 | 2026-08-02 |
| [#4141](https://github.com/ROCm/aiter/pull/4141) | gemma4w4 split-k bug | @amirumoAMD | draft | 2026-07-08 | 2026-08-02 |
| [#4140](https://github.com/ROCm/aiter/pull/4140) | [TRITON] Tuned GFX1201 DSV4-Flash FP16 and FP8 GEMMs for ATO... | @skysnow2001 | open | 2026-07-08 | 2026-08-02 |
| [#4136](https://github.com/ROCm/aiter/pull/4136) | [FlyDSL] jagged_dense_bmm_broadcast_add (MI300X) | @anhminhnguyenhoang | open | 2026-07-08 | 2026-08-02 |
| [#4124](https://github.com/ROCm/aiter/pull/4124) | torch-free a4w4 GEMM + C++ library build | @Micky774 | open | 2026-07-07 | 2026-08-02 |
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
| [#4072](https://github.com/ROCm/aiter/pull/4072) | [Bugfix][Build] Grouped MoE build should respect GPU_ARCHS | @simondanielsson | open | 2026-07-03 | 2026-08-02 |
| [#4065](https://github.com/ROCm/aiter/pull/4065) | feat(attention): head-dim-tiled Triton flash attention for V... | @carlushuang | open | 2026-07-02 | 2026-08-02 |
| [#4062](https://github.com/ROCm/aiter/pull/4062) | docs(python): condense verbose comments (comments-only, no c... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4061](https://github.com/ROCm/aiter/pull/4061) | docs(csrc): condense verbose comments (comments-only, no cod... | @carlushuang | draft | 2026-07-02 | 2026-08-02 |
| [#4058](https://github.com/ROCm/aiter/pull/4058) | [Triton][GDN] Add in-place state scatter + h output to VK ch... | @hsthe29 | open | 2026-07-02 | 2026-08-02 |
| [#4057](https://github.com/ROCm/aiter/pull/4057) | [Triton][GDN] Support V-major (hvk) state layout in decode k... | @hsthe29 | open | 2026-07-02 | 2026-08-02 |
| [#4041](https://github.com/ROCm/aiter/pull/4041) | [fix](moe): fix the accuracy M=1 in qwen3.5 | @PerryZhang01 | open | 2026-07-01 | 2026-08-02 |
| [#4023](https://github.com/ROCm/aiter/pull/4023) | feat(prezero): fuse split-K GEMM output zeroing into the pre... | @ColorsWind | open | 2026-06-30 | 2026-08-02 |
| [#4019](https://github.com/ROCm/aiter/pull/4019) | fix: increase check_signal.sh retry budget from 5 to 60 atte... | @Copilot | draft | 2026-06-30 | 2026-08-02 |
| [#4016](https://github.com/ROCm/aiter/pull/4016) | [GDN] Add gdn_chunk_prepare: fused intra-chunk GDN prefill p... | @jayzlee147 | open | 2026-06-30 | 2026-08-02 |
| [#4007](https://github.com/ROCm/aiter/pull/4007) | fix(topk): add __threadfence before cross-block barrier in r... | @Jasen2201 | open | 2026-06-30 | 2026-08-02 |
| [#3989](https://github.com/ROCm/aiter/pull/3989) | add assertion for oob check | @Bernard-Liu | open | 2026-06-29 | 2026-08-02 |
| [#4440](https://github.com/ROCm/aiter/pull/4440) | [DSV4][Triton] Support block sizes > 1 in paged MQA logits | @skysnow2001 | open | 2026-07-29 | 2026-08-02 |
| [#4433](https://github.com/ROCm/aiter/pull/4433) | perf: fuse A2 quant for DSV4 FlyDSL EP | @kkHuang-amd | open | 2026-07-29 | 2026-08-02 |
| [#4426](https://github.com/ROCm/aiter/pull/4426) | Fix/gfx1250 a8w4 async gather api | @yhl-amd | open | 2026-07-28 | 2026-08-02 |
| [#4388](https://github.com/ROCm/aiter/pull/4388) | Specialize batch prefill for paged KV layout | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4387](https://github.com/ROCm/aiter/pull/4387) | Limit attention kernel dispatch to supported GPUs | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4386](https://github.com/ROCm/aiter/pull/4386) | test: use flydsl==0.3.0.dev20260725+7f363ef from devreleases... | @xudoyuan | open | 2026-07-26 | 2026-08-02 |
| [#4385](https://github.com/ROCm/aiter/pull/4385) | [Bugfix][Triton] Avoid RDNA4 unified attention LDS overflow | @hogeheer499-commits | open | 2026-07-25 | 2026-08-02 |
| [#4383](https://github.com/ROCm/aiter/pull/4383) |  [TRITON] Add gluon support for MXFP4 quant kernel in gfx950... | @NimitPtl | open | 2026-07-24 | 2026-08-02 |
| [#4382](https://github.com/ROCm/aiter/pull/4382) | [TRITON][GLUON][GFX950][DSV4] Paged Sparse Attention Gluon K... | @cagrikymk | open | 2026-07-24 | 2026-08-02 |
| [#4378](https://github.com/ROCm/aiter/pull/4378) | [MLA] Deterministic single-split decode option for reproduci... | @MohitAMD | open | 2026-07-24 | 2026-08-02 |
| [#4376](https://github.com/ROCm/aiter/pull/4376) | feat(topk): deterministic tie-break-by-token-id for sparse-M... | @yhl-amd | open | 2026-07-24 | 2026-08-02 |
| [#4371](https://github.com/ROCm/aiter/pull/4371) | Implement FlyDSL version of fused_qk_norm_mrope_3d_cache_pts... | @amd-meskelin | draft | 2026-07-24 | 2026-08-02 |
| [#4370](https://github.com/ROCm/aiter/pull/4370) | [MI355] add 128x128 block-scales fp8 8wave moe/gemm kernels ... | @tingqli | draft | 2026-07-24 | 2026-08-02 |
| [#4365](https://github.com/ROCm/aiter/pull/4365) | [Bugfix][MLA] Gate gfx942 native qh64 fp8 decode to page_siz... | @MohitAMD | open | 2026-07-24 | 2026-08-02 |
| [#4359](https://github.com/ROCm/aiter/pull/4359) | Swap the cache config for the default cases of gfx1250-GEMM-... | @jpvillam-amd | open | 2026-07-23 | 2026-08-02 |
| [#4357](https://github.com/ROCm/aiter/pull/4357) | Chefang mha global load | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4351](https://github.com/ROCm/aiter/pull/4351) | fix(mla): refresh gfx950 MLA HSACO batch for large page_id | @fangche123 | open | 2026-07-23 | 2026-08-02 |
| [#4344](https://github.com/ROCm/aiter/pull/4344) | [GLM-5.2-MXFP4] Retune fMoE kernels with FLAT support | @nholmber | draft | 2026-07-23 | 2026-08-02 |
| [#4340](https://github.com/ROCm/aiter/pull/4340) | Add native Windows RDNA HIP and CK support | @Yasei-no-otoko | open | 2026-07-23 | 2026-08-02 |
| [#4334](https://github.com/ROCm/aiter/pull/4334) | perf(fp8_mqa_logits): runtime-autotune the gfx942 indexer ti... | @EricKing626 | open | 2026-07-22 | 2026-08-02 |
| [#4332](https://github.com/ROCm/aiter/pull/4332) | feat(flydsl): Add paged-attention Tile kernel | @fsx950223 | open | 2026-07-22 | 2026-08-02 |
| [#4315](https://github.com/ROCm/aiter/pull/4315) | [Fix][FlyDSL] Handle remainder workgroups in MoE XCD swizzle | @Fangzhou-Ai | open | 2026-07-21 | 2026-08-02 |
| [#4306](https://github.com/ROCm/aiter/pull/4306) | Add basic HIP/CK JIT kernel support in Windows | @menglcai | open | 2026-07-20 | 2026-08-02 |
| [#4300](https://github.com/ROCm/aiter/pull/4300) | fmoe run_config: align per_1x32 fp4/fp8 dispatch with test_m... | @yzhou103 | open | 2026-07-20 | 2026-08-02 |
| [#4293](https://github.com/ROCm/aiter/pull/4293) | [Bugfix][Triton] Correct ragged paged-MQA causal masks | @morluto | open | 2026-07-19 | 2026-08-02 |
| [#4292](https://github.com/ROCm/aiter/pull/4292) | [Bugfix][Triton] Quantize zero SageAttention V channels with... | @morluto | open | 2026-07-19 | 2026-08-02 |
| [#4291](https://github.com/ROCm/aiter/pull/4291) | [Bugfix][Triton] Define zero-row and padded FP8/int8 quantiz... | @morluto | open | 2026-07-19 | 2026-08-02 |
| [#4287](https://github.com/ROCm/aiter/pull/4287) | perf(gfx1250): tune moe_gemm_a8w4 gluon config for DeepSeek-... | @amd-hhashemi | open | 2026-07-19 | 2026-08-02 |
| [#4281](https://github.com/ROCm/aiter/pull/4281) | [opt][gfx1250] Add TDM deep-prefetch BF16 prefill for qk_nor... | @jli-melchior | open | 2026-07-17 | 2026-08-02 |
| [#4279](https://github.com/ROCm/aiter/pull/4279) | mhc bf16 compute optimize on gfx12xx | @junhaha666 | draft | 2026-07-17 | 2026-08-02 |
| [#4278](https://github.com/ROCm/aiter/pull/4278) | [gfx1250][perf][moe]Optimize prefill perf | @lalala-sh | open | 2026-07-17 | 2026-08-02 |
| [#4277](https://github.com/ROCm/aiter/pull/4277) | Dev/gugu fix | @yadaish | open | 2026-07-17 | 2026-08-02 |
| [#4276](https://github.com/ROCm/aiter/pull/4276) | Add Kimi-K2.6 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-02 |
| [#4275](https://github.com/ROCm/aiter/pull/4275) | Add MiniMax-M3 model in Aiter - ATOM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-02 |
| [#4274](https://github.com/ROCm/aiter/pull/4274) | Add MiniMax-M3 model in Aiter - vLLM DI CI | @gyohuangxin | draft | 2026-07-17 | 2026-08-02 |
| [#4255](https://github.com/ROCm/aiter/pull/4255) | fix(triton): support paged MQA logits on gfx1201 | @liminfei-amd | open | 2026-07-16 | 2026-08-02 |
| [#4252](https://github.com/ROCm/aiter/pull/4252) | [FIX] Expert Map Parallel | @amirumoAMD | open | 2026-07-15 | 2026-08-02 |
| [#4249](https://github.com/ROCm/aiter/pull/4249) | [TRITON] fused clamped-alpha SwiGLU gate activation (MiniMax... | @Chi-Chu319 | open | 2026-07-15 | 2026-08-02 |
| [#4246](https://github.com/ROCm/aiter/pull/4246) | gfx1250 opus gemm splitk fuse | @demonsan | open | 2026-07-15 | 2026-08-02 |
| [#4234](https://github.com/ROCm/aiter/pull/4234) | [gfx1100] Add gfx1100 (RDNA3) tuned Triton A16W16 GEMM confi... | @WhatGhost | open | 2026-07-14 | 2026-08-02 |
| [#4493](https://github.com/ROCm/aiter/pull/4493) | [triton-mha] add gfx1101 tuning config | @Ragua1 | open | 2026-07-31 | 2026-08-02 |
| [#4484](https://github.com/ROCm/aiter/pull/4484) | Flash Attention Ck  CI smoke test | @micmelesse | draft | 2026-07-31 | 2026-08-02 |
| [#4471](https://github.com/ROCm/aiter/pull/4471) | [FlyDSL] Support SiTUv2 in the packed-int4 MoE stage1 epilog... | @maeehart | open | 2026-07-30 | 2026-08-02 |
| [#4470](https://github.com/ROCm/aiter/pull/4470) | add more fine grained tuning based on M | @lburzawa | open | 2026-07-30 | 2026-08-02 |
| [#4469](https://github.com/ROCm/aiter/pull/4469) | Tune gfx950 GEMM A16W16 configs for Triton TOT | @nidal567 | open | 2026-07-30 | 2026-08-02 |
| [#4466](https://github.com/ROCm/aiter/pull/4466) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-30 | 2026-08-02 |
| [#4462](https://github.com/ROCm/aiter/pull/4462) | [FMHA] Fix mha_varlen_fwd paged codegen branch | @ZJLi2013 | open | 2026-07-30 | 2026-08-02 |
| [#4461](https://github.com/ROCm/aiter/pull/4461) | wvSplitKQ: support per-token/per-channel scales | @mqhc2020 | draft | 2026-07-30 | 2026-08-02 |
| [#4458](https://github.com/ROCm/aiter/pull/4458) | CI: add extended test workflow | @gyohuangxin | draft | 2026-07-30 | 2026-08-02 |
| [#4453](https://github.com/ROCm/aiter/pull/4453) | [gfx950] Tune batched_gemm_a8w8 per-token-group for large M ... | @Jacob0226 | draft | 2026-07-30 | 2026-08-02 |
| [#4451](https://github.com/ROCm/aiter/pull/4451) | Work around all-zero fused MoE output at block_m=32 | @jatseng-ai | open | 2026-07-30 | 2026-08-02 |
| [#4448](https://github.com/ROCm/aiter/pull/4448) | Plumb split-K through the a8w8 blockscale bpreshuffle GEMM | @Raiden-Makoto | draft | 2026-07-29 | 2026-08-02 |
| [#4447](https://github.com/ROCm/aiter/pull/4447) | [Bugfix][Triton] Set the _get_config memo only after the con... | @Ragua1 | open | 2026-07-29 | 2026-08-02 |
| [#4446](https://github.com/ROCm/aiter/pull/4446) | [TRITON/GLUON]: Add moe_a16w4 gfx1250 gluon kernel | @rahulbatra85 | open | 2026-07-29 | 2026-08-02 |
| [#4445](https://github.com/ROCm/aiter/pull/4445) | [Triton] [Gluon] [GFX12] Re-enable FP4 KV cache for UA and M... | @k50112113 | open | 2026-07-29 | 2026-08-02 |
| [#4444](https://github.com/ROCm/aiter/pull/4444) | [Test] Add SDXL 1.0 conv2d shapes to conv_shapes.json | @Ragua1 | open | 2026-07-29 | 2026-08-02 |
| [#4443](https://github.com/ROCm/aiter/pull/4443) | perf: optimize MXFP4 MoE decode with fused sorting, quantiza... | @yuychang | open | 2026-07-29 | 2026-08-02 |
| [#4441](https://github.com/ROCm/aiter/pull/4441) | feat(flydsl): Add HSTU Forward kernel | @damien-lejeune | open | 2026-07-29 | 2026-08-02 |
| [#4436](https://github.com/ROCm/aiter/pull/4436) | [compat] Adapt flydsl kernels to internal LLVM ROCDL API cha... | @jli-melchior | open | 2026-07-29 | 2026-08-02 |
| [#4432](https://github.com/ROCm/aiter/pull/4432) | fix: use residual.stride(1) for MHC HC-slice indexing | @steamedMantou | open | 2026-07-29 | 2026-08-02 |
| [#4427](https://github.com/ROCm/aiter/pull/4427) | [Bugfix][Triton] Fix large-stride KV address overflow in pag... | @shen-shanshan | open | 2026-07-28 | 2026-08-02 |
| [#4424](https://github.com/ROCm/aiter/pull/4424) | Document and automate the AITER release plan | @gyohuangxin | draft | 2026-07-28 | 2026-08-02 |
| [#4422](https://github.com/ROCm/aiter/pull/4422) | [Triton] Add fused gated residual + LayerNorm + scale/shift ... | @menglcai | open | 2026-07-28 | 2026-08-02 |
| [#4414](https://github.com/ROCm/aiter/pull/4414) | Tune MHA config & small-head pipeline pathology | @nidal567 | open | 2026-07-28 | 2026-08-02 |
| [#4405](https://github.com/ROCm/aiter/pull/4405) | perf(mla): expose split override for graph decode | @JohnQinAMD | open | 2026-07-28 | 2026-08-02 |
| [#4400](https://github.com/ROCm/aiter/pull/4400) | Mxfp4 fmoe emsort | @JohnNikolay84 | open | 2026-07-27 | 2026-08-02 |
| [#4389](https://github.com/ROCm/aiter/pull/4389) | Fix AITER JIT builds on gfx90a | @rlrs | draft | 2026-07-26 | 2026-08-02 |
| [#4500](https://github.com/ROCm/aiter/pull/4500) | [Triton] [Gluon] [GFX9] [GFX12] EP MOE changes | @k50112113 | draft | 2026-08-01 | 2026-08-02 |
| [#4508](https://github.com/ROCm/aiter/pull/4508) | [TRITON][GLUON] Fixing Python 3.14 Compatibility Issue About... | @cagrikymk | draft | 2026-08-02 | 2026-08-02 |
| [#4488](https://github.com/ROCm/aiter/pull/4488) | [Test] mla_gluon: regression test for the >2GB KV cache path | @JohnQinAMD | open | 2026-07-31 | 2026-08-02 |
| [#4401](https://github.com/ROCm/aiter/pull/4401) | [NO MERGE] Add gfx942 FWD split kv | @ipanfilo | draft | 2026-07-27 | 2026-07-30 |
| [#4395](https://github.com/ROCm/aiter/pull/4395) | [MoE] Add FlyDSL FP8 MoE kernels (decode weight-decompressio... | @apinge | draft | 2026-07-27 | 2026-07-29 |
| [#4286](https://github.com/ROCm/aiter/pull/4286) | [opt][gfx1250][ep] Add TDM deep-prefetch BF16 prefill for qk... | @jli-melchior | open | 2026-07-18 | 2026-07-21 |
| [#2919](https://github.com/ROCm/aiter/pull/2919) | Add paged_attention_ragged_nhd | @apinge | draft | 2026-04-27 | 2026-07-13 |
| [#4078](https://github.com/ROCm/aiter/pull/4078) | [opus] backport #4056: gate TDM/named-barrier on clang>=22 f... | @carlushuang | open | 2026-07-04 | 2026-07-13 |
| [#3481](https://github.com/ROCm/aiter/pull/3481) | [gfx1151] flash_attn_triton_amd: enable in-thread transpose | @mgehre-amd | draft | 2026-06-02 | 2026-07-03 |
| [#2227](https://github.com/ROCm/aiter/pull/2227) | Add Triton fallback for fused_rope_rms (QKNorm+RoPE) | @sunway513 | open | 2026-03-09 | 2026-06-30 |
| [#3495](https://github.com/ROCm/aiter/pull/3495) | mxfp4fp8 fmha gfx950 | @jcaraban | open | 2026-06-02 | 2026-06-20 |
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
| [#4548](https://github.com/ROCm/aiter/pull/4548) | fix(flydsl): a16w4 follow-up — SEPARATED route regression, t... | @yichiche | merged | 2026-08-04 | 2026-08-04 |
| [#4553](https://github.com/ROCm/aiter/pull/4553) | fix mxmoe CI bug(flydsl0.2.4->0.3.0) | @charlieguo1106 | merged | 2026-08-04 | 2026-08-04 |
| [#4532](https://github.com/ROCm/aiter/pull/4532) | [PERF] Eliminate varlen prefill GDN D2H synchronization with... | @yiijin | merged | 2026-08-03 | 2026-08-04 |
| [#4335](https://github.com/ROCm/aiter/pull/4335) | [gfx1250] update asm f4gemm, add fp8 out support, enhance ut | @dbyoung18 | merged | 2026-07-22 | 2026-08-04 |
| [#4394](https://github.com/ROCm/aiter/pull/4394) | moe rebase and refactor | @yadaish | merged | 2026-07-27 | 2026-08-04 |
| [#4474](https://github.com/ROCm/aiter/pull/4474) | [Bugfix][Triton] Fix int32 KV-offset overflow in _mla_gluon ... | @peizhang56 | merged | 2026-07-31 | 2026-08-04 |
| [#4516](https://github.com/ROCm/aiter/pull/4516) | [CI] Fix SGLang downstream setup and enable DSV3.2 accuracy | @bingxche | merged | 2026-08-03 | 2026-08-04 |
| [#4179](https://github.com/ROCm/aiter/pull/4179) | [fmoe][gfx950]Flydsl mxmoe v2 | @charlieguo1106 | merged | 2026-07-10 | 2026-08-04 |
| [#4520](https://github.com/ROCm/aiter/pull/4520) | ci: switch MI300X jobs to OCI runners | @gyohuangxin | merged | 2026-08-03 | 2026-08-04 |
| [#4482](https://github.com/ROCm/aiter/pull/4482) | gfx1250: fix the grouped-MoE expert scan above 512 experts, ... | @XiaobingSuper | merged | 2026-07-31 | 2026-08-04 |
| [#4003](https://github.com/ROCm/aiter/pull/4003) | Flash attention sliding window tests | @micmelesse | merged | 2026-06-29 | 2026-08-03 |
| [#4529](https://github.com/ROCm/aiter/pull/4529) | Fix LDS allocation for B-to-LDS FlyDSL Split-K HGEMM | @xytpai | merged | 2026-08-03 | 2026-08-03 |
| [#4431](https://github.com/ROCm/aiter/pull/4431) | chore(flydsl): bump flydsl dependency to 0.3.0 | @coderfeli | merged | 2026-07-29 | 2026-08-03 |
| [#4527](https://github.com/ROCm/aiter/pull/4527) | [gfx1250][FlyDSL] Unify&Rename GEMM kernels and refactor LDS... | @aoli26 | merged | 2026-08-03 | 2026-08-03 |
| [#4314](https://github.com/ROCm/aiter/pull/4314) | [Perf][FlyDSL] Tune DeepSeek V4 fused MoE for C1/C2/C32/C64 ... | @Fangzhou-Ai | merged | 2026-07-21 | 2026-08-03 |
| [#4467](https://github.com/ROCm/aiter/pull/4467) | fix(module_rmsnorm_quant): bound packed FP4 output stores | @gbyu-amd | merged | 2026-07-30 | 2026-08-03 |
| [#4518](https://github.com/ROCm/aiter/pull/4518) | CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-08-03 | 2026-08-03 |
| [#4465](https://github.com/ROCm/aiter/pull/4465) | optimize ctypes marshalling | @amd-ruitang3 | merged | 2026-07-30 | 2026-08-03 |
| [#4373](https://github.com/ROCm/aiter/pull/4373) | [CK][VSA] Add thin sparse attention operator | @LiuYinfeng01 | merged | 2026-07-24 | 2026-08-03 |
| [#4463](https://github.com/ROCm/aiter/pull/4463) | Add an opt-in a4w4 SiTUv2 MoE path and fix three SiTUv2 tune... | @XiaobingSuper | merged | 2026-07-30 | 2026-08-03 |
| [#4231](https://github.com/ROCm/aiter/pull/4231) | Add e8m0 block-scale output to fused rmsnorm quant | @junhaha666 | merged | 2026-07-14 | 2026-08-03 |
| [#4475](https://github.com/ROCm/aiter/pull/4475) | [gfx1250][FlyDSL] Unify&Rename A8W8 GEMM kernels | @aoli26 | merged | 2026-07-31 | 2026-08-02 |
| [#4501](https://github.com/ROCm/aiter/pull/4501) | Flydsl kernel cleanup | @coderfeli | merged | 2026-08-01 | 2026-08-01 |
| [#4269](https://github.com/ROCm/aiter/pull/4269) | [Feature][FlyDSL] Add fused heterogeneous MXFP4/FP8 shared-e... | @Fangzhou-Ai | merged | 2026-07-16 | 2026-08-01 |
| [#4485](https://github.com/ROCm/aiter/pull/4485) | feat(configs): add Qwen3.5-397B-A17B-MXFP4 a16w4 tuned fmoe ... | @yichiche | merged | 2026-07-31 | 2026-08-01 |
| [#4435](https://github.com/ROCm/aiter/pull/4435) | [config] add k3 gemm&moe tuned configs | @gbyu-amd | merged | 2026-07-29 | 2026-08-01 |
| [#4464](https://github.com/ROCm/aiter/pull/4464) |  [opus_moe] production A8W4 MoE stage1 kernels | @yifehuan | merged | 2026-07-30 | 2026-08-01 |
| [#4243](https://github.com/ROCm/aiter/pull/4243) | feat(gemm_a8w8_blockscale_bpreshuffle): add GLM-5.2 tuned co... | @Raiden-Makoto | merged | 2026-07-15 | 2026-07-31 |
| [#4428](https://github.com/ROCm/aiter/pull/4428) | Add inverse_rope_group_quant op for DeepSeek-V4 wo_a input | @yzhou103 | merged | 2026-07-28 | 2026-07-31 |
| [#4449](https://github.com/ROCm/aiter/pull/4449) | Fix for 32 bit GU offsets overflow | @JohnNikolay84 | merged | 2026-07-29 | 2026-07-30 |
| [#4468](https://github.com/ROCm/aiter/pull/4468) | ci: extend multi-gpu test timeout | @gyohuangxin | merged | 2026-07-30 | 2026-07-30 |
| [#4044](https://github.com/ROCm/aiter/pull/4044) | [triton] Optimized Unified Attention for Gemma-4-31b | @a-sidorova | merged | 2026-07-01 | 2026-07-30 |
| [#4454](https://github.com/ROCm/aiter/pull/4454) | feat(topksoftmax): add 640-expert top-8 asm kernels for gfx9... | @junhaha666 | merged | 2026-07-30 | 2026-07-30 |
| [#4459](https://github.com/ROCm/aiter/pull/4459) | refactor tiny kernels | @yadaish | merged | 2026-07-30 | 2026-07-30 |
| [#3886](https://github.com/ROCm/aiter/pull/3886) | [MoE] Add swiglu_oai (OAI SwiGLU) for per-token fp8 CK XDL 2... | @LJ-underdog | merged | 2026-06-24 | 2026-07-30 |
| [#4434](https://github.com/ROCm/aiter/pull/4434) | [module_rmsnorm_quant] refactor and rm torch | @amd-ruitang3 | merged | 2026-07-29 | 2026-07-30 |
| [#4417](https://github.com/ROCm/aiter/pull/4417) | Fix large-token FlyDSL MoE launch and output limits | @XiaobingSuper | merged | 2026-07-28 | 2026-07-30 |
| [#4341](https://github.com/ROCm/aiter/pull/4341) | fix(mla): refresh qh16 fp8 persistent decode HSACO for large... | @fangche123 | merged | 2026-07-23 | 2026-07-30 |
| [#4307](https://github.com/ROCm/aiter/pull/4307) | [tune] Kimi-K2.5/K2.6 fp4: port BM16 (flydsl_mxmoe_g*_a4w4) ... | @jiacao-amd | merged | 2026-07-20 | 2026-07-29 |
| [#4253](https://github.com/ROCm/aiter/pull/4253) | [Triton] [Gluon] [GFX12] DSV4 Pro EP tunning (=TP1 shape) | @k50112113 | merged | 2026-07-16 | 2026-07-29 |
| [#4429](https://github.com/ROCm/aiter/pull/4429) | fix(flydsl-aot): map Situv2 activation in MoE AOT parse_csv | @coderfeli | merged | 2026-07-29 | 2026-07-29 |
| [#4438](https://github.com/ROCm/aiter/pull/4438) | fix(dsv4): use vec_size=32 for dim=1024 rotate-quant kernels | @XiaobingSuper | merged | 2026-07-29 | 2026-07-29 |
| [#4374](https://github.com/ROCm/aiter/pull/4374) | [gfx1250][FlyDSL] Refactor GEMMs with layout-based API | @aoli26 | merged | 2026-07-24 | 2026-07-29 |
| [#4342](https://github.com/ROCm/aiter/pull/4342) | Fix fused_qk_rope_concat_and_cache_mla for DCP | @yitingw1 | merged | 2026-07-23 | 2026-07-29 |
| [#4082](https://github.com/ROCm/aiter/pull/4082) | fix: synchronize custom collectives before return | @jpy794 | merged | 2026-07-05 | 2026-07-29 |
| [#4312](https://github.com/ROCm/aiter/pull/4312) | Enable stride aware indexing on top of strided blocks for bl... | @jhu960213 | merged | 2026-07-21 | 2026-07-29 |
| [#4410](https://github.com/ROCm/aiter/pull/4410) | Feat/v2 tune merge | @Bernard-Liu | merged | 2026-07-28 | 2026-07-29 |
| [#4421](https://github.com/ROCm/aiter/pull/4421) | [module_quick_all_reduce] refactor and rm torch | @amd-ruitang3 | merged | 2026-07-28 | 2026-07-29 |
| [#4406](https://github.com/ROCm/aiter/pull/4406) | fix(gemm_a8w8_blockscale): prevent scale OOB and support Tri... | @bingxche | merged | 2026-07-28 | 2026-07-29 |
| [#4412](https://github.com/ROCm/aiter/pull/4412) | [MLA][gluon] support nhead=96 for MLA | @yanxuer-999 | merged | 2026-07-28 | 2026-07-29 |
| [#4402](https://github.com/ROCm/aiter/pull/4402) | refactor(flydsl): vendor buffer_ops/vector into aiter | @Phil-amd | merged | 2026-07-27 | 2026-07-29 |
| [#3451](https://github.com/ROCm/aiter/pull/3451) | Fix Q UE8M0 quant and require fp32 LN params in fused DSv3.2... | @frida-andersson | merged | 2026-06-01 | 2026-07-28 |
| [#4403](https://github.com/ROCm/aiter/pull/4403) | [CI] pin ruff and make its configuration explicit | @valarLip | merged | 2026-07-28 | 2026-07-28 |
| [#4230](https://github.com/ROCm/aiter/pull/4230) | [FLYDSL] Support paged mqa logits fp4  varqlen kernel | @zhiding512 | merged | 2026-07-14 | 2026-07-28 |
| [#4317](https://github.com/ROCm/aiter/pull/4317) | tune: a8w8 gemm tuning for Qwen3.5 MXFP4-AttnFP8 model | @mqhc2020 | merged | 2026-07-21 | 2026-07-28 |
| [#4392](https://github.com/ROCm/aiter/pull/4392) | Correcting errors and discrepancies in the MLA v4 mi355 kern... | @ruanjm | merged | 2026-07-27 | 2026-07-28 |
| [#4397](https://github.com/ROCm/aiter/pull/4397) | [Kimi-K3] FlyDSL SiTUv2 MoE kernels, strided grouped-topk, t... | @carlushuang | merged | 2026-07-27 | 2026-07-28 |
| [#4408](https://github.com/ROCm/aiter/pull/4408) | [Qwen3.5_dev] Upgrade flydsl to 0.2.4 | @apinge | merged | 2026-07-28 | 2026-07-28 |
| [#4393](https://github.com/ROCm/aiter/pull/4393) | [module_pos_encoding] refactor and rm torch | @amd-ruitang3 | merged | 2026-07-27 | 2026-07-28 |
| [#4029](https://github.com/ROCm/aiter/pull/4029) | DeepSeek-V4 FP4: fused_compress FP4 scatter + rmsnorm_rope_r... | @junhaha666 | merged | 2026-07-01 | 2026-07-28 |
| [#4404](https://github.com/ROCm/aiter/pull/4404) | docs(readme): announce Kimi-K3 support in News | @carlushuang | merged | 2026-07-28 | 2026-07-28 |
| [#4346](https://github.com/ROCm/aiter/pull/4346) | Fix: add missing end_sync barrier in fused allreduce+rmsnorm... | @yuzho-amd | merged | 2026-07-23 | 2026-07-28 |
| [#4379](https://github.com/ROCm/aiter/pull/4379) | [Triton/Gluon] Streamline GEMM and MoE configs | @Boss2002n | merged | 2026-07-24 | 2026-07-27 |
| [#4210](https://github.com/ROCm/aiter/pull/4210) | [gfx1250][FlyDSL] Support a8w8 blockscale bpreshuffle gemm | @aoli26 | merged | 2026-07-13 | 2026-07-27 |
| [#4343](https://github.com/ROCm/aiter/pull/4343) | [FlyDSL] fix >4GB a4w4 weight buffer-offset overflow for pp8... | @ZhaiFeiyue | merged | 2026-07-23 | 2026-07-27 |
| [#4297](https://github.com/ROCm/aiter/pull/4297) | CI: auto-update split test FILE_TIMES | @aiter-gh-app[bot] | merged | 2026-07-20 | 2026-07-27 |
| [#4368](https://github.com/ROCm/aiter/pull/4368) | [module_moe_asm] refactor and rm torch | @amd-ruitang3 | merged | 2026-07-24 | 2026-07-27 |
| [#4261](https://github.com/ROCm/aiter/pull/4261) | [MoE] Add tuned config for MiMo-V2.5-Pro prefill on MI300X | @apinge | merged | 2026-07-16 | 2026-07-27 |
| [#4384](https://github.com/ROCm/aiter/pull/4384) | Repining CK to f33252ce and fix build/test errors | @JiaLuo-CAN | merged | 2026-07-25 | 2026-07-27 |
| [#4266](https://github.com/ROCm/aiter/pull/4266) | [config] retune moe for GLM-5.2 fp4 | @gbyu-amd | merged | 2026-07-16 | 2026-07-27 |
| [#4375](https://github.com/ROCm/aiter/pull/4375) | [Bug Fix]fix flyDSL MoE sorting graph capture break with dp ... | @amd-weisun | merged | 2026-07-24 | 2026-07-27 |

## atom (Active Development)
Repo: `ROCm/ATOM` | Last collected: 2026-08-04T10:25:43Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#1776](https://github.com/ROCm/ATOM/pull/1776) | [ATOMesh-CI] Refine benchmark schedules and dispatch options | @junyyang-amd | open | 2026-08-03 | 2026-08-04 |
| [#1788](https://github.com/ROCm/ATOM/pull/1788) | optimize attn res ref fla and fuse all possible part around ... | @ganyi1996ppo | open | 2026-08-04 | 2026-08-04 |
| [#1691](https://github.com/ROCm/ATOM/pull/1691) | Eplb v2 mega | @JiaoliangYu | draft | 2026-07-24 | 2026-08-04 |
| [#1760](https://github.com/ROCm/ATOM/pull/1760) | [ATOM SGL] GLM 5.2 MTP Support | @ZhiweiYan-96 | open | 2026-07-31 | 2026-08-04 |
| [#1699](https://github.com/ROCm/ATOM/pull/1699) | feat(dp_sticky) : add new dp_sticky policy for dp-aware rout... | @Yuechguo | open | 2026-07-25 | 2026-08-04 |
| [#1786](https://github.com/ROCm/ATOM/pull/1786) | [feat]: support glm5 and glm52 in rtpllm | @zhiqchen-amd | open | 2026-08-04 | 2026-08-04 |
| [#1410](https://github.com/ROCm/ATOM/pull/1410) | [GFX1250] MiniMax-M3 gfx1250 enabling | @leonling-ll | open | 2026-06-30 | 2026-08-04 |
| [#1755](https://github.com/ROCm/ATOM/pull/1755) | Add fake eplb for performance test | @junhaha666 | open | 2026-07-31 | 2026-08-04 |
| [#1783](https://github.com/ROCm/ATOM/pull/1783) | [feat](k3): add k3 to precheckin and nightly test | @PerryZhang01 | open | 2026-08-04 | 2026-08-04 |
| [#1690](https://github.com/ROCm/ATOM/pull/1690) | [draft] support ATOM plugin for qwen3.5 DPxTPx/DPxEPx | @zovonoir | open | 2026-07-24 | 2026-08-04 |
| [#1749](https://github.com/ROCm/ATOM/pull/1749) | [Wip] Quantize weights online when loading weights | @haoyangli0109 | open | 2026-07-30 | 2026-08-04 |
| [#1778](https://github.com/ROCm/ATOM/pull/1778) | [ATOM SGL][workflow] Add acceptance rate check in MTP cases | @ZhiweiYan-96 | open | 2026-08-04 | 2026-08-04 |
| [#1725](https://github.com/ROCm/ATOM/pull/1725) | [atom]fix lm_cache write back | @zhuyuhua-v | open | 2026-07-29 | 2026-08-04 |
| [#1782](https://github.com/ROCm/ATOM/pull/1782) | Whn/kimi k3 multimodel | @HaonanWang98 | open | 2026-08-04 | 2026-08-04 |
| [#1779](https://github.com/ROCm/ATOM/pull/1779) | sparsekv cache glm52 agentic task optimization  | @Jasen2201 | draft | 2026-08-04 | 2026-08-04 |
| [#1781](https://github.com/ROCm/ATOM/pull/1781) | [feat][DCP] Enable DCP with fp8 MTP | @yitingw1 | open | 2026-08-04 | 2026-08-04 |
| [#1780](https://github.com/ROCm/ATOM/pull/1780) | random IMA fix | @gbyu-amd | open | 2026-08-04 | 2026-08-04 |
| [#1740](https://github.com/ROCm/ATOM/pull/1740) | [feat][ci] support swebench_lite precision validation | @Phi-C | draft | 2026-07-30 | 2026-08-04 |
| [#1771](https://github.com/ROCm/ATOM/pull/1771) | feat(kv-cache): content-addressed per-request state, so pref... | @valarLip | open | 2026-08-03 | 2026-08-04 |
| [#1719](https://github.com/ROCm/ATOM/pull/1719) | [Kimi-K3] MI455 support Kimi-K3 | @zejunchen-zejun | open | 2026-07-28 | 2026-08-04 |
| [#1759](https://github.com/ROCm/ATOM/pull/1759) | support mamba prefix cache | @ganyi1996ppo | open | 2026-07-31 | 2026-08-04 |
| [#1769](https://github.com/ROCm/ATOM/pull/1769) | [Feature] DeepSeek-V4 CSA prefix-state cache on SWA (native,... | @yhl-amd | open | 2026-08-01 | 2026-08-04 |
| [#1773](https://github.com/ROCm/ATOM/pull/1773) | [Kimi-K3] Enable align-mode mamba prefix caching (vLLM-ATOM) | @gbyu-amd | open | 2026-08-03 | 2026-08-04 |
| [#1752](https://github.com/ROCm/ATOM/pull/1752) | [k3] enable dual stream for shared expert and some fusions | @gbyu-amd | open | 2026-07-30 | 2026-08-04 |
| [#1765](https://github.com/ROCm/ATOM/pull/1765) | [Triton] [Gluon] [GFX9] [GFX12] Add triton/gluon support for... | @k50112113 | draft | 2026-08-01 | 2026-08-03 |
| [#1777](https://github.com/ROCm/ATOM/pull/1777) | [Doc] online quant best practices | @haoyangli0109 | draft | 2026-08-03 | 2026-08-03 |
| [#1770](https://github.com/ROCm/ATOM/pull/1770) | Add Periodic Engine Status Log (Server Mode) | @yitingw1 | open | 2026-08-03 | 2026-08-03 |
| [#1762](https://github.com/ROCm/ATOM/pull/1762) | feat(glm): support GLM-5.2 DP attention | @wanzhenchn | open | 2026-07-31 | 2026-07-31 |
| [#1742](https://github.com/ROCm/ATOM/pull/1742) | fix(mtp): recycle post-final-norm hidden between MTP draft s... | @fanxingran | open | 2026-07-30 | 2026-07-31 |
| [#1738](https://github.com/ROCm/ATOM/pull/1738) | [feat](qwen):Support qwen3.5x model | @junhaha666 | open | 2026-07-30 | 2026-07-31 |
| [#1739](https://github.com/ROCm/ATOM/pull/1739) | [SGL+ATOM]Fix/dsv4 fp8 block128 on 308 | @zhangxinyuanliuhengyu | open | 2026-07-30 | 2026-07-31 |
| [#1747](https://github.com/ROCm/ATOM/pull/1747) | feat: support GLM-5.2 tool call parser | @Phi-C | open | 2026-07-30 | 2026-07-31 |
| [#1751](https://github.com/ROCm/ATOM/pull/1751) | fix: forward extra args in patched_inline_call for torch _dy... | @thpereir | open | 2026-07-30 | 2026-07-31 |
| [#1601](https://github.com/ROCm/ATOM/pull/1601) | Fix(mxfp4): align activation quant rounding with Quark offli... | @thpereir | open | 2026-07-14 | 2026-07-30 |
| [#1743](https://github.com/ROCm/ATOM/pull/1743) | mtp support blocksize other than 1 | @HaonanWang98 | open | 2026-07-30 | 2026-07-30 |
| [#1551](https://github.com/ROCm/ATOM/pull/1551) | [sglang+atom] Fix radix-cache crash on MiniMax-M3 | @ningding01 | open | 2026-07-10 | 2026-07-30 |
| [#1723](https://github.com/ROCm/ATOM/pull/1723) | test: add block-level DeepSeek-V4 attention test (real Deeps... | @carlushuang | open | 2026-07-29 | 2026-07-30 |
| [#1500](https://github.com/ROCm/ATOM/pull/1500) | [feature] online quantize weights when loading weights | @haoyangli0109 | draft | 2026-07-07 | 2026-07-29 |
| [#1704](https://github.com/ROCm/ATOM/pull/1704) | [Feature] DSV4: elastic unified-KV arena + CSA boundary stat... | @yhl-amd | open | 2026-07-27 | 2026-07-29 |
| [#1594](https://github.com/ROCm/ATOM/pull/1594) | Add MoRIIO write-push KV transfer with DeepSeek-V4 and fabri... | @maning00 | draft | 2026-07-14 | 2026-07-29 |
| [#1563](https://github.com/ROCm/ATOM/pull/1563) | [Frontend] DeepSeek-V4 native OpenAI/Anthropic/Responses API... | @yhl-amd | draft | 2026-07-10 | 2026-07-28 |
| [#1316](https://github.com/ROCm/ATOM/pull/1316) | [KV-events] block token_offset + sequence numbers + replay | @bongwoobak | open | 2026-06-22 | 2026-07-28 |
| [#1612](https://github.com/ROCm/ATOM/pull/1612) | [fix] Stabilize ATOM FP8 no-eager rollout weight sync and CU... | @xysheng-AMD | open | 2026-07-16 | 2026-07-27 |
| [#1707](https://github.com/ROCm/ATOM/pull/1707) | fix(scheduler): back-fill deferred-output placeholders befor... | @yhl-amd | draft | 2026-07-27 | 2026-07-27 |
| [#1695](https://github.com/ROCm/ATOM/pull/1695) | feat(glm-dsa): GLM-5.2 sparse-MLA construct-time determinism... | @yhl-amd | open | 2026-07-24 | 2026-07-27 |
| [#1683](https://github.com/ROCm/ATOM/pull/1683) | [Feature] KV offload: hybrid bundle backend + dense/hybrid s... | @yhl-amd | open | 2026-07-23 | 2026-07-24 |
| [#1666](https://github.com/ROCm/ATOM/pull/1666) | feat(moe): FlyDSL MegaMoE fused EP-MoE integration (mega_moe... | @JiaoliangYu | draft | 2026-07-22 | 2026-07-22 |
| [#1528](https://github.com/ROCm/ATOM/pull/1528) | di ci: glm-5-2 1p 1d && 2p1d | @JiaoliangYu | draft | 2026-07-09 | 2026-07-22 |
| [#1659](https://github.com/ROCm/ATOM/pull/1659) | [Feature] DeepSeek-V4 unified KV pool (option-2): SWA↔compre... | @yhl-amd | open | 2026-07-21 | 2026-07-22 |
| [#1610](https://github.com/ROCm/ATOM/pull/1610) | expert map fix | @amirumoAMD | open | 2026-07-15 | 2026-07-21 |
| [#1618](https://github.com/ROCm/ATOM/pull/1618) | [atom-vllm] Attention CP for DSA models | @whx-sjtu | draft | 2026-07-16 | 2026-07-21 |
| [#1641](https://github.com/ROCm/ATOM/pull/1641) | enable DCP | @gbyu-amd | draft | 2026-07-20 | 2026-07-20 |
| [#1337](https://github.com/ROCm/ATOM/pull/1337) | [gfx1151] Online INT8 W8A8 for Qwen3.6 27B / 35B-A3B on RDNA... | @carlushuang | open | 2026-06-24 | 2026-07-20 |
| [#1314](https://github.com/ROCm/ATOM/pull/1314) | [gfx1151] Qwen3.5/3.6 (GDN hybrid) BF16 on RDNA3.5 via nativ... | @carlushuang | open | 2026-06-22 | 2026-07-20 |
| [#1499](https://github.com/ROCm/ATOM/pull/1499) | [KVConnector] native scale-up KV connector (HIP VMM, kv_conn... | @carlushuang | open | 2026-07-07 | 2026-07-19 |
| [#1570](https://github.com/ROCm/ATOM/pull/1570) | wire GUGU - act+quant fusion into triton decode  | @Boss2002n | open | 2026-07-12 | 2026-07-18 |
| [#1623](https://github.com/ROCm/ATOM/pull/1623) | [CI] add agentic MiniMax-M3 PD+LMCache test case | @Phi-C | draft | 2026-07-17 | 2026-07-17 |
| [#1501](https://github.com/ROCm/ATOM/pull/1501) | [Feature] Enable cache aware DP routing for standalone ATOMe... | @simondanielsson | open | 2026-07-07 | 2026-07-16 |
| [#1603](https://github.com/ROCm/ATOM/pull/1603) | multi-node dp support | @ganyi1996ppo | open | 2026-07-15 | 2026-07-16 |
| [#1605](https://github.com/ROCm/ATOM/pull/1605) | [feat](gpt-oss): Eagle3 speculative decoding support for gpt... | @ProgMastermind | open | 2026-07-15 | 2026-07-15 |
| [#1604](https://github.com/ROCm/ATOM/pull/1604) | [feat](vllm): upgrade vllm to 0.25.1 | @PerryZhang01 | draft | 2026-07-15 | 2026-07-15 |
| [#1564](https://github.com/ROCm/ATOM/pull/1564) | [ATOM SGL] Minimax M3 FP8 & EAGLE | @ZhiweiYan-96 | draft | 2026-07-11 | 2026-07-15 |
| [#1584](https://github.com/ROCm/ATOM/pull/1584) | [fix] MXFP4 MoE: single-source use_triton_moe() to fix gfx94... | @zejunchen-zejun | open | 2026-07-14 | 2026-07-15 |
| [#1590](https://github.com/ROCm/ATOM/pull/1590) | Avoid cancelling heavy CI on review events | @gyohuangxin | open | 2026-07-14 | 2026-07-15 |
| [#1588](https://github.com/ROCm/ATOM/pull/1588) | [recipe] update GLM-5.2 recipe | @gbyu-amd | open | 2026-07-14 | 2026-07-15 |
| [#1579](https://github.com/ROCm/ATOM/pull/1579) | Feiw/v4/mlapr | @feifei14119 | open | 2026-07-13 | 2026-07-14 |
| [#1358](https://github.com/ROCm/ATOM/pull/1358) | fix(prefix-cache): bypass prefix caching for multimodal sequ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1357](https://github.com/ROCm/ATOM/pull/1357) | feat(gfx1151): custom head-dim-tiled Triton flash attention ... | @carlushuang | open | 2026-06-25 | 2026-07-14 |
| [#1317](https://github.com/ROCm/ATOM/pull/1317) | Add MiniMax-M3 (MXFP4/AttnFP8) model support | @thpereir | open | 2026-06-22 | 2026-07-13 |
| [#1369](https://github.com/ROCm/ATOM/pull/1369) | Enable TBO Support & Fix Accuracy Regressions for Kimi K2.5 | @jpy794 | open | 2026-06-26 | 2026-07-13 |
| [#1441](https://github.com/ROCm/ATOM/pull/1441) | [Bugfix] Cancel inference on client disconnect + fix non-str... | @yhl-amd | open | 2026-07-02 | 2026-07-13 |
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
| [#1787](https://github.com/ROCm/ATOM/pull/1787) | [atomesh-benchmark] Remove pre-checkout cleanup | @junyyang-amd | merged | 2026-08-04 | 2026-08-04 |
| [#1785](https://github.com/ROCm/ATOM/pull/1785) | [AIPerf] bump to v1.0.1: count-based warmup, timing watchdog... | @Jasen2201 | merged | 2026-08-04 | 2026-08-04 |
| [#1671](https://github.com/ROCm/ATOM/pull/1671) | [atom-sgl-benchmark] Add manual OOB selection and Minimax-M3... | @junyyang-amd | merged | 2026-07-22 | 2026-08-04 |
| [#1774](https://github.com/ROCm/ATOM/pull/1774) | fix mark trace for sperated capture bs profiler | @HaonanWang98 | merged | 2026-08-03 | 2026-08-04 |
| [#1758](https://github.com/ROCm/ATOM/pull/1758) | optimize Dspark: piecewise dummy decode avoid eager fallback... | @ZhangLirong-amd | merged | 2026-07-31 | 2026-08-04 |
| [#1766](https://github.com/ROCm/ATOM/pull/1766) | [Perf][Qwen3] Enable QK norm RoPE cache fusion for dense mod... | @ZhengGong-amd | merged | 2026-08-01 | 2026-08-04 |
| [#1727](https://github.com/ROCm/ATOM/pull/1727) | [fix] bunch of fixes to pass Kimi-K3 KVV  | @gbyu-amd | merged | 2026-07-29 | 2026-08-03 |
| [#1757](https://github.com/ROCm/ATOM/pull/1757) | [sglang+atom] enable minimax-m3 mtp && fix m3 error cased by... | @ZLkanyo009 | merged | 2026-07-31 | 2026-08-03 |
| [#1775](https://github.com/ROCm/ATOM/pull/1775) | fix[plugin]: bind DeepSeek-V4 plugin compressor quant metada... | @qichu-yun | merged | 2026-08-03 | 2026-08-03 |
| [#1772](https://github.com/ROCm/ATOM/pull/1772) | fix(sglang): restore DeepSeek-R1 TP4 accuracy | @PerryZhang01 | merged | 2026-08-03 | 2026-08-03 |
| [#1709](https://github.com/ROCm/ATOM/pull/1709) | feat(deepseek_v4): Add fp4 indexer fo dsv4 | @junhaha666 | merged | 2026-07-27 | 2026-08-03 |
| [#1746](https://github.com/ROCm/ATOM/pull/1746) | [feat][DCP] Switch DCP decode to persistent PA + make DCP co... | @yitingw1 | merged | 2026-07-30 | 2026-08-03 |
| [#1701](https://github.com/ROCm/ATOM/pull/1701) | [feat][DCP] Optimize MLA DCP (Enable Prefix Cache / Chunked ... | @yitingw1 | merged | 2026-07-27 | 2026-08-03 |
| [#1706](https://github.com/ROCm/ATOM/pull/1706) | feat: add chat template | @amd-youchen | merged | 2026-07-27 | 2026-08-03 |
| [#1768](https://github.com/ROCm/ATOM/pull/1768) | fix(engine): offline output thread dies on the first streame... | @valarLip | merged | 2026-08-01 | 2026-08-01 |
| [#1767](https://github.com/ROCm/ATOM/pull/1767) | perf(loader): 2.2x cold / 1.7x warm weight load, plus three ... | @valarLip | merged | 2026-08-01 | 2026-08-01 |
| [#1518](https://github.com/ROCm/ATOM/pull/1518) | [vLLM-ATOM] Support EAGLE3 spec decoding for MiniMax-M3 | @kliuae | merged | 2026-07-08 | 2026-08-01 |
| [#1764](https://github.com/ROCm/ATOM/pull/1764) | fix(mtp): recycle the post-final-norm hidden between MTP dra... | @valarLip | merged | 2026-07-31 | 2026-08-01 |
| [#1761](https://github.com/ROCm/ATOM/pull/1761) | fix(ci): correct ATOMesh speculative token arguments | @junyyang-amd | merged | 2026-07-31 | 2026-07-31 |
| [#1753](https://github.com/ROCm/ATOM/pull/1753) | [SGL+ATOM][CI]fix sglang hf cache fallback | @zhangxinyuanliuhengyu | merged | 2026-07-31 | 2026-07-31 |
| [#1750](https://github.com/ROCm/ATOM/pull/1750) | fix(kimi-k3): run KDA prefill recurrently on gfx1250 | @zejunchen-zejun | merged | 2026-07-30 | 2026-07-30 |
| [#1744](https://github.com/ROCm/ATOM/pull/1744) | fix: Dspark piecewise cudagraph accuracy issue on 512 Conc | @ZhangLirong-amd | merged | 2026-07-30 | 2026-07-30 |
| [#1737](https://github.com/ROCm/ATOM/pull/1737) | [DeepSeek-V4] Enable FP8 2-buffer KV transfer for PD disaggr... | @Yuechguo | merged | 2026-07-30 | 2026-07-30 |
| [#1741](https://github.com/ROCm/ATOM/pull/1741) | [Frontend] DeepSeek-V4 native OpenAI/Anthropic/Responses API... | @yhl-amd | merged | 2026-07-30 | 2026-07-30 |
| [#1745](https://github.com/ROCm/ATOM/pull/1745) | add atomesh dsv4 mtp cases | @Yuechguo | merged | 2026-07-30 | 2026-07-30 |
| [#1552](https://github.com/ROCm/ATOM/pull/1552) | [Feature] support Chunked Pipeline Parallelism + PD Disaggre... | @Jasen2201 | merged | 2026-07-10 | 2026-07-30 |
| [#1734](https://github.com/ROCm/ATOM/pull/1734) | [vllm+atom][CI] update vLLM benchmark nightly schedule | @zhangxinyuanliuhengyu | merged | 2026-07-30 | 2026-07-30 |
| [#1735](https://github.com/ROCm/ATOM/pull/1735) | [feat](kimi): support kimi k3 on vllm plugin mode | @PerryZhang01 | merged | 2026-07-30 | 2026-07-30 |
| [#1733](https://github.com/ROCm/ATOM/pull/1733) | K3 dspark support | @ZhangLirong-amd | merged | 2026-07-29 | 2026-07-30 |
| [#1730](https://github.com/ROCm/ATOM/pull/1730) | [ci][mesh] support Crusoe cluster and align bench_seving scr... | @wanzhenchn | merged | 2026-07-29 | 2026-07-30 |
| [#1726](https://github.com/ROCm/ATOM/pull/1726) | [CI] add Agentic Trace item under ISL/OSL | @Phi-C | merged | 2026-07-29 | 2026-07-29 |
| [#1729](https://github.com/ROCm/ATOM/pull/1729) | [SGL+ATOM]fix(sglang): fallback unwritable HF cache roots | @zhangxinyuanliuhengyu | merged | 2026-07-29 | 2026-07-29 |
| [#1728](https://github.com/ROCm/ATOM/pull/1728) | [sgl/vllm + atom][CI] update benchmark schedules | @zhangxinyuanliuhengyu | merged | 2026-07-29 | 2026-07-29 |
| [#1732](https://github.com/ROCm/ATOM/pull/1732) | docs: add Kimi-K3 Day 0 AMD developer article to News | @valarLip | merged | 2026-07-29 | 2026-07-29 |
| [#1359](https://github.com/ROCm/ATOM/pull/1359) | feat: add dtype option in LayerNorm class | @cpersson-amd | merged | 2026-06-25 | 2026-07-29 |
| [#1718](https://github.com/ROCm/ATOM/pull/1718) | [ATOM][Kimi-K3] ATOM main support Kimi-K3 | @whx-sjtu | merged | 2026-07-28 | 2026-07-29 |
| [#1675](https://github.com/ROCm/ATOM/pull/1675) | [CI][Doc] add ci case and recipe for glm5.2 agentic benchmar... | @Phi-C | merged | 2026-07-23 | 2026-07-29 |
| [#1721](https://github.com/ROCm/ATOM/pull/1721) | [Sglang plugin] Fix glm5.2 FP8 MI308 CI with removing online... | @qichu-yun | merged | 2026-07-29 | 2026-07-29 |
| [#1717](https://github.com/ROCm/ATOM/pull/1717) | [SGL+ATOM]fix(sglang): validate cached accuracy model shards | @zhangxinyuanliuhengyu | merged | 2026-07-28 | 2026-07-29 |
| [#1647](https://github.com/ROCm/ATOM/pull/1647) | fix(scheduler): PD decode admission cap and remote-KV backpr... | @Jasen2201 | merged | 2026-07-20 | 2026-07-29 |
| [#1715](https://github.com/ROCm/ATOM/pull/1715) | feat: keep eplb for pure prefill and optimize remap and reco... | @JiaoliangYu | merged | 2026-07-28 | 2026-07-28 |
| [#1681](https://github.com/ROCm/ATOM/pull/1681) | [DSV4] perf(tbo): overlap pure-TP all_reduce on TBO + Delay ... | @ZhangLirong-amd | merged | 2026-07-23 | 2026-07-28 |
| [#1710](https://github.com/ROCm/ATOM/pull/1710) | bugfix: defer streaming chat role chunk until generation sta... | @amd-youchen | merged | 2026-07-28 | 2026-07-28 |
| [#1587](https://github.com/ROCm/ATOM/pull/1587) | [feat](vllm): upgrade vllm to v0.25.1 | @PerryZhang01 | merged | 2026-07-14 | 2026-07-28 |
| [#1711](https://github.com/ROCm/ATOM/pull/1711) | bugfix: Add empty choices field to streaming usage chunks | @amd-youchen | merged | 2026-07-28 | 2026-07-28 |
| [#1708](https://github.com/ROCm/ATOM/pull/1708) | fix(model_loader): give the batched MoE staging path an expl... | @valarLip | merged | 2026-07-27 | 2026-07-27 |
| [#1705](https://github.com/ROCm/ATOM/pull/1705) | feat: add served name | @amd-youchen | merged | 2026-07-27 | 2026-07-27 |
| [#1680](https://github.com/ROCm/ATOM/pull/1680) | [sgl atom] Enable pcp in sglang atom in glm5.2 | @ZLkanyo009 | merged | 2026-07-23 | 2026-07-27 |
| [#1700](https://github.com/ROCm/ATOM/pull/1700) | refactor(spec_decode): drafter abstraction + align DSpark wi... | @valarLip | merged | 2026-07-26 | 2026-07-27 |
| [#1692](https://github.com/ROCm/ATOM/pull/1692) | [Doc] Add explanations for online quantization and offline q... | @haoyangli0109 | merged | 2026-07-24 | 2026-07-27 |
| [#1682](https://github.com/ROCm/ATOM/pull/1682) | Enable index_share_for_mtp_iteration in native MTP EagleProp... | @fanxingran | merged | 2026-07-23 | 2026-07-27 |
| [#1585](https://github.com/ROCm/ATOM/pull/1585) | [Sglang+atom]Update ATOM SGLang plugin for SGLang 0.5.15.pos... | @zhangxinyuanliuhengyu | merged | 2026-07-14 | 2026-07-27 |
| [#1698](https://github.com/ROCm/ATOM/pull/1698) | dspark perf optimization | @ZhangLirong-amd | merged | 2026-07-25 | 2026-07-25 |
| [#1697](https://github.com/ROCm/ATOM/pull/1697) | Fix DSpark mtp3 + DP + PIECEWISE tail-drain hang | @ZhangLirong-amd | merged | 2026-07-25 | 2026-07-25 |
| [#1669](https://github.com/ROCm/ATOM/pull/1669) | [fea](req): change transformers version to 5.12.1 | @PerryZhang01 | merged | 2026-07-22 | 2026-07-24 |
| [#1693](https://github.com/ROCm/ATOM/pull/1693) | [atom-plugin-accuracy] Use /mnt/dcgpuval cache mount for acc... | @junyyang-amd | merged | 2026-07-24 | 2026-07-24 |
| [#1678](https://github.com/ROCm/ATOM/pull/1678) | [Bugfix] support mxfp8 online quantization | @haoyangli0109 | merged | 2026-07-23 | 2026-07-24 |
| [#1685](https://github.com/ROCm/ATOM/pull/1685) | ci: add DSpark benchmark run | @ZhangLirong-amd | merged | 2026-07-23 | 2026-07-23 |
| [#1689](https://github.com/ROCm/ATOM/pull/1689) | feat(benchmark): report Concurrency, Accept length and Accep... | @valarLip | merged | 2026-07-23 | 2026-07-23 |
| [#1688](https://github.com/ROCm/ATOM/pull/1688) | [SGL][m3]Update M3 recipe for SGLang-atom | @zhuyuhua-v | merged | 2026-07-23 | 2026-07-23 |
| [#1686](https://github.com/ROCm/ATOM/pull/1686) | feat(cli): accept both --kebab-case and --snake_case for eve... | @valarLip | merged | 2026-07-23 | 2026-07-23 |
| [#1684](https://github.com/ROCm/ATOM/pull/1684) | [atom-vllm/sglang-benchmark] Add Crusoe_Cluster_Node Hugging... | @junyyang-amd | merged | 2026-07-23 | 2026-07-23 |
| [#860](https://github.com/ROCm/ATOM/pull/860) | Atom-RAPIDserve merge | @amnamasood-amd | merged | 2026-05-20 | 2026-07-23 |
| [#1677](https://github.com/ROCm/ATOM/pull/1677) | dspark: fused qk_norm_rope | @ZhangLirong-amd | merged | 2026-07-23 | 2026-07-23 |
| [#1673](https://github.com/ROCm/ATOM/pull/1673) | [sglang plugin] Fix SGLang DSV4 fp8 KV cache binding | @qichu-yun | merged | 2026-07-23 | 2026-07-23 |
| [#1401](https://github.com/ROCm/ATOM/pull/1401) | [Fix] Fix DeepSeek-V4 DP+EP on gfx942 (MI308X) | @yitingw1 | merged | 2026-06-29 | 2026-07-23 |
| [#1548](https://github.com/ROCm/ATOM/pull/1548) | Fix DeepSeek V4 MTP fused shared expert mapping | @yitingw1 | merged | 2026-07-10 | 2026-07-23 |
| [#1003](https://github.com/ROCm/ATOM/pull/1003) | [Fix] Fix sparse_attn_v4_paged_prefill for MI308 | @yitingw1 | merged | 2026-06-01 | 2026-07-23 |
| [#1502](https://github.com/ROCm/ATOM/pull/1502) | [Fix] fix GLM5.2 n-shot100 accuracy | @yitingw1 | merged | 2026-07-07 | 2026-07-23 |
| [#1076](https://github.com/ROCm/ATOM/pull/1076) | [Fix] fix fused shared+routed MoE accuracy on DeepSeek-V4-Fl... | @yitingw1 | merged | 2026-06-04 | 2026-07-23 |
| [#1460](https://github.com/ROCm/ATOM/pull/1460) | Fix int32 overflow for DeepSeekV4 | @yitingw1 | merged | 2026-07-03 | 2026-07-23 |
| [#1676](https://github.com/ROCm/ATOM/pull/1676) | [SGL+ATOM] Harden SGLang accuracy test script | @zhangxinyuanliuhengyu | merged | 2026-07-23 | 2026-07-23 |
| [#1674](https://github.com/ROCm/ATOM/pull/1674) | [gptoss] remove AITER_USE_FLYDSL_MOE_SORTING [glm5.2 fp8] ch... | @zejunchen-zejun | merged | 2026-07-23 | 2026-07-23 |
| [#847](https://github.com/ROCm/ATOM/pull/847) | [feat][DCP] Enable MLA DCP (Decode Context Parallel) | @yitingw1 | merged | 2026-05-20 | 2026-07-23 |
| [#1668](https://github.com/ROCm/ATOM/pull/1668) | [SGL+ATOM]Harden SGLang accuracy shard workflow | @zhangxinyuanliuhengyu | merged | 2026-07-22 | 2026-07-23 |
| [#1670](https://github.com/ROCm/ATOM/pull/1670) | perf(bench): enable prefill delayer for DPA TBO with TARGET_... | @ZhangLirong-amd | merged | 2026-07-22 | 2026-07-22 |
| [#1201](https://github.com/ROCm/ATOM/pull/1201) | [vLLM-ATOM] Support Eagle 3.1 spec decoding | @kliuae | merged | 2026-06-12 | 2026-07-22 |
| [#1664](https://github.com/ROCm/ATOM/pull/1664) | [atom-vllm] enable dsv4 fp8 kvcache | @whx-sjtu | merged | 2026-07-22 | 2026-07-22 |
| [#1640](https://github.com/ROCm/ATOM/pull/1640) | [Feature] DeepSeek-V4 paged-SWA sparse checkpoint prefix-cac... | @yhl-amd | merged | 2026-07-20 | 2026-07-22 |
| [#1628](https://github.com/ROCm/ATOM/pull/1628) | [SGL][M3] Align attention path with atom | @zhuyuhua-v | merged | 2026-07-17 | 2026-07-22 |
| [#1660](https://github.com/ROCm/ATOM/pull/1660) | [CI] harden aiter-whl download (digest-mismatch fallback) + ... | @sunway513 | merged | 2026-07-21 | 2026-07-22 |

## mori (Active Development)
Repo: `ROCm/mori` | Last collected: 2026-08-04T10:25:46Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#524](https://github.com/ROCm/mori/pull/524) | fix(bench): correct the wrong hardware config | @kawhil-amd | open | 2026-08-04 | 2026-08-04 |
| [#517](https://github.com/ROCm/mori/pull/517) | feat(EPv2): update op interface for aiter fuse-moe tune conf... | @kawhil-amd | open | 2026-08-03 | 2026-08-04 |
| [#511](https://github.com/ROCm/mori/pull/511) | perf(EP): tune EPv1 MI355X EP8 for DeepSeek-V4-Pro / Kimi-K3... | @Duyi-Wang | open | 2026-07-31 | 2026-08-04 |
| [#512](https://github.com/ROCm/mori/pull/512) | (feat) generate perf report after nightly building | @QizhouZhang97 | open | 2026-07-31 | 2026-08-04 |
| [#459](https://github.com/ROCm/mori/pull/459) | test(ep): add configurable CLI knobs to dispatch/combine ben... | @amd-arozanov | open | 2026-07-09 | 2026-08-04 |
| [#513](https://github.com/ROCm/mori/pull/513) | feat(cco): gfx1250 support for the SDMA device API | @jhchouuu | open | 2026-07-31 | 2026-08-04 |
| [#514](https://github.com/ROCm/mori/pull/514) | perf(ep): add MI300X IntraNode/IntraNodeLL tuning configs fo... | @kudomcho | open | 2026-07-31 | 2026-08-04 |
| [#523](https://github.com/ROCm/mori/pull/523) | feat(umbp): support GPU buffers in distributed PoolClient | @maning00 | open | 2026-08-04 | 2026-08-04 |
| [#521](https://github.com/ROCm/mori/pull/521) | ep: allow EpDispatchCombineOp to be resized at runtime | @inkcherry | open | 2026-08-04 | 2026-08-04 |
| [#504](https://github.com/ROCm/mori/pull/504) | MORI-IO nixl-style cpp bench script | @amirakb89 | open | 2026-07-28 | 2026-08-04 |
| [#520](https://github.com/ROCm/mori/pull/520) | perf(EPv2): optimize epv2 kernel perf | @kawhil-amd | open | 2026-08-04 | 2026-08-04 |
| [#515](https://github.com/ROCm/mori/pull/515) | MORI-IO XGMI KV-Transfer Session Failure | @amd-wsung102 | open | 2026-07-31 | 2026-08-04 |
| [#518](https://github.com/ROCm/mori/pull/518) | CPU hot path improvements | @pemeliya | draft | 2026-08-03 | 2026-08-03 |
| [#506](https://github.com/ROCm/mori/pull/506) | MORI-IO CPU hot-path improvements + logging thread-safety | @pemeliya | open | 2026-07-29 | 2026-08-03 |
| [#510](https://github.com/ROCm/mori/pull/510) | roctx ranges | @AakarshAMD | open | 2026-07-30 | 2026-08-03 |
| [#345](https://github.com/ROCm/mori/pull/345) | feat(io): add RDMA telemetry snapshot APIs | @maning00 | open | 2026-06-01 | 2026-08-03 |
| [#177](https://github.com/ROCm/mori/pull/177) | [IO] Add TCP backend and benchmark/test coverage | @maning00 | open | 2026-03-02 | 2026-07-30 |
| [#444](https://github.com/ROCm/mori/pull/444) | perf(io): add busy-wait completion mode and numpy batch-tran... | @TianDi101 | open | 2026-07-01 | 2026-07-24 |
| [#491](https://github.com/ROCm/mori/pull/491) | fix(io): bound EventPool free-list to avoid HSA signal exhau... | @AMD-yanfeiwang | draft | 2026-07-20 | 2026-07-20 |
| [#434](https://github.com/ROCm/mori/pull/434) | Fix(io): track RDMA notification completions in transfer sta... | @amd-dlimpus | open | 2026-06-26 | 2026-07-09 |
| [#450](https://github.com/ROCm/mori/pull/450) | a2a_gemm examples with flydsl + mori | @zjing14 | draft | 2026-07-06 | 2026-07-07 |
| [#445](https://github.com/ROCm/mori/pull/445) | feat(shmem/sdma): implement address-based device putmem_nbi_... | @zjing14 | open | 2026-07-02 | 2026-07-03 |
| [#443](https://github.com/ROCm/mori/pull/443) | feat(io): Add configurable RDMA signal interval | @maning00 | open | 2026-07-01 | 2026-07-01 |
| [#246](https://github.com/ROCm/mori/pull/246) | chore: vendor msgpack-c and spdlog headers, remove submodule... | @jhchouuu | open | 2026-04-01 | 2026-04-01 |
| [#175](https://github.com/ROCm/mori/pull/175) | Add elastic EP for dispatch/combine flows | @maning00 | open | 2026-02-27 | 2026-02-27 |
| [#99](https://github.com/ROCm/mori/pull/99) | Feature: add expert map support for shared experts & EPLB | @TianDi101 | open | 2025-10-28 | 2026-01-08 |
| [#92](https://github.com/ROCm/mori/pull/92) | Enhancement of mori ep unit test | @dongmin-ra | open | 2025-10-23 | 2026-01-08 |
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
| [#302](https://github.com/ROCm/mori/pull/302) | ccl: fail fast when MORI_ENABLE_SDMA is not enabled | @inkcherry | merged | 2026-05-06 | 2026-07-20 |
| [#300](https://github.com/ROCm/mori/pull/300) | warn when AsyncLL runs without SDMA | @inkcherry | merged | 2026-04-30 | 2026-07-20 |
| [#281](https://github.com/ROCm/mori/pull/281) | fix: profile mode detection and doc corrections | @TianDi101 | merged | 2026-04-20 | 2026-07-20 |
| [#285](https://github.com/ROCm/mori/pull/285) | feat(ep): add profiler support to intranode dispatch/combine | @TianDi101 | merged | 2026-04-21 | 2026-07-20 |
| [#287](https://github.com/ROCm/mori/pull/287) | Docs: update arch image and add UMBP description | @TianDi101 | merged | 2026-04-22 | 2026-07-20 |
| [#235](https://github.com/ROCm/mori/pull/235) | Sdma ccl | @wuyl1 | merged | 2026-03-27 | 2026-07-20 |
| [#294](https://github.com/ROCm/mori/pull/294) | Feature/external kv block events rebased | @TianDi101 | merged | 2026-04-24 | 2026-07-20 |
| [#489](https://github.com/ROCm/mori/pull/489) | bench(io): add mem-type & sweep-step options | @maning00 | merged | 2026-07-20 | 2026-07-20 |
| [#227](https://github.com/ROCm/mori/pull/227) | Feature: add disp/comb memory benchmark | @TianDi101 | merged | 2026-03-25 | 2026-07-20 |
| [#224](https://github.com/ROCm/mori/pull/224) | Feat(shmem): expose mori_shmem_free_tensor for triton-dist l... | @isytwu | merged | 2026-03-25 | 2026-07-20 |
| [#234](https://github.com/ROCm/mori/pull/234) | Refactor: EP intranode kernel benchmark | @TianDi101 | merged | 2026-03-27 | 2026-07-20 |
| [#240](https://github.com/ROCm/mori/pull/240) | Fix: modify mori-io bench arg, use non-contiguous buffer as ... | @TianDi101 | merged | 2026-03-30 | 2026-07-20 |
| [#241](https://github.com/ROCm/mori/pull/241) | fix(io): harden RDMA CQE handling and tighten packaging/CI | @maning00 | merged | 2026-03-30 | 2026-07-20 |
| [#486](https://github.com/ROCm/mori/pull/486) | Adapt mori check / mori setup for Mellanox NICs | @QizhouZhang97 | merged | 2026-07-17 | 2026-07-20 |
| [#481](https://github.com/ROCm/mori/pull/481) | io/rdma: use RegisterRdmaMemoryRegionAuto for local + notif ... | @raviguptaamd | merged | 2026-07-16 | 2026-07-20 |
| [#488](https://github.com/ROCm/mori/pull/488) | build(setup): auto-disable UMBP when gRPC/Protobuf are missi... | @jhchouuu | merged | 2026-07-17 | 2026-07-20 |
| [#485](https://github.com/ROCm/mori/pull/485) | docs[io]: add tunning guide for benchmark | @maning00 | merged | 2026-07-17 | 2026-07-17 |
| [#484](https://github.com/ROCm/mori/pull/484) | feat(EPv2): combine gather inner-unroll + tuned geometry by ... | @jhchouuu | merged | 2026-07-16 | 2026-07-16 |
| [#483](https://github.com/ROCm/mori/pull/483) | ci(nightly): install wheels from artifact, stop bloating gh-... | @jhchouuu | merged | 2026-07-16 | 2026-07-16 |
| [#482](https://github.com/ROCm/mori/pull/482) | feat(ep): distribute dispatch_combine_v2 as an installable p... | @jhchouuu | merged | 2026-07-16 | 2026-07-16 |
| [#480](https://github.com/ROCm/mori/pull/480) | fix(cco): guard hipMemAllocationTypeUncached for older ROCm | @jhchouuu | merged | 2026-07-16 | 2026-07-16 |
| [#416](https://github.com/ROCm/mori/pull/416) | io/xgmi: honor sub-region base offset in IPC remapping (fixe... | @carlushuang | merged | 2026-06-22 | 2026-07-16 |
| [#265](https://github.com/ROCm/mori/pull/265) | Fix: profile mode for JIT kernel | @TianDi101 | merged | 2026-04-15 | 2026-07-16 |
| [#260](https://github.com/ROCm/mori/pull/260) | Fix: EP index overflow | @TianDi101 | merged | 2026-04-12 | 2026-07-16 |
| [#258](https://github.com/ROCm/mori/pull/258) | io: enable hidden-device xgmi ipc | @maning00 | merged | 2026-04-10 | 2026-07-16 |
| [#255](https://github.com/ROCm/mori/pull/255) | pybind: release GIL for blocking IOEngine bindings & xgmi be... | @maning00 | merged | 2026-04-09 | 2026-07-16 |
| [#256](https://github.com/ROCm/mori/pull/256) | Fix: async kernel recv launch bug | @TianDi101 | merged | 2026-04-09 | 2026-07-16 |
| [#252](https://github.com/ROCm/mori/pull/252) | Fix: EP intranode overflow bug when token>65536 | @TianDi101 | merged | 2026-04-07 | 2026-07-16 |
| [#250](https://github.com/ROCm/mori/pull/250) | fix(packaging): rename _jit_sources to _jit-sources to suppr... | @isytwu | merged | 2026-04-03 | 2026-07-16 |
| [#249](https://github.com/ROCm/mori/pull/249) | Fix: wrong EP test command on README | @TianDi101 | merged | 2026-04-02 | 2026-07-16 |
| [#245](https://github.com/ROCm/mori/pull/245) | Feature: EP memory footprint optimization & add max_total_re... | @TianDi101 | merged | 2026-04-01 | 2026-07-16 |
| [#209](https://github.com/ROCm/mori/pull/209) | Feat: UMBP Distributed integration | @TianDi101 | merged | 2026-03-22 | 2026-07-16 |

## flydsl (Active Development)
Repo: `ROCm/FlyDSL` | Last collected: 2026-08-04T10:25:49Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#960](https://github.com/ROCm/FlyDSL/pull/960) | [Kernel][MI350] Add bias, alibi bias and sink to flash atten... | @amd-nprotaso | open | 2026-08-03 | 2026-08-04 |
| [#945](https://github.com/ROCm/FlyDSL/pull/945) | [WIP][LLVM][Flydsl] bump up llvm for upstream and internal c... | @jli-melchior | open | 2026-07-31 | 2026-08-04 |
| [#954](https://github.com/ROCm/FlyDSL/pull/954) | BugFix for MegaMoE | @GwilliamHu | open | 2026-08-02 | 2026-08-04 |
| [#964](https://github.com/ROCm/FlyDSL/pull/964) | [Build] Default CMAKE_BUILD_TYPE to RelWithDebInfo when unse... | @sjfeng1999 | open | 2026-08-04 | 2026-08-04 |
| [#959](https://github.com/ROCm/FlyDSL/pull/959) | [Perf]opimize moe mxfp4 stage2 perf | @binding7012 | open | 2026-08-03 | 2026-08-04 |
| [#860](https://github.com/ROCm/FlyDSL/pull/860) | [Kernel] fp8 conv3d: 8-wave GEMM pipeline + BIG_IN fix | @jiacao-amd | open | 2026-07-15 | 2026-08-04 |
| [#907](https://github.com/ROCm/FlyDSL/pull/907) | Add stochastic rounding and philox RNG under rocdl | @kashif | open | 2026-07-26 | 2026-08-04 |
| [#933](https://github.com/ROCm/FlyDSL/pull/933) | [Perf] Keep runtime base and static tail separate in add_off... | @Phil-amd | open | 2026-07-30 | 2026-08-03 |
| [#901](https://github.com/ROCm/FlyDSL/pull/901) | Add Optimized MoE Routing Path | @amd-wsung102 | open | 2026-07-24 | 2026-08-03 |
| [#931](https://github.com/ROCm/FlyDSL/pull/931) | Add flex_attention (score_mod / mask_mod) on the generic fla... | @RichardChamberlain1 | draft | 2026-07-30 | 2026-08-03 |
| [#961](https://github.com/ROCm/FlyDSL/pull/961) | [Fix] Avoid runtime materialization in compile-only mode | @zhiding512 | open | 2026-08-03 | 2026-08-03 |
| [#958](https://github.com/ROCm/FlyDSL/pull/958) | [Feature][Test] Validate gfx1100 LDS and integer WMMA founda... | @skyguan92 | open | 2026-08-02 | 2026-08-03 |
| [#930](https://github.com/ROCm/FlyDSL/pull/930) | DSL-ify raw arith float ops in kernels (flash/mla/pa/moe), f... | @xudoyuan | open | 2026-07-30 | 2026-08-03 |
| [#948](https://github.com/ROCm/FlyDSL/pull/948) | MoE: add a16w mix fused 2-stage kernels (bf16 A × mxfp4/int4... | @coderfeli | open | 2026-08-01 | 2026-08-03 |
| [#912](https://github.com/ROCm/FlyDSL/pull/912) | Fix hierarchical reduced predicates in copy layout lowering | @HydraQYH | open | 2026-07-27 | 2026-08-03 |
| [#928](https://github.com/ROCm/FlyDSL/pull/928) | [Tool] Add per-kernel ISA resource delta table | @Phil-amd | open | 2026-07-30 | 2026-08-02 |
| [#957](https://github.com/ROCm/FlyDSL/pull/957) | Add SVD quant for Quark | @amd-xiaoyu12 | draft | 2026-08-02 | 2026-08-02 |
| [#947](https://github.com/ROCm/FlyDSL/pull/947) | [MoE] Port moe_gemm_2stage (stage1+stage2) to the new fx.* p... | @coderfeli | open | 2026-08-01 | 2026-08-01 |
| [#942](https://github.com/ROCm/FlyDSL/pull/942) | [Kernel] Add submanifold sparse 3D convolution (bf16 implici... | @jiacao-amd | draft | 2026-07-31 | 2026-08-01 |
| [#848](https://github.com/ROCm/FlyDSL/pull/848) | [Perf] Optimize rmsnorm/layernorm | @cschenjunlin | open | 2026-07-14 | 2026-07-31 |
| [#924](https://github.com/ROCm/FlyDSL/pull/924) | Unify benchmark timing contracts and add calibrated CI gates | @jhinpan | open | 2026-07-30 | 2026-07-30 |
| [#872](https://github.com/ROCm/FlyDSL/pull/872) | [Kernel] Add optimized 4-wave MXFP8 GEMM kernel for gfx950 | @aris134 | open | 2026-07-18 | 2026-07-30 |
| [#875](https://github.com/ROCm/FlyDSL/pull/875) | a16w16 for gfx1250 on flydsl | @omuhamma | open | 2026-07-20 | 2026-07-30 |
| [#433](https://github.com/ROCm/FlyDSL/pull/433) | Adds Grouped and Batched GEMM kernels with blockscaling matc... | @aryaman-gupta | open | 2026-04-23 | 2026-07-30 |
| [#891](https://github.com/ROCm/FlyDSL/pull/891) | [Test] Add gfx1250 WMMA lowering tests for additional dtypes | @AiyyappanMR | open | 2026-07-23 | 2026-07-30 |
| [#906](https://github.com/ROCm/FlyDSL/pull/906) | Add fast_divmod magic-number division helper | @kashif | open | 2026-07-26 | 2026-07-29 |
| [#920](https://github.com/ROCm/FlyDSL/pull/920) | [DSL] Preserve logical signedness of unsigned integer dtypes | @Arist12 | open | 2026-07-28 | 2026-07-29 |
| [#922](https://github.com/ROCm/FlyDSL/pull/922) | [llvm] bump up llvm and adapt FlyDSL to new api | @jli-melchior | open | 2026-07-29 | 2026-07-29 |
| [#918](https://github.com/ROCm/FlyDSL/pull/918) | [Bugfix][Dialect] Reject vector operands in atomic copy atom... | @AiyyappanMR | open | 2026-07-28 | 2026-07-29 |
| [#823](https://github.com/ROCm/FlyDSL/pull/823) | [MoE] Add gelu_tanh activation to MoE stage1 GEMM kernels | @jonahbernard | open | 2026-07-09 | 2026-07-28 |
| [#914](https://github.com/ROCm/FlyDSL/pull/914) | [Dialect][Perf] Don't merge mixed static/runtime offsets on ... | @Arist12 | open | 2026-07-27 | 2026-07-28 |
| [#910](https://github.com/ROCm/FlyDSL/pull/910) | [Kernel][Perf] Optimize paged-attention metadata decode | @fsx950223 | open | 2026-07-27 | 2026-07-28 |
| [#900](https://github.com/ROCm/FlyDSL/pull/900) | Enabling coexec llvm for Flydsl | @omuhamma | draft | 2026-07-24 | 2026-07-27 |
| [#909](https://github.com/ROCm/FlyDSL/pull/909) | [Kernel] Migrate SWA decode to tile programming | @fsx950223 | open | 2026-07-27 | 2026-07-27 |
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
| [#894](https://github.com/ROCm/FlyDSL/pull/894) | [Kernel][MI350] Add 8 wave GQA sliding-window attention kern... | @amd-nprotaso | merged | 2026-07-23 | 2026-08-04 |
| [#963](https://github.com/ROCm/FlyDSL/pull/963) | [gfx1250] Refactor LDS copy ops and unify A8W8 GEMM kernels | @aoli26 | merged | 2026-08-04 | 2026-08-04 |
| [#952](https://github.com/ROCm/FlyDSL/pull/952) | Feat: Add flydsl-lsp-server for FlyDSL .mlir editor support. | @Peter9606 | merged | 2026-08-01 | 2026-08-03 |
| [#956](https://github.com/ROCm/FlyDSL/pull/956) | [Opt] Lazily materialize static int tuple leaves | @sjfeng1999 | merged | 2026-08-02 | 2026-08-03 |
| [#950](https://github.com/ROCm/FlyDSL/pull/950) | [Perf]optimize the flash attention fp8 performance for gfx95... | @binding7012 | merged | 2026-08-01 | 2026-08-03 |
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
| [#801](https://github.com/ROCm/FlyDSL/pull/801) | [layernorm] Add backward pass for training (PR 3/3, #769) | @jhinpan | merged | 2026-07-03 | 2026-07-21 |
| [#855](https://github.com/ROCm/FlyDSL/pull/855) | [Perf] Optimize RMSNorm backward with staged reduction and v... | @jhinpan | merged | 2026-07-15 | 2026-07-21 |
| [#785](https://github.com/ROCm/FlyDSL/pull/785) | [2/5] autotune: add opt-in search and RMSNorm waves-per-EU t... | @jhinpan | merged | 2026-07-01 | 2026-07-20 |
| [#868](https://github.com/ROCm/FlyDSL/pull/868) | [Docs] Arithmetic types: authoritative spec + conformance su... | @sjfeng1999 | merged | 2026-07-16 | 2026-07-17 |
| [#845](https://github.com/ROCm/FlyDSL/pull/845) | [FMHA] Refactor kernels into shared helper framework | @yanguahe | merged | 2026-07-14 | 2026-07-17 |
| [#812](https://github.com/ROCm/FlyDSL/pull/812) | [kernels] Migrate pa_decode_swa reduce kernel to SharedAlloc... | @xudoyuan | merged | 2026-07-07 | 2026-07-17 |
| [#870](https://github.com/ROCm/FlyDSL/pull/870) | fix(kernels): correct stale kernels.mma import in mxfp4_pres... | @coderfeli | merged | 2026-07-16 | 2026-07-16 |
| [#865](https://github.com/ROCm/FlyDSL/pull/865) | [Doc] Add FlyDSL Project Status and Compatibility Notice | @jamestangg | merged | 2026-07-16 | 2026-07-16 |
| [#854](https://github.com/ROCm/FlyDSL/pull/854) | [Test] Expand RMSNorm backward configs, cache reuse, and Tor... | @jhinpan | merged | 2026-07-14 | 2026-07-16 |
| [#863](https://github.com/ROCm/FlyDSL/pull/863) | add xcd remap | @solinzby1 | merged | 2026-07-15 | 2026-07-16 |
| [#857](https://github.com/ROCm/FlyDSL/pull/857) | [CI] Make benchmark baselines fork-safe and bounded | @jhinpan | merged | 2026-07-15 | 2026-07-16 |
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

## transformer_engine (Active Development)
Repo: `ROCm/TransformerEngine` | Last collected: 2026-08-04T10:25:52Z

| # | Title | Author | Status | Created | Updated |
|---|-------|--------|--------|---------|---------|
| [#667](https://github.com/ROCm/TransformerEngine/pull/667) | Experimental Triton GEMM backend for TE PyTorch (BF16/FP16/F... | @wenchenvincent | open | 2026-07-09 | 2026-08-04 |
| [#689](https://github.com/ROCm/TransformerEngine/pull/689) | Honor timeout settings in subprocess run wrapper | @ipanfilo | open | 2026-08-01 | 2026-08-04 |
| [#676](https://github.com/ROCm/TransformerEngine/pull/676) | Experimental FlyDSL GEMM backend for TE PyTorch (BF16/FP16/F... | @aris134 | open | 2026-07-22 | 2026-08-03 |
| [#603](https://github.com/ROCm/TransformerEngine/pull/603) | TE AITER gfx1250 integration WIP | @Micky774 | draft | 2026-05-29 | 2026-08-03 |
| [#663](https://github.com/ROCm/TransformerEngine/pull/663) | Initial integration of a4w4 GEMM | @Micky774 | draft | 2026-07-07 | 2026-08-03 |
| [#678](https://github.com/ROCm/TransformerEngine/pull/678) | [ROCm] Jax Add softmax sink (learnable off-by-one) support f... | @shurale-nkn | open | 2026-07-24 | 2026-08-03 |
| [#625](https://github.com/ROCm/TransformerEngine/pull/625) | Add ROCm HIP small-seq fused attention via crossattn_hip_ker... | @VeeraRajasekhar | open | 2026-06-15 | 2026-08-03 |
| [#688](https://github.com/ROCm/TransformerEngine/pull/688) | Add pyyaml installation to ci prerequisites | @VeeraRajasekhar | open | 2026-07-31 | 2026-08-02 |
| [#683](https://github.com/ROCm/TransformerEngine/pull/683) | Updated AITER/QoLA | @Micky774 | open | 2026-07-28 | 2026-07-31 |
| [#687](https://github.com/ROCm/TransformerEngine/pull/687) | Consolidating blockwise FP32 scale flag | @asdfvg123 | open | 2026-07-31 | 2026-07-31 |
| [#666](https://github.com/ROCm/TransformerEngine/pull/666) | Updated CK/AITER Cmake Build | @Micky774 | open | 2026-07-09 | 2026-07-31 |
| [#649](https://github.com/ROCm/TransformerEngine/pull/649) | [Feat] Added JAX-Triton bridge for ROCm | @AllenFarcas | open | 2026-06-24 | 2026-07-30 |
| [#639](https://github.com/ROCm/TransformerEngine/pull/639) | grouped gemm microbenchmark: use te.GroupedLinear | @matthiasdiener | open | 2026-06-18 | 2026-07-29 |
| [#681](https://github.com/ROCm/TransformerEngine/pull/681) | Update CK-JIT to fix blob build failure if mv -no-clobber re... | @ipanfilo | open | 2026-07-24 | 2026-07-24 |
| [#679](https://github.com/ROCm/TransformerEngine/pull/679) | microbenchmarks: usv implementation | @matthiasdiener | draft | 2026-07-24 | 2026-07-24 |
| [#670](https://github.com/ROCm/TransformerEngine/pull/670) | [proof-of-concept] benchmarks dashboard | @matthiasdiener | draft | 2026-07-14 | 2026-07-24 |
| [#677](https://github.com/ROCm/TransformerEngine/pull/677) | microbenchmarks: add buffer rotation option | @matthiasdiener | open | 2026-07-23 | 2026-07-24 |
| [#673](https://github.com/ROCm/TransformerEngine/pull/673) | ci: bump te-rocm-wheels artifact retention 1d -> 5d | @wenchenvincent | open | 2026-07-17 | 2026-07-23 |
| [#637](https://github.com/ROCm/TransformerEngine/pull/637) | Interleaved Driver Benchmarking | @Micky774 | draft | 2026-06-18 | 2026-07-21 |
| [#675](https://github.com/ROCm/TransformerEngine/pull/675) | [wip] native nvfp4 GEMM support on gfx1250 | @matthiasdiener | draft | 2026-07-20 | 2026-07-21 |
| [#606](https://github.com/ROCm/TransformerEngine/pull/606) | [FEAT] Lightning Indexer | @Micky774 | open | 2026-06-01 | 2026-07-20 |
| [#659](https://github.com/ROCm/TransformerEngine/pull/659) | CI: Fix runners GPU isolation | @leo-automation | open | 2026-07-07 | 2026-07-08 |
| [#628](https://github.com/ROCm/TransformerEngine/pull/628) | Enable MultiCastTranspose for expert weights | @sudhu2k | open | 2026-06-16 | 2026-07-01 |
| [#655](https://github.com/ROCm/TransformerEngine/pull/655) | Ipanfilo/aiter split kv fwd | @ipanfilo | draft | 2026-06-29 | 2026-06-29 |
| [#620](https://github.com/ROCm/TransformerEngine/pull/620) | [FEAT] Microbenchmark add visualization | @Micky774 | open | 2026-06-08 | 2026-06-25 |
| [#614](https://github.com/ROCm/TransformerEngine/pull/614) | Incorporate statistical significance testing to benchmarks | @Micky774 | open | 2026-06-08 | 2026-06-23 |
| [#634](https://github.com/ROCm/TransformerEngine/pull/634) | [ROCm] Fix biased wgrad with fp32 gradient accumulation | @XinyuJiangCMU | open | 2026-06-18 | 2026-06-25 |
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
| [#515](https://github.com/ROCm/TransformerEngine/pull/515) | NVFP4: hadamard_transform_cast_fusion_columnwise | @matthiasdiener | draft | 2026-04-01 | 2026-04-20 |
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
