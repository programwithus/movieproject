import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import l from "lodash";

const StarRating = ({ rating }) => {
  const numberOfStars = l.range(0, rating);
  console.log(numberOfStars);
  return (
    <div>
      {numberOfStars.map((star) => (
        <FontAwesomeIcon key={star} icon={faStar} style={{ color: "orange" }} />
      ))}
    </div>
  );
};

export default StarRating;
