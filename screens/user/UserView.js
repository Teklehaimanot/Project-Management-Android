import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import UserForm from "../../components/UserForm";

const UserView = ({ route }) => {
  const user = route.params;

  const handleUpdate = () => {
    console.log("Update button pressed");
  };
  return (
    <View style={styles.container}>
      <UserForm user={user} />
      <SaveButton handlePress={handleUpdate} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default UserView;
