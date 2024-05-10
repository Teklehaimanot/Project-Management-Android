import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { color } from "../utilities/Colors";
import DropdownInput from "./DropdownInput";

const { width } = Dimensions.get("window");
const UserForm = ({ user }) => {
  const [name, setName] = useState(user.name);
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];
  const [selectedOption, setSelectedOption] = useState("Gender");
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <View style={styles.cardView}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Name</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={name}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <DropdownInput
          options={options}
          onSelect={handleSelect}
          label={"Gender"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Job Title</Text>
        <TextInput
          placeholder="JobTitle"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width * 0.95,
    margin: "auto",
  },
  inputContainer: {
    marginBottom: 5,
  },
  labelStyle: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: color.white,
  },
  textInput: {
    marginHorizontal: 5,
    borderRadius: 2,
    backgroundColor: color.white,
    padding: 8,
  },
});
export default UserForm;
