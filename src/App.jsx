import Login from './pages/Login';
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
        </Routes> : <Login />
      }
    </>
  )
}

export default App
