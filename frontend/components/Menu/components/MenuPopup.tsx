/** @format */

import { Button } from "components/common";
import { useFrameProvider } from "hooks/FrameProvider";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ImageOptions from "./ImageOptions";
import ImageSelector from "./ImageSelector";
import MountOptions from "./MountOptions";

const PopupContainer = styled.div`
  width: 30vw;
  height: 80vh;
  padding: 15px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

interface MenuPopupProps {}
function MenuPopup({}: MenuPopupProps) {
  const {} = useFrameProvider();
  return (
    <PopupContainer>
      <MountOptions />
      <ImageOptions />
      <ImageSelector />
    </PopupContainer>
  );
}

export default MenuPopup;
