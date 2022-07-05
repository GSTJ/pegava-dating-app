import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import * as LikeFeedbackStyles from "~components/FeedbackCard/components/LikeFeedback/styles";

export const Container = styled(LikeFeedbackStyles.Container)`
  background-color: transparent;
`;

export const EmptyAnimation = styled(LottieView).attrs({
  autoPlay: true,
  source: require("~animations/empty.json"),
})`
  width: 100px;
`;

export const LogoLoading = styled(LottieView).attrs({
  autoPlay: true,
  source: require("~animations/loadingLogo.json"),
  speed: 0.5,
})`
  width: 150px;
  margin: auto;
`;
