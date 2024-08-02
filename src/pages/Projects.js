// import { NavLink } from "react-router-dom";
import Project from "../components/projects/Projects"
import projects from "./../helpers/projectList.js"

const Projects = () => {
    return (
        <main className="section">
            <div classNameName="container">
                <h2 className="title-1">Проекты</h2>
                <ul className="projects">
                    {/* <NavLink to='/project' > */}
                    {projects.map((projects, index)=>{
                        return <Project 
                        key={index} 
                        title={projects.title} 
                        img={projects.img} 
                        index={index}
                        />
                    })}
                   {/* </NavLink> */}

                </ul>
            </div>
        </main>
    );
}

export default Projects;