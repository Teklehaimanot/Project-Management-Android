import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { color } from "../utilities/Colors";
import CardBox from "./CardBox";

const { width } = Dimensions.get("window");
const ProjectCard = ({ navigation, project }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Project-View", {
            id: project.id,
            title: project.title,
            description: project.description,
            isActive: project.isActive,
          })
        }
      >
        <View
          style={[
            styles.titleStyle,
            {
              backgroundColor: project.isActive ? color.active : color.primary,
            },
          ]}
        >
          <Text style={styles.titleText}>{project.title}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>{project.description}</Text>
        </View>
        <View>
          <Text>{project.createdAt}</Text>
        </View>
      </TouchableOpacity>
    </CardBox>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  titleText: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  descriptionStyle: {
    marginVertical: 5,
    paddingBottom: 15,
    borderBottomColor: color.grayDark,
    borderBottomWidth: 1,
  },
});

export default ProjectCard;
