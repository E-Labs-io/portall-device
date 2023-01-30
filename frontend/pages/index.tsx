/** @format */

import { Modal } from "components/common";
import StateSkeleton from "components/common/SkeletonLoader";
import MenuButton from "components/Menu/MenuButton";
import calculateAspectRatio from "helpers/media/getImageAspectRatio";
import scaleImage from "helpers/media/scaleMedia";
import { useFrameProvider } from "hooks/FrameProvider";
import { usePortalProvider } from "hooks/PortalProvider";
import NFTMedia from "hooks/web3/components/NFTMedia";
import useWindowSize from "hooks/window/useWindowSize";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

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
  border-style: ${({ visible }) => (visible ? "solid" : "none")};
  border-width: ${({ mountWidth }) => (mountWidth ? mountWidth : "10px")};
  border-radius: ${({ mountCurve }) => (mountCurve ? mountCurve : "0")};
  border-color: ${({ mountColor }) => (mountColor ? mountColor : "white")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  box-shadow: inset 0px 0px 10px 5px rgba(169, 162, 162, 0);
`;

const ImageArea = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeOverLay = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  text-align: right;
`;

const OverlayText = styled.div`
  color: #a0a0a0;
  font-size: x-large;
`;

const Home = () => {
  const { width, height } = useWindowSize();
  const { image } = usePortalProvider();
  const {
    mountWidth,
    reSizeMedia,
    mountColor,
    backgroundColor,
    mountVisible,
    mediaShadow,
    mediaShadowVisibility,
  } = useFrameProvider();

  const [mediaAspectRatio, setAspectRatio] = useState<number>();
  const [mediaWidth, setMediaWidth] = useState<number>();
  const [mediaHeight, setMediaHeight] = useState<number>();

  useEffect(() => {});

  const onMediaLoaded = () => {
    console.log("Media Loaded");
    const media = document.getElementById(`NFTMedia-1`) as
      | HTMLImageElement
      | HTMLVideoElement;
    const aspectRatio = calculateAspectRatio(media);
    const scaledImage = scaleImage(
      width < height ? width : height,
      mountWidth,
      aspectRatio
    );
    setAspectRatio(aspectRatio);
    setMediaWidth(scaledImage.width);
    setMediaHeight(scaledImage.height);
  };

  return (
    <HomeContainer>
      <FrameContainer backgroundColor={mountColor}>
        <Mount
          mountWidth={`${mountWidth}px`}
          mountColor={mountColor}
          backgroundColor={backgroundColor}
          visible={mountVisible}
        >
          <ImageArea height={"100%"} width={"100%"}>
            <NFTMedia
              index="1"
              mediaUrl={image}
              onLoadCallback={onMediaLoaded}
              height={`${mediaHeight - reSizeMedia}px`}
              width={`${mediaWidth - reSizeMedia}px`}
              boxShadow={mediaShadowVisibility ? mediaShadow : null}
              videoControls
              autoPlayVideo
            />
          </ImageArea>
        </Mount>
      </FrameContainer>
      <MenuButton />
    </HomeContainer>
  );
};

export default Home;

// height={mediaHeight} width={mediaWidth}
