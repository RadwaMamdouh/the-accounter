import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./Qtys.module.css";

const Qtys = ({ faqs }) => {
	return (
		<Accordion activeIndex={0} className={styles.faqs}>
			{faqs.map((faq) => (
				<AccordionTab header={faq.question} key={faq.id}>
					<p>{faq.answer}</p>
				</AccordionTab>
			))}
		</Accordion>
	);
};

export default Qtys;
