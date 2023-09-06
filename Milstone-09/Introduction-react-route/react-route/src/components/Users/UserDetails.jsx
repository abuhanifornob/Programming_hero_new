import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { address, company, name, username, phone, email } = userDetails;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-[90%] mx-auto bg-amber-300 text-center p-10 shadow-lg">
      <div>
        <h1>Name: {name}</h1>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>User: {username}</p>
        <address>
          Address: Street-{address.street},City-{address.city},Zip-
          {address.zipcode}
        </address>
        <button onClick={handleGoBack}>Go Back To Users</button>
      </div>
    </div>
  );
};

export default UserDetails;
