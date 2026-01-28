import Page from "components/Page/Page";
import styles from "./CalculateSavings.module.css";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { Dropdown } from "primereact/dropdown";
import { Slider } from "primereact/slider";
import { check } from "icons/index";

const CalculateSavings = () => {
	const businessTypes = [
		{ name: "Business Type 1", value: "Business Type 1" },
		{ name: "Business Type 2", value: "Business Type 2" },
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
			transaction: 0,
			accountSetup: "",
			accountingPay: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const { setFieldValue } = formik;

	return (
		<Page title="Calculate Your Savings">
			<section className="pb-8 lg:pb-[72px]">
				<div className={styles.head}>
					<div className="container">
						<h1 className="text-xl lg:text-4xl font-bold text-dark text-center mb-1">
							Calculate Your Savings
						</h1>
						<p className="text-sm text-muted text-center">
							Answer a few questions and see how much you'll save with The
							Accounter.
						</p>
					</div>
				</div>
				<div className="pt-6 lg:-translate-y-24">
					<div className="container">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
							<div className="p-6 lg:p-8 bg-white border border-border-light rounded-lg">
								<div className="mb-6">
									<h4 className="max-lg:text-sm font-bold text-dark mb-[2px] lg:mb-1">
										The Three Output Scenarios
									</h4>
									<p className="text-sm text-muted">
										Lorem ipsum dolor sit amet consectetur.
									</p>
								</div>
								<form
									onSubmit={formik.handleSubmit}
									className="grid grid-cols-1 gap-5">
									<div className="input_holder">
										<h6>What’s your Business Type?</h6>
										<Dropdown
											value={formik.values.businessType}
											onChange={(e) =>
												formik.setFieldValue("businessType", e.value)
											}
											options={businessTypes}
											optionLabel="name"
											placeholder="Business Type"
											className="w-full"
											panelClassName="dropdown_menu"
											name="businessType"
										/>
									</div>
									<hr className="border-border-light" />
									<div>
										<h5 className="text-sm  text-dark mb-5">
											Monthly Transactions/ Documents?
										</h5>
										<div
											dir="ltr"
											className="flex items-center gap-2 mt-[52px]">
											<span className="text-xs text-muted font-medium">0</span>
											<div className="relative grow mx-3">
												{/* Tooltip */}
												<div
													className="absolute -top-10 -translate-x-[25%] px-2 py-1 text-xs font-medium bg-dark text-white rounded-md"
													style={{
														left: `${(formik.values.transaction / 100) * 100}%`,
														transition: "left 0.1s linear",
													}}>
													{formik.values.transaction}
												</div>
												<Slider
													value={formik.values.transaction}
													onChange={(e) =>
														setFieldValue("transaction", e.value)
													}
													min={0}
													max={100}
												/>
											</div>
											<span className="text-xs text-muted font-medium">
												100
											</span>
										</div>
									</div>
									<hr className="border-border-light" />
									<div className="input_holder">
										<h6>Current Accounting Setup?</h6>
										<Dropdown
											value={formik.values.accountSetup}
											onChange={(e) =>
												formik.setFieldValue("accountSetup", e.value)
											}
											options={accountsSetup}
											optionLabel="name"
											placeholder="Business Type"
											className="w-full"
											panelClassName="dropdown_menu"
											name="accountSetup"
										/>
									</div>
									<hr className="border-border-light" />
									<div className="input_holder">
										<h6>
											How much do you currently pay for accounting per month?
										</h6>
										<InputText
											type="text"
											value={formik.values.accountingPay}
											onChange={formik.handleChange}
											placeholder="Enter your average spendings on accounting per month"
											name="accountingPay"
										/>
									</div>

									<PrimaryButton
										isBtn
										type="submit"
										label="Compare All Plans Below 👇"
										classes="w-fit"
									/>
								</form>
							</div>
							<div className="p-6 lg:p-8 bg-white border border-border-light rounded-lg">
								<div className="mb-6">
									<h4 className="max-lg:text-sm font-bold text-dark mb-[2px] lg:mb-1">
										The Three Output Scenarios
									</h4>
									<p className="text-sm text-muted">
										Lorem ipsum dolor sit amet consectetur.
									</p>
								</div>
								<div className="flex flex-col gap-6">
									<div className="p-4 lg:p-6 bg-green rounded-xl">
										<h6 className="text-sm text-white text-center mb-1">
											You’ll Save
										</h6>
										<div className="flex items-center justify-center gap-1">
											<h3 className="text-2xl font-bold text-white">100 AED</h3>
											<h5 className="text-sm text-white">/ year</h5>
										</div>
									</div>
									{/* Your Current Cost: */}
									<div className="pb-3 border-b border-border-light">
										<h3 className="max-lg:textsm font-bold text-dark mb-6">
											Your Current Cost:
										</h3>
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">Monthly</h5>
											<h4 className="text-sm text-dark font-bold">100 AED</h4>
										</div>
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">Yearly</h5>
											<h4 className="text-sm text-dark font-bold">100 AED</h4>
										</div>
									</div>
									{/* With the Accounter you Pay: */}
									<div className="pb-3 border-b border-border-light">
										<h3 className="max-lg:textsm font-bold text-dark mb-6">
											With the Accounter you Pay:
										</h3>
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">Monthly</h5>
											<h4 className="text-sm text-dark font-bold">100 AED</h4>
										</div>
										<div className="flex items-center justify-between gap-2 py-1">
											<h5 className="text-sm text-muted">Yearly</h5>
											<h4 className="text-sm text-dark font-bold">100 AED</h4>
										</div>
									</div>
									{/* That's 50% less for Everything included:  */}
									<div>
										<h3 className="max-lg:textsm font-bold text-dark mb-6">
											That's 50% less for Everything included:
										</h3>
										<ul className="flex flex-col gap-2">
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Complete Bookkeeping
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													VAT Preparation
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Corporate Tax Preparation
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Financial Reports
												</span>
											</li>
										</ul>
									</div>
									{/* PLUS You Get FREE  (Worth 8,330 AED/year)  */}
									<div>
										<h3 className="max-lg:textsm font-bold text-dark mb-6">
											🎁 PLUS You Get FREE (Worth 8,330 AED/year)
										</h3>
										<ul className="flex flex-col gap-2">
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Invoicing Software (1,380 AED)
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													VAT Filing 4x/year (1,200 AED)
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Corporate Tax Filing (1,250 AED)
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Bank Reconciliation (3,600 AED)
												</span>
											</li>
											<li className="flex items-center justify-start gap-[10px] lg:gap-2">
												<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
													{check}
												</span>
												<span className="text-sm text-dark">
													Mobile Dashboard (900 AED)
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default CalculateSavings;
