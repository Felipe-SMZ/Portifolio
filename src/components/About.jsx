function About() {
    return (
        <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Seção 1: Quem sou eu */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                            Conheça mais
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            👋 Quem sou eu
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                        Olá! Meu nome é <span className="text-white font-semibold">Felipe Shimizu</span>,
                        sou apaixonado por tecnologia, criatividade e soluções inteligentes.
                        Gosto de transformar ideias em experiências digitais que façam sentido para as pessoas.
                        Curioso por natureza, estou sempre explorando novas formas de aprender e evoluir —
                        tanto como desenvolvedor quanto como ser humano.
                    </p>
                </div>

                {/* Seção 2: Por que programação */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            💻 Por que escolhi programação
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                        A programação entrou na minha vida como uma ferramenta poderosa para criar,
                        resolver problemas e expressar ideias. Gosto da lógica, da liberdade de construir
                        algo do zero e da possibilidade de impactar o mundo com linhas de código.
                        Para mim, programar é como <span className="text-purple-400 font-semibold">aprender uma nova linguagem</span> —
                        só que essa linguagem pode mudar o futuro.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition">
                        <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
                        <div className="text-gray-400 text-sm">Anos Codando</div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition">
                        <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                        <div className="text-gray-400 text-sm">Tecnologias</div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition">
                        <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                        <div className="text-gray-400 text-sm">Projetos</div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition">
                        <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                        <div className="text-gray-400 text-sm">Dedicação</div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;