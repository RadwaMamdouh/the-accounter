import { check } from "icons/index";
import styles from "./GetStartedToday.module.css";
import LeaveMessageForm from "components/LeaveMessageForm/LeaveMessageForm";
import { Trans, useTranslation } from "react-i18next";

const GetStartedToday = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="pb-28" id="getStartedToday">
			<div className={styles.started_head}>
				<div className="container">
					<h2 className="text-xl lg:text-4xl font-bold text-dark">
						<Trans
							i18nKey="getStartedWithTheAccounterToday"
							components={{ br: <br /> }}
						/>
					</h2>
				</div>
			</div>
			<div className={styles.started_body}>
				<div className="container">
					<div className="flex items-start justify-between gap-6 lg:gap-[100px] max-lg:flex-col">
						<div className="pt-6 lg:pt-10 w-full">
							<p className="text-sm text-dark mb-8">
								{currentLanguage === "ar"
									? "قد يكون هذا أذكى قرار تجاري تتخذه هذا العام."
									: "This can be the smartest business decision you'll make this year."}
							</p>
							<ul className="flex flex-col gap-2">
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "وفر أكثر من 15 ساعة شهرياً وركز على تنمية عملك. نحن نتولى كل المحاسبة والضرائب."
											: "Save 15+ hours monthly and focus on growing your business. We handle all Accounting & taxes."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "وفر حتى 15,000 درهم سنوياً مقارنة بالمحاسبة التقليدية."
											: "Save up to 15,000 AED yearly vs. traditional accounting."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "ابق ملتزماً بنسبة 100% مع الهيئة الاتحادية للضرائب. نضمن صفر غرامات."
											: "Stay 100% FTA compliant. We guarantee zero penalties."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "تقديم ضريبة القيمة المضافة وضريبة الشركات مجاناً."
											: "FREE VAT & Corporate Tax filing included."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "برنامج الفوترة ومطابقة الحسابات البنكية مجاناً."
											: "FREE invoicing software & bank reconciliation included."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "لوحة تحكم على الجوال في الوقت الفعلي مع وصول على مدار الساعة."
											: "Real-time mobile dashboard with 24/7 access."}
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										{currentLanguage === "ar"
											? "مرونة كاملة - ألغِ في أي وقت. لا عقود طويلة المدى."
											: "Cancel anytime. No long-term contracts."}
									</span>
								</li>
							</ul>
						</div>
						<LeaveMessageForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStartedToday;
