import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;

export const MessageList = styled.View`
  padding: 25px;
`;

export const BottomPadding = styled.View`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
`;

export const Messages = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
})``;
