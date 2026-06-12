import Page from "components/Page/Page";

const CookiePolicy = () => {
	return (
		<Page title="Cookie Policy">
			<h1 className="text-2xl lg:text-[32px] font-bold text-dark mb-6">
				Cookies Policy
			</h1>

			<p className="text-sm text-dark mb-6">
				Last Updated: June 15, 2026
				<br />
				This Cookies Policy explains how The Accounter uses cookies and similar
				tracking technologies on our website and mobile application. It should
				be read alongside our Privacy Policy.
			</p>

			<h2 className="text-dark font-bold mb-6">
				SECTION 01 - WHAT ARE COOKIES
			</h2>

			<p className="text-sm text-dark mb-6">
				Cookies are small text files placed on your device when you visit a
				website. They allow the website to recognise your device, remember your
				preferences, and improve your experience over time. Cookies are widely
				used across the internet and are not inherently harmful.
			</p>

			<p className="text-sm text-dark mb-6">
				In addition to cookies, we may use similar technologies such as web
				beacons, pixels, and local storage for similar purposes. References to
				"cookies" in this policy include all such technologies unless stated
				otherwise.
			</p>

			<h2 className="text-dark font-bold mb-6">
				SECTION 02 - HOW WE USE COOKIES
			</h2>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>Keep you logged into your account securely across sessions</li>
				<li>Remember your preferences and settings</li>
				<li>Understand how visitors use our website so we can improve it</li>
				<li>Measure the effectiveness of our marketing and communications</li>
				<li>Detect and prevent fraudulent activity</li>
			</ul>

			<p className="text-sm text-dark mb-6">
				We do not use cookies to serve personalised advertising to third-party
				networks, and we do not sell cookie data.
			</p>

			<h2 className="text-dark font-bold mb-6">
				SECTION 03 - TYPES OF COOKIES WE USE
			</h2>

			<h3 className="text-dark font-bold mb-4">
				Essential Cookies (Always Active)
			</h3>

			<p className="text-sm text-dark mb-4">
				Required for core website functionality including secure login, session
				management, and access to your account. These cannot be disabled.
			</p>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>Duration: Session or up to 1 year</li>
				<li>Required: Yes — cannot be turned off</li>
			</ul>

			<h3 className="text-dark font-bold mb-4">
				Functional Cookies (Optional)
			</h3>

			<p className="text-sm text-dark mb-4">
				Remember your language preferences, region settings, and UI
				customisations to personalise your experience.
			</p>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>Duration: Up to 1 year</li>
				<li>Required: No — you can opt out</li>
			</ul>

			<h3 className="text-dark font-bold mb-4">Analytics Cookies (Optional)</h3>

			<p className="text-sm text-dark mb-4">
				Collect anonymised, aggregated data about how visitors interact with our
				site — pages visited, time spent, and navigation paths — to help us
				improve user experience.
			</p>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>Duration: Up to 2 years</li>
				<li>Required: No — you can opt out</li>
			</ul>

			<h2 className="text-dark font-bold mb-6">
				SECTION 04 - THIRD-PARTY COOKIES
			</h2>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>
					Analytics providers (e.g. Google Analytics) — to understand website
					traffic and user behaviour in aggregate
				</li>
				<li>
					Customer support tools — to enable live chat or support ticket
					functionality on our platform
				</li>
			</ul>

			<p className="text-sm text-dark mb-6">
				These third parties have their own privacy and cookie policies. We only
				work with providers who meet acceptable data protection standards.
			</p>

			<h2 className="text-dark font-bold mb-6">
				SECTION 05 - MANAGING YOUR PREFERENCES
			</h2>

			<ul className="list-disc list-inside text-sm text-dark mb-6 space-y-2">
				<li>Cookie consent banner — accept or decline non-essential cookies</li>
				<li>
					Browser settings — block or delete cookies (blocking essential cookies
					may affect functionality)
				</li>
				<li>
					Google Analytics opt-out —{" "}
					<a
						href="https://tools.google.com/dlpage/gaoptout"
						className="text-primary underline"
						target="_blank"
						rel="noreferrer">
						available here
					</a>
				</li>
			</ul>

			<p className="text-sm text-dark mb-6">
				Disabling non-essential cookies will not affect your ability to use our
				core accounting services.
			</p>

			<h2 className="text-dark font-bold mb-6">SECTION 06 - CONTACT US</h2>

			<p className="text-sm text-dark mb-2">
				<strong>The Accounter</strong>
			</p>

			<p className="text-sm text-dark mb-2">
				Fintech Hive, Zone D, Level 1 Gate Avenue, DIFC, Dubai, UAE
			</p>

			<p className="text-sm text-dark mb-2">
				Email: customersupport@theaccounter.com
			</p>

			<p className="text-sm text-dark mb-6">
				Website:
				<span className="text-blue-500 underline">www.theaccounter.com</span>
			</p>
		</Page>
	);
};

export default CookiePolicy;
