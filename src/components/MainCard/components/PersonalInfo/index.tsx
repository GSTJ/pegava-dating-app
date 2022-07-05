import React from "react";
import { Container, Name, Age, Description } from "./styles";
import Glassmorphism from "~components/Glassmorphism";

function PersonalInfo({ user }) {
  return (
    <Glassmorphism>
      <Container>
        <Name>
          {user.name}
          <Age>, {user.age}</Age>
        </Name>
        <Description>{user.description}</Description>
      </Container>
    </Glassmorphism>
  );
}

export default PersonalInfo;
