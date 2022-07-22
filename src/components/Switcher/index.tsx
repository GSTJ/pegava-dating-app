import React, { useEffect, useState } from "react";
import Text from "~components/Text";

import { Container, OptionButton, TextButton } from "./styled";

interface SwitcherProps {
  title: string;
  data: string[];
  onSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Option = (props) => {
  return (
    <OptionButton onPress={props?.onPress} marked={props?.isMarked}>
      <TextButton marked={props?.isMarked}>{props.children}</TextButton>
    </OptionButton>
  );
};

const Switcher = ({ title, data, onSelected }: SwitcherProps) => {
  const [marked, setMarked] = useState("");

  useEffect(() => onSelected(marked), [marked]);

  const Items = () => {
    if (!data || data.length === 0) return;

    return data.map(item => {
      return (
        <Option key={item} isMarked={item === marked} onPress={() => setMarked(item)}>
          {item}
        </Option>
      );
    });
  };

  return (
    <>
      <Text fontWeight="bold" fontSize="large">
        {title}
      </Text>
      <Container>
        <Items />
      </Container>
    </>
  );
};

export default Switcher;
