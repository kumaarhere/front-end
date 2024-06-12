import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Hire from './components/Hire';
import StaffHire from './components/StaffHire';
import Registration from './components/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className=''>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/about-staff-hiring' element={<StaffHire/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>


       </Routes>
       
       </BrowserRouter>
       <ToastContainer autoClose={5000}/>
    </div>
  );
}

export default App;
