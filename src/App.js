import AboutMe from './AboutMe';
import Navbar from './Navbar';
import Social from './Social';
import { useEffect, useState } from 'react';

function App() {
    // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const updateCursorPos = (e) => {
    //         setCursorPos({ x: e.clientX, y: e.clientY });
    //     };
    //     window.addEventListener('mousemove', updateCursorPos);

    //     return () => {
    //         window.removeEventListener('mousemove', updateCursorPos);
    //     };
    // }, []);

    return (
        <div className='body'>
            <Navbar />
            <AboutMe />
            <Social />
            {/* <div className='highlight' style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} /> */}
        </div>
    );
}

export default App;
