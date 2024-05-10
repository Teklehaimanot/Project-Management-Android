import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { color } from "../utilities/Colors";
import TaskList from "../screens/Task/TaskList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TaskView from "../screens/Task/TaskView";
import TaskAdd from "../screens/Task/TaskAdd";

const Stack = createStackNavigator();
const TaskNavigator = () => {
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
      <Stack.Screen
        name="Task-View"
        component={TaskView}
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
        name="Task-Add"
        component={TaskAdd}
        options={{
          title: " New Task ",
        }}
      />
    </Stack.Navigator>
  );
};

export default TaskNavigator;
