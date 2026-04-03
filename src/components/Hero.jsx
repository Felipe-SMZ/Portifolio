import minhaFoto from '../assets/img/Fototeste.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
    const socialLinks = [
        {
            icon: <FaGithub className="text-lg" />,
            href: "https://github.com/Felipe-SMZ",
            label: "GitHub"
        },
        {
            icon: <FaLinkedin className="text-lg" />,
            href: "https://www.linkedin.com/in/felipesshimizu",
            label: "LinkedIn"
        },
        // Uncomment if you want email link
        // {
        //     icon: <FaEnvelope className="text-lg" />,
        //     href: "mailto:seu@email.com",
        //     label: "Email"
        // }
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">

            {/* Fundo com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black"></div>

            {/* Partículas */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 lg:gap-16 items-center z-10">

                {/* Lado esquerdo - Texto */}
                <div className="order-2 md:order-1">
                    <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 backdrop-blur-sm">
                        <p className="text-cyan-400 text-sm font-semibold">
                            👋 Disponível para oportunidades
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Felipe Shimizu
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
                        Desenvolvedor <span className="text-cyan-400 font-semibold">Full Stack</span> em formação
                    </h2>

                    <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
                        Transformo curiosidade em código. <br />
                        Construindo aplicações completas com <span className="text-cyan-400 font-semibold">Java</span>, 
                        <span className="text-cyan-400 font-semibold"> Spring Boot</span> e <span className="text-cyan-400 font-semibold">React</span>. <br />
                        Sempre buscando aprender, evoluir e entregar soluções inteligentes.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <a
                            href="#projetos"
                            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            Ver Projetos
                        </a>
                        <a
                            href="#contato"
                            className="px-6 py-2.5 bg-transparent border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 font-semibold rounded-lg transition-all hover:scale-105"
                        >
                            Entrar em Contato
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-slate-700 hover:bg-cyan-500 hover:border-cyan-400 rounded-lg transition-all hover:scale-110 backdrop-blur-sm"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Lado direito - Foto */}
                <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

                    {/* Círculos decorativos */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-3xl blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-3xl blur-2xl"></div>

                    {/* Foto */}
                    <div className="relative w-full max-w-xs lg:max-w-sm">
                        <img
                            src={minhaFoto}
                            alt="Felipe Shimizu"
                            loading="lazy"
                            className="w-full rounded-3xl object-cover aspect-square border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/30"
                        />
                        {/* Badge flutuante */}
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl shadow-xl shadow-cyan-500/50 border border-cyan-400/30">
                            <p className="text-white font-bold text-base">Desde 2022</p>
                            <p className="text-cyan-100 text-xs">Codando</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;