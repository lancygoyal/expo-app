import React from "react";
import { Text } from "react-native";
import { parentTextStyle } from "../../constants/parentStyles";

const Heading = ({ children, style }: any) => {
  return <Text style={[parentTextStyle.heading, style]}>{children}</Text>;
};

export default Heading;
