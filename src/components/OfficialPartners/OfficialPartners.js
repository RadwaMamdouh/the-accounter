import RegistrationRequestModal from "components/RegistrationRequestModal/RegistrationRequestModal";
import styles from "./OfficialPartners.module.css";
import { useState } from "react";

const OfficialPartners = ({ isFlexCol }) => {
	const [visible, setVisible] = useState(false);
	const [clickedPartner, setClickedPartner] = useState(null);

	const partners = [
		{
			id: 1,
			img: "/images/khalifa-fund.svg",
			name: "Khalifa Fund",
			desc: "This is a description.",
		},
		{
			id: 2,
			img: "/images/difc.svg",
			name: "DIFC",
			desc: "This is a description.",
		},
		{
			id: 3,
			img: "/images/we-work.svg",
			name: "WEWORK",
			desc: "This is a description.",
		},
		{
			id: 4,
			img: "/images/ruwad.svg",
			name: "Ruwad",
			desc: "This is a description.",
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
						Official Partners of UAE's Leading Organizations
					</h2>
					<div
						className={`flex lg:justify-center gap-4 lg:gap-6 ${!isFlexCol ? "overflow-y-auto no-scrollbar" : "flex-wrap max-lg:flex-col"}`}>
						{partners.map((partner) => (
							<div
								key={partner.id}
								className={styles.partner_card}
								onClick={() => onShow(partner.name)}>
								<img src={partner.img} alt={partner.name} />
								<h3>{partner.name}</h3>
								<p>{partner.desc}</p>
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
