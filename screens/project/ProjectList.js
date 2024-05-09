import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "../../utilities/Colors";

const { width } = Dimensions.get("window");
const ProjectList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
      </ScrollView>
      <TouchableOpacity style={styles.createButton}>
        <Icon name="plus" size={20} color={color.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.grayDark,
  },
  scrollView: {
    flex: 1,
    marginBottom: 15,
    width: width * 1,
  },
  cardView: {
    backgroundColor: color.white,
    width: width * 0.95,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
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
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: color.secondary,
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export default ProjectList;
