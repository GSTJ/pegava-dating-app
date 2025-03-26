import styled from "styled-components/native";
import Text from "~components/Text";

export const Container = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.text};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const BackText = styled(Text).attrs({
  fontSize: "regular",
  fontWeight: "medium",
})`
  color: ${(props) => props.theme.colors.text};
  margin-left: 8px;
`;
