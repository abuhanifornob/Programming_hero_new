import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment/moment";

const LeftSide = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-base-100 shadow-lg">
      <h2>All Category : {category.length}</h2>
      <div className="pl-4">
        {category.map((cat) => (
          <p key={cat.id} className="text-xl font-sans mt-2">
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}
      </div>
      <div>
        <div className="mt-7">
          <img src={img1} alt="" />
          <p className="my-5 text-2xl font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex">
            <p className="mr-5 text-md font-bold">sport</p>
            <div className="flex justify-center items-center">
              <FaRegCalendar className="mr-2" />
              <p>{moment().format("ll")}</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <img src={img2} alt="" />
          <p className="my-5 text-2xl font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex">
            <p className="mr-5 text-md font-bold">sport</p>
            <div className="flex justify-center items-center">
              <FaRegCalendar className="mr-2" />
              <p>{moment().format("ll")}</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <img src={img3} alt="" />
          <p className="my-5 text-2xl font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex">
            <p className="mr-5 text-md font-bold">sport</p>
            <div className="flex justify-center items-center">
              <FaRegCalendar className="mr-2" />
              <p>{moment().format("ll")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
