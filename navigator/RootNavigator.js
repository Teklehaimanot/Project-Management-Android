import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { color } from "../utilities/Colors";
import { StatusBar } from "expo-status-bar";
import HomeNavigator from "./HomeNavigator";
import VerifyUserNavigator from "./VerifyUserNavigator";
import { useDispatch, useSelector } from "react-redux";
import StaffNavigator from "./StaffNavigator";
import { getUser } from "../utilities/StoreUser";
import { login } from "../state/auth/authSlice";
import Loading from "../components/Loading";

const RootNavigator = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAndToken = async () => {
      try {
        const storedUser = await getUser();
        if (storedUser) {
          dispatch(
            login({
              user: storedUser.user,
              token: `Bearer ${storedUser.token}`,
            })
          );
        }
      } catch (error) {
        console.error("Error retrieving user from storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAndToken();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={color.statusbar} barStyle="light-content" />
      {user ? (
        user.isAdmin ? (
          <HomeNavigator />
        ) : (
          <StaffNavigator />
        )
      ) : (
        <VerifyUserNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
