import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import t from "../../constants/theme";
import SubmitButton from "../button/SubmitButton";
import { inputStyles } from "../inputText";

const { width } = Dimensions.get("window");

const FormDateTimePicker = ({
  onChange,
  visible,
  mode = "date",
  placeholder,
}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const onChangeDate = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      onChange && onChange(selectedDate);
    }
    if (Platform.OS === "android") {
      toggleDatePicker();
    }
  };

  const toggleDatePicker = () => {
    setShow(!show);
  };

  if (Platform.OS === "android") {
    return (
      <>
        <View
          style={[inputStyles, { width: "100%", justifyContent: "center" }]}
        >
          <Text onPress={() => setShow(true)}>
            {placeholder} {date?.toLocaleDateString("ph-PH")}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChangeDate}
          />
        )}
      </>
    );
  }

  return (
    <>
      <View style={[inputStyles, { width: "100%", justifyContent: "center" }]}>
        <Text onPress={() => setShow(true)}>
          {placeholder} {date?.toLocaleDateString("ph-PH")}
        </Text>
      </View>
      {show && (
        <Pressable
          style={[t.absolute, t.z50, styles.container]}
          onPress={toggleDatePicker}
        >
          <View style={[t.bgWhite, t.roundedTLg]}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChangeDate}
              display="spinner"
              themeVariant="light"
            />
            <View style={[t.w2_3, t.selfCenter]}>
              <SubmitButton text={"Done"} onPress={toggleDatePicker} />
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default FormDateTimePicker;
