import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { color } from "../utilities/Colors";

const { width } = Dimensions.get("window");
const CardBox = (props) => {
  return <View style={styles.cardView}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: color.white,
    width: width * 0.95,
    marginTop: 40,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
  },
});
export default CardBox;
