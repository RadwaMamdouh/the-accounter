import Page from "components/Page/Page";
import FrequentlyQuestions from "./components/FrequentlyQuestions/FrequentlyQuestions";
import GetStarted from "./components/GetStarted/GetStarted";
import GetStartedToday from "./components/GetStartedToday/GetStartedToday";
import Hero from "./components/Hero/Hero";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import OverBusinessesUse from "./components/OverBusinessesUse/OverBusinessesUse";
import Plans from "components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

const Home = () => {
	return (
		<Page title="Home">
			<Hero />
			<OfficialPartners />
			<WhyChooseUs />
			<GetStarted />
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
