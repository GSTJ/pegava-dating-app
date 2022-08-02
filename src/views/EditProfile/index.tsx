import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ThemeContext } from "styled-components/native";
import {
  AddRemoveContainer,
  BottomPadding,
  Container,
  ContinueButton,
  numOfColumns,
  UserPictureContainer,
  UserPictureContent,
  userPictureHeight,
} from "./styles";
import Placeholder from "~images/placeholder.svg";
import AddRemove from "~images/AddRemove.svg";
import { DraggableGrid } from "react-native-draggable-grid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { pictures, sortByUrl, deleteUrlFromItem, addUrlToItem } from "./utils";
import { useHeaderHeight } from "@react-navigation/elements";
import { SceneName } from "~src/@types/SceneName";
import { useDidMountEffect } from "~services/utils";
import { Input, RadioButtons } from "~components";
import { useNavbarStyle } from "~components/Navbar";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AddUserPhoto = ({ picture, onDelete, onAdd }) => {
  const themeContext = useContext(ThemeContext);

  const hasPicture = !!picture.url;

  const style = useAnimatedStyle(() => {
    const rotation = withSpring(hasPicture ? `45deg` : `0deg`);
    return { transform: [{ rotateZ: rotation }] };
  });

  return (
    <UserPictureContainer>
      <UserPictureContent
        key={picture?.url}
        {...(picture?.url && { source: { uri: picture?.url } })}
      >
        {!hasPicture && <Placeholder />}
      </UserPictureContent>
      <AddRemoveContainer
        inverted={hasPicture}
        onPress={hasPicture ? onDelete : onAdd}
      >
        <Animated.View style={style}>
          <AddRemove
            fill={hasPicture ? themeContext.colors.primary : "white"}
          />
        </Animated.View>
      </AddRemoveContainer>
    </UserPictureContainer>
  );
};

export interface Positions {
  [id: string]: number;
}

const EditProfile = ({ route }) => {
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [pics, setPics] = useState(pictures);
  const [gender, setGender] = useState("");
  const [genderOfInterest, setGenderOfInterest] = useState("");

  // Swipe gestures need to be disabled when Draggable is active,
  // othewise the user will perform multiple gestures and the behavior
  // will be undesirable
  const [gesturesEnabled, setgesturesEnabled] = useState(true);

  const headerHeight = useHeaderHeight();
  const navbarHeight = useNavbarStyle().height;

  useDidMountEffect(() => {
    navigation.setOptions({ swipeEnabled: gesturesEnabled });
  }, [gesturesEnabled]);

  const continueButtonDisabled = Boolean(!genderOfInterest || !gender);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        keyboardVerticalOffset={
          route.name === SceneName.EditProfile ? headerHeight : navbarHeight
        }
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Container
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 15, paddingBottom: 30 }}
          scrollEnabled={gesturesEnabled}
        >
          <StatusBar style={themeContext.dark ? "light" : "dark"} />
          <DraggableGrid
            numColumns={numOfColumns}
            renderItem={(picture) => (
              <View>
                <AddUserPhoto
                  onDelete={() => {
                    const newPics = pics
                      .map(deleteUrlFromItem(picture))
                      .sort(sortByUrl);
                    setPics(newPics);
                  }}
                  onAdd={() => {
                    const newPics = pics
                      .map(addUrlToItem(picture))
                      .sort(sortByUrl);
                    setPics(newPics);
                  }}
                  picture={picture}
                />
              </View>
            )}
            data={pics}
            itemHeight={userPictureHeight}
            style={{ zIndex: 10 }}
            onDragStart={() => setgesturesEnabled(false)}
            onDragRelease={(newPics) => {
              setgesturesEnabled(true);
              setPics(newPics);
            }}
          />
          <Input
            title="Meu nome"
            placeholder="Como gostaria que te apresentássemos?"
            value={name}
            onChangeText={setName}
            maxLength={50}
          />
          <Input
            title="Sobre mim"
            placeholder="Conte alguma coisa legal sobre você"
            value={bio}
            onChangeText={setBio}
            maxLength={500}
            multiline
          />
          <RadioButtons
            title="Sexo"
            data={["Homem", "Mulher", "Outro"]}
            value={gender}
            onChange={setGender}
          />
          <RadioButtons
            title="Mostrar-me"
            data={["Homem", "Mulher", "Todos"]}
            value={genderOfInterest}
            onChange={setGenderOfInterest}
          />
        </Container>
        <ContinueButton
          disabled={continueButtonDisabled}
          onPress={() =>
            navigation.navigate(SceneName.Main, { screen: SceneName.Swipe })
          }
        >
          Salvar perfil
        </ContinueButton>
      </KeyboardAvoidingView>
      <BottomPadding
        disabled={continueButtonDisabled}
        style={{ height: insets.bottom }}
      />
    </>
  );
};

export default EditProfile;
