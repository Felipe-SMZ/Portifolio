import { FaGithub, FaLinkedin } from "react-icons/fa";  

function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Conteúdo Principal */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-800">

                    {/* Logo/Nome */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-bold text-lg mb-1">Felipe Shimizu</p>
                        <p className="text-gray-500 text-sm">Desenvolvedor Full-Stack</p>
                    </div>

                    {/* Links Rápidos */}
                    <div className="flex gap-8">
                        <a href="#sobre" className="text-gray-400 hover:text-white transition text-sm font-medium">
                            Sobre
                        </a>
                        <a href="#skills" className="text-gray-400 hover:text-white transition text-sm font-medium">
                            Skills
                        </a>
                        <a href="#projetos" className="text-gray-400 hover:text-white transition text-sm font-medium">
                            Projetos
                        </a>
                        <a href="#contato" className="text-gray-400 hover:text-white transition text-sm font-medium">
                            Contato
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Felipe-SMZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition text-xl"
                            aria-label="GitHub"
                        >
                            <FaGithub className="mx-auto" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/felipesshimizu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition text-xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="mx-auto" />
                        </a>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm pt-8">
                    <p>
                        © {new Date().getFullYear()} Felipe Shimizu. Feito com cuidado usando React, Vite e Tailwind CSS.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;