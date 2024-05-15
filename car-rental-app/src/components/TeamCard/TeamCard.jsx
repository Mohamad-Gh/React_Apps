import { useState } from "react";

import InfoIcon from "@mui/icons-material/Info";

import "./teamCard.css";

function TeamCard(props) {
  const [mouse, setMouse] = useState(false);

  const handleMouseOver = () => {
    setMouse(true);
  };

  const handleMouseOut = () => {
    setMouse(false);
  };

  return (
    <div className="teamCardBox">
      <img src={props.img} alt="team-member-image" />
      <div>
        <h3>{props.name}</h3>
        <InfoIcon
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="teamCardIcon"
        />
      </div>
      {mouse && <p className="teamCardDescriptoin">{props.description}</p>}
    </div>
  );
}

export default TeamCard;
