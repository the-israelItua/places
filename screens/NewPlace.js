import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addPlace } from "../store/actions";
import ImagePicker from "../components/ImageSelector";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleTitleChange = () => {
    const onSuccess = () => {
      setTitle("");
      navigation.navigate("Places");
    };
    dispatch(addPlace(title, image, onSuccess));
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
        />
        <ImagePicker onImagePicked={(val) => setImage(val)} />
        <LocationPicker />
        <Button title="Save Place" onPress={handleTitleChange} color="tomato" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
});

export default NewPlaceScreen;
