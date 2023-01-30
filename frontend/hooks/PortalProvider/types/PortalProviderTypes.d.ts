/** @format */

import { StoredAsseType } from "hooks/FrameProvider/types/AssetTypes";
import { setStringFunction } from "hooks/FrameProvider/types/ProviderTypes";

export interface PortalProviderContextType {
  image: string;
  setImage: setStringFunction;
  activeAsset: StoredAsseType;
  defaultAsset: StoredAsseType;
}
