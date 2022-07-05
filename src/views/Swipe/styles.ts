import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export const Tab = createMaterialTopTabNavigator();

export const Container = styled(SafeAreaView).attrs({
  edges: ["left", "right"],
})`
  flex: 1;
  padding-bottom: 50px;
  background-color: ${(props) => props.theme.colors.background};
`;
