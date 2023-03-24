import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Container = ({ children, style }: any) => {
  return (
    <SafeAreaView style={[styles.mainContainer, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});

export default Container;
