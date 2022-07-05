import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";
import { absoluteFill } from "../MainCard/styles";

interface IContainer {
  isFirst: boolean;
}

export const Container = styled(Animated.View)<IContainer>`
  margin: 5px 10px;
  flex: 1;
  border-radius: 15px;

  ${(props) =>
    props.isFirst &&
    css`
      elevation: 0.5;
      shadow-color: #000;
      shadow-offset: 0px 1px;
      shadow-opacity: 0.1;
      shadow-radius: 1px;
    `}
`;

export const AbsolutePosition = styled(Animated.View).attrs((props) => ({
  pointerEvents: "none",
  ...props,
}))`
  flex: 1;
  ${absoluteFill}
`;
