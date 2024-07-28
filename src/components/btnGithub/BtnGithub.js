import './style.css'
import githubicon from './gitHub-black.svg'

const BtnGithub = ({link}) =>{
    return (
        <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={githubicon} alt="" />
            GitHub repo
        </a>
    )
}

export default BtnGithub;