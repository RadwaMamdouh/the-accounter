import { useFormik } from "formik";
import DarkButton from "components/DarkButton/DarkButton";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useTranslation } from "react-i18next";

const LeaveMessageForm = () => {
	const { t } = useTranslation();

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
				<h4 className="font-bold text-dark">{t("bookFreeConsultation")}</h4>
			</div>
			<form
				onSubmit={formik.handleSubmit}
				className="grid grid-cols-1 gap-4 lg:gap-6">
				<div className="grid grid-cols-1 gap-5">
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
						<h6 className="required">{t("companyName")}</h6>
						<InputText
							type="text"
							value={formik.values.companyName}
							onChange={formik.handleChange}
							placeholder={t("companyName")}
							name="companyName"
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
				</div>

				<DarkButton isBtn type="submit" label={t("submit")} classes="w-fit" />
			</form>
		</div>
	);
};

export default LeaveMessageForm;
