import React from 'react';

const Footer = () => {
    var d = new Date();
    var year = d.getFullYear();
    return(
        <>
            <footer className="w-100 bg-light text-center">
            <p>Copyright © Bapita Roy@{year}</p>
            </footer>
        </>
    );
}

export default Footer;