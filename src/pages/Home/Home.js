import Page from "components/Page/Page";
import Hero from "./components/Hero/Hero";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ReadyToHandOff from "components/ReadyToHandOff/ReadyToHandOff";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "components/Testimonials/Testimonials";
import Plans from "components/Plans/Plans";
import OverBusinessesUse from "./components/OverBusinessesUse/OverBusinessesUse";
import FrequentlyQuestions from "components/FrequentlyQuestions/FrequentlyQuestions";
import GetStartedToday from "components/GetStartedToday/GetStartedToday";

const Home = () => {
	return (
		<Page title="Home">
			<Hero />
			<OfficialPartners />
			<WhyChooseUs />
			<ReadyToHandOff />
			<HowItWorks />
			<Testimonials />
			<Plans />
			<OverBusinessesUse />
			<FrequentlyQuestions />
			<GetStartedToday />
		</Page>
	);
};

export default Home;
