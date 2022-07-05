import React, { useContext } from "react";
import { Container, Tabs, Tab, Indicator } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

const NAVBAR_HEIGHT = 68;
const screenWidth = Dimensions.get("window").width;

export const useNavbarStyle = () => {
  const { top } = useSafeAreaInsets();

  return {
    paddingTop: top,
    height: top + NAVBAR_HEIGHT,
  };
};

const INDICATOR_WIDTH = 15;

function Navbar({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  const style = useNavbarStyle();
  const themeContext = useContext(ThemeContext);

  // Translate the indicator to the middle of the tab
  const tabWidth = screenWidth / state.routes.length;
  const initialPosition = tabWidth / 2 - INDICATOR_WIDTH / 2;
  const translate = position.interpolate({
    inputRange: [0, state.routes.length],
    outputRange: [
      initialPosition,
      tabWidth * state.routes.length + initialPosition,
    ],
  });

  return (
    <Container style={[style]}>
      <Tabs>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const TabIcon = options.tabBarIcon as unknown as React.FC<
            Parameters<typeof options.tabBarIcon>[0]
          >;

          return (
            <Tab
              key={route.name}
              accessibilityState={{ selected: isFocused }}
              onPress={onPress}
            >
              <TabIcon
                focused={isFocused}
                color={options.tabBarInactiveTintColor}
              />
            </Tab>
          );
        })}
      </Tabs>
      <Indicator
        style={{
          width: INDICATOR_WIDTH,
          transform: [{ translateY: -5 }, { translateX: translate }],
        }}
      />
    </Container>
  );
}

export default Navbar;
