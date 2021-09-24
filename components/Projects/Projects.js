import style from './style.module.css';
import Project from './Project';

export const Projects = (props) => {
    return (
        <div>
           <div>
               <h1 className={style.title}>
                   PROJECTS
               </h1>
           </div>
           <div className= {style.projectsContainer}>
                <div className={style.topCards}>
                    <Project
                        title="Sweet & Sweat"
                        img1="/SS1.png"
                        img2="/SS2.png"
                        description="This project was inspired by the current lockdown circumstances where people are isolated inside and might not have enough motivation to get out there and exercise! We created an activity-based dating app to light that fire in their hearts."
                        tech="Firebase ᭼ React JS ᭼ CSS ᭼ AntDesign"
                        href1="https://github.com/MoAbyari/Sweet-Sweat"
                        href2="https://sweet-sweat.web.app/"
                    />

                    <Project
                        title="CovInfo"
                        img1="/Cov1.png"
                        img2="/Cov2.png"
                        description="Single page app to track NSW Covid-19 stats. NSW government APIs and GeoJson are used to fetch data, and are vidualised using Chartjs and Mapbox."
                        tech="Node JS ᭼ Express JS ᭼ Vue JS ᭼ Mapbox ᭼ CSS ᭼ Semantic UI"
                        href1="https://github.com/MoAbyari/Cov-Info"
                        href2="https://cov-info-app.herokuapp.com/"
                    />
                </div>

                <div className={style.bottomCards}>
                    <Project 
                        title="SamplEast" 
                        img1="SamplEast.png"
                        img2="Sampleast2.png"
                        description="SamplEast is where you can access unlimited musical samples and loops from eastern ancient. Please signup to download loops and samples, and get access to instruments and artists bio."
                        tech="PostgreSQL ᭼ Ruby on Rails ᭼ CSS ᭼ Bootstrap"
                        href1= "https://github.com/MoAbyari/Project1"
                        href2= "https://sampleast.herokuapp.com/"
                        />
                    <Project 
                        title="Tic Tac Toe" 
                        img1="/Tik Tac Toe 0.png"
                        img2="/Tik Tac Toe 1.png"
                        description="Classic Tic Tac Toe: 3x3 gameboard for 2 players, this is my very first web app."
                        tech= "JavaScript ᭼ jQuery ᭼ HTML ᭼ CSS "
                        href1= "https://github.com/MoAbyari/Project0"
                        href2= "https://moabyari.github.io/Project0/"
                        />                              
                </div>
           </div>
        </div>
    )
}

export default Projects;
