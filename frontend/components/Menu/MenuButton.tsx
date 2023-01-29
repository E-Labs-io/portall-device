/** @format */

import { Modal } from "components/common";
import StateSkeleton from "components/common/SkeletonLoader";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import MenuPopup from "./components/MenuPopup";

const MenuButtonContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  z-index: 5;
  opacity: 0.1;
  transition: opacity 0.5s;
  :hover {
    opacity: 1;
  }
`;

const MenuButtonHolder = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  padding: 20px;
`;

const Button = styled.div`
  width: 100px;
  color: black;
  height: 100px;
  border-radius: 100%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

interface MenuButtonProps {}
function MenuButton({}: MenuButtonProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const onRequestCloseModal = () => setModalOpen(false);
  const handleOpenModal = () => setModalOpen(true);

  return (
    <MenuButtonContainer>
      <MenuButtonHolder>
        <Button onClick={handleOpenModal}>MENU</Button>
      </MenuButtonHolder>
      <Modal
        onRequestClose={onRequestCloseModal}
        title="Menu [device name]"
        isOpen={isModalOpen}
      >
        <MenuPopup />
      </Modal>
    </MenuButtonContainer>
  );
}

export default MenuButton;
