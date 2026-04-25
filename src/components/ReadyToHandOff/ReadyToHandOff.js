import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { useTranslation } from "react-i18next";

const ReadyToHandOff = () => {
	const { t } = useTranslation();
	// const { t, i18n } = useTranslation();
	// const currentLanguage = i18n.language;

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="py-8 lg:py-[72px] px-4 bg-dark rounded-xl">
					<h2 className="text-xl lg:text-4xl font-bold text-white text-center mb-6">
						Ready to hand off your accounting?
					</h2>
					<p className="text-sm text-light text-center mb-6 lg:max-w-[640px] mx-auto">
						Book a free consultation our team will walk you through exactly
						what's covered, answer your questions, and get your account set up
						from scratch.
					</p>
					<PrimaryButton
						label={t("bookFreeConsultation")}
						classes="w-fit mx-auto"
						to="/#getStartedToday"
						isAHref
					/>
					<p className="text-sm text-light text-center mt-6">
						✓ From 250 AED/month · ✓ Cancel anytime
					</p>
				</div>
			</div>
		</section>
	);
};

export default ReadyToHandOff;
