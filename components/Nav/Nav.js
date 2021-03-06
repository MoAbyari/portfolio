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
    const openResume = () => {
        window.open('/Mo Abyari.pdf', "_blank");
    }
    return (
        <header className= {style.header}>
            <nav className= {style.nav}>
                <ul className= {style.navlist}>   
                    <li><button onClick={scrollToAbout}> <IoIosPerson className={style.icon1} />  About</button></li>
                    <li><button onClick={scrollToProjects}> <AiOutlineAppstore size={15} />  Projects</button></li>
                    <li><button onClick={openResume}> <IoIosDocument className={style.icon1} />  Resume</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;