import Animated from "react-native-reanimated";
import styled, { css, DefaultTheme } from "styled-components/native";
import Text from "~components/Text";
export interface ICodeInputNumber {
  filled: boolean;
  active: boolean;
}

const containerFilledMixin = css`
  background-color: ${(props) => props.theme.colors.primary};
  border-color: transparent;
`;

const containerActiveMixin = css`
  border-color: ${(props) => props.theme.colors.primary};
`;

const getContainerVariantsMixin = (props: ICodeInputNumber) => {
  if (props.filled) return containerFilledMixin;
  if (props.active) return containerActiveMixin;
};

const getInputColorMixin = (
  props: ICodeInputNumber & { theme: DefaultTheme }
) => {
  if (props.filled) return props.theme.colors.background;
  if (props.active) return props.theme.colors.primary;
  return "#979797";
};

export const InputNumberContainer = styled(Animated.View)<ICodeInputNumber>`
  border-color: transparent;
  border-style: dashed;
  border-width: 3px;
  border-radius: 15px;
  padding: 23px;
  margin: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #979797;
  ${getContainerVariantsMixin}
`;

export const InputNumber = styled(Text).attrs({
  fontSize: "h1",
  fontWeight: "bold",
})<ICodeInputNumber>`
  color: ${getInputColorMixin};
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  overflow: hidden;
`;
