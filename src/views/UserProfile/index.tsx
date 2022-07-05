import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "styled-components/native";
import {
  Container,
  Content,
  CARD_HEIGHT,
  BottomColumn,
  MatchActionBarGradient,
  ShareButton,
  ReportButton,
} from "./styles";
import MainCard from "~components/MainCard";
import { Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MatchActionBar from "~components/MatchActionBar";
import {
  Name,
  Age,
  Description,
} from "~components/MainCard/components/PersonalInfo/styles";
import SchoolIcon from "~images/SchoolIcon.svg";
import JobIcon from "~images/JobIcon.svg";
import { Swipe } from "~views/Swipe/components/SwipeHandler/hooks/useSwipeGesture";
import { useCustomBottomInset } from "~views/Swipe";
import { swipeHandlerRef } from "~views/Swipe/components/SwipeHandler";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCardId } from "~store/selectors";
import { Actions } from "~store/reducers";
import GoBack from "./components/GoBack";
import { Text } from "~components";

enum TeaserTypes {
  School = "school",
  Job = "job",
}

const Icons = {
  [TeaserTypes.School]: SchoolIcon,
  [TeaserTypes.Job]: JobIcon,
};

const useSwipeHandler = (user: any) => {
  const currentCardId = useSelector(getCurrentCardId);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (swipeType: Swipe) => {
    navigation.goBack();

    if (user.id === currentCardId && swipeHandlerRef.current) {
      return swipeHandlerRef.current.gotoDirection(swipeType);
    }

    dispatch(Actions.users.swipe.request({ id: user.id, swipeType }));
  };
};

const Teasers = ({ teasers }) => {
  const themeContext = useContext(ThemeContext);

  if (!teasers?.[0]) return null;

  return (
    <View style={{ marginVertical: 10 }}>
      {teasers.map((teaser) => {
        const TeaserIcon = Icons[teaser.type];
        return (
          <View
            key={`${teaser.type}-${teaser.string}`}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <TeaserIcon
              fill={themeContext.colors.text}
              width={22}
              height={22}
              style={{ marginRight: 5 }}
            />
            <Text fontSize="small">{teaser.string}</Text>
          </View>
        );
      })}
    </View>
  );
};

const UserProfile = ({ route }) => {
  const { user } = route.params;

  const swipeHandler = useSwipeHandler(user);

  const insets = useSafeAreaInsets();
  const bottomInset = useCustomBottomInset();
  const navigation = useNavigation();

  const themeContext = useContext(ThemeContext);

  const MatchActionBarHeight = bottomInset + 100;
  const firstName = user.name.split(" ")[0];

  return (
    <>
      <Container>
        {Platform.OS === "ios" ? (
          <StatusBar hidden hideTransitionAnimation="fade" />
        ) : (
          // Statusbar transition to hidden isn't smooth on android
          <StatusBar
            style={themeContext.dark ? "light" : "dark"}
            backgroundColor={themeContext.colors.background}
          />
        )}
        <MainCard
          shouldShowPersonalInfo={false}
          style={{
            paddingTop: insets.top,
            borderRadius: 0,
            height: CARD_HEIGHT,
          }}
          user={user}
        />
        <GoBack onPress={navigation.goBack} />
        <BottomColumn style={{ paddingBottom: MatchActionBarHeight }}>
          <Content>
            <Name numberOfLines={1}>
              {user.name}
              <Age>, {user.age}</Age>
            </Name>
            <Teasers teasers={user.teasers} />
            <Description style={{ marginTop: 10 }}>
              {user.description}
            </Description>
            <ShareButton>
              <Description
                fontWeight="bold"
                style={{
                  color: themeContext.colors.primary,
                  textAlign: "center",
                }}
              >
                Compartilhar perfil de {firstName}
              </Description>
            </ShareButton>
            <ReportButton>
              <Description
                fontWeight="bold"
                style={{
                  color: themeContext.colors.text,
                  textAlign: "center",
                }}
              >
                Denunciar {firstName}
              </Description>
            </ReportButton>
          </Content>
        </BottomColumn>
      </Container>
      <MatchActionBarGradient style={{ height: MatchActionBarHeight }} />
      <MatchActionBar
        style={{ bottom: bottomInset }}
        onNope={() => swipeHandler(Swipe.Dislike)}
        onYep={() => swipeHandler(Swipe.Like)}
        onMaybe={() => swipeHandler(Swipe.Maybe)}
      />
    </>
  );
};

export default UserProfile;
