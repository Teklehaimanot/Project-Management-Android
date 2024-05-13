import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { color } from "../../utilities/Colors";
import { TextInput } from "react-native-gesture-handler";
import SaveButton from "../../components/SaveButton";
import { useUpdateTaskMutation } from "../../services";
import Loading from "../../components/Loading";

const { width } = Dimensions.get("window");
const StaffTaskView = ({ route, navigation }) => {
  const task = route.params;
  const [status, setStatus] = useState(task.status);
  const [tags, setTags] = useState(task.tags);

  const [updateTask, { isLoading, data, isSuccess, isError, error }] =
    useUpdateTaskMutation();

  useEffect(() => {
    if (isSuccess && data) {
      navigation.navigate("Staff");
    }
  }, [isSuccess, navigation]);

  const handleUpdate = async () => {
    try {
      const updatedTaskData = {
        ...task,
        id: task.id,
        status: status,
        tags: tags,
      };
      console.log(updateTask);
      await updateTask(updatedTaskData);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  console.log(tags);
  return (
    <View style={styles.container}>
      {isError && (
        <View>
          <Text
            style={{
              color: color.red,
              fontWeight: "",
              fontSize: 20,
              alignSelf: "center",
              margin: 40,
            }}
          >
            {error?.data.message || "An error occured"}
          </Text>
        </View>
      )}
      <ScrollView>
        <View style={styles.cardView}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Status</Text>
            <TextInput
              placeholder="Status"
              style={styles.textInput}
              onChangeText={(text) => setStatus(text)}
              value={status}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Tags</Text>
            <TextInput
              placeholder="Please enter tags separated by commas"
              style={styles.textInput}
              onChangeText={(text) => setTags(text.split(","))}
              value={tags?.toString()}
            />
          </View>
        </View>
      </ScrollView>
      <SaveButton handlePress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.statusbar,
  },
  cardView: {
    width: width * 0.95,
    margin: "auto",
    marginTop: 50,
  },
  inputContainer: {
    marginVertical: 15,
  },
  labelStyle: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: color.white,
  },
  textInput: {
    marginHorizontal: 5,
    borderRadius: 2,
    backgroundColor: color.white,
    padding: 8,
  },
});
export default StaffTaskView;
