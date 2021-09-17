import style from './style.module.css';
import { FiGithub } from 'react-icons/fi';
import { CgLink } from 'react-icons/cg';

export const Project = (props) => {
    const {
        title,
        schedule,
        description,
        img1,
        img2,
        tech,
        href1,
        href2
    } = props
    return (
        
        <div className={style.projectCard} id="projects">
            <div className={style.projectInfo} >
                <div className={style.projectDetails} >
                    <h2>
                        {title}
                    </h2>
                    <span>
                        {schedule}
                    </span>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={style.projectTech}>
                    <div className={style.projectTechName}>
                        <hr/>
                        <p>  
                            {tech}
                        </p>
                    </div>
                    <div className={style.projectGitDemo}>
                        <div className={style.projectGit} >
                            <a
                                target="blank"
                                href={href1}>
                                <FiGithub size={30} color={'#ffffffba'} />
                                <p> GitHub </p>
                            </a>
                            
                        </div>
                        <div className={style.projectDemo}>
                            <a
                                target="blank"
                                href={href2}>
                                <CgLink size={30} color={'#ffffffba'} />
                                <p> Demo </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className= {style.imageDiv}>
                <div className={style.imageContainer}>
                    <img src={img2}  class= {style.imgBack}/>

                    <img src={img1}  class= {style.imgFront}/>
                </div>
            </div>

        </div>
    )
}

export default Project ;
