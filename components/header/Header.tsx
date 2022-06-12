import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
const Header = () => {
  return (
    <>
      <LeftShapes>
        <img src="/images/bg-pattern-home-1.svg" alt="Your Name" />
      </LeftShapes>
      <StyleHeader>
        <Container>
          <Layout>
            <TextContent>
              <Heading>
                Find the best <span>talent</span>
              </Heading>
              <GridRight>
                <GrayBlock />
                <Description>
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren’t tapping into the abundance
                  of global talent. We’re about to change that.
                </Description>
              </GridRight>
            </TextContent>
            <BottomShapes>
              <img src="/images/bg-pattern-home-2.svg" alt="Your Name" />
            </BottomShapes>
          </Layout>
        </Container>
      </StyleHeader>
    </>
  );
};

export default Header;
const StyleHeader = styled.header`
  overflow: hidden;
`;
const TextContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* margin-top: 250px; */
`;
const Heading = styled.h1`
  color: white;
  span {
    color: ${({ theme }) => theme.primary.coral};
  }
`;
const GridRight = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;
const GrayBlock = styled.div`
  width: 50px;
  height: 4px;
  background-color: gray;
  position: absolute;
  top: 0;
`;
const Layout = styled.div`
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomShapes = styled.div`
  bottom: -10px;
  right: 0;
  position: absolute;
`;
const LeftShapes = styled.div`
  top: 350px;
  /* bottom: 10%; */
  left: -100px;
  position: absolute;
`;
const Description = styled.p`
  color: white;
  padding-right: 8rem;
`;
