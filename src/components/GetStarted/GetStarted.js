import DarkButton from "components/DarkButton/DarkButton";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="py-8 lg:py-[100px] bg-primary-bg">
			<div className="container">
				<h2 className="text-xl lg:text-4xl font-bold text-dark text-center mb-6">
					{t("readyToGetStarted")}
				</h2>
				<p className="text-sm text-dark text-center mb-6">
					{currentLanguage === "ar"
						? "تخذ الخطوة الأولى نحو محاسبة خالية من الضغوط. احجز استشارة مجانية أو ابدأ حسابك اليوم - سيرشدك فريقنا خلال كل شيء."
						: "Take the first step towards stress-free accounting. Book a free consultation or start your account today - our team will guide you through everything."}
				</p>
				<DarkButton
					label={currentLanguage === "ar" ? "ابدأ الآن" : "Get Started"}
					classes="w-fit mx-auto"
					to="/#getStartedToday"
					isAHref
				/>
			</div>
		</section>
	);
};

export default GetStarted;
