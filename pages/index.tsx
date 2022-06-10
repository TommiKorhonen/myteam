import type { NextPage } from "next";
import styled from "styled-components";
import Button from "../components/button/Button";

import { Container } from "../components/styles/Container";

const Home: NextPage = () => {
  return (
    <HomeStyled>
      <Container>
        <Layout>
          <TextContent>
            <h1>Find the best talent</h1>
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </TextContent>
          <BottomShapes>
            <img src="/images/bg-pattern-home-2.svg" alt="Your Name" />
          </BottomShapes>
        </Layout>
      </Container>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.main`
  max-height: 100vh;
  position: relative;
  overflow: hidden;
`;
const TextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;
const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BottomShapes = styled.div`
  transform: translateY(10px);
  align-self: end;
`;
