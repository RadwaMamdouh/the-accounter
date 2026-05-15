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
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const testimonials = [
		{
			id: 1,
			rate: 5,
			comment:
				"كنت أقضي أكثر من 15 ساعة شهريًا في أمور المحاسبة، أما الآن فلا أحتاج سوى 30 ثانية لرفع الفواتير. ذا أكونتر أعاد لي وقتي لأركّز على تطوير مشروعي. والإيرادات ارتفعت بالفعل بنسبة 20% هذا العام.",
			name: "أحمد المنصوري",
			role: "صاحب متجر تجزئة",
			address: "أبوظبي",
			image: "/images/testimonial-1.svg",
		},
		{
			id: 2,
			rate: 5,
			comment:
				"شركة المحاسبة الخارجية السابقة كانت تتقاضى 1,500 درهم شهريًا، ومع ذلك كنا نلاحقهم للحصول على التقارير. ذا أكونتر يكلّفنا 525 درهم فقط شهريًا، ويشمل كل شيء، والتقارير تصل دائمًا في موعدها. لقد وفّرنا 11,700 درهم خلال هذا العام فقط.",
			name: "خالد رحمن",
			role: "شريك إداري في شركة مقاولات",
			address: "الشارقة",
			image: "/images/testimonial-1.svg",
		},
		{
			id: 3,
			rate: 5,
			comment:
				"كنت أدفع 1,200 درهم شهريًا لمحاسب مستقل مقابل مسك الدفاتر، ومع ذلك كان يرتكب أخطاءً كادت أن تسبّب لي غرامات من الهيئة. ذا أكونتر قدّم لي جودة أفضل مقابل 250 درهم فقط شهريًا. قيمة ممتازة مقابل التكلفة.",
			name: "فاطمة الفهيم",
			role: "مالكة مقهى",
			address: "دبي",
			image: "",
		},
		{
			id: 4,
			rate: 5,
			comment:
				"لوحة التحكم المباشرة غيّرت طريقة إدارتي للمشروع، فقد أصبحت أرى هامش الربح، والتدفقات النقدية، والمصروفات الفورية. ساعدني ذلك على اتخاذ قرارات أفضل، وتقليل التكاليف غير الضرورية بنسبة 22%، وزيادة الربحية. هذا ليس مجرد نظام محاسبة، بل ذكاء أعمال.",
			name: "بريا ميهتا",
			role: "مالكة شركة Tech Solutions LLC",
			address: "عجمان",
			image: "",
		},
	];

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="mb-8 lg:mb-[54px] flex flex-col gap-3">
					<h6 className="text-sm text-primary text-center">
						{t("testimonials")}
					</h6>
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold text-center">
						{currentLanguage === "ar"
							? "أكثر من 1,000 عميل سعيد"
							: "Over 1,000 Happy Customers"}
					</h2>
					<p className="text-sm text-dark text-center">
						{currentLanguage === "ar"
							? "اطلع على ما يقوله عملاؤنا عنا."
							: "Check out what our customers have been saying about us."}
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
						<SwiperSlide key={testimonial.id} className="!h-auto">
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
									{testimonial.image ? (
										<img src={testimonial.image} alt="Testimonial Pic" />
									) : (
										<div className={styles.avatar_fallback}>
											{testimonial.name.charAt(0)}
										</div>
									)}
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
