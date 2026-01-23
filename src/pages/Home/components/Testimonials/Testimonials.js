import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import styles from "./Testimonials.module.css";

import { Grid, Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";

import { arrow_left, arrow_right2 } from "icons/index";
import Rate from "components/Rate/Rate";

const Testimonials = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const testimonials = [
		{
			id: 1,
			rate: 5,
			comment:
				"I was spending 15+ hours every month on accounting. Now I spend 30 seconds uploading invoices. The Accounter gave me back my time so I can focus on growing my business. Revenue is already up 20% this year.",
			name: "Ahmed Al Mansouri",
			role: "Retail Business Owner",
			address: "Abu Dhabi",
			image: "/images/testimonial-1.svg",
		},
		{
			id: 2,
			rate: 5,
			comment:
				"I was spending 15+ hours every month on accounting. Now I spend 30 seconds uploading invoices. The Accounter gave me back my time so I can focus on growing my business. Revenue is already up 20% this year.",
			name: "Ahmed Al Mansouri",
			role: "Retail Business Owner",
			address: "Abu Dhabi",
			image: "/images/testimonial-1.svg",
		},
		{
			id: 3,
			rate: 5,
			comment:
				"I was spending 15+ hours every month on accounting. Now I spend 30 seconds uploading invoices. The Accounter gave me back my time so I can focus on growing my business. Revenue is already up 20% this year.",
			name: "Ahmed Al Mansouri",
			role: "Retail Business Owner",
			address: "Abu Dhabi",
			image: "/images/testimonial-1.svg",
		},
		{
			id: 4,
			rate: 5,
			comment:
				"I was spending 15+ hours every month on accounting. Now I spend 30 seconds uploading invoices. The Accounter gave me back my time so I can focus on growing my business. Revenue is already up 20% this year.",
			name: "Ahmed Al Mansouri",
			role: "Retail Business Owner",
			address: "Abu Dhabi",
			image: "/images/testimonial-1.svg",
		},
	];

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container mx-auto px-4">
				<div className="mb-8 lg:mb-[54px] flex flex-col gap-3">
					<h6 className="text-sm text-primary text-center">Testimonials</h6>
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold text-center">
						Over 1,000 Happy Customers
					</h2>
					<p className="text-sm text-dark text-center">
						Check out what our customers have been saying about us.
					</p>
				</div>

				<Swiper
					key={currentLanguage}
					dir={currentLanguage === "ar" ? "rtl" : "ltr"}
					modules={[Grid, Navigation]}
					spaceBetween={50}
					slidesPerView={2}
					grid={{
						rows: 2,
					}}
					navigation={{
						prevEl: ".testi-swiper-button-prev",
						nextEl: ".testi-swiper-button-next",
					}}
					breakpoints={{
						0: {
							spaceBetween: 24,
							slidesPerView: 1,
							grid: {
								rows: 2,
								fill: "row",
							},
						},
						1024: {
							spaceBetween: 50,
							slidesPerView: 2,
							grid: {
								rows: 1,
							},
						},
					}}>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<div className={styles.testimonial_card}>
								<div className={styles.data}>
									<Rate value={testimonial.rate} />
									<p>{testimonial.comment}</p>
									<div>
										<h5>{testimonial.name}</h5>
										<h6>
											<span>{testimonial.role}</span>
											<span>{testimonial.address}</span>
										</h6>
									</div>
								</div>
								<div className={styles.img}>
									<img src={testimonial.image} alt="Testimonial Pic" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.testimonial_navigations}>
					<button className="testi-swiper-button-prev">{arrow_left}</button>
					<button className="testi-swiper-button-next">{arrow_right2}</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
