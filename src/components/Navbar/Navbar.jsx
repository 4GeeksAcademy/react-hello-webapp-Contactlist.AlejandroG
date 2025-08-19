import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);

	const darkModeOn = () => {
		document.body.classList.toggle("dark-mode");
		setDarkMode(!darkMode);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="navbar-title">
				📇 Contact List
			</Link>

			<div className="navbar-center">
				<Link to="/form">
					<button className="btn-create">+ Create Contact</button>
				</Link>
			</div>

			<div className="navbar-right">
				<button className="btn-darkmode" onClick={darkModeOn}>
					{darkMode ? <FaSun /> : <FaMoon />}
				</button>
			</div>
		</nav>
	);
};
