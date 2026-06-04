import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8 lg:py-[72px] bg-dark">
			<div className="container">
				<h6 className="text-sm text-primary text-center uppercase mb-4 lg:mb-6">
					{t("how_it_works")}
				</h6>
				<h1 className="text-xl lg:text-4xl lg:leading-normal font-bold text-white text-center mb-4 lg:mb-3 lg:w-1/2 max-w-full mx-auto">
					{t("uploadYourInvoices")} <br /> {t("weHandleEverythingElse")}
				</h1>
				<p className="text-sm text-light text-center lg:max-w-[48%] mx-auto rtl:leading-relaxed">
					{t("howItWorksSubText")}
				</p>
			</div>
		</section>
	);
};

export default Hero;
