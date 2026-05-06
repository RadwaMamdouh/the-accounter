import { useTranslation } from "react-i18next";

const PartnersHero = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8 lg:py-[72px] bg-dark">
			<div className="container">
				<h6 className="text-sm text-primary text-center uppercase mb-4 lg:mb-6">
					{t("ourPartners")}
				</h6>
				<h1 className="text-xl lg:text-4xl rtl:leading-relaxed font-bold text-white text-center mb-4 lg:mb-3 lg:w-1/2 max-w-full mx-auto">
					{t("partnersHeroHeadline")}
				</h1>
				<p className="text-sm text-light rtl:leading-relaxed text-center lg:max-w-[40%] mx-auto">
					{t("partnersHeroSubText")}
				</p>
			</div>
		</section>
	);
};

export default PartnersHero;
