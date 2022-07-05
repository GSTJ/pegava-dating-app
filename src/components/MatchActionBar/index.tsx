import React from "react";
import Animated, { FadeInDown, ZoomOutDown } from "react-native-reanimated";
import {
  Container,
  ActionItem,
  ConfusedEmoji,
  HeartEyesEmoji,
  ThinkingEmoji,
} from "./styles";

const MatchActionBar = ({
  onNope,
  onYep,
  onMaybe,
  animated,
  ...props
}: any) => {
  return (
    <Container exiting={ZoomOutDown} {...props}>
      <Animated.View entering={animated && FadeInDown.delay(300)}>
        <ActionItem onPress={onNope}>
          <ConfusedEmoji />
        </ActionItem>
      </Animated.View>
      <Animated.View entering={animated && FadeInDown.delay(350)}>
        <ActionItem onPress={onMaybe}>
          <ThinkingEmoji />
        </ActionItem>
      </Animated.View>
      <Animated.View entering={animated && FadeInDown.delay(400)}>
        <ActionItem onPress={onYep}>
          <HeartEyesEmoji />
        </ActionItem>
      </Animated.View>
    </Container>
  );
};

export default MatchActionBar;
