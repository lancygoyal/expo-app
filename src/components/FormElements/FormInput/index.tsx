import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, TextInput } from "react-native";
import t from "../../../config/theme";
import { get } from "lodash";

import type { FC } from "react";

type Props = {
  placeholder?: string;
  name: string;
  isPasswordInput: boolean;
  keyboardType:
    | "default"
    | "numeric"
    | "number-pad"
    | "phone-pad"
    | "email-address";
};

const FormInput: FC<Props> = (props) => {
  const { placeholder, name, isPasswordInput = false, ...rest } = props;
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={"gray"}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[inputStyles, errors[name] && inputErrorStyle]}
              secureTextEntry={isPasswordInput}
              {...rest}
            />
          );
        }}
      />
      {/* @ts-ignore */}
      {get(errors, name) ? (
        <Text style={error}>{get(errors, name)?.message}</Text>
      ) : null}
    </>
  );
};

export const inputStyles = [
  t.mT4,
  t.wFull,
  t.roundedSm,
  t.bgGray300,
  t.pX4,
  t.h12,
  t.mB1,
];
const inputErrorStyle = [t.borderError, t.border0_5];
const error = [t.textSm, t.textError, t.selfStart];

export default FormInput;
