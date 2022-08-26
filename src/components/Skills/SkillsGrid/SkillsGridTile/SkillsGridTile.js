const SkillsGridTile = (props) => {
  return (
    <div
      className={`bg-lightBlue py-2 px-3 font-poppins text-lg w-min ${
        props.hidden ? "hidden" : null
      }`}
    >
      <h6 className="text-xl text-center whitespace-nowrap font-medium">
        {props.text}
      </h6>
    </div>
  );
};

export default SkillsGridTile;
