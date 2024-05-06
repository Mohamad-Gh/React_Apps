import React from "react";
import { useState } from "react";

import TeamCard from "./TeamCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";

import "./CCarousel.css";
import leaders from "../Assets/leadMembers.json";
import { Button } from "@mui/material";

function CCarousel() {
  const [index, setIndex] = useState("1");

  return (
    <div className="flex-team">
      <ArrowBackIosNewIcon className="arrow arrow-left" />
      {leaders.map((leader, indx) => {
        return index == indx ? (
          <TeamCard
            key={indx}
            img={leader.img}
            name={leader.name}
            description={leader.description}
          />
        ) : null;
      })}

      {console.log(leaders)}
      {/* <TeamCard
        img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="James J"
        description="Use text here "
      /> */}
      {/* <TeamCard
        img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="James J"
        description="Use text here "
      /> */}
      <ArrowForwardIosIcon className="arrow arrow-right" />
      <div className="icons">
        <CircleIcon className="icon" />
      </div>
    </div>
  );
}
export default CCarousel;
