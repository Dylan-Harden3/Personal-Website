import SubHeader from "../../Utils/SubHeader/SubHeader";
import ProjectIcons from "../ProjectIcons/ProjectIcons";
import ModalAction from "./ModalAction/ModalAction";
import ModalPictures from "./ModalPictures/ModalPictures";

import travelez from "../../../assets/projects/travelez/thumbnail.png";
import personalWebsite from "../../../assets/projects/personalwebsite/thumbnail.png";
import raytracer from "../../../assets/projects/raytracer/thumbnail.PNG";
import horticulture from "../../../assets/projects/horticulture/Hort2.PNG";
import freelook from "../../../assets/projects/freelook/thumbnail.PNG";
import rasterizer from "../../../assets/projects/rasterizer/thumbnail.PNG";
import database from "../../../assets/projects/database/thumbnail.png";

const ProjectModal = ({ modalData, setModalData }) => {
  const pictures = [
    travelez,
    horticulture,
    personalWebsite,
    raytracer,
    freelook,
    rasterizer,
    database,
  ]; // TODO add rasterizer image with good bg, as well as others

  return (
    <div
      className={`h-screen w-screen bg-darkBlue bg-opacity-80 ${
        modalData.hidden ? "hidden" : "flex"
      } fixed top-0 left-0`}
    >
      <div className="bg-altBlue h-fit max-h-96 sm:max-w-[90%] md:max-w-3xl p-4 sm:p-8 rounded-2xl relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between">
          <SubHeader text={modalData.title} />
          <div className="hover:cursor-pointer pb-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setModalData({ ...modalData, hidden: true })}
            >
              <path
                d="M26.9584 25L38.4723 13.4861C38.6998 13.2204 38.8187 12.8787 38.8052 12.5291C38.7917 12.1796 38.6468 11.848 38.3994 11.6006C38.1521 11.3533 37.8205 11.2084 37.4709 11.1949C37.1214 11.1814 36.7796 11.3003 36.5139 11.5278L25 23.0417L13.4861 11.5139C13.2246 11.2524 12.8699 11.1054 12.5 11.1054C12.1302 11.1054 11.7755 11.2524 11.5139 11.5139C11.2524 11.7754 11.1055 12.1301 11.1055 12.5C11.1055 12.8699 11.2524 13.2246 11.5139 13.4861L23.0417 25L11.5139 36.5139C11.3685 36.6384 11.2504 36.7916 11.1671 36.9639C11.0837 37.1363 11.0369 37.3239 11.0295 37.5152C11.0221 37.7065 11.0543 37.8972 11.1241 38.0755C11.194 38.2537 11.2999 38.4156 11.4352 38.5509C11.5706 38.6863 11.7325 38.7922 11.9107 38.862C12.0889 38.9318 12.2797 38.9641 12.4709 38.9567C12.6622 38.9493 12.8499 38.9024 13.0222 38.8191C13.1945 38.7357 13.3477 38.6176 13.4723 38.4722L25 26.9583L36.5139 38.4722C36.7796 38.6998 37.1214 38.8187 37.4709 38.8052C37.8205 38.7917 38.1521 38.6468 38.3994 38.3994C38.6468 38.1521 38.7917 37.8205 38.8052 37.4709C38.8187 37.1214 38.6998 36.7796 38.4723 36.5139L26.9584 25Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="md:max-w-[60%] flex flex-col justify-between">
            <ProjectIcons icons={modalData.icons} />
            <p className="py-4 md:py-0">{modalData.description}</p>
            <div className="flex gap-4 sm:gap-8">
              {modalData.demo && (
                <ModalAction actionType="Demo" actionLink={modalData.demo} />
              )}
              {modalData.code && (
                <ModalAction actionType="Code" actionLink={modalData.code} />
              )}
            </div>
          </div>
          <div className="md:max-w-[35%] hidden md:flex flex-col items-end">
            <img src={pictures[modalData.thumbnail]} className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
