import React from "react";
import Text from "~components/Text";
import { Container } from "./styles";
import moment from "moment";

function Component({ message, nextMessage }: any) {
  if (!message || nextMessage === false) return <></>;

  const nextDay = nextMessage && new Date(nextMessage?.createdAt);
  const currentDay = new Date(message?.createdAt);

  if (nextMessage && moment(currentDay).isSame(nextDay, "day")) return <></>;

  return (
    <Container>
      <Text>{moment(currentDay).format("LL")}</Text>
    </Container>
  );
}

export default Component;
