import React from "react";
import { View, StyleSheet } from "react-native";
import { INFO26 } from "../../constants/colors";

const ProgressBar = (props) => {
  const { percent, color } = props;
  return (
    <View style={styles.progressBar}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${percent}%`, backgroundColor: color ? color : INFO26 },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    backgroundColor: "#E9F6FF",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 12,
  },
});

export { ProgressBar };
