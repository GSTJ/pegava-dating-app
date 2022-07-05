import styled from "styled-components/native";
import Text from "~components/Text";
import Disconnected from "~animations/disconnected.json";
import Error from "~animations/error.json";
import LottieView from "lottie-react-native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})``;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  /* background: ${(props) => props.theme.colors.background}; */
  padding: 20px;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 25px;
`;

export const Title = styled(Text).attrs({
  fontSize: "large",
  fontWeight: "bold",
})``;

export const ContainedText = styled(Text)`
  max-width: 350px;
  margin-bottom: 25px;
`;

export const DisconnectedIllustration = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
  source: Disconnected,
})`
  height: 150px;
  align-self: center;
`;

export const ErrorIllustration = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
  delay: 2000,
  source: Error,
})`
  height: 150px;
  align-self: center;
`;
