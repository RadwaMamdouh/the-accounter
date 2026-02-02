import GlobalPagesLayout from "layouts/GlobalPagesLayout/GlobalPagesLayout";
import MainLayout from "layouts/MainLayout/MainLayout";
import AboutUs from "pages/AboutUs/AboutUs";
import BlogDetails from "pages/BlogDetails/BlogDetails";
import Blogs from "pages/Blogs/Blogs";
import CalculateYourSavings from "pages/CalculateYourSavings/CalculateYourSavings";
import ContactUs from "pages/ContactUs/ContactUs";
import FAQs from "pages/FAQs/FAQs";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import OurGallery from "pages/OurGallery/OurGallery";
import OurTeam from "pages/OurTeam/OurTeam";
import OurVideos from "pages/OurVideos/OurVideos";
import Partners from "pages/Partners/Partners";
import Pricing from "pages/Pricing/Pricing";
import PrivacyPolicy from "pages/PrivacyPolicy/PrivacyPolicy";
import Services from "pages/Services/Services";
import Tutorials from "pages/Tutorials/Tutorials";
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
					path: "tutorials",
					element: <Tutorials />,
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
					path: "blogs",
					element: <Blogs />,
				},
				{
					path: "blogs/:id",
					element: <BlogDetails />,
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
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
