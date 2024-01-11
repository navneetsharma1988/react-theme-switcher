import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <div className="page">
            <h1>Home Page</h1>
            <p>Welcome to Home Page</p>
            <Link to="/">Go to home</Link>
        </div>
    )
}

export default Home