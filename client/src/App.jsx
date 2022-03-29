import { Navbar } from './components/navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from './components/Signup'
import { Login } from './components/login';
import { User } from './components/AllUsers';
import { Users } from './components/Users';
import Logout from './components/Logout';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/signup" element={<SignUp />}>
      </Route>

      <Route path="/login" element={<Login />}>
      </Route>

      <Route path="/allusers" element={<User />}>
      </Route>

      <Route path="/user">
        <Route index element={<Users />} />
        <Route path=":user_id" element={<Users />} />
        </Route>
      {/* <Route path="/user" element={<Users />} /> */}

      <Route path='/logout' element={<Logout/>} />

      <Route exact path="/" element={'<h1>HomePage</h1>'}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App
