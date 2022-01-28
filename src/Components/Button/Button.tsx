import React from 'react';
import { Container } from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
};

const Button = ({children, className}: ButtonProps) => {
  return <Container className={className}>{children}</Container>;
};

export default Button;
