import { useTranslation } from "react-i18next";
import styles from "./WhoWeWorkWith.module.css";

const WhoWeWorkWith = ({ onClickPartner }) => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const partners = [
		{
			id: 1,
			img: "/images/khalifa-fund.svg",
			name: "Khalifa Fund",
			desc: "Supporting UAE entrepreneurs with funding and business development resources.",
			descAr:
				"دعم روّاد الأعمال في الإمارات من خلال حلول التمويل وتطوير الأعمال",
		},
		{
			id: 2,
			img: "/images/we-work.svg",
			name: "WEWORK",
			desc: "Global workspace community connecting entrepreneurs and growing businesses.",
			descAr:
				"مجتمع أعمال عالمي يربط بين روّاد الأعمال والشركات الناشئة والنامية",
		},
		{
			id: 3,
			img: "/images/ruwad.svg",
			name: "Ruwad",
			desc: "Dubai International Financial Centre the region's leading financial hub.",
			descAr: "مركز دبي المالي العالمي، المركز المالي الرائد في المنطقة",
		},
		{
			id: 4,
			img: "/images/difc.svg",
			name: "DIFC",
			desc: "Sharjah Entrepreneurship Foundation supporting the next generation of UAE businesses.",
			descAr:
				"مؤسسة الشارقة لريادة الأعمال، الداعمة للجيل القادم من الشركات الإماراتية",
		},
		{
			id: 5,
			img: "/images/eea.svg",
			name: "EEA",
			desc: "A network of UAE’s most ambitious entrepreneurs and business owners.",
			descAr:
				"شبكة تضم نخبة من أكثر روّاد الأعمال وأصحاب المشاريع طموحًا في الإمارات",
		},
	];

	return (
		<>
			<section className={`py-8 lg:py-[72px] ${styles.how_we_work_with}`}>
				<div className="container">
					<div className="mb-8 lg:mb-[72px] flex flex-col gap-3">
						<h6 className="text-sm text-dark">{t("whoWeWorkWith")}</h6>
						<h2 className="text-xl lg:text-[32px] lg:leading-normal text-dark font-bold">
							{currentLanguage === "ar"
								? "أبرز مجتمعات الأعمال تثق بنا"
								: "Trusted by the UAE's top business communities."}
						</h2>
						<p className="text-sm text-dark">
							{currentLanguage === "ar"
								? "المؤسسات التابعة لشركائنا تحصل على أسعار خاصة وأولوية في بدء الخدمة."
								: "Members of our partner organizations get exclusive pricing and priority onboarding. Select your partner below to see your rate."}
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-4 lg:gap-6">
						{partners.map((partner) => (
							<div
								key={partner.id}
								className={styles.partner_card}
								onClick={() => onClickPartner(partner.name)}>
								<img src={partner.img} alt={partner.name} />
								<h3>{partner.name}</h3>
								<p>
									{currentLanguage === "ar" ? partner.descAr : partner.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WhoWeWorkWith;
