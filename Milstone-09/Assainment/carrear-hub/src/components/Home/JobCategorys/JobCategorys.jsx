import React from "react";
import account from "../../../assets/Icons/accounts 1.png";
import business from "../../../assets/Icons/business 1.png";
import market from "../../../assets/Icons/social-media 1.png";

import JobCatagory from "../JobCatagory/JobCatagory";
const JobCategorys = () => {
  const jobArray = [
    {
      id: 1,
      jobname: "Software Engineer",
      icon: "👨‍💻",
      available: 100,
    },
    {
      id: 2,
      jobname: "Graphic Designer",
      icon: "🎨",
      available: 20,
    },
    {
      id: 3,
      jobname: "Data Scientist",
      icon: "📊",
      available: 20,
    },
    {
      id: 4,
      jobname: "Project Manager",
      icon: "📅",
      available: 5,
    },
    {
      id: 5,
      jobname: "Marketing Specialist",
      icon: "📈",
      available: 5,
    },
    {
      id: 6,
      jobname: "UI/UX Designer",
      icon: "🖌️",
      available: 100,
    },
    {
      id: 7,
      jobname: "Customer Support",
      icon: "📞",
      available: 150,
    },
    {
      id: 8,
      jobname: "Accountant",
      icon: "💰",
      available: 2,
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-center text-3xl font-extrabold ">
        Job Category List
      </h3>
      <p className="text-center font-serif  mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mt-5">
        {jobArray.map((job) => (
          <JobCatagory key={job.id} job={job}></JobCatagory>
        ))}
      </div>
    </div>
  );
};

export default JobCategorys;
