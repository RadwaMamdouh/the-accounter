import Page from "components/Page/Page";
import WhiteButton from "components/WhiteButton/WhiteButton";
import Footer from "layouts/components/Footer/Footer";
import Header from "layouts/components/Header/Header";
import { useTranslation } from "react-i18next";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<Page title="Not Found">
			<div className="min-h-dvh flex flex-col">
				<Header />
				<main className="grow py-8 lg:py-24">
					<div className="container">
						<div className="flex flex-col items-center justify-center gap-8">
							<img
								src="/images/not-found.svg"
								alt="Not Found"
								className="w-[434px] max-w-full mx-auto"
							/>
							<div className="flex flex-col gap-3">
								<h1 className="text-2xl font-bold text-dark text-center">
									{t("pageCannotBeFound")}
								</h1>
								<p className="text-sm text-dark text-center">
									{t("letsGetBackToBusiness")}
								</p>
							</div>
							<div className="flex items-center justify-center gap-3">
								<WhiteButton
									to="/"
									label={t("goToHome")}
									classes="!shadow-none !border-dark"
								/>
								<WhiteButton
									label={t("contactAnExpert")}
									classes="!shadow-none !border-dark"
									to="/#getStartedToday"
								/>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</Page>
	);
};

export default NotFound;
