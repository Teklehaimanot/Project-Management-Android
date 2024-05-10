import React from "react";
import { ActivityIndicator, View } from "react-native";
import { color } from "../utilities/Colors";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: color.statusbar,
      }}
    >
      <ActivityIndicator size="large" color={color.active} />
    </View>
  );
};

export default Loading;
