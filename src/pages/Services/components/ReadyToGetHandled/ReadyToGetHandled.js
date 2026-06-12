import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { useTranslation } from "react-i18next";

const ReadyToGetHandled = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="py-8 lg:py-[72px] px-4 bg-dark rounded-xl">
					<h2 className="text-xl lg:text-4xl font-bold text-white text-center mb-6">
						{currentLanguage === "ar"
							? "جاهز لتكون إدارة حساباتك أسهل؟"
							: "Ready to get everything handled?"}
					</h2>
					<p className="text-sm text-light text-center mb-6 lg:max-w-[640px] mx-auto">
						{currentLanguage === "ar"
							? "احجز استشارة مجانية. فريقنا سيوضح لك جميع الخدمات ويجهّز لك كل شئ من البداية."
							: "Book a free consultation our team will walk you through exactly what's covered and set everything up for you."}
					</p>
					<div className="flex items-center justify-center gap-2.5 flex-wrap">
						<PrimaryButton
							label={t("bookFreeConsultation")}
							classes="border border-primary"
							to="/get-started"
						/>
					</div>
					<p className="text-sm text-light text-center mt-6">
						✓ {t("fromPrice", { price: 250 })}  ·  ✓ {t("noLongTermContract")}
						 ·  ✓ {t("cancelAnytime")}
					</p>
				</div>
			</div>
		</section>
	);
};

export default ReadyToGetHandled;
