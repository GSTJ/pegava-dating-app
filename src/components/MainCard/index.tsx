import React, { useCallback, useState } from "react";
import {
  CarouselContainer,
  PreviousImage,
  NextImage,
  UpperPart,
  Picture,
  Container,
} from "./styles";

import PersonalInfo from "./components/PersonalInfo";
import Distance from "./components/Distance";
import Pagination from "./components/Pagination";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FadeIn,
  FadeOut,
  FlipOutYLeft,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  ZoomOut,
} from "react-native-reanimated";
import { SceneName } from "~src/@types/SceneName";

const springConfig = { mass: 0.2 };

function VisitingCard({ user, shouldShowPersonalInfo = true, ...props }: any) {
  const { pictures } = user;
  const [currentImage, setCurrentImage] = useState(0);
  const navigation = useNavigation();

  const rotation = useSharedValue(0);

  const openUserProfile = useCallback(() => {
    navigation.navigate(SceneName.UserProfile, { user });
  }, []);

  const gotoPreviousImage = () => {
    if (currentImage !== 0) return setCurrentImage((index) => index - 1);

    rotation.value = withSequence(
      withSpring(-0.5, springConfig),
      withSpring(0, springConfig)
    );
  };

  const gotoNextImage = () => {
    if (currentImage + 1 < pictures.length) {
      return setCurrentImage((index) => index + 1);
    }
    rotation.value = withSequence(
      withSpring(0.5, springConfig),
      withSpring(0, springConfig)
    );
  };

  const transform = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 100 }, { rotateY: rotation.value + "deg" }],
    };
  });

  return (
    <Container {...props} style={[props.style, transform]}>
      <Picture
        entering={FadeIn}
        exiting={FadeOut}
        source={{ uri: pictures[currentImage] }}
      />
      <UpperPart>
        <Distance />
        <Pagination pages={pictures.length} currentPage={currentImage} />
        <CarouselContainer>
          <PreviousImage onPress={gotoPreviousImage} />
          <NextImage onPress={gotoNextImage} />
        </CarouselContainer>
      </UpperPart>
      {!!shouldShowPersonalInfo && (
        <TouchableOpacity activeOpacity={0.95} onPress={openUserProfile}>
          <PersonalInfo user={user} />
        </TouchableOpacity>
      )}
    </Container>
  );
}

export default VisitingCard;
