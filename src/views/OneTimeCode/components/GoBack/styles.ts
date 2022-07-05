import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;

  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.text};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
`;
