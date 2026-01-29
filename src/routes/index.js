import GlobalPagesLayout from "layouts/GlobalPagesLayout/GlobalPagesLayout";
import MainLayout from "layouts/MainLayout/MainLayout";
import AboutUs from "pages/AboutUs/AboutUs";
import CalculateYourSavings from "pages/CalculateYourSavings/CalculateYourSavings";
import ContactUs from "pages/ContactUs/ContactUs";
import Home from "pages/Home/Home";
import OurTeam from "pages/OurTeam/OurTeam";
import Partners from "pages/Partners/Partners";
import Pricing from "pages/Pricing/Pricing";
import PrivacyPolicy from "pages/PrivacyPolicy/PrivacyPolicy";
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
				{
					path: "calculate-your-savings",
					element: <CalculateYourSavings />,
				},
			],
		},
		{
			path: "",
			element: <GlobalPagesLayout />,
			children: [
				{
					path: "/privacy-policy",
					element: <PrivacyPolicy />,
				},
				{
					path: "/about-us",
					element: <AboutUs />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
