import { Dark } from "../../constants/theme";
import { APP_THEME } from "../constants";

const initialState = {
  theme: Dark,
};

function AppReducer(state = initialState, action: { type: any; payload: any }) {
  switch (action.type) {
    case APP_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
export default AppReducer;
