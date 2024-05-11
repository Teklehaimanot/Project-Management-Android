import React from "react";
import CardBox from "./CardBox";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { color } from "../utilities/Colors";

const { width } = Dimensions.get("window");
const TaskCard = ({ navigation, task }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Task-View", {
            id: task.id,
            title: task.title,
            description: task.description,
            projectId: task.projectId,
            status: task.status,
            assigneeId: task.assigneeId,
            tags: task.tags,
            priority: task.priority,
            dueDate: task.dueDate,
          })
        }
      >
        <View style={styles.descriptionStyle}>
          <Text>{task.title}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>{task.description}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>{task.status}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>{task.priority}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>Due Date: {task.dueDate}</Text>
        </View>
      </TouchableOpacity>
    </CardBox>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },

  descriptionStyle: {
    flexDirection: "row",
    marginVertical: 5,
    paddingBottom: 10,
    borderBottomColor: color.grayDark,
    borderBottomWidth: 1,
  },
  labelStyle: {
    color: color.primary,
    fontWeight: "bold",
    marginRight: 10,
  },
});
export default TaskCard;
