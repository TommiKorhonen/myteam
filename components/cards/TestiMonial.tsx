import React from "react";
import styled from "styled-components";

type TestiMonialProps = {
  text: string;
  name: string;
  title: string;
  img: string;
};

const TestiMonial = ({ text, name, title, img }: TestiMonialProps) => {
  return (
    <Card>
      <QuoteIconBox>
        <img src="/images/icon-quotes.svg" alt="" />
      </QuoteIconBox>
      <Description>{text}</Description>
      <Details>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </Details>
      <Image src={img} alt="" />
    </Card>
  );
};

export default TestiMonial;

const Card = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Image = styled.img`
  width: 62px;
  height: 62p;
  border: 2px solid #c4fffe;
  border-radius: 50px;
`;

const Description = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: white;
  margin-bottom: 24px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;
const Name = styled.p`
  color: ${({ theme }) => theme.secondary.raptureBlue};
`;
const Title = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: white;
`;
const QuoteIconBox = styled.div`
  z-index: -10;
  position: absolute;
  top: -35px;
`;
