import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
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
    <section style={{
      backgroundColor: '#FCD34D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 style={{
          textAlign: 'center',
          color: '#000000',
          fontWeight: '500',
          fontSize: '1.5rem',
          marginBottom: '1.5rem'
        }}>
            👍Login Success
          </h2>
        ) : (
          <div style={{
          width: '20rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}>
            <h1 style={{
            textAlign: 'center',
            lineHeight: '1.4',
            color: '#000000',
            fontWeight: '500',
            fontSize: '1.875rem',
            marginBottom: '1.5rem'
          }}>
              Welcome to <br /> CODE A PROGRAM
            </h1>
            {showOTP ? (
              <>
                <div style={{
                backgroundColor: '#000000',
                color: '#F59E0B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                margin: '0 auto',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#000000',
                textAlign: 'center'
              }}
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
                  style={{
                backgroundColor: '#000000',
                width: '100%',
                display: 'flex',
                gap: '0.25rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.625rem',
                color: '#F59E0B',
                borderRadius: '0.25rem'
              }}
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div style={{
                backgroundColor: '#000000',
                color: '#F59E0B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                margin: '0 auto',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#000000',
                textAlign: 'center'
              }}
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  style={{
                backgroundColor: '#000000',
                width: '100%',
                display: 'flex',
                gap: '0.25rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.625rem',
                color: '#F59E0B',
                borderRadius: '0.25rem'
              }}
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

export default App;