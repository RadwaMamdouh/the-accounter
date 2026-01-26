import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./FrequentlyQuestions.module.css";

const FrequentlyQuestions = () => {
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
					<Accordion activeIndex={0} className={styles.faqs}>
						<AccordionTab header="How is The Accounter different from QuickBooks or other accounting software?">
							<p>The Accounter of course!</p>
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="How do I know my filings will be accurate?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="What's included in each plan and how do I choose?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="Do I need to visit your office or have physical meetings?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="Do I need any accounting knowledge?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="Can I cancel anytime?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
						<AccordionTab header="Can I access The Accounter on my mobile phone or tablet?">
							<p>
								Lorem ipsum dolor sit amet consectetur. Mi porta mauris eu
								quisque venenatis. Pulvinar pulvinar sodales nibh venenatis
								porta semper nunc etiam. Ultricies quam porta tempor elit
								malesuada sollicitudin. Mi orci sit laoreet a et facilisi lectus
								eu eget. Lacus non augue a orci tristique posuere nisi sed
								dapibus. Quis in eget quam fusce. Nibh laoreet enim semper
								gravida fringilla. Nisl ipsum risus faucibus in. Felis tellus
								maecenas iaculis egestas facilisi turpis feugiat egestas. Sit
								consectetur viverra vulputate id enim mattis pretium. Tellus
								orci praesent auctor erat. Convallis dictumst congue pulvinar
								mattis malesuada vitae arcu. Viverra ut velit amet nisi blandit
								hendrerit iaculis. At faucibus pretium montes nam urna. Felis
								varius amet sed interdum.
							</p>
						</AccordionTab>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FrequentlyQuestions;
