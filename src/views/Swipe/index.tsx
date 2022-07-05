import React from "react";
import { Container } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SwipeHandler, { swipeHandlerRef } from "./components/SwipeHandler";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Swipe } from "./components/SwipeHandler/hooks/useSwipeGesture";
import { useSelector } from "react-redux";
import { getCards, getCurrentCardId } from "~store/selectors";
import SwipeRequestFeedback from "~views/Swipe/components/SwipeRequestFeedback";
import { MatchActionBar } from "~components";

export const useCustomBottomInset = () => {
  const insets = useSafeAreaInsets();
  return Math.max(20, insets.bottom + 5);
};

const MatchActionBarWrapper = () => {
  const currentCard = useSelector(getCurrentCardId);

  if (!currentCard) return null;

  return (
    <MatchActionBar
      onNope={() => swipeHandlerRef.current.gotoDirection(Swipe.Dislike)}
      onYep={() => swipeHandlerRef.current.gotoDirection(Swipe.Like)}
      onMaybe={() => swipeHandlerRef.current.gotoDirection(Swipe.Maybe)}
      animated
    />
  );
};

const SwipeHandlerWrapper = (card) => {
  return <SwipeHandler key={card.id} card={card} />;
};

const Matches = () => {
  const bottomInset = useCustomBottomInset();
  const themeContext = useContext(ThemeContext);
  const cards = useSelector(getCards);

  return (
    <Container style={{ marginBottom: bottomInset }}>
      <StatusBar style={themeContext.dark ? "light" : "dark"} />
      <Container>
        <SwipeRequestFeedback />
        {cards?.map(SwipeHandlerWrapper).reverse()}
      </Container>
      <MatchActionBarWrapper />
    </Container>
  );
};

export default Matches;
