import React from "react";
import {
  Container,
  Content,
  Title,
  ContainedText,
} from "../../../../components/SafeComponent/styles";
import {
  useIsOffline,
  OfflineComponent,
  RequestErrorComponent,
} from "~components/SafeComponent";
import { useSelector } from "react-redux";
import { RootReducer } from "~store/reducers";
import { EmptyAnimation, LogoLoading } from "./styles";

export const EmptyComponent = () => {
  return (
    <Container>
      <Content>
        <EmptyAnimation />
        <Title>Oops, os matches acabaram</Title>
        <ContainedText>Volte mais tarde 😉</ContainedText>
      </Content>
    </Container>
  );
};

function SwipeRequestFeedback() {
  const offline = useIsOffline();
  const request = useSelector((state: RootReducer) => state.users.request);

  const refetch = () => null;

  if (request?.loading) {
    return (
      <Content>
        <LogoLoading />
      </Content>
    );
  }

  if (request && offline) return <OfflineComponent refetch={refetch} />;
  if (request?.error) return <RequestErrorComponent refetch={refetch} />;

  return <EmptyComponent />;
}

export default SwipeRequestFeedback;
