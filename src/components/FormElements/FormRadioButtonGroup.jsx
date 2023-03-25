import React, { useState } from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import t from "../../constants/theme";
import { labelStyle } from "../inputText/styles";

const RadioButtonGroup = ({
  data,
  label,
  defaultValue,
  onChange,
  children,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(value);
    }
  }, [value]);

  return (
    <View style={[t.wFull, t.mB6]}>
      {label ? <Text style={labelStyle}>{label}</Text> : null}
      <RadioForm formHorizontal={true} animation={true} style={t.wFull}>
        {/* To create radio buttons, loop through your array of options */}
        {data?.map((obj, i) => (
          <RadioButton labelHorizontal key={i} wrapStyle={[t.mR10]}>
            {/*  You can set RadioButtonLabel before RadioButtonInput */}
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={value === obj.value}
              onPress={setValue}
              borderWidth={1}
              buttonInnerColor={"#000"}
              buttonOuterColor={"#000"}
              buttonSize={12}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={setValue}
              labelWrapStyle={t.mR5}
            />
          </RadioButton>
        ))}
      </RadioForm>
      {children && value ? children : null}
    </View>
  );
};

export default RadioButtonGroup;
