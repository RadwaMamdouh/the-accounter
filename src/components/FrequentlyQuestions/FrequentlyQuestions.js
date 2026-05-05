import Qtys from "components/Qtys/Qtys";
import { useTranslation } from "react-i18next";

const FrequentlyQuestions = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language;

	const faqs = [
		{
			id: 1,
			question:
				"How is The Accounter different from QuickBooks or other accounting software?",
			questionAr: "ما الفرق بين The Accounter وبرامج المحاسبة مثل QuickBooks؟",
			answer:
				"Software can help with some tasks, but it doesn't do everything. You still need to categorize transactions, prepare and submit reports, and ensure their accuracy. The Accountant, however, provides you with software and a team of certified accountants who handle all of that for you. All you have to do is upload the documents.",
			answerAr:
				" البرامج تساعد في تنفيذ بعض المهام، لكنها لا تقوم بالعمل كاملًا. ما زلت بحاجة إلى تصنيف العمليات، إعداد الإقرارات، تقديمها، والتأكد من دقتها. أما The Accounter فيوفر لك البرنامج وفريقًا من المحاسبين المعتمدين الذين يتولّون كل ذلك نيابةً عنك. كل ما عليك هو رفع المستندات.",
		},
		{
			id: 2,
			question: "How do I know my filings will be accurate?",
			questionAr: "كيف أضمن دقة الإقرارات؟",
			answer:
				"Every declaration undergoes six levels of review by certified accountants before being submitted to the authority. In the event of any error that results in a penalty, we are committed to paying it. This is our guarantee of full compliance.",
			answerAr:
				" كل إقرار يمر عبر 6 مستويات مراجعة من قبل محاسبين معتمدين وقبل تقديمه للهيئة. وفي حالة حدوث أي خطأ يترتب عليه غرامة، نلتزم نحن بسدادها. هذا هو ضمان الامتثال الكامل لدينا.",
		},
		{
			id: 3,
			question: "Do I need to visit your office or have physical meetings?",
			questionAr: "هل أحتاج إلى زيارة المكتب أو حضور اجتماعات؟",
			answer:
				"No! The service is entirely digital. You upload your documents via the app, and we take care of everything, without any visits or meetings.",
			answerAr:
				"لا! الخدمة رقمية بالكامل. ترفع مستنداتك عبر التطبيق، ونحن نتولى كل شيء، دون أي زيارات أو اجتماعات.",
		},
		{
			id: 4,
			question: "Do I need any accounting knowledge?",
			questionAr: "هل أحتاج إلى معرفة محاسبية لاستخدام الخدمة؟",
			answer:
				"You don't need any prior information. You don't need to know the details of taxes or accounting standards. Just upload your documents, and our team will take care of everything.",
			answerAr:
				"لا تحتاج لأي معلومات مُسبقة. لست مضطرًا لمعرفة تفاصيل الضريبة أو المعايير المحاسبية. فقط ارفع مستنداتك، وفريقنا يتولى كل شيء.",
		},
		{
			id: 5,
			question: "How long does it take to set up an account?",
			questionAr: " كم يستغرق إعداد الحساب؟",
			answer:
				"After booking the free consultation, your account setup will begin in 48 to 96 hours, ensuring everything is set up correctly from the start.",
			answerAr:
				"بعد حجز الاستشارة المجانية، يبدأ إعداد حسابك بالكامل في مدة من 48 إلى 96 ساعة، مع التأكد من ضبط كل شيء بشكل صحيح من البداية.",
		},
		{
			id: 6,
			question:
				"What if I have a point-of-sale system that has a large number of daily transactions?",
			questionAr:
				"ماذا لو كان لديّ نظام نقاط بيع يحتوي على عدد كبير من العمليات اليومية؟",
			answer:
				"Point-of-sale transactions can be aggregated into a single report, instead of being calculated separately. Our team will determine the most suitable configuration during the setup phase.",
			answerAr:
				"يمكن تجميع عمليات نقاط البيع في تقرير واحد، بدلًا من احتساب كل عملية بشكل منفصل. وسيتولّى فريقنا تحديد الإعداد الأنسب خلال مرحلة التهيئة.",
		},
		{
			id: 7,
			question: "Can I cancel anytime?",
			questionAr: "هل يمكنني الإلغاء في أي وقت؟",
			answer:
				"Yes! There are no long-term contracts. You can cancel your subscription at any time, with the guarantee that all records and documents will be received in an organized manner.",
			answerAr:
				"نعم! لا توجد عقود طويلة الأجل. يمكنك إلغاء الاشتراك في أي وقت، مع ضمان استلام جميع السجلات والمستندات بشكل منظم.",
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
						{t("everythingYouNeedToKnow")}
					</h2>
					<p className="text-sm text-dark text-center">
						{currentLanguage === "ar"
							? "هل لديك أسئلة أخرى؟ احجز استشارة مجانية، وسيقوم فريقنا بشرح كل شيء لك."
							: "Still have questions? Book a free consultation our team will walk you through everything."}
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
