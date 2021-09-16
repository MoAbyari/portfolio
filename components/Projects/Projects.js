import style from './style.module.css';
import Project from './Project';
import { SiJquery, SiHtml5} from 'react-icons/si';

export const Projects = (props) => {
    return (
        <div>
           <div>
               <h1 className={style.title}>
                   PROJECTS
               </h1>
           </div>
           <div className= {style.projectsContainer}>
                <div className= {style.topCards}>
                    <Project 
                        title="Tic Tac Toe" 
                        schedule="3 July - 8 July" 
                        img1="/Tik Tak Toe.png" 
                        img2="/SamplEast.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!" 
                        tech= "JavaScript / jQuery / HTML / CSS "
                        href1= "https://github.com/MoAbyari/Project0"
                        href2= "https://moabyari.github.io/Project0/"
                        />
                    
                    
                    <Project 
                        title="SamplEast" 
                        schedule= "24 July - 30 July"
                        img1="SamplEast.png"
                        img2="Sampleast2.png"
                        description="SamplEast is where you can access unlimited musical samples and loops from eastern ancient. It will be continuously improved in the near future. Please signup to download loops and samples, and get access to instruments and artists bio."/>
                </div>
                <div className={style.bottomCards}>
                    <Project 
                        title="Sweat & Sweat" 
                        img1="/SS1.png"
                        img2="/SS2.png"
                        schedule= "14 August  - 20 August"
                        description="This project was inspired by the current lockdown circumstances where people are isolated inside and might not have enough motivation to get out there and exercise! We created an activity-based dating app to light that fire in their hearts."/>
                    
                    <Project 
                        title="CovInfo" 
                        schedule= ""
                        img1="/Cov1.png"
                        img2="/Cov2.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>

                </div>
           </div>
        </div>
    )
}

export default Projects;
