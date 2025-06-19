
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MI</span>
            </div>
<<<<<<< HEAD
            <span className="text-xl font-bold text-gray-900 uppercase">
              MAHBUB
            </span>
=======
            <span className="text-xl font-bold text-white">Mahbub Islam</span>
>>>>>>> f786f52c8473aeaf9e264635c712fafc16a7b2f5
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
<<<<<<< HEAD
                className={`text-sm font-semibold uppercase transition-colors hover:text-blue-600 ${
                  isActive(item.href) ? "text-blue-600" : "text-gray-700"
=======
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  isActive(item.href) ? "text-cyan-400" : "text-gray-300"
>>>>>>> f786f52c8473aeaf9e264635c712fafc16a7b2f5
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

<<<<<<< HEAD
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
=======
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
>>>>>>> f786f52c8473aeaf9e264635c712fafc16a7b2f5
            <Link to="/contact">Get In Touch</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
<<<<<<< HEAD
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-700"
=======
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-cyan-400 ${
                    isActive(item.href) ? "text-cyan-400" : "text-gray-300"
>>>>>>> f786f52c8473aeaf9e264635c712fafc16a7b2f5
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
