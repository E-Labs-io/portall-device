/** @format */

import { SingleNFTDataType } from "hooks/web3/types/nftTypes";
import { ShadowStyle } from "./ProviderTypes";

export type CollectionType = {
  name: string;
  size: number;
  assets: StoredAsseType[];
};

export type StoredAsseType = {
  asset: SingleNFTDataType;
  style: AssetStyleType;
};

export type AssetStyleType = {
  mediaShadow: ShadowStyle;
  showShadow: boolean;
  mountShow: boolean;
  mountWidth: number;
  mountColor: string;
  backgroundColor: string;
  reSizeMedia: number;
};
