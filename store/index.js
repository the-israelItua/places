import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { placesReducer } from "./reducers";

const reducers = combineReducers({
  places: placesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
