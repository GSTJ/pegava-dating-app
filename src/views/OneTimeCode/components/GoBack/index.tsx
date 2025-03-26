import React, { useContext } from "react";
import { TouchableOpacityProps } from "react-native";
import BackArrow from "~images/BackArrow.svg";
import { Container, BackText } from "./styles";
import { ThemeContext } from "styled-components/native";
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const GoBack: React.FC<TouchableOpacityProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <Container {...props} onPress={() => navigation.goBack()}>
      <BackArrow fill={themeContext.colors.text} />
      <BackText>{t('common.back')}</BackText>
    </Container>
  );
};

export default GoBack;
