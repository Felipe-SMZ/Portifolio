import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/50 transition-all hover:scale-110 duration-300"
                aria-label="Voltar ao topo"
            >
                <FaArrowUp className="text-lg" />
            </button>
        )
    );
}

export default ScrollToTop;
