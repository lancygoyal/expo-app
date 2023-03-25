import { useContext } from "react";
import { WarningContext } from "../context/warning.context";

const useWarning = () => {
  return useContext(WarningContext);
};

export default useWarning;
