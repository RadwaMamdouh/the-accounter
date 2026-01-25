import { Dialog } from "primereact/dialog";
import DarkButton from "components/DarkButton/DarkButton";
import WhiteButton from "components/WhiteButton/WhiteButton";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";

const RegistrationRequestModal = ({
	visible = true,
	onHide,
	clickedPartner,
}) => {
	const partners = [
		{ name: "Khalifa Fund", value: "Khalifa Fund" },
		{ name: "DIFC", value: "DIFC" },
		{ name: "WEWORK", value: "WEWORK" },
		{ name: "Ruwad", value: "Ruwad" },
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
				Send a Registration Request
			</h4>
			<p className="text-xs sm:text-sm text-muted">
				The Accounter offers special package prices for our partners members !
				If you are a our partners member fill the below fields👇
			</p>
		</div>
	);

	const footerContent = (
		<div className="flex items-center justify-end gap-[10px] px-8">
			<WhiteButton isBtn label="Cancel" classes="w-fit" onClick={onHide} />
			<DarkButton
				isBtn
				label="Send"
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
					<h6 className="required">Name</h6>
					<InputText
						type="text"
						value={formik.values.name}
						onChange={formik.handleChange}
						placeholder="Your name"
						name="name"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">Company Name</h6>
					<InputText
						type="text"
						value={formik.values.companyName}
						onChange={formik.handleChange}
						placeholder="Company Name"
						name="companyName"
					/>
					<small className="text-xs text-muted">
						Your company name as per Trade License
					</small>
				</div>
				<div className="input_holder">
					<h6 className="required">Partner</h6>
					<Dropdown
						value={formik.values.partner}
						onChange={(e) => formik.setFieldValue("partner", e.value)}
						options={partners}
						optionLabel="name"
						placeholder="Select a Partner"
						className="w-full"
						panelClassName="dropdown_menu"
						name="partners"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">File Number (with Khalifa Fund)</h6>
					<InputText
						type="text"
						value={formik.values.fileNumber}
						onChange={formik.handleChange}
						placeholder="File number"
						name="fileNumber"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">Email</h6>
					<InputText
						type="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						placeholder="Your email"
						name="email"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">Phone Number</h6>
					<InputText
						type="text"
						value={formik.values.phone}
						onChange={formik.handleChange}
						placeholder="Your phone number"
						name="phone"
					/>
				</div>
				<div className="input_holder">
					<h6>Message</h6>
					<InputTextarea
						value={formik.values.message}
						onChange={formik.handleChange}
						placeholder="Enter a message"
						name="message"
					/>
				</div>
			</form>
		</Dialog>
	);
};

export default RegistrationRequestModal;
