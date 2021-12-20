import { ADD_PLACE, SELECT_PLACE, FETCH_PLACES } from "./types";

const initialState = {
  places: [],
  selectedPlace: [],
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return { ...state, places: [...state.places, action.payload] };
    case FETCH_PLACES:
      return { ...state, places: action.payload };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
};
