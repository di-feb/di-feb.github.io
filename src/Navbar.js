import './portofolio.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

function Navbar({ onThemeChange }) {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    return (
        <nav className='navbar'>
            <a href='/'>
                <img src={process.env.PUBLIC_URL + (theme === 'dark' ? '/logo_dark.ico' : '/logo_light.ico')} alt="logo" className='logo' />
            </a>
            <div className='nav_links'>
                <a href='#hello' className={`nav_link_${theme}`}> About </a>
                <a href='#projects' className={`nav_link_${theme}`}> Projects </a>
                <a href='#contact' className={`nav_link_${theme}`} > Contact </a>
                {theme === 'dark' ? (
                    <WbSunnyIcon className={`sun_icon_${theme}`} onClick={() => handleThemeChange('light')} />
                ) : (
                    <DarkModeIcon className={`sun_icon_${theme}`} onClick={() => handleThemeChange('dark')} />
                )}

            </div>

        </nav>
    );
}

export default Navbar;