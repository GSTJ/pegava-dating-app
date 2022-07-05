import styled from "styled-components/native";
import Text from "~components/Text";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  max-width: 300px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  fontSize: "h2",
  fontWeight: "bold",
})`
  color: ${(props) => props.theme.colors.text};
`;

export const TextHighlight = styled(Title)`
  color: ${(props) => props.theme.colors.primary};
`;

export const UnderlineContainer = styled.View`
  align-self: flex-start;
`;

export const Line = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 3px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
`;

export const RotatedRectangle = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  width: 110%;
  margin-left: -5%;
  top: 3px;
  height: 34px;
  transform: rotate(-3deg);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;
