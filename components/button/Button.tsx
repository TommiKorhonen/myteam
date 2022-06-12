import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  href?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "primary_dark";
  disabled?: boolean;
  label?: string;
};

const Button = ({
  href,
  children,
  color = "primary",
  disabled,
  onClick,
  label,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <BtnLink color={color}>{label}</BtnLink>
      </Link>
    );
  }

  return (
    <Btn onClick={onClick} type="button" color={color}>
      {label}
    </Btn>
  );
};

export default Button;

const COLOR = {
  primary: css`
    color: #fff;
    background-color: transparent;
    border: 2px solid #ffffff;

    &:hover {
      background-color: white;
      color: ${({ theme }) => theme.secondary.darkGreen};
    }
  `,
  secondary: css`
    background-color: white;
    color: ${({ theme }) => theme.secondary.darkGreen};
    &:hover {
      background-color: ${({ theme }) => theme.secondary.raptureBlue};
    }
  `,
  primary_dark: css`
    background-color: transparent;
    color: ${({ theme }) => theme.secondary.stateGreen};
    border: 2px solid ${({ theme }) => theme.secondary.stateGreen};
    &:hover {
      background-color: ${({ theme }) => theme.secondary.stateGreen};
      color: white;
    }
  `,
};
export const Btn = styled.button<ButtonProps>`
  padding: 10px 32px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  border-radius: 24px;
  font-weight: 600;
  font-size: 18px;
  ${(props) => props.color && COLOR[props.color]}
`;
export const BtnLink = styled.a<ButtonProps>`
  padding: 10px 32px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  border-radius: 24px;
  font-weight: 600;
  font-size: 18px;
  ${(props) => props.color && COLOR[props.color]}
`;
