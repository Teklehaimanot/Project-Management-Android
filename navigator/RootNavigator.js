import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { color } from "../utilities/Colors";
import { StatusBar } from "expo-status-bar";
import HomeNavigator from "./HomeNavigator";
import VerifyUserNavigator from "./VerifyUserNavigator";
import { useDispatch, useSelector } from "react-redux";
import StaffNavigator from "./StaffNavigator";
import { API_KEY } from "@env";
import { getUser } from "../utilities/StoreUser";
import { login } from "../state/auth/authSlice";
import Loading from "../components/Loading";
import axios from "axios";

const RootNavigator = () => {
  const { user, token, refreshToken } = useSelector((state) => state.auth);
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [refreshInterval, setRefreshInterval] = useState(null);
  const basicUrl = API_KEY;

  useEffect(() => {
    const checkUserAndToken = async () => {
      try {
        const storedUser = await getUser();
        if (storedUser) {
          dispatch(
            login({
              user: storedUser.user,
              token: `Bearer ${storedUser.token}`,
              refreshToken: storedUser.refreshToken,
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

  // useEffect(() => {
  //   const refreshAccessToken = async () => {
  //     try {
  //       const config = {
  //         headers: {
  //           "x-refresh-token": refreshToken,
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       const response = await axios.post(`${basicUrl}auth/refresh`, config);
  //       const newAccessToken = response.data;
  //       console.log("nt", newAccessToken);
  //       // Update token in local storage or Redux store

  //       console.log("Access token refreshed");
  //     } catch (error) {
  //       console.error("Error refreshing token:", error.response.data);
  //     }
  //   };

  //   const interval = setInterval(refreshAccessToken, 1 * 10 * 1000);
  //   setRefreshInterval(interval);

  //   return () => clearInterval(interval);
  // }, []);

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
