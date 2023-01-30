/** @format */

import React, { useEffect, useState, createContext } from "react";
import { FrameProviderContextType } from "../types";
import { colorChangeOptions, ShadowStyle } from "../types/ProviderTypes";
import { setBooleanFunction } from "types/genericFunctionTypes";
import { usePortalProvider } from "hooks/PortalProvider";

export const FrameProviderContext = createContext(
  {} as FrameProviderContextType
);

const shadowInitalState = "0px 0px 120px 20px #00000093";
const shadowInitStyleState = {
  color: "#00000093",
  feather: 120,
  spread: 20,
};

const FrameProvider = ({ children }) => {
  const { activeAsset } = usePortalProvider();
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  useEffect(() => {
    if (!firstLoad && activeAsset) {
      setFirstLoad(true);
      setBackgroundColor(activeAsset.style.backgroundColor);
      setMediaShadowStyle(activeAsset.style.mediaShadow);
      setMountColor(activeAsset.style.mountColor);
      setMediaShadowVisibility(activeAsset.style.showShadow);
      setMountWidth(activeAsset.style.mountWidth);
      setRescaleMedia(activeAsset.style.reSizeMedia);
      setMountVisible(activeAsset.style.mountShow);
      updateMediaShadowStyle(activeAsset.style.mediaShadow);
    }
  });
  /**
   *  Active Asset
   */
  const [mountWidth, setMountWidth] = useState<number>(50);
  const [mountColor, setMountColor] = useState<string>("#f00101");
  const [mountVisible, setMountVisible] = useState<boolean>(false);
  const [mediaShadow, setMediaShadow] = useState<string>(shadowInitalState);
  const [mediaShadowStyle, setMediaShadowStyle] =
    useState<ShadowStyle>(shadowInitStyleState);
  const [mediaShadowVisibility, setMediaShadowVisibility] =
    useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>("#afafaf");
  const [reSizeMedia, setRescaleMedia] = useState<number>(20);

  const updateColor = (color: string, option: colorChangeOptions) => {
    if (option === "mount") setMountColor(color);
    if (option === "background") setBackgroundColor(color);
  };
  const handleMountVisibility: setBooleanFunction = (flag: boolean) =>
    setMountVisible(flag);
  const updateMediaPadding = (padding: number) => setRescaleMedia(padding);
  const updateMediaShadowStyle = (style: ShadowStyle) => {
    const fullStyle = `0px 0px ${style.feather}px ${style.spread}px ${style.color}`;
    setMediaShadowStyle(style);
    setMediaShadow(fullStyle);
  };
  const handleMediaShadowVisibility = (flag: boolean) =>
    setMediaShadowVisibility(flag);

  return (
    <FrameProviderContext.Provider
      value={{
        mountWidth,
        mountColor,
        mountVisible,
        mediaShadowVisibility,
        backgroundColor,
        reSizeMedia,
        mediaShadowStyle,
        mediaShadow,
        updateColor,
        updateMediaPadding,
        setMountWidth,
        handleMountVisibility,
        updateMediaShadowStyle,
        handleMediaShadowVisibility,
      }}
    >
      {children}
    </FrameProviderContext.Provider>
  );
};

export default FrameProvider;//"0px 0px 30px 3px #ffffff"
