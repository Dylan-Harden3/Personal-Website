import Header from "../Utils/Header/Header";
import SubHeader from "../Utils/SubHeader/SubHeader";
import SkillsGrid from "./SkillsGrid/SkillsGrid";

const Skills = () => {

    // TODO: reformat/add all skills

    const skillsData = [
        {
            type : "Web Dev",
            skills : [
                "Angular", "React", "Ruby on Rails", "Nodejs", "HTML/CSS", "Tailwind", "Bootstrap", "PostgreSQL", "Jasmine", "Express"
            ]
        },
        {
            type : "Languages",
            skills : [
                "C++","Javascript", "Python", "Java"
            ]
        },
        {
            type : "Tools",
            skills : [
                "Git", "Agile", "Postman", "OpenGL", "Github", "Jira", "Confluence", "Bitbucket"
            ]
        }
    ];

    return (
        <section id="Skills" className="pt-32">
            <div className="section-container">
                <Header text="Tech I've Used" />
                <div className="md:flex justify-between mt-3">
                    {
                        skillsData.map((skillData, index) => {
                            return (
                                <div key={index}>
                                    <SubHeader text={skillData.type} />
                                    <SkillsGrid skills={skillData.skills} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );

};

export default Skills