import React,{createContext,useReducer} from "react";
import AppReducer from '../componants/AppReducer'
import uuid from "react-uuid";
const initialState =  {
    'users':[
        {
            name:'viral',
            email:'patel',
            id:uuid()
        }
    ]
}

export const UserDataContext = createContext(initialState)

export const UserDataProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const RemoveUser = (id) => {
        dispatch({
            type:"REMOVE_USER",
            payload:id
        })
    }
    const AddUser = (user) => {
        dispatch({
            type:'ADD_USER',
            payload:user
        })
    }
    const EditUser = (user) => {
        dispatch({
            type:"EDIT_USER",
            payload:user 
        })
    }
    return (
        <UserDataContext.Provider value={{
            users :state.users,
            rmuser:RemoveUser,
            adduser:AddUser,
            edituser:EditUser
        }}>
            {children}
        </UserDataContext.Provider>
    )
}