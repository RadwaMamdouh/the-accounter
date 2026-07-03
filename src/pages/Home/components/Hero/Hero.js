import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import { arrow_right, check } from "icons/index";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import DarkButton from "components/DarkButton/DarkButton";

const Hero = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className={styles.hero}>
			<div className="container">
				<Swiper
					key={currentLanguage}
					dir={currentLanguage === "ar" ? "rtl" : "ltr"}
					modules={[Pagination]}
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ el: ".hero-swiper-pagination", clickable: true }}>
					<SwiperSlide>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2.5 items-center">
							<div className="lg:pe-18">
								<h5 className="text-primary-dark text-sm font-semibold mb-3">
									⭐ {t("trustedByUaeBusinesses")}
								</h5>
								<h1 className="text-dark text-[32px] lg:text-4xl font-bold mb-6 !leading-normal">
									{t("stopWorryingAboutAccountingWeHandleEverything")}
								</h1>
								<p className="text-dark text-sm mb-6 leading-relaxed">
									{t("heroDescription")}
								</p>
								<div className="flex items-center justify-start gap-4 mb-6 flex-wrap">
									<PrimaryButton
										isAHref
										to="/#getStartedToday"
										label={t("bookFreeConsultation")}
										classes="max-lg:w-full"
									/>
									<DarkButton
										label={t("calculateMySavings")}
										icon={arrow_right}
										classes="max-lg:w-full"
										rotateIcon
										to="/calculate-your-savings"
									/>
								</div>
								<ul className="[&>li]:not-last:mb-1">
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											{t("startingAt", { price: 250 })}
										</span>
									</li>
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											{t("zeroAccountingKnowledgeNeeded")}
										</span>
									</li>
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											{t("wePayAnyFinesIfWeMakeAnError")}
										</span>
									</li>
								</ul>
							</div>
							<div>
								<div className="h-[250px] lg:h-[540px] ms-auto">
									<img
										src="/images/hero-img.svg"
										alt="Hero 1"
										className="w-full h-full"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="hero-swiper-pagination"></div>
			</div>
		</section>
	);
};

export default Hero;
