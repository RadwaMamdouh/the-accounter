import { useState } from "react";
import styles from "./Plans.module.css";
import DarkButton from "components/DarkButton/DarkButton";
import SelectBtn from "components/SelectBtn/SelectBtn";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { arrow_right, check } from "icons/index";
import { useTranslation } from "react-i18next";

const Plans = ({ gridView, hideBtn, showPlansFeatures }) => {
	const { t, i18n } = useTranslation();
	const options = [
		{ label: t("monthly"), value: "Monthly" },
		{ label: t("quarterly"), value: "Quarterly" },
	];
	const [value, setValue] = useState(options[0].value);
	const currentLanguage = i18n.language;

	const plans = [
		{
			id: 1,
			title: "STARTER",
			titleAr: "الناشئة",
			desc: "Up to 50 Docs Per Month",
			descAr: "حتى 50 مستند شهرياً",
			price: "250.00",
		},
		{
			id: 2,
			title: "GROWTH",
			titleAr: "النامية",
			desc: "Up to 150 Docs Per Month",
			descAr: "حتى 150 مستند شهرياً",
			price: "525.00",
		},
		{
			id: 3,
			title: "SCALE",
			titleAr: "المتوسعة",
			desc: "Up to 300 Docs Per Month",
			descAr: "حتى 300 مستند شهرياً",
			price: "975.00",
		},
	];

	const plansFeatures = [
		{
			id: 1,
			titleEn: "Complete Bookkeeping",
			titleAr: "مسك دفاتر متكامل",
		},
		{
			id: 2,
			titleEn: "Customized Invoicing",
			titleAr: "نظام فوترة مخصص",
		},
		{
			id: 3,
			titleEn: "Daily Sales Report",
			titleAr: "تقارير المبيعات اليومية",
		},
		{
			id: 4,
			titleEn: "Complete VAT Services from registration to VAT filing",
			titleAr:
				"خدمات ضريبة القيمة المضافة بالكامل، من التسجيل حتى تقديم الإقرار",
		},
		{
			id: 5,
			titleEn: "Financial Statements",
			titleAr: "القوائم والتقارير المالية",
		},
		{
			id: 6,
			titleEn: "Bank Reconciliation",
			titleAr: "التسويات البنكية",
		},
		{
			id: 7,
			titleEn: "Payables/ Receivables Reports",
			titleAr: "تقارير الذمم الدائنة والمدينة",
		},
	];

	return (
		<section className={styles.plans}>
			<div className={styles.plans_head}>
				<div className="container">
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark text-center mb-4">
						{currentLanguage === "ar"
							? "خطط مرنة لجميع الشركات"
							: "Plans for Every Business Size"}
					</h2>
					<p className="text-sm text-dark text-center mb-4">
						{currentLanguage === "ar"
							? "قسم المحاسبة الكامل في خطة واحدة بسيطة. كل شيء مشمول. لا يوجد رسوم مخفية."
							: "Your entire accounting department in one simple plan. Everything included. Zero hidden fees."}
					</p>
					<div className="w-fit mx-auto relative mb-8 lg:mb-[58px]">
						<SelectBtn
							value={value}
							onChange={(e) => setValue(e.value)}
							options={options}
							classes="mb-6"
						/>
						<p className="text-sm text-dark text-center max-lg:px-5">
							{currentLanguage === "ar"
								? "احصل على 20 مستند مجاناً مع الخطة الربع سنوية!"
								: "Get 20 documents for free with a quarterly plan!"}
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
								<h4>{currentLanguage === "ar" ? plan.titleAr : plan.title}</h4>
								<p className={`${!gridView ? "lg:w-[95%]" : ""}`}>
									{currentLanguage === "ar" ? plan.descAr : plan.desc}
								</p>
							</div>
							<h3>{plan.price} AED</h3>
							<DarkButton label={t("choosePlan")} classes="w-full" />
						</div>
					))}
				</div>
				{!hideBtn && (
					<PrimaryButton
						label={
							currentLanguage === "ar"
								? "اطلع على كافة الباقات واحسب ما ستوفره"
								: "See Full Plans & Calculate Savings"
						}
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
								{t("allPlansIncludeTheseFeatures")}
							</h4>
							<ul className="flex flex-col gap-2">
								{plansFeatures.map((feature) => (
									<li
										className="flex items-center justify-start gap-[10px] lg:gap-2"
										key={feature.id}>
										<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
											{check}
										</span>
										<span className="text-sm text-dark">
											{currentLanguage === "ar"
												? feature.titleAr
												: feature.titleEn}
										</span>
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
