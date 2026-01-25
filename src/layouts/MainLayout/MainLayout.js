import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
	return (
		<>
			<ScrollToTop />
			<div className="min-h-dvh bg-white flex flex-col">
				<Header />
				<main className="grow">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
