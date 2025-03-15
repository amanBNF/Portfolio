import './BodyStyle.css';
import rbt_icon from '../assets/rbt.png'; // Import image
import yoda_icon from '../assets/yoda.png'

const Body = () => {
    return (
        <>
        <div className="container1">
            <div className="foto">
                {/* Use the imported image correctly */}
                <img src={rbt_icon} alt="Robot Icon" />
            </div>
            <div className="para">
                <p>I'm Aman Shukla, an engineering student specializing in Computer Science with Artificial Intelligence. I'm currently working on Trawell, an AI-powered travel app designed to make trip planning easier and more cost-effective. The app helps users find hidden gems, book local guides, and manage hotels and rentals, all in one place. I'm passionate about AI and how it can enhance real-world experiences, especially in travel. My goal is to create something that makes exploring new places effortless and exciting. Still learning, still building—one step at a time! 🚀</p>
            </div>
        </div>
        <div className="container2">
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis pariatur eius facere velit. Error, explicabo maxime numquam quod exercitationem voluptatum provident. Quod similique qui fuga distinctio perspiciatis veritatis aliquam.</p>
            </div>
            <div className="foto">
                {/* Use the imported image correctly */}
                <img src={yoda_icon} alt="Yoda Icon" />
            </div>
        </div>
        </>
    );
};

export default Body;
