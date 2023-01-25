/** @format */

import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Connection from "components/Connection";
import Introduction from "components/timeline/Introduction";

const HomeContainer = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) =>
    theme ? theme.coloredTheme.background : "white"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  row-gap: 15px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  justify-content: center;
  display: flex;
`;

const ConnectionContainer = styled.div`
  height: auto;
`;
const PageTitle = styled.div`
  justify-content: center;
  background: #70ffde;
  background: linear-gradient(to bottom right, #70ffde 26%, #fc00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  font-family: "Kanit", sans-serif;
  font-size: 70px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <PageTitle>Non-Fungible Timeline</PageTitle>
      </TitleContainer>
      <ConnectionContainer>
        <Connection />
      </ConnectionContainer>

      <Introduction />
    </HomeContainer>
  );
};

export default Home;
