import Page from "components/Page/Page";
import ServicesHero from "./components/ServicesHero/ServicesHero";
import OurServices from "./components/OurServices/OurServices";
import AdditionalServices from "./components/AdditionalServices/AdditionalServices";
import ReadyToGetHandled from "./components/ReadyToGetHandled/ReadyToGetHandled";

const Services = () => {
	return (
		<Page title="Services">
			<ServicesHero />
			<OurServices />
			<AdditionalServices />
			<ReadyToGetHandled />
		</Page>
	);
};

export default Services;
