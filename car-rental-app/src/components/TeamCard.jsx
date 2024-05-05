import React from "react";

function TeamCard(props) {
  return (
    <div>
      <img src="" alt="team-member-image" />
      <div>
        <h3>{props.name}</h3>
        <Icon />
      </div>
    </div>
  );
}

export default TeamCard;
