import React from "react";
import { Switch } from "react-native";
import { PRIMARY } from "../../constants/colors";

const CustomSwitch = (props) => {
  const { isEnabled, setIsEnabled, disabled = false, validate } = props;

  const handleToggleSwitch = () => {
    let isValid = true;

    if (typeof validate === "function") {
      isValid = validate();
    }

    if (isValid) {
      setIsEnabled((currentEnabled) => {
        return !currentEnabled;
      });
    }
  };

  return (
    <Switch
      trackColor={{ false: "#767577", true: PRIMARY }}
      thumbColor={"white"}
      ios_backgroundColor="white"
      disabled={disabled}
      onValueChange={handleToggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
