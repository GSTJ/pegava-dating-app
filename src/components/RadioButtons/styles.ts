import { TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import Text from "~components/Text";

export interface OptionButtonProps extends TouchableOpacityProps {
  marked?: boolean;
  last?: boolean;
}

export const Container = styled.View`
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
`;

export const RadioButtonContainer = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  flex: 1;
  align-items: center;

  ${(props) => {
    if (!props?.last) {
      return css`
        margin-right: 5px;
      `;
    }
  }};

  ${(props) => {
    if (props?.marked) {
      return css`
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondaryBackground};
      `;
    }
  }};
`;

export const TextButton = styled(Text)<OptionButtonProps>`
  color: ${(props) => props.theme.colors.primary};

  ${(props) => {
    if (props?.marked) {
      return css`
        color: ${(props) => props.theme.colors.secondaryBackground};
      `;
    }
  }}
`;
