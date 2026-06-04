import styles from "./OfficialPartners.module.css";
import { useTranslation } from "react-i18next";

const OfficialPartners = ({ isFlexCol }) => {
	const { t } = useTranslation();

	const partners = [
		{
			id: 1,
			img: "/images/khalifa-fund.svg",
			name: "Khalifa Fund",
		},
		{
			id: 2,
			img: "/images/difc.svg",
			name: "DIFC",
		},
		{
			id: 3,
			img: "/images/we-work.svg",
			name: "WEWORK",
		},
		{
			id: 4,
			img: "/images/ruwad.svg",
			name: "Ruwad",
		},
		{
			id: 5,
			img: "/images/eea.svg",
			name: "EEA",
		},
	];

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
							<div key={partner.id} className={styles.partner_card}>
								<img src={partner.img} alt={partner.name} />
								<h3>{partner.name}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default OfficialPartners;
