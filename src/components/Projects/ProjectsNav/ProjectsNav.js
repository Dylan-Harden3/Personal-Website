const ProjectsNav = (props) => {
  const projectFilters = ["All Projects", "Web Dev", "Graphics"];

  return (
    <>
      <div className="sm:flex items-center gap-20 lg:gap-36 my-4 hidden">
        {projectFilters.map((filter, index) => {
          return (
            <button
              key={index}
              onClick={() => props.setProjectsType(filter)}
              className={
                props.projectsType === filter
                  ? "bg-lightBlue h-[50px] w-36 rounded-lg text-lg"
                  : " h-[50px] w-36 text-lg"
              }
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="text-center">
        <select
          className="sm:hidden bg-lightBlue mx-auto p-3 rounded-md text-left border-spacing-0"
          onChange={(e) => {
            props.setProjectsType(e.target.value);
          }}
        >
          {projectFilters.map((filter, index) => {
            return (
              <option key={index} className="bg-darkBlue leading-8">
                {filter}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default ProjectsNav;
