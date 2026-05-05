import { useTranslation } from "react-i18next";

const ServicesHero = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8 lg:py-[72px] bg-dark">
			<div className="container">
				<h6 className="text-sm text-primary text-center uppercase mb-4 lg:mb-6">
					{t("ourServices")}
				</h6>
				<h1 className="text-xl lg:text-4xl font-bold text-white text-center mb-4 lg:mb-3">
					{t("servicesHeroTitle")}
				</h1>
				<p className="text-sm text-light text-center lg:max-w-[40%] mx-auto">
					{t("servicesHeroSubTitle")}
				</p>
			</div>
		</section>
	);
};

export default ServicesHero;
