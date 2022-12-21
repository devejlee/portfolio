'use client';
import styles from '@app/about/page.module.scss';
import { Tooltip } from '@components/Tooltip/Tooltip';
import { useFadeIn } from '@hooks/useFadeIn';
import { SiChakraui, SiCypress, SiNextdotjs, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const AboutPage = () => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);
  const fadeInExperience = useFadeIn<HTMLParagraphElement>(300);
  const fadeInSkills = useFadeIn<HTMLElement>(400);

  const skills = [
    {
      id: 'React',
      icon: SiReact,
      link: 'https://reactjs.org/'
    },
    {
      id: 'Nextjs',
      icon: SiNextdotjs,
      link: 'https://nextjs.org/'
    },
    {
      id: 'Redux',
      icon: SiRedux,
      link: 'https://redux.js.org/'
    },
    {
      id: 'React Query',
      icon: TbBrandReactNative,
      link: 'https://react-query-v3.tanstack.com/'
    },
    {
      id: 'Typescript',
      icon: SiTypescript,
      link: 'https://www.typescriptlang.org/'
    },
    {
      id: 'ChakraUi',
      icon: SiChakraui,
      link: 'https://chakra-ui.com/'
    },
    {
      id: 'Cypress',
      icon: SiCypress,
      link: 'https://www.cypress.io/'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <section>
        <h2 {...fadeInTitle} className="will-fade">About <span className="text-gradient">Elijah Lee</span></h2>
        <p {...fadeInIntro} className="will-fade">Hey, I&apos;m Elijah! I started making websites with WordPress as a freshman college student in 2015 as a hobby. That passion persisted for years as I dived into the vast and ever-expanding world of frontend development. I love how coding gives me the freedom to convert my ideas into reality, so long as I put in the time and effort.</p>
        <p {...fadeInExperience} className="will-fade">I have 2+ years of professional experience working as a frontend developer. I have done everything from creating that pixel-perfect layout with CSS, managing and debugging complex client and server states with Redux and React Query, and even working on web3 and NFT projects. I am always open to learning something new.</p>
      </section>
      <section {...fadeInSkills} className="will-fade">
        <h3>Skills</h3>
        <div className={styles.iconsWrapper}>
          {skills.map((skill) => (
            <Tooltip key={skill.id} text={skill.id} direction="top">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <skill.icon className={styles.icon}></skill.icon>
              </a>
            </Tooltip>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;