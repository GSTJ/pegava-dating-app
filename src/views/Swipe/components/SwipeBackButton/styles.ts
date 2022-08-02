import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

export const Container = styled(Animated.View)`
  z-index: 20;
`;

export const GoBack = styled.TouchableOpacity`
  width: 68px;
  height: 50px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  background-color: ${(props) => props.theme.colors.border};

  justify-content: center;

  margin-left: auto;
  margin-top: 25px;
  padding-left: 15px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.025;
  shadow-radius: 2px;
  elevation: 25;
`;
