import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import UserForm from "../../components/UserForm";
import { useDeleteUserMutation, useUpdateUserMutation } from "../../services";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "../../components/Loading";

const UserView = ({ route, navigation }) => {
  const user = route.params;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [jobTitle, setJobTitle] = useState(user.jobTitle);
  const [selectedOption, setSelectedOption] = useState(user.gender);
  const [password, setPassword] = useState("");

  const [updateUser, { isLoading, data, isSuccess, isError, error }] =
    useUpdateUserMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("User-List");
    }
  }, [isSuccess, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={confirmDelete} style={styles.deleteButton}>
          <MaterialCommunityIcons
            name="delete"
            size={28}
            color={color.white}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const handleUpdate = async () => {
    try {
      const updatedUserData = {
        id: user.id,
        name,
        email,
        phoneNumber,
        gender: selectedOption,
        jobTitle,
        password,
        isActive: user.isActive,
      };
      await updateUser(updatedUserData);
    } catch (error) {
      console.log(error);
    }
  };
  const confirmDelete = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this project?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => handleDelete(user.id),
          style: "destructive",
        },
      ]
    );
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      console.log("Project deleted successfully:", userId);
      navigation.navigate("User-List");
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  if (isLoading || isDeleting) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      {isError && (
        <View>
          <Text
            style={{
              color: color.red,
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              margin: 40,
            }}
          >
            {error?.data.error || "An error occured"}
          </Text>
        </View>
      )}
      <UserForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        gender={selectedOption}
        setGender={setSelectedOption}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        password={password}
        setPassword={setPassword}
      />
      <SaveButton handlePress={handleUpdate} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default UserView;
