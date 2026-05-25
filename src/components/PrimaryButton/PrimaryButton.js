import { Link } from "react-router-dom";
import styles from "./PrimaryButton.module.css";
import { Ripple } from "primereact/ripple";

const PrimaryButton = ({
	isBtn,
	type = "button",
	classes,
	onClick,
	label,
	icon,
	to,
	rotateIcon,
	isAHref,
}) => {
	return isBtn ? (
		<button
			type={type}
			className={`${styles.primary_button} ${classes}`}
			onClick={onClick}>
			<Ripple />
			<span className={styles.button_text}>{label}</span>
			{icon && (
				<span
					className={`${styles.button_icon} ${rotateIcon ? "rtl:rotate-180" : ""}`}>
					{icon}
				</span>
			)}
		</button>
	) : isAHref ? (
		<a href={to} className={`${styles.primary_button} ${classes}`}>
			<Ripple />
			<span className={styles.button_text}>{label}</span>
			{icon && (
				<span
					className={`${styles.button_icon} ${rotateIcon ? "rtl:rotate-180" : ""}`}>
					{icon}
				</span>
			)}
		</a>
	) : (
		<Link to={to} className={`${styles.primary_button} ${classes}`}>
			<Ripple />
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
