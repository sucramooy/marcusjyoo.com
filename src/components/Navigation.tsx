// src/components/Navigation.tsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "pcbrule", label: "PCBrule", to: "/pcbrule" }
  ];

  return (
    <nav className="bg-[#2d2d2d] border-b border-[#44475a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={() => navigate("/")}
            className="text-xl font-medium text-[#f8f8f2] hover:text-[#bd93f9] transition-colors"
          >
            Marcus Yoo
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                end={item.to === "/"} // make "/" match exactly
                className={({ isActive }) =>
                  `px-3 py-2 transition-colors ${
                    isActive
                      ? "text-[#bd93f9] border-b-2 border-[#bd93f9]"
                      : "text-[#f8f8f2] hover:text-[#bd93f9]"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f8f8f2] hover:bg-[#44475a]"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#44475a] py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.to);
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-2 text-left transition-colors text-[#f8f8f2] hover:text-[#bd93f9] hover:bg-[#44475a]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
