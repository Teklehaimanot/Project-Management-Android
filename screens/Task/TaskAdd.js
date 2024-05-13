import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utilities/Colors";
import TaskForm from "../../components/TaskForm";
import SaveButton from "../../components/SaveButton";
import { useCreateTaskMutation } from "../../services";
import Loading from "../../components/Loading";

const TaskAdd = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [projectId, setprojectId] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [createTask, { isLoading, data, isSuccess, isError, error }] =
    useCreateTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Task-List");
    }
  }, [isSuccess, navigation]);

  const handleCreate = async () => {
    try {
      const newTaskData = {
        title,
        description,
        status,
        projectId,
        assigneeId,
        tags,
        priority,
        dueDate,
      };
      await createTask(newTaskData);
      console.log(newTaskData);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(error);
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
      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        projectId={projectId}
        setprojectId={setprojectId}
        assigneeId={assigneeId}
        setAssigneeId={setAssigneeId}
        tags={tags}
        setTags={setTags}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
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

export default TaskAdd;
