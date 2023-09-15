import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const { user, signUpWithEmailAndPassword } = useContext(AuthContext);

  const defaultsFormData = {
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  };

  // Initialize the state with the defaults
  const [formData, setFormData] = useState(defaultsFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the formData state with the new values while preserving the other values
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the email and password values from the formData object
    const { email, password, name, photoUrl } = formData;
    // Handle login logic here (e.g., send login request to a server)
    console.log("Name:", name);
    console.log("PhotoUrl:", photoUrl);
    console.log("Email:", email);
    console.log("Password:", password);
    signUpWithEmailAndPassword(email, password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        alert("Uer Registart Success");
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
      });
  };

  const handleCheckTremsAndCondition = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex flex-col items-center justify-center w-[50%] mx-auto bg-gray-100 mt-10">
      <h2 className="text-2xl font-semibold my-5">Login your account</h2>
      <div className="bg-white p-8 rounded-lg w-[90%] mx-auto shadow-md mb-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name} // Access email from formData
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo Url
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              value={formData.photoUrl} // Access email from formData
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // Access email from formData
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password} // Access password from formData
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <input
                onClick={handleCheckTremsAndCondition}
                type="checkbox"
                name="agreeToTerms"
                required
              />
              <span className="ml-3">
                I agree to the{" "}
                <a href="/terms" className="text-blue-500">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              disabled={!checked}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-center">
          Your Have An Account ? Please <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
