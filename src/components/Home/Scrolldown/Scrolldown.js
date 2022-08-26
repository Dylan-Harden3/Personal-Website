import { Link } from "react-scroll";
import "./Scrolldown.css";

const Scrolldown = () => {
  return (
    <Link
      className="hidden sm:block sm:py-16 lg:py-32 bg-darkBlue"
      duration={100}
      smooth
      offset={-200}
      to="About"
    >
      <div className="mouse mx-auto">
        <div className="wheel"></div>
      </div>
      <div className="mx-auto">
        <span className="scroll-arrow mx-auto"></span>
        <span className="scroll-arrow mx-auto"></span>
      </div>
    </Link>
  );
};

export default Scrolldown;
