import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";
import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../../services";
import Loading from "../../components/Loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProjectView = ({ route, navigation }) => {
  const project = route.params;
  const [isChecked, setIsChecked] = useState(project.isActive);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  const [updateProject, { isLoading, data, isSuccess, isError, error }] =
    useUpdateProjectMutation();
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Project-List");
    }
  }, [isSuccess, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={confirmDelete}>
          <MaterialCommunityIcons
            name="delete"
            size={28}
            color={color.white}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleUpdate = async () => {
    try {
      const updatedProjectData = {
        id: project.id,
        title: title,
        description: description,
        isActive: isChecked,
      };
      await updateProject(updatedProjectData);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this project?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => handleDelete(project.id),
          style: "destructive",
        },
      ]
    );
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      console.log("Project deleted successfully:", projectId);
      navigation.navigate("Project-List");
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  if (isLoading || isDeleting) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {isError && (
        <View>
          <Text
            style={{
              color: color.red,
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              margin: 40,
            }}
          >
            {error?.data.error || "An error occured"}
          </Text>
        </View>
      )}
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
