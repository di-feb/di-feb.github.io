import Navbar from './Navbar';
import Social from './Social';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Hello from './Hello';
import { useEffect, useState } from 'react';
import Footer from './Footer';

function App() {

    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('dark');

    const bodyStyle = {
        background: theme === 'light' ? '#e6e6e6' : '#0a192f',
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change this to the number of seconds you want

        return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    if (loading) {
        return (
            <div style={{position: 'relative'}}>
                <img src="logo_dark.ico" alt="logo" className='logo_animation' />
                <div className="shadow" />
            </div>
        );
    }

    return (
        <div style={bodyStyle}>
            <Navbar onThemeChange={setTheme}/>
            <section id='hello'>
                <Hello theme={theme}/>
            </section>
            <section id='projects'>
                <Projects theme={theme} />
            </section>
            <section id='contact'>
                <ContactMe theme={theme}/>
                <Footer theme={theme} />
            </section>
            <Social theme={theme} />
        </div>
    );
}

export default App;
