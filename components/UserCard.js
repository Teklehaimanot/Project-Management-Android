import React from "react";
import CardBox from "./CardBox";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../utilities/Colors";

const UserCard = ({ navigation }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("User-View", {
            id: "1",
            name: "tekle",
            email: "admin@gmail.com",
            phoneNumber: "+251911111111",
            gender: "male",
            jobTitle: "string",
            password: "string",
          })
        }
      >
        <View style={styles.descriptionStyle}>
          <Text>Name</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>email</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text> Gender</Text>
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
export default UserCard;
