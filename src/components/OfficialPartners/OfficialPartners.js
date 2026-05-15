import RegistrationRequestModal from "components/RegistrationRequestModal/RegistrationRequestModal";
import styles from "./OfficialPartners.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OfficialPartners = ({ isFlexCol }) => {
	const [visible, setVisible] = useState(false);
	const [clickedPartner, setClickedPartner] = useState(null);
	const { t, i18n } = useTranslation();
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
			img: "/images/difc.svg",
			name: "DIFC",
			desc: "Dubai International Financial Centre the region's leading financial hub.",
			descAr: "مركز دبي المالي العالمي، المركز المالي الرائد في المنطقة",
		},
		{
			id: 3,
			img: "/images/we-work.svg",
			name: "WEWORK",
			desc: "Global workspace community connecting entrepreneurs and growing businesses.",
			descAr:
				"مجتمع أعمال عالمي يربط بين روّاد الأعمال والشركات الناشئة والنامية",
		},
		{
			id: 4,
			img: "/images/ruwad.svg",
			name: "Ruwad",
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

	const onShow = (partner) => {
		setVisible(true);
		setClickedPartner(partner);
	};

	const onHide = () => {
		setVisible(false);
	};

	return (
		<>
			<section className="py-8 lg:py-[72px]">
				<div className="container">
					<h2 className="mb-8 lg:mb-[50px] text-xl lg:text-[32px] lg:leading-normal text-dark font-bold text-center">
						{t("officialPartnersOfUaeLeadingOrganizations")}
					</h2>
					<div
						className={`gap-4 lg:gap-6 ${!isFlexCol ? "flex overflow-y-auto no-scrollbar" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}`}>
						{partners.map((partner) => (
							<div
								key={partner.id}
								className={styles.partner_card}
								onClick={() => onShow(partner.name)}>
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

			{/* Registration Request Modal */}
			<RegistrationRequestModal
				visible={visible}
				onHide={onHide}
				clickedPartner={clickedPartner}
			/>
		</>
	);
};

export default OfficialPartners;
