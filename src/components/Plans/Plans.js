import { useState } from "react";
import styles from "./Plans.module.css";
import DarkButton from "components/DarkButton/DarkButton";
import SelectBtn from "components/SelectBtn/SelectBtn";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { arrow_right, check } from "icons/index";

const Plans = ({ gridView, hideBtn, showPlansFeatures }) => {
	const options = ["Monthly", "Quarterly"];
	const [value, setValue] = useState(options[0]);

	const plans = [
		{
			id: 1,
			title: "STARTER",
			desc: "Up to 50 Docs Per Month",
			price: "250.00",
		},
		{
			id: 2,
			title: "GROWTH",
			desc: "Up to 150 Docs Per Month",
			price: "525.00",
		},
		{
			id: 3,
			title: "SCALE",
			desc: "Up to 300 Docs Per Month",
			price: "975.00",
		},
	];

	const plansFeatures = [
		{
			id: 1,
			title: "Complete Bookkeeping",
		},
		{
			id: 2,
			title: "Customized Invoicing",
		},
		{
			id: 3,
			title: "Daily Sales Report",
		},
		{
			id: 4,
			title: "Complete VAT Services from registration to VAT filing",
		},
		{
			id: 5,
			title: "Financial Statements",
		},
		{
			id: 6,
			title: "Bank Reconciliation",
		},
		{
			id: 7,
			title: "Payables/ Receivables Reports",
		},
	];

	return (
		<section className={styles.plans}>
			<div className={styles.plans_head}>
				<div className="container">
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark text-center mb-4">
						Plans for Every Business Size
					</h2>
					<p className="text-sm text-dark text-center mb-4">
						Your entire accounting department in one simple plan. Everything
						included. Zero hidden fees.
					</p>
					<div className="w-fit mx-auto relative mb-8 lg:mb-[58px]">
						<SelectBtn
							value={value}
							onChange={(e) => setValue(e.value)}
							options={options}
							classes="mb-6"
						/>
						<p className="text-sm text-dark text-center max-lg:px-5">
							Get 20 documents for free with a quarterly plan!
						</p>
						<img
							src="/images/curved-arrow.svg"
							alt="Arrow"
							className="absolute -bottom-6 lg:bottom-0 right-0 lg:translate-x-[46px] w-9 block"
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div
					className={`gap-6 -mt-[58px] ${!gridView ? "flex justify-center max-md:flex-col" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
					{plans.map((plan) => (
						<div className={styles.plan_card} key={plan.id}>
							<div>
								<h4>{plan.title}</h4>
								<p className={`${!gridView ? "lg:w-[95%]" : ""}`}>
									{plan.desc}
								</p>
							</div>
							<h3>{plan.price} AED</h3>
							<DarkButton label="Choose Scale" classes="w-fit !px-10 mx-auto" />
						</div>
					))}
				</div>
				{!hideBtn && (
					<PrimaryButton
						label="See Full Plans & Calculate Savings"
						icon={arrow_right}
						rotateIcon
						classes="w-fit mx-auto mt-14"
						to="/pricing"
					/>
				)}
			</div>

			{/* Plans Feature */}
			{showPlansFeatures && (
				<div className="mt-8 lg:mt-[54px]">
					<div className="container">
						<div className="p-8 bg-white border border-border-light rounded-xl shadow-[0px_4px_6px_0px_#1F29370A]">
							<h4 className="text-lg text-dark font-bold mb-6">
								All plans include these features
							</h4>
							<ul className="flex flex-col gap-2">
								{plansFeatures.map((feature) => (
									<li
										className="flex items-center justify-start gap-[10px] lg:gap-2"
										key={feature.id}>
										<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
											{check}
										</span>
										<span className="text-sm text-dark">{feature.title}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Plans;
