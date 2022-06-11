import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/header/Header";
import HomeInfo from "../components/main/HomeInfo";
import Testimonials from "../components/main/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeStyled>
        <HomeInfo />
        <Testimonials />
      </HomeStyled>
    </>
  );
};

export default Home;

const HomeStyled = styled.main``;
