import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { color } from "../utilities/Colors";
import DropdownInput from "./DropdownInput";
import {
  useGetProjectByIdQuery,
  useGetProjectsQuery,
  useGetUserByIdQuery,
  useGetUsersQuery,
} from "../services";
import Loading from "./Loading";

const { width } = Dimensions.get("window");
const TaskForm = ({
  title,
  description,
  status,
  projectId,
  assigneeId,
  tags,
  priority,
  dueDate,
  setTitle,
  setDescription,
  setStatus,
  setprojectId,
  setAssigneeId,
  setTags,
  setPriority,
  setDueDate,
}) => {
  const priorityOption = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const { data, error, isLoading } = useGetProjectByIdQuery(projectId);
  const {
    data: userData,
    error: userError,
    isLoading: userDataLoading,
  } = useGetUserByIdQuery(assigneeId);
  const { data: projectData, isLoading: isprojectLoading } =
    useGetProjectsQuery();
  const { data: usersData, isLoading: isuserLoading } = useGetUsersQuery();
  const projectOptions = projectData?.data.map((project) => {
    return {
      label: project.title,
      value: project.id,
    };
  });

  const asigneeOptions = usersData?.data.map((user) => {
    return {
      label: user.name,
      value: user.id,
    };
  });

  const PrevSelectedProject = {
    label: data ? data.title : "",
    value: data ? data.id : "",
  };
  const [project, setProject] = useState(PrevSelectedProject);

  const PrevSelectedUser = {
    label: userData ? userData.name : "",
    value: userData ? userData.id : "",
  };
  const [assignee, setAssignee] = useState(PrevSelectedUser);

  const handleProjectSelect = (option) => {
    setprojectId(option.value);
    setProject(option);
  };

  const handlePrioritySelect = (option) => {
    setPriority(option.value);
  };

  const handleAssigneSelect = (option) => {
    setAssigneeId(option.value);
    setAssignee(option);
  };

  if (isLoading || userDataLoading || isprojectLoading || isuserLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.cardView}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelStyle}>Title</Text>
          <TextInput
            placeholder="Task Title"
            style={styles.textInput}
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelStyle}>Description</Text>
          <TextInput
            placeholder="Description"
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>
        <View style={styles.inputContainer}>
          <DropdownInput
            selectedOption={project?.label}
            setSelectedOption={setprojectId}
            options={projectOptions}
            onSelect={handleProjectSelect}
            label={"Project"}
          />
        </View>
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
          <DropdownInput
            selectedOption={assignee?.label}
            setSelectedOption={setAssigneeId}
            options={asigneeOptions}
            onSelect={handleAssigneSelect}
            label={"User Assigned"}
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
        <View style={styles.inputContainer}>
          <DropdownInput
            selectedOption={priority}
            setSelectedOption={setPriority}
            options={priorityOption}
            onSelect={handlePrioritySelect}
            label={"Priority"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelStyle}>Due Date</Text>
          <TextInput
            placeholder="Due Date"
            style={styles.textInput}
            onChangeText={(text) => setDueDate(text)}
            value={dueDate}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width * 0.95,
    margin: "auto",
  },
  inputContainer: {
    marginBottom: 5,
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

export default TaskForm;
