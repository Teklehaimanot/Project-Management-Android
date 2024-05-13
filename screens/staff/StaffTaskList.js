import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useGetTasksQuery } from "../../services";
import Loading from "../../components/Loading";
import { ScrollView } from "react-native-gesture-handler";
import TaskCard from "../../components/TaskCard";
import { color } from "../../utilities/Colors";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { removeUser } from "../../utilities/StoreUser";
import { logout } from "../../state/auth/authSlice";
import StaffTaskCard from "../../components/StaffTaskCard";

const { width } = Dimensions.get("window");
const StaffTaskList = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetTasksQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  if (isLoading && !isRefreshing) {
    return <Loading />;
  }

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
        {data?.data.map((task) => (
          <StaffTaskCard navigation={navigation} key={task.id} task={task} />
        ))}
      </ScrollView>
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
export default StaffTaskList;
