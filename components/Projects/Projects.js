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
                    <Project title="Tic Tac Toe" schedule="3 July - 8 July" img="/Tik Tak Toe.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!" />
                    <Project title='SamplEast' img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                </div>
                <div className={style.bottomCards}>
                    <Project title="Sweat & Sweat" img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                    <Project title="CovInfo" img="/covid.png" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem modi unde obcaecati! Ad repellat quaerat nihil voluptatibus officiis a, perspiciatis, dolor voluptates facilis ex explicabo distinctio, molestias consequuntur eveniet!"/>
                </div>
           </div>
        </div>
    )
}

export default Projects;
