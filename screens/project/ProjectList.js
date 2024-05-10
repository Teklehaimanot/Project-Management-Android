import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { color } from "../../utilities/Colors";
import PlusButton from "../../components/PlusButton";
import ProjectCard from "../../components/ProjectCard";
import { useGetProjectsQuery } from "../../services";

const { width } = Dimensions.get("window");
const ProjectList = ({ navigation }) => {
  const { data, error, isLoading, refetch } = useGetProjectsQuery();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={color.active} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: color.red }}>
          Error loading data. Please try again.
        </Text>
        <TouchableOpacity onPress={refetch}>
          <Text style={{ color: color.blue, marginTop: 10 }}>Tap to retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  console.log("dd", data.data[0]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data?.data.map((project) => (
          <ProjectCard
            navigation={navigation}
            project={project}
            key={project.id}
          />
        ))}
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
