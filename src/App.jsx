import Login from './pages/Login';
import SignUp from './pages/Register';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { userAuthContext } from './context/context';

let currentUser = {
  loggedIn: false
}



function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    userName: ""
  })
  // const [title, updateTitle] = useState(null);
  // const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <userAuthContext.Provider value={{currentUser, setCurrentUser}}>
      {currentUser.loggedIn ?
        <Routes>
          <Route path='/' element={<ResponsiveAppBar />} />
        </Routes> : <Routes>
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      }
    </userAuthContext.Provider>
  )
}

export default App
