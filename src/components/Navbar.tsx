import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ThemeState, toggleTheme } from "../store/themeSlice";

const Navbar = () => {

    const isDarkMode = useSelector<ThemeState>(state => state.isDarkMode);
    const theme = isDarkMode ? "dark" : "light"
    const dispatch = useDispatch();

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
                        onChange={() => dispatch(toggleTheme())}
                        checked={theme === "dark"}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    )
}

export default Navbar