import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = styled(SafeAreaView).attrs({
  edges: ["top"],
})`
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.colors.secondaryBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.border};
`;

export const BackTouchArea = styled.TouchableOpacity`
  padding: 25px;
`;

export const Picture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 14px;
`;
