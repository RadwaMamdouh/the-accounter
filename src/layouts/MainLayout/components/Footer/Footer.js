import { facebook, instagram, linkedin, twitter } from "icons/index";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import CopyRights from "./components/CopyRights/CopyRights";

const Footer = () => {
	const [value, setValue] = useState("");

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
											Sign up for email updates
										</h5>
										<p className="text-light text-sm">
											Subscribe to our newsletter The Accounter
										</p>
									</div>
									<InputText
										value={value}
										onChange={(e) => setValue(e.target.value)}
										placeholder="Enter your email"
										className="block bg-white border border-border-light rounded-md w-full py-3 px-2.5 !mb-4 transition duration-300 hover:border-primary"
									/>
									<Button
										type="button"
										label="Submit"
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
								<h5 className="test-sm font-bold text-light mb-6">Services</h5>
								<div className={styles.footer_links}>
									<Link to="" className={styles.footer_link}>
										Complete Bookkeeping
									</Link>
									<Link to="" className={styles.footer_link}>
										Track Expenses
									</Link>
									<Link to="" className={styles.footer_link}>
										Custom Invoicing
									</Link>
									<Link to="" className={styles.footer_link}>
										VAT Services
									</Link>
									<Link to="" className={styles.footer_link}>
										Insights and reports
									</Link>
								</div>
							</div>
							<div>
								<h5 className="test-sm font-bold text-light mb-6">Resources</h5>
								<div className={styles.footer_links}>
									<Link to="" className={styles.footer_link}>
										About us
									</Link>
									<Link to="" className={styles.footer_link}>
										Blog
									</Link>
									<Link to="/partners" className={styles.footer_link}>
										Partners
									</Link>
									<Link to="" className={styles.footer_link}>
										Tutorials
									</Link>
									<Link to="" className={styles.footer_link}>
										FAQs
									</Link>
									<Link to="" className={styles.footer_link}>
										Careers
									</Link>
									<Link to="/team" className={styles.footer_link}>
										Our Team
									</Link>
								</div>
							</div>
							<div>
								<h5 className="test-sm font-bold text-light mb-6">Other</h5>
								<div className={styles.footer_links}>
									<Link to="/pricing" className={styles.footer_link}>
										Pricing
									</Link>
									<Link to="/contact-us" className={styles.footer_link}>
										Contact us
									</Link>
									<Link to="" className={styles.footer_link}>
										Privacy Policy
									</Link>
									<Link to="" className={styles.footer_link}>
										Terms of use
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
