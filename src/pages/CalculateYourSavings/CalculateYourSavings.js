import Page from "components/Page/Page";
import CalculateSavings from "./components/CalculateSavings/CalculateSavings";
import GetStarted from "components/GetStarted/GetStarted";
import Testimonials from "components/Testimonials/Testimonials";
import Plans from "components/Plans/Plans";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";
import FrequentlyQuestions from "components/FrequentlyQuestions/FrequentlyQuestions";
import GetStartedToday from "components/GetStartedToday/GetStartedToday";

const CalculateYourSavings = () => {
	return (
		<Page title="Calculate Your Savings">
			<CalculateSavings />
			<GetStarted />
			<Testimonials />
			<Plans />
			<OfficialPartners />
			<FrequentlyQuestions />
			<GetStartedToday />
		</Page>
	);
};

export default CalculateYourSavings;
