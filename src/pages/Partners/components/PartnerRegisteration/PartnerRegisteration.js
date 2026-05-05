import { bullseye, chat, chech_circle, lock } from "icons/index";
import styles from "./PartnerRegisteration.module.css";
import RegistrationRequest from "components/RegistrationRequest/RegistrationRequest";
import { useTranslation } from "react-i18next";

const PartnerRegisteration = ({ clickedPartner, onClickPartner }) => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="pb-8 lg:pb-[72px]" id="registerationRequest">
			<div className={styles.head}>
				<div className="container">
					<h6 className="text-sm text-dark mb-2.5">
						{t("partnerRegisteration")}
					</h6>
					<h2 className="text-xl lg:text-4xl font-bold text-dark lg:w-1/3 max-w-full">
						{t("sendRegistrationRequest")}
					</h2>
				</div>
			</div>
			<div className={styles.started_body}>
				<div className="container">
					<div className="flex items-start justify-between gap-6 lg:gap-[100px] max-lg:flex-col">
						<div className="pt-6 lg:pt-10 w-full flex flex-col gap-6 lg:gap-8">
							<p className="text-sm text-dark">
								{currentLanguage === "ar"
									? "هل مؤسستك تتبع أحد شركائنا؟ املأ النموذج الآن للاستفادة بأسعار خاصة وحصرية."
									: "Are you a member of one of our partner organizations? Fill in the form to unlock your exclusive rate and get started with The Accounter"}
							</p>
							<ul className="flex flex-col gap-4">
								<li className="flex items-center justify-start gap-2.5">
									<span className="shrink-0 flex items-center justify-center w-6 h-6 text-dark *:w-full *:h-full">
										{chech_circle}
									</span>
									<div className="flex flex-col gap-0.5">
										<h4 className="text-sm font-bold text-dark">
											{currentLanguage === "ar"
												? "خصم حصري بشكل فوري."
												: "Exclusive partner discount applied instantly"}
										</h4>
										<p className="text-sm text-muted">
											{currentLanguage === "ar"
												? "احصل على باقة الأسعار الخاصة بالشركاء المعتمدين."
												: "Verified members get special package pricing"}
										</p>
									</div>
								</li>
								<li className="flex items-center justify-start gap-2.5">
									<span className="shrink-0 flex items-center justify-center w-6 h-6 text-dark *:w-full *:h-full">
										{bullseye}
									</span>
									<div className="flex flex-col gap-0.5">
										<h4 className="text-sm font-bold text-dark">
											{currentLanguage === "ar"
												? "إطلاق الحساب خلال 24 ساعة."
												: "Dedicated account setup within 24 hours"}
										</h4>
										<p className="text-sm text-muted">
											{currentLanguage === "ar"
												? "فريقنا يتواصل معك للبدء في العمل مباشرةً."
												: "Our team contacts you to get everything running"}
										</p>
									</div>
								</li>
								<li className="flex items-center justify-start gap-2.5">
									<span className="shrink-0 flex items-center justify-center w-6 h-6 text-dark *:w-full *:h-full">
										{lock}
									</span>
									<div className="flex flex-col gap-0.5">
										<h4 className="text-sm font-bold text-dark">
											{currentLanguage === "ar"
												? "لا توجد التزامات خاصة."
												: "No commitment required"}
										</h4>
										<p className="text-sm text-muted">
											{currentLanguage === "ar"
												? "يمكنك إلغاء التعاقد في أي وقت."
												: "Cancel anytime no long-term contracts"}
										</p>
									</div>
								</li>
								<li className="flex items-center justify-start gap-2.5">
									<span className="shrink-0 flex items-center justify-center w-6 h-6 text-dark *:w-full *:h-full">
										{chat}
									</span>
									<div className="flex flex-col gap-0.5">
										<h4 className="text-sm font-bold text-dark">
											{currentLanguage === "ar"
												? "دعم عبر تطبيق واتساب."
												: "WhatsApp support included"}
										</h4>
										<p className="text-sm text-muted">
											{currentLanguage === "ar"
												? "تحدّث مباشرةً مع محاسبك الخاص في أي وقت."
												: "Talk directly to your accountant, anytime"}
										</p>
									</div>
								</li>
							</ul>
						</div>

						<RegistrationRequest
							clickedPartner={clickedPartner}
							onClickPartner={onClickPartner}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartnerRegisteration;
