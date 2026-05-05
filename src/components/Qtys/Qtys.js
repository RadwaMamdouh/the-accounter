import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./Qtys.module.css";
import { useTranslation } from "react-i18next";

const Qtys = ({ faqs }) => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return (
		<Accordion activeIndex={0} className={styles.faqs}>
			{faqs.map((faq) => (
				<AccordionTab
					header={currentLanguage === "ar" ? faq.questionAr : faq.question}
					key={faq.id}>
					<p>{currentLanguage === "ar" ? faq.answerAr : faq.answer}</p>
				</AccordionTab>
			))}
		</Accordion>
	);
};

export default Qtys;
