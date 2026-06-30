import styles from "./HowItWorks.module.css";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="mb-8 lg:mb-[72px]">
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold text-center mb-3">
						{t("howItWorks")}
					</h2>
					<p className="text-sm text-dark text-center">{t("howItWorksDesc")}</p>
				</div>
				<div className="flex flex-col gap-8 lg:gap-[72px]">
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>
								{currentLanguage === "ar" ? "الخطوة 1" : "STEP 1"}
							</div>
							<h4>
								{currentLanguage === "ar"
									? "قم برفع أو إنشاء فواتيرك"
									: "Upload or Create Your Invoices"}
							</h4>
							<p>
								{currentLanguage === "ar"
									? "التقط صورة للفواتير عبر تطبيق الجوال الخاص بنا. ليس لديك فاتورة بعد؟ نحن نساندك! يمكنك إنشاء فواتير احترافية غير محدودة بعلامتك التجارية مجاناً تماماً باستخدام ميزة الفوترة لدينا"
									: "Snap a photo of invoices via our mobile app. Don't have an invoice yet? We've got your back! You can create unlimited professional, branded invoices completely FREE using our invoicing feature."}
							</p>
						</div>
						<img src="/images/how-works-1.svg" alt="Step 1" />
					</div>
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>
								{currentLanguage === "ar" ? "الخطوة 2" : "STEP 2"}
							</div>
							<h4>
								{currentLanguage === "ar"
									? "نحن نتكفل بكل شيء"
									: "We Process Everything"}
							</h4>
							<p>
								{currentLanguage === "ar"
									? "يتم مراجعة كل معاملة من قبل 6 خبراء — وليس خوارزميات."
									: "Every transaction is reviewed by 6 experts — not algorithms."}
							</p>
							<ol>
								<li>
									{currentLanguage === "ar"
										? "محاسب ضرائب: يضمن الامتثال الكامل للهيئة الاتحادية للضرائب والدقة."
										: "Tax Accountant: Ensures full FTA compliance and accuracy."}
								</li>
								<li>
									{currentLanguage === "ar"
										? "محاسب: يصنف ويتحقق من المعاملات وفقاً للمعايير الدولية للتقارير المالية."
										: "Accountant: Categorizes and validates transactions in line with IFRS standards."}
								</li>
								<li>
									{currentLanguage === "ar"
										? "مختص المطابقة المالية: يطابق كل فاتورة مع سجلاتك البنكية لضمان التناسق."
										: "Reconciler: Matches every invoice with your bank records for consistency."}
								</li>
							</ol>
							<p>
								{currentLanguage === "ar"
									? "وهذه مجرد البداية — نضيف 3 طبقات إضافية من مراجعة الجودة للقضاء على أي أخطاء قبل التقديم للهيئة الاتحادية للضرائب"
									: "And that’s just the start — we add 3 more layers of quality review to eliminate any errors before FTA submission."}
							</p>
						</div>
						<img src="/images/how-works-2.svg" alt="Step 2" />
					</div>
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>
								{currentLanguage === "ar" ? "الخطوة 3" : "STEP 3"}
							</div>
							<h4>
								{currentLanguage === "ar"
									? "تتبع معاملاتك المالية"
									: "Track Your Finances"}
							</h4>
							<p>
								{currentLanguage === "ar"
									? "تقاريرك جاهزة وجميع الاقرارات مقدمة للهيئة الاتحادية للضرائب. اطلع على أرباحك، التدفقات النقدية، والمصاريف في الوقت الفعلي عبر لوحة التحكم المحدثة على مدار الساعة."
									: "Your reports are ready and all filings submitted to the FTA. View your profits, cash flow, and expenses in real time through your dashboard updated 24/7."}
							</p>
						</div>
						<img src="/images/how-works-3.svg" alt="Step 3" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
