import styled, { css } from "styled-components/native";
import { Image } from "react-native";
import Animated from "react-native-reanimated";

export const absoluteFill = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Container = styled(Animated.View)`
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  border-radius: 15px;
`;

export const Picture = styled(Animated.Image)`
  flex: 1;
  background-color: white;
  ${absoluteFill}
`;

export const UpperPart = styled.View`
  flex: 1;
`;

export const CarouselContainer = styled.View`
  flex-direction: row;
  ${absoluteFill}
`;

export const PreviousImage = styled.Pressable`
  flex: 1;
`;

export const NextImage = styled.Pressable`
  flex: 1;
`;
