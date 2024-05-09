import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "../utilities/Colors";

const CheckBox = ({ title, isChecked, setIsChecked }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={styles.checkBoxContainer}
      >
        <MaterialIcons
          name={isChecked ? "check-box" : "check-box-outline-blank"}
          size={28}
          color={isChecked ? color.white : color.white}
        />
        <Text style={styles.checkBoxLabel}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  checkBoxLabel: {
    color: color.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default CheckBox;
