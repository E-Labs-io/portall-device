/** @format */

import getMediaFormat from "helpers/media/getMediaFormat";
import { checkIfIPFSUrl } from "hooks/web3/helpers/isIPFS";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StateSkeleton from "../../../components/common/SkeletonLoader";

const MediaContainer = styled.div`
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  background-color: transparent;
  border-width: 1px;
  border-style: none;
  background: none;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ cursor }) => cursor || "default"};
`;

const NFTImage = styled.img`
  background: solid;
  border-radius: inherit;
  background-color: transparent;
  width: ${({ width }) => (width ? width : "inherit")};
  height: ${({ height }) => (height ? height : "inherit")};
  overflow: hidden;
  cursor: ${({ cursor }) => cursor || "default"};
  align-items: center;
  justify-content: center;
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "none")};
`;
const NFTVideo = styled.video`
  border-radius: inherit;
  background-color: transparent;
  width: ${({ width }) => (width ? width : "inherit")};
  height: ${({ height }) => (height ? height : "inherit")};
  overflow: hidden;
  cursor: ${({ cursor }) => cursor || "default"};
  align-items: center;
  justify-content: center;
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "none")};
`;

export interface NFTMediaProps {
  mediaUrl: string;
  index?: string | number;
  height?: string | number;
  width?: string | number;
  colorA?: string;
  colorB?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  videoControls?: true;
  autoPlayVideo?: true;
  boxShadow?: string;
  onClick?: () => void;
  onLoadCallback?: () => void;
}

function NFTMedia({
  mediaUrl,
  index = "0",
  onClick,
  height,
  width,
  colorA,
  colorB,
  color,
  border,
  videoControls,
  autoPlayVideo,
  borderRadius,
  boxShadow,
  onLoadCallback,
}: NFTMediaProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [mediaFormat, setMediaFormat] = useState("image");
  const [imageUrl, setImageUrl] = useState<string>(null);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!ready && !loading) {
      if (mediaUrl) {
        const urlParsed = checkIfIPFSUrl(mediaUrl);
        setImageUrl(urlParsed);
        const format = getMediaFormat(urlParsed);
        setMediaFormat(format);
        setReady(true);
        setLoading(false);
      } else {
        setLoadError(true);
        setReady(true);
        setLoading(false);
      }
    }
    if (ready && imageUrl && imageUrl !== mediaUrl && mediaUrl) {
      setReady(false);

      const urlParsed = checkIfIPFSUrl(mediaUrl);
      setImageUrl(urlParsed);
      const format = getMediaFormat(urlParsed);
      setMediaFormat(format);
      setReady(true);
      setLoading(false);
    }
    if (!loaded && ready) {
      var vid = document.getElementById(`NFTMedia-${index}`);
      vid.onloadeddata = function (e) {
        handelOnLoad(e);
      };
      vid.onerror = (e) => {
        handelMediaError(e);
      };
    }
  });

  const handelOnLoad = (e) => {
    setLoaded(true);
    onLoadCallback();
  };

  const handelMediaError = (e) => {
    console.log("Media Load Error: ", e);
    setLoadError(true);
  };

  return (
    <MediaContainer
      onClick={onClick}
      border={border}
      borderRadius={borderRadius}
      height={height}
      width={width}
    >
      {(!!!imageUrl || loadError) && (
        <StateSkeleton
          width="inherit"
          height="inherit"
          message="Media not available"
          colorA={colorA}
          colorB={colorB}
          color={color}
        />
      )}

      {!loaded && !loadError && (
        <StateSkeleton
          width="inherit"
          height="inherit"
          message="Loading Media"
          colorA={colorA}
          colorB={colorB}
          color={color}
        />
      )}
      {mediaFormat && mediaFormat === "image" && (
        <NFTImage
          id={`NFTMedia-${index}`}
          alt="The NFT Image"
          crossorigin="anonymous"
          src={imageUrl}
          onLoad={handelOnLoad}
          onerror={handelMediaError}
          boxShadow={boxShadow}
        />
      )}

      {mediaFormat && mediaFormat === "video" && (
        <NFTVideo
          id={`NFTMedia-${index}`}
          alt="The NFT Video"
          crossorigin="anonymous"
          src={imageUrl}
          controls={videoControls}
          autoplay={autoPlayVideo}
          boxShadow={boxShadow}
        />
      )}
    </MediaContainer>
  );
}

export default NFTMedia;
