import React from "react";
import { Text } from "~components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Picture } from "./styles";
import { SceneName } from "~src/@types/SceneName";

export const Message = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate(SceneName.Chat, { user: item })}
    >
      <Picture source={{ uri: item.picture }} />
      <View>
        <Text fontWeight="semiBold">{item.name}</Text>
        <Text fontSize="small">{item.lastMessage}</Text>
      </View>
    </Container>
  );
};
