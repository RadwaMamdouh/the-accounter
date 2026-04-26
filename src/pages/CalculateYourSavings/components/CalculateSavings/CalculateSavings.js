import Page from "components/Page/Page";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { Slider } from "primereact/slider";
import { arrow_right, check } from "icons/index";
import { SelectButton } from "primereact/selectbutton";
import styles from "./CalculateSavings.module.css";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";

const CalculateSavings = () => {
	const [showResults, setShowResults] = useState(false);

	const businessTypes = [
		{ name: "LLC", value: "LLC" },
		{ name: "Sole Establishment", value: "Sole Establishment" },
	];

	const POSOptions = [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	];

	const accountsSetup = [
		{ name: "Traditional firm", value: "Traditional firm" },
		{ name: "Freelancer", value: "Freelancer" },
		{ name: "Doing it myself", value: "Doing it myself" },
		{ name: "Software only", value: "Software only" },
	];

	const formik = useFormik({
		initialValues: {
			businessType: "",
			usePOS: "",
			transaction: 0,
			accountSetup: "",
			accountingPay: "",
		},
		onSubmit: (values) => {
			console.log(values);
			setShowResults(true);
		},
	});

	const { setFieldValue } = formik;

	return (
		<Page title="Calculate Your Savings">
			<section className="py-8 lg:py-[72px]">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
						<div className="p-4 lg:p-8 bg-white border border-border-light rounded-lg">
							<div className="mb-6">
								<h4 className="text-sm lg:text-base font-bold text-dark mb-[2px] lg:mb-1">
									Calculate Your Savings
								</h4>
								<p className="text-sm text-muted">Calculate Your Savings</p>
							</div>
							<form
								onSubmit={formik.handleSubmit}
								className="grid grid-cols-1 gap-5">
								<div className="input_holder">
									<h6>What’s your Business Type?</h6>
									<SelectButton
										value={formik.values.businessType}
										onChange={(e) =>
											formik.setFieldValue("businessType", e.value)
										}
										options={businessTypes}
										optionLabel="name"
										allowEmpty={false}
										className={styles.select_btn}
									/>
								</div>
								<div className="input_holder">
									<div>
										<h5 className="text-sm font-medium text-dark mb-0.5">
											Do you use a POS system?
										</h5>
										<p className="text-sm text-muted">
											Monthly Transactions / Documents?
										</p>
									</div>
									<SelectButton
										value={formik.values.usePOS}
										onChange={(e) => formik.setFieldValue("usePOS", e.value)}
										options={POSOptions}
										optionLabel="name"
										allowEmpty={false}
										className={styles.select_btn}
									/>
								</div>
								<div>
									<h5 className="text-sm text-dark mb-5">
										Monthly Transactions / Documents?
									</h5>
									<div dir="ltr" className="flex items-center gap-2 mt-[52px]">
										<span className="text-xs text-muted font-medium">0</span>
										<div className="relative grow mx-3">
											{/* Tooltip */}
											<div
												className="absolute -top-10 -translate-x-[25%] px-2 py-1 text-xs font-medium bg-dark text-white rounded-md"
												style={{
													left: `${(formik.values.transaction / 500) * 100}%`,
													transition: "left 0.1s linear",
												}}>
												{formik.values.transaction}
											</div>
											<Slider
												value={formik.values.transaction}
												onChange={(e) => setFieldValue("transaction", e.value)}
												min={0}
												max={500}
											/>
										</div>
										<span className="text-xs text-muted font-medium">+500</span>
									</div>
								</div>
								<div className="input_holder">
									<h6>Current Accounting Setup?</h6>
									<div className="flex flex-col gap-1">
										{accountsSetup.map((option, index) => (
											<label key={index} className={styles.radio_btn}>
												<RadioButton
													name="accountSetup"
													value={option.value}
													onChange={(e) =>
														formik.setFieldValue("accountSetup", e.value)
													}
													checked={formik.values.accountSetup === option.value}
												/>
												<p className="text-sm text-dark">{option.name}</p>
											</label>
										))}
									</div>
								</div>
								<hr className="border-border-light" />
								<div className="input_holder">
									<h6>
										How much do you currently pay for accounting per month?
									</h6>
									<div className="relative overflow-hidden rounded-md">
										<InputText
											type="text"
											value={formik.values.accountingPay}
											onChange={formik.handleChange}
											placeholder="1500"
											name="accountingPay"
										/>
										<p className="bg-ghost-white border border-border-light rounded-se-md rounded-ee-md py-[11px] px-2 absolute top-0 ltr:right-0 rtl:left-0 h-full z-[1] text-xs font-bold text-dark flex items-center justify-center">
											AED
										</p>
									</div>
								</div>

								<PrimaryButton
									isBtn
									type="submit"
									label="Calculate My Savings"
									classes="w-fit"
									icon={arrow_right}
									rotateIcon
								/>
							</form>
						</div>
						{showResults ? (
							<div className="bg-white border border-border-light rounded-lg overflow-hidden">
								<div className="p-6 bg-dark flex flex-col gap-[7px]">
									<h6 className="text-sm text-light">You'll save</h6>
									<h3 className="text-2xl font-bold text-white">11,700 AED</h3>
									<p className="text-sm text-light">Per year</p>
									<div className="flex items-center justify-center w-fit py-1 px-2 bg-primary-bg border border-primary-soft rounded-md text-xs font-medium text-dark">
										65% less than your current setup
									</div>
								</div>
								<div className="p-4 lg:p-8 flex flex-col gap-6">
									<div className="flex items-center justify-center py-1 px-2 bg-primary-bg border border-primary-soft rounded-md text-xs font-medium text-dark w-fit">
										✦ Growth Plan 525 AED/month
									</div>
									{/* Your Current Cost: */}
									<div className="p-3 border border-border-light rounded-lg">
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">
												Your current annual cost
											</h5>
											<h4 className="text-sm text-dark line-through">
												18,000 AED/year
											</h4>
										</div>
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">With The Accounter</h5>
											<h4 className="text-sm text-primary font-bold">
												6,300 AED/year
											</h4>
										</div>
									</div>
									{/* EVERYTHING INCLUDED IN YOUR PLAN  */}
									<div>
										<h3 className="max-lg:textsm font-bold text-dark mb-6">
											EVERYTHING INCLUDED IN YOUR PLAN
										</h3>
										<ul className="flex flex-col gap-2">
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Complete Bookkeeping
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													VAT Preparation & Filing
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Corporate Tax Preparation & Filing
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Monthly Financial Reports
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													6-Layer Expert Validation
												</span>
											</li>
										</ul>
									</div>
									{/* PLUS You Get FREE  (Worth 8,330 AED/year)  */}
									<div className="p-3 bg-orange-bg border border-orange-light rounded-lg">
										<h3 className="text-sm font-bold text-orange-dark mb-4">
											🎁 PLUS you get FREE (worth 8,330 AED/year)
										</h3>
										<ul>
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													Invoicing Software
												</span>
												<span className="text-sm font-medium text-dark">
													1,380 AED
												</span>
											</li>
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													VAT Filing 4x/year
												</span>
												<span className="text-sm font-medium text-dark">
													1,200 AED
												</span>
											</li>
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													Corporate Tax Filing
												</span>
												<span className="text-sm font-medium text-dark">
													1,250 AED
												</span>
											</li>
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													Bank Reconciliation
												</span>
												<span className="text-sm font-medium text-dark">
													3,600 AED
												</span>
											</li>
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													Mobile Dashboard
												</span>
												<span className="text-sm font-medium text-dark">
													900 AED
												</span>
											</li>
											<hr className="border-orange-soft mt-3 mb-4" />
											<li className="flex items-center justify-between gap-2 py-1">
												<span className="text-sm text-muted">
													Total Free Value
												</span>
												<span className="text-sm font-bold text-dark">
													8,330 AED/year
												</span>
											</li>
										</ul>
									</div>
									<PrimaryButton
										label="Get Started From 250 AED/month"
										classes="!leading-6"
									/>
								</div>
							</div>
						) : (
							<div className="bg-white border border-border-light rounded-lg overflow-hidden flex flex-col items-center justify-center p-6">
								<img
									src="/images/empty.svg"
									alt="Empty"
									className="w-[162px] mx-auto max-w-full mb-4"
								/>
								<h4 className="text-sm lg:text-base font-bold text-dark text-center mb-1">
									Your savings will appear here
								</h4>
								<p className="text-xs lg:text-sm text-muted text-center">
									Fill in the form and click "Calculate My Savings" to see your
									personalized breakdown.
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</Page>
	);
};

export default CalculateSavings;
