import { chart, refresh, upload } from "icons/index";
import styles from "./TheProcess.module.css";
import { useTranslation } from "react-i18next";

const TheProcess = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const steps = [
		{
			id: 1,
			icon: upload,
			titleEn: "Upload Your Invoices",
			titleAr: "ارفع مستنداتك",
			descriptionEn:
				"Snap a photo or upload your invoices directly from your phone or desktop. Takes less than 30 seconds.",
			descriptionAr:
				"صوّر الفواتير أو ارفعها عبر الهاتف أو الحاسوب في عملية لا تتجاوز 30 ثانية.",
		},
		{
			id: 2,
			icon: refresh,
			titleEn: "We Process Everything",
			titleAr: " نبدأ معالجة بياناتك",
			descriptionEn:
				"Every transaction goes through our 6-layer expert validation not just software. Real accountants review your books.",
			descriptionAr:
				"كل عملية تمر بـ6 مراحل من المراجعة والتوثيق بواسطة خبراء حقيقيين لا مجرد تطبيق.",
		},
		{
			id: 3,
			icon: chart,
			titleEn: "You Get Results",
			titleAr: "احصل على النتائج",
			descriptionEn:
				"Your filings are submitted, your reports are ready, and your dashboard is updated all without you lifting a finger.",
			descriptionAr:
				"تم تقديم إقراراتك. تم تجهيز تقاريرك. لوحة التحكّم الخاصة بك تم تحديثها. دون أن تتعب نفسك.",
		},
	];

	return (
		<section className={`py-8 lg:py-[72px] ${styles.the_process}`}>
			<div className="container">
				<div className="mb-8 lg:mb-[72px] flex flex-col gap-3">
					<h6 className="text-sm text-dark">{t("theProcess")}</h6>
					<h2 className="text-2xl lg:text-[32px] font-bold text-dark">
						{t("theProcessHeadline")}
					</h2>
					<p className="text-sm text-dark">{t("theProcessSubText")}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{steps.map((step, index) => (
						<div
							key={step.id}
							className="p-8 bg-white border border-gray-bg rounded-md">
							<span className="flex items-center justify-center w-8 h-8 text-dark *:w-full *:h-full mb-4">
								{step.icon}
							</span>
							<h3 className="text-lg font-bold text-dark mb-3">
								{index + 1}.{" "}
								{currentLanguage === "ar" ? step.titleAr : step.titleEn}
							</h3>
							<p className="text-sm text-muted">
								{currentLanguage === "ar"
									? step.descriptionAr
									: step.descriptionEn}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TheProcess;
