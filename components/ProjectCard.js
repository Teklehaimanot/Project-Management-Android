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
const ProjectCard = ({ navigation }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Project-View", {
            id: "1",
            title: "tekle",
            description: "description",
            isActive: true,
          })
        }
      >
        <View
          style={[
            styles.titleStyle,
            { backgroundColor: true ? color.active : color.primary },
          ]}
        >
          <Text style={styles.titleText}>title</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>This is a Description about project one</Text>
        </View>
        <View>
          <Text>Wed, May 22, 2024, 12:00 PM</Text>
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
