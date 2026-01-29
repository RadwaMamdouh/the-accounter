import Page from "components/Page/Page";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import styles from "./Services.module.css";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { calendar, chart, grid_alt, list, phone, receipt } from "icons/index";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";

const Services = () => {
	const services = [
		{
			id: 1,
			icon: receipt,
			title: "Invoicing",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
		{
			id: 2,
			icon: grid_alt,
			title: "Expenses",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
		{
			id: 3,
			icon: list,
			title: "Item Margin",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
		{
			id: 4,
			icon: calendar,
			title: "Monthly Sales Tracking",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
		{
			id: 5,
			icon: chart,
			title: "Insights and reports",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
		{
			id: 6,
			icon: phone,
			title: "Mobile App",
			description:
				"Focus on your Business! We'll cover all your accounting and tax needs via all these amazing features",
		},
	];

	return (
		<Page title="Services">
			<section className={styles.services}>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[50px]">
						<div className="lg:pt-[46px]">
							<h1 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold max-lg:text-center mb-3 lg:mb-4">
								Easy-to-Use Accounting Features
							</h1>
							<p className="text-sm text-dark max-lg:text-center mb-4">
								We do your Accounting, So you do better Business.
							</p>
							<div className="flex items-center justify-center lg:justify-start gap-4">
								<WhiteButton label="Login" />
								<PrimaryButton label="Get Started" to="/contact-us" />
							</div>
						</div>
						<img
							src="/images/services.svg"
							alt=""
							className="h-48 lg:h-[284px] w-fit mx-auto max-lg:-order-1 object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="py-8 lg:py-[72px] bg-[linear-gradient(180deg,rgba(245,248,250,0)_0%,#F5F7FA_50%,rgba(245,247,250,0)_100%)]">
				<div className="container">
					<div className="mb-8">
						<h2 className="text-xl lg:text-[32px] text-dark font-bold text-center mb-2 lg:mb-3">
							Easy-to-Use Accounting Features
						</h2>
						<p className="text-sm text-dark text-center">
							We do your Accounting, So you do better Business.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<div
								className="p-5 bg-white rounded-[4px] border border-[#EFF0F1] group"
								key={service.id}>
								<span className="w-8 h-8 *:max-w-full text-dark flex items-center justify-center mb-4">
									{service.icon}
								</span>
								<h4 className="font-semibold text-dark pb-[6px] mb-3 w-fit relative after:content-[''] after:h-[2px] after:bg-dark after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:z-10 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
									{service.title}
								</h4>
								<p className="text-sm text-muted line-clamp-2">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Partners */}
			<OfficialPartners isFlexCol />
		</Page>
	);
};

export default Services;
