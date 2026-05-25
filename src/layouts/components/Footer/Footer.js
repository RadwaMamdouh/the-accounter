import { facebook, instagram, linkedin, twitter } from "icons/index";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import CopyRights from "./components/CopyRights/CopyRights";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const [value, setValue] = useState("");
	const { t } = useTranslation();

	return (
		<>
			<footer className="bg-dark pt-8 lg:pt-12 pb-8 lg:pb-6">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-36">
						<div>
							<div>
								<div className="relative mb-8 h-8 lg:h-[54px]">
									<img
										src="/images/logo-white.svg"
										alt="The Accounter"
										className="h-full"
									/>
								</div>
								<div className="mb-8">
									<div className="mb-4">
										<h5 className="text-white text-sm font-bold mb-0.5">
											{t("signUpForEmailUpdates")}
										</h5>
										<p className="text-light text-sm">
											{t("subscribeToOurNewsletterTheAccounter")}
										</p>
									</div>
									<InputText
										value={value}
										onChange={(e) => setValue(e.target.value)}
										placeholder={t("enterYourEmail")}
										className="block bg-white border border-border-light rounded-md w-full py-3 px-2.5 !mb-4 transition duration-300 hover:border-primary"
									/>
									<Button
										type="button"
										label={t("submit")}
										className="py-2.5 px-3 flex items-center justify-center w-fit bg-primary rounded-md text-[13px] text-white font-semibold transition duration-300 hover:bg-primary-hover"
									/>
								</div>
								<div className="flex items-center justify-start gap-2">
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-10 h-[38px] bg-white rounded-md text-dark transition duration-300 hover:bg-[#1877F2] hover:text-white">
										{facebook}
									</Link>
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-10 h-[38px] bg-white rounded-md text-dark transition duration-300 hover:bg-[#1D9BF0] hover:text-white">
										{twitter}
									</Link>
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-10 h-[38px] bg-white rounded-md text-dark transition duration-300 hover:bg-[#0A66C2] hover:text-white">
										{linkedin}
									</Link>
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-10 h-[38px] bg-white rounded-md text-dark transition duration-300 hover:bg-[radial-gradient(144.38%_122.74%_at_1.82%_90.84%,_#FED576_0%,_#F47133_26.34%,_#BC3081_60.91%,_#4C63D2_100%)] hover:text-white">
										{instagram}
									</Link>
								</div>
							</div>
						</div>
						<div className="flex items-start justify-start lg:justify-between flex-wrap lg:flex-nowrap gap-8 sm:gap-28">
							<div>
								<h5 className="test-sm font-bold text-light mb-6">
									{t("services")}
								</h5>
								<div className={styles.footer_links}>
									<Link
										to="/services#bookkeeping"
										className={styles.footer_link}>
										{t("completeBookkeeping")}
									</Link>
									<Link to="" className={styles.footer_link}>
										{t("trackExpenses")}
									</Link>
									<Link to="" className={styles.footer_link}>
										{t("customInvoicing")}
									</Link>
									<Link to="/services#vATFiling" className={styles.footer_link}>
										{t("vatServices")}
									</Link>
									<Link to="" className={styles.footer_link}>
										{t("insightsAndReports")}
									</Link>
								</div>
							</div>
							<div>
								<h5 className="test-sm font-bold text-light mb-6">
									{t("resources")}
								</h5>
								<div className={styles.footer_links}>
									<Link to="/about-us" className={styles.footer_link}>
										{t("aboutUs")}
									</Link>
									<Link to="/blogs" className={styles.footer_link}>
										{t("blog")}
									</Link>
									<Link to="/partners" className={styles.footer_link}>
										{t("partners")}
									</Link>
									<Link to="/tutorials" className={styles.footer_link}>
										{t("tutorials")}
									</Link>
									<Link to="/faqs" className={styles.footer_link}>
										{t("faqs")}
									</Link>
									<Link to="" className={styles.footer_link}>
										{t("careers")}
									</Link>
									<Link to="/team" className={styles.footer_link}>
										{t("ourTeam")}
									</Link>
								</div>
							</div>
							<div>
								<h5 className="test-sm font-bold text-light mb-6">
									{t("other")}
								</h5>
								<div className={styles.footer_links}>
									<Link to="/pricing" className={styles.footer_link}>
										{t("pricing")}
									</Link>
									<Link to="/contact-us" className={styles.footer_link}>
										{t("contactUs")}
									</Link>
									<Link to="/privacy-policy" className={styles.footer_link}>
										{t("privacyPolicy")}
									</Link>
									<Link to="" className={styles.footer_link}>
										{t("termsOfUse")}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Copy Rights */}
			<CopyRights />
		</>
	);
};

export default Footer;
