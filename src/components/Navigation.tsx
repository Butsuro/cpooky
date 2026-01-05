import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-1">
      <div
        className={`max-w-[250px] lg:max-w-xl md:max-w-sm  mx-auto transition-all duration-500 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        } lg:rounded-full md:rounded-[20px] rounded-[20px] lg:px-8  py-1`}
      >
        <div className="flex items-center justify-center gap-16">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-base font-normal transition-colors ${
                  isScrolled
                    ? "text-white hover:text-white/70"
                    : "text-gray-800 hover:text-gray-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-white" : "text-gray-800"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* CTA Button */}
          <Button 
            className={`rounded-[20px] px-5 transition-all ${
              isScrolled
                ? "bg-white hover:bg-white/90"
                : "bg-black hover:bg-gray-800"
            }`}
            onClick={() => window.open('https://chat.whatsapp.com/FUX8CdTF4TvCNhc9YWWUjj', '_blank')}
          >
            <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent font-bold">
              Sign Up
            </span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pb-6 pt-6 mt-6 border-t border-gray-200/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`text-lg font-normal transition-colors duration-500 ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;