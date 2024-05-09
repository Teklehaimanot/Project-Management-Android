import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SaveButton = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.updateButton} onPress={handlePress}>
      <MaterialIcons name="check" size={28} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  updateButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SaveButton;
