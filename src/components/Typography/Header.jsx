import React from "react";
import { StyleSheet, Text } from "react-native";
import { fonts } from "../../constants/fonts";

const HeaderText = ({ children }) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: fonts.Bold,
  },
});

export default HeaderText;
