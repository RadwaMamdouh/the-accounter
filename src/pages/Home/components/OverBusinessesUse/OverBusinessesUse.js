import { Trans, useTranslation } from "react-i18next";

const OverBusinessesUse = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<section className="bg-dark py-8 lg:py-[72px]">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[100px] items-center">
					<div>
						<h1 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-white text-center lg:text-start mb-3">
							<Trans
								i18nKey="overBusinessesUseTheAccounter"
								values={{ count: 400 }}
								components={{ span: <span className="text-orange" /> }}
							/>
						</h1>
						<p className="text-sm text-white text-center lg:text-start">
							{currentLanguage === "ar"
								? "نحن نتولى أعمال المحاسبة الخاصة بك، حتى تتمكن من إدارة أعمالك بشكل أفضل."
								: "We do your Accounting, So you do better Business."}
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="lg:py-6 lg:px-10 flex flex-col gap-1 lg:gap-[10px] items-center justify-center">
							<h3 className="text-2xl lg:text-[44px] lg:leading-relaxed font-bold text-white text-center">
								250k+
							</h3>
							<p className="text-sm text-light text-center">
								{currentLanguage === "ar"
									? "يتم إرسال المستندات شهرياً"
									: "Documents sent monthly"}
							</p>
						</div>
						<div className="lg:py-6 lg:px-10 flex flex-col gap-1 lg:gap-[10px] items-center justify-center">
							<h3 className="text-2xl lg:text-[44px] lg:leading-relaxed font-bold text-white text-center">
								4M+
							</h3>
							<p className="text-sm text-light text-center">
								{currentLanguage === "ar" ? "ساعات تم توفيرها" : "Hours saved"}
							</p>
						</div>
						<div className="lg:py-6 lg:px-10 flex flex-col gap-1 lg:gap-[10px] items-center justify-center">
							<h3 className="text-2xl lg:text-[44px] lg:leading-relaxed font-bold text-white text-center">
								2020
							</h3>
							<p className="text-sm text-light text-center">
								{currentLanguage === "ar"
									? "لقد كنا موجودين منذ"
									: "We've been around since"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OverBusinessesUse;
