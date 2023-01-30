/** @format */

import { Button } from "components/common";
import DropdownContainer from "components/common/DropdownContainer";
import StateSkeleton from "components/common/SkeletonLoader";
import ToggleSwitch from "components/common/ToggleSwitch";
import useFrameProvider from "hooks/FrameProvider/hooks/useFrameProvider";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { colorChangeOptions } from "hooks/FrameProvider/types/ProviderTypes";
import { PopoverPicker } from "../../common/PopoverColorPicker";
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

interface MountOptionsProps {}
function MountOptions({}: MountOptionsProps) {
  const {
    mountColor,
    mountWidth,
    backgroundColor,
    updateColor,
    mountVisible,
    handleMountVisibility,
    setMountWidth,
  } = useFrameProvider();

  const [isMountVisible, setIsMountVisible] = useState<boolean>(mountVisible);

  const handleChangeMountVisible = (flag: boolean) => {
    setIsMountVisible(flag);
    handleMountVisibility(flag);
  };

  return (
    <DropdownContainer
      title={"Mount Options"}
      subTitle=""
      background="#ffffff"
      textColor="black"
      width="95%"
    >
      <OptionsContainer>
        <OptionBox>
          Show Border
          <ToggleSwitch
            status={isMountVisible && isMountVisible}
            callBack={handleChangeMountVisible}
            id="mountVisible"
            tooltip="Set is you do or don't see the border"
          />
        </OptionBox>
        <OptionBox>
          Border Color
          <PopoverPicker
            color={mountColor}
            onChange={(color) => updateColor(color, "mount")}
          />
        </OptionBox>
        <OptionBox>
          Border Width
          <SliderContainer>
            <Slider
              id="borderWidth"
              startPosition={mountWidth}
              value={mountWidth}
              onChange={setMountWidth}
            />
          </SliderContainer>
        </OptionBox>
        <OptionBox>
          Background Color
          <PopoverPicker
            color={backgroundColor}
            onChange={(color) => updateColor(color, "background")}
          />
        </OptionBox>
      </OptionsContainer>
    </DropdownContainer>
  );
}

export default MountOptions;
