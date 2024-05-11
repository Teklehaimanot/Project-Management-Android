import React from "react";
import { View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native";

const ErrorPopup = ({ visible, message, onClose }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.errorMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  popup: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
});

export default ErrorPopup;
