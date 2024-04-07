import './portofolio.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

function Navbar({ onThemeChange }) {
    const [theme, setTheme] = useState('dark');
    const [navbarNewTheme, setNavbarNewTheme] = useState('old');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll, hide navbar
            document.querySelector('.navbar').classList.add('navbar-hidden');
        } else if (scrollTop < lastScrollTop && this.window.scrollY > 0) {
            // Upscroll, show navbar
            document.querySelector('.navbar').classList.remove('navbar-hidden');
            document.querySelector('.navbar').classList.add('navbar-new');
        }
        else if (this.window.scrollY === 0) {
            // Top of the page
            document.querySelector('.navbar').classList.remove('navbar-new');
        }
        lastScrollTop = scrollTop;
    });

    return (
        // <nav className={`navbar ${navbarNewTheme}`}>
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