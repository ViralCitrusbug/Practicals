import React,{useContext,useState ,useEffect} from 'react'
import { UserDataContext } from './UserData'
import { useParams } from 'react-router-dom'
import { useNavigate  } from "react-router-dom";
function EditUser(props) {
    const {users,edituser} = useContext(UserDataContext)
    const {id} = useParams()
    const nav = useNavigate()
    const [selectedUser, setSelectedUser] = useState({
        name:"",
        id:""
    })
    const submitUser = () => {
        edituser(selectedUser)
        nav('/')
    }
    const changeName = (e) => {
        setSelectedUser({
            ...selectedUser,name:e.target.value
        })
    }
    useEffect (
        () => {
            const user_id = id
            const user_selected = users.find( (user) => user.id == user_id)
            setSelectedUser(user_selected)
        },[id,users]
    )
    return (
    <div className='d-flex'>
        <input className='form-control w-25' onChange={changeName} value={selectedUser.name} type="text" />
        <button onClick={submitUser} className='btn btn-primary'>Edit User</button>
    </div>
  )
}

export default EditUser