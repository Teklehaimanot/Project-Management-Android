import React from "react";
import CardBox from "./CardBox";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../utilities/Colors";

const TaskCard = ({ navigation }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Task-View", {
            id: "1",
            title: "tekle",
            description: "description",
            isActive: true,
          })
        }
      >
        <View style={styles.descriptionStyle}>
          <Text>title</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>project Name</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>Description about a Task</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>status</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>Tags</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>assigned</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>priority</Text>
        </View>
        <View>
          <Text>Due Date: May 22, 2024</Text>
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
    marginVertical: 5,
    paddingBottom: 10,
    borderBottomColor: color.grayDark,
    borderBottomWidth: 1,
  },
});
export default TaskCard;
