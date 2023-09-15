/* eslint-disable react/prop-types */
import moment from "moment";
import React from "react";
import { FaBookmark, FaEye, FaShare, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CategoryNewsCart = ({ catNews }) => {
  const { author, title, image_url, details, _id, rating, total_view } =
    catNews;

  return (
    <div className="mb-10 bg-base-100 shadow-lg">
      <div className="flex justify-between items-center bg-amber-50 p-5">
        <div className="flex items-center">
          <img
            src={author.img}
            alt=""
            className="w-16 h-16 rounded-full mr-5"
          />
          <div>
            <p className="text-xl font-bold mb-2">{author?.name}</p>
            <p className="text-md font-bold">
              {moment(author.published_date).format("yy-M-D")}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaBookmark className="mr-5 text-3xl "></FaBookmark>
          <FaShareAlt className="text-3xl" />
        </div>
      </div>
      <div className="mt-5 p-7">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img className="mt-5" src={image_url} alt="" />

        <p className="mt-5 font-thin text-xl">
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)} ..........
              <>
                <Link
                  className="text-red-400 text-xl font-bold"
                  to={`/news/${_id}`}
                >
                  {" "}
                  Read More
                </Link>
              </>
            </>
          )}
        </p>
      </div>
      <div className="flex justify-between px-5 py-6 bg-orange-100">
        <div className="flex items-center">
          <Rating
            style={{ maxWidth: 250 }}
            value={rating.number}
            readOnly
            className="text-2xl"
          />
          <p className="text-2xl ml-3">{rating.number}</p>
        </div>
        <div className="flex items-center text-2xl">
          <FaEye className="mr-5" />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCart;
