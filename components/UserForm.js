import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { color } from "../utilities/Colors";
import DropdownInput from "./DropdownInput";
import CheckBox from "./CheckBox";

const { width } = Dimensions.get("window");
const UserForm = ({
  name,
  email,
  phoneNumber,
  gender,
  jobTitle,
  setName,
  setEmail,
  setPhoneNumber,
  setGender,
  setJobTitle,
  password,
  setPassword,
}) => {
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const handleSelect = (option) => {
    setGender(option.value);
  };

  return (
    <View style={styles.cardView}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Name</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <DropdownInput
          selectedOption={gender}
          setSelectedOption={setGender}
          options={options}
          onSelect={handleSelect}
          label={"Gender"}
          value={gender?.value}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Job Title</Text>
        <TextInput
          placeholder="JobTitle"
          style={styles.textInput}
          onChangeText={(text) => setJobTitle(text)}
          value={jobTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
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
