/** @format */

import {
  CollectionType,
  StoredAsseType,
} from "hooks/FrameProvider/types/AssetTypes";
import { FrameMetaData } from "hooks/PortalProvider/types/FrameMeta";
import React, { useEffect, useState, createContext } from "react";
import { PortalProviderContextType } from "../types/PortalProviderTypes";
import { useCookies } from "react-cookie";
export const PortalProviderContext = createContext(
  {} as PortalProviderContextType
);

const PortalProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  /**
   *  Metadata
   */
  const [frameConfig, setFrameConfig] = useState<FrameMetaData>(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [image, setImage] = useState<string>(
    "https://openseauserdata.com/files/a6219a36782594424d8e48c0072fc763.mp4"
  );
  /**
   *  Collections
   */
  const [collections, setCollections] = useState<CollectionType[]>();
  const [activeCollection, setActiveCollection] =
    useState<CollectionType>(null);

  /**
   *  Default & Active Asset
   */
  const [defaultAsset, setDefaultAsset] = useState<StoredAsseType>();
  const [activeAsset, setActiveAsset] = useState<StoredAsseType>();

  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true);
      const config = cookies.config;
      setFrameConfig(config);
      if (config) {
        if (typeof config.defaultMedia === "number") {
        } else if (config.defaultMedia === false) {
        } else {
          setDefaultAsset(config.defaultMedia);
          setActiveAsset(config.defaultMedia);
        }
      }
    }
  });

  return (
    <PortalProviderContext.Provider
      value={{ image, setImage, activeAsset, defaultAsset }}
    >
      {children}
    </PortalProviderContext.Provider>
  );
};

export default PortalProvider;
//"0px 0px 30px 3px #ffffff"
