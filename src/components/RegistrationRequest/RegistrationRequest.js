import DarkButton from "components/DarkButton/DarkButton";
import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
// import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useRef } from "react";

const RegistrationRequest = ({ clickedPartner, onClickPartner }) => {
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
			setFieldValue("partner", clickedPartner);
		}
	}, [clickedPartner, setFieldValue]);

	return (
		<div className="p-4 lg:p-8 bg-white border border-border-light rounded-lg lg:-mt-28 w-full">
			<div className="mb-6">
				<h4 className="text-xs lg:text-base font-bold text-dark mb-1">
					Send a Registration Request
				</h4>
				<p className="text-xs sm:text-sm text-muted">
					The Accounter offers special package prices for our partners members!
					If you are a partner member, fill the below fields
				</p>
			</div>
			<form
				ref={formRef}
				onSubmit={formik.handleSubmit}
				className="grid grid-cols-1 gap-5">
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
						onChange={(e) => {
							formik.setFieldValue("partner", e.value);
							onClickPartner(e.value);
						}}
						options={partners}
						optionLabel="name"
						placeholder="Select a Partner"
						className="w-full"
						panelClassName="dropdown_menu"
						name="partners"
					/>
				</div>
				<div className="input_holder">
					<h6 className="required">File Number (with {clickedPartner})</h6>
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
						label="Send"
						classes="w-fit"
						onClick={() => formRef.current?.requestSubmit()}
					/>
				</div>
			</form>
		</div>
	);
};

export default RegistrationRequest;
