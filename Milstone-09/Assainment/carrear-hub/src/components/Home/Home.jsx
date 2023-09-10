import React, { useState } from "react";
import Hero from "./Hero/Hero";
import JobCategorys from "./JobCategorys/JobCategorys";
import JobFeatures from "./JobFeatures/JobFeatures";
import { useLoaderData } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";
import JobHeader from "../JobDetails/JobHeader";

const Home = () => {
  const jobs = useLoaderData();
  const [jobId, setJobId] = useState(0);

  return (
    <div className="mt-[-20px]">
      {jobId ? (
        <>
          <JobHeader></JobHeader>
          <JobDetails jobs={jobs} jobId={jobId}></JobDetails>
        </>
      ) : (
        <>
          <Hero></Hero>
          <JobCategorys></JobCategorys>
          <JobFeatures jobs={jobs} setJobId={setJobId}></JobFeatures>
        </>
      )}
    </div>
  );
};

export default Home;
