"use client"
import styles from "@app/projects/page.module.scss"
import { Card } from "@components/Card/Card";
import { projects } from "@data/index";
import { useFadeIn } from "@hooks/useFadeIn"

const ProjectsPage = () => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);

  return (
    <>
      <section className={styles.wrapper}>
        <h2 {...fadeInTitle} className="will-fade"><span className="text-gradient">Projects</span></h2>
        <p {...fadeInIntro} className="will-fade">Things I made for fun</p>
        <div className={styles.cardsWrapper}>
          {projects.map((project) => {
            return (
              <Card key={project.title} year={project.year} title={project.title} body={project.body} demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage