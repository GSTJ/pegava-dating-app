import React, { useState, useCallback } from "react";
import { Container, Input } from "./styles";
import useSendMessage from "./useSendMessage";

function Component() {
  const [message, setMessage] = useState("");
  const sendMessage = useSendMessage();

  const Submit = useCallback(() => {
    if (!message?.trim()) return;

    sendMessage(message);
    setMessage("");
  }, [message, sendMessage]);

  return (
    <Container>
      <Input
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={Submit}
        returnKeyType="send"
        autoCapitalize="none"
        enablesReturnKeyAutomatically
        blurOnSubmit={false}
        placeholder="Digite uma mensagem."
      />
    </Container>
  );
}

export default Component;
