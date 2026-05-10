import { useTranslation } from "react-i18next";

const Hero = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="py-8 lg:py-[72px] bg-dark">
			<div className="container">
				<h6 className="text-sm text-primary text-center uppercase mb-4 lg:mb-6">
					{t("savingsCalculator")}
				</h6>
				<h1 className="text-xl lg:text-4xl font-bold text-white text-center mb-4 lg:mb-3">
					{currentLanguage === "ar"
						? "اكتشف حجم التوفير الذي يمكن أن تحققه"
						: "See exactly how much you'll save."}
				</h1>
				<p className="text-sm text-light text-center">
					{currentLanguage === "ar"
						? "أجب عن 5 أسئلة سريعة،  واحصل خلال ثوانٍ على تقدير مخصص لحجم التوفير المتوقع لشركتك"
						: "Answer 5 quick questions and get your personalized savings breakdown in seconds."}
				</p>
			</div>
		</section>
	);
};

export default Hero;
