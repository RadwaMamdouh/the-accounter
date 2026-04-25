import Page from "components/Page/Page";
import Hero from "./components/Hero/Hero";
import TheProcess from "./components/TheProcess/TheProcess";
import ComplianceGuaranteed from "./components/ComplianceGuaranteed/ComplianceGuaranteed";
import FrequentlyQuestions from "components/FrequentlyQuestions/FrequentlyQuestions";
import ReadyToHandOff from "components/ReadyToHandOff/ReadyToHandOff";

const HowItWorks = () => {
	return (
		<Page title="How It Works">
			<Hero />
			<TheProcess />
			<ComplianceGuaranteed />
			<FrequentlyQuestions />
			<ReadyToHandOff />
		</Page>
	);
};

export default HowItWorks;
