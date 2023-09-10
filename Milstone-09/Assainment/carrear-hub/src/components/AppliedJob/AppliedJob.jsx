import React from "react";
import { useLoaderData } from "react-router-dom";
import Applied from "./Applied";

const AppliedJob = () => {
  const applyedJobs = useLoaderData();
  console.log(applyedJobs);
  return (
    <div>
      <h1 className="text-center my-20">Applayed Job Information</h1>
      <div className="my-10">
        {applyedJobs.map((job) => (
          <Applied key={job.id} job={job}></Applied>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
