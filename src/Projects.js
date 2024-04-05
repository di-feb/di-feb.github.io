import './portofolio.scss';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/di-feb/repos');
            setProjects(response.data);
            console.log(response.data);
        };

        fetchProjects();
    }, []);


    return (
        <div className='projects'>
            <div className='project_title'>
                <div className='horizontal_line' />
                <h1 className='project_title_text'>Projects</h1>
                <div className='horizontal_line' />
            </div>
            <h1 className='project_title_text2'>Sneak a peak into my work!</h1>
            

                <div className='project_grid'>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            
        </div>
    )
}

export default Projects;