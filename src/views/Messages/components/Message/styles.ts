import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 10px 15px;
  flex: 1;
  margin: 5px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
`;

export const PICTURE_SIZE = 55;
export const Picture = styled.Image`
  width: ${PICTURE_SIZE}px;
  height: ${PICTURE_SIZE}px;
  border-radius: 50px;
  margin-right: 15px;
`;
