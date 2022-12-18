"use client"
import { useFadeIn } from "@hooks/useFadeIn"

const ProjectsPage = () => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);

  return (
    <>
      <section>
        <h2 {...fadeInTitle} className="will-fade"><span className="text-gradient">Projects</span></h2>
        <p {...fadeInIntro} className="will-fade">Things I made for fun</p>
      </section>
    </>
  )
}

export default ProjectsPage