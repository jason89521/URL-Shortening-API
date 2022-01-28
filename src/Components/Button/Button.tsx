import React from 'react';
import { Container } from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

export default Button;
