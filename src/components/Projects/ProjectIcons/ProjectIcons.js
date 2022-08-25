import icons from "./icons";

const ProjectIcons = (props) => {
  return (
    <div className="flex gap-1">
      {props.icons && props.icons.map((icon, index) => {
        return <img src={icons[icon]} key={index} className="w-5 h-5" />;
      })}
    </div>
  );
};

export default ProjectIcons;
