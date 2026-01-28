import { useFormik } from "formik";
import DarkButton from "components/DarkButton/DarkButton";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const LeaveMessageForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			companyName: "",
			message: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="p-4 lg:p-8 bg-white border border-border-light rounded-lg lg:-mt-28 w-full">
			<div className="mb-4 lg:mb-6">
				<h4 className="font-bold text-dark mb-1">Leave a message</h4>
				<p className="text-sm text-muted">
					Lorem ipsum dolor sit amet consectetur.
				</p>
			</div>
			<form
				onSubmit={formik.handleSubmit}
				className="grid grid-cols-1 gap-4 lg:gap-6">
				<div className="grid grid-cols-1 gap-5">
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
						<h6 className="required">Company Name</h6>
						<InputText
							type="text"
							value={formik.values.companyName}
							onChange={formik.handleChange}
							placeholder="Company Name"
							name="companyName"
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
				</div>

				<DarkButton
					isBtn
					type="submit"
					label="Book Free Call"
					classes="w-fit"
				/>
			</form>
		</div>
	);
};

export default LeaveMessageForm;
