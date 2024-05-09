import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProjectList from "../screens/ProjectList";

const Stack = createStackNavigator();
const ProjectNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Project-list">
      <Stack.Screen
        name="Project-List"
        component={ProjectList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
