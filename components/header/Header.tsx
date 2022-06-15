import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
const Header = () => {
  return (
    <>
      <StyleHeader>
        <LeftShapes>
          <img src="/images/bg-pattern-home-1.svg" alt="Your Name" />
        </LeftShapes>
        <Container>
          <TextContent>
            <Heading>
              Find the best <span>talent</span>
            </Heading>
            <GridRight>
              <GrayBlock />
              <Description>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </Description>
            </GridRight>
          </TextContent>
          <BottomShapes>
            <img src="/images/bg-pattern-home-2.svg" alt="Your Name" />
          </BottomShapes>
        </Container>
      </StyleHeader>
    </>
  );
};

export default Header;
const StyleHeader = styled.header`
  overflow: hidden;
  height: 700px;
  display: flex;
  align-items: center;
  position: relative;
`;
const TextContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.lg}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    text-align: center;
  }
`;
const Heading = styled.h1`
  color: white;
  span {
    color: ${({ theme }) => theme.primary.coral};
  }
  @media (max-width: ${({ theme }) => theme.lg}) {
    margin-bottom: 24px;
    font-size: 64px;
    line-height: 56px;
  }
`;
const GridRight = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  @media (max-width: ${({ theme }) => theme.lg}) {
    justify-content: center;
  }
`;
const GrayBlock = styled.div`
  width: 50px;
  height: 4px;
  background-color: gray;
  position: absolute;
  top: 0;
  @media (max-width: ${({ theme }) => theme.lg}) {
    display: none;
  }
`;

const BottomShapes = styled.div`
  bottom: -10px;
  right: 0;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.lg}) {
    left: 0;
    right: 0;
    text-align: center;
  }
`;
const LeftShapes = styled.div`
  top: 35%;
  left: -100px;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.xL}) {
    visibility: hidden;
  }
`;
const Description = styled.p`
  color: white;
  padding-right: 8rem;
  @media (max-width: ${({ theme }) => theme.lg}) {
    padding: 0;
    line-height: 36px;
    font-size: 15px;
    line-height: 28px;
  }
`;
