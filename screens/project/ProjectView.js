import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";
import { useUpdateProjectMutation } from "../../services";
import Loading from "../../components/Loading";

const ProjectView = ({ route, navigation }) => {
  const project = route.params;
  const [isChecked, setIsChecked] = useState(project.isActive);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  const [updateProject, { isLoading, data, isSuccess, isError, error }] =
    useUpdateProjectMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Project-List");
    }
  }, [isSuccess, navigation]);

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

  if (isLoading) {
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
            {console.log(error)}
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
