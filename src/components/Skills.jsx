import { useState } from 'react';
import { motion } from 'framer-motion';
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
    SiSpringboot,
    SiGitlab
} from 'react-icons/si';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const colorMap = {
        cyan: { border: 'hover:border-cyan-500', glow: 'from-cyan-500/10' },
        yellow: { border: 'hover:border-yellow-500', glow: 'from-yellow-500/10' },
        orange: { border: 'hover:border-orange-500', glow: 'from-orange-500/10' },
        blue: { border: 'hover:border-blue-500', glow: 'from-blue-500/10' },
        red: { border: 'hover:border-red-500', glow: 'from-red-500/10' },
        green: { border: 'hover:border-green-500', glow: 'from-green-500/10' },
        purple: { border: 'hover:border-purple-500', glow: 'from-purple-500/10' },
        sky: { border: 'hover:border-sky-500', glow: 'from-sky-500/10' },
    };
    const skills = [
        // Backend (Primeiro!)
        {
            name: 'Java',
            level: 'Intermediário',
            proficiency: 80,
            icon: <FaJava className="text-red-500 text-6xl mx-auto" />,
            description: 'POO, Spring Boot, APIs REST',
            category: 'Backend',
            color: 'red'
        },
        {
            name: 'Spring Boot',
            level: 'Intermediário',
            proficiency: 82,
            icon: <SiSpringboot className="text-green-500 text-6xl mx-auto" />,
            description: 'APIs REST, Bean Validation, JWT',
            category: 'Backend',
            color: 'green'
        },
        {
            name: 'Node.js',
            level: 'Intermediário',
            proficiency: 72,
            icon: <FaNodeJs className="text-green-400 text-6xl mx-auto" />,
            description: 'APIs, Express, CRUD',
            category: 'Backend',
            color: 'green'
        },
        {
            name: 'Python',
            level: 'Básico',
            proficiency: 55,
            icon: <FaPython className="text-yellow-400 text-6xl mx-auto" />,
            description: 'Sintaxe, Scripts, Automação',
            category: 'Backend',
            color: 'yellow'
        },

        // Frontend
        {
            name: 'React',
            level: 'Intermediário',
            proficiency: 85,
            icon: <FaReact className="text-cyan-400 text-6xl mx-auto" />,
            description: 'Componentes, Props, Hooks, API Integration',
            category: 'Frontend',
            color: 'cyan'
        },
        {
            name: 'JavaScript',
            level: 'Intermediário',
            proficiency: 80,
            icon: <FaJsSquare className="text-yellow-400 text-6xl mx-auto" />,
            description: 'ES6+, DOM, Funções, Fetch/Async',
            category: 'Frontend',
            color: 'yellow'
        },
        {
            name: 'HTML/CSS',
            level: 'Intermediário',
            proficiency: 82,
            icon: (
                <div className="flex justify-center gap-2">
                    <FaHtml5 className="text-orange-500 text-6xl" />
                    <FaCss3Alt className="text-blue-500 text-6xl" />
                </div>
            ),
            description: 'Estrutura, Estilização, Responsividade',
            category: 'Frontend',
            color: 'orange'
        },
        {
            name: 'Tailwind CSS',
            level: 'Intermediário',
            proficiency: 78,
            icon: <SiTailwindcss className="text-sky-400 text-6xl mx-auto" />,
            description: 'Utility Classes, Responsividade rápida',
            category: 'Frontend',
            color: 'sky'
        },

        // Banco de Dados
        {
            name: 'PostgreSQL',
            level: 'Intermediário',
            proficiency: 78,
            icon: <SiPostgresql className="text-blue-500 text-6xl mx-auto" />,
            description: 'Queries SQL, Tabelas, Relacionamentos',
            category: 'Database',
            color: 'blue'
        },
        {
            name: 'MySQL',
            level: 'Intermediário',
            proficiency: 75,
            icon: <SiMysql className="text-blue-400 text-6xl mx-auto" />,
            description: 'CRUD, Relacionamentos, Procedures',
            category: 'Database',
            color: 'blue'
        },
        {
            name: 'MongoDB',
            level: 'Aprendendo',
            proficiency: 65,
            icon: <SiMongodb className="text-green-500 text-6xl mx-auto" />,
            description: 'NoSQL, Documentos, Agregações',
            category: 'Database',
            color: 'green'
        },

        // Mobile
        {
            name: 'Kotlin',
            level: 'Básico',
            proficiency: 60,
            icon: <SiKotlin className="text-purple-500 text-6xl mx-auto" />,
            description: 'Android, Coroutines, MVVM',
            category: 'Mobile',
            color: 'purple'
        },

        // Ferramentas
        {
            name: 'Git/GitHub',
            level: 'Intermediário',
            proficiency: 85,
            icon: (
                <div className="flex justify-center gap-2">
                    <FaGitAlt className="text-orange-500 text-6xl" />
                    <FaGithub className="text-white text-6xl" />
                </div>
            ),
            description: 'Commits, Push, Pull, Branches',
            category: 'Tools',
            color: 'orange'
        },
        {
            name: 'GitLab',
            level: 'Básico',
            proficiency: 65,
            icon: <SiGitlab className="text-orange-500 text-6xl mx-auto" />,
            description: 'Repositórios, CI/CD, Issues',
            category: 'Tools',
            color: 'orange'
        },
        {
            name: 'Vite',
            level: 'Básico',
            proficiency: 70,
            icon: <SiVite className="text-purple-400 text-6xl mx-auto" />,
            description: 'Build Tool, Hot Reload',
            category: 'Tools',
            color: 'purple'
        },
    ];

    const categories = ['Todos', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools'];
    const filteredSkills = selectedCategory === 'Todos' 
        ? skills 
        : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className="py-32 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
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

                {/* Filtros por Categoria */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                                    : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500'
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => {
                        const colors = colorMap[skill.color] || colorMap.cyan;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`relative bg-gray-900 p-6 rounded-xl transition-all duration-300 border border-gray-700 ${colors.border} group overflow-hidden`}
                            >
                                {/* Glow Effect Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                                
                                <div className="relative z-10">
                                    {/* Ícone com Glow */}
                                    <div className={`text-6xl mb-4 text-center transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}>
                                        {skill.icon}
                                    </div>

                                    {/* Nome */}
                                    <h3 className="text-2xl font-bold text-center mb-2">
                                        {skill.name}
                                    </h3>

                                    {/* Badge de Nível */}
                                    <div className="flex justify-center mb-4">
                                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${skill.level === 'Aprendendo'
                                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                                            : skill.level === 'Básico'
                                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                                                : 'bg-green-500/20 text-green-400 border border-green-500/50'
                                            }`}>
                                            {skill.level}
                                        </span>
                                    </div>

                                    {/* Barra de Proficiência */}
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-gray-400">Proficiência</span>
                                            <span className="text-sm font-semibold text-cyan-400">{skill.proficiency}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.proficiency}%` }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                className={`h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full`}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    {/* Descrição */}
                                    <p className="text-gray-400 text-center text-sm">
                                        {skill.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mensagem quando não há resultados */}
                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">
                            Nenhuma habilidade encontrada nesta categoria
                        </p>
                    </div>
                )}

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