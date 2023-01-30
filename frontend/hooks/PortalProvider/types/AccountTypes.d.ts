/** @format */

import { CollectionType } from "./AssetTypes";

export type UserAccountType = {
  id: string; //Wallet address
  additionalAddress: string[];
  frames: string[];
  collections: CollectionType[];
};

export type FrameAccountType = {
  id: string;
  owner: string;
  media: CollectionType[];
  name: string;
};
