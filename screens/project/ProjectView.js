import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "../../utilities/Colors";

const { width } = Dimensions.get("window");
const ProjectView = ({ route }) => {
  const project = route.params;
  const [isChecked, setIsChecked] = useState(project.isActive);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  const handleUpdate = () => {
    // Logic for updating data
    console.log("Update button pressed");
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <MaterialIcons name="check" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
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
export default ProjectView;
