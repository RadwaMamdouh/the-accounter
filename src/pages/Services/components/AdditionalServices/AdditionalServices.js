import { bank, brand, chart, phone, receipt, search } from "icons/index";
import styles from "./AdditionalServices.module.css";
import { useTranslation } from "react-i18next";

const AdditionalServices = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const services = [
		{
			id: 1,
			icon: chart,
			badge: { labelEn: "Included", labelAr: "مشمول", colorClass: "blue" },
			titleEn: "Financial Statements & Reports",
			titleAr: "التقارير المالية",
			descriptionEn:
				"Monthly income statements, balance sheets, and cash flow reports prepared and ready for you, your bank, or any audit.",
			descriptionAr:
				"بيانات الدخل الشهري، وقوائم الميزانية، وتقارير التدفقات النقدية. مناسبة لك، أو للبنوك، أو لأي تدقيق.",
		},
		{
			id: 2,
			icon: bank,
			badge: { labelEn: "FREE", labelAr: "مجاني", colorClass: "green" },
			titleEn: "Bank Reconciliation",
			titleAr: "التسوية البنكية",
			descriptionEn:
				"Every bank transaction matched against your books each month. Accurate, consistent, and always up to date.",
			descriptionAr:
				"مطابقة كل التحويلات البنكية مع سجلاتك شهريًا. بدقة وانتظام وتحديث مستمر.",
		},
		{
			id: 3,
			icon: receipt,
			badge: { labelEn: "FREE", labelAr: "مجاني", colorClass: "green" },
			titleEn: "Invoicing Software",
			titleAr: "برنامج الفوترة",
			descriptionEn:
				"Create unlimited professional, FTA-compliant invoices directly from the app. Unlimited, branded, and sent in seconds.",
			descriptionAr:
				"استخدام التطبيق في إنشاء عدد غير محدود من الفواتير الاحترافية المطابقة لاشتراطات الهيئة وإرسالها خلال ثوانٍ.",
		},
		{
			id: 4,
			icon: phone,
			badge: { labelEn: "Included", labelAr: "مشمول", colorClass: "blue" },
			titleEn: "Live Financial Dashboard",
			titleAr: "لوحة تحكم مالية مباشرة",
			descriptionEn:
				"Track your income, expenses, profit margins, and tax obligations in real-time. Available on mobile and web, 24/7.",
			descriptionAr:
				"تابع الإيرادات والمصروفات والأرباح والالتزامات الضريبية، أولًا بأول، من الجوّال أو الحاسوب.",
		},
		{
			id: 5,
			icon: search,
			badge: { labelEn: "Add-on", labelAr: "إضافة", colorClass: "orange" },
			titleEn: "Auditing",
			titleAr: "التدقيق",
			descriptionEn:
				"Independent audit by a certified auditor for regulatory requirements, investors, or peace of mind.",
			descriptionAr:
				"خدمة تدقيق مستقل للمتطلبات القانونية أو الاستثمارية من مدقّق معتمد.",
		},
		{
			id: 6,
			icon: brand,
			badge: { labelEn: "Add-on", labelAr: "إضافة", colorClass: "orange" },
			titleEn: "Company & Asset Valuation",
			titleAr: "تقييم الشركات والأصول",
			descriptionEn:
				"Company & Asset Valuation Professional valuation of your business or assets for fundraising, acquisitions, or partnership negotiations.",
			descriptionAr:
				"تقييم احترافي لشركتك أو أصولك لدعم قرارات التمويل أو الاستحواذ أو الشراكات.",
		},
	];

	return (
		<section className={`py-8 lg:py-[72px] ${styles.additional_services}`}>
			<div className="container">
				<div className="mb-8 lg:mb-[72px] flex flex-col gap-3">
					<h6 className="text-sm text-dark uppercase">
						{t("additionalServices")}
					</h6>
					<h2 className="text-xl lg:text-[32px] text-dark font-bold">
						{t("additionalServicesHeadline")}
					</h2>
					<p className="text-sm text-dark">{t("additionalServicesSubText")}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service) => (
						<div
							className="p-5 bg-white rounded-[4px] border border-[#EFF0F1] group"
							key={service.id}>
							<div className="flex items-center justify-between gap-2 mb-4">
								<span className="shrink-0 w-8 h-8 *:max-w-full text-dark flex items-center justify-center">
									{service.icon}
								</span>
								<div
									className={`${styles.badge} ${styles[service.badge.colorClass]}`}>
									{currentLanguage === "ar"
										? service.badge.labelAr
										: service.badge.labelEn}
								</div>
							</div>
							<h4 className="font-semibold text-dark pb-0.5 mb-3 w-fit relative after:content-[''] after:h-[2px] after:bg-dark after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:z-10 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
								{currentLanguage === "ar" ? service.titleAr : service.titleEn}
							</h4>
							<p className="text-sm text-muted line-clamp-2">
								{currentLanguage === "ar"
									? service.descriptionAr
									: service.descriptionEn}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AdditionalServices;
