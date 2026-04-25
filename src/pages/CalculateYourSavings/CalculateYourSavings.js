import Page from "components/Page/Page";
import CalculateSavings from "./components/CalculateSavings/CalculateSavings";
import Hero from "./components/Hero/Hero";

const CalculateYourSavings = () => {
	return (
		<Page title="Calculate Your Savings">
			<Hero />
			<CalculateSavings />
		</Page>
	);
};

export default CalculateYourSavings;
