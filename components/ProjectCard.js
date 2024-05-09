import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { color } from "../utilities/Colors";

const { width } = Dimensions.get("window");
const ProjectCard = ({ navigation }) => {
  return (
    <View style={styles.cardView}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: color.white,
    width: width * 0.95,
    marginTop: 40,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
  },
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
