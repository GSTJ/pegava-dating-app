import React from "react";
import { View } from "react-native";
import Text from "~components/Text";
import {
  Container,
  OptionButtonProps,
  RadioButtonContainer,
  TextButton,
} from "./styles";

interface RadioButtonsProps {
  title: string;
  data: string[];
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<OptionButtonProps> = (props) => {
  return (
    <RadioButtonContainer
      onPress={props?.onPress}
      marked={props.marked}
      last={props.last}
    >
      <TextButton marked={props?.marked} fontWeight="bold" fontSize="regular">
        {props.children}
      </TextButton>
    </RadioButtonContainer>
  );
};

const RadioButtons: React.FC<RadioButtonsProps> = ({
  title,
  data,
  onChange,
  value,
}) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text fontWeight="bold" fontSize="large">
        {title}
      </Text>
      <Container>
        {data.map((item, index) => {
          return (
            <RadioButton
              key={item}
              marked={item === value}
              onPress={() => onChange(item)}
              last={index === data.length - 1}
            >
              {item}
            </RadioButton>
          );
        })}
      </Container>
    </View>
  );
};

export default RadioButtons;
