import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { check } from "icons/index";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OurServices = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const [active, setActive] = useState("vATFiling");
	const links = [
		{ id: "vATFiling", labelEn: "VAT Filing", labelAr: "ضريبة القيمة المضافة" },
		{ id: "corporateTax", labelEn: "Corporate Tax", labelAr: "ضريبة الشركات" },
		{ id: "bookkeeping", labelEn: "Bookkeeping", labelAr: "مسك الدفاتر" },
		{
			id: "additionalServices",
			labelEn: "Additional Services",
			labelAr: "خدمات إضافية",
		},
	];

	const servicesList = [
		{
			id: "vATFiling",
			titleEn: "VAT Filing",
			titleAr: "ضريبة القيمة المضافة",
			descriptionEn:
				"We handle your full VAT cycle calculations, preparation, and FTA submission every quarter, on time. You don't need to know anything about VAT. We do.",
			descriptionAr:
				"نتولّى إدارة دورة ضريبة القيمة المضافة بالكامل: الحساب، والتحضير، والتقديم للهيئة الاتحادية للضرائب، في الوقت المحدد بشكل ربع سنوي. لست بحاجة للغرق في التفاصيل... نحن نهتم بكل شيء.",
			featuresEn: [
				"Review all invoices and categorize taxable transactions",
				"Calculate output and input VAT accurately",
				"Prepare and submit the VAT return to the FTA on your behalf",
				"Monitor deadlines so nothing is ever missed",
				"Handle any amendments or FTA queries",
			],
			featuresAr: [
				"مراجعة جميع الفواتير وتصنيف العمليات الخاضعة للضريبة.",
				"حساب ضريبة المُخرجات والمُدخلات بدقة.",
				"إعداد وتقديم الإقرار الضريبي بالنيابة عنك.",
				"متابعة المواعيد النهائية لضمان عدم التأخير.",
				"التعامل مع أي تعديلات أو استفسارات من الهيئة.",
			],
			imgSrc: "/images/why-us-1.svg",
		},
		{
			id: "corporateTax",
			titleEn: "Corporate Tax",
			titleAr: "ضريبة الشركات",
			descriptionEn:
				"We prepare your full corporate tax return and file it with the FTA before the deadline every year. Small business relief applied automatically where eligible.",
			descriptionAr:
				"نجهّز الإقرار الضريبي السنوي الكامل للشركة ونقدّمه للهيئة الاتحادية للضرائب قبل الموعد النهائي. الشركات الصغيرة تحصل على الإعفاء الضريبي تلقائيًا بمجرّد استيفاء الشروط.",
			featuresEn: [
				"Review your full year of financials",
				"Prepare the corporate tax return with all required disclosures",
				"Apply small business relief where eligible (0% under AED 3M revenue)",
				"Submit to the FTA within the 9-month window",
				"Maintain records in FTA-compliant format",
			],
			featuresAr: [
				"مراجعة بياناتك المالية السنوية بالكامل.",
				"إعداد الإقرار الضريبي بجميع متطلباته.",
				"تطبيق إعفاء الشركات الصغيرة (0% حتى 3 مليون درهم).",
				"تقديم الإقرار خلال المهلة المحددة (9 أشهر).",
				"حفظ السجلات وفق اشتراطات الهيئة.",
			],
			imgSrc: "/images/why-us-3.svg",
		},
		{
			id: "bookkeeping",
			titleEn: "Bookkeeping",
			titleAr: "مسك الدفاتر",
			descriptionEn:
				"Accurate books are the foundation of everything VAT, corporate tax, financial reports, and FTA compliance all depend on it. We take care of it every month so you never have to think about it.",
			descriptionAr:
				"الدفاتر الدقيقة هي الأساس الذي يعتمد عليه كل شيء، من الضرائب والتقارير المالية، حتى الامتثال لاشتراطات الهيئة. نتولّى إدارتها لك شهريًا، حتى لا تضطر إلى لانشغال بها.",
			featuresEn: [
				"Record and categorize every income and expense transaction",
				"Maintain your chart of accounts",
				"Reconcile bank statements against your books monthly",
				"Prepare monthly financial statements",
				"Keep records audit-ready at all times",
			],
			featuresAr: [
				"تسجيل وتصنيف جميع الإيرادات والمصروفات.",
				"إدارة دليل الحسابات الخاص بك.",
				"تسوية الحسابات البنكية شهريًا.",
				"إعداد التقارير المالية شهريًا.",
				"الحفاظ على السجلات جاهزة لأي تدقيق.",
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
							{currentLanguage === "ar" ? link.labelAr : link.labelEn}
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
										{currentLanguage === "ar"
											? service.titleAr
											: service.titleEn}
									</h4>
									<p className="text-sm text-muted">
										{currentLanguage === "ar"
											? service.descriptionAr
											: service.descriptionEn}
									</p>
								</div>
								<ul className="flex flex-col gap-3">
									{(currentLanguage === "ar"
										? service.featuresAr
										: service.featuresEn
									).map((feature, index) => (
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
								alt={service.titleEn}
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
