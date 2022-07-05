import type { User } from "~src/@types/User";
import type { SceneName } from "~src/@types/SceneName";

export type RootStackParamList = {
  [SceneName.Swipe]: undefined;
  [SceneName.Messages]: undefined;
  [SceneName.Profile]: undefined;
  [SceneName.Chat]: { user: User };
  [SceneName.Authentication]: undefined;
  [SceneName.OneTimeCode]: undefined;
  [SceneName.UserProfile]: { user: User };
  [SceneName.Main]: NavigatorScreenParams<undefined>;
  [SceneName.EditProfile]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
