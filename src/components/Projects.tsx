import Project from "./Project"

interface ProjectsProps {
    dark: boolean
    title: string
    projects: [string, string, string, string[], string[][]][]
}

const Projects:React.FC<ProjectsProps> = ({dark, title, projects}) => {
    return (
        <section id="projects" className={`relative flex items-center flex-col min-h-screen w-full ${dark ? "bg-dark-theme-mid-light" : "bg-light-theme-mid-light"}`}>
            <h2 className={`pt-20 text-4xl pb-4 font-bold ${dark ? "text-gray-100" : "text-gray-950"}`}>{title}</h2>
            <div className={`flex-grow flex justify-center flex-wrap gap-4 p-4 `} style={{maxWidth: '90%'}}>
                {projects.length > 0 && (projects.map((project, i) => 
                    <div data-aos="fade-up" key={`project_${i}`}>
                        <Project img={project[0]} title={project[1]} description={project[2]} dark={dark} projectInnerText={project[3]} projectButtons={project[4]}/>
                    </div>))}
            </div>
        </section>
    )
}

export default Projects