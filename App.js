import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import MyStack from "./navigation";
import store from "./store";
import { init } from "./helpers/db";

export default function App() {
  init()
    .then(() => {
      console.log("innitialized db");
    })
    .catch((err) => {
      console.log("init failed");
    });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
