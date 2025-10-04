import minhaLogo from '../assets/img/logo.png'

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 z-50">


            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* logo */}
                <div className="text-white text-2xl font-bold flex items-center gap-8">
                    <img src={minhaLogo} alt="Logo" className="w-24 h-24 object-cover border-8 border-purple-" />
                    Felipe Shimizu
                </div>

                {/* menu */}
                <ul className="flex gap-8">
                    <li>
                        <a href="#sobre" className="text-gray-300 hover:text-white">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" className="text-gray-300 hover:text-white">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#contato" className="text-gray-300 hover:text-white">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;