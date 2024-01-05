//this sing up page is havent used in website but may be we can use in future
import React, { useContext, useState } from 'react'
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import googlelogo from '../assets/google-icon.svg';


const Signup = () => {
    const {createUser, loginwithGoogle} =useContext(AuthContext);
    const [error,serError] = useState("error");
    // yeh do location and navi is to redirect to home page after sign up
    const location = useLocation();
    const navigate = useNavigate();
    const from= location.state?.from?.pathname || "/";


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        // AuthProvider se imformation le rha hae to create new user on signup
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Sign Up successfully!!!");
            navigate(from,{replace: true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            serError(errorMessage)
            // ..
          });
        
    }
    const handleRegister = ()=>{
        loginwithGoogle().then((result)=>{
            const user = result.user;
            alert("Sign Up successfully!!!")
            navigate(from,{replace: true})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            serError(errorMessage)
            // ..
          });
    }
  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign Up Form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />

						</div>
						<div className="relative">
							<input  id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
                        <p>Have an account? Please <a href="/login" className='text-blue-700 underline'>login</a> Here</p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-6 py-2">Submit</button>
						</div>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegister} className='block'><img src={googlelogo} alt="" className='w-12 h-12 inline-block'/>Google Login</button>
                        </div>

					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Signup