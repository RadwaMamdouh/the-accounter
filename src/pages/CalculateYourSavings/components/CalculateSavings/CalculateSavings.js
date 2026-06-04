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
import { useTranslation } from "react-i18next";

// ─── Calculation constants (from spec) ───────────────────────────────────────

const PLANS = [
	{ name: "starter", monthly: 250, annual: 3000, maxDocs: 50 },
	{ name: "growth", monthly: 525, annual: 6300, maxDocs: 150 },
	{ name: "scale", monthly: 975, annual: 11700, maxDocs: 300 },
];

const DEFAULT_MONTHLY_SPEND = {
	"Traditional firm": 2000,
	Freelancer: 900,
	"Doing it myself": 0,
	"Software only": 115,
};

const FREE_VALUE_ITEMS = [
	{ label: "Invoicing Software", labelAr: "نظام الفوترة", value: 1380 },
	{
		label: "VAT Filing 4x/year",
		labelAr: "تقديم إقرارات ضريبة القيمة المضافة (4 مرات سنويًا)",
		value: 1200,
	},
	{
		label: "Corporate Tax Filing",
		labelAr: "إعداد وتقديم إقرار ضريبة الشركات",
		value: 1250,
	},
	{ label: "Bank Reconciliation", labelAr: "التسويات البنكية", value: 3600 },
	{
		label: "Mobile Dashboard",
		labelAr: "لوحة تحكم مالية عبر الجوال",
		value: 900,
	},
];

// const FREE_VALUE_TOTAL = 8330;
// Dynamic total (instead of hardcoded 8330)
const FREE_VALUE_TOTAL = FREE_VALUE_ITEMS.reduce(
	(sum, item) => sum + item.value,
	0,
);

const SAVING_PCT_CAP = 87;

const INCLUDED_SERVICES = [
	"completeBookkeeping",
	"VATPreparationFiling",
	"corporateTaxPreparationFiling",
	"monthlyFinancialReports",
	"layerExpertValidation",
];

// ─── Helper functions ─────────────────────────────────────────────────────────

/**
 * Returns the recommended plan object based on POS usage and monthly doc count.
 */
function getRecommendedPlan(usePOS, transactions) {
	if (usePOS === "Yes") return PLANS[0]; // Always Starter for POS users
	const docs = Number(transactions) || 0;
	if (docs <= 50) return PLANS[0];
	if (docs <= 150) return PLANS[1];
	return PLANS[2];
}

/**
 * Returns the effective monthly spend:
 * - Uses user-entered value if provided
 * - Falls back to setup-based default
 */
function getEffectiveMonthlySpend(accountingPay, accountSetup) {
	const entered = parseFloat(accountingPay);

	// Safer numeric check
	if (!isNaN(entered) && accountingPay !== "") return entered;
	return DEFAULT_MONTHLY_SPEND[accountSetup] ?? 0;
}

/**
 * Runs the full savings calculation and returns a result object.
 */
function calculateResults(values) {
	const plan = getRecommendedPlan(values.usePOS, values.transaction);
	const monthlySpend = getEffectiveMonthlySpend(
		values.accountingPay,
		values.accountSetup,
	);
	const currentAnnual = monthlySpend * 12;
	const annualSaving = currentAnnual - plan.annual;
	// const isEdgeCase = annualSaving <= 0;

	// Explicit spec rule for "Doing it myself"
	const isEdgeCase =
		values.accountSetup === "Doing it myself" || annualSaving <= 0;

	let savingPct = 0;

	if (!isEdgeCase && currentAnnual > 0) {
		savingPct = Math.min(
			SAVING_PCT_CAP,
			Math.round((annualSaving / currentAnnual) * 100),
		);
	}

	return {
		plan,
		currentAnnual,
		annualSaving,
		savingPct,
		isEdgeCase,
		isPOS: values.usePOS === "Yes",
	};
}

const CalculateSavings = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const [showResults, setShowResults] = useState(false);
	const [results, setResults] = useState(null);

	const businessTypes = [
		{ name: "LLC", value: "LLC" },
		{ name: "Sole Establishment", value: "Sole Establishment" },
	];

	const POSOptions = [
		{ name: "Yes", value: "Yes" },
		{ name: "No", value: "No" },
	];

	const accountsSetup = [
		{
			name: "Traditional firm",
			nameAr: "مكتب محاسبة تقليدي",
			value: "Traditional firm",
		},
		{ name: "Freelancer", nameAr: "محاسب مستقل", value: "Freelancer" },
		{
			name: "Doing it myself",
			nameAr: "أدير المحاسبة بنفسي",
			value: "Doing it myself",
		},
		{
			name: "Software only",
			nameAr: "برنامج محاسبي فقط",
			value: "Software only",
		},
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
			const calc = calculateResults(values);
			setResults(calc);
			setShowResults(true);
		},
	});

	const { setFieldValue } = formik;

	// ── Helpers ──────────────────────────────────────────────────────────────

	/** Format a number as AED with thousand separators */
	// const fmtAED = (n) => Math.round(n).toLocaleString("en-AE") + " AED";
	const fmtAED = (n) =>
		new Intl.NumberFormat("en-AE", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(n) + ` ${t("AED")}`;

	return (
		<Page title="Calculate Your Savings">
			<section className="py-8 lg:py-[72px]">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
						{/* ── Left: Form ────────────────────────────────────────── */}
						<div className="p-4 lg:p-8 bg-white border border-border-light rounded-lg">
							<div className="mb-6">
								<h4 className="text-sm lg:text-base font-bold text-dark mb-[2px] lg:mb-1">
									{t("calculateYourSavings")}
								</h4>
								<p className="text-sm text-muted">
									{t("calculateYourSavings")}
								</p>
							</div>
							<form
								onSubmit={formik.handleSubmit}
								className="grid grid-cols-1 gap-5">
								{/* Business Type */}
								<div className="input_holder">
									<h6>
										{currentLanguage === "ar"
											? "ما نوع نشاطك التجاري؟"
											: "What’s your Business Type?"}
									</h6>
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

								{/* POS */}
								<div className="input_holder">
									<div>
										<h5 className="text-sm font-medium text-dark mb-0.5">
											{currentLanguage === "ar"
												? "هل تستخدم نظام نقاط بيع (POS)؟"
												: "Do you use a POS system?"}
										</h5>
										{/* <p className="text-sm text-muted">
											{currentLanguage === "ar"
												? "كم عدد العمليات أو المستندات الشهرية؟"
												: "Monthly Transactions / Documents?"}
										</p> */}
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

								{/* Slider — hidden when POS = Yes (spec §3.1) */}
								{formik.values.usePOS !== "Yes" && (
									<div>
										<h5 className="text-sm text-dark mb-5">
											{currentLanguage === "ar"
												? "كم عدد العمليات أو المستندات الشهرية؟"
												: "Monthly Transactions / Documents?"}
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
														left: `${(formik.values.transaction / 300) * 100}%`,
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
													max={300}
												/>
											</div>
											<span className="text-xs text-muted font-medium">
												+300
											</span>
										</div>
									</div>
								)}

								{/* Accounting Setup */}
								<div className="input_holder">
									<h6>
										{currentLanguage === "ar"
											? "ما نظامك المحاسبي الحالي؟"
											: "Current Accounting Setup?"}
									</h6>
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
												<p className="text-sm text-dark">
													{currentLanguage === "ar"
														? option.nameAr
														: option.name}
												</p>
											</label>
										))}
									</div>
								</div>

								<hr className="border-border-light" />

								{/* Monthly Spend */}
								<div className="input_holder">
									<h6>
										{currentLanguage === "ar"
											? "كم تدفع حاليًا مقابل المحاسبة شهريًا؟"
											: "How much do you currently pay for accounting per month?"}
									</h6>
									<div className="relative overflow-hidden rounded-md">
										<InputText
											type="text"
											value={formik.values.accountingPay}
											onChange={formik.handleChange}
											placeholder={
												formik.values.accountSetup
													? String(
															DEFAULT_MONTHLY_SPEND[
																formik.values.accountSetup
															] ?? "1500",
														)
													: "1500"
											}
											name="accountingPay"
										/>
										<p className="bg-ghost-white border border-border-light rounded-se-md rounded-ee-md py-[11px] px-2 absolute top-0 ltr:right-0 rtl:left-0 h-full z-[1] text-xs font-bold text-dark flex items-center justify-center">
											{t("AED")}
										</p>
									</div>
								</div>

								<PrimaryButton
									isBtn
									type="submit"
									label={
										currentLanguage === "ar"
											? "احسب كم وفّرت"
											: "Calculate My Savings"
									}
									classes="w-fit"
									icon={arrow_right}
									rotateIcon
								/>
							</form>
						</div>

						{/* ── Right: Results ────────────────────────────────────── */}
						{showResults && results ? (
							// ─── Results Panel ────────────────────────────────────────────────────────────
							<ResultsPanel results={results} fmtAED={fmtAED} />
						) : (
							<div className="bg-white border border-border-light rounded-lg overflow-hidden flex flex-col items-center justify-center p-6">
								<img
									src="/images/empty.svg"
									alt="Empty"
									className="w-[162px] mx-auto max-w-full mb-4"
								/>
								<h4 className="text-sm lg:text-base font-bold text-dark text-center mb-1">
									{currentLanguage === "ar"
										? "ستظهر مدخراتك هنا"
										: "Your savings will appear here"}
								</h4>
								<p className="text-xs lg:text-sm text-muted text-center">
									{currentLanguage === "ar"
										? 'املأ النموذج وانقر على "حساب مدخراتي" للاطلاع على تفاصيل مدخراتك الشخصية.'
										: 'Fill in the form and click "Calculate My Savings" to see your personalized breakdown.'}
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</Page>
	);
};

const ResultsPanel = ({ results, fmtAED }) => {
	const { plan, currentAnnual, annualSaving, savingPct, isEdgeCase, isPOS } =
		results;

	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<div className="bg-white border border-border-light rounded-lg overflow-hidden">
			{/* Hero */}
			<div className="p-6 bg-dark flex flex-col gap-[7px]">
				{isEdgeCase ? (
					<>
						<h6 className="text-sm text-light">
							{currentLanguage === "ar" ? "وفّر ما يصل إلى" : "You'll save"}
						</h6>
						<h3 className="text-2xl font-bold text-white">
							{fmtAED(FREE_VALUE_TOTAL)}
						</h3>
						<p className="text-sm text-light">
							{currentLanguage === "ar"
								? "من الخدمات التي لا تحصل عليها حاليًا"
								: "In services you don't have yet"}
						</p>
						<div className="flex items-center justify-center w-fit py-1 px-2 bg-primary-bg border border-primary-soft rounded-md text-xs font-medium text-dark">
							{currentLanguage === "ar"
								? "من الخدمات التي لا تحصل عليها حاليًا"
								: "in services you currently don't have"}
						</div>
					</>
				) : (
					<>
						<h6 className="text-sm text-light">
							{currentLanguage === "ar" ? "وفّر ما يصل إلى" : "You'll save"}
						</h6>
						<h3 className="text-2xl font-bold text-white">
							{fmtAED(annualSaving)}
						</h3>
						<p className="text-sm text-light">Per year</p>
						<div className="flex items-center justify-center w-fit py-1 px-2 bg-primary-bg border border-primary-soft rounded-md text-xs font-medium text-dark">
							{savingPct}% less than your current setup
						</div>
					</>
				)}
			</div>
			<div className="p-4 lg:p-8 flex flex-col gap-6">
				{/* Plan pill */}
				<div className="flex items-center justify-center py-1 px-2 bg-primary-bg border border-primary-soft rounded-md text-xs font-medium text-dark w-fit">
					✦{" "}
					{currentLanguage === "ar"
						? `${t("plan")} ${t(plan.name)}`
						: `${t(plan.name)} ${t("plan")}`}{" "}
					{plan.monthly} {t("AED")}/{t("month")}
				</div>

				{/* POS note (spec §3.1 / §6.2) */}
				{isPOS && (
					<p className="text-xs text-muted bg-ghost-white border border-border-light rounded-md p-3">
						{currentLanguage === "ar"
							? "يمكن تجميع عمليات نقاط البيع (POS) ضمن مستند موحّد بحيث يتم احتساب الباقة بناءً على عدد المستندات المجمّعة، وليس على كل عملية بيع بشكل منفصل، وسيقوم فريقنا بتحديد الإعداد الأنسب لنشاطك خلال مرحلة التهيئة."
							: "POS transactions can be consolidated — your plan will be based on your consolidated document count, not individual transactions. Our team will confirm during onboarding."}
					</p>
				)}

				{/* Edge-case value framing (spec §6.1) */}
				{isEdgeCase && (
					<p className="text-sm text-muted">
						{currentLanguage === "ar"
							? "أنت تنفق حاليًا"
							: "You currently spend"}{" "}
						<span className="font-medium text-dark">
							{fmtAED(currentAnnual)}/{t("year")}
						</span>{" "}
						{currentLanguage === "ar" ? "لكنك تفقد" : "but are missing"}{" "}
						<span className="font-medium text-dark">
							{fmtAED(FREE_VALUE_TOTAL)}
						</span>{" "}
						{currentLanguage === "ar"
							? 'خدمات بقيمة عالية. مع "The Accounter"، ستحصل على كل شيء - مسك الدفاتر، وضريبة القيمة المضافة، وضريبة الشركات، ومطابقة الحسابات البنكية، وإصدار الفواتير، والمزيد - مقابل مبلغ زهيد.'
							: "worth of services. With The Accounter, you get everything — bookkeeping, VAT, Corporate Tax, bank reconciliation, invoicing, and more — for just"}{" "}
						<span className="font-medium text-dark">
							{fmtAED(plan.annual)}/{t("year")}
						</span>
						.
					</p>
				)}

				{/* Your Current Cost: */}
				{/* Cost comparison */}
				<div className="p-3 border border-border-light rounded-lg">
					<div className="flex items-center justify-between gap-2 py-1">
						<h5 className="text-sm text-muted">{t("yourCurrentAnnualCost")}</h5>
						<h4 className="text-sm text-dark line-through">
							{fmtAED(currentAnnual)}/{t("year")}
						</h4>
					</div>
					<div className="flex items-center justify-between gap-2 py-1">
						<h5 className="text-sm text-muted">{t("withTheAccounter")}</h5>
						<h4 className="text-sm text-primary font-bold">
							{fmtAED(plan.annual)}/{t("year")}
						</h4>
					</div>
				</div>

				{/* EVERYTHING INCLUDED IN YOUR PLAN  */}
				{/* Included services */}
				<div>
					<h3 className="max-lg:textsm font-bold text-dark mb-6">
						{currentLanguage === "ar"
							? "باقتك تشمل كل الخدمات"
							: "EVERYTHING INCLUDED IN YOUR PLAN"}
					</h3>
					<ul className="flex flex-col gap-2">
						{INCLUDED_SERVICES.map((service) => (
							<li
								key={service}
								className="flex items-center justify-start gap-[10px] lg:gap-2">
								<span className="shrink-0 w-6 h-6 rounded-full bg-primary-bg border border-primary-soft text-dark flex items-center justify-center p-0.5 *:w-5 *:h-5">
									{check}
								</span>
								<span className="text-sm text-dark">{t(service)}</span>
							</li>
						))}
					</ul>
				</div>

				{/* PLUS You Get FREE  (Worth 8,330 AED/year)  */}
				{/* Free value bundle */}
				<div className="p-3 bg-orange-bg border border-orange-light rounded-lg">
					<h3 className="text-sm font-bold text-orange-dark mb-4">
						🎁 {t("plusYouGetFree")} ({t("worth")} {fmtAED(FREE_VALUE_TOTAL)}/
						{t("year")})
					</h3>
					<ul>
						{FREE_VALUE_ITEMS.map((item, index) => (
							<li
								key={index}
								className="flex items-center justify-between gap-2 py-1">
								<span className="text-sm text-muted">
									{currentLanguage === "ar" ? item.labelAr : item.label}
								</span>
								<span className="text-sm font-medium text-dark">
									{fmtAED(item.value)}
								</span>
							</li>
						))}
						<hr className="border-orange-soft mt-3 mb-4" />
						<li className="flex items-center justify-between gap-2 py-1">
							<span className="text-sm text-muted">{t("totalFreeValue")}</span>
							<span className="text-sm font-bold text-dark">
								{fmtAED(FREE_VALUE_TOTAL)}/{t("year")}
							</span>
						</li>
					</ul>
				</div>

				<PrimaryButton
					label={t("getStartedFrom", { price: 250 })}
					classes="!leading-6"
					to="/get-started"
				/>
			</div>
		</div>
	);
};

export default CalculateSavings;
