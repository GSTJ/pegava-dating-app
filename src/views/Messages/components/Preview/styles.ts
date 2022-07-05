import styled from "styled-components/native";

export const Content = styled.View`
  width: 65px;
  align-items: center;
`;

export const Picture = styled.Image`
  width: 80px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 5px;

  background-color: ${(props) => props.theme.colors.border};
`;

export const Container = styled.TouchableOpacity`
  margin: 7px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
