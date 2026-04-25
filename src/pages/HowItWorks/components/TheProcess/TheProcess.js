import { chart, refresh, upload } from "icons/index";
import styles from "./TheProcess.module.css";

const TheProcess = () => {
	const steps = [
		{
			id: 1,
			icon: upload,
			title: "Upload Your Invoices",
			description:
				"Snap a photo or upload your invoices directly from your phone or desktop. Takes less than 30 seconds.",
		},
		{
			id: 2,
			icon: refresh,
			title: "We Process Everything",
			description:
				"Every transaction goes through our 6-layer expert validation not just software. Real accountants review your books.",
		},
		{
			id: 3,
			icon: chart,
			title: "You Get Results",
			description:
				"Your filings are submitted, your reports are ready, and your dashboard is updated all without you lifting a finger.",
		},
	];

	return (
		<section className={`py-8 lg:py-[72px] ${styles.the_process}`}>
			<div className="container">
				<div className="mb-8 lg:mb-[72px] flex flex-col gap-3">
					<h6 className="text-sm text-dark">THE PROCESS</h6>
					<h2 className="text-2xl lg:text-[32px] font-bold text-dark">
						Three steps. Zero stress.
					</h2>
					<p className="text-sm text-dark">
						From invoice upload to FTA submission everything is handled by our
						team. You stay focused on your business.
					</p>
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
								{index + 1}. {step.title}
							</h3>
							<p className="text-sm text-muted">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TheProcess;
