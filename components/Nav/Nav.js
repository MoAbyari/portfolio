import style from "./style.module.css";
import { IoIosPerson, IoIosDocument } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';


const Nav = () => {
    const scrollToAbout = () => {
        document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const scrollToProjects = () => {
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return (
        <header className= {style.header}>
            <nav className= {style.nav}>
                <ul className= {style.navlist}>   
                    <li><button onClick={scrollToAbout}> <IoIosPerson size={18}/>  About</button></li>
                    <li><button onClick={scrollToProjects}> <AiOutlineAppstore size={15} />  Projects</button></li>
                    <li><button> <IoIosDocument size={18}/>  Resume</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;