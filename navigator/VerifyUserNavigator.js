import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { color } from "../utilities/Colors";
import Login from "../screens/Login/Login";

const Stack = createStackNavigator();
const VerifyUserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
};

export default VerifyUserNavigator;
