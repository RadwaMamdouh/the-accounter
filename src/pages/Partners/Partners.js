import Page from "components/Page/Page";
import styles from "./Partners.module.css";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import OfficialPartners from "components/OfficialPartners/OfficialPartners";

const Partners = () => {
	return (
		<Page title="Partners">
			<section className={styles.official_service_provider}>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[50px]">
						<div className="lg:pt-[46px]">
							<h1 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold max-lg:text-center mb-3 lg:mb-4">
								Official Accounting Service Provider
							</h1>
							<p className="text-sm text-dark max-lg:text-center mb-4">
								We do your Accounting, So you do better Business.
							</p>
							<PrimaryButton
								label="Get started today"
								classes="w-fit max-lg:mx-auto"
							/>
						</div>
						<img
							src="/images/service-provider.svg"
							alt=""
							className="h-64 lg:h-[300px] w-fit mx-auto max-lg:-order-1 object-cover"
						/>
					</div>
				</div>
			</section>
			<OfficialPartners isFlexCol />
		</Page>
	);
};

export default Partners;
