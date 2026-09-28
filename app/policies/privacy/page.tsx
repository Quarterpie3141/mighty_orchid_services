import PolicyLayout, {
	Copyright,
	ExternalLink,
	H2,
	H3,
	H4,
	P,
	UL,
} from "../components/PolicyLayout";

export const metadata = {
	title: "Privacy Policy | Mighty Orchid Services",
	description:
		"How Mighty Orchid Services Pty Ltd collects, uses, discloses and protects your personal information.",
};

export default function PrivacyPolicy() {
	return (
		<PolicyLayout
			eyebrow="Privacy"
			title="Privacy Policy"
			lastUpdated="11 September 2026"
		>
			<P>
				Mighty Orchid Services Pty Ltd (ABN 673 232 632) (<strong>we</strong>,{" "}
				<strong>us</strong> or <strong>our</strong>) is committed to protecting
				your privacy. This policy explains how we collect, use and protect your
				personal information. It applies to all personal information we handle,
				whether we collect it through our website, in person, or through other
				means.
			</P>

			<H2>Quick overview</H2>
			<UL>
				<li>
					We collect information you provide to us and information we gather
					when we interact with you
				</li>
				<li>
					We use this information to provide our services and improve your
					experience
				</li>
				<li>We protect your information using secure systems and processes</li>
				<li>
					You have rights regarding your personal information, including access
					and correction rights
				</li>
			</UL>

			<H2>Information we collect</H2>
			<P>
				We may collect your personal information and, where relevant, the
				personal information of your dependent (meaning any person (child or
				adult) for whom you are the legal representative or guardian).
			</P>

			<H4>Identity and contact details</H4>
			<UL>
				<li>Name, address, email address and phone number</li>
				<li>Professional details</li>
				<li>
					National Disability Insurance Scheme (NDIS) plan details and reference
					number.
				</li>
			</UL>

			<H4>Service related information</H4>
			<UL>
				<li>
					Payment and transaction details for services you've purchased from us
					or enquiries about our services
				</li>
				<li>
					Your preferences for our services and your marketing preferences
				</li>
				<li>Feedback and survey responses</li>
			</UL>

			<H4>Digital information</H4>
			<UL>
				<li>
					IP address and general location information derived from your IP
					address
				</li>
				<li>Search and browsing behaviour</li>
				<li>Website usage patterns</li>
				<li>Cookie preferences</li>
			</UL>

			<H4>Recordings</H4>
			<UL>
				<li>Call recordings</li>
				<li>Records of meetings and decisions</li>
			</UL>

			<H4>Professional information (for job applicants and workers)</H4>
			<UL>
				<li>Employment history</li>
				<li>Professional experience</li>
				<li>Required authorisations and licences</li>
				<li>Professional registrations</li>
				<li>
					Information about your right to work in the relevant jurisdiction
				</li>
			</UL>

			<H3>Sensitive Information</H3>
			<P>
				We handle sensitive information with extra care and protection, and we
				only collect this information with your consent or when legally
				permitted. This includes:
			</P>

			<H4>Health information</H4>
			<UL>
				<li>
					Individual or family medical history (to provide healthcare services
					and support tailored to your needs/ to ensure we can provide safe and
					appropriate services)
				</li>
				<li>Treatment reports</li>
				<li>
					Support plans and assessments (to coordinate care with your healthcare
					providers and support team)
				</li>
				<li>
					Disability information including support needs and any behaviours of
					concern (to develop and implement your support)
				</li>
				<li>Any relevant NDIS plan</li>
			</UL>

			<H4>Cultural and background information</H4>
			<UL>
				<li>
					Racial or ethnic origin (to provide culturally appropriate services)
				</li>
				<li>Religious beliefs (when relevant)</li>
				<li>
					Criminal record checks (if we need to verify your background before
					hiring you)
				</li>
				<li>
					Professional memberships (to assess the suitability for employment)
				</li>
			</UL>

			<H2>How we collect personal information</H2>
			<UL>
				<li>
					<strong>Directly from you when you:</strong> interact with us, contact
					us, fill out forms.
				</li>
				<li>
					<strong>Automatically when you:</strong> visit our website, use our
					technologies, interact with our online services.
				</li>
				<li>
					<strong>From third parties:</strong> service providers, business
					partners, public sources, government organisations and organisations
					or people authorised by you.
				</li>
				<li>
					<strong>From publicly available sources:</strong> such as ASIC and
					other regulatory bodies and professional networking sites such as
					LinkedIn.
				</li>
				<li>
					<strong>From third parties (NDIA related):</strong> such as the
					National Disability Insurance Agency (NDIA) and any other third party
					authorised by you such as your support coordinator and your plan
					manager.
				</li>
			</UL>

			<H2>Why we collect, hold, use and disclose personal information</H2>
			<P>
				We collect and use your personal information to run our business and
				provide our services as set out below.
			</P>

			<H3>Business operations</H3>
			<UL>
				<li>To manage our relationship with you as a customer or supplier</li>
				<li>To process and deliver our services</li>
				<li>To handle your inquiries, support requests, and communications</li>
				<li>To maintain accurate records for billing and administration</li>
			</UL>
			<H4>Client onboarding and verification</H4>
			<UL>
				<li>
					To assess whether to take you on as a new client or provide services
					to you, including background checks when required or permitted by law
				</li>
				<li>To retain records of verification checks as required by law</li>
			</UL>

			<H3>Communication and support</H3>
			<UL>
				<li>To respond to your questions and support requests</li>
				<li>To communicate important updates about our services</li>
				<li>To handle inquiries made through our website or platforms</li>
				<li>
					To manage your participation in surveys, feedback sessions, or events
				</li>
			</UL>

			<H3>Service improvement</H3>
			<UL>
				<li>To conduct analytics and market research</li>
				<li>To improve our business operations and services</li>
				<li>To develop and enhance our applications and platforms</li>
				<li>To understand how our services are used</li>
			</UL>

			<H3>Marketing and promotions</H3>
			<UL>
				<li>
					To send you promotional information about our services and events
				</li>
				<li>To inform you about services that may interest you</li>
				<li>To manage your marketing preferences</li>
				<li>To run competitions, promotions, and special offers</li>
				<li>To provide additional benefits to our customers</li>
			</UL>

			<H3>Employment purposes</H3>
			<UL>
				<li>To assess employment applications</li>
				<li>To evaluate candidate qualifications</li>
				<li>To manage professional certifications and licences</li>
				<li>To maintain employment records</li>
			</UL>

			<H3>Legal and compliance</H3>
			<UL>
				<li>To comply with our legal obligations</li>
				<li>To respond to court orders or legal processes</li>
				<li>To maintain required business records</li>
				<li>To fulfill regulatory requirements or reporting obligations</li>
				<li>
					To protect our legal rights and interests or as authorised by law
				</li>
			</UL>

			<H2>Our disclosures of personal information to third parties</H2>
			<P>We may disclose personal information to:</P>

			<H3>Service providers</H3>
			<UL>
				<li>IT service providers</li>
				<li>Data storage providers</li>
				<li>Web hosting and server providers</li>
				<li>Payment processors</li>
				<li>Marketing and advertising providers</li>
				<li>Analytics providers</li>
				<li>
					Identity verification and compliance screening service providers
				</li>
			</UL>

			<H3>Professional advisers</H3>
			<UL>
				<li>Bankers</li>
				<li>Auditors</li>
				<li>Insurers and insurance brokers</li>
				<li>Legal advisers</li>
				<li>
					The NDIA, your support coordinator, your plan manager and other health
					care professionals or persons/entities as necessary to provide our
					services
				</li>
			</UL>

			<H3>Business partners</H3>
			<UL>
				<li>Our existing or potential agents</li>
				<li>Our business partners or contractors</li>
			</UL>

			<H3>Corporate transactions</H3>
			<P>
				If we merge with or are acquired by another company, or sell our
				business assets:
			</P>
			<UL>
				<li>Your information may be disclosed to our advisers</li>
				<li>
					Your information may be disclosed to the potential purchaser's
					advisers
				</li>
				<li>Your information may be included in the transferred assets</li>
			</UL>

			<H3>Legal and regulatory bodies</H3>
			<UL>
				<li>Courts and tribunals</li>
				<li>
					Regulatory authorities including as required for reporting obligations
				</li>
				<li>Law enforcement officers</li>
			</UL>

			<H3>Other parties</H3>
			<UL>
				<li>Third parties you have authorised</li>
				<li>Emergency services when necessary</li>
				<li>Any other parties as required or permitted by law</li>
			</UL>

			<H2>Overseas disclosure</H2>

			<H3>Storage and access</H3>
			<P>
				We store your personal information in Australia. However, your
				information may be accessed from or transferred to locations outside
				Australia in these circumstances:
			</P>
			<UL>
				<li>When our service providers are located overseas</li>
				<li>When we work with overseas business partners</li>
				<li>When using cloud-based services or data storage solutions</li>
			</UL>

			<H3>Our approach to overseas disclosure</H3>
			<P>
				Before disclosing your personal information overseas, we take reasonable
				steps to ensure that the recipient treats your information in accordance
				with applicable law by only sending what is necessary, requiring
				recipients to protect your information through contractual agreements
				which require the recipient to comply with the privacy standards in
				applicable law or through other mechanisms that provide comparable
				safeguards and by monitoring how recipients handle your information.
			</P>

			<H2>Your privacy rights and choices</H2>

			<H3>Providing information</H3>
			<P>
				You can choose whether to provide personal information to us, however,
				if you don't provide certain information, we may not be able to provide
				some services. Let us know if you don’t want to provide information and
				we will let you know when information is required versus optional.
			</P>

			<H3>Access to your information</H3>
			<P>
				You can request access to the personal information we hold about you and
				we will respond to your request within a reasonable time. We may charge
				a reasonable administrative fee for providing access and if we cannot
				provide access, we will explain why and explore alternative ways to
				share relevant information.
			</P>

			<H3>Correction rights</H3>
			<P>
				You can ask us to correct any information that is inaccurate, out of
				date, incomplete, irrelevant or misleading and we will take reasonable
				steps to correct your information promptly. If we cannot make the
				correction, we will explain why and discuss alternatives. You can ask us
				to add a statement to your information noting your requested correction.
			</P>

			<H3>Marketing communications</H3>
			<P>
				You can opt-out of receiving marketing communications at any time. Each
				marketing communication will include an unsubscribe option. You can
				change your marketing preferences by contacting us. We will process your
				request as soon as practicable.
			</P>

			<H3>
				How to contact us about your rights or to make a complaint and what
				happens next
			</H3>

			<H4>Step 1: Contact our privacy officer</H4>
			<UL>
				<li>
					Email:{" "}
					<a
						href="mailto:info@mtos.com.au"
						className="text-mto-blue hover:text-mto-orange underline"
					>
						info@mtos.com.au
					</a>
				</li>
				<li>
					Phone:{" "}
					<a
						href="tel:+61851067301"
						className="text-mto-blue hover:text-mto-orange underline"
					>
						+61 8 5106 7301
					</a>
				</li>
				<li>
					Post: 51/5-15 Sharpe Avenue, Karratha Village Business Centre,
					Karratha, WA 6714
				</li>
			</UL>
			<P>What to include:</P>
			<P>
				Your full name, contact details, clear details about your request or
				complaint, and any relevant dates or reference numbers.
			</P>

			<H4>Step 2: Our response</H4>
			<P>We will:</P>
			<UL>
				<li>Verify your identity before processing your request</li>
				<li>
					Investigate thoroughly (for complaints) or process your request (for
					rights)
				</li>
				<li>
					Respond to you in writing within reasonable timeframes and as required
					by law
				</li>
				<li>
					Explain what actions we will take and keep you updated on progress
				</li>
				<li>
					Not charge you for making a request (except for reasonable access fees
					if applicable)
				</li>
				<li>Help you understand and exercise your rights</li>
			</UL>

			<H4>Step 3: If you're not satisfied (complaints only)</H4>
			<P>
				If you're not satisfied with our response to your complaint, you can:
			</P>
			<UL>
				<li>Ask for a review by our senior management, or</li>
				<li>
					Contact external bodies:
					<UL>
						<li>
							Australian residents: Office of the Australian Information
							Commissioner (Phone: 1300 363 992, Website:{" "}
							<ExternalLink href="www.oaic.gov.au" />)
						</li>
						<li>
							NDIS participants:
							<UL>
								<li>
									NDIS Quality and Safeguards Commission (Phone: 1800 035 544,
									Website: <ExternalLink href="www.ndiscommission.gov.au" />)
								</li>
								<li>
									NDIA (Phone 1800 800 110 or TTY 133 677 National Relay Service
									– ask for 1800 035 544, Website:{" "}
									<ExternalLink href="www.ndis.gov.au" />
								</li>
							</UL>
						</li>
					</UL>
				</li>
			</UL>
			<P>
				This is the same process whether you want to access your information,
				correct mistakes, change marketing preferences, or make a complaint
				about our privacy practices.
			</P>

			<H2>Protecting your information</H2>
			<P>We use multiple layers of security to protect your information.</P>

			<H3>Technical safeguards</H3>
			<UL>
				<li>Enterprise-grade encryption for data storage and transmission</li>
				<li>Regular security testing and monitoring</li>
				<li>Automated threat detection systems</li>
			</UL>

			<H3>Operational security</H3>
			<UL>
				<li>Staff training on security and privacy</li>
				<li>Strict access controls based on job requirements</li>
				<li>
					Regular security audits and incident response procedures testing
				</li>
			</UL>

			<H3>Physical security</H3>
			<UL>
				<li>Secure premises with controlled access</li>
				<li>Secure disposal of physical documents</li>
				<li>Equipment security protocols</li>
			</UL>

			<H3>Public information</H3>
			<P>
				Please note that any information you choose to share publicly on online
				platforms (such as comments or reviews) can be accessed and used by
				others. We cannot control or protect information that you make publicly
				available.
			</P>

			<H2>How long we keep your information</H2>
			<P>
				We keep your personal information only as long as we need it for the
				purposes we collected it, or as required by law. When we no longer need
				it, we securely destroy or de-identify it.
			</P>

			<H2>Cookies and Analytics</H2>

			<H3>What We Use</H3>
			<P>
				We use cookies, tracking pixels, and similar technologies on our website
				and in our emails to improve your experience and our services.
			</P>

			<H3>Cookies</H3>
			<UL>
				<li>Small text files stored on your device</li>
				<li>Help remember your preferences</li>
				<li>Enable certain website functions</li>
				<li>Make your interactions with our website more efficient</li>
			</UL>

			<H3>Tracking Pixels</H3>
			<UL>
				<li>Tiny, invisible images in web pages and emails</li>
				<li>Help us understand how you interact with our content</li>
				<li>Allow us to measure email engagement</li>
				<li>Enable more relevant content delivery</li>
			</UL>

			<H3>How we use these technologies</H3>

			<H4>Essential Functions</H4>
			<UL>
				<li>Remember your login status</li>
				<li>Maintain your session security</li>
				<li>Store your preferences</li>
				<li>Enable core website features</li>
			</UL>

			<H4>Analytics and Performance</H4>
			<UL>
				<li>Understand how our website is used</li>
				<li>Measure page views and traffic</li>
				<li>Analyse user navigation patterns</li>
				<li>Identify areas for improvement</li>
			</UL>

			<H4>Personalisation</H4>
			<UL>
				<li>Remember your preferences</li>
				<li>Tailor content to your interests</li>
				<li>Improve your browsing experience</li>
				<li>Provide relevant recommendations</li>
			</UL>

			<H3>Your control</H3>
			<P>You can manage these technologies by:</P>
			<UL>
				<li>Adjusting your browser settings to block or delete cookies</li>
				<li>Using privacy-focused browser extensions</li>
				<li>Configuring your email client to block images</li>
				<li>Using our cookie preference settings</li>
			</UL>
			<P>
				Note: Blocking all cookies may affect website functionality and your
				user experience.
			</P>

			<H3>Google Analytics</H3>
			<P>
				We use Google Analytics to understand how people use our website. This
				involves cookies that collect information about your browsing activity.
				You can opt out of Google's advertising features through your Google
				account settings, browser add-ons, or your device's privacy settings.
				Google provides various tools and options to control how your data is
				used for advertising purposes. You can learn more about how Google uses
				your data and your available options on Google's privacy pages.
			</P>

			<H3>Meta advertising tools</H3>
			<P>
				We use Meta's advertising tools (such as Meta Pixel) to understand how
				our ads perform and to show you more relevant advertisements on Meta
				platforms like Facebook and Instagram when you visit our website or app.
				You can manage whether we connect information from our website with your
				Meta account for advertising purposes by adjusting your settings within
				your Meta account preferences.
			</P>

			<H2>Artificial Intelligence (AI) Technologies</H2>

			<H3>Overview</H3>
			<P>
				We use artificial intelligence and machine learning technologies in our
				business operations and services, including AI tools provided by third
				parties. We only use these technologies when legally permitted and
				necessary for our business.
			</P>

			<H3>How we use AI</H3>
			<P>We may use AI technologies to:</P>
			<UL>
				<li>Improve and optimise our services and operations</li>
				<li>Automate routine tasks and communications</li>
				<li>Personalise your experience with our services</li>
				<li>Support quality assurance processes</li>
				<li>Assist with customer support and queries</li>
			</UL>

			<H3>Data protection and security</H3>
			<P>
				When we work with third-party AI providers, we ensure they handle your
				personal information in accordance with privacy laws through contractual
				requirements and appropriate safeguards.
			</P>

			<H3>Your rights and our commitments</H3>
			<P>
				Any information generated or inferred about you by AI technologies is
				treated as personal information, and you maintain all the rights
				outlined in this privacy policy. When using AI with your personal
				information, we commit to:
			</P>

			<H4>Transparency and control</H4>
			<UL>
				<li>
					We'll inform you when AI is used to make decisions that may
					significantly affect you
				</li>
				<li>
					We maintain human oversight and review of significant AI-generated
					decisions
				</li>
				<li>
					Our staff are trained to understand AI limitations and verify outputs
					before relying on them
				</li>
				<li>
					We implement processes to verify the accuracy of AI-generated outputs
				</li>
			</UL>

			<H4>Security</H4>
			<UL>
				<li>
					We use appropriate technical and organisational measures to maintain
					the security and integrity of your personal information
				</li>
				<li>
					We regularly test and monitor AI outputs for accuracy and reliability
				</li>
			</UL>

			<H4>Risk mitigation</H4>
			<UL>
				<li>
					We regularly assess and document risks associated with using AI to
					process personal information
				</li>
				<li>We implement appropriate measures to address these risks</li>
				<li>
					We continuously monitor AI performance and regularly review their
					impact
				</li>
			</UL>

			<H2>Amendments</H2>
			<P>
				We may update this policy at any time by posting the revised version on
				our website. We recommend that you review our website regularly to stay
				current with any policy changes.
			</P>

			<Copyright />
		</PolicyLayout>
	);
}
