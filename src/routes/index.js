import MainLayout from "layouts/MainLayout/MainLayout";
import Home from "pages/Home/Home";
import Partners from "pages/Partners/Partners";
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
				{
					path: "partners",
					element: <Partners />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
