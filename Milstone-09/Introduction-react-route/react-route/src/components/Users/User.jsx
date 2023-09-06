import React from "react";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { email, id, name, phone, username } = user;
  const navigate = useNavigate();
  const hadleDetails = () => {
    navigate(`/users/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title"> Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <div className="card-actions justify-end">
          <Link to={`/users/${id}`}>Show User Details</Link>
          <button onClick={hadleDetails} className="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
