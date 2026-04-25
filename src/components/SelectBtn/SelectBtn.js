import { SelectButton } from "primereact/selectbutton";
import styles from "./SelectBtn.module.css";

const SelectBtn = ({ options, value, onChange, optionLabel, classes }) => {
	return (
		<SelectButton
			value={value}
			onChange={onChange}
			options={options}
			className={`${styles.select_btn} ${classes}`}
			allowEmpty={false}
			optionLabel={optionLabel}
		/>
	);
};

export default SelectBtn;
