import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "../utilities/Colors";
import { StatusBar } from "expo-status-bar";
import HomeNavigator from "./HomeNavigator";
import VerifyUserNavigator from "./VerifyUserNavigator";
import { useDispatch, useSelector } from "react-redux";
import StaffNavigator from "./StaffNavigator";
import { getUser } from "../utilities/StoreUser";

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then((res) => {
        if (res) {
          dispatch(login({ user, token }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderStack = () => {
    if (user) {
      console.log("user", user);
      if (user.isAdmin) {
        return <HomeNavigator />;
      } else return <StaffNavigator />;
    } else {
      return <VerifyUserNavigator />;
    }
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={color.statusbar} barStyle="light-content" />
      {renderStack()}
    </NavigationContainer>
  );
};

export default RootNavigator;
