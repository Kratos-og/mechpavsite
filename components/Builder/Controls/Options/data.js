const data = {
  torso: [
    {
      model: "MP_SBT_CT_Body",
      img: "Subterra_Torso_CR_thumb",
      skin: { //variant
        name: 'Crash Test',
        FE_Code: 'CR',
        BE_Code: 'CT'
      },
      type: { // class
        name: 'Sub Terrain',
        BE_Code: 'SBT'
      }
    },
    { model: "MP_SBT_ELM_Body", img: "Subterra_Torso_GR_thumb" },
    { model: "MP_SBT_CS_Body", img: "Subterra_Torso_HZ_thumb" },
    { model: "MP_SBT_JD_Body", img: "Subterra_Torso_JG_thumb" },
    { model: "MP_SBT_LGD_Body", img: "Subterra_Torso_NV_thumb" },
    { model: "MP_SBT_LAB_Body", img: "Subterra_Torso_PL_thumb" },
    { model: "MP_DSE_CT_Body", img: "Hydra_Torso_CR_thumb" },
    { model: "MP_DSE_CS_Body", img: "Hydra_Torso_DB_thumb" },
    { model: "MP_DSE_ELM_Body", img: "Hydra_Torso_EM_thumb" },
    { model: "MP_DSE_JD_Body", img: "Hydra_Torso_JG_thumb" },
    { model: "MP_DSE_LGD_Body", img: "Hydra_Torso_NV_thumb" },
    { model: "MP_DSE_LAB_Body", img: "Hydra_Torso_PL_thumb" },
    { model: "MP_DSP_CT_Body", img: "Recon_Torso_CR_thumb" },
    { model: "MP_DSP_CS_Body", img: "Recon_Torso_DG_thumb" },
    { model: "MP_DSP_JD_Body", img: "Recon_Torso_JG_thumb" },
    { model: "MP_DSP_ELM_Body", img: "Recon_Torso_MR_thumb" },
    { model: "MP_DSP_LGD_Body", img: "Recon_Torso_NV_thumb" },
    { model: "MP_DSP_LAB_Body", img: "Recon_Torso_PL_thumb" },
    { model: "MP_DEF_CS_Body", img: "Defender_Torso_CM_thumb" },
    { model: "MP_DEF_CT_Body", img: "Defender_Torso_CR_thumb" },
    { model: "MP_DEF_JD_Body", img: "Defender_Torso_JG_thumb" },
    { model: "MP_DEF_ LGD_Body", img: "Defender_Torso_NV_thumb" },
    { model: "MP_DEF_ELM_Body", img: "Defender_Torso_OB_thumb" },
    { model: "MP_DEF_LAB_Body", img: "Defender_Torso_PL_thumb" },
    { model: "MP_NRG_CT_Body", img: "Reactor_Torso_CR_thumb" },
    { model: "MP_NRG_JD_Body", img: "Reactor_Torso_JG_thumb" },
    { model: "MP_NRG_LGD_Body", img: "Reactor_Torso_NV_thumb" },
    { model: "MP_NRG_LAB_Body", img: "Reactor_Torso_PL_thumb" },
    { model: "MP_NRG_ELM_Body", img: "Reactor_Torso_PR_thumb" },
    { model: "MP_NRG_CS_Body", img: "Reactor_Torso_PU_thumb" },
  ],
  leftarm: [
    {
      model: "MP_SBT_CT_Arm-L",
      img: "Subterra_Left Arm_CR_thumb",
    },
    { model: "MP_SBT_ELM_Arm-L", img: "Subterra_Left Arm_GR_thumb" },
    { model: "MP_SBT_CS_Arm-L", img: "Subterra_Left Arm_HZ_thumb" },
    { model: "MP_SBT_JD_Arm-L", img: "Subterra_Left Arm_JG_thumb" },
    { model: "MP_SBT_LGD_Arm-L", img: "Subterra_Left Arm_NV_thumb" },
    { model: "MP_SBT_LAB_Arm-L", img: "Subterra_Left Arm_PL_thumb" },
    { model: "MP_DSE_CT_Arm-L", img: "Hydra_Left Arm_CR_thumb" },
    { model: "MP_DSE_CS_Arm-L", img: "Hydra_Left Arm_DB_thumb" },
    { model: "MP_DSE_ELM_Arm-L", img: "Hydra_Left Arm_EM_thumb" },
    { model: "MP_DSE_JD_Arm-L", img: "Hydra_Left Arm_JG_thumb" },
    { model: "MP_DSE_LGD_Arm-L", img: "Hydra_Left Arm_NV_thumb" },
    { model: "MP_DSE_LAB_Arm-L", img: "Hydra_Left Arm_PL_thumb" },
    { model: "MP_DSP_CT_Arm-L", img: "Recon_Left Arm_CR_thumb" },
    { model: "MP_DSP_CS_Arm-L", img: "Recon_Left Arm_DG_thumb" },
    { model: "MP_DSP_JD_Arm-L", img: "Recon_Left Arm_JG_thumb" },
    { model: "MP_DSP_ELM_Arm-L", img: "Recon_Left Arm_MR_thumb" },
    { model: "MP_DSP_LGD_Arm-L", img: "Recon_Left Arm_NV_thumb" },
    { model: "MP_DSP_LAB_Arm-L", img: "Recon_Left Arm_PL_thumb" },
    { model: "MP_DEF_CS_Arm-L", img: "Defender_Left Arm_CM_thumb" },
    { model: "MP_DEF_CT_Arm-L", img: "Defender_Left Arm_CR_thumb" },
    { model: "MP_DEF_JD_Arm-L", img: "Defender_Left Arm_JG_thumb" },
    { model: "MP_DEF_LGD_Arm-L", img: "Defender_Left Arm_NV_thumb" },
    { model: "MP_DEF_ELM_Arm-L", img: "Defender_Left Arm_OB_thumb" },
    { model: "MP_DEF_LAB_Arm-L", img: "Defender_Left Arm_PL_thumb" },
    { model: "MP_NRG_CT_Arm-L", img: "Reactor_Left Arm_CR_thumb" },
    { model: "MP_NRG_JD_Arm-L", img: "Reactor_Left Arm_JG_thumb" },
    { model: "MP_NRG_LGD_Arm-L", img: "Reactor_Left Arm_NV_thumb" },
    { model: "MP_NRG_LAB_Arm-L", img: "Reactor_Left Arm_PL_thumb" },
    { model: "MP_NRG_ELM_Arm-L", img: "Reactor_Left Arm_PR_thumb" },
    { model: "MP_NRG_CS_Arm-L", img: "Reactor_Left Arm_PU_thumb" },
  ],
  rightarm: [
    {
      model: "MP_SBT_CT_Arm-R",
      img: "Subterra_Right Arm_CR_thumb",
    },
    { model: "MP_SBT_ELM_Arm-R", img: "Subterra_Right Arm_GR_thumb" },
    { model: "MP_SBT_CS_Arm-R", img: "Subterra_Right Arm_HZ_thumb" },
    { model: "MP_SBT_JD_Arm-R", img: "Subterra_Right Arm_JG_thumb" },
    { model: "MP_SBT_LGD_Arm-R", img: "Subterra_Right Arm_NV_thumb" },
    { model: "MP_SBT_LAB_Arm-R", img: "Subterra_Right Arm_PL_thumb" },
    { model: "MP_DSE_CT_Arm-R", img: "Hydra_Right Arm_CR_thumb" },
    { model: "MP_DSE_CS_Arm-R", img: "Hydra_Right Arm_DB_thumb" },
    { model: "MP_DSE_ELM_Arm-R", img: "Hydra_Right Arm_EM_thumb" },
    { model: "MP_DSE_JD_Arm-R", img: "Hydra_Right Arm_JG_thumb" },
    { model: "MP_DSE_LGD_Arm-R", img: "Hydra_Right Arm_NV_thumb" },
    { model: "MP_DSE_LAB_Arm-R", img: "Hydra_Right Arm_PL_thumb" },
    { model: "MP_DSP_CT_Arm-R", img: "Recon_Right Arm_CR_thumb" },
    { model: "MP_DSP_CS_Arm-R", img: "Recon_Right Arm_DG_thumb" },
    { model: "MP_DSP_JD_Arm-R", img: "Recon_Right Arm_JG_thumb" },
    { model: "MP_DSP_ELM_Arm-R", img: "Recon_Right Arm_MR_thumb" },
    { model: "MP_DSP_LGD_Arm-R", img: "Recon_Right Arm_NV_thumb" },
    { model: "MP_DSP_LAB_Arm-R", img: "Recon_Right Arm_PL_thumb" },
    { model: "MP_DEF_CS_Arm-R", img: "Defender_Right Arm_CM_thumb" },
    { model: "MP_DEF_CT_Arm-R", img: "Defender_Right Arm_CR_thumb" },
    { model: "MP_DEF_JD_Arm-R", img: "Defender_Right Arm_JG_thumb" },
    { model: "MP_DEF_LGD_Arm-R", img: "Defender_Right Arm_NV_thumb" },
    { model: "MP_DEF_ELM_Arm-R", img: "Defender_Right Arm_OB_thumb" },
    { model: "MP_DEF_LAB_Arm-R", img: "Defender_Right Arm_PL_thumb" },
    { model: "MP_NRG_CT_Arm-R", img: "Reactor_Right Arm_CR_thumb" },
    { model: "MP_NRG_JD_Arm-R", img: "Reactor_Right Arm_JG_thumb" },
    { model: "MP_NRG_LGD_Arm-R", img: "Reactor_Right Arm_NV_thumb" },
    { model: "MP_NRG_LAB_Arm-R", img: "Reactor_Right Arm_PL_thumb" },
    { model: "MP_NRG_ELM_Arm-R", img: "Reactor_Right Arm_PR_thumb" },
    { model: "MP_NRG_CS_Arm-R", img: "Reactor_Right Arm_PU_thumb" },
  ],
  backpack: [
    { model: "MP_SBT_CT_Backpack", img: "Subterra_Back Pack_CR_thumb" },
    { model: "MP_SBT_ELM_Backpack", img: "Subterra_Back Pack_GR_thumb" },
    { model: "MP_SBT_CS_Backpack", img: "Subterra_Back Pack_HZ_thumb" },
    { model: "MP_SBT_JD_Backpack", img: "Subterra_Back Pack_JG_thumb" },
    { model: "MP_SBT_LGD_Backpack", img: "Subterra_Back Pack_NV_thumb" },
    { model: "MP_SBT_LAB_Backpack", img: "Subterra_Back Pack_PL_thumb" },
    { model: "MP_DSE_CT_Backpack", img: "Hydra_Back Pack_CR_thumb" },
    { model: "MP_DSE_CS_Backpack", img: "Hydra_Back Pack_DB_thumb" },
    { model: "MP_DSE_ELM_Backpack", img: "Hydra_Back Pack_EM_thumb" },
    { model: "MP_DSE_JD_Backpack", img: "Hydra_Back Pack_JG_thumb" },
    { model: "MP_DSE_LGD_Backpack", img: "Hydra_Back Pack_NV_thumb" },
    { model: "MP_DSE_LAB_Backpack", img: "Hydra_Back Pack_PL_thumb" },
    { model: "MP_DSP_CT_Backpack", img: "Recon_Back Pack_CR_thumb" },
    { model: "MP_DSP_CS_Backpack", img: "Recon_Back Pack_DG_thumb" },
    { model: "MP_DSP_JD_Backpack", img: "Recon_Back Pack_JG_thumb" },
    { model: "MP_DSP_ELM_Backpack", img: "Recon_Back Pack_MR_thumb" },
    { model: "MP_DSP_LGD_Backpack", img: "Recon_Back Pack_NV_thumb" },
    { model: "MP_DSP_LAB_Backpack", img: "Recon_Back Pack_PL_thumb" },
    { model: "MP_DEF_CS_Backpack", img: "Defender_Back Pack_CM_thumb" },
    { model: "MP_DEF_CT_Backpack", img: "Defender_Back Pack_CR_thumb" },
    { model: "MP_DEF_JD_Backpack", img: "Defender_Back Pack_JG_thumb" },
    { model: "MP_DEF_ LGD_Backpack", img: "Defender_Back Pack_NV_thumb" },
    { model: "MP_DEF_ELM_Backpack", img: "Defender_Back Pack_OB_thumb" },
    { model: "MP_DEF_LAB_Backpack", img: "Defender_Back Pack_PL_thumb" },
    { model: "MP_NRG_CT_Backpack", img: "Reactor_Back Pack_CR_thumb" },
    { model: "MP_NRG_JD_Backpack", img: "Reactor_Back Pack_JG_thumb" },
    { model: "MP_NRG_LGD_Backpack", img: "Reactor_Back Pack_NV_thumb" },
    { model: "MP_NRG_LAB_Backpack", img: "Reactor_Back Pack_PL_thumb" },
    { model: "MP_NRG_ELM_Backpack", img: "Reactor_Back Pack_PR_thumb" },
    { model: "MP_NRG_CS_Backpack", img: "Reactor_Back Pack_PU_thumb" },
  ],
  legs: [
    { model: "MP_SBT_CT_Legs", img: "Subterra_Legs_CR_thumb" },
    { model: "MP_SBT_ELM_Legs", img: "Subterra_Legs_GR_thumb" },
    { model: "MP_SBT_CS_Legs", img: "Subterra_Legs_HZ_thumb" },
    { model: "MP_SBT_JD_Legs", img: "Subterra_Legs_JG_thumb" },
    { model: "MP_SBT_LGD_Legs", img: "Subterra_Legs_NV_thumb" },
    { model: "MP_SBT_LAB_Legs", img: "Subterra_Legs_PL_thumb" },
    { model: "MP_DSE_CT_Legs", img: "Hydra_Legs_CR_thumb" },
    { model: "MP_DSE_CS_Legs", img: "Hydra_Legs_DB_thumb" },
    { model: "MP_DSE_ELM_Legs", img: "Hydra_Legs_EM_thumb" },
    { model: "MP_DSE_JD_Legs", img: "Hydra_Legs_JG_thumb" },
    { model: "MP_DSE_LGD_Legs", img: "Hydra_Legs_NV_thumb" },
    { model: "MP_DSE_LAB_Legs", img: "Hydra_Legs_PL_thumb" },
    { model: "MP_DSP_CT_Legs", img: "Recon_Legs_CR_thumb" },
    { model: "MP_DSP_CS_Legs", img: "Recon_Legs_DG_thumb" },
    { model: "MP_DSP_JD_Legs", img: "Recon_Legs_JG_thumb" },
    { model: "MP_DSP_ELM_Legs", img: "Recon_Legs_MR_thumb" },
    { model: "MP_DSP_LGD_Legs", img: "Recon_Legs_NV_thumb" },
    { model: "MP_DSP_LAB_Legs", img: "Recon_Legs_PL_thumb" },
    { model: "MP_DEF_CS_Legs", img: "Defender_Legs_CM_thumb" },
    { model: "MP_DEF_CT_Legs", img: "Defender_Legs_CR_thumb" },
    { model: "MP_DEF_JD_Legs", img: "Defender_Legs_JG_thumb" },
    { model: "MP_DEF_ LGD_Legs", img: "Defender_Legs_NV_thumb" },
    { model: "MP_DEF_ELM_Legs", img: "Defender_Legs_OB_thumb" },
    { model: "MP_DEF_LAB_Legs", img: "Defender_Legs_PL_thumb" },
    { model: "MP_NRG_CT_Legs", img: "Reactor_Legs_CR_thumb" },
    { model: "MP_NRG_JD_Legs", img: "Reactor_Legs_JG_thumb" },
    { model: "MP_NRG_LGD_Legs", img: "Reactor_Legs_NV_thumb" },
    { model: "MP_NRG_LAB_Legs", img: "Reactor_Legs_PL_thumb" },
    { model: "MP_NRG_ELM_Legs", img: "Reactor_Legs_PR_thumb" },
    { model: "MP_NRG_CS_Legs", img: "Reactor_Legs_PU_thumb" },
  ],
};

module.exports = data;
