import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = (props) => {

    const [mobileMenu, setmobileMenu] = useState(true);

    const toggleMobileMenu = () => {
        mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    };

    const linkNames = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <>
            <nav className="w-100 bg-altBlue">
                <div className="section-container bg-white flex justify-between items-center">
                    <h3 className="text-2xl py-3">Dylan Harden</h3>
                    <ul className="flex justify-between w-1/2 xl:w-2/5">
                        {
                            linkNames.map((link, index) => {
                                return <Link key={index} activeClass="font-extrabold border-b border-white" smooth spy to={link} offset={-400}>{link}</Link>
                            })
                        }
                    </ul>
                </div>
            </nav>
            <div className={`${mobileMenu ? "block" : "hidden"} navbar-mobile p-4 bg-altBlue sticky top-0`} onClick={toggleMobileMenu}>
                <img src={require('../../assets/icons/navbar-open.svg').default} />
            </div>
            <div className={`${mobileMenu ? "hidden" : "flex flex-col"} h-screen navbar-mobile p-4 bg-altBlue sticky top-0`}>
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMobileMenu}>
                    <path d="M26.9584 25L38.4723 13.4861C38.6998 13.2204 38.8187 12.8787 38.8052 12.5291C38.7917 12.1796 38.6468 11.848 38.3994 11.6006C38.1521 11.3533 37.8205 11.2084 37.4709 11.1949C37.1214 11.1814 36.7796 11.3003 36.5139 11.5278L25 23.0417L13.4861 11.5139C13.2246 11.2524 12.8699 11.1054 12.5 11.1054C12.1302 11.1054 11.7755 11.2524 11.5139 11.5139C11.2524 11.7754 11.1055 12.1301 11.1055 12.5C11.1055 12.8699 11.2524 13.2246 11.5139 13.4861L23.0417 25L11.5139 36.5139C11.3685 36.6384 11.2504 36.7916 11.1671 36.9639C11.0837 37.1363 11.0369 37.3239 11.0295 37.5152C11.0221 37.7065 11.0543 37.8972 11.1241 38.0755C11.194 38.2537 11.2999 38.4156 11.4352 38.5509C11.5706 38.6863 11.7325 38.7922 11.9107 38.862C12.0889 38.9318 12.2797 38.9641 12.4709 38.9567C12.6622 38.9493 12.8499 38.9024 13.0222 38.8191C13.1945 38.7357 13.3477 38.6176 13.4723 38.4722L25 26.9583L36.5139 38.4722C36.7796 38.6998 37.1214 38.8187 37.4709 38.8052C37.8205 38.7917 38.1521 38.6468 38.3994 38.3994C38.6468 38.1521 38.7917 37.8205 38.8052 37.4709C38.8187 37.1214 38.6998 36.7796 38.4723 36.5139L26.9584 25Z" fill="white" />
                </svg>
                <ul className="mobile-links flex flex-col text-center">
                    {
                        // TODO: check with react-scroll
                        linkNames.map((link, index) => {
                            return <a key={index} onClick={toggleMobileMenu}>{link}</a>
                        })
                    }
                </ul>
            </div>
        </>
    )

};

export default Navbar