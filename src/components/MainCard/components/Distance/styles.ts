import styled from "styled-components/native";
import Text from "~components/Text";
import Glassmorphism from "~components/Glassmorphism";

export const Container = styled(Glassmorphism)`
  margin: 15px;
  border-radius: 5px;
  margin-bottom: auto;
  overflow: hidden;
  align-self: flex-start;
`;

export const Content = styled.View`
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;

export const DistanceText = styled(Text).attrs({
  fontWeight: "semiBold",
})`
  margin-left: 5px;
  margin-bottom: 3px;
  flex-grow: 0;
  color: ${(props) => props.theme.colors.text};
`;
