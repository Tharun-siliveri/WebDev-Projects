import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <section>
                <h1>My Blog</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/articles">Articles</Link>
                    </div>
                </div>
            </section>
        </nav>
    );
}
export default NavBar;