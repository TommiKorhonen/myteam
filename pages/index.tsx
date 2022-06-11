import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/header/Header";
import HomeInfo from "../components/main/HomeInfo";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeStyled>
        <HomeInfo />
      </HomeStyled>
    </>
  );
};

export default Home;

const HomeStyled = styled.main``;
