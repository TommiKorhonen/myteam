import React from "react";
import styled from "styled-components";

type CardProps = {
  img?: string;
  heading?: string;
  text?: string;
};

const HomeInfoCard = ({ img, heading, text }: CardProps) => {
  return (
    <Content>
      <div>
        <img src={img} alt="Your Name" />
      </div>
      <div>
        <Heading>{heading}</Heading>
        <Description>{text}</Description>
      </div>
    </Content>
  );
};

export default HomeInfoCard;
const Content = styled.li`
  display: flex;
  gap: 1rem;
`;
const Heading = styled.p`
  color: ${({ theme }) => theme.primary.coral};
  margin-bottom: 1rem;
`;
const Description = styled.p`
  color: white;
`;
