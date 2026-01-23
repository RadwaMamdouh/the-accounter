import { check } from "icons/index";
import styles from "./GetStartedToday.module.css";
import { useFormik } from "formik";
import DarkButton from "components/DarkButton/DarkButton";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const GetStartedToday = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			pnone: "",
			companyName: "",
			message: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<section className="pb-28">
			<div className={styles.started_head}>
				<div className="container mx-auto px-4">
					<h2 className="text-xl lg:text-4xl font-bold text-dark text-center lg:text-start lg:w-[27%] max-w-full">
						Get Started With The Accounter Today!
					</h2>
				</div>
			</div>
			<div className={styles.started_body}>
				<div className="container mx-auto px-4">
					<div className="flex items-start justify-between gap-6 lg:gap-[100px] max-lg:flex-col">
						<div className="pt-6 lg:pt-10 w-full">
							<p className="text-sm text-dark mb-8">
								This can be the smartest business decision you'll make this
								year.
							</p>
							<ul className="flex flex-col gap-2">
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										Save 15+ hours monthly and focus on growing your business.
										We handle all Accounting & taxes.
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										Save up to 15,000 AED yearly vs. traditional accounting.
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										Stay 100% FTA compliant. We guarantee zero penalties.
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										FREE invoicing software & bank reconciliation included.
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										Real-time mobile dashboard with 24/7 access.
									</span>
								</li>
								<li className="flex items-center justify-start gap-[10px] lg:gap-2">
									<span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center *:w-5 *:h-5">
										{check}
									</span>
									<span className="text-sm text-dark">
										Cancel anytime. No long-term contracts.
									</span>
								</li>
							</ul>
						</div>
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
											value={formik.name}
											onChange={formik.handleChange}
											placeholder="Your name"
											name="name"
										/>
									</div>
									<div className="input_holder">
										<h6 className="required">Email</h6>
										<InputText
											type="email"
											value={formik.email}
											onChange={formik.handleChange}
											placeholder="Your email"
											name="email"
										/>
									</div>
									<div className="input_holder">
										<h6 className="required">Phone Number</h6>
										<InputText
											type="text"
											value={formik.phone}
											onChange={formik.handleChange}
											placeholder="Your phone number"
											name="phone"
										/>
									</div>
									<div className="input_holder">
										<h6 className="required">Company Name</h6>
										<InputText
											type="text"
											value={formik.companyName}
											onChange={formik.handleChange}
											placeholder="Company Name"
											name="companyName"
										/>
									</div>
									<div className="input_holder">
										<h6>Message</h6>
										<InputTextarea
											value={formik.message}
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStartedToday;
