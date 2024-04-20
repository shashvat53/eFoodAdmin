import React, { useContext, useState } from 'react';
import image from '../../assets/rechaptcha.png';
import { UserContext } from '../../utils/context/UserAuthContext';
import { toast } from 'react-toastify';
import  login  from '../../helper/Auth';

const SignInForm = () => {
  const [emailAddress, setemailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useContext(UserContext)


  const submitHandler =async (event) => {

    event.preventDefault(); // Prevent the default form submission behavior

    try {

      const userData = await login(emailAddress, password); // Call the login function from the API file
      console.log('Login successful:', userData);
      
      setIsAuth(true)


    } catch (error) {

      if (error.response) {
        console.error('Login error:', error);
        setErrorMessage(error.response.data.error || 'Error logging in');
      } else {
        toast.error('Wrong Credential')
        console.error('Error:', error.message);
        setErrorMessage('The request was made but no response was received');
      }
    }
  };


  return (
    <section className="px-4 py-12 flex items-center justify-center sm:block  flex-col sm:w-[35vw] w-[80vw]  m-auto md:m-0 overflow-hidden">
      <h2 className="font-semibold text-5xl -mt-5 mb-2">Sign In</h2>
      <p className="sm:text-[1.1rem] text-gray-500 font-normal">Welcome Back</p>
      <p className="sm:text-[1.1rem] text-gray-500 font-normal mb-4">
        Want To Login Your Admin?{' '}
        <span className="text-red-500 font-bold underline cursor-pointer">Admin Login</span>
      </p>
      <span className="px-3 pb-1 bg-red-100 text-red-500 rounded-full">
        ( Branch sign in )
      </span>
      <form className="w-full mt-10" onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={emailAddress}
            onChange={(e)=>setemailAddress(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remember" className="inline-flex items-center">
            <input type="checkbox" id="remember" className="form-checkbox" />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <div className="w-full h-20 mb-4 hidden">
          {/* reCAPTCHA */}
          <div className="w-full h-20 mb-4">
  {/* Dummy reCAPTCHA */}
  <div
    className="border hidden border-gray-300 rounded-md p-4  items-center justify-center text-gray-500"
    style={{ minHeight: '78px' }}
  >
    <p>This is a dummy reCAPTCHA widget for development.</p>
  </div>
</div>        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 text-xl bg-[#e96a5a] text-white rounded-md hover:bg-[#e26d5d] focus:outline-none focus:bg-[#e9513d]"
          >
            Sign In
          </button>
        </div>
        <div className="w-full h-[2px] mt-2 bg-[#e96a5a]"></div>
      </form>
      <div>
        <p>Email :- 'admin@email.com'</p>
        <p>Password :- '12345678'</p>
      </div>
    </section>
  );
};

export default SignInForm;
