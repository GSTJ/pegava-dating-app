import React, { useContext } from "react";
import { TouchableOpacityProps } from "react-native";
import BackArrow from "~images/BackArrow.svg";
import { Container } from "./styles";
import { ThemeContext } from "styled-components/native";

const GoBack: React.FC<TouchableOpacityProps> = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container {...props}>
      <BackArrow fill={themeContext.colors.text} />
    </Container>
  );
};

export default GoBack;
