import React from "react";
import { Container, Content, DistanceText } from "./styles";
import Location from "~images/Location.svg";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

function Distance() {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Location width={14} height={14} fill={themeContext.colors.text} />
        <DistanceText>19km</DistanceText>
      </Content>
    </Container>
  );
}

export default Distance;
