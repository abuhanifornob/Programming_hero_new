import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import calculateAverage from "../../utilities/calculateAverageArryOfObject";
import ProjectsDetails from "./projectsDetails";

const Statistic = () => {
  const mark = useLoaderData();
  const averageMarks = calculateAverage(mark, "marks");

  return (
    <div className="flex justify-between my-10">
      <div className="bg-slate-400 p-5 rounded-lg mr-4">
        <h2 className="text-center text-2xl font-semibold text-white mb-4">
          Project Information With Link
        </h2>
        {mark.map((project) => (
          <ProjectsDetails key={project.id} project={project}></ProjectsDetails>
        ))}
      </div>
      <div className="">
        <div className="bg-orange-400 shadow-lg rounded-lg ">
          <div className="ml-10 py-4">
            <h2 className="text-2xl font-bold">Assignment Analytics</h2>
            <div className="flex justify-start items- mt-5">
              <div>
                <span className="text-red-200 font-extrabold text-6xl">
                  &#9733;
                </span>
              </div>
              <div className="ml-3">
                <h2 className="text-3xl font-extrabold text-white">
                  {averageMarks}
                </h2>
                <p className="font-bold text-white">Avg Assignment Mark</p>
              </div>
            </div>
          </div>

          <AreaChart
            width={700}
            height={300}
            data={mark}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />

            <YAxis />
            <Label value="marks" offset={0} position="insideBottom" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="black"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="projectTitle"
              stroke="black"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
