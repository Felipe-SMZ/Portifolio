import minhaFoto from '../assets/img/Fot.jpg'

function Hero() {
    return (
        <section id="sobre" className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Avatar/Foto */}
                <div className="flex justify-center">
                    <img
                        src={minhaFoto}
                        alt="Felipe"
                        className="w-96 h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
                    />
                </div>

                {/* Textos */}
                <div className="text-center md:text-left">
                    <p className="text-purple-400 text-lg mb-2">
                        OLÁ, EU SOU
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Felipe Shimizu
                    </h1>

                    <h2 className="text-3xl text-gray-400 mb-6">
                        Desenvolvedor Full Stack em formação
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Transformo curiosidade em código e café em projetos. Estou em formação como
                        Desenvolvedor Full Stack, aprendendo a construir aplicações completas com Java,
                        Spring Boot e React. Sempre em busca de novos aprendizados e desafios.
                    </p>

                    <a
                        href="#projetos"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
                    >
                        Ver Projetos 🚀
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;