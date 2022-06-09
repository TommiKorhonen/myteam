import type { NextPage } from "next";
import styled from "styled-components";
import Button from "../components/button/Button";
import { Container } from "../components/styles/Container";

const Home: NextPage = () => {
  return (
    <HomeStyled>
      <Container>
        <Button color="primary">
          <p>Button</p>
        </Button>
      </Container>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.main`
  background-color: ${({ theme }) => theme.primary.green};
  color: white;
`;
