//React Hooks
import { useState, useEffect } from "react"

//JavaScript animation library
import AOS from "aos"
import "aos/dist/aos.css"

//components
import TopBar from "./components/TopBar"
import logo from "./assets/briefcase-64.png"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import PageInBuffer from "./components/Buffers/PageInBuffer"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

//Add an image to the assets folder then change import to your hero background
import background from "./assets/night-sky-glows-with-iridescent-deep-space-generative-ai.jpg"


//Add icons for skills display
import htmlIcon from './assets/html-48.png'
import reactIcon from './assets/react-48.png'
import cssIcon from './assets/css-48.png'
import typescriptIcon from './assets/typescript-48.png'
import tailwindIcon from './assets/tailwind-css-48.png'
import githubIcon from './assets/github-48.png'
import javascriptIcon from './assets/javascript-48.png'
import sqlIcon from './assets/sql-50.png'
import postgresIcon from './assets/postgres-48.png'
import googleCloudIcon from './assets/google-cloud-48.png'
import mongoDBIcon from './assets/mongodb-48.png'
import nodeIcon from "./assets/node-js-48.png"
import expressIcon from './assets/express-js-48.png'

//icons for topbar
import linkedinIcon from './assets/linked-in-48.png'

//background images for projects
import jobHuntImg from './assets/jh.png'
import flashStudyImg from "./assets/fs7.png"
import openingMasterImg from './assets/om1.png'
import myGptImg from "./assets/mgpt.png"
import spaTemplateImg from "./assets/spat.png"
import codeWarsImg from './assets/cw.png'

const App = () => {
    //Dark's initial state determines whether the default app theme is dark or light
    const [dark, setDark] = useState<boolean>(true)
    //isOpen holds the sidebars open / close state. By default the sidebar will only be functional if the user is on mobile.
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(()=> {
        AOS.init({
            duration: 800,
            once: true,
        })
        AOS.refresh()
    },[])

    /*
    Fill Your about section with differnt chunks of text each sperate string indiates a line break. About text can have as many lines / page breaks as you like. 
     */
    const aboutText = [
        "Welcome to my portfolio website! I'm Brett Buhler, a results-driven Full Stack Web Developer with a passion for AI and a creative flair for designing and implementing front and back-end web applications. I am enthusiastic about finding innovative solutions to real-world problems and strive to create web experiences that are not only visually appealing but also highly functional and user-friendly.",
        "My passion for formal logic led me to transition from operations management to software development. Embracing the world of programming, I honed my skills in full-stack web development while integrating AI to create intelligent user experiences. This portfolio reflects my progression, showcasing projects that merge functionality with visual appeal."
    ]

    /** Skills to fill in the aboutSKills section index 0 is an image, index 1 is the display name */
    const aboutSkills: [string, string][] = [
        [typescriptIcon, "TypeScript"],
        [javascriptIcon, "JavaScript"],
        [nodeIcon, "Node.js"],
        [expressIcon, "Express.js"],
        [reactIcon, "React"],
        [htmlIcon, "HTML"],
        [cssIcon, "CSS"],
        [tailwindIcon, "Tailwind CSS"],
        [sqlIcon, "SQL"],
        [postgresIcon, "PostgresSQL"],
        [mongoDBIcon, "Mongo DB"],
        [googleCloudIcon, "Google Cloud"],

    ]

    /** Project items to go in the Projects component [Image, Title, Description, [Innter text, eact new element is a line break], [[button display text, button link]]] */
    const projectItems: [string, string, string, string[], string[][]][] = [
        [flashStudyImg, "Flash Study", "Flash Study is an AI powered Full Stack Web App designed to automate the study process.",["Front End: React.js TypeScript / JavaScript HTML CSS", "Back End: Node.js Express.js MongoDB", "Payments: Stripe","Authentication: Passport.js", "Cloud Services: Google Cloud Platform"],[["Site","https://flash-study.uc.r.appspot.com/"],["Code", "https://github.com/BrettBuhler/flash-study"],["Demo", "https://www.youtube.com/watch?v=Z50n7F_hAdc"]]],
        [myGptImg, "My GPT", "My GPT combines the user-friendly interface of Chat GPT with the power of Open AI's virtual sandbox.", ["Front End: React.js TypeScript / JavaScript TailwindCSS HTML CSS", "Back End: Node.js Express.js PostgresSQL", "Cloud Services: Google Cloud Platform (Hosting & CI/CD Pipeline)"], [["Site", "https://my-gpt-393516.uc.r.appspot.com/"],["Code", "https://github.com/BrettBuhler/my-gpt"], ["Demo", "https://www.youtube.com/watch?v=YXONKSt7b8g"]]],
        [jobHuntImg, "Job Hunt", "Job Hunt empowers users by writing AI-powered custom cover letters in seconds.", ["Front End: React TypeScript / JavaScript HTML CSS","Back End: Node.js Express.js MongoDB","Authentication: JWT local strategy & OAuth", "Cloud Services: Google Cloud Platform (Hosting & CI/CD Pipeline)"], [["Site", "https://job-hunt-385520.uc.r.appspot.com/"],["Code", "https://github.com/BrettBuhler/job-hunt"], ["Demo", "https://www.youtube.com/watch?v=5n1gPCFy8J8"]]],
        [openingMasterImg, "Opening Master", "Perfect your Chess Openings with Opening Master! Save your lines and practice unlimited variations.", ["Front End: React JavaScript HTML CSS MaterialUI", "Back End: Node.js Express.js MongoDB", "Authentication: OAuth"], [["Site", "https://brettbuhler.github.io/opening/"],["Code", "https://github.com/BrettBuhler/opening"], ["Demo", "https://www.youtube.com/watch?v=k055ql_oXhA"]]],
        [spaTemplateImg, "SPA Template", "SPA Template by Brett Buhler – Your low-code solution for a stunning portfolio website.", ["Introducing SPA Template: Your fully responsive portfolio site, showcasing your web development skills with ease.", "Customize every feature effortlessly through the simple App.tsx folder, guided by clear instructions in the comments.", "Unleash your creativity and leave a lasting impression with SPA Template."], [["Site", ""],["Code", ""], ["Demo", ""]]],
        [codeWarsImg, "Code Wars", "CodeWars allows users to improve their programming skills by solving algorithmic problems.", ['Rank: 2 kyu (Top 0.6% of users)', "Languages Studied: JavaScript, TypeScript, Python, C#, C++, Go, SQL"], [["Profile","https://www.codewars.com/users/BrettBuhler/"],["Code", "https://github.com/BrettBuhler/Code-Wars"], ["Demo", "https://www.youtube.com/watch?v=ZJcchjapw4g"]]]
       
    ]

    //icons for topbar (set Icons as an empty array to remove icons from top bar. Index 0 is the an image, Index 1 is the link)
    const topBarIcons:[string, string][] = [[linkedinIcon, "https://www.linkedin.com/in/brett-buhler-a7522a1b6/"], [githubIcon, "https://github.com/BrettBuhler"]]

    //buttons for topBar Buttons are an array with the 0 index being the display text and index 1 being an onClick function. to make the right most
    //button have a highlighted style, set highlightLastButton to true in the TopBar Component.
    const topBarButtons:[string, ()=>void][] = []

    /**Top bar / sidebar links first index is the desplayed text, second is the section to scroll to (Leave as is unless you are adding to the base site or making a landing page with different secitons)*/
    const topBarLinks:[string,string][] = [["Home", "#home"],["About","#about"], ["Projects", "#projects"]]

    return (
        <div className="w-max-screen">
            {/**
             * set welcomeMsg to false to remove the welcome message on page load
             * set delay to how many miliseconds you want the PageInBuffer to display before showing the heropage
             * delete the PageInBuffer component if you do not want to display the buffer on load
             * 
             * Other Options for Buffer: (You will need to import the component at the top of the file)
             * <PixilatedFadeOutBuffer duration={5000}/>
             */}
            <PageInBuffer welcomeMsg={true} delay={1000}/>
            {/**
             * title: Your Topbar's title
             * highlightlastbutton: true or false. If it's true, the last button on your topbar will have a highlighted style
             * buttons: array of buttons. Index 0 is the display text, Index 1 is the onClick function. Pass in an empty array to not display buttons in topbar
             * logo: topbar logo.
             * links: navigation links index 0 is the text to be displayed index 1 is the section id (default sections are #home, #about, #projects)
             * icons: 
             */}
            <TopBar title="My Portfolio" highlightLastButton={true} buttons={topBarButtons} logo={logo} links={topBarLinks} icons={topBarIcons} dark={dark} setDark={setDark} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Hero title="Brett Buhler" subTitle="Full Stack Web Developer" background={background}/>
            <About title="About Me" text={aboutText} aboutTitle="My Skills" aboutSkills={aboutSkills} dark={dark}/>
            <Projects dark={dark} title="My Work" projects={projectItems}/>
            <Footer dark={dark} />
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} dark={dark} setDark={setDark} links={topBarLinks} buttons={topBarButtons} icons={topBarIcons}/>
        </div>
    )
}

export default App
