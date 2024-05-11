import React from "react";
import CardBox from "./CardBox";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../utilities/Colors";

const UserCard = ({ navigation, user }) => {
  return (
    <CardBox>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("User-View", {
            id: user.id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            jobTitle: user.jobTitle,
            isActive: user.isActive,
          })
        }
      >
        <View
          style={[
            styles.isUserActive,
            { borderColor: user.isActive ? color.active : color.primary },
          ]}
        ></View>
        <View style={styles.descriptionStyle}>
          <Text style={styles.labelStyle}>Name:</Text>
          <Text>{user.name}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text style={styles.labelStyle}>Email:</Text>
          <Text>{user.email}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text style={styles.labelStyle}>Gender:</Text>
          <Text> {user.gender}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text style={styles.labelStyle}>Job Title:</Text>
          <Text> {user.jobTitle}</Text>
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
    flexDirection: "row",
    marginVertical: 5,
    paddingBottom: 10,
    borderBottomColor: color.grayDark,
    borderBottomWidth: 1,
  },
  labelStyle: {
    color: color.primary,
    fontWeight: "bold",
    marginRight: 10,
  },
  isUserActive: {
    borderWidth: 1,
    marginVertical: 5,
  },
});
export default UserCard;
