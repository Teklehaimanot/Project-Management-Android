import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, TextInput } from "react-native";
import { color } from "../utilities/Colors";
import Draggable from "react-native-draggable";
import DropdownInput from "./DropdownInput";

const { width } = Dimensions.get("window");
const TaskForm = ({ task }) => {
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];
  const [isChecked, setIsChecked] = useState(task.isActive);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <View style={styles.cardView}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Title</Text>
        <TextInput
          placeholder="Project Title"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputContainer}>
        <DropdownInput options={options} onSelect={handleSelect} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Description</Text>
        <TextInput
          placeholder="Description"
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Title</Text>
        <TextInput
          placeholder="Project Title"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Title</Text>
        <TextInput
          placeholder="Project Title"
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
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
    marginBottom: 10,
  },
  labelStyle: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: color.white,
  },
  textInput: {
    marginHorizontal: 5,
    marginVertical: 7,
    borderRadius: 2,
    backgroundColor: color.white,
    padding: 8,
  },
});

export default TaskForm;
