import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";

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
]);
