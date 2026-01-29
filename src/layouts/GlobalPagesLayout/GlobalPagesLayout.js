import Footer from "layouts/components/Footer/Footer";
import Header from "layouts/components/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./GlobalPagesLayout.module.css";

const GlobalPagesLayout = () => {
	return (
		<div className="min-h-dvh bg-white flex flex-col">
			<Header />
			<main className="grow py-8 lg:py-[100px]">
				<div className="container">
					<div className="flex gap-12">
						<aside className="shrink-0 py-2 bg-white border border-border-light rounded-lg flex flex-col w-[260px] max-md:hidden">
							<NavLink to="terms" className={styles.aside_link}>
								<span className="py-2 px-3 flex items-center justify-start ltr:border-s-4 rtl:border-e-4 border-transparent text-sm text-dark">
									Terms of use
								</span>
							</NavLink>
							<hr className="border-border-light" />
							<NavLink to="/privacy-policy" className={styles.aside_link}>
								<span className="py-2 px-3 flex items-center justify-start ltr:border-s-4 rtl:border-e-4 border-transparent text-sm text-dark">
									Privacy Policy
								</span>
							</NavLink>
							<hr className="border-border-light" />
							<NavLink to="cookie-policy" className={styles.aside_link}>
								<span className="py-2 px-3 flex items-center justify-start ltr:border-s-4 rtl:border-e-4 border-transparent text-sm text-dark">
									Cookie policy
								</span>
							</NavLink>
							<hr className="border-border-light" />
							<NavLink to="about-us" className={styles.aside_link}>
								<span className="py-2 px-3 flex items-center justify-start ltr:border-s-4 rtl:border-e-4 border-transparent text-sm text-dark">
									About us
								</span>
							</NavLink>
						</aside>
						<div className="grow">
							<Outlet />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default GlobalPagesLayout;
