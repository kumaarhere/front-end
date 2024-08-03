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
import JobDesc from './components/JobDesc';
import ApplyJob from './components/ApplyJob';
import AppliedJobs from './components/AppliedJobs';
import Profile from './components/Profile';

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
        <Route path="/company/:jobId" element={<JobDesc />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
         <Route path="/dashboard/profile" element={<Profile />} />
       
        <Route path="/applied-jobs" element={<AppliedJobs/>} />
        



       </Routes>
       
       </BrowserRouter>
       <ToastContainer autoClose={5000}/>
    </div>
  );
}

export default App;
