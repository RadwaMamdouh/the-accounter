import Qtys from "components/Qtys/Qtys";
import { useTranslation } from "react-i18next";

const FrequentlyQuestions = () => {
	const { t } = useTranslation();

	const faqs = [
		{
			id: 1,
			question:
				"How is The Accounter different from QuickBooks or other accounting software?",
			questionAr: "ما الفرق بين ذا أكونتر وأي برنامج محاسبة آخر؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 2,
			question: "How do I know my filings will be accurate?",
			questionAr: "كيف أعرف أن إقراراتي ستكون دقيقة؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 3,
			question: "What's included in each plan and how do I choose?",
			questionAr: "ما المشمول في كل خطة وكيف أختار؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 4,
			question: "Do I need to visit your office or have physical meetings?",
			questionAr: "هل أحتاج لزيارة مكتبكم أو عقد اجتماعات حضورية؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 5,
			question: "Do I need any accounting knowledge?",
			questionAr: "هل أحتاج لأي معرفة محاسبية؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 6,
			question: "Can I cancel anytime?",
			questionAr: "هل يمكنني الإلغاء في أي وقت؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
		{
			id: 7,
			question: "Can I access The Accounter on my mobile phone or tablet?",
			questionAr:
				"هل يمكنني الوصول إلى برنامج ذا أكونتر من هاتفي الجوال أو الجهاز اللوحي؟",
			answer:
				"Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu quisque venenatis. Pulvinar pulvinar sodales nibh venenatis porta semper nunc etiam. Ultricies quam porta tempor elit malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus eu eget. Lacus non augue a orci tristique posuere nisi sed dapibus. Quis in eget quam fusce. Nibh laoreet enim semper gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus maecenas iaculis egestas facilisi turpis feugiat egestas. Sit consectetur viverra vulputate id enim mattis pretium. Tellus orci praesent auctor erat. Convallis dictumst congue pulvinar mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit hendrerit iaculis. At faucibus pretium montes nam urna. Felis varius amet sed interdum.",
		},
	];

	return (
		<section className="py-8 lg:py-[100px]">
			<div className="container">
				<div className="mb-8 lg:mb-[50px]">
					<h6 className="text-sm text-primary text-center uppercase mb-3">
						{t("frequentlyAskedQuestions")}
					</h6>
					<h2 className="text-xl lg:text-[32px] font-bold text-dark text-center mb-3">
						Everything you need to know.
					</h2>
					<p className="text-sm text-dark text-center">
						Still have questions? Book a free consultation our team will walk
						you through everything.
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
