import { Ripple } from "primereact/ripple";
import { withTranslation } from "react-i18next";
import i18n from "utils/i18n";

const LangBtn = ({ classes }) => {
	const currentLang = i18n.language || "en";
	document.dir = i18n.dir();

	const toggleLanguage = (lng) => {
		i18n.changeLanguage(lng);
		document.dir = i18n.dir();
	};

	return (
		<button
			type="button"
			className={`py-[7px] px-2.5 rounded-md flex items-center justify-center gap-1 transition duration-300 hover:bg-ghost-white cursor-pointer relative overflow-hidden ${classes}`}
			onClick={() => toggleLanguage(currentLang === "ar" ? "en" : "ar")}>
			<Ripple />
			<img
				src={
					currentLang === "ar" ? "/images/flag-en.svg" : "/images/flag-ar.svg"
				}
				alt={currentLang === "ar" ? "Flag USD" : "Flag AED"}
				className="shrink-0 w-[18px] h-[18px]"
			/>
			<span
				className={`text-xs xl:text-[13px] font-semibold text-dark ${currentLang === "ar" ? "font-inter" : "font-alexandria"}`}>
				{currentLang === "ar" ? "English" : "العربية"}
			</span>
		</button>
	);
};

export default withTranslation()(LangBtn);
