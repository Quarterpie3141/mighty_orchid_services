// Privacy Collection Notice (LegalVision, 11 September 2026).
// "enquiry" is shown with contact/enquiry forms; "participant" with forms
// for participants signing up for services (e.g. referrals).
export default function CollectionNotice({
	variant = "enquiry",
	className = "",
}: {
	variant?: "enquiry" | "participant";
	className?: string;
}) {
	const link = (
		<a
			href="/policies/privacy"
			className="text-mto-blue hover:text-mto-orange underline"
		>
			Privacy Policy
		</a>
	);

	return (
		<div
			className={`text-xs leading-5 text-coolGray-500 space-y-2 ${className}`}
		>
			<p className="font-semibold text-coolGray-600 uppercase tracking-wide">
				Privacy Collection Notice
			</p>
			{variant === "enquiry" ? (
				<p>
					This Privacy Collection Notice describes how Mighty Orchid Services
					Pty Ltd (ABN 673 232 632) (we, us or our) collects and handles your
					personal information when you make an enquiry with us. We collect
					personal information from you so that we can respond to your enquiry
					and for related purposes set out in our {link}, available on our
					website (or on request).
				</p>
			) : (
				<p>
					This Privacy Collection Notice describes how Mighty Orchid Services
					Pty Ltd (ABN 673 232 632) (we, us or our) collects and handles your
					personal information when you receive disability support from us. We
					collect personal information from you and from third parties (such as
					your healthcare providers, support coordinators, and plan managers) so
					that we can provide disability supports to you and for related
					purposes set out in our {link}, available on our website (or on
					request).
				</p>
			)}
			<p>
				We may disclose this personal information to third parties, including
				our personnel, related entities,{" "}
				{variant === "participant" && "your healthcare providers, "}any third
				parties engaged by us and acting on our behalf and as otherwise set out
				in our Privacy Policy.
			</p>
			<p>
				We store personal information in Australia. Where we disclose your
				personal information to third parties, those third parties may store,
				transfer or access personal information outside of Australia.
			</p>
			<p>
				If you do not provide your personal information to us, it may affect our
				ability to do business with you.
			</p>
			<p>
				Please see our {link} for more information about how we collect, store,
				use and disclose your personal information, including details about
				overseas disclosure, access, correction, how you can make a
				privacy-related complaint and our complaint-handling process.
			</p>
			<p>
				If you have questions about our privacy practices, please contact us by
				email at:{" "}
				<a
					href="mailto:info@mtos.com.au"
					className="text-mto-blue hover:text-mto-orange underline"
				>
					info@mtos.com.au
				</a>
				. By providing your personal information to us, you agree to the
				collection, use, storage and disclosure of that information as described
				in this privacy collection notice.
			</p>
		</div>
	);
}
