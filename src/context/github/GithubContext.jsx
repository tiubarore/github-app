import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_TOKEN = import.meta.env.VITE_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  // get search result
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${VITE_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${VITE_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // clear users
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  //set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
