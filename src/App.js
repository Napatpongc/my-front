import User from './pages/User';
//import Conf_Pass from './pages/Conf_Pass';
import Table from './pages/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Plan from './pages/plan'
import Male from './pages/male'

export function App() {
  return (
       <Router>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Login' element={<Login/>} />
           <Route path='/Register' element={<Register/>} />
           <Route path='/Login/Plan/User' element={<User/>} />
           <Route path='/Register/Male/Plan/User' element={<User/>} />
           <Route path='/Register/male/plan/User/male' element={<Male/>} />
           <Route path='/Login/plan/User/male' element={<Male/>} />
           <Route path='/Register/Male' element={<Male/>} />
           <Route path='/Login/Plan' element={<Plan/>} />
           <Route path='/Login/plan/User/male/plan' element={<Plan/>} />
           <Route path='/Register/male/plan/User/male/plan' element={<Plan/>} />
           <Route path='/Register/Male/Plan' element={<Plan/>} />
           <Route path='/Login/Plan/Table' element={<Table/>} />
           <Route path='/Register/Male/Plan/Table' element={<Table/>} />
           
         </Routes>
       </Router>
      //<div><Home/></div>
  );
}

export default App;
