import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GRAY_400, GRAY_800, PRIMARY } from "../../constants/colors";
import t, { hp } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const FormRadioMultiSelect = ({
  data,
  values,
  onSelect,
  showItemSeparatorComponent = true,
}) => {
  const renderItem = (item) => {
    const handleOnPress = () => {
      onSelect(item);
    };

    return (
      <TouchableOpacity onPress={handleOnPress}>
        <View style={itemContainerStyle}>
          <View style={[t.flex1, t.justifyCenter]}>
            <Text>{item.label}</Text>
            {item?.subTitle ? (
              <Text style={subTitleTextStyle}>{item?.subTitle}</Text>
            ) : null}
          </View>

          <View style={iconContainerStyle(values, item)}>
            {values.find((value) => value === item) ? (
              <AntDesign name="checkcircle" size={26} color={PRIMARY} />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = <View style={separatorStyle} />;

  return data.map((item, index) => {
    return (
      <View key={index}>
        {renderItem(item)}
        {showItemSeparatorComponent && renderSeparator}
      </View>
    );
  });
};

const itemContainerStyle = [
  {
    height: hp(70),
  },
  t.itemsCenter,
  t.flexRow,
];

const iconContainerStyle = (values, item) => ({
  borderRadius: 50,
  width: 26,
  height: 26,
  backgroundColor: values.find((value) => value === item)
    ? "transparent"
    : GRAY_400,
});

const subTitleTextStyle = {
  color: GRAY_800,
};

const separatorStyle = {
  height: 1,
  backgroundColor: GRAY_400,
};

export default FormRadioMultiSelect;
