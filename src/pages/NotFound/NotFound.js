import Page from "components/Page/Page";
import WhiteButton from "components/WhiteButton/WhiteButton";
import Footer from "layouts/components/Footer/Footer";
import Header from "layouts/components/Header/Header";

const NotFound = () => {
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
									Page cannot be found
								</h1>
								<p className="text-sm text-dark text-center">
									Let’s get back to business
								</p>
							</div>
							<div className="flex items-center justify-center gap-3">
								<WhiteButton
									to="/"
									label="Go to Home"
									classes="!shadow-none !border-dark"
								/>
								<WhiteButton
									label="Contact an Expert"
									classes="!shadow-none !border-dark"
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
