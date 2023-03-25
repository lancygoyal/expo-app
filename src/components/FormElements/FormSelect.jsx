import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import ModalSelector from "react-native-modal-selector";
import t from "../../constants/theme";
import { get } from "lodash";
import { inputStyles, labelStyle, inputErrorStyle } from "../inputText/styles";
import { LOSS, PRIMARY } from "../../constants/colors";

const inputContainerStyles = [t.flexRow, t.itemsCenter, t.h12, t.roundedSm];
const error = [t.textSm, t.textError, t.selfStart];

const FormSelect = ({ placeholder, options, label, name, initOption }) => {
  const [currentLabel, setCurrentLabel] = useState(initOption?.label);
  const methods = useFormContext();
  const {
    control,
    setValue,
    formState: { errors },
  } = methods;

  const onSelect = (option) => {
    setValue(name, option.key);
    setCurrentLabel(option.label);
  };

  const Header = (
    <Text style={[t.fontSansMedium, t.text2xl, t.textCenter, t.pT2, t.pB4]}>
      {label}
    </Text>
  );

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={() => {
          return (
            <View style={[t.wFull]}>
              <>
                {label ? <Text style={[labelStyle]}>{label}</Text> : null}
                <ModalSelector
                  data={options}
                  onChange={onSelect}
                  optionContainerStyle={optionContainerStyle}
                  cancelContainerStyle={cancelContainerStyle}
                  touchableActiveOpacity={0.5}
                  optionTextStyle={optionTextStyle}
                  listType="FLATLIST"
                  cancelText="Close"
                  cancelTextStyle={cancelTextStyle}
                  initValue={initOption?.label}
                  header={Header}
                >
                  <View
                    style={[
                      inputContainerStyles,
                      errors[name] && inputErrorStyle,
                    ]}
                  >
                    <TextInput
                      placeholder={placeholder}
                      placeholderTextColor={"gray"}
                      editable={false}
                      style={inputStyles}
                      value={currentLabel}
                    />
                  </View>
                </ModalSelector>
              </>
            </View>
          );
        }}
      />
      {get(errors, name) ? (
        <Text style={error}>{get(errors, name)?.message}</Text>
      ) : null}
    </>
  );
};

const optionContainerStyle = { maxHeight: "80%", backgroundColor: "white" };
const cancelContainerStyle = { backgroundColor: "white", borderRadius: 8 };
const cancelTextStyle = { color: LOSS, padding: 10, fontWeight: "bold" };

const optionTextStyle = {
  color: PRIMARY,
  padding: 10,
};

export default FormSelect;
