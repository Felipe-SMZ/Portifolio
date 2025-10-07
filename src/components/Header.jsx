import { useState, useEffect } from 'react';
import minhaLogo from '../assets/img/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Contato', href: '#contato' },
    ];

    // Detecta scroll para mudar estilo do header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fecha menu ao clicar em um link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                : 'bg-black/50 backdrop-blur-md border-b border-cyan-500/10'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo + Nome */}
                <a
                    href="#hero"
                    className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-400/30 transition-all"></div>
                            <img
                                src={minhaLogo}
                                alt="FS"
                                className="relative w-10 h-10 rounded-full object-cover border border-cyan-500/50 group-hover:border-cyan-400 transition-all"
                            />
                        </div>
                        <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
                            Felipe <span className="text-cyan-400">Shimizu</span>
                        </span>
                </a>

                {/* Botão Hamburguer */}
                <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-lg"></div>
                    <span className="relative text-2xl">
                        {menuOpen ? '✕' : '☰'}
                    </span>
                </button>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-8 text-base">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group py-2"
                            >
                                {link.name}
                                {/* Underline animado */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                {/* Glow sutil */}
                                <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 rounded transition-all duration-300 -z-10"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menu Mobile com animação suave */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-xl border-t border-cyan-500/10">
                    <ul className="flex flex-col py-4">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                style={{ animationDelay: `${index * 50}ms` }}
                                className={`${menuOpen ? 'animate-slideIn' : ''}`}
                            >
                                <a
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 px-6 py-3 border-l-2 border-transparent hover:border-cyan-400"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </header >
    );
}

export default Header;