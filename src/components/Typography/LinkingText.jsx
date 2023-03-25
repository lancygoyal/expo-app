import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text } from "react-native";
import { PRIMARY } from "../../constants/colors";

const LinkingText = ({ children, url }) => {
  const openUrl = () => {
    WebBrowser.openBrowserAsync(url ?? "https://www.ztock.app/");
  };

  return (
    <Text
      onPress={openUrl}
      style={[
        {
          color: PRIMARY,
          textDecorationLine: "underline",
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default LinkingText;
