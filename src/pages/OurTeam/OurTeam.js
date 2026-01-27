import Page from "components/Page/Page";
import styles from "./OurTeam.module.css";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { at, linkedin } from "icons/index";

const OurTeam = () => {
	const teams = [
		{
			id: 1,
			image: "/images/team1.svg",
			name: "Fadi Elghattis",
			role: "Founder and CEO",
		},
		{
			id: 2,
			image: "/images/team2.svg",
			name: "Khawla AlBalooshi",
			role: "Finance Professional",
		},
		{
			id: 3,
			image: "/images/team3.svg",
			name: "Murad Ramahi",
			role: "Head of Product",
		},
		{
			id: 4,
			image: "/images/team4.svg",
			name: "Haseena Sharook",
			role: "Operations Manager",
		},
	];

	return (
		<Page title="Out Team">
			<section className={styles.our_team}>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[50px]">
						<div className="lg:pt-[46px]">
							<h1 className="text-xl lg:text-[32px] lg:leading-relaxed text-dark font-bold max-lg:text-center mb-3 lg:mb-4">
								Our Team
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
							src="/images/our-team.svg"
							alt=""
							className="h-64 lg:h-[284px] w-fit mx-auto max-lg:-order-1 object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="py-8 lg:py-[100px]">
				<div className="container">
					<div className="mb-8 lg:mb-[50px]">
						<h2 className="text-xl lg:text-[32px] text-dark font-bold text-center mb-2 lg:mb-3">
							Our Team
						</h2>
						<p className="text-sm text-dark text-center">
							We do your Accounting, So you do better Business.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{teams.map((member) => (
							<div
								className="p-5 border border-border-light rounded-[4px] flex flex-col gap-4"
								key={member.id}>
								<div className="relative group">
									<div className="flex flex-col gap-4 items-center">
										<div className="w-[116px] h-[116px] rounded-full overflow-hidden flex items-center justify-center">
											<img
												src={member.image}
												alt="Profile Pic"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="flex flex-col gap-1">
											<h4 className="text-dark font-semibold text-center">
												{member.name}
											</h4>
											<p className="text-sm text-muted text-center">
												{member.role}
											</p>
										</div>
									</div>
									{/* Bio */}
									<div className="absolute top-0 left-0 inset-0 z-10 bg-white opacity-0 transition-all duration-300 group-hover:opacity-100">
										<h5 className="text-sm font-bold text-dark text-center mb-4">
											Bio
										</h5>
										<p className="text-sm text-dark text-center">
											Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
											quisque venenatis. Pulvinar pulvinar sodales nibh
											venenatis porta semper nunc etiam.
										</p>
									</div>
								</div>
								<hr className="border-border-light" />
								<div className="flex items-center justify-center gap-2">
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md text-dark *:w-[18px] *:h-[18px] transition-all duration-300 hover:bg-ghost-white">
										{at}
									</Link>
									<Link
										to=""
										target="_blank"
										className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md text-dark *:w-[18px] *:h-[18px] transition-all duration-300 hover:bg-ghost-white">
										{linkedin}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Page>
	);
};

export default OurTeam;
