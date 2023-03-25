import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import Loader from "./Loader";
import t from "../../constants/theme";
import { PRIMARY } from "../../constants/colors";

const LoadingScreen = ({ placeHolder = "Loading...", loading }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, [fadeAnim]);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => fadeIn());
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => fadeOut());
  };

  return (
    <ReactNativeModal
      isVisible={loading}
      animationIn="fadeIn"
      animationOut={"fadeOut"}
      coverScreen={true}
      hasBackdrop={false}
      style={{
        margin: 0,
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <View style={pageStyle}>
        <Loader isPrimaryColor={false} />
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={textStyle}>{placeHolder}</Text>
        </Animated.View>
      </View>
    </ReactNativeModal>
  );
};

const pageStyle = [
  t.wFull,
  t.hFull,
  t.flex1,
  t.justifyCenter,
  t.itemsCenter,
  { backgroundColor: PRIMARY },
];
const textStyle = [
  t.textWhite,
  t.textCenter,
  t.mT5,
  {
    fontSize: 20,
  },
];

export default LoadingScreen;
