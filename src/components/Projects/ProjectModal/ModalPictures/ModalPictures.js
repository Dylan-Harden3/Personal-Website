import ModalBigPicture from "./ModalBigPicture/ModalBigPicture";
import ModalSmallPicture from "./ModalSmallPicture/ModalSmallPicture";

// TODO: add small & big pictures

const ModalPictures = ({ pictures }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex mr-auto">
        {pictures.slice(1).map((picture, index) => {
          return <ModalSmallPicture picture={picture} key={index} />;
        })}
      </div>
      <ModalBigPicture picture={pictures[0]} />
    </div>
  );
};

export default ModalPictures;
