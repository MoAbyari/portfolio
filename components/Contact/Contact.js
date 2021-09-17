import styles from './style.module.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export const Contact = () => {

    return (
        <div className={styles.contactInfo}>
            <div className={styles.icons} id="contactMe">
                <div className= {styles.icon}> 
                    <a 
                     target="blank"
                    href="https://www.linkedin.com/in/mo-abyari/">
                        <FiLinkedin size={50} color={'#ffffffd9'} />
                    </a> 
                </div>
                <div className={styles.icon}> 
                    <a 
                    target="blank"
                    href="https://github.com/MoAbyari">
                        <FiGithub size={50} color={' #ffffffd9'} />
                    </a>
                </div>
                <div className={styles.icon}> 
                    <a href="mailto:abyari.tech@gmail.com">
                        <HiOutlineMail size={56} color={' #ffffffd9'} />
                    </a>
                </div>
            </div>

            <footer> 
                <h4> Site made with React, Next.js and Vercel </h4>
                     © 2021 Mo Abyari
            </footer>
        </div>
    )
}

export default Contact;
