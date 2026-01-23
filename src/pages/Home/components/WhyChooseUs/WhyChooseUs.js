import { Link } from "react-router-dom";
import styles from "./WhyChooseUs.module.css";
import { arrow_right } from "icons/index";

const WhyChooseUs = () => {
	const whyUsData = [
		{
			id: 1,
			badge: "10X Better Quality",
			title: "Real Accountants, Not Just Software",
			desc: "We're not QuickBooks or FreshBooks. Every transaction is validated by 6 experts. Software helps them work faster - but humans ensure accuracy. You get 10x better quality at the same cost.",
			imgSrc: "/images/why-us-1.svg",
			showLink: false,
		},
		{
			id: 2,
			badge: "Save up to 87% of accounting & Tax costs",
			title: "Save 15,000+ AED/Year vs. Traditional Solutions",
			desc: "Complete bookkeeping, tax filing, invoicing, and bank reconciliation.  All included. One transparent price starting at 250 AED/month.",
			imgSrc: "/images/why-us-2.svg",
			showLink: true,
		},
		{
			id: 3,
			badge: "100% Compliance Guaranteed",
			title: "We Pay Any Fines If We Make an Error",
			desc: "We guarantee 100% VAT & Corporate Tax compliance. Our 6-layer validation process catches every error before submission.",
			imgSrc: "/images/why-us-3.svg",
			showLink: false,
		},
		{
			id: 4,
			badge: "Save  240+ hours annually",
			title: "100% Digital - Zero Office Visits",
			desc: "Upload invoices from your phone. We take care of the rest. No office visits. No meetings.  No time wasted. Just upload and relax.",
			imgSrc: "/images/why-us-4.svg",
			showLink: false,
		},
		{
			id: 5,
			badge: "Live dashboard Included",
			title: "Instant Financial Insights 24/7",
			desc: "See your expenses, income, profit margins, and tax obligations in real-time through our mobile dashboard. No waiting for monthly reports. Know your numbers anytime, anywhere.",
			imgSrc: "/images/why-us-5.svg",
			showLink: false,
		},
	];

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container mx-auto px-4">
				<div className="mb-8 lg:mb-[72px]">
					<h6 className="text-sm text-primary text-center mb-1 lg:mb-3">
						Why Choose Us?
					</h6>
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark text-center mb-1 lg:mb-3">
						Why Smart UAE Businesses Choose The Accounter
					</h2>
					<p className="text-sm text-dark text-center">
						More than just accounting - your complete compliance and financial
						partner
					</p>
				</div>
				<div className="flex flex-col gap-12 lg:gap-6">
					{whyUsData.map((item) => (
						<div className={styles.why_row} key={item.id}>
							<div className={styles.info}>
								<div className={styles.badge}>{item.badge}</div>
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
								{item.showLink && (
									<Link
										to=""
										className="flex items-center justify-start gap-1 w-fit text-primary text-sm">
										<span>See your exact savings</span>
										<span className="shrink-0 w-[14px] h-[14px] *:w-full *:h-full">
											{arrow_right}
										</span>
									</Link>
								)}
							</div>
							<img src={item.imgSrc} alt={item.title} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
