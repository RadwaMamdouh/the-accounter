import { useTranslation } from "react-i18next";

const CopyRights = () => {
	const { t } = useTranslation();

	return (
		<div className="bg-dark-hover py-3">
			<div className="container">
				<p className="text-sm text-white text-start sm:text-center">
					{t("copyright")}
				</p>
			</div>
		</div>
	);
};

export default CopyRights;
