import { NavLink, Outlet } from "react-router-dom";
import styles from "./FaqsTutorialsHead.module.css";
import { useTranslation } from "react-i18next";

const FaqsTutorialsHead = ({ headTitle, headDesc, children }) => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles.head}>
				<div className="container">
					<div className="flex flex-col gap-4 lg:gap-3">
						<div className={styles.links_holder}>
							<NavLink to="/faqs" className={styles.link}>
								{t("faqs")}
							</NavLink>
							<NavLink to="/tutorials" className={styles.link}>
								{t("tutorials")}
							</NavLink>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-xl lg:text-[32px] font-bold text-dark text-center">
								{headTitle}
							</h1>
							<p className="text-sm text-dark text-center">{headDesc}</p>
						</div>
						{children}
					</div>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default FaqsTutorialsHead;
