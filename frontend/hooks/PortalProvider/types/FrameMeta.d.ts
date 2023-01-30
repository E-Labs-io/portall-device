/** @format */

import {
  CollectionType,
  StoredAsseType,
} from "../../FrameProvider/types/AssetTypes";

export type FrameMetaData = {
  dir: string;
  frameId: string;
  firstBootData: Date;
  name: string;
  collections?: CollectionType[];
  defaultMedia: StoredAsseType | false | number;
};
