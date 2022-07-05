import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;
