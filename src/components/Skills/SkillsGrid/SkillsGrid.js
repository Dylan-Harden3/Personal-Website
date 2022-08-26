import { useState } from "react";
import SkillsGridTile from "./SkillsGridTile/SkillsGridTile";
import Toggle from "../../Utils/Toggle/Toggle";

const SkillsGrid = (props) => {
  const [showAllTiles, setShowAllTiles] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-start max-w-[16rem] gap-4 mb-4 mx-auto">
        {props.skills.map((skill, index) => {
          return (
            <SkillsGridTile
              key={index}
              text={skill}
              hidden={index > 3 && !showAllTiles}
            />
          );
        })}
      </div>
      <Toggle showAllTiles={showAllTiles} setShowAllTiles={setShowAllTiles} />
    </>
  );
};

export default SkillsGrid;
