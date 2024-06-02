import { Outlet } from "react-router-dom";
import scss from "./LayoutAuth.module.scss";

const LayoutAuth = () => {
	return (
		<div className={scss.LayoutAuth}>
			<Outlet />
		</div>
	);
};

export default LayoutAuth;
