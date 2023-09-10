/* eslint-disable react/prop-types */
import React from "react";
import google from "../../../assets/All Images/google-1-1 1.png";
import locationImg from "../../../assets/Icons/Location Icon.png";
import salaryImg from "../../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const JobFeature = ({ job, handleJobDetails }) => {
  const {
    companyName,
    jobTitle,
    salary,
    remoteOrOnsite,
    location,
    fulltimeOrPartTime,
    companyLogo,
    id,
  } = job;

  return (
    <div className="bg-base-100 shadow-xl p-10">
      <figure>
        <img src={google} alt="" />
      </figure>
      <div className=" mt-4">
        <h2 className="text-xl font-semibold">{jobTitle}</h2>
        <h3 className="mt-2">{companyName}</h3>
        <div className="my-5">
          <button className="mr-3 text-center btn-outline btn-accent">
            {remoteOrOnsite}
          </button>
          <button className="text-center btn-outline btn-accent">
            {fulltimeOrPartTime}
          </button>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <img src={locationImg} alt="" />
            <p>{location}</p>
          </div>
          <div className="flex items-center ml-3">
            <img src={salaryImg} alt="" />
            <p> {salary}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleJobDetails(id)}
        className="text-center  text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded"
      >
        Job Details
      </button>
    </div>
  );
};

export default JobFeature;
