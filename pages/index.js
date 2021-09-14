import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Button from '../components/Button/Button'
import Projects from '../components/Projects/Projects'

export default function Home() {
  return (
    <div>
     <Nav />
      <section className={styles.homeSections}>
        <div className={styles.background}>
          <div className={styles.content}>
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
      <section className={styles.homeSections}>
        <div className={styles.background}>
          <div className={styles.projectsContent} id="projects">
            <Projects />
          </div>
          <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
          </div>
        </div>
      </section>
      <section className={styles.homeSections}>
        <div className={styles.background}>
          <div className={styles.projectsContent}>
            <h1 id="about">About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas veritatis dolores velit maiores nulla reiciendis maxime molestiae voluptate cum, hic at adipisci voluptas inventore quam placeat sit. Excepturi, consequatur.
              Eos laboriosam quis autem excepturi et, adipisci nostrum odit minima quos rem exercitationem nemo dolor laborum aliquam. Dolor sit unde aspernatur maiores, nesciunt assumenda vitae ad, adipisci labore a accusantium?
              Reiciendis reprehenderit culpa asperiores expedita saepe atque aut velit. Facere enim ut perferendis laudantium omnis et, temporibus deserunt, aliquid dicta dolores quam quod in aperiam culpa nobis! Nam, consequatur autem.
              Quod quibusdam tempora nulla sunt in minima vitae nesciunt expedita magni molestias fugit inventore eos eveniet, velit voluptas, asperiores nisi dolorum minus odio. Cupiditate culpa earum itaque nam dolore cum?
              Quaerat sit recusandae sapiente sint accusamus nobis magnam delectus animi aliquid quas dolor a hic ex sequi, odit minus dolorem distinctio perspiciatis cupiditate temporibus harum dolores. Quae nostrum qui et.
              Mollitia debitis odio dignissimos provident possimus voluptatum doloremque iste facere aspernatur, ex deserunt minus repellat cumque autem ea similique quam, suscipit rem totam blanditiis reprehenderit sunt? Porro optio ea tempora.
              Magni praesentium, velit adipisci consequuntur atque numquam similique voluptatem! Incidunt optio, dolor accusamus possimus, nemo voluptas nesciunt quibusdam eos quo sit, ipsam quasi quia explicabo quis ipsum exercitationem illum commodi!
              Dolor, consequuntur, quia sequi eum blanditiis inventore modi quaerat, error odit nulla quisquam totam nam aspernatur doloribus ea architecto magnam cupiditate beatae eius voluptatum ab similique optio? Inventore, libero? Hic.
              Tempora magni in adipisci, voluptatem nisi esse nam omnis facere, iste provident ratione ad natus accusamus, voluptas qui ipsum? Aspernatur impedit corrupti tempore rerum porro, minus temporibus ratione labore ipsum!
              Sint voluptates quo reprehenderit eaque at ipsum suscipit minima officia veritatis doloremque quisquam laudantium quae corrupti expedita perferendis pariatur possimus omnis nemo, nostrum architecto? Iste tempore odio numquam placeat reiciendis.
            </p>
          </div>
          <div>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
          </div>
        </div>
      </section>
    </div>
  )
}