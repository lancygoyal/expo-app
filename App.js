import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import RootNavigator from "./src/navigation/rootNavigator";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
