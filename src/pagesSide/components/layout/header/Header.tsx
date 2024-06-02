import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import { sideLinks } from "../../../../routes/links";

const Header = () => {
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<h1>Logo</h1>
					</div>
					<nav className={scss.nav}>
						<ul>
							{sideLinks.map((item, index) => (
								<li key={index}>
									<Link to={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
