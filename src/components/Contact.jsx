import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section id="contato" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                        Vamos conversar
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Estou aberto a oportunidades de estágio, freelance ou apenas trocar ideias sobre tecnologia
                    </p>
                </div>

                {/* Cards de Contato */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    {/* Email
                    <a
                        href="mailto:seu.email@exemplo.com"
                        className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105 text-center group"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                            📧
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-400 text-sm mb-2">Resposta em até 24h</p>
                        <p className="text-purple-400 text-sm font-semibold">
                            seu.email@exemplo.com
                        </p>
                    </a> */}

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/felipesshimizu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105 text-center group"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                            <FaLinkedin className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm mb-2">Vamos conectar</p>
                        <p className="text-purple-400 text-sm font-semibold">
                            Ver perfil
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Felipe-SMZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105 text-center group"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                            <FaGithub className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">GitHub</h3>
                        <p className="text-gray-400 text-sm mb-2">Veja meu código</p>
                        <p className="text-purple-400 text-sm font-semibold">
                            @Felipe-SMZ
                        </p>
                    </a>

                </div>

                {/* Mensagem adicional */}
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-8 text-center">
                    <p className="text-lg text-gray-300 mb-4">
                        Busco oportunidades de <span className="text-white font-semibold">estágio</span> ou <span className="text-white font-semibold">projetos freelance</span> onde eu possa continuar aprendendo e contribuir com soluções criativas.
                    </p>
                    <p className="text-gray-400">
                        Disponível para início imediato
                    </p>
                </div>

            </div>
        </section>
    );
}
export default Contact;