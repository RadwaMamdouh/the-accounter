import Page from "components/Page/Page";
import { useState } from "react";
import blogsItems from "json/blogsData.json";
import { SelectButton } from "primereact/selectbutton";
import { BLOGSFILTERS } from "utils/blogsFilters";
import styles from "./Blogs.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Ripple } from "primereact/ripple";
import { star, starOutlined } from "icons/index";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { Link } from "react-router-dom";
import SubscribeBlog from "components/SubscribeBlog/SubscribeBlog";

const Blogs = () => {
	const [items, setItems] = useState(blogsItems);
	const [activeFilter, setActiveFilter] = useState("all");

	const justifyTemplate = (option) => {
		return (
			<>
				{option.icon && (
					<span className="shrink-o text-grey w-5 h-5 flex items-center justify-center *:w-full *:h-full">
						{option.icon}
					</span>
				)}
				<span className="text-inherit">{option.label}</span>
			</>
		);
	};

	const filteredItems = items.filter((item) => {
		switch (activeFilter) {
			case "favourite":
				return item.isFavourite;
			case "featureReleases":
				return item.isFeatureReleases;
			case "announcements":
				return item.isAnnouncements;
			case "event":
				return item.isEvent;
			case "pressReleases":
				return item.isPressReleases;
			default:
				return true; // all
		}
	});

	const getBadgeText = (item) => {
		if (item.isFavourite) return "Favourite";
		if (item.isEvent) return "Event";
		if (item.isAnnouncements) return "Announcements";
		if (item.isFeatureReleases) return "Feature Release";
		if (item.isPressReleases) return "Press Release";
		return null;
	};

	const toggleFavourite = (id) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, isFavourite: !item.isFavourite } : item,
			),
		);
	};

	return (
		<Page title="Blogs">
			<section className="pt-8 lg:pt-[100px] pb-6 lg:pb-[72px]">
				<div className="container">
					<h1 className="text-lg lg:text-[32px] font-bold text-dark mb-6">
						Blog
					</h1>
					<p className="text-sm text-dark mb-6">
						Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque
						venenatis.
					</p>
					<SelectButton
						value={activeFilter}
						onChange={(e) => setActiveFilter(e.value)}
						options={BLOGSFILTERS}
						itemTemplate={justifyTemplate}
						optionValue="key"
						className={`${styles.filters_tabs} no-scrollbar`}
						allowEmpty={false}
					/>
				</div>
			</section>
			<section className="pb-8 lg:pb-20">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-12">
						<div>
							<AnimatePresence mode="popLayout">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									{filteredItems.map((item) => (
										<motion.div
											key={item.id}
											layout
											initial={{ opacity: 0, scale: 0.95 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
											className="group">
											<div className="w-full max-w-full h-[250px] rounded-lg flex items-center justify-center overflow-hidden relative mb-4">
												<img
													src={item.image}
													alt="Blog Pic"
													className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
												/>
												<button
													type="button"
													className="w-10 h-10 rounded-full flex items-center justify-center *:w-6 *:h-6 bg-white bg-opacity-[0.59] backdrop-blur-2xl absolute top-[10px] ltr:right-[10px] rtl:left-[10px] overflow-hidden text-muted"
													onClick={() => toggleFavourite(item.id)}>
													<Ripple />
													{item.isFavourite ? star : starOutlined}
												</button>
											</div>
											<div
												className={`py-[3px] px-2 text-xs font-medium text-dark w-fit rounded-[4px] border mb-4 flex items-center justify-center capitalize ${item.isEvent ? "bg-primary-bg border-primary-light" : "bg-green-bg border-green-light"}`}>
												{getBadgeText(item)}
											</div>
											<h3 className="text-sm font-bold text-dark line-clamp-2 mb-[2px]">
												{item.title}
											</h3>
											<p className="text-sm text-muted mb-4">
												Posted on {item.date}
											</p>
											<WhiteButton
												label="Read More"
												classes="!shadow-none w-fit"
												to={`/blogs/${item.id}`}
											/>
										</motion.div>
									))}
								</div>
							</AnimatePresence>
							<PrimaryButton
								isBtn
								label="Load more"
								classes="w-fit mx-auto mt-8"
							/>
						</div>
						<div className="flex flex-col gap-8">
							<h3 className="text-sm font-bold text-dark">Follow Us</h3>
							<div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
								<Link
									to=""
									target="_blank"
									className="py-2 px-3 bg-white border border-border-light rounded-md flex items-center justify-start gap-[6px] transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/facebook.svg"
										alt="Facebook"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark">
										Facebook
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="py-2 px-3 bg-white border border-border-light rounded-md flex items-center justify-start gap-[6px] transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/twitter.svg"
										alt="Twitter"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark">
										Twitter
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="py-2 px-3 bg-white border border-border-light rounded-md flex items-center justify-start gap-[6px] transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/instagram.svg"
										alt="Instagram"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark">
										Instagram
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="py-2 px-3 bg-white border border-border-light rounded-md flex items-center justify-start gap-[6px] transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/linkedIn.svg"
										alt="LinkedIn"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark">
										LinkedIn
									</span>
								</Link>
							</div>
							<SubscribeBlog />
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Blogs;
