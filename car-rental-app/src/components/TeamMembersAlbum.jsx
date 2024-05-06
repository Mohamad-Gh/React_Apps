import React from "react";
import TeamCard from "./TeamCard";

import members from "../Assets/staff.json";

function TeamMembersAlbum() {
  return (
    <div>
      <div className="title-header">
        <h3>Meet Our Team</h3>
        {/* <h2>Our rental fleet</h2> */}
        <p>
          At DriveAway Rentals, we pride ourselves on offering a seamless and
          personalized experience to every customer.
        </p>
        {members.map((member, indx) => {
          <TeamCard
            key={member.id}
            img={member.img_url}
            name={member.name}
            description={member.description}
          />;
        })}
      </div>
    </div>
  );
}

export default TeamMembersAlbum;
