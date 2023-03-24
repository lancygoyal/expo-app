import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  inputContainerStyle,
  keyboardType = "default",
  ...props
}: any) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={[containerStyle, inputContainerStyle]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderBottomWidth: 1,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  containerStyle: {
    height: 60,
  },
});

export default Input;
