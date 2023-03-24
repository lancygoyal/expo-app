import React from "react";
import { Text } from "react-native";
import { parentTextStyle } from "../../constants/parentStyles";

const SubHeading = ({ children, style }: any) => {
  return <Text style={[parentTextStyle.subHeading, style]}>{children}</Text>;
};

export default SubHeading;
