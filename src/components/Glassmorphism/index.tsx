import React from "react";
import { Container, Gradient } from "./styles";

const Glassmorphism: React.FC<{ children: React.ReactElement }> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Gradient>{children}</Gradient>
    </Container>
  );
};

export default Glassmorphism;
