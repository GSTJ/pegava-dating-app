import React, { useCallback, useState } from "react";
import {
  Container,
  TextInput,
  CountryCodeContainer,
  CountryCodeText,
  Separator,
} from "./styles";
import { MaskService } from "react-native-masked-text";
import { TextInputProps } from "react-native";
import { useTranslation } from 'react-i18next';

const PhoneInput: React.FC<TextInputProps> = (props) => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhone = useCallback((tel: string) => {
    const formattedNumber = MaskService.toMask("cel-phone", tel || "");
    setPhoneNumber(formattedNumber);
  }, []);

  return (
    <Container>
      <CountryCodeContainer>
        <CountryCodeText>🇧🇷 +55</CountryCodeText>
      </CountryCodeContainer>
      <Separator />
      <TextInput
        keyboardType="number-pad"
        textContentType="telephoneNumber"
        value={phoneNumber}
        onChangeText={formatPhone}
        placeholder={props.placeholder || t('auth.placeholder')}
        {...(props as any)}
      />
    </Container>
  );
};

export default PhoneInput;
