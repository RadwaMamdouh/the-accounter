import FrequentlyQuestions from "components/FrequentlyQuestions/FrequentlyQuestions";
import GetStartedToday from "components/GetStartedToday/GetStartedToday";
import Page from "components/Page/Page";
import Plans from "components/Plans/Plans";
import { usePartner } from "context/PartnerContext";
import { partners } from "data/partners";
import Hero from "pages/Home/components/Hero/Hero";
import HowItWorks from "pages/Home/components/HowItWorks/HowItWorks";
import OverBusinessesUse from "pages/Home/components/OverBusinessesUse/OverBusinessesUse";
import WhyChooseUs from "pages/Home/components/WhyChooseUs/WhyChooseUs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PartnerLanding = () => {
	const { name } = useParams();
	const { setPartner } = usePartner();

	useEffect(() => {
		if (partners[name]) {
			setPartner(name);
		} else {
			setPartner(null);
		}
	}, [name, setPartner]);

	return (
		<Page title={partners[name]?.name || "Partner"}>
			<Hero />
			<WhyChooseUs />
			<HowItWorks />
			<Plans />
			<OverBusinessesUse />
			<FrequentlyQuestions />
			<GetStartedToday />
		</Page>
	);
};

export default PartnerLanding;
