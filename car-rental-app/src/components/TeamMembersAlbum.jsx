import React from "react";
import TeamCard from "./TeamCard";

import members from "../Assets/staff.json";
import "./teamMembersAlbum.css";

function TeamMembersAlbum() {
  return (
    <div className="full-container">
      <div className="containeralbum">
        <div className="title-header">
          <h3>Meet Our Team</h3>
          <p>
            At DriveAway Rentals, we pride ourselves on offering a seamless and
            personalized experience to every customer.
          </p>
        </div>
        <div className="team-Album">
          {members.map((member) => (
            <TeamCard
              key={member.id}
              img={member.img_url}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
        //{" "}
      </div>
      //{" "}
    </div>
  );
}

export default TeamMembersAlbum;
