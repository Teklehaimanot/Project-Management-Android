import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectView from "../screens/project/ProjectView";
import ProjectList from "../screens/project/ProjectList";

const Stack = createStackNavigator();
const ProjectNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Project-list">
      <Stack.Screen
        name="Project-List"
        component={ProjectList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Project-View"
        component={ProjectView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
