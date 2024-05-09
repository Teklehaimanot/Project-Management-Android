import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";

const ProjectAdd = () => {
  const handleCreate = () => {
    console.log("Save button pressed");
  };
  const project = {
    id: "",
    title: "",
    description: "",
    isActive: true,
  };
  return (
    <View style={styles.container}>
      <ProjectForm project={project} />
      <SaveButton handlePress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default ProjectAdd;
