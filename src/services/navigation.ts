import { useNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "~src/@types/react-navigation.d";
import { SceneName } from "~src/@types/SceneName";

export const navigationRef = useNavigationContainerRef<RootStackParamList>();

const navigate = (
  routeName: SceneName,
  params: Parameters<typeof navigationRef.navigate>[any]["params"]
) => {
  if (!navigationRef.isReady()) return;

  navigationRef.navigate(routeName, params);
};

const reset: typeof navigationRef.reset = (payload) => {
  if (!navigationRef.isReady()) return;

  navigationRef.reset(payload);
};

const goBack = () => {
  if (!navigationRef.isReady()) return;

  navigationRef.goBack();
};

export default {
  navigate,
  reset,
  goBack,
};
