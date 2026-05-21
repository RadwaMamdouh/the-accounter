import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { arrowDropDown } from "icons/index";
import LangBtn from "components/LangBtn/LangBtn";
import ResponsiveHeader from "./components/ResponsiveHeader/ResponsiveHeader";
import { useTranslation } from "react-i18next";

const Header = () => {
	const [isShow, setIsShow] = useState(false);
	const [isShowCompany, setIsShowCompany] = useState(false);
	const [isShowSidebar, setIsShowSidebar] = useState(false);
	const opCompany = useRef(null);
	const op = useRef(null);
	const location = useLocation();
	const { t } = useTranslation();
	const [activeSubMenu, setActiveSubMenu] = useState(null);

	const resourcesLinks = [
		{ label: t("blogs"), href: "/blogs" },
		{ label: t("savingCalculator"), href: "/calculate-your-savings" },
		{
			label: t("learningHub"),
			href: "/learning-hub",
			children: [
				{
					label: t("faqs"),
					href: "/faqs",
				},
				{
					label: t("academy"),
					href: "/academy",
				},
			],
		},
	];

	const isResourcesActive = resourcesLinks.some((link) => {
		// check parent
		if (location.pathname.startsWith(link.href)) return true;

		// check children
		if (link.children) {
			return link.children.some((child) =>
				location.pathname.startsWith(child.href),
			);
		}

		return false;
	});

	const companyLinks = [
		{ label: t("aboutUs"), href: "/about-us" },
		{ label: t("partners"), href: "/partners" },
	];

	const isCompanyActive = companyLinks.some((link) => {
		if (location.pathname.startsWith(link.href)) return true;

		if (link.children) {
			return link.children.some((child) =>
				location.pathname.startsWith(child.href),
			);
		}

		return false;
	});

	const handleParentClick = (linkKey) => {
		if (activeSubMenu === linkKey) {
			setActiveSubMenu(null); // close if clicked again
		} else {
			setActiveSubMenu(linkKey); // open new
		}
	};

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

	const isParentActive = (link) => {
		// direct match
		if (location.pathname.startsWith(link.href)) return true;

		// check children
		if (link.children) {
			return link.children.some((child) =>
				location.pathname.startsWith(child.href),
			);
		}

		return false;
	};

	const isActiveParent = (link) =>
		activeSubMenu === link.href || isParentActive(link);

	return (
		<>
			<header className="py-3.5 bg-white sticky top-0 z-50">
				<div className="container">
					<div className="flex items-center justify-between gap-2 xl:gap-6">
						<Link
							to="/"
							className="flex items-center justify-center shrink-0 overflow-hidden h-8 xl:h-10">
							<img
								src="/images/logo.svg"
								alt="The Accounter"
								className="w-full h-full"
							/>
						</Link>
						<div className={styles.menu}>
							{/* <NavLink to="/" className={styles.menu_link}>
								{t("home")}
							</NavLink> */}
							<NavLink to="/services" className={styles.menu_link}>
								{t("services")}
							</NavLink>
							<NavLink to="/pricing" className={styles.menu_link}>
								{t("pricing")}
							</NavLink>
							<NavLink to="/how-it-works" className={styles.menu_link}>
								{t("navHowItWorks")}
							</NavLink>
							<div className="relative">
								<Button
									type="button"
									label={t("company")}
									onClick={(e) => {
										op.current?.hide(); // close resources
										opCompany.current?.toggle(e);
									}}
									className={`${styles.ddl_lbl} ${isShowCompany ? styles.show : ""} ${isCompanyActive ? styles.active : ""}`}>
									{arrowDropDown}
								</Button>

								<OverlayPanel
									ref={opCompany}
									className={`${styles.ddl_menu} ${styles.ddl_menu_custom}`}
									onShow={() => setIsShowCompany(true)}
									onHide={() => {
										setIsShowCompany(false);
										setActiveSubMenu(null); // reset submenu
									}}
									appendTo="self">
									<div className={styles.menu_wrapper}>
										{/* LEFT SIDE (main menu) */}
										<div className={styles.menu_main}>
											{companyLinks.map((link) => (
												<div key={link.href} className={styles.menu_item}>
													{/* If has children */}
													{link.children ? (
														<button
															type="button"
															onClick={() => handleParentClick(link.href)}
															className={`${styles.ddl_menu_link} ${
																isActiveParent(link) ? styles.active_parent : ""
															}`}>
															{link.label}
															<span className={styles.arrow}>
																{arrowDropDown}
															</span>
														</button>
													) : (
														<NavLink
															key={link.href}
															to={link.href}
															className={`${styles.ddl_menu_link}`}>
															{link.label}
														</NavLink>
													)}
												</div>
											))}
										</div>

										{/* RIGHT SIDE (sub menu) */}
										<div
											className={`${styles.menu_sub} ${
												activeSubMenu ? styles.open : ""
											}`}>
											<div key={activeSubMenu}>
												{companyLinks
													.find((l) => l.href === activeSubMenu)
													?.children?.map((sub, i) => (
														<NavLink
															key={i}
															to={sub.href}
															className={styles.ddl_menu_link}>
															{sub.label}
														</NavLink>
													))}
											</div>
										</div>
									</div>
								</OverlayPanel>
							</div>
							<div className="relative">
								<Button
									type="button"
									label={t("resources")}
									onClick={(e) => {
										opCompany.current?.hide(); // close company
										op.current?.toggle(e);
									}}
									className={`${styles.ddl_lbl} ${isShow ? styles.show : ""} ${isResourcesActive ? styles.active : ""}`}>
									{arrowDropDown}
								</Button>

								<OverlayPanel
									ref={op}
									className={`${styles.ddl_menu} ${styles.ddl_menu_custom}`}
									onShow={() => setIsShow(true)}
									onHide={() => {
										setIsShow(false);
										setActiveSubMenu(null); // reset submenu
									}}
									appendTo="self">
									<div className={styles.menu_wrapper}>
										{/* LEFT SIDE (main menu) */}
										<div className={styles.menu_main}>
											{resourcesLinks.map((link) => (
												<div key={link.href} className={styles.menu_item}>
													{/* If has children */}
													{link.children ? (
														<button
															type="button"
															onClick={() => handleParentClick(link.href)}
															className={`${styles.ddl_menu_link} ${
																isActiveParent(link) ? styles.active_parent : ""
															}`}>
															{link.label}
															<span className={styles.arrow}>
																{arrowDropDown}
															</span>
														</button>
													) : (
														<NavLink
															key={link.href}
															to={link.href}
															className={`${styles.ddl_menu_link}`}>
															{link.label}
														</NavLink>
													)}
												</div>
											))}
										</div>

										{/* RIGHT SIDE (sub menu) */}
										<div
											className={`${styles.menu_sub} ${
												activeSubMenu ? styles.open : ""
											}`}>
											<div key={activeSubMenu}>
												{resourcesLinks
													.find((l) => l.href === activeSubMenu)
													?.children?.map((sub, i) => (
														<NavLink
															key={i}
															to={sub.href}
															className={styles.ddl_menu_link}>
															{sub.label}
														</NavLink>
													))}
											</div>
										</div>
									</div>
								</OverlayPanel>
							</div>
						</div>

						<div className="hidden lg:flex items-center gap-3">
							<LangBtn />
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
