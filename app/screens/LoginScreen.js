import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import constants from "../utility/constants";
import { FontAwesome5 } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  const [visible, setVisibility] = React.useState(false);
  const icon = !visible ? "eye-slash" : "eye";
  var email = "";
  var password = "";
  return (
    <Screen style={styles.container}>
      <View style={styles.item}>
        <AppText style={styles.heading}>{constants.login_heading}</AppText>
        <AppText style={styles.subheading}>
          {constants.login_subheading}{" "}
        </AppText>
      </View>
      <View style={styles.item}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder={constants.placeholder_email}
            placeholderTextColor={colors.black}
            onChangeText={(text) => ({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder={constants.placeholder_password}
            placeholderTextColor={colors.black}
            onChangeText={(text) => ({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <AppText style={styles.forgot}>{constants.forgot_password}</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.platform}>
        <AppText>{constants.login_with}</AppText>
        <View style={styles.icons}>
          <TouchableOpacity>
            <FontAwesome5
              style={styles.icon}
              name="amazon"
              size={24}
              color={colors.orange}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              style={styles.icon}
              name="amazon"
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              style={styles.icon}
              name="amazon"
              size={24}
              color={colors.orange}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate(routes.Login)}
        style={styles.loginBtn}
      >
        <AppText style={styles.loginText}>{constants.login_btn_text}</AppText>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  item: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subheading: {
    fontSize: 14,
  },
  inputView: {
    width: 380,
    height: 50,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    height: 50,
    color: colors.black,
  },
  forgot: {
    color: colors.sky_blue,
    fontSize: 11,
  },
  platform: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginLeft: 70,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.sky_blue,
    margin: 10,
    padding: 10,
  },
  loginBtn: {
    width: 360,
    backgroundColor: colors.sky_blue,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
    marginBottom: 50,
    marginLeft: 10,
  },
  loginText: {
    color: colors.white,
  },
});

export default LoginScreen;
