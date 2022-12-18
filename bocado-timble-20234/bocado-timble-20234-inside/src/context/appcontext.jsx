import { createContext, useReducer } from "react";
import { init, reducer } from "./reducer";




export const Appcontext=createContext()

export default function AppContextProvider({children}){
const [state,dispatch]=useReducer(reducer,init)


return <Appcontext.Provider value={{state,dispatch}}  >{children}</Appcontext.Provider>


}