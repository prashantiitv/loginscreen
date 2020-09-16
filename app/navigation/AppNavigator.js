import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return <Stack.Navigator screenOptions={{ headerShown: false }} />;
};

export default AppNavigator;
