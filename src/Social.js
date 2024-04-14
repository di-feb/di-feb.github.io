import './portofolio.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Social({theme}) {
    return (
        <div className={`social_${theme}`}>
            <a href="http://www.linkedin.com/in/stathis-demenagas" target="_blank" rel="noreferrer" aria-label='LinkedIn'>
                <LinkedInIcon className={`social_icon_${theme}`} sx={{ border: '50px'}} />
            </a>
            <a href="https://github.com/di-feb" target="_blank" rel="noreferrer" aria-label='Github'>
                <GitHubIcon className={`social_icon_${theme}`} />
            </a>
            <a href="mailto:efstathiosdemenagas@gmail.com" target="_blank" rel="noreferrer" aria-label='Email'>
                <AlternateEmailIcon className={`social_icon_${theme}`} />
            </a>
            <div className={`vertical_line_${theme}`}></div>
        </div>

    )
}

export default Social;
