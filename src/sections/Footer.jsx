import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a href="https://github.com/ZachCortez" target="_blank" rel="noopener noreferrer">
                        <p className="hover:underline text-blue-500">Zach Cortez</p>
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <img src={socialImg.imgPath} alt="social icon"/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} SaturnBay Productions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;