import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import * as Location from "expo-location";

const LocationPicker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const getLocationHandler = () => {
    (async () => {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }

      try {
        let selLocation = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
        setLocation({
          lat: selLocation.coords.latitude,
          lng: selLocation.coords.longitude,
        });
      } catch (error) {
        alert("Could not fetch location", "Try again", ["Ok"]);
      }

      setIsLoading(false);
    })();
  };

  return (
    <View style={styles.LocationPicker}>
      {!location ? (
        <View style={styles.mapPreview}>
          {isLoading ? (
            <ActivityIndicator color="tomato" />
          ) : (
            <Text>No Location choosen yet</Text>
          )}
        </View>
      ) : (
        <View style={styles.mapPreview}>
          <Image
            style={styles.image}
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyD1YhECp0WqpnfW_oO49GYcF342kGNav-A",
            }}
          />
        </View>
      )}

      <Button
        title="Select Location"
        color="tomato"
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default LocationPicker;
