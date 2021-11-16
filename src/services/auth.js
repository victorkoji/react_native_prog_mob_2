const TOKEN_KEY = "@prog-mob-token";
const USER_KEY = "@prog-mob-user";

export const login = (token) => localStorage.setItem(TOKEN_KEY, token)
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setUser = (user) => localStorage.setItem(TOKEN_KEY, JSON.stringify(user))
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
};
