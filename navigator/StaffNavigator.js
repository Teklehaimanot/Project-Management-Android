import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { color } from "../utilities/Colors";

import StaffTaskList from "../screens/staff/StaffTaskList";

const Stack = createStackNavigator();
const StaffNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Staff"
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
        name="Staff"
        component={StaffTaskList}
        options={{ title: "Tasks" }}
      />
    </Stack.Navigator>
  );
};

export default StaffNavigator;
