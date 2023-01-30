/** @format */

import { StoredAsseType } from "hooks/FrameProvider/types/AssetTypes";

const defaultMediaState: StoredAsseType = {
  style: {
    mediaShadow: {
      color: "#00000093",
      feather: 120,
      spread: 20,
    },
    showShadow: true,
    mountShow: true,
    mountWidth: 50,
    mountColor: "#f00101",
    backgroundColor: "#f00101",
    reSizeMedia: 20,
  },
  asset: {
    token_address: "0xe785e82358879f061bc3dcac6f0444462d4b5330",
    token_id: "1",
    contract_type: "erc721",
    metadata: {
      name: "WoW #44",
      description: "",
      image: "ipfs://QmUkdJKCsV8ixm2eDLJGosH8Bntwwx942YXxfuF9yXPBzi",
      external_url: "",
    },
    balance: "1",
    project_name: "World Of Women",
    project_symbol: "WOW",
    token_uri: "ipfs://QmTNBQDbggLZdKF1fRgWnXsnRikd52zL5ciNu769g9JoUP/44",
  },
};

export default defaultMediaState;
