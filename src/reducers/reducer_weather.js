import { FETCH_WEATHER, REMOVE_WEATHER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const data = action.payload.data ? action.payload.data : action.payload;
      return [...state, data];
    case REMOVE_WEATHER:
      const index = state.indexOf(action.city);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}
