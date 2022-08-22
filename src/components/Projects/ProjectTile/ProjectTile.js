import icons from "./icons";
import travelez from '../../../assets/projects/travelez/thumbnail.png';
import personalWebsite from '../../../assets/projects/personalwebsite/thumbnail.png';
import raytracer from '../../../assets/projects/raytracer/thumbnail.PNG';
import horticulture from '../../../assets/projects/horticulture/Hort2.PNG';
import freelook from '../../../assets/projects/freelook/thumbnail.PNG';
import rasterizer from '../../../assets/projects/rasterizer/thumbnail.PNG';
import database from '../../../assets/projects/database/thumbnail.png';

const ProjectTile = (props) => {

    // TODO: implement modal

    // icons[], title, thumbnail
    const thumbnails = [ travelez, horticulture, personalWebsite, raytracer, freelook, rasterizer, database ] // TODO add rasterizer image with good bg, as well as others

    return (
        <div className="bg-altBlue rounded-2xl w-min p-4 hover:cursor-pointer shadow-lg">
            <div className="w-60 h-24 flex justify-between">
                <div className="flex flex-col justify-between">
                    <h3>{props.title}</h3>
                    <div className="flex gap-1">
                        {
                            props.icons.map((icon,index) => {
                                return <img src={icons[icon]} key={index} className="w-5 h-5" />
                            })
                        }
                    </div>
                </div>
                <img src={thumbnails[props.thumbnail]} className="rounded-md aspect-square"></img>
            </div>
        </div>
    )

};

export default ProjectTile