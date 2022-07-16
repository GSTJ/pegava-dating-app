import React, { useState, useContext } from "react";
import { BottomCard, Container, Description, TopCard } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button } from "~components";
import { Title, Highlight } from "./styles";
import Logo from "~images/Logo.svg";
import HeroText from "./components/HeroText";
import PhoneInput from "./components/PhoneInput";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";

export const useCustomBottomInset = () => {
  const insets = useSafeAreaInsets();
  return Math.max(20, insets.bottom + 5);
};

const Authentication = () => {
  const insets = useSafeAreaInsets();
  const bottomInset = useCustomBottomInset();
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  /**
   * For demo purposes, we'll just log the user in
   */
  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate(SceneName.OneTimeCode);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flexGrow: 1 }}
      >
        <StatusBar style={themeContext.dark ? "light" : "dark"} />
        <TopCard
          source={
            themeContext.dark
              ? require("~images/background-dark.png")
              : require("~images/background-light.png")
          }
          style={{ paddingTop: 60 + insets.top }}
        >
          <Logo
            style={{ marginBottom: 25 }}
            width={70}
            height={70}
            fill={themeContext.colors.text}
          />
          <HeroText />
        </TopCard>
        <BottomCard style={{ paddingBottom: bottomInset }}>
          <Title>
            Insira seu <Highlight>celular</Highlight>
          </Title>
          <Description>
            Vamos enviar um código de 4 digitos para autorizar sua conta. Se
            ainda não tem uma, vamos cria-la
          </Description>
          <PhoneInput
            enablesReturnKeyAutomatically
            returnKeyType="send"
            onSubmitEditing={handleLogin}
            blurOnSubmit={false}
            placeholder="(99) 99999-9999"
          />
          <Button loading={loading} onPress={handleLogin}>
            Continuar
          </Button>
        </BottomCard>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Authentication;
