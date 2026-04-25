const ComplianceGuaranteed = () => {
	const features = [
		{
			id: 1,
			title: "Tax Accountant",
			description:
				"Ensures full FTA compliance and accuracy on every transaction before anything is recorded.",
		},
		{
			id: 2,
			title: "Accountant",
			description:
				"Categorizes and validates all transactions in line with IFRS accounting standards.",
		},
		{
			id: 3,
			title: "Reconciler",
			description:
				"Matches every invoice against your bank records to ensure full consistency.",
		},
		{
			id: 4,
			title: "Senior Reviewer",
			description:
				"Cross-checks all entries and flags any discrepancy before reports are finalized.",
		},
		{
			id: 5,
			title: "Tax Agent",
			description:
				"Reviews all filings in full before FTA submission nothing goes through unverified.",
		},
		{
			id: 6,
			title: "Quality Manager",
			description:
				"Final sign-off. Only after this approval is everything submitted to the FTA on your behalf.",
		},
	];

	return (
		<section className="py-8 lg:py-[100px] bg-dark">
			<div className="container">
				<div className="mb-8 lg:mb-[50px] lg:w-[776px] max-w-full mx-auto flex flex-col gap-3">
					<h6 className="text-sm text-primary uppercase text-center">
						100% COMPLIANCE GUARANTEED
					</h6>
					<h2 className="text-2xl lg:text-[32px] leading-relaxed font-bold text-white text-center">
						6 experts check your work before anything reaches the FTA.
					</h2>
					<p className="text-sm text-light text-center">
						Most accounting software runs algorithms. We run people. Every
						transaction is reviewed by a team of certified professionals not a
						single one goes through unchecked.
					</p>
				</div>
				<div className="p-6 bg-primary-bg border border-gray-bg rounded-[4px] flex items-center justify-center gap-4 mb-8 lg:mb-[50px]">
					<h4 className="text-2xl lg:text-4xl font-bold text-primary">100%</h4>
					<p className="text-lg font-bold text-dark">
						We pay any fines if we make an error
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
								{feature.title}
							</h5>
							<p className="text-sm text-light">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ComplianceGuaranteed;
