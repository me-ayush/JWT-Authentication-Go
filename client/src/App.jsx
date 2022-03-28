import { Navbar } from './components/navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from './components/Signup'
import { Login } from './components/login';
import { User } from './components/AllUsers';
import { Users } from './components/Users';

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

      <Route path="/user" element={<Users />}>
      </Route>

      <Route exact path="/" element={'<h1>HomePage</h1>'}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App
