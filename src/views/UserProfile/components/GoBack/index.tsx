import React from "react";
import Glassmorphism from "~components/Glassmorphism";
import { Container, Content } from "./styles";
import ArrowDown from "~images/ArrowDown.svg";

const GoBack = (props) => {
  return (
    <Container {...props}>
      <Glassmorphism>
        <Content>
          <ArrowDown />
        </Content>
      </Glassmorphism>
    </Container>
  );
};

export default GoBack;
