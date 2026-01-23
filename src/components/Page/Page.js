import { Helmet } from "react-helmet-async";

const Page = ({ title, children }) => (
	<>
		<Helmet>
			<title>{title} | The Accounter</title>
		</Helmet>
		{children}
	</>
);

export default Page;
