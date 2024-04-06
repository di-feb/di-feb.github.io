import './portofolio.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Hello({theme}) {

    const [picture, setPicture] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/di-feb');
            setPicture(response.data);
        };

        fetchProjects();
    }, []);


    return (
        <div className='hello'>
            <div className='hello1'>
                <h4 className={`hello2_${theme}`}>Hello my fellow programmers, I am </h4>
                <h1 className={`name_${theme}`}>Stathis Demenagas</h1>
                <div className={`paragraph_${theme}`}>
                    <div className='paragraph_a'>
                        <span style={{ marginRight: '4px' }}> I am a final year student specializing in </span>
                        <span className={`emphasis_${theme}`} style={{ marginRight: '4px' }}> Software Engineering </span>
                        <span style={{ marginRight: '4px' }}> at the </span>
                        <a href="http://www.di.uoa.gr" target="_blank" className={`emphasis_${theme}`}>
                            DiT, Uoa.
                        </a>
                    </div>
                    <div className='paragraph_b'>
                        <p className='paragraph_b'>My passion lies in crafting innovative and user-friendly software solutions.</p>
                        <p className='paragraph_b'>I have honed my problem-solving skills through real-world programming challenges.</p>
                        <p className='paragraph_b'>Beyond the world of coding, I enjoy going to the gym, boxing, and playing chess.</p>
                    </div>
                </div>
                <button className={`resume_${theme}`}>
                    <a href="https://drive.google.com/file/d/1J82VaoxR2PtpS_zVi14dR2MPIqw3nEgG/view?usp=sharing" target="_blank" className={`resume_text_${theme}`}>Resume</a>
                </button>
            </div>
            <div className={`picture_${theme}`}>
                <img src={picture.avatar_url} alt="profile" className='profile' />
            </div>
        </div>
    )
}

export default Hello;