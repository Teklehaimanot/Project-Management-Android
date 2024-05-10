import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SaveButton from "../../components/SaveButton";
import { color } from "../../utilities/Colors";
import TaskForm from "../../components/TaskForm";

const TaskView = ({ route }) => {
  const task = route.params;

  const handleUpdate = () => {
    console.log("Update button pressed");
  };

  return (
    <View style={styles.container}>
      <TaskForm task={task} />
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
