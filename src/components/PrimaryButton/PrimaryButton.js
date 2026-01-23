import { Link } from "react-router-dom";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
	isBtn,
	type = "button",
	classes,
	onClick,
	label,
	icon,
	to,
	rotateIcon,
}) => {
	return isBtn ? (
		<button
			type={type}
			className={`${styles.primary_button} ${classes}`}
			onClick={onClick}>
			<span className={styles.button_text}>{label}</span>
			{icon && (
				<span
					className={`${styles.button_icon} ${rotateIcon ? "rtl:rotate-180" : ""}`}>
					{icon}
				</span>
			)}
		</button>
	) : (
		<Link href={to} className={`${styles.primary_button} ${classes}`}>
			<span className={styles.button_text}>{label}</span>
			{icon && (
				<span
					className={`${styles.button_icon} ${rotateIcon ? "rtl:rotate-180" : ""}`}>
					{icon}
				</span>
			)}
		</Link>
	);
};

export default PrimaryButton;
