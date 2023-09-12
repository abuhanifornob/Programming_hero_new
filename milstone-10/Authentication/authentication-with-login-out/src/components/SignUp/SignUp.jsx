import { Container } from "postcss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/initilize.config";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/Bs";
import isStrongPassword from "../../utilits/strongPasswordCheck";
import toast from "react-hot-toast";

const SignUp = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [error, setEror] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    yourName: "",
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
    const { email, password, yourName } = formData;
    const strongPassword = isStrongPassword(password);
    // Validation
    setEror(false);
    if (!strongPassword) {
      setEror(true);
      return;
    }
    createUserEmailPassword(email, password, yourName);
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

  const createUserEmailPassword = (email, password, name) => {
    setFirebaseError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const logginUser = result.user;
        console.log(result.user);
        //............Update Profile name.......................
        updateProfile(logginUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setFirebaseError(error.message);
            console.log("Error ", error.message);
          });

        // ...................... Send Email Varification ..................
        sendEmailVerification(result.user)
          .then(() => {
            toast.success("Please Check Your Email For Verification");
          })
          .catch((error) => {
            console.error("Error", error.message);
          });
      })
      .catch((error) => {
        setFirebaseError(error.message);
        console.log("Error ", error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-orange-300 p-10 rounded-lg shadow-xl ">
          <h2 className="text-3xl font-extrabold ">Please SignUP !!!</h2>
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
              <div>
                <label htmlFor="password" className="">
                  Your Name
                </label>
                <input
                  id="yourName"
                  name="yourName"
                  type="text"
                  required
                  onChange={handleInputChange}
                  value={formData.yourName}
                  className="appearance-none my-3 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Strong Password Check */}
            {error && (
              <p className="text-sm text-red-700 font-bold">
                Password must contain at least 8 characters, including one
                uppercase letter, one lowercase letter, one number, and one
                special character.
              </p>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-red-700 font-bold">{firebaseError}</p>
          <p>
            Already Have an Account? Please{" "}
            <Link
              to="/login"
              className="font-bold text-lg hover:text-orange-400"
            >
              Log In
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

export default SignUp;
