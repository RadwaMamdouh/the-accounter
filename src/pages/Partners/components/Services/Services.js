import { flash, money, phone, shield_check } from "icons/index";

const Services = () => {
	const services = [
		{
			id: 1,
			icon: money,
			title: "Exclusive Partner Pricing",
			description: "Special discounted rates for all verified partner members",
		},
		{
			id: 2,
			icon: flash,
			title: "Priority Onboarding",
			description: "Dedicated setup get started within 24 hours",
		},
		{
			id: 3,
			icon: shield_check,
			title: "100% FTA Compliant",
			description: "We pay any fines if we make an error",
		},
		{
			id: 4,
			icon: phone,
			title: "100% Digital",
			description: "No office visits. Upload invoices, we handle everything",
		},
	];

	return (
		<section className="py-8 lg:py-[100px] bg-dark">
			<div className="container">
				<div className="flex gap-6 max-lg:flex-wrap">
					{services.map((service) => (
						<div
							key={service.id}
							className="flex flex-col items-center w-[249px] max-w-full lg:pe-6 lg:border-e border-dark-light grow last:pe-0 last:border-e-0">
							<span className="w-8 h-8 flex items-center justify-center text-white *:w-full *:h-full mb-4">
								{service.icon}
							</span>
							<h4 className="text-lg font-bold text-white text-center mb-3">
								{service.title}
							</h4>
							<p className="text-sm text-light text-center">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
