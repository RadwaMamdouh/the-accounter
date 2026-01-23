import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import languages from "assets/lang";

const updateDocumentDirection = (lng) => {
	const isRTL = lng === "ar";
	window.document.dir = isRTL ? "rtl" : "ltr";
};

i18n
	.use(HttpBackend) // loads translations from /public/locales
	.use(LanguageDetector) // detects user language
	.use(initReactI18next) // passes i18n instance to react-i18next
	.init(
		{
			resources: languages,
			fallbackLng: "en", // default language
			lng: localStorage.getItem("i18nextLng") || "en",
			debug: true, // set to false in production
			keySeparator: false, // we use content as keys
			interpolation: {
				escapeValue: false, // React already escapes
			},
		},
		() => {
			updateDocumentDirection(i18n.language);
		},
	);

i18n.on("languageChanged", (lng) => {
	updateDocumentDirection(lng);
	localStorage.setItem("i18nextLng", lng);
});

export default i18n;
