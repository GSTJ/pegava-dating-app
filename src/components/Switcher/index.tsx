import React, { useState } from "react";

import { Container, OptionButton, TextButton } from "./styled";

const Option = (props) => {
  return (
    <OptionButton onPress={props?.onPress} marked={props?.isMarked}>
      <TextButton>{props.children}</TextButton>
    </OptionButton>
  );
};

const Switcher = () => {
  const [marked, setMarked] = useState("");

  return (
    <Container>
      <Option isMarked={marked === "Homem"} onPress={() => setMarked("Homem")}>
        Homem
      </Option>
      <Option
        isMarked={marked === "Mulher"}
        onPress={() => setMarked("Mulher")}
      >
        Mulher
      </Option>
      <Option
        isMarked={marked === "Outros"}
        onPress={() => setMarked("Outros")}
      >
        Outros
      </Option>
    </Container>
  );
};

export default Switcher;
