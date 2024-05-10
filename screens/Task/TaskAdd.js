import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utilities/Colors";
import TaskForm from "../../components/TaskForm";
import SaveButton from "../../components/SaveButton";

const TaskAdd = () => {
  const handleCreate = () => {
    console.log("Save button pressed");
  };
  const task = {
    id: "",
    title: "",
    description: "",
    isActive: true,
  };
  return (
    <View style={styles.container}>
      <TaskForm task={task} />
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
