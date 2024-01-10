import { Link } from "react-router-dom"
import { useTheme } from "../context/useTheme"

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar ${theme}`}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className="mode-switch">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => toggleTheme()}
                        checked={theme === "dark"}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    )
}

export default Navbar