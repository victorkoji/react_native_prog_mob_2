import AsyncStorage from "@react-native-async-storage/async-storage";
const md5 = require('md5');

export const TOKEN_KEY = "@EDANE:token";
export const USER_KEY = "@EDANE:uesr";

export const onSignIn = (user) => {
  AsyncStorage.setItem(TOKEN_KEY, "true");

  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null ? true : false;
};

export const getUserLogged = async () => {
  const user = await AsyncStorage.getItem(USER_KEY)

  return JSON.parse(user)
};

export const validatePassword = async (password_request: string, password_user: string) => {
  const senhaValida = md5(password_request) == password_user;

  return senhaValida;
}