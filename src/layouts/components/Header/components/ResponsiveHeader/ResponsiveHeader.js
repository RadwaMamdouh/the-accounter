import { arrowDropDown, cancel } from "icons/index";
import styles from "./ResponsiveHeader.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import LangBtn from "components/LangBtn/LangBtn";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const resourcesLinks = [
	{ label: "blogs", href: "/blogs" },
	{ label: "savingCalculator", href: "/calculate-your-savings" },
	{
		label: "learningHub",
		href: "/learning-hub",
		children: [
			{
				label: "faqs",
				href: "/faqs",
			},
			{
				label: "Academy",
				href: "/academy",
			},
		],
	},
];

const companyLinks = [
	{ label: "aboutUs", href: "/about-us" },
	{ label: "partners", href: "/partners" },
];

const ResponsiveHeader = ({ isShow, onClose }) => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(null);
	const [companyActiveIndex, setCompanyActiveIndex] = useState(null);
	const { t } = useTranslation();
	const [subMenu, setSubMenu] = useState(null);

	useEffect(() => {
		const isResourcesRoute = resourcesLinks.some((link) =>
			location.pathname.startsWith(link.href),
		);

		if (isResourcesRoute) {
			setActiveIndex(0); // open
		} else {
			setActiveIndex(null); // close (home or any other page)
		}

		const isCompanyRoute = companyLinks.some((link) =>
			location.pathname.startsWith(link.href),
		);

		if (isCompanyRoute) {
			setCompanyActiveIndex(1); // open
		} else {
			setCompanyActiveIndex(null); // close (home or any other page)
		}
	}, [location.pathname]);

	const handleNavigate = () => {
		onClose();
	};

	const handleItemsClick = (link) => {
		if (link.children) {
			setSubMenu(link); // open sub sidebar
		} else {
			handleNavigate(); // normal navigation
		}
	};

	return (
		<aside
			className={`fixed top-0 ltr:left-0 rtl:right-0 flex lg:hidden flex-col h-dvh z-50 bg-white overflow-hidden transition-all duration-500 ${isShow ? "w-full" : "w-0"}`}>
			{/* Sidebar Header */}
			<div className="py-5 px-8 flex items-center justify-between border-b border-border-light">
				<div className="flex items-center justify-center shrink-0 overflow-hidden">
					<img src="/images/logo.svg" alt="The Accounter" className="h-8" />
				</div>
				<button
					type="button"
					className="p-2 bg-white rounded-md flex items-center justify-center relative w-10 h-9.5 *:w-[22px] *:h-[22px]"
					onClick={() => {
						setSubMenu(null);
						onClose();
					}}>
					{cancel}
				</button>
			</div>

			{/* Sidebar Body */}
			<div className="grow px-4 pb-4 overflow-y-auto relative">
				<div className="mb-[62px] py-4">
					{/* Menu Links */}
					<div className={styles.menu}>
						{/* <NavLink
							to="/"
							className={styles.menu_link}
							onClick={handleNavigate}>
							{t("home")}
						</NavLink> */}
						<NavLink
							to="/services"
							className={styles.menu_link}
							onClick={handleNavigate}>
							{t("services")}
						</NavLink>
						<NavLink
							to="/pricing"
							className={styles.menu_link}
							onClick={handleNavigate}>
							{t("pricing")}
						</NavLink>
						<NavLink
							to="/how-it-works"
							className={styles.menu_link}
							onClick={handleNavigate}>
							{t("navHowItWorks")}
						</NavLink>
						<Accordion
							className={styles.sidebar_accordion}
							activeIndex={companyActiveIndex}
							onTabChange={(e) => setCompanyActiveIndex(e.index)}>
							<AccordionTab header={t("company")}>
								{companyLinks.map((link) => (
									<>
										{link.children ? (
											<button
												type="button"
												className={styles.accordion_menu_link}
												onClick={() => handleItemsClick(link)}>
												{t(link.label)}
												<span className={styles.arrow}>{arrowDropDown}</span>
											</button>
										) : (
											<NavLink
												to={link.href}
												className={styles.accordion_menu_link}
												onClick={handleNavigate}>
												{t(link.label)}
											</NavLink>
										)}
									</>
								))}
							</AccordionTab>
						</Accordion>
						<Accordion
							className={styles.sidebar_accordion}
							activeIndex={activeIndex}
							onTabChange={(e) => setActiveIndex(e.index)}>
							<AccordionTab header={t("resources")}>
								{resourcesLinks.map((link) => (
									<>
										{link.children ? (
											<button
												type="button"
												className={styles.accordion_menu_link}
												onClick={() => handleItemsClick(link)}>
												{t(link.label)}
												<span className={styles.arrow}>{arrowDropDown}</span>
											</button>
										) : (
											<NavLink
												to={link.href}
												className={styles.accordion_menu_link}
												onClick={handleNavigate}>
												{t(link.label)}
											</NavLink>
										)}
									</>
								))}
							</AccordionTab>
						</Accordion>
					</div>
					<hr className="border-border-light mt-1 mb-1" />
					<LangBtn classes="py-2.5 px-4" />
				</div>

				{/* Actions */}
				<div className="flex flex-col gap-4">
					<Button
						type="button"
						label={t("login")}
						className="bg-white py-2.5 px-3 rounded-md flex items-center justify-center border border-dark text-xs xl:text-[13px] font-semibold text-dark transition duration-300 hover:bg-dark-bg"
					/>
					<Link
						to="/contact-us"
						className="bg-dark py-2.5 px-3 rounded-md flex items-center justify-center border border-transparent text-xs xl:text-[13px] font-semibold text-white transition duration-300 hover:bg-dark-hover">
						{t("getStarted")}
					</Link>
				</div>
			</div>

			{/* Sub Sidebar */}
			<div className={`${styles.sub_sidebar} ${subMenu ? styles.open : ""}`}>
				{/* Header */}
				<div className={styles.sub_header}>
					<Button
						type="button"
						onClick={() => setSubMenu(null)}
						className={styles.back}>
						{arrowDropDown}
					</Button>
					<p className="flex items-center gap-2.5">
						<span className="text-sm text-muted">Resources</span>
						<span className="text-sm font-medium text-muted">/</span>
						<span className="text-sm font-medium text-dark">Learning Hub</span>
					</p>
				</div>

				{/* Items */}
				<div className={styles.menu}>
					{subMenu?.children?.map((item, i) => (
						<NavLink
							key={i}
							to={item.href}
							className={styles.accordion_menu_link}
							onClick={handleNavigate}>
							{item.label}
						</NavLink>
					))}
				</div>
			</div>
		</aside>
	);
};

export default ResponsiveHeader;
