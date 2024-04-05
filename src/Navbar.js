import './portofolio.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

function Navbar() {

    const [theme, setTheme] = useState('dark');

    return (
        <nav className='navbar'>
            <a href='/'>
                <img src="logo.ico" alt="logo" className='logo' />
            </a>
            <div  className='nav_links'>
                <a href='#hello' >
                    <button className='nav_link' >About Me</button>
                </a>
                <a href='#projects' >
                    <button className='nav_link' >Projects</button>
                </a>
                <a href='#contact' >
                    <button className='nav_link' >Contact</button>
                </a>
                {theme === 'dark' ? ( 
                    <WbSunnyIcon className='sun_icon'  onClick={() => setTheme('light')} />
                ) : (
                    <DarkModeIcon className='sun_icon'  onClick={() => setTheme('dark')} />
                )}
                
            </div>

        </nav>
    );
}

export default Navbar;