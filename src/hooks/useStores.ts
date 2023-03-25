import { createContext, useContext } from "react";
import { store } from "../redux/store";

const storeContext = createContext(store);

export const useStores = () => {
  return useContext(storeContext);
};
