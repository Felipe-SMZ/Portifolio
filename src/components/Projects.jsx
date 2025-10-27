import fatecRideImg from '../assets/img/fatecride1.png';
import fatecBookImg from '../assets/img/fatecbook1.png';
import logoImg from '../assets/img/logo.png';
import javablogImg from '../assets/img/javablog.png';
import bakerylogoImg from '../assets/img/bakerylogo.png';

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
            image: fatecRideImg,
            learning: 'Aprendizado inicial em React'
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
            technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'Swagger'],
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
        }
    ];

    return (
        <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
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
                                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-contain"
                                        />
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