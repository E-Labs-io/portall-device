/** @format */

import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { MountProviderContextType } from "../types";
import { colorChangeOptions, setBooleanFunction } from "../types/ProviderTypes";

export const MountProviderContext = createContext(
  {} as MountProviderContextType
);

const MountProvider = ({ children }) => {
  const [mountWidth, setMountWidth] = useState<number>(50);
  const [mountColor, setMountColor] = useState<string>("#f00101");
  const [mountVisible, setMountVisible] = useState<boolean>(true);
  const [mediaShadow, setMediaShadow] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("#a4a4a4");
  const [reSizeMedia, setRescaleMedia] = useState<number>(20);

  const updateColor = (color: string, option: colorChangeOptions) => {
    if (option === "mount") setMountColor(color);
    if (option === "background") setBackgroundColor(color);
  };

  const handleMountVisibility: setBooleanFunction = (flag: boolean) =>
    setMountVisible(flag);

  const updateMediaPadding = (padding: number) => setRescaleMedia(padding);
  const handleMediaShadowVisibility = (flag: boolean) => setMediaShadow(flag);

  return (
    <MountProviderContext.Provider
      value={{
        mountWidth,
        mountColor,
        mountVisible,
        mediaShadow,
        backgroundColor,
        reSizeMedia,
        updateColor,
        updateMediaPadding,
        setMountWidth,
        handleMountVisibility,
        handleMediaShadowVisibility,
      }}
    >
      {children}
    </MountProviderContext.Provider>
  );
};

export default MountProvider;
