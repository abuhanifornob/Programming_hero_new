import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const defaultsFormData = {
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
    const { email, password } = formData;
    // Handle login logic here (e.g., send login request to a server)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[50%] mx-auto bg-gray-100 mt-10">
      <h2 className="text-2xl font-semibold my-5">Login your account</h2>
      <div className="bg-white p-8 rounded-lg w-[90%] mx-auto shadow-md mb-10">
        <form onSubmit={handleSubmit}>
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-center">
          Dont’t Have An Account ? <Link to={"/signup"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
