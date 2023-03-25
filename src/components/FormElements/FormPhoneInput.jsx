import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GRAY_400 } from "../../constants/colors";
import t, { wp } from "../../constants/theme";
import {
  errorStyle,
  focusInputStyle,
  inputErrorStyle,
  inputStyles,
  labelStyle,
} from "../inputText/styles";

const containerStyles = [t.wFull, t.roundedSm, t.h12];
const countryPickerButtonStyle = [
  t.roundedSm,
  t.mR4,
  {
    borderWidth: 1,
    borderColor: GRAY_400,
    paddingHorizontal: 10,
    width: wp(71),
    justifyContent: "center",
    alignItems: "center",
  },
];

const FormPhoneInput = (props) => {
  const { label, name, placeholder, isAutoFocus = false } = props;
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <PhoneInput
              defaultCode="PH"
              autoFocus={isAutoFocus}
              layout="second"
              containerStyle={containerStyles}
              textInputProps={{
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                placeholder: placeholder,
                placeholderTextColor: GRAY_400,
              }}
              textContainerStyle={[
                isFocused
                  ? focusInputStyle
                  : [...inputStyles, t.pY2, t.bgTransparent],
                errors[name] && inputErrorStyle,
              ]}
              onChangeFormattedText={(text) => onChange(text)}
              onChangeCountry={(country) => onChange(country)}
              value={value}
              countryPickerButtonStyle={countryPickerButtonStyle}
            />
          );
        }}
      />

      {errors[name] ? (
        <Text style={errorStyle}>{errors[name].message}</Text>
      ) : null}
    </>
  );
};

export default FormPhoneInput;
