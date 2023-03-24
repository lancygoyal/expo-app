import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Container from "../components/Base/Container";
import Button from "../components/Base/Button";
import Input from "../components/Base/Input";
import colors from "../constants/colors";

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <Input
          inputContainerStyle={{ marginTop: "10%" }}
          label={"Email"}
          keyboardType="email-address"
        />
        <Input
          secureTextEntry={true}
          inputContainerStyle={{ marginTop: "10%" }}
          label={"Passphrase"}
        />
      </Container>
      <View
        style={{ flex: 1, justifyContent: "flex-end", marginBottom: "10%" }}
      >
        <Button
          titleColor={colors.WHITE}
          buttonColor="rgb(224,110,107)"
          title="continue"
          buttonStyle={{ width: "100%", alignSelf: "center" }}
          textStyle={{ fontSize: 20 }}
          onPress={() => console.log("custom button pressed")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, marginTop: "30%" },
  loginText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Login;
