import styled from "styled-components/native";

import LottieView from "lottie-react-native";
import LoadingDots from "~animations/inverseLoadingDots.json";

interface LoadingProps {
  inverse?: boolean;
}

export default styled(LottieView).attrs((props: LoadingProps) => ({
  autoPlay: true,
  source: LoadingDots,
  ...props,
}))`
  width: 50px;
  margin: auto;
`;
