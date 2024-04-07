import React from 'react';

function Footer({theme}) {
    return (
        <footer className={`footer`}>
            <p className={`footer_${theme}`}>© {new Date().getFullYear()} Stathis Demenagas.</p>
        </footer>
    );
};

export default Footer;