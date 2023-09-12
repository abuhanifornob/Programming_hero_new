import React, { useContext, useState } from "react";
import isStrongPassword from "../../utilities/strongPasswordCheck";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setEror] = useState(false);
  const {
    user,
    loginWithGoogle,
    loginWithGitHub,
    signUpWithEmail,
    userProfileUpdate,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

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
    signUpWithEmail(email, password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        userProfileUpdate(signUpUser, yourName)
          .then(() => {
            toast.success(`${yourName} is Sinput Success`);
            setFormData({
              email: "",
              password: "",
              yourName: "",
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleWithGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success(`${loginUser.displayName} is Logi In Successfuly `);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogInWithGitHub = () => {
    loginWithGitHub()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success(`${loginUser.displayName} is Logi In Successfuly `);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
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
          {/* <p className="text-red-700 font-bold">{firebaseError}</p> */}
          <p>
            Already Have an Account? Please{" "}
            <Link
              to="/signin"
              className="font-bold text-lg hover:text-orange-400"
            >
              Log In
            </Link>
          </p>
          <div>
            <button
              onClick={handleWithGoogleLogin}
              className="btn btn-outline w-full"
            >
              <i className="">
                <BsGoogle></BsGoogle>
              </i>{" "}
              Login with Google
            </button>

            <button
              onClick={handleLogInWithGitHub}
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
