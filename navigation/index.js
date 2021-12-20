import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/MapScreen";
import NewPlace from "../screens/NewPlace";
import PlaceDetails from "../screens/PlaceDetails";
import PlacesList from "../screens/PlacesList";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      headerMode="float"
      mode="modal"
      screenOptions={{
        headerTintColor: "tomato",
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="Places" component={PlacesList} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetails} />
      <Stack.Screen
        name="NewPlace"
        component={NewPlace}
        options={{
          headerTitle: "Add a new place",
          headerBackTitle: "",
        }}
      />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
