import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/scale-extreme.css";
import tooltip from "../../../assets/icons/tooltip.svg";

const Tooltip = (props) => {
  return (
    <Tippy duration={[500, 250]} inertia={true} content={props.content}>
      <img src={tooltip} className="inline w-4 h-4" alt="" />
    </Tippy>
  );
};

export default Tooltip;
