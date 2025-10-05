function Projects() {
    const projects = [
        {
            id: 1,
            title: 'FatecRide - Carona Solidária',
            description: 'Sistema de caronas colaborativas desenvolvido como Projeto Integrador. Conecta estudantes que oferecem e procuram caronas, promovendo economia e sustentabilidade na comunidade acadêmica.',
            technologies: ['React', 'JavaScript', 'CSS', 'MySQL'],
            status: 'Em Desenvolvimento',
            github: 'https://github.com/Felipe-SMZ/fatecRide.git',
            demo: null,
            highlights: [
                'Interface com React',
                'Sistema de rotas',
                'Trabalho em equipe (PI)',
                'Primeiro projeto React'
            ],
            category: 'Full-Stack',
            image: '🚗',
            learning: 'Aprendizado inicial em React'
        },
        {
            id: 2,
            title: 'Blog com Autenticação JWT',
            description: 'API REST desenvolvida em Java para sistema de blog com autenticação segura. Implementa JWT (JSON Web Tokens) para controle de acesso e segurança.',
            technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
            status: 'Em Desenvolvimento',
            github: 'https://github.com/Felipe-SMZ/Blog.git',
            demo: null,
            highlights: [
                'Autenticação JWT',
                'API RESTful',
                'Spring Boot',
                'Segurança de dados'
            ],
            category: 'Backend',
            image: '☕',
            learning: 'Estudando Java e autenticação'
        },
        {
            id: 3,
            title: 'FatecBook - Rede Social Acadêmica',
            description: 'Projeto de estudo que recria funcionalidades de uma rede social voltada para o ambiente acadêmico usando Handlebars como template engine.',
            technologies: ['Node.js', 'Handlebars', 'JavaScript', 'MySQL'],
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
            image: '📱',
            learning: 'Projeto de aprendizado'
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
            image: '🎨',
            learning: 'Projeto atual'
        }
    ];

    return (
        <section id="projetos" className="py-20 px-4 bg-gray-900">
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
                <div className="space-y-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="grid md:grid-cols-5 gap-6 p-6">

                                {/* Lado Esquerdo - Ícone */}
                                <div className="md:col-span-1 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-5xl border border-purple-500/30">
                                        {project.image}
                                    </div>
                                </div>

                                {/* Lado Direito - Informações */}
                                <div className="md:col-span-4 flex flex-col justify-between">

                                    {/* Header */}
                                    <div>
                                        {/* Badges */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${project.status === 'Em Desenvolvimento'
                                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                                                    : 'bg-green-500/20 text-green-400 border border-green-500/50'
                                                }`}>
                                                {project.status}
                                            </span>
                                            <span className="text-xs px-3 py-1 rounded-full font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/50">
                                                {project.category}
                                            </span>
                                            {project.learning && (
                                                <span className="text-xs px-3 py-1 rounded-full font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/50">
                                                    {project.learning}
                                                </span>
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h3 className="text-2xl font-bold mb-3">
                                            {project.title}
                                        </h3>

                                        {/* Descrição */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Highlights em grid 2 colunas */}
                                        <div className="mb-4">
                                            <ul className="grid grid-cols-2 gap-2">
                                                {project.highlights.map((highlight, index) => (
                                                    <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                                                        <span className="text-purple-400 mt-0.5">→</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tecnologias */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botões */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2.5 px-5 rounded-lg transition text-center border border-gray-700 hover:border-purple-500 text-sm"
                                        >
                                            Ver Código
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-lg transition text-center text-sm"
                                            >
                                                Ver Demo
                                            </a>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Sempre trabalhando em novos projetos e aprendendo novas tecnologias
                    </p>
                    <a
                        href="https://github.com/Felipe-SMZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition border border-gray-700 hover:border-purple-500"
                    >
                        Ver GitHub Completo
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;