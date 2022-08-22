import Header from "../Utils/Header/Header";
import SubHeader from "../Utils/SubHeader/SubHeader";

import me from '../../assets/me.jpg'
import './About.css'
import Tooltip from "../Utils/Tooltip/Tooltip";

const About = () => {

    // TODO: add actual description
    // TODO: Double check Ims and spelling
    // TODO: make icons not brute force

    return (
        <section id="About">
            <div className="section-container md:flex justify-between">
                <div className="md:max-w-[80%] mx-auto lg:mx-0 lg:max-w-[60%] 2xl:max-w-[40%] flex flex-col justify-between">
                    <div className="about-text">
                        <Header text="About Me" />
                        <p className="py-2 md:py-5">
                            I enjoy working hard and pursuing difficult tasks. During my time learning to code I have fallen in love with how this applies to software development. Here you can find my skills and some of my favorite projects I have created.
                        </p>
                    </div>
                    <div className="about-hobbies">
                        <SubHeader text="Things I Enjoy" />
                        <div className="flex flex-col md:flex-row gap-5 pt-4 lg:pt-0">
                            <div>
                                <div className="flex justify-center md:justify-start gap-2 lg:gap-4">
                                    <img src={require("../../assets/icons/swim.svg").default} />
                                    <img src={require("../../assets/icons/bike.svg").default} />
                                    <img src={require("../../assets/icons/run.svg").default} />
                                </div>
                                <h6 className="font-poppins text-center md:text-left text-lg pt-2">Athletics</h6>
                            </div>
                            <div>
                                <div className="flex justify-center md:justify-start gap-2 lg:gap-4">
                                    <img src={require("../../assets/icons/thoughQuestion.svg").default} />
                                    <img src={require("../../assets/icons/mind.svg").default} />
                                    <img src={require("../../assets/icons/issue.svg").default} />
                                </div>
                                <h6 className="font-poppins text-center md:text-left text-lg pt-2">Learning</h6>
                            </div>
                            <div>
                                <div className="flex justify-center md:justify-start gap-2 lg:gap-4">
                                    <img src={require("../../assets/icons/function.svg").default} />
                                    <img src={require("../../assets/icons/graph.svg").default} />
                                    <img src={require("../../assets/icons/question.svg").default} />
                                </div>
                                <h6 className="font-poppins text-center md:text-left text-lg pt-2">Problem Solving</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-altBlue about-card rounded-2xl p-5 lg:p-10 hidden md:block">
                    <img src={me} className=" w-35 h-36 lg:w-44 lg:h-44 rounded-3xl mx-auto mb-4" />
                    <div className="flex items-end justify-between mx-auto my-1 w-64"><h5 className="text-lg font-poppins">Born:</h5><p>03/20/2001</p></div>
                    <div className="flex items-end justify-between mx-auto my-1 w-64"><h5 className="text-lg font-poppins">From:</h5><p>Austin, TX</p></div>
                    <div className="flex items-end justify-between mx-auto my-1 w-64"><h5 className="text-lg font-poppins">College:</h5><p>Texas A&M</p></div>
                    <div className="flex items-end justify-between mx-auto my-1 w-64"><h5 className="text-lg font-poppins">Degree:</h5><p className="text-xs">BS Computer Science <Tooltip content="Graduating in May 2023!" /></p></div>
                    <div className="flex items-end justify-between mx-auto my-1 w-64"><h5 className="text-lg font-poppins">Minors:</h5><p className="text-xs">Math & Cybersecurity</p></div>
                </div>
            </div>

        </section>
    )

};

export default About