import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "~components/Text";

export const Container = styled(SafeAreaView).attrs({
  edges: ["left", "right"],
})`
  flex: 1;
`;

const getTopCardProps = (props) => ({
  imageStyle: {
    opacity: 0.2,
    backgroundColor: props.theme.colors.background,
    transform: [{ scale: 1.05 }],
  },
});

export const TopCard = styled.ImageBackground.attrs(getTopCardProps)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const BottomCard = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding: 22px;
  border-top-color: ${(props) => props.theme.colors.border};
  border-top-width: 1px;
`;

export const Title = styled(Text).attrs({
  fontSize: "h3",
  fontWeight: "bold",
})`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 5px;
`;

export const Highlight = styled(Title)`
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text}; ;
`;
