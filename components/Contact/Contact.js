import styles from './style.module.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export const Contact = () => {

    return (
        <div className={styles.contactInfo}>
            <h1>
                CONTACT ME
            </h1>
            <p>
                abyari.tech@gmail.com
            </p>
            <div className={styles.icons}>
                <div className= {styles.icon}> 
                    <a 
                     target="blank"
                    href="https://www.linkedin.com/in/mo-abyari/">
                        <FiLinkedin size={50} color={'white'} />
                    </a> 
                </div>
                <div className={styles.icon}> 
                    <a 
                    target="blank"
                    href="https://github.com/MoAbyari">
                        <FiGithub size={50} color={'white'} /> 
                    </a>
                </div>
                <div className={styles.icon}> 
                    <a href="mailto:abyari.tech@gmail.com">
                        <HiOutlineMail size={50} color={'white'} /> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
