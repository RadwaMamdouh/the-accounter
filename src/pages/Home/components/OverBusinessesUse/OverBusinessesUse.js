import { useInView } from "framer-motion";
import { clock, document, trophy } from "icons/index";
import { useRef } from "react";
import CountUp from "react-countup";
import { Trans, useTranslation } from "react-i18next";

const OverBusinessesUse = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const ref = useRef(null); // ← useRef
	const inView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<section className="bg-[#0f172a] py-8 lg:py-10" ref={ref}>
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[36px] items-center">
					<div>
						<div className="w-10 h-[3px] bg-[#f97316] rounded-sm mb-3.5"></div>
						<div className="inline-block text-[10px] px-2 py-0.5 rounded-[20px] bg-[#f9731626] text-[#f97316] mb-2.5 uppercase">
							{currentLanguage === "ar"
								? "برنامج محاسبة"
								: "ACCOUNTING SOFTWARE"}
						</div>
						<h1 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-white text-start mb-3">
							<Trans
								i18nKey="overBusinessesUseTheAccounter"
								values={{ count: 400 }}
								components={{ span: <span className="text-[#f97316]" /> }}
							/>
						</h1>
						<p className="text-sm text-[#fff9] text-start">
							{currentLanguage === "ar"
								? "نحن نتولى أعمال المحاسبة الخاصة بك، حتى تتمكن من إدارة أعمالك بشكل أفضل."
								: "We do your Accounting, So you do better Business."}
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
						<div className="py-4 px-2.5 flex flex-col gap-1.5 items-center justify-center border border-[#f9731626] rounded-xl bg-[#ffffff0d] transition-all duration-300 min-h-32 hover:bg-[#ffffff1a] hover:border-[#f973164d]">
							<span className="text-[#f97316]">{document}</span>
							<h3 className="text-2xl lg:text-[26px] lg:leading-relaxed font-bold text-[#f97316] text-center">
								<CountUp
									key={inView ? "visible" : "hidden"}
									start={0}
									end={250}
									duration={2}
									suffix="k+"
								/>
							</h3>
							<p className="text-xs text-[#ffffff80] text-center">
								{currentLanguage === "ar"
									? "يتم إرسال المستندات شهرياً"
									: "Documents sent monthly"}
							</p>
						</div>
						<div className="py-4 px-2.5 flex flex-col gap-1.5 items-center justify-center border border-[#f9731626] rounded-xl bg-[#ffffff0d] transition-all duration-300 min-h-32 hover:bg-[#ffffff1a] hover:border-[#f973164d]">
							<span className="text-[#f97316]">{clock}</span>
							<h3 className="text-2xl lg:text-[26px] lg:leading-relaxed font-bold text-[#f97316] text-center">
								<CountUp
									key={inView ? "visible" : "hidden"}
									start={0}
									end={4}
									duration={2}
									suffix="M+"
								/>
							</h3>
							<p className="text-xs text-[#ffffff80] text-center">
								{currentLanguage === "ar" ? "ساعات تم توفيرها" : "Hours saved"}
							</p>
						</div>
						<div className="py-4 px-2.5 flex flex-col gap-1.5 items-center justify-center border border-[#f9731626] rounded-xl bg-[#ffffff0d] transition-all duration-300 min-h-32 hover:bg-[#ffffff1a] hover:border-[#f973164d]">
							<span className="text-[#f97316]">{trophy}</span>
							<h3 className="text-2xl lg:text-[26px] lg:leading-relaxed font-bold text-[#f97316] text-center">
								<CountUp
									key={inView ? "visible" : "hidden"}
									start={0}
									end={2020}
									duration={2}
									separator=""
								/>
							</h3>
							<p className="text-xs text-[#ffffff80] text-center">
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
