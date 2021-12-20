import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
impo
const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <Button title="This is the Map screen screen view" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
