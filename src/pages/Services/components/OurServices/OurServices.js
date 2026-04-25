import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { check } from "icons/index";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OurServices = () => {
	const { t } = useTranslation();

	const [active, setActive] = useState("vATFiling");
	const links = [
		{ id: "vATFiling", label: "VAT Filing" },
		{ id: "corporateTax", label: "Corporate Tax" },
		{ id: "bookkeeping", label: "Bookkeeping" },
		{ id: "additionalServices", label: "Additional Services" },
	];

	const servicesList = [
		{
			id: "vATFiling",
			title: "VAT Filing",
			description:
				"We handle your full VAT cycle calculations, preparation, and FTA submission every quarter, on time. You don't need to know anything about VAT. We do.",
			features: [
				"Review all invoices and categorize taxable transactions",
				"Calculate output and input VAT accurately",
				"Prepare and submit the VAT return to the FTA on your behalf",
				"Monitor deadlines so nothing is ever missed",
				"Handle any amendments or FTA queries",
			],
			imgSrc: "/images/why-us-1.svg",
		},
		{
			id: "corporateTax",
			title: "Corporate Tax",
			description:
				"We prepare your full corporate tax return and file it with the FTA before the deadline every year. Small business relief applied automatically where eligible.",
			features: [
				"Review your full year of financials",
				"Prepare the corporate tax return with all required disclosures",
				"Apply small business relief where eligible (0% under AED 3M revenue)",
				"Submit to the FTA within the 9-month window",
				"Maintain records in FTA-compliant format",
			],
			imgSrc: "/images/why-us-3.svg",
		},
		{
			id: "bookkeeping",
			title: "Bookkeeping",
			description:
				"Accurate books are the foundation of everything VAT, corporate tax, financial reports, and FTA compliance all depend on it. We take care of it every month so you never have to think about it.",
			features: [
				"Record and categorize every income and expense transaction",
				"Maintain your chart of accounts",
				"Reconcile bank statements against your books monthly",
				"Prepare monthly financial statements",
				"Keep records audit-ready at all times",
			],
			imgSrc: "/images/why-us-4.svg",
		},
	];

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="flex items-center justify-start gap-3 flex-wrap mb-8 lg:mb-[72px]">
					{links.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							onClick={() => setActive(link.id)}
							className={`shrink-0 py-2 px-4 flex items-center justify-center border rounded-[68px] text-sm transition-all
								${
									active === link.id
										? "bg-primary text-white border-primary font-medium"
										: "bg-white text-muted border-border-light hover:bg-ghost-white"
								}`}>
							{link.label}
						</a>
					))}
				</div>

				<div className="flex flex-col gap-8 lg:gap-[72px]">
					{servicesList.map((service) => (
						<div
							key={service.id}
							className="flex items-center justify-between max-lg:flex-col gap-6 lg:gap-[54px] lg:even:flex-row-reverse scroll-mt-24"
							id={service.id}>
							<div className="flex flex-col gap-8 w-[543px] max-w-full">
								<div>
									<h4 className="text-2xl font-bold text-dark mb-3">
										{service.title}
									</h4>
									<p className="text-sm text-muted">{service.description}</p>
								</div>
								<ul className="flex flex-col gap-3">
									{service.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center justify-start gap-2.5">
											<span className="shrink-0 w-6 h-6 flex items-center justify-center bg-primary-bg border border-primary-soft rounded-full text-dark p-0.5">
												{check}
											</span>
											<span className="text-sm text-dark">{feature}</span>
										</li>
									))}
								</ul>
								<PrimaryButton
									label={t("bookFreeConsultation")}
									classes="w-fit"
								/>
							</div>
							<img
								src={service.imgSrc}
								alt={service.title}
								className="shrink-0 w-[543px] max-w-full rounded-xl object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
