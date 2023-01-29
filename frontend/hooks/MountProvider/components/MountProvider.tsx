/** @format */

import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { MountProviderContextType } from "../types";

const FrameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ mountColor }) => (mountColor ? mountColor : "white")};
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Mount = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-style: solid;
  border-width: ${({ mountWidth }) => (mountWidth ? mountWidth : "10px")};
  border-radius: ${({ mountCurve }) => (mountCurve ? mountCurve : "0")};
  border-color: ${({ mountColor }) => (mountColor ? mountColor : "white")};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  box-shadow: inset 0px 0px 10px 5px rgba(169, 162, 162, 0);
`;

export const MountProviderContext = createContext(
  {} as MountProviderContextType
);

const MountProvider = ({ children }) => {
  const [mountWidth, setMountWidth] = useState<number>(50);
  const [mountColor, setMountColor] = useState<string>("#ffffff");
  const [mountShadow, setMountShadow] = useState<string>();
  const [backgroundColor, setBackgroundColor] = useState<string>("#a4a4a4");
  const [reSizeMedia, setRescaleMedia] = useState<number>(20);

  return (
    <MountProviderContext.Provider
      value={{
        mountWidth,
        mountColor,
        mountShadow,
        backgroundColor,
        reSizeMedia,
      }}
    >
      <FrameContainer backgroundColor={mountColor}>
        <Mount
          mountWidth={`${mountWidth}px`}
          mountColor={mountColor}
          backgroundColor={backgroundColor}
        >
          {children}
        </Mount>
      </FrameContainer>
    </MountProviderContext.Provider>
  );
};

export default MountProvider;
