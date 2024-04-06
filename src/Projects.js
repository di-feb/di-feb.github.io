import './portofolio.scss';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Pagination from './Pagination';

function Projects({ theme }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/di-feb/repos');
            setProjects(response.data);
            console.log(response.data);
        };

        fetchProjects();
    }, []);

    const projectsPerPage = 6; // Number of projs to display per page
    const [currentPage, setCurrentPage] = useState(1); // Number of current page

    // Indexes for the users
    const indexOfLastProj = currentPage * projectsPerPage;
    const indexOfFirstProj = indexOfLastProj - projectsPerPage;

    // Modify the users table so we can show a specific number of users.
    const currentProjects = projects.slice(indexOfFirstProj, indexOfLastProj + 1);

    const totalPageCount = Math.ceil(projects.length / projectsPerPage);
    console.log(totalPageCount);

    const handlePagination = (value) => {
        setCurrentPage(value);
    };


    return (
        <div className='projects'>
            <div className='project_title'>
                <div className={`horizontal_line_${theme}`} />
                <h1 className={`project_title_text_${theme}`}>Projects</h1>
                <div className={`horizontal_line_${theme}`} />
            </div>
            <h1 className={`project_title_text2_${theme}`}>Sneak a peak into my work!</h1>


            <div className={`project_grid_${theme}`}>
                {currentProjects.map(project => (
                    <ProjectCard key={project.id} project={project} theme={theme} />
                ))}
            </div>
            <Pagination
                totalPageCount={totalPageCount}
                currentPage={currentPage}
                onPageChange={handlePagination}
            />
        </div>
    )
}

export default Projects;