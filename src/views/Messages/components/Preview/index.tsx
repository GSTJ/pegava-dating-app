import React from "react";
import { Text } from "~components";
import { useNavigation } from "@react-navigation/native";
import { Container, Picture, Content } from "./styles";
import { SceneName } from "~src/@types/SceneName";

export const Preview = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate(SceneName.Chat, { user: item })}
    >
      <Picture source={{ uri: item.picture }} />
      <Content>
        <Text fontSize="small" fontWeight="semiBold" numberOfLines={1}>
          {item.name}
        </Text>
      </Content>
    </Container>
  );
};
