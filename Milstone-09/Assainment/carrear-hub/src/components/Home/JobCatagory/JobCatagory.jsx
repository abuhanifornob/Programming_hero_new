import React from "react";

const JobCatagory = ({ job }) => {
  const { jobname, available, icon } = job;
  return (
    <div className="bg-base-100 shadow-xl p-10">
      <figure>
        <icon className="text-3xl">{icon}</icon>
      </figure>
      <div className=" mt-4">
        <h2 className="text-xl font-semibold">{jobname}</h2>
        <p className="mt-2">{available} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCatagory;
