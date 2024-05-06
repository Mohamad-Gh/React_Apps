import React from "react";
import InfoIcon from "@mui/icons-material/Info";

function TeamCard(props) {
  return (
    <div className="teamCardBox">
      <img width="100%" src={props.img} alt="team-member-image" />
      <div>
        <h3>{props.name}</h3>
        <InfoIcon className="teamCardIcon" />
      </div>
      <p className="teamCardDescriptoin">{props.description}</p>
    </div>
  );
}

export default TeamCard;
