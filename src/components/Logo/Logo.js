import { usePartner } from "context/PartnerContext";
import { partners } from "data/partners";
import { Link } from "react-router-dom";

const Logo = () => {
	const { partner } = usePartner();
	const partnerConfig = partner ? partners[partner] : null;
	const logo = partnerConfig?.logo || "/images/logo.svg";
	const homePath = partnerConfig ? `/partner/${partner}` : "/";

	return (
		<Link
			// to="/"
			to={homePath}
			className={`flex items-center justify-center shrink-0 overflow-hidden ${partnerConfig ? "h-16 xl:h-20" : "h-8 xl:h-10"}`}>
			<img
				// src="/images/logo.svg"
				src={logo}
				alt="The Accounter"
				className="w-full h-full"
			/>
		</Link>
	);
};

export default Logo;
