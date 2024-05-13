import React, { useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
} from "react-native";
import PlusButton from "../../components/PlusButton";
import { color } from "../../utilities/Colors";
import UserCard from "../../components/UserCard";
import Loading from "../../components/Loading";
import { useGetUsersQuery } from "../../services";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { logout } from "../../state/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utilities/StoreUser";

const { width } = Dimensions.get("window");
const UserList = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(user);
  const { data, error, isLoading, refetch } = useGetUsersQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.logoutContainer}>
          <Text style={styles.logoutLabel}>{user.name + " "}</Text>
          <TouchableOpacity
            onPress={() => {
              removeUser();
              dispatch(logout());
            }}
          >
            <MaterialCommunityIcons
              name="logout"
              size={28}
              color={color.white}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  if (isLoading && !isRefreshing) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: color.red }}>
          Error loading data. Please try again.
        </Text>
        <TouchableOpacity onPress={refetch}>
          <Text style={{ color: color.blue, marginTop: 10 }}>Tap to retry</Text>
        </TouchableOpacity>
        <Text style={{ color: color.red, marginTop: 10 }}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[color.active]}
          />
        }
      >
        {data?.data.map((user) => (
          <UserCard navigation={navigation} key={user.id} user={user} />
        ))}
      </ScrollView>
      <PlusButton handlePress={() => navigation.navigate("User-Add")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
  scrollView: {
    flex: 1,
    marginBottom: 40,
    width: width * 1,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.white,
  },
});
export default UserList;
