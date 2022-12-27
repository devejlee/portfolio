---
title: "My Journey in Frontend Development (2015-2022)"
author: "Elijah Lee"
date: "December 24, 2022"
bannerImage: "/images/posts/example-post/mountain-road.jpg"
tags:
    - personal
---

## 2015-2016
### WordPress and Fencing

For whatever reason, I searched "What is HTML?" in Google and began reading a [book](https://htmlandcssbook.com/sample-chapter/) about basic HTML & CSS. As a naive freshman college student, I thought I could learn just by reading pages of code. So after 200 pages, I was feeling quite confident that I knew a thing or two about HTML and CSS. It wasn't until I opened a Windows Notepad in my school library and tried to type some HTML that I realized I didn't know much at all.

I searched how to make websites without coding on YouTube and found a [video tutorial](https://www.youtube.com/watch?v=F0Dx7fmAINM) on making a WordPress website with a drag-and-drop builder. After  spending hours figuring out how to stop [Skype from using my localhost port](https://stackoverflow.com/questions/30415201/apache-needs-port-80-mamp) and installing MAMP to have a local PHP and MySQL server to run WordPress on my Windows laptop, I followed YouTube tutorials on how to make blogging and e-commerce WordPress sites.

I particpated in my university fencing club at the time, and we had an outdated WordPress website introducing our club. I offered to redesign the website for free to practice using WordPress. After borrowing a camera and hiring 2 friends by buying them dinner, we had a photo shoot showcasing our fencing equipment and facilities. I used the drag-and-drop builder to easily create uniform layouts, modify the font-size and text color, and make the site mobile-responsive. Within a few days, I had my first WordPress website on the web.
## 2017
### HTML, CSS, and JavaScript

After using with WordPress, I wanted to challenge myself by making a website with vanilla HTML, CSS, and JavaScript. I was inspired by a website that displayed the history of website development in chapter format to make a similar website for my short stories I wrote for a college writing class. I learned how to use Github and Github Pages to host my [small website](https://eliya33.github.io/stories/index.html). It wasn't much, but the experience was useful for the next project I had in mind.


I wanted to make a multipage mobile responsive website by the end of the semester. I prioritized finishing the website over my midterms as I spent a month struggling to make a mobile responsive menu bar. I referred to [MDN](https://developer.mozilla.org/en-US/) and [w3schools](https://www.w3schools.com/) to learn the web basics and was happily surprised when I used ([some pretty bad](https://codepen.io/eliya33/pen/jwGZmP)) JavaScript for the first time to change class names with an `onClick` function to open and close my mobile menu bar. Looking back, the design is objectively horrible, but the fact that I could access [my website](https://eliya33.github.io/church/index.html) on my phone was incredibly satisfying.

2018 was approaching, and I didn't have much time before my 2 year [mandatory military service](https://en.wikipedia.org/wiki/Conscription_in_South_Korea). My last project before I was conscripted was to create a WordPress website with the drag and drop builder for my college newsmagazine club. They only distributed their articles on physical copies at the end of the semester, and I suggested they could use a CMS to share articles onlines more freuqently throughout the year. As always, I was willing to work for free. So after getting a domain from Godaddy and spending the hot Korean summer coding in a cafe, I made my last WordPress website and was admitted into the Republic of Korea Air Force.

## 2018-2019
### Military, Poetry, and React

While serving in the air force, a close college professor contacted me for a favor. She wanted a website so students could make reservations in the new writing center to help improve their writing skils. She had asked our college office to make a website, but the bureaucracy and slow response frustrated her enough to turn to me while I was in the military. I was happy to comply but replied that I couldn't access my Github with the military computers. So I needed a paid [codepen](https://codepen.io/your-work) pro account to develop and store files. I also could only use the computers for "educational purposes" after 10:00 PM, so it would also take some time. She had the college pay the yearly subscription fee, and I used Bootstrap and an iframe reservation widget and delivered a working website within 2 weeks. She was pleased with the result and had the college pay me around $150 for my work although I didn't expect payment at all.

Now that I had a paid codepen account, I could start my biggest project yet—to recreate my college website from scratch. I chose HTML, SASS, and JavaScript for my tech stack and referred to other university websites for the design. CSS Grid and Flexbox were just coming out at this time, and I used them with discretion with the [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) rule and used the now deprecated float and [clearfix](https://www.w3schools.com/howto/howto_css_clearfix.asp) hacks as fallbacks.

During the work day I would sketch layout designs on my military-issued notepad and after the roll call in the evening, I reserved the computer room and coded from around 10:00-11:00 PM. Then I would wake up at 6:30 AM in the morning and start all over again. After my first vacation break, I ate a bad pork cutlet and ended up being hospitalized for a day because of [gastroenteritis](https://en.wikipedia.org/wiki/Gastroenteritis). After a day in the hosptial, I wondered if I should work on the website that night. I decided to do it and told myself if I could work after getting hospitalized, I could work when I was feeling lazy.

It was freezing cold in the winter as there was no heating in the computer room, and I wore earmuffs while typing on the old Windows computer every night. It was brutally slow progress. I questioned why I was even putting in the effort at times and if I even wanted to be a frontend developer at all. But with persistance and after a year of effort, I was [done](https://devejlee.github.io/uic/).

Now that I felt very comforatble with vanilla HTML, CSS, and JavaScript, it was time to learn React. Along with working on my website, I was also reading [The Tale of Genji](https://en.wikipedia.org/wiki/The_Tale_of_Genji) on my Kindle for the past year. I had written 18 poems reminiscent of Heian Japanese poetry, and I decided to make a simple React app showcasing them. I drew unique shapes representing each poem with Figma and used the class component React architecture to make [my first React app](https://devejlee.github.io/andair/). 

2020 was approaching, signalling the end of my military service. I was excited to return to school and reconnect with old friends. Nothing bad could happen, right?

## 2020
### Gatsby and Job Applications

The coronavirus took over the world. All classes were online, but on the bright side, I had more time to for my next big project: remaking the WordPress website I made for my college newmagazine club with Gatsby and React. Hosting the WordPress site was costing the club $200 every 6 months, and I thought it was my responsibility to bring that cost to $0 while recognizing an excellent opportunity to learn Gatsby and use static site generators.

I made a [design mockup](https://www.figma.com/file/NK6Nc7H6AtACiu5ukZxU2F/Scribe?node-id=0%3A1&t=kGQIKIDP0X7QtvAD-1) with Figma and after migrating around 200+ articles accumlated over 2 years in Wordpress and converting them into Markdown through an open-source [script](https://github.com/lonekorean/wordpress-export-to-markdown), I got to work. I organized the articles into 11 categories, turned those categories into separate pages, and used GraphQL to filter the markdown data to only show articles for their respective category per page. I also added a search bar to query the articles with Algolia and deployed the [final product](https://yonseiuicscribe.netlify.app/) on netlify.

The first semester of my senior year finished, and I had one last project left before I started applying for jobs. I made another [design mockup](https://www.figma.com/file/nfPAa7RIifPmbdD0n69Yqa/Portfolio-Website?node-id=0%3A1) for my first portfolio website and finished development within 2 months. I updated my LinkedIn and only included the website I made during my military service and the Gatsby website I recently made in my resume because I thought they were my best work. Classes were still online as my final semester of senior year began. I had fulfilled enough credits beforehand to only need to take 2 more classes for graduation so I could spend the majority of my time applying for jobs.

I applied to mostly startups via Korean job sites. But after four months and over 50 applications, the end of the year was approaching with no offers. I had two in-person interviews under my belt, but both resulted in nothing. One day I suddenly received a message from a CEO of a small startup who said he was interested in interviewing me. It was going to be done over Zoom, and I tried to prepare as best as I could when the day approached. I remember him asking me to explain REST apis and I answered what I knew about GET, PUT, POST, and DELETE. He also looked over my resume and said that I studied technology that wasn't relevant to the current job market, but he admired my passion for learning. He offered me the job. However, it was located in Seoul, and it would take roughly an hour and a half to get to work from where I was living at the time. He told me that he'd give me a few days to think over it, and if I couldn't take the job, he would like to recommend me to a couple of his friends.

I was ecstatic that I had an offer on the table. And as luck would have it, a CTO from a different startup contacted me for another job interview. We had a 30 minute discussion, and he texted me the final offer with a salary that was higher than my first offer. The location was nearer to my home, and so I made my choice. I contacted the first CEO and thanked him for everything but replied that I decided to take my second offer.

I had not even graduated yet but I already had a job secured. All those years of work and planning had finally paid off, and I was ready to start my career. 

## 2021-2022
### Nextjs and My First Job

Working 8 hours a day in a professional setting was much different than working on personal projects in college. I had previously only written React with class components in JavaScript and was now writing them with functional components in TypeScript. I became more familiar with various scenarios using different React hooks and familiarized myself with Nextjs that was used for all our frontend products.

My first big project was making a website introducing our company. I was the only developer assigned to the project, and it was my first time working in a team with a designer and marketer. I had to get familiar with Google Tag Manager and learn some basics about Google Analytics to ensure the marketing team had access to the data they wanted. I also had to be flexible to design and marketing changes and improve my skills as a developer to ensure those visions became a reality. When I wasn't sure if a design or marketing requirment could be translated into code, I made small mockups on codesandbox and shared my results with my team to show what could or couldn't work.

I also saw a lot of people leave and enter the company in a short span of time. For the first four months in my job, someone was leaving every month. My CTO, who had hired me, left the company only after 6 months I started working. I remember feeling quite sad when another junior frontend developer who had started work the same day as me left only after 8 months for another company. Before she left, she had told me that if our lead developers continued to code only in the way they were familiar with, they would not improve much either. I only realized the meaning of those words a year later.

Our company grew and we moved out of working in a WeWork to a bigger office near Gangnam. I also moved out of my home in Incheon and lived alone in a one-room apartment in Seoul to make commuting to work easier. My last major project was remaking another website promoting our packaging and distribution services. I was the sole developer participating in the project and during mid-development, I got the coronavirus and had to work from home. The company decided to renew the website again a year after I left, but I still have a copy of the [figma design](https://www.figma.com/file/OeSEydORz5x7Y8rEq1cPNf/%ED%92%88%EA%B3%A0-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-(Copy)) of what I had worked on.

After finishing the website, I moved teams to work on our packaging and distribution web app. We were trying to modernize our design at the time, and I found that the pre-existing code written with a component UI library was incompatible with the new design that required more complex UX interactions. We were also using a premium library that we had to pay several thousands of dollars per year to organize our table columns and rows. Our Cypress end-to-end tests were incredibly slow with rows of [`cy.wait`](https://docs.cypress.io/api/commands/wait#Syntax) and I realized that the leadership believed in the "if it ain't broke, don't fix it" mentality, which I found quite frustating.

Quitting my first job wasn't an easy decision, but I truly believe I wouldn't have learned much the longer I had stayed. If anything, I would have continued to use bad coding practices like writing a `useEffect` in every file that called an api instead of using a common hook that could be reused across all those files.

In the end, I was grateful for the opportunity to work as a junior frontend developer in my first job, but I outgrew the company and decided to move jobs to another company that was more focused on improving existing problems than ignoring them until something broke.

## 2022-2023
### NFTs, Web3, and My Second Job

I was fortunate enough to get my second job a month after quitting my first. I had initally accepted the offer thinking that I would be working mainly on the frontend side of integrating audio and machine learning in our services. I couldn't imagine I would be working on NFTs and web3 because those words were nowhere in the job description, and I wasn't asked about them in the job interview. So after an inital project of redesigning the company website with Nextjs and Tailwind, I was again the sole frontend developer of another small team where we were tasked to create a staking web-app for our NFTs.

I had to familiarize myself with a codebase that already had some web3 integration to animate the mouth shapes of NFTs with audio to make it look like they were talking in real-time with text-to-speech. Besides that, I also had to learn the basics of Mobx, Metamask, WalletConnect, and general web3 concepts. And we were given 2 weeks for development.

It was also my first time working closely with a junior backend developer. We quickly bonded after many late nights, working on weekends, and testing over the Ethereum network. Our original plan was to make the web-app desktop only, but the perfectionist in me decided to make a mobile design on a whim. It wasn't anything pretty, but I made sure the staking web-app was at least functional on a mobile device. 

We launched and began to monitor problems on both the front and backend sides as thousands of NFTs began to be staked at once. We were using Datadog to monitor real-time bugs, and I saw that roughly 40% of users were on their mobile device! I like to believe my decision to make our web-app mobile friendly saved me at least a few late nights adding media queries to satisfy user complaints on why the website didn't work on their phones.

![staking](/images/posts/example-post/staking.gif)

After finishing my first web3 project, I was assigned to another web3 project for creating custom NFTs via user recorded audio. We were given a month before launch. Our team comprised of 4 frontend developers, and I volunteered to take care of the authentication because I was confident I could do it since I had some previous web3 experience compared to the other developers who had none. I thought I could finish authentication in a week. It actually took three, even with all the overtime and weekends I worked. Looking back, if we had used a library like [wagmi](https://wagmi.sh/react/getting-started), developing authentication could have been much faster instead of manually handling all the providers, accounts, connections, disconnections, signatures, nonces, loading, and error states with Redux and React Context. But our team was still new to web3 and we were unaware of such libraries at the time. And although using React Query to handle server states and Chakra UI to create component UIs did speed up development, we worked past 12:30 AM to launch our custom voice NFT creation service a few days after the first deadline.

![custom voice](/images/posts/example-post/custom-voice.gif)

I remember getting a taxi to get home by around 1:30 AM, sleeping, and getting back to the office by 9:30 AM. It was my first 16-hour workday and the exhaustion was catching up to me. After the custom voice project finished, I was excited to finally be assigned work on developing new featuers on our audio web app service. I coded some Redux thunks and slices so that the altered pitches users applied to their text-to-speech audio would save on the backend and the correct pitch would play on the frontend.

![pitch](/images/posts/example-post/pitch.gif)

We were keeping track of our productivity using Jira at the time, and I was feeling depressed because I could not finish all the tasks I was assigned. I would bring my laptop on the weekends, try to do the most I could, and then come back the Monday after to repeat the cycle again. In a meeting we analyzed our burn-down chart and saw that our total frontend team of 5 developers weren't able to complete a remaining total of about 100 hours of work for the past few weeks. We tried to reduce the worklord by assigning fewer hours per developer, but the deadlines were short and uncompromising.

I was also struggling to communicate in Korean with my teammates as I had grown up in the United States, and my English was much better than my Korean. The compounding stress of interpersonal communication and overwork got to me and near the end of November, I went to the emergency room because of severe stomach pains. It was [gastroenteritis](https://en.wikipedia.org/wiki/Gastroenteritis) again. I let the office know I couldn't come to work that day, got some medicine injected into my vein for 5 hours through an IV bag, and left the hospital thinking that I was all better because I wanted to go to work the next day.

Turns out I was still very sick because the night after I left the hospital, my stomach pains were getting worse. So I returned to the emergency room again and was hospitalized for a total of 11 days. This was the most ill I have ever been in my life. The hospital would give me some rice porridge for my meals, but my stomach could not even digest that. After days of not properly eating, I lost weight as a large white bag of nutrients were beeing fed into my veins so I would not starve.

![hospital food](/images/posts/example-post/hospital-food.jpeg)

Shortly after leaving the hospital, I signed my resignation papers and recuperated at home. Ater eating small portions of bananas, boiled potatoes, rice, and lactose-free bread, I was feeling better and gained most of my lost weight.
 
After much reflection, I realized that I needed to give myself ample time to rest before searching for my next job. My second job also made me realize what I needed to work on to become a better fronted developer. I wanted to learn more about authentication, cookies, CI/CD, and deeply consider the interfaces of my components to make them reusable for other developers. 

Like I've done so many times before, I gave myself a new list of goals.

1. Remake my portfolio website using Nextjs 13, Zustand, NextAuth, and Github Actions.
2. Finish a Udemy course on data structures and algorithms.
3. Make a budget app using React Native, Redux, and a backend database.

In 2015, I had a dream of one day leaving Korea to work abroad. 8 years have passed since then with the coming of 2023, but that dream is still the compass for my career. There's still so much I want to learn about frontend and backend development. And I'm going to keep going forward, no matter what.