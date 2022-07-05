import React from "react";
import {
  Container,
  RotatedRectangle,
  Title,
  Line,
  UnderlineContainer,
} from "./styles";

export const Underline = ({ children }) => (
  <UnderlineContainer>
    <Line />
    {children}
  </UnderlineContainer>
);

export const RectangleHighLight = ({ children }) => (
  <UnderlineContainer>
    <RotatedRectangle />
    {children}
  </UnderlineContainer>
);

const HeroText: React.FC = () => {
  return (
    <Container>
      <Title>Encontre </Title>
      <RectangleHighLight>
        <Title style={{ color: "white" }}>pessoas</Title>
      </RectangleHighLight>
      <Title> perto de </Title>
      <RectangleHighLight>
        <Title style={{ color: "white" }}>você</Title>
      </RectangleHighLight>
    </Container>
  );
};

export default HeroText;
