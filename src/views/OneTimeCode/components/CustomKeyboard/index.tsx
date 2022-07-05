import React, { useCallback, useContext } from "react";
import { TouchableOpacityProps } from "react-native";
import Erase from "~images/Erase.svg";
import {
  KeyContainer,
  KeyContent,
  KeyboardContainer,
  CustomKey,
} from "./styles";
import { ThemeContext } from "styled-components/native";

enum KeyTypes {
  Digit = "Digit",
  Backspace = "Backspace",
  Empty = "Empty",
}
interface IKey {
  key: string;
  render: any;
  type: KeyTypes;
  value?: any;
}

const makeDigit = (digit: number): IKey => ({
  key: String(digit),
  type: KeyTypes.Digit,
  value: digit,
  render: (props: TouchableOpacityProps) => (
    <KeyContainer {...props}>
      <KeyContent>{digit}</KeyContent>
    </KeyContainer>
  ),
});

const BackspaceKeyComponent = (props: TouchableOpacityProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <KeyContainer {...props}>
      <CustomKey>
        <Erase fill={themeContext.colors.text} />
      </CustomKey>
    </KeyContainer>
  );
};
const BackspaceKey: IKey = {
  key: KeyTypes.Backspace,
  type: KeyTypes.Backspace,
  render: BackspaceKeyComponent,
};

const EmptyKeyComponent = (props) => (
  <KeyContainer disabled {...props}>
    <CustomKey />
  </KeyContainer>
);
const EmptyKey: IKey = {
  key: KeyTypes.Empty,
  type: KeyTypes.Empty,
  render: EmptyKeyComponent,
};

const keys: IKey[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .map(makeDigit)
  .concat([EmptyKey, makeDigit(0), BackspaceKey]);

const CustomKeyboard = ({ onInsert, onDelete }) => {
  const renderKey = useCallback(
    (item) => {
      const KeyComponent = item.render;

      const onKeyPress = () => {
        if (item.type === KeyTypes.Backspace) return onDelete();
        if (item.type === KeyTypes.Digit) return onInsert(item.value);
      };

      return <KeyComponent key={item.key} onPress={onKeyPress} />;
    },
    [onInsert, onDelete]
  );

  return <KeyboardContainer>{keys.map(renderKey)}</KeyboardContainer>;
};

export default CustomKeyboard;
