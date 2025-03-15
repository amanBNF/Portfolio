import './NavStyle.css';

const Navbar = () => {
    return(
        <div className="head">
            <div className="icon">
                <p>a!</p>
            </div>
            <div className="rest">
                <div className="home">
                    <h4 href=''>Home</h4>
                </div>
                <div className="about">
                    <h4>About</h4>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar;