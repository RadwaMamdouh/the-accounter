import FaqsTutorialsHead from "components/FaqsTutorialsHead/FaqsTutorialsHead";
import Page from "components/Page/Page";
import Qtys from "components/Qtys/Qtys";
import { search } from "icons/index";
import { InputText } from "primereact/inputtext";
import { useMemo, useState } from "react";

const faqs = [
	{
		id: 1,
		question: "Which accounting software is best for small businesses?",
		questionAr: "Which accounting software is best for small businesses?",
		answer:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		answerAr:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
	},
	{
		id: 2,
		question: "How do I register?",
		questionAr: "How do I register?",
		answer:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		answerAr:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
	},
	{
		id: 3,
		question: "I have forgotten my password. How do I change it?",
		questionAr: "I have forgotten my password. How do I change it?",
		answer:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		answerAr:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
	},
	{
		id: 4,
		question: "What are the system Requirements for The Accounter?",
		questionAr: "What are the system Requirements for The Accounter?",
		answer:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		answerAr:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
	},
	{
		id: 5,
		question: "Can I access The Accounter on my mobile phone or tablet?",
		questionAr: "Can I access The Accounter on my mobile phone or tablet?",
		answer:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		answerAr:
			"-Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
	},
];

const FAQs = () => {
	const [searchTerm, setSearchTerm] = useState("");

	// Filter FAQs
	const filteredFaqs = useMemo(() => {
		if (!searchTerm) return faqs;

		return faqs.filter(
			(faq) =>
				faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
				faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm]);

	return (
		<Page title="Frequently Asked Questions">
			<FaqsTutorialsHead
				headTitle="Frequently Asked Questions"
				headDesc="We do your Accounting, So you do better Business.">
				<div className="relative overflow-hidden w-full lg:w-1/2 max-w-full mx-auto">
					<span className="w-5 h-5 text-muted flex items-center justify-center *:w-full *:h-full absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3">
						{search}
					</span>
					<InputText
						type="text"
						name="search"
						placeholder="Ask a question..."
						className="bg-white block py-[10px] lg:py-4 px-[10px] lg:px-3 !ps-10 border border-border-light rounded-md w-full outline-0 focus-visible:outline-none transition-all duration-300 hover:border-primary"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</FaqsTutorialsHead>

			{/* FAQs */}
			<section className="py-8 lg:py-14">
				<div className="container">
					<div className="lg:w-4/5 max-w-full mx-auto">
						<h2 className="text-xl font-bold text-dark mb-6">
							About The Accounter
						</h2>
						<Qtys faqs={filteredFaqs} />
					</div>
				</div>
			</section>
		</Page>
	);
};

export default FAQs;
