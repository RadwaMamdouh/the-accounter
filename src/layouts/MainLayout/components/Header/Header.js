import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { arrowDropDown } from "icons/index";
import LangBtn from "components/LangBtn/LangBtn";
import ResponsiveHeader from "./components/ResponsiveHeader/ResponsiveHeader";

const Header = () => {
	const [isShow, setIsShow] = useState(false);
	const [isShowSidebar, setIsShowSidebar] = useState(false);
	const op = useRef(null);
	const location = useLocation();

	const resourcesLinks = [
		{ label: "Blogs", href: "/blogs" },
		{ label: "About us", href: "/about" },
		{ label: "Partners", href: "/partners" },
		{ label: "Tutorials", href: "/tutorials" },
		{ label: "FAQs", href: "/faq" },
		{ label: "Our Team", href: "/team" },
		{ label: "Our Videos", href: "/videos" },
		{ label: "Our Gallery", href: "/gallery" },
	];

	const isResourcesActive = resourcesLinks.some((link) =>
		location.pathname.startsWith(link.href),
	);

	useEffect(() => {
		// close dropdown when route changes
		op.current?.hide();
		setIsShow(false);
	}, [location.pathname]);

	const onOpenSidebar = () => {
		setIsShowSidebar(true);
		document.body.style.overflowY = "hidden";
	};

	const onCloseSidebar = () => {
		setIsShowSidebar(false);
		document.body.style.overflowY = "auto";
	};

	return (
		<>
			<header className="py-3.5 bg-white sticky top-0 z-50">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between gap-2 xl:gap-6">
						<Link
							to="/"
							className="flex items-center justify-center shrink-0 overflow-hidden h-8 lg:h-10">
							<img
								src="/images/logo.svg"
								alt="The Accounter"
								className="w-full h-full"
							/>
						</Link>
						<div className={styles.menu}>
							<NavLink to="/" className={styles.menu_link}>
								Home
							</NavLink>
							<NavLink to="/services" className={styles.menu_link}>
								Services
							</NavLink>
							<NavLink to="/pricing" className={styles.menu_link}>
								Pricing
							</NavLink>
							<>
								<Button
									type="button"
									label="Resources"
									onClick={(e) => op.current?.toggle(e)}
									className={`${styles.ddl_lbl} ${isShow ? styles.show : ""} ${isResourcesActive ? styles.active : ""}`}>
									{arrowDropDown}
								</Button>

								<OverlayPanel
									ref={op}
									className={styles.ddl_menu}
									onShow={() => setIsShow(true)}
									onHide={() => setIsShow(false)}>
									{resourcesLinks.map((link) => (
										<NavLink
											key={link.href}
											to={link.href}
											className={`${styles.ddl_menu_link}`}>
											{link.label}
										</NavLink>
									))}
								</OverlayPanel>
							</>
							<NavLink to="/contact" className={styles.menu_link}>
								Contact Us
							</NavLink>
						</div>
						<div className="hidden lg:flex items-center gap-2">
							<div className="py-[3px] px-2 bg-green rounded-[4px] flex items-center justify-center text-[10px] xl:text-xs font-medium text-white">
								Call Sales
							</div>
							<div
								className="text-xs xl:text-[13px] font-semibold text-dark"
								dir="ltr">
								+971 58 5873082
							</div>
						</div>
						<div className="hidden lg:flex items-center gap-3">
							<LangBtn />
							<Button
								type="button"
								label="Login"
								className="bg-white py-2.5 px-3 rounded-md flex items-center justify-center border border-dark text-xs xl:text-[13px] font-semibold text-dark transition duration-300 hover:bg-dark-bg"
							/>
							<Button
								type="button"
								label="Get Started"
								className="bg-dark py-2.5 px-3 rounded-md flex items-center justify-center border border-transparent text-xs xl:text-[13px] font-semibold text-white transition duration-300 hover:bg-dark-hover"
							/>
						</div>
						<button
							type="button"
							className="p-2 bg-white border border-dark rounded-md flex lg:hidden items-center justify-center relative"
							onClick={onOpenSidebar}>
							<img
								src="/images/menu.png"
								alt="Menu"
								className="w-[22px] h-[22px]"
							/>
						</button>
					</div>
				</div>
			</header>

			{/* Responsive Header */}
			<ResponsiveHeader isShow={isShowSidebar} onClose={onCloseSidebar} />
		</>
	);
};

export default Header;
