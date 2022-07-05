import React from "react";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ACTION_OFFSET } from "~src/constants";
import LikeFeedback from "./components/LikeFeedback";
import MainCard from "../MainCard";
import MaybeFeedback from "./components/MaybeFeedback";
import NopeFeedback from "./components/NopeFeedback";
import { AbsolutePosition, Container } from "./styles";

const FeedbackCard = ({ user, translation, ...rest }: any) => {
  const likeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      translation.x.value,
      [10, ACTION_OFFSET],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const nopeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      translation.x.value,
      [-ACTION_OFFSET, -10],
      [1, 0],
      Extrapolate.CLAMP
    ),
  }));

  const maybeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      translation.y.value,
      [-ACTION_OFFSET, -10],
      [1, 0],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <Container {...rest}>
      <AbsolutePosition pointerEvents="auto">
        <MainCard style={{ flex: 1 }} user={user} />
      </AbsolutePosition>
      <AbsolutePosition style={maybeOpacity}>
        <MaybeFeedback />
      </AbsolutePosition>
      <AbsolutePosition style={nopeOpacity}>
        <NopeFeedback />
      </AbsolutePosition>
      <AbsolutePosition style={likeOpacity}>
        <LikeFeedback />
      </AbsolutePosition>
    </Container>
  );
};

export default FeedbackCard;
