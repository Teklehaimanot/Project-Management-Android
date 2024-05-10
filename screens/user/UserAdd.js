import React from "react";
import { View, StyleSheet } from "react-native";
import UserForm from "../../components/UserForm";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";

const UserAdd = () => {
  const handleCreate = () => {
    console.log("Save button pressed");
  };
  const user = {
    id: "",
    name: "",
    eamil: "",
    phoneNumber: "",
    gender: "",
    jobTitle: "",
  };
  return (
    <View style={styles.container}>
      <UserForm user={user} />
      <SaveButton handlePress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default UserAdd;
