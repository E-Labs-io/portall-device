/** @format */
import React, { useState, useEffect, useContext } from "react";
import styled, { useTheme, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import Divider from "./Divider";

const ContainerClosed = styled.div`
  width: ${({ width }) => (width ? width : "80%")};
  height: 75px;
  text-align: left;
  background: ${({ background, theme }) =>
    background ? background : theme.primaryDark};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.primaryLight};
  border: 2px solid
    ${({ borderColor, theme }) => (borderColor ? borderColor : theme.green)};
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${({ shadow }) =>
    shadow ? "8px 13px 42px -1px rgba(40, 254, 20, 0.15)" : null};
  transition: all 1s ease-out;
`;
const ContainerOpen = styled.div`
  width: ${({ width }) => (width ? width : "80%")};

  min-height: 50px;
  height: ${({ height }) => (height ? height : "auto")};
  text-align: left;
  background: ${({ background, theme }) =>
    background ? background : theme.primaryDark};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.primaryLight};
  border: 2px solid
    ${({ borderColor, theme }) => (borderColor ? borderColor : theme.green)};
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${({ shadow }) =>
    shadow ? "8px 13px 42px -1px rgba(40, 254, 20, 0.15)" : null};
  transition: all 1s ease-in;
`;
const HeaderBox = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 3fr 2fr 1fr;
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.primaryLight};
`;
const Title = styled.h1`
  column-gap: 20px;
  height: 100%;
  font-size: 2.1rem;
  font-weight: 500;
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.primaryLight};
  margin: 0;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;
const SubTitle = styled.h1`
  font-size: 30px;
  font-weight: 250;
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.primaryLight};
  margin: 0;
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: 5px;
`;

const ContentsContainer = styled.div`

`;

export { ContainerClosed, ContainerOpen, HeaderBox, Title, SubTitle };

interface DropdownContainerProps {
  title: string | any;
  subTitle: string;
  width?: string;
  children?: any;
  open?: boolean;
  background?: string;
  textColor?: string;
  borderColor?: string;
  shadow?: boolean;
  height?: string;
}
const DropdownContainer = ({
  title,
  subTitle,
  width,
  height,
  children,
  open,
  background,
  textColor,
  borderColor,
  shadow,
}: DropdownContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  //    Add Index ExpanderCan
  const handleOpenContainer = () => setIsOpen(true);
  const handleCloseContainer = () => setIsOpen(false);
  if (!isOpen)
    return (
      <ContainerClosed
        width={width}
        textColor={textColor}
        background={background}
        borderColor={borderColor}
        shadow={shadow}
      >
        <HeaderBox textColor={textColor} background={background}>
          <Title
            textAlign="right"
            textColor={textColor}
            background={background}
          >
            {title && title}
          </Title>
          <SubTitle textColor={textColor} background={background}>
            {subTitle && subTitle}
          </SubTitle>
          <FontAwesomeIcon
            size="3x"
            icon={faCirclePlus}
            onClick={handleOpenContainer}
          />
        </HeaderBox>
      </ContainerClosed>
    );
  if (isOpen)
    return (
      <ContainerOpen
        width={width}
        textColor={textColor}
        background={background}
        borderColor={borderColor}
        height={height}
      >
        <HeaderBox textColor={textColor} background={background}>
          <Title textColor={textColor} background={background}>
            {title && title}
          </Title>
          <SubTitle textColor={textColor} background={background}>
            {subTitle && subTitle}
          </SubTitle>
          <FontAwesomeIcon
            size="3x"
            icon={faCircleMinus}
            onClick={handleCloseContainer}
          />
        </HeaderBox>
        <Divider />
        <br />
        <ContentsContainer> {children}</ContentsContainer>
      </ContainerOpen>
    );
};

export default DropdownContainer;

//    0x8414FDEd1f0033fDfBD87206d69723f2EE72dde1,0xE557Ff1aeae1123B8F6BDf9fD9F41E85254cE675
