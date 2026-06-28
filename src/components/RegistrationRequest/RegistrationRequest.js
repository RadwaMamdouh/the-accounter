import DarkButton from "components/DarkButton/DarkButton";
import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
// import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const RegistrationRequest = ({ clickedPartner, onClickPartner = () => {} }) => {
	const { t } = useTranslation();
	// const currentLanguage = i18n.language;

	const partners = [
		{ name: "Khalifa Fund", value: "Khalifa-Fund" },
		{ name: "DIFC", value: "difc" },
		{ name: "WEWORK", value: "wework" },
		{ name: "Ruwad", value: "ruwad" },
		{ name: "EEA", value: "eea" },
	];

	const formik = useFormik({
		initialValues: {
			name: "",
			companyName: "",
			partner: "",
			fileNumber: "",
			email: "",
			phone: "",
			// message: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const formRef = useRef(null);

	const { setFieldValue } = formik;

	useEffect(() => {
		if (clickedPartner) {
			setFieldValue("partner", clickedPartner.toLowerCase());
		}
	}, [clickedPartner, setFieldValue]);

	return (
		<div className="p-4 lg:p-8 bg-white border border-border-light rounded-lg lg:-mt-28 w-full">
			{/* <div className="mb-6">
				<h4 className="text-xs lg:text-base font-bold text-dark mb-1">
					{t("sendRegistrationRequest")}
				</h4>
				<p className="text-xs sm:text-sm text-muted">
					{currentLanguage === "ar"
						? "يقدم موقع The Accounter أسعار باقات خاصة لأعضائنا الشركاء! إذا كنت عضوًا شريكًا، يُرجى ملء الحقول أدناه."
						: "The Accounter offers special package prices for our partners members! If you are a partner member, fill the below fields"}
				</p>
			</div> */}
			<form
				ref={formRef}
				onSubmit={formik.handleSubmit}
				className="grid grid-cols-1 gap-5">
				<div className="input_holder">
					<h6 className="required">{t("name")}</h6>
					<InputText
						type="text"
						value={formik.values.name}
						onChange={formik.handleChange}
						placeholder={t("yourName")}
						name="name"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">{t("companyName")}</h6>
					<InputText
						type="text"
						value={formik.values.companyName}
						onChange={formik.handleChange}
						placeholder={t("companyName")}
						name="companyName"
					/>
					<small className="text-xs text-muted">
						{t("yourCompanyNameAsPerTradeLicense")}
					</small>
				</div>
				<div className="input_holder">
					<h6 className="required">{t("partner")}</h6>
					<Dropdown
						value={formik.values.partner}
						onChange={(e) => {
							formik.setFieldValue("partner", e.value);
							onClickPartner(e.value);
						}}
						options={partners}
						optionLabel="name"
						placeholder={t("selectAPartner")}
						className="w-full"
						panelClassName="dropdown_menu"
						name="partners"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">
						{t("fileNumber")} ({t("with")} {clickedPartner})
					</h6>
					<InputText
						type="text"
						value={formik.values.fileNumber}
						onChange={formik.handleChange}
						placeholder={t("fileNumber")}
						name="fileNumber"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">{t("email")}</h6>
					<InputText
						type="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						placeholder={t("yourEmail")}
						name="email"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">{t("phoneNumber")}</h6>
					<InputText
						type="text"
						value={formik.values.phone}
						onChange={formik.handleChange}
						placeholder="+971 XX XXX XXXX"
						name="phone"
					/>
				</div>
				{/* <div className="input_holder">
					<h6>Message</h6>
					<InputTextarea
						value={formik.values.message}
						onChange={formik.handleChange}
						placeholder="Enter a message"
						name="message"
					/>
				</div> */}

				<div className="flex items-center justify-start">
					<DarkButton
						isBtn
						label={t("send")}
						classes="w-fit"
						onClick={() => formRef.current?.requestSubmit()}
					/>
				</div>
			</form>
		</div>
	);
};

export default RegistrationRequest;
