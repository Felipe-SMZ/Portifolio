import minhaLogo from '../assets/img/logo.png'

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 z-50">


            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo + Nome */}
                <div className="flex items-center gap-3">
                    <img
                        src={minhaLogo}
                        alt="Felipe Shimizu"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-white text-xl font-bold">
                        Felipe Shimizu
                    </span>
                </div>
                {/* menu */}
                <ul className="flex gap-8">
                    <li>
                        <a href="#sobre" className="text-gray-300 hover:text-white">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-gray-300 hover:text-white">
                            Skills
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