import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectView from "../screens/project/ProjectView";
import ProjectList from "../screens/project/ProjectList";
import { color } from "../utilities/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProjectAdd from "../screens/project/ProjectAdd";

const Stack = createStackNavigator();
const ProjectNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Project-List"
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
        name="Project-List"
        component={ProjectList}
        options={{ title: "Projects" }}
      />
      <Stack.Screen
        name="Project-View"
        component={ProjectView}
        options={{
          title: " ",
          headerRight: () => (
            <MaterialCommunityIcons
              name="delete"
              size={28}
              color={color.white}
              onPress={() => alert("This is a button!")}
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Project-Add"
        component={ProjectAdd}
        options={{
          title: " New Project ",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
