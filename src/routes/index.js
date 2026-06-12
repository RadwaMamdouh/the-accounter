import GlobalPagesLayout from "layouts/GlobalPagesLayout/GlobalPagesLayout";
import MainLayout from "layouts/MainLayout/MainLayout";
import AboutUs from "pages/AboutUs/AboutUs";
import CalculateYourSavings from "pages/CalculateYourSavings/CalculateYourSavings";
import ContactUs from "pages/ContactUs/ContactUs";
import CookiePolicy from "pages/CookiePolicy/CookiePolicy";
import FAQs from "pages/FAQs/FAQs";
import GetStarted from "pages/GetStarted/GetStarted";
import Home from "pages/Home/Home";
import HowItWorks from "pages/HowItWorks/HowItWorks";
import NotFound from "pages/NotFound/NotFound";
import OurGallery from "pages/OurGallery/OurGallery";
import OurTeam from "pages/OurTeam/OurTeam";
import OurVideos from "pages/OurVideos/OurVideos";
import Partners from "pages/Partners/Partners";
import Pricing from "pages/Pricing/Pricing";
import PrivacyPolicy from "pages/PrivacyPolicy/PrivacyPolicy";
import Services from "pages/Services/Services";
import TermsAndConditions from "pages/TermsAndConditions/TermsAndConditions";
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
				{
					path: "/faqs",
					element: <FAQs />,
				},
				{
					path: "gallery",
					element: <OurGallery />,
				},
				{
					path: "videos",
					element: <OurVideos />,
				},
				{
					path: "how-it-works",
					element: <HowItWorks />,
				},
				{
					path: "get-started",
					element: <GetStarted />,
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
				{
					path: "/terms-and-conditions",
					element: <TermsAndConditions />,
				},
				{
					path: "/cookie-policy",
					element: <CookiePolicy />,
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
