import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import { MaterialIcons } from "@expo/vector-icons";
import ProjectForm from "../../components/ProjectForm";

const { width } = Dimensions.get("window");
const ProjectView = ({ route }) => {
  const project = route.params;

  const handleUpdate = () => {
    // Logic for updating data
    console.log("Update button pressed");
  };

  return (
    <View style={styles.container}>
      <ProjectForm project={project} />
      <SaveButton handlePress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default ProjectView;
