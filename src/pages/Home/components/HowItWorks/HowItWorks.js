import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
	return (
		<section className="py-8 lg:py-[72px]">
			<div className="container">
				<div className="mb-8 lg:mb-[72px]">
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold text-center mb-3">
						How it works?
					</h2>
					<p className="text-sm text-dark text-center">
						Upload your invoices. We do the rest. It's that simple.
					</p>
				</div>
				<div className="flex flex-col gap-8 lg:gap-[72px]">
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>STEP 1</div>
							<h4>Upload or Create Your Invoices</h4>
							<p>
								Snap a photo of invoices via our mobile app. Don't have an
								invoice yet? We've got your back! You can create unlimited
								professional, branded invoices completely FREE using our
								invoicing feature.
							</p>
						</div>
						<img src="/images/how-works-1.svg" alt="Step 1" />
					</div>
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>STEP 2</div>
							<h4>We Process Everything</h4>
							<p>
								Every transaction is reviewed by 6 experts — not algorithms.
							</p>
							<ol>
								<li>
									Tax Accountant: Ensures full FTA compliance and accuracy.
								</li>
								<li>
									Accountant: Categorizes and validates transactions in line
									with IFRS standards.
								</li>
								<li>
									Reconciler: Matches every invoice with your bank records for
									consistency.
								</li>
							</ol>
							<p>
								And that’s just the start — we add 3 more layers of quality
								review to eliminate any errors before FTA submission.
							</p>
						</div>
						<img src="/images/how-works-2.svg" alt="Step 2" />
					</div>
					<div className={styles.how_works_row}>
						<div className={styles.info}>
							<div className={styles.step}>STEP 3</div>
							<h4>Track Your Finances</h4>
							<p>
								Your reports are ready and all filings submitted to the FTA.
								View your profits, cash flow, and expenses in real time through
								your dashboard updated 24/7.
							</p>
						</div>
						<img src="/images/how-works-3.svg" alt="Step 3" />
					</div>
					<PrimaryButton label="Get Started Today!" classes="w-fit mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
