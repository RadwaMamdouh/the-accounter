import DarkButton from "components/DarkButton/DarkButton";
import { useFormik } from "formik";
import { mail } from "icons/index";
import { InputText } from "primereact/inputtext";

const SubscribeBlog = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="p-8 bg-primary-bg rounded-lg flex flex-col gap-8">
			<div className="flex items-center justify-center w-[78px] h-[78px] rounded-full bg-white *:w-[45px] *:max-w-full">
				<img src="/images/email.svg" alt="" />
			</div>
			<div>
				<h2 className="text-2xl lg:text-[32px] font-bold text-dark mb-4">
					Subscribe to our blog
				</h2>
				<p className="text-sm text-dark">Get the latest posts to your email</p>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className="relative mb-4">
					<span className="w-5 h-5 flex items-center justify-center text-muted *:w-full *:h-full absolute top-1/2 -translate-y-1/2 inset-3">
						{mail}
					</span>
					<InputText
						type="text"
						value={formik.values.email}
						onChange={formik.handleChange}
						placeholder="Enter Email"
						name="email"
						className="py-[10px] lg:py-4 px-[10px] lg:px-3 !ps-10 rounded-md bg-white border border-border-light w-full outline-none focus-visible:outline-0 transition-all duration-300 hover:border-primary"
					/>
				</div>
				<DarkButton
					isBtn
					type="submit"
					label="Subscribe"
					classes="w-full !py-3"
				/>
			</form>
		</div>
	);
};

export default SubscribeBlog;
