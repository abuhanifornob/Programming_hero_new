import React, { useState } from "react";

import JobFeature from "../JobFeature/JobFeature";

const JobFeatures = ({ jobs, setJobId }) => {
  const [josbsFeatures, setJosbsFeatures] = useState(jobs.slice(0, 4));
  const handleSeeAllJobs = () => {
    setJosbsFeatures(jobs);
  };
  const handleJobDetails = (id) => {
    setJobId(id);
  };
  return (
    <div className="my-16">
      <h3 className="text-center text-3xl font-extrabold ">
        Featured Jobs {jobs.length}
      </h3>
      <p className="text-center font-serif  mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {josbsFeatures.map((job) => (
          <JobFeature
            key={job.id}
            job={job}
            handleJobDetails={handleJobDetails}
          ></JobFeature>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handleSeeAllJobs}
          className="mx-auto text-center  text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded "
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default JobFeatures;
