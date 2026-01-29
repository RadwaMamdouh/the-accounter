import Qtys from "components/Qtys/Qtys";

const FrequentlyQuestions = () => {
	const faqs = [
		{
			id: 1,
			question:
				"How is The Accounter different from QuickBooks or other accounting software?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 2,
			question: "How do I know my filings will be accurate?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 3,
			question: "What's included in each plan and how do I choose?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 4,
			question: "Do I need to visit your office or have physical meetings?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 5,
			question: "Do I need any accounting knowledge?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 6,
			question: "Can I cancel anytime?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 7,
			question: "Can I access The Accounter on my mobile phone or tablet?",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
	];

	return (
		<section className="py-8 lg:py-[100px]">
			<div className="container">
				<div className="mb-8 lg:mb-[50px]">
					<h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark text-center mb-3">
						Frequently Asked Questions
					</h2>
					<p className="text-sm text-dark text-center">
						Everything you need to know about The Accounter
					</p>
				</div>
				<div className="lg:px-[100px]">
					<Qtys faqs={faqs} />
				</div>
			</div>
		</section>
	);
};

export default FrequentlyQuestions;
