import logo from "../assets/logo_header.png";
import { Link } from "react-router-dom";
import classNames from "classnames";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header
      className={classNames(
        "w-full bg-gradient-purple flex flex-col justify-center items-center",
        className
      )}
    >
      <Link className="c-header__logo" to="/">
        <img
          src={logo}
          alt="Botão principal com logo do texugo"
          className="w-14 ms:w-16 md:w-20"
        />
      </Link>
    </header>
  );
}
export default Header;
