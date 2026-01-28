import MainLayout from "layouts/MainLayout/MainLayout";
import ContactUs from "pages/ContactUs/ContactUs";
import Home from "pages/Home/Home";
import OurTeam from "pages/OurTeam/OurTeam";
import Partners from "pages/Partners/Partners";
import Pricing from "pages/Pricing/Pricing";
import Services from "pages/Services/Services";
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
				{
					path: "team",
					element: <OurTeam />,
				},
				{
					path: "services",
					element: <Services />,
				},
				{
					path: "pricing",
					element: <Pricing />,
				},
				{
					path: "contact-us",
					element: <ContactUs />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
