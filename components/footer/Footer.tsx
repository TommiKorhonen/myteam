import Link from "next/link";
import styled from "styled-components";
import { Container } from "../styles/Container";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Content>
          <ContentLeft>
            <Navigation>
              <img src="/images/logo.svg" alt="" />
              <div>
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
              </div>
            </Navigation>
            <ContactInfo>
              <Description>
                987 Hillcrest Lane <br /> Irvine, CA <br />
                California 92714 <br /> Call Us : 949-833-7432
              </Description>
            </ContactInfo>
          </ContentLeft>
          <ContentRight>
            <Icons>
              <img src="/images/icon-facebook.svg" alt="" />
              <img src="/images/icon-pinterest.svg" alt="" />
              <img src="/images/icon-twitter.svg" alt="" />
            </Icons>
            <Description>Copyright 2020. All Rights Reserved</Description>
          </ContentRight>
        </Content>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.secondary.darkGreen};
  height: 200px;
  display: flex;
  align-items: center;
`;
const Navigation = styled.div`
  width: 285px;
  div {
    display: flex;
    gap: 40px;
  }
`;
const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  width: 730px;
`;
const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;
const Description = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  color: white;
  opacity: 0.6;
`;
const ContactInfo = styled.div``;
const Content = styled.div`
  display: flex;
`;
const Icons = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1rem;
`;
