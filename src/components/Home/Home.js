import Header from "../Utils/Header/Header";
import Scrolldown from "./Scrolldown/Scrolldown";
import Tooltip from "../Utils/Tooltip/Tooltip";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  // TODO: add animation for buttons
  // TODO: add resume
  // TODO: double check Im vs I'm
  return (
    <>
      <section id="Home" className="pb-32">
        <div className="section-container flex-col justify-center md:flex-row md:flex md:justify-between items-center pt-24 md:pt-32">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl">Howdy, I'm</h4>
            <Header text="Dylan Harden" />
            <p className="sm:text-xl text-md max-w-[90%] sm:max-w-[70%] mx-auto md:mx-0">
              Im a Software Engineer and Computer Science Student{" "}
              <Tooltip content="Graduating in May 2023!" /> at Texas A&M.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center max-w-fit md:max-w-none mx-auto w-100">
              <Link
                duration={100}
                to="About"
                offset={-200}
                smooth
                className="flex justify-evenly items-center bg-lightBlue w-36 h-10 sm:w-44 sm:h-12 rounded-lg hover:cursor-pointer"
              >
                <p className="text-md sm:text-xl">Learn More</p>
                <img
                  src={require("../../assets/icons/send.svg").default}
                  alt=""
                />
              </Link>
              <div className="flex justify-evenly items-center border-2 ml-0 sm:ml-6 mt-4 sm:mt-0 w-36 h-10 sm:w-44 sm:h-12 rounded-lg hover:cursor-pointer">
                <a className=" text-md sm:text-xl" href="../../assets/me.jpg">
                  Resume
                </a>
                <img
                  src={require("../../assets/icons/download.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src={require("../../assets/homeImg.svg").default}
              className="w-80 hidden md:block"
              alt=""
            />
          </div>
        </div>
      </section>
      <Scrolldown />
    </>
  );
};

export default Home;
