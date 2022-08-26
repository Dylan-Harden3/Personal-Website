import travelez from "../../../assets/projects/travelez/thumbnail.png";
import personalWebsite from "../../../assets/projects/personalwebsite/thumbnail.png";
import raytracer from "../../../assets/projects/raytracer/thumbnail.PNG";
import horticulture from "../../../assets/projects/horticulture/Hort2.PNG";
import freelook from "../../../assets/projects/freelook/thumbnail.PNG";
import rasterizer from "../../../assets/projects/rasterizer/thumbnail.PNG";
import database from "../../../assets/projects/database/thumbnail.png";
import ProjectIcons from "../ProjectIcons/ProjectIcons";

const ProjectTile = (props) => {
  const thumbnails = [
    travelez,
    horticulture,
    personalWebsite,
    raytracer,
    freelook,
    rasterizer,
    database,
  ];

  return (
    <div
      className="bg-altBlue rounded-2xl w-min p-4 hover:cursor-pointer shadow-lg"
      onClick={props.onProjectSelect}
    >
      <div className="w-60 h-24 flex justify-between">
        <div className="flex flex-col justify-between">
          <h3>{props.title}</h3>
          <ProjectIcons icons={props.icons} />
        </div>
        <img
          src={thumbnails[props.thumbnail]}
          className="rounded-md aspect-square"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProjectTile;
