import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SaveButton from "../../components/SaveButton";
import { color } from "../../utilities/Colors";
import TaskForm from "../../components/TaskForm";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../../services";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "../../components/Loading";

const TaskView = ({ route, navigation }) => {
  const task = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [projectId, setprojectId] = useState(task.projectId);
  const [assigneeId, setAssigneeId] = useState(task.assigneeId);
  const [tags, setTags] = useState(task.tags);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const [updateTask, { isLoading, data, isSuccess, isError, error }] =
    useUpdateTaskMutation();
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Task-List");
    }
  }, [isSuccess, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={confirmDelete} style={styles.deleteButton}>
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
      const updatedTaskData = {
        id: task.id,
        title,
        description,
        projectId,
        status,
        priority,
        assigneeId,
        tags,
        dueDate,
      };
      await updateTask(updatedTaskData);
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
          onPress: () => handleDelete(task.id),
          style: "destructive",
        },
      ]
    );
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      console.log("Project deleted successfully:", taskId);
      navigation.navigate("Task-List");
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
              fontWeight: "",
              fontSize: 20,
              alignSelf: "center",
              margin: 40,
            }}
          >
            {error?.data.message || "An error occured"}
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
export default TaskView;
