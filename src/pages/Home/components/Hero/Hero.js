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
	const { i18n } = useTranslation();
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
									⭐ Trusted by 1,000+ UAE Businesses
								</h5>
								<h1 className="text-dark text-[32px] lg:text-4xl font-bold mb-6">
									Stop Worrying About Accounting. We Handle Everything.
								</h1>
								<p className="text-dark text-sm mb-6">
									Upload your invoices. Our easy-to-use software + certified
									accounting experts take care of the rest: bookkeeping, VAT &
									Corporate Tax prep, financial reports, and all FTA filings on
									your behalf. No missed deadlines. No penalties — just more
									time to grow your business.
								</p>
								<div className="flex items-center justify-start gap-4 mb-6 flex-wrap">
									<PrimaryButton
										isBtn
										label="Book Free Consultation"
										classes="max-lg:w-full"
									/>
									<DarkButton
										isBtn
										label="Calculate My Savings"
										icon={arrow_right}
										classes="max-lg:w-full"
										rotateIcon
									/>
								</div>
								<ul className="[&>li]:not-last:mb-1">
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											Starting at 250 AED/month
										</span>
									</li>
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											Zero Accounting Knowledge needed
										</span>
									</li>
									<li className="flex items-start justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 mt-1 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											100% COMPLIANT: We pay any fines if we make an error
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
					<SwiperSlide>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2.5 items-center">
							<div className="lg:pe-18">
								<h5 className="text-primary-dark text-sm font-semibold mb-3">
									⭐ Trusted by 1,000+ UAE Businesses
								</h5>
								<h1 className="text-dark text-[32px] lg:text-4xl font-bold mb-6">
									Stop Worrying About Accounting. We Handle Everything.
								</h1>
								<p className="text-dark text-sm mb-6">
									Upload your invoices. Our easy-to-use software + certified
									accounting experts take care of the rest: bookkeeping, VAT &
									Corporate Tax prep, financial reports, and all FTA filings on
									your behalf. No missed deadlines. No penalties — just more
									time to grow your business.
								</p>
								<div className="flex items-center justify-start gap-4 mb-6 flex-wrap">
									<PrimaryButton
										isBtn
										label="Book Free Consultation"
										classes="max-lg:w-full"
									/>
									<DarkButton
										isBtn
										label="Calculate My Savings"
										icon={arrow_right}
										classes="max-lg:w-full"
									/>
								</div>
								<ul className="[&>li]:not-last:mb-1">
									<li className="flex items-center justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 flex *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											Starting at 250 AED/month
										</span>
									</li>
									<li className="flex items-center justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											Zero Accounting Knowledge needed
										</span>
									</li>
									<li className="flex items-center justify-start gap-1">
										<span className="shrink-0 text-orange w-3.5 h-3.5 *:w-full *:h-full">
											{check}
										</span>
										<span className="text-dark text-sm font-medium">
											100% COMPLIANT: We pay any fines if we make an error
										</span>
									</li>
								</ul>
							</div>
							<div>
								<div className="h-[250px] lg:h-[540px] ms-auto">
									<img
										src="/images/hero-img.svg"
										alt="Hero 2"
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
