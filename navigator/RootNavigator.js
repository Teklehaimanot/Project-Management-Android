import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectNavigator from "./ProjectNavigator";
import UserNavigator from "./UserNavigator";
import TaskNavigator from "./TaskNavigator";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../utilities/Colors";

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Projects":
                iconName = "folder";
                break;
              case "Tasks":
                iconName = "document";
                break;
              case "Users":
                iconName = "people-outline";
                break;
              default:
                iconName = "ios-information-circle";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: `${color.white}`,
          tabBarInactiveTintColor: `${color.grayDark}`,
          headerTintColor: `${color.white}`,
          headerStyle: {
            backgroundColor: color.primary,
          },
          tabBarStyle: {
            backgroundColor: color.primary,
          },
        })}
      >
        <Tab.Screen name="Projects" component={ProjectNavigator} />
        <Tab.Screen name="Tasks" component={TaskNavigator} />
        <Tab.Screen name="Users" component={UserNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
