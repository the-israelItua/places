import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PlaceItem = ({ item, onSelect }) => {
  console.log(item);
  return (
    <TouchableOpacity onPress={onSelect} style={styles.item}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "lightgrey",
    borderColor: "tomato",
    borderWidth: 1,
  },
});

export default PlaceItem;
