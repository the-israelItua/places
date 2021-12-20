import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { selectPlace, loadPlaces } from "../store/actions";
import CustomHeaderButton from "../components/CustomHeaderButtons";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());
  }, []);

  const handleSelect = (item) => {
    dispatch(selectPlace(item));
    navigation.navigate("PlaceDetail");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="search"
            iconName="ios-add"
            onPress={() => navigation.navigate("NewPlace")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <PlaceItem item={item.item} onSelect={() => handleSelect(item.item)} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlacesListScreen;
