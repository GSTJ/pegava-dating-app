import { BlurView } from "expo-blur";
import styled, { DefaultTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Color from "color";

export const getBlurViewProps = (props: { theme: DefaultTheme }) => ({
  intensity: 90,
  tint: props.theme.dark ? "dark" : "light",
});

export const Container = styled(BlurView).attrs(getBlurViewProps)`
  overflow: hidden;
`;

export const getGradientProps = (props: { theme: DefaultTheme }) => ({
  colors: [
    Color(props.theme.colors.secondaryBackground).fade(0.3).rgb().string(),
    Color(props.theme.colors.secondaryBackground).fade(0.5).rgb().string(),
  ],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
});

export const Gradient = styled(LinearGradient).attrs(getGradientProps)``;
