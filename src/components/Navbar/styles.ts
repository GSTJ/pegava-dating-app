import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
`;

export const Tabs = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Tab = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled(Animated.View)`
  height: 3px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;
