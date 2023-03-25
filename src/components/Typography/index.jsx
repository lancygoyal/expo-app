import React from "react";
import { Platform } from "react-native";
import { Text, StyleSheet, TextInput } from "react-native";
import { fonts } from "../../constants/fonts";

export const typography = () => {
  const oldTextRender = Text.render;
  const oldTextInputRender = TextInput.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    const newChildren = React.Children.map(origin.props.children, (child) => {
      if (child?.type === "RCTText") {
        return React.cloneElement(child, {
          style: [styles.defaultText, child.props.style],
        });
      }
      return child;
    });
    return React.cloneElement(
      origin,
      {
        style: [styles.defaultText, origin.props.style],
      },
      newChildren
    );
  };
  TextInput.render = function (...args) {
    const origin = oldTextInputRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Platform.select({
      ios: fonts.Regular,
      android: fonts.Medium,
    }),
  },
});
