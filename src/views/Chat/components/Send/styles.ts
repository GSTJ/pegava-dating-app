import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 20px 25px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.border};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#bcbcbc",
})`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily.regular};

  font-size: ${(props) => props.theme.typography.sizes.regular.size}px;
  line-height: ${(props) => props.theme.typography.sizes.regular.lineHeight}px;
`;
