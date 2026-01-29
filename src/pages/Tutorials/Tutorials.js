import FaqsTutorialsHead from "components/FaqsTutorialsHead/FaqsTutorialsHead";
import Page from "components/Page/Page";
import { search } from "icons/index";
import { InputText } from "primereact/inputtext";

const Tutorials = () => {
	return (
		<Page title="Tutorials">
			<FaqsTutorialsHead
				headTitle="Tutorials"
				headDesc="We do your Accounting, So you do better Business.">
				<div className="relative overflow-hidden w-full lg:w-1/2 max-w-full mx-auto">
					<span className="w-5 h-5 text-muted flex items-center justify-center *:w-full *:h-full absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3">
						{search}
					</span>
					<InputText
						type="text"
						name="search"
						placeholder="Ask a question..."
						className="bg-white block py-[10px] lg:py-4 px-[10px] lg:px-3 !ps-10 border border-border-light rounded-md w-full outline-0 focus-visible:outline-none transition-all duration-300 hover:border-primary"
					/>
				</div>
			</FaqsTutorialsHead>

			{/* Tutorials */}
			<section className="py-8 lg:py-14">
				<div className="container">
					<div className="w-4/5 max-w-full mx-auto">
						<h2 className="text-xl font-bold text-dark mb-12">
							About The Accounter
						</h2>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Tutorials;
