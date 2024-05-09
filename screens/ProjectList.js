import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../utilities/Colors";

const { width } = Dimensions.get("window");
const ProjectList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardView}>
          <TouchableOpacity>
            <View
              style={[
                styles.titleStyle,
                { backgroundColor: true ? color.secondary : color.primary },
              ]}
            >
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
          <TouchableOpacity>
            <View style={styles.titleStyle}>
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
          <TouchableOpacity>
            <View style={styles.titleStyle}>
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
          <TouchableOpacity>
            <View style={styles.titleStyle}>
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
          <TouchableOpacity>
            <View style={styles.titleStyle}>
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
          <TouchableOpacity>
            <View style={styles.titleStyle}>
              <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Title
              </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.grayLight,
  },
  cardView: {
    backgroundColor: color.white,
    width: width * 0.95,
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
  titleStyle: {
    // backgroundColor: color.secondary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  descriptionStyle: {
    marginVertical: 5,
    paddingBottom: 15,
    borderBottomColor: color.grayDark,
    borderBottomWidth: 1,
  },
});

export default ProjectList;
