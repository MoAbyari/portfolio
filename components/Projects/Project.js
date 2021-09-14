import style from './style.module.css';

export const Project = (props) => {
    const {
        title,
        schedule,
        description,
        img,
        tech
    } = props
    return (
        <div className={style.projectCard}>
            <div className={style.projectInfo}>
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
            <div className={style.imageContainer}>
                <img src={img}/>
                <p>
                    {tech}
                </p>
            </div>
        </div>
    )
}

export default Project ;
