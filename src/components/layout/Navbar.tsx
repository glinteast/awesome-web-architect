
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/img/corlate-logo-two.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change navbar appearance when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "py-6 bg-background/95 backdrop-blur-md md:bg-inherit"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <img 
            src={logo}  
            alt="Corlate Technologies" 
            className="h-10 w-40 md:h-20 md:w-52 object-cover"
          />
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
              )
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
              )
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="button-hover-effect inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            Book a Service
          </NavLink>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className={cn(
            "md:hidden fixed inset-0 z-40 animate-fade-in",
            isScrolled ? "top-[57px]" : "top-[81px]",
            "bg-background/98 backdrop-blur-md shadow-lg"
          )}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="button-hover-effect inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Service
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
