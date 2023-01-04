import styles from '@app/about/page.module.scss';
import { Tooltip } from '@components/Tooltip/Tooltip';
import { SiChakraui, SiCypress, SiNextdotjs, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const AboutPage = () => {
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
    <div>
      <section>
        <h2>About <span className="text-gradient">Elijah Lee</span></h2>
        <p>Hey, I&apos;m Elijah! I am a frontend developer based in Seoul. I started making websites with WordPress as a freshman college student in 2015 as a hobby. That hobby turned into a career as I taught myself through various online tutorials, articles, and side projects. I am passionate about learning and building great web applications.</p>
        <p>I have 2+ years of professional experience working as a frontend developer. I have done everything from creating that pixel-perfect layout with CSS and component UI libraries, managing and debugging complex client and server states with Redux and React Query, and even working on web3 and NFT projects.</p>
        <p>Some of my hobbies include playing Magic: The Gathering Arena, watching anime, and building side projects to learn new technologies and trends.</p>
      </section>
      <section>
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