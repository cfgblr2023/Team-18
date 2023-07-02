/ "use client"
// import React, { useState } from 'react'
// import { auth } from './firebase';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// // import Verify from './Lottie/Verify'
// const SignUp= () => {

//   const [phone, setPhone] = useState('+91');
//   const [hasFilled, setHasFilled] = useState(false);
//   const [otp, setOtp] = useState('');

//   const generateRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // ...
//       }
//     }, auth);
//   }

//   const handleSend = (event) => {
//     event.preventDefault();
//     setHasFilled(true);
//     generateRecaptcha();
//     let appVerifier = window.recaptchaVerifier;
//     signInWithPhoneNumber(auth, phone, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // return (
//         //     <>
//         //             {/* <Mainpage
//         //              */}
//         //              <NavLink to ="/"/>
//         //     </>
//         // )
//       }).catch((error) => {
//         // Error; SMS not sent
//         console.log(error);
//       });
//   }
  
//   const verifyOtp = (event) => {
//     let otp = event.target.value;
//     setOtp(otp);

//     if (otp.length === 6) {
//       // verifu otp
//       let confirmationResult = window.confirmationResult;
//       confirmationResult.confirm(otp).then((result) => {
//         // User signed in successfully.
//         let user = result.user;
//         console.log(user);
//         alert('User signed in successfully');
//         // ...
//       }).catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         // ...
//         alert('User couldn\'t sign in (bad verification code?)');
//       });
//     }
//   }
  

//   if(!hasFilled){
//     return (
//         <div style={{
//             display: "flex",
//             flexDirection:"column",
//             alignItems:"center",
//             justifyContent:"center",
//             height:"100vh",
//             width:"100vw",
//             // backgroundColor:"black"
//             }}>
//         {/* <Verify/> */}
//         <div style={{ width: '300px'}}>
//           <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
//             <div style={{ padding: '10px'}}>Enter your phone number</div>
//             <form onSubmit={handleSend}>
//               <input style={{ width: '230px'}} variant='outlined' autoComplete='off' label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
//               <button type='submit' variant='contained' style={{ width: '240px', marginTop: '20px',padding:"5px"}}>Send Code</button>
//             </form>
//           </div>
//         </div>
//         <div id="recaptcha"></div>
//       </div>
//     ) 
//   } else {
//     return (
//       <div className='app__container'>
//         <divd style={{ width: '300px'}}>
//           <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
//             <h4 style={{ padding: '20px'}} variant='h5' component='div'>Enter the OTP</h4>
//               <input style={{ width: '240px'}} variant='outlined' label='OTP ' value={otp} onChange={verifyOtp} />
How does our application solve the problem
//Automation of volenteer tasks to the volenteer
//Using AI to generate learning modules
//Fund Rasing in a transparent way
//Hype Volenteer Reqrutement by gamification
//Specialised courses for women
//Online and Offline Communication Channels

//           </div>
//         </divd>
//         <div id="recaptcha"></div>
//       </div>
//     )
//   }
// }

// export default SignUp;


import React,{useState} from 'react';
// import Verify from './Verify';
import { auth } from "./Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import OtpInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import { CgSpinner } from "react-icons/cg";
const SignUp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> CODE A PROGRAM
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};


export default SignUp