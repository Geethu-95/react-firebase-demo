import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";

function configureStore(state = { successSnackbarOpen: false }) {
  return createStore(uiReducer,state);
}
export default configureStore;