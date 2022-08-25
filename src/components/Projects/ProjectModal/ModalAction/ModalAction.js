const ModalAction = ({ actionType, actionLink }) => {
  // TODO: add icons for links
  return (
    <a
      href={actionLink}
      target="_blank"
      className={`py-2 px-6 rounded-md ${
        actionType === "Demo" ? "bg-lightBlue" : "border"
      }`}
      rel="noreferrer"
    >
      {actionType}
    </a>
  );
};

export default ModalAction;