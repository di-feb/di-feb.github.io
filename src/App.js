import AboutMe from './Hello';
import Navbar from './Navbar';
import Social from './Social';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Hello from './Hello';
import { useEffect, useState } from 'react';
import Footer from './Footer';

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change this to the number of seconds you want

        return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    if (loading) {
        return (
            <div style={{position: 'relative'}}>
                <img src="logo.ico" alt="logo" className='logo_animation' />
                <div className="shadow" />
            </div>
        );
    }

    return (
        <div >
            <Navbar />
            <section id='hello'>
                <Hello />
                
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='contact'>
                <ContactMe />
                <Footer />
            </section>
            <Social />
        </div>
    );
}

export default App;
