/** @format */

import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { MountProviderContextType } from "../types";
import {
  colorChangeOptions,
  setBooleanFunction,
  ShadowStyle,
} from "../types/ProviderTypes";

export const MountProviderContext = createContext(
  {} as MountProviderContextType
);

const shadowInitalState = "0px 0px 120px 20px #00000093";
const shadowInitStyleState = {
  color: "#00000093",
  feather: 120,
  spread: 20,
};

const MountProvider = ({ children }) => {
  const [image, setImage] = useState<string>(
    "https://openseauserdata.com/files/a6219a36782594424d8e48c0072fc763.mp4"
  );
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
    <MountProviderContext.Provider
      value={{
        image,
        setImage,
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
    </MountProviderContext.Provider>
  );
};

export default MountProvider;
//"0px 0px 30px 3px #ffffff"
