import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import PlusButton from "../../components/PlusButton";
import { color } from "../../utilities/Colors";
import UserCard from "../../components/UserCard";

const { width } = Dimensions.get("window");
const UserList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <UserCard navigation={navigation} />
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
