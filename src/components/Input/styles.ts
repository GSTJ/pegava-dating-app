import Color from "color";
import styled from "styled-components/native";
import cancelIcon from "~images/Cancel.svg";

export const Content = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${(props) => props.theme.colors.secondaryBackground};
  border-radius: 15px;
  padding: 15px 0 15px 15px;
  margin-top: 20px;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: Color(props.theme.colors.text).fade(0.5).rgb().string(),
}))`
  flex: 1;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily.medium};
  font-size: ${(props) => props.theme.typography.sizes.small.size}px;
  padding-left: 10px;
`;

export const CancelTouchArea = styled.TouchableOpacity`
  padding: 0 20px 0 10px;
  justify-content: center;
`;

export const CancelIcon = styled(cancelIcon).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  opacity: 0.6;
  width: 18px;
  height: 18px;
`;
