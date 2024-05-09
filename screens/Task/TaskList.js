import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import PlusButton from "../../components/PlusButton";
import { color } from "../../utilities/Colors";
import TaskCard from "../../components/TaskCard";

const { width } = Dimensions.get("window");
const TaskList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TaskCard navigation={navigation} />
      </ScrollView>
      <PlusButton handlePress={() => navigation.navigate("Task-Add")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
  scrollView: {
    flex: 1,
    marginBottom: 40,
    width: width * 1,
  },
});
export default TaskList;
