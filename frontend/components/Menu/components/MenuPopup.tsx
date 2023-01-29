/** @format */

import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ImageOptions from "./ImageOptions";
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
  return (
    <PopupContainer>
      <MountOptions />
      <ImageOptions />
    </PopupContainer>
  );
}

export default MenuPopup;
