import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import { GRAY_400 } from "../../constants/colors";
import t from "../../constants/theme";
import CheckBoxIcon from "../../assets/images/icons/checkbox.svg";

const error = [t.textSm, t.textError, t.selfStart];

const FormCheckbox = ({ data, name, child, onChange, isChecked = false }) => {
  const [checkbox, setCheckBox] = useState(data);
  const [checked, setChecked] = useState(false);
  const methods = useFormContext();
  const {
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const toggleCheckbox = () => {
    const checkboxData = { ...checkbox, checked: !checkbox?.checked ?? true };
    setCheckBox(checkboxData);
    setChecked(!checked);
    onChange ? onChange(name, !checked) : setValue(name, checkboxData);
  };

  const TextLabel = (
    <View style={[t.mL3, t.flexShrink1]}>
      {typeof data.label === "string" ? (
        <Text style={[{ fontSize: 15, textAlign: "left" }]}>
          {data?.label ?? ""}
        </Text>
      ) : (
        data?.label
      )}
    </View>
  );

  return (
    <View style={[t.wFull, t.mB6]}>
      <CheckBox
        key={checkbox?.key}
        rightTextView={TextLabel}
        isChecked={checked}
        onClick={toggleCheckbox}
        checkedImage={
          <View
            style={{
              height: "100%",
            }}
          >
            <CheckBoxIcon />
          </View>
        }
        unCheckedImage={
          <View
            style={{
              height: "100%",
            }}
          >
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 50,
                backgroundColor: GRAY_400,
              }}
            />
          </View>
        }
      />
      {checkbox?.checked && child}
      {errors[name] ? <Text style={error}>{errors[name].message}</Text> : null}
    </View>
  );
};

export default FormCheckbox;
