import minhaFoto from '../assets/img/Fot.jpg';
import { FaRocket } from 'react-icons/fa';

function Hero() {
    return (
        <section id="hero" className="min-h-screen grid md:grid-cols-2 bg-black text-white">

            {/* Imagem à esquerda */}
            <img
                src={minhaFoto}
                alt="Felipe"
                className="w-full h-full object-cover object-center brightness-90 border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
            />




            {/* Texto à direita */}
            <div className="flex items-center justify-center px-6 md:px-12">
                <div className="max-w-xl">
                    <p className="text-purple-400 text-lg mb-2">OLÁ, EU SOU</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Felipe Shimizu</h1>
                    <h2 className="text-3xl text-gray-300 mb-6">Desenvolvedor Full Stack em formação</h2>
                    <p className="text-gray-200 text-lg mb-8 leading-relaxed text-justify">
                        Transformo curiosidade em código e café em projetos. Estou em formação como
                        Desenvolvedor Full Stack, aprendendo a construir aplicações completas com Java,
                        Spring Boot e React. Sempre em busca de novos aprendizados e desafios.
                    </p>
                    <a
                        href="#projetos"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
                    >
                        Ver Projetos <FaRocket className="text-yellow-400 animate-bounce" />
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Hero;
