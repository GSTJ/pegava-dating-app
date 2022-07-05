import Color from "color";
import { LinearGradient } from "expo-linear-gradient";
import { clamp } from "lodash";
import styled from "styled-components/native";
import { height, width } from "~constants";

const ASPECT_RATIO = 4 / 3;
const MAX_HEIGHT = height * 0.7;
const MIN_HEIGHT = height * 0.4;
const IDEAL_HEIGHT = width * ASPECT_RATIO;

export const CARD_HEIGHT = clamp(IDEAL_HEIGHT, MIN_HEIGHT, MAX_HEIGHT);

export const Container = styled.ScrollView.attrs({
  bounces: false,
})`
  flex-grow: 1;
`;

export const BottomColumn = styled.View`
  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding: 25px;
  padding-top: 0;
`;

export const ShareButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, right: 20, left: 20 },
})`
  margin-top: 50px;
  align-self: center;
`;

export const ReportButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, right: 20, left: 20 },
})`
  margin-top: 25px;
  align-self: center;
`;

const getStatusBarProps = (props) => {
  const gradientColor = Color(props.theme.colors.background);

  return {
    colors: [
      gradientColor.fade(1).rgb().string(),
      gradientColor.fade(0.2).rgb().string(),
      gradientColor.fade(0).rgb().string(),
    ],
    pointerEvents: "none",
  };
};

export const MatchActionBarGradient = styled(LinearGradient).attrs(
  getStatusBarProps
)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
