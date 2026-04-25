import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { useTranslation } from "react-i18next";

const ReadyToGetHandled = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="py-8 lg:py-[72px] px-4 bg-dark rounded-xl">
					<h2 className="text-xl lg:text-4xl font-bold text-white text-center mb-6">
						Ready to get everything handled?
					</h2>
					<p className="text-sm text-light text-center mb-6 lg:max-w-[640px] mx-auto">
						Book a free consultation our team will walk you through exactly
						what's covered and set everything up for you.
					</p>
					<div className="flex items-center justify-center gap-2.5 flex-wrap">
						<PrimaryButton
							label={t("bookFreeConsultation")}
							classes="border border-primary"
							to="/#getStartedToday"
							isAHref
						/>
						<WhiteButton
							label="Calculate My Savings"
							classes="!text-white !bg-transparent"
						/>
					</div>
					<p className="text-sm text-light text-center mt-6">
						✓ From 250 AED/month  ·  ✓ No long-term contracts  ·  ✓ Cancel
						anytime
					</p>
				</div>
			</div>
		</section>
	);
};

export default ReadyToGetHandled;
