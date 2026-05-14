import fatecRideImg from '../assets/img/fatecride1.png';
import fatecBookImg from '../assets/img/fatecbook1.png';
import logoImg from '../assets/img/logo.png';
import javablogImg from '../assets/img/javablog.png';
import bakerylogoImg from '../assets/img/bakerylogo.png';
import calculadoraflexImg from '../assets/img/calculadoraflex.png'
import gamecriticImg from '../assets/img/gamecriticImg.png';
import { motion } from 'framer-motion';

function Projects() {
    const projectColors = {
        1: { gradient: 'from-cyan-500/20 to-blue-600/20', border: 'hover:border-cyan-500', glow: 'cyan-500/30' },
        2: { gradient: 'from-red-500/20 to-orange-600/20', border: 'hover:border-red-500', glow: 'red-500/30' },
        3: { gradient: 'from-purple-500/20 to-blue-600/20', border: 'hover:border-purple-500', glow: 'purple-500/30' },
        4: { gradient: 'from-orange-500/20 to-yellow-600/20', border: 'hover:border-orange-500', glow: 'orange-500/30' },
        5: { gradient: 'from-green-500/20 to-emerald-600/20', border: 'hover:border-green-500', glow: 'green-500/30' },
        6: { gradient: 'from-blue-500/20 to-cyan-600/20', border: 'hover:border-blue-500', glow: 'blue-500/30' },
        7: { gradient: 'from-green-500/20 to-cyan-600/20', border: 'hover:border-green-400', glow: 'green-500/30' }

    };

    const techColors = {
        'React': 'from-blue-500 to-cyan-400',
        'Java': 'from-orange-600 to-red-500',
        'Spring Boot': 'from-green-500 to-emerald-400',
        'Node.js': 'from-green-600 to-green-400',
        'JavaScript': 'from-yellow-500 to-orange-400',
        'TypeScript': 'from-blue-600 to-blue-400',
        'MySQL': 'from-blue-700 to-blue-500',
        'MongoDB': 'from-green-700 to-green-500',
        'PostgreSQL': 'from-blue-800 to-blue-600',
        'TailwindCSS': 'from-cyan-500 to-blue-500',
        'Kotlin': 'from-purple-600 to-purple-400',
        'Android': 'from-green-500 to-lime-400',
        'Vite': 'from-purple-500 to-purple-400',
        'Handlebars': 'from-orange-600 to-yellow-500',
    };

    const getTechColor = (tech) => {
        return techColors[tech] || 'from-gray-600 to-gray-500';
    };

    const projects = [
        {
            id: 7,
            title: 'Game Critic — Plataforma de Reviews de Jogos',
            description: 'Aplicação fullstack completa com API REST em Java/Spring Boot e frontend React. Permite cadastro de jogos, autenticação JWT, sistema de reviews por usuário e painel administrativo. Projeto com deploy real em produção — backend no Railway e frontend na Vercel.',
            technologies: ['React', 'Vite', 'Java', 'Spring Boot', 'JWT', 'MySQL', 'TailwindCSS'],
            status: 'Concluído',
            github: 'https://github.com/Felipe-SMZ/jogos-review-api',
            githubFrontend: 'https://github.com/Felipe-SMZ/jogos-review-frontend',
            demo: 'https://jogos-review-frontend.vercel.app',
            highlights: [
                'Deploy em produção — backend Railway, frontend Vercel',
                'API REST documentada com Swagger/OpenAPI',
                'Autenticação JWT com Spring Security',
                'Sistema de roles ROLE_ADMIN e ROLE_USER',
                'CI/CD com GitHub Actions + deploy automático na Vercel',
                'Headers de segurança CSP, HSTS e X-Frame-Options',
            ],
            category: 'Full-Stack',
            image: gamecriticImg,
            learning: 'Projeto fullstack completo com deploy em produção'
        },
        {
            id: 1,
            title: 'FatecRide — Plataforma de Caronas Universitárias',
            description: 'Plataforma completa de caronas colaborativas desenvolvida como Projeto Integrador do 3º semestre de DSM na FATEC Cotia. Conecta motoristas e passageiros da comunidade acadêmica com rotas em mapa, agendamento recorrente de caronas e chat em tempo real.',
            technologies: ['React', 'Java', 'Spring Boot', 'Node.js', 'MySQL', 'MongoDB', 'WebSocket', 'JWT', 'TailwindCSS'],
            status: 'Em Desenvolvimento',
            github: 'https://github.com/Felipe-SMZ/FatecRideBackend2.0',
            githubFrontend: 'https://github.com/Felipe-SMZ/FatecRideFrontend2.0.git',
            demo: null,
            highlights: [
                'Arquitetura de microsserviços com 3 backends independentes (Spring Boot + 2x Node.js)',
                'Autenticação JWT com Spring Security',
                'Chat em tempo real via WebSocket',
                'Agendamento recorrente de caronas por dia da semana ou intervalo de dias',
                'Visualização de rotas com Leaflet Maps',
                'API documentada com Swagger/OpenAPI',
                'Trabalho colaborativo com Git Flow (branches, PRs e code review)',
            ],
            category: 'Full-Stack',
            image: fatecRideImg,
            learning: 'Arquitetura de sistemas distribuídos, integração entre stacks diferentes (Java + Node.js), autenticação JWT, WebSocket e gestão de projeto em equipe'
        },
        {
            id: 2,
            title: 'ThreadFlow - API REST de Blog',
            description: 'API REST robusta para gerenciamento de blog com autenticação JWT, controle de permissões por roles e documentação interativa via Swagger. Desenvolvida com foco em segurança, escalabilidade e testes.',
            technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Swagger', 'JUnit', 'Docker'],
            status: 'Concluído',
            github: 'https://github.com/Felipe-SMZ/Blog.git',
            demo: null,
            highlights: [
                'Autenticação JWT',
                'Sistema de Roles (USER, ADMIN, MODERATOR)',
                'Swagger UI',
                'Testes com JUnit e Mockito',
                'Busca e paginação avançadas'
            ],
            category: 'Backend',
            image: javablogImg,
            learning: 'Domínio de autenticação e segurança'
        },
        {
            id: 3,
            title: 'Calculadora de Combustível',
            description: 'Aplicativo Android que calcula a melhor opção entre Etanol e Gasolina, consumindo uma API REST desenvolvida em Java/Spring Boot.',
            technologies: ['Kotlin', 'Android', 'MVVM', 'Retrofit', 'Coroutines', 'Spring Boot', 'Java'],
            status: 'Em Desenvolvimento',
            github: 'https://github.com/Felipe-SMZ/app-combustivel',
            demo: null,
            highlights: [
                'MVVM + LiveData',
                'Chamada a API com Retrofit e Coroutines',
                'UI moderna com Material Components',
                'Preparado para persistência futura de histórico'
            ],
            category: 'Full-Stack',
            image: calculadoraflexImg,
            learning: 'Integração Android ↔ Backend, arquitetura MVVM'

        },
        {
            id: 4,
            title: 'Portfólio Pessoal',
            description: 'Este portfólio! Desenvolvido do zero com React e Tailwind CSS para apresentar meus projetos e habilidades de forma profissional e moderna.',
            technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
            status: 'Em Desenvolvimento',
            github: 'https://github.com/Felipe-SMZ/Portifolio.git',
            demo: window.location.href,
            highlights: [
                'React Hooks',
                'Design responsivo',
                'Tailwind CSS',
                'Deploy automático'
            ],
            category: 'Frontend',
            image: logoImg,
            learning: 'Projeto atual'
        },
        {
            id: 5,
            title: 'Bakery Management System (Gestão de Padaria)',
            description: 'Sistema completo para gerenciamento de padarias com controle de estoque, vendas, clientes e fiado. Desenvolvido como trabalho acadêmico com foco em regras de negócio reais.',
            technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
            status: 'Backend Concluído',
            github: 'https://github.com/Felipe-SMZ/bakery-system',
            demo: null,
            highlights: [
                'API RESTful completa',
                'Validação de crédito e estoque',
                'Relatórios gerenciais',
                'Documentação detalhada'
            ],
            category: 'Full-Stack',
            image: bakerylogoImg,
            learning: 'Aplicação de regras de negócio reais'
        },
        {
            id: 6,

            title: 'FatecBook - Rede Social Acadêmica',
            description: 'Projeto de estudo que recria funcionalidades de uma rede social voltada para o ambiente acadêmico usando Handlebars como template engine.',
            technologies: ['Node.js', 'Handlebars', 'JavaScript', 'PostgreSQL'],
            status: 'Concluído',
            github: 'https://github.com/Felipe-SMZ/FatecBook.git',
            demo: null,
            highlights: [
                'Template engine Handlebars',
                'Sistema de posts',
                'CRUD completo',
                'Integração com banco'
            ],
            category: 'Full-Stack',
            image: fatecBookImg,
            learning: 'Projeto de aprendizado'
        }
    ];

    return (
        <section id="projetos" className="py-32 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                        Portfólio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Meus Projetos
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Do aprendizado à implementação real
                    </p>
                </div>

                {/* Grid de Projetos */}
                <div className="space-y-12">

                    {projects.map((project, index) => {
                        const colors = projectColors[project.id];
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className={`relative group`}>
                                    {/* Glow Background */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Card Principal */}
                                    <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 ${colors.border} transition-all duration-300 overflow-hidden`}>

                                        {/* Grid Layout - Alternado */}
                                        <div className={`grid md:grid-cols-2 gap-8 p-8`}>

                                            {/* Imagem e Badges - Muda posição */}
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                                                className={`flex flex-col gap-4 ${isEven ? 'md:order-1 order-2' : 'md:order-2 order-2'}`}
                                            >
                                                {/* Status Badges */}
                                                <div className="flex flex-wrap gap-2">
                                                    <span className={`text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm border ${project.status === 'Em Desenvolvimento'
                                                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                                                        : 'bg-green-500/20 text-green-300 border-green-500/50'
                                                        }`}>
                                                        {project.status}
                                                    </span>
                                                    <span className={`text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm border bg-${['cyan', 'red', 'purple', 'orange', 'green', 'blue'][project.id - 1]}-500/20 text-${['cyan', 'red', 'purple', 'orange', 'green', 'blue'][project.id - 1]}-300 border-${['cyan', 'red', 'purple', 'orange', 'green', 'blue'][project.id - 1]}-500/50`}>
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Tecnologias com cores */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.slice(0, 6).map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`text-xs px-3 py-1.5 rounded-full font-semibold bg-gradient-to-r ${getTechColor(tech)} text-white shadow-lg shadow-${getTechColor(tech).split(' ')[1]}/30 backdrop-blur-sm`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 6 && (
                                                        <span className="text-xs px-3 py-1.5 rounded-full font-semibold bg-gray-800 text-gray-400 border border-gray-700">
                                                            +{project.technologies.length - 6} mais
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Imagem */}
                                                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-gray-700 group/img">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}></div>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        loading="lazy"
                                                        className="relative h-full w-full object-contain p-6 group-hover/img:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Conteúdo Texto - Muda posição */}
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                                                className={`flex flex-col justify-between ${isEven ? 'md:order-2 order-1' : 'md:order-1 order-1'}`}
                                            >
                                                {/* Título e Descrição */}
                                                <div>
                                                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-400 mb-5 leading-relaxed text-base">
                                                        {project.description}
                                                    </p>

                                                    {/* Highlights */}
                                                    <div className="mb-6">
                                                        <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Destaques:</p>
                                                        <ul className="space-y-1.5">
                                                            {project.highlights.slice(0, 4).map((highlight, idx) => (
                                                                <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                                                                    <span className="text-cyan-400 mt-1 flex-shrink-0">✦</span>
                                                                    <span>{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Botões */}
                                                <div className="flex gap-3 flex-wrap">
                                                    <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 min-w-[140px] bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition border border-gray-700 hover:border-cyan-500 text-center text-sm"
                                                    >
                                                        {project.githubFrontend ? '🔧 Backend' : '💻 Ver Código'}
                                                    </motion.a>
                                                    {project.githubFrontend && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={project.githubFrontend}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 min-w-[140px] bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition border border-gray-700 hover:border-blue-500 text-center text-sm"
                                                        >
                                                            🎨 Frontend
                                                        </motion.a>
                                                    )}
                                                    {project.demo && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 min-w-[140px] bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition text-center text-sm shadow-lg shadow-cyan-500/50"
                                                        >
                                                            🚀 Ver Demo
                                                        </motion.a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16 py-12 px-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 backdrop-blur-sm"
                >
                    <p className="text-gray-400 mb-4 text-lg">
                        Sempre trabalhando em novos projetos e aprendendo novas tecnologias
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Felipe-SMZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3.5 px-8 rounded-lg transition shadow-lg shadow-cyan-500/40"
                    >
                        <span>🔗</span> Ver GitHub Completo
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}

export default Projects;