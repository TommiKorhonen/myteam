import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

const CallToAction = () => {
  return (
    <Container>
      <Content>
        <Heading>Ready to get started?</Heading>
        <Button color="primary_dark" href="/contact" label="contact us" />
      </Content>
      <BottomImages>
        <img src="/images/bg-pattern-home-6-about-5.svg" alt="" />
      </BottomImages>
    </Container>
  );
};

export default CallToAction;

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.coral};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 917px;
`;
const Heading = styled.h2`
  color: ${({ theme }) => theme.secondary.stateGreen};
`;
const BottomImages = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
`;
