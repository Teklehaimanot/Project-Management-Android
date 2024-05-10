import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "../utilities/Colors";
import UserList from "../screens/user/UserList";
import UserView from "../screens/user/UserView";
import UserAdd from "../screens/user/UserAdd";
const Stack = createStackNavigator();
const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="User-List"
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
        name="User-List"
        component={UserList}
        options={{ title: "Users" }}
      />
      <Stack.Screen
        name="User-View"
        component={UserView}
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
        name="User-Add"
        component={UserAdd}
        options={{
          title: " New Task ",
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
