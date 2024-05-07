import { useState } from "react";

import TeamCard from "./TeamCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";

import "./CCarousel.css";
import leaders from "../Assets/leadMembers.json";

function CCarousel() {
  const [index, setIndex] = useState(1);

  const handleClickBackward = () => {
    setIndex(index == 0 ? leaders.length - 1 : index - 1);
  };
  const handleClickForward = () => {
    setIndex(index == leaders.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="flex-team">
      <ArrowBackIosNewIcon
        onClick={handleClickBackward}
        className="arrow arrow-left"
      />
      {leaders.map((leader, indx) => {
        return index == indx ? (
          <TeamCard
            key={leader.id}
            img={leader.img}
            name={leader.name}
            description={leader.description}
          />
        ) : null;
      })}
      <ArrowForwardIosIcon
        onClick={handleClickForward}
        className="arrow arrow-right"
      />
      <div className="icons">
        {leaders.map((_, indx) => (
          <CircleIcon
            // onClick={setIndex(indx)}
            fontSize="x-small"
            className={index == indx ? null : "icon"}
          />
        ))}
      </div>
    </div>
  );
}
export default CCarousel;
