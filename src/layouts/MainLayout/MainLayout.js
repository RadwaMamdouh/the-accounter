import { Outlet } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Header from "layouts/components/Header/Header";
import Footer from "layouts/components/Footer/Footer";
import ScrollToHash from "components/ScrollToHash/ScrollToHash";

const MainLayout = () => {
	return (
		<>
			<ScrollToHash />
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
