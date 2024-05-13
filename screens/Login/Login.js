import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import axios from "axios";
import { color } from "../../utilities/Colors";
import { login } from "../../state/auth/authSlice";
import { storeUser } from "../../utilities/StoreUser";

const { width } = Dimensions.get("window");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const basicUrl = API_KEY;

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      console.log(basicUrl);
      const { data } = await axios.post(`${basicUrl}auth/login`, {
        email: email,
        password: password,
      });
      if (data) {
        const { profile, accessToken } = data;
        const jsonUser = { user: profile, token: accessToken };
        await storeUser(jsonUser);
        setErrors(false);
        setIsLoading(false);
        dispatch(login({ user: profile, token: `Bearer ${accessToken}` }));
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data?.message.toString());
        setIsLoading(false);
      } else {
        alert("Error setting up the request:", error.message);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.loginError}>{errors}</Text>
        <Text style={styles.loginLabel}>Login</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {isLoading ? (
            <ActivityIndicator size="small" color={color.white} />
          ) : (
            <Text
              style={{
                color: color.white,
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
                letterSpacing: 1,
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.statusbar,
  },
  loginCard: {
    width: width * 0.88,
    marginHorizontal: width * 0.06,
    backgroundColor: color.grayBackground,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 7,
    borderRadius: 5,
    backgroundColor: color.white,
  },
  button: {
    backgroundColor: color.primary,
    margin: 5,
    borderRadius: 5,
    paddingVertical: 14,
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  loginLabel: {
    fontWeight: "bold",
    color: color.white,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  loginError: {
    color: color.red,
    marginVertical: 10,
  },
});

export default Login;
