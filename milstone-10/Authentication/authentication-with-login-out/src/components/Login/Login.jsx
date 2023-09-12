import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/Bs";
import app from "../../firebase/initilize.config";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [firebaseError, setFirebaseError] = useState("");
  const emailRef = useRef("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    signInEmailPassword(email, password);
  };

  //............. Google Loging Implemetation...............................

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        toast.success("User Registration is Success with Google");
        console.log(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  //............................ Github Login Implementation...................

  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loginUser = result.user;
        toast.success("User Registration is Success with Github");
        console.log(loginUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Sign In With Email And Password ....................

  const signInEmailPassword = (email, password) => {
    setFirebaseError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loginUser = result.user;
        const isEmailVerified = loginUser.emailVerified;
        if (!isEmailVerified) {
          toast.error("Plase first Emal Varifide");
          return;
        }

        console.log(loginUser);
        toast.success("Sign In Successfullay");
      })
      .catch((error) => {
        console.log("Error", error.message);
        setFirebaseError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const useRefEmail = emailRef.current.value;
    if (!useRefEmail) {
      toast("Please Set Your Email ID First");
      return;
    }
    sendPasswordResetEmail(auth, useRefEmail)
      .then(() => {
        toast.error("Please check Your Emali Id For Reaset Your Password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-orange-300 p-10 rounded-lg shadow-xl ">
          <h2 className="text-3xl font-extrabold ">Please Log In !!!</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  onChange={handleInputChange}
                  value={formData.email}
                  className="appearance-none my-3 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleInputChange}
                  value={formData.password}
                  className="appearance-none my-3 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-end font-bold text-xl">
            {" "}
            <button onClick={handleForgetPassword}>Forget Password</button>
          </p>
          <p className="text-red-700 font-bold">{firebaseError}</p>
          <p>
            New to this Website Please{" "}
            <Link
              to="/signup"
              className="font-bold text-lg hover:text-orange-400"
            >
              Sign Up
            </Link>
          </p>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full"
            >
              <i className="">
                <BsGoogle></BsGoogle>
              </i>{" "}
              Login with Google
            </button>

            <button
              onClick={handleGithubLogin}
              className="btn btn-outline w-full mt-3"
            >
              <i className="">
                <BsGithub />
              </i>{" "}
              Login with GitHub
            </button>

            <button className="btn btn-outline w-full mt-3">
              <i className="fab fa-facebook">
                {" "}
                <BsFacebook />
              </i>{" "}
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
