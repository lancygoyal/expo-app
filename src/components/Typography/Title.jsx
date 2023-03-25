import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../constants/fonts";
import t from "../../constants/theme";

const Title = ({ title, extraStyles }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, t.fontSansBold, extraStyles ? extraStyles : {}]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.ExtraBold,
    lineHeight: 30.36,
  },
});

export default Title;
