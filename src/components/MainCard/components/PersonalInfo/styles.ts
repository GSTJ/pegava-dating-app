import styled from "styled-components/native";
import Text from "~components/Text";

export const Container = styled.View`
  padding: 25px;
  padding-bottom: 50px;
`;

export const Name = styled(Text).attrs({
  fontWeight: "extraBold",
  fontSize: "h3",
})`
  color: ${(props) => props.theme.colors.text};
`;

export const Age = styled(Name).attrs({
  fontWeight: "medium",
})``;

export const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text};
`;
