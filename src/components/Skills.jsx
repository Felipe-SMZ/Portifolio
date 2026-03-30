import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaPython,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiVite,
    SiKotlin,
    SiSpringboot
} from 'react-icons/si';

function Skills() {
    const skills = [
        // Frontend
        {
            name: 'React',
            level: 'Intermediário',
            icon: <FaReact className="text-cyan-400 text-6xl mx-auto" />,
            description: 'Componentes, Props, Hooks, API Integration',
            category: 'Frontend'
        },
        {
            name: 'JavaScript',
            level: 'Intermediário',
            icon: <FaJsSquare className="text-yellow-400 text-6xl mx-auto" />,
            description: 'ES6+, DOM, Funções, Fetch/Async',
            category: 'Frontend'
        },
        {
            name: 'HTML/CSS',
            level: 'Intermediário',
            icon: (
                <div className="flex justify-center gap-2">
                    <FaHtml5 className="text-orange-500 text-6xl" />
                    <FaCss3Alt className="text-blue-500 text-6xl" />
                </div>
            ),
            description: 'Estrutura, Estilização, Responsividade',
            category: 'Frontend'
        },
        {
            name: 'Tailwind CSS',
            level: 'Básico/Intermediário',
            icon: <SiTailwindcss className="text-sky-400 text-6xl mx-auto" />,
            description: 'Utility Classes, Responsividade rápida',
            category: 'Frontend'
        },

        // Backend
        {
            name: 'Java',
            level: 'Intermediário',
            icon: <FaJava className="text-red-500 text-6xl mx-auto" />,
            description: 'POO, Spring Boot, APIs REST',
            category: 'Backend'
        },
        {
            name: 'Spring Boot',
            level: 'Intermediário',
            icon: <SiSpringboot className="text-green-500 text-6xl mx-auto" />,
            description: 'APIs REST, Bean Validation, JWT',
            category: 'Backend'
        },
        {
            name: 'Node.js',
            level: 'Básico/Aprendendo',
            icon: <FaNodeJs className="text-green-400 text-6xl mx-auto" />,
            description: 'APIs, Express, CRUD',
            category: 'Backend'
        },
        {
            name: 'Python',
            level: 'Básico',
            icon: <FaPython className="text-yellow-400 text-6xl mx-auto" />,
            description: 'Sintaxe, Scripts, Automação',
            category: 'Backend'
        },
        {
            name: 'Kotlin',
            level: 'Básico',
            icon: <SiKotlin className="text-purple-500 text-6xl mx-auto" />,
            description: 'Android, Coroutines, MVVM',
            category: 'Backend/Frontend'
        },

        // Banco de Dados
        {
            name: 'PostgreSQL',
            level: 'Intermediário',
            icon: <SiPostgresql className="text-blue-500 text-6xl mx-auto" />,
            description: 'Queries SQL, Tabelas, Relacionamentos',
            category: 'Database'
        },
        {
            name: 'MySQL',
            level: 'Intermediário',
            icon: <SiMysql className="text-blue-400 text-6xl mx-auto" />,
            description: 'CRUD, Relacionamentos, Procedures',
            category: 'Database'
        },
        {
            name: 'MongoDB',
            level: 'Aprendendo',
            icon: <SiMongodb className="text-green-500 text-6xl mx-auto" />,
            description: 'NoSQL, Documentos, Agregações',
            category: 'Database'
        },

        // Ferramentas
        {
            name: 'Git/GitHub',
            level: 'Intermediário',
            icon: (
                <div className="flex justify-center gap-2">
                    <FaGitAlt className="text-orange-500 text-6xl" />
                    <FaGithub className="text-white text-6xl" />
                </div>
            ),
            description: 'Commits, Push, Pull, Branches',
            category: 'Tools'
        },
        {
            name: 'Vite',
            level: 'Básico',
            icon: <SiVite className="text-purple-400 text-6xl mx-auto" />,
            description: 'Build Tool, Hot Reload',
            category: 'Tools'
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                        Stack Tecnológico
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Minhas Habilidades
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Construindo base sólida em desenvolvimento full-stack
                    </p>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-850 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500"
                        >
                            {/* Ícone */}
                            <div className="text-6xl mb-4 text-center">
                                {skill.icon}
                            </div>

                            {/* Nome */}
                            <h3 className="text-2xl font-bold text-center mb-2">
                                {skill.name}
                            </h3>

                            {/* Badge de Nível */}
                            <div className="flex justify-center mb-3">
                                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${skill.level === 'Aprendendo'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                                    : skill.level === 'Básico'
                                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                                        : 'bg-green-500/20 text-green-400 border border-green-500/50'
                                    }`}>
                                    {skill.level}
                                </span>
                            </div>

                            {/* Descrição */}
                            <p className="text-gray-400 text-center text-sm">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mensagem motivacional */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-lg">
                        🚀 Sempre aprendendo e evoluindo!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;