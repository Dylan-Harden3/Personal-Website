import { Link } from "react-scroll";
import './Scrolldown.css'

// TODO: Link to about

const Scrolldown = () => {

    return (

        <Link className='hidden sm:block sm:mt-16 lg:mt-48' smooth to='About'>
            <div className="mouse mx-auto">
                <div className="wheel"></div>
            </div>
            <div className='mx-auto'>
                <span className="scroll-arrow mx-auto"></span>
                <span className="scroll-arrow mx-auto"></span>
            </div>
        </Link>
    )

};

export default Scrolldown