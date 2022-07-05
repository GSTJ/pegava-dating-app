import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export default styled.View`
  background-color: ${(props) => props.theme.colors.border};
  height: ${StyleSheet.hairlineWidth * 2}px;
`;
