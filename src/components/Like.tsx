import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Like = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer", fontSize: "24px", color: "red" }}
    >
      {isFilled ? <FaHeart /> : <CiHeart />}
    </div>
  );
};

export default Like;
