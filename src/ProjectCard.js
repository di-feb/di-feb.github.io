import './portofolio.scss';

function ProjectCard({ project, theme}) {
    return (
        project.name !== 'lecture-code' && (
            <a href={`https://github.com/di-feb/${project.name}`} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
                <div className={`project_card_${theme}`}>
                    <span className={`card_title_${theme}`}>{project.name}</span>
                    <p className={`card_desc_${theme}`}>{project.description}</p>
                    <span className={`card_lang_${theme}`}>{project.language}</span>
                </div>
            </a>
        )
    );
}

export default ProjectCard;