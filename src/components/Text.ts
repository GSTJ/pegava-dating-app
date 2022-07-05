import styled, { css } from "styled-components/native";
import { DefaultTheme as DefaultThemeProps } from "styled-components";

export interface TextProps {
  fontSize?: keyof DefaultThemeProps["typography"]["sizes"];
  color?: keyof DefaultThemeProps["colors"];
  fontWeight?: keyof DefaultThemeProps["typography"]["fontFamily"];
}

export default styled.Text<TextProps>`
  color: ${(props) => {
    const { colors } = props.theme;
    return colors?.[props.color ?? "text"];
  }};

  font-family: ${(props) => {
    const { fontFamily } = props.theme.typography;
    return fontFamily?.[props.fontWeight ?? "regular"];
  }};

  ${(props) => {
    const { sizes } = props.theme.typography;

    const selectedSize = sizes?.[props.fontSize ?? "regular"];

    return css`
      font-size: ${selectedSize.size}px;
      line-height: ${selectedSize.lineHeight}px;
    `;
  }}
`;
