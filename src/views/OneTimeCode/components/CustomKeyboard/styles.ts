import styled from "styled-components/native";
import Text from "~components/Text";

const numOfColumns = 3;
export const KeyContainer = styled.TouchableOpacity`
  padding: 20px;
  width: ${100 / numOfColumns}%;
  justify-content: center;
  align-items: center;
`;

export const KeyContent = styled(Text).attrs({
  fontSize: "h2",
})`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const KeyboardContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CustomKey = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
