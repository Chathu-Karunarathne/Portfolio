import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
   <nav className="mb-20 flex justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo}  alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
      <a 
        href="https://www.linkedin.com/in/chathu-karunarathne-79217b2b8/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
       >
      <FaLinkedin/>
      </a>
      
      <a 
        href="https://github.com/Chathu-Karunarathne"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500"
      >
      <FaGithub/>
      </a>
      
     
    </div>
  </nav>

  );
};

export default Navbar;
