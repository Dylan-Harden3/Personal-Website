
const Header = (props) => {

    return (
        <h1 className="text-4xl sm:text-5xl font-poppins py-2 text-center md:text-left">
            {props.text}
        </h1>
    )

};

export default Header