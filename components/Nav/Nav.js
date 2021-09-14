import style from "./style.module.css";

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
                    <li><button onClick={scrollToAbout}>About</button></li>
                    <li><button onClick={scrollToProjects}>Projects</button></li>
                    <li><button>Resume</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;