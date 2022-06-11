import React from "react";
import styled from "styled-components";

const CallToAction = () => {
  return <Container>CallToAction</Container>;
};

export default CallToAction;

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.coral};
  height: 200px;
`;
