import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { color } from "../../utilities/Colors";
import PlusButton from "../../components/PlusButton";
import ProjectCard from "../../components/ProjectCard";
import { useGetProjectsQuery } from "../../services";
import Loading from "../../components/Loading";

const { width } = Dimensions.get("window");
const ProjectList = ({ navigation }) => {
  const { data, error, isLoading, refetch } = useGetProjectsQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  if (isLoading && !isRefreshing) {
    return <Loading />;
  }

  if (error) {
    return <Error refetch={refetch} />;
  }

  console.log("dd", data.data[0]);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[color.active]}
          />
        }
      >
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
