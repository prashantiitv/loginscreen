import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { HeaderBackButton } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Back"
      component={LoginScreen}
      options={{
        headerShown: true,
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => {
              // Do something
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
