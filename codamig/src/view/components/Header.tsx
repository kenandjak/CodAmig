import logo from "../assets/logo_header.png";
import profile from "../assets/icons/profile_icon.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header
      className={classNames(
        "w-full bg-gradient-purple flex flex-col justify-center items-center relative",
        className
      )}
    >
      <Link className="c-header__logo" to="/">
        <img
          src={logo}
          alt="Botão principal com logo do texugo"
          className="w-14 ms:w-16 lg:w-20 transform transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="absolute right-4 flex items-center gap-4">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 ms:w-10 ms:h-10 lg:w-11 lg:h-11 rounded-full bg-emerald-500 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <img
              src={profile}
              alt="Botão de perfil para fazer login ou verificar a conta"
              className="w-8 h-8 ms:w-9 ms:h-9 lg:w-10 lg:h-10"
            />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-6 w-52 bg-purple-heavy rounded-md shadow-lg py-1 z-10">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm ms:text-lg lg:text-xl text-white hover:bg-purple-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              {/* Você pode adicionar mais opções aqui no futuro */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
