import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface OptionButtonProps {
  marked?: boolean;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
  
  ${props => {
    if(props?.marked) {
      return (
        css`
          background-color: ${props => props.theme.colors.primary};
        `
      );
    }
  }}

`;
export const TextButton = styled.Text``;
