import { NavLink, Outlet } from "react-router-dom";
import styles from "./FaqsTutorialsHead.module.css";

const FaqsTutorialsHead = ({ headTitle, headDesc, children }) => {
	return (
		<>
			<div className={styles.head}>
				<div className="container">
					<div className="flex flex-col gap-4 lg:gap-3">
						<div className={styles.links_holder}>
							<NavLink to="/faqs" className={styles.link}>
								FAQ
							</NavLink>
							<NavLink to="/tutorials" className={styles.link}>
								Tutorials
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
