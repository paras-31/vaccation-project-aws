import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const mycontext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    isLogged: "",
    FirstName:"", 
    LastName:"",
    Email:"",
    Password:""
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <mycontext.Provider value={{ state, dispatch }}>{children}</mycontext.Provider>
  );
};
