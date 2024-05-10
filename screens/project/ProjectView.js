import React from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";

const ProjectView = ({ route }) => {
  const project = route.params;

  const handleUpdate = () => {
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
