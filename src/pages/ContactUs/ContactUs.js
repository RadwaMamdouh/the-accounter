import LeaveMessageForm from "components/LeaveMessageForm/LeaveMessageForm";
import styles from "./ContactUs.module.css";
import { mail, marker, phone_cell } from "icons/index";
import Page from "components/Page/Page";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";

const ContactUs = () => {
	return (
		<Page title="Contact Us">
			<section className="pb-8 lg:pb-[72px]">
				<div className={styles.head}>
					<div className="container">
						<h1 className="text-xl lg:text-4xl font-bold text-dark text-center lg:text-start mb-1">
							Ready to give it a try?
						</h1>
						<p className="text-sm text-muted text-center lg:text-start">
							The world's simplest invoicing and accounting solution
						</p>
					</div>
				</div>
				<div className={styles.started_body}>
					<div className="container">
						<div className="flex items-start justify-between gap-6 lg:gap-[100px] max-lg:flex-col">
							<div className="pt-6 lg:pt-10 w-full flex flex-col gap-6 lg:gap-8">
								<h2 className="text-2xl text-dark font-bold">Contact Us</h2>
								<p className="text-sm text-dark">
									Welcome, We have an integrated team to serve and support you
									all day long. Reach out with any questions or to set up a
									meeting to discover the best path for your accounting needs.
								</p>
								<h5 className="text-dark font-bold">The Accounter</h5>
								<div className="flex items-center justify-start gap-[10px]">
									<span className="shrink-0 flex items-center justify-center w-5 h-5 text-dark *:w-full *:h-full">
										{marker}
									</span>
									<p className="text-sm text-dark">
										Fintech Hive, Zone D, Level 1 Gate Avenue, DIFC, Dubai, UAE.
									</p>
								</div>
								<div className="flex items-center justify-start gap-[10px]">
									<span className="shrink-0 flex items-center justify-center w-5 h-5 text-dark *:w-full *:h-full">
										{phone_cell}
									</span>
									<a href="tel:+971585873082" className="text-sm text-primary">
										+971 58 5873082
									</a>
								</div>
								<div className="flex items-center justify-start gap-[10px]">
									<span className="shrink-0 flex items-center justify-center w-5 h-5 text-dark *:w-full *:h-full">
										{mail}
									</span>
									<a
										href="mailto:support@theaccounter.com"
										aria-label="Email support"
										className="text-sm text-primary">
										support@theaccounter.com
									</a>
								</div>
							</div>
							<LeaveMessageForm />
						</div>
					</div>
				</div>
			</section>

			<OfficialPartners />
		</Page>
	);
};

export default ContactUs;
