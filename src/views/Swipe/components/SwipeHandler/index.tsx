import React, { useImperativeHandle } from "react";
import { StyleSheet } from "react-native";
import { ACTION_OFFSET } from "~constants";
import FeedbackCard from "~components/FeedbackCard";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withSpring,
  runOnUI,
} from "react-native-reanimated";
import { Swipe, useSwipeGesture } from "./hooks/useSwipeGesture";
import { useDidMountEffect } from "~services/utils";
import { getCurrentCardId } from "~store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "~store/reducers";

const ROTATION_DEG = 8;

interface ISwipeHandler {
  card: any;
}

export interface ISwipeHandlerRef {
  gotoDirection: (swipeType: Swipe) => void;
}

export const swipeHandlerRef = React.createRef<ISwipeHandlerRef>();

const SwipeHandler: React.FC<ISwipeHandler> = ({ card }) => {
  const dispatch = useDispatch();
  const currentCardId = useSelector(getCurrentCardId);

  const isFirstCard = card.id === currentCardId;

  const onSwipeComplete = (swipeType: Swipe) => {
    dispatch(Actions.users.swipe.request({ id: card.id, swipeType }));
  };

  const [translation, gestureHandler, gotoDirection, enabled] = useSwipeGesture(
    { onSwipeComplete }
  );

  const automaticSwipe = (swipeType: Swipe) => {
    "worklet";
    gotoDirection(swipeType, { duration: 500 });
  };

  useImperativeHandle(isFirstCard ? swipeHandlerRef : null, () => ({
    gotoDirection: runOnUI(automaticSwipe),
  }));

  useDidMountEffect(() => {
    if (isFirstCard) {
      translation.x.value = withSpring(0, { stiffness: 50 });
      translation.y.value = withSpring(0, { stiffness: 50 });
    }
  }, [isFirstCard]);

  const transform = useAnimatedStyle(() => {
    const deg = interpolate(
      translation.x.value * -1,
      [-ACTION_OFFSET, 0, ACTION_OFFSET],
      [ROTATION_DEG, 0, -ROTATION_DEG]
    );

    return {
      transform: [
        { translateX: translation.x.value },
        { translateY: translation.y.value },
        { rotate: deg + "deg" },
      ],
      ...(isFirstCard && { zIndex: 2 }),
    };
  });

  return (
    <PanGestureHandler
      enabled={!!(isFirstCard && enabled)}
      onGestureEvent={gestureHandler}
    >
      <Animated.View style={[StyleSheet.absoluteFill, transform]}>
        <FeedbackCard
          isFirst={isFirstCard}
          user={card}
          translation={translation}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeHandler;
