import React from "react";
import styled from "styled-components";
import HomeInfoCard from "../cards/HomeInfoCard";
import { Container } from "../styles/Container";
import { infoData } from "../../data/HomeInfoData";
const HomeInfo = () => {
  return (
    <StyledSection>
      <Container>
        <Layout>
          <Content>
            <CoralBlock />
            <GridLeft>
              <Heading>
                Build & manage distributed teams like no one else.
              </Heading>
            </GridLeft>
            <Cards>
              {infoData.map((info) => (
                <HomeInfoCard
                  key={info.id}
                  text={info.text}
                  heading={info.heading}
                  img={info.img}
                />
              ))}
            </Cards>
          </Content>
        </Layout>
      </Container>
      <BottomImages>
        <img src="/images/bg-pattern-home-3.svg" alt="" />
      </BottomImages>
    </StyledSection>
  );
};

export default HomeInfo;

const StyledSection = styled.div`
  background-color: ${({ theme }) => theme.secondary.stateGreen};
  max-height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Layout = styled.div`
  height: 680px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const GridLeft = styled.div`
  padding-right: 4rem;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  position: relative;
`;
const CoralBlock = styled.div`
  width: 50px;
  height: 4px;
  background-color: ${({ theme }) => theme.primary.coral};
  position: absolute;
  top: 0;
`;
const Heading = styled.h2`
  color: white;
  margin-top: 58px;
`;
const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const BottomImages = styled.div`
  position: absolute;
  bottom: -10px;
  right: -100px;
`;
