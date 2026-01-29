const TutorialCard = ({ data }) => {
	return (
		<div className="group">
			<div className="w-full h-[200px] lg:h-[250px] max-w-full rounded-lg overflow-hidden flex items-center justify-center mb-4 relative after:content-[''] after:absolute after:inset-0 after:top-0 after:bg-[#0000001A] after:z-10">
				<img
					src={data.image}
					alt="Tutorial Pic"
					className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
				/>
			</div>
			<h4 className="text-sm font-bold text-black mb-[2px]">{data.title}</h4>
			<p className="text-sm text-muted">Posted on {data.postedOn}</p>
		</div>
	);
};

export default TutorialCard;
