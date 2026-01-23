import { useState } from "react";
import styles from "./Plans.module.css";
import DarkButton from "components/DarkButton/DarkButton";
import SelectBtn from "components/SelectBtn/SelectBtn";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { arrow_right } from "icons/index";

const Plans = () => {
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

	return (
		<section className={styles.plans}>
			<div className={styles.plans_head}>
				<div className="container mx-auto px-4">
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
			<div className="container mx-auto px-4">
				<div className="flex justify-center gap-6 -mt-[58px] max-md:flex-col">
					{plans.map((plan) => (
						<div className={styles.plan_card} key={plan.id}>
							<div>
								<h4>{plan.title}</h4>
								<p>{plan.desc}</p>
							</div>
							<h3>{plan.price} AED</h3>
							<DarkButton label="Choose Scale" classes="w-fit !px-10 mx-auto" />
						</div>
					))}
				</div>
				<PrimaryButton
					label="See Full Plans & Calculate Savings"
					icon={arrow_right}
					rotateIcon
					classes="w-fit mx-auto mt-14"
				/>
			</div>
		</section>
	);
};

export default Plans;
