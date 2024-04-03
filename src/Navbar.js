import './portofolio.scss';

function Navbar() {
    return (
        <nav className='navbar'>
            <a>Portfolio
                <img src="logo.ico" alt="logo" className='logo' />
            </a>
            <ul className='nav_links'>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;