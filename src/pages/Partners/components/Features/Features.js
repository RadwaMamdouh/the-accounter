import { flash, money, phone, shield_check } from "icons/index";
import { useTranslation } from "react-i18next";

const Features = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const features = [
		{
			id: 1,
			icon: money,
			titleEn: "Exclusive Partner Pricing",
			titleAr: "أسعار حصرية للأعضاء",
			descriptionEn:
				"Special discounted rates for all verified partner members",
			descriptionAr: "خصومات خاصة لكل الشركاء المعتمدين.",
		},
		{
			id: 2,
			icon: flash,
			titleEn: "Priority Onboarding",
			titleAr: "أولوية في الاشتراك",
			descriptionEn: "Dedicated setup get started within 24 hours",
			descriptionAr: "بدء الخدمات خلال 24 ساعة.",
		},
		{
			id: 3,
			icon: shield_check,
			titleEn: "100% FTA Compliant",
			titleAr: "امتثال كامل للهيئة",
			descriptionEn: "We pay any fines if we make an error",
			descriptionAr: "نتحمّل الغرامات في حال حدوث أي خطأ.",
		},
		{
			id: 4,
			icon: phone,
			titleEn: "100% Digital",
			titleAr: "خدمة رقمية 100%",
			descriptionEn: "No office visits. Upload invoices, we handle everything",
			descriptionAr: "لا زيارات مكتبية. ارفع الفواتير ونحن نكمل.",
		},
	];

	return (
		<section className="py-8 lg:py-[100px] bg-dark">
			<div className="container">
				<div className="flex gap-6 max-lg:flex-wrap">
					{features.map((feature) => (
						<div
							key={feature.id}
							className="flex flex-col items-center w-[249px] max-w-full lg:pe-6 lg:border-e border-dark-light grow last:pe-0 last:border-e-0">
							<span className="w-8 h-8 flex items-center justify-center text-white *:w-full *:h-full mb-4">
								{feature.icon}
							</span>
							<h4 className="text-lg font-bold text-white text-center mb-3">
								{currentLanguage === "ar" ? feature.titleAr : feature.titleEn}
							</h4>
							<p className="text-sm text-light text-center">
								{currentLanguage === "ar"
									? feature.descriptionAr
									: feature.descriptionEn}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
