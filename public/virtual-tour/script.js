(function(){
    var script = {
 "start": "this.playAudioList([this.audio_E0CCF9CA_C457_F286_41DE_95D6711372CB]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6",
  "this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6",
  "this.Image_FD82565D_C450_7A69_41E8_6552EF353084",
  "this.Image_FB1843E6_C450_1A5B_41D6_88565D043624",
  "this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE",
  "this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4",
  "this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727",
  "this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93",
  "this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194",
  "this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A",
  "this.Image_841B56FA_C450_3A2B_41C9_FB262227D746",
  "this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8",
  "this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0",
  "this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615",
  "this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4",
  "this.Image_854AC6EC_C4D0_7A2F_41CD_9327261CDCE4",
  "this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77",
  "this.Image_F39C99F9_EE11_33C3_41D5_661957625925",
  "this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92",
  "this.Image_F022C191_EEFF_3040_41CC_398D96114DEC",
  "this.Image_F0617A39_EEFF_7040_41EB_41841044B84B",
  "this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D",
  "this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395",
  "this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC",
  "this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9",
  "this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25",
  "this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6",
  "this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177",
  "this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4",
  "this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70",
  "this.Image_E79D8E58_FE45_F212_41C4_E37290F07366",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "paddingLeft": 0,
 "definitions": [{
 "duration": 1000,
 "id": "effect_CD3C745A_EE17_F0C1_41CF_EB8B99368F4D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -78.06,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "manualRotationSpeed": 1099,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE38BA37_FE45_F21E_41EA_4E0E6F6FD590",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "26",
 "hfovMin": "150%",
 "id": "panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC",
 "overlays": [
  "this.overlay_9584CE56_B365_68A0_41CD_19DE16C1D342",
  "this.overlay_94E39742_B33D_D8A0_41D0_0A508B92049B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_t.jpg",
 "hfovMax": 134
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14 FIXZZZ",
 "hfovMin": "150%",
 "id": "panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E",
 "overlays": [
  "this.overlay_A997543F_B32F_78E0_41AC_8504F1D29B71",
  "this.overlay_A80F9442_B32F_F8A0_41DA_EB05FC94C261",
  "this.overlay_A8836A3C_B324_A8E0_41CD_2E51DCDAB6D3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F079937C_EE31_10C1_41E8_4EED73DFDEE9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F916475A_C470_1A6B_41C7_0B7519A37A6D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE372A27_FE45_F23E_41CC_C5917146F97C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "36",
 "hfovMin": "150%",
 "id": "panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
 "overlays": [
  "this.overlay_A9536309_B60F_AD25_41E5_6001774B678C",
  "this.overlay_A90895AD_B60F_F57D_41E1_B1CD50273165",
  "this.overlay_A9F248F3_B60F_BCE5_41DB_9E3EAAA77CB8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_t.jpg",
 "hfovMax": 139
},
{
 "initialPosition": {
  "yaw": 21.91,
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "pitch": -8.45
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": -7.35,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E353ED72_FE45_F616_41AA_076AABF8C0A0",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 121
},
{
 "initialPosition": {
  "yaw": -76.22,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC2BEC43_FE45_F676_41CC_A41345830716",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 127
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2 FIKS",
 "hfovMin": "150%",
 "id": "panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
 "overlays": [
  "this.overlay_A00ED11D_B31C_B8A0_41A1_6DA4BACD9BC5",
  "this.overlay_A0BB4488_B31C_F9A0_41DE_B0EC83E3BF7A",
  "this.overlay_A7269F42_B31D_68A0_41D5_09BD013F1802"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_t.jpg",
 "hfovMax": 141
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -2.01,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 741
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 14.08,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -30.46
},
{
 "initialPosition": {
  "yaw": 135.92,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E36BFDCA_FE45_F676_41DE_BCC50F71263E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -61.53,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "manualRotationSpeed": 1127,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1E1D9DD_FE45_FE12_41E2_19874494205B",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 282
},
{
 "initialPosition": {
  "yaw": -92.76,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC5B3C4E_FE45_F60E_41E7_9B0CFC09ED1F",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 130
},
{
 "duration": 1000,
 "id": "effect_F079A374_EE31_10C1_41D3_26043E8A3D6C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_80009E8F_C4F0_0AE9_41D2_22B86EDBA62F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -2.76,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "manualRotationSpeed": 1282,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFDD5BED_FE45_F232_41EB_E2E5F8EEA2B3",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 19.09,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 19.09,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 19.09,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -1.84,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "manualRotationSpeed": 1296,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E399EDDC_FE45_F612_41EB_0E45D307982A",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "manualRotationSpeed": 1280,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3912DD4_FE45_F612_41EE_141155B734E2",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "duration": 1000,
 "id": "effect_F0780379_EE31_10C3_41BE_E0146105BFCE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5 OPSI PILIHAN",
 "hfovMin": "150%",
 "id": "panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
 "overlays": [
  "this.overlay_A56068DF_B32D_E9A0_41E6_4C46141E0DE6",
  "this.overlay_A59D89BE_B32D_ABE1_41CC_6B6BEEC4BA8E",
  "this.overlay_A54691CE_B32C_FBA1_41E1_B6CE6E04EA1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E",
 "overlays": [
  "this.overlay_AED128C4_B365_A9A1_41C7_D05B10BDAB0C",
  "this.overlay_93BFC6D5_B36B_B9A0_41D9_3A452E072880"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -151.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.43,
   "panorama": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956",
   "distance": 1
  },
  {
   "yaw": 26.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.98,
   "panorama": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19",
 "hfovMin": "150%",
 "id": "panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
 "overlays": [
  "this.overlay_AD4701C5_B36B_7BA0_41E0_EDC93A706D12",
  "this.overlay_ACA50AE8_B36C_E960_41DE_8002508E90E3",
  "this.overlay_92E78E88_B36D_A9A1_41E2_51287B5BF963"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -170.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.98,
   "panorama": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_t.jpg",
 "hfovMax": 133
},
{
 "duration": 1000,
 "id": "effect_F078E379_EE31_10C3_417D_49A27A0CA18D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F079D37D_EE31_10C3_41D6_8499C14711C2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "37",
 "hfovMin": "114%",
 "id": "panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B",
 "overlays": [
  "this.overlay_EF46D486_CBB2_FC4F_41EB_444355854BC0",
  "this.overlay_EABEA380_CBB2_1443_41D1_A89EB8C2469C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_t.jpg",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1 OKE  ASLI FIXSSS",
 "hfovMin": "400%",
 "id": "panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90",
 "overlays": [
  "this.overlay_A1C6A869_B31B_E960_41B7_E8104EF9ADF8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_t.jpg",
 "hfovMax": 141
},
{
 "duration": 1000,
 "id": "effect_F8F0774A_C470_1A6B_41DA_321BE5D21776",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 138.67,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEA9BB30_FE45_F212_41DE_EB92BB302001",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3296D5D_FE45_F612_41E9_238830C73525",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 121
},
{
 "duration": 1000,
 "id": "effect_80046E8F_C4F0_0AE9_41D8_09D748091354",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 1.76,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": -13.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "27",
 "hfovMin": "120%",
 "id": "panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458",
 "overlays": [
  "this.overlay_9B96CF9C_B365_A7A0_41D6_A88A55A4FE7E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F079837C_EE31_10C1_41D3_6CB27F0DA30B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_8006AE8F_C4F0_0AE9_41DC_516071D8D6F2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 121
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "29",
 "hfovMin": "150%",
 "id": "panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
 "overlays": [
  "this.overlay_9EC39028_B31D_78E0_41D6_4C373A6D90A0",
  "this.overlay_9DF8C986_B31D_ABA0_41D0_74252BF8AF1B",
  "this.overlay_9FE5D979_B365_6B60_41DD_7938B5512458",
  "this.overlay_9C6877F6_B325_6760_41DC_AC2B449FCA6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_t.jpg",
 "hfovMax": 133
},
{
 "initialPosition": {
  "yaw": -176.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF8F8BD2_FE45_F216_41DB_9399A58F5697",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_E0088E71_FE45_F212_41DA_9960F7995A3D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 7.16,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -1.05
 },
 "manualRotationSpeed": 1296,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "duration": 1000,
 "id": "effect_F079B37C_EE31_10C1_41E6_7BAE6A8C55D1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF9E1BC7_FE45_F27E_41E9_B883696A60C3",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F0786372_EE31_10C1_41C6_851E423CCBA5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 22.04,
  "class": "PanoramaCameraPosition",
  "pitch": -9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1B879A0_FE45_FE32_41D8_2757DCE59E61",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 130
},
{
 "initialPosition": {
  "yaw": -169.9,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1FCE9D4_FE45_FE12_41E6_FF71216F7942",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 43.16,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E36D2DC1_FE45_F672_41EC_DC88B54DB448",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "initialPosition": {
  "yaw": -9.18,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEE32B70_FE45_F212_41D2_8037DB77CDFC",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 110
},
{
 "duration": 1000,
 "id": "effect_F079C37D_EE31_10C3_41D9_761497031AFF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1390
  },
  {
   "url": "media/popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 741
  },
  {
   "url": "media/popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 370
  }
 ],
 "id": "ImageResource_E89A15D8_CA72_1F96_41C2_C8C496E278DA",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "21",
 "hfovMin": "150%",
 "id": "panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F",
 "overlays": [
  "this.overlay_ADE7417B_B36C_DB67_41D1_9A6F691448E2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_t.jpg",
 "hfovMax": 145
},
{
 "duration": 1000,
 "id": "effect_F916675A_C470_1A6B_41E4_7F29B252003B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -9.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3783DAF_FE45_F60E_41E1_7AFF2B1FA1E9",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "initialPosition": {
  "yaw": 175.41,
  "hfov": 142,
  "class": "PanoramaCameraPosition",
  "pitch": -21.12
 },
 "manualRotationSpeed": 1549,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 311.8,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1DF09B9_FE45_FE12_41DE_A44CB5C56FBE",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 23
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "hfovMin": "150%",
 "id": "panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A",
 "overlays": [
  "this.overlay_AE700CC2_B365_A9A0_4199_80AFAD3DD6A2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_t.jpg",
 "hfovMax": 150
},
{
 "duration": 1000,
 "id": "effect_F078337A_EE31_10C1_41E6_F75C09D2FAD3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.55,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1A339A9_FE45_FE32_41E1_B594F60DFF20",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -173.57,
  "class": "PanoramaCameraPosition",
  "pitch": 38.57
 },
 "manualRotationSpeed": 1239,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC16FC15_FE45_F612_41E2_EC762E1BE17F",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 290
},
{
 "initialPosition": {
  "yaw": 66.12,
  "class": "PanoramaCameraPosition",
  "pitch": -27.55
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E386CDE5_FE45_F632_41EF_13DFD2CB806C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1852986_FE45_FEFE_41D1_572725F2EFDB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1239,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 290
},
{
 "initialPosition": {
  "yaw": 4.59,
  "hfov": 135,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCA20C9C_FE45_F612_41E7_0F876DEC22B4",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 107
},
{
 "initialPosition": {
  "yaw": 22.04,
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "pitch": -15.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1D459B1_FE45_FE12_41E7_B72CCDF81F97",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 33.06,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "manualRotationSpeed": 1155,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEF39B67_FE45_F23E_41E2_A60C37CEC8ED",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF5A0BA4_FE45_F232_41EE_66CBA7822341",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1282,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE1FF9EF_FE45_FE0E_41EB_101AE12B1998",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 110
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 110
},
{
 "initialPosition": {
  "yaw": -166.22,
  "class": "PanoramaCameraPosition",
  "pitch": -29.39
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF249B92_FE45_F216_41B9_0310F5DFBD0C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 6.31,
  "hfov": 116,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1211,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1EB69E5_FE45_FE32_41E6_5B40310A0132",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 282
},
{
 "initialPosition": {
  "yaw": 30.31,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "manualRotationSpeed": 1155,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE973ACC_FE45_F272_41EA_DE9262A533C3",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "initialPosition": {
  "yaw": 176.33,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF370B89_FE45_F2F2_41D8_2A3926DF353F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 162.63,
  "hfov": 136,
  "class": "PanoramaCameraPosition",
  "pitch": 0.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 132
},
{
 "duration": 1000,
 "id": "effect_8000BE8F_C4F0_0AE9_41DE_547EEF8900E6",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 28.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC347C2E_FE45_F60E_41BD_113B6D491B61",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F8CB874A_C470_1A6B_41E4_0CAC43A47801",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "32 PILIHAN",
 "hfovMin": "150%",
 "id": "panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296",
 "overlays": [
  "this.overlay_9DA42C85_B36B_A9A0_41AE_1B8239CC79A7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_t.jpg",
 "hfovMax": 135
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 144
},
{
 "duration": 1000,
 "id": "effect_F079D374_EE31_10C1_41ED_4D31684226B6",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F0798373_EE31_10C7_41E1_974D540216A9",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -92.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC8CDC84_FE45_F6F2_41B7_30725137FF49",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_E0130E66_FE45_F23E_41B0_88B2F259A2C1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -51.43,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "manualRotationSpeed": 1127,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFC31BF5_FE45_F212_41DF_4A2257679F57",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 282
},
{
 "initialPosition": {
  "yaw": 96.43,
  "class": "PanoramaCameraPosition",
  "pitch": -59.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF54CB9B_FE45_F216_41E1_55CE8C1CAF4E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "initialPosition": {
  "yaw": 19.29,
  "class": "PanoramaCameraPosition",
  "pitch": 10.1
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC6EBC6F_FE45_F60E_419E_85EEDD28280F",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F8CD574A_C470_1A6B_41E0_D5D0615032A9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -1.4,
  "hfov": 142,
  "class": "PanoramaCameraPosition",
  "pitch": -18.42
 },
 "manualRotationSpeed": 1549,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 311.8,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 23
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10",
 "hfovMin": "150%",
 "id": "panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B",
 "overlays": [
  "this.overlay_ABC69F15_B33B_68A0_41E4_DE4EB20396BC",
  "this.overlay_AAF71E46_B324_A8A0_41D3_7D39170872FE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -174.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.68,
   "panorama": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_t.jpg",
 "hfovMax": 131
},
{
 "duration": 1000,
 "id": "effect_F8D8774A_C470_1A6B_41C4_B842A921BCDC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "6",
 "hfovMin": "150%",
 "id": "panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B",
 "overlays": [
  "this.overlay_A6CB08E2_B32D_E960_41A3_81F538E9CC5C",
  "this.popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E",
  "this.overlay_E21A2258_CA72_1497_4197_A64373D9B63E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_t.jpg",
 "hfovMax": 132
},
{
 "duration": 1000,
 "id": "effect_F8C3974A_C470_1A6B_41E7_4C39658F34C9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  "this.PanoramaPlayListItem_E145F964_FE45_FE32_41E8_725FBCD26D06",
  {
   "media": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_camera"
  },
  {
   "media": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_camera"
  },
  {
   "media": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_camera"
  },
  "this.PanoramaPlayListItem_E1449965_FE45_FE32_41E8_93C244076E2A",
  {
   "media": "this.panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_camera"
  },
  "this.PanoramaPlayListItem_E1473965_FE45_FE32_41D5_A35757265AC2",
  "this.PanoramaPlayListItem_E1478965_FE45_FE32_41CF_4DA660EE060E",
  {
   "media": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_camera"
  },
  "this.PanoramaPlayListItem_E176E96D_FE45_FE32_41E5_321E4F987B03",
  {
   "media": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_camera"
  },
  "this.PanoramaPlayListItem_E171596E_FE45_FE0E_41E9_4D782A23FC49",
  "this.PanoramaPlayListItem_E170396E_FE45_FE0E_41D7_A7602663F495",
  "this.PanoramaPlayListItem_E171C96E_FE45_FE0E_41E7_C21CB7C06E5F",
  {
   "media": "this.panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_camera"
  },
  "this.PanoramaPlayListItem_E1415965_FE45_FE32_41DB_5B66719A4E61",
  {
   "media": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_camera"
  },
  "this.PanoramaPlayListItem_E141A966_FE45_FE3E_41E5_BF72B95215C3",
  {
   "media": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_camera"
  },
  {
   "media": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_camera"
  },
  {
   "media": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_camera"
  },
  "this.PanoramaPlayListItem_E1400966_FE45_FE3E_41CD_5DFD23262F7B",
  "this.PanoramaPlayListItem_E1437966_FE45_FE3E_41E4_EA053766F8E4",
  "this.PanoramaPlayListItem_E1438967_FE45_FE3E_41CB_54C66C1A00F7",
  "this.PanoramaPlayListItem_E14CE968_FE45_FE32_41EB_F33C3E352FFB",
  {
   "media": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_camera"
  },
  {
   "media": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_camera"
  },
  "this.PanoramaPlayListItem_E14B896B_FE45_FE36_41DF_4A94034E34BE",
  "this.PanoramaPlayListItem_E148196A_FE45_FE36_41E3_999968304C17",
  "this.PanoramaPlayListItem_E14B596A_FE45_FE36_41EA_B6C940FF2576",
  {
   "media": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_camera"
  },
  "this.PanoramaPlayListItem_E14E6968_FE45_FE32_41E6_AD02C94F0D80",
  "this.PanoramaPlayListItem_E14AB96B_FE45_FE36_41A9_8A902B474D41",
  {
   "media": "this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296",
   "end": "if(this.existsKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')){ if(this.getKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')) { this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true, -1, this.effect_F079E375_EE31_10C3_41CE_40AF4237042F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false, -1, this.effect_E3CA1E44_FE45_F272_41E8_47BD94BC082F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')",
   "start": "this.keepComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true)",
   "begin": "this.registerKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D', this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 33, 34); this.keepComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false); this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true, -1, this.effect_F079E375_EE31_10C3_41CE_40AF4237042F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_camera"
  },
  {
   "media": "this.panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_camera"
  },
  "this.PanoramaPlayListItem_E14EA969_FE45_FE32_41C2_3CDCDE9EE321",
  {
   "media": "this.panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_camera"
  },
  {
   "media": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_camera"
  },
  "this.PanoramaPlayListItem_E149D96A_FE45_FE36_41EE_922CEBD74EAF",
  {
   "media": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_camera"
  },
  {
   "media": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_camera"
  },
  "this.PanoramaPlayListItem_E176E96D_FE45_FE32_41CE_02389E410DD1",
  {
   "media": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC",
   "end": "this.setComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, false, -1, this.effect_F078437B_EE31_10C7_41DB_12EE23CA7341, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43); this.keepComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, false); this.setComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, true, -1, this.effect_F078537B_EE31_10C7_41C3_3B5471E28A8D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_camera"
  },
  "this.PanoramaPlayListItem_E177B96C_FE45_FE32_41EA_A6DF59E57D8C",
  "this.PanoramaPlayListItem_E174A96C_FE45_FE32_41E4_4F44A54D6BD0",
  "this.PanoramaPlayListItem_E1445964_FE45_FE32_41DD_CB4703C3E051",
  "this.PanoramaPlayListItem_E175D96B_FE45_FE36_41CD_21574374AA5B",
  {
   "media": "this.panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_camera"
  },
  {
   "media": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_camera"
  },
  "this.PanoramaPlayListItem_E14DC967_FE45_FE3E_41D2_8990E8CCDCA8",
  "this.PanoramaPlayListItem_E142A967_FE45_FE3E_41DA_16C865544C88",
  {
   "media": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08",
   "end": "if(this.existsKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')){ if(this.getKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')) { this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_CD3C745A_EE17_F0C1_41CF_EB8B99368F4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false, -1, this.effect_E3F07E50_FE45_F212_4192_3490C2F3A4FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')",
   "start": "this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true)",
   "begin": "this.registerKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9', this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 51, 52); this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false); this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_CD3C745A_EE17_F0C1_41CF_EB8B99368F4D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_camera"
  },
  {
   "media": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_camera"
  },
  {
   "media": "this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE7C5AA0_FE45_F232_41ED_3F27A4BA7CE5",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "duration": 1000,
 "id": "effect_F0799372_EE31_10C1_41D3_E8507AE25A91",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13",
 "hfovMin": "150%",
 "id": "panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3",
 "overlays": [
  "this.overlay_A9CABC78_B32D_E960_41DF_52F30EED2C63",
  "this.overlay_A9F701FC_B32D_DB60_41E1_6A50F924BE69",
  "this.overlay_A809A356_B324_D8A0_41D5_9EE2A9E3CE11"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_t.jpg",
 "hfovMax": 139
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "hfovMin": "150%",
 "id": "panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
 "overlays": [
  "this.overlay_AAD880C3_B324_B9A0_41D9_196604C4DF92",
  "this.overlay_A94EE119_B327_58A0_41E3_27355EA97B6C",
  "this.overlay_A8ADEBCF_B324_AFBF_41B7_3BB57B5160D5",
  "this.overlay_AD853CB1_B324_A9E3_41D2_8DFDA784603F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 170.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.24,
   "panorama": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F079E37D_EE31_10C3_41C3_2F9C164AA56A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1014,
 "initialSequence": "this.sequence_DF11CB79_FE45_F212_41EA_D2B64A5CEC14",
 "automaticZoomSpeed": 10,
 "id": "camera_DF11DB79_FE45_F212_41DD_FAC80088D676",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PENDIDIKAN",
 "hfovMin": "153%",
 "id": "panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC",
 "overlays": [
  "this.overlay_EB71A409_CB92_1C45_41DF_1DA6416760DC",
  "this.overlay_EC9C3CCD_CB92_0DDD_41E5_508C365AEE5A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_t.jpg",
 "hfovMax": 145
},
{
 "items": [
  {
   "media": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90",
   "end": "this.setComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, false, -1, this.effect_F8D8B74A_C470_1A6B_41D2_3941C0191CA1, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1); this.keepComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, false); this.setComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, true, -1, this.effect_F8D8774A_C470_1A6B_41C4_B842A921BCDC, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_camera"
  },
  {
   "media": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_camera"
  },
  {
   "media": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_camera"
  },
  {
   "media": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_camera"
  },
  {
   "media": "this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B",
   "end": "this.setComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, false, -1, this.effect_F8DEB74A_C470_1A6B_41DD_3FBCE1D3BDE8, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5); this.keepComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, false); this.setComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, true, -1, this.effect_F8DE974A_C470_1A6B_41B8_7D9776FBB5D3, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_camera"
  },
  {
   "media": "this.panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_camera"
  },
  {
   "media": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD",
   "end": "this.setComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, false, -1, this.effect_F8C1D74A_C470_1A6B_41DD_0C39ACEFB27B, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7); this.keepComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, false); this.setComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, true, -1, this.effect_F8C1A74A_C470_1A6B_41D2_A65B4059BE0C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_camera"
  },
  {
   "media": "this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD",
   "end": "this.setComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, false, -1, this.effect_F8C3974A_C470_1A6B_41E7_4C39658F34C9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8); this.keepComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, false); this.setComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, true, -1, this.effect_F8C3474A_C470_1A6B_41BA_596828373CEA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_camera"
  },
  {
   "media": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_camera"
  },
  {
   "media": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B",
   "end": "this.setComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, false, -1, this.effect_F8C6A74A_C470_1A6B_41C7_C232AA50CDF2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10); this.keepComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, false); this.setComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, true, -1, this.effect_F8C6974A_C470_1A6B_41B0_904AF3B64864, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_camera"
  },
  {
   "media": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_camera"
  },
  {
   "media": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
   "end": "this.setComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, false, -1, this.effect_F8C9C74A_C470_1A6B_41C3_0BB0DD4E80F3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12); this.keepComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, false); this.setComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, true, -1, this.effect_F8C9D74A_C470_1A6B_41AC_6A916E46D058, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_camera"
  },
  {
   "media": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3",
   "end": "this.setComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, false, -1, this.effect_F8CB874A_C470_1A6B_41E4_0CAC43A47801, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13); this.keepComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, false); this.setComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, true, -1, this.effect_F8CB774A_C470_1A6B_4193_C620D5236F06, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_camera"
  },
  {
   "media": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E",
   "end": "this.setComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, false, -1, this.effect_F8CD574A_C470_1A6B_41E0_D5D0615032A9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14); this.keepComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, false); this.setComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, true, -1, this.effect_F8CD074A_C470_1A6B_41CD_C69C01E90615, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_camera"
  },
  {
   "media": "this.panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_camera"
  },
  {
   "media": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
   "end": "this.setComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, false, -1, this.effect_F8F0774A_C470_1A6B_41DA_321BE5D21776, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16); this.keepComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, false); this.setComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, true, -1, this.effect_F8F0574A_C470_1A6B_41D4_7FA834C6E3A4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_camera"
  },
  {
   "media": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_camera"
  },
  {
   "media": "this.panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A",
   "end": "this.setComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, false, -1, this.effect_80190E8F_C4F0_0AE9_41C1_46E95AB2F6D4, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18); this.keepComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, false); this.setComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, true, -1, this.effect_8018EE8F_C4F0_0AE9_41DB_F454EDD09CAF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_camera"
  },
  {
   "media": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_camera"
  },
  {
   "media": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_camera"
  },
  {
   "media": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_camera"
  },
  {
   "media": "this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24",
   "end": "this.setComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, false, -1, this.effect_8000BE8F_C4F0_0AE9_41DE_547EEF8900E6, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22); this.keepComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, false); this.setComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, true, -1, this.effect_80009E8F_C4F0_0AE9_41D2_22B86EDBA62F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_camera"
  },
  {
   "media": "this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F",
   "end": "this.setComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, false, -1, this.effect_80029E8F_C4F0_0AE9_41E4_25D07F8E3AA7, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23); this.keepComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, false); this.setComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, true, -1, this.effect_80026E8F_C4F0_0AE9_417A_F73321D3AFB4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_camera"
  },
  {
   "media": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
   "end": "this.setComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, false, -1, this.effect_8004DE8F_C4F0_0AE9_41C4_34532F0852A1, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24); this.keepComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, false); this.setComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, true, -1, this.effect_80046E8F_C4F0_0AE9_41D8_09D748091354, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_camera"
  },
  {
   "media": "this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C",
   "end": "this.setComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, false, -1, this.effect_8006AE8F_C4F0_0AE9_41DC_516071D8D6F2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25); this.keepComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, false); this.setComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, true, -1, this.effect_80068E8F_C4F0_0AE9_41DF_D9EA1649785B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_camera"
  },
  {
   "media": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_camera"
  },
  {
   "media": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_camera"
  },
  {
   "media": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC",
   "end": "this.setComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, false, -1, this.effect_F0787371_EE31_10C3_41EA_328487EDC07E, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28); this.keepComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, false); this.setComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, true, -1, this.effect_F0784371_EE31_10C3_41ED_5708358D5976, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_camera"
  },
  {
   "media": "this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458",
   "end": "this.setComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, false, -1, this.effect_F0799372_EE31_10C1_41D3_E8507AE25A91, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29); this.keepComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, false); this.setComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, true, -1, this.effect_F0786372_EE31_10C1_41C6_851E423CCBA5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_camera"
  },
  {
   "media": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB",
   "end": "this.setComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, false, -1, this.effect_F079B373_EE31_10C7_41E6_7DE5F4E0B7F3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30); this.keepComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, false); this.setComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, true, -1, this.effect_F0798373_EE31_10C7_41E1_974D540216A9, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_camera"
  },
  {
   "media": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_camera"
  },
  {
   "media": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA",
   "end": "this.setComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, false, -1, this.effect_F079D374_EE31_10C1_41ED_4D31684226B6, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32); this.keepComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, false); this.setComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, true, -1, this.effect_F079A374_EE31_10C1_41D3_26043E8A3D6C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_camera"
  },
  {
   "media": "this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168",
   "end": "this.setComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, false, -1, this.effect_F079F375_EE31_10C3_41E6_008E87B671C6, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33); this.keepComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, false); this.setComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, true, -1, this.effect_F079C375_EE31_10C3_41E8_3EAF4C9F7572, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_camera"
  },
  {
   "media": "this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296",
   "end": "if(this.existsKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')){ if(this.getKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')) { this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true, -1, this.effect_F079E375_EE31_10C3_41CE_40AF4237042F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false, -1, this.effect_E0130E66_FE45_F23E_41B0_88B2F259A2C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D')",
   "start": "this.keepComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true)",
   "begin": "this.registerKey('visibility_Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D', this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34); this.keepComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false); this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, true, -1, this.effect_F079E375_EE31_10C3_41CE_40AF4237042F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_camera"
  },
  {
   "media": "this.panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_camera"
  },
  {
   "media": "this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3",
   "end": "this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false, -1, this.effect_F078F377_EE31_10CF_41AC_3173F190CE48, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_camera"
  },
  {
   "media": "this.panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_camera"
  },
  {
   "media": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_camera"
  },
  {
   "media": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B",
   "end": "this.setComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, false, -1, this.effect_F0780379_EE31_10C3_41BE_E0146105BFCE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39); this.keepComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, false); this.setComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, true, -1, this.effect_F078E379_EE31_10C3_417D_49A27A0CA18D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_camera"
  },
  {
   "media": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_camera"
  },
  {
   "media": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_camera"
  },
  {
   "media": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7",
   "end": "this.setComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, false, -1, this.effect_F078237A_EE31_10C1_41DA_BE49BC08ED59, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42); this.keepComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, false); this.setComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, true, -1, this.effect_F078337A_EE31_10C1_41E6_F75C09D2FAD3, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_camera"
  },
  {
   "media": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC",
   "end": "this.setComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, false, -1, this.effect_F078437B_EE31_10C7_41DB_12EE23CA7341, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43); this.keepComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, false); this.setComponentVisibility(this.Image_F020706D_EEF3_10C0_4196_281CDD472FD6, true, -1, this.effect_F078537B_EE31_10C7_41C3_3B5471E28A8D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_camera"
  },
  {
   "media": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486",
   "end": "this.setComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, false, -1, this.effect_F079937C_EE31_10C1_41E8_4EED73DFDEE9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44); this.keepComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, false); this.setComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, true, -1, this.effect_F078637C_EE31_10C1_41E7_439C02CC1F0C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_camera"
  },
  {
   "media": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944",
   "end": "this.setComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, false, -1, this.effect_F079B37C_EE31_10C1_41E6_7BAE6A8C55D1, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45); this.keepComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, false); this.setComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, true, -1, this.effect_F079837C_EE31_10C1_41D3_6CB27F0DA30B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_camera"
  },
  {
   "media": "this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330",
   "end": "this.setComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, false, -1, this.effect_F916675A_C470_1A6B_41E4_7F29B252003B, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46); this.keepComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, false); this.setComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, true, -1, this.effect_F916475A_C470_1A6B_41C7_0B7519A37A6D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_camera"
  },
  {
   "media": "this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606",
   "end": "this.setComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, false, -1, this.effect_F079D37D_EE31_10C3_41D6_8499C14711C2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47); this.keepComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, false); this.setComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, true, -1, this.effect_F079A37D_EE31_10C3_41B8_AC8E26F0717F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_camera"
  },
  {
   "media": "this.panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_camera"
  },
  {
   "media": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_camera"
  },
  {
   "media": "this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996",
   "end": "this.setComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, false, -1, this.effect_F079E37D_EE31_10C3_41C3_2F9C164AA56A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50); this.keepComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, false); this.setComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, true, -1, this.effect_F079C37D_EE31_10C3_41D9_761497031AFF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996_camera"
  },
  {
   "media": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641",
   "end": "this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false, -1, this.effect_EF5F9EEE_F826_072D_41CF_D166F651CD7D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51); this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false); this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_EF5FBEEE_F826_072D_41D5_5836C47B9ED0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_camera"
  },
  {
   "media": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08",
   "end": "if(this.existsKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')){ if(this.getKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')) { this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_CD3C745A_EE17_F0C1_41CF_EB8B99368F4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false, -1, this.effect_E0088E71_FE45_F212_41DA_9960F7995A3D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9')",
   "start": "this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true)",
   "begin": "this.registerKey('visibility_Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9', this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 52); this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false); this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_CD3C745A_EE17_F0C1_41CF_EB8B99368F4D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_camera"
  },
  {
   "media": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_camera"
  },
  {
   "media": "this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 53, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GUS EBID",
 "hfovMin": "120%",
 "id": "panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641",
 "overlays": [
  "this.overlay_E58BD387_CA76_F44D_41E5_25BDE7965E79",
  "this.overlay_99CC8070_CA92_34C3_41E5_3B19CE2929DC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 119.39,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFBFDBDB_FE45_F216_41BC_9059B10E972C",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "duration": 1000,
 "id": "effect_F8D8B74A_C470_1A6B_41D2_3941C0191CA1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 168.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE4B4A8B_FE45_F2F6_41E1_3E7FD92ABACB",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "duration": 1000,
 "id": "effect_E3F07E50_FE45_F212_4192_3490C2F3A4FB",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -91.84,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DCB2AC90_FE45_F612_41D5_B65B30456DF0",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 20.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E332CD2F_FE45_F60E_41D9_7DBBFA125C0D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 165.31,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E35E2D7A_FE45_F616_41B8_FC4A8A939357",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F8C9C74A_C470_1A6B_41C3_0BB0DD4E80F3",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 28.47,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "manualRotationSpeed": 1282,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1C029C2_FE45_FE76_41DC_63F15706B959",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "DHELEM GUS IBAD",
 "hfovMin": "150%",
 "id": "panorama_F00F382A_CBB1_F444_41EA_37D29593A996",
 "overlays": [
  "this.overlay_E854DE5D_CBB6_0CFC_41CB_25FAA8022B9A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 124
},
{
 "duration": 500,
 "id": "FadeInEffect_E85DEF2D_CA76_0C88_41E4_77DCB4FF2AC7",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 1000,
 "id": "effect_F079E375_EE31_10C3_41CE_40AF4237042F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E339BD3A_FE45_F616_41C2_2C7764891F6A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_BD499CBE_B2E4_A9E0_41D3_9F27462ED9BE",
 "label": "33",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "3",
 "id": "panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330",
 "overlays": [
  "this.overlay_EAA14A0F_CB96_145D_41D6_A4A80AF082FC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": -154.29,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3C19E2D_FE45_F232_41EB_3B901D08AD05",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "LABENG GUS EBID",
 "hfovMin": "120%",
 "id": "panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08",
 "overlays": [
  "this.overlay_9600D9EF_CA72_77DD_41D1_4DA08C070C06",
  "this.overlay_9DFF3137_CA76_144D_41EB_4588E41E4D62"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_t.jpg",
 "hfovMax": 138
},
{
 "duration": 1000,
 "id": "effect_F8C6A74A_C470_1A6B_41C7_C232AA50CDF2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_E0CCF9CA_C457_F286_41DE_95D6711372CB.ogg",
  "mp3Url": "media/audio_E0CCF9CA_C457_F286_41DE_95D6711372CB.mp3",
  "class": "AudioResource"
 },
 "id": "audio_E0CCF9CA_C457_F286_41DE_95D6711372CB",
 "data": {
  "label": "fassounds-ramadan-celebration-eid-ramadan-celebration-480052"
 }
},
{
 "duration": 1000,
 "id": "effect_F079B373_EE31_10C7_41E6_7DE5F4E0B7F3",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -71.63,
  "class": "PanoramaCameraPosition",
  "pitch": -16.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEA4EB22_FE45_F236_41EB_146B46C83E6B",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 124
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PINTU GERBANGG MENUJU PUTRI",
 "hfovMin": "150%",
 "id": "panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
 "overlays": [
  "this.overlay_A8B2052C_B324_F8E0_41C0_83F149024374",
  "this.overlay_AFA90721_B31B_58E0_41D9_2EE26A7BBAEE",
  "this.overlay_A8CDE054_B31C_D8A0_41DA_80FA973FFB5E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_t.jpg",
 "hfovMax": 132
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "31",
 "hfovMin": "120%",
 "id": "panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168",
 "overlays": [
  "this.overlay_8355D0B9_B33C_D9E0_41C2_3954158DDC3C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F079A37D_EE31_10C3_41B8_AC8E26F0717F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "28",
 "hfovMin": "120%",
 "id": "panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB",
 "overlays": [
  "this.overlay_950CC2F9_B36D_D960_41D1_845AAF16A6DF",
  "this.overlay_95CB26FB_B364_F960_41DB_B3097AA39896"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_t.jpg",
 "hfovMax": 131
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8",
 "hfovMin": "150%",
 "id": "panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD",
 "overlays": [
  "this.overlay_A551CA96_B32F_69A0_41DE_2E374A669843",
  "this.overlay_A5490444_B32C_D8A0_41C9_E633AD951A07"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 8.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.69,
   "panorama": "this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_t.jpg",
 "hfovMax": 131
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17",
 "hfovMin": "150%",
 "id": "panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956",
 "overlays": [
  "this.overlay_AD35BB4E_B364_A8A1_41D2_10F08911D439",
  "this.overlay_90785A11_B364_E8A0_41D9_36D70691FEB8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -7.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.89,
   "panorama": "this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_t.jpg",
 "hfovMax": 132
},
{
 "initialPosition": {
  "yaw": -9.18,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE8CAAF8_FE45_F212_41E9_74A3095FFD9F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "34",
 "hfovMin": "150%",
 "id": "panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3",
 "overlays": [
  "this.overlay_9D740ACF_B32D_69A0_41C6_60F6083CCF8F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_t.jpg",
 "hfovMax": 133
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -69.8,
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF78FBB4_FE45_F212_41DC_2A843C8564C5",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3726DA7_FE45_F63E_41AB_A8B0C94DF634",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 110
},
{
 "initialPosition": {
  "yaw": 40.41,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEB19B0F_FE45_F20F_41EA_B898759B53D1",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 127
},
{
 "initialPosition": {
  "yaw": 90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE985AE3_FE45_F236_41E0_0B1E5F5F2544",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "KEAMANAN",
 "hfovMin": "141%",
 "id": "panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486",
 "overlays": [
  "this.overlay_9E157E15_CB9E_0C4C_41E4_BAE0D3936AF6",
  "this.overlay_9CE9298A_CB9E_1447_41D1_837C00A30046"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_t.jpg",
 "hfovMax": 146
},
{
 "duration": 1000,
 "id": "effect_F079C375_EE31_10C3_41E8_3EAF4C9F7572",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F078437B_EE31_10C7_41DB_12EE23CA7341",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -5.51,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFE69C0A_FE45_F5F6_41D7_2F9F4E5CDAA2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -153.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3D97E24_FE45_F232_41D6_BCF0FED61D92",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_EF5FBEEE_F826_072D_41D5_5836C47B9ED0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "38",
 "hfovMin": "150%",
 "id": "panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
 "overlays": [
  "this.overlay_EB435E6C_CBAE_0CDC_41AF_4E87C3BD3B7F",
  "this.overlay_EE525BCD_CBAE_0BDD_41E6_F5F7CB59ECCE",
  "this.overlay_EED48024_CB92_7443_41DF_30607A4F4883"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_t.jpg",
 "hfovMax": 138
},
{
 "duration": 1000,
 "id": "effect_8018EE8F_C4F0_0AE9_41DB_F454EDD09CAF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8DE974A_C470_1A6B_41B8_7D9776FBB5D3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 27.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0.8
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 127
},
{
 "initialPosition": {
  "yaw": 42.24,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE60AAB5_FE45_F212_41E6_D8BCA67B5937",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E",
 "label": "7",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "MENUJU RUANG TAMU",
 "hfovMin": "150%",
 "id": "panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724",
 "overlays": [
  "this.overlay_E8ADEC4A_CA72_0CC7_41CF_DC66412D9901",
  "this.overlay_9FD86863_CA76_34C4_41EA_70D266C25017"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFADCBE4_FE45_F232_418D_E96DCF083C5D",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 144
},
{
 "initialPosition": {
  "yaw": 93.67,
  "class": "PanoramaCameraPosition",
  "pitch": -20.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3440D83_FE45_F6F6_41E8_65E7C3757B44",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F078F377_EE31_10CF_41AC_3173F190CE48",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08",
 "label": "35",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 22.04,
  "class": "PanoramaCameraPosition",
  "pitch": 25.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3D18E1C_FE45_F212_41C7_CEB8BA3707FF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 105.61,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE2C8A4D_FE45_F272_41DA_D89E86814E93",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 124
},
{
 "initialPosition": {
  "yaw": 7.73,
  "class": "PanoramaCameraPosition",
  "pitch": -25.36
 },
 "manualRotationSpeed": 1197,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "duration": 1000,
 "id": "effect_80026E8F_C4F0_0AE9_417A_F73321D3AFB4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E609CA6E_CA76_7488_41C5_878A0BAA7B42_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1390
  },
  {
   "url": "media/zoomImage_E609CA6E_CA76_7488_41C5_878A0BAA7B42_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 741
  },
  {
   "url": "media/zoomImage_E609CA6E_CA76_7488_41C5_878A0BAA7B42_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 370
  }
 ],
 "id": "ImageResource_E85E1F2D_CA76_0C88_41D3_CABF49595AE9",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5F10F5_B2E7_F963_41B0_EA14A5866E2E_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F8C1A74A_C470_1A6B_41D2_A65B4059BE0C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1183,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "initialPosition": {
  "yaw": -85.41,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "manualRotationSpeed": 1280,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E342FD8C_FE45_F6F2_41DF_CCCD9D2731F1",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "initialPosition": {
  "yaw": 97.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 19.09,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 19.09,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 19.09,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3AE8E13_FE45_F216_41E0_BF118431D0B2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 172.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE53AA61_FE45_F232_41E5_58D2B6EC83F6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 5.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1239,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DECC7B58_FE45_F212_41B7_CC5B129D2466",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 290
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1155,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "initialPosition": {
  "yaw": 161.63,
  "hfov": 136,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3493D95_FE45_F612_41EF_6E120DF5C467",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 132
},
{
 "duration": 1000,
 "id": "effect_8004DE8F_C4F0_0AE9_41C4_34532F0852A1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 154.29,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC9F6C7A_FE45_F616_41E0_8392C28B3690",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 106.53,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF4A5BAC_FE45_F232_41D6_0F7B1558AA0D",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 127
},
{
 "duration": 1000,
 "id": "effect_F8F0574A_C470_1A6B_41D4_7FA834C6E3A4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 130
},
{
 "duration": 1000,
 "id": "effect_F8C3474A_C470_1A6B_41BA_596828373CEA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "24",
 "hfovMin": "150%",
 "id": "panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370",
 "overlays": [
  "this.overlay_9753D375_B365_5F63_41E2_0E3B4806620A",
  "this.overlay_97BB07C7_B365_67A0_4197_D66AA7832E83"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -82.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.28,
   "panorama": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_t.jpg",
 "hfovMax": 134
},
{
 "duration": 1000,
 "id": "effect_E3CA1E44_FE45_F272_41E8_47BD94BC082F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F078237A_EE31_10C1_41DA_BE49BC08ED59",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1099,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "duration": 1000,
 "id": "effect_F0784371_EE31_10C3_41ED_5708358D5976",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1280,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 296
},
{
 "duration": 1000,
 "id": "effect_EF5F9EEE_F826_072D_41CF_D166F651CD7D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8DEB74A_C470_1A6B_41DD_3FBCE1D3BDE8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0.1,
  "hfov": 135,
  "class": "PanoramaCameraPosition",
  "pitch": -3.57
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 107
},
{
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 12.73,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3A1BE09_FE45_F5F2_41E0_9F725E2B92DD",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "KANTOR KESEHATAN",
 "hfovMin": "126%",
 "id": "panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7",
 "overlays": [
  "this.overlay_EC34EB63_CB97_F4C5_41E8_ED3FD9BC58AD",
  "this.overlay_E977085A_CB92_34C7_41E0_9BA45EF7A353"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_t.jpg",
 "hfovMax": 147
},
{
 "duration": 1000,
 "id": "effect_80068E8F_C4F0_0AE9_41DF_D9EA1649785B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_80029E8F_C4F0_0AE9_41E4_25D07F8E3AA7",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 16.7,
  "hfov": 116,
  "class": "PanoramaCameraPosition",
  "pitch": -10.78
 },
 "manualRotationSpeed": 1211,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.67,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 282
},
{
 "duration": 1000,
 "id": "effect_80190E8F_C4F0_0AE9_41C1_46E95AB2F6D4",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F079F375_EE31_10C3_41E6_008E87B671C6",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "DALEM MASJID FIXXSSS",
 "hfovMin": "120%",
 "id": "panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD",
 "overlays": [
  "this.overlay_AB5D74DC_B325_B9A0_41AC_156AA9BDA614",
  "this.overlay_AB680128_B33B_B8E0_41B1_23DFE7A31A80"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -173.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.23,
   "panorama": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_t.jpg",
 "hfovMax": 134
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F078637C_EE31_10C1_41E7_439C02CC1F0C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -171.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1183,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC49BC59_FE45_F612_41E3_648DFAAC51FE",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A_t.jpg",
 "hfovMin": "120%",
 "id": "panorama_F1E13662_CBB2_1CC7_41DE_AB1E5F68A16A",
 "label": "DEJENA MASJID",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "4 OPSI PILIHAN",
 "hfovMin": "150%",
 "id": "panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860",
 "overlays": [
  "this.overlay_A78B35A6_B325_DBE0_41E5_CC9DAA710E9A",
  "this.overlay_A7D9F1D4_B325_DBA0_41CD_83EE88A9F322",
  "this.overlay_A6AF6EC4_B325_A9A0_41DE_ABC57979285E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_t.jpg",
 "hfovMax": 136
},
{
 "initialPosition": {
  "yaw": 168.98,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC793C65_FE45_F632_41E8_830539FAFB32",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "39",
 "hfovMin": "150%",
 "id": "panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
 "overlays": [
  "this.overlay_E435C3E9_CA6E_1BC5_41CC_B7E4EF032A62",
  "this.overlay_9E8C1C1C_CA6E_0C7C_41E3_25FC498677F9",
  "this.overlay_E84F218D_CA72_F45C_41B5_091D2EAD4A74"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_t.jpg",
 "hfovMax": 138
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "23",
 "hfovMin": "150%",
 "id": "panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C",
 "overlays": [
  "this.overlay_91DF7B0C_B37B_68A0_41D3_2B9279844514"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_t.jpg",
 "hfovMax": 133
},
{
 "initialPosition": {
  "yaw": -178.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF014B81_FE45_F2F2_41EC_B79523E5A01D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "DALEM RUANG TAMU PUTRA",
 "hfovMin": "150%",
 "id": "panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606",
 "overlays": [
  "this.overlay_9ED4AF42_CA7E_0CC7_41E6_FCA8626D1B5D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_t.jpg",
 "hfovMax": 138
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_BD5C6130_B2E7_58E0_41DD_30EC17CCEE07",
 "label": "14",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "duration": 1000,
 "id": "effect_F8CD074A_C470_1A6B_41CD_C69C01E90615",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "SEKRETARIS",
 "hfovMin": "120%",
 "id": "panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944",
 "overlays": [
  "this.overlay_EA9A3455_CB92_1CCD_41DF_3E3A64433DC7",
  "this.overlay_E386386B_CB96_74C5_41E0_DAEF25C90874"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_t.jpg",
 "hfovMax": 142
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "DEPAN RUANG TAMU",
 "hfovMin": "150%",
 "id": "panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C",
 "overlays": [
  "this.overlay_E614189F_CA76_747D_41E3_6A2F68A0FD9E",
  "this.overlay_E7270959_CA71_F4C5_41D0_D9F311F9EE54",
  "this.overlay_9F5484C7_CA72_3DCD_41E6_7566C2676B9D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_t.jpg",
 "hfovMax": 142
},
{
 "initialPosition": {
  "yaw": -22.04,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E355ED68_FE45_F632_41EB_C691CE2E5DD3",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": -59.69,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E324AD47_FE45_F67E_41DC_67E18C1BFB65",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 124
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15 FIXZZ",
 "hfovMin": "150%",
 "id": "panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738",
 "overlays": [
  "this.overlay_ACA7C7AE_B31C_E7E0_41DD_4AFD9868C1B0",
  "this.overlay_912BAD11_B31B_68A0_41DE_043FACFE3515",
  "this.overlay_94D0AF4F_B367_68BC_41B1_9D2F16B8B799"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_t.jpg",
 "hfovMax": 134
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "duration": 1000,
 "id": "effect_F8CB774A_C470_1A6B_4193_C620D5236F06",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 130
},
{
 "initialPosition": {
  "yaw": 7.35,
  "hfov": 142,
  "class": "PanoramaCameraPosition",
  "pitch": -20.2
 },
 "manualRotationSpeed": 1549,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 311.8,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 24.1,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3B95E00_FE45_F5F2_41EA_5C2422B9CC79",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 23
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 170.82,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.61,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3662DB8_FE45_F612_41AF_CC287DF812C4",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 299
},
{
 "initialPosition": {
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E18D598E_FE45_FE0E_41E5_A7B71470744F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 180,
  "hfov": 136,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3893DEE_FE45_F60E_41CF_A1F999FE84D3",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 132
},
{
 "duration": 500,
 "id": "FadeOutEffect_E85DFF2D_CA76_0C88_41D7_806DAF8F7E9E",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 1000,
 "id": "effect_F8C1D74A_C470_1A6B_41DD_0C39ACEFB27B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "hfovMin": "150%",
 "id": "panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
 "overlays": [
  "this.overlay_A868B61C_B325_78A0_41DE_DC8C55B1F611"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD4C9899_B2E5_69A0_41A4_663BFC067E08_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 11.14,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3771D9E_FE45_F60E_41B8_B4A2220A9437",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "30",
 "hfovMin": "150%",
 "id": "panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA",
 "overlays": [
  "this.overlay_9E2B6F53_B37C_E8A0_41DE_863E01D91F5E",
  "this.overlay_9CD291DD_B32C_BBA0_41CA_78CA55478D9A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_t.jpg",
 "hfovMax": 135
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F078537B_EE31_10C7_41C3_3B5471E28A8D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "9",
 "hfovMin": "150%",
 "id": "panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429",
 "overlays": [
  "this.overlay_ABA706AF_B33D_B9E0_41DE_431D020A268B",
  "this.overlay_ABFF32CB_B33D_79A0_41E3_E695B569690E",
  "this.overlay_AA20B658_B33C_B8A0_41DC_EE6CC2AAC7D2",
  "this.overlay_F9DA1A59_C470_0A69_41DE_707D8540C72B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_t.jpg",
 "hfovMax": 145
},
{
 "duration": 1000,
 "id": "effect_F0787371_EE31_10C3_41EA_328487EDC07E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F00F382A_CBB1_F444_41EA_37D29593A996_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 110
},
{
 "initialPosition": {
  "yaw": -171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC25DC39_FE45_F612_41CA_13AC5556C1E1",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "dejenah dhelem",
 "hfovMin": "150%",
 "id": "panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95",
 "overlays": [
  "this.overlay_9B66680C_B36D_A8A0_41D2_78500A12D7D7",
  "this.overlay_963F693A_B36D_A8E0_4191_F276A213F9F7",
  "this.overlay_993F30E8_B32C_F960_41C0_11A8F0E6E937"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_t.jpg",
 "hfovMax": 134
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20",
 "hfovMin": "150%",
 "id": "panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24",
 "overlays": [
  "this.overlay_AC81506F_B36C_D960_41D0_40CE9E484007"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_t.jpg",
 "hfovMax": 133
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
 "overlays": [
  "this.overlay_9138CA29_B364_A8E3_41B6_DBE85BA8B624",
  "this.overlay_9025B2DC_B365_59A0_41D5_C9F73253D0BB",
  "this.overlay_9073CBF3_B365_6F60_41C9_6AFDC8CFD591"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 87.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -82.3,
   "panorama": "this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_t.jpg",
 "hfovMax": 133
},
{
 "initialPosition": {
  "yaw": 9.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE44CA74_FE45_F212_41EF_12E5DD488EAB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_F8C6974A_C470_1A6B_41B0_904AF3B64864",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 32.14,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "manualRotationSpeed": 1225,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 10.08,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DEDCEB44_FE45_F272_41D9_BACA6D45A89B",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 293
},
{
 "initialPosition": {
  "yaw": 28.47,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "manualRotationSpeed": 1282,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DC066C21_FE45_F632_41D6_9FA12EB154D0",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DF684BBE_FE45_F20E_41E1_C2D8EEF53261",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": 138.67,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1CB99CB_FE45_FE76_41D5_3FA15FD0F2BF",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "MOMUMEN PONDOK",
 "hfovMin": "120%",
 "id": "panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061",
 "overlays": [
  "this.overlay_9F1E56D0_CA72_1DC3_41D9_812BA3959447",
  "this.overlay_E49B8200_CA73_F444_41D1_B39C17CFB9A3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 8.27,
  "class": "PanoramaCameraPosition",
  "pitch": -34.9
 },
 "manualRotationSpeed": 1197,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DFF37BFF_FE45_F20E_41E6_A73AFC382A55",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 287
},
{
 "initialPosition": {
  "yaw": 82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 15.38,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3235D53_FE45_F616_4191_0EC58C594C5D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -163.47,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.44,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1B70997_FE45_FE1E_41DB_DA9AC011F187",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 118
},
{
 "duration": 1000,
 "id": "effect_F8C9D74A_C470_1A6B_41AC_6A916E46D058",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 16.97,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_DE00EA11_FE45_F212_41EB_7603EAB867DC",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 121
},
{
 "initialPosition": {
  "yaw": 168.98,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 17.5,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3B19DF7_FE45_F61E_41E7_AAA100392435",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 115
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1127,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 13.26,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_camera",
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 282
},
{
 "displayOriginPosition": {
  "yaw": 5.12,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 5.12,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 6.06
 },
 "manualRotationSpeed": 1014,
 "initialSequence": "this.sequence_A0BFB6F1_B61B_F4E5_41C2_30E36E55289A",
 "automaticZoomSpeed": 10,
 "id": "panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "easing": "cubic_in_out",
   "targetHfov": 126,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "targetPitch": 6.06
  }
 ],
 "automaticRotationSpeed": 293
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Gigi",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#00CC00",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": 34,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 140,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6",
 "left": "0.9%",
 "backgroundOpacity": 0,
 "width": "18.697%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.946%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "GERBANG PONDOK"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6",
 "left": "0.94%",
 "backgroundOpacity": 0,
 "width": "18.637%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "2.09%",
 "height": "6.841%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "LAPANGAN BAL"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FD82565D_C450_7A69_41E8_6552EF353084",
 "left": "0.96%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FD82565D_C450_7A69_41E8_6552EF353084.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.84%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ASTAH"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FB1843E6_C450_1A5B_41D6_88565D043624",
 "left": "1.03%",
 "backgroundOpacity": 0,
 "width": "18.456%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FB1843E6_C450_1A5B_41D6_88565D043624.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.98%",
 "height": "6.73%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "HALAMAN MASJID"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F900BACB_C450_0A69_41B9_F82B4449A9FE",
 "left": "0.96%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F900BACB_C450_0A69_41B9_F82B4449A9FE.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.726%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DALAM MASJID"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4",
 "left": "1.02%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.726%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "GEDUNG SEKOLAH"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FA86B6D7_C450_7A79_41E8_517BF853A727",
 "left": "1.05%",
 "backgroundOpacity": 0,
 "width": "18.396%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FA86B6D7_C450_7A79_41E8_517BF853A727.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "2.1%",
 "height": "6.506%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "KEPALA SKOLAH SMA"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93",
 "left": "1.01%",
 "backgroundOpacity": 0,
 "width": "18.396%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.616%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "KEPALA SEKOLAH SMP"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F8CE9140_C450_F657_41E5_203F6B3FA194",
 "left": "1%",
 "backgroundOpacity": 0,
 "width": "18.456%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F8CE9140_C450_F657_41E5_203F6B3FA194.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.88%",
 "height": "6.837%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "PENERIMA SISWA BARU"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_FAD550A5_C450_36D9_41B2_B52E5858669A",
 "left": "0.94%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_FAD550A5_C450_36D9_41B2_B52E5858669A.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.727%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "GERBANG SANTRI PUTRI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_841B56FA_C450_3A2B_41C9_FB262227D746",
 "left": "0.94%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_841B56FA_C450_3A2B_41C9_FB262227D746.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.88%",
 "height": "6.837%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "RUANG TAMU PUTRI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8",
 "left": "0.95%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.617%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ruang tamu dhalem putri"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0",
 "left": "0.94%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.838%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ASRAMA PUTRI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615",
 "left": "0.95%",
 "backgroundOpacity": 0,
 "right": "80.52%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.727%",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DHALEM PENGASUH"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4",
 "left": "1%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "2.1%",
 "height": "6.617%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DHELEM PUTRA"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_854AC6EC_C4D0_7A2F_41CD_9327261CDCE4",
 "left": "1.02%",
 "backgroundOpacity": 0,
 "width": "18.456%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_854AC6EC_C4D0_7A2F_41CD_9327261CDCE4.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "6.727%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ruang tamu dhalem putri"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "20.326%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.76%",
 "height": "6.946%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "TOKO KITAB"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F39C99F9_EE11_33C3_41D5_661957625925",
 "left": "0.06%",
 "backgroundOpacity": 0,
 "width": "20.446%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F39C99F9_EE11_33C3_41D5_661957625925.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.99%",
 "height": "7.056%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "BANK SANTRI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F06C5D75_EE17_30C3_41D7_E3582131BB92",
 "left": "0.88%",
 "backgroundOpacity": 0,
 "width": "18.758%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F06C5D75_EE17_30C3_41D7_E3582131BB92.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.836%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "KOPERASI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F022C191_EEFF_3040_41CC_398D96114DEC",
 "left": "0.9%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F022C191_EEFF_3040_41CC_398D96114DEC.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.98%",
 "height": "6.841%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "LAPANAGN VOLLYT"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F0617A39_EEFF_7040_41EB_41841044B84B",
 "left": "0.96%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F0617A39_EEFF_7040_41EB_41841044B84B.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.836%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DAERAH A"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D",
 "left": "0.97%",
 "backgroundOpacity": 0,
 "width": "18.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.836%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DAERAH B"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395",
 "left": "0.96%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.98%",
 "height": "6.725%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DAERAH C"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 550,
 "id": "Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC",
 "left": "0.97%",
 "backgroundOpacity": 0,
 "width": "19.723%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.98%",
 "height": "6.725%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "GUS IBAD"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 550,
 "id": "Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9",
 "left": "1.03%",
 "backgroundOpacity": 0,
 "width": "19.662%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "2.21%",
 "height": "6.621%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "GUS EBID"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25",
 "left": "0.97%",
 "backgroundOpacity": 0,
 "width": "18.878%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.841%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "KESEHATAN"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F020706D_EEF3_10C0_4196_281CDD472FD6",
 "left": "0.96%",
 "backgroundOpacity": 0,
 "width": "18.697%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F020706D_EEF3_10C0_4196_281CDD472FD6.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "7.277%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "PENDIDIKAN"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F065AD4E_EEF3_10C1_41E9_36500FB22177",
 "left": "0.9%",
 "backgroundOpacity": 0,
 "width": "18.637%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F065AD4E_EEF3_10C1_41E9_36500FB22177.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.98%",
 "height": "7.056%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "KEAMANAN"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4",
 "left": "0.91%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "6.946%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "SEKRETAIS"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 99,
 "maxWidth": 486,
 "id": "Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70",
 "left": "0.9%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70.png",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "1.87%",
 "height": "7.056%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "RUANG TAMU SANTRI PUTRA"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 460,
 "maxWidth": 2606,
 "id": "Image_E79D8E58_FE45_F212_41C4_E37290F07366",
 "left": "0.9%",
 "backgroundOpacity": 0,
 "width": "16.948%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_E79D8E58_FE45_F212_41C4_E37290F07366.png",
 "minHeight": 1,
 "propagateClick": false,
 "top": "2.11%",
 "paddingRight": 0,
 "height": "9.041%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image13286"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent15384"
 },
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage15385"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "paddingLeft": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton15386"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.75,
   "yaw": 85.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458, this.camera_E35E2D7A_FE45_F616_41B8_FC4A8A939357); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87768D64_B324_EB61_41A1_E5CA632BA350",
   "pitch": -13.5,
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 85.52
  }
 ],
 "id": "overlay_9584CE56_B365_68A0_41CD_19DE16C1D342",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.22,
   "yaw": -92.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB, this.camera_E3440D83_FE45_F6F6_41E8_65E7C3757B44); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87766D64_B324_EB61_419F_BFD641960E8F",
   "pitch": -24.05,
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -92.85
  }
 ],
 "id": "overlay_94E39742_B33D_D8A0_41D0_0A508B92049B",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 58.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3, this.camera_DE973ACC_FE45_F272_41EA_DE9262A533C3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8740BD64_B324_EB61_4188_A0A374D25D16",
   "pitch": -24.87,
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 58.38
  }
 ],
 "id": "overlay_A997543F_B32F_78E0_41AC_8504F1D29B71",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.7,
   "yaw": -32.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0, this.camera_DE60AAB5_FE45_F212_41E6_D8BCA67B5937); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87401D64_B324_EB61_41DB_6110A36DE104",
   "pitch": -13.57,
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -32.05
  }
 ],
 "id": "overlay_A80F9442_B32F_F8A0_41DA_EB05FC94C261",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.58,
   "yaw": -78.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8, this.camera_DE7C5AA0_FE45_F232_41ED_3F27A4BA7CE5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8741FD64_B324_EB61_41D0_6AE6FFA45CB7",
   "pitch": -32.6,
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -78.03
  }
 ],
 "id": "overlay_A8836A3C_B324_A8E0_41CD_2E51DCDAB6D3",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 15.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B, this.camera_E3493D95_FE45_F612_41EF_6E120DF5C467); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_963C6B71_B60B_FDE5_41B8_F654800E6230",
   "pitch": -12.75,
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 15.93
  }
 ],
 "id": "overlay_A9536309_B60F_AD25_41E5_6001774B678C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": -88.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996, this.camera_E3726DA7_FE45_F63E_41AB_A8B0C94DF634); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86ABC6B1_CAF2_3C44_41E9_7E58EDEF800F",
   "pitch": -7.22,
   "hfov": 8.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -88.83
  }
 ],
 "id": "overlay_A90895AD_B60F_F57D_41E1_B1CD50273165",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": 100.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236, this.camera_E3771D9E_FE45_F60E_41B8_B4A2220A9437); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_963D4B71_B60B_FDE5_41CE_55710306EE9E",
   "pitch": -9.73,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 100.59
  }
 ],
 "id": "overlay_A9F248F3_B60F_BCE5_41DB_9E3EAAA77CB8",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.7,
   "yaw": -1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860, this.camera_E3912DD4_FE45_F612_41EE_141155B734E2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87580D5F_B324_E8A0_41D8_24D783C7AB83",
   "pitch": -14.76,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -1.65
  }
 ],
 "id": "overlay_A00ED11D_B31C_B8A0_41A1_6DA4BACD9BC5",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 178.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8759CD5F_B324_E8A0_41D9_2E9DA9339178",
   "pitch": -11.49,
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 178.72
  }
 ],
 "id": "overlay_A0BB4488_B31C_F9A0_41DE_B0EC83E3BF7A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.75,
   "yaw": 65.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330, this.camera_E399EDDC_FE45_F612_41EB_0E45D307982A); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AE809627_B618_F76D_41D2_8EDF5537195A",
   "pitch": -16.08,
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 65.28
  }
 ],
 "id": "overlay_A7269F42_B31D_68A0_41D5_09BD013F1802",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.81,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429, this.camera_DE38BA37_FE45_F21E_41EA_4E0E6F6FD590); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8747ED64_B324_EB61_41DD_F64B0FA8355A",
   "pitch": -11.74,
   "hfov": 8.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.95
  }
 ],
 "id": "overlay_A56068DF_B32D_E9A0_41E6_4C46141E0DE6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": 118.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8747BD64_B324_EB61_41D0_0B4CA98EF6B5",
   "pitch": -9.23,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 118.18
  }
 ],
 "id": "overlay_A59D89BE_B32D_ABE1_41CC_6B6BEEC4BA8E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.41,
   "yaw": -2.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87471D64_B324_EB61_41AE_8C25B87E7525",
   "pitch": -21.1,
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.3
  }
 ],
 "id": "overlay_A54691CE_B32C_FBA1_41E1_B6CE6E04EA1B",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.39,
   "yaw": 26.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F, this.camera_DE44CA74_FE45_F212_41EF_12E5DD488EAB); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874DCD64_B324_EB61_41A1_88CAFE89C1CD",
   "pitch": -21.29,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 26.98
  }
 ],
 "id": "overlay_AED128C4_B365_A9A1_41C7_D05B10BDAB0C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": -151.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956, this.camera_DE53AA61_FE45_F232_41E5_58D2B6EC83F6); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874DAD64_B324_EB61_41CC_B3F4537A1FC3",
   "pitch": -9.48,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -151.89
  }
 ],
 "id": "overlay_93BFC6D5_B36B_B9A0_41D9_3A452E072880",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": -0.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F, this.camera_E3D18E1C_FE45_F212_41C7_CEB8BA3707FF); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874D1D64_B324_EB61_41D4_3602B1A11A9F",
   "pitch": -11.49,
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.65
  }
 ],
 "id": "overlay_AD4701C5_B36B_7BA0_41E0_EDC93A706D12",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.83,
   "yaw": 168.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24, this.camera_E3C19E2D_FE45_F232_41EB_3B901D08AD05); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874AED64_B324_EB61_41DE_64827D6BA975",
   "pitch": -23.55,
   "hfov": 12.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 168.66
  }
 ],
 "id": "overlay_ACA50AE8_B36C_E960_41DE_8002508E90E3",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.68,
   "yaw": -170.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E, this.camera_E3D97E24_FE45_F232_41D6_BCF0FED61D92); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874A6D64_B324_EB61_41E1_399E04066F36",
   "pitch": -15.26,
   "hfov": 8.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -170.98
  }
 ],
 "id": "overlay_92E78E88_B36D_A9A1_41E2_51287B5BF963",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": -107.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747, this.camera_DEB19B0F_FE45_F20F_41EA_B898759B53D1); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FDE299_CA92_7444_41E8_D14ABAEA1773",
   "pitch": -9.48,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -107.17
  }
 ],
 "id": "overlay_EF46D486_CBB2_FC4F_41EB_444355854BC0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.89,
   "yaw": 74.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40, this.camera_DEA4EB22_FE45_F236_41EB_146B46C83E6B); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FDB29A_CA92_7444_41DE_AEBA43592BC2",
   "pitch": -8.98,
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 74.72
  }
 ],
 "id": "overlay_EABEA380_CBB2_1443_41D1_A89EB8C2469C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41, this.camera_DC066C21_FE45_F632_41D6_9FA12EB154D0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_875B2D5F_B324_E8A0_41C7_99EF48650E42",
   "pitch": -20.29,
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.61
  }
 ],
 "id": "overlay_A1C6A869_B31B_E960_41B7_E8104EF9ADF8",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.48,
   "yaw": -108.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC, this.camera_DF9E1BC7_FE45_F27E_41E9_B883696A60C3); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8777ED64_B324_EB61_41D3_F9FC787BE6D3",
   "pitch": -19.53,
   "hfov": 8.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -108.69
  }
 ],
 "id": "overlay_9B96CF9C_B365_A7A0_41D6_A88A55A4FE7E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 78.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40, this.camera_E324AD47_FE45_F67E_41DC_67E18C1BFB65); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836E7C24_B33B_E8E0_41C5_BEBC31FE7759",
   "pitch": -12.5,
   "hfov": 8.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 78.99
  }
 ],
 "id": "overlay_9EC39028_B31D_78E0_41D6_4C373A6D90A0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -104.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836E2C24_B33B_E8E0_41B2_3CF1D5F5D89B",
   "pitch": -10.99,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -104.91
  }
 ],
 "id": "overlay_9DF8C986_B31D_ABA0_41D0_74252BF8AF1B",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.47,
   "yaw": -4.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA, this.camera_E332CD2F_FE45_F60E_41D9_7DBBFA125C0D); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_96310B71_B60B_FDE5_41CD_CD1DA01BE806",
   "pitch": -24.28,
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -4.45
  }
 ],
 "id": "overlay_9FE5D979_B365_6B60_41DD_7938B5512458",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.1,
   "yaw": 176.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168, this.camera_E339BD3A_FE45_F616_41C2_2C7764891F6A); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836EAC24_B33B_E8E0_41DA_8D800B2F66A1",
   "pitch": -8.17,
   "hfov": 12.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 176.32
  }
 ],
 "id": "overlay_9C6877F6_B325_6760_41DC_AC2B449FCA6A",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 177.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F, this.camera_DF8F8BD2_FE45_F216_41DB_9399A58F5697); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874B4D64_B324_EB61_41D2_D8E407DD1CA1",
   "pitch": -12.75,
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 177.21
  }
 ],
 "id": "overlay_ADE7417B_B36C_DB67_41D1_9A6F691448E2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.7,
   "yaw": 164.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738, this.camera_E386CDE5_FE45_F632_41EF_13DFD2CB806C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874F2D64_B324_EB61_41C8_D27FB51323C5",
   "pitch": -13.57,
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 164.65
  }
 ],
 "id": "overlay_AE700CC2_B365_A9A0_4199_80AFAD3DD6A2",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.8,
   "yaw": 173.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3, this.camera_DC793C65_FE45_F632_41E8_830539FAFB32); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_83684C26_B33B_E8E0_41D3_C7F8292F85AA",
   "pitch": -39.44,
   "hfov": 11.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 173.32
  }
 ],
 "id": "overlay_9DA42C85_B36B_A9A0_41AE_1B8239CC79A7",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.12,
   "yaw": 8.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87424D64_B324_EB61_41D1_31F0174692D9",
   "pitch": -25.56,
   "hfov": 8.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.65
  }
 ],
 "id": "overlay_ABC69F15_B33B_68A0_41E4_DE4EB20396BC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.85,
   "yaw": -174.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8, this.camera_E3783DAF_FE45_F60E_41E1_7AFF2B1FA1E9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87421D64_B324_EB61_4187_321EC064541B",
   "pitch": -10.49,
   "hfov": 8.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -174.24
  }
 ],
 "id": "overlay_AAF71E46_B324_A8A0_41D3_7D39170872FE",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.02,
   "yaw": -73.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860, this.camera_E342FD8C_FE45_F6F2_41DF_CCCD9D2731F1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8744ED64_B324_EB61_41D7_B443320E77DB",
   "pitch": -10.49,
   "hfov": 12.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -73.4
  }
 ],
 "id": "overlay_A6CB08E2_B32D_E960_41A3_81F538E9CC5C",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.08,
   "yaw": -2.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E7B3FE81_CA76_0C78_41E4_780595EB6F7E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E89A15D8_CA72_1F96_41C2_C8C496E278DA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE083093_D5F2_7445_41D2_51F69A41BE70",
   "pitch": -30.46,
   "hfov": 14.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.01
  }
 ],
 "id": "overlay_E21A2258_CA72_1497_4197_A64373D9B63E",
 "data": {
  "label": "Info 02"
 }
},
{
 "media": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90",
 "end": "this.setComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, false, -1, this.effect_F8D8B74A_C470_1A6B_41D2_3941C0191CA1, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, false); this.setComponentVisibility(this.Image_FE5912B8_C7B0_7A37_41E2_14429F6669F6, true, -1, this.effect_F8D8774A_C470_1A6B_41C4_B842A921BCDC, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E145F964_FE45_FE32_41E8_725FBCD26D06",
 "camera": "this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_camera"
},
{
 "media": "this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B",
 "end": "this.setComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, false, -1, this.effect_F8DEB74A_C470_1A6B_41DD_3FBCE1D3BDE8, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, false); this.setComponentVisibility(this.Image_FD82565D_C450_7A69_41E8_6552EF353084, true, -1, this.effect_F8DE974A_C470_1A6B_41B8_7D9776FBB5D3, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1449965_FE45_FE32_41E8_93C244076E2A",
 "camera": "this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_camera"
},
{
 "media": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD",
 "end": "this.setComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, false, -1, this.effect_F8C1D74A_C470_1A6B_41DD_0C39ACEFB27B, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, false); this.setComponentVisibility(this.Image_FB1843E6_C450_1A5B_41D6_88565D043624, true, -1, this.effect_F8C1A74A_C470_1A6B_41D2_A65B4059BE0C, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1473965_FE45_FE32_41D5_A35757265AC2",
 "camera": "this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_camera"
},
{
 "media": "this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD",
 "end": "this.setComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, false, -1, this.effect_F8C3974A_C470_1A6B_41E7_4C39658F34C9, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, false); this.setComponentVisibility(this.Image_F900BACB_C450_0A69_41B9_F82B4449A9FE, true, -1, this.effect_F8C3474A_C470_1A6B_41BA_596828373CEA, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1478965_FE45_FE32_41CF_4DA660EE060E",
 "camera": "this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_camera"
},
{
 "media": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B",
 "end": "this.setComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, false, -1, this.effect_F8C6A74A_C470_1A6B_41C7_C232AA50CDF2, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, false); this.setComponentVisibility(this.Image_FA24A5A0_C450_3ED7_41E3_075C32702EF4, true, -1, this.effect_F8C6974A_C470_1A6B_41B0_904AF3B64864, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E176E96D_FE45_FE32_41E5_321E4F987B03",
 "camera": "this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_camera"
},
{
 "media": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0",
 "end": "this.setComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, false, -1, this.effect_F8C9C74A_C470_1A6B_41C3_0BB0DD4E80F3, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, false); this.setComponentVisibility(this.Image_FA86B6D7_C450_7A79_41E8_517BF853A727, true, -1, this.effect_F8C9D74A_C470_1A6B_41AC_6A916E46D058, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E171596E_FE45_FE0E_41E9_4D782A23FC49",
 "camera": "this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_camera"
},
{
 "media": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3",
 "end": "this.setComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, false, -1, this.effect_F8CB874A_C470_1A6B_41E4_0CAC43A47801, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, false); this.setComponentVisibility(this.Image_F8CE9140_C450_F657_41E5_203F6B3FA194, true, -1, this.effect_F8CB774A_C470_1A6B_4193_C620D5236F06, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E170396E_FE45_FE0E_41D7_A7602663F495",
 "camera": "this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_camera"
},
{
 "media": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E",
 "end": "this.setComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, false, -1, this.effect_F8CD574A_C470_1A6B_41E0_D5D0615032A9, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, false); this.setComponentVisibility(this.Image_F82532BC_C450_1A2F_41BF_FEB03F85DD93, true, -1, this.effect_F8CD074A_C470_1A6B_41CD_C69C01E90615, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E171C96E_FE45_FE0E_41E7_C21CB7C06E5F",
 "camera": "this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_camera"
},
{
 "media": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167",
 "end": "this.setComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, false, -1, this.effect_F8F0774A_C470_1A6B_41DA_321BE5D21776, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, false); this.setComponentVisibility(this.Image_FAD550A5_C450_36D9_41B2_B52E5858669A, true, -1, this.effect_F8F0574A_C470_1A6B_41D4_7FA834C6E3A4, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1415965_FE45_FE32_41DB_5B66719A4E61",
 "camera": "this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_camera"
},
{
 "media": "this.panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A",
 "end": "this.setComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, false, -1, this.effect_80190E8F_C4F0_0AE9_41C1_46E95AB2F6D4, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, false); this.setComponentVisibility(this.Image_841B56FA_C450_3A2B_41C9_FB262227D746, true, -1, this.effect_8018EE8F_C4F0_0AE9_41DB_F454EDD09CAF, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E141A966_FE45_FE3E_41E5_BF72B95215C3",
 "camera": "this.panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_camera"
},
{
 "media": "this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24",
 "end": "this.setComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, false, -1, this.effect_8000BE8F_C4F0_0AE9_41DE_547EEF8900E6, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22); this.keepComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, false); this.setComponentVisibility(this.Image_87EC9815_C4B0_15F9_41A9_4066AC4D9BC8, true, -1, this.effect_80009E8F_C4F0_0AE9_41D2_22B86EDBA62F, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1400966_FE45_FE3E_41CD_5DFD23262F7B",
 "camera": "this.panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_camera"
},
{
 "media": "this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F",
 "end": "this.setComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, false, -1, this.effect_80029E8F_C4F0_0AE9_41E4_25D07F8E3AA7, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23); this.keepComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, false); this.setComponentVisibility(this.Image_82C6C413_C4B0_FDF9_41D3_FF2F1D549DF0, true, -1, this.effect_80026E8F_C4F0_0AE9_417A_F73321D3AFB4, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1437966_FE45_FE3E_41E4_EA053766F8E4",
 "camera": "this.panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_camera"
},
{
 "media": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7",
 "end": "this.setComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, false, -1, this.effect_8004DE8F_C4F0_0AE9_41C4_34532F0852A1, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, false); this.setComponentVisibility(this.Image_85C2AC7E_C4B0_0E2B_41D8_0CA08A37E615, true, -1, this.effect_80046E8F_C4F0_0AE9_41D8_09D748091354, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1438967_FE45_FE3E_41CB_54C66C1A00F7",
 "camera": "this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_camera"
},
{
 "media": "this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C",
 "end": "this.setComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, false, -1, this.effect_8006AE8F_C4F0_0AE9_41DC_516071D8D6F2, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25); this.keepComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, false); this.setComponentVisibility(this.Image_82F59566_C4D0_FE5B_41DE_32C476AB2FA4, true, -1, this.effect_80068E8F_C4F0_0AE9_41DF_D9EA1649785B, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14CE968_FE45_FE32_41EB_F33C3E352FFB",
 "camera": "this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_camera"
},
{
 "media": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC",
 "end": "this.setComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, false, -1, this.effect_F0787371_EE31_10C3_41EA_328487EDC07E, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, false); this.setComponentVisibility(this.Image_F39C99F9_EE11_33C3_41D5_661957625925, true, -1, this.effect_F0784371_EE31_10C3_41ED_5708358D5976, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14B896B_FE45_FE36_41DF_4A94034E34BE",
 "camera": "this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_camera"
},
{
 "media": "this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458",
 "end": "this.setComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, false, -1, this.effect_F0799372_EE31_10C1_41D3_E8507AE25A91, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, false); this.setComponentVisibility(this.Image_F06C5D75_EE17_30C3_41D7_E3582131BB92, true, -1, this.effect_F0786372_EE31_10C1_41C6_851E423CCBA5, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E148196A_FE45_FE36_41E3_999968304C17",
 "camera": "this.panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_camera"
},
{
 "media": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB",
 "end": "this.setComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, false, -1, this.effect_F079B373_EE31_10C7_41E6_7DE5F4E0B7F3, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30); this.keepComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, false); this.setComponentVisibility(this.Image_F0FCE243_EE17_10C7_41DA_BFF157C9EF77, true, -1, this.effect_F0798373_EE31_10C7_41E1_974D540216A9, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14B596A_FE45_FE36_41EA_B6C940FF2576",
 "camera": "this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_camera"
},
{
 "media": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA",
 "end": "this.setComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, false, -1, this.effect_F079D374_EE31_10C1_41ED_4D31684226B6, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32); this.keepComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, false); this.setComponentVisibility(this.Image_F0617A39_EEFF_7040_41EB_41841044B84B, true, -1, this.effect_F079A374_EE31_10C1_41D3_26043E8A3D6C, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14E6968_FE45_FE32_41E6_AD02C94F0D80",
 "camera": "this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_camera"
},
{
 "media": "this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168",
 "end": "this.setComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, false, -1, this.effect_F079F375_EE31_10C3_41E6_008E87B671C6, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33); this.keepComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, false); this.setComponentVisibility(this.Image_F022C191_EEFF_3040_41CC_398D96114DEC, true, -1, this.effect_F079C375_EE31_10C3_41E8_3EAF4C9F7572, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14AB96B_FE45_FE36_41A9_8A902B474D41",
 "camera": "this.panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_camera"
},
{
 "media": "this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3",
 "end": "this.setComponentVisibility(this.Image_F05E90FE_EEFF_11C1_41E5_1CDDE95F0F6D, false, -1, this.effect_F078F377_EE31_10CF_41AC_3173F190CE48, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14EA969_FE45_FE32_41C2_3CDCDE9EE321",
 "camera": "this.panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_camera"
},
{
 "media": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B",
 "end": "this.setComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, false, -1, this.effect_F0780379_EE31_10C3_41BE_E0146105BFCE, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.keepComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, false); this.setComponentVisibility(this.Image_F06E68D6_EEF1_11C1_41D9_40CAFDD21395, true, -1, this.effect_F078E379_EE31_10C3_417D_49A27A0CA18D, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E149D96A_FE45_FE36_41EE_922CEBD74EAF",
 "camera": "this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_camera"
},
{
 "media": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7",
 "end": "this.setComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, false, -1, this.effect_F078237A_EE31_10C1_41DA_BE49BC08ED59, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42); this.keepComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, false); this.setComponentVisibility(this.Image_F05E2FFB_EEF1_0FC7_41E1_B948D2BE6E25, true, -1, this.effect_F078337A_EE31_10C1_41E6_F75C09D2FAD3, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E176E96D_FE45_FE32_41CE_02389E410DD1",
 "camera": "this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_camera"
},
{
 "media": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486",
 "end": "this.setComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, false, -1, this.effect_F079937C_EE31_10C1_41E8_4EED73DFDEE9, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44); this.keepComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, false); this.setComponentVisibility(this.Image_F065AD4E_EEF3_10C1_41E9_36500FB22177, true, -1, this.effect_F078637C_EE31_10C1_41E7_439C02CC1F0C, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E177B96C_FE45_FE32_41EA_A6DF59E57D8C",
 "camera": "this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_camera"
},
{
 "media": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944",
 "end": "this.setComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, false, -1, this.effect_F079B37C_EE31_10C1_41E6_7BAE6A8C55D1, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45); this.keepComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, false); this.setComponentVisibility(this.Image_F0752A75_EEF3_10C3_41E5_D6F7DB97B0C4, true, -1, this.effect_F079837C_EE31_10C1_41D3_6CB27F0DA30B, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E174A96C_FE45_FE32_41E4_4F44A54D6BD0",
 "camera": "this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_camera"
},
{
 "media": "this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330",
 "end": "this.setComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, false, -1, this.effect_F916675A_C470_1A6B_41E4_7F29B252003B, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46); this.keepComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, false); this.setComponentVisibility(this.Image_F891EC9D_C7B0_0EE9_41D5_2A58F75510F6, true, -1, this.effect_F916475A_C470_1A6B_41C7_0B7519A37A6D, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1445964_FE45_FE32_41DD_CB4703C3E051",
 "camera": "this.panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_camera"
},
{
 "media": "this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606",
 "end": "this.setComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, false, -1, this.effect_F079D37D_EE31_10C3_41D6_8499C14711C2, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47); this.keepComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, false); this.setComponentVisibility(this.Image_F0CBB9CC_EE30_F3C1_41DC_054D1B008B70, true, -1, this.effect_F079A37D_EE31_10C3_41B8_AC8E26F0717F, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E175D96B_FE45_FE36_41CD_21574374AA5B",
 "camera": "this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_camera"
},
{
 "media": "this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996",
 "end": "this.setComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, false, -1, this.effect_F079E37D_EE31_10C3_41C3_2F9C164AA56A, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50); this.keepComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, false); this.setComponentVisibility(this.Image_F04C4D3E_EEF1_1041_41E5_329E69F237DC, true, -1, this.effect_F079C37D_EE31_10C3_41D9_761497031AFF, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E14DC967_FE45_FE3E_41D2_8990E8CCDCA8",
 "camera": "this.panorama_F00F382A_CBB1_F444_41EA_37D29593A996_camera"
},
{
 "media": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641",
 "end": "this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false, -1, this.effect_EF5F9EEE_F826_072D_41CF_D166F651CD7D, 'hideEffect', false)",
 "class": "PanoramaPlayListItem",
 "start": "this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true)",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51); this.keepComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, false); this.setComponentVisibility(this.Image_F05FE57A_EEF1_F0C1_41C5_0C847F5F13B9, true, -1, this.effect_EF5FBEEE_F826_072D_41D5_5836C47B9ED0, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E142A967_FE45_FE3E_41DA_16C865544C88",
 "camera": "this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_camera"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -76.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0, this.camera_E36D2DC1_FE45_F672_41EC_DC88B54DB448); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87439D64_B324_EB61_41E3_875486ACC7D4",
   "pitch": -13.06,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -76.77
  }
 ],
 "id": "overlay_A9CABC78_B32D_E960_41DF_52F30EED2C63",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.54,
   "yaw": -163.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E, this.camera_E36BFDCA_FE45_F676_41DE_BCC50F71263E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86BA5692_CAF2_3C47_41E2_C05F835C1634",
   "pitch": -29.9,
   "hfov": 9.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -163.44
  }
 ],
 "id": "overlay_A9F701FC_B32D_DB60_41E1_6A50F924BE69",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.05,
   "yaw": -124,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8, this.camera_E3662DB8_FE45_F612_41AF_CC287DF812C4); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8740ED64_B324_EB61_41E4_B628C7FA6818",
   "pitch": -26.57,
   "hfov": 8.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -124
  }
 ],
 "id": "overlay_A809A356_B324_D8A0_41D5_9EE2A9E3CE11",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.74,
   "yaw": 170.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B, this.camera_DECC7B58_FE45_F212_41B7_CC5B129D2466); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87439D64_B324_EB61_41DA_B27DCEBA0B91",
   "pitch": -13.75,
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 170.68
  }
 ],
 "id": "overlay_AAD880C3_B324_B9A0_41D9_196604C4DF92",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.27,
   "yaw": 17.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3, this.camera_DEF39B67_FE45_F23E_41E2_A60C37CEC8ED); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87436D64_B324_EB61_41E0_F5AFA077E98D",
   "pitch": -21.04,
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 17.94
  }
 ],
 "id": "overlay_A94EE119_B327_58A0_41E3_27355EA97B6C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.97,
   "yaw": -41.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0, this.camera_DEDCEB44_FE45_F272_41D9_BACA6D45A89B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87433D64_B324_EB61_41CD_F4A11D4C5F0A",
   "pitch": -25.06,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -41.6
  }
 ],
 "id": "overlay_A8ADEBCF_B324_AFBF_41B7_3BB57B5160D5",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": 27.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E, this.camera_DEA9BB30_FE45_F212_41DE_EB92BB302001); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8740FD64_B324_EB61_41E4_64FE81C8F8D2",
   "pitch": -25.31,
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 27.99
  }
 ],
 "id": "overlay_AD853CB1_B324_A9E3_41D2_8DFDA784603F",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_DF11CB79_FE45_F212_41EA_D2B64A5CEC14",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.67,
   "yaw": 93.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486, this.camera_E1D459B1_FE45_FE12_41E7_B72CCDF81F97); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F1029B_CA92_7444_41C9_961C7E299799",
   "pitch": -31.59,
   "hfov": 7.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 93.56
  }
 ],
 "id": "overlay_EB71A409_CB92_1C45_41DF_1DA6416760DC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.56,
   "yaw": -90.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7, this.camera_E1DF09B9_FE45_FE12_41DE_A44CB5C56FBE); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F1929B_CA92_7444_41E6_A6C075C50BB4",
   "pitch": -32.85,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -90.34
  }
 ],
 "id": "overlay_EC9C3CCD_CB92_0DDD_41E5_508C365AEE5A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -96.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061, this.camera_DFADCBE4_FE45_F232_418D_E96DCF083C5D); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F4F29B_CA92_7444_41E8_16C86AB7A92B",
   "pitch": -12,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -96.37
  }
 ],
 "id": "overlay_E58BD387_CA76_F44D_41E5_25BDE7965E79",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.98,
   "yaw": -7.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08, this.camera_DFBFDBDB_FE45_F216_41BC_9059B10E972C); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_1_HS_1_0.png",
      "width": 315,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8,
   "yaw": -7.1
  }
 ],
 "id": "overlay_99CC8070_CA92_34C3_41E5_3B19CE2929DC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.72,
   "yaw": -10.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40, this.camera_DE2C8A4D_FE45_F272_41DA_D89E86814E93); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F4729B_CA92_7444_41E2_C59C688DAFEC",
   "pitch": -14.26,
   "hfov": 8.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -10.95
  }
 ],
 "id": "overlay_E854DE5D_CBB6_0CFC_41CB_25FAA8022B9A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": 14.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41, this.camera_E1C029C2_FE45_FE76_41DC_63F15706B959); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F9829B_CA92_7444_41D3_255BAE9A55AA",
   "pitch": -20.29,
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 14.17
  }
 ],
 "id": "overlay_EAA14A0F_CB96_145D_41D6_A4A80AF082FC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 99.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C, this.camera_DE00EA11_FE45_F212_41EB_7603EAB867DC); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F7A29B_CA92_7444_41A7_589B80681564",
   "pitch": -10.99,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 99.84
  }
 ],
 "id": "overlay_9600D9EF_CA72_77DD_41D1_4DA08C070C06",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.32,
   "yaw": -160.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641, this.camera_DE1FF9EF_FE45_FE0E_41EB_101AE12B1998); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_1_HS_1_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57,
   "yaw": -160.79
  }
 ],
 "id": "overlay_9DFF3137_CA76_144D_41EB_4588E41E4D62",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.22,
   "yaw": -5.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87415D64_B324_EB61_41C8_DF1D75F1A18F",
   "pitch": -1.53,
   "hfov": 12.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -5.07
  }
 ],
 "id": "overlay_A8B2052C_B324_F8E0_41C0_83F149024374",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": -91.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87413D64_B324_EB61_41E3_89CF1A736E09",
   "pitch": -7.73,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -91.84
  }
 ],
 "id": "overlay_AFA90721_B31B_58E0_41D9_2EE26A7BBAEE",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.91,
   "yaw": 91.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7, this.camera_DC6EBC6F_FE45_F60E_419E_85EEDD28280F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874E8D64_B324_EB61_41E4_31DEB11F8BA4",
   "pitch": -7.98,
   "hfov": 8.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 91.8
  }
 ],
 "id": "overlay_A8CDE054_B31C_D8A0_41DA_80FA973FFB5E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.71,
   "yaw": -7.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236, this.camera_DE372A27_FE45_F23E_41CC_C5917146F97C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836F8C26_B33B_E8E0_41D7_593A96A62F6C",
   "pitch": -14.51,
   "hfov": 8.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.68
  }
 ],
 "id": "overlay_8355D0B9_B33C_D9E0_41C2_3954158DDC3C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.43,
   "yaw": -99.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC, this.camera_E1FCE9D4_FE45_FE12_41E6_FF71216F7942); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87776D64_B324_EB61_41D0_712CB6A8657D",
   "pitch": -20.54,
   "hfov": 8.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -99.89
  }
 ],
 "id": "overlay_950CC2F9_B36D_D960_41D1_845AAF16A6DF",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.83,
   "yaw": 90.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95, this.camera_E1CB99CB_FE45_FE76_41D5_3FA15FD0F2BF); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8774DD64_B324_EB61_41E2_7EA6D24C32FF",
   "pitch": -29.58,
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 90.03
  }
 ],
 "id": "overlay_95CB26FB_B364_F960_41DB_B3097AA39896",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": -177.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0, this.camera_E1E1D9DD_FE45_FE12_41E2_19874494205B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8744BD64_B324_EB61_41DE_A85C87365810",
   "pitch": -6.97,
   "hfov": 8.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -177.76
  }
 ],
 "id": "overlay_A551CA96_B32F_69A0_41DE_2E374A669843",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.17,
   "yaw": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD, this.camera_E1EB69E5_FE45_FE32_41E6_5B40310A0132); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_96012B71_B60B_FDE5_41E5_026D6A555755",
   "pitch": -1.53,
   "hfov": 9.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.23
  }
 ],
 "id": "overlay_A5490444_B32C_D8A0_41C9_E633AD951A07",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.58,
   "yaw": -7.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E, this.camera_DC347C2E_FE45_F60E_41BD_113B6D491B61); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874C8D64_B324_EB61_41E1_660FEA62A95F",
   "pitch": -17.52,
   "hfov": 8.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.43
  }
 ],
 "id": "overlay_AD35BB4E_B364_A8A1_41D2_10F08911D439",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.45,
   "yaw": -133.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738, this.camera_DC25DC39_FE45_F612_41CA_13AC5556C1E1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874C6D64_B324_EB61_41E5_D15C0E531E38",
   "pitch": -34.1,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.8
  }
 ],
 "id": "overlay_90785A11_B364_E8A0_41D9_36D70691FEB8",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.95,
   "yaw": -5.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA, this.camera_DF54CB9B_FE45_F216_41E1_55CE8C1CAF4E); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD4C22DC_B2E5_59A0_41DB_7177B889D4A3_0_HS_0_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 291
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.04,
   "yaw": -5.25
  }
 ],
 "id": "overlay_9D740ACF_B32D_69A0_41C6_60F6083CCF8F",
 "data": {
  "label": "Image"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.75,
   "yaw": -69.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC, this.camera_DCB2AC90_FE45_F612_41D5_B65B30456DF0); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F6929B_CA92_7444_41CD_396BEF8E066C",
   "pitch": -30.59,
   "hfov": 7.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -69.74
  }
 ],
 "id": "overlay_9E157E15_CB9E_0C4C_41E4_BAE0D3936AF6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.57,
   "yaw": 114.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944, this.camera_DCA20C9C_FE45_F612_41E7_0F876DEC22B4); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F7229B_CA92_7444_41D7_517ABF77D93F",
   "pitch": -17.77,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 114.41
  }
 ],
 "id": "overlay_9CE9298A_CB9E_1447_41D1_837C00A30046",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 110.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0, this.camera_E3B19DF7_FE45_F61E_41E7_AAA100392435); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FE329A_CA92_7444_41B0_8B5E9E464F0E",
   "pitch": -11.49,
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 110.39
  }
 ],
 "id": "overlay_EB435E6C_CBAE_0CDC_41AF_4E87C3BD3B7F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": -162.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B, this.camera_E3893DEE_FE45_F60E_41CF_A1F999FE84D3); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FF429A_CA92_7444_41E2_8E56889F639E",
   "pitch": -9.23,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -162.94
  }
 ],
 "id": "overlay_EE525BCD_CBAE_0BDD_41E6_F5F7CB59ECCE",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.16,
   "yaw": 1.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7, this.camera_E3B95E00_FE45_F5F2_41EA_5C2422B9CC79); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FFC29A_CA92_7444_41D9_3202ECE2525A",
   "pitch": -22.61,
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.36
  }
 ],
 "id": "overlay_EED48024_CB92_7443_41DF_30607A4F4883",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.81,
   "yaw": 69.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0, this.camera_E355ED68_FE45_F632_41EB_C691CE2E5DD3); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F0A29B_CA92_7444_41D6_8B5EAA6E6043",
   "pitch": -11.74,
   "hfov": 8.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 69.94
  }
 ],
 "id": "overlay_E8ADEC4A_CA72_0CC7_41CF_DC66412D9901",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -87.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C, this.camera_E353ED72_FE45_F616_41AA_076AABF8C0A0); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F1229B_CA92_7444_41E7_B05035EA2C2E",
   "pitch": -12.75,
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -87.32
  }
 ],
 "id": "overlay_9FD86863_CA76_34C4_41EA_70D266C25017",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.75,
   "yaw": -82.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7, this.camera_DC8CDC84_FE45_F6F2_41B7_30725137FF49); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87496D64_B324_EB61_41D6_70952D87380C",
   "pitch": -13.5,
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -82.3
  }
 ],
 "id": "overlay_9753D375_B365_5F63_41E2_0E3B4806620A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 98.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95, this.camera_DC9F6C7A_FE45_F616_41E0_8392C28B3690); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87484D64_B324_EB61_41C9_4921B7EA37CB",
   "pitch": -7.73,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 98.33
  }
 ],
 "id": "overlay_97BB07C7_B365_67A0_4197_D66AA7832E83",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.1,
   "yaw": 176.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747, this.camera_DF4A5BAC_FE45_F232_41D6_0F7B1558AA0D); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F5F29B_CA92_7444_41E8_A49D3080F40E",
   "pitch": -25.81,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 176.21
  }
 ],
 "id": "overlay_EC34EB63_CB97_F4C5_41E8_ED3FD9BC58AD",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.6,
   "yaw": 100.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC, this.camera_DF5A0BA4_FE45_F232_41EE_66CBA7822341); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F6729B_CA92_7444_41A4_1BDF7E304B5C",
   "pitch": -32.34,
   "hfov": 7.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 100.84
  }
 ],
 "id": "overlay_E977085A_CB92_34C7_41E0_9BA45EF7A353",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.1,
   "yaw": -173.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD, this.camera_DC49BC59_FE45_F612_41E3_648DFAAC51FE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_1_HS_0_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.32,
   "yaw": -173.69
  }
 ],
 "id": "overlay_AB5D74DC_B325_B9A0_41AC_156AA9BDA614",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.98,
   "yaw": 5.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87458D64_B324_EB61_41E2_06AC3B3A1229",
   "pitch": -4.21,
   "hfov": 8.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.38
  }
 ],
 "id": "overlay_AB680128_B33B_B8E0_41B1_23DFE7A31A80",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.48,
   "yaw": 102.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41, this.camera_DFDD5BED_FE45_F232_41EB_E2E5F8EEA2B3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8746CD64_B324_EB61_41E2_1A39C58638B5",
   "pitch": -19.53,
   "hfov": 8.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 102.1
  }
 ],
 "id": "overlay_A78B35A6_B325_DBE0_41E5_CC9DAA710E9A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -83.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0, this.camera_DFC31BF5_FE45_F212_41DF_4A2257679F57); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8746AD64_B324_EB61_41E0_1848738BA394",
   "pitch": -11.24,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -83.8
  }
 ],
 "id": "overlay_A7D9F1D4_B325_DBA0_41CD_83EE88A9F322",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.07,
   "yaw": -136.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B, this.camera_DFF37BFF_FE45_F20E_41E6_A73AFC382A55); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87461D64_B324_EB61_41D6_E3C97578C776",
   "pitch": -9.32,
   "hfov": 12.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -136.96
  }
 ],
 "id": "overlay_A6AF6EC4_B325_A9A0_41DE_ABC57979285E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 95.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747, this.camera_DC2BEC43_FE45_F676_41CC_A41345830716); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F8629A_CA92_7444_41D5_7DAA5DBF71A7",
   "pitch": -21.04,
   "hfov": 8.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 95.32
  }
 ],
 "id": "overlay_E435C3E9_CA6E_1BC5_41CC_B7E4EF032A62",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 169.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F8E29B_CA92_7444_41EA_405DC5036715",
   "pitch": -23.87,
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.42
  }
 ],
 "id": "overlay_9E8C1C1C_CA6E_0C7C_41E3_25FC498677F9",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.81,
   "yaw": -119.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724, this.camera_DC5B3C4E_FE45_F60E_41E7_9B0CFC09ED1F); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F9029B_CA92_7444_41B7_1FAABE62DAB5",
   "pitch": -11.74,
   "hfov": 8.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -119.73
  }
 ],
 "id": "overlay_E84F218D_CA72_F45C_41B5_091D2EAD4A74",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.47,
   "yaw": -46.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7, this.camera_E3235D53_FE45_F616_4191_0EC58C594C5D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8749ED64_B324_EB61_41E0_0456273EE015",
   "pitch": -27.95,
   "hfov": 16.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -46.57
  }
 ],
 "id": "overlay_91DF7B0C_B37B_68A0_41D3_2B9279844514",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.18,
   "yaw": -65.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C, this.camera_E3296D5D_FE45_F612_41E9_238830C73525); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FA629B_CA92_7444_41C2_54A5FC03C910",
   "pitch": -25.31,
   "hfov": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.09
  }
 ],
 "id": "overlay_9ED4AF42_CA7E_0CC7_41E6_FCA8626D1B5D",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -86.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486, this.camera_DF78FBB4_FE45_F212_41DC_2A843C8564C5); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F2C29B_CA92_7444_41DC_F5BE892E327E",
   "pitch": -23.8,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -86.57
  }
 ],
 "id": "overlay_EA9A3455_CB92_1CCD_41DF_3E3A64433DC7",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.34,
   "yaw": 175.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0, this.camera_DF684BBE_FE45_F20E_41E1_C2D8EEF53261); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F3629B_CA92_7444_41E4_766F95B7BA00",
   "pitch": -35.36,
   "hfov": 7.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 175.46
  }
 ],
 "id": "overlay_E386386B_CB96_74C5_41E0_DAEF25C90874",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 85.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724, this.camera_E1B879A0_FE45_FE32_41D8_2757DCE59E61); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FAE29B_CA92_7444_41E7_05B560865CCC",
   "pitch": -10.99,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 85.52
  }
 ],
 "id": "overlay_E614189F_CA76_747D_41E3_6A2F68A0FD9E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08, this.camera_E1B70997_FE45_FE1E_41DB_DA9AC011F187); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FB629B_CA92_7444_41D8_45259DD4FB3F",
   "pitch": -13,
   "hfov": 8.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -94.1
  }
 ],
 "id": "overlay_E7270959_CA71_F4C5_41D0_D9F311F9EE54",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.56,
   "yaw": -7.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606, this.camera_E1A339A9_FE45_FE32_41E1_B594F60DFF20); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91FBF29B_CA92_7444_41E1_233D6D4DE54E",
   "pitch": -29.64,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.18
  }
 ],
 "id": "overlay_9F5484C7_CA72_3DCD_41E6_7566C2676B9D",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.08,
   "yaw": 47.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956, this.camera_DE8CAAF8_FE45_F212_41E9_74A3095FFD9F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874E0D64_B324_EB61_41D0_FCDF076CF78B",
   "pitch": -30.33,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 47.07
  }
 ],
 "id": "overlay_ACA7C7AE_B31C_E7E0_41DD_4AFD9868C1B0",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.06,
   "yaw": -62.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874FDD64_B324_EB61_41D3_4065892F92C3",
   "pitch": -21.04,
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -62.46
  }
 ],
 "id": "overlay_912BAD11_B31B_68A0_41DE_043FACFE3515",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.18,
   "yaw": -168.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167, this.camera_DE985AE3_FE45_F236_41E0_0B1E5F5F2544); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874F4D64_B324_EB61_41E4_F3F47744F9B3",
   "pitch": 5,
   "hfov": 12.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -168.86
  }
 ],
 "id": "overlay_94D0AF4F_B367_68BC_41B1_9D2F16B8B799",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.03,
   "yaw": -143.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8, this.camera_DE4B4A8B_FE45_F2F6_41E1_3E7FD92ABACB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8743CD64_B324_EB61_41D2_430B9CC58FED",
   "pitch": -26.82,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -143.59
  }
 ],
 "id": "overlay_A868B61C_B325_78A0_41DE_DC8C55B1F611",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.03,
   "yaw": 0.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 34.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296, this.camera_DF370B89_FE45_F2F2_41D8_2A3926DF353F); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836F1C24_B33B_E8E0_41DF_3194F38D79A7",
   "pitch": 34.9,
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.71
  }
 ],
 "id": "overlay_9E2B6F53_B37C_E8A0_41DE_863E01D91F5E",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 173.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236, this.camera_DF014B81_FE45_F2F2_41EC_B79523E5A01D); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836FDC24_B33B_E8E0_41B8_4509B619009F",
   "pitch": -27.32,
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 173.45
  }
 ],
 "id": "overlay_9CD291DD_B32C_BBA0_41CA_78CA55478D9A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.62,
   "yaw": -176.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B, this.camera_DC16FC15_FE45_F612_41E2_EC762E1BE17F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87455D64_B324_EB61_41D9_000EE33E6825",
   "pitch": -16.77,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -176.25
  }
 ],
 "id": "overlay_ABA706AF_B33D_B9E0_41DE_431D020A268B",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.69,
   "yaw": 3.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167, this.camera_DFE69C0A_FE45_F5F6_41D7_2F9F4E5CDAA2); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87452D64_B324_EB61_419F_BB3A41BBB54E",
   "pitch": -15.01,
   "hfov": 8.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 3.12
  }
 ],
 "id": "overlay_ABFF32CB_B33D_79A0_41E3_E695B569690E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": 91.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8742FD64_B324_EB61_41CC_F12A1DA2E07E",
   "pitch": -13,
   "hfov": 8.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 91.8
  }
 ],
 "id": "overlay_AA20B658_B33C_B8A0_41DC_EE6CC2AAC7D2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 42.45,
   "yaw": -81.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0_HS_3_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 42.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_0_HS_3_0.png",
      "width": 695,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "yaw": -81.61
  }
 ],
 "id": "overlay_F9DA1A59_C470_0A69_41DE_707D8540C72B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.27,
   "yaw": -80.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB, this.camera_E1852986_FE45_FEFE_41D1_572725F2EFDB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87481D64_B324_EB61_41D6_3583D63F2DB5",
   "pitch": -23.3,
   "hfov": 8.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -80.29
  }
 ],
 "id": "overlay_9B66680C_B36D_A8A0_41D2_78500A12D7D7",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 7.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87498D64_B324_EB61_41A4_62388FFF48DE",
   "pitch": -11.49,
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.39
  }
 ],
 "id": "overlay_963F693A_B36D_A8E0_4191_F276A213F9F7",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.94,
   "yaw": 167.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236, this.camera_E18D598E_FE45_FE0E_41E5_A7B71470744F); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_836C8C22_B33B_E8E0_41CC_284FA3D79D36",
   "pitch": -6.72,
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 167.17
  }
 ],
 "id": "overlay_993F30E8_B32C_F960_41C0_11A8F0E6E937",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.37,
   "yaw": 2.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F, this.camera_DF249B92_FE45_F216_41B9_0310F5DFBD0C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874BED64_B324_EB61_41D4_FFDB27B8C3DA",
   "pitch": -21.54,
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.62
  }
 ],
 "id": "overlay_AC81506F_B36C_D960_41D0_40CE9E484007",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.93,
   "yaw": 1.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C, this.camera_E3A1BE09_FE45_F5F2_41E0_9F725E2B92DD); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_874B2D64_B324_EB61_41C0_030BC2CE6821",
   "pitch": -12.58,
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.47
  }
 ],
 "id": "overlay_9138CA29_B364_A8E3_41B6_DBE85BA8B624",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 87.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370, this.camera_E3AE8E13_FE45_F216_41E0_BF118431D0B2); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8748AD64_B324_EB61_41C0_9A835A37DE77",
   "pitch": -7.73,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 87.28
  }
 ],
 "id": "overlay_9025B2DC_B365_59A0_41D5_C9F73253D0BB",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -87.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_87480D64_B324_EB61_41C6_08313CB446CF",
   "pitch": -12,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -87.82
  }
 ],
 "id": "overlay_9073CBF3_B365_6F60_41C9_6AFDC8CFD591",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": 92.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641, this.camera_DEE32B70_FE45_F212_41D2_8037DB77CDFC); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F1B29B_CA92_7444_41E7_6B5E018C78F0",
   "pitch": -6.97,
   "hfov": 8.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.55
  }
 ],
 "id": "overlay_9F1E56D0_CA72_1DC3_41D9_812BA3959447",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -92.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90, this.camera_DF11DB79_FE45_F212_41DD_FAC80088D676); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91F2229B_CA92_7444_41E9_C2AE00571CF8",
   "pitch": -11.24,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -92.09
  }
 ],
 "id": "overlay_E49B8200_CA73_F444_41D1_B39C17CFB9A3",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_A0BFB6F1_B61B_F4E5_41C2_30E36E55289A",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 78,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "top": 86,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 46,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 4,
 "width": 385,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "text": "PONDOK PESANTREN MATHALI'UL ANWAR",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "bottom": 2,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "fontSize": "24px",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "textShadowHorizontalLength": 0
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 4,
 "width": 391,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "text": "VIRTUAL TOUR",
 "minHeight": 1,
 "propagateClick": true,
 "top": 1,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 75,
 "minWidth": 1,
 "fontSize": "59px",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "paddingLeft": 0,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "paddingLeft": 0,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "paddingLeft": 0,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "right": 0,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87768D64_B324_EB61_41A1_E5CA632BA350",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD45597C_B2E4_EB60_41E2_69E7B2FF60FC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87766D64_B324_EB61_419F_BFD641960E8F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8740BD64_B324_EB61_4188_A0A374D25D16",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_87401D64_B324_EB61_41DB_6110A36DE104",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D1B51_B2E7_A8A3_41E0_43310AD1397E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8741FD64_B324_EB61_41D0_6AE6FFA45CB7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_963C6B71_B60B_FDE5_41B8_F654800E6230",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_86ABC6B1_CAF2_3C44_41E9_7E58EDEF800F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD4EFE66_B2E5_6960_41BC_08437AAB5C40_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_963D4B71_B60B_FDE5_41CE_55710306EE9E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87580D5F_B324_E8A0_41D8_24D783C7AB83",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8759CD5F_B324_E8A0_41D9_2E9DA9339178",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3D79C7A_B2E7_A960_41CA_0885BB60FF41_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_AE809627_B618_F76D_41D2_8EDF5537195A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8747ED64_B324_EB61_41DD_F64B0FA8355A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8747BD64_B324_EB61_41D0_0B4CA98EF6B5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5F84EE_B2E7_D961_41DF_9DB1C00A0BD0_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_87471D64_B324_EB61_41AE_8C25B87E7525",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874DCD64_B324_EB61_41A1_88CAFE89C1CD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DF8B5_B2E7_69E0_41E0_CDBE880E1C9E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874DAD64_B324_EB61_41CC_B3F4537A1FC3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874D1D64_B324_EB61_41D4_3602B1A11A9F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874AED64_B324_EB61_41DE_64827D6BA975",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DBEC0_B2E7_69A0_41E0_0CD0EEDB075F_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874A6D64_B324_EB61_41E1_399E04066F36",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FDE299_CA92_7444_41E8_D14ABAEA1773",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD477434_B2E5_78E0_41C1_FDEB019A6D8B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FDB29A_CA92_7444_41DE_AEBA43592BC2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A27AEA7C_B2ED_E960_41AC_5F4060D74C90_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_875B2D5F_B324_E8A0_41C7_99EF48650E42",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD42CF58_B2E4_E8A0_41E6_5928FEA13458_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8777ED64_B324_EB61_41D3_F9FC787BE6D3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_836E7C24_B33B_E8E0_41C5_BEBC31FE7759",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_836E2C24_B33B_E8E0_41B2_3CF1D5F5D89B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_96310B71_B60B_FDE5_41CD_CD1DA01BE806",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD401D9F_B2E4_EBDF_41D5_0DF64E0B8236_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_836EAC24_B33B_E8E0_41DA_8D800B2F66A1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C1BCC_B2E4_AFA1_41CF_6829DCEF328F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874B4D64_B324_EB61_41D2_D8E407DD1CA1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5CDCC9_B2E7_69A3_41C0_AEFA4EB3899A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_874F2D64_B324_EB61_41C8_D27FB51323C5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD496701_B2E4_B8A0_41DA_CE68A3550296_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_83684C26_B33B_E8E0_41D3_C7F8292F85AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87424D64_B324_EB61_41D1_31F0174692D9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C330D_B2E7_D8A0_41D9_8FBE2B8BA97B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87421D64_B324_EB61_4187_321EC064541B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_8744ED64_B324_EB61_41D7_B443320E77DB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5F9ACB_B2E7_E9A0_41E2_11740300B27B_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_FE083093_D5F2_7445_41D2_51F69A41BE70",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_87439D64_B324_EB61_41E3_875486ACC7D4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_86BA5692_CAF2_3C47_41E2_C05F835C1634",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C758C_B2E7_BBA0_41D8_2CC155F3E1A3_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8740ED64_B324_EB61_41E4_B628C7FA6818",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87439D64_B324_EB61_41DA_B27DCEBA0B91",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87436D64_B324_EB61_41E0_F5AFA077E98D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87433D64_B324_EB61_41CD_F4A11D4C5F0A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C08EA_B2E7_A961_41B6_4F403C6BF0D8_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8740FD64_B324_EB61_41E4_64FE81C8F8D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F1029B_CA92_7444_41C9_961C7E299799",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F07CD713_CBB6_7C45_41CD_D26B6C54C1CC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F1929B_CA92_7444_41E6_A6C075C50BB4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1B5D052_CBB6_14C7_41E8_8A60DCE69641_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F4F29B_CA92_7444_41E8_16C86AB7A92B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F00F382A_CBB1_F444_41EA_37D29593A996_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F4729B_CA92_7444_41E2_C59C688DAFEC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5B3905_B2E7_A8A0_41E4_176C25615330_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F9829B_CA92_7444_41D3_255BAE9A55AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1A54C60_CBB6_0CC3_41E9_36C3052B8F08_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F7A29B_CA92_7444_41A7_589B80681564",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_87415D64_B324_EB61_41C8_DF1D75F1A18F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87413D64_B324_EB61_41E3_89CF1A736E09",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD42F35D_B2E5_B8A0_4195_B86F66A3F167_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874E8D64_B324_EB61_41E4_31DEB11F8BA4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD4729BF_B2E4_ABDF_41C3_F5BDB371C168_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_836F8C26_B33B_E8E0_41D7_593A96A62F6C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87776D64_B324_EB61_41D0_712CB6A8657D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD428656_B2E4_F8A1_41B6_1555AEB4A8CB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8774DD64_B324_EB61_41E2_7EA6D24C32FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8744BD64_B324_EB61_41DE_A85C87365810",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5FB716_B2E7_F8A0_41B0_15AB90D617BD_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_96012B71_B60B_FDE5_41E5_026D6A555755",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874C8D64_B324_EB61_41E1_660FEA62A95F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DB288_B2E7_79A1_41C8_5FAD5BD12956_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874C6D64_B324_EB61_41E5_D15C0E531E38",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F6929B_CA92_7444_41CD_396BEF8E066C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1A33350_CBB6_34C4_41C5_389AA41FE486_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F7229B_CA92_7444_41D7_517ABF77D93F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FE329A_CA92_7444_41B0_8B5E9E464F0E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FF429A_CA92_7444_41E2_8E56889F639E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD413A23_B2E5_68E0_41C3_C20B29CAE747_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_91FFC29A_CA92_7444_41D9_3202ECE2525A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F0A29B_CA92_7444_41D6_8B5EAA6E6043",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F199B683_CBB6_1C45_41D5_DD1DFF71B724_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F1229B_CA92_7444_41E7_B05035EA2C2E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87496D64_B324_EB61_41D6_70952D87380C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD44AD57_B2E4_A8A0_41C1_9DBEEECF0370_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87484D64_B324_EB61_41C9_4921B7EA37CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F5F29B_CA92_7444_41E8_A49D3080F40E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F19B9B18_CBB6_1444_41D6_0329BE61B5B7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F6729B_CA92_7444_41A4_1BDF7E304B5C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD3FC65B_B2E5_58A0_4195_3D27B74B57DD_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_87458D64_B324_EB61_41E2_06AC3B3A1229",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8746CD64_B324_EB61_41E2_1A39C58638B5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8746AD64_B324_EB61_41E0_1848738BA394",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5ECEFB_B2E7_A967_41E2_07D89E37E860_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_87461D64_B324_EB61_41D6_E3C97578C776",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F8629A_CA92_7444_41D5_7DAA5DBF71A7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_91F8E29B_CA92_7444_41EA_405DC5036715",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD463000_B2E5_58A0_41E5_D773CB385FF0_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F9029B_CA92_7444_41B7_1FAABE62DAB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D27B0_B2E4_A7E0_41C5_E866F1FB824C_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_8749ED64_B324_EB61_41E0_0456273EE015",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E96FCD66_CBB2_0CCC_41E6_288122CB7606_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FA629B_CA92_7444_41C2_54A5FC03C910",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F2C29B_CA92_7444_41DC_F5BE892E327E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0582FAF_CBB6_0C5D_41E2_29E0B82E1944_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F3629B_CA92_7444_41E4_766F95B7BA00",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FAE29B_CA92_7444_41E7_05B560865CCC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91FB629B_CA92_7444_41D8_45259DD4FB3F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F19D2094_CBB1_F44C_41D4_D10FC571FF8C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_91FBF29B_CA92_7444_41E1_233D6D4DE54E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874E0D64_B324_EB61_41D0_FCDF076CF78B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874FDD64_B324_EB61_41D3_4065892F92C3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C66FD_B2E7_5960_41D7_C79F38547738_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_874F4D64_B324_EB61_41E4_F3F47744F9B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5FAEDB_B2E7_A9A0_41E3_5E0F41410DC0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8743CD64_B324_EB61_41D2_430B9CC58FED",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_836F1C24_B33B_E8E0_41DF_3194F38D79A7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD44E3E4_B2E4_DF60_41E5_F53BEB23FFDA_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_836FDC24_B33B_E8E0_41B8_4509B619009F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87455D64_B324_EB61_41D9_000EE33E6825",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87452D64_B324_EB61_419F_BB3A41BBB54E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5C0D31_B2E7_E8E0_41AA_217C3FB77429_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8742FD64_B324_EB61_41CC_F12A1DA2E07E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87481D64_B324_EB61_41D6_3583D63F2DB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87498D64_B324_EB61_41A4_62388FFF48DE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD3E5D7E_B2E5_AB61_41AA_2F02AB09BB95_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_836C8C22_B33B_E8E0_41CC_284FA3D79D36",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5DE572_B2E7_5B60_41C8_AE72BEC0DF24_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_874BED64_B324_EB61_41D4_FFDB27B8C3DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_874B2D64_B324_EB61_41C0_030BC2CE6821",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8748AD64_B324_EB61_41C0_9A835A37DE77",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BD5D21F6_B2E4_BB60_41B7_DA0553705BE7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_87480D64_B324_EB61_41C6_08313CB446CF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F1B29B_CA92_7444_41E7_6B5E018C78F0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1BDADE5_CBB6_0FCD_41E7_582200FBA061_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_91F2229B_CA92_7444_41E9_C2AE00571CF8",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href); this.openLink('http://https://www.facebook.com/p.p.mathaliulanwar', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "paddingLeft": 50,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 70,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowVerticalLength": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Gigi",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#00CC00",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "paddingLeft": 60,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "layout": "absolute",
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 0,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "46.2%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "45.76%",
 "paddingLeft": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "90%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 9,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "40%",
 "paddingLeft": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Gigi",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#00CC00",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "paddingLeft": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "5%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 40,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 40,
 "scrollBarWidth": 10,
 "paddingTop": 40,
 "paddingBottom": 40,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "layout": "absolute",
 "backgroundImageUrl": "skin/Container_0B85764A_2D07_4D95_41A5_3AC872515A8C.jpeg"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.11vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 50,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "2.39vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "46%",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "height": "25%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_D18C0F38_C3D0_0F83_41C8_BB1B2B0FA748"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "26%",
 "paddingRight": 0,
 "bottom": "26%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "LUAR MENU"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "height": 179,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "20.1%",
 "paddingRight": 0,
 "bottom": "25%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "DALEM AREA MASJID"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "29.87%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 247.13,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PONDOK PUTRI"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "27.59%",
 "paddingRight": 0,
 "bottom": "31.25%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "DHALEM "
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "20.28%",
 "paddingRight": 0,
 "bottom": "29.72%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PONDOK PUTRA"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "28.95%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 279.8,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "KANTOR PONDOK"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "27.77%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 295.05,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "gedung sekolah "
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald Regular",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "AREA MASJID >",
 "pressedBackgroundOpacity": 1,
 "rollOverFontWeight": "bold",
 "data": {
  "name": "Button Tour Info"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontStyle": "normal",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "AREA SEKOLAH >",
 "pressedBackgroundOpacity": 1,
 "rollOverFontWeight": "bold",
 "data": {
  "name": "Button Contact"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "rollOverTextDecoration": "underline",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "DHELEM >",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "pressedLabel": "Inserdt Text",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "PONDOK SANTRI PUTRI >",
 "pressedBackgroundOpacity": 1,
 "rollOverFontWeight": "bold",
 "data": {
  "name": "Button Location"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "PONDOK SANTRI PUTRA >",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "KANTOR PONDOK >",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_D18C0F38_C3D0_0F83_41C8_BB1B2B0FA748",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 2,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "86.175%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 57,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.mathaliulanwar.net</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>mathaliulanwar1@gmail.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>0813-3685-7778</I></SPAN></SPAN></DIV></div>",
 "click": "this.openLink('http://www.mathaliulanwar.ne', '_blank'); this.openLink('http://mathaliulanwar1@gmail.com', '_blank')",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 56,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E145F964_FE45_FE32_41E8_725FBCD26D06, 0.9183673469387756, 0.9183673469387756);; this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Gerbang Pondok Pesantren",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1445964_FE45_FE32_41DD_CB4703C3E051, 36.734693877551024, -13.775510204081632);; this.mainPlayList.set('selectedIndex', 45)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Lapangan Bola",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1449965_FE45_FE32_41E8_93C244076E2A, 16.53061224489796, -12.857142857142858);; this.mainPlayList.set('selectedIndex', 4)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Asta Pendiri Pondok Pesantren",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1473965_FE45_FE32_41D5_A35757265AC2, 11.020408163265309, -3.673469387755102);; this.mainPlayList.set('selectedIndex', 6)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Halaman Masjid ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1478965_FE45_FE32_41CF_4DA660EE060E, 0, 0);; this.mainPlayList.set('selectedIndex', 7)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Masjid ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Garden",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 10"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1415965_FE45_FE32_41DB_5B66719A4E61, -8.26530612244898, 0);; this.mainPlayList.set('selectedIndex', 15)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Gerbang Santri Putri",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E141A966_FE45_FE3E_41E5_BF72B95215C3, 163.46938775510205, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 17)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Tamu Santri Putri",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1400966_FE45_FE3E_41CD_5DFD23262F7B, -145.10204081632654, 5.510204081632653);; this.mainPlayList.set('selectedIndex', 21)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Tamu Dhalem Putri",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1437966_FE45_FE3E_41E4_EA053766F8E4, 8.26530612244898, 17.448979591836736);; this.mainPlayList.set('selectedIndex', 22)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Asrama & Sekolah Santri Putri",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1438967_FE45_FE3E_41CB_54C66C1A00F7, 37.6530612244898, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 23)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "17px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Dhalem Pengasuh",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E142A967_FE45_FE3E_41DA_16C865544C88, -10.10204081632653, -5.510204081632653);; this.mainPlayList.set('selectedIndex', 50)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Dhalem Gus Moh.Saifa Abidillah",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14DC967_FE45_FE3E_41D2_8990E8CCDCA8, -180, 0);; this.mainPlayList.set('selectedIndex', 49)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Dhalem Gus Moh.Saifa Ibadillah",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14CE968_FE45_FE32_41EB_F33C3E352FFB, 178.16326530612244, -3.673469387755102);; this.mainPlayList.set('selectedIndex', 24)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Tamu Dhalem Putra",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E1400966_FE45_FE3E_41CD_5DFD23262F7B, -146.98469387755105, 5.510204081632653);; this.mainPlayList.set('selectedIndex', 21)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Tamu Dhalem Putri ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14E6968_FE45_FE32_41E6_AD02C94F0D80, 0, -3.673469387755102);; this.mainPlayList.set('selectedIndex', 31)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Asrama Daerah A",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14EA969_FE45_FE32_41C2_3CDCDE9EE321, -136.83673469387756, 4.591836734693878);; this.mainPlayList.set('selectedIndex', 35)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Asrama Daerah B",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E149D96A_FE45_FE36_41EE_922CEBD74EAF, 162.55102040816325, -2.7551020408163267);; this.mainPlayList.set('selectedIndex', 38)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Asrama Daerah C",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E148196A_FE45_FE36_41E3_999968304C17, 165.30612244897958, -13.775510204081632);; this.mainPlayList.set('selectedIndex', 28)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Koprasi  ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14B596A_FE45_FE36_41EA_B6C940FF2576, 4.591836734693878, -7.346938775510204);; this.mainPlayList.set('selectedIndex', 29)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Toko Kitab",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14B896B_FE45_FE36_41DF_4A94034E34BE, 177.24489795918367, -5.510204081632653);; this.mainPlayList.set('selectedIndex', 27)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Bank Santri",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14AB96B_FE45_FE36_41A9_8A902B474D41, 0, 0);; this.mainPlayList.set('selectedIndex', 32)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Lapangan Volly",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E175D96B_FE45_FE36_41CD_21574374AA5B, 107.44897959183672, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 46)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Tamu Santri Putra",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E174A96C_FE45_FE32_41E4_4F44A54D6BD0, 0, 0);; this.mainPlayList.set('selectedIndex', 44)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Sekretaris  ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E177B96C_FE45_FE32_41EA_A6DF59E57D8C, 27.551020408163264, -8.26530612244898);; this.mainPlayList.set('selectedIndex', 43)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Keamanan ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E176E96D_FE45_FE32_41CE_02389E410DD1, 12.857142857142858, -9.183673469387756);; this.mainPlayList.set('selectedIndex', 41)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Kesehatan ",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E14B896B_FE45_FE36_41DF_4A94034E34BE, 179.08163265306123, 1.836734693877551);; this.mainPlayList.set('selectedIndex', 27)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Bendahara",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "class": "Button",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 5,
 "height": 47,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E176E96D_FE45_FE32_41E5_321E4F987B03, -177.24489795918367, 32.142857142857146);; this.mainPlayList.set('selectedIndex', 9)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Gedung Sekolah SMP & SMA",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundOpacity": 0,
 "width": "100.136%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E171596E_FE45_FE0E_41E9_4D782A23FC49, 29.387755102040817, -2.7551020408163267);; this.mainPlayList.set('selectedIndex', 11)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Kepala Sekolah SMA",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E171C96E_FE45_FE0E_41E7_C21CB7C06E5F, 139.59183673469389, 3.673469387755102);; this.mainPlayList.set('selectedIndex', 13)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Kepala Sekolah SMP",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E170396E_FE45_FE0E_41D7_A7602663F495, 33.97959183673469, -4.591836734693878);; this.mainPlayList.set('selectedIndex', 12)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Ruang Penerimaan Siswa Baru",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.showPopupImage(this.ImageResource_E85E1F2D_CA76_0C88_41D3_CABF49595AE9, null, '90%', '90%', this.FadeInEffect_E85DEF2D_CA76_0C88_41E4_77DCB4FF2AC7, this.FadeOutEffect_E85DFF2D_CA76_0C88_41D7_806DAF8F7E9E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingLeft':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
