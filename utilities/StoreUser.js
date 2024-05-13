import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUser = async (user) => {
  try {
    const jsonUser = JSON.stringify(user);
    AsyncStorage.setItem("@user", jsonUser);
  } catch (error) {}
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("@user");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {}
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("@user");
    return true;
  } catch (error) {}
};
