import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "../utilities/Colors";

const PlusButton = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.createButton} onPress={handlePress}>
      <Icon name="plus" size={20} color={color.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: color.secondary,
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
export default PlusButton;
