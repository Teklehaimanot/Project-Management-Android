import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { color } from "../utilities/Colors";

const Error = ({ refetch }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, color: color.red }}>
        Error loading data. Please try again.
      </Text>
      <TouchableOpacity onPress={refetch}>
        <Text style={{ color: color.blue, marginTop: 10 }}>Tap to retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
