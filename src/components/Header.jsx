import '../styles/Header.css'; // Import the styles

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo">My Portfolio</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
