import styled from "styled-components/native";
import Text from "~components/Text";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    paddingBottom: 100,
  },
})`
  flex-grow: 1;
`;

export const ResendCode = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 50,
    left: 50,
    bottom: 25,
    right: 50,
  },
})`
  align-content: center;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: 10px;
  padding: 10px;
`;

export const TopColumn = styled.View`
  margin-top: 50px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  max-width: 350px;
`;

export const Timer = styled(Text).attrs({
  fontSize: "h1",
  fontWeight: "bold",
})`
  color: ${(props) => props.theme.colors.text};
`;

export const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  max-width: 245px;
  text-align: center;
`;
