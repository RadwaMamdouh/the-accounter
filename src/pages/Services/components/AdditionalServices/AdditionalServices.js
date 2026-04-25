import { bank, brand, chart, phone, receipt, search } from "icons/index";
import styles from "./AdditionalServices.module.css";

const AdditionalServices = () => {
	const services = [
		{
			id: 1,
			icon: chart,
			badge: { label: "Included", colorClass: "blue" },
			title: "Financial Statements & Reports",
			description:
				"Monthly income statements, balance sheets, and cash flow reports prepared and ready for you, your bank, or any audit.",
		},
		{
			id: 2,
			icon: bank,
			badge: { label: "FREE", colorClass: "green" },
			title: "Bank Reconciliation",
			description:
				"Every bank transaction matched against your books each month. Accurate, consistent, and always up to date.",
		},
		{
			id: 3,
			icon: receipt,
			badge: { label: "FREE", colorClass: "green" },
			title: "Invoicing Software",
			description:
				"Create unlimited professional, FTA-compliant invoices directly from the app. Unlimited, branded, and sent in seconds.",
		},
		{
			id: 4,
			icon: phone,
			badge: { label: "Included", colorClass: "blue" },
			title: "Live Financial Dashboard",
			description:
				"Track your income, expenses, profit margins, and tax obligations in real-time. Available on mobile and web, 24/7.",
		},
		{
			id: 5,
			icon: search,
			badge: { label: "Add-on", colorClass: "orange" },
			title: "Auditing",
			description:
				"Independent audit by a certified auditor for regulatory requirements, investors, or peace of mind.",
		},
		{
			id: 6,
			icon: brand,
			badge: { label: "Add-on", colorClass: "orange" },
			title: "Company & Asset Valuation",
			description:
				"Company & Asset Valuation Professional valuation of your business or assets for fundraising, acquisitions, or partnership negotiations.",
		},
	];

	return (
		<section className={`py-8 lg:py-[72px] ${styles.additional_services}`}>
			<div className="container">
				<div className="mb-8 lg:mb-[72px] flex flex-col gap-3">
					<h6 className="text-sm text-dark uppercase">ADDITIONAL SERVICES</h6>
					<h2 className="text-xl lg:text-[32px] text-dark font-bold">
						Easy-to-Use Accounting Features
					</h2>
					<p className="text-sm text-dark">
						We do your Accounting, So you do better Business.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service) => (
						<div
							className="p-5 bg-white rounded-[4px] border border-[#EFF0F1] group"
							key={service.id}>
							<div className="flex items-center justify-between gap-2 mb-4">
								<span className="shrink-0 w-8 h-8 *:max-w-full text-dark flex items-center justify-center">
									{service.icon}
								</span>
								<div
									className={`${styles.badge} ${styles[service.badge.colorClass]}`}>
									{service.badge.label}
								</div>
							</div>
							<h4 className="font-semibold text-dark pb-0.5 mb-3 w-fit relative after:content-[''] after:h-[2px] after:bg-dark after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:z-10 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
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
	);
};

export default AdditionalServices;
