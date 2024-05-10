import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import ProjectForm from "../../components/ProjectForm";
import Loading from "../../components/Loading";
import { useCreateProjectMutation } from "../../services";

const ProjectAdd = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createProject, { isLoading, data, isSuccess, isError, error }] =
    useCreateProjectMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Project-List");
    }
  }, [isSuccess, navigation]);

  const handleCreate = async () => {
    try {
      const newProjectData = {
        title: title,
        description: description,
        isActive: isChecked,
      };
      await createProject(newProjectData);
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
