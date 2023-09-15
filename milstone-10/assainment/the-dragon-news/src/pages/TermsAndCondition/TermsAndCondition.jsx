import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur
        debitis accusantium quia, doloribus, ex, nisi voluptatibus odio
        cupiditate laboriosam ipsa magni dolorum distinctio adipisci illum
        soluta iure consequatur repellat.
      </p>
      <Link to={"/signup"}>Back To Registration</Link>
    </div>
  );
};

export default TermsAndCondition;
