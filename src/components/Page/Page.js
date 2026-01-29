import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Page = ({ title, children }) => {
	const location = useLocation();

	return (
		<>
			<Helmet key={location.key}>
				<title>{title} | The Accounter</title>
			</Helmet>
			{children}
		</>
	);
};

export default Page;
