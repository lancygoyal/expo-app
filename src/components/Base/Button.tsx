import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const Button = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#512DA8",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "rgb(224,110,107)",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
