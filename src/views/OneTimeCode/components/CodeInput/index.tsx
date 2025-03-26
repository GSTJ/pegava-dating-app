import React from "react";
import { FadeIn, FadeOut, ZoomIn, ZoomOut } from "react-native-reanimated";
import {
  Container,
  InputNumber,
  ICodeInputNumber,
  InputNumberContainer,
} from "./styles";
import { useTranslation } from 'react-i18next';

interface ICodeInput {
  value: string;
  length: number;
}

const CodeInputNumber: React.FC<ICodeInputNumber & { children: string }> = ({
  children,
  filled,
  active,
}) => {
  return (
    <InputNumberContainer
      key={children}
      entering={filled ? ZoomIn : FadeIn}
      exiting={filled ? ZoomOut : FadeOut}
      filled={filled}
      active={active}
    >
      <InputNumber filled={filled} active={active}>
        {children}
      </InputNumber>
    </InputNumberContainer>
  );
};

const CodeInput: React.FC<ICodeInput> = ({ value, length }) => {
  const { t } = useTranslation();
  const oneTimeCode = value.padEnd(length, "0");

  return (
    <Container aria-label={t('oneTimeCode.codeInput')}>
      {oneTimeCode.split("").map((character, index) => (
        <CodeInputNumber
          key={index}
          filled={index < value.length}
          active={index === value.length}
        >
          {character}
        </CodeInputNumber>
      ))}
    </Container>
  );
};

export default CodeInput;
