import React from "react";
import Section from "../../Molecules/Section/Section";
import "./DetailsPrimaryPanel.css";

const DetailsPrimaryPanel = ({ info, Loading }) => {
  let characterTitle =
    info.characters.length > 0 ? "Characters" : "No characters found";
  let teamTitle = info.team.length > 0 ? "Teams" : "No teams found";
  let locationTitle =
    info.location.length > 0 ? "Location" : "No locations found";

  return (
    <div className="details">
      <Section
        title={characterTitle}
        content={info.characters}
        icon={info.character_icons}
        L={Loading}
      />
      <Section
        title={teamTitle}
        content={info.team}
        icon={info.team_icons}
        L={Loading}
      />
      <Section
        title={locationTitle}
        content={info.location}
        icon={info.location_icons}
        L={Loading}
      />
    </div>
  );
};

export default DetailsPrimaryPanel;
