import { useTranslation } from "react-i18next";

const ComplianceGuaranteed = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const features = [
		{
			id: 1,
			titleEn: "Tax Accountant",
			titleAr: "محاسب ضريبي",
			descriptionEn:
				"Ensures full FTA compliance and accuracy on every transaction before anything is recorded.",
			descriptionAr: "يتأكّد من الامتثال والدقة لكل عملية قبل التسجيل.",
		},
		{
			id: 2,
			titleEn: "Accountant",
			titleAr: "محاسب قانوني",
			descriptionEn:
				"Categorizes and validates all transactions in line with IFRS accounting standards.",
			descriptionAr:
				"يصنّف ويوثّق كل المعاملات المالية بما يتوافق مع معايير التقارير المالية.",
		},
		{
			id: 3,
			titleEn: "Reconciler",
			titleAr: "تسوية بنكية",
			descriptionEn:
				"Matches every invoice against your bank records to ensure full consistency.",
			descriptionAr: "مطابقة كل فاتورة مقابل سجلّات التعاملات البنكية.",
		},
		{
			id: 4,
			titleEn: "Senior Reviewer",
			titleAr: "مراجع أوّل",
			descriptionEn:
				"Cross-checks all entries and flags any discrepancy before reports are finalized.",
			descriptionAr:
				"مقارنة جميع البيانات بشكل متكامل لكشف أي اختلاف قبل إصدار التقارير.",
		},
		{
			id: 5,
			titleEn: "Tax Agent",
			titleAr: "وكيل ضرائب",
			descriptionEn:
				"Reviews all filings in full before FTA submission nothing goes through unverified.",
			descriptionAr: "مراجعة شاملة لكل الأوراق قبل التقديم.",
		},
		{
			id: 6,
			titleEn: "Quality Manager",
			titleAr: "مدير الجودة",
			descriptionEn:
				"Final sign-off. Only after this approval is everything submitted to the FTA on your behalf.",
			descriptionAr: "التأشيرة النهائية لتأكيد جاهزية كل شيء للتقديم.",
		},
	];

	return (
		<section className="py-8 lg:py-[100px] bg-dark">
			<div className="container">
				<div className="mb-8 lg:mb-[50px] lg:w-[776px] max-w-full mx-auto flex flex-col gap-3">
					<h6 className="text-sm text-primary uppercase text-center">
						{t("complianceGuaranteed")}
					</h6>
					<h2 className="text-2xl lg:text-[32px] leading-relaxed font-bold text-white text-center">
						{currentLanguage === "ar"
							? "6 خبراء معتمدين يراجعون كل شيء قبل التقديم."
							: "6 experts check your work before anything reaches the FTA."}
					</h2>
					<p className="text-sm text-light text-center rtl:leading-relaxed">
						{currentLanguage === "ar"
							? "معظم تطبيقات المحاسبة تعتمد على الخوارزميات. نحن نعتمد على فريق حقيقي من خبراء مُعتمدين، يراجع كل عملية بالكامل قبل التقديم للهيئة."
							: "Most accounting software runs algorithms. We run people. Every transaction is reviewed by a team of certified professionals not a single one goes through unchecked."}
					</p>
				</div>
				<div className="p-6 bg-primary-bg border border-gray-bg rounded-[4px] flex items-center justify-center gap-4 mb-8 lg:mb-[50px]">
					<h4 className="text-2xl lg:text-4xl font-bold text-primary">100%</h4>
					<p className="text-lg font-bold text-dark">
						{currentLanguage === "ar"
							? "نتحمّل قيمة أي غرامة في حالة حدوث أي خطأ!"
							: "We pay any fines if we make an error"}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className="p-6 bg-white/5 border border-dark-hover rounded-[4px]">
							<h4 className="text-2xl lg:text-4xl font-bold text-primary-dark mb-4">
								{String(index + 1).padStart(2, "0")}
							</h4>
							<h5 className="text-lg font-bold text-white mb-3">
								{currentLanguage === "ar" ? feature.titleAr : feature.titleEn}
							</h5>
							<p className="text-sm text-light">
								{currentLanguage === "ar"
									? feature.descriptionAr
									: feature.descriptionEn}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ComplianceGuaranteed;
