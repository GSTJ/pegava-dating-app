import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import Glassmorphism from "~components/Glassmorphism";

export const Content = styled.View`
  padding: 5px;
  margin-bottom: auto;
  align-items: center;
`;

export const Container = styled(Glassmorphism)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: auto;
  align-self: flex-end;
  width: 24px;
`;

interface IDot {
  active: boolean;
}

export const Dot = styled(Animated.View)<IDot>`
  background-color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  border-radius: 5px;
  margin: 3px;
`;
