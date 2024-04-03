import './portofolio.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Social() {
    return (
        <div className='social'>
            <a href="http://www.linkedin.com/in/stathis-demenagas" target="_blank">
                <LinkedInIcon className='social_icon' sx={{ border: '50px'}} />
            </a>
            <a href="http://www.linkedin.com/in/stathis-demenagas" target="_blank">
                <GitHubIcon className='social_icon' />
            </a>
            <a href="mailto:efstathiosdemenagas@gmail.com">
                <AlternateEmailIcon className='social_icon' />
            </a>
            <div className="vertical_line"></div>
        </div>

    )
}

export default Social;
