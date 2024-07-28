import { useParams } from 'react-router-dom';
import projects from '../helpers/projectList';
import img from './../img/projects/02-big.jpg'
import BtnGithub from "./../components/btnGithub/BtnGithub"


const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    console.log(project);
    return (
        <main className="section" >
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgbig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.githubLink && (
                    < BtnGithub link="https://github.com" />
                )}
                </div>
            </div>
        </main >
    );
}
export default Project;