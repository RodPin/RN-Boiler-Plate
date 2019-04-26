import root from "../reducers/Reducer";
import authReducer from "../reducers/authReducer";
export const rootStore = {
  root: root,
  auth: authReducer
};
