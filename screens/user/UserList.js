import React, { useState } from "react";
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

const { width } = Dimensions.get("window");
const UserList = ({ navigation }) => {
  const { data, error, isLoading, refetch } = useGetUsersQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);

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
});
export default UserList;
