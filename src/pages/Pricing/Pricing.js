import OfficialPartners from "components/OfficialPartners/OfficialPartners";
import Page from "components/Page/Page";
import Plans from "components/Plans/Plans";

const Pricing = () => {
	return (
		<Page title="Pricing">
			<Plans gridView hideBtn showPlansFeatures />
			<OfficialPartners />
		</Page>
	);
};

export default Pricing;
