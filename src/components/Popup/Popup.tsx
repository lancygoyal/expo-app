import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RNModal from "react-native-modal";
import { GRAY_300, PRIMARY, GRAY_400 } from "@/constants/colors";
import t from "@/constants/theme";
import { PopupActionVariant } from "./config";

import type { FC } from "react";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { PopupAction } from "./types";

type Props = {
  showModal: boolean;
  actions: PopupAction[] | undefined;
  title?: string;
  description?: string;
  subDescription?: string;
};

const Popup: FC<Props> = ({
  showModal,
  actions,
  title = "",
  description = "",
  subDescription = "",
}) => {
  return (
    <RNModal
      isVisible={showModal}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
    >
      <View style={[t.justifyCenter, t.itemsCenter]}>
        <View style={container}>
          <View style={[headerStyle]}>
            <Text style={headerTitleStyle}>{title}</Text>
            <Text style={headerSubTitleStyle}>{description}</Text>
            {subDescription ? (
              <Text style={subDescriptionStyle}>{subDescription}</Text>
            ) : null}
          </View>

          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: GRAY_400,
            }}
          >
            {Array.isArray(actions) &&
              actions.map((a, i) => (
                <TouchableOpacity
                  onPress={a.onPress}
                  style={[buttonItemStyle]}
                  key={a.content + i}
                >
                  <Text
                    style={[
                      t.fontSansBold,
                      a.variant === PopupActionVariant.PRIMARY
                        ? { color: PRIMARY }
                        : {},
                    ]}
                  >
                    {a.content}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const container: StyleProp<ViewStyle> = [
  t.bgWhite,
  { width: "80%", borderRadius: 12, overflow: "hidden" },
];
const headerStyle: StyleProp<ViewStyle> = [
  t.flexCol,
  t.itemsCenter,
  t.justifyAround,
  t.wFull,
  t.pX5,
  t.pY10,
];
const headerTitleStyle: StyleProp<TextStyle> = [
  t.fontSansBold,
  t.text2xl,
  t.textCenter,
  t.mB5,
  { width: "70%" },
];
const headerSubTitleStyle: StyleProp<TextStyle> = [
  t.textBase,
  t.textCenter,
  { width: "90%" },
];
const subDescriptionStyle: StyleProp<TextStyle> = [
  t.textBase,
  t.textCenter,
  t.mT5,
];
const buttonItemStyle: StyleProp<ViewStyle> = [
  t.itemsCenter,
  t.pY4,
  { borderTopWidth: 1, borderTopColor: GRAY_300 },
];

export default Popup;
