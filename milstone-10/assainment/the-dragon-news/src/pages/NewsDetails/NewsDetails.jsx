import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const newsDetail = useLoaderData();
  const { title, image_url, category_id, details } = newsDetail;

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-5">Dragon News</h2>
      <div>
        <img className="mb-5" src={image_url} alt="" />
        <p className="text-3xl font-extrabold mb-5">{title}</p>
        <p className="text-lg font-serif leading-8 mb-5">{details}</p>
      </div>
      <button className="bg-red-500">
        <Link to={`/category/${category_id}`} className="flex items-center">
          <FaArrowLeft></FaArrowLeft>
          <p> All news in this category</p>
        </Link>
      </button>
    </div>
  );
};

export default NewsDetails;
