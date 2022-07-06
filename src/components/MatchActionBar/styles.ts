import styled from "styled-components/native";
import Animated from "react-native-reanimated";

// Should preload for a better user experience, so no inline requires
import confusedEmoji from "~assets/images/ConfusedEmoji.png";
import thinkingEmoji from "~assets/images/ThinkingEmoji.png";
import heartEyesEmoji from "~assets/images/HeartEyesEmoji.png";

export const Container = styled(Animated.View).attrs({
  pointerEvents: "box-none",
})`
  width: 100%;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const ActionItem = styled.TouchableOpacity`
  padding: 14px;
  background-color: ${(props) => props.theme.colors.secondaryBackground};

  border-radius: 100px;

  shadow-color: #000;
  shadow-offset: 0 1px;
  shadow-opacity: 0.02;
  shadow-radius: 1.41px;
  elevation: 60;
`;

export const ConfusedEmoji = styled.Image.attrs({
  source: confusedEmoji,
})`
  width: 60px;
  height: 60px;
`;

export const ThinkingEmoji = styled.Image.attrs({
  source: thinkingEmoji,
})`
  width: 43px;
  height: 43px;
`;

export const HeartEyesEmoji = styled(ConfusedEmoji).attrs({
  source: heartEyesEmoji,
})``;
