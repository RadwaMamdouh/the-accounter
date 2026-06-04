import Page from "components/Page/Page";

const AboutUs = () => {
	return (
		<Page title="About us">
			<h1 className="text-2xl lg:text-[32px] font-bold text-dark mb-6">
				About us
			</h1>
			<p className="text-sm text-dark mb-6">
				Accounting & Taxation is a core need for every company.
			</p>
			<h3 className="text-dark font-bold mb-6">Definitions</h3>
			<h4 className="text-dark font-bold mb-6">
				Small & Micro companies struggle because :
			</h4>
			<ul className="list-disc list-inside *:text-sm *:text-dark">
				<li>Its too Expensive to hire an accountant</li>
				<li>
					Available options like of accounting software are too complicated
				</li>
				<li>Freelance Accountants reduce quality of service</li>
			</ul>
			<p className="text-sm text-dark mb-6">
				The Accounter was found to resolve this. It is a Multisided Platform
				Business Model which connects accountants (offer) and SMEs (demand),
				offering cheaper Bookkeeping and Accounting Solution for SMEs and acts
				as an additional source of income for accountants.
			</p>
			<p className="text-sm text-dark mb-6">
				Established in 2020, The Accounter currently has data generated based on
				250K+ documents received from customers.
			</p>
		</Page>
	);
};

export default AboutUs;
