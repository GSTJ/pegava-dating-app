import { useState } from "react";
import {
  GestureEventPayload,
  PanGestureHandlerEventPayload,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { CARD, ACTION_OFFSET, ACTION_VELOCITY } from "~constants";

type AnimatedGHContext = {
  startX: number;
  startY: number;
};

export type Translation = {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
};

type ICoordinates = {
  x?: number;
  y?: number;
};

export enum Swipe {
  Dislike = "Dislike",
  Like = "Like",
  Maybe = "Maybe",
}

export const getDirectionCoordinates = (swipe: Swipe) => {
  "worklet";

  switch (swipe) {
    case Swipe.Dislike:
      return { x: -CARD.CARD_OUT_WIDTH };

    case Swipe.Like:
      return { x: CARD.CARD_OUT_WIDTH };

    case Swipe.Maybe:
      return { y: -CARD.CARD_HEIGHT };
    default:
      return {};
  }
};

const getSwipeType = (
  event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>
): Swipe => {
  "worklet";

  const horizontalTrigger =
    Math.abs(event.translationX) > ACTION_OFFSET ||
    Math.abs(event.velocityX) > ACTION_VELOCITY;

  if (horizontalTrigger && event.translationX < 0) return Swipe.Dislike;
  if (horizontalTrigger && event.translationX > 0) return Swipe.Like;

  const verticalTrigger =
    Math.abs(event.translationY) > ACTION_OFFSET ||
    Math.abs(event.velocityY) > ACTION_VELOCITY;

  if (verticalTrigger && event.translationY < 0) return Swipe.Maybe;
};

const gotoCoordinate = (
  translation: Translation,
  coordinates: ICoordinates,
  callback: (data?: any) => any,
  animationConfig = { duration: 250 }
) => {
  "worklet";

  const willMoveX = coordinates?.x || coordinates?.x === 0;
  const willMoveY = coordinates?.y || coordinates?.y === 0;

  // This avoids calling the callback multiple times, but could still cause issues if the duration not equal on both
  const callbackY = willMoveX ? null : callback;

  // TODO: Research how to animate both at the same node. Would avoid the callback issue
  // TODO: Maybe useAnimatedXY?
  if (willMoveX) {
    translation.x.value = withTiming(coordinates.x, animationConfig, callback);
  }
  if (willMoveY) {
    translation.y.value = withTiming(coordinates.y, animationConfig, callbackY);
  }
};

interface ISwipeGesture {
  onSwipeComplete: (data?: any) => any;
}

export const useSwipeGesture = ({
  onSwipeComplete,
}: ISwipeGesture): [
  Translation,
  ReturnType<typeof useAnimatedGestureHandler>,
  any,
  boolean
] => {
  const [enabled, setEnabled] = useState(true);

  const translation: Translation = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };

  // We want to guarantee the animation has finished before enabling
  // the card to be swiped again. Otherwise the user will be able
  // to 'catch' the card on the middle of the animation.
  const safelyEnableWithDelay = (duration: number) => {
    setTimeout(() => setEnabled(true), duration);
  };

  const gotoDirection = (
    swipeDirection: Swipe,
    animationConfig = { duration: 250 }
  ) => {
    "worklet";

    // Avoid concurrency, should gotoDirection only once
    if (!enabled) return;
    runOnJS(setEnabled)(false);

    const swipeCoordinates = getDirectionCoordinates(swipeDirection);
    return gotoCoordinate(
      translation,
      swipeCoordinates,
      () => {
        runOnJS(onSwipeComplete)(swipeDirection);
        runOnJS(safelyEnableWithDelay)(animationConfig.duration);
      },
      animationConfig
    );
  };

  const gestureHander = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = translation.x.value;
      ctx.startY = translation.y.value;
    },
    onActive: (event, ctx) => {
      translation.x.value = ctx.startX + event.translationX;
      translation.y.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      const swipeType = getSwipeType(event);

      if (swipeType) {
        return gotoDirection(swipeType);
      }

      translation.x.value = withSpring(0, { stiffness: 50 });
      translation.y.value = withSpring(0, { stiffness: 50 });
    },
  });
  return [translation, gestureHander, gotoDirection, enabled];
};
