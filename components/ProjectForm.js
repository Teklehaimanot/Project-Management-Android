import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "../utilities/Colors";

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
          <Text style={styles.checkBoxLabel}> Is Active ?</Text>
        </TouchableOpacity>
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
export default ProjectForm;
