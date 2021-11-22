import AsyncStorage from "@react-native-async-storage/async-storage";
const md5 = require('md5');

export const TOKEN_KEY = "@EDANE:token";

export const onSignIn = () => AsyncStorage.setItem(TOKEN_KEY, "true");
export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null ? true : false;
};

export const validatePassword = async (password_request: string, password_user: string) => {
  const senhaValida = md5(password_request) == password_user;

  return senhaValida;
}