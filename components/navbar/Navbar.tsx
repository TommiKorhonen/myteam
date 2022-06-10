import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { Container } from "../styles/Container";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <img src="/images/logo.svg" alt="Your Name" />
        <List>
          <ListItem>
            <Link href="/">home</Link>
          </ListItem>
          <ListItem>
            <Link href="/about">about</Link>
          </ListItem>
        </List>
        <div>
          <Button label="contact us" />
        </div>
      </Nav>
    </Container>
  );
};
{
  /* <Button label="Kissa" /> */
}

export default Navbar;

const Nav = styled.nav`
  margin-top: 73px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  gap: 40px;
  color: white;
  margin-left: 80px;
  margin-right: auto;
`;
const ListItem = styled.li``;
