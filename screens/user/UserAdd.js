import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UserForm from "../../components/UserForm";
import { color } from "../../utilities/Colors";
import SaveButton from "../../components/SaveButton";
import { useCreateUserMutation } from "../../services";
import Loading from "../../components/Loading";

const UserAdd = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, { isLoading, data, isSuccess, isError, error }] =
    useCreateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("User-List");
    }
  }, [isSuccess, navigation]);

  const handleCreate = async () => {
    try {
      const newUsertData = {
        name,
        email,
        phoneNumber,
        jobTitle,
        password,
        gender: selectedOption,
      };
      await createUser(newUsertData);
      console.log(newUsertData);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
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
      <SaveButton handlePress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
});
export default UserAdd;
