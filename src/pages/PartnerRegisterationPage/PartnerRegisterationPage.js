import PartnerRegisteration from "pages/Partners/components/PartnerRegisteration/PartnerRegisteration";
import { useParams } from "react-router-dom";

const PartnerRegisterationPage = () => {
	const { partnerName } = useParams();

	return <PartnerRegisteration clickedPartner={partnerName} />;
};

export default PartnerRegisterationPage;
