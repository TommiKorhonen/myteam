import Navbar from "../navbar/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}