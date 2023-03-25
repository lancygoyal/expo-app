import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import t from "../../constants/theme";

const FormCheckBoxGroup = ({ data, label, name }) => {
  const [checkboxes, setCheckboxes] = useState(data ?? []);
  const methods = useFormContext();
  const { setValue } = methods;

  const toggleCheckbox = (index) => {
    const checkboxData = [...checkboxes];
    checkboxData[index].checked = !checkboxData[index].checked;
    setCheckboxes(checkboxData);
    setValue(name, checkboxData);
  };

  return (
    <View style={[t.wFull, t.mB6]}>
      <Text style={[t.mB3]}>{label}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {Array.isArray(checkboxes) &&
            checkboxes.map((item, index) => {
              return (
                <CheckBox
                  style={[t.mB1]}
                  key={item?.key}
                  rightTextView={
                    <Text style={[t.mL3]}>{item?.label ?? ""}</Text>
                  }
                  isChecked={item?.checked ?? false}
                  onClick={() => {
                    toggleCheckbox(index);
                  }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FormCheckBoxGroup;
