import { useState } from 'react';
import minhaLogo from '../assets/img/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
            <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

                {/* Logo + Nome */}
                <div className="flex items-center gap-4">
                    <img
                        src={minhaLogo}
                        alt="Felipe Shimizu"
                        className="w-14 h-14 rounded-full object-cover border border-purple-500/30"
                    />
                    <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                        Felipe Shimizu
                    </span>
                </div>

                {/* Botão Hamburguer */}
                <button
                    className="md:hidden text-purple-400 hover:text-white text-3xl transition-transform duration-300 transform hover:scale-110"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? '✖' : '☰'}
                </button>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-10 text-lg">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out hover:underline underline-offset-4"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menu Mobile */}
            <div
                className={`md:hidden bg-gray-900 px-6 pb-4 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <ul className="flex flex-col gap-4 text-lg">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-purple-500/10"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
