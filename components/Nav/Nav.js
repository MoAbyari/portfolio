import style from "./style.module.css";

const Nav = () => {
    return (
        <header className= {style.header}>
            <nav className= {style.nav}>
                <ul className= {style.navlist}>
                    <li><a href="./about">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;