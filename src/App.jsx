import Login from './pages/Login';
import SignUp from './pages/Register';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

let currentUser = {
  loggedIn: false
}

function App() {

  return (
    <>

      {currentUser.loggedIn ?
        <Routes>
          <Route path='/' element={<ResponsiveAppBar />} />
        </Routes> : <Routes>
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      }
    </>
  )
}

export default App
