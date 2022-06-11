import React from "react";
import styled from "styled-components";
import { testimonialData } from "../../data/TestiMonialData";
import TestiMonial from "../cards/TestiMonial";
import { Container } from "../styles/Container";

const Testimonials = () => {
  return (
    <Aside>
      <TopImages>
        <img src="/images/bg-pattern-home-4-about-3.svg" alt="" />
      </TopImages>
      <Container>
        <Content>
          <Heading>
            Delivering real results for top companies. Some of our success
            stories.
          </Heading>
          <Cards>
            {testimonialData.map((detail) => (
              <TestiMonial
                title={detail.title}
                name={detail.name}
                text={detail.text}
                img={detail.img}
                key={detail.id}
              />
            ))}
          </Cards>
        </Content>
      </Container>
      <BottomImages>
        <img src="/images/bg-pattern-home-5.svg" alt="" />
      </BottomImages>
    </Aside>
  );
};

export default Testimonials;

const Aside = styled.aside`
  height: 745px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Content = styled.div``;
const Heading = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 92px;
`;
const Cards = styled.ul`
  display: flex;
  gap: 30px;
`;
const TopImages = styled.div`
  position: absolute;
  top: 0;
`;
const BottomImages = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0;
`;
