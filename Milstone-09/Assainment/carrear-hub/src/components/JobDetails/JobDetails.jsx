/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import locationImg from "../../assets/Icons/Location Icon.png";
import salaryImg from "../../assets/Icons/Frame.png";
import jobTitleImg from "../../assets/Icons/Frame-1.png";
import phoneImg from "../../assets/Icons/Frame-2.png";
import emailImg from "../../assets/Icons/Frame-3.png";
import addImg from "../../assets/Icons/Frame-4.png";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import toast from "react-hot-toast";

const JobDetails = ({ jobs, jobId }) => {
  const existingJob = jobs.find((job) => job.id === jobId);

  const {
    companyLogo,
    companyName,
    contactInformation,
    educationalRequirements,
    experiences,
    fulltimeOrPartTime,
    jobDescription,
    jobResponsibility,
    jobTitle,
    location,
    remoteOrOnsite,
    salary,
  } = existingJob;
  const handleJobApplay = (id) => {
    const applayedJobs = getShoppingCart();
    if (applayedJobs.hasOwnProperty(id)) {
      toast.error("Already Applay This JoB");
    } else {
      addToDb(id);
      toast.success("Appaly Success");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
      <div className="col-span-2 px-10 shadow-lg">
        <h4 className="text-3xl font-semibold mb-2">
          <span>Job Description </span>
        </h4>
        <p className="text-lg font-medium font-serif">{jobDescription}</p>
        <h4 className="text-3xl font-semibold my-4">Job Responsibility</h4>
        <p className="text-lg font-medium font-serif">
          {jobResponsibility.map((res, id) => (
            <p key={id}>
              {id + 1}. {res}
            </p>
          ))}
        </p>
        <h4 className="text-3xl font-semibold my-4">
          Educational Requirements:
        </h4>
        <p className="text-lg font-medium font-serif">
          {educationalRequirements}
        </p>
        <h4 className="text-3xl font-semibold my-2">Experiences:</h4>
        <p className="text-lg font-medium font-serif">{experiences}</p>
      </div>
      <div className="py-2 shadow-lg">
        <div className="bg-emerald-200 shadow-lg text-stone-700 p-3">
          <div>
            <h3 className="text-3xl font-semibold mb-5">Job Details</h3>

            <div className="flex items-center">
              <img className="mr-2" src={salaryImg} alt="" />
              <p className="text-lg font-semibold mt-1"> {salary}</p>
            </div>
            <div className="flex items-center ">
              <img className="mr-2" src={jobTitleImg} alt="" />
              <p className="text-lg font-semibold mt-1">{jobTitle}</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold my-5">Contact Information</h3>
            <div className="flex items-center">
              <img className="mr-2" src={phoneImg} alt="" />
              <p className="text-lg font-semibold mt-1">
                {contactInformation.phone}
              </p>
            </div>
            <div className="flex items-center">
              <img className="mr-2" src={emailImg} alt="" />
              <p className="text-lg font-semibold mt-1">
                {contactInformation.email}
              </p>
            </div>
            <div className="flex items-center">
              <img className="mr-2" src={addImg} alt="" />
              <p className="text-lg font-semibold mt-1">{location}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleJobApplay(jobId)}
          className="btn w-full mt-5 mx-auto text-center  text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
