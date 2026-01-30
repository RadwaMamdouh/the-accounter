import DarkButton from "components/DarkButton/DarkButton";

const GetStarted = () => {
	return (
		<section className="py-8 lg:py-[100px] bg-primary-bg">
			<div className="container">
				<h2 className="text-xl lg:text-4xl font-bold text-dark text-center mb-6">
					Ready to Get Started?
				</h2>
				<p className="text-sm text-dark text-center mb-6">
					Ultricies leo integer malesuada nunc vel risus commodo viverra
					maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet
					bibendum
				</p>
				<DarkButton
					label="Get Started"
					classes="w-fit mx-auto"
					to="/#getStartedToday"
					isAHref
				/>
			</div>
		</section>
	);
};

export default GetStarted;
