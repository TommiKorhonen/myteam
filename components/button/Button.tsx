import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  href?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

const Button = ({ href, children, color, disabled, onClick }: ButtonProps) => {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }
  return (
    <Btn title="test" onClick={onClick} type="button" color={color}>
      {children}
    </Btn>
  );
};

export default Button;

const COLOR = {
  primary: css`
    color: #fff;
    background-color: transparent;
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};
export const Btn = styled.button<ButtonProps>`
  padding: 10px 2rem;
  cursor: pointer;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  border: 2px solid #ffffff;
  border-radius: 24px;

  ${(props) => props.color && COLOR[props.color]}
`;
