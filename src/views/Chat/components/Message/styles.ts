import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";
import { Text } from "~components";
import { FeedbackStatus } from "../Feedback";

interface MessageProps {
  sending: boolean;
  status: FeedbackStatus;
}

export const Message = styled(Animated.View)<MessageProps>`
  padding: 15px;
  max-width: 60%;
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.border};
  border-radius: 20px;

  margin-bottom: 5px;

  ${(props) =>
    props.sending
      ? css`
  margin-left: auto
  border-bottom-right-radius:  0;
  `
      : css`
  margin-right: auto
  border-bottom-left-radius:  0;
  `},

  ${(props) =>
    props.status === FeedbackStatus.Error &&
    css`
      border: 1px #dd2e44;
    `}
`;

export const Info = styled.View`
  margin: 5px -5px -5px 20px;
  margin-left: auto;
  flex-direction: row;
  align-items: center;
`;

export const Time = styled(Text).attrs({ fontSize: "small" })`
  color: #737373;
`;
