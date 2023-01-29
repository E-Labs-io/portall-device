/** @format */

import { Button, InputBox } from "components/common";
import DropdownContainer from "components/common/DropdownContainer";
import StateSkeleton from "components/common/SkeletonLoader";
import ToggleSwitch from "components/common/ToggleSwitch";
import useMountProvider from "hooks/MountProvider/hooks/useNFTimelineProvider";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { colorChangeOptions } from "hooks/MountProvider/types/ProviderTypes";
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

interface ImageSelectorProps {}
function ImageSelector({}: ImageSelectorProps) {
  const { setImage, image } = useMountProvider();
  const [inputTrack, track] = useState<string>(null);

  const handleURLSubmit = () => {
    setImage(inputTrack);
  };

  return (
    <DropdownContainer
      title={"Image Select"}
      subTitle=""
      background="#ffffff"
      textColor="black"
      width="95%"
    >
      <OptionsContainer>
        <OptionBox>
          URl: <InputBox value={inputTrack} onChange={track} />
          <Button height="30px" onClick={handleURLSubmit}>
            Search
          </Button>
        </OptionBox>
      </OptionsContainer>
    </DropdownContainer>
  );
}

export default ImageSelector;
