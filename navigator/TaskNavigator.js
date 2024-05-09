import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { color } from "../utilities/Colors";
import TaskList from "../screens/Task/TaskList";

const TaskNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Task-List"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Task-List"
        component={TaskList}
        options={{ title: "Tasks" }}
      />
    </Stack.Navigator>
  );
};

export default TaskNavigator;
