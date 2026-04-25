import WhiteButton from "components/WhiteButton/WhiteButton";
import { useTranslation } from "react-i18next";

const NotPartnerMember = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8 lg:py-[72px] bg-primary">
			<div className="container">
				<h3 className="text-2xl lg:text-4xl font-bold text-white text-center mb-3">
					Not a partner member?
				</h3>
				<p className="text-xs lg:text-sm text-white text-center mb-6 lg:w-5/12 max-w-full mx-auto">
					You can still get started with The Accounter. Book a free consultation
					and our team will walk you through the best plan for your business.
				</p>
				<WhiteButton
					label={t("bookFreeConsultation")}
					classes="w-fit mx-auto !text-primary"
				/>
			</div>
		</section>
	);
};

export default NotPartnerMember;
