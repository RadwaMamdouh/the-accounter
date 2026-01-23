import { Rating } from "primereact/rating";
import styles from "./Rate.module.css";

const Rate = ({ value, onChange, cancel = false }) => {
	return (
		<Rating
			value={value}
			onChange={onChange}
			cancel={cancel}
			className={styles.rate}
		/>
	);
};

export default Rate;
