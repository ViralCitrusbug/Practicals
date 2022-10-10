import React , {useContext}from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from './UserData'
function UserList(props) {
    const { rmuser }= useContext(UserDataContext)


  return (
    <>
            <tr>
              <td>{props.index}</td>
              <td>{props.name}</td>
              <td>{props.email}</td>
              <td>
                <Link className="btn btn-danger mx-3" to={`/edit/${props.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => rmuser(props.id)} className="btn btn-outline-warning mx-3">Remove</button>
              </td>
            </tr>
    </>  
  )
}

export default UserList