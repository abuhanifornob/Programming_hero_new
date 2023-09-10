import React from "react";
import googleImg from "../../assets/All Images/google-1-1 1.png";
import locationImg from "../../assets/Icons/Location Icon.png";
import salaryImg from "../../assets/Icons/Frame.png";

const Applied = ({ job }) => {
  const {
    companyLogo,
    companyName,

    fulltimeOrPartTime,

    jobTitle,
    location,
    remoteOrOnsite,
    salary,
  } = job;
  return (
    <div className="flex justify-between items-center px-10 my-10 bg-base-100 shadow-lg">
      <div className="flex items-center ">
        <div>
          <img src={googleImg} alt="" />
        </div>
        <div className="ml-10">
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
        </div>
      </div>

      <div>
        <button className="text-center  text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Applied;
