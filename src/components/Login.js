import { InputAdornment, TextField, Button } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import ramana from '../images/p3.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import OtpService from '../utils/OtpService';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNo: '',
    otp: ['', '', '', '', '',]
  });
  const [errors, setErrors] = useState({ mobileNo: '' });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const firstOtpInputRef = useRef(null);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  useEffect(() => {
    if (otpSent && firstOtpInputRef.current) {
      firstOtpInputRef.current.focus();
    }
  }, [otpSent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const mobileNoPattern = /^[6-9][0-9]{0,9}$/;

    setFormData({ ...formData, [name]: value });

    if (name === 'mobileNo') {
      if (value.length !== 10 || !mobileNoPattern.test(value)) {
        setErrors({ ...errors, mobileNo: 'Mobile number must be 10 digits and start with 6, 7, 8, or 9' });
      } else {
        setErrors({ ...errors, mobileNo: '' });
      }
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...formData.otp];

    if (/[0-9]/.test(value) || value === '') {
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      if (value && index < 4) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }

    if (e.key === 'Backspace' && index > 0 && !newOtp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const sendOtp = async () => {
    if (formData.mobileNo.length === 10) {
    await axios.post("http://localhost:4001/login",{mobileNo:formData.mobileNo})
    .then(async response=>{
    console.log(response)
   // setUser(response.data.record.fullName)
    const generatedOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setOtp(generatedOtp);
    try {
    console.log("Sending OTP...");
    setOtpSent(true);
    setTimer(60);
    await OtpService.sendOtp(formData.mobileNo, generatedOtp);
    } catch (error) {
    console.error("Error sending OTP:", error);
    }
    }).catch(error=>{
    console.error('User not Found, Please register', error);
    console.log(error)
    toast.warning(`${error.response.data.error}`, {
     autoClose: 5000
    })
    })
    
    
    }
    
    
    else {
    setErrors({ ...errors, mobileNo: 'Mobile number must be 10 digits' });
    }
    };
    
  const verifyOtp = () => {
    const enteredOtp = formData.otp.join('');
    console.log("Entered OTP:", enteredOtp);
    console.log("Generated OTP:", otp);
    if (enteredOtp === otp) {
      toast.success("Logged in successfully!", {
        autoClose: 5000
      });
      setOtpSent(false);
      Cookies.set('verified', true, { expires: 30 });
      navigate('/dashboard');
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className='login'>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '85vh' }}>
        <img src={ramana} alt='logo' className='rounded mb-3' style={{ width: '200px', height: 'auto' }} />
        
        <div className="border rounded shadow p-3 d-flex flex-column align-items-center bg-white" style={{ width: '100%', maxWidth: '500px' }}>
          <h4 className='fw-bold mb-4 mt-2 text-nowrap' style={{ fontFamily: 'monospace' }}>Login to Continue <i className="fa-solid fa-right-to-bracket"></i></h4>
          <TextField
            label="Mobile No"
            variant="outlined"
            className="w-100 mb-3"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            error={Boolean(errors.mobileNo)}
            helperText={errors.mobileNo}
            inputProps={{ maxLength: 10 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="bg-secondary-subtle rounded p-2">+91</span>
                </InputAdornment>
              ),
              className: 'fw-bold'
            }}
            InputLabelProps={{ className: 'fw-bold text-secondary' }}
            onKeyPress={(e) => {
              const isValidInput = /[0-9]/;
              if (!isValidInput.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={sendOtp}
            disabled={timer > 0}
            className='w-50 sendotp'
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : "Send OTP"}
          </Button>
          {otpSent && (
            <div className="d-flex flex-column align-items-center mt-3">
              <p className='fw-bold text-success'>OTP sent successfully!</p>
              <div className="d-flex justify-content-between mb-3 w-100">
                {formData.otp.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`otp-${index}`}
                    inputRef={index === 0 ? firstOtpInputRef : null} // Attach the ref to the first input field
                    variant="outlined"
                    className="text-center mx-1"
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center', fontWeight: 'bold', width: '0.8rem', height: '0.8rem' },
                    }}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleOtpChange(e, index)}
                  />
                ))}
              </div>
              <Button variant="contained" color="primary" onClick={verifyOtp} className='w-100'>
                Verify & Login
              </Button>
            </div>
          )}
          <p className='mt-3 fw-bold text-secondary'>Don't have an account? 
            <Link to='/registration' className='text-decoration-none ms-1'>
              <span className='fw-bold text-primary' style={{ cursor: 'pointer' }}>
                Register <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
