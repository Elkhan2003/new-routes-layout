import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import LayoutAuth from "../pagesAuth/components/LayoutAuth";
import LoginPage from "../pagesAuth/pages/LoginPage";
import RegistrationPage from "../pagesAuth/pages/RegistrationPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutSide />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
		],
	},
	{
		path: "/auth",
		element: <LayoutAuth />,
		children: [
			{
				path: "/auth/login",
				element: <LoginPage />,
			},
			{
				path: "/auth/registration",
				element: <RegistrationPage />,
			},
		],
	},
]);
