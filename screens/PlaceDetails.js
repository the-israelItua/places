import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

const PlaceDetailsScreen = ({ navigation }) => {
  const selected = useSelector((state) => state.places.selectedPlace);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selected.title,
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Button title="This is the PlaceDetails screen view" />
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

export default PlaceDetailsScreen;
