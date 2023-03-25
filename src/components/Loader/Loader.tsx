import React from "react";
import LottieView from "lottie-react-native";
import LOADING_ANIMATION from "../../assets/animations/json/loader.json";
import LOADING_ANIMATION_PRIMARY from "../../assets/animations/json/loader-primary.json";

type LoaderProps = {
  isPrimaryColor?: boolean;
  size?: number;
};

const Loader = ({ isPrimaryColor = true, size }: LoaderProps) => {
  return (
    <LottieView
      autoPlay
      loop
      source={isPrimaryColor ? LOADING_ANIMATION_PRIMARY : LOADING_ANIMATION}
      style={{ width: size ?? 200, height: size ?? 200 }}
    />
  );
};

export default Loader;
