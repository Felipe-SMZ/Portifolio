function About() {
    return (
        <section id="sobre" className="py-20 px-4 bg-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        👋 Quem sou eu
                    </h2>
                    <br />
                    <p className="text-justify text-gray-300 text-lg mb-8 leading-relaxed">
                        Olá! Meu nome é Felipe Shimizu, sou apaixonado por tecnologia,
                        criatividade e soluções inteligentes. Gosto de transformar
                        ideias em experiências digitais que façam sentido para
                        as pessoas. Curioso por natureza, estou sempre explorando novas
                        formas de aprender e evoluir — tanto como desenvolvedor quanto como ser humano.
                    </p>
                </div>


                <div className="text-gray-300 text-lg leading-relaxed">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        💻 Por que escolhi programação
                    </h2>
                    <br />
                    <p className="text-justify">
                        A programação entrou na minha vida como uma ferramenta poderosa para
                        criar, resolver problemas e expressar ideias. Gosto da lógica, da liberdade de
                        construir algo do zero e da possibilidade de impactar o mundo com linhas de código.
                        Para mim, programar é como aprender uma nova linguagem — só que essa linguagem pode
                        mudar o futuro.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;