import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";
import { useUpdateProjectMutation } from "../../services";

const ProjectView = ({ route, navigation }) => {
  const project = route.params;
  const [isChecked, setIsChecked] = useState(project.isActive);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  const [updateProject, { isLoading, data, isSuccess, isError, error }] =
    useUpdateProjectMutation();

  const handleUpdate = () => {
    try {
      const updatedProjectData = {
        id: project.id,
        title: title,
        description: description,
        isActive: isChecked,
      };
      updateProject(updatedProjectData);
      navigation.navigate("Project-List");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ProjectForm
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
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
