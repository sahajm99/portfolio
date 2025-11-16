import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            Sahaj Mekala
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

