import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { colors, setTheme } = useTheme();

  return (
    <header
      className="d-flex"
      style={{
        background: colors.primary,
        color: "#fff",
        padding: "20px",
      }}
    >
      <div className="Logo">
        <h1>Tester App</h1>
      </div>

      <div className="Menu">
        <ul className="ul-d-flex">
          <Link to="/" className="text-white">
            Home
          </Link>
              <Link to="/product" className="text-white">
            Products
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
       <Link to="/contact" className="text-white">
            Contact
          </Link>
       
        </ul>
      </div>

      <div className="ColorOption">
        <button onClick={() => setTheme("pink")} className="btn">
          Pink
        </button>
        <button onClick={() => setTheme("blue")} className="btn">
          Blue
        </button>
        <button onClick={() => setTheme("green")} className="btn">
          Green
        </button>
        <button onClick={() => setTheme("dark")} className="btn">
          Dark
        </button>
      </div>
    </header>
  );
};

export default Header;
