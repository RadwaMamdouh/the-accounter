import styles from "./OfficialPartners.module.css";

const OfficialPartners = () => {
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

	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container mx-auto px-4">
				<h2 className="mb-8 lg:mb-[50px] text-xl lg:text-[32px] text-dark font-bold text-center">
					Official Partners of UAE's Leading Organizations
				</h2>
				<div className="flex lg:justify-center gap-6 overflow-y-auto no-scrollbar">
					{partners.map((partner) => (
						<div key={partner.id} className={styles.partner_card}>
							<img src={partner.img} alt={partner.name} />
							<h3>{partner.name}</h3>
							<p>{partner.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OfficialPartners;
