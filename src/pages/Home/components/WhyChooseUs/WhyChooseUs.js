import { Link } from "react-router-dom";
import styles from "./WhyChooseUs.module.css";
import { arrow_right } from "icons/index";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const whyUsData = [
		{
			id: 1,
			badge: "10X Better Quality",
			badgeAr: "جودة أفضل بـ 10 أضعاف",
			title: "Real Accountants, Not Just Software",
			titleAr: "محاسبون حقيقيون، وليس مجرد برنامج للمحاسبة",
			desc: "We're not QuickBooks or FreshBooks. Every transaction is validated by 6 experts. Software helps them work faster - but humans ensure accuracy. You get 10x better quality at the same cost.",
			descAr:
				"نحن لسنا مجرد تطبيق محاسبة. كل معاملة يتم التحقق منها من قبل 6 خبراء. البرنامج يساعدهم على العمل بشكل أسرع - لكن البشر يضمنون الدقة. تحصل على جودة أفضل بـ 10 أضعاف بنفس التكلفة.",
			imgSrc: "/images/why-us-1.svg",
			showLink: false,
		},
		{
			id: 2,
			badge: "Save up to 87% of accounting & Tax costs",
			badgeAr: "Save up to 87% of accounting & Tax costs",
			title: "Save 15,000+ AED/Year vs. Traditional Solutions",
			titleAr: "Save 15,000+ AED/Year vs. Traditional Solutions",
			desc: "Complete bookkeeping, tax filing, invoicing, and bank reconciliation.  All included. One transparent price starting at 250 AED/month.",
			descAr:
				"مسك دفاتر كامل، تقديم الإقرارات الضريبية، إصدار الفواتير، ومطابقة الحسابات البنكية. كل شيء مشمول. سعر واحد شفاف يبدأ من 250 درهم شهرياً.",
			imgSrc: "/images/why-us-2.svg",
			showLink: true,
		},
		{
			id: 3,
			badge: "100% Compliance Guaranteed",
			badgeAr: "نضمن الامتثال الكامل بنسبة 100%",
			title: "We Pay Any Fines If We Make an Error",
			titleAr: "نحن ندفع أي غرامات في حال ارتكابنا أي خطأ",
			desc: "We guarantee 100% VAT & Corporate Tax compliance. Our 6-layer validation process catches every error before submission.",
			descAr:
				"نضمن امتثال بنسبة 100% لضريبة القيمة المضافة وضريبة الشركات. عملية التحقق المكونة من 6 طبقات تكتشف كل خطأ قبل التقديم.",
			imgSrc: "/images/why-us-3.svg",
			showLink: false,
		},
		{
			id: 4,
			badge: "Save  240+ hours annually",
			badgeAr: "وفر أكثر من 240 ساعة سنوياً",
			title: "100% Digital - Zero Office Visits",
			titleAr: "خدمة رقمية كاملة - لا حاجة لزيارة المكتب",
			desc: "Upload invoices from your phone. We take care of the rest. No office visits. No meetings.  No time wasted. Just upload and relax.",
			descAr:
				"ارفع الفواتير من هاتفك أو من الحاسب. نحن نتولى الباقي. بدون زيارات مكتبية. بدون اجتماعات. بدون إضاعة وقت. فقط ارفع واسترح.",
			imgSrc: "/images/why-us-4.svg",
			showLink: false,
		},
		{
			id: 5,
			badge: "Live dashboard Included",
			badgeAr: "يتضمن لوحة تحكم فورية مشمولة في الخدمة",
			title: "Instant Financial Insights 24/7",
			titleAr: "معلومات مالية فورية 24 ساعة",
			desc: "See your expenses, income, profit margins, and tax obligations in real-time through our mobile dashboard. No waiting for monthly reports. Know your numbers anytime, anywhere.",
			descAr:
				"اطلع على مصاريفك، إيراداتك، هوامش الربح، والالتزامات الضريبية في الوقت الفعلي عبر لوحة التحكم على الجوال. بدون انتظار التقارير الشهرية. اعرف أرقامك في أي وقت ومن أي مكان.",
			imgSrc: "/images/why-us-5.svg",
			showLink: false,
		},
	];

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="mb-8 lg:mb-[72px]">
					<h6 className="text-sm text-primary text-center mb-1 lg:mb-3">
						{t("whyChooseUs")}
					</h6>
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark text-center mb-1 lg:mb-3">
						{t("whySmartUaeBusinessesChooseTheAccounter")}
					</h2>
					<p className="text-sm text-dark text-center">
						{t(
							"moreThanJustAccountingYourCompleteComplianceAndFinancialPartner",
						)}
					</p>
				</div>
				<div className="flex flex-col gap-12 lg:gap-6">
					{whyUsData.map((item) => (
						<div className={styles.why_row} key={item.id}>
							<div className={styles.info}>
								<div className={styles.badge}>
									{currentLanguage === "ar" ? item.badgeAr : item.badge}
								</div>
								<h3>{currentLanguage === "ar" ? item.titleAr : item.title}</h3>
								<p>{currentLanguage === "ar" ? item.descAr : item.desc}</p>
								{item.showLink && (
									<Link
										to=""
										className="flex items-center justify-start gap-1 w-fit text-primary text-sm">
										<span>{t("seeYourExactSavings")}</span>
										<span className="shrink-0 w-[14px] h-[14px] *:w-full *:h-full rtl:rotate-180">
											{arrow_right}
										</span>
									</Link>
								)}
							</div>
							<img src={item.imgSrc} alt={item.title} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
