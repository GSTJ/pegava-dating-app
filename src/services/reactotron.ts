import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reactotron = Reactotron.configure({
  name: "Pegava",
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin({}));

if (__DEV__) {
  reactotron.connect();
  reactotron.clear();
}

export default reactotron;
