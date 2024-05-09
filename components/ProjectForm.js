import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { color } from "../utilities/Colors";
import CheckBox from "./CheckBox";

const { width } = Dimensions.get("window");

const ProjectForm = ({ project }) => {
  const [isChecked, setIsChecked] = useState(project.isActive);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

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
      <View>
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
      <CheckBox
        isActive={project.isActive}
        title={"Is Active"}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
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
export default ProjectForm;
