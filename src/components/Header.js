import { Link } from "react-router-dom"
import "../styles/Header.css"

export default function Header() {
	return (
		<header className="App-header">
			<nav>
				<span className="wrapper-logo">
					<span><Link to="/">Guitar Theory</Link></span>
					{/* <img className="logo" src={logo} alt="guitar icon" /> */}
				</span>
				<Link to="/">Notes</Link>
				<Link to="/scales">Scales</Link>
				<Link to="/info">Info</Link>
			</nav>
		</header>
	)
}