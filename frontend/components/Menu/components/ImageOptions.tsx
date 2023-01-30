/** @format */

import DropdownContainer from "components/common/DropdownContainer";

import ToggleSwitch from "components/common/ToggleSwitch";
import useFrameProvider from "hooks/FrameProvider/hooks/useFrameProvider";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Slider from "components/common/Slider";
import { PopoverPicker } from "../../common/PopoverColorPicker";

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
    mediaShadowStyle,
    mediaShadowVisibility,
    reSizeMedia,
    handleMediaShadowVisibility,
    updateMediaPadding,
    updateMediaShadowStyle,
  } = useFrameProvider();

  const [isMountVisible, setIsMountVisible] = useState<boolean>(
    mediaShadowVisibility
  );

  const handleChangeShadowVisible = (flag: boolean) => {
    handleMediaShadowVisibility(flag);
    setIsMountVisible(flag);
  };

  const handleShadowStyleChange = (option: string, value: string | number) => {
    let shadow = mediaShadowStyle;
    if (option === "color") {
      shadow.color = value.toString();
    }
    if (option === "feather") {
      let val = Number(value) * 2;
      shadow.feather = val;
    }
    if (option === "spread") {
      let val = Number(value) * 2;
      shadow.spread = val;
    }

    updateMediaShadowStyle(shadow);
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
          Scale
          <SliderContainer>
            <Slider
              id="mediaScale"
              startPosition={reSizeMedia / 2}
              value={reSizeMedia / 2}
              onChange={handleScaleChange}
            />
          </SliderContainer>
        </OptionBox>
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
          Shadow Color
          <PopoverPicker
            color={mediaShadowStyle.color}
            onChange={(color) => handleShadowStyleChange("color", color)}
            pro
          />
        </OptionBox>
        <OptionBox>
          Shadow Feather
          <SliderContainer>
            <Slider
              id="shadowFeather"
              startPosition={mediaShadowStyle.feather / 2}
              value={mediaShadowStyle.feather / 2}
              onChange={(value) => handleShadowStyleChange("feather", value)}
            />
          </SliderContainer>
        </OptionBox>
        <OptionBox>
          Shadow Spread
          <SliderContainer>
            <Slider
              id="shadowFeather"
              startPosition={mediaShadowStyle.spread / 2}
              value={mediaShadowStyle.spread / 2}
              onChange={(value) => handleShadowStyleChange("spread", value)}
            />
          </SliderContainer>
        </OptionBox>
      </OptionsContainer>
    </DropdownContainer>
  );
}

export default ImageOptions;
