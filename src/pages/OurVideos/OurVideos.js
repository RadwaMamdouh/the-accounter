import Page from "components/Page/Page";
import { SelectButton } from "primereact/selectbutton";
import videosItems from "json/videosData.json";
import { useRef, useState } from "react";
import { FILTERS } from "utils/filters";
import styles from "./OurVideos.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { play_circle, star, starOutlined } from "icons/index";
import { Ripple } from "primereact/ripple";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { Galleria } from "primereact/galleria";

const OurVideos = () => {
	const [items, setItems] = useState(videosItems);
	const [activeFilter, setActiveFilter] = useState("all");
	const [activeIndex, setActiveIndex] = useState(0);
	const galleria = useRef(null);

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
			case "new":
				return item.isNew;
			case "event":
				return item.isEvent;
			default:
				return true; // all
		}
	});

	const itemTemplate = (item) => {
		return (
			<img
				src={item.image}
				alt="Gallery Pic"
				className="block w-[800px] h-[600px] max-w-[100vw] object-cover max-h-[60vh]"
			/>
		);
	};

	const toggleFavourite = (id) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, isFavourite: !item.isFavourite } : item,
			),
		);
	};

	return (
		<Page title="Our Videos">
			<section className="pt-8 lg:pt-[100px] pb-6 lg:pb-[72px]">
				<div className="container">
					<h1 className="text-lg lg:text-[32px] font-bold text-dark mb-6">
						Our Videos
					</h1>
					<p className="text-sm text-dark mb-6">
						Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque
						venenatis.
					</p>
					<SelectButton
						value={activeFilter}
						onChange={(e) => setActiveFilter(e.value)}
						options={FILTERS}
						itemTemplate={justifyTemplate}
						optionValue="key"
						className={`${styles.filters_tabs} no-scrollbar`}
						allowEmpty={false}
					/>
				</div>
			</section>
			<section className="pb-8 lg:pb-20">
				<Galleria
					ref={galleria}
					value={filteredItems}
					style={{ maxWidth: "850px" }}
					activeIndex={activeIndex}
					onItemChange={(e) => setActiveIndex(e.index)}
					circular
					fullScreen
					showItemNavigators
					showThumbnails={false}
					item={itemTemplate}
					className={styles.gallery_show}
				/>

				<div className="container">
					<AnimatePresence mode="popLayout">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredItems.map((item, index) => (
								<motion.div
									key={item.id}
									layout
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.3, ease: "easeOut" }}
									className="w-full max-w-full h-[240px] border border-border-light rounded-[4px] flex items-center justify-center overflow-hidden relative group">
									<img
										src={item.image}
										alt="gallery Pic"
										className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
									/>
									<button
										type="button"
										className="w-10 h-10 rounded-full flex items-center justify-center *:w-6 *:h-6 bg-white bg-opacity-[0.59] backdrop-blur-2xl absolute top-[10px] ltr:right-[10px] rtl:left-[10px] overflow-hidden text-muted"
										onClick={() => toggleFavourite(item.id)}>
										<Ripple />
										{item.isFavourite ? star : starOutlined}
									</button>
									<button
										type="button"
										className="w-12 h-12 rounded-full flex items-center justify-center *:w-full *:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-white"
										onClick={() => {
											setActiveIndex(index);
											galleria.current.show();
										}}>
										<Ripple />
										{play_circle}
									</button>
								</motion.div>
							))}
						</div>
					</AnimatePresence>
					<PrimaryButton isBtn label="Load more" classes="w-fit mx-auto mt-6" />
				</div>
			</section>
		</Page>
	);
};

export default OurVideos;
