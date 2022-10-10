import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from './UserData'
import UserList from './UserList'
function Home() {
    const {users} = useContext(UserDataContext)
    console.log(users)
  return (
    <div>
        <div className='container p-5'>
            <Link className="btn btn-dark" to="/add">Add User</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(
                        (user,index) => <UserList key={user.id} id={user.id} index={index + 1} email={user.email} name={user.name} />
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home