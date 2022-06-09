import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Description>Moi</Description>
    </div>
  );
};

export default Home;

const Description = styled.p`
  background-color: ${({ theme }) => theme.primary.green};
  color: white;
`;
