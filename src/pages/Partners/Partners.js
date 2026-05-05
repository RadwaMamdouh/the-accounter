import Page from "components/Page/Page";
import PartnersHero from "./components/PartnersHero/PartnersHero";
import WhoWeWorkWith from "./components/WhoWeWorkWith/WhoWeWorkWith";
import PartnerRegisteration from "./components/PartnerRegisteration/PartnerRegisteration";
import { useState } from "react";
import NotPartnerMember from "./components/NotPartnerMember/NotPartnerMember";
import Features from "./components/Features/Features";

const Partners = () => {
	const [clickedPartner, setClickedPartner] = useState("WEWORK");

	const onClickPartner = (partner) => {
		setClickedPartner(partner);

		const section = document.getElementById("registerationRequest");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Page title="Partners">
			<PartnersHero />
			<WhoWeWorkWith onClickPartner={onClickPartner} />
			<Features />
			<PartnerRegisteration
				clickedPartner={clickedPartner}
				onClickPartner={onClickPartner}
			/>
			<NotPartnerMember />
		</Page>
	);
};

export default Partners;
