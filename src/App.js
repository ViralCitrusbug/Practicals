import './App.css';
import Home from './componants/Home';
import AddUser from './componants/AddUser';
import EditUser from './componants/EditUser';
import { Routes, Link ,Route } from 'react-router-dom';
import { UserDataProvider } from './componants/UserData';
function App() {
  return (
      
        <>
          <UserDataProvider>
            <h1>NavBar</h1>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/add" element={<AddUser />}/>
              <Route path="/edit/:id" element={<EditUser />}/>          
            </Routes>
          </UserDataProvider>
        </>
      
 
  );
}

export default App;
