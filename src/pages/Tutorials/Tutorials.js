import FaqsTutorialsHead from "components/FaqsTutorialsHead/FaqsTutorialsHead";
import Page from "components/Page/Page";
import TutorialCard from "components/TutorialCard/TutorialCard";
import { search } from "icons/index";
import { InputText } from "primereact/inputtext";
import { useMemo, useState } from "react";

const tutorials = [
	{
		id: 1,
		image: "/images/tutorial1.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
	{
		id: 2,
		image: "/images/tutorial2.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
	{
		id: 3,
		image: "/images/tutorial3.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
	{
		id: 4,
		image: "/images/tutorial4.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
	{
		id: 5,
		image: "/images/tutorial5.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
	{
		id: 6,
		image: "/images/tutorial6.jpg",
		title: "How to Leverage Artificial Intelligence for Your Small Business",
		postedOn: "March 7, 2023",
	},
];

const Tutorials = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredTutorials = useMemo(() => {
		if (!searchTerm) return tutorials;

		return tutorials.filter((tutorial) =>
			tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm]);

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
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</FaqsTutorialsHead>

			{/* Tutorials */}
			<section className="py-8 lg:py-14">
				<div className="container">
					<div className="lg:w-4/5 max-w-full mx-auto">
						<h2 className="text-xl font-bold text-dark mb-12">
							About The Accounter
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredTutorials.map((tutorial) => (
								<TutorialCard key={tutorial.id} data={tutorial} />
							))}
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Tutorials;
