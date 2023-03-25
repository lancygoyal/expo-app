import React, { useRef, useEffect, useContext } from "react";
import { Animated, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import Loader from "./Loader";
import t from "../../config/theme";
import { PRIMARY } from "../../constants/colors";
import { LoadingContext } from "../../context/loader.context";

const LoadingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { loading, hideLoading: hide } = useContext(LoadingContext);

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
      isVisible={loading.visible}
      animationIn="fadeIn"
      animationOut={"fadeOut"}
      coverScreen={true}
      hasBackdrop={false}
      animationInTiming={0}
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
          <Text style={textStyle}>{loading.title ?? "Loading..."}</Text>
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
