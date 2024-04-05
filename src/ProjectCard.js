import './portofolio.scss';

function ProjectCard({ project }) {
    return (
        project.name !== 'lecture-code' && (
            <a href={`https://github.com/di-feb/${project.name}`} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
                <div className="project_card">
                    <span className='card_title'>{project.name}</span>
                    <p className='card_desc'>{project.description}</p>
                    <span className='card_lang'>{project.language}</span>
                </div>
            </a>
        )
    );
}

export default ProjectCard;