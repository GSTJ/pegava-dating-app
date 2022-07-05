import React from "react";
import { Title, Container } from "./styles";
import { Text } from "~components";
import { FlatList } from "react-native";
import { Preview } from "../Preview";
import { mockRequest } from "~views/Messages/__mocks__";

export const Header = () => {
  return (
    <Container>
      <Title>
        <Text fontWeight="bold">Pegáveis</Text>
      </Title>
      <FlatList
        data={mockRequest.data}
        keyExtractor={(message) => String(message.id)}
        renderItem={({ item }) => <Preview item={item} />}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      <Title>
        <Text fontWeight="bold">Mensagens</Text>
      </Title>
    </Container>
  );
};
