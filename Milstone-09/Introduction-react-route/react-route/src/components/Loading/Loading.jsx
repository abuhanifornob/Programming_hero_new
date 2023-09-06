import React from "react";

const Loading = () => {
  console.log("loding");
  return (
    <div>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
