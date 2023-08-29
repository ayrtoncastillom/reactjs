import React from 'react';

const Navbar = () => {
    const links = [
        { text: 'Inicio', href: '#' },
        { text: 'Acerca', href: '#' },
        { text: 'Servicios', href: '#' },
        { text: 'Contacto', href: '#' },
    ];

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
