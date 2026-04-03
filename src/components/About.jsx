import { motion } from "framer-motion";
import avatarImg from '../assets/img/avatar.jpg';

function About() {
    const stats = [
        { value: 'Desde 2022', label: 'Programando' },
        { value: '15+', label: 'Tecnologias' },
        { value: '12+', label: 'Projetos' },
        { value: '100%', label: 'Dedicação' },
    ];

    return (
        <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Seção 1: Quem sou eu com avatar */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-20 gap-10">

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-shrink-0"
                    >
                        <img
                            src={avatarImg}
                            alt="Felipe Shimizu"
                            loading="lazy"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-lg border border-gray-700"
                        />
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-justify"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Olá! Meu nome é <span className="text-white font-semibold">Felipe Shimizu</span>,
                            sou apaixonado por tecnologia, criatividade e soluções inteligentes.
                            Gosto de transformar ideias em experiências digitais que façam sentido para as pessoas —
                            você pode conferir alguns <a href="#projetos" className="text-purple-400 font-semibold underline">projetos que já desenvolvi</a>.
                            Curioso por natureza, estou sempre explorando novas formas de aprender e evoluir —
                            tanto como desenvolvedor quanto como ser humano.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            A programação entrou na minha vida como uma ferramenta poderosa para criar,
                            resolver problemas e expressar ideias. Gosto da lógica, da liberdade de construir
                            algo do zero e da possibilidade de impactar o mundo com linhas de código.
                            Para mim, programar é como <span className="text-purple-400 font-semibold">aprender uma nova linguagem</span> —
                            só que essa linguagem pode mudar o futuro.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition transform hover:scale-105"
                        >
                            <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default About;