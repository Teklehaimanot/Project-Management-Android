import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import UserForm from "../../components/UserForm";
import { useDeleteUserMutation, useUpdateUserMutation } from "../../services";
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
      console.log("ud", updatedUserData);
    } catch (error) {
      console.log(error);
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
