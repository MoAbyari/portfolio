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
                <div className= {style.topCards}>
                    <Project title='CovidInfo 1' img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!" />
                    <Project title='CovidInfo 2' img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                </div>
                <div className={style.bottomCards}>
                    <Project title='CovidInfo 3' img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                    <Project title='CovidInfo 4' img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                </div>
           </div>
        </div>
    )
}

export default Projects;
