import React, { useContext } from "react";
import SwipeBackArrow from "~assets/images/SwipeBackArrow.svg";
import { SlideOutRight, SlideInRight } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "styled-components";
import { Actions } from "~store/reducers";
import { getLastCardId } from "~store/selectors";
import { Container, GoBack } from "./styles";

const SwipeBackButton = () => {
  const dispatch = useDispatch();
  const lastCardId = useSelector(getLastCardId);
  const themeContext = useContext(ThemeContext);

  const canGoBack = Boolean(lastCardId);

  if (!canGoBack) return null;

  return (
    <Container exiting={SlideOutRight} entering={SlideInRight}>
      <GoBack
        disabled={!canGoBack}
        activeOpacity={0.9}
        onPress={() => dispatch(Actions.users.swipe.swipeBack())}
      >
        <SwipeBackArrow
          width={21}
          height={15}
          fill={themeContext.colors.primary}
        />
      </GoBack>
    </Container>
  );
};

export default SwipeBackButton;
