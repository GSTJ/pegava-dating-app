import styled from "styled-components/native";
import { CARD_HEIGHT } from "~views/UserProfile/styles";

const BACK_CONTAINER_SIZE = 60;

export const Container = styled.TouchableOpacity.attrs({
  pointerEvents: "box-only",
  activeOpacity: 0.95,
  hitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
})`
  margin-top: ${-BACK_CONTAINER_SIZE / 2}px;
  right: 25px;
  border-radius: ${BACK_CONTAINER_SIZE}px;
  overflow: hidden;

  align-self: flex-end;

  z-index: 2;
`;

export const Content = styled.View`
  width: ${BACK_CONTAINER_SIZE}px;
  height: ${BACK_CONTAINER_SIZE}px;
  border-radius: ${BACK_CONTAINER_SIZE}px;

  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;
