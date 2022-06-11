import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/header/Header";
import { Container } from "../components/styles/Container";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeStyled></HomeStyled>
    </>
  );
};

export default Home;

const HomeStyled = styled.main`
  max-height: 100vh;
  overflow: hidden;
`;
