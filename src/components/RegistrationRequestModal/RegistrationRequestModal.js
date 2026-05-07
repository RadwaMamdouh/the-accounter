import { Dialog } from "primereact/dialog";
import DarkButton from "components/DarkButton/DarkButton";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";

const RegistrationRequestModal = ({
	visible = true,
	onHide,
	clickedPartner,
}) => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const partners = [
		{ name: "Khalifa Fund", value: "Khalifa Fund" },
		{ name: "DIFC", value: "DIFC" },
		{ name: "WEWORK", value: "WEWORK" },
		{ name: "Ruwad", value: "Ruwad" },
		{ name: "EEA", value: "EEA" },
	];

	const formik = useFormik({
		initialValues: {
			name: "",
			companyName: "",
			partner: "",
			fileNumber: "",
			email: "",
			phone: "",
			message: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const formRef = useRef(null);

	const { setFieldValue, resetForm } = formik;

	useEffect(() => {
		if (visible && clickedPartner) {
			setFieldValue("partner", clickedPartner);
		}
	}, [visible, clickedPartner, setFieldValue]);

	useEffect(() => {
		if (!visible) {
			resetForm();
		}
	}, [visible, resetForm]);

	const headerElement = (
		<div className="px-8">
			<h4 className="max-sm:text-xs font-bold text-dark mb-1">
				{t("sendRegistrationRequest")}
			</h4>
			<p className="text-xs sm:text-sm text-muted">
				{currentLanguage === "ar"
					? "يقدم موقع The Accounter أسعار باقات خاصة لأعضائنا الشركاء! إذا كنت عضوًا شريكًا، يُرجى ملء الحقول أدناه."
					: "The Accounter offers special package prices for our partners members ! If you are a our partners member fill the below fields👇"}
			</p>
		</div>
	);

	const footerContent = (
		<div className="flex items-center justify-end gap-[10px] px-8">
			<WhiteButton isBtn label={t("cancel")} classes="w-fit" onClick={onHide} />
			<DarkButton
				isBtn
				label={t("send")}
				classes="w-fit"
				onClick={() => formRef.current?.requestSubmit()}
			/>
		</div>
	);

	return (
		<Dialog
			visible={visible}
			style={{ width: "37.5vw" }}
			breakpoints={{ "960px": "75vw", "641px": "90vw" }}
			onHide={() => {
				if (!visible) return;
				onHide();
			}}
			blockScroll={true}
			closable={false}
			header={headerElement}
			footer={footerContent}
			maskClassName="bg-black/60"
			className="bg-white border border-border-light py-6 sm:py-8 rounded-lg">
			<form
				ref={formRef}
				onSubmit={formik.handleSubmit}
				className="py-4 sm:py-6 px-6 sm:px-8 grid grid-cols-1 gap-5">
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
						onChange={(e) => formik.setFieldValue("partner", e.value)}
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
						placeholder={t("yourPhoneNumber")}
						name="phone"
					/>
				</div>
				<div className="input_holder">
					<h6>{t("message")}</h6>
					<InputTextarea
						value={formik.values.message}
						onChange={formik.handleChange}
						placeholder={t("enterMessage")}
						name="message"
					/>
				</div>
			</form>
		</Dialog>
	);
};

export default RegistrationRequestModal;
