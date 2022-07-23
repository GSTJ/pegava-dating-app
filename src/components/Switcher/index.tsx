import React from "react";
import { View } from "react-native";
import Text from "~components/Text";

import { Container, OptionButton, TextButton } from "./style";

interface SwitcherProps {
  title: string;
  data: string[];
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Option = (props) => {
  return (
    <OptionButton onPress={props?.onPress} marked={props?.isMarked}>
      <TextButton
        marked={props?.isMarked}
        fontWeight="extraBold"
        fontSize="regular"
      >
        {props.children}
      </TextButton>
    </OptionButton>
  );
};

const Switcher = ({ title, data, onChange, value }: SwitcherProps) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text fontWeight="bold" fontSize="large">
        {title}
      </Text>
      <Container>
        {data.map((item) => {
          return (
            <Option
              key={item}
              isMarked={item === value}
              onPress={() => onChange(item)}
            >
              {item}
            </Option>
          );
        })}
      </Container>
    </View>
  );
};

export default Switcher;
