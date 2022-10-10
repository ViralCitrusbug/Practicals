import React,{useState,useContext} from 'react'
import { UserDataContext } from './UserData'
import { useNavigate  } from "react-router-dom";
import uuid from 'react-uuid';
function AddUser() {

    const {adduser} = useContext(UserDataContext)
    const [user, AddUser] = useState("")
    const [email, setEmail] = useState("")
    const [fnameerror,setFnameError] = useState(false)
    const [lnameerror,setLnameError] = useState(false)
    const hist = useNavigate ()
    const UsenameUpdate = (event) => {
        AddUser(event.target.value)
    }
    const UseremailUpdate = (event) => {
        setEmail(event.target.value)
    }
    const AddingUser = () => {
        if (user == ""){
            setFnameError(true)
            return
        }
        else if(email == ""){
            setLnameError(true)
        }
        else{
            adduser({
                name:user,
                email:email,
                id:uuid()
            })
            hist('/')
        }
    }
  return (
    <div className=''>
        <div className=''>
            <label htmlFor="name">First Name</label>
            <input className='form-control w-25' value={user} onChange={UsenameUpdate} type="text" />
            {fnameerror?<span className='text-danger'>FirstName is required</span>:null}
        </div>
        <div className=''>
            <label htmlFor="email">Last Name</label>
            <input className='form-control w-25' value={email} onChange={UseremailUpdate} type="text" />
            {lnameerror?<span className='text-danger'>LastName is required</span>:null}
        </div>

        <button className='btn btn-primary mx-4' onClick={AddingUser}>Add User</button>
    </div>
  )
}

export default AddUser