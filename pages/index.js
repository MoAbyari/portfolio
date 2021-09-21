import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav/Nav';
import Button from '../components/Button/Button';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';



export default function Home() {

  const scrollToContact = () => {
    document.getElementById("contactMe").scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <div>
     <Nav />
      <section className={styles.homeSections}>
        <div className={styles.background}>
          <div className={styles.content}>
            <div className={styles.info}>
              {/* <h1 className= {styles.hello}>
                HELLO
              </h1> */}
              <h1>
                MO ABYARI
              </h1>
              <h2>
                A Sydney based electrical and software engineer, and project manager with a passion for developing reliable, efficient and user-friendly products.
              </h2>
              <Button text="GET IN TOUCH" onClick={scrollToContact}/>
            </div>
          </div>
          <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
          </div>
        </div>
      </section>
      <section className={styles.prjectSection} >
          <div className={styles.projectsContent} >
            <Projects />
          </div>
      </section>
      <section className={styles.aboutMeSection}>
          <div className={styles.aboutContent}>
            <h1>ABOUT ME</h1>
            <div className={styles.description}>
            <p>
                As a nine-year-old Mo, I dreamed of being an inventor; thinking outside of the box, destroying and rebuilding my electronic toys into more favourable ones was always satisfying entertainment.
              </p>
            <p id="about">
                My enthusiasm for solving real-world problems led me into the electrical engineering and management fields. Having studied and worked in the management field also enabled me to initiate, plan and execute projects as well as manage resources effectively.
              </p>
            <p>
                What made me passionate about programming traces back to the time I found myself a music geek. Making a unique sound by creating signals, manipulating and routing modules and gears seems to be comparable to developing a program from scratch; both need creativity and a problem-solving mindset.
              </p>
              <p>
                Gaining and implementing programming knowledge satisfies my initial dream of being an inventor, where I get challenged by creating and implementing new ideas into the real world.
              </p>
            </div>
          </div>
      </section>
      <section className={styles.contactMeSection}>
        <Contact />
      </section>
    </div>
  )
}