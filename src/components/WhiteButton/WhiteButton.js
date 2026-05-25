import { Link } from "react-router-dom";
import styles from "./WhiteButton.module.css";
import { Ripple } from "primereact/ripple";

const WhiteButton = ({
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
			className={`${styles.white_button} ${classes}`}
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
	) : (
		<Link to={to} className={`${styles.white_button} ${classes}`}>
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

export default WhiteButton;
