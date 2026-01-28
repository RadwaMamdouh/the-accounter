import { cancel } from "icons/index";
import styles from "./ResponsiveHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import LangBtn from "components/LangBtn/LangBtn";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

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

const ResponsiveHeader = ({ isShow, onClose }) => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		const isResourcesRoute = resourcesLinks.some((link) =>
			location.pathname.startsWith(link.href),
		);

		if (isResourcesRoute) {
			setActiveIndex(0); // open
		} else {
			setActiveIndex(null); // close (home or any other page)
		}
	}, [location.pathname]);

	const handleNavigate = () => {
		onClose();
	};

	return (
		<aside
			className={`fixed top-0 ltr:left-0 rtl:right-0 flex lg:hidden flex-col h-dvh z-50 bg-white overflow-hidden transition-all duration-500 ${isShow ? "w-full" : "w-0"}`}>
			{/* Sidebar Header */}
			<div className="py-5 px-8 flex items-center justify-between">
				<div className="flex items-center justify-center shrink-0 overflow-hidden">
					<img src="/images/logo.svg" alt="The Accounter" className="h-8" />
				</div>
				<button
					type="button"
					className="p-2 bg-white rounded-md flex items-center justify-center relative w-10 h-9.5 *:w-[22px] *:h-[22px]"
					onClick={onClose}>
					{cancel}
				</button>
			</div>

			{/* Sidebar Body */}
			<div className="grow px-4 pb-4 overflow-y-auto">
				<div className="mb-[62px]">
					{/* Menu Links */}
					<div className={styles.menu}>
						<NavLink
							to="/"
							className={styles.menu_link}
							onClick={handleNavigate}>
							Home
						</NavLink>
						<NavLink
							to="/services"
							className={styles.menu_link}
							onClick={handleNavigate}>
							Services
						</NavLink>
						<NavLink
							to="/pricing"
							className={styles.menu_link}
							onClick={handleNavigate}>
							Pricing
						</NavLink>
						<Accordion
							className={styles.sidebar_accordion}
							activeIndex={activeIndex}
							onTabChange={(e) => setActiveIndex(e.index)}>
							<AccordionTab header="Resources">
								{resourcesLinks.map((link) => (
									<NavLink
										key={link.href}
										to={link.href}
										className={styles.accordion_menu_link}
										onClick={handleNavigate}>
										{link.label}
									</NavLink>
								))}
							</AccordionTab>
						</Accordion>
						<NavLink
							to="/contact"
							className={styles.menu_link}
							onClick={handleNavigate}>
							Contact Us
						</NavLink>
					</div>
					<a
						href="tel:+971585873082"
						className="py-3 px-4 flex items-center gap-3">
						<span className="text-sm text-dark" dir="ltr">
							+971 58 5873082
						</span>
						<span className="py-[3px] px-2 bg-green rounded-[26px] flex items-center justify-center text-xs font-medium text-white">
							Call Sales
						</span>
					</a>
					<LangBtn classes="py-2.5 px-4" />
				</div>

				{/* Actions */}
				<div className="flex flex-col gap-4">
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
			</div>
		</aside>
	);
};

export default ResponsiveHeader;
