import { ADD_PLACE, SELECT_PLACE, FETCH_PLACES } from "./types";
import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

export const addPlace = (title, image, onSuccess) => async (dispatch) => {
  const fileName = image.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      from: image,
      to: newPath,
    });

    const result = await insertPlace(
      title,
      newPath,
      "Dummy address",
      15.6,
      12.3
    );

    dispatch({
      type: ADD_PLACE,
      payload: {
        id: result.insertId,
        title,
        image,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

  return onSuccess();
};

export const loadPlaces = () => async (dispatch) => {
  try {
    const result = await fetchPlaces();
    dispatch({
      type: FETCH_PLACES,
      payload: result.rows._array,
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectPlace = (place) => (dispatch) => {
  dispatch({
    type: SELECT_PLACE,
    payload: place,
  });
};
