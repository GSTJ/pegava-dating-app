import React, { useContext, useState } from "react";
import {
  Container,
  Content,
  Description,
  ResendCode,
  Timer,
  TopColumn,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import Text from "~components/Text";
import { Underline } from "./../Authentication/components/HeroText";
import { useNavigation } from "@react-navigation/native";
import { useDidMountEffect } from "~services/utils";
import CustomKeyboard from "./components/CustomKeyboard";
import useTimer from "./hooks/useTimer";
import GoBack from "./components/GoBack";
import CodeInput from "./components/CodeInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SceneName } from "~src/@types/SceneName";
import moment from "moment";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

const CODE_LENGTH = 4;
const INITIAL_TIMEOUT_IN_SECONDS = 50;
const RESEND_TIMEOUT_IN_SECONDS = 50;

const OneTimeCode = () => {
  const [timer, setTimer] = useTimer(INITIAL_TIMEOUT_IN_SECONDS);
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const [keyboardInput, setKeyboardInput] = useState("");
  const { t } = useTranslation();

  const formattedTime = moment().minutes(0).seconds(timer).format("mm:ss");

  const navigation = useNavigation();

  const insetTop = Math.max(15 + insets.top, 50);

  useDidMountEffect(() => {
    if (keyboardInput.length === CODE_LENGTH) {
      navigation.reset({
        index: 0,
        routes: [{ name: SceneName.EditProfile }],
      });
    }
  }, [keyboardInput]);

  const handleInsert = (num: string) => {
    if (keyboardInput.length >= CODE_LENGTH) return;
    setKeyboardInput(keyboardInput + num);
  };

  const handleDelete = () => {
    setKeyboardInput(keyboardInput.slice(0, -1));
  };

  return (
    <Container>
      <StatusBar style={themeContext.dark ? "light" : "dark"} />
      <GoBack />
      <Content>
        <TopColumn>
          <Text fontSize="h2" fontWeight="bold">
            {t('oneTimeCode.title')}
          </Text>
          <Description>{t('oneTimeCode.description')}</Description>
        </TopColumn>
        <CodeInput value={keyboardInput} length={CODE_LENGTH} />
        {!!timer && (
          <Timer>
            {t('oneTimeCode.timer', { seconds: timer })}
          </Timer>
        )}
      </Content>
      <CustomKeyboard
        onInsert={handleInsert}
        onDelete={handleDelete}
      />
      <ResendCode
        style={{ bottom: insets.bottom + 15 }}
        disabled={!!timer}
        onPress={() => {
          setTimer(RESEND_TIMEOUT_IN_SECONDS);
          setKeyboardInput("");
        }}
      >
        <Underline>
          <Text fontSize="large" fontWeight="bold">
            {t('oneTimeCode.resend')}
          </Text>
        </Underline>
      </ResendCode>
    </Container>
  );
};

export default OneTimeCode;
