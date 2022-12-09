import styles from "@components/Intro/Intro.module.scss"

const Intro = () => (
  <section className={styles.wrapper}>
    <h2>Hi! I&apos;m <span>Elijah</span></h2>
    <p>I am a frontend developer passionate about pushing myself to learn best practices to build <span>awesome</span> web applications</p>
    <ul className={styles.socialLinks}>
      <li><a href="#">Resume</a></li>
      <li><a href="#">LinkedIn</a></li>
      <li><a href="#">Github</a></li>
    </ul>
  </section>
)

export { Intro }