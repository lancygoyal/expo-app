import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TABBAR_INDICATOR } from "../../constants/colors";
import t from "../../constants/theme";

const TextExpand = (props) => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const { description, contentStyle, numberOfLines } = props;

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= numberOfLines);
  }, []);

  return (
    <View style={[t.mB6]}>
      <View style={[styles.mainContainer, contentStyle]}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : numberOfLines}
          style={[t.textBase, styles.descriptionText, t.fontSansMedium]}
        >
          {description}
        </Text>
        {lengthMore ? (
          <Text
            onPress={toggleNumberOfLines}
            style={[
              t.textBase,
              styles.descriptionText,
              styles.toggleNumberOfLines,
            ]}
          >
            {textShown ? "Read less..." : "Learn more"}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionText: {
    lineHeight: 15.6,
    fontSize: 14,
    letterSpacing: 0.05,
  },
  mainContainer: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 17 },
  },
  toggleNumberOfLines: {
    color: TABBAR_INDICATOR,
    marginTop: 5,
  },
});

export default TextExpand;
