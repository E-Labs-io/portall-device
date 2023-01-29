/** @format */

import { Modal } from "components/common";
import StateSkeleton from "components/common/SkeletonLoader";
import MenuButton from "components/Menu/MenuButton";
import calculateAspectRatio from "helpers/media/getImageAspectRatio";
import scaleImage from "helpers/media/scaleMedia";
import useMountProvider from "hooks/MountProvider/hooks/useNFTimelineProvider";
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
  const { mountWidth, reSizeMedia } = useMountProvider();

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
    console.log("Scaled Image Size: ", scaledImage);
    console.log("Media aspect Ratio: ", aspectRatio);
    console.log(`Window W: ${width} H: ${height}`);
  };

  return (
    <HomeContainer>
      <ImageArea height={mediaHeight} width={mediaWidth}>
        <NFTMedia
          index="1"
          mediaUrl="ipfs://QmV2aQka9ma31RC6CSVheXnxNAfA7jG7KHH1quRf56ywz7"
          onLoadCallback={onMediaLoaded}
          height={`${mediaHeight - reSizeMedia}px`}
          width={`${mediaWidth - reSizeMedia}px`}
        />
      </ImageArea>
      <MenuButton />
    </HomeContainer>
  );
};

export default Home;
