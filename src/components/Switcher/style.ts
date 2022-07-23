import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "~components/Text";

interface OptionButtonProps {
  marked?: boolean;
}

export const Container = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 15px 0px;
  margin-top: 5px;
`;

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.background};
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 15px;

  ${props => {
    if(props?.marked) {
      return (
        css`
          background-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.secondaryBackground};
        `
      );
    }
  }}

`;

export const TextButton = styled(Text)<OptionButtonProps>`
  color: ${props => props.theme.colors.primary};

  ${props => {
    if(props?.marked) {
      return (
        css`
          color: ${props => props.theme.colors.secondaryBackground};
        `
      );
    }
  }}
`;
