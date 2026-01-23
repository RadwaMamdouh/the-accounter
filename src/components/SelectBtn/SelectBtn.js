import { SelectButton } from "primereact/selectbutton";
import styles from "./SelectBtn.module.css";

const SelectBtn = ({ options, value, onChange, classes }) => {
	return (
		<SelectButton
			value={value}
			onChange={onChange}
			options={options}
			className={`${styles.select_btn} ${classes}`}
		/>
	);
};

export default SelectBtn;
