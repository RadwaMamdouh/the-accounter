import MainLayout from "layouts/MainLayout/MainLayout";
import Home from "pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					index: true,
					path: "",
					element: <Home />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
