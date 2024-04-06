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
                <img src={`logo_${theme}.ico`} alt="logo" className='logo' />
            </a>
            <div  className='nav_links'>
                <a href='#hello' >
                    <button className={`nav_link_${theme}`} >About</button>
                </a>
                <a href='#projects' >
                    <button className={`nav_link_${theme}`} >Projects</button>
                </a>
                <a href='#contact' >
                    <button className={`nav_link_${theme}`} >Contact</button>
                </a>
                {theme === 'dark' ? ( 
                    <WbSunnyIcon className={`sun_icon_${theme}`}  onClick={() => handleThemeChange('light')} />
                ) : (
                    <DarkModeIcon className={`sun_icon_${theme}`}  onClick={() => handleThemeChange('dark')} />
                )}
                
            </div>

        </nav>
    );
}

export default Navbar;