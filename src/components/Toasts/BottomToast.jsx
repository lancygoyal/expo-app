import {
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
  Image,
} from "react-native";
import t, { hp } from "../../constants/theme";
import React, { useEffect, useRef, useContext } from "react";
import { fonts } from "../../constants/fonts";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ToastContext } from "../../context/toast.context";

const PopOutTime = 2 * 100;
const AutoDuration = 300;
const BOTTOM_POSITION = Dimensions.get("screen").height;

const IconToast = ({ iconName, iconType }) => {
  switch (iconType) {
    case "ion":
    case "ionicons":
      return (
        <Ionicons
          name={iconName}
          style={[
            t.textWhite,
            { fontFamily: fonts.ExtraBold, fontWeight: "600" },
          ]}
          size={34}
        />
      );
    case "material":
    case "materialicons":
      return (
        <MaterialIcons
          name={iconName}
          style={[
            t.textWhite,
            { fontFamily: fonts.ExtraBold, fontWeight: "600" },
          ]}
          size={34}
        />
      );
    default:
      return (
        <Ionicons
          name={"checkmark-circle-outline"}
          style={[
            t.textWhite,
            { fontFamily: fonts.ExtraBold, fontWeight: "600" },
          ]}
          size={34}
        />
      );
  }
};

const CustomizedIcon = ({ src }) => {
  return <Image source={src} style={{ width: 34, height: 34 }} />;
};

export default function BottomToast() {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const bottomPosition = BOTTOM_POSITION;
  const popInAnimation = useRef(new Animated.Value(bottomPosition));
  const { toast, hide } = useContext(ToastContext);

  useEffect(() => {
    if (toast.visible) {
      Animated.timing(popInAnimation.current, {
        duration: AutoDuration,
        easing: Easing.ease,
        toValue: hp(bottomPosition * 0.85),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(popInAnimation.current, {
        duration: PopOutTime,
        easing: Easing.ease,
        toValue: bottomPosition,
        useNativeDriver: true,
      }).start();
    }
  }, [toast]);

  return (
    <Animated.View
      style={[
        t.selfCenter,
        {
          borderRadius: 4,
          marginHorizontal: 16,
          position: "absolute",
          top: 0,
          zIndex: 2,
          right: 0,
          left: 0,
          transform: [{ translateY: popInAnimation.current }],
        },
      ]}
    >
      <AnimatedTouchable
        onPress={hide}
        style={[
          t.bgGray900,
          t.opacity80,
          t.textWhite,
          t.rounded,
          t.flexRow,
          t.alignCenter,
          t.justifyStart,
          t.minW96,
          t.selfCenter,
          t.absolute,
          t.flexShrink1,
          t.pY5,
          t.pX8,
          {
            maxWidth: "100%",
          },
        ]}
      >
        {toast.iconSrc ? (
          <CustomizedIcon src={toast.iconSrc} />
        ) : (
          <IconToast iconName={toast.icon} iconType={toast.iconType} />
        )}
        <Text
          style={[
            t.textWhite,
            t.textBase,
            t.mX4,
            { fontFamily: fonts.Bold },
            t.selfCenter,
          ]}
          adjustsFontSizeToFit={true}
        >
          {toast.message}
        </Text>
      </AnimatedTouchable>
    </Animated.View>
  );
}
