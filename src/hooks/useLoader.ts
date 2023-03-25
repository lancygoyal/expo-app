import { useContext } from "react";
import { LoadingContext } from "../context/loader.context";

const useAppLoading = () => {
  return useContext(LoadingContext);
};

export default useAppLoading;
