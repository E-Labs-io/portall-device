/** @format */

import DropdownContainer from "components/common/DropdownContainer";

import ToggleSwitch from "components/common/ToggleSwitch";
import useMountProvider from "hooks/MountProvider/hooks/useNFTimelineProvider";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Slider from "components/common/Slider";

const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const OptionBox = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  font-size: 1.5rem;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SliderContainer = styled.div`
  padding-left: 10px;
  width: 90%;
  height: 100%;
`;

interface ImageOptionsProps {}
function ImageOptions({}: ImageOptionsProps) {
  const {
    mediaShadow,
    reSizeMedia,
    handleMediaShadowVisibility,
    updateMediaPadding,
  } = useMountProvider();

  const [isMountVisible, setIsMountVisible] = useState<boolean>(mediaShadow);

  const handleChangeShadowVisible = (flag: boolean) => {
    handleMediaShadowVisibility(flag);
    setIsMountVisible(flag);
  };

  const handleScaleChange = (value: number) => {
    console.log("Scale: ", value);
    updateMediaPadding(value * 2);
  };

  return (
    <DropdownContainer
      title={"Image Options"}
      subTitle=""
      background="#ffffff"
      textColor="black"
      width="95%"
    >
      <OptionsContainer>
        <OptionBox>
          Show Shadow
          <ToggleSwitch
            status={isMountVisible && isMountVisible}
            callBack={handleChangeShadowVisible}
            id="shadowVisible"
            tooltip="Set is you do or don't see the border"
          />
        </OptionBox>
        <OptionBox>
          Scale
          <SliderContainer>
            <Slider
              startPosition={reSizeMedia / 2}
              value={reSizeMedia / 2}
              onChange={handleScaleChange}
            />
          </SliderContainer>
        </OptionBox>
      </OptionsContainer>
    </DropdownContainer>
  );
}

export default ImageOptions;
