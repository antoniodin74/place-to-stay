import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"

const initialState = {
    currentUser:null,
    openLogin:false,
    alert:{ open:false, severity:'info', message:'' },
    loading:false,
    profile: { open:false, file:null, photoURL:'' },
    images: [],
    details: { title:'', description:'', price:0 },
    location: {lng:14.26859, lat:40.85303}
}

const Context = createContext(initialState)

export const useValue = ()=>{
    return useContext(Context)
}

const ContextProvider = ({children}) => {
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(currentUser) {
      dispatch({type: 'UPDATE_USER', payload: currentUser});
    }
  }, []);
  
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  )
}

export default ContextProvider