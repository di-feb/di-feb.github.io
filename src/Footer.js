import React from 'react';

function Footer({theme}) {
    return (
        <footer className={`footer_${theme}`}>
            <p>© {new Date().getFullYear()} Stathis Demenagas.</p>
        </footer>
    );
};

export default Footer;