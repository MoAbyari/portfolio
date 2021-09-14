import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <div>
      <section className={styles.homeSections}>
        <div className={styles.background}>
          <div className={styles.content}>
            <Nav />
            <div className={styles.info}>
              <h1 className= {styles.hello}>
                HELLO
              </h1>
              <h1>
                I’M MO ABYARI
              </h1>
              <h2>
                Sydney based software engineer
              </h2>
              <Button text="Hear My Story"/>
            </div>
          </div>
          <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
          </div>
        </div>
      </section>
      <section>
        <div>

        </div>
      </section>
    </div>
  )
}