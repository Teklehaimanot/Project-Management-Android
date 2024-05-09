import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { color } from "../../utilities/Colors";
import PlusButton from "../../components/PlusButton";
import ProjectCard from "../../components/ProjectCard";

const { width } = Dimensions.get("window");
const ProjectList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProjectCard navigation={navigation} />
      </ScrollView>
      <PlusButton handlePress={() => navigation.navigate("Project-Add")} />
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

export default ProjectList;
